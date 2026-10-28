import test from 'node:test';
import assert from 'node:assert/strict';
import { nextCampaign } from '../src/lib/banner.mjs';
test('banner wraps forwards and backwards through all eight views', () => {
  assert.equal(nextCampaign(7, 1, 8), 0);
  assert.equal(nextCampaign(0, -1, 8), 7);
  assert.equal(nextCampaign(3, 1, 8), 4);
  assert.equal(nextCampaign(0, 1, 0), 0);
});
