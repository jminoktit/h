"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_head-office_loan-usage_loan-usage_module_ts"],{

/***/ 54651:
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/head-office/loan-usage/loan-usage-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanUsagePageRoutingModule": function() { return /* binding */ LoanUsagePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_usage_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-usage.page */ 76172);






var routes = [{
  path: '',
  component: _loan_usage_page__WEBPACK_IMPORTED_MODULE_2__.LoanUsagePage
}];

var LoanUsagePageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanUsagePageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanUsagePageRoutingModule);
});

LoanUsagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoanUsagePageRoutingModule);


/***/ }),

/***/ 85951:
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/head-office/loan-usage/loan-usage.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanUsagePageModule": function() { return /* binding */ LoanUsagePageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_usage_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-usage-routing.module */ 54651);
/* harmony import */ var _loan_usage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-usage.page */ 76172);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var LoanUsagePageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanUsagePageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanUsagePageModule);
});

LoanUsagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _loan_usage_routing_module__WEBPACK_IMPORTED_MODULE_2__.LoanUsagePageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_loan_usage_page__WEBPACK_IMPORTED_MODULE_3__.LoanUsagePage]
})], LoanUsagePageModule);


/***/ }),

/***/ 76172:
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/head-office/loan-usage/loan-usage.page.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanUsagePage": function() { return /* binding */ LoanUsagePage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _loan_usage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-usage.page.html?ngResource */ 86558);
/* harmony import */ var _loan_usage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-usage.page.scss?ngResource */ 7006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);














var LoanUsagePage = /*#__PURE__*/function () {
  function LoanUsagePage(formBuilder, datepipe, http, env, alertServices, ReferencesService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoanUsagePage);

    this.formBuilder = formBuilder;
    this.datepipe = datepipe;
    this.http = http;
    this.env = env;
    this.alertServices = alertServices;
    this.ReferencesService = ReferencesService;
    this.LoanUsageForm = this.formBuilder.group({
      loan_usage_code: [""],
      loan_usage_desc: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      ref_code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
    this.showLoader = false;
    this.isSubmitted = false;
    this.isInserting = false;
    this.isUpdating = false;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoanUsagePage, [{
    key: "noWhitespaceValidator",
    value: function noWhitespaceValidator(control) {
      var isWhitespace = control.value !== null && (control.value || "").toString().trim().length === 0;
      var isValid = !isWhitespace;
      return isValid ? null : {
        whitespace: true
      };
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.loadLoanUsage();
    }
  }, {
    key: "loadLoanUsage",
    value: function loadLoanUsage() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.ReferencesService.getAllLoanUsage();

              case 2:
                this.LoanUsage = _context.sent;
                _context.next = 5;
                return this.ReferencesService.GetAllLoanUsageRef();

              case 5:
                this.LoanUsageRefTypes = _context.sent;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "updateLoanUsage",
    value: function updateLoanUsage(index) {
      var LoanUsage = this.LoanUsage[index];
      this.LoanUsageForm.patchValue({
        loan_usage_code: LoanUsage.loan_usage_code,
        loan_usage_desc: LoanUsage.loan_usage_desc,
        ref_code: Number(LoanUsage.usage_ref_code)
      });
      this.isInserting = false;
      this.isUpdating = true;
    }
  }, {
    key: "insertLoanUsage",
    value: function insertLoanUsage() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.isUpdating = false;
                this.isInserting = true;

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "deleteLoanUsage",
    value: function deleteLoanUsage(loan_usage_code) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.alertServices.SaveAlert("هل تريد الحذف؟");

              case 2:
                if (!_context3.sent) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 5;
                return this.ReferencesService.GetLoanUsageDelete(loan_usage_code.toString()).then(function () {
                  _this.alertServices.showAlertConfirm("تم الحذف بنجاح", true);
                }).catch(function (err) {
                  _this.alertServices.showAlertError("لا يمكن حذف هذا الاستخدام", false);
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "LoanUsageRef",
    value: function LoanUsageRef() {}
  }, {
    key: "clearForms",
    value: function clearForms() {
      this.isInserting = false;
      this.isUpdating = false;
      this.isSubmitted = false;
      this.LoanUsageForm.reset();
    }
  }, {
    key: "submitLoanUsageInsert",
    value: function submitLoanUsageInsert() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                if (!this.LoanUsageForm.valid) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 4;
                return this.alertServices.SaveAlert("هل تريد الاضافة؟");

              case 4:
                if (!_context4.sent) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 7;
                return this.ReferencesService.GetLoanUsageInsert(this.LoanUsageForm.value.loan_usage_desc, this.LoanUsageForm.value.ref_code).then(function () {
                  _this2.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                });

              case 7:
                _context4.next = 10;
                break;

              case 9:
                this.alertServices.showAlertError("يجب ادخال جميع البيانات", false);

              case 10:
                _context4.next = 14;
                break;

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](0);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 12]]);
      }));
    }
  }, {
    key: "submitLoanUsageUpdate",
    value: function submitLoanUsageUpdate() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var _this3 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;

                if (!this.LoanUsageForm.valid) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 4;
                return this.alertServices.SaveAlert("هل تريد تعديل البيانات؟");

              case 4:
                if (!_context5.sent) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 7;
                return this.ReferencesService.GetLoanUsageUpdate(Number(this.LoanUsageForm.value.loan_usage_code), this.LoanUsageForm.value.loan_usage_desc, this.LoanUsageForm.value.ref_code).then(function () {
                  _this3.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                });

              case 7:
                _context5.next = 10;
                break;

              case 9:
                this.alertServices.showAlertError("يجب ادخال جميع البيانات", false);

              case 10:
                _context5.next = 14;
                break;

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](0);

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 12]]);
      }));
    }
  }]);

  return LoanUsagePage;
}();

LoanUsagePage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_7__.ReferencesService
  }];
};

LoanUsagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-c",
  template: _loan_usage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_loan_usage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], LoanUsagePage);


/***/ }),

/***/ 7006:
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/loan-usage/loan-usage.page.scss?ngResource ***!
  \************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FuLXVzYWdlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 86558:
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/loan-usage/loan-usage.page.html?ngResource ***!
  \************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div class=\"ion-padding\" *ngIf=\"!isInserting && !isUpdating\">\n  <div>\n    <h5 class=\"mr-1 mb-md-0 pb-3\">إستخدام القرض</h5>\n  </div>\n  <div class=\"card\">\n    <div class=\"table-responsive\">\n      <table class=\"table card-body\">\n        <thead>\n          <th class=\"text-center\">إستخدام القرض </th>\n          <th></th>\n          <th class=\"text-center\">\n            <ion-button (click)=\"insertLoanUsage()\"><ion-icon name=\"add-outline\"></ion-icon></ion-button>\n          </th>\n        </thead>\n\n        <tbody>\n          <tr *ngFor=\"let LoanUsage of LoanUsage; let i = index\">\n            <td class=\"text-center\">{{LoanUsage.loan_usage_desc}}</td>\n\n            <td class=\"text-center\">\n              <ion-button (click)=\"updateLoanUsage(i)\"><ion-icon name=\"create-outline\"></ion-icon></ion-button>\n            </td>\n            <td class=\"text-center\">\n              <ion-button color=\"danger\" (click)=\"deleteLoanUsage(LoanUsage.loan_usage_code)\">\n                <ion-icon name=\"trash-outline\"></ion-icon>\n              </ion-button>\n            </td>\n\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"isInserting || isUpdating\">\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"LoanUsageForm\">\n\n          <div class=\"col-12 col-md-4\">\n            <ion-label class=\"form-label form-label-required\">\n              إستخدام القرض\n            </ion-label>\n            <ion-input type=\"text\" class=\"form-control\" formControlName=\"loan_usage_desc\">\n            </ion-input>\n            <div class=\"text-danger input-validator\"\n              *ngIf=\"isSubmitted && ((LoanUsageForm.controls['loan_usage_desc'].errors?.['required']))\" role=\"alert\">\n              يجب ادخال إستخدام القرض\n            </div>\n          </div>\n\n          <div class=\"col-12 col-md-4\">\n            <ion-label class=\"form-label form-label-required\">\n              نوع إستخدام القرض\n            </ion-label>\n            <ion-select class=\"subselect ionSelectSize ion-text-wrap select-text\" (ionChange)=\"LoanUsageRef()\"\n              interface=\"popover\" placeholder=\"نوع إستخدام القرض \" formControlName=\"ref_code\">\n              <ion-select-option class=\"pb-2\" *ngFor=\"let type of LoanUsageRefTypes\" [value]=\"type.ref_code\">\n                {{type.ref_desc}}\n              </ion-select-option>\n            </ion-select>\n          </div>\n\n          <div class=\"row-12 pt-3\">\n            <div class=\"d-flex justify-content-center mt-2\">\n              <ion-button color=\"danger\" (click)=\"clearForms()\">\n                رجوع\n              </ion-button>\n              <ion-button *ngIf=\"isInserting\" (click)=\"submitLoanUsageInsert()\"> حفظ </ion-button>\n              <ion-button *ngIf=\"isUpdating\" (click)=\"submitLoanUsageUpdate()\"> حفظ </ion-button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_head-office_loan-usage_loan-usage_module_ts.js.map