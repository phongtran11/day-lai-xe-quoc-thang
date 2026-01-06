import { getDriversCourses } from '$lib/notions';
import type { PageServerLoad } from './$types';

export const prerender = true;

export const load: PageServerLoad = async () => {
	const driversCourses = await getDriversCourses();
	return { driversCourses };
};
