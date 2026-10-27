import { gsap } from 'gsap';

/**
 * One reversible timeline with a steady reading interval (20–80%).
 * Transforms never change document layout or reset at a scroll threshold.
 * @param {object} target
 * @param {number} offset
 * @param {number} [horizontal=0]
 */
export function createRevealTimeline(target, offset, horizontal = 0) {
  return gsap
    .timeline({ paused: true, defaults: { ease: 'none' } })
    .fromTo(
      target,
      { x: horizontal, y: offset, opacity: 0.15 },
      { x: 0, y: 0, opacity: 1, duration: 0.2, ease: 'power2.out' },
    )
    .to(target, { x: 0, y: 0, opacity: 1, duration: 0.6 })
    .to(target, {
      x: -horizontal * 0.25,
      y: -offset * 0.4,
      opacity: 0.65,
      duration: 0.2,
      ease: 'power1.in',
    });
}
