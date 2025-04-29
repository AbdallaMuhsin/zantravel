import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import your data
// Function to extract array data from TypeScript files
const extractArrayFromTS = (filePath, exportName) => {
  const content = fs.readFileSync(filePath, 'utf8');
  // Skip interfaces and type definitions
  const contentWithoutTypes = content.replace(/export\s+(?:interface|type)\s+[^{]+\{[^}]+\}/g, '');
  const match = contentWithoutTypes.match(new RegExp(`export\\s+const\\s+${exportName}\\s+=\\s+(\\[\\s*\\{[^]*?\\}\\s*\\])`, 'm'));
  if (!match) throw new Error(`Could not find ${exportName} in ${filePath}`);
  try {
    return JSON.parse(match[1].replace(/'/g, '"')
      .replace(/,\s*}/g, '}')
      .replace(/,\s*]/g, ']')
      .replace(/([{,])\s*([a-zA-Z0-9_]+):/g, '$1"$2":'));
  } catch (e) {
    console.error(`Error parsing ${exportName} from ${filePath}:`, e);
    throw e;
  }
};

// Extract data from TypeScript files
const activitiesData = extractArrayFromTS(
  path.join(__dirname, '../src/data/activities.ts'),
  'activities'
);

const packagesData = extractArrayFromTS(
  path.join(__dirname, '../src/data/packages.ts'),
  'packages'
);

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

  // Add activity routes
  activitiesData.forEach(activity => {
    sitemap += generateUrlXml(
      `${WEBSITE_URL}/activities/${activity.id}`,
      LAST_MOD,
      '0.7',
      'weekly'
    );
  });

  // Add package routes
  packagesData.forEach(pkg => {
    sitemap += generateUrlXml(
      `${WEBSITE_URL}/packages/${pkg.id}`,
      LAST_MOD,
      '0.7',
      'weekly'
    );
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
