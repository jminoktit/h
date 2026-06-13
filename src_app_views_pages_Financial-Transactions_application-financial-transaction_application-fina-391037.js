"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_Financial-Transactions_application-financial-transaction_application-fina-391037"],{

/***/ 27745:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/Financial-Transactions/application-financial-transaction/application-financial-transaction-routing.module.ts ***!
  \******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationFinancialTransactionPageRoutingModule": function() { return /* binding */ ApplicationFinancialTransactionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _application_financial_transaction_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application-financial-transaction.page */ 90038);






var routes = [{
  path: '',
  component: _application_financial_transaction_page__WEBPACK_IMPORTED_MODULE_2__.ApplicationFinancialTransactionPage
}];

var ApplicationFinancialTransactionPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ApplicationFinancialTransactionPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ApplicationFinancialTransactionPageRoutingModule);
});

ApplicationFinancialTransactionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ApplicationFinancialTransactionPageRoutingModule);


/***/ }),

/***/ 40215:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/Financial-Transactions/application-financial-transaction/application-financial-transaction.module.ts ***!
  \**********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationFinancialTransactionPageModule": function() { return /* binding */ ApplicationFinancialTransactionPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _application_financial_transaction_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application-financial-transaction-routing.module */ 27745);
/* harmony import */ var _application_financial_transaction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application-financial-transaction.page */ 90038);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var ApplicationFinancialTransactionPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ApplicationFinancialTransactionPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ApplicationFinancialTransactionPageModule);
});

ApplicationFinancialTransactionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _application_financial_transaction_routing_module__WEBPACK_IMPORTED_MODULE_2__.ApplicationFinancialTransactionPageRoutingModule],
  declarations: [_application_financial_transaction_page__WEBPACK_IMPORTED_MODULE_3__.ApplicationFinancialTransactionPage]
})], ApplicationFinancialTransactionPageModule);


/***/ }),

/***/ 90038:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/Financial-Transactions/application-financial-transaction/application-financial-transaction.page.ts ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationFinancialTransactionPage": function() { return /* binding */ ApplicationFinancialTransactionPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _application_financial_transaction_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application-financial-transaction.page.html?ngResource */ 58204);
/* harmony import */ var _application_financial_transaction_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application-financial-transaction.page.scss?ngResource */ 56291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_client_transactions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/client-transactions.service */ 64242);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/validators/custom-validators */ 92609);
/* harmony import */ var src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/loan-applications.service */ 35866);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);




















var ApplicationFinancialTransactionPage = /*#__PURE__*/function () {
  function ApplicationFinancialTransactionPage(referencesService, formBuilder, authService, clientTransactionsService, loanApplicationService, pagingService, sortingService, alertService, inputMaskingService) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ApplicationFinancialTransactionPage);

    this.referencesService = referencesService;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.clientTransactionsService = clientTransactionsService;
    this.loanApplicationService = loanApplicationService;
    this.pagingService = pagingService;
    this.sortingService = sortingService;
    this.alertService = alertService;
    this.inputMaskingService = inputMaskingService; //#region Variables

    this.showLoader = false;
    this.sortingObject = {
      sortingIconClass: null,
      sortingIconParam: null
    };

    this.changePaginationPage = function (newPage) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.pagingObject.page = newPage;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ApplicationFinancialTransactionPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.showLoader = true;
                this.initializeState();
                _context2.next = 4;
                return this.referencesService.getBankType();

              case 4:
                this.databaseResponses.bankType = _context2.sent;
                _context2.next = 7;
                return this.authService.getAccessRights();

              case 7:
                this.databaseResponses.accessRight = _context2.sent;
                _context2.next = 10;
                return this.referencesService.getApplicationTransactionTypes();

              case 10:
                this.databaseResponses.transactionTypes = _context2.sent;
                this.segmentSection = {
                  visible: true,
                  allAvaliableSegments: [{
                    name: "إدخال حركات ماليه لطلبات القروض",
                    pageAction: 1,
                    windowCode: "5636",
                    hasPermission: this.databaseResponses.accessRight.some(function (x) {
                      return x.window_code === "5636";
                    })
                  }, {
                    name: "تعديل حركات ماليه لطلبات القروض",
                    pageAction: 3,
                    windowCode: "5637",
                    hasPermission: this.databaseResponses.accessRight.some(function (x) {
                      return x.window_code === "5637";
                    })
                  }, {
                    name: "حذف حركات ماليه لطلبات القروض",
                    pageAction: 3,
                    windowCode: "5638",
                    hasPermission: this.databaseResponses.accessRight.some(function (x) {
                      return x.window_code === "5638";
                    })
                  }],
                  selectedSegment: null,
                  disable: false
                };
                this.segmentSection.selectedSegment = this.segmentSection.allAvaliableSegments.find(function (x) {
                  return x.hasPermission;
                });
                this.showLoader = false;

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "allSegmentsThatHavePermission",
    get: function get() {
      return this.segmentSection.allAvaliableSegments.filter(function (x) {
        return x.hasPermission;
      });
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.segmentSection = {
                  visible: false,
                  allAvaliableSegments: [],
                  selectedSegment: null,
                  disable: true
                };
                this.clientSearchCardSection = {
                  visible: true,
                  clientInformation: null
                };
                this.applicationTransactionSection = {
                  visible: false,
                  checkIfInputsValid: false,
                  formGroup: this.formBuilder.group({
                    clientKey: [null],
                    clientName: [null],
                    clientCode: [null],
                    applicationKey: [null],
                    applicationCode: [null],
                    decEffectiveDate: [null],
                    aprvAm: [null],
                    loanUsageName: [null],
                    transactionCode: [null],
                    transactionType: [null, src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_9__.transactionTypeValidator({
                      required: true
                    })],
                    transactionAmount: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_9__.transactionAmountValidator({
                      required: true,
                      valueGreaterThanZero: true
                    })]],
                    transactionMaturityDate: [null, src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_9__.dateTypeStringValidator({
                      required: true
                    })],
                    bankType: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_9__.bankTypeValidator({
                      required: true
                    })]],
                    transactionBank: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_9__.bankNameValidator({
                      required: true
                    })]],
                    transactionVoucher: [null],
                    uuc: [null]
                  })
                };
                this.pagingObject = {
                  page: 1
                };
                this.clientLoanApplicationSection = {
                  visible: false,
                  clientApplication: []
                };
                this.databaseResponses = {
                  banks: [],
                  bankType: [],
                  accessRight: [],
                  transactionTypes: []
                };
                this.loanApplicationTransactionGrid = {
                  visible: false,
                  transactions: []
                };

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "clientSelected",
    value: function clientSelected(searchResult) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                this.showLoader = true;
                _context4.t0 = this.segmentSection.selectedSegment.windowCode;
                _context4.next = _context4.t0 === "5636" ? 5 : _context4.t0 === "5637" ? 8 : _context4.t0 === "5638" ? 11 : 14;
                break;

              case 5:
                _context4.next = 7;
                return this.insertSegment(searchResult);

              case 7:
                return _context4.abrupt("break", 14);

              case 8:
                _context4.next = 10;
                return this.editSegment(searchResult);

              case 10:
                return _context4.abrupt("break", 14);

              case 11:
                _context4.next = 13;
                return this.deleteSegment(searchResult);

              case 13:
                return _context4.abrupt("break", 14);

              case 14:
                _context4.next = 19;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t1 = _context4["catch"](0);
                this.alertService.showAlertError(_context4.t1.error, false);

              case 19:
                _context4.prev = 19;
                this.showLoader = false;
                return _context4.finish(19);

              case 22:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 16, 19, 22]]);
      }));
    }
  }, {
    key: "transactionSegmentChanging",
    value: function transactionSegmentChanging(event) {
      var segmentEvent = event;
      this.setSelectedTransactionSegment(segmentEvent.detail.value);
      this.resetClientSearchComponent();
    }
  }, {
    key: "setSelectedTransactionSegment",
    value: function setSelectedTransactionSegment(windowCode) {
      this.segmentSection.selectedSegment = this.segmentSection.allAvaliableSegments.find(function (x) {
        return x.windowCode === windowCode;
      });
    }
  }, {
    key: "resetClientSearchComponent",
    value: function resetClientSearchComponent() {
      var _this2 = this;

      this.clientSearchCardSection.visible = false;
      this.clientLoanApplicationSection.visible = false;
      this.applicationTransactionSection.visible = false;
      this.loanApplicationTransactionGrid.visible = false;
      setTimeout(function () {
        return _this2.clientSearchCardSection.visible = true;
      }, 0);
    }
  }, {
    key: "sortingTable",
    value: function sortingTable(data, param) {
      this.sortingService.sortByParameter(data, param);
      this.sortingObject.sortingIconClass = this.sortingService.sortOrder === "asc" ? "arrow-down-outline" : "arrow-up-outline";
      this.sortingObject.sortingIconParam = param;
    }
  }, {
    key: "backButton",
    value: function backButton() {
      if (this.clientLoanApplicationSection.visible) {
        this.clientLoanApplicationSection.visible = false;
        this.clientSearchCardSection.visible = true;
      }

      if (this.loanApplicationTransactionGrid.visible) {
        this.loanApplicationTransactionGrid.visible = false;
        this.clientSearchCardSection.visible = true;
      }

      if (this.applicationTransactionSection.visible && this.segmentSection.selectedSegment.windowCode === "5637") {
        this.applicationTransactionSection.visible = false;
        this.loanApplicationTransactionGrid.visible = true;
        this.applicationTransactionSection.formGroup.reset();
      }

      if (this.applicationTransactionSection.visible && this.segmentSection.selectedSegment.windowCode === "5636") {
        this.applicationTransactionSection.visible = false;
        this.clientLoanApplicationSection.visible = true;
        this.applicationTransactionSection.formGroup.reset();
      }
    }
  }, {
    key: "applicationSelected",
    value: function applicationSelected(application) {
      this.clientLoanApplicationSection.visible = false;
      this.applicationTransactionSection.visible = true;
      this.applicationTransactionSection.formGroup.patchValue({
        clientCode: application.client_code,
        clientName: application.client_name,
        applicationKey: application.application_key,
        applicationCode: application.application_code,
        decEffectiveDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(new Date(application.dec_effective_date), "yyyy-MM-dd"),
        aprvAm: application.aprv_am,
        loanUsageName: application.loan_usage_name
      });
    }
  }, {
    key: "getBanks",
    value: function getBanks() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.applicationTransactionSection.formGroup.patchValue({
                  bankKey: null
                });
                _context5.next = 3;
                return this.referencesService.getBanksByBankType(Number(this.applicationTransactionSection.formGroup.value.bankType));

              case 3:
                this.databaseResponses.banks = _context5.sent;

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "insertSegment",
    value: function insertSegment(searchResult) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.loanApplicationService.getClientLoanApplications(searchResult.client_key.toString());

              case 2:
                this.clientLoanApplicationSection.clientApplication = _context6.sent;
                this.applicationTransactionSection.formGroup.patchValue({
                  clientKey: searchResult.client_key,
                  applicationKey: searchResult.application_key
                });
                this.clientSearchCardSection.visible = false;
                this.clientLoanApplicationSection.visible = true;

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "editSegment",
    value: function editSegment(searchResult) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.clientTransactionsService.getApplicationTransactions(searchResult.client_key.toString());

              case 2:
                this.loanApplicationTransactionGrid.transactions = _context7.sent;
                this.clientSearchCardSection.visible = false;
                this.loanApplicationTransactionGrid.visible = true;

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "deleteSegment",
    value: function deleteSegment(searchResult) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.clientTransactionsService.getApplicationTransactions(searchResult.client_key.toString());

              case 2:
                this.loanApplicationTransactionGrid.transactions = _context8.sent;
                this.clientSearchCardSection.visible = false;
                this.loanApplicationTransactionGrid.visible = true;

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }, {
    key: "deleteClientTransaction",
    value: function deleteClientTransaction(transaction) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.alertService.SaveAlert();

              case 2:
                if (_context9.sent) {
                  _context9.next = 4;
                  break;
                }

                return _context9.abrupt("return");

              case 4:
                _context9.prev = 4;
                this.showLoader = true;
                _context9.next = 8;
                return this.clientTransactionsService.deleteClientTransaction(Number(transaction.trans_code), transaction.uuc.toString());

              case 8:
                this.alertService.showAlertConfirm("لقد تم حذف الحركة ", true);
                _context9.next = 15;
                break;

              case 11:
                _context9.prev = 11;
                _context9.t0 = _context9["catch"](4);
                this.alertService.showAlertError(_context9.t0.error, false);
                throw _context9.t0;

              case 15:
                _context9.prev = 15;
                this.showLoader = false;
                return _context9.finish(15);

              case 18:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[4, 11, 15, 18]]);
      }));
    }
  }, {
    key: "openEditForm",
    value: function openEditForm(transactionData) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10() {
        var applicationTransaction;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.showLoader = true;
                _context10.next = 3;
                return this.clientTransactionsService.getApplicationTransactionByTransCode(transactionData.trans_code);

              case 3:
                applicationTransaction = _context10.sent;
                this.applicationTransactionSection.formGroup.patchValue({
                  clientName: applicationTransaction.client_name,
                  clientCode: applicationTransaction.org_branch_code + "/" + applicationTransaction.client_code,
                  transactionType: applicationTransaction.type_key,
                  transactionCode: Number(applicationTransaction.trans_code),
                  transactionAmount: (0,_angular_common__WEBPACK_IMPORTED_MODULE_16__.formatNumber)(Number(applicationTransaction.trans_amount), "en-US", "1.0-2"),
                  transactionMaturityDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(new Date(applicationTransaction.trans_act_date), "yyyy-MM-dd"),
                  transactionVoucher: applicationTransaction.trans_vouch,
                  bankType: applicationTransaction.bank_type.toString(),
                  transactionBank: applicationTransaction.cur_bank_key.toString(),
                  uuc: applicationTransaction.uuc.toString()
                });
                _context10.next = 7;
                return this.getBanks();

              case 7:
                this.loanApplicationTransactionGrid.visible = false;
                this.applicationTransactionSection.visible = true;
                this.showLoader = false;

              case 10:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
    }
  }, {
    key: "insertClientTransaction",
    value: function insertClientTransaction() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee11() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (this.applicationTransactionSection.formGroup.valid) {
                  _context11.next = 2;
                  break;
                }

                return _context11.abrupt("return", this.applicationTransactionSection.checkIfInputsValid = true);

              case 2:
                _context11.next = 4;
                return this.alertService.SaveAlert();

              case 4:
                if (_context11.sent) {
                  _context11.next = 6;
                  break;
                }

                return _context11.abrupt("return");

              case 6:
                _context11.prev = 6;
                this.showLoader = true;
                console.log(this.applicationTransactionSection.formGroup.value);
                _context11.next = 11;
                return this.clientTransactionsService.insertLoanApplicationTransaction(this.applicationTransactionSection.formGroup.value);

              case 11:
                this.alertService.showAlertConfirm("لقد تم الحفظ بنجاح", true);
                _context11.next = 18;
                break;

              case 14:
                _context11.prev = 14;
                _context11.t0 = _context11["catch"](6);
                this.alertService.showAlertError(_context11.t0.error, false);
                throw _context11.t0;

              case 18:
                _context11.prev = 18;
                this.showLoader = false;
                return _context11.finish(18);

              case 21:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[6, 14, 18, 21]]);
      }));
    }
  }, {
    key: "editClientTransaction",
    value: function editClientTransaction() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee12() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (this.applicationTransactionSection.formGroup.valid) {
                  _context12.next = 2;
                  break;
                }

                return _context12.abrupt("return", this.applicationTransactionSection.checkIfInputsValid = true);

              case 2:
                _context12.next = 4;
                return this.alertService.SaveAlert();

              case 4:
                if (_context12.sent) {
                  _context12.next = 6;
                  break;
                }

                return _context12.abrupt("return");

              case 6:
                _context12.prev = 6;
                this.showLoader = true;
                _context12.next = 10;
                return this.clientTransactionsService.editClientTransaction({
                  transCode: this.applicationTransactionSection.formGroup.value.transactionCode,
                  transAmount: this.applicationTransactionSection.formGroup.value.transactionAmount,
                  transActionDate: this.applicationTransactionSection.formGroup.value.transactionMaturityDate,
                  transVouch: this.applicationTransactionSection.formGroup.value.transactionVoucher,
                  transactionType: this.applicationTransactionSection.formGroup.value.transactionType,
                  bankKey: this.applicationTransactionSection.formGroup.value.transactionBank,
                  uuc: this.applicationTransactionSection.formGroup.value.uuc
                });

              case 10:
                this.alertService.showAlertConfirm("لقد تم الحفظ بنجاح", true);
                _context12.next = 17;
                break;

              case 13:
                _context12.prev = 13;
                _context12.t0 = _context12["catch"](6);
                this.alertService.showAlertError(_context12.t0.error, false);
                throw _context12.t0;

              case 17:
                _context12.prev = 17;
                this.showLoader = false;
                return _context12.finish(17);

              case 20:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[6, 13, 17, 20]]);
      }));
    }
  }]);

  return ApplicationFinancialTransactionPage;
}();

ApplicationFinancialTransactionPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_8__.ReferencesService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: src_app_core_services_client_transactions_service__WEBPACK_IMPORTED_MODULE_7__.ClientTransactionsService
  }, {
    type: src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_10__.LoanApplicationsService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_11__.pagingService
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_12__.sortingService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_13__.InputMaskingService
  }];
};

ApplicationFinancialTransactionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
  selector: "app-application-financial-transaction",
  template: _application_financial_transaction_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_application_financial_transaction_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], ApplicationFinancialTransactionPage);


/***/ }),

/***/ 56291:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/Financial-Transactions/application-financial-transaction/application-financial-transaction.page.scss?ngResource ***!
  \*********************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBsaWNhdGlvbi1maW5hbmNpYWwtdHJhbnNhY3Rpb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 58204:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/Financial-Transactions/application-financial-transaction/application-financial-transaction.page.html?ngResource ***!
  \*********************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n\n<ion-segment *ngIf=\"segmentSection.visible\" [value]=\"segmentSection.selectedSegment.windowCode\"\n  (ionChange)=\"transactionSegmentChanging($event)\">\n  <ion-segment-button *ngFor=\"let segment of allSegmentsThatHavePermission\" [value]=\"segment.windowCode\"\n    [disabled]=\"segmentSection.disable\">\n    <ion-label class=\"form-label\">{{ segment.name }}</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<app-client-search *ngIf=\"clientSearchCardSection.visible\" [sourcePage]=\"157\"\n  [pageAction]=\"segmentSection.visible && segmentSection.selectedSegment.pageAction\"\n  (selectedClient)=\"clientSelected($event)\" initialSearchType=\"1\">\n</app-client-search>\n\n<ion-card *ngIf=\"clientLoanApplicationSection.visible\">\n  <ion-card-content>\n    <div class=\"table-responsive\">\n      <ion-grid style=\"min-width: 1000px\" [fixed]=\"true\">\n        <ion-row class=\"header-row text-center\">\n          <ion-col></ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\"\n              (click)=\"sortingTable(clientLoanApplicationSection.clientApplication , 'client_code')\">كود\n              العميل</ion-label>\n            <ion-icon class=\"ion-icon-class\" [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'client_code'\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\"\n              (click)=\"sortingTable(clientLoanApplicationSection.clientApplication , 'client_name')\">اسم\n              العميل</ion-label>\n            <ion-icon class=\"ion-icon-class\" [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'client_name'\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\"\n              (click)=\"sortingTable(clientLoanApplicationSection.clientApplication , 'application_code')\">رقم طلب\n              القرض</ion-label>\n            <ion-icon class=\"ion-icon-class\" [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'application_code'\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\"\n              (click)=\"sortingTable(clientLoanApplicationSection.clientApplication , 'entry_date')\">تاريخ\n              الإدخال</ion-label>\n            <ion-icon class=\"ion-icon-class\" [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'entry_date'\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\"\n              (click)=\"sortingTable(clientLoanApplicationSection.clientApplication , 'aprv_am')\">قيمة القرض</ion-label>\n            <ion-icon class=\"ion-icon-class\" [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'aprv_am'\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\"\n              (click)=\"sortingTable(clientLoanApplicationSection.clientApplication , 'application_status')\">حالة طلب\n              القرض</ion-label>\n            <ion-icon class=\"ion-icon-class\" [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'application_status'\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\"\n              (click)=\"sortingTable(clientLoanApplicationSection.clientApplication , 'dec_effective_date')\">تاريخ\n              القرض</ion-label>\n            <ion-icon class=\"ion-icon-class\" [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'dec_effective_date'\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\"\n              (click)=\"sortingTable(clientLoanApplicationSection.clientApplication , 'loan_usage_name')\">إستخدام\n              القرض</ion-label>\n            <ion-icon class=\"ion-icon-class\" [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'loan_usage_name'\"></ion-icon>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\"\n              (click)=\"sortingTable(clientLoanApplicationSection.clientApplication , 'loan_gen_status')\">تم إنشاء\n              القرض</ion-label>\n            <ion-icon class=\"ion-icon-class\" [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'loan_gen_status'\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"details-row text-left\" *ngFor=\"let application of this.pagingService.Paging(\n        clientLoanApplicationSection.clientApplication,\n        pagingObject.page\n        )\">\n          <ion-col>\n            <ion-button (click)=\"applicationSelected(application)\">\n              <ion-icon name=\"add-circle-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\">{{application.client_code}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\">{{application.client_name}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\">{{application.application_code}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\">{{application.entry_date | date:\"yyyy-MM-dd\"}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\">{{application.aprv_am | number:'1.0-2':'en-US'}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\">{{application.application_status}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\">{{application.dec_effective_date| date:\"yyyy-MM-dd\"}}</ion-label>\n            <ion-label *ngIf=\"!application.dec_effective_date\" class=\"form-label\">لا يوجد</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"form-label\">{{application.loan_usage_name}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <!-- <ion-label class=\"form-label\">{{application.loan_gen_status}}</ion-label> -->\n            <ion-checkbox [disabled]=\"true\" [(ngModel)]=\"application.loan_gen_status\"\n              [checked]=\"application.loan_gen_status == 1\"></ion-checkbox>\n          </ion-col>\n        </ion-row>\n        <app-pagination [page]=\"pagingObject.page\"\n          [collectionSize]=\"clientLoanApplicationSection.clientApplication.length\"\n          (pageChange)=\"changePaginationPage($event);\"></app-pagination>\n        <ion-row class=\"justify-content-center ion-padding\">\n          <ion-button color=\"danger\" (click)=\"backButton()\">رجوع</ion-button>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <ion-row class=\"justify-content-center\">\n      <!-- <ion-button color=\"danger\" (click)=\"backBtn()\">رجوع</ion-button> -->\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"loanApplicationTransactionGrid.visible\">\n  <ion-card-content>\n    <ion-grid [fixed]=\"true\">\n      <ion-row class=\"header-row text-center\">\n        <ion-col>\n          <ion-label class=\"form-label\">اسم العميل</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\">رقم طلب القرض</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\">كود الحركة</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\">قيمة الحركة</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\">تاريخ الحركة</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\">نوع الحركة</ion-label>\n        </ion-col>\n        <ion-col *ngIf=\"segmentSection.selectedSegment.windowCode ==='5637'\"></ion-col>\n        <ion-col *ngIf=\"segmentSection.selectedSegment.windowCode ==='5638'\"></ion-col>\n      </ion-row>\n      <ion-row class=\"details-row text-left\" *ngFor=\"let transaction of loanApplicationTransactionGrid.transactions\">\n        <ion-col>\n          <ion-label class=\"form-label\">{{transaction.client_name}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\">{{transaction.application_code}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\">{{transaction.trans_code}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\">{{transaction.trans_amount | number:'1.0-2':'en-US'}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\">{{transaction.trans_act_date | date:\"yyyy-MM-dd\"}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\">{{transaction.trans_act_desc}}</ion-label>\n        </ion-col>\n        <ion-col *ngIf=\"segmentSection.selectedSegment.windowCode ==='5637'\">\n          <ion-button (click)=\"openEditForm(transaction)\">\n            <ion-icon name=\"create-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col *ngIf=\"segmentSection.selectedSegment.windowCode ==='5638'\">\n          <ion-button (click)=\"deleteClientTransaction(transaction)\" color=\"danger\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-row class=\"justify-content-center\">\n      <ion-button color=\"danger\" (click)=\"backButton()\">رجوع</ion-button>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n\n<!-- transaction form -->\n<ion-card *ngIf=\"applicationTransactionSection.visible\">\n  <ion-card-content>\n    <ion-grid>\n      <form [formGroup]=\"applicationTransactionSection.formGroup\">\n        <ion-row>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label\">اسم العميل</ion-label>\n            <ion-input class=\"form-control\" formControlName=\"clientName\" [readonly]=\"true\"></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label\">كود العميل</ion-label>\n            <ion-input class=\"form-control\" formControlName=\"clientCode\" [readonly]=\"true\"></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label\">رقم طلب القرض</ion-label>\n            <ion-input class=\"form-control\" formControlName=\"applicationCode\" [readonly]=\"true\"></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label\">تاريخ القرض</ion-label>\n            <ion-input class=\"form-control\" formControlName=\"decEffectiveDate\" [readonly]=\"true\"></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label\">قيمة القرض</ion-label>\n            <ion-input class=\"form-control\" formControlName=\"aprvAm\" [readonly]=\"true\"></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label\">إستخدام القرض</ion-label>\n            <ion-input class=\"form-control\" formControlName=\"loanUsageName\" [readonly]=\"true\"></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label form-label-required\">نوع الحركة</ion-label>\n            <ion-select interface=\"popover\" class=\"subselect\" placeholder=\"نوع الحركة\"\n              formControlName=\"transactionType\">\n              <ion-select-option *ngFor=\"let transaction of databaseResponses.transactionTypes\"\n                [value]=\"transaction.type_key\">\n                {{ transaction.trans_act_desc }}\n              </ion-select-option>\n            </ion-select>\n            <html-validations [validationInput]=\"{\n              showError: applicationTransactionSection.checkIfInputsValid,\n              formGroup: applicationTransactionSection.formGroup,\n              formControlName: 'transactionType'}\"></html-validations>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label form-label-required\">قيمة الحركة</ion-label>\n            <ion-input class=\"form-control\" formControlName=\"transactionAmount\"\n              (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 2)\"></ion-input>\n            <html-validations [validationInput]=\"{\n              showError: applicationTransactionSection.checkIfInputsValid,\n              formGroup: applicationTransactionSection.formGroup,\n              formControlName: 'transactionAmount'}\"></html-validations>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label form-label-required\">تاريخ الحركه</ion-label>\n            <ngx-datepicker [parentForm]=\"applicationTransactionSection.formGroup\"\n              parentFormControllerName=\"transactionMaturityDate\"></ngx-datepicker>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label\">رقم مستند الحركه</ion-label>\n            <ion-input class=\"form-control\" formControlName=\"transactionVoucher\"></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label form-label-required\">بنك/خزينة</ion-label>\n            <ion-select interface=\"popover\" placeholder=\"بنك/خزينة\" class=\"subselect\" formControlName=\"bankType\"\n              (ionChange)=\"getBanks()\">\n              <ion-select-option *ngFor=\"let bank of databaseResponses.bankType\" [value]=\"bank.ref_code\">\n                {{ bank.ref_desc }}\n              </ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\" class=\"align-self-end mb-1\">\n            <ion-select interface=\"popover\" class=\"subselect\" formControlName=\"transactionBank\">\n              <ion-select-option *ngFor=\"let bank of databaseResponses.banks\" [value]=\"bank.bank_key\">\n                {{ bank.bank_name }}\n              </ion-select-option>\n            </ion-select>\n            <html-validations [validationInput]=\"{\n              showError: applicationTransactionSection.checkIfInputsValid,\n              formGroup: applicationTransactionSection.formGroup,\n              formControlName: 'transactionBank'}\"></html-validations>\n          </ion-col>\n        </ion-row>\n      </form>\n      <ion-row class=\"justify-content-center\">\n        <ion-button *ngIf=\"segmentSection.selectedSegment.windowCode ==='5636'\"\n          (click)=\"insertClientTransaction()\">حفظ</ion-button>\n        <ion-button *ngIf=\"segmentSection.selectedSegment.windowCode ==='5637'\"\n          (click)=\"editClientTransaction()\">تعديل</ion-button>\n        <ion-button color=\"danger\" (click)=\"backButton()\">رجوع</ion-button>\n      </ion-row>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_Financial-Transactions_application-financial-transaction_application-fina-391037.js.map