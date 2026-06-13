"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_transactions_penalty_unexecuted-penalty_unexecuted-penalty_module_ts"],{

/***/ 96228:
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/pages/transactions/penalty/unexecuted-penalty/unexecuted-penalty-routing.module.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnexecutedPenaltyPageRoutingModule": function() { return /* binding */ UnexecutedPenaltyPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _unexecuted_penalty_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unexecuted-penalty.page */ 73827);






var routes = [{
  path: "",
  component: _unexecuted_penalty_page__WEBPACK_IMPORTED_MODULE_2__.UnexecutedPenaltyPage
}];

var UnexecutedPenaltyPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UnexecutedPenaltyPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UnexecutedPenaltyPageRoutingModule);
});

UnexecutedPenaltyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], UnexecutedPenaltyPageRoutingModule);


/***/ }),

/***/ 25225:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/transactions/penalty/unexecuted-penalty/unexecuted-penalty.module.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnexecutedPenaltyPageModule": function() { return /* binding */ UnexecutedPenaltyPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _unexecuted_penalty_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unexecuted-penalty-routing.module */ 96228);
/* harmony import */ var _unexecuted_penalty_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unexecuted-penalty.page */ 73827);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var UnexecutedPenaltyPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UnexecutedPenaltyPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UnexecutedPenaltyPageModule);
});

UnexecutedPenaltyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _unexecuted_penalty_routing_module__WEBPACK_IMPORTED_MODULE_2__.UnexecutedPenaltyPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_unexecuted_penalty_page__WEBPACK_IMPORTED_MODULE_3__.UnexecutedPenaltyPage]
})], UnexecutedPenaltyPageModule);


/***/ }),

/***/ 73827:
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/transactions/penalty/unexecuted-penalty/unexecuted-penalty.page.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnexecutedPenaltyPage": function() { return /* binding */ UnexecutedPenaltyPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _unexecuted_penalty_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unexecuted-penalty.page.html?ngResource */ 62879);
/* harmony import */ var _unexecuted_penalty_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unexecuted-penalty.page.scss?ngResource */ 77810);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_services_transaction_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/transaction.service */ 42836);
/* harmony import */ var src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/validators/custom-validators */ 92609);


















var UnexecutedPenaltyPage = /*#__PURE__*/function () {
  function UnexecutedPenaltyPage(transactionService, alertService, pagingService, formBuilder, loanService, referencesService, authService, inputMaskingService) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UnexecutedPenaltyPage);

    this.transactionService = transactionService;
    this.alertService = alertService;
    this.pagingService = pagingService;
    this.formBuilder = formBuilder;
    this.loanService = loanService;
    this.referencesService = referencesService;
    this.authService = authService;
    this.inputMaskingService = inputMaskingService; //#region Variables

    this.showLoader = false;

    this.changePaginationPage = function (newPage) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
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


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UnexecutedPenaltyPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.showLoader = true;
                this.initializeState();
                _context2.next = 5;
                return this.referencesService.getPaidBy();

              case 5:
                this.databaseResponses.paidBy = _context2.sent;
                _context2.next = 8;
                return this.referencesService.getPenaltyType();

              case 8:
                this.databaseResponses.penaltyType = _context2.sent;
                _context2.next = 11;
                return this.referencesService.getBanksByBankType(2);

              case 11:
                this.databaseResponses.bankName = _context2.sent;
                _context2.next = 14;
                return this.authService.getAccessRights();

              case 14:
                this.databaseResponses.accessRight = _context2.sent;
                this.segmentSection = {
                  visible: true,
                  allAvaliableSegments: [{
                    name: "ادخال حركة",
                    sourcePage: 29,
                    pageAction: 1,
                    windowCode: "5626",
                    hasPermission: this.databaseResponses.accessRight.some(function (x) {
                      return x.window_code === "5626";
                    })
                  }, {
                    name: "تعديل حركة",
                    sourcePage: 30,
                    pageAction: 1,
                    windowCode: "5633",
                    hasPermission: this.databaseResponses.accessRight.some(function (x) {
                      return x.window_code === "5633";
                    })
                  }, {
                    name: "حذف حركة",
                    sourcePage: 28,
                    pageAction: 1,
                    windowCode: "5634",
                    hasPermission: this.databaseResponses.accessRight.some(function (x) {
                      return x.window_code === "5634";
                    })
                  }],
                  selectedSegment: null,
                  disable: false
                };
                this.segmentSection.selectedSegment = this.segmentSection.allAvaliableSegments.find(function (x) {
                  return x.hasPermission;
                });
                _context2.next = 24;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2["catch"](0);

                if (!(_context2.t0 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpErrorResponse)) {
                  _context2.next = 24;
                  break;
                }

                this.alertService.showAlertError(JSON.stringify(_context2.t0.error), false);
                return _context2.abrupt("return");

              case 24:
                _context2.prev = 24;
                this.showLoader = false;
                return _context2.finish(24);

              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 19, 24, 27]]);
      }));
    }
  }, {
    key: "loanSelected",
    get: function get() {
      return this.loanInformationSection.readonlyInformation;
    }
  }, {
    key: "loanInformation",
    get: function get() {
      return this.databaseResponses.loanInformation;
    }
  }, {
    key: "allSegmentsThatHavePermission",
    get: function get() {
      return this.segmentSection.allAvaliableSegments.filter(function (x) {
        return x.hasPermission;
      });
    }
  }, {
    key: "readonlyInformation",
    get: function get() {
      return this.loanInformationSection.readonlyInformation;
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
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
      this.loanInformationSection = {
        checkIfInputsValid: false,
        readonlyInformation: null,
        visible: false,
        formGroup: this.formBuilder.group({
          transactionAmount: [null, [(0,src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_12__.transactionAmountValidator)({
            required: true,
            valueGreaterThanZero: true
          })]],
          transactionDate: [null, (0,src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_12__.dateTypeStringValidator)({
            required: true
          })],
          transactionInstallmentVoucher: [null],
          paidBy: [null, [(0,src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_12__.paidByValidator)({
            required: true
          })]],
          penaltyType: [null, [(0,src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_12__.penaltyTypeValidator)({
            required: true
          })]],
          bankName: [null, [(0,src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_12__.bankNameValidator)({
            required: true
          })]]
        })
      };
      this.databaseResponses = {
        loanInformation: null,
        paidBy: [],
        penaltyType: [],
        bankName: [],
        accessRight: [],
        transactionInformation: null
      };
      this.pagingObject = {
        page: 1
      };
    }
  }, {
    key: "clientSelected",
    value: function clientSelected(searchResult) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.showLoader = true;
                this.clientSearchCardSection.clientInformation = searchResult;
                _context3.t0 = this.segmentSection.selectedSegment.windowCode;
                _context3.next = _context3.t0 === "5626" ? 6 : _context3.t0 === "5633" ? 9 : _context3.t0 === "5634" ? 12 : 15;
                break;

              case 6:
                _context3.next = 8;
                return this.insertSegment(searchResult);

              case 8:
                return _context3.abrupt("break", 15);

              case 9:
                _context3.next = 11;
                return this.editSegment(searchResult);

              case 11:
                return _context3.abrupt("break", 15);

              case 12:
                _context3.next = 14;
                return this.deleteSegment(searchResult);

              case 14:
                return _context3.abrupt("break", 15);

              case 15:
                _context3.next = 20;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t1 = _context3["catch"](0);
                this.handleError(_context3.t1);

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
    key: "insertSegment",
    value: function insertSegment(searchResult) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.transactionService.getUnexecutedPenaltiesByClientKey(searchResult.client_key).toPromise();

              case 2:
                this.gridCardSection.insert.gridInformation = _context4.sent;

                if (!(this.gridCardSection.insert.gridInformation.length === 0)) {
                  _context4.next = 6;
                  break;
                }

                this.alertService.showAlertError("لا يوجد معلومات", false);
                return _context4.abrupt("return");

              case 6:
                this.clientSearchCardSection.visible = false;
                this.gridCardSection.insert.visible = true;
                this.segmentSection.disable = true;

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "editSegment",
    value: function editSegment(searchResult) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.transactionService.getUnexecutedPenaltiesPaymentByClientKey(searchResult.client_key).toPromise();

              case 2:
                this.gridCardSection.edit.gridInformation = _context5.sent;

                if (!(this.gridCardSection.edit.gridInformation.length === 0)) {
                  _context5.next = 6;
                  break;
                }

                this.alertService.showAlertError("لا يوجد معلومات", false);
                return _context5.abrupt("return");

              case 6:
                this.clientSearchCardSection.visible = false;
                this.gridCardSection.edit.visible = true;
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
    key: "deleteSegment",
    value: function deleteSegment(searchResult) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.transactionService.getUnexecutedPenaltiesPaymentByClientKey(searchResult.client_key).toPromise();

              case 2:
                this.gridCardSection.delete.gridInformation = _context6.sent;

                if (!(this.gridCardSection.delete.gridInformation.length === 0)) {
                  _context6.next = 6;
                  break;
                }

                this.alertService.showAlertError("لا يوجد معلومات", false);
                return _context6.abrupt("return");

              case 6:
                this.clientSearchCardSection.visible = false;
                this.gridCardSection.delete.visible = true;
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
    key: "backButton",
    value: function backButton() {
      if (this.gridCardSection.insert.visible) {
        this.gridCardSection.insert.visible = false;
        this.gridCardSection.insert.gridInformation = [];
        this.clientSearchCardSection = {
          visible: true,
          clientInformation: null
        };
        this.segmentSection.disable = false;
        return;
      } else if (this.gridCardSection.edit.visible) {
        this.gridCardSection.edit.visible = false;
        this.gridCardSection.edit.gridInformation = [];
        this.clientSearchCardSection = {
          visible: true,
          clientInformation: null
        };
        this.segmentSection.disable = false;
        return;
      } else if (this.gridCardSection.delete.visible) {
        this.gridCardSection.delete.visible = false;
        this.gridCardSection.delete.gridInformation = [];
        this.clientSearchCardSection = {
          visible: true,
          clientInformation: null
        };
        this.segmentSection.disable = false;
        return;
      }

      if (this.loanInformationSection.visible) {
        this.loanInformationSection.checkIfInputsValid = false;
        this.loanInformationSection.visible = false;
        this.loanInformationSection.readonlyInformation = null;
        this.loanInformationSection.formGroup.reset();
        if (this.gridCardSection.insert.gridInformation.length) this.gridCardSection.insert.visible = true;
        if (this.gridCardSection.edit.gridInformation.length) this.gridCardSection.edit.visible = true;
        if (this.gridCardSection.delete.gridInformation.length) this.gridCardSection.delete.visible = true;
        return;
      }
    }
  }, {
    key: "initiatePaymentForLoan",
    value: function initiatePaymentForLoan(loanKey) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        var loan;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                this.showLoader = true;
                loan = this.gridCardSection.insert.gridInformation.find(function (loan) {
                  return loan.loan_key === loanKey;
                });
                this.loanInformationSection.readonlyInformation = this.extractReadonlyInformation(loan);
                _context7.next = 6;
                return this.loanService.getLoanInformationByLoanKey(loanKey).toPromise();

              case 6:
                this.databaseResponses.loanInformation = _context7.sent;
                this.loanInformationSection.formGroup.patchValue({
                  transactionAmount: 0
                });
                this.gridCardSection.insert.visible = false;
                this.loanInformationSection.visible = true;
                _context7.next = 15;
                break;

              case 12:
                _context7.prev = 12;
                _context7.t0 = _context7["catch"](0);
                this.handleError(_context7.t0);

              case 15:
                _context7.prev = 15;
                this.showLoader = false;
                return _context7.finish(15);

              case 18:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 12, 15, 18]]);
      }));
    }
  }, {
    key: "editingTransaction",
    value: function editingTransaction(transactionCode) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                this.showLoader = true;
                this.gridCardSection.edit.visible = false;
                _context8.next = 5;
                return this.transactionService.getUnexecutedPenaltyInformationForUpdate(transactionCode).toPromise();

              case 5:
                this.databaseResponses.transactionInformation = _context8.sent;
                this.loanInformationSection.readonlyInformation = this.extractReadonlyInformation(this.databaseResponses.transactionInformation);
                this.loanInformationSection.formGroup.patchValue({
                  transactionAmount: (_a = this.databaseResponses.transactionInformation) === null || _a === void 0 ? void 0 : _a.trans_loan_pen,
                  transactionDate: (_b = this.databaseResponses.transactionInformation) === null || _b === void 0 ? void 0 : _b.trans_act_date,
                  penaltyType: (_d = (_c = this.databaseResponses.transactionInformation) === null || _c === void 0 ? void 0 : _c.trans_loan_pen_type) === null || _d === void 0 ? void 0 : _d.toString(),
                  bankName: (_e = this.databaseResponses.transactionInformation) === null || _e === void 0 ? void 0 : _e.trans_cur_bank,
                  transactionInstallmentVoucher: (_g = (_f = this.databaseResponses.transactionInformation) === null || _f === void 0 ? void 0 : _f.trans_inst_vouch) === null || _g === void 0 ? void 0 : _g.toString(),
                  paidBy: (_j = (_h = this.databaseResponses.transactionInformation) === null || _h === void 0 ? void 0 : _h.paid_by) === null || _j === void 0 ? void 0 : _j.toString()
                });
                _context8.next = 10;
                return this.loanService.getLoanInformationByLoanKey(this.readonlyInformation.loanKey).toPromise();

              case 10:
                this.databaseResponses.loanInformation = _context8.sent;
                this.loanInformationSection.visible = true;
                _context8.next = 17;
                break;

              case 14:
                _context8.prev = 14;
                _context8.t0 = _context8["catch"](0);
                this.handleError(_context8.t0);

              case 17:
                _context8.prev = 17;
                this.showLoader = false;
                return _context8.finish(17);

              case 20:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 14, 17, 20]]);
      }));
    }
  }, {
    key: "getPenaltiesForSpecificLoan",
    value: function getPenaltiesForSpecificLoan() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
        var loanKey, penalties;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                this.showLoader = true;
                loanKey = this.loanInformationSection.readonlyInformation.loanKey;
                _context9.next = 5;
                return this.loanService.getPenaltiesReferenceByLoanKey(loanKey).toPromise();

              case 5:
                penalties = _context9.sent;
                this.alertService.showAlertInformation("\u0645\u0628\u0644\u063A \u0627\u0644\u063A\u0631\u0627\u0645\u0629</br> ".concat(penalties.pen_due), false);
                _context9.next = 14;
                break;

              case 9:
                _context9.prev = 9;
                _context9.t0 = _context9["catch"](0);

                if (!(_context9.t0 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpErrorResponse)) {
                  _context9.next = 14;
                  break;
                }

                this.alertService.showAlertError(JSON.stringify(_context9.t0.error), false);
                return _context9.abrupt("return");

              case 14:
                _context9.prev = 14;
                this.showLoader = false;
                return _context9.finish(14);

              case 17:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 9, 14, 17]]);
      }));
    }
  }, {
    key: "insertPenaltyButton",
    value: function insertPenaltyButton() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10() {
        var request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (this.loanInformationSection.formGroup.valid) {
                  _context10.next = 2;
                  break;
                }

                return _context10.abrupt("return", this.loanInformationSection.checkIfInputsValid = true);

              case 2:
                _context10.next = 4;
                return this.alertService.SaveAlert();

              case 4:
                if (_context10.sent) {
                  _context10.next = 6;
                  break;
                }

                return _context10.abrupt("return");

              case 6:
                _context10.prev = 6;
                this.showLoader = true;
                request = {
                  loanKey: this.loanInformation.loanKey,
                  loanUucString: this.loanInformation.loanUucString,
                  paidBy: Number(this.loanInformationSection.formGroup.value.paidBy),
                  transactionActualDate: this.loanInformationSection.formGroup.value.transactionDate,
                  transactionCurrentBank: this.loanInformationSection.formGroup.value.bankName,
                  transactionInstVoucher: this.loanInformationSection.formGroup.value.transactionInstallmentVoucher,
                  transactionLoanPenalty: this.loanInformationSection.formGroup.value.transactionAmount,
                  transactionLoanPenaltyType: Number(this.loanInformationSection.formGroup.value.penaltyType)
                };
                _context10.next = 11;
                return this.transactionService.insertUnexecutedPenalties(request).toPromise();

              case 11:
                this.alertService.showAlertConfirm("تم الحفظ بنجاح", true);
                _context10.next = 19;
                break;

              case 14:
                _context10.prev = 14;
                _context10.t0 = _context10["catch"](6);

                if (!(_context10.t0 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpErrorResponse)) {
                  _context10.next = 19;
                  break;
                }

                this.alertService.showAlertError(JSON.stringify(_context10.t0.error), false);
                return _context10.abrupt("return");

              case 19:
                _context10.prev = 19;
                this.showLoader = false;
                return _context10.finish(19);

              case 22:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[6, 14, 19, 22]]);
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
      setTimeout(function () {
        return _this2.clientSearchCardSection.visible = true;
      }, 0);
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var errorMessage;

      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpErrorResponse) {
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
    key: "extractReadonlyInformation",
    value: function extractReadonlyInformation(information) {
      var staticClientInformation;

      if (this.segmentSection.selectedSegment.windowCode === "5626") {
        var info = information;
        staticClientInformation = this.mapUnexecutedPenaltiesByClientKeyInfo(info);
      } else {
        var _info = information;
        staticClientInformation = this.mapUnexecutedPenaltiesPaymentByClientKeyInfo(_info);
      }

      return staticClientInformation;
    }
  }, {
    key: "mapUnexecutedPenaltiesByClientKeyInfo",
    value: function mapUnexecutedPenaltiesByClientKeyInfo(info) {
      return {
        clientCode: "".concat(info.org_branch_code, "/").concat(info.client_code),
        clientName: info.client_name,
        funderName: info.funder_name,
        issuingBank: info.disb_bank_name,
        loanAmount: info.loan_am,
        loanCode: info.loan_code,
        loanDate: info.loan_date,
        loanInterest: info.loan_int_am,
        loanPenalities: info.loan_penalties,
        loanKey: info.loan_key
      };
    }
  }, {
    key: "mapUnexecutedPenaltiesPaymentByClientKeyInfo",
    value: function mapUnexecutedPenaltiesPaymentByClientKeyInfo(info) {
      return {
        clientCode: info.client_no,
        clientName: info.client_name,
        funderName: info.funder_name,
        issuingBank: info.disb_bank_name,
        loanAmount: info.loan_am,
        loanCode: info.loan_code,
        loanDate: info.loan_date,
        loanInterest: info.loan_int_am,
        loanPenalities: info.loan_penalties,
        loanKey: info.loan_key
      };
    }
  }, {
    key: "updateTransactionButton",
    value: function updateTransactionButton() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee11() {
        var value, transactionInformation, request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.loanInformationSection.checkIfInputsValid = true;

                if (this.loanInformationSection.formGroup.valid) {
                  _context11.next = 3;
                  break;
                }

                return _context11.abrupt("return");

              case 3:
                _context11.next = 5;
                return this.alertService.SaveAlert();

              case 5:
                if (_context11.sent) {
                  _context11.next = 7;
                  break;
                }

                return _context11.abrupt("return");

              case 7:
                _context11.prev = 7;
                this.showLoader = true;
                value = this.loanInformationSection.formGroup.value;
                transactionInformation = this.databaseResponses.transactionInformation;
                request = {
                  paidBy: Number(value.paidBy),
                  transactionCode: transactionInformation.trans_code,
                  transactionCurrentBank: value.bankName,
                  transactionDate: value.transactionDate,
                  transactionLoanPenalty: value.transactionAmount,
                  transactionLoanPenaltyType: Number(value.penaltyType),
                  transactionUuc: transactionInformation.uuc_trans,
                  transactionVoucher: value.transactionInstallmentVoucher === undefined || value.transactionInstallmentVoucher === "" ? null : value.transactionInstallmentVoucher
                };
                console.log(request);
                _context11.next = 15;
                return this.transactionService.updateUnexecutedPenalty(request).toPromise();

              case 15:
                this.alertService.showAlertConfirm("تم الحفظ بنجاح", true);
                _context11.next = 21;
                break;

              case 18:
                _context11.prev = 18;
                _context11.t0 = _context11["catch"](7);
                this.handleError(_context11.t0);

              case 21:
                _context11.prev = 21;
                this.showLoader = false;
                return _context11.finish(21);

              case 24:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[7, 18, 21, 24]]);
      }));
    }
  }, {
    key: "deleteSpecificTransaction",
    value: function deleteSpecificTransaction(transactionCode) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee12() {
        var request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.alertService.SaveAlert();

              case 2:
                if (_context12.sent) {
                  _context12.next = 4;
                  break;
                }

                return _context12.abrupt("return");

              case 4:
                _context12.prev = 4;
                this.showLoader = true;
                _context12.next = 8;
                return this.transactionService.getUnexecutedPenaltyInformationForUpdate(transactionCode).toPromise();

              case 8:
                this.databaseResponses.transactionInformation = _context12.sent;
                request = {
                  transactionCode: transactionCode,
                  transactionUuc: this.databaseResponses.transactionInformation.uuc_trans
                };
                _context12.next = 12;
                return this.transactionService.deleteUnexecutedPenalty(request).toPromise();

              case 12:
                this.alertService.showAlertConfirm("تم الحفظ بنجاح", true);
                _context12.next = 18;
                break;

              case 15:
                _context12.prev = 15;
                _context12.t0 = _context12["catch"](4);
                this.handleError(_context12.t0);

              case 18:
                _context12.prev = 18;
                this.showLoader = false;
                return _context12.finish(18);

              case 21:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[4, 15, 18, 21]]);
      }));
    }
  }]);

  return UnexecutedPenaltyPage;
}();

UnexecutedPenaltyPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_transaction_service__WEBPACK_IMPORTED_MODULE_11__.TransactionService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_9__.pagingService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder
  }, {
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_8__.LoansService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_10__.ReferencesService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_7__.InputMaskingService
  }];
};

UnexecutedPenaltyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: "app-unexecuted-penalty",
  template: _unexecuted_penalty_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_unexecuted_penalty_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], UnexecutedPenaltyPage);


/***/ }),

/***/ 77810:
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/transactions/penalty/unexecuted-penalty/unexecuted-penalty.page.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuZXhlY3V0ZWQtcGVuYWx0eS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcdHJhbnNhY3Rpb25zXFxwZW5hbHR5XFx1bmV4ZWN1dGVkLXBlbmFsdHlcXHVuZXhlY3V0ZWQtcGVuYWx0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNBSiIsImZpbGUiOiJ1bmV4ZWN1dGVkLXBlbmFsdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 62879:
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/transactions/penalty/unexecuted-penalty/unexecuted-penalty.page.html?ngResource ***!
  \*************************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n\n<ion-toolbar>\n  <ion-title>غرامة</ion-title>\n</ion-toolbar>\n\n<ion-segment\n  *ngIf=\"segmentSection.visible\"\n  [value]=\"segmentSection.selectedSegment.windowCode\"\n  (ionChange)=\"transactionSegmentChanging($event)\"\n>\n  <ion-segment-button\n    *ngFor=\"let segment of allSegmentsThatHavePermission\"\n    [value]=\"segment.windowCode\"\n    [disabled]=\"segmentSection.disable\"\n  >\n    <ion-label class=\"form-label\">{{ segment.name }}</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<app-client-search\n  *ngIf=\"clientSearchCardSection.visible\"\n  [sourcePage]=\"segmentSection.visible && segmentSection.selectedSegment.sourcePage\"\n  [pageAction]=\"segmentSection.visible && segmentSection.selectedSegment.pageAction\"\n  (selectedClient)=\"clientSelected($event)\"\n  initialSearchType=\"1\"\n>\n</app-client-search>\n\n<ion-card *ngIf=\"gridCardSection.insert.visible\">\n  <ion-card-content>\n    <div class=\"ion-padding table-responsive\">\n      <ion-grid fixed=\"true\" style=\"min-width: 1000px\">\n        <ion-row class=\"header-row\">\n          <ion-col>\n            <ion-label> كود العميل </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> رقم القرض </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> تاريخ القرض </ion-label>\n          </ion-col>\n          <ion-col> </ion-col>\n        </ion-row>\n        <ion-row\n          class=\"details-row\"\n          *ngFor=\"let loan of this.pagingService.Paging(\n          gridCardSection.insert.gridInformation,\n          pagingObject.page\n          )\"\n        >\n          <ion-col>\n            <ion-label>{{loan.org_branch_code}}/{{loan.client_code}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>{{loan.loan_code}}</ion-label>\n          </ion-col>\n          <ion-col\n            ><ion-label> {{loan.loan_date | date:'yyyy-MM-dd'}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-button (click)=\"initiatePaymentForLoan(loan.loan_key)\">\n              <ion-icon name=\"create-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <app-pagination\n      [page]=\"pagingObject.page\"\n      [collectionSize]=\"gridCardSection.insert.gridInformation.length\"\n      (pageChange)=\"changePaginationPage($event);\"\n    ></app-pagination>\n    <ion-row class=\"justify-content-center ion-padding\">\n      <ion-button color=\"danger\" (click)=\"backButton()\">رجوع</ion-button>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"gridCardSection.edit.visible\">\n  <ion-card-content>\n    <div class=\"ion-padding table-responsive\">\n      <ion-grid fixed=\"true\" style=\"min-width: 1000px\">\n        <ion-row class=\"header-row\">\n          <ion-col>\n            <ion-label> كود العميل </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> مسلسل الحركة </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> رقم القرض </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> تاريخ الحركة </ion-label>\n          </ion-col>\n          <ion-col> </ion-col>\n        </ion-row>\n        <ion-row\n          class=\"details-row\"\n          *ngFor=\"let transaction of this.pagingService.Paging(\n          gridCardSection.edit.gridInformation,\n          pagingObject.page\n          )\"\n        >\n          <ion-col>\n            <ion-label\n              >{{clientSearchCardSection.clientInformation.org_branch_code}}/{{clientSearchCardSection.clientInformation.client_code}}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-label>{{transaction.trans_code}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>{{transaction.loan_code}}</ion-label>\n          </ion-col>\n          <ion-col\n            ><ion-label>\n              {{transaction.trans_act_date | date:'yyyy-MM-dd'}}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-button (click)=\"editingTransaction(transaction.trans_code)\">\n              <ion-icon name=\"create-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <app-pagination\n      [page]=\"pagingObject.page\"\n      [collectionSize]=\"gridCardSection.edit.gridInformation.length\"\n      (pageChange)=\"changePaginationPage($event);\"\n    ></app-pagination>\n    <ion-row class=\"justify-content-center ion-padding\">\n      <ion-button color=\"danger\" (click)=\"backButton()\">رجوع</ion-button>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"gridCardSection.delete.visible\">\n  <ion-card-content>\n    <div class=\"ion-padding table-responsive\">\n      <ion-grid fixed=\"true\" style=\"min-width: 1000px\">\n        <ion-row class=\"header-row\">\n          <ion-col>\n            <ion-label> كود العميل </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> مسلسل الحركة </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> رقم القرض </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label> تاريخ الحركة </ion-label>\n          </ion-col>\n          <ion-col> </ion-col>\n        </ion-row>\n        <ion-row\n          class=\"details-row\"\n          *ngFor=\"let transaction of this.pagingService.Paging(\n          gridCardSection.delete.gridInformation,\n          pagingObject.page\n          )\"\n        >\n          <ion-col>\n            <ion-label\n              >{{clientSearchCardSection.clientInformation.org_branch_code}}/{{clientSearchCardSection.clientInformation.client_code}}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-label>{{transaction.trans_code}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>{{transaction.loan_code}}</ion-label>\n          </ion-col>\n          <ion-col\n            ><ion-label>\n              {{transaction.trans_act_date | date:'yyyy-MM-dd'}}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-button\n              color=\"danger\"\n              (click)=\"deleteSpecificTransaction(transaction.trans_code)\"\n            >\n              <ion-icon name=\"trash-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <app-pagination\n      [page]=\"pagingObject.page\"\n      [collectionSize]=\"gridCardSection.delete.gridInformation.length\"\n      (pageChange)=\"changePaginationPage($event);\"\n    ></app-pagination>\n    <ion-row class=\"justify-content-center ion-padding\">\n      <ion-button color=\"danger\" (click)=\"backButton()\">رجوع</ion-button>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"loanInformationSection.visible\">\n  <ion-card-content>\n    <form [formGroup]=\"loanInformationSection.formGroup\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label\"> اسم العميل </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanSelected.clientName}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> كود العميل </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanSelected.clientCode}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> رقم القرض </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanSelected.loanCode}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> قيمة القرض </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanInformation.loanAmount}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> تاريخ القرض </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanInformation.loanDate | date:'yyyy-MM-dd'}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> قيمة المصاريف </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanInformation.loanInterestAmount}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> الغرامات المحصلة </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanSelected.loanPenalities}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> الحالة </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanInformation.loanStatusName}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label\"> مصدر التمويل </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanInformation.funderName}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label\"> بنك الإصدار </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanInformation.bankName}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-item class=\"ion-padding-bottom\"></ion-item>\n        <ion-row>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\">\n              قيمة الحركة\n            </ion-label>\n            <ion-input\n              class=\"form-control\"\n              type=\"text\"\n              formControlName=\"transactionAmount\"\n              (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 2)\"\n            ></ion-input>\n            <html-validations\n              [validationInput]=\"{\n              showError:loanInformationSection.checkIfInputsValid,\n              formGroup: loanInformationSection.formGroup,\n              formControlName: 'transactionAmount'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\">\n              تاريخ الحركة\n            </ion-label>\n            <ngx-datepicker\n              [parentForm]=\"loanInformationSection.formGroup\"\n              [parentFormControllerName]=\"'transactionDate'\"\n            ></ngx-datepicker>\n            <html-validations\n              [validationInput]=\"{\n              showError:loanInformationSection.checkIfInputsValid,\n              formGroup: loanInformationSection.formGroup,\n              formControlName: 'transactionDate'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\"\n              >نوع الغرامة</ion-label\n            >\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"نوع الغرامة\"\n              formControlName=\"penaltyType\"\n              class=\"subselect\"\n            >\n              <ion-select-option\n                *ngFor=\"let penalty of databaseResponses.penaltyType\"\n                [value]=\"penalty.ref_code\"\n              >\n                {{penalty.ref_desc}}\n              </ion-select-option>\n            </ion-select>\n            <html-validations\n              [validationInput]=\"{\n              showError:loanInformationSection.checkIfInputsValid,\n              formGroup: loanInformationSection.formGroup,\n              formControlName: 'penaltyType'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\"\n              >الخزينة</ion-label\n            >\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"الخزينة\"\n              formControlName=\"bankName\"\n              class=\"subselect\"\n            >\n              <ion-select-option\n                *ngFor=\"let bank of databaseResponses.bankName\"\n                [value]=\"bank.bank_code\"\n              >\n                {{bank.bank_name}}\n              </ion-select-option>\n            </ion-select>\n            <html-validations\n              [validationInput]=\"{\n              showError:loanInformationSection.checkIfInputsValid,\n              formGroup: loanInformationSection.formGroup,\n              formControlName: 'bankName'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> رقم الإيصال </ion-label>\n            <ion-input\n              class=\"form-control\"\n              type=\"text\"\n              formControlName=\"transactionInstallmentVoucher\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\">\n              القائم بالسداد\n            </ion-label>\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"القائم بالسداد\"\n              formControlName=\"paidBy\"\n              class=\"subselect\"\n            >\n              <ion-select-option\n                *ngFor=\"let type of databaseResponses.paidBy\"\n                [value]=\"type.ref_code\"\n              >\n                {{type.ref_desc}}\n              </ion-select-option>\n            </ion-select>\n            <html-validations\n              [validationInput]=\"{\n              showError:loanInformationSection.checkIfInputsValid,\n              formGroup: loanInformationSection.formGroup,\n              formControlName: 'paidBy'}\"\n            ></html-validations>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"justify-content-center ion-padding\">\n          <ion-button (click)=\"getPenaltiesForSpecificLoan()\">\n            حساب الغرامة\n          </ion-button>\n        </ion-row>\n        <ion-row class=\"justify-content-center ion-padding\">\n          <ion-button color=\"danger\" (click)=\"backButton()\">رجوع</ion-button>\n          <ion-button\n            (click)=\"insertPenaltyButton()\"\n            *ngIf=\"segmentSection.selectedSegment.windowCode ==='5626'\"\n          >\n            ادخال الحركة\n          </ion-button>\n          <ion-button\n            (click)=\"updateTransactionButton()\"\n            *ngIf=\"segmentSection.selectedSegment.windowCode !=='5626'\"\n          >\n            تعديل الحركة\n          </ion-button>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_transactions_penalty_unexecuted-penalty_unexecuted-penalty_module_ts.js.map