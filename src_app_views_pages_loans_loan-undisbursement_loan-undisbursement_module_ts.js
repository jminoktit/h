"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_loan-undisbursement_loan-undisbursement_module_ts"],{

/***/ 73749:
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-undisbursement/loan-undisbursement-routing.module.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanUndisbursementPageRoutingModule": function() { return /* binding */ LoanUndisbursementPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_undisbursement_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-undisbursement.page */ 94212);






var routes = [{
  path: '',
  component: _loan_undisbursement_page__WEBPACK_IMPORTED_MODULE_2__.LoanUndisbursementPage
}];

var LoanUndisbursementPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanUndisbursementPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanUndisbursementPageRoutingModule);
});

LoanUndisbursementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoanUndisbursementPageRoutingModule);


/***/ }),

/***/ 3639:
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-undisbursement/loan-undisbursement.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanUndisbursementPageModule": function() { return /* binding */ LoanUndisbursementPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_undisbursement_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-undisbursement-routing.module */ 73749);
/* harmony import */ var _loan_undisbursement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-undisbursement.page */ 94212);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var LoanUndisbursementPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanUndisbursementPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanUndisbursementPageModule);
});

LoanUndisbursementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _loan_undisbursement_routing_module__WEBPACK_IMPORTED_MODULE_2__.LoanUndisbursementPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_loan_undisbursement_page__WEBPACK_IMPORTED_MODULE_3__.LoanUndisbursementPage]
})], LoanUndisbursementPageModule);


/***/ }),

/***/ 94212:
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-undisbursement/loan-undisbursement.page.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanUndisbursementPage": function() { return /* binding */ LoanUndisbursementPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _loan_undisbursement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-undisbursement.page.html?ngResource */ 34474);
/* harmony import */ var _loan_undisbursement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-undisbursement.page.scss?ngResource */ 40705);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/preferences */ 85191);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/loan-applications.service */ 35866);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/user.service */ 88386);















var LoanUndisbursementPage = /*#__PURE__*/function () {
  function LoanUndisbursementPage(formBuilder, alertService, loansService, loanApplicationService, userService, datePipe) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoanUndisbursementPage);

    this.formBuilder = formBuilder;
    this.alertService = alertService;
    this.loansService = loansService;
    this.loanApplicationService = loanApplicationService;
    this.userService = userService;
    this.datePipe = datePipe;
    this.showLoader = false;
    this.isSearching = true;
    this.loanObject = {
      loanInfo: null,
      loanInstallments: []
    };
    this.loanRejectionObject = {
      loanRejection: [],
      loanRejectionParent: []
    };
    this.UndisbDateDisabled = false;
    this.loanUnDisbursmentForm = this.formBuilder.group({
      loanKey: [],
      clientCode: [],
      clientName: [],
      clientNationalID: [],
      clientMobile: [],
      clientAddress: [],
      coName: [],
      coNationalID: [],
      coMobile: [],
      co2Name: [],
      co2NationalID: [],
      co2Mobile: [],
      loanAmount: [],
      loanNo: [],
      loanGp: [],
      periodLength: [],
      refDesc: [],
      bankName: [],
      OfficerName: [],
      loanDate: [],
      loanVouch: [],
      uuc: [],
      loanUndisbParentReasonCode: [],
      loanUndisbChildReasonCode: [],
      disbCoName: [],
      loanNotes: [],
      undisbDate: [(0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatDate)(new Date(), "yyyy-MM-dd", "en-ZA")]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoanUndisbursementPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = Date;
                _context.next = 3;
                return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__.Preferences.get({
                  key: "periodStartDate"
                });

              case 3:
                _context.t1 = _context.sent.value;
                this.periodStartDate = new _context.t0(_context.t1);
                _context.t2 = Date;
                _context.next = 8;
                return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__.Preferences.get({
                  key: "periodEndDate"
                });

              case 8:
                _context.t3 = _context.sent.value;
                this.periodEndDate = new _context.t2(_context.t3);

                if (!(!localStorage.getItem("periodStartDate") || !localStorage.getItem("periodEndDate"))) {
                  _context.next = 21;
                  break;
                }

                _context.next = 13;
                return this.userService.getUserBranchInfo();

              case 13:
                this.userBranchInfo = _context.sent;

                if (!this.userBranchInfo) {
                  _context.next = 21;
                  break;
                }

                this.periodStartDate = new Date(this.userBranchInfo.period_start_date);
                this.periodEndDate = new Date(this.userBranchInfo.period_end_date);
                _context.next = 19;
                return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__.Preferences.set({
                  key: "periodStartDate",
                  value: this.datePipe.transform(this.userBranchInfo.period_start_date, "yyyy-MM-dd")
                });

              case 19:
                _context.next = 21;
                return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__.Preferences.set({
                  key: "periodEndDate",
                  value: this.datePipe.transform(this.userBranchInfo.period_end_date, "yyyy-MM-dd")
                });

              case 21:
                if (this.periodStartDate.toString() === this.periodEndDate.toString()) {
                  this.UndisbDateDisabled = true;
                }

                if (this.loanUnDisbursmentForm.value.undisbDate > this.periodEndDate) {
                  this.loanUnDisbursmentForm.patchValue({
                    undisbDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatDate)(this.periodEndDate, "yyyy-MM-dd", "en-ZA")
                  });
                }

                this.UndisbDatePickerOptions = {
                  minDate: this.periodStartDate,
                  maxDate: this.periodEndDate
                };

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "clientSelected",
    value: function clientSelected(event) {
      this.getLoanToUnDisbursement(event.loan_key);
    }
  }, {
    key: "getLoanToUnDisbursement",
    value: function getLoanToUnDisbursement(loanKey) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.showLoader = true; //Get Loan Info

                _context2.next = 4;
                return this.loansService.getLoanUnDisbursementInfo(loanKey.toString());

              case 4:
                this.loanObject.loanInfo = _context2.sent;
                _context2.next = 7;
                return this.loansService.getInstallments(loanKey.toString());

              case 7:
                this.loanObject.loanInstallments = _context2.sent;
                this.patchValueForLoanInfo(); // Get rejection reasons (parent)

                _context2.next = 11;
                return this.loanApplicationService.getRejectionRefParent();

              case 11:
                this.loanRejectionObject.loanRejectionParent = _context2.sent;
                this.isSearching = false;
                this.showLoader = false;
                _context2.next = 20;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](0);
                this.showLoader = false;
                return _context2.abrupt("return", this.alertService.showAlertError(_context2.t0 === null || _context2.t0 === void 0 ? void 0 : _context2.t0.error, false));

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 16]]);
      }));
    }
  }, {
    key: "patchValueForLoanInfo",
    value: function patchValueForLoanInfo() {
      this.loanUnDisbursmentForm.patchValue({
        clientCode: this.loanObject.loanInfo.client_code,
        clientName: this.loanObject.loanInfo.client_name,
        clientNationalID: this.loanObject.loanInfo.nation_id,
        clientMobile: this.loanObject.loanInfo.mobile_1,
        clientAddress: this.loanObject.loanInfo.home_add_1,
        coName: this.loanObject.loanInfo.co_name,
        coNationalID: this.loanObject.loanInfo.co_nation_id,
        coMobile: this.loanObject.loanInfo.co_mobile_1,
        co2Name: this.loanObject.loanInfo.co2_name,
        co2NationalID: this.loanObject.loanInfo.co2_nation_id,
        co2Mobile: this.loanObject.loanInfo.co2_mobile_1,
        loanAmount: (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatNumber)(Number(this.loanObject.loanInfo.loan_am), "en-US", "1.0-0"),
        loanNo: this.loanObject.loanInfo.loan_no,
        loanGp: this.loanObject.loanInfo.loan_gp,
        periodLength: this.loanObject.loanInfo.period_length,
        refDesc: this.loanObject.loanInfo.ref_desc,
        bankName: this.loanObject.loanInfo.bank_name,
        OfficerName: this.loanObject.loanInfo.officer_name,
        loanDate: (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatDate)(this.loanObject.loanInfo.loan_date, "yyyy-MM-dd", "en-ZA"),
        loanVouch: this.loanObject.loanInfo.loan_vouch,
        uuc: this.loanObject.loanInfo.uuc,
        loanKey: this.loanObject.loanInfo.loan_key,
        disbCoName: this.loanObject.loanInfo.disb_co_name,
        loanNotes: this.loanObject.loanInfo.loan_notes
      });
    }
  }, {
    key: "backButton",
    value: function backButton() {
      this.isSearching = true;
      this.loanUnDisbursmentForm.reset();
      this.loanObject.loanInfo = null;
      this.loanObject.loanInstallments = [];
    }
  }, {
    key: "SubmitUnDisbursement",
    value: function SubmitUnDisbursement() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.alertService.SaveAlert();

              case 3:
                if (_context3.sent) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return");

              case 5:
                this.showLoader = true;
                _context3.next = 8;
                return this.loansService.LoanUnDisbursement(this.loanUnDisbursmentForm.value.loanKey, this.loanUnDisbursmentForm.value.loanUndisbChildReasonCode, this.loanUnDisbursmentForm.value.uuc, this.loanUnDisbursmentForm.value.loanNotes, this.loanUnDisbursmentForm.value.undisbDate);

              case 8:
                this.showLoader = false;
                this.alertService.showAlertConfirm("لقد تم إلغاء الإصدار", true);
                _context3.next = 16;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](0);
                this.showLoader = false;
                return _context3.abrupt("return", this.alertService.showAlertError(_context3.t0 === null || _context3.t0 === void 0 ? void 0 : _context3.t0.error, false));

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 12]]);
      }));
    }
  }, {
    key: "onParentRejChanged",
    value: function onParentRejChanged($event) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.loanApplicationService.getLoanRejection($event.detail.value.toString());

              case 2:
                this.loanRejectionObject.loanRejection = _context4.sent;

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }]);

  return LoanUndisbursementPage;
}();

LoanUndisbursementPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }, {
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_8__.LoansService
  }, {
    type: src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_7__.LoanApplicationsService
  }, {
    type: src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe
  }];
};

LoanUndisbursementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: "app-loan-undisbursement",
  template: _loan_undisbursement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_loan_undisbursement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], LoanUndisbursementPage);


/***/ }),

/***/ 40705:
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-undisbursement/loan-undisbursement.page.scss?ngResource ***!
  \************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FuLXVuZGlzYnVyc2VtZW50LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 34474:
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-undisbursement/loan-undisbursement.page.html?ngResource ***!
  \************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<ng-container>\n  <ion-title>إلغاء إصدار القرض</ion-title>\n</ng-container>\n\n<div class=\"row\" *ngIf=\"isSearching\">\n  <div class=\"col-md-12\">\n    <app-client-search\n      [sourcePage]=\"10\"\n      [pageAction]=\"1\"\n      [resultType]=\"1\"\n      [initialSearchType]=\"'1'\"\n      (selectedClient)=\"clientSelected($event)\"\n    >\n    </app-client-search>\n  </div>\n</div>\n\n<ion-card *ngIf=\"!isSearching\">\n  <ion-card-content>\n    <form [formGroup]=\"loanUnDisbursmentForm\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label>كود العميل</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"clientCode\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label>اسم العميل</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"clientName\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label>رقم القومي للعميل</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"clientNationalID\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label>محمول العميل</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"clientMobile\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label>عنوان منزل العميل</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"clientAddress\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            sizeLg=\"4\"\n            sizeMd=\"6\"\n            sizeSm=\"12\"\n            *ngIf=\"loanUnDisbursmentForm.value.coName\"\n          >\n            <ion-label>اسـم الضامن الأول</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"coName\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            sizeLg=\"4\"\n            sizeMd=\"6\"\n            sizeSm=\"12\"\n            *ngIf=\"loanUnDisbursmentForm.value.coNationalID\"\n          >\n            <ion-label>الرقم القومي للضامن الأول</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"coNationalID\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            sizeLg=\"4\"\n            sizeMd=\"6\"\n            sizeSm=\"12\"\n            *ngIf=\"loanUnDisbursmentForm.value.coMobile\"\n          >\n            <ion-label>محمول الضامن الأول</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"coMobile\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col\n            size=\"12\"\n            sizeLg=\"4\"\n            sizeMd=\"6\"\n            sizeSm=\"12\"\n            *ngIf=\"loanUnDisbursmentForm.value.co2Name\"\n          >\n            <ion-label>اسـم الضامن الثاني</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"co2Name\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            sizeLg=\"4\"\n            sizeMd=\"6\"\n            sizeSm=\"12\"\n            *ngIf=\"loanUnDisbursmentForm.value.co2NationalID\"\n          >\n            <ion-label>الرقم القومي للضامن الثاني</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"co2NationalID\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            sizeLg=\"4\"\n            sizeMd=\"6\"\n            sizeSm=\"12\"\n            *ngIf=\"loanUnDisbursmentForm.value.co2Mobile\"\n          >\n            <ion-label>محمول الضامن الثاني</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"co2Mobile\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label>قيمة القرض</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"loanAmount\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label>عدد الاقساط</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"loanNo\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label>فترة السماح</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"loanGp\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label>فترة السداد كل</ion-label>\n            <ion-row>\n              <ion-col>\n                <ion-input\n                  class=\"form-control\"\n                  formControlName=\"periodLength\"\n                  readonly=\"true\"\n                ></ion-input>\n              </ion-col>\n              <ion-col>\n                <ion-input\n                  class=\"form-control\"\n                  formControlName=\"refDesc\"\n                  readonly=\"true\"\n                ></ion-input>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label>بنك الإصدار</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"bankName\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label>المندوب</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"OfficerName\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label>تاريخ القرض</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"loanDate\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            sizeLg=\"4\"\n            sizeMd=\"6\"\n            sizeSm=\"12\"\n            *ngIf=\"loanUnDisbursmentForm.value.loanVouch\"\n          >\n            <ion-label>رقم الشيك</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"loanVouch\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label>جهة الصرف</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"disbCoName\"\n              readonly=\"true\"\n            ></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeSm=\"12\">\n            <ion-label class=\"form-label form-label-required\">\n              سبب إلغاء الإصدار\n            </ion-label>\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"سبب إلغاء الإصدار\"\n              id=\"loanUndisbParentReasonCode\"\n              formControlName=\"loanUndisbParentReasonCode\"\n              class=\"subselect\"\n              (ionChange)=\"onParentRejChanged($event)\"\n            >\n              <ion-select-option\n                *ngFor=\"let rejectionParent of loanRejectionObject.loanRejectionParent\"\n                [value]=\"rejectionParent.parent_rej_code\"\n              >\n                {{rejectionParent.parent_rej_desc}}\n              </ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            sizeLg=\"4\"\n            sizeSm=\"12\"\n            *ngIf=\"loanUnDisbursmentForm.value?.loanUndisbParentReasonCode\"\n          >\n            <ion-label class=\"form-label\">\n              سبب إلغاء الإصدار التفصيلي\n            </ion-label>\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"سبب إلغاء الإصدار التفصيلي\"\n              id=\"loanUndisbChildReasonCode\"\n              formControlName=\"loanUndisbChildReasonCode\"\n              class=\"subselect\"\n            >\n              <ion-select-option\n                *ngFor=\"let rejectionChild of loanRejectionObject.loanRejection\"\n                [value]=\"rejectionChild.loan_rej_code\"\n              >\n                {{rejectionChild.loan_rej_desc}}\n              </ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeSm=\"12\">\n            <ion-label class=\"form-label\"> تاريخ الغاء الاصدار </ion-label>\n            <ngx-datepicker\n              [parentForm]=\"loanUnDisbursmentForm\"\n              parentFormControllerName=\"undisbDate\"\n              [disabledValue]=\"UndisbDateDisabled\"\n              [options]=\"UndisbDatePickerOptions\"\n            ></ngx-datepicker>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label class=\"form-label\"> ملاحظات القرض </ion-label>\n            <ion-textarea\n              formControlName=\"loanNotes\"\n              [autoGrow]=\"true\"\n            ></ion-textarea>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n    <ion-row class=\"justify-content-center ion-padding\">\n      <ion-button color=\"danger\" (click)=\"backButton()\"> رجوع </ion-button>\n      <ion-button (click)=\"SubmitUnDisbursement()\"> إلغاء الإصدار </ion-button>\n    </ion-row>\n    <div class=\"ion-padding table-responsive\">\n      <ion-grid style=\"min-width: 1000px\">\n        <ion-row class=\"header-row\">\n          <ion-col>\n            <ion-label>رقم القسط</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>القيمة</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>المصاريف</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>تاريخ الاستحقاق</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>تاريخ الحالة</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>حالة القسط</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          class=\"details-row\"\n          *ngFor=\"let installment of loanObject.loanInstallments;\n        let i = index;\"\n        >\n          <ion-col>\n            <ion-label>{{installment.inst_serial}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>{{installment.inst_am}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>{{installment.inst_int}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label\n              >{{installment.inst_mat_date | date:'yyyy-MM-dd' }}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-label\n              >{{installment.inst_status_date | date:'yyyy-MM-dd'}}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-label>{{installment.inst_statusref}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_loan-undisbursement_loan-undisbursement_module_ts.js.map