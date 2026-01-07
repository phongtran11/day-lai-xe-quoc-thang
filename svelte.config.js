import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ path, message }) => {
				// Ignore errors for Vercel Image Optimization
				if (path.startsWith('/_vercel/image')) {
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
