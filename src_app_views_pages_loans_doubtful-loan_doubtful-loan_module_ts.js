"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_doubtful-loan_doubtful-loan_module_ts"],{

/***/ 30665:
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/loans/doubtful-loan/doubtful-loan-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoubtfulLoanPageRoutingModule": function() { return /* binding */ DoubtfulLoanPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _doubtful_loan_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doubtful-loan.page */ 84434);






var routes = [{
  path: '',
  component: _doubtful_loan_page__WEBPACK_IMPORTED_MODULE_2__.DoubtfulLoanPage
}];

var DoubtfulLoanPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DoubtfulLoanPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DoubtfulLoanPageRoutingModule);
});

DoubtfulLoanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], DoubtfulLoanPageRoutingModule);


/***/ }),

/***/ 67146:
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/loans/doubtful-loan/doubtful-loan.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoubtfulLoanPageModule": function() { return /* binding */ DoubtfulLoanPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _doubtful_loan_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doubtful-loan-routing.module */ 30665);
/* harmony import */ var _doubtful_loan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doubtful-loan.page */ 84434);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var DoubtfulLoanPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DoubtfulLoanPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DoubtfulLoanPageModule);
});

DoubtfulLoanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _doubtful_loan_routing_module__WEBPACK_IMPORTED_MODULE_2__.DoubtfulLoanPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_doubtful_loan_page__WEBPACK_IMPORTED_MODULE_3__.DoubtfulLoanPage]
})], DoubtfulLoanPageModule);


/***/ }),

/***/ 84434:
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/loans/doubtful-loan/doubtful-loan.page.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoubtfulLoanPage": function() { return /* binding */ DoubtfulLoanPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _doubtful_loan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doubtful-loan.page.html?ngResource */ 26637);
/* harmony import */ var _doubtful_loan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doubtful-loan.page.scss?ngResource */ 76656);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);
/* harmony import */ var src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/validators/custom-validators */ 92609);
/* harmony import */ var src_app_core_services_installments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/installments.service */ 13243);














var DoubtfulLoanPage = /*#__PURE__*/function () {
  function DoubtfulLoanPage(alertService, formBuilder, loanService, installmentService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DoubtfulLoanPage);

    this.alertService = alertService;
    this.formBuilder = formBuilder;
    this.loanService = loanService;
    this.installmentService = installmentService; //#region Variables

    this.showLoader = false;
  } //#endregion


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DoubtfulLoanPage, [{
    key: "doubtfulInformation",
    get: function get() {
      return this.databaseResponses.doubtfulInformation;
    }
  }, {
    key: "getInstallmentsByLoanKey",
    get: function get() {
      return this.databaseResponses.getInstallmentsByLoanKey;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.initializeForms();

              case 1:
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
          loanNotes: []
        })
      };
      this.databaseResponses = {
        doubtfulInformation: null,
        getInstallmentsByLoanKey: []
      };
    }
  }, {
    key: "clientSelected",
    value: function clientSelected(searchResult) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.showLoader = true;
                this.clientSearchCardSection.clientInformation = searchResult;
                _context2.next = 5;
                return this.loanService.getLoanDoubtfulInformationByLoanKey(Number(searchResult.loan_key)).toPromise();

              case 5:
                this.databaseResponses.doubtfulInformation = _context2.sent;
                this.loanSection.formGroup.patchValue({
                  loanNotes: this.databaseResponses.doubtfulInformation.loanNotes
                });
                _context2.next = 9;
                return this.installmentService.getInstallmentsByLoanKey(Number(searchResult.loan_key)).toPromise();

              case 9:
                this.databaseResponses.getInstallmentsByLoanKey = _context2.sent;
                this.clientSearchCardSection.visible = false;
                this.loanSection.visible = true;
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](0);
                this.handleError(_context2.t0);

              case 17:
                _context2.prev = 17;
                this.showLoader = false;
                return _context2.finish(17);

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 14, 17, 20]]);
      }));
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var errorMessage;

      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpErrorResponse) {
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
    key: "insertDoubtFulLoan",
    value: function insertDoubtFulLoan() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
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
                  loanKey: this.doubtfulInformation.loanKey,
                  loanUuc: this.doubtfulInformation.loanUuc,
                  transactionDate: value.transactionDate,
                  loanNotes: value.loanNotes
                };
                _context3.next = 13;
                return this.loanService.insertLoanDoubtful(request).toPromise();

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

  return DoubtfulLoanPage;
}();

DoubtfulLoanPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
  }, {
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_6__.LoansService
  }, {
    type: src_app_core_services_installments_service__WEBPACK_IMPORTED_MODULE_8__.InstallmentsService
  }];
};

DoubtfulLoanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-doubtful-loan",
  template: _doubtful_loan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_doubtful_loan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], DoubtfulLoanPage);


/***/ }),

/***/ 76656:
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/loans/doubtful-loan/doubtful-loan.page.scss?ngResource ***!
  \************************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvdWJ0ZnVsLWxvYW4ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcbG9hbnNcXGRvdWJ0ZnVsLWxvYW5cXGRvdWJ0ZnVsLWxvYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQUoiLCJmaWxlIjoiZG91YnRmdWwtbG9hbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1sYWJlbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgNTEsIDEwMikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIiwiLmZvcm0tbGFiZWwtcmVxdWlyZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCIqXCI7XG4gIGNvbG9yOiAjZmYzMzY2ICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 26637:
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/loans/doubtful-loan/doubtful-loan.page.html?ngResource ***!
  \************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n\n<ion-toolbar>\n  <ion-title>شك في القرض</ion-title>\n</ion-toolbar>\n\n<app-client-search\n  *ngIf=\"clientSearchCardSection.visible\"\n  [sourcePage]=\"10\"\n  [pageAction]=\"2\"\n  [resultType]=\"1\"\n  (selectedClient)=\"clientSelected($event)\"\n  initialSearchType=\"1\"\n>\n</app-client-search>\n\n<ion-card *ngIf=\"loanSection.visible\">\n  <ion-card-content>\n    <form [formGroup]=\"loanSection.formGroup\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label\"> اسم العميل </ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.clientName}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> كود العميل </ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.branchCode}}/{{doubtfulInformation.clientCode}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> رقم القرض </ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.loanCode}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> قيمة القرض </ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.loanAmount | number:'1.0-0'}}\n            </ion-label>\n          </ion-col>\n\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">تاريخ القرض</ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.loanDate | date:'yyyy-MM-dd'}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">فترة السداد كل</ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.periodLength}}\n              {{doubtfulInformation.periodTypeDescription}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">بنك الاصدار</ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.bankName}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">رقم الشيك</ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.loanVoucher}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">اسم المندوب</ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.officerName}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label class=\"form-label\">ملاحظات القرض</ion-label>\n            <ion-textarea\n              formControlName=\"loanNotes\"\n              [autoGrow]=\"true\"\n            ></ion-textarea>\n          </ion-col>\n        </ion-row>\n        <ion-item class=\"ion-padding-bottom\"></ion-item>\n        <ion-grid>\n          <ion-row class=\"header-row\">\n            <ion-col>\n              <ion-label>رقم القسط</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>قيمة القسط</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>تاريخ الاستحقاق</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label> حالة القسط</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row\n            class=\"details-row\"\n            *ngFor=\"let inst of getInstallmentsByLoanKey\"\n          >\n            <ion-col>\n              <ion-label\n                >{{inst.installmentSerial| number:'1.0-0':'en-US'}}</ion-label\n              >\n            </ion-col>\n            <ion-col>\n              <ion-label\n                >{{inst.installmentAmount| number:'1.0-0':'en-US'}}</ion-label\n              >\n            </ion-col>\n            <ion-col>\n              <ion-label\n                >{{inst.installmentMaturityDate| date:'yyyy-MM-dd'}}</ion-label\n              >\n            </ion-col>\n            <ion-col>\n              <ion-label>{{inst.installmentStatusDescription}}</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-item class=\"ion-padding-bottom\"></ion-item>\n        <ion-row class=\"justify-content-center\">\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\">\n              تاريخ الحركة\n            </ion-label>\n            <ngx-datepicker\n              [parentForm]=\"loanSection.formGroup\"\n              [parentFormControllerName]=\"'transactionDate'\"\n            ></ngx-datepicker>\n            <html-validations\n              [validationInput]=\"{\n              showError:loanSection.checkIfInputsValid,\n              formGroup: loanSection.formGroup,\n              formControlName: 'transactionDate'}\"\n            ></html-validations>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"justify-content-center ion-padding\">\n          <ion-button color=\"danger\" (click)=\"backButton()\">رجوع</ion-button>\n          <ion-button (click)=\"insertDoubtFulLoan()\"> حفظ </ion-button>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_doubtful-loan_doubtful-loan_module_ts.js.map