<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	/**
	 * Heading — decouples SEMANTIC level (document outline) from VISUAL size
	 * (type scale). `level` picks the rendered tag; `visual` optionally
	 * overrides the size so, e.g., an `<h2>` can look like an `<h1>` without
	 * breaking heading order.
	 */
	type Level = 1 | 2 | 3 | 4 | 5 | 6;
	type Visual = '2xs' | 'xs' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

	let {
		level = 2,
		visual,
		class: className = '',
		children,
		...rest
	}: HTMLAttributes<HTMLHeadingElement> & {
		level?: Level;
		visual?: Visual;
		children: Snippet;
	} = $props();

	const DEFAULT_VISUAL: Record<Level, Visual> = {
		1: '4xl',
		2: '3xl',
		3: '2xl',
		4: 'xl',
		5: 'lg',
		6: 'base'
	};

	const VISUAL: Record<Visual, string> = {
		'2xs': 'text-2xs',
		xs: 'text-xs',
		base: 'text-base',
		lg: 'text-lg',
		xl: 'text-xl',
		'2xl': 'text-2xl',
		'3xl': 'text-3xl',
		'4xl': 'text-4xl'
	};

	const tag = $derived(`h${level}` as `h${Level}`);
</script>

<svelte:element this={tag} class="{VISUAL[visual ?? DEFAULT_VISUAL[level]]} text-balance {className}" {...rest}>
	{@render children()}
</svelte:element>
