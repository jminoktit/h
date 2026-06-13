"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_cancel-loan-rejection_cancel-loan-rejection_module_ts"],{

/***/ 18269:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/cancel-loan-rejection/cancel-loan-rejection-routing.module.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelLoanRejectionPageRoutingModule": function() { return /* binding */ CancelLoanRejectionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cancel_loan_rejection_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancel-loan-rejection.page */ 83406);






var routes = [{
  path: '',
  component: _cancel_loan_rejection_page__WEBPACK_IMPORTED_MODULE_2__.CancelLoanRejectionPage
}];

var CancelLoanRejectionPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CancelLoanRejectionPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CancelLoanRejectionPageRoutingModule);
});

CancelLoanRejectionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], CancelLoanRejectionPageRoutingModule);


/***/ }),

/***/ 72537:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/loans/cancel-loan-rejection/cancel-loan-rejection.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelLoanRejectionPageModule": function() { return /* binding */ CancelLoanRejectionPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cancel_loan_rejection_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancel-loan-rejection-routing.module */ 18269);
/* harmony import */ var _cancel_loan_rejection_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cancel-loan-rejection.page */ 83406);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var CancelLoanRejectionPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CancelLoanRejectionPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CancelLoanRejectionPageModule);
});

CancelLoanRejectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _cancel_loan_rejection_routing_module__WEBPACK_IMPORTED_MODULE_2__.CancelLoanRejectionPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_cancel_loan_rejection_page__WEBPACK_IMPORTED_MODULE_3__.CancelLoanRejectionPage]
})], CancelLoanRejectionPageModule);


/***/ }),

/***/ 83406:
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/loans/cancel-loan-rejection/cancel-loan-rejection.page.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelLoanRejectionPage": function() { return /* binding */ CancelLoanRejectionPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _cancel_loan_rejection_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cancel-loan-rejection.page.html?ngResource */ 57927);
/* harmony import */ var _cancel_loan_rejection_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cancel-loan-rejection.page.scss?ngResource */ 98314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);














var CancelLoanRejectionPage = /*#__PURE__*/function () {
  function CancelLoanRejectionPage(env, http, formBuilder, datepipe, alertService, ReferencesService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CancelLoanRejectionPage);

    this.env = env;
    this.http = http;
    this.formBuilder = formBuilder;
    this.datepipe = datepipe;
    this.alertService = alertService;
    this.ReferencesService = ReferencesService;
    this.today = new Date();
    this.com_dec_date = "";
    this.application_key = "";
    this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe("en-US");
    this.showLoader = false;
    this.isSearching = true;
    this.isLoanCancelForm = false;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CancelLoanRejectionPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.cancelLoanForm = this.formBuilder.group({
        client_key: [""],
        com_dec_date: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        loan_rej_code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        application_key: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        loan_notes: [""]
      });
    }
  }, {
    key: "NumberFormatStyle",
    value: function NumberFormatStyle(number) {
      var result = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatNumber)(Number(number), "en-US", "1.2-2");
      return result;
    }
  }, {
    key: "clientSelected",
    value: function clientSelected(event) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.SearchResult = event;
                this.showLoader = true;
                this.isSearching = false;
                this.http.post(this.env.API_URL + "api/Loan/GetLoanCancelByLoanKey", {
                  loan_key: event.loan_key.toString()
                }).subscribe({
                  next: function next(data) {
                    _this.LoanCancel = data;

                    var ChangedFormat = _this.pipe.transform(_this.today, "yyyy-MM-dd");

                    _this.com_dec_date = ChangedFormat;

                    _this.cancelLoanForm.patchValue({
                      com_dec_date: _this.com_dec_date,
                      application_key: _this.LoanCancel.application_key,
                      loan_notes: _this.LoanCancel.loan_notes
                    });

                    _this.isLoanCancelForm = true;
                    _this.showLoader = false;
                  },
                  error: function error(err) {
                    _this.alertService.showAlertError(err.error, false);

                    _this.showLoader = false;
                  }
                });
                this.http.post(this.env.API_URL + "api/Loan/GetLoanInstallments", {
                  loan_key: event.loan_key.toString()
                }).subscribe({
                  next: function next(data) {
                    _this.LoanInstallments = data["installments"];
                    _this.isLoanCancelForm = true;
                    _this.showLoader = false;
                  },
                  error: function error(err) {
                    _this.alertService.showAlertError(err.error, false);

                    _this.showLoader = false;
                  }
                });
                _context.next = 7;
                return this.ReferencesService.LoanRejRef();

              case 7:
                this.LoanRejRef = _context.sent;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "checker",
    value: function checker(input) {
      return this.datepipe.transform(input, "yyyy-MM-dd");
    }
  }, {
    key: "clearForms",
    value: function clearForms() {
      this.LoanCancel = null;
      this.LoanInstallments = [];
      this.cancelLoanForm.reset();
      this.isSearching = true;
      this.isLoanCancelForm = false;
    }
  }, {
    key: "formSubmit",
    value: function formSubmit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.cancelLoanForm.valid) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return this.alertService.showAlertError("يجب ادخال سبب الرفض", false);

              case 3:
                _context2.next = 10;
                break;

              case 5:
                _context2.next = 7;
                return this.alertService.SaveAlert();

              case 7:
                if (!_context2.sent) {
                  _context2.next = 10;
                  break;
                }

                this.showLoader = true;
                this.http.post(this.env.API_URL + "api/Loan/LoanCancel", {
                  application_key: this.cancelLoanForm.value.application_key,
                  com_dec_date: this.cancelLoanForm.value.com_dec_date,
                  loan_rej_code: this.cancelLoanForm.value.loan_rej_code,
                  loan_notes: this.cancelLoanForm.value.loan_notes,
                  app_uuc: this.LoanCancel.uuc_client
                }).subscribe({
                  next: function next(data) {
                    _this2.clearForms();

                    _this2.showLoader = false;

                    _this2.alertService.showAlertConfirm("تم الغاء القرض", true);
                  },
                  error: function error(err) {
                    _this2.alertService.showAlertError(err.error, false);

                    _this2.showLoader = false;
                  }
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }]);

  return CancelLoanRejectionPage;
}();

CancelLoanRejectionPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_7__.ReferencesService
  }];
};

CancelLoanRejectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-cancel-loan-rejection",
  template: _cancel_loan_rejection_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_cancel_loan_rejection_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], CancelLoanRejectionPage);


/***/ }),

/***/ 98314:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/cancel-loan-rejection/cancel-loan-rejection.page.scss?ngResource ***!
  \****************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5jZWwtbG9hbi1yZWplY3Rpb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 57927:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/cancel-loan-rejection/cancel-loan-rejection.page.html?ngResource ***!
  \****************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div\n  class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\"\n>\n  <div>\n    <h4 class=\"mr-1 mb-md-0\">إلغاء القرض</h4>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-client-search\n      *ngIf=\"isSearching\"\n      [sourcePage]=\"11\"\n      [pageAction]=\"0\"\n      [resultType]=\"1\"\n      [initialSearchType]=\"'1'\"\n      (selectedClient)=\"clientSelected($event)\"\n    >\n    </app-client-search>\n  </div>\n</div>\n<form [formGroup]=\"cancelLoanForm\">\n  <div class=\"row\" *ngIf=\"isLoanCancelForm\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row d-flex align-items-center\">\n            <div class=\"col-lg-10\">\n              <div class=\"row d-flex align-items-center\">\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>كودالعميل</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanCancel.client_no}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>أسم العميل</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanCancel.client_name}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>رقم القومي للعميل</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanCancel.nation_id}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>عنوان العميل</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanCancel.client_add}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>رقم المحمول العميل</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanCancel.mobile_1}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\" *ngIf=\"LoanCancel.co_name\">\n                  <div class=\"form-group\">\n                    <h6>الضامن الاول</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanCancel.co_name}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\" *ngIf=\"LoanCancel.co_id\">\n                  <div class=\"form-group\">\n                    <h6>رقم القومي للضامن الاول</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanCancel.co_id}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\" *ngIf=\"LoanCancel.co_mob\">\n                  <div class=\"form-group\">\n                    <h6>رقم المحمول للضامن الاول</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanCancel.co_mob}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\" *ngIf=\"LoanCancel.co_addr\">\n                  <div class=\"form-group\">\n                    <h6>عنوان الضامن الاول</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanCancel.co_addr}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\" *ngIf=\"LoanCancel.co2_name\">\n                  <div class=\"form-group\">\n                    <h6>الضامن الثاني</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanCancel.co2_name}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\" *ngIf=\"LoanCancel.co2_id\">\n                  <div class=\"form-group\">\n                    <h6>رقم القومي للضامن الثاني</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanCancel.co2_id}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\" *ngIf=\"LoanCancel.co2_mob\">\n                  <div class=\"form-group\">\n                    <h6>رقم المحمول للضامن الثاني</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanCancel.co2_mob}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\" *ngIf=\"LoanCancel.co2_addr\">\n                  <div class=\"form-group\">\n                    <h6>عنوان الضامن الثاني</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanCancel.co2_addr}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>قيمة القرض</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{NumberFormatStyle(LoanCancel.loan_am)}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>عدد الأقساط</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanCancel.loan_no}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>المندوب</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanCancel.officer_name}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>تاريخ الإنشاء</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{checker(LoanCancel.loan_date) }}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>تاريخ الالغاء</h6>\n                    <div>\n                      <ion-input\n                        class=\"form-control\"\n                        formControlName=\"com_dec_date\"\n                        [disabled]=\"true\"\n                      ></ion-input>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-12 col-md-4\">\n                  <div class=\"form-group\">\n                    <ion-label class=\"form-label form-label-required\">\n                      سبب الالغاء\n                    </ion-label>\n                    <ion-select\n                      class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                      interface=\"popover\"\n                      placeholder=\"سبب الالغاء \"\n                      formControlName=\"loan_rej_code\"\n                    >\n                      <ion-select-option\n                        class=\"pb-2\"\n                        *ngFor=\"let type of LoanRejRef\"\n                        [value]=\"type.loan_rej_code\"\n                      >\n                        {{type.loan_rej_desc}}\n                      </ion-select-option>\n                    </ion-select>\n                  </div>\n                </div>\n                <div class=\"col-lg-12\">\n                  <div class=\"form-group\">\n                    <h6>ملاحظات</h6>\n                    <div>\n                      <ion-textarea\n                        formControlName=\"loan_notes\"\n                        [autoGrow]=\"true\"\n                      ></ion-textarea>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"ion-padding\" slot=\"content\" *ngIf=\"isLoanCancelForm\">\n    <div>\n      <h5 class=\"mr-1 mb-md-0 pb-3\">الاقساط</h5>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"row justify-content-center\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\">رقم القسط</th>\n                  <th class=\"text-center\">القيمة</th>\n                  <th class=\"text-center\">الاصل</th>\n                  <th class=\"text-center\">المصاريف</th>\n                  <th class=\"text-center\">تاريخ الاستحقاق</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let installment of LoanInstallments; let i = index\">\n                  <td class=\"text-center\">{{ installment.inst_serial }}</td>\n                  <td class=\"text-center\">\n                    {{ NumberFormatStyle(installment.inst_am) }}\n                  </td>\n                  <td class=\"text-center\">\n                    {{ NumberFormatStyle(installment.inst_princ) }}\n                  </td>\n                  <td class=\"text-center\">\n                    {{ NumberFormatStyle(installment.inst_int)}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{ checker(installment.inst_mat_date) }}\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"row-12\">\n          <div class=\"d-flex justify-content-center mt-2\">\n            <ion-button color=\"danger\" (click)=\"clearForms()\">\n              رجوع\n            </ion-button>\n            <ion-button (click)=\"formSubmit()\"> إلغاء القرض </ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_cancel-loan-rejection_cancel-loan-rejection_module_ts.js.map