"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_making-loan-per-client_making-loan-per-client_module_ts"],{

/***/ 85946:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/making-loan-per-client/making-loan-per-client-routing.module.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakingLoanPerClientPageRoutingModule": function() { return /* binding */ MakingLoanPerClientPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _making_loan_per_client_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./making-loan-per-client.page */ 7569);






var routes = [{
  path: '',
  component: _making_loan_per_client_page__WEBPACK_IMPORTED_MODULE_2__.MakingLoanPerClientPage
}];

var MakingLoanPerClientPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MakingLoanPerClientPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MakingLoanPerClientPageRoutingModule);
});

MakingLoanPerClientPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], MakingLoanPerClientPageRoutingModule);


/***/ }),

/***/ 85490:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/loans/making-loan-per-client/making-loan-per-client.module.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakingLoanPerClientPageModule": function() { return /* binding */ MakingLoanPerClientPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _making_loan_per_client_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./making-loan-per-client-routing.module */ 85946);
/* harmony import */ var _making_loan_per_client_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./making-loan-per-client.page */ 7569);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var MakingLoanPerClientPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MakingLoanPerClientPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MakingLoanPerClientPageModule);
});

MakingLoanPerClientPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _making_loan_per_client_routing_module__WEBPACK_IMPORTED_MODULE_2__.MakingLoanPerClientPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_making_loan_per_client_page__WEBPACK_IMPORTED_MODULE_3__.MakingLoanPerClientPage]
})], MakingLoanPerClientPageModule);


/***/ }),

/***/ 7569:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/loans/making-loan-per-client/making-loan-per-client.page.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakingLoanPerClientPage": function() { return /* binding */ MakingLoanPerClientPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _making_loan_per_client_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./making-loan-per-client.page.html?ngResource */ 75464);
/* harmony import */ var _making_loan_per_client_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./making-loan-per-client.page.scss?ngResource */ 19970);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_scrolling_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/scrolling.service */ 68931);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);


















var MakingLoanPerClientPage = /*#__PURE__*/function () {
  function MakingLoanPerClientPage(formBuilder, env, http, authService, ScrollingService, router, platform, alertSerivce, referencesService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MakingLoanPerClientPage);

    this.formBuilder = formBuilder;
    this.env = env;
    this.http = http;
    this.authService = authService;
    this.ScrollingService = ScrollingService;
    this.router = router;
    this.platform = platform;
    this.alertSerivce = alertSerivce;
    this.referencesService = referencesService; //#region Variables

    this.showLoader = false;
    this.isSearchForm = true;
    this.isGridForm = false;
    this.isMakingLoanForm = false;
    this.isMakingLoanFormValid = false;
    this.isSearchLoanFormValid = false;
    this.searchTypes = [[" البحث بالرقم القومى", "1"], ["البحث بكود العميل", "2"], ["البحث برقم التليفون", "3"]];
    this.searchForm = this.formBuilder.group({
      search_type: ["1", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      search_input: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$")]]
    });
    this.makingLoanForm = this.formBuilder.group({
      client_name: [""],
      nation_id: [""],
      aprv_am: [""],
      clnt_code: [""],
      loan_type_name: [""],
      client_type_name: [""],
      loan_int_rt: [""],
      payments_shift: [""],
      com_dec_date: [""],
      dec_effective_date: [""],
      issuingbank: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      bankSafe: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      inssurance: [""],
      funder_code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
      funding_reference_id: [""],
      loan_vouch_char: [""]
    });
    this.gridForm = this.formBuilder.group({});
  } //#endregion


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MakingLoanPerClientPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.authService.getUserInfo().then(function (userInfo) {
                  _this.org_code_user_info = userInfo.org_code;
                });

              case 2:
                this.registerBackButtonListener();
                _context.next = 5;
                return this.referencesService.getAllIssuingBanks();

              case 5:
                this.IIssuingBank = _context.sent;
                _context.next = 8;
                return this.referencesService.getAllBanksSafe();

              case 8:
                this.IBankSafe = _context.sent;
                _context.next = 11;
                return this.referencesService.getAllInsurances();

              case 11:
                this.IInsurance = _context.sent;
                _context.next = 14;
                return this.referencesService.getAllFunders();

              case 14:
                this.Funders = _context.sent;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "funderCodeChange",
    value: function funderCodeChange($event) {
      if ($event.detail.value != "") {
        this.makingLoanForm.patchValue({
          funding_reference_id: null
        });
        this.checkFundingReference($event.detail.value);
      }
    }
  }, {
    key: "checkFundingReference",
    value: function checkFundingReference(funder_code) {
      var _this2 = this;

      this.showLoader = true;
      this.http.post(this.env.API_URL + "api/LoanApplications/GetFundingReference", {
        org_code: this.org_code_user_info,
        funder_code: funder_code
      }).subscribe({
        next: function next(data) {
          console.log(data);
          _this2.FundingRef = data["fundingRefs"];
          _this2.iscore_external_funding = data["iscore_external_funding"];

          if (_this2.iscore_external_funding == "1") {
            _this2.isIscore_external_funding = true;

            _this2.makingLoanForm.controls["funding_reference_id"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
          } else {
            _this2.isIscore_external_funding = false;

            _this2.makingLoanForm.controls["funding_reference_id"].clearValidators();
          }

          _this2.makingLoanForm.controls["funding_reference_id"].updateValueAndValidity();

          _this2.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this2.showLoader = false;
        }
      });
    }
  }, {
    key: "clientSearch",
    value: function clientSearch() {
      var _this3 = this;

      this.isSearchLoanFormValid = true;

      if (this.searchForm.valid) {
        this.showLoader = true;
        var searchtypeValue = this.searchForm.controls["search_type"].value;
        var searchInputValue = this.searchForm.controls["search_input"].value;
        this.http.post(this.env.API_URL + "api/LoanApplications/GetMakingLoanPerClient", {
          nation_id: searchtypeValue == "1" ? searchInputValue : null,
          branch_code: searchtypeValue == "2" ? searchInputValue.substring(0, searchInputValue.indexOf("/")) : null,
          client_code: searchtypeValue == "2" ? searchInputValue.slice(searchInputValue.indexOf("/") + 1) : null,
          mobile: searchtypeValue == "3" ? searchInputValue : null
        }).subscribe({
          next: function next(data) {
            if (data.length == 0) {
              _this3.alertSerivce.showAlertError("لا يوجد قروض للانشاء", false);

              _this3.showLoader = false;
              return;
            } else if (data.length == 1) {
              _this3.IMakingLoanSearch = data[0];
              _this3.allApplications = data;
              _this3.isSearchForm = false;
              _this3.isMakingLoanForm = true;

              _this3.PatchingSpecificLoan(_this3.allApplications[0]);
            } else if (data.length >= 1) {
              _this3.allApplications = data;

              for (var i = 0; i < _this3.allApplications.length; i++) {
                _this3.allApplications[i].com_dec_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date(_this3.allApplications[i].com_dec_date), "yyyy-MM-dd");
              }

              _this3.isSearchForm = false;
              _this3.isGridForm = true;
            }

            _this3.showLoader = false;
          },
          error: function error(err) {
            console.log(err);

            _this3.alertSerivce.showAlertError(err.error, false);

            _this3.showLoader = false;
          }
        });
      }
    }
  }, {
    key: "PatchingSpecificLoan",
    value: function PatchingSpecificLoan(loanObject) {
      loanObject.funder_code == null ? null : this.checkFundingReference(loanObject.funder_code.toString());
      this.makingLoanForm.patchValue({
        client_name: loanObject.client_name,
        nation_id: loanObject.nation_id,
        aprv_am: loanObject.aprv_am,
        clnt_code: loanObject.clnt_code,
        loan_type_name: loanObject.loan_type_name,
        client_type_name: loanObject.client_type_name,
        loan_int_rt: loanObject.loan_int_rt,
        payments_shift: loanObject.payments_shift,
        com_dec_date: loanObject.com_dec_date,
        funder_code: loanObject.funder_code == null ? null : loanObject.funder_code.toString(),
        funding_reference_id: loanObject.funding_reference_id == null ? null : loanObject.funding_reference_id.toString()
      });
    }
  }, {
    key: "selectedApplication",
    value: function selectedApplication(loan, i) {
      this.PatchingSpecificLoan(this.allApplications.filter(function (x) {
        return x.application_key == loan.application_key;
      })[0]);
      this.IMakingLoanSearch = loan;
      this.isGridForm = false;
      this.isMakingLoanForm = true;
    }
  }, {
    key: "searchTypeChange",
    value: function searchTypeChange() {
      this.searchForm.patchValue({
        search_input: null
      });
      var searchInput = this.searchForm.controls["search_input"];
      var searchType = this.searchForm.controls["search_type"];

      if (searchType.value == "1") {
        searchInput.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
      } else if (searchType.value == "2") {
        searchInput.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("([0-9]{1,3})/([0-9]{1,7})$"), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
      } else if (searchType.value == "3") {
        searchInput.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern("^01[0125][0-9]{8}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]);
      }

      searchInput.updateValueAndValidity();
    }
  }, {
    key: "makingLoan",
    value: function makingLoan() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var _this4 = this;

        var sendingObject;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.isMakingLoanFormValid = true;

                if (this.makingLoanForm.valid) {
                  _context4.next = 4;
                  break;
                }

                _context4.next = 4;
                return this.ScrollingService.findInvalidControls(this.makingLoanForm);

              case 4:
                _context4.next = 6;
                return this.alertSerivce.SaveAlert();

              case 6:
                if (_context4.sent) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return");

              case 8:
                this.showLoader = true;
                sendingObject = {
                  application_key: this.IMakingLoanSearch.application_key.toString(),
                  dec_effective_date: this.makingLoanForm.controls["dec_effective_date"].value,
                  issuingbank: this.makingLoanForm.controls["issuingbank"].value.toString(),
                  bankSafe: this.makingLoanForm.controls["bankSafe"].value.toString(),
                  payments_shift: this.makingLoanForm.controls["payments_shift"].value == null ? null : this.makingLoanForm.controls["payments_shift"].value.toString(),
                  funder_code: this.makingLoanForm.controls["funder_code"].value,
                  funding_reference_id: this.makingLoanForm.controls["funding_reference_id"].value,
                  loan_vouch_char: this.makingLoanForm.controls["loan_vouch_char"].value,
                  uuc: this.IMakingLoanSearch.uuc
                };
                this.http.post(this.env.API_URL + "api/LoanApplications/MakingLoanInsert", {
                  loan_vouch_char: sendingObject.loan_vouch_char,
                  dec_effective_date: sendingObject.dec_effective_date,
                  bank_code: sendingObject.issuingbank,
                  inst_cur_bank: sendingObject.bankSafe,
                  payments_shift: sendingObject.payments_shift,
                  application_key: sendingObject.application_key,
                  funder_code: sendingObject.funder_code,
                  funding_reference_id: sendingObject.funding_reference_id,
                  uuc: sendingObject.uuc.toString()
                }).subscribe({
                  next: function next(data) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return this.alertSerivce.showAlertConfirm("لقد تم الانشاء بنجاح", true);

                            case 2:
                              this.showLoader = false;

                            case 3:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2, this);
                    }));
                  },
                  error: function error(err) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _context3.next = 2;
                              return this.alertSerivce.showAlertError(err.error, false);

                            case 2:
                              this.showLoader = false;

                            case 3:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3, this);
                    }));
                  }
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "backToSearchForm",
    value: function backToSearchForm() {
      this.showLoader = true;
      this.searchForm.patchValue({
        search_type: "1"
      });
      this.searchForm.patchValue({
        search_input: null
      });
      this.searchForm.patchValue({
        issuingbank: ""
      });
      this.searchForm.patchValue({
        bankSafe: ""
      });
      this.searchForm.patchValue({
        inssurance: ""
      });
      this.searchForm.patchValue({
        funder_code: ""
      });
      this.searchForm.patchValue({
        funding_reference_id: ""
      });
      this.searchForm.patchValue({
        loan_vouch_char: ""
      });
      this.searchTypeChange();
      this.allApplications = null;
      this.isMakingLoanForm = false;
      this.isGridForm = false;
      this.isMakingLoanFormValid = false;
      this.isSearchLoanFormValid = false;
      this.isSearchForm = true;
      this.showLoader = false;
    }
  }, {
    key: "backToGridForm",
    value: function backToGridForm() {
      if (this.allApplications.length > 1) {
        this.isMakingLoanForm = false;
        this.isGridForm = true;
        this.isMakingLoanFormValid = false;
      } else {
        this.backToSearchForm();
      }
    }
  }, {
    key: "registerBackButtonListener",
    value: function registerBackButtonListener() {
      var _this5 = this;

      this.backButtonListener = this.platform.backButton.subscribeWithPriority(10, function (next) {
        _this5.backButton();
      });
    }
  }, {
    key: "backButton",
    value: function backButton() {
      if (this.isSearchForm == true) {
        this.router.navigate(["/home"]);
      } else if (this.isMakingLoanForm) {
        this.backToSearchForm();
      }
    }
  }, {
    key: "enterClick",
    value: function enterClick(event) {
      if (event.key == "Enter") {
        this.clientSearch();
      }
    }
  }, {
    key: "GetSearchLoanForm",
    get: function get() {
      return this.searchForm.controls;
    }
  }, {
    key: "GetMakingLoanForm",
    get: function get() {
      return this.makingLoanForm.controls;
    }
  }]);

  return MakingLoanPerClientPage;
}();

MakingLoanPerClientPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__.MohassilAuthService
  }, {
    type: src_app_core_services_scrolling_service__WEBPACK_IMPORTED_MODULE_8__.ScrollingService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_9__.ReferencesService
  }];
};

MakingLoanPerClientPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: "app-making-loan-per-client",
  template: _making_loan_per_client_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_making_loan_per_client_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], MakingLoanPerClientPage);


/***/ }),

/***/ 19970:
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/making-loan-per-client/making-loan-per-client.page.scss?ngResource ***!
  \******************************************************************************************************/
/***/ (function(module) {

module.exports = ".divCenter {\n  justify-items: center;\n  text-align: center;\n}\n\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2luZy1sb2FuLXBlci1jbGllbnQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcbG9hbnNcXG1ha2luZy1sb2FuLXBlci1jbGllbnRcXG1ha2luZy1sb2FuLXBlci1jbGllbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQ0oiLCJmaWxlIjoibWFraW5nLWxvYW4tcGVyLWNsaWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2Q2VudGVyIHtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb3JtLWxhYmVsLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4iLCIuZGl2Q2VudGVyIHtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 75464:
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/making-loan-per-client/making-loan-per-client.page.html?ngResource ***!
  \******************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div class=\"col-md-12\">\n  <div class=\"card mb-2\">\n    <h4 class=\"divCenter\">انشاء القرض</h4>\n    <div class=\"card-body\">\n      <form\n        [formGroup]=\"searchForm\"\n        *ngIf=\"isSearchForm\"\n        (keyup)=\"enterClick($event)\"\n      >\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"form-group\">\n              <div>\n                <ion-select\n                  interface=\"popover\"\n                  formControlName=\"search_type\"\n                  placeholder=\"اختيار نوع البحث\"\n                  (ionChange)=\"searchTypeChange()\"\n                  class=\"subselect\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let type of searchTypes\"\n                    value=\"{{ type[1] }}\"\n                  >\n                    {{ type[0] }}\n                  </ion-select-option>\n                </ion-select>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-8\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <ion-input\n                  type=\"text\"\n                  class=\"form-control input\"\n                  #search_input\n                  formControlName=\"search_input\"\n                >\n                </ion-input>\n                <div\n                  class=\"text-danger input-validator\"\n                  *ngIf=\"isSearchLoanFormValid && (GetSearchLoanForm.search_input.errors?.['required'])\"\n                  role=\"alert\"\n                >\n                  يجب ادخال المعلومات\n                </div>\n                <div\n                  class=\"text-danger input-validator\"\n                  *ngIf=\"isSearchLoanFormValid && (GetSearchLoanForm.search_input.errors?.['pattern']) && this.searchForm.controls['search_type'].value == '1'\"\n                  role=\"alert\"\n                >\n                  الرقم القومي غير صحيح و يجب ان يتكون ١٤ رقم!\n                </div>\n                <div\n                  class=\"text-danger input-validator\"\n                  *ngIf=\"isSearchLoanFormValid && (GetSearchLoanForm.search_input.errors?.['pattern']) && this.searchForm.controls['search_type'].value == '2'\"\n                  role=\"alert\"\n                >\n                  كود العميل غير صحيح و يجب ان يتكون من فرع العميل / كود العميل!\n                </div>\n                <div\n                  class=\"text-danger input-validator\"\n                  *ngIf=\"isSearchLoanFormValid && (GetSearchLoanForm.search_input.errors?.['pattern']) && this.searchForm.controls['search_type'].value == '3'\"\n                  role=\"alert\"\n                >\n                  رقم المحمول يجب ان يكون أحد عشر رقم!\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-1\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <ion-button\n                  class=\"btn-block\"\n                  (click)=\"clientSearch()\"\n                  class=\"py-0\"\n                >\n                  بحث\n                </ion-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n\n      <form [formGroup]=\"gridForm\" *ngIf=\"isGridForm\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th class=\"text-center\">قيمة القرض</th>\n                      <th class=\"text-center\">نوع القرض</th>\n                      <th class=\"text-center\">تاريخ قرار اللجنة</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr\n                      *ngFor=\"let loan of allApplications; let i = index\"\n                      (click)=\"selectedApplication(loan,i)\"\n                    >\n                      <td class=\"text-center\">{{ loan.req_am }}</td>\n                      <td class=\"text-center\">{{ loan.loan_type_name }}</td>\n                      <td class=\"text-center\">{{ loan.com_dec_date }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex justify-content-center mt-2\">\n          <ion-button (click)=\"backToSearchForm()\" color=\"danger\"\n            >رجوع</ion-button\n          >\n        </div>\n      </form>\n\n      <form [formGroup]=\"makingLoanForm\" *ngIf=\"isMakingLoanForm\">\n        <div class=\"row\">\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> اسم العميل </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"client_name\"\n                [disabled]=\"true\"\n              ></ion-input>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> الرقم القومي </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"nation_id\"\n                [disabled]=\"true\"\n              ></ion-input>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-2\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> كود العميل </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"clnt_code\"\n                [disabled]=\"true\"\n              ></ion-input>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-2\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> نوع العميل </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"client_type_name\"\n                [disabled]=\"true\"\n              ></ion-input>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> نوع القرض </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"loan_type_name\"\n                [disabled]=\"true\"\n              ></ion-input>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-2\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> مبلغ القرض </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"req_am\"\n                [disabled]=\"true\"\n              ></ion-input>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-2\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> الفائدة </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"loan_int_rt\"\n                [disabled]=\"true\"\n              ></ion-input>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-2\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> عدد ايام الترحيل </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"payments_shift\"\n                [disabled]=\"true\"\n              ></ion-input>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-2\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> تاريخ قرار اللجنة </ion-label>\n              <ngx-datepicker\n                [parentForm]=\"makingLoanForm\"\n                parentFormControllerName=\"com_dec_date\"\n                [disabledValue]=\"true\"\n              ></ngx-datepicker>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\"\n                >بنك الإصدار</ion-label\n              >\n              <ion-select\n                interface=\"popover\"\n                formControlName=\"issuingbank\"\n                class=\"subselect\"\n                placeholder=\"بنك الاصدار\"\n              >\n                <ion-select-option\n                  *ngFor=\"let bank of IIssuingBank\"\n                  [value]=\"bank.bank_code\"\n                >\n                  {{bank.bank_name}}\n                </ion-select-option>\n              </ion-select>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isMakingLoanFormValid && (GetMakingLoanForm.issuingbank.errors?.['required'])\"\n                role=\"alert\"\n              >\n                يجب اختيار بنك الاصدار\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\"\n                >خزينة مستندات السداد</ion-label\n              >\n              <ion-select\n                interface=\"popover\"\n                formControlName=\"bankSafe\"\n                class=\"subselect\"\n                placeholder=\"خزينة مستندات السداد\"\n              >\n                <ion-select-option\n                  *ngFor=\"let bank of IBankSafe\"\n                  [value]=\"bank.bank_code\"\n                >\n                  {{bank.bank_name}}\n                </ion-select-option>\n              </ion-select>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isMakingLoanFormValid && (GetMakingLoanForm.bankSafe.errors?.['required'])\"\n                role=\"alert\"\n              >\n                يجب اختيار خزينة مستندات السداد\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\">عقد التأمين</ion-label>\n              <ion-select\n                interface=\"popover\"\n                formControlName=\"inssurance\"\n                class=\"subselect\"\n                placeholder=\"عقد التأمين\"\n              >\n                <ion-select-option\n                  *ngFor=\"let ins of IInsurance\"\n                  [value]=\"ins.contract_id\"\n                >\n                  {{ins.contract_description}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\">\n                مصدر التمويل\n              </ion-label>\n              <ion-select\n                interface=\"popover\"\n                placeholder=\"مصدر التمويل\"\n                formControlName=\"funder_code\"\n                class=\"subselect\"\n                (ionChange)=\"funderCodeChange($event)\"\n              >\n                <ion-select-option\n                  *ngFor=\"let funder of Funders\"\n                  [value]=\"funder.funder_code\"\n                >\n                  {{funder.funder_name}}\n                </ion-select-option>\n              </ion-select>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isMakingLoanFormValid && (GetMakingLoanForm.funder_code.errors?.['required'])\"\n                role=\"alert\"\n              >\n                يجب اختيار مصدر التمويل\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-4\" *ngIf=\"isIscore_external_funding\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\">\n                كود التمويل\n              </ion-label>\n              <ion-select\n                interface=\"popover\"\n                placeholder=\"كود التمويل\"\n                formControlName=\"funding_reference_id\"\n                class=\"subselect\"\n              >\n                <ion-select-option\n                  *ngFor=\"let ref of FundingRef\"\n                  [value]=\"ref.funding_reference_id\"\n                >\n                  {{ref.funding_reference_code}}\n                </ion-select-option>\n              </ion-select>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isMakingLoanFormValid && (GetMakingLoanForm.funding_reference_id.errors?.['required'])\"\n                role=\"alert\"\n              >\n                يجب اختيار كود التمويل\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-2\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> رقم الشيك يدوي </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"loan_vouch_char\"\n              ></ion-input>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-2\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> تاريخ انشاء القرض </ion-label>\n              <ngx-datepicker\n                [parentForm]=\"makingLoanForm\"\n                parentFormControllerName=\"dec_effective_date\"\n                [disabledValue]=\"true\"\n              ></ngx-datepicker>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex justify-content-center mt-2\">\n          <ion-button (click)=\"backToGridForm()\" color=\"danger\"\n            >رجوع</ion-button\n          >\n          <ion-button (click)=\"makingLoan()\">انشاء القرض</ion-button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_making-loan-per-client_making-loan-per-client_module_ts.js.map