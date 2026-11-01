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
        .from('.banner-heading > *, .solution-hero-copy > *', {
          y: 16,
          opacity: 0.2,
          duration: 0.7,
          stagger: 0.08,
          clearProps: 'transform,opacity',
        })
        .from(
          '.campaign-stage, .solution-hero-visual',
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
        '.solutions-grid, .equipment-grid, .process-bento, .faq-list, .solution-large-links, .solution-principles',
      );
      const order = grouped && parent ? [...parent.children].indexOf(element) : 0;
      // Each family has its own direction; text is still at rest throughout the reading area.
      let horizontal = 0;
      let offset = mobile ? 24 : grouped ? 48 : 32;
      let scale = 1;
      if (element.matches('.solution-reveal')) {
        horizontal = (order % 2 === 0 ? -1 : 1) * (mobile ? 14 : 34);
        offset = 0;
      } else if (element.matches('.equipment-card, .section-heading, .carousel-heading')) {
        offset = 0;
      } else if (element.matches('.process-bento li')) {
        horizontal = (order % 2 === 0 ? -1 : 1) * (mobile ? 12 : 28);
        offset = order % 2 === 0 ? -10 : 10;
        scale = 0.98;
      } else if (element.matches('.faq-list > details')) {
        horizontal = (order % 2 === 0 ? -1 : 1) * (mobile ? 10 : 20);
        offset = 0;
      } else if (
        element.matches(
          '.services-intro, .quote-intro, .about-grid > div, .faq-section > div:first-child',
        )
      ) {
        horizontal =
          (element.matches('.about-grid > div:last-child') ? 1 : -1) * (mobile ? 12 : 28);
        offset = 0;
      }
      const timeline = createRevealTimeline(element, offset, horizontal);
      if (scale !== 1)
        timeline.fromTo(element, { scale }, { scale: 1, duration: 0.2, ease: 'power2.out' }, 0);
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
    document.querySelectorAll<HTMLElement>('.equipment-image').forEach((image, index) => {
      const masks = [
        ['inset(0% 48% 0% 48% round 24px)', 'inset(0% 0% 0% 0% round 10px)'],
        ['circle(28% at 50% 50%)', 'circle(100% at 50% 50%)'],
        ['inset(0% 0% 0% 80% round 20px)', 'inset(0% 0% 0% 0% round 10px)'],
        ['inset(0% 80% 0% 0% round 20px)', 'inset(0% 0% 0% 0% round 10px)'],
      ];
      const [closed, open] = masks[index % masks.length];
      gsap.fromTo(
        image,
        { clipPath: closed },
        {
          clipPath: open,
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

    // Animate the artwork wrapper, preserving the image's independent hover effect.
    document.querySelectorAll<HTMLElement>('.equipment-artwork').forEach((artwork) => {
      gsap.fromTo(
        artwork,
        { yPercent: 2, scale: 1.06 },
        {
          yPercent: -2,
          scale: 1.06,
          ease: 'none',
          scrollTrigger: {
            trigger: artwork.closest('.equipment-image'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    // A discreet underline follows each stage while the introduction remains in view.
    document.querySelectorAll<HTMLElement>('.process-bento li').forEach((step) => {
      gsap.fromTo(
        step,
        { '--step-progress': 0 },
        {
          '--step-progress': 1,
          ease: 'none',
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            end: 'top 42%',
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    // Give section headings a slight cadence without moving text in the reading area.
    document.querySelectorAll<HTMLElement>('.section-heading > div').forEach((heading) => {
      gsap.fromTo(
        heading,
        { x: (heading.closest('#equipos') ? 1 : -1) * (mobile ? 12 : 28), y: 0 },
        {
          x: 0,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heading.closest('.section-heading'),
            start: 'top bottom',
            end: 'top 72%',
            scrub: 0.65,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    // Near the end of the document, clamp the reveal to the available scroll
    // distance and hold it visible: the footer must not remain faded at the bottom.
    document
      .querySelectorAll<HTMLElement>('.footer-grid > div, .footer-bottom')
      .forEach((element, index) => {
        gsap.fromTo(
          element,
          { x: (index % 2 === 0 ? -1 : 1) * (mobile ? 12 : 24), opacity: 0.2 },
          {
            x: 0,
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
