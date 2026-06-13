"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_cancel-loan-creation_cancel-loan-creation_module_ts"],{

/***/ 53848:
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/loans/cancel-loan-creation/cancel-loan-creation-routing.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelLoanCreationPageRoutingModule": function() { return /* binding */ CancelLoanCreationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _cancel_loan_creation_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancel-loan-creation.page */ 78251);






var routes = [{
  path: '',
  component: _cancel_loan_creation_page__WEBPACK_IMPORTED_MODULE_2__.CancelLoanCreationPage
}];

var CancelLoanCreationPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CancelLoanCreationPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CancelLoanCreationPageRoutingModule);
});

CancelLoanCreationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], CancelLoanCreationPageRoutingModule);


/***/ }),

/***/ 36801:
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/loans/cancel-loan-creation/cancel-loan-creation.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelLoanCreationPageModule": function() { return /* binding */ CancelLoanCreationPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cancel_loan_creation_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cancel-loan-creation-routing.module */ 53848);
/* harmony import */ var _cancel_loan_creation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cancel-loan-creation.page */ 78251);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var CancelLoanCreationPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CancelLoanCreationPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CancelLoanCreationPageModule);
});

CancelLoanCreationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _cancel_loan_creation_routing_module__WEBPACK_IMPORTED_MODULE_2__.CancelLoanCreationPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_cancel_loan_creation_page__WEBPACK_IMPORTED_MODULE_3__.CancelLoanCreationPage]
})], CancelLoanCreationPageModule);


/***/ }),

/***/ 78251:
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/loans/cancel-loan-creation/cancel-loan-creation.page.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CancelLoanCreationPage": function() { return /* binding */ CancelLoanCreationPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _cancel_loan_creation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cancel-loan-creation.page.html?ngResource */ 16976);
/* harmony import */ var _cancel_loan_creation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cancel-loan-creation.page.scss?ngResource */ 2322);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);
/* harmony import */ var src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/validators/custom-validators */ 92609);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);














var CancelLoanCreationPage = /*#__PURE__*/function () {
  function CancelLoanCreationPage(alertService, formBuilder, loanService, referenceService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CancelLoanCreationPage);

    this.alertService = alertService;
    this.formBuilder = formBuilder;
    this.loanService = loanService;
    this.referenceService = referenceService; //#region Variables

    this.showLoader = false;
  } //#endregion


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CancelLoanCreationPage, [{
    key: "readOnlyInformation",
    get: function get() {
      return this.loanSection.readonlyInformation;
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
                _context.next = 3;
                return this.referenceService.GetRejActive();

              case 3:
                this.databaseResponses.getLoanRejection = _context.sent;

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
        readonlyInformation: null,
        visible: false,
        formGroup: this.formBuilder.group({
          cancellationDate: [null, src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_7__.dateTypeStringValidator({
            required: true
          })],
          rejectionType: [null, src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_7__.rejectionTypeReasonValidator({
            required: true
          })],
          loanNotes: [""]
        })
      };
      this.databaseResponses = {
        GetLoanCreationInformationForCancelByLoanKey: null,
        getLoanRejection: []
      };
    }
  }, {
    key: "clientSelected",
    value: function clientSelected(searchResult) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var loanInformation;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.showLoader = true;
                this.clientSearchCardSection.clientInformation = searchResult;
                _context2.next = 5;
                return this.loanService.getLoanCreationInformationForCancelByLoanKey(Number(searchResult.loan_key)).toPromise();

              case 5:
                loanInformation = _context2.sent;
                this.databaseResponses.GetLoanCreationInformationForCancelByLoanKey = loanInformation;
                this.loanSection.readonlyInformation = this.extractReadOnlyInformation(loanInformation);
                this.clientSearchCardSection.visible = false;
                this.loanSection.visible = true;
                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](0);
                this.handleError(_context2.t0);

              case 15:
                _context2.prev = 15;
                this.showLoader = false;
                return _context2.finish(15);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 12, 15, 18]]);
      }));
    }
  }, {
    key: "extractReadOnlyInformation",
    value: function extractReadOnlyInformation(loanInformation) {
      return {
        clientName: loanInformation.clientName,
        installmentsNumber: loanInformation.installmentsNumber,
        creationDate: loanInformation.comDecDate,
        issuingBankName: loanInformation.bankName,
        loanAmount: loanInformation.loanAmount,
        clientTypeName: loanInformation.clientTypeName,
        loanCode: loanInformation.loanCode,
        officerName: loanInformation.officerName,
        periodLength: loanInformation.periodLength,
        periodTypeName: loanInformation.periodTypeDescription,
        voucher: loanInformation.loanVoucher,
        loanNotes: loanInformation.loanNotes
      };
    }
  }, {
    key: "cancelLoanButton",
    value: function cancelLoanButton() {
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
                  applicationKey: this.databaseResponses.GetLoanCreationInformationForCancelByLoanKey.applicationKey,
                  comDecDate: value.cancellationDate,
                  loanRejectionCode: value.rejectionType,
                  uucLoanApplication: this.databaseResponses.GetLoanCreationInformationForCancelByLoanKey.loanApplicationUuc,
                  loanNotes: value.loanNotes
                };
                _context3.next = 13;
                return this.loanService.cancelLoanCreation(request).toPromise();

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
  }, {
    key: "backButton",
    value: function backButton() {
      if (this.loanSection.visible) {
        this.loanSection.checkIfInputsValid = false;
        this.loanSection.readonlyInformation = null;
        this.loanSection.visible = false;
        this.loanSection.formGroup.reset();
        this.clientSearchCardSection = {
          clientInformation: null,
          visible: true
        };
      }
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
  }]);

  return CancelLoanCreationPage;
}();

CancelLoanCreationPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
  }, {
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_6__.LoansService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_8__.ReferencesService
  }];
};

CancelLoanCreationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-cancel-loan-creation",
  template: _cancel_loan_creation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_cancel_loan_creation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], CancelLoanCreationPage);


/***/ }),

/***/ 2322:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/cancel-loan-creation/cancel-loan-creation.page.scss?ngResource ***!
  \**************************************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbmNlbC1sb2FuLWNyZWF0aW9uLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGxvYW5zXFxjYW5jZWwtbG9hbi1jcmVhdGlvblxcY2FuY2VsLWxvYW4tY3JlYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQUoiLCJmaWxlIjoiY2FuY2VsLWxvYW4tY3JlYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 16976:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/cancel-loan-creation/cancel-loan-creation.page.html?ngResource ***!
  \**************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n\n<ion-toolbar>\n  <ion-title>الغاء انشاء القرض</ion-title>\n</ion-toolbar>\n\n<app-client-search\n  *ngIf=\"clientSearchCardSection.visible\"\n  [sourcePage]=\"11\"\n  [pageAction]=\"0\"\n  [resultType]=\"1\"\n  (selectedClient)=\"clientSelected($event)\"\n  initialSearchType=\"1\"\n>\n</app-client-search>\n\n<ion-card *ngIf=\"loanSection.visible\">\n  <ion-card-content>\n    <form [formGroup]=\"loanSection.formGroup\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label\"> اسم العميل </ion-label>\n            <ion-label class=\"form-control\">\n              {{readOnlyInformation.clientName}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> كود العميل </ion-label>\n            <ion-label class=\"form-control\">\n              {{clientSearchCardSection.clientInformation.org_branch_code}}/{{clientSearchCardSection.clientInformation.client_code}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> نوع العميل </ion-label>\n            <ion-label class=\"form-control\">\n              {{readOnlyInformation.clientTypeName}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> كود القرض </ion-label>\n            <ion-label class=\"form-control\">\n              {{readOnlyInformation.loanCode}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> قيمة القرض </ion-label>\n            <ion-label class=\"form-control\">\n              {{readOnlyInformation.loanAmount | number:'1.0-0'}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">عدد الاقساط</ion-label>\n            <ion-label class=\"form-control\">\n              {{readOnlyInformation.installmentsNumber}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">فترة السداد كل</ion-label>\n            <ion-label class=\"form-control\">\n              {{readOnlyInformation.periodLength}}\n              {{readOnlyInformation.periodTypeName}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">تاريخ الانشاء</ion-label>\n            <ion-label class=\"form-control\">\n              {{readOnlyInformation.creationDate | date:'yyyy-MM-dd'}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">بنك الاصدار</ion-label>\n            <ion-label class=\"form-control\">\n              {{readOnlyInformation.issuingBankName}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">اسم المندوب</ion-label>\n            <ion-label class=\"form-control\">\n              {{readOnlyInformation.officerName}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\">رقم الشيك</ion-label>\n            <ion-label class=\"form-control\">\n              {{readOnlyInformation.voucher}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-item class=\"ion-padding-bottom\"></ion-item>\n        <ion-row class=\"justify-content-center\">\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\">\n              تاريخ الالغاء\n            </ion-label>\n            <ngx-datepicker\n              [parentForm]=\"loanSection.formGroup\"\n              [parentFormControllerName]=\"'cancellationDate'\"\n            ></ngx-datepicker>\n            <html-validations\n              [validationInput]=\"{\n              showError:loanSection.checkIfInputsValid,\n              formGroup: loanSection.formGroup,\n              formControlName: 'cancellationDate'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\"\n              >سبب الالغاء</ion-label\n            >\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"سبب الالغاء\"\n              formControlName=\"rejectionType\"\n              class=\"subselect\"\n            >\n              <ion-select-option\n                *ngFor=\"let rej of databaseResponses.getLoanRejection\"\n                [value]=\"rej.loan_rej_code\"\n              >\n                {{rej.loan_rej_desc}}\n              </ion-select-option>\n            </ion-select>\n            <html-validations\n              [validationInput]=\"{\n              showError:loanSection.checkIfInputsValid,\n              formGroup: loanSection.formGroup,\n              formControlName: 'rejectionType'}\"\n            ></html-validations>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label class=\"form-label\"> ملاحظات القرض </ion-label>\n            <ion-textarea\n              formControlName=\"loanNotes\"\n              [autoGrow]=\"true\"\n            ></ion-textarea>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"justify-content-center ion-padding\">\n          <ion-button color=\"danger\" (click)=\"backButton()\">رجوع</ion-button>\n          <ion-button (click)=\"cancelLoanButton()\"> الغاء القرض </ion-button>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_cancel-loan-creation_cancel-loan-creation_module_ts.js.map