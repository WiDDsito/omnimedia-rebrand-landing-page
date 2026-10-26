/** @param {Record<string, string>} data */
export function validateQuote(data) {
  /** @type {Record<string, string>} */
  const errors = {};
  if (!data.name?.trim()) errors.name = 'Escribe tu nombre.';
  if (!data.company?.trim()) errors.company = 'Escribe el nombre de tu empresa.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email?.trim() || ''))
    errors.email = 'Escribe un correo válido.';
  if (!data.solution?.trim()) errors.solution = 'Selecciona una solución o solicita orientación.';
  return errors;
}
/** @param {Record<string, string>} data */
export function createQuoteSummary(data) {
  return [
    ['Nombre', data.name],
    ['Empresa', data.company],
    ['Correo', data.email],
    ['Teléfono', data.phone],
    ['Solución', data.solution],
    ['Requerimiento', data.message],
  ]
    .filter(([, v]) => v?.trim())
    .map(([k, v]) => `${k}: ${v.trim()}`)
    .join('\n');
}
