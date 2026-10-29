import { matchesPhoneSearch } from '../lib/phone-filter.mjs';
const catalog = document.querySelector<HTMLElement>('[data-phone-catalog]');
if (catalog) {
  const form = catalog.querySelector<HTMLFormElement>('[data-phone-filters]');
  const search = catalog.querySelector<HTMLInputElement>('input[type="search"]');
  const brand = catalog.querySelector<HTMLSelectElement>('select');
  const cards = [...catalog.querySelectorAll<HTMLElement>('[data-phone-card]')];
  const count = catalog.querySelector<HTMLElement>('[data-phone-count]');
  const empty = catalog.querySelector<HTMLElement>('[data-phone-empty]');
  const update = () => {
    let visible = 0;
    for (const card of cards) {
      const match =
        (!brand?.value || brand.value === card.dataset.brand) &&
        matchesPhoneSearch(card.dataset.search ?? '', search?.value ?? '');
      card.hidden = !match;
      if (match) visible++;
    }
    if (count)
      count.textContent = `${visible} ${visible === 1 ? 'equipo encontrado' : 'equipos encontrados'}`;
    if (empty) empty.hidden = visible > 0;
  };
  if (form) form.hidden = false;
  form?.addEventListener('submit', (event) => event.preventDefault());
  form?.addEventListener('input', update);
  form?.addEventListener('reset', () => requestAnimationFrame(update));
}
