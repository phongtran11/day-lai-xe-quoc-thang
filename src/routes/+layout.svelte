<script lang="ts">
	import './layout.css';
	import { Breadcrumb, StructuredData } from '$lib/components/common';
	import {
		SocialSidebar,
		Header,
		Footer,
		MobileActions,
		ScrollToTop
	} from '$lib/components/layout';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	let { children } = $props();

	injectAnalytics({ mode: dev ? 'development' : 'production' });
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
