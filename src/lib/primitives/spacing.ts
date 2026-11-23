/**
 * The `gap` contract shared by Stack / Cluster / Grid.
 *
 * Values are written as COMPLETE literal class strings (never interpolated) so
 * Tailwind's scanner can see them. Components then map a typed token name to
 * one of these strings — callers pass `gap="lg"`, not `gap={16}`.
 */
export const SPACE = {
	none: 'gap-0',
	'3xs': 'gap-3xs',
	'2xs': 'gap-2xs',
	xs: 'gap-xs',
	sm: 'gap-sm',
	md: 'gap-md',
	lg: 'gap-lg',
	xl: 'gap-xl',
	'2xl': 'gap-2xl',
	'3xl': 'gap-3xl'
} as const;

export type Space = keyof typeof SPACE;
