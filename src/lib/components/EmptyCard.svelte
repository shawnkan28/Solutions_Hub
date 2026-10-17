<script lang="ts">
	const { numEmpty }: { numEmpty: number } = $props();
</script>

<div class="wrapper">
	{#each { length: numEmpty }, i}
		<div class="empty-card">
			<div style="display: flex; align-items: center; justify-content: space-between;">
				<div class="sn">{String(numEmpty - i + 2).padStart(2, '0')}</div>
				<div class="add-icon">
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg
					>
				</div>
			</div>
			<div style="flex: 1;"></div>
			<div class="title">Coming Soon</div>
			<div class="desc">Reserved for a future tool</div>
		</div>
	{/each}
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: 30px;
	}
	.empty-card {
		border: 1px dashed var(--text-faint);
		background: var(--bg-accent);
        opacity: .5;
		padding: 1rem 1.1rem;
		border-radius: 15px;
		height: 150px;
		display: flex;
		flex-direction: column;
        color: var(--text-faint);
	}
    .empty-card .sn {
        font-family: var(--font-family-codish);
        font-size: 0.95rem;
    }
    .empty-card .add-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 26px;
        height: 26px;
        border: 1px dashed var(--text-faint);
        border-radius: 50%;
    }
    .empty-card .add-icon svg {
        width: 12px;
        height: 12px;
        color: var(--text-accent);
    }
    .empty-card .title {
        color: var(--text-accent);
        font-weight: bold;
        font-size: 1.2rem;
    }
</style>
