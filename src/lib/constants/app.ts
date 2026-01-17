import { Phone } from '@lucide/svelte';

export const APP_CONFIG = {
	brand: {
		name: 'Quốc Thắng',
		fullName: 'TƯ VẤN ĐÀO TẠO LÁI XE QUỐC THẮNG',
		description:
			'Trung tâm Đào tạo lái xe Quốc Thắng chuyên đào tạo và sát hạch các hạng bằng lái xe mô tô (A1, A), ô tô (B, C1, C), xe khách (D1, D2, D) và các hạng kéo rơ-moóc. Chiêu sinh liên tục, thủ tục nhanh gọn, học phí trọn gói theo quy chuẩn mới 2025.',
		logoText: 'ĐTLX'
	},
	contact: {
		hotline: '0964 635 010',
		hotlineLink: 'tel:0964635010',
		website: 'day-lai-xe-quoc-thang.vercel.app',
		websiteLink: 'https://day-lai-xe-quoc-thang.vercel.app',
		locations: [
			{
				label: 'Vị trí',
				address: '54b đường số 12, Ấp Chánh 1, Xã Củ Chi, Thành phố Hồ Chí Minh'
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
		{ name: 'Phone', icon: Phone, color: 'bg-[#E30613]', href: 'tel:0964635010' }
	],
	maps: {
		embedUrl:
			'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3917.24933585518!2d106.5155595!3d10.9445287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b2b48f26614f1%3A0xe5af4c275f77ca52!2zxJDDoG8gdOG6oW8gbMOhaSB4ZSBRdeG7kWMgVGjhuq9uZw!5e0!3m2!1svi!2s!4v1768318220348!5m2!1svi!2s'
	},
	background: {
		footer: {
			small: '/images/footer/footer-bg-small-v1.webp',
			medium: '/images/footer/footer-bg-medium-v1.webp',
			large: '/images/footer/footer-bg-large-v1.webp'
		}
	}
};
