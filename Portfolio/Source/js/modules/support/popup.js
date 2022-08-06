export function Popup() {
  let popup_links = document.querySelectorAll(".popup_open");
  for (let this_link of popup_links) {
    this_link.addEventListener("click", () => {
      //иницилизация ссылки
      console.log(this_link.dataset.popup);
      let popup = document.getElementById(`${this_link.dataset.popup}`);
      let popup_close = popup.querySelector(".close-popup");
      if (popup.classList.contains("hide")) {
        popup.classList.remove("hide");
      }
      //крестик закрытия
      popup_close.addEventListener("click", () => {
        if (!popup.classList.contains("hide")) {
          popup.classList.add("hide");
        }
      });
      //закритие при клике на свободное пространство
      window.addEventListener("click", (e) => {
        let targetElem = e.target;
        if (
          targetElem.classList.contains("popup") &&
          !targetElem.classList.contains("popup__content") &&
          !popup.classList.contains("hide")
        ) {
          popup.classList.add("hide");
        }
      });
    });
  }
}
