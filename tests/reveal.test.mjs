import test from 'node:test';
import assert from 'node:assert/strict';
import { createRevealTimeline } from '../src/lib/reveal.mjs';

const sample = (timeline, target, progress) => {
  timeline.progress(progress);
  return { x: target.x, y: target.y, opacity: target.opacity, scale: target.scale };
};
test('scrolling backwards restores the same visual state without restarting', () => {
  const target = { x: 0, y: 0, opacity: 1, scale: 1 };
  const timeline = createRevealTimeline(target, 28);
  const positions = [0, 0.1, 0.2, 0.5, 0.8, 0.9, 1];
  const forward = positions.map((p) => sample(timeline, target, p));
  const backward = positions.toReversed().map((p) => sample(timeline, target, p));
  assert.deepEqual(backward.toReversed(), forward);
  timeline.kill();
});
test('content stays fully visible and at its natural size in the reading area', () => {
  const target = { x: 0, y: 0, opacity: 1, scale: 1 };
  const timeline = createRevealTimeline(target, 28);
  for (const progress of [0.2, 0.35, 0.5, 0.65, 0.8]) {
    assert.deepEqual(sample(timeline, target, progress), { x: 0, y: 0, opacity: 1, scale: 1 });
  }
  timeline.kill();
});
test('crossing animation boundaries produces no position or opacity reset', () => {
  const target = { x: 0, y: 0, opacity: 1, scale: 1 };
  const timeline = createRevealTimeline(target, 28);
  for (const boundary of [0.2, 0.8]) {
    const before = sample(timeline, target, boundary - 0.0001);
    const after = sample(timeline, target, boundary + 0.0001);
    assert.ok(Math.abs(after.y - before.y) < 0.03);
    assert.ok(Math.abs(after.opacity - before.opacity) < 0.001);
  }
  timeline.kill();
});

test('lateral panels settle into their natural reading position in both scroll directions', () => {
  const target = { x: -32, y: 0, opacity: 1, scale: 1 };
  const timeline = createRevealTimeline(target, 48, -32);
  for (const progress of [0.2, 0.5, 0.8, 1, 0.8, 0.5, 0.2]) {
    timeline.progress(progress);
    if (progress <= 0.8) {
      assert.equal(target.x, 0);
      assert.equal(target.y, 0);
      assert.equal(target.opacity, 1);
      assert.equal(target.scale, 1);
    }
  }
  timeline.kill();
});
