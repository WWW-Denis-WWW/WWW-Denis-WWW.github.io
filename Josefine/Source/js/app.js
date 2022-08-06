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

import * as MyWork from "./modules/support/MY-work.js";
MyWork.MyWork();

//--- MAIN ---//
import * as form__contact from "./modules/main/contact.js";
form__contact.form();
import * as lazy_load from "./modules/main/lazy-load.js";
lazy_load.lazy();
