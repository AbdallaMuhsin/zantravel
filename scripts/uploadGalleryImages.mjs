import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dftddtxip',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function uploadGalleryImages() {
  try {
    const galleryDir = path.resolve(__dirname, '../src/assets/gallery-image');
    const files = await fs.readdir(galleryDir);
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    });

    console.log(`Found ${imageFiles.length} images in gallery directory`);

    for (const file of imageFiles) {
      const filePath = path.join(galleryDir, file);
      try {
        // Check if image already exists in Cloudinary
        const publicId = `gallery/${path.parse(file).name}`;
        const exists = await cloudinary.api.resource(publicId).catch(() => null);

        if (exists) {
          console.log(`✓ Image ${file} already exists in Cloudinary`);
          continue;
        }

        // Upload new image
        console.log(`Uploading ${file}...`);
        const result = await cloudinary.uploader.upload(filePath, {
          public_id: publicId,
          folder: 'gallery',
          use_filename: true,
          unique_filename: false
        });
        console.log(`✓ Uploaded ${file} to Cloudinary`);

      } catch (error) {
        console.error(`✗ Failed to upload ${file}:`, error.message);
      }
    }

  } catch (error) {
    console.error('Error:', error.message);
  }
}

uploadGalleryImages();
