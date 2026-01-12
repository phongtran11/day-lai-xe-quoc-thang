<script lang="ts">
	import { Carousel } from '$lib/components/ui';
	import { cn } from '$lib/utils';
	import AutoScroll from 'embla-carousel-auto-scroll';
	import { Quote } from '@lucide/svelte';
	import { OptimizedImage } from '$lib/components/common';

	const testimonials = [
		{
			name: 'Trần Văn Nam',
			role: 'Học viên Hạng B2',
			content:
				'Thầy hướng dẫn mẹo thi lý thuyết rất dễ nhớ. Cơ sở vật chất thực sự rất tốt so với các trung tâm khác mà tôi từng tham khảo.',
			images: {
				small: '/images/testimonials/vn-man-1-small-v1.webp',
				medium: '/images/testimonials/vn-man-1-medium-v1.webp',
				large: '/images/testimonials/vn-man-1-large-v1.webp'
			}
		},
		{
			name: 'Lê Minh Tuấn',
			role: 'Học viên Hạng C',
			content:
				'Lịch học cực kỳ linh hoạt, phù hợp với người đi làm như tôi. Cảm ơn trung tâm đã hỗ trợ hồ sơ nhanh chóng, đi học ngay.',
			images: {
				small: '/images/testimonials/vn-man-2-small-v1.webp',
				medium: '/images/testimonials/vn-man-2-medium-v1.webp',
				large: '/images/testimonials/vn-man-2-large-v1.webp'
			}
		},

		{
			name: 'Hoàng Quốc Việt',
			role: 'Học viên Hạng B1',
			content:
				'Trải nghiệm tuyệt vời! Sân tập rộng rãi, giống hệt sân thi sát hạch nên lúc đi thi thật mình không hề bị bỡ ngỡ.',
			images: {
				small: '/images/testimonials/vn-man-3-small-v1.webp',
				medium: '/images/testimonials/vn-man-3-medium-v1.webp',
				large: '/images/testimonials/vn-man-3-large-v1.webp'
			}
		},
		{
			name: 'Nguyễn Thị Hoa',
			role: 'Học viên Hạng B1',
			content:
				'Dạy rất nhiệt tình, xe mới, máy lạnh mát rượi. Tôi đã thi đậu ngay lần đầu tiên nhờ sự hướng dẫn tận tâm của các thầy tại Quốc Thắng.',
			images: {
				small: '/images/testimonials/vn-woman-1-small-v1.webp',
				medium: '/images/testimonials/vn-woman-1-medium-v1.webp',
				large: '/images/testimonials/vn-woman-1-large-v1.webp'
			}
		},
		{
			name: 'Phạm Thanh Thủy',
			role: 'Học viên Hạng B2',
			content:
				'Học phí minh bạch, không phát sinh chi phí ẩn. Xe tập lái đời mới chạy rất êm, giúp mình tự tin hơn khi cầm lái.',
			images: {
				small: '/images/testimonials/vn-woman-2-small-v1.webp',
				medium: '/images/testimonials/vn-woman-2-medium-v1.webp',
				large: '/images/testimonials/vn-woman-2-large-v1.webp'
			}
		}
	];
</script>

<section class="overflow-hidden bg-slate-50 py-24">
	<div class="container mx-auto max-w-[1200px] px-4">
		<h2
			class={cn(
				'mb-16 text-center text-xl font-black tracking-widest text-primary uppercase md:text-2xl'
			)}
		>
			Ý kiến từ học viên
		</h2>

		<Carousel.Root
			opts={{
				loop: true,
				align: 'start'
			}}
			plugins={[
				AutoScroll({
					speed: 1,
					stopOnInteraction: false,
					playOnInit: true
				})
			]}
			class="w-full"
		>
			<Carousel.Content class="-ml-4 transform-gpu">
				{#each testimonials as item}
					<Carousel.Item class="pl-4 will-change-transform md:basis-1/2 lg:basis-1/3">
						<div
							class="h-full rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
						>
							<div class="mb-6 flex items-center gap-4">
								<div
									class="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-primary/20"
								>
									<OptimizedImage
										small={item.images.small}
										medium={item.images.medium}
										large={item.images.large}
										alt={item.name}
										class="transform-gpu"
									/>
								</div>
								<div>
									<h3 class="font-bold text-slate-800">{item.name}</h3>
									<p class="text-xs text-slate-500">{item.role}</p>
								</div>
								<div class="ml-auto text-primary/10">
									<Quote size={40} />
								</div>
							</div>
							<p class="text-sm leading-relaxed text-slate-600 italic">
								"{item.content}"
							</p>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
		</Carousel.Root>
	</div>
</section>
