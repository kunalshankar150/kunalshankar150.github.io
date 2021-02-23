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
            .strings(400, "Software Developer", "Certified RPA Developer", "Full Stack Developer", "Machine Learning Enthusiast")
            .start();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 290, vars: 8, consts: [[1, "l-header"], [1, "nav", "bd-grid"], ["src", "assets/img/logo.jpg", "alt", "", "width", "45", "height", "30", 1, "nav__logo"], ["id", "nav-menu", 1, "nav__menu"], [1, "nav__list"], [1, "nav__item"], ["href", "#home", 1, "nav__link", "active"], ["href", "#about", 1, "nav__link"], ["href", "#skills", 1, "nav__link"], ["href", "#work", 1, "nav__link"], ["href", "#contact", 1, "nav__link"], ["id", "nav-toggle", 1, "nav__toggle"], [1, "bx", "bx-menu"], [1, "l-main"], ["div", "", 1, "item", 3, "ngsReveal"], ["id", "home", 1, "home", "bd-grid"], [1, "home__data"], [1, "home__title"], [1, "home__title-color"], ["href", "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=kunalshankar150@gmail.com&tf=1", "target", "_blank", 1, "button"], [1, "home__social"], ["href", "https://www.linkedin.com/in/kunal-shankar-7a41a1190", "target", "_blank", 1, "home__social-icon"], [1, "bx", "bxl-linkedin"], ["href", "https://twitter.com/kunal_shankar17", "target", "_blank", 1, "home__social-icon"], [1, "bx", "bxl-twitter"], ["href", "https://github.com/kunalshankar150", "target", "_blank", 1, "home__social-icon"], [1, "bx", "bxl-github"], ["id", "hp_imgs", "src", "assets/img/4.gif", "alt", "", "width", "500", "height", "600"], [1, "itemset", 3, "ngsRevealSet", "ngsInterval", "ngsSelector"], ["id", "about", 1, "about", "section"], ["item", "", "item1", ""], [1, "section-title", "font-weight-bold", 2, "text-align", "center"], [1, "about__container", "bd-grid"], [1, "about__img,", "item", "item2"], ["src", "assets/img/kunal1.jpg", "alt", ""], [1, "item", "item3"], [1, "h1-responsive", "font-weight-bold", "my-5"], [2, "text-align", "justify"], [1, "font-weight-bold"], ["id", "skills", 1, "skills", "section"], [1, "section-title", "font-weight-bold"], [1, "item", "item4"], [1, "skills__container", "bd-grid"], [1, "skills__subtitle", "font-weight-bold"], [1, "skills__text", 2, "text-align", "justify"], [1, "skills__data"], [1, "item", "item5"], [1, "skills__names"], [1, "bx", "bxl-html5", "skills__icon"], [1, "skills__name"], [1, "item", "item6"], [1, "item", "item7"], [1, "item", "item8"], [1, "item", "item9"], [1, "item", "item10"], [1, "item", "item11"], [1, "item", "item12"], [1, "item", "item13"], ["src", "assets/img/mm.png", "alt", "", "alt", "", 1, "skills__img"], ["id", "work", 1, "work", "section"], [1, "font-weight", "my-3", 2, "text-align", "center"], [1, "work__container", "bd-grid"], [1, "item", "item14"], [1, "work__img"], [1, "font-weight-bold", "my-3", 2, "text-align", "center"], ["src", "assets/img/work1.png", "alt", ""], [1, "item", "item15"], ["src", "assets/img/work2.jpg", "alt", ""], [1, "item", "item16"], ["src", "assets/img/work3.png", "alt", ""], [1, "item", "item17"], ["src", "assets/img/work6.jpg", "alt", ""], [1, "item", "item18"], ["src", "assets/img/work5.jpg", "alt", ""], [1, "item", "item19"], ["src", "assets/img/work4.jpg", "alt", ""], [1, "text-center", "my-5"], [1, "testimonial-carousel", 3, "isControls", "animation"], [1, "testimonial", "container", "text-center"], [1, "avatar", "mx-auto", "mb-4"], ["src", "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg", "alt", "First sample avatar image", 1, "rounded-circle", "img-fluid"], ["fas", "", "icon", "quote-left"], ["fas", "", "icon", "quote-right"], [1, "font-weight-bold", "my-3"], ["fas", "", "icon", "star", 1, "blue-text"], ["fas", "", "icon", "star-half", 1, "blue-text"], ["src", "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg", "alt", "Second sample avatar image", 1, "rounded-circle", "img-fluid"], ["src", "https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg", "alt", "Third sample avatar image", 1, "rounded-circle", "img-fluid"], ["id", "contact", 1, "footer"], [1, "footer__title"], ["src", "assets/img/logo.jpg", "alt", "", "width", "55", "height", "30", 1, "nav__logo"], [1, "footer__social"], ["href", "#", 1, "footer__icon"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-instagram"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, ". Prior to that i have rich ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "b", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "5 years");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " of experience in Software Development in a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "b", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "fortune 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " company. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " I believe that automation will bring a revolutionary change in how we live our lives and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "b", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "RPA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "b", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Machine learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "b", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "deep learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " is the future of automation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "section", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "h3", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Profesional Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "An organized, detail-oriented, and conscientious self-starter, able to strategize and prioritize effectively to accomplish multiple tasks.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " * Over all 5 years of IT experience with 4 Years of Experience in Robotic Process Automation (RPA) in a fortune 100 company.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " * Experienced in a fast paced Agile Development Environment including Scrum, and Extreme Programming, Integration, Implementation and Maintenance.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, " * Experience in building RPA(Robotics Process Automation) solutions using UiPath, Automation Anywhere.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, " * Extensive Knowledge in UiPath, Automation Anywhere tool.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, " * Experience on technologies/framework - Java/J2EE, Spring, Micro services, Hibernate, Angular 5, JavaScript, HTML, CSS, REST Web Service, XML, JSON, C#, Python.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, " * Experience in building Machine Learning models.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, " * Experience in Data Visualization. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "RPA(UiPath & Automation Anywhere)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "RPA(UiPath & Automation Anywhere)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](144, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Java");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "C#");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Angular 7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](162, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](167, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "section", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](171, "Areas Of Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "h6", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, "Take a look at some of the things I love working on.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "Robotics Process Automation(RPA)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](180, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184, "Machine Learning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](185, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "Model Deployment");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](190, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "Computer Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](195, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "Full Stack Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](200, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "Data Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](205, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "section", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "mdb-carousel", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "mdb-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](212, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](213, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](214, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](216, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](218, "mdb-icon", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quoeos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](220, "mdb-icon", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "h4", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](222, "Anna Deynah");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "h6", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "Founder at ET Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](225, "mdb-icon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](226, "mdb-icon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](227, "mdb-icon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](228, "mdb-icon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](229, "mdb-icon", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "mdb-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](232, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](233, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](234, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](236, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](238, "mdb-icon", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](239, "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](240, "mdb-icon", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "h4", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](242, "Maria Kate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "h6", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](244, "Photographer at Studio LA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](245, "mdb-icon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](246, "mdb-icon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](247, "mdb-icon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](248, "mdb-icon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](249, "mdb-icon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "mdb-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](252, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](253, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](254, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](255, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](256, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](258, "mdb-icon", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](259, " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](260, "mdb-icon", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "h4", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](262, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "h6", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](264, "Front-end Developer in NY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](265, "mdb-icon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](266, "mdb-icon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](267, "mdb-icon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](268, "mdb-icon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](269, "mdb-icon", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "footer", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](271, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](272, "Kunal Shankar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](273, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](274, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](275, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](276, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](278, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](279, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](281, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "a", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](283, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](284, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](285, "Phone: +1(857)268-8299");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](287, "Email: kunalshankar150@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](288, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](289, "\u00A9 2021 copyright all right reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngsReveal", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngsRevealSet", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0))("ngsInterval", 30)("ngsSelector", ".item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](161);
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