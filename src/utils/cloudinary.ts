import { Cloudinary } from '@cloudinary/url-gen';

// Create a Cloudinary instance
const cld = new Cloudinary({
  cloud: {
    cloudName: 'dftddtxip' // Replace with your cloud name
  },
  url: {
    secure: true // Force HTTPS
  }
});

// Helper function to get optimized image URL
export const getOptimizedImageUrl = (publicId: string, options?: {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'jpeg' | 'png';
}) => {
  // Build transformation string
  const transformations = [];

  // Add size transformations
  if (options?.width) transformations.push(`w_${options.width}`);
  if (options?.height) transformations.push(`h_${options.height}`);
  
  // Add quality transformation
  transformations.push(`q_${options?.quality || 'auto'}`);
  
  // Add format transformation
  transformations.push(`f_${options?.format || 'auto'}`);
  
  // Add crop mode if both width and height are specified
  if (options?.width && options?.height) transformations.push('c_fill');
  
  // Apply transformations
  const transformationString = transformations.join(',');
  const cloudName = (cld as any).config?.cloud?.cloudName || 'dftddtxip';
  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformationString}/${publicId}`;
};

// Predefined image sizes for responsive design
export const imageSizes = {
  thumbnail: { width: 150, height: 150 },
  small: { width: 300, height: 200 },
  medium: { width: 600, height: 400 },
  large: { width: 1200, height: 800 },
  hero: { width: 1920, height: 1080 }
};
