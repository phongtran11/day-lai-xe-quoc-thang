<script lang="ts">
	import type { BlockObjectResponse } from '@notionhq/client';
	import OptimizedImage from '$lib/components/ui/optimized-image.svelte';
	import ArrowLeft from '$lib/components/common/icons/arrow-left.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
	const course = $derived(data.course);
	const blocks = $derived(data.blocks as BlockObjectResponse[]);

	/**
	 * Helper to render rich text from Notion
	 */
	function renderRichText(richText: any[]) {
		return richText
			?.map((text: any) => {
				const { annotations, plain_text, href } = text;
				let content = plain_text;

				if (annotations.bold) content = `<strong>${content}</strong>`;
				if (annotations.italic) content = `<em>${content}</em>`;
				if (annotations.underline) content = `<u>${content}</u>`;
				if (annotations.strikethrough) content = `<del>${content}</del>`;
				if (annotations.code) content = `<code>${content}</code>`;

				if (href) {
					return `<a href="${href}" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">${content}</a>`;
				}

				return content;
			})
			.join('');
	}
	/**
	 * Groups adjacent list blocks of the same type
	 */
	function groupBlocks(blocks: BlockObjectResponse[]) {
		const grouped: any[] = [];
		let currentList: { type: string; items: any[] } | null = null;

		blocks.forEach((block) => {
			if (block.type === 'bulleted_list_item' || block.type === 'numbered_list_item') {
				if (currentList && currentList.type === block.type) {
					currentList.items.push(block);
				} else {
					currentList = { type: block.type, items: [block] };
					grouped.push(currentList);
				}
			} else {
				currentList = null;
				grouped.push(block);
			}
		});

		return grouped;
	}

	const processedBlocks = $derived(groupBlocks(blocks));
</script>

<svelte:head>
	<title>{course.name} | Trung tâm Quốc Thắng</title>
	<meta name="description" content={course.description} />
</svelte:head>

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

		<div class="mb-4 flex flex-wrap gap-2">
			{#each course.categories as category}
				<span
					class="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase"
				>
					{category}
				</span>
			{/each}
		</div>
	</header>

	<!-- Course Content (Notion Blocks) -->
	<div class="prose max-w-none prose-slate prose-headings:text-primary prose-a:text-blue-600">
		{#each processedBlocks as block}
			{#if block.type === 'paragraph'}
				<p>{@html renderRichText(block.paragraph.rich_text)}</p>
			{:else if block.type === 'heading_1'}
				<h1>{@html renderRichText(block.heading_1.rich_text)}</h1>
			{:else if block.type === 'heading_2'}
				<h2>{@html renderRichText(block.heading_2.rich_text)}</h2>
			{:else if block.type === 'heading_3'}
				<h3>{@html renderRichText(block.heading_3.rich_text)}</h3>
			{:else if block.type === 'bulleted_list_item'}
				<ul class="list-disc pl-8">
					{#each block.items as item}
						<li>{@html renderRichText(item.bulleted_list_item.rich_text)}</li>
					{/each}
				</ul>
			{:else if block.type === 'numbered_list_item'}
				<ol class="list-decimal">
					{#each block.items as item}
						<li>{@html renderRichText(item.numbered_list_item.rich_text)}</li>
					{/each}
				</ol>
			{:else if block.type === 'image'}
				<figure class="my-8">
					<OptimizedImage
						src={block.image.type === 'external' ? block.image.external.url : block.image.file.url}
						alt={renderRichText(block.image.caption) || 'Course image'}
						class="rounded-xl"
					/>
					{#if block.image.caption?.length > 0}
						<figcaption class="mt-2 text-center text-sm text-slate-500">
							{@html renderRichText(block.image.caption)}
						</figcaption>
					{/if}
				</figure>
			{:else if block.type === 'divider'}
				<hr class="my-8" />
			{:else if block.type === 'quote'}
				<blockquote class="border-l-4 border-primary pl-4 text-slate-700 italic">
					{@html renderRichText(block.quote.rich_text)}
				</blockquote>
			{:else if block.type === 'callout'}
				<div class="my-6 flex gap-4 rounded-xl bg-slate-50 p-6 shadow-sm">
					{#if block.callout.icon && 'emoji' in block.callout.icon}
						<span class="text-2xl">{block.callout.icon.emoji}</span>
					{/if}
					<div class="flex-1">
						{@html renderRichText(block.callout.rich_text)}
					</div>
				</div>
			{/if}
		{/each}
	</div>

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
