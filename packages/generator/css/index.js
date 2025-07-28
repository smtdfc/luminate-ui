import { components, globals } from '../dist/index.js';
import { writeFile, mkdir } from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let cssCode = globals.generator() + "\n";

cssCode += Object.keys(components)
  .map(name => components[name].generator())
  .join('\n');

const filePath = path.join(__dirname, '../../css/dist/index.css');
const folderPath = path.dirname(filePath);

try {
  await mkdir(folderPath, { recursive: true });
  await writeFile(filePath, cssCode);
} catch (err) {
  console.error('Error:', err);
}