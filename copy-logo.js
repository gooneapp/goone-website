import fs from 'fs';
import path from 'path';

const source = 'C:\\GoOne\\goone-docs\\logo\\logo.png.png';
const destination = 'C:\\GoOne\\goone-website\\public\\logo.png';

try {
  // Ensure the public directory exists
  if (!fs.existsSync(path.dirname(destination))) {
    fs.mkdirSync(path.dirname(destination), { recursive: true });
  }

  // Copy the file
  fs.copyFileSync(source, destination);
  console.log('✅ Success! The logo has been copied successfully.');
} catch (error) {
  console.error('❌ Error copying the logo:', error.message);
}
