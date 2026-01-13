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
			class="flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-[6px] border-primary bg-white p-2 shadow-inner"
		>
			<img src="/logo.png" alt={APP_CONFIG.brand.fullName} class="h-full w-full object-contain" />
		</div>
	</div>
{:else}
	<div class="flex items-center gap-3">
		<div
			class="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-white p-1 shadow-sm"
		>
			<img src="/logo.png" alt={APP_CONFIG.brand.fullName} class="h-full w-full object-contain" />
		</div>
		<div class="flex flex-col">
			<h1 class="text-lg leading-tight font-black tracking-tight text-primary uppercase">
				{APP_CONFIG.brand.name}
			</h1>
			<p class="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
				{APP_CONFIG.brand.logoText}
			</p>
		</div>
	</div>
{/if}
