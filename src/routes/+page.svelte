<script lang="ts">
	// import { env } from '$env/dynamic/public';
	import Card from '$lib/components/Card.svelte';
	import { SITES } from '$lib/data/sites';

	// const siteURL = env.PUBLIC_SITE_URL ?? 'localhost';

	const time = new Date();
</script>

<div class="wrapper">
	<div class="container">
		<div class="title">
			<div class="head">
				Solutions <div class="sub-head">Hub</div>
			</div>
			<div class="desc">Open any tool from one place.</div>
		</div>
		<div class="content">
			{#each SITES as site (site.id)}
				<div>
					<Card {...site} />
				</div>
			{/each}
		</div>
		<div class="footer">
			<div>
				<span class="head">Hub</span> · six solutions, one entry point
			</div>
			<div class="time">
				{time.toLocaleDateString('en-US', { weekday: 'short', hour: '2-digit', minute: '2-digit' })}
			</div>
		</div>
	</div>
</div>

<style>
	.wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: clamp(2rem, 5vh, 3.5rem);
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
	}
	.container {
		max-width: 1100px;
		margin: 0 auto;
		padding: clamp(2rem, 6vh, 4.5rem);
	}
	/*  ##########################################################################
        The header section of the page. Where the title is in + the desc of the app 
        ########################################################################## */
	.title {
		line-height: 0.95;
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
	}
	.title .head {
		/* clamp works by (minimum, preferred, maximum) */
		font-size: clamp(2rem, 6vw, 3.4rem);
		font-weight: 600;
	}
	.title .sub-head {
		font-weight: 700;
		font-size: clamp(3.2rem, 10.5vw, 6rem);
	}
	.title .desc {
		font-weight: 400;
		font-size: clamp(0.95rem, 2vw, 1.05rem);
		color: #6b6f7a;
	}

	/* ########################################################################## */
	/* Layout of content navigation button */
	/* ########################################################################## */
	.content {
		margin-top: clamp(2rem, 5vh, 3.5rem);
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
	}

	/* ########################################################################## */
	/* The footer where the additional details are in */
	/* ########################################################################## */
	.footer {
		margin-top: clamp(2rem, 5vh, 3.5rem);
		padding-top: 0.5rem;
		border-top: 1px solid rgba(120, 100, 140, 0.14);
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 0.8rem;
		color: #6b6f7a;
	}
	.footer .head {
		color: #2b2d33;
		font-weight: 500;
	}
</style>
