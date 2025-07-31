#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Checking build output...');

const distPath = path.join(__dirname, '../dist');

if (!fs.existsSync(distPath)) {
  console.log('❌ dist folder not found. Run "npm run build" first.');
  process.exit(1);
}

const files = fs.readdirSync(distPath);
console.log('✅ dist folder found');
console.log('📁 Files in dist:', files);

// Check for essential files
const essentialFiles = ['index.html', 'assets'];
const missingFiles = essentialFiles.filter(file => {
  if (file === 'assets') {
    return !fs.existsSync(path.join(distPath, 'assets'));
  }
  return !files.includes(file);
});

if (missingFiles.length > 0) {
  console.log('❌ Missing essential files:', missingFiles);
  process.exit(1);
}

console.log('✅ All essential files present');
console.log('🚀 Build looks good for deployment!'); 