const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const cleanup: (() => void)[] = [];

document.querySelectorAll<HTMLDetailsElement>('.faq-list details').forEach((details) => {
  const summary = details.querySelector('summary');
  if (!summary) return;
  let animation: Animation | null = null;
  let targetOpen = details.open;
  const settle = () => {
    animation?.cancel();
    animation = null;
    details.open = targetOpen;
    details.style.removeProperty('height');
    details.style.removeProperty('overflow');
    details.removeAttribute('data-animating');
    document.dispatchEvent(new Event('disclosure-settled'));
  };
  const toggle = (event: MouseEvent) => {
    if (reducedMotion.matches || typeof details.animate !== 'function') return;
    event.preventDefault();
    targetOpen = !(animation ? targetOpen : details.open);
    const start = details.getBoundingClientRect().height;
    animation?.cancel();
    details.style.removeProperty('height');
    details.setAttribute('data-animating', '');
    // Measure the natural target synchronously; keep the answer rendered during the closing motion.
    details.open = targetOpen;
    const end = details.getBoundingClientRect().height;
    details.open = true;
    details.style.height = `${start}px`;
    details.style.overflow = 'hidden';
    animation = details.animate([{ height: `${start}px` }, { height: `${end}px` }], {
      duration: 280,
      easing: 'cubic-bezier(.22, 1, .36, 1)',
    });
    animation.onfinish = settle;
  };
  const preferenceChanged = () => {
    if (animation) settle();
  };
  summary.addEventListener('click', toggle);
  reducedMotion.addEventListener('change', preferenceChanged);
  cleanup.push(() => {
    if (animation) settle();
    summary.removeEventListener('click', toggle);
    reducedMotion.removeEventListener('change', preferenceChanged);
  });
});
if (import.meta.hot) import.meta.hot.dispose(() => cleanup.forEach((dispose) => dispose()));
export {};
