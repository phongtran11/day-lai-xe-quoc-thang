<svelte:head>
	<title>Thi thử trực tuyến | Trung tâm Đào tạo Lái xe Quốc Thắng</title>
</svelte:head>

<div class="container mx-auto px-4 py-12">
	<h1 class="mb-8 text-center text-3xl font-bold text-primary">
		Phần mềm Thi thử Lý thuyết Trực tuyến
	</h1>

	<!-- Placeholder: Lựa chọn bộ đề thi (A1, A2, B1, B2, C) -->
	<section id="select-exam" class="mb-12">
		<h2 class="mb-6 border-l-4 border-primary pl-4 text-xl font-bold italic">
			Bước 1: Chọn bộ đề thi
		</h2>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-5">
			{#each ['A1', 'A2', 'B1', 'B2', 'C'] as rank}
				<button
					class="group rounded-xl border-2 border-slate-100 p-6 text-center transition-all hover:border-primary hover:bg-primary/5"
				>
					<div class="mb-1 text-2xl font-bold group-hover:text-primary">{rank}</div>
					<div class="text-xs text-slate-500">Bộ đề thi thử {rank}</div>
				</button>
			{/each}
		</div>
	</section>

	<!-- Placeholder: Làm bài thi trắc nghiệm lý thuyết trực tuyến (có đếm ngược thời gian) -->
	<section id="exam-interface" class="rounded-2xl border border-slate-200 bg-slate-50 p-8">
		<div class="mb-8 flex items-center justify-between border-b pb-4">
			<div>
				<h3 class="text-xl font-bold">Đề thi số 1 - Hạng B2</h3>
				<span class="text-slate-500">Số câu: 35 | Đạt: 32/35 (không sai câu điểm liệt)</span>
			</div>
			<div class="text-center">
				<div class="text-sm font-medium text-slate-400 uppercase">Thời gian còn lại</div>
				<div class="font-mono text-3xl font-bold text-red-500">20:00</div>
			</div>
		</div>

		<div class="grid gap-8 lg:grid-cols-4">
			<div class="lg:col-span-3">
				<div class="mb-6 min-h-[300px] rounded-xl bg-white p-6 shadow-sm">
					<div class="mb-4 text-lg font-bold">
						Câu 1: "Người lái xe" được hiểu như thế nào trong các khái niệm dưới đây?
					</div>
					<div class="space-y-3">
						<label
							class="flex cursor-pointer items-center gap-3 rounded-lg border p-4 hover:bg-slate-50"
						>
							<input type="radio" name="q1" class="h-4 w-4" />
							<span>Là người điều khiển xe cơ giới.</span>
						</label>
						<label
							class="flex cursor-pointer items-center gap-3 rounded-lg border p-4 hover:bg-slate-50"
						>
							<input type="radio" name="q1" class="h-4 w-4" />
							<span>Là người điều khiển xe thô sơ.</span>
						</label>
						<label
							class="flex cursor-pointer items-center gap-3 rounded-lg border p-4 hover:bg-slate-50"
						>
							<input type="radio" name="q1" class="h-4 w-4" />
							<span>Là người điều khiển xe có súc vật kéo.</span>
						</label>
					</div>
				</div>

				<div class="flex justify-between">
					<button class="cursor-not-allowed rounded-lg border px-6 py-2 font-medium opacity-50"
						>← Câu trước</button
					>
					<button class="rounded-lg bg-primary px-6 py-2 font-medium text-white"
						>Câu tiếp theo →</button
					>
				</div>
			</div>

			<div class="lg:col-span-1">
				<div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
					<div class="mb-4 border-b pb-2 text-center text-sm font-bold">Danh sách câu hỏi</div>
					<div class="grid grid-cols-5 gap-2">
						{#each Array(35) as _, i}
							<button
								class="flex aspect-square w-full items-center justify-center rounded border text-xs font-bold hover:bg-slate-100 {i ===
								0
									? 'border-primary bg-primary text-white'
									: ''}"
							>
								{i + 1}
							</button>
						{/each}
					</div>
					<button
						class="mt-6 w-full rounded-lg bg-red-500 py-3 font-bold text-white shadow-md transition-colors hover:bg-red-600"
					>
						NỘP BÀI
					</button>
				</div>
			</div>
		</div>
	</section>

	<!-- Placeholder: Xem kết quả và đáp án chi tiết -->
	<section id="results" class="pointer-events-none mt-12 opacity-50">
		<h2 class="mb-6 text-center text-2xl font-bold">Kết Quả Thi Thử</h2>
		<div class="mx-auto max-w-md rounded-2xl border bg-white p-8 text-center shadow-sm">
			<div class="mb-2 text-5xl font-bold text-green-500">ĐẠT</div>
			<div class="mb-6 font-medium text-slate-500">Kết quả: 34/35 câu đúng</div>
			<button
				class="w-full rounded-lg border-2 border-primary py-3 font-bold text-primary hover:bg-primary/5"
			>
				XEM CHI TIẾT ĐÁP ÁN
			</button>
		</div>
	</section>
</div>
