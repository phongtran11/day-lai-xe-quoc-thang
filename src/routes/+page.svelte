<script lang="ts">
	import HeroSlider from '$lib/components/home/hero-slider.svelte';
	import WhyChooseUs from '$lib/components/home/why-choose-us.svelte';
	import Highlights from '$lib/components/home/highlights.svelte';
	import TestimonialsSlider from '$lib/components/home/testimonials-slider.svelte';
	import Seo from '$lib/components/common/seo.svelte';
	import { cn } from '$lib/utils';
</script>

<Seo
	title="Trang chủ"
	description="Trung tâm Đào tạo Lái xe Quốc Thắng - Cam kết đào tạo chuyên nghiệp, uy tín, tỉ lệ đậu cao."
/>

<HeroSlider />

<section id="course-categories" class="container mx-auto max-w-[1200px] px-4 py-20">
	<h2
		class={cn(
			'mb-12 text-center text-xl font-black tracking-widest text-primary uppercase md:text-2xl'
		)}
	>
		Danh mục hạng bằng lái
	</h2>
	<div class="grid grid-cols-2 gap-6 md:grid-cols-4">
		<!-- Placeholder: Danh mục các hạng bằng lái (A1, B1, B2, C...) -->
		<div
			class="rounded-2xl border border-slate-100 p-8 text-center font-bold shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
		>
			Hạng A1
		</div>
		<div
			class="rounded-2xl border border-slate-100 p-8 text-center font-bold shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
		>
			Hạng B1
		</div>
		<div
			class="rounded-2xl border border-slate-100 p-8 text-center font-bold shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
		>
			Hạng B2
		</div>
		<div
			class="rounded-2xl border border-slate-100 p-8 text-center font-bold shadow-sm transition-all hover:border-primary/20 hover:shadow-md"
		>
			Hạng C
		</div>
	</div>
</section>

<WhyChooseUs />

<Highlights />

<TestimonialsSlider />
