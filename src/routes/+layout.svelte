<script lang="ts">
	import favicon from '$lib/assets/homebase-icon.svg';
	import '$lib/theme.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
