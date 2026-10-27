import { nextCampaign } from '../lib/banner.mjs';
const panels = [...document.querySelectorAll<HTMLElement>('[data-campaign]')];
const selectors = [...document.querySelectorAll<HTMLButtonElement>('[data-campaign-select]')];
const position = document.querySelector<HTMLElement>('[data-campaign-position]');
const toolbar = document.querySelector<HTMLElement>('.campaign-toolbar');
let current = 0;
function select(index: number) {
  current = index;
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
  select(0);
  if (toolbar) toolbar.hidden = false;
  selectors.forEach((button, index) => button.addEventListener('click', () => select(index)));
  document
    .querySelector('[data-campaign-prev]')
    ?.addEventListener('click', () => select(nextCampaign(current, -1, panels.length)));
  document
    .querySelector('[data-campaign-next]')
    ?.addEventListener('click', () => select(nextCampaign(current, 1, panels.length)));
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
