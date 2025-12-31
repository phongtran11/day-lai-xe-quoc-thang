<svelte:head>
	<title>Tài liệu & Tin tức | Trung tâm Đào tạo Lái xe Quốc Thắng</title>
</svelte:head>

<div class="container mx-auto px-4 py-12">
	<div class="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
		<div class="max-w-xl">
			<h1 class="mb-4 text-4xl font-bold">Tin tức & Cẩm nang lái xe</h1>
			<p class="text-slate-500">
				Cập nhật luật giao thông mới nhất, mẹo thi lý thuyết và thực hành từ các chuyên gia.
			</p>
		</div>

		<!-- Placeholder: Tìm kiếm bài viết -->
		<div class="w-full md:w-80">
			<div class="relative">
				<input
					type="text"
					placeholder="Tìm kiếm bài viết..."
					class="w-full rounded-xl border py-3 pr-4 pl-10 transition-all outline-none focus:ring-2 focus:ring-primary/20"
				/>
				<span class="absolute top-1/2 left-3 -translate-y-1/2 opacity-30">🔍</span>
			</div>
		</div>
	</div>

	<!-- Placeholder: Phân loại bài viết theo Category/Tags -->
	<div class="mb-10 flex flex-wrap gap-2 overflow-x-auto border-b pb-4">
		<button class="rounded-full bg-primary px-5 py-2 font-medium whitespace-nowrap text-white"
			>Tất cả</button
		>
		<button
			class="rounded-full bg-slate-100 px-5 py-2 font-medium whitespace-nowrap text-slate-600 transition-colors hover:bg-slate-200"
			>Luật giao thông</button
		>
		<button
			class="rounded-full bg-slate-100 px-5 py-2 font-medium whitespace-nowrap text-slate-600 transition-colors hover:bg-slate-200"
			>Mẹo thi lý thuyết</button
		>
		<button
			class="rounded-full bg-slate-100 px-5 py-2 font-medium whitespace-nowrap text-slate-600 transition-colors hover:bg-slate-200"
			>Kỹ thuật lái xe</button
		>
		<button
			class="rounded-full bg-slate-100 px-5 py-2 font-medium whitespace-nowrap text-slate-600 transition-colors hover:bg-slate-200"
			>Tin dự án</button
		>
	</div>

	<!-- Placeholder: Danh sách bài viết (Blog) -->
	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each Array(6) as _, i}
			<article class="group">
				<a href="/tin-tuc/bai-viet-so-{i + 1}">
					<div class="mb-4 aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100">
						<!-- Placeholder image placeholder -->
						<div
							class="flex h-full w-full items-center justify-center font-bold text-slate-300 transition-transform duration-500 group-hover:scale-105"
						>
							Cover Image
						</div>
					</div>
					<div class="mb-2 flex items-center gap-2">
						<span class="text-xs font-bold tracking-wider text-primary uppercase">Mẹo thi cử</span>
						<span class="text-xs text-slate-400">•</span>
						<span class="text-xs text-slate-400">30/12/2025</span>
					</div>
					<h3 class="line-clamp-2 text-xl font-bold transition-colors group-hover:text-primary">
						Tổng hợp 60 câu hỏi điểm liệt thi bằng lái xe B2 mới nhất 2024
					</h3>
					<p class="mt-2 line-clamp-2 text-sm text-slate-500">
						Dưới đây là danh sách 60 câu hỏi điểm liệt mà học viên cần đặc biệt lưu ý khi ôn thi lý
						thuyết bằng lái xe ô tô hạng B2...
					</p>
				</a>
			</article>
		{/each}
	</div>

	<!-- Pagination placeholder -->
	<div class="mt-16 flex justify-center gap-2">
		<button
			class="flex h-10 w-10 items-center justify-center rounded border bg-primary font-bold text-white"
			>1</button
		>
		<button
			class="flex h-10 w-10 items-center justify-center rounded border font-medium transition-colors hover:bg-slate-50"
			>2</button
		>
		<button
			class="flex h-10 w-10 items-center justify-center rounded border font-medium transition-colors hover:bg-slate-50"
			>3</button
		>
		<button
			class="ml-2 flex h-10 items-center justify-center rounded border px-4 font-medium transition-colors hover:bg-slate-50"
			>Sau →</button
		>
	</div>
</div>
