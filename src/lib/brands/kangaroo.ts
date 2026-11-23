import type { BrandPreset } from './types';

/**
 * Kangaroo Bar — maximalist / high-motion.
 * Saturated brand, loud display type, chunky radii, spring-y easing and
 * generous travel distance.
 */
export const kangaroo: BrandPreset = {
	id: 'kangaroo',
	label: 'Kangaroo Bar',
	description:
		'Maximalist, high-motion. Saturated brand, loud display type, spring easing and generous travel.',
	motion: 'high',
	tokens: {
		'--canvas': '255 247 237',
		'--surface': '255 255 255',
		'--surface-raised': '255 253 245',
		'--surface-sunken': '253 230 200',
		'--content': '41 18 10',
		'--content-muted': '120 72 44',
		'--content-subtle': '168 122 84',
		'--border': '253 214 170',
		'--border-strong': '216 152 92',
		'--brand': '234 34 74',
		'--brand-content': '255 255 255',
		'--accent': '250 204 21',
		'--accent-content': '41 18 10',
		'--focus-ring': '234 34 74',
		'--font-display': "'Impact', 'Haettenschweiler', 'Arial Narrow Bold', system-ui, sans-serif",
		'--radius-sm': '0.125rem',
		'--radius-md': '0.625rem',
		'--radius-lg': '1rem',
		'--radius-xl': '1.5rem',
		'--dur-fast': '150ms',
		'--dur-base': '320ms',
		'--dur-slow': '640ms',
		'--ease-standard': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
		'--ease-emphasized': 'cubic-bezier(0.22, 1.4, 0.36, 1)',
		'--ease-entrance': 'cubic-bezier(0.16, 1.5, 0.3, 1)',
		'--motion-scale': '1.35',
		'--motion-distance': '2rem',
		'--grid-min': '20rem'
	}
};
