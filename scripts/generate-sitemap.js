const fs = require('fs');
const path = require('path');
const { activities } = require('../src/data/activities');

const baseUrl = 'https://zantravel.vercel.app'; // Update this to your production URL

// Define static routes
const staticRoutes = [
  '/',
  '/activities',
  '/about',
  '/contact',
];

// Generate sitemap XML content
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${activities.map(activity => `
  <url>
    <loc>${baseUrl}/activities/${activity.id}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

  // Write sitemap to public directory
  fs.writeFileSync(
    path.join(__dirname, '../public/sitemap.xml'),
    sitemap.trim()
  );

  console.log('Sitemap generated successfully!');
}

// Generate the sitemap
generateSitemap();
