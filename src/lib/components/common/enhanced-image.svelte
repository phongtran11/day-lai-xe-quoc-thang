<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Picture } from 'vite-imagetools';

	interface Props {
		src: Picture;
		alt: string;
		class?: string;
	}

	let { src, alt, class: className }: Props & Record<string, any> = $props();
</script>

<enhanced:img
	class={cn('h-full w-full object-cover')}
	{src}
	{alt}
	sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
/>
