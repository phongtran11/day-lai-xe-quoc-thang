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
		class="group fixed right-4 bottom-[76px] z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-primary md:right-8 md:bottom-8 md:h-12 md:w-12"
		aria-label="Back to top"
	>
		<ChevronUp class="h-5 w-5 transition-transform group-hover:-translate-y-1 md:h-6 md:w-6" />
	</button>
{/if}
