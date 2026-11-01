import test from 'node:test';
import assert from 'node:assert/strict';
import { solutionPages } from '../src/data/solution-pages.mjs';

test('four solution entry views have unique local routes and informative links', () => {
  assert.deepEqual(solutionPages.map((p) => p.id).sort(), [
    'atencion',
    'perifoneo',
    'telefonia',
    'video',
  ]);
  assert.equal(new Set(solutionPages.map((p) => p.path)).size, 4);
  for (const page of solutionPages) {
    assert.match(page.path, /^\/soluciones\/[a-z-]+\/$/);
    assert.ok(page.introduction.length >= 2);
    assert.ok(page.links.length >= 4);
    assert.ok(
      page.links.every(
        (link) =>
          (link.href.startsWith('https://') ||
            (link.href.startsWith('/') && !link.href.startsWith('//'))) &&
          !/tienda|cart|checkout/.test(link.href),
      ),
    );
  }
  assert.ok(
    solutionPages
      .find((p) => p.id === 'telefonia')
      .links.some((link) => link.href === '/telefonia/lineas-sip-trunk/'),
  );
});
