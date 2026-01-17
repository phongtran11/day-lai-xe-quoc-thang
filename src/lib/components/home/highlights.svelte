<script lang="ts">
	import { APP_CONFIG } from '$lib/constants/app';
	import { cn } from '$lib/utils';
	import {
		Users,
		Car,
		Banknote,
		CalendarClock,
		UserCheck,
		GraduationCap,
		Map,
		ShieldCheck
	} from '@lucide/svelte';

	const highlights = [
		{
			icon: Users,
			title: 'GIÁO VIÊN GIỎI',
			description:
				'Đội ngũ giáo viên nhiều kinh nghiệm, nhiệt huyết, tận tâm. Giúp học viên dễ dàng vượt qua kỳ thi với tỷ lệ đậu cao.',
			color: 'text-orange-500',
			bgColor: 'bg-orange-50'
		},
		{
			icon: Car,
			title: 'XE TẬP LÁI ĐỜI MỚI',
			description:
				'100% xe tập lái là các xe Vios 2022 đời mới, có máy lạnh và được bảo dưỡng định kỳ theo tiêu chuẩn an toàn.',
			color: 'text-emerald-500',
			bgColor: 'bg-emerald-50'
		},
		{
			icon: Banknote,
			title: 'HỌC PHÍ TRỌN GÓI',
			description:
				'Học phí được công khai rõ ràng và minh bạch. Học viên sẽ không phải lo lắng về bất kỳ khoản chi phí phát sinh nào.',
			color: 'text-yellow-500',
			bgColor: 'bg-yellow-50'
		},
		{
			icon: CalendarClock,
			title: 'THỜI GIAN LINH HOẠT',
			description:
				'Xếp lịch học dựa trên lịch trình và nhu cầu của học viên giúp bạn dễ dàng kết hợp học tập với công việc.',
			color: 'text-red-500',
			bgColor: 'bg-red-50'
		},
		{
			icon: UserCheck,
			title: 'CHƯƠNG TRÌNH HỌC 1:1',
			description:
				'Chương trình học 1 thầy dạy 1 trò và được thiết kế riêng cho từng học viên đảm bảo học viên nắm vững kiến thức.',
			color: 'text-blue-500',
			bgColor: 'bg-blue-50'
		},
		{
			icon: GraduationCap,
			title: 'TỶ LỆ ĐẬU CAO',
			description:
				'Nhờ giáo viên kinh nghiệm và phương pháp đào tạo hiệu quả, học viên dễ dàng vượt qua kỳ thi với tỷ lệ đậu cao.',
			color: 'text-indigo-500',
			bgColor: 'bg-indigo-50'
		},
		{
			icon: Map,
			title: 'SÂN SÁT HẠCH RIÊNG',
			description:
				'Học viên được học trực tiếp trên sân thi - xe thi, dễ dàng làm quen với điều kiện thi và tự tin hơn khi bước vào kỳ thi.',
			color: 'text-cyan-500',
			bgColor: 'bg-cyan-50'
		},
		{
			icon: ShieldCheck,
			title: 'DỊCH VỤ HOÀN HẢO',
			description:
				'Hỗ trợ học viên một cách tận tâm và chu đáo từ lúc đăng ký cho đến khi nhận bằng. Giải quyết mọi vấn đề của học viên.',
			color: 'text-rose-500',
			bgColor: 'bg-rose-50'
		}
	];
</script>

<section class="bg-white px-4 py-20">
	<div class="container mx-auto max-w-[1200px]">
		<h2
			class={cn(
				'mb-16 text-center text-xl font-black tracking-widest text-primary uppercase md:text-2xl'
			)}
		>
			ĐIỂM NỘI BẬT {APP_CONFIG.brand.name}
		</h2>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each highlights as item}
				<div
					class="group rounded-2xl border border-slate-100 p-8 text-center shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
				>
					<div
						class={cn(
							'mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform group-hover:scale-110',
							item.bgColor,
							item.color
						)}
					>
						<item.icon size={32} />
					</div>
					<h3 class="mb-4 text-sm font-black tracking-tight text-slate-800 uppercase">
						{item.title}
					</h3>
					<p class="text-justify text-xs leading-relaxed text-slate-500">
						{item.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
