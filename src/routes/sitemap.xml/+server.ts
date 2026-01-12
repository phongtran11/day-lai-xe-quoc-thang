import { APP_CONFIG } from '$lib/constants/app';
import { getCourses, getAllNews } from '$lib/notions';

export const GET = async () => {
	const domain = APP_CONFIG.contact.websiteLink;

	const staticPages = ['', 'gioi-thieu', 'khoa-hoc', 'lien-he', 'tin-tuc'];

	// Fetch dynamic data from Notion (fetch all for sitemap)
	const [coursesRes, newsRes] = await Promise.all([
		getCourses(undefined, undefined, true),
		getAllNews(null, undefined, undefined, true)
	]);

	const coursePages = coursesRes.items.map((course) => `khoa-hoc/${course.slug}`);
	const postPages = newsRes.items.map((item) => `tin-tuc/${item.slug}`);

	const pages = [...staticPages, ...coursePages, ...postPages];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map((page) => {
		let loc = domain;
		if (page) {
			loc += `/${page}`;
		}

		let priority = '0.8';
		if (page === '') {
			priority = '1.0';
		} else if (page.includes('/')) {
			priority = '0.6';
		}

		const lastmod = new Date().toISOString().split('T')[0];

		return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
	})
	.join('\n')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
