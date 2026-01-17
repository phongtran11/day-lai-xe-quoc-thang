import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { createContactSubmission } from '$lib/notions';
import { z } from 'zod';

const contactSchema = z.object({
	name: z.string().min(1, 'Vui lòng nhập họ tên'),
	phone: z.string().regex(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, 'Vui lòng nhập số điện thoại hợp lệ'),
	message: z.string().optional(),
	consent: z.string().refine((val) => val === 'on', 'Vui lòng đồng ý với chính sách bảo mật')
});

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name')?.toString();
		const phone = formData.get('phone')?.toString();
		const message = formData.get('message')?.toString();
		const consent = formData.get('consent')?.toString();

		const { error, data } = contactSchema.safeParse({ name, phone, message, consent });
		if (error) {
			return fail(400, {
				error: true,
				messages: Object.values(error.issues).flatMap((e) => e.message),
				values: { name, phone, message },
				status: 400
			});
		}

		try {
			await createContactSubmission({
				name: data.name,
				phone: data.phone,
				course: 'Nhập thủ công trên Notion',
				message: data.message || 'Không có nội dung',
				is_consented: true,
				consent_timestamp: new Date().toISOString()
			});

			return {
				success: true,
				messages: ['Cảm ơn bạn! Chúng tôi đã nhận được thông tin và sẽ liên hệ sớm nhất.'],
				status: 200
			};
		} catch (err) {
			console.error('Contact form error:', err);
			return fail(500, {
				error: true,
				messages: ['Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau hoặc gọi hotline.'],
				values: { name, phone, message },
				status: 500
			});
		}
	}
};
