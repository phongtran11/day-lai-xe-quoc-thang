<script lang="ts">
	import { fetchCourses } from '$lib/api';
	import { Seo, OptimizedImage } from '$lib/components/common';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();

	let coursesList = $state(data.coursesData.items);
	let nextCursor = $state(data.coursesData.nextCursor);
	let hasMore = $state(data.coursesData.hasMore);
	let isLoadingMore = $state(false);

	$effect(() => {
		coursesList = data.coursesData.items;
		nextCursor = data.coursesData.nextCursor;
		hasMore = data.coursesData.hasMore;
	});

	const loadMore = async () => {
		if (!nextCursor || isLoadingMore) return;
		isLoadingMore = true;
		try {
			const newData = await fetchCourses({ cursor: nextCursor });
			coursesList = [...coursesList, ...newData.items];
			nextCursor = newData.nextCursor;
			hasMore = newData.hasMore;
		} catch (error) {
			console.error('Error loading more courses:', error);
		} finally {
			isLoadingMore = false;
		}
	};
</script>

<Seo
	title="Khóa học Lái xe Ô tô & Xe máy"
	description="Dịch vụ đào tạo lái xe uy tín tại Long An. Chiêu sinh các khóa học bằng lái A1, A2, B1, B2, C, D, E. Cam kết tỉ lệ đậu cao, học phí minh bạch."
/>

<div class="container mx-auto max-w-[1200px] px-4 py-12">
	<h1 class="mb-8 text-3xl font-bold text-primary">Các Khóa học Đào tạo</h1>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each coursesList as course (course.id)}
			<div class="overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md">
				{#if course.coverImage}
					<OptimizedImage
						src={course.coverImage}
						alt={course.coverImageName || course.name}
						class="h-48 w-full"
					/>
				{:else}
					<div class="flex h-48 items-center justify-center bg-slate-200 text-slate-400">
						No Image
					</div>
				{/if}
				<div class="p-6">
					<h3 class="mb-2 text-xl font-bold">{course.name}</h3>
					<p class="mb-4 line-clamp-2 text-slate-600">
						{course.descriptions}
					</p>
					<a href="/khoa-hoc/{course.slug}" class="font-medium text-blue-600 hover:underline">
						Chi tiết →
					</a>
				</div>
			</div>
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
					Xem thêm khóa học
				{/if}
			</button>
		</div>
	{/if}
</div>
