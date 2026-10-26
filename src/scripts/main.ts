import { gsap } from 'gsap';
const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const navigation = document.querySelector<HTMLElement>('#main-navigation');
const dropdowns = [...document.querySelectorAll<HTMLDetailsElement>('.nav-dropdown')];
function closeNavigation(returnFocus = false) {
  navigation?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  dropdowns.forEach((d) => (d.open = false));
  if (returnFocus) menuButton?.focus();
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation?.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  if (!open) dropdowns.forEach((d) => (d.open = false));
});
dropdowns.forEach((d) =>
  d.addEventListener('toggle', () => {
    if (d.open)
      dropdowns.forEach((other) => {
        if (other !== d) other.open = false;
      });
  }),
);
document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.site-header')) closeNavigation();
  if (target.closest('#main-navigation a')) closeNavigation();
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const open = dropdowns.find((d) => d.open);
  if (open) {
    open.open = false;
    open.querySelector('summary')?.focus();
  } else if (menuButton?.getAttribute('aria-expanded') === 'true') closeNavigation(true);
});
navigation?.addEventListener('focusout', (event) => {
  if (event.relatedTarget instanceof Node && !navigation.contains(event.relatedTarget))
    dropdowns.forEach((d) => (d.open = false));
});
matchMedia('(min-width: 901px)').addEventListener('change', () => closeNavigation());
const mm = gsap.matchMedia();
mm.add('(prefers-reduced-motion: no-preference)', () => {
  gsap.from('.hero-copy > *', {
    y: 14,
    duration: 0.65,
    stagger: 0.07,
    ease: 'power2.out',
    clearProps: 'transform',
  });
  gsap.from('.hero-visual', { y: 18, duration: 0.9, ease: 'power2.out', clearProps: 'transform' });
});

import { validateQuote, createQuoteSummary } from '../lib/quote.mjs';
const form = document.querySelector<HTMLFormElement>('#quote-form');
const dialog = document.querySelector<HTMLDialogElement>('#quote-dialog');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
  const errors = validateQuote(data);
  for (const name of ['name', 'company', 'email', 'solution']) {
    const field = form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement;
    const message = document.getElementById(name + '-error');
    field.setAttribute('aria-invalid', String(Boolean(errors[name])));
    if (message) message.textContent = errors[name] || '';
  }
  const status = document.querySelector<HTMLElement>('#form-status');
  if (Object.keys(errors).length) {
    if (status) status.textContent = 'Revisa los campos indicados para continuar.';
    (form.elements.namedItem(Object.keys(errors)[0]) as HTMLElement)?.focus();
    return;
  }
  if (status) status.textContent = 'Resumen preparado. No se han enviado datos.';
  const summary = document.querySelector<HTMLElement>('#quote-summary');
  if (summary) summary.textContent = createQuoteSummary(data);
  dialog?.showModal();
});
dialog
  ?.querySelectorAll('button')
  .forEach((button) => button.addEventListener('click', () => dialog.close()));
dialog?.addEventListener('close', () =>
  form?.querySelector<HTMLButtonElement>('button[type="submit"]')?.focus(),
);
// Content remains readable if animation fails, is disabled, or JS is unavailable.
mm.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', () => {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.from(entry.target, {
            y: 16,
            duration: 0.6,
            ease: 'power2.out',
            clearProps: 'transform',
          });
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.15 },
  );
  document
    .querySelectorAll('.section-heading, .services-intro, .about-grid')
    .forEach((e) => observer.observe(e));
  return () => observer.disconnect();
});
