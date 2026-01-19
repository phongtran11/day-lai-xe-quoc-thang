<script lang="ts">
	import { cn } from '$lib/utils';
	import whyChooseUsImage from '$lib/assets/about/z7425272318882_201f10fe9d76d125cfcf2e3989ce4ec7.jpg?enhanced';

	const stats = [
		{ value: '15.000+', label: 'HỌC VIÊN ĐÃ CÓ BẰNG' },
		{ value: '100%', label: 'HỌC THỰC HÀNH 1 THẦY - 1 TRÒ' },
		{ value: '120+', label: 'XE TẬP LÁI ĐỜI MỚI' },
		{ value: '100+', label: 'GIÁO VIÊN TẬN TÂM' }
	];
</script>

<section
	class={cn('relative  w-full items-center justify-center overflow-hidden px-4 py-20 md:flex')}
>
	<!-- Background Image -->
	<div class="absolute inset-0 z-0 aspect-auto overflow-hidden">
		<enhanced:img
			src={whyChooseUsImage}
			sizes="(min-width:1920px) 1280px, (min-width:1080px) 640px, (min-width:768px) 400px"
			alt="Vì sao chọn chúng tôi"
			class="h-full w-full object-cover object-center"
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

		<div class="my-8 h-[300px] md:h-[563px]">
			<iframe
				width="100%"
				height="100%"
				src="https://www.youtube.com/embed/UR1z2owLdvM?autoplay=1&mute=1&playlist=UR1z2owLdvM&loop=1&si=ReijvTPDn1PUGIsw"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
				loading="lazy"
			></iframe>
		</div>
	</div>
</section>
