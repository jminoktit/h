"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_change-bank_change-bank_module_ts"],{

/***/ 58521:
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/loans/change-bank/change-bank-routing.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeBankPageRoutingModule": function() { return /* binding */ ChangeBankPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _change_bank_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-bank.page */ 90123);






var routes = [{
  path: '',
  component: _change_bank_page__WEBPACK_IMPORTED_MODULE_2__.ChangeBankPage
}];

var ChangeBankPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ChangeBankPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ChangeBankPageRoutingModule);
});

ChangeBankPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ChangeBankPageRoutingModule);


/***/ }),

/***/ 84097:
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/loans/change-bank/change-bank.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeBankPageModule": function() { return /* binding */ ChangeBankPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _change_bank_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-bank-routing.module */ 58521);
/* harmony import */ var _change_bank_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-bank.page */ 90123);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var ChangeBankPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ChangeBankPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ChangeBankPageModule);
});

ChangeBankPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _change_bank_routing_module__WEBPACK_IMPORTED_MODULE_2__.ChangeBankPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_change_bank_page__WEBPACK_IMPORTED_MODULE_3__.ChangeBankPage]
})], ChangeBankPageModule);


/***/ }),

/***/ 90123:
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/loans/change-bank/change-bank.page.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeBankPage": function() { return /* binding */ ChangeBankPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _change_bank_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-bank.page.html?ngResource */ 36576);
/* harmony import */ var _change_bank_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-bank.page.scss?ngResource */ 58064);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 42375);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 69377);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_bank_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/bank.service */ 85691);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);
/* harmony import */ var src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/validators/custom-validators */ 92609);


















var ChangeBankPage = /*#__PURE__*/function () {
  //#endregion
  //#region Initialize
  function ChangeBankPage(formBuilder, referencesService, bankService, loansService, alertService, datePipe, pagingService, sortingService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ChangeBankPage);

    this.formBuilder = formBuilder;
    this.referencesService = referencesService;
    this.bankService = bankService;
    this.loansService = loansService;
    this.alertService = alertService;
    this.datePipe = datePipe;
    this.pagingService = pagingService;
    this.sortingService = sortingService; //#region Flags

    this.showLoader = false;
    this.isSearchForm = true;
    this.isSearchFormSubmitted = false;
    this.checkDatesInput = false;
    this.banksDisabled = true;
    this.isGridForm = false;
    this.isChangeBankFormValid = false;
    this.selectDisbOption = false; //#endregion
    //#region Variables

    this.all_applic = 0;
    this.selectedLoans = [];
    this.page = 1; //#endregion
    //#region Forms

    this.searchForm = this.formBuilder.group({
      branchCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
      bankCodes: [{
        value: null,
        disabled: this.banksDisabled
      }, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
      clientTypeCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
      loanDateFrom: [(0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date()), src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_11__.dateTypeStringValidator({
        required: true
      })],
      loanDateTo: [(0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(new Date()), src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_11__.dateTypeStringValidator({
        required: true
      })]
    });
    this.changeBankForm = this.formBuilder.group({
      bankCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
      disbMethod: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ChangeBankPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.referencesService.GetbranchByUser();

              case 2:
                this.branches = _context.sent;
                _context.next = 5;
                return this.referencesService.GetClientTypes();

              case 5:
                this.clientTypes = _context.sent;
                _context.next = 8;
                return this.referencesService.getDisbMethods();

              case 8:
                this.disbMethods = _context.sent.filter(function (x) {
                  return x.ref_code !== "3";
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "getBanksByBranches",
    value: function getBanksByBranches(ev) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var branch_code;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                branch_code = ev.detail.value;

                if (!branch_code) {
                  _context2.next = 9;
                  break;
                }

                this.showLoader = true;
                this.searchForm.controls.bankCodes.reset();
                _context2.next = 6;
                return this.bankService.getBranchBanks(branch_code);

              case 6:
                this.banks = _context2.sent;

                if (this.banks) {
                  this.banksDisabled = this.banks.length > 0 ? false : true;

                  if (this.banksDisabled) {
                    this.searchForm.controls.bankCodes.disable();
                    this.banks = null;
                  } else {
                    this.searchForm.controls.bankCodes.enable();
                  }
                }

                this.showLoader = false;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    } //#endregion
    //#region Search

  }, {
    key: "getUndisbLoans",
    value: function getUndisbLoans() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.isSearchFormSubmitted = true;

                if (!this.searchForm.valid) {
                  _context3.next = 23;
                  break;
                }

                if (this.searchForm.controls.bankCodes.value) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 5;
                return this.alertService.showAlertError("يجب اختيار البنك", false);

              case 5:
                return _context3.abrupt("return");

              case 6:
                _context3.prev = 6;
                this.showLoader = true;
                this.undisbLoans = null;
                this.UndisbLoanRequest = {
                  branch_code: Number(this.searchForm.controls.branchCode.value),
                  client_type_code: this.searchForm.controls.clientTypeCode.value.toString(),
                  bank_codes: this.searchForm.controls.bankCodes.value.toString(),
                  loan_date_start: new Date(this.searchForm.controls.loanDateFrom.value),
                  loan_date_end: new Date(this.searchForm.controls.loanDateTo.value)
                };
                _context3.next = 12;
                return this.loansService.getChangeBankUndisbLoans(this.UndisbLoanRequest);

              case 12:
                _context3.next = 14;
                return _context3.sent.map(function (x) {
                  return Object.assign(Object.assign({}, x), {
                    isChecked: false
                  });
                });

              case 14:
                this.undisbLoans = _context3.sent;

                if (this.undisbLoans.length > 0) {
                  this.showLoader = false;
                  this.isGridForm = true;
                  this.isSearchForm = false;
                } else {
                  this.showLoader = false;
                  this.alertService.InfoAlert("لا يوجد قروض", false);
                }

                _context3.next = 23;
                break;

              case 18:
                _context3.prev = 18;
                _context3.t0 = _context3["catch"](6);
                this.showLoader = false;
                this.alertService.showAlertError(_context3.t0.message, false);
                console.log(_context3.t0);

              case 23:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[6, 18]]);
      }));
    }
  }, {
    key: "backtoSearchForm",
    value: function backtoSearchForm() {
      this.isSearchForm = true;
      this.isGridForm = false;
      this.undisbLoans = null;
      this.page = 1;
      this.selectedLoans = [];
      this.cashout_code = null;
      this.changeBankForm.reset();
      this.isChangeBankFormValid = false;
      this.selectDisbOption = false;
    }
  }, {
    key: "changePage",
    value: function changePage(newPage) {
      this.page = newPage;
    }
  }, {
    key: "sortingTable",
    value: function sortingTable(data, param) {
      this.sortingService.sortByParameter(data, param);
      this.sortingIconClass = this.sortingService.sortOrder === "asc" ? "arrow-down-outline" : "arrow-up-outline";
      this.sortingIconParam = param;
    } //#endregion
    //#region Checkbox

  }, {
    key: "isAllSelected",
    set: function set(value) {
      this.undisbLoans.forEach(function (app) {
        return app.isChecked = value;
      });
    }
  }, {
    key: "onCheckboxMasterChange",
    value: function onCheckboxMasterChange(event) {
      var isChecked = event.target.checked;
      this.undisbLoans.forEach(function (x) {
        return x.isChecked = isChecked;
      });
      this.updateSelectedLoanForAll(isChecked);
    }
  }, {
    key: "updateSelectedLoanForAll",
    value: function updateSelectedLoanForAll(isChecked) {
      var _this = this;

      this.selectedLoans = [];

      if (isChecked) {
        this.undisbLoans.forEach(function (x) {
          _this.selectedLoans.push(x.loan_key);
        });
        this.all_applic = 1;
      }
    }
  }, {
    key: "convertStringToDate",
    value: function convertStringToDate(str) {
      var date = new Date(str);
      return date.toLocaleDateString();
    }
  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(event, app_key, index) {
      var selectedApp = this.undisbLoans[index + this.pagingService.pageSize * (this.page - 1)];
      selectedApp.isChecked = event.target.checked;
      this.updateSelectedApplicaiton(app_key, event.target.checked);
      this.updateMasterCheckbox();

      if (this.undisbLoans.length !== this.selectedLoans.length) {
        if (this.selectedLoans.length === 0) {
          this.ionCheckBox.indeterminate = false;
        } else {
          this.ionCheckBox.indeterminate = true;
        }

        this.all_applic = 0;
      } else if (this.undisbLoans.length === this.selectedLoans.length) {
        this.ionCheckBox.indeterminate = false;
        this.isAllSelected = true;
        this.all_applic = 1;
      }
    }
  }, {
    key: "updateSelectedApplicaiton",
    value: function updateSelectedApplicaiton(loan_key, isChecked) {
      var index = this.selectedLoans.indexOf(loan_key);

      if (isChecked && index === -1) {
        this.selectedLoans.push(loan_key);
      } else if (!isChecked && index > -1) {
        this.selectedLoans.splice(index, 1);
      }
    }
  }, {
    key: "updateMasterCheckbox",
    value: function updateMasterCheckbox() {
      var allSelected = this.undisbLoans.every(function (x) {
        return x.isChecked;
      });
      var someSelected = this.undisbLoans.some(function (x) {
        return x.isChecked;
      });

      if (allSelected) {
        this.isAllSelected = true;
        this.ionCheckBox.checked = true;
      } else if (!someSelected) {
        this.ionCheckBox.checked = false;
        this.ionCheckBox.indeterminate = false;
        this.isAllSelected = false;
        this.all_applic = 0;
      }
    } //#endregion
    //#region ChangeBank

  }, {
    key: "selectBank",
    value: function selectBank(ev) {
      var curBank = ev.target.value;
      this.cashout_code = this.banks.find(function (x) {
        return x.bank_code === curBank;
      }).cashout_code;

      if (!this.cashout_code) {
        this.selectDisbOption = true;
        this.changeBankForm.controls.disbMethod.reset();
      } else {
        this.selectDisbOption = false;
        this.changeBankForm.patchValue({
          disbMethod: "3"
        });
      }
    }
  }, {
    key: "submitChangeBanks",
    value: function submitChangeBanks() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.isChangeBankFormValid = true;

                if (!this.changeBankForm.valid) {
                  _context4.next = 27;
                  break;
                }

                _context4.next = 4;
                return this.alertService.SaveAlert("هل انت متاكد من تغيير البنك؟");

              case 4:
                if (!_context4.sent) {
                  _context4.next = 27;
                  break;
                }

                _context4.prev = 5;
                this.showLoader = true;
                request = {
                  branch_code: Number(this.searchForm.controls.branchCode.value),
                  loan_keys: this.selectedLoans.toString(),
                  bank_code: Number(this.changeBankForm.controls.bankCode.value),
                  disb_method: Number(this.changeBankForm.controls.disbMethod.value)
                };
                _context4.next = 10;
                return this.loansService.changeBankForUndisbLoans(request);

              case 10:
                _context4.next = 12;
                return this.alertService.showAlertConfirm("تم تعديل البنك بنجاح", false);

              case 12:
                this.backtoSearchForm();
                this.searchForm.controls.branchCode.reset();
                this.searchForm.controls.bankCodes.reset();
                this.searchForm.controls.clientTypeCode.reset();
                this.banks = null;
                this.searchForm.controls.bankCodes.disable();
                this.isSearchFormSubmitted = false;
                this.showLoader = false;
                _context4.next = 27;
                break;

              case 22:
                _context4.prev = 22;
                _context4.t0 = _context4["catch"](5);
                _context4.next = 26;
                return this.alertService.showAlertError(_context4.t0.error, false);

              case 26:
                this.showLoader = false;

              case 27:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[5, 22]]);
      }));
    }
  }]);

  return ChangeBankPage;
}();

ChangeBankPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_9__.ReferencesService
  }, {
    type: src_app_core_services_bank_service__WEBPACK_IMPORTED_MODULE_6__.BankService
  }, {
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_7__.LoansService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_8__.pagingService
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_10__.sortingService
  }];
};

ChangeBankPage.propDecorators = {
  ionCheckBox: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: ["ionCheckBox"]
  }]
};
ChangeBankPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: "app-change-bank",
  template: _change_bank_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_change_bank_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], ChangeBankPage);


/***/ }),

/***/ 58064:
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/loans/change-bank/change-bank.page.scss?ngResource ***!
  \********************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1iYW5rLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGxvYW5zXFxjaGFuZ2UtYmFua1xcY2hhbmdlLWJhbmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQUoiLCJmaWxlIjoiY2hhbmdlLWJhbmsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 36576:
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/loans/change-bank/change-bank.page.html?ngResource ***!
  \********************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<h4 class=\"divCenter\">تغيير بنك الاصدار</h4>\n\n<!-- Searching Form -->\n<ion-card *ngIf=\"isSearchForm\">\n  <ion-card-content>\n    <form [formGroup]=\"searchForm\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"3\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label form-label-required\">الفروع</ion-label>\n            <ion-select interface=\"popover\" placeholder=\"الفروع \" formControlName=\"branchCode\" class=\"subselect\"\n              (ionChange)=\"getBanksByBranches($event)\">\n              <ion-select-option *ngFor=\"let b of branches\" [value]=\"b.branch_code\">\n                {{b.branch_name}}\n              </ion-select-option>\n            </ion-select>\n            <div class=\"text-danger input-validator\"\n              *ngIf=\"isSearchFormSubmitted && (searchForm.controls['branchCode'].hasError('required'))\" role=\"alert\">\n              برجاء اختيار الفرع\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"2\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label form-label-required\">البنوك</ion-label>\n            <app-multiplePopover [parentForm]=\"searchForm\" parentFormControllerName=\"bankCodes\" [arrayModal]=\"banks\"\n              [arrayName]=\"'bank_name'\" [arrayValue]=\"'bank_key'\" [okText]=\"'موافق'\" [cancelText]=\"'الغاء'\"\n              placeholderText=\"اختيار البنك\"></app-multiplePopover>\n            <div class=\"text-danger input-validator\"\n              *ngIf=\"isSearchFormSubmitted && (searchForm.controls['bankCodes'].hasError('required'))\" role=\"alert\">\n              برجاء اختيار البنك\n            </div>\n            <div class=\"text-danger input-validator\" *ngIf=\"!banks && searchForm.controls['branchCode'].value\"\n              role=\"alert\">\n              لا يوجد بنوك لدي المستخدم في هذا الفرع\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"2\" size-md=\"12\" size-sm=\"12\">\n            <ion-label class=\"form-label form-label-required\">نوع الاقتراض</ion-label>\n            <app-multiplePopover [parentForm]=\"searchForm\" parentFormControllerName=\"clientTypeCode\"\n              [arrayModal]=\"clientTypes\" [arrayName]=\"'client_type_name'\" [arrayValue]=\"'client_type_code'\"\n              [okText]=\"'موافق'\" [cancelText]=\"'الغاء'\" placeholderText=\"اختيار نوع الاقتراض\"></app-multiplePopover>\n            <div class=\"text-danger input-validator\"\n              *ngIf=\"isSearchFormSubmitted && (searchForm.controls['clientTypeCode'].hasError('required'))\"\n              role=\"alert\">\n              برجاء اختيار نوع الاقتراض\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"2\" size-md=\"6\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\">تاريخ القرض من</ion-label>\n            <ngx-datepicker [parentForm]=\"searchForm\" parentFormControllerName=\"loanDateFrom\"></ngx-datepicker>\n            <html-validations [validationInput]=\"{\n              showError:checkDatesInput,\n              formGroup: searchForm,\n              formControlName: 'loanDateFrom'}\"></html-validations>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"2\" size-md=\"6\" size-sm=\"6\">\n            <ion-label class=\"form-label form-label-required\">الي</ion-label>\n            <ngx-datepicker [parentForm]=\"searchForm\" parentFormControllerName=\"loanDateTo\"></ngx-datepicker>\n            <html-validations [validationInput]=\"{\n              showError:checkDatesInput,\n              formGroup: searchForm,\n              formControlName: 'loanDateTo'}\"></html-validations>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"1\" size-md=\"12\" size-sm=\"12\" class=\"justify-content-end\"\n            [ngClass]=\"{'align-content-end p-0': (isSearchFormSubmitted && searchForm.valid) || !isSearchFormSubmitted, 'align-content-center pt-3 pb-0 px-0': isSearchFormSubmitted && !searchForm.valid}\">\n            <ion-button (click)=\"getUndisbLoans()\" class=\"w-100\" style=\"margin-bottom: 5px !important;\">\n              <ion-icon name=\"search\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </form>\n  </ion-card-content>\n</ion-card>\n\n<!-- Grid Form -->\n<ng-container *ngIf=\"isGridForm\">\n  <form [formGroup]=\"changeBankForm\">\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n        <ion-label class=\"form-label form-label-required\">بنك الاصدار الجديد</ion-label>\n        <ion-select interface=\"popover\" formControlName=\"bankCode\" class=\"subselect\" placeholder=\"بنك الاصدار\"\n          (ionChange)=\"selectBank($event)\">\n          <ion-select-option *ngFor=\"let bank of banks\" [value]=\"bank.bank_code\">\n            {{bank.bank_name}}\n          </ion-select-option>\n        </ion-select>\n        <div class=\"text-danger input-validator\"\n          *ngIf=\"isChangeBankFormValid && (changeBankForm.controls.bankCode.errors?.['required'])\" role=\"alert\">\n          يجب اختيار بنك الاصدار\n        </div>\n      </ion-col>\n      <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\" *ngIf=\"selectDisbOption\">\n        <ion-label class=\"form-label form-label-required\">\n          طريقة الصرف\n        </ion-label>\n        <ion-select interface=\"popover\" placeholder=\"طريقة الصرف\" formControlName=\"disbMethod\" class=\"subselect\">\n          <ion-select-option *ngFor=\"let ref of disbMethods\" [value]=\"ref.ref_code\">\n            {{ref.ref_desc}}\n          </ion-select-option>\n        </ion-select>\n        <div class=\"text-danger input-validator\"\n          *ngIf=\"isChangeBankFormValid && (changeBankForm.controls.disbMethod.errors?.['required'])\" role=\"alert\">\n          يجب اختيار طريقة الصرف\n        </div>\n      </ion-col>\n    </ion-row>\n  </form>\n  <div class=\"table-responsive card\">\n    <ion-grid class=\"scroll-container card-body w-100 p-0\">\n      <ion-row class=\"header-row\">\n        <ion-col size=\"1\">\n          <ion-checkbox type=\"checkbox\" #ionCheckBox (ionChange)=\"onCheckboxMasterChange($event)\"\n            [checked]=\"isAllSelected\"></ion-checkbox>\n        </ion-col>\n        <ion-col size=\"1\" (click)=\"sortingTable(undisbLoans , 'client_code')\">\n          <ion-label>كود العميل</ion-label>\n          <ion-icon class=\"ion-icon-class\" [name]=\"sortingIconClass\"\n            *ngIf=\"sortingIconParam == 'client_code'\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"2\" (click)=\"sortingTable(undisbLoans , 'client_name')\">\n          <ion-label>اسم العميل</ion-label>\n          <ion-icon class=\"ion-icon-class\" [name]=\"sortingIconClass\"\n            *ngIf=\"sortingIconParam == 'client_name'\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"1\" (click)=\"sortingTable(undisbLoans , 'client_type_code')\">\n          <ion-label>نوع الاقتراض</ion-label>\n          <ion-icon class=\"ion-icon-class\" [name]=\"sortingIconClass\"\n            *ngIf=\"sortingIconParam == 'client_type_code'\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"2\" (click)=\"sortingTable(undisbLoans , 'loan_type_code')\">\n          <ion-label>نوع القرض</ion-label>\n          <ion-icon class=\"ion-icon-class\" [name]=\"sortingIconClass\"\n            *ngIf=\"sortingIconParam == 'loan_type_code'\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"1\" (click)=\"sortingTable(undisbLoans , 'loan_am')\">\n          <ion-label>قيمة القرض</ion-label>\n          <ion-icon class=\"ion-icon-class\" [name]=\"sortingIconClass\" *ngIf=\"sortingIconParam == 'loan_am'\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"1\" (click)=\"sortingTable(undisbLoans , 'loan_date')\">\n          <ion-label>تاريخ القرض</ion-label>\n          <ion-icon class=\"ion-icon-class\" [name]=\"sortingIconClass\" *ngIf=\"sortingIconParam == 'loan_date'\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"1\" (click)=\"sortingTable(undisbLoans , 'funder_code')\">\n          <ion-label>مصدر التمويل</ion-label>\n          <ion-icon class=\"ion-icon-class\" [name]=\"sortingIconClass\"\n            *ngIf=\"sortingIconParam == 'funder_code'\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"1\" (click)=\"sortingTable(undisbLoans , 'bank_code')\">\n          <ion-label>بنك الاصدار</ion-label>\n          <ion-icon class=\"ion-icon-class\" [name]=\"sortingIconClass\" *ngIf=\"sortingIconParam == 'bank_code'\"></ion-icon>\n        </ion-col>\n        <ion-col size=\"1\" (click)=\"sortingTable(undisbLoans , 'disb_method_desc')\">\n          <ion-label>جهة الاصدار</ion-label>\n          <ion-icon class=\"ion-icon-class\" [name]=\"sortingIconClass\"\n            *ngIf=\"sortingIconParam == 'disb_method_desc'\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"details-row\" *ngFor=\"let loan of this.pagingService.Paging(undisbLoans, page); let i = index\">\n        <ion-col size=\"1\">\n          <ion-checkbox type=\"checkbox\" (ionChange)=\"onCheckboxChange($event, loan.loan_key , i)\"\n            [checked]=\"loan.isChecked\"></ion-checkbox>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-label>\n            {{loan.org_branch_code}}/{{loan.client_code}}\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-label>{{loan.client_name}}</ion-label>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-label>{{loan.client_type_name}}</ion-label>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-label>{{loan.loan_type_name}}</ion-label>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-label>{{loan.loan_am}}</ion-label>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-label>{{loan.loan_date | date:\"yyyy-MM-dd\"}}</ion-label>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-label>{{loan.funder_name}}</ion-label>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-label>{{loan.bank_name}}</ion-label>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-label>{{loan.disb_method_desc}}</ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <app-pagination [page]=\"page\" [collectionSize]=\"undisbLoans?.length\"\n      (pageChange)=\"changePage($event);\"></app-pagination>\n  </div>\n  <ion-row class=\"justify-content-center ion-padding\">\n    <ion-button [disabled]=\"selectedLoans.length === 0\" (click)=\"submitChangeBanks()\">\n      <ion-label>تعديل</ion-label>\n    </ion-button>\n    <ion-button (click)=\"backtoSearchForm()\" color=\"danger\">\n      <ion-label>رجوع</ion-label>\n    </ion-button>\n  </ion-row>\n</ng-container>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_change-bank_change-bank_module_ts.js.map