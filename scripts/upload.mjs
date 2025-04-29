import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

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

const uploadImage = async (imageUrl, publicId) => {
  try {
    const result = await cloudinary.uploader.upload(imageUrl, {
      public_id: publicId,
      folder: 'website',
      tags: ['hero', 'website'],
      transformation: [
        { width: 1920, height: 1080, crop: 'fill' },
        { quality: 'auto:best' },
        { fetch_format: 'auto' }
      ]
    });
    console.log('Upload successful:', result.secure_url);
    return result;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
};

const uploadWebsiteImages = async () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg',
      publicId: 'zanzibar-hero'
    }
  ];

  try {
    for (const image of images) {
      await uploadImage(image.url, image.publicId);
    }
    console.log('All images uploaded successfully!');
  } catch (error) {
    console.error('Error uploading images:', error);
  }
};

uploadWebsiteImages();
