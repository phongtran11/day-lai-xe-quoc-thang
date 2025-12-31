<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import MobileActions from '$lib/components/layout/mobile-actions.svelte';
	import ScrollToTop from '$lib/components/layout/scroll-to-top.svelte';
	import SocialSidebar from '$lib/components/layout/social-sidebar.svelte';

	let { children } = $props();
</script>

<Header />
<main class="min-h-screen pb-20 sm:pb-0">
	{@render children()}
</main>
<Footer />
<MobileActions />
<SocialSidebar />
<ScrollToTop />
