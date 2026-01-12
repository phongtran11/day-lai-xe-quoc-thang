<script lang="ts">
	import { cn } from '$lib/utils';
	import { MapPin } from '@lucide/svelte';

	interface Props {
		src: string;
		title?: string;
		placeholderImage?: string;
		class?: string;
	}

	let { src, title = 'Google Map', class: className }: Props = $props();

	let showMap = $state(false);
</script>

<div
	class={cn(
		'group relative aspect-video w-full cursor-pointer overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-xl',
		className
	)}
>
	{#if !showMap}
		<button
			class="absolute inset-0 z-20 flex flex-col items-center justify-center bg-slate-50 transition-all hover:bg-slate-100"
			onclick={() => (showMap = true)}
		>
			<div
				class="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-white shadow-xl shadow-primary/20 transition-transform group-hover:scale-110"
			>
				<MapPin size={40} />
			</div>
			<div class="text-center">
				<p class="text-lg font-black tracking-tight text-slate-800 uppercase">NHẤN ĐỂ MỞ BẢN ĐỒ</p>
			</div>

			<!-- Subtle pattern background -->
			<div
				class="absolute inset-0 -z-10 bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[20px_20px] opacity-[0.03]"
			></div>
		</button>
	{:else}
		<iframe
			{src}
			width="100%"
			height="100%"
			style="border:0;"
			allowfullscreen={true}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			{title}
			class="h-full w-full transition-all duration-500"
		></iframe>
	{/if}
</div>
