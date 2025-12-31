<script lang="ts">
	import { ChevronUp } from '@lucide/svelte';
	import { fade } from 'svelte/transition';

	let visible = $state(false);

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', () => {
			visible = window.scrollY > 300;
		});
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

{#if visible}
	<button
		onclick={scrollToTop}
		transition:fade={{ duration: 300 }}
		class="group fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-white shadow-lg transition-all duration-300 hover:bg-primary"
		aria-label="Back to top"
	>
		<ChevronUp class="h-6 w-6 transition-transform group-hover:-translate-y-1" />
	</button>
{/if}
