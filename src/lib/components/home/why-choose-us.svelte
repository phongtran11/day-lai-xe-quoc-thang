<script lang="ts">
	import { APP_CONFIG } from '$lib/constants/app';
	import { cn } from '$lib/utils';

	const stats = [
		{ value: '15.000+', label: 'HỌC VIÊN ĐÃ CÓ BẰNG' },
		{ value: '100%', label: 'HỌC THỰC HÀNH 1 THẦY - 1 TRÒ' },
		{ value: '120+', label: 'XE TẬP LÁI ĐỜI MỚI' },
		{ value: '100+', label: 'GIÁO VIÊN TẬN TÂM' }
	];
</script>

<section
	class={cn(
		'relative h-[500px] w-full items-center justify-center overflow-hidden px-4 py-20 md:flex'
	)}
>
	<!-- Background Image -->
	<div class="absolute inset-0 z-0">
		<img
			src="/images/home/why-choose-us-bg.jpg"
			alt="Vì sao chọn chúng tôi"
			class="h-full w-full object-cover opacity-30 grayscale"
			loading="lazy"
		/>
		<div class="absolute inset-0 bg-black/60"></div>
	</div>

	<div class="relative z-10 container mx-auto max-w-[1200px]">
		<h2
			class={cn(
				'mb-12 text-center text-xl font-black tracking-widest text-primary uppercase md:text-2xl'
			)}
		>
			VÌ SAO BẠN NÊN CHỌN CHÚNG TÔI?
		</h2>

		<div class="grid grid-cols-2 gap-8 md:grid-cols-4">
			{#each stats as stat}
				<div class="text-center">
					<div class="mb-2 text-3xl font-black text-primary md:text-5xl">
						{stat.value}
					</div>
					<div class="text-[10px] font-bold tracking-wider text-white md:text-xs">
						{stat.label}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
