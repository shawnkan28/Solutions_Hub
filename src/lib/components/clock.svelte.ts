// src/lib/components/clock.svelte.ts
import { SvelteDate } from 'svelte/reactivity';

export function useClock(intervalMs = 1000) {
	const now = new SvelteDate();

	$effect(() => {
		const id = setInterval(() => now.setTime(Date.now()), intervalMs);
		return () => clearInterval(id);
	});

	return now;
}
