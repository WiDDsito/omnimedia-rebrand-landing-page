import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { productPages } from '../src/data/product-pages.mjs';

test('each product menu family has a local informative view and retains its category links', async () => {
  const navigation = JSON.parse(
    await readFile(new URL('../src/data/navigation.json', import.meta.url)),
  );
  const families = navigation.find((item) => item.id === 'products').children;
  assert.deepEqual(
    productPages.map((page) => page.id),
    families.map((family) => family.id),
  );
  assert.equal(new Set(productPages.map((page) => page.path)).size, 6);
  for (const family of families) {
    const page = productPages.find((page) => page.id === family.id);
    assert.match(page.path, /^\/productos\/[a-z-]+\/$/);
    assert.equal(page.source, family.url);
    assert.ok(page.introduction.length >= 2);
    assert.equal(page.points.length, 3);
    assert.ok(page.links.length >= 2);
    for (const child of family.children)
      assert.ok(
        page.links.some((link) => link.href === child.url),
        `Missing ${child.label}`,
      );
    for (const link of page.links) {
      assert.match(link.href, /^https:\/\//);
      assert.ok(!/tienda|cart|checkout|add-to-cart/i.test(link.href));
    }
    await access(new URL(`../public/images/${page.image}`, import.meta.url));
  }
});
