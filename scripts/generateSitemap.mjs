import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WEBSITE_URL = 'https://zantravel.com';
const LAST_MOD = new Date().toISOString();

// Static routes
const staticRoutes = [
  '/',
  '/activities',
  '/packages',
  '/gallery',
  '/reviews',
  '/transport',
  '/faq',
  '/booking'
];

// Generate XML for a single URL
const generateUrlXml = (loc, lastmod = LAST_MOD, priority = '0.5', changefreq = 'weekly') => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

// Generate the complete sitemap
const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static routes
  staticRoutes.forEach(route => {
    const priority = route === '/' ? '1.0' : '0.8';
    sitemap += generateUrlXml(WEBSITE_URL + route, LAST_MOD, priority, 'daily');
  });

  sitemap += '\n</urlset>';

  // Write sitemap to public directory
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(
    path.join(publicDir, 'sitemap.xml'),
    sitemap
  );

  console.log('Sitemap generated successfully!');
};

generateSitemap();
