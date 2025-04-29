import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: resolve(__dirname, '../.env') });

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dftddtxip',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to get all images from imageMapping.json
const getUsedImages = async () => {
  const mappingPath = resolve(__dirname, '../src/utils/imageMapping.json');
  const mapping = JSON.parse(await fs.readFile(mappingPath, 'utf8'));
  return mapping.map(item => item.publicId);
};

// Function to get all images from Cloudinary
const getCloudinaryImages = async () => {
  const results = [];
  let nextCursor = null;

  do {
    const response = await cloudinary.api.resources({
      type: 'upload',
      max_results: 500,
      next_cursor: nextCursor
    });
    
    results.push(...response.resources.map(res => ({
      public_id: res.public_id,
      url: res.secure_url,
      created_at: res.created_at
    })));
    nextCursor = response.next_cursor;
  } while (nextCursor);

  return results;
};

// Function to find unused images
const findUnusedImages = (cloudinaryImages, usedImages) => {
  // Separate images into categories
  const sampleImages = [];
  const zantravelImages = [];
  const otherImages = [];

  cloudinaryImages.forEach(image => {
    if (!usedImages.includes(image.public_id)) {
      if (image.public_id.startsWith('samples/') || image.public_id === 'sample') {
        sampleImages.push(image);
      } else if (image.public_id.includes('zantravel')) {
        zantravelImages.push(image);
      } else {
        otherImages.push(image);
      }
    }
  });

  return { sampleImages, zantravelImages, otherImages };
};

// Function to delete images
const displayImageCategory = (images, title) => {
  if (images.length === 0) return;
  
  console.log(`\n${title} (${images.length} images):\n`);
  images.forEach(image => {
    console.log(`Public ID: ${image.public_id}`);
    console.log(`URL: ${image.url}`);
    console.log(`Uploaded: ${new Date(image.created_at).toLocaleString()}`);
    console.log('---');
  });
};

const deleteImages = async (unusedImages) => {
  const { sampleImages, zantravelImages, otherImages } = unusedImages;
  const totalUnused = sampleImages.length + zantravelImages.length + otherImages.length;

  if (totalUnused === 0) {
    console.log('No unused images found.');
    return;
  }

  console.log('\n=== Unused Images Report ===');
  displayImageCategory(sampleImages, 'Cloudinary Sample Images');
  displayImageCategory(zantravelImages, 'Unused Zantravel Images');
  displayImageCategory(otherImages, 'Other Unused Images');

  console.log('\nWhat would you like to delete?');
  console.log('1. Only sample images');
  console.log('2. Only unused zantravel images');
  console.log('3. Only other unused images');
  console.log('4. All unused images');
  console.log('5. Cancel');

  const choice = await question('\nEnter your choice (1-5): ');

  let imagesToDelete = [];
  switch(choice) {
    case '1': imagesToDelete = sampleImages; break;
    case '2': imagesToDelete = zantravelImages; break;
    case '3': imagesToDelete = otherImages; break;
    case '4': imagesToDelete = [...sampleImages, ...zantravelImages, ...otherImages]; break;
    case '5': 
      console.log('Operation cancelled.');
      return;
    default:
      console.log('Invalid choice. Operation cancelled.');
      return;
  }

  const confirm = await question(`\nAre you sure you want to delete ${imagesToDelete.length} images? (yes/no): `);
  if (confirm.toLowerCase() !== 'yes') {
    console.log('Operation cancelled.');
    return;
  }

  console.log('\nDeleting images...');
  for (const image of imagesToDelete) {
    try {
      await cloudinary.uploader.destroy(image.public_id);
      console.log(`✓ Deleted ${image.public_id}`);
    } catch (error) {
      console.error(`✗ Failed to delete ${image.public_id}:`, error.message);
    }
  }
};

// Helper function to get user input
const question = (query) => new Promise((resolve) => {
  process.stdout.write(query);
  process.stdin.once('data', (data) => {
    resolve(data.toString().trim());
  });
});

// Main function
const main = async () => {
  try {
    console.log('Fetching used images from imageMapping.json...');
    const usedImages = await getUsedImages();
    
    console.log('Fetching all images from Cloudinary...');
    const cloudinaryImages = await getCloudinaryImages();
    
    console.log('Finding unused images...');
    const unusedImages = findUnusedImages(cloudinaryImages, usedImages);
    
    await deleteImages(unusedImages);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    process.exit();
  }
};

main();
