<script lang="ts">
	import { page } from '$app/state';
	import { buttonVariants } from '$lib/components/ui';
	import { cn } from '$lib/utils';

	const error = $derived(page.error);
	const status = $derived(page.status);
</script>

<svelte:head>
	<title>Lỗi {status} | Trung tâm Đào tạo Lái xe Quốc Thắng</title>
</svelte:head>

<div
	class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center"
>
	<!-- Decorative Background Elements -->
	<div class="absolute inset-0 -z-10 bg-white">
		<div
			class="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]"
		></div>
		<div
			class="absolute right-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]"
		></div>
	</div>

	<!-- Main Content Section -->
	<div class="relative">
		<!-- Large faded status code in background -->
		<span
			class="pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black tracking-tighter text-slate-100/30 select-none md:text-[20rem]"
		>
			{status}
		</span>

		<!-- Foreground text content -->
		<div class="relative z-10 flex flex-col items-center pt-8 md:pt-16">
			<div
				class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl shadow-inner md:h-24 md:w-24 md:text-5xl"
			>
				{#if status === 404}
					🧭
				{:else}
					⚠️
				{/if}
			</div>

			<h1 class="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
				{#if status === 404}
					Trang không tồn tại
				{:else}
					Đã xảy ra lỗi
				{/if}
			</h1>

			<p class="mx-auto max-w-lg text-lg text-slate-600 md:text-xl">
				{#if status === 404}
					Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển sang một địa chỉ
					khác.
				{:else}
					{error?.message || 'Đã có lỗi không mong muốn xảy ra. Vui lòng thử lại sau.'}
				{/if}
			</p>
		</div>
	</div>

	<!-- Navigation Action Buttons -->
	<div class="mt-12 flex flex-col items-center gap-4 sm:flex-row">
		<a
			href="/"
			class={cn(
				buttonVariants({ size: 'lg' }),
				'rounded-full px-10 py-7 text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95'
			)}
		>
			Về trang chủ
		</a>
		<button
			onclick={() => window.history.back()}
			class={cn(
				buttonVariants({ variant: 'outline', size: 'lg' }),
				'cursor-pointer rounded-full bg-white px-10 py-7 text-lg transition-all hover:bg-slate-50 active:scale-95'
			)}
		>
			Quay lại trang trước
		</button>
	</div>
</div>
