(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Components/auth/sign-in/sign-in.component.css":
/*!***************************************************************!*\
  !*** ./src/app/Components/auth/sign-in/sign-in.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/auth/sign-in/sign-in.component.html":
/*!****************************************************************!*\
  !*** ./src/app/Components/auth/sign-in/sign-in.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n\n  <!-- Twitter -->\n  <meta name=\"twitter:site\" content=\"@themepixels\">\n  <meta name=\"twitter:creator\" content=\"@themepixels\">\n  <meta name=\"twitter:card\" content=\"summary_large_image\">\n  <meta name=\"twitter:title\" content=\"Bracket\">\n  <meta name=\"twitter:description\" content=\"Premium Quality and Responsive UI for Dashboard.\">\n  <meta name=\"twitter:image\" content=\"http://themepixels.me/bracket/img/bracket-social.png\">\n\n  <!-- Facebook -->\n  <meta property=\"og:url\" content=\"http://themepixels.me/bracket\">\n  <meta property=\"og:title\" content=\"Bracket\">\n  <meta property=\"og:description\" content=\"Premium Quality and Responsive UI for Dashboard.\">\n\n  <meta property=\"og:image\" content=\"http://themepixels.me/bracket/img/bracket-social.png\">\n  <meta property=\"og:image:secure_url\" content=\"http://themepixels.me/bracket/img/bracket-social.png\">\n  <meta property=\"og:image:type\" content=\"image/png\">\n  <meta property=\"og:image:width\" content=\"1200\">\n  <meta property=\"og:image:height\" content=\"600\">\n\n  <!-- Meta -->\n  <meta name=\"description\" content=\"Premium Quality and Responsive UI for Dashboard.\">\n  <meta name=\"author\" content=\"ThemePixels\">\n\n  <title>Bracket Responsive Bootstrap 4 Admin Template</title>\n</head>\n\n<body>\n\n<div class=\"d-flex align-items-center justify-content-center bg-br-primary ht-100v\">\n\n  <div class=\"login-wrapper wd-300 wd-xs-350 pd-25 pd-xs-40 bg-white rounded shadow-base\">\n    <div class=\"signin-logo tx-center tx-28 tx-bold tx-inverse\"><span class=\"tx-normal\">[</span> Weprice <span class=\"tx-normal\">]</span></div>\n    <div class=\"tx-center mg-b-60\">Permission to come aboard</div>\n    <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter your email\" name=\"email\" #email=\"ngModel\" ngModel id=\"email\">\n      </div><!-- form-group -->\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Enter your password\" name=\"password\" #password=\"ngModel\" ngModel id=\"password\">\n        <a href=\"\" class=\"tx-info tx-12 d-block mg-t-10\">Forgot password?</a>\n      </div><!-- form-group -->\n      <button type=\"submit\" class=\"btn btn-info btn-block\">Sign In</button>\n    </form>\n    <div class=\"mg-t-60 tx-center\">Not yet a member? <a routerLink=\"/register\" class=\"tx-info\">Sign Up</a></div>\n  </div><!-- login-wrapper -->\n</div><!-- d-flex -->\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/Components/auth/sign-in/sign-in.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Components/auth/sign-in/sign-in.component.ts ***!
  \**************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = /** @class */ (function () {
    function SignInComponent(authApi, router, route) {
        this.authApi = authApi;
        this.router = router;
        this.route = route;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    SignInComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.loginSubs = this.authApi.login(parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate([_this.returnUrl]);
                location.reload();
            }
        }, console.error);
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/Components/auth/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/Components/auth/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/Components/auth/sign-up/sign-up.component.css":
/*!***************************************************************!*\
  !*** ./src/app/Components/auth/sign-up/sign-up.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/auth/sign-up/sign-up.component.html":
/*!****************************************************************!*\
  !*** ./src/app/Components/auth/sign-up/sign-up.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center justify-content-center bg-br-primary ht-100v\">\n\n  <div class=\"login-wrapper wd-300 wd-xs-400 pd-25 pd-xs-40 bg-white rounded shadow-base\">\n    <div class=\"signin-logo tx-center tx-28 tx-bold tx-inverse\"><span class=\"tx-normal\">[</span> Weprice <span class=\"tx-normal\">]</span></div>\n    <div class=\"tx-center mg-b-40\">Sign Up and make use of our platform</div>\n    <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter your email\" name=\"email\" #email=\"ngModel\" ngModel id=\"email\">\n      </div><!-- form-group -->\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Enter your password\" name=\"password\" #password=\"ngModel\" ngModel id=\"password\">\n      </div><!-- form-group -->\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter your username\" name=\"name\" #name=\"ngModel\" ngModel id=\"name\">\n      </div><!-- form-group -->\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter your full name\" name=\"full_name\" #full_name=\"ngModel\" ngModel id=\"full_name\">\n      </div><!-- form-group -->\n      <div class=\"form-group tx-12\">By clicking the Sign Up button below, you agreed to our privacy policy and terms of use of our website.</div>\n      <button type=\"submit\" class=\"btn btn-info btn-block\">Sign Up</button>\n    </form>\n    <div class=\"mg-t-40 tx-center\">Already a Member? <a routerLink=\"/login\" class=\"tx-info\">Login</a></div>\n  </div><!-- login-wrapper -->\n</div><!-- d-flex -->\n\n"

/***/ }),

/***/ "./src/app/Components/auth/sign-up/sign-up.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/Components/auth/sign-up/sign-up.component.ts ***!
  \**************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authApi, router) {
        this.authApi = authApi;
        this.router = router;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.signUpSubs = this.authApi.register(parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/']);
                location.reload();
            }
        }, console.error);
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/Components/auth/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/Components/auth/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/Components/branches/branch-add/branch-add.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/Components/branches/branch-add/branch-add.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/branches/branch-add/branch-add.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/Components/branches/branch-add/branch-add.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">Branches </h4>\n    <p class=\"mg-b-0\">Add new branch </p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">Add a New Branch</h6>\n      <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <div class=\"form-layout form-layout-6\">\n              <div class=\"row no-gutters\">\n                <div class=\"col-5 col-sm-4 col-md-3\">\n                  Installation:\n                </div><!-- col-4 -->\n                <div class=\"col-7 col-sm-8 col-md-9\">\n                  <select id=\"select2-a\" class=\"form-control select2-hidden-accessible\" data-placeholder=\"Choose country\"\n                          aria-hidden=\"true\" name=\"installation_id\" #installation_id=\"ngModel\" ngModel [ngModel]=\"0\">\n                    <option value=\"0\">Choose Installation</option>\n                    <option *ngFor=\"let installation of installations\" value=\"{{installation.id}}\">{{installation.name}}</option>\n                  </select>\n                </div><!-- col-8 -->\n              </div><!-- row -->\n              <div class=\"row no-gutters\">\n                <div class=\"col-5 col-sm-4 col-md-3\">\n                  Type:\n                </div><!-- col-4 -->\n                <div class=\"col-7 col-sm-8 col-md-9\">\n                  <select id=\"select2-b\" class=\"form-control select2-hidden-accessible\" data-placeholder=\"Choose country\"\n                          aria-hidden=\"true\" onchange=\"changeType()\" name=\"type\" #type=\"ngModel\" ngModel [ngModel]=\"0\">\n                    <option value=\"0\" selected=\"\">Company</option>\n                    <option value=\"1\">Branch</option>\n                  </select>\n                </div><!-- col-8 -->\n              </div><!-- row -->\n              <div id=\"parent_branch\" class=\"row no-gutters d-none\">\n                <div class=\"col-5 col-sm-4 col-md-3\">\n                  Parent Company:\n                </div><!-- col-4 -->\n                <div class=\"col-7 col-sm-8 col-md-9\">\n                  <select id=\"select2-c\" class=\"form-control select2-hidden-accessible\" data-placeholder=\"Choose country\"\n                          aria-hidden=\"true\" name=\"parent_id\" #parent_id=\"ngModel\" ngModel [ngModel]=\"0\">\n                    <option value=\"0\" selected=\"\">Select Company</option>\n                    <option *ngFor=\"let branch of branches\" value=\"{{branch.id}}\">{{branch.name}}</option>\n                  </select>\n                </div><!-- col-8 -->\n              </div><!-- row -->\n              <div class=\"row no-gutters\">\n                <div class=\"col-5 col-sm-4 col-md-3\">\n                  NAME:\n                </div><!-- col-4 -->\n                <div class=\"col-7 col-sm-8 col-md-9\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Enter Branch Name\"\n                         name=\"name\" #name=\"ngModel\" ngModel>\n                </div><!-- col-8 -->\n              </div><!-- row -->\n              <div class=\"row no-gutters\">\n                <div class=\"col-5 col-sm-4 col-md-3\">\n                  Area:\n                </div><!-- col-4 -->\n                <div class=\"col-7 col-sm-8 col-md-9\">\n                  <input class=\"form-control\" type=\"number\"\n                         name=\"area\" #area=\"ngModel\" ngModel placeholder=\"Enter Area\">\n                </div>\n              </div>\n              <div class=\"row no-gutters\">\n                <div class=\"col-5 col-sm-4 col-md-3\">\n                  Monthly Interest:\n                </div><!-- col-4 -->\n                <div class=\"col-7 col-sm-8 col-md-9\">\n                  <input class=\"form-control\" type=\"number\"\n                         name=\"interest_month_pct\" #interest_month_pct=\"ngModel\" ngModel placeholder=\"Enter Monthly Interest:\">\n                </div>\n              </div>\n\n            </div><!-- form-layout -->\n          </div>\n          <div class=\"col-6\">\n            <div class=\"form-layout form-layout-6\">\n              <div class=\"row no-gutters\">\n                <div class=\"col-5 col-sm-4 col-md-3\">\n                  Avg Quantity Months:\n                </div><!-- col-4 -->\n                <div class=\"col-7 col-sm-8 col-md-9\">\n                  <input class=\"form-control\" type=\"number\"\n                         name=\"months_avg_qt\" #months_avg_qt=\"ngModel\" ngModel placeholder=\"Enter Avg Quantity Months\">\n                </div><!-- col-8 -->\n              </div><!-- row -->\n              <div class=\"row no-gutters\">\n                <div class=\"col-5 col-sm-4 col-md-3\">\n                  Work hours per day:\n                </div><!-- col-4 -->\n                <div class=\"col-7 col-sm-8 col-md-9\">\n                  <input class=\"form-control\" type=\"number\"\n                         name=\"workhours_day_qt\" #workhours_day_qt=\"ngModel\" ngModel placeholder=\"Enter Work hours per day\">\n                </div><!-- col-8 -->\n              </div><!-- row -->\n              <div class=\"row no-gutters\">\n                <div class=\"col-5 col-sm-4 col-md-3\">\n                  Work days per month:\n                </div><!-- col-4 -->\n                <div class=\"col-7 col-sm-8 col-md-9\">\n                  <input class=\"form-control\" type=\"number\"\n                         name=\"workdays_month_qt\" #workdays_month_qt=\"ngModel\" ngModel placeholder=\"Enter Work hours per day\">\n                </div><!-- col-8 -->\n              </div><!-- row -->\n              <div class=\"row no-gutters\">\n                <div class=\"col-5 col-sm-4 col-md-3\">\n                  Months Stock Quantity:\n                </div><!-- col-4 -->\n                <div class=\"col-7 col-sm-8 col-md-9\">\n                  <input class=\"form-control\" type=\"number\"\n                         name=\"months_stock_qt\" #months_stock_qt=\"ngModel\" ngModel placeholder=\"Enter Months Stock Quantity\">\n                </div>\n              </div>\n              <div class=\"row no-gutters\">\n                <div class=\"col-5 col-sm-4 col-md-3\">\n                  Raw Material Rate:\n                </div><!-- col-4 -->\n                <div class=\"col-7 col-sm-8 col-md-9\">\n                  <input class=\"form-control\" type=\"number\"\n                         name=\"raw_material_rate_pct\" #raw_material_rate_pct=\"ngModel\" ngModel placeholder=\"Enter Raw Material Rate\">\n                </div>\n              </div>\n              <div class=\"row no-gutters\">\n                <div class=\"col-5 col-sm-4 col-md-3\">\n                  Days Rec:\n                </div><!-- col-4 -->\n                <div class=\"col-7 col-sm-8 col-md-9\">\n                  <input class=\"form-control\" type=\"number\"\n                         name=\"days_rec_qt\" #days_rec_qt=\"ngModel\" ngModel placeholder=\"Enter Days Rec\">\n                </div>\n              </div>\n\n            </div><!-- form-layout -->\n          </div>\n        </div>\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\">Submit</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/branches/branch-add/branch-add.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Components/branches/branch-add/branch-add.component.ts ***!
  \************************************************************************/
/*! exports provided: BranchAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchAddComponent", function() { return BranchAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_installation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/installation.service */ "./src/app/Services/installation.service.ts");
/* harmony import */ var _Services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/branch.service */ "./src/app/Services/branch.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BranchAddComponent = /** @class */ (function () {
    function BranchAddComponent(installationApi, branchesApi, router) {
        this.installationApi = installationApi;
        this.branchesApi = branchesApi;
        this.router = router;
    }
    BranchAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.installationSubs = this.installationApi.get().subscribe(function (res) {
            _this.installations = res['installations'];
            console.log(_this.installations);
        });
        this.branchesSubs = this.branchesApi.getParents().subscribe(function (res) {
            _this.branches = res['branches'];
            console.log(_this.branches);
        });
    };
    BranchAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.branchesSubs = this.branchesApi.addBranch(parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/branches']);
                location.reload();
            }
        }, console.error);
    };
    BranchAddComponent.prototype.changeType = function () {
        var type = jquery__WEBPACK_IMPORTED_MODULE_4__("select[name=type]").val();
        if (type == 0) {
            jquery__WEBPACK_IMPORTED_MODULE_4__("#parent_branch").addClass("d-none");
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_4__("#parent_branch").removeClass("d-none");
        }
    };
    BranchAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branch-add',
            template: __webpack_require__(/*! ./branch-add.component.html */ "./src/app/Components/branches/branch-add/branch-add.component.html"),
            styles: [__webpack_require__(/*! ./branch-add.component.css */ "./src/app/Components/branches/branch-add/branch-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_installation_service__WEBPACK_IMPORTED_MODULE_2__["InstallationService"], _Services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BranchAddComponent);
    return BranchAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/branches/branche-edit/branche-edit.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/branches/branche-edit/branche-edit.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/branches/branche-edit/branche-edit.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/Components/branches/branche-edit/branche-edit.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  branche-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/Components/branches/branche-edit/branche-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Components/branches/branche-edit/branche-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: BrancheEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrancheEditComponent", function() { return BrancheEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BrancheEditComponent = /** @class */ (function () {
    function BrancheEditComponent() {
    }
    BrancheEditComponent.prototype.ngOnInit = function () {
    };
    BrancheEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branche-edit',
            template: __webpack_require__(/*! ./branche-edit.component.html */ "./src/app/Components/branches/branche-edit/branche-edit.component.html"),
            styles: [__webpack_require__(/*! ./branche-edit.component.css */ "./src/app/Components/branches/branche-edit/branche-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BrancheEditComponent);
    return BrancheEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/branches/branches-overview/branches-overview.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/Components/branches/branches-overview/branches-overview.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ag-theme-material .ag-header-cell, .ag-theme-material .ag-header-group-cell {\n  padding-left: 6px !important;\n  padding-right: 6px !important;\n}\n"

/***/ }),

/***/ "./src/app/Components/branches/branches-overview/branches-overview.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/Components/branches/branches-overview/branches-overview.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">Branches </h4>\n    <p class=\"mg-b-0\">list of existing branches </p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <div class=\"text-right\">\n        <a routerLink=\"/branches/add\" class=\"btn btn-danger mg-r-10\">Mass Delete</a>\n        <a routerLink=\"/branches/add\" class=\"btn btn-success\">Add New</a>\n      </div>\n      <hr>\n      <ag-grid-angular\n        style=\"width: 100%;\"\n        class=\"ag-theme-material\"\n        [rowData]=\"rowData\"\n        [columnDefs]=\"columnDefs\"\n        [enableSorting]=\"true\"\n        [enableFilter]=\"true\"\n      >\n      </ag-grid-angular>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/branches/branches-overview/branches-overview.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/Components/branches/branches-overview/branches-overview.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BranchesOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesOverviewComponent", function() { return BranchesOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/branch.service */ "./src/app/Services/branch.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BranchesOverviewComponent = /** @class */ (function () {
    function BranchesOverviewComponent(branchesApi) {
        this.branchesApi = branchesApi;
        this.columnDefs = [];
        this.rowData = [];
        this.height = null;
    }
    BranchesOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.branchesSubs = this.branchesApi.getBranches().subscribe(function (res) {
            _this.branches = res['branches'];
            console.log(_this.branches);
            _this.height = _this.branches.length * 48 + 60;
            var w = jquery__WEBPACK_IMPORTED_MODULE_2__(document).innerWidth() - jquery__WEBPACK_IMPORTED_MODULE_2__('.br-sideleft').width() - 220;
            w = w / 10;
            _this.columnDefs = [
                { headerName: 'Branch', field: 'name', width: w },
                { headerName: 'Area', field: 'area', width: w },
                { headerName: 'Monthly AVG QT', field: 'months_avg_qt', width: w },
                { headerName: 'Monthly Interest', field: 'interest_month_pct', width: w },
                { headerName: 'Work Hours / Day', field: 'workhours_day_qt', width: w },
                { headerName: 'Work Days / Month', field: 'workdays_month_qt', width: w },
                { headerName: 'Monthly Stock QT', field: 'months_stock_qt', width: w },
                { headerName: 'Raw Material Rate', field: 'raw_material_rate_pct', width: w },
                { headerName: 'Days Rec', field: 'days_rec_qt', width: w },
                { headerName: 'Actions', field: 'actions', width: w, cellRenderer: function (params) {
                        return params.value ? params.value : '';
                    } },
            ];
            for (var i = 0; i < _this.branches.length; i++) {
                _this.branches[i]['actions'] = jquery__WEBPACK_IMPORTED_MODULE_2__("<div><a class='btn btn-danger'><i class='fa fa-trash text-white'></i></a>  <a class='btn btn-primary'><i class='fa fa-edit text-white'></i></a></div>").html();
            }
            _this.rowData = _this.branches;
            jquery__WEBPACK_IMPORTED_MODULE_2__('ag-grid-angular').height(_this.height);
        });
    };
    BranchesOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branches-overview',
            template: __webpack_require__(/*! ./branches-overview.component.html */ "./src/app/Components/branches/branches-overview/branches-overview.component.html"),
            styles: [__webpack_require__(/*! ./branches-overview.component.css */ "./src/app/Components/branches/branches-overview/branches-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"]])
    ], BranchesOverviewComponent);
    return BranchesOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/branches/branches.component.css":
/*!************************************************************!*\
  !*** ./src/app/Components/branches/branches.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/branches/branches.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Components/branches/branches.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Components/branches/branches.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/branches/branches.component.ts ***!
  \***********************************************************/
/*! exports provided: BranchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesComponent", function() { return BranchesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BranchesComponent = /** @class */ (function () {
    function BranchesComponent() {
    }
    BranchesComponent.prototype.ngOnInit = function () {
    };
    BranchesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branches',
            template: __webpack_require__(/*! ./branches.component.html */ "./src/app/Components/branches/branches.component.html"),
            styles: [__webpack_require__(/*! ./branches.component.css */ "./src/app/Components/branches/branches.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BranchesComponent);
    return BranchesComponent;
}());



/***/ }),

/***/ "./src/app/Components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/Components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- ########## START: MAIN PANEL ########## -->\n    <div class=\"br-mainpanel\">\n      <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\">Dashboard</h4>\n        <p class=\"mg-b-0\">Do big things with Bracket, the responsive bootstrap 4 admin template.</p>\n      </div><!-- d-flex -->\n\n      <div class=\"br-pagebody mg-t-5 pd-x-30\">\n        <div class=\"row row-sm\">\n          <div class=\"col-sm-6 col-xl-3\">\n            <div class=\"bg-teal rounded overflow-hidden\">\n              <div class=\"pd-25 d-flex align-items-center\">\n                <i class=\"ion ion-earth tx-60 lh-0 tx-white op-7\"></i>\n                <div class=\"mg-l-20\">\n                  <p class=\"tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10\">Today's Visits</p>\n                  <p class=\"tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1\">1,975,224</p>\n                  <span class=\"tx-11 tx-roboto tx-white-6\">24% higher yesterday</span>\n                </div>\n              </div>\n            </div>\n          </div><!-- col-3 -->\n          <div class=\"col-sm-6 col-xl-3 mg-t-20 mg-sm-t-0\">\n            <div class=\"bg-danger rounded overflow-hidden\">\n              <div class=\"pd-25 d-flex align-items-center\">\n                <i class=\"ion ion-bag tx-60 lh-0 tx-white op-7\"></i>\n                <div class=\"mg-l-20\">\n                  <p class=\"tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10\">Today Sales</p>\n                  <p class=\"tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1\">$329,291</p>\n                  <span class=\"tx-11 tx-roboto tx-white-6\">$390,212 before tax</span>\n                </div>\n              </div>\n            </div>\n          </div><!-- col-3 -->\n          <div class=\"col-sm-6 col-xl-3 mg-t-20 mg-xl-t-0\">\n            <div class=\"bg-primary rounded overflow-hidden\">\n              <div class=\"pd-25 d-flex align-items-center\">\n                <i class=\"ion ion-monitor tx-60 lh-0 tx-white op-7\"></i>\n                <div class=\"mg-l-20\">\n                  <p class=\"tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10\">% Unique Visits</p>\n                  <p class=\"tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1\">54.45%</p>\n                  <span class=\"tx-11 tx-roboto tx-white-6\">23% average duration</span>\n                </div>\n              </div>\n            </div>\n          </div><!-- col-3 -->\n          <div class=\"col-sm-6 col-xl-3 mg-t-20 mg-xl-t-0\">\n            <div class=\"bg-br-primary rounded overflow-hidden\">\n              <div class=\"pd-25 d-flex align-items-center\">\n                <i class=\"ion ion-clock tx-60 lh-0 tx-white op-7\"></i>\n                <div class=\"mg-l-20\">\n                  <p class=\"tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10\">Bounce Rate</p>\n                  <p class=\"tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1\">32.16%</p>\n                  <span class=\"tx-11 tx-roboto tx-white-6\">65.45% on average time</span>\n                </div>\n              </div>\n            </div>\n          </div><!-- col-3 -->\n        </div><!-- row -->\n\n        <div class=\"row row-sm mg-t-20\">\n          <div class=\"col-8\">\n            <div class=\"card pd-0 bd-0 shadow-base\">\n              <div class=\"pd-x-30 pd-t-30 pd-b-15\">\n                <div class=\"d-flex align-items-center justify-content-between\">\n                  <div>\n                    <h6 class=\"tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1\">Network Performance</h6>\n                    <p class=\"mg-b-0\">Duis autem vel eum iriure dolor in hendrerit in vulputate...</p>\n                  </div>\n                  <div class=\"tx-13\">\n                    <p class=\"mg-b-0\"><span class=\"square-8 rounded-circle bg-purple mg-r-10\"></span> TCP Reset Packets</p>\n                    <p class=\"mg-b-0\"><span class=\"square-8 rounded-circle bg-pink mg-r-10\"></span> TCP FIN Packets</p>\n                  </div>\n                </div><!-- d-flex -->\n              </div>\n              <div class=\"pd-x-15 pd-b-15\">\n                <div id=\"ch1\" class=\"br-chartist br-chartist-2 ht-200 ht-sm-300\"></div>\n              </div>\n            </div><!-- card -->\n\n            <div class=\"card bd-0 shadow-base pd-30 mg-t-20\">\n              <div class=\"d-flex align-items-center justify-content-between mg-b-30\">\n                <div>\n                  <h6 class=\"tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1\">Newly Registered Users</h6>\n                  <p class=\"mg-b-0\"><i class=\"icon ion-calendar mg-r-5\"></i> From October 2017 - December 2017</p>\n                </div>\n                <a href=\"\" class=\"btn btn-outline-info btn-oblong tx-11 tx-uppercase tx-mont tx-medium tx-spacing-1 pd-x-30 bd-2\">See more</a>\n              </div><!-- d-flex -->\n\n              <table class=\"table table-valign-middle mg-b-0\">\n                <tbody>\n                  <tr>\n                    <td class=\"pd-l-0-force\">\n                      <img src=\"http://via.placeholder.com/280x280\" class=\"wd-40 rounded-circle\" alt=\"\">\n                    </td>\n                    <td>\n                      <h6 class=\"tx-inverse tx-14 mg-b-0\">Deborah Miner</h6>\n                      <span class=\"tx-12\">@deborah.miner</span>\n                    </td>\n                    <td>Nov 01, 2017</td>\n                    <td><span id=\"sparkline1\">1,4,4,7,5,9,4,7,5,9,1</span></td>\n                    <td class=\"pd-r-0-force tx-center\"><a href=\"\" class=\"tx-gray-600\"><i class=\"icon ion-more tx-18 lh-0\"></i></a></td>\n                  </tr>\n                  <tr>\n                    <td class=\"pd-l-0-force\">\n                      <img src=\"http://via.placeholder.com/280x280\" class=\"wd-40 rounded-circle\" alt=\"\">\n                    </td>\n                    <td>\n                      <h6 class=\"tx-inverse tx-14 mg-b-0\">Belinda Connor</h6>\n                      <span class=\"tx-12\">@belinda.connor</span>\n                    </td>\n                    <td>Oct 28, 2017</td>\n                    <td><span id=\"sparkline2\">1,3,6,4,5,8,4,2,4,5,0</span></td>\n                    <td class=\"pd-r-0-force tx-center\"><a href=\"\" class=\"tx-gray-600\"><i class=\"icon ion-more tx-18 lh-0\"></i></a></td>\n                  </tr>\n                  <tr>\n                    <td class=\"pd-l-0-force\">\n                      <img src=\"http://via.placeholder.com/280x280\" class=\"wd-40 rounded-circle\" alt=\"\">\n                    </td>\n                    <td>\n                      <h6 class=\"tx-inverse tx-14 mg-b-0\">Andrew Wiggins</h6>\n                      <span class=\"tx-12\">@andrew.wiggins</span>\n                    </td>\n                    <td>Oct 27, 2017</td>\n                    <td><span id=\"sparkline3\">1,2,4,2,3,6,4,2,4,3,0</span></td>\n                    <td class=\"pd-r-0-force tx-center\"><a href=\"\" class=\"tx-gray-600\"><i class=\"icon ion-more tx-18 lh-0\"></i></a></td>\n                  </tr>\n                  <tr>\n                    <td class=\"pd-l-0-force\">\n                      <img src=\"http://via.placeholder.com/280x280\" class=\"wd-40 rounded-circle\" alt=\"\">\n                    </td>\n                    <td>\n                      <h6 class=\"tx-inverse tx-14 mg-b-0\">Brandon Lawrence</h6>\n                      <span class=\"tx-12\">@brandon.lawrence</span>\n                    </td>\n                    <td>Oct 27, 2017</td>\n                    <td><span id=\"sparkline4\">1,4,4,7,5,9,4,7,5,9,1</span></td>\n                    <td class=\"pd-r-0-force tx-center\"><a href=\"\" class=\"tx-gray-600\"><i class=\"icon ion-more tx-18 lh-0\"></i></a></td>\n                  </tr>\n                  <tr>\n                    <td class=\"pd-l-0-force\">\n                      <img src=\"http://via.placeholder.com/280x280\" class=\"wd-40 rounded-circle\" alt=\"\">\n                    </td>\n                    <td>\n                      <h6 class=\"tx-inverse tx-14 mg-b-0\">Marilyn Tarter</h6>\n                      <span class=\"tx-12\">@marilyn.tarter</span>\n                    </td>\n                    <td>Oct 27, 2017</td>\n                    <td><span id=\"sparkline5\">1,3,6,4,5,8,4,2,4,5,0</span></td>\n                    <td class=\"pd-r-0-force tx-center\"><a href=\"\" class=\"tx-gray-600\"><i class=\"icon ion-more tx-18 lh-0\"></i></a></td>\n                  </tr>\n                </tbody>\n              </table>\n            </div><!-- card -->\n\n            <div class=\"card shadow-base card-body pd-25 bd-0 mg-t-20\">\n              <div class=\"row\">\n                <div class=\"col-sm-6\">\n                  <h6 class=\"card-title tx-uppercase tx-12\">Statistics Summary</h6>\n                  <p class=\"display-4 tx-medium tx-inverse mg-b-5 tx-lato\">25%</p>\n                  <div class=\"progress mg-b-10\">\n                    <div class=\"progress-bar bg-primary progress-bar-xs wd-30p\" role=\"progressbar\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  </div><!-- progress -->\n                  <p class=\"tx-12\">Nulla consequat massa quis enim. Donec pede justo, fringilla vel...</p>\n                  <p class=\"tx-11 lh-3 mg-b-0\">You can also use other progress variant found in <a href=\"progress.html\" target=\"blank\">progress section</a>.</p>\n                </div><!-- col-6 -->\n                <div class=\"col-sm-6 mg-t-20 mg-sm-t-0 d-flex align-items-center justify-content-center\">\n                  <span class=\"peity-donut\" data-peity='{ \"fill\": [\"#0866C6\", \"#E9ECEF\"],  \"innerRadius\": 60, \"radius\": 90 }'>30/100</span>\n                </div><!-- col-6 -->\n              </div><!-- row -->\n            </div><!-- card -->\n\n\n          </div><!-- col-9 -->\n          <div class=\"col-4\">\n\n\n            <div class=\"card bd-0 shadow-base pd-30\">\n              <h6 class=\"tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1\">Server Status</h6>\n              <p class=\"mg-b-25\">Summary of the status of your server.</p>\n\n              <label class=\"tx-12 tx-gray-600 mg-b-10\">CPU Usage (40.05 - 32 cpus)</label>\n              <div class=\"progress ht-5 mg-b-10\">\n                <div class=\"progress-bar wd-25p\" role=\"progressbar\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n\n              <label class=\"tx-12 tx-gray-600 mg-b-10\">Memory Usage (32.2%)</label>\n              <div class=\"progress ht-5 mg-b-10\">\n                <div class=\"progress-bar bg-teal wd-60p\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n\n              <label class=\"tx-12 tx-gray-600 mg-b-10\">Disk Usage (82.2%)</label>\n              <div class=\"progress ht-5 mg-b-10\">\n                <div class=\"progress-bar bg-danger wd-70p\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n\n              <label class=\"tx-12 tx-gray-600 mg-b-10\">Databases (63/100)</label>\n              <div class=\"progress ht-5 mg-b-10\">\n                <div class=\"progress-bar bg-warning wd-50p\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n\n              <label class=\"tx-12 tx-gray-600 mg-b-10\">Domains (30/50)</label>\n              <div class=\"progress ht-5 mg-b-10\">\n                <div class=\"progress-bar bg-info wd-45p\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n\n              <label class=\"tx-12 tx-gray-600 mg-b-10\">Email Account (13/50)</label>\n              <div class=\"progress ht-5 mg-b-10\">\n                <div class=\"progress-bar bg-purple wd-65p\" role=\"progressbar\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n\n              <div class=\"mg-t-20 tx-13\">\n                <a href=\"\" class=\"tx-gray-600 hover-info\">Generate Report</a>\n                <a href=\"\" class=\"tx-gray-600 hover-info bd-l mg-l-10 pd-l-10\">Print Report</a>\n              </div>\n            </div><!-- card -->\n\n            <div class=\"card bg-transparent shadow-base bd-0 mg-t-20\">\n              <div class=\"bg-primary rounded-top\">\n                <div class=\"pd-x-30 pd-t-30\">\n                  <h6 class=\"tx-13 tx-uppercase tx-white tx-semibold tx-spacing-1\">Sale Status</h6>\n                  <p class=\"mg-b-20 tx-white-6\">As of October 10 - 17, 2017</p>\n                  <h3 class=\"tx-lato tx-white mg-b-0\">$12, 201 <i class=\"icon ion-android-arrow-up tx-white-5\"></i></h3>\n                </div>\n                <div id=\"chartLine1\" class=\"wd-100p ht-150\"></div>\n              </div>\n              <div class=\"bg-white pd-20 rounded-bottom d-flex align-items-center justify-content-between\">\n                <div class=\"d-flex align-items-start\">\n                  <div><span id=\"sparkline6\">5,4,7,5,9,7,4</span></div>\n                  <div class=\"mg-l-15\">\n                    <label class=\"tx-uppercase tx-10 tx-medium tx-spacing-1 mg-b-0\">Average Sales</label>\n                    <h6 class=\"tx-inverse mg-b-0 tx-lato tx-bold\">$603, 201</h6>\n                  </div>\n                </div><!-- d-flex -->\n                <div class=\"d-flex align-items-center\">\n                  <div><span id=\"sparkline7\">4,7,5,9,4,7,5</span></div>\n                  <div class=\"mg-l-15\">\n                    <label class=\"tx-uppercase tx-10 tx-medium tx-spacing-1 mg-b-0\">Total Sales</label>\n                    <h6 class=\"tx-inverse mg-b-0 tx-lato tx-bold\">$822, 677</h6>\n                  </div>\n                </div><!-- d-flex -->\n              </div><!-- d-flex -->\n            </div><!-- card -->\n\n            <div class=\"card bd-0 mg-t-20\">\n              <div id=\"carousel2\" class=\"carousel slide\" data-ride=\"carousel\">\n                <ol class=\"carousel-indicators\">\n                  <li data-target=\"#carousel2\" data-slide-to=\"0\" class=\"active\"></li>\n                  <li data-target=\"#carousel2\" data-slide-to=\"1\"></li>\n                  <li data-target=\"#carousel2\" data-slide-to=\"2\"></li>\n                </ol>\n                <div class=\"carousel-inner\" role=\"listbox\">\n                  <div class=\"carousel-item active\">\n                    <div class=\"bg-br-primary pd-30 ht-300 pos-relative d-flex align-items-center rounded\">\n                      <div class=\"pos-absolute t-15 r-25\">\n                        <a href=\"\" class=\"tx-white-5 hover-info\"><i class=\"icon ion-edit tx-16\"></i></a>\n                        <a href=\"\" class=\"tx-white-5 hover-info mg-l-7\"><i class=\"icon ion-stats-bars tx-20\"></i></a>\n                        <a href=\"\" class=\"tx-white-5 hover-info mg-l-7\"><i class=\"icon ion-gear-a tx-20\"></i></a>\n                        <a href=\"\" class=\"tx-white-5 hover-info mg-l-7\"><i class=\"icon ion-more tx-20\"></i></a>\n                      </div>\n                      <div class=\"tx-white\">\n                        <p class=\"tx-uppercase tx-11 tx-medium tx-mont tx-spacing-2 tx-white-5\">Recent Article</p>\n                        <h5 class=\"lh-5 mg-b-20\">20 Best Travel Tips After 5 Years Of Traveling The World</h5>\n                        <nav class=\"nav flex-row tx-13\">\n                          <a href=\"\" class=\"tx-white-8 hover-white pd-l-0 pd-r-5\">12K+ Views</a>\n                          <a href=\"\" class=\"tx-white-8 hover-white pd-x-5\">234 Shares</a>\n                          <a href=\"\" class=\"tx-white-8 hover-white pd-x-5\">43 Comments</a>\n                        </nav>\n                      </div>\n                    </div><!-- d-flex -->\n                  </div>\n                  <div class=\"carousel-item\">\n                    <div class=\"bg-info pd-30 ht-300 pos-relative d-flex align-items-center rounded\">\n                      <div class=\"pos-absolute t-15 r-25\">\n                        <a href=\"\" class=\"tx-white-5 hover-info\"><i class=\"icon ion-edit tx-16\"></i></a>\n                        <a href=\"\" class=\"tx-white-5 hover-info mg-l-7\"><i class=\"icon ion-stats-bars tx-20\"></i></a>\n                        <a href=\"\" class=\"tx-white-5 hover-info mg-l-7\"><i class=\"icon ion-gear-a tx-20\"></i></a>\n                        <a href=\"\" class=\"tx-white-5 hover-info mg-l-7\"><i class=\"icon ion-more tx-20\"></i></a>\n                      </div>\n                      <div class=\"tx-white\">\n                        <p class=\"tx-uppercase tx-11 tx-medium tx-mont tx-spacing-2 tx-white-5\">Recent Article</p>\n                        <h5 class=\"lh-5 mg-b-20\">How I Flew Around the World in Business Class for $1,340</h5>\n                        <nav class=\"nav flex-row tx-13\">\n                          <a href=\"\" class=\"tx-white-8 hover-white pd-l-0 pd-r-5\">Edit</a>\n                          <a href=\"\" class=\"tx-white-8 hover-white pd-x-5\">Unpublish</a>\n                          <a href=\"\" class=\"tx-white-8 hover-white pd-x-5\">Delete</a>\n                        </nav>\n                      </div>\n                    </div><!-- d-flex -->\n                  </div>\n                  <div class=\"carousel-item\">\n                    <div class=\"bg-purple pd-30 ht-300 d-flex pos-relative align-items-center rounded\">\n                      <div class=\"pos-absolute t-15 r-25\">\n                        <a href=\"\" class=\"tx-white-5 hover-info\"><i class=\"icon ion-edit tx-16\"></i></a>\n                        <a href=\"\" class=\"tx-white-5 hover-info mg-l-7\"><i class=\"icon ion-stats-bars tx-20\"></i></a>\n                        <a href=\"\" class=\"tx-white-5 hover-info mg-l-7\"><i class=\"icon ion-gear-a tx-20\"></i></a>\n                        <a href=\"\" class=\"tx-white-5 hover-info mg-l-7\"><i class=\"icon ion-more tx-20\"></i></a>\n                      </div>\n                      <div class=\"tx-white\">\n                        <p class=\"tx-uppercase tx-11 tx-medium tx-mont tx-spacing-2 tx-white-5\">Recent Article</p>\n                        <h5 class=\"lh-5 mg-b-20\">10 Reasons Why Travel Makes You a Happier Person</h5>\n                        <nav class=\"nav flex-row tx-13\">\n                          <a href=\"\" class=\"tx-white-8 hover-white pd-l-0 pd-r-5\">Edit</a>\n                          <a href=\"\" class=\"tx-white-8 hover-white pd-x-5\">Unpublish</a>\n                          <a href=\"\" class=\"tx-white-8 hover-white pd-x-5\">Delete</a>\n                        </nav>\n                      </div>\n                    </div><!-- d-flex -->\n                  </div>\n                </div><!-- carousel-inner -->\n              </div><!-- carousel -->\n            </div><!-- card -->\n\n          </div><!-- col-3 -->\n        </div><!-- row -->\n\n      </div><!-- br-pagebody -->\n      <footer class=\"br-footer\">\n        <div class=\"footer-left\">\n          <div class=\"mg-b-2\">Copyright &copy; 2017. Bracket. All Rights Reserved.</div>\n          <div>Attentively and carefully made by ThemePixels.</div>\n        </div>\n        <div class=\"footer-right d-flex align-items-center\">\n          <span class=\"tx-uppercase mg-r-10\">Share:</span>\n          <a target=\"_blank\" class=\"pd-x-5\" href=\"https://www.facebook.com/sharer/sharer.php?u=http%3A//themepixels.me/bracket/intro\"><i class=\"fa fa-facebook tx-20\"></i></a>\n          <a target=\"_blank\" class=\"pd-x-5\" href=\"https://twitter.com/home?status=Bracket,%20your%20best%20choice%20for%20premium%20quality%20admin%20template%20from%20Bootstrap.%20Get%20it%20now%20at%20http%3A//themepixels.me/bracket/intro\"><i class=\"fa fa-twitter tx-20\"></i></a>\n        </div>\n      </footer>\n    </div><!-- br-mainpanel -->\n    <!-- ########## END: MAIN PANEL ########## -->\n"

/***/ }),

/***/ "./src/app/Components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/Components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs-compat/add/operator/map */ "./node_modules/rxjs-compat/add/operator/map.js");
/* harmony import */ var rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_compat_add_operator_map__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService._handleError = function (err) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err.message || 'Error: Unable to complete request.');
    };
    AuthService.prototype.register = function (parameter) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + "/register", parameter, httpOptions).map(function (res) {
            console.log(res);
            if (res['message'] == 1) {
                localStorage.setItem('currentUser', res['user']);
                return 1;
            }
        }, function (err) {
            console.log("Error occurred");
            return 0;
        });
    };
    AuthService.prototype.login = function (parameter) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + "/login", parameter, httpOptions).map(function (res) {
            if (res['message'] == 1) {
                localStorage.setItem('currentUser', JSON.stringify(res['user']));
                return 1;
            }
        }, function (err) {
            console.log("Error occurred");
            return 0;
        });
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Services/branch.service.ts":
/*!********************************************!*\
  !*** ./src/app/Services/branch.service.ts ***!
  \********************************************/
/*! exports provided: BranchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchService", function() { return BranchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BranchService = /** @class */ (function () {
    function BranchService(http) {
        this.http = http;
    }
    BranchService_1 = BranchService;
    BranchService._handleError = function (err) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err.message || 'Error: Unable to complete request.');
    };
    BranchService.prototype.getParents = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + "/branches/parent")
            .catch(BranchService_1._handleError);
    };
    BranchService.prototype.getBranches = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + "/branches")
            .catch(BranchService_1._handleError);
    };
    BranchService.prototype.addBranch = function (parameter) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + "/branches/add", parameter, httpOptions).map(function (res) {
            console.log(res);
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    var BranchService_1;
    BranchService = BranchService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BranchService);
    return BranchService;
}());



/***/ }),

/***/ "./src/app/Services/installation.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Services/installation.service.ts ***!
  \**************************************************/
/*! exports provided: InstallationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationService", function() { return InstallationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InstallationService = /** @class */ (function () {
    function InstallationService(http) {
        this.http = http;
    }
    InstallationService_1 = InstallationService;
    InstallationService._handleError = function (err) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err.message || 'Error: Unable to complete request.');
    };
    InstallationService.prototype.get = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + "/installations")
            .catch(InstallationService_1._handleError);
    };
    var InstallationService_1;
    InstallationService = InstallationService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InstallationService);
    return InstallationService;
}());



/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/authenticated.guard.ts":
/*!************************************************!*\
  !*** ./src/app/_guards/authenticated.guard.ts ***!
  \************************************************/
/*! exports provided: AuthenticatedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedGuard", function() { return AuthenticatedGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticatedGuard = /** @class */ (function () {
    function AuthenticatedGuard(router) {
        this.router = router;
    }
    AuthenticatedGuard.prototype.canActivate = function (route, state) {
        if (!localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/']);
        location.reload();
        return false;
    };
    AuthenticatedGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthenticatedGuard);
    return AuthenticatedGuard;
}());



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/auth.service */ "./src/app/Services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_Services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"noHeader; else component\">\n  <router-outlet></router-outlet>\n</div>\n<ng-template #component>\n  <!-- ########## START: LEFT PANEL ########## -->\n  <div class=\"br-logo\"><a href=\"\"><span>[</span>Weprice<span>]</span></a></div>\n  <div class=\"br-sideleft overflow-y-auto\">\n    <label class=\"sidebar-label pd-x-15 mg-t-20\">Navigation</label>\n    <div class=\"br-sideleft-menu\">\n      <a routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"br-menu-link active\">\n        <div class=\"br-menu-item\">\n          <i class=\"menu-item-icon icon ion-ios-home-outline tx-22\"></i>\n          <span class=\"menu-item-label\">Dashboard</span>\n        </div><!-- menu-item -->\n      </a><!-- br-menu-link -->\n      <a href=\"#\" class=\"br-menu-link\">\n        <div class=\"br-menu-item\">\n          <i class=\"menu-item-icon icon ion-ios-filing-outline tx-24\"></i>\n          <span class=\"menu-item-label\">Files</span>\n          <i class=\"menu-item-arrow fa fa-angle-down\"></i>\n        </div><!-- menu-item -->\n      </a><!-- br-menu-link -->\n      <ul class=\"br-menu-sub nav flex-column\">\n        <li class=\"nav-item\"><a routerLink=\"/branches\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"nav-link\">Branches</a></li>\n        <li class=\"nav-item\"><a href=\"alerts.html\" class=\"nav-link\">Cost Centers</a></li>\n        <li class=\"nav-item\"><a href=\"buttons.html\" class=\"nav-link\">Accounts</a></li>\n        <li class=\"nav-item\"><a href=\"cards.html\" class=\"nav-link\">Products</a></li>\n        <li class=\"nav-item\"><a href=\"cards.html\" class=\"nav-link\">** General</a></li>\n        <li class=\"nav-item\"><a href=\"cards.html\" class=\"nav-link\">** Finished</a></li>\n        <li class=\"nav-item\"><a href=\"cards.html\" class=\"nav-link\">** Semi-Finished</a></li>\n        <li class=\"nav-item\"><a href=\"icons.html\" class=\"nav-link\">Employees</a></li>\n        <li class=\"nav-item\"><a href=\"modal.html\" class=\"nav-link\">Assets</a></li>\n        <li class=\"nav-item\"><a href=\"pagination.html\" class=\"nav-link\">Taxes</a></li>\n        <li class=\"nav-item\"><a href=\"popups.html\" class=\"nav-link\">Social Charges</a></li>\n        <li class=\"nav-item\"><a href=\"progress.html\" class=\"nav-link\">Parameters</a></li>\n        <li class=\"nav-item\"><a href=\"spinners.html\" class=\"nav-link\">Users</a></li>\n      </ul>\n      <a href=\"#\" class=\"br-menu-link\">\n        <div class=\"br-menu-item\">\n          <i class=\"menu-item-icon ion-ios-redo-outline tx-24\"></i>\n          <span class=\"menu-item-label\">Transactions</span>\n          <i class=\"menu-item-arrow fa fa-angle-down\"></i>\n        </div><!-- menu-item -->\n      </a><!-- br-menu-link -->\n      <ul class=\"br-menu-sub nav flex-column\">\n        <li class=\"nav-item\"><a href=\"navigation.html\" class=\"nav-link\">Entries</a></li>\n      </ul>\n      <a href=\"#\" class=\"br-menu-link\">\n        <div class=\"br-menu-item\">\n          <i class=\"menu-item-icon ion-ios-pie-outline tx-20\"></i>\n          <span class=\"menu-item-label\">Calculations</span>\n          <i class=\"menu-item-arrow fa fa-angle-down\"></i>\n        </div><!-- menu-item -->\n      </a><!-- br-menu-link -->\n      <ul class=\"br-menu-sub nav flex-column\">\n        <li class=\"nav-item\"><a href=\"chart-morris.html\" class=\"nav-link\">Cost Map</a></li>\n        <li class=\"nav-item\"><a href=\"chart-flot.html\" class=\"nav-link\">Finished Products</a></li>\n        <li class=\"nav-item\"><a href=\"chart-chartjs.html\" class=\"nav-link\">Semi-Finished Products</a></li>\n      </ul>\n      <a href=\"#\" class=\"br-menu-link\">\n        <div class=\"br-menu-item\">\n          <i class=\"menu-item-icon icon ion-ios-gear-outline tx-24\"></i>\n          <span class=\"menu-item-label\">Reports</span>\n          <i class=\"menu-item-arrow fa fa-angle-down\"></i>\n        </div><!-- menu-item -->\n      </a><!-- br-menu-link -->\n      <ul class=\"br-menu-sub nav flex-column\">\n        <li class=\"nav-item\"><a href=\"form-elements.html\" class=\"nav-link\">Demonstratives</a></li>\n        <li class=\"nav-item\"><a href=\"form-layouts.html\" class=\"nav-link\">** Expenses</a></li>\n        <li class=\"nav-item\"><a href=\"form-validation.html\" class=\"nav-link\">** Results</a></li>\n        <li class=\"nav-item\"><a href=\"form-wizards.html\" class=\"nav-link\">EBTIDA</a></li>\n      </ul>\n    </div><!-- br-sideleft-menu -->\n    <br>\n  </div><!-- br-sideleft -->\n  <!-- ########## END: LEFT PANEL ########## -->\n\n  <!-- ########## START: HEAD PANEL ########## -->\n  <div class=\"br-header\">\n    <div class=\"br-header-left\">\n      <div class=\"navicon-left hidden-md-down\"><a id=\"btnLeftMenu\" href=\"\"><i class=\"icon ion-navicon-round\"></i></a></div>\n      <div class=\"navicon-left hidden-lg-up\"><a id=\"btnLeftMenuMobile\" href=\"\"><i class=\"icon ion-navicon-round\"></i></a></div>\n    </div><!-- br-header-left -->\n    <div class=\"br-header-right\">\n      <nav class=\"nav\">\n      </nav>\n      <div class=\"navicon-right\">\n        <div class=\"dropdown\">\n          <a href=\"\" class=\"nav-link nav-link-profile\" data-toggle=\"dropdown\">\n            <span class=\"logged-name hidden-md-down\">{{user.full_name}}</span>\n            <i class=\"fa fa-angle-down mg-r-5\"></i>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-header wd-200\">\n            <ul class=\"list-unstyled user-profile-nav\">\n              <li><a href=\"\"><i class=\"icon ion-ios-person\"></i> Edit Profile</a></li>\n              <li><a href=\"\"><i class=\"icon ion-ios-gear\"></i> Settings</a></li>\n              <li><a href=\"\" (click)=\"logout()\"><i class=\"icon ion-power\"></i> Sign Out</a></li>\n            </ul>\n          </div><!-- dropdown-menu -->\n        </div><!-- dropdown -->\n      </div><!-- navicon-right -->\n    </div><!-- br-header-right -->\n  </div><!-- br-header -->\n  <!-- ########## END: HEAD PANEL ########## -->\n\n\n  <router-outlet></router-outlet>\n\n  <script>\n    $(function(){\n      'use strict'\n      // FOR DEMO ONLY\n      // menu collapsed by default during first page load or refresh with screen\n      // having a size between 992px and 1299px. This is intended on this page only\n      // for better viewing of widgets demo.\n      $(window).resize(function(){\n        minimizeMenu();\n      });\n\n      minimizeMenu();\n\n      function minimizeMenu() {\n        if(window.matchMedia('(min-width: 992px)').matches && window.matchMedia('(max-width: 1299px)').matches) {\n          // show only the icons and hide left menu label by default\n          $('.menu-item-label,.menu-item-arrow').addClass('op-lg-0-force d-lg-none');\n          $('body').addClass('collapsed-menu');\n          $('.show-sub + .br-menu-sub').slideUp();\n        } else if(window.matchMedia('(min-width: 1300px)').matches && !$('body').hasClass('collapsed-menu')) {\n          $('.menu-item-label,.menu-item-arrow').removeClass('op-lg-0-force d-lg-none');\n          $('body').removeClass('collapsed-menu');\n          $('.show-sub + .br-menu-sub').slideDown();\n        }\n      }\n    });\n  </script>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'frontend';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                var currentUrl = event.url;
                if (currentUrl.includes('register') || currentUrl.includes('login')) {
                    _this.noHeader = true;
                }
            }
        });
        if (localStorage.getItem('currentUser')) {
            this.user = JSON.parse(localStorage.getItem('currentUser'));
        }
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        location.reload();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _Components_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/auth/sign-up/sign-up.component */ "./src/app/Components/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _Components_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/auth/sign-in/sign-in.component */ "./src/app/Components/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _guards_authenticated_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_guards/authenticated.guard */ "./src/app/_guards/authenticated.guard.ts");
/* harmony import */ var _Components_branches_branches_overview_branches_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/branches/branches-overview/branches-overview.component */ "./src/app/Components/branches/branches-overview/branches-overview.component.ts");
/* harmony import */ var _Components_branches_branche_edit_branche_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/branches/branche-edit/branche-edit.component */ "./src/app/Components/branches/branche-edit/branche-edit.component.ts");
/* harmony import */ var _Components_branches_branch_add_branch_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/branches/branch-add/branch-add.component */ "./src/app/Components/branches/branch-add/branch-add.component.ts");
/* harmony import */ var _Components_branches_branches_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/branches/branches.component */ "./src/app/Components/branches/branches.component.ts");
/* harmony import */ var _Services_installation_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Services/installation.service */ "./src/app/Services/installation.service.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_helpers/jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_helpers/error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony import */ var _Services_branch_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Services/branch.service */ "./src/app/Services/branch.service.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _Components_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"],
                _Components_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"],
                _Components_branches_branches_overview_branches_overview_component__WEBPACK_IMPORTED_MODULE_12__["BranchesOverviewComponent"],
                _Components_branches_branche_edit_branche_edit_component__WEBPACK_IMPORTED_MODULE_13__["BrancheEditComponent"],
                _Components_branches_branch_add_branch_add_component__WEBPACK_IMPORTED_MODULE_14__["BranchAddComponent"],
                _Components_branches_branches_component__WEBPACK_IMPORTED_MODULE_15__["BranchesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__["AgGridModule"].withComponents([])
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                _guards_authenticated_guard__WEBPACK_IMPORTED_MODULE_11__["AuthenticatedGuard"],
                _Services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
                _Services_installation_service__WEBPACK_IMPORTED_MODULE_16__["InstallationService"],
                _Services_branch_service__WEBPACK_IMPORTED_MODULE_19__["BranchService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_17__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_18__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/env.ts":
/*!************************!*\
  !*** ./src/app/env.ts ***!
  \************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
// export const API_URL = 'http://miltonsonodadeploy.pythonanywhere.com';
var API_URL = 'http://127.0.0.1:5000/api';


/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _Components_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/auth/sign-up/sign-up.component */ "./src/app/Components/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _Components_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/auth/sign-in/sign-in.component */ "./src/app/Components/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _guards_authenticated_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_guards/authenticated.guard */ "./src/app/_guards/authenticated.guard.ts");
/* harmony import */ var _Components_branches_branches_overview_branches_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/branches/branches-overview/branches-overview.component */ "./src/app/Components/branches/branches-overview/branches-overview.component.ts");
/* harmony import */ var _Components_branches_branch_add_branch_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/branches/branch-add/branch-add.component */ "./src/app/Components/branches/branch-add/branch-add.component.ts");
/* harmony import */ var _Components_branches_branche_edit_branche_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/branches/branche-edit/branche-edit.component */ "./src/app/Components/branches/branche-edit/branche-edit.component.ts");
/* harmony import */ var _Components_branches_branches_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/branches/branches.component */ "./src/app/Components/branches/branches.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'register', component: _Components_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], canActivate: [_guards_authenticated_guard__WEBPACK_IMPORTED_MODULE_7__["AuthenticatedGuard"]] },
    { path: 'login', component: _Components_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_5__["SignInComponent"], canActivate: [_guards_authenticated_guard__WEBPACK_IMPORTED_MODULE_7__["AuthenticatedGuard"]] },
    { path: 'branches', component: _Components_branches_branches_component__WEBPACK_IMPORTED_MODULE_11__["BranchesComponent"],
        children: [
            { path: '', component: _Components_branches_branches_overview_branches_overview_component__WEBPACK_IMPORTED_MODULE_8__["BranchesOverviewComponent"] },
            { path: 'add', component: _Components_branches_branch_add_branch_add_component__WEBPACK_IMPORTED_MODULE_9__["BranchAddComponent"] },
            { path: 'edit/:rule_id', component: _Components_branches_branche_edit_branche_edit_component__WEBPACK_IMPORTED_MODULE_10__["BrancheEditComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nouser/Projects/freelancer/pph/milton/weprice/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map