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

async function uploadImage(imagePath, mapping) {
  try {
    // Get the relative path from src/assets
    const fullPath = path.resolve(process.cwd(), imagePath);
    const assetsIndex = fullPath.indexOf('src\\assets\\');
    if (assetsIndex === -1) {
      throw new Error('Image must be in src/assets directory');
    }

    const relativePath = fullPath.slice(assetsIndex);
    
    // Check if image is already in mapping
    const existingImage = mapping.find(m => m.originalPath === fullPath);
    if (existingImage) {
      console.log(`Skipping ${path.basename(fullPath)} - already uploaded`);
      return null;
    }

    // Upload to Cloudinary
    console.log(`Uploading ${path.basename(fullPath)}...`);
    const folder = 'zantravel/' + relativePath
      .split('\\')
      .slice(2, -1)
      .join('/')
      .toLowerCase();

    const result = await cloudinary.uploader.upload(fullPath, {
      folder,
      use_filename: true,
    });

    return {
      originalPath: fullPath,
      cloudinaryUrl: result.secure_url,
      publicId: result.public_id,
    };

  } catch (error) {
    console.error(`Error uploading ${path.basename(imagePath)}:`, error.message);
    return null;
  }
}

async function uploadDirectoryImages(directoryPath) {
  try {
    // Read the mapping file
    const mappingPath = path.resolve(__dirname, '../src/utils/imageMapping.json');
    let mapping = JSON.parse(await fs.readFile(mappingPath, 'utf-8'));

    // Get all files in the directory
    const files = await fs.readdir(directoryPath);
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
    });

    console.log(`Found ${imageFiles.length} image files in directory`);

    // Upload each image
    const results = [];
    for (const file of imageFiles) {
      const imagePath = path.join(directoryPath, file);
      const result = await uploadImage(imagePath, mapping);
      if (result) {
        results.push(result);
      }
    }

    if (results.length === 0) {
      console.log('No new images to upload');
      return;
    }

    // Update mapping file with new entries
    mapping = [...mapping, ...results];
    await fs.writeFile(mappingPath, JSON.stringify(mapping, null, 2));

    console.log(`\nSuccessfully uploaded ${results.length} new images:`);
    results.forEach(result => {
      console.log(`- ${path.basename(result.originalPath)}`);
    });
    console.log('\nImage mapping file has been updated.');

  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Get directory path from command line argument or use default
const directoryPath = process.argv[2] || 'src/assets/Activities-image';
uploadDirectoryImages(directoryPath);
