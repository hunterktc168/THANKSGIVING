<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { SPACE, type Space } from './spacing';

	/**
	 * Stack — a strictly vertical flex column. The only knob is `gap`, so
	 * vertical rhythm is always expressed in spacing tokens.
	 */
	let {
		gap = 'md',
		class: className = '',
		children,
		...rest
	}: HTMLAttributes<HTMLElement> & { gap?: Space; children: Snippet } = $props();
</script>

<div class="flex flex-col {SPACE[gap]} {className}" {...rest}>
	{@render children()}
</div>
