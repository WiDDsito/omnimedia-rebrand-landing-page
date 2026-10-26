import { gsap } from 'gsap';

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
  gsap.from('.hero-copy > *', {
    y: mobile ? 10 : 16,
    duration: 0.7,
    stagger: 0.06,
    ease: 'power2.out',
    clearProps: 'transform',
  });
  gsap.from('.hero-visual', {
    y: 18,
    duration: 0.85,
    ease: 'power2.out',
    clearProps: 'transform',
  });

  // Start each reveal only when visible. HTML is never hidden pending JavaScript.
  // Wrapper transforms keep scroll motion independent of a card's hover lift.
  const revealObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (!visible.length) return;
      gsap.from(
        visible.map((entry) => entry.target),
        {
          y: mobile ? 12 : 22,
          opacity: 0.55,
          duration: 0.65,
          stagger: 0.045,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        },
      );
      visible.forEach((entry) => revealObserver.unobserve(entry.target));
    },
    { threshold: 0.12, rootMargin: '0px 0px -24px 0px' },
  );
  document
    .querySelectorAll(
      '[data-reveal], .section-heading, .equipment-card, .equipment-more, .services-intro, ' +
        '.about-grid > div, .faq-section > div:first-child, .faq-list details, ' +
        '.quote-intro, #quote-form, .footer-grid > div, .footer-bottom',
    )
    .forEach((element) => revealObserver.observe(element));

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
    revealObserver.disconnect();
    carouselObserver.disconnect();
    carousel?.removeAttribute('data-motion-ready');
    carousel?.classList.remove('is-offscreen');
    if (motionToggle) motionToggle.hidden = true;
  };
});

if (import.meta.hot) import.meta.hot.dispose(() => media.revert());
