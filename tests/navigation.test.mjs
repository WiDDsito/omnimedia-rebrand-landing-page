import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
const read = async (file) => JSON.parse(await readFile(new URL(file, import.meta.url), 'utf8'));
const walk = (nodes) => nodes.flatMap((node) => [node, ...walk(node.children ?? [])]);

test('centralized navigation preserves every informative destination from the original', async () => {
  const original = await read('../docs/header-audit/menu-original.json');
  const revised = await read('../src/data/navigation.json');
  const expected = walk(original.menu.filter((node) => node.label !== 'TIENDA'))
    .map((node) => node.url)
    .filter((url) => url !== '#' && url !== 'https://www.omnimediaperu.com/');
  const actual = new Set(walk(revised).map((node) => node.url));
  for (const url of expected) assert.ok(actual.has(url), `Missing informative destination: ${url}`);
  assert.ok(actual.has('https://www.lineassiptrunk.com/'));
  assert.ok(![...actual].some((url) => /tienda|cart|checkout/.test(url)));
});
