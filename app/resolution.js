const resolution = () => {
  const app = document.querySelector(".app");

  function setResolution() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width / 16 > height / 9) {
      app.style.width = `${(height / 9) * 16}px`;
      app.style.height = `${height}px`;
    } else {
      app.style.width = `${width}px`;
      app.style.height = `${(width / 16) * 9}px`;
    }
  }
  setResolution();
  window.addEventListener("resize", setResolution);
};
export default resolution;
