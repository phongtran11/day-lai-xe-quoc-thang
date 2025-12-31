<script lang="ts">
	import { MapPin, Globe, Phone } from '@lucide/svelte';
	import { APP_CONFIG } from '$lib/constants/app';
	import SocialSidebar from './social-sidebar.svelte';
	import ScrollToTop from './scroll-to-top.svelte';
	import Logo from './logo.svelte';
	import FooterSection from './footer-section.svelte';
	import ContactItem from './contact-item.svelte';
</script>

<footer class="relative w-full bg-[#1a1a1a] font-sans text-white">
	<!-- Top Background Section -->
	<div
		class="relative min-h-[400px] w-full overflow-hidden bg-cover bg-center pt-20 pb-12"
		style="background-image: url({APP_CONFIG.background.footer})"
	>
		<!-- Dark Overlay -->
		<div class="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

		<div class="relative z-10 container mx-auto max-w-[1200px] px-4">
			<div class="grid grid-cols-1 gap-12 md:grid-cols-3">
				<!-- Brand Section -->
				<div class="flex flex-col items-center space-y-6 md:items-start">
					<!-- Shield-like Logo Container -->
					<Logo variant="footer" />

					<div class="space-y-4 pt-4">
						<h2
							class="group text-center text-xl leading-tight font-extrabold tracking-tight text-white uppercase md:text-left"
						>
							{APP_CONFIG.brand.fullName.split(APP_CONFIG.brand.name)[0]}
							<span class="text-primary">{APP_CONFIG.brand.name}</span>
						</h2>
						<p class="max-w-sm text-justify text-sm leading-relaxed text-gray-300">
							{APP_CONFIG.brand.description}
						</p>
					</div>
				</div>

				<!-- Contact Section -->
				<FooterSection title="Thông tin liên hệ">
					<ul class="space-y-6 text-sm text-gray-300">
						{#each APP_CONFIG.contact.locations as loc}
							<ContactItem icon={MapPin} label={loc.label} value={loc.address} variant="footer" />
						{/each}
						<ContactItem
							icon={Phone}
							label="Hotline"
							value={APP_CONFIG.contact.hotline}
							href={APP_CONFIG.contact.hotlineLink}
							isBold={true}
							variant="footer"
						/>
						<ContactItem
							icon={Globe}
							label="Website"
							value={APP_CONFIG.contact.website}
							href={APP_CONFIG.contact.websiteLink}
							variant="footer"
						/>
					</ul>
				</FooterSection>

				<!-- Policies Section -->
				<FooterSection title="Chính sách">
					<ul class="space-y-4 text-sm text-gray-300">
						{#each APP_CONFIG.policies as policy}
							<li class="group flex cursor-pointer items-center gap-3">
								<div
									class="h-1.5 w-1.5 rounded-full bg-primary transition-transform group-hover:scale-150"
								></div>
								<a
									href={policy.href}
									class="inline-block transition-all group-hover:translate-x-1 group-hover:text-white"
									>{policy.label}</a
								>
							</li>
						{/each}
					</ul>
				</FooterSection>
			</div>
		</div>
	</div>

	<!-- Map Section -->
	<div class="relative h-[350px] w-full">
		<iframe
			src={APP_CONFIG.maps.embedUrl}
			width="100%"
			height="100%"
			style="border:0;"
			allowfullscreen={true}
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			title="Google Map"
			class="grayscale transition-all duration-500 hover:grayscale-0"
		></iframe>
		<!-- Map Info Overlay -->
		<div
			class="absolute top-4 left-4 hidden rounded-lg bg-white p-4 text-gray-800 shadow-xl md:block"
		>
			<h4 class="text-sm font-bold">{APP_CONFIG.maps.title}</h4>
			<p class="text-[10px] text-gray-500">{APP_CONFIG.maps.subtitle}</p>
			<a href="#" class="mt-2 inline-block text-[10px] font-bold text-[#0068FF]"
				>Xem bản đồ lớn hơn</a
			>
		</div>
	</div>

	<!-- Social Sidebar -->
	<SocialSidebar />

	<!-- Scroll to Top -->
	<ScrollToTop />
</footer>
