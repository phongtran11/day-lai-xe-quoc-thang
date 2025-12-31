<script lang="ts">
	import { APP_CONFIG } from '$lib/constants/app';
	import MapFacade from '$lib/components/ui/map-facade.svelte';
	import Seo from '$lib/components/common/seo.svelte';
</script>

<Seo title="Giới thiệu" />

<div class="container mx-auto px-4 py-12">
	<h1 class="mb-8 text-4xl font-bold">Giới thiệu về Trung tâm Quốc Thắng</h1>

	<div class="prose max-w-none">
		<!-- Placeholder: Bài viết giới thiệu về trung tâm Quốc Thắng -->
		<p class="mb-6 text-lg leading-relaxed">
			Trung tâm đào tạo lái xe Quốc Thắng tự hào là đơn vị uy tín hàng đầu trong lĩnh vực đào tạo
			sát hạch lái xe các hạng...
		</p>
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
