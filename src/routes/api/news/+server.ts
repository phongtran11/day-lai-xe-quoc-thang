import { json } from '@sveltejs/kit';
import { getAllNews } from '$lib/notions';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const search = url.searchParams.get('search');
	const cursor = url.searchParams.get('cursor') || undefined;
	const pageSize = Number.parseInt(url.searchParams.get('pageSize') || '9');

	const result = await getAllNews(search, pageSize, cursor);

	return json(result);
};
