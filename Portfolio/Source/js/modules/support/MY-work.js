export function MyWork() {
  let open_menu = document.querySelector(".open"),
    box = document.querySelector(".menu-MY-WORK");

  open_menu.addEventListener("click", () => {
    box.classList.toggle("active");
    
  });
}
