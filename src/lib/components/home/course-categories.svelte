<script lang="ts">
	import { LICENSE_CATEGORIES } from '$lib/constants/license';
	import { Bike, Car, Truck, BusFront, ArrowRight } from '@lucide/svelte';

	// Mapping icons to main categories
	const categoryIcons: Record<string, any> = {
		A1: Bike,
		A: Bike,
		B: Car,
		C: Truck,
		D: BusFront,
		B1: Bike
	};

	// We only show the most popular categories on the home page
	const featuredCodes = ['A1', 'A', 'B', 'C', 'D', 'CE'];
	const featuredCategories = LICENSE_CATEGORIES.filter((cat) => featuredCodes.includes(cat.code));
</script>

<section id="course-categories" class="bg-slate-50 py-24">
	<div class="container mx-auto max-w-[1200px] px-4">
		<div class="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
			<div class="max-w-xl text-center md:text-left">
				<h2 class="mb-4 text-sm font-black tracking-[0.2em] text-primary uppercase">
					Chương trình đào tạo
				</h2>
				<h3 class="text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
					Các hạng bằng lái xe phổ biến
				</h3>
			</div>
			<a
				href="/khoa-hoc"
				class="group flex items-center gap-2 font-bold text-primary transition-colors hover:text-primary/80"
			>
				Xem tất cả hạng bằng
				<ArrowRight size={20} class="transition-transform group-hover:translate-x-1" />
			</a>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each featuredCategories as cat}
				<a
					href="/khoa-hoc"
					class="group relative flex flex-col overflow-hidden rounded-3xl border border-white bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-xl"
				>
					<div class="mb-6 flex items-center justify-between">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white"
						>
							<svelte:component this={categoryIcons[cat.code] || Car} size={32} />
						</div>
						<span
							class="text-4xl font-black text-slate-100 transition-colors group-hover:text-primary/10"
						>
							{cat.code}
						</span>
					</div>

					<h4 class="mb-3 text-xl font-bold text-slate-900">
						{cat.title}
					</h4>
					<p class="mb-6 line-clamp-2 text-sm leading-relaxed text-slate-500">
						{cat.desc}
					</p>

					<div
						class="mt-auto flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase opacity-0 transition-opacity group-hover:opacity-100"
					>
						Tìm hiểu thêm <ArrowRight size={14} />
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>
