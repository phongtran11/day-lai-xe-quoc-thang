# Dạy Lái Xe Quốc Thắng

[![Live Site](https://img.shields.io/badge/Live_Site-Vercel-black?style=for-the-badge&logo=vercel)](https://day-lai-xe-quoc-thang.vercel.app/)

A modern, fast, and SEO-optimized web application for a driving school, built with [SvelteKit](https://svelte.dev/docs/kit).

**🌐 Public URL:** [https://day-lai-xe-quoc-thang.vercel.app/](https://day-lai-xe-quoc-thang.vercel.app/)

## Features

- **Course Catalog (`/khoa-hoc`)**: Detailed information about driving courses.
- **News & Articles (`/tin-tuc`)**: Dynamic content powered by the Notion API, allowing for easy, headless CMS management.
- **School Information**: "About Us" (`/gioi-thieu`) and "Contact" (`/lien-he`) sections.
- **Legal Policies**: Privacy policy, terms of service, and payment policies (`/chinh-sach-*`).
- **SEO Optimized**: Includes a dynamically generated `sitemap.xml`.
- **Modern UI**: Fully responsive and accessible interface utilizing Tailwind CSS v4 and Bits UI.

## Tech Stack

- **Framework**: [SvelteKit](https://svelte.dev/docs/kit) (Svelte 5)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Bits UI](https://www.bits-ui.com/), [Vaul Svelte](https://github.com/huntabyte/vaul-svelte), [Embla Carousel](https://www.embla-carousel.com/)
- **Icons**: [Lucide Svelte](https://lucide.dev/guide/packages/lucide-svelte)
- **Data Source / CMS**: [Notion API](https://developers.notion.com/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Analytics**: [@vercel/analytics](https://vercel.com/docs/analytics)

## Project Structure

```text
src/
├── lib/               # Shared components, utilities, and Notion API helpers
├── routes/            # SvelteKit file-based routing
│   ├── api/           # Backend API routes
│   ├── khoa-hoc/      # Course pages
│   ├── tin-tuc/       # News pages
│   ├── gioi-thieu/    # About page
│   ├── lien-he/       # Contact page
│   └── sitemap.xml/   # Sitemap generation
```

## Getting Started

### Prerequisites

Ensure you have Node.js and a package manager like `pnpm`, `npm`, or `yarn` installed.

### Installation

Install the project dependencies:

```sh
npm install
# or
pnpm install
```

### Development

Once you've installed dependencies, start the development server:

```sh
npm run dev
# or
pnpm dev
```

To start the server and automatically open the app in a new browser tab:

```sh
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with:

```sh
npm run preview
```

## Environment Variables

This project requires a connection to Notion as a CMS. To set this up:

1. Copy the provided `.env.example` file to `.env`:
   ```sh
   cp .env.example .env
   ```
2. Open the `.env` file and fill in your integration keys:
   - `NOTION_SECRET`: Your Notion internal integration secret key.
   - `NOTION_COURSE_DB_ID`: The Notion database ID for courses.
   - `NOTION_NEWS_DB_ID`: The Notion database ID for news/articles.
   - `NOTIONS_CONTACT_DB_ID`: The Notion database ID for contact form submissions.
