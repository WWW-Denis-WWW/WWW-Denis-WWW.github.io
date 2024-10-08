export function add_animation() {
  // чистичное появление
  function isPartiallyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;

    return top + height >= 0 && height + window.innerHeight >= bottom;
  }
  // когда весь блок на экране
  function isFullyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;

    return top >= 0 && bottom <= window.innerHeight;
  }
}
