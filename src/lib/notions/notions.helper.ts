import type { DataSourceObjectResponse } from '@notionhq/client';
import type { BaseNotionEntry, Course, News } from './notions.inteface';

export const mapPageToEntry = <T extends BaseNotionEntry>(page: DataSourceObjectResponse): T => {
	const props = page.properties as any;
	return {
		id: page.id,
		name: props.Name?.title[0]?.plain_text || '',
		slug: props.Slug?.rich_text[0]?.plain_text || '',
		descriptions: props.Descriptions?.rich_text[0]?.plain_text || '',
		coverImage:
			props.CoverImage?.files[0]?.file?.url || props.CoverImage?.files[0]?.external?.url || null,
		coverImageName: props.CoverImage?.files[0]?.name || null,
		createdAt: page.created_time,
		updatedAt: page.last_edited_time
	} as T;
};

export const mapPageToCourse = (page: DataSourceObjectResponse): Course =>
	mapPageToEntry<Course>(page);

export const mapPageToNews = (page: DataSourceObjectResponse): News => mapPageToEntry<News>(page);
