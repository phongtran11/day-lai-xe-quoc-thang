<script lang="ts">
	import { APP_CONFIG } from '$lib/constants/app';
	import { OptimizedImage, Seo } from '$lib/components/common';
	import { LICENSE_CATEGORIES } from '$lib/constants/license';
</script>

<Seo title="Giới thiệu" description="Giới thiệu về Trung tâm Đào tạo Lái xe Quốc Thắng" />

<div class="bg-white">
	<!-- Hero Header -->
	<header class="bg-slate-50 py-16 md:py-24">
		<div class="container mx-auto max-w-[1200px] px-4">
			<div class="max-w-3xl">
				<h1 class="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
					Về {APP_CONFIG.brand.fullName}
				</h1>
				<p class="text-xl leading-relaxed text-slate-600">
					Đơn vị đào tạo lái xe uy tín, tận tâm. Chúng tôi cam kết mang lại lộ trình học tập bài
					bản, hiệu quả và chuẩn mực theo quy định mới nhất của Bộ Giao thông Vận tải.
				</p>
			</div>
		</div>
	</header>

	<div class="container mx-auto max-w-[1200px] px-4 py-16 md:py-24">
		<div class="grid gap-16 lg:grid-cols-2">
			<!-- Text Content -->
			<div>
				<h2 class="mb-6 text-3xl font-bold text-slate-900">Cam kết chất lượng đào tạo</h2>
				<div class="prose max-w-none prose-slate">
					<p>
						Tại {APP_CONFIG.brand.fullName}, chúng tôi hiểu rằng việc sở hữu giấy phép lái xe không
						chỉ là một thủ tục hành chính, mà là sự bắt đầu của hành trình tham gia giao thông an
						toàn.
					</p>
					<p>
						<strong>Vì sao nên chọn chúng tôi?</strong>
					</p>
					<ul class="space-y-4">
						<li class="flex gap-3">
							<span class="font-bold text-primary">✓</span>
							<span
								><strong>Học phí trọn gói:</strong> Cam kết không phát sinh bất kỳ khoản phí nào sau khi
								đăng ký.</span
							>
						</li>
						<li class="flex gap-3">
							<span class="font-bold text-primary">✓</span>
							<span
								><strong>Đội ngũ chuyên nghiệp:</strong> Giáo viên dày dạn kinh nghiệm, nhiệt tình và
								am hiểu luật mới.</span
							>
						</li>
						<li class="flex gap-3">
							<span class="font-bold text-primary">✓</span>
							<span
								><strong>Cơ sở hiện đại:</strong> Sân tập đạt chuẩn sát hạch, hệ thống xe đời mới vận
								hành ổn định.</span
							>
						</li>
						<li class="flex gap-3">
							<span class="font-bold text-primary">✓</span>
							<span
								><strong>Thủ tục nhanh gọn:</strong> Hỗ trợ tối đa học viên trong các khâu đăng ký và
								nộp hồ sơ.</span
							>
						</li>
					</ul>
				</div>

				<div class="mt-10 rounded-2xl border border-primary/10 bg-primary/5 p-8">
					<h3 class="mb-6 text-xl font-bold text-primary">Thông tin liên hệ</h3>
					<ul class="space-y-6">
						{#each APP_CONFIG.contact.locations as loc}
							<li class="flex gap-4">
								<div class="shrink-0 text-2xl">🏢</div>
								<div>
									<p
										class="font-bold text-slate-900 underline decoration-primary/30 underline-offset-4"
									>
										{loc.label}
									</p>
									<p class="mt-1 text-slate-600">{loc.address}</p>
								</div>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<!-- Image Side (Cards/Grid style) -->
			<div class="space-y-6">
				<div
					class="group relative overflow-hidden rounded-3xl bg-slate-100 shadow-xl transition-all hover:shadow-2xl"
				>
					<OptimizedImage src="/images/about/office-medium-v1.webp" alt="office" />
					<div
						class="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity group-hover:opacity-100"
					>
						<p class="font-bold">Cơ sở vật chất đạt chuẩn</p>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-6">
					<div class="group relative overflow-hidden rounded-3xl bg-slate-100 shadow-lg">
						<OptimizedImage
							class="h-full"
							src="/images/about/office-medium-2-v1.webp"
							alt="office"
						/>
						<div
							class="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity group-hover:opacity-100"
						>
							Đội xe tập lái đời mới
						</div>
					</div>
					<div class="group relative overflow-hidden rounded-3xl bg-slate-100 shadow-lg">
						<OptimizedImage class="h-full" src="/images/about/cars-medium-v1.webp" alt="office" />
						<div
							class="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/60 to-transparent p-6 text-white opacity-0 transition-opacity group-hover:opacity-100"
						>
							Phòng học lý thuyết hiện đại
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- New License Categories Section (Law 2025) -->
		<section class="mt-24">
			<div class="mb-12 text-center">
				<h2 class="mb-4 text-3xl font-bold text-slate-900 md:text-5xl">
					Hệ thống hạng Bằng lái xe (Luật 2025)
				</h2>
				<div class="mx-auto mb-6 h-1.5 w-24 rounded-full bg-primary"></div>
				<p class="mx-auto max-w-2xl text-lg text-slate-600">
					Thông tin được cập nhật theo Luật Trật tự an toàn giao thông đường bộ 2024, có hiệu lực từ
					ngày 01/01/2025.
				</p>
			</div>

			<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each LICENSE_CATEGORIES as cat}
					<div
						class="group relative rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
					>
						<div
							class="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl font-black text-white shadow-lg shadow-primary/30"
						>
							{cat.code}
						</div>
						<h3
							class="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-primary"
						>
							{cat.title}
						</h3>
						<p class="text-sm leading-relaxed text-slate-500">
							{cat.desc}
						</p>
						<a
							href="/khoa-hoc"
							class="mt-6 flex items-center text-xs font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100"
						>
							XEM CHI TIẾT <span class="ml-2">→</span>
						</a>
					</div>
				{/each}
			</div>

			<div class="relative mt-16 overflow-hidden rounded-4xl bg-slate-900 p-8 text-white md:p-16">
				<div
					class="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
				></div>
				<div class="relative z-10 flex flex-col items-center justify-between gap-10 md:flex-row">
					<div class="max-w-2xl">
						<h3 class="mb-4 text-3xl font-bold md:text-4xl">
							Bạn chưa biết nên học hạng bằng nào?
						</h3>
						<p class="text-lg text-slate-400">
							Hãy liên hệ ngay để chuyên viên tư vấn chi tiết về độ tuổi, yêu cầu sức khỏe và lộ
							trình thi sát hạch phù hợp nhất với nhu cầu của bạn.
						</p>
					</div>
					<a
						href="/lien-he"
						class="rounded-full bg-primary px-10 py-5 text-lg font-bold whitespace-nowrap text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-primary/90 active:scale-95"
					>
						Tư vấn miễn phí
					</a>
				</div>
			</div>
		</section>
	</div>
</div>
