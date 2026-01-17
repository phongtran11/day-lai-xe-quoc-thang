<script lang="ts">
	import { Seo } from '$lib/components/common';
	import { APP_CONFIG } from '$lib/constants/app';
</script>

<Seo
	title="Chính sách thanh toán"
	description="Chính sách thanh toán và hỗ trợ trả góp học phí tại {APP_CONFIG.brand.fullName}."
/>

<div class="bg-white">
	<header class="bg-slate-50 py-16 md:py-24">
		<div class="container mx-auto max-w-[1200px] px-4">
			<h1 class="mb-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
				Chính sách thanh toán
			</h1>
			<p class="text-lg text-slate-600">
				Thông tin về các hình thức thanh toán và chính sách học phí tại {APP_CONFIG.brand.name}.
			</p>
		</div>
	</header>

	<div class="container mx-auto max-w-[1200px] px-4 py-16 md:py-24">
		<div class="prose max-w-none prose-slate prose-headings:text-primary prose-a:text-blue-600">
			<p>
				Chúng tôi nỗ lực tạo điều kiện tốt nhất để học viên có thể tiếp cận các khóa học lái xe một
				cách dễ dàng và minh bạch về mặt tài chính.
			</p>

			<h2>1. Các hình thức thanh toán</h2>
			<p>Học viên có thể lựa chọn các hình thức thanh toán thuận tiện sau:</p>
			<ul>
				<li><strong>Tiền mặt:</strong> Thanh toán trực tiếp tại văn phòng của trung tâm.</li>
				<li>
					<strong>Chuyển khoản ngân hàng:</strong> Qua tài khoản ngân hàng chính thức của trung tâm (vui
					lòng liên hệ nhân viên tư vấn để nhận thông tin chuyển khoản chính xác).
				</li>
				<li>
					<strong>Thanh toán qua thẻ:</strong> Chấp nhận các loại thẻ nội địa và quốc tế tại quầy.
				</li>
			</ul>

			<h2>2. Chính sách học phí trọn gói</h2>
			<p>
				Chúng tôi cam kết <strong>không phát sinh chi phí</strong> trong suốt quá trình đào tạo. Học phí
				thông báo đã bao gồm toàn bộ các khoản phí đào tạo, thuê sân, xăng xe, công giáo viên và lệ phí
				sát hạch lần đầu.
			</p>

			<h2>3. Hỗ trợ trả góp học phí</h2>
			<p>Nhằm giảm bớt gánh nặng tài chính, chúng tôi hỗ trợ chính sách trả góp 0% lãi suất:</p>
			<ul>
				<li>
					<strong>Linh hoạt:</strong> Chia nhỏ học phí thành 2-3 đợt thanh toán trong suốt quá trình học.
				</li>
				<li><strong>Đơn giản:</strong> Không cần thủ tục vay vốn ngân hàng phức tạp.</li>
				<li>
					<strong>Minh bạch:</strong> Các đợt thanh toán được ghi chú rõ ràng trong hợp đồng đào tạo.
				</li>
			</ul>

			<h2>4. Lưu ý khi thanh toán</h2>
			<ul>
				<li>Học viên sẽ nhận được biên lai hoặc chứng từ xác nhận sau mỗi lần thanh toán.</li>
				<li>Vui lòng giữ lại biên lai để đối chiếu trong trường hợp cần thiết.</li>
				<li>Mọi chương trình ưu đãi, giảm giá sẽ được áp dụng trực tiếp tại thời điểm đăng ký.</li>
			</ul>

			<div class="mt-12 rounded-xl bg-slate-50 p-6 text-sm text-slate-500">
				Cập nhật lần cuối: 17/01/2026
			</div>
		</div>
	</div>
</div>
