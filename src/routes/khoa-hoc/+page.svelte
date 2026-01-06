<script lang="ts">
	import OptimizedImage from '$lib/components/ui/optimized-image.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Danh mục Khóa học | Trung tâm Đào tạo Lái xe Quốc Thắng</title>
</svelte:head>

<div class="container mx-auto px-4 py-12">
	<h1 class="mb-8 text-3xl font-bold text-primary">Các Khóa học Đào tạo</h1>

	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each data.driversCourses as course (course.id)}
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
					<div class="mb-2 flex flex-wrap gap-2">
						{#each course.categories as category}
							<span class="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600">{category}</span
							>
						{/each}
					</div>
					<h3 class="mb-2 text-xl font-bold">{course.name}</h3>
					<p class="mb-4 line-clamp-2 text-slate-600">
						{course.description}
					</p>
					<a href="/khoa-hoc/{course.slug}" class="font-medium text-blue-600 hover:underline">
						Chi tiết →
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>
