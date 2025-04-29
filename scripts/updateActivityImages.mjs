import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function updateActivityImages() {
  // Read the activities file
  const activitiesPath = path.resolve(__dirname, '../src/data/activities.ts');
  let content = await fs.readFile(activitiesPath, 'utf-8');

  // Add the import statement if it doesn't exist
  if (!content.includes("import { getImageUrl }")) {
    content = "import { getImageUrl } from '../utils/images';\n\n" + content;
  }

  // Replace all image paths
  content = content.replace(
    /image: "\/src\/assets\/([^"]+)"/g,
    'image: getImageUrl("$1", { width: 600, height: 400, quality: 90 })'
  );

  // Write the updated content back
  await fs.writeFile(activitiesPath, content, 'utf-8');
  console.log('Updated all activity image paths to use Cloudinary');
}

updateActivityImages();
