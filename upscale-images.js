const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const os = require('os');

async function upscaleImages() {
  const images = [
    {
      input: 'public/images/maya.jpg',
      width: 2880,
      height: 3840,
      name: 'Maya portrait (3:4)'
    },
    {
      input: 'public/images/office-1.jpg',
      width: 3840,
      height: 2160,
      name: 'Office interior 1 (16:9)'
    },
    {
      input: 'public/images/office-2.jpg',
      width: 3840,
      height: 2160,
      name: 'Office interior 2 (16:9)'
    }
  ];

  for (const img of images) {
    try {
      console.log(`\n📸 Processing ${img.name}...`);
      console.log(`   Input: ${img.input}`);
      
      // Get original dimensions
      const metadata = await sharp(img.input).metadata();
      console.log(`   Original size: ${metadata.width}x${metadata.height}`);
      
      // Create temporary file path
      const tempFile = path.join(os.tmpdir(), `upscale-${Date.now()}.jpg`);
      
      // Upscale to 4K using temporary file
      await sharp(img.input)
        .resize(img.width, img.height, {
          fit: 'fill',
          kernel: sharp.kernel.lanczos3
        })
        .jpeg({ quality: 90, progressive: true })
        .toFile(tempFile);
      
      // Replace original with upscaled version
      fs.copyFileSync(tempFile, img.input);
      fs.unlinkSync(tempFile);
      
      // Get file size
      const stats = fs.statSync(img.input);
      const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
      console.log(`   ✓ Upscaled to ${img.width}x${img.height}`);
      console.log(`   File size: ${sizeMB} MB`);
    } catch (error) {
      console.error(`   ✗ Error: ${error.message}`);
    }
  }

  console.log('\n✅ All images upscaled to 4K!');
}

upscaleImages().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
