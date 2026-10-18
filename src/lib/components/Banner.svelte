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
</script>

<div class="banner">
	{@render leftSide(timelabel)}
	{@render rightSide()}
</div>

{#snippet leftSide(timelabel: string)}
	<div class="left-side">
		<span style="font-size: 0.9rem; color: var(--text-accent);">
			{timelabel.includes('AM') ? 'Good Morning' : 'Good Evening'}
		</span>
		<div style="display: flex;">
			<h1 class="title">
				Homebase
			</h1>
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
				<span class="accent">{online}</span><span style="color: var(--text-faint);"
					>/{totalOnline}</span
				>
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
</style>
