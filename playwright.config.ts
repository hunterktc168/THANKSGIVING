import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright is the vault's quality gate:
 *  - Visual regression: snapshot every `/sandbox` token configuration.
 *  - a11y: run axe-core over each configuration.
 *
 * Run `npx playwright install` once before the first test run.
 */
export default defineConfig({
	testDir: 'tests',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	reporter: 'list',
	expect: {
		toHaveScreenshot: { maxDiffPixelRatio: 0.01 }
	},
	use: {
		baseURL: 'http://localhost:5173',
		trace: 'on-first-retry'
	},
	projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
	webServer: {
		command: 'npm run dev -- --port 5173',
		url: 'http://localhost:5173',
		reuseExistingServer: !process.env.CI
	}
});
