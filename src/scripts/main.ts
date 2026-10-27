import './motion';
import './back-to-top';
import './navigation';
import './banner';
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
