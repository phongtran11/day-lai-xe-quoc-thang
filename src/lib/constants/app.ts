import { Phone } from '@lucide/svelte';

export const APP_CONFIG = {
	brand: {
		name: 'Quốc Thắng',
		fullName: 'TƯ VẤN ĐÀO TẠO LÁI XE QUỐC THẮNG',
		description:
			'Đào tạo lái xe Quốc Thắng kính chào quý khách. Chiêu sinh và khai giảng liên tục với thủ tục nhanh gọn các hạng lái xe ô tô B1, B2, C. Nâng dấu các hạng C, D, FC, E. Đặc biệt xe máy hạng A1, A2 mở khóa thi liên tục.',
		logoText: 'ĐTLX'
	},
	contact: {
		hotline: '0944 117 414',
		hotlineLink: 'tel:0944117414',
		website: 'day-lai-xe-quoc-thang.vercel.app',
		websiteLink: 'https://day-lai-xe-quoc-thang.vercel.app',
		locations: [
			{
				label: 'Cơ sở 1',
				address:
					'Số 028, ấp Tân Bình, xã Hòa Khánh Tây, huyện Đức Hòa, tỉnh Long An (đối diện trường cấp 2 Hậu Nghĩa và gần cầu Ba Sa)'
			},
			{
				label: 'Cơ sở 2',
				address: 'Số 736, ấp Bình Tiền 2, Đức Hòa Hạ, Đức Hòa, Long An'
			}
		]
	},
	policies: [
		{ label: 'Chính sách dịch vụ', href: '#' },
		{ label: 'Chính sách dạy lái xe', href: '#' },
		{ label: 'Thông tin cần biết', href: '#' },
		{ label: 'Chính sách thanh toán', href: '#' },
		{ label: 'Chính sách hỗ trợ', href: '#' }
	],
	socialLinks: [
		{ name: 'Facebook', icon: 'fb', color: 'bg-[#1877F2]', href: '#' },
		{ name: 'TikTok', icon: 'tt', color: 'bg-black', href: '#' },
		{ name: 'Zalo', icon: 'zl', color: 'bg-[#0068FF]', href: '#' },
		{ name: 'Phone', icon: Phone, color: 'bg-[#E30613]', href: 'tel:0944117414' }
	],
	maps: {
		embedUrl:
			'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000.525547055726!2d106.4678887!3d10.8475556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310ad54238e8276f%3A0x8683e60682979262!2zSMOyYSBLaMOhbmggVMOieSwgxJDhu6ljIEjDsmEsIExvbmcgQW4sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1711123456789!5m2!1svi!2s',
		title: 'Hòa Khánh Tây',
		subtitle: 'Đức Hòa, Long An'
	},
	background: {
		footer: {
			small: '/images/footer/footer-bg-small-v1.webp',
			medium: '/images/footer/footer-bg-medium-v1.webp',
			large: '/images/footer/footer-bg-large-v1.webp'
		}
	}
};
