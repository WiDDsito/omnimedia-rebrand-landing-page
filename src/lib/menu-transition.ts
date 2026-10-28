interface MenuTransitionOptions {
  mount: () => void;
  unmount: () => void;
  update: (visible: boolean) => void;
  expand: () => boolean;
}

/** Keep the panel mounted until its exit finishes; cancel from the current frame on reversal. */
export function createMenuTransition(panel: HTMLElement, options: MenuTransitionOptions) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let visible = false;
  let animation: Animation | null = null;
  panel.inert = true;
  const settle = () => {
    animation?.cancel();
    animation = null;
    panel.dataset.menuPhase = visible ? 'open' : 'closed';
    panel.inert = !visible;
    if (!visible) options.unmount();
  };
  const show = (next: boolean, immediate = false) => {
    if (next === visible && !immediate) return;
    const style = getComputedStyle(panel);
    const opacity = animation ? style.opacity : visible ? '1' : '0';
    const transform = animation
      ? style.transform
      : visible
        ? 'translateY(0px)'
        : 'translateY(-8px)';
    const height = panel.getBoundingClientRect().height;
    animation?.cancel();
    animation = null;
    visible = next;
    options.update(visible);
    options.mount();
    panel.inert = !visible;
    panel.dataset.menuPhase = visible ? 'opening' : 'closing';
    if (immediate || reduced.matches || typeof panel.animate !== 'function') return settle();
    const expand = options.expand();
    const naturalHeight = panel.getBoundingClientRect().height;
    const frames: Keyframe[] = expand
      ? [
          { height: `${height}px`, opacity, overflow: 'hidden' },
          {
            height: `${visible ? naturalHeight : 0}px`,
            opacity: visible ? 1 : 0,
            overflow: 'hidden',
          },
        ]
      : [
          { opacity, transform },
          { opacity: visible ? 1 : 0, transform: visible ? 'translateY(0px)' : 'translateY(-6px)' },
        ];
    const current = panel.animate(frames, {
      duration: visible ? 380 : 260,
      easing: 'cubic-bezier(.22, 1, .36, 1)',
    });
    animation = current;
    current.onfinish = () => {
      if (animation === current) settle();
    };
  };
  const preferenceChanged = () => {
    if (animation) settle();
  };
  reduced.addEventListener('change', preferenceChanged);
  return {
    show,
    get visible() {
      return visible;
    },
    dispose() {
      visible = false;
      options.update(false);
      settle();
      reduced.removeEventListener('change', preferenceChanged);
    },
  };
}
