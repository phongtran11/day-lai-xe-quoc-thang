import { Client, LogLevel, type DatabaseObjectResponse } from '@notionhq/client';
import { NOTION_SECRET } from '$env/static/private';

export const notion = new Client({
	auth: NOTION_SECRET,
	logLevel: LogLevel.DEBUG
});

const databaseCache = new Map<string, DatabaseObjectResponse>();

export const getDatabase = async (databaseId: string): Promise<DatabaseObjectResponse> => {
	if (databaseCache.has(databaseId)) {
		return databaseCache.get(databaseId)!;
	}

	const result = await notion.databases.retrieve({
		database_id: databaseId
	});

	databaseCache.set(databaseId, result as DatabaseObjectResponse);
	return result as DatabaseObjectResponse;
};
