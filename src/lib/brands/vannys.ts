import type { BrandPreset } from './types';

/**
 * Vanny's — quiet / near-zero motion.
 * Editorial serif, muted palette, crisp low-radius edges and restrained,
 * barely-perceptible transitions.
 */
export const vannys: BrandPreset = {
	id: 'vannys',
	label: "Vanny's",
	description:
		'Quiet, near-zero motion. Editorial serif, muted palette, crisp edges, restrained transitions.',
	motion: 'quiet',
	tokens: {
		'--canvas': '250 249 246',
		'--surface': '255 255 255',
		'--surface-raised': '255 255 255',
		'--surface-sunken': '243 242 238',
		'--content': '33 33 36',
		'--content-muted': '104 104 110',
		'--content-subtle': '148 148 154',
		'--border': '229 227 221',
		'--border-strong': '186 184 176',
		'--brand': '47 62 51',
		'--brand-content': '250 249 246',
		'--accent': '166 138 106',
		'--accent-content': '250 249 246',
		'--focus-ring': '47 62 51',
		'--font-display': "'Georgia', 'Iowan Old Style', 'Times New Roman', serif",
		'--radius-sm': '0.125rem',
		'--radius-md': '0.125rem',
		'--radius-lg': '0.25rem',
		'--radius-xl': '0.375rem',
		'--dur-fast': '70ms',
		'--dur-base': '120ms',
		'--dur-slow': '200ms',
		'--ease-standard': 'cubic-bezier(0.4, 0, 0.2, 1)',
		'--ease-emphasized': 'cubic-bezier(0.4, 0, 0.2, 1)',
		'--ease-entrance': 'cubic-bezier(0.4, 0, 0.2, 1)',
		'--motion-scale': '0.2',
		'--motion-distance': '0.125rem',
		'--grid-min': '22rem'
	}
};
