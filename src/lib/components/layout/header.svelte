<script lang="ts">
	import { FilePen, Clock, Phone, Menu, X } from '@lucide/svelte';
	import { APP_CONFIG } from '$lib/constants/app';
	import Logo from './logo.svelte';
	import ContactItem from './contact-item.svelte';
	import NavButton from './nav-button.svelte';
	import { page } from '$app/state';

	let isMobileMenuOpen = $state(false);

	const navItems = [
		{ label: 'Trang chủ', href: '/' },
		{ label: 'Giới thiệu', href: '/gioi-thieu' },
		{ label: 'Khóa học', href: '/khoa-hoc' },
		{ label: 'Thi thử', href: '/thi-thu' },
		{ label: 'Tin tức', href: '/tin-tuc' },
		{ label: 'Liên hệ', href: '/lien-he' }
	];

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}
</script>

<header class="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
	<div class="container mx-auto max-w-[1200px] px-4">
		<div class="flex h-20 items-center justify-between">
			<!-- Logo/Brand Name -->
			<div class="flex items-center gap-8">
				<Logo variant="header" />

				<!-- Desktop Navigation -->
				<nav class="hidden lg:block">
					<ul class="flex items-center gap-6">
						{#each navItems as item}
							<li>
								<a
									href={item.href}
									class="text-sm font-bold transition-colors hover:text-primary {page.url
										.pathname === item.href
										? 'text-primary'
										: 'text-slate-600'}"
								>
									{item.label}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>

			<!-- Quick Info & Action -->
			<div class="flex items-center gap-4 lg:gap-8">
				<div class="hidden flex-col items-end gap-1 xl:flex">
					<ContactItem icon={Clock} href="#" label="Tư vấn: 8h - 20h" value="" />
					<ContactItem
						icon={Phone}
						value={APP_CONFIG.contact.hotline}
						href={APP_CONFIG.contact.hotlineLink}
					/>
				</div>

				<div class="hidden sm:block">
					<NavButton href="#register" label="Đăng ký ngay" icon={FilePen} />
				</div>

				<!-- Mobile Menu Button -->
				<button
					class="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
					onclick={toggleMobileMenu}
					aria-label="Toggle Menu"
				>
					{#if isMobileMenuOpen}
						<X size={24} />
					{:else}
						<Menu size={24} />
					{/if}
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile Navigation Drawer -->
	{#if isMobileMenuOpen}
		<div class="border-t border-gray-100 bg-white lg:hidden">
			<nav class="container mx-auto px-4 py-6">
				<ul class="flex flex-col gap-4">
					{#each navItems as item}
						<li>
							<a
								href={item.href}
								class="block text-lg font-bold transition-colors hover:text-primary {page.url
									.pathname === item.href
									? 'text-primary'
									: 'text-slate-600'}"
								onclick={closeMobileMenu}
							>
								{item.label}
							</a>
						</li>
					{/each}
				</ul>

				<div class="mt-8 flex flex-col gap-6 border-t pt-8">
					<ContactItem
						icon={Phone}
						value={APP_CONFIG.contact.hotline}
						href={APP_CONFIG.contact.hotlineLink}
					/>
					<div class="pt-2">
						<NavButton href="#register" label="Đăng ký ngay" icon={FilePen} />
					</div>
				</div>
			</nav>
		</div>
	{/if}
</header>
