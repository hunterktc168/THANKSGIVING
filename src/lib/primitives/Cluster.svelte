<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { SPACE, type Space } from './spacing';

	/**
	 * Cluster — a horizontal, wrapping flex row for groups of inline items
	 * (button rows, tag lists, meta lines). Alignment is token-mapped, never
	 * a raw Tailwind default.
	 */
	type Align = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
	type Justify = 'start' | 'center' | 'end' | 'between';

	let {
		gap = 'sm',
		align = 'center',
		justify = 'start',
		class: className = '',
		children,
		...rest
	}: HTMLAttributes<HTMLElement> & {
		gap?: Space;
		align?: Align;
		justify?: Justify;
		children: Snippet;
	} = $props();

	const ALIGN: Record<Align, string> = {
		start: 'items-start',
		center: 'items-center',
		end: 'items-end',
		baseline: 'items-baseline',
		stretch: 'items-stretch'
	};

	const JUSTIFY: Record<Justify, string> = {
		start: 'justify-start',
		center: 'justify-center',
		end: 'justify-end',
		between: 'justify-between'
	};
</script>

<div class="flex flex-wrap {ALIGN[align]} {JUSTIFY[justify]} {SPACE[gap]} {className}" {...rest}>
	{@render children()}
</div>
