<script lang="ts">
	import { Phone, FilePen } from '@lucide/svelte';
	import { APP_CONFIG } from '$lib/constants/app';

	let visible = $state(true);
</script>

<div
	class="fixed bottom-0 left-0 z-40 w-full border-t border-gray-100 bg-white/90 p-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md sm:hidden"
>
	<div class="flex gap-2">
		<a
			href={APP_CONFIG.contact.hotlineLink}
			class="transition-active flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-100 py-2.5 font-bold text-slate-700 active:scale-95"
		>
			<Phone size={16} />
			<span class="text-sm">Gọi điện</span>
		</a>
		<a
			href="/lien-he"
			class="transition-active flex flex-[1.5] items-center justify-center gap-2 rounded-lg bg-primary py-2.5 font-bold text-white shadow-lg shadow-primary/20 active:scale-95"
		>
			<FilePen size={16} />
			<span class="text-sm">Đăng ký tư vấn</span>
		</a>
	</div>
</div>
