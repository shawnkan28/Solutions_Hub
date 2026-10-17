<script lang="ts">
	import { useClock } from '$lib/components/clock.svelte';
	import { apps } from '$lib/data/portal-meta';
	import Banner from '$lib/components/Banner.svelte';
	import favicon from '$lib/assets/homebase-icon.svg';

	let y = $state(0); // used to check if scrolled

	const now = useClock();
	const fmt = new Intl.DateTimeFormat('en-US', {
		weekday: 'short',
		hour: '2-digit',
		minute: '2-digit'
	});
	const timelabel = $derived(fmt.format(now));

	// Apps run on the same host as the hub, so reuse its hostname and swap the port.
	function appUrl(port: number) {
		const { protocol, hostname } = window.location;
		return `${protocol}//${hostname}:${port}`;
	}
</script>

<svelte:window bind:scrollY={y} />

<div>
	<div class="nav-wrapper" class:scrolled={y > 4}>
		<div class="nav page">
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
	<div class="container page">
		<!-- BANNER  -->
		<Banner {timelabel} totalOnline={apps.length} />
		
		<!-- SEARCH BAR -->
		<div class="section">
			<span style="font-family: var(--font-family-codish);">
				APPS <span style="letter-spacing: 0; color: var(--text-faint);"
					>{String(apps.length).padStart(2, '0')}</span
				>
			</span>
			<div class="line"></div>
			<input type="text" placeholder="Find an app..." />
		</div>
	</div>
</div>

<style>
	.page {
		max-width: 1250px;
		margin: 0 auto;
	}
	.container {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.nav-wrapper {
		position: sticky;
		top: 0;
		padding: 15px 0;
		transition: all 0.4s ease;
		border-bottom: 1px solid transparent;
	}
	.nav-wrapper.scrolled {
		background: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(16px) saturate(1.4);
		border-bottom-color: var(--border-accent);
	}
	.nav {
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
	}
	.timer {
		border: 1px solid var(--border-color);
		color: var(--text-accent);
		padding: 10px 15px;
		font-size: 0.9rem;
		border-radius: 30px;
		line-height: 1;
		background: var(--bg-accent);
		font-family: var(--font-family-codish);
	}
	.toggle-icon {
		color: white;
		width: 35px;
		height: 35px;
		border: 1px solid var(--border-color);
		padding: 8px;
		border-radius: 50%;
		background: var(--bg-accent);
	}
	.toggle-icon:hover {
		border-color: var(--border-accent);
	}
	.section {
		display: flex;
		gap: 20px;
		align-items: center;
		font-size: 0.9rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		color: var(--text-accent);
	}
	.line {
		flex: 1;
		min-width: 50px;
		height: 0;
		border-bottom: 1px solid var(--border-color);
	}
</style>
