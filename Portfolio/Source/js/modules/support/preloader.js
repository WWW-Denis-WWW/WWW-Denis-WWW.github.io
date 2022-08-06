"use strict";
export function preloader() {
  let preloader = document.querySelector("#preloader"),
    word = document.querySelector("#preloader .word"),
    word_lenght = word.textContent.length,
    word_fill = word.textContent;
  let timerId = setInterval(() => {
    if (word_lenght + 3 <= word.textContent.length) {
      word.innerText = word_fill;
    } else {
      word.innerText += ".";
    }
  }, 1000);

  if (preloader.style.display != "none") {
    document.querySelector("body").style.overflow = "hidden";
  }

  window.addEventListener("load", () => {
    preloader.style.display = "none";
    preloader.remove();
    document.querySelector("body").style.overflow = null;
  });
}
