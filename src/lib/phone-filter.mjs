export const normalizePhoneSearch = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
export const matchesPhoneSearch = (text, query) => {
  const haystack = normalizePhoneSearch(text).replaceAll(' ', '');
  return normalizePhoneSearch(query)
    .split(' ')
    .every((token) => haystack.includes(token));
};
