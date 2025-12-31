<svelte:head>
	<title>Danh mục Khóa học | Trung tâm Đào tạo Lái xe Quốc Thắng</title>
</svelte:head>

<div class="container mx-auto px-4 py-12">
	<h1 class="mb-8 text-center text-3xl font-bold">Các Khóa học Đào tạo</h1>

	<!-- Placeholder: Bộ lọc/Phân loại khóa học -->
	<div class="mb-8 flex flex-wrap justify-center gap-4">
		<button class="rounded-full border bg-slate-900 px-4 py-2 text-white">Tất cả</button>
		<button class="rounded-full border px-4 py-2 hover:bg-slate-100">Ô tô</button>
		<button class="rounded-full border px-4 py-2 hover:bg-slate-100">Xe máy</button>
	</div>

	<!-- Placeholder: List các khóa học theo nhóm (Ô tô/Xe máy) -->
	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
		<div class="overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md">
			<div class="h-48 bg-slate-200"></div>
			<div class="p-6">
				<h3 class="mb-2 text-xl font-bold">Khóa học B2</h3>
				<p class="mb-4 text-slate-600">Đào tạo lái xe ô tô số sàn chuyên nghiệp.</p>
				<a href="/khoa-hoc/b2" class="font-medium text-blue-600">Chi tiết →</a>
			</div>
		</div>
		<div class="overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md">
			<div class="h-48 bg-slate-200"></div>
			<div class="p-6">
				<h3 class="mb-2 text-xl font-bold">Khóa học A1</h3>
				<p class="mb-4 text-slate-600">Đào tạo lái xe máy dung tích dưới 175cc.</p>
				<a href="/khoa-hoc/a1" class="font-medium text-blue-600">Chi tiết →</a>
			</div>
		</div>
	</div>
</div>
