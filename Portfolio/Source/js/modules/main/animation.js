"use strict";
export function animation() {
  //anim elements skill procent and line
  let anim_procent = Array.from(
    document.querySelectorAll(".item-skill .procent")
  );
  let anim_progress = Array.from(
    document.querySelectorAll(".item-skill .anim")
  );
  let valuesEnd = {
    html: 89,
    css: 83,
    js: 85,
  };
  let valuesStart = {
    html: 0,
    css: 0,
    js: 0,
  };
  let animeElements = () => {
    anime({
      targets: valuesStart,
      html: valuesEnd.html,
      css: valuesEnd.css,
      js: valuesEnd.js,
      easing: "linear",
      round: 1,
      duration: 4000,
      update: function () {
        anim_procent[0].innerHTML = valuesStart.html;
        anim_progress[0].style.width = valuesStart.html + `%`;
        anim_procent[1].innerHTML = valuesStart.css;
        anim_progress[1].style.width = valuesStart.css + `%`;
        anim_procent[2].innerHTML = valuesStart.js;
        anim_progress[2].style.width = valuesStart.js + `%`;
      },
    });
  };

  // Scrolling animation for blocks
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
        l--;
      }
    }

    // methods for positon on window
    function isPartiallyVisible(el) {
      let elementBoundary = el.getBoundingClientRect();

      let top = elementBoundary.top;
      let bottom = elementBoundary.bottom;
      let height = elementBoundary.height;

      return top + height >= 0 && height + window.innerHeight >= bottom;
    }
    function isFullyVisible(el) {
      let elementBoundary = el.getBoundingClientRect();

      let top = elementBoundary.top;
      let bottom = elementBoundary.bottom;

      return top >= 0 && bottom <= window.innerHeight;
    }
  });
}
