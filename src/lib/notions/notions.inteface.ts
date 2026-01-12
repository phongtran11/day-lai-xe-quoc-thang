import type { Client } from '@notionhq/client';

export interface BaseNotionEntry {
	id: string;
	name: string;
	slug: string;
	descriptions: string;
	coverImage: string | null;
	coverImageName: string | null;
	createdAt: string;
	updatedAt: string;
}

export interface Course extends BaseNotionEntry {}
export interface News extends BaseNotionEntry {}

export interface PaginatedResponse<T> {
	items: T[];
	nextCursor: string | null;
	hasMore: boolean;
}

export type DataSourceQueryParams = Parameters<Client['dataSources']['query']>[0];
