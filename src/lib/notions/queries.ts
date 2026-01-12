import { type DataSourceObjectResponse } from '@notionhq/client';
import { notion } from './client';
import type { DataSourceQueryParams } from './notions.inteface';

export const queryAllFromDataSource = async (
	queryObj: DataSourceQueryParams
): Promise<DataSourceObjectResponse[]> => {
	let results: DataSourceObjectResponse[] = [];
	let cursor: string | undefined = queryObj.start_cursor;
	let requests = 0;
	const MAX_REQUESTS = 10; // Safety cap: 1000 items

	do {
		const response = await notion.dataSources.query({
			...queryObj,
			page_size: 100,
			start_cursor: cursor
		});
		results = [...results, ...(response.results as DataSourceObjectResponse[])];
		cursor = response.next_cursor || undefined;
		requests++;
	} while (cursor && requests < MAX_REQUESTS);

	return results;
};
