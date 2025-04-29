import imageMapping from './imageMapping.json';
import { GalleryImage } from '../data/gallery';

type ImageMapping = {
  originalPath: string;
  cloudinaryUrl: string;
  publicId: string;
}[];

const mapping: ImageMapping = imageMapping;

type ImageOptions = {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'auto' | 'webp' | 'avif';
};

export function getThirdImages(): GalleryImage[] {
  const paths = [
    '/src/assets/activity-detail-image',
    '/src/assets/Activities-image',
    '/src/assets/Package-image'
  ];

  const thirdImages: GalleryImage[] = [];
  let id = 1;

  paths.forEach(basePath => {
    // Since we can't read the filesystem directly in the browser,
    // we'll use a pattern to generate likely paths
    const commonNames = [
      'safari-blue',
      'snorkeling',
      'dolphin',
      'spice-tour',
      'stone-town',
      'jozani',
      'mnemba',
      'nakupenda',
      'prison-island',
      'beach',
      'sunset',
      'quad',
      'bicycle',
      'cultural'
    ];

    commonNames.forEach(name => {
      const path = `${basePath}/${name}-3.jpg`;
      thirdImages.push({
        id: String(id++),
        src: path,
        alt: name.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' '),
        category: getCategoryFromName(name)
      });
    });
  });

  return thirdImages;
}

function getCategoryFromName(name: string): 'beach' | 'wildlife' | 'culture' | 'adventure' {
  const categories = {
    beach: ['beach', 'sunset', 'mnemba', 'nakupenda'],
    wildlife: ['dolphin', 'jozani'],
    culture: ['spice', 'stone', 'cultural'],
    adventure: ['safari', 'snorkeling', 'quad', 'bicycle']
  };

  for (const [category, keywords] of Object.entries(categories)) {
    if (keywords.some(keyword => name.toLowerCase().includes(keyword))) {
      return category as 'beach' | 'wildlife' | 'culture' | 'adventure';
    }
  }

  return 'adventure';
}

export const getImageUrl = (originalPath: string, options: ImageOptions = {}) => {
  const {
    width,
    height,
    quality = 80,
    format = 'webp'
  } = options;

  // Build transformation string
  const transforms = [
    'f_' + format,
    'q_' + quality,
    width ? 'w_' + width : '',
    height ? 'h_' + height : '',
    'c_fill'
  ].filter(Boolean).join(',');

  // Convert Windows path to forward slashes and remove /src/assets/
  const normalizedPath = originalPath.replace(/\\/g, '/').replace(/^\/src\/assets\//, '');
  
  // Find the mapping for this image
  const image = mapping.find(img => {
    const imgPath = img.originalPath.split('src\\assets\\')[1].replace(/\\/g, '/');
    return imgPath.toLowerCase() === normalizedPath.toLowerCase();
  });
  
  if (!image) {
    console.warn(`No Cloudinary mapping found for: ${originalPath}`);
    return originalPath; // Fallback to original path
  }

  // Extract the base URL and version from the Cloudinary URL
  const [baseUrl, versionAndPath] = image.cloudinaryUrl.split('/upload/');
  const version = versionAndPath.split('/')[0]; // This gets the v1234567890 part
  
  // Construct the final URL with transforms
  return `${baseUrl}/upload/${transforms}/${version}/${image.publicId}.${format}`;
};
