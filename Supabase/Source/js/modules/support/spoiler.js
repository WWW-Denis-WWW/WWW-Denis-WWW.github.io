export function spoiler() {
  let spoiler_titles = document.querySelectorAll(".spoiler__title");
  let spoiler_body = document.querySelectorAll(".spoiler__text");

  spoiler_titles.forEach((item, i) => {
    item.addEventListener("click", () => {
      if (spoiler_body[i].style.maxHeight) {
        spoiler_body[i].style.maxHeight = null;
      } else {
        spoiler_body[i].style.maxHeight = spoiler_body[i].scrollHeight + "px";
      }
    });
  });
}
