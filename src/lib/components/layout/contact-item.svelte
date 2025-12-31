<script lang="ts">
	import type { Component } from 'svelte';

	interface Props {
		icon: Component;
		label?: string;
		value: string;
		href?: string;
		isBold?: boolean;
		variant?: 'default' | 'footer';
	}

	let { icon: Icon, label, value, href, isBold = false, variant = 'default' }: Props = $props();
</script>

{#if variant === 'footer'}
	<li class="group flex items-start gap-3">
		<div class="rounded-lg bg-white/10 p-2 transition-colors group-hover:bg-primary/20">
			<Icon class="h-4 w-4 text-primary" />
		</div>
		<span class="leading-snug">
			{#if label}
				<strong class="mb-1 block text-white">{label}:</strong>
			{/if}
			{#if href}
				<a
					{href}
					class="transition-colors hover:text-primary {isBold ? 'font-bold text-white' : ''}"
				>
					{value}
				</a>
			{:else}
				{value}
			{/if}
		</span>
	</li>
{:else}
	<div class="flex flex-col items-end gap-1">
		{#if label}
			<div class="flex items-center gap-2 text-xs font-medium text-gray-500">
				<Icon class="h-3.5 w-3.5 text-primary" />
				<span>{label}</span>
			</div>
		{/if}
		{#if href}
			<a
				{href}
				class="flex items-center gap-2 font-bold text-primary transition-colors hover:text-primary/80"
			>
				{#if !label}
					<Icon class="h-4 w-4 text-primary" />
				{/if}
				<span>{value}</span>
			</a>
		{:else}
			<div class="flex items-center gap-2 font-medium text-gray-700">
				<Icon class="h-4 w-4 text-primary" />
				<span>{value}</span>
			</div>
		{/if}
	</div>
{/if}
