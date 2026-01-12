import { getCourseBySlug, getCourseBlocks, getCourses } from '$lib/notions';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = async () => {
	const coursesRes = await getCourses(undefined, undefined, true);
	return coursesRes.items.map((course) => ({
		slug: course.slug
	}));
};

export const prerender = 'auto';

export const config = {
	isr: {
		expiration: 3600
	}
};

export const load: PageServerLoad = async ({ params }) => {
	const course = await getCourseBySlug(params.slug);

	if (!course) {
		throw error(404, { message: 'Course not found' });
	}

	const blocks = await getCourseBlocks(course.id);

	return {
		course,
		blocks
	};
};
