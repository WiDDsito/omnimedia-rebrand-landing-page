import { gsap } from 'gsap';

/**
 * One persistent timeline: enter, hold steady for reading, then leave.
 * Scroll position selects a state in either direction; nothing is restarted.
 * @param {object} target
 * @param {number} offset
 */
export function createRevealTimeline(target, offset) {
  return gsap
    .timeline({ paused: true, defaults: { ease: 'none' } })
    .fromTo(target, { y: offset, opacity: 0.45 }, { y: 0, opacity: 1, duration: 0.2 })
    .to(target, { y: 0, opacity: 1, duration: 0.6 })
    .to(target, { y: -offset * 0.65, opacity: 0.45, duration: 0.2 });
}
