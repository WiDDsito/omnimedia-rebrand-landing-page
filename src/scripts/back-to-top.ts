import { getScrollState } from '../lib/scroll.mjs';

const control = document.querySelector<HTMLAnchorElement>('.back-to-top');
if (control) {
  control.setAttribute('data-enhanced', '');
  let scheduled = false;
  const update = () => {
    const state = getScrollState(scrollY, innerHeight, document.documentElement.scrollHeight);
    control.classList.toggle('is-visible', state.visible);
    control.style.setProperty('--scroll-progress', state.progress.toFixed(2));
    scheduled = false;
  };
  const schedule = () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  update();

  // Return keyboard focus with the viewport; do not strand it in the footer.
  control.addEventListener('click', (event) => {
    event.preventDefault();
    history.replaceState(null, '', '#inicio');
    window.scrollTo({
      top: 0,
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
    document.querySelector<HTMLElement>('#hero-title')?.focus({ preventScroll: true });
  });
  if (import.meta.hot) {
    import.meta.hot.dispose(() => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    });
  }
}
