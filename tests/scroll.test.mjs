import test from 'node:test';
import assert from 'node:assert/strict';
import { getScrollState } from '../src/lib/scroll.mjs';

test('the return control stays hidden at the top and appears after 320 pixels', () => {
  assert.equal(getScrollState(0, 900, 3000).visible, false);
  assert.equal(getScrollState(320, 900, 3000).visible, false);
  assert.equal(getScrollState(321, 900, 3000).visible, true);
});
test('progress is clamped during overscroll and reaches 100 at the bottom', () => {
  assert.equal(getScrollState(-20, 900, 3000).progress, 0);
  assert.equal(getScrollState(2100, 900, 3000).progress, 100);
  assert.equal(getScrollState(2300, 900, 3000).progress, 100);
});
test('short pages do not produce invalid progress or show a return control', () => {
  assert.deepEqual(getScrollState(0, 900, 700), { visible: false, progress: 0 });
});
