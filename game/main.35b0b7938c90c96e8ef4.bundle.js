/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./js/scene-creater.js
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const SceneCreater = () => {
  let sceneCount = 0;
  let _ = undefined;
  class Scene {
    constructor(id) {
      _defineProperty(this, "scene", null);
      this.id = id;
      sceneCount++;
      this.sceneInitDOM();
    }
    // Создание каркаса сцены
    sceneInitDOM() {
      let container = document.querySelector("#container"),
        scene = document.createElement("div"),
        background = document.createElement("div"),
        characters = document.createElement("div");
      scene.id = this.id;
      scene.classList.add("scene");
      background.classList.add("scene__background", "background-scene");
      characters.classList.add("scene__characters", "characters-scene");
      scene.appendChild(background);
      scene.appendChild(characters);
      container.appendChild(scene);
      this.scene = scene;
    }
    // Добавление фона к сцене
    addBackgroud(src) {
      let w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "100%";
      let h = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "100%";
      let top = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "0";
      let left = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "0";
      let objectFit = arguments.length > 5 ? arguments[5] : undefined;
      let objectPosition = arguments.length > 6 ? arguments[6] : undefined;
      let backgroundItem = document.createElement("div"),
        imgBox = document.createElement("div"),
        img = document.createElement("img");
      backgroundItem.classList.add("background-scene__item");
      imgBox.classList.add("img");
      img.src = src;
      backgroundItem.style.width = `${w}`;
      backgroundItem.style.height = `${h}`;
      backgroundItem.style.left = `${left}`;
      backgroundItem.style.top = `${top}`;
      if (objectFit) img.style.objectFit = objectFit;
      if (objectPosition) img.style.objectPosition = objectPosition;
      imgBox.appendChild(img);
      backgroundItem.appendChild(imgBox);
      this.scene.querySelector(".background-scene").appendChild(backgroundItem);
    }
    // Добавление персонажей к сцене
    addCharacter(src, name) {
      let w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "100%";
      let h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "100%";
      let top = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "0";
      let left = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "0";
      let objectFit = arguments.length > 6 ? arguments[6] : undefined;
      let objectPosition = arguments.length > 7 ? arguments[7] : undefined;
      let CharacterItem = document.createElement("div"),
        imgBox = document.createElement("div"),
        img = document.createElement("img");
      CharacterItem.classList.add("characters-scene__item", name);
      imgBox.classList.add("img");
      img.src = src;
      CharacterItem.style.width = `${w}`;
      CharacterItem.style.height = `${h}`;
      CharacterItem.style.left = `${left}`;
      CharacterItem.style.top = `${top}`;
      if (objectFit) img.style.objectFit = objectFit;
      if (objectPosition) img.style.objectPosition = objectPosition;
      imgBox.appendChild(img);
      CharacterItem.appendChild(imgBox);
      this.scene.querySelector(".characters-scene").appendChild(CharacterItem);
    }
  }
  let beach1 = new Scene(1);
  beach1.addBackgroud("./assets/media/beach/bg1.jpg", _, _, _, _, _, "bottom");
  beach1.addBackgroud("./assets/media/beach/boating-watercraft.png", "145%", "70%", "40%", "-60%");
  beach1.addCharacter("./assets/media/characters/Drake.png", "Drake", "35%", "100%", "30%", "20%", "contain");
  // let beach2 = new Scene(2);
  // beach2.addBackgroud(
  //   "./assets/media/beach/bg1.jpg",
  //   "180%",
  //   "180%",
  //   "-50%",
  //   "-25%",
  //   _
  // );
  // beach2.addBackgroud(
  //   "./assets/media/beach/boating-watercraft.png",
  //   "200%",
  //   "200%",
  //   "-30%",
  //   "-50%"
  // );
  // beach2.addCharacter(
  //   "./assets/media/characters/Sulli-sit.png",
  //   "Sulli",
  //   "110%",
  //   "110%",
  //   "10%",
  //   "-5%",
  //   "contain"
  // );
};

/* harmony default export */ var scene_creater = (SceneCreater);
;// CONCATENATED MODULE: ./js/preloader.js
const Preloader = () => {
  let preloader = document.querySelector("#preloader"),
    preloaderProgressBg = document.querySelector(".preloader__background"),
    media = Array.from(document.querySelectorAll("img,video")),
    audio = Array.from(document.querySelectorAll("audio")),
    procentEl = document.querySelector("#loadProcent"),
    allElCount = media.length + audio.length,
    loadedElements = 0,
    procentValue = 0;
  function listenLoads() {
    media.forEach(el => {
      el.addEventListener("load", () => {
        loadedElements++;
        countProcent();
      });
    });
    // audio.forEach((el) => {
    //   el.addEventListener("canplaythrough", () => {
    //     loadedElements++;
    //     countProcent();
    //   });
    // });
  }

  function countProcent() {
    if (allElCount === loadedElements) {
      procentValue = 100;
      hidePreloader();
    } else {
      procentValue = (loadedElements / allElCount * 100).toFixed(0);
    }
    setProcentValue();
  }
  function setProcentValue() {
    procentEl.textContent = procentValue;
    preloaderProgressBg.style.width = `${procentValue}%`;
  }
  function hidePreloader() {
    preloader.classList.add("hide");
  }
  (function initPreloader() {
    listenLoads();
  })();
};
/* harmony default export */ var preloader = (Preloader);
;// CONCATENATED MODULE: ./js/main.js
// styles

// scripts
// Scene creater

scene_creater();
// ====================== испытываю
let typed = new Typed(".talk__text p", {
  strings: ["", "Finally! Remind me to take a helicopter for the next trip, Sully."],
  showCursor: false,
  typeSpeed: 30,
  onDestroy: self => {
    console.log("sss");
  }
});
document.querySelector(".next").addEventListener("click", () => {
  let typed = new Typed(".talk__text p", {
    strings: ["", "I'd rather avoid meeting pirates and fixing that damn engine every hour."],
    backDelay: 0,
    showCursor: false,
    fadeOut: true,
    fadeOutDelay: 0,
    typeSpeed: 30
  });
});
// =================
// Preloader

preloader();
/******/ })()
;