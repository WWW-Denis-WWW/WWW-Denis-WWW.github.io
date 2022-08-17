let dqs = (el) => {
  return document.querySelector(el);
};
// Копируй именно этот файл giffer.min.js так как я немного переписал эту библиотеку для ховера
// Если будут вопросы пиши в тг https://t.me/Web_Dev_ZXC

let hover = ".logo"; //Селектор элемента при наведении на который будет работать гиф к примеру напиши .text тоже будет работать

let hoverEl = (window.onload = function () {
  let gif = Gifffer();

  Gifffer(
    {
      playButtonStyles: {
        width: "60px",
        height: "60px",
        "border-radius": "30px",
        background: "rgba(0, 0, 0, 0.3)",
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "-30px 0 0 -30px",
        visibility: "hidden",
      },
      playButtonIconStyles: {
        visibility: "hidden",
        width: "0",
        height: "0",
        "border-top": "14px solid transparent",
        "border-bottom": "14px solid transparent",
        "border-left": "14px solid rgba(0, 0, 0, 0.5)",
        position: "absolute",
        left: "26px",
        top: "16px",
      },
    },
    dqs(hover)
  );
});
