export interface Course {
	id: string;
	name: string;
	slug: string;
	description: string;
	coverImage: string | null;
	coverImageName: string | null;
	categories: string[];
	publishedAt: string | null;
	createdAt: string;
	updatedAt: string;
}
