import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { phones, phoneBrands, localPhoneHref } from '../src/data/phone-catalog.mjs';
import { matchesPhoneSearch } from '../src/lib/phone-filter.mjs';

test('every inventoried phone source is represented and all models have local detail routes', async () => {
  const manifest = JSON.parse(
    await readFile(new URL('../docs/PHONE-CATALOG-SOURCES.json', import.meta.url)),
  );
  assert.equal(phones.length, 128);
  assert.equal(new Set(phones.map((phone) => phone.path)).size, phones.length);
  assert.deepEqual(
    phoneBrands.map((brand) => brand.id),
    ['avaya', 'fanvil', 'poly', 'yealink', 'grandstream', 'panasonic', 'samsung'],
  );
  for (const source of manifest.originalProductSources)
    assert.ok(
      phones.some((phone) => phone.source === source),
      `Missing source ${source}`,
    );
  for (const phone of phones) {
    assert.equal(phone.path, `/producto/${phone.slug}/`);
    assert.ok(phoneBrands.some((brand) => brand.id === phone.brand));
    assert.ok(phone.features.length > 0, phone.id);
    assert.ok(phone.features.join(' ').split(/\s+/).length <= 150, phone.id);
    assert.ok(!/tienda|cart|checkout|add-to-cart/.test(phone.path));
    await access(new URL(`../public/images/${phone.image}`, import.meta.url));
  }
});

test('grouped variants have their own views and retain the shared feature scope', () => {
  for (const model of [
    'EDGE B10',
    'EDGE B20',
    'GXP1610',
    'GXP1615',
    'GXP1620',
    'GXP1625',
    'GRP2601',
    'GRP2601P',
    'GRP2601W',
    'GRP2612P',
    'GRP2612W',
  ]) {
    const phone = phones.find((phone) => phone.model === model);
    assert.ok(phone, model);
    assert.ok(phone.sharedFeatures, model);
    assert.ok(phone.variantGroup.includes(model), model);
  }
  for (const brand of phoneBrands.filter((brand) => brand.source))
    assert.equal(localPhoneHref(brand.source), brand.path);
  assert.equal(
    localPhoneHref('https://www.omnimediaperu.com/producto/telefono-avaya-j129/'),
    '/producto/telefono-avaya-j129/',
  );
});

test('phone search tolerates accents, spaces and punctuation while requiring all query terms', () => {
  assert.ok(matchesPhoneSearch('Teléfono Panasonic KX-TS580', 'kx ts580'));
  assert.ok(matchesPhoneSearch('Teléfono Avaya J129', 'J129 avaya'));
  assert.ok(matchesPhoneSearch('Teléfono Avaya J129', 'telefono'));
  assert.ok(matchesPhoneSearch('Poly EDGE E350', 'e350'));
  assert.ok(!matchesPhoneSearch('Teléfono Avaya J129', 'J179'));
  assert.ok(!matchesPhoneSearch('Teléfono Avaya J129', 'J129 Fanvil'));
  assert.ok(matchesPhoneSearch('Teléfono Avaya J129', ''));
});
