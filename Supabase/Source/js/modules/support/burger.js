export function Burger() {
  const header = document.querySelector(".header");
  const burger = document.querySelector(".burger-header");
  const body = document.querySelector(`body`);
  const body_notheader = document.querySelectorAll(`.wrapper > *:not(.header)`);
  const menu_links = document.querySelectorAll(`.header li`);
  let fixed = 0;
  burger.addEventListener("click", function () {
    // if (fixed == 0) {
    //   window.scrollTo(0, 0);
    // }
    header.classList.toggle("on");
    //for lock scroll
    body.classList.toggle("hide");
    removeAllClass("active");

    for (let link of menu_links) {
      link.addEventListener("click", function () {
        if (
          link.classList.contains("dropdown") ||
          link.classList.contains("drop__item")
        ) {
          return;
        }
        header.classList.remove(`on`);
        //for lock scroll
        body.classList.remove(`hide`);
        removeAllClass("active");
      });
    }
  });
  for (let item of body_notheader) {
    item.addEventListener("click", function () {
      if (header.classList.contains(`on`)) {
        header.classList.remove(`on`);

        //for lock scroll
        body.classList.remove(`hide`);
        removeAllClass("active");
      }
    });
  }
  //===================

  function removeAllClass(ClassName) {
    Array.from(menu_links).map((i) => {
      let nowELClass = i.classList.contains(ClassName);
      if (nowELClass) i.classList.remove(ClassName);
    });
  }
}
