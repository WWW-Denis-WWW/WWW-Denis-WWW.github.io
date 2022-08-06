export function swiper_init() {
  const swiper = new Swiper(".slider", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    //   scrollbar: {
    //     el: ".swiper-scrollbar",
    //   },
    spaceBetween: -1,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      sensetivity: 1,
    },
    // autoHeight: true,
    slidesPerView: 1,
    watchOverflow: true,
    autoplay: {
      delay: 4000,
      //остановки при прикостновени
      disableOnInteraction: true,
      //остановка на последнем, работает если loop = false
      stopOnLastSlide: true,
    },
  });
}
