<script lang="ts">
	import { APP_CONFIG } from '$lib/constants/app';
	import { cn } from '$lib/utils';
</script>

<div class="fixed bottom-1/4 left-4 z-50 flex flex-col gap-4">
	{#each APP_CONFIG.socialLinks as link}
		<a
			href={link.href}
			class={cn(
				'group relative flex h-12 w-12 items-center justify-center rounded-full text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)]',
				link.color
			)}
			aria-label={link.name}
		>
			<!-- Pulsing background effect -->
			<span
				class={cn(
					'absolute inset-0 animate-ping rounded-full opacity-40 duration-1000',
					link.color
				)}
			></span>
			<span
				class={cn(
					'absolute inset-0 animate-ping rounded-full opacity-20 [animation-delay:500ms]',
					link.color
				)}
			></span>

			<div class="animate-ring relative z-10">
				{#if link.name === 'Facebook'}
					<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
						<path
							d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.248h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
						/>
					</svg>
				{:else if link.name === 'TikTok'}
					<svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
						<path
							d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
						/>
					</svg>
				{:else if link.name === 'Zalo'}
					<span class="text-xs font-black">Zalo</span>
				{:else if typeof link.icon !== 'string'}
					<link.icon class="h-6 w-6" />
				{/if}
			</div>

			<!-- Tooltip -->
			<span
				class="pointer-events-none absolute left-full ml-4 rounded bg-black px-2 py-1 text-[10px] whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100"
			>
				{link.name}
			</span>
		</a>
	{/each}
</div>

<style>
	:global(.animate-ring) {
		animation: ring 2s ease-infinite;
	}

	@keyframes ring {
		0% {
			transform: rotate(0) scale(1) skew(1deg);
		}
		10% {
			transform: rotate(-25deg) scale(1) skew(1deg);
		}
		20% {
			transform: rotate(25deg) scale(1) skew(1deg);
		}
		30% {
			transform: rotate(-25deg) scale(1) skew(1deg);
		}
		40% {
			transform: rotate(25deg) scale(1) skew(1deg);
		}
		50% {
			transform: rotate(0) scale(1) skew(1deg);
		}
		100% {
			transform: rotate(0) scale(1) skew(1deg);
		}
	}
</style>
