import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

async function prerender() {
  console.log('[PRERENDER] Building SSR bundle for prerendering...');
  
  // 1. Build the SSR bundle using Vite
  await build({
    root,
    build: {
      ssr: path.resolve(root, 'src/entry-server.tsx'),
      outDir: path.resolve(root, 'dist-ssr'),
      emptyOutDir: true,
      logLevel: 'warn',
    },
    configFile: path.resolve(root, 'vite.config.ts'),
  });

  // 2. Import the compiled server render function
  const entryServerPath = path.resolve(root, 'dist-ssr/entry-server.js');
  const fileUrl = `file://${entryServerPath.replace(/\\/g, '/')}?t=${Date.now()}`;
  const { render } = await import(fileUrl);
  const appHtml = render();

  if (!appHtml || appHtml.length === 0) {
    throw new Error('Prerender produced empty HTML');
  }

  // 3. Inject into dist/index.html
  const indexPath = path.resolve(root, 'dist/index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error(`dist/index.html not found at ${indexPath}`);
  }

  let html = fs.readFileSync(indexPath, 'utf8');
  const rootOpenTag = '<div id="root">';
  const rootIndex = html.indexOf(rootOpenTag);
  if (rootIndex === -1) {
    throw new Error('Could not find <div id="root"> in dist/index.html');
  }

  // Find where the root div ends (right before the closing tag and scripts)
  const scriptIndex = html.indexOf('<script', rootIndex);
  if (scriptIndex === -1) {
    // If no script tag after root, find </body>
    const bodyEnd = html.indexOf('</body>', rootIndex);
    const beforeRoot = html.slice(0, rootIndex + rootOpenTag.length);
    const afterRoot = html.slice(bodyEnd);
    html = beforeRoot + appHtml + '</div>' + afterRoot;
  } else {
    const beforeRoot = html.slice(0, rootIndex + rootOpenTag.length);
    const afterRoot = html.slice(scriptIndex);
    html = beforeRoot + appHtml + '</div>' + afterRoot;
  }

  fs.writeFileSync(indexPath, html, 'utf8');

  // 4. Clean up temporary dist-ssr directory
  try {
    fs.rmSync(path.resolve(root, 'dist-ssr'), { recursive: true, force: true });
  } catch {
    // Ignore cleanup errors
  }

  console.log(`[PRERENDER] Success! Injected ${appHtml.length} characters of HTML into dist/index.html`);
}

prerender().catch(err => {
  console.error('[PRERENDER ERROR]', err);
  process.exit(1);
});
