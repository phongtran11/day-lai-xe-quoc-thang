import { Client, type DatabaseObjectResponse, type BlockObjectResponse } from '@notionhq/client';
import { NOTION_SECRET, NOTION_DB_ID } from '$env/static/private';
import type { Course } from './notions.inteface';
export * from './notions.inteface';

const notion = new Client({
	auth: NOTION_SECRET
});

export const getDatabase = async () => {
	const result = await notion.databases.retrieve({
		database_id: NOTION_DB_ID
	});

	return result as DatabaseObjectResponse;
};

export const mapPageToCourse = (page: any): Course => {
	const props = page.properties;
	return {
		id: page.id,
		name: props.name?.title[0]?.plain_text || '',
		slug: props.slug?.rich_text[0]?.plain_text || '',
		description: props.descriptions?.rich_text[0]?.plain_text || '',
		coverImage:
			props.coverImage?.files[0]?.file?.url || props.coverImage?.files[0]?.external?.url || null,
		coverImageName: props.coverImage?.files[0]?.name || null,
		categories: props.category?.multi_select?.map((s: any) => s.name) || [],
		publishedAt: props.publishedAt?.date?.start || null,
		createdAt: props.createdAt?.created_time,
		updatedAt: props.updatedAt?.last_edited_time
	};
};

export const getDriversCourses = async (): Promise<Course[]> => {
	const database = await getDatabase();
	const response = await notion.dataSources.query({
		data_source_id: database.data_sources[0].id,
		filter: {
			multi_select: {
				contains: 'khoa-hoc'
			},
			property: 'category',
			type: 'multi_select'
		}
	});

	return response.results.map(mapPageToCourse);
};

export const getCourseBySlug = async (slug: string): Promise<Course | null> => {
	const database = await getDatabase();
	const response = await notion.dataSources.query({
		data_source_id: database.data_sources[0].id,
		filter: {
			property: 'slug',
			rich_text: {
				equals: slug
			}
		}
	});

	if (response.results.length === 0) return null;
	return mapPageToCourse(response.results[0]);
};

export const getCourseBlocks = async (blockId: string): Promise<BlockObjectResponse[]> => {
	const response = await notion.blocks.children.list({
		block_id: blockId
	});
	return response.results.filter((block): block is BlockObjectResponse => 'type' in block);
};
