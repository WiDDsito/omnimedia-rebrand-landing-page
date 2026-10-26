import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { createRevealTimeline } from '../lib/reveal.mjs';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const carousel = document.querySelector<HTMLElement>('.brand-carousel');
const motionToggle = carousel?.querySelector<HTMLButtonElement>('.brand-motion-toggle');

motionToggle?.addEventListener('click', () => {
  const paused = carousel?.classList.toggle('is-paused') ?? false;
  motionToggle.setAttribute('aria-pressed', String(paused));
  motionToggle.setAttribute(
    'aria-label',
    paused ? 'Reanudar movimiento de marcas' : 'Pausar movimiento de marcas',
  );
});

const media = gsap.matchMedia();
media.add('(prefers-reduced-motion: no-preference)', () => {
  const mobile = matchMedia('(max-width: 600px)').matches;
  const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  intro
    .from(
      '.hero-copy > *',
      {
        y: mobile ? 25 : 38,
        opacity: 0.12,
        duration: 0.95,
        stagger: 0.1,
        clearProps: 'transform,opacity',
      },
      0,
    )
    .from('.hero-visual', { y: mobile ? 24 : 42, duration: 1.15, clearProps: 'transform' }, 0.08)
    .from(
      '.photo-frame',
      {
        clipPath: 'inset(8% 0% 8% 0% round 24px)',
        duration: 1.25,
        clearProps: 'clipPath',
      },
      0.08,
    )
    .from('.photo-frame img', { scale: 1.12, duration: 1.4, clearProps: 'transform' }, 0.08)
    .from(
      '.connection-card',
      { y: 24, opacity: 0, duration: 0.85, clearProps: 'transform,opacity' },
      0.48,
    );

  // Persistent scrubbed timelines replace one-shot observers. There is no
  // threshold reset, scaling, pinning, or inline-style clearing during scroll.
  const revealTargets = document.querySelectorAll<HTMLElement>(
    '[data-reveal], .section-heading, .equipment-card, .equipment-more, .services-intro, ' +
      '.about-grid > div, .faq-section > div:first-child, .faq-list, ' +
      '.quote-intro, .footer-grid > div, .footer-bottom',
  );
  revealTargets.forEach((element) => {
    const timeline = createRevealTimeline(element, mobile ? 18 : 28);
    ScrollTrigger.create({
      trigger: element,
      animation: timeline,
      start: 'top bottom-=12',
      end: 'bottom top+=92',
      scrub: 0.25,
      invalidateOnRefresh: true,
    });
  });

  // Re-measure real layout changes, not every frame or mobile toolbar movement.
  let active = true;
  const refreshLayout = () => ScrollTrigger.refresh(true);
  const refreshFaq = (event: Event) => {
    if (event.target instanceof HTMLDetailsElement && event.target.closest('.faq-list')) {
      refreshLayout();
    }
  };
  document.fonts.ready.then(() => {
    if (active) refreshLayout();
  });
  window.addEventListener('load', refreshLayout, { once: true });
  document.addEventListener('toggle', refreshFaq, true);

  carousel?.setAttribute('data-motion-ready', '');
  if (motionToggle) motionToggle.hidden = false;
  // Avoid continuously animating a carousel that is outside the viewport.
  const carouselObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => carousel?.classList.toggle('is-offscreen', !entry.isIntersecting));
    },
    { threshold: 0 },
  );
  if (carousel) carouselObserver.observe(carousel);

  return () => {
    active = false;
    window.removeEventListener('load', refreshLayout);
    document.removeEventListener('toggle', refreshFaq, true);
    carouselObserver.disconnect();
    carousel?.removeAttribute('data-motion-ready');
    carousel?.classList.remove('is-offscreen');
    if (motionToggle) motionToggle.hidden = true;
  };
});

if (import.meta.hot) import.meta.hot.dispose(() => media.revert());
