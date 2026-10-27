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
    .from('.banner-heading > *', {
      y: 16,
      opacity: 0.2,
      duration: 0.7,
      stagger: 0.08,
      clearProps: 'transform,opacity',
    })
    .from(
      '.campaign-stage',
      { y: 20, opacity: 0.3, duration: 0.85, clearProps: 'transform,opacity' },
      0.1,
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
      start: () => {
        const siblings = element.parentElement?.matches(
          '.solutions-grid, .equipment-grid, .process-bento',
        );
        const order = siblings ? [...element.parentElement!.children].indexOf(element) : 0;
        return `top bottom-=${12 + (order % (mobile ? 2 : 4)) * (mobile ? 12 : 24)}`;
      },
      end: 'bottom top+=92',
      scrub: 0.25,
      invalidateOnRefresh: true,
    });
  });

  // Re-measure real layout changes, not every frame or mobile toolbar movement.
  let active = true;
  const refreshLayout = () => ScrollTrigger.refresh(true);
  const refreshFaq = (event: Event) => {
    if (
      event.target instanceof HTMLDetailsElement &&
      event.target.closest('.faq-list') &&
      !event.target.hasAttribute('data-animating')
    ) {
      refreshLayout();
    }
  };
  document.fonts.ready.then(() => {
    if (active) refreshLayout();
  });
  window.addEventListener('load', refreshLayout, { once: true });
  document.addEventListener('toggle', refreshFaq, true);
  document.addEventListener('disclosure-settled', refreshLayout);

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
    document.removeEventListener('disclosure-settled', refreshLayout);
    carouselObserver.disconnect();
    carousel?.removeAttribute('data-motion-ready');
    carousel?.classList.remove('is-offscreen');
    if (motionToggle) motionToggle.hidden = true;
  };
});

if (import.meta.hot) import.meta.hot.dispose(() => media.revert());
