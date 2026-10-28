import { createMenuTransition } from '../lib/menu-transition';
const button = document.querySelector<HTMLButtonElement>('.menu-toggle');
const navigation = document.querySelector<HTMLElement>('#main-navigation');
const header = document.querySelector<HTMLElement>('.site-header');
const mobile = matchMedia('(max-width: 1100px)');
header?.setAttribute('data-soft-menu', '');
const dropdowns = [...document.querySelectorAll<HTMLDetailsElement>('.nav-dropdown')].flatMap(
  (item) => {
    const panel = item.querySelector<HTMLElement>('.mega-panel');
    const summary = item.querySelector('summary');
    if (!panel || !summary) return [];
    const motion = createMenuTransition(panel, {
      mount: () => {
        item.open = true;
      },
      unmount: () => {
        item.open = false;
      },
      update: (visible) => summary.setAttribute('aria-expanded', String(visible)),
      expand: () => mobile.matches,
    });
    return [{ item, summary, motion }];
  },
);
const mobileMotion =
  navigation && button
    ? createMenuTransition(navigation, {
        mount: () => navigation.classList.add('is-open'),
        unmount: () => {
          navigation.classList.remove('is-open');
          document.documentElement.classList.remove('mobile-navigation-open');
        },
        update: (visible) => {
          button.setAttribute('aria-expanded', String(visible));
          button.setAttribute(
            'aria-label',
            visible ? 'Cerrar menú de navegación' : 'Abrir menú de navegación',
          );
          if (visible) document.documentElement.classList.add('mobile-navigation-open');
        },
        expand: () => false,
      })
    : null;
// The same nav is always present on desktop; only its mobile panel needs inert.
if (navigation && !mobile.matches) navigation.inert = false;
function closeNavigation(returnFocus = false, immediate = false) {
  dropdowns.forEach(({ motion }) => motion.show(false, immediate));
  if (mobile.matches) mobileMotion?.show(false, immediate);
  if (returnFocus) button?.focus();
}
dropdowns.forEach(({ summary, motion }) => {
  summary.addEventListener('click', (event) => {
    event.preventDefault();
    const open = !motion.visible;
    if (open)
      dropdowns.forEach((other) => {
        if (other.motion !== motion) other.motion.show(false);
      });
    motion.show(open);
  });
});
button?.addEventListener('click', () => {
  if (mobileMotion?.visible) closeNavigation();
  else mobileMotion?.show(true);
});
document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (
    !target.closest('.site-header') ||
    target.closest('#main-navigation a, .header-cta, .brand-logo')
  )
    closeNavigation();
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const nested = [...document.querySelectorAll<HTMLDetailsElement>('.navigation-branch[open]')]
    .reverse()
    .find((item) => item.contains(document.activeElement));
  if (nested) {
    nested.open = false;
    nested.querySelector('summary')?.focus();
    return;
  }
  const open = dropdowns.find(({ motion }) => motion.visible);
  if (open) {
    open.motion.show(false);
    open.summary.focus();
  } else if (mobileMotion?.visible) closeNavigation(true);
});
header?.addEventListener('focusout', (event) => {
  if (event.relatedTarget instanceof Node && !header.contains(event.relatedTarget))
    closeNavigation();
});
mobile.addEventListener('change', () => {
  dropdowns.forEach(({ motion }) => motion.show(false, true));
  mobileMotion?.show(false, true);
  if (navigation && !mobile.matches) navigation.inert = false;
});
if (import.meta.hot)
  import.meta.hot.dispose(() => {
    dropdowns.forEach(({ motion }) => motion.dispose());
    mobileMotion?.dispose();
    header?.removeAttribute('data-soft-menu');
  });
