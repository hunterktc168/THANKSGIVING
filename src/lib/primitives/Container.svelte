<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	/**
	 * Container — constrains content width and applies the horizontal gutter
	 * contract (tighter on mobile, roomier from `md` up).
	 */
	type Size = 'narrow' | 'content' | 'wide' | 'full';

	let {
		size = 'content',
		class: className = '',
		children,
		...rest
	}: HTMLAttributes<HTMLElement> & { size?: Size; children: Snippet } = $props();

	const WIDTH: Record<Size, string> = {
		narrow: 'max-w-narrow',
		content: 'max-w-content',
		wide: 'max-w-wide',
		full: 'max-w-none'
	};
</script>

<div class="mx-auto w-full {WIDTH[size]} px-md md:px-lg {className}" {...rest}>
	{@render children()}
</div>
