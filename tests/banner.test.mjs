import test from 'node:test';
import assert from 'node:assert/strict';
import { nextCampaign, createCampaignPlayback } from '../src/lib/banner.mjs';
test('banner wraps through seven categories in both directions', () => {
  assert.equal(nextCampaign(6, 1, 7), 0);
  assert.equal(nextCampaign(0, -1, 7), 6);
  assert.equal(nextCampaign(3, 1, 7), 4);
  assert.equal(nextCampaign(0, 1, 0), 0);
});
test('automatic playback pauses for independent reasons, resumes and resets after navigation', () => {
  let scheduled;
  let advances = 0;
  let delay;
  const playback = createCampaignPlayback(() => advances++, {
    schedule: (callback, ms) => {
      scheduled = callback;
      delay = ms;
      return 1;
    },
    cancel: () => {
      scheduled = undefined;
    },
  });
  playback.reset();
  assert.equal(delay, 5000);
  scheduled();
  assert.equal(advances, 1);
  playback.setPaused('hover', true);
  assert.equal(scheduled, undefined);
  playback.setPaused('focus', true);
  playback.setPaused('hover', false);
  assert.equal(scheduled, undefined);
  playback.setPaused('focus', false);
  assert.equal(typeof scheduled, 'function');
  const old = scheduled;
  playback.reset();
  assert.notEqual(scheduled, old);
  playback.setPaused('user', true);
  playback.reset();
  assert.equal(scheduled, undefined);
  playback.setPaused('user', false);
  assert.equal(typeof scheduled, 'function');
  playback.destroy();
  assert.equal(scheduled, undefined);
});
