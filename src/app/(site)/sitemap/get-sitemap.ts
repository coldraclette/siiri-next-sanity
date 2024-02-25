import { client } from '../../../../sanity/lib/client';

/**
 * The API URL
 * INFO: Create a rest endpoint for the sitemap in Drupal
 *
 * @type {string}
 */
const API_URL = `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/rest/sitemap`;
/**
 * Create the response.
 * @param {string} body The response body
 *
 * @return {object} The response
 */
export function createResponse(body) {
  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=43200, stale-while-revalidate=43200',
      'content-type': 'application/xml',
    },
  });
}
/**
 * Generate the sitemap.
 * @param {string} url The site URL
 * @param {array} data The sitemap data
 * @param {number} priority The priority
 *
 * @return {string} The sitemap
 */
export function generateSitemap(url, data, priority = 0.5) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      ${data
        .map((item) => {
          return `
            <url>
              <loc>https://siiritaennler.ch/${item.slug.current}</loc>
              <lastmod>${item._updatedAt}</lastmod>
              <changefreq>daily</changefreq>
              <priority>${priority}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;
}

/**
 * Get the sitemap data - Projects data.
 * @return {Promise} Promise object represents the sitemap data
 */
export async function getSitemapProjectsData() {
  const projects = await client.fetch(
    `*[_type == "project" && hasProjectPage == true]`,
    { next: { revalidate: 43200 } }
  );

  return projects;
}
