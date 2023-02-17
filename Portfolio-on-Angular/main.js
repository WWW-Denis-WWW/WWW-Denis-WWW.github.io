"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _data_data_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data-paths */ 7884);
/* harmony import */ var _scripts_aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/aos */ 5475);
/* harmony import */ var _scripts_preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/preloader */ 9011);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/header.service */ 6690);
/* harmony import */ var _services_translate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/translate.service */ 1662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 8699);

// Пути к переводам

// AOS

// preloader













const _c0 = ["sidenav"];
function AppComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", lang_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", lang_r3, " ");
} }
//
//
//
class AppComponent {
    constructor(headerService, translater) {
        this.headerService = headerService;
        this.translater = translater;
        // Пути
        this.headerText = _data_data_paths__WEBPACK_IMPORTED_MODULE_0__.header;
    }
    aboba(el) {
        el
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto');
    }
    ngOnInit() {
        (0,_scripts_aos__WEBPACK_IMPORTED_MODULE_1__.aosInit)();
        (0,_scripts_preloader__WEBPACK_IMPORTED_MODULE_2__.preloaderInit)();
        window.addEventListener('resize', () => {
            (0,_scripts_preloader__WEBPACK_IMPORTED_MODULE_2__.preloaderInit)();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_header_service__WEBPACK_IMPORTED_MODULE_3__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_translate_service__WEBPACK_IMPORTED_MODULE_4__.TranslaterService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, decls: 25, vars: 13, consts: [["mode", "over", 3, "opened", "fixedInViewport", "closedStart", "openedStart", "openedChange"], ["sidenav", ""], [1, "sidenav"], [1, "bg"], [1, "bg", "bg2"], [1, "bg", "bg3"], [1, "sidenav__list", "list-sidenav"], [1, "list-sidenav__items"], [1, "list-sidenav__item"], ["routerLink", "/works", 3, "title", "click"], ["appearance", "fill", 1, "list-sidenav__select"], [3, "value", "valueChange"], ["select", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-sidenav-container")(1, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("closedStart", function AppComponent_Template_mat_sidenav_closedStart_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.aboba(_r0.opened)); })("openedStart", function AppComponent_Template_mat_sidenav_openedStart_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.aboba(_r0.opened)); })("openedChange", function AppComponent_Template_mat_sidenav_openedChange_1_listener($event) { return ctx.headerService.sidebar = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "nav", 6)(8, "ul", 7)(9, "li", 8)(10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppComponent_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r0.close()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-form-field", 10)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-select", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function AppComponent_Template_mat_select_valueChange_18_listener($event) { return ctx.translater.language = $event; })("valueChange", function AppComponent_Template_mat_select_valueChange_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](19); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.translater.languageChange(_r1.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, AppComponent_mat_option_20_Template, 2, 2, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "app-header")(23, "router-outlet")(24, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("opened", ctx.headerService.sidebar)("fixedInViewport", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](11, 7, ctx.headerText.work_des));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 9, ctx.headerText.work), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 11, ctx.headerText.lang), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.translater.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.translater.all_language);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption, _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home-page/home-page.component */ 8170);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _components_home_page_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home-page/fullscreen/fullscreen.component */ 2618);
/* harmony import */ var _components_home_page_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home-page/skills/skills.component */ 774);
/* harmony import */ var _components_home_page_game_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home-page/game/game.component */ 5986);
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/game */ 5010);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _components_home_page_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home-page/contacts/contacts.component */ 1718);
/* harmony import */ var _components_home_page_three_d_three_d_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home-page/three-d/three-d.component */ 1254);
/* harmony import */ var _components_works_works_page_works_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/works/works-page/works-page.component */ 4493);
/* harmony import */ var _components_works_work_work_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/works/work/work.component */ 189);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);





// Компоненты




// Tranlsate



// Angular material



















function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
// Марширутизация
const appRoutes = [
    { path: 'home', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__.HomePageComponent },
    { path: 'works', component: _components_works_works_page_works_page_component__WEBPACK_IMPORTED_MODULE_11__.WorksPageComponent },
    { path: 'contact', redirectTo: '/home#contacts' },
    { path: '**', redirectTo: '/home' },
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_scripts_game__WEBPACK_IMPORTED_MODULE_8__.AngularGame], imports: [swiper_angular__WEBPACK_IMPORTED_MODULE_15__.SwiperModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forRoot(appRoutes, {
            anchorScrolling: 'enabled',
        }),
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__.MatSidenavModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__.MatGridListModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateModule.forRoot({
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClient],
            },
        }),
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_28__.LayoutModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__.HomePageComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent,
        _components_home_page_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_5__.FullscreenComponent,
        _components_home_page_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__.SkillsComponent,
        _components_home_page_game_game_component__WEBPACK_IMPORTED_MODULE_7__.GameComponent,
        _components_home_page_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_9__.ContactsComponent,
        _components_home_page_three_d_three_d_component__WEBPACK_IMPORTED_MODULE_10__.ThreeDComponent,
        _components_works_works_page_works_page_component__WEBPACK_IMPORTED_MODULE_11__.WorksPageComponent,
        _components_works_work_work_component__WEBPACK_IMPORTED_MODULE_12__.WorkComponent], imports: [swiper_angular__WEBPACK_IMPORTED_MODULE_15__.SwiperModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__.MatSidenavModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__.MatGridListModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__.MatFormFieldModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslateModule, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_28__.LayoutModule] }); })();


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "footer"], [1, "footer__body", "backdrop"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Better every day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, encapsulation: 2 });


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var src_app_data_data_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/data-paths */ 7884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_header_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/header.service */ 6690);
/* harmony import */ var src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/translate.service */ 1662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
// Пути к переводам










function HeaderComponent_nav_5_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", lang_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", lang_r4, " ");
} }
function HeaderComponent_nav_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 7)(1, "ul", 8)(2, "li", 9)(3, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field", 11)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-select", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function HeaderComponent_nav_5_Template_mat_select_valueChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.translater.language = $event); })("valueChange", function HeaderComponent_nav_5_Template_mat_select_valueChange_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.translater.languageChange(_r2.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, HeaderComponent_nav_5_mat_option_13_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 5, ctx_r0.headerText.work_des));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 7, ctx_r0.headerText.work), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 9, ctx_r0.headerText.lang), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.translater.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.translater.all_language);
} }
function HeaderComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.headerService.sidebar = !ctx_r8.headerService.sidebar); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 18)(3, "div", 18)(4, "div", 18)(5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", ctx_r1.headerService.sidebar);
} }
class HeaderComponent {
    constructor(headerService, translater) {
        this.headerService = headerService;
        this.translater = translater;
        // Пути для текста
        this.headerText = src_app_data_data_paths__WEBPACK_IMPORTED_MODULE_0__.header;
        headerService.adaptiveOn();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_header_service__WEBPACK_IMPORTED_MODULE_1__.HeaderService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_translate_service__WEBPACK_IMPORTED_MODULE_2__.TranslaterService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 2, consts: [["data-aos", "fade-down", 1, "header"], [1, "header__container"], ["routerLink", "/home", 1, "header__logo"], [1, "img"], ["src", "../../../assets/svg/icon.svg", "alt", "For You"], ["class", "header__nav nav-header", 4, "ngIf"], ["class", "header__burger burger-header", 3, "active", "click", 4, "ngIf"], [1, "header__nav", "nav-header"], [1, "nav-header__list"], [1, "nav-header__item"], ["routerLink", "/works", 3, "title"], ["appearance", "fill"], [3, "value", "valueChange"], ["select", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "header__burger", "burger-header", 3, "click"], [1, "burger-header__box"], [1, "burger-header__stick"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "a", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, HeaderComponent_nav_5_Template, 14, 11, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, HeaderComponent_button_6_Template, 6, 2, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.headerService.adaptive);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.headerService.adaptive);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 1718:
/*!*********************************************************************!*\
  !*** ./src/app/components/home-page/contacts/contacts.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsComponent": () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var src_app_data_slides_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/slides-info */ 9558);
/* harmony import */ var src_app_data_data_paths__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data/data-paths */ 7884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/clipboard */ 6079);
/* harmony import */ var src_app_services_isphone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/isphone.service */ 4063);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
// Contacts

// Text







const _c0 = ["swiper"];
function ContactsComponent_14_ng_template_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div");
} }
function ContactsComponent_14_ng_template_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", null, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactsComponent_14_ng_template_0_ng_template_9_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const slide_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r12.copyThis(slide_r3.tag, _r0)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](slide_r3.tag);
} }
function ContactsComponent_14_ng_template_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 25, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactsComponent_14_ng_template_0_ng_template_11_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const slide_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.copyThis(slide_r3.link, _r0)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", slide_r3.name !== "Gmail" ? slide_r3.link : "mailto:" + slide_r3.link, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, ctx_r10.contacts.link));
} }
function ContactsComponent_14_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactsComponent_14_ng_template_0_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.addClass(_r5, $event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ContactsComponent_14_ng_template_0_div_8_Template, 1, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ContactsComponent_14_ng_template_0_ng_template_9_Template, 4, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ContactsComponent_14_ng_template_0_ng_template_11_Template, 5, 4, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    const slide_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("slide-contacts__icon ", slide_r3.iconClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](slide_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", slide_r3 == null ? null : slide_r3.tag)("ngIfThen", _r7)("ngIfElse", _r9);
} }
function ContactsComponent_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ContactsComponent_14_ng_template_0_Template, 13, 7, "ng-template", 13);
} }
class ContactsComponent {
    constructor(clipboard, isPhone) {
        this.clipboard = clipboard;
        this.isPhone = isPhone;
        // Настройки swiper
        this.slides = src_app_data_slides_info__WEBPACK_IMPORTED_MODULE_0__.slides;
        // текст для перевода
        this.contacts = src_app_data_data_paths__WEBPACK_IMPORTED_MODULE_1__.contacts;
        this.config = {
            slidesPerView: 3,
            spaceBetween: 50,
            centeredSlides: true,
            initialSlide: 1,
            loop: true,
            grabCursor: true,
            touchRatio: 0.7,
            breakpoints: {
                0: {
                    centeredSlides: false,
                    slidesPerView: 1,
                },
                1024: {
                    centeredSlides: true,
                    slidesPerView: 3,
                },
            },
        };
    }
    slideNext() {
        this.swiper.swiperRef.slideNext(300);
    }
    slidePrev() {
        this.swiper.swiperRef.slidePrev(300);
    }
    // Логика компонента
    addClass(el, ev) {
        let isActiveSlide = el.parentElement.classList.contains('swiper-slide-active');
        let isNotActive = !el.classList.contains('active');
        let isCopy = ev.target.classList.contains('copy');
        if ((isActiveSlide && isNotActive) || isCopy)
            el.classList.add('active');
        else
            el.classList.remove('active');
    }
    RemoveClasses() {
        let allSlides = Array.from(document.querySelectorAll('.slide-contacts'));
        let isActive = (el) => {
            return el.classList.contains('active');
        };
        allSlides.map((el) => {
            if (isActive(el))
                el.classList.remove('active');
        });
    }
    copyThis(text, notification) {
        this.clipboard.copy(text);
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 1000);
    }
    ngOnInit() {
        this.isPhone.isPhone();
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_4__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_isphone_service__WEBPACK_IMPORTED_MODULE_2__.IsphoneService)); };
ContactsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], viewQuery: function ContactsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.swiper = _t.first);
    } }, decls: 19, vars: 10, consts: [["id", "contacts", 1, "contacts", "sec"], [1, "notification__copy", "backdrop"], ["notification", ""], [1, "contacts__container"], ["data-aos", "zoom-in", "data-aos-duration", "600", "data-aos-offset", "100", 1, "contacts__title", "title", "backdrop"], [1, "contacts__slider", 3, "mouseover", "mouseout"], [3, "config", "slideChange"], ["swiper", ""], [4, "ngFor", "ngForOf"], [1, "arrow", "next", 3, "click"], [1, "icon-arrowR"], [1, "arrow", "prev", 3, "click"], [1, "icon-arrowL"], ["swiperSlide", ""], [1, "contacts__slide", "slide-contacts", 3, "click"], ["nowslide", ""], ["data-aos", "zoom-in", "data-aos-duration", "600", "data-aos-offset", "100", 1, "slide-contacts__box"], [1, "slide-contacts__name"], [1, "slide-contacts__line"], [1, "slide-contacts__contact"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["tag", ""], ["link", ""], ["copy", ""], [1, "icon-copy", "iconsf", 3, "click"], ["target", "_blank", 3, "href"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1, 2)(3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "div", 4)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseover", function ContactsComponent_Template_div_mouseover_11_listener() { return ctx.isPhone.phone = !ctx.isPhone.phone; })("mouseout", function ContactsComponent_Template_div_mouseout_11_listener() { return ctx.isPhone.phone = !ctx.isPhone.phone; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "swiper", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("slideChange", function ContactsComponent_Template_swiper_slideChange_12_listener() { return ctx.RemoveClasses(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ContactsComponent_14_Template, 1, 0, null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_15_listener() { return ctx.slideNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ContactsComponent_Template_button_click_17_listener() { return ctx.slidePrev(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 6, ctx.contacts.copy), "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 8, ctx.contacts.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("arrows", ctx.isPhone.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, dependencies: [swiper_angular__WEBPACK_IMPORTED_MODULE_5__.SwiperComponent, swiper_angular__WEBPACK_IMPORTED_MODULE_5__.SwiperSlideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 2618:
/*!*************************************************************************!*\
  !*** ./src/app/components/home-page/fullscreen/fullscreen.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullscreenComponent": () => (/* binding */ FullscreenComponent)
/* harmony export */ });
/* harmony import */ var src_app_data_data_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/data-paths */ 7884);
/* harmony import */ var src_app_scripts_typed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/scripts/typed */ 4367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
// Текст




class FullscreenComponent {
    constructor() {
        // Text content
        this.fullscreen = src_app_data_data_paths__WEBPACK_IMPORTED_MODULE_0__.fullscreen;
    }
    ngOnInit() {
        (0,src_app_scripts_typed__WEBPACK_IMPORTED_MODULE_1__.typed)();
    }
}
FullscreenComponent.ɵfac = function FullscreenComponent_Factory(t) { return new (t || FullscreenComponent)(); };
FullscreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FullscreenComponent, selectors: [["app-fullscreen"]], decls: 13, vars: 6, consts: [[1, "fullscreen"], [1, "fullscreen__container"], ["data-aos", "zoom-in", 1, "fullscreen__title", "backdrop"], [1, "nowr"], ["data-aos", "zoom-in", 1, "fullscreen__words", "backdrop", "words-fullscreen"], [1, "words-fullscreen__box"], [1, "words-fullscreen__text", "word"]], template: function FullscreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h1")(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4)(11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 2, ctx.fullscreen.title1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 4, ctx.fullscreen.title2));
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 5986:
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/game/game.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameComponent": () => (/* binding */ GameComponent)
/* harmony export */ });
/* harmony import */ var src_app_data_data_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/data-paths */ 7884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../scripts/game */ 5010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);






function GameComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, ctx_r0.text.lvl), ": ", ctx_r0.lvl, "");
} }
function GameComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r1.text.won), "!");
} }
function GameComponent_mat_grid_tile_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-grid-tile", 10)(1, "div", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GameComponent_mat_grid_tile_12_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.clickOnCard(_r5)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const el_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", i_r4 + "el");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-size", 1.05 - ctx_r2.allItems * 0.015 + "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-size", 1.05 - ctx_r2.allItems * 0.015 + "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](el_r3);
} }
class GameComponent {
    constructor(game) {
        this.game = game;
        // Текст
        this.text = src_app_data_data_paths__WEBPACK_IMPORTED_MODULE_0__.game;
        // параметры
        // уровень
        this.lvl = 1;
        // сетка доски
        this.board = {
            x: 0,
            y: 0,
        };
        // последний элемент по которому кликнули
        this.lastClickEl = null;
        // включение игры
        this.gameEnable = true;
        // Победа
        this.isWon = false;
    }
    //▰▰▰▰▰▰▰▰▰ Методы компонента ▰▰▰▰▰▰▰▰▰▰
    // Метод получения элементов
    getFindItems(lvl) {
        this.findItems = this.game.getElements(lvl);
    }
    // Метод получинеия параметров игрового поля
    getBoardSettings(lvl) {
        // Получаем размер площадки
        this.board = this.game.getTable(lvl);
        // Количесво элементов
        this.allItems = this.board.x * this.board.y;
    }
    // Метод обновления игрового поля
    update(lvl) {
        if (lvl > 10) {
            this.gameEnable = false;
            this.lvl = 10;
            this.won();
            return;
        }
        this.lvl = lvl;
        this.findItems = [];
        this.lastClickEl = null;
        this.allCards = null;
        this.gameEnable = true;
        this.isWon = false;
        setTimeout(() => {
            this.getFindItems(lvl);
            this.getBoardSettings(lvl);
        }, 0);
    }
    // Метод клика по карточке
    clickOnCard(e) {
        // проверка на активность игры / Если карта уже найденная
        if (!this.gameEnable ||
            e.classList.contains('found') ||
            (this.lastClickEl && e.id === this.lastClickEl.id))
            return;
        // Наполняем массив всех карточек
        if (!this.allCards)
            this.allCards = Array.from(document.querySelectorAll('.body-game__card'));
        // затем проверка есть ли уже активная карта
        if (!this.lastClickEl) {
            this.lastClickEl = e;
            e.classList.add('active');
            return;
        }
        //если есть активная карта выполняем череду действий
        // добавляем класс
        e.classList.add('active');
        // проверяем на совпадение
        if (!this.isPairFound(e, this.lastClickEl)) {
            this.clearCard(400);
        }
        // все ли карты найдены
        if (this.isAllFound()) {
            this.update(++this.lvl);
        }
    }
    // найшли ли пару
    isPairFound(lastEL, nowEl) {
        let lastContent = lastEL.querySelector('.body-game__card-back').textContent, nowContent = nowEl.querySelector('.body-game__card-back').textContent;
        if (lastContent === nowContent) {
            [lastEL, nowEl].forEach((el) => {
                el.classList.add('found');
            });
            this.lastClickEl = null;
            return true;
        }
        return false;
    }
    // все ли пары найдены
    isAllFound() {
        let result = true;
        this.allCards.forEach((e) => {
            if (!e.classList.contains('found')) {
                result = false;
            }
        });
        return result;
    }
    // снятие класса активности
    clearCard(delay_ms) {
        this.gameEnable = false;
        setTimeout(() => {
            // удаляем классы через 400мс
            this.allCards.forEach((e) => {
                if (e.classList.contains('active'))
                    e.classList.remove('active');
            });
            // активируем игру
            this.gameEnable = true;
        }, delay_ms);
        this.lastClickEl = null;
    }
    // Все уровни пройдены
    won() {
        this.isWon = true;
    }
    ngOnInit() {
        this.update(this.lvl);
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_scripts_game__WEBPACK_IMPORTED_MODULE_1__.AngularGame)); };
GameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 17, vars: 15, consts: [[1, "game", "sec"], [1, "game__container"], ["data-aos", "zoom-in", "data-aos-duration", "600", "data-aos-offset", "100", 1, "game__title", "title", "backdrop"], [1, "game__body", "body-game"], [1, "body-game__score"], [4, "ngIf"], [1, "body-game__place"], ["rowHeight", "fit", 3, "cols", "gutterSize"], ["data-aos", "zoom-in", 4, "ngFor", "ngForOf"], [1, "body-game__reset", "backdrop", 3, "title", "disabled", "click"], ["data-aos", "zoom-in"], [1, "body-game__card", 3, "id", "click"], ["card", ""], [1, "body-game__card-front"], [1, "body-game__card-back"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, GameComponent_span_8_Template, 3, 4, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, GameComponent_span_9_Template, 3, 3, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "mat-grid-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, GameComponent_mat_grid_tile_12_Template, 7, 6, "mat-grid-tile", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GameComponent_Template_button_click_13_listener() { return ctx.update(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 9, ctx.text.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isWon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isWon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cols", ctx.board.x)("gutterSize", "0.1em");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.findItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 11, ctx.text.resetDesc))("disabled", ctx.lvl == 1 ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 13, ctx.text.reset));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__.MatGridTile, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 8170:
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_preloader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/preloader.service */ 701);
/* harmony import */ var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullscreen/fullscreen.component */ 2618);
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills/skills.component */ 774);
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game.component */ 5986);
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts/contacts.component */ 1718);
/* harmony import */ var _three_d_three_d_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./three-d/three-d.component */ 1254);








class HomePageComponent {
    constructor(route, PreloaderService) {
        this.route = route;
        this.PreloaderService = PreloaderService;
    }
    ngOnInit() {
        // Идем к верху
        window.scrollTo(0, 0);
        // hash
        this.route.fragment.subscribe((fragment) => {
            this.fragment = fragment;
        });
        // показывае preloader
        this.PreloaderService.show_preloader();
    }
    ngAfterViewInit() {
        // scroll to hach block
        try {
            document.querySelector('#' + this.fragment).scrollIntoView();
        }
        catch (e) { }
        // hide preloader in 3d component
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_preloader_service__WEBPACK_IMPORTED_MODULE_0__.PreloaderService)); };
HomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 5, vars: 0, template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-fullscreen")(1, "app-three-d")(2, "app-skills")(3, "app-game")(4, "app-contacts");
    } }, dependencies: [_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_1__.FullscreenComponent, _skills_skills_component__WEBPACK_IMPORTED_MODULE_2__.SkillsComponent, _game_game_component__WEBPACK_IMPORTED_MODULE_3__.GameComponent, _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__.ContactsComponent, _three_d_three_d_component__WEBPACK_IMPORTED_MODULE_5__.ThreeDComponent], encapsulation: 2 });


/***/ }),

/***/ 774:
/*!*****************************************************************!*\
  !*** ./src/app/components/home-page/skills/skills.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkillsComponent": () => (/* binding */ SkillsComponent)
/* harmony export */ });
/* harmony import */ var src_app_data_data_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/data-paths */ 7884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);




function SkillsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7)(3, "div", 8)(4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9)(8, "h2", 10)(9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 11)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-aos", i_r2 % 2 == 0 ? "fade-down-left" : "fade-down-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("skills__skill skill-skills n", i_r2 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 7, skill_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 9, skill_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 11, skill_r1.text));
} }
class SkillsComponent {
    constructor() {
        // Пути до контента
        this.skills = src_app_data_data_paths__WEBPACK_IMPORTED_MODULE_0__.skills;
        this.skillBlocks = [
            this.skills.html,
            this.skills.css,
            this.skills.js,
            this.skills.angular,
        ];
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 8, vars: 4, consts: [[1, "skills", "sec"], [1, "skills__container"], ["data-aos", "zoom-in", "data-aos-duration", "600", "data-aos-offset", "100", 1, "skills__title", "backdrop", "title"], [1, "skills__grid"], ["class", "skills__skill-box", "data-aos-duration", "850", "data-aos-offset", "350", 4, "ngFor", "ngForOf"], ["data-aos-duration", "850", "data-aos-offset", "350", 1, "skills__skill-box"], [1, "skills__empty"], ["data-lag", "1.6"], [1, "skill-skills__name"], [1, "skill-skills__content"], [1, "skill-skills__title"], [1, "skill-skills__text"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SkillsComponent_div_7_Template, 16, 13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, ctx.skills.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.skillBlocks);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 1254:
/*!*******************************************************************!*\
  !*** ./src/app/components/home-page/three-d/three-d.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThreeDComponent": () => (/* binding */ ThreeDComponent)
/* harmony export */ });
/* harmony import */ var src_app_data_data_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/data-paths */ 7884);
/* harmony import */ var src_app_scripts_spline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/scripts/spline */ 9022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_preloader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/preloader.service */ 701);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
// text

// 3d model script




class ThreeDComponent {
    constructor(PreloaderService) {
        this.PreloaderService = PreloaderService;
        this.text = src_app_data_data_paths__WEBPACK_IMPORTED_MODULE_0__.threeD;
    }
    ngOnInit() {
        this.PreloaderService.show_preloader();
        (0,src_app_scripts_spline__WEBPACK_IMPORTED_MODULE_1__.threeD)().then((result) => {
            if (result) {
                this.PreloaderService.hide_preloader();
            }
        });
    }
}
ThreeDComponent.ɵfac = function ThreeDComponent_Factory(t) { return new (t || ThreeDComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_preloader_service__WEBPACK_IMPORTED_MODULE_2__.PreloaderService)); };
ThreeDComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ThreeDComponent, selectors: [["app-three-d"]], decls: 9, vars: 3, consts: [[1, "my3d", "sec"], [1, "my3d__container"], [1, "my3d__body"], ["data-aos", "zoom-in", "data-aos-duration", "600", "data-aos-offset", "100", 1, "my3d__my3d-model"], ["id", "my3d"], ["data-aos", "fade-left", "data-aos-duration", "600", "data-aos-offset", "100", 1, "my3d__title", "title", "backdrop"]], template: function ThreeDComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "canvas", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 1, ctx.text.text));
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 189:
/*!*********************************************************!*\
  !*** ./src/app/components/works/work/work.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkComponent": () => (/* binding */ WorkComponent)
/* harmony export */ });
/* harmony import */ var src_app_data_data_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/data-paths */ 7884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_isphone_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/isphone.service */ 4063);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
// переводы




class WorkComponent {
    constructor(isphone) {
        this.isphone = isphone;
        this.text = src_app_data_data_paths__WEBPACK_IMPORTED_MODULE_0__.works;
        this.needClass = 'active';
    }
    // Клик или наведние на блок
    workActivate(work, e) {
        let eventType = e.type;
        if (eventType === 'mouseover')
            work.classList.add(this.needClass);
        else if (eventType === 'mouseleave')
            work.classList.remove(this.needClass);
        else if (this.phone && eventType === 'click')
            work.classList.toggle(this.needClass);
    }
    ngOnInit() {
        this.phone = this.isphone.isPhone();
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_isphone_service__WEBPACK_IMPORTED_MODULE_1__.IsphoneService)); };
WorkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], inputs: { work: "work" }, decls: 29, vars: 25, consts: [[1, "work", 3, "click", "mouseover", "mouseleave"], [1, "work__box"], ["workbox", ""], [1, "work__images", "front"], [1, "img"], [3, "src", "alt"], [1, "work__images", "back"], [1, "work__backdrop", "backdrop-work"], [1, "backdrop-work__link"], ["target", "_blank", 3, "href"], [1, "work__info", "info-work"], [1, "info-work__box"], [1, "info-work__title"], [1, "info-work__stack"], [1, "info-work__details"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function WorkComponent_Template_article_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.workActivate(_r0, $event)); })("mouseover", function WorkComponent_Template_article_mouseover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.workActivate(_r0, $event)); })("mouseleave", function WorkComponent_Template_article_mouseleave_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.workActivate(_r0, $event)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1, 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14)(22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.work.details.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx.work.mainInfo.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.work.details.preview, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", ctx.work.mainInfo.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.work.details.link, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 15, ctx.text.link));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.work.mainInfo.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 17, ctx.text.stack), ": ", ctx.work.mainInfo.stack.join(", "), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("JS ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 19, ctx.text.lib), ": ", ctx.work.details.jsLib.join(", "), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate4"]("Page speed: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 21, ctx.text.pc), "(", ctx.work.details.pageSpeed.pc, "), ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 23, ctx.text.mobile), "(", ctx.work.details.pageSpeed.mobile, ")");
    } }, dependencies: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4493:
/*!*********************************************************************!*\
  !*** ./src/app/components/works/works-page/works-page.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorksPageComponent": () => (/* binding */ WorksPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var src_app_data_data_paths__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/data-paths */ 7884);
/* harmony import */ var src_app_data_works__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data/works */ 3650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_preloader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/preloader.service */ 701);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../work/work.component */ 189);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 8699);

 // переводы

 // работы














function WorksPageComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r4, " ");
  }
}

const _c0 = function (a0) {
  return {
    "visible": a0
  };
};

function WorksPageComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-work", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const work_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r2.checkWork(work_r5)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("work", work_r5);
  }
}

const _c1 = function () {
  return ["/home"];
};

function WorksPageComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r3.notFound ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 4, ctx_r3.text.notFound) : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, ctx_r3.text.over));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 8, ctx_r3.text.offer), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 10, ctx_r3.text.site));
  }
}

class WorksPageComponent {
  //
  constructor(PreloaderService) {
    this.PreloaderService = PreloaderService; // текст

    this.text = src_app_data_data_paths__WEBPACK_IMPORTED_MODULE_0__.works; // работы

    this.works = src_app_data_works__WEBPACK_IMPORTED_MODULE_1__.WORKS; // Переменные для подсказок

    this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
    this.notFound = false;
  } // наполняем массив подсказками


  fillWorksNames() {
    this.values = this.works.map(e => {
      return e.mainInfo.name;
    });
  } // Проверка работ по поиску


  checkWork(work) {
    let workName = work.mainInfo.name.toLowerCase(),
        workStack = work.mainInfo.stack,
        inputValues = this.search.value.split(','),
        // Значения интупа если через , ; #html,#scss
    haveValue = 0; // Сколько совпадения, должно соответсвовать количестиву параметров
    // Задаем для каждого значения проверку

    for (let value of inputValues) {
      let check = this.checkInputValue(value.trim(), workName, workStack);
      if (check) haveValue++;
    }

    if (this.haveWork()) {
      this.notFound = false;
    } else {
      this.notFound = true;
    }

    return haveValue == inputValues.length;
  } // Ищем работы по значению инпута


  checkInputValue(input, name, stack) {
    if (input === '' || name.includes(input.toLowerCase()) || input.slice(0, 1) === '#' && this.checkStack(stack, input)) {
      return true;
    }

    return false;
  } // Поиск среди стэка


  checkStack(stack, input) {
    let result = false;

    for (let el of stack) {
      let include = el.toLowerCase().includes(input.toLowerCase());

      if (include) {
        result = true;
        break;
      }
    }

    return result;
  } // Проверка, найдены ли работы по поиску


  haveWork() {
    let allWorks = Array.from(document.querySelectorAll('.works__box'));
    allWorks.length -= 1;
    let result = false;

    for (let work of allWorks) {
      if (work.classList.contains('visible')) {
        result = true;
        break;
      }
    }

    return result;
  } // Инициализируем компонент


  ngOnInit() {
    // Идем к верху
    window.scrollTo(0, 0); // Создаем массив подсказок

    this.fillWorksNames(); // добавляем подсказки

    this.filteredOptions = this.search.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(value => this._filter(value || ''))); //preloader

    this.PreloaderService.show_preloader();
  } //


  ngAfterContentChecked() {
    console.clear();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.PreloaderService.hide_preloader();
    }, 0);
  } // Фильтруем значения инпута


  _filter(value) {
    const filterValue = value.toLowerCase();
    return this.values.filter(option => option.toLowerCase().includes(filterValue));
  }

}

WorksPageComponent.ɵfac = function WorksPageComponent_Factory(t) {
  return new (t || WorksPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_preloader_service__WEBPACK_IMPORTED_MODULE_2__.PreloaderService));
};

WorksPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: WorksPageComponent,
  selectors: [["app-works-page"]],
  decls: 21,
  vars: 16,
  consts: [[1, "works"], [1, "works__container"], [1, "works__text"], [1, "works__search", "search-input"], ["appearance", "fill", 1, "search-input__input-box"], ["type", "text", "aria-label", "Number", "matInput", "", 1, "search-input__input", 3, "placeholder", "formControl", "matAutocomplete"], ["autoActiveFirstOption", ""], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "works__workList"], ["class", "works__box", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "works__box", "visible"], ["class", "works__over", 4, "ngIf"], [3, "value"], [1, "works__box", 3, "ngClass"], [3, "work"], [1, "works__over"], ["fragment", "contacts", 3, "routerLink"]],
  template: function WorksPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 3)(7, "mat-form-field", 4)(8, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-autocomplete", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, WorksPageComponent_mat_option_15_Template, 2, 2, "mat-option", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, WorksPageComponent_div_18_Template, 2, 4, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, WorksPageComponent_div_20_Template, 12, 13, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 8, ctx.text.text));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 10, ctx.text.inputTitle));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 12, ctx.text.inputPlaceholder))("formControl", ctx.search)("matAutocomplete", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 14, ctx.filteredOptions));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.works);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.works.length < 4);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _work_work_component__WEBPACK_IMPORTED_MODULE_3__.WorkComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3Jrcy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 7884:
/*!************************************!*\
  !*** ./src/app/data/data-paths.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contacts": () => (/* binding */ contacts),
/* harmony export */   "fullscreen": () => (/* binding */ fullscreen),
/* harmony export */   "game": () => (/* binding */ game),
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "skills": () => (/* binding */ skills),
/* harmony export */   "threeD": () => (/* binding */ threeD),
/* harmony export */   "works": () => (/* binding */ works)
/* harmony export */ });
//▰▰▰▰▰▰▰▰▰▰▰▰ paths header ▰▰▰▰▰▰▰▰▰▰▰▰▰
const header = {
    work: 'HEADER.TEXT.LINKS.0.WORK',
    work_des: 'HEADER.TEXT.LINKS.0.DESCRIPTION',
    lang: 'HEADER.TEXT.LANG',
};
//▰▰▰▰▰▰▰▰▰▰▰▰ 3d ▰▰▰▰▰▰▰▰▰▰▰▰▰
const threeD = {
    text: 'MAIN.3D.TEXT',
};
//▰▰▰▰▰▰▰▰▰▰▰▰ paths main block ▰▰▰▰▰▰▰▰▰▰▰▰▰
const fullscreen = {
    title1: 'MAIN.FULLSCREEN.TITLE-PART1',
    title2: 'MAIN.FULLSCREEN.TITLE-PART2',
};
//▰▰▰▰▰▰▰▰▰▰▰▰ paths skills block▰▰▰▰▰▰▰▰▰▰▰▰▰
const skills = {
    title: 'MAIN.SKILLS.TITLE',
    html: {
        name: 'MAIN.SKILLS.HTML.NAME',
        title: 'MAIN.SKILLS.HTML.TITLE',
        text: 'MAIN.SKILLS.HTML.TEXT',
    },
    css: {
        name: 'MAIN.SKILLS.CSS.NAME',
        title: 'MAIN.SKILLS.CSS.TITLE',
        text: 'MAIN.SKILLS.CSS.TEXT',
    },
    js: {
        name: 'MAIN.SKILLS.JS.NAME',
        title: 'MAIN.SKILLS.JS.TITLE',
        text: 'MAIN.SKILLS.JS.TEXT',
    },
    angular: {
        name: 'MAIN.SKILLS.ANGULAR.NAME',
        title: 'MAIN.SKILLS.ANGULAR.TITLE',
        text: 'MAIN.SKILLS.ANGULAR.TEXT',
    },
};
//▰▰▰▰▰▰▰▰▰▰▰▰ paths game block▰▰▰▰▰▰▰▰▰▰▰▰▰
const game = {
    title: 'MAIN.ANGULAR-GAME.TITLE',
    lvl: 'MAIN.ANGULAR-GAME.LVL',
    reset: 'MAIN.ANGULAR-GAME.RESET',
    resetDesc: 'MAIN.ANGULAR-GAME.RESET-DESC',
    won: 'MAIN.ANGULAR-GAME.WON',
};
//▰▰▰▰▰▰▰▰▰▰▰▰ paths contacts block▰▰▰▰▰▰▰▰▰▰▰▰▰
const contacts = {
    title: 'MAIN.CONTACTS.TITLE',
    link: 'MAIN.CONTACTS.LINK',
    copy: 'MAIN.CONTACTS.COPY',
};
//▰▰▰▰▰▰▰▰▰▰▰▰ Works ▰▰▰▰▰▰▰▰▰▰▰▰▰
const works = {
    text: 'WORKS.TEXT',
    inputTitle: 'WORKS.INPUT.TITLE',
    inputPlaceholder: 'WORKS.INPUT.PLACEHOLDER',
    link: 'WORKS.LINK',
    stack: 'WORKS.STACK',
    over: 'WORKS.WORK_OVER',
    lib: 'WORKS.JS_LIB',
    offer: 'WORKS.OFFER',
    site: 'WORKS.SITE',
    notFound: 'WORKS.NOT_FOUND',
    pc: 'WORKS.PAGE_SPEED.PC',
    mobile: 'WORKS.PAGE_SPEED.MOBILE',
};


/***/ }),

/***/ 9558:
/*!*************************************!*\
  !*** ./src/app/data/slides-info.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slides": () => (/* binding */ slides)
/* harmony export */ });
const slides = [
    {
        name: 'Discord',
        tag: 'URIE#7242',
        iconClass: 'icon-discord',
    },
    {
        name: 'Telegram',
        link: 'https://t.me/Web_Dev_User',
        iconClass: 'icon-telegram',
    },
    {
        name: 'Kwork',
        link: 'https://kwork.ru/user/webdenisjob',
        iconClass: 'icon-briefcase',
    },
    {
        name: 'Gmail',
        link: 'webdenis.job@gmail.com',
        iconClass: 'icon-mail',
    },
    {
        name: 'Habr',
        link: 'https://freelance.habr.com/freelancers/Denis_Web_',
        iconClass: 'icon-briefcase',
    },
];


/***/ }),

/***/ 3650:
/*!*******************************!*\
  !*** ./src/app/data/works.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WORKS": () => (/* binding */ WORKS)
/* harmony export */ });
const WORKS = [
    {
        id: 1,
        mainInfo: {
            name: 'ACME',
            stack: ['#html', '#scss', '#javascript'],
        },
        details: {
            jsLib: ['chart.js', 'anime.js', 'swiper.js', 'chess.js', 'chessboard.js'],
            img: 'https://www-denis-www.github.io/myImg/ACME.jpg',
            preview: 'https://www-denis-www.github.io/myImg/acme-preview.jpg',
            pageSpeed: {
                pc: 98,
                mobile: 86,
            },
            link: 'https://www-denis-www.github.io/ACME/',
        },
    },
    {
        id: 2,
        mainInfo: {
            name: 'Supabase',
            stack: ['#html', '#scss', '#javascript'],
        },
        details: {
            jsLib: ['swiper.js'],
            imgSrc: '../../../../assets/img/ACME.jpg',
            img: 'https://www-denis-www.github.io/myImg/Supabase.jpg',
            preview: 'https://www-denis-www.github.io/myImg/supabase-preview.jpg',
            pageSpeed: {
                pc: 100,
                mobile: 91,
            },
            link: 'https://www-denis-www.github.io/Supabase/',
        },
    },
    {
        id: 3,
        mainInfo: {
            name: 'Josefine',
            stack: ['#html', '#scss', '#javascript'],
        },
        details: {
            jsLib: ['swiper.js'],
            img: 'https://www-denis-www.github.io/myImg/Josefine.jpg',
            preview: 'https://www-denis-www.github.io/myImg/josefine-preview.jpg',
            pageSpeed: {
                pc: 98,
                mobile: 89,
            },
            link: 'https://www-denis-www.github.io/Josefine/',
        },
    },
];


/***/ }),

/***/ 5475:
/*!********************************!*\
  !*** ./src/app/scripts/aos.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aosInit": () => (/* binding */ aosInit)
/* harmony export */ });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ 7490);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);

function aosInit() {
    aos__WEBPACK_IMPORTED_MODULE_0__.init();
}


/***/ }),

/***/ 5010:
/*!*********************************!*\
  !*** ./src/app/scripts/game.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularGame": () => (/* binding */ AngularGame)
/* harmony export */ });
// random array перемешивает массив
function arrayRandom(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// Наполнение массива для игры
function fillArray(count, fill) {
    let fillArr = [];
    filling(count, fill);
    function filling(count, fill) {
        arrayRandom(fill);
        if (fill.length < count) {
            fillArr = fillArr.concat(fill);
            count -= fill.length;
            // если элементов меньше чем полей, то по новой
            filling(count, fill);
        }
        else {
            fillArr = fillArr.concat(fill.slice(0, count));
        }
    }
    return fillArr;
}
// Все размеры поля
let tableslvl = [
    { x: 2, y: 2 } /*1 lvl*/,
    { x: 3, y: 2 } /*2 lvl*/,
    { x: 4, y: 2 } /*3 lvl*/,
    { x: 4, y: 3 } /*4 lvl*/,
    { x: 4, y: 3 } /*5 lvl*/,
    { x: 4, y: 4 } /*6 lvl*/,
    { x: 4, y: 4 } /*7 lvl*/,
    { x: 4, y: 4 } /*8 lvl*/,
    { x: 4, y: 5 } /*9 lvl*/,
    { x: 6, y: 6 } /*10 lvl*/,
];
// класс игры
class AngularGame {
    constructor() {
        // Элементы поиска
        this.items = [
            '🍉',
            '🥕',
            '🍒',
            '🥝',
            '🍍',
            '🥥',
            '🍋',
            '🥩',
            '🍔',
            '🍗',
            '❔',
            '❓',
            '🎃',
            '🏐',
            '💻',
            '🔪',
            '💣',
            '🔫',
        ];
    }
    // Метод получения массива элементов поиска
    getElements(lvl) {
        //  Маштаб поля на нынешнем лвл-е
        let nowTable = tableslvl[lvl - 1];
        // Количесво пар при этом маштабе
        let pairCount = (nowTable.x * nowTable.y) / 2;
        // Массив который будет отправлен
        let sendArr = [];
        // Получаем массив предметов поиска
        sendArr = fillArray(pairCount, this.items);
        // Повторяем массив для получения пар
        sendArr = sendArr.concat(sendArr);
        // Возвращаем перемешаный массив
        arrayRandom(sendArr);
        return sendArr;
    }
    getTable(lvl) {
        return tableslvl[lvl - 1];
    }
}


/***/ }),

/***/ 9011:
/*!**************************************!*\
  !*** ./src/app/scripts/preloader.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preloaderInit": () => (/* binding */ preloaderInit)
/* harmony export */ });
// количество палочек
let sticks_count = 25;
// единаци измерения
let unit;
// класс элементу куда будем добавлять палочки
let preloaderClass = '.preloader__box';
// перемещение по X
let transformX;
// Размеры окна
let windowSize;
// рандомное число ЦЕЛОЕ!
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
// получение единицы измерения относительно большей длины
function getMoreUnit() {
    let unit = '';
    if (windowSize.w > windowSize.h)
        unit = 'vw';
    else
        unit = 'vh';
    return unit;
}
// получаем Перемешение x по теореме пифагора; гипотенуза
function getTransfromX(x, y) {
    return Math.round(Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)));
}
// создание палочки
function stickCreater(delay, transformY, unit) {
    let el = document.createElement('div');
    el.classList.add('stick');
    el.style.setProperty('--delay', delay + 'ms');
    el.style.setProperty('--transformY', transformY + unit);
    el.style.setProperty('--transformX', transformX);
    return el;
}
// Добавляем палочки
function addSticks(elClass, count) {
    let sticks__box = document.querySelector(elClass);
    for (let i = 0; i < count; i++) {
        let randomDelay = randomInteger(0, sticks_count * 100);
        let randomTransfromY = randomInteger(-60, 60);
        let stick = stickCreater(randomDelay, randomTransfromY, unit);
        sticks__box.appendChild(stick);
    }
}
// удаляем все палочки
function sticks_remove() {
    let all_sticks = Array.from(document.querySelector(preloaderClass).querySelectorAll('.stick'));
    let stick_perant = document.querySelector(preloaderClass);
    for (let stick of all_sticks) {
        stick_perant.removeChild(stick);
    }
}
// Инициализация прелодера; Экспортируем
function preloaderInit() {
    sticks_remove();
    // добавляем размеры окна
    windowSize = {
        w: window.innerWidth,
        h: window.innerHeight,
    };
    // получаем единицу измерения
    unit = getMoreUnit();
    // Получаем перемещение по x
    transformX = getTransfromX(windowSize.w, windowSize.h) + 'px';
    // добавляем палочки
    addSticks(preloaderClass, sticks_count);
}


/***/ }),

/***/ 9022:
/*!***********************************!*\
  !*** ./src/app/scripts/spline.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "threeD": () => (/* binding */ threeD)
/* harmony export */ });
/* harmony import */ var C_WWW_Angular_portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _splinetool_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splinetool/runtime */ 8518);

// spline

function threeD() {
  return _threeD.apply(this, arguments);
}

function _threeD() {
  _threeD = (0,C_WWW_Angular_portfolio_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
    const canvas = document.getElementById('my3d');
    let isLoad = false;

    if (canvas) {
      const app = new _splinetool_runtime__WEBPACK_IMPORTED_MODULE_1__.Application(canvas);
      yield app.load('https://prod.spline.design/8BD8t40kZSfHrkwa/scene.splinecode').then(() => {
        isLoad = true;
      }, err => {
        isLoad = false;
      });
    }

    return isLoad;
  });
  return _threeD.apply(this, arguments);
}

/***/ }),

/***/ 4367:
/*!**********************************!*\
  !*** ./src/app/scripts/typed.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typed": () => (/* binding */ typed)
/* harmony export */ });
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ 6265);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_0__);

// typed
function typed() {
    let options = {
        strings: ['', 'web', 'html', 'css', 'js', 'git', 'ts', 'and', 'more'],
        typeSpeed: 200,
        backSpeed: 200,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        backDelay: 800,
        smartBackspace: false,
    };
    new (typed_js__WEBPACK_IMPORTED_MODULE_0___default())('.word', options);
}


/***/ }),

/***/ 6690:
/*!********************************************!*\
  !*** ./src/app/services/header.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderService": () => (/* binding */ HeaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);


class HeaderService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.adaptive = false;
        this.sidebar = false;
    }
    adaptiveOn() {
        this.breakpointObserver
            .observe(['(max-width: 600px)'])
            .subscribe((state) => {
            if (state.matches) {
                this.adaptive = true;
            }
            else {
                this.adaptive = false;
                this.sidebar = false;
            }
        });
    }
}
HeaderService.ɵfac = function HeaderService_Factory(t) { return new (t || HeaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver)); };
HeaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeaderService, factory: HeaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4063:
/*!*********************************************!*\
  !*** ./src/app/services/isphone.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsphoneService": () => (/* binding */ IsphoneService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);


class IsphoneService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
    }
    isPhone() {
        this.breakpointObserver
            .observe(['(max-width: 1024px)'])
            .subscribe((state) => {
            if (state.matches) {
                this.phone = true;
            }
            else {
                this.phone = false;
            }
        });
        return this.phone;
    }
    ngOnInit() {
        this.isPhone();
    }
}
IsphoneService.ɵfac = function IsphoneService_Factory(t) { return new (t || IsphoneService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver)); };
IsphoneService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IsphoneService, factory: IsphoneService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 701:
/*!***********************************************!*\
  !*** ./src/app/services/preloader.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreloaderService": () => (/* binding */ PreloaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PreloaderService {
    constructor() {
        this.load = false;
        this.preloader = document.querySelector('#preloader');
    }
    show_preloader() {
        this.load = true;
        this.preloader.classList.add('visible');
    }
    hide_preloader() {
        this.load = false;
        this.preloader.classList.remove('visible');
    }
    ngOnInit() { }
}
PreloaderService.ɵfac = function PreloaderService_Factory(t) { return new (t || PreloaderService)(); };
PreloaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PreloaderService, factory: PreloaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1662:
/*!***********************************************!*\
  !*** ./src/app/services/translate.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslaterService": () => (/* binding */ TranslaterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 8699);


class TranslaterService {
    constructor(translate) {
        this.translate = translate;
        //Все языки
        this.all_language = ['EN', 'RU'];
        // Язык / По дефолту EN
        this.language = 'EN';
        this.definitionLang(location.hash);
        /*Ставлю язык*/ this.languageChange(this.language);
    }
    // Определение языка по hash
    definitionLang(hash) {
        if (hash === '#EN')
            this.language = 'EN';
        if (hash === '#RU')
            this.language = 'RU';
    }
    // Метод смены языка
    languageChange(lang) {
        this.translate.use(lang.toLowerCase());
        location.hash = lang.toUpperCase();
    }
}
TranslaterService.ɵfac = function TranslaterService_Factory(t) { return new (t || TranslaterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
TranslaterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslaterService, factory: TranslaterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map