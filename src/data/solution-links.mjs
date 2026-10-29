import { localTelephonyHref } from './telephony-pages.mjs';
import { pagingPages } from './paging-pages.mjs';
import { customerCarePages } from './customer-care-pages.mjs';
const localBySource = Object.fromEntries(
  [...pagingPages, ...customerCarePages].map((page) => [page.source, page.path]),
);
export const localSolutionHref = (href) => localBySource[href] ?? localTelephonyHref(href);
