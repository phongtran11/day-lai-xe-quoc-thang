<script lang="ts">
	import { cn } from '$lib/utils';
	let { count = 1, class: className = '' }: { count?: number; class?: string } = $props();
</script>

<div class={cn('grid gap-8 md:grid-cols-2 lg:grid-cols-3', className)}>
	{#each Array(count) as _}
		<div class="animate-pulse">
			<div class="mb-4 aspect-video rounded-2xl bg-slate-200"></div>
			<div class="mb-4 h-4 w-1/4 rounded bg-slate-200"></div>
			<div class="mb-2 h-6 w-3/4 rounded bg-slate-200"></div>
			<div class="h-4 w-full rounded bg-slate-200"></div>
			<div class="mt-2 h-4 w-2/3 rounded bg-slate-200"></div>
		</div>
	{/each}
</div>
