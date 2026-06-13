"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_reviews_field-review-workflow_field-review-workflow_module_ts"],{

/***/ 21100:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/reviews/field-review-workflow/field-review-workflow-routing.module.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldReviewWorkflowPageRoutingModule": function() { return /* binding */ FieldReviewWorkflowPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _field_review_workflow_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field-review-workflow.page */ 79021);






var routes = [{
  path: '',
  component: _field_review_workflow_page__WEBPACK_IMPORTED_MODULE_2__.FieldReviewWorkflowPage
}];

var FieldReviewWorkflowPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function FieldReviewWorkflowPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FieldReviewWorkflowPageRoutingModule);
});

FieldReviewWorkflowPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], FieldReviewWorkflowPageRoutingModule);


/***/ }),

/***/ 54675:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/reviews/field-review-workflow/field-review-workflow.module.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldReviewWorkflowPageModule": function() { return /* binding */ FieldReviewWorkflowPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _field_review_workflow_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field-review-workflow-routing.module */ 21100);
/* harmony import */ var _field_review_workflow_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field-review-workflow.page */ 79021);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var FieldReviewWorkflowPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function FieldReviewWorkflowPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FieldReviewWorkflowPageModule);
});

FieldReviewWorkflowPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _field_review_workflow_routing_module__WEBPACK_IMPORTED_MODULE_2__.FieldReviewWorkflowPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule //NgxPrintModule
  ],
  declarations: [_field_review_workflow_page__WEBPACK_IMPORTED_MODULE_3__.FieldReviewWorkflowPage],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_ELEMENTS_SCHEMA]
})], FieldReviewWorkflowPageModule);


/***/ }),

/***/ 79021:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/reviews/field-review-workflow/field-review-workflow.page.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldReviewWorkflowPage": function() { return /* binding */ FieldReviewWorkflowPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _field_review_workflow_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./field-review-workflow.page.html?ngResource */ 60631);
/* harmony import */ var _field_review_workflow_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./field-review-workflow.page.scss?ngResource */ 64741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var _awesome_cordova_plugins_web_intent_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/web-intent/ngx */ 86973);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/state.service */ 87051);
/* harmony import */ var src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/location.service */ 33094);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);
/* harmony import */ var src_app_core_services_camera_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/camera.service */ 9102);
/* harmony import */ var src_app_core_services_document_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/document.service */ 34726);
/* harmony import */ var src_app_core_services_exporting_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/exporting.service */ 55081);
























var FieldReviewPageMode;

(function (FieldReviewPageMode) {
  FieldReviewPageMode[FieldReviewPageMode["Search"] = 0] = "Search";
  FieldReviewPageMode[FieldReviewPageMode["Review"] = 1] = "Review";
})(FieldReviewPageMode || (FieldReviewPageMode = {}));

var FieldReviewWorkflowPage = /*#__PURE__*/function () {
  function FieldReviewWorkflowPage(env, http, formBuilder, alertController, activatedRoute, toastController, datePipe, webIntent, router, stateService, locationService, authService, sortingService, pagingService, datepipe, alertService, platform, cameraService, documentService, exportingService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FieldReviewWorkflowPage);

    this.env = env;
    this.http = http;
    this.formBuilder = formBuilder;
    this.alertController = alertController;
    this.activatedRoute = activatedRoute;
    this.toastController = toastController;
    this.datePipe = datePipe;
    this.webIntent = webIntent;
    this.router = router;
    this.stateService = stateService;
    this.locationService = locationService;
    this.authService = authService;
    this.sortingService = sortingService;
    this.pagingService = pagingService;
    this.datepipe = datepipe;
    this.alertService = alertService;
    this.platform = platform;
    this.cameraService = cameraService;
    this.documentService = documentService;
    this.exportingService = exportingService;
    this.FieldReviewPageMode = FieldReviewPageMode;
    this.displayDocuments = false;
    this.showLoader = false;
    this.isSubmitted = false;
    this.RandomSelection = 0;
    this.isIscore_external_funding = false;
    this.isvalids = false;
    this.isDateAssignedRequired = false;
    this.isRejected = false;
    this.canEdit = false;
    this.canEditLoanIntRT = false;
    this.validationErrors = "";
    this.isLastVisits = false;
    this.hasDocs = false;
    this.page = 1; // the page we are viewing

    this.count = 1;
    this.clientDocuments = {
      allDocumentsFromDb: []
    };
    this.documentModalObject = {
      visible: false,
      selectedDocument: {
        imageDate: null,
        pageNumber: null,
        documentTypeDescription: null,
        documentTypeCode: null,
        imageExist: false
      },
      platform: null
    };
  } //#endregion


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FieldReviewWorkflowPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        var params;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = this.activatedRoute.snapshot.queryParams;
                _context.next = 3;
                return this.authService.getUserInfo().then(function (userInfo) {
                  _this.job_id = userInfo.workflow_job_id;
                  _this.org_code = userInfo.org_code;
                });

              case 3:
                _context.next = 5;
                return this.getOfficerLocation();

              case 5:
                _context.next = 7;
                return this.searchLoanApplications();

              case 7:
                this.pageMode = FieldReviewPageMode.Search;

                if (!(params["applicationKey"] && params["clientTypeCode"])) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return this.reviewInitiatedFromNotifications(params["applicationKey"], params["clientTypeCode"]);

              case 11:
                this.documentModalObject.platform = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__.Capacitor.getPlatform();

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "removeURLParams",
    value: function removeURLParams() {
      // Get the current URL without parameters
      var baseUrl = window.location.href.split("?")[0];
      window.history.replaceState({}, document.title, baseUrl);
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
    key: "searchLoanApplications",
    value: function searchLoanApplications() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var data;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.showLoader = true;
                _context2.next = 4;
                return this.http.post(this.env.API_URL + "api/LoanApplications/GetApplicationsToReviseWorkflow", {
                  officer_key: null,
                  client_type_code: "0",
                  all_officers: "1",
                  job_id: this.job_id,
                  officerLat: this.OfficerLat,
                  officerLong: this.OfficerLong,
                  randomSelection: this.RandomSelection
                }).toPromise();

              case 4:
                data = _context2.sent;
                this.loanApplications = data;
                this.showLoader = false;
                _context2.next = 13;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](0);
                this.alertService.showAlertError("خطأ في الاتصال بالخادم", false);
                this.showLoader = false;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 9]]);
      }));
    }
  }, {
    key: "changePage",
    value: function changePage(newPage) {
      this.page = newPage;
    }
  }, {
    key: "review",
    value: function review(loanApplication) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.selectedLoanApplication = loanApplication;
                this.pageMode = FieldReviewPageMode.Review;

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "reviewInitiatedFromNotifications",
    value: function reviewInitiatedFromNotifications(applicationKey, clientTypeCode) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var data, loanApplication;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.http.post(this.env.API_URL + "api/LoanApplications/GetApplicationsToReviseWorkflow", {
                  officer_key: "0",
                  client_type_code: clientTypeCode,
                  all_officers: "1",
                  job_id: this.job_id,
                  officerLat: this.OfficerLat,
                  officerLong: this.OfficerLong,
                  randomSelection: 0
                }).toPromise();

              case 2:
                data = _context4.sent;
                this.loanApplications = data;
                loanApplication = this.loanApplications.filter(function (x) {
                  return x.applicationKey == applicationKey;
                })[0];
                this.selectedLoanApplication = loanApplication;
                this.pageMode = FieldReviewPageMode.Review;

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this.RandomSelection == 1) {
        this.loanApplications = null;
      }

      this.pageMode = FieldReviewPageMode.Search;
      this.selectedLoanApplication = null;
      this.lastVisits = [];
      this.isSubmitted = false;
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
    key: "paging",
    value: function paging() {
      this.count = this.pagingService.totalCount;
      return this.pagingService.Paging(this.loanApplications, this.page);
    }
  }, {
    key: "sortingTable",
    value: function sortingTable(data, param) {
      this.sortingService.sortByParameter(data, param);
      this.sortingIconClass = this.sortingService.sortOrder === "asc" ? "arrow-down-outline" : "arrow-up-outline";
      this.sortingIconParam = param;
    }
  }, {
    key: "getOfficerLocation",
    value: function getOfficerLocation() {
      var _a, _b;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var locationResult;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_7__.Capacitor.getPlatform() != "web")) {
                  _context5.next = 19;
                  break;
                }

                this.showLoader = true;
                _context5.prev = 2;
                _context5.next = 5;
                return this.locationService.getLocation();

              case 5:
                locationResult = _context5.sent;

                if (locationResult.success) {
                  _context5.next = 10;
                  break;
                }

                this.alertService.showAlertError(locationResult.message, false);
                this.showLoader = false;
                return _context5.abrupt("return");

              case 10:
                this.OfficerLat = (_a = locationResult.position) === null || _a === void 0 ? void 0 : _a.coords.latitude.toString();
                this.OfficerLong = (_b = locationResult.position) === null || _b === void 0 ? void 0 : _b.coords.longitude.toString();
                this.OfficerZoom = "0";
                this.showLoader = false;
                _context5.next = 19;
                break;

              case 16:
                _context5.prev = 16;
                _context5.t0 = _context5["catch"](2);
                this.showLoader = false;

              case 19:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2, 16]]);
      }));
    }
  }]);

  return FieldReviewWorkflowPage;
}();

FieldReviewWorkflowPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.AlertController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ToastController
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe
  }, {
    type: _awesome_cordova_plugins_web_intent_ngx__WEBPACK_IMPORTED_MODULE_6__.WebIntent
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_22__.Router
  }, {
    type: src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_8__.StateService
  }, {
    type: src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_9__.LocationService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_10__.MohassilAuthService
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_13__.sortingService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_12__.pagingService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_11__.AlertService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.Platform
  }, {
    type: src_app_core_services_camera_service__WEBPACK_IMPORTED_MODULE_14__.CameraService
  }, {
    type: src_app_core_services_document_service__WEBPACK_IMPORTED_MODULE_15__.DocumentService
  }, {
    type: src_app_core_services_exporting_service__WEBPACK_IMPORTED_MODULE_16__.ExportingService
  }];
};

FieldReviewWorkflowPage.propDecorators = {
  imageModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_23__.ViewChild,
    args: ["imageModal"]
  }]
};
FieldReviewWorkflowPage = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_23__.Component)({
  selector: "app-field-review-workflow",
  template: _field_review_workflow_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_field_review_workflow_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], FieldReviewWorkflowPage);


/***/ }),

/***/ 64741:
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/reviews/field-review-workflow/field-review-workflow.page.scss?ngResource ***!
  \******************************************************************************************************/
/***/ (function(module) {

module.exports = ".table tbody th,\n.table tbody td {\n  padding: 0.4rem 0.9375rem !important;\n}\n\n.labelpad {\n  padding-bottom: 55px;\n}\n\n@media (min-width: 770px) {\n  .btnMar {\n    margin-right: 290%;\n    font-size: medium;\n  }\n}\n\n.checkBoxs {\n  margin-right: 1.5rem;\n}\n\n.form-control-error {\n  border-color: #ff3366;\n}\n\n.form-control-error:hover {\n  border-color: #da0036;\n}\n\n.input-validator {\n  font-weight: 600;\n  padding-right: 10px;\n  padding-left: 10px;\n  color: #ff3366 !important;\n}\n\n.input-validator::before {\n  content: \"-\";\n  margin-left: 6px;\n}\n\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.checkBox-isactive {\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n\n.group-title {\n  font-weight: 700;\n  font-size: 1.2rem;\n  text-align: center;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n  border-radius: 6px;\n  background-image: linear-gradient(to left, rgba(112, 123, 245, 0.2), var(--card-bg));\n  border-color: #c8cbea;\n  color: var(--body-color);\n}\n\n.nested-form {\n  border: 2px solid rgba(112, 123, 245, 0.2);\n  border-radius: 5px;\n  padding: 1rem 2rem;\n}\n\n.form-group-title {\n  display: block;\n  color: var(--theme-color-primary);\n  font-weight: 700;\n}\n\n.alert-button-confirm {\n  color: var(--body-color);\n}\n\nion-textarea {\n  min-height: 2rem;\n  max-height: 15rem;\n}\n\n.separate-groups {\n  border-bottom: 1px var(--theme-color-primary);\n}\n\n.image-modal {\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.image-modal::part(content) {\n  max-width: 90%;\n  max-height: 70%;\n}\n\n.table-stripedsss > tbody > tr:nth-of-type(odd) > * {\n  color: var(--table-striped-text-color) !important;\n  background-color: var(--table-striped-bg) !important;\n}\n\n.zoomable {\n  cursor: zoom-in;\n  transition: transform 0.5s;\n  width: 280px;\n  height: 180px;\n}\n\n.zoomable:hover {\n  cursor: zoom-out;\n  -ms-transform: scale(1.2);\n      transform: scale(1.2);\n  width: 50%;\n  height: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpZWxkLXJldmlldy13b3JrZmxvdy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEZWxldGUlMjBpdFxcTmV3TW9oYXNzaWxDbGllbnRfMzA5NV9zcmNcXE5ld01vaGFzc2lsQ2xpZW50XFxzcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxyZXZpZXdzXFxmaWVsZC1yZXZpZXctd29ya2Zsb3dcXGZpZWxkLXJldmlldy13b3JrZmxvdy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7O0VBRUUsb0NBQUE7QUNETjs7QURNQTtFQUNFLG9CQUFBO0FDSEY7O0FEVUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7RUNQRjtBQUNGOztBRFVBO0VBQ0Usb0JBQUE7QUNSRjs7QURXQTtFQUNFLHFCQUFBO0FDUkY7O0FEVUU7RUFDRSxxQkFBQTtBQ1JKOztBRFlBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNURjs7QURXRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ1RKOztBRGNFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDWEo7O0FEZUE7RUFFRSxtQkFBQTtNQUFBLHFCQUFBO0FDYkY7O0FEZ0JBO0VBR0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBR0Esb0ZBQUE7RUFLQSxxQkFBQTtFQUNBLHdCQUFBO0FDckJGOztBRHdCQTtFQUdFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ3ZCRjs7QUQwQkE7RUFDRSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ3ZCRjs7QUQwQkE7RUFDRSx3QkFBQTtBQ3ZCRjs7QUQwQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDdkJGOztBRDBCQTtFQUNFLDZDQUFBO0FDdkJGOztBRDBCQTtFQUNFLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxxQkFBQTtNQUFBLHVCQUFBO0FDdkJGOztBRHdCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDdEJKOztBRDBCQTtFQUNFLGlEQUFBO0VBQ0Esb0RBQUE7QUN2QkY7O0FEMEJBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUN2QkY7O0FEMEJBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtNQUFBLHFCQUFBO0VBRUEsVUFBQTtFQUNBLFdBQUE7QUN4QkYiLCJmaWxlIjoiZmllbGQtcmV2aWV3LXdvcmtmbG93LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgdGJvZHkge1xyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDAuNHJlbSAwLjkzNzVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sYWJlbHBhZCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDU1cHg7XHJcbn1cclxuXHJcbi8vIGlvbi1idXR0b24ge1xyXG4vLyAgIHBhZGRpbmctbGVmdDogMjAlO1xyXG4vLyAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcclxuLy8gICBmb250LXNpemU6IGxhcmdlO1xyXG5AbWVkaWEgKG1pbi13aWR0aDogNzcwcHgpIHtcclxuICAuYnRuTWFyIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjkwJTtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIH1cclxufVxyXG5cclxuLmNoZWNrQm94cyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtZXJyb3Ige1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgNTEsIDEwMik7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjE4LCAwLCA1NCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXQtdmFsaWRhdG9yIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKSAhaW1wb3J0YW50O1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCItXCI7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tbGFiZWwtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hlY2tCb3gtaXNhY3RpdmUge1xyXG4gIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZ3JvdXAtdGl0bGUge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzQ1Y2NiMSwgMC44KTtcclxuICAvLyBjb2xvcjogI2Y2ZmNlZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjYTRkNDkxLCAwLjMpO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNjOGNiZWE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gbGVmdCxcclxuICAgIHJnYmEoIzcwN2JmNSwgMC4yKSxcclxuICAgIHZhcigtLWNhcmQtYmcpXHJcbiAgKTtcclxuICBib3JkZXItY29sb3I6ICNjOGNiZWE7XHJcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xyXG59XHJcblxyXG4ubmVzdGVkLWZvcm0ge1xyXG4gIC8vIGJvcmRlci1yaWdodDogMC4ycmVtIHNvbGlkIHJnYmEoIzcwN2JmNSwgMC4yKTtcclxuICAvLyBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoIzcwN2JmNSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cC10aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5hbGVydC1idXR0b24tY29uZmlybSB7XHJcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xyXG59XHJcblxyXG5pb24tdGV4dGFyZWEge1xyXG4gIG1pbi1oZWlnaHQ6IDJyZW07XHJcbiAgbWF4LWhlaWdodDogMTVyZW07XHJcbn1cclxuXHJcbi5zZXBhcmF0ZS1ncm91cHMge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCB2YXIoLS10aGVtZS1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLmltYWdlLW1vZGFsIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICY6OnBhcnQoY29udGVudCkge1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MCU7XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUtc3RyaXBlZHNzcyA+IHRib2R5ID4gdHI6bnRoLW9mLXR5cGUob2RkKSA+ICoge1xyXG4gIGNvbG9yOiB2YXIoLS10YWJsZS1zdHJpcGVkLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFibGUtc3RyaXBlZC1iZykgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnpvb21hYmxlIHtcclxuICBjdXJzb3I6IHpvb20taW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbn1cclxuXHJcbi56b29tYWJsZTpob3ZlciB7XHJcbiAgY3Vyc29yOiB6b29tLW91dDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcblxyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuIiwiLnRhYmxlIHRib2R5IHRoLFxuLnRhYmxlIHRib2R5IHRkIHtcbiAgcGFkZGluZzogMC40cmVtIDAuOTM3NXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWxwYWQge1xuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc3MHB4KSB7XG4gIC5idG5NYXIge1xuICAgIG1hcmdpbi1yaWdodDogMjkwJTtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgfVxufVxuLmNoZWNrQm94cyB7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuXG4uZm9ybS1jb250cm9sLWVycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmYzMzY2O1xufVxuLmZvcm0tY29udHJvbC1lcnJvcjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2RhMDAzNjtcbn1cblxuLmlucHV0LXZhbGlkYXRvciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6ICNmZjMzNjYgIWltcG9ydGFudDtcbn1cbi5pbnB1dC12YWxpZGF0b3I6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiLVwiO1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uZm9ybS1sYWJlbC1yZXF1aXJlZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIipcIjtcbiAgY29sb3I6ICNmZjMzNjYgIWltcG9ydGFudDtcbn1cblxuLmNoZWNrQm94LWlzYWN0aXZlIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uZ3JvdXAtdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMTEyLCAxMjMsIDI0NSwgMC4yKSwgdmFyKC0tY2FyZC1iZykpO1xuICBib3JkZXItY29sb3I6ICNjOGNiZWE7XG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcbn1cblxuLm5lc3RlZC1mb3JtIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMTIsIDEyMywgMjQ1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbn1cblxuLmZvcm0tZ3JvdXAtdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYWxlcnQtYnV0dG9uLWNvbmZpcm0ge1xuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDJyZW07XG4gIG1heC1oZWlnaHQ6IDE1cmVtO1xufVxuXG4uc2VwYXJhdGUtZ3JvdXBzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uaW1hZ2UtbW9kYWwge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5pbWFnZS1tb2RhbDo6cGFydChjb250ZW50KSB7XG4gIG1heC13aWR0aDogOTAlO1xuICBtYXgtaGVpZ2h0OiA3MCU7XG59XG5cbi50YWJsZS1zdHJpcGVkc3NzID4gdGJvZHkgPiB0cjpudGgtb2YtdHlwZShvZGQpID4gKiB7XG4gIGNvbG9yOiB2YXIoLS10YWJsZS1zdHJpcGVkLXRleHQtY29sb3IpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhYmxlLXN0cmlwZWQtYmcpICFpbXBvcnRhbnQ7XG59XG5cbi56b29tYWJsZSB7XG4gIGN1cnNvcjogem9vbS1pbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiAxODBweDtcbn1cblxuLnpvb21hYmxlOmhvdmVyIHtcbiAgY3Vyc29yOiB6b29tLW91dDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbn0iXX0= */";

/***/ }),

/***/ 60631:
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/reviews/field-review-workflow/field-review-workflow.page.html?ngResource ***!
  \******************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<ion-title class=\"ion-padding-vertical\">\n  خطوات طلب القرض\n</ion-title>\n<ion-card>\n  <ion-card-content *ngIf=\"pageMode == FieldReviewPageMode.Search\">\n    <ng-container>\n      <div class=\"table-responsive\" *ngIf=\"!!loanApplications\">\n        <ion-grid style=\"min-width: 1000px\">\n          <ion-row class=\"header-row\">\n            <ion-col (click)=\"sortingTable(loanApplications , 'clientName')\">\n              <ion-label>\n                اسم العميل\n                <ion-icon class=\"ion-icon-class\" [name]=\"sortingIconClass\"\n                  *ngIf=\"sortingIconParam == 'clientName'\"></ion-icon>\n              </ion-label>\n            </ion-col>\n            <ion-col (click)=\"sortingTable(loanApplications , 'entryDate')\">\n              <ion-label>\n                تاريخ طلب القرض\n                <ion-icon class=\"ion-icon-class\" [name]=\"sortingIconClass\"\n                  *ngIf=\"sortingIconParam == 'entryDate'\"></ion-icon>\n              </ion-label>\n            </ion-col>\n            <ion-col (click)=\"sortingTable(loanApplications , 'distance')\">\n              <ion-label>\n                المسافة (كم)\n                <ion-icon class=\"ion-icon-class\" [name]=\"sortingIconClass\"\n                  *ngIf=\"sortingIconParam == 'distance'\"></ion-icon>\n              </ion-label>\n            </ion-col>\n            <ion-col (click)=\"sortingTable(loanApplications , 'approvedAmount')\">\n              <ion-label>\n                قيمة القرض\n                <ion-icon class=\"ion-icon-class\" [name]=\"sortingIconClass\"\n                  *ngIf=\"sortingIconParam == 'approvedAmount'\"></ion-icon>\n              </ion-label>\n            </ion-col>\n            <ion-col (click)=\"sortingTable(loanApplications , 'officerName')\">\n              <ion-label>\n                اسم المندوب\n                <ion-icon class=\"ion-icon-class\" [name]=\"sortingIconClass\"\n                  *ngIf=\"sortingIconParam == 'officerName'\"></ion-icon>\n              </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"details-row\" *ngFor=\"let loanApplication of this.pagingService.Paging(\n                    this.loanApplications,\n                    this.page\n                  )\" (click)=\"review(loanApplication)\">\n            <ion-col>\n              <ion-label>{{loanApplication.clientName}}</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>\n                {{loanApplication.entryDate}}\n              </ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>\n                {{loanApplication.distance}}\n              </ion-label>\n              <ion-label *ngIf=\"loanApplication.distance === null\">لا يوجد</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>\n                {{loanApplication.requestedAmount | number: '1.0-0':'en-US'}}\n              </ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label>\n                {{loanApplication.officerName}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"!!loanApplications && loanApplications.length == 0\">\n            <ion-col size=\"12\" class=\"text-center\">\n              <ion-label>لم يتم العثور على طلبات قروض</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <app-pagination [page]=\"page\" [collectionSize]=\"loanApplications?.length\"\n          (pageChange)=\"changePage($event);\"></app-pagination>\n      </div>\n    </ng-container>\n  </ion-card-content>\n  <ng-container *ngIf=\"pageMode == FieldReviewPageMode.Review\">\n    <app-workflow-take-action [reviewForOthers]=\"0\"\n      [applicationKey]=\"selectedLoanApplication.applicationKey\"></app-workflow-take-action>\n  </ng-container>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_reviews_field-review-workflow_field-review-workflow_module_ts.js.map