import { type DataSourceObjectResponse } from '@notionhq/client';
import { NOTION_NEWS_DB_ID } from '$env/static/private';
import { notion, getDatabase } from './client';
import { queryAllFromDataSource } from './queries';
import { mapPageToNews } from './notions.helper';
import type { DataSourceQueryParams, News, PaginatedResponse } from './notions.inteface';

export const getNewsDatabase = () => getDatabase(NOTION_NEWS_DB_ID);

export const getAllNews = async (
	search?: string | null,
	pageSize = 9,
	cursor?: string,
	fetchAll = false
): Promise<PaginatedResponse<News>> => {
	const database = await getNewsDatabase();
	const dataSourceId = database.data_sources?.[0]?.id;

	let queryObj: DataSourceQueryParams = {
		data_source_id: dataSourceId,
		page_size: pageSize,
		start_cursor: cursor,
		sorts: [{ timestamp: 'created_time', direction: 'descending' }]
	};

	if (search) {
		queryObj.filter = {
			or: [
				{ property: 'Name', title: { contains: search } },
				{ property: 'Descriptions', rich_text: { contains: search } }
			]
		};
	}

	if (fetchAll) {
		const allResults = await queryAllFromDataSource(queryObj);
		return {
			items: allResults.map(mapPageToNews),
			nextCursor: null,
			hasMore: false
		};
	}

	const response = await notion.dataSources.query(queryObj);

	const result = response.results as DataSourceObjectResponse[];
	return {
		items: result.map(mapPageToNews),
		nextCursor: response.next_cursor || null,
		hasMore: response.has_more
	};
};

export const getNewsBySlug = async (slug: string): Promise<News | null> => {
	const database = await getNewsDatabase();
	const response = await notion.dataSources.query({
		data_source_id: database.data_sources[0].id,
		filter: {
			and: [{ property: 'Slug', rich_text: { equals: slug } }]
		}
	});

	const result = response.results as DataSourceObjectResponse[];
	if (result.length === 0) return null;
	return mapPageToNews(result[0]);
};
