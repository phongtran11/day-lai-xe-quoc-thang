import { json } from '@sveltejs/kit';
import { getCourses } from '$lib/notions';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const cursor = url.searchParams.get('cursor') || undefined;
	const pageSize = Number.parseInt(url.searchParams.get('pageSize') || '12');

	const result = await getCourses(pageSize, cursor);

	return json(result);
};
