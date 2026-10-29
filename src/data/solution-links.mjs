import { localTelephonyHref } from './telephony-pages.mjs';
import { pagingPages } from './paging-pages.mjs';
const pagingBySource = Object.fromEntries(pagingPages.map((page) => [page.source, page.path]));
export const localSolutionHref = (href) => pagingBySource[href] ?? localTelephonyHref(href);
