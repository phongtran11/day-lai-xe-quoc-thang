<script lang="ts">
	import { Phone, FilePen } from '@lucide/svelte';
	import { APP_CONFIG } from '$lib/constants/app';

	let visible = $state(true);
</script>

<div
	class="fixed bottom-0 left-0 z-40 w-full border-t border-gray-100 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] sm:hidden"
>
	<div class="flex gap-3">
		<a
			href={APP_CONFIG.contact.hotlineLink}
			class="transition-active flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-100 py-3 font-bold text-slate-700 active:scale-95"
		>
			<Phone size={18} />
			<span>Gọi điện</span>
		</a>
		<a
			href="/lien-he"
			class="transition-active flex flex-[1.5] items-center justify-center gap-2 rounded-xl bg-primary py-3 font-bold text-white shadow-lg shadow-primary/20 active:scale-95"
		>
			<FilePen size={18} />
			<span>Đăng ký tư vấn</span>
		</a>
	</div>
</div>
