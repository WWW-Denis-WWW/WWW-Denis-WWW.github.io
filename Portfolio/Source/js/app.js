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

// import * as spoiler from "./modules/support/burger.js";
// spoiler.spoiler();

//--- MY-work ---//

// import * as MyWork from "./modules/support/MY-work.js";
// MyWork.MyWork();

//--- Lazy load ---//

// import * as lazy_load from "./modules/support/lazy-load.js";
// lazy_load.lazy();

//--- MAIN ---//

import * as animation from "./modules/main/animation.js";
animation.animation();

import * as svgs from "./modules/main/FMR.js";
svgs.FMR();
import * as cont from "./modules/main/contact.js";
cont.contact();
