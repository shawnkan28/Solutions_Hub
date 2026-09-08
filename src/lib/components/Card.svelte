<script lang="ts">
	let {
		sn,
		title,
		desc,
		href,
		styleVar
	}: { sn: string; title: string; desc: string; href: string; styleVar: string } = $props();
</script>

<div>
	<button
		class={sn !== 'TBD' ? 'item-container' : 'item-container tbd'}
		style={styleVar}
		onclick={() => {
			window.location.href = href;
		}}
	>
		<div><span class="item-sn">{sn !== 'TBD' ? sn : '-'}</span></div>
		<div class="item-title">{sn !== 'TBD' ? title : 'TBD'}</div>
		<div class="item-desc">{sn !== 'TBD' ? desc : 'To Be Done'}</div>
		<div class="item-action">
			<div class="item-ico"><span class="mdi-light--arrow-right"></span></div>
		</div>
	</button>
</div>

<style>
	/* ########################################################################## */
	/* Overall Styling */
	/* ########################################################################## */
	.item-container {
		background: var(--color-light);
		border-radius: 16px;
		border: 1px solid rgba(120, 100, 140, 0.14);
		padding: 1.2rem 1.15rem 1.15rem;
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		width: 100%;
		transition:
			transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
			box-shadow 0.28s ease,
			border-color 0.28s ease,
			filter 0.28s ease;
	}
	.item-sn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0 0.7rem;
		border-radius: 6px;
		background: var(--color-dark);
		font-weight: 700;
		color: white;
		font-size: 0.68rem;
		height: 1.35rem;
	}
	.item-title {
		font-size: clamp(1.15rem, 2.2vw, 1.35rem);
		font-weight: 700;
		line-height: 1.2;
	}
	.item-desc {
		font-size: 0.88rem;
		color: #6b6f7a;
		height: 2rem;
	}
	.item-action {
		display: flex;
		flex-direction: row-reverse;
	}
	.item-ico {
		display: flex;
		width: 2rem;
		height: 2rem;
		align-items: center;
		justify-content: center;
		border-radius: 100%;
		border: 1px solid color-mix(in srgb, var(--color-dark) 40%, white);
		background-color: white;
		color: var(--color-dark);
		transition:
			background 0.25s ease,
			color 0.25s ease,
			transform 0.25s ease,
			border-color 0.25s ease;
	}

	.mdi-light--arrow-right {
		display: inline-block;
		width: 1em;
		height: 1em;
		--svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z'/%3E%3C/svg%3E");
		background-color: currentColor;
		-webkit-mask-image: var(--svg);
		mask-image: var(--svg);
		-webkit-mask-repeat: no-repeat;
		mask-repeat: no-repeat;
		-webkit-mask-size: 100% 100%;
		mask-size: 100% 100%;
	}

	/* ########################################################################## */
	/* Hover Animation */
	/* ########################################################################## */
	.item-container:not(.tbd):hover .item-ico {
		color: white;
		background-color: var(--color-dark);
	}
	.item-container:not(.tbd):hover {
		box-shadow: 0 2px 10px rgba(120, 90, 130, 0.06);
		border-color: var(--color-dark);
		cursor: pointer;
	}

	/* ########################################################################## */
	/* TBD */
	/* ########################################################################## */
	.item-container.tbd {
		background-color: #ececee;
		cursor: default !important;
		pointer-events: none;
	}
	.tbd .item-sn {
		background-color: #9a9aa3;
	}
	.tbd .item-ico {
		background: #9a9aa3;
		border: 1px solid #ececee;
		color: white;
	}
	.item-container:not(.tbd):hover .item-ico {
		color: white;
		background-color: var(--color-dark);
	}
</style>
