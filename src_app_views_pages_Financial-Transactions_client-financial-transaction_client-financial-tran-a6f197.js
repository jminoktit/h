"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_Financial-Transactions_client-financial-transaction_client-financial-tran-a6f197"],{

/***/ 80966:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/Financial-Transactions/client-financial-transaction/client-financial-transaction-routing.module.ts ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientFinancialTransactionPageRoutingModule": function() { return /* binding */ ClientFinancialTransactionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _client_financial_transaction_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-financial-transaction.page */ 57870);






var routes = [{
  path: '',
  component: _client_financial_transaction_page__WEBPACK_IMPORTED_MODULE_2__.ClientFinancialTransactionPage
}];

var ClientFinancialTransactionPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ClientFinancialTransactionPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientFinancialTransactionPageRoutingModule);
});

ClientFinancialTransactionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ClientFinancialTransactionPageRoutingModule);


/***/ }),

/***/ 63806:
/*!************************************************************************************************************************!*\
  !*** ./src/app/views/pages/Financial-Transactions/client-financial-transaction/client-financial-transaction.module.ts ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientFinancialTransactionPageModule": function() { return /* binding */ ClientFinancialTransactionPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _client_financial_transaction_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-financial-transaction-routing.module */ 80966);
/* harmony import */ var _client_financial_transaction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-financial-transaction.page */ 57870);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var ClientFinancialTransactionPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ClientFinancialTransactionPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientFinancialTransactionPageModule);
});

ClientFinancialTransactionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _client_financial_transaction_routing_module__WEBPACK_IMPORTED_MODULE_2__.ClientFinancialTransactionPageRoutingModule],
  declarations: [_client_financial_transaction_page__WEBPACK_IMPORTED_MODULE_3__.ClientFinancialTransactionPage]
})], ClientFinancialTransactionPageModule);


/***/ }),

/***/ 57870:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/views/pages/Financial-Transactions/client-financial-transaction/client-financial-transaction.page.ts ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientFinancialTransactionPage": function() { return /* binding */ ClientFinancialTransactionPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _client_financial_transaction_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-financial-transaction.page.html?ngResource */ 4133);
/* harmony import */ var _client_financial_transaction_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-financial-transaction.page.scss?ngResource */ 64922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_client_transactions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/client-transactions.service */ 64242);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/validators/custom-validators */ 92609);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);

















var ClientFinancialTransactionPage = /*#__PURE__*/function () {
  function ClientFinancialTransactionPage(referencesService, formBuilder, authService, clientTransactionsService, alertService, inputMaskingService) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClientFinancialTransactionPage);

    this.referencesService = referencesService;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.clientTransactionsService = clientTransactionsService;
    this.alertService = alertService;
    this.inputMaskingService = inputMaskingService;
    this.searchTypeObject = {
      pageAction: null
    };
    this.showLoader = false;
    this.isSearching = true;
    this.checkInputsValidation = false;
    this.openClientTransactionForm = false;
    this.checkPageTypes = {
      isAddingTransaction: false,
      isEditingTransaction: false,
      isDeletingTransaction: false
    };
    this.clientTransTypes = [];
    this.bankTypes = [];
    this.banks = [];
    this.clientTransactionPageType = [{
      pageTypeDesc: "إدخال حركات ماليه للعملاء ",
      pageCode: 5623,
      pageAction: 1,
      hasPermission: false
    }, {
      pageTypeDesc: "تعديل حركات ماليه للعملاء ",
      pageCode: 5624,
      pageAction: 3,
      hasPermission: false
    }, {
      pageTypeDesc: "حذف حركات ماليه للعملاء ",
      pageCode: 5625,
      pageAction: 3,
      hasPermission: false
    }];
    this.clientForm = this.formBuilder.group({
      clientName: [null],
      clientCode: [null]
    });
    this.clientTransactionForm = this.formBuilder.group({
      clientKey: [null],
      transCode: [null],
      transactionType: [null, (0,src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_9__.transactionTypeValidator)({
        required: true
      })],
      transAmount: [null, (0,src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_9__.transactionAmountValidator)({
        required: true,
        valueGreaterThanZero: true
      })],
      transActionDate: [null, (0,src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_9__.dateTypeStringValidator)({
        required: true
      })],
      transVouch: [null],
      bankType: ["1"],
      bankKey: [null, [(0,src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_9__.bankNameValidator)({
        required: true
      })]],
      uuc: [null]
    });

    this.checkWindowCodeExists = function (WindowCode) {
      var _a;

      return (_a = _this.pageTypeAccessRights) === null || _a === void 0 ? void 0 : _a.some(function (x) {
        return x.window_code === WindowCode;
      });
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ClientFinancialTransactionPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _a;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this2 = this;

        var filteredClientTransactionPageTypes;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.authService.getAccessRights();

              case 2:
                this.pageTypeAccessRights = _context.sent;
                // Filter the clientTransactionPageType array according to access rights
                // const filteredClientTransactionPageTypes =
                //   this.clientTransactionPageType.filter((page) => {
                //     return this.windowCodesToCheck.some(
                //       (x) => x === page.pageCode.toString() && this.checkWindowCodeExists(x)
                //     );
                //   });
                filteredClientTransactionPageTypes = this.clientTransactionPageType.map(function (page) {
                  var hasPermission = _this2.checkWindowCodeExists(page.pageCode.toString());

                  return Object.assign(Object.assign({}, page), {
                    hasPermission: hasPermission
                  });
                });
                this.clientTransactionPageType = filteredClientTransactionPageTypes.filter(function (x) {
                  return x.hasPermission === true;
                });
                this.selectedPageSegment = this.clientTransactionPageType.find(function () {
                  return true;
                });
                this.setSelectedTransactionSegment(this.selectedPageSegment.pageCode.toString());
                this.searchTypeObject.pageAction = (_a = this.selectedPageSegment) === null || _a === void 0 ? void 0 : _a.pageAction;
                console.log(this.clientTransactionPageType);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "changePageType",
    value: function changePageType(event) {
      this.isSearching = true;
      this.selectedPageSegment = this.clientTransactionPageType.find(function (x) {
        return x.pageCode.toString() === event.detail.value.toString();
      });
      this.setSelectedTransactionSegment(event.detail.value.toString());
      this.searchTypeObject.pageAction = this.selectedPageSegment.pageAction;
    }
  }, {
    key: "clientSelected",
    value: function clientSelected(event) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.showLoader = true;
                this.isSearching = false;
                _context2.next = 4;
                return this.clientTransactionsService.getClientTransactions(event.client_key.toString());

              case 4:
                this.transactions = _context2.sent;
                this.clientForm.patchValue({
                  clientName: event.client_name,
                  clientCode: event.org_branch_code + "/" + event.client_code
                });
                this.clientTransactionForm.patchValue({
                  clientKey: event.client_key
                });
                _context2.next = 9;
                return this.referencesService.getClientTransTypes();

              case 9:
                this.clientTransTypes = _context2.sent;
                _context2.next = 12;
                return this.referencesService.getBankType();

              case 12:
                this.bankTypes = _context2.sent;
                this.getBanks();
                _context2.t0 = this.selectedPageSegment.pageCode.toString();
                _context2.next = _context2.t0 === "5623" ? 17 : _context2.t0 === "5624" ? 22 : _context2.t0 === "5625" ? 27 : 32;
                break;

              case 17:
                this.checkPageTypes.isAddingTransaction = true;
                this.checkPageTypes.isEditingTransaction = false;
                this.checkPageTypes.isDeletingTransaction = false;
                this.openClientTransactionForm = true;
                return _context2.abrupt("break", 32);

              case 22:
                this.checkPageTypes.isAddingTransaction = false;
                this.checkPageTypes.isEditingTransaction = true;
                this.checkPageTypes.isDeletingTransaction = false;
                this.openClientTransactionForm = false;
                return _context2.abrupt("break", 32);

              case 27:
                this.checkPageTypes.isAddingTransaction = false;
                this.checkPageTypes.isEditingTransaction = false;
                this.checkPageTypes.isDeletingTransaction = true;
                this.openClientTransactionForm = false;
                return _context2.abrupt("break", 32);

              case 32:
                if (this.selectedPageSegment.pageCode.toString() === "5623") this.openClientTransactionForm = true;
                this.showLoader = false;

              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "getBanks",
    value: function getBanks() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.clientTransactionForm.patchValue({
                  bankKey: null
                });
                _context3.next = 3;
                return this.referencesService.getBanksByBankType(Number(this.clientTransactionForm.value.bankType));

              case 3:
                this.banks = _context3.sent;

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "backBtn",
    value: function backBtn() {
      //open search component
      if (!this.isSearching && !this.openClientTransactionForm && !this.checkPageTypes.isAddingTransaction) {
        this.isSearching = true;
      } // open client transaction grid


      if (!this.isSearching && this.openClientTransactionForm) {
        this.isSearching = false;
        this.openClientTransactionForm = false;
      } // if adding transaction back to search component direct


      if (this.checkPageTypes.isAddingTransaction) {
        this.isSearching = true;
      }
    }
  }, {
    key: "openEditForm",
    value: function openEditForm(transaction) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.openClientTransactionForm = true;
                _context4.next = 3;
                return this.clientTransactionsService.getClientTransactionByTransCode(Number(transaction.trans_code));

              case 3:
                this.clientTransaction = _context4.sent;
                this.clientTransactionForm.patchValue({
                  transactionType: this.clientTransaction.type_key,
                  transCode: Number(transaction.trans_code),
                  transAmount: (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatNumber)(Number(this.clientTransaction.trans_amount), "en-US", "1.0-2"),
                  transActionDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(this.clientTransaction.trans_act_date), "yyyy-MM-dd"),
                  transVouch: this.clientTransaction.trans_vouch,
                  bankType: this.clientTransaction.bank_type.toString(),
                  bankKey: this.clientTransaction.cur_bank_key.toString(),
                  uuc: this.clientTransaction.uuc.toString()
                });

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "deleteClientTransaction",
    value: function deleteClientTransaction(transaction) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.alertService.SaveAlert();

              case 2:
                if (_context5.sent) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return");

              case 4:
                _context5.prev = 4;
                this.showLoader = true;
                _context5.next = 8;
                return this.clientTransactionsService.deleteClientTransaction(Number(transaction.trans_code), transaction.uuc.toString());

              case 8:
                this.alertService.showAlertConfirm("لقد تم حذف الحركة ", true);
                _context5.next = 15;
                break;

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](4);
                this.alertService.showAlertError(_context5.t0.error, false);
                throw _context5.t0;

              case 15:
                _context5.prev = 15;
                this.showLoader = false;
                return _context5.finish(15);

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[4, 11, 15, 18]]);
      }));
    }
  }, {
    key: "insertClientTransaction",
    value: function insertClientTransaction() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (this.clientTransactionForm.valid) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return", this.checkInputsValidation = true);

              case 2:
                _context6.next = 4;
                return this.alertService.SaveAlert();

              case 4:
                if (_context6.sent) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt("return");

              case 6:
                _context6.prev = 6;
                this.showLoader = true;
                _context6.next = 10;
                return this.clientTransactionsService.insertClientTransaction(this.clientTransactionForm.value);

              case 10:
                this.alertService.showAlertConfirm("لقد تم الحفظ بنجاح", true);
                _context6.next = 17;
                break;

              case 13:
                _context6.prev = 13;
                _context6.t0 = _context6["catch"](6);
                this.alertService.showAlertError(_context6.t0.error, false);
                throw _context6.t0;

              case 17:
                _context6.prev = 17;
                this.showLoader = false;
                return _context6.finish(17);

              case 20:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[6, 13, 17, 20]]);
      }));
    }
  }, {
    key: "editClientTransaction",
    value: function editClientTransaction() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (this.clientTransactionForm.valid) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return", this.checkInputsValidation = true);

              case 2:
                _context7.next = 4;
                return this.alertService.SaveAlert();

              case 4:
                if (_context7.sent) {
                  _context7.next = 6;
                  break;
                }

                return _context7.abrupt("return");

              case 6:
                _context7.prev = 6;
                this.showLoader = true;
                _context7.next = 10;
                return this.clientTransactionsService.editClientTransaction(this.clientTransactionForm.value);

              case 10:
                this.alertService.showAlertConfirm("لقد تم الحفظ بنجاح", true);
                _context7.next = 17;
                break;

              case 13:
                _context7.prev = 13;
                _context7.t0 = _context7["catch"](6);
                this.alertService.showAlertError(_context7.t0.error, false);
                throw _context7.t0;

              case 17:
                _context7.prev = 17;
                this.showLoader = false;
                return _context7.finish(17);

              case 20:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[6, 13, 17, 20]]);
      }));
    }
  }, {
    key: "setSelectedTransactionSegment",
    value: function setSelectedTransactionSegment(windowCode) {
      this.selectedPageSegment = this.clientTransactionPageType.find(function (x) {
        return x.pageCode.toString() === windowCode;
      });
    }
  }]);

  return ClientFinancialTransactionPage;
}();

ClientFinancialTransactionPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_5__.ReferencesService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: src_app_core_services_client_transactions_service__WEBPACK_IMPORTED_MODULE_7__.ClientTransactionsService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_10__.InputMaskingService
  }];
};

ClientFinancialTransactionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: "app-client-financial-transaction",
  template: _client_financial_transaction_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_client_financial_transaction_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], ClientFinancialTransactionPage);


/***/ }),

/***/ 64922:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/Financial-Transactions/client-financial-transaction/client-financial-transaction.page.scss?ngResource ***!
  \***********************************************************************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1maW5hbmNpYWwtdHJhbnNhY3Rpb24ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcRmluYW5jaWFsLVRyYW5zYWN0aW9uc1xcY2xpZW50LWZpbmFuY2lhbC10cmFuc2FjdGlvblxcY2xpZW50LWZpbmFuY2lhbC10cmFuc2FjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNBSiIsImZpbGUiOiJjbGllbnQtZmluYW5jaWFsLXRyYW5zYWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWxhYmVsLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIuZm9ybS1sYWJlbC1yZXF1aXJlZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIipcIjtcbiAgY29sb3I6ICNmZjMzNjYgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 4133:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/Financial-Transactions/client-financial-transaction/client-financial-transaction.page.html?ngResource ***!
  \***********************************************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n\n<!-- <ion-card *ngIf=\"isSearching && !ispageTypeHasChosen\">\n  <ion-card-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n          <ion-label class=\"form-label form-label-required\">نوع الحركة</ion-label>\n          <ion-select interface=\"popover\" class=\"subselect\" placeholder=\"نوع الحركة\"\n            (ionChange)=\"changePageType($event)\">\n            <ion-select-option *ngFor=\"let type of clientTransactionPageType\" [value]=\"type.pageCode\">\n              {{ type.pageTypeDesc }}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card-content>\n</ion-card> -->\n\n<ion-segment\n  [value]=\"clientTransactionPageType[0].pageCode\"\n  (ionChange)=\" changePageType($event)\"\n>\n  <ion-segment-button\n    *ngFor=\"let type of clientTransactionPageType\"\n    [value]=\"type.pageCode\"\n  >\n    <ion-label class=\"form-label\">{{ type.pageTypeDesc }}</ion-label>\n  </ion-segment-button>\n</ion-segment>\n<!-- client search component -->\n<app-client-search\n  *ngIf=\"isSearching\"\n  [sourcePage]=\"166\"\n  [resultType]=\"0\"\n  [pageAction]=\"searchTypeObject.pageAction\"\n  initialSearchType=\"1\"\n  (selectedClient)=\"clientSelected($event)\"\n>\n</app-client-search>\n<!-- Client transactions grid -->\n<ion-card\n  *ngIf=\"!isSearching && !openClientTransactionForm && !checkPageTypes.isAddingTransaction\"\n>\n  <ion-card-content>\n    <ion-grid [fixed]=\"true\">\n      <ion-row class=\"header-row text-center\">\n        <ion-col>\n          <ion-label class=\"form-label\">اسم العميل</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\">كود الحركة</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\">قيمة الحركة</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\">تاريخ الحركة</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\">نوع الحركة</ion-label>\n        </ion-col>\n        <ion-col *ngIf=\"checkPageTypes.isEditingTransaction\"> </ion-col>\n        <ion-col *ngIf=\"checkPageTypes.isDeletingTransaction\"> </ion-col>\n      </ion-row>\n      <ion-row\n        class=\"details-row text-left\"\n        *ngFor=\"let transaction of transactions\"\n      >\n        <ion-col>\n          <ion-label class=\"form-label\">{{transaction.client_name}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\">{{transaction.trans_code}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\"\n            >{{transaction.trans_amount | number:'1.0-2':'en-US'}}</ion-label\n          >\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\"\n            >{{transaction.trans_act_date | date:\"yyyy-MM-dd\"}}</ion-label\n          >\n        </ion-col>\n        <ion-col>\n          <ion-label class=\"form-label\"\n            >{{transaction.trans_act_desc}}</ion-label\n          >\n        </ion-col>\n        <ion-col *ngIf=\"checkPageTypes.isEditingTransaction\">\n          <ion-button (click)=\"openEditForm(transaction)\">\n            <ion-icon name=\"create-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col *ngIf=\"checkPageTypes.isDeletingTransaction\">\n          <ion-button\n            (click)=\"deleteClientTransaction(transaction)\"\n            color=\"danger\"\n          >\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-row class=\"justify-content-center\">\n      <ion-button color=\"danger\" (click)=\"backBtn()\">رجوع</ion-button>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n<!-- Edit and Add Forms  -->\n<!-- Client Data -->\n<ion-card *ngIf=\"!isSearching && openClientTransactionForm\">\n  <ion-card-content>\n    <form [formGroup]=\"clientForm\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label\">اسم العميل</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"clientName\"\n              [readonly]=\"true\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label\">كود العميل</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"clientCode\"\n              [readonly]=\"true\"\n            ></ion-input>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-card-content>\n</ion-card>\n<!-- transaction Data -->\n<ion-card *ngIf=\"!isSearching && openClientTransactionForm\">\n  <ion-card-content>\n    <ion-grid>\n      <form [formGroup]=\"clientTransactionForm\">\n        <ion-row>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label form-label-required\"\n              >نوع الحركة</ion-label\n            >\n            <ion-select\n              interface=\"popover\"\n              class=\"subselect\"\n              placeholder=\"نوع الحركة\"\n              formControlName=\"transactionType\"\n            >\n              <ion-select-option\n                *ngFor=\"let transaction of clientTransTypes\"\n                [value]=\"transaction.type_key\"\n              >\n                {{ transaction.trans_act_desc }}\n              </ion-select-option>\n            </ion-select>\n            <html-validations\n              [validationInput]=\"{\n              showError:checkInputsValidation,\n              formGroup: clientTransactionForm,\n              formControlName: 'transactionType'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label form-label-required\"\n              >قيمة الحركة</ion-label\n            >\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"transAmount\"\n              (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14,2)\"\n            ></ion-input>\n            <html-validations\n              [validationInput]=\"{\n              showError:checkInputsValidation,\n              formGroup: clientTransactionForm,\n              formControlName: 'transAmount'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label form-label-required\"\n              >تاريخ الحركه</ion-label\n            >\n            <ngx-datepicker\n              [parentForm]=\"clientTransactionForm\"\n              parentFormControllerName=\"transActionDate\"\n            ></ngx-datepicker>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label\">رقم مستند الحركه</ion-label>\n            <ion-input\n              class=\"form-control\"\n              formControlName=\"transVouch\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label form-label-required\"\n              >بنك/خزينة</ion-label\n            >\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"بنك/خزينة\"\n              class=\"subselect\"\n              formControlName=\"bankType\"\n              (ionChange)=\"getBanks()\"\n            >\n              <ion-select-option\n                *ngFor=\"let bank of bankTypes\"\n                [value]=\"bank.ref_code\"\n              >\n                {{ bank.ref_desc }}\n              </ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col\n            size=\"12\"\n            sizeLg=\"4\"\n            sizeMd=\"6\"\n            sizeSm=\"12\"\n            class=\"align-self-end mb-1\"\n          >\n            <ion-select\n              interface=\"popover\"\n              class=\"subselect\"\n              formControlName=\"bankKey\"\n            >\n              <ion-select-option\n                *ngFor=\"let bank of banks\"\n                [value]=\"bank.bank_key\"\n              >\n                {{ bank.bank_name }}\n              </ion-select-option>\n            </ion-select>\n            <html-validations\n              [validationInput]=\"{\n              showError:checkInputsValidation,\n              formGroup: clientTransactionForm,\n              formControlName: 'bankKey'}\"\n            ></html-validations>\n          </ion-col>\n        </ion-row>\n      </form>\n      <ion-row class=\"justify-content-center\">\n        <ion-button\n          *ngIf=\"checkPageTypes.isAddingTransaction\"\n          (click)=\"insertClientTransaction()\"\n          >حفظ</ion-button\n        >\n        <ion-button\n          *ngIf=\"checkPageTypes.isEditingTransaction\"\n          (click)=\"editClientTransaction()\"\n          >حفظ</ion-button\n        >\n        <ion-button color=\"danger\" (click)=\"backBtn()\">رجوع</ion-button>\n      </ion-row>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_Financial-Transactions_client-financial-transaction_client-financial-tran-a6f197.js.map