import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
async function files(dir) {
  return (
    await Promise.all(
      (await readdir(dir, { withFileTypes: true })).map((entry) => {
        const file = new URL(entry.name + (entry.isDirectory() ? '/' : ''), dir);
        return entry.isDirectory() ? files(file) : [file];
      }),
    )
  ).flat();
}
test('source image references use existing WebP files', async () => {
  let count = 0;
  for (const file of await files(new URL('src/', root))) {
    if (!/\.(astro|ts|mjs|css|json)$/.test(file.pathname)) continue;
    const source = await readFile(file, 'utf8');
    assert.ok(
      !/['"`]([^'"`]*\.(?:jpe?g|png))['"`]/i.test(source),
      `Legacy image reference in ${file.pathname}`,
    );
    for (const match of source.matchAll(/['"`]([^'"`]+\.webp)['"`]/g)) {
      const ref = match[1];
      const target = ref.startsWith('/images/')
        ? new URL(`public${ref}`, root)
        : ref.startsWith('.')
          ? new URL(ref, file)
          : new URL(`public/images/${ref}`, root);
      await access(target);
      count++;
    }
  }
  assert.ok(count >= 10, 'Expected references to the site image collection');
});
test('Vercel upload rules retain imported source images', async () => {
  const ignore = (await readFile(new URL('.vercelignore', root), 'utf8')).split(/\r?\n/);
  assert.ok(!ignore.includes('assets'), 'Unanchored assets rule excludes src/assets');
  assert.ok(!ignore.includes('src/assets'));
  await access(new URL('src/assets/meeting-room.webp', root));
});
