<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel';
	import { NavButton } from '$lib/components/layout';
	import { FilePen, ChevronRight } from '@lucide/svelte';
	import { cn } from '$lib/utils';
	import Autoplay from 'embla-carousel-autoplay';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context';

	const slides = [
		{
			image: '/images/hero/slider-1-v1.webp',
			mobileImage: '/images/hero/slider-1-sp-v1.webp',
			title: 'Đào Tạo Lái Xe Chuyên Nghiệp',
			description:
				'Hỗ trợ học viên từ con số 0 đến khi nhận bằng. Cam kết tỉ lệ đậu cao nhất khu vực.',
			cta: 'Xem khóa học',
			href: '/khoa-hoc'
		},
		{
			image: '/images/hero/slider-2-v1.webp',
			mobileImage: '/images/hero/slider-2-sp-v1.webp',
			title: 'Giảng Viên Tận Tâm - Xe Đời Mới',
			description: 'Học thực hành 1 kèm 1 trên các dòng xe đời mới, máy lạnh mát rượi.',
			cta: 'Đăng ký ngay',
			href: '/lien-he'
		},
		{
			image: '/images/hero/slider-3-v1.webp',
			mobileImage: '/images/hero/slider-3-sp-v1.webp',
			title: 'Thủ Tục Nhanh Gọn - Học Phí Trả Góp',
			description: 'Hỗ trợ trả góp học phí 0%. Hồ sơ đơn giản, đi học ngay sau khi đăng ký.',
			cta: 'Tư vấn miễn phí',
			href: '/lien-he'
		}
	];

	let api = $state<CarouselAPI>();
	let selectedIndex = $state(-1);

	$effect(() => {
		// Kích hoạt animation cho slide đầu tiên khi vừa load trang
		const timeout = setTimeout(() => {
			if (selectedIndex === -1) selectedIndex = 0;
		}, 100);

		if (!api) return;

		const onSelect = () => {
			selectedIndex = api!.selectedScrollSnap();
		};

		api.on('select', onSelect);
		api.on('reInit', onSelect);

		return () => {
			clearTimeout(timeout);
			api?.off('select', onSelect);
		};
	});
</script>

<section class="relative w-full overflow-hidden bg-slate-900">
	<Carousel.Root
		setApi={(val) => (api = val)}
		opts={{ loop: true }}
		plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
		class="w-full"
	>
		<Carousel.Content>
			{#each slides as slide, i}
				<Carousel.Item class="relative h-[550px] w-full md:h-[650px]">
					<!-- Background Image with Ken Burns effect -->
					<div class="absolute inset-0 z-0 overflow-hidden">
						<picture>
							<source media="(max-width: 768px)" srcset={slide.mobileImage} />
							<img
								src={slide.image}
								alt={slide.title}
								loading={i === 0 ? 'eager' : 'lazy'}
								fetchpriority={i === 0 ? 'high' : 'auto'}
								class="h-full w-full object-cover opacity-60 transition-transform duration-10000 ease-linear"
								style="transform: scale({selectedIndex === i ? '1.15' : '1'})"
							/>
						</picture>
						<div
							class="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/80 md:bg-linear-to-r md:from-black/90 md:via-black/50 md:to-transparent"
						></div>
					</div>

					<!-- Content with Staggered Animations -->
					<div class="relative z-10 container mx-auto flex h-full max-w-[1200px] items-center px-4">
						<div class="w-full max-w-3xl space-y-6 text-center text-white md:text-left">
							<div class="overflow-hidden">
								<h2
									class="will-change-transform-opacity text-3xl leading-tight font-black tracking-tight uppercase transition-all duration-700 md:text-7xl"
									style="transform: translateY({selectedIndex === i
										? '0'
										: '100%'}); opacity: {selectedIndex === i ? '1' : '0'}"
								>
									{@html slide.title
										.split(' ')
										.map((word, index, arr) =>
											index === arr.length - 1 || index === arr.length - 2
												? `<span class="text-primary">${word}</span>`
												: word
										)
										.join(' ')}
								</h2>
							</div>

							<p
								class="will-change-transform-opacity mx-auto max-w-xl text-base leading-relaxed text-gray-300 transition-all delay-300 duration-700 md:mx-0 md:text-xl"
								style="transform: translateY({selectedIndex === i
									? '0'
									: '20px'}); opacity: {selectedIndex === i ? '1' : '0'}"
							>
								{slide.description}
							</p>

							<div
								class="will-change-transform-opacity flex flex-wrap justify-center gap-4 pt-4 transition-all delay-500 duration-700 md:justify-start md:gap-6 md:pt-6"
								style="transform: translateY({selectedIndex === i
									? '0'
									: '20px'}); opacity: {selectedIndex === i ? '1' : '0'}"
							>
								<NavButton
									href={slide.href}
									label={slide.cta}
									icon={FilePen}
									class="scale-105 md:scale-110"
								/>
								<a
									href="/gioi-thieu"
									class="group flex items-center gap-2 font-bold text-white transition-colors hover:text-primary"
								>
									<span
										class="border-b-2 border-transparent text-sm group-hover:border-primary md:text-base"
										>Tìm hiểu thêm</span
									>
									<ChevronRight size={20} class="transition-transform group-hover:translate-x-1" />
								</a>
							</div>
						</div>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>

		<!-- Custom Navigation Indicators -->
		<div
			class="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3 md:right-12 md:left-auto md:translate-x-0"
		>
			{#each slides as _, i}
				<button
					class={cn(
						'h-1.5 rounded-full transition-all duration-500',
						selectedIndex === i ? 'w-10 bg-primary' : 'w-4 bg-white/30 hover:bg-white/50'
					)}
					onclick={() => api?.scrollTo(i)}
					aria-label="Go to slide {i + 1}"
				></button>
			{/each}
		</div>

		<Carousel.Previous
			class="left-4 hidden border-none bg-white/10 text-white hover:bg-primary md:flex"
		/>
		<Carousel.Next
			class="right-4 hidden border-none bg-white/10 text-white hover:bg-primary md:flex"
		/>
	</Carousel.Root>
</section>
