const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_CONFIG = [
  {
    id: 1,
    oldFile: 'public/images/i01.jpg',
    newFile: 'public/images/izrada-betonskih-stepenica-i-zidova-bojnik.webp',
    maxW: 600,
    maxH: 1080,
    quality: 85,
    role: 'aboutA / gallery'
  },
  {
    id: 2,
    oldFile: 'public/images/i02.jpg',
    newFile: 'public/images/betoniranje-prilaza-i-dvorista-bojnik-leskovac.webp',
    maxW: 800,
    maxH: 1067,
    quality: 85,
    role: 'hero / service / story / gallery'
  },
  {
    id: 3,
    oldFile: 'public/images/i03.jpg',
    newFile: 'public/images/betoniranje-dvorista-bojnik.webp',
    maxW: 800,
    maxH: 1067,
    quality: 80,
    role: 'service / gallery'
  },
  {
    id: 4,
    oldFile: 'public/images/i04.jpg',
    newFile: 'public/images/betonske-staze-i-trotoari-leskovac.webp',
    maxW: 800,
    maxH: 1067,
    quality: 80,
    role: 'service / gallery'
  },
  {
    id: 5,
    oldFile: 'public/images/i05.jpg',
    newFile: 'public/images/postavljanje-ivicnjaka-i-betonske-staze-juzna-srbija.webp',
    maxW: 800,
    maxH: 1067,
    quality: 80,
    role: 'gallery'
  },
  {
    id: 6,
    oldFile: 'public/images/i06.jpg',
    newFile: 'public/images/salovanje-i-armiranje-jablanicki-okrug.webp',
    maxW: 800,
    maxH: 800,
    quality: 80,
    role: 'service / story / gallery'
  },
  {
    id: 7,
    oldFile: 'public/images/i07.jpg',
    newFile: 'public/images/zakrivljene-betonske-staze-dvorista-bojnik.webp',
    maxW: 850,
    maxH: 1133,
    quality: 78,
    role: 'aboutB / gallery'
  },
  {
    id: 8,
    oldFile: 'public/images/i08.jpg',
    newFile: 'public/images/zavrsna-obrada-betona-oko-kuce-leskovac.webp',
    maxW: 800,
    maxH: 1067,
    quality: 80,
    role: 'gallery'
  },
  {
    id: 9,
    oldFile: 'public/images/i09.jpg',
    newFile: 'public/images/kvalitetno-betoniranje-povrsina-bojnik.webp',
    maxW: 1080,
    maxH: 1080,
    quality: 82,
    role: 'background / gallery'
  },
  {
    id: 10,
    oldFile: 'public/images/i10.jpg',
    newFile: 'public/images/izrada-betonskih-platoa-i-podloga-bojnik.webp',
    maxW: 800,
    maxH: 800,
    quality: 80,
    role: 'service / story / gallery'
  },
  {
    id: 11,
    oldFile: 'public/images/i11.jpg',
    newFile: 'public/images/betonske-parking-povrsine-leskovac-bojnik.webp',
    maxW: 850,
    maxH: 850,
    quality: 82,
    role: 'service / gallery'
  },
  {
    id: 12,
    oldFile: 'public/images/i12.jpg',
    newFile: 'public/images/odvodnjavanje-kanali-betonski-radovi-leskovac.webp',
    maxW: 800,
    maxH: 1067,
    quality: 78,
    role: 'story / gallery'
  }
];

async function optimizeImages() {
  console.log('Optimizing images...');
  const results = [];
  for (const img of IMAGES_CONFIG) {
    const inputPath = path.resolve(img.oldFile);
    const outputPath = path.resolve(img.newFile);
    
    await sharp(inputPath)
      .resize({
        width: img.maxW,
        height: img.maxH,
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({
        quality: img.quality,
        effort: 6
      })
      .toFile(outputPath);

    const meta = await sharp(outputPath).metadata();
    const stats = fs.statSync(outputPath);
    const sizeKB = Number((stats.size / 1024).toFixed(1));
    results.push({
      id: img.id,
      name: path.basename(img.newFile),
      width: meta.width,
      height: meta.height,
      sizeKB
    });
    console.log(`${path.basename(img.newFile)}: ${meta.width}x${meta.height}, ${sizeKB} KB`);
  }
  console.log('\nJSON Summary:');
  console.log(JSON.stringify(results, null, 2));
}

optimizeImages().catch(err => {
  console.error(err);
  process.exit(1);
});
