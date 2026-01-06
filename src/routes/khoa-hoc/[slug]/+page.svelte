<svelte:head>
	<title>Chi tiết Khóa học | Trung tâm Đào tạo Lái xe Quốc Thắng</title>
</svelte:head>

<div class="container mx-auto px-4 py-12">
	<div class="grid gap-12 lg:grid-cols-3">
		<div class="lg:col-span-2">
			<h1 class="mb-6 text-4xl font-bold">Chi tiết Khóa học [Tên Khóa Học]</h1>
			<!-- Placeholder: Thông tin chi tiết: Học phí, thời gian đào tạo, hồ sơ cần chuẩn bị -->
			<div class="prose max-w-none">
				<h3>Thông tin chung</h3>
				<ul>
					<li><strong>Học phí:</strong> Liên hệ để có giá ưu đãi nhất</li>
					<li><strong>Thời gian đào tạo:</strong> 3 tháng</li>
					<li>
						<strong>Hồ sơ cần chuẩn bị:</strong>
						<ul class="list-disc pl-5">
							<li>01 CMND/CCCD photo</li>
							<li>06 ảnh 3x4 (nền xanh)</li>
							<li>Giấy khám sức khỏe lái xe</li>
						</ul>
					</li>
				</ul>

				<h3 class="mt-8">Nội dung đào tạo</h3>
				<p>Học viên sẽ được đào tạo bài bản từ lý thuyết đến thực hành...</p>
			</div>
		</div>

		<div class="lg:col-span-1">
			<div class="sticky top-24 rounded-xl border bg-white p-6 shadow-lg">
				<h4 class="mb-4 text-xl font-bold">Đăng ký tư vấn</h4>
				<p class="mb-6 text-slate-600">Để lại thông tin, chúng tôi sẽ liên hệ trong vòng 5 phút.</p>

				<!-- Placeholder: Nút "Đăng ký tư vấn" (Mở form hoặc nhảy đến Zalo/Hotline) -->
				<a
					href="/lien-he"
					class="transition-active mb-3 block w-full rounded-lg bg-blue-600 py-3 text-center font-bold text-white active:scale-95"
					>Đăng ký ngay</a
				>
				<button class="w-full rounded-lg border border-green-600 py-3 font-bold text-green-600"
					>Zalo tư vấn</button
				>
			</div>
		</div>
	</div>
</div>
