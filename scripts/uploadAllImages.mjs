import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve, join } from 'path';
import fs from 'fs/promises';
import path from 'path';

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

// Helper function to create a clean public ID from a file path
const createPublicId = (filePath) => {
  // Remove the base directory and file extension
  const cleanPath = filePath
    .replace(/\\/g, '/') // Convert Windows paths to forward slashes
    .replace(/\.(jpg|jpeg|png|webp)$/i, ''); // Remove extension
  
  return cleanPath.toLowerCase();
};

// Helper function to upload a single image
const uploadImage = async (imagePath, publicId) => {
  try {
    console.log(`Uploading ${imagePath}...`);
    const result = await cloudinary.uploader.upload(imagePath, {
      public_id: publicId,
      folder: 'zantravel',
      tags: ['website'],
      transformation: [
        { quality: 'auto:best' },
        { fetch_format: 'auto' }
      ]
    });
    return {
      originalPath: imagePath,
      cloudinaryUrl: result.secure_url,
      publicId: result.public_id
    };
  } catch (error) {
    console.error(`Failed to upload ${imagePath}:`, error);
    return null;
  }
};

// Main function to upload all images
const uploadAllImages = async () => {
  const baseDir = resolve(__dirname, '../src/assets');
  const results = [];
  
  // Function to recursively get all image files
  const getImageFiles = async (dir) => {
    const items = await fs.readdir(dir, { withFileTypes: true });
    const files = [];
    
    for (const item of items) {
      const fullPath = join(dir, item.name);
      if (item.isDirectory()) {
        files.push(...(await getImageFiles(fullPath)));
      } else if (/\.(jpg|jpeg|png|webp)$/i.test(item.name)) {
        // Skip small UI images and icons
        if (!fullPath.includes('icons') && !fullPath.includes('logo')) {
          files.push(fullPath);
        }
      }
    }
    
    return files;
  };

  try {
    // Get all image files
    const imageFiles = await getImageFiles(baseDir);
    console.log(`Found ${imageFiles.length} images to upload`);

    // Upload each image
    for (const imagePath of imageFiles) {
      const relativePath = path.relative(baseDir, imagePath);
      const publicId = createPublicId(relativePath);
      const result = await uploadImage(imagePath, publicId);
      if (result) {
        results.push(result);
      }
    }

    // Save the results to a JSON file for reference
    const mappingFile = resolve(__dirname, '../src/utils/imageMapping.json');
    await fs.writeFile(
      mappingFile,
      JSON.stringify(results, null, 2)
    );

    console.log(`\nUpload complete! ${results.length} images uploaded successfully`);
    console.log(`Image mapping saved to ${mappingFile}`);
    
  } catch (error) {
    console.error('Error during upload:', error);
  }
};

uploadAllImages();
