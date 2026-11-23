<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	/**
	 * Section — a full-width vertical band with a background ROLE and fluid
	 * vertical rhythm. `fullBleed` breaks out of a constrained ancestor so the
	 * band spans the viewport while its inner Container keeps the gutter.
	 */
	type Tone = 'canvas' | 'surface' | 'surface-raised' | 'surface-sunken' | 'brand' | 'accent';
	type Space = 'none' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

	let {
		tone = 'canvas',
		space = '2xl',
		fullBleed = false,
		class: className = '',
		children,
		...rest
	}: HTMLAttributes<HTMLElement> & {
		tone?: Tone;
		space?: Space;
		fullBleed?: boolean;
		children: Snippet;
	} = $props();

	// tone carries BOTH background and the matching foreground role.
	const TONE: Record<Tone, string> = {
		canvas: 'bg-canvas text-content',
		surface: 'bg-surface text-content',
		'surface-raised': 'bg-surface-raised text-content',
		'surface-sunken': 'bg-surface-sunken text-content',
		brand: 'bg-brand text-brand-content',
		accent: 'bg-accent text-accent-content'
	};

	const PAD: Record<Space, string> = {
		none: 'py-0',
		md: 'py-md',
		lg: 'py-lg',
		xl: 'py-xl',
		'2xl': 'py-2xl',
		'3xl': 'py-3xl'
	};
</script>

<section
	class="{TONE[tone]} {PAD[space]} {fullBleed ? 'bleed' : 'w-full'} {className}"
	{...rest}
>
	{@render children()}
</section>
