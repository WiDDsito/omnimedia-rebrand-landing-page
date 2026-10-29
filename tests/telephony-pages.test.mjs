import test from 'node:test';
import assert from 'node:assert/strict';
import {
  telephonyPages,
  telephonyPaths,
  localTelephonyHref,
} from '../src/data/telephony-pages.mjs';
import { solutionPages } from '../src/data/solution-pages.mjs';
import navigation from '../src/data/navigation.json' with { type: 'json' };

test('the three telephony views retain their sources and are reachable from the overview', () => {
  assert.deepEqual(
    telephonyPages.map((page) => page.id),
    ['virtual', 'sip', 'centrales'],
  );
  const overview = solutionPages.find((page) => page.id === 'telefonia');
  for (const page of telephonyPages) {
    assert.equal(page.path, `/telefonia/${page.slug}/`);
    assert.equal(localTelephonyHref(page.source), page.path);
    assert.ok(overview.links.some((link) => link.href === page.path));
    assert.ok(
      page.links.some(
        (link) => link.href === '/contactenos/' || link.href === '/servicios/soporte-tecnico/',
      ),
    );
    assert.ok(page.links.every((link) => !/tienda|checkout|cart/.test(link.href)));
  }
  assert.equal(telephonyPaths.virtual, new URL(telephonyPages[0].source).pathname);
  assert.equal(telephonyPaths.centrales, new URL(telephonyPages[2].source).pathname);
});

test('menu routing uses local views while preserving brand destinations and external references', () => {
  const phone = navigation
    .find((item) => item.id === 'solutions')
    .children.find((item) => item.id === 'phone');
  assert.deepEqual(
    phone.children.map((item) => localTelephonyHref(item.url)),
    Object.values(telephonyPaths),
  );
  const brands = phone.children[2].children;
  assert.equal(brands.length, 3);
  for (const brand of brands) {
    assert.equal(localTelephonyHref(brand.url), brand.url);
    assert.ok(telephonyPages[2].links.some((link) => link.href === brand.url));
  }
  assert.equal(localTelephonyHref('/contactenos/'), '/contactenos/');
  assert.equal(localTelephonyHref('https://example.com/'), 'https://example.com/');
  assert.ok(telephonyPages[1].links.some((link) => link.href === telephonyPages[1].source));
});
