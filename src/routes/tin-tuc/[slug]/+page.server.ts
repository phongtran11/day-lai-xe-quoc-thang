import { getNewsBySlug, getNotionBlocks, getAllNews } from '$lib/notions';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = async () => {
	const newsRes = await getAllNews(null, undefined, undefined, true);
	return newsRes.items.map((item) => ({
		slug: item.slug
	}));
};

export const prerender = 'auto';

export const config = {
	isr: {
		expiration: 3600
	}
};

export const load: PageServerLoad = async ({ params }) => {
	const news = await getNewsBySlug(params.slug);

	if (!news) {
		throw error(404, 'Không tìm thấy bài viết');
	}

	const blocks = await getNotionBlocks(news.id);

	return {
		news,
		blocks
	};
};
