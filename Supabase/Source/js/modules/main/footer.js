export function footer() {
  const change = document.querySelector(".change");

  const logo = Array.from(document.querySelectorAll(".logo"));
  const body = document.querySelector("body");
  const logoLight = "logo-light2.png";
  const logoLightWp = "logo-light2.webp";

  const logoDark = "logo.png";
  const logoDarkWp = "logo.webp";

  change.addEventListener("click", () => {
    change.classList.toggle("light");
    body.classList.toggle("light");
    if (body.classList.contains("light")) {
      logo.map((i) => {
        i.src = `img/${logoLight}`;
        i
          .closest("picture")
          .querySelector("source").srcset = `img/${logoLightWp}`;
      });
    } else {
      logo.map((i) => {
        i.src = `img/${logoDark}`;
        i
          .closest("picture")
          .querySelector("source").srcset = `img/${logoDarkWp}`;
      });
    }
  });
}
