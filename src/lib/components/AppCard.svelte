<script lang="ts">
	import { apps } from '$lib/data/sites';
</script>

<div class="wrapper">
	{#each apps as app (app.id)}
		{@render appCard(app)}
	{/each}
</div>

{#snippet appCard(data: {
	styleVar: string;
	sn: string;
	title: string;
	desc: string;
	href: string;
})}
	<button class="card" style={data.styleVar}>
		<div style="margin-bottom: 10px;"><span class="sn">{data.sn}</span></div>
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
		grid-template-columns: 1fr 1fr 1fr;
		gap: 10px;
	}
	.card {
		padding: 1rem;
		border: 1px solid var(--color-border);
		background: var(--color-bg);
		padding: 1.4rem 1.4rem 1.2rem;
		border-radius: 22px;
		height: 250px;
		display: flex;
		flex-direction: column;
	}
	.card .sn {
		background: var(--color-base);
		font-family: var(--font-family-codish);
		padding: 5px 10px;
		border-radius: 8px;
		font-size: 0.8rem;
	}
	.card .title {
		font-size: 1.5rem;
		font-weight: bold;
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
        background: var(--text);
        color: var(--color-bg);
        padding: 6px 12px;
        border-radius: 50px;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9rem;
    }
    .open-btn svg {
        margin-top: 2px;
        width: 16px;
        height: 16px;
    }
</style>
