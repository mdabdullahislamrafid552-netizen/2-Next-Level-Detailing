import fs from 'fs';
import path from 'path';

function walkAndReplace(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkAndReplace(fullPath);
    } else if (stat.isFile() && (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      content = content.replace(/#66FCF1/g, '#094dad').replace(/#66fcf1/g, '#094dad').replace(/%2366fcf1/g, '%23094dad');
      fs.writeFileSync(fullPath, content);
    }
  }
}

walkAndReplace(path.join(process.cwd(), 'src'));
console.log('Replaced successfully');
