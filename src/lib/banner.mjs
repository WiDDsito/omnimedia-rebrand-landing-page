export function nextCampaign(index, direction, count) {
  return count > 0 ? (((index + direction) % count) + count) % count : 0;
}

/** One timer, independently suspended by interaction, visibility and user preferences. */
export function createCampaignPlayback(
  advance,
  {
    schedule = (callback, delay) => setTimeout(callback, delay),
    cancel = (timer) => clearTimeout(timer),
    delay = 5000,
  } = {},
) {
  const reasons = new Set();
  let timer;
  let destroyed = false;
  function reset() {
    cancel(timer);
    timer = undefined;
    if (!destroyed && !reasons.size) {
      timer = schedule(() => {
        advance();
        reset();
      }, delay);
    }
  }
  return {
    reset,
    setPaused(reason, paused) {
      if (paused) reasons.add(reason);
      else reasons.delete(reason);
      reset();
    },
    destroy() {
      destroyed = true;
      cancel(timer);
    },
  };
}
