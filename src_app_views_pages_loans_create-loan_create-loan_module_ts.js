"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_create-loan_create-loan_module_ts"],{

/***/ 59911:
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/loans/create-loan/create-loan-routing.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateLoanPageRoutingModule": function() { return /* binding */ CreateLoanPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _create_loan_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-loan.page */ 39307);






var routes = [{
  path: '',
  component: _create_loan_page__WEBPACK_IMPORTED_MODULE_2__.CreateLoanPage
}];

var CreateLoanPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CreateLoanPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CreateLoanPageRoutingModule);
});

CreateLoanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], CreateLoanPageRoutingModule);


/***/ }),

/***/ 93204:
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/loans/create-loan/create-loan.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateLoanPageModule": function() { return /* binding */ CreateLoanPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _create_loan_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-loan-routing.module */ 59911);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-archwizard */ 38531);
/* harmony import */ var _create_loan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-loan.page */ 39307);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);













var CreateLoanPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CreateLoanPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CreateLoanPageModule);
});

CreateLoanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, angular_archwizard__WEBPACK_IMPORTED_MODULE_10__.ArchwizardModule, _create_loan_routing_module__WEBPACK_IMPORTED_MODULE_2__.CreateLoanPageRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_create_loan_page__WEBPACK_IMPORTED_MODULE_3__.CreateLoanPage]
})], CreateLoanPageModule);


/***/ }),

/***/ 39307:
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/loans/create-loan/create-loan.page.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateLoanPage": function() { return /* binding */ CreateLoanPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _create_loan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-loan.page.html?ngResource */ 86863);
/* harmony import */ var _create_loan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-loan.page.scss?ngResource */ 29385);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/client.service */ 2671);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);
/* harmony import */ var src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/loan-applications.service */ 35866);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_services_vendor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/vendor.service */ 20725);























var CreateLoanPage = /*#__PURE__*/function () {
  function CreateLoanPage(alertController, formBuilder, env, http, modalCtrl, route, router, platform, translate, alertService, inputMaskingService, clientService, loansService, loanAppsService, referencesService, vendorService, pagingService, cdref) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CreateLoanPage);

    this.alertController = alertController;
    this.formBuilder = formBuilder;
    this.env = env;
    this.http = http;
    this.modalCtrl = modalCtrl;
    this.route = route;
    this.router = router;
    this.platform = platform;
    this.translate = translate;
    this.alertService = alertService;
    this.inputMaskingService = inputMaskingService;
    this.clientService = clientService;
    this.loansService = loansService;
    this.loanAppsService = loanAppsService;
    this.referencesService = referencesService;
    this.vendorService = vendorService;
    this.pagingService = pagingService;
    this.cdref = cdref; //#region variables

    this.currentLanguage = localStorage.getItem("currentLanguage") || "en-GB";
    this.vendorItems = [];
    this.isClientRiskStepVisible = false;
    this.cosignersData = [];
    this.cosignerPageNo = 1;
    this.isCosignerModalOpened = false;
    this.showLoader = false;

    this.formatYmd = function (date) {
      return date.toISOString().slice(0, 10);
    };

    this.dateNow = this.formatYmd(new Date());
    this.isSearching = true;
    this.search_types = [["الكود في ملف العملاء", 1], ["البحث بالرقم القومـــي", 2]];
    this.isOverDraftLoanType = true; //Uncalled fields for OverDraft loan type

    this.DefaultValueClient_risk_nature_financing_product = "00"; //#endregion
    //#region Consumer financing

    this.isUsingConsumerFinancing = false;
    this.isDownPaymentVisible = false;
    this.searchInitValue = null;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CreateLoanPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.showLoader = true;
                this.pageSize = this.pagingService.getPageSizeFromLocalStorage();
                if (!this.currentLanguage) localStorage.setItem("currentLanguage", this.currentLanguage);
                this.translate.use(this.currentLanguage);
                _context.next = 6;
                return this.getDefaults();

              case 6:
                this.loanDetails = this.formBuilder.group({
                  loanType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  req_am: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanUsage: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  period_length: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  period_type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loan_inst: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  iscore_facility: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  credit_facility_type_code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  business_activity_code: [""],
                  vendor: [null],
                  vendorBranch: [null],
                  down_payment_perc: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  down_payment_am: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]]
                });
                this.cosignersForm = this.formBuilder.group({
                  search_input: [""],
                  search_type: [""],
                  cosigners: this.formBuilder.array([])
                });
                this.clientRiskForm = this.formBuilder.group({
                  Client_risk_loan_usage: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  Client_risk_funding_method: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  Client_risk_guarantee_type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  Client_risk_insured_clients_perc: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  Client_risk_insured_project_perc: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  Client_risk_nature_financing_product: [this.DefaultValueClient_risk_nature_financing_product, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  Client_risk_product_location: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  Client_risk_geographic_risk: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  Client_risk_legal_risk: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  Client_risk_project_age: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  Client_risk_economic_risk: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]]
                });
                this.isLoanDetailsSubmitted = false;
                this.isClientRiskSubmitted = false;
                this.registerBackButtonListener();
                this.route.queryParams.subscribe(function (params) {
                  if (params === null || params === void 0 ? void 0 : params.client_code) {
                    _this.getLocalStorage();

                    _this.search.inputName.value = params.client_code;

                    _this.search.searchForm.patchValue({
                      search_input: params.client_code
                    });

                    _this.search.searchForm.updateValueAndValidity();

                    _this.search.search();
                  }
                });
                this.reqAmountValue = 0;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "getDefaults",
    value: function getDefaults() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.vendorService.getUserVendors().then(function (data) {
                  _this2.vendors = data;
                  console.log(data);
                }).catch(function (err) {
                  console.log(err);
                });

              case 2:
                _context2.next = 4;
                return this.loansService.getAllActiveLoanTypes().then(function (data) {
                  _this2.loanTypes = data;
                }).catch(function (error) {
                  console.log(error);
                  _this2.isSearching = false;
                });

              case 4:
                _context2.next = 6;
                return this.referencesService.GetPeriodTypes().then(function (data) {
                  _this2.period_types = data;
                }).catch(function (err) {
                  console.log(err);
                });

              case 6:
                _context2.next = 8;
                return this.loanAppsService.getLoanUsages().then(function (data) {
                  _this2.loanUsage = data;
                }).catch(function (err) {
                  console.log(err);
                });

              case 8:
                _context2.next = 10;
                return this.referencesService.GetLoanInt2Deduct().then(function (data) {
                  _this2.loanInt2Deduct = data;
                }).catch(function (err) {
                  console.log(err);
                });

              case 10:
                _context2.next = 12;
                return this.referencesService.GetLoanInt2().then(function (data) {
                  _this2.loanInt2 = data;
                }).catch(function (err) {
                  console.log(err);
                });

              case 12:
                _context2.next = 14;
                return this.referencesService.GetLoanInt().then(function (data) {
                  _this2.loanInt = data;
                }).catch(function (err) {
                  console.log(err);
                });

              case 14:
                _context2.next = 16;
                return this.referencesService.GetLoanAppChargePercentageTypes().then(function (data) {
                  _this2.loanAppPercentageTypes = data;
                }).catch(function (err) {
                  console.log(err);
                });

              case 16:
                _context2.next = 18;
                return this.referencesService.GetAllLoanTypeCatIScoreNatureFacilityIndicators().then(function (data) {
                  _this2.allIScoreNatureFacilityIndicators = data;
                }).catch(function (err) {
                  console.log(err);
                });

              case 18:
                _context2.next = 20;
                return this.referencesService.GetAllLoanTypeCatIScoreCreditFacilityTypes().then(function (data) {
                  _this2.allIScoreCreditFacilityTypes = data;
                }).catch(function (err) {
                  console.log(err);
                });

              case 20:
                _context2.next = 22;
                return this.referencesService.GetAllLoanTypeCatIScoreBusinessActivityTypes().then(function (data) {
                  _this2.allIScoreBusinessActivityTypes = data;
                }).catch(function (err) {
                  console.log(err);
                });

              case 22:
                _context2.next = 24;
                return this.loansService.getLoanCalcMethods().then(function (data) {
                  _this2.calcMethods = data;
                  _this2.showLoader = false;
                }).catch(function (err) {
                  console.log(err);
                  _this2.showLoader = false;
                });

              case 24:
                _context2.next = 26;
                return this.loanAppsService.getRiskMatrix().then(function (data) {
                  _this2.RiskMatrix = data;
                  _this2.showLoader = false;
                  console.log("RiskMatrix", _this2.RiskMatrix);
                }).catch(function (err) {
                  console.log(err);
                  _this2.showLoader = false;
                });

              case 26:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
    /**
     * Wizard finish function
     */

  }, {
    key: "submitLoanApp",
    value: function submitLoanApp() {
      var _this3 = this;

      var loanApp = {
        client_key: this.clientInfo.client_key.toString(),
        loan_type_code: this.loanTypeInfo.loan_type_code,
        iscore_facility_code: this.loanDetailsControls.iscore_facility.value,
        credit_facility_type_code: this.loanDetailsControls.credit_facility_type_code.value,
        business_activity_code: this.loanDetailsControls.business_activity_code.value,
        vendor_code: this.loanDetailsControls.vendor.value,
        vend_contract_code: this.loanDetailsControls.vendorBranch.value ? parseInt(this.vendorBranches.find(function (item) {
          return item.vendorBranchCode == _this3.loanDetailsControls.vendorBranch.value;
        }).vendorContractCode) : null,
        vendor_br_code: this.loanDetailsControls.vendorBranch.value,
        vendorItems: this.vendorItems.map(function (item) {
          return {
            itemCode: item.itemCode,
            quantity: item.quantity,
            itemPrice: item.itemPrice,
            fundedPrice: item.fundPrice
          };
        }),
        loan_int_rt: this.loanTypeInfo.loan_int_rt,
        loan_int_type: this.loanTypeInfo.loan_int_type,
        loan_int_rt_2: this.loanTypeInfo.loan_int_rt_2,
        loan_int_type_2: this.loanTypeInfo.loan_int_type_2,
        loan_int_2_deduct: this.loanTypeInfo.loan_int_2_deduct,
        period_type: this.loanDetailsControls.period_type.value,
        period_length: this.loanDetailsControls.period_length.value,
        req_no: this.loanDetailsControls.loan_inst.value,
        req_gp: this.loanTypeInfo.loan_gp,
        payments_shift: this.loanTypeInfo.payments_shift,
        stamp_duty_rt: this.loanTypeInfo.stamp_duty_rt,
        lo_commission_rt: this.loanTypeInfo.lo_commission_rt,
        app_charge: this.loanTypeInfo.app_charge,
        app_charge_mem: this.loanTypeInfo.app_charge_mem,
        app_charge_rt: this.loanTypeInfo.app_charge_rt,
        app_charge_rt_mem: this.loanTypeInfo.app_charge_rt_mem,
        installment_charges: this.loanTypeInfo.installment_charges,
        req_am: this.loanDetailsControls.req_am.value,
        entry_date: this.dateNow,
        loan_usage_code: this.loanDetailsControls.loanUsage.value,
        cosigners: [],
        app_charge_perc_type: this.loanTypeInfo.app_charge_perc_type,
        app_charge_mem_perc_type: this.loanTypeInfo.app_charge_mem_perc_type,
        members_with_req_amounts: this.clientInfo.members ? this.clientInfo.members : [],
        down_payment_am: this.loanDetailsControls.down_payment_am.value,
        down_payment_perc: this.loanDetailsControls.down_payment_perc.value
      };

      if (this.cosignersData.length > 0) {
        loanApp.cosigners = this.cosignersData.map(function (value) {
          return value.client_key.toString();
        });
      }

      this.showLoader = true;
      console.log("loanApp submitLoanApp", loanApp);
      this.http.post(this.env.API_URL + "api/LoanApplications/LoanAppInsert", loanApp).subscribe({
        next: function next(data) {
          if (data.loanAppCode && data.loanAppCode != -1) {
            _this3.ClientRisk({
              org_code: parseInt(data.loanAppCode.substr(0, 2), 10).toString(),
              org_branch_code: _this3.selectedClient.org_branch_code.toString(),
              branch_code: parseInt(data.loanAppCode.substr(2, 3), 10).toString(),
              client_code: parseInt(data.loanAppCode.substr(5, 7), 10).toString(),
              application_code: parseInt(data.loanAppCode.substr(12, 3), 10).toString(),
              req_no: loanApp.req_no,
              co_client_key: loanApp.co_client_key,
              co2_client_key: loanApp.co2_client_key,
              req_am: loanApp.req_am,
              loan_type_code: loanApp.loan_type_code
            });

            var ResultLoanAppCode = data.loanAppCode.padStart(15, "0");
            _this3.loanAppCode = "".concat(parseInt(ResultLoanAppCode.substr(2, 3), 10), "/").concat(parseInt(ResultLoanAppCode.substr(5, 7), 10), "/").concat(parseInt(ResultLoanAppCode.substr(12, 3), 10));
            localStorage.removeItem("loanDataForCreateCo");

            _this3.alertService.showAlertConfirm(_this3.translate.instant("loanApp.createSuccess") + ": ".concat(_this3.loanAppCode, " "), true);
          } else {
            _this3.alertService.showAlertConfirm(_this3.translate.instant("loans.workflowErrorMessage"), true);
          }

          _this3.showLoader = false;
        },
        error: function error(err) {
          console.log(err.error);

          _this3.alertService.showAlertError(err.error, false);

          _this3.showLoader = false;
        }
      });
    }
  }, {
    key: "loanDetailsControls",
    get: function get() {
      return this.loanDetails.controls;
    }
  }, {
    key: "clientRiskControls",
    get: function get() {
      return this.clientRiskForm.controls;
    }
    /**
     * Go to next step while form value is valid
     */

  }, {
    key: "loanDetailsSubmit",
    value: function loanDetailsSubmit() {
      if (this.loanDetails.valid) {
        this.wizardForm.goToNextStep();
        this.addLocalStorage();
      }

      this.isLoanDetailsSubmitted = true;
    }
  }, {
    key: "cosignerSearchValidation",
    value: function cosignerSearchValidation() {
      console.log(this.cosignersForm.controls.search_type.value, this.cosignersForm.controls.search_input.value, this.cosignersForm.valid);

      if (this.cosignersForm.controls.search_type.value == 1 && this.cosignersForm.controls.search_input.value == this.clientInfo.org_branch_code + "/" + this.clientInfo.client_code) {
        this.alertService.showAlertError("كود الضامن هو كود العميل", false);
        return;
      }

      if (this.cosignersForm.controls.search_type.value == 2 && this.cosignersForm.controls.search_input.value == this.clientInfo.nation_id) {
        this.alertService.showAlertError("الرقم القومي للضامن هو الرقم القومي للعميل", false);
        return;
      }

      if (this.cosignersForm.controls.search_type.valid && this.cosignersForm.controls.search_input.valid) this.searchForCosigner();
    }
  }, {
    key: "checkCoSigners",
    value: function checkCoSigners() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var someNotValid;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.areCosignersSubmitted = true;

                if (!this.loanTypeInfo.force_cosigner) {
                  _context3.next = 18;
                  break;
                }

                someNotValid = this.cosignersData.some(function (value) {
                  return !value.nation_id || !value.client_key || value.nation_id.length < 14 || value.client_key.length == 12;
                });

                if (!(!someNotValid && this.cosignersData.length >= this.loanTypeInfo.min_no_cosigners && this.clientInfo.client_type_code == "1")) {
                  _context3.next = 8;
                  break;
                }

                this.wizardForm.goToNextStep();
                this.addLocalStorage();
                _context3.next = 16;
                break;

              case 8:
                if (!(this.clientInfo.client_type_code == "1")) {
                  _context3.next = 16;
                  break;
                }

                if (!(this.cosignersData.length < this.loanTypeInfo.min_no_cosigners)) {
                  _context3.next = 14;
                  break;
                }

                _context3.next = 12;
                return this.alertService.showAlertError("\u0639\u062F\u062F \u0627\u0644\u0636\u0645\u0627\u0646 \u0623\u0642\u0644 \u0645\u0646 \u0627\u0644\u0645\u0637\u0644\u0648\u0628 , \u064A\u062C\u0628 \u0627\u062F\u062E\u0627\u0644 \u0639\u0644\u064A \u0627\u0644\u0627\u0642\u0644: ".concat(this.loanTypeInfo.min_no_cosigners), false);

              case 12:
                _context3.next = 16;
                break;

              case 14:
                _context3.next = 16;
                return this.alertService.showAlertError("الضمان الذين تم إدخالهم غير صحيحين", false);

              case 16:
                _context3.next = 20;
                break;

              case 18:
                this.wizardForm.goToNextStep();
                this.addLocalStorage();

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "clientRiskSubmit",
    value: function clientRiskSubmit() {
      this.wizardForm.goToNextStep();
      this.isClientRiskSubmitted = true;
      this.addLocalStorage();
    }
  }, {
    key: "backToSearch",
    value: function backToSearch() {
      this.showLoader = true;
      this.clientInfo = null;
      this.loanDetails.reset();
      this.cosignersForm.reset();
      this.clientRiskForm.reset();
      this.cosignersArray.clear();
      this.filteredIScoreBusinessActivityTypes = null;
      this.isClientRiskSubmitted = false;
      this.isLoanDetailsSubmitted = false;
      this.areCosignersSubmitted = false;
      this.isSearching = true;
      this.showLoader = false;
      this.isOverDraftLoanType = true;
      this.isDownPaymentVisible = false;
    }
  }, {
    key: "clientSelected",
    value: function clientSelected(event) {
      var _this4 = this;

      this.selectedClient = event;

      if (event.client_key != null) {
        this.showLoader = true;
        this.clientService.getClientByClientKey(event.client_key).then(function (data) {
          return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
            var _this5 = this;

            return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.clientInfo = data;

                    if (!(this.clientInfo.client_type_code == "2")) {
                      _context4.next = 8;
                      break;
                    }

                    _context4.next = 4;
                    return this.loansService.getAllActiveLoanTypesForGroups().then(function (data) {
                      _this5.loanTypes = data;
                    }).catch(function (error) {
                      console.log(error);
                      _this5.isSearching = false;
                    });

                  case 4:
                    _context4.next = 6;
                    return this.clientService.getClientsByGroupKey(this.clientInfo.client_key);

                  case 6:
                    this.selectedMembers = _context4.sent;
                    this.clientInfo.members = this.selectedMembers.map(function (value) {
                      return Object.assign(Object.assign({}, value), {
                        requestedAmount: "0"
                      });
                    });

                  case 8:
                    console.log(data);
                    this.isSearching = false;
                    this.showLoader = false;
                    this.loanDetailsControls.period_length.disable();
                    this.loanDetailsControls.period_type.disable();

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }).catch(function (err) {
          console.log(err);
          _this4.isSearching = false;
          _this4.showLoader = false;
        });
        this.http.get(this.env.API_URL + "api/Clients/GetClientRiskValues", {
          params: {
            clientKey: event.client_key.toString()
          }
        }).subscribe({
          next: function next(data) {
            var _a, _b, _c; // rowNum 14 => clientRiskForm.Client_risk_geographic_risk


            _this4.clientRiskForm.patchValue({
              Client_risk_geographic_risk: (_c = (_b = (_a = data.find(function (x) {
                return x.rowNum == 14;
              })) === null || _a === void 0 ? void 0 : _a.riskValue) === null || _b === void 0 ? void 0 : _b.toString()) !== null && _c !== void 0 ? _c : ""
            });
          },
          error: function error() {
            _this4.clientRiskForm.patchValue({
              Client_risk_geographic_risk: ""
            });
          }
        });
      }
    }
  }, {
    key: "downPaymentDesc",
    value: function downPaymentDesc() {
      var dp = this.loanTypeInfo.down_payment;
      var type = this.loanTypeInfo.down_payment_type;

      if (dp === 1 && type === 1) {
        this.DownPaymentLabel = "نسبه الدفعه المقدمه";
      }

      if (dp === 2 && type === 1) {
        this.DownPaymentLabel = "نسبه الدفعه المؤخره";
      }

      if (dp === 1 && type === 2) {
        this.DownPaymentLabel = "قيمه الدفعه المقدمه";
      }

      if (dp === 2 && type === 2) {
        this.DownPaymentLabel = "قيمه الدفعه المؤخره";
      }
    }
  }, {
    key: "ReqAmountOnChange",
    value: function ReqAmountOnChange() {
      this.reqAmountValue = this.loanDetailsControls.req_am.value;

      if (this.reqAmountValue == null || this.reqAmountValue == 0) {
        this.loanDetailsControls.down_payment_am.patchValue(null);
      }
    }
  }, {
    key: "onLoanTypeChanged",
    value: function onLoanTypeChanged($event) {
      var _this6 = this;

      this.showLoader = true;
      this.loanDetailsControls.down_payment_am.patchValue(null);
      this.loanDetailsControls.down_payment_perc.patchValue(null);
      this.http.get(this.env.API_URL + "api/Loan/GetLoanTypeInfo?loanTypeCode=".concat($event.detail.value)).subscribe({
        next: function next(data) {
          _this6.loanTypeInfo = data;
          _this6.isClientRiskStepVisible = _this6.loanTypeInfo.client_risk_status != 0 ? true : false;
          console.log("LoanType API Response:", data);
          _this6.filteredIScoreBusinessActivityTypes = _this6.allIScoreBusinessActivityTypes.filter(function (activity) {
            return activity.loan_type_cat == _this6.loanTypeInfo.loan_type_cat.toString();
          }).map(function (businessActivity) {
            return {
              text: businessActivity.name,
              value: businessActivity.code
            };
          });
          _this6.filteredIScoreCreditFacilityTypes = _this6.allIScoreCreditFacilityTypes.filter(function (type) {
            return type.loan_type_cat == _this6.loanTypeInfo.loan_type_cat.toString();
          });
          _this6.filteredIScoreNatureFacilityIndicators = _this6.allIScoreNatureFacilityIndicators.filter(function (indicator) {
            return indicator.loan_type_cat == _this6.loanTypeInfo.loan_type_cat.toString();
          });
          console.log(_this6.filteredIScoreNatureFacilityIndicators, _this6.filteredIScoreCreditFacilityTypes, _this6.filteredIScoreBusinessActivityTypes);

          _this6.loadDefaultValuesLoanType();

          if (_this6.loanTypeInfo.loan_type_cat == 1) {
            _this6.loanDetails.controls.business_activity_code.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
          } else {
            _this6.loanDetails.controls.business_activity_code.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
          }

          _this6.loanDetails.controls.business_activity_code.updateValueAndValidity();

          _this6.loanDetails.controls.req_am.setValidators([]);

          _this6.loanDetails.controls.req_am.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);

          _this6.loanDetails.controls.req_am.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(_this6.loanTypeInfo.min_loan_am));

          _this6.loanDetails.controls.req_am.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max(_this6.loanTypeInfo.max_loan_am + 1));

          _this6.loanDetails.controls.req_am.updateValueAndValidity();

          _this6.loanDetails.controls.loan_inst.setValidators([]);

          _this6.loanDetails.controls.loan_inst.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);

          _this6.loanDetails.controls.loan_inst.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(_this6.loanTypeInfo.min_no_inst));

          _this6.loanDetails.controls.loan_inst.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max(_this6.loanTypeInfo.max_no_inst));

          _this6.loanDetails.controls.loan_inst.updateValueAndValidity();

          if (_this6.loanTypeInfo.service_provider == 1) {
            _this6.loanDetails.controls.vendorBranch.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);

            _this6.loanDetails.controls.vendor.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
          } else {
            console.log("ana ha remove");

            _this6.loanDetails.controls.vendorBranch.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);

            _this6.loanDetails.controls.vendor.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);
          } //Remove uncalled fields for OverDraft loan_type_cat = 3


          if (_this6.loanTypeInfo.loan_type_cat == 3) {
            console.log("im overdraft loan type");
            _this6.isOverDraftLoanType = false;

            _this6.loanDetails.controls.loan_inst.setValidators([]);

            _this6.loanDetails.controls.loan_inst.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);

            _this6.loanDetails.controls.loan_inst.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(_this6.loanTypeInfo.min_no_inst));

            _this6.loanDetails.controls.loan_inst.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max(_this6.loanTypeInfo.max_no_inst));

            _this6.loanDetails.controls.loan_inst.updateValueAndValidity();

            console.log("uncalled fields validation removed");
          } else {
            _this6.isOverDraftLoanType = true;

            _this6.loanDetails.controls.loan_inst.setValidators([]);

            _this6.loanDetails.controls.loan_inst.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);

            _this6.loanDetails.controls.loan_inst.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(_this6.loanTypeInfo.min_no_inst));

            _this6.loanDetails.controls.loan_inst.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max(_this6.loanTypeInfo.max_no_inst));

            _this6.loanDetails.controls.loan_inst.updateValueAndValidity();
          }

          _this6.loanDetails.controls.vendorBranch.updateValueAndValidity();

          _this6.loanDetails.controls.vendor.updateValueAndValidity();

          _this6.isUsingConsumerFinancing = _this6.loanTypeInfo.service_provider == 1 ? true : false;
          _this6.showLoader = false;

          if (_this6.loanTypeInfo.down_payment === 0) {
            console.log("Down payment is not required");
            _this6.isDownPaymentVisible = false;

            _this6.loanDetails.controls.down_payment_perc.setValidators([]);

            _this6.loanDetails.controls.down_payment_perc.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);

            _this6.loanDetails.controls.down_payment_perc.updateValueAndValidity();

            _this6.loanDetails.controls.down_payment_am.setValidators([]);

            _this6.loanDetails.controls.down_payment_am.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);

            _this6.loanDetails.controls.down_payment_am.updateValueAndValidity();
          } else {
            console.log("Down payment is required");
            _this6.isDownPaymentVisible = true;

            _this6.downPaymentDesc();

            if (_this6.loanTypeInfo.down_payment_type === 1) {
              _this6.loanDetails.controls.down_payment_perc.setValidators([]);

              _this6.loanDetails.controls.down_payment_perc.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);

              _this6.loanDetails.controls.down_payment_perc.updateValueAndValidity();

              _this6.loanDetails.controls.down_payment_am.setValidators([]);

              _this6.loanDetails.controls.down_payment_am.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);

              _this6.loanDetails.controls.down_payment_am.updateValueAndValidity();
            }

            if (_this6.loanTypeInfo.down_payment_type === 2) {
              _this6.loanDetails.controls.down_payment_am.setValidators([]);

              _this6.loanDetails.controls.down_payment_am.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);

              _this6.loanDetails.controls.down_payment_am.updateValueAndValidity();

              _this6.loanDetails.controls.down_payment_perc.setValidators([]);

              _this6.loanDetails.controls.down_payment_perc.removeValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required);

              _this6.loanDetails.controls.down_payment_perc.updateValueAndValidity();
            }
          }
        },
        error: function error(err) {
          console.log(err);
          _this6.showLoader = false;
        }
      });
    }
  }, {
    key: "loadDefaultValuesLoanType",
    value: function loadDefaultValuesLoanType() {
      if (this.loanTypeInfo.loan_inst != undefined) this.loanDetailsControls.loan_inst.patchValue(this.loanTypeInfo.loan_inst);
      if (this.loanTypeInfo.period_length != undefined) this.loanDetailsControls.period_length.patchValue(this.loanTypeInfo.period_length);
      if (this.loanTypeInfo.period_type != undefined) this.loanDetailsControls.period_type.patchValue(this.loanTypeInfo.period_type.toString());
      if (this.loanTypeInfo.edit_loan_inst != undefined && this.loanTypeInfo.edit_loan_inst == 0) this.loanDetailsControls.loan_inst.disable();else if (this.loanTypeInfo.edit_loan_inst != undefined && this.loanTypeInfo.edit_loan_inst == 1) this.loanDetailsControls.loan_inst.enable();
      this.loanDetails.controls.vendorBranch.patchValue(null);
      this.loanDetails.controls.vendor.patchValue(null);
      if (this.loanTypeInfo.down_payment_perc != null) this.loanDetailsControls.down_payment_perc.patchValue(this.loanTypeInfo.down_payment_perc);
    }
  }, {
    key: "checker",
    value: function checker(input) {
      if (input == null) return "لا يوجد";else {
        if (input.includes("00:00:00")) {
          return input.split(" ")[0];
        } else {
          return input;
        }
      }
    }
  }, {
    key: "searchForCosigner",
    value: function searchForCosigner() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
        var _this7 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!(this.cosignersForm.controls.search_input.value.length > 0)) {
                  _context8.next = 15;
                  break;
                }

                if (!(this.cosignersForm.controls.search_type.value == 1)) {
                  _context8.next = 6;
                  break;
                }

                this.showLoader = true;
                this.http.get(this.env.API_URL + "api/Clients/GetCoSignerByCode?clientCode=".concat(this.cosignersForm.controls.search_input.value)).subscribe({
                  next: function next(data) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              console.log(data);

                              if (data) {
                                this.addCosignerRow(data);
                              }

                              this.showLoader = false;

                            case 3:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5, this);
                    }));
                  },
                  error: function error(err) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
                        while (1) {
                          switch (_context6.prev = _context6.next) {
                            case 0:
                              console.log(err);
                              _context6.next = 3;
                              return this.alertService.showAlertError(err.error, false);

                            case 3:
                              this.showLoader = false;

                            case 4:
                            case "end":
                              return _context6.stop();
                          }
                        }
                      }, _callee6, this);
                    }));
                  }
                });
                _context8.next = 13;
                break;

              case 6:
                if (!(this.cosignersForm.controls.search_type.value == 2)) {
                  _context8.next = 11;
                  break;
                }

                this.showLoader = true;
                this.http.get(this.env.API_URL + "api/Clients/GetCoSignerByNationID?nationID=".concat(this.cosignersForm.controls.search_input.value)).subscribe({
                  next: function next(data) {
                    _this7.addCosignerRow(data);

                    _this7.showLoader = false;
                  },
                  error: function error(err) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
                        while (1) {
                          switch (_context7.prev = _context7.next) {
                            case 0:
                              console.log(err);
                              _context7.next = 3;
                              return this.alertService.showAlertError(err.error, false);

                            case 3:
                              this.showLoader = false;

                            case 4:
                            case "end":
                              return _context7.stop();
                          }
                        }
                      }, _callee7, this);
                    }));
                  }
                });
                _context8.next = 13;
                break;

              case 11:
                _context8.next = 13;
                return this.alertService.showAlertError("يجب اختيار نوع بحث", false);

              case 13:
                _context8.next = 17;
                break;

              case 15:
                _context8.next = 17;
                return this.alertService.showAlertError("يجب ادخال بحث", false);

              case 17:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }, {
    key: "closeLoanInstModal",
    value: function closeLoanInstModal() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.loanInstModal.dismiss();

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    }
  }, {
    key: "calcGroupMembersReqLoanAmount",
    value: function calcGroupMembersReqLoanAmount() {
      this.loanDetailsControls.req_am.patchValue(this.clientInfo.members.reduce(function (accumulator, currentValue) {
        return accumulator + parseInt(currentValue.requestedAmount);
      }, 0));
      console.log(this.loanDetailsControls.req_am);
    }
  }, {
    key: "closeGroupMembersModal",
    value: function closeGroupMembersModal() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.calcGroupMembersReqLoanAmount();
                this.groupMembersModal.dismiss();

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
    }
  }, {
    key: "openModal",
    value: function openModal() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee12() {
        var _this8 = this;

        var modal;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                modal = this.loanInstModal;

                if (!this.loanDetails.valid) {
                  _context12.next = 6;
                  break;
                }

                this.showLoader = true;
                this.http.post(this.env.API_URL + "api/Loan/CalculateLoan", {
                  req_am: "" + this.loanDetailsControls.req_am.value,
                  loan_type: this.loanDetailsControls.loanType.value,
                  req_no: "" + this.loanDetailsControls.loan_inst.value,
                  down_payment: this.loanTypeInfo.down_payment,
                  down_payment_type: this.loanTypeInfo.down_payment_type,
                  down_payment_am: this.loanDetailsControls.down_payment_am.value,
                  down_payment_perc: this.loanDetailsControls.down_payment_perc.value
                }).subscribe({
                  next: function next(data) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this8, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee11() {
                      var i;
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee11$(_context11) {
                        while (1) {
                          switch (_context11.prev = _context11.next) {
                            case 0:
                              this.calcRes = data;

                              for (i = 0; i < this.calcRes.length; i++) {
                                this.calcRes[i].payamoun = (0,_angular_common__WEBPACK_IMPORTED_MODULE_16__.formatNumber)(Number(parseInt(this.calcRes[i].payamoun)), "en-US", "1.0-0");
                              }

                              this.showLoader = false;
                              _context11.next = 5;
                              return modal.present();

                            case 5:
                            case "end":
                              return _context11.stop();
                          }
                        }
                      }, _callee11, this);
                    }));
                  },
                  error: function error(err) {
                    console.log(err);
                    _this8.showLoader = false;
                  }
                });
                _context12.next = 8;
                break;

              case 6:
                _context12.next = 8;
                return this.alertService.showAlertError("يجب ادخال بيانات القرض", false);

              case 8:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
    }
  }, {
    key: "openGroupMembersModal",
    value: function openGroupMembersModal() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee13() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.groupMembersModal.present();

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
    }
  }, {
    key: "emptyStringChecker",
    value: function emptyStringChecker(string) {
      if (string == "" || string == null) {
        return null;
      } else {
        return string;
      }
    }
  }, {
    key: "ClientRisk",
    value: function ClientRisk(loanInfo) {
      var _this9 = this;

      console.log("loanInfo", loanInfo);
      this.showLoader = true;
      this.Client_risk_loan_usage = this.emptyStringChecker(this.clientRiskControls.Client_risk_loan_usage.value);
      this.Client_risk_funding_method = this.emptyStringChecker(this.clientRiskControls.Client_risk_funding_method.value);
      this.Client_risk_guarantee_type = this.emptyStringChecker(this.clientRiskControls.Client_risk_guarantee_type.value);
      this.Client_risk_insured_clients_perc = this.emptyStringChecker(this.clientRiskControls.Client_risk_insured_clients_perc.value);
      this.Client_risk_insured_project_perc = this.emptyStringChecker(this.clientRiskControls.Client_risk_insured_project_perc.value);
      this.Client_risk_nature_financing_product = this.emptyStringChecker(this.clientRiskControls.Client_risk_nature_financing_product.value);
      this.Client_risk_product_location = this.emptyStringChecker(this.clientRiskControls.Client_risk_product_location.value);
      this.Client_risk_geographic_risk = this.emptyStringChecker(this.clientRiskControls.Client_risk_geographic_risk.value);
      this.Client_risk_legal_risk = this.emptyStringChecker(this.clientRiskControls.Client_risk_legal_risk.value);
      this.Client_risk_project_age = this.emptyStringChecker(this.clientRiskControls.Client_risk_project_age.value);
      this.Client_risk_economic_risk = this.emptyStringChecker(this.clientRiskControls.Client_risk_economic_risk.value);
      var clientRiskRequest = {
        org_code: loanInfo.org_code,
        org_branch_code: loanInfo.org_branch_code,
        branch_code: loanInfo.branch_code,
        client_code: loanInfo.client_code,
        application_code: loanInfo.application_code,
        loan_inst: loanInfo.req_no.toString(),
        period_length: this.loanTypeInfo.period_length.toString(),
        period_type: this.loanTypeInfo.period_type.toString(),
        loan_usage: this.Client_risk_loan_usage,
        funding_method: this.Client_risk_funding_method,
        guarantee_type: this.Client_risk_guarantee_type,
        insured_clients_perc: this.Client_risk_insured_clients_perc,
        insured_project_perc: this.Client_risk_insured_project_perc,
        co_client_key: loanInfo.co_client_key,
        co2_client_key: loanInfo.co2_client_key,
        group_relation: this.Client_risk_nature_financing_product,
        product_location: this.Client_risk_product_location,
        req_am: loanInfo.req_am.toString(),
        loan_type_code: loanInfo.loan_type_code,
        geographic_risk: this.Client_risk_geographic_risk,
        legal_risk: this.Client_risk_legal_risk,
        project_age: this.Client_risk_project_age,
        economic_risk: this.Client_risk_economic_risk
      };
      console.log("clientRiskRequest", clientRiskRequest);
      this.http.post(this.env.API_URL + "api/LoanApplications/ClientRisk", clientRiskRequest).subscribe({
        next: function next(data) {
          console.log(data);
          _this9.showLoader = false;
        },
        error: function error(err) {
          return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this9, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee14() {
            return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    console.log("clientRisk", err);
                    this.showLoader = false;
                    _context14.next = 4;
                    return this.alertService.showAlertError("حدث خطا في مخاطر العميل" + err.error.toString() + "", false);

                  case 4:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      });
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
      if (this.wizardForm.currentStepIndex == 0) {
        this.router.navigate(["/dashboard"]);
      } else {
        this.wizardForm.goToPreviousStep();
      }
    }
  }, {
    key: "addLocalStorage",
    value: function addLocalStorage() {
      var cosignerSearchParameters = this.cosignersArrayControls.map(function (value) {
        return {
          search_type: value.controls.search_type.value,
          search_input: value.controls.search_input.value
        };
      });
      var loanDataForCreateCo = {
        client_code: "".concat(parseInt(this.selectedClient.client_key.toString().substring(2, 5), 10), "/").concat(parseInt(this.selectedClient.client_key.toString().substring(5, 12), 10)),
        loanType: this.loanDetails.controls["loanType"].value,
        iscore_facility: this.loanDetails.controls["iscore_facility"].value,
        credit_facility_type_code: this.loanDetails.controls["credit_facility_type_code"].value,
        business_activity_code: this.loanDetails.controls["business_activity_code"].value,
        loan_inst: this.loanDetails.controls["loan_inst"].value,
        req_am: this.loanDetails.controls["req_am"].value,
        loanUsage: this.loanDetails.controls["loanUsage"].value,
        period_length: this.loanDetails.controls["period_length"].value,
        period_type: this.loanDetails.controls["period_type"].value,
        cosigners: cosignerSearchParameters,
        Client_risk_loan_usage: this.emptyStringChecker(this.clientRiskControls.Client_risk_loan_usage.value),
        Client_risk_funding_method: this.emptyStringChecker(this.clientRiskControls.Client_risk_funding_method.value),
        Client_risk_guarantee_type: this.emptyStringChecker(this.clientRiskControls.Client_risk_guarantee_type.value),
        Client_risk_insured_clients_perc: this.emptyStringChecker(this.clientRiskControls.Client_risk_insured_clients_perc.value),
        Client_risk_insured_project_perc: this.emptyStringChecker(this.clientRiskControls.Client_risk_insured_project_perc.value),
        Client_risk_nature_financing_product: this.emptyStringChecker(this.clientRiskControls.Client_risk_nature_financing_product.value),
        Client_risk_product_location: this.emptyStringChecker(this.clientRiskControls.Client_risk_product_location.value),
        Client_risk_geographic_risk: this.emptyStringChecker(this.clientRiskControls.Client_risk_geographic_risk.value),
        Client_risk_legal_risk: this.emptyStringChecker(this.clientRiskControls.Client_risk_legal_risk.value),
        Client_risk_project_age: this.emptyStringChecker(this.clientRiskControls.Client_risk_project_age.value),
        Client_risk_economic_risk: this.emptyStringChecker(this.clientRiskControls.Client_risk_economic_risk.value),
        down_payment_perc: this.loanDetails.controls["down_payment_perc"].value,
        down_payment_am: this.loanDetails.controls["down_payment_am"].value
      }; // Assume loanData is an object that contains the loan information

      localStorage.setItem("loanDataForCreateCo", JSON.stringify(loanDataForCreateCo));
    }
  }, {
    key: "getLocalStorage",
    value: function getLocalStorage() {
      var _this11 = this;

      this.route.queryParams.subscribe(function (params) {
        var loanDataForCreateCo = JSON.parse(localStorage.getItem("loanDataForCreateCo"));
        _this11.searchInitValue = loanDataForCreateCo == undefined ? params.client_code : loanDataForCreateCo.client_code;
        console.log("searchInitValue", _this11.searchInitValue);

        if (loanDataForCreateCo) {
          _this11.loanDetails.controls["loanType"].patchValue(loanDataForCreateCo.loanType);

          _this11.http.get(_this11.env.API_URL + "api/Loan/GetLoanTypeInfo?loanTypeCode=".concat(loanDataForCreateCo.loanType)).subscribe({
            next: function next(data) {
              _this11.loanTypeInfo = data;
              console.log("loanTypeInfo", _this11.loanTypeInfo); // this.loadDefaultValuesLoanType();

              _this11.showLoader = false;
            },
            error: function error(err) {
              console.log(err);
              _this11.showLoader = false;
            }
          });

          _this11.loanDetails.controls["iscore_facility"].patchValue(loanDataForCreateCo.iscore_facility);

          _this11.loanDetails.controls["loan_inst"].patchValue(loanDataForCreateCo.loan_inst);

          _this11.loanDetails.controls["req_am"].patchValue(loanDataForCreateCo.req_am);

          _this11.loanDetails.controls["credit_facility_type_code"].patchValue(loanDataForCreateCo.credit_facility_type_code);

          _this11.loanDetails.controls["business_activity_code"].patchValue(loanDataForCreateCo.business_activity_code);

          _this11.loanDetails.controls["loanUsage"].patchValue(loanDataForCreateCo.loanUsage);

          _this11.loanDetails.controls["period_length"].patchValue(loanDataForCreateCo.period_length);

          _this11.loanDetails.controls["period_type"].patchValue(loanDataForCreateCo.period_type);

          _this11.cosignersArray.clear();

          loanDataForCreateCo.cosigners.forEach(function (value, index) {
            _this11.cosignersForm.controls.search_type.patchValue(value.search_type);

            _this11.cosignersForm.controls.search_input.patchValue(value.search_input);

            _this11.searchForCosigner();
          });

          _this11.clientRiskForm.controls["Client_risk_loan_usage"].patchValue(loanDataForCreateCo.Client_risk_loan_usage);

          _this11.clientRiskForm.controls["Client_risk_funding_method"].patchValue(loanDataForCreateCo.Client_risk_funding_method);

          _this11.clientRiskForm.controls["Client_risk_guarantee_type"].patchValue(loanDataForCreateCo.Client_risk_guarantee_type);

          _this11.clientRiskForm.controls["Client_risk_insured_clients_perc"].patchValue(loanDataForCreateCo.Client_risk_insured_clients_perc);

          _this11.clientRiskForm.controls["Client_risk_insured_project_perc"].patchValue(loanDataForCreateCo.Client_risk_insured_project_perc);

          _this11.clientRiskForm.controls["Client_risk_nature_financing_product"].patchValue(loanDataForCreateCo.Client_risk_nature_financing_product);

          _this11.clientRiskForm.controls["Client_risk_product_location"].patchValue(loanDataForCreateCo.Client_risk_product_location);

          _this11.clientRiskForm.controls["Client_risk_geographic_risk"].patchValue(loanDataForCreateCo.Client_risk_geographic_risk);

          _this11.clientRiskForm.controls["Client_risk_legal_risk"].patchValue(loanDataForCreateCo.Client_risk_legal_risk);

          _this11.clientRiskForm.controls["Client_risk_project_age"].patchValue(loanDataForCreateCo.Client_risk_project_age);

          _this11.clientRiskForm.controls["Client_risk_economic_risk"].patchValue(loanDataForCreateCo.Client_risk_economic_risk);

          _this11.loanDetails.controls["down_payment_perc"].patchValue(loanDataForCreateCo.down_payment_perc);

          _this11.loanDetails.controls["down_payment_am"].patchValue(loanDataForCreateCo.down_payment_am);
        }

        window.history.replaceState({}, document.title, window.location.pathname);
        localStorage.removeItem("loanDataForCreateCo");
      });
    }
  }, {
    key: "onVendorChange",
    value: function onVendorChange() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee15() {
        var _this12 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.vendorService.getUserVendorBranches(this.vendors.find(function (vendor) {
                  return vendor.vendorCode == _this12.loanDetailsControls["vendor"].value;
                })).then(function (data) {
                  _this12.vendorBranches = data;

                  _this12.loanDetails.controls.vendorBranch.patchValue(null);

                  console.log(data);
                }).catch(function (err) {
                  console.log(err);
                });

              case 2:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
    }
  }, {
    key: "onVendorItemsChanged",
    value: function onVendorItemsChanged(totalAmount) {
      this.loanDetailsControls.req_am.patchValue(totalAmount);
    }
  }, {
    key: "createCosignerForLoanAppAlert",
    value: function createCosignerForLoanAppAlert() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee16() {
        var _this13 = this;

        var alert;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                alert = this.alertController.create({
                  header: "لا يوجد عميل",
                  message: "هل تريد تسجيل ضامن جديد ",
                  buttons: [{
                    text: "نعم",
                    role: "OK",
                    cssClass: "btn-success",
                    handler: function handler() {
                      _this13.router.navigate(["/create-client-refactor"], {
                        queryParams: {
                          co: true
                        }
                      });
                    }
                  }, {
                    text: "لا",
                    cssClass: "btn-danger",
                    role: "cancel",
                    handler: function handler() {}
                  }]
                });
                _context16.next = 3;
                return alert;

              case 3:
                _context16.sent.present();

              case 4:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
    }
  }, {
    key: "cosignersArray",
    get: function get() {
      return this.cosignersForm.controls["cosigners"];
    }
  }, {
    key: "cosignersArrayControls",
    get: function get() {
      return this.cosignersArray.controls;
    }
  }, {
    key: "addCosignerRow",
    value: function addCosignerRow(cosigner) {
      var duplicateCosignerIndex = this.cosignersData.findIndex(function (value) {
        return value.nation_id == cosigner.nation_id || value.client_key == cosigner.client_key;
      });
      console.log(this.cosignersArray, this.cosignersData, duplicateCosignerIndex);

      if (duplicateCosignerIndex > -1) {
        return;
      }

      var cosignerForm = this.formBuilder.group({
        search_input: [this.cosignersForm.controls.search_input.value, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
        search_type: [this.cosignersForm.controls.search_type.value, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
        co_name: [cosigner.client_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
        co_code: [cosigner.branch_code + "/" + cosigner.client_code, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
        co_gender: [cosigner.gender],
        co_nat_id: [cosigner.nation_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
        co_id_date: [cosigner.id_date],
        co_birthdate: [cosigner.birth_date],
        co_telephone: [cosigner.mobile_1],
        co_address: [cosigner.home_add_1]
      });
      this.cosignersArray.push(cosignerForm);
      this.cosignersData.push(cosigner);
      console.log(this.cosignersArray, this.cosignersData);
    }
  }, {
    key: "deleteCosignerRow",
    value: function deleteCosignerRow(i) {
      this.cosignersArray.removeAt(i);
      this.cosignersData = this.cosignersData.filter(function (value, index) {
        return index != i;
      });
    }
  }, {
    key: "showCosignerData",
    value: function showCosignerData(index) {
      this.selectedCosigner = this.cosignersData[index];
      this.isCosignerModalOpened = true;
    }
  }, {
    key: "logForm",
    value: function logForm() {
      console.log(this.loanDetails);
    }
  }, {
    key: "changeCosignerPage",
    value: function changeCosignerPage(newPage) {
      this.cosignerPageNo = newPage === 0 ? 1 : newPage;
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      this.cdref.detectChanges();
    }
  }, {
    key: "getTextContent",
    value: function getTextContent(calc) {
      return (calc === null || calc === void 0 ? void 0 : calc.payamoun.includes("∞")) ? "يتم ادخال هذه القيمة يدوياً" : calc === null || calc === void 0 ? void 0 : calc.payamoun;
    }
  }, {
    key: "vendorItemOutput",
    value: function vendorItemOutput(items) {
      this.vendorItems = items;
      this.loanDetails.patchValue({
        req_am: items.reduce(function (sum, item) {
          return sum + item.totalPrice;
        }, 0)
      });
    }
  }]);

  return CreateLoanPage;
}();

CreateLoanPage.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.AlertController
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_7__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.ModalController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.Platform
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslateService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_8__.InputMaskingService
  }, {
    type: src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_6__.ClientService
  }, {
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_10__.LoansService
  }, {
    type: src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_9__.LoanApplicationsService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_12__.ReferencesService
  }, {
    type: src_app_core_services_vendor_service__WEBPACK_IMPORTED_MODULE_13__.VendorService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_11__.pagingService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ChangeDetectorRef
  }];
};

CreateLoanPage.propDecorators = {
  wizardForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild,
    args: ["wizardForm"]
  }],
  loanInstModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild,
    args: ["loanInstModal"]
  }],
  groupMembersModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild,
    args: ["groupMembersModal"]
  }],
  vendorItemsModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild,
    args: ["vendorItems"]
  }],
  search: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ViewChild,
    args: ["search"]
  }]
};
CreateLoanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Component)({
  selector: "app-create-loan",
  template: _create_loan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_create_loan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], CreateLoanPage);


/***/ }),

/***/ 29385:
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/loans/create-loan/create-loan.page.scss?ngResource ***!
  \********************************************************************************/
/***/ (function(module) {

module.exports = ".form-control-error {\n  border-color: #ff3366;\n}\n.form-control-error:hover {\n  border-color: #da0036;\n}\n.input-validator {\n  font-weight: 600;\n  padding-right: 10px;\n  padding-left: 10px;\n  color: #ff3366 !important;\n}\n.input-validator::before {\n  content: \"-\";\n  margin-left: 6px;\n}\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n.flex-wrap {\n  -ms-flex-wrap: wrap !important;\n      flex-wrap: wrap !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -ms-flex-direction: column !important;\n      flex-direction: column !important;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.h-90 {\n  height: 90% !important;\n}\n.inherit-color {\n  --color: auto !important;\n}\n.table-size {\n  width: 100% !important;\n}\n.size-fit {\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1sb2FuLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGxvYW5zXFxjcmVhdGUtbG9hblxcY3JlYXRlLWxvYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjtBREFFO0VBQ0UscUJBQUE7QUNFSjtBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDRUo7QURHRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0FKO0FESUE7RUFDRSw4QkFBQTtNQUFBLDBCQUFBO0VBQ0EsK0JBQUE7RUFBQSx3QkFBQTtFQUNBLHFDQUFBO01BQUEsaUNBQUE7RUFDQSxxQkFBQTtNQUFBLHVCQUFBO0FDREY7QURJQTtFQUNFLHNCQUFBO0FDREY7QURJQTtFQUNFLHdCQUFBO0FDREY7QURJQTtFQUNFLHNCQUFBO0FDREY7QURLQTtFQUNFLHVCQUFBO0FDRkYiLCJmaWxlIjoiY3JlYXRlLWxvYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC1lcnJvciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxOCwgMCwgNTQpO1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0LXZhbGlkYXRvciB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBjb2xvcjogcmdiKDI1NSwgNTEsIDEwMikgIWltcG9ydGFudDtcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCItXCI7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tbGFiZWwtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZmxleC13cmFwe1xyXG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oLTkwe1xyXG4gIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbmhlcml0LWNvbG9ye1xyXG4gIC0tY29sb3I6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYmxlLXNpemV7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAvLyBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2l6ZS1maXR7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgLy8gd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmZvcm0tY29udHJvbC1lcnJvciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzM2Njtcbn1cbi5mb3JtLWNvbnRyb2wtZXJyb3I6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNkYTAwMzY7XG59XG5cbi5pbnB1dC12YWxpZGF0b3Ige1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZmYzMzY2ICFpbXBvcnRhbnQ7XG59XG4uaW5wdXQtdmFsaWRhdG9yOjpiZWZvcmUge1xuICBjb250ZW50OiBcIi1cIjtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmZvcm0tbGFiZWwtcmVxdWlyZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCIqXCI7XG4gIGNvbG9yOiAjZmYzMzY2ICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaC05MCB7XG4gIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG59XG5cbi5pbmhlcml0LWNvbG9yIHtcbiAgLS1jb2xvcjogYXV0byAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtc2l6ZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5zaXplLWZpdCB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 86863:
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/loans/create-loan/create-loan.page.html?ngResource ***!
  \********************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 grid-margin\">\r\n    <app-client-search #search *ngIf=\"isSearching\" [sourcePage]=\"7\" [pageAction]=\"1\" [searchInitValue]=\"searchInitValue\"\r\n      [initialSearchType]=\"'1'\" (selectedClient)=\"clientSelected($event)\">\r\n    </app-client-search>\r\n\r\n    <div class=\"card mb-2\" *ngIf=\"!isSearching\">\r\n      <ion-modal id=\"user-info-modal\" #Usermodal trigger=\"click-user-trigger\">\r\n        <ng-template>\r\n          <ion-toolbar>\r\n            <ion-title> بيانات العميل </ion-title>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-button (click)=\"Usermodal.dismiss()\">\r\n                <ion-icon name=\"close-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-buttons>\r\n          </ion-toolbar>\r\n          <ion-content>\r\n            <ion-card class=\"h-90\">\r\n              <ion-card-content>\r\n                <ion-grid>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-label>نوع الأقتراض</ion-label>\r\n                      <ion-label> : </ion-label>\r\n                      <ion-label>\r\n                        {{ checker(clientInfo.client_type_code) }}\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                      <ion-label>النوع</ion-label>\r\n                      <ion-label> : </ion-label>\r\n                      <ion-label> {{ checker(clientInfo.gender) }} </ion-label>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-label>المحافظة</ion-label>\r\n                      <ion-label> : </ion-label>\r\n                      <ion-label>\r\n                        {{ checker(clientInfo.gov_code) }}\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                      <ion-label>المركز</ion-label>\r\n                      <ion-label> : </ion-label>\r\n                      <ion-label>\r\n                        {{ checker(clientInfo.dist_code) }}\r\n                      </ion-label>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-label>القرية</ion-label>\r\n                      <ion-label> : </ion-label>\r\n                      <ion-label>\r\n                        {{ checker(clientInfo.vill_code) }}\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                      <ion-label>تاريخ الميلاد</ion-label>\r\n                      <ion-label> : </ion-label>\r\n                      <ion-label>\r\n                        {{ checker(clientInfo.birth_date) }}\r\n                      </ion-label>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-label>تاريخ الأصدار</ion-label>\r\n                      <ion-label> : </ion-label>\r\n                      <ion-label> {{ checker(clientInfo.id_date) }} </ion-label>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                      <ion-label>الحالة الأجتماعية</ion-label>\r\n                      <ion-label> : </ion-label>\r\n                      <ion-label>\r\n                        {{ checker(clientInfo.martial_status) }}\r\n                      </ion-label>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                  <ion-row>\r\n                    <ion-col>\r\n                      <ion-label>المؤهل الدراسي</ion-label>\r\n                      <ion-label> : </ion-label>\r\n                      <ion-label>\r\n                        {{ checker(clientInfo.edu_level_code) }}\r\n                      </ion-label>\r\n                    </ion-col>\r\n                    <ion-col>\r\n                      <ion-label>كود العميل</ion-label>\r\n                      <ion-label> : </ion-label>\r\n                      <ion-label>\r\n                        {{ checker(clientInfo.client_code) }}\r\n                      </ion-label>\r\n                    </ion-col>\r\n                  </ion-row>\r\n                </ion-grid>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-content>\r\n        </ng-template>\r\n      </ion-modal>\r\n\r\n      <div class=\"card-body\">\r\n        <div class=\"row d-flex align-items-center\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <h6>الإسم</h6>\r\n              <div>\r\n                <ion-label> {{ checker(clientInfo.client_name) }} </ion-label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            <div class=\"form-group\">\r\n              <h6>التليـفون</h6>\r\n              <div>\r\n                <ion-label> {{ checker(clientInfo.mobile_1) }} </ion-label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-3\">\r\n            <div class=\"form-group\">\r\n              <h6>الرقم القومي</h6>\r\n              <div>\r\n                <ion-label> {{ checker(clientInfo.nation_id) }} </ion-label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2 form-group d-flex justify-content-even pl-1\">\r\n            <ion-button id=\"click-user-trigger\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card\" *ngIf=\"!isSearching\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title\">ادخال طلب قرض جديد</h4>\r\n        <aw-wizard class=\"align-middle\" #wizardForm [defaultStepIndex]=\"0\" [navBarLayout]=\"'large-filled'\"\r\n          [navBarDirection]=\"'left-right'\" [navBarLocation]=\"'top'\">\r\n          <aw-wizard-step>\r\n            <ng-template awWizardStepSymbol>\r\n              <ion-icon name=\"card-outline\"></ion-icon>\r\n            </ng-template>\r\n            <form (ngSubmit)=\"loanDetailsSubmit()\" [formGroup]=\"loanDetails\">\r\n              <ion-grid>\r\n                <ion-row *ngIf=\"isOverDraftLoanType\">\r\n                  <ion-col style=\"text-align: right\" *ngIf=\"clientInfo.client_type_code == '2'\">\r\n                    <ion-button (click)=\"openGroupMembersModal()\" type=\"button\">\r\n                      حصة أعضاء المجموعة\r\n                    </ion-button>\r\n                  </ion-col>\r\n                  <ion-col style=\"text-align: left\">\r\n                    <ion-button (click)=\"openModal()\" type=\"button\">حساب الاقساط</ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                  <ion-col sizeLg=\"4\" sizeMd=\"12\" sizeSm=\"12\" sizeXs=\"12\">\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-label for=\"loanType\" class=\"col-form-label\">نوع القرض</ion-label>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-select interface=\"popover\" id=\"loanType\" formControlName=\"loanType\" placeholder=\"نوع القرض\"\r\n                          class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                          [ngClass]=\"{'form-control-error': isLoanDetailsSubmitted && loanDetailsControls.loanType.errors}\"\r\n                          (ionChange)=\"onLoanTypeChanged($event)\">\r\n                          <ion-select-option *ngFor=\"let item of loanTypes\" value=\"{{item.loan_type_code}}\">\r\n                            {{item.loan_type_name}}\r\n                          </ion-select-option>\r\n                        </ion-select>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngIf=\"isLoanDetailsSubmitted && (loanDetailsControls.loanType.errors?.['required'])\">\r\n                      <ion-label class=\"text-danger input-validator\" role=\"alert\">\r\n                        يجب اختيار نوع القرض\r\n                      </ion-label>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <ion-col sizeLg=\"4\" sizeMd=\"12\" sizeSm=\"12\" sizeXs=\"12\">\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-label for=\"iscore_facility\" class=\"col-form-label\">طبيعة التسهيل</ion-label>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-select interface=\"popover\" id=\"iscore_facility\" formControlName=\"iscore_facility\"\r\n                          placeholder=\"طبيعة التسهيل\"\r\n                          class=\"ng-pristine md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                          [ngClass]=\"{'form-control-error': isLoanDetailsSubmitted && loanDetailsControls.iscore_facility.errors?.required}\">\r\n                          <ion-select-option *ngFor=\"let item of filteredIScoreNatureFacilityIndicators\"\r\n                            [value]=\"item.code\">\r\n                            {{item.name}}\r\n                          </ion-select-option>\r\n                        </ion-select>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngIf=\"isLoanDetailsSubmitted && loanDetailsControls.iscore_facility.errors?.required\">\r\n                      <ion-col>\r\n                        <ion-label class=\"text-danger input-validator\" role=\"alert\">\r\n                          يجب اختيار طبيعة التسهيل\r\n                        </ion-label>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <ion-col sizeLg=\"4\" sizeMd=\"12\" sizeSm=\"12\" sizeXs=\"12\">\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-label for=\"credit_facility_type_code\" class=\"col-form-label\">نوع التسهيل</ion-label>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-select interface=\"popover\" id=\"credit_facility_type_code\"\r\n                          formControlName=\"credit_facility_type_code\" placeholder=\"نوع التسهيل\"\r\n                          class=\"ng-pristine md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                          [ngClass]=\"{'form-control-error': isLoanDetailsSubmitted && loanDetailsControls.credit_facility_type_code.errors?.required}\">\r\n                          <ion-select-option *ngFor=\"let item of filteredIScoreCreditFacilityTypes\" [value]=\"item.code\">\r\n                            {{item.name}}\r\n                          </ion-select-option>\r\n                        </ion-select>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row\r\n                      *ngIf=\"isLoanDetailsSubmitted && loanDetailsControls.credit_facility_type_code.errors?.required\">\r\n                      <ion-label class=\"text-danger input-validator\" role=\"alert\">\r\n                        يجب اختيار نوع التسهيل\r\n                      </ion-label>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row>\r\n                  <ion-col sizeLg=\"4\" sizeMd=\"12\" sizeSm=\"12\" sizeXs=\"12\" class=\"ion-no-padding\"\r\n                    *ngIf=\"isOverDraftLoanType\">\r\n                    <app-select-with-search formControlName=\"business_activity_code\" title=\"طبيعة النشاط\"\r\n                      label=\"طبيعة النشاط\" [items]=\"filteredIScoreBusinessActivityTypes\" [disabled]=\"false\"\r\n                      (ionChange)=\"logForm()\">\r\n                    </app-select-with-search>\r\n                    <div *ngIf=\"isLoanDetailsSubmitted && loanDetailsControls.business_activity_code.errors?.required\">\r\n                      <ion-label class=\"text-danger input-validator\" role=\"alert\">\r\n                        يجب اختيار طبيعة النشاط\r\n                      </ion-label>\r\n                    </div>\r\n                  </ion-col>\r\n                  <ion-col sizeLg=\"4\" sizeMd=\"12\" sizeSm=\"12\" sizeXs=\"12\">\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-label for=\"loanUsage\" class=\"col-form-label\">الأستخدام</ion-label>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-select interface=\"popover\" id=\"loanUsage\" formControlName=\"loanUsage\"\r\n                          placeholder=\"الأستخدام\"\r\n                          class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                          [ngClass]=\"{'form-control-error': isLoanDetailsSubmitted && loanDetailsControls.loanUsage.errors?.required}\">\r\n                          <ion-select-option *ngFor=\"let item of loanUsage\" value=\"{{item.loanUsageCode}}\">\r\n                            {{item.loanUsageDesc}}\r\n                          </ion-select-option>\r\n                        </ion-select>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngIf=\"isLoanDetailsSubmitted && loanDetailsControls.loanUsage.errors?.required\">\r\n                      <ion-label class=\"text-danger input-validator\" role=\"alert\">\r\n                        يجب اختيار الأستخدام\r\n                      </ion-label>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <ion-col sizeLg=\"4\" sizeMd=\"12\" sizeSm=\"12\" sizeXs=\"12\">\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-label for=\"req_am\" class=\"col-form-label\">\r\n                          قيمة القرض المطلوب\r\n                        </ion-label>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-input type=\"text\" class=\"form-control\" id=\"req_am\" formControlName=\"req_am\" min=\"0\"\r\n                          [disabled]=\"!loanTypeInfo || loanTypeInfo.service_provider == 1 || clientInfo.client_type_code == '2'\"\r\n                          (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, this.loanTypeInfo.max_loan_am, 0)\"\r\n                          (ionChange)=\"ReqAmountOnChange()\"></ion-input>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngIf=\"isLoanDetailsSubmitted && (loanDetailsControls.req_am.errors?.['required'])\">\r\n                      <ion-label class=\"text-danger input-validator\" role=\"alert\">\r\n                        يجب إدخال قيمة القرض\r\n                      </ion-label>\r\n                    </ion-row>\r\n                    <ion-row\r\n                      *ngIf=\"isLoanDetailsSubmitted && (loanDetailsControls.req_am.errors?.['min'] || loanDetailsControls.req_am.errors?.['max'])\">\r\n                      <ion-label class=\"text-danger input-validator\" role=\"alert\">\r\n                        يجب ان تكون قيمة القرض بين {{loanTypeInfo.min_loan_am}}\r\n                        و {{loanTypeInfo.max_loan_am}}\r\n                      </ion-label>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row *ngIf=\"isOverDraftLoanType\">\r\n                  <ion-col sizeLg=\"4\" sizeMd=\"12\" sizeSm=\"12\" sizeXs=\"12\">\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-label for=\"loan_inst\" class=\"col-form-label\">\r\n                          عـدد الأقساط\r\n                        </ion-label>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-input type=\"text\" class=\"form-control\" id=\"loan_inst\" formControlName=\"loan_inst\" min=\"0\"\r\n                          [disabled]=\"!loanTypeInfo\"\r\n                          (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, this.loanTypeInfo.max_no_inst, 0)\"></ion-input>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row\r\n                      *ngIf=\"isLoanDetailsSubmitted && (loanDetailsControls.loan_inst.errors?.['min'] || loanDetailsControls.loan_inst.errors?.['max'])\">\r\n                      <ion-col>\r\n                        <ion-label class=\"text-danger input-validator\" role=\"alert\">\r\n                          يجب ان تكون عدد الاقساط بين\r\n                          {{loanTypeInfo.min_no_inst}} و\r\n                          {{loanTypeInfo.max_no_inst}}\r\n                        </ion-label>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngIf=\"isLoanDetailsSubmitted && loanDetailsControls.loan_inst.errors?.required\">\r\n                      <ion-label class=\"text-danger input-validator\" role=\"alert\">\r\n                        يجب تحديد عدد الاقساط\r\n                      </ion-label>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <ion-col sizeLg=\"4\" sizeMd=\"12\" sizeSm=\"12\" sizeXs=\"12\">\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-label for=\"period_length\" class=\"col-form-label\">\r\n                          فترة السداد كل\r\n                        </ion-label>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-input type=\"text\" class=\"form-control\" id=\"period_length\" formControlName=\"period_length\"\r\n                          min=\"0\"\r\n                          [ngClass]=\"{'is-invalid': isLoanDetailsSubmitted && loanDetailsControls.period_length.errors}\"\r\n                          (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 1, 99, 0)\"></ion-input>\r\n                      </ion-col>\r\n                      <ion-col>\r\n                        <ion-select interface=\"popover\" id=\"period_type\" formControlName=\"period_type\"\r\n                          placeholder=\"فترة السداد كل\"\r\n                          class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                          [ngClass]=\"{'form-control-error': isLoanDetailsSubmitted && loanDetailsControls.period_type.errors}\">\r\n                          <ion-select-option *ngFor=\"let item of period_types\" value=\"{{item.ref_code}}\">\r\n                            {{item.ref_desc}}\r\n                          </ion-select-option>\r\n                        </ion-select>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                  <ion-col sizeLg=\"4\" sizeMd=\"12\" sizeSm=\"12\" sizeXs=\"12\">\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-label for=\"loanType\" class=\"col-form-label\">المورد</ion-label>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-select interface=\"popover\" id=\"vendor\" formControlName=\"vendor\" placeholder=\"المورد\"\r\n                          class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                          [ngClass]=\"{'form-control-error': isLoanDetailsSubmitted && loanDetailsControls.vendor.errors}\"\r\n                          (ionChange)=\"onVendorChange()\" [disabled]=\"!isUsingConsumerFinancing\">\r\n                          <ion-select-option *ngFor=\"let vendor of vendors\" value=\"{{vendor.vendorCode}}\">\r\n                            {{vendor.vendorName}}\r\n                          </ion-select-option>\r\n                        </ion-select>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngIf=\"isLoanDetailsSubmitted && (loanDetailsControls.vendor.errors?.['required'])\">\r\n                      <ion-label class=\"text-danger input-validator\" role=\"alert\">\r\n                        يجب اختيار المورد\r\n                      </ion-label>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n\r\n                <ion-row *ngIf=\"isOverDraftLoanType\">\r\n                  <ion-col sizeLg=\"4\" sizeMd=\"12\" sizeSm=\"12\" sizeXs=\"12\">\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-label for=\"loanType\" class=\"col-form-label\">فرع المورد</ion-label>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-select interface=\"popover\" id=\"vendorBranch\" formControlName=\"vendorBranch\"\r\n                          placeholder=\"فرع المورد\"\r\n                          class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                          [ngClass]=\"{'form-control-error': isLoanDetailsSubmitted && loanDetailsControls.vendorBranch.errors}\"\r\n                          [disabled]=\"!loanDetails.controls['vendor'].value || !isUsingConsumerFinancing\">\r\n                          <ion-select-option *ngFor=\"let branch of vendorBranches\" value=\"{{branch.vendorBranchCode}}\">\r\n                            {{branch.vendorBranchName}}\r\n                          </ion-select-option>\r\n                        </ion-select>\r\n                      </ion-col>\r\n\r\n                      <ion-col\r\n                        *ngIf=\"!(!loanDetails.controls['vendor'].value || !loanDetails.controls['vendorBranch'].value ||  !isUsingConsumerFinancing)\">\r\n                        <app-vendor-items [vendorCode]=\"loanDetails.controls['vendor'].value\"\r\n                          [vendorBranchCode]=\"loanDetails.controls['vendorBranch'].value\"\r\n                          (vendorItemOutput)=\"vendorItemOutput($event)\"></app-vendor-items>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngIf=\"isLoanDetailsSubmitted && (loanDetailsControls.vendorBranch.errors?.['required'])\">\r\n                      <ion-col>\r\n                        <ion-label class=\"text-danger input-validator\" role=\"alert\">\r\n                          يجب اختيار فرع المورد\r\n                        </ion-label>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row *ngIf=\"isDownPaymentVisible\">\r\n                  <ion-col sizeLg=\"4\" sizeMd=\"12\" sizeSm=\"12\" sizeXs=\"12\">\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-label for=\"down_payment\" class=\"col-form-label\" *ngIf=\"loanTypeInfo.down_payment !==0\">\r\n                          {{ DownPaymentLabel }}\r\n                        </ion-label>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <!-- Amount Input (Type 1) -->\r\n                        <ion-input *ngIf=\"loanTypeInfo.down_payment_type === 1\" type=\"text\" class=\"form-control\"\r\n                          id=\"down_payment_perc\" formControlName=\"down_payment_perc\"\r\n                          [disabled]=\"loanTypeInfo.down_payment_edit === 0\" placeholder=\" النسبة المئوية للدفعة\"\r\n                          (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0.01, 99.99, 2)\"></ion-input>\r\n\r\n                        <!-- Amount Input (Type 2) -->\r\n                        <ion-input *ngIf=\"loanTypeInfo.down_payment_type === 2\" type=\"text\" class=\"form-control\"\r\n                          formControlName=\"down_payment_am\"\r\n                          [disabled]=\"this.reqAmountValue  == 0 || null\" placeholder=\"قيمة الدفعة\"\r\n                          (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 1, this.reqAmountValue - 1, 0)\">\r\n                        </ion-input>\r\n                      </ion-col>\r\n                      <ion-col size=\"auto\" *ngIf=\"loanTypeInfo.down_payment_type === 1\" style=\"align-content: center\">\r\n                        <ion-label class=\"col-form-label\"> % </ion-label>\r\n                      </ion-col>\r\n                    </ion-row>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row\r\n                  *ngIf=\"isLoanDetailsSubmitted && loanDetailsControls.down_payment_perc.errors?.required && loanTypeInfo.down_payment_type === 1\">\r\n                  <ion-label class=\"text-danger input-validator\" role=\"alert\">\r\n                    يجب إدخال {{ DownPaymentLabel }}\r\n                  </ion-label>\r\n                </ion-row>\r\n                <ion-row\r\n                  *ngIf=\"isLoanDetailsSubmitted && loanDetailsControls.down_payment_am.errors?.required && loanTypeInfo.down_payment_type === 2\">\r\n                  <ion-label class=\"text-danger input-validator\" role=\"alert\">\r\n                    يجب إدخال {{ DownPaymentLabel }}\r\n                  </ion-label>\r\n                </ion-row>\r\n                <ion-row style=\"place-self: center\">\r\n                  <ion-col>\r\n                    <ion-button (click)=\"backToSearch()\" color=\"danger\">\r\n                      رجوع\r\n                    </ion-button>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <ion-button type=\"submit\"> متابعة </ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n\r\n              <ion-modal id=\"loan-inst-modal\" #loanInstModal class=\"size-fit\">\r\n                <ng-template>\r\n                  <ion-toolbar>\r\n                    <ion-title> الأقساط المطلوبة </ion-title>\r\n                    <ion-buttons slot=\"end\">\r\n                      <ion-button (click)=\"closeLoanInstModal()\">\r\n                        <ion-icon name=\"close-outline\"></ion-icon>\r\n                      </ion-button>\r\n                    </ion-buttons>\r\n                  </ion-toolbar>\r\n                  <ion-content *ngIf=\"calcRes\" class=\"table-responsive\">\r\n                    <table class=\"table table-hover\">\r\n                      <thead>\r\n                        <tr>\r\n                          <td class=\"text-center\">رقم القسط</td>\r\n                          <td class=\"text-center\">المبلغ</td>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                        <tr *ngFor=\"let calc of calcRes\">\r\n                          <td class=\"text-center\">{{ calc?.serial }}</td>\r\n                          <td class=\"text-center\" [textContent]=\"getTextContent(calc)\"></td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                  </ion-content>\r\n                </ng-template>\r\n              </ion-modal>\r\n            </form>\r\n            <ion-modal id=\"group-members-modal\" #groupMembersModal class=\"size-fit\"\r\n              (willDismiss)=\"calcGroupMembersReqLoanAmount()\">\r\n              <ng-template>\r\n                <ion-toolbar>\r\n                  <ion-title> أعضاء المجموعة </ion-title>\r\n                  <ion-buttons slot=\"end\">\r\n                    <ion-button (click)=\"closeGroupMembersModal()\">\r\n                      <ion-icon name=\"close-outline\"></ion-icon>\r\n                    </ion-button>\r\n                  </ion-buttons>\r\n                </ion-toolbar>\r\n                <ion-content>\r\n                  <ion-card>\r\n                    <ion-card-content class=\"table-responsive p-0\">\r\n                      <ion-grid style=\"min-width: 500px\" [fixed]=\"true\" class=\"m-0\">\r\n                        <ion-row class=\"header-row\">\r\n                          <ion-col size=\"5\"> الرقم القومي </ion-col>\r\n                          <ion-col size=\"4\"> الاسم </ion-col>\r\n                          <ion-col size=\"3\"> المبلغ </ion-col>\r\n                        </ion-row>\r\n                        <ion-row *ngFor=\"let member of clientInfo.members\" class=\"details-row\">\r\n                          <ion-col size=\"5\"> {{member.nation_id}} </ion-col>\r\n                          <ion-col size=\"4\"> {{member.client_name}} </ion-col>\r\n                          <ion-col size=\"3\">\r\n                            <ion-input type=\"text\" class=\"form-control\" [(ngModel)]=\"member.requestedAmount\" min=\"0\"\r\n                              [disabled]=\"!loanTypeInfo\"\r\n                              (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, this.loanTypeInfo.max_loan_am, 0)\"></ion-input>\r\n                          </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid>\r\n                    </ion-card-content>\r\n                  </ion-card>\r\n                </ion-content>\r\n              </ng-template>\r\n            </ion-modal>\r\n          </aw-wizard-step>\r\n\r\n          <aw-wizard-step *ngIf=\"clientInfo.client_type_code == '1'\">\r\n            <ng-template awWizardStepSymbol>\r\n              <ion-icon name=\"people-outline\"></ion-icon>\r\n            </ng-template>\r\n\r\n            <div [formGroup]=\"cosignersForm\">\r\n              <div class=\"form-group\">\r\n                <ion-label for=\"search\" class=\"col-form-label\">البحث عن الضامن</ion-label>\r\n                <div class=\"row d-flex align-items-center\">\r\n                  <div class=\"col-sm-4 px-1\">\r\n                    <ion-select interface=\"popover\" id=\"search_type\" formControlName=\"search_type\"\r\n                      placeholder=\"اختيار نوع البحث\"\r\n                      class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                      [ngClass]=\"{'form-control-error': areCosignersSubmitted &&  cosignersForm.controls.search_type.errors?.required}\">\r\n                      <ion-select-option *ngFor=\"let item of search_types\" value=\"{{item[1]}}\">\r\n                        {{item[0]}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                  </div>\r\n                  <div class=\"col-sm-4 px-1\">\r\n                    <ion-input type=\"text\" class=\"form-control\" id=\"search_input\" formControlName=\"search_input\"\r\n                      [ngClass]=\"{'is-invalid': areCosignersSubmitted &&  cosignersForm.controls.search_input.errors}\"></ion-input>\r\n                  </div>\r\n                  <div class=\"col-sm-2 px-1\">\r\n                    <ion-button class=\"btn-block\" (click)=\"cosignerSearchValidation()\">\r\n                      بحث\r\n                    </ion-button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <ng-container formArrayName=\"cosigners\">\r\n                <ng-container>\r\n                  <ion-grid *ngIf=\"cosignersArrayControls.length > 0\">\r\n                    <ion-row>\r\n                      <ion-col>\r\n                        <ion-label> اسم الضامن </ion-label>\r\n                      </ion-col>\r\n                      <ion-col>\r\n                        <ion-label> كود الضامن </ion-label>\r\n                      </ion-col>\r\n                      <ion-col>\r\n                        <ion-label> الرقم القومي </ion-label>\r\n                      </ion-col>\r\n                      <ion-col size=\"1\"></ion-col>\r\n                      <ion-col size=\"1\"></ion-col>\r\n                    </ion-row>\r\n                    <ng-container *ngFor=\"let cosignerForm of cosignersArrayControls; let i = index\"\r\n                      [formGroup]=\"cosignerForm\">\r\n                      <ion-row *ngIf=\"i >= pageSize*(cosignerPageNo-1) && i < pageSize*cosignerPageNo\">\r\n                        <ion-col>\r\n                          <ion-input class=\"form-control\" id=\"co_name\" formControlName=\"co_name\"\r\n                            [ngClass]=\"{'is-invalid': areCosignersSubmitted &&  cosignerForm.controls.co_name.errors}\"\r\n                            readonly=\"true\"></ion-input>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                          <ion-input class=\"form-control\" id=\"co_code\" formControlName=\"co_code\"\r\n                            [ngClass]=\"{'is-invalid': areCosignersSubmitted &&  cosignerForm.controls.co_code.errors}\"\r\n                            readonly=\"true\"></ion-input>\r\n                        </ion-col>\r\n                        <ion-col>\r\n                          <ion-input class=\"form-control\" id=\"co_nat_id\" formControlName=\"co_nat_id\"\r\n                            [ngClass]=\"{'is-invalid': areCosignersSubmitted &&  cosignerForm.controls.co_nat_id.errors}\"\r\n                            readonly=\"true\"></ion-input>\r\n                        </ion-col>\r\n                        <ion-col size=\"1\">\r\n                          <ion-button (click)=\"showCosignerData(i)\">\r\n                            <ion-icon name=\"alert-circle-outline\"></ion-icon>\r\n                          </ion-button>\r\n                        </ion-col>\r\n                        <ion-col size=\"1\">\r\n                          <ion-button (click)=\"deleteCosignerRow(i)\" color=\"danger\">\r\n                            <ion-icon name=\"trash-outline\"></ion-icon>\r\n                          </ion-button>\r\n                        </ion-col>\r\n                      </ion-row>\r\n                    </ng-container>\r\n                  </ion-grid>\r\n\r\n                  <app-pagination [page]=\"cosignerPageNo\" [collectionSize]=\"cosignersArrayControls.length\"\r\n                    (pageChange)=\"changeCosignerPage($event);\"></app-pagination>\r\n\r\n                  <ion-modal [isOpen]=\"isCosignerModalOpened\" (willDismiss)=\"isCosignerModalOpened = false\">\r\n                    <ng-template>\r\n                      <ion-toolbar>\r\n                        <ion-title> بيانات الضامن </ion-title>\r\n                        <ion-buttons slot=\"end\">\r\n                          <ion-button (click)=\"isCosignerModalOpened = false\">\r\n                            <ion-icon name=\"close-outline\"></ion-icon>\r\n                          </ion-button>\r\n                        </ion-buttons>\r\n                      </ion-toolbar>\r\n                      <ion-content>\r\n                        <div class=\"row justify-content-center mt-2 p-1\">\r\n                          <div class=\"col-lg-6\">\r\n                            <div class=\"form-group\">\r\n                              <ion-label for=\"co_name\" class=\"col-form-label\">\r\n                                اسـم الضامن\r\n                              </ion-label>\r\n                              <div>\r\n                                <ion-input class=\"form-control\" id=\"co_name\" readonly=\"true\"\r\n                                  [value]=\"selectedCosigner.client_name\"></ion-input>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                              <ion-label for=\"co_code\" class=\"col-form-label\">\r\n                                كود الضامن\r\n                              </ion-label>\r\n\r\n                              <div>\r\n                                <ion-input class=\"form-control\" id=\"co_code\" readonly=\"true\"\r\n                                  [value]=\"selectedCosigner.branch_code + '/' + selectedCosigner.client_code\"></ion-input>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                              <ion-label for=\"co_gender\" class=\"col-form-label\">\r\n                                النوع\r\n                              </ion-label>\r\n\r\n                              <div>\r\n                                <ion-input class=\"form-control\" id=\"co_gender\" readonly=\"true\"\r\n                                  [value]=\"selectedCosigner.gender\"></ion-input>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                              <ion-label for=\"co_address\" class=\"col-form-label\">\r\n                                العنوان\r\n                              </ion-label>\r\n\r\n                              <div>\r\n                                <ion-input class=\"form-control\" id=\"co_address\" readonly=\"true\"\r\n                                  [value]=\"selectedCosigner.home_add_1\"></ion-input>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"col-lg-6\">\r\n                            <div class=\"form-group\">\r\n                              <ion-label for=\"co_id_date\" class=\"col-form-label\">\r\n                                تاريخ الأصدار\r\n                              </ion-label>\r\n\r\n                              <div>\r\n                                <ion-input class=\"form-control\" id=\"co_id_date\" readonly=\"true\"\r\n                                  [value]=\"selectedCosigner.id_date.split(' ')[0]\"></ion-input>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                              <ion-label for=\"co_birthdate\" class=\"col-form-label\">\r\n                                تاريخ الميـلاد\r\n                              </ion-label>\r\n\r\n                              <div>\r\n                                <ion-input class=\"form-control\" id=\"co_birthdate\" readonly=\"true\"\r\n                                  [value]=\"selectedCosigner.birth_date.split(' ')[0]\"></ion-input>\r\n                              </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                              <ion-label for=\"co_nat_id\" class=\"col-form-label\">\r\n                                الرقم القومي\r\n                              </ion-label>\r\n\r\n                              <div>\r\n                                <ion-input class=\"form-control\" id=\"co_nat_id\" readonly=\"true\"\r\n                                  [value]=\"selectedCosigner.nation_id\"></ion-input>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                              <ion-label for=\"co_telephone\" class=\"col-form-label\">\r\n                                التليـفون\r\n                              </ion-label>\r\n\r\n                              <div>\r\n                                <ion-input class=\"form-control\" id=\"co_telephone\" readonly=\"true\"\r\n                                  [value]=\"selectedCosigner.mobile_1\"></ion-input>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </ion-content>\r\n                    </ng-template>\r\n                  </ion-modal>\r\n                  <!-- <div [formGroup]=\"cosignerForm\">\r\n                    <div class=\"row justify-content-center mt-2\">\r\n                      <div class=\"col-lg-10\">\r\n                        <div class=\"form-group\">\r\n                          <ion-label for=\"search\" class=\"col-form-label\">البحث عن الضامن</ion-label>\r\n                          <div class=\"row d-flex align-items-center\">\r\n                            <div class=\"col-sm-4 px-1\">\r\n                              <ion-select interface=\"popover\" id=\"search_type\" formControlName=\"search_type\"\r\n                                placeholder=\"اختيار نوع البحث\"\r\n                                class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                                [ngClass]=\"{'form-control-error': areCosignersSubmitted &&  cosignerForm.controls.search_type.errors?.required}\">\r\n                                <ion-select-option *ngFor=\"let item of search_types\" value=\"{{item[1]}}\">\r\n                                  {{item[0]}}\r\n                                </ion-select-option>\r\n                              </ion-select>\r\n                            </div>\r\n                            <div class=\"col-sm-4 px-1\">\r\n                              <ion-input type=\"text\" class=\"form-control\" id=\"search_input\"\r\n                                formControlName=\"search_input\"\r\n                                [ngClass]=\"{'is-invalid': areCosignersSubmitted &&  cosignerForm.controls.search_input.errors}\"></ion-input>\r\n                            </div>\r\n                            <div class=\"col-sm-2 px-1\">\r\n                              <ion-button class=\"btn-block\" (click)=\"cosignerSearch(i)\">\r\n                                بحث\r\n                              </ion-button>\r\n                            </div>\r\n                            <div class=\"col-sm-2 px-1\">\r\n                              <ion-button class=\"btn-block\" (click)=\"deleteCosignerRow(i)\">\r\n                                إزالة\r\n                              </ion-button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row justify-content-center mt-2\" *ngIf=\"cosignersData[i]\">\r\n                      <div class=\"col-lg-4\">\r\n                        <div class=\"form-group\">\r\n                          <ion-label for=\"co_name\" class=\"col-form-label\">\r\n                            اسـم الضامن\r\n                          </ion-label>\r\n\r\n                          <div>\r\n                            <ion-input class=\"form-control\" id=\"co_name\" formControlName=\"co_name\"\r\n                              [ngClass]=\"{'is-invalid': areCosignersSubmitted &&  cosignerForm.controls.co_name.errors}\"\r\n                              readonly=\"true\"></ion-input>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <ion-label for=\"co_code\" class=\"col-form-label\">\r\n                            كود الضامن\r\n                          </ion-label>\r\n\r\n                          <div>\r\n                            <ion-input class=\"form-control\" id=\"co_code\" formControlName=\"co_code\"\r\n                              [ngClass]=\"{'is-invalid': areCosignersSubmitted &&  cosignerForm.controls.co_code.errors}\"\r\n                              readonly=\"true\"></ion-input>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <ion-label for=\"co_gender\" class=\"col-form-label\">\r\n                            النوع\r\n                          </ion-label>\r\n\r\n                          <div>\r\n                            <ion-input class=\"form-control\" id=\"co_gender\" formControlName=\"co_gender\"\r\n                              [ngClass]=\"{'is-invalid': areCosignersSubmitted &&  cosignerForm.controls.co_gender.errors}\"\r\n                              readonly=\"true\"></ion-input>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"col-lg-4\">\r\n                        <div class=\"form-group\">\r\n                          <ion-label for=\"co_id_date\" class=\"col-form-label\">\r\n                            تاريخ الأصدار\r\n                          </ion-label>\r\n\r\n                          <div>\r\n                            <ion-input class=\"form-control\" id=\"co_id_date\" formControlName=\"co_id_date\"\r\n                              [ngClass]=\"{'is-invalid': areCosignersSubmitted &&  cosignerForm.controls.co_id_date.errors}\"\r\n                              readonly=\"true\"></ion-input>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <ion-label for=\"co_birthdate\" class=\"col-form-label\">\r\n                            تاريخ الميـلاد\r\n                          </ion-label>\r\n\r\n                          <div>\r\n                            <ion-input class=\"form-control\" id=\"co_birthdate\" formControlName=\"co_birthdate\"\r\n                              [ngClass]=\"{'is-invalid': areCosignersSubmitted &&  cosignerForm.controls.co_birthdate.errors}\"\r\n                              readonly=\"true\"></ion-input>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <ion-label for=\"co_nat_id\" class=\"col-form-label\">\r\n                            الرقم القومي\r\n                          </ion-label>\r\n\r\n                          <div>\r\n                            <ion-input class=\"form-control\" id=\"co_nat_id\" formControlName=\"co_nat_id\"\r\n                              [ngClass]=\"{'is-invalid': areCosignersSubmitted &&  cosignerForm.controls.co_nat_id.errors}\"\r\n                              readonly=\"true\"></ion-input>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"col-lg-4\">\r\n                        <div class=\"form-group\">\r\n                          <ion-label for=\"co_telephone\" class=\"col-form-label\">\r\n                            التليـفون\r\n                          </ion-label>\r\n\r\n                          <div>\r\n                            <ion-input class=\"form-control\" id=\"co_telephone\" formControlName=\"co_telephone\"\r\n                              [ngClass]=\"{'is-invalid': areCosignersSubmitted &&  cosignerForm.controls.co_telephone.errors}\"\r\n                              readonly=\"true\"></ion-input>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                          <ion-label for=\"co_address\" class=\"col-form-label\">\r\n                            العنوان\r\n                          </ion-label>\r\n\r\n                          <div>\r\n                            <ion-input class=\"form-control\" id=\"co_address\" formControlName=\"co_address\"\r\n                              [ngClass]=\"{'is-invalid': areCosignersSubmitted && cosignerForm.controls.co_address.errors}\"\r\n                              readonly=\"true\"></ion-input>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div> -->\r\n                </ng-container>\r\n              </ng-container>\r\n            </div>\r\n            <div class=\"d-flex justify-content-center mt-2\">\r\n              <ion-button class=\"ml-2\" type=\"button\" color=\"danger\" awPreviousStep>\r\n                رجوع\r\n              </ion-button>\r\n              <ion-button (click)=\"checkCoSigners()\">متابعة</ion-button>\r\n            </div>\r\n          </aw-wizard-step>\r\n\r\n          <aw-wizard-step *ngIf=\"isClientRiskStepVisible\">\r\n            <ng-template awWizardStepSymbol>\r\n              <ion-icon name=\"document-text-outline\"></ion-icon>\r\n            </ng-template>\r\n            <form (ngSubmit)=\"clientRiskSubmit()\" [formGroup]=\"clientRiskForm\">\r\n              <div class=\"row justify-content-center mt-2\">\r\n                <div class=\"col-lg-4\">\r\n                  <div class=\"form-group\">\r\n                    <ion-label for=\"Client_risk_loan_usage\"\r\n                      class=\"col-form-label\">{{RiskMatrix[6].description}}</ion-label>\r\n                    <div>\r\n                      <ion-select interface=\"popover\" id=\"Client_risk_loan_usage\"\r\n                        formControlName=\"Client_risk_loan_usage\" placeholder=\"{{RiskMatrix[6].description}}\"\r\n                        [disabled]=\"!RiskMatrix[6].can_edit\"\r\n                        class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                        [ngClass]=\"{'form-control-error': isClientRiskSubmitted && clientRiskControls.Client_risk_loan_usage.errors}\">\r\n                        <ion-select-option\r\n                          value=\"{{RiskMatrix[6].weight}}\">{{RiskMatrix[6].detail_description}}</ion-select-option>\r\n                        <ion-select-option\r\n                          value=\"{{RiskMatrix[7].weight}}\">{{RiskMatrix[7].detail_description}}</ion-select-option>\r\n                        <ion-select-option\r\n                          value=\"{{RiskMatrix[8].weight}}\">{{RiskMatrix[8].detail_description}}</ion-select-option>\r\n                      </ion-select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <ion-label for=\"Client_risk_funding_method\"\r\n                      class=\"col-form-label\">{{RiskMatrix[9].description}}</ion-label>\r\n                    <div>\r\n                      <ion-select interface=\"popover\" id=\"Client_risk_funding_method\"\r\n                        [disabled]=\"!RiskMatrix[9].can_edit\" formControlName=\"Client_risk_funding_method\"\r\n                        placeholder=\"{{RiskMatrix[9].description}}\"\r\n                        class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                        [ngClass]=\"{'form-control-error': isClientRiskSubmitted && clientRiskControls.Client_risk_funding_method.errors}\">\r\n                        <ion-select-option\r\n                          value=\"{{RiskMatrix[9].weight}}\">{{RiskMatrix[9].detail_description}}</ion-select-option>\r\n                        <ion-select-option\r\n                          value=\"{{RiskMatrix[10].weight}}\">{{RiskMatrix[10].detail_description}}</ion-select-option>\r\n                        <ion-select-option\r\n                          value=\"{{RiskMatrix[11].weight}}\">{{RiskMatrix[11].detail_description}}</ion-select-option>\r\n                      </ion-select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <ion-label for=\"Client_risk_guarantee_type\"\r\n                      class=\"col-form-label\">{{RiskMatrix[15].description}}</ion-label>\r\n                    <div>\r\n                      <ion-select interface=\"popover\" id=\"Client_risk_guarantee_type\"\r\n                        [disabled]=\"!RiskMatrix[15].can_edit\" formControlName=\"Client_risk_guarantee_type\"\r\n                        placeholder=\"{{RiskMatrix[15].description}}\"\r\n                        class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                        [ngClass]=\"{'form-control-error': isClientRiskSubmitted && clientRiskControls.Client_risk_guarantee_type.errors}\">\r\n                        <ion-select-option value=\"{{RiskMatrix[15].weight}}\">{{RiskMatrix[15].detail_description}}\r\n                        </ion-select-option>\r\n                        <ion-select-option\r\n                          value=\"{{RiskMatrix[16].weight}}\">{{RiskMatrix[16].detail_description}}</ion-select-option>\r\n                        <ion-select-option\r\n                          value=\"{{RiskMatrix[17].weight}}\">{{RiskMatrix[17].detail_description}}</ion-select-option>\r\n                      </ion-select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <ion-label for=\"Client_risk_insured_clients_perc\"\r\n                      class=\"col-form-label\">{{RiskMatrix[18].description}}</ion-label>\r\n                    <div>\r\n                      <ion-select interface=\"popover\" id=\"Client_risk_insured_clients_perc\"\r\n                        [disabled]=\"!RiskMatrix[18].can_edit\" formControlName=\"Client_risk_insured_clients_perc\"\r\n                        placeholder=\"{{RiskMatrix[18].description}}\"\r\n                        class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                        [ngClass]=\"{'form-control-error': isClientRiskSubmitted && clientRiskControls.Client_risk_insured_clients_perc.errors}\">\r\n                        <ion-select-option\r\n                          value=\"{{RiskMatrix[18].weight}}\">{{RiskMatrix[18].detail_description}}</ion-select-option>\r\n                        <ion-select-option\r\n                          value=\"{{RiskMatrix[19].weight}}\">{{RiskMatrix[19].detail_description}}</ion-select-option>\r\n                        <ion-select-option\r\n                          value=\"{{RiskMatrix[20].weight}}\">{{RiskMatrix[20].detail_description}}</ion-select-option>\r\n                      </ion-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-4\">\r\n                  <div class=\"form-group\" *ngIf=\"clientInfo.client_type !== 'فردى'\">\r\n                    <ion-label for=\"Client_risk_nature_financing_product\"\r\n                      class=\"col-form-label\">{{RiskMatrix[24].description}}</ion-label>\r\n                    <div>\r\n                      <ion-select interface=\"popover\" id=\"Client_risk_nature_financing_product\"\r\n                        [disabled]=\"!RiskMatrix[24].can_edit\" formControlName=\"Client_risk_nature_financing_product\"\r\n                        placeholder=\"{{RiskMatrix[24].description}}\"\r\n                        class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                        [ngClass]=\"{'form-control-error': isClientRiskSubmitted && clientRiskControls.Client_risk_nature_financing_product.errors}\"\r\n                        [(ngModel)]=\"DefaultValueClient_risk_nature_financing_product\">\r\n                        <ion-select-option value=\"00\"></ion-select-option>\r\n                        <ion-select-option value=\"{{RiskMatrix[24].weight}}\">\r\n                          {{RiskMatrix[24].detail_description}}\r\n                        </ion-select-option>\r\n                        <ion-select-option value=\"{{RiskMatrix[25].weight}}\">{{RiskMatrix[25].detail_description}}\r\n                        </ion-select-option>\r\n                        <ion-select-option value=\"{{RiskMatrix[26].weight}}\">{{RiskMatrix[26].detail_description}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <ion-label for=\"Client_risk_product_location\"\r\n                      class=\"col-form-label\">{{RiskMatrix[18].description}}</ion-label>\r\n                    <div>\r\n                      <ion-select interface=\"popover\" id=\"Client_risk_product_location\"\r\n                        formControlName=\"Client_risk_product_location\" placeholder=\"{{RiskMatrix[18].description}}\"\r\n                        [disabled]=\"!RiskMatrix[18].can_edit\"\r\n                        class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                        [ngClass]=\"{'form-control-error': isClientRiskSubmitted && clientRiskControls.Client_risk_product_location.errors}\">\r\n                        <ion-select-option value=\"{{RiskMatrix[18].weight}}\">\r\n                          {{RiskMatrix[18].detail_description}}\r\n                        </ion-select-option>\r\n                        <ion-select-option value=\"{{RiskMatrix[19].weight}}\">\r\n                          {{RiskMatrix[19].detail_description}}\r\n                        </ion-select-option>\r\n                        <ion-select-option value=\"{{RiskMatrix[20].weight}}\">\r\n                          {{RiskMatrix[20].detail_description}}</ion-select-option>\r\n                      </ion-select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <ion-label for=\"Client_risk_geographic_risk\" class=\"col-form-label\">{{RiskMatrix[39].description}}\r\n                    </ion-label>\r\n                    <div>\r\n                      <ion-select interface=\"popover\" id=\"Client_risk_geographic_risk\"\r\n                        formControlName=\"Client_risk_geographic_risk\" placeholder=\"{{RiskMatrix[39].description}}\"\r\n                        [disabled]=\"!RiskMatrix[39].can_edit\"\r\n                        class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                        [ngClass]=\"{'form-control-error': isClientRiskSubmitted && clientRiskControls.Client_risk_geographic_risk.errors}\">\r\n                        <ion-select-option value=\"{{RiskMatrix[39].weight}}\">\r\n                          {{RiskMatrix[39].detail_description}}</ion-select-option>\r\n                        <ion-select-option value=\"{{RiskMatrix[40].weight}}\">\r\n                          {{RiskMatrix[40].detail_description}}</ion-select-option>\r\n                        <ion-select-option value=\"{{RiskMatrix[41].weight}}\">\r\n                          {{RiskMatrix[41].detail_description}}</ion-select-option>\r\n                      </ion-select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <ion-label for=\"Client_risk_legal_risk\"\r\n                      class=\"col-form-label\">{{RiskMatrix[42].description}}</ion-label>\r\n                    <div>\r\n                      <ion-select interface=\"popover\" id=\"Client_risk_legal_risk\" [disabled]=\"!RiskMatrix[42].can_edit\"\r\n                        formControlName=\"Client_risk_legal_risk\" placeholder=\"{{RiskMatrix[42].description}}\"\r\n                        class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                        [ngClass]=\"{'form-control-error': isClientRiskSubmitted && clientRiskControls.Client_risk_legal_risk.errors}\">\r\n                        <ion-select-option value=\"{{RiskMatrix[42].weight}}\">\r\n                          {{RiskMatrix[42].detail_description}}\r\n                        </ion-select-option>\r\n                        <ion-select-option value=\"{{RiskMatrix[43].weight}}\">{{RiskMatrix[43].detail_description}}\r\n                        </ion-select-option>\r\n                        <ion-select-option value=\"{{RiskMatrix[44].weight}}\">{{RiskMatrix[44].detail_description}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-4\">\r\n                  <div class=\"form-group\">\r\n                    <ion-label for=\"Client_risk_project_age\"\r\n                      class=\"col-form-label\">{{RiskMatrix[45].description}}</ion-label>\r\n                    <div>\r\n                      <ion-select interface=\"popover\" id=\"Client_risk_project_age\"\r\n                        formControlName=\"Client_risk_project_age\" placeholder=\"{{RiskMatrix[45].description}}\"\r\n                        [disabled]=\"!RiskMatrix[45].can_edit\"\r\n                        class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                        [ngClass]=\"{'form-control-error': isClientRiskSubmitted && clientRiskControls.Client_risk_project_age.errors}\">\r\n                        <ion-select-option value=\"{{RiskMatrix[45].weight}}\">{{RiskMatrix[45].detail_description}}\r\n                        </ion-select-option>\r\n                        <ion-select-option value=\"{{RiskMatrix[46].weight}}\">{{RiskMatrix[46].detail_description}}\r\n                        </ion-select-option>\r\n                        <ion-select-option value=\"{{RiskMatrix[47].weight}}\">{{RiskMatrix[47].detail_description}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <ion-label for=\"Client_risk_economic_risk\"\r\n                      class=\"col-form-label\">{{RiskMatrix[48].description}}</ion-label>\r\n                    <div>\r\n                      <ion-select interface=\"popover\" id=\"Client_risk_economic_risk\"\r\n                        formControlName=\"Client_risk_economic_risk\" placeholder=\"{{RiskMatrix[48].description}}\"\r\n                        [disabled]=\"!RiskMatrix[48].can_edit\"\r\n                        class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                        [ngClass]=\"{'form-control-error': isClientRiskSubmitted && clientRiskControls.Client_risk_economic_risk.errors}\">\r\n                        <ion-select-option value=\"{{RiskMatrix[48].weight}}\">{{RiskMatrix[48].detail_description}}\r\n                        </ion-select-option>\r\n                        <ion-select-option value=\"{{RiskMatrix[49].weight}}\">{{RiskMatrix[49].detail_description}}\r\n                        </ion-select-option>\r\n                        <ion-select-option value=\"{{RiskMatrix[50].weight}}\">{{RiskMatrix[50].detail_description}}\r\n                        </ion-select-option>\r\n                      </ion-select>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <ion-label for=\"Client_risk_insured_project_perc\"\r\n                      class=\"col-form-label\">{{RiskMatrix[21].description}}</ion-label>\r\n                    <div>\r\n                      <ion-select interface=\"popover\" id=\"Client_risk_insured_project_perc\"\r\n                        [disabled]=\"!RiskMatrix[21].can_edit\" formControlName=\"Client_risk_insured_project_perc\"\r\n                        placeholder=\"{{RiskMatrix[21].description}}\"\r\n                        class=\"ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\r\n                        [ngClass]=\"{'form-control-error': isClientRiskSubmitted && clientRiskControls.Client_risk_insured_project_perc.errors}\">\r\n                        <ion-select-option value=\"{{RiskMatrix[21].weight}}\">{{RiskMatrix[21].detail_description}}\r\n                        </ion-select-option>\r\n                        <ion-select-option\r\n                          value=\"{{RiskMatrix[22].weight}}\">{{RiskMatrix[22].detail_description}}</ion-select-option>\r\n                        <ion-select-option\r\n                          value=\"{{RiskMatrix[23].weight}}\">{{RiskMatrix[23].detail_description}}</ion-select-option>\r\n                      </ion-select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"d-flex justify-content-center mt-2\">\r\n                  <ion-button type=\"button\" color=\"danger\" awPreviousStep>\r\n                    رجوع\r\n                  </ion-button>\r\n                  <ion-button type=\"submit\">متابعة</ion-button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </aw-wizard-step>\r\n\r\n          <aw-wizard-step>\r\n            <ng-template awWizardStepSymbol>\r\n              <ion-icon name=\"push-outline\"></ion-icon>\r\n            </ng-template>\r\n            <h6 class=\"text-center\">تم اجتياز جميع الخطوات بنجاح</h6>\r\n            <div class=\"d-flex justify-content-center mt-2\">\r\n              <ion-button class=\"ml-2\" type=\"button\" color=\"danger\" awPreviousStep>\r\n                رجوع\r\n              </ion-button>\r\n              <ion-button type=\"button\" (click)=\"submitLoanApp()\">\r\n                تقديم\r\n              </ion-button>\r\n            </div>\r\n          </aw-wizard-step>\r\n        </aw-wizard>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_create-loan_create-loan_module_ts.js.map