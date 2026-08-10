<script lang="ts">
	import ClickableDiv from '$lib/components/ClickableDiv.svelte';

	const apps = [
		{
			sn: '01',
			title: 'Transaction Management',
			desc: 'Management of transactions and analysis through dashboards.',
			href: 'http://localhost:8080',
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
		<div class="time">
			{time.toLocaleDateString('en-US', { weekday: 'short', hour: '2-digit', minute: '2-digit' })}
		</div>
	</div>
</div>

{#snippet item(obj: { sn: string; title: string; desc: string; href: string; styleVar: string })}
	<div >
	<ClickableDiv class="item-container"
		style={obj.styleVar}
		onclick={() => {
			window.location.href = obj.href;
		}}
	>
		<div><span class="item-sn">{obj.sn}</span></div>
		<div class="item-title">{obj.title}</div>
		<div class="item-desc">{obj.desc}</div>
		<div class="item-action">
			<div class="item-ico"><span class="mdi-light--arrow-right"></span></div>
		</div>
	</ClickableDiv>
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
