/** @param {number} scrollTop @param {number} viewportHeight @param {number} documentHeight */
export function getScrollState(scrollTop, viewportHeight, documentHeight) {
  const distance = Math.max(0, documentHeight - viewportHeight);
  return {
    visible: distance > 0 && scrollTop > 320,
    progress: distance > 0 ? Math.min(100, Math.max(0, (scrollTop / distance) * 100)) : 0,
  };
}
