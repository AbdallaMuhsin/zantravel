import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function deleteLocalImages(directoryPath) {
  try {
    // Read the mapping file
    const mappingPath = path.resolve(__dirname, '../src/utils/imageMapping.json');
    const mapping = JSON.parse(await fs.readFile(mappingPath, 'utf-8'));

    // Get all files in the directory
    const files = await fs.readdir(directoryPath);
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
    });

    console.log(`Found ${imageFiles.length} image files in ${directoryPath}`);

    // Check each image
    const toDelete = [];
    for (const file of imageFiles) {
      const fullPath = path.resolve(directoryPath, file);
      
      // Check if image exists in mapping
      const isInMapping = mapping.some(m => {
        const normalizedMappingPath = m.originalPath.replace(/\\/g, '/');
        const normalizedFullPath = fullPath.replace(/\\/g, '/');
        return normalizedMappingPath.includes(normalizedFullPath);
      });

      if (isInMapping) {
        toDelete.push({
          path: fullPath,
          name: file
        });
      } else {
        console.log(`⚠️ Skipping ${file} - not found in mapping`);
      }
    }

    if (toDelete.length === 0) {
      console.log('No files to delete');
      return;
    }

    console.log(`\nFound ${toDelete.length} files that can be safely deleted:`);
    toDelete.forEach(file => {
      console.log(`- ${file.name}`);
    });

    const readline = (await import('readline')).default.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    const answer = await new Promise(resolve => {
      readline.question('\nDo you want to delete these files? (yes/no): ', resolve);
    });
    readline.close();

    if (answer.toLowerCase() !== 'yes') {
      console.log('Operation cancelled');
      return;
    }

    // Delete files
    console.log('\nDeleting files...');
    for (const file of toDelete) {
      try {
        await fs.unlink(file.path);
        console.log(`✓ Deleted ${file.name}`);
      } catch (error) {
        console.error(`✗ Failed to delete ${file.name}:`, error.message);
      }
    }

    console.log('\nDeletion complete!');

  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Get directory path from command line argument or use default
const directoryPath = process.argv[2];
if (!directoryPath) {
  console.error('Please provide a directory path');
  process.exit(1);
}

deleteLocalImages(directoryPath);
