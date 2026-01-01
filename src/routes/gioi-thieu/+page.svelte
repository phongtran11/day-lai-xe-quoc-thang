<script lang="ts">
	import { APP_CONFIG } from '$lib/constants/app';
	import Seo from '$lib/components/common/seo.svelte';
</script>

<Seo title="Giới thiệu" />

<div class="container mx-auto px-4 py-12">
	<h1 class="mb-8 text-4xl font-bold">Giới thiệu</h1>

	<div class="prose max-w-none">
		<p class="mb-6 text-lg leading-relaxed">
			{APP_CONFIG.brand.fullName} kính chào quý khách. Chiêu sinh và khai giảng liên tục với thủ tục
			nhanh gọn các hạng lái xe ô tô B1, B2, C. Nâng dấu các hạng C, D, FC, E. Đặc biệt xe máy hạng
			A1, A2 mở khóa thi liên tục.
		</p>
		<p class="mb-6 text-lg leading-relaxed">
			Khi đăng ký, chúng tôi cam kết về học phí không phát sinh về sau. Với phương châm tận tâm với
			công việc, đội ngũ giáo viên nhiệt tình vui vẻ hướng dẫn cho học viên. Trung tâm thi sát hạch
			với các dòng xe đời mới, vận hành tốt tạo cảm giác yên tâm cho học viên trong suốt quá trình học
			cũng như khi thi.
		</p>

		<div class="mt-8 rounded-xl bg-slate-50 p-6 shadow-sm">
			<h2 class="mt-0 mb-4 text-xl font-bold text-primary">Thông tin liên hệ</h2>
			<ul class="list-none space-y-4 p-0">
				{#each APP_CONFIG.contact.locations as loc}
					<li class="flex flex-col gap-1">
						<span class="font-bold text-slate-700">{loc.label}:</span>
						<span class="text-slate-600">{loc.address}</span>
					</li>
				{/each}
			</ul>
			<p class="mt-6 font-medium italic text-primary">Rất hân hạnh được phục vụ quý khách!</p>
		</div>
	</div>

	<section class="mt-12">
		<h2 class="mb-6 text-2xl font-bold">Cơ sở vật chất & Đội ngũ xe tập</h2>
		<!-- Placeholder: Hình ảnh cơ sở vật chất, đội ngũ xe tập lái -->
		<div class="grid grid-cols-2 gap-4 md:grid-cols-3">
			<div class="flex aspect-video items-center justify-center rounded bg-slate-200">
				Hình ảnh sân tập
			</div>
			<div class="flex aspect-video items-center justify-center rounded bg-slate-200">
				Hình ảnh đội xe
			</div>
			<div class="flex aspect-video items-center justify-center rounded bg-slate-200">
				Hình ảnh phòng học
			</div>
		</div>
	</section>
</div>
