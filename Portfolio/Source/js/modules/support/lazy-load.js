export function lazy() {
  let images = document.querySelectorAll("img[data-src],iframe[data-src]");
  let elements = [];
  images.forEach((e) => {
    elements.push(e);
    let src = e.dataset.src;

    function load(el, s) {
      if (isPartiallyVisible(el) && elements.indexOf(el) !== -1) {
        console.log("load");
        el.src = s;
        el.addEventListener("load", () => {
          el.classList.add("load");
        });
        el.classList.add("img__insert");
        if (el.closest("picture")) {
          let source = el.closest("picture").querySelector("source");
          source.srcset = source.dataset.srcset;
        }
        elements.splice(elements.indexOf(el), 1);
      }
    }
    load(e, src);
    window.addEventListener("scroll", () => load(e, src));
  });

  //метод
  //при частичной видимости
  function isPartiallyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;

    return top + height >= 0 && height + window.innerHeight >= bottom;
  }
  //при полной видимости
  function isFullyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;

    return top >= 0 && bottom <= window.innerHeight;
  }
}
