import { getDriversCourses } from '$lib/notions';
import type { PageServerLoad } from './$types';

export const config = {
	isr: {
		expiration: 3600
	}
};

export const load: PageServerLoad = async () => {
	const driversCourses = await getDriversCourses();
	return { driversCourses };
};
