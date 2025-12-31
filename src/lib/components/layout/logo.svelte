<script lang="ts">
	import { APP_CONFIG } from '$lib/constants/app';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	interface Props {
		variant?: 'header' | 'footer';
	}

	let { variant = 'header' }: Props = $props();
</script>

{#if variant === 'footer'}
	<div
		in:fly={{ y: -50, duration: 800, easing: cubicOut }}
		class="relative -mt-24 flex h-52 w-48 flex-col items-center justify-center rounded-t-[10px] rounded-b-[60px] border-x border-b border-gray-200 bg-[#f8f9fa] p-4 shadow-2xl max-md:-mt-[80px] md:-mt-24"
	>
		<div
			class="flex h-32 w-32 items-center justify-center rounded-full border-[6px] border-primary bg-white p-2 shadow-inner"
		>
			<div class="flex flex-col items-center text-center leading-none font-bold text-[#1a3a5f]">
				<span class="mb-1 text-[10px] tracking-widest">{APP_CONFIG.brand.logoText}</span>
				<span class="border-y border-primary px-2 py-0.5 text-sm font-black uppercase"
					>{APP_CONFIG.brand.name}</span
				>
			</div>
		</div>
	</div>
{:else}
	<div class="flex items-center gap-2">
		<div
			class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-sm"
		>
			<span class="text-xs font-black uppercase">{APP_CONFIG.brand.logoText}</span>
		</div>
		<div class="flex flex-col">
			<h1
				class="hidden text-lg leading-none font-black tracking-tight text-primary uppercase sm:block"
			>
				{APP_CONFIG.brand.name}
			</h1>
			<h1 class="text-lg leading-none font-black tracking-tight text-primary uppercase sm:hidden">
				{APP_CONFIG.brand.name}
			</h1>
		</div>
	</div>
{/if}
