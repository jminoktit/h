"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_unfreeze-loan-applications_unfreeze-loan-applications_module_ts"],{

/***/ 45444:
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/unfreeze-loan-applications/unfreeze-loan-applications-routing.module.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnfreezeLoanApplicationsPageRoutingModule": function() { return /* binding */ UnfreezeLoanApplicationsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _unfreeze_loan_applications_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unfreeze-loan-applications.page */ 17133);






var routes = [{
  path: '',
  component: _unfreeze_loan_applications_page__WEBPACK_IMPORTED_MODULE_2__.UnfreezeLoanApplicationsPage
}];

var UnfreezeLoanApplicationsPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UnfreezeLoanApplicationsPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UnfreezeLoanApplicationsPageRoutingModule);
});

UnfreezeLoanApplicationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], UnfreezeLoanApplicationsPageRoutingModule);


/***/ }),

/***/ 139:
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/unfreeze-loan-applications/unfreeze-loan-applications.module.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnfreezeLoanApplicationsPageModule": function() { return /* binding */ UnfreezeLoanApplicationsPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _unfreeze_loan_applications_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unfreeze-loan-applications-routing.module */ 45444);
/* harmony import */ var _unfreeze_loan_applications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unfreeze-loan-applications.page */ 17133);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ 63430);











var UnfreezeLoanApplicationsPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UnfreezeLoanApplicationsPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UnfreezeLoanApplicationsPageModule);
});

UnfreezeLoanApplicationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _unfreeze_loan_applications_routing_module__WEBPACK_IMPORTED_MODULE_2__.UnfreezeLoanApplicationsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_unfreeze_loan_applications_page__WEBPACK_IMPORTED_MODULE_3__.UnfreezeLoanApplicationsPage]
})], UnfreezeLoanApplicationsPageModule);


/***/ }),

/***/ 17133:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/unfreeze-loan-applications/unfreeze-loan-applications.page.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnfreezeLoanApplicationsPage": function() { return /* binding */ UnfreezeLoanApplicationsPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _unfreeze_loan_applications_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unfreeze-loan-applications.page.html?ngResource */ 37694);
/* harmony import */ var _unfreeze_loan_applications_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unfreeze-loan-applications.page.scss?ngResource */ 72122);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);
















var UnfreezeLoanApplicationsPage = /*#__PURE__*/function () {
  function UnfreezeLoanApplicationsPage(env, http, formBuilder, datePipe, sortingService, authService, alertService, pagingService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UnfreezeLoanApplicationsPage);

    this.env = env;
    this.http = http;
    this.formBuilder = formBuilder;
    this.datePipe = datePipe;
    this.sortingService = sortingService;
    this.authService = authService;
    this.alertService = alertService;
    this.pagingService = pagingService;
    this.showLoader = false;
    this.details = false;
    this.page = 1; // the page we are viewing

    this.SearchForm = this.formBuilder.group({
      search_input: [""],
      branch_code: [""]
    });
    this.CurrentApplicationForm = this.formBuilder.group({
      clientName: [""],
      mobile: [""],
      docSuspendedNote: [""]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UnfreezeLoanApplicationsPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.authService.getUserInfo().then(function (userInfo) {
                  _this.org_code = userInfo.org_code;
                });

              case 2:
                this.getFreezedApplications();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "getFreezedApplications",
    value: function getFreezedApplications() {
      var _this2 = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/LoanApplications/GetAllFreezedLoanApplications").subscribe({
        next: function next(data) {
          _this2.freezingLoanApps = data;
          _this2.filterFreezingApps = _this2.freezingLoanApps;
          console.log(_this2.freezingLoanApps);
          _this2.showLoader = false;
        },
        error: function error(_error) {
          _this2.alertService.showAlertError(_error.error, false);

          _this2.showLoader = false;
        }
      });
    }
  }, {
    key: "enableLoanApp",
    value: function enableLoanApp(freezingApp) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var _this3 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.alertService.SaveAlert();

              case 2:
                if (!_context2.sent) {
                  _context2.next = 5;
                  break;
                }

                this.showLoader = true; // console.log("data", freezingApp);

                this.http.post(this.env.API_URL + "api/LoanApplications/UnFreezeLoanApplications", {
                  org_code: this.org_code,
                  branch_code: freezingApp.branch_code,
                  application_key: freezingApp.doc_key.toString()
                }).subscribe({
                  next: function next(data) {
                    _this3.alertService.showAlertConfirm("تم الحفظ بنجاح", true);

                    _this3.showLoader = false;
                  },
                  error: function error(_error2) {
                    _this3.alertService.showAlertError(_error2.error, false);

                    _this3.showLoader = false;
                  }
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "searchForUsers",
    value: function searchForUsers() {
      this.page = 1;
      var client_name = this.SearchForm.value.search_input;
      this.filterFreezingApps = this.freezingLoanApps.filter(function (v) {
        return client_name == "" || v.client_name.toLowerCase().match(client_name.toLowerCase());
      });
    }
  }, {
    key: "moreInfo",
    value: function moreInfo(freezingApp) {
      this.details = true;
      this.CurrentApplicationForm.patchValue({
        clientName: freezingApp.client_name,
        mobile: freezingApp.mobile_1,
        docSuspendedNote: freezingApp.doc_suspended_note
      });
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
    }
  }, {
    key: "dateFormat",
    value: function dateFormat(date) {
      return this.datePipe.transform(date, "yyyy-MM-dd");
    }
  }, {
    key: "NumberFormatStyle",
    value: function NumberFormatStyle(number) {
      var result = (0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatNumber)(Number(number), "en-US", "1.0");
      return result;
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.details = false;
    }
  }]);

  return UnfreezeLoanApplicationsPage;
}();

UnfreezeLoanApplicationsPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_9__.sortingService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__.MohassilAuthService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_8__.pagingService
  }];
};

UnfreezeLoanApplicationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: "app-unfreeze-loan-applications",
  template: _unfreeze_loan_applications_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_unfreeze_loan_applications_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], UnfreezeLoanApplicationsPage);


/***/ }),

/***/ 72122:
/*!********************************************************************************************************!*\
  !*** ./src/app/views/pages/unfreeze-loan-applications/unfreeze-loan-applications.page.scss?ngResource ***!
  \********************************************************************************************************/
/***/ (function(module) {

module.exports = "ion-textarea {\n  --color: var(--body-color);\n  padding: 7px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuZnJlZXplLWxvYW4tYXBwbGljYXRpb25zLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcdW5mcmVlemUtbG9hbi1hcHBsaWNhdGlvbnNcXHVuZnJlZXplLWxvYW4tYXBwbGljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJ1bmZyZWV6ZS1sb2FuLWFwcGxpY2F0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGV4dGFyZWEge1xyXG4gIC0tY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xyXG4gIHBhZGRpbmc6IDdweCAxNXB4O1xyXG59XHJcbiIsImlvbi10ZXh0YXJlYSB7XG4gIC0tY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xuICBwYWRkaW5nOiA3cHggMTVweDtcbn0iXX0= */";

/***/ }),

/***/ 37694:
/*!********************************************************************************************************!*\
  !*** ./src/app/views/pages/unfreeze-loan-applications/unfreeze-loan-applications.page.html?ngResource ***!
  \********************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div\n  class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\"\n>\n  <div>\n    <h4 class=\"mr-1 mb-md-0\">إلغاء تجميد طلبات القروض</h4>\n  </div>\n</div>\n<div class=\"col pt-3\">\n  <form [formGroup]=\"SearchForm\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md-4\">\n        <div class=\"form-group\">\n          <ion-label class=\"form-label\"> بحث باسم العميل </ion-label>\n          <ion-input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"search_input\"\n            formControlName=\"search_input\"\n            (ionChange)=\"searchForUsers()\"\n          ></ion-input>\n        </div>\n      </div>\n    </div>\n  </form>\n  <div class=\"row-12\">\n    <div class=\"row mx-0 card table-responsive justify-content-center\">\n      <table class=\"table\">\n        <thead>\n          <th class=\"text-center\"></th>\n          <th\n            class=\"text-center\"\n            (click)=\"sortingTable(filterFreezingApps , 'client_name')\"\n          >\n            اسم العميل<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingIconClass\"\n              *ngIf=\"sortingIconParam == 'client_name'\"\n            ></ion-icon>\n          </th>\n          <th\n            class=\"text-center\"\n            (click)=\"sortingTable(filterFreezingApps , 'req_am')\"\n          >\n            مبلغ طلب القرض<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingIconClass\"\n              *ngIf=\"sortingIconParam == 'req_am'\"\n            ></ion-icon>\n          </th>\n          <th\n            class=\"text-center\"\n            (click)=\"sortingTable(filterFreezingApps , 'branch_name')\"\n          >\n            الفرع<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingIconClass\"\n              *ngIf=\"sortingIconParam == 'branch_name'\"\n            ></ion-icon>\n          </th>\n          <th\n            class=\"text-center\"\n            (click)=\"sortingTable(filterFreezingApps , 'user_name')\"\n          >\n            موقوف من المستخدم<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingIconClass\"\n              *ngIf=\"sortingIconParam == 'user_name'\"\n            ></ion-icon>\n          </th>\n          <th\n            class=\"text-center\"\n            (click)=\"sortingTable(filterFreezingApps , 'date_assigned')\"\n          >\n            تاريخ تعيين الطلب للمستخدم<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingIconClass\"\n              *ngIf=\"sortingIconParam == 'date_assigned'\"\n            ></ion-icon>\n          </th>\n          <th\n            class=\"text-center\"\n            (click)=\"sortingTable(filterFreezingApps , 'doc_suspended_till')\"\n          >\n            موقوف حتي تاريخ<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingIconClass\"\n              *ngIf=\"sortingIconParam == 'doc_suspended_till'\"\n            ></ion-icon>\n          </th>\n          <th class=\"text-center\"></th>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let freezingApp of this.pagingService.Paging(\n            this.filterFreezingApps,\n            this.page\n          ); let i = index\"\n          >\n            <td class=\"text-center\">\n              <ion-icon\n                name=\"information-circle-outline\"\n                (click)=\"moreInfo(freezingApp)\"\n              ></ion-icon>\n            </td>\n            <td class=\"text-center\">{{freezingApp.client_name}}</td>\n            <td class=\"text-center\">\n              {{NumberFormatStyle(freezingApp.req_am)}}\n            </td>\n            <td class=\"text-center\">{{freezingApp.branch_name}}</td>\n            <td class=\"text-center\">{{freezingApp.user_name}}</td>\n            <td class=\"text-center\">\n              {{dateFormat(freezingApp.date_assigned)}}\n            </td>\n            <td class=\"text-center\">\n              {{dateFormat(freezingApp.doc_suspended_till)}}\n            </td>\n            <td class=\"text-center\">\n              <ion-button (click)=\"enableLoanApp(freezingApp)\"\n                >الغاء التجميد</ion-button\n              >\n            </td>\n          </tr>\n          <tr *ngIf=\"!!filterFreezingApps && filterFreezingApps.length == 0\">\n            <td class=\"text-center\" colspan=\"8\">\n              لم يتم العثور على طلبات قروض معلقة\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <app-pagination\n      [page]=\"page\"\n      [collectionSize]=\"filterFreezingApps?.length\"\n      (pageChange)=\"changePage($event);\"\n    ></app-pagination>\n  </div>\n</div>\n\n<ion-content>\n  <ion-modal #modal [isOpen]=\"details\" (didDismiss)=\"dismissModal();\">\n    <form [formGroup]=\"CurrentApplicationForm\">\n      <ng-template>\n        <ion-toolbar>\n          <ion-title\n            >الاسم: {{CurrentApplicationForm.value.clientName}}</ion-title\n          >\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"dismissModal()\">\n              <ion-icon name=\"close-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n        <ion-card class=\"w-100 h-100 mx-0 my-0 inherit-color\">\n          <ion-card-content class=\"align-middle modalSize\">\n            <ion-grid class=\"inherit-color px-0 py-0\">\n              <ion-row>\n                <ion-col>\n                  <ion-label>المحمول</ion-label>\n                  <ion-label class=\"form-control\"\n                    >{{CurrentApplicationForm.value.mobile}}</ion-label\n                  >\n                </ion-col>\n                <ion-col></ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-label>الملاحظات</ion-label>\n                  <ion-textarea\n                    >{{CurrentApplicationForm.value.docSuspendedNote}}</ion-textarea\n                  >\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-content>\n        </ion-card>\n      </ng-template>\n    </form>\n  </ion-modal>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_unfreeze-loan-applications_unfreeze-loan-applications_module_ts.js.map