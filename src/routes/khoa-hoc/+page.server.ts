import { getCourses } from '$lib/notions';
import type { PageServerLoad } from './$types';

export const config = {
	isr: {
		expiration: 3600
	}
};

export const load: PageServerLoad = async (event) => {
	const cursor = event.url.searchParams.get('cursor') || undefined;
	const coursesData = await getCourses(12, cursor);
	return { coursesData };
};
