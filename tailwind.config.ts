import type { Config } from 'tailwindcss';

/**
 * Bridges Tailwind utility names onto the semantic CSS-variable contract.
 *
 * Colors are stored as space-separated RGB channels so Tailwind's opacity
 * modifier keeps working: `rgb(var(--surface) / <alpha-value>)` yields both
 * `bg-surface` and `bg-surface/50`.
 */
const color = (token: string) => `rgb(var(${token}) / <alpha-value>)`;

/** Sizing tokens (padding/margin/gap/width/…) resolve to the fluid space scale. */
const space = (token: string) => `var(${token})`;

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	// The blocking script in app.html writes `data-theme` onto <html>, so the
	// `dark:` variant must key off that attribute rather than a class or cookie.
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		// --- Replaced scales: components may ONLY use semantic tokens here. ---
		spacing: {
			'0': '0px',
			px: '1px',
			'3xs': space('--space-3xs'),
			'2xs': space('--space-2xs'),
			xs: space('--space-xs'),
			sm: space('--space-sm'),
			md: space('--space-md'),
			lg: space('--space-lg'),
			xl: space('--space-xl'),
			'2xl': space('--space-2xl'),
			'3xl': space('--space-3xl'),
			'4xl': space('--space-4xl')
		},
		fontSize: {
			'2xs': space('--step--2'),
			xs: space('--step--1'),
			base: space('--step-0'),
			lg: space('--step-1'),
			xl: space('--step-2'),
			'2xl': space('--step-3'),
			'3xl': space('--step-4'),
			'4xl': space('--step-5')
		},
		borderRadius: {
			none: '0',
			sm: space('--radius-sm'),
			DEFAULT: space('--radius-md'),
			md: space('--radius-md'),
			lg: space('--radius-lg'),
			xl: space('--radius-xl'),
			full: space('--radius-full')
		},
		extend: {
			colors: {
				canvas: color('--canvas'),
				surface: {
					DEFAULT: color('--surface'),
					raised: color('--surface-raised'),
					sunken: color('--surface-sunken')
				},
				content: {
					DEFAULT: color('--content'),
					muted: color('--content-muted'),
					subtle: color('--content-subtle'),
					inverse: color('--content-inverse')
				},
				border: {
					DEFAULT: color('--border'),
					strong: color('--border-strong')
				},
				brand: {
					DEFAULT: color('--brand'),
					content: color('--brand-content')
				},
				accent: {
					DEFAULT: color('--accent'),
					content: color('--accent-content')
				},
				success: color('--success'),
				warning: color('--warning'),
				danger: color('--danger'),
				info: color('--info'),
				ring: color('--focus-ring'),
				overlay: color('--overlay')
			},
			maxWidth: {
				narrow: space('--container-narrow'),
				content: space('--container-max'),
				wide: space('--container-wide'),
				modal: space('--modal-width')
			},
			width: {
				drawer: space('--drawer-width')
			},
			minHeight: {
				tap: space('--tap-min')
			},
			minWidth: {
				tap: space('--tap-min')
			},
			gridTemplateColumns: {
				// Locked decision #5 as a first-class utility.
				auto: 'repeat(auto-fit, minmax(min(100%, var(--grid-min)), 1fr))'
			},
			fontFamily: {
				sans: 'var(--font-sans)',
				display: 'var(--font-display)',
				mono: 'var(--font-mono)'
			},
			lineHeight: {
				tight: space('--leading-tight'),
				snug: space('--leading-snug'),
				normal: space('--leading-normal'),
				relaxed: space('--leading-relaxed')
			},
			boxShadow: {
				sm: space('--shadow-sm'),
				DEFAULT: space('--shadow-md'),
				lg: space('--shadow-lg')
			},
			// Motion utilities read straight from the timing tokens, so the
			// reduced-motion override (and per-brand motion profiles) flow
			// through `duration-*` / `ease-*` automatically.
			transitionDuration: {
				fast: space('--dur-fast'),
				DEFAULT: space('--dur-base'),
				base: space('--dur-base'),
				slow: space('--dur-slow')
			},
			transitionTimingFunction: {
				standard: space('--ease-standard'),
				emphasized: space('--ease-emphasized'),
				entrance: space('--ease-entrance'),
				DEFAULT: space('--ease-standard')
			},
			zIndex: {
				base: '0',
				raised: '10',
				sticky: '20',
				drawer: '40',
				modal: '50',
				toast: '60'
			}
		}
	},
	plugins: []
} satisfies Config;
