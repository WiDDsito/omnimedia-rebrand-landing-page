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
let introPlayed = false;
media.add(
  { motion: '(prefers-reduced-motion: no-preference)', compact: '(max-width: 600px)' },
  (context) => {
    if (!context.conditions?.motion) return;
    const mobile = Boolean(context.conditions.compact);
    if (!introPlayed) {
      introPlayed = true;
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
    }

    // Scroll selects a persistent visual state in either direction. Text settles
    // before the reading area; no pinning, scaling of text, or threshold resets.
    const revealTargets = document.querySelectorAll<HTMLElement>(
      '[data-reveal], .section-heading, .equipment-card, .equipment-more, .services-intro, ' +
        '.about-grid > div, .faq-section > div:first-child, .faq-list > details, .quote-intro, ' +
        '.carousel-heading',
    );
    revealTargets.forEach((element) => {
      const parent = element.parentElement;
      const grouped = parent?.matches(
        '.solutions-grid, .equipment-grid, .process-bento, .faq-list',
      );
      const order = grouped && parent ? [...parent.children].indexOf(element) : 0;
      const lateral =
        !mobile &&
        element.matches(
          '.services-intro, .quote-intro, .about-grid > div, .faq-section > div:first-child',
        );
      const horizontal = lateral ? (element.matches('.about-grid > div:last-child') ? 24 : -24) : 0;
      const offset = mobile ? 32 : grouped ? 64 : 48;
      const timeline = createRevealTimeline(element, offset, horizontal);
      ScrollTrigger.create({
        trigger: element,
        animation: timeline,
        start: `top bottom-=${8 + (order % (mobile ? 2 : 4)) * (mobile ? 14 : 28)}`,
        end: 'bottom top+=100',
        scrub: 0.4,
        invalidateOnRefresh: true,
      });
    });

    // The image mask reveals product artwork without resizing the card or
    // competing with the existing hover transform on its image.
    document.querySelectorAll<HTMLElement>('.equipment-image').forEach((image) => {
      gsap.fromTo(
        image,
        { clipPath: 'inset(12% 0% 10% 0% round 14px)' },
        {
          clipPath: 'inset(0% 0% 0% 0% round 14px)',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'top 70%',
            scrub: 0.4,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    // Near the end of the document, clamp the reveal to the available scroll
    // distance and hold it visible: the footer must not remain faded at the bottom.
    document
      .querySelectorAll<HTMLElement>('.footer-grid > div, .footer-bottom')
      .forEach((element) => {
        gsap.fromTo(
          element,
          { y: mobile ? 24 : 36, opacity: 0.2 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: element,
              start: 'top bottom',
              end: 'clamp(top 75%)',
              scrub: 0.35,
              invalidateOnRefresh: true,
            },
          },
        );
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
        entries.forEach((entry) =>
          carousel?.classList.toggle('is-offscreen', !entry.isIntersecting),
        );
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
  },
);

if (import.meta.hot) import.meta.hot.dispose(() => media.revert());
