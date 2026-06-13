"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_loan-issuance_loan-issuance_module_ts"],{

/***/ 21484:
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-issuance/loan-issuance-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanIssuancePageRoutingModule": function() { return /* binding */ LoanIssuancePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_issuance_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-issuance.page */ 43142);






var routes = [{
  path: '',
  component: _loan_issuance_page__WEBPACK_IMPORTED_MODULE_2__.LoanIssuancePage
}];

var LoanIssuancePageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanIssuancePageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanIssuancePageRoutingModule);
});

LoanIssuancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoanIssuancePageRoutingModule);


/***/ }),

/***/ 45685:
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-issuance/loan-issuance.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanIssuancePageModule": function() { return /* binding */ LoanIssuancePageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);
/* harmony import */ var _loan_issuance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-issuance-routing.module */ 21484);
/* harmony import */ var _loan_issuance_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-issuance.page */ 43142);












var LoanIssuancePageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanIssuancePageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanIssuancePageModule);
});

LoanIssuancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _loan_issuance_routing_module__WEBPACK_IMPORTED_MODULE_3__.LoanIssuancePageRoutingModule],
  declarations: [_loan_issuance_page__WEBPACK_IMPORTED_MODULE_4__.LoanIssuancePage]
})], LoanIssuancePageModule);


/***/ }),

/***/ 43142:
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-issuance/loan-issuance.page.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanIssuancePage": function() { return /* binding */ LoanIssuancePage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _loan_issuance_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-issuance.page.html?ngResource */ 21238);
/* harmony import */ var _loan_issuance_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-issuance.page.scss?ngResource */ 40448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);

















var LoanIssuancePage = /*#__PURE__*/function () {
  function LoanIssuancePage(env, http, formBuilder, alertController, datepipe, platform, alertService, router, referencesService, authService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoanIssuancePage);

    this.env = env;
    this.http = http;
    this.formBuilder = formBuilder;
    this.alertController = alertController;
    this.datepipe = datepipe;
    this.platform = platform;
    this.alertService = alertService;
    this.router = router;
    this.referencesService = referencesService;
    this.authService = authService;
    this.showLoader = false;
    this.today = new Date();
    this.loan_date = "";
    this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe("en-US");
    this.isSearching = true;
    this.isLoanInfoForm = false;
    this.fundingReferenceResponse = {
      fundingRefs: [],
      iscore_external_funding: null
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoanIssuancePage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.LoanIssuanceForm = this.formBuilder.group({
                  loan_status: [""],
                  ecollect_code: [null],
                  loan_last_trans_date: [""],
                  uuc: [""],
                  funder_code: [""],
                  funding_reference_id: [""],
                  loan_notes: [""]
                });
                _context.next = 3;
                return this.referencesService.getAllFunders();

              case 3:
                this.Funders = _context.sent;
                _context.next = 6;
                return this.authService.getUserInfo();

              case 6:
                this.userInfo = _context.sent;
                this.registerBackButtonListener();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "formSubmit",
    value: function formSubmit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var _this = this;

        var ecollect_code;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.LoanIssuanceForm.valid) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return this.alertService.SaveAlert();

              case 4:
                if (!_context2.sent) {
                  _context2.next = 9;
                  break;
                }

                this.showLoader = true;
                this.LoanIssuanceForm.patchValue({
                  loan_status: 1,
                  uuc: this.LoanInfo.uuc
                });

                if (this.LoanIssuanceForm.value.ecollect_code != null) {
                  ecollect_code = this.LoanIssuanceForm.controls.ecollect_code.value.toString();
                }

                this.http.post(this.env.API_URL + "api/Loan/LoanIssuance", {
                  loan_status: this.LoanIssuanceForm.controls.loan_status.value.toString(),
                  ecollect_code: ecollect_code,
                  loan_last_trans_date: this.LoanIssuanceForm.controls.loan_last_trans_date.value.toString(),
                  uuc: this.LoanIssuanceForm.controls.uuc.value.toString(),
                  loan_key: this.SearchResult.loan_key.toString(),
                  funder_code: this.LoanIssuanceForm.controls.funder_code.value.toString(),
                  funding_reference_id: this.LoanIssuanceForm.controls.funding_reference_id.value === null ? null : this.LoanIssuanceForm.controls.funding_reference_id.value.toString(),
                  loan_notes: this.LoanIssuanceForm.controls.loan_notes.value === null ? null : this.LoanIssuanceForm.controls.loan_notes.value.toString()
                }).subscribe({
                  next: function next(data) {
                    _this.clearForms();

                    _this.showLoader = false;

                    _this.alertService.showAlertConfirm("تم اصدار القرض", true);
                  },
                  error: function error(err) {
                    _this.alertService.showAlertError(err.error, false);

                    _this.showLoader = false;
                  }
                });

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "clientSelected",
    value: function clientSelected(event) {
      var _this2 = this;

      this.SearchResult = event;
      this.showLoader = true;
      this.isSearching = false;
      this.http.post(this.env.API_URL + "api/Loan/GetLoanInstallments", {
        loan_key: event.loan_key.toString()
      }).subscribe({
        next: function next(data) {
          _this2.LoanInfo = data["loanDisbursementDTO"];
          _this2.LoanInstallments = data["installments"];

          _this2.getEcollectData(_this2.SearchResult.client_key.toString());

          var ChangedFormat = _this2.pipe.transform(_this2.today, "yyyy-MM-dd");

          _this2.loan_date = ChangedFormat;

          _this2.LoanIssuanceForm.patchValue({
            loan_last_trans_date: _this2.loan_date,
            funder_code: _this2.LoanInfo.funder_code,
            funding_reference_id: _this2.LoanInfo.funding_reference_id,
            loan_notes: _this2.LoanInfo.loan_notes
          });

          if (_this2.LoanInfo.funder_code !== null && _this2.LoanInfo.funder_code !== "") _this2.checkFundingReference(_this2.LoanInfo.funder_code);
          _this2.isLoanInfoForm = true;
          _this2.showLoader = false;
        },
        error: function error(err) {
          _this2.alertService.showAlertError(err.error, false);

          _this2.showLoader = false;
        }
      });
    }
  }, {
    key: "checker",
    value: function checker(input) {
      return this.datepipe.transform(input, "yyyy-MM-dd");
    }
  }, {
    key: "getEcollectData",
    value: function getEcollectData(client_key) {
      var _this3 = this;

      this.http.post(this.env.API_URL + "api/StaticRef/GetEcollectDataByClientKey", {
        client_key: client_key
      }).subscribe({
        next: function next(data) {
          _this3.EcollectData = data;

          if (_this3.EcollectData.length != 0) {
            _this3.LoanIssuanceForm.patchValue({
              ecollect_code: _this3.EcollectData[0].ecollect_code
            });
          }
        },
        error: function error(err) {
          _this3.alertService.showAlertError(err.error, false);

          _this3.showLoader = false;
        }
      });
    }
  }, {
    key: "clearForms",
    value: function clearForms() {
      this.LoanInfo = null;
      this.LoanInstallments = [];
      this.EcollectData = [];
      this.LoanIssuanceForm.reset();
      this.isSearching = true;
      this.isLoanInfoForm = false;
    }
  }, {
    key: "NumberFormatStyle",
    value: function NumberFormatStyle(number) {
      var result = (0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.formatNumber)(Number(number), "en-US", "1.2-2");
      return result;
    }
  }, {
    key: "confirm",
    value: function confirm() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var _this4 = this;

        var alert;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                alert = this.alertController.create({
                  header: "تنبيه",
                  message: "هل انت متاكد من تنفيذ هذه العمليه",
                  buttons: [{
                    text: "نعم",
                    role: "OK",
                    cssClass: "btn-success",
                    handler: function handler() {
                      _this4.formSubmit();
                    }
                  }, {
                    text: "لا",
                    cssClass: "btn-danger",
                    handler: function handler() {}
                  }]
                });
                _context3.next = 3;
                return alert;

              case 3:
                _context3.sent.present();

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.backButtonListener.unsubscribe();
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
      if (this.isLoanInfoForm == true) {
        this.isLoanInfoForm = false;
        this.isSearching = true;
      } else {
        this.router.navigate(["/home"]);
      }
    }
  }, {
    key: "funderCodeChange",
    value: function funderCodeChange($event) {
      if ($event.detail.value != "") {
        this.LoanIssuanceForm.patchValue({
          funding_reference_id: null
        });
        this.checkFundingReference($event.detail.value);
      }
    }
  }, {
    key: "checkFundingReference",
    value: function checkFundingReference(funder_code) {
      var _this6 = this;

      this.showLoader = true;
      this.http.post(this.env.API_URL + "api/LoanApplications/GetFundingReference", {
        org_code: this.userInfo.org_code,
        funder_code: funder_code
      }).subscribe({
        next: function next(data) {
          console.log("data", data);
          _this6.fundingReferenceResponse.fundingRefs = data["fundingRefs"];
          _this6.fundingReferenceResponse.iscore_external_funding = data["iscore_external_funding"];

          if (_this6.fundingReferenceResponse.iscore_external_funding == "1") {
            _this6.isIscore_external_funding = true;

            _this6.LoanIssuanceForm.controls["funding_reference_id"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]);
          } else {
            _this6.isIscore_external_funding = false;

            _this6.LoanIssuanceForm.controls["funding_reference_id"].clearValidators();
          }

          _this6.LoanIssuanceForm.controls["funding_reference_id"].updateValueAndValidity();

          _this6.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this6.showLoader = false;
        }
      });
    }
  }, {
    key: "GetLoanIssuanceForm",
    get: function get() {
      return this.LoanIssuanceForm.controls;
    }
  }]);

  return LoanIssuancePage;
}();

LoanIssuancePage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_7__.ReferencesService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_8__.MohassilAuthService
  }];
};

LoanIssuancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: "app-loan-issuance",
  template: _loan_issuance_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_loan_issuance_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], LoanIssuancePage);


/***/ }),

/***/ 40448:
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-issuance/loan-issuance.page.scss?ngResource ***!
  \************************************************************************************/
/***/ (function(module) {

module.exports = ".inherit-color {\n  --color: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4taXNzdWFuY2UucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcbG9hbnNcXGxvYW4taXNzdWFuY2VcXGxvYW4taXNzdWFuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7QUNDRiIsImZpbGUiOiJsb2FuLWlzc3VhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmhlcml0LWNvbG9yIHtcclxuICAtLWNvbG9yOiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmluaGVyaXQtY29sb3Ige1xuICAtLWNvbG9yOiBhdXRvICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 21238:
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-issuance/loan-issuance.page.html?ngResource ***!
  \************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div\n  class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\"\n>\n  <div>\n    <h4 class=\"mr-1 mb-md-0\">إصدار القرض</h4>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-client-search\n      *ngIf=\"isSearching\"\n      [sourcePage]=\"10\"\n      [pageAction]=\"0\"\n      [resultType]=\"1\"\n      [initialSearchType]=\"'1'\"\n      (selectedClient)=\"clientSelected($event)\"\n    >\n    </app-client-search>\n  </div>\n</div>\n<form [formGroup]=\"LoanIssuanceForm\">\n  <div class=\"row\" *ngIf=\"isLoanInfoForm\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <ion-modal\n            id=\"user-info-modal\"\n            #modal\n            trigger=\"click-trigger-loan-issuance\"\n          >\n            <ng-template>\n              <ion-toolbar>\n                <ion-title> بيانات العميل </ion-title>\n                <ion-buttons slot=\"end\">\n                  <ion-button (click)=\"modal.dismiss()\">\n                    <ion-icon name=\"close-outline\"></ion-icon>\n                  </ion-button>\n                </ion-buttons>\n              </ion-toolbar>\n              <ion-card class=\"w-100 h-100 mx-0 my-0 inherit-color\">\n                <ion-card-content class=\"align-middle\">\n                  <ion-grid class=\"card inherit-color px-0 py-0\">\n                    <div class=\"card-body\">\n                      <ion-row>\n                        <ion-col>\n                          <ion-label>كود العميل</ion-label>\n                          <ion-label class=\"form-control\">\n                            {{LoanInfo.org_branch_code}}/{{LoanInfo.client_code}}\n                          </ion-label>\n                        </ion-col>\n                        <ion-col>\n                          <ion-label>عدد الاقساط</ion-label>\n                          <ion-label class=\"form-control\">\n                            {{LoanInfo.loan_no}}\n                          </ion-label>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col>\n                          <ion-label>فترة السماح</ion-label>\n                          <ion-label class=\"form-control\">\n                            {{LoanInfo.loan_gp}}\n                          </ion-label>\n                        </ion-col>\n                        <ion-col>\n                          <ion-label>فترة السداد كل</ion-label>\n                          <ion-label class=\"form-control\">\n                            {{LoanInfo.period_length }} {{LoanInfo.ref_desc }}\n                          </ion-label>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col>\n                          <ion-label>المندوب</ion-label>\n                          <ion-label class=\"form-control\">\n                            {{LoanInfo.officer_name}}\n                          </ion-label>\n                        </ion-col>\n                        <ion-col>\n                          <ion-label>العملة</ion-label>\n                          <ion-label class=\"form-control\">\n                            {{LoanInfo.currency_name }}\n                          </ion-label>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col>\n                          <ion-label>المرجع</ion-label>\n                          <ion-label class=\"form-control\">\n                            {{LoanInfo.loan_vouch_char??LoanInfo.loan_vouch}}\n                          </ion-label>\n                        </ion-col>\n                        <ion-col>\n                          <ion-label>تاريخ الإنشاء</ion-label>\n                          <ion-label class=\"form-control\">\n                            {{checker(LoanInfo.loan_date) }}\n                          </ion-label>\n                        </ion-col>\n                      </ion-row>\n                    </div>\n                  </ion-grid>\n                </ion-card-content>\n              </ion-card>\n            </ng-template>\n          </ion-modal>\n          <div class=\"row d-flex align-items-center\">\n            <div class=\"col-lg-10\">\n              <div class=\"row d-flex align-items-center\">\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>الإسم</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanInfo.client_name}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>الرقم القومي</h6>\n\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{SearchResult.nation_id }}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>قيمة القرض</h6>\n\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{NumberFormatStyle(LoanInfo.loan_am)}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row d-flex align-items-center\">\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>بنك الإصدار</h6>\n                    <div>\n                      <ion-label class=\"form-control\">\n                        {{LoanInfo.bank_name}}\n                      </ion-label>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>المحفظة الالكترونيه</h6>\n                    <div>\n                      <ion-select\n                        interface=\"popover\"\n                        placeholder=\"المحفظة الالكترونيه\"\n                        class=\"subselect\"\n                        formControlName=\"ecollect_code\"\n                        [disabled]=\"true\"\n                      >\n                        <ion-select-option\n                          *ngFor=\"let Ecollect of EcollectData\"\n                          [value]=\"Ecollect.ecollect_code\"\n                        >\n                          {{Ecollect.ecollect_desc}}\n                        </ion-select-option>\n                      </ion-select>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>تاريخ الإصدار</h6>\n                    <div>\n                      <ngx-datepicker\n                        [parentForm]=\"LoanIssuanceForm\"\n                        parentFormControllerName=\"loan_last_trans_date\"\n                      ></ngx-datepicker>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row d-flex align-items-center\">\n                <div class=\"col-lg-3\">\n                  <div class=\"form-group\">\n                    <h6>مصدر التمويل</h6>\n                    <div class=\"form-group\">\n                      <ion-select\n                        interface=\"popover\"\n                        placeholder=\"مصدر التمويل\"\n                        formControlName=\"funder_code\"\n                        class=\"subselect\"\n                        (ionChange)=\"funderCodeChange($event)\"\n                      >\n                        <ion-select-option\n                          *ngFor=\"let funder of Funders\"\n                          [value]=\"funder.funder_code\"\n                        >\n                          {{funder.funder_name}}\n                        </ion-select-option>\n                      </ion-select>\n                      <div\n                        class=\"text-danger input-validator\"\n                        *ngIf=\"isLoanInfoForm && (GetLoanIssuanceForm.funder_code.errors?.['required'])\"\n                        role=\"alert\"\n                      >\n                        يجب اختيار مصدر التمويل\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-3\" *ngIf=\"isIscore_external_funding\">\n                  <div class=\"form-group\">\n                    <h6>كود التمويل</h6>\n                    <div class=\"form-group\">\n                      <ion-select\n                        interface=\"popover\"\n                        placeholder=\"كود التمويل\"\n                        formControlName=\"funding_reference_id\"\n                        class=\"subselect\"\n                      >\n                        <ion-select-option\n                          *ngFor=\"let ref of fundingReferenceResponse.fundingRefs\"\n                          [value]=\"ref.funding_reference_id\"\n                        >\n                          {{ref.funding_reference_code}}\n                        </ion-select-option>\n                      </ion-select>\n                      <div\n                        class=\"text-danger input-validator\"\n                        *ngIf=\"isLoanInfoForm && (GetLoanIssuanceForm.funding_reference_id.errors?.['required'])\"\n                        role=\"alert\"\n                      >\n                        يجب اختيار كود التمويل\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row d-flex align-items-center\">\n                <div class=\"col-lg-12\">\n                  <div class=\"form-group\">\n                    <h6>ملاحظات القرض</h6>\n                    <div class=\"form-group\">\n                      <ion-textarea\n                        formControlName=\"loan_notes\"\n                        [autoGrow]=\"true\"\n                      ></ion-textarea>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-2\">\n              <div class=\"form-group d-flex justify-content-center\">\n                <ion-button id=\"click-trigger-loan-issuance\">\n                  <ion-icon name=\"information-circle-outline\"></ion-icon>\n                </ion-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"ion-padding\" slot=\"content\" *ngIf=\"isLoanInfoForm\">\n    <div>\n      <h5 class=\"mr-1 mb-md-0 pb-3\">الاقساط</h5>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"row justify-content-center\">\n          <div class=\"table-responsive\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th class=\"text-center\">رقم القسط</th>\n                  <th class=\"text-center\">القيمة</th>\n                  <th class=\"text-center\">الاصل</th>\n                  <th class=\"text-center\">المصاريف</th>\n                  <th class=\"text-center\">تاريخ الاستحقاق</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let installment of LoanInstallments; let i = index\">\n                  <td class=\"text-center\">{{ installment.inst_serial }}</td>\n                  <td class=\"text-center\">\n                    {{ NumberFormatStyle(installment.inst_am) }}\n                  </td>\n                  <td class=\"text-center\">\n                    {{ NumberFormatStyle(installment.inst_princ) }}\n                  </td>\n                  <td class=\"text-center\">\n                    {{ NumberFormatStyle(installment.inst_int)}}\n                  </td>\n                  <td class=\"text-center\">\n                    {{ checker(installment.inst_mat_date) }}\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"row-12\">\n          <div class=\"d-flex justify-content-center mt-2\">\n            <ion-button color=\"danger\" (click)=\"clearForms()\">\n              رجوع\n            </ion-button>\n            <ion-button (click)=\"formSubmit()\"> إصدار القرض </ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_loan-issuance_loan-issuance_module_ts.js.map