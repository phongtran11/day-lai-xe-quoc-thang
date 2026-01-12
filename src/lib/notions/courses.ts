import { notion, getDatabase } from './client';
import { queryAllFromDataSource } from './queries';
import { mapPageToCourse } from './notions.helper';
import type { Course, DataSourceQueryParams, PaginatedResponse } from './notions.inteface';
import { NOTION_COURSE_DB_ID } from '$env/static/private';
import type { DataSourceObjectResponse } from '@notionhq/client';

export const getCoursesDatabase = () => getDatabase(NOTION_COURSE_DB_ID);

export const getCourses = async (
	pageSize = 12,
	cursor?: string,
	fetchAll = false
): Promise<PaginatedResponse<Course>> => {
	const database = await getCoursesDatabase();
	const dataSourceId = database.data_sources[0].id;

	let queryObj: DataSourceQueryParams = {
		data_source_id: dataSourceId,
		page_size: pageSize,
		start_cursor: cursor,
		sorts: [{ property: 'Name', direction: 'ascending' }]
	};

	if (fetchAll) {
		const allResults = await queryAllFromDataSource(queryObj);
		return {
			items: allResults.map(mapPageToCourse),
			nextCursor: null,
			hasMore: false
		};
	}

	const response = await notion.dataSources.query(queryObj);

	const result = response.results as DataSourceObjectResponse[];
	return {
		items: result.map(mapPageToCourse),
		nextCursor: response.next_cursor || null,
		hasMore: response.has_more
	};
};

export const getCourseBySlug = async (slug: string): Promise<Course | null> => {
	const database = await getDatabase(NOTION_COURSE_DB_ID);
	const response = await notion.dataSources.query({
		data_source_id: database.data_sources[0].id,
		filter: {
			property: 'Slug',
			rich_text: { equals: slug }
		}
	});
	const result = response.results as DataSourceObjectResponse[];

	if (result.length === 0) return null;
	return mapPageToCourse(result[0]);
};
