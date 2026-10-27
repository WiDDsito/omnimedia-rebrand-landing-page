const button = document.querySelector<HTMLButtonElement>('.menu-toggle');
const navigation = document.querySelector<HTMLElement>('#main-navigation');
const header = document.querySelector<HTMLElement>('.site-header');
const dropdowns = [...document.querySelectorAll<HTMLDetailsElement>('.nav-dropdown')];
const mobile = matchMedia('(max-width: 1100px)');
function closeNavigation(returnFocus = false) {
  navigation?.classList.remove('is-open');
  button?.setAttribute('aria-expanded', 'false');
  button?.setAttribute('aria-label', 'Abrir menú de navegación');
  document.documentElement.classList.remove('mobile-navigation-open');
  dropdowns.forEach((item) => (item.open = false));
  if (returnFocus) button?.focus();
}
button?.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') !== 'true';
  if (!open) return closeNavigation();
  navigation?.classList.add('is-open');
  button.setAttribute('aria-expanded', 'true');
  button.setAttribute('aria-label', 'Cerrar menú de navegación');
  document.documentElement.classList.toggle('mobile-navigation-open', mobile.matches);
});
dropdowns.forEach((item) => {
  item.addEventListener('toggle', () => {
    const summary = item.querySelector('summary');
    summary?.setAttribute('aria-expanded', String(item.open));
    if (item.open)
      dropdowns.forEach((other) => {
        if (other !== item) other.open = false;
      });
  });
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
  const open = dropdowns.find((item) => item.open);
  if (open) {
    open.open = false;
    open.querySelector('summary')?.focus();
  } else if (button?.getAttribute('aria-expanded') === 'true') closeNavigation(true);
});
header?.addEventListener('focusout', (event) => {
  if (event.relatedTarget instanceof Node && !header.contains(event.relatedTarget))
    closeNavigation();
});
mobile.addEventListener('change', () => closeNavigation());

export {};
