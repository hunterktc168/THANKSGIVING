import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import { defineConfig } from 'vite';

/**
 * Vite pipeline.
 *
 * Plugin order matters:
 *  1. enhancedImages()  – must run BEFORE sveltekit() so <enhanced:img> is
 *     rewritten into responsive <picture> markup.
 *  2. sveltekit()       – the SvelteKit + Svelte 5 compiler pipeline.
 *  3. Icons()           – turns bespoke SVGs in src/icons/ into Svelte
 *     components, importable as `~icons/vault/<file-name>`.
 *
 * There is NO generic icon pack registered on purpose: the vault ships only
 * bespoke SVGs, so the only collection is the local `vault` loader.
 */
export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		Icons({
			compiler: 'svelte',
			autoInstall: false,
			scale: 1,
			customCollections: {
				vault: FileSystemIconLoader('src/icons')
			}
		})
	]
});
