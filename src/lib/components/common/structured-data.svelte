<script lang="ts">
	import { APP_CONFIG } from '$lib/constants/app';

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'EducationalOrganization',
		name: APP_CONFIG.brand.fullName,
		description: APP_CONFIG.brand.description,
		url: APP_CONFIG.contact.websiteLink,
		logo: `${APP_CONFIG.contact.websiteLink}/favicon.png`,
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: APP_CONFIG.contact.hotline,
			contactType: 'customer service',
			areaServed: 'VN',
			availableLanguage: ['Vietnamese']
		},
		address: APP_CONFIG.contact.locations.map((loc) => ({
			'@type': 'PostalAddress',
			streetAddress: loc.address,
			addressLocality: 'Đức Hòa',
			addressRegion: 'Long An',
			addressCountry: 'VN'
		})),
		sameAs: APP_CONFIG.socialLinks.map((link) => link.href).filter((href) => href !== '#')
	};

	const schemaString = JSON.stringify(schema);
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${schemaString}<\/script>`}
</svelte:head>
