"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_reviews_field-review_field-review_module_ts"],{

/***/ 22777:
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/reviews/field-review/field-review-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fieldreviewPageRoutingModule": function() { return /* binding */ fieldreviewPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _field_review_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field-review.page */ 30832);






var routes = [{
  path: '',
  component: _field_review_page__WEBPACK_IMPORTED_MODULE_2__.fieldreviewPage
}];

var fieldreviewPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function fieldreviewPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, fieldreviewPageRoutingModule);
});

fieldreviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], fieldreviewPageRoutingModule);


/***/ }),

/***/ 78556:
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/reviews/field-review/field-review.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldReviewPageModule": function() { return /* binding */ FieldReviewPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);
/* harmony import */ var _field_review_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field-review-routing.module */ 22777);
/* harmony import */ var _field_review_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field-review.page */ 30832);












var FieldReviewPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function FieldReviewPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FieldReviewPageModule);
});

FieldReviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _field_review_routing_module__WEBPACK_IMPORTED_MODULE_3__.fieldreviewPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_field_review_page__WEBPACK_IMPORTED_MODULE_4__.fieldreviewPage]
})], FieldReviewPageModule);


/***/ }),

/***/ 30832:
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/reviews/field-review/field-review.page.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fieldreviewPage": function() { return /* binding */ fieldreviewPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _field_review_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field-review.page.html?ngResource */ 21686);
/* harmony import */ var _field_review_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field-review.page.scss?ngResource */ 64972);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var _awesome_cordova_plugins_web_intent_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/web-intent/ngx */ 86973);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 54350);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/state.service */ 87051);
/* harmony import */ var src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/location.service */ 33094);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_camera_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/camera.service */ 9102);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);























var FieldReviewPageMode;

(function (FieldReviewPageMode) {
  FieldReviewPageMode[FieldReviewPageMode["Search"] = 0] = "Search";
  FieldReviewPageMode[FieldReviewPageMode["Review"] = 1] = "Review";
})(FieldReviewPageMode || (FieldReviewPageMode = {}));

var fieldreviewPage = /*#__PURE__*/function () {
  function fieldreviewPage(env, http, formBuilder, alertController, toastController, datePipe, webIntent, router, stateService, locationService, authService, datepipe, alertService, platform, cameraService, pagingService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, fieldreviewPage);

    this.env = env;
    this.http = http;
    this.formBuilder = formBuilder;
    this.alertController = alertController;
    this.toastController = toastController;
    this.datePipe = datePipe;
    this.webIntent = webIntent;
    this.router = router;
    this.stateService = stateService;
    this.locationService = locationService;
    this.authService = authService;
    this.datepipe = datepipe;
    this.alertService = alertService;
    this.platform = platform;
    this.cameraService = cameraService;
    this.pagingService = pagingService;
    this.FieldReviewPageMode = FieldReviewPageMode;
    this.displayDocuments = false;
    this.showLoader = false;
    this.isSubmitted = false;
    this.isCentralCommittee = false;
    this.canMakeDecision = false;
    this.isMakingDecision = false;
    this.RandomSelection = 0;
    this.isIscore_external_funding = false;
    this.isvalids = false;
    this.isRejected = false;
    this.isApproved = false;
    this.validationErrors = "";
    this.isLastVisits = false;
    this.hasDocs = false;
    this.page = 1; // the page we are viewing

    this.count = 1;
    this.sortingParam = "application_code";
    this.orderBy = false;
    this.revisionSearchForm = this.formBuilder.group({
      officer_key: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
      client_type_code: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
      all_officers: [null]
    });
    this.revisionVisitForm = this.formBuilder.group({
      homeLatitude: [null],
      homeLongitude: [null],
      homeZoom: [null],
      businessLatitude: [null],
      businessLongitude: [null],
      businessZoom: [null],
      businessImage: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern(/^[a-zA-Z0-9\+/]*={0,3}$/)],
      notes: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
      requestedAmount: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
      req_no: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
      loanUsage: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
      loan_type_code: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
      period_length: [null],
      period_type: [null],
      loan_int_rt: [null],
      loan_int_rt_2: [null],
      stamp_duty_rt: [null],
      app_charge: [null],
      app_charge_mem: [null],
      app_charge_rt: [null],
      app_charge_rt_mem: [null],
      lo_commission_rt: [null],
      installment_charges: [null]
    });
    this.DecisionForm = this.formBuilder.group({
      application_status: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
      funder_code: [null],
      loan_rej_code: [null],
      parent_rej_code: [null],
      funding_reference_id: [null],
      app_charge_perc_type: [""],
      app_charge_mem_perc_type: [""],
      com_dec_date: [this.datepipe.transform(new Date(), "yyyy-MM-dd"), [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(fieldreviewPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        var isDataRestored;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.pageSize = this.pagingService.getPageSizeFromLocalStorage();
                _context.next = 3;
                return this.authService.getUserInfo().then(function (userInfo) {
                  _this.user_officer_key = userInfo.officer_key;
                  _this.jobCode = userInfo.job_code;
                  _this.org_code = userInfo.org_code;
                });

              case 3:
                _context.next = 5;
                return this.getOfficerLocation();

              case 5:
                this.registerBackButtonListener();
                this.GetLoanType();
                _context.next = 9;
                return this.loadSession();

              case 9:
                isDataRestored = _context.sent;

                if (!isDataRestored) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return");

              case 14:
                this.pageMode = FieldReviewPageMode.Search;
                this.selectedLoanApplication = null;
                this.isSubmitted = false;
                this.initializeWithHttp();

              case 18:
                this.GetDecision();
                this.GetLoanRejectionParent();
                this.GetFunders();
                /* TEST ONLY */
                // this.revisionSearchForm.patchValue({
                //   officer_key: "19002033",
                //   client_type_code: "1",
                // });
                // this.searchLoanApplications();

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    } // ngOnDestroy(): void {
    //   this.backButtonListener.unsubscribe();
    // }

  }, {
    key: "registerBackButtonListener",
    value: function registerBackButtonListener() {
      var _this2 = this;

      this.backButtonListener = this.platform.backButton.subscribeWithPriority(10, function (next) {
        _this2.backButton();
      });
    }
  }, {
    key: "backButton",
    value: function backButton() {
      if (this.pageMode != FieldReviewPageMode.Search) {
        // Loan application selected
        if (this.pageMode == FieldReviewPageMode.Review) {
          this.cancel();
        }
      } else {
        this.router.navigate(["/"]);
      }
    }
  }, {
    key: "saveSession",
    value: function saveSession() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var uri, state;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                uri = this.router.url;
                state = this.stateService.serialize({
                  pageMode: this.pageMode,
                  showLoader: this.showLoader,
                  isSubmitted: this.isSubmitted,
                  clientTypes: this.clientTypes,
                  officers: this.officers,
                  loanUsages: this.loanUsages,
                  officer_key: this.officer_key,
                  client_type_code: this.client_type_code,
                  loanApplications: this.loanApplications,
                  selectedLoanApplication: this.selectedLoanApplication,
                  validationErrors: this.validationErrors,
                  page: this.page,
                  pageSize: this.pageSize,
                  count: this.count,
                  revisionSearchForm: this.revisionSearchForm.getRawValue(),
                  revisionVisitForm: this.revisionVisitForm.getRawValue()
                });
                _context2.next = 4;
                return this.stateService.savePageState(uri, state);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "loadSession",
    value: function loadSession() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var uri, serializedState, restoredResult, state;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.showLoader = true;
                _context3.prev = 1;
                uri = this.router.url;
                _context3.next = 5;
                return this.stateService.getPageState(uri);

              case 5:
                serializedState = _context3.sent;
                _context3.next = 8;
                return this.stateService.getAppRestoredResult();

              case 8:
                restoredResult = _context3.sent;

                if (!(!serializedState || !restoredResult)) {
                  _context3.next = 12;
                  break;
                }

                this.showLoader = false;
                return _context3.abrupt("return", false);

              case 12:
                state = this.stateService.deserialize(serializedState);
                _context3.next = 15;
                return this.stateService.clearPageState(uri);

              case 15:
                this.pageMode = state.pageMode;
                this.showLoader = state.showLoader;
                this.isSubmitted = state.isSubmitted;
                this.clientTypes = state.clientTypes;
                this.officers = state.officers;
                this.loanUsages = state.loanUsages;
                this.officer_key = state.officer_key;
                this.client_type_code = state.client_type_code;
                this.loanApplications = state.loanApplications;
                this.selectedLoanApplication = state.selectedLoanApplication;
                this.validationErrors = state.validationErrors;
                this.page = state.page;
                this.pageSize = state.pageSize;
                this.count = state.count;
                this.revisionSearchForm.patchValue(state.revisionSearchForm);
                this.revisionVisitForm.patchValue(state.revisionVisitForm);

                if (!(!restoredResult.success || restoredResult.pluginId != "Camera" || restoredResult.methodName != "getPhoto" || !restoredResult.data)) {
                  _context3.next = 34;
                  break;
                }

                this.showLoader = false;
                return _context3.abrupt("return", false);

              case 34:
                this.revisionVisitForm.patchValue({
                  businessImage: restoredResult.data.base64String
                });
                this.imageModal.present();
                this.presentToast("تم", "تم أخذ الصورة بنجاح");
                _context3.next = 39;
                return this.stateService.clearAppRestoredResult();

              case 39:
                this.showLoader = false;
                return _context3.abrupt("return", true);

              case 43:
                _context3.prev = 43;
                _context3.t0 = _context3["catch"](1);
                this.showLoader = false;
                return _context3.abrupt("return", false);

              case 47:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 43]]);
      }));
    }
  }, {
    key: "GetLoanType",
    value: function GetLoanType() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var _this3 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", this.http.get(this.env.API_URL + "api/Loan/GetAllLoanTypesForApp").subscribe(function (data) {
                  _this3.LoanTypes = data;
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "clearSession",
    value: function clearSession() {
      var uri = this.router.url;
      this.stateService.clearPageState(uri);
    }
  }, {
    key: "initializeWithHttp",
    value: function initializeWithHttp() {
      var _this4 = this;

      this.showLoader = true;
      (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.forkJoin)([this.getOfficers(), this.getClientTypes(), this.getLoanUsages()]).subscribe({
        next: function next(responseList) {
          _this4.officers = responseList[0];
          _this4.clientTypes = responseList[1];
          _this4.loanUsages = responseList[2];
          _this4.showLoader = false;
        },
        error: function error(err) {
          _this4.alertService.showAlertError("خطأ في الاتصال بالخادم", false);

          _this4.showLoader = false;
        }
      });
    }
  }, {
    key: "getOfficers",
    value: function getOfficers() {
      return this.http.get(this.env.API_URL + "api/Officer/GetOfficersByORG");
    }
  }, {
    key: "getClientTypes",
    value: function getClientTypes() {
      return this.http.get(this.env.API_URL + "api/Client_Type/GetClientTypes");
    }
  }, {
    key: "getLoanUsages",
    value: function getLoanUsages() {
      return this.http.get(this.env.API_URL + "api/LoanApplications/LoanUsages");
    }
  }, {
    key: "getLoanUsageDesc",
    value: function getLoanUsageDesc(loanUsageCode) {
      var _a;

      return (_a = this.loanUsages.find(function (u) {
        return u.loanUsageCode == loanUsageCode;
      })) === null || _a === void 0 ? void 0 : _a.loanUsageDesc;
    }
  }, {
    key: "getOfficerVisits",
    value: function getOfficerVisits(applicationKey) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.showLoader = true;
                _context5.next = 3;
                return this.http.get(this.env.API_URL + "api/Officer/GetOfficerVisits?applicationKey=" + applicationKey).toPromise();

              case 3:
                this.LastVisits = _context5.sent;

                if (this.LastVisits.length > 0) {
                  this.isLastVisits = true;
                } else {
                  this.isLastVisits = false;
                }

                console.log(this.LastVisits);
                this.showLoader = false;

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "searchForLoanApp",
    value: function searchForLoanApp() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.RandomSelection = 0;
                _context6.next = 3;
                return this.searchLoanApplications();

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "searchLoanApplications",
    value: function searchLoanApplications() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        var officerKey, url, data;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!this.revisionSearchForm.valid) {
                  _context7.next = 21;
                  break;
                }

                _context7.prev = 1;
                this.showLoader = true; //console.log(this.OfficerLat, this.OfficerLong);

                if (this.revisionSearchForm.value.officer_key == 0) {
                  this.revisionSearchForm.patchValue({
                    all_officers: "1"
                  });
                  officerKey = null;
                } else {
                  this.revisionSearchForm.patchValue({
                    all_officers: "0"
                  });
                  officerKey = this.revisionSearchForm.value.officer_key;
                }

                url = "api/LoanApplications/GetApplicationsToRevise?pageNumber=".concat(this.page, "&pageSize=").concat(this.pageSize, "&sortingParam=").concat(this.sortingParam, "&orderBy=").concat(this.orderBy, "&RandomSelection=").concat(this.RandomSelection);

                if (this.OfficerLat && this.OfficerLong != undefined) {
                  url = url + "&OfficerLat=".concat(this.OfficerLat, "&OfficerLong=").concat(this.OfficerLong); //console.log("sddd");
                }

                _context7.next = 8;
                return this.http.post(this.env.API_URL + url, Object.assign(Object.assign({}, this.revisionSearchForm.getRawValue()), {
                  officer_key: officerKey
                })).toPromise();

              case 8:
                data = _context7.sent;
                this.loanApplications = data["entities"];
                console.log(this.loanApplications);
                this.count = data["count"];
                this.showLoader = false;
                _context7.next = 19;
                break;

              case 15:
                _context7.prev = 15;
                _context7.t0 = _context7["catch"](1);
                this.alertService.showAlertError("خطأ في الاتصال بالخادم", false);
                this.showLoader = false;

              case 19:
                _context7.next = 22;
                break;

              case 21:
                this.alertService.showAlertError("برجاء ادخال بيانات البحث بشكل صحيح", false);

              case 22:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 15]]);
      }));
    }
  }, {
    key: "changePage",
    value: function changePage(newPage) {
      this.page = newPage;
    }
  }, {
    key: "GetLoanTypeInfo",
    value: function GetLoanTypeInfo(loanTypeCode) {
      var _this5 = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/Loan/GetLoanTypeInfo?loanTypeCode=".concat(loanTypeCode)).subscribe({
        next: function next(data) {
          _this5.loanTypeInfo = data; // console.log(this.loanTypeInfo);

          _this5.loadDefaultValuesLoanType();

          _this5.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this5.showLoader = false;
        }
      });
    }
  }, {
    key: "onLoanTypeChanged",
    value: function onLoanTypeChanged($event) {
      if ($event.detail.value != "") {
        this.GetLoanTypeInfo($event.detail.value);
      }
    }
  }, {
    key: "onDecisionChanged",
    value: function onDecisionChanged($event) {
      if ($event.detail.value == "2") {
        this.DecisionForm.controls["loan_rej_code"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]);
        this.DecisionForm.controls["loan_rej_code"].updateValueAndValidity();
        this.isRejected = true;
        this.isMakingDecision = true;
        this.DecisionForm.patchValue({
          funder_code: null
        });
        this.DecisionForm.patchValue({
          funding_reference_id: null
        });
      } else if ($event.detail.value == "0") {
        this.isRejected = false;
        this.isApproved = false;
        this.isMakingDecision = false;
        this.DecisionForm.controls["loan_rej_code"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.nullValidator]);
        this.DecisionForm.controls["loan_rej_code"].updateValueAndValidity();
        this.DecisionForm.patchValue({
          funder_code: null
        });
        this.DecisionForm.patchValue({
          funding_reference_id: null
        });
        this.DecisionForm.patchValue({
          loan_rej_code: null
        });
      } else {
        this.DecisionForm.controls["loan_rej_code"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.nullValidator]);
        this.DecisionForm.controls["loan_rej_code"].updateValueAndValidity();
        this.isRejected = false;
        this.isApproved = true;
        this.isMakingDecision = true;
        this.DecisionForm.patchValue({
          loan_rej_code: null
        });
      } // console.log(this.DecisionForm.value.loan_rej_code);

    }
  }, {
    key: "loadDefaultValuesLoanType",
    value: function loadDefaultValuesLoanType() {
      if (this.loanTypeInfo.period_length != undefined) this.revisionVisitForm.patchValue({
        period_length: this.loanTypeInfo.period_length
      });
      if (this.loanTypeInfo.period_type != undefined) this.revisionVisitForm.patchValue({
        period_type: this.loanTypeInfo.period_type.toString()
      });
      if (this.loanTypeInfo.loan_int_rt != undefined) this.revisionVisitForm.patchValue({
        loan_int_rt: this.loanTypeInfo.loan_int_rt.toString()
      });
      if (this.loanTypeInfo.loan_int_rt_2 != undefined) this.revisionVisitForm.patchValue({
        loan_int_rt_2: this.loanTypeInfo.loan_int_rt_2.toString()
      });
      if (this.loanTypeInfo.stamp_duty_rt != undefined) this.revisionVisitForm.patchValue({
        stamp_duty_rt: this.loanTypeInfo.stamp_duty_rt.toString()
      });
      if (this.loanTypeInfo.app_charge != undefined) this.revisionVisitForm.patchValue({
        app_charge: this.loanTypeInfo.app_charge.toString()
      });
      if (this.loanTypeInfo.app_charge_mem != undefined) this.revisionVisitForm.patchValue({
        app_charge_mem: this.loanTypeInfo.app_charge_mem.toString()
      });
      if (this.loanTypeInfo.app_charge_rt != undefined) this.revisionVisitForm.patchValue({
        app_charge_rt: this.loanTypeInfo.app_charge_rt.toString()
      });
      if (this.loanTypeInfo.app_charge_rt_mem != undefined) this.revisionVisitForm.patchValue({
        app_charge_rt_mem: this.loanTypeInfo.app_charge_rt_mem.toString()
      });
      if (this.loanTypeInfo.lo_commission_rt != undefined) this.revisionVisitForm.patchValue({
        lo_commission_rt: this.loanTypeInfo.lo_commission_rt.toString()
      });
      if (this.loanTypeInfo.installment_charges != undefined) this.revisionVisitForm.patchValue({
        installment_charges: this.loanTypeInfo.installment_charges.toString()
      });
    }
  }, {
    key: "review",
    value: function review(loanApplication) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.selectedLoanApplication = loanApplication; // console.log(this.selectedLoanApplication)

                this.getOfficerVisits(this.selectedLoanApplication.applicationKey);
                this.pageMode = FieldReviewPageMode.Review;
                this.revisionVisitForm.patchValue({
                  requestedAmount: this.NumberFormatStyle(loanApplication.requestedAmount),
                  req_no: loanApplication.requestedInstallmentNumber,
                  loanUsage: loanApplication.loanUsageCode,
                  loan_type_code: loanApplication.loan_type_code,
                  application_key: loanApplication.applicationKey,
                  orgBranchCode: loanApplication.orgBranchCode
                });
                this.DecisionForm.patchValue({
                  app_charge_perc_type: loanApplication.app_charge_perc_type,
                  app_charge_mem_perc_type: loanApplication.app_charge_mem_perc_type
                });
                this.GetLoanTypeInfo(loanApplication.loan_type_code);

                if (this.jobCode == -6) {
                  this.isCentralCommittee = true;
                  this.canMakeDecision = true;
                } else if (this.jobCode == -5) {
                  this.canMakeDecision = true;
                  this.FilteredDecisions = this.FilteredDecisions.filter(function (x) {
                    return x.ref_code == "0" || x.ref_code == "2";
                  });
                } else {
                  this.isCentralCommittee = false;
                  this.canMakeDecision = false;
                }

                this.GetClientImages();
                console.log(loanApplication, this.LastVisits, this.DecisionForm.value.loan_rej_code);

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this6 = this;

      if (this.revisionVisitForm.valid) {
        this.isSubmitted = true;

        if (this.validateRevision()) {
          if (this.revisionSearchForm.value.officer_key == 0) {
            this.revisionSearchForm.value.officer_key = this.user_officer_key;
          }

          var requestBody = JSON.stringify(Object.assign({
            applicationKey: this.selectedLoanApplication.applicationKey,
            officerKey: this.user_officer_key,
            visitDate: this.datePipe.transform(Date.now(), "yyyy-MM-dd")
          }, this.revisionVisitForm.getRawValue()), function (key, value) {
            return value && value !== Object(value) ? value.toString() : value;
          });
          console.log(this.revisionSearchForm.value, this.revisionVisitForm.value); // console.log(JSON.parse(requestBody), this.officer_key);

          this.showLoader = true;
          this.http.post(this.env.API_URL + "api/LoanApplications/FieldReviseApplication", JSON.parse(requestBody)).subscribe({
            next: function next(data) {
              _this6.alertService.showAlertConfirm("تم المراجعة بنجاح", true);

              _this6.cancel();

              _this6.showLoader = false;
            },
            error: function error(_error) {
              var _a, _b;

              console.log(_error);

              _this6.alertService.showAlertError("\u062D\u062F\u062B \u0627\u0644\u062E\u0637\u0623 \u0627\u0644\u062A\u0627\u0644\u064A: ".concat((_b = (_a = _error === null || _error === void 0 ? void 0 : _error.error) !== null && _a !== void 0 ? _a : _error === null || _error === void 0 ? void 0 : _error.message) !== null && _b !== void 0 ? _b : JSON.stringify(_error), " \u0627\u062B\u0646\u0627\u0621 \u0645\u062D\u0627\u0648\u0644\u0629 \u0627\u0644\u062D\u0641\u0638"), false);

              _this6.showLoader = false;
            }
          });
        } else {
          //console.log(this.validationErrors);
          this.alertService.showAlertError(this.validationErrors, false);
        }
      } else {
        this.alertService.showAlertError("يجب اضافة ملاحظات الزيارة", false);
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      //console.log(this.RandomSelection);
      if (this.RandomSelection == 1) {
        this.loanApplications = null;
      }

      this.pageMode = FieldReviewPageMode.Search;
      this.selectedLoanApplication = null;
      this.revisionVisitForm.reset();
      this.isSubmitted = false; // console.log(this.revisionSearchForm.value);
    }
  }, {
    key: "showLocation",
    value: function showLocation(coordinates) {
      this.locationService.showLocation(coordinates);
    }
  }, {
    key: "checkCameraPermission",
    value: function checkCameraPermission() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
        var _yield$Camera$checkPe, photos, camera;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.Camera.checkPermissions();

              case 2:
                _yield$Camera$checkPe = _context9.sent;
                photos = _yield$Camera$checkPe.photos;
                camera = _yield$Camera$checkPe.camera;
                return _context9.abrupt("return", photos == "granted" && camera == "granted");

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));
    }
  }, {
    key: "canAskForCameraPermission",
    value: function canAskForCameraPermission() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10() {
        var _yield$Camera$checkPe2, photos, camera;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.Camera.checkPermissions();

              case 2:
                _yield$Camera$checkPe2 = _context10.sent;
                photos = _yield$Camera$checkPe2.photos;
                camera = _yield$Camera$checkPe2.camera;
                return _context10.abrupt("return", photos != "denied" && camera != "denied");

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));
    }
  }, {
    key: "requestCameraPermission",
    value: function requestCameraPermission() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee11() {
        var granted, canAskForPermission;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.checkCameraPermission();

              case 2:
                granted = _context11.sent;

                if (!granted) {
                  _context11.next = 7;
                  break;
                }

                return _context11.abrupt("return", true);

              case 7:
                _context11.next = 9;
                return this.canAskForCameraPermission();

              case 9:
                canAskForPermission = _context11.sent;

                if (!canAskForPermission) {
                  _context11.next = 18;
                  break;
                }

                _context11.next = 13;
                return _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.Camera.requestPermissions();

              case 13:
                _context11.next = 15;
                return this.checkCameraPermission();

              case 15:
                granted = _context11.sent;

                if (!granted) {
                  _context11.next = 18;
                  break;
                }

                return _context11.abrupt("return", true);

              case 18:
                return _context11.abrupt("return", false);

              case 19:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
    }
  }, {
    key: "getBusinessImage",
    value: function getBusinessImage() {
      var _a;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee12() {
        var cameraResult;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this.showLoader = true;
                _context12.next = 3;
                return this.saveSession();

              case 3:
                _context12.next = 5;
                return this.cameraService.getPhoto();

              case 5:
                cameraResult = _context12.sent;

                if (cameraResult.success) {
                  this.revisionVisitForm.patchValue({
                    businessImage: (_a = cameraResult.photo) === null || _a === void 0 ? void 0 : _a.base64String
                  });
                  this.imageModal.present();
                  this.presentToast("تم", "تم أخذ الصورة بنجاح");
                } else {
                  this.alertService.showAlertError(cameraResult.message, false);
                }

                this.clearSession();
                this.showLoader = false;

              case 9:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
    }
  }, {
    key: "getHomeLocation",
    value: function getHomeLocation() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee13() {
        var locationResult;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.showLoader = true;
                _context13.prev = 1;
                _context13.next = 4;
                return this.locationService.getLocation();

              case 4:
                locationResult = _context13.sent;

                if (locationResult.success) {
                  _context13.next = 9;
                  break;
                }

                this.alertService.showAlertError(locationResult.message, false);
                this.showLoader = false;
                return _context13.abrupt("return");

              case 9:
                this.revisionVisitForm.patchValue({
                  homeLatitude: locationResult.position.coords.latitude,
                  homeLongitude: locationResult.position.coords.longitude,
                  homeZoom: 15
                });
                this.presentToast("تم", "تم أخذ اللقطة بنجاح");
                this.showLoader = false;
                _context13.next = 18;
                break;

              case 14:
                _context13.prev = 14;
                _context13.t0 = _context13["catch"](1);
                this.showLoader = false;
                this.alertService.showAlertError("خطأ عند أخذ لقطة الموقع", false);

              case 18:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[1, 14]]);
      }));
    }
  }, {
    key: "getBusinessLocation",
    value: function getBusinessLocation() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee14() {
        var locationResult;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                this.showLoader = true;
                _context14.prev = 1;
                _context14.next = 4;
                return this.locationService.getLocation();

              case 4:
                locationResult = _context14.sent;

                if (locationResult.success) {
                  _context14.next = 9;
                  break;
                }

                this.alertService.showAlertError(locationResult.message, false);
                this.showLoader = false;
                return _context14.abrupt("return");

              case 9:
                this.revisionVisitForm.patchValue({
                  businessLatitude: locationResult.position.coords.latitude,
                  businessLongitude: locationResult.position.coords.longitude,
                  homeZoom: 15
                });
                this.presentToast("تم", "تم أخذ اللقطة بنجاح");
                this.showLoader = false;
                _context14.next = 18;
                break;

              case 14:
                _context14.prev = 14;
                _context14.t0 = _context14["catch"](1);
                this.showLoader = false;
                this.alertService.showAlertError("خطأ عند أخذ لقطة الموقع", false);

              case 18:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[1, 14]]);
      }));
    }
  }, {
    key: "validateRevision",
    value: function validateRevision() {
      this.validationErrors = "";
      var state = true;

      if (this.revisionVisitForm.get("notes").hasError("required")) {
        this.validationErrors += "يجب اضافة ملاحظات الزيارة<br>";
        state = false;
      }

      if (!this.isHomeLocationValid() && !this.isBusinessLocationValid()) {
        this.validationErrors += "يجب أخذ لقطة للموقع<br>";
        state = false;
      } // if (this.revisionVisitForm.get("req_no").hasError("required")) {
      //   this.validationErrors += "يجب تحديد عدد الأقساط";
      //   state = false;
      // }
      // if (this.revisionVisitForm.get("req_am").hasError("required")) {
      //   this.validationErrors += "يجب تحديد قيمة القرض";
      //   state = false;
      // }


      if (!this.isBusinessLocationValid && this.isBusinessImageValid()) {
        this.validationErrors += "لا يمكن رفع صورة لمكان العمل بدون اخذ لقطة للموقع<br>";
        state = false;
      }

      return state;
    }
  }, {
    key: "isHomeLocationValid",
    value: function isHomeLocationValid() {
      return !!this.revisionVisitForm.get("homeLatitude").value && !!this.revisionVisitForm.get("homeLongitude").value && this.revisionVisitForm.get("homeLatitude").value != "" && this.revisionVisitForm.get("homeLongitude").value != "";
    }
  }, {
    key: "isBusinessLocationValid",
    value: function isBusinessLocationValid() {
      return !!this.revisionVisitForm.get("businessLatitude").value && !!this.revisionVisitForm.get("businessLongitude").value && this.revisionVisitForm.get("businessLatitude").value != "" && this.revisionVisitForm.get("businessLongitude").value != "";
    }
  }, {
    key: "isBusinessImageValid",
    value: function isBusinessImageValid() {
      return !!this.revisionVisitForm.get("businessImage").value && this.revisionVisitForm.get("businessImage").value != "" && !this.revisionVisitForm.get("businessImage").hasError("pattern");
    }
  }, {
    key: "sortByApplicationNum",
    value: function sortByApplicationNum() {
      this.sortingParam = "application_code"; // console.log(this.sortingParam);

      this.orderBy = !this.orderBy;
      this.searchLoanApplications();
    }
  }, {
    key: "sortByAmount",
    value: function sortByAmount() {
      this.sortingParam = "aprv_am"; // console.log(this.sortingParam);

      this.orderBy = !this.orderBy;
      this.searchLoanApplications();
    }
  }, {
    key: "sortByDistance",
    value: function sortByDistance() {
      this.sortingParam = "distance"; // console.log(this.sortingParam);

      this.orderBy = !this.orderBy;
      this.searchLoanApplications();
    }
  }, {
    key: "randomSelection",
    value: function randomSelection() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee15() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                this.RandomSelection = 1;
                this.loanApplications = null;
                _context15.next = 4;
                return this.searchLoanApplications();

              case 4:
                if (!(this.loanApplications.length > 0)) {
                  _context15.next = 7;
                  break;
                }

                _context15.next = 7;
                return this.review(this.loanApplications[0]);

              case 7:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
    }
  }, {
    key: "getOfficerLocation",
    value: function getOfficerLocation() {
      var _a, _b;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee16() {
        var locationResult;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_8__.Capacitor.getPlatform() != "web")) {
                  _context16.next = 19;
                  break;
                }

                this.showLoader = true;
                _context16.prev = 2;
                _context16.next = 5;
                return this.locationService.getLocation();

              case 5:
                locationResult = _context16.sent;

                if (locationResult.success) {
                  _context16.next = 10;
                  break;
                }

                this.presentToast("تنبيه", locationResult.message);
                this.showLoader = false;
                return _context16.abrupt("return");

              case 10:
                this.OfficerLat = (_a = locationResult.position) === null || _a === void 0 ? void 0 : _a.coords.latitude.toString();
                this.OfficerLong = (_b = locationResult.position) === null || _b === void 0 ? void 0 : _b.coords.longitude.toString();
                this.OfficerZoom = "0"; // console.log(this.OfficerLat, this.OfficerLong);
                // this.presentToast("تم", locationResult.message);

                this.showLoader = false;
                _context16.next = 19;
                break;

              case 16:
                _context16.prev = 16;
                _context16.t0 = _context16["catch"](2);
                this.showLoader = false;

              case 19:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this, [[2, 16]]);
      }));
    }
  }, {
    key: "NumberFormatStyle",
    value: function NumberFormatStyle(number) {
      var result = (0,_angular_common__WEBPACK_IMPORTED_MODULE_18__.formatNumber)(Number(number), "en-US", "1.0");
      return result;
    }
  }, {
    key: "DateFormatStyle",
    value: function DateFormatStyle(input) {
      return this.datePipe.transform(input, "yyyy-MM-dd");
    }
  }, {
    key: "onParentRejChanged",
    value: function onParentRejChanged($event) {
      this.GetLoanRejection($event.detail.value);
    }
  }, {
    key: "SubmitDecision",
    value: function SubmitDecision() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee17() {
        var _this7 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (!this.DecisionForm.valid) {
                  _context17.next = 8;
                  break;
                }

                _context17.next = 3;
                return this.alertService.SaveAlert();

              case 3:
                if (!_context17.sent) {
                  _context17.next = 6;
                  break;
                }

                this.showLoader = true;
                this.http.post(this.env.API_URL + "api/LoanApplications/ApplicationDecisionInsert", {
                  application_key: this.selectedLoanApplication.applicationKey.toString(),
                  org_branch_code: this.selectedLoanApplication.orgBranchCode.toString(),
                  client_code: this.selectedLoanApplication.clientCode.toString(),
                  uuc_appl: this.selectedLoanApplication.uuc_appl.toString(),
                  application_status: this.DecisionForm.value.application_status.toString(),
                  com_dec_date: this.DecisionForm.value.com_dec_date.toString(),
                  funder_code: this.DecisionForm.value.funder_code,
                  loan_rej_code: this.DecisionForm.value.loan_rej_code,
                  aprv_am: this.revisionVisitForm.value.requestedAmount.toString(),
                  req_gp: this.selectedLoanApplication.req_gp.toString(),
                  req_no: this.revisionVisitForm.value.req_no.toString(),
                  app_charge_perc_type: this.selectedLoanApplication.app_charge_perc_type.toString(),
                  app_charge_mem_perc_type: this.selectedLoanApplication.app_charge_mem_perc_type.toString(),
                  funding_reference_id: this.DecisionForm.value.funding_reference_id
                }).subscribe({
                  next: function next(data) {
                    _this7.alertService.showAlertConfirm("تم الحفظ بنجاح", true);

                    _this7.showLoader = false;
                  },
                  error: function error(err) {
                    _this7.alertService.showAlertError(err.error, false);

                    _this7.showLoader = false;
                  }
                });

              case 6:
                _context17.next = 9;
                break;

              case 8:
                this.alertService.showAlertError("برجاء ادخال بيانات بشكل صحيح", false);

              case 9:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
    }
  }, {
    key: "GetDecision",
    value: function GetDecision() {
      var _this8 = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/StaticRef/GetDecision").subscribe({
        next: function next(data) {
          _this8.decisions = data;
          _this8.FilteredDecisions = _this8.decisions;
          _this8.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this8.showLoader = false;
        }
      });
    }
  }, {
    key: "GetLoanRejectionParent",
    value: function GetLoanRejectionParent() {
      var _this9 = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/LoanApplications/GetRejectionRefParent").subscribe({
        next: function next(data) {
          _this9.RejectionParent = data;
          _this9.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this9.showLoader = false;
        }
      });
    }
  }, {
    key: "GetLoanRejection",
    value: function GetLoanRejection(parent_rej_code) {
      var _this10 = this;

      this.showLoader = true;
      this.http.post(this.env.API_URL + "api/LoanApplications/GetLoanRejection", {
        parent_rej_code: parent_rej_code.toString()
      }).subscribe({
        next: function next(data) {
          _this10.LoanRej = data;
          _this10.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this10.showLoader = false;
        }
      });
    }
  }, {
    key: "GetFunders",
    value: function GetFunders() {
      var _this11 = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/LoanApplications/GetFunders").subscribe({
        next: function next(data) {
          _this11.Funders = data;
          _this11.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this11.showLoader = false;
        }
      });
    }
  }, {
    key: "GetFundingReference",
    value: function GetFundingReference($event) {
      var _this12 = this;

      if ($event.detail.value != "") {
        this.showLoader = true;
        this.http.post(this.env.API_URL + "api/LoanApplications/GetFundingReference", {
          org_code: this.org_code,
          funder_code: $event.detail.value
        }).subscribe({
          next: function next(data) {
            console.log(data);
            _this12.FundingRef = data["fundingRefs"];
            _this12.iscore_external_funding = data["iscore_external_funding"];

            if (_this12.iscore_external_funding == "1") {
              _this12.isIscore_external_funding = true;
            } else {
              _this12.isIscore_external_funding = false;

              _this12.DecisionForm.patchValue({
                funding_reference_id: null
              });
            }

            _this12.showLoader = false;
          },
          error: function error(err) {
            console.log(err);
            _this12.showLoader = false;
          }
        });
      }
    }
  }, {
    key: "GetClientImages",
    value: function GetClientImages() {
      var _this13 = this;

      this.showLoader = true;
      this.http.post(this.env.API_URL + "api/Documents/GetClientImages", {
        client_key: this.selectedLoanApplication.clientKey.toString(),
        application_key: this.selectedLoanApplication.applicationKey != null ? this.selectedLoanApplication.applicationKey.toString() : null,
        doc_type_code: "-990"
      }).subscribe({
        next: function next(data) {
          _this13.ClientDocuments = data;
          _this13.allDocs = _this13.getDistinctValues(_this13.ClientDocuments, "doc_image");

          if (_this13.allDocs.length != 0) {
            _this13.hasDocs = true;
          } else {
            _this13.hasDocs = false;
          }

          _this13.showLoader = false;
        },
        error: function error(err) {
          _this13.alertService.showAlertError(err.error, false);

          _this13.showLoader = false;
        }
      });
    }
  }, {
    key: "getDistinctValues",
    value: function getDistinctValues(data, distinct_name) {
      var values = data.map(function (item) {
        return item[distinct_name];
      });
      var distinctValues = values.filter(function (value, index, array) {
        return value != null && array.indexOf(value) === index;
      });
      return distinctValues;
    }
  }, {
    key: "presentToast",
    value: function presentToast(header, message) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee18() {
        var toast;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this.toastController.create({
                  header: header,
                  message: message,
                  cssClass: "toast-primary",
                  duration: 2000,
                  position: "bottom"
                });

              case 2:
                toast = _context18.sent;
                _context18.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
    }
  }, {
    key: "noWhitespaceValidator",
    value: function noWhitespaceValidator(control) {
      var isWhitespace = control.value !== null && (control.value || "").toString().trim().length === 0;
      var isValid = !isWhitespace;
      return isValid ? null : {
        whitespace: true
      };
    }
  }, {
    key: "showCurrentDocuments",
    value: function showCurrentDocuments() {
      this.displayDocuments = !this.displayDocuments;
    }
  }]);

  return fieldreviewPage;
}();

fieldreviewPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.AlertController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ToastController
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe
  }, {
    type: _awesome_cordova_plugins_web_intent_ngx__WEBPACK_IMPORTED_MODULE_6__.WebIntent
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_21__.Router
  }, {
    type: src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_9__.StateService
  }, {
    type: src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_10__.LocationService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_11__.MohassilAuthService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_12__.AlertService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.Platform
  }, {
    type: src_app_core_services_camera_service__WEBPACK_IMPORTED_MODULE_13__.CameraService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_14__.pagingService
  }];
};

fieldreviewPage.propDecorators = {
  imageModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
    args: ["imageModal"]
  }]
};
fieldreviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
  selector: "app-field-review",
  template: _field_review_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_field_review_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], fieldreviewPage);


/***/ }),

/***/ 64972:
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/reviews/field-review/field-review.page.scss?ngResource ***!
  \************************************************************************************/
/***/ (function(module) {

module.exports = ".table tbody th,\n.table tbody td {\n  padding: 0.4rem 0.9375rem !important;\n}\n\n.labelpad {\n  padding-bottom: 55px;\n}\n\n@media (min-width: 770px) {\n  .btnMar {\n    margin-right: 290%;\n    font-size: medium;\n  }\n}\n\n.checkBoxs {\n  margin-right: 1.5rem;\n}\n\n.form-control-error {\n  border-color: #ff3366;\n}\n\n.form-control-error:hover {\n  border-color: #da0036;\n}\n\n.input-validator {\n  font-weight: 600;\n  padding-right: 10px;\n  padding-left: 10px;\n  color: #ff3366 !important;\n}\n\n.input-validator::before {\n  content: \"-\";\n  margin-left: 6px;\n}\n\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.checkBox-isactive {\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n\n.group-title {\n  font-weight: 700;\n  font-size: 1.2rem;\n  text-align: center;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n  border-radius: 6px;\n  background-image: linear-gradient(to left, rgba(112, 123, 245, 0.2), var(--card-bg));\n  border-color: #c8cbea;\n  color: var(--body-color);\n}\n\n.nested-form {\n  border: 2px solid rgba(112, 123, 245, 0.2);\n  border-radius: 5px;\n  padding: 1rem 2rem;\n}\n\n.form-group-title {\n  display: block;\n  color: var(--theme-color-primary);\n  font-weight: 700;\n}\n\n.alert-button-confirm {\n  color: var(--body-color);\n}\n\nion-textarea {\n  min-height: 2rem;\n  max-height: 15rem;\n}\n\n.separate-groups {\n  border-bottom: 1px var(--theme-color-primary);\n}\n\n.image-modal {\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.image-modal::part(content) {\n  max-width: 90%;\n  max-height: 70%;\n}\n\n.table-stripedsss > tbody > tr:nth-of-type(odd) > * {\n  color: var(--table-striped-text-color) !important;\n  background-color: var(--table-striped-bg) !important;\n}\n\n.zoomable {\n  cursor: zoom-in;\n  transition: transform 0.5s;\n  width: 280px;\n  height: 180px;\n}\n\n.zoomable:hover {\n  cursor: zoom-out;\n  -ms-transform: scale(1.2);\n      transform: scale(1.2);\n  width: 50%;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpZWxkLXJldmlldy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEZWxldGUlMjBpdFxcTmV3TW9oYXNzaWxDbGllbnRfMzA5NV9zcmNcXE5ld01vaGFzc2lsQ2xpZW50XFxzcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxyZXZpZXdzXFxmaWVsZC1yZXZpZXdcXGZpZWxkLXJldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7O0VBRUUsb0NBQUE7QUNETjs7QURNQTtFQUNFLG9CQUFBO0FDSEY7O0FEVUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7RUNQRjtBQUNGOztBRFVBO0VBQ0Usb0JBQUE7QUNSRjs7QURXQTtFQUNFLHFCQUFBO0FDUkY7O0FEVUU7RUFDRSxxQkFBQTtBQ1JKOztBRFlBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNURjs7QURXRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ1RKOztBRGNFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDWEo7O0FEZUE7RUFFRSxtQkFBQTtNQUFBLHFCQUFBO0FDYkY7O0FEZ0JBO0VBR0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBR0Esb0ZBQUE7RUFLQSxxQkFBQTtFQUNBLHdCQUFBO0FDckJGOztBRHdCQTtFQUdFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ3ZCRjs7QUQwQkE7RUFDRSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ3ZCRjs7QUQwQkE7RUFDRSx3QkFBQTtBQ3ZCRjs7QUQwQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDdkJGOztBRDBCQTtFQUNFLDZDQUFBO0FDdkJGOztBRDBCQTtFQUNFLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxxQkFBQTtNQUFBLHVCQUFBO0FDdkJGOztBRHdCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDdEJKOztBRDBCQTtFQUNFLGlEQUFBO0VBQ0Esb0RBQUE7QUN2QkY7O0FEMEJBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUN2QkY7O0FEMEJBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtNQUFBLHFCQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7QUN4QkYiLCJmaWxlIjoiZmllbGQtcmV2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgdGJvZHkge1xyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjkzNzVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sYWJlbHBhZCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDU1cHg7XHJcbn1cclxuXHJcbi8vIGlvbi1idXR0b24ge1xyXG4vLyAgIHBhZGRpbmctbGVmdDogMjAlO1xyXG4vLyAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcclxuLy8gICBmb250LXNpemU6IGxhcmdlO1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzcwcHgpIHtcclxuICAuYnRuTWFyIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjkwJTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIH1cclxufVxyXG5cclxuLmNoZWNrQm94cyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtZXJyb3Ige1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgNTEsIDEwMik7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjE4LCAwLCA1NCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXQtdmFsaWRhdG9yIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKSAhaW1wb3J0YW50O1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCItXCI7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tbGFiZWwtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hlY2tCb3gtaXNhY3RpdmUge1xyXG4gIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZ3JvdXAtdGl0bGUge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzQ1Y2NiMSwgMC44KTtcclxuICAvLyBjb2xvcjogI2Y2ZmNlZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjYTRkNDkxLCAwLjMpO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNjOGNiZWE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gbGVmdCxcclxuICAgIHJnYmEoIzcwN2JmNSwgMC4yKSxcclxuICAgIHZhcigtLWNhcmQtYmcpXHJcbiAgKTtcclxuICBib3JkZXItY29sb3I6ICNjOGNiZWE7XHJcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xyXG59XHJcblxyXG4ubmVzdGVkLWZvcm0ge1xyXG4gIC8vIGJvcmRlci1yaWdodDogMC4ycmVtIHNvbGlkIHJnYmEoIzcwN2JmNSwgMC4yKTtcclxuICAvLyBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoIzcwN2JmNSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cC10aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5hbGVydC1idXR0b24tY29uZmlybSB7XHJcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xyXG59XHJcblxyXG5pb24tdGV4dGFyZWEge1xyXG4gIG1pbi1oZWlnaHQ6IDJyZW07XHJcbiAgbWF4LWhlaWdodDogMTVyZW07XHJcbn1cclxuXHJcbi5zZXBhcmF0ZS1ncm91cHMge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCB2YXIoLS10aGVtZS1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLmltYWdlLW1vZGFsIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICY6OnBhcnQoY29udGVudCkge1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUtc3RyaXBlZHNzcyA+IHRib2R5ID4gdHI6bnRoLW9mLXR5cGUob2RkKSA+ICoge1xyXG4gIGNvbG9yOiB2YXIoLS10YWJsZS1zdHJpcGVkLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtc3RyaXBlZC1iZykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnpvb21hYmxlIHtcclxuICBjdXJzb3I6IHpvb20taW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbn1cclxuXHJcbi56b29tYWJsZTpob3ZlciB7XHJcbiAgY3Vyc29yOiB6b29tLW91dDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcblxyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuIiwiLnRhYmxlIHRib2R5IHRoLFxuLnRhYmxlIHRib2R5IHRkIHtcbiAgcGFkZGluZzogMC40cmVtIDAuOTM3NXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWxwYWQge1xuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc3MHB4KSB7XG4gIC5idG5NYXIge1xuICAgIG1hcmdpbi1yaWdodDogMjkwJTtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgfVxufVxuLmNoZWNrQm94cyB7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuXG4uZm9ybS1jb250cm9sLWVycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmYzMzY2O1xufVxuLmZvcm0tY29udHJvbC1lcnJvcjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2RhMDAzNjtcbn1cblxuLmlucHV0LXZhbGlkYXRvciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6ICNmZjMzNjYgIWltcG9ydGFudDtcbn1cbi5pbnB1dC12YWxpZGF0b3I6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiLVwiO1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uZm9ybS1sYWJlbC1yZXF1aXJlZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIipcIjtcbiAgY29sb3I6ICNmZjMzNjYgIWltcG9ydGFudDtcbn1cblxuLmNoZWNrQm94LWlzYWN0aXZlIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uZ3JvdXAtdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMTEyLCAxMjMsIDI0NSwgMC4yKSwgdmFyKC0tY2FyZC1iZykpO1xuICBib3JkZXItY29sb3I6ICNjOGNiZWE7XG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcbn1cblxuLm5lc3RlZC1mb3JtIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMTIsIDEyMywgMjQ1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbn1cblxuLmZvcm0tZ3JvdXAtdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYWxlcnQtYnV0dG9uLWNvbmZpcm0ge1xuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDJyZW07XG4gIG1heC1oZWlnaHQ6IDE1cmVtO1xufVxuXG4uc2VwYXJhdGUtZ3JvdXBzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uaW1hZ2UtbW9kYWwge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5pbWFnZS1tb2RhbDo6cGFydChjb250ZW50KSB7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXgtaGVpZ2h0OiA3MCU7XG59XG5cbi50YWJsZS1zdHJpcGVkc3NzID4gdGJvZHkgPiB0cjpudGgtb2YtdHlwZShvZGQpID4gKiB7XG4gIGNvbG9yOiB2YXIoLS10YWJsZS1zdHJpcGVkLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLXN0cmlwZWQtYmcpICFpbXBvcnRhbnQ7XG59XG5cbi56b29tYWJsZSB7XG4gIGN1cnNvcjogem9vbS1pbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiAxODBweDtcbn1cblxuLnpvb21hYmxlOmhvdmVyIHtcbiAgY3Vyc29yOiB6b29tLW91dDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbn0iXX0= */";

/***/ }),

/***/ 21686:
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/reviews/field-review/field-review.page.html?ngResource ***!
  \************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\r\n<div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\r\n  <div>\r\n    <h4 class=\"mr-1 mb-md-0\">مراجعة ميدانية</h4>\r\n  </div>\r\n</div>\r\n<ion-modal #imageModal trigger=\"open-business-image-modal\" class=\"p-5 h-auto image-modal\" [backdropDismiss]=\"true\"\r\n  [keyboardClose]=\"true\">\r\n  <ng-template>\r\n    <ion-content>\r\n      <img [src]=\"'data:image/jpg;base64,' + revisionVisitForm.get('businessImage').value\" />\r\n      <div style=\"\r\n          position: fixed;\r\n          bottom: 0;\r\n          width: 100%;\r\n          background-color: var(--card-bg);\r\n        \">\r\n        <ion-button expand=\"block\" (click)=\"imageModal.dismiss()\">اغلاق</ion-button>\r\n      </div>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 grid-margin\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <ng-container *ngIf=\"pageMode == FieldReviewPageMode.Search\">\r\n          <form (ngSubmit)=\"searchForLoanApp()\" [formGroup]=\"revisionSearchForm\">\r\n            <div class=\"row justify-content-center align-items-end\">\r\n              <div class=\"col-12 col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <ion-label class=\"form-label form-label-required\">\r\n                    المندوب\r\n                  </ion-label>\r\n                  <ion-select interface=\"popover\" placeholder=\"المندوب\" formControlName=\"officer_key\" class=\"subselect\">\r\n                    <ion-select-option [value]=\"0\">الكل</ion-select-option>\r\n                    <ion-select-option *ngFor=\"let officer of officers\" [value]=\"officer.officer_key\">\r\n                      {{officer.officer_name}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12 col-md-4\">\r\n                <div class=\"form-group\">\r\n                  <ion-label class=\"form-label form-label-required\">\r\n                    نوع العميل\r\n                  </ion-label>\r\n                  <ion-select interface=\"popover\" placeholder=\"نوع العميل\" formControlName=\"client_type_code\"\r\n                    class=\"subselect\">\r\n                    <ion-select-option *ngFor=\"let clientType of clientTypes\" [value]=\"clientType.client_type_code\">\r\n                      {{clientType.client_type_name}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-12 col-md-2\">\r\n                <div class=\"mb-2\">\r\n                  <ion-button type=\"submit\">بحث</ion-button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"d-flex justify-content-center mt-2 text-center\">\r\n              <ion-button (click)=\"randomSelection()\">\r\n                اختيار عشوائي</ion-button>\r\n            </div>\r\n          </form>\r\n          <ng-container class=\"mt-3\" *ngIf=\"!!loanApplications \">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-stripedsss\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"text-center sortingCol\"><ion-icon name=\"swap-vertical-outline\"></ion-icon></th>\r\n                    <th class=\"text-center\">اسم العميل</th>\r\n                    <th class=\"text-center\">تاريخ طلب القرض</th>\r\n                    <th class=\"text-center\" (click)=\"sortByDistance()\">المسافة (كم)<ion-icon\r\n                        *ngIf=\"orderBy && sortingParam == 'distance' \" name=\"arrow-up-outline\"></ion-icon><ion-icon\r\n                        *ngIf=\"!orderBy && sortingParam == 'distance' \" name=\"arrow-down-outline\"></ion-icon> </th>\r\n                    <!-- <th class=\"text-center\" (click)=\"sortByApplicationNum()\">رقم طلب القرض <ion-icon\r\n                        *ngIf=\"orderBy && sortingParam == 'application_code' \"\r\n                        name=\"arrow-up-outline\"></ion-icon><ion-icon\r\n                        *ngIf=\"!orderBy && sortingParam == 'application_code' \" name=\"arrow-down-outline\"></ion-icon>\r\n                    </th> -->\r\n                    <th class=\"text-center\" (click)=\"sortByAmount()\">قيمة القرض <ion-icon\r\n                        *ngIf=\"orderBy && sortingParam == 'aprv_am' \" name=\"arrow-up-outline\"></ion-icon><ion-icon\r\n                        *ngIf=\"!orderBy && sortingParam == 'aprv_am' \" name=\"arrow-down-outline\"></ion-icon> </th>\r\n                    <th class=\"text-center\">اسم المندوب</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let loanApplication of loanApplications\" (click)=\"review(loanApplication)\">\r\n                    <td class=\"text-center sortingCol\"></td>\r\n                    <td class=\"text-center\">{{loanApplication.clientName}}</td>\r\n                    <td class=\"text-center\">{{loanApplication.entryDate}}</td>\r\n                    <td class=\"text-center\">{{loanApplication.distance}}</td>\r\n                    <!-- <td class=\"text-center\">{{loanApplication.applicationCode}}</td> -->\r\n                    <td class=\"text-center\">{{NumberFormatStyle(loanApplication.approvedAmount)}}</td>\r\n                    <td class=\"text-center\">{{loanApplication.officerName}}</td>\r\n                  </tr>\r\n                  <tr *ngIf=\"!!loanApplications && loanApplications.length == 0\">\r\n                    <td class=\"text-center\" colspan=\"6\">لم يتم العثور على طلبات قروض لهذا المندوب</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <!-- <ion-accordion\r\n                *ngIf=\"!!loanApplications && loanApplications.length == 0\"\r\n                class=\"accordion\"\r\n                [readonly]=\"true\"\r\n              >\r\n                <div class=\"ion-padding accordion-header\" slot=\"header\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      لم يتم العثور على طلبات قروض لهذا المندوب\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ion-accordion> -->\r\n              <app-pagination [page]=\"page\" [collectionSize]=\"count\"\r\n                (pageChange)=\"changePage($event); searchForLoanApp()\"></app-pagination>\r\n            </div>\r\n            <!-- <ion-header class=\"ion-padding accordion-grid-header mt-3 py-2\">\r\n              <div class=\"row align-items-center\">\r\n                <div class=\"col text-center\">اسم العميل</div>\r\n                <div class=\"col text-center\" (click)=\"sortByDistance()\">المسافة (كم)<ion-icon color=\"success\" *ngIf=\"orderBy && sortingParam == 'distance' \" name=\"arrow-up-outline\"></ion-icon><ion-icon color=\"success\" *ngIf=\"!orderBy && sortingParam == 'distance' \" name=\"arrow-down-outline\"></ion-icon></div>\r\n                <div class=\"col text-center\" (click)=\"sortByApplicationNum()\">رقم طلب القرض <ion-icon color=\"success\" *ngIf=\"orderBy && sortingParam == 'application_code' \" name=\"arrow-up-outline\"></ion-icon><ion-icon color=\"success\" *ngIf=\"!orderBy && sortingParam == 'application_code' \" name=\"arrow-down-outline\"></ion-icon></div>\r\n                <div class=\"col text-center\" (click)=\"sortByAmount()\">قيمة القرض <ion-icon color=\"success\" *ngIf=\"orderBy && sortingParam == 'aprv_am' \" name=\"arrow-up-outline\"></ion-icon><ion-icon color=\"success\" *ngIf=\"!orderBy && sortingParam == 'aprv_am' \" name=\"arrow-down-outline\"></ion-icon></div>\r\n              </div>\r\n            </ion-header>\r\n            <ion-accordion-group\r\n              class=\"accordion-group mx-0 mt-0\"\r\n              multiple=\"true\"\r\n            >\r\n              <ion-accordion\r\n                *ngFor=\"let loanApplication of loanApplications\"\r\n                class=\"accordion border-top-0 border-right-0 border-left-0\"\r\n                (click)=\"review(loanApplication)\"\r\n              >\r\n                <div\r\n                  class=\"ion-padding accordion-header py-2\"\r\n                  slot=\"header\"\r\n                  (click)=\"$event.stopPropagation\"\r\n                >\r\n                  <div class=\"row align-items-center\">\r\n                    <div class=\"col text-center\">\r\n                      {{loanApplication.clientName}}\r\n                    </div>\r\n                    <div class=\"col text-center\">\r\n                      {{loanApplication.distance}}\r\n                    </div>\r\n                    <div class=\"col text-center\">\r\n                      {{loanApplication.applicationCode}}\r\n                    </div>\r\n                    <div class=\"col text-center\">\r\n                      {{loanApplication.approvedAmount}}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ion-accordion>\r\n              <ion-accordion\r\n                *ngIf=\"!!loanApplications && loanApplications.length == 0\"\r\n                class=\"accordion\"\r\n                [readonly]=\"true\"\r\n              >\r\n                <div class=\"ion-padding accordion-header\" slot=\"header\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      لم يتم العثور على طلبات قروض لهذا المندوب\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ion-accordion>\r\n            </ion-accordion-group>\r\n            <app-pagination\r\n              [page]=\"page\"\r\n              [pageSize]=\"pageSize\"\r\n              [collectionSize]=\"count\"\r\n              (pageChange)=\"changePage($event); searchForLoanApp()\"\r\n            ></app-pagination> -->\r\n          </ng-container>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"pageMode == FieldReviewPageMode.Review\">\r\n          <ion-item slot=\"header\">\r\n            <ion-label class=\"font-weight-bold text-center\">اسم المندوب:\r\n              {{selectedLoanApplication.officerName}}</ion-label>\r\n          </ion-item>\r\n          <ion-item slot=\"header\">\r\n            <ion-label class=\"font-weight-bold text-center\">بيانات العميل</ion-label>\r\n          </ion-item>\r\n          <div class=\"ion-padding\" slot=\"content\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <span class=\"font-weight-bold pl-1\">اسم العميل</span>\r\n                <ion-label class=\"form-control\"> {{selectedLoanApplication.clientName}} </ion-label>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <span class=\"font-weight-bold pl-1\">الرقم القومي</span>\r\n                <ion-label class=\"form-control\"> {{selectedLoanApplication.nationID}} </ion-label>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3\">\r\n                <span class=\"font-weight-bold pl-1\">رقم المحمول</span>\r\n                <ion-label class=\"form-control\"> {{selectedLoanApplication.mobileNumber}} </ion-label>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <span class=\"font-weight-bold pl-1\">كود العميل</span>\r\n                <ion-label class=\"form-control\"> {{selectedLoanApplication.clientCode}} </ion-label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <ion-item slot=\"header\">\r\n            <ion-label class=\"font-weight-bold text-center\">بيانات طلب القرض</ion-label>\r\n          </ion-item>\r\n          <form [formGroup]=\"revisionVisitForm\">\r\n            <div class=\"ion-padding\" slot=\"content\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                  <span class=\"font-weight-bold pl-1\">رقم طلب القرض</span>\r\n                  <ion-label class=\"form-control\"> {{selectedLoanApplication.applicationCode}} </ion-label>\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <span class=\"font-weight-bold form-label-required pl-1\">قيمة القرض</span>\r\n                  <ion-input class=\"form-control\" formControlName=\"requestedAmount\"></ion-input>\r\n                  <div class=\"text-danger input-validator\"\r\n                    *ngIf=\"(revisionVisitForm.controls['requestedAmount'].errors?.['required'])\" role=\"alert\">\r\n                    يجب تحديد قيمة القرض\r\n                  </div>\r\n                  <!-- <ion-label class=\"form-control\"> {{ NumberFormatStyle(selectedLoanApplication.requestedAmount)}}\r\n                </ion-label> -->\r\n                </div>\r\n                <div class=\"col-md-2\">\r\n                  <span class=\"font-weight-bold pl-1 form-label-required\">عدد\r\n                    الأقساط</span>\r\n                  <ion-input class=\"form-control\" formControlName=\"req_no\"></ion-input>\r\n                  <div class=\"text-danger input-validator\"\r\n                    *ngIf=\"(revisionVisitForm.controls['req_no'].errors?.['required'])\" role=\"alert\">\r\n                    يجب تحديد عدد الأقساط\r\n                  </div>\r\n                  <!-- <ion-label class=\"form-control\"> {{selectedLoanApplication.requestedInstallmentNumber}} </ion-label> -->\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <span class=\"font-weight-bold pl-1 form-label-required\">استخدام\r\n                    القرض</span>\r\n                  <ion-select interface=\"popover\" id=\"loanUsage\" [disabled]=\"isCentralCommittee\"\r\n                    formControlName=\"loanUsage\" placeholder=\"الأستخدام\"\r\n                    class=\"subselect ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\">\r\n                    <ion-select-option *ngFor=\"let item of loanUsages\" value=\"{{item.loanUsageCode}}\">\r\n                      {{item.loanUsageDesc}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                  <!-- <ion-label class=\"form-control\"> {{getLoanUsageDesc(selectedLoanApplication.loanUsageCode)}}\r\n                </ion-label> -->\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12 col-md-6\">\r\n                  <div class=\"form-group \">\r\n                    <ion-label class=\"form-label form-label-required\">\r\n                      نوع القرض\r\n                    </ion-label>\r\n                    <ion-select [disabled]=\"isCentralCommittee\" interface=\"popover\" placeholder=\"نوع القرض\"\r\n                      formControlName=\"loan_type_code\" id=\"loan_type\" class=\"subselect\"\r\n                      (ionChange)=\"onLoanTypeChanged($event)\">\r\n                      <ion-select-option *ngFor=\"let loan of LoanTypes\" [value]=\"loan.loan_type_code\">\r\n                        {{loan.loan_type_name}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <ion-item slot=\"header\">\r\n              <ion-label class=\"font-weight-bold text-center\">بيانات عنوان السكن</ion-label>\r\n            </ion-item>\r\n            <div class=\"ion-padding\" slot=\"content\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                  <span class=\"font-weight-bold pl-1\">عنوان المنزل</span>\r\n                  <ion-label class=\"form-control\"> {{selectedLoanApplication.homeAddress1}}\r\n                    {{selectedLoanApplication.homeAddress2}} {{selectedLoanApplication.homeAddress3}} </ion-label>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <span class=\"font-weight-bold pl-1\">تليفون المنزل</span>\r\n                  <ion-label class=\"form-control\"> {{selectedLoanApplication.homeTelephone}} </ion-label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row justify-content-center\" *ngIf=\"!isCentralCommittee\">\r\n                <ion-button slot=\"start\" class=\"py-0 h-max\" [disabled]=\"!selectedLoanApplication.clientHomeLocation\"\r\n                  (click)=\"showLocation(selectedLoanApplication.clientHomeLocation)\"><ion-icon slot=\"start\"\r\n                    name=\"location-sharp\"></ion-icon>اظهر العنوان الحالي على الخريطة</ion-button>\r\n                <ion-button class=\"py-0 h-max\" #getHomeLocationButton (click)=\"getHomeLocation()\"><ion-icon slot=\"start\"\r\n                    [name]=\"getHomeLocationButton.disabled ? 'checkmark-done-sharp' : 'location-sharp'\"></ion-icon>أخذ\r\n                  لقطة جديدة</ion-button>\r\n              </div>\r\n            </div>\r\n            <ion-item slot=\"header\">\r\n              <ion-label class=\"font-weight-bold text-center\">بيانات العمل</ion-label>\r\n            </ion-item>\r\n            <div class=\"ion-padding\" slot=\"content\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                  <span class=\"font-weight-bold pl-1\">عنوان العمل</span>\r\n                  <ion-label class=\"form-control\"> {{selectedLoanApplication.businessAddress1}}\r\n                    {{selectedLoanApplication.businessAddress2}}\r\n                    {{selectedLoanApplication.businessAddress3}} </ion-label>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <span class=\"font-weight-bold pl-1\">تليفون العمل</span>\r\n                  <ion-label class=\"form-control\"> {{selectedLoanApplication.businessTelephone}} </ion-label>\r\n                </div>\r\n              </div>\r\n              <div class=\"row justify-content-center\" *ngIf=\"!isCentralCommittee\">\r\n                <ion-button *ngIf=\"isBusinessImageValid()\" class=\"py-0 h-max\" (click)=\"imageModal.present()\">\r\n                  <ion-icon slot=\"start\" name=\"image\"></ion-icon>عرض الصورة\r\n                </ion-button>\r\n                <ion-button class=\"py-0 h-max\" [disabled]=\"!selectedLoanApplication.clientBusLocation\"\r\n                  (click)=\"showLocation(selectedLoanApplication.clientBusLocation)\"><ion-icon slot=\"start\"\r\n                    name=\"location-sharp\"></ion-icon>اظهر العنوان الحالي على الخريطة</ion-button>\r\n                <!-- </div> -->\r\n                <ion-button class=\"py-0 h-max\" #getBusinessImageButton (click)=\"getBusinessImage()\"><ion-icon\r\n                    slot=\"start\"\r\n                    [name]=\"getBusinessImageButton.disabled ? 'checkmark-done-sharp' : 'camera-sharp'\"></ion-icon>رفع\r\n                  صورة جديدة</ion-button>\r\n                <ion-button class=\"py-0 h-max\" #getBusinessLocationButton (click)=\"getBusinessLocation()\"><ion-icon\r\n                    slot=\"start\"\r\n                    [name]=\"getBusinessLocationButton.disabled ? 'checkmark-done-sharp' : 'location-sharp'\"></ion-icon>أخذ\r\n                  لقطة جديدة</ion-button>\r\n              </div>\r\n            </div>\r\n            <ion-item *ngIf=\"isLastVisits\" slot=\"header\">\r\n              <ion-label class=\"font-weight-bold text-center\">بيانات الاستعلامات السابقة</ion-label>\r\n            </ion-item>\r\n            <ng-container *ngIf=\"isLastVisits\">\r\n              <ion-accordion-group>\r\n                <ion-accordion class=\"rounded my-2\" *ngFor=\"let LastVisit of LastVisits; let i = index\">\r\n                  <ion-item slot=\"header\">\r\n                    <ion-label class=\" text-center\">زيارة رقم: {{ i + 1 }} بتاريخ :\r\n                      {{DateFormatStyle(LastVisit.visit_date)}}</ion-label>\r\n                  </ion-item>\r\n                  <div class=\"ion-padding\" slot=\"content\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <span class=\"font-weight-bold pl-1\">الاسم</span>\r\n                          <ion-label class=\"form-control\">{{LastVisit.officer_name}}</ion-label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-12 col-md-6\">\r\n                        <div class=\"form-group\">\r\n                          <span class=\"font-weight-bold pl-1\">تاريخ الزيارة</span>\r\n                          <ion-label class=\"form-control\">{{DateFormatStyle(LastVisit.visit_date)}}</ion-label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12 col-md-4\" *ngIf=\"LastVisit.old_req_am && LastVisit.new_req_am != null\">\r\n                        <div class=\"form-group\">\r\n                          <span class=\"font-weight-bold pl-1\">تم تعديل قيمة القرض</span>\r\n                          <ion-label class=\"form-control d-table\">من <b>{{NumberFormatStyle(LastVisit.old_req_am)}}</b>\r\n                            الي\r\n                            <b>{{NumberFormatStyle(LastVisit.new_req_am)}}</b></ion-label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-12 col-md-4\" *ngIf=\"LastVisit.old_req_no && LastVisit.new_req_no != null\">\r\n                        <div class=\"form-group\">\r\n                          <span class=\"font-weight-bold pl-1\">تم تعديل عدد الأقساط</span>\r\n                          <ion-label class=\"form-control d-table\"> من <b>{{LastVisit.old_req_no}}</b> الي\r\n                            <b>{{LastVisit.new_req_no}}</b> </ion-label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-12 col-md-4\"\r\n                        *ngIf=\"LastVisit.old_loan_usage_name && LastVisit.new_loan_usage_name != null\">\r\n                        <div class=\"form-group\">\r\n                          <span class=\"font-weight-bold pl-1\"> تم تعديل استخدام القرض</span>\r\n                          <ion-label class=\"form-control d-table\">من <b>{{LastVisit.old_loan_usage_name}}</b> الي\r\n                            <b>{{LastVisit.new_loan_usage_name}}</b></ion-label>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-12 col-md-4\"\r\n                        *ngIf=\"LastVisit.old_loan_type_name && LastVisit.new_loan_type_name != null\">\r\n                        <div class=\"form-group\">\r\n                          <span class=\"font-weight-bold pl-1\"> تم تعديل نوع القرض</span>\r\n                          <ion-label class=\"form-control d-table\">من <b>{{LastVisit.old_loan_type_name}}</b> الي\r\n                            <b>{{LastVisit.new_loan_type_name}}</b></ion-label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-12\">\r\n                        <div class=\"form-group\">\r\n                          <span class=\"font-weight-bold pl-1\">ملاحظات</span>\r\n                          <ion-textarea class=\"form-control d-table\" rows=\"1\" [autoGrow]=\"true\" inputmode=\"text\"\r\n                            [readonly]=\"true\">{{LastVisit.notes}}</ion-textarea>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row justify-content-center\"\r\n                      *ngIf=\"(selectedLoanApplication.officerSupervisorHomeLocation != null || selectedLoanApplication.officerSupervisorBusLocation != null) && (LastVisit.officer_job_code == '-3') \">\r\n\r\n                      <ion-button *ngIf=\"selectedLoanApplication.officerSupervisorHomeLocation != null\"\r\n                        class=\"py-0 h-max\"\r\n                        (click)=\"showLocation(selectedLoanApplication.officerSupervisorHomeLocation)\"><ion-icon\r\n                          slot=\"start\" name=\"location-sharp\"></ion-icon>اظهر العنوان المنزل على الخريطة</ion-button>\r\n                      <ion-button *ngIf=\"selectedLoanApplication.officerSupervisorBusLocation != null\"\r\n                        class=\"py-0 h-max\"\r\n                        (click)=\"showLocation(selectedLoanApplication.officerSupervisorBusLocation)\"><ion-icon\r\n                          slot=\"start\" name=\"location-sharp\"></ion-icon>اظهر العنوان العمل على الخريطة</ion-button>\r\n                    </div>\r\n\r\n                    <div class=\"row justify-content-center\"\r\n                      *ngIf=\"(selectedLoanApplication.brDeputyHomeLocation != null || selectedLoanApplication.brDeputyBusLocation != null) && (LastVisit.officer_job_code == '-4')\">\r\n\r\n                      <ion-button *ngIf=\"selectedLoanApplication.brDeputyHomeLocation != null\" class=\"py-0 h-max\"\r\n                        (click)=\"showLocation(selectedLoanApplication.brDeputyHomeLocation)\"><ion-icon slot=\"start\"\r\n                          name=\"location-sharp\"></ion-icon>اظهر العنوان المنزل على الخريطة</ion-button>\r\n                      <ion-button *ngIf=\"selectedLoanApplication.brDeputyBusLocation != null\" class=\"py-0 h-max\"\r\n                        (click)=\"showLocation(selectedLoanApplication.brDeputyBusLocation)\"><ion-icon slot=\"start\"\r\n                          name=\"location-sharp\"></ion-icon>اظهر العنوان العمل على الخريطة</ion-button>\r\n\r\n                    </div>\r\n                    <div class=\"row justify-content-center\"\r\n                      *ngIf=\"(selectedLoanApplication.brManagerHomeLocation != null || selectedLoanApplication.brManagerBusLocation != null) && (LastVisit.officer_job_code == '-5') \">\r\n\r\n                      <ion-button *ngIf=\"selectedLoanApplication.brManagerHomeLocation != null\" class=\"py-0 h-max\"\r\n                        (click)=\"showLocation(selectedLoanApplication.brManagerHomeLocation)\"><ion-icon slot=\"start\"\r\n                          name=\"location-sharp\"></ion-icon>اظهر العنوان المنزل على الخريطة</ion-button>\r\n                      <ion-button *ngIf=\"selectedLoanApplication.brManagerBusLocation != null\" class=\"py-0 h-max\"\r\n                        (click)=\"showLocation(selectedLoanApplication.brManagerBusLocation)\"><ion-icon slot=\"start\"\r\n                          name=\"location-sharp\"></ion-icon>اظهر العنوان العمل على الخريطة</ion-button>\r\n\r\n                    </div>\r\n                  </div>\r\n                </ion-accordion>\r\n              </ion-accordion-group>\r\n            </ng-container>\r\n\r\n            <div class=\"d-flex justify-content-center mt-2 text-center\" *ngIf=\"hasDocs\">\r\n              <ion-button class=\"py-0 h-max\" (click)=\"showCurrentDocuments()\"><ion-icon slot=\"start\"\r\n                  name=\"image-outline\"></ion-icon>عرض\r\n                المستندات</ion-button>\r\n            </div>\r\n            <div class=\"row d-flex justify-content-center pb-5\" *ngIf=\"displayDocuments\">\r\n              <ion-img class=\"zoomable mt-3 mb-5\" *ngFor=\" let doc of allDocs\"\r\n                src=\"data:image/jpeg;base64,{{ doc }}\"></ion-img>\r\n            </div>\r\n\r\n            <div *ngIf=\"!isCentralCommittee\">\r\n              <ion-item slot=\"header\">\r\n                <ion-label class=\"font-weight-bold text-center\">بيانات الاستعلام</ion-label>\r\n              </ion-item>\r\n              <div class=\"ion-padding\" slot=\"content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <div class=\"form-group\">\r\n                      <ion-textarea class=\"form-control d-table\" #notes [autoGrow]=\"true\" rows=\"1\" inputmode=\"text\"\r\n                        (ionBlur)=\"notes.value = notes.value?.trim()\" formControlName=\"notes\"\r\n                        placeholder=\"ملاحظات\"></ion-textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n          <form [formGroup]=\"DecisionForm\" *ngIf=\"canMakeDecision\">\r\n            <div class=\"ion-padding\" slot=\"content\">\r\n              <div class=\"row\">\r\n                <div class=\"col-12 col-md-4\">\r\n                  <div class=\"form-group \">\r\n                    <ion-label class=\"form-label form-label-required\">\r\n                      القرار\r\n                    </ion-label>\r\n                    <ion-select interface=\"popover\" placeholder=\"القرار\" id=\"application_status\"\r\n                      formControlName=\"application_status\" class=\"subselect\" (ionChange)=\"onDecisionChanged($event)\">\r\n                      <ion-select-option *ngFor=\"let decision of FilteredDecisions\" [value]=\"decision.ref_code\">\r\n                        {{decision.ref_desc}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 col-md-4\" *ngIf=\"isRejected\">\r\n                  <div class=\"form-group \">\r\n                    <ion-label class=\"form-label form-label-required\">\r\n                      سبب الرفض\r\n                    </ion-label>\r\n                    <ion-select interface=\"popover\" placeholder=\"سبب الرفض\" id=\"parent_rej_code\"\r\n                      formControlName=\"parent_rej_code\" class=\"subselect\" (ionChange)=\"onParentRejChanged($event)\">\r\n                      <ion-select-option *ngFor=\"let rej of RejectionParent\" [value]=\"rej.parent_rej_code\">\r\n                        {{rej.parent_rej_desc}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 col-md-4\" *ngIf=\"isRejected && DecisionForm.value?.parent_rej_code\">\r\n                  <div class=\"form-group \">\r\n                    <ion-label class=\"form-label form-label-required\">\r\n                      سبب الرفض التفصيلي\r\n                    </ion-label>\r\n                    <ion-select interface=\"popover\" placeholder=\"سبب الرفض التفصيلي\" id=\"loan_rej_code\"\r\n                      formControlName=\"loan_rej_code\" class=\"subselect\">\r\n                      <ion-select-option *ngFor=\"let rej of LoanRej\" [value]=\"rej.loan_rej_code\">\r\n                        {{rej.loan_rej_desc}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 col-md-4\" *ngIf=\"!isRejected && isApproved\">\r\n                  <div class=\"form-group \">\r\n                    <ion-label class=\"form-label\">\r\n                      مصدر التمويل\r\n                    </ion-label>\r\n                    <ion-select interface=\"popover\" placeholder=\"مصدر التمويل\" id=\"funder_code\"\r\n                      formControlName=\"funder_code\" class=\"subselect\" (ionChange)=\"GetFundingReference($event)\">\r\n                      <ion-select-option *ngFor=\"let funder of Funders\" [value]=\"funder.funder_code\">\r\n                        {{funder.funder_name}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12 col-md-4\" *ngIf=\"!isRejected && isApproved && isIscore_external_funding\">\r\n                  <div class=\"form-group \">\r\n                    <ion-label class=\"form-label\">\r\n                      كود التمويل\r\n                    </ion-label>\r\n                    <ion-select interface=\"popover\" placeholder=\"كود التمويل\" id=\"funding_reference_id\"\r\n                      formControlName=\"funding_reference_id\" class=\"subselect\">\r\n                      <ion-select-option *ngFor=\"let ref of FundingRef\" [value]=\"ref.funding_reference_id\">\r\n                        {{ref.funding_reference_code}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n          <div class=\"row\">\r\n            <div class=\"col py-3\">\r\n              <ion-button *ngIf=\"isCentralCommittee\" [disabled]=\"!isMakingDecision\"\r\n                class=\"btn py-0 btn-block btn-lg h-max\" (click)=\"SubmitDecision()\">حفظ\r\n              </ion-button>\r\n              <ion-button *ngIf=\"!isCentralCommittee\" class=\"btn py-0 btn-block btn-lg h-max\" [disabled]=\"isRejected\"\r\n                (click)=\"submit()\">حفظ\r\n                المراجعة</ion-button>\r\n              <ion-button *ngIf=\"!isCentralCommittee && canMakeDecision\" class=\"btn py-0 btn-block btn-lg h-max\"\r\n                [disabled]=\"!isRejected\" (click)=\"SubmitDecision()\">\r\n                رفض الطلب</ion-button>\r\n              <ion-button color=\"danger\" class=\"btn py-0 btn-block btn-lg h-max\" (click)=\"cancel()\">رجوع</ion-button>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_reviews_field-review_field-review_module_ts.js.map