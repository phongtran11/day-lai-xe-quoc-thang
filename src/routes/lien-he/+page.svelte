<svelte:head>
	<title>Liên hệ | Trung tâm Đào tạo Lái xe Quốc Thắng</title>
</svelte:head>

<div class="container mx-auto px-4 py-16">
	<div class="mx-auto max-w-5xl">
		<h1 class="mb-4 text-center text-4xl font-black">Liên Hệ Với Chúng Tôi</h1>
		<p class="mb-16 text-center text-lg text-slate-500">
			Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ ngay để được tư vấn miễn phí.
		</p>

		<div class="grid gap-16 lg:grid-cols-2">
			<!-- Placeholder: Form gửi thông tin (Họ tên, SĐT, Nội dung) -->
			<div
				class="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50 md:p-10"
			>
				<h2 class="mb-8 text-2xl font-bold">Gửi tin nhắn cho chúng tôi</h2>
				<form class="space-y-6">
					<div>
						<label class="mb-2 block text-sm font-bold text-slate-700" for="name">Họ và tên *</label
						>
						<input
							type="text"
							id="name"
							placeholder="Nguyễn Văn A"
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
							placeholder="0901 234 567"
							class="w-full rounded-2xl border-none bg-slate-50 px-5 py-4 transition-all outline-none focus:ring-2 focus:ring-primary/20"
						/>
					</div>
					<div>
						<label class="mb-2 block text-sm font-bold text-slate-700" for="message"
							>Nội dung tư vấn</label
						>
						<textarea
							id="message"
							rows="4"
							placeholder="Tôi muốn tư vấn khóa học B2..."
							class="w-full rounded-2xl border-none bg-slate-50 px-5 py-4 transition-all outline-none focus:ring-2 focus:ring-primary/20"
						></textarea>
					</div>
					<button
						type="submit"
						class="w-full rounded-2xl bg-primary py-5 text-lg font-black text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95"
					>
						GỬI THÔNG TIN NGAY
					</button>
				</form>
			</div>

			<div class="space-y-12">
				<!-- Placeholder: Thông tin liên hệ trực tiếp (Hotline, Email, Địa chỉ) -->
				<div class="space-y-8">
					<div class="flex items-start gap-6">
						<div
							class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary"
						>
							📍
						</div>
						<div>
							<h3 class="mb-2 text-xl font-bold">Văn phòng chính</h3>
							<p class="leading-relaxed text-slate-600">
								123 Đường Số 1, Phường Tân Quy, Quận 7, TP. Hồ Chí Minh
							</p>
						</div>
					</div>
					<div class="flex items-start gap-6">
						<div
							class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary"
						>
							📞
						</div>
						<div>
							<h3 class="mb-2 text-xl font-bold">Hotline tư vấn</h3>
							<a href="tel:0901234567" class="text-2xl font-black text-primary hover:underline"
								>0901.234.567</a
							>
							<p class="mt-1 text-sm text-slate-500">(Tư vấn miễn phí 24/7 cả ngày lễ)</p>
						</div>
					</div>
					<div class="flex items-start gap-6">
						<div
							class="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary"
						>
							✉️
						</div>
						<div>
							<h3 class="mb-2 text-xl font-bold">Email</h3>
							<p class="text-slate-600">daotao@quocthang.edu.vn</p>
						</div>
					</div>
				</div>

				<!-- Placeholder: Bản đồ Google Maps nhúng cho các cơ sở -->
				<div
					class="flex aspect-video w-full items-center justify-center overflow-hidden rounded-3xl border-4 border-white bg-slate-200 font-bold text-slate-400 shadow-inner"
				>
					Google Maps Placeholder
				</div>
			</div>
		</div>
	</div>
</div>
