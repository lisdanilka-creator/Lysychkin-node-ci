const fs = require('node:fs');
const path = require('node:path');

console.log('Building project...');
const outputDir = path.join(__dirname, 'dist');
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'index.html'), '<h1>Hello CI</h1>\n');
console.log('Build completed: dist/index.html');
