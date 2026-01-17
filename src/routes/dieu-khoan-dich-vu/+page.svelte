<script lang="ts">
	import { Seo } from '$lib/components/common';
	import { APP_CONFIG } from '$lib/constants/app';
</script>

<Seo
	title="Điều khoản dịch vụ"
	description="Điều khoản sử dụng dịch vụ đào tạo lái xe tại {APP_CONFIG.brand
		.fullName}. Quy định về đăng ký, hoàn phí và quyền lợi học viên."
/>

<div class="bg-white">
	<header class="bg-slate-50 py-16 md:py-24">
		<div class="container mx-auto max-w-[1200px] px-4">
			<h1 class="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
				Điều khoản dịch vụ
			</h1>
			<p class="text-lg text-slate-600">
				Quy định và điều khoản chung khi tham gia các khóa học tại {APP_CONFIG.brand.name}.
			</p>
		</div>
	</header>

	<div class="container mx-auto max-w-[1200px] px-4 py-16 md:py-24">
		<div class="prose max-w-none prose-slate prose-headings:text-primary prose-a:text-blue-600">
			<p>
				Chào mừng bạn đến với <strong>{APP_CONFIG.brand.fullName}</strong>. Khi bạn đăng ký học tại
				trung tâm của chúng tôi, bạn đồng ý tuân thủ các điều khoản và điều kiện được nêu sau đây.
			</p>

			<h2>1. Đối tượng và điều kiện đăng ký</h2>
			<p>Học viên đăng ký học và thi lái xe phải đảm bảo các điều kiện sau:</p>
			<ul>
				<li>Đủ độ tuổi quy định cho từng hạng bằng (A1, B1, B2, C...).</li>
				<li>Đủ sức khỏe theo tiêu chuẩn khám sức khỏe lái xe của Bộ Y tế.</li>
				<li>Cung cấp đầy đủ và trung thực các giấy tờ tùy thân và hồ sơ liên quan.</li>
			</ul>

			<h2>2. Học phí và thanh toán</h2>
			<p>
				Học phí tại trung tâm là phí trọn gói, bao gồm: phí đào tạo, tài liệu, xăng xe, giáo viên và
				phí sát hạch lần đầu. Học viên có thể lựa chọn thanh toán một lần hoặc trả góp theo quy định
				của trung tâm.
			</p>

			<h2>3. Quy trình hoàn trả học phí</h2>
			<p>Chúng tôi hiểu rằng có những trường hợp bất khả kháng, quy định hoàn phí như sau:</p>
			<ul>
				<li>
					<strong>Quy định chung:</strong> Việc hoàn trả học phí sẽ tuân thủ theo các điều khoản
					được quy định chi tiết trong <strong>Hợp đồng Đào tạo lái xe</strong> mà học viên đã ký kết
					trực tiếp với Trung tâm.
				</li>
				<li>
					<strong>Trước khi nộp hồ sơ lên Sở:</strong> Thường được hỗ trợ hoàn phí cao nhất (trừ phí hồ
					sơ nếu có), chi tiết xem trong hợp đồng.
				</li>
				<li>
					<strong>Sau khi nộp hồ sơ/Đã học:</strong> Áp dụng quy chế hoàn phí của Trung tâm dựa trên khối
					lượng đào tạo thực tế đã thực hiện.
				</li>
			</ul>

			<h2>4. Thay đổi lịch học và thực hành</h2>
			<p>Để đảm bảo hiệu quả đào tạo, quy định về lịch học như sau:</p>
			<ul>
				<li>
					<strong>Linh hoạt:</strong> Học viên được chủ động sắp xếp lịch học thực hành với giáo viên.
				</li>
				<li>
					<strong>Thông báo thay đổi:</strong> Nếu học viên muốn thay đổi hoặc hủy lịch học đã hẹn,
					vui lòng báo trước ít nhất <strong>24 giờ</strong> để giáo viên sắp xếp xe và lịch cho học viên
					khác.
				</li>
				<li>
					<strong>Vắng mặt không báo trước:</strong> Trường hợp học viên vắng mặt mà không báo trước có
					thể bị tính là một buổi học đã thực hiện.
				</li>
			</ul>

			<h2>5. Trách nhiệm của trung tâm</h2>
			<ul>
				<li>Đảm bảo chất lượng giáo viên, phương tiện tập lái đạt chuẩn an toàn.</li>
				<li>Thực hiện đúng lộ trình đào tạo đã thỏa thuận.</li>
				<li>Hỗ trợ học viên trong suốt quá trình đăng ký, học tập và thi cử.</li>
			</ul>

			<h2>6. Trách nhiệm của học viên</h2>
			<ul>
				<li>Tuân thủ nội quy học tập và các chỉ dẫn an toàn của giáo viên.</li>
				<li>Tham gia đầy đủ các buổi học lý thuyết và thực hành theo chương trình.</li>
				<li>Bảo quản các thiết bị, phương tiện tập lái trong quá trình học.</li>
			</ul>

			<div class="mt-12 rounded-xl bg-slate-50 p-6 text-sm text-slate-500">
				Cập nhật lần cuối: 17/01/2026
			</div>
		</div>
	</div>
</div>
