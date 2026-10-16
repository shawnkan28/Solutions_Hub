<script lang="ts">
	import { useClock } from '$lib/components/clock.svelte';
	import { apps } from '$lib/data/portal-meta';
	import favicon from '$lib/assets/homebase-icon.svg';

	const now = useClock();
	const fmt = new Intl.DateTimeFormat('en-US', {
		weekday: 'short',
		hour: '2-digit',
		minute: '2-digit'
	});
	const timelabel = $derived(fmt.format(now));

	const time = new Date();

	// Apps run on the same host as the hub, so reuse its hostname and swap the port.
	function appUrl(port: number) {
		const { protocol, hostname } = window.location;
		return `${protocol}//${hostname}:${port}`;
	}
</script>

<div class="container">
	<div class="nav">
		<button class="home-btn">
			<img src={favicon} alt="" /> <span>Homebase</span>
		</button>
		<div style="display: flex; gap: 10px; align-items: center;">
			<div class="timer">{timelabel}</div>
			<button class="toggle-icon" aria-label="Toggle color theme">
				<svg
					class="moon"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg
				>
			</button>
		</div>
	</div>
</div>

<style>
	.container {
		max-width: 1000px;
		margin: 0 auto;
	}
	.nav {
		padding: 10px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.home-btn {
		display: flex;
		align-items: center;
		gap: 10px;
		font-weight: bold;
		font-size: 1.1rem;
		color: white;
	}
	.timer {
		border: 1px solid var(--border-color);
		color: var(--accent-color);
		padding: 10px 15px;
		font-size: .9rem;
		border-radius: 30px;
		line-height: 1;
		background: var(--accent-bg);
		font-family: 'JetBrains Mono', ui-monospace, 'Cascadia Code', Consolas, monospace;
	}
	.toggle-icon {
		color: var(--accent-color);
		width: 35px;
		height: 35px;
		border: 1px solid var(--border-color);
		padding: 8px;
		border-radius: 50%;
		background: var(--accent-bg);
	}
</style>
