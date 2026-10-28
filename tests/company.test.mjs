import test from 'node:test';
import assert from 'node:assert/strict';
import { company } from '../src/data/company.mjs';

test('contact channels point directly to the published business channels', () => {
  assert.equal(
    new URL(company.channels.find((c) => c.id === 'whatsapp').href).searchParams.get('phone'),
    '51916945556',
  );
  assert.equal(
    company.channels.find((c) => c.id === 'email').href,
    'mailto:cotizaciones@omnimediaperu.com',
  );
  assert.deepEqual(
    company.channels.filter((c) => c.href.startsWith('tel:')).map((c) => c.href),
    ['tel:+5117152145', 'tel:+51916945556'],
  );
  assert.equal(company.location, 'Lima, Perú');
  assert.equal(new URL(company.mapsUrl).searchParams.get('cid'), '7211361605130793235');
  assert.equal(company.socials.length, 4);
  assert.equal(new Set(company.socials.map((s) => s.href)).size, 4);
  for (const social of company.socials)
    assert.match(social.href, /^https:\/\/(www\.)?(facebook|instagram|youtube|tiktok)\.com\//);
});
