import { getCourseBySlug, getCourseBlocks } from '$lib/notions';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const config = {
	isr: {
		expiration: 3600
	}
};

export const load: PageServerLoad = async ({ params }) => {
	const course = await getCourseBySlug(params.slug);

	if (!course) {
		throw error(404, 'Course not found');
	}

	const blocks = await getCourseBlocks(course.id);

	return {
		course,
		blocks
	};
};
