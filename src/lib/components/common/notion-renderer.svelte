<script lang="ts">
	import type { BlockObjectResponse } from '@notionhq/client';
	import OptimizedImage from '$lib/components/common/optimized-image.svelte';

	let { blocks }: { blocks: BlockObjectResponse[] } = $props();

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
					alt={renderRichText(block.image.caption) || 'Image'}
					class="rounded-xl"
				/>
				{#if block.image.caption?.length > 0}
					<figcaption class="mt-2 text-center text-sm text-slate-500">
						{@html renderRichText(block.image.caption)}
					</figcaption>
				{/if}
			</figure>
		{:else if block.type === 'divider'}
			<hr class="my-8 border-slate-200" />
		{:else if block.type === 'quote'}
			<blockquote class="border-l-4 border-primary pl-4 text-slate-700 italic">
				{@html renderRichText(block.quote.rich_text)}
			</blockquote>
		{:else if block.type === 'callout'}
			<div class="my-6 flex gap-4 rounded-xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
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
