(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Portfolio_Website\kunal-portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var t_writer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! t-writer.js */ "Wgzd");
/* harmony import */ var t_writer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(t_writer_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-scrollreveal */ "faXT");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");





const _c0 = function () { return { reset: true }; };
class AppComponent {
    constructor() {
        this.title = 'kunal-portfolio';
        this.visiterCounter = "Yallaling";
    }
    ngOnInit() {
        var counter;
        counter = Number(localStorage.getItem('visiter_count'));
        //console.log(counter);
        counter = counter + 1;
        localStorage.setItem('visiter_count', counter);
        this.visiterCounter = counter;
        //console.log(localStorage.getItem('visiter_count'));
        aos__WEBPACK_IMPORTED_MODULE_0__["init"]();
        const target = document.querySelector('.home__title');
        const writer = new t_writer_js__WEBPACK_IMPORTED_MODULE_1___default.a(target, {
            loop: true,
            typeColor: 'black'
        });
        writer
            .strings(400, "Senior Software Engineer", "Full Stack Developer", "ML/AI Enthusiast")
            .start();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 291, vars: 8, consts: [[1, "l-header"], [1, "nav", "bd-grid"], ["src", "assets/img/logo.jpg", "alt", "", "width", "45", "height", "30", 1, "nav__logo"], ["id", "nav-menu", 1, "nav__menu"], [1, "nav__list"], [1, "nav__item"], ["href", "#home", 1, "nav__link"], ["href", "#about", 1, "nav__link"], ["href", "#skills", 1, "nav__link"], ["href", "#work", 1, "nav__link"], ["href", "#contact", 1, "nav__link"], ["id", "nav-toggle", 1, "nav__toggle"], [1, "bx", "bx-menu"], [1, "l-main"], ["div", "", 1, "item", 3, "ngsReveal"], ["id", "home", 1, "home", "bd-grid"], [1, "home__data"], [1, "home__title"], [1, "home__title-color"], ["href", "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=kunalshankar150@gmail.com&tf=1", "target", "_blank", 1, "button"], [1, "home__social"], ["href", "https://www.linkedin.com/in/kunal-shankar-7a41a1190", "target", "_blank", 1, "home__social-icon"], [1, "bx", "bxl-linkedin"], ["href", "https://twitter.com/kunal_shankar17", "target", "_blank", 1, "home__social-icon"], [1, "bx", "bxl-twitter"], ["href", "https://github.com/kunalshankar150", "target", "_blank", 1, "home__social-icon"], [1, "bx", "bxl-github"], ["id", "hp_imgs", "src", "assets/img/4.gif", "alt", "", "width", "500", "height", "600"], [1, "itemset", 3, "ngsRevealSet", "ngsInterval", "ngsSelector"], ["id", "about", 1, "about", "section"], ["item", "", "item1", ""], [1, "section-title", "font-weight-bold", 2, "text-align", "center"], [1, "about__container", "bd-grid"], [1, "about__img,", "item", "item2"], ["src", "assets/img/kunal1.jpg", "alt", ""], [1, "item", "item3"], [1, "h1-responsive", "font-weight-bold", "my-5"], [2, "text-align", "justify"], [1, "font-weight-bold"], ["id", "skills", 1, "skills", "section"], [1, "section-title", "font-weight-bold"], [1, "item", "item4"], [1, "skills__container", "bd-grid"], [1, "skills__subtitle", "font-weight-bold"], [1, "skills__text", 2, "text-align", "justify"], [1, "skills__data"], [1, "item", "item5"], [1, "skills__names"], [1, "bx", "bxl-html5", "skills__icon"], [1, "skills__name"], [1, "item", "item6"], [1, "item", "item7"], [1, "item", "item8"], [1, "item", "item9"], [1, "item", "item10"], [1, "item", "item11"], [1, "item", "ite12"], ["src", "assets/img/mm.png", "alt", "", "alt", "", 1, "skills__img"], ["id", "work", 1, "work", "section"], [1, "font-weight", "my-3", 2, "text-align", "center"], [1, "work__container", "bd-grid"], [1, "item", "item14"], [1, "work__img"], [1, "font-weight-bold", "my-3", 2, "text-align", "center"], ["src", "assets/img/work1.png", "alt", ""], [1, "item", "item15"], ["src", "assets/img/work2.jpg", "alt", ""], [1, "item", "item16"], ["src", "assets/img/work3.png", "alt", ""], [1, "item", "item17"], ["src", "assets/img/work6.jpg", "alt", ""], [1, "item", "item18"], ["src", "assets/img/work5.jpg", "alt", ""], [1, "item", "item19"], ["src", "assets/img/work4.jpg", "alt", ""], [1, "text-center", "my-5"], [1, "testimonial-carousel", 3, "isControls", "animation"], [1, "testimonial", "container", "text-center"], [1, "avatar", "mx-auto", "mb-4"], ["src", "assets/img/r3.jpg", "alt", "First sample avatar image", 1, "rounded-circle", "img-fluid"], ["fas", "", "icon", "quote-left"], ["fas", "", "icon", "quote-right"], [1, "font-weight-bold", "my-3"], ["fas", "", "icon", "star", 1, "blue-text"], ["fas", "", "icon", "star-half", 1, "blue-text"], ["src", "assets/img/r1.jpg", "alt", "Second sample avatar image", 1, "rounded-circle", "img-fluid"], ["src", "assets/img/r2.jpg", "alt", "Third sample avatar image", 1, "rounded-circle", "img-fluid"], ["id", "contact", 1, "footer"], [1, "footer__title"], ["src", "assets/img/logo.jpg", "alt", "", "width", "55", "height", "30", 1, "nav__logo"], [1, "footer__social"], ["href", "#", 1, "footer__icon"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-instagram"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "main", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Hi,");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "I'am ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Kunal Shankar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Get In Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "section", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "h2", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "I'am Kunal Shankar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "I have completed my Bachelors of Engineering in Information Technology from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "b", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "RTMNU University");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, ". Currently, I am pursuing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Masters of Science in Computer Science with Data Science Concentration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, " from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "b", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Fitchburg State University");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, ". I have ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "b", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "5 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " of IT experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " working in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " IT Industry for a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "b", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "fortune 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, " company. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "section", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "Profesional Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, " *An organized, detail-oriented, and conscientious self-starter, able to strategize and prioritize effectively to accomplish multiple tasks.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " *Over all 5 years of IT experience with 4 Years of Experience in Robotic Process Automation (RPA) in a fortune 100 company.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, " *Experienced in a fast paced Agile Development Environment including Scrum, and Extreme Programming, Integration, Implementation and Maintenance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, " *Experience in building RPA(Robotics Process Automation) solutions using UiPath, Automation Anywhere.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, " *Extensive Knowledge in UiPath, Automation Anywhere tool.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, " *Experience in technologies/framework- Java/J2EE, Spring, Micro services, Hibernate, Angular 5, JavaScript, HTML, CSS, REST Web Service, XML, JSON, C#, Python.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, " *Experience in building Machine Learning models.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, " *Experience in Data Visualization. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](121, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "RPA(UiPath & Automation Anywhere)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](133, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](139, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "Angular 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](157, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](163, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "SQL & NoSQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](168, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "section", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "Areas Of Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "h6", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "Take a look at some of the things I love working on.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "h6", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "Robotics Process Automation(RPA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](181, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "h6", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "h6", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, "Model Deployment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](191, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "h6", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "Computer Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](196, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "h6", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "Full Stack Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](201, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "h6", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "Data Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](206, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "section", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "mdb-carousel", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "mdb-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](213, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](214, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](215, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](217, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](219, "mdb-icon", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](220, " Kunal Shankar is one of the most valuable people I have ever met. Both smart and professional. Experienced, deadline oriented and intelligent person. Highly recommended. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](221, "mdb-icon", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "h4", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223, "Arun Annaldas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "h6", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](225, "Team Lead at TIAA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](226, "mdb-icon", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](227, "mdb-icon", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](228, "mdb-icon", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](229, "mdb-icon", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](230, "mdb-icon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "mdb-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](233, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](234, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](235, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](237, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](239, "mdb-icon", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, " Kunal Shankar was a fantastic person to work with, and is not only a multi-skilled and insightful colleague, but also an inspiring strategist. Very good person. Great employee with a very strong problem solving skills. Kunal Shankar is an asset to any company. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](241, "mdb-icon", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "h4", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](243, "Dr. Joseph");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "h6", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245, "Senior Director at CDAC");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](246, "mdb-icon", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](247, "mdb-icon", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](248, "mdb-icon", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](249, "mdb-icon", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](250, "mdb-icon", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "mdb-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](253, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](254, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](255, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](257, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](258, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](259, "mdb-icon", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](260, " Kunal worked with me in many tools and technologies starting from RPA to open-source languages like Java, Spring, Angular. He is exceptional and can do things real quick and with ease. I remembered he built a full stack application for our business folks in no mean time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](261, "mdb-icon", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "h4", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](263, "Rakesh Sharma");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "h6", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](265, "Associate Senior Software Developer at TIAA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](266, "mdb-icon", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](267, "mdb-icon", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](268, "mdb-icon", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](269, "mdb-icon", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](270, "mdb-icon", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "footer", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](272, "p", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](273, "Kunal Shankar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](274, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](275, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](276, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](277, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](278, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](279, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](280, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](281, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](282, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "a", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](284, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](285, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](286, "Phone: +1(857)268-8299");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](288, "Email: kunalshankar150@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](289, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](290, "\u00A9 2021 copyright all right reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngsReveal", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngsRevealSet", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0))("ngsInterval", 30)("ngsSelector", ".item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](162);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isControls", false)("animation", "slide");
    } }, directives: [ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_3__["NgsRevealDirective"], ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_3__["NgsRevealSetDirective"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["SlideComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FasDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-scrollreveal */ "faXT");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_1__["NgsRevealModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ngx_scrollreveal__WEBPACK_IMPORTED_MODULE_1__["NgsRevealModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBRootModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map