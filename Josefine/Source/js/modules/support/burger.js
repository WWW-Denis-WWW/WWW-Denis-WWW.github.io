export function Burger() {
  const header = document.querySelector(".header");
  const burger = document.querySelector(".burger-header");
  const body = document.querySelector(`body`);
  const body_notheader = document.querySelectorAll(`.wrapper > *:not(.header)`);
  const menu_links = document.querySelectorAll(`.header__list li`);
  let fixed = 1; /* <=== fixed */
  burger.addEventListener("click", function () {
    if (fixed == 0) {
      window.scrollTo(0, 0);
    }
    header.classList.toggle("on");
    // body.classList.toggle("hide");
    for (let link of menu_links) {
      link.addEventListener("click", function () {
        header.classList.remove(`on`);
        // body.classList.remove(`hide`);
      });
    }
  });
  for (let item of body_notheader) {
    item.addEventListener("click", function () {
      if (header.classList.contains(`on`)) {
        header.classList.remove(`on`);
        // body.classList.remove(`hide`);
      }
    });
  }
}
