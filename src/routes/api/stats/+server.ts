import { json } from '@sveltejs/kit';
import os from 'node:os';
import { readFile, statfs } from 'node:fs/promises';

function cpuTimes() {
	let idle = 0;
	let total = 0;
	for (const { times } of os.cpus()) {
		idle += times.idle;
		total += times.user + times.nice + times.sys + times.idle + times.irq;
	}
	return { idle, total };
}

async function cpuPercent(sampleMs = 500) {
	const a = cpuTimes();
	await new Promise((r) => setTimeout(r, sampleMs));
	const b = cpuTimes();
	return 100 * (1 - (b.idle - a.idle) / (b.total - a.total));
}

async function memory() {
	try {
		const info = await readFile('/proc/meminfo', 'utf8');
		const kb = (key: string) =>
			Number(info.match(new RegExp(`^${key}:\\s+(\\d+)`, 'm'))?.[1] ?? 0) * 1024;
		const total = kb('MemTotal');
		return { total, used: total - kb('MemAvailable') };
	} catch {
		return { total: os.totalmem(), used: os.totalmem() - os.freemem() };
	}
}

async function temperature() {
	try {
		const raw = await readFile('/sys/class/thermal/thermal_zone0/temp', 'utf8');
		return Number(raw) / 1000;
	} catch {
		return null;
	}
}

async function storage(path = process.env.DISK_PATH ?? '/') {
	const s = await statfs(path);
	const total = s.blocks * s.bsize;
	const free = s.bavail * s.bsize;
	return { total, free, used: total - free };
}

export async function GET() {
	const [cpu, mem, temp, disk] = await Promise.all([
		cpuPercent(),
		memory(),
		temperature(),
		storage()
	]);
	return json({ hostname: os.hostname(), cpu, mem, temp, disk, uptime: os.uptime() });
}
