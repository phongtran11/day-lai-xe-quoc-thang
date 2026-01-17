<script lang="ts">
	import { Seo } from '$lib/components/common';
	import { APP_CONFIG } from '$lib/constants/app';
</script>

<Seo
	title="Chính sách bảo mật & Xử lý dữ liệu"
	description="Chính sách bảo mật thông tin khách hàng tại {APP_CONFIG.brand
		.fullName} cập nhật theo Nghị định 356/2025/NĐ-CP."
/>

<div class="bg-white">
	<header class="bg-slate-50 py-16 md:py-24">
		<div class="container mx-auto max-w-[1200px] px-4">
			<h1 class="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
				Chính sách bảo mật & Xử lý dữ liệu cá nhân
			</h1>
			<p class="text-lg text-slate-600">
				Tuân thủ nghiêm ngặt Luật Bảo vệ dữ liệu cá nhân Chuyển tiếp & Nghị định 356/2025/NĐ-CP.
			</p>
		</div>
	</header>

	<div class="container mx-auto max-w-[1200px] px-4 py-16 md:py-24">
		<div class="prose max-w-none prose-slate prose-headings:text-primary prose-a:text-blue-600">
			<p>
				Tại <strong>{APP_CONFIG.brand.fullName}</strong>, chúng tôi cam kết bảo vệ dữ liệu cá nhân
				của bạn một cách tuyệt đối. Chính sách này được soạn thảo để đáp ứng các tiêu chuẩn khắt khe
				nhất của <strong>Nghị định 356/2025/NĐ-CP</strong> quy định chi tiết thi hành Luật Bảo vệ dữ liệu
				cá nhân.
			</p>

			<div class="my-8 rounded-xl border-l-4 border-primary bg-primary/5 p-6 italic">
				"Việc bạn chủ động cung cấp thông tin qua form đăng ký và tích chọn đồng ý được coi là sự
				cho phép tự nguyện, rõ ràng và có chủ đích để chúng tôi xử lý dữ liệu theo mục đích đã nêu."
			</div>

			<h2>1. Các loại dữ liệu thu thập (Dữ liệu cá nhân cơ bản)</h2>
			<p>
				Theo Điều 2 Nghị định 356, chúng tôi chỉ thu thập các dữ liệu cá nhân cơ bản cần thiết cho
				việc tư vấn và đào tạo:
			</p>
			<ul>
				<li><strong>Họ và tên:</strong> Để định danh người có nhu cầu học bằng lái xe.</li>
				<li>
					<strong>Số điện thoại:</strong> Phương thức liên lạc chính để tư vấn và thông báo lịch học và
					thi.
				</li>
				<li>
					<strong>Dữ liệu kỹ thuật:</strong> Địa chỉ IP, thời điểm xác nhận đồng ý (Timestamp) để lưu
					trữ bằng chứng tuân thủ.
				</li>
			</ul>

			<h2>2. Mục đích và Phương thức xử lý</h2>
			<ul>
				<li>
					<strong>Mục đích:</strong> Tư vấn khóa học, làm hồ sơ thi sát hạch tại Sở GTVT, thông báo lịch
					thi và kết quả.
				</li>
				<li>
					<strong>Phương thức:</strong> Thu thập qua biểu mẫu trực tuyến, lưu trữ trên hệ thống quản lý
					dữ liệu an toàn.
				</li>
			</ul>

			<h2>3. Thời hạn phản hồi yêu cầu của chủ thể dữ liệu</h2>
			<p>
				Chúng tôi cam kết thực hiện quyền của bạn trong thời gian quy định tại Điều 10 Nghị định
				356:
			</p>
			<ul>
				<li>
					<strong>Xác nhận tiếp nhận:</strong> Trong vòng <strong>02 ngày làm việc</strong> kể từ khi
					nhận được yêu cầu (truy cập, sửa, xóa dữ liệu).
				</li>
				<li>
					<strong>Thực hiện yêu cầu:</strong> Hoàn thành việc xử lý (xóa, chỉnh sửa) trong vòng
					<strong>10 đến 30 ngày</strong> tùy theo độ phức tạp của hồ sơ.
				</li>
			</ul>

			<h2>4. Chuyển dữ liệu ra nước ngoài</h2>
			<p>
				Website của chúng tôi sử dụng hạ tầng công nghệ từ các đối cung cấp uy tín quốc tế (như
				Vercel, Notion). Do đó, dữ liệu cá nhân của bạn có thể được lưu trữ trên các máy chủ đặt tại
				nước ngoài. Chúng tôi đảm bảo các đối tác này tuân thủ các tiêu chuẩn bảo mật quốc tế và cam
				kết bảo vệ dữ liệu tương đương với quy định của Việt Nam.
			</p>

			<h2>5. Quyền và Nghĩa vụ của bạn</h2>
			<p>
				Bạn có quyền rút lại sự đồng ý, yêu cầu xóa hoặc truy cập dữ liệu bất kỳ lúc nào. Tuy nhiên,
				việc rút lại sự đồng ý có thể làm gián đoạn quá trình tư vấn hoặc đào tạo mà bạn đang tham
				gia.
			</p>

			<div class="mt-12 rounded-xl bg-slate-50 p-6 text-sm text-slate-500">
				Cập nhật lần cuối: 17/01/2026 (Tuân thủ Nghị định 356/2025/NĐ-CP)
			</div>
		</div>
	</div>
</div>
