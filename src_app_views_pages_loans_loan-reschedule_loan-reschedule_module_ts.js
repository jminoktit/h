"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_loan-reschedule_loan-reschedule_module_ts"],{

/***/ 16704:
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-reschedule/loan-reschedule-routing.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanReschedulePageRoutingModule": function() { return /* binding */ LoanReschedulePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_reschedule_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-reschedule.page */ 10347);






var routes = [{
  path: '',
  component: _loan_reschedule_page__WEBPACK_IMPORTED_MODULE_2__.LoanReschedulePage
}];

var LoanReschedulePageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanReschedulePageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanReschedulePageRoutingModule);
});

LoanReschedulePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoanReschedulePageRoutingModule);


/***/ }),

/***/ 21079:
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-reschedule/loan-reschedule.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanReschedulePageModule": function() { return /* binding */ LoanReschedulePageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_reschedule_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-reschedule-routing.module */ 16704);
/* harmony import */ var _loan_reschedule_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-reschedule.page */ 10347);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var LoanReschedulePageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanReschedulePageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanReschedulePageModule);
});

LoanReschedulePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _loan_reschedule_routing_module__WEBPACK_IMPORTED_MODULE_2__.LoanReschedulePageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_loan_reschedule_page__WEBPACK_IMPORTED_MODULE_3__.LoanReschedulePage]
})], LoanReschedulePageModule);


/***/ }),

/***/ 10347:
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-reschedule/loan-reschedule.page.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanReschedulePage": function() { return /* binding */ LoanReschedulePage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _loan_reschedule_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-reschedule.page.html?ngResource */ 66271);
/* harmony import */ var _loan_reschedule_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-reschedule.page.scss?ngResource */ 83213);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/preferences */ 85191);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_bank_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/bank.service */ 85691);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);
/* harmony import */ var src_app_core_services_installments_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/installments.service */ 13243);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/user.service */ 88386);
/* harmony import */ var src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/validators/custom-validators */ 92609);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_reporting_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/reporting.service */ 58873);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/core/services/pdf-viewer.service */ 37801);
/* harmony import */ var src_app_core_util_atobSafe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/core/util/atobSafe */ 82817);

























var LoanReschedulePage = /*#__PURE__*/function () {
  //#endregion
  function LoanReschedulePage(loanService, installmentService, referenceService, datePipe, bankService, alertService, inputMaskingService, formBuilder, userService, cdref, env, http, reportingService, authService, pdfViewerService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoanReschedulePage);

    this.loanService = loanService;
    this.installmentService = installmentService;
    this.referenceService = referenceService;
    this.datePipe = datePipe;
    this.bankService = bankService;
    this.alertService = alertService;
    this.inputMaskingService = inputMaskingService;
    this.formBuilder = formBuilder;
    this.userService = userService;
    this.cdref = cdref;
    this.env = env;
    this.http = http;
    this.reportingService = reportingService;
    this.authService = authService;
    this.pdfViewerService = pdfViewerService; //#region Flags

    this.showLoader = false;
    this.isSearching = true;
    this.loanGridView = false;
    this.RescheduleView = false;
    this.instIntCheckboxDisable = false;
    this.gracePrdInstCheckboxDisable = true;
    this.instIntCheckbox = false;
    this.gracePrdInstCheckbox = false;
    this.rescheduleOptionDisable = false;
    this.TransDateDisabled = false;
    this.checkDatesInput = false;
    this.checkInstMatDateInput = false;
    this.FreeRescheduleAccess = false;
    this.FreeReschedule = false;
    this.ChequesPrintCheckbox = false;
    this.accordionGroupValue = "first";
    this.initialSearchType = "1";
    this.ClientloanList = null;
    this.selectedLoan = null;
    this.installmentsInfo = null;
    this.rescheduleRequest = null;
    this.nullDate = new Date("1900-01-01");
    this.todayDate = new Date();
    this.calcFeesFrom = 0;
    this.newInstallmentsInfo = null;
    this.rescheduleBanks = null;
    this.loanNo = null;
    this.loanIntRt = null;
    this.FixedLoanNo = null;
    this.FixedloanIntRt = null;
    this.FixedFirstIntDate = null;
    this.FixedTransDate = null;
    this.FixedGracePeriod = null;
    this.gracePeriod = 0;
    this.prevLoanNo = null;
    this.prevGracePeriod = null;
    this.prevLoanIntRt = null;
    this.prevTransDate = null;
    this.prevFirstInstDate = null; //#endregion
    //#region Forms

    this.rescheduleForm = this.formBuilder.group({
      TransDate: [null, src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_13__.dateTypeStringValidator({
        required: true
      })],
      FirstInstDate: [null, src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_13__.dateTypeStringValidator({
        required: true
      })]
    });
    this.installmentsFormArray = this.formBuilder.array([]);
  } //#region Initiallize


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoanReschedulePage, [{
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      this.cdref.detectChanges();
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.authService.getAccessRights();

              case 2:
                this.pageTypeAccessRights = _context.sent;

                if (this.pageTypeAccessRights.filter(function (x) {
                  return x.window_code == "5656";
                }).length > 0) {
                  this.FreeRescheduleAccess = true;
                }

                _context.next = 6;
                return this.referenceService.GetCalculateInterestOptions();

              case 6:
                this.rescheduleOptions = _context.sent;
                _context.next = 9;
                return this.bankService.getRescheduleBanks();

              case 9:
                this.rescheduleBanks = _context.sent;
                _context.t0 = Date;
                _context.next = 13;
                return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__.Preferences.get({
                  key: "periodStartDate"
                });

              case 13:
                _context.t1 = _context.sent.value;
                this.periodStartDate = new _context.t0(_context.t1);
                _context.t2 = Date;
                _context.next = 18;
                return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__.Preferences.get({
                  key: "periodEndDate"
                });

              case 18:
                _context.t3 = _context.sent.value;
                this.periodEndDate = new _context.t2(_context.t3);

                if (!(!localStorage.getItem("periodStartDate") || !localStorage.getItem("periodEndDate"))) {
                  _context.next = 31;
                  break;
                }

                _context.next = 23;
                return this.userService.getUserBranchInfo();

              case 23:
                this.userBranchInfo = _context.sent;

                if (!this.userBranchInfo) {
                  _context.next = 31;
                  break;
                }

                this.periodStartDate = new Date(this.userBranchInfo.period_start_date);
                this.periodEndDate = new Date(this.userBranchInfo.period_end_date);
                _context.next = 29;
                return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__.Preferences.set({
                  key: "periodStartDate",
                  value: this.datePipe.transform(this.userBranchInfo.period_start_date, "yyyy-MM-dd")
                });

              case 29:
                _context.next = 31;
                return _capacitor_preferences__WEBPACK_IMPORTED_MODULE_5__.Preferences.set({
                  key: "periodEndDate",
                  value: this.datePipe.transform(this.userBranchInfo.period_end_date, "yyyy-MM-dd")
                });

              case 31:
                if (this.periodStartDate.toString() === this.periodEndDate.toString()) {
                  this.TransDateDisabled = true;
                }

                this.TransDatePickerOptions = {
                  minDate: this.periodStartDate,
                  maxDate: this.periodEndDate
                };

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    } //#endregion
    //#region Select Methods

  }, {
    key: "clientSelected",
    value: function clientSelected(event) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.showLoader = true;
                _context2.next = 3;
                return this.loanService.getLoanInfoByClientKey(event.client_key).toPromise();

              case 3:
                this.ClientloanList = _context2.sent;

                if (this.ClientloanList) {
                  this.showLoader = false;
                  this.isSearching = false;
                  this.loanGridView = true;
                }

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "backToSearch",
    value: function backToSearch() {
      this.isSearching = true;
      this.loanGridView = false;
      this.RescheduleView = false;
      this.ClientloanList = null;
      this.selectedLoan = null;
      this.installmentsInfo = null;
      this.newInstallmentsInfo = null;
      this.rescheduleForm.reset();
      this.FreeReschedule = false;
      this.ChequesPrintCheckbox = false;
      this.ChequesPrintCheckbox = false;
      this.accordionGroupValue = "first";
    }
  }, {
    key: "loanSelected",
    value: function loanSelected(loan) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.showLoader = true;
                this.selectedLoan = loan;
                this.loanNo = loan.loan_no;
                this.loanIntRt = loan.loan_int_rt;
                _context3.next = 6;
                return this.installmentService.GetInstallmentsInfoByLoanKey(this.selectedLoan.loan_key).toPromise();

              case 6:
                this.installmentsInfo = _context3.sent;

                if (this.installmentsInfo) {
                  this.showLoader = false;
                  this.RescheduleView = true;
                  this.loanGridView = false;
                  this.FirstInstDatePickerOptions = {
                    minDate: new Date(this.selectedLoan.loan_last_trans_date)
                  };
                }

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    } //#endregion
    //#region Rescheduling

  }, {
    key: "onSelectChanged",
    value: function onSelectChanged(ev) {
      this.calcFeesFrom = Number(ev.detail.value);

      switch (this.calcFeesFrom) {
        case 0:
          this.instIntCheckboxDisable = false;
          this.gracePrdInstCheckboxDisable = true;
          this.gracePrdInstCheckbox = false;
          break;

        case 1:
          this.instIntCheckboxDisable = false;
          this.gracePrdInstCheckboxDisable = false;
          break;

        case 2:
          this.instIntCheckboxDisable = true;
          this.instIntCheckbox = false;
          this.gracePrdInstCheckboxDisable = false;
          break;
      }
    }
  }, {
    key: "savePrevValues",
    value: function savePrevValues() {
      this.prevLoanNo = this.loanNo;
      this.prevGracePeriod = this.gracePeriod;
      this.prevLoanIntRt = this.loanIntRt;
      this.prevTransDate = this.rescheduleForm.controls.TransDate.value;
      this.prevFirstInstDate = this.rescheduleForm.controls.FirstInstDate.value;
    }
  }, {
    key: "checkForPrevValues",
    value: function checkForPrevValues() {
      if (this.loanNo != this.prevLoanNo || this.gracePeriod != this.prevGracePeriod || this.loanIntRt != this.prevLoanIntRt || this.rescheduleForm.controls.TransDate.value != this.prevTransDate || this.rescheduleForm.controls.FirstInstDate.value != this.prevFirstInstDate) {
        this.rescheduleLoan();
      }
    }
  }, {
    key: "changeGracePeriod",
    value: function changeGracePeriod(i) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var input, loan_last_trans_date, loan_date, period_length, period_type, first_pay_date, calculatedFirstInstDate, _calculatedFirstInstDate;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                input = Number(i);
                loan_last_trans_date = this.selectedLoan.loan_last_trans_date;
                loan_date = this.selectedLoan.loan_date;
                period_length = this.selectedLoan.period_length;
                period_type = this.selectedLoan.period_type;
                first_pay_date = new Date(loan_last_trans_date);

                if (!(this.calcFeesFrom === 1)) {
                  _context4.next = 10;
                  break;
                }

                if (period_type === 1) {
                  first_pay_date.setMonth(first_pay_date.getMonth() + period_length * (input + 1));
                } else if (period_type === 3) {
                  first_pay_date.setDate(first_pay_date.getDate() + period_length * (input + 1));
                }

                _context4.next = 34;
                break;

              case 10:
                if (!(this.calcFeesFrom === 0)) {
                  _context4.next = 23;
                  break;
                }

                calculatedFirstInstDate = new Date(loan_date);

                if (period_type === 1) {
                  calculatedFirstInstDate.setMonth(calculatedFirstInstDate.getMonth() + period_length * (input + 1));
                } else if (period_type === 3) {
                  calculatedFirstInstDate.setDate(calculatedFirstInstDate.getDate() + period_length * (input + 1));
                }

                if (!(this.calculateDateDiff(loan_last_trans_date, calculatedFirstInstDate) > 0)) {
                  _context4.next = 17;
                  break;
                }

                first_pay_date = calculatedFirstInstDate;
                _context4.next = 21;
                break;

              case 17:
                _context4.next = 19;
                return this.alertService.showAlertError("فتره السماح المدخله ينتج عنها تاريخ استحقاق اول قسط يسبق تاريخ الجدوله", false);

              case 19:
                this.gracePeriod = this.FixedGracePeriod;
                return _context4.abrupt("return");

              case 21:
                _context4.next = 34;
                break;

              case 23:
                if (!(this.calcFeesFrom === 2)) {
                  _context4.next = 34;
                  break;
                }

                _calculatedFirstInstDate = new Date(loan_last_trans_date);

                if (period_type === 1) {
                  _calculatedFirstInstDate.setMonth(_calculatedFirstInstDate.getMonth() + period_length * (input + 1));
                } else if (period_type === 3) {
                  _calculatedFirstInstDate.setDate(_calculatedFirstInstDate.getDate() + period_length * (input + 1));
                }

                if (!(this.calculateDateDiff(loan_last_trans_date, _calculatedFirstInstDate) > 0)) {
                  _context4.next = 30;
                  break;
                }

                first_pay_date = _calculatedFirstInstDate;
                _context4.next = 34;
                break;

              case 30:
                _context4.next = 32;
                return this.alertService.showAlertError("فتره السماح المدخله ينتج عنها تاريخ استحقاق اول قسط يسبق تاريخ الجدوله", false);

              case 32:
                this.gracePeriod = this.FixedGracePeriod;
                return _context4.abrupt("return");

              case 34:
                this.rescheduleForm.patchValue({
                  FirstInstDate: this.datePipe.transform(first_pay_date, "yyyy-MM-dd")
                });
                this.checkForPrevValues();

              case 36:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "changeTransDate",
    value: function changeTransDate(ev) {
      if (this.rescheduleForm.valid) {
        this.rescheduleForm.patchValue({
          TransDate: ev
        });
        this.checkForPrevValues();
      }
    }
  }, {
    key: "changeFirstIntDate",
    value: function changeFirstIntDate(ev) {
      if (this.rescheduleForm.valid) {
        this.rescheduleForm.patchValue({
          FirstInstDate: ev
        });
        this.checkForPrevValues();
      }
    }
  }, {
    key: "rescheduleLoan",
    value: function rescheduleLoan() {
      var _a, _b, _c;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var _this = this;

        var matchingInstallment;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.checkDatesInput = true;
                this.FreeReschedule = false;
                this.installmentsFormArray.clear();

                if (!(this.newInstallmentsInfo && this.loanNo <= this.selectedLoan.loan_no)) {
                  _context5.next = 7;
                  break;
                }

                this.alertService.showAlertError("عدد الأقساط يجب أن يكون أكبر من أقساط الجدول الحالي و أقل من 1000 قسط", false);
                this.loanNo = this.newInstallmentsInfo.length;
                return _context5.abrupt("return");

              case 7:
                if (!(this.newInstallmentsInfo && !this.rescheduleForm.valid)) {
                  _context5.next = 9;
                  break;
                }

                return _context5.abrupt("return");

              case 9:
                this.showLoader = true;
                this.rescheduleRequest = {
                  loan_key: this.selectedLoan.loan_key,
                  start_date: this.datePipe.transform(this.selectedLoan.loan_date, "yyyy-MM-dd"),
                  end_date: this.datePipe.transform((_a = this.rescheduleForm.controls.TransDate.value) !== null && _a !== void 0 ? _a : this.todayDate, "yyyy-MM-dd"),
                  calc_fees_from: this.calcFeesFrom,
                  fees_rate: this.loanIntRt,
                  tot_inst_no: this.newInstallmentsInfo ? this.loanNo : 0,
                  first_mat_date: this.datePipe.transform((_b = this.rescheduleForm.controls.FirstInstDate.value) !== null && _b !== void 0 ? _b : this.nullDate, "yyyy-MM-dd"),
                  grace_prd_inst: this.gracePrdInstCheckbox ? 1 : 0,
                  prev_inst_int: this.instIntCheckbox ? 1 : 0
                };
                _context5.next = 13;
                return this.loanService.TestLoanReschedule(this.rescheduleRequest).toPromise();

              case 13:
                this.newInstallmentsInfo = _context5.sent;
                this.newInstallmentsInfo.forEach(function (installment) {
                  _this.addInstallmentForm(installment);

                  installment.inst_status_date = _this.datePipe.transform(installment.inst_status_date, "yyyy-MM-dd");
                });
                this.loanNo = this.newInstallmentsInfo.length;
                this.gracePeriod = this.calcFeesFrom !== 1 ? this.newInstallmentsInfo[0].grace_period : this.gracePeriod;
                matchingInstallment = this.newInstallmentsInfo.find(function (installment) {
                  return [1, 2, 4].includes(installment.inst_status) && installment.inst_am - installment.inst_int > 0;
                });

                if (matchingInstallment) {
                  this.rescheduleForm.patchValue({
                    FirstInstDate: this.datePipe.transform(matchingInstallment.inst_mat_date, "yyyy-MM-dd")
                  });
                }

                this.newInstallmentsInfo = this.newInstallmentsInfo.map(function (x) {
                  var match = _this.installmentsInfo.find(function (y) {
                    return y.inst_serial === x.inst_serial;
                  });

                  return match ? Object.assign(Object.assign({}, x), {
                    uuc: match.uuc
                  }) : x;
                });
                this.FixedLoanNo = this.newInstallmentsInfo.length;
                this.FixedloanIntRt = this.loanIntRt;
                this.FixedGracePeriod = this.newInstallmentsInfo[0].grace_period;
                this.FixedFirstIntDate = this.datePipe.transform(this.rescheduleForm.controls.FirstInstDate.value, "yyyy-MM-dd").toString();
                this.FixedTransDate = this.datePipe.transform((_c = this.rescheduleForm.controls.TransDate.value) !== null && _c !== void 0 ? _c : this.todayDate, "yyyy-MM-dd").toString();
                this.instIntCheckboxDisable = true;
                this.rescheduleOptionDisable = true;
                this.gracePrdInstCheckboxDisable = true;
                this.accordionGroupValue = "second";
                this.showLoader = false;

              case 30:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "changingInstBank",
    value: function changingInstBank(i) {
      var _this2 = this;

      this.rescheduleBanks.filter(function (x) {
        if (x.bank_code === _this2.newInstallmentsInfo[i].inst_org_bank) {
          _this2.newInstallmentsInfo[i].inst_org_bank_name = x.bank_name;
        }
      });
    }
  }, {
    key: "cancelRescheduleLoan",
    value: function cancelRescheduleLoan() {
      this.newInstallmentsInfo = null;
      this.rescheduleForm.reset();
      this.accordionGroupValue = "first";
      this.rescheduleOptionDisable = false;

      switch (this.calcFeesFrom) {
        case 0:
          this.instIntCheckboxDisable = false;
          this.gracePrdInstCheckboxDisable = true;
          this.gracePrdInstCheckbox = false;
          break;

        case 1:
          this.instIntCheckboxDisable = false;
          this.gracePrdInstCheckboxDisable = false;
          break;

        case 2:
          this.instIntCheckboxDisable = true;
          this.instIntCheckbox = false;
          this.gracePrdInstCheckboxDisable = false;
          break;
      }
    } //#endregion
    //#region Submit

  }, {
    key: "saveReschedule",
    value: function saveReschedule() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
        var _this3 = this;

        var errors, input;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.installmentsFormArray.controls.forEach(function (group, index) {
                  var _a;

                  var instMatDate = (_a = group.get("instMatDate")) === null || _a === void 0 ? void 0 : _a.value;

                  if (_this3.newInstallmentsInfo[index]) {
                    _this3.newInstallmentsInfo[index].inst_mat_date = instMatDate;
                  }
                });
                errors = this.validateFreeFields();

                if (!(errors.length > 0)) {
                  _context8.next = 7;
                  break;
                }

                this.alertService.showAlertError("<br>\u062D\u062F\u062B \u062E\u0637\u0623 \u0639\u0646\u062F \u0627\u0644\u062C\u062F\u0648\u0644\u0629 </br>" + "".concat(errors), false);
                return _context8.abrupt("return");

              case 7:
                if (!this.isEveryFormGroupValid()) {
                  _context8.next = 14;
                  break;
                }

                _context8.next = 10;
                return this.alertService.SaveAlert("هل انت متاكد من جدولة القرض؟");

              case 10:
                if (!_context8.sent) {
                  _context8.next = 14;
                  break;
                }

                this.showLoader = true;
                input = {
                  loan_int_rt: this.FixedloanIntRt,
                  loan_uuc: this.selectedLoan.uuc,
                  loan_notes: this.selectedLoan.loan_notes,
                  installments: this.newInstallmentsInfo
                };
                this.http.post(this.env.API_URL + "api/Loan/SaveLoanReschedule", input).subscribe({
                  next: function next() {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
                      var _this4 = this;

                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              this.showLoader = false;

                              if (!this.ChequesPrintCheckbox) {
                                _context6.next = 18;
                                break;
                              }

                              this.cancelRescheduleLoan();
                              this.selectedLoan.loan_no = this.FixedLoanNo;
                              this.selectedLoan.loan_int_rt = this.FixedloanIntRt;
                              this.selectedLoan.loan_last_trans_date = new Date(this.FixedTransDate);
                              _context6.next = 8;
                              return this.loanService.getLoanInfoByClientKey(Number(this.selectedLoan.client_key)).toPromise();

                            case 8:
                              this.ClientloanList = _context6.sent;
                              this.ClientloanList.filter(function (x) {
                                if (x.loan_key === _this4.selectedLoan.loan_key) {
                                  _this4.selectedLoan = x;
                                }
                              });
                              _context6.next = 12;
                              return this.installmentService.GetInstallmentsInfoByLoanKey(this.selectedLoan.loan_key).toPromise();

                            case 12:
                              this.installmentsInfo = _context6.sent;
                              _context6.next = 15;
                              return this.printRescheduleCheques();

                            case 15:
                              this.alertService.showAlertConfirm("تمت جدولة القرض بنجاح", false);
                              _context6.next = 19;
                              break;

                            case 18:
                              this.alertService.showAlertConfirm("تمت جدولة القرض بنجاح", true);

                            case 19:
                            case "end":
                              return _context6.stop();
                          }
                        }
                      }, _callee6, this);
                    }));
                  },
                  error: function error(err) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
                        while (1) {
                          switch (_context7.prev = _context7.next) {
                            case 0:
                              _context7.next = 2;
                              return this.alertService.showAlertError(err.error, false);

                            case 2:
                              this.showLoader = false;

                            case 3:
                            case "end":
                              return _context7.stop();
                          }
                        }
                      }, _callee7, this);
                    }));
                  }
                });

              case 14:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    } //#endregion
    //#region Free Reschedule

  }, {
    key: "AdjustInstallments",
    value: function AdjustInstallments(event) {
      event.stopPropagation();
      this.FreeReschedule = true;
      this.checkInstMatDateInput = true;
    }
  }, {
    key: "validateFreeFields",
    value: function validateFreeFields() {
      var _this5 = this;

      var errors = "";
      this.newInstallmentsInfo.forEach(function (installment, i) {
        if (!installment.inst_am) {
          errors += "<br>(".concat(installment.inst_serial, ") : \u0642\u064A\u0645\u0647 \u0627\u0644\u0642\u0633\u0637 \u063A\u064A\u0631 \u0633\u0644\u064A\u0645\u0647 </br>");
        }

        if (!installment.inst_int) {
          errors += "<br>(".concat(installment.inst_serial, ") : \u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0635\u0627\u0631\u064A\u0641 \u063A\u064A\u0631 \u0633\u0644\u064A\u0645\u0647 </br>");
        }

        if (!installment.inst_mat_date) {
          errors += "<br>(".concat(installment.inst_serial, ") : \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0627\u0633\u062A\u062D\u0642\u0627\u0642 \u063A\u064A\u0631 \u0633\u0644\u064A\u0645 </br>");
        }

        if (Number(installment.inst_am) <= 0) {
          errors += "<br>(".concat(installment.inst_serial, ") : \u0642\u064A\u0645\u0629 \u0627\u0644\u0642\u0633\u0637 \u0644\u0627 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0623\u0642\u0644 \u0645\u0646 \u0623\u0648 \u062A\u0633\u0627\u0648\u064A \u0635\u0641\u0631 </br>");
        }

        if (Number(installment.inst_am) < Number(installment.inst_int) && Number(installment.inst_am) > 0) {
          console.log(installment.inst_serial, installment.inst_am, installment.inst_int);
          errors += "<br>(".concat(installment.inst_serial, ") : \u0642\u064A\u0645\u0629 \u0627\u0644\u0642\u0633\u0637 \u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0623\u0643\u0628\u0631 \u0645\u0646 \u0642\u064A\u0645\u0629 \u0627\u0644\u0645\u0635\u0627\u0631\u064A\u0641 </br>");
        }

        if (i === _this5.installmentsInfo.length && _this5.calculateDateDiff(_this5.FixedTransDate, installment.inst_mat_date) < 0) {
          errors += "<br>(".concat(installment.inst_serial, ") : \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u064A\u062C\u0628 \u0623\u0646 \u0644\u0627 \u064A\u0642\u0644 \u0639\u0646 \u062A\u0627\u0631\u064A\u062E \u0627\u0644\u062D\u0631\u0643\u0629 </br>");
        }

        if (i > 0) {
          var prevInstMatDate = _this5.newInstallmentsInfo[i - 1].inst_mat_date;

          if (i > _this5.installmentsInfo.length && _this5.calculateDateDiff(prevInstMatDate, installment.inst_mat_date) < 0) {
            errors += "<br>(".concat(installment.inst_serial, ") : \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u064A\u062C\u0628 \u0623\u0646 \u0644\u0627 \u064A\u0642\u0644 \u0639\u0646 \u062A\u0627\u0631\u064A\u062E \u0622\u062E\u0631 \u0633\u062F\u0627\u062F </br>");
          }
        }
      });

      if (errors.length === 0) {
        var tot_resc_insts = this.installmentsInfo.reduce(function (sum, inst) {
          if ([1, 2, 4].includes(inst.inst_status)) {
            return sum + (inst.inst_am - inst.inst_int);
          }

          return sum;
        }, 0);
        var tot_new_insts = this.newInstallmentsInfo.reduce(function (sum, inst) {
          if ([1, 2].includes(inst.inst_status)) {
            return sum + (inst.inst_am - inst.inst_int);
          }

          return sum;
        }, 0);

        if (this.calculateDateDiff(this.FixedFirstIntDate, this.FixedTransDate) > 0) {
          errors += "(*) : \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u064A\u062C\u0628 \u0623\u0646 \u0644\u0627 \u064A\u0642\u0644 \u0639\u0646 \u062A\u0627\u0631\u064A\u062E \u0627\u0648\u0644 \u062A\u0627\u0631\u064A\u062E \u0625\u0633\u062A\u062D\u0642\u0627\u0642 \n";
        }

        if (tot_resc_insts != tot_new_insts) {
          errors += "(*) : \u0623\u0635\u0644 \u0627\u0644\u0645\u0628\u0644\u063A \u064A\u062C\u0628 \u0623\u0646 \u0644\u0627 \u064A\u062A\u063A\u064A\u0631 \u0639\u0646 \u0627\u0644\u0623\u0635\u0644 \u0627\u0644\u063A\u064A\u0631 \u0645\u0633\u062F\u062F \n";
        }
      }

      return errors;
    } //#endregion
    //#region Reports

  }, {
    key: "printReschedulePreviewReport",
    value: function printReschedulePreviewReport(event) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
        var _this6 = this;

        var rescheduleReport, token, claims, date, reportParameter;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!this.isEveryFormGroupValid()) {
                  _context9.next = 17;
                  break;
                }

                rescheduleReport = null;
                this.showLoader = true;
                event.stopPropagation();
                this.installmentsFormArray.controls.forEach(function (group, index) {
                  var _a;

                  var instMatDate = (_a = group.get("instMatDate")) === null || _a === void 0 ? void 0 : _a.value;

                  if (_this6.newInstallmentsInfo[index]) {
                    _this6.newInstallmentsInfo[index].inst_mat_date = instMatDate;
                  }
                });
                _context9.next = 7;
                return this.authService.getAccessToken();

              case 7:
                token = _context9.sent;
                token = token.replace("-", "+").replace("_", "/");
                claims = JSON.parse((0,src_app_core_util_atobSafe__WEBPACK_IMPORTED_MODULE_18__.atobSafe)(token.split(".")[1]));
                date = new Date();
                reportParameter = [{
                  key: "client_name",
                  value: this.selectedLoan.client_name.toString()
                }, {
                  key: "loan_date",
                  value: this.datePipe.transform(this.selectedLoan.loan_date, "yyyy-MM-dd").toString()
                }, {
                  key: "loan_am",
                  value: this.selectedLoan.loan_am.toString()
                }, {
                  key: "currency_name",
                  value: this.selectedLoan.currency_name.toString()
                }, {
                  key: "loan_vouch",
                  value: this.selectedLoan.loan_vouch.toString()
                }, {
                  key: "loan_no",
                  value: this.selectedLoan.loan_no.toString()
                }, {
                  key: "loan_gp",
                  value: this.gracePeriod.toString()
                }, {
                  key: "period_length",
                  value: this.selectedLoan.period_length.toString()
                }, {
                  key: "period_desc",
                  value: this.selectedLoan.period_type_desc.toString()
                }, {
                  key: "bank_name",
                  value: this.selectedLoan.bank_name.toString()
                }, {
                  key: "loan_int_rt",
                  value: this.FixedloanIntRt.toString()
                }, {
                  key: "loan_int_rt_desc",
                  value: this.selectedLoan.loan_int_type_desc.toString()
                }, {
                  key: "officer_name",
                  value: this.selectedLoan.officer_name.toString()
                }, {
                  key: "loan_int_rt_2",
                  value: this.selectedLoan.loan_int_rt_2 ? this.selectedLoan.loan_int_rt_2.toString() : "0"
                }, {
                  key: "loan_int_rt2_desc",
                  value: this.selectedLoan.loan_int_type_2_desc.toString()
                }, {
                  key: "loan_int_deduct2_desc",
                  value: this.selectedLoan.loan_int_2_deduct_desc.toString()
                }, {
                  key: "loan_status_desc",
                  value: this.selectedLoan.loan_status_desc.toString()
                }, {
                  key: "loan_cond_desc",
                  value: this.selectedLoan.loan_cond_desc.toString()
                }, {
                  key: "first_inst",
                  value: this.FixedFirstIntDate
                }, {
                  key: "loan_last_trans_date",
                  value: this.selectedLoan.loan_last_trans_date.toString()
                }, {
                  key: "org_name",
                  value: this.selectedLoan.org_code.toString()
                }, {
                  key: "branch_name",
                  value: this.selectedLoan.branch_name.toString()
                }, {
                  key: "user_name",
                  value: claims.user_name.toString()
                }, {
                  key: "execution_time",
                  value: this.datePipe.transform(date, "yyyy-MM-dd").toString()
                }];
                _context9.next = 14;
                return this.reportingService.getLoanReschedulePreviewReport(reportParameter, this.newInstallmentsInfo);

              case 14:
                rescheduleReport = _context9.sent;

                if (rescheduleReport) {
                  this.pdfViewerService.viewPdf(rescheduleReport, "\u062A\u0642\u0631\u064A\u0631 \u0627\u0644\u062C\u062F\u0648\u0644\u0629 \u0642\u0628\u0644 \u0627\u0644\u062D\u0641\u0638  ".concat(this.selectedLoan.client_name));
                }

                this.showLoader = false;

              case 17:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    }
  }, {
    key: "printRescheduleCheques",
    value: function printRescheduleCheques() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10() {
        var _this7 = this;

        var chequesReprot, reportName, reportParameters;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.showLoader = true;
                reportName = "web_" + this.selectedLoan.org_code.toString() + "_collateral_print";
                reportParameters = [{
                  key: "@cur_loan_key",
                  value: this.selectedLoan.loan_key.toString()
                }, {
                  key: "@inst_status",
                  value: this.selectedLoan.loan_status.toString()
                }];
                _context10.next = 5;
                return this.reportingService.getReport(reportName, reportParameters).then(function (x) {
                  chequesReprot = x;

                  if (chequesReprot) {
                    _this7.pdfViewerService.viewPdf(chequesReprot, "\u0634\u064A\u0643\u0627\u062A ".concat(_this7.selectedLoan.client_name));
                  }
                }).finally(function () {
                  _this7.showLoader = false;
                });

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
    } //#endregion
    //#region Dates Handling

  }, {
    key: "addInstallmentForm",
    value: function addInstallmentForm(installment) {
      var installmentForm = this.formBuilder.group({
        instMatDate: [this.datePipe.transform(new Date(installment.inst_mat_date), "yyyy-MM-dd"), src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_13__.dateTypeStringValidator({
          required: true
        })]
      });
      this.installmentsFormArray.push(installmentForm);
    }
  }, {
    key: "getFormGroup",
    value: function getFormGroup(i) {
      return this.installmentsFormArray.at(i);
    }
  }, {
    key: "setInstMatDate",
    value: function setInstMatDate(index) {
      if (this.installmentsFormArray.at(index).valid) {
        this.newInstallmentsInfo[index].inst_mat_date = this.datePipe.transform(new Date(this.installmentsFormArray.at(index).get("instMatDate").value), "yyyy-MM-dd").toString();
      }
    }
  }, {
    key: "isEveryFormGroupValid",
    value: function isEveryFormGroupValid() {
      return this.installmentsFormArray.controls.every(function (group) {
        return group.valid;
      });
    }
  }, {
    key: "calculateDateDiff",
    value: function calculateDateDiff(date1, date2) {
      var d1 = new Date(date1);
      var d2 = new Date(date2);
      var timeDiff = d2.getTime() - d1.getTime();
      var diffDays = timeDiff / (1000 * 3600 * 24);
      return diffDays;
    }
  }]);

  return LoanReschedulePage;
}();

LoanReschedulePage.ctorParameters = function () {
  return [{
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_10__.LoansService
  }, {
    type: src_app_core_services_installments_service__WEBPACK_IMPORTED_MODULE_9__.InstallmentsService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_11__.ReferencesService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe
  }, {
    type: src_app_core_services_bank_service__WEBPACK_IMPORTED_MODULE_7__.BankService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_8__.InputMaskingService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormBuilder
  }, {
    type: src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_12__.UserService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ChangeDetectorRef
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_14__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClient
  }, {
    type: src_app_core_services_reporting_service__WEBPACK_IMPORTED_MODULE_15__.ReportingService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_16__.MohassilAuthService
  }, {
    type: src_app_core_services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_17__.PdfViewerService
  }];
};

LoanReschedulePage = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
  selector: "app-loan-reschedule",
  template: _loan_reschedule_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe],
  styles: [_loan_reschedule_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], LoanReschedulePage);


/***/ }),

/***/ 83213:
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-reschedule/loan-reschedule.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ (function(module) {

module.exports = "ion-label {\n  color: var(--ion-color-primary);\n}\n\n.bold {\n  font-weight: bold;\n}\n\nion-accordion-group ion-accordion {\n  --ion-item-background: transparent;\n}\n\n@media (max-width: 991px) {\n  .large-screen-col {\n    display: none;\n  }\n}\n\n@media (max-width: 332px) {\n  .small-screen-align {\n    text-align: center !important;\n  }\n}\n\n.scrollable-header {\n  overflow-x: auto;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tcmVzY2hlZHVsZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEZWxldGUlMjBpdFxcTmV3TW9oYXNzaWxDbGllbnRfMzA5NV9zcmNcXE5ld01vaGFzc2lsQ2xpZW50XFxzcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxsb2Fuc1xcbG9hbi1yZXNjaGVkdWxlXFxsb2FuLXJlc2NoZWR1bGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxhQUFBO0VDQ0Y7QUFDRjs7QURDQTtFQUNFO0lBQ0UsNkJBQUE7RUNDRjtBQUNGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FDQUYiLCJmaWxlIjoibG9hbi1yZXNjaGVkdWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLmJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pb24tYWNjb3JkaW9uLWdyb3VwIGlvbi1hY2NvcmRpb24ge1xyXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gIC5sYXJnZS1zY3JlZW4tY29sIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMzJweCkge1xyXG4gIC5zbWFsbC1zY3JlZW4tYWxpZ24ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc2Nyb2xsYWJsZS1oZWFkZXIge1xyXG4gIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbn1cclxuIiwiaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWFjY29yZGlvbi1ncm91cCBpb24tYWNjb3JkaW9uIHtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5sYXJnZS1zY3JlZW4tY29sIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzMycHgpIHtcbiAgLnNtYWxsLXNjcmVlbi1hbGlnbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5zY3JvbGxhYmxlLWhlYWRlciB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn0iXX0= */";

/***/ }),

/***/ 66271:
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-reschedule/loan-reschedule.page.html?ngResource ***!
  \****************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<h4 class=\"divCenter\">جدولة القرض</h4>\n\n<!-- Client Search -->\n<app-client-search\n  *ngIf=\"isSearching\"\n  [sourcePage]=\"38\"\n  [resultType]=\"0\"\n  [pageAction]=\"0\"\n  [initialSearchType]=\"initialSearchType\"\n  (selectedClient)=\"clientSelected($event)\"\n>\n</app-client-search>\n\n<!-- Loan Select Grid -->\n<ion-card *ngIf=\"loanGridView\">\n  <ion-card-content>\n    <div class=\"table-responsive\">\n      <ion-grid class=\"scroll-container\" style=\"min-width: 450px\">\n        <ion-row class=\"header-row\">\n          <ion-col size=\"2\">\n            <ion-label>كود العميل</ion-label>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label>اسم العميل</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-label>نوع الاقتراض</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-label>رقم القرض</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-label>اختيار القرض</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"details-row\" *ngFor=\"let loan of ClientloanList\">\n          <ion-col size=\"2\">\n            <ion-label>{{loan.org_branch_code}}/{{loan.client_code}}</ion-label>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label>{{loan.client_name}}</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-label>{{loan.client_type_name}}</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-label>{{loan.loan_code}}</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-button (click)=\"loanSelected(loan)\">\n              <ion-icon name=\"eye\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <ion-row style=\"justify-content: center\">\n      <ion-button (click)=\"backToSearch()\" color=\"danger\"> رجوع </ion-button>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n\n<!-- Reschedule Grid -->\n<ion-card *ngIf=\"RescheduleView\">\n  <ion-card-content>\n    <div id=\"reschudleOptions\">\n      <ion-row>\n        <ion-col sizeLg=\"6\" sizeMd=\"12\" sizeSm=\"12\">\n          <ion-row>\n            <ion-col sizeLg=\"12\" sizeMd=\"12\" sizeSm=\"12\">\n              <ion-select\n                interface=\"popover\"\n                value=\"0\"\n                [disabled]=\"rescheduleOptionDisable\"\n                (ionChange)=\"onSelectChanged($event)\"\n              >\n                <ion-select-option\n                  *ngFor=\"let option of rescheduleOptions\"\n                  [value]=\"option.ref_code\"\n                >\n                  {{option.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col sizeLg=\"1\" sizeMd=\"1\" sizeSm=\"2\" sizeXs=\"2\">\n              <ion-checkbox\n                [(ngModel)]=\"instIntCheckbox\"\n                type=\"checkbox\"\n                [disabled]=\"instIntCheckboxDisable\"\n              ></ion-checkbox>\n            </ion-col>\n            <ion-col sizeLg=\"11\" sizeMd=\"11\" sizeSm=\"10\" sizeXs=\"10\">\n              <ion-label>قسط بالمصاريف السابقة</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col sizeLg=\"1\" sizeMd=\"1\" sizeSm=\"2\" sizeXs=\"2\">\n              <ion-checkbox\n                [(ngModel)]=\"gracePrdInstCheckbox\"\n                type=\"checkbox\"\n                [disabled]=\"gracePrdInstCheckboxDisable\"\n              ></ion-checkbox>\n            </ion-col>\n            <ion-col sizeLg=\"11\" sizeMd=\"11\" sizeSm=\"10\" sizeXs=\"10\">\n              <ion-label>حساب اقساط بالمصاريف فقط خلال فتره السماح</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col\n          sizeLg=\"6\"\n          sizeMd=\"6\"\n          sizeSm=\"12\"\n          sizeXs=\"12\"\n          style=\"align-content: center\"\n        >\n          <ion-row>\n            <ion-col\n              [style]='newInstallmentsInfo ? \"text-align: end\" : \"text-align: center\"'\n              class=\"small-screen-align\"\n            >\n              <ion-button\n                (click)=\"rescheduleLoan()\"\n                [disabled]=\"newInstallmentsInfo && !rescheduleForm.valid\"\n              >\n                تغيير الجدولة\n              </ion-button>\n            </ion-col>\n            <ion-col\n              style=\"text-align: start\"\n              *ngIf=\"newInstallmentsInfo\"\n              class=\"small-screen-align\"\n            >\n              <ion-button (click)=\"cancelRescheduleLoan()\" color=\"danger\">\n                الغاء الجدولة\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-card id=\"LoanInfo\">\n      <ion-card-header>\n        <ion-card-title>\n          <ion-label color=\"primary\"> بيانات القرض </ion-label>\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row>\n          <ion-col sizeLg=\"2\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label>كود القرض : </ion-label>\n          </ion-col>\n          <ion-col sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label class=\"bold\"\n              >{{selectedLoan.org_branch_code}}/{{selectedLoan.client_code}}/{{selectedLoan.loan_code}}</ion-label\n            >\n          </ion-col>\n          <ion-col\n            class=\"large-screen-col\"\n            sizeLg=\"3\"\n            sizeMd=\"0\"\n            sizeSm=\"0\"\n            sizeXs=\"0\"\n          ></ion-col>\n          <ion-col\n            sizeLg=\"1\"\n            sizeMd=\"1\"\n            sizeSm=\"2\"\n            sizeXs=\"2\"\n            style=\"text-align: end\"\n          >\n            <ion-checkbox\n              type=\"checkbox\"\n              [(ngModel)]=\"ChequesPrintCheckbox\"\n            ></ion-checkbox>\n          </ion-col>\n          <ion-col sizeLg=\"3\" sizeMd=\"5\" sizeSm=\"10\" sizeXs=\"10\">\n            <ion-label>طباعة الشيكات</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col sizeLg=\"2\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label>اسم العميل : </ion-label>\n          </ion-col>\n          <ion-col sizeLg=\"3\" sizeMd=\"5\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label class=\"bold\">{{selectedLoan.client_name}}</ion-label>\n          </ion-col>\n          <ion-col sizeLg=\"2\" sizeMd=\"0\" sizeSm=\"0\" sizeXs=\"0\"></ion-col>\n          <ion-col sizeLg=\"2\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label>تاريخ القرض : </ion-label>\n          </ion-col>\n          <ion-col sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label class=\"bold\"\n              >{{selectedLoan.loan_date | date:\"yyyy-MM-dd\"}}</ion-label\n            >\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col sizeLg=\"2\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label>قيمة القرض : </ion-label>\n          </ion-col>\n          <ion-col sizeLg=\"3\" sizeMd=\"5\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label class=\"bold\"\n              >{{selectedLoan.loan_am | number:'1.0-2':'en-US'}}</ion-label\n            >\n          </ion-col>\n          <ion-col sizeLg=\"2\" sizeMd=\"0\" sizeSm=\"0\" sizeXs=\"0\"></ion-col>\n          <ion-col sizeLg=\"2\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label>رقم الشيك : </ion-label>\n          </ion-col>\n          <ion-col sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label class=\"bold\">{{selectedLoan.loan_vouch}}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col sizeLg=\"2\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label>عدد الاقساط : </ion-label>\n          </ion-col>\n          <ion-col sizeLg=\"3\" sizeMd=\"5\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label *ngIf=\"!newInstallmentsInfo\" class=\"bold\"\n              >{{selectedLoan.loan_no}}</ion-label\n            >\n            <ion-input\n              *ngIf=\"newInstallmentsInfo\"\n              [(ngModel)]=\"loanNo\"\n              (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\n              (ionBlur)=\"checkForPrevValues()\"\n              (ionFocus)=\"savePrevValues()\"\n            ></ion-input>\n          </ion-col>\n          <ion-col sizeLg=\"2\" sizeMd=\"0\" sizeSm=\"0\" sizeXs=\"0\"></ion-col>\n          <ion-col sizeLg=\"2\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label>فترة السماح : </ion-label>\n          </ion-col>\n          <ion-col\n            sizeLg=\"3\"\n            *ngIf=\"!newInstallmentsInfo\"\n            sizeMd=\"6\"\n            sizeSm=\"12\"\n            sizeXs=\"12\"\n          >\n            <ion-label class=\"bold\">{{selectedLoan.loan_gp}}</ion-label>\n          </ion-col>\n          <ion-col\n            *ngIf=\"newInstallmentsInfo\"\n            sizeLg=\"3\"\n            sizeMd=\"6\"\n            sizeSm=\"12\"\n            sizeXs=\"12\"\n          >\n            <!-- <ion-label class=\"bold\">{{gracePeriod}}</ion-label> -->\n            <ion-input\n              [(ngModel)]=\"gracePeriod\"\n              type=\"text\"\n              (ionInput)=\"this.inputMaskingService.formatNumberInput($event, -999, 999, 0)\"\n              (ionBlur)=\"changeGracePeriod(gracePeriod)\"\n              (ionFocus)=\"savePrevValues()\"\n            ></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col sizeLg=\"2\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label>فترة السداد كل : </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"bold\"\n              >{{selectedLoan.period_length}}\n              {{selectedLoan.period_type_desc}}</ion-label\n            >\n          </ion-col>\n          <ion-col sizeLg=\"2\" sizeMd=\"0\" sizeSm=\"0\" sizeXs=\"0\"></ion-col>\n          <ion-col sizeLg=\"2\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label>بنك الاصدار : </ion-label>\n          </ion-col>\n          <ion-col sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label class=\"bold\">{{selectedLoan.bank_name}}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col sizeLg=\"2\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label>نسبة المصاريف الموزعة : </ion-label>\n          </ion-col>\n          <ion-col sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-row>\n              <ion-col\n                *ngIf=\"!newInstallmentsInfo\"\n                sizeLg=\"2\"\n                sizeMd=\"2\"\n                sizeSm=\"3\"\n                sizeXs=\"3\"\n              >\n                <ion-label class=\"bold\"\n                  >{{selectedLoan.loan_int_rt |\n                  number:'1.0-2':'en-US'}}</ion-label\n                ></ion-col\n              >\n              <ion-col\n                *ngIf=\"newInstallmentsInfo\"\n                sizeLg=\"4\"\n                sizeMd=\"4\"\n                sizeSm=\"5\"\n                sizeXs=\"5\"\n                ><ion-input\n                  [(ngModel)]=\"loanIntRt\"\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n                  (ionBlur)=\"checkForPrevValues()\"\n                  (ionFocus)=\"savePrevValues()\"\n                  type=\"text\"\n                ></ion-input\n              ></ion-col>\n              <ion-col\n                sizeLg=\"6\"\n                sizeMd=\"6\"\n                sizeSm=\"6\"\n                sizeXs=\"6\"\n                style=\"align-content: center\"\n                ><ion-label class=\"bold\">\n                  % {{selectedLoan.loan_int_type_desc}}\n                </ion-label></ion-col\n              >\n            </ion-row>\n          </ion-col>\n          <ion-col\n            class=\"large-screen-col\"\n            sizeLg=\"2\"\n            sizeMd=\"0\"\n            sizeSm=\"0\"\n            sizeXs=\"0\"\n          ></ion-col>\n          <ion-col sizeLg=\"2\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label>المندوب : </ion-label>\n          </ion-col>\n          <ion-col sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label class=\"bold\">{{selectedLoan.officer_name}}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col sizeLg=\"2\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label>نسبة المصاريف المقدمة : </ion-label>\n          </ion-col>\n          <ion-col sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label class=\"bold\"\n              >{{selectedLoan.loan_int_rt_2 ? selectedLoan.loan_int_rt_2 : 0 |\n              number:'1.0-2':'en-US'}} % {{selectedLoan.loan_int_type_2_desc}}\n              {{selectedLoan.loan_int_2_deduct_desc}}</ion-label\n            >\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col sizeLg=\"2\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label>الحالة : </ion-label>\n          </ion-col>\n          <ion-col sizeLg=\"3\" sizeMd=\"5\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label class=\"bold\"\n              >{{selectedLoan.loan_status_desc}}\n              {{selectedLoan.loan_cond_desc}}</ion-label\n            >\n          </ion-col>\n          <ion-col sizeLg=\"2\" sizeMd=\"0\" sizeSm=\"0\" sizeXs=\"0\"></ion-col>\n          <ion-col sizeLg=\"2\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label>تاريخ اخر حركة</ion-label>\n          </ion-col>\n          <ion-col sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label class=\"bold\"\n              >{{selectedLoan.loan_last_trans_date |\n              date:\"yyyy-MM-dd\"}}</ion-label\n            >\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label class=\"form-label\">ملاحظات القرض</ion-label>\n            <ion-textarea\n              [(ngModel)]=\"selectedLoan.loan_notes\"\n              [autoGrow]=\"true\"\n            ></ion-textarea>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"this.newInstallmentsInfo\">\n          <ion-col sizeLg=\"2\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label>تاريخ الحركة : </ion-label>\n          </ion-col>\n          <ion-col sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ngx-datepicker\n              [disabledValue]=\"TransDateDisabled\"\n              [parentForm]=\"rescheduleForm\"\n              parentFormControllerName=\"TransDate\"\n              [options]=\"TransDatePickerOptions\"\n              (ionChange)=\"changeTransDate($event)\"\n              (blur)=\"changeTransDate($event)\"\n              (focus)=\"savePrevValues()\"\n            ></ngx-datepicker>\n            <html-validations\n              [validationInput]=\"{\n              showError:checkDatesInput,\n              formGroup: rescheduleForm,\n              formControlName: 'TransDate'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col\n            class=\"large-screen-col\"\n            sizeLg=\"2\"\n            sizeMd=\"0\"\n            sizeSm=\"0\"\n            sizeXs=\"0\"\n          ></ion-col>\n          <ion-col sizeLg=\"2\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ion-label>تاريخ استحقاق أول قسط يتضمن أصل</ion-label>\n          </ion-col>\n          <ion-col sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\" sizeXs=\"12\">\n            <ngx-datepicker\n              [parentForm]=\"rescheduleForm\"\n              parentFormControllerName=\"FirstInstDate\"\n              [options]=\"FirstInstDatePickerOptions\"\n              (ionChange)=\"changeFirstIntDate($event)\"\n              (blur)=\"changeFirstIntDate($event)\"\n              (focus)=\"savePrevValues()\"\n            ></ngx-datepicker>\n            <html-validations\n              [validationInput]=\"{\n              showError:checkDatesInput,\n              formGroup: rescheduleForm,\n              formControlName: 'FirstInstDate'}\"\n            ></html-validations>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <ion-accordion-group id=\"InstallmentsTable\" [value]=\"accordionGroupValue\">\n      <ion-accordion value=\"first\">\n        <ion-item slot=\"header\">\n          <ion-label>جدول السداد الحالي</ion-label>\n        </ion-item>\n        <div class=\"ion-padding table-responsive\" slot=\"content\">\n          <ion-grid class=\"scroll-container\" style=\"min-width: 700px\">\n            <ion-row class=\"header-row\">\n              <ion-col size=\"1\">\n                <ion-label>م</ion-label>\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-label>قيمة</ion-label>\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-label>مصاريف</ion-label>\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-label>تاريخ الاستحقاق</ion-label>\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-label>تاريخ الحالة الفعلي</ion-label>\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-label>رقم مستند الضمان</ion-label>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-label>صادر من</ion-label>\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-label>حالة القسط</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"details-row\" *ngFor=\"let inst of installmentsInfo\">\n              <ion-col size=\"1\">\n                <ion-label>{{inst.inst_serial}}</ion-label>\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-label>{{inst.inst_am | number:'1.0-2':'en-US'}}</ion-label>\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-label\n                  >{{inst.inst_int | number:'1.0-2':'en-US'}}</ion-label\n                >\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-label\n                  >{{inst.inst_mat_date | date:\"yyyy-MM-dd\"}}</ion-label\n                >\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-label\n                  >{{inst.inst_status_date | date:\"yyyy-MM-dd\"}}</ion-label\n                >\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-label>{{inst.inst_vouch}}</ion-label>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-label>{{inst.inst_org_bank_name}}</ion-label>\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-label\n                  >{{inst.inst_status_desc}} {{inst.inst_cond_desc}}</ion-label\n                >\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-accordion>\n      <ion-accordion value=\"second\" *ngIf=\"newInstallmentsInfo\">\n        <ion-item slot=\"header\" class=\"scrollable-header\">\n          <ion-label slot=\"start\">جدول السداد الجديد</ion-label>\n          <ion-button slot=\"end\" (click)=\"printReschedulePreviewReport($event)\">\n            طباعة قبل الحفظ\n          </ion-button>\n          <ion-button\n            *ngIf=\"FreeRescheduleAccess\"\n            slot=\"end\"\n            [disabled]=\"FreeReschedule\"\n            (click)=\"AdjustInstallments($event)\"\n          >\n            تعديل الاقساط\n          </ion-button>\n        </ion-item>\n        <div class=\"ion-padding table-responsive\" slot=\"content\">\n          <ion-grid class=\"scroll-container\" style=\"min-width: 1000px\">\n            <ion-row class=\"header-row\">\n              <ion-col size=\"1\">\n                <ion-label>م</ion-label>\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-label>قيمة</ion-label>\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-label>مصاريف</ion-label>\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-label>تاريخ الاستحقاق</ion-label>\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-label>تاريخ الحالة الفعلي</ion-label>\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-label>رقم مستند الضمان</ion-label>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-label>صادر من</ion-label>\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-label>حالة القسط</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row\n              class=\"details-row\"\n              *ngFor=\"let inst of newInstallmentsInfo;let i = index\"\n            >\n              <ion-col size=\"1\">\n                <ion-label>{{inst.inst_serial}}</ion-label>\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-label\n                  *ngIf=\"!FreeReschedule || (FreeReschedule && ![1, 2].includes(inst.inst_status))\"\n                  >{{inst.inst_am | number:'1.0-2':'en-US'}}</ion-label\n                >\n                <ion-input\n                  *ngIf=\"FreeReschedule && [1, 2].includes(inst.inst_status)\"\n                  [(ngModel)]=\"inst.inst_am\"\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e16, 2)\"\n                ></ion-input>\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-label\n                  *ngIf=\"!FreeReschedule || (FreeReschedule && ![1, 2].includes(inst.inst_status))\"\n                  >{{inst.inst_int | number:'1.0-2':'en-US'}}</ion-label\n                >\n                <ion-input\n                  *ngIf=\"FreeReschedule && [1, 2].includes(inst.inst_status)\"\n                  [(ngModel)]=\"inst.inst_int\"\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e16, 2)\"\n                ></ion-input>\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-label\n                  *ngIf=\"!FreeReschedule || (FreeReschedule && ![1, 2].includes(inst.inst_status))\"\n                  >{{inst.inst_mat_date | date:\"yyyy-MM-dd\"}}</ion-label\n                >\n                <ngx-datepicker\n                  *ngIf=\"FreeReschedule && [1, 2].includes(inst.inst_status)\"\n                  [parentForm]=\"getFormGroup(i)\"\n                  parentFormControllerName=\"instMatDate\"\n                  (ionChange)=\"setInstMatDate(i)\"\n                ></ngx-datepicker>\n                <html-validations\n                  *ngIf=\"FreeReschedule && [1, 2].includes(inst.inst_status)\"\n                  [validationInput]=\"{\n                        showError:checkInstMatDateInput,\n                        formGroup: getFormGroup(i),\n                        formControlName: 'instMatDate'}\"\n                ></html-validations>\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-label\n                  >{{inst.inst_status_date | date:\"yyyy-MM-dd\"}}</ion-label\n                >\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-label *ngIf=\"![1, 2].includes(inst.inst_status)\"\n                  >{{inst.inst_vouch}}</ion-label\n                >\n                <ion-input\n                  *ngIf=\"[1, 2].includes(inst.inst_status)\"\n                  [(ngModel)]=\"inst.inst_vouch\"\n                ></ion-input>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-label *ngIf=\"![1, 2].includes(inst.inst_status)\"\n                  >{{inst.inst_org_bank_name}}</ion-label\n                >\n                <ion-select\n                  *ngIf=\"[1, 2].includes(inst.inst_status)\"\n                  [(ngModel)]=\"inst.inst_org_bank\"\n                  interface=\"popover\"\n                  (ionChange)=\"changingInstBank(i)\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let bank of rescheduleBanks\"\n                    [value]=\"bank.bank_code\"\n                  >\n                    {{bank.bank_name}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-col>\n              <ion-col size=\"1\">\n                <ion-label\n                  >{{inst.inst_status_desc}} {{inst.inst_cond_desc}}</ion-label\n                >\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n      </ion-accordion>\n    </ion-accordion-group>\n    <ion-row style=\"justify-content: center\" class=\"ion-padding\">\n      <ion-button\n        (click)=\"saveReschedule()\"\n        *ngIf=\"newInstallmentsInfo\"\n        [disabled]=\"\"\n      >\n        حفظ\n      </ion-button>\n      <ion-button (click)=\"backToSearch()\" color=\"danger\"> رجوع </ion-button>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_loan-reschedule_loan-reschedule_module_ts.js.map