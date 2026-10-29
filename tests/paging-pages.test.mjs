import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { pagingPages } from '../src/data/paging-pages.mjs';
import { solutionPages } from '../src/data/solution-pages.mjs';
import { localSolutionHref } from '../src/data/solution-links.mjs';
import { pbxBrandPages } from '../src/data/pbx-brand-pages.mjs';
import navigation from '../src/data/navigation.json' with { type: 'json' };

test('all four paging families are reachable locally from the overview and original menu', () => {
  assert.deepEqual(
    pagingPages.map((page) => page.id),
    ['consolas', 'gateways', 'altavoces', 'debate'],
  );
  const overview = solutionPages.find((page) => page.id === 'perifoneo');
  const menu = navigation
    .find((item) => item.id === 'solutions')
    .children.find((item) => item.id === 'audio');
  assert.deepEqual(
    menu.children.map((item) => localSolutionHref(item.url)),
    pagingPages.map((page) => page.path),
  );
  for (const page of pagingPages) {
    assert.equal(new URL(page.source).pathname, page.path);
    assert.ok(overview.links.some((link) => link.href === page.path));
    assert.ok(existsSync(new URL(`../public/images/${page.image}`, import.meta.url)));
    assert.ok(page.links.some((link) => link.href === '/contactenos/'));
  }
  for (const page of pbxBrandPages) assert.equal(localSolutionHref(page.source), page.path);
  assert.equal(localSolutionHref('https://example.com/'), 'https://example.com/');
});

test('paging catalogs have distinct equipment families and direct technical references', () => {
  assert.deepEqual(
    pagingPages.map((page) => page.links.filter((link) => link.href.endsWith('.pdf')).length),
    [3, 2, 4, 2],
  );
  assert.ok(pagingPages[3].links.some((link) => link.title.includes('VIS-DOC-T / VIS-DOD-T')));
  for (const page of pagingPages) {
    for (const link of page.links.filter((link) => link.href.endsWith('.pdf'))) {
      assert.match(link.href, /^https:\/\/www\.omnimediaperu\.com\/wp-content\/uploads\//);
      assert.equal(link.actionLabel, 'Ver ficha técnica PDF');
    }
  }
});
