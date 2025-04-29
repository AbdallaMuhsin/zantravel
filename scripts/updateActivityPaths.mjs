import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function updateActivityPaths() {
  // Read the activities file
  const activitiesPath = path.resolve(__dirname, '../src/data/activities.ts');
  let content = await fs.readFile(activitiesPath, 'utf-8');

  // Replace all image paths to use the correct format
  content = content.replace(
    /image: getImageUrl\(['"]([^'"]+)['"](,\s*\{[^}]+\})?\)/g,
    (match, imagePath) => {
      // Ensure path starts with /src/assets/
      const fullPath = imagePath.startsWith('/src/assets/') ? imagePath : `/src/assets/${imagePath}`;
      return `image: getImageUrl('${fullPath}')`;
    }
  );

  // Write the updated content back
  await fs.writeFile(activitiesPath, content, 'utf-8');
  console.log('Updated all activity image paths');
}

updateActivityPaths();
