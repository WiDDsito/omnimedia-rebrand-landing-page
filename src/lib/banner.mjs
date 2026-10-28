export function nextCampaign(index, direction, count) {
  return count > 0 ? (((index + direction) % count) + count) % count : 0;
}
