import { getAllNews } from '$lib/notions';
import type { PageServerLoad } from './$types';

export const config = {
	isr: {
		expiration: 3600
	}
};

export const load: PageServerLoad = async (event) => {
	const params = event.url.searchParams;
	const search = params.get('search');
	const cursor = params.get('cursor') || undefined;
	const newsData = await getAllNews(search, 9, cursor);
	return {
		newsData
	};
};
