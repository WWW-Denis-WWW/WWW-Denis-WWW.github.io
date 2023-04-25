/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/preloader.js":
/*!*************************!*\
  !*** ./js/preloader.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Preloader = () => {
  let preloader = document.querySelector("#preloader"),
    preloaderProgressBg = document.querySelector(".preloader__background"),
    media = Array.from(document.querySelectorAll("img,video")),
    audio = Array.from(document.querySelectorAll("audio")),
    procentEl = document.querySelector("#loadProcent"),
    allElCount = media.length,
    loadedElements = 0,
    procentValue = 0;
  function listenLoads() {
    media.forEach((el, index) => {
      el.addEventListener("load", () => {
        loadedElements++;
        console.log(media[0].onload);
        console.log("i", index);
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
    if (allElCount - 1 == loadedElements) {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preloader);

/***/ }),

/***/ "./js/scene-creater.js":
/*!*****************************!*\
  !*** ./js/scene-creater.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneCreater);

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _scene_creater_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene-creater.js */ "./js/scene-creater.js");
/* harmony import */ var _preloader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preloader.js */ "./js/preloader.js");
// styles

// scripts
// Scene creater

// Preloader

(0,_scene_creater_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
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

(0,_preloader_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=main.f63381a45c38dffb97cf.bundle.js.map