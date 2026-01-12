import { type DataSourceObjectResponse, type BlockObjectResponse } from '@notionhq/client';
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

export const getNotionBlocks = async (blockId: string): Promise<any[]> => {
	let results: BlockObjectResponse[] = [];
	let cursor: string | undefined = undefined;

	do {
		const response = await notion.blocks.children.list({
			block_id: blockId,
			start_cursor: cursor
		});

		const pageBlocks = response.results.filter(
			(block): block is BlockObjectResponse => 'type' in block
		);
		results = [...results, ...pageBlocks];
		cursor = response.next_cursor || undefined;
	} while (cursor);

	// Recursively fetch children for blocks that have them (like tables, columns, etc.)
	const blocksWithChildren = await Promise.all(
		results.map(async (block) => {
			if (block.has_children) {
				const children = await getNotionBlocks(block.id);
				return {
					...block,
					[block.type]: {
						...(block as any)[block.type],
						children
					}
				};
			}
			return block;
		})
	);

	return blocksWithChildren;
};
