"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_cancel-doubtful-loan_cancel-doubtful-loan_module_ts"],{

/***/ 18825:
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/loans/cancel-doubtful-loan/cancel-doubtful-loan-routing.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelDoubtfulLoanPageRoutingModule": function() { return /* binding */ CancelDoubtfulLoanPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cancel_doubtful_loan_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancel-doubtful-loan.page */ 88222);






var routes = [{
  path: '',
  component: _cancel_doubtful_loan_page__WEBPACK_IMPORTED_MODULE_2__.CancelDoubtfulLoanPage
}];

var CancelDoubtfulLoanPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CancelDoubtfulLoanPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CancelDoubtfulLoanPageRoutingModule);
});

CancelDoubtfulLoanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], CancelDoubtfulLoanPageRoutingModule);


/***/ }),

/***/ 169:
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/loans/cancel-doubtful-loan/cancel-doubtful-loan.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelDoubtfulLoanPageModule": function() { return /* binding */ CancelDoubtfulLoanPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cancel_doubtful_loan_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancel-doubtful-loan-routing.module */ 18825);
/* harmony import */ var _cancel_doubtful_loan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cancel-doubtful-loan.page */ 88222);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var CancelDoubtfulLoanPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CancelDoubtfulLoanPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CancelDoubtfulLoanPageModule);
});

CancelDoubtfulLoanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _cancel_doubtful_loan_routing_module__WEBPACK_IMPORTED_MODULE_2__.CancelDoubtfulLoanPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_cancel_doubtful_loan_page__WEBPACK_IMPORTED_MODULE_3__.CancelDoubtfulLoanPage]
})], CancelDoubtfulLoanPageModule);


/***/ }),

/***/ 88222:
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/loans/cancel-doubtful-loan/cancel-doubtful-loan.page.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelDoubtfulLoanPage": function() { return /* binding */ CancelDoubtfulLoanPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ 10507);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _cancel_doubtful_loan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cancel-doubtful-loan.page.html?ngResource */ 48443);
/* harmony import */ var _cancel_doubtful_loan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel-doubtful-loan.page.scss?ngResource */ 74096);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_installments_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/installments.service */ 13243);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);
/* harmony import */ var src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/validators/custom-validators */ 92609);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);















var CancelDoubtfulLoanPage = /*#__PURE__*/function () {
  function CancelDoubtfulLoanPage(alertService, formBuilder, loanService, installmentService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CancelDoubtfulLoanPage);

    this.alertService = alertService;
    this.formBuilder = formBuilder;
    this.loanService = loanService;
    this.installmentService = installmentService; //#region Variables

    this.showLoader = false;
  } //#endregion


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CancelDoubtfulLoanPage, [{
    key: "doubtfulInformation",
    get: function get() {
      return this.databaseResponses.cancelDoubtfulInformation;
    }
  }, {
    key: "getInstallmentsByLoanKey",
    get: function get() {
      return this.databaseResponses.loanInstallment;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.initializeForms();
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
          transactionDate: [null, src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_9__.dateTypeStringValidator({
            required: true
          })],
          loanNotes: []
        })
      };
      this.databaseResponses = {
        cancelDoubtfulInformation: null,
        loanInstallment: []
      };
    }
  }, {
    key: "clientSelected",
    value: function clientSelected(searchResult) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var loanKey, _yield$Promise$all, _yield$Promise$all2, cancelDoubtfulInfo, loanInstallments;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.showLoader = true;
                this.clientSearchCardSection.clientInformation = searchResult;
                loanKey = Number(searchResult.loan_key);
                _context.next = 6;
                return Promise.all([this.loanService.getCancelDoubtfulInformationByLoanKey(loanKey).toPromise(), this.installmentService.getInstallmentsByLoanKey(loanKey).toPromise()]);

              case 6:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$Promise$all, 2);
                cancelDoubtfulInfo = _yield$Promise$all2[0];
                loanInstallments = _yield$Promise$all2[1];
                this.databaseResponses.cancelDoubtfulInformation = cancelDoubtfulInfo;
                this.loanSection.formGroup.patchValue({
                  loanNotes: this.databaseResponses.cancelDoubtfulInformation.loanNotes
                });
                this.databaseResponses.loanInstallment = loanInstallments;
                this.clientSearchCardSection.visible = false;
                this.loanSection.visible = true;
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](0);
                this.handleError(_context.t0);

              case 20:
                _context.prev = 20;
                this.showLoader = false;
                return _context.finish(20);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 17, 20, 23]]);
      }));
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
    key: "cancelDoubtFulLoan",
    value: function cancelDoubtFulLoan() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        var value, request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.loanSection.checkIfInputsValid = true;

                if (this.loanSection.formGroup.valid) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                _context2.next = 6;
                return this.alertService.SaveAlert();

              case 6:
                if (_context2.sent) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return");

              case 8:
                this.showLoader = true;
                value = this.loanSection.formGroup.value;
                request = {
                  loanKey: this.doubtfulInformation.loanKey,
                  loanUuc: this.doubtfulInformation.loanUuc,
                  transactionDate: value.transactionDate,
                  loanNotes: value.loanNotes
                };
                _context2.next = 13;
                return this.loanService.insertCancelLoanDoubtful(request).toPromise();

              case 13:
                _context2.next = 15;
                return this.alertService.showAlertConfirm("تم الحفظ بنجاح", true);

              case 15:
                _context2.next = 20;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](0);
                this.handleError(_context2.t0);

              case 20:
                _context2.prev = 20;
                this.showLoader = false;
                return _context2.finish(20);

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 17, 20, 23]]);
      }));
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var errorMessage;

      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpErrorResponse) {
        errorMessage = JSON.stringify(error.error);
      } else if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = String(error);
      }

      this.alertService.showAlertError(errorMessage, false);
      console.error("Error:", error);
    }
  }]);

  return CancelDoubtfulLoanPage;
}();

CancelDoubtfulLoanPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
  }, {
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_8__.LoansService
  }, {
    type: src_app_core_services_installments_service__WEBPACK_IMPORTED_MODULE_7__.InstallmentsService
  }];
};

CancelDoubtfulLoanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: "app-cancel-doubtful-loan",
  template: _cancel_doubtful_loan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_4__,
  styles: [_cancel_doubtful_loan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_5__]
})], CancelDoubtfulLoanPage);


/***/ }),

/***/ 74096:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/cancel-doubtful-loan/cancel-doubtful-loan.page.scss?ngResource ***!
  \**************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5jZWwtZG91YnRmdWwtbG9hbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 48443:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/cancel-doubtful-loan/cancel-doubtful-loan.page.html?ngResource ***!
  \**************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n\n<ion-toolbar>\n  <ion-title>الغاء الشك في القرض</ion-title>\n</ion-toolbar>\n\n<app-client-search\n  *ngIf=\"clientSearchCardSection.visible\"\n  [sourcePage]=\"10\"\n  [pageAction]=\"3\"\n  [resultType]=\"1\"\n  (selectedClient)=\"clientSelected($event)\"\n  initialSearchType=\"1\"\n>\n</app-client-search>\n\n<ion-card *ngIf=\"loanSection.visible\">\n  <ion-card-content>\n    <form [formGroup]=\"loanSection.formGroup\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label\"> اسم العميل </ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.clientName}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> كود العميل </ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.orgBranchCode}}/{{doubtfulInformation.clientCode}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> رقم القرض </ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.loanCode}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> قيمة القرض </ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.loanAmount | number:'1.0-0'}}\n            </ion-label>\n          </ion-col>\n\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">تاريخ القرض</ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.loanDate | date:'yyyy-MM-dd'}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">فترة السداد كل</ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.periodLength}}\n              {{doubtfulInformation.periodTypeDescription}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">بنك الاصدار</ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.bankName}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">رقم الشيك</ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.loanVoucher}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">اسم المندوب</ion-label>\n            <ion-label class=\"form-control\">\n              {{doubtfulInformation.officerName}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label class=\"form-label\">ملاحظات القرض</ion-label>\n            <ion-textarea\n              formControlName=\"loanNotes\"\n              [autoGrow]=\"true\"\n            ></ion-textarea>\n          </ion-col>\n        </ion-row>\n        <ion-item class=\"ion-padding-bottom\"></ion-item>\n        <ion-grid>\n          <ion-row class=\"header-row\">\n            <ion-col>\n              <ion-label>رقم القسط</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>قيمة القسط</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>تاريخ الاستحقاق</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label> حالة القسط</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row\n            class=\"details-row\"\n            *ngFor=\"let inst of getInstallmentsByLoanKey\"\n          >\n            <ion-col>\n              <ion-label\n                >{{inst.installmentSerial| number:'1.0-0':'en-US'}}</ion-label\n              >\n            </ion-col>\n            <ion-col>\n              <ion-label\n                >{{inst.installmentAmount| number:'1.0-0':'en-US'}}</ion-label\n              >\n            </ion-col>\n            <ion-col>\n              <ion-label\n                >{{inst.installmentMaturityDate| date:'yyyy-MM-dd'}}</ion-label\n              >\n            </ion-col>\n            <ion-col>\n              <ion-label>{{inst.installmentStatusDescription}}</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-item class=\"ion-padding-bottom\"></ion-item>\n        <ion-row class=\"justify-content-center\">\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\">\n              تاريخ الحركة\n            </ion-label>\n            <ngx-datepicker\n              [parentForm]=\"loanSection.formGroup\"\n              [parentFormControllerName]=\"'transactionDate'\"\n            ></ngx-datepicker>\n            <html-validations\n              [validationInput]=\"{\n              showError:loanSection.checkIfInputsValid,\n              formGroup: loanSection.formGroup,\n              formControlName: 'transactionDate'}\"\n            ></html-validations>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"justify-content-center ion-padding\">\n          <ion-button color=\"danger\" (click)=\"backButton()\">رجوع</ion-button>\n          <ion-button (click)=\"cancelDoubtFulLoan()\"> حفظ </ion-button>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_cancel-doubtful-loan_cancel-doubtful-loan_module_ts.js.map