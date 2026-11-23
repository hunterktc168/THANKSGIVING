/**
 * The brand contract.
 *
 * A brand preset is a *partial* override of the semantic token schema defined
 * in src/app.css. Every key here MUST exist in the schema — the union below is
 * the allow-list, so a typo like `--surfice` fails type-checking.
 */
export type BrandToken =
	// color (RGB channel triplets: "24 24 27")
	| '--canvas'
	| '--surface'
	| '--surface-raised'
	| '--surface-sunken'
	| '--content'
	| '--content-muted'
	| '--content-subtle'
	| '--content-inverse'
	| '--border'
	| '--border-strong'
	| '--brand'
	| '--brand-content'
	| '--accent'
	| '--accent-content'
	| '--focus-ring'
	| '--overlay'
	// typography
	| '--font-sans'
	| '--font-display'
	| '--font-mono'
	| '--leading-tight'
	| '--leading-snug'
	| '--leading-normal'
	| '--leading-relaxed'
	| '--measure'
	// radius & elevation
	| '--radius-sm'
	| '--radius-md'
	| '--radius-lg'
	| '--radius-xl'
	| '--shadow-sm'
	| '--shadow-md'
	| '--shadow-lg'
	// motion
	| '--dur-fast'
	| '--dur-base'
	| '--dur-slow'
	| '--ease-standard'
	| '--ease-emphasized'
	| '--ease-entrance'
	| '--motion-scale'
	| '--motion-distance'
	// layout
	| '--grid-min'
	| '--grid-gap';

/** Coarse motion character — drives scroll-linked effect opt-in, not CSS. */
export type MotionProfile = 'high' | 'quiet';

export interface BrandPreset {
	/** Stable slug, also used as the wrapper class / test id. */
	id: string;
	/** Human label shown in the sandbox. */
	label: string;
	/** One-line description of the brand's visual character. */
	description: string;
	/** Motion character for JS-conditional effects. */
	motion: MotionProfile;
	/** Partial overrides of the schema in src/app.css. */
	tokens: Partial<Record<BrandToken, string>>;
}
