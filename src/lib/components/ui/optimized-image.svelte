<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props {
		small?: string;
		medium?: string;
		large?: string;
		alt: string;
		class?: string;
		loading?: 'lazy' | 'eager';
		fetchpriority?: 'high' | 'low' | 'auto';
	}

	let {
		small,
		medium,
		large,
		alt,
		class: className,
		loading = 'lazy',
		fetchpriority = 'auto',
		...restProps
	}: Props & Record<string, any> = $props();
</script>

<picture class={cn('block overflow-hidden', className)}>
	{#if large}
		<source media="(min-width: 1024px)" srcset={large} />
	{/if}
	{#if medium}
		<source media="(min-width: 640px)" srcset={medium} />
	{/if}
	<img
		src={small || medium || large}
		{alt}
		{loading}
		{fetchpriority}
		class={cn('h-full w-full object-cover')}
		{...restProps}
	/>
</picture>
