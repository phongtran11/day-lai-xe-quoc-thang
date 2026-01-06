<script lang="ts">
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

	// Function to generate Vercel Optimization URL
	const getOptimizedUrl = (url: string, w: number) => {
		if (!url) return '';
		if (url.includes('prod-files-secure.s3.us-west-2.amazonaws.com')) {
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
