import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Token-validation smoke tests.
 *
 * Run `npx playwright install` first, then `npm run test`.
 * Snapshots are written on first run (`npm run test:update`).
 */

test('sandbox renders both brand presets from the same primitive', async ({ page }) => {
	await page.goto('/sandbox');

	const panels = page.getByTestId('brand-panel');
	await expect(panels).toHaveCount(2);
	await expect(panels.filter({ hasText: 'Kangaroo Bar' })).toBeVisible();
	await expect(panels.filter({ hasText: "Vanny's" })).toBeVisible();
});

test('brand presets resolve distinct semantic tokens at runtime', async ({ page }) => {
	await page.goto('/sandbox');

	const kangaroo = page.locator('[data-brand="kangaroo"]');
	const vannys = page.locator('[data-brand="vannys"]');

	const read = (scope: typeof kangaroo, token: string) =>
		scope.evaluate((el, property) => getComputedStyle(el).getPropertyValue(property).trim(), token);

	// The overrides must actually diverge, proving the token contract is live.
	expect(await read(kangaroo, '--brand')).not.toBe(await read(vannys, '--brand'));
	expect(await read(kangaroo, '--dur-base')).not.toBe(await read(vannys, '--dur-base'));
});

test('sandbox has no accessibility violations', async ({ page }) => {
	await page.goto('/sandbox');

	const results = await new AxeBuilder({ page }).analyze();
	expect(results.violations).toEqual([]);
});

test('sandbox visual baseline (reduced motion)', async ({ page }) => {
	await page.emulateMedia({ reducedMotion: 'reduce' });
	await page.goto('/sandbox');
	await expect(page).toHaveScreenshot('sandbox.png', { fullPage: true });
});
