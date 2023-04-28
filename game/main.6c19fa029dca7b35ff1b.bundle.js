/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./assets/dialog.json
var dialog_namespaceObject = JSON.parse('{"scene1":["Finally! Remind me to take a helicopter for the next trip, Sully.","I’d rather avoid meeting pirates and fixing that damn engine every hour."],"scene2":["I’m too old for all this crap, Nate.","This time we better get lucky and find something valuable."],"scene3":["Come on guys, we shouldn’t argue and complain.","Look how beautiful it is here."],"scene4":["Sorry for that. Just getting sick of pointless adventures.","I owe a lot of money to serious people. And they aren’t kidding anymore."],"scene5":["Don’t worry, old man. This campaign will bring us to jackpot for sure.","But we gotta hurry. Roman is gonna be here in a couple hours.","Let’s go!"],"scene6":["I’ve already seen this tree!","We are going round and round in circles, Nate!"],"scene7":["I don’t understand!","The entrance is supposed to be right here."],"scene8":["I’m kinda tired.","You figure out, which direction we should go. I need a rest."],"scene9":["Way to go, girl!","I told you, Nate. This lady is a pure diamond!"],"scene10":["I must admit the truth.","Not bad for a journalist, Elena."],"scene11":["We are running out of time, boys!","I want to see, what’s hidden inside. Let’s roll!"],"scene12":["Never thought I’d say it.","You wanna smoke your cigar, Sully?","I can’t see a thing."],"scene13":["Just a moment."],"scene14":["Damn that was close!"],"scene15":["It’s a dead end.","Let’s move back the same way."],"scene16":["Maybe we missed something."],"scene17":["Look what I’ve found! Could be useful."],"scene18":["I can’t believe we found it."],"scene19":["The definition of «gorgeous»!"],"scene20":["There it is, ladies and gentlemen."],"scene21":["Let me introduce… The famous El Whorado."],"scene22":["Alright. I’ll quickly get back to the boat.","We definitely need some equipment to transport this giant."],"scene23":["You two! Don’t do anything stupid."],"scene24":["Yes, sir!"],"scene25":["Oh please. Everything is under control, Sully."],"scene26":["Okay, he is gone. Let’s open this thing!"],"scene27":["What? No! We have no idea, what’s inside.","It can be dangerous, Elena."],"scene28":["Oh don’t be such a pussy! I’m so excited!"],"scene29":["Wait!!!"],"scene30":["Well, I was wrong. It is not under control from now."],"scene31":["Time to have some fun!"],"scene32":["Damn..."],"scene33":["Whata hell is going on there???"],"scene34":["Well now we know what statue is"],"scene35":["...what just happened there?"],"scene36":["Totally agreed!"],"scene37":["Get me back to normal, you idiots!","Arghhh!!!"]}');
;// CONCATENATED MODULE: ./js/scene-creater.js
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const SceneCreater = preloader => {
  let sceneCount = 0,
    _ = undefined,
    maxSceneCount = 100;
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
      scene.id = `scene${this.id}`;
      scene.classList.add("scene");
      background.classList.add("scene__background", "background-scene");
      characters.classList.add("scene__characters", "characters-scene");
      scene.style.zIndex = maxSceneCount - this.id;
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
      let zIndex = arguments.length > 5 ? arguments[5] : undefined;
      let objectFit = arguments.length > 6 ? arguments[6] : undefined;
      let objectPosition = arguments.length > 7 ? arguments[7] : undefined;
      let name = arguments.length > 8 ? arguments[8] : undefined;
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
      if (zIndex) backgroundItem.style.zIndex = zIndex;
      if (objectFit) img.style.objectFit = objectFit;
      if (objectPosition) img.style.objectPosition = objectPosition;
      if (name) backgroundItem.classList.add(name);
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
      let zIndex = arguments.length > 6 ? arguments[6] : undefined;
      let objectFit = arguments.length > 7 ? arguments[7] : undefined;
      let objectPosition = arguments.length > 8 ? arguments[8] : undefined;
      let CharacterItem = document.createElement("div"),
        imgBox = document.createElement("div"),
        img = document.createElement("img");
      CharacterItem.classList.add("characters-scene__item");
      imgBox.classList.add("img");
      img.src = src;
      CharacterItem.style.width = `${w}`;
      CharacterItem.style.height = `${h}`;
      CharacterItem.style.left = `${left}`;
      CharacterItem.style.top = `${top}`;
      if (name) CharacterItem.classList.add(name);
      if (zIndex) CharacterItem.style.zIndex = zIndex;
      if (objectFit) img.style.objectFit = objectFit;
      if (objectPosition) img.style.objectPosition = objectPosition;
      imgBox.appendChild(img);
      CharacterItem.appendChild(imgBox);
      this.scene.querySelector(".characters-scene").appendChild(CharacterItem);
    }
    addDiv(className, zIndex) {
      let div = document.createElement("div");
      div.classList.add(className);
      if (zIndex) div.style.zIndex = zIndex;
      this.scene.appendChild(div);
    }
  }

  // Создаем лого предлоадера
  function setPreloaderGif() {
    let logo = new Image();
    logo.src = "./assets/animation/logo.gif";
    document.querySelector("#preloader_gif").appendChild(logo);
    logo.addEventListener("load", () => {
      createScenes();
      preloader();
    });
  }
  setPreloaderGif();

  // Создаем сцены

  function createScenes() {
    // 1
    let beach1 = new Scene(1);
    beach1.addBackgroud("./assets/media/beach/bg1.jpg", _, _, _, _, _, _, "bottom");
    beach1.addBackgroud("./assets/media/beach/boating-watercraft.png", "145%", "70%", "40%", "-60%");
    beach1.addCharacter("./assets/media/characters/Drake.png", "Drake", "35%", "100%", "30%", "20%", _, "contain");
    // 2
    let beach2 = new Scene(2);
    beach2.addBackgroud("./assets/media/beach/bg1.jpg", "180%", "180%", "-50%", "-25%", _);
    beach2.addBackgroud("./assets/media/beach/boating-watercraft.png", "200%", "200%", "-30%", "-50%");
    beach2.addCharacter("./assets/media/characters/Sulli-sit.png", "Sulli", "110%", "110%", "10%", "-5%", _, "contain");
    let beach3 = new Scene(3);
    // 3
    beach3.addBackgroud("./assets/media/beach/bg1.jpg", "158%", "150%", "-49%", "0");
    beach3.addBackgroud("./assets/media/beach/boating-watercraft.png", "200%", "200%", "-30%", "-11%", "1");
    beach3.addCharacter("./assets/media/characters/Helena-no-bg.png", "Helena", "89%", "87%", "27%", "-20%", _, "contain");
    //4
    let beach4 = new Scene(4);
    beach4.addBackgroud("./assets/media/beach/bg1.jpg", "180%", "180%", "-50%", "-25%", _);
    beach4.addBackgroud("./assets/media/beach/boating-watercraft.png", "200%", "200%", "-30%", "-50%");
    beach4.addCharacter("./assets/media/characters/Sulli-sit-2.png", "Sulli", "104%", "93%", "20%", "-5%", _, "contain");
    // 5
    let beach5 = new Scene(5);
    beach5.addBackgroud("./assets/media/beach/bg1.jpg", _, _, _, _, _, _, "bottom");
    beach5.addBackgroud("./assets/media/beach/boating-watercraft.png", "145%", "70%", "40%", "-60%");
    beach5.addCharacter("./assets/media/characters/drake-compas.png", "Drake", "40%", "107%", "30%", "20%", _, "contain");
    // jungle 6
    let jungle1 = new Scene(6);
    jungle1.addBackgroud("./assets/media/jungle/jungle-bg.png", _, _, _, _, 1, _, "bottom");
    jungle1.addBackgroud("./assets/media/jungle/forest.png", _, _, _, _, 5, _, "bottom");
    jungle1.addBackgroud("./assets/media/jungle/gress.png", "100%", "20%", "83%", "0%", 5, "contain");
    jungle1.addBackgroud("./assets/media/jungle/tonnel.png", "32%", "51%", "14.5%", "70%");
    jungle1.addBackgroud("./assets/media/jungle/wall.png", "41%", "60%", "13%", "65%");
    jungle1.addBackgroud("./assets/media/jungle/stone.png", "100%", "20%", "66.5%", "-10%", 2, "contain");
    jungle1.addBackgroud("./assets/media/jungle/green.png", "18%", "25%", "68.5%", "31%", 3, "contain");
    jungle1.addCharacter("./assets/media/characters/drake-compas.png", "Drake1", "21%", "107%", "5%", "53%", 4, "contain");
    jungle1.addCharacter("./assets/media/characters/Helen.png", "Helen", "21%", "107%", "12%", "30%", 4, "contain");
    jungle1.addCharacter("./assets/media/characters/sally-big.png", "Sally", "21%", "107%", "4%", "-2%", 4, "contain");
    // jungle 7
    let jungle2 = new Scene(7);
    jungle2.addBackgroud("./assets/media/jungle/jungle-bg.png", _, _, _, _, 1, _, "bottom");
    jungle2.addBackgroud("./assets/media/jungle/forest.png", _, _, _, _, 5, _, "bottom");
    jungle2.addBackgroud("./assets/media/jungle/gress.png", "100%", "20%", "83%", "0%", 5, "contain");
    jungle2.addBackgroud("./assets/media/jungle/tonnel.png", "32%", "51%", "14.5%", "70%");
    jungle2.addBackgroud("./assets/media/jungle/wall.png", "41%", "60%", "13%", "65%");
    jungle2.addBackgroud("./assets/media/jungle/stone.png", "100%", "20%", "66.5%", "-10%", 2, "contain");
    jungle2.addBackgroud("./assets/media/jungle/green.png", "18%", "25%", "68.5%", "31%", 3, "contain");
    jungle2.addCharacter("./assets/media/characters/drake-compas.png", "Drake1", "21%", "107%", "5%", "53%", 4, "contain");
    jungle2.addCharacter("./assets/media/characters/Helen.png", "Helen", "21%", "107%", "12%", "30%", 4, "contain");
    jungle2.addCharacter("./assets/media/characters/sally-big.png", "Sally", "21%", "107%", "4%", "-2%", 4, "contain");
    //jungle 8
    let jungle3 = new Scene(8);
    jungle3.addBackgroud("./assets/media/jungle/jungle-bg.png", _, _, _, _, 1, _, "bottom");
    jungle3.addBackgroud("./assets/media/jungle/forest.png", _, _, _, _, 5, _, "bottom");
    jungle3.addBackgroud("./assets/media/jungle/gress.png", "100%", "20%", "83%", "0%", 5, "contain");
    jungle3.addBackgroud("./assets/media/jungle/tonnel.png", "32%", "51%", "14.5%", "70%");
    jungle3.addBackgroud("./assets/media/jungle/wall.png", "41%", "60%", "13%", "65%");
    jungle3.addBackgroud("./assets/media/jungle/stone.png", "100%", "20%", "66.5%", "-10%", 2, "contain");
    jungle3.addBackgroud("./assets/media/jungle/green.png", "18%", "25%", "68.5%", "31%", 3, "contain");
    jungle3.addCharacter("./assets/media/characters/drake-compas.png", "Drake1", "21%", "107%", "5%", "53%", 4, "contain");
    jungle3.addCharacter("./assets/media/characters/Helen.png", "Helen", "21%", "107%", "12%", "30%", 4, "contain");
    jungle3.addCharacter("./assets/media/characters/sally-big.png", "Sally", "21%", "107%", "4%", "-2%", 4, "contain");
    // jungle 9
    let jungle4 = new Scene(9);
    jungle4.addBackgroud("./assets/media/jungle/jungle-bg.png", _, _, _, _, 1, _, "bottom");
    jungle4.addBackgroud("./assets/media/jungle/forest.png", _, _, _, _, 5, _, "bottom");
    jungle4.addBackgroud("./assets/media/jungle/gress.png", "100%", "20%", "83%", "0%", 5, "contain");
    jungle4.addBackgroud("./assets/media/jungle/tonnel.png", "32%", "51%", "14.5%", "70%");
    jungle4.addBackgroud("./assets/media/jungle/wall.png", "41%", "60%", "13%", "65%", _, _, _, "door-anime");
    jungle4.addBackgroud("./assets/media/jungle/stone.png", "100%", "20%", "66.5%", "-10%", 2, "contain", _, "stone-anim");
    jungle4.addBackgroud("./assets/media/jungle/green.png", "18%", "25%", "68.5%", "31%", 3, "contain");
    jungle4.addCharacter("./assets/media/characters/drake-compas.png", "Drake1", "21%", "107%", "5%", "53%", 4, "contain");
    jungle4.addCharacter("./assets/media/characters/Helen-sit.png", "Helena-sit-anim", "21%", "107%", "12%", "32%", 4, "contain");
    jungle4.addCharacter("./assets/media/characters/sally-big.png", "Sally", "21%", "107%", "4%", "-2%", 4, "contain");
    //jungle 10
    let jungle5 = new Scene(10);
    jungle5.addBackgroud("./assets/media/jungle/jungle-bg.png", _, _, _, _, 1, _, "bottom");
    jungle5.addBackgroud("./assets/media/jungle/forest.png", _, _, _, _, 5, _, "bottom");
    jungle5.addBackgroud("./assets/media/jungle/gress.png", "100%", "20%", "83%", "0%", 5, "contain");
    jungle5.addBackgroud("./assets/media/jungle/tonnel.png", "32%", "51%", "14.5%", "70%");
    jungle5.addBackgroud("./assets/media/jungle/stone.png", "100%", "20%", "66.5%", "-10%", 2, "contain", _, "stone-animated");
    jungle5.addBackgroud("./assets/media/jungle/green.png", "18%", "25%", "68.5%", "31%", 3, "contain");
    jungle5.addCharacter("./assets/media/characters/drake-compas.png", "Drake1", "21%", "107%", "5%", "53%", 4, "contain");
    jungle5.addCharacter("./assets/media/characters/Helen-sit-smile.png", "Helena-sit-animated", "21%", "107%", "12%", "32%", 4, "contain");
    jungle5.addCharacter("./assets/media/characters/sally-big.png", "Sally", "21%", "107%", "4%", "-2%", 4, "contain");
    // jungle 11
    let jungle6 = new Scene(11);
    jungle6.addBackgroud("./assets/media/jungle/jungle-bg.png", _, _, _, _, 1, _, "bottom");
    jungle6.addBackgroud("./assets/media/jungle/forest.png", _, _, _, _, 5, _, "bottom");
    jungle6.addBackgroud("./assets/media/jungle/gress.png", "100%", "20%", "83%", "0%", 5, "contain");
    jungle6.addBackgroud("./assets/media/jungle/tonnel.png", "32%", "51%", "14.5%", "70%");
    jungle6.addBackgroud("./assets/media/jungle/stone.png", "100%", "20%", "66.5%", "-10%", 2, "contain", _, "stone-animated");
    jungle6.addBackgroud("./assets/media/jungle/green.png", "18%", "25%", "68.5%", "31%", 3, "contain");
    jungle6.addCharacter("./assets/media/characters/drake-compas.png", "Drake1", "21%", "107%", "5%", "53%", 4, "contain");
    jungle6.addCharacter("./assets/media/characters/Helen-sit-smile.png", "Helena-sit-animated", "21%", "107%", "12%", "32%", 4, "contain");
    jungle6.addCharacter("./assets/media/characters/sally-big.png", "Sally", "21%", "107%", "4%", "-2%", 4, "contain");
    // cave 12
    let cave1 = new Scene(12);
    cave1.addBackgroud("./assets/media/cave/eyes.png", "90%", "19%", "38%", "3%", _, "contain");

    // cave 13
    let cave2 = new Scene(13);
    cave2.addBackgroud("./assets/media/cave/eyes.png", "90%", "19%", "38%", "3%", _, "contain");
    //cave 14
    let cave3 = new Scene(14);
    cave3.addBackgroud("./assets/media/cave/bg1.png", _, _, _, _, _, _, "bottom");
    cave3.addCharacter("./assets/media/cave/characters/helena-fear.png", _, "25%", "78%", "27%", "-10%", 0, "contain");
    cave3.addCharacter("./assets/media/cave/characters/drake-fear.png", _, "23%", "78%", "28%", "2%", 0, "contain");
    cave3.addCharacter("./assets/media/cave/characters/silly-lighter.png", _, "23%", "78%", "27%", "17%", 0, "contain");
    cave3.addDiv("ligth1", 1);
    //cave 14
    let cave4 = new Scene(15);
    cave4.addBackgroud("./assets/media/cave/bg1.png", _, _, _, _, _, _, "bottom");
    cave4.addCharacter("./assets/media/cave/characters/helena-fear.png", _, "25%", "78%", "27%", "-10%", 0, "contain");
    cave4.addCharacter("./assets/media/cave/characters/drake-fear.png", _, "23%", "78%", "28%", "2%", 0, "contain");
    cave4.addCharacter("./assets/media/cave/characters/silly-lighter.png", _, "23%", "78%", "27%", "17%", 0, "contain");
    cave4.addDiv("ligth1", 1);
    //cave 15
    let cave5 = new Scene(16);
    cave5.addBackgroud("./assets/media/cave/bg4.jpg", _, _, _, _, _, _, "bottom");
    cave5.addCharacter("./assets/media/cave/characters/silly-lighter1.png", _, "25%", "72%", "30%", "15%", 0, "contain");
    cave5.addCharacter("./assets/media/cave/characters/drake-fear.png", "Drake1", "23%", "78%", "28%", "41%", 0, "contain");
    cave5.addCharacter("./assets/", _, "25%", "72%", "29%", "68%", 0, "contain");
    cave5.addDiv("ligth2", 1);
  }
};
/* harmony default export */ var scene_creater = (SceneCreater);
;// CONCATENATED MODULE: ./js/preloader.js
const Preloader = () => {
  let preloader = document.querySelector("#preloader"),
    preloaderProgressBg = document.querySelector(".preloader__background"),
    media = Array.from(document.querySelectorAll("img , video")),
    audio = Array.from(document.querySelectorAll("audio")),
    procentEl = document.querySelector("#loadProcent"),
    allElCount = media.length - 1,
    loadedElements = 0,
    procentValue = 0;
  function listenLoads() {
    media.forEach(el => {
      el.addEventListener("load", loaded);
      el.addEventListener("error", loaded);
    });
    // audio.forEach((el) => {
    //   el.addEventListener("canplaythrough", () => {
    //     loadedElements++;
    //     countProcent();
    //   });
    // });
  }

  function loaded() {
    loadedElements++;
    countProcent();
  }
  function removeListener() {
    media.forEach(el => {
      el.removeEventListener("load", loaded);
      el.removeEventListener("error", loaded);
    });
  }
  function countProcent() {
    if (allElCount == loadedElements) {
      procentValue = 100;
      setTimeout(hidePreloader, 500);
      removeListener();
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
  // init
  (function initPreloader() {
    listenLoads();
  })();
};
/* harmony default export */ var preloader = (Preloader);
;// CONCATENATED MODULE: ./js/keyListener.js
let isKeyListener = v => {
  islisten = v;
};
let nextBtn = document.querySelector("#next");
let islisten = true;
window.addEventListener("keydown", keyDown);
function keyDown(e) {
  if (!islisten) return;
  if (e.code == "Space" || e.code == "ArrowRight") {
    nextBtn.click();
  }
}
/* harmony default export */ var keyListener = (isKeyListener);
;// CONCATENATED MODULE: ./js/talk-updateer.js

let talk_updateer_nextBtn = document.querySelector("#next");
let typed = new Typed(".talk .talk__text p", {
  strings: [""],
  typeSpeed: 10,
  showCursor: false,
  fadeOut: true,
  fadeOutDelay: 0,
  onComplete: () => {
    keyListener(true);
    talk_updateer_nextBtn.classList.remove("hide");
    talk_updateer_nextBtn.disabled = false;
  }
});
let talkElement = document.querySelector(".talk");
let lastType = null;
function TalkUpdate(str, top, left, type) {
  if (talkElement.classList.contains("talking")) talkElement.classList.remove("talking");
  if (lastType) talkElement.classList.remove(`${lastType}`);
  lastType = type;
  talkElement.classList.add(`${type}`);
  talkElement.style.top = `${top}%`;
  talkElement.style.left = `${left}%`;
  setTimeout(() => {
    talkElement.classList.add("talking");
  }, 100);
  typed.destroy();
  typed.strings = [str];
  typed.begin();
  talk_updateer_nextBtn.classList.add("hide");
  talk_updateer_nextBtn.disabled = true;
  keyListener(false);
}
/* harmony default export */ var talk_updateer = (TalkUpdate);
;// CONCATENATED MODULE: ./js/warn-btn.js
const Warning = StartFunction => {
  let btn = document.querySelector("#warn-btn"),
    warning = document.querySelector(".warning");
  btn.addEventListener("click", closeWarning);
  function closeWarning() {
    warning.classList.add("hide");
    btn.removeEventListener("click", closeWarning);
    StartFunction();
  }
};
/* harmony default export */ var warn_btn = (Warning);
;// CONCATENATED MODULE: ./js/talk-blockSetting.js
// procent unit
const TALKING_POSITIONS = {
  scene1: {
    talk1: {
      top: 17,
      left: 40,
      type: "bl"
    },
    talk2: {
      top: 17,
      left: 40,
      type: "bl"
    }
  },
  scene2: {
    talk1: {
      top: 29,
      left: 60,
      type: "cl"
    },
    talk2: {
      top: 29,
      left: 60,
      type: "cl"
    }
  },
  scene3: {
    talk1: {
      top: 50,
      left: 29,
      type: "tl"
    },
    talk2: {
      top: 50,
      left: 29,
      type: "tl"
    }
  },
  scene4: {
    talk1: {
      top: 39,
      left: 61,
      type: "cl"
    },
    talk2: {
      top: 39,
      left: 61,
      type: "cl"
    }
  },
  scene5: {
    talk1: {
      top: 39,
      left: 47,
      type: "cl"
    },
    talk2: {
      top: 39,
      left: 47,
      type: "cl"
    },
    talk3: {
      top: 39,
      left: 47,
      type: "cl"
    }
  },
  scene6: {
    modifyScene: {
      fadeStart: true,
      delay: 2000
    },
    delay: 2000,
    talk1: {
      top: 28,
      left: 15,
      type: "cl"
    },
    talk2: {
      top: 28,
      left: 15,
      type: "cl"
    }
  },
  scene7: {
    talk1: {
      top: 27,
      left: 70,
      type: "cl"
    },
    talk2: {
      top: 27,
      left: 70,
      type: "cl"
    }
  },
  scene8: {
    talk1: {
      top: 38,
      left: 45,
      type: "cl"
    },
    talk2: {
      top: 38,
      left: 45,
      type: "cl"
    }
  },
  scene9: {
    modifyScene: {
      fadeStart: true,
      delay: 7000,
      anim: ["Helena-sit-anim", "stone-anim", "door-anime"],
      imgChange: {
        target: "Helena-sit-anim",
        img1: {
          src: "./assets/media/characters/Helen-sit-scare.png",
          delay: 3000
        },
        img2: {
          src: "./assets/media/characters/Helen-sit-smile.png",
          delay: 6000
        }
      }
    },
    talk1: {
      top: 31,
      left: 13,
      type: "cl"
    },
    talk2: {
      top: 31,
      left: 13,
      type: "cl"
    },
    talk3: {
      top: 31,
      left: 13,
      type: "cl"
    }
  },
  scene10: {
    talk1: {
      top: 27,
      left: 70,
      type: "cl"
    },
    talk2: {
      top: 27,
      left: 70,
      type: "cl"
    }
  },
  scene11: {
    talk1: {
      top: 37,
      left: 40,
      type: "bl"
    },
    talk2: {
      top: 37,
      left: 40,
      type: "bl"
    }
  },
  scene12: {
    modifyScene: {
      fadeStart: true,
      delay: 2000
    },
    talk1: {
      top: 28,
      left: 64,
      type: "none"
    },
    talk2: {
      top: 28,
      left: 64,
      type: "none"
    },
    talk3: {
      top: 28,
      left: 64,
      type: "none"
    }
  },
  scene13: {
    talk1: {
      top: 28,
      left: 18,
      type: "none"
    },
    talk2: {
      top: 28,
      left: 18,
      type: "none"
    }
  },
  scene14: {
    talk1: {
      top: 16.5,
      left: 1,
      type: "bl"
    },
    talk2: {
      top: 16.5,
      left: 1,
      type: "bl"
    }
  },
  scene15: {
    talk1: {
      top: 16.5,
      left: 12,
      type: "bl"
    },
    talk2: {
      top: 16.5,
      left: 12,
      type: "bl"
    }
  },
  scene16: {
    talk1: {
      top: 16.5,
      left: 12,
      type: "bl"
    },
    talk2: {
      top: 16.5,
      left: 12,
      type: "bl"
    }
  },
  scene17: {
    talk1: {
      top: 15,
      left: 52,
      type: "bl"
    },
    talk2: {
      top: 16.5,
      left: 12,
      type: "bl"
    }
  }
};
/* harmony default export */ var talk_blockSetting = (TALKING_POSITIONS);
;// CONCATENATED MODULE: ./js/main.js
// styles

// Spine Player
// import * as Spine from "@esotericsoftware/spine-player";
// dialogs scene

// Scene creater

// Preloader

// Typed

// Warning

// key

// Warning

// script
// let spine = new Spine.SpinePlayer("player-container", {
//   jsonUrl: "../assets/spine/helena1/Unchartit NSFW oral psd.json",
//   atlasUrl: "../assets/spine/helena1/Unchartit NSFW oral psd.atlas.txt",
//   showControls: false,
//   showLoading: false,
//   backgroundColor: "#00000000",
//   alpha: true,
//   defaultMix: 0.25,
//   animation: "3",
// });

scene_creater(preloader);
warn_btn(sceneInit);
function sceneInit() {
  let nowScene = 1,
    talkIndex = 0,
    nextBtn = document.querySelector("#next");
  talk_updateer(getDialog(nowScene, talkIndex), ...getSettingForThisScene(nowScene, talkIndex));
  nextBtn.addEventListener("click", () => {
    talkIndex++;
    if (!canNext(nowScene, talkIndex)) return;
    let nowTalk = getDialog(nowScene, talkIndex);
    if (nowTalk) {
      talk_updateer(nowTalk, ...getSettingForThisScene(nowScene, talkIndex));
    } else {
      if (nowScene == 15) return;
      let modify = talk_blockSetting[`scene${nowScene + 1}`].modifyScene;
      if (modify) {
        modifyScene(modify);
        setTimeout(() => {
          removeScene(nowScene);
          nowScene++;
          talkIndex = 0;
          nowTalk = getDialog(nowScene, talkIndex);
        }, 1000);
        setTimeout(() => {
          talk_updateer(nowTalk, ...getSettingForThisScene(nowScene, talkIndex));
        }, modify.delay);
      } else {
        removeScene(nowScene);
        nowScene++;
        talkIndex = 0;
        nowTalk = getDialog(nowScene, talkIndex);
        talk_updateer(nowTalk, ...getSettingForThisScene(nowScene, talkIndex));
      }
    }
  });
}
function modifyScene(modifyObj) {
  if (modifyObj.fadeStart) {
    fade();
  }
  if (modifyObj.anim) {
    modifyObj.anim.forEach(className => {
      animScene(className);
    });
  }
  if (modifyObj.imgChange) {
    changeImg(modifyObj.imgChange);
  }
}
function changeImg(imgChangeSettingObj) {
  let target = document.querySelector(`.${imgChangeSettingObj.target} img`);
  for (let i = 1; i < Object.keys(imgChangeSettingObj).length; i++) {
    let imgObj = imgChangeSettingObj[`img${i}`];
    setTimeout(() => {
      target.src = imgObj.src;
    }, imgObj.delay);
  }
}
function animScene(classEl) {
  setTimeout(() => {
    document.querySelector(`.${classEl}`).classList.add("anim");
  }, 1000);
}
function fade() {
  let talkElement = document.querySelector(".talk");
  talkElement.classList.remove("talking");
  let fadeEl = document.querySelector("#fade");
  fadeEl.classList.add("show");
  let nextBtn = document.querySelector("#next");
  keyListener(false);
  nextBtn.classList.add("hide");
  nextBtn.disabled = false;
  hideTalkEl();
  setTimeout(() => {
    fadeEl.classList.remove("show");
  }, 1200);
}
function hideTalkEl() {
  let talkElement = document.querySelector(".talk");
  talkElement.classList.remove("talking");
}
function getDialog(idScene, indexTalk) {
  return dialog_namespaceObject[`scene${idScene}`][indexTalk];
}
function getSettingForThisScene(idScene, indexTalk) {
  let setting = talk_blockSetting[`scene${idScene}`][`talk${indexTalk + 1}`];
  return [setting.top, setting.left, setting.type];
}
function canNext(idScene) {
  if (!dialog_namespaceObject[`scene${idScene}`]) {
    console.warn("Нету диалога");
    return false;
  } else if (!talk_blockSetting[`scene${idScene}`]) {
    console.warn("Не задано положение блока разговора");
    return false;
  }
  return true;
}
function removeScene(id) {
  let delEl = document.querySelector(`#scene${id}`);
  let container = document.querySelector("#container");
  if (delEl) container.removeChild(delEl);
}
function removeScenes(count) {
  if (!count) return;
  for (let i = 1; i < count; i++) {
    let delEl = document.querySelector(`#scene${i}`);
    let container = document.querySelector("#container");
    if (delEl) container.removeChild(delEl);
  }
}
/******/ })()
;