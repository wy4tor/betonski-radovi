const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, '..', 'dist', 'index.html');

if (!fs.existsSync(distPath)) {
  console.log('ERROR: dist/index.html does not exist. Run npm run build first.');
  process.exit(1);
}

const h = fs.readFileSync(distPath, 'utf8');
const start = h.indexOf('<div id="root">');
const scriptIdx = h.indexOf('<script', start);

if (start === -1) {
  console.log('ERROR: <div id="root"> not found in dist/index.html');
  process.exit(1);
}

const injected = h.slice(start + 15, scriptIdx);
console.log('Total dist/index.html length:', h.length);
console.log('Injected content length (between root div and first script):', injected.length);
console.log('\n--- First 600 chars of injected content ---');
console.log(injected.slice(0, 600));
console.log('\n--- Last 300 chars of injected content ---');
console.log(injected.slice(-300));

// Quick content spot-checks
const checks = [
  ['H1 present', injected.includes('Betonski Radovi Bojnik')],
  ['Hero/BLUF present', injected.includes('pouzdan majstorski tim')],
  ['Services present', injected.includes('Betoniranje dvorišta')],
  ['FAQ present', injected.includes('Jablaničkom okrugu')],
  ['Phone present', injected.includes('381638899797')],
  ['Footer business desc', injected.includes('Profesionalni betonski radovi')],
];

console.log('\n--- Spot checks on injected content ---');
checks.forEach(([name, pass]) => console.log(`${pass ? '[PASS]' : '[FAIL]'} ${name}`));
