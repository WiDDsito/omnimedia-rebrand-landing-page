import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { servicePages, servicePaths } from '../src/data/service-pages.mjs';

test('both service menu entries have unique local views and preserve the original service URLs', async () => {
  const navigation = JSON.parse(
    await readFile(new URL('../src/data/navigation.json', import.meta.url)),
  );
  const families = navigation.find((item) => item.id === 'services').children;
  assert.deepEqual(
    servicePages.map((page) => page.id),
    families.map((family) => family.id),
  );
  assert.equal(new Set(servicePages.map((page) => page.path)).size, 2);
  for (const family of families) {
    const page = servicePages.find((page) => page.id === family.id);
    assert.match(page.path, /^\/servicios\/[a-z-]+\/$/);
    assert.equal(servicePaths[family.id], page.path);
    assert.equal(page.source, family.url);
    assert.ok(page.links.some((link) => link.href === family.url));
    assert.ok(page.introduction.length >= 2);
    assert.equal(page.points.length, 3);
    assert.ok(page.links.length >= 3);
    assert.match(page.image, /\.webp$/);
    await access(new URL(`../public/images/${page.image}`, import.meta.url));
    for (const link of page.links) {
      assert.match(link.href, /^https:\/\//);
      assert.ok(!/tienda|checkout|add-to-cart/i.test(link.href));
    }
  }
  const samples = servicePages
    .find((page) => page.id === 'ivr')
    .links.filter((link) => link.href.endsWith('.mp3'));
  assert.equal(samples.length, 4);
  assert.ok(samples.every((link) => link.actionLabel === 'Escuchar muestra de audio'));
});
