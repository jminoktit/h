"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_transactions_post-transactions_post-transactions_module_ts"],{

/***/ 22719:
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/transactions/post-transactions/post-transactions-routing.module.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostTransactionsPageRoutingModule": function() { return /* binding */ PostTransactionsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _post_transactions_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-transactions.page */ 23187);






var routes = [{
  path: '',
  component: _post_transactions_page__WEBPACK_IMPORTED_MODULE_2__.PostTransactionsPage
}];

var PostTransactionsPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PostTransactionsPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PostTransactionsPageRoutingModule);
});

PostTransactionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], PostTransactionsPageRoutingModule);


/***/ }),

/***/ 68826:
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/transactions/post-transactions/post-transactions.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostTransactionsPageModule": function() { return /* binding */ PostTransactionsPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _post_transactions_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-transactions-routing.module */ 22719);
/* harmony import */ var _post_transactions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-transactions.page */ 23187);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var PostTransactionsPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function PostTransactionsPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PostTransactionsPageModule);
});

PostTransactionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _post_transactions_routing_module__WEBPACK_IMPORTED_MODULE_2__.PostTransactionsPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_post_transactions_page__WEBPACK_IMPORTED_MODULE_3__.PostTransactionsPage]
})], PostTransactionsPageModule);


/***/ }),

/***/ 23187:
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/transactions/post-transactions/post-transactions.page.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostTransactionsPage": function() { return /* binding */ PostTransactionsPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _post_transactions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-transactions.page.html?ngResource */ 43308);
/* harmony import */ var _post_transactions_page_css_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-transactions.page.css?ngResource */ 60731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_transaction_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/transaction.service */ 42836);












var PostTransactionsPage = /*#__PURE__*/function () {
  //endregion
  function PostTransactionsPage(authService, pagingService, transactionService, alertService) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PostTransactionsPage);

    this.authService = authService;
    this.pagingService = pagingService;
    this.transactionService = transactionService;
    this.alertService = alertService; //region Variables

    this.showLoader = false;
    this.checkPageTypes = {
      isPostingTransaction: false,
      isPostingCancelTransaction: false,
      isPostingPenalty: false,
      isPostingCancelPenalty: false
    };
    this.windowCodesToCheck = ["5627", "5628", "5629", "5630"];
    this.PostingTransactionPageType = [{
      pageTypeDesc: "تنفيذ حركات السداد",
      pageCode: 5627,
      pageAction: 1
    }, {
      pageTypeDesc: "تنفيذ حركات الغرامة",
      pageCode: 5628,
      pageAction: 2
    }, {
      pageTypeDesc: "تنفيذ حركات الغاء السداد",
      pageCode: 5629,
      pageAction: 3
    }, {
      pageTypeDesc: "تنفيذ حركات الغاء الغرامة",
      pageCode: 5630,
      pageAction: 4
    }];
    this.TransactionPage = 1;
    this.segmentSelected = false;

    this.checkWindowCodeExists = function (WindowCode) {
      return _this.pageTypeAccessRights.some(function (x) {
        return x.window_code === WindowCode;
      });
    };

    this.changePaginationPage = function (newPage) {
      _this.TransactionPage = newPage;
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PostTransactionsPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
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
                filteredClientTransactionPageTypes = this.PostingTransactionPageType.filter(function (page) {
                  return _this2.windowCodesToCheck.some(function (x) {
                    return x === page.pageCode.toString() && _this2.checkWindowCodeExists(x);
                  });
                });
                this.PostingTransactionPageType = filteredClientTransactionPageTypes;
                _context.next = 7;
                return this.getTransactions(this.PostingTransactionPageType[0].pageCode.toString(), this.PostingTransactionPageType[0].pageAction);

              case 7:
                this.ionSegment.value = this.PostingTransactionPageType[0].pageCode.toString();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    } //region Ion Segment

  }, {
    key: "changePageType",
    value: function changePageType(event) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(event.detail.value.toString() === "0")) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                this.pageType = this.PostingTransactionPageType.find(function (x) {
                  return x.pageCode.toString() === event.detail.value.toString();
                });
                this.checkPageTypes.isPostingTransaction = this.checkWindowCodeExists("5627");
                this.checkPageTypes.isPostingCancelTransaction = this.checkWindowCodeExists("5630");
                this.checkPageTypes.isPostingPenalty = this.checkWindowCodeExists("5628");
                this.checkPageTypes.isPostingCancelPenalty = this.checkWindowCodeExists("5629");
                _context2.next = 9;
                return this.getTransactions(this.pageType.pageCode.toString(), this.pageType.pageAction);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "getTransactions",
    value: function getTransactions(pageCode, pageAction) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = pageCode;
                _context3.next = _context3.t0 === "5627" ? 3 : _context3.t0 === "5628" ? 8 : _context3.t0 === "5629" ? 13 : _context3.t0 === "5630" ? 18 : 23;
                break;

              case 3:
                this.checkPageTypes.isPostingTransaction = true;
                this.checkPageTypes.isPostingPenalty = false;
                this.checkPageTypes.isPostingCancelTransaction = false;
                this.checkPageTypes.isPostingCancelPenalty = false;
                return _context3.abrupt("break", 23);

              case 8:
                this.checkPageTypes.isPostingTransaction = false;
                this.checkPageTypes.isPostingPenalty = true;
                this.checkPageTypes.isPostingCancelTransaction = false;
                this.checkPageTypes.isPostingCancelPenalty = false;
                return _context3.abrupt("break", 23);

              case 13:
                this.checkPageTypes.isPostingTransaction = false;
                this.checkPageTypes.isPostingPenalty = false;
                this.checkPageTypes.isPostingCancelTransaction = true;
                this.checkPageTypes.isPostingCancelPenalty = false;
                return _context3.abrupt("break", 23);

              case 18:
                this.checkPageTypes.isPostingTransaction = false;
                this.checkPageTypes.isPostingPenalty = false;
                this.checkPageTypes.isPostingCancelTransaction = false;
                this.checkPageTypes.isPostingCancelPenalty = true;
                return _context3.abrupt("break", 23);

              case 23:
                this.TransactionPage = 1;
                this.selectedTransactions = [];
                this.showLoader = true;
                this.postingTransactions = [];
                _context3.next = 29;
                return this.transactionService.GetPostingTransactions(pageAction).toPromise();

              case 29:
                this.postingTransactions = _context3.sent.map(function (x) {
                  return Object.assign(Object.assign({}, x), {
                    isChecked: false
                  });
                });
                this.segmentSelected = true;
                this.showLoader = false;

              case 32:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    } //endregion
    //region Checbox

  }, {
    key: "isAllSelected",
    set: function set(value) {
      this.postingTransactions.forEach(function (trans) {
        return trans.isChecked = value;
      });
    }
  }, {
    key: "onCheckboxMasterChange",
    value: function onCheckboxMasterChange(event) {
      var isChecked = event.target.checked;
      this.postingTransactions.forEach(function (trans) {
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
        this.postingTransactions.forEach(function (trans) {
          _this3.selectedTransactions.push(trans);
        });
      }
    }
  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(event, trans, index) {
      var selectedApp = this.postingTransactions[index + this.pagingService.pageSize * (this.TransactionPage - 1)];
      selectedApp.isChecked = event.target.checked;
      this.updateSelectedApplicaiton(trans, event.target.checked);
      this.updateMasterCheckbox();

      if (this.postingTransactions.length !== this.selectedTransactions.length) {
        if (this.selectedTransactions.length === 0) {
          this.ionCheckBox.indeterminate = false;
        } else {
          this.ionCheckBox.indeterminate = true;
        }
      } else if (this.postingTransactions.length === this.selectedTransactions.length) {
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
      var allSelected = this.postingTransactions.every(function (app) {
        return app.isChecked;
      });
      var someSelected = this.postingTransactions.some(function (app) {
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
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        var _this4 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.alertService.SaveAlert("هل انت متاكد من التنفيذ؟");

              case 2:
                if (!_context6.sent) {
                  _context6.next = 6;
                  break;
                }

                console.log("this.selectedTransactions:", this.selectedTransactions);
                this.showLoader = true;
                this.transactionService.postTransactions(this.selectedTransactions).subscribe({
                  next: function next() {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              this.showLoader = false;
                              _context4.next = 3;
                              return this.alertService.showAlertConfirm("تم الحفظ بنجاح", false);

                            case 3:
                              this.TransactionPage = 1;
                              this.selectedTransactions = [];
                              this.showLoader = true;
                              this.postingTransactions = [];
                              _context4.next = 9;
                              return this.transactionService.GetPostingTransactions(this.pageType.pageAction).toPromise();

                            case 9:
                              this.postingTransactions = _context4.sent.map(function (x) {
                                return Object.assign(Object.assign({}, x), {
                                  isChecked: false
                                });
                              });
                              this.segmentSelected = true;
                              this.showLoader = false;

                            case 12:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4, this);
                    }));
                  },
                  error: function error(err) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              _context5.next = 2;
                              return this.alertService.showAlertError(err.error, false);

                            case 2:
                              this.showLoader = false;

                            case 3:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5, this);
                    }));
                  }
                });

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "backbtn",
    value: function backbtn() {
      this.segmentSelected = false;
      this.isAllSelected = false;
      this.postingTransactions = [];
      this.selectedTransactions = [];
      this.TransactionPage = 1;
      this.ionSegment.value = "0";
    }
  }]);

  return PostTransactionsPage;
}();

PostTransactionsPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_7__.pagingService
  }, {
    type: src_app_core_services_transaction_service__WEBPACK_IMPORTED_MODULE_8__.TransactionService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }];
};

PostTransactionsPage.propDecorators = {
  ionCheckBox: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: ["ionCheckBox"]
  }],
  ionSegment: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
    args: ["ionSegment"]
  }]
};
PostTransactionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-post-transactions',
  template: _post_transactions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_post_transactions_page_css_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], PostTransactionsPage);


/***/ }),

/***/ 60731:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/transactions/post-transactions/post-transactions.page.css?ngResource ***!
  \**************************************************************************************************/
/***/ (function(module) {

module.exports = ".scrollable-container {\r\n  overflow-x: auto;\r\n  -webkit-overflow-scrolling: touch; /* for smooth scrolling on iOS */\r\n}\r\n\r\nion-grid {\r\n  min-width: 800px; /* Adjust this value as needed */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtdHJhbnNhY3Rpb25zLnBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlDQUFpQyxFQUFFLGdDQUFnQztBQUNyRTs7QUFFQTtFQUNFLGdCQUFnQixFQUFFLGdDQUFnQztBQUNwRCIsImZpbGUiOiJwb3N0LXRyYW5zYWN0aW9ucy5wYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGxhYmxlLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IC8qIGZvciBzbW9vdGggc2Nyb2xsaW5nIG9uIGlPUyAqL1xyXG59XHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgbWluLXdpZHRoOiA4MDBweDsgLyogQWRqdXN0IHRoaXMgdmFsdWUgYXMgbmVlZGVkICovXHJcbn1cclxuIl19 */";

/***/ }),

/***/ 43308:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/transactions/post-transactions/post-transactions.page.html?ngResource ***!
  \***************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n\n<h4 class=\"divCenter\">تنفيذ حركات</h4>\n\n<ion-segment (ionChange)=\"changePageType($event)\" #ionSegment>\n  <ion-segment-button\n    *ngFor=\"let type of PostingTransactionPageType\"\n    [value]=\"type.pageCode\"\n  >\n    <ion-label class=\"form-label\">{{ type.pageTypeDesc }}</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<!-- transaction Data -->\n<ion-card *ngIf=\"segmentSelected\">\n  <ion-card-content\n    *ngIf=\"this.postingTransactions.length>0\"\n    class=\"scrollable-container\"\n  >\n    <ion-grid>\n      <ion-row class=\"header-row\">\n        <ion-col>\n          <ion-checkbox\n            type=\"checkbox\"\n            #ionCheckBox\n            (ionChange)=\"onCheckboxMasterChange($event)\"\n            [checked]=\"isAllSelected\"\n          ></ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-label>الحركة</ion-label>\n        </ion-col>\n        <ion-col\n          *ngIf=\"this.checkPageTypes.isPostingTransaction || this.checkPageTypes.isPostingCancelTransaction\"\n        >\n          <ion-label>القسط</ion-label>\n        </ion-col>\n        <ion-col\n          *ngIf=\"this.checkPageTypes.isPostingPenalty || this.checkPageTypes.isPostingCancelPenalty\"\n        >\n          <ion-label>القرض</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>كود العميل</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>اسم العميل</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>القيمة</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>الخزينة\\البنك</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>التاريخ</ion-label>\n        </ion-col>\n        <ion-col *ngIf=\"this.checkPageTypes.isPostingCancelTransaction || this.checkPageTypes.isPostingCancelPenalty\">\n          <ion-label>الحركة الملغاة</ion-label>\n        </ion-col>\n        <ion-col *ngIf=\"this.checkPageTypes.isPostingTransaction || this.checkPageTypes.isPostingCancelTransaction\">\n          <ion-label>مستند الضمان</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>مصدر التمويل</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>بنك الاصدار</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        class=\"details-row\"\n        *ngFor=\"let trans of this.pagingService.Paging(\n        this.postingTransactions,\n        this.TransactionPage\n      ); let i = index\"\n      >\n        <ion-col>\n          <ion-checkbox\n            type=\"checkbox\"\n            (ionChange)=\"onCheckboxChange($event, trans , i)\"\n            [checked]=\"trans.isChecked\"\n          ></ion-checkbox>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.trans_code}}</ion-label>\n        </ion-col>\n        <ion-col\n          *ngIf=\"this.checkPageTypes.isPostingTransaction || this.checkPageTypes.isPostingCancelTransaction\"\n        >\n          <ion-label>{{trans.inst_no}}</ion-label>\n        </ion-col>\n        <ion-col\n          *ngIf=\"this.checkPageTypes.isPostingPenalty || this.checkPageTypes.isPostingCancelPenalty\"\n        >\n          <ion-label>{{trans.loan_code}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.client_no}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.client_name}}</ion-label>\n        </ion-col>\n        <ion-col\n          *ngIf=\"this.checkPageTypes.isPostingTransaction || this.checkPageTypes.isPostingCancelTransaction\"\n        >\n          <ion-label>{{trans.trans_am | number:'1.0-2':'en-US'}}</ion-label>\n        </ion-col>\n        <ion-col\n          *ngIf=\"this.checkPageTypes.isPostingPenalty || this.checkPageTypes.isPostingCancelPenalty\"\n        >\n          <ion-label>{{trans.trans_loan_pen | number:'1.0-2':'en-US'}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.trans_bank}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.trans_act_date  | date:\"yyyy-MM-dd\"}}</ion-label>\n        </ion-col>\n        <ion-col *ngIf=\"this.checkPageTypes.isPostingCancelTransaction || this.checkPageTypes.isPostingCancelPenalty\">\n          <ion-label>{{trans.cancel_serial}}</ion-label>\n        </ion-col>\n        <ion-col *ngIf=\"this.checkPageTypes.isPostingTransaction || this.checkPageTypes.isPostingCancelTransaction\">\n          <ion-label>{{trans.inst_vouch}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.funder_name}}</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>{{trans.disb_bank_name}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <app-pagination\n      [page]=\"TransactionPage\"\n      [collectionSize]=\"postingTransactions?.length\"\n      (pageChange)=\"changePaginationPage($event);\"\n    ></app-pagination>\n  </ion-card-content>\n  <ion-card-content\n    style=\"text-align: center\"\n    *ngIf=\"this.postingTransactions.length==0\"\n  >\n    <ion-label>لا يوجد حركات غير منفذة</ion-label>\n  </ion-card-content>\n</ion-card>\n<ion-row style=\"place-content: center;\" *ngIf=\"segmentSelected\">\n  <ion-button *ngIf=\"this.postingTransactions.length>0\" \n    [disabled]=\"this.selectedTransactions.length==0\"\n    (click)=\"postTransactions()\">\n    <ion-label>تنفيذ </ion-label>\n  </ion-button>\n  <ion-button color=\"danger\" (click)=\"backbtn()\">\n    <ion-label>رجوع </ion-label>\n  </ion-button>\n</ion-row>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_transactions_post-transactions_post-transactions_module_ts.js.map