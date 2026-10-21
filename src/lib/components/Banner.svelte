<script lang="ts">
	let {
		timelabel,
		online = 0,
		totalOnline = 0,
		offline = 0,
		slots = 0
	}: {
		timelabel: string;
		online?: number;
		totalOnline?: number;
		offline?: number;
		slots?: number;
	} = $props();

	type Stats = {
		hostname: string;
		cpu: number;
		mem: { total: number; used: number };
		temp: number | null;
		disk: { total: number; free: number; used: number };
		uptime: number;
		perc: { mem: number; temp: number; disk: number };
	};
	let stats = $state<Stats | null>(null);

	$effect(() => {
		const load = async () => {
			const res = await fetch('/api/stats');
			if (res.ok) {
				stats = await res.json();
			}
		};
		load();
		const id = setInterval(load, 5000);
		return () => clearInterval(id);
	});
	const gb = (bytes: number) => (bytes / 1024 ** 3).toFixed(1);
</script>

<div class="banner">
	{@render leftSide(timelabel)}
	{@render rightSide()}
	{@render underSide()}
</div>

{#snippet underSide()}
	<div style="display: flex; flex-direction: column; width: 100%; gap: 15px;">
		<div class="line"></div>
		<div class="stats">
			{#if stats}
				<div style="display: flex; align-items: center; gap: 10px;">
					<span class="dot green" style="margin-bottom: 1px;"></span>
					<div class="value">{stats.hostname}</div>
				</div>
				<div>
					<div>
						<label for="">CPU</label>
						<div class="value">{stats?.cpu.toFixed(0)}%</div>
					</div>
					<div class="pbar">
						<span class={stats.cpu > 90 ? "progress high" : stats.cpu > 70 ? " progress med" : "progress low"} style:width="{stats?.cpu.toFixed(0)}%"></span>
					</div>
				</div>
				<div>
					<div>
						<label for="">RAM</label>
						<div class="value">
							{gb(stats?.mem.used)} <span class="sub">/ {gb(stats?.mem.total)} GB</span>
						</div>
					</div>
					<div class="pbar">
						<span class={stats.perc.mem > 80 ? "progress high" : stats.perc.mem > 60 ? "progress med" : "progress low"} style:width="{stats.perc.mem}%"
						></span>
					</div>
				</div>
				<div>
					<div>
						<label for="">TEMP</label>
						<div class="value">{stats.temp?.toFixed(1) ?? '-'}°C</div>
					</div>
					<div class="pbar">
						<span class={stats.perc.temp > 80 ? "progress high" : stats.perc.temp > 60 ? "progress med" : "progress low" } style:width="{stats.perc.temp}%"></span>
					</div>
				</div>
				<div>
					<div>
						<label for="">DISK</label>
						<div class="value">{gb(stats.disk.free)} <span class="sub">GB free</span></div>
					</div>
					<div class="pbar">
						<span class={stats.perc.disk > 50 ? "progress low" : stats.perc.disk > 25 ? "progress med" : "progress high"} style:width="{stats.perc.disk}%"></span>
					</div>
				</div>
			{/if}
		</div>
	</div>
{/snippet}

{#snippet leftSide(timelabel: string)}
	<div class="left-side">
		<span style="font-size: 0.9rem; color: var(--text-accent);">
			{timelabel.includes('AM') ? 'Good Morning' : 'Good Evening'}
		</span>
		<div style="display: flex;">
			<h1 class="title">Homebase</h1>
			<div class="big-dot"></div>
		</div>
		<span style="color: var(--text-accent); margin-top: 20px;">Homelab dashboard.</span>
	</div>
{/snippet}

{#snippet rightSide()}
	<div class="right-side">
		<div class="card-container">
			<div class="card">
				<div><span class="dot green"></span>ONLINE</div>
				<span class="accent">{online}</span>
				<span style="color: var(--text-faint);">/{totalOnline}</span>
			</div>
			<div class="card">
				<div><span class="dot red"></span>OFFLINE</div>
				<span class="accent">{offline}</span>
			</div>
			<div class="card">
				<div><span class="dot"></span>SLOTS</div>
				<span class="accent">{slots}</span>
			</div>
		</div>
		<div style="display: flex; flex-direction: row-reverse;">
			<button>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"><path d="M21 12a9 9 0 1 1-2.6-6.4M21 4v5h-5" /></svg
				>
				Refresh
			</button>
		</div>
	</div>
{/snippet}

<style>
	/* ############################################################################# */
	/* BANNER */
	/* ############################################################################# */
	.banner {
		position: relative;
		border: 1px solid var(--border-color);
		border-radius: 20px;
		padding: 3rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: rgba(30, 28, 38, 0.4);
		overflow: hidden;
		flex-wrap: wrap;
		gap: 20px;
	}
	/* This adds the gradient look */
	.banner::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background-image: radial-gradient(rgba(255, 255, 255, 0.16) 1px, transparent 1px);
		background-size: 20px 20px;
		-webkit-mask-image: linear-gradient(105deg, transparent 30%, #000 100%);
		mask-image: linear-gradient(105deg, transparent 30%, #000 100%);
	}
	/* This adds the bloom at the top corner */
	.banner::after {
		content: '';
		position: absolute;
		top: -220px;
		right: -140px;
		width: 460px;
		aspect-ratio: 1;
		z-index: -1;
		border-radius: 50%;
		background: radial-gradient(
			closest-side,
			rgba(232, 90, 122, 0.26),
			rgba(224, 160, 32, 0.08) 60%,
			transparent
		);
	}
	.big-dot {
		display: flex;
		background-color: orange;
		padding: 2px;
		width: 15px;
		height: 15px;
		align-self: flex-end;
		border-radius: 50%;
	}
	.left-side {
		display: flex;
		flex-direction: column;
		min-width: 530px;
	}
	.title {
		margin: 0;
		font-size: clamp(2.5rem, 8vw, 5.5rem);
		line-height: 1;
		letter-spacing: -0.035em;
	}
	/* ############################################################################# */
	/* STATUS CARD */
	/* ############################################################################# */
	.right-side {
		flex: 1 1 500px;
	}
	.card-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(max(150px, (100% - 2 * 20px) / 3), 1fr));
		gap: 20px;
		margin-bottom: 20px;
		width: 100%;
	}
	.card {
		border: 1px solid var(--border-color);
		padding: 1rem;
		border-radius: 15px;
		background: var(--bg-accent);
		color: var(--text-accent);
		letter-spacing: 0.1em;
	}
	.card div {
		display: flex;
		align-items: center;
		gap: 5px;
		font-size: 0.7rem;
		letter-spacing: 0.1em;
		line-height: 1;
		font-weight: 600;
		margin-bottom: 5px;
	}
	.card .accent {
		font-size: 1.8rem;
		font-weight: bold;
	}
	button {
		display: flex;
		background: var(--bg-accent);
		border: 1px solid var(--border-color);
		padding: 5px 10px;
		font-size: 0.8rem;
		align-items: center;
		gap: 8px;
		line-height: 1;
		border-radius: 20px;
		color: var(--text-accent);
		font-weight: 400;
		letter-spacing: 0.1rem;
		transition: 0.1s ease all;
	}
	button svg {
		width: 0.9rem;
		height: 0.9rem;
	}
	button:hover {
		color: white;
		border-color: var(--border-accent);
	}
	/* ############################################################################# */
	/* STATS FOR MACHINE */
	/* ############################################################################# */
	.stats {
		align-items: flex-end;
		display: flex;
		gap: 20px;
	}
	.stats > div {
		flex: 1;
	}
	.stats > div > div {
		flex: 1;
		display: flex;
		gap: 5px;
		align-items: flex-end;
	}
	.stats label {
		color: var(--text-accent);
		font-size: 0.7rem;
		font-weight: 600;
		flex: 1;
	}
	.stats .value {
		font-family: var(--font-family-codish);
		font-size: 0.85rem;
		font-weight: 600;
	}
	.stats .sub {
		margin-left: 2px;
		color: var(--text-faint);
	}
	.pbar {
		margin-top: 5px;
		height: 5px;
		border-radius: 999px;
		background: var(--border-color);
		overflow: hidden;
	}
	.progress {
		height: 100%;
		background: var(--border-accent);
		border-radius: 999px;
		transition: width .3s ease-in-out;
	}
	.progress.high {
		background-color: var(--error);
	}
	.progress.low {
		background-color: var(--success);
	}
	.progress.med {
		background-color: var(--warning);
	}
</style>
