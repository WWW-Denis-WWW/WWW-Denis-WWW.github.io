export function scroll() {
  // Add html element class = "a" and "part" or "full"
  let anim = Array.from(document.querySelectorAll(".a"));
  let l = anim.length;
  window.addEventListener("load", () => {
    //start verification
    anim.map((i) => check(i));
    //trigger scrolling
    window.addEventListener("scroll", () => {
      if (l > 0) {
        anim.forEach((item) => {
          check(item);
        });
      }
    });
    //check class, callback
    function check(i) {
      if (i.classList.contains("part")) {
        animpart(i);
      } else if (i.classList.contains("full")) {
        animfull(i);
      }
    }
    // work if partialy, add visible
    function animpart(i) {
      if (isPartiallyVisible(i)) {
        i.classList.add("v");
        i.classList.remove("part");
        i.classList.remove("a");

        l--;
        if (i.classList.contains("skills__items")) {
          animeElements();
        }
      }
    }
    // work if full, add visible
    function animfull(i) {
      if (isFullyVisible(i)) {
        i.classList.add("v");
        i.classList.remove("full");
        i.classList.remove("a");

        l--;
      }
    }

    // methods for positon on window
    //Part
    function isPartiallyVisible(el) {
      let elementBoundary = el.getBoundingClientRect();

      let top = elementBoundary.top;
      let bottom = elementBoundary.bottom;
      let height = elementBoundary.height;

      return top + height >= 0 && height + window.innerHeight >= bottom;
    }
    //Full
    function isFullyVisible(el) {
      let elementBoundary = el.getBoundingClientRect();

      let top = elementBoundary.top;
      let bottom = elementBoundary.bottom;

      return top >= 0 && bottom <= window.innerHeight;
    }
  });
}
