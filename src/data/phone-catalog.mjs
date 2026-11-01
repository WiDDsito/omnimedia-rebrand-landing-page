import data from './phone-catalog.json' with { type: 'json' };
export const phoneBrands = data.brands;
export const phones = data.products;
export const phoneCatalogPath = '/productos/telefonos-ip-y-analogicos/';
const hrefs = new Map([
  ['https://www.omnimediaperu.com/telefonia/telefonos-analogicos-digitales-ip/', phoneCatalogPath],
  ...phoneBrands.filter((brand) => brand.source).map((brand) => [brand.source, brand.path]),
]);
for (const phone of phones) {
  // A source may describe multiple variants; its original path opens the first one.
  if (new URL(phone.source).pathname.startsWith('/producto/') && !hrefs.has(phone.source))
    hrefs.set(phone.source, phone.path);
}
export const localPhoneHref = (href) => hrefs.get(href) ?? href;
