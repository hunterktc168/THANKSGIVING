import { kangaroo } from './kangaroo';
import { vannys } from './vannys';
import type { BrandPreset } from './types';

export type { BrandPreset, BrandToken, MotionProfile } from './types';
export { kangaroo } from './kangaroo';
export { vannys } from './vannys';

/** The registry consumed by the /sandbox comparison route. */
export const brands: BrandPreset[] = [kangaroo, vannys];

/**
 * Serialises a preset's token overrides into an inline `style` string.
 * Applied to a wrapper element, the overrides cascade to every descendant —
 * which is how one identical primitive renders as two different brands.
 */
export function toStyle(preset: BrandPreset): string {
	return Object.entries(preset.tokens)
		.map(([property, value]) => `${property}: ${value}`)
		.join('; ');
}
