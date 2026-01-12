<script lang="ts">
	import { NotionRenderer, OptimizedImage, ArrowLeft, Seo } from '$lib/components/common';
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils';

	const { data }: { data: PageData } = $props();
	const news = $derived(data.news);
	const blocks = $derived(data.blocks);
</script>

<Seo
	title={news.name}
	description={news.descriptions}
	image={news.coverImage || undefined}
	article={true}
/>

<article class="mx-auto max-w-4xl px-4 py-12">
	<!-- Back Button -->
	<div class="mb-10">
		<a
			href="/tin-tuc"
			class="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition-all hover:border-primary/30 hover:bg-slate-50 hover:text-primary hover:shadow-md active:scale-95"
		>
			<ArrowLeft class="transition-transform group-hover:-translate-x-1" strokeWidth={2.5} />
			Quay lại danh sách
		</a>
	</div>

	<!-- News Header -->
	<header class="mb-12">
		{#if news.coverImage}
			<OptimizedImage
				src={news.coverImage}
				alt={news.coverImageName || news.name}
				class="mb-8 aspect-video w-full rounded-2xl shadow-lg"
			/>
		{/if}

		<h1 class="text-3xl font-bold md:text-4xl lg:text-5xl">{news.name}</h1>

		<h3 class="text-md mt-2 text-slate-500 italic">Ngày đăng: {formatDate(news.createdAt)}</h3>
	</header>

	<!-- News Content (Notion Blocks) -->
	<NotionRenderer {blocks} />

	<!-- Footer CTA -->
	<footer class="mt-16 border-t border-slate-100 pt-12">
		<div class="rounded-3xl bg-slate-50 p-8 text-center md:p-12">
			<h2 class="mb-6 text-2xl font-bold md:text-3xl">Bạn muốn tìm hiểu thêm về các khóa học?</h2>
			<p class="mb-8 text-slate-600">
				Liên hệ với chúng tôi để được tư vấn miễn phí về lộ trình học lái xe phù hợp nhất.
			</p>
			<a
				href="/lien-he"
				class="inline-block rounded-full bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
			>
				Tư vấn ngay
			</a>
		</div>
	</footer>
</article>
