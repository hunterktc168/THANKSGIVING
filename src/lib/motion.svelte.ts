import { browser } from '$app/environment';

/**
 * Reactive motion preference (locked decision #3).
 *
 * The CSS layer already neutralises durations under `prefers-reduced-motion`.
 * This store exists for the cases CSS cannot cover: fully disabling
 * scroll-linked / pointer-driven effects in JS rather than merely shortening
 * them. Read `prefersReducedMotion.reduced` inside components or effects.
 */
const QUERY = '(prefers-reduced-motion: reduce)';

function createPrefersReducedMotion() {
	let reduced = $state(false);

	if (browser) {
		const mql = window.matchMedia(QUERY);
		reduced = mql.matches;
		mql.addEventListener('change', (event) => {
			reduced = event.matches;
		});
	}

	return {
		get reduced() {
			return reduced;
		}
	};
}

export const prefersReducedMotion = createPrefersReducedMotion();
