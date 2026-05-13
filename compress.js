const sharp = require('sharp');
const path = require('path');

async function compressImage() {
  const inputPath = path.join(__dirname, 'public', 'hero-image.png');
  const outputPath = path.join(__dirname, 'public', 'hero-image.webp');
  
  try {
    await sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);
    console.log('Successfully compressed hero-image.png to hero-image.webp');
  } catch (error) {
    console.error('Error compressing image:', error);
  }
}

compressImage();
