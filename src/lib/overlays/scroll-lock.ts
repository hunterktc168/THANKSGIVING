/**
 * CLS-safe body scroll lock (locked decision #2).
 *
 * `scrollbar-gutter: stable` is set on <html> globally, so the scrollbar space
 * is already reserved and removing the scrollbar cannot shift layout. Here we
 * simply freeze scrolling while an overlay is open.
 *
 * The lock is reference-counted so stacked overlays don't unlock early.
 * Returns an `unlock` function — call it on cleanup.
 */
let lockCount = 0;

export function lockBodyScroll(): () => void {
	if (typeof document === 'undefined') return () => {};

	lockCount += 1;
	if (lockCount === 1) {
		const { body, documentElement } = document;
		body.style.overflow = 'hidden';
		body.style.scrollbarGutter = 'stable';
		documentElement.style.overflow = 'hidden';
	}

	return () => {
		lockCount = Math.max(0, lockCount - 1);
		if (lockCount === 0) {
			const { body, documentElement } = document;
			body.style.overflow = '';
			body.style.scrollbarGutter = '';
			documentElement.style.overflow = '';
		}
	};
}
