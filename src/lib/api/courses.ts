import type { Course, PaginatedResponse } from '$lib/notions/notions.inteface';

export const fetchCourses = async (params: {
	cursor?: string;
	pageSize?: number;
}): Promise<PaginatedResponse<Course>> => {
	const searchParams = new URLSearchParams();
	if (params.cursor) searchParams.set('cursor', params.cursor);
	if (params.pageSize) searchParams.set('pageSize', params.pageSize.toString());

	const res = await fetch(`/api/courses?${searchParams.toString()}`);
	if (!res.ok) throw new Error('Failed to fetch courses');
	return res.json();
};
