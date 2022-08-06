"use strict";
//___LIBS___//
//↓↓↓↓↓↓↓↓↓↓//

//--- swiper ---//

import * as swiper1 from "./modules/libs/swiper-bundle.min.js";
import * as swiper_init from "./modules/libs/swiper.js";
swiper1.swiper1();
swiper_init.swiper_init();

//___SUPPORT__//
//↓↓↓↓↓↓↓↓↓↓↓↓//
//--- PRELOADER ---//

import * as preloader from "./modules/support/preloader.js";
preloader.preloader();
//--- WEBP ---//

import * as /*Изменять вот это =>*/ func from "./modules/support/function.js";
/*И вот это =>*/ func.isWebp();

//--- BURHER ---//

import * as burger from "./modules/support/burger.js";
burger.Burger();

//--- SPOILER ---//

// import * as spoiler from "./modules/support/spoiler.js";
// spoiler.spoiler();

//--- MY-work ---//

import * as MyWork from "./modules/support/MY-work.js";
MyWork.MyWork();

//--- Lazy load ---//

// import * as lazy_load from "./modules/support/lazy-load.js";
// lazy_load.lazy();

//--- Popup ---//

import * as popup from "./modules/support/popup.js";
popup.Popup();

// --- MAIN ---//

import * as header from "./modules/main/header.js";
header.header();
import * as footer from "./modules/main/footer.js";
footer.footer();
import * as slidesAPI from "./modules/main/swiper-codeAPI.js";
slidesAPI.slidesAPI();
import * as slidesIntegrates from "./modules/main/swiper-codeIntegrates.js";
slidesIntegrates.slidesIntegrates();

import * as scroll from "./modules/main/AnimScroll.js";
scroll.scroll();
