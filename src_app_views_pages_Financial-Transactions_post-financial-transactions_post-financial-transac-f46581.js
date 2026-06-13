"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_Financial-Transactions_post-financial-transactions_post-financial-transac-f46581"],{

/***/ 39190:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/views/pages/Financial-Transactions/post-financial-transactions/post-financial-transactions-routing.module.ts ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostFinancialTransactionsPageRoutingModule": function() { return /* binding */ PostFinancialTransactionsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _post_financial_transactions_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-financial-transactions.page */ 41497);






var routes = [{
  path: '',
  component: _post_financial_transactions_page__WEBPACK_IMPORTED_MODULE_2__.PostFinancialTransactionsPage
}];

var PostFinancialTransactionsPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PostFinancialTransactionsPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PostFinancialTransactionsPageRoutingModule);
});

PostFinancialTransactionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], PostFinancialTransactionsPageRoutingModule);


/***/ }),

/***/ 9163:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/views/pages/Financial-Transactions/post-financial-transactions/post-financial-transactions.module.ts ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostFinancialTransactionsPageModule": function() { return /* binding */ PostFinancialTransactionsPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _post_financial_transactions_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-financial-transactions-routing.module */ 39190);
/* harmony import */ var _post_financial_transactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-financial-transactions.page */ 41497);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var PostFinancialTransactionsPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PostFinancialTransactionsPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PostFinancialTransactionsPageModule);
});

PostFinancialTransactionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _post_financial_transactions_routing_module__WEBPACK_IMPORTED_MODULE_2__.PostFinancialTransactionsPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_post_financial_transactions_page__WEBPACK_IMPORTED_MODULE_3__.PostFinancialTransactionsPage]
})], PostFinancialTransactionsPageModule);


/***/ }),

/***/ 41497:
/*!********************************************************************************************************************!*\
  !*** ./src/app/views/pages/Financial-Transactions/post-financial-transactions/post-financial-transactions.page.ts ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostFinancialTransactionsPage": function() { return /* binding */ PostFinancialTransactionsPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _post_financial_transactions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-financial-transactions.page.html?ngResource */ 20741);
/* harmony import */ var _post_financial_transactions_page_css_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-financial-transactions.page.css?ngResource */ 60082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_client_transactions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/client-transactions.service */ 64242);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);













var PostFinancialTransactionsPage = /*#__PURE__*/function () {
  //endregion
  function PostFinancialTransactionsPage(authService, pagingService, clientTransactionService, alertService, FormBuilder) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostFinancialTransactionsPage);

    this.authService = authService;
    this.pagingService = pagingService;
    this.clientTransactionService = clientTransactionService;
    this.alertService = alertService;
    this.FormBuilder = FormBuilder; //region Variables

    this.showLoader = false;
    this.checkPageTypes = {
      isPostingClientTransaction: false,
      isPostingCancelClientTransaction: false,
      isPostingApplicationTransactions: false,
      isPostingCancelApplicationTransactions: false
    };
    this.windowCodesToCheck = ["5639", "5640", "5641", "5642"];
    this.PostingFinancialTransactionPageType = [{
      pageTypeDesc: "تنفيذ حركات العميل",
      pageCode: 5639,
      pageAction: 1
    }, {
      pageTypeDesc: "تنفيذ الغاء حركات العميل",
      pageCode: 5640,
      pageAction: 2
    }, {
      pageTypeDesc: "تنفيذ حركات طلب القرض",
      pageCode: 5641,
      pageAction: 3
    }, {
      pageTypeDesc: "تنفيذ الغاء حركات طلب القرض",
      pageCode: 5642,
      pageAction: 4
    }];
    this.TransactionPage = 1;
    this.searched = false;
    this.segmentSelected = false;
    this.selectAllValues = -1;
    this.TypeForm = this.FormBuilder.group({
      trans_type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });

    this.checkWindowCodeExists = function (WindowCode) {
      return _this.pageTypeAccessRights.some(function (x) {
        return x.window_code === WindowCode;
      });
    };

    this.changePaginationPage = function (newPage) {
      _this.TransactionPage = newPage;
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PostFinancialTransactionsPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
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
                filteredClientTransactionPageTypes = this.PostingFinancialTransactionPageType.filter(function (page) {
                  return _this2.windowCodesToCheck.some(function (x) {
                    return x === page.pageCode.toString() && _this2.checkWindowCodeExists(x);
                  });
                });
                this.PostingFinancialTransactionPageType = filteredClientTransactionPageTypes;
                _context.next = 7;
                return this.getTransactionTypes(this.PostingFinancialTransactionPageType[0].pageCode.toString());

              case 7:
                this.postingFinancialTransactions = [];
                this.ionSegment.value = this.PostingFinancialTransactionPageType[0].pageCode.toString();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    } //region Ion Select

  }, {
    key: "SearchByTransType",
    value: function SearchByTransType() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getTransactions(this.transType, this.TypeForm.controls.trans_type.value.join(","));

              case 2:
                this.searched = true;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    } //endregion
    //region Ion Segment

  }, {
    key: "changePageType",
    value: function changePageType(event) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.TypeForm.reset();

                if (!(event.detail.value.toString() === "0")) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return");

              case 3:
                this.pageType = this.PostingFinancialTransactionPageType.find(function (x) {
                  return x.pageCode.toString() === event.detail.value.toString();
                });
                this.checkPageTypes.isPostingClientTransaction = this.checkWindowCodeExists("5639");
                this.checkPageTypes.isPostingCancelClientTransaction = this.checkWindowCodeExists("5640");
                this.checkPageTypes.isPostingApplicationTransactions = this.checkWindowCodeExists("5641");
                this.checkPageTypes.isPostingCancelApplicationTransactions = this.checkWindowCodeExists("5642");
                _context3.next = 10;
                return this.getTransactionTypes(this.pageType.pageCode.toString());

              case 10:
                this.searched = false;

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "getTransactionTypes",
    value: function getTransactionTypes(pageCode) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = pageCode;
                _context4.next = _context4.t0 === "5639" ? 3 : _context4.t0 === "5640" ? 10 : _context4.t0 === "5641" ? 17 : _context4.t0 === "5642" ? 24 : 31;
                break;

              case 3:
                this.checkPageTypes.isPostingClientTransaction = true;
                this.checkPageTypes.isPostingCancelClientTransaction = false;
                this.checkPageTypes.isPostingApplicationTransactions = false;
                this.checkPageTypes.isPostingCancelApplicationTransactions = false;
                this.transType = 2;
                this.cancel = 0;
                return _context4.abrupt("break", 31);

              case 10:
                this.checkPageTypes.isPostingClientTransaction = false;
                this.checkPageTypes.isPostingCancelClientTransaction = true;
                this.checkPageTypes.isPostingApplicationTransactions = false;
                this.checkPageTypes.isPostingCancelApplicationTransactions = false;
                this.transType = 2;
                this.cancel = 1;
                return _context4.abrupt("break", 31);

              case 17:
                this.checkPageTypes.isPostingClientTransaction = false;
                this.checkPageTypes.isPostingCancelClientTransaction = false;
                this.checkPageTypes.isPostingApplicationTransactions = true;
                this.checkPageTypes.isPostingCancelApplicationTransactions = false;
                this.transType = 3;
                this.cancel = 0;
                return _context4.abrupt("break", 31);

              case 24:
                this.checkPageTypes.isPostingClientTransaction = false;
                this.checkPageTypes.isPostingCancelClientTransaction = false;
                this.checkPageTypes.isPostingApplicationTransactions = false;
                this.checkPageTypes.isPostingCancelApplicationTransactions = true;
                this.transType = 3;
                this.cancel = 1;
                return _context4.abrupt("break", 31);

              case 31:
                this.showLoader = true;
                _context4.next = 34;
                return this.clientTransactionService.GetTransType(this.transType, this.cancel).toPromise();

              case 34:
                this.TransTypes = _context4.sent;
                this.showLoader = false;
                this.segmentSelected = true;

              case 37:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "getTransactions",
    value: function getTransactions(transType, transKey) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.TransactionPage = 1;
                this.selectedTransactions = [];
                this.showLoader = true;
                this.postingFinancialTransactions = [];

                if (!transKey) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 7;
                return this.clientTransactionService.GetFinancialTransactions(transType, transKey).toPromise();

              case 7:
                this.postingFinancialTransactions = _context5.sent.map(function (x) {
                  return Object.assign(Object.assign({}, x), {
                    isChecked: false
                  });
                });

              case 8:
                this.showLoader = false;

              case 9:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    } //endregion
    //region Checbox

  }, {
    key: "isAllSelected",
    set: function set(value) {
      this.postingFinancialTransactions.forEach(function (trans) {
        return trans.isChecked = value;
      });
    }
  }, {
    key: "onCheckboxMasterChange",
    value: function onCheckboxMasterChange(event) {
      var isChecked = event.target.checked;
      this.postingFinancialTransactions.forEach(function (trans) {
        return trans.isChecked = isChecked;
      });
      this.updateSelectedLoanForAll(isChecked);
    }
  }, {
    key: "updateSelectedLoanForAll",
    value: function updateSelectedLoanForAll(isChecked) {
      var _this3 = this;

      this.selectedTransactions = [];

      if (isChecked) {
        this.postingFinancialTransactions.forEach(function (trans) {
          _this3.selectedTransactions.push(trans);
        });
      }
    }
  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(event, trans, index) {
      var selectedApp = this.postingFinancialTransactions[index + this.pagingService.pageSize * (this.TransactionPage - 1)];
      selectedApp.isChecked = event.target.checked;
      this.updateSelectedApplicaiton(trans, event.target.checked);
      this.updateMasterCheckbox();

      if (this.postingFinancialTransactions.length !== this.selectedTransactions.length) {
        if (this.selectedTransactions.length === 0) {
          this.ionCheckBox.indeterminate = false;
        } else {
          this.ionCheckBox.indeterminate = true;
        }
      } else if (this.postingFinancialTransactions.length === this.selectedTransactions.length) {
        this.ionCheckBox.indeterminate = false;
        this.ionCheckBox.checked = true;
        this.isAllSelected = true;
      }
    }
  }, {
    key: "updateSelectedApplicaiton",
    value: function updateSelectedApplicaiton(trans, isChecked) {
      var index = this.selectedTransactions.indexOf(trans);

      if (isChecked && index === -1) {
        this.selectedTransactions.push(trans);
      } else if (!isChecked && index > -1) {
        this.selectedTransactions.splice(index, 1);
      }
    }
  }, {
    key: "updateMasterCheckbox",
    value: function updateMasterCheckbox() {
      var allSelected = this.postingFinancialTransactions.every(function (app) {
        return app.isChecked;
      });
      var someSelected = this.postingFinancialTransactions.some(function (app) {
        return app.isChecked;
      });

      if (allSelected) {
        this.isAllSelected = true;
      } else if (!someSelected) {
        this.ionCheckBox.checked = false;
        this.ionCheckBox.indeterminate = false;
        this.isAllSelected = false;
      }
    } //endregion
    //region Submit & Back

  }, {
    key: "postTransactions",
    value: function postTransactions() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
        var _this4 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.alertService.SaveAlert("هل انت متاكد من التنفيذ؟");

              case 2:
                if (!_context8.sent) {
                  _context8.next = 5;
                  break;
                }

                //console.log("this.selectedTransactions:" , this.selectedTransactions)
                this.showLoader = true;
                this.clientTransactionService.postFinancialTransactions(this.selectedTransactions).subscribe({
                  next: function next() {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              this.showLoader = false;
                              _context6.next = 3;
                              return this.alertService.showAlertConfirm("تم الحفظ بنجاح", false);

                            case 3:
                              _context6.next = 5;
                              return this.getTransactions(this.transType, this.TypeForm.controls.trans_type.value.join(","));

                            case 5:
                            case "end":
                              return _context6.stop();
                          }
                        }
                      }, _callee6, this);
                    }));
                  },
                  error: function error(err) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
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

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }, {
    key: "backbtn",
    value: function backbtn() {
      this.segmentSelected = false;
      this.isAllSelected = false;
      this.postingFinancialTransactions = [];
      this.selectedTransactions = [];
      this.TransactionPage = 1;
      this.ionSegment.value = "0";
      this.searched = false;
    }
  }]);

  return PostFinancialTransactionsPage;
}();

PostFinancialTransactionsPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_8__.pagingService
  }, {
    type: src_app_core_services_client_transactions_service__WEBPACK_IMPORTED_MODULE_7__.ClientTransactionsService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
  }];
};

PostFinancialTransactionsPage.propDecorators = {
  ionCheckBox: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ["ionCheckBox"]
  }],
  ionSegment: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ["ionSegment"]
  }],
  transTypeSelect: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ["transTypeSelect", {
      static: false
    }]
  }]
};
PostFinancialTransactionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: "app-post-financial-transactions",
  template: _post_financial_transactions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_post_financial_transactions_page_css_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], PostFinancialTransactionsPage);


/***/ }),

/***/ 60082:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/Financial-Transactions/post-financial-transactions/post-financial-transactions.page.css?ngResource ***!
  \********************************************************************************************************************************/
/***/ (function(module) {

module.exports = ".scrollable-container {\r\n  overflow-x: auto;\r\n  -webkit-overflow-scrolling: touch; /* for smooth scrolling on iOS */\r\n}\r\n\r\nion-grid {\r\n  min-width: 800px; /* Adjust this value as needed */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtZmluYW5jaWFsLXRyYW5zYWN0aW9ucy5wYWdlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUMsRUFBRSxnQ0FBZ0M7QUFDckU7O0FBRUE7RUFDRSxnQkFBZ0IsRUFBRSxnQ0FBZ0M7QUFDcEQiLCJmaWxlIjoicG9zdC1maW5hbmNpYWwtdHJhbnNhY3Rpb25zLnBhZ2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbGFibGUtY29udGFpbmVyIHtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgLyogZm9yIHNtb290aCBzY3JvbGxpbmcgb24gaU9TICovXHJcbn1cclxuXHJcbmlvbi1ncmlkIHtcclxuICBtaW4td2lkdGg6IDgwMHB4OyAvKiBBZGp1c3QgdGhpcyB2YWx1ZSBhcyBuZWVkZWQgKi9cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 20741:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/Financial-Transactions/post-financial-transactions/post-financial-transactions.page.html?ngResource ***!
  \*********************************************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n\n<h4 class=\"divCenter\">تنفيذ حركات مالية</h4>\n\n<ion-segment (ionChange)=\"changePageType($event)\" #ionSegment>\n  <ion-segment-button\n    *ngFor=\"let type of PostingFinancialTransactionPageType\"\n    [value]=\"type.pageCode\"\n  >\n    <ion-label class=\"form-label\">{{ type.pageTypeDesc }}</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<!-- transaction Data -->\n<ion-card *ngIf=\"segmentSelected\">\n  <ion-card-content class=\"scrollable-container\">\n    <form [formGroup]=\"TypeForm\" (ngSubmit)=\"SearchByTransType()\">\n      <ion-row>\n        <ion-col size=\"11\">\n          <app-multiplePopover\n            [parentForm]=\"TypeForm\"\n            parentFormControllerName=\"trans_type\"\n            [arrayModal]=\"TransTypes\"\n            [arrayName]=\"'trans_act_desc'\"\n            [arrayValue]=\"'type_key'\"\n            [okText]=\"'موافق'\"\n            [cancelText]=\"'الغاء'\"\n            placeholderText=\"اختيار نوع الحركة\"\n          ></app-multiplePopover>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-button type=\"submit\" [disabled]=\"!this.TypeForm.valid\"\n            >بحث</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </form>\n    <ion-grid *ngIf=\"searched && this.postingFinancialTransactions.length>0\">\n      <ion-row class=\"header-row\">\n        <ion-col>\n          <ion-checkbox\n            type=\"checkbox\"\n            #ionCheckBox\n            (ionChange)=\"onCheckboxMasterChange($event)\"\n            [checked]=\"isAllSelected\"\n          ></ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-label>الفرع</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>اسم العميل</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>كود العميل</ion-label>\n        </ion-col>\n        <ion-col\n          *ngIf=\"this.checkPageTypes.isPostingApplicationTransactions || this.checkPageTypes.isPostingCancelApplicationTransactions\"\n        >\n          <ion-label>كود طلب القرض</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>قيمة الحركة</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>تاريخ الحركة</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>رقم المستند</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>بنك الحركة</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>العملة</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>المندوب</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>مصدر التمويل</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        class=\"details-row\"\n        *ngFor=\"let trans of this.pagingService.Paging(\n        this.postingFinancialTransactions,\n        this.TransactionPage\n      ); let i = index\"\n      >\n        <ion-col>\n          <ion-checkbox\n            type=\"checkbox\"\n            (ionChange)=\"onCheckboxChange($event, trans , i)\"\n            [checked]=\"trans.isChecked\"\n          ></ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.branch_name}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.client_name}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.client_key}}</ion-label>\n        </ion-col>\n        <ion-col\n          *ngIf=\"this.checkPageTypes.isPostingApplicationTransactions || this.checkPageTypes.isPostingCancelApplicationTransactions\"\n        >\n          <ion-label>{{trans.application_key}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.trans_amount | number:'1.0-2':'en-US'}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.trans_act_date | date:\"yyyy-MM-dd\"}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.trans_vouch}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.bank_name}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.currencry_name}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.officer_name}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.funder_name}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-row\n      style=\"justify-content: center\"\n      *ngIf=\"searched && this.postingFinancialTransactions.length==0\"\n    >\n      <ion-label>لا يوجد حركات غير منفذة</ion-label>\n    </ion-row>\n    <app-pagination\n      [page]=\"TransactionPage\"\n      [collectionSize]=\"postingFinancialTransactions?.length\"\n      (pageChange)=\"changePaginationPage($event);\"\n    ></app-pagination>\n  </ion-card-content>\n</ion-card>\n<ion-row style=\"place-content: center\" *ngIf=\"segmentSelected\">\n  <ion-button\n    *ngIf=\"this.postingFinancialTransactions.length>0\"\n    [disabled]=\"this.selectedTransactions.length==0\"\n    (click)=\"postTransactions()\"\n  >\n    <ion-label>تنفيذ </ion-label>\n  </ion-button>\n  <ion-button color=\"danger\" (click)=\"backbtn()\">\n    <ion-label>رجوع </ion-label>\n  </ion-button>\n</ion-row>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_Financial-Transactions_post-financial-transactions_post-financial-transac-f46581.js.map