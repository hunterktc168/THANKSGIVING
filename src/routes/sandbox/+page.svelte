<script lang="ts">
	import { brands, toStyle } from '$lib/brands';
	import { prefersReducedMotion } from '$lib/motion.svelte';
	import IconArrowRight from '~icons/vault/arrow-right';

	/**
	 * Token validation surface.
	 *
	 * The SAME primitive markup is rendered once per brand. Only the wrapper's
	 * token overrides differ — if the two panels look like different websites,
	 * the abstraction holds. If they look identical, a token is not being
	 * consumed somewhere.
	 */
	type Theme = 'light' | 'dark';

	const themes: Theme[] = ['light', 'dark'];
	const sampledTokens = ['--dur-base', '--ease-standard', '--radius-md', '--motion-distance'] as const;

	let theme = $state<Theme>('light');

	$effect(() => {
		theme = (document.documentElement.getAttribute('data-theme') as Theme) ?? 'light';
	});

	function setTheme(next: Theme) {
		theme = next;
		document.documentElement.setAttribute('data-theme', next);
		document.documentElement.style.colorScheme = next;
		try {
			localStorage.setItem('vault-theme', next);
		} catch {
			/* storage unavailable — non-fatal */
		}
	}
</script>

<svelte:head>
	<title>Sandbox · Token Validation</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="min-h-screen bg-canvas text-content">
	<header class="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-sm px-md py-sm">
		<div>
			<h1 class="text-lg">Token Validation Sandbox</h1>
			<p class="text-2xs text-content-subtle">
				Same primitives · two brand presets · reduced motion:
				{prefersReducedMotion.reduced ? 'on' : 'off'}
			</p>
		</div>

		<div
			class="flex items-center gap-3xs rounded-full border border-border bg-surface p-3xs"
			role="group"
			aria-label="Theme"
		>
			{#each themes as option (option)}
				<button
					type="button"
					aria-pressed={theme === option}
					onclick={() => setTheme(option)}
					class="rounded-full px-sm py-3xs text-2xs font-semibold capitalize transition-colors duration-fast ease-standard {theme === option
						? 'bg-brand text-brand-content'
						: 'text-content-muted hover:bg-surface-sunken'}"
				>
					{option}
				</button>
			{/each}
		</div>
	</header>

	<main class="mx-auto grid max-w-[90rem] gap-md px-md pb-2xl md:grid-cols-2">
		{#each brands as brand (brand.id)}
			<section
				data-testid="brand-panel"
				data-brand={brand.id}
				class="overflow-hidden rounded-lg border border-border bg-canvas text-content shadow-sm"
				style={toStyle(brand)}
			>
				<div class="flex items-center justify-between gap-xs border-b border-border bg-surface px-sm py-xs">
					<div>
						<p class="text-2xs uppercase tracking-widest text-content-subtle">
							{brand.motion} motion
						</p>
						<h2 class="text-xl">{brand.label}</h2>
					</div>
					<span class="rounded-full bg-brand px-xs py-3xs text-2xs font-semibold text-brand-content">
						{brand.id}
					</span>
				</div>

				<div class="flex flex-col gap-md p-sm">
					<p class="measure text-content-muted">{brand.description}</p>

					<div class="flex flex-wrap items-center gap-xs">
						<button
							type="button"
							class="inline-flex items-center gap-3xs rounded-md bg-brand px-sm py-xs font-semibold text-brand-content shadow-sm transition-[transform,box-shadow] duration-base ease-emphasized hover:-translate-y-3xs hover:shadow-lg"
						>
							Primary
							<IconArrowRight class="size-[1em]" />
						</button>
						<button
							type="button"
							class="inline-flex items-center rounded-md border border-border-strong px-sm py-xs font-medium text-content transition-colors duration-base ease-standard hover:bg-surface-sunken"
						>
							Secondary
						</button>
						<span class="rounded-full bg-accent px-xs py-3xs text-2xs font-semibold text-accent-content">
							Badge
						</span>
					</div>

					<div class="vault-grid">
						{#each ['Alpha', 'Beta', 'Gamma', 'Delta'] as swatch (swatch)}
							<article class="rounded-md border border-border bg-surface-raised p-sm shadow-sm">
								<h3 class="text-base">{swatch}</h3>
								<p class="mt-3xs text-2xs text-content-subtle">Token-driven card.</p>
							</article>
						{/each}
					</div>

					<dl class="grid grid-cols-2 gap-2xs text-2xs">
						{#each sampledTokens as token (token)}
							<div class="rounded-sm bg-surface-sunken p-xs">
								<dt class="text-content-subtle">{token}</dt>
								<dd class="font-mono break-all">{brand.tokens[token] ?? '—'}</dd>
							</div>
						{/each}
					</dl>
				</div>
			</section>
		{/each}
	</main>
</div>
