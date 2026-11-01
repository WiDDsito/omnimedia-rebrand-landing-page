import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import navigation from '../src/data/navigation.json' with { type: 'json' };
import { networkPages, localNetworkHref } from '../src/data/network-pages.mjs';
import { productPages } from '../src/data/product-pages.mjs';
import { localSolutionHref } from '../src/data/solution-links.mjs';

test('all seven Networking subindices have local views and retain their parent links', () => {
  const menu = navigation
    .find((item) => item.id === 'products')
    .children.find((item) => item.id === 'network');
  const items = menu.children.flatMap((item) => [item, ...item.children]);
  assert.equal(networkPages.length, items.length);
  assert.equal(new Set(networkPages.map((page) => page.path)).size, 7);
  for (const item of items) {
    const page = networkPages.find((page) => page.source === item.url);
    assert.ok(page, item.label);
    assert.equal(page.path, new URL(item.url).pathname);
    assert.equal(localNetworkHref(item.url), page.path);
    assert.equal(localSolutionHref(item.url), page.path);
    if (page.parentId) {
      const parent = networkPages.find((entry) => entry.id === page.parentId);
      assert.ok(parent.links.some((link) => link.href === page.path));
    }
  }
  const overview = productPages.find((page) => page.id === 'network');
  for (const item of menu.children)
    assert.ok(overview.links.some((link) => link.href === localNetworkHref(item.url)));
  assert.equal(
    localNetworkHref(menu.url),
    menu.url,
    'The original general products URL must remain general',
  );
  assert.equal(localNetworkHref('https://example.com/'), 'https://example.com/');
});

test('Networking retains all equipment documentation and uses local WebP images', async () => {
  const expected = {
    switches: 0,
    'switch-aruba': 8,
    'switch-unifi': 9,
    ups: 21,
    'access-points': 0,
    'ap-aruba': 5,
    'ap-unifi': 12,
  };
  const manifest = JSON.parse(
    await readFile(new URL('../docs/NETWORK-CATALOG-SOURCES.json', import.meta.url)),
  );
  for (const page of networkPages) {
    assert.equal(page.equipment.length, expected[page.id], page.id);
    await access(new URL(`../public/images/${page.image}`, import.meta.url));
    assert.equal(new Set(page.equipment.map((item) => item.id)).size, page.equipment.length);
    for (const item of page.equipment) {
      assert.match(item.pdf, /^https:\/\/www\.omnimediaperu\.com\/wp-content\/uploads\/.+\.pdf$/);
      assert.ok(item.features.length >= 2);
      await access(new URL(`../public/images/${item.image}`, import.meta.url));
    }
    const source = manifest.categories.find((category) => category.source === page.source);
    for (const pdf of source.pdfs)
      assert.ok(
        page.equipment.some((item) => item.pdf === pdf.url),
        `Missing ${pdf.url}`,
      );
  }
  const unifi = networkPages.find((page) => page.id === 'ap-unifi');
  assert.equal(unifi.equipment.find((item) => item.id === 'ua-pocket').group, 'Control de acceso');
  assert.equal(
    unifi.equipment.find((item) => item.id === 'udb-pro-sector').group,
    'Enlaces inalámbricos',
  );
  assert.equal(unifi.equipment[0].group, 'Puntos de acceso');
  const ups = networkPages.find((page) => page.id === 'ups');
  assert.match(ups.equipment.find((item) => item.id === 'srv3ki-e').note, /SRV3KI/);
});
