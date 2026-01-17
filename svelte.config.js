import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			images: {
				sizes: [256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
				domains: ['prod-files-secure.s3.us-west-2.amazonaws.com'],
				formats: ['image/avif', 'image/webp'],
				minimumCacheTTL: 31536000,
				dangerouslyAllowSVG: false
			}
		}),
		prerender: {
			handleHttpError: ({ path, message }) => {
				// Ignore errors for Vercel Image Optimization
				if (path.startsWith('/_vercel/image')) {
					return;
				}
			}
		}
	}
};

export default config;
