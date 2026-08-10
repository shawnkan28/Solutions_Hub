<script lang="ts">
	const apps = [
		{
			sn: '01',
			title: 'Analytics',
			desc: 'Dashboards, trends, and live metrics',
			href: '',
			styleVar: '--color-light: #ffe4ea; --color-dark: #e85a7a'
		},
		{
			sn: '02',
			title: 'Inventory',
			desc: 'Stock levels, SKUs, and warehouse flow.',
			href: '',
			styleVar: '--color-light: #fff0cc; --color-dark: #e0a020;'
		},
		{
			sn: '03',
			title: 'CRM',
			desc: 'Contacts, pipelinem and follow-ups',
			href: '',
			styleVar: '--color-light: #d9f2e8; --color-dark: #2f9e75;'
		},
		{
			sn: '04',
			title: 'Reports',
			desc: 'Scheduled exports and printable summaries.',
			href: '',
			styleVar: '--color-light: #dde8f8; --color-dark: #4a7fd4;'
		},
		{
			sn: '05',
			title: 'Automation',
			desc: 'Workflows, triggers, and batch jobs',
			href: '',
			styleVar: '--color-light: #ebe0f7; --color-dark: #9b6bc9;'
		},
		{
			sn: '06',
			title: 'Admin',
			desc: 'Users, permission, and system settings',
			href: '',
			styleVar: '--color-light: #ffe0d6; --color-dark: #e85a3c;'
		}
	];
	const time = new Date();
</script>

<div class="container">
	<div class="title">
		<div class="head">
			Solutions <div class="sub-head">Hub</div>
		</div>
		<div class="desc">Open any tool from one place.</div>
	</div>
	<div class="content">
		{#each apps as app (app.title)}
			<div>
				{@render item(app)}
			</div>
		{/each}
	</div>
	<div class="footer">
		<div>
			<span class="head">Hub</span> · six solutions, one entry point
		</div>
		<div class="time">{time.toLocaleDateString('en-US', {weekday: 'short', hour: '2-digit', minute: '2-digit'})}</div>
	</div>
</div>

{#snippet item(obj: { sn: string; title: string; desc: string; href: string; styleVar: string })}
	<div class="item-container" style={obj.styleVar}>
		<div><span class="item-sn">{obj.sn}</span></div>
		<div class="item-title">{obj.title}</div>
		<div class="item-desc">{obj.desc}</div>
		<div class="item-action">
			<div class="item-ico"><span class="mdi-light--arrow-right"></span></div>
		</div>
	</div>
{/snippet}

<style>
	.container {
		flex: 1;
		max-width: 1100px;
		margin: 0 auto;
		padding: clamp(2rem, 6vh, 4.5rem);
		display: flex;
		flex-direction: column;
		gap: clamp(2rem, 5vh, 3.5rem);
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
	/*  ##########################################################################
        Layout of content navigation button
        ########################################################################## */
	.content {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
	}

	/*  ##########################################################################
        The navigation item that users are required to interact with
        ########################################################################## */
	.item-container {
		background: var(--color-light);
		border-radius: 16px;
		border: 1px solid rgba(120, 100, 140, 0.14);
		padding: 1.2rem 1.15rem 1.15rem;
		display: flex;
		flex-direction: column;
		gap: 0.55rem;
		transition:
			transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
			box-shadow 0.28s ease,
			border-color 0.28s ease,
			filter 0.28s ease;
	}
	.item-container:hover {
		box-shadow: 0 2px 10px rgba(120, 90, 130, 0.06);
		border-color: var(--color-dark);
		cursor: pointer;
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
	.item-container:hover .item-ico {
		color: white;
		background-color: var(--color-dark);
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
	/*  ##########################################################################
        The footer where the additional details are in
        ########################################################################## */
	.footer {
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
