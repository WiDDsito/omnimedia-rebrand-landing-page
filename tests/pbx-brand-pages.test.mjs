import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { pbxBrandPages, pbxBrandPaths } from '../src/data/pbx-brand-pages.mjs';
import { telephonyPages, localTelephonyHref } from '../src/data/telephony-pages.mjs';

test('three brand routes preserve original paths and are linked from the central overview', () => {
  assert.deepEqual(
    pbxBrandPages.map((page) => page.id),
    ['avaya', 'yeastar', 'grandstream'],
  );
  assert.equal(new Set(pbxBrandPages.map((page) => page.path)).size, 3);
  const parent = telephonyPages.find((page) => page.id === 'centrales');
  for (const page of pbxBrandPages) {
    assert.equal(page.path, pbxBrandPaths[page.id]);
    assert.equal(page.path, new URL(page.source).pathname);
    assert.equal(localTelephonyHref(page.source), page.path);
    assert.ok(parent.links.some((link) => link.href === page.path));
    assert.ok(existsSync(new URL(`../public/images/${page.image}`, import.meta.url)));
    assert.ok(page.links.some((link) => link.href === '/contactenos/'));
  }
});

test('brand catalogs retain their distinct models and point to technical PDF references', () => {
  assert.deepEqual(
    pbxBrandPages[1].models.map((model) => model.name),
    ['P520', 'P550', 'P560', 'P570'],
  );
  assert.deepEqual(
    pbxBrandPages[2].models.map((model) => model.name),
    ['UCM6202', 'UCM6204', 'UCM6301', 'UCM6302', 'UCM6304', 'UCM6308', 'UCM6510', 'HA100'],
  );
  assert.equal(
    pbxBrandPages[2].models.find((model) => model.name === 'HA100').label,
    'Alta disponibilidad',
  );
  assert.ok(pbxBrandPages[0].models.some((model) => model.name === 'IP Office 500'));
  for (const page of pbxBrandPages) {
    for (const model of page.models) {
      assert.match(model.href, /^https:\/\/www\.omnimediaperu\.com\/wp-content\/uploads\/.*\.pdf$/);
      assert.ok(model.description.length > 0);
    }
  }
});
