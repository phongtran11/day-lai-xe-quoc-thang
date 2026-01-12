<script lang="ts">
	import { Seo, OptimizedImage, CardSkeleton } from '$lib/components/common';
	import { formatDate } from '$lib/utils';
	import type { PageData } from './$types';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { fetchNews } from '$lib/api';

	let { data }: { data: PageData } = $props();
	let search = $state(page.url.searchParams.get('search') || '');
	let searchInput: HTMLInputElement | undefined = $state();
	let isLoading = $state(false);
	let isLoadingMore = $state(false);

	let newsList = $state(data.newsData.items);
	let nextCursor = $state(data.newsData.nextCursor);
	let hasMore = $state(data.newsData.hasMore);

	// Sync when initial data changes (e.g. after search)
	$effect(() => {
		newsList = data.newsData.items;
		nextCursor = data.newsData.nextCursor;
		hasMore = data.newsData.hasMore;
	});

	const currentSearch = $derived(page.url.searchParams.get('search') || '');

	const handleSearch = (value: string) => {
		const url = new URL(page.url);
		if (value) {
			url.searchParams.set('search', value);
		} else {
			url.searchParams.delete('search');
		}
		url.searchParams.delete('cursor');

		isLoading = true;
		goto(url, { keepFocus: true, replaceState: true, noScroll: true }).finally(() => {
			isLoading = false;
		});
	};

	const loadMore = async () => {
		if (!nextCursor || isLoadingMore) return;
		isLoadingMore = true;
		try {
			const newData = await fetchNews({ cursor: nextCursor, search });
			newsList = [...newsList, ...newData.items];
			nextCursor = newData.nextCursor;
			hasMore = newData.hasMore;
		} catch (error) {
			console.error('Error loading more news:', error);
		} finally {
			isLoadingMore = false;
		}
	};

	const clearSearch = () => {
		search = '';
		handleSearch('');
		searchInput?.focus();
	};
</script>

<Seo
	title="Tin tức & Cẩm nang lái xe"
	description="Cập nhật tin tức giao thông, luật mới 2025, và cẩm nang kinh nghiệm lái xe an toàn từ các chuyên gia tại Trung tâm Quốc Thắng."
/>

<div class="container mx-auto max-w-[1200px] px-4 py-12">
	<div class="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
		<div class="max-w-xl">
			<h1 class="mb-4 text-4xl font-bold">Tin tức & Cẩm nang lái xe</h1>
			<p class="text-slate-500">
				Cập nhật luật giao thông mới nhất, mẹo thi lý thuyết và thực hành từ các chuyên gia.
			</p>
		</div>

		<form
			onsubmit={(e) => {
				e.preventDefault();
				handleSearch(search);
			}}
			class="relative flex w-full md:w-96"
		>
			<div class="relative flex-1">
				<input
					type="text"
					bind:this={searchInput}
					bind:value={search}
					placeholder="Tìm kiếm bài viết..."
					class="w-full rounded-l-xl border border-r-0 border-slate-200 py-3 pr-10 pl-10 transition-all outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
				/>
				<span class="absolute top-1/2 left-3 -translate-y-1/2 opacity-30">
					{#if isLoading}
						<span
							class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"
						></span>
					{:else}
						🔍
					{/if}
				</span>

				{#if search}
					<button
						type="button"
						onclick={clearSearch}
						class="absolute top-1/2 right-3 -translate-y-1/2 text-slate-400 hover:text-slate-600"
						aria-label="Clear search"
					>
						✕
					</button>
				{/if}
			</div>
			<button
				type="submit"
				disabled={isLoading}
				class="cursor-pointer rounded-r-xl bg-primary px-6 py-3 font-medium text-white transition-all hover:bg-primary/90 focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50"
			>
				Tìm kiếm
			</button>
		</form>
	</div>

	{#if isLoading}
		<CardSkeleton count={6} />
	{:else if newsList.length === 0}
		<div class="flex flex-col items-center justify-center py-20 text-center">
			<h3 class="text-xl font-bold text-slate-400">
				{currentSearch
					? `Không tìm thấy kết quả nào cho "${currentSearch}"`
					: 'Chưa có bài viết nào'}
			</h3>
			<p class="mt-2 text-slate-500">
				{currentSearch
					? 'Thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc.'
					: 'Chúng tôi sẽ sớm cập nhật những thông tin mới nhất.'}
			</p>
			{#if currentSearch}
				<button
					onclick={clearSearch}
					class="mt-6 rounded-lg bg-slate-100 px-6 py-2 font-medium text-slate-600 transition-colors hover:bg-slate-200"
				>
					Xóa tìm kiếm
				</button>
			{/if}
		</div>
	{:else}
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each newsList as item}
				<article class="group">
					<a href="/tin-tuc/{item.slug}">
						<div class="mb-4 aspect-video overflow-hidden rounded-2xl bg-slate-100">
							{#if item.coverImage}
								<OptimizedImage
									src={item.coverImage}
									alt={item.name}
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							{:else}
								<div
									class="flex h-full w-full items-center justify-center font-bold text-slate-300"
								>
									No Image
								</div>
							{/if}
						</div>
						<div class="mb-2 flex items-center gap-2">
							<span class="text-xs text-slate-400">{formatDate(item.createdAt)}</span>
						</div>
						<h3 class="line-clamp-2 text-xl font-bold transition-colors group-hover:text-primary">
							{item.name}
						</h3>
						<p class="mt-2 line-clamp-2 text-sm text-slate-500">
							{item.descriptions}
						</p>
					</a>
				</article>
			{/each}
		</div>

		{#if hasMore}
			<div class="mt-12 flex justify-center">
				<button
					onclick={loadMore}
					disabled={isLoadingMore}
					class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-3 font-semibold text-slate-700 transition-all hover:border-primary/30 hover:bg-slate-50 hover:text-primary disabled:opacity-50"
				>
					{#if isLoadingMore}
						<span
							class="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"
						></span>
						Đang tải...
					{:else}
						Xem thêm bài viết
					{/if}
				</button>
			</div>
		{/if}
	{/if}
</div>
