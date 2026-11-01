import test from 'node:test';
import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import navigation from '../src/data/navigation.json' with { type: 'json' };
import { voyagerPages, voyagerModels } from '../src/data/voyager-pages.mjs';
import { localSolutionHref } from '../src/data/solution-links.mjs';
import { productPages } from '../src/data/product-pages.mjs';

test('Voyager and all four menu destinations have local views without implementing other Poly series', () => {
  const poly = navigation
    .find((item) => item.id === 'products')
    .children.find((item) => item.id === 'headsets').children[0];
  const series = poly.children[0];
  assert.equal(voyagerPages.length, 5);
  assert.equal(new Set(voyagerPages.map((page) => page.path)).size, 5);
  for (const item of [series, ...series.children]) {
    const page = voyagerPages.find((page) => page.source === item.url);
    assert.ok(page, item.label);
    assert.equal(page.path, new URL(item.url).pathname);
    assert.equal(localSolutionHref(item.url), page.path);
  }
  const overview = voyagerPages[0];
  for (const model of voyagerModels)
    assert.ok(overview.links.some((link) => link.href === model.path));
  assert.ok(
    productPages
      .find((page) => page.id === 'headsets')
      .links.some((link) => link.href === overview.path),
  );
  const checkExternal = (item) => {
    assert.equal(localSolutionHref(item.url), item.url);
    item.children.forEach(checkExternal);
  };
  assert.equal(localSolutionHref(poly.url), poly.url);
  poly.children.slice(1).forEach(checkExternal);
});

test('Voyager preserves model differences, primary references and local image resources', async () => {
  assert.deepEqual(
    voyagerModels.map((page) => page.id),
    ['focus-2', '4300-uc', 'legend-50', '5200'],
  );
  for (const page of voyagerPages)
    await access(new URL(`../public/images/${page.image}`, import.meta.url));
  for (const model of voyagerModels) {
    assert.ok(model.features.length >= 4);
    assert.ok(model.variants.length >= 1);
    assert.match(
      model.manufacturer,
      /^https:\/\/(?:support\.hp\.com|www\.hp\.com|jp\.ext\.hp\.com)\//,
    );
    assert.ok(model.links.some((link) => link.href === model.manufacturer));
    for (const variant of model.variants)
      await access(new URL(`../public/images/${variant.image}`, import.meta.url));
  }
  const focus = voyagerModels[0];
  assert.ok(focus.features.some((feature) => feature.includes('estéreo')));
  assert.ok(!focus.features.some((feature) => feature.includes('Monoaural')));
  const series4300 = voyagerModels[1];
  assert.deepEqual(
    series4300.variants.map((variant) => variant.title),
    ['Voyager 4310 UC', 'Voyager 4320 UC'],
  );
  assert.match(series4300.variants[0].description, /monoaural/);
  assert.match(series4300.variants[1].description, /estéreo/);
  assert.ok(!series4300.title.includes('Blackwire'));
});
