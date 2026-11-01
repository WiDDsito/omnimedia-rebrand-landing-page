import { localPhoneHref } from './phone-catalog.mjs';
import { localHotelHref } from './hotel-pages.mjs';
import { localNetworkHref } from './network-pages.mjs';
import { localHeadsetHref } from './headset-pages.mjs';
import { localTelephonyHref } from './telephony-pages.mjs';
import { pagingPages } from './paging-pages.mjs';
import { customerCarePages } from './customer-care-pages.mjs';
import { voyagerPages } from './voyager-pages.mjs';
const localBySource = Object.fromEntries(
  [...pagingPages, ...customerCarePages, ...voyagerPages].map((page) => [page.source, page.path]),
);
export const localSolutionHref = (href) =>
  localBySource[href] ??
  localHeadsetHref(localNetworkHref(localHotelHref(localPhoneHref(localTelephonyHref(href)))));
