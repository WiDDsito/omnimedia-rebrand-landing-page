import { nextCampaign, createCampaignPlayback } from '../lib/banner.mjs';
const panels = [...document.querySelectorAll<HTMLElement>('[data-campaign]')];
const selectors = [...document.querySelectorAll<HTMLButtonElement>('[data-campaign-select]')];
const position = document.querySelector<HTMLElement>('[data-campaign-position]');
const toolbar = document.querySelector<HTMLElement>('.campaign-toolbar');
const stage = document.querySelector<HTMLElement>('.campaign-stage');
let current = 0;
function select(index: number, direction = index >= current ? 1 : -1) {
  stage?.setAttribute('data-direction', direction < 0 ? 'backward' : 'forward');
  current = index;
  stage?.setAttribute('data-current', String(index));
  panels.forEach((panel, i) => {
    const active = i === index;
    panel.classList.toggle('is-active', active);
    panel.inert = !active;
    panel.setAttribute('aria-hidden', String(!active));
    selectors[i]?.setAttribute('aria-pressed', String(active));
  });
  if (position)
    position.textContent = `${String(index + 1).padStart(2, '0')} / ${String(panels.length).padStart(2, '0')}`;
}
if (panels.length) {
  stage?.setAttribute('data-enhanced', '');
  select(0);
  const hero = stage?.closest<HTMLElement>('.commercial-hero');
  const toggle = document.querySelector<HTMLButtonElement>('[data-campaign-playback]');
  const toggleLabel = document.querySelector('[data-campaign-playback-label]');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const playback = createCampaignPlayback(() => select(nextCampaign(current, 1, panels.length), 1));
  let paused = motion.matches;
  function updatePlayback() {
    playback.setPaused('user', paused);
    toggle?.setAttribute('aria-pressed', String(paused));
    if (toggleLabel) toggleLabel.textContent = paused ? 'Reproducir' : 'Pausar';
    stage?.setAttribute('aria-live', paused ? 'polite' : 'off');
  }
  updatePlayback();
  playback.setPaused('hidden', document.hidden);
  toggle?.addEventListener('click', () => {
    paused = !paused;
    updatePlayback();
  });
  motion.addEventListener('change', () => {
    paused = motion.matches;
    updatePlayback();
  });
  hero?.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') playback.setPaused('hover', true);
  });
  hero?.addEventListener('pointerleave', () => playback.setPaused('hover', false));
  hero?.addEventListener('focusin', () => playback.setPaused('focus', true));
  hero?.addEventListener('focusout', (event) => {
    if (!(event.relatedTarget instanceof Node) || !hero.contains(event.relatedTarget))
      playback.setPaused('focus', false);
  });
  document.addEventListener('visibilitychange', () =>
    playback.setPaused('hidden', document.hidden),
  );
  if (stage) {
    const observer = new IntersectionObserver(([entry]) =>
      playback.setPaused('offscreen', !entry.isIntersecting),
    );
    observer.observe(stage);
    // Mouse dragging is restricted to the artwork so links and text selection keep their behavior.
    let drag: { x: number; y: number } | undefined;
    stage.addEventListener('pointerdown', (event) => {
      if (
        event.pointerType !== 'mouse' ||
        event.button !== 0 ||
        !(event.target instanceof Element) ||
        !event.target.closest('.campaign-visual')
      )
        return;
      drag = { x: event.clientX, y: event.clientY };
      stage.setPointerCapture(event.pointerId);
      stage.setAttribute('data-dragging', '');
      playback.setPaused('drag', true);
    });
    function endDrag(event: PointerEvent) {
      if (!drag) return;
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      if (event.type !== 'pointercancel' && Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4)
        select(nextCampaign(current, dx < 0 ? 1 : -1, panels.length), dx < 0 ? 1 : -1);
      drag = undefined;
      stage?.removeAttribute('data-dragging');
      playback.setPaused('drag', false);
    }
    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);
    let start: { x: number; y: number } | undefined;
    stage.addEventListener(
      'touchstart',
      (event) => {
        const touch = event.touches[0];
        start = event.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : undefined;
        playback.setPaused('touch', true);
      },
      { passive: true },
    );
    stage.addEventListener(
      'touchend',
      (event) => {
        const touch = event.changedTouches[0];
        if (start && touch) {
          const dx = touch.clientX - start.x;
          const dy = touch.clientY - start.y;
          if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4)
            select(nextCampaign(current, dx < 0 ? 1 : -1, panels.length), dx < 0 ? 1 : -1);
        }
        start = undefined;
        playback.setPaused('touch', false);
      },
      { passive: true },
    );
    stage.addEventListener('touchcancel', () => {
      start = undefined;
      playback.setPaused('touch', false);
    });
    stage.addEventListener('keydown', (event) => {
      if (event.target !== stage || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      select(nextCampaign(current, direction, panels.length), direction);
      playback.reset();
    });
    window.addEventListener('pagehide', () => {
      observer.disconnect();
      playback.setPaused('pagehide', true);
    });
    window.addEventListener('pageshow', (event) => {
      if (event.persisted) {
        observer.observe(stage);
        playback.setPaused('pagehide', false);
      }
    });
  }
  if (toolbar) toolbar.hidden = false;
  selectors.forEach((button, index) =>
    button.addEventListener('click', () => {
      select(index);
      playback.reset();
    }),
  );
  document.querySelector('[data-campaign-prev]')?.addEventListener('click', () => {
    select(nextCampaign(current, -1, panels.length), -1);
    playback.reset();
  });
  document.querySelector('[data-campaign-next]')?.addEventListener('click', () => {
    select(nextCampaign(current, 1, panels.length), 1);
    playback.reset();
  });
  // Arrow keys are scoped to the selector; links in the campaign retain normal keyboard behavior.
  toolbar?.addEventListener('keydown', (event) => {
    if (!(event.target instanceof HTMLElement) || !event.target.matches('[data-campaign-select]'))
      return;
    let index: number;
    if (event.key === 'ArrowRight') index = nextCampaign(current, 1, panels.length);
    else if (event.key === 'ArrowLeft') index = nextCampaign(current, -1, panels.length);
    else if (event.key === 'Home') index = 0;
    else if (event.key === 'End') index = panels.length - 1;
    else return;
    event.preventDefault();
    select(index);
    selectors[index]?.focus();
  });
}
