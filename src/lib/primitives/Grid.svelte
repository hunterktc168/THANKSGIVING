<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { SPACE, type Space } from './spacing';

	/**
	 * Grid — the vault's canonical responsive grid (locked decision #5):
	 * `repeat(auto-fit, minmax(min(100%, var(--grid-min)), 1fr))`.
	 * Columns are derived from the `--grid-min` token, not a fixed count, so
	 * layouts reflow without breakpoints.
	 */
	let {
		gap = 'md',
		class: className = '',
		children,
		...rest
	}: HTMLAttributes<HTMLElement> & { gap?: Space; children: Snippet } = $props();
</script>

<div class="grid grid-cols-auto {SPACE[gap]} {className}" {...rest}>
	{@render children()}
</div>
