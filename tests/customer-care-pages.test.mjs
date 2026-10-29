import test from 'node:test';
import assert from 'node:assert/strict';
import { customerCarePages, customerCarePaths } from '../src/data/customer-care-pages.mjs';
import { solutionPages } from '../src/data/solution-pages.mjs';
import { localSolutionHref } from '../src/data/solution-links.mjs';
import navigation from '../src/data/navigation.json' with { type: 'json' };

test('all seven customer care views preserve source paths and are reachable from menu and overview', () => {
  assert.deepEqual(
    customerCarePages.map((page) => page.id),
    ['whatsapp', 'contact-center', 'automatica', 'grabacion', 'tarificacion', 'ivr', 'sms'],
  );
  const overview = solutionPages.find((page) => page.id === 'atencion');
  const menu = navigation
    .find((item) => item.id === 'solutions')
    .children.find((item) => item.id === 'contact');
  assert.deepEqual(
    menu.children.map((item) => localSolutionHref(item.url)).sort(),
    Object.values(customerCarePaths).sort(),
  );
  assert.equal(new Set(customerCarePages.map((page) => page.path)).size, 7);
  for (const page of customerCarePages) {
    assert.equal(page.path, new URL(page.source).pathname);
    assert.ok(overview.links.some((link) => link.href === page.path));
    assert.equal(localSolutionHref(page.source), page.path);
  }
  assert.equal(customerCarePaths.whatsapp, '/plataforma-multiagente-de-whatsapp/');
});

test('each customer care view has a complete visual flow and valid related solutions', () => {
  const paths = new Set(customerCarePages.map((page) => page.path));
  for (const page of customerCarePages) {
    assert.equal(page.steps.length, 3);
    assert.equal(page.points.length, 3);
    assert.equal(new Set(page.relatedIds).size, 3);
    assert.ok(!page.relatedIds.includes(page.id));
    for (const id of page.relatedIds) assert.ok(customerCarePaths[id]);
    assert.ok(page.links.some((link) => link.href === '/contactenos/'));
    assert.ok(page.links.some((link) => link.href === '/servicios/audios-e-ivr/'));
    assert.equal(page.links.filter((link) => paths.has(link.href)).length, 2);
  }
});
