const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Define the input and output directories
const inputDirectory = 'path/to/input/folder';
const outputDirectory = 'path/to/output/folder';

// Define the desired width and height for the cropped images
const targetWidth = 500;
const targetHeight = 300;

// Read the input directory
fs.readdir(inputDirectory, (error, files) => {
  if (error) {
    console.error('Error reading directory:', error);
    return;
  }

  // Process each file in the input directory
  files.forEach((file) => {
    const inputPath = path.join(inputDirectory, file);
    const outputPath = path.join(outputDirectory, file);

    // Crop and resize the image using Sharp
    sharp(inputPath)
      .resize(targetWidth, targetHeight, { fit: 'cover' })
      .toFile(outputPath, (err) => {
        if (err) {
          console.error(`Error processing image ${file}:`, err);
        } else {
          console.log(`Image ${file} cropped and resized successfully.`);
        }
      });
  });
});
