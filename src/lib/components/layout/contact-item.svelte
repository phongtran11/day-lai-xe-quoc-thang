<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Component } from 'svelte';

	interface Props {
		icon: Component;
		label?: string;
		value: string;
		href?: string;
		isBold?: boolean;
		variant?: 'default' | 'footer' | 'horizontal';
		labelClass?: string;
		iconClass?: string;
		class?: string;
	}

	let {
		icon: Icon,
		label,
		value,
		href,
		isBold = false,
		variant = 'default',
		labelClass,
		iconClass,
		class: className
	}: Props = $props();
</script>

{#if variant === 'footer'}
	<li class={cn('group flex items-start gap-3', className)}>
		<div class="rounded-lg bg-white/10 p-2 transition-colors group-hover:bg-primary/20">
			<Icon class={cn('h-4 w-4 text-primary', iconClass)} />
		</div>
		<span class="leading-snug">
			{#if label}
				<strong class={cn('mb-1 block text-white', labelClass)}>{label}:</strong>
			{/if}
			{#if href}
				<a
					{href}
					class={cn(
						'transition-colors hover:text-primary',
						labelClass,
						isBold ? 'font-bold text-white' : ''
					)}
				>
					{value}
				</a>
			{:else}
				{value}
			{/if}
		</span>
	</li>
{:else if variant === 'horizontal'}
	<div class={cn('flex items-center gap-2', className)}>
		{#if label}
			<div class={cn('flex items-center gap-2 text-xs font-medium', labelClass)}>
				<Icon class={cn('h-3.5 w-3.5', iconClass)} />
				<span>{label}</span>
			</div>
		{/if}
		{#if value && href}
			<a
				{href}
				class={cn(
					'flex items-center gap-2 font-bold transition-colors hover:opacity-80',
					labelClass
				)}
			>
				{#if !label}
					<Icon class={cn('h-4 w-4', iconClass)} />
				{/if}
				<span>{value}</span>
			</a>
		{:else if value}
			<div class={cn('flex items-center gap-2 font-medium', labelClass)}>
				{#if !label}
					<Icon class={cn('h-4 w-4', iconClass)} />
				{/if}
				<span>{value}</span>
			</div>
		{/if}
	</div>
{:else}
	<div class={cn('flex flex-col items-end gap-1', className)}>
		{#if label}
			<div class={cn('flex items-center gap-2 text-xs font-medium text-gray-500', labelClass)}>
				<Icon class={cn('h-3.5 w-3.5 text-primary', iconClass)} />
				<span>{label}</span>
			</div>
		{/if}
		{#if href}
			<a
				{href}
				class={cn(
					'flex items-center gap-2 font-bold text-primary transition-colors hover:text-primary/80',
					labelClass
				)}
			>
				{#if !label}
					<Icon class={cn('h-4 w-4 text-primary', iconClass)} />
				{/if}
				<span>{value}</span>
			</a>
		{:else}
			<div class={cn('flex items-center gap-2 font-medium text-gray-700', labelClass)}>
				<Icon class={cn('h-4 w-4 text-primary', iconClass)} />
				<span>{value}</span>
			</div>
		{/if}
	</div>
{/if}
