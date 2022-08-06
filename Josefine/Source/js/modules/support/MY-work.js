export function MyWork() {
  let open_menu = document.querySelector(".open"),
    box = document.querySelector(".menu-MY-WORK");

  open_menu.addEventListener("click", () => {
    box.classList.toggle("active");
  });
  const close = document.querySelector(".close-MY-WORK");
  close.addEventListener("click", () => {
    document.querySelector(".MY-WORK").style.display = "none";
  });
}
