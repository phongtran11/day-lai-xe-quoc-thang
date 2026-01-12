<script lang="ts">
	import { dev } from '$app/environment';
	import { cn } from '$lib/utils';

	interface Props {
		src?: string;
		small?: string;
		medium?: string;
		large?: string;
		alt: string;
		class?: string;
		loading?: 'lazy' | 'eager';
		fetchpriority?: 'high' | 'low' | 'auto';
		width?: number; // Target width for Vercel optimization
		quality?: number;
	}

	let {
		src,
		small,
		medium,
		large,
		alt,
		class: className,
		loading = 'lazy',
		fetchpriority = 'auto',
		width = 1080,
		quality = 75,
		...restProps
	}: Props & Record<string, any> = $props();

	/**
	 * Processes the source URL to return an optimized image path.
	 * Returns the original URL in development mode to avoid optimization proxy issues.
	 */
	const getOptimizedUrl = (url: string, w: number) => {
		if (!url) return '';

		// Always return the original URL during local development
		if (dev) return url;

		// Domains whitelisted in vercel.json for optimization
		const whitelistedDomains = ['amazonaws.com'];

		const shouldOptimize = whitelistedDomains.some((domain) => url.includes(domain));

		if (shouldOptimize) {
			return `/_vercel/image?url=${encodeURIComponent(url)}&w=${w}&q=${quality}`;
		}
		return url;
	};

	const displaySrc = $derived(src ? getOptimizedUrl(src, width) : small || medium || large);
	const smallSrc = $derived(small || (src ? getOptimizedUrl(src, 640) : ''));
	const largeSrc = $derived(large || (src ? getOptimizedUrl(src, 1200) : ''));
</script>

<picture class={cn('block overflow-hidden', className)}>
	{#if largeSrc}
		<source media="(min-width: 1024px)" srcset={largeSrc} />
	{/if}
	{#if smallSrc}
		<source media="(min-width: 640px)" srcset={smallSrc} />
	{/if}
	<img
		src={displaySrc}
		{alt}
		{loading}
		{fetchpriority}
		class={cn('h-full w-full object-cover')}
		{...restProps}
	/>
</picture>
