<script lang="ts">
	import { enhance } from '$app/forms';
	import { APP_CONFIG } from '$lib/constants/app';
	import { MapFacade, Seo } from '$lib/components/common';

	let { form } = $props();
	let loading = $state(false);
</script>

<Seo title="Liên hệ" />

<div class="container mx-auto max-w-[1200px] px-4 py-16">
	<div>
		<h1 class="mb-4 text-center text-4xl font-black">Liên Hệ Với Chúng Tôi</h1>
		<p class="mb-16 text-center text-lg text-slate-500">
			Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ ngay để được tư vấn miễn phí.
		</p>

		<div class="grid gap-16 lg:grid-cols-2">
			<!-- Form gửi thông tin -->
			<div
				class="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50 md:p-10"
			>
				<h2 class="mb-8 text-2xl font-bold">Gửi tin nhắn cho chúng tôi</h2>

				{#if form?.success}
					<div class="mb-8 rounded-2xl bg-green-50 p-6 text-green-700">
						<p class="font-bold">Gửi thành công!</p>
						<ul>
							{#each form.messages as message (message)}
								<li>{message}</li>
							{/each}
						</ul>
					</div>
				{:else if form?.status == 400}
					<div class="mb-8 rounded-2xl bg-red-50 p-6 text-yellow-700">
						<ul>
							{#each form.messages as message (message)}
								<li>{message}</li>
							{/each}
						</ul>
					</div>
				{:else if form?.error}
					<div class="mb-8 rounded-2xl bg-red-50 p-6 text-red-700">
						<p class="font-bold">Lỗi!</p>
						<ul>
							{#each form.messages as message (message)}
								<li>{message}</li>
							{/each}
						</ul>
					</div>
				{/if}

				<form
					method="POST"
					use:enhance={() => {
						loading = true;
						return async ({ update }) => {
							loading = false;
							await update();
						};
					}}
					class="space-y-6"
				>
					<div>
						<label class="mb-2 block text-sm font-bold text-slate-700" for="name">Họ và tên *</label
						>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Nguyễn Văn A"
							value={form?.values?.name ?? ''}
							class="w-full rounded-2xl border-none bg-slate-50 px-5 py-4 transition-all outline-none focus:ring-2 focus:ring-primary/20"
						/>
					</div>
					<div>
						<label class="mb-2 block text-sm font-bold text-slate-700" for="phone"
							>Số điện thoại *</label
						>
						<input
							type="tel"
							id="phone"
							name="phone"
							placeholder="0901 234 567"
							value={form?.values?.phone ?? ''}
							class="w-full rounded-2xl border-none bg-slate-50 px-5 py-4 transition-all outline-none focus:ring-2 focus:ring-primary/20"
						/>
					</div>

					<div>
						<label class="mb-2 block text-sm font-bold text-slate-700" for="message"
							>Nội dung tư vấn</label
						>
						<textarea
							id="message"
							name="message"
							rows="4"
							placeholder="Tôi muốn tư vấn khóa học B2..."
							class="w-full rounded-2xl border-none bg-slate-50 px-5 py-4 transition-all outline-none focus:ring-2 focus:ring-primary/20"
							>{form?.values?.message ?? ''}</textarea
						>
					</div>
					<button
						type="submit"
						disabled={loading}
						class="w-full rounded-2xl bg-primary py-5 text-lg font-black text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:hover:translate-y-0"
					>
						{loading ? 'ĐANG GỬI...' : 'GỬI THÔNG TIN NGAY'}
					</button>
				</form>
			</div>

			<div class="space-y-12">
				<!-- Placeholder: Thông tin liên hệ trực tiếp (Hotline, Email, Địa chỉ) -->
				<div class="space-y-8">
					{#each APP_CONFIG.contact.locations as loc}
						<div class="flex items-start gap-6">
							<div
								class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary"
							>
								📍
							</div>
							<div>
								<h3 class="mb-2 text-xl font-bold">{loc.label}</h3>
								<p class="leading-relaxed text-slate-600">
									{loc.address}
								</p>
							</div>
						</div>
					{/each}

					<div class="flex items-start gap-6">
						<div
							class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary"
						>
							📞
						</div>
						<div>
							<h3 class="mb-2 text-xl font-bold">Hotline tư vấn</h3>
							<a
								href={APP_CONFIG.contact.hotlineLink}
								class="text-2xl font-black text-primary hover:underline"
								>{APP_CONFIG.contact.hotline}</a
							>
							<p class="mt-1 text-sm text-slate-500">(Tư vấn miễn phí 24/7 cả ngày lễ)</p>
						</div>
					</div>
					<div class="flex items-start gap-6">
						<div
							class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary"
						>
							✉️
						</div>
						<div>
							<h3 class="mb-2 text-xl font-bold">Website</h3>
							<a
								href={APP_CONFIG.contact.websiteLink}
								target="_blank"
								class="text-slate-600 transition-colors hover:text-primary"
								>{APP_CONFIG.contact.website}</a
							>
						</div>
					</div>
				</div>

				<!-- Bản đồ Google Maps với cơ chế Lazy Load (Facade) -->
				<MapFacade
					src={APP_CONFIG.maps.embedUrl}
					placeholderImage="/images/home/why-choose-us-bg.jpg"
				/>
			</div>
		</div>
	</div>
</div>
