import type { News, PaginatedResponse } from '$lib/notions/notions.inteface';

export const fetchNews = async (params: {
	search?: string;
	cursor?: string;
	pageSize?: number;
}): Promise<PaginatedResponse<News>> => {
	const searchParams = new URLSearchParams();
	if (params.search) searchParams.set('search', params.search);
	if (params.cursor) searchParams.set('cursor', params.cursor);
	if (params.pageSize) searchParams.set('pageSize', params.pageSize.toString());

	const res = await fetch(`/api/news?${searchParams.toString()}`);
	if (!res.ok) throw new Error('Failed to fetch news');
	return res.json();
};
