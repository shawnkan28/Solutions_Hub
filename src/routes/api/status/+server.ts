import { json } from '@sveltejs/kit';
import { apps } from '$lib/data/sites';

async function isUp(url: string){
    try {
        const res = await fetch(url, { method: "HEAD", signal: AbortSignal.timeout(3000) });
        return res.status < 500;
    } catch {
        return false;
    }
}

export async function GET() {
    const results = await Promise.all(
        apps.map(async (app) => ({ id: app.id, up: await isUp(app.href)}))
    );
    return json(results);
}