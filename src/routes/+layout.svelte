<script lang="ts">
	import './layout.css';
	import Header from '$lib/components/layout/header.svelte';
	import Breadcrumb from '$lib/components/common/breadcrumb.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import StructuredData from '$lib/components/common/structured-data.svelte';
	import MobileActions from '$lib/components/layout/mobile-actions.svelte';
	import ScrollToTop from '$lib/components/layout/scroll-to-top.svelte';
	import SocialSidebar from '$lib/components/layout/social-sidebar.svelte';

	let { children } = $props();
</script>

<StructuredData />
<Header />
<Breadcrumb />
<main class="min-h-screen pb-20 sm:pb-0">
	{@render children()}
</main>
<Footer />
<MobileActions />
<SocialSidebar />
<ScrollToTop />
