<script lang="ts">
	import { apps } from '$lib/data/sites';

	const { statuses }: { statuses: Record<number, boolean> } = $props();

	function clickApp(url: string) {
		window.location.href = url;
	}
</script>

<div class="wrapper">
	{#each apps as app (app.id)}
		{@render appCard(app)}
	{/each}
</div>

{#snippet appCard(data: {
	id: number;
	styleVar: string;
	sn: string;
	title: string;
	desc: string;
	href: string;
})}
	<button class="card" style={data.styleVar} onclick={() => clickApp(data.href)}>
		<span class="bg-sn">{data.sn}</span>
		<div style="margin-bottom: 10px; display: flex; justify-content: space-between;">
			<div><span class="sn">{data.sn}</span></div>
			<span class="status">
				<div class={statuses[data.id] ? 'dot green' : 'dot red'} style="margin-top: 2px;"></div>
				{statuses[data.id] ? 'Online' : 'Offline'}
			</span>
		</div>
		<div style="margin-bottom: 15px;"><span class="title">{data.title}</span></div>
		<div><span class="desc">{data.desc}</span></div>
		<div style="flex: 1;"></div>
		<div style="display: flex; justify-content: space-between;">
			<span class="href">↗ {data.href.replace('http://', '')}</span>
			<div class="open-btn">
				Open<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg
				>
			</div>
		</div>
	</button>
{/snippet}

<style>
	.wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
		gap: 30px;
	}
	.card {
		padding: 1rem;
		border: 1px solid var(--color-border);
		background: var(--color-bg);
		padding: 1.4rem 1.4rem 1.2rem;
		border-radius: 22px;
		height: 250px;
		display: flex;
		position: relative;
		flex-direction: column;
		transition: all ease 0.2s;
	}
	.card:hover {
		transform: translateY(-5px);
		border-color: color-mix(in srgb, var(--color-base) 45%, transparent);
		box-shadow:
			0 2px 4px rgba(0, 0, 0, 0.04),
			0 24px 48px -20px color-mix(in srgb, var(--color-base) 60%, transparent);
	}
	.card .bg-sn {
		position: absolute;
		top: 0.2rem;
		right: 1rem;
		font-weight: bold;
		font-size: 6rem;
		line-height: 1;
		opacity: 0.1;
		color: var(--color-base);
		letter-spacing: -0.1em;
	}
	.card .sn {
		background: var(--color-base);
		font-family: var(--font-family-codish);
		padding: 5px 10px;
		border-radius: 8px;
		font-size: 0.8rem;
	}
	.card .status {
		display: flex;
		align-items: center;
		border-radius: 20px;
		background: var(--bg-accent);
		padding: 5px 15px;
		opacity: 1;
		z-index: 2;
		gap: 5px;
		line-height: 1;
		color: var(--text-accent);
	}
	.card .title {
		font-size: 1.5rem;
		font-weight: bold;
		width: 60%;
		display: inline-block;
	}
	.card .desc {
		color: var(--text-accent);
	}
	.card .href {
		color: var(--color-hyper);
		font-family: var(--font-family-codish);
		font-size: 0.8rem;
	}
	.open-btn {
		width: 80px;
		background: var(--text);
		color: var(--color-bg);
		padding: 6px 12px;
		border-radius: 50px;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2px;
		font-size: 0.9rem;
		transition: all ease 0.2s;
	}
	.card:hover .open-btn {
		background: var(--color-base);
		gap: 6px;
		color: var(--text);
	}
	.open-btn svg {
		margin-top: 2px;
		width: 16px;
		height: 16px;
	}
</style>
