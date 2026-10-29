import test from 'node:test';
import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import navigation from '../src/data/navigation.json' with { type: 'json' };
import { hotelPages, hotelCatalogPath, localHotelHref } from '../src/data/hotel-pages.mjs';
import { productPages } from '../src/data/product-pages.mjs';
import { localSolutionHref } from '../src/data/solution-links.mjs';

test('every hotel menu subindex opens its local view and keeps the Cetis hierarchy', () => {
  const hotels = navigation
    .find((item) => item.id === 'products')
    .children.find((item) => item.id === 'hotels');
  const subindices = hotels.children.flatMap((item) => [item, ...item.children]);
  assert.equal(hotelPages.length, 5);
  assert.equal(new Set(hotelPages.map((page) => page.path)).size, 5);
  for (const item of subindices) {
    const page = hotelPages.find((entry) => entry.source === item.url);
    assert.ok(page, item.label);
    assert.equal(page.path, new URL(item.url).pathname);
    assert.equal(localHotelHref(item.url), page.path);
    assert.equal(localSolutionHref(item.url), page.path);
  }
  const cetis = hotelPages.find((page) => page.id === 'cetis');
  for (const page of hotelPages.filter((page) => page.parentId === 'cetis'))
    assert.ok(cetis.links.some((link) => link.href === page.path));
  const overview = productPages.find((page) => page.id === 'hotels');
  for (const item of hotels.children)
    assert.ok(overview.links.some((link) => link.href === localHotelHref(item.url)));
  assert.equal(localHotelHref(hotels.url), hotelCatalogPath);
  assert.equal(localHotelHref('https://example.com/'), 'https://example.com/');
});

test('hotel series preserve all published families, technical links and local WebP resources', async () => {
  const expected = { cetis: 0, fanvil: 2, telematrix: 4, teledex: 7, scitec: 2 };
  for (const page of hotelPages) {
    assert.equal(page.series.length, expected[page.id]);
    await access(new URL(`../public/images/${page.image}`, import.meta.url));
    assert.ok(page.links.every((link) => link.href.startsWith('/')));
    for (const series of page.series) {
      assert.ok(series.description.length > 15);
      assert.ok(series.features.length >= 2);
      assert.match(series.pdf, /^https:\/\/www\.omnimediaperu\.com\/wp-content\/uploads\/.+\.pdf$/);
      if (series.image) await access(new URL(`../public/images/${series.image}`, import.meta.url));
    }
  }
  const trimline = hotelPages
    .find((page) => page.id === 'telematrix')
    .series.find((item) => item.id === 'trimline');
  assert.match(trimline.pdf, /SERIE-3300/);
  assert.ok(trimline.note.includes('3300'));
  const emergency = hotelPages
    .find((page) => page.id === 'scitec')
    .series.find((item) => item.id === 'emergency');
  assert.equal(emergency.image, null);
});
