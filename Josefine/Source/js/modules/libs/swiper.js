export function swiper_init() {
  let slides = 0;
  function resize() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return 1;
    }
    let w = window.innerWidth;
    if ((w <= 850) & (w > 630)) {
      return 2;
    } else if (w > 850) {
      return 2.4;
    } else if (w <= 630) {
    }
  }
  resize();
  let swiper = new Swiper(".slider", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 30,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      630: {
        slidesPerView: 2,
      },
      850: {
        slidesPerView: 2.4,
      },
    },
    slidesPerView: 2.4,
    watchOverflow: true,
    //количество слайдов для прокрутки
    // slidesPerGroup: 1,
    autoplay: {
      delay: 4000,
      //остановки при прикостновени
      disableOnInteraction: true,
      //остановка на последнем, работает если loop = false
      // stopOnLastSlide: true,
    },
  });
}
