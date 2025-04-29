import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: resolve(__dirname, '../../../.env') });

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dftddtxip',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface UploadOptions {
  publicId?: string;
  folder?: string;
  tags?: string[];
  transformation?: any[];
}

export const uploadImage = async (
  imageUrl: string,
  options: UploadOptions = {}
): Promise<{ url: string; publicId: string }> => {
  try {
    const uploadResult = await cloudinary.uploader.upload(imageUrl, {
      public_id: options.publicId,
      folder: options.folder || 'zantravel',
      tags: options.tags,
      transformation: options.transformation || [
        { quality: 'auto:best' },
        { fetch_format: 'auto' },
      ],
    });

    return {
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id,
    };
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw error;
  }
};

// Helper function to upload multiple images
export const uploadMultipleImages = async (
  images: { url: string; publicId?: string }[],
  options: Omit<UploadOptions, 'publicId'> = {}
) => {
  const results = await Promise.all(
    images.map((image) =>
      uploadImage(image.url, {
        ...options,
        publicId: image.publicId,
      })
    )
  );
  return results;
};

// Example usage:
// const images = [
//   { url: 'https://example.com/image1.jpg', publicId: 'hero-image' },
//   { url: 'https://example.com/image2.jpg', publicId: 'about-image' },
// ];
// 
// uploadMultipleImages(images, {
//   folder: 'website-images',
//   tags: ['hero', 'website'],
// }).then(results => {
//   console.log('Uploaded images:', results);
// });
