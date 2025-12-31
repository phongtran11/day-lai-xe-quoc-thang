<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Component } from 'svelte';

	interface Props {
		href: string;
		label: string;
		icon?: Component;
		variant?: 'primary' | 'secondary';
		class?: string;
	}

	let { href, label, icon: Icon, variant = 'primary', class: className }: Props = $props();

	const baseClass =
		'group flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all active:scale-95';
	const variants = {
		primary: 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20',
		secondary:
			'bg-white text-primary border border-primary/20 hover:bg-gray-50 hover:shadow-md hover:shadow-primary/5'
	};
</script>

<a {href} class={cn(baseClass, variants[variant], className)}>
	{#if Icon}
		<Icon class="h-4 w-4 transition-transform group-hover:rotate-12" />
	{/if}
	<span>{label}</span>
</a>
