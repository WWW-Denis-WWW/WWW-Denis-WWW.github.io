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

const one_floor = [
  {
    k: 111,
    l: 10.2,
    type: "b",
  },
  {
    k: 112,
    l: 17.5,
    type: "b",
  },
  {
    k: 113,
    l: 34.5,
    type: "b",
  },
  {
    k: 114,
    l: 40.5,
    type: "t",
  },
  {
    k: 115,
    l: 45,
    type: "b",
  },
  {
    k: 116,
    l: 57,
    type: "t",
  },
  {
    k: 117,
    l: 57,
    type: "b",
  },
  {
    k: 118,
    l: 69,
    type: "t",
  },
  {
    k: 119,
    l: 65.5,
    type: "b",
  },
  {
    k: 120,
    l: 76,
    type: "t",
  },
  {
    k: 121,
    l: 70,
    type: "b",
  },
  {
    k: 122,
    l: 80,
    type: "t",
  },
  {
    k: 123,
    l: 77,
    type: "b",
  },
  {
    k: 125,
    l: 88,
    type: "b",
  },
  {
    k: 127,
    l: 94,
    type: "b",
  },
];

const points = {
  height: "2.5%",
  width: "0.6%",
};
function drawMainLine(from, to, floor = one_floor) {
  let fromPoint, toPoint;
  floor.forEach((data) => {
    if (from > to) {
      if (data.k === from) {
        toPoint = data;
      }
      if (data.k === to) {
        fromPoint = data;
      }
    } else {
      if (data.k === from) {
        fromPoint = data;
      }
      if (data.k === to) {
        toPoint = data;
      }
    }
  });
  let mainLine = document.querySelector(".road__main .road");

  mainLine.style.width = `${Math.abs(fromPoint.l - toPoint.l)}%`;
  mainLine.style.top = "73.7%";
  mainLine.style.left = fromPoint.l + "%";

  drawStart(fromPoint, 73.7);
  drawEnd(toPoint, 73.7);
}

function drawStart(start, top) {
  const startEl = document.querySelector(".road-start");
  startEl.style.left = start.l + "%";
  startEl.style.top = top + "%";
  if (start.type == "t")
    startEl.style.transform = "translateY(-100%) scale(-1,1)";

  startEl.style.width = points.width;
  startEl.style.height = points.height;
}
function drawEnd(end, top) {
  const endEl = document.querySelector(".road-end");
  endEl.style.left = end.l + "%";
  endEl.style.top = top + "%";
  endEl.style.height = points.height;
  endEl.style.width = points.width;

  if (end.type == "t") {
    endEl.style.transform = "translate(-100%, -100%) scale(-1, 1)";
  } else {
    endEl.style.transform = "translate(-100%, 0)";
  }
}
function resetSize() {
  const endEl = document.querySelector(".road-end");
  endEl.style.height = "0%";
  const startEl = document.querySelector(".road-start");
  startEl.style.height = "0%";
  let mainLine = document.querySelector(".road__main .road");
  mainLine.style.width = `0%`;
}
//
let createBtn = document.querySelector("#create-road");
let startK;
let endK;

createBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    startK == document.querySelector("#select-start").value &&
    endK == document.querySelector("#select-end").value
  ) {
    return;
  } else {
    resetSize();
    startK = document.querySelector("#select-start").value;
    endK = document.querySelector("#select-end").value;
    if (startK == endK) {
      alert("А так нельзя");
    } else {
      setTimeout(() => {
        drawMainLine(+startK, +endK);
      }, 1000);
    }
  }
});
