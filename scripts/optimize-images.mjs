import sharp from 'sharp';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const assetsDir = resolve(__dirname, '../../Assets');
const rootDir = resolve(__dirname, '../..');
const outDir = resolve(__dirname, '../public/images');

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

// Large PNGs that need compression (26-31 MB → ~300 KB WebP)
const largeImages = [
  { input: 'Frame 21.png', output: 'display-box.webp', width: 1200 },
  { input: 'Frame 22.png', output: 'collectors-box.webp', width: 1200 },
  { input: 'Frame 23.png', output: 'cone-tube.webp', width: 1200 },
  { input: 'Frame 24.png', output: 'pre-roll-cone.webp', width: 1200 },
];

// Small images to copy directly (already web-ready)
const copyImages = [
  { input: '1.webp', output: 'rolling-papers-open.webp', from: 'assets' },
  { input: '2.jpg', output: 'rolling-papers-closed.jpg', from: 'assets' },
  { input: '3.jpg', output: 'rolling-papers-alt.jpg', from: 'assets' },
  { input: 'frame5.jpeg', output: 'lifestyle.jpeg', from: 'assets' },
  { input: 'image1.1.png', output: 'detail-closeup.png', from: 'assets' },
  { input: 'img2.webp', output: 'hero-banner.webp', from: 'assets' },
  { input: 'suprbaby.webp', output: 'logo.webp', from: 'assets' },
  { input: 'one.png', output: 'step-1.png', from: 'root' },
  { input: 'two.png', output: 'step-2.png', from: 'root' },
  { input: 'three.png', output: 'step-3.png', from: 'root' },
  { input: 'four.png', output: 'step-4.png', from: 'root' },
  { input: 'five.png', output: 'step-5.png', from: 'root' },
  { input: 'six.png', output: 'step-6.png', from: 'root' },
  { input: 'seven.png', output: 'step-7.png', from: 'root' },
];

console.log('🖼️  Optimizing large images...');
for (const img of largeImages) {
  const inputPath = resolve(assetsDir, img.input);
  const outputPath = resolve(outDir, img.output);
  try {
    await sharp(inputPath)
      .resize(img.width, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outputPath);
    console.log(`  ✅ ${img.input} → ${img.output}`);
  } catch (err) {
    console.log(`  ❌ ${img.input}: ${err.message}`);
  }
}

console.log('\n📋 Copying web-ready images...');
for (const img of copyImages) {
  const inputPath = img.from === 'assets'
    ? resolve(assetsDir, img.input)
    : resolve(rootDir, img.input);
  const outputPath = resolve(outDir, img.output);
  try {
    copyFileSync(inputPath, outputPath);
    console.log(`  ✅ ${img.input} → ${img.output}`);
  } catch (err) {
    console.log(`  ❌ ${img.input}: ${err.message}`);
  }
}

console.log('\n🎉 Done! All images in public/images/');
