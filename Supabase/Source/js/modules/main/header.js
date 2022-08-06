"use strict";
export function header() {
  //1 level
  let activators = Array.from(
      document.querySelectorAll(".list-navigation__content")
    ),
    links = Array.from(document.querySelectorAll(".list-navigation__link"));

  activators.map((item) => {
    item.addEventListener("click", () => {
      allRemove(item.closest(".list-navigation__link"));
      item.closest(".list-navigation__link").classList.toggle("active");
    });
  });

  function allRemove(nowitem) {
    links.map((i) => {
      if (i.classList.contains("active") && i !== nowitem) {
        i.classList.remove("active");
      }
    });
  }
  //2 level
  let activators2 = Array.from(document.querySelectorAll(".subMenu__content")),
    links2 = Array.from(document.querySelectorAll(".subMenu__link"));

  activators2.map((item) => {
    item.addEventListener("click", () => {
      allRemove2(item.closest(".subMenu__link"));
      item.closest(".subMenu__link").classList.toggle("active");
    });
  });

  function allRemove2(nowitem) {
    links2.map((i) => {
      if (i.classList.contains("active") && i !== nowitem) {
        i.classList.remove("active");
      }
    });
  }
}
