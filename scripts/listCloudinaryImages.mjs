import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function listImages() {
  try {
    const mappingPath = path.resolve(__dirname, '../src/utils/imageMapping.json');
    const mapping = JSON.parse(await fs.readFile(mappingPath, 'utf-8'));

    // Group images by folder
    const imagesByFolder = mapping.reduce((acc, img) => {
      const folder = img.publicId.split('/')[1]; // Get the folder name (activities-image, package-image, etc)
      if (!acc[folder]) {
        acc[folder] = [];
      }
      // Get just the image name from the path
      const imageName = img.originalPath.split('\\').pop();
      acc[folder].push({
        name: imageName,
        url: img.cloudinaryUrl,
        path: img.originalPath.split('src\\assets\\')[1].replace(/\\/g, '/')
      });
      return acc;
    }, {});

    // Print the results
    console.log('Available Cloudinary Images:\n');
    for (const [folder, images] of Object.entries(imagesByFolder)) {
      console.log(`\n${folder.toUpperCase()}:`);
      console.log('-'.repeat(50));
      images.forEach(img => {
        console.log(`${img.name}`);
        console.log(`Path: ${img.path}`);
        console.log('-'.repeat(50));
      });
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

listImages();
