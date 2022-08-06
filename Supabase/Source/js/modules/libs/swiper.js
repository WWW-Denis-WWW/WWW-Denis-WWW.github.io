export function swiper_init() {
  //костыли
  let navigation_API = [
    "Upload a file",
    "Download a file",
    "List files",
    "Move and rename files",
    "Delete files",
  ];
  let navigation_dashboard = [
    "File previews",
    "Column view",
    "List view",
    "Multi select actions",
    "Path navigator",
  ];
  let navigation_integrates = [
    "Public access to a bucket",
    "Public access to a folder",
    "Authenticated access to a bucket",
  ];
  //настройки слайдера
  let API_slider = new Swiper(".slider-API__swiper", {
    // Бесконечность
    loop: true,

    // Пагинация / прогресс
    pagination: {
      el: ".slider-API__pagination",
      clickable: true,
      //динамические точки
      // dynamicBullets: true,
      // содержимое
      renderBullet: function (index, className) {
        return `<span class="${className}">${navigation_API[index]}</span> `;
      },
      // фракции
      // type: "fraction",
      // содержимое
      // renderFraction: function (currentClass, TotalClass) {
      //   return `<span class="${currentClass}"></span> из <span class="${TotalClass}"></span> `;
      // },
      // прогресс бар
      // type: "progressbar",
    },

    // стрелки управления
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Скролл бар
    //   scrollbar: {
    //     el: ".swiper-scrollbar",
    //   },

    //свайпы
    simulateTouch: true,

    //отступы
    spaceBetween: 0,

    //курсор
    grabCursor: true,

    //клавиатура
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },

    //колесо мыши
    mousewheel: {
      sensetivity: 1,
    },

    //авто высота
    // autoHeight: true,

    //количесво слайдов для показа
    slidesPerView: 1,

    // отключение слайдера если слайдов меньше чем надо
    watchOverflow: true,

    // количесво слайдов для скролла
    slidesPerGroup: 1,

    //активный слайд по центру
    // centeredSlides: true,

    //стартовый слайд
    initialSlide: 0,

    //слайды строками
    // slidesPerColumn: 1,

    //Свободный режим
    // freeMode: true,

    //авто
    // autoplay: {
    //   delay: 4000,
    //   //остановки при прикостновени
    //   disableOnInteraction: false,
    //   //остановка на последнем, работает если loop = false
    //   stopOnLastSlide: true,
    // },

    //направление
    // derection:'vertical'

    // эффект
    effect: "fade", // fade/flip/cube/coverflow
    //Для fade
    fadeEffect: {
      crossFade: true,
    },
    // Для flip
    // flipEffect: {
    // тень
    // slideShadow: true,
    // только активый
    // limitRotation: true,
    // },
    // Для cube
    // cubeEffect: {
    //   slideShadow: true,
    //   shadow: false,
    //   shadowOffset: 20,
    //   shadowScale: 0.94,
    // },
    // coverflow
    // coverflowEffect: {
    //   rotate: 65,
    //   // stretch: 50,
    //   slidesShadows: false,
    // },

    //адаптив
    // breakpoints: {
    //   320: {
    //     slidesPerView: 1,
    //   },
    //   768: {
    //     slidesPerView: 2,
    //   },
    // },

    //lazy load
    // **data-src, class="swiper-lazy"**
    // **class="swiper-lazy-preloader"**
    //Предзагрузка изображения
    // preloadImages: false,
    //
    // lazy: {
    //подгрузка на старте
    // loadOnTransitionStart: false,
    //Подгружать след. и пред. картики
    // loadPrevNext: false,
    // },

    // Если слайдов > 1
    //Слежка
    // watchSlidesProgress: true,
    // Класс активному слайду(-ам)
    // watchSlidesVisibility: true,

    //скорость
    speed: 350,
  });
  let dashboard_slider = new Swiper(".slider-dashboard__swiper", {
    loop: true,
    pagination: {
      el: ".slider-dashboard__pagination",
      clickable: true,

      renderBullet: function (index, className) {
        return `<span class="${className}">${navigation_dashboard[index]}</span> `;
      },
    },
    simulateTouch: true,
    spaceBetween: 0,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      sensetivity: 1,
    },
    slidesPerView: 1,
    watchOverflow: true,
    slidesPerGroup: 1,
    initialSlide: 0,
    effect: "fade", // fade/flip/cube/coverflow
    fadeEffect: {
      crossFade: true,
    },
    speed: 350,
  });
  let integratesCode_slider = new Swiper(".sliders-integrates_swiper.first", {
    loop: true,
    autoHeight: true,
    pagination: {
      el: ".sliders-integrates__pagination",
      clickable: true,

      renderBullet: function (index, className) {
        return `<span class="${className}">${navigation_integrates[index]}</span> `;
      },
    },
    simulateTouch: true,
    spaceBetween: 0,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      sensetivity: 1,
    },
    slidesPerView: 1,
    watchOverflow: true,
    slidesPerGroup: 1,
    initialSlide: 0,
    effect: "flip", // fade/flip/cube/coverflow
    fadeEffect: {
      crossFade: true,
    },
    speed: 350,
  });
  let integratesText_slider = new Swiper(".sliders-integrates_swiper.second", {
    loop: true,

    simulateTouch: true,
    spaceBetween: 0,
    grabCursor: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      sensetivity: 1,
    },
    slidesPerView: 1,
    watchOverflow: true,
    slidesPerGroup: 1,
    initialSlide: 0,
    //effect: "fade", // fade/flip/cube/coverflow
    fadeEffect: {
      crossFade: true,
    },
    speed: 350,
  });
  integratesCode_slider.controller.control = integratesText_slider;
  integratesText_slider.controller.control = integratesCode_slider;
}
