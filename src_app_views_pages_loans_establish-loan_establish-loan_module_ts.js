"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_establish-loan_establish-loan_module_ts"],{

/***/ 98887:
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/loans/establish-loan/establish-loan-routing.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstablishLoanPageRoutingModule": function() { return /* binding */ EstablishLoanPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _establish_loan_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./establish-loan.page */ 67453);






var routes = [{
  path: '',
  component: _establish_loan_page__WEBPACK_IMPORTED_MODULE_2__.EstablishLoanPage
}];

var EstablishLoanPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function EstablishLoanPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EstablishLoanPageRoutingModule);
});

EstablishLoanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], EstablishLoanPageRoutingModule);


/***/ }),

/***/ 32140:
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/loans/establish-loan/establish-loan.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstablishLoanPageModule": function() { return /* binding */ EstablishLoanPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _establish_loan_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./establish-loan-routing.module */ 98887);
/* harmony import */ var _establish_loan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./establish-loan.page */ 67453);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var EstablishLoanPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function EstablishLoanPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EstablishLoanPageModule);
});

EstablishLoanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _establish_loan_routing_module__WEBPACK_IMPORTED_MODULE_2__.EstablishLoanPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_establish_loan_page__WEBPACK_IMPORTED_MODULE_3__.EstablishLoanPage]
})], EstablishLoanPageModule);


/***/ }),

/***/ 67453:
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/loans/establish-loan/establish-loan.page.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstablishLoanPage": function() { return /* binding */ EstablishLoanPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _establish_loan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./establish-loan.page.html?ngResource */ 63546);
/* harmony import */ var _establish_loan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./establish-loan.page.scss?ngResource */ 49871);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_scrolling_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/scrolling.service */ 68931);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var src_app_core_services_sms_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/sms.service */ 26921);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var src_app_core_util_atobSafe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/util/atobSafe */ 82817);






















var EstablishLoanPage = /*#__PURE__*/function () {
  function EstablishLoanPage(formBuilder, env, http, authService, ScrollingService, router, platform, alertService, referencesService, smsService, sanitizer) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EstablishLoanPage);

    this.formBuilder = formBuilder;
    this.env = env;
    this.http = http;
    this.authService = authService;
    this.ScrollingService = ScrollingService;
    this.router = router;
    this.platform = platform;
    this.alertService = alertService;
    this.referencesService = referencesService;
    this.smsService = smsService;
    this.sanitizer = sanitizer; //#region Variables
    //#region Flags

    this.showLoader = false;
    this.isSearchForm = true;
    this.isGridForm = false;
    this.isMakingLoanForm = false;
    this.isMakingLoanFormValid = false;
    this.isSearchLoanFormValid = false;
    this.isDocumentForm = false;
    this.isOtpForm = false;
    this.isUploadDocumentForm = false;
    this.showLoaderDecision = false;
    this.disableEDisb = false;
    this.searchTypes = [[" البحث بالرقم القومى", "1"], ["البحث بكود العميل", "2"], ["البحث برقم التليفون", "3"]];
    this.userOtpValid = false;
    this.clientOtpValid = false;
    this.cosignerOtpValid = false;
    this.coSigner2OtpValid = false;
    this.smsCountDown = null;
    this.canResendSmsResult = false;
    this.NewDocument = null;
    this.selectDisbOption = false;
    this.cashout_code = null;
    this.client_type_code = null;
    this.isConsumerLoanType = false;
    this.downPaymentIsPerc = false;
    this.downPaymentIsAmount = false;

    this.startingSmsCountDown = function () {
      _this.smsCountDown = 30;
      _this.canResendSmsResult = false;
      return new Promise(function (resolve) {
        _this.intervalId = setInterval(function () {
          _this.smsCountDown -= 1; // every second (-1) from the CountDown

          if (_this.smsCountDown <= 0) {
            clearInterval(_this.intervalId);
            resolve(true);
            _this.canResendSmsResult = true;
            _this.smsCountDown = null;
          }
        }, 1000);
      });
    };

    this.searchForm = this.formBuilder.group({
      search_type: ["1", _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
      search_input: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern("^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$")]]
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
      issuingbank: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
      bankSafe: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
      inssurance: [""],
      funder_code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
      funding_reference_id: [""],
      loan_vouch_char: [""],
      disb_method: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
      down_payment_perc: [""],
      down_payment_am: [""]
    });
    this.gridForm = this.formBuilder.group({});
    this.documentsForm = this.formBuilder.group({
      fund_name_representative: [null]
    });
    this.otpForm = this.formBuilder.group({
      user_mobile: [null],
      client_mobile: [null],
      cosigner_mobile: [null],
      cosigner2_mobile: [null]
    });
    this.smsForm = this.formBuilder.group({
      otp: [null]
    });
    this.uploadDocumentForm = this.formBuilder.group({});
    this.updateDecisionForm = this.formBuilder.group({
      notes: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]
    });
    this.isMobile = this.platform.is("mobile");
  } //#endregion


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EstablishLoanPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.authService.getUserInfo().then(function (userInfo) {
                  _this2.org_code_user_info = userInfo.org_code;

                  _this2.http.get(_this2.env.API_URL + "api/User/GetUserPhone?username=".concat(userInfo.user_name)).subscribe({
                    next: function next(data) {
                      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
                        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                this.userPhone = data.phone_number;

                              case 1:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    },
                    error: function error(err) {
                      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
                        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                _context2.next = 2;
                                return this.alertService.showAlertError(err.error, false);

                              case 2:
                                this.showLoader = false;

                              case 3:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    }
                  });
                });

              case 2:
                this.registerBackButtonListener();
                _context3.next = 5;
                return this.referencesService.getAllIssuingBanks();

              case 5:
                this.IIssuingBank = _context3.sent;
                _context3.next = 8;
                return this.referencesService.getAllBanksSafe();

              case 8:
                this.IBankSafe = _context3.sent;
                _context3.next = 11;
                return this.referencesService.getAllInsurances();

              case 11:
                this.IInsurance = _context3.sent;
                _context3.next = 14;
                return this.referencesService.getAllFunders();

              case 14:
                this.Funders = _context3.sent;
                _context3.next = 17;
                return this.referencesService.getDisbMethods();

              case 17:
                this.disbMethods = _context3.sent.filter(function (x) {
                  return x.ref_code !== "3";
                });

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
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
      var _this3 = this;

      this.showLoader = true;
      this.http.post(this.env.API_URL + "api/LoanApplications/GetFundingReference", {
        org_code: this.org_code_user_info,
        funder_code: funder_code
      }).subscribe({
        next: function next(data) {
          _this3.FundingRef = data["fundingRefs"];
          _this3.iscore_external_funding = data["iscore_external_funding"];

          if (_this3.iscore_external_funding == "1") {
            _this3.isIscore_external_funding = true;

            _this3.makingLoanForm.controls["funding_reference_id"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]);
          } else {
            _this3.isIscore_external_funding = false;

            _this3.makingLoanForm.controls["funding_reference_id"].clearValidators();
          }

          _this3.makingLoanForm.controls["funding_reference_id"].updateValueAndValidity();

          _this3.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this3.showLoader = false;
        }
      });
    }
  }, {
    key: "clientSearch",
    value: function clientSearch() {
      var _this4 = this;

      this.isSearchLoanFormValid = true;

      if (this.searchForm.valid) {
        this.showLoader = true;
        var searchtypeValue = this.searchForm.controls["search_type"].value;
        var searchInputValue = this.searchForm.controls["search_input"].value;
        this.http.post(this.env.API_URL + "api/LoanApplications/GetEstablishLoanPerClient", {
          nation_id: searchtypeValue == "1" ? searchInputValue : null,
          branch_code: searchtypeValue == "2" ? searchInputValue.substring(0, searchInputValue.indexOf("/")) : null,
          client_code: searchtypeValue == "2" ? searchInputValue.slice(searchInputValue.indexOf("/") + 1) : null,
          mobile: searchtypeValue == "3" ? searchInputValue : null
        }).subscribe({
          next: function next(data) {
            if (data.length == 0) {
              _this4.alertService.showAlertError("لا يوجد قروض للانشاء", false);

              _this4.showLoader = false;
              return;
            } else if (data.length == 1) {
              _this4.IEstablishLoanSearch = data[0];
              _this4.allApplications = data;

              if (data[0].loan_gen_status == 0 && data[0].signed == 0) {
                _this4.isSearchForm = false;
                _this4.isMakingLoanForm = true;
              } else if (data[0].loan_gen_status == 1 && data[0].signed == 0) {
                _this4.isSearchForm = false;
                _this4.isDocumentForm = true;

                _this4.getLoanByApplication(_this4.IEstablishLoanSearch.application_key.toString());
              } else if (data[0].loan_gen_status == 1 && data[0].signed == 1) {
                _this4.isSearchForm = false;
                _this4.isUploadDocumentForm = true;

                _this4.getLoanByApplication(_this4.IEstablishLoanSearch.application_key.toString());
              }

              _this4.PatchingSpecificLoan(_this4.allApplications[0]);

              _this4.getLoanTypeDocs(data[0].loan_type_code.toString());

              _this4.getLoanType(data[0].loan_type_code.toString());

              _this4.downPaymentCheck();
            } else if (data.length >= 1) {
              _this4.allApplications = data;

              for (var i = 0; i < _this4.allApplications.length; i++) {
                _this4.allApplications[i].com_dec_date = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(new Date(_this4.allApplications[i].com_dec_date), "yyyy-MM-dd");
              }

              _this4.isSearchForm = false;
              _this4.isGridForm = true;
            }

            console.log("app here: ", _this4.allApplications[0]);
            _this4.showLoader = false;
          },
          error: function error(err) {
            console.log(err);

            _this4.alertService.showAlertError(err.error, false);

            _this4.showLoader = false;
          }
        });
      }
    }
  }, {
    key: "getLoanTypeDocs",
    value: function getLoanTypeDocs(loan_type_code) {
      var _this5 = this;

      this.http.get(this.env.API_URL + "api/Loan/GetLoanTypeDocs?loan_type_code=".concat(loan_type_code)).subscribe({
        next: function next(data) {
          return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
            return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.IEstablishLoanTypeDocs = data;

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        },
        error: function error(err) {
          return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
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
    }
  }, {
    key: "getLoanType",
    value: function getLoanType(loan_type_code) {
      var _this6 = this;

      this.http.get(this.env.API_URL + "api/Loan/GetLoanTypeInfo?loanTypeCode=".concat(loan_type_code)).subscribe({
        next: function next(data) {
          _this6.forceUserOtp = data.force_user_otp == 1 ? true : false;
          _this6.forceClientOtp = data.force_client_otp == 1 ? true : false;
          _this6.forceCoSignersOtp = data.force_cosigners_otp == 1 ? true : false;
          _this6.loan_type_cat = data.loan_type_cat;
          _this6.isConsumerLoanType = data.loan_type_cat === 2;

          _this6.patchOtpForm();
        },
        error: function error(err) {
          return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
            return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.alertService.showAlertError(err.error, false);

                  case 2:
                    this.showLoader = false;

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      });
    }
  }, {
    key: "b64DecodeUnicode",
    value: function b64DecodeUnicode(str) {
      return decodeURIComponent((0,src_app_core_util_atobSafe__WEBPACK_IMPORTED_MODULE_11__.atobSafe)(str).split("").map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(""));
    }
  }, {
    key: "printDoc",
    value: function printDoc(doc_code) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
        var _this7 = this;

        var token, claims, username, pwd, fund_name_representative;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.authService.getAccessToken();

              case 2:
                token = _context9.sent;
                token = token.replace("-", "+").replace("_", "/");
                claims = JSON.parse((0,src_app_core_util_atobSafe__WEBPACK_IMPORTED_MODULE_11__.atobSafe)(token.split(".")[1]));
                username = "";
                pwd = "";

                try {
                  username = this.b64DecodeUnicode(btoa(claims.user_name));
                } catch (err) {
                  username = claims.user_name;
                }

                try {
                  pwd = this.b64DecodeUnicode(btoa(claims.pwd));
                } catch (err) {
                  pwd = claims.pwd;
                }

                if (this.documentsForm.valid) {
                  fund_name_representative = this.documentsForm.controls.fund_name_representative.value ? this.documentsForm.controls.fund_name_representative.value.toString() : "";

                  if (doc_code == 1) {
                    this.showLoader = true;
                    this.http.post(this.env.API_URL + "api/Reporting/GetReport", {
                      report_name: this.IEstablishLoanTypeDocs.find(function (x) {
                        return x.doc_code == doc_code;
                      }).doc_name,
                      report_parameters: [{
                        key: "@cur_loan_key",
                        value: this.loan_key.toString()
                      }, {
                        key: "@fund_name_representative",
                        value: fund_name_representative
                      }],
                      token: {
                        username: username,
                        password: pwd
                      }
                    }).subscribe({
                      next: function next(data) {
                        _this7.showLoader = false;
                        _this7.documentNameHeader = _this7.IEstablishLoanTypeDocs.find(function (x) {
                          return x.doc_code == doc_code;
                        }).doc_description;

                        if (_this7.isMobile) {
                          _this7.downloadPdf(data.report, _this7.IEstablishLoanTypeDocs.find(function (x) {
                            return x.doc_code == doc_code;
                          }).doc_description + " - " + _this7.IEstablishLoanSearch.client_name);
                        } else {
                          _this7.pdfSrc = _this7.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64,".concat(data.report));
                          _this7.pdfModal.isOpen = true;
                        }
                      },
                      error: function error(err) {
                        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
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
                  } else if (doc_code == 2) {
                    this.showLoader = true;
                    this.http.post(this.env.API_URL + "api/Reporting/GetReport", {
                      report_name: this.IEstablishLoanTypeDocs.find(function (x) {
                        return x.doc_code == doc_code;
                      }).doc_name,
                      report_parameters: [{
                        key: "@cur_loan_key",
                        value: this.loan_key.toString()
                      }, {
                        key: "@inst_status",
                        value: "0"
                      }],
                      token: {
                        username: username,
                        password: pwd
                      }
                    }).subscribe({
                      next: function next(data) {
                        _this7.showLoader = false;
                        _this7.documentNameHeader = _this7.IEstablishLoanTypeDocs.find(function (x) {
                          return x.doc_code == doc_code;
                        }).doc_description;

                        if (_this7.isMobile) {
                          _this7.downloadPdf(data.report, _this7.IEstablishLoanTypeDocs.find(function (x) {
                            return x.doc_code == doc_code;
                          }).doc_description + " - " + _this7.IEstablishLoanSearch.client_name);
                        } else {
                          _this7.pdfSrc = _this7.sanitizer.bypassSecurityTrustResourceUrl("data:application/pdf;base64,".concat(data.report));
                          _this7.pdfModal.isOpen = true;
                        }
                      },
                      error: function error(err) {
                        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
                          return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
                            while (1) {
                              switch (_context8.prev = _context8.next) {
                                case 0:
                                  _context8.next = 2;
                                  return this.alertService.showAlertError(err.error, false);

                                case 2:
                                  this.showLoader = false;

                                case 3:
                                case "end":
                                  return _context8.stop();
                              }
                            }
                          }, _callee8, this);
                        }));
                      }
                    });
                  }
                }

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    }
  }, {
    key: "downloadPdf",
    value: function downloadPdf(pdfBase64, pdfName) {
      var pdfBlob = this.base64ToBlob(pdfBase64, "application/pdf");
      var blobUrl = URL.createObjectURL(pdfBlob);
      var anchor = document.createElement("a");
      anchor.href = blobUrl;
      anchor.download = "".concat(pdfName, ".pdf");
      anchor.click();
    }
  }, {
    key: "base64ToBlob",
    value: function base64ToBlob(base64, contentType) {
      var byteCharacters = (0,src_app_core_util_atobSafe__WEBPACK_IMPORTED_MODULE_11__.atobSafe)(base64);
      var byteArrays = [];

      for (var offset = 0; offset < byteCharacters.length; offset += 512) {
        var slice = byteCharacters.slice(offset, offset + 512);
        var byteNumbers = new Array(slice.length);

        for (var i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      var blob = new Blob(byteArrays, {
        type: contentType
      });
      return blob;
    }
  }, {
    key: "getLoanByApplication",
    value: function getLoanByApplication(loan_application) {
      var _this8 = this;

      this.http.get(this.env.API_URL + "api/Loan/GetLoanByApplication?application_key=".concat(loan_application)).subscribe({
        next: function next(data) {
          _this8.loan_key = data;
        },
        error: function error(err) {
          return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10() {
            return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.alertService.showAlertError(err.error, false);

                  case 2:
                    this.showLoader = false;

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      });
    }
  }, {
    key: "PatchingSpecificLoan",
    value: function PatchingSpecificLoan(loanObject) {
      this.use_workflow = loanObject.use_workflow === 1 ? true : false;
      this.client_type_code = loanObject.client_type_code;
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
        funding_reference_id: loanObject.funding_reference_id == null ? null : loanObject.funding_reference_id.toString(),
        down_payment_perc: loanObject.down_payment_perc,
        down_payment_am: loanObject.down_payment_am
      });
    }
  }, {
    key: "patchOtpForm",
    value: function patchOtpForm() {
      if (this.forceUserOtp && this.userPhone) {
        this.otpForm.patchValue({
          user_mobile: this.userPhone
        });
      }

      if (this.forceClientOtp && this.IEstablishLoanSearch.client_mobile) {
        this.otpForm.patchValue({
          client_mobile: this.IEstablishLoanSearch.client_mobile
        });
      }

      if (this.forceCoSignersOtp && this.IEstablishLoanSearch.cosigner_mobile) {
        this.otpForm.patchValue({
          cosigner_mobile: this.IEstablishLoanSearch.cosigner_mobile
        });
      }

      if (this.forceCoSignersOtp && this.IEstablishLoanSearch.cosigner2_mobile) {
        this.otpForm.patchValue({
          cosigner2_mobile: this.IEstablishLoanSearch.cosigner2_mobile
        });
      }
    }
  }, {
    key: "selectedApplication",
    value: function selectedApplication(loan, i) {
      this.PatchingSpecificLoan(this.allApplications.filter(function (x) {
        return x.application_key == loan.application_key;
      })[0]);
      this.getLoanTypeDocs(loan.loan_type_code.toString());
      this.getLoanType(loan.loan_type_code.toString());
      this.IEstablishLoanSearch = loan;

      if (loan.loan_gen_status == 0 && loan.signed == 0) {
        this.isGridForm = false;
        this.isMakingLoanForm = true;
      } else if (loan.loan_gen_status == 1 && loan.signed == 0) {
        this.isGridForm = false;
        this.isDocumentForm = true;
        this.getLoanByApplication(this.IEstablishLoanSearch.application_key.toString());
      } else if (loan.loan_gen_status == 1 && loan.signed == 1) {
        this.isGridForm = false;
        this.isUploadDocumentForm = true;
        this.getLoanByApplication(this.IEstablishLoanSearch.application_key.toString());
      }
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
        searchInput.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern("^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]);
      } else if (searchType.value == "2") {
        searchInput.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern("([0-9]{1,3})/([0-9]{1,7})$"), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]);
      } else if (searchType.value == "3") {
        searchInput.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.pattern("^01[0125][0-9]{8}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]);
      }

      searchInput.updateValueAndValidity();
    }
  }, {
    key: "makingLoan",
    value: function makingLoan() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee13() {
        var _this9 = this;

        var sendingObject;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.isMakingLoanFormValid = true;

                if (!this.makingLoanForm.valid) {
                  _context13.next = 9;
                  break;
                }

                _context13.next = 4;
                return this.alertService.SaveAlert();

              case 4:
                if (_context13.sent) {
                  _context13.next = 6;
                  break;
                }

                return _context13.abrupt("return");

              case 6:
                if (this.checkPhones()) {
                  this.showLoader = true;
                  sendingObject = {
                    application_key: this.IEstablishLoanSearch.application_key.toString(),
                    dec_effective_date: this.makingLoanForm.controls["dec_effective_date"].value,
                    issuingbank: this.makingLoanForm.controls["issuingbank"].value.toString(),
                    bankSafe: this.makingLoanForm.controls["bankSafe"].value.toString(),
                    payments_shift: this.makingLoanForm.controls["payments_shift"].value == null ? null : this.makingLoanForm.controls["payments_shift"].value.toString(),
                    funder_code: this.makingLoanForm.controls["funder_code"].value,
                    funding_reference_id: this.makingLoanForm.controls["funding_reference_id"].value,
                    loan_vouch_char: this.makingLoanForm.controls["loan_vouch_char"].value,
                    uuc: this.IEstablishLoanSearch.uuc,
                    disb_method: this.makingLoanForm.controls["disb_method"].value
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
                    uuc: sendingObject.uuc.toString(),
                    disb_method: sendingObject.disb_method.toString()
                  }).subscribe({
                    next: function next(data) {
                      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this9, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee11() {
                        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                _context11.next = 2;
                                return this.alertService.showAlertConfirm("لقد تم الانشاء بنجاح", false);

                              case 2:
                                this.showLoader = false;
                                this.isMakingLoanForm = false;
                                this.isDocumentForm = true;

                              case 5:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11, this);
                      }));
                    },
                    error: function error(err) {
                      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this9, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee12() {
                        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee12$(_context12) {
                          while (1) {
                            switch (_context12.prev = _context12.next) {
                              case 0:
                                _context12.next = 2;
                                return this.alertService.showAlertError(err.error, false);

                              case 2:
                                this.showLoader = false;

                              case 3:
                              case "end":
                                return _context12.stop();
                            }
                          }
                        }, _callee12, this);
                      }));
                    }
                  });
                }

                _context13.next = 11;
                break;

              case 9:
                _context13.next = 11;
                return this.ScrollingService.findInvalidControls(this.makingLoanForm);

              case 11:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
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
      this.isDocumentForm = false;
      this.isOtpForm = false;
      this.isUploadDocumentForm = false;
      this.userOtpValid = false;
      this.coSigner2OtpValid = false;
      this.cosignerOtpValid = false;
      this.clientOtpValid = false;
    }
  }, {
    key: "backToGridForm",
    value: function backToGridForm() {
      if (this.allApplications.length > 1) {
        this.isMakingLoanForm = false;
        this.isGridForm = true;
        this.isMakingLoanFormValid = false;
        this.isDocumentForm = false;
        this.userOtpValid = false;
        this.coSigner2OtpValid = false;
        this.cosignerOtpValid = false;
        this.clientOtpValid = false;
      } else {
        this.backToSearchForm();
      }
    }
  }, {
    key: "backToDocumentsForm",
    value: function backToDocumentsForm() {
      this.isDocumentForm = true;
      this.isOtpForm = false;
    }
  }, {
    key: "registerBackButtonListener",
    value: function registerBackButtonListener() {
      var _this10 = this;

      this.backButtonListener = this.platform.backButton.subscribeWithPriority(10, function (next) {
        _this10.backButton();
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
    key: "nextToOtpForm",
    value: function nextToOtpForm() {
      if (this.checkPhones()) {
        this.isDocumentForm = false;
        this.isOtpForm = true;
      }
    }
  }, {
    key: "checkPhones",
    value: function checkPhones() {
      if (this.forceUserOtp == true && !this.userPhone) {
        this.alertService.showAlertError("لا يوجد هاتف مسجل للمستخدم", false);
        return false;
      } else if (this.forceClientOtp == true && !this.IEstablishLoanSearch.client_mobile) {
        this.alertService.showAlertError("لا يوجد هاتف مسجل للعميل", false);
        return false;
      } else if (this.forceCoSignersOtp == true && this.IEstablishLoanSearch.co_client_key && !this.IEstablishLoanSearch.cosigner_mobile) {
        this.alertService.showAlertError("لا يوجد هاتف مسجل للضامن", false);
        return false;
      } else if (this.forceCoSignersOtp == true && this.IEstablishLoanSearch.co2_client_key && !this.IEstablishLoanSearch.cosigner2_mobile) {
        this.alertService.showAlertError("لا يوجد هاتف مسجل للضامن الثاني", false);
        return false;
      } else return true;
    }
  }, {
    key: "checkSignedButton",
    value: function checkSignedButton() {
      var user = false;
      var client = false;
      var cosigner = false;
      var cosigner2 = false;

      if (this.forceUserOtp == true) {
        if (this.userPhone && this.userOtpValid == true) {
          user = true;
        } else {
          user = false;
        }
      } else {
        user = true;
      }

      if (this.forceClientOtp == true) {
        if (this.IEstablishLoanSearch.client_mobile && this.clientOtpValid) {
          client = true;
        } else {
          client = false;
        }
      } else {
        client = true;
      }

      if (this.forceCoSignersOtp == true) {
        if (this.IEstablishLoanSearch.cosigner_mobile) {
          if (this.cosignerOtpValid) {
            cosigner = true;
          } else {
            cosigner = false;
          }
        } else {
          cosigner = true;
        }

        if (this.IEstablishLoanSearch.cosigner2_mobile) {
          if (this.coSigner2OtpValid) {
            cosigner2 = true;
          } else {
            cosigner2 = false;
          }
        } else {
          cosigner2 = true;
        }
      } else {
        cosigner = true;
        cosigner2 = true;
      }

      if (user == true && client == true && cosigner == true && cosigner2 == true) return false;else return true;
    }
  }, {
    key: "closingSmsModal",
    value: function closingSmsModal() {
      this.selectedPhone = 0;
      this.currentOtpPhone = null;
      this.smsModal.isOpen = false;
      clearInterval(this.intervalId);
      this.smsForm.controls.otp.reset();
      this.smsModal.dismiss();
    }
  }, {
    key: "closingUploadDocumentModal",
    value: function closingUploadDocumentModal() {
      this.uploadDocumentModal.isOpen = false;
      this.NewDocument = null;
      this.mySelect.value = null;
      this.uploadDocumentModal.dismiss();
    }
  }, {
    key: "closingPdfModal",
    value: function closingPdfModal() {
      this.pdfModal.isOpen = false;
      this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl("");
      this.documentNameHeader = null;
      this.pdfModal.dismiss();
    }
  }, {
    key: "selectDocumentType",
    value: function selectDocumentType(ev) {
      var value = ev.detail.value;
      this.initializeNewDocument(value);
      this.uploadDocumentModal.isOpen = true;
    }
  }, {
    key: "saveNewDocumentFile",
    value: function saveNewDocumentFile(ev) {
      this.NewDocumentOutputData = ev;

      for (var i = 0; i < this.NewDocumentOutputData.uploadedDocuments.length; i++) {
        if (this.NewDocumentOutputData.uploadedDocuments[i] !== null && this.NewDocumentOutputData.uploadedDocuments[i] !== undefined && this.NewDocumentOutputData.uploadedDocuments[i].doc !== null && this.NewDocumentOutputData.uploadedDocuments[i].doc !== undefined) {
          this.NewDocumentInputData.uploadedDocuments[i].doc = this.NewDocumentOutputData.uploadedDocuments[i].doc.toString();
          this.NewDocument.documentDetails[i].file = this.NewDocumentOutputData.uploadedDocuments[i].doc.toString();
        }
      }
    }
  }, {
    key: "uploadNewDocument",
    value: function uploadNewDocument() {
      var _this11 = this;

      this.showLoader = true;
      this.http.post(this.env.API_URL + "api/Documents/InsertLoanDocument", {
        loanDocument: this.NewDocument,
        loanTypeCode: Number(this.NewDocumentInputData.loanTypeCode),
        applicationKey: this.IEstablishLoanSearch.application_key.toString()
      }).subscribe({
        next: function next(data) {
          return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this11, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee14() {
            return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.alertService.showAlertConfirm("تم رفع المستند بنجاح", false);

                  case 2:
                    this.showLoader = false;
                    this.closingUploadDocumentModal();

                  case 4:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        },
        error: function error(err) {
          return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this11, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee15() {
            return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.alertService.showAlertError(err.error, false);

                  case 2:
                    this.showLoader = false;

                  case 3:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      });
    }
  }, {
    key: "smsCheckOtp",
    value: function smsCheckOtp() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee16() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                if (this.smsForm.valid) {
                  _context16.next = 2;
                  break;
                }

                return _context16.abrupt("return");

              case 2:
                _context16.next = 4;
                return this.smsService.VerifyOTP(this.currentOtpPhone, this.smsForm.value.otp.toString());

              case 4:
                if (!_context16.sent) {
                  _context16.next = 19;
                  break;
                }

                _context16.t0 = this.selectedPhone;
                _context16.next = _context16.t0 === 1 ? 8 : _context16.t0 === 2 ? 10 : _context16.t0 === 3 ? 12 : _context16.t0 === 4 ? 14 : 16;
                break;

              case 8:
                this.userOtpValid = true;
                return _context16.abrupt("break", 16);

              case 10:
                this.clientOtpValid = true;
                return _context16.abrupt("break", 16);

              case 12:
                this.cosignerOtpValid = true;
                return _context16.abrupt("break", 16);

              case 14:
                this.coSigner2OtpValid = true;
                return _context16.abrupt("break", 16);

              case 16:
                this.closingSmsModal();
                _context16.next = 20;
                break;

              case 19:
                return _context16.abrupt("return", this.alertService.showAlertError("رمز التحقق غير سليم", false));

              case 20:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
    }
  }, {
    key: "sendingOtp",
    value: function sendingOtp(i, phone) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee17() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                this.selectedPhone = i;
                this.currentOtpPhone = phone;
                this.smsModal.isOpen = true;
                this.startingSmsCountDown();
                _context17.next = 6;
                return this.smsService.OTP(this.currentOtpPhone);

              case 6:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
    }
  }, {
    key: "signApplication",
    value: function signApplication() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee20() {
        var _this12 = this;

        var applicationKey;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                applicationKey = this.IEstablishLoanSearch.application_key;
                _context20.next = 3;
                return this.alertService.SaveAlert("هل انت متاكد من التوقيع؟");

              case 3:
                if (!_context20.sent) {
                  _context20.next = 9;
                  break;
                }

                _context20.next = 6;
                return this.alertService.SaveAlert("هل انت متاكد؟");

              case 6:
                if (!_context20.sent) {
                  _context20.next = 9;
                  break;
                }

                this.showLoader = true;
                this.http.post(this.env.API_URL + "api/LoanApplications/SignApplication?applicationKey=".concat(applicationKey), {}).subscribe({
                  next: function next(data) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this12, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee18() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee18$(_context18) {
                        while (1) {
                          switch (_context18.prev = _context18.next) {
                            case 0:
                              this.showLoader = false;
                              _context18.next = 3;
                              return this.alertService.SaveAlert("هل تريد رفع مستندات القرض؟");

                            case 3:
                              if (!_context18.sent) {
                                _context18.next = 10;
                                break;
                              }

                              this.isOtpForm = false;
                              this.isDocumentForm = false;
                              this.isUploadDocumentForm = true;
                              this.getLoanDocumentType();
                              _context18.next = 11;
                              break;

                            case 10:
                              location.reload();

                            case 11:
                            case "end":
                              return _context18.stop();
                          }
                        }
                      }, _callee18, this);
                    }));
                  },
                  error: function error(err) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this12, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee19() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee19$(_context19) {
                        while (1) {
                          switch (_context19.prev = _context19.next) {
                            case 0:
                              _context19.next = 2;
                              return this.alertService.showAlertError(err.error, false);

                            case 2:
                              this.showLoader = false;

                            case 3:
                            case "end":
                              return _context19.stop();
                          }
                        }
                      }, _callee19, this);
                    }));
                  }
                });

              case 9:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));
    }
  }, {
    key: "getLoanDocumentType",
    value: function getLoanDocumentType() {
      var _this13 = this;

      this.http.get(this.env.API_URL + "api/Documents/GetLoanDocumentTypes").subscribe({
        next: function next(data) {
          _this13.ILoanDocumentTypes = data;
        },
        error: function error(err) {
          return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this13, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee21() {
            return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    _context21.next = 2;
                    return this.alertService.showAlertError(err.error, false);

                  case 2:
                    this.showLoader = false;

                  case 3:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      });
    }
  }, {
    key: "updateApplicationFinalDecision",
    value: function updateApplicationFinalDecision() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee24() {
        var _this14 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                if (this.updateDecisionForm.valid) {
                  _context24.next = 3;
                  break;
                }

                this.alertService.showAlertError("يجب ادخال ملاحظات الخطوة", false);
                return _context24.abrupt("return");

              case 3:
                _context24.next = 5;
                return this.alertService.SaveAlert("هل انت متاكد من ارجاع الطلب للخطوة السابقة؟");

              case 5:
                if (!_context24.sent) {
                  _context24.next = 8;
                  break;
                }

                this.showLoaderDecision = true;
                this.http.post(this.env.API_URL + "api/LoanApplications/UpdateApplicationFinalDecision?application_key=".concat(this.IEstablishLoanSearch.application_key.toString(), "&uuc=").concat(this.IEstablishLoanSearch.uuc.toString(), "&notes=").concat(this.updateDecisionForm.controls.notes.value.toString()), {}).subscribe({
                  next: function next(data) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this14, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee22() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee22$(_context22) {
                        while (1) {
                          switch (_context22.prev = _context22.next) {
                            case 0:
                              this.showLoaderDecision = false;
                              this.alertService.showAlertConfirm("تم الرجوع بالطلب للخطوة السابقة بنجاح", true);

                            case 2:
                            case "end":
                              return _context22.stop();
                          }
                        }
                      }, _callee22, this);
                    }));
                  },
                  error: function error(err) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this14, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee23() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee23$(_context23) {
                        while (1) {
                          switch (_context23.prev = _context23.next) {
                            case 0:
                              _context23.next = 2;
                              return this.alertService.showAlertError(err.error, false);

                            case 2:
                              this.showLoaderDecision = false;

                            case 3:
                            case "end":
                              return _context23.stop();
                          }
                        }
                      }, _callee23, this);
                    }));
                  }
                });

              case 8:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));
    }
  }, {
    key: "openUpdateDecisionModal",
    value: function openUpdateDecisionModal() {
      this.updateDecisionModal.isOpen = true;
    }
  }, {
    key: "closeUpdateDecisionModal",
    value: function closeUpdateDecisionModal() {
      this.updateDecisionForm.reset();
      this.updateDecisionModal.isOpen = false;
    }
  }, {
    key: "initializeNewDocument",
    value: function initializeNewDocument(documentType) {
      this.NewDocument = null;
      this.NewDocumentInputData = null;
      this.NewDocument = {
        documentSerial: 0,
        documentTypeName: this.ILoanDocumentTypes.find(function (x) {
          return x.documentTypeCode == documentType;
        }).documentTypeDesc,
        documentPages: this.ILoanDocumentTypes.find(function (x) {
          return x.documentTypeCode == documentType;
        }).documentPagesNumber,
        documentDetails: Array(Number(this.ILoanDocumentTypes.find(function (x) {
          return x.documentTypeCode == documentType;
        }).documentPagesNumber)).fill(null).map(function (_, i) {
          return {
            documentSerial: 0,
            file: null,
            pageNumber: i + 1
          };
        })
      };
      this.NewDocumentInputData = {
        loanTypeCode: documentType.toString(),
        canEdit: true,
        uploadedDocuments: Array(Number(this.ILoanDocumentTypes.find(function (x) {
          return x.documentTypeCode == documentType;
        }).documentPagesNumber)).fill(null).map(function () {
          return {
            doc: null
          };
        })
      };
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
  }, {
    key: "selectBank",
    value: function selectBank(ev) {
      var curBank = ev.target.value;
      this.cashout_code = this.IIssuingBank.find(function (x) {
        return x.bank_code === curBank;
      }).cashout_code;

      if (!this.cashout_code) {
        if (this.client_type_code === 1) {
          this.selectDisbOption = true;
          this.makingLoanForm.controls.disb_method.reset();

          if (this.loan_type_cat === 3) {
            this.disableEDisb = true;
            this.makingLoanForm.controls.disb_method.setValue("1");
          }
        } else {
          this.selectDisbOption = false;
          this.makingLoanForm.controls.disb_method.setValue("1");
        }
      } else {
        this.selectDisbOption = false;
        this.makingLoanForm.patchValue({
          disb_method: "3"
        });
      }
    }
  }, {
    key: "downPaymentCheck",
    value: function downPaymentCheck() {
      if (this.allApplications[0].down_payment !== 0) {
        if (this.allApplications[0].down_payment_type == 1) {
          this.downPaymentTypeDesc = "نسبة ";
          this.downPaymentIsPerc = true;
          this.downPaymentIsAmount = false;
        } else if (this.allApplications[0].down_payment_type == 2) {
          this.downPaymentTypeDesc = "قيمة ";
          this.downPaymentIsPerc = false;
          this.downPaymentIsAmount = true;
        }

        if (this.allApplications[0].down_payment == 1) {
          this.downPaymentDesc = "الدفعة المقدمة";
        } else if (this.allApplications[0].down_payment == 2) {
          this.downPaymentDesc = "الدفعة المؤخرة";
        }

        this.downPaymentFullDesc = this.downPaymentTypeDesc + this.downPaymentDesc;
      } else {
        this.downPaymentIsPerc = false;
        this.downPaymentIsAmount = false;
        this.downPaymentFullDesc = "";
        this.downPaymentTypeDesc = "";
        this.downPaymentDesc = "";
      }
    }
  }]);

  return EstablishLoanPage;
}();

EstablishLoanPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_8__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: src_app_core_services_scrolling_service__WEBPACK_IMPORTED_MODULE_5__.ScrollingService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_9__.ReferencesService
  }, {
    type: src_app_core_services_sms_service__WEBPACK_IMPORTED_MODULE_10__.SMSService
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.DomSanitizer
  }];
};

EstablishLoanPage.propDecorators = {
  smsModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
    args: ["smsModal"]
  }],
  uploadDocumentModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
    args: ["uploadDocumentModal"]
  }],
  pdfModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
    args: ["pdfModal"]
  }],
  mySelect: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
    args: ["mySelect", {
      static: false
    }]
  }],
  downloadLink: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
    args: ["downloadLink"]
  }],
  updateDecisionModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
    args: ["updateDecisionModal"]
  }]
};
EstablishLoanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
  selector: "app-establish-loan",
  template: _establish_loan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.trigger)("radarAnimation", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.style)({
    opacity: 0,
    transform: "scale(0) rotate(-90deg)"
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.animate)("1s ease-in-out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_20__.style)({
    opacity: 1,
    transform: "scale(1) rotate(0)"
  }))], {
    delay: "1s"
  }) // Delay specified here
  ])],
  styles: [_establish_loan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], EstablishLoanPage);


/***/ }),

/***/ 49871:
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/loans/establish-loan/establish-loan.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ (function(module) {

module.exports = ".divCenter {\n  justify-items: center;\n  text-align: center;\n}\n\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.row-header {\n  background-color: var(--content-bg);\n}\n\n.greenColor {\n  color: #008000;\n}\n\nion-icon {\n  font-size: 25px;\n}\n\n.pdf-modal {\n  --width: 70% !important;\n  --height: 95% !important;\n}\n\n.horizontalLine {\n  height: 4px;\n  width: auto;\n  border-radius: 10px;\n  margin-top: 5px;\n  margin-bottom: 20px;\n  background: var(--disabled-form-bg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzdGFibGlzaC1sb2FuLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGxvYW5zXFxlc3RhYmxpc2gtbG9hblxcZXN0YWJsaXNoLWxvYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FER0E7RUFDRSxtQ0FBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREdBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0FDQUYiLCJmaWxlIjoiZXN0YWJsaXNoLWxvYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdkNlbnRlciB7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9ybS1sYWJlbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgNTEsIDEwMikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5yb3ctaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJnKTtcclxufVxyXG5cclxuLmdyZWVuQ29sb3Ige1xyXG4gIGNvbG9yOiAjMDA4MDAwO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4ucGRmLW1vZGFsIHtcclxuICAtLXdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxuICAtLWhlaWdodDogOTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsTGluZSB7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXNhYmxlZC1mb3JtLWJnKTtcclxufVxyXG4iLCIuZGl2Q2VudGVyIHtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufVxuXG4ucm93LWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmcpO1xufVxuXG4uZ3JlZW5Db2xvciB7XG4gIGNvbG9yOiAjMDA4MDAwO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnBkZi1tb2RhbCB7XG4gIC0td2lkdGg6IDcwJSAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogOTUlICFpbXBvcnRhbnQ7XG59XG5cbi5ob3Jpem9udGFsTGluZSB7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXNhYmxlZC1mb3JtLWJnKTtcbn0iXX0= */";

/***/ }),

/***/ 63546:
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/loans/establish-loan/establish-loan.page.html?ngResource ***!
  \**************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div class=\"col-md-12\">\n  <div class=\"mb-2\">\n    <h4 class=\"pt-2 pr-4\">انشاء القرض</h4>\n    <!-- Search Form -->\n    <form class=\"card\" [formGroup]=\"searchForm\" *ngIf=\"isSearchForm\" (keyup)=\"enterClick($event)\">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-3\">\n            <div class=\"form-group\">\n              <div>\n                <ion-select interface=\"popover\" formControlName=\"search_type\" placeholder=\"اختيار نوع البحث\"\n                  (ionChange)=\"searchTypeChange()\" class=\"subselect\">\n                  <ion-select-option *ngFor=\"let type of searchTypes\" value=\"{{ type[1] }}\">\n                    {{ type[0] }}\n                  </ion-select-option>\n                </ion-select>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-8\">\n            <div class=\"form-group row\">\n              <div class=\"col-sm-12\">\n                <ion-input type=\"text\" class=\"form-control input\" #search_input formControlName=\"search_input\">\n                </ion-input>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isSearchLoanFormValid && (GetSearchLoanForm.search_input.errors?.['required'])\" role=\"alert\">\n                  يجب ادخال المعلومات\n                </div>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isSearchLoanFormValid && (GetSearchLoanForm.search_input.errors?.['pattern']) && searchForm.controls['search_type'].value == '1'\"\n                  role=\"alert\">\n                  الرقم القومي غير صحيح و يجب ان يتكون ١٤ رقم!\n                </div>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isSearchLoanFormValid && (GetSearchLoanForm.search_input.errors?.['pattern']) && searchForm.controls['search_type'].value == '2'\"\n                  role=\"alert\">\n                  كود العميل غير صحيح و يجب ان يتكون من فرع العميل / كود العميل!\n                </div>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isSearchLoanFormValid && (GetSearchLoanForm.search_input.errors?.['pattern']) && searchForm.controls['search_type'].value == '3'\"\n                  role=\"alert\">\n                  رقم المحمول يجب ان يكون أحد عشر رقم!\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-1\">\n            <ion-button (click)=\"clientSearch()\" class=\"py-0 w-100\">\n              بحث\n            </ion-button>\n          </div>\n        </div>\n      </div>\n    </form>\n\n    <!-- Grid Form -->\n    <ng-container *ngIf=\"isGridForm\">\n      <form [formGroup]=\"gridForm\" class=\"h-100\">\n        <div class=\"row pt-2\">\n          <div class=\"col-12\">\n            <div class=\"form-group h-100\">\n              <div class=\"card table-responsive h-100\">\n                <table class=\"table card-body h-100\">\n                  <thead>\n                    <tr>\n                      <th class=\"text-center w-20 h-20\">قيمة القرض</th>\n                      <th class=\"text-center w-60 h-20\">نوع القرض</th>\n                      <th class=\"text-center w-20 h-20\">تاريخ قرار اللجنة</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr class=\"h-20\" *ngFor=\"let loan of allApplications; let i = index\"\n                      (click)=\"selectedApplication(loan,i)\">\n                      <td class=\"text-center w-20 h-20\">{{ loan.aprv_am }}</td>\n                      <td class=\"text-center w-60 h-20\">\n                        {{ loan.loan_type_name }}\n                      </td>\n                      <td class=\"text-center w-20 h-20\">\n                        {{ loan.com_dec_date }}\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n      <div class=\"d-flex justify-content-center pt-2\">\n        <ion-button (click)=\"backToSearchForm()\" color=\"danger\">رجوع</ion-button>\n      </div>\n    </ng-container>\n\n    <!-- Making Loan Form -->\n    <ng-container *ngIf=\"isMakingLoanForm\">\n      <form class=\"card\" [formGroup]=\"makingLoanForm\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"> اسم العميل </ion-label>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"client_name\" [disabled]=\"true\"></ion-input>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"> الرقم القومي </ion-label>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"nation_id\" [disabled]=\"true\"></ion-input>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-2\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"> كود العميل </ion-label>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"clnt_code\" [disabled]=\"true\"></ion-input>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-2\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"> نوع العميل </ion-label>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"client_type_name\"\n                  [disabled]=\"true\"></ion-input>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"> نوع القرض </ion-label>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"loan_type_name\"\n                  [disabled]=\"true\"></ion-input>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-2\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"> مبلغ القرض </ion-label>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"aprv_am\" [disabled]=\"true\"></ion-input>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-2\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"> الفائدة </ion-label>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"loan_int_rt\" [disabled]=\"true\"></ion-input>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-2\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"> عدد ايام الترحيل </ion-label>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"payments_shift\"></ion-input>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-2\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"> تاريخ قرار اللجنة </ion-label>\n                <ngx-datepicker [parentForm]=\"makingLoanForm\" parentFormControllerName=\"com_dec_date\"\n                  [disabledValue]=\"true\"></ngx-datepicker>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 col-md-2\" *ngIf=\"downPaymentIsPerc\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"> {{downPaymentFullDesc}} </ion-label>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"down_payment_perc\"\n                  [disabled]=\"true\"></ion-input>\n              </div>\n            </div>\n            <div *ngIf=\"downPaymentIsPerc\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\" style=\"margin-top: 37px;\"> % </ion-label>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-2\" *ngIf=\"downPaymentIsAmount\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"> {{downPaymentFullDesc}} </ion-label>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"down_payment_am\"\n                  [disabled]=\"true\"></ion-input>\n              </div>\n            </div>\n          </div>\n          <div class=\"horizontalLine\"></div>\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\">بنك الإصدار</ion-label>\n                <ion-select interface=\"popover\" formControlName=\"issuingbank\" class=\"subselect\"\n                  placeholder=\"بنك الاصدار\" (ionChange)=\"selectBank($event)\">\n                  <ion-select-option *ngFor=\"let bank of IIssuingBank\" [value]=\"bank.bank_code\">\n                    {{bank.bank_name}}\n                  </ion-select-option>\n                </ion-select>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isMakingLoanFormValid && (GetMakingLoanForm.issuingbank.errors?.['required'])\" role=\"alert\">\n                  يجب اختيار بنك الاصدار\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\" *ngIf=\"selectDisbOption\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\">\n                  طريقة الصرف\n                  <ion-label *ngIf=\"isConsumerLoanType\">(للمورد)</ion-label>\n                </ion-label>\n\n                <ion-select interface=\"popover\" placeholder=\"طريقة الصرف\" formControlName=\"disb_method\"\n                  class=\"subselect\" [disabled]=\"disableEDisb\">\n                  <ion-select-option *ngFor=\"let ref of disbMethods\" [value]=\"ref.ref_code\">\n                    {{ref.ref_desc}}\n                  </ion-select-option>\n                </ion-select>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isMakingLoanFormValid && (GetMakingLoanForm.disb_method.errors?.['required'])\" role=\"alert\">\n                  يجب اختيار طريقة الصرف\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\">خزينة مستندات السداد</ion-label>\n                <ion-select interface=\"popover\" formControlName=\"bankSafe\" class=\"subselect\"\n                  placeholder=\"خزينة مستندات السداد\">\n                  <ion-select-option *ngFor=\"let bank of IBankSafe\" [value]=\"bank.bank_code\">\n                    {{bank.bank_name}}\n                  </ion-select-option>\n                </ion-select>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isMakingLoanFormValid && (GetMakingLoanForm.bankSafe.errors?.['required'])\" role=\"alert\">\n                  يجب اختيار خزينة مستندات السداد\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\">عقد التأمين</ion-label>\n                <ion-select interface=\"popover\" formControlName=\"inssurance\" class=\"subselect\"\n                  placeholder=\"عقد التأمين\">\n                  <ion-select-option *ngFor=\"let ins of IInsurance\" [value]=\"ins.contract_id\">\n                    {{ins.contract_description}}\n                  </ion-select-option>\n                </ion-select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\">\n                  مصدر التمويل\n                </ion-label>\n                <ion-select interface=\"popover\" placeholder=\"مصدر التمويل\" formControlName=\"funder_code\"\n                  class=\"subselect\" (ionChange)=\"funderCodeChange($event)\">\n                  <ion-select-option *ngFor=\"let funder of Funders\" [value]=\"funder.funder_code\">\n                    {{funder.funder_name}}\n                  </ion-select-option>\n                </ion-select>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isMakingLoanFormValid && (GetMakingLoanForm.funder_code.errors?.['required'])\" role=\"alert\">\n                  يجب اختيار مصدر التمويل\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\" *ngIf=\"isIscore_external_funding\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\">\n                  كود التمويل\n                </ion-label>\n                <ion-select interface=\"popover\" placeholder=\"كود التمويل\" formControlName=\"funding_reference_id\"\n                  class=\"subselect\">\n                  <ion-select-option *ngFor=\"let ref of FundingRef\" [value]=\"ref.funding_reference_id\">\n                    {{ref.funding_reference_code}}\n                  </ion-select-option>\n                </ion-select>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isMakingLoanFormValid && (GetMakingLoanForm.funding_reference_id.errors?.['required'])\"\n                  role=\"alert\">\n                  يجب اختيار كود التمويل\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-2\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"> رقم الشيك يدوي </ion-label>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"loan_vouch_char\"></ion-input>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-2\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"> تاريخ انشاء القرض </ion-label>\n                <ngx-datepicker [parentForm]=\"makingLoanForm\"\n                  parentFormControllerName=\"dec_effective_date\"></ngx-datepicker>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n      <div class=\"d-flex justify-content-center mt-2\">\n        <ion-button (click)=\"backToGridForm()\" color=\"danger\">رجوع</ion-button>\n        <ion-button (click)=\"makingLoan()\">انشاء القرض</ion-button>\n        <ion-button (click)=\"openUpdateDecisionModal()\" *ngIf=\"use_workflow\">الرجوع للخطوة السابقة</ion-button>\n      </div>\n    </ng-container>\n\n    <!-- Documents Form -->\n    <ng-container *ngIf=\"isDocumentForm\">\n      <form class=\"\" [formGroup]=\"documentsForm\">\n        <h5 class=\"pt-1 pr-5\">طباعة المستندات</h5>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <div class=\"card table-responsive\">\n                <table class=\"table card-body\">\n                  <thead>\n                    <tr>\n                      <th class=\"text-center\">رقم المستند</th>\n                      <th class=\"text-center\">اسم المستند</th>\n                      <th class=\"text-center\">طباعة</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let doc of IEstablishLoanTypeDocs; let i = index\">\n                      <td class=\"text-center\">{{doc.doc_code}}</td>\n                      <td class=\"text-center\">{{doc.doc_description}}</td>\n                      <td class=\"text-center\">\n                        <ion-button (click)=\"printDoc(doc.doc_code)\">\n                          <ion-icon name=\"print-outline\"></ion-icon>\n                        </ion-button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-4 text-center\" style=\"align-content: center\">\n                <ion-label class=\"form-label\"> ممثل مؤسسة الأقراض </ion-label>\n              </div>\n              <div class=\"col-7 p-1 mb-2\">\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"fund_name_representative\"></ion-input>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-12 text-center\">\n          <ion-button (click)=\"backToGridForm()\" color=\"danger\">رجوع</ion-button>\n          <ion-button (click)=\"nextToOtpForm()\"\n            *ngIf=\"forceUserOtp || forceClientOtp || forceCoSignersOtp\">متابعة</ion-button>\n          <ion-button *ngIf=\"!forceUserOtp && !forceClientOtp && !forceCoSignersOtp\" [disabled]=\"checkSignedButton()\"\n            (click)=\"signApplication()\">تم التوقيع</ion-button>\n        </div>\n      </form>\n    </ng-container>\n\n    <!-- OTP Form -->\n    <form [formGroup]=\"otpForm\" *ngIf=\"isOtpForm\">\n      <div class=\"card\"\n        *ngIf=\"(forceUserOtp && userPhone) || (forceClientOtp && IEstablishLoanSearch.client_mobile) || (forceCoSignersOtp && (IEstablishLoanSearch.cosigner_mobile || IEstablishLoanSearch.cosigner2_mobile))\">\n        <ion-grid class=\"card-body\">\n          <ion-row>\n            <ion-col *ngIf=\"forceUserOtp && userPhone\">\n              <ion-row>\n                <ion-label>رقم تليفون المستخدم</ion-label>\n              </ion-row>\n              <ion-row>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"user_mobile\" [disabled]=\"true\"></ion-input>\n                <div class=\"text-center\">\n                  <ion-button class=\"pr-2 w-100 h-90\" [disabled]=\"userOtpValid\" *ngIf=\"!userOtpValid\"\n                    (click)=\"sendingOtp(1, otpForm.controls.user_mobile.value)\">ارسال رمز التحقق</ion-button>\n                </div>\n                <ion-icon name=\"checkmark-circle-outline\" class=\"mr-2 greenColor\" *ngIf=\"userOtpValid\"\n                  [@radarAnimation]></ion-icon>\n              </ion-row>\n            </ion-col>\n            <ion-col *ngIf=\"forceClientOtp && IEstablishLoanSearch.client_mobile\">\n              <ion-row>\n                <ion-label>رقم تليفون العميل</ion-label>\n              </ion-row>\n              <ion-row>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"client_mobile\"\n                  [disabled]=\"true\"></ion-input>\n                <div class=\"text-center\">\n                  <ion-button class=\"pr-2 w-100 h-90\" [disabled]=\"clientOtpValid\" *ngIf=\"!clientOtpValid\"\n                    (click)=\"sendingOtp(2, otpForm.controls.client_mobile.value)\">ارسال رمز التحقق</ion-button>\n                </div>\n                <ion-icon name=\"checkmark-circle-outline\" class=\"mr-2 greenColor\" *ngIf=\"clientOtpValid\"\n                  [@radarAnimation]></ion-icon>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col *ngIf=\"forceCoSignersOtp && IEstablishLoanSearch.cosigner_mobile\">\n              <ion-row>\n                <ion-label>رقم تليفون الضامن الأول</ion-label>\n              </ion-row>\n              <ion-row>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"cosigner_mobile\"\n                  [disabled]=\"true\"></ion-input>\n                <div class=\"text-center\">\n                  <ion-button class=\"pr-2 w-100 h-90\" *ngIf=\"!cosignerOtpValid\" [disabled]=\"cosignerOtpValid\"\n                    (click)=\"sendingOtp(3, otpForm.controls.cosigner_mobile.value)\">ارسال رمز التحقق</ion-button>\n                </div>\n                <ion-icon name=\"checkmark-circle-outline\" class=\"mr-2 greenColor\" *ngIf=\"cosignerOtpValid\"\n                  [@radarAnimation]></ion-icon>\n              </ion-row>\n            </ion-col>\n            <ion-col *ngIf=\"forceCoSignersOtp && IEstablishLoanSearch.cosigner2_mobile\">\n              <ion-row>\n                <ion-label>رقم تليفون الضامن الثاني</ion-label>\n              </ion-row>\n              <ion-row>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"cosigner2_mobile\"\n                  [disabled]=\"true\"></ion-input>\n                <div class=\"text-center\">\n                  <ion-button class=\"pr-2 w-100 h-90\" *ngIf=\"!coSigner2OtpValid\" [disabled]=\"coSigner2OtpValid\"\n                    (click)=\"sendingOtp(4, otpForm.controls.cosigner2_mobile.value)\">ارسال رمز التحقق</ion-button>\n                </div>\n                <ion-icon name=\"checkmark-circle-outline\" class=\"mr-2 greenColor\" *ngIf=\"coSigner2OtpValid\"\n                  [@radarAnimation]></ion-icon>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <div class=\"col-12 text-center pt-2\">\n        <ion-button (click)=\"backToDocumentsForm()\" color=\"danger\">رجوع</ion-button>\n        <ion-button [disabled]=\"checkSignedButton()\" (click)=\"signApplication()\">تم التوقيع</ion-button>\n      </div>\n    </form>\n\n    <!-- Upload Documents Form -->\n    <form [formGroup]=\"uploadDocumentForm\" *ngIf=\"isUploadDocumentForm\">\n      <h4 class=\"text-center\">رفع مستندات</h4>\n      <br />\n      <ion-button slot=\"end\" (click)=\"mySelect.open()\">\n        <ion-icon name=\"add-circle\" class=\"ml-2\"></ion-icon>\n        اضافة مستند جديد\n      </ion-button>\n\n      <ion-select #mySelect hidden=\"true\" interface=\"popover\" placeholder=\"اختيار نوع المستند\"\n        (ionChange)=\"selectDocumentType($event)\">\n        <ion-select-option *ngFor=\"let documentType of ILoanDocumentTypes\" [value]=\"documentType.documentTypeCode\">\n          {{documentType.documentTypeDesc}}\n        </ion-select-option>\n      </ion-select>\n    </form>\n  </div>\n</div>\n\n<!-- OTP Modal -->\n<ion-modal #smsModal [backdropDismiss]=\"false\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar class=\"text-center\">\n        <ion-title>رقم التحقق</ion-title>\n        <ion-button slot=\"end\" (click)=\"closingSmsModal()\">\n          <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding ion-text-center\">\n      <ion-grid>\n        <form [formGroup]=\"smsForm\">\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"form-label form-label-required\">رمز التحقق\n              </ion-label>\n              <ion-input class=\"form-control\" formControlName=\"otp\" type=\"number\" [maxlength]=\"6\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-buttons class=\"ion-justify-content-center\">\n                <ion-button (click)=\"smsCheckOtp()\">تحقق من الرمز</ion-button>\n                <ion-button [disabled]=\"!canResendSmsResult\" (click)=\"startingSmsCountDown()\">اعادة الارسال\n                  {{smsCountDown}}</ion-button>\n              </ion-buttons>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-grid>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n<!-- Upload Document Modal -->\n<ion-modal #uploadDocumentModal [backdropDismiss]=\"false\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar class=\"text-center\">\n        <ion-title>رفع مستند : {{NewDocument.documentTypeName}}</ion-title>\n        <ion-button slot=\"end\" (click)=\"closingUploadDocumentModal()\" color=\"danger\">\n          <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding ion-text-center\">\n      <app-document-slot [inputData]=\"NewDocumentInputData\"\n        (outputData)=\"saveNewDocumentFile($event)\"></app-document-slot>\n      <ion-button expand=\"block\" (click)=\"uploadNewDocument()\">حفظ المستند</ion-button>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n<ion-modal #pdfModal [backdropDismiss]=\"false\" class=\"pdf-modal\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar class=\"text-center\">\n        <ion-title>طباعة مستند : {{documentNameHeader}}</ion-title>\n        <ion-button slot=\"end\" (click)=\"closingPdfModal()\" color=\"danger\">\n          <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <iframe [src]=\"pdfSrc\" width=\"100%\" height=\"100%\" frameborder=\"0\"></iframe>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n<!-- Update Decision Notes Modal -->\n<ion-modal #updateDecisionModal [backdropDismiss]=\"false\">\n  <ng-template class=\"ion-padding\">\n    <ion-header>\n      <ion-toolbar class=\"text-center\">\n        <ion-title>الرجوع للخطوة السابقة</ion-title>\n        <ion-button slot=\"end\" (click)=\"closeUpdateDecisionModal()\" color=\"danger\">\n          <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding\">\n      <form [formGroup]=\"updateDecisionForm\">\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label>ملاحظات</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-textarea formControlName=\"notes\" placeholder=\"ادخل ملاحظات الخطوة\" [autoGrow]=\"true\"></ion-textarea>\n        </ion-row>\n        <ion-row style=\"justify-content: center\" class=\"ion-padding\">\n          <ion-button (click)=\"updateApplicationFinalDecision()\">الرجوع للخطوة السابقة</ion-button>\n        </ion-row>\n      </form>\n    </ion-content>\n    <app-loader [isVisible]=\"showLoaderDecision\"></app-loader>\n  </ng-template>\n</ion-modal>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_establish-loan_establish-loan_module_ts.js.map