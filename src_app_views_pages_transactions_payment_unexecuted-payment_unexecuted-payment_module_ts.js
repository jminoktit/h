"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_transactions_payment_unexecuted-payment_unexecuted-payment_module_ts"],{

/***/ 73395:
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/pages/transactions/payment/unexecuted-payment/unexecuted-payment-routing.module.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnexecutedPaymentPageRoutingModule": function() { return /* binding */ UnexecutedPaymentPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _unexecuted_payment_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unexecuted-payment.page */ 15116);






var routes = [{
  path: '',
  component: _unexecuted_payment_page__WEBPACK_IMPORTED_MODULE_2__.UnexecutedPaymentPage
}];

var UnexecutedPaymentPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UnexecutedPaymentPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UnexecutedPaymentPageRoutingModule);
});

UnexecutedPaymentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], UnexecutedPaymentPageRoutingModule);


/***/ }),

/***/ 82309:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/transactions/payment/unexecuted-payment/unexecuted-payment.module.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnexecutedPaymentPageModule": function() { return /* binding */ UnexecutedPaymentPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _unexecuted_payment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unexecuted-payment-routing.module */ 73395);
/* harmony import */ var _unexecuted_payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unexecuted-payment.page */ 15116);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var UnexecutedPaymentPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UnexecutedPaymentPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UnexecutedPaymentPageModule);
});

UnexecutedPaymentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _unexecuted_payment_routing_module__WEBPACK_IMPORTED_MODULE_2__.UnexecutedPaymentPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_unexecuted_payment_page__WEBPACK_IMPORTED_MODULE_3__.UnexecutedPaymentPage]
})], UnexecutedPaymentPageModule);


/***/ }),

/***/ 15116:
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/transactions/payment/unexecuted-payment/unexecuted-payment.page.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnexecutedPaymentPage": function() { return /* binding */ UnexecutedPaymentPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _unexecuted_payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unexecuted-payment.page.html?ngResource */ 78116);
/* harmony import */ var _unexecuted_payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unexecuted-payment.page.scss?ngResource */ 35317);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);
/* harmony import */ var src_app_core_services_installments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/installments.service */ 13243);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_services_transaction_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/transaction.service */ 42836);
/* harmony import */ var src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/validators/custom-validators */ 92609);



















var UnexecutedPaymentPage = /*#__PURE__*/function () {
  function UnexecutedPaymentPage(transactionService, alertService, pagingService, formBuilder, loanService, referencesService, installmentsService, authService, inputMaskingService) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UnexecutedPaymentPage);

    this.transactionService = transactionService;
    this.alertService = alertService;
    this.pagingService = pagingService;
    this.formBuilder = formBuilder;
    this.loanService = loanService;
    this.referencesService = referencesService;
    this.installmentsService = installmentsService;
    this.authService = authService;
    this.inputMaskingService = inputMaskingService; //#region Variables

    this.showLoader = false;

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
  } //#endregion


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UnexecutedPaymentPage, [{
    key: "readonlyInformation",
    get: function get() {
      return this.clientCardSection.readonlyInformation;
    }
  }, {
    key: "loanInformation",
    get: function get() {
      return this.databaseResponses.loanInformation;
    }
  }, {
    key: "allSegmentsThatHavePermission",
    get: function get() {
      return this.segmentSection.allAvailableSegments.filter(function (x) {
        return x.hasPermission;
      });
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.showLoader = true;
                this.initializeState();
                _context2.next = 5;
                return this.referencesService.getBankType();

              case 5:
                this.databaseResponses.bankType = _context2.sent;
                _context2.next = 8;
                return this.referencesService.getPaidBy();

              case 8:
                this.databaseResponses.paidBy = _context2.sent;
                _context2.next = 11;
                return this.authService.getAccessRights();

              case 11:
                this.databaseResponses.accessRight = _context2.sent;
                this.segmentSection = {
                  visible: true,
                  allAvailableSegments: [{
                    name: "ادخال حركة",
                    sourcePage: 36,
                    windowCode: "5622",
                    hasPermission: this.databaseResponses.accessRight.some(function (x) {
                      return x.window_code === "5622";
                    })
                  }, {
                    name: "تعديل حركة",
                    sourcePage: 37,
                    windowCode: "5631",
                    hasPermission: this.databaseResponses.accessRight.some(function (x) {
                      return x.window_code === "5631";
                    })
                  }, {
                    name: "حذف حركة",
                    sourcePage: 35,
                    windowCode: "5632",
                    hasPermission: this.databaseResponses.accessRight.some(function (x) {
                      return x.window_code === "5632";
                    })
                  }],
                  selectedSegment: null,
                  disable: false
                };
                this.segmentSection.selectedSegment = this.segmentSection.allAvailableSegments.find(function (x) {
                  return x.hasPermission;
                });
                _context2.next = 19;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2["catch"](0);
                this.handleError(_context2.t0);

              case 19:
                _context2.prev = 19;
                this.showLoader = false;
                return _context2.finish(19);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 16, 19, 22]]);
      }));
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
                  allAvailableSegments: [],
                  selectedSegment: null,
                  disable: true
                };
                this.clientSearchCardSection = {
                  visible: true,
                  clientInformation: null
                };
                this.clientCardSection = {
                  visible: false,
                  disableTransactionBankDropDown: true,
                  checkIfInputsValid: false,
                  selectedBankType: null,
                  readonlyInformation: null,
                  formGroup: this.formBuilder.group({
                    transactionAmount: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_13__.transactionAmountValidator({
                      required: true,
                      valueGreaterThanZero: true
                    })]],
                    transactionMaturityDate: [null, src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_13__.dateTypeStringValidator({
                      required: true
                    })],
                    bankType: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_13__.bankTypeValidator({
                      required: true
                    })]],
                    transactionBank: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_13__.bankNameValidator({
                      required: true
                    })]],
                    transactionInstallmentVoucher: [null],
                    paidBy: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_13__.paidByValidator({
                      required: true
                    })]]
                  })
                };
                this.pagingObject = {
                  page: 1
                };
                this.gridCardSection = {
                  insert: {
                    visible: false,
                    gridInformation: []
                  },
                  edit: {
                    visible: false,
                    gridInformation: []
                  },
                  delete: {
                    visible: false,
                    gridInformation: []
                  }
                };
                this.databaseResponses = {
                  banks: [],
                  bankType: [],
                  paidBy: [],
                  loanInformation: null,
                  installmentInformation: null,
                  accessRight: [],
                  transactionInformation: null,
                  insuranceInformation: null,
                  getInsuranceContractByContractId: null
                };

              case 6:
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
                this.clientSearchCardSection.clientInformation = searchResult;
                this.changePaginationPage(1);
                _context4.t0 = this.segmentSection.selectedSegment.windowCode;
                _context4.next = _context4.t0 === "5622" ? 7 : _context4.t0 === "5631" ? 10 : _context4.t0 === "5632" ? 13 : 16;
                break;

              case 7:
                _context4.next = 9;
                return this.insertSegment(searchResult);

              case 9:
                return _context4.abrupt("break", 16);

              case 10:
                _context4.next = 12;
                return this.editSegment(searchResult);

              case 12:
                return _context4.abrupt("break", 16);

              case 13:
                _context4.next = 15;
                return this.deleteSegment(searchResult);

              case 15:
                return _context4.abrupt("break", 16);

              case 16:
                _context4.next = 21;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t1 = _context4["catch"](0);
                this.handleError(_context4.t1);

              case 21:
                _context4.prev = 21;
                this.showLoader = false;
                return _context4.finish(21);

              case 24:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 18, 21, 24]]);
      }));
    }
  }, {
    key: "insertSegment",
    value: function insertSegment(searchResult) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.transactionService.getClientInformationForUnexecutedPayment(searchResult.client_key).toPromise();

              case 2:
                this.gridCardSection.insert.gridInformation = _context5.sent;

                if (!(this.gridCardSection.insert.gridInformation.length === 0)) {
                  _context5.next = 6;
                  break;
                }

                this.alertService.showAlertError("لا يوجد معلومات", false);
                return _context5.abrupt("return");

              case 6:
                this.clientSearchCardSection.visible = false;
                this.gridCardSection.insert.visible = true;
                this.segmentSection.disable = true;

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "editSegment",
    value: function editSegment(searchResult) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.transactionService.getInstallmentsPaymentTransactions(searchResult.client_key).toPromise();

              case 2:
                this.gridCardSection.edit.gridInformation = _context6.sent;

                if (!(this.gridCardSection.edit.gridInformation.length === 0)) {
                  _context6.next = 6;
                  break;
                }

                this.alertService.showAlertError("لا يوجد معلومات", false);
                return _context6.abrupt("return");

              case 6:
                this.clientSearchCardSection.visible = false;
                this.gridCardSection.edit.visible = true;
                this.segmentSection.disable = true;

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "deleteSegment",
    value: function deleteSegment(searchResult) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.transactionService.getInstallmentsPaymentTransactions(searchResult.client_key).toPromise();

              case 2:
                this.gridCardSection.delete.gridInformation = _context7.sent;

                if (!(this.gridCardSection.delete.gridInformation.length === 0)) {
                  _context7.next = 6;
                  break;
                }

                this.alertService.showAlertError("لا يوجد معلومات", false);
                return _context7.abrupt("return");

              case 6:
                this.clientSearchCardSection.visible = false;
                this.gridCardSection.delete.visible = true;
                this.segmentSection.disable = true;

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "initiatePaymentForInstallment",
    value: function initiatePaymentForInstallment(installmentKey) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
        var installment;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                this.showLoader = true;
                installment = this.gridCardSection.insert.gridInformation.find(function (inst) {
                  return inst.installment_key === installmentKey;
                });
                this.clientCardSection.readonlyInformation = this.extractReadonlyInformation(installment);
                _context8.next = 6;
                return this.checkIfThereInsurance(installment);

              case 6:
                _context8.next = 8;
                return this.loanService.getLoanInformationByLoanKey(this.readonlyInformation.loanKey).toPromise();

              case 8:
                this.databaseResponses.loanInformation = _context8.sent;
                _context8.next = 11;
                return this.installmentsService.getInstallmentInformationByInstallmentKey(installmentKey).toPromise();

              case 11:
                this.databaseResponses.installmentInformation = _context8.sent;
                this.clientCardSection.formGroup.patchValue({
                  transactionMaturityDate: new Date().toString(),
                  transactionAmount: this.readonlyInformation.installmentAmount - this.readonlyInformation.installmentPaidTotal
                });
                this.gridCardSection.insert.visible = false;
                this.clientCardSection.visible = true;
                _context8.next = 20;
                break;

              case 17:
                _context8.prev = 17;
                _context8.t0 = _context8["catch"](0);
                this.handleError(_context8.t0);

              case 20:
                _context8.prev = 20;
                this.showLoader = false;
                return _context8.finish(20);

              case 23:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 17, 20, 23]]);
      }));
    }
  }, {
    key: "bankTypeOnDismiss",
    value: function bankTypeOnDismiss() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
        var bankType, installmentStatus, notHaveExternalSafe;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                bankType = this.clientCardSection.formGroup.value.bankType; // while its ionDismiss so if i open the dropdown and do nothing it while fire so i check if something happens
                // if (!bankType || bankType === this.clientCardSection.selectedBankType)
                //   return;

                this.clientCardSection.selectedBankType = bankType;
                this.showLoader = true;
                this.clientCardSection.formGroup.patchValue({
                  transactionBank: null
                });
                installmentStatus = this.databaseResponses.installmentInformation.installmentStatus;
                notHaveExternalSafe = [1, 4, 6].includes(installmentStatus);

                if (bankType === "1" && notHaveExternalSafe) {
                  this.alertService.showAlertError("لا يمكن اختيار بنك لان حالة القسط ليست فى بنك خارجي", false);
                  this.clientCardSection.selectedBankType = "2";
                  this.clientCardSection.formGroup.patchValue({
                    bankType: this.clientCardSection.selectedBankType
                  });
                }

                _context9.next = 10;
                return this.referencesService.getBanksByBankType(Number(this.clientCardSection.selectedBankType));

              case 10:
                this.databaseResponses.banks = _context9.sent;
                this.clientCardSection.disableTransactionBankDropDown = false;
                _context9.next = 17;
                break;

              case 14:
                _context9.prev = 14;
                _context9.t0 = _context9["catch"](0);
                this.handleError(_context9.t0);

              case 17:
                _context9.prev = 17;
                this.showLoader = false;
                return _context9.finish(17);

              case 20:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 14, 17, 20]]);
      }));
    }
  }, {
    key: "backButton",
    value: function backButton() {
      // ClientCardSection ==> GridSection
      if (this.clientCardSection.visible) {
        this.clientCardSection.visible = false;
        this.clientCardSection.checkIfInputsValid = false;
        if (this.gridCardSection.insert.gridInformation.length) this.gridCardSection.insert.visible = true;
        if (this.gridCardSection.edit.gridInformation.length) this.gridCardSection.edit.visible = true;
        if (this.gridCardSection.delete.gridInformation.length) this.gridCardSection.delete.visible = true;
        this.clientCardSection.disableTransactionBankDropDown = true;
        this.clientCardSection.formGroup.reset();
        this.databaseResponses.transactionInformation = null;
        return;
      } // GridSection ==> ClientSearchSection


      if (this.gridCardSection.insert.visible) {
        this.gridCardSection.insert.visible = false;
        this.gridCardSection.insert.gridInformation = [];
        this.clientCardSection.disableTransactionBankDropDown = true;
        this.clientCardSection.readonlyInformation = null;
        this.databaseResponses.loanInformation = null;
        this.clientSearchCardSection = {
          visible: true,
          clientInformation: null
        };
        this.segmentSection.disable = false;
        return;
      } else if (this.gridCardSection.edit.visible) {
        this.gridCardSection.edit.visible = false;
        this.gridCardSection.edit.gridInformation = [];
        this.clientCardSection.disableTransactionBankDropDown = true;
        this.clientCardSection.readonlyInformation = null;
        this.databaseResponses.loanInformation = null;
        this.clientSearchCardSection = {
          visible: true,
          clientInformation: null
        };
        this.segmentSection.disable = false;
        return;
      } else if (this.gridCardSection.delete.visible) {
        this.gridCardSection.delete.visible = false;
        this.gridCardSection.delete.gridInformation = [];
        this.clientCardSection.disableTransactionBankDropDown = true;
        this.clientCardSection.readonlyInformation = null;
        this.databaseResponses.loanInformation = null;
        this.clientSearchCardSection = {
          visible: true,
          clientInformation: null
        };
        this.segmentSection.disable = false;
        return;
      }
    }
  }, {
    key: "insertTransactionButton",
    value: function insertTransactionButton() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10() {
        var value, request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.clientCardSection.checkIfInputsValid = true;

                if (this.clientCardSection.formGroup.valid) {
                  _context10.next = 3;
                  break;
                }

                return _context10.abrupt("return");

              case 3:
                _context10.next = 5;
                return this.alertService.SaveAlert();

              case 5:
                if (_context10.sent) {
                  _context10.next = 7;
                  break;
                }

                return _context10.abrupt("return");

              case 7:
                _context10.prev = 7;
                this.showLoader = true;
                value = this.clientCardSection.formGroup.value;
                request = {
                  installmentKey: this.readonlyInformation.installmentKey,
                  paidBy: value.paidBy,
                  transactionActualDate: value.transactionMaturityDate,
                  transactionAmount: value.transactionAmount,
                  transactionCurrentBank: value.transactionBank,
                  transactionInstallmentInterest: this.readonlyInformation.transactionInterest,
                  transactionInstallmentVoucher: value.transactionInstallmentVoucher,
                  installmentUuc: this.databaseResponses.installmentInformation.uucString
                };
                _context10.next = 13;
                return this.transactionService.insertUnexecutedPaymentTransaction(request).toPromise();

              case 13:
                this.alertService.showAlertConfirm("تم الحفظ بنجاح", true);
                _context10.next = 19;
                break;

              case 16:
                _context10.prev = 16;
                _context10.t0 = _context10["catch"](7);
                this.handleError(_context10.t0);

              case 19:
                _context10.prev = 19;
                this.showLoader = false;
                return _context10.finish(19);

              case 22:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[7, 16, 19, 22]]);
      }));
    }
  }, {
    key: "getPenaltiesForSpecificLoan",
    value: function getPenaltiesForSpecificLoan() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee11() {
        var loanKey, penalties;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                this.showLoader = true;
                loanKey = this.readonlyInformation.loanKey;
                _context11.next = 5;
                return this.loanService.getPenaltiesReferenceByLoanKey(loanKey).toPromise();

              case 5:
                penalties = _context11.sent;
                this.alertService.showAlertInformation("\u0645\u0628\u0644\u063A \u0627\u0644\u063A\u0631\u0627\u0645\u0629</br> ".concat(penalties.pen_due), false);
                _context11.next = 12;
                break;

              case 9:
                _context11.prev = 9;
                _context11.t0 = _context11["catch"](0);
                this.handleError(_context11.t0);

              case 12:
                _context11.prev = 12;
                this.showLoader = false;
                return _context11.finish(12);

              case 15:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[0, 9, 12, 15]]);
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
      this.segmentSection.selectedSegment = this.segmentSection.allAvailableSegments.find(function (x) {
        return x.windowCode === windowCode;
      });
    }
  }, {
    key: "resetClientSearchComponent",
    value: function resetClientSearchComponent() {
      var _this2 = this;

      this.clientSearchCardSection.visible = false;
      setTimeout(function () {
        return _this2.clientSearchCardSection.visible = true;
      }, 0);
    }
  }, {
    key: "editingTransaction",
    value: function editingTransaction(transactionCode) {
      var _a, _b, _c, _d, _e, _f, _g, _h;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee12() {
        var _this3 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                this.showLoader = true;
                this.gridCardSection.edit.visible = false;
                _context12.next = 5;
                return this.transactionService.getPaymentTransactionByTransactionCode(transactionCode).toPromise();

              case 5:
                this.databaseResponses.transactionInformation = _context12.sent;
                this.clientCardSection.readonlyInformation = this.extractReadonlyInformation(this.databaseResponses.transactionInformation);
                this.clientCardSection.formGroup.patchValue({
                  transactionMaturityDate: this.databaseResponses.transactionInformation.transactionDate,
                  transactionAmount: this.databaseResponses.transactionInformation.transactionAmount,
                  bankType: (_b = (_a = this.databaseResponses.transactionInformation) === null || _a === void 0 ? void 0 : _a.bankType) === null || _b === void 0 ? void 0 : _b.toString(),
                  transactionInstallmentVoucher: (_d = (_c = this.databaseResponses.transactionInformation) === null || _c === void 0 ? void 0 : _c.transactionInstallmentVoucher) === null || _d === void 0 ? void 0 : _d.toString(),
                  paidBy: (_f = (_e = this.databaseResponses.transactionInformation) === null || _e === void 0 ? void 0 : _e.paidBy) === null || _f === void 0 ? void 0 : _f.toString()
                });
                this.clientCardSection.selectedBankType = (_h = (_g = this.databaseResponses.transactionInformation) === null || _g === void 0 ? void 0 : _g.bankType) === null || _h === void 0 ? void 0 : _h.toString();
                _context12.next = 11;
                return this.referencesService.getBanksByBankType(Number(this.clientCardSection.selectedBankType));

              case 11:
                this.databaseResponses.banks = _context12.sent;
                this.clientCardSection.formGroup.patchValue({
                  transactionBank: this.databaseResponses.banks.find(function (x) {
                    return x.bank_name === _this3.clientCardSection.readonlyInformation.issuingBank;
                  }).bank_code
                });
                _context12.next = 15;
                return this.loanService.getLoanInformationByLoanKey(this.readonlyInformation.loanKey).toPromise();

              case 15:
                this.databaseResponses.loanInformation = _context12.sent;
                _context12.next = 18;
                return this.installmentsService.getInstallmentInformationByInstallmentKey(this.readonlyInformation.installmentKey).toPromise();

              case 18:
                this.databaseResponses.installmentInformation = _context12.sent;
                this.clientCardSection.disableTransactionBankDropDown = false;
                this.clientCardSection.visible = true;
                _context12.next = 26;
                break;

              case 23:
                _context12.prev = 23;
                _context12.t0 = _context12["catch"](0);
                this.handleError(_context12.t0);

              case 26:
                _context12.prev = 26;
                this.showLoader = false;
                return _context12.finish(26);

              case 29:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 23, 26, 29]]);
      }));
    }
  }, {
    key: "extractReadonlyInformation",
    value: function extractReadonlyInformation(information) {
      var staticClientInformation;

      if (this.segmentSection.selectedSegment.windowCode === "5622") {
        var info = information;
        staticClientInformation = this.mapUnexecutedPaymentInfo(info);
      } else {
        var _info = information;
        staticClientInformation = this.mapTransactionInfo(_info);
      }

      return staticClientInformation;
    }
  }, {
    key: "mapUnexecutedPaymentInfo",
    value: function mapUnexecutedPaymentInfo(info) {
      return {
        issuingBank: info.bank_name,
        clientName: info.client_name,
        branchCode: info.org_branch_code,
        clientCode: info.client_code,
        installmentAmount: info.inst_am,
        installmentInterest: info.inst_int,
        installmentPaidInterest: info.inst_paid_int,
        installmentPaidTotal: info.inst_paid_total,
        installmentSerial: info.inst_serial,
        loanCode: info.loan_code,
        maturityDate: info.inst_mat_date,
        requestAmount: info.inst_am,
        requestInterest: info.inst_int,
        loanKey: info.loan_key,
        installmentKey: info.installment_key,
        transactionCode: null,
        transactionInterest: info.inst_int - info.inst_paid_int
      };
    }
  }, {
    key: "mapTransactionInfo",
    value: function mapTransactionInfo(info) {
      return {
        issuingBank: info.bankName,
        clientName: info.clientName,
        branchCode: info.orgBranchCode,
        clientCode: info.clientCode,
        installmentAmount: info.installmentAmount,
        installmentInterest: info.installmentInterest,
        installmentPaidInterest: info.installmentPaidInterest,
        installmentPaidTotal: info.installmentPaidAmount,
        installmentSerial: info.installmentSerial,
        loanCode: info.loanCode,
        maturityDate: info.installmentMaturityDate,
        requestAmount: info.requestAmount,
        requestInterest: info.requestInterest,
        loanKey: info.loanKey,
        installmentKey: info.installmentKey,
        transactionCode: info.transactionCode,
        transactionInterest: info.transactionInstallmentInterest
      };
    }
  }, {
    key: "deleteSpecificTransaction",
    value: function deleteSpecificTransaction(transactionCode) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee13() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.alertService.SaveAlert();

              case 2:
                if (_context13.sent) {
                  _context13.next = 4;
                  break;
                }

                return _context13.abrupt("return");

              case 4:
                _context13.prev = 4;
                this.showLoader = true;
                _context13.next = 8;
                return this.transactionService.getPaymentTransactionByTransactionCode(transactionCode).toPromise();

              case 8:
                this.databaseResponses.transactionInformation = _context13.sent;
                _context13.next = 11;
                return this.transactionService.deleteTransactionByTransactionCode({
                  transactionCode: transactionCode,
                  transactionUuc: this.databaseResponses.transactionInformation.transactionUuc
                }).toPromise();

              case 11:
                this.alertService.showAlertConfirm("تم الحفظ بنجاح", true);
                _context13.next = 17;
                break;

              case 14:
                _context13.prev = 14;
                _context13.t0 = _context13["catch"](4);
                this.handleError(_context13.t0);

              case 17:
                _context13.prev = 17;
                this.showLoader = false;
                return _context13.finish(17);

              case 20:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[4, 14, 17, 20]]);
      }));
    }
  }, {
    key: "updateTransactionButton",
    value: function updateTransactionButton() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee14() {
        var value, transactionInformation, request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                this.clientCardSection.checkIfInputsValid = true;

                if (this.clientCardSection.formGroup.valid) {
                  _context14.next = 3;
                  break;
                }

                return _context14.abrupt("return");

              case 3:
                _context14.next = 5;
                return this.alertService.SaveAlert();

              case 5:
                if (_context14.sent) {
                  _context14.next = 7;
                  break;
                }

                return _context14.abrupt("return");

              case 7:
                _context14.prev = 7;
                this.showLoader = true;
                value = this.clientCardSection.formGroup.value;
                transactionInformation = this.databaseResponses.transactionInformation;
                request = {
                  paid_by: value.paidBy,
                  trans_act_date: value.transactionMaturityDate,
                  trans_amount: value.transactionAmount,
                  trans_inst_int: this.readonlyInformation.transactionInterest,
                  trans_cur_bank: value.transactionBank,
                  trans_inst_vouch: value.transactionInstallmentVoucher === undefined ? null : value.transactionInstallmentVoucher,
                  trans_code: transactionInformation.transactionCode,
                  transaction_uuc: transactionInformation.transactionUuc
                };
                _context14.next = 14;
                return this.transactionService.updatePaymentTransaction(request).toPromise();

              case 14:
                this.alertService.showAlertConfirm("تم الحفظ بنجاح", true);
                _context14.next = 20;
                break;

              case 17:
                _context14.prev = 17;
                _context14.t0 = _context14["catch"](7);
                this.handleError(_context14.t0);

              case 20:
                _context14.prev = 20;
                this.showLoader = false;
                return _context14.finish(20);

              case 23:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[7, 17, 20, 23]]);
      }));
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var errorMessage;

      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpErrorResponse) {
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
    key: "checkIfThereInsurance",
    value: function checkIfThereInsurance(installment) {
      var _a, _b;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee15() {
        var input, requestAmount, insuranceRequestAmount;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                input = {
                  loan_key: installment.loan_key,
                  multiLoans: 0
                };
                _context15.next = 3;
                return this.loanService.getInsuranceByLoanKey(input).toPromise();

              case 3:
                this.databaseResponses.insuranceInformation = _context15.sent;
                requestAmount = this.readonlyInformation.installmentAmount - this.readonlyInformation.installmentPaidTotal;
                insuranceRequestAmount = ((_b = (_a = this.databaseResponses) === null || _a === void 0 ? void 0 : _a.insuranceInformation) === null || _b === void 0 ? void 0 : _b.insurance_req) || 0;

                if (insuranceRequestAmount < 0) {
                  this.clientCardSection.formGroup.patchValue({
                    transactionAmount: requestAmount < Math.abs(insuranceRequestAmount) ? 0 : requestAmount - Math.abs(insuranceRequestAmount)
                  });
                } else {
                  this.clientCardSection.formGroup.patchValue({
                    transactionAmount: requestAmount + insuranceRequestAmount
                  });
                }

              case 7:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
    }
  }, {
    key: "transactionAmountChanging",
    value: function transactionAmountChanging() {
      var _a, _b;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee16() {
        var _this4 = this;

        var newTransactionAmount, requestInterest, requestAmount, insuranceRequestAmount, dueFees, duePrinciple, transactionFees, transactionAmount, installment, _installment;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                newTransactionAmount = Number(this.clientCardSection.formGroup.value.transactionAmount);
                requestInterest = this.readonlyInformation.installmentInterest - this.readonlyInformation.installmentPaidInterest;
                requestAmount = this.readonlyInformation.installmentAmount - this.readonlyInformation.installmentPaidTotal;
                insuranceRequestAmount = ((_b = (_a = this.databaseResponses) === null || _a === void 0 ? void 0 : _a.insuranceInformation) === null || _b === void 0 ? void 0 : _b.insurance_req) || 0;
                dueFees = requestInterest;
                duePrinciple = requestAmount - dueFees;
                transactionFees = 0;
                _context16.next = 9;
                return this.calculateTransactionAmount(newTransactionAmount, insuranceRequestAmount);

              case 9:
                transactionAmount = _context16.sent;

                if (insuranceRequestAmount < 0 && transactionAmount < requestAmount) {
                  transactionAmount = insuranceRequestAmount + 1;
                }

                if (this.segmentSection.selectedSegment.windowCode === "5622") {
                  installment = this.gridCardSection.insert.gridInformation.find(function (inst) {
                    return inst.installment_key === _this4.readonlyInformation.installmentKey;
                  });

                  if (installment.fill_am_first === 1 || installment.fill_am_first === 3) {
                    if (transactionAmount >= duePrinciple) {
                      transactionFees = transactionAmount - duePrinciple;
                    }
                  } else {
                    transactionFees = transactionAmount < dueFees ? transactionAmount : dueFees;
                  }
                } else {
                  _installment = this.gridCardSection.edit.gridInformation.find(function (inst) {
                    return inst.installmentKey === Number(_this4.readonlyInformation.installmentKey);
                  });

                  if (_installment.fillAmountFirst === 1 || _installment.fillAmountFirst === 3) {
                    if (transactionAmount >= duePrinciple) {
                      transactionFees = transactionAmount - duePrinciple;
                    }
                  } else {
                    transactionFees = transactionAmount < dueFees ? transactionAmount : dueFees;
                  }
                }

                this.clientCardSection.readonlyInformation.transactionInterest = transactionFees;

              case 13:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
    }
  }, {
    key: "calculateTransactionAmount",
    value: function calculateTransactionAmount(transactionAmount, insuranceAmount) {
      var _a, _b, _c, _d;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee17() {
        var result, contractId, insuranceContract, requestAmount, insuranceRequestAmount;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                contractId = ((_b = (_a = this.databaseResponses) === null || _a === void 0 ? void 0 : _a.insuranceInformation) === null || _b === void 0 ? void 0 : _b.contract_id) || 0;
                _context17.next = 3;
                return this.referencesService.getInsuranceContractByContractId(contractId).toPromise();

              case 3:
                insuranceContract = _context17.sent;
                requestAmount = this.readonlyInformation.installmentAmount - this.readonlyInformation.installmentPaidTotal;
                insuranceRequestAmount = ((_d = (_c = this.databaseResponses) === null || _c === void 0 ? void 0 : _c.insuranceInformation) === null || _d === void 0 ? void 0 : _d.insurance_req) || 0;

                if (insuranceAmount >= 0) {
                  if ((insuranceContract === null || insuranceContract === void 0 ? void 0 : insuranceContract.effectInInsuranceFirst) == 1) {
                    result = transactionAmount <= insuranceRequestAmount ? 0 : transactionAmount - insuranceAmount;
                  } else {
                    result = transactionAmount > requestAmount ? requestAmount : transactionAmount;
                  }
                } else {
                  result = requestAmount < Math.abs(insuranceAmount) ? transactionAmount + requestAmount : transactionAmount - insuranceAmount;
                }

                return _context17.abrupt("return", result);

              case 8:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
    }
  }]);

  return UnexecutedPaymentPage;
}();

UnexecutedPaymentPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_transaction_service__WEBPACK_IMPORTED_MODULE_12__.TransactionService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_10__.pagingService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder
  }, {
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_9__.LoansService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_11__.ReferencesService
  }, {
    type: src_app_core_services_installments_service__WEBPACK_IMPORTED_MODULE_8__.InstallmentsService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_7__.InputMaskingService
  }];
};

UnexecutedPaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: "app-insert-unexecuted-payment-transaction",
  template: _unexecuted_payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_unexecuted_payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], UnexecutedPaymentPage);


/***/ }),

/***/ 35317:
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/transactions/payment/unexecuted-payment/unexecuted-payment.page.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuZXhlY3V0ZWQtcGF5bWVudC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcdHJhbnNhY3Rpb25zXFxwYXltZW50XFx1bmV4ZWN1dGVkLXBheW1lbnRcXHVuZXhlY3V0ZWQtcGF5bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNBSiIsImZpbGUiOiJ1bmV4ZWN1dGVkLXBheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 78116:
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/transactions/payment/unexecuted-payment/unexecuted-payment.page.html?ngResource ***!
  \*************************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n\n<ion-toolbar>\n  <ion-title>الحركات</ion-title>\n</ion-toolbar>\n\n<ion-segment\n  *ngIf=\"segmentSection.visible\"\n  [value]=\"segmentSection.selectedSegment.windowCode\"\n  (ionChange)=\"transactionSegmentChanging($event)\"\n>\n  <ion-segment-button\n    *ngFor=\"let segment of allSegmentsThatHavePermission\"\n    [value]=\"segment.windowCode\"\n    [disabled]=\"segmentSection.disable\"\n  >\n    <ion-label class=\"form-label\">{{ segment.name }}</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<app-client-search\n  *ngIf=\"clientSearchCardSection.visible\"\n  [sourcePage]=\"segmentSection.visible && segmentSection.selectedSegment.sourcePage\"\n  (selectedClient)=\"clientSelected($event)\"\n  initialSearchType=\"1\"\n>\n</app-client-search>\n\n<ion-card *ngIf=\"gridCardSection.insert.visible\">\n  <ion-card-content>\n    <div class=\"ion-padding table-responsive\">\n      <ion-grid fixed=\"true\" style=\"min-width: 1000px\">\n        <ion-row class=\"header-row\">\n          <ion-col>\n            <ion-label> كود العميل </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> رقم القرض </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> رقم القسط </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> تاريخ الاستحقاق </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> اسم البنك </ion-label>\n          </ion-col>\n          <ion-col> </ion-col>\n        </ion-row>\n        <ion-row\n          class=\"details-row\"\n          *ngFor=\"let client of this.pagingService.Paging(\n          gridCardSection.insert.gridInformation,\n          pagingObject.page\n          )\"\n        >\n          <ion-col>\n            <ion-label\n              >{{client.org_branch_code}}/{{client.client_code}}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-label>{{client.loan_code}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> {{client.inst_serial}}</ion-label>\n          </ion-col>\n          <ion-col\n            ><ion-label>\n              {{client.inst_mat_date | date:'yyyy-MM-dd'}}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-label> {{client.bank_name}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-button\n              (click)=\"initiatePaymentForInstallment(client.installment_key)\"\n            >\n              <ion-icon name=\"create-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <app-pagination\n      [page]=\"pagingObject.page\"\n      [collectionSize]=\"gridCardSection.insert.gridInformation.length\"\n      (pageChange)=\"changePaginationPage($event);\"\n    ></app-pagination>\n    <ion-row class=\"justify-content-center ion-padding\">\n      <ion-button color=\"danger\" (click)=\"backButton()\">رجوع</ion-button>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"gridCardSection.edit.visible\">\n  <ion-card-content>\n    <div class=\"ion-padding table-responsive\">\n      <ion-grid fixed=\"true\" style=\"min-width: 1000px\">\n        <ion-row class=\"header-row\">\n          <ion-col>\n            <ion-label> كود العميل </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> مسلسل الحركة </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> رقم القرض </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> رقم القسط </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> مبلغ الحركة </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> تاريخ الحركة </ion-label>\n          </ion-col>\n          <ion-col> </ion-col>\n        </ion-row>\n        <ion-row\n          class=\"details-row\"\n          *ngFor=\"let trans of this.pagingService.Paging(\n          gridCardSection.edit.gridInformation,\n          pagingObject.page\n          )\"\n        >\n          <ion-col>\n            <ion-label\n              >{{clientSearchCardSection.clientInformation.org_branch_code}}/{{clientSearchCardSection.clientInformation.client_code}}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-label>{{trans.transactionCode}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> {{trans.loanCode}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> {{trans.installmentSerial}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> {{trans.transactionAmount | number }}</ion-label>\n          </ion-col>\n          <ion-col\n            ><ion-label>\n              {{trans.transactionDate| date:'yyyy-MM-dd'}}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-button (click)=\"editingTransaction(trans.transactionCode)\">\n              <ion-icon name=\"create-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <app-pagination\n      [page]=\"pagingObject.page\"\n      [collectionSize]=\"gridCardSection.edit.gridInformation.length\"\n      (pageChange)=\"changePaginationPage($event);\"\n    ></app-pagination>\n    <ion-row class=\"justify-content-center ion-padding\">\n      <ion-button color=\"danger\" (click)=\"backButton()\">رجوع</ion-button>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"gridCardSection.delete.visible\">\n  <ion-card-content>\n    <div class=\"ion-padding table-responsive\">\n      <ion-grid fixed=\"true\" style=\"min-width: 1000px\">\n        <ion-row class=\"header-row\">\n          <ion-col>\n            <ion-label> كود العميل </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> مسلسل الحركة </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> رقم القرض </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> رقم القسط </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> مبلغ الحركة </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> تاريخ الحركة </ion-label>\n          </ion-col>\n          <ion-col> </ion-col>\n        </ion-row>\n        <ion-row\n          class=\"details-row\"\n          *ngFor=\"let trans of this.pagingService.Paging(\n          gridCardSection.delete.gridInformation,\n          pagingObject.page\n          )\"\n        >\n          <ion-col>\n            <ion-label\n              >{{clientSearchCardSection.clientInformation.org_branch_code}}/{{clientSearchCardSection.clientInformation.client_code}}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-label>{{trans.transactionCode}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> {{trans.loanCode}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> {{trans.installmentSerial}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>\n              {{trans.transactionAmount | number : \"1.0-0\" :\n              \"en-US\"}}</ion-label\n            >\n          </ion-col>\n          <ion-col\n            ><ion-label>\n              {{trans.transactionDate| date:'yyyy-MM-dd'}}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-button\n              color=\"danger\"\n              (click)=\"deleteSpecificTransaction(trans.transactionCode)\"\n            >\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <app-pagination\n      [page]=\"pagingObject.page\"\n      [collectionSize]=\"gridCardSection.delete.gridInformation.length\"\n      (pageChange)=\"changePaginationPage($event);\"\n    ></app-pagination>\n    <ion-row class=\"justify-content-center ion-padding\">\n      <ion-button color=\"danger\" (click)=\"backButton()\">رجوع</ion-button>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"clientCardSection.visible\">\n  <ion-card-content>\n    <form [formGroup]=\"clientCardSection.formGroup\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label\"> اسم العميل </ion-label>\n            <ion-label class=\"form-control\">\n              {{readonlyInformation.clientName}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> كود العميل </ion-label>\n            <ion-label class=\"form-control\">\n              {{readonlyInformation.branchCode}}/{{readonlyInformation.clientCode}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> رقم القرض </ion-label>\n            <ion-label class=\"form-control\">\n              {{readonlyInformation.loanCode}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> رقم القسط </ion-label>\n            <ion-label class=\"form-control\">\n              {{readonlyInformation.installmentSerial}}\n            </ion-label>\n          </ion-col>\n          <ion-col\n            *ngIf=\"readonlyInformation.transactionCode\"\n            size=\"6\"\n            size-lg=\"2\"\n            size-md=\"3\"\n            size-sm=\"6\"\n          >\n            <ion-label class=\"form-label\"> كود الحركة </ion-label>\n            <ion-label class=\"form-control\">\n              {{readonlyInformation.transactionCode}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> تاريخ الاستحقاق </ion-label>\n            <ion-label class=\"form-control\">\n              {{readonlyInformation.maturityDate | date:'yyyy-MM-dd'}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> قيمة القسط </ion-label>\n            <ion-label class=\"form-control\">\n              {{readonlyInformation.installmentAmount}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> القيمة المسددة </ion-label>\n            <ion-label class=\"form-control\">\n              {{readonlyInformation.installmentPaidTotal}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> القيمة المستحقة </ion-label>\n            <ion-label class=\"form-control\">\n              {{readonlyInformation.installmentAmount -\n              readonlyInformation.installmentPaidTotal }}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> قيمة المصاريف </ion-label>\n            <ion-label class=\"form-control\">\n              {{readonlyInformation.installmentInterest}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> مصاريف الحركة </ion-label>\n            <ion-label class=\"form-control\">\n              {{readonlyInformation.transactionInterest}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> المصاريف المسددة </ion-label>\n            <ion-label class=\"form-control\">\n              {{readonlyInformation.installmentPaidInterest}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> المصاريف المستحقة </ion-label>\n            <ion-label class=\"form-control\">\n              {{readonlyInformation.installmentInterest -\n              readonlyInformation.installmentPaidInterest }}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label\"> مصدر التمويل </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanInformation.funderName}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label\"> بنك الإصدار </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanInformation.bankName}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-item class=\"ion-padding-bottom\"></ion-item>\n        <ion-row>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\">\n              قيمة الحركة\n            </ion-label>\n            <ion-input\n              class=\"form-control\"\n              type=\"text\"\n              formControlName=\"transactionAmount\"\n              (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0,(readonlyInformation.installmentAmount -\n              readonlyInformation.installmentPaidTotal),2)\"\n              (ionChange)=\"transactionAmountChanging()\"\n            ></ion-input>\n            <html-validations\n              [validationInput]=\"{\n              showError:clientCardSection.checkIfInputsValid,\n              formGroup: clientCardSection.formGroup,\n              formControlName: 'transactionAmount'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\">\n              تاريخ الحركة\n            </ion-label>\n            <ngx-datepicker\n              [parentForm]=\"clientCardSection.formGroup\"\n              [parentFormControllerName]=\"'transactionMaturityDate'\"\n            ></ngx-datepicker>\n            <html-validations\n              [validationInput]=\"{\n              showError:clientCardSection.checkIfInputsValid,\n              formGroup: clientCardSection.formGroup,\n              formControlName: 'transactionMaturityDate'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\">\n              نوع البنك\n            </ion-label>\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"نوع البنك\"\n              formControlName=\"bankType\"\n              class=\"subselect\"\n              (ionDismiss)=\"bankTypeOnDismiss()\"\n            >\n              <ion-select-option\n                *ngFor=\"let bank of databaseResponses.bankType\"\n                [value]=\"bank.ref_code\"\n              >\n                {{bank.ref_desc}}\n              </ion-select-option>\n            </ion-select>\n            <html-validations\n              [validationInput]=\"{\n              showError:clientCardSection.checkIfInputsValid,\n              formGroup: clientCardSection.formGroup,\n              formControlName: 'bankType'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\">\n              اسم البنك\n            </ion-label>\n            <ion-select\n              [disabled]=\"clientCardSection.disableTransactionBankDropDown\"\n              interface=\"popover\"\n              placeholder=\"اسم البنك\"\n              formControlName=\"transactionBank\"\n              class=\"subselect\"\n            >\n              <ion-select-option\n                *ngFor=\"let bank of databaseResponses.banks\"\n                [value]=\"bank.bank_code\"\n              >\n                {{bank.bank_name}}\n              </ion-select-option>\n            </ion-select>\n            <html-validations\n              [validationInput]=\"{\n              showError:clientCardSection.checkIfInputsValid,\n              formGroup: clientCardSection.formGroup,\n              formControlName: 'transactionBank'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> رقم الإيصال </ion-label>\n            <ion-input\n              class=\"form-control\"\n              type=\"text\"\n              formControlName=\"transactionInstallmentVoucher\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\">\n              القائم بالسداد\n            </ion-label>\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"القائم بالسداد\"\n              formControlName=\"paidBy\"\n              class=\"subselect\"\n            >\n              <ion-select-option\n                *ngFor=\"let type of databaseResponses.paidBy\"\n                [value]=\"type.ref_code\"\n              >\n                {{type.ref_desc}}\n              </ion-select-option>\n            </ion-select>\n            <html-validations\n              [validationInput]=\"{\n              showError:clientCardSection.checkIfInputsValid,\n              formGroup: clientCardSection.formGroup,\n              formControlName: 'paidBy'}\"\n            ></html-validations>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"justify-content-center ion-padding\">\n          <ion-button (click)=\"getPenaltiesForSpecificLoan()\">\n            حساب الغرامة\n          </ion-button>\n        </ion-row>\n        <ion-row class=\"justify-content-center ion-padding\">\n          <ion-button color=\"danger\" (click)=\"backButton()\"> رجوع </ion-button>\n          <ion-button\n            (click)=\"insertTransactionButton()\"\n            *ngIf=\"segmentSection.selectedSegment.windowCode ==='5622'\"\n          >\n            ادخال الحركة\n          </ion-button>\n          <ion-button\n            (click)=\"updateTransactionButton()\"\n            *ngIf=\"segmentSection.selectedSegment.windowCode !=='5622'\"\n          >\n            تعديل الحركة\n          </ion-button>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_transactions_payment_unexecuted-payment_unexecuted-payment_module_ts.js.map