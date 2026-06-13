"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_loan-write_loan-write_module_ts"],{

/***/ 11937:
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-write/loan-write-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanWritePageRoutingModule": function() { return /* binding */ LoanWritePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_write_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-write.page */ 21365);






var routes = [{
  path: '',
  component: _loan_write_page__WEBPACK_IMPORTED_MODULE_2__.LoanWritePage
}];

var LoanWritePageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanWritePageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanWritePageRoutingModule);
});

LoanWritePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoanWritePageRoutingModule);


/***/ }),

/***/ 68766:
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-write/loan-write.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanWritePageModule": function() { return /* binding */ LoanWritePageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_write_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-write-routing.module */ 11937);
/* harmony import */ var _loan_write_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-write.page */ 21365);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var LoanWritePageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanWritePageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanWritePageModule);
});

LoanWritePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_loan_write_routing_module__WEBPACK_IMPORTED_MODULE_2__.LoanWritePageRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_loan_write_page__WEBPACK_IMPORTED_MODULE_3__.LoanWritePage]
})], LoanWritePageModule);


/***/ }),

/***/ 21365:
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-write/loan-write.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanWritePage": function() { return /* binding */ LoanWritePage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _loan_write_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-write.page.html?ngResource */ 72488);
/* harmony import */ var _loan_write_page_css_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-write.page.css?ngResource */ 10914);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);
/* harmony import */ var src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/validators/custom-validators */ 92609);
/* harmony import */ var src_app_core_services_installments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/installments.service */ 13243);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);















var LoanWritePage = /*#__PURE__*/function () {
  function LoanWritePage(alertService, formBuilder, loanService, installmentService, authService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoanWritePage);

    this.alertService = alertService;
    this.formBuilder = formBuilder;
    this.loanService = loanService;
    this.installmentService = installmentService;
    this.authService = authService; //#region Variables

    this.showLoader = false;
  } //#endregion


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoanWritePage, [{
    key: "writeoffInformation",
    get: function get() {
      return this.databaseResponses.writeoffInformation;
    }
  }, {
    key: "getInstallmentsByLoanKey",
    get: function get() {
      return this.databaseResponses.getInstallmentsByLoanKey;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.initializeForms();
                _context.next = 3;
                return this.authService.getUserInfo();

              case 3:
                this.userInfo = _context.sent;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "initializeForms",
    value: function initializeForms() {
      this.clientSearchCardSection = {
        visible: true,
        clientInformation: null
      };
      this.loanSection = {
        checkIfInputsValid: false,
        visible: false,
        formGroup: this.formBuilder.group({
          transactionDate: [null, src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_7__.dateTypeStringValidator({
            required: true
          })],
          writeoff_cause: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
          loanNotes: []
        })
      };
      this.databaseResponses = {
        writeoffInformation: null,
        getInstallmentsByLoanKey: [],
        loanCanRes: []
      };
    }
  }, {
    key: "clientSelected",
    value: function clientSelected(searchResult) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.showLoader = true;
                _context2.next = 4;
                return this.loanService.GetLoanCancelRef(Number(this.userInfo.org_code)).toPromise();

              case 4:
                this.databaseResponses.loanCanRes = _context2.sent;
                this.writeoff_cause = this.databaseResponses.loanCanRes;
                this.clientSearchCardSection.clientInformation = searchResult;
                _context2.next = 9;
                return this.loanService.getLoanWriteOffInformationByLoanKey(Number(searchResult.loan_key)).toPromise();

              case 9:
                this.databaseResponses.writeoffInformation = _context2.sent;
                this.loanSection.formGroup.patchValue({
                  loanNotes: this.databaseResponses.writeoffInformation.loanNotes
                });
                _context2.next = 13;
                return this.installmentService.getInstallmentsByLoanKey(Number(searchResult.loan_key)).toPromise();

              case 13:
                this.databaseResponses.getInstallmentsByLoanKey = _context2.sent;
                this.clientSearchCardSection.visible = false;
                this.loanSection.visible = true;
                _context2.next = 21;
                break;

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](0);
                this.handleError(_context2.t0);

              case 21:
                _context2.prev = 21;
                this.showLoader = false;
                return _context2.finish(21);

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 18, 21, 24]]);
      }));
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var errorMessage;

      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpErrorResponse) {
        errorMessage = JSON.stringify(error.error);
      } else if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = String(error);
      }

      this.alertService.showAlertError(errorMessage, false);
      console.error("Error:", error);
    }
  }, {
    key: "backButton",
    value: function backButton() {
      if (this.loanSection.visible) {
        this.loanSection.checkIfInputsValid = false;
        this.loanSection.visible = false;
        this.loanSection.formGroup.reset();
        this.clientSearchCardSection = {
          clientInformation: null,
          visible: true
        };
      }
    }
  }, {
    key: "insertwriteoffLoan",
    value: function insertwriteoffLoan() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var value, request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.loanSection.checkIfInputsValid = true;

                if (this.loanSection.formGroup.valid) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return");

              case 4:
                _context3.next = 6;
                return this.alertService.SaveAlert();

              case 6:
                if (_context3.sent) {
                  _context3.next = 8;
                  break;
                }

                return _context3.abrupt("return");

              case 8:
                this.showLoader = true;
                value = this.loanSection.formGroup.value;
                request = {
                  loanKey: this.writeoffInformation.loanKey,
                  loanUuc: this.writeoffInformation.loanUuc,
                  transactionDate: value.transactionDate,
                  wrt_off_reason: value.writeoff_cause,
                  loanNotes: value.loanNotes
                };
                _context3.next = 13;
                return this.loanService.insertLoanWriteoff(request).toPromise();

              case 13:
                _context3.next = 15;
                return this.alertService.showAlertConfirm("تم الحفظ بنجاح", true);

              case 15:
                _context3.next = 20;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3["catch"](0);
                this.handleError(_context3.t0);

              case 20:
                _context3.prev = 20;
                this.showLoader = false;
                return _context3.finish(20);

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 17, 20, 23]]);
      }));
    }
  }]);

  return LoanWritePage;
}();

LoanWritePage.ctorParameters = function () {
  return [{
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
  }, {
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_6__.LoansService
  }, {
    type: src_app_core_services_installments_service__WEBPACK_IMPORTED_MODULE_8__.InstallmentsService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_9__.MohassilAuthService
  }];
};

LoanWritePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: "app-loan-write",
  template: _loan_write_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_loan_write_page_css_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], LoanWritePage);


/***/ }),

/***/ 10914:
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-write/loan-write.page.css?ngResource ***!
  \*****************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FuLXdyaXRlLnBhZ2UuY3NzIn0= */";

/***/ }),

/***/ 72488:
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-write/loan-write.page.html?ngResource ***!
  \******************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n\n<ion-toolbar>\n  <ion-title> شطب القرض</ion-title>\n</ion-toolbar>\n\n<app-client-search\n  *ngIf=\"clientSearchCardSection.visible\"\n  [sourcePage]=\"10\"\n  [pageAction]=\"4\"\n  [resultType]=\"1\"\n  (selectedClient)=\"clientSelected($event)\"\n  initialSearchType=\"1\"\n>\n</app-client-search>\n\n<ion-card *ngIf=\"loanSection.visible\">\n  <ion-card-content>\n    <form [formGroup]=\"loanSection.formGroup\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label\"> اسم العميل </ion-label>\n            <ion-label class=\"form-control\">\n              {{writeoffInformation.clientName}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> كود العميل </ion-label>\n            <ion-label class=\"form-control\">\n              {{writeoffInformation.branchCode}}/{{writeoffInformation.clientCode}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> رقم القرض </ion-label>\n            <ion-label class=\"form-control\">\n              {{writeoffInformation.loanCode}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> قيمة القرض </ion-label>\n            <ion-label class=\"form-control\">\n              {{writeoffInformation.loanAmount | number:'1.0-0'}}\n            </ion-label>\n          </ion-col>\n\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">تاريخ القرض</ion-label>\n            <ion-label class=\"form-control\">\n              {{writeoffInformation.loanDate | date:'yyyy-MM-dd'}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">فترة السداد كل</ion-label>\n            <ion-label class=\"form-control\">\n              {{writeoffInformation.periodLength}}\n              {{writeoffInformation.periodTypeDescription}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">بنك الاصدار</ion-label>\n            <ion-label class=\"form-control\">\n              {{writeoffInformation.bankName}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">رقم الشيك</ion-label>\n            <ion-label class=\"form-control\">\n              {{writeoffInformation.loanVoucher}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">اسم المندوب</ion-label>\n            <ion-label class=\"form-control\">\n              {{writeoffInformation.officerName}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label class=\"form-label\">ملاحظات القرض</ion-label>\n            <ion-textarea\n              formControlName=\"loanNotes\"\n              [autoGrow]=\"true\"\n            ></ion-textarea>\n          </ion-col>\n        </ion-row>\n        <ion-item class=\"ion-padding-bottom\"></ion-item>\n        <ion-grid>\n          <ion-row class=\"header-row\">\n            <ion-col>\n              <ion-label>رقم القسط</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>قيمة القسط</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>تاريخ الاستحقاق</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label> حالة القسط</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row\n            class=\"details-row\"\n            *ngFor=\"let inst of getInstallmentsByLoanKey\"\n          >\n            <ion-col>\n              <ion-label\n                >{{inst.installmentSerial| number:'1.0-0':'en-US'}}</ion-label\n              >\n            </ion-col>\n            <ion-col>\n              <ion-label\n                >{{inst.installmentAmount| number:'1.0-0':'en-US'}}</ion-label\n              >\n            </ion-col>\n            <ion-col>\n              <ion-label\n                >{{inst.installmentMaturityDate| date:'yyyy-MM-dd'}}</ion-label\n              >\n            </ion-col>\n            <ion-col>\n              <ion-label>{{inst.installmentStatusDescription}}</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-item class=\"ion-padding-bottom\"></ion-item>\n        <ion-row class=\"justify-content-center\">\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\">\n              سبب الشطب\n            </ion-label>\n            <ion-select\n              interface=\"popover\"\n              formControlName=\"writeoff_cause\"\n              placeholder=\"اختيار سبب الشطب\"\n              class=\"subselect\"\n            >\n              <ion-select-option\n                *ngFor=\"let writeoff_cause of writeoff_cause\"\n                [value]=\"writeoff_cause.loan_rej_code\"\n              >\n                {{writeoff_cause.loan_rej_desc}}\n              </ion-select-option>\n            </ion-select>\n            <html-validations\n              [validationInput]=\"{\n              showError:loanSection.checkIfInputsValid,\n              formGroup: loanSection.formGroup,\n              formControlName: 'writeoff_cause'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\">\n              تاريخ الحركة\n            </ion-label>\n            <ngx-datepicker\n              [parentForm]=\"loanSection.formGroup\"\n              [parentFormControllerName]=\"'transactionDate'\"\n            ></ngx-datepicker>\n            <html-validations\n              [validationInput]=\"{\n              showError:loanSection.checkIfInputsValid,\n              formGroup: loanSection.formGroup,\n              formControlName: 'transactionDate'}\"\n            ></html-validations>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"justify-content-center ion-padding\">\n          <ion-button color=\"danger\" (click)=\"backButton()\">رجوع</ion-button>\n          <ion-button (click)=\"insertwriteoffLoan()\"> حفظ </ion-button>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_loan-write_loan-write_module_ts.js.map