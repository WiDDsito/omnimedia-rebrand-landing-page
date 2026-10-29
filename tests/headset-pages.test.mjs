import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import navigation from '../src/data/navigation.json' with { type: 'json' };
import { headsetPages, localHeadsetHref } from '../src/data/headset-pages.mjs';
import { localSolutionHref } from '../src/data/solution-links.mjs';
import { productPages } from '../src/data/product-pages.mjs';

test('Yealink and VT have local headset views while the Poly subtree stays external', () => {
  assert.deepEqual(
    headsetPages.map((page) => page.id),
    ['yealink', 'vt'],
  );
  const menu = navigation
    .find((item) => item.id === 'products')
    .children.find((item) => item.id === 'headsets');
  for (const page of headsetPages) {
    assert.equal(page.path, new URL(page.source).pathname);
    assert.equal(localSolutionHref(page.source), page.path);
    assert.ok(menu.children.some((item) => item.url === page.source));
    assert.ok(
      productPages
        .find((item) => item.id === 'headsets')
        .links.some((item) => item.href === page.path),
    );
  }
  const checkPoly = (item) => {
    assert.equal(localHeadsetHref(item.url), item.url);
    assert.equal(localSolutionHref(item.url), item.url);
    item.children.forEach(checkPoly);
  };
  checkPoly(menu.children[0]);
  assert.equal(localHeadsetHref(menu.url), '/productos/auriculares/');
  assert.equal(localHeadsetHref('https://example.com/'), 'https://example.com/');
});

test('headset catalogs preserve models, documents and accessory distinctions', async () => {
  const manifest = JSON.parse(
    await readFile(new URL('../docs/HEADSET-CATALOG-SOURCES.json', import.meta.url)),
  );
  for (const page of headsetPages) {
    assert.equal(page.equipment.length, page.id === 'yealink' ? 9 : 17);
    assert.equal(new Set(page.equipment.map((item) => item.id)).size, page.equipment.length);
    await access(new URL(`../public/images/${page.image}`, import.meta.url));
    for (const item of page.equipment) {
      await access(new URL(`../public/images/${item.image}`, import.meta.url));
      assert.ok(item.features.length >= 2);
      if (item.pdf) assert.match(item.pdf, /\.pdf$/);
    }
    const source = manifest.categories.find((item) => item.source === page.source);
    for (const pdf of source.pdfs)
      assert.ok(page.equipment.some((item) => item.pdf === pdf.url.replace('.pdfdf', '.pdf')));
  }
  const yealink = headsetPages[0];
  assert.match(yealink.equipment.find((item) => item.id === 'bh76-plus').note, /BH76/);
  assert.equal(yealink.equipment.find((item) => item.id === 'sp96').group, 'Altavoces');
  const vt = headsetPages[1];
  assert.equal(vt.equipment.find((item) => item.id === 'bt100u').group, 'Accesorios');
  assert.equal(vt.equipment.find((item) => item.id === 'cs61').group, 'Altavoces');
  assert.ok(vt.equipment.find((item) => item.id === 'vtx200-biaural').note);
  for (const id of ['vtx300bt', 'vt9602bt', 'bt100u', 'cs61'])
    assert.equal(vt.equipment.find((item) => item.id === id).pdf, null);
});
