import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// vitePreprocess wires up TypeScript, PostCSS (Tailwind) and other
	// Vite-native preprocessors for both .svelte and .svelte.ts files.
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter()
	}
};

export default config;
