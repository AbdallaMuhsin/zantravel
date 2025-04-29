import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dftddtxip',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadSingleImage(imagePath) {
  try {
    // Read the mapping file
    const mappingPath = path.resolve(__dirname, '../src/utils/imageMapping.json');
    const mapping = JSON.parse(await fs.readFile(mappingPath, 'utf-8'));

    // Get the relative path from src/assets
    const fullPath = path.resolve(process.cwd(), imagePath);
    const assetsIndex = fullPath.indexOf('src\\assets\\');
    if (assetsIndex === -1) {
      throw new Error('Image must be in src/assets directory');
    }

    const relativePath = fullPath.slice(assetsIndex);
    
    // Upload to Cloudinary
    console.log(`Uploading ${fullPath}...`);
    const folder = 'zantravel/' + relativePath
      .split('\\')
      .slice(2, -1)
      .join('/')
      .toLowerCase();

    const result = await cloudinary.uploader.upload(fullPath, {
      folder,
      use_filename: true,
    });

    // Update or add to mapping
    const existingIndex = mapping.findIndex(m => m.originalPath === fullPath);
    const newMapping = {
      originalPath: fullPath,
      cloudinaryUrl: result.secure_url,
      publicId: result.public_id,
    };

    if (existingIndex !== -1) {
      mapping[existingIndex] = newMapping;
    } else {
      mapping.push(newMapping);
    }

    // Save updated mapping
    await fs.writeFile(mappingPath, JSON.stringify(mapping, null, 2));
    console.log('Upload complete! Image mapping updated.');
    console.log('Cloudinary URL:', result.secure_url);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Get image path from command line argument
const imagePath = process.argv[2];
if (!imagePath) {
  console.error('Please provide an image path');
  process.exit(1);
}

uploadSingleImage(imagePath);
