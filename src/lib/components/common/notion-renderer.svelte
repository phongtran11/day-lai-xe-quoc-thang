<script lang="ts">
	import type { BlockObjectResponse } from '@notionhq/client';
	import OptimizedImage from '$lib/components/common/optimized-image.svelte';
	import NotionTable from './notion-table.svelte';

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
					<li class="my-1">
						{@html renderRichText(item.bulleted_list_item.rich_text)}
						{#if item.bulleted_list_item.children}
							<div class="mt-2">
								<svelte:self blocks={item.bulleted_list_item.children} />
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		{:else if block.type === 'numbered_list_item'}
			<ol class="list-decimal pl-8">
				{#each block.items as item}
					<li class="my-1">
						{@html renderRichText(item.numbered_list_item.rich_text)}
						{#if item.numbered_list_item.children}
							<div class="mt-2 text-base font-normal">
								<svelte:self blocks={item.numbered_list_item.children} />
							</div>
						{/if}
					</li>
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
					<div class="font-medium">{@html renderRichText(block.callout.rich_text)}</div>
					{#if block.callout.children}
						<div class="mt-4">
							<svelte:self blocks={block.callout.children} />
						</div>
					{/if}
				</div>
			</div>
		{:else if block.type === 'table'}
			<NotionTable table={block.table} {renderRichText} />
		{:else if block.type === 'column_list'}
			<div class="my-8 flex flex-col gap-6 md:flex-row">
				{#each block.column_list.children as column}
					<div class="flex-1">
						<svelte:self blocks={column.column.children} />
					</div>
				{/each}
			</div>
		{:else if block.type === 'video'}
			<div class="my-8 aspect-video overflow-hidden rounded-xl bg-slate-100">
				{#if block.video.type === 'external'}
					{#if block.video.external.url.includes('youtube.com') || block.video.external.url.includes('youtu.be')}
						{@const videoId = block.video.external.url
							.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)[2]
							?.split(/[^0-9a-z_-]/i)[0]}
						<iframe
							src="https://www.youtube.com/embed/{videoId}"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
							class="h-full w-full"
						></iframe>
					{:else}
						<video controls class="h-full w-full">
							<source src={block.video.external.url} />
							Your browser does not support the video tag.
						</video>
					{/if}
				{:else}
					<video controls class="h-full w-full">
						<source src={block.video.file.url} />
						Your browser does not support the video tag.
					</video>
				{/if}
			</div>
		{:else if block.type === 'code'}
			<div class="my-8 overflow-hidden rounded-xl bg-[#1e1e1e] p-6 text-sm">
				<div class="mb-2 flex items-center justify-between text-slate-400">
					<span>{block.code.language}</span>
				</div>
				<pre class="overflow-x-auto text-slate-100"><code
						>{block.code.rich_text[0]?.plain_text}</code
					></pre>
				{#if block.code.caption?.length > 0}
					<div class="mt-2 text-center text-xs text-slate-500">
						{@html renderRichText(block.code.caption)}
					</div>
				{/if}
			</div>
		{:else if block.type === 'toggle'}
			<details class="my-4 rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all">
				<summary class="flex cursor-pointer list-none items-center gap-2 font-medium select-none">
					<span class="text-primary transition-transform duration-200">▶</span>
					<div>{@html renderRichText(block.toggle.rich_text)}</div>
				</summary>
				<div class="mt-4 border-l-2 border-slate-200 pl-6">
					<svelte:self blocks={block.toggle.children} />
				</div>
			</details>
		{:else if block.type === 'bookmark'}
			<a
				href={block.bookmark.url}
				target="_blank"
				rel="noopener noreferrer"
				class="my-8 flex overflow-hidden rounded-xl border border-slate-200 bg-white no-underline shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
			>
				<div class="flex flex-1 flex-col p-4">
					<div class="line-clamp-1 font-medium text-slate-900">{block.bookmark.url}</div>
					{#if block.bookmark.caption?.length > 0}
						<div class="mt-1 line-clamp-2 text-sm text-slate-500">
							{@html renderRichText(block.bookmark.caption)}
						</div>
					{/if}
					<div class="mt-2 text-xs text-slate-400">{new URL(block.bookmark.url).hostname}</div>
				</div>
			</a>
		{:else if block.type === 'to_do'}
			<div class="my-2 flex items-start gap-3">
				<input
					type="checkbox"
					checked={block.to_do.checked}
					disabled
					class="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
				/>
				<div class={block.to_do.checked ? 'text-slate-400 line-through' : ''}>
					{@html renderRichText(block.to_do.rich_text)}
				</div>
			</div>
		{/if}
	{/each}
</div>
