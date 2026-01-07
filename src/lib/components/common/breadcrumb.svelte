<script lang="ts">
	import { page } from '$app/state';
	import { House } from 'lucide-svelte/icons';

	/**
	 * Map of URL segments to human-readable Vietnamese labels
	 */
	const labelMap: Record<string, string> = {
		'gioi-thieu': 'Giới thiệu',
		'khoa-hoc': 'Khóa học',
		'tin-tuc': 'Tin tức',
		'lien-he': 'Liên hệ'
	};

	// Derive breadcrumbs from the current URL path
	const breadcrumbs = $derived.by(() => {
		const path = page.url.pathname;
		if (path === '/') return [];

		const segments = path.split('/').filter(Boolean);
		let currentPath = '';

		return segments.map((segment, index) => {
			currentPath += `/${segment}`;
			const isLast = index === segments.length - 1;

			// Priority for labels:
			// 1. Known mapping (e.g., 'khoa-hoc' -> 'Khóa học')
			// 2. Original segment name (e.g., dynamic slugs)
			let label = labelMap[segment] || segment;

			// Handle dynamic slugs more gracefully (capitalize, replace hyphens)
			if (!labelMap[segment]) {
				label = label
					.split('-')
					.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
					.join(' ');
			}

			return { label, href: currentPath, isLast };
		});
	});
</script>

{#if breadcrumbs.length > 0}
	<nav class="container mx-auto max-w-[1200px] px-4 py-4" aria-label="Breadcrumb">
		<ol class="flex items-center gap-2 text-sm text-slate-500">
			<li class="flex items-center">
				<a href="/" class="transition-colors hover:text-primary" aria-label="Trang chủ">
					<House size={14} />
				</a>
			</li>

			{#each breadcrumbs as crumb}
				<li class="flex items-center gap-2">
					<span class="text-slate-300">/</span>
					{#if crumb.isLast}
						<span class="font-medium text-slate-900" aria-current="page">
							{crumb.label}
						</span>
					{:else}
						<a href={crumb.href} class="transition-colors hover:text-primary">
							{crumb.label}
						</a>
					{/if}
				</li>
			{/each}
		</ol>
	</nav>
{/if}
