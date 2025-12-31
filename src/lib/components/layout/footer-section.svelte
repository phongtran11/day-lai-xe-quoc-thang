<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children: Snippet;
	}

	let { title, children }: Props = $props();
</script>

<div class="flex flex-col space-y-6">
	<h3
		class="inline-block border-b-2 border-primary/50 pb-2 text-lg font-bold tracking-wider uppercase"
	>
		{title}
	</h3>
	{@render children()}
</div>
