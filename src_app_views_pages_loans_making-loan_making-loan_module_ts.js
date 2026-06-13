"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_making-loan_making-loan_module_ts"],{

/***/ 38588:
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/loans/making-loan/making-loan-routing.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakingLoanPageRoutingModule": function() { return /* binding */ MakingLoanPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _making_loan_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./making-loan.page */ 17296);






var routes = [{
  path: '',
  component: _making_loan_page__WEBPACK_IMPORTED_MODULE_2__.MakingLoanPage
}];

var MakingLoanPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MakingLoanPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MakingLoanPageRoutingModule);
});

MakingLoanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], MakingLoanPageRoutingModule);


/***/ }),

/***/ 46906:
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/loans/making-loan/making-loan.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakingLoanPageModule": function() { return /* binding */ MakingLoanPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _making_loan_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./making-loan-routing.module */ 38588);
/* harmony import */ var _making_loan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./making-loan.page */ 17296);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var MakingLoanPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function MakingLoanPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MakingLoanPageModule);
});

MakingLoanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _making_loan_routing_module__WEBPACK_IMPORTED_MODULE_2__.MakingLoanPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_making_loan_page__WEBPACK_IMPORTED_MODULE_3__.MakingLoanPage]
})], MakingLoanPageModule);


/***/ }),

/***/ 17296:
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/loans/making-loan/making-loan.page.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakingLoanPage": function() { return /* binding */ MakingLoanPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _making_loan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./making-loan.page.html?ngResource */ 386);
/* harmony import */ var _making_loan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./making-loan.page.scss?ngResource */ 86774);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);
/* harmony import */ var src_app_core_services_scrolling_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/scrolling.service */ 68931);
/* harmony import */ var src_app_core_services_officer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/officer.service */ 84598);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);





















var MakingLoanPage = /*#__PURE__*/function () {
  function MakingLoanPage(formBuilder, env, alertService, http, authService, datepipe, alertController, router, platform, sortingService, ScrollingService, cdref, officerService, loanService, referencesService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MakingLoanPage);

    this.formBuilder = formBuilder;
    this.env = env;
    this.alertService = alertService;
    this.http = http;
    this.authService = authService;
    this.datepipe = datepipe;
    this.alertController = alertController;
    this.router = router;
    this.platform = platform;
    this.sortingService = sortingService;
    this.ScrollingService = ScrollingService;
    this.cdref = cdref;
    this.officerService = officerService;
    this.loanService = loanService;
    this.referencesService = referencesService;
    this.ResultArray = []; // this an array to show the result of Creating Loans

    this.checkboxes = [];
    this.SelectedApplicationKeys = [];
    this.DefaultOfficerDropDown = "0";
    this.DefaultLoanTypeDropDown = "0";
    this.DefaultBranchDropDown = "0";
    this.showLoader = false;
    this.ResultModal = false;
    this.selectDisbOption = false;
    this.cashout_code = null;
    this.downPaymentCounter = 0;
    this.isLoanAppsHaveDownPayment = false; //#endregion
    //#region Forms

    this.isSearchForm = true;
    this.isLoanForm = false;
    this.isCreateLoanForm = false;
    this.isCreateLoanFormValid = false;
    this.isSearchFormValid = true;
    this.SearchForm = this.formBuilder.group({
      officer: [""],
      start_date: [this.datepipe.transform(new Date(), "yyyy-MM-01"), [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern("((?:19|20)[0-9][0-9])-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])"), this.noWhitespaceValidator]],
      end_date: [this.datepipe.transform(new Date(), "yyyy-MM-dd"), [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern("((?:19|20)[0-9][0-9])-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])"), this.noWhitespaceValidator]],
      loan_type: [""]
    });
    this.CreateLoanForm = this.formBuilder.group({
      issuingbank: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      selectSafe: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      inssurance: [null],
      dec_effective_date: [this.datepipe.transform(new Date(), "yyyy-MM-dd"), [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern("((?:19|20)[0-9][0-9])-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])"), this.noWhitespaceValidator]],
      funder_code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      funding_reference_id: [""],
      disb_method: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
    });
    this.LoanForm = this.formBuilder.group({
      loan_vouch: [null],
      checkBox: [false]
    });
  } //#endregion


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MakingLoanPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
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
                this.officerService.getAllOfficers().subscribe(function (officers) {
                  return _this.IOfficer = officers;
                });
                _context.next = 6;
                return this.loanService.getAllActiveLoanTypes();

              case 6:
                this.LoanTypeRefs = _context.sent;
                _context.next = 9;
                return this.referencesService.getAllIssuingBanks();

              case 9:
                this.IIssuingBank = _context.sent;
                _context.next = 12;
                return this.referencesService.getAllBanksSafe();

              case 12:
                this.IBankSafe = _context.sent;
                _context.next = 15;
                return this.referencesService.getAllInsurances();

              case 15:
                this.IInsurance = _context.sent;
                _context.next = 18;
                return this.referencesService.getAllFunders();

              case 18:
                this.Funders = _context.sent;
                _context.next = 21;
                return this.referencesService.getDisbMethods();

              case 21:
                this.disbMethods = _context.sent.filter(function (x) {
                  return x.ref_code !== "3";
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      //Handling The BackButton in mobile
      this.backButtonListener.unsubscribe();
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      this.cdref.detectChanges();
    }
  }, {
    key: "GetFundingReference",
    value: function GetFundingReference($event) {
      var _this2 = this;

      if ($event.detail.value != "") {
        this.showLoader = true;
        this.CreateLoanForm.patchValue({
          funding_reference_id: null
        });
        this.http.post(this.env.API_URL + "api/LoanApplications/GetFundingReference", {
          org_code: this.org_code_user_info,
          funder_code: $event.detail.value
        }).subscribe({
          next: function next(data) {
            console.log(data);
            _this2.FundingRef = data["fundingRefs"];
            _this2.iscore_external_funding = data["iscore_external_funding"];

            if (_this2.iscore_external_funding == "1") {
              _this2.isIscore_external_funding = true;

              _this2.CreateLoanForm.controls["funding_reference_id"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]);
            } else {
              _this2.isIscore_external_funding = false;

              _this2.CreateLoanForm.controls["funding_reference_id"].clearValidators();
            }

            _this2.CreateLoanForm.controls["funding_reference_id"].updateValueAndValidity();

            _this2.showLoader = false;
          },
          error: function error(err) {
            console.log(err);
            _this2.showLoader = false;
          }
        });
      }
    }
  }, {
    key: "LoanSearch",
    value: function LoanSearch() {
      var _this3 = this;

      if (this.SearchForm.valid == true) {
        this.showLoader = true;

        if (this.SearchForm.value.loan_type == "0") {
          this.all_loan_type = "1";
          this.loan_type = null;
        } else {
          this.all_loan_type = "0";
          this.loan_type = this.SearchForm.value.loan_type;
        }

        this.officer_key = this.SearchForm.value.officer;
        this.start_date = this.SearchForm.value.start_date;
        this.end_date = this.SearchForm.value.end_date;
        this.http.post(this.env.API_URL + "api/LoanApplications/GetMakingLoan", {
          officer_key: this.officer_key,
          all_loan_type: this.all_loan_type,
          loan_type: this.loan_type,
          com_dec_date_from: this.start_date,
          com_dec_date_to: this.end_date
        }).subscribe({
          next: function next(data) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
              var i;
              return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.IMakingLoanSearch = data;
                      this.downPaymentCheck();
                      console.log("IMakingLoanSearch: ", this.IMakingLoanSearch);

                      for (i = 0; i < this.IMakingLoanSearch.length;) {
                        this.IMakingLoanSearch[i].aprv_am = (0,_angular_common__WEBPACK_IMPORTED_MODULE_15__.formatNumber)(Number(parseInt(this.IMakingLoanSearch[i].aprv_am)), "en-US", "1.0-0");
                        this.IMakingLoanSearch[i].com_dec_date = this.datepipe.transform(this.IMakingLoanSearch[i].com_dec_date, "yyyy-MM-dd");
                        i++;
                      }

                      if (!(this.IMakingLoanSearch.length == 0)) {
                        _context2.next = 10;
                        break;
                      }

                      _context2.next = 7;
                      return this.alertService.showAlertError("لا يوجد قروض للانشاء", false);

                    case 7:
                      this.showLoader = false;
                      _context2.next = 14;
                      break;

                    case 10:
                      this.isSearchForm = false;
                      this.isLoanForm = true;
                      this.isCreateLoanForm = true;
                      this.showLoader = false;

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          },
          error: function error(err) {
            _this3.showLoader = false;
          }
        });
      }
    }
  }, {
    key: "submit",
    value: function submit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var _this4 = this;

        var _loop, i;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.isCreateLoanFormValid = true;

                if (!(this.CreateLoanForm.valid == true)) {
                  _context3.next = 20;
                  break;
                }

                _context3.next = 4;
                return this.alertService.SaveAlert("هل أنت متأكد أنك تريد تنفيذ هذة العملية؟ ");

              case 4:
                if (!_context3.sent) {
                  _context3.next = 18;
                  break;
                }

                this.isCreateLoanFormValid = true;
                this.ResultArray = [];
                this.SelectedApplicationKeys = this.getDistinctValues(this.getCheckedCheckboxes(), "application_key");

                if (!(this.CreateLoanForm.valid == true)) {
                  _context3.next = 18;
                  break;
                }

                if (!(this.SelectedApplicationKeys.length > 0)) {
                  _context3.next = 15;
                  break;
                }

                this.InfoOfEveryApplication = this.SelectedApplicationKeys.map(function (application_key) {
                  return _this4.IMakingLoanSearch.find(function (x) {
                    return x.application_key === application_key;
                  });
                });
                this.showLoader = true;

                if (this.CreateLoanForm.value.inssurance != null) {
                  _loop = function _loop(i) {
                    var client_key = _this4.InfoOfEveryApplication[i].client_key.toString();

                    var application_key = _this4.InfoOfEveryApplication[i].application_key.toString();

                    var client_type_code = _this4.InfoOfEveryApplication[i].client_type_code.toString();

                    var contract_id = _this4.CreateLoanForm.value.inssurance.toString();

                    _this4.http.post(_this4.env.API_URL + "api/Insurance/CheckSuitableContract", {
                      client_key: client_key,
                      application_key: application_key,
                      client_type_code: client_type_code,
                      contract_id: contract_id
                    }).subscribe({
                      next: function next(data) {
                        if (i == _this4.InfoOfEveryApplication.length - 1) {
                          _this4.CreateLoan(_this4.InfoOfEveryApplication);
                        }
                      },
                      error: function error(err) {
                        _this4.PushMethodIntoResultArray(_this4.InfoOfEveryApplication[i].client_name, _this4.InfoOfEveryApplication[i].clnt_code.toString(), "فشل", err.error);

                        if (i == _this4.InfoOfEveryApplication.length - 1) {
                          _this4.ResultModal = true;
                        }

                        _this4.showLoader = false;
                      }
                    });
                  };

                  for (i = 0; i < this.InfoOfEveryApplication.length; i++) {
                    _loop(i);
                  }
                } else if (this.CreateLoanForm.value.inssurance == null) {
                  this.CreateLoan(this.InfoOfEveryApplication);
                }

                _context3.next = 18;
                break;

              case 15:
                if (!(this.SelectedApplicationKeys.length == 0)) {
                  _context3.next = 18;
                  break;
                }

                _context3.next = 18;
                return this.alertService.showAlertError("برجاء اختيار القروض", false);

              case 18:
                _context3.next = 21;
                break;

              case 20:
                this.ScrollingService.findInvalidControls(this.CreateLoanForm);

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "CreateLoan",
    value: function CreateLoan(InfoOfEveryApplication) {
      var _this5 = this;

      this.showLoader = true;

      var _loop2 = function _loop2(index) {
        var bankSafe = _this5.CreateLoanForm.value.selectSafe;
        var issuingbank = _this5.CreateLoanForm.value.issuingbank;
        var dec_effective_date = _this5.CreateLoanForm.value.dec_effective_date;
        var loan_vouch_char = _this5.InfoOfEveryApplication[index].loan_vouch;
        var funder_code = _this5.CreateLoanForm.controls["funder_code"].value;
        var funding_reference_id = _this5.CreateLoanForm.controls["funding_reference_id"].value;
        var disb_method = _this5.CreateLoanForm.controls["disb_method"].value;

        if (loan_vouch_char != null) {
          loan_vouch_char = loan_vouch_char.toString();
        }

        _this5.http.post(_this5.env.API_URL + "api/LoanApplications/MakingLoanInsert", {
          loan_vouch_char: loan_vouch_char,
          dec_effective_date: dec_effective_date,
          bank_code: issuingbank.toString(),
          inst_cur_bank: bankSafe.toString(),
          payments_shift: InfoOfEveryApplication[index].payments_shift.toString(),
          application_key: InfoOfEveryApplication[index].application_key.toString(),
          funder_code: funder_code,
          funding_reference_id: funding_reference_id,
          uuc: InfoOfEveryApplication[index].uuc.toString(),
          cashout_code: _this5.cashout_code ? _this5.cashout_code.toString() : null,
          disb_method: disb_method.toString()
        }).subscribe({
          next: function next(data) {
            _this5.PushMethodIntoResultArray(InfoOfEveryApplication[index].client_name, InfoOfEveryApplication[index].clnt_code.toString(), "نجح", "لا يوجد");

            if (index == InfoOfEveryApplication.length - 1) {
              _this5.ResultModal = true;
              _this5.showLoader = false;
            }
          },
          error: function error(err) {
            _this5.PushMethodIntoResultArray(InfoOfEveryApplication[index].client_name, InfoOfEveryApplication[index].clnt_code.toString(), "فشل", err.error);

            if (index == InfoOfEveryApplication.length - 1) {
              _this5.ResultModal = true;
              _this5.showLoader = false;
            }
          }
        });
      };

      for (var index = 0; index < this.InfoOfEveryApplication.length; index++) {
        _loop2(index);
      }
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.ResultModal = false;
      this.LoanSearch();
      this.LoanForm.patchValue({
        checkBox: false
      });
      this.LoanForm.patchValue({
        loan_vouch: null
      });
    } // Pushes the client details into the ResultArray

  }, {
    key: "PushMethodIntoResultArray",
    value: function PushMethodIntoResultArray(client_name, client_code, status, reason) {
      this.ResultArray.push({
        client_name: client_name,
        clnt_code: client_code,
        status: status,
        reason: reason
      });
    }
  }, {
    key: "BackToSearchForm",
    value: function BackToSearchForm() {
      this.IMakingLoanSearch = [];
      this.isCreateLoanFormValid = false;
      this.LoanForm.patchValue({
        checkBox: false
      });
      this.LoanForm.patchValue({
        loan_vouch: null
      });
      this.isLoanForm = false;
      this.isCreateLoanForm = false;
      this.isSearchForm = true; //this.cashout_code = null;

      this.downPaymentCounter = 0;
    }
  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(event, loan) {
      if (event.target.checked) {
        loan.isChecked = true;
        this.checkboxes.push(loan);
      } else {
        var index = this.checkboxes.indexOf(loan);

        if (index > -1) {
          loan.isChecked = false;
          this.checkboxes.splice(index, 1);
        }
      }
    }
  }, {
    key: "getCheckedCheckboxes",
    value: function getCheckedCheckboxes() {
      return this.checkboxes.filter(function (loan) {
        return loan && loan.isChecked;
      }), this.checkboxes.filter(function (loan) {
        return loan && loan.isChecked;
      });
    }
  }, {
    key: "getDistinctValues",
    value: function getDistinctValues(data, distinct_name) {
      var values = data.map(function (item) {
        return item[distinct_name];
      });
      var distinctValues = values.filter(function (value, index, array) {
        return array.indexOf(value) === index;
      });
      return distinctValues;
    }
  }, {
    key: "registerBackButtonListener",
    value: function registerBackButtonListener() {
      var _this6 = this;

      this.backButtonListener = this.platform.backButton.subscribeWithPriority(10, function (next) {
        _this6.backButton();
      });
    }
  }, {
    key: "backButton",
    value: function backButton() {
      if (this.isSearchForm == true) {
        this.router.navigate(["/home"]);
      } else if (this.isCreateLoanForm == true && this.isLoanForm == true) {
        this.BackToSearchForm();
      }
    }
  }, {
    key: "GetCreateLoanForm",
    get: function get() {
      return this.CreateLoanForm.controls;
    }
  }, {
    key: "noWhitespaceValidator",
    value: function noWhitespaceValidator(control) {
      var isWhitespace = (control.value || "").toString().trim().length === 0;
      var isValid = !isWhitespace;
      return isValid ? null : {
        whitespace: true
      };
    }
  }, {
    key: "sortingTable",
    value: function sortingTable(data, param) {
      this.sortingService.sortByParameter(data, param);
    }
  }, {
    key: "selectBank",
    value: function selectBank(ev) {
      var curBank = ev.target.value;
      this.cashout_code = this.IIssuingBank.find(function (x) {
        return x.bank_code === curBank;
      }).cashout_code;

      if (!this.cashout_code) {
        this.selectDisbOption = true;
        this.CreateLoanForm.controls.disb_method.reset();
      } else {
        this.selectDisbOption = false;
        this.CreateLoanForm.patchValue({
          disb_method: "3"
        });
      }
    }
  }, {
    key: "downPaymentCheck",
    value: function downPaymentCheck() {
      var _this7 = this;

      this.IMakingLoanSearch.forEach(function (app) {
        if (app.down_payment != 0) {
          _this7.downPaymentCounter++;
        }
      });

      if (this.downPaymentCounter != 0) {
        //ther is no loanApp's have dp
        this.isLoanAppsHaveDownPayment = true;
      } else {
        this.isLoanAppsHaveDownPayment = false;
      }
    }
  }]);

  return MakingLoanPage;
}();

MakingLoanPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__.EnvService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__.MohassilAuthService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.AlertController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_8__.sortingService
  }, {
    type: src_app_core_services_scrolling_service__WEBPACK_IMPORTED_MODULE_9__.ScrollingService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef
  }, {
    type: src_app_core_services_officer_service__WEBPACK_IMPORTED_MODULE_10__.OfficerService
  }, {
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_11__.LoansService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_12__.ReferencesService
  }];
};

MakingLoanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
  selector: "app-making-loan",
  template: _making_loan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_making_loan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], MakingLoanPage);


/***/ }),

/***/ 86774:
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/loans/making-loan/making-loan.page.scss?ngResource ***!
  \********************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.close-icon {\n  float: left;\n  height: 1em;\n  width: 1em;\n}\n\nion-row:not(:first-child) {\n  border-top: 1px solid #ccc;\n}\n\nion-col {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\nion-label {\n  margin: 0;\n}\n\nion-button {\n  --border-radius: 50%;\n  --background: #f5f5f5;\n  --background-activated: #e0e0e0;\n}\n\nion-toolbar {\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n}\n\nion-title {\n  color: #333;\n  font-size: 1.2em;\n  font-weight: bold;\n}\n\nion-modal {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 20px;\n  --height: 60%;\n  --width: 60%;\n}\n\nion-header {\n  position: relative;\n}\n\n.sortingCol {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2luZy1sb2FuLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGxvYW5zXFxtYWtpbmctbG9hblxcbWFraW5nLWxvYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQUo7O0FESUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNERjs7QURJQTtFQUNFLDBCQUFBO0FDREY7O0FESUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtNQUFBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxTQUFBO0FDREY7O0FESUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7TUFBQSx1QkFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNERjs7QURHQTtFQUNFLGtCQUFBO0FDQUY7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoibWFraW5nLWxvYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY2xvc2UtaWNvbiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiAxZW07XHJcbiAgd2lkdGg6IDFlbTtcclxufVxyXG5cclxuaW9uLXJvdzpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbmlvbi1jb2wge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjZTBlMGUwO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1tb2RhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgLS1oZWlnaHQ6IDYwJTtcclxuICAtLXdpZHRoOiA2MCU7XHJcbn1cclxuaW9uLWhlYWRlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnNvcnRpbmdDb2x7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn0iLCIuZm9ybS1sYWJlbC1yZXF1aXJlZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIipcIjtcbiAgY29sb3I6ICNmZjMzNjYgIWltcG9ydGFudDtcbn1cblxuLmNsb3NlLWljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiAxZW07XG59XG5cbmlvbi1yb3c6bm90KDpmaXJzdC1jaGlsZCkge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbn1cblxuaW9uLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbjogMDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNlMGUwZTA7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLW1vZGFsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIC0taGVpZ2h0OiA2MCU7XG4gIC0td2lkdGg6IDYwJTtcbn1cblxuaW9uLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNvcnRpbmdDb2wge1xuICB3aWR0aDogNTBweDtcbn0iXX0= */";

/***/ }),

/***/ 386:
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/loans/making-loan/making-loan.page.html?ngResource ***!
  \********************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div\n  class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\"\n>\n  <div>\n    <h4 class=\"mr-1 mb-md-0\">انشاء القرض</h4>\n  </div>\n</div>\n<div class=\"col-md-12 grid-margin\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <form [formGroup]=\"SearchForm\" *ngIf=\"isSearchForm\">\n        <div class=\"row\">\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> المندوب </ion-label>\n              <ion-select\n                interface=\"popover\"\n                formControlName=\"officer\"\n                class=\"subselect\"\n                placeholder=\"ألمندوب\"\n                [(ngModel)]=\"DefaultOfficerDropDown\"\n              >\n                <ion-select-option value=\"0\" selected\n                  >كل المندوبين</ion-select-option\n                >\n                <ion-select-option\n                  *ngFor=\"let officer of IOfficer\"\n                  [value]=\"officer.officer_key\"\n                >\n                  {{officer.officer_name}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> القرار من تاريخ </ion-label>\n              <ngx-datepicker\n                [parentForm]=\"SearchForm\"\n                parentFormControllerName=\"start_date\"\n              ></ngx-datepicker>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isSearchFormValid && SearchForm.controls['start_date'].hasError('pattern')\"\n                role=\"alert\"\n              >\n                يجب كتابة التاريخ YYYY-MM-DD\n              </div>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isSearchFormValid && (SearchForm.controls['start_date'].hasError('whitespace'))\"\n                role=\"alert\"\n              >\n                يجب ادخال التاريخ\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> الي تاريخ </ion-label>\n              <ngx-datepicker\n                [parentForm]=\"SearchForm\"\n                parentFormControllerName=\"end_date\"\n              ></ngx-datepicker>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isSearchFormValid && SearchForm.controls['end_date'].hasError('pattern')\"\n                role=\"alert\"\n              >\n                يجب كتابة التاريخ YYYY-MM-DD\n              </div>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isSearchFormValid && (SearchForm.controls['end_date'].hasError('whitespace'))\"\n                role=\"alert\"\n              >\n                يجب ادخال التاريخ\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> نوع القرض </ion-label>\n              <ion-select\n                interface=\"popover\"\n                formControlName=\"loan_type\"\n                class=\"subselect\"\n                [(ngModel)]=\"DefaultLoanTypeDropDown\"\n              >\n                <ion-select-option value=\"0\">كل القروض</ion-select-option>\n                <ion-select-option\n                  *ngFor=\"let type of LoanTypeRefs\"\n                  [value]=\"type.loan_type_code\"\n                >\n                  {{type.loan_type_name}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex justify-content-center mt-2\">\n          <ion-button (click)=\"LoanSearch()\">القروض</ion-button>\n        </div>\n      </form>\n      <form\n        [formGroup]=\"CreateLoanForm\"\n        *ngIf=\"isCreateLoanForm\"\n        id=\"CreateLoanForm\"\n      >\n        <div class=\"row\">\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\"\n                >بنك الإصدار</ion-label\n              >\n              <ion-select\n                interface=\"popover\"\n                formControlName=\"issuingbank\"\n                class=\"subselect\"\n                placeholder=\"بنك الاصدار\"\n                (ionChange)=\"selectBank($event)\"\n              >\n                <ion-select-option\n                  *ngFor=\"let bank of IIssuingBank\"\n                  [value]=\"bank.bank_code\"\n                >\n                  {{bank.bank_name}}\n                </ion-select-option>\n              </ion-select>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isCreateLoanFormValid && (GetCreateLoanForm.issuingbank.errors?.['required'])\"\n                role=\"alert\"\n              >\n                يجب اختيار بنك الاصدار\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-4\" *ngIf=\"selectDisbOption\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\">\n                طريقة الصرف\n              </ion-label>\n              <ion-select\n                interface=\"popover\"\n                placeholder=\"طريقة الصرف\"\n                formControlName=\"disb_method\"\n                class=\"subselect\"\n              >\n                <ion-select-option\n                  *ngFor=\"let ref of disbMethods\"\n                  [value]=\"ref.ref_code\"\n                >\n                  {{ref.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isCreateLoanFormValid && (GetCreateLoanForm.disb_method.errors?.['required'])\"\n                role=\"alert\"\n              >\n                يجب اختيار طريقة الصرف\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\"\n                >خزينة مستندات السداد</ion-label\n              >\n              <ion-select\n                interface=\"popover\"\n                formControlName=\"selectSafe\"\n                class=\"subselect\"\n                placeholder=\"خزينة مستندات السداد\"\n              >\n                <ion-select-option\n                  *ngFor=\"let bank of IBankSafe\"\n                  [value]=\"bank.bank_code\"\n                >\n                  {{bank.bank_name}}\n                </ion-select-option>\n              </ion-select>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isCreateLoanFormValid && (GetCreateLoanForm.selectSafe.errors?.['required'])\"\n                role=\"alert\"\n              >\n                يجب اختيار خزينة مستندات السداد\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\">عقد التأمين</ion-label>\n              <ion-select\n                interface=\"popover\"\n                formControlName=\"inssurance\"\n                class=\"subselect\"\n                placeholder=\"عقد التأمين\"\n              >\n                <ion-select-option\n                  *ngFor=\"let ins of IInsurance\"\n                  [value]=\"ins.contract_id\"\n                >\n                  {{ins.contract_description}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\">\n                مصدر التمويل\n              </ion-label>\n              <ion-select\n                interface=\"popover\"\n                placeholder=\"مصدر التمويل\"\n                formControlName=\"funder_code\"\n                class=\"subselect\"\n                (ionChange)=\"GetFundingReference($event)\"\n              >\n                <ion-select-option\n                  *ngFor=\"let funder of Funders\"\n                  [value]=\"funder.funder_code\"\n                >\n                  {{funder.funder_name}}\n                </ion-select-option>\n              </ion-select>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isCreateLoanFormValid && (GetCreateLoanForm.funder_code.errors?.['required'])\"\n                role=\"alert\"\n              >\n                يجب اختيار مصدر التمويل\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-4\" *ngIf=\"isIscore_external_funding\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\">\n                كود التمويل\n              </ion-label>\n              <ion-select\n                interface=\"popover\"\n                placeholder=\"كود التمويل\"\n                formControlName=\"funding_reference_id\"\n                class=\"subselect\"\n              >\n                <ion-select-option\n                  *ngFor=\"let ref of FundingRef\"\n                  [value]=\"ref.funding_reference_id\"\n                >\n                  {{ref.funding_reference_code}}\n                </ion-select-option>\n              </ion-select>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isCreateLoanFormValid && (GetCreateLoanForm.funding_reference_id.errors?.['required'])\"\n                role=\"alert\"\n              >\n                يجب اختيار كود التمويل\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> تاريخ انشاء القرض </ion-label>\n              <ngx-datepicker\n                [parentForm]=\"CreateLoanForm\"\n                parentFormControllerName=\"dec_effective_date\"\n              ></ngx-datepicker>\n            </div>\n          </div>\n        </div>\n      </form>\n      <form [formGroup]=\"LoanForm\" *ngIf=\"isLoanForm\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <!-- <th class=\"text-center\">اختار</th> -->\n                      <th class=\"text-center sortingCol\">\n                        <ion-icon\n                          color=\"success\"\n                          name=\"swap-vertical-outline\"\n                        ></ion-icon>\n                      </th>\n                      <th\n                        class=\"text-center\"\n                        (click)=\"sortingTable(IMakingLoanSearch , 'clnt_code')\"\n                      >\n                        كود العميل\n                      </th>\n                      <th class=\"text-center\">الرقم القومي</th>\n                      <th\n                        class=\"text-center\"\n                        (click)=\"sortingTable(IMakingLoanSearch , 'client_name')\"\n                      >\n                        اسم العميل\n                      </th>\n                      <th\n                        class=\"text-center\"\n                        (click)=\"sortingTable(IMakingLoanSearch , 'aprv_am')\"\n                      >\n                        القرض المطلوب\n                      </th>\n                      <th\n                        class=\"text-center\"\n                        (click)=\"sortingTable(IMakingLoanSearch , 'aprv_no')\"\n                      >\n                        عدد الاقساط\n                      </th>\n                      <th\n                        class=\"text-center\"\n                        (click)=\"sortingTable(IMakingLoanSearch , 'client_type_name')\"\n                      >\n                        نوع الإقراض\n                      </th>\n                      <th\n                        class=\"text-center\"\n                        (click)=\"sortingTable(IMakingLoanSearch , 'loan_type_name')\"\n                      >\n                        نوع القرض\n                      </th>\n                      <th\n                        class=\"text-center\"\n                        (click)=\"sortingTable(IMakingLoanSearch , 'loan_int_rt')\"\n                      >\n                        نسبة الفائدة\n                      </th>\n                      <th class=\"text-center\" *ngIf=\"isLoanAppsHaveDownPayment\">\n                        الدفعة المستقطعة\n                      </th>\n                      <th\n                        class=\"text-center\"\n                        (click)=\"sortingTable(IMakingLoanSearch , 'payments_shift')\"\n                      >\n                        عدد ايام الترحيل\n                      </th>\n                      <th\n                        class=\"text-center\"\n                        (click)=\"sortingTable(IMakingLoanSearch , 'com_dec_date')\"\n                      >\n                        تاريخ القرار\n                      </th>\n                      <th class=\"text-center\">ادخال رقم الشيك يدوي</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let loan of IMakingLoanSearch\">\n                      <td>\n                        <ion-checkbox\n                          type=\"checkbox\"\n                          formControlName=\"checkBox\"\n                          (ionChange)=\"onCheckboxChange($event, loan)\"\n                        ></ion-checkbox>\n                      </td>\n                      <td class=\"text-center\">{{ loan.clnt_code }}</td>\n                      <td class=\"text-center\">{{ loan.nation_id }}</td>\n                      <td class=\"text-center\">{{ loan.client_name }}</td>\n                      <td class=\"text-center\">{{ loan.aprv_am }}</td>\n                      <td class=\"text-center\">{{ loan.aprv_no }}</td>\n                      <td class=\"text-center\">{{ loan.client_type_name }}</td>\n                      <td class=\"text-center\">{{ loan.loan_type_name }}</td>\n                      <td class=\"text-center\">{{ loan.loan_int_rt }}</td>\n                      <td class=\"text-center\" *ngIf=\"isLoanAppsHaveDownPayment\">\n                        {{ loan.downPaymentFullDesc }}\n                      </td>\n                      <td class=\"text-center\">\n                        <ion-input\n                          type=\"number\"\n                          [(ngModel)]=\"loan.payments_shift\"\n                          [ngModelOptions]=\"{standalone: true}\"\n                        ></ion-input>\n                      </td>\n                      <td class=\"text-center\">{{ loan.com_dec_date }}</td>\n                      <td class=\"text-center\">\n                        <ion-input\n                          type=\"number\"\n                          [(ngModel)]=\"loan.loan_vouch\"\n                          [ngModelOptions]=\"{standalone: true}\"\n                        ></ion-input>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex justify-content-center mt-2\">\n          <ion-button (click)=\"submit()\">انشاء القرض</ion-button>\n          <ion-button (click)=\"BackToSearchForm()\" color=\"danger\"\n            >رجوع</ion-button\n          >\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<ion-modal\n  #modal\n  *ngIf=\"ResultModal\"\n  [isOpen]=\"ResultModal\"\n  (didDismiss)=\"dismissModal();\"\n  [backdropDismiss]=\"false\"\n>\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title> نتائج الانشاء </ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"dismissModal()\">\n            <ion-icon name=\"close-outline\" class=\"close-icon\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"pb-0 py-0\">\n      <ion-grid class=\"card inherit-color px-0 py-0\">\n        <div class=\"card-body\">\n          <ion-row>\n            <ion-col>\n              <ion-label>كود العميل</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>اسم العميل</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>الحالة</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>السبب</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let res of ResultArray\">\n            <ion-col>\n              <ion-label>{{res.clnt_code}}</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>{{res.client_name}}</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>{{res.status}}</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>{{res.reason}}</ion-label>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-grid>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_making-loan_making-loan_module_ts.js.map