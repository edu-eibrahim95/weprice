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

/***/ "./src/app/Components/accounts/account-add/account-add.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/Components/accounts/account-add/account-add.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/accounts/account-add/account-add.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/Components/accounts/account-add/account-add.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ 'acc_add.accounts' | translate }}</h4>\n    <p class=\"mg-b-0\">{{ \"acc_add.new\" | translate }}</p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ \"acc_add.new\" | translate }}</h6>\n      <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"acc_add.acc_type\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-b\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\"  name=\"type\" #type=\"ngModel\" ngModel [ngModel]=\"0\">\n                <option value=\"0\" selected=\"\">{{ \"acc_add.sin\" | translate }}</option>\n                <option value=\"1\">{{ \"acc_add.analit\" | translate }}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"acc_add.nat\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-a\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\"  name=\"nat\" #nat=\"ngModel\" ngModel [ngModel]=\"0\">\n                <option value=\"0\" selected=\"\">{{ \"acc_add.debit\" | translate }}</option>\n                <option value=\"1\">{{ \"acc_add.cred\" | translate }}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"acc_add.expense\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-d\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\"  name=\"expense_type\" #expense_type=\"ngModel\" ngModel [ngModel]=\"0\">\n                <option value=\"0\" selected=\"\">{{ \"acc_add.fix\" | translate }}</option>\n                <option value=\"1\">{{ \"acc_add.var\" | translate }}</option>\n                <option value=\"2\">{{ \"acc_add.both\" | translate }}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"acc_add.absorb\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-e\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\"  name=\"expense_abs_type\" #expense_abs_type=\"ngModel\" ngModel [ngModel]=\"0\">\n                <option value=\"0\" selected=\"\">{{ \"acc_add.no_absorb\" | translate }}</option>\n                <option value=\"1\">{{ \"acc_add.rate\" | translate }}</option>\n                <option value=\"2\">{{ \"acc_add.employ\" | translate }}</option>\n                <option value=\"3\">{{ \"acc_add.employ_quant\" | translate }}</option>\n                <option value=\"4\">{{ \"acc_add.employ_dir\" | translate }}</option>\n                <option value=\"5\">{{ \"acc_add.social\" | translate }}</option>\n                <option value=\"6\">{{ \"acc_add.dep\" | translate }}</option>\n                <option value=\"7\">{{ \"acc_add.sale\" | translate }}</option>\n                <option value=\"8\">{{ \"acc_add.entry\" | translate }}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"acc_add.code\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter Code\"\n                     name=\"code\" #code=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"acc_add.descript\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter Description\"\n                     name=\"description\" #description=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"acc_add.bgd\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input type=\"checkbox\"\n                     name=\"bdgentry_flag\" #bdgentry_flag=\"ngModel\" ngModel [ngModel]=\"1\">\n            </div>\n          </div><!-- row -->\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"acc_add.bgd_entry\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\"\n                     name=\"bdgentry_value\" #bdgentry_value=\"ngModel\" ngModel placeholder=\"Enter Area\">\n            </div>\n          </div><!-- row -->\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"acc_add.limit\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\"\n                     name=\"expense_limit_pct\" #expense_limit_pct=\"ngModel\" ngModel placeholder=\"Enter Expense Limit\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"acc_add.expense_var\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\"  type=\"number\"\n                     name=\"expense_var_pct\" #expense_var_pct=\"ngModel\" ngModel placeholder=\"EnterExpense Var\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"acc_add.avg\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"number\"\n                     name=\"months_qt_avg\" #months_qt_avg=\"ngModel\" ngModel placeholder=\"Enter Machines Quantity:\">\n            </div>\n          </div><!-- row -->\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"acc_add.ded\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\"  type=\"number\"\n                     name=\"expense_ded_pct\" #expense_ded_pct=\"ngModel\" ngModel placeholder=\"Enter Expense Ded Pct\">\n            </div>\n          </div><!-- row -->\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"acc_add.recov\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\"  type=\"number\"\n                     name=\"expense_recov_pct\" #expense_recov_pct=\"ngModel\" ngModel placeholder=\"Enter Expense recov pct\">\n            </div>\n          </div><!-- row -->\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"acc_add.flag\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input type=\"checkbox\"\n                     name=\"revenue_flag\" #revenue_flag=\"ngModel\" ngModel placeholder=\"Enter Area\" [ngModel]=\"1\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"acc_add.ear\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input type=\"checkbox\"\n                     name=\"earning_distrib_flag\" #earning_distrib_flag=\"ngModel\" ngModel placeholder=\"Enter Area\" [ngModel]=\"1\">\n            </div>\n          </div><!-- row -->\n\n        </div>\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/accounts/account-add/account-add.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Components/accounts/account-add/account-add.component.ts ***!
  \**************************************************************************/
/*! exports provided: AccountAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountAddComponent", function() { return AccountAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/account.service */ "./src/app/Services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountAddComponent = /** @class */ (function () {
    function AccountAddComponent(accountsApi, router, titleService, translate) {
        this.accountsApi = accountsApi;
        this.router = router;
        this.titleService = titleService;
        this.translate = translate;
        this.formChanged = false;
    }
    AccountAddComponent.prototype.ngOnInit = function () {
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_3__(".float-input");
            float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2)); });
            float_inputs.on('change', function () {
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2));
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__("input").on('change', function () {
                c.formChanged = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__("select").on('change', function () {
                c.formChanged = true;
            });
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("acc_add.new"));
        });
    };
    AccountAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        f.value.bdgentry_flag = (f.value.bdgentry_flag) ? 1 : 0;
        f.value.revenue_flag = (f.value.revenue_flag) ? 1 : 0;
        f.value.earning_distrib_flag = (f.value.earning_distrib_flag) ? 1 : 0;
        this.accountsSubs = this.accountsApi.addAccount(parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/accounts']);
                location.reload();
            }
        }, console.error);
    };
    AccountAddComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true }).then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/accounts']);
            } });
        }
        else {
            this.router.navigate(['/accounts']);
        }
        return false;
    };
    AccountAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-add',
            template: __webpack_require__(/*! ./account-add.component.html */ "./src/app/Components/accounts/account-add/account-add.component.html"),
            styles: [__webpack_require__(/*! ./account-add.component.css */ "./src/app/Components/accounts/account-add/account-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], AccountAddComponent);
    return AccountAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/accounts/account-edit/account-edit.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/accounts/account-edit/account-edit.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/accounts/account-edit/account-edit.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/Components/accounts/account-edit/account-edit.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n    <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\">{{ \"acc_edit.acc\" | translate }} </h4>\n        <p class=\"mg-b-0\">{{ \"acc_edit.edit\" | translate }} </p>\n    </div><!-- d-flex -->\n    <div class=\"br-pagebody\">\n        <div class=\"br-section-wrapper\">\n\n            <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ \"acc_edit.edit\" | translate }}</h6>\n            <form #f=\"ngForm\" *ngIf=\"account\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n                <div class=\"form-layout-footer mg-b-30 text-right\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n                <div class=\"form-layout form-layout-6\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"acc_edit.acc_type\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <select id=\"select2-b\" class=\"form-control select2-hidden-accessible\"\n                                    aria-hidden=\"true\"  name=\"type\" #type=\"ngModel\" ngModel [ngModel]=\"account.type\">\n                                <option value=\"0\" selected=\"\">{{ \"acc_edit.sin\" | translate }}</option>\n                                <option value=\"1\">{{ \"acc_edit.analit\" | translate }}</option>\n                            </select>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"acc_edit.nat\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <select id=\"select2-a\" class=\"form-control select2-hidden-accessible\"\n                                    aria-hidden=\"true\"  name=\"nat\" #nat=\"ngModel\" ngModel [ngModel]=\"account.nat\">\n                                <option value=\"0\" selected=\"\">{{ \"acc_edit.deb\" | translate }}</option>\n                                <option value=\"1\">{{ \"acc_edit.cred\" | translate }}</option>\n                            </select>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"acc_edit.expense\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <select id=\"select2-d\" class=\"form-control select2-hidden-accessible\"\n                                    aria-hidden=\"true\"  name=\"expense_type\" #expense_type=\"ngModel\" ngModel [ngModel]=\"account.expense_type\">\n                                <option value=\"0\" selected=\"\">{{ \"acc_edit.fix\" | translate }}</option>\n                                <option value=\"1\">{{ \"acc_edit.var\" | translate }}</option>\n                                <option value=\"2\">{{ \"acc_edit.both\" | translate }}</option>\n                            </select>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"acc_edit.absorb\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <select id=\"select2-e\" class=\"form-control select2-hidden-accessible\"\n                                    aria-hidden=\"true\"  name=\"expense_abs_type\" #expense_abs_type=\"ngModel\" ngModel [ngModel]=\"account.expense_abs_type\">\n                                <option value=\"0\" selected=\"\">{{ \"acc_edit.no_absorb\" | translate }}</option>\n                                <option value=\"1\">{{ \"acc_edit.rate\" | translate }}</option>\n                                <option value=\"2\">{{ \"acc_edit.employ\" | translate }}</option>\n                                <option value=\"3\">{{ \"acc_edit.employ_quant\" | translate }}</option>\n                                <option value=\"4\">{{ \"acc_edit.employ_dir\" | translate }}</option>\n                                <option value=\"5\">{{ \"acc_edit.social\" | translate }}</option>\n                                <option value=\"6\">{{ \"acc_edit.dep\" | translate }}</option>\n                                <option value=\"7\">{{ \"acc_edit.sale\" | translate }}</option>\n                                <option value=\"8\">{{ \"acc_edit.entry\" | translate }}</option>\n                            </select>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"acc_edit.code\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Enter Code\"\n                                   name=\"code\" #code=\"ngModel\" ngModel [ngModel]=\"account.code\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"acc_edit.descript\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Enter Description\"\n                                   name=\"description\" #description=\"ngModel\" ngModel [ngModel]=\"account.description\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"acc_edit.bgd\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input type=\"checkbox\"\n                                   name=\"bdgentry_flag\" #bdgentry_flag=\"ngModel\" ngModel [ngModel]=\"account.bdgentry_flag\">\n                        </div>\n                    </div><!-- row -->\n\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"acc_edit.bgd_entry\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\"  type=\"number\" [ngModel]=\"account.bdgentry_value\"\n                                   name=\"bdgentry_value\" #bdgentry_value=\"ngModel\" ngModel placeholder=\"Enter Area\">\n                        </div>\n                    </div><!-- row -->\n\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"acc_edit.limit\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\" [ngModel]=\"account.expense_limit_pct\"\n                                   name=\"expense_limit_pct\" #expense_limit_pct=\"ngModel\" ngModel placeholder=\"Enter Expense Limit\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"acc_edit.expense_var\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\" [ngModel]=\"account.expense_var_pct\"\n                                   name=\"expense_var_pct\" #expense_var_pct=\"ngModel\" ngModel placeholder=\"EnterExpense Var\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"acc_edit.avg\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"number\" [ngModel]=\"account.months_qt_avg\"\n                                   name=\"months_qt_avg\" #months_qt_avg=\"ngModel\" ngModel placeholder=\"Enter Machines Quantity:\">\n                        </div>\n                    </div><!-- row -->\n\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"acc_edit.ded\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\" [ngModel]=\"account.expense_ded_pct\"\n                                   name=\"expense_ded_pct\" #expense_ded_pct=\"ngModel\" ngModel placeholder=\"Enter Expense Ded Pct\">\n                        </div>\n                    </div><!-- row -->\n\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"acc_edit.recov\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\" [ngModel]=\"account.expense_recov_pct\"\n                                   name=\"expense_recov_pct\" #expense_recov_pct=\"ngModel\" ngModel placeholder=\"Enter Expense recov pct\">\n                        </div>\n                    </div><!-- row -->\n\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"acc_edit.flag\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input type=\"checkbox\"\n                                   name=\"revenue_flag\" #revenue_flag=\"ngModel\" ngModel placeholder=\"Enter Area\" [ngModel]=\"1\">\n                        </div>\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"acc_edit.ear\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input type=\"checkbox\" [ngModel]=\"account.earning_distrib_flag\"\n                                   name=\"earning_distrib_flag\" #earning_distrib_flag=\"ngModel\" ngModel placeholder=\"Enter Area\" >\n                        </div>\n                    </div><!-- row -->\n\n                </div>\n                <hr>\n                <div class=\"form-layout-footer mg-t-30 text-center\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/accounts/account-edit/account-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Components/accounts/account-edit/account-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: AccountEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEditComponent", function() { return AccountEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/account.service */ "./src/app/Services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountEditComponent = /** @class */ (function () {
    function AccountEditComponent(accountsApi, route, router, titleService, translate) {
        this.accountsApi = accountsApi;
        this.route = route;
        this.router = router;
        this.titleService = titleService;
        this.translate = translate;
        this.formChanged = false;
    }
    AccountEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountsSubs = this.accountsApi.getAccount(this.route.params['value']['rule_id']).subscribe(function (res) {
            _this.account = res['account'];
            var c = _this;
            jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
                var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_3__(".float-input");
                float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2)); });
                float_inputs.on('change', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2));
                });
                jquery__WEBPACK_IMPORTED_MODULE_3__("input").on('change', function () {
                    c.formChanged = true;
                });
                jquery__WEBPACK_IMPORTED_MODULE_3__("select").on('change', function () {
                    c.formChanged = true;
                });
                c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("acc_edit.edit"));
            });
        });
    };
    AccountEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        f.value.bdgentry_flag = (f.value.bdgentry_flag) ? 1 : 0;
        f.value.revenue_flag = (f.value.revenue_flag) ? 1 : 0;
        f.value.earning_distrib_flag = (f.value.earning_distrib_flag) ? 1 : 0;
        this.accountsSubs = this.accountsApi.editAccount(this.account.id, parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/accounts']);
                location.reload();
            }
        }, console.error);
    };
    AccountEditComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/accounts']);
            } });
        }
        else {
            this.router.navigate(['/accounts']);
        }
        return false;
    };
    AccountEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-edit',
            template: __webpack_require__(/*! ./account-edit.component.html */ "./src/app/Components/accounts/account-edit/account-edit.component.html"),
            styles: [__webpack_require__(/*! ./account-edit.component.css */ "./src/app/Components/accounts/account-edit/account-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
    ], AccountEditComponent);
    return AccountEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/accounts/account-overview/account-overview.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/accounts/account-overview/account-overview.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/accounts/account-overview/account-overview.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/Components/accounts/account-overview/account-overview.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\"> {{ \"overview.acount\" | translate }}  </h4>\n    <p class=\"mg-b-0\">{{ \"overview.list\" | translate }} </p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <div class=\"text-right\">\n        <a href=\"#\" (click)=\"massDeleteAccounts()\" class=\"btn btn-danger mg-r-10\" *ngIf=\"delete\">{{ \"globals.mass\" | translate }}</a>\n        <a routerLink=\"/accounts/add\" class=\"btn btn-success\" *ngIf=\"add\">{{ \"globals.new\" | translate }}</a>\n      </div>\n      <hr>\n      <ag-grid-angular\n              style=\"width: 100%;\"\n              class=\"ag-theme-material\"\n              [rowData]=\"rowData\"\n              [columnDefs]=\"columnDefs\"\n              [enableSorting]=\"true\"\n              [enableFilter]=\"true\"\n              [frameworkComponents]=\"frameworkComponents\"\n              rowSelection=\"multiple\"\n              [suppressRowClickSelection]=\"true\"\n              [rowMultiSelectWithClick]=\"false\"\n              (gridReady)=\"onGridReady($event)\"\n              (firstDataRendered)=\"onFirstDataRendered($event)\"\n              (gridSizeChanged)=\"onFirstDataRendered($event)\"\n              domLayout='autoHeight'\n              pagination=\"true\"\n              paginationPageSize=\"10\"\n      >\n      </ag-grid-angular>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/accounts/account-overview/account-overview.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/Components/accounts/account-overview/account-overview.component.ts ***!
  \************************************************************************************/
/*! exports provided: AccountOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountOverviewComponent", function() { return AccountOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/account.service */ "./src/app/Services/account.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _partials_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/account-details/account-details.component */ "./src/app/Components/partials/account-details/account-details.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountOverviewComponent = /** @class */ (function () {
    function AccountOverviewComponent(accountsApi, translate, titleService) {
        this.accountsApi = accountsApi;
        this.translate = translate;
        this.titleService = titleService;
        this.columnDefs = [];
        this.rowData = [];
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.frameworkComponents = {
            actionsFormatterComponent: _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
            detailsFormatterComponent: _partials_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_4__["AccountDetailsComponent"]
        };
    }
    AccountOverviewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
        var w = 7 / 9 * parseInt(jquery__WEBPACK_IMPORTED_MODULE_3__('.ag-theme-material').width());
        jquery__WEBPACK_IMPORTED_MODULE_3__('.details').width(w);
    };
    AccountOverviewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    AccountOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(function (res) {
            _this.accounts = res['accounts'];
            _this.accounts = _this.accounts.sort(function (a, b) { return a.nat - b.nat; });
            _this.accounts = _this.accounts.sort(function (a, b) { if (a.nat == b.nat)
                return ('' + a.code).localeCompare(b.code); });
            _this.add = res['add'];
            _this.edit = res['edit'];
            _this.delete = res['delete'];
            _this.columnDefs = [
                { headerName: '', field: 'check', checkboxSelection: true, width: 60 },
                { headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible' },
                { headerName: 'Code', field: 'code' },
                { headerName: 'Description', field: 'description' },
                { headerName: 'Type', field: 'type', cellRendererParams: { c: _this }, cellRenderer: function (params) {
                        var c = params.c;
                        if (params.value == 0) {
                            return c.translate.instant("acc_add.sin");
                        }
                        else if (params.value == 1) {
                            return c.translate.instant("acc_add.analit");
                        }
                    } },
                { headerName: 'Nat', field: 'nat', cellRendererParams: { c: _this }, cellRenderer: function (params) {
                        var c = params.c;
                        if (params.value == 0) {
                            return c.translate.instant("acc_edit.deb");
                        }
                        else if (params.value == 1) {
                            return c.translate.instant("acc_edit.cred");
                        }
                    } },
                { headerName: 'Exp Type', field: 'expense_type', cellRendererParams: { c: _this }, cellRenderer: function (params) {
                        var c = params.c;
                        if (params.value == 0) {
                            return c.translate.instant("acc_edit.fix");
                        }
                        else if (params.value == 1) {
                            return c.translate.instant("acc_add.var");
                        }
                        else if (params.value == 1) {
                            return c.translate.instant("acc_add.both");
                        }
                    } },
                { headerName: 'Abs Type', field: 'expense_abs_type', cellRendererParams: { c: _this }, cellRenderer: function (params) {
                        var c = params.c;
                        if (params.value == 0) {
                            return c.translate.instant("acc_add.no_absorb");
                        }
                        else if (params.value == 1) {
                            return c.translate.instant("acc_add.rate");
                        }
                        else if (params.value == 2) {
                            return c.translate.instant("acc_add.employ");
                        }
                        else if (params.value == 3) {
                            return c.translate.instant("acc_add.employ_quant");
                        }
                        else if (params.value == 4) {
                            return c.translate.instant("acc_add.employ_dir");
                        }
                        else if (params.value == 5) {
                            return c.translate.instant("acc_add.social");
                        }
                        else if (params.value == 6) {
                            return c.translate.instant("acc_add.dep");
                        }
                        else if (params.value == 7) {
                            return c.translate.instant("acc_add.sale");
                        }
                        else if (params.value == 8) {
                            return c.translate.instant("acc_add.entry");
                        }
                    } },
                { headerName: 'Exp Lim', field: 'expense_limit_pct' },
                { headerName: 'Exp Var', field: 'expense_var_pct' },
                { headerName: 'Avg Month', field: 'months_qt_avg' },
                { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
            ];
            for (var i = 0; i < _this.accounts.length; i++) {
                _this.accounts[i]['details'] = {
                    'row_id': i,
                    'id': _this.accounts[i].id,
                    'gridApi': _this.gridApi,
                    'gridColumnApi': _this.gridColumnApi
                };
                _this.accounts[i]['actions'] = {
                    'self': _this,
                    'id': _this.accounts[i].id,
                    'delete': [_this.delete, _this.deleteBranch],
                    'edit': [_this.edit, '/accounts/edit/']
                };
            }
            _this.rowData = _this.accounts;
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("acc_edit.acc"));
        });
    };
    AccountOverviewComponent.prototype.massDeleteAccounts = function () {
        var nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids = nodes.map(function (row) { return row.data.id; });
            var parameter = { ids: ids };
            if (confirm("Are You Sure Want To Delete ? ")) {
                this.accountsSubs = this.accountsApi.deleteAccount('mass', parameter).subscribe(function (res) {
                    if (res == 1) {
                        location.reload();
                    }
                }, console.error);
            }
        }
        return false;
    };
    AccountOverviewComponent.prototype.deleteBranch = function (id, type, self) {
        var parameter = {};
        if (confirm("Are You Sure Want To Delete ? ")) {
            this.accountsSubs = self.accountsApi.deleteAccount(id, parameter).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    AccountOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-overview',
            template: __webpack_require__(/*! ./account-overview.component.html */ "./src/app/Components/accounts/account-overview/account-overview.component.html"),
            styles: [__webpack_require__(/*! ./account-overview.component.css */ "./src/app/Components/accounts/account-overview/account-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], AccountOverviewComponent);
    return AccountOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/accounts/accounts.component.css":
/*!************************************************************!*\
  !*** ./src/app/Components/accounts/accounts.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/accounts/accounts.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Components/accounts/accounts.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Components/accounts/accounts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/accounts/accounts.component.ts ***!
  \***********************************************************/
/*! exports provided: AccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
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

var AccountsComponent = /** @class */ (function () {
    function AccountsComponent() {
    }
    AccountsComponent.prototype.ngOnInit = function () {
    };
    AccountsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accounts',
            template: __webpack_require__(/*! ./accounts.component.html */ "./src/app/Components/accounts/accounts.component.html"),
            styles: [__webpack_require__(/*! ./accounts.component.css */ "./src/app/Components/accounts/accounts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountsComponent);
    return AccountsComponent;
}());



/***/ }),

/***/ "./src/app/Components/asset-types/asset-type-add/asset-type-add.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/Components/asset-types/asset-type-add/asset-type-add.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/asset-types/asset-type-add/asset-type-add.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/asset-types/asset-type-add/asset-type-add.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n    <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\">{{ \"asset_add.type\" | translate }} </h4>\n        <p class=\"mg-b-0\">{{ \"asset_add.new_type\" | translate }} </p>\n    </div>\n    <div class=\"br-pagebody\">\n        <div class=\"br-section-wrapper\">\n            <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ \"asset_add.anew_type\" | translate }}</h6>\n            <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n                <div class=\"form-layout-footer mg-b-30 text-right\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n                <div class=\"form-layout form-layout-6\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"asset_add.acc\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <select id=\"select2-c\" class=\"form-control select2-hidden-accessible\"\n                                    aria-hidden=\"true\" name=\"account_id\" #account_id=\"ngModel\" ngModel [ngModel]=\"0\">\n                                <option value=\"0\" selected=\"\">{{ \"asset_add.select\" | translate }}</option>\n                                <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\">{{account.code}}</option>\n                            </select>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"asset_add.descript\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Enter description\"\n                                   name=\"description\" #description=\"ngModel\" ngModel>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"asset_add.year\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\"\n                                   name=\"years_lifetime\" #years_lifetime=\"ngModel\" ngModel placeholder=\"Enter years_lifetime\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"asset_add.life\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\"\n                                   name=\"residual_lifetime\" #residual_lifetime=\"ngModel\" ngModel placeholder=\"Enter Residual Lifetime\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"asset_add.interest\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\"\n                                   name=\"interest_year_pct\" #interest_year_pct=\"ngModel\" ngModel placeholder=\"Enter Interest Year Pct\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                </div><!-- form-layout -->\n                <hr>\n                <div class=\"form-layout-footer mg-t-30 text-center\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/asset-types/asset-type-add/asset-type-add.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/asset-types/asset-type-add/asset-type-add.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AssetTypeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetTypeAddComponent", function() { return AssetTypeAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/account.service */ "./src/app/Services/account.service.ts");
/* harmony import */ var _Services_asset_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/asset-type.service */ "./src/app/Services/asset-type.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AssetTypeAddComponent = /** @class */ (function () {
    function AssetTypeAddComponent(accountsApi, assetTypesApi, router, translate, titleService) {
        this.accountsApi = accountsApi;
        this.assetTypesApi = assetTypesApi;
        this.router = router;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    AssetTypeAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(function (res) {
            _this.accounts = res['accounts'];
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
            var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_4__(".float-input");
            float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2)); });
            float_inputs.on('change', function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2));
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("input").on('change', function () {
                c.formChanged = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("select").on('change', function () {
                c.formChanged = true;
            });
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("asset_add.new_type"));
        });
    };
    AssetTypeAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.assetTypesSubs = this.assetTypesApi.addAssetType(parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/asset_types']);
                location.reload();
            }
        }, console.error);
    };
    AssetTypeAddComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/asset_types']);
            } });
        }
        else {
            this.router.navigate(['/asset_types']);
        }
        return false;
    };
    AssetTypeAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset-type-add',
            template: __webpack_require__(/*! ./asset-type-add.component.html */ "./src/app/Components/asset-types/asset-type-add/asset-type-add.component.html"),
            styles: [__webpack_require__(/*! ./asset-type-add.component.css */ "./src/app/Components/asset-types/asset-type-add/asset-type-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"], _Services_asset_type_service__WEBPACK_IMPORTED_MODULE_2__["AssetTypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], AssetTypeAddComponent);
    return AssetTypeAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/asset-types/asset-type-edit/asset-type-edit.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/Components/asset-types/asset-type-edit/asset-type-edit.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/asset-types/asset-type-edit/asset-type-edit.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/Components/asset-types/asset-type-edit/asset-type-edit.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n    <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\">{{ \"asset_edit.type\" | translate }}</h4>\n        <p class=\"mg-b-0\">{{ \"asset_edit.edit\" | translate }} </p>\n    </div>\n    <div class=\"br-pagebody\">\n        <div class=\"br-section-wrapper\">\n            <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ \"asset_edit.edit_asset\" | translate }}</h6>\n            <form *ngIf=\"asset_type\" #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n                <div class=\"form-layout-footer mg-b-30 text-right\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n                <div class=\"form-layout form-layout-6\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"asset_edit.acc\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <select id=\"select2-c\" class=\"form-control select2-hidden-accessible\"\n                                    aria-hidden=\"true\" name=\"account_id\" #account_id=\"ngModel\" ngModel [ngModel]=\"asset_type.account_id\">\n                                <option value=\"0\" selected=\"\">{{ \"asset_edit.select\" | translate }}</option>\n                                <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\">{{account.code}}</option>\n                            </select>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"asset_edit.descript\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Enter description\"\n                                   name=\"description\" #description=\"ngModel\" ngModel [ngModel]=\"asset_type.description\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"asset_edit.year\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\" [ngModel]=\"asset_type.years_lifetime\"\n                                   name=\"years_lifetime\" #years_lifetime=\"ngModel\" ngModel placeholder=\"Enter years_lifetime\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"asset_edit.life\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\"  [ngModel]=\"asset_type.residual_lifetime\"\n                                   name=\"residual_lifetime\" #residual_lifetime=\"ngModel\" ngModel placeholder=\"Enter Residual Lifetime\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"asset_edit.interest\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\" [ngModel]=\"asset_type.interest_year_pct\"\n                                   name=\"interest_year_pct\" #interest_year_pct=\"ngModel\" ngModel placeholder=\"Enter Interest Year Pct\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                </div><!-- form-layout -->\n                <hr>\n                <div class=\"form-layout-footer mg-t-30 text-center\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/asset-types/asset-type-edit/asset-type-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/asset-types/asset-type-edit/asset-type-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AssetTypeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetTypeEditComponent", function() { return AssetTypeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/account.service */ "./src/app/Services/account.service.ts");
/* harmony import */ var _Services_asset_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/asset-type.service */ "./src/app/Services/asset-type.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AssetTypeEditComponent = /** @class */ (function () {
    function AssetTypeEditComponent(accountsApi, assetTypesApi, router, route, translate, titleService) {
        this.accountsApi = accountsApi;
        this.assetTypesApi = assetTypesApi;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    AssetTypeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(function (res) {
            _this.accounts = res['accounts'];
        });
        this.assetTypesSubs = this.assetTypesApi.getAssetType(this.route.params['value']['rule_id']).subscribe(function (res) {
            _this.asset_type = res['asset_type'];
            var c = _this;
            jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
                var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_4__(".float-input");
                float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2)); });
                float_inputs.on('change', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2));
                });
                jquery__WEBPACK_IMPORTED_MODULE_4__("input").on('change', function () {
                    c.formChanged = true;
                });
                jquery__WEBPACK_IMPORTED_MODULE_4__("select").on('change', function () {
                    c.formChanged = true;
                });
                c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("asset_edit.edit"));
            });
        });
    };
    AssetTypeEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.assetTypesSubs = this.assetTypesApi.editAssetType(this.asset_type.id, parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/asset_types']);
                location.reload();
            }
        }, console.error);
    };
    AssetTypeEditComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/asset_types']);
            } });
        }
        else {
            this.router.navigate(['/asset_types']);
        }
        return false;
    };
    AssetTypeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset-type-edit',
            template: __webpack_require__(/*! ./asset-type-edit.component.html */ "./src/app/Components/asset-types/asset-type-edit/asset-type-edit.component.html"),
            styles: [__webpack_require__(/*! ./asset-type-edit.component.css */ "./src/app/Components/asset-types/asset-type-edit/asset-type-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"], _Services_asset_type_service__WEBPACK_IMPORTED_MODULE_2__["AssetTypeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], AssetTypeEditComponent);
    return AssetTypeEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/asset-types/asset-type-overview/asset-type-overview.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/Components/asset-types/asset-type-overview/asset-type-overview.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/asset-types/asset-type-overview/asset-type-overview.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/Components/asset-types/asset-type-overview/asset-type-overview.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\"> {{ \"asset_overview.type\" | translate }} </h4>\n    <p class=\"mg-b-0\">{{ \"asset_overview.list\" | translate }} </p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <div class=\"text-left\">\n        <a routerLink=\"/assets\" class=\"btn btn-primary\"><i class=\"fa fa-long-arrow-left fa-lg\"><span style=\"font-family: Roboto, 'Helvetica Neue', Arial, sans-serif\">{{ \"asset_overview.asset\" | translate }}</span></i></a>\n        <div class=\"float-right\">\n          <a href=\"#\" (click)=\"massDeleteAssetTypes()\" class=\"btn btn-danger mg-r-10\" *ngIf=\"delete\">{{ \"globals.mass\" | translate }}</a>\n          <a routerLink=\"/asset_types/add\" class=\"btn btn-success\" *ngIf=\"add\">{{ \"globals.new\" | translate }}</a>\n        </div>\n      </div>\n      <hr>\n      <ag-grid-angular\n              style=\"width: 100%;\"\n              class=\"ag-theme-material\"\n              [rowData]=\"rowData\"\n              [columnDefs]=\"columnDefs\"\n              [enableSorting]=\"true\"\n              [enableFilter]=\"true\"\n              [frameworkComponents]=\"frameworkComponents\"\n              rowSelection=\"multiple\"\n              [rowMultiSelectWithClick]=\"true\"\n              (gridReady)=\"onGridReady($event)\"\n              (firstDataRendered)=\"onFirstDataRendered($event)\"\n              (gridSizeChanged)=\"onFirstDataRendered($event)\"\n              domLayout='autoHeight'\n              pagination=\"true\"\n              paginationPageSize=\"10\"\n      >\n      </ag-grid-angular>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/asset-types/asset-type-overview/asset-type-overview.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/Components/asset-types/asset-type-overview/asset-type-overview.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AssetTypeOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetTypeOverviewComponent", function() { return AssetTypeOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_asset_type_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/asset-type.service */ "./src/app/Services/asset-type.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AssetTypeOverviewComponent = /** @class */ (function () {
    function AssetTypeOverviewComponent(assetTypesApi, translate, titleService) {
        this.assetTypesApi = assetTypesApi;
        this.translate = translate;
        this.titleService = titleService;
        this.columnDefs = [];
        this.rowData = [];
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.frameworkComponents = {
            actionsFormatterComponent: _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
        };
    }
    AssetTypeOverviewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
    };
    AssetTypeOverviewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    AssetTypeOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assetTypesSubs = this.assetTypesApi.getAssetTypes().subscribe(function (res) {
            _this.assetTypes = res['asset_types'];
            _this.add = res['add'];
            _this.edit = res['edit'];
            _this.delete = res['delete'];
            _this.columnDefs = [
                { headerName: 'Description', field: 'description' },
                { headerName: 'Years Lifetime', field: 'years_lifetime' },
                { headerName: 'Residual Lifetime', field: 'residual_lifetime' },
                { headerName: 'Interest Year Pct', field: 'interest_year_pct' },
                { headerName: 'Account', field: 'account_name' },
                { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
            ];
            for (var i = 0; i < _this.assetTypes.length; i++) {
                _this.assetTypes[i]['actions'] = {
                    'id': _this.assetTypes[i].id,
                    'delete': [_this.delete, _this.deleteAssetType],
                    'edit': [_this.edit, '/asset_types/edit/'],
                    'self': _this
                };
            }
            _this.rowData = _this.assetTypes;
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("asset_add.type"));
        });
    };
    AssetTypeOverviewComponent.prototype.massDeleteAssetTypes = function () {
        var nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids = nodes.map(function (row) { return row.data.id; });
            var parameter = { ids: ids };
            if (confirm("Are You Sure Want To Delete ? ")) {
                this.assetTypesSubs = this.assetTypesApi.deleteAssetType('mass', parameter).subscribe(function (res) {
                    if (res == 1) {
                        location.reload();
                    }
                }, console.error);
            }
        }
        return false;
    };
    AssetTypeOverviewComponent.prototype.deleteAssetType = function (id, assetTypesApi, self) {
        var parameter = {};
        if (confirm("Are You Sure Want To Delete ? ")) {
            this.assetTypesSubs = self.assetTypesApi.deleteAssetType(id, parameter).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    AssetTypeOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset-type-overview',
            template: __webpack_require__(/*! ./asset-type-overview.component.html */ "./src/app/Components/asset-types/asset-type-overview/asset-type-overview.component.html"),
            styles: [__webpack_require__(/*! ./asset-type-overview.component.css */ "./src/app/Components/asset-types/asset-type-overview/asset-type-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_asset_type_service__WEBPACK_IMPORTED_MODULE_2__["AssetTypeService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], AssetTypeOverviewComponent);
    return AssetTypeOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/asset-types/asset-types.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Components/asset-types/asset-types.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/asset-types/asset-types.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Components/asset-types/asset-types.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Components/asset-types/asset-types.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/asset-types/asset-types.component.ts ***!
  \*****************************************************************/
/*! exports provided: AssetTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetTypesComponent", function() { return AssetTypesComponent; });
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

var AssetTypesComponent = /** @class */ (function () {
    function AssetTypesComponent() {
    }
    AssetTypesComponent.prototype.ngOnInit = function () {
    };
    AssetTypesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset-types',
            template: __webpack_require__(/*! ./asset-types.component.html */ "./src/app/Components/asset-types/asset-types.component.html"),
            styles: [__webpack_require__(/*! ./asset-types.component.css */ "./src/app/Components/asset-types/asset-types.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AssetTypesComponent);
    return AssetTypesComponent;
}());



/***/ }),

/***/ "./src/app/Components/assets/asset-add/asset-add.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/Components/assets/asset-add/asset-add.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/assets/asset-add/asset-add.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Components/assets/asset-add/asset-add.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ \"assets_add.asset\" | translate }} </h4>\n    <p class=\"mg-b-0\">{{ \"assets_add.new\" | translate }} </p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ \"assets_add.new\" | translate }}</h6>\n      <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"assets_add.type\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select *ngIf=\"assetTypes\" id=\"select2-a\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\"  name=\"type_id\" #type_id=\"ngModel\" ngModel [ngModel]=\"(assetTypes.length > 0) ? assetTypes[0].id : 0\">\n                <option *ngFor=\"let asset_type of assetTypes\" [value]=\"asset_type.id\" selected=\"\">{{asset_type.description}}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"assets_add.local\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select *ngIf=\"locals\" id=\"select2-b\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\"  name=\"local_id\" #local_id=\"ngModel\" ngModel [ngModel]=\"(locals.length > 0) ? locals[0].id : 0\">\n                <option *ngFor=\"let local of locals\" [value]=\"local.id\" selected=\"\">{{local.description}}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"assets_add.descript\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter description\"\n                     name=\"description\" #description=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"assets_add.det\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter description_det\"\n                     name=\"description_det\" #description_det=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"assets_add.invent\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" type=\"number\" min=\"0\"  step=\"0.01\"\n                     name=\"inventory_qt\" #inventory_qt=\"ngModel\" ngModel placeholder=\"Enter salary\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"assets_add.unit\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" type=\"number\" min=\"0\"  step=\"0.01\"\n                     name=\"cost_price_unit\" #cost_price_unit=\"ngModel\" ngModel placeholder=\"Enter cost_price_unit\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"assets_add.date\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\"\n                     name=\"acquisition_date\" #acquisition_date=\"ngModel\" ngModel placeholder=\"Enter acquisition_date\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"assets_add.start\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\"\n                     name=\"start_depr_date\" #start_depr_date=\"ngModel\" ngModel placeholder=\"Enter start_depr_date:\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"assets_add.expire\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\"\n                     name=\"expiration_depr_date\" #expiration_depr_date=\"ngModel\" ngModel placeholder=\"Enter expiration_depr_date:\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"assets_add.dep\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input type=\"checkbox\"\n                     name=\"depreciable_flag\" #depreciable_flag=\"ngModel\" ngModel [ngModel]=\"1\">\n            </div>\n          </div><!-- row -->\n        </div><!-- form-layout -->\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/assets/asset-add/asset-add.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Components/assets/asset-add/asset-add.component.ts ***!
  \********************************************************************/
/*! exports provided: AssetAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetAddComponent", function() { return AssetAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/branch.service */ "./src/app/Services/branch.service.ts");
/* harmony import */ var _Services_asset_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/asset.service */ "./src/app/Services/asset.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_asset_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/asset-type.service */ "./src/app/Services/asset-type.service.ts");
/* harmony import */ var _Services_local_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/local.service */ "./src/app/Services/local.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AssetAddComponent = /** @class */ (function () {
    function AssetAddComponent(branchesApi, assetApi, router, assetTypesApi, localsApi, translate, titleService) {
        this.branchesApi = branchesApi;
        this.assetApi = assetApi;
        this.router = router;
        this.assetTypesApi = assetTypesApi;
        this.localsApi = localsApi;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    AssetAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.branchesSubs = this.branchesApi.getBranches().subscribe(function (res) {
            _this.branches = res['branches'];
        });
        this.assetTypesSubs = this.assetTypesApi.getAssetTypes().subscribe(function (res) {
            _this.assetTypes = res['asset_types'];
        });
        this.localsSubs = this.localsApi.getLocals().subscribe(function (res) {
            _this.locals = res['locals'];
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_6__(document).ready(function () {
            var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_6__(".float-input");
            float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_6__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_6__(this).val()).toFixed(2)); });
            float_inputs.on('change', function () {
                jquery__WEBPACK_IMPORTED_MODULE_6__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_6__(this).val()).toFixed(2));
            });
            jquery__WEBPACK_IMPORTED_MODULE_6__("input").on('change', function () {
                c.formChanged = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_6__("select").on('change', function () {
                c.formChanged = true;
            });
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("assets_add.new"));
        });
    };
    AssetAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        f.value.depreciable_flag = (f.value.depreciable_flag) ? 1 : 0;
        var asset = JSON.stringify(f.value);
        this.assetsSubs = this.assetApi.addAsset(asset).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/assets']);
                location.reload();
            }
        }, console.error);
    };
    AssetAddComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/assets']);
            } });
        }
        else {
            this.router.navigate(['/assets']);
        }
        return false;
    };
    AssetAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset-add',
            template: __webpack_require__(/*! ./asset-add.component.html */ "./src/app/Components/assets/asset-add/asset-add.component.html"),
            styles: [__webpack_require__(/*! ./asset-add.component.css */ "./src/app/Components/assets/asset-add/asset-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"], _Services_asset_service__WEBPACK_IMPORTED_MODULE_2__["AssetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _Services_asset_type_service__WEBPACK_IMPORTED_MODULE_4__["AssetTypeService"], _Services_local_service__WEBPACK_IMPORTED_MODULE_5__["LocalService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]])
    ], AssetAddComponent);
    return AssetAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/assets/asset-edit/asset-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/Components/assets/asset-edit/asset-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/assets/asset-edit/asset-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/Components/assets/asset-edit/asset-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n    <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\"> {{ \"assets_edit.assets\" | translate }}</h4>\n        <p class=\"mg-b-0\">{{ \"assets_edit.edit\" | translate }} </p>\n    </div>\n    <div class=\"br-pagebody\">\n        <div class=\"br-section-wrapper\">\n            <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ \"assets_edit.edit\" | translate }}</h6>\n            <form *ngIf=\"asset\" #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n                <div class=\"form-layout-footer mg-b-30 text-right\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n                <div class=\"form-layout form-layout-6\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"assets_edit.type\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <select *ngIf=\"assetTypes\" id=\"select2-a\" class=\"form-control select2-hidden-accessible\"\n                                    aria-hidden=\"true\"  name=\"type_id\" #type_id=\"ngModel\" ngModel [ngModel]=\"asset.type_id\">\n                                <option *ngFor=\"let asset_type of assetTypes\" [value]=\"asset_type.id\" selected=\"\">{{asset_type.description}}</option>\n                            </select>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"assets_edit.local\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <select *ngIf=\"locals\" id=\"select2-b\" class=\"form-control select2-hidden-accessible\"\n                                    aria-hidden=\"true\"  name=\"local_id\" #local_id=\"ngModel\" ngModel [ngModel]=\"asset.local_id\">\n                                <option *ngFor=\"let local of locals\" [value]=\"local.id\" selected=\"\">{{local.description}}</option>\n                            </select>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"assets_edit.descript\" | translate }}                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Enter description\"\n                                   name=\"description\" #description=\"ngModel\" ngModel [ngModel]=\"asset.description\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"assets_edit.det\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Enter description_det\"\n                                   name=\"description_det\" #description_det=\"ngModel\" ngModel [ngModel]=\"asset.description_det\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"assets_edit.invent\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" type=\"number\" [ngModel]=\"asset.inventory_qt\" min=\"0\"  step=\"0.01\"\n                                   name=\"inventory_qt\" #inventory_qt=\"ngModel\" ngModel placeholder=\"Enter salary\">\n                        </div>\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"assets_edit.unit\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" type=\"number\" [ngModel]=\"asset.cost_price_unit\" min=\"0\"  step=\"0.01\"\n                                   name=\"cost_price_unit\" #cost_price_unit=\"ngModel\" ngModel placeholder=\"Enter cost_price_unit\">\n                        </div>\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"assets_edit.date\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"date\" [ngModel]=\"asset.acquisition_date\"\n                                   name=\"acquisition_date\" #acquisition_date=\"ngModel\" ngModel placeholder=\"Enter acquisition_date\">\n                        </div>\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"assets_edit.start\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"date\" [ngModel]=\"asset.start_depr_date\"\n                                   name=\"start_depr_date\" #start_depr_date=\"ngModel\" ngModel placeholder=\"Enter start_depr_date:\">\n                        </div>\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"assets_edit.expire\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"date\" [ngModel]=\"asset.expiration_depr_date\"\n                                   name=\"expiration_depr_date\" #expiration_depr_date=\"ngModel\" ngModel placeholder=\"Enter expiration_depr_date:\">\n                        </div>\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"assets_edit.flag\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input type=\"checkbox\" [ngModel]=\"asset.depreciable_flag\"\n                                   name=\"depreciable_flag\" #depreciable_flag=\"ngModel\" ngModel>\n                        </div>\n                    </div><!-- row -->\n                </div><!-- form-layout -->\n                <hr>\n                <div class=\"form-layout-footer mg-t-30 text-center\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/assets/asset-edit/asset-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Components/assets/asset-edit/asset-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: AssetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetEditComponent", function() { return AssetEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/branch.service */ "./src/app/Services/branch.service.ts");
/* harmony import */ var _Services_asset_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/asset.service */ "./src/app/Services/asset.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_asset_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/asset-type.service */ "./src/app/Services/asset-type.service.ts");
/* harmony import */ var _Services_local_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/local.service */ "./src/app/Services/local.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AssetEditComponent = /** @class */ (function () {
    function AssetEditComponent(branchesApi, assetsApi, router, route, assetTypesApi, localsApi, translate, titleService) {
        this.branchesApi = branchesApi;
        this.assetsApi = assetsApi;
        this.router = router;
        this.route = route;
        this.assetTypesApi = assetTypesApi;
        this.localsApi = localsApi;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    AssetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.branchesSubs = this.branchesApi.getBranches().subscribe(function (res) {
            _this.branches = res['branches'];
        });
        this.assetSubs = this.assetsApi.getAsset(this.route.params['value']['rule_id']).subscribe(function (res) {
            _this.asset = res['asset'];
            var c = _this;
            jquery__WEBPACK_IMPORTED_MODULE_6__(document).ready(function () {
                var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_6__(".float-input");
                float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_6__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_6__(this).val()).toFixed(2)); });
                float_inputs.on('change', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_6__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_6__(this).val()).toFixed(2));
                });
                jquery__WEBPACK_IMPORTED_MODULE_6__("input").on('change', function () {
                    c.formChanged = true;
                });
                jquery__WEBPACK_IMPORTED_MODULE_6__("select").on('change', function () {
                    c.formChanged = true;
                });
                c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("assets_edit.edit"));
            });
        });
        this.assetTypesSubs = this.assetTypesApi.getAssetTypes().subscribe(function (res) {
            _this.assetTypes = res['asset_types'];
        });
        this.localsSubs = this.localsApi.getLocals().subscribe(function (res) {
            _this.locals = res['locals'];
        });
    };
    AssetEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        f.value.depreciable_flag = (f.value.depreciable_flag) ? 1 : 0;
        var asset = JSON.stringify(f.value);
        this.assetSubs = this.assetsApi.editAsset(this.asset.id, asset).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/assets']);
                location.reload();
            }
        }, console.error);
    };
    AssetEditComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/assets']);
            } });
        }
        else {
            this.router.navigate(['/assets']);
        }
        return false;
    };
    AssetEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset-edit',
            template: __webpack_require__(/*! ./asset-edit.component.html */ "./src/app/Components/assets/asset-edit/asset-edit.component.html"),
            styles: [__webpack_require__(/*! ./asset-edit.component.css */ "./src/app/Components/assets/asset-edit/asset-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"], _Services_asset_service__WEBPACK_IMPORTED_MODULE_2__["AssetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _Services_asset_type_service__WEBPACK_IMPORTED_MODULE_4__["AssetTypeService"], _Services_local_service__WEBPACK_IMPORTED_MODULE_5__["LocalService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"]])
    ], AssetEditComponent);
    return AssetEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/assets/asset-overview/asset-overview.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/assets/asset-overview/asset-overview.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/assets/asset-overview/asset-overview.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/Components/assets/asset-overview/asset-overview.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\"> {{ \"assets_overview.asset\" | translate }} </h4>\n    <p class=\"mg-b-0\">{{ \"assets_overview.list\" | translate }} </p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <div class=\"text-right\">\n        <a href=\"#\" (click)=\"massDeleteAsset()\" class=\"btn btn-danger mg-r-10\" *ngIf=\"delete\">{{ \"globals.mass\" | translate }}</a>\n        <a routerLink=\"/assets/add\" class=\"btn btn-success mg-r-10\" *ngIf=\"add\">{{ \"globals.new\" | translate }}</a>\n        <a routerLink=\"/asset_types\" class=\"btn btn-warning  mg-r-10\">{{ \"assets_overview.manage\" | translate }}</a>\n        <a routerLink=\"/locals\" class=\"btn btn-warning mg-r-10\">{{ \"assets_overview.local\" | translate }}</a>\n      </div>\n      <hr>\n      <ag-grid-angular\n              style=\"width: 100%;\"\n              class=\"ag-theme-material\"\n              [rowData]=\"rowData\"\n              [columnDefs]=\"columnDefs\"\n              [enableSorting]=\"true\"\n              [enableFilter]=\"true\"\n              [frameworkComponents]=\"frameworkComponents\"\n              rowSelection=\"multiple\"\n              [rowMultiSelectWithClick]=\"false\"\n              [suppressRowClickSelection]=\"true\"\n              (gridReady)=\"onGridReady($event)\"\n              (firstDataRendered)=\"onFirstDataRendered($event)\"\n              (gridSizeChanged)=\"onFirstDataRendered($event)\"\n              domLayout='autoHeight'\n              pagination=\"true\"\n              paginationPageSize=\"10\"\n      >\n      </ag-grid-angular>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/assets/asset-overview/asset-overview.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Components/assets/asset-overview/asset-overview.component.ts ***!
  \******************************************************************************/
/*! exports provided: AssetOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetOverviewComponent", function() { return AssetOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_asset_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/asset.service */ "./src/app/Services/asset.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _partials_asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/asset-details/asset-details.component */ "./src/app/Components/partials/asset-details/asset-details.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AssetOverviewComponent = /** @class */ (function () {
    function AssetOverviewComponent(assetApi, translate, titleService) {
        this.assetApi = assetApi;
        this.translate = translate;
        this.titleService = titleService;
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.columnDefs = [];
        this.rowData = [];
        this.frameworkComponents = {
            actionsFormatterComponent: _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
            detailsFormatterComponent: _partials_asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_4__["AssetDetailsComponent"]
        };
    }
    AssetOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assetSubs = this.assetApi.getAssets().subscribe(function (res) {
            _this.assets = res['assets'];
            _this.add = res['add'];
            _this.edit = res['edit'];
            _this.delete = res['delete'];
            _this.columnDefs = [
                { headerName: '', field: 'check', checkboxSelection: true, width: 60 },
                { headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible' },
                { headerName: 'Description', field: 'description' },
                { headerName: 'Description_det', field: 'description_det' },
                { headerName: 'Inventory Qt', field: 'inventory_qt' },
                { headerName: 'Cost Price Unit', field: 'cost_price_unit' },
                { headerName: 'Acquisition Date', field: 'acquisition_date' },
                { headerName: 'Start Depr Date', field: 'start_depr_date' },
                { headerName: 'Expiration Depr Date', field: 'expiration_depr_date' },
                { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
            ];
            for (var i = 0; i < _this.assets.length; i++) {
                _this.assets[i]['details'] = {
                    'row_id': i,
                    'id': _this.assets[i].id,
                    'gridApi': _this.gridApi,
                    'gridColumnApi': _this.gridColumnApi
                };
                _this.assets[i]['actions'] = {
                    'self': _this,
                    'id': _this.assets[i].id,
                    'delete': [_this.delete, _this.deleteAsset],
                    'edit': [_this.edit, '/assets/edit/']
                };
            }
            _this.rowData = _this.assets;
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("assets_edit.assets"));
        });
    };
    AssetOverviewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
        var w = 7 / 9 * parseInt(jquery__WEBPACK_IMPORTED_MODULE_3__('.ag-theme-material').width());
        jquery__WEBPACK_IMPORTED_MODULE_3__('.details').width(w);
    };
    AssetOverviewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    AssetOverviewComponent.prototype.getGridApi = function () {
        return this.gridApi;
    };
    AssetOverviewComponent.prototype.deleteAsset = function (id, type, self) {
        var asset = {};
        if (confirm("Are You Sure Want To Delete ? ")) {
            this.assetSubs = self.assetApi.deleteAsset(id, asset).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    AssetOverviewComponent.prototype.massDeleteAsset = function () {
        var nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids = nodes.map(function (row) { return row.data.id; });
            var asset = { ids: ids };
            if (confirm("Are You Sure Want To Delete ? ")) {
                this.assetSubs = this.assetApi.deleteAsset('mass', asset).subscribe(function (res) {
                    if (res == 1) {
                        location.reload();
                    }
                }, console.error);
            }
        }
        return false;
    };
    AssetOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset-overview',
            template: __webpack_require__(/*! ./asset-overview.component.html */ "./src/app/Components/assets/asset-overview/asset-overview.component.html"),
            styles: [__webpack_require__(/*! ./asset-overview.component.css */ "./src/app/Components/assets/asset-overview/asset-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_asset_service__WEBPACK_IMPORTED_MODULE_2__["AssetService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], AssetOverviewComponent);
    return AssetOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/assets/assets.component.css":
/*!********************************************************!*\
  !*** ./src/app/Components/assets/assets.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/assets/assets.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/assets/assets.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Components/assets/assets.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/assets/assets.component.ts ***!
  \*******************************************************/
/*! exports provided: AssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsComponent", function() { return AssetsComponent; });
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

var AssetsComponent = /** @class */ (function () {
    function AssetsComponent() {
    }
    AssetsComponent.prototype.ngOnInit = function () {
    };
    AssetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assets',
            template: __webpack_require__(/*! ./assets.component.html */ "./src/app/Components/assets/assets.component.html"),
            styles: [__webpack_require__(/*! ./assets.component.css */ "./src/app/Components/assets/assets.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AssetsComponent);
    return AssetsComponent;
}());



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

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head> \n  <!-- Required meta tags -->\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n\n  <meta property=\"og:image\" content=\"\">\n  <meta property=\"og:image:secure_url\" content=\"\">\n  <meta property=\"og:image:type\" content=\"image/png\">\n  <meta property=\"og:image:width\" content=\"1200\">\n  <meta property=\"og:image:height\" content=\"600\">\n\n  <!-- Meta -->\n  <meta name=\"description\" content=\"\">\n  <meta name=\"author\" content=\"Ibrahim E.Gad\">\n\n  <title>{{ \"globals.project\" | translate }}</title>\n</head>\n\n<body>\n\n<div class=\"d-flex align-items-center justify-content-center bg-br-primary ht-100v\">\n\n  <div class=\"login-wrapper wd-300 wd-xs-350 pd-25 pd-xs-40 bg-white rounded shadow-base\">\n    <div class=\"signin-logo tx-center tx-28 tx-bold tx-inverse\"><span class=\"tx-normal\">[</span>  {{ \"globals.project\" | translate }}<span class=\"tx-normal\">]</span></div>\n    <div class=\"tx-center mg-b-60\">Permission to come aboard</div>\n    <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter your email\" name=\"email\" #email=\"ngModel\" ngModel id=\"email\">\n      </div><!-- form-group -->\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Enter your password\" name=\"password\" #password=\"ngModel\" ngModel id=\"password\">\n        <!--<a href=\"\" class=\"tx-info tx-12 d-block mg-t-10\">{{ \"signin.pass\" | translate }}</a>-->\n        <br>\n      </div><!-- form-group -->\n      <button type=\"submit\" class=\"btn btn-info btn-block\">{{ \"signin.sign\" | translate }}</button>\n    </form>\n    <!--<div class=\"mg-t-60 tx-center\"> {{ \"signin.mem\" | translate }}<a routerLink=\"/register\" class=\"tx-info\">{{ \"signin.up\" | translate }}</a></div>-->\n  </div><!-- login-wrapper -->\n</div><!-- d-flex -->\n\n</body>\n</html>\n"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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





var SignInComponent = /** @class */ (function () {
    function SignInComponent(authApi, router, route, titleService) {
        this.authApi = authApi;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
            c.titleService.setTitle("WePrice - Login");
        });
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
        __metadata("design:paramtypes", [_Services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
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

module.exports = "<div class=\"d-flex align-items-center justify-content-center bg-br-primary ht-100v\">\n\n  <div class=\"login-wrapper wd-300 wd-xs-400 pd-25 pd-xs-40 bg-white rounded shadow-base\">\n    <div class=\"signin-logo tx-center tx-28 tx-bold tx-inverse\"><span class=\"tx-normal\">[</span>  {{ \"signup.name\" | translate }}<span class=\"tx-normal\">]</span></div>\n    <div class=\"tx-center mg-b-40\">{{ \"signup.plat\" | translate }}</div>\n    <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter your email\" name=\"email\" #email=\"ngModel\" ngModel id=\"email\">\n      </div><!-- form-group -->\n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Enter your password\" name=\"password\" #password=\"ngModel\" ngModel id=\"password\">\n      </div><!-- form-group -->\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter your username\" name=\"name\" #name=\"ngModel\" ngModel id=\"name\">\n      </div><!-- form-group -->\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter your full name\" name=\"full_name\" #full_name=\"ngModel\" ngModel id=\"full_name\">\n      </div><!-- form-group -->\n      <div class=\"form-group tx-12\">{{ \"signup.privacy\" | translate }}</div>\n      <button type=\"submit\" class=\"btn btn-info btn-block\">Sign Up</button>\n    </form>\n    <div class=\"mg-t-40 tx-center\"> {{ \"signup.mem\" | translate }}<a routerLink=\"/login\" class=\"tx-info\">{{ \"signup.log\" | translate }}</a></div>\n  </div><!-- login-wrapper -->\n</div><!-- d-flex -->\n\n"

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

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n    <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\">{{ \"brancha.name\" | translate }} </h4>\n        <p class=\"mg-b-0\">{{ \"brancha.new\" | translate }} </p>\n    </div>\n    <div class=\"br-pagebody\">\n        <div class=\"br-section-wrapper\">\n            <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ \"brancha.new\" | translate }}</h6>\n            <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n                <div class=\"form-layout-footer mg-b-30 text-right\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n                <div class=\"form-layout form-layout-6\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"brancha.type\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <select id=\"select2-b\" class=\"form-control select2-hidden-accessible\"\n                                    aria-hidden=\"true\" (change)=\"changeType()\" name=\"type\" #type=\"ngModel\" ngModel [ngModel]=\"0\">\n                                <option value=\"0\" selected=\"\">{{ \"brancha.com\" | translate }}</option>\n                                <option value=\"1\">{{ \"brancha.bran\" | translate }}</option>\n                            </select>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div id=\"parent_branch\" class=\"row no-gutters d-none\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"brancha.parent\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <select id=\"select2-c\" class=\"form-control select2-hidden-accessible\"\n                                    aria-hidden=\"true\" name=\"parent_id\" #parent_id=\"ngModel\" ngModel [ngModel]=\"0\">\n                                <option value=\"0\" selected=\"\">{{ \"brancha.select\" | translate }}</option>\n                                <option *ngFor=\"let branch of branches\" value=\"{{branch.id}}\">{{branch.name}}</option>\n                            </select>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"brancha.neme\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Enter Branch Name\"\n                                   name=\"name\" #name=\"ngModel\" ngModel>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"brancha.area\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\"\n                                   name=\"area\" #area=\"ngModel\" ngModel placeholder=\"Enter Area\">\n                        </div>\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"brancha.month\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"number\"\n                                   name=\"interest_month_pct\" #interest_month_pct=\"ngModel\" ngModel placeholder=\"Enter Monthly Interest:\">\n                        </div>\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"brancha.avg\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\"\n                                   name=\"months_avg_qt\" #months_avg_qt=\"ngModel\" ngModel placeholder=\"Enter Avg Quantity Months\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"brancha.hour\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\"\n                                   name=\"workhours_day_qt\" #workhours_day_qt=\"ngModel\" ngModel placeholder=\"Enter Work hours per day\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"brancha.day\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\"\n                                   name=\"workdays_month_qt\" #workdays_month_qt=\"ngModel\" ngModel placeholder=\"Enter Work hours per day\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"brancha.stock\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\"\n                                   name=\"months_stock_qt\" #months_stock_qt=\"ngModel\" ngModel placeholder=\"Enter Months Stock Quantity\">\n                        </div>\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"brancha.rate\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\"\n                                   name=\"raw_material_rate_pct\" #raw_material_rate_pct=\"ngModel\" ngModel placeholder=\"Enter Raw Material Rate\">\n                        </div>\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"brancha.rec\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\"\n                                   name=\"days_rec_qt\" #days_rec_qt=\"ngModel\" ngModel placeholder=\"Enter Days Rec\">\n                        </div>\n                    </div><!-- row -->\n                </div><!-- form-layout -->\n                <hr>\n                <div class=\"form-layout-footer mg-t-30 text-center\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
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
    function BranchAddComponent(installationApi, branchesApi, router, translate, titleService) {
        this.installationApi = installationApi;
        this.branchesApi = branchesApi;
        this.router = router;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    BranchAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.installationSubs = this.installationApi.get().subscribe(function (res) {
            _this.installations = res['installations'];
        });
        this.branchesSubs = this.branchesApi.getParents().subscribe(function (res) {
            _this.branches = res['branches'];
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
            var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_4__(".float-input");
            float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2)); });
            float_inputs.on('change', function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2));
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("input").on('change', function () {
                c.formChanged = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("select").on('change', function () {
                c.formChanged = true;
            });
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("brancha.new"));
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
    BranchAddComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/branches']);
            } });
        }
        else {
            this.router.navigate(['/branches']);
        }
        return false;
    };
    BranchAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branch-add',
            template: __webpack_require__(/*! ./branch-add.component.html */ "./src/app/Components/branches/branch-add/branch-add.component.html"),
            styles: [__webpack_require__(/*! ./branch-add.component.css */ "./src/app/Components/branches/branch-add/branch-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_installation_service__WEBPACK_IMPORTED_MODULE_2__["InstallationService"], _Services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], BranchAddComponent);
    return BranchAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/branches/branch-edit/branch-edit.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/Components/branches/branch-edit/branch-edit.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/branches/branch-edit/branch-edit.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/Components/branches/branch-edit/branch-edit.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ \"branche.name\" | translate }} </h4>\n    <p class=\"mg-b-0\">{{ \"branche.edit\" | translate }} </p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ \"branche.edit\" | translate }}</h6>\n      <form *ngIf=\"branch\" #f=\"ngForm\" id=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"branche.type\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-b\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\" (change)=\"changeType()\" name=\"type\" #type=\"ngModel\" ngModel [ngModel]=\"branch.type\">\n                <option value=\"0\" selected=\"\">{{ \"branche.com\" | translate }}</option>\n                <option value=\"1\">{{ \"branche.bran\" | translate }}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div id=\"parent_branch\" class=\"row no-gutters\" *ngIf=\"branch.type == 1\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"branche.parent\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-c\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\" name=\"parent_id\" #parent_id=\"ngModel\" ngModel [ngModel]=\"branch.parent_id\">\n                <option value=\"0\" selected=\"\">{{ \"branche.select\" | translate }}</option>\n                <option *ngFor=\"let b of branches\" value=\"{{b.id}}\">{{b.name}}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"branche.nem\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter Branch Name\"\n                     name=\"name\" #name=\"ngModel\" ngModel [ngModel]=\"branch.name\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"branche.area\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\"\n                     name=\"area\" #area=\"ngModel\" ngModel placeholder=\"Enter Area\" [ngModel]=\"branch.area\">\n            </div>\n          </div>\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"branche.month\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"number\" [ngModel]=\"branch.interest_month_pct\"\n                     name=\"interest_month_pct\" #interest_month_pct=\"ngModel\" ngModel placeholder=\"Enter Monthly Interest:\">\n            </div>\n          </div>\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"branche.avg\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  type=\"number\" [ngModel]=\"branch.months_avg_qt\" step=\"0.01\"\n                     name=\"months_avg_qt\" #months_avg_qt=\"ngModel\" ngModel placeholder=\"Enter Avg Quantity Months\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"branche.hour\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  type=\"number\" [ngModel]=\"branch.workhours_day_qt\" step=\"0.01\"\n                     name=\"workhours_day_qt\" #workhours_day_qt=\"ngModel\" ngModel placeholder=\"Enter Work hours per day\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"branche.day\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  type=\"number\" [ngModel]=\"branch.workdays_month_qt\" step=\"0.01\"\n                     name=\"workdays_month_qt\" #workdays_month_qt=\"ngModel\" ngModel placeholder=\"Enter Work hours per day\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"branche.stock\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  type=\"number\" [ngModel]=\"branch.months_stock_qt\" step=\"0.01\"\n                     name=\"months_stock_qt\" #months_stock_qt=\"ngModel\" ngModel placeholder=\"Enter Months Stock Quantity\">\n            </div>\n          </div>\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"branche.raw\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  type=\"number\" [ngModel]=\"branch.raw_material_rate_pct\" ste=\"0.01\"\n                     name=\"raw_material_rate_pct\" #raw_material_rate_pct=\"ngModel\" ngModel placeholder=\"Enter Raw Material Rate\">\n            </div>\n          </div>\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"branche.rec\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  type=\"number\" [ngModel]=\"branch.days_rec_qt\" step=\"0.01\"\n                     name=\"days_rec_qt\" #days_rec_qt=\"ngModel\" ngModel placeholder=\"Enter Days Rec\">\n            </div>\n          </div>\n        </div><!-- form-layout -->\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/branches/branch-edit/branch-edit.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Components/branches/branch-edit/branch-edit.component.ts ***!
  \**************************************************************************/
/*! exports provided: BranchEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchEditComponent", function() { return BranchEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/branch.service */ "./src/app/Services/branch.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BranchEditComponent = /** @class */ (function () {
    function BranchEditComponent(branchesApi, router, route, translate, titleService) {
        this.branchesApi = branchesApi;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    BranchEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.branchesSubs = this.branchesApi.getParents().subscribe(function (res) {
            _this.branches = res['branches'];
        });
        this.branchesSubs = this.branchesApi.getBranch(this.route.params['value']['rule_id']).subscribe(function (res) {
            _this.branch = res['branch'];
            _this.branches = _this.branches.filter(function (e) { return e.id != _this.branch.id; });
            var c = _this;
            jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
                var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_3__(".float-input");
                float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2)); });
                float_inputs.on('change', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2));
                });
                jquery__WEBPACK_IMPORTED_MODULE_3__("input").on('change', function () {
                    c.formChanged = true;
                });
                jquery__WEBPACK_IMPORTED_MODULE_3__("select").on('change', function () {
                    c.formChanged = true;
                });
                c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("branche.edit"));
            });
        });
    };
    BranchEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.branchesSubs = this.branchesApi.editBranch(this.branch.id, parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/branches']);
                location.reload();
            }
        }, console.error);
    };
    BranchEditComponent.prototype.changeType = function () {
        var type = jquery__WEBPACK_IMPORTED_MODULE_3__("select[name=type]").val();
        this.branch.type = type;
    };
    BranchEditComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/branches']);
            } });
        }
        else {
            this.router.navigate(['/branches']);
        }
        return false;
    };
    BranchEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branche-edit',
            template: __webpack_require__(/*! ./branch-edit.component.html */ "./src/app/Components/branches/branch-edit/branch-edit.component.html"),
            styles: [__webpack_require__(/*! ./branch-edit.component.css */ "./src/app/Components/branches/branch-edit/branch-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], BranchEditComponent);
    return BranchEditComponent;
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

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ \"brancho.bran\" | translate }}</h4>\n    <p class=\"mg-b-0\">{{ \"brancho.list\" | translate }} </p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\" style=\"width: 100%\">\n      <div class=\"text-right\">\n        <a href=\"#\" (click)=\"massDeleteBranch()\" class=\"btn btn-danger mg-r-10\" *ngIf=\"delete\">{{ \"globals.mass\" | translate }}</a>\n        <a routerLink=\"/branches/add\" class=\"btn btn-success\" *ngIf=\"add\">{{ \"globals.new\" | translate }}</a>\n      </div>\n      <hr>\n      <ag-grid-angular\n              style=\"width: 100%;\"\n              class=\"ag-theme-material\"\n              [rowData]=\"rowData\"\n              [columnDefs]=\"columnDefs\"\n              [enableSorting]=\"true\"\n              [enableFilter]=\"true\"\n              [frameworkComponents]=\"frameworkComponents\"\n              rowSelection=\"multiple\"\n              [rowMultiSelectWithClick]=\"true\"\n              (gridReady)=\"onGridReady($event)\"\n              (firstDataRendered)=\"onFirstDataRendered($event)\"\n              (gridSizeChanged)=\"onFirstDataRendered($event)\"\n              domLayout='autoHeight'\n              pagination=\"true\"\n              paginationPageSize=\"10\"\n      >\n      </ag-grid-angular>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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
    function BranchesOverviewComponent(branchesApi, translate, titleService) {
        this.branchesApi = branchesApi;
        this.translate = translate;
        this.titleService = titleService;
        this.columnDefs = [];
        this.rowData = [];
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.frameworkComponents = {
            actionsFormatterComponent: _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_3__["ActionsFormatterComponent"],
        };
    }
    BranchesOverviewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
    };
    BranchesOverviewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    BranchesOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.branchesSubs = this.branchesApi.getBranches().subscribe(function (res) {
            _this.branches = res['branches'];
            _this.add = res['add'];
            _this.edit = res['edit'];
            _this.delete = res['delete'];
            _this.columnDefs = [
                { headerName: _this.translate.instant('brancha.bran'), field: 'name' },
                { headerName: 'Area', field: 'area' },
                { headerName: 'Monthly AVG QT', field: 'months_avg_qt' },
                { headerName: 'Monthly Interest', field: 'interest_month_pct' },
                { headerName: 'Work Hours / Day', field: 'workhours_day_qt' },
                { headerName: 'Work Days / Month', field: 'workdays_month_qt' },
                { headerName: 'Monthly Stock QT', field: 'months_stock_qt' },
                { headerName: 'Raw Material Rate', field: 'raw_material_rate_pct' },
                { headerName: 'Days Rec', field: 'days_rec_qt' },
                { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
            ];
            for (var i = 0; i < _this.branches.length; i++) {
                _this.branches[i]['actions'] = {
                    'self': _this,
                    'id': _this.branches[i].id,
                    'delete': [_this.delete, _this.deleteBranch],
                    'edit': [_this.edit, '/branches/edit/']
                };
            }
            _this.rowData = _this.branches;
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("branche.name"));
        });
    };
    BranchesOverviewComponent.prototype.deleteBranch = function (id, type, self) {
        var parameter = {};
        if (confirm("Are You Sure Want To Delete ? ")) {
            this.branchesSubs = self.branchesApi.deleteBranch(id, parameter).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    BranchesOverviewComponent.prototype.massDeleteBranch = function () {
        var nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids = nodes.map(function (row) { return row.data.id; });
            var parameter = { ids: ids };
            if (confirm("Are You Sure Want To Delete ? ")) {
                this.branchesSubs = this.branchesApi.deleteBranch('mass', parameter).subscribe(function (res) {
                    if (res == 1) {
                        location.reload();
                    }
                }, console.error);
            }
        }
        return false;
    };
    BranchesOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branches-overview',
            template: __webpack_require__(/*! ./branches-overview.component.html */ "./src/app/Components/branches/branches-overview/branches-overview.component.html"),
            styles: [__webpack_require__(/*! ./branches-overview.component.css */ "./src/app/Components/branches/branches-overview/branches-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
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

/***/ "./src/app/Components/cost-centers/cost-center-add/cost-center-add.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/Components/cost-centers/cost-center-add/cost-center-add.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/cost-centers/cost-center-add/cost-center-add.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/Components/cost-centers/cost-center-add/cost-center-add.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n    <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\"> {{ \"costa.cost\" | translate }}</h4>\n        <p class=\"mg-b-0\">{{ \"costa.new\" | translate }}</p>\n    </div><!-- d-flex -->\n    <div class=\"br-pagebody\">\n        <div class=\"br-section-wrapper\">\n            <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ \"costa.add\" | translate }}</h6>\n            <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n                <div class=\"form-layout-footer mg-b-30 text-right\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n                <div class=\"form-layout form-layout-6\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"costa.type\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <select id=\"select2-b\" class=\"form-control select2-hidden-accessible\"\n                                    aria-hidden=\"true\"  name=\"type\" #type=\"ngModel\" ngModel [ngModel]=\"0\" (change)=\"changeType()\" >\n                                <option value=\"0\" selected=\"\">{{ \"costa.build\" | translate }}</option>\n                                <option value=\"1\">{{ \"costa.supp\" | translate }}</option>\n                                <option value=\"2\">{{ \"costa.dire\" | translate }}</option>\n                                <option value=\"3\">{{ \"costa.comm\" | translate }}</option>\n                            </select>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"costa.name\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Enter Cost Center Name\"\n                                   name=\"name\" #name=\"ngModel\" ngModel>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"costa.area\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\" [ngModel]=\"0\"\n                                   name=\"area\" #area=\"ngModel\" ngModel placeholder=\"Enter Area\">\n                        </div>\n                    </div><!-- row -->\n                    <div class=\"row no-gutters d-none direct\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"costa.hours\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\" [ngModel]=\"0\"\n                                   name=\"workhours_qt\" #workhours_qt=\"ngModel\" ngModel placeholder=\"Enter Work hours per day\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters d-none direct\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"costa.days\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\" [ngModel]=\"0\"\n                                   name=\"workdays_qt\" #workdays_qt=\"ngModel\" ngModel placeholder=\"Enter Work hours per day\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters d-none direct\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"costa.mach\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\" [ngModel]=\"0\"\n                                   name=\"machines_qt\" #machines_qt=\"ngModel\" ngModel placeholder=\"Enter Machines Quantity:\">\n                        </div>\n                    </div><!-- row -->\n                    <div class=\"row no-gutters d-none comm\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"costa.sales\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\" [ngModel]=\"0\"\n                                   name=\"sales_revenue\" #sales_revenue=\"ngModel\" ngModel placeholder=\"Enter Sales Revenue:\">\n                        </div>\n                    </div><!-- row -->\n                    <div class=\"row no-gutters d-none comm\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"costo.day_rec_qt\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\" [ngModel]=\"0\"\n                                   name=\"day_rec_qt\" #day_rec_qt=\"ngModel\" ngModel placeholder=\"Enter Day Rect QT:\">\n                        </div>\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"costo.abs_order\" | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" min=\"0\"  type=\"number\" [ngModel]=\"0\"\n                                   name=\"abs_order\" #abs_order=\"ngModel\" ngModel placeholder=\"Enter Absolute Order:\">\n                        </div>\n                    </div><!-- row -->\n                </div>\n                <hr>\n                <div class=\"form-layout-footer mg-t-30 text-center\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/cost-centers/cost-center-add/cost-center-add.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/Components/cost-centers/cost-center-add/cost-center-add.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CostCenterAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostCenterAddComponent", function() { return CostCenterAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_cost_centers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/cost-centers.service */ "./src/app/Services/cost-centers.service.ts");
/* harmony import */ var _Services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/branch.service */ "./src/app/Services/branch.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CostCenterAddComponent = /** @class */ (function () {
    function CostCenterAddComponent(branchesApi, costCentersApi, router, translate, titleService) {
        this.branchesApi = branchesApi;
        this.costCentersApi = costCentersApi;
        this.router = router;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    CostCenterAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.branchesSubs = this.branchesApi.getBranches().subscribe(function (res) {
            _this.branches = res['branches'];
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
            var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_4__(".float-input");
            float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2)); });
            float_inputs.on('change', function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2));
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("input").on('change', function () {
                c.formChanged = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("select").on('change', function () {
                c.formChanged = true;
            });
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("costa.new"));
        });
    };
    CostCenterAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.costCentersSubs = this.costCentersApi.addCostCenter(parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/cost_centers']);
                location.reload();
            }
        }, console.error);
    };
    CostCenterAddComponent.prototype.changeType = function () {
        var s = jquery__WEBPACK_IMPORTED_MODULE_4__("select[name=type]").val();
        if (s == 2) {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.direct').removeClass('d-none');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.direct').addClass('d-none');
        }
        if (s == 3) {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.comm').removeClass('d-none');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.comm').addClass('d-none');
        }
    };
    CostCenterAddComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/cost_centers']);
            } });
        }
        else {
            this.router.navigate(['/cost_centers']);
        }
        return false;
    };
    CostCenterAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cost-center-add',
            template: __webpack_require__(/*! ./cost-center-add.component.html */ "./src/app/Components/cost-centers/cost-center-add/cost-center-add.component.html"),
            styles: [__webpack_require__(/*! ./cost-center-add.component.css */ "./src/app/Components/cost-centers/cost-center-add/cost-center-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"], _Services_cost_centers_service__WEBPACK_IMPORTED_MODULE_2__["CostCentersService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], CostCenterAddComponent);
    return CostCenterAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/cost-centers/cost-center-edit/cost-center-edit.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/Components/cost-centers/cost-center-edit/cost-center-edit.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/cost-centers/cost-center-edit/cost-center-edit.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/Components/cost-centers/cost-center-edit/cost-center-edit.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ \"coste.cost\" | translate }} </h4>\n    <p class=\"mg-b-0\">{{ \"coste.edit\" | translate }} </p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ \"coste.edit\" | translate }}</h6>\n      <form *ngIf=\"cost_center\" #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"coste.type\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-b\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\"  name=\"type\" #type=\"ngModel\" ngModel [ngModel]=\"cost_center.type\" (change)=\"changeType()\">\n                <option value=\"0\" selected=\"\">{{ \"coste.build\" | translate }}</option>\n                <option value=\"1\"> {{ \"coste.supp\" | translate }}</option>\n                <option value=\"2\"> {{ \"coste.dire\" | translate }}</option>\n                <option value=\"3\"> {{ \"coste.comm\" | translate }}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"coste.name\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter Cost Center Name\"\n                     name=\"name\" #name=\"ngModel\" ngModel [ngModel]=\"cost_center.name\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"coste.area\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\"\n                     name=\"area\" #area=\"ngModel\" ngModel placeholder=\"Enter Area\" [ngModel]=\"cost_center.area\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters {{ cost_center.type == 2 ? '' : 'd-none'}} direct\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"coste.hours\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\"\n                     name=\"workhours_qt\" #workhours_qt=\"ngModel\" ngModel placeholder=\"Enter Work hours per day\" [ngModel]=\"cost_center.workhours_qt\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters {{ cost_center.type == 2 ? '' : 'd-none'}} direct\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"coste.days\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\"\n                     name=\"workdays_qt\" #workdays_qt=\"ngModel\" ngModel placeholder=\"Enter Work hours per day\" [ngModel]=\"cost_center.workdays_qt\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters {{ cost_center.type == 2 ? '' : 'd-none'}} direct\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"coste.mach\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\"\n                     name=\"machines_qt\" #machines_qt=\"ngModel\" ngModel placeholder=\"Enter Machines Quantity:\" [ngModel]=\"cost_center.machines_qt\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters {{ cost_center.type == 3 ? '' : 'd-none'}} comm\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"coste.sales\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\"\n                     name=\"sales_revenue\" #sales_revenue=\"ngModel\" ngModel placeholder=\"Enter Sales Revenue:\" [ngModel]=\"cost_center.sales_revenue\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters {{ cost_center.type == 3 ? '' : 'd-none'}} comm\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"costo.day_rec_qt\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  type=\"number\" step=\"0.01\" [ngModel]=\"cost_center.day_rec_qt\"\n                     name=\"day_rec_qt\" #day_rec_qt=\"ngModel\" ngModel placeholder=\"Enter Day Rect QT:\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"costo.abs_order\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" min=\"0\"  type=\"number\" [ngModel]=\"cost_center.abs_order\"\n                     name=\"abs_order\" #abs_order=\"ngModel\" ngModel placeholder=\"Enter Absolute Order:\">\n            </div>\n          </div><!-- row -->\n        </div>\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/cost-centers/cost-center-edit/cost-center-edit.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/Components/cost-centers/cost-center-edit/cost-center-edit.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CostCenterEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostCenterEditComponent", function() { return CostCenterEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/branch.service */ "./src/app/Services/branch.service.ts");
/* harmony import */ var _Services_cost_centers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/cost-centers.service */ "./src/app/Services/cost-centers.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CostCenterEditComponent = /** @class */ (function () {
    function CostCenterEditComponent(branchesApi, costCentersApi, router, route, translate, titleService) {
        this.branchesApi = branchesApi;
        this.costCentersApi = costCentersApi;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    CostCenterEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.branchesSubs = this.branchesApi.getBranches().subscribe(function (res) {
            _this.branches = res['branches'];
        });
        this.costCentersSubs = this.costCentersApi.getCostCenter(this.route.params['value']['rule_id']).subscribe(function (res) {
            _this.cost_center = res['cost_center'];
            var c = _this;
            jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
                var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_4__(".float-input");
                float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2)); });
                float_inputs.on('change', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2));
                });
                jquery__WEBPACK_IMPORTED_MODULE_4__("input").on('change', function () {
                    c.formChanged = true;
                });
                jquery__WEBPACK_IMPORTED_MODULE_4__("select").on('change', function () {
                    c.formChanged = true;
                });
            });
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("coste.edit"));
        });
    };
    CostCenterEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.costCentersSubs = this.costCentersApi.editCostCenter(this.cost_center.id, parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/cost_centers']);
                location.reload();
            }
        }, console.error);
    };
    CostCenterEditComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/cost_centers']);
            } });
        }
        else {
            this.router.navigate(['/cost_centers']);
        }
        return false;
    };
    CostCenterEditComponent.prototype.changeType = function () {
        var s = jquery__WEBPACK_IMPORTED_MODULE_4__("select[name=type]").val();
        if (s == 2) {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.direct').removeClass('d-none');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.direct').addClass('d-none');
        }
        if (s == 3) {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.comm').removeClass('d-none');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.comm').addClass('d-none');
        }
    };
    CostCenterEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cost-center-edit',
            template: __webpack_require__(/*! ./cost-center-edit.component.html */ "./src/app/Components/cost-centers/cost-center-edit/cost-center-edit.component.html"),
            styles: [__webpack_require__(/*! ./cost-center-edit.component.css */ "./src/app/Components/cost-centers/cost-center-edit/cost-center-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"], _Services_cost_centers_service__WEBPACK_IMPORTED_MODULE_2__["CostCentersService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], CostCenterEditComponent);
    return CostCenterEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/cost-centers/cost-center-overview/cost-center-overview.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/Components/cost-centers/cost-center-overview/cost-center-overview.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/cost-centers/cost-center-overview/cost-center-overview.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/Components/cost-centers/cost-center-overview/cost-center-overview.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ \"costo.cost\" | translate }} </h4>\n    <p class=\"mg-b-0\">{{ \"costo.list\" | translate }} </p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <div class=\"text-right\">\n        <a href=\"#\" (click)=\"massDeleteCostCenter()\" class=\"btn btn-danger mg-r-10\" *ngIf=\"delete\">{{ \"globals.mass\" | translate }}</a>\n        <a routerLink=\"/cost_centers/add\" class=\"btn btn-success\" *ngIf=\"add\">{{ \"globals.new\" | translate }}</a>\n      </div>\n      <hr>\n      <ag-grid-angular\n              style=\"width: 100%;\"\n              class=\"ag-theme-material\"\n              [rowData]=\"rowData\"\n              [columnDefs]=\"columnDefs\"\n              [enableSorting]=\"true\"\n              [enableFilter]=\"true\"\n              [frameworkComponents]=\"frameworkComponents\"\n              rowSelection=\"multiple\"\n              [rowMultiSelectWithClick]=\"false\"\n              [suppressRowClickSelection]=\"true\"\n              (gridReady)=\"onGridReady($event)\"\n              (firstDataRendered)=\"onFirstDataRendered($event)\"\n              (gridSizeChanged)=\"onFirstDataRendered($event)\"\n              domLayout='autoHeight'\n              pagination=\"true\"\n              paginationPageSize=\"10\"\n      >\n      </ag-grid-angular>\n      <!--rowSelection=\"multiple\"-->\n      <!--[rowMultiSelectWithClick]=\"true\"-->\n    </div>\n    <br>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/cost-centers/cost-center-overview/cost-center-overview.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/Components/cost-centers/cost-center-overview/cost-center-overview.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CostCenterOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostCenterOverviewComponent", function() { return CostCenterOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_cost_centers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/cost-centers.service */ "./src/app/Services/cost-centers.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _partials_cost_center_details_cost_center_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/cost-center-details/cost-center-details.component */ "./src/app/Components/partials/cost-center-details/cost-center-details.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CostCenterOverviewComponent = /** @class */ (function () {
    function CostCenterOverviewComponent(costCenterApi, translate, titleService) {
        this.costCenterApi = costCenterApi;
        this.translate = translate;
        this.titleService = titleService;
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.columnDefs = [];
        this.rowData = [];
        this.frameworkComponents = {
            actionsFormatterComponent: _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
            detailsFormatterComponent: _partials_cost_center_details_cost_center_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsFormatterComponent"]
        };
    }
    CostCenterOverviewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
        var w = 7 / 9 * parseInt(jquery__WEBPACK_IMPORTED_MODULE_3__('.ag-theme-material').width());
        jquery__WEBPACK_IMPORTED_MODULE_3__('.details').width(w);
    };
    CostCenterOverviewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    CostCenterOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.costCenterSubs = this.costCenterApi.getCostCenters().subscribe(function (res) {
            _this.cost_centers = res['cost_centers'];
            _this.add = res['add'];
            _this.edit = res['edit'];
            _this.delete = res['delete'];
            _this.columnDefs = [
                { headerName: '', field: 'check', checkboxSelection: true, width: 60 },
                { headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible' },
                { headerName: 'Cost Center', field: 'name' },
                { headerName: 'Type', field: 'type', cellRendererParams: { c: _this }, cellRenderer: function (params) {
                        var c = params.c;
                        if (params.value == 0) {
                            return c.translate.instant("costa.build");
                        }
                        else if (params.value == 1) {
                            return c.translate.instant("costa.supp");
                        }
                        else if (params.value == 2) {
                            return c.translate.instant("costa.dire");
                        }
                        else if (params.value == 3) {
                            return c.translate.instant("costa.comm");
                        }
                    } },
                { headerName: 'Area', field: 'area' },
                { headerName: 'Work Hours / Day', field: 'workhours_qt', cellRenderer: function (params) {
                        if (params.data.type != 2)
                            return '-';
                        else
                            return params.value;
                    } },
                { headerName: 'Work Days / Month', field: 'workdays_qt', cellRenderer: function (params) {
                        if (params.data.type != 2)
                            return '-';
                        else
                            return params.value;
                    } },
                { headerName: 'Machines QT', field: 'machines_qt', cellRenderer: function (params) {
                        if (params.data.type != 2)
                            return '-';
                        else
                            return params.value;
                    } },
                { headerName: 'Sales Revenue', field: 'sales_revenue', cellRenderer: function (params) {
                        if (params.data.type != 3)
                            return '-';
                        else
                            return params.value;
                    } },
                { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
            ];
            for (var i = 0; i < _this.cost_centers.length; i++) {
                _this.cost_centers[i]['details'] = { 'type': _this.cost_centers[i].type, 'row_id': i, 'id': _this.cost_centers[i].id, 'gridApi': _this.gridApi, 'gridColumnApi': _this.gridColumnApi };
                _this.cost_centers[i]['actions'] = {
                    'self': _this,
                    'id': _this.cost_centers[i].id,
                    'delete': [_this.delete, _this.deleteCostCenter],
                    'edit': [_this.edit, '/cost_centers/edit/']
                };
            }
            _this.rowData = _this.cost_centers;
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("costa.cost"));
        });
    };
    CostCenterOverviewComponent.prototype.deleteCostCenter = function (id, type, self) {
        var parameter = {};
        if (confirm("Are You Sure Want To Delete ? ")) {
            this.costCenterSubs = self.costCenterApi.deleteCostCenter(id, parameter).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    CostCenterOverviewComponent.prototype.massDeleteCostCenter = function () {
        var nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids = nodes.map(function (row) { return row.data.id; });
            var parameter = { ids: ids };
            if (confirm("Are You Sure Want To Delete ? ")) {
                this.costCenterSubs = this.costCenterApi.deleteCostCenter('mass', parameter).subscribe(function (res) {
                    if (res == 1) {
                        location.reload();
                    }
                }, console.error);
            }
        }
        return false;
    };
    CostCenterOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cost-center-over-view',
            template: __webpack_require__(/*! ./cost-center-overview.component.html */ "./src/app/Components/cost-centers/cost-center-overview/cost-center-overview.component.html"),
            styles: [__webpack_require__(/*! ./cost-center-overview.component.css */ "./src/app/Components/cost-centers/cost-center-overview/cost-center-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_cost_centers_service__WEBPACK_IMPORTED_MODULE_2__["CostCentersService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], CostCenterOverviewComponent);
    return CostCenterOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/cost-centers/cost-center.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/Components/cost-centers/cost-center.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/cost-centers/cost-center.component.html":
/*!********************************************************************!*\
  !*** ./src/app/Components/cost-centers/cost-center.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Components/cost-centers/cost-center.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/Components/cost-centers/cost-center.component.ts ***!
  \******************************************************************/
/*! exports provided: CostCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostCenterComponent", function() { return CostCenterComponent; });
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

var CostCenterComponent = /** @class */ (function () {
    function CostCenterComponent() {
    }
    CostCenterComponent.prototype.ngOnInit = function () {
    };
    CostCenterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cost-center',
            template: __webpack_require__(/*! ./cost-center.component.html */ "./src/app/Components/cost-centers/cost-center.component.html"),
            styles: [__webpack_require__(/*! ./cost-center.component.css */ "./src/app/Components/cost-centers/cost-center.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CostCenterComponent);
    return CostCenterComponent;
}());



/***/ }),

/***/ "./src/app/Components/cost-maps/cost-map-add/cost-map-add.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/Components/cost-maps/cost-map-add/cost-map-add.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/cost-maps/cost-map-add/cost-map-add.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/cost-maps/cost-map-add/cost-map-add.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ 'cost_mapa.cost_map' | translate }} </h4>\n    <p class=\"mg-b-0\"> {{ 'cost_mapa.new' | translate }}</p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ 'cost_mapa.add' | translate }}</h6>\n      <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'cost_mapa.initial_date' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"month\" placeholder=\"Enter initial_date\"\n                     name=\"initial_date\" #initial_date=\"ngModel\" ngModel disabled>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'cost_mapa.final_date' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"month\" placeholder=\"Enter final_date\"\n                     name=\"final_date\" #final_date=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n        </div><!-- form-layout -->\n        <hr>\n        <div class=\"text-center\">\n          <p class=\"text-center alert-danger\" *ngFor=\"let error of errors\">{{error}}</p>\n        </div>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ 'globals.sub' | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/cost-maps/cost-map-add/cost-map-add.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/cost-maps/cost-map-add/cost-map-add.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CostMapAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostMapAddComponent", function() { return CostMapAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_cost_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/cost-map.service */ "./src/app/Services/cost-map.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CostMapAddComponent = /** @class */ (function () {
    function CostMapAddComponent(costMapsApi, router, translate, titleService) {
        this.costMapsApi = costMapsApi;
        this.router = router;
        this.translate = translate;
        this.titleService = titleService;
        this.errors = [];
        this.formChanged = false;
    }
    CostMapAddComponent.prototype.ngOnInit = function () {
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_6__(document).ready(function () {
            var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_6__(".float-input");
            float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_6__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_6__(this).val()).toFixed(2)); });
            float_inputs.on('change', function () {
                jquery__WEBPACK_IMPORTED_MODULE_6__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_6__(this).val()).toFixed(2));
            });
            jquery__WEBPACK_IMPORTED_MODULE_6__("input").on('change', function () {
                c.formChanged = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_6__("select").on('change', function () {
                c.formChanged = true;
            });
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("spota.new"));
        });
    };
    CostMapAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        f.value.year = f.value.final_date.split('-')[0];
        f.value.month = f.value.final_date.split('-')[1];
        var parameter = JSON.stringify(f.value);
        this.costMapsSubs = this.costMapsApi.addCostMap(parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/cost_maps']);
                location.reload();
            }
            else {
                // @ts-ignore
                _this.errors = res;
            }
        }, console.error);
    };
    CostMapAddComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/cost_maps']);
            } });
        }
        else {
            this.router.navigate(['/cost_maps']);
        }
        return false;
    };
    CostMapAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cost-map-add',
            template: __webpack_require__(/*! ./cost-map-add.component.html */ "./src/app/Components/cost-maps/cost-map-add/cost-map-add.component.html"),
            styles: [__webpack_require__(/*! ./cost-map-add.component.css */ "./src/app/Components/cost-maps/cost-map-add/cost-map-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_cost_map_service__WEBPACK_IMPORTED_MODULE_1__["CostMapService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], CostMapAddComponent);
    return CostMapAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/cost-maps/cost-map-edit/cost-map-edit.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/Components/cost-maps/cost-map-edit/cost-map-edit.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/cost-maps/cost-map-edit/cost-map-edit.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/cost-maps/cost-map-edit/cost-map-edit.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cost-map-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/Components/cost-maps/cost-map-edit/cost-map-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/cost-maps/cost-map-edit/cost-map-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CostMapEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostMapEditComponent", function() { return CostMapEditComponent; });
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

var CostMapEditComponent = /** @class */ (function () {
    function CostMapEditComponent() {
    }
    CostMapEditComponent.prototype.ngOnInit = function () {
    };
    CostMapEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cost-map-edit',
            template: __webpack_require__(/*! ./cost-map-edit.component.html */ "./src/app/Components/cost-maps/cost-map-edit/cost-map-edit.component.html"),
            styles: [__webpack_require__(/*! ./cost-map-edit.component.css */ "./src/app/Components/cost-maps/cost-map-edit/cost-map-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CostMapEditComponent);
    return CostMapEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/cost-maps/cost-map-overview/cost-map-overview.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/Components/cost-maps/cost-map-overview/cost-map-overview.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/cost-maps/cost-map-overview/cost-map-overview.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/Components/cost-maps/cost-map-overview/cost-map-overview.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n    <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\"> {{ 'cost_mapo.cost_map' | translate }} </h4>\n        <p class=\"mg-b-0\"> {{ 'cost_mapo.list' | translate }} </p>\n    </div><!-- d-flex -->\n    <div class=\"br-pagebody\">\n        <div class=\"br-section-wrapper\">\n            <div class=\"text-right\">\n                    <a href=\"#\" (click)=\"massDeleteCostMaps()\" class=\"btn btn-danger mg-r-10\" *ngIf=\"delete\">   {{ 'globals.mass' | translate }}</a>\n                    <a routerLink=\"/cost_maps/add\" class=\"btn btn-success\" *ngIf=\"add\">   {{ 'globals.new' | translate }}</a>\n            </div>\n            <hr>\n            <ag-grid-angular\n                    style=\"width: 100%;\"\n                    class=\"ag-theme-material\"\n                    [rowData]=\"rowData\"\n                    [columnDefs]=\"columnDefs\"\n                    [enableSorting]=\"true\"\n                    [enableFilter]=\"true\"\n                    [frameworkComponents]=\"frameworkComponents\"\n                    rowSelection=\"multiple\"\n                    [rowMultiSelectWithClick]=\"true\"\n                    (gridReady)=\"onGridReady($event)\"\n                    (firstDataRendered)=\"onFirstDataRendered($event)\"\n                    (gridSizeChanged)=\"onFirstDataRendered($event)\"\n                    domLayout='autoHeight'\n                    pagination=\"true\"\n                    paginationPageSize=\"10\"\n            >\n            </ag-grid-angular>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/cost-maps/cost-map-overview/cost-map-overview.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/Components/cost-maps/cost-map-overview/cost-map-overview.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CostMapOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostMapOverviewComponent", function() { return CostMapOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_cost_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/cost-map.service */ "./src/app/Services/cost-map.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CostMapOverviewComponent = /** @class */ (function () {
    function CostMapOverviewComponent(costMapsApi, translate, titleService) {
        this.costMapsApi = costMapsApi;
        this.translate = translate;
        this.titleService = titleService;
        this.columnDefs = [];
        this.rowData = [];
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.frameworkComponents = {
            actionsFormatterComponent: _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
        };
    }
    CostMapOverviewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
    };
    CostMapOverviewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    CostMapOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.costMapsSubs = this.costMapsApi.getCostMaps().subscribe(function (res) {
            _this.costMaps = res['cost_maps'];
            _this.add = res['add'];
            _this.edit = res['edit'];
            _this.delete = res['delete'];
            _this.columnDefs = [
                { headerName: 'Year', field: 'year' },
                { headerName: 'Month', field: 'month' },
                { headerName: 'Calculated at', field: 'calculated_at' },
                { headerName: 'In Use', field: 'in_use', cellRendererParams: { c: _this }, cellRenderer: function (params) {
                        var c = params.c;
                        if (params.value == 0)
                            return "<i class='fa fa-times fa-2x'></i>";
                        else
                            return "<i class='fa fa-check fa-2x'></i>";
                    } },
                { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
            ];
            for (var i = 0; i < _this.costMaps.length; i++) {
                _this.costMaps[i]['actions'] = {
                    'api': _this.costMapsApi,
                    'id': _this.costMaps[i].id,
                    'delete': [_this.delete, _this.deleteCostMap],
                    'view': [true, '/cost_maps/view/'],
                    'in_use': [true, _this.inUseCostMap],
                    'recalc': [true, _this.recalcCostMap],
                    'edit': [false, '/cost_maps/edit/'],
                    'self': _this
                };
            }
            _this.rowData = _this.costMaps;
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_5__(document).ready(function () {
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("costMapo.costMap"));
        });
    };
    CostMapOverviewComponent.prototype.massDeleteCostMaps = function () {
        var nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids = nodes.map(function (row) { return row.data.id; });
            var parameter = { ids: ids };
            if (confirm("Are You Sure Want To Delete ? ")) {
                this.costMapsSubs = this.costMapsApi.deleteCostMap('mass', parameter).subscribe(function (res) {
                    if (res == 1) {
                        location.reload();
                    }
                }, console.error);
            }
        }
        return false;
    };
    CostMapOverviewComponent.prototype.recalcCostMap = function (id, costMapsApi, self) {
        var parameter = {};
        if (confirm("Are You Sure Want To ReCalculate ? ")) {
            this.costMapsSubs = self.costMapsApi.recalcCostMap(id, parameter).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    CostMapOverviewComponent.prototype.inUseCostMap = function (id, costMapsApi, self) {
        var parameter = {};
        if (confirm("Are You Sure Want To change in use cost map ? ")) {
            this.costMapsSubs = self.costMapsApi.inUseCostMap(id, parameter).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    CostMapOverviewComponent.prototype.deleteCostMap = function (id, costMapsApi, self) {
        var parameter = {};
        if (confirm("Are You Sure Want To Delete ? ")) {
            this.costMapsSubs = self.costMapsApi.deleteCostMap(id, parameter).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    CostMapOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cost-map-overview',
            template: __webpack_require__(/*! ./cost-map-overview.component.html */ "./src/app/Components/cost-maps/cost-map-overview/cost-map-overview.component.html"),
            styles: [__webpack_require__(/*! ./cost-map-overview.component.css */ "./src/app/Components/cost-maps/cost-map-overview/cost-map-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_cost_map_service__WEBPACK_IMPORTED_MODULE_2__["CostMapService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], CostMapOverviewComponent);
    return CostMapOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/cost-maps/cost-map-view/cost-map-view.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/Components/cost-maps/cost-map-view/cost-map-view.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/cost-maps/cost-map-view/cost-map-view.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/cost-maps/cost-map-view/cost-map-view.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n    <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\"> {{ 'cost_mapo.cost_map' | translate }} </h4>\n        <p class=\"mg-b-0\"> {{ 'cost_mapo.list' | translate }} </p>\n    </div><!-- d-flex -->\n    <div class=\"br-pagebody\">\n        <div class=\"br-section-wrapper\">\n            <mat-tab-group class=\"full-width\" [selectedIndex]=\"0\" dynamicHeight>\n                <mat-tab label=\"Demonstrative\">\n                    <ag-grid-angular\n                            style=\"width: 100%;\"\n                            class=\"ag-theme-material\"\n                            [rowData]=\"rowData\"\n                            [columnDefs]=\"columnDefs\"\n                            [enableSorting]=\"true\"\n                            [enableFilter]=\"true\"\n                            [frameworkComponents]=\"frameworkComponents\"\n                            rowSelection=\"multiple\"\n                            [rowMultiSelectWithClick]=\"true\"\n                            (gridReady)=\"onGridReady($event)\"\n                            (firstDataRendered)=\"onFirstDataRendered($event)\"\n                            (gridSizeChanged)=\"onFirstDataRendered($event)\"\n                            domLayout='autoHeight'\n                            pagination=\"true\"\n                            paginationPageSize=\"10\"\n                    >\n                    </ag-grid-angular>\n                </mat-tab>\n                <mat-tab label=\"Parameters\"></mat-tab>\n                <mat-tab label=\"Operational cost\"></mat-tab>\n            </mat-tab-group>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/cost-maps/cost-map-view/cost-map-view.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/cost-maps/cost-map-view/cost-map-view.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CostMapViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostMapViewComponent", function() { return CostMapViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CostMapViewComponent = /** @class */ (function () {
    function CostMapViewComponent() {
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.columnDefs = [];
        this.rowData = [];
        this.frameworkComponents = {
        // actionsFormatterComponent: ActionsFormatterComponent,
        };
    }
    CostMapViewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
        var w = 7 / 9 * parseInt(jquery__WEBPACK_IMPORTED_MODULE_1__('.ag-theme-material').width());
        jquery__WEBPACK_IMPORTED_MODULE_1__('.details').width(w);
    };
    CostMapViewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    CostMapViewComponent.prototype.ngOnInit = function () {
    };
    CostMapViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cost-map-view',
            template: __webpack_require__(/*! ./cost-map-view.component.html */ "./src/app/Components/cost-maps/cost-map-view/cost-map-view.component.html"),
            styles: [__webpack_require__(/*! ./cost-map-view.component.css */ "./src/app/Components/cost-maps/cost-map-view/cost-map-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CostMapViewComponent);
    return CostMapViewComponent;
}());



/***/ }),

/***/ "./src/app/Components/cost-maps/cost-maps.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Components/cost-maps/cost-maps.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/cost-maps/cost-maps.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Components/cost-maps/cost-maps.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/Components/cost-maps/cost-maps.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/cost-maps/cost-maps.component.ts ***!
  \*************************************************************/
/*! exports provided: CostMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostMapsComponent", function() { return CostMapsComponent; });
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

var CostMapsComponent = /** @class */ (function () {
    function CostMapsComponent() {
    }
    CostMapsComponent.prototype.ngOnInit = function () {
    };
    CostMapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cost-maps',
            template: __webpack_require__(/*! ./cost-maps.component.html */ "./src/app/Components/cost-maps/cost-maps.component.html"),
            styles: [__webpack_require__(/*! ./cost-maps.component.css */ "./src/app/Components/cost-maps/cost-maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CostMapsComponent);
    return CostMapsComponent;
}());



/***/ }),

/***/ "./src/app/Components/employees/employee-add/employee-add.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/Components/employees/employee-add/employee-add.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/employees/employee-add/employee-add.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/employees/employee-add/employee-add.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ \"employa.employ\" | translate }} </h4>\n    <p class=\"mg-b-0\">{{ \"employa.new\" | translate }}</p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ \"employa.new\" | translate }}</h6>\n      <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"employa.name\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter name\"\n                     name=\"name\" #name=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"employa.type\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-b\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\"  name=\"type\" #type=\"ngModel\" ngModel [ngModel]=\"0\">\n                <option value=\"0\" selected=\"\">{{ \"employa.stand\" | translate }}</option>\n                <option value=\"1\">{{ \"employa.dire\" | translate }}</option>\n                <option value=\"2\">{{ \"employa.train\" | translate }}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"employa.hire\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\"\n                     name=\"hire_date\" #hire_date=\"ngModel\" ngModel placeholder=\"Enter hire_date\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"employa.diss\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\"\n                     name=\"dismiss_date\" #dismiss_date=\"ngModel\" ngModel placeholder=\"Enter dismiss_date:\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"employa.salary\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\"\n                     name=\"salary\" #salary=\"ngModel\" ngModel placeholder=\"Enter salary\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"employa.extra\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\"\n                     name=\"extra_salary\" #extra_salary=\"ngModel\" ngModel placeholder=\"Enter extra_salary\">\n            </div>\n          </div><!-- row -->\n        </div><!-- form-layout -->\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                      <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/employees/employee-add/employee-add.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/employees/employee-add/employee-add.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EmployeeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeAddComponent", function() { return EmployeeAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/employee.service */ "./src/app/Services/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/branch.service */ "./src/app/Services/branch.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EmployeeAddComponent = /** @class */ (function () {
    function EmployeeAddComponent(branchesApi, employeeApi, router, translate, titleService) {
        this.branchesApi = branchesApi;
        this.employeeApi = employeeApi;
        this.router = router;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    EmployeeAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.branchesSubs = this.branchesApi.getBranches().subscribe(function (res) {
            _this.branches = res['branches'];
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
            var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_4__(".float-input");
            float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2)); });
            float_inputs.on('change', function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2));
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("input").on('change', function () {
                c.formChanged = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("select").on('change', function () {
                c.formChanged = true;
            });
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("employa.new"));
        });
    };
    EmployeeAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var employee = JSON.stringify(f.value);
        this.employeesSubs = this.employeeApi.addEmployee(employee).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/employees']);
                location.reload();
            }
        }, console.error);
    };
    EmployeeAddComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/employees']);
            } });
        }
        else {
            this.router.navigate(['/employees']);
        }
        return false;
    };
    EmployeeAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-add',
            template: __webpack_require__(/*! ./employee-add.component.html */ "./src/app/Components/employees/employee-add/employee-add.component.html"),
            styles: [__webpack_require__(/*! ./employee-add.component.css */ "./src/app/Components/employees/employee-add/employee-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"], _Services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], EmployeeAddComponent);
    return EmployeeAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/employees/employee-edit/employee-edit.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/Components/employees/employee-edit/employee-edit.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/employees/employee-edit/employee-edit.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/employees/employee-edit/employee-edit.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\"> {{ \"employe.employ\" | translate }} </h4>\n    <p class=\"mg-b-0\">  {{ \"employe.edit\" | translate }}</p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\"> {{ \"employe.edit\" | translate }}</h6>\n      <form *ngIf=\"employee\" #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"employe.name\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter name\"\n                     name=\"name\" #name=\"ngModel\" ngModel [ngModel]=\"employee.name\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"employe.type\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-b\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\"  name=\"type\" #type=\"ngModel\" ngModel [ngModel]=\"employee.type\">\n                <option value=\"0\" selected=\"\"> {{ \"employe.stand\" | translate }}</option>\n                <option value=\"1\"> {{ \"employe.dire\" | translate }}</option>\n                <option value=\"2\"> {{ \"employe.train\" | translate }}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"employe.hire\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\" [ngModel]=\"employee.hire_date\"\n                     name=\"hire_date\" #hire_date=\"ngModel\" ngModel placeholder=\"Enter hire_date\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"employe.diss\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\" [ngModel]=\"employee.dismiss_date\"\n                     name=\"dismiss_date\" #dismiss_date=\"ngModel\" ngModel placeholder=\"Enter dismiss_date:\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"employe.salary\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\" [ngModel]=\"employee.salary\"\n                     name=\"salary\" #salary=\"ngModel\" ngModel placeholder=\"Enter salary\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"employe.extra\" | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\" [ngModel]=\"employee.extra_salary\"\n                     name=\"extra_salary\" #extra_salary=\"ngModel\" ngModel placeholder=\"Enter extra_salary\">\n            </div>\n          </div><!-- row -->\n        </div><!-- form-layout -->\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/employees/employee-edit/employee-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/employees/employee-edit/employee-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EmployeeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeEditComponent", function() { return EmployeeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/employee.service */ "./src/app/Services/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_branch_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/branch.service */ "./src/app/Services/branch.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EmployeeEditComponent = /** @class */ (function () {
    function EmployeeEditComponent(branchesApi, employeesApi, router, route, translate, titleService) {
        this.branchesApi = branchesApi;
        this.employeesApi = employeesApi;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.branchesSubs = this.branchesApi.getBranches().subscribe(function (res) {
            _this.branches = res['branches'];
        });
        this.employeeSubs = this.employeesApi.getEmployee(this.route.params['value']['rule_id']).subscribe(function (res) {
            _this.employee = res['employee'];
            var c = _this;
            jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
                var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_4__(".float-input");
                float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2)); });
                float_inputs.on('change', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2));
                });
                jquery__WEBPACK_IMPORTED_MODULE_4__("input").on('change', function () {
                    c.formChanged = true;
                });
                jquery__WEBPACK_IMPORTED_MODULE_4__("select").on('change', function () {
                    c.formChanged = true;
                });
                c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("employe.edit"));
            });
        });
    };
    EmployeeEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var employee = JSON.stringify(f.value);
        this.employeeSubs = this.employeesApi.editEmployee(this.employee.id, employee).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/employees']);
                location.reload();
            }
        }, console.error);
    };
    EmployeeEditComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/employees']);
            } });
        }
        else {
            this.router.navigate(['/employees']);
        }
        return false;
    };
    EmployeeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-edit',
            template: __webpack_require__(/*! ./employee-edit.component.html */ "./src/app/Components/employees/employee-edit/employee-edit.component.html"),
            styles: [__webpack_require__(/*! ./employee-edit.component.css */ "./src/app/Components/employees/employee-edit/employee-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_branch_service__WEBPACK_IMPORTED_MODULE_3__["BranchService"], _Services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/employees/employee-overview/employee-overview.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/Components/employees/employee-overview/employee-overview.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/employees/employee-overview/employee-overview.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/Components/employees/employee-overview/employee-overview.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\"> {{ \"employo.employ\" | translate }} </h4>\n    <p class=\"mg-b-0\">{{ \"employo.list\" | translate }} </p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <div class=\"text-right\">\n        <a href=\"#\" (click)=\"massDeleteEmployee()\" class=\"btn btn-danger mg-r-10\" *ngIf=\"delete\">{{ \"globals.mass\" | translate }}</a>\n        <a routerLink=\"/employees/add\" class=\"btn btn-success\" *ngIf=\"add\">{{ \"globals.new\" | translate }}</a>\n      </div>\n      <hr>\n      <ag-grid-angular\n              style=\"width: 100%;\"\n              class=\"ag-theme-material\"\n              [rowData]=\"rowData\"\n              [columnDefs]=\"columnDefs\"\n              [enableSorting]=\"true\"\n              [enableFilter]=\"true\"\n              [frameworkComponents]=\"frameworkComponents\"\n              rowSelection=\"multiple\"\n              [rowMultiSelectWithClick]=\"false\"\n              [suppressRowClickSelection]=\"true\"\n              (gridReady)=\"onGridReady($event)\"\n              (firstDataRendered)=\"onFirstDataRendered($event)\"\n              (gridSizeChanged)=\"onFirstDataRendered($event)\"\n              domLayout='autoHeight'\n              pagination=\"true\"\n              paginationPageSize=\"10\"\n      >\n      </ag-grid-angular>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/employees/employee-overview/employee-overview.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/Components/employees/employee-overview/employee-overview.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EmployeeOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeOverviewComponent", function() { return EmployeeOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/employee.service */ "./src/app/Services/employee.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _partials_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/employee-details/employee-details.component */ "./src/app/Components/partials/employee-details/employee-details.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmployeeOverviewComponent = /** @class */ (function () {
    function EmployeeOverviewComponent(employeeApi, translate, titleService) {
        this.employeeApi = employeeApi;
        this.translate = translate;
        this.titleService = titleService;
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.columnDefs = [];
        this.rowData = [];
        this.frameworkComponents = {
            actionsFormatterComponent: _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
            detailsFormatterComponent: _partials_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeDetailsComponent"]
        };
    }
    EmployeeOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeSubs = this.employeeApi.getEmployees().subscribe(function (res) {
            _this.employees = res['employees'];
            _this.add = res['add'];
            _this.edit = res['edit'];
            _this.delete = res['delete'];
            _this.columnDefs = [
                { headerName: '', field: 'check', checkboxSelection: true, width: 60 },
                { headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible' },
                { headerName: 'Name', field: 'name' },
                { headerName: 'Type', field: 'type', cellRendererParams: { c: _this }, cellRenderer: function (params) {
                        var c = params.c;
                        if (params.value == 0) {
                            return c.translate.instant("employa.stand");
                        }
                        else if (params.value == 1) {
                            return c.translate.instant("employa.dire");
                        }
                        else if (params.value == 2) {
                            return c.translate.instant("employa.train");
                        }
                    } },
                { headerName: 'Hire Date', field: 'hire_date' },
                { headerName: 'Dismiss Date', field: 'dismiss_date' },
                { headerName: 'Salary', field: 'salary' },
                { headerName: 'Extra Salary', field: 'extra_salary' },
                { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
            ];
            for (var i = 0; i < _this.employees.length; i++) {
                _this.employees[i]['details'] = {
                    'row_id': i,
                    'id': _this.employees[i].id,
                    'gridApi': _this.gridApi,
                    'gridColumnApi': _this.gridColumnApi
                };
                _this.employees[i]['actions'] = {
                    'self': _this,
                    'id': _this.employees[i].id,
                    'delete': [_this.delete, _this.deleteEmployee],
                    'edit': [_this.edit, '/employees/edit/']
                };
            }
            _this.rowData = _this.employees;
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("employa.employ"));
        });
    };
    EmployeeOverviewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
        var w = 7 / 9 * parseInt(jquery__WEBPACK_IMPORTED_MODULE_3__('.ag-theme-material').width());
        jquery__WEBPACK_IMPORTED_MODULE_3__('.details').width(w);
    };
    EmployeeOverviewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    EmployeeOverviewComponent.prototype.deleteEmployee = function (id, type, self) {
        var employee = {};
        if (confirm("Are You Sure Want To Delete ? ")) {
            this.employeeSubs = self.employeeApi.deleteEmployee(id, employee).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    EmployeeOverviewComponent.prototype.massDeleteEmployee = function () {
        var nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids = nodes.map(function (row) { return row.data.id; });
            var employee = { ids: ids };
            if (confirm("Are You Sure Want To Delete ? ")) {
                this.employeeSubs = this.employeeApi.deleteEmployee('mass', employee).subscribe(function (res) {
                    if (res == 1) {
                        location.reload();
                    }
                }, console.error);
            }
        }
        return false;
    };
    EmployeeOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-overview',
            template: __webpack_require__(/*! ./employee-overview.component.html */ "./src/app/Components/employees/employee-overview/employee-overview.component.html"),
            styles: [__webpack_require__(/*! ./employee-overview.component.css */ "./src/app/Components/employees/employee-overview/employee-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], EmployeeOverviewComponent);
    return EmployeeOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/employees/employees.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Components/employees/employees.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/employees/employees.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Components/employees/employees.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Components/employees/employees.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/employees/employees.component.ts ***!
  \*************************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
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

var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent() {
    }
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    EmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/Components/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/Components/employees/employees.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/Components/entry-accounts/entry-account-add/entry-account-add.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/Components/entry-accounts/entry-account-add/entry-account-add.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/entry-accounts/entry-account-add/entry-account-add.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/Components/entry-accounts/entry-account-add/entry-account-add.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n    <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\"> {{ 'entry_accounts.title' | translate }}</h4>\n        <p class=\"mg-b-0\">{{ 'entry_accounts.new' | translate }} </p>\n    </div>\n    <div class=\"br-pagebody\">\n        <div class=\"br-section-wrapper\">\n            <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ 'entry_accounts.single_new' | translate }}</h6>\n            <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n                <div class=\"form-layout-footer mg-b-30 text-right\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n                <div class=\"form-layout form-layout-6\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"brancha.type\" | translate }}\n                        </div>\n                        <!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <select id=\"select2-b\" class=\"form-control select2-hidden-accessible\" aria-hidden=\"true\" name=\"type\" #type=\"ngModel\" ngModel\n                                    [ngModel]=\"0\" (change)=\"filterAccounts()\">\n                                <option value=\"0\" selected=\"\">{{ \"entry_accounts.expense\" | translate }}</option>\n                                <option value=\"1\">{{ \"entry_accounts.revenue\" | translate }}</option>\n                            </select>\n                        </div>\n                        <!-- col-8 -->\n                    </div>\n                    <!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ 'taxa.acc' | translate }}\n                        </div>\n                        <!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <select id=\"select2-c\" class=\"form-control select2-hidden-accessible\" aria-hidden=\"true\" name=\"account_id\" #account_id=\"ngModel\"\n                                    ngModel [ngModel]=\"0\" (change)=\"changeCostCenter(f)\">\n                                <option value=\"0\" selected=\"\">{{ 'taxa.select' | translate }}</option>\n                                <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\" data-value=\"{{account.type}}\">{{account.code}} | {{account.description}}</option>\n                            </select>\n                        </div>\n                        <!-- col-8 -->\n                    </div>\n                    <!-- row -->\n                    <div class=\"row no-gutters only-expense-abs-type\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ 'globals.cost_center' | translate }}\n                        </div>\n                        <!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <select id=\"select2-g\" class=\"form-control select2-hidden-accessible\" aria-hidden=\"true\" name=\"cost_center_id\" #cost_center_id=\"ngModel\"\n                                    ngModel [ngModel]=\"0\">\n                                <option value=\"0\" selected=\"\">{{ 'entry_accounts.select_cost_center' | translate }}</option>\n                                <option *ngFor=\"let cost_center of cost_centers\" value=\"{{cost_center.id}}\">{{cost_center.name}} | {{cost_center.description}}</option>\n                            </select>\n                        </div>\n                        <!-- col-8 -->\n                    </div>\n                    <!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ 'entry_accounts.reference_date' | translate }}\n                        </div>\n                        <!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"date\" name=\"reference_date\" #reference_date=\"ngModel\" ngModel placeholder=\"Enter Reference Date\">\n                        </div>\n                    </div>\n                    <!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ 'entry_accounts.due_date' | translate }}\n                        </div>\n                        <!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"date\" name=\"due_date\" #due_date=\"ngModel\" ngModel placeholder=\"Enter Due Date:\">\n                        </div>\n                    </div>\n                    <!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ 'entry_accounts.payment_date' | translate }}\n                        </div>\n                        <!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"date\" name=\"payment_date\" #payment_date=\"ngModel\" ngModel placeholder=\"Enter Entry Date:\">\n                        </div>\n                    </div>\n                    <!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ \"entry_accounts.historic\" | translate }}\n                        </div>\n                        <!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Enter Historic\" name=\"historic\" #historic=\"ngModel\" ngModel>\n                        </div>\n                        <!-- col-8 -->\n                    </div>\n                    <!-- row -->\n\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ 'entry_accounts.entry_value' | translate }}\n                        </div>\n                        <!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\" step=\"0.01\" type=\"number\" name=\"entry_value\" #entry_value=\"ngModel\" ngModel\n                                   placeholder=\"Enter Entry Value\">\n                        </div>\n                        <!-- col-8 -->\n                    </div>\n                    <!-- row -->\n                </div>\n                <!-- form-layout -->\n                <hr>\n                <div class=\"form-layout-footer mg-t-30 text-center\">\n                    <button class=\"btn btn-info\" type=\"submit\"> {{ 'globals.sub' | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/entry-accounts/entry-account-add/entry-account-add.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/Components/entry-accounts/entry-account-add/entry-account-add.component.ts ***!
  \********************************************************************************************/
/*! exports provided: EntryAccountAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryAccountAddComponent", function() { return EntryAccountAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/account.service */ "./src/app/Services/account.service.ts");
/* harmony import */ var _Services_entry_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/entry-account.service */ "./src/app/Services/entry-account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Services_cost_centers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Services/cost-centers.service */ "./src/app/Services/cost-centers.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EntryAccountAddComponent = /** @class */ (function () {
    function EntryAccountAddComponent(costCenterApi, accountsApi, entryAccountsApi, router, translate, titleService) {
        this.costCenterApi = costCenterApi;
        this.accountsApi = accountsApi;
        this.entryAccountsApi = entryAccountsApi;
        this.router = router;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    EntryAccountAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(function (res) {
            _this.accounts = res['accounts'];
            _this.all_accounts = res['accounts'];
            _this.filterAccounts();
        });
        this.costCenterSubs = this.costCenterApi.getCostCenters().subscribe(function (res) {
            _this.cost_centers = res['cost_centers'];
            _this.changeCostCenter(null);
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
            var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_4__(".float-input");
            float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(Math.abs(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val())).toFixed(2)); });
            float_inputs.on('change', function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(Math.abs(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val())).toFixed(2));
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("input").on('change', function () {
                c.formChanged = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("select").on('change', function () {
                c.formChanged = true;
            });
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("entry_accounts.new"));
        });
    };
    EntryAccountAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.entryAccountsSubs = this.entryAccountsApi.addEntryAccount(parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/entry_accounts']);
                location.reload();
            }
        }, console.error);
    };
    EntryAccountAddComponent.prototype.filterAccounts = function () {
        var type = jquery__WEBPACK_IMPORTED_MODULE_4__("select[name=type]").val();
        this.accounts = this.all_accounts.filter(function (row) { return row.nat == type; });
    };
    EntryAccountAddComponent.prototype.changeCostCenter = function (f) {
        var account_id = jquery__WEBPACK_IMPORTED_MODULE_4__("select[name=account_id]").val();
        var account = this.all_accounts.find(function (row) { return row.id == account_id; });
        if (account) {
            var expense_abs_type = account.expense_abs_type;
            if (expense_abs_type == 8) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".only-expense-abs-type").show();
                jquery__WEBPACK_IMPORTED_MODULE_4__("select[name=cost_center_id]").val(0);
                if (f) {
                    var values = f.value;
                    values.cost_center_id = 0;
                    console.log(values);
                    f.setValue(values);
                }
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".only-expense-abs-type").hide();
            }
        }
    };
    EntryAccountAddComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/entry_accounts']);
            } });
        }
        else {
            this.router.navigate(['/entry_accounts']);
        }
        return false;
    };
    EntryAccountAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entry-account-add',
            template: __webpack_require__(/*! ./entry-account-add.component.html */ "./src/app/Components/entry-accounts/entry-account-add/entry-account-add.component.html"),
            styles: [__webpack_require__(/*! ./entry-account-add.component.css */ "./src/app/Components/entry-accounts/entry-account-add/entry-account-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_cost_centers_service__WEBPACK_IMPORTED_MODULE_5__["CostCentersService"], _Services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"], _Services_entry_account_service__WEBPACK_IMPORTED_MODULE_2__["EntryAccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]])
    ], EntryAccountAddComponent);
    return EntryAccountAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/entry-accounts/entry-account-edit/entry-account-edit.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/Components/entry-accounts/entry-account-edit/entry-account-edit.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/entry-accounts/entry-account-edit/entry-account-edit.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/Components/entry-accounts/entry-account-edit/entry-account-edit.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\"> {{ 'entry_accounts.title' | translate }}</h4>\n    <p class=\"mg-b-0\">{{ 'entry_accounts.edit' | translate }} </p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ 'entry_accounts.single_edit' | translate }}</h6>\n      <form *ngIf=\"entry_account\" #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"brancha.type\" | translate }}\n            </div>\n            <!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-b\" class=\"form-control select2-hidden-accessible\" aria-hidden=\"true\" name=\"type\" #type=\"ngModel\" ngModel\n                      [ngModel]=\"entry_account.type\" (change)=\"filterAccounts()\">\n                <option value=\"0\" selected=\"\">{{ \"entry_accounts.expense\" | translate }}</option>\n                <option value=\"1\">{{ \"entry_accounts.revenue\" | translate }}</option>\n              </select>\n            </div>\n            <!-- col-8 -->\n          </div>\n          <!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'taxa.acc' | translate }}\n            </div>\n            <!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-c\" class=\"form-control select2-hidden-accessible\" aria-hidden=\"true\" name=\"account_id\" #account_id=\"ngModel\"\n                      ngModel [ngModel]=\"entry_account.account_id\" (change)=\"changeCostCenter(f)\">\n                <option value=\"0\" selected=\"\">{{ 'taxa.select' | translate }}</option>\n                <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\" data-value=\"{{account.type}}\">{{account.code}} | {{account.description}}</option>\n              </select>\n            </div>\n            <!-- col-8 -->\n          </div>\n          <!-- row -->\n          <div class=\"row no-gutters only-expense-abs-type\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'globals.cost_center' | translate }}\n            </div>\n            <!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-g\" class=\"form-control select2-hidden-accessible\" aria-hidden=\"true\" name=\"cost_center_id\" #cost_center_id=\"ngModel\"\n                      ngModel [ngModel]=\"entry_account.cost_center_id\">\n                <option value=\"0\" selected=\"\">{{ 'entry_accounts.select_cost_center' | translate }}</option>\n                <option *ngFor=\"let cost_center of cost_centers\" value=\"{{cost_center.id}}\">{{cost_center.name}}</option>\n              </select>\n            </div>\n            <!-- col-8 -->\n          </div>\n          <!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'entry_accounts.reference_date' | translate }}\n            </div>\n            <!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\" [ngModel]=\"entry_account.reference_date\" name=\"reference_date\" #reference_date=\"ngModel\"\n                     ngModel placeholder=\"Enter Reference Date\">\n            </div>\n          </div>\n          <!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'entry_accounts.due_date' | translate }}\n            </div>\n            <!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\" [ngModel]=\"entry_account.due_date\" name=\"due_date\" #due_date=\"ngModel\" ngModel placeholder=\"Enter Due Date:\">\n            </div>\n          </div>\n          <!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'entry_accounts.payment_date' | translate }}\n            </div>\n            <!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\" [ngModel]=\"entry_account.payment_date\" name=\"payment_date\" #payment_date=\"ngModel\"\n                     ngModel placeholder=\"Enter Entry Date:\">\n            </div>\n          </div>\n          <!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ \"entry_accounts.historic\" | translate }}\n            </div>\n            <!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter Historic\" name=\"historic\" #historic=\"ngModel\" ngModel [ngModel]=\"entry_account.historic\">\n            </div>\n            <!-- col-8 -->\n          </div>\n          <!-- row -->\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'entry_accounts.entry_value' | translate }}\n            </div>\n            <!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\" step=\"0.01\" type=\"number\" [ngModel]=\"entry_account.entry_value\" name=\"entry_value\"\n                     #entry_value=\"ngModel\" ngModel placeholder=\"Enter Entry Value\" (change)=\"maskFloat(f, 'entry_value')\">\n            </div>\n            <!-- col-8 -->\n          </div>\n          <!-- row -->\n        </div>\n        <!-- form-layout -->\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\"> {{ 'globals.sub' | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\" (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/entry-accounts/entry-account-edit/entry-account-edit.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/Components/entry-accounts/entry-account-edit/entry-account-edit.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: EntryAccountEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryAccountEditComponent", function() { return EntryAccountEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_cost_centers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/cost-centers.service */ "./src/app/Services/cost-centers.service.ts");
/* harmony import */ var _Services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/account.service */ "./src/app/Services/account.service.ts");
/* harmony import */ var _Services_entry_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/entry-account.service */ "./src/app/Services/entry-account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EntryAccountEditComponent = /** @class */ (function () {
    function EntryAccountEditComponent(costCenterApi, accountsApi, entryAccountsApi, router, route, translate, titleService) {
        this.costCenterApi = costCenterApi;
        this.accountsApi = accountsApi;
        this.entryAccountsApi = entryAccountsApi;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    EntryAccountEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(function (res) {
            _this.accounts = res['accounts'];
            _this.all_accounts = res['accounts'];
            _this.filterAccounts();
        });
        this.costCenterSubs = this.costCenterApi.getCostCenters().subscribe(function (res) {
            _this.cost_centers = res['cost_centers'];
            _this.changeCostCenter(null);
        });
        this.entryAccountsSubs = this.entryAccountsApi.getEntryAccount(this.route.params['value']['rule_id']).subscribe(function (res) {
            _this.entry_account = res['entry_account'];
            var c = _this;
            jquery__WEBPACK_IMPORTED_MODULE_5__(document).ready(function () {
                c.filterAccounts();
                c.changeCostCenter(null);
                jquery__WEBPACK_IMPORTED_MODULE_5__("input").on('change', function () {
                    c.formChanged = true;
                });
                jquery__WEBPACK_IMPORTED_MODULE_5__("select").on('change', function () {
                    c.formChanged = true;
                });
                c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("entry_accounts.edit"));
            });
        });
    };
    EntryAccountEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.entryAccountsSubs = this.entryAccountsApi.editEntryAccount(this.entry_account.id, parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/entry_accounts']);
                location.reload();
            }
        }, console.error);
    };
    EntryAccountEditComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/entry_accounts']);
            } });
        }
        else {
            this.router.navigate(['/entry_accounts']);
        }
        return false;
    };
    EntryAccountEditComponent.prototype.filterAccounts = function () {
        var type = jquery__WEBPACK_IMPORTED_MODULE_5__("select[name=type]").val();
        this.accounts = this.all_accounts.filter(function (row) { return row.nat == type; });
    };
    EntryAccountEditComponent.prototype.maskFloat = function (f, field) {
        f.value[field] = Math.abs(parseFloat(f.value[field])).toFixed(2);
        f.setValue(f.value);
    };
    EntryAccountEditComponent.prototype.changeCostCenter = function (f) {
        var account_id = jquery__WEBPACK_IMPORTED_MODULE_5__("select[name=account_id]").val();
        var account = this.all_accounts.find(function (row) { return row.id == account_id; });
        if (account) {
            var expense_abs_type = account.expense_abs_type;
            if (expense_abs_type == 8) {
                jquery__WEBPACK_IMPORTED_MODULE_5__(".only-expense-abs-type").show();
                jquery__WEBPACK_IMPORTED_MODULE_5__("select[name=cost_center_id]").val(0);
                if (f) {
                    var values = f.value;
                    values.cost_center_id = 0;
                    f.setValue(values);
                }
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_5__(".only-expense-abs-type").hide();
            }
        }
    };
    EntryAccountEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entry-account-edit',
            template: __webpack_require__(/*! ./entry-account-edit.component.html */ "./src/app/Components/entry-accounts/entry-account-edit/entry-account-edit.component.html"),
            styles: [__webpack_require__(/*! ./entry-account-edit.component.css */ "./src/app/Components/entry-accounts/entry-account-edit/entry-account-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_cost_centers_service__WEBPACK_IMPORTED_MODULE_1__["CostCentersService"], _Services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"], _Services_entry_account_service__WEBPACK_IMPORTED_MODULE_3__["EntryAccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]])
    ], EntryAccountEditComponent);
    return EntryAccountEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/entry-accounts/entry-account-overview/entry-account-overview.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/Components/entry-accounts/entry-account-overview/entry-account-overview.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/entry-accounts/entry-account-overview/entry-account-overview.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/Components/entry-accounts/entry-account-overview/entry-account-overview.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\"> {{ 'entry_accounts.title' | translate }} </h4>\n    <p class=\"mg-b-0\">{{ 'entry_accounts.list' | translate }} </p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <div class=\"text-right\">\n        <a href=\"#\" (click)=\"massDeleteEntryAccounts()\" class=\"btn btn-danger mg-r-10\" *ngIf=\"delete\">{{ \"globals.mass\" | translate }}</a>\n        <a routerLink=\"/entry_accounts/add\" class=\"btn btn-success\" *ngIf=\"add\"> {{ 'globals.new' | translate }}</a>\n      </div>\n      <hr>\n      <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout form-layout-1\">\n          <div class=\"row mg-b-10\">\n            <div class=\"col-lg-3\">\n              <label class=\"form-control-label\">Entry Account Type:</label>\n              <div class=\"form-group\">\n                <label class=\"rdiobox\">\n                  <input name=\"type\" #type=\"ngModel\" ngModel type=\"radio\" value=\"-1\">\n                  <span>All</span>\n                </label>\n                <label class=\"rdiobox\">\n                  <input name=\"type\" #type=\"ngModel\" ngModel type=\"radio\" value=\"0\">\n                  <span>Expenses</span>\n                </label>\n                <label class=\"rdiobox\">\n                  <input name=\"type\" #type=\"ngModel\" ngModel type=\"radio\" value=\"1\">\n                  <span>Revenues</span>\n                </label>\n              </div>\n            </div><!-- col-4 -->\n            <div class=\"col-lg-2\">\n              <div class=\"form-group\">\n                <label for=\"select2-c\" class=\"form-control-label\">Account:</label>\n                <div class=\"row\">\n                  <select id=\"select2-c\" class=\"form-control select2-hidden-accessible\"\n                          aria-hidden=\"true\" name=\"account_id\" #account_id=\"ngModel\" ngModel [ngModel]=\"0\">\n                    <option value=\"0\" selected=\"\">{{ 'taxa.select' | translate }}</option>\n                    <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\">{{account.code}}</option>\n                  </select>\n                </div>\n              </div>\n            </div><!-- col-4 -->\n            <div class=\"col-lg-1\"></div>\n            <div class=\"col-lg-5\">\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Historic:</label>\n                <div class=\"row\">\n                  <input class=\"form-control\" type=\"text\" placeholder=\"Enter Historic\"\n                         name=\"historic\" #historic=\"ngModel\" ngModel>\n                </div>\n              </div>\n            </div><!-- col-4 -->\n            <div class=\"col-lg-6\">\n              <div class=\"form-group mg-b-10-force\">\n                <label class=\"form-control-label\">Ref Period: </label>\n                <div class=\"row\">\n                  <input class=\"form-control col-lg-5\" type=\"date\" name=\"reference_date_start\" #reference_date_start=\"ngModel\" ngModel>\n                  <label class=\"col-lg-1 text-center\" style=\"line-height: 40px\">to:</label>\n                  <input class=\"form-control col-lg-4\" type=\"date\" name=\"reference_date_end\" #reference_date_end=\"ngModel\" ngModel>\n                </div>\n              </div>\n            </div><!-- col-8 -->\n            <div class=\"col-lg-6\">\n              <div class=\"form-group mg-b-10-force\">\n                <label class=\"form-control-label\">Due Period: </label>\n                <div class=\"row\">\n                  <input class=\"form-control col-lg-5\" type=\"date\" name=\"due_date_start\" #due_date_start=\"ngModel\" ngModel>\n                  <label class=\"col-lg-1 text-center\" style=\"line-height: 40px\">to:</label>\n                  <input class=\"form-control col-lg-4\" type=\"date\" name=\"due_date_end\" #due_date_end=\"ngModel\" ngModel>\n                </div>\n              </div>\n            </div><!-- col-8 -->\n            <div class=\"col-lg-12 text-center\">\n              <hr>\n              <input type=\"submit\" class=\"btn btn-primary col-lg-2\" value=\"Filter\">\n            </div>\n          </div><!-- row -->\n        </div>\n      </form>\n      <ag-grid-angular\n              style=\"width: 100%;\"\n              class=\"ag-theme-material\"\n              [rowData]=\"rowData\"\n              [columnDefs]=\"columnDefs\"\n              [enableSorting]=\"true\"\n              [enableFilter]=\"true\"\n              [frameworkComponents]=\"frameworkComponents\"\n              rowSelection=\"multiple\"\n              [rowMultiSelectWithClick]=\"true\"\n              (gridReady)=\"onGridReady($event)\"\n              (firstDataRendered)=\"onFirstDataRendered($event)\"\n              (gridSizeChanged)=\"onFirstDataRendered($event)\"\n              domLayout='autoHeight'\n              pagination=\"true\"\n              paginationPageSize=\"10\"\n      >\n      </ag-grid-angular>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/entry-accounts/entry-account-overview/entry-account-overview.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/Components/entry-accounts/entry-account-overview/entry-account-overview.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EntryAccountOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryAccountOverviewComponent", function() { return EntryAccountOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_entry_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/entry-account.service */ "./src/app/Services/entry-account.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _Services_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Services/account.service */ "./src/app/Services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EntryAccountOverviewComponent = /** @class */ (function () {
    function EntryAccountOverviewComponent(entryAccountsApi, translate, accountsApi, router, titleService) {
        this.entryAccountsApi = entryAccountsApi;
        this.translate = translate;
        this.accountsApi = accountsApi;
        this.router = router;
        this.titleService = titleService;
        this.columnDefs = [];
        this.rowData = [];
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.frameworkComponents = {
            actionsFormatterComponent: _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
        };
    }
    EntryAccountOverviewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
    };
    EntryAccountOverviewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    EntryAccountOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(function (res) {
            _this.accounts = res['accounts'];
        });
        this.entryAccountsSubs = this.entryAccountsApi.getEntryAccounts().subscribe(function (res) {
            _this.entryAccounts = res['entry_accounts'];
            _this.add = res['add'];
            _this.edit = res['edit'];
            _this.delete = res['delete'];
            _this.columnDefs = [
                { headerName: 'Type', field: 'type', cellRendererParams: { c: _this }, cellRenderer: function (params) {
                        var c = params.c;
                        if (params.value == 0) {
                            return c.translate.instant("entry_accounts.expense");
                        }
                        else if (params.value == 1) {
                            return c.translate.instant("entry_accounts.revenue");
                        }
                    } },
                { headerName: 'Reference Date', field: 'reference_date' },
                { headerName: 'Due Date', field: 'due_date' },
                { headerName: 'Payment Date', field: 'payment_date' },
                { headerName: 'Historic', field: 'historic' },
                { headerName: 'Entry Value', field: 'entry_value' },
                { headerName: 'Account', field: 'account_name' },
                { headerName: 'Cost Center', field: 'cost_center_name', cellRendererParams: { c: _this }, cellRenderer: function (params) {
                        var c = params.c;
                        console.log(params);
                        if (params.value == null) {
                            return "-";
                        }
                        else {
                            return params.value;
                        }
                    } },
                { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
            ];
            for (var i = 0; i < _this.entryAccounts.length; i++) {
                _this.entryAccounts[i]['actions'] = {
                    'self': _this,
                    'id': _this.entryAccounts[i].id,
                    'delete': [_this.delete, _this.deleteEntryAccount],
                    'edit': [_this.edit, '/entry_accounts/edit/']
                };
            }
            _this.rowData = _this.entryAccounts;
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_6__(document).ready(function () {
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("entry_accounts.title"));
        });
    };
    EntryAccountOverviewComponent.prototype.massDeleteEntryAccounts = function () {
        var nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids = nodes.map(function (row) { return row.data.id; });
            var parameter = { ids: ids };
            if (confirm("Are You Sure Want To Delete ? ")) {
                this.entryAccountsSubs = this.entryAccountsApi.deleteEntryAccount('mass', parameter).subscribe(function (res) {
                    if (res == 1) {
                        location.reload();
                    }
                }, console.error);
            }
        }
        return false;
    };
    EntryAccountOverviewComponent.prototype.deleteEntryAccount = function (id, type, self) {
        var parameter = {};
        if (confirm("Are You Sure Want To Delete ? ")) {
            this.entryAccountsSubs = self.entryAccountsApi.deleteEntryAccount(id, parameter).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    EntryAccountOverviewComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.entryAccountsSubs = this.entryAccountsApi.getEntryAccounts(parameter).subscribe(function (res) {
            _this.entryAccounts = res['entry_accounts'];
            for (var i = 0; i < _this.entryAccounts.length; i++) {
                _this.entryAccounts[i]['actions'] = {
                    'self': _this,
                    'id': _this.entryAccounts[i].id,
                    'delete': [_this.delete, _this.deleteEntryAccount],
                    'edit': [_this.edit, '/entry_accounts/edit/']
                };
            }
            _this.rowData = _this.entryAccounts;
            _this.gridApi.setRowData(_this.rowData);
        });
        return false;
    };
    EntryAccountOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entry-account-overview',
            template: __webpack_require__(/*! ./entry-account-overview.component.html */ "./src/app/Components/entry-accounts/entry-account-overview/entry-account-overview.component.html"),
            styles: [__webpack_require__(/*! ./entry-account-overview.component.css */ "./src/app/Components/entry-accounts/entry-account-overview/entry-account-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_entry_account_service__WEBPACK_IMPORTED_MODULE_2__["EntryAccountService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _Services_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["Title"]])
    ], EntryAccountOverviewComponent);
    return EntryAccountOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/entry-accounts/entry-accounts.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Components/entry-accounts/entry-accounts.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/entry-accounts/entry-accounts.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Components/entry-accounts/entry-accounts.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/Components/entry-accounts/entry-accounts.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Components/entry-accounts/entry-accounts.component.ts ***!
  \***********************************************************************/
/*! exports provided: EntryAccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryAccountsComponent", function() { return EntryAccountsComponent; });
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

var EntryAccountsComponent = /** @class */ (function () {
    function EntryAccountsComponent() {
    }
    EntryAccountsComponent.prototype.ngOnInit = function () {
    };
    EntryAccountsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entry-accounts',
            template: __webpack_require__(/*! ./entry-accounts.component.html */ "./src/app/Components/entry-accounts/entry-accounts.component.html"),
            styles: [__webpack_require__(/*! ./entry-accounts.component.css */ "./src/app/Components/entry-accounts/entry-accounts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EntryAccountsComponent);
    return EntryAccountsComponent;
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

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\">\n    <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\"> {{ 'home.title' | translate }}</h4>\n        <p class=\"mg-b-0\">{{ 'home.we' | translate }}</p>\n    </div><!-- d-flex -->\n\n    <div class=\"br-pagebody mg-t-5 pd-x-30\">\n        <div class=\"row row-sm\">\n            <div class=\"col-12\">\n                <div class=\"card pd-0 bd-0 shadow-base pb-3\">\n                    <div class=\"pd-x-30 pd-t-30 pd-b-15\">\n                        <h6 class=\"tx-13 tx-uppercase tx-inverse tx-semibold tx-spacing-1\">{{ 'home.set' | translate }}</h6>\n                        <div class=\"row\">\n                            <label class=\"col-3\" for=\"branch_id\">{{ 'home.branch' | translate }}</label>\n                            <select id=\"branch_id\" class=\"form-control select2 col-6 mr-1\" name=\"branch_id\"\n                                    #branch_id=\"ngModel\" ngModel [ngModel]=\"branch\">\n                                <option *ngFor=\"let branch of branches\" [value]=\"branch.id\">{{branch.name}}</option>\n                            </select>\n                            <button class=\"btn btn-primary col-2 ml-5\" (click)=\"changeBranch()\">{{ 'home.subm' | translate }}</button>\n                        </div>\n                    </div>\n                </div><!-- card -->\n                <br>\n            </div>\n        </div>\n        <div class=\"row row-sm\">\n            <div class=\"col-sm-6 col-xl-3\">\n                <div class=\"bg-teal rounded overflow-hidden\">\n                    <div class=\"pd-25 d-flex align-items-center\">\n                        <i class=\"ion ion-earth tx-60 lh-0 tx-white op-7\"></i>\n                        <div class=\"mg-l-20\">\n                            <p class=\"tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10\">{{ 'home.visit' | translate }}</p>\n                            <p class=\"tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1\">{{ 'home.num' | translate }}</p>\n                            <span class=\"tx-11 tx-roboto tx-white-6\">{{ 'home.anum' | translate }}</span>\n                        </div>\n                    </div>\n                </div>\n            </div><!-- col-3 -->\n            <div class=\"col-sm-6 col-xl-3 mg-t-20 mg-sm-t-0\">\n                <div class=\"bg-danger rounded overflow-hidden\">\n                    <div class=\"pd-25 d-flex align-items-center\">\n                        <i class=\"ion ion-bag tx-60 lh-0 tx-white op-7\"></i>\n                        <div class=\"mg-l-20\">\n                            <p class=\"tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10\">{{ 'home.sales' | translate }}</p>\n                            <p class=\"tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1\">{{ 'home.dollar' | translate }}</p>\n                            <span class=\"tx-11 tx-roboto tx-white-6\">{{ 'home.before' | translate }}</span>\n                        </div>\n                    </div>\n                </div>\n            </div><!-- col-3 -->\n            <div class=\"col-sm-6 col-xl-3 mg-t-20 mg-xl-t-0\">\n                <div class=\"bg-primary rounded overflow-hidden\">\n                    <div class=\"pd-25 d-flex align-items-center\">\n                        <i class=\"ion ion-monitor tx-60 lh-0 tx-white op-7\"></i>\n                        <div class=\"mg-l-20\">\n                            <p class=\"tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10\">{{ 'home.visits' | translate }}</p>\n                            <p class=\"tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1\">54.45%</p>\n                            <span class=\"tx-11 tx-roboto tx-white-6\">{{ 'home.avg' | translate }}</span>\n                        </div>\n                    </div>\n                </div>\n            </div><!-- col-3 -->\n            <div class=\"col-sm-6 col-xl-3 mg-t-20 mg-xl-t-0\">\n                <div class=\"bg-br-primary rounded overflow-hidden\">\n                    <div class=\"pd-25 d-flex align-items-center\">\n                        <i class=\"ion ion-clock tx-60 lh-0 tx-white op-7\"></i>\n                        <div class=\"mg-l-20\">\n                            <p class=\"tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10\">{{ 'home.bounce' | translate }}</p>\n                            <p class=\"tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1\">32.16%</p>\n                            <span class=\"tx-11 tx-roboto tx-white-6\">{{ 'home.time' | translate }}</span>\n                        </div>\n                    </div>\n                </div>\n            </div><!-- col-3 -->\n        </div><!-- row -->\n\n\n    </div><!-- br-pagebody -->\n\n</div><!-- br-mainpanel -->\n<!-- ########## END: MAIN PANEL ########## -->\n"

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
/* harmony import */ var _Services_branch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/branch.service */ "./src/app/Services/branch.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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
    function HomeComponent(branchesApi, translate, titleService) {
        this.branchesApi = branchesApi;
        this.translate = translate;
        this.titleService = titleService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var c = this;
        this.branchesSubs = this.branchesApi.getBranches().subscribe(function (res) {
            _this.branches = res['branches'];
            _this.branch = localStorage.getItem('branch_id');
            jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
                c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("globals.dashboard"));
            });
        });
    };
    HomeComponent.prototype.changeBranch = function () {
        var branch_id = jquery__WEBPACK_IMPORTED_MODULE_2__("select[name=branch_id]").val();
        var branch = this.branches.filter(function (branch) { return branch.id == branch_id; });
        if (branch.length > 0) {
            var branch_name = branch[0].name;
            localStorage.setItem('branch_id', branch_id);
            localStorage.setItem('branch_name', branch_name);
            location.reload();
        }
        else {
            localStorage.setItem('branch_id', '0');
        }
        return false;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/Components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/Components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_branch_service__WEBPACK_IMPORTED_MODULE_1__["BranchService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/Components/locals/local-add/local-add.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/Components/locals/local-add/local-add.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/locals/local-add/local-add.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Components/locals/local-add/local-add.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n    <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\">{{ 'locala.local' | translate }} </h4>\n        <p class=\"mg-b-0\">{{ 'locala.new' | translate }} </p>\n    </div>\n    <div class=\"br-pagebody\">\n        <div class=\"br-section-wrapper\">\n            <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ 'locala.anew' | translate }}</h6>\n            <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n                <div class=\"form-layout-footer mg-b-30 text-right\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n                <div class=\"form-layout form-layout-6\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ 'locala.descript' | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Enter decription\"\n                                   name=\"description\" #decription=\"ngModel\" ngModel>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                </div><!-- form-layout -->\n                <hr>\n                <div class=\"form-layout-footer mg-t-30 text-center\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ 'globals.sub' | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/locals/local-add/local-add.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Components/locals/local-add/local-add.component.ts ***!
  \********************************************************************/
/*! exports provided: LocalAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalAddComponent", function() { return LocalAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/local.service */ "./src/app/Services/local.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LocalAddComponent = /** @class */ (function () {
    function LocalAddComponent(localsApi, router, translate, titleService) {
        this.localsApi = localsApi;
        this.router = router;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    LocalAddComponent.prototype.ngOnInit = function () {
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_3__(".float-input");
            float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2)); });
            float_inputs.on('change', function () {
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2));
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__("input").on('change', function () {
                c.formChanged = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__("select").on('change', function () {
                c.formChanged = true;
            });
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("locala.new"));
        });
    };
    LocalAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.localsSubs = this.localsApi.addLocal(parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/locals']);
                location.reload();
            }
        }, console.error);
    };
    LocalAddComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/locals']);
            } });
        }
        else {
            this.router.navigate(['/locals']);
        }
        return false;
    };
    LocalAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-local-add',
            template: __webpack_require__(/*! ./local-add.component.html */ "./src/app/Components/locals/local-add/local-add.component.html"),
            styles: [__webpack_require__(/*! ./local-add.component.css */ "./src/app/Components/locals/local-add/local-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_local_service__WEBPACK_IMPORTED_MODULE_1__["LocalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], LocalAddComponent);
    return LocalAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/locals/local-edit/local-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/Components/locals/local-edit/local-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/locals/local-edit/local-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/Components/locals/local-edit/local-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">  {{ 'locale.local' | translate }}</h4>\n    <p class=\"mg-b-0\"> {{ 'locale.edit' | translate }} </p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\"> {{ 'locale.edit' | translate }}</h6>\n      <form *ngIf=\"local\" #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'locale.descript' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter decription\"\n                     name=\"description\" #decription=\"ngModel\" ngModel [ngModel]=\"local.description\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n        </div><!-- form-layout -->\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\"> {{ 'globals.sub' | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/locals/local-edit/local-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Components/locals/local-edit/local-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: LocalEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalEditComponent", function() { return LocalEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_local_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/local.service */ "./src/app/Services/local.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LocalEditComponent = /** @class */ (function () {
    function LocalEditComponent(localsApi, router, route, translate, titleService) {
        this.localsApi = localsApi;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    LocalEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localsSubs = this.localsApi.getLocal(this.route.params['value']['rule_id']).subscribe(function (res) {
            _this.local = res['local'];
            var c = _this;
            jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
                var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_3__(".float-input");
                float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2)); });
                float_inputs.on('change', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2));
                });
                jquery__WEBPACK_IMPORTED_MODULE_3__("input").on('change', function () {
                    c.formChanged = true;
                });
                jquery__WEBPACK_IMPORTED_MODULE_3__("select").on('change', function () {
                    c.formChanged = true;
                });
                c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("locale.edit"));
            });
        });
    };
    LocalEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.localsSubs = this.localsApi.editLocal(this.local.id, parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/locals']);
                location.reload();
            }
        }, console.error);
    };
    LocalEditComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/locals']);
            } });
        }
        else {
            this.router.navigate(['/locals']);
        }
        return false;
    };
    LocalEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-local-edit',
            template: __webpack_require__(/*! ./local-edit.component.html */ "./src/app/Components/locals/local-edit/local-edit.component.html"),
            styles: [__webpack_require__(/*! ./local-edit.component.css */ "./src/app/Components/locals/local-edit/local-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_local_service__WEBPACK_IMPORTED_MODULE_1__["LocalService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], LocalEditComponent);
    return LocalEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/locals/local-overview/local-overview.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/locals/local-overview/local-overview.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/locals/local-overview/local-overview.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/Components/locals/local-overview/local-overview.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n    <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\"> {{ 'localo.local' | translate }} </h4>\n        <p class=\"mg-b-0\">{{ 'localo.list' | translate }} </p>\n    </div><!-- d-flex -->\n    <div class=\"br-pagebody\">\n        <div class=\"br-section-wrapper\">\n            <div class=\"text-left\">\n                <a routerLink=\"/assets\" class=\"btn btn-primary\"><i class=\"fa fa-long-arrow-left fa-lg\"><span style=\"font-family: Roboto, 'Helvetica Neue', Arial, sans-serif\">   {{ 'localo.asset' | translate }}</span></i></a>\n                <div class=\"float-right\">\n                    <a href=\"#\" (click)=\"massDeleteLocals()\" class=\"btn btn-danger mg-r-10\" *ngIf=\"delete\">{{ \"globals.mass\" | translate }}</a>\n                    <a routerLink=\"/locals/add\" class=\"btn btn-success\" *ngIf=\"add\">{{ 'globals.new' | translate }}</a>\n                </div>\n            </div>\n            <hr>\n            <ag-grid-angular\n                    style=\"width: 100%;\"\n                    class=\"ag-theme-material\"\n                    [rowData]=\"rowData\"\n                    [columnDefs]=\"columnDefs\"\n                    [enableSorting]=\"true\"\n                    [enableFilter]=\"true\"\n                    [frameworkComponents]=\"frameworkComponents\"\n                    rowSelection=\"multiple\"\n                    [rowMultiSelectWithClick]=\"true\"\n                    (gridReady)=\"onGridReady($event)\"\n                    (firstDataRendered)=\"onFirstDataRendered($event)\"\n                    (gridSizeChanged)=\"onFirstDataRendered($event)\"\n                    domLayout='autoHeight'\n                    pagination=\"true\"\n                    paginationPageSize=\"10\"\n            >\n            </ag-grid-angular>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/locals/local-overview/local-overview.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Components/locals/local-overview/local-overview.component.ts ***!
  \******************************************************************************/
/*! exports provided: LocalOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalOverviewComponent", function() { return LocalOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_local_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/local.service */ "./src/app/Services/local.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LocalOverviewComponent = /** @class */ (function () {
    function LocalOverviewComponent(localsApi, translate, titleService) {
        this.localsApi = localsApi;
        this.translate = translate;
        this.titleService = titleService;
        this.columnDefs = [];
        this.rowData = [];
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.frameworkComponents = {
            actionsFormatterComponent: _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
        };
    }
    LocalOverviewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
    };
    LocalOverviewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    LocalOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localsSubs = this.localsApi.getLocals().subscribe(function (res) {
            _this.locals = res['locals'];
            _this.add = res['add'];
            _this.edit = res['edit'];
            _this.delete = res['delete'];
            _this.columnDefs = [
                { headerName: 'Description', field: 'description' },
                { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
            ];
            for (var i = 0; i < _this.locals.length; i++) {
                _this.locals[i]['actions'] = {
                    'api': _this.localsApi,
                    'id': _this.locals[i].id,
                    'delete': [_this.delete, _this.deleteLocal],
                    'edit': [_this.edit, '/locals/edit/'],
                    'self': _this
                };
            }
            _this.rowData = _this.locals;
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("localo.local"));
        });
    };
    LocalOverviewComponent.prototype.massDeleteLocals = function () {
        var nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids = nodes.map(function (row) { return row.data.id; });
            var parameter = { ids: ids };
            if (confirm("Are You Sure Want To Delete ? ")) {
                this.localsSubs = this.localsApi.deleteLocal('mass', parameter).subscribe(function (res) {
                    if (res == 1) {
                        location.reload();
                    }
                }, console.error);
            }
        }
        return false;
    };
    LocalOverviewComponent.prototype.deleteLocal = function (id, localsApi, self) {
        var parameter = {};
        if (confirm("Are You Sure Want To Delete ? ")) {
            this.localsSubs = self.localsApi.deleteLocal(id, parameter).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    LocalOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-local-overview',
            template: __webpack_require__(/*! ./local-overview.component.html */ "./src/app/Components/locals/local-overview/local-overview.component.html"),
            styles: [__webpack_require__(/*! ./local-overview.component.css */ "./src/app/Components/locals/local-overview/local-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_local_service__WEBPACK_IMPORTED_MODULE_2__["LocalService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], LocalOverviewComponent);
    return LocalOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/locals/locals.component.css":
/*!********************************************************!*\
  !*** ./src/app/Components/locals/locals.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/locals/locals.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Components/locals/locals.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Components/locals/locals.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/locals/locals.component.ts ***!
  \*******************************************************/
/*! exports provided: LocalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalsComponent", function() { return LocalsComponent; });
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

var LocalsComponent = /** @class */ (function () {
    function LocalsComponent() {
    }
    LocalsComponent.prototype.ngOnInit = function () {
    };
    LocalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locals',
            template: __webpack_require__(/*! ./locals.component.html */ "./src/app/Components/locals/locals.component.html"),
            styles: [__webpack_require__(/*! ./locals.component.css */ "./src/app/Components/locals/locals.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LocalsComponent);
    return LocalsComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/parameter-add/parameter-add.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/parameters/parameter-add/parameter-add.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/parameters/parameter-add/parameter-add.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/Components/parameters/parameter-add/parameter-add.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ 'parama.param' | translate }} </h4>\n    <p class=\"mg-b-0\">{{ 'parama.add' | translate }} </p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ 'parama.new' | translate }}</h6>\n      <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'parama.attr' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter attribute\"\n                     name=\"attribute\" #attribute=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'parama.des' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter description\"\n                     name=\"description\" #description=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'parama.def' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter default_value\"\n                     name=\"default_value\" #default_value=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n        </div><!-- form-layout -->\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ 'globals.sub' | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/parameters/parameter-add/parameter-add.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Components/parameters/parameter-add/parameter-add.component.ts ***!
  \********************************************************************************/
/*! exports provided: ParameterAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterAddComponent", function() { return ParameterAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_parameter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/parameter.service */ "./src/app/Services/parameter.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ParameterAddComponent = /** @class */ (function () {
    function ParameterAddComponent(parameterApi, router, translate, titleService) {
        this.parameterApi = parameterApi;
        this.router = router;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    ParameterAddComponent.prototype.ngOnInit = function () {
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_3__(".float-input");
            float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2)); });
            float_inputs.on('change', function () {
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2));
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__("input").on('change', function () {
                c.formChanged = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__("select").on('change', function () {
                c.formChanged = true;
            });
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("parama.new"));
        });
    };
    ParameterAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.parametersSubs = this.parameterApi.addParameter(parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/parameters']);
                location.reload();
            }
        }, console.error);
    };
    ParameterAddComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/parameters']);
            } });
        }
        else {
            this.router.navigate(['/']);
        }
        return false;
    };
    ParameterAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parameter-add',
            template: __webpack_require__(/*! ./parameter-add.component.html */ "./src/app/Components/parameters/parameter-add/parameter-add.component.html"),
            styles: [__webpack_require__(/*! ./parameter-add.component.css */ "./src/app/Components/parameters/parameter-add/parameter-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_parameter_service__WEBPACK_IMPORTED_MODULE_2__["ParameterService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], ParameterAddComponent);
    return ParameterAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/parameter-edit/parameter-edit.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/parameters/parameter-edit/parameter-edit.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/parameters/parameter-edit/parameter-edit.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/Components/parameters/parameter-edit/parameter-edit.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n    <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\">  {{ 'parame.param' | translate }}</h4>\n        <p class=\"mg-b-0\">{{ 'parame.edit' | translate }} </p>\n    </div>\n    <div class=\"br-pagebody\">\n        <div class=\"br-section-wrapper\">\n            <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\"> {{ 'parame.edit' | translate }}</h6>\n            <form *ngIf=\"parameter\" #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n                <div class=\"form-layout-footer mg-b-30 text-right\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n                <div class=\"form-layout form-layout-6\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ 'parame.attr' | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Enter attribute\"\n                                   name=\"attribute\" #attribute=\"ngModel\" ngModel [ngModel]=\"parameter.attribute\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ 'parame.des' | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Enter description\"\n                                   name=\"description\" #description=\"ngModel\" ngModel [ngModel]=\"parameter.description\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ 'parame.def' | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Enter default_value\"\n                                   name=\"default_value\" #default_value=\"ngModel\" ngModel [ngModel]=\"parameter.default_value\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                </div><!-- form-layout -->\n                <hr>\n                <div class=\"form-layout-footer mg-t-30 text-center\">\n                    <button class=\"btn btn-info\" type=\"submit\"> {{ 'globals.sub' | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/parameters/parameter-edit/parameter-edit.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Components/parameters/parameter-edit/parameter-edit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ParameterEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterEditComponent", function() { return ParameterEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_parameter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/parameter.service */ "./src/app/Services/parameter.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ParameterEditComponent = /** @class */ (function () {
    function ParameterEditComponent(parametersApi, router, route, translate, titleService) {
        this.parametersApi = parametersApi;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    ParameterEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parameterSubs = this.parametersApi.getParameter(this.route.params['value']['rule_id']).subscribe(function (res) {
            _this.parameter = res['parameter'];
            var c = _this;
            jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
                var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_3__(".float-input");
                float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2)); });
                float_inputs.on('change', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2));
                });
                jquery__WEBPACK_IMPORTED_MODULE_3__("input").on('change', function () {
                    c.formChanged = true;
                });
                jquery__WEBPACK_IMPORTED_MODULE_3__("select").on('change', function () {
                    c.formChanged = true;
                });
                c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("parame.edit"));
            });
        });
    };
    ParameterEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.parameterSubs = this.parametersApi.editParameter(this.parameter.id, parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/parameters']);
                location.reload();
            }
        }, console.error);
    };
    ParameterEditComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/parameters']);
            } });
        }
        else {
            this.router.navigate(['/parameters']);
        }
        return false;
    };
    ParameterEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parameter-edit',
            template: __webpack_require__(/*! ./parameter-edit.component.html */ "./src/app/Components/parameters/parameter-edit/parameter-edit.component.html"),
            styles: [__webpack_require__(/*! ./parameter-edit.component.css */ "./src/app/Components/parameters/parameter-edit/parameter-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_parameter_service__WEBPACK_IMPORTED_MODULE_2__["ParameterService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], ParameterEditComponent);
    return ParameterEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/parameter-overview/parameter-overview.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/Components/parameters/parameter-overview/parameter-overview.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/parameters/parameter-overview/parameter-overview.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/Components/parameters/parameter-overview/parameter-overview.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\"> {{ 'paramo.param' | translate }} </h4>\n    <p class=\"mg-b-0\">{{ 'paramo.list' | translate }} </p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <div class=\"text-right\">\n        <a href=\"#\" (click)=\"massDeleteParameter()\" class=\"btn btn-danger mg-r-10\" *ngIf=\"delete\"> {{ \"globals.mass\" | translate }}</a>\n        <a routerLink=\"/parameters/add\" class=\"btn btn-success\" *ngIf=\"add\"> {{ 'globals.new' | translate }}</a>\n      </div>\n      <hr>\n      <ag-grid-angular\n              style=\"width: 100%;\"\n              class=\"ag-theme-material\"\n              [rowData]=\"rowData\"\n              [columnDefs]=\"columnDefs\"\n              [enableSorting]=\"true\"\n              [enableFilter]=\"true\"\n              [frameworkComponents]=\"frameworkComponents\"\n              rowSelection=\"multiple\"\n              [rowMultiSelectWithClick]=\"true\"\n              (gridReady)=\"onGridReady($event)\"\n              (firstDataRendered)=\"onFirstDataRendered($event)\"\n              (gridSizeChanged)=\"onFirstDataRendered($event)\"\n              domLayout='autoHeight'\n              pagination=\"true\"\n              paginationPageSize=\"10\"\n      >\n      </ag-grid-angular>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/parameters/parameter-overview/parameter-overview.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/Components/parameters/parameter-overview/parameter-overview.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ParameterOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterOverviewComponent", function() { return ParameterOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_parameter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/parameter.service */ "./src/app/Services/parameter.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ParameterOverviewComponent = /** @class */ (function () {
    function ParameterOverviewComponent(parameterApi, translate, titleService) {
        this.parameterApi = parameterApi;
        this.translate = translate;
        this.titleService = titleService;
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.columnDefs = [];
        this.rowData = [];
        this.frameworkComponents = {
            actionsFormatterComponent: _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
        };
    }
    ParameterOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parameterSubs = this.parameterApi.getParameters().subscribe(function (res) {
            _this.parameters = res['parameters'];
            _this.add = res['add'];
            _this.edit = res['edit'];
            _this.delete = res['delete'];
            _this.columnDefs = [
                { headerName: 'Attribute', field: 'attribute' },
                { headerName: 'Description', field: 'description' },
                { headerName: 'Default Value', field: 'default_value' },
                { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
            ];
            for (var i = 0; i < _this.parameters.length; i++) {
                _this.parameters[i]['details'] = { 'id': i, 'gridApi': _this.gridApi, 'gridColumnApi': _this.gridColumnApi };
                _this.parameters[i]['actions'] = {
                    'self': _this,
                    'id': _this.parameters[i].id,
                    'delete': [_this.delete, _this.deleteParameter],
                    'edit': [_this.edit, '/parameters/edit/']
                };
            }
            _this.rowData = _this.parameters;
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("paramo.param"));
        });
    };
    ParameterOverviewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
    };
    ParameterOverviewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    ParameterOverviewComponent.prototype.deleteParameter = function (id, type, self) {
        var parameter = {};
        if (confirm("Are You Sure Want To Delete ? ")) {
            this.parameterSubs = self.parameterApi.deleteParameter(id, parameter).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    ParameterOverviewComponent.prototype.massDeleteParameter = function () {
        var nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids = nodes.map(function (row) { return row.data.id; });
            var parameter = { ids: ids };
            if (confirm("Are You Sure Want To Delete ? ")) {
                this.parameterSubs = this.parameterApi.deleteParameter('mass', parameter).subscribe(function (res) {
                    if (res == 1) {
                        location.reload();
                    }
                }, console.error);
            }
        }
        return false;
    };
    ParameterOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parameter-overview',
            template: __webpack_require__(/*! ./parameter-overview.component.html */ "./src/app/Components/parameters/parameter-overview/parameter-overview.component.html"),
            styles: [__webpack_require__(/*! ./parameter-overview.component.css */ "./src/app/Components/parameters/parameter-overview/parameter-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_parameter_service__WEBPACK_IMPORTED_MODULE_2__["ParameterService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], ParameterOverviewComponent);
    return ParameterOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/parameters/parameters.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Components/parameters/parameters.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/parameters/parameters.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Components/parameters/parameters.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Components/parameters/parameters.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/parameters/parameters.component.ts ***!
  \***************************************************************/
/*! exports provided: ParametersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersComponent", function() { return ParametersComponent; });
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

var ParametersComponent = /** @class */ (function () {
    function ParametersComponent() {
    }
    ParametersComponent.prototype.ngOnInit = function () {
    };
    ParametersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-parameters',
            template: __webpack_require__(/*! ./parameters.component.html */ "./src/app/Components/parameters/parameters.component.html"),
            styles: [__webpack_require__(/*! ./parameters.component.css */ "./src/app/Components/parameters/parameters.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ParametersComponent);
    return ParametersComponent;
}());



/***/ }),

/***/ "./src/app/Components/partials/account-details/account-details.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/partials/account-details/account-details.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/partials/account-details/account-details.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/Components/partials/account-details/account-details.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: visible\">\n    <button [class]=\"'btn btn-link collapsed-toggle details-toggle-'+master_raw_id\" (click)=\"toggleDetails()\"><i class=\"fa fa-angle-down\"></i></button>\n    <div [id]=\"'tab-details-'+master_raw_id\" class=\"invisible details d-grid\">\n        <div class=\"text-right\" style=\"overflow:visible;width:100%;z-index:10000\">\n            <a href=\"#\"  (click)=\"massDelete()\" class=\"btn btn-danger btn-sm mg-r-10\" >{{ \"globals.mass\" | translate }}</a>\n        </div>\n        <ag-grid-angular\n                style=\"overflow:visible;width:100%;z-index:10000\"\n                [id]=\"'details-'+master_raw_id\"\n                class=\"ag-theme-fresh details-ag-grid\"\n                [rowData]=\"rowData\"\n                [columnDefs]=\"columnDefs\"\n                domLayout='autoHeight'\n                [frameworkComponents]=\"frameworkComponents\"\n                rowSelection=\"multiple\"\n                (firstDataRendered)=\"onFirstDataRendered($event)\"\n                (gridSizeChanged)=\"onFirstDataRendered($event)\"\n                (gridReady)=\"onGridReady($event)\">\n        </ag-grid-angular>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/partials/account-details/account-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Components/partials/account-details/account-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AccountDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailsComponent", function() { return AccountDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/account.service */ "./src/app/Services/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountDetailsComponent = /** @class */ (function () {
    function AccountDetailsComponent(accountsApi) {
        this.accountsApi = accountsApi;
        this.node = null;
        this.master_raw_id = null;
        this.account_id = null;
        this.cost_center_options = {};
        this.columnDefs = [];
        this.rowData = [{ id: 0, rating_pct: '0', check: 'Add new ', name: 0 }];
        this.frameworkComponents = {
            actionsFormatterComponent: _action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
        };
    }
    AccountDetailsComponent_1 = AccountDetailsComponent;
    AccountDetailsComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            var w = 8 / 9 * (parseInt(jquery__WEBPACK_IMPORTED_MODULE_2__(document).innerWidth()) - parseInt(jquery__WEBPACK_IMPORTED_MODULE_2__('.br-sideleft').width()) - 300);
            jquery__WEBPACK_IMPORTED_MODULE_2__('.details').width(w);
        });
    };
    AccountDetailsComponent.prototype.onGridReady = function (params) {
        this.accountGridApi = params.api;
        this.accountGridColumnApi = params.columnApi;
    };
    AccountDetailsComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
    };
    AccountDetailsComponent.prototype.agInit = function (params) {
        this.gridApi = params.value.gridApi;
        this.gridColumnApi = params.value.gridColumnApi;
        this.master_raw_id = params.value.row_id;
        this.account_id = params.value.id;
    };
    AccountDetailsComponent.extractValues = function (mappings) {
        return Object.keys(mappings);
    };
    AccountDetailsComponent.lookupValue = function (mappings, key) {
        return mappings[key];
    };
    AccountDetailsComponent.lookupKey = function (mappings, name) {
        for (var key in mappings) {
            if (mappings.hasOwnProperty(key)) {
                if (name === mappings[key]) {
                    return key;
                }
            }
        }
    };
    AccountDetailsComponent.prototype.toggleDetails = function () {
        var _this = this;
        var toggle = jquery__WEBPACK_IMPORTED_MODULE_2__('.details-toggle-' + this.master_raw_id);
        var angle = toggle.find('i');
        var t = jquery__WEBPACK_IMPORTED_MODULE_2__('#tab-details-' + this.master_raw_id);
        if (toggle.hasClass('collapsed-toggle')) {
            if (this.rowData.length == 1) {
                this.node = this.gridApi.getRowNode(this.master_raw_id);
                this.accountsSubs = this.accountsApi.getAccountCostCenters(this.account_id).subscribe(function (res) {
                    ///////////////////////////////////////
                    _this.cost_center_options = res['cost_center_options'];
                    var c = _this;
                    _this.columnDefs = [
                        {
                            headerName: '', field: 'check', width: 70, checkboxSelection: function (params) {
                                return (params.node.id != 0);
                            }
                        },
                        {
                            headerName: 'Cost Center Name',
                            field: 'name',
                            editable: true,
                            cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: AccountDetailsComponent_1.extractValues(c.cost_center_options)
                            },
                            valueFormatter: function (params) {
                                return AccountDetailsComponent_1.lookupValue(c.cost_center_options, params.value);
                            },
                            valueParser: function (params) {
                                return AccountDetailsComponent_1.lookupKey(c.cost_center_options, params.newValue);
                            }
                        },
                        { headerName: 'Rating %', field: 'rating_pct', width: 70, editable: true, valueSetter: function (params) {
                                // Value is legit - set it and signal the value has been changed/set
                                if (params.newValue >= 0) {
                                    params.data[params.colDef.field] = params.newValue;
                                    return true;
                                }
                                // Illegal value - signal no change
                                return false;
                            } },
                        { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
                    ];
                    _this.rowData = _this.rowData.concat(res['accounts_cost_centers']);
                    for (var i = 0; i < _this.rowData.length; i++) {
                        _this.rowData[i]['actions'] = {
                            api: _this.accountsApi,
                            id: _this.rowData[i].id,
                            delete: [(i != 0), _this.deleteCostCenter],
                            edit: [false, ''],
                            save: [true, _this.save],
                            type: 'account_cost_center',
                            self: _this
                        };
                    }
                    toggle.removeClass('collapsed-toggle');
                    toggle.addClass('expanded-toggle');
                    angle.removeClass('fa-angle-down');
                    angle.addClass('fa-angle-up');
                    t.removeClass('invisible');
                    _this.resetHeight();
                });
            }
            else {
                toggle.removeClass('collapsed-toggle');
                toggle.addClass('expanded-toggle');
                angle.removeClass('fa-angle-down');
                angle.addClass('fa-angle-up');
                t.removeClass('invisible');
                this.resetHeight();
            }
        }
        else {
            this.node.setRowHeight(50);
            this.gridApi.onRowHeightChanged();
            toggle.removeClass('expanded-toggle');
            toggle.addClass('collapsed-toggle');
            angle.removeClass('fa-angle-up');
            angle.addClass('fa-angle-down');
            t.addClass('invisible');
        }
    };
    AccountDetailsComponent.prototype.massDelete = function () {
        var _this = this;
        var nodes = this.accountGridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids_1 = nodes.map(function (row) { return row.data.id; });
            var parameter = { ids: ids_1 };
            if (confirm("Are You Sure")) {
                this.accountsSubs = this.accountsApi.deleteAccountCostCenter(this.account_id, parameter, 'mass').subscribe(function (res) {
                    if (res == 1) {
                        _this.rowData = _this.rowData.filter(function (row) { return !(ids_1.includes(row.id)); });
                        _this.accountGridApi.setRowData(_this.rowData);
                        _this.resetHeight();
                    }
                }, console.error);
                return false;
            }
        }
        return false;
    };
    AccountDetailsComponent.prototype.deleteCostCenter = function (id, type, self) {
        if (confirm("Are You Sure")) {
            self.accountsSubs = self.accountsApi.deleteAccountCostCenter(self.account_id, {}, id).subscribe(function (res) {
                if (res == 1) {
                    self.rowData = self.rowData.filter(function (row) { return row.id != id; });
                    self.accountGridApi.setRowData(self.rowData);
                    self.resetHeight();
                }
            }, console.error);
            return false;
        }
    };
    AccountDetailsComponent.prototype.save = function (id, type, self) {
        var row = self.rowData.filter(function (row) { return row.id == id; })[0];
        var parameters = { 'costcenter_id': row.name, 'rating_pct': row.rating_pct, 'name': row.name };
        if (id == 0) {
            self.accountsSubs = self.accountsApi.addAccountCostCenter(self.account_id, parameters).subscribe(function (res) {
                if (res > 0) {
                    parameters['id'] = res;
                    parameters['actions'] = {
                        api: self.accountsApi,
                        id: res,
                        delete: [true, self.deleteCostCenter],
                        edit: [false, ''],
                        save: [true, self.save],
                        type: 'ratio',
                        self: self
                    };
                    self.rowData.push(parameters);
                    self.accountGridApi.setRowData(self.rowData);
                    return false;
                }
            }, console.error);
        }
        else {
            self.accountsSubs = self.accountsApi.editAccountCostCenter(self.account_id, parameters, id).subscribe(function (res) {
                if (res == 0) {
                    return false;
                }
            }, console.error);
        }
        self.resetHeight();
        return false;
    };
    AccountDetailsComponent.prototype.resetHeight = function () {
        var r = this.rowData.length;
        this.node.setRowHeight((r * 25) + 200);
        this.gridApi.onRowHeightChanged();
    };
    var AccountDetailsComponent_1;
    AccountDetailsComponent = AccountDetailsComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account-details',
            template: __webpack_require__(/*! ./account-details.component.html */ "./src/app/Components/partials/account-details/account-details.component.html"),
            styles: [__webpack_require__(/*! ./account-details.component.css */ "./src/app/Components/partials/account-details/account-details.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]])
    ], AccountDetailsComponent);
    return AccountDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <a *ngIf=\"can_delete\" href=\"#\" (click)=\"delete(entity_id, type, self)\" class='btn btn-danger mr-1' >\n        <i class='fa fa-trash text-white'></i>\n    </a>\n    <a *ngIf=\"can_edit\" [routerLink]=\"edit_url+entity_id\" class='btn btn-primary mr-1'>\n        <i class='fa fa-edit text-white'></i>\n    </a>\n    <a *ngIf=\"can_save\" (click)=\"save(entity_id, type, self)\"  href=\"#\" class=\"btn btn-success mr-1\">\n        <i class=\"fa fa-save\"></i>\n    </a>\n    <a *ngIf=\"can_view\" href=\"#\" [routerLink]=\"view_url+entity_id\" class='btn btn-warning mr-1' title=\"View Item\">\n        <i class='fa fa-desktop text-white'></i>\n    </a>\n    <a *ngIf=\"can_in_use\" href=\"#\" (click)=\"in_use(entity_id, type, self)\" class='btn btn-success mr-1' title=\"Make Item In Use\">\n        <i class='fa fa-check text-white'></i>\n    </a>\n    <a *ngIf=\"can_recalc\" href=\"#\" (click)=\"recalc(entity_id, type, self)\" class='btn btn-primary mr-1' title=\"Recalculate Item\">\n        <i class='fa fa-calculator text-white'></i>\n    </a>\n</div>"

/***/ }),

/***/ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ActionsFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsFormatterComponent", function() { return ActionsFormatterComponent; });
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

var ActionsFormatterComponent = /** @class */ (function () {
    function ActionsFormatterComponent() {
    }
    ActionsFormatterComponent.prototype.delete = function (id, type, self) { };
    ;
    ActionsFormatterComponent.prototype.save = function (id, type, self) { };
    ;
    ActionsFormatterComponent.prototype.in_use = function (id, type, self) { };
    ;
    ActionsFormatterComponent.prototype.recalc = function (id, type, self) { };
    ;
    ActionsFormatterComponent.prototype.ngOnInit = function () {
    };
    ActionsFormatterComponent.prototype.agInit = function (params) {
        this.can_delete = (typeof params.value.delete !== 'undefined') ? params.value.delete[0] : false;
        this.can_edit = (typeof params.value.edit !== 'undefined') ? params.value.edit[0] : false;
        this.can_save = (typeof params.value.save !== 'undefined') ? params.value.save[0] : false;
        this.can_view = (typeof params.value.view !== 'undefined') ? params.value.view[0] : false;
        this.can_in_use = (typeof params.value.in_use !== 'undefined') ? params.value.in_use[0] : false;
        this.can_recalc = (typeof params.value.recalc !== 'undefined') ? params.value.recalc[0] : false;
        this.edit_url = (typeof params.value.edit !== 'undefined') ? params.value.edit[1] : '';
        this.view_url = (typeof params.value.view !== 'undefined') ? params.value.view[1] : '';
        this.entity_id = (typeof params.value.id !== 'undefined') ? params.value.id : 0;
        this.type = (typeof params.value.type !== 'undefined') ? params.value.type : '';
        this.self = (typeof params.value.self !== 'undefined') ? params.value.self : null;
        this.delete = (typeof params.value.delete !== 'undefined') ? params.value.delete[1] : this.delete;
        this.save = (typeof params.value.save !== 'undefined') ? params.value.save[1] : this.save;
        this.in_use = (typeof params.value.in_use !== 'undefined') ? params.value.in_use[1] : this.in_use;
        this.recalc = (typeof params.value.in_use !== 'undefined') ? params.value.recalc[1] : this.recalc;
    };
    ActionsFormatterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'action-cell-renderer',
            template: __webpack_require__(/*! ./action-cell-renderer.component.html */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ActionsFormatterComponent);
    return ActionsFormatterComponent;
}());



/***/ }),

/***/ "./src/app/Components/partials/asset-details/asset-details.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/Components/partials/asset-details/asset-details.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/partials/asset-details/asset-details.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/Components/partials/asset-details/asset-details.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: visible\">\n    <button [class]=\"'btn btn-link collapsed-toggle details-toggle-'+master_raw_id\" (click)=\"toggleDetails()\"><i class=\"fa fa-angle-down\"></i></button>\n    <div [id]=\"'tab-details-'+master_raw_id\" class=\"invisible details d-grid\">\n        <div class=\"text-right\" style=\"overflow:visible;width:100%;z-index:10000\">\n            <a href=\"#\"  (click)=\"massDelete()\" class=\"btn btn-danger btn-sm mg-r-10\" >{{ \"globals.mass\" | translate }}</a>\n        </div>\n        <ag-grid-angular\n                style=\"overflow:visible;width:100%;z-index:10000\"\n                [id]=\"'details-'+master_raw_id\"\n                class=\"ag-theme-fresh details-ag-grid\"\n                [rowData]=\"rowData\"\n                [columnDefs]=\"columnDefs\"\n                domLayout='autoHeight'\n                [frameworkComponents]=\"frameworkComponents\"\n                rowSelection=\"multiple\"\n                (firstDataRendered)=\"onFirstDataRendered($event)\"\n                (gridSizeChanged)=\"onFirstDataRendered($event)\"\n                (gridReady)=\"onGridReady($event)\">\n        </ag-grid-angular>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/partials/asset-details/asset-details.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/Components/partials/asset-details/asset-details.component.ts ***!
  \******************************************************************************/
/*! exports provided: AssetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailsComponent", function() { return AssetDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_asset_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/asset.service */ "./src/app/Services/asset.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssetDetailsComponent = /** @class */ (function () {
    function AssetDetailsComponent(assetsApi) {
        this.assetsApi = assetsApi;
        this.node = null;
        this.master_raw_id = null;
        this.asset_id = null;
        this.cost_center_options = {};
        this.columnDefs = [];
        this.rowData = [];
        this.frameworkComponents = {
            actionsFormatterComponent: _action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
        };
    }
    AssetDetailsComponent_1 = AssetDetailsComponent;
    AssetDetailsComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            var w = 8 / 9 * (parseInt(jquery__WEBPACK_IMPORTED_MODULE_3__(document).innerWidth()) - parseInt(jquery__WEBPACK_IMPORTED_MODULE_3__('.br-sideleft').width()) - 300);
            jquery__WEBPACK_IMPORTED_MODULE_3__('.details').width(w);
        });
    };
    AssetDetailsComponent.prototype.onGridReady = function (params) {
        this.assetGridApi = params.api;
        this.assetGridColumnApi = params.columnApi;
    };
    AssetDetailsComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
    };
    AssetDetailsComponent.prototype.agInit = function (params) {
        this.gridApi = params.value.gridApi;
        this.gridColumnApi = params.value.gridColumnApi;
        this.master_raw_id = params.value.row_id;
        this.asset_id = params.value.id;
    };
    AssetDetailsComponent.extractValues = function (mappings) {
        return Object.keys(mappings);
    };
    AssetDetailsComponent.lookupValue = function (mappings, key) {
        return mappings[key];
    };
    AssetDetailsComponent.lookupKey = function (mappings, name) {
        for (var key in mappings) {
            if (mappings.hasOwnProperty(key)) {
                if (name === mappings[key]) {
                    return key;
                }
            }
        }
    };
    AssetDetailsComponent.prototype.toggleDetails = function () {
        var _this = this;
        var toggle = jquery__WEBPACK_IMPORTED_MODULE_3__('.details-toggle-' + this.master_raw_id);
        var angle = toggle.find('i');
        var t = jquery__WEBPACK_IMPORTED_MODULE_3__('#tab-details-' + this.master_raw_id);
        if (toggle.hasClass('collapsed-toggle')) {
            if (this.rowData.length == 0) {
                this.node = this.gridApi.getRowNode(this.master_raw_id);
                this.assetsSubs = this.assetsApi.getAssetCostCenters(this.asset_id).subscribe(function (res) {
                    ///////////////////////////////////////
                    _this.cost_center_options = res['cost_center_options'];
                    var c = _this;
                    _this.columnDefs = [
                        // {
                        //     headerName: '', field: 'check',width: 70,  checkboxSelection: function (params) {
                        //         return (params.node.id != 0);
                        //     }
                        // },
                        {
                            headerName: 'Cost Center Name',
                            field: 'name',
                            editable: true,
                            cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: AssetDetailsComponent_1.extractValues(c.cost_center_options)
                            },
                            valueFormatter: function (params) {
                                return AssetDetailsComponent_1.lookupValue(c.cost_center_options, params.value);
                            },
                            valueParser: function (params) {
                                return AssetDetailsComponent_1.lookupKey(c.cost_center_options, params.newValue);
                            }
                        },
                        { headerName: 'Rating %', field: 'rating_pct', width: 70, editable: true, valueSetter: function (params) {
                                // Value is legit - set it and signal the value has been changed/set
                                if (params.newValue >= 0) {
                                    params.data[params.colDef.field] = params.newValue;
                                    return true;
                                }
                                // Illegal value - signal no change
                                return false;
                            } },
                        { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
                    ];
                    var exists = res['assets_cost_centers'].map(function (j) { return parseInt(j.name); });
                    for (var i = 0; i < Object.keys(_this.cost_center_options).length; i++) {
                        var id = parseInt(Object.keys(_this.cost_center_options)[i].replace(/'/g, ''));
                        if (id != 0 && !exists.includes(id)) {
                            _this.rowData.push({ id: 0, name: id, rating_pct: '0' });
                        }
                    }
                    // {id: 0, rating_pct: '0', check: 'Add new ', name: 0}
                    _this.rowData = _this.rowData.concat(res['assets_cost_centers']);
                    for (var i = 0; i < _this.rowData.length; i++) {
                        _this.rowData[i]['actions'] = {
                            api: _this.assetsApi,
                            id: _this.rowData[i].name,
                            delete: [false, _this.deleteCostCenter],
                            edit: [false, ''],
                            save: [true, _this.save],
                            type: 'asset_cost_center',
                            self: _this
                        };
                    }
                    toggle.removeClass('collapsed-toggle');
                    toggle.addClass('expanded-toggle');
                    angle.removeClass('fa-angle-down');
                    angle.addClass('fa-angle-up');
                    t.removeClass('invisible');
                    _this.resetHeight();
                });
            }
            else {
                toggle.removeClass('collapsed-toggle');
                toggle.addClass('expanded-toggle');
                angle.removeClass('fa-angle-down');
                angle.addClass('fa-angle-up');
                t.removeClass('invisible');
                this.resetHeight();
            }
        }
        else {
            this.node.setRowHeight(50);
            this.gridApi.onRowHeightChanged();
            toggle.removeClass('expanded-toggle');
            toggle.addClass('collapsed-toggle');
            angle.removeClass('fa-angle-up');
            angle.addClass('fa-angle-down');
            t.addClass('invisible');
        }
    };
    AssetDetailsComponent.prototype.massDelete = function () {
        var _this = this;
        var nodes = this.assetGridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids_1 = nodes.map(function (row) { return row.data.id; });
            var parameter = { ids: ids_1 };
            if (confirm("Are You Sure")) {
                this.assetsSubs = this.assetsApi.deleteAssetCostCenter(this.asset_id, parameter, 'mass').subscribe(function (res) {
                    if (res == 1) {
                        _this.rowData = _this.rowData.filter(function (row) { return !(ids_1.includes(row.id)); });
                        _this.assetGridApi.setRowData(_this.rowData);
                        _this.resetHeight();
                    }
                }, console.error);
                return false;
            }
        }
        return false;
    };
    AssetDetailsComponent.prototype.deleteCostCenter = function (id, type, self) {
        var _this = this;
        if (confirm("Are You Sure")) {
            self.assetsSubs = self.assetsApi.deleteAssetCostCenter(self.asset_id, {}, id).subscribe(function (res) {
                if (res == 1) {
                    self.rowData = self.rowData.filter(function (row) { return row.id != id; });
                    self.assetGridApi.setRowData(self.rowData);
                    _this.resetHeight();
                }
            }, console.error);
            return false;
        }
    };
    AssetDetailsComponent.prototype.save = function (id, type, self) {
        var name = 0;
        var row = self.rowData.filter(function (row) { return row.name == id; })[0];
        id = row.id;
        name = row.name;
        var parameters = { 'costcenter_id': row.name, 'rating_pct': row.rating_pct, 'name': row.name };
        if (id == 0) {
            self.assetsSubs = self.assetsApi.addAssetCostCenter(self.asset_id, parameters).subscribe(function (res) {
                if (res > 0) {
                    parameters['id'] = res;
                    parameters['actions'] = {
                        api: self.assetsApi,
                        id: res,
                        delete: [true, self.deleteCostCenter],
                        edit: [false, ''],
                        save: [true, self.save],
                        type: 'ratio',
                        self: self
                    };
                    var row_1 = self.rowData.filter(function (row) { return row.name == name; })[0];
                    row_1.id = res;
                    return false;
                }
            }, console.error);
        }
        else {
            self.assetsSubs = self.assetsApi.editAssetCostCenter(self.asset_id, parameters, id).subscribe(function (res) {
                if (res == 1) {
                    return false;
                }
            }, console.error);
        }
        return false;
    };
    AssetDetailsComponent.prototype.resetHeight = function () {
        var r = this.rowData.length;
        this.node.setRowHeight((r * 25) + 200);
        this.gridApi.onRowHeightChanged();
    };
    var AssetDetailsComponent_1;
    AssetDetailsComponent = AssetDetailsComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-asset-details',
            template: __webpack_require__(/*! ./asset-details.component.html */ "./src/app/Components/partials/asset-details/asset-details.component.html"),
            styles: [__webpack_require__(/*! ./asset-details.component.css */ "./src/app/Components/partials/asset-details/asset-details.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_asset_service__WEBPACK_IMPORTED_MODULE_2__["AssetService"]])
    ], AssetDetailsComponent);
    return AssetDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Components/partials/cost-center-details/cost-center-details.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/Components/partials/cost-center-details/cost-center-details.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: visible\" *ngIf=\"has_details\">\n    <button [class]=\"'btn btn-link collapsed-toggle details-toggle-'+master_raw_id\" (click)=\"toggleDetails()\"><i class=\"fa fa-angle-down\"></i></button>\n\n    <mat-tab-group [id]=\"'tab-details-'+master_raw_id\" class=\"invisible details\" [selectedIndex]=\"0\" dynamicHeight>\n        <mat-tab label=\"Cost Center Ratio\" *ngIf=\"! is_comm\">\n            <div>\n                <div class=\"text-right\">\n                    <!--<a href=\"#\"  (click)=\"massDelete('ratio')\" class=\"btn btn-danger btn-sm mg-r-10\" >{{ \"globals.mass\" | translate }}</a>-->\n                </div>\n                <ag-grid-angular\n                        style=\"overflow:visible;width:100%\"\n                        [id]=\"'details-'+master_raw_id\"\n                        class=\"ag-theme-fresh details-ag-grid\"\n                        [rowData]=\"ratioRowData\"\n                        [columnDefs]=\"ratioColumnDefs\"\n                        domLayout='autoHeight'\n                        [frameworkComponents]=\"frameworkComponents\"\n                        rowSelection=\"multiple\"\n                        [rowClassRules]=\"rowClassRules\"\n                        (firstDataRendered)=\"onFirstDataRendered($event)\"\n                        (gridSizeChanged)=\"onFirstDataRendered($event)\"\n                        (gridReady)=\"onRatioGridReady($event)\">\n                </ag-grid-angular>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"Taxes\" *ngIf=\"is_comm\">\n            <div>\n                <div class=\"text-right\">\n                    <a href=\"#\" (click)=\"massDelete('tax')\" class=\"btn btn-danger btn-sm mg-r-10\" >Mass Delete</a>\n                </div>\n                <ag-grid-angular\n                        style=\"overflow:visible;width:100%\"\n                        [id]=\"'details-'+master_raw_id\"\n                        class=\"ag-theme-fresh details-ag-grid\"\n                        [rowData]=\"taxesRowData\"\n                        [frameworkComponents]=\"frameworkComponents\"\n                        [columnDefs]=\"taxesColumnDefs\"\n                        domLayout='autoHeight'\n                        rowSelection=\"multiple\"\n                        [rowClassRules]=\"rowClassRules\"\n                        (firstDataRendered)=\"onFirstDataRendered($event)\"\n                        (gridSizeChanged)=\"onFirstDataRendered($event)\"\n                        (gridReady)=\"onTaxGridReady($event)\">\n                </ag-grid-angular>\n            </div>\n        </mat-tab>\n        <!--<mat-tab label=\"Commercial Conditions\">-->\n            <!--<div>-->\n                <!--<div class=\"text-right\">-->\n                    <!--<a href=\"#\" (click)=\"massDelete('com')\" class=\"btn btn-danger btn-sm mg-r-10\" >Mass Delete</a>-->\n                <!--</div>-->\n                <!--<ag-grid-angular-->\n                        <!--style=\"overflow:visible;width:100%\"-->\n                        <!--[id]=\"'details-'+master_raw_id\"-->\n                        <!--class=\"ag-theme-fresh details-ag-grid\"-->\n                        <!--[rowData]=\"comsRowData\"-->\n                        <!--[columnDefs]=\"comsColumnDefs\"-->\n                        <!--[frameworkComponents]=\"frameworkComponents\"-->\n                        <!--domLayout='autoHeight'-->\n                        <!--[rowClassRules]=\"rowClassRules\"-->\n                        <!--(firstDataRendered)=\"onFirstDataRendered($event)\"-->\n                        <!--(gridSizeChanged)=\"onFirstDataRendered($event)\"-->\n                        <!--(gridReady)=\"onComGridReady($event)\"-->\n                        <!--rowSelection=\"multiple\">-->\n                <!--</ag-grid-angular>-->\n            <!--</div>-->\n        <!--</mat-tab>-->\n    </mat-tab-group>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/partials/cost-center-details/cost-center-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/Components/partials/cost-center-details/cost-center-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DetailsFormatterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsFormatterComponent", function() { return DetailsFormatterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Services_cost_centers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/cost-centers.service */ "./src/app/Services/cost-centers.service.ts");
/* harmony import */ var _action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsFormatterComponent = /** @class */ (function () {
    function DetailsFormatterComponent(costCenterApi) {
        this.costCenterApi = costCenterApi;
        this.has_details = true;
        this.is_comm = true;
        this.master_raw_id = null;
        this.cost_center_id = null;
        this.node = null;
        this.ratioColumnDefs = [];
        this.ratioRowData = [];
        this.taxesColumnDefs = [];
        this.taxesRowData = [{ id: 0, name: "0", tax_pct: '0', check: 'Add new ' }];
        this.comsColumnDefs = [];
        this.comsRowData = [{ id: 0, name: "0", day_rec_qt: '0', check: 'Add new ' }];
        this.ratio_cost_center_options = {};
        this.frameworkComponents = {
            actionsFormatterComponent: _action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_3__["ActionsFormatterComponent"],
        };
    }
    DetailsFormatterComponent_1 = DetailsFormatterComponent;
    DetailsFormatterComponent.prototype.onRatioGridReady = function (params) {
        this.ratioGridApi = params.api;
        this.ratioGridColumnApi = params.columnApi;
    };
    DetailsFormatterComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
    };
    DetailsFormatterComponent.prototype.onTaxGridReady = function (params) {
        this.taxGridApi = params.api;
        this.taxGridColumnApi = params.columnApi;
    };
    DetailsFormatterComponent.prototype.onComGridReady = function (params) {
        this.comGridApi = params.api;
        this.comGridColumnApi = params.columnApi;
    };
    DetailsFormatterComponent.extractValues = function (mappings) {
        return Object.keys(mappings);
    };
    DetailsFormatterComponent.lookupValue = function (mappings, key) {
        var r = mappings[key];
        if (!r) {
            r = mappings["'" + key + "'"];
        }
        if (r.constructor === Array)
            r = r[0];
        return r;
    };
    DetailsFormatterComponent.lookupKey = function (mappings, name) {
        for (var key in mappings) {
            if (mappings.hasOwnProperty(key)) {
                if (name === mappings[key]) {
                    return key;
                }
            }
        }
    };
    DetailsFormatterComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            var w = 8 / 9 * (parseInt(jquery__WEBPACK_IMPORTED_MODULE_1__(document).innerWidth()) - parseInt(jquery__WEBPACK_IMPORTED_MODULE_1__('.br-sideleft').width()) - 300);
            jquery__WEBPACK_IMPORTED_MODULE_1__('mat-tab-group').width(w);
        });
        this.rowClassRules = {
            "has-error": function (params) {
                var error = params.data.error;
                return error == 1;
            },
        };
    };
    DetailsFormatterComponent.prototype.agInit = function (params) {
        this.gridApi = params.value.gridApi;
        this.gridColumnApi = params.value.gridColumnApi;
        this.master_raw_id = params.value.row_id;
        this.cost_center_id = params.value.id;
        var type = params.value.type;
        if (type != 1 && type != 3) {
            this.has_details = false;
        }
        if (type != 3) {
            this.is_comm = false;
        }
    };
    DetailsFormatterComponent.prototype.toggleDetails = function () {
        var _this = this;
        var toggle = jquery__WEBPACK_IMPORTED_MODULE_1__('.details-toggle-' + this.master_raw_id);
        var angle = toggle.find('i');
        var t = jquery__WEBPACK_IMPORTED_MODULE_1__('#tab-details-' + this.master_raw_id);
        var bar = t.find('.mat-ink-bar');
        if (toggle.hasClass('collapsed-toggle')) {
            if (this.ratioRowData.length == 0 && this.taxesRowData.length == 1 && this.comsRowData.length == 1) {
                this.node = this.gridApi.getRowNode(this.master_raw_id);
                this.costCenterSubs = this.costCenterApi.getCostCenterRatio(this.cost_center_id).subscribe(function (res) {
                    ///////////////////////////////////////
                    var c = _this;
                    _this.ratio_cost_center_options = res['cost_centers_options'];
                    _this.taxes_cost_center_options = res['taxes_options'];
                    _this.ratioColumnDefs = [
                        // {headerName: '', field: 'check', width: 70, checkboxSelection: function (params) {return (params.node.data.check != 'Add New') ;}},
                        { headerName: 'Cost Center Name', field: 'name', editable: true, suppressSorting: true, cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: DetailsFormatterComponent_1.extractValues(c.ratio_cost_center_options)
                            },
                            valueFormatter: function (params) {
                                return DetailsFormatterComponent_1.lookupValue(c.ratio_cost_center_options, params.value);
                            },
                            valueParser: function (params) {
                                return DetailsFormatterComponent_1.lookupKey(c.ratio_cost_center_options, params.newValue);
                            }
                        },
                        { headerName: 'Rating %', field: 'rating_pct', editable: true, width: 70, valueSetter: function (params) {
                                // Value is legit - set it and signal the value has been changed/set
                                if (params.newValue >= 0) {
                                    params.data[params.colDef.field] = params.newValue;
                                    return true;
                                }
                                // Illegal value - signal no change
                                return false;
                            } },
                        { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
                    ];
                    var exists = res['ratio'].map(function (j) { return parseInt(j.name); });
                    for (var i = 0; i < Object.keys(_this.ratio_cost_center_options).length; i++) {
                        var id = parseInt(Object.keys(_this.ratio_cost_center_options)[i].replace(/'/g, ''));
                        if (id != 0 && !exists.includes(id)) {
                            _this.ratioRowData.push({ id: 0, name: id, rating_pct: '0', type: _this.ratio_cost_center_options[id][1], abs_order: _this.ratio_cost_center_options[id][2], check: "Add New" });
                        }
                    }
                    _this.ratioRowData = _this.ratioRowData.concat(res['ratio']);
                    _this.ratioRowData.sort(function (a, b) { return a.type - b.type; });
                    _this.ratioRowData.sort(function (a, b) { return (a.type == b.type) ? a.abs_order - b.abs_order : a.type - b.type; });
                    for (var i = 0; i < _this.ratioRowData.length; i++) {
                        _this.ratioRowData[i]['actions'] = {
                            api: _this.costCenterApi,
                            id: _this.ratioRowData[i].name,
                            delete: [false, _this.deleteRatio],
                            edit: [false, ''],
                            save: [true, _this.save],
                            type: 'ratio',
                            self: _this
                        };
                    }
                    //////////////////////////////////////
                    _this.taxesColumnDefs = [
                        { headerName: '', field: 'check', width: 70, checkboxSelection: function (params) { return (params.node.id != 0); } },
                        { headerName: 'Tax', field: 'name', editable: true, cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: DetailsFormatterComponent_1.extractValues(c.taxes_cost_center_options)
                            },
                            valueFormatter: function (params) {
                                return DetailsFormatterComponent_1.lookupValue(c.taxes_cost_center_options, params.value);
                            },
                            valueParser: function (params) {
                                return DetailsFormatterComponent_1.lookupKey(c.taxes_cost_center_options, params.newValue);
                            }
                        },
                        { headerName: 'PCT', field: 'tax_pct', editable: true, width: 70, valueSetter: function (params) {
                                // Value is legit - set it and signal the value has been changed/set
                                if (params.newValue >= 0) {
                                    params.data[params.colDef.field] = params.newValue;
                                    return true;
                                }
                                // Illegal value - signal no change
                                return false;
                            } },
                        { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
                    ];
                    _this.taxesRowData = _this.taxesRowData.concat(res['taxes']);
                    for (var i = 0; i < _this.taxesRowData.length; i++) {
                        _this.taxesRowData[i]['actions'] = {
                            api: _this.costCenterApi,
                            id: _this.taxesRowData[i].id,
                            delete: [(i != 0), _this.deleteRatio],
                            edit: [false, ''],
                            save: [true, _this.save],
                            type: 'tax',
                            self: _this
                        };
                    }
                    //////////////////////////////////////
                    _this.comsColumnDefs = [
                        { headerName: '', field: 'check', width: 70, checkboxSelection: function (params) { return (params.node.id != 0); } },
                        { headerName: 'Com', field: 'name', editable: true, cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: DetailsFormatterComponent_1.extractValues(c.ratio_cost_center_options)
                            },
                            valueFormatter: function (params) {
                                return DetailsFormatterComponent_1.lookupValue(c.ratio_cost_center_options, params.value);
                            },
                            valueParser: function (params) {
                                return DetailsFormatterComponent_1.lookupKey(c.ratio_cost_center_options, params.newValue);
                            }
                        },
                        { headerName: 'PCT', field: 'day_rec_qt', editable: true, width: 70, valueSetter: function (params) {
                                // Value is legit - set it and signal the value has been changed/set
                                if (params.newValue >= 0) {
                                    params.data[params.colDef.field] = params.newValue;
                                    return true;
                                }
                                // Illegal value - signal no change
                                return false;
                            } },
                        { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
                    ];
                    _this.comsRowData = _this.comsRowData.concat(res['coms']);
                    for (var i = 0; i < _this.comsRowData.length; i++) {
                        _this.comsRowData[i]['actions'] = {
                            api: _this.costCenterApi,
                            id: _this.comsRowData[i].id,
                            delete: [(i != 0), _this.deleteRatio],
                            edit: [false, ''],
                            save: [true, _this.save],
                            type: 'com',
                            self: _this
                        };
                    }
                    //////////////////////////////////////
                    toggle.removeClass('collapsed-toggle');
                    toggle.addClass('expanded-toggle');
                    angle.removeClass('fa-angle-down');
                    angle.addClass('fa-angle-up');
                    bar.css('display', 'block');
                    t.removeClass('invisible');
                    _this.resetHeight();
                });
            }
            else {
                toggle.removeClass('collapsed-toggle');
                toggle.addClass('expanded-toggle');
                angle.removeClass('fa-angle-down');
                angle.addClass('fa-angle-up');
                bar.css('display', 'block');
                t.removeClass('invisible');
                this.resetHeight();
            }
        }
        else if (toggle.hasClass('expanded-toggle')) {
            this.node.setRowHeight(50);
            this.gridApi.onRowHeightChanged();
            toggle.removeClass('expanded-toggle');
            toggle.addClass('collapsed-toggle');
            angle.removeClass('fa-angle-up');
            angle.addClass('fa-angle-down');
            t.addClass('invisible');
            bar.css('display', 'none');
        }
    };
    DetailsFormatterComponent.prototype.deleteRatio = function (id, type, self) {
        if (confirm("Are You Sure")) {
            self.costCenterSubs = self.costCenterApi.deleteCostCenterRatio(type, self.cost_center_id, id, {}).subscribe(function (res) {
                if (res == 1) {
                    if (type == 'ratio') {
                        var grid = self.ratioGridApi;
                        self.ratioRowData = self.ratioRowData.filter(function (row) { return row.id != id; });
                        grid.setRowData(self.ratioRowData);
                    }
                    else if (type == 'tax') {
                        var grid = self.taxGridApi;
                        self.taxesRowData = self.taxesRowData.filter(function (row) { return row.id != id; });
                        grid.setRowData(self.taxesRowData);
                    }
                    else if (type == 'com') {
                        var grid = self.comGridApi;
                        self.comsRowData = self.comsRowData.filter(function (row) { return row.id != id; });
                        grid.setRowData(self.comsRowData);
                    }
                    self.resetHeight();
                }
            }, console.error);
            return false;
        }
    };
    DetailsFormatterComponent.prototype.massDelete = function (type) {
        var _this = this;
        if (type == 'ratio') {
            var grid_1 = this.ratioGridApi;
            var nodes = grid_1.getSelectedNodes();
            if (nodes.length == 0)
                alert("No Rows Selected");
            else {
                var ids_1 = nodes.map(function (row) { return row.data.id; });
                var parameter = { ids: ids_1 };
                if (confirm("Are You Sure")) {
                    this.costCenterSubs = this.costCenterApi.deleteCostCenterRatio(type, this.cost_center_id, 'mass', parameter).subscribe(function (res) {
                        if (res == 1) {
                            _this.ratioRowData = _this.ratioRowData.filter(function (row) { return !(ids_1.includes(row.id)); });
                            grid_1.setRowData(_this.ratioRowData);
                            _this.resetHeight();
                        }
                    }, console.error);
                    return false;
                }
            }
        }
        else if (type == 'tax') {
            var grid_2 = this.taxGridApi;
            var nodes = grid_2.getSelectedNodes();
            if (nodes.length == 0)
                alert("No Rows Selected");
            else {
                var ids_2 = nodes.map(function (row) { return row.data.id; });
                var parameter = { ids: ids_2 };
                if (confirm("Are You Sure")) {
                    this.costCenterSubs = this.costCenterApi.deleteCostCenterRatio(type, this.cost_center_id, 'mass', parameter).subscribe(function (res) {
                        if (res == 1) {
                            _this.taxesRowData = _this.taxesRowData.filter(function (row) { return !(ids_2.includes(row.id)); });
                            grid_2.setRowData(_this.taxesRowData);
                            _this.resetHeight();
                        }
                    }, console.error);
                    return false;
                }
            }
        }
        else if (type == 'com') {
            var grid_3 = this.comGridApi;
            var nodes = grid_3.getSelectedNodes();
            if (nodes.length == 0)
                alert("No Rows Selected");
            else {
                var ids_3 = nodes.map(function (row) { return row.data.id; });
                var parameter = { ids: ids_3 };
                if (confirm("Are You Sure")) {
                    this.costCenterSubs = this.costCenterApi.deleteCostCenterRatio(type, this.cost_center_id, 'mass', parameter).subscribe(function (res) {
                        if (res == 1) {
                            _this.comsRowData = _this.comsRowData.filter(function (row) { return !(ids_3.includes(row.id)); });
                            grid_3.setRowData(_this.comsRowData);
                            _this.resetHeight();
                        }
                    }, console.error);
                    return false;
                }
            }
        }
    };
    DetailsFormatterComponent.prototype.save = function (id, type, self) {
        var parameters = {};
        var name = 0;
        if (type == 'ratio') {
            var row = self.ratioRowData.filter(function (row) { return row.name == id; })[0];
            id = row.id;
            name = row.name;
            var ratings = self.ratioRowData.map(function (row) { return row.rating_pct; });
            var sum = ratings.reduce(function (a, b) { return parseFloat(a) + parseFloat(b); }, 0);
            if (sum > 100) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Cannot save, Ratings sum cannot exceed 100%!',
                });
                row.error = 1;
                self.ratioGridApi.setRowData(self.ratioRowData);
                return false;
            }
            else {
                row.error = 0;
                self.ratioGridApi.setRowData(self.ratioRowData);
            }
            parameters = { 'costcenter_part_id': row.name, 'rating_pct': row.rating_pct, 'name': row.name };
        }
        else if (type == 'tax') {
            var row = self.taxesRowData.filter(function (row) { return row.id == id; })[0];
            parameters = { 'tax_id': row.name, 'tax_pct': row.tax_pct, 'name': row.name };
        }
        else if (type == 'com') {
            var row = self.comsRowData.filter(function (row) { return row.id == id; })[0];
            parameters = { 'costcenter_com_id': row.name, 'day_rec_qt': row.day_rec_qt, 'name': row.name };
        }
        if (id == 0) {
            self.costCenterSubs = self.costCenterApi.addCostCenterRatio(type, self.cost_center_id, parameters).subscribe(function (res) {
                if (res > 0) {
                    parameters['id'] = res;
                    parameters['actions'] = {
                        api: self.costCenterApi,
                        id: res,
                        delete: [true, self.deleteRatio],
                        edit: [false, ''],
                        save: [true, self.save],
                        type: 'ratio',
                        self: self
                    };
                    if (type == 'ratio') {
                        var row = self.ratioRowData.filter(function (row) { return row.name == name; })[0];
                        row.id = res;
                    }
                    else if (type == 'tax') {
                        var grid = self.taxGridApi;
                        self.taxesRowData.push(parameters);
                        grid.setRowData(self.taxesRowData);
                    }
                    else if (type == 'com') {
                        var grid = self.comGridApi;
                        self.comsRowData.push(parameters);
                        grid.setRowData(self.comsRowData);
                    }
                    return false;
                }
            }, console.error);
        }
        else {
            self.costCenterSubs = self.costCenterApi.editCostCenterRatio(type, self.cost_center_id, id, parameters).subscribe(function (res) {
                if (res == 1) {
                    return false;
                }
            }, console.error);
        }
        self.resetHeight();
        return false;
    };
    DetailsFormatterComponent.prototype.resetHeight = function () {
        var r = Math.max(this.ratioRowData.length, this.comsRowData.length, this.taxesRowData.length);
        this.node.setRowHeight((r * 25) + 270);
        this.gridApi.onRowHeightChanged();
    };
    var DetailsFormatterComponent_1;
    DetailsFormatterComponent = DetailsFormatterComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cost-center-details',
            template: __webpack_require__(/*! ./cost-center-details.component.html */ "./src/app/Components/partials/cost-center-details/cost-center-details.component.html")
        }),
        __metadata("design:paramtypes", [_Services_cost_centers_service__WEBPACK_IMPORTED_MODULE_2__["CostCentersService"]])
    ], DetailsFormatterComponent);
    return DetailsFormatterComponent;
}());



/***/ }),

/***/ "./src/app/Components/partials/employee-details/employee-details.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/partials/employee-details/employee-details.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/partials/employee-details/employee-details.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/Components/partials/employee-details/employee-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: visible\">\n    <button [class]=\"'btn btn-link collapsed-toggle details-toggle-'+master_raw_id\" (click)=\"toggleDetails()\"><i class=\"fa fa-angle-down\"></i></button>\n    <div [id]=\"'tab-details-'+master_raw_id\" class=\"invisible details d-grid\">\n        <!--<div class=\"text-right\" style=\"overflow:visible;width:100%;z-index:10000\">-->\n            <!--<a href=\"#\"  (click)=\"massDelete()\" class=\"btn btn-danger btn-sm mg-r-10\" >{{ \"globals.mass\" | translate }}</a>-->\n        <!--</div>-->\n        <ag-grid-angular\n                style=\"overflow:visible;width:100%;z-index:10000\"\n                [id]=\"'details-'+master_raw_id\"\n                class=\"ag-theme-fresh details-ag-grid\"\n                [rowData]=\"rowData\"\n                [columnDefs]=\"columnDefs\"\n                domLayout='autoHeight'\n                [frameworkComponents]=\"frameworkComponents\"\n                rowSelection=\"multiple\"\n                (firstDataRendered)=\"onFirstDataRendered($event)\"\n                (gridSizeChanged)=\"onFirstDataRendered($event)\"\n                (gridReady)=\"onGridReady($event)\">\n        </ag-grid-angular>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/partials/employee-details/employee-details.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/Components/partials/employee-details/employee-details.component.ts ***!
  \************************************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/employee.service */ "./src/app/Services/employee.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeDetailsComponent = /** @class */ (function () {
    function EmployeeDetailsComponent(employeesApi) {
        this.employeesApi = employeesApi;
        this.master_raw_id = null;
        this.node = null;
        this.employee_id = null;
        this.cost_center_options = {};
        this.columnDefs = [];
        this.rowData = [];
        this.frameworkComponents = {
            actionsFormatterComponent: _action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
        };
    }
    EmployeeDetailsComponent_1 = EmployeeDetailsComponent;
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            var w = 8 / 9 * (parseInt(jquery__WEBPACK_IMPORTED_MODULE_3__(document).innerWidth()) - parseInt(jquery__WEBPACK_IMPORTED_MODULE_3__('.br-sideleft').width()) - 300);
            jquery__WEBPACK_IMPORTED_MODULE_3__('.details').width(w);
        });
    };
    EmployeeDetailsComponent.prototype.onGridReady = function (params) {
        this.employeeGridApi = params.api;
        this.employeeGridColumnApi = params.columnApi;
    };
    EmployeeDetailsComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
    };
    EmployeeDetailsComponent.prototype.agInit = function (params) {
        this.gridApi = params.value.gridApi;
        this.gridColumnApi = params.value.gridColumnApi;
        this.master_raw_id = params.value.row_id;
        this.employee_id = params.value.id;
    };
    EmployeeDetailsComponent.extractValues = function (mappings) {
        return Object.keys(mappings);
    };
    EmployeeDetailsComponent.lookupValue = function (mappings, key) {
        return mappings[key];
    };
    EmployeeDetailsComponent.lookupKey = function (mappings, name) {
        for (var key in mappings) {
            if (mappings.hasOwnProperty(key)) {
                if (name === mappings[key]) {
                    return key;
                }
            }
        }
    };
    EmployeeDetailsComponent.prototype.toggleDetails = function () {
        var _this = this;
        var toggle = jquery__WEBPACK_IMPORTED_MODULE_3__('.details-toggle-' + this.master_raw_id);
        var angle = toggle.find('i');
        var t = jquery__WEBPACK_IMPORTED_MODULE_3__('#tab-details-' + this.master_raw_id);
        if (toggle.hasClass('collapsed-toggle')) {
            if (this.rowData.length == 0) {
                this.node = this.gridApi.getRowNode(this.master_raw_id);
                this.employeesSubs = this.employeesApi.getEmployeeCostCenters(this.employee_id).subscribe(function (res) {
                    ///////////////////////////////////////
                    _this.cost_center_options = res['cost_center_options'];
                    var c = _this;
                    _this.columnDefs = [
                        // {
                        //     headerName: '', field: 'check',width: 70, checkboxSelection: function (params) {
                        //         return (params.node.id != 0);
                        //     }
                        // },
                        {
                            headerName: 'Cost Center Name',
                            field: 'name',
                            editable: true,
                            cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: EmployeeDetailsComponent_1.extractValues(c.cost_center_options)
                            },
                            valueFormatter: function (params) {
                                return EmployeeDetailsComponent_1.lookupValue(c.cost_center_options, params.value);
                            },
                            valueParser: function (params) {
                                return EmployeeDetailsComponent_1.lookupKey(c.cost_center_options, params.newValue);
                            }
                        },
                        { headerName: 'Rating %', field: 'rating_pct', width: 70, editable: true, valueSetter: function (params) {
                                // Value is legit - set it and signal the value has been changed/set
                                if (params.newValue >= 0) {
                                    params.data[params.colDef.field] = params.newValue;
                                    return true;
                                }
                                // Illegal value - signal no change
                                return false;
                            } },
                        { headerName: 'Direct Labor %', field: 'direct_labor_pct', width: 100, editable: true, valueSetter: function (params) {
                                // Value is legit - set it and signal the value has been changed/set
                                if (params.newValue >= 0) {
                                    params.data[params.colDef.field] = params.newValue;
                                    return true;
                                }
                                // Illegal value - signal no change
                                return false;
                            } },
                        { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
                    ];
                    var exists = res['cost_centers'].map(function (j) { return parseInt(j.name); });
                    for (var i = 0; i < Object.keys(_this.cost_center_options).length; i++) {
                        var id = parseInt(Object.keys(_this.cost_center_options)[i].replace(/'/g, ''));
                        if (id != 0 && !exists.includes(id)) {
                            _this.rowData.push({ id: 0, name: id, rating_pct: '0', direct_labor_pct: 0, check: "Add New" });
                        }
                    }
                    // {id: 0, rating_pct: '0', check: 'Add new ', name: 0, direct_labor_pct:0}
                    _this.rowData = _this.rowData.concat(res['cost_centers']);
                    for (var i = 0; i < _this.rowData.length; i++) {
                        _this.rowData[i]['actions'] = {
                            api: _this.employeesApi,
                            id: _this.rowData[i].name,
                            delete: [false, _this.deleteCostCenter],
                            edit: [false, ''],
                            save: [true, _this.save],
                            type: 'employee_cost_center',
                            self: _this
                        };
                    }
                    toggle.removeClass('collapsed-toggle');
                    toggle.addClass('expanded-toggle');
                    angle.removeClass('fa-angle-down');
                    angle.addClass('fa-angle-up');
                    t.removeClass('invisible');
                    _this.resetHeight();
                });
            }
            toggle.removeClass('collapsed-toggle');
            toggle.addClass('expanded-toggle');
            angle.removeClass('fa-angle-down');
            angle.addClass('fa-angle-up');
            t.removeClass('invisible');
            this.resetHeight();
        }
        else {
            this.node.setRowHeight(50);
            this.gridApi.onRowHeightChanged();
            toggle.removeClass('expanded-toggle');
            toggle.addClass('collapsed-toggle');
            angle.removeClass('fa-angle-up');
            angle.addClass('fa-angle-down');
            t.addClass('invisible');
        }
    };
    EmployeeDetailsComponent.prototype.massDelete = function () {
        var _this = this;
        var nodes = this.employeeGridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids_1 = nodes.map(function (row) { return row.data.id; });
            var parameter = { ids: ids_1 };
            if (confirm("Are You Sure")) {
                this.employeesSubs = this.employeesApi.deleteEmployeeCostCenter(this.employee_id, parameter, 'mass').subscribe(function (res) {
                    if (res == 1) {
                        _this.rowData = _this.rowData.filter(function (row) { return !(ids_1.includes(row.id)); });
                        _this.employeeGridApi.setRowData(_this.rowData);
                        _this.resetHeight();
                    }
                }, console.error);
                return false;
            }
        }
        return false;
    };
    EmployeeDetailsComponent.prototype.deleteCostCenter = function (id, type, self) {
        if (confirm("Are You Sure")) {
            self.employeesSubs = self.employeesApi.deleteEmployeeCostCenter(self.employee_id, {}, id).subscribe(function (res) {
                if (res == 1) {
                    self.rowData = self.rowData.filter(function (row) { return row.id != id; });
                    self.employeeGridApi.setRowData(self.rowData);
                    self.resetHeight();
                }
            }, console.error);
            return false;
        }
    };
    EmployeeDetailsComponent.prototype.save = function (id, type, self) {
        var name = 0;
        var row = self.rowData.filter(function (row) { return row.name == id; })[0];
        id = row.id;
        name = row.name;
        var parameters = { 'costcenter_id': row.name, 'rating_pct': row.rating_pct, 'name': row.name, 'direct_labor_pct': row.direct_labor_pct };
        if (id == 0) {
            self.employeesSubs = self.employeesApi.addEmployeeCostCenter(self.employee_id, parameters).subscribe(function (res) {
                if (res > 0) {
                    parameters['id'] = res;
                    parameters['actions'] = {
                        api: self.employeesApi,
                        id: res,
                        delete: [true, self.deleteRatio],
                        edit: [false, ''],
                        save: [true, self.save],
                        type: 'ratio',
                        self: self
                    };
                    var row_1 = self.rowData.filter(function (row) { return row.name == name; })[0];
                    row_1.id = res;
                    return false;
                }
            }, console.error);
        }
        else {
            self.employeesSubs = self.employeesApi.editEmployeeCostCenter(self.employee_id, parameters, id).subscribe(function (res) {
                if (res == 1) {
                    return false;
                }
            }, console.error);
        }
        return false;
    };
    EmployeeDetailsComponent.prototype.resetHeight = function () {
        var r = this.rowData.length;
        this.node.setRowHeight((r * 25) + 200);
        this.gridApi.onRowHeightChanged();
    };
    var EmployeeDetailsComponent_1;
    EmployeeDetailsComponent = EmployeeDetailsComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-details',
            template: __webpack_require__(/*! ./employee-details.component.html */ "./src/app/Components/partials/employee-details/employee-details.component.html"),
            styles: [__webpack_require__(/*! ./employee-details.component.css */ "./src/app/Components/partials/employee-details/employee-details.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]])
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Components/partials/product-classif-details/product-classif-details.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/Components/partials/product-classif-details/product-classif-details.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/partials/product-classif-details/product-classif-details.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/Components/partials/product-classif-details/product-classif-details.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: visible\">\n    <button [class]=\"'btn btn-link collapsed-toggle details-toggle-'+master_raw_id\" (click)=\"toggleDetails()\"><i class=\"fa fa-angle-down\"></i></button>\n    <mat-tab-group [id]=\"'tab-details-'+master_raw_id\" class=\"invisible details\" [selectedIndex]=\"0\" dynamicHeight>\n        <mat-tab label=\"Product Classif Subs\">\n            <div>\n                <div class=\"text-right\">\n                    <a href=\"#\"  (click)=\"massDeleteSubs('subs')\" class=\"btn btn-danger btn-sm mg-r-10\" >{{ \"globals.mass\" | translate }}</a>\n                </div>\n                <ag-grid-angular\n                        style=\"overflow:visible;width:100%\"\n                        [id]=\"'details-'+master_raw_id\"\n                        class=\"ag-theme-fresh details-ag-grid\"\n                        [rowData]=\"subsRowData\"\n                        [columnDefs]=\"subsColumnDefs\"\n                        domLayout='autoHeight'\n                        [frameworkComponents]=\"frameworkComponents\"\n                        rowSelection=\"multiple\"\n                        (firstDataRendered)=\"onFirstDataRendered($event)\"\n                        (gridSizeChanged)=\"onFirstDataRendered($event)\"\n                        (gridReady)=\"onSubsGridReady($event)\">\n                </ag-grid-angular>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"Taxes\">\n            <div>\n                <div class=\"text-right\">\n                    <a href=\"#\" (click)=\"massDeleteSubs('taxes')\" class=\"btn btn-danger btn-sm mg-r-10\" >{{ \"globals.mass\" | translate }}</a>\n                </div>\n                <ag-grid-angular\n                        style=\"overflow:visible;width:100%\"\n                        [id]=\"'details-'+master_raw_id\"\n                        class=\"ag-theme-fresh details-ag-grid\"\n                        [rowData]=\"taxesRowData\"\n                        [frameworkComponents]=\"frameworkComponents\"\n                        [columnDefs]=\"taxesColumnDefs\"\n                        domLayout='autoHeight'\n                        rowSelection=\"multiple\"\n                        (firstDataRendered)=\"onFirstDataRendered($event)\"\n                        (gridSizeChanged)=\"onFirstDataRendered($event)\"\n                        (gridReady)=\"onTaxGridReady($event)\">\n                </ag-grid-angular>\n            </div>\n        </mat-tab>\n    </mat-tab-group>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/partials/product-classif-details/product-classif-details.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/Components/partials/product-classif-details/product-classif-details.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ProductClassifDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductClassifDetailsComponent", function() { return ProductClassifDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Services_product_classif_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/product-classif.service */ "./src/app/Services/product-classif.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductClassifDetailsComponent = /** @class */ (function () {
    function ProductClassifDetailsComponent(productClassifsApi) {
        this.productClassifsApi = productClassifsApi;
        this.node = null;
        this.master_raw_id = null;
        this.product_id = null;
        this.taxes_options = {};
        this.subs_options = {};
        this.subsColumnDefs = [];
        this.taxesColumnDefs = [];
        this.subsRowData = [{ id: 0, name: "0", check: 'Add new ' }];
        this.taxesRowData = [{ id: 0, purchase_pct: '0', check: 'Add new ', name: '0', sale_pct: '0' }];
        this.frameworkComponents = {
            actionsFormatterComponent: _action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
        };
    }
    ProductClassifDetailsComponent_1 = ProductClassifDetailsComponent;
    ProductClassifDetailsComponent.prototype.onTaxGridReady = function (params) {
        this.taxGridApi = params.api;
        this.taxGridColumnApi = params.columnApi;
    };
    ProductClassifDetailsComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
    };
    ProductClassifDetailsComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            var w = 8 / 9 * (parseInt(jquery__WEBPACK_IMPORTED_MODULE_2__(document).innerWidth()) - parseInt(jquery__WEBPACK_IMPORTED_MODULE_2__('.br-sideleft').width()) - 300);
            jquery__WEBPACK_IMPORTED_MODULE_2__('.details').width(w);
        });
    };
    ProductClassifDetailsComponent.prototype.onSubsGridReady = function (params) {
        this.subGridApi = params.api;
        this.subGridColumnApi = params.columnApi;
    };
    ProductClassifDetailsComponent.prototype.agInit = function (params) {
        this.gridApi = params.value.gridApi;
        this.gridColumnApi = params.value.gridColumnApi;
        this.master_raw_id = params.value.row_id;
        this.product_id = params.value.id;
    };
    ProductClassifDetailsComponent.extractValues = function (mappings) {
        return Object.keys(mappings);
    };
    ProductClassifDetailsComponent.lookupValue = function (mappings, key) {
        return mappings[key];
    };
    ProductClassifDetailsComponent.lookupKey = function (mappings, name) {
        for (var key in mappings) {
            if (mappings.hasOwnProperty(key)) {
                if (name === mappings[key]) {
                    return key;
                }
            }
        }
    };
    ProductClassifDetailsComponent.prototype.toggleDetails = function () {
        var _this = this;
        var toggle = jquery__WEBPACK_IMPORTED_MODULE_2__('.details-toggle-' + this.master_raw_id);
        var angle = toggle.find('i');
        var t = jquery__WEBPACK_IMPORTED_MODULE_2__('#tab-details-' + this.master_raw_id);
        var bar = t.find('.mat-ink-bar');
        if (toggle.hasClass('collapsed-toggle')) {
            if (this.subsRowData.length == 1) {
                this.node = this.gridApi.getRowNode(this.master_raw_id);
                this.productClassifsSubs = this.productClassifsApi.getProductSubs(this.product_id).subscribe(function (res) {
                    ///////////////////////////////////////
                    _this.subs_options = res['product_classifs_data'];
                    var c = _this;
                    _this.subsColumnDefs = [
                        {
                            headerName: '', field: 'check', width: 70, checkboxSelection: function (params) {
                                return (params.node.id != 0);
                            }
                        },
                        {
                            headerName: 'Product Classif',
                            field: 'name',
                            editable: true,
                            cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: ProductClassifDetailsComponent_1.extractValues(c.subs_options)
                            },
                            valueFormatter: function (params) {
                                return ProductClassifDetailsComponent_1.lookupValue(c.subs_options, params.value);
                            },
                            valueParser: function (params) {
                                return ProductClassifDetailsComponent_1.lookupKey(c.subs_options, params.newValue);
                            }
                        },
                        { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
                    ];
                    _this.subsRowData = _this.subsRowData.concat(res['product_classifs_subs_data']);
                    for (var i = 0; i < _this.subsRowData.length; i++) {
                        _this.subsRowData[i]['actions'] = {
                            api: _this.productClassifsApi,
                            id: _this.subsRowData[i].id,
                            delete: [(i != 0), _this.deleteProductClassifSubs],
                            edit: [false, ''],
                            save: [true, _this.save],
                            type: 'subs',
                            self: _this
                        };
                    }
                    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                    _this.productClassifsSubs = _this.productClassifsApi.getProductTaxes(_this.product_id).subscribe(function (res) {
                        _this.taxes_options = res['taxes'];
                        var c = _this;
                        _this.taxesColumnDefs = [
                            {
                                headerName: '', field: 'check', width: 70, checkboxSelection: function (params) {
                                    return (params.node.id != 0);
                                }
                            },
                            {
                                headerName: 'Tax Name',
                                field: 'name',
                                editable: true,
                                cellEditor: 'agSelectCellEditor',
                                cellEditorParams: {
                                    values: ProductClassifDetailsComponent_1.extractValues(c.taxes_options)
                                },
                                valueFormatter: function (params) {
                                    return ProductClassifDetailsComponent_1.lookupValue(c.taxes_options, params.value);
                                },
                                valueParser: function (params) {
                                    return ProductClassifDetailsComponent_1.lookupKey(c.taxes_options, params.newValue);
                                }
                            },
                            { headerName: 'On Purchase %', field: 'purchase_pct', width: 100, editable: true, valueSetter: function (params) {
                                    // Value is legit - set it and signal the value has been changed/set
                                    if (params.newValue >= 0) {
                                        params.data[params.colDef.field] = params.newValue;
                                        return true;
                                    }
                                    // Illegal value - signal no change
                                    return false;
                                } },
                            { headerName: 'On Sale %', field: 'sale_pct', width: 100, editable: true, valueSetter: function (params) {
                                    // Value is legit - set it and signal the value has been changed/set
                                    if (params.newValue >= 0) {
                                        params.data[params.colDef.field] = params.newValue;
                                        return true;
                                    }
                                    // Illegal value - signal no change
                                    return false;
                                } },
                            {
                                headerName: 'Actions',
                                field: 'actions',
                                cellRenderer: 'actionsFormatterComponent'
                            },
                        ];
                        _this.taxesRowData = _this.taxesRowData.concat(res['product_classifs']);
                        for (var i = 0; i < _this.taxesRowData.length; i++) {
                            _this.taxesRowData[i]['actions'] = {
                                api: _this.productClassifsApi,
                                id: _this.taxesRowData[i].id,
                                delete: [(i != 0), _this.deleteProductClassifSubs],
                                edit: [false, ''],
                                save: [true, _this.save],
                                type: 'taxes',
                                self: _this
                            };
                        }
                        ///////////////////////////////////////////////////////////////////////////////////////////////////
                        toggle.removeClass('collapsed-toggle');
                        toggle.addClass('expanded-toggle');
                        angle.removeClass('fa-angle-down');
                        angle.addClass('fa-angle-up');
                        t.removeClass('invisible');
                        bar.css('display', 'block');
                        _this.resetHeight();
                    });
                });
            }
            else {
                toggle.removeClass('collapsed-toggle');
                toggle.addClass('expanded-toggle');
                angle.removeClass('fa-angle-down');
                angle.addClass('fa-angle-up');
                t.removeClass('invisible');
                bar.css('display', 'block');
                this.resetHeight();
            }
        }
        else {
            this.node.setRowHeight(50);
            this.gridApi.onRowHeightChanged();
            toggle.removeClass('expanded-toggle');
            toggle.addClass('collapsed-toggle');
            angle.removeClass('fa-angle-up');
            angle.addClass('fa-angle-down');
            bar.css('display', 'none');
            t.addClass('invisible');
        }
    };
    ProductClassifDetailsComponent.prototype.massDeleteSubs = function (type) {
        var _this = this;
        if (type == 'subs') {
            var grid_1 = this.subGridApi;
            var nodes = grid_1.getSelectedNodes();
            if (nodes.length == 0)
                alert("No Rows Selected");
            else {
                var ids_1 = nodes.map(function (row) { return row.data.id; });
                var parameter = { ids: ids_1 };
                if (confirm("Are You Sure")) {
                    this.productClassifsSubs = this.productClassifsApi.deleteProductClassifSubs(type, this.product_id, parameter, 'mass').subscribe(function (res) {
                        if (res == 1) {
                            _this.subsRowData = _this.subsRowData.filter(function (row) { return !(ids_1.includes(row.id)); });
                            grid_1.setRowData(_this.subsRowData);
                            _this.resetHeight();
                        }
                    }, console.error);
                    return false;
                }
            }
        }
        else if (type == 'taxes') {
            var grid_2 = this.taxGridApi;
            var nodes = grid_2.getSelectedNodes();
            if (nodes.length == 0)
                alert("No Rows Selected");
            else {
                var ids_2 = nodes.map(function (row) { return row.data.id; });
                var parameter = { ids: ids_2 };
                if (confirm("Are You Sure")) {
                    this.productClassifsSubs = this.productClassifsApi.deleteProductClassifSubs(type, this.product_id, parameter, 'mass').subscribe(function (res) {
                        if (res == 1) {
                            _this.taxesRowData = _this.taxesRowData.filter(function (row) { return !(ids_2.includes(row.id)); });
                            grid_2.setRowData(_this.taxesRowData);
                            _this.resetHeight();
                        }
                    }, console.error);
                    return false;
                }
            }
        }
        return false;
    };
    ProductClassifDetailsComponent.prototype.deleteProductClassifSubs = function (id, type, self) {
        if (confirm("Are You Sure")) {
            self.productClassifsSubs = self.productClassifsApi.deleteProductClassifSubs(type, self.product_id, {}, id).subscribe(function (res) {
                if (res == 1) {
                    if (type == 'subs') {
                        var grid = self.subGridApi;
                        self.subsRowData = self.subsRowData.filter(function (row) { return row.id != id; });
                        grid.setRowData(self.subsRowData);
                    }
                    else if (type == 'taxes') {
                        var grid = self.taxGridApi;
                        self.taxesRowData = self.taxesRowData.filter(function (row) { return row.id != id; });
                        grid.setRowData(self.taxesRowData);
                    }
                }
                self.resetHeight();
            }, console.error);
            return false;
        }
    };
    ProductClassifDetailsComponent.prototype.save = function (id, type, self) {
        var parameters = {};
        if (type == 'subs') {
            var row = self.subsRowData.filter(function (row) { return row.id == id; })[0];
            parameters = { 'product_classification_id': row.name, 'name': row.name };
        }
        else if (type == 'taxes') {
            var row = self.taxesRowData.filter(function (row) { return row.id == id; })[0];
            parameters = { 'tax_id': row.name, 'name': row.name, 'purchase_pct': row.purchase_pct, 'sale_pct': row.sale_pct };
        }
        if (id == 0) {
            self.productClassifsSubs = self.productClassifsApi.addProductClassifSubs(type, self.product_id, parameters).subscribe(function (res) {
                if (res > 0) {
                    parameters['id'] = res;
                    parameters['actions'] = {
                        api: self.productClassifsApi,
                        id: res,
                        delete: [true, self.deleteProductClassifSubs],
                        edit: [false, ''],
                        save: [true, self.save],
                        type: type,
                        self: self
                    };
                    if (type == 'subs') {
                        var grid = self.subGridApi;
                        self.subsRowData.push(parameters);
                        grid.setRowData(self.subsRowData);
                    }
                    else if (type == 'taxes') {
                        var grid = self.subGridApi;
                        self.taxesRowData.push(parameters);
                        grid.setRowData(self.taxesRowData);
                    }
                    self.resetHeight();
                    return false;
                }
            }, console.error);
        }
        else {
            self.productClassifsSubs = self.productClassifsApi.editProductClassifSubs(type, self.product_id, parameters, id).subscribe(function (res) {
                if (res == 1) {
                    return false;
                }
            }, console.error);
        }
        return false;
    };
    ProductClassifDetailsComponent.prototype.resetHeight = function () {
        var r = Math.max(this.subsRowData.length, this.taxesRowData.length);
        this.node.setRowHeight((r * 25) + 250);
        this.gridApi.onRowHeightChanged();
    };
    var ProductClassifDetailsComponent_1;
    ProductClassifDetailsComponent = ProductClassifDetailsComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-classif-details',
            template: __webpack_require__(/*! ./product-classif-details.component.html */ "./src/app/Components/partials/product-classif-details/product-classif-details.component.html"),
            styles: [__webpack_require__(/*! ./product-classif-details.component.css */ "./src/app/Components/partials/product-classif-details/product-classif-details.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_product_classif_service__WEBPACK_IMPORTED_MODULE_3__["ProductClassifService"]])
    ], ProductClassifDetailsComponent);
    return ProductClassifDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Components/partials/product-details/product-details.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/partials/product-details/product-details.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/partials/product-details/product-details.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/Components/partials/product-details/product-details.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: visible\">\n    <button [class]=\"'btn btn-link collapsed-toggle details-toggle-'+master_raw_id\" (click)=\"toggleDetails()\"><i class=\"fa fa-angle-down\"></i></button>\n    <div [id]=\"'tab-details-'+master_raw_id\" class=\"invisible details d-grid\">\n        <div class=\"text-right\" style=\"overflow:visible;width:100%;z-index:10000\">\n            <a href=\"#\"  (click)=\"massDelete()\" class=\"btn btn-danger btn-sm mg-r-10\" >{{ \"globals.mass\" | translate }}</a>\n        </div>\n        <ag-grid-angular\n                style=\"overflow:visible;width:100%;z-index:10000\"\n                [id]=\"'details-'+master_raw_id\"\n                class=\"ag-theme-fresh details-ag-grid\"\n                [rowData]=\"rowData\"\n                [columnDefs]=\"columnDefs\"\n                domLayout='autoHeight'\n                [frameworkComponents]=\"frameworkComponents\"\n                rowSelection=\"multiple\"\n                (firstDataRendered)=\"onFirstDataRendered($event)\"\n                (gridSizeChanged)=\"onFirstDataRendered($event)\"\n                (gridReady)=\"onGridReady($event)\">\n        </ag-grid-angular>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/partials/product-details/product-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/Components/partials/product-details/product-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/product.service */ "./src/app/Services/product.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(productsApi) {
        this.productsApi = productsApi;
        this.node = null;
        this.master_raw_id = null;
        this.product_id = null;
        this.taxes_options = {};
        this.columnDefs = [];
        this.rowData = [{ id: 0, purchase_pct: '0', check: 'Add new ', name: 0, sale_pct: 0 }];
        this.frameworkComponents = {
            actionsFormatterComponent: _action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
        };
    }
    ProductDetailsComponent_1 = ProductDetailsComponent;
    ProductDetailsComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            var w = 8 / 9 * (parseInt(jquery__WEBPACK_IMPORTED_MODULE_3__(document).innerWidth()) - parseInt(jquery__WEBPACK_IMPORTED_MODULE_3__('.br-sideleft').width()) - 300);
            jquery__WEBPACK_IMPORTED_MODULE_3__('.details').width(w);
        });
    };
    ProductDetailsComponent.prototype.onGridReady = function (params) {
        this.productGridApi = params.api;
        this.productGridColumnApi = params.columnApi;
    };
    ProductDetailsComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
    };
    ProductDetailsComponent.prototype.agInit = function (params) {
        this.gridApi = params.value.gridApi;
        this.gridColumnApi = params.value.gridColumnApi;
        this.master_raw_id = params.value.row_id;
        this.product_id = params.value.id;
    };
    ProductDetailsComponent.extractValues = function (mappings) {
        return Object.keys(mappings);
    };
    ProductDetailsComponent.lookupValue = function (mappings, key) {
        return mappings[key];
    };
    ProductDetailsComponent.lookupKey = function (mappings, name) {
        for (var key in mappings) {
            if (mappings.hasOwnProperty(key)) {
                if (name === mappings[key]) {
                    return key;
                }
            }
        }
    };
    ProductDetailsComponent.prototype.toggleDetails = function () {
        var _this = this;
        var toggle = jquery__WEBPACK_IMPORTED_MODULE_3__('.details-toggle-' + this.master_raw_id);
        var angle = toggle.find('i');
        var t = jquery__WEBPACK_IMPORTED_MODULE_3__('#tab-details-' + this.master_raw_id);
        if (toggle.hasClass('collapsed-toggle')) {
            if (this.rowData.length == 1) {
                this.node = this.gridApi.getRowNode(this.master_raw_id);
                this.productsSubs = this.productsApi.getProductTaxes(this.product_id).subscribe(function (res) {
                    ///////////////////////////////////////
                    _this.taxes_options = res['taxes'];
                    var c = _this;
                    _this.columnDefs = [
                        {
                            headerName: '', field: 'check', width: 70, checkboxSelection: function (params) {
                                return (params.node.id != 0);
                            }
                        },
                        {
                            headerName: 'Tax Name',
                            field: 'name',
                            editable: true,
                            cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: ProductDetailsComponent_1.extractValues(c.taxes_options)
                            },
                            valueFormatter: function (params) {
                                return ProductDetailsComponent_1.lookupValue(c.taxes_options, params.value);
                            },
                            valueParser: function (params) {
                                return ProductDetailsComponent_1.lookupKey(c.taxes_options, params.newValue);
                            }
                        },
                        { headerName: 'On Purchase %', field: 'purchase_pct', editable: true, width: 100, valueSetter: function (params) {
                                // Value is legit - set it and signal the value has been changed/set
                                if (params.newValue >= 0) {
                                    params.data[params.colDef.field] = params.newValue;
                                    return true;
                                }
                                // Illegal value - signal no change
                                return false;
                            } },
                        { headerName: 'On Sale %', field: 'sale_pct', editable: true, width: 100, valueSetter: function (params) {
                                // Value is legit - set it and signal the value has been changed/set
                                if (params.newValue >= 0) {
                                    params.data[params.colDef.field] = params.newValue;
                                    return true;
                                }
                                // Illegal value - signal no change
                                return false;
                            } },
                        { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
                    ];
                    _this.rowData = _this.rowData.concat(res['products']);
                    for (var i = 0; i < _this.rowData.length; i++) {
                        _this.rowData[i]['actions'] = {
                            api: _this.productsApi,
                            id: _this.rowData[i].id,
                            delete: [(i != 0), _this.deleteTaxes],
                            edit: [false, ''],
                            save: [true, _this.save],
                            type: 'product_taxes',
                            self: _this
                        };
                    }
                    toggle.removeClass('collapsed-toggle');
                    toggle.addClass('expanded-toggle');
                    angle.removeClass('fa-angle-down');
                    angle.addClass('fa-angle-up');
                    t.removeClass('invisible');
                    _this.gridApi.onRowHeightChanged();
                    _this.resetHeight();
                });
            }
            else {
                toggle.removeClass('collapsed-toggle');
                toggle.addClass('expanded-toggle');
                angle.removeClass('fa-angle-down');
                angle.addClass('fa-angle-up');
                t.removeClass('invisible');
                this.gridApi.onRowHeightChanged();
                this.resetHeight();
            }
        }
        else {
            this.node.setRowHeight(50);
            this.gridApi.onRowHeightChanged();
            toggle.removeClass('expanded-toggle');
            toggle.addClass('collapsed-toggle');
            angle.removeClass('fa-angle-up');
            angle.addClass('fa-angle-down');
            t.addClass('invisible');
        }
    };
    ProductDetailsComponent.prototype.massDelete = function () {
        var _this = this;
        var nodes = this.productGridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids_1 = nodes.map(function (row) { return row.data.id; });
            var parameter = { ids: ids_1 };
            if (confirm("Are You Sure")) {
                this.productsSubs = this.productsApi.deleteProductTaxes(this.product_id, parameter, 'mass').subscribe(function (res) {
                    if (res == 1) {
                        _this.rowData = _this.rowData.filter(function (row) { return !(ids_1.includes(row.id)); });
                        _this.productGridApi.setRowData(_this.rowData);
                        _this.resetHeight();
                    }
                }, console.error);
                return false;
            }
        }
        return false;
    };
    ProductDetailsComponent.prototype.deleteTaxes = function (id, type, self) {
        if (confirm("Are You Sure")) {
            self.productsSubs = self.productsApi.deleteProductTaxes(self.product_id, {}, id).subscribe(function (res) {
                if (res == 1) {
                    self.rowData = self.rowData.filter(function (row) { return row.id != id; });
                    self.productGridApi.setRowData(self.rowData);
                    self.resetHeight();
                }
            }, console.error);
            return false;
        }
    };
    ProductDetailsComponent.prototype.save = function (id, type, self) {
        var row = self.rowData.filter(function (row) { return row.id == id; })[0];
        var parameters = { 'tax_id': row.name, 'purchase_pct': row.purchase_pct, 'name': row.name, 'sale_pct': row.sale_pct };
        if (id == 0) {
            self.productsSubs = self.productsApi.addProductTaxes(self.product_id, parameters).subscribe(function (res) {
                if (res > 0) {
                    parameters['id'] = res;
                    parameters['actions'] = {
                        api: self.productsApi,
                        id: res,
                        delete: [true, self.deleteRatio],
                        edit: [false, ''],
                        save: [true, self.save],
                        type: 'ratio',
                        self: self
                    };
                    self.rowData.push(parameters);
                    self.productGridApi.setRowData(self.rowData);
                    self.resetHeight();
                    return false;
                }
            }, console.error);
        }
        else {
            self.productsSubs = self.productsApi.editProductTaxes(self.product_id, parameters, id).subscribe(function (res) {
                if (res == 0) {
                    return false;
                }
            }, console.error);
        }
        return false;
    };
    ProductDetailsComponent.prototype.resetHeight = function () {
        var r = this.rowData.length;
        this.node.setRowHeight((r * 25) + 200);
        this.gridApi.onRowHeightChanged();
    };
    var ProductDetailsComponent_1;
    ProductDetailsComponent = ProductDetailsComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/Components/partials/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/Components/partials/product-details/product-details.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Components/partials/social-charge-details/social-charge-details.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/Components/partials/social-charge-details/social-charge-details.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/partials/social-charge-details/social-charge-details.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/Components/partials/social-charge-details/social-charge-details.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: visible\">\n    <button [class]=\"'btn btn-link collapsed-toggle details-toggle-'+master_raw_id\" (click)=\"toggleDetails()\"><i class=\"fa fa-angle-down\"></i></button>\n    <div [id]=\"'tab-details-'+master_raw_id\" class=\"invisible details d-grid\">\n        <div class=\"text-right\" style=\"overflow:visible;width:100%;z-index:10000\">\n            <a href=\"#\"  (click)=\"massDelete()\" class=\"btn btn-danger btn-sm mg-r-10\" >{{ \"globals.mass\" | translate }}</a>\n        </div>\n        <ag-grid-angular\n                style=\"width:100%;z-index:10000\"\n                [id]=\"'details-'+master_raw_id\"\n                class=\"ag-theme-fresh details-ag-grid\"\n                [rowData]=\"rowData\"\n                [columnDefs]=\"columnDefs\"\n                domLayout='autoHeight'\n                [frameworkComponents]=\"frameworkComponents\"\n                rowSelection=\"multiple\"\n                (gridReady)=\"onGridReady($event)\"\n                (firstDataRendered)=\"onFirstDataRendered($event)\"\n                (gridSizeChanged)=\"onFirstDataRendered($event)\"\n                >\n        </ag-grid-angular>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/partials/social-charge-details/social-charge-details.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/Components/partials/social-charge-details/social-charge-details.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SocialChargeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialChargeDetailsComponent", function() { return SocialChargeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_social_charge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/social-charge.service */ "./src/app/Services/social-charge.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocialChargeDetailsComponent = /** @class */ (function () {
    function SocialChargeDetailsComponent(social_chargesApi) {
        this.social_chargesApi = social_chargesApi;
        this.node = null;
        this.master_raw_id = null;
        this.social_charge_id = null;
        this.account_options = {};
        this.columnDefs = [];
        this.rowData = [{ id: 0, check: 'Add new ', name: 0 }];
        this.frameworkComponents = {
            actionsFormatterComponent: _action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
        };
    }
    SocialChargeDetailsComponent_1 = SocialChargeDetailsComponent;
    SocialChargeDetailsComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
        });
    };
    SocialChargeDetailsComponent.prototype.onGridReady = function (params) {
        this.social_chargeGridApi = params.api;
        this.social_chargeGridColumnApi = params.columnApi;
    };
    SocialChargeDetailsComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
        // let w = 8/9 * (parseInt($(document).innerWidth()) - parseInt($('.br-sideleft').width()) - 300);
        // $('.details').width(w)
    };
    SocialChargeDetailsComponent.prototype.agInit = function (params) {
        this.gridApi = params.value.gridApi;
        this.gridColumnApi = params.value.gridColumnApi;
        this.master_raw_id = params.value.row_id;
        this.social_charge_id = params.value.id;
    };
    SocialChargeDetailsComponent.extractValues = function (mappings) {
        return Object.keys(mappings);
    };
    SocialChargeDetailsComponent.lookupValue = function (mappings, key) {
        return mappings[key];
    };
    SocialChargeDetailsComponent.lookupKey = function (mappings, name) {
        for (var key in mappings) {
            if (mappings.hasOwnProperty(key)) {
                if (name === mappings[key]) {
                    return key;
                }
            }
        }
    };
    SocialChargeDetailsComponent.prototype.toggleDetails = function () {
        var _this = this;
        var toggle = jquery__WEBPACK_IMPORTED_MODULE_3__('.details-toggle-' + this.master_raw_id);
        var angle = toggle.find('i');
        var t = jquery__WEBPACK_IMPORTED_MODULE_3__('#tab-details-' + this.master_raw_id);
        if (toggle.hasClass('collapsed-toggle')) {
            if (this.rowData.length == 1) {
                this.node = this.gridApi.getRowNode(this.master_raw_id);
                this.social_chargesSubs = this.social_chargesApi.getSocialChargeAccounts(this.social_charge_id).subscribe(function (res) {
                    ///////////////////////////////////////
                    _this.account_options = res['accounts_options'];
                    var c = _this;
                    _this.columnDefs = [
                        {
                            headerName: '', field: 'check', width: 70, checkboxSelection: function (params) {
                                return (params.node.id != 0);
                            }
                        },
                        {
                            headerName: 'Cost Center Name',
                            field: 'name',
                            editable: true,
                            cellEditor: 'agSelectCellEditor',
                            cellEditorParams: {
                                values: SocialChargeDetailsComponent_1.extractValues(c.account_options)
                            },
                            valueFormatter: function (params) {
                                return SocialChargeDetailsComponent_1.lookupValue(c.account_options, params.value);
                            },
                            valueParser: function (params) {
                                return SocialChargeDetailsComponent_1.lookupKey(c.account_options, params.newValue);
                            }
                        },
                        { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
                    ];
                    _this.rowData = _this.rowData.concat(res['social_charges_accounts']);
                    for (var i = 0; i < _this.rowData.length; i++) {
                        _this.rowData[i]['actions'] = {
                            id: _this.rowData[i].id,
                            delete: [(i != 0), _this.deleteAccount],
                            edit: [false, ''],
                            save: [true, _this.save],
                            type: 'social_charge_account',
                            self: _this
                        };
                    }
                    toggle.removeClass('collapsed-toggle');
                    toggle.addClass('expanded-toggle');
                    angle.removeClass('fa-angle-down');
                    angle.addClass('fa-angle-up');
                    t.removeClass('invisible');
                    _this.resetHeight();
                });
            }
            else {
                toggle.removeClass('collapsed-toggle');
                toggle.addClass('expanded-toggle');
                angle.removeClass('fa-angle-down');
                angle.addClass('fa-angle-up');
                t.removeClass('invisible');
                this.resetHeight();
            }
        }
        else {
            this.node.setRowHeight(50);
            this.gridApi.onRowHeightChanged();
            toggle.removeClass('expanded-toggle');
            toggle.addClass('collapsed-toggle');
            angle.removeClass('fa-angle-up');
            angle.addClass('fa-angle-down');
            t.addClass('invisible');
        }
    };
    SocialChargeDetailsComponent.prototype.massDelete = function () {
        var _this = this;
        var nodes = this.social_chargeGridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids_1 = nodes.map(function (row) { return row.data.id; });
            var parameter = { ids: ids_1 };
            if (confirm("Are You Sure")) {
                this.social_chargesSubs = this.social_chargesApi.deleteSocialChargeAccount(this.social_charge_id, parameter, 'mass').subscribe(function (res) {
                    if (res == 1) {
                        _this.rowData = _this.rowData.filter(function (row) { return !(ids_1.includes(row.id)); });
                        _this.social_chargeGridApi.setRowData(_this.rowData);
                        _this.resetHeight();
                    }
                }, console.error);
                return false;
            }
        }
        return false;
    };
    SocialChargeDetailsComponent.prototype.deleteAccount = function (id, type, self) {
        if (confirm("Are You Sure")) {
            self.social_chargesSubs = self.social_chargesApi.deleteSocialChargeAccount(self.social_charge_id, {}, id).subscribe(function (res) {
                if (res == 1) {
                    self.rowData = self.rowData.filter(function (row) { return row.id != id; });
                    self.social_chargeGridApi.setRowData(self.rowData);
                    self.resetHeight();
                }
            }, console.error);
            return false;
        }
    };
    SocialChargeDetailsComponent.prototype.save = function (id, type, self) {
        var row = self.rowData.filter(function (row) { return row.id == id; })[0];
        var parameters = { 'account_id': row.name, 'name': row.name };
        if (id == 0) {
            self.social_chargesSubs = self.social_chargesApi.addSocialChargeAccount(self.social_charge_id, parameters).subscribe(function (res) {
                if (res > 0) {
                    parameters['id'] = res;
                    parameters['actions'] = {
                        api: self.social_chargesApi,
                        id: res,
                        delete: [true, self.deleteAccount],
                        edit: [false, ''],
                        save: [true, self.save],
                        type: 'ratio',
                        self: self
                    };
                    self.rowData.push(parameters);
                    self.social_chargeGridApi.setRowData(self.rowData);
                    self.resetHeight();
                    return false;
                }
            }, console.error);
        }
        else {
            self.social_chargesSubs = self.social_chargesApi.editSocialChargeAccount(self.social_charge_id, parameters, id).subscribe(function (res) {
                if (res == 1) {
                    return false;
                }
            }, console.error);
        }
        return false;
    };
    SocialChargeDetailsComponent.prototype.resetHeight = function () {
        var r = this.rowData.length;
        this.node.setRowHeight((r * 25) + 200);
        this.gridApi.onRowHeightChanged();
    };
    var SocialChargeDetailsComponent_1;
    SocialChargeDetailsComponent = SocialChargeDetailsComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-charge-details',
            template: __webpack_require__(/*! ./social-charge-details.component.html */ "./src/app/Components/partials/social-charge-details/social-charge-details.component.html"),
            styles: [__webpack_require__(/*! ./social-charge-details.component.css */ "./src/app/Components/partials/social-charge-details/social-charge-details.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_social_charge_service__WEBPACK_IMPORTED_MODULE_2__["SocialChargeService"]])
    ], SocialChargeDetailsComponent);
    return SocialChargeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Components/product-classifs/product-classif-add/product-classif-add.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/Components/product-classifs/product-classif-add/product-classif-add.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/product-classifs/product-classif-add/product-classif-add.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/Components/product-classifs/product-classif-add/product-classif-add.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ 'classa.prod' | translate }} </h4>\n    <p class=\"mg-b-0\">{{ 'classa.new' | translate }} </p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ 'classa.add' | translate }}</h6>\n      <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'classa.group' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-a\" class=\"form-control select2-hidden-accessible\" data-placeholder=\"Choose product_group\"\n                      aria-hidden=\"true\"  name=\"product_group\" #product_group=\"ngModel\" ngModel [ngModel]=\"0\">\n                <option value=\"0\" selected=\"\">{{ 'classa.raw' | translate }}</option>\n                <option value=\"1\">{{ 'classa.finish' | translate }}</option>\n                <option value=\"2\">{{ 'classa.semi' | translate }}</option>\n                <option value=\"3\">{{ 'classa.res' | translate }}</option>\n                <option value=\"4\">{{ 'classa.pack' | translate }}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'classa.des' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter description\"\n                     name=\"description\" #description=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'classa.init' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input type=\"checkbox\"\n                     name=\"initial_flag\" #initial_flag=\"ngModel\" ngModel [ngModel]=\"1\">\n            </div>\n          </div><!-- row -->\n        </div><!-- form-layout -->\n\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ 'globals.sub' | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/product-classifs/product-classif-add/product-classif-add.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/Components/product-classifs/product-classif-add/product-classif-add.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ProductClassifAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductClassifAddComponent", function() { return ProductClassifAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_product_classif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/product-classif.service */ "./src/app/Services/product-classif.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductClassifAddComponent = /** @class */ (function () {
    function ProductClassifAddComponent(productClassif, router, translate, titleService) {
        this.productClassif = productClassif;
        this.router = router;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    ProductClassifAddComponent.prototype.ngOnInit = function () {
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_3__(".float-input");
            float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2)); });
            float_inputs.on('change', function () {
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2));
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__("input").on('change', function () {
                c.formChanged = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__("select").on('change', function () {
                c.formChanged = true;
            });
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("classa.new"));
        });
    };
    ProductClassifAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        f.value.initial_flag = (f.value.initial_flag) ? 1 : 0;
        var product = JSON.stringify(f.value);
        this.productsSubs = this.productClassif.addProductClassif(product).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/product_classifs']);
                location.reload();
            }
        }, console.error);
    };
    ProductClassifAddComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/product_classifs']);
            } });
        }
        else {
            this.router.navigate(['/product_classifs']);
        }
        return false;
    };
    ProductClassifAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-classif-add',
            template: __webpack_require__(/*! ./product-classif-add.component.html */ "./src/app/Components/product-classifs/product-classif-add/product-classif-add.component.html"),
            styles: [__webpack_require__(/*! ./product-classif-add.component.css */ "./src/app/Components/product-classifs/product-classif-add/product-classif-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_product_classif_service__WEBPACK_IMPORTED_MODULE_2__["ProductClassifService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], ProductClassifAddComponent);
    return ProductClassifAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/product-classifs/product-classif-edit/product-classif-edit.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/Components/product-classifs/product-classif-edit/product-classif-edit.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/product-classifs/product-classif-edit/product-classif-edit.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/Components/product-classifs/product-classif-edit/product-classif-edit.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ 'classe.prod' | translate }} </h4>\n    <p class=\"mg-b-0\">{{ 'classe.edit' | translate }} </p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\"> {{ 'classe.edit' | translate }}</h6>\n      <form *ngIf=\"product_classif\" #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'classe.group' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-a\" class=\"form-control select2-hidden-accessible\" data-placeholder=\"Choose product_group\"\n                      aria-hidden=\"true\"  name=\"product_group\" #product_group=\"ngModel\" ngModel [ngModel]=\"product_classif.product_group\">\n                <option value=\"0\" selected=\"\"> {{ 'classe.raw' | translate }}</option>\n                <option value=\"1\"> {{ 'classe.finish' | translate }}</option>\n                <option value=\"2\"> {{ 'classe.semi' | translate }}</option>\n                <option value=\"3\"> {{ 'classe.res' | translate }}</option>\n                <option value=\"4\"> {{ 'classe.pack' | translate }}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'classe.des' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter description\"\n                     name=\"description\" #description=\"ngModel\" ngModel [ngModel]=\"product_classif.description\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'classe.init' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input type=\"checkbox\"\n                     name=\"initial_flag\" #initial_flag=\"ngModel\" ngModel [ngModel]=\"product_classif.initial_flag\">\n            </div>\n          </div><!-- row -->\n        </div><!-- form-layout -->\n\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\"> {{ 'globals.sub' | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/product-classifs/product-classif-edit/product-classif-edit.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/Components/product-classifs/product-classif-edit/product-classif-edit.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ProductClassifEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductClassifEditComponent", function() { return ProductClassifEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_product_classif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/product-classif.service */ "./src/app/Services/product-classif.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductClassifEditComponent = /** @class */ (function () {
    function ProductClassifEditComponent(productClassifApi, router, route, translate, titleService) {
        this.productClassifApi = productClassifApi;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    ProductClassifEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productClassifSubs = this.productClassifApi.getProductClassif(this.route.params['value']['rule_id']).subscribe(function (res) {
            _this.product_classif = res['product_classif'];
            var c = _this;
            jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
                var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_3__(".float-input");
                float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2)); });
                float_inputs.on('change', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2));
                });
                jquery__WEBPACK_IMPORTED_MODULE_3__("input").on('change', function () {
                    c.formChanged = true;
                });
                jquery__WEBPACK_IMPORTED_MODULE_3__("select").on('change', function () {
                    c.formChanged = true;
                });
                c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("classe.edit"));
            });
        });
    };
    ProductClassifEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        f.value.initial_flag = (f.value.initial_flag) ? 1 : 0;
        var user = JSON.stringify(f.value);
        this.productClassifSubs = this.productClassifApi.editProductClassif(this.product_classif.id, user).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/product_classifs']);
                location.reload();
            }
        }, console.error);
    };
    ProductClassifEditComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/product_classifs']);
            } });
        }
        else {
            this.router.navigate(['/product_classifs']);
        }
        return false;
    };
    ProductClassifEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-classif-edit',
            template: __webpack_require__(/*! ./product-classif-edit.component.html */ "./src/app/Components/product-classifs/product-classif-edit/product-classif-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-classif-edit.component.css */ "./src/app/Components/product-classifs/product-classif-edit/product-classif-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_product_classif_service__WEBPACK_IMPORTED_MODULE_2__["ProductClassifService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], ProductClassifEditComponent);
    return ProductClassifEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/product-classifs/product-classif-overview/product-classif-overview.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/Components/product-classifs/product-classif-overview/product-classif-overview.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/product-classifs/product-classif-overview/product-classif-overview.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/Components/product-classifs/product-classif-overview/product-classif-overview.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n    <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\">{{ 'classa.prod' | translate }}</h4>\n        <p class=\"mg-b-0\">{{ 'classo.list' | translate }} </p>\n    </div><!-- d-flex -->\n    <div class=\"br-pagebody\">\n        <div class=\"br-section-wrapper\">\n            <div class=\"text-left\">\n                <a routerLink=\"/products\" class=\"btn btn-primary\"><i class=\"fa fa-long-arrow-left fa-lg\"><span style=\"font-family: Roboto, 'Helvetica Neue', Arial, sans-serif\">   {{ 'classo.prodo' | translate }}</span></i></a>\n                <div class=\"float-right\">\n                    <a href=\"#\" (click)=\"massDeleteProductClassif()\" class=\"btn btn-danger mg-r-10\" *ngIf=\"delete\">{{ \"globals.mass\" | translate }}</a>\n                    <a routerLink=\"/product_classifs/add\" class=\"btn btn-success\" *ngIf=\"add\">{{ 'globals.new' | translate }}</a>\n                </div>\n            </div>\n            <hr>\n            <ag-grid-angular\n                    style=\"width: 100%;\"\n                    class=\"ag-theme-material\"\n                    [rowData]=\"rowData\"\n                    [columnDefs]=\"columnDefs\"\n                    [enableSorting]=\"true\"\n                    [enableFilter]=\"true\"\n                    [frameworkComponents]=\"frameworkComponents\"\n                    rowSelection=\"multiple\"\n                    [rowMultiSelectWithClick]=\"true\"\n                    (gridReady)=\"onGridReady($event)\"\n                    (firstDataRendered)=\"onFirstDataRendered($event)\"\n                    (gridSizeChanged)=\"onFirstDataRendered($event)\"\n                    domLayout='autoHeight'\n                    pagination=\"true\"\n                    paginationPageSize=\"10\"\n            >\n            </ag-grid-angular>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/product-classifs/product-classif-overview/product-classif-overview.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/Components/product-classifs/product-classif-overview/product-classif-overview.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ProductClassifOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductClassifOverviewComponent", function() { return ProductClassifOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_product_classif_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/product-classif.service */ "./src/app/Services/product-classif.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _partials_product_classif_details_product_classif_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/product-classif-details/product-classif-details.component */ "./src/app/Components/partials/product-classif-details/product-classif-details.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductClassifOverviewComponent = /** @class */ (function () {
    function ProductClassifOverviewComponent(productClassifApi, translate, titleService) {
        this.productClassifApi = productClassifApi;
        this.translate = translate;
        this.titleService = titleService;
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.columnDefs = [];
        this.rowData = [];
        this.frameworkComponents = {
            actionsFormatterComponent: _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
            detailsFormatterComponent: _partials_product_classif_details_product_classif_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductClassifDetailsComponent"]
        };
    }
    ProductClassifOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productClassifSubs = this.productClassifApi.getProductClassifs().subscribe(function (res) {
            _this.productClassifs = res['products_classifs'];
            _this.add = res['add'];
            _this.edit = res['edit'];
            _this.delete = res['delete'];
            _this.columnDefs = [
                { headerName: '', field: 'check', checkboxSelection: true, width: 60 },
                { headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible' },
                { headerName: 'Product Group', field: 'product_group', cellRendererParams: { c: _this }, cellRenderer: function (params) {
                        var c = params.c;
                        if (params.value == 0) {
                            return c.translate.instant("classa.raw");
                        }
                        else if (params.value == 1) {
                            return c.translate.instant("classa.finish");
                        }
                        else if (params.value == 2) {
                            return c.translate.instant("classa.semi");
                        }
                        else if (params.value == 3) {
                            return c.translate.instant("classa.res");
                        }
                        else if (params.value == 4) {
                            return c.translate.instant("classa.pack");
                        }
                    } },
                { headerName: 'Description', field: 'description' },
                { headerName: 'Initial Flag', field: 'initial_flag' },
                { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
            ];
            for (var i = 0; i < _this.productClassifs.length; i++) {
                _this.productClassifs[i]['details'] = {
                    'id': _this.productClassifs[i].id,
                    'row_id': i,
                    'gridApi': _this.gridApi,
                    'gridColumnApi': _this.gridColumnApi
                };
                _this.productClassifs[i]['actions'] = {
                    'self': _this,
                    'api': _this.productClassifApi,
                    'id': _this.productClassifs[i].id,
                    'delete': [_this.delete, _this.deleteProductClassif],
                    'edit': [_this.edit, '/product_classifs/edit/']
                };
            }
            _this.rowData = _this.productClassifs;
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("classo.prod"));
        });
    };
    ProductClassifOverviewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
        var w = 7 / 9 * parseInt(jquery__WEBPACK_IMPORTED_MODULE_3__('.ag-theme-material').width());
        jquery__WEBPACK_IMPORTED_MODULE_3__('.details').width(w);
    };
    ProductClassifOverviewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    ProductClassifOverviewComponent.prototype.deleteProductClassif = function (id, productClassifApi, self) {
        var productClassif = {};
        if (confirm("Are You Sure Want To Delete ? ")) {
            this.productClassifSubs = self.productClassifApi.deleteProductClassif(id, productClassif).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    ProductClassifOverviewComponent.prototype.massDeleteProductClassif = function () {
        var nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids = nodes.map(function (row) { return row.data.id; });
            var productClassif = { ids: ids };
            if (confirm("Are You Sure Want To Delete ? ")) {
                this.productClassifSubs = this.productClassifApi.deleteProductClassif('mass', productClassif).subscribe(function (res) {
                    if (res == 1) {
                        location.reload();
                    }
                }, console.error);
            }
        }
        return false;
    };
    ProductClassifOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-classif-overview',
            template: __webpack_require__(/*! ./product-classif-overview.component.html */ "./src/app/Components/product-classifs/product-classif-overview/product-classif-overview.component.html"),
            styles: [__webpack_require__(/*! ./product-classif-overview.component.css */ "./src/app/Components/product-classifs/product-classif-overview/product-classif-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_product_classif_service__WEBPACK_IMPORTED_MODULE_2__["ProductClassifService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], ProductClassifOverviewComponent);
    return ProductClassifOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/product-classifs/product-classifs.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/Components/product-classifs/product-classifs.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/product-classifs/product-classifs.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/product-classifs/product-classifs.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Components/product-classifs/product-classifs.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Components/product-classifs/product-classifs.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductClassifsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductClassifsComponent", function() { return ProductClassifsComponent; });
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

var ProductClassifsComponent = /** @class */ (function () {
    function ProductClassifsComponent() {
    }
    ProductClassifsComponent.prototype.ngOnInit = function () {
    };
    ProductClassifsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-classifs',
            template: __webpack_require__(/*! ./product-classifs.component.html */ "./src/app/Components/product-classifs/product-classifs.component.html"),
            styles: [__webpack_require__(/*! ./product-classifs.component.css */ "./src/app/Components/product-classifs/product-classifs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductClassifsComponent);
    return ProductClassifsComponent;
}());



/***/ }),

/***/ "./src/app/Components/products/product-add/product-add.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/Components/products/product-add/product-add.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/products/product-add/product-add.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/Components/products/product-add/product-add.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ 'producta.prod' | translate }} </h4>\n    <p class=\"mg-b-0\"> {{ 'producta.new' | translate }} </p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ 'producta.add' | translate }}</h6>\n      <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producta.name' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter name\"\n                     name=\"name\" #name=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producta.des' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter description\"\n                     name=\"description\" #description=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producta.class' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select *ngIf=\"productClassifs\" id=\"select2-c\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\"  name=\"product_class_id\" #product_class_id=\"ngModel\" ngModel [ngModel]=\"(productClassifs.length > 0) ? productClassifs[0].id : 0\">\n                <option *ngFor=\"let product_classif of productClassifs\" [value]=\"product_classif.id\" selected=\"\">{{product_classif.description}}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producta.type' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-b\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\"  name=\"type\" #type=\"ngModel\" ngModel [ngModel]=\"0\">\n                <option value=\"0\" selected=\"\">{{ 'producta.simple' | translate }}</option>\n                <option value=\"1\">{{ 'producta.comp' | translate }}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producta.group' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-a\" class=\"form-control select2-hidden-accessible\" data-placeholder=\"Choose product_group\"\n                      aria-hidden=\"true\"  name=\"product_group\" #product_group=\"ngModel\" ngModel [ngModel]=\"0\">\n                <option value=\"0\" selected=\"\">{{ 'producta.raw' | translate }}</option>\n                <option value=\"1\">{{ 'producta.finish' | translate }}</option>\n                <option value=\"2\">{{ 'producta.semi' | translate }}</option>\n                <option value=\"3\">{{ 'producta.res' | translate }}</option>\n                <option value=\"4\">{{ 'producta.pack' | translate }}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producta.internal' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter internal_code\"\n                     name=\"internal_code\" #internal_code=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producta.unit' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter unit\"\n                     name=\"unit\" #unit=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producta.currency' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"number\"\n                     name=\"currency_type\" #currency_type=\"ngModel\" ngModel placeholder=\"Enter currency_type\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producta.cost' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\"\n                     name=\"cost_price\" #cost_price=\"ngModel\" ngModel placeholder=\"Enter cost_price\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producta.sale' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\"\n                     name=\"sale_price\" #sale_price=\"ngModel\" ngModel placeholder=\"Enter sale_price\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producta.day' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\"\n                     name=\"daysterm_recpt\" #daysterm_recpt=\"ngModel\" ngModel placeholder=\"Enter daysterm_recpt\">\n            </div>\n          </div><!-- row -->\n        </div><!-- form-layout -->\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ 'globals.sub' | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/products/product-add/product-add.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/Components/products/product-add/product-add.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/product.service */ "./src/app/Services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_product_classif_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/product-classif.service */ "./src/app/Services/product-classif.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(productApi, router, productClassifApi, titleService, translate) {
        this.productApi = productApi;
        this.router = router;
        this.productClassifApi = productClassifApi;
        this.titleService = titleService;
        this.translate = translate;
        this.formChanged = false;
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productClassifSubs = this.productClassifApi.getProductClassifs().subscribe(function (res) {
            _this.productClassifs = res['products_classifs'];
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
            var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_4__(".float-input");
            float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2)); });
            float_inputs.on('change', function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2));
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("input").on('change', function () {
                c.formChanged = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("select").on('change', function () {
                c.formChanged = true;
            });
        });
    };
    ProductAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var product = JSON.stringify(f.value);
        this.productsSubs = this.productApi.addProduct(product).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/products']);
                location.reload();
            }
        }, console.error);
    };
    ProductAddComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/products']);
            } });
        }
        else {
            this.router.navigate(['/products']);
        }
        return false;
    };
    ProductAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-add',
            template: __webpack_require__(/*! ./product-add.component.html */ "./src/app/Components/products/product-add/product-add.component.html"),
            styles: [__webpack_require__(/*! ./product-add.component.css */ "./src/app/Components/products/product-add/product-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _Services_product_classif_service__WEBPACK_IMPORTED_MODULE_3__["ProductClassifService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/products/product-edit/product-edit.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/products/product-edit/product-edit.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/products/product-edit/product-edit.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/Components/products/product-edit/product-edit.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ 'producte.prod' | translate }} </h4>\n    <p class=\"mg-b-0\"> {{ 'producte.edit' | translate }}</p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\"> {{ 'producte.edita' | translate }}</h6>\n      <form *ngIf=\"product\" #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producte.name' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter name\"\n                     name=\"name\" #name=\"ngModel\" ngModel [ngModel]=\"product.name\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producte.des' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter description\"\n                     name=\"description\" #description=\"ngModel\" ngModel [ngModel]=\"product.description\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producte.class' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-c\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\"  name=\"product_class_id\" #product_class_id=\"ngModel\" ngModel [ngModel]=\"product.product_class_id\">\n                <option *ngFor=\"let product_classif of productClassifs\" [value]=\"product_classif.id\" selected=\"\">{{product_classif.description}}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producte.type' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-b\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\"  name=\"type\" #type=\"ngModel\" ngModel [ngModel]=\"product.type\">\n                <option value=\"0\" selected=\"\">{{ 'producte.simple' | translate }}</option>\n                <option value=\"1\">{{ 'producte.comp' | translate }}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producte.group' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-a\" class=\"form-control select2-hidden-accessible\" data-placeholder=\"Choose product_group\"\n                      aria-hidden=\"true\"  name=\"product_group\" #product_group=\"ngModel\" ngModel [ngModel]=\"product.product_group\">\n                <option value=\"0\" selected=\"\"> {{ 'producte.raw' | translate }}</option>\n                <option value=\"1\"> {{ 'producte.finish' | translate }}</option>\n                <option value=\"2\"> {{ 'producte.semi' | translate }}</option>\n                <option value=\"3\"> {{ 'producte.res' | translate }}</option>\n                <option value=\"4\"> {{ 'producte.pack' | translate }}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producte.internal' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter internal_code\"\n                     name=\"internal_code\" #internal_code=\"ngModel\" ngModel [ngModel]=\"product.internal_code\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producte.unit' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter unit\"\n                     name=\"unit\" #unit=\"ngModel\" ngModel [ngModel]=\"product.unit\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producte.currency' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"number\" [ngModel]=\"product.currency_type\"\n                     name=\"currency_type\" #currency_type=\"ngModel\" ngModel placeholder=\"Enter currency_type\" >\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producte.cost' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\" [ngModel]=\"product.cost_price\"\n                     name=\"cost_price\" #cost_price=\"ngModel\" ngModel placeholder=\"Enter cost_price\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producte.sale' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\" [ngModel]=\"product.sale_price\"\n                     name=\"sale_price\" #sale_price=\"ngModel\" ngModel placeholder=\"Enter sale_price\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'producte.day' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\" [ngModel]=\"product.daysterm_recpt\"\n                     name=\"daysterm_recpt\" #daysterm_recpt=\"ngModel\" ngModel placeholder=\"Enter daysterm_recpt\">\n            </div>\n          </div><!-- row -->\n        </div><!-- form-layout -->\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ 'globals.sub' | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/products/product-edit/product-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Components/products/product-edit/product-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/product.service */ "./src/app/Services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_product_classif_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/product-classif.service */ "./src/app/Services/product-classif.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(productsApi, router, route, productClassifApi, titleService, translate) {
        this.productsApi = productsApi;
        this.router = router;
        this.route = route;
        this.productClassifApi = productClassifApi;
        this.titleService = titleService;
        this.translate = translate;
        this.formChanged = false;
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productSubs = this.productsApi.getProduct(this.route.params['value']['rule_id']).subscribe(function (res) {
            _this.product = res['product'];
            var c = _this;
            jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
                var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_4__(".float-input");
                float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2)); });
                float_inputs.on('change', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2));
                });
                jquery__WEBPACK_IMPORTED_MODULE_4__("input").on('change', function () {
                    c.formChanged = true;
                });
                jquery__WEBPACK_IMPORTED_MODULE_4__("select").on('change', function () {
                    c.formChanged = true;
                });
            });
        });
        this.productClassifSubs = this.productClassifApi.getProductClassifs().subscribe(function (res) {
            _this.productClassifs = res['products_classifs'];
        });
    };
    ProductEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var product = JSON.stringify(f.value);
        this.productSubs = this.productsApi.editProduct(this.product.id, product).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/products']);
                location.reload();
            }
        }, console.error);
    };
    ProductEditComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/products']);
            } });
        }
        else {
            this.router.navigate(['/products']);
        }
        return false;
    };
    ProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/Components/products/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/Components/products/product-edit/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _Services_product_classif_service__WEBPACK_IMPORTED_MODULE_3__["ProductClassifService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/products/product-overview/product-overview.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/Components/products/product-overview/product-overview.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/products/product-overview/product-overview.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/Components/products/product-overview/product-overview.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\"> {{ 'producto.prod' | translate }} </h4>\n    <p class=\"mg-b-0\">{{ 'producto.list' | translate }} </p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <div class=\"text-right\">\n        <a href=\"#\" (click)=\"massDeleteProduct()\" class=\"btn btn-danger mg-r-10\" *ngIf=\"delete\">{{ \"globals.mass\" | translate }}</a>\n        <a routerLink=\"/products/add\" class=\"btn btn-success mg-r-10\" *ngIf=\"add\"> {{ 'globals.new' | translate }}</a>\n        <a routerLink=\"/product_classifs\" class=\"btn btn-warning\">{{ 'producto.manage' | translate }}</a>\n      </div>\n      <hr>\n      <ag-grid-angular\n              style=\"width: 100%;\"\n              class=\"ag-theme-material\"\n              [rowData]=\"rowData\"\n              [columnDefs]=\"columnDefs\"\n              [enableSorting]=\"true\"\n              [enableFilter]=\"true\"\n              [frameworkComponents]=\"frameworkComponents\"\n              rowSelection=\"multiple\"\n              [rowMultiSelectWithClick]=\"false\"\n              [suppressRowClickSelection]=\"true\"\n              (gridReady)=\"onGridReady($event)\"\n              (firstDataRendered)=\"onFirstDataRendered($event)\"\n              (gridSizeChanged)=\"onFirstDataRendered($event)\"\n              domLayout='autoHeight'\n              pagination=\"true\"\n              paginationPageSize=\"10\"\n      >\n      </ag-grid-angular>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/products/product-overview/product-overview.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/Components/products/product-overview/product-overview.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOverviewComponent", function() { return ProductOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/product.service */ "./src/app/Services/product.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _partials_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/product-details/product-details.component */ "./src/app/Components/partials/product-details/product-details.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductOverviewComponent = /** @class */ (function () {
    function ProductOverviewComponent(productApi, route, router, translate) {
        this.productApi = productApi;
        this.route = route;
        this.router = router;
        this.translate = translate;
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.columnDefs = [];
        this.rowData = [];
        this.frameworkComponents = {
            actionsFormatterComponent: _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
            detailsFormatterComponent: _partials_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"]
        };
    }
    ProductOverviewComponent.prototype.init = function () {
        var _this = this;
        if (this.route.params['value']['type'])
            this.type = this.route.params['value']['type'];
        this.productSubs = this.productApi.getProducts(this.type).subscribe(function (res) {
            _this.products = res['products'];
            _this.add = res['add'];
            _this.edit = res['edit'];
            _this.delete = res['delete'];
            _this.columnDefs = [
                { headerName: '', field: 'check', checkboxSelection: true, width: 60 },
                { headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible' },
                { headerName: 'Name', field: 'name' },
                { headerName: 'Description', field: 'description' },
                { headerName: 'Type', field: 'type', cellRendererParams: { c: _this }, cellRenderer: function (params) {
                        var c = params.c;
                        if (params.value == 0) {
                            return c.translate.instant("producta.simple");
                        }
                        else if (params.value == 1) {
                            return c.translate.instant("producta.comp");
                        }
                    } },
                { headerName: 'Product Group', field: 'product_group', cellRendererParams: { c: _this }, cellRenderer: function (params) {
                        var c = params.c;
                        if (params.value == 0) {
                            return c.translate.instant("classa.raw");
                        }
                        else if (params.value == 1) {
                            return c.translate.instant("classa.finish");
                        }
                        else if (params.value == 2) {
                            return c.translate.instant("classa.semi");
                        }
                        else if (params.value == 3) {
                            return c.translate.instant("classa.res");
                        }
                        else if (params.value == 4) {
                            return c.translate.instant("classa.pack");
                        }
                    } },
                { headerName: 'Internal Code', field: 'internal_code' },
                { headerName: 'Unit', field: 'unit' },
                { headerName: 'Currency Type', field: 'currency_type' },
                { headerName: 'Cost Price', field: 'cost_price' },
                { headerName: 'Sale Price', field: 'sale_price' },
                { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
            ];
            for (var i = 0; i < _this.products.length; i++) {
                _this.products[i]['details'] = {
                    'id': _this.products[i].id,
                    'row_id': i,
                    'gridApi': _this.gridApi,
                    'gridColumnApi': _this.gridColumnApi
                };
                _this.products[i]['actions'] = {
                    'self': _this,
                    'id': _this.products[i].id,
                    'delete': [_this.delete, _this.deleteProduct],
                    'edit': [_this.edit, '/products/edit/']
                };
            }
            _this.rowData = _this.products;
        });
    };
    ProductOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                _this.init();
            }
        });
        this.init();
    };
    ProductOverviewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
        var w = 7 / 9 * parseInt(jquery__WEBPACK_IMPORTED_MODULE_3__('.ag-theme-material').width());
        jquery__WEBPACK_IMPORTED_MODULE_3__('.details').width(w);
    };
    ProductOverviewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    ProductOverviewComponent.prototype.deleteProduct = function (id, type, self) {
        var product = {};
        if (confirm("Are You Sure Want To Delete ? ")) {
            this.productSubs = self.productApi.deleteProduct(id, product).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    ProductOverviewComponent.prototype.massDeleteProduct = function () {
        var nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids = nodes.map(function (row) { return row.data.id; });
            var product = { ids: ids };
            if (confirm("Are You Sure Want To Delete ? ")) {
                this.productSubs = this.productApi.deleteProduct('mass', product).subscribe(function (res) {
                    if (res == 1) {
                        location.reload();
                    }
                }, console.error);
            }
        }
        return false;
    };
    ProductOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-overview',
            template: __webpack_require__(/*! ./product-overview.component.html */ "./src/app/Components/products/product-overview/product-overview.component.html"),
            styles: [__webpack_require__(/*! ./product-overview.component.css */ "./src/app/Components/products/product-overview/product-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], ProductOverviewComponent);
    return ProductOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/products/products.component.css":
/*!************************************************************!*\
  !*** ./src/app/Components/products/products.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Components/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
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

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/Components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/Components/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/Components/social-charges/social-charge-add/social-charge-add.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/Components/social-charges/social-charge-add/social-charge-add.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/social-charges/social-charge-add/social-charge-add.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/Components/social-charges/social-charge-add/social-charge-add.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\"> {{ 'sociala.soci' | translate }}</h4>\n    <p class=\"mg-b-0\">{{ 'sociala.new' | translate }} </p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ 'sociala.new' | translate }}</h6>\n      <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'sociala.acc' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-c\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\" name=\"account_id\" #account_id=\"ngModel\" ngModel [ngModel]=\"0\">\n                <option value=\"0\" selected=\"\">{{ 'sociala.select' | translate }}</option>\n                <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\">{{account.code}}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'sociala.des' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter description\"\n                     name=\"description\" #description=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'sociala.init' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\"\n                     name=\"initial_date\" #initial_date=\"ngModel\" ngModel placeholder=\"Enter Area\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'sociala.final' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\"\n                     name=\"final_date\" #final_date=\"ngModel\" ngModel placeholder=\"Enter Monthly Interest:\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'sociala.charge' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\"\n                     name=\"charge_pct\" #charge_pct=\"ngModel\" ngModel placeholder=\"Enter Avg Quantity Months\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n        </div><!-- form-layout -->\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ 'globals.sub' | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/social-charges/social-charge-add/social-charge-add.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/Components/social-charges/social-charge-add/social-charge-add.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SocialChargeAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialChargeAddComponent", function() { return SocialChargeAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/account.service */ "./src/app/Services/account.service.ts");
/* harmony import */ var _Services_social_charge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/social-charge.service */ "./src/app/Services/social-charge.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SocialChargeAddComponent = /** @class */ (function () {
    function SocialChargeAddComponent(accountsApi, socialChargesApi, router, translate, titleService) {
        this.accountsApi = accountsApi;
        this.socialChargesApi = socialChargesApi;
        this.router = router;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    SocialChargeAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(function (res) {
            _this.accounts = res['accounts'];
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
            var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_4__(".float-input");
            float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2)); });
            float_inputs.on('change', function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2));
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("input").on('change', function () {
                c.formChanged = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("select").on('change', function () {
                c.formChanged = true;
            });
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("sociala.new"));
        });
    };
    SocialChargeAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.socialChargesSubs = this.socialChargesApi.addSocialCharge(parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/social_charges']);
                location.reload();
            }
        }, console.error);
    };
    SocialChargeAddComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/social_charges']);
            } });
        }
        else {
            this.router.navigate(['/']);
        }
        return false;
    };
    SocialChargeAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-charge-add',
            template: __webpack_require__(/*! ./social-charge-add.component.html */ "./src/app/Components/social-charges/social-charge-add/social-charge-add.component.html"),
            styles: [__webpack_require__(/*! ./social-charge-add.component.css */ "./src/app/Components/social-charges/social-charge-add/social-charge-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"], _Services_social_charge_service__WEBPACK_IMPORTED_MODULE_2__["SocialChargeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], SocialChargeAddComponent);
    return SocialChargeAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/social-charges/social-charge-edit/social-charge-edit.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/Components/social-charges/social-charge-edit/social-charge-edit.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/social-charges/social-charge-edit/social-charge-edit.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/Components/social-charges/social-charge-edit/social-charge-edit.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ 'sociale.soci' | translate }} </h4>\n    <p class=\"mg-b-0\"> {{ 'sociale.edit' | translate }} </p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ 'sociale.edit' | translate }}</h6>\n      <form *ngIf=\"social_charge\" #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'sociale.acc' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-c\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\" name=\"account_id\" #account_id=\"ngModel\" ngModel [ngModel]=\"social_charge.account_id\">\n                <option value=\"0\" selected=\"\">{{ 'sociale.select' | translate }}</option>\n                <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\">{{account.code}}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'sociale.des' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter Branch Name\"\n                     name=\"description\" #description=\"ngModel\" ngModel [ngModel]=\"social_charge.description\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'sociale.init' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\"\n                     name=\"initial_date\" #initial_date=\"ngModel\" ngModel placeholder=\"Enter Area\" [ngModel]=\"social_charge.initial_date\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'sociale.final' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\"\n                     name=\"final_date\" #final_date=\"ngModel\" ngModel placeholder=\"Enter Monthly Interest:\" [ngModel]=\"social_charge.final_date\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'sociale.charge' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\"\n                     name=\"charge_pct\" #charge_pct=\"ngModel\" ngModel placeholder=\"Enter Avg Quantity Months\" [ngModel]=\"social_charge.charge_pct\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n        </div><!-- form-layout -->\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ 'globals.sub' | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/social-charges/social-charge-edit/social-charge-edit.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/Components/social-charges/social-charge-edit/social-charge-edit.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SocialChargeEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialChargeEditComponent", function() { return SocialChargeEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/account.service */ "./src/app/Services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_social_charge_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Services/social-charge.service */ "./src/app/Services/social-charge.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SocialChargeEditComponent = /** @class */ (function () {
    function SocialChargeEditComponent(accountsApi, socialChargesApi, router, route, translate, titleService) {
        this.accountsApi = accountsApi;
        this.socialChargesApi = socialChargesApi;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    SocialChargeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(function (res) {
            _this.accounts = res['accounts'];
        });
        this.socialChargesSubs = this.socialChargesApi.getSocialCharge(this.route.params['value']['rule_id']).subscribe(function (res) {
            _this.social_charge = res['social_charge'];
            var c = _this;
            jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
                var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_4__(".float-input");
                float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2)); });
                float_inputs.on('change', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2));
                });
                jquery__WEBPACK_IMPORTED_MODULE_4__("input").on('change', function () {
                    c.formChanged = true;
                });
                jquery__WEBPACK_IMPORTED_MODULE_4__("select").on('change', function () {
                    c.formChanged = true;
                });
                c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("sociale.edit"));
            });
        });
    };
    SocialChargeEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.socialChargesSubs = this.socialChargesApi.editSocialCharge(this.social_charge.id, parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/social_charges']);
                location.reload();
            }
        }, console.error);
    };
    SocialChargeEditComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/social_charges']);
            } });
        }
        else {
            this.router.navigate(['/social_charges']);
        }
        return false;
    };
    SocialChargeEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-charge-edit',
            template: __webpack_require__(/*! ./social-charge-edit.component.html */ "./src/app/Components/social-charges/social-charge-edit/social-charge-edit.component.html"),
            styles: [__webpack_require__(/*! ./social-charge-edit.component.css */ "./src/app/Components/social-charges/social-charge-edit/social-charge-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"], _Services_social_charge_service__WEBPACK_IMPORTED_MODULE_3__["SocialChargeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], SocialChargeEditComponent);
    return SocialChargeEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/social-charges/social-charge-overview/social-charge-overview.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/Components/social-charges/social-charge-overview/social-charge-overview.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/social-charges/social-charge-overview/social-charge-overview.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/Components/social-charges/social-charge-overview/social-charge-overview.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\"> {{ 'socialo.social' | translate }} </h4>\n    <p class=\"mg-b-0\">{{ 'socialo.list' | translate }} </p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <div class=\"text-right\">\n        <a href=\"#\" (click)=\"massDeleteSocialCharges()\" class=\"btn btn-danger mg-r-10\" *ngIf=\"delete\">{{ \"globals.mass\" | translate }}</a>\n        <a routerLink=\"/social_charges/add\" class=\"btn btn-success\" *ngIf=\"add\">{{ 'globals.new' | translate }}</a>\n      </div>\n      <hr>\n      <ag-grid-angular\n              style=\"width: 100%;\"\n              class=\"ag-theme-material\"\n              [rowData]=\"rowData\"\n              [columnDefs]=\"columnDefs\"\n              [enableSorting]=\"true\"\n              [enableFilter]=\"true\"\n              [frameworkComponents]=\"frameworkComponents\"\n              rowSelection=\"multiple\"\n              [rowMultiSelectWithClick]=\"true\"\n              (gridReady)=\"onGridReady($event)\"\n              (firstDataRendered)=\"onFirstDataRendered($event)\"\n              (gridSizeChanged)=\"onFirstDataRendered($event)\"\n              domLayout='autoHeight'\n              pagination=\"true\"\n              paginationPageSize=\"10\"\n      >\n      </ag-grid-angular>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/social-charges/social-charge-overview/social-charge-overview.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/Components/social-charges/social-charge-overview/social-charge-overview.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: SocialChargeOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialChargeOverviewComponent", function() { return SocialChargeOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_social_charge_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/social-charge.service */ "./src/app/Services/social-charge.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {SocialChargeDetailsComponent} from "../../partials/social-charge-details/social-charge-details.component";
var SocialChargeOverviewComponent = /** @class */ (function () {
    function SocialChargeOverviewComponent(social_chargesApi, translate, titleService) {
        this.social_chargesApi = social_chargesApi;
        this.translate = translate;
        this.titleService = titleService;
        this.columnDefs = [];
        this.rowData = [];
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.frameworkComponents = {
            actionsFormatterComponent: _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
        };
    }
    SocialChargeOverviewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
        var w = 7 / 9 * parseInt(jquery__WEBPACK_IMPORTED_MODULE_3__('.ag-theme-material').width());
        jquery__WEBPACK_IMPORTED_MODULE_3__('.details').width(w);
    };
    SocialChargeOverviewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    SocialChargeOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.social_chargesSubs = this.social_chargesApi.getSocialCharges().subscribe(function (res) {
            _this.social_charges = res['social_charges'];
            _this.add = res['add'];
            _this.edit = res['edit'];
            _this.delete = res['delete'];
            _this.columnDefs = [
                // {headerName: '', field: 'check', checkboxSelection:true, width:60},
                // {headerName: '', field: 'details', width: 50, cellRenderer: 'detailsFormatterComponent', style: 'overflow: visible'},
                { headerName: 'Description', field: 'description' },
                { headerName: 'Initial Date', field: 'initial_date' },
                { headerName: 'Final Date', field: 'final_date' },
                { headerName: 'Charge Pct', field: 'charge_pct' },
                { headerName: 'Account', field: 'account_name' },
                { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
            ];
            for (var i = 0; i < _this.social_charges.length; i++) {
                // this.social_charges[i]['details'] = {
                //     'row_id': i,
                //     'id': this.social_charges[i].id,
                //     'gridApi' : this.gridApi,
                //     'gridColumnApi': this.gridColumnApi
                // };
                _this.social_charges[i]['actions'] = {
                    'self': _this,
                    'id': _this.social_charges[i].id,
                    'delete': [_this.delete, _this.deleteSocialCharge],
                    'edit': [_this.edit, '/social_charges/edit/']
                };
            }
            _this.rowData = _this.social_charges;
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("socialo.social"));
        });
    };
    SocialChargeOverviewComponent.prototype.massDeleteSocialCharges = function () {
        var nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids = nodes.map(function (row) { return row.data.id; });
            var parameter = { ids: ids };
            if (confirm("Are You Sure Want To Delete ? ")) {
                this.social_chargesSubs = this.social_chargesApi.deleteSocialCharge('mass', parameter).subscribe(function (res) {
                    if (res == 1) {
                        location.reload();
                    }
                }, console.error);
            }
        }
        return false;
    };
    SocialChargeOverviewComponent.prototype.deleteSocialCharge = function (id, type, self) {
        var parameter = {};
        if (confirm("Are You Sure Want To Delete ? ")) {
            this.social_chargesSubs = self.social_chargesApi.deleteSocialCharge(id, parameter).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    SocialChargeOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-charge-overview',
            template: __webpack_require__(/*! ./social-charge-overview.component.html */ "./src/app/Components/social-charges/social-charge-overview/social-charge-overview.component.html"),
            styles: [__webpack_require__(/*! ./social-charge-overview.component.css */ "./src/app/Components/social-charges/social-charge-overview/social-charge-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_social_charge_service__WEBPACK_IMPORTED_MODULE_2__["SocialChargeService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], SocialChargeOverviewComponent);
    return SocialChargeOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/social-charges/social-charges.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Components/social-charges/social-charges.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/social-charges/social-charges.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Components/social-charges/social-charges.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Components/social-charges/social-charges.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Components/social-charges/social-charges.component.ts ***!
  \***********************************************************************/
/*! exports provided: SocialChargesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialChargesComponent", function() { return SocialChargesComponent; });
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

var SocialChargesComponent = /** @class */ (function () {
    function SocialChargesComponent() {
    }
    SocialChargesComponent.prototype.ngOnInit = function () {
    };
    SocialChargesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-charges',
            template: __webpack_require__(/*! ./social-charges.component.html */ "./src/app/Components/social-charges/social-charges.component.html"),
            styles: [__webpack_require__(/*! ./social-charges.component.css */ "./src/app/Components/social-charges/social-charges.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialChargesComponent);
    return SocialChargesComponent;
}());



/***/ }),

/***/ "./src/app/Components/spots/spot-add/spot-add.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Components/spots/spot-add/spot-add.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/spots/spot-add/spot-add.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Components/spots/spot-add/spot-add.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ 'spota.spot' | translate }} </h4>\n    <p class=\"mg-b-0\"> {{ 'spota.new' | translate }}</p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ 'spota.add' | translate }}</h6>\n      <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'spota.name' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter name\"\n                     name=\"name\" #name=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'spota.ip' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter ip_address\"\n                     name=\"ip_address\" #ip_address=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'spota.nic' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter nic_address\"\n                     name=\"nic_address\" #nic_address=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n        </div><!-- form-layout -->\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ 'globals.sub' | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/spots/spot-add/spot-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/spots/spot-add/spot-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: SpotAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotAddComponent", function() { return SpotAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_spot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/spot.service */ "./src/app/Services/spot.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SpotAddComponent = /** @class */ (function () {
    function SpotAddComponent(spotsApi, router, translate, titleService) {
        this.spotsApi = spotsApi;
        this.router = router;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    SpotAddComponent.prototype.ngOnInit = function () {
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_3__(".float-input");
            float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2)); });
            float_inputs.on('change', function () {
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2));
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__("input").on('change', function () {
                c.formChanged = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__("select").on('change', function () {
                c.formChanged = true;
            });
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("spota.new"));
        });
    };
    SpotAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.spotsSubs = this.spotsApi.addSpot(parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/spots']);
                location.reload();
            }
        }, console.error);
    };
    SpotAddComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/spots']);
            } });
        }
        else {
            this.router.navigate(['/spots']);
        }
        return false;
    };
    SpotAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spot-add',
            template: __webpack_require__(/*! ./spot-add.component.html */ "./src/app/Components/spots/spot-add/spot-add.component.html"),
            styles: [__webpack_require__(/*! ./spot-add.component.css */ "./src/app/Components/spots/spot-add/spot-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_spot_service__WEBPACK_IMPORTED_MODULE_1__["SpotService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], SpotAddComponent);
    return SpotAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/spots/spot-edit/spot-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Components/spots/spot-edit/spot-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/spots/spot-edit/spot-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Components/spots/spot-edit/spot-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\"> {{ 'spote.spot' | translate }}</h4>\n    <p class=\"mg-b-0\">{{ 'spote.edit' | translate }} </p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\"> {{ 'spote.edit' | translate }}</h6>\n      <form *ngIf=\"spot\" #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'spote.name' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter name\"\n                     name=\"name\" #name=\"ngModel\" ngModel [ngModel]=\"spot.name\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'spote.ip' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter ip_address\"\n                     name=\"ip_address\" #ip_address=\"ngModel\" ngModel [ngModel]=\"spot.ip_address\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'spote.nic' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter nic_address\"\n                     name=\"nic_address\" #nic_address=\"ngModel\" ngModel [ngModel]=\"spot.nic_address\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n        </div><!-- form-layout -->\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\"> {{ 'globals.sub' | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/spots/spot-edit/spot-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/spots/spot-edit/spot-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: SpotEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotEditComponent", function() { return SpotEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_spot_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/spot.service */ "./src/app/Services/spot.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SpotEditComponent = /** @class */ (function () {
    function SpotEditComponent(spotsApi, router, route, translate, titleService) {
        this.spotsApi = spotsApi;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    SpotEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spotsSubs = this.spotsApi.getSpot(this.route.params['value']['rule_id']).subscribe(function (res) {
            _this.spot = res['spot'];
            var c = _this;
            jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
                var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_3__(".float-input");
                float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2)); });
                float_inputs.on('change', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2));
                });
                jquery__WEBPACK_IMPORTED_MODULE_3__("input").on('change', function () {
                    c.formChanged = true;
                });
                jquery__WEBPACK_IMPORTED_MODULE_3__("select").on('change', function () {
                    c.formChanged = true;
                });
                c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("spote.edit"));
            });
        });
    };
    SpotEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.spotsSubs = this.spotsApi.editSpot(this.spot.id, parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/spots']);
                location.reload();
            }
        }, console.error);
    };
    SpotEditComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/spots']);
            } });
        }
        else {
            this.router.navigate(['/spots']);
        }
        return false;
    };
    SpotEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spot-edit',
            template: __webpack_require__(/*! ./spot-edit.component.html */ "./src/app/Components/spots/spot-edit/spot-edit.component.html"),
            styles: [__webpack_require__(/*! ./spot-edit.component.css */ "./src/app/Components/spots/spot-edit/spot-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_spot_service__WEBPACK_IMPORTED_MODULE_1__["SpotService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], SpotEditComponent);
    return SpotEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/spots/spot-overview/spot-overview.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/Components/spots/spot-overview/spot-overview.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/spots/spot-overview/spot-overview.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/spots/spot-overview/spot-overview.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n    <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\"> {{ 'spoto.spot' | translate }} </h4>\n        <p class=\"mg-b-0\"> {{ 'spoto.list' | translate }} </p>\n    </div><!-- d-flex -->\n    <div class=\"br-pagebody\">\n        <div class=\"br-section-wrapper\">\n            <div class=\"text-left\">\n                <a routerLink=\"/users\" class=\"btn btn-primary\"><i class=\"fa fa-long-arrow-left fa-lg\"><span style=\"font-family: Roboto, 'Helvetica Neue', Arial, sans-serif\"> {{ \"usera.user\" | translate }}</span></i></a>\n                <div class=\"float-right\">\n                    <a href=\"#\" (click)=\"massDeleteSpots()\" class=\"btn btn-danger mg-r-10\" *ngIf=\"delete\">   {{ 'globals.mass' | translate }}</a>\n                    <a routerLink=\"/spots/add\" class=\"btn btn-success\" *ngIf=\"add\">   {{ 'globals.new' | translate }}</a>\n                </div>\n            </div>\n            <hr>\n            <ag-grid-angular\n                    style=\"width: 100%;\"\n                    class=\"ag-theme-material\"\n                    [rowData]=\"rowData\"\n                    [columnDefs]=\"columnDefs\"\n                    [enableSorting]=\"true\"\n                    [enableFilter]=\"true\"\n                    [frameworkComponents]=\"frameworkComponents\"\n                    rowSelection=\"multiple\"\n                    [rowMultiSelectWithClick]=\"true\"\n                    (gridReady)=\"onGridReady($event)\"\n                    (firstDataRendered)=\"onFirstDataRendered($event)\"\n                    (gridSizeChanged)=\"onFirstDataRendered($event)\"\n                    domLayout='autoHeight'\n                    pagination=\"true\"\n                    paginationPageSize=\"10\"\n            >\n            </ag-grid-angular>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/spots/spot-overview/spot-overview.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Components/spots/spot-overview/spot-overview.component.ts ***!
  \***************************************************************************/
/*! exports provided: SpotOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotOverviewComponent", function() { return SpotOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_spot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/spot.service */ "./src/app/Services/spot.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpotOverviewComponent = /** @class */ (function () {
    function SpotOverviewComponent(spotsApi, translate, titleService) {
        this.spotsApi = spotsApi;
        this.translate = translate;
        this.titleService = titleService;
        this.columnDefs = [];
        this.rowData = [];
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.frameworkComponents = {
            actionsFormatterComponent: _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
        };
    }
    SpotOverviewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
    };
    SpotOverviewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    SpotOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spotsSubs = this.spotsApi.getSpots().subscribe(function (res) {
            _this.spots = res['spots'];
            _this.add = res['add'];
            _this.edit = res['edit'];
            _this.delete = res['delete'];
            _this.columnDefs = [
                { headerName: 'Name', field: 'name' },
                { headerName: 'Ip Address', field: 'ip_address' },
                { headerName: 'NIC Address', field: 'nic_address' },
                { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
            ];
            for (var i = 0; i < _this.spots.length; i++) {
                _this.spots[i]['actions'] = {
                    'api': _this.spotsApi,
                    'id': _this.spots[i].id,
                    'delete': [_this.delete, _this.deleteSpot],
                    'edit': [_this.edit, '/spots/edit/'],
                    'self': _this
                };
            }
            _this.rowData = _this.spots;
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("spoto.spot"));
        });
    };
    SpotOverviewComponent.prototype.massDeleteSpots = function () {
        var nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids = nodes.map(function (row) { return row.data.id; });
            var parameter = { ids: ids };
            if (confirm("Are You Sure Want To Delete ? ")) {
                this.spotsSubs = this.spotsApi.deleteSpot('mass', parameter).subscribe(function (res) {
                    if (res == 1) {
                        location.reload();
                    }
                }, console.error);
            }
        }
        return false;
    };
    SpotOverviewComponent.prototype.deleteSpot = function (id, spotsApi, self) {
        var parameter = {};
        if (confirm("Are You Sure Want To Delete ? ")) {
            this.spotsSubs = self.spotsApi.deleteSpot(id, parameter).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    SpotOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spot-overview',
            template: __webpack_require__(/*! ./spot-overview.component.html */ "./src/app/Components/spots/spot-overview/spot-overview.component.html"),
            styles: [__webpack_require__(/*! ./spot-overview.component.css */ "./src/app/Components/spots/spot-overview/spot-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_spot_service__WEBPACK_IMPORTED_MODULE_2__["SpotService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], SpotOverviewComponent);
    return SpotOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/spots/spots.component.css":
/*!******************************************************!*\
  !*** ./src/app/Components/spots/spots.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/spots/spots.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Components/spots/spots.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Components/spots/spots.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/spots/spots.component.ts ***!
  \*****************************************************/
/*! exports provided: SpotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotsComponent", function() { return SpotsComponent; });
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

var SpotsComponent = /** @class */ (function () {
    function SpotsComponent() {
    }
    SpotsComponent.prototype.ngOnInit = function () {
    };
    SpotsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spots',
            template: __webpack_require__(/*! ./spots.component.html */ "./src/app/Components/spots/spots.component.html"),
            styles: [__webpack_require__(/*! ./spots.component.css */ "./src/app/Components/spots/spots.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpotsComponent);
    return SpotsComponent;
}());



/***/ }),

/***/ "./src/app/Components/taxes/tax-add/tax-add.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Components/taxes/tax-add/tax-add.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/taxes/tax-add/tax-add.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Components/taxes/tax-add/tax-add.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n    <div class=\"pd-30\">\n        <h4 class=\"tx-gray-800 mg-b-5\"> {{ 'taxa.tax' | translate }}</h4>\n        <p class=\"mg-b-0\">{{ 'taxa.new' | translate }} </p>\n    </div>\n    <div class=\"br-pagebody\">\n        <div class=\"br-section-wrapper\">\n            <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ 'taxa.add' | translate }}</h6>\n            <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n                <div class=\"form-layout-footer mg-b-30 text-right\">\n                    <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n                <div class=\"form-layout form-layout-6\">\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ 'taxa.acc' | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <select id=\"select2-c\" class=\"form-control select2-hidden-accessible\"\n                                    aria-hidden=\"true\" name=\"account_id\" #account_id=\"ngModel\" ngModel [ngModel]=\"0\">\n                                <option value=\"0\" selected=\"\">{{ 'taxa.select' | translate }}</option>\n                                <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\">{{account.code}}</option>\n                            </select>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ 'taxa.name' | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"text\" placeholder=\"Enter Branch Name\"\n                                   name=\"name\" #name=\"ngModel\" ngModel>\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ 'taxa.init' | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"date\"\n                                   name=\"initial_date\" #initial_date=\"ngModel\" ngModel placeholder=\"Enter Area\">\n                        </div>\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ 'taxa.final' | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control\" type=\"date\"\n                                   name=\"final_date\" #final_date=\"ngModel\" ngModel placeholder=\"Enter Monthly Interest:\">\n                        </div>\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ 'taxa.purch' | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\"\n                                   name=\"purchase_pct\" #purchase_pct=\"ngModel\" ngModel placeholder=\"Enter Avg Quantity Months\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                    <div class=\"row no-gutters\">\n                        <div class=\"col-5 col-sm-4 col-md-3\">\n                            {{ 'taxa.sale' | translate }}\n                        </div><!-- col-4 -->\n                        <div class=\"col-7 col-sm-8 col-md-9\">\n                            <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\"\n                                   name=\"sale_pct\" #sale_pct=\"ngModel\" ngModel placeholder=\"Enter Work hours per day\">\n                        </div><!-- col-8 -->\n                    </div><!-- row -->\n                </div><!-- form-layout -->\n                <hr>\n                <div class=\"form-layout-footer mg-t-30 text-center\">\n                    <button class=\"btn btn-info\" type=\"submit\"> {{ 'globals.sub' | translate }}</button>\n                    <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                            (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/taxes/tax-add/tax-add.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/taxes/tax-add/tax-add.component.ts ***!
  \***************************************************************/
/*! exports provided: TaxAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxAddComponent", function() { return TaxAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/account.service */ "./src/app/Services/account.service.ts");
/* harmony import */ var _Services_tax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/tax.service */ "./src/app/Services/tax.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TaxAddComponent = /** @class */ (function () {
    function TaxAddComponent(accountsApi, taxesApi, router, translate, titleService) {
        this.accountsApi = accountsApi;
        this.taxesApi = taxesApi;
        this.router = router;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    TaxAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(function (res) {
            _this.accounts = res['accounts'];
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
            var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_4__(".float-input");
            float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2)); });
            float_inputs.on('change', function () {
                jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2));
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("input").on('change', function () {
                c.formChanged = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_4__("select").on('change', function () {
                c.formChanged = true;
            });
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("taxa.new"));
        });
    };
    TaxAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.taxesSubs = this.taxesApi.addTax(parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/taxes']);
                location.reload();
            }
        }, console.error);
    };
    TaxAddComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/taxes']);
            } });
        }
        else {
            this.router.navigate(['/taxes']);
        }
        return false;
    };
    TaxAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tax-add',
            template: __webpack_require__(/*! ./tax-add.component.html */ "./src/app/Components/taxes/tax-add/tax-add.component.html"),
            styles: [__webpack_require__(/*! ./tax-add.component.css */ "./src/app/Components/taxes/tax-add/tax-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"], _Services_tax_service__WEBPACK_IMPORTED_MODULE_2__["TaxService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], TaxAddComponent);
    return TaxAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/taxes/tax-edit/tax-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Components/taxes/tax-edit/tax-edit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/taxes/tax-edit/tax-edit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Components/taxes/tax-edit/tax-edit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ 'taxe.tax' | translate }}</h4>\n    <p class=\"mg-b-0\">{{ 'taxe.edit' | translate }}</p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\"> {{ 'taxe.edit' | translate }}</h6>\n      <form *ngIf=\"tax\" #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'taxe.acc' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <select id=\"select2-c\" class=\"form-control select2-hidden-accessible\"\n                      aria-hidden=\"true\" name=\"account_id\" #account_id=\"ngModel\" ngModel [ngModel]=\"tax.account_id\">\n                <option value=\"0\" selected=\"\"> {{ 'taxe.select' | translate }}</option>\n                <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\">{{account.code}}</option>\n              </select>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'taxe.name' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter Branch Name\"\n                     name=\"name\" #name=\"ngModel\" ngModel [ngModel]=\"tax.name\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'taxe.init' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\"\n                     name=\"initial_date\" #initial_date=\"ngModel\" ngModel placeholder=\"Enter Area\" [ngModel]=\"tax.initial_date\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'taxe.final' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\"\n                     name=\"final_date\" #final_date=\"ngModel\" ngModel placeholder=\"Enter Monthly Interest:\" [ngModel]=\"tax.final_date\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'taxe.purch' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\"\n                     name=\"purchase_pct\" #purchase_pct=\"ngModel\" ngModel placeholder=\"Enter Avg Quantity Months\" [ngModel]=\"tax.purchase_pct\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'taxe.sale' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control float-input\" min=\"0\"  step=\"0.01\" type=\"number\"\n                     name=\"sale_pct\" #sale_pct=\"ngModel\" ngModel placeholder=\"Enter Work hours per day\" [ngModel]=\"tax.sale_pct\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n        </div><!-- form-layout -->\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\"> {{ 'globals.sub' | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/taxes/tax-edit/tax-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/taxes/tax-edit/tax-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: TaxEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxEditComponent", function() { return TaxEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/account.service */ "./src/app/Services/account.service.ts");
/* harmony import */ var _Services_tax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/tax.service */ "./src/app/Services/tax.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TaxEditComponent = /** @class */ (function () {
    function TaxEditComponent(accountsApi, taxesApi, router, route, translate, titleService) {
        this.accountsApi = accountsApi;
        this.taxesApi = taxesApi;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    TaxEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountsSubs = this.accountsApi.getAccounts().subscribe(function (res) {
            _this.accounts = res['accounts'];
        });
        this.taxesSubs = this.taxesApi.getTax(this.route.params['value']['rule_id']).subscribe(function (res) {
            _this.tax = res['tax'];
            var c = _this;
            jquery__WEBPACK_IMPORTED_MODULE_4__(document).ready(function () {
                var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_4__(".float-input");
                float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2)); });
                float_inputs.on('change', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_4__(this).val()).toFixed(2));
                });
                jquery__WEBPACK_IMPORTED_MODULE_4__("input").on('change', function () {
                    c.formChanged = true;
                });
                jquery__WEBPACK_IMPORTED_MODULE_4__("select").on('change', function () {
                    c.formChanged = true;
                });
                c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("taxe.edit"));
            });
        });
    };
    TaxEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var parameter = JSON.stringify(f.value);
        this.taxesSubs = this.taxesApi.editTax(this.tax.id, parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/taxes']);
                location.reload();
            }
        }, console.error);
    };
    TaxEditComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/taxes']);
            } });
        }
        else {
            this.router.navigate(['/taxes']);
        }
        return false;
    };
    TaxEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tax-edit',
            template: __webpack_require__(/*! ./tax-edit.component.html */ "./src/app/Components/taxes/tax-edit/tax-edit.component.html"),
            styles: [__webpack_require__(/*! ./tax-edit.component.css */ "./src/app/Components/taxes/tax-edit/tax-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"], _Services_tax_service__WEBPACK_IMPORTED_MODULE_2__["TaxService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], TaxEditComponent);
    return TaxEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/taxes/tax-overview/tax-overview.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/Components/taxes/tax-overview/tax-overview.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/taxes/tax-overview/tax-overview.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Components/taxes/tax-overview/tax-overview.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\"> {{ 'taxo.tax' | translate }} </h4>\n    <p class=\"mg-b-0\">{{ 'taxo.list' | translate }} </p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <div class=\"text-right\">\n        <a href=\"#\" (click)=\"massDeleteTaxes()\" class=\"btn btn-danger mg-r-10\" *ngIf=\"delete\">{{ \"globals.mass\" | translate }}</a>\n        <a routerLink=\"/taxes/add\" class=\"btn btn-success\" *ngIf=\"add\"> {{ 'globals.new' | translate }}</a>\n      </div>\n      <hr>\n      <ag-grid-angular\n              style=\"width: 100%;\"\n              class=\"ag-theme-material\"\n              [rowData]=\"rowData\"\n              [columnDefs]=\"columnDefs\"\n              [enableSorting]=\"true\"\n              [enableFilter]=\"true\"\n              [frameworkComponents]=\"frameworkComponents\"\n              rowSelection=\"multiple\"\n              [rowMultiSelectWithClick]=\"true\"\n              (gridReady)=\"onGridReady($event)\"\n              (firstDataRendered)=\"onFirstDataRendered($event)\"\n              (gridSizeChanged)=\"onFirstDataRendered($event)\"\n              domLayout='autoHeight'\n              pagination=\"true\"\n              paginationPageSize=\"10\"\n      >\n      </ag-grid-angular>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/taxes/tax-overview/tax-overview.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/taxes/tax-overview/tax-overview.component.ts ***!
  \*************************************************************************/
/*! exports provided: TaxOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxOverviewComponent", function() { return TaxOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_tax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/tax.service */ "./src/app/Services/tax.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaxOverviewComponent = /** @class */ (function () {
    function TaxOverviewComponent(taxesApi, translate, titleService) {
        this.taxesApi = taxesApi;
        this.translate = translate;
        this.titleService = titleService;
        this.columnDefs = [];
        this.rowData = [];
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.frameworkComponents = {
            actionsFormatterComponent: _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
        };
    }
    TaxOverviewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
    };
    TaxOverviewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    TaxOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taxesSubs = this.taxesApi.getTaxes().subscribe(function (res) {
            _this.taxes = res['taxes'];
            _this.add = res['add'];
            _this.edit = res['edit'];
            _this.delete = res['delete'];
            _this.columnDefs = [
                { headerName: 'Name', field: 'name' },
                { headerName: 'Initial Date', field: 'initial_date' },
                { headerName: 'Final Date', field: 'final_date' },
                { headerName: 'Purchase Pct', field: 'purchase_pct' },
                { headerName: 'Sale Pct', field: 'sale_pct' },
                { headerName: 'Account', field: 'account_name' },
                { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
            ];
            for (var i = 0; i < _this.taxes.length; i++) {
                _this.taxes[i]['actions'] = {
                    'self': _this,
                    'id': _this.taxes[i].id,
                    'delete': [_this.delete, _this.deleteTax],
                    'edit': [_this.edit, '/taxes/edit/']
                };
            }
            _this.rowData = _this.taxes;
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_5__(document).ready(function () {
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("taxo.tax"));
        });
    };
    TaxOverviewComponent.prototype.massDeleteTaxes = function () {
        var nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids = nodes.map(function (row) { return row.data.id; });
            var parameter = { ids: ids };
            if (confirm("Are You Sure Want To Delete ? ")) {
                this.taxesSubs = this.taxesApi.deleteTax('mass', parameter).subscribe(function (res) {
                    if (res == 1) {
                        location.reload();
                    }
                }, console.error);
            }
        }
        return false;
    };
    TaxOverviewComponent.prototype.deleteTax = function (id, type, self) {
        var parameter = {};
        if (confirm("Are You Sure Want To Delete ? ")) {
            this.taxesSubs = self.taxesApi.deleteTax(id, parameter).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    TaxOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tax-overview',
            template: __webpack_require__(/*! ./tax-overview.component.html */ "./src/app/Components/taxes/tax-overview/tax-overview.component.html"),
            styles: [__webpack_require__(/*! ./tax-overview.component.css */ "./src/app/Components/taxes/tax-overview/tax-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_tax_service__WEBPACK_IMPORTED_MODULE_2__["TaxService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], TaxOverviewComponent);
    return TaxOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/taxes/taxes.component.css":
/*!******************************************************!*\
  !*** ./src/app/Components/taxes/taxes.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/taxes/taxes.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Components/taxes/taxes.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Components/taxes/taxes.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/taxes/taxes.component.ts ***!
  \*****************************************************/
/*! exports provided: TaxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxesComponent", function() { return TaxesComponent; });
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

var TaxesComponent = /** @class */ (function () {
    function TaxesComponent() {
    }
    TaxesComponent.prototype.ngOnInit = function () {
    };
    TaxesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-taxes',
            template: __webpack_require__(/*! ./taxes.component.html */ "./src/app/Components/taxes/taxes.component.html"),
            styles: [__webpack_require__(/*! ./taxes.component.css */ "./src/app/Components/taxes/taxes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaxesComponent);
    return TaxesComponent;
}());



/***/ }),

/***/ "./src/app/Components/users/user-add/user-add.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Components/users/user-add/user-add.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/users/user-add/user-add.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Components/users/user-add/user-add.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ 'usera.user' | translate }} </h4>\n    <p class=\"mg-b-0\">{{ 'usera.new' | translate }} </p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ 'usera.add' | translate }}</h6>\n      <form #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'usera.name' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter attribute\"\n                     name=\"name\" #name=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'usera.pass' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"password\" placeholder=\"Enter password\"\n                     name=\"password\" #password=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'usera.full' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter full_name\"\n                     name=\"full_name\" #full_name=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'usera.email' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter full_name\"\n                     name=\"email\" #email=\"ngModel\" ngModel>\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'usera.act' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input type=\"checkbox\"\n                     name=\"active_flag\" #active_flag=\"ngModel\" ngModel>\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'usera.init' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\"\n                     name=\"initial_date\" #initial_date=\"ngModel\" ngModel placeholder=\"Enter Area\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'usera.final' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\"\n                     name=\"final_date\" #final_date=\"ngModel\" ngModel placeholder=\"Enter Monthly Interest:\">\n            </div>\n          </div><!-- row -->\n\n        </div><!-- form-layout -->\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\"> {{ 'globals.sub' | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/users/user-add/user-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Components/users/user-add/user-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserAddComponent = /** @class */ (function () {
    function UserAddComponent(userApi, router, translate, titleService) {
        this.userApi = userApi;
        this.router = router;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    UserAddComponent.prototype.ngOnInit = function () {
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_3__(".float-input");
            float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2)); });
            float_inputs.on('change', function () {
                jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2));
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__("input").on('change', function () {
                c.formChanged = true;
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__("select").on('change', function () {
                c.formChanged = true;
            });
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("usera.new"));
        });
    };
    UserAddComponent.prototype.onSubmit = function (f) {
        var _this = this;
        f.value.active_flag = (f.value.active_flag) ? 1 : 0;
        var parameter = JSON.stringify(f.value);
        this.usersSubs = this.userApi.addUser(parameter).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/users']);
                location.reload();
            }
        }, console.error);
    };
    UserAddComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/users']);
            } });
        }
        else {
            this.router.navigate(['/users']);
        }
        return false;
    };
    UserAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-add',
            template: __webpack_require__(/*! ./user-add.component.html */ "./src/app/Components/users/user-add/user-add.component.html"),
            styles: [__webpack_require__(/*! ./user-add.component.css */ "./src/app/Components/users/user-add/user-add.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], UserAddComponent);
    return UserAddComponent;
}());



/***/ }),

/***/ "./src/app/Components/users/user-edit/user-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Components/users/user-edit/user-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/users/user-edit/user-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Components/users/user-edit/user-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">{{ 'usere.user' | translate }} </h4>\n    <p class=\"mg-b-0\">{{ 'usere.edit' | translate }} </p>\n  </div>\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <h6 class=\"tx-gray-800 tx-uppercase tx-bold tx-14 mg-b-10\">{{ 'usere.edit' | translate }}</h6>\n      <form *ngIf=\"user\" #f=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(f);\">\n        <div class=\"form-layout-footer mg-b-30 text-right\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ \"globals.sub\" | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n        <div class=\"form-layout form-layout-6\">\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'usere.name' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter attribute\"\n                     name=\"name\" #name=\"ngModel\" ngModel [ngModel]=\"user.name\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'usere.pass' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"password\" placeholder=\"Enter password\"\n                     name=\"password\" #password=\"ngModel\" ngModel >\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'usere.full' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter full_name\"\n                     name=\"full_name\" #full_name=\"ngModel\" ngModel [ngModel]=\"user.full_name\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'usere.email' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"text\" placeholder=\"Enter full_name\"\n                     name=\"email\" #email=\"ngModel\" ngModel [ngModel]=\"user.email\">\n            </div><!-- col-8 -->\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'usere.act' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input type=\"checkbox\" [ngModel]=\"user.active_flag\"\n                     name=\"active_flag\" #active_flag=\"ngModel\" ngModel>\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'usere.init' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\" [ngModel]=\"user.initial_date\"\n                     name=\"initial_date\" #initial_date=\"ngModel\" ngModel placeholder=\"Enter Area\">\n            </div>\n          </div><!-- row -->\n          <div class=\"row no-gutters\">\n            <div class=\"col-5 col-sm-4 col-md-3\">\n              {{ 'usere.final' | translate }}\n            </div><!-- col-4 -->\n            <div class=\"col-7 col-sm-8 col-md-9\">\n              <input class=\"form-control\" type=\"date\" [ngModel]=\"user.final_date\"\n                     name=\"final_date\" #final_date=\"ngModel\" ngModel placeholder=\"Enter Monthly Interest:\">\n            </div>\n          </div><!-- row -->\n\n        </div><!-- form-layout -->\n        <hr>\n        <div class=\"form-layout-footer mg-t-30 text-center\">\n          <button class=\"btn btn-info\" type=\"submit\">{{ 'globals.sub' | translate }}</button>\n          <button class=\"text-white btn btn-secondary cancel-edit ml-3\"\n                  (click)=\"onCancel()\">{{ \"globals.cancel\" | translate }}</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/users/user-edit/user-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/users/user-edit/user-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(usersApi, router, route, translate, titleService) {
        this.usersApi = usersApi;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.titleService = titleService;
        this.formChanged = false;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubs = this.usersApi.getUser(this.route.params['value']['rule_id']).subscribe(function (res) {
            _this.user = res['user'];
            var c = _this;
            jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
                var float_inputs = jquery__WEBPACK_IMPORTED_MODULE_3__(".float-input");
                float_inputs.each(function () { jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2)); });
                float_inputs.on('change', function () {
                    jquery__WEBPACK_IMPORTED_MODULE_3__(this).val(parseFloat(jquery__WEBPACK_IMPORTED_MODULE_3__(this).val()).toFixed(2));
                });
                jquery__WEBPACK_IMPORTED_MODULE_3__("input").on('change', function () {
                    c.formChanged = true;
                });
                jquery__WEBPACK_IMPORTED_MODULE_3__("select").on('change', function () {
                    c.formChanged = true;
                });
                c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("usere.edit"));
            });
        });
    };
    UserEditComponent.prototype.onSubmit = function (f) {
        var _this = this;
        f.value.active_flag = (f.value.active_flag) ? 1 : 0;
        var user = JSON.stringify(f.value);
        this.userSubs = this.usersApi.editUser(this.user.id, user).subscribe(function (res) {
            if (res == 1) {
                _this.router.navigate(['/users']);
                location.reload();
            }
        }, console.error);
    };
    UserEditComponent.prototype.onCancel = function () {
        if (this.formChanged) {
            var c_1 = this;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({ type: 'warning', title: this.translate.instant("globals.are_you_sure"), text: this.translate.instant("globals.changes_will_be_lost"), showCancelButton: true })
                .then(function (result) { if (!result.dismiss) {
                c_1.router.navigate(['/users']);
            } });
        }
        else {
            this.router.navigate(['/users']);
        }
        return false;
    };
    UserEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/Components/users/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.css */ "./src/app/Components/users/user-edit/user-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/Components/users/user-overview/user-overview.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/Components/users/user-overview/user-overview.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/users/user-overview/user-overview.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/Components/users/user-overview/user-overview.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ########## START: MAIN PANEL ########## -->\n<div class=\"br-mainpanel\" xmlns=\"\">\n  <div class=\"pd-30\">\n    <h4 class=\"tx-gray-800 mg-b-5\">  {{ 'usero.user' | translate }}  </h4>\n    <p class=\"mg-b-0\"> {{ 'usero.list' | translate }} </p>\n  </div><!-- d-flex -->\n  <div class=\"br-pagebody\">\n    <div class=\"br-section-wrapper\">\n      <div class=\"text-right\">\n        <a href=\"#\" (click)=\"massDeleteUser()\" class=\"btn btn-danger mg-r-10\" *ngIf=\"delete\">{{ \"globals.mass\" | translate }}</a>\n        <a routerLink=\"/users/add\" class=\"btn btn-success mg-r-10\" *ngIf=\"add\"> {{ 'globals.new' | translate }} </a>\n        <a routerLink=\"/spots\" class=\"btn btn-warning\"> {{ 'usero.manage' | translate }} </a>\n      </div>\n      <hr>\n      <ag-grid-angular\n              style=\"width: 100%;\"\n              class=\"ag-theme-material\"\n              [rowData]=\"rowData\"\n              [columnDefs]=\"columnDefs\"\n              [enableSorting]=\"true\"\n              [enableFilter]=\"true\"\n              [frameworkComponents]=\"frameworkComponents\"\n              rowSelection=\"multiple\"\n              [rowMultiSelectWithClick]=\"true\"\n              (gridReady)=\"onGridReady($event)\"\n              (firstDataRendered)=\"onFirstDataRendered($event)\"\n              (gridSizeChanged)=\"onFirstDataRendered($event)\"\n              domLayout='autoHeight'\n              pagination=\"true\"\n              paginationPageSize=\"10\"\n      >\n      </ag-grid-angular>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Components/users/user-overview/user-overview.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Components/users/user-overview/user-overview.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOverviewComponent", function() { return UserOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/user.service */ "./src/app/Services/user.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserOverviewComponent = /** @class */ (function () {
    function UserOverviewComponent(userApi, translate, titleService) {
        this.userApi = userApi;
        this.translate = translate;
        this.titleService = titleService;
        this.add = false;
        this.edit = false;
        this.delete = false;
        this.columnDefs = [];
        this.rowData = [];
        this.frameworkComponents = {
            actionsFormatterComponent: _partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_1__["ActionsFormatterComponent"],
        };
    }
    UserOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSubs = this.userApi.getUsers().subscribe(function (res) {
            _this.users = res['users'];
            _this.add = res['add'];
            _this.edit = res['edit'];
            _this.delete = res['delete'];
            _this.columnDefs = [
                { headerName: 'Name', field: 'name' },
                { headerName: 'Full Name', field: 'full_name' },
                { headerName: 'Email ', field: 'email' },
                { headerName: 'Active ', field: 'active_flag', cellRendererParams: { c: _this }, cellRenderer: function (params) {
                        var c = params.c;
                        if (params.value == 0) {
                            return c.translate.instant("usero.not_active");
                        }
                        else if (params.value == 1) {
                            return c.translate.instant("usero.active");
                        }
                    } },
                { headerName: 'Initial Date', field: 'initial_date' },
                { headerName: 'Final Date ', field: 'final_date' },
                { headerName: 'Actions', field: 'actions', cellRenderer: 'actionsFormatterComponent' },
            ];
            for (var i = 0; i < _this.users.length; i++) {
                _this.users[i]['details'] = { 'id': i, 'gridApi': _this.gridApi, 'gridColumnApi': _this.gridColumnApi };
                _this.users[i]['actions'] = {
                    'api': _this.userApi,
                    'id': _this.users[i].id,
                    'delete': [_this.delete, _this.deleteUser],
                    'edit': [_this.edit, '/users/edit/']
                };
            }
            _this.rowData = _this.users;
        });
        var c = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            c.titleService.setTitle(c.translate.instant("globals.project") + ' - ' + c.translate.instant("usero.user"));
        });
    };
    UserOverviewComponent.prototype.onFirstDataRendered = function (params) {
        params.api.sizeColumnsToFit();
    };
    UserOverviewComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };
    UserOverviewComponent.prototype.deleteUser = function (id, userApi) {
        var user = {};
        if (confirm("Are You Sure Want To Delete ? ")) {
            this.userSubs = userApi.deleteUser(id, user).subscribe(function (res) {
                if (res == 1) {
                    location.reload();
                }
            }, console.error);
        }
        return false;
    };
    UserOverviewComponent.prototype.massDeleteUser = function () {
        var nodes = this.gridApi.getSelectedNodes();
        if (nodes.length == 0)
            alert("No Rows Selected");
        else {
            var ids = nodes.map(function (row) { return row.data.id; });
            var user = { ids: ids };
            if (confirm("Are You Sure Want To Delete ? ")) {
                this.userSubs = this.userApi.deleteUser('mass', user).subscribe(function (res) {
                    if (res == 1) {
                        location.reload();
                    }
                }, console.error);
            }
        }
        return false;
    };
    UserOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-overview',
            template: __webpack_require__(/*! ./user-overview.component.html */ "./src/app/Components/users/user-overview/user-overview.component.html"),
            styles: [__webpack_require__(/*! ./user-overview.component.css */ "./src/app/Components/users/user-overview/user-overview.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], UserOverviewComponent);
    return UserOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Components/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/Components/users/users.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/Components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
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

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/Components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/Components/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/Services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    AccountService_1 = AccountService;
    AccountService._handleError = function (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Error: Unable to complete request.');
    };
    AccountService.prototype.getAccounts = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/accounts")
            .catch(AccountService_1._handleError);
    };
    AccountService.prototype.getAccountCostCenters = function (account_id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/accounts/cost_centers/" + account_id)
            .catch(AccountService_1._handleError);
    };
    AccountService.prototype.addAccount = function (parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/accounts/add", parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    AccountService.prototype.addAccountCostCenter = function (account_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/accounts/cost_centers/" + account_id + "/add", parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return res['id'];
            }
        }, function (err) {
            return 0;
        });
    };
    AccountService.prototype.editAccountCostCenter = function (account_id, parameter, account_cost_center_id) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/accounts/cost_centers/" + account_id + "/edit/" + account_cost_center_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return res['id'];
            }
        }, function (err) {
            return 0;
        });
    };
    AccountService.prototype.deleteAccount = function (account_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/accounts/delete/" + account_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    AccountService.prototype.deleteAccountCostCenter = function (account_id, parameter, account_cost_center_id) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/accounts/cost_centers/" + account_id + "/delete/" + account_cost_center_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    AccountService.prototype.getAccount = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/account/" + id)
            .catch(AccountService_1._handleError);
    };
    AccountService.prototype.editAccount = function (account_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/accounts/edit/" + account_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    var AccountService_1;
    AccountService = AccountService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/Services/asset-type.service.ts":
/*!************************************************!*\
  !*** ./src/app/Services/asset-type.service.ts ***!
  \************************************************/
/*! exports provided: AssetTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetTypeService", function() { return AssetTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssetTypeService = /** @class */ (function () {
    function AssetTypeService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    AssetTypeService_1 = AssetTypeService;
    AssetTypeService._handleError = function (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Error: Unable to complete request.');
    };
    AssetTypeService.prototype.getAssetTypes = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/asset_types")
            .catch(AssetTypeService_1._handleError);
    };
    AssetTypeService.prototype.addAssetType = function (parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/asset_types/add", parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    AssetTypeService.prototype.deleteAssetType = function (asset_type_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/asset_types/delete/" + asset_type_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    AssetTypeService.prototype.getAssetType = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/asset_type/" + id)
            .catch(AssetTypeService_1._handleError);
    };
    AssetTypeService.prototype.editAssetType = function (asset_type_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/asset_types/edit/" + asset_type_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    var AssetTypeService_1;
    AssetTypeService = AssetTypeService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AssetTypeService);
    return AssetTypeService;
}());



/***/ }),

/***/ "./src/app/Services/asset.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/asset.service.ts ***!
  \*******************************************/
/*! exports provided: AssetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetService", function() { return AssetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssetService = /** @class */ (function () {
    function AssetService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    AssetService_1 = AssetService;
    AssetService._handleError = function (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Error: Unable to complete request.');
    };
    AssetService.prototype.getAssets = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/assets")
            .catch(AssetService_1._handleError);
    };
    AssetService.prototype.getAssetCostCenters = function (asset_id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/assets/cost_centers/" + asset_id)
            .catch(AssetService_1._handleError);
    };
    AssetService.prototype.addAsset = function (asset) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/assets/add", asset, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    AssetService.prototype.addAssetCostCenter = function (asset_id, asset) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/assets/cost_centers/" + asset_id + "/add", asset, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return res['id'];
            }
        }, function (err) {
            return 0;
        });
    };
    AssetService.prototype.deleteAsset = function (asset_id, asset) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/assets/delete/" + asset_id, asset, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    AssetService.prototype.deleteAssetCostCenter = function (asset_id, asset, asset_cost_center_id) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/assets/cost_centers/" + asset_id + "/delete/" + asset_cost_center_id, asset, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    AssetService.prototype.getAsset = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/asset/" + id)
            .catch(AssetService_1._handleError);
    };
    AssetService.prototype.editAsset = function (asset_id, asset) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/assets/edit/" + asset_id, asset, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    AssetService.prototype.editAssetCostCenter = function (asset_id, asset, asset_cost_center_id) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/assets/cost_centers/" + asset_id + "/edit/" + asset_cost_center_id, asset, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    var AssetService_1;
    AssetService = AssetService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AssetService);
    return AssetService;
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
            if (res['message'] == 1) {
                localStorage.setItem('currentUser', res['user']);
                return 1;
            }
        }, function (err) {
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
                localStorage.setItem('lang', res['lang']);
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('lang');
        localStorage.removeItem('branch_id');
        localStorage.removeItem('branch_name');
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    BranchService_1 = BranchService;
    BranchService._handleError = function (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.message || 'Error: Unable to complete request.');
    };
    BranchService.prototype.getParents = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + "/branches/parent")
            .catch(BranchService_1._handleError);
    };
    BranchService.prototype.getBranches = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + "/branches")
            .catch(BranchService_1._handleError);
    };
    BranchService.prototype.getBranch = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + "/branch/" + id)
            .catch(BranchService_1._handleError);
    };
    BranchService.prototype.addBranch = function (parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + "/branches/add", parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    BranchService.prototype.editBranch = function (branch_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + "/branches/edit/" + branch_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    BranchService.prototype.deleteBranch = function (branch_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_1__["API_URL"] + "/branches/delete/" + branch_id, parameter, this.httpOptions).map(function (res) {
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

/***/ "./src/app/Services/cost-centers.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Services/cost-centers.service.ts ***!
  \**************************************************/
/*! exports provided: CostCentersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostCentersService", function() { return CostCentersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CostCentersService = /** @class */ (function () {
    function CostCentersService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    CostCentersService_1 = CostCentersService;
    CostCentersService._handleError = function (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err.message || 'Error: Unable to complete request.');
    };
    CostCentersService.prototype.addCostCenter = function (parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/cost_centers/add", parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    CostCentersService.prototype.addCostCenterRatio = function (type, val, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/cost_centers/" + type + "/" + val + "/add", parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return res['id'];
            }
        }, function (err) {
            return 0;
        });
    };
    CostCentersService.prototype.editCostCenterRatio = function (type, val, cost_center_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/cost_centers/" + type + "/" + val + "/edit/" + cost_center_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    CostCentersService.prototype.deleteCostCenterRatio = function (type, val, cost_center_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/cost_centers/" + type + "/" + val + "/delete/" + cost_center_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    CostCentersService.prototype.editCostCenter = function (id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/cost_centers/edit/" + id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    CostCentersService.prototype.getCostCenters = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/cost_centers")
            .catch(CostCentersService_1._handleError);
    };
    CostCentersService.prototype.deleteCostCenter = function (cost_center_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/cost_centers/delete/" + cost_center_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    CostCentersService.prototype.getCostCenter = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/cost_center/" + id)
            .catch(CostCentersService_1._handleError);
    };
    CostCentersService.prototype.getCostCenterRatio = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_2__["API_URL"] + "/cost_centers/ratio/" + id)
            .catch(CostCentersService_1._handleError);
    };
    var CostCentersService_1;
    CostCentersService = CostCentersService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], CostCentersService);
    return CostCentersService;
}());



/***/ }),

/***/ "./src/app/Services/cost-map.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/cost-map.service.ts ***!
  \**********************************************/
/*! exports provided: CostMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostMapService", function() { return CostMapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CostMapService = /** @class */ (function () {
    function CostMapService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    CostMapService_1 = CostMapService;
    CostMapService._handleError = function (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Error: Unable to complete request.');
    };
    CostMapService.prototype.getCostMaps = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/cost_maps")
            .catch(CostMapService_1._handleError);
    };
    CostMapService.prototype.addCostMap = function (parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/cost_maps/add", parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
            return res['errors'];
        }, function (err) {
            return 0;
        });
    };
    CostMapService.prototype.deleteCostMap = function (cost_map_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/cost_maps/delete/" + cost_map_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    CostMapService.prototype.recalcCostMap = function (cost_map_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/cost_map/recalculate/" + cost_map_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    CostMapService.prototype.inUseCostMap = function (cost_map_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/cost_map/in_use/" + cost_map_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    CostMapService.prototype.getCostMap = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/cost_map/" + id)
            .catch(CostMapService_1._handleError);
    };
    CostMapService.prototype.editCostMap = function (cost_map_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/cost_maps/edit/" + cost_map_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    var CostMapService_1;
    CostMapService = CostMapService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CostMapService);
    return CostMapService;
}());



/***/ }),

/***/ "./src/app/Services/employee.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/employee.service.ts ***!
  \**********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    EmployeeService_1 = EmployeeService;
    EmployeeService._handleError = function (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Error: Unable to complete request.');
    };
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/employees")
            .catch(EmployeeService_1._handleError);
    };
    EmployeeService.prototype.getEmployeeCostCenters = function (employee_id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/employees/cost_centers/" + employee_id)
            .catch(EmployeeService_1._handleError);
    };
    EmployeeService.prototype.addEmployee = function (employee) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/employees/add", employee, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    EmployeeService.prototype.addEmployeeCostCenter = function (employee_id, employee) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/employees/cost_centers/" + employee_id + "/add", employee, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return res['id'];
            }
        }, function (err) {
            return 0;
        });
    };
    EmployeeService.prototype.deleteEmployee = function (employee_id, employee) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/employees/delete/" + employee_id, employee, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    EmployeeService.prototype.deleteEmployeeCostCenter = function (employee_id, employee, ec_id) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/employees/cost_centers/" + employee_id + "/delete/" + ec_id, employee, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/employee/" + id)
            .catch(EmployeeService_1._handleError);
    };
    EmployeeService.prototype.editEmployee = function (employee_id, employee) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/employees/edit/" + employee_id, employee, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    EmployeeService.prototype.editEmployeeCostCenter = function (employee_id, employee, ec_id) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/employees/cost_centers/" + employee_id + "/edit/" + ec_id, employee, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    var EmployeeService_1;
    EmployeeService = EmployeeService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/Services/entry-account.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Services/entry-account.service.ts ***!
  \***************************************************/
/*! exports provided: EntryAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryAccountService", function() { return EntryAccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntryAccountService = /** @class */ (function () {
    function EntryAccountService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    EntryAccountService_1 = EntryAccountService;
    EntryAccountService._handleError = function (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Error: Unable to complete request.');
    };
    EntryAccountService.prototype.getEntryAccounts = function (parameter) {
        if (parameter === void 0) { parameter = JSON.stringify({}); }
        parameter = JSON.parse(parameter);
        var params = '?';
        for (var i = 0; i < Object.keys(parameter).length; i++) {
            console.log(Object.keys(parameter)[i], Object.keys(parameter));
            params += Object.keys(parameter)[i] + '=' + parameter[Object.keys(parameter)[i]] + '&';
        }
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/entry_accounts" + params)
            .catch(EntryAccountService_1._handleError);
    };
    EntryAccountService.prototype.addEntryAccount = function (parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/entry_accounts/add", parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    EntryAccountService.prototype.deleteEntryAccount = function (entry_account_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/entry_accounts/delete/" + entry_account_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    EntryAccountService.prototype.getEntryAccount = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/entry_account/" + id)
            .catch(EntryAccountService_1._handleError);
    };
    EntryAccountService.prototype.editEntryAccount = function (entry_account_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/entry_accounts/edit/" + entry_account_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    var EntryAccountService_1;
    EntryAccountService = EntryAccountService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EntryAccountService);
    return EntryAccountService;
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

/***/ "./src/app/Services/local.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Services/local.service.ts ***!
  \*******************************************/
/*! exports provided: LocalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalService", function() { return LocalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalService = /** @class */ (function () {
    function LocalService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    LocalService_1 = LocalService;
    LocalService._handleError = function (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Error: Unable to complete request.');
    };
    LocalService.prototype.getLocals = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/locals")
            .catch(LocalService_1._handleError);
    };
    LocalService.prototype.addLocal = function (parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/locals/add", parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    LocalService.prototype.deleteLocal = function (local_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/locals/delete/" + local_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    LocalService.prototype.getLocal = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/local/" + id)
            .catch(LocalService_1._handleError);
    };
    LocalService.prototype.editLocal = function (local_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/locals/edit/" + local_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    var LocalService_1;
    LocalService = LocalService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LocalService);
    return LocalService;
}());



/***/ }),

/***/ "./src/app/Services/parameter.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/parameter.service.ts ***!
  \***********************************************/
/*! exports provided: ParameterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterService", function() { return ParameterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParameterService = /** @class */ (function () {
    function ParameterService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    ParameterService_1 = ParameterService;
    ParameterService._handleError = function (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Error: Unable to complete request.');
    };
    ParameterService.prototype.getParameters = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/parameters")
            .catch(ParameterService_1._handleError);
    };
    ParameterService.prototype.addParameter = function (parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/parameters/add", parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    ParameterService.prototype.deleteParameter = function (parameter_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/parameters/delete/" + parameter_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    ParameterService.prototype.getParameter = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/parameter/" + id)
            .catch(ParameterService_1._handleError);
    };
    ParameterService.prototype.editParameter = function (parameter_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/parameters/edit/" + parameter_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    var ParameterService_1;
    ParameterService = ParameterService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ParameterService);
    return ParameterService;
}());



/***/ }),

/***/ "./src/app/Services/product-classif.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/Services/product-classif.service.ts ***!
  \*****************************************************/
/*! exports provided: ProductClassifService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductClassifService", function() { return ProductClassifService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductClassifService = /** @class */ (function () {
    function ProductClassifService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    ProductClassifService_1 = ProductClassifService;
    ProductClassifService._handleError = function (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Error: Unable to complete request.');
    };
    ProductClassifService.prototype.getProductClassifs = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/product_classifs")
            .catch(ProductClassifService_1._handleError);
    };
    ProductClassifService.prototype.getProductTaxes = function (product_id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/product_classifs/taxes/" + product_id)
            .catch(ProductClassifService_1._handleError);
    };
    ProductClassifService.prototype.getProductSubs = function (product_id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/product_classifs/subs/" + product_id)
            .catch(ProductClassifService_1._handleError);
    };
    ProductClassifService.prototype.addProductClassif = function (product) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/product_classifs/add", product, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    ProductClassifService.prototype.addProductClassifSubs = function (type, product_id, product) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/product_classifs/" + type + "/" + product_id + "/add", product, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return res['id'];
            }
        }, function (err) {
            return 0;
        });
    };
    ProductClassifService.prototype.deleteProductClassif = function (product_id, product) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/product_classifs/delete/" + product_id, product, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    ProductClassifService.prototype.deleteProductClassifSubs = function (type, product_id, product, product_tax_id) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/product_classifs/" + type + "/" + product_id + "/delete/" + product_tax_id, product, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    ProductClassifService.prototype.getProductClassif = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/product_classif/" + id)
            .catch(ProductClassifService_1._handleError);
    };
    ProductClassifService.prototype.editProductClassif = function (product_id, product) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/product_classifs/edit/" + product_id, product, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    ProductClassifService.prototype.editProductClassifSubs = function (type, product_id, product, product_tax_id) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/product_classifs/" + type + "/" + product_id + "/edit/" + product_tax_id, product, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    var ProductClassifService_1;
    ProductClassifService = ProductClassifService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductClassifService);
    return ProductClassifService;
}());



/***/ }),

/***/ "./src/app/Services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    ProductService_1 = ProductService;
    ProductService._handleError = function (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Error: Unable to complete request.');
    };
    ProductService.prototype.getProducts = function (type) {
        if (type)
            return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/products?type=" + type)
                .catch(ProductService_1._handleError);
        else
            return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/products")
                .catch(ProductService_1._handleError);
    };
    ProductService.prototype.getProductTaxes = function (product_id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/products/taxes/" + product_id)
            .catch(ProductService_1._handleError);
    };
    ProductService.prototype.addProduct = function (product) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/products/add", product, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    ProductService.prototype.addProductTaxes = function (product_id, product) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/products/taxes/" + product_id + "/add", product, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return res['id'];
            }
        }, function (err) {
            return 0;
        });
    };
    ProductService.prototype.deleteProduct = function (product_id, product) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/products/delete/" + product_id, product, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    ProductService.prototype.deleteProductTaxes = function (product_id, product, product_tax_id) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/products/taxes/" + product_id + "/delete/" + product_tax_id, product, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    ProductService.prototype.getProduct = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/product/" + id)
            .catch(ProductService_1._handleError);
    };
    ProductService.prototype.editProduct = function (product_id, product) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/products/edit/" + product_id, product, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    ProductService.prototype.editProductTaxes = function (product_id, product, product_tax_id) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/products/taxes/" + product_id + "/edit/" + product_tax_id, product, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    var ProductService_1;
    ProductService = ProductService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/Services/social-charge.service.ts":
/*!***************************************************!*\
  !*** ./src/app/Services/social-charge.service.ts ***!
  \***************************************************/
/*! exports provided: SocialChargeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialChargeService", function() { return SocialChargeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SocialChargeService = /** @class */ (function () {
    function SocialChargeService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    SocialChargeService_1 = SocialChargeService;
    SocialChargeService._handleError = function (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Error: Unable to complete request.');
    };
    SocialChargeService.prototype.getSocialCharges = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/social_charges")
            .catch(SocialChargeService_1._handleError);
    };
    SocialChargeService.prototype.getSocialChargeAccounts = function (social_charge_id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/social_charges/accounts/" + social_charge_id)
            .catch(SocialChargeService_1._handleError);
    };
    SocialChargeService.prototype.addSocialCharge = function (parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/social_charges/add", parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    SocialChargeService.prototype.addSocialChargeAccount = function (social_charge_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/social_charges/accounts/" + social_charge_id + "/add", parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return res['id'];
            }
        }, function (err) {
            return 0;
        });
    };
    SocialChargeService.prototype.deleteSocialCharge = function (social_charge_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/social_charges/delete/" + social_charge_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    SocialChargeService.prototype.deleteSocialChargeAccount = function (social_charge_id, parameter, social_charge_account_id) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/social_charges/accounts/" + social_charge_id + "/delete/" + social_charge_account_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    SocialChargeService.prototype.getSocialCharge = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/social_charge/" + id)
            .catch(SocialChargeService_1._handleError);
    };
    SocialChargeService.prototype.editSocialCharge = function (social_charge_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/social_charges/edit/" + social_charge_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    SocialChargeService.prototype.editSocialChargeAccount = function (social_charge_id, parameter, social_charge_account_id) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/social_charges/accounts/" + social_charge_id + "/edit/" + social_charge_account_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    var SocialChargeService_1;
    SocialChargeService = SocialChargeService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SocialChargeService);
    return SocialChargeService;
}());



/***/ }),

/***/ "./src/app/Services/spot.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/spot.service.ts ***!
  \******************************************/
/*! exports provided: SpotService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotService", function() { return SpotService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpotService = /** @class */ (function () {
    function SpotService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    SpotService_1 = SpotService;
    SpotService._handleError = function (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Error: Unable to complete request.');
    };
    SpotService.prototype.getSpots = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/spots")
            .catch(SpotService_1._handleError);
    };
    SpotService.prototype.addSpot = function (parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/spots/add", parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    SpotService.prototype.deleteSpot = function (spot_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/spots/delete/" + spot_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    SpotService.prototype.getSpot = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/spot/" + id)
            .catch(SpotService_1._handleError);
    };
    SpotService.prototype.editSpot = function (spot_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/spots/edit/" + spot_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    var SpotService_1;
    SpotService = SpotService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SpotService);
    return SpotService;
}());



/***/ }),

/***/ "./src/app/Services/tax.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Services/tax.service.ts ***!
  \*****************************************/
/*! exports provided: TaxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxService", function() { return TaxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaxService = /** @class */ (function () {
    function TaxService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    TaxService_1 = TaxService;
    TaxService._handleError = function (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Error: Unable to complete request.');
    };
    TaxService.prototype.getTaxes = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/taxes")
            .catch(TaxService_1._handleError);
    };
    TaxService.prototype.addTax = function (parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/taxes/add", parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    TaxService.prototype.deleteTax = function (tax_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/taxes/delete/" + tax_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    TaxService.prototype.getTax = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/tax/" + id)
            .catch(TaxService_1._handleError);
    };
    TaxService.prototype.editTax = function (tax_id, parameter) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/taxes/edit/" + tax_id, parameter, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    var TaxService_1;
    TaxService = TaxService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaxService);
    return TaxService;
}());



/***/ }),

/***/ "./src/app/Services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    UserService_1 = UserService;
    UserService._handleError = function (err) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err.message || 'Error: Unable to complete request.');
    };
    UserService.prototype.getUsers = function () {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/users")
            .catch(UserService_1._handleError);
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/users/add", user, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    UserService.prototype.deleteUser = function (user_id, user) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/users/delete/" + user_id, user, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/user/" + id)
            .catch(UserService_1._handleError);
    };
    UserService.prototype.editUser = function (user_id, user) {
        return this.http.post(_env__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "/users/edit/" + user_id, user, this.httpOptions).map(function (res) {
            if (res['status'] == 1) {
                return 1;
            }
        }, function (err) {
            return 0;
        });
    };
    var UserService_1;
    UserService = UserService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
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
        var branch_id = localStorage.getItem('branch_id');
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                },
                setParams: {
                    branch_id: branch_id
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

module.exports = "/deep/ .ag-cell-focus,.ag-cell-no-focus{\n  border:none !important;\n}\n/deep/ .ag-cell:focus{\n  border:none !important;\n  outline: none;\n}\n/deep/ div [col-id=\"details\"] {\n  overflow: visible;\n}\n/deep/ .ag-theme-material .ag-header-cell, .ag-theme-material .ag-header-group-cell {\n  padding-left: 6px;\n  padding-right: 6px;\n}\n/deep/ .ag-theme-material .ag-cell {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n/deep/ mat-tab-group.details,/deep/ div.details {\n  margin-left: 50px; overflow:visible; width: 500px; border: 1px solid #673ab7; padding:15px; margin-top: 20px;\n}\n/deep/ .btn {\n  cursor: pointer;\n}\n/deep/ .details-ag-grid .btn {\n  padding: 3px;\n}\n/deep/ .mat-ink-bar.mat-ink-bar{\n  display: none;\n}\n/deep/ .d-grid{\n  display: -ms-grid;\n  display: grid;\n}\n/deep/ .br-menu-link.active .menu-item-label {\n  color: #fff;\n}\n/*/deep/ .br-mainpanel {*/\n/*height: calc(100% - 170px);*/\n/*min-height: calc(100% - 170px);*/\n/*max-height: calc(100% - 170px);*/\n/*overflow-x: hidden;*/\n/*overflow-y: hidden;*/\n/*}*/\n/*/deep/ .top-page-title {*/\n/*position: fixed;*/\n/*width: calc(100% - 230px);*/\n/*background: #e9ecef;*/\n/*padding-bottom: 0;*/\n/*z-index: 90;*/\n/*}*/\n/*/deep/ .top-page-title .br-section-wrapper {*/\n/*box-shadow: none;*/\n/*padding-top: 40px;*/\n/*margin-top: 10px;*/\n/*}*/\n/*/deep/ .collapsed-menu .top-page-title {*/\n/*width: calc(100% - 60px);*/\n/*}*/\n/*/deep/ .page-base-content {*/\n/*margin-top: 120px;*/\n/*}*/\n/*/deep/ .ag-theme-material .ag-header {*/\n/*height: 56px;*/\n/*min-height: 56px;*/\n/*padding-top: 10px;*/\n/*padding-bottom: 10px;*/\n/*position: fixed;*/\n/*background: white;*/\n/*z-index: 90;*/\n/*overflow: hidden;*/\n/*width: calc(100% - 350px);*/\n/*margin-top: 20px;*/\n/*box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.21);*/\n/*}*/\n/*/deep/ .ag-theme-material .ag-ltr .ag-body {*/\n/*margin-top : 100px*/\n/*}*/\n/deep/ .ag-theme-fresh .ag-header {\n  font-size: 12px;\n}\n/deep/ .has-error {\n  background: lightcoral !important;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"noHeader; else component\">\n    <router-outlet></router-outlet>\n</div>\n<ng-template #component>\n    <!-- ########## START: LEFT PANEL ########## -->\n    <div class=\"br-logo\"><a href=\"\"><span>[</span>{{ \"globals.project\" | translate }}<span>]</span></a></div>\n    <div class=\"br-sideleft overflow-y-auto\">\n        <label class=\"sidebar-label pd-x-15 mg-t-20\">{{ \"globals.nav\" | translate }}</label>\n        <div class=\"br-sideleft-menu\">\n            <a routerLink=\"\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"br-menu-link\">\n                <div class=\"br-menu-item\">\n                    <i class=\"menu-item-icon icon ion-ios-home-outline tx-22\"></i>\n                    <span class=\"menu-item-label\">{{ \"globals.dashboard\" | translate }}</span>\n                </div><!-- menu-item -->\n            </a><!-- br-menu-link -->\n            <a href=\"#\" [class]=\"'br-menu-link '+files_open\">\n                <div class=\"br-menu-item\">\n                    <i class=\"menu-item-icon icon ion-ios-filing-outline tx-24\"></i>\n                    <span class=\"menu-item-label\">{{ \"globals.files\" | translate }}</span>\n                    <i class=\"menu-item-arrow fa fa-angle-down\"></i>\n                </div><!-- menu-item -->\n            </a><!-- br-menu-link -->\n            <ul class=\"br-menu-sub nav flex-column\">\n                <li class=\"nav-item\"><a routerLink=\"/branches\" routerLinkActive=\"active\"  class=\"nav-link\">{{ \"globals.branches\" | translate }}</a></li>\n                <li class=\"nav-item\"><a routerLink=\"/cost_centers\" routerLinkActive=\"active\" class=\"nav-link\">{{ \"globals.cost_centers\" | translate }}</a></li>\n                <li class=\"nav-item\"><a routerLink=\"/accounts\" routerLinkActive=\"active\" class=\"nav-link\">{{ \"globals.accounts\" | translate }}</a></li>\n                <li class=\"nav-item\">\n                    <a href=\"#\" class=\"br-menu-link\">\n                        <div class=\"br-menu-item nav-link\">\n                            <span class=\"menu-item-label\">{{ \"globals.products\" | translate }}</span>\n                            <i class=\"menu-item-arrow fa fa-angle-down\"></i>\n                        </div><!-- menu-item -->\n                    </a><!-- br-menu-link -->\n                    <ul class=\"br-menu-sub br-menu-sub-sub nav flex-column\">\n                        <li class=\"nav-item\"><a routerLink=\"/products\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"nav-link\">{{ \"globals.general\" | translate }}</a></li>\n                        <li class=\"nav-item\"><a routerLink=\"/products/1\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"nav-link\">{{ \"globals.finished_products\" | translate }}</a></li>\n                        <li class=\"nav-item\"><a routerLink=\"/products/2\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" class=\"nav-link\">{{ \"globals.semi_finished_products\" | translate }}</a></li>\n                    </ul>\n                </li>\n                <li class=\"nav-item\"><a routerLink=\"/employees\" routerLinkActive=\"active\" class=\"nav-link\">{{ \"globals.employees\" | translate }}</a></li>\n                <li class=\"nav-item\"><a routerLink=\"/assets\" routerLinkActive=\"active\" class=\"nav-link\">{{ \"globals.assets\" | translate }}</a></li>\n                <li class=\"nav-item\"><a routerLink=\"/taxes\" routerLinkActive=\"active\" class=\"nav-link\">{{ \"globals.taxes\" | translate }}</a></li>\n                <li class=\"nav-item\"><a routerLink=\"/social_charges\" routerLinkActive=\"active\" class=\"nav-link\">{{ \"globals.social_charges\" | translate }}</a></li>\n                <li class=\"nav-item\"><a routerLink=\"/parameters\" routerLinkActive=\"active\" class=\"nav-link\">{{ \"globals.parameters\" | translate }}</a></li>\n                <li class=\"nav-item\"><a routerLink=\"/users\" routerLinkActive=\"active\" class=\"nav-link\">{{ \"globals.users\" | translate }}</a></li>\n            </ul>\n            <a href=\"#\" class=\"br-menu-link\">\n                <div class=\"br-menu-item\">\n                    <i class=\"menu-item-icon ion-ios-redo-outline tx-24\"></i>\n                    <span class=\"menu-item-label\">{{ \"globals.transactions\" | translate }}</span>\n                    <i class=\"menu-item-arrow fa fa-angle-down\"></i>\n                </div><!-- menu-item -->\n            </a><!-- br-menu-link -->\n            <ul class=\"br-menu-sub nav flex-column\">\n                <li class=\"nav-item\"><a routerLink=\"/entry_accounts\" class=\"nav-link\">{{ \"globals.entries\" | translate }}</a></li>\n            </ul>\n            <a href=\"#\" class=\"br-menu-link\">\n                <div class=\"br-menu-item\">\n                    <i class=\"menu-item-icon ion-ios-pie-outline tx-20\"></i>\n                    <span class=\"menu-item-label\">{{ \"globals.calcs\" | translate }}</span>\n                    <i class=\"menu-item-arrow fa fa-angle-down\"></i>\n                </div><!-- menu-item -->\n            </a><!-- br-menu-link -->\n            <ul class=\"br-menu-sub nav flex-column\">\n                <li class=\"nav-item\"><a routerLink=\"/cost_maps\" class=\"nav-link\">{{ \"globals.cost_map\" | translate }}</a></li>\n                <li class=\"nav-item\"><a routerLink=\"/cost_centers\" class=\"nav-link\">{{ \"globals.finished_products\" | translate }}</a></li>\n                <li class=\"nav-item\"><a routerLink=\"/cost_centers\" class=\"nav-link\">{{ \"globals.semi_finished_products\" | translate }}</a></li>\n            </ul>\n            <a href=\"#\" class=\"br-menu-link\">\n                <div class=\"br-menu-item\">\n                    <i class=\"menu-item-icon icon ion-ios-gear-outline tx-24\"></i>\n                    <span class=\"menu-item-label\">{{ \"globals.reports\" | translate }}</span>\n                    <i class=\"menu-item-arrow fa fa-angle-down\"></i>\n                </div><!-- menu-item -->\n            </a><!-- br-menu-link -->\n            <ul class=\"br-menu-sub nav flex-column\">\n                <li class=\"nav-item\">\n                    <a href=\"#\" class=\"br-menu-link\">\n                        <div class=\"br-menu-item nav-link\">\n                            <span class=\"menu-item-label\">{{ \"globals.demonstratives\" | translate }}</span>\n                            <i class=\"menu-item-arrow fa fa-angle-down\"></i>\n                        </div><!-- menu-item -->\n                    </a><!-- br-menu-link -->\n                    <ul class=\"br-menu-sub br-menu-sub-sub nav flex-column\">\n                        <li class=\"nav-item\"><a routerLink=\"/cost_centers\" class=\"nav-link\">{{ \"globals.expenses\" | translate }}</a></li>\n                        <li class=\"nav-item\"><a routerLink=\"/cost_centers\" class=\"nav-link\">{{ \"globals.results\" | translate }}</a></li>\n                    </ul>\n                </li>\n                <li class=\"nav-item\"><a routerLink=\"/cost_centers\" class=\"nav-link\">EBTIDA</a></li>\n            </ul>\n        </div><!-- br-sideleft-menu -->\n        <br>\n    </div><!-- br-sideleft -->\n    <!-- ########## END: LEFT PANEL ########## -->\n\n    <!-- ########## START: HEAD PANEL ########## -->\n    <div class=\"br-header\">\n        <div class=\"br-header-left\">\n            <div class=\"navicon-left hidden-md-down\"><a id=\"btnLeftMenu\" href=\"\"><i class=\"icon ion-navicon-round\"></i></a></div>\n            <div class=\"navicon-left hidden-lg-up\"><a id=\"btnLeftMenuMobile\" href=\"\"><i class=\"icon ion-navicon-round\"></i></a></div>\n        </div><!-- br-header-left -->\n        <div class=\"br-header-right\">\n            <nav class=\"nav\">\n                <a routerLink=\"/\">\n                    <p class=\"mr-3 pt-3\" style=\"text-decoration: underline\">{{branch_name}}</p>\n                </a>\n            </nav>\n            <div class=\"navicon-right\">\n                <div class=\"dropdown\">\n                    <a href=\"\" class=\"nav-link nav-link-profile\" data-toggle=\"dropdown\">\n                        <span *ngIf=\"user\" class=\"logged-name hidden-md-down\">{{user.full_name}}</span>\n                        <i class=\"fa fa-angle-down mg-r-5\"></i>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-header wd-200\">\n                        <ul class=\"list-unstyled user-profile-nav\">\n                            <li><a href=\"\"><i class=\"icon ion-ios-person\"></i> Edit Profile</a></li>\n                            <li><a href=\"\"><i class=\"icon ion-ios-gear\"></i> Settings</a></li>\n                            <li><a href=\"\" (click)=\"logout()\"><i class=\"icon ion-power\"></i> Sign Out</a></li>\n                        </ul>\n                    </div><!-- dropdown-menu -->\n                </div><!-- dropdown -->\n            </div><!-- navicon-right -->\n        </div><!-- br-header-right -->\n    </div><!-- br-header -->\n    <!-- ########## END: HEAD PANEL ########## -->\n\n    <router-outlet></router-outlet>\n\n    <div class=\"br-mainpanel\">\n        <footer class=\"br-footer\">\n            <div class=\"footer-left\">\n                <div class=\"mg-b-2\">{{ 'home.footer' | translate }}</div>\n                <div> {{ 'home.made' | translate }}<a href=\"http://www.ibrahimgad.website\">Ibrahim E.gad</a>.</div>\n            </div>\n        </footer>\n    </div>\n    <script>\n        $(function(){\n            'use strict'\n            // FOR DEMO ONLY\n            // menu collapsed by default during first page load or refresh with screen\n            // having a size between 992px and 1299px. This is intended on this page only\n            // for better viewing of widgets demo.\n            $(window).resize(function(){\n                minimizeMenu();\n            });\n\n            minimizeMenu();\n\n            function minimizeMenu() {\n                if(window.matchMedia('(min-width: 992px)').matches && window.matchMedia('(max-width: 1299px)').matches) {\n                    // show only the icons and hide left menu label by default\n                    $('.menu-item-label,.menu-item-arrow').addClass('op-lg-0-force d-lg-none');\n                    $('body').addClass('collapsed-menu');\n                    $('.show-sub + .br-menu-sub').slideUp();\n                } else if(window.matchMedia('(min-width: 1300px)').matches && !$('body').hasClass('collapsed-menu')) {\n                    $('.menu-item-label,.menu-item-arrow').removeClass('op-lg-0-force d-lg-none');\n                    $('body').removeClass('collapsed-menu');\n                    $('.show-sub + .br-menu-sub').slideDown();\n                }\n            }\n        });\n    </script>\n</ng-template>\n"

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
/* harmony import */ var _Services_branch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/branch.service */ "./src/app/Services/branch.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
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
    function AppComponent(router, branchesApi, translate) {
        this.router = router;
        this.branchesApi = branchesApi;
        this.translate = translate;
        this.title = 'frontend';
        this.files_open = '';
        this.branch_name = localStorage.getItem('branch_name');
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                var currentUrl = event.url;
                if (currentUrl.includes('register') || currentUrl.includes('login')) {
                    _this.noHeader = true;
                }
                else if (['/branches', '/cost_centers', '/accounts', '/products', '/employees', '/assets', '/taxes', '/social_charges', '/parameters', '/users'].includes(currentUrl)) {
                    _this.files_open = 'show-sub active';
                }
            }
        });
        if (localStorage.getItem('currentUser')) {
            this.user = JSON.parse(localStorage.getItem('currentUser'));
            if (!localStorage.getItem('branch_id') || localStorage.getItem('branch_id') == '0') {
                this.branchesSubs = this.branchesApi.getBranches().subscribe(function (res) {
                    _this.branches = res['branches'];
                    if (_this.branches.length > 0) {
                        var branch = _this.branches[0];
                        _this.branch_name = branch.name;
                        localStorage.setItem('branch_id', branch.id.toString());
                        localStorage.setItem('branch_name', branch.name);
                    }
                    else {
                        localStorage.setItem('branch_id', '0');
                    }
                });
            }
        }
        this.translate.addLangs(['en', 'pt']);
        var lang = 'en';
        if (localStorage.getItem('lang') && localStorage.getItem('lang') !== 'undefined') {
            lang = localStorage.getItem('lang');
        }
        this.translate.setDefaultLang(lang);
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('lang');
        localStorage.removeItem('branch_id');
        localStorage.removeItem('branch_name');
        location.reload();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_branch_service__WEBPACK_IMPORTED_MODULE_2__["BranchService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/home/home.component */ "./src/app/Components/home/home.component.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _Components_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/auth/sign-up/sign-up.component */ "./src/app/Components/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _Components_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/auth/sign-in/sign-in.component */ "./src/app/Components/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _guards_authenticated_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_guards/authenticated.guard */ "./src/app/_guards/authenticated.guard.ts");
/* harmony import */ var _Components_branches_branches_overview_branches_overview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/branches/branches-overview/branches-overview.component */ "./src/app/Components/branches/branches-overview/branches-overview.component.ts");
/* harmony import */ var _Components_branches_branch_edit_branch_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/branches/branch-edit/branch-edit.component */ "./src/app/Components/branches/branch-edit/branch-edit.component.ts");
/* harmony import */ var _Components_branches_branch_add_branch_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/branches/branch-add/branch-add.component */ "./src/app/Components/branches/branch-add/branch-add.component.ts");
/* harmony import */ var _Components_branches_branches_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/branches/branches.component */ "./src/app/Components/branches/branches.component.ts");
/* harmony import */ var _Services_installation_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Services/installation.service */ "./src/app/Services/installation.service.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_helpers/jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_helpers/error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony import */ var _Services_branch_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Services/branch.service */ "./src/app/Services/branch.service.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _Components_partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/partials/action-cell-rendrer/action-cell-renderer.component */ "./src/app/Components/partials/action-cell-rendrer/action-cell-renderer.component.ts");
/* harmony import */ var _Components_cost_centers_cost_center_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/cost-centers/cost-center.component */ "./src/app/Components/cost-centers/cost-center.component.ts");
/* harmony import */ var _Components_cost_centers_cost_center_overview_cost_center_overview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/cost-centers/cost-center-overview/cost-center-overview.component */ "./src/app/Components/cost-centers/cost-center-overview/cost-center-overview.component.ts");
/* harmony import */ var _Components_cost_centers_cost_center_add_cost_center_add_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Components/cost-centers/cost-center-add/cost-center-add.component */ "./src/app/Components/cost-centers/cost-center-add/cost-center-add.component.ts");
/* harmony import */ var _Components_cost_centers_cost_center_edit_cost_center_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Components/cost-centers/cost-center-edit/cost-center-edit.component */ "./src/app/Components/cost-centers/cost-center-edit/cost-center-edit.component.ts");
/* harmony import */ var _Components_partials_cost_center_details_cost_center_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Components/partials/cost-center-details/cost-center-details.component */ "./src/app/Components/partials/cost-center-details/cost-center-details.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Components_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./Components/accounts/accounts.component */ "./src/app/Components/accounts/accounts.component.ts");
/* harmony import */ var _Components_accounts_account_overview_account_overview_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Components/accounts/account-overview/account-overview.component */ "./src/app/Components/accounts/account-overview/account-overview.component.ts");
/* harmony import */ var _Components_accounts_account_add_account_add_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Components/accounts/account-add/account-add.component */ "./src/app/Components/accounts/account-add/account-add.component.ts");
/* harmony import */ var _Components_accounts_account_edit_account_edit_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Components/accounts/account-edit/account-edit.component */ "./src/app/Components/accounts/account-edit/account-edit.component.ts");
/* harmony import */ var _Components_taxes_taxes_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Components/taxes/taxes.component */ "./src/app/Components/taxes/taxes.component.ts");
/* harmony import */ var _Components_taxes_tax_edit_tax_edit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./Components/taxes/tax-edit/tax-edit.component */ "./src/app/Components/taxes/tax-edit/tax-edit.component.ts");
/* harmony import */ var _Components_taxes_tax_overview_tax_overview_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Components/taxes/tax-overview/tax-overview.component */ "./src/app/Components/taxes/tax-overview/tax-overview.component.ts");
/* harmony import */ var _Components_employees_employees_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Components/employees/employees.component */ "./src/app/Components/employees/employees.component.ts");
/* harmony import */ var _Components_employees_employee_overview_employee_overview_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Components/employees/employee-overview/employee-overview.component */ "./src/app/Components/employees/employee-overview/employee-overview.component.ts");
/* harmony import */ var _Components_employees_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./Components/employees/employee-add/employee-add.component */ "./src/app/Components/employees/employee-add/employee-add.component.ts");
/* harmony import */ var _Components_employees_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Components/employees/employee-edit/employee-edit.component */ "./src/app/Components/employees/employee-edit/employee-edit.component.ts");
/* harmony import */ var _Components_products_products_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Components/products/products.component */ "./src/app/Components/products/products.component.ts");
/* harmony import */ var _Components_products_product_overview_product_overview_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Components/products/product-overview/product-overview.component */ "./src/app/Components/products/product-overview/product-overview.component.ts");
/* harmony import */ var _Components_products_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Components/products/product-add/product-add.component */ "./src/app/Components/products/product-add/product-add.component.ts");
/* harmony import */ var _Components_products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./Components/products/product-edit/product-edit.component */ "./src/app/Components/products/product-edit/product-edit.component.ts");
/* harmony import */ var _Components_assets_assets_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./Components/assets/assets.component */ "./src/app/Components/assets/assets.component.ts");
/* harmony import */ var _Components_assets_asset_overview_asset_overview_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./Components/assets/asset-overview/asset-overview.component */ "./src/app/Components/assets/asset-overview/asset-overview.component.ts");
/* harmony import */ var _Components_assets_asset_add_asset_add_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./Components/assets/asset-add/asset-add.component */ "./src/app/Components/assets/asset-add/asset-add.component.ts");
/* harmony import */ var _Components_assets_asset_edit_asset_edit_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./Components/assets/asset-edit/asset-edit.component */ "./src/app/Components/assets/asset-edit/asset-edit.component.ts");
/* harmony import */ var _Components_social_charges_social_charges_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./Components/social-charges/social-charges.component */ "./src/app/Components/social-charges/social-charges.component.ts");
/* harmony import */ var _Components_social_charges_social_charge_overview_social_charge_overview_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./Components/social-charges/social-charge-overview/social-charge-overview.component */ "./src/app/Components/social-charges/social-charge-overview/social-charge-overview.component.ts");
/* harmony import */ var _Components_social_charges_social_charge_add_social_charge_add_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./Components/social-charges/social-charge-add/social-charge-add.component */ "./src/app/Components/social-charges/social-charge-add/social-charge-add.component.ts");
/* harmony import */ var _Components_social_charges_social_charge_edit_social_charge_edit_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./Components/social-charges/social-charge-edit/social-charge-edit.component */ "./src/app/Components/social-charges/social-charge-edit/social-charge-edit.component.ts");
/* harmony import */ var _Components_parameters_parameters_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./Components/parameters/parameters.component */ "./src/app/Components/parameters/parameters.component.ts");
/* harmony import */ var _Components_parameters_parameter_overview_parameter_overview_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./Components/parameters/parameter-overview/parameter-overview.component */ "./src/app/Components/parameters/parameter-overview/parameter-overview.component.ts");
/* harmony import */ var _Components_parameters_parameter_add_parameter_add_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./Components/parameters/parameter-add/parameter-add.component */ "./src/app/Components/parameters/parameter-add/parameter-add.component.ts");
/* harmony import */ var _Components_parameters_parameter_edit_parameter_edit_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./Components/parameters/parameter-edit/parameter-edit.component */ "./src/app/Components/parameters/parameter-edit/parameter-edit.component.ts");
/* harmony import */ var _Components_users_users_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./Components/users/users.component */ "./src/app/Components/users/users.component.ts");
/* harmony import */ var _Components_users_user_overview_user_overview_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./Components/users/user-overview/user-overview.component */ "./src/app/Components/users/user-overview/user-overview.component.ts");
/* harmony import */ var _Components_users_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./Components/users/user-add/user-add.component */ "./src/app/Components/users/user-add/user-add.component.ts");
/* harmony import */ var _Components_users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./Components/users/user-edit/user-edit.component */ "./src/app/Components/users/user-edit/user-edit.component.ts");
/* harmony import */ var _Components_taxes_tax_add_tax_add_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./Components/taxes/tax-add/tax-add.component */ "./src/app/Components/taxes/tax-add/tax-add.component.ts");
/* harmony import */ var _Components_partials_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./Components/partials/account-details/account-details.component */ "./src/app/Components/partials/account-details/account-details.component.ts");
/* harmony import */ var _Components_partials_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./Components/partials/product-details/product-details.component */ "./src/app/Components/partials/product-details/product-details.component.ts");
/* harmony import */ var _Components_partials_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./Components/partials/employee-details/employee-details.component */ "./src/app/Components/partials/employee-details/employee-details.component.ts");
/* harmony import */ var _Components_partials_asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./Components/partials/asset-details/asset-details.component */ "./src/app/Components/partials/asset-details/asset-details.component.ts");
/* harmony import */ var _Components_partials_social_charge_details_social_charge_details_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./Components/partials/social-charge-details/social-charge-details.component */ "./src/app/Components/partials/social-charge-details/social-charge-details.component.ts");
/* harmony import */ var _Components_product_classifs_product_classifs_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./Components/product-classifs/product-classifs.component */ "./src/app/Components/product-classifs/product-classifs.component.ts");
/* harmony import */ var _Components_product_classifs_product_classif_overview_product_classif_overview_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./Components/product-classifs/product-classif-overview/product-classif-overview.component */ "./src/app/Components/product-classifs/product-classif-overview/product-classif-overview.component.ts");
/* harmony import */ var _Components_product_classifs_product_classif_add_product_classif_add_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./Components/product-classifs/product-classif-add/product-classif-add.component */ "./src/app/Components/product-classifs/product-classif-add/product-classif-add.component.ts");
/* harmony import */ var _Components_product_classifs_product_classif_edit_product_classif_edit_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./Components/product-classifs/product-classif-edit/product-classif-edit.component */ "./src/app/Components/product-classifs/product-classif-edit/product-classif-edit.component.ts");
/* harmony import */ var _Components_partials_product_classif_details_product_classif_details_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./Components/partials/product-classif-details/product-classif-details.component */ "./src/app/Components/partials/product-classif-details/product-classif-details.component.ts");
/* harmony import */ var _Components_asset_types_asset_types_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./Components/asset-types/asset-types.component */ "./src/app/Components/asset-types/asset-types.component.ts");
/* harmony import */ var _Components_asset_types_asset_type_overview_asset_type_overview_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./Components/asset-types/asset-type-overview/asset-type-overview.component */ "./src/app/Components/asset-types/asset-type-overview/asset-type-overview.component.ts");
/* harmony import */ var _Components_asset_types_asset_type_add_asset_type_add_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./Components/asset-types/asset-type-add/asset-type-add.component */ "./src/app/Components/asset-types/asset-type-add/asset-type-add.component.ts");
/* harmony import */ var _Components_asset_types_asset_type_edit_asset_type_edit_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ./Components/asset-types/asset-type-edit/asset-type-edit.component */ "./src/app/Components/asset-types/asset-type-edit/asset-type-edit.component.ts");
/* harmony import */ var _Components_locals_locals_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./Components/locals/locals.component */ "./src/app/Components/locals/locals.component.ts");
/* harmony import */ var _Components_locals_local_overview_local_overview_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ./Components/locals/local-overview/local-overview.component */ "./src/app/Components/locals/local-overview/local-overview.component.ts");
/* harmony import */ var _Components_locals_local_add_local_add_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./Components/locals/local-add/local-add.component */ "./src/app/Components/locals/local-add/local-add.component.ts");
/* harmony import */ var _Components_locals_local_edit_local_edit_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ./Components/locals/local-edit/local-edit.component */ "./src/app/Components/locals/local-edit/local-edit.component.ts");
/* harmony import */ var _Components_spots_spots_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ./Components/spots/spots.component */ "./src/app/Components/spots/spots.component.ts");
/* harmony import */ var _Components_spots_spot_overview_spot_overview_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ./Components/spots/spot-overview/spot-overview.component */ "./src/app/Components/spots/spot-overview/spot-overview.component.ts");
/* harmony import */ var _Components_spots_spot_add_spot_add_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./Components/spots/spot-add/spot-add.component */ "./src/app/Components/spots/spot-add/spot-add.component.ts");
/* harmony import */ var _Components_spots_spot_edit_spot_edit_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./Components/spots/spot-edit/spot-edit.component */ "./src/app/Components/spots/spot-edit/spot-edit.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _Components_entry_accounts_entry_accounts_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./Components/entry-accounts/entry-accounts.component */ "./src/app/Components/entry-accounts/entry-accounts.component.ts");
/* harmony import */ var _Components_entry_accounts_entry_account_overview_entry_account_overview_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./Components/entry-accounts/entry-account-overview/entry-account-overview.component */ "./src/app/Components/entry-accounts/entry-account-overview/entry-account-overview.component.ts");
/* harmony import */ var _Components_entry_accounts_entry_account_add_entry_account_add_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ./Components/entry-accounts/entry-account-add/entry-account-add.component */ "./src/app/Components/entry-accounts/entry-account-add/entry-account-add.component.ts");
/* harmony import */ var _Components_entry_accounts_entry_account_edit_entry_account_edit_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ./Components/entry-accounts/entry-account-edit/entry-account-edit.component */ "./src/app/Components/entry-accounts/entry-account-edit/entry-account-edit.component.ts");
/* harmony import */ var _Components_cost_maps_cost_maps_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ./Components/cost-maps/cost-maps.component */ "./src/app/Components/cost-maps/cost-maps.component.ts");
/* harmony import */ var _Components_cost_maps_cost_map_overview_cost_map_overview_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ./Components/cost-maps/cost-map-overview/cost-map-overview.component */ "./src/app/Components/cost-maps/cost-map-overview/cost-map-overview.component.ts");
/* harmony import */ var _Components_cost_maps_cost_map_add_cost_map_add_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ./Components/cost-maps/cost-map-add/cost-map-add.component */ "./src/app/Components/cost-maps/cost-map-add/cost-map-add.component.ts");
/* harmony import */ var _Components_cost_maps_cost_map_edit_cost_map_edit_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ./Components/cost-maps/cost-map-edit/cost-map-edit.component */ "./src/app/Components/cost-maps/cost-map-edit/cost-map-edit.component.ts");
/* harmony import */ var _Components_cost_maps_cost_map_view_cost_map_view_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ./Components/cost-maps/cost-map-view/cost-map-view.component */ "./src/app/Components/cost-maps/cost-map-view/cost-map-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































































































function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_85__["TranslateHttpLoader"](httpClient);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _Components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _Components_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
                _Components_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"],
                _Components_branches_branches_overview_branches_overview_component__WEBPACK_IMPORTED_MODULE_13__["BranchesOverviewComponent"],
                _Components_branches_branch_edit_branch_edit_component__WEBPACK_IMPORTED_MODULE_14__["BranchEditComponent"],
                _Components_branches_branch_add_branch_add_component__WEBPACK_IMPORTED_MODULE_15__["BranchAddComponent"],
                _Components_branches_branches_component__WEBPACK_IMPORTED_MODULE_16__["BranchesComponent"],
                _Components_partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_22__["ActionsFormatterComponent"],
                _Components_cost_centers_cost_center_component__WEBPACK_IMPORTED_MODULE_23__["CostCenterComponent"],
                _Components_cost_centers_cost_center_overview_cost_center_overview_component__WEBPACK_IMPORTED_MODULE_24__["CostCenterOverviewComponent"],
                _Components_cost_centers_cost_center_add_cost_center_add_component__WEBPACK_IMPORTED_MODULE_25__["CostCenterAddComponent"],
                _Components_cost_centers_cost_center_edit_cost_center_edit_component__WEBPACK_IMPORTED_MODULE_26__["CostCenterEditComponent"],
                _Components_partials_cost_center_details_cost_center_details_component__WEBPACK_IMPORTED_MODULE_27__["DetailsFormatterComponent"],
                _Components_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_30__["AccountsComponent"],
                _Components_accounts_account_overview_account_overview_component__WEBPACK_IMPORTED_MODULE_31__["AccountOverviewComponent"],
                _Components_accounts_account_add_account_add_component__WEBPACK_IMPORTED_MODULE_32__["AccountAddComponent"],
                _Components_accounts_account_edit_account_edit_component__WEBPACK_IMPORTED_MODULE_33__["AccountEditComponent"],
                _Components_taxes_taxes_component__WEBPACK_IMPORTED_MODULE_34__["TaxesComponent"],
                _Components_taxes_tax_add_tax_add_component__WEBPACK_IMPORTED_MODULE_61__["TaxAddComponent"],
                _Components_taxes_tax_edit_tax_edit_component__WEBPACK_IMPORTED_MODULE_35__["TaxEditComponent"],
                _Components_taxes_tax_overview_tax_overview_component__WEBPACK_IMPORTED_MODULE_36__["TaxOverviewComponent"],
                _Components_employees_employees_component__WEBPACK_IMPORTED_MODULE_37__["EmployeesComponent"],
                _Components_employees_employee_overview_employee_overview_component__WEBPACK_IMPORTED_MODULE_38__["EmployeeOverviewComponent"],
                _Components_employees_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_39__["EmployeeAddComponent"],
                _Components_employees_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_40__["EmployeeEditComponent"],
                _Components_products_products_component__WEBPACK_IMPORTED_MODULE_41__["ProductsComponent"],
                _Components_products_product_overview_product_overview_component__WEBPACK_IMPORTED_MODULE_42__["ProductOverviewComponent"],
                _Components_products_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_43__["ProductAddComponent"],
                _Components_products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_44__["ProductEditComponent"],
                _Components_assets_assets_component__WEBPACK_IMPORTED_MODULE_45__["AssetsComponent"],
                _Components_assets_asset_overview_asset_overview_component__WEBPACK_IMPORTED_MODULE_46__["AssetOverviewComponent"],
                _Components_assets_asset_add_asset_add_component__WEBPACK_IMPORTED_MODULE_47__["AssetAddComponent"],
                _Components_assets_asset_edit_asset_edit_component__WEBPACK_IMPORTED_MODULE_48__["AssetEditComponent"],
                _Components_social_charges_social_charges_component__WEBPACK_IMPORTED_MODULE_49__["SocialChargesComponent"],
                _Components_social_charges_social_charge_overview_social_charge_overview_component__WEBPACK_IMPORTED_MODULE_50__["SocialChargeOverviewComponent"],
                _Components_social_charges_social_charge_add_social_charge_add_component__WEBPACK_IMPORTED_MODULE_51__["SocialChargeAddComponent"],
                _Components_social_charges_social_charge_edit_social_charge_edit_component__WEBPACK_IMPORTED_MODULE_52__["SocialChargeEditComponent"],
                _Components_parameters_parameters_component__WEBPACK_IMPORTED_MODULE_53__["ParametersComponent"],
                _Components_parameters_parameter_overview_parameter_overview_component__WEBPACK_IMPORTED_MODULE_54__["ParameterOverviewComponent"],
                _Components_parameters_parameter_add_parameter_add_component__WEBPACK_IMPORTED_MODULE_55__["ParameterAddComponent"],
                _Components_parameters_parameter_edit_parameter_edit_component__WEBPACK_IMPORTED_MODULE_56__["ParameterEditComponent"],
                _Components_users_users_component__WEBPACK_IMPORTED_MODULE_57__["UsersComponent"],
                _Components_users_user_overview_user_overview_component__WEBPACK_IMPORTED_MODULE_58__["UserOverviewComponent"],
                _Components_users_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_59__["UserAddComponent"],
                _Components_users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_60__["UserEditComponent"],
                _Components_partials_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_62__["AccountDetailsComponent"],
                _Components_partials_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_63__["ProductDetailsComponent"],
                _Components_partials_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_64__["EmployeeDetailsComponent"],
                _Components_partials_asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_65__["AssetDetailsComponent"],
                _Components_partials_social_charge_details_social_charge_details_component__WEBPACK_IMPORTED_MODULE_66__["SocialChargeDetailsComponent"],
                _Components_product_classifs_product_classifs_component__WEBPACK_IMPORTED_MODULE_67__["ProductClassifsComponent"],
                _Components_product_classifs_product_classif_overview_product_classif_overview_component__WEBPACK_IMPORTED_MODULE_68__["ProductClassifOverviewComponent"],
                _Components_product_classifs_product_classif_add_product_classif_add_component__WEBPACK_IMPORTED_MODULE_69__["ProductClassifAddComponent"],
                _Components_product_classifs_product_classif_edit_product_classif_edit_component__WEBPACK_IMPORTED_MODULE_70__["ProductClassifEditComponent"],
                _Components_partials_product_classif_details_product_classif_details_component__WEBPACK_IMPORTED_MODULE_71__["ProductClassifDetailsComponent"],
                _Components_asset_types_asset_types_component__WEBPACK_IMPORTED_MODULE_72__["AssetTypesComponent"],
                _Components_asset_types_asset_type_overview_asset_type_overview_component__WEBPACK_IMPORTED_MODULE_73__["AssetTypeOverviewComponent"],
                _Components_asset_types_asset_type_add_asset_type_add_component__WEBPACK_IMPORTED_MODULE_74__["AssetTypeAddComponent"],
                _Components_asset_types_asset_type_edit_asset_type_edit_component__WEBPACK_IMPORTED_MODULE_75__["AssetTypeEditComponent"],
                _Components_locals_locals_component__WEBPACK_IMPORTED_MODULE_76__["LocalsComponent"],
                _Components_locals_local_overview_local_overview_component__WEBPACK_IMPORTED_MODULE_77__["LocalOverviewComponent"],
                _Components_locals_local_add_local_add_component__WEBPACK_IMPORTED_MODULE_78__["LocalAddComponent"],
                _Components_locals_local_edit_local_edit_component__WEBPACK_IMPORTED_MODULE_79__["LocalEditComponent"],
                _Components_spots_spots_component__WEBPACK_IMPORTED_MODULE_80__["SpotsComponent"],
                _Components_spots_spot_overview_spot_overview_component__WEBPACK_IMPORTED_MODULE_81__["SpotOverviewComponent"],
                _Components_spots_spot_add_spot_add_component__WEBPACK_IMPORTED_MODULE_82__["SpotAddComponent"],
                _Components_spots_spot_edit_spot_edit_component__WEBPACK_IMPORTED_MODULE_83__["SpotEditComponent"],
                _Components_entry_accounts_entry_accounts_component__WEBPACK_IMPORTED_MODULE_86__["EntryAccountsComponent"],
                _Components_entry_accounts_entry_account_overview_entry_account_overview_component__WEBPACK_IMPORTED_MODULE_87__["EntryAccountOverviewComponent"],
                _Components_entry_accounts_entry_account_add_entry_account_add_component__WEBPACK_IMPORTED_MODULE_88__["EntryAccountAddComponent"],
                _Components_entry_accounts_entry_account_edit_entry_account_edit_component__WEBPACK_IMPORTED_MODULE_89__["EntryAccountEditComponent"],
                _Components_cost_maps_cost_maps_component__WEBPACK_IMPORTED_MODULE_90__["CostMapsComponent"],
                _Components_cost_maps_cost_map_overview_cost_map_overview_component__WEBPACK_IMPORTED_MODULE_91__["CostMapOverviewComponent"],
                _Components_cost_maps_cost_map_add_cost_map_add_component__WEBPACK_IMPORTED_MODULE_92__["CostMapAddComponent"],
                _Components_cost_maps_cost_map_edit_cost_map_edit_component__WEBPACK_IMPORTED_MODULE_93__["CostMapEditComponent"],
                _Components_cost_maps_cost_map_view_cost_map_view_component__WEBPACK_IMPORTED_MODULE_94__["CostMapViewComponent"]
            ],
            entryComponents: [
                _Components_partials_action_cell_rendrer_action_cell_renderer_component__WEBPACK_IMPORTED_MODULE_22__["ActionsFormatterComponent"],
                _Components_partials_cost_center_details_cost_center_details_component__WEBPACK_IMPORTED_MODULE_27__["DetailsFormatterComponent"],
                _Components_partials_account_details_account_details_component__WEBPACK_IMPORTED_MODULE_62__["AccountDetailsComponent"],
                _Components_partials_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_63__["ProductDetailsComponent"],
                _Components_partials_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_64__["EmployeeDetailsComponent"],
                _Components_partials_asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_65__["AssetDetailsComponent"],
                _Components_partials_social_charge_details_social_charge_details_component__WEBPACK_IMPORTED_MODULE_66__["SocialChargeDetailsComponent"],
                _Components_partials_product_classif_details_product_classif_details_component__WEBPACK_IMPORTED_MODULE_71__["ProductClassifDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_5__["RoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_21__["AgGridModule"].withComponents([]),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_2__["SweetAlert2Module"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_84__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_84__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                    }
                })
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"],
                _guards_authenticated_guard__WEBPACK_IMPORTED_MODULE_12__["AuthenticatedGuard"],
                _Services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _Services_installation_service__WEBPACK_IMPORTED_MODULE_17__["InstallationService"],
                _Services_branch_service__WEBPACK_IMPORTED_MODULE_20__["BranchService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_18__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_19__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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
// export const API_URL = 'http://127.0.0.1:5000/api';
var API_URL = 'http://eibrahim95.pythonanywhere.com/api';
// DROP TABLE accounts;
// DROP TABLE  assets;
// DROP TABLE  branches;
// DROP TABLE  cost_centers;
// DROP TABLE  costcenter_taxes;
// DROP TABLE  employees;
// DROP TABLE  entry_accounts;
// DROP TABLE  installations;
// DROP TABLE  parameters;
// DROP TABLE  permissions;
// DROP TABLE  product_classifications;
// DROP TABLE  products;
// DROP TABLE  social_charges;
// DROP TABLE  spots;
// DROP TABLE  taxes;
// DROP TABLE  users ;


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
/* harmony import */ var _Components_branches_branch_edit_branch_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/branches/branch-edit/branch-edit.component */ "./src/app/Components/branches/branch-edit/branch-edit.component.ts");
/* harmony import */ var _Components_branches_branches_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/branches/branches.component */ "./src/app/Components/branches/branches.component.ts");
/* harmony import */ var _Components_cost_centers_cost_center_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Components/cost-centers/cost-center.component */ "./src/app/Components/cost-centers/cost-center.component.ts");
/* harmony import */ var _Components_cost_centers_cost_center_overview_cost_center_overview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Components/cost-centers/cost-center-overview/cost-center-overview.component */ "./src/app/Components/cost-centers/cost-center-overview/cost-center-overview.component.ts");
/* harmony import */ var _Components_cost_centers_cost_center_add_cost_center_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Components/cost-centers/cost-center-add/cost-center-add.component */ "./src/app/Components/cost-centers/cost-center-add/cost-center-add.component.ts");
/* harmony import */ var _Components_cost_centers_cost_center_edit_cost_center_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Components/cost-centers/cost-center-edit/cost-center-edit.component */ "./src/app/Components/cost-centers/cost-center-edit/cost-center-edit.component.ts");
/* harmony import */ var _Components_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Components/accounts/accounts.component */ "./src/app/Components/accounts/accounts.component.ts");
/* harmony import */ var _Components_accounts_account_overview_account_overview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Components/accounts/account-overview/account-overview.component */ "./src/app/Components/accounts/account-overview/account-overview.component.ts");
/* harmony import */ var _Components_accounts_account_add_account_add_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Components/accounts/account-add/account-add.component */ "./src/app/Components/accounts/account-add/account-add.component.ts");
/* harmony import */ var _Components_accounts_account_edit_account_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Components/accounts/account-edit/account-edit.component */ "./src/app/Components/accounts/account-edit/account-edit.component.ts");
/* harmony import */ var _Components_taxes_taxes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Components/taxes/taxes.component */ "./src/app/Components/taxes/taxes.component.ts");
/* harmony import */ var _Components_taxes_tax_overview_tax_overview_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Components/taxes/tax-overview/tax-overview.component */ "./src/app/Components/taxes/tax-overview/tax-overview.component.ts");
/* harmony import */ var _Components_taxes_tax_add_tax_add_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Components/taxes/tax-add/tax-add.component */ "./src/app/Components/taxes/tax-add/tax-add.component.ts");
/* harmony import */ var _Components_taxes_tax_edit_tax_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../Components/taxes/tax-edit/tax-edit.component */ "./src/app/Components/taxes/tax-edit/tax-edit.component.ts");
/* harmony import */ var _Components_employees_employees_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../Components/employees/employees.component */ "./src/app/Components/employees/employees.component.ts");
/* harmony import */ var _Components_employees_employee_overview_employee_overview_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../Components/employees/employee-overview/employee-overview.component */ "./src/app/Components/employees/employee-overview/employee-overview.component.ts");
/* harmony import */ var _Components_employees_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../Components/employees/employee-add/employee-add.component */ "./src/app/Components/employees/employee-add/employee-add.component.ts");
/* harmony import */ var _Components_employees_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../Components/employees/employee-edit/employee-edit.component */ "./src/app/Components/employees/employee-edit/employee-edit.component.ts");
/* harmony import */ var _Components_products_products_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../Components/products/products.component */ "./src/app/Components/products/products.component.ts");
/* harmony import */ var _Components_products_product_overview_product_overview_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../Components/products/product-overview/product-overview.component */ "./src/app/Components/products/product-overview/product-overview.component.ts");
/* harmony import */ var _Components_products_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../Components/products/product-add/product-add.component */ "./src/app/Components/products/product-add/product-add.component.ts");
/* harmony import */ var _Components_products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../Components/products/product-edit/product-edit.component */ "./src/app/Components/products/product-edit/product-edit.component.ts");
/* harmony import */ var _Components_assets_assets_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../Components/assets/assets.component */ "./src/app/Components/assets/assets.component.ts");
/* harmony import */ var _Components_assets_asset_overview_asset_overview_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../Components/assets/asset-overview/asset-overview.component */ "./src/app/Components/assets/asset-overview/asset-overview.component.ts");
/* harmony import */ var _Components_assets_asset_add_asset_add_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../Components/assets/asset-add/asset-add.component */ "./src/app/Components/assets/asset-add/asset-add.component.ts");
/* harmony import */ var _Components_assets_asset_edit_asset_edit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../Components/assets/asset-edit/asset-edit.component */ "./src/app/Components/assets/asset-edit/asset-edit.component.ts");
/* harmony import */ var _Components_social_charges_social_charges_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../Components/social-charges/social-charges.component */ "./src/app/Components/social-charges/social-charges.component.ts");
/* harmony import */ var _Components_social_charges_social_charge_overview_social_charge_overview_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../Components/social-charges/social-charge-overview/social-charge-overview.component */ "./src/app/Components/social-charges/social-charge-overview/social-charge-overview.component.ts");
/* harmony import */ var _Components_social_charges_social_charge_add_social_charge_add_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../Components/social-charges/social-charge-add/social-charge-add.component */ "./src/app/Components/social-charges/social-charge-add/social-charge-add.component.ts");
/* harmony import */ var _Components_social_charges_social_charge_edit_social_charge_edit_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../Components/social-charges/social-charge-edit/social-charge-edit.component */ "./src/app/Components/social-charges/social-charge-edit/social-charge-edit.component.ts");
/* harmony import */ var _Components_parameters_parameters_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../Components/parameters/parameters.component */ "./src/app/Components/parameters/parameters.component.ts");
/* harmony import */ var _Components_parameters_parameter_overview_parameter_overview_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../Components/parameters/parameter-overview/parameter-overview.component */ "./src/app/Components/parameters/parameter-overview/parameter-overview.component.ts");
/* harmony import */ var _Components_parameters_parameter_add_parameter_add_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../Components/parameters/parameter-add/parameter-add.component */ "./src/app/Components/parameters/parameter-add/parameter-add.component.ts");
/* harmony import */ var _Components_parameters_parameter_edit_parameter_edit_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../Components/parameters/parameter-edit/parameter-edit.component */ "./src/app/Components/parameters/parameter-edit/parameter-edit.component.ts");
/* harmony import */ var _Components_users_users_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../Components/users/users.component */ "./src/app/Components/users/users.component.ts");
/* harmony import */ var _Components_users_user_overview_user_overview_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../Components/users/user-overview/user-overview.component */ "./src/app/Components/users/user-overview/user-overview.component.ts");
/* harmony import */ var _Components_users_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../Components/users/user-add/user-add.component */ "./src/app/Components/users/user-add/user-add.component.ts");
/* harmony import */ var _Components_users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../Components/users/user-edit/user-edit.component */ "./src/app/Components/users/user-edit/user-edit.component.ts");
/* harmony import */ var _Components_product_classifs_product_classif_overview_product_classif_overview_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../Components/product-classifs/product-classif-overview/product-classif-overview.component */ "./src/app/Components/product-classifs/product-classif-overview/product-classif-overview.component.ts");
/* harmony import */ var _Components_product_classifs_product_classif_add_product_classif_add_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../Components/product-classifs/product-classif-add/product-classif-add.component */ "./src/app/Components/product-classifs/product-classif-add/product-classif-add.component.ts");
/* harmony import */ var _Components_product_classifs_product_classif_edit_product_classif_edit_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../Components/product-classifs/product-classif-edit/product-classif-edit.component */ "./src/app/Components/product-classifs/product-classif-edit/product-classif-edit.component.ts");
/* harmony import */ var _Components_product_classifs_product_classifs_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../Components/product-classifs/product-classifs.component */ "./src/app/Components/product-classifs/product-classifs.component.ts");
/* harmony import */ var _Components_asset_types_asset_types_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../Components/asset-types/asset-types.component */ "./src/app/Components/asset-types/asset-types.component.ts");
/* harmony import */ var _Components_asset_types_asset_type_add_asset_type_add_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../Components/asset-types/asset-type-add/asset-type-add.component */ "./src/app/Components/asset-types/asset-type-add/asset-type-add.component.ts");
/* harmony import */ var _Components_asset_types_asset_type_overview_asset_type_overview_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../Components/asset-types/asset-type-overview/asset-type-overview.component */ "./src/app/Components/asset-types/asset-type-overview/asset-type-overview.component.ts");
/* harmony import */ var _Components_asset_types_asset_type_edit_asset_type_edit_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../Components/asset-types/asset-type-edit/asset-type-edit.component */ "./src/app/Components/asset-types/asset-type-edit/asset-type-edit.component.ts");
/* harmony import */ var _Components_locals_locals_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../Components/locals/locals.component */ "./src/app/Components/locals/locals.component.ts");
/* harmony import */ var _Components_locals_local_overview_local_overview_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../Components/locals/local-overview/local-overview.component */ "./src/app/Components/locals/local-overview/local-overview.component.ts");
/* harmony import */ var _Components_locals_local_add_local_add_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../Components/locals/local-add/local-add.component */ "./src/app/Components/locals/local-add/local-add.component.ts");
/* harmony import */ var _Components_locals_local_edit_local_edit_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../Components/locals/local-edit/local-edit.component */ "./src/app/Components/locals/local-edit/local-edit.component.ts");
/* harmony import */ var _Components_spots_spots_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../Components/spots/spots.component */ "./src/app/Components/spots/spots.component.ts");
/* harmony import */ var _Components_spots_spot_overview_spot_overview_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../Components/spots/spot-overview/spot-overview.component */ "./src/app/Components/spots/spot-overview/spot-overview.component.ts");
/* harmony import */ var _Components_spots_spot_add_spot_add_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../Components/spots/spot-add/spot-add.component */ "./src/app/Components/spots/spot-add/spot-add.component.ts");
/* harmony import */ var _Components_spots_spot_edit_spot_edit_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../Components/spots/spot-edit/spot-edit.component */ "./src/app/Components/spots/spot-edit/spot-edit.component.ts");
/* harmony import */ var _Components_entry_accounts_entry_account_overview_entry_account_overview_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../Components/entry-accounts/entry-account-overview/entry-account-overview.component */ "./src/app/Components/entry-accounts/entry-account-overview/entry-account-overview.component.ts");
/* harmony import */ var _Components_entry_accounts_entry_account_add_entry_account_add_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../Components/entry-accounts/entry-account-add/entry-account-add.component */ "./src/app/Components/entry-accounts/entry-account-add/entry-account-add.component.ts");
/* harmony import */ var _Components_entry_accounts_entry_account_edit_entry_account_edit_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../Components/entry-accounts/entry-account-edit/entry-account-edit.component */ "./src/app/Components/entry-accounts/entry-account-edit/entry-account-edit.component.ts");
/* harmony import */ var _Components_entry_accounts_entry_accounts_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../Components/entry-accounts/entry-accounts.component */ "./src/app/Components/entry-accounts/entry-accounts.component.ts");
/* harmony import */ var _Components_cost_maps_cost_maps_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../Components/cost-maps/cost-maps.component */ "./src/app/Components/cost-maps/cost-maps.component.ts");
/* harmony import */ var _Components_cost_maps_cost_map_overview_cost_map_overview_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../Components/cost-maps/cost-map-overview/cost-map-overview.component */ "./src/app/Components/cost-maps/cost-map-overview/cost-map-overview.component.ts");
/* harmony import */ var _Components_cost_maps_cost_map_add_cost_map_add_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../Components/cost-maps/cost-map-add/cost-map-add.component */ "./src/app/Components/cost-maps/cost-map-add/cost-map-add.component.ts");
/* harmony import */ var _Components_cost_maps_cost_map_edit_cost_map_edit_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../Components/cost-maps/cost-map-edit/cost-map-edit.component */ "./src/app/Components/cost-maps/cost-map-edit/cost-map-edit.component.ts");
/* harmony import */ var _Components_cost_maps_cost_map_view_cost_map_view_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../Components/cost-maps/cost-map-view/cost-map-view.component */ "./src/app/Components/cost-maps/cost-map-view/cost-map-view.component.ts");
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
            { path: 'edit/:rule_id', component: _Components_branches_branch_edit_branch_edit_component__WEBPACK_IMPORTED_MODULE_10__["BranchEditComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'cost_centers', component: _Components_cost_centers_cost_center_component__WEBPACK_IMPORTED_MODULE_12__["CostCenterComponent"],
        children: [
            { path: '', component: _Components_cost_centers_cost_center_overview_cost_center_overview_component__WEBPACK_IMPORTED_MODULE_13__["CostCenterOverviewComponent"] },
            { path: 'add', component: _Components_cost_centers_cost_center_add_cost_center_add_component__WEBPACK_IMPORTED_MODULE_14__["CostCenterAddComponent"] },
            { path: 'edit/:rule_id', component: _Components_cost_centers_cost_center_edit_cost_center_edit_component__WEBPACK_IMPORTED_MODULE_15__["CostCenterEditComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'accounts', component: _Components_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_16__["AccountsComponent"],
        children: [
            { path: '', component: _Components_accounts_account_overview_account_overview_component__WEBPACK_IMPORTED_MODULE_17__["AccountOverviewComponent"] },
            { path: 'add', component: _Components_accounts_account_add_account_add_component__WEBPACK_IMPORTED_MODULE_18__["AccountAddComponent"] },
            { path: 'edit/:rule_id', component: _Components_accounts_account_edit_account_edit_component__WEBPACK_IMPORTED_MODULE_19__["AccountEditComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'products', component: _Components_products_products_component__WEBPACK_IMPORTED_MODULE_28__["ProductsComponent"],
        children: [
            { path: '', component: _Components_products_product_overview_product_overview_component__WEBPACK_IMPORTED_MODULE_29__["ProductOverviewComponent"] },
            { path: 'add', component: _Components_products_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_30__["ProductAddComponent"] },
            { path: ':type', component: _Components_products_product_overview_product_overview_component__WEBPACK_IMPORTED_MODULE_29__["ProductOverviewComponent"] },
            { path: 'edit/:rule_id', component: _Components_products_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_31__["ProductEditComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'employees', component: _Components_employees_employees_component__WEBPACK_IMPORTED_MODULE_24__["EmployeesComponent"],
        children: [
            { path: '', component: _Components_employees_employee_overview_employee_overview_component__WEBPACK_IMPORTED_MODULE_25__["EmployeeOverviewComponent"] },
            { path: 'add', component: _Components_employees_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_26__["EmployeeAddComponent"] },
            { path: 'edit/:rule_id', component: _Components_employees_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_27__["EmployeeEditComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'assets', component: _Components_assets_assets_component__WEBPACK_IMPORTED_MODULE_32__["AssetsComponent"],
        children: [
            { path: '', component: _Components_assets_asset_overview_asset_overview_component__WEBPACK_IMPORTED_MODULE_33__["AssetOverviewComponent"] },
            { path: 'add', component: _Components_assets_asset_add_asset_add_component__WEBPACK_IMPORTED_MODULE_34__["AssetAddComponent"] },
            { path: 'edit/:rule_id', component: _Components_assets_asset_edit_asset_edit_component__WEBPACK_IMPORTED_MODULE_35__["AssetEditComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'taxes', component: _Components_taxes_taxes_component__WEBPACK_IMPORTED_MODULE_20__["TaxesComponent"],
        children: [
            { path: '', component: _Components_taxes_tax_overview_tax_overview_component__WEBPACK_IMPORTED_MODULE_21__["TaxOverviewComponent"] },
            { path: 'add', component: _Components_taxes_tax_add_tax_add_component__WEBPACK_IMPORTED_MODULE_22__["TaxAddComponent"] },
            { path: 'edit/:rule_id', component: _Components_taxes_tax_edit_tax_edit_component__WEBPACK_IMPORTED_MODULE_23__["TaxEditComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'social_charges', component: _Components_social_charges_social_charges_component__WEBPACK_IMPORTED_MODULE_36__["SocialChargesComponent"],
        children: [
            { path: '', component: _Components_social_charges_social_charge_overview_social_charge_overview_component__WEBPACK_IMPORTED_MODULE_37__["SocialChargeOverviewComponent"] },
            { path: 'add', component: _Components_social_charges_social_charge_add_social_charge_add_component__WEBPACK_IMPORTED_MODULE_38__["SocialChargeAddComponent"] },
            { path: 'edit/:rule_id', component: _Components_social_charges_social_charge_edit_social_charge_edit_component__WEBPACK_IMPORTED_MODULE_39__["SocialChargeEditComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'parameters', component: _Components_parameters_parameters_component__WEBPACK_IMPORTED_MODULE_40__["ParametersComponent"],
        children: [
            { path: '', component: _Components_parameters_parameter_overview_parameter_overview_component__WEBPACK_IMPORTED_MODULE_41__["ParameterOverviewComponent"] },
            { path: 'add', component: _Components_parameters_parameter_add_parameter_add_component__WEBPACK_IMPORTED_MODULE_42__["ParameterAddComponent"] },
            { path: 'edit/:rule_id', component: _Components_parameters_parameter_edit_parameter_edit_component__WEBPACK_IMPORTED_MODULE_43__["ParameterEditComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'users', component: _Components_users_users_component__WEBPACK_IMPORTED_MODULE_44__["UsersComponent"],
        children: [
            { path: '', component: _Components_users_user_overview_user_overview_component__WEBPACK_IMPORTED_MODULE_45__["UserOverviewComponent"] },
            { path: 'add', component: _Components_users_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_46__["UserAddComponent"] },
            { path: 'edit/:rule_id', component: _Components_users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_47__["UserEditComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'product_classifs', component: _Components_product_classifs_product_classifs_component__WEBPACK_IMPORTED_MODULE_51__["ProductClassifsComponent"],
        children: [
            { path: '', component: _Components_product_classifs_product_classif_overview_product_classif_overview_component__WEBPACK_IMPORTED_MODULE_48__["ProductClassifOverviewComponent"] },
            { path: 'add', component: _Components_product_classifs_product_classif_add_product_classif_add_component__WEBPACK_IMPORTED_MODULE_49__["ProductClassifAddComponent"] },
            { path: 'edit/:rule_id', component: _Components_product_classifs_product_classif_edit_product_classif_edit_component__WEBPACK_IMPORTED_MODULE_50__["ProductClassifEditComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'asset_types', component: _Components_asset_types_asset_types_component__WEBPACK_IMPORTED_MODULE_52__["AssetTypesComponent"],
        children: [
            { path: '', component: _Components_asset_types_asset_type_overview_asset_type_overview_component__WEBPACK_IMPORTED_MODULE_54__["AssetTypeOverviewComponent"] },
            { path: 'add', component: _Components_asset_types_asset_type_add_asset_type_add_component__WEBPACK_IMPORTED_MODULE_53__["AssetTypeAddComponent"] },
            { path: 'edit/:rule_id', component: _Components_asset_types_asset_type_edit_asset_type_edit_component__WEBPACK_IMPORTED_MODULE_55__["AssetTypeEditComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'locals', component: _Components_locals_locals_component__WEBPACK_IMPORTED_MODULE_56__["LocalsComponent"],
        children: [
            { path: '', component: _Components_locals_local_overview_local_overview_component__WEBPACK_IMPORTED_MODULE_57__["LocalOverviewComponent"] },
            { path: 'add', component: _Components_locals_local_add_local_add_component__WEBPACK_IMPORTED_MODULE_58__["LocalAddComponent"] },
            { path: 'edit/:rule_id', component: _Components_locals_local_edit_local_edit_component__WEBPACK_IMPORTED_MODULE_59__["LocalEditComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'spots', component: _Components_spots_spots_component__WEBPACK_IMPORTED_MODULE_60__["SpotsComponent"],
        children: [
            { path: '', component: _Components_spots_spot_overview_spot_overview_component__WEBPACK_IMPORTED_MODULE_61__["SpotOverviewComponent"] },
            { path: 'add', component: _Components_spots_spot_add_spot_add_component__WEBPACK_IMPORTED_MODULE_62__["SpotAddComponent"] },
            { path: 'edit/:rule_id', component: _Components_spots_spot_edit_spot_edit_component__WEBPACK_IMPORTED_MODULE_63__["SpotEditComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'entry_accounts', component: _Components_entry_accounts_entry_accounts_component__WEBPACK_IMPORTED_MODULE_67__["EntryAccountsComponent"],
        children: [
            { path: '', component: _Components_entry_accounts_entry_account_overview_entry_account_overview_component__WEBPACK_IMPORTED_MODULE_64__["EntryAccountOverviewComponent"] },
            { path: 'add', component: _Components_entry_accounts_entry_account_add_entry_account_add_component__WEBPACK_IMPORTED_MODULE_65__["EntryAccountAddComponent"] },
            { path: 'edit/:rule_id', component: _Components_entry_accounts_entry_account_edit_entry_account_edit_component__WEBPACK_IMPORTED_MODULE_66__["EntryAccountEditComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: 'cost_maps', component: _Components_cost_maps_cost_maps_component__WEBPACK_IMPORTED_MODULE_68__["CostMapsComponent"],
        children: [
            { path: '', component: _Components_cost_maps_cost_map_overview_cost_map_overview_component__WEBPACK_IMPORTED_MODULE_69__["CostMapOverviewComponent"] },
            { path: 'add', component: _Components_cost_maps_cost_map_add_cost_map_add_component__WEBPACK_IMPORTED_MODULE_70__["CostMapAddComponent"] },
            { path: 'edit/:rule_id', component: _Components_cost_maps_cost_map_edit_cost_map_edit_component__WEBPACK_IMPORTED_MODULE_71__["CostMapEditComponent"] },
            { path: 'view/:rule_id', component: _Components_cost_maps_cost_map_view_cost_map_view_component__WEBPACK_IMPORTED_MODULE_72__["CostMapViewComponent"] }
        ],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: '**', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] }
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

module.exports = __webpack_require__(/*! /home/nouser/Projects/freelancer/pph/milton/weprice/app/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map