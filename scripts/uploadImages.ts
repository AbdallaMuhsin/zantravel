import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { uploadMultipleImages } from '../src/utils/uploadToCloudinary.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadWebsiteImages = async () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg',
      publicId: 'zanzibar-hero'
    }
    // Add more images here as needed
  ];

  try {
    const results = await uploadMultipleImages(images, {
      folder: 'website',
      tags: ['hero', 'website'],
      transformation: [
        { width: 1920, height: 1080, crop: 'fill' },
        { quality: 'auto:best' },
        { fetch_format: 'auto' }
      ]
    });

    console.log('Successfully uploaded images:', results);
  } catch (error) {
    console.error('Error uploading images:', error);
  }
};

uploadWebsiteImages();
