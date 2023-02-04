window.addEventListener("DOMContentLoaded", () => {
  // canvas
  const ctx = document.getElementById("myChart").getContext("2d");

  // функция обновление данных
  function chartUpdate(newData = null, newLabels = null, newProcents = null) {
    data = newData;
    labels = newLabels;
    procents = newProcents;
    // Знаосим данные в график
    chart.data.datasets[0].data = data;
    chart.data.labels = newLabels;
    // Обновляем график
    chart.update();
  }
  // !!! ВСЕ ТРИ ПЕРЕМЕННЫЕ ПОЛУЧАЕМ С БЕКА В НУЖНОЙ ПОСЛЕДОВАТЕЛЬНОСТИ !!!
  // Проценты при наведении
  let procents = [10, 20, 30, 55, 44, 66];
  // левая строка/ подпись
  let data = [200, 400, 600, 800, 1000, 1200];
  // нижняя строка/ подпись
  let labels = [
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
    "Январь",
    "Февраль",
  ];

  // глобальные настройки chart js
  Chart.defaults.font.size = 13;
  Chart.defaults.font.family = "Roboto";
  Chart.defaults.color = "rgb(161, 161, 178)";
  Chart.defaults.borderColor = "#D9D9D9";

  // градиент
  var background_1 = ctx.createLinearGradient(0, 0, 0, 250);
  background_1.addColorStop(0, "#C9A7FB");
  background_1.addColorStop(1, "#5367F2");

  // стили графика
  let chartStyles = {
    barWidth: 14,
    barRadius: 10,
    padding: {
      top: 11,
      bottom: 11,
      left: 23,
      right: 23,
    },
    tooltip: {
      bg: "#333346",
      title: {
        fontSize: 11,
        fontW: 500,
        family: "Roboto",
        lineHeight: 1.2,
        marginBottom: 2,
      },
      body: {
        family: "Roboto",
        fontSize: 11,
        fontW: 700,
        lineHeight: 1.2,
        bg: "#EAE4AC",
      },
    },
    axes: {
      x: {
        padding: 18,
      },
      y: {
        padding: 8,
      },
    },
  };

  // Подстановка процентов
  function bodyRender() {
    return function (context) {
      context.formattedValue = "+" + procents[context.dataIndex] + "%";
    };
  }

  // сам график
  let chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "",
          data,
          barThickness: chartStyles.barWidth,
          borderRadius: chartStyles.barRadius,
          borderSkipped: false,
          backgroundColor: background_1,
        },
      ],
    },
    options: {
      // responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          titleFont: {
            size: chartStyles.tooltip.title.fontSize,
            weight: chartStyles.tooltip.title.fontW,
            family: chartStyles.tooltip.title.family,
            lineHeight: chartStyles.tooltip.title.lineHeight,
          },

          bodyFont: {
            family: chartStyles.tooltip.body.family,
            size: chartStyles.tooltip.body.fontSize,
            weight: chartStyles.tooltip.body.fontW,
            lineHeight: chartStyles.tooltip.body.lineHeight,
          },
          padding: chartStyles.padding,
          caretSize: 10,
          yAlign: "bottom",
          titleAlign: "center",
          titleMarginBottom: 2,

          bodyColor: chartStyles.tooltip.body.bg,
          bodyAlign: "center",

          backgroundColor: "#333346",
          displayColors: false,
          callbacks: {
            label: bodyRender(),
          },
        },
      },

      scales: {
        x: {
          grid: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            padding: chartStyles.axes.x.padding,
          },
        },
        y: {
          beginAtZero: true,
          grid: {
            drawTicks: false,
            drawBorder: false,
          },
          border: {
            display: false,
          },
          ticks: {
            padding: chartStyles.axes.y.padding,
          },
        },
      },
    },
  });
  // адаптисноть графика
  window.addEventListener("resize", () => {
    adaptiveChart();
  });
  function adaptiveChart() {
    let w = document.documentElement.clientWidth;
    if (document.documentElement.clientWidth < 495) {
      Chart.defaults.font.size = 11;
      chart.update();
    } else {
      Chart.defaults.font.size = 13;
      chart.update();
    }
  }
  adaptiveChart();
  // связываем скролл с графиком
  // кастомный кролл
  let customScroll = document.querySelector(
    ".chart-scrollbar .simplebar-content-wrapper"
  );
  let chartBox = document.querySelector(
    ".chart-block__box .simplebar-content-wrapper"
  );

  // слушаем прокрутки
  customScroll.addEventListener("scroll", (e) => {
    chartBox.scrollLeft = e.target.scrollLeft;
  });
  chartBox.addEventListener("scroll", (e) => {
    customScroll.scrollLeft = e.target.scrollLeft;
  });

  // делаю кастомый thumb

  let thumbBlock = document.createElement("div");
  thumbBlock.classList.add("chart-custom-thumb");

  let thumbBox = document.querySelector(
    ".chart-scrollbar .simplebar-track.simplebar-horizontal .simplebar-scrollbar"
  );
  thumbBox.appendChild(thumbBlock);
});

// // горизонатльный скролл мышкой для simplebar
// (function () {
//   function scrollHorizontally(e) {
//     e = window.event || e;
//     var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
//     document.getElementById("scrollGraph").scrollLeft -= delta * 40; // Multiplied by 10
//     e.preventDefault();
//   }
//   if (document.getElementById("scrollGraph").addEventListener) {
//     // IE9, Chrome, Safari, Opera
//     document
//       .getElementById("scrollGraph")
//       .addEventListener("mousewheel", scrollHorizontally, false);
//     // Firefox
//     document
//       .getElementById("scrollGraph")
//       .addEventListener("DOMMouseScroll", scrollHorizontally, false);
//   } else {
//     // IE 6/7/8
//     document
//       .getElementById("scrollGraph")
//       .attachEvent("onmousewheel", scrollHorizontally);
//   }
// })();
