<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/layout/header.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import { APP_CONFIG } from '$lib/constants/app';

	let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />
