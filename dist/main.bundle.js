webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<ng-template #rt let-r=\"result\" let-t=\"term\">\r\n    <img [src]=\"'./assets/Slices/' + r['poster-image']\" width=\"16\">\r\n    {{ r.name}}\r\n</ng-template>\r\n<div class=\"container-fluid root-container\" style=\"text-align:center\">\r\n  <header class=\"title-block\">\r\n    <span class=\"\"></span>\r\n    <span>{{title}}</span>\r\n    <span class=\"pull-rght\"></span>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"search movies...\" [(ngModel)]=\"searchTerm\" [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\" />\r\n  </header>\r\n  <main class=\"videos-list-block\">\r\n    <div *ngFor=\"let video of videos\" class=\"col-md-4 col-xs-4 video-block\">\r\n      <figure class=\"figure\" title=\"{{video.name}}\">\r\n        <img class=\"video-poster\" src=\"./assets/Slices/{{video['poster-image']}}\" />\r\n\r\n        <figcaption class=\"figure-caption video-title\">{{video.name}}</figcaption>\r\n      </figure>\r\n    </div>\r\n  </main>\r\n  <footer class=\"paging-block\">\r\n    <span class=\"badge badge-primary page-number-pill\" (click)=\"navigate(1)\">1</span>\r\n    <span class=\"badge badge-primary page-number-pill\" (click)=\"navigate(2)\">2</span>\r\n    <span class=\"badge badge-primary page-number-pill\" (click)=\"navigate(3)\">3</span>\r\n  </footer>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movie_service__ = __webpack_require__("../../../../../src/app/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(movieService) {
        this.movieService = movieService;
        this.search = this.search.bind(this);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.navigate(1);
    };
    AppComponent.prototype.navigate = function (pageNumber) {
        var _this = this;
        this.movieService.getMovies(pageNumber).then(function (page) {
            _this.title = page.title;
            _this.videos = page["content-items"].content;
        });
    };
    AppComponent.prototype.search = function (text$) {
        var self = this;
        return text$
            .debounceTime(200)
            .distinctUntilChanged()
            .map(function (term) { return term.length < 2 ? []
            : self.getMoviesByTitle(term).slice(0, 10); });
    };
    AppComponent.prototype.getMoviesByTitle = function (term) {
        return this.movieService.getMoviesByTitle(term);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__movie_service__["a" /* MovieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__movie_service__["a" /* MovieService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__movie_service__ = __webpack_require__("../../../../../src/app/movie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__movie_service__["a" /* MovieService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/movie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_API_CONTENTLISTINGPAGE_PAGE1_json__ = __webpack_require__("../../../../../src/assets/API/CONTENTLISTINGPAGE-PAGE1.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_API_CONTENTLISTINGPAGE_PAGE1_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_API_CONTENTLISTINGPAGE_PAGE1_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_API_CONTENTLISTINGPAGE_PAGE2_json__ = __webpack_require__("../../../../../src/assets/API/CONTENTLISTINGPAGE-PAGE2.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_API_CONTENTLISTINGPAGE_PAGE2_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_API_CONTENTLISTINGPAGE_PAGE2_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_API_CONTENTLISTINGPAGE_PAGE3_json__ = __webpack_require__("../../../../../src/assets/API/CONTENTLISTINGPAGE-PAGE3.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_API_CONTENTLISTINGPAGE_PAGE3_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_API_CONTENTLISTINGPAGE_PAGE3_json__);



var MovieService = (function () {
    function MovieService() {
        this.pages = [__WEBPACK_IMPORTED_MODULE_0__assets_API_CONTENTLISTINGPAGE_PAGE1_json___default.a, __WEBPACK_IMPORTED_MODULE_1__assets_API_CONTENTLISTINGPAGE_PAGE2_json___default.a, __WEBPACK_IMPORTED_MODULE_2__assets_API_CONTENTLISTINGPAGE_PAGE3_json___default.a];
    }
    MovieService.prototype.getMovies = function (pageNumber) {
        return Promise.resolve(this.pages[pageNumber - 1]["page"]);
    };
    MovieService.prototype.getMoviesByTitle = function (term) {
        var allMovies = this.getAllMovies();
        return allMovies.filter(function (movie) { return movie.name.toLowerCase().includes(term.toLowerCase()); }); //.map(movie => movie.name);
    };
    MovieService.prototype.getAllMovies = function () {
        return [].concat.apply([], this.pages.map(function (item) { return item["page"]["content-items"].content; }));
    };
    return MovieService;
}());

//# sourceMappingURL=movie.service.js.map

/***/ }),

/***/ "../../../../../src/assets/API/CONTENTLISTINGPAGE-PAGE1.json":
/***/ (function(module, exports) {

module.exports = {"page":{"title":"Romantic Comedy","total-content-items":"54","page-num-requested":"1","page-size-requested":"20","page-size-returned":"20","content-items":{"content":[{"name":"The Birds","poster-image":"poster1.jpg"},{"name":"Rear Window","poster-image":"poster2.jpg"},{"name":"Family Pot","poster-image":"poster3.jpg"},{"name":"Family Pot","poster-image":"poster2.jpg"},{"name":"Rear Window","poster-image":"poster1.jpg"},{"name":"The Birds","poster-image":"poster3.jpg"},{"name":"Rear Window","poster-image":"poster3.jpg"},{"name":"The Birds","poster-image":"poster2.jpg"},{"name":"Family Pot","poster-image":"poster1.jpg"},{"name":"The Birds","poster-image":"poster1.jpg"},{"name":"The Birds","poster-image":"poster1.jpg"},{"name":"Rear Window","poster-image":"poster2.jpg"},{"name":"Family Pot","poster-image":"poster3.jpg"},{"name":"Family Pot","poster-image":"poster2.jpg"},{"name":"Rear Window","poster-image":"poster1.jpg"},{"name":"The Birds","poster-image":"poster3.jpg"},{"name":"Rear Window","poster-image":"poster3.jpg"},{"name":"The Birds","poster-image":"poster2.jpg"},{"name":"Family Pot","poster-image":"poster1.jpg"},{"name":"The Birds","poster-image":"poster1.jpg"}]}}}

/***/ }),

/***/ "../../../../../src/assets/API/CONTENTLISTINGPAGE-PAGE2.json":
/***/ (function(module, exports) {

module.exports = {"page":{"title":"Romantic Comedy","total-content-items":"54","page-num-requested":"2","page-size-requested":"20","page-size-returned":"20","content-items":{"content":[{"name":"Rear Window","poster-image":"poster5.jpg"},{"name":"Family Pot","poster-image":"poster6.jpg"},{"name":"Family Pot","poster-image":"poster5.jpg"},{"name":"Rear Window","poster-image":"poster4.jpg"},{"name":"The Birds","poster-image":"poster6.jpg"},{"name":"Rear Window","poster-image":"poster6.jpg"},{"name":"The Birds","poster-image":"poster5.jpg"},{"name":"Family Pot","poster-image":"poster4.jpg"},{"name":"The Birds","poster-image":"poster4.jpg"},{"name":"Rear Window","poster-image":"poster5.jpg"},{"name":"Rear Window","poster-image":"poster5.jpg"},{"name":"Family Pot","poster-image":"poster6.jpg"},{"name":"Family Pot","poster-image":"poster5.jpg"},{"name":"Rear Window","poster-image":"poster4.jpg"},{"name":"The Birds","poster-image":"poster6.jpg"},{"name":"Rear Window","poster-image":"poster6.jpg"},{"name":"The Birds","poster-image":"poster5.jpg"},{"name":"Family Pot","poster-image":"poster4.jpg"},{"name":"The Birds","poster-image":"poster4.jpg"},{"name":"Rear Window","poster-image":"poster5.jpg"}]}}}

/***/ }),

/***/ "../../../../../src/assets/API/CONTENTLISTINGPAGE-PAGE3.json":
/***/ (function(module, exports) {

module.exports = {"page":{"title":"Romantic Comedy","total-content-items":"54","page-num-requested":"3","page-size-requested":"20","page-size-returned":"14","content-items":{"content":[{"name":"Family Pot","poster-image":"poster9.jpg"},{"name":"Family Pot","poster-image":"poster8.jpg"},{"name":"Rear Window","poster-image":"poster7.jpg"},{"name":"The Birds","poster-image":"poster9.jpg"},{"name":"Rear Window","poster-image":"poster9.jpg"},{"name":"The Birds","poster-image":"poster8.jpg"},{"name":"Family Pot","poster-image":"poster7.jpg"},{"name":"Family Pot","poster-image":"poster9.jpg"},{"name":"Family Pot","poster-image":"poster8.jpg"},{"name":"Rear Window","poster-image":"poster7.jpg"},{"name":"The Birds with an Extra Long Title","poster-image":"poster9.jpg"},{"name":"Rear Window","poster-image":"poster9.jpg"},{"name":"The Birds","poster-image":"poster8.jpg"},{"name":"Family Pot","poster-image":"posterthatismissing.jpg"}]}}}

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map