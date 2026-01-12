<script lang="ts">
	import { NotionRenderer, OptimizedImage, ArrowLeft, Seo } from '$lib/components/common';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
	const course = $derived(data.course);
	const blocks = $derived(data.blocks);
</script>

<Seo title={course.name} description={course.descriptions} image={course.coverImage || undefined} />

<article class="mx-auto max-w-4xl px-4 py-12">
	<!-- Back Button -->
	<div class="mb-10">
		<a
			href="/khoa-hoc"
			class="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition-all hover:border-primary/30 hover:bg-slate-50 hover:text-primary hover:shadow-md active:scale-95"
		>
			<ArrowLeft class="transition-transform group-hover:-translate-x-1" strokeWidth={2.5} />
			Quay lại danh sách
		</a>
	</div>

	<!-- Course Header -->
	<header class="mb-12">
		{#if course.coverImage}
			<OptimizedImage
				src={course.coverImage}
				alt={course.coverImageName || course.name}
				class="mb-8 aspect-video w-full rounded-2xl shadow-lg"
			/>
		{/if}
	</header>

	<!-- Course Content (Notion Blocks) -->
	<NotionRenderer {blocks} />

	<!-- Footer CTA -->
	<footer class="mt-16 border-t pt-12 text-center">
		<h2 class="mb-6 text-2xl font-bold">Bạn sẵn sàng bắt đầu hành trình?</h2>
		<a
			href="/lien-he"
			class="inline-block rounded-full bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
		>
			Đăng ký ngay hôm nay
		</a>
	</footer>
</article>
