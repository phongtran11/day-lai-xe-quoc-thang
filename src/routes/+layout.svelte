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
