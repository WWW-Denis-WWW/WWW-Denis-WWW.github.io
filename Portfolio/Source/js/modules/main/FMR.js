export function FMR() {
  window.addEventListener("scroll", function () {
    let svg3 = document.querySelector(".FMR__box:nth-child(3)"),
      paths3 = document.querySelectorAll(".FMR__box:nth-child(3) g path");
    animsvg(svg3, paths3, 330);

    let svg1 = document.querySelector(".FMR__box:nth-child(1)"),
      paths1 = document.querySelectorAll(".FMR__box:nth-child(1) g path");
    animsvg(svg3, paths1, 860);

    let svg2 = document.querySelector(".FMR__box:nth-child(2)"),
      paths2 = document.querySelectorAll(".FMR__box:nth-child(2) g path");
    animsvg(svg3, paths2, 285);
  });

  let animsvg = (target, item, SDF) => {
    let rectclient = target.getBoundingClientRect(),
      heightTarget = target.offsetHeight,
      clientHeight = document.documentElement.clientHeight,
      procent = Math.ceil(
        ((rectclient.top + heightTarget / 2) * 100) / (clientHeight / 2)
      );
    if (procent >= 200) {
      procent = 0;
    } else if (procent > 100) {
      procent = 100 - (procent - 100);
    } else if (procent < 0) {
      procent = 0;
    }

    if (Array.isArray(item)) {
      for (let items of item) {
        items.style.strokeDashoffset = SDF - SDF * (procent / 100);
      }
    } else if (item instanceof Element) {
      item.style.strokeDashoffset = SDF - SDF * (procent / 100);
    } else {
      for (let items of item) {
        items.style.strokeDashoffset = SDF - SDF * (procent / 100);
      }
    }
  };
}
