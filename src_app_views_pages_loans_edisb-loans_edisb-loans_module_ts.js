"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_edisb-loans_edisb-loans_module_ts"],{

/***/ 19535:
/*!***********************************************!*\
  !*** ./src/app/core/models/SelectableList.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectableList": function() { return /* binding */ SelectableList; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);


var SelectableList = /*#__PURE__*/function () {
  function SelectableList(items) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SelectableList);

    items = items || [];
    this.items = items.map(function (item) {
      return Object.assign(Object.assign({}, item), {
        isSelected: false
      });
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SelectableList, [{
    key: "isAllSelected",
    get: function get() {
      return this.items.every(function (item) {
        return item.isSelected;
      });
    }
  }, {
    key: "isSomeSelected",
    get: function get() {
      return this.items.some(function (item) {
        return item.isSelected;
      });
    }
  }, {
    key: "totalCount",
    get: function get() {
      return this.items.length;
    }
  }, {
    key: "selectedCount",
    get: function get() {
      return this.items.filter(function (item) {
        return item.isSelected;
      }).length;
    }
  }, {
    key: "selectedItems",
    get: function get() {
      return this.items.filter(function (item) {
        return item.isSelected;
      });
    }
  }, {
    key: "clearItems",
    value: function clearItems() {
      this.items = [];
    }
  }, {
    key: "setItems",
    value: function setItems(items) {
      items = items || [];
      this.items = items.map(function (item) {
        return Object.assign(Object.assign({}, item), {
          isSelected: false
        });
      });
    }
  }, {
    key: "selectAll",
    value: function selectAll() {
      this.items = this.items.map(function (item) {
        return Object.assign(Object.assign({}, item), {
          isSelected: true
        });
      });
    }
  }, {
    key: "selectItem",
    value: function selectItem(index) {
      this.items = this.items.map(function (item, i) {
        return i === index ? Object.assign(Object.assign({}, item), {
          isSelected: true
        }) : item;
      });
    }
  }, {
    key: "selectNone",
    value: function selectNone() {
      this.items = this.items.map(function (item) {
        return Object.assign(Object.assign({}, item), {
          isSelected: false
        });
      });
    }
  }, {
    key: "toggleSelectAll",
    value: function toggleSelectAll() {
      this.isAllSelected ? this.selectNone() : this.selectAll();
    }
  }, {
    key: "toggleSelectItem",
    value: function toggleSelectItem(index) {
      this.items = this.items.map(function (item, i) {
        return i === index ? Object.assign(Object.assign({}, item), {
          isSelected: !item.isSelected
        }) : item;
      });
    }
  }]);

  return SelectableList;
}();

/***/ }),

/***/ 5972:
/*!*************************************************************!*\
  !*** ./src/app/views/Models/E-Disb/EgyptianBanksCompany.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EbcBatchType": function() { return /* binding */ EbcBatchType; },
/* harmony export */   "EbcDisbursementStatus": function() { return /* binding */ EbcDisbursementStatus; },
/* harmony export */   "EbcMessageResponseStatus": function() { return /* binding */ EbcMessageResponseStatus; },
/* harmony export */   "EbcMessageType": function() { return /* binding */ EbcMessageType; },
/* harmony export */   "EbcProcessingStatus": function() { return /* binding */ EbcProcessingStatus; },
/* harmony export */   "EbcTransactionPhase": function() { return /* binding */ EbcTransactionPhase; },
/* harmony export */   "EbcTransactionStatus": function() { return /* binding */ EbcTransactionStatus; }
/* harmony export */ });
// Entities & DB Types
var EbcTransactionPhase;

(function (EbcTransactionPhase) {
  EbcTransactionPhase[EbcTransactionPhase["RequestSending"] = 0] = "RequestSending";
  EbcTransactionPhase[EbcTransactionPhase["Validation"] = 1] = "Validation";
  EbcTransactionPhase[EbcTransactionPhase["Acceptance"] = 2] = "Acceptance";
  EbcTransactionPhase[EbcTransactionPhase["Settlement"] = 3] = "Settlement";
  EbcTransactionPhase[EbcTransactionPhase["FinalSettlement"] = 4] = "FinalSettlement";
  EbcTransactionPhase[EbcTransactionPhase["Disbursement"] = 5] = "Disbursement";
  EbcTransactionPhase[EbcTransactionPhase["Finished"] = 6] = "Finished";
})(EbcTransactionPhase || (EbcTransactionPhase = {}));

var EbcTransactionStatus;

(function (EbcTransactionStatus) {
  EbcTransactionStatus[EbcTransactionStatus["Pending"] = 0] = "Pending";
  EbcTransactionStatus[EbcTransactionStatus["Success"] = 1] = "Success";
  EbcTransactionStatus[EbcTransactionStatus["Failed"] = 2] = "Failed";
})(EbcTransactionStatus || (EbcTransactionStatus = {}));

var EbcProcessingStatus;

(function (EbcProcessingStatus) {
  EbcProcessingStatus[EbcProcessingStatus["Stall"] = 0] = "Stall";
  EbcProcessingStatus[EbcProcessingStatus["Pending"] = 1] = "Pending";
  EbcProcessingStatus[EbcProcessingStatus["Processing"] = 2] = "Processing";
})(EbcProcessingStatus || (EbcProcessingStatus = {}));

var EbcDisbursementStatus;

(function (EbcDisbursementStatus) {
  EbcDisbursementStatus[EbcDisbursementStatus["Pending"] = 0] = "Pending";
  EbcDisbursementStatus[EbcDisbursementStatus["Success"] = 1] = "Success";
})(EbcDisbursementStatus || (EbcDisbursementStatus = {}));

var EbcMessageType;

(function (EbcMessageType) {
  EbcMessageType[EbcMessageType["SendTransaction"] = 1] = "SendTransaction";
  EbcMessageType[EbcMessageType["UpdateTransactionStatus"] = 2] = "UpdateTransactionStatus";
})(EbcMessageType || (EbcMessageType = {}));

var EbcMessageResponseStatus;

(function (EbcMessageResponseStatus) {
  EbcMessageResponseStatus[EbcMessageResponseStatus["FailedToGetResponse"] = 0] = "FailedToGetResponse";
  EbcMessageResponseStatus[EbcMessageResponseStatus["ResponseReceived"] = 1] = "ResponseReceived";
})(EbcMessageResponseStatus || (EbcMessageResponseStatus = {}));

var EbcBatchType;

(function (EbcBatchType) {
  EbcBatchType[EbcBatchType["UpdateTransactionStatus"] = 1] = "UpdateTransactionStatus";
})(EbcBatchType || (EbcBatchType = {}));

/***/ }),

/***/ 29017:
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/loans/edisb-loans/edisb-loans-routing.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdisbLoansPageRoutingModule": function() { return /* binding */ EdisbLoansPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _edisb_loans_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edisb-loans.page */ 73738);






var routes = [{
  path: '',
  component: _edisb_loans_page__WEBPACK_IMPORTED_MODULE_2__.EdisbLoansPage
}];

var EdisbLoansPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function EdisbLoansPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EdisbLoansPageRoutingModule);
});

EdisbLoansPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], EdisbLoansPageRoutingModule);


/***/ }),

/***/ 33335:
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/loans/edisb-loans/edisb-loans.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdisbLoansPageModule": function() { return /* binding */ EdisbLoansPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _edisb_loans_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edisb-loans-routing.module */ 29017);
/* harmony import */ var _edisb_loans_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edisb-loans.page */ 73738);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var EdisbLoansPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function EdisbLoansPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EdisbLoansPageModule);
});

EdisbLoansPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _edisb_loans_routing_module__WEBPACK_IMPORTED_MODULE_2__.EdisbLoansPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_edisb_loans_page__WEBPACK_IMPORTED_MODULE_3__.EdisbLoansPage]
})], EdisbLoansPageModule);


/***/ }),

/***/ 73738:
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/loans/edisb-loans/edisb-loans.page.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdisbLoansPage": function() { return /* binding */ EdisbLoansPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _edisb_loans_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edisb-loans.page.html?ngResource */ 2266);
/* harmony import */ var _edisb_loans_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edisb-loans.page.scss?ngResource */ 84639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/validators/custom-validators */ 92609);
/* harmony import */ var src_app_core_services_bank_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/bank.service */ 85691);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 42375);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 69377);
/* harmony import */ var src_app_views_Models_E_Disb_EgyptianBanksCompany__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/views/Models/E-Disb/EgyptianBanksCompany */ 5972);
/* harmony import */ var src_app_core_services_e_disb_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/e-disb.service */ 92078);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_models_SelectableList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/models/SelectableList */ 19535);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);


















var PageMode;

(function (PageMode) {
  PageMode[PageMode["SendRequest"] = 1] = "SendRequest";
  PageMode[PageMode["ViewStatus"] = 2] = "ViewStatus";
  PageMode[PageMode["ManualDisburse"] = 3] = "ManualDisburse";
  PageMode[PageMode["ShowCompleted"] = 4] = "ShowCompleted";
})(PageMode || (PageMode = {}));

var EdisbLoansPage = /*#__PURE__*/function () {
  //#endregion
  //#region Initialize
  function EdisbLoansPage(authService, formBuilder, bankService, eDisbService, alertService, sortingService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EdisbLoansPage);

    this.authService = authService;
    this.formBuilder = formBuilder;
    this.bankService = bankService;
    this.eDisbService = eDisbService;
    this.alertService = alertService;
    this.sortingService = sortingService;
    this.PageMode = PageMode;
    this.EbcTransactionStatus = src_app_views_Models_E_Disb_EgyptianBanksCompany__WEBPACK_IMPORTED_MODULE_9__.EbcTransactionStatus;
    this.tabs = [{
      tabName: "طلب التحويلات البنكية",
      windowCode: "5667",
      pageMode: PageMode.SendRequest
    }, {
      tabName: "حالة التحويلات البنكية",
      windowCode: "5670",
      pageMode: PageMode.ViewStatus
    }, {
      tabName: "التحويلات البنكية غير المصدرة",
      windowCode: "5669",
      pageMode: PageMode.ManualDisburse
    }, {
      tabName: "التحويلات البنكية المكتملة",
      windowCode: "5668",
      pageMode: PageMode.ShowCompleted
    }];
    this.sortingObject = {
      sortingIconClass: null,
      sortingIconParam: null
    }; //#region Page Objects

    this.showLoader = false;
    this.pageMode = null; //#endregion
    //#region Data Objects

    this.banks = [];
    this.transactionsList = new src_app_core_models_SelectableList__WEBPACK_IMPORTED_MODULE_11__.SelectableList(); //#endregion
    //#region Forms

    this.searchFormSubmitted = false;
    this.searchForm = this.formBuilder.group({
      bankCodes: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      loanDateFrom: [(0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(new Date()), src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_6__.dateTypeStringValidator({
        required: true
      })],
      loanDateTo: [(0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(new Date()), src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_6__.dateTypeStringValidator({
        required: true
      })],
      transactionStatus: [src_app_views_Models_E_Disb_EgyptianBanksCompany__WEBPACK_IMPORTED_MODULE_9__.EbcTransactionStatus.Pending]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EdisbLoansPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _a;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var userAccessRights;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.showLoader = true;
                _context.next = 3;
                return this.authService.getAccessRights();

              case 3:
                userAccessRights = _context.sent;
                this.tabs = this.tabs.filter(function (tab) {
                  return userAccessRights.some(function (accessRight) {
                    return accessRight.window_code === tab.windowCode;
                  });
                });
                this.pageMode = (_a = this.tabs[0]) === null || _a === void 0 ? void 0 : _a.pageMode;
                _context.next = 8;
                return this.loadReferences();

              case 8:
                this.showLoader = false;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "sort",
    value: function sort(sortingParameter) {
      var _a;

      this.sortingService.sortByParameter((_a = this.transactionsList) === null || _a === void 0 ? void 0 : _a.items, sortingParameter);
      this.sortingObject.sortingIconClass = this.sortingService.sortOrder === "asc" ? "arrow-up-outline" : "arrow-down-outline";
      this.sortingObject.sortingIconParam = sortingParameter;
    }
  }, {
    key: "changePageMode",
    value: function changePageMode(event) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.pageMode = event.detail.value;
                this.resetSearchResults();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "resetSearchResults",
    value: function resetSearchResults() {
      this.transactionsList.clearItems();
      this.searchFormSubmitted = false;
      this.searchForm.patchValue({
        transactionStatus: src_app_views_Models_E_Disb_EgyptianBanksCompany__WEBPACK_IMPORTED_MODULE_9__.EbcTransactionStatus.Pending
      });
      this.resetSorting();
    }
  }, {
    key: "resetSorting",
    value: function resetSorting() {
      this.sortingObject = {
        sortingIconClass: null,
        sortingIconParam: null
      };
    }
  }, {
    key: "loadReferences",
    value: function loadReferences() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var userInfo;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.authService.getUserInfo();

              case 2:
                userInfo = _context3.sent;
                _context3.next = 5;
                return this.bankService.getBranchBanks(Number(userInfo.branch_code));

              case 5:
                this.banks = _context3.sent;

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "search",
    value: function search() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.searchFormSubmitted = true;

                if (!(this.pageMode == PageMode.SendRequest)) {
                  _context4.next = 6;
                  break;
                }

                _context4.next = 4;
                return this.searchEbcEligibleLoans();

              case 4:
                _context4.next = 25;
                break;

              case 6:
                if (!(this.pageMode == PageMode.ViewStatus)) {
                  _context4.next = 17;
                  break;
                }

                if (!(this.searchForm.controls.transactionStatus.value == src_app_views_Models_E_Disb_EgyptianBanksCompany__WEBPACK_IMPORTED_MODULE_9__.EbcTransactionStatus.Pending)) {
                  _context4.next = 12;
                  break;
                }

                _context4.next = 10;
                return this.searchEbcPendingTransactions();

              case 10:
                _context4.next = 15;
                break;

              case 12:
                if (!(this.searchForm.controls.transactionStatus.value == src_app_views_Models_E_Disb_EgyptianBanksCompany__WEBPACK_IMPORTED_MODULE_9__.EbcTransactionStatus.Failed)) {
                  _context4.next = 15;
                  break;
                }

                _context4.next = 15;
                return this.searchEbcFailedTransactions();

              case 15:
                _context4.next = 25;
                break;

              case 17:
                if (!(this.pageMode == PageMode.ManualDisburse)) {
                  _context4.next = 22;
                  break;
                }

                _context4.next = 20;
                return this.searchEbcUndisbursedTransactions();

              case 20:
                _context4.next = 25;
                break;

              case 22:
                if (!(this.pageMode == PageMode.ShowCompleted)) {
                  _context4.next = 25;
                  break;
                }

                _context4.next = 25;
                return this.searchEbcCompletedTransactions();

              case 25:
                this.resetSorting();

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "searchEbcEligibleLoans",
    value: function searchEbcEligibleLoans() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var transactions;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.searchForm.valid) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                this.showLoader = true;
                _context5.prev = 3;
                _context5.next = 6;
                return this.eDisbService.getEbcEligibleLoans(this.searchForm.controls.bankCodes.value, this.searchForm.controls.loanDateFrom.value, this.searchForm.controls.loanDateTo.value);

              case 6:
                transactions = _context5.sent;
                this.transactionsList.setItems(transactions);
                _context5.next = 16;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](3);
                this.showLoader = false;

                if (!(_context5.t0 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpErrorResponse)) {
                  _context5.next = 16;
                  break;
                }

                this.alertService.showAlertError(JSON.stringify(_context5.t0.error).replace(/\\r\\n/g, "<br />"), false);
                return _context5.abrupt("return");

              case 16:
                _context5.prev = 16;
                this.showLoader = false;
                return _context5.finish(16);

              case 19:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[3, 10, 16, 19]]);
      }));
    }
  }, {
    key: "searchEbcPendingTransactions",
    value: function searchEbcPendingTransactions() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        var transactions;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (this.searchForm.valid) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                this.showLoader = true;
                _context6.prev = 3;
                _context6.next = 6;
                return this.eDisbService.getEbcPendingTransactions(this.searchForm.controls.bankCodes.value, this.searchForm.controls.loanDateFrom.value, this.searchForm.controls.loanDateTo.value);

              case 6:
                transactions = _context6.sent;
                this.transactionsList.setItems(transactions);
                _context6.next = 16;
                break;

              case 10:
                _context6.prev = 10;
                _context6.t0 = _context6["catch"](3);
                this.showLoader = false;

                if (!(_context6.t0 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpErrorResponse)) {
                  _context6.next = 16;
                  break;
                }

                this.alertService.showAlertError(JSON.stringify(_context6.t0.error).replace(/\\r\\n/g, "<br />"), false);
                return _context6.abrupt("return");

              case 16:
                _context6.prev = 16;
                this.showLoader = false;
                return _context6.finish(16);

              case 19:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[3, 10, 16, 19]]);
      }));
    }
  }, {
    key: "searchEbcFailedTransactions",
    value: function searchEbcFailedTransactions() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        var transactions;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (this.searchForm.valid) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return");

              case 2:
                this.showLoader = true;
                _context7.prev = 3;
                _context7.next = 6;
                return this.eDisbService.getEbcFailedTransactions(this.searchForm.controls.bankCodes.value, this.searchForm.controls.loanDateFrom.value, this.searchForm.controls.loanDateTo.value);

              case 6:
                transactions = _context7.sent;
                this.transactionsList.setItems(transactions);
                _context7.next = 16;
                break;

              case 10:
                _context7.prev = 10;
                _context7.t0 = _context7["catch"](3);
                this.showLoader = false;

                if (!(_context7.t0 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpErrorResponse)) {
                  _context7.next = 16;
                  break;
                }

                this.alertService.showAlertError(JSON.stringify(_context7.t0.error).replace(/\\r\\n/g, "<br />"), false);
                return _context7.abrupt("return");

              case 16:
                _context7.prev = 16;
                this.showLoader = false;
                return _context7.finish(16);

              case 19:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[3, 10, 16, 19]]);
      }));
    }
  }, {
    key: "searchEbcUndisbursedTransactions",
    value: function searchEbcUndisbursedTransactions() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
        var transactions;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (this.searchForm.valid) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt("return");

              case 2:
                this.showLoader = true;
                _context8.prev = 3;
                _context8.next = 6;
                return this.eDisbService.getEbcUndisbursedTransactions(this.searchForm.controls.bankCodes.value, this.searchForm.controls.loanDateFrom.value, this.searchForm.controls.loanDateTo.value);

              case 6:
                transactions = _context8.sent;
                this.transactionsList.setItems(transactions);
                _context8.next = 16;
                break;

              case 10:
                _context8.prev = 10;
                _context8.t0 = _context8["catch"](3);
                this.showLoader = false;

                if (!(_context8.t0 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpErrorResponse)) {
                  _context8.next = 16;
                  break;
                }

                this.alertService.showAlertError(JSON.stringify(_context8.t0.error).replace(/\\r\\n/g, "<br />"), false);
                return _context8.abrupt("return");

              case 16:
                _context8.prev = 16;
                this.showLoader = false;
                return _context8.finish(16);

              case 19:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[3, 10, 16, 19]]);
      }));
    }
  }, {
    key: "searchEbcCompletedTransactions",
    value: function searchEbcCompletedTransactions() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
        var transactions;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (this.searchForm.valid) {
                  _context9.next = 2;
                  break;
                }

                return _context9.abrupt("return");

              case 2:
                this.showLoader = true;
                _context9.prev = 3;
                _context9.next = 6;
                return this.eDisbService.getEbcCompletedTransactions(this.searchForm.controls.bankCodes.value, this.searchForm.controls.loanDateFrom.value, this.searchForm.controls.loanDateTo.value);

              case 6:
                transactions = _context9.sent;
                this.transactionsList.setItems(transactions);
                _context9.next = 16;
                break;

              case 10:
                _context9.prev = 10;
                _context9.t0 = _context9["catch"](3);
                this.showLoader = false;

                if (!(_context9.t0 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpErrorResponse)) {
                  _context9.next = 16;
                  break;
                }

                this.alertService.showAlertError(JSON.stringify(_context9.t0.error).replace(/\\r\\n/g, "<br />"), false);
                return _context9.abrupt("return");

              case 16:
                _context9.prev = 16;
                this.showLoader = false;
                return _context9.finish(16);

              case 19:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[3, 10, 16, 19]]);
      }));
    }
  }, {
    key: "sendEbcTransactions",
    value: function sendEbcTransactions() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10() {
        var confirmed;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.alertService.SaveAlert("\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u0627\u0644\u062A\u062D\u0648\u064A\u0644 \u0644\u0644\u0642\u0631\u0648\u0636 \u0627\u0644\u0645\u062D\u062F\u062F\u0629\u061F (\u0639\u062F\u062F \u0627\u0644\u0642\u0631\u0648\u0636: ".concat(this.transactionsList.selectedCount, ")"));

              case 2:
                confirmed = _context10.sent;

                if (confirmed) {
                  _context10.next = 5;
                  break;
                }

                return _context10.abrupt("return");

              case 5:
                this.showLoader = true;
                _context10.prev = 6;
                _context10.next = 9;
                return this.eDisbService.sendEbcTransactions(this.transactionsList.selectedItems.map(function (i) {
                  return i.loanKey;
                }));

              case 9:
                _context10.next = 11;
                return this.alertService.showAlertConfirm("تم إرسال طلب التحويل بنجاح", false);

              case 11:
                this.transactionsList.selectNone();
                _context10.next = 14;
                return this.search();

              case 14:
                _context10.next = 22;
                break;

              case 16:
                _context10.prev = 16;
                _context10.t0 = _context10["catch"](6);
                this.showLoader = false;

                if (!(_context10.t0 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpErrorResponse)) {
                  _context10.next = 22;
                  break;
                }

                this.alertService.showAlertError(JSON.stringify(_context10.t0.error).replace(/\\r\\n/g, "<br />"), false);
                return _context10.abrupt("return");

              case 22:
                _context10.prev = 22;
                this.showLoader = false;
                return _context10.finish(22);

              case 25:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[6, 16, 22, 25]]);
      }));
    }
  }, {
    key: "disburseEbcTransactions",
    value: function disburseEbcTransactions() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee11() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.showLoader = true;
                _context11.prev = 1;
                _context11.next = 4;
                return this.eDisbService.disburseEbcTransactions(this.transactionsList.selectedItems.map(function (i) {
                  return i.transactionId;
                }));

              case 4:
                _context11.next = 6;
                return this.alertService.showAlertConfirm("تم إرسال طلب إصدار القروض بنجاح", false);

              case 6:
                this.transactionsList.selectNone();
                _context11.next = 9;
                return this.search();

              case 9:
                _context11.next = 17;
                break;

              case 11:
                _context11.prev = 11;
                _context11.t0 = _context11["catch"](1);
                this.showLoader = false;

                if (!(_context11.t0 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpErrorResponse)) {
                  _context11.next = 17;
                  break;
                }

                this.alertService.showAlertError(JSON.stringify(_context11.t0.error).replace(/\\r\\n/g, "<br />"), false);
                return _context11.abrupt("return");

              case 17:
                _context11.prev = 17;
                this.showLoader = false;
                return _context11.finish(17);

              case 20:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[1, 11, 17, 20]]);
      }));
    }
  }]);

  return EdisbLoansPage;
}();

EdisbLoansPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_5__.MohassilAuthService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder
  }, {
    type: src_app_core_services_bank_service__WEBPACK_IMPORTED_MODULE_7__.BankService
  }, {
    type: src_app_core_services_e_disb_service__WEBPACK_IMPORTED_MODULE_10__.EDisbService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_12__.sortingService
  }];
};

EdisbLoansPage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
  selector: "app-edisb-loans",
  template: _edisb_loans_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_edisb_loans_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], EdisbLoansPage);


/***/ }),

/***/ 84639:
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/loans/edisb-loans/edisb-loans.page.scss?ngResource ***!
  \********************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGlzYi1sb2Fucy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 2266:
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/loans/edisb-loans/edisb-loans.page.html?ngResource ***!
  \********************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<h4 class=\"divCenter\">تحويل بنكي الكتروني</h4>\n\n<ion-segment [value]=\"pageMode\" (ionChange)=\"changePageMode($event)\">\n  <ion-segment-button *ngFor=\"let tab of tabs\" [value]=\"tab.pageMode\">\n    <ion-label class=\"form-label\">{{ tab.tabName }}</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<ion-card>\n  <ion-card-content>\n    <div id=\"searchForm\">\n      <form\n        [formGroup]=\"searchForm\"\n        #transactionsSearchForm\n        (ngSubmit)=\"search()\"\n        (keyup.enter)=\"search()\"\n      >\n        <ion-grid>\n          <ion-row class=\"justify-content-start\">\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"12\" size-sm=\"12\">\n              <ion-label class=\"form-label form-label-required\"\n                >البنوك</ion-label\n              >\n              <app-multiplePopover\n                [parentForm]=\"searchForm\"\n                parentFormControllerName=\"bankCodes\"\n                [arrayModal]=\"banks\"\n                arrayName=\"bank_name\"\n                arrayValue=\"bank_key\"\n                okText=\"موافق\"\n                cancelText=\"الغاء\"\n                placeholderText=\"اختر البنوك\"\n              ></app-multiplePopover>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"searchFormSubmitted && searchForm.controls['bankCodes'].hasError('required')\"\n                role=\"alert\"\n              >\n                برجاء اختيار البنك\n              </div>\n            </ion-col>\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n              <ion-label class=\"form-label form-label-required\"\n                >تاريخ القرض من</ion-label\n              >\n              <ngx-datepicker\n                [parentForm]=\"searchForm\"\n                parentFormControllerName=\"loanDateFrom\"\n              ></ngx-datepicker>\n              <html-validations\n                [validationInput]=\"{\n                showError: searchFormSubmitted,\n                formGroup: searchForm,\n                formControlName: 'loanDateFrom'}\"\n              ></html-validations>\n            </ion-col>\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n              <ion-label class=\"form-label form-label-required\">الى</ion-label>\n              <ngx-datepicker\n                [parentForm]=\"searchForm\"\n                parentFormControllerName=\"loanDateTo\"\n              ></ngx-datepicker>\n              <html-validations\n                [validationInput]=\"{\n                showError: searchFormSubmitted,\n                formGroup: searchForm,\n                formControlName: 'loanDateTo'}\"\n              ></html-validations>\n            </ion-col>\n            <ion-col\n              size=\"12\"\n              size-lg=\"4\"\n              size-md=\"6\"\n              size-sm=\"12\"\n              *ngIf=\"pageMode == PageMode.ViewStatus\"\n            >\n              <ion-label class=\"form-label form-label-required\"\n                >حالة التحويلات</ion-label\n              >\n              <ion-select\n                interface=\"popover\"\n                formControlName=\"transactionStatus\"\n                class=\"subselect\"\n              >\n                <ion-select-option [value]=\"EbcTransactionStatus.Pending\"\n                  >جارية</ion-select-option\n                >\n                <ion-select-option [value]=\"EbcTransactionStatus.Failed\"\n                  >مرفوضة</ion-select-option\n                >\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"justify-content-center ion-padding\">\n            <ion-col size=\"4\" size-lg=\"1\" size-md=\"2\" size-sm=\"4\">\n              <ion-button type=\"submit\" expand=\"block\">\n                <ion-icon name=\"search\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </div>\n    <div class=\"table-responsive\" *ngIf=\"transactionsList?.totalCount > 0\">\n      <ion-grid class=\"scroll-container\" style=\"min-width: 1100px\">\n        <ion-row class=\"header-row ion-justify-content-evenly\">\n          <ion-col\n            size=\"1\"\n            *ngIf=\"pageMode == PageMode.SendRequest || pageMode == PageMode.ManualDisburse\"\n          >\n            <ion-checkbox\n              type=\"checkbox\"\n              [checked]=\"transactionsList?.isAllSelected\"\n              (click)=\"$event.stopImmediatePropagation(); $event.preventDefault(); transactionsList.toggleSelectAll();\"\n            ></ion-checkbox>\n          </ion-col>\n          <ion-col\n            size=\"1\"\n            (click)=\"sort('transactionId')\"\n            *ngIf=\"pageMode != PageMode.SendRequest\"\n          >\n            <ion-label>كود التحويل</ion-label>\n            <ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'transactionId'\"\n            ></ion-icon>\n          </ion-col>\n          <ion-col size=\"1\" (click)=\"sort('fullClientCode')\">\n            <ion-label>كود العميل</ion-label>\n            <ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'fullClientCode'\"\n            ></ion-icon>\n          </ion-col>\n          <ion-col size=\"2\" (click)=\"sort('clientName')\">\n            <ion-label>اسم العميل</ion-label>\n            <ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'clientName'\"\n            ></ion-icon>\n          </ion-col>\n          <ion-col size=\"1\">\n            <ion-label>رقم القرض</ion-label>\n          </ion-col>\n          <ion-col size=\"1\" (click)=\"sort('loanAmount')\">\n            <ion-label>مبلغ القرض</ion-label>\n            <ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'loanAmount'\"\n            ></ion-icon>\n          </ion-col>\n          <ion-col size=\"1\" (click)=\"sort('loanDate')\">\n            <ion-label>تاريخ القرض</ion-label>\n            <ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'loanDate'\"\n            ></ion-icon>\n          </ion-col>\n          <ion-col size=\"1\" (click)=\"sort('disbBankName')\">\n            <ion-label>بنك الاصدار</ion-label>\n            <ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'disbBankName'\"\n            ></ion-icon>\n          </ion-col>\n          <ion-col size=\"1\" (click)=\"sort('clientBankName')\">\n            <ion-label>بنك العميل</ion-label>\n            <ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'clientBankName'\"\n            ></ion-icon>\n          </ion-col>\n          <ion-col\n            size=\"3\"\n            (click)=\"sort('transactionStatusDesc')\"\n            *ngIf=\"pageMode == PageMode.ViewStatus\"\n          >\n            <ion-label>حالة التحويل</ion-label>\n            <ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'transactionStatusDesc'\"\n            ></ion-icon>\n          </ion-col>\n          <ion-col\n            size=\"1\"\n            (click)=\"sort('disbStatusMessage')\"\n            *ngIf=\"pageMode == PageMode.ManualDisburse\"\n          >\n            <ion-label>السبب</ion-label>\n            <ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'disbStatusMessage'\"\n            ></ion-icon>\n          </ion-col>\n          <ion-col\n            size=\"1\"\n            (click)=\"sort('disbDate')\"\n            *ngIf=\"pageMode == PageMode.ManualDisburse || pageMode == PageMode.ShowCompleted\"\n          >\n            <ion-label>تاريخ الإصدار</ion-label>\n            <ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'disbDate'\"\n            ></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          class=\"details-row ion-justify-content-evenly\"\n          *ngFor=\"let transaction of transactionsList.items; let i = index;\"\n        >\n          <ion-col\n            size=\"1\"\n            *ngIf=\"pageMode == PageMode.SendRequest || pageMode == PageMode.ManualDisburse\"\n          >\n            <ion-checkbox\n              type=\"checkbox\"\n              [checked]=\"transaction.isSelected\"\n              (ionChange)=\"transactionsList.toggleSelectItem(i)\"\n            ></ion-checkbox>\n          </ion-col>\n          <ion-col size=\"1\" *ngIf=\"pageMode != PageMode.SendRequest\">\n            <ion-label>{{transaction.transactionId}}</ion-label>\n          </ion-col>\n          <ion-col size=\"1\">\n            <ion-label>{{transaction.fullClientCode}}</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-label>{{transaction.clientName}}</ion-label>\n          </ion-col>\n          <ion-col size=\"1\">\n            <ion-label>{{transaction.loanCode | number: '1.0-0'}}</ion-label>\n          </ion-col>\n          <ion-col size=\"1\">\n            <ion-label>{{transaction.loanAmount | number: '1.0-2'}}</ion-label>\n          </ion-col>\n          <ion-col size=\"1\">\n            <ion-label>{{transaction.loanDate | date: 'yyyy/MM/dd'}}</ion-label>\n          </ion-col>\n          <ion-col size=\"1\">\n            <ion-label>{{transaction.disbBankName}}</ion-label>\n          </ion-col>\n          <ion-col size=\"1\">\n            <ion-label>{{transaction.clientBankName}}</ion-label>\n          </ion-col>\n          <ion-col size=\"3\" *ngIf=\"pageMode == PageMode.ViewStatus\">\n            <ion-label>\n              {{transaction.transactionStatusDesc}}\n              <a [id]=\"'transaction-status-date-trigger-' + i\">\n                <ion-icon\n                  name=\"information-circle-outline\"\n                  class=\"align-middle\"\n                ></ion-icon>\n              </a>\n              <ion-popover [trigger]=\"'transaction-status-date-trigger-' + i\">\n                <ng-template>\n                  <ion-label class=\"p-3\"\n                    >تاريخ الحالة: {{transaction.transactionStatusDate | date:\n                    'yyyy/MM/dd hh:mm'}}</ion-label\n                  >\n                </ng-template>\n              </ion-popover>\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"1\" *ngIf=\"pageMode == PageMode.ManualDisburse\">\n            <ion-label>{{transaction.disbStatusMessage}}</ion-label>\n          </ion-col>\n          <ion-col\n            size=\"1\"\n            *ngIf=\"pageMode == PageMode.ManualDisburse || pageMode == PageMode.ShowCompleted\"\n          >\n            <ion-label>{{transaction.disbDate | date: 'yyyy/MM/dd'}}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"justify-content-center mt-3\">\n          <ion-col size=\"2\" *ngIf=\"pageMode == PageMode.SendRequest\">\n            <ion-button\n              expand=\"block\"\n              [disabled]=\"!transactionsList?.isSomeSelected\"\n              (click)=\"sendEbcTransactions()\"\n            >\n              <!-- <ion-icon slot=\"start\" name=\"paper-plane\"></ion-icon> -->\n              إرسال طلب التحويل\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"2\" *ngIf=\"pageMode == PageMode.ManualDisburse\">\n            <ion-button\n              expand=\"block\"\n              [disabled]=\"!transactionsList?.isSomeSelected\"\n              (click)=\"disburseEbcTransactions()\"\n            >\n              <!-- <ion-icon slot=\"start\" name=\"repeat\"></ion-icon> -->\n              إصدار القروض\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <ion-grid> </ion-grid>\n  </ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_edisb-loans_edisb-loans_module_ts.js.map