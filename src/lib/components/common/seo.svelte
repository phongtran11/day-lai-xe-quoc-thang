<script lang="ts">
	import { APP_CONFIG } from '$lib/constants/app';
	import { page } from '$app/state';

	interface Props {
		title?: string;
		description?: string;
		image?: string;
		article?: boolean;
		canonical?: string;
	}

	let {
		title = '',
		description = APP_CONFIG.brand.description,
		image = '/images/og-image.png', // Default OG image
		article = false,
		canonical = ''
	}: Props = $props();

	const siteName = APP_CONFIG.brand.name;
	const fullTitle = $derived(title ? `${title} | ${siteName}` : APP_CONFIG.brand.fullName);
	const url = $derived(page.url.href);
	const finalCanonical = $derived(canonical || url);
	const finalImage = $derived(
		image.startsWith('http') ? image : `${APP_CONFIG.contact.websiteLink}${image}`
	);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={finalCanonical} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={article ? 'article' : 'website'} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={finalImage} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={fullTitle} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={finalImage} />
</svelte:head>
