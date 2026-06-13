"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_user-suspended-documents_user-suspended-documents_module_ts"],{

/***/ 4584:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/user-suspended-documents/user-suspended-documents-routing.module.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSuspendedDocumentsPageRoutingModule": function() { return /* binding */ UserSuspendedDocumentsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _user_suspended_documents_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-suspended-documents.page */ 47586);






var routes = [{
  path: '',
  component: _user_suspended_documents_page__WEBPACK_IMPORTED_MODULE_2__.UserSuspendedDocumentsPage
}];

var UserSuspendedDocumentsPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UserSuspendedDocumentsPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UserSuspendedDocumentsPageRoutingModule);
});

UserSuspendedDocumentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], UserSuspendedDocumentsPageRoutingModule);


/***/ }),

/***/ 58884:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/user-suspended-documents/user-suspended-documents.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSuspendedDocumentsPageModule": function() { return /* binding */ UserSuspendedDocumentsPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _user_suspended_documents_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-suspended-documents-routing.module */ 4584);
/* harmony import */ var _user_suspended_documents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-suspended-documents.page */ 47586);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ 63430);











var UserSuspendedDocumentsPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UserSuspendedDocumentsPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UserSuspendedDocumentsPageModule);
});

UserSuspendedDocumentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _user_suspended_documents_routing_module__WEBPACK_IMPORTED_MODULE_2__.UserSuspendedDocumentsPageRoutingModule],
  declarations: [_user_suspended_documents_page__WEBPACK_IMPORTED_MODULE_3__.UserSuspendedDocumentsPage]
})], UserSuspendedDocumentsPageModule);


/***/ }),

/***/ 47586:
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/user-suspended-documents/user-suspended-documents.page.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserSuspendedDocumentsPage": function() { return /* binding */ UserSuspendedDocumentsPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _user_suspended_documents_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-suspended-documents.page.html?ngResource */ 13163);
/* harmony import */ var _user_suspended_documents_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-suspended-documents.page.scss?ngResource */ 79107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);


















var UserSuspendedDocumentsPage = /*#__PURE__*/function () {
  function UserSuspendedDocumentsPage(env, http, formBuilder, datePipe, sortingService, authService, alertService, pagingService, translate, referenceService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserSuspendedDocumentsPage);

    this.env = env;
    this.http = http;
    this.formBuilder = formBuilder;
    this.datePipe = datePipe;
    this.sortingService = sortingService;
    this.authService = authService;
    this.alertService = alertService;
    this.pagingService = pagingService;
    this.translate = translate;
    this.referenceService = referenceService;
    this.showLoader = false;
    this.details = false;
    this.page = 1; // the page we are viewing

    this.branches = [];
    this.SearchForm = this.formBuilder.group({
      client_name: [""],
      branch_code: [""],
      nation_id: [""]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UserSuspendedDocumentsPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.GetUserSuspendedDocuments(); //Get Exception Reasons

                _context.next = 3;
                return this.referenceService.getExceptionReasons();

              case 3:
                this.exceptionReasons = _context.sent;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "GetUserSuspendedDocuments",
    value: function GetUserSuspendedDocuments() {
      var _this = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/LoanApplications/GetUserSuspendedDocuments").subscribe({
        next: function next(data) {
          _this.suspendedDocuments = data;
          _this.branches = data.reduce(function (acc, x) {
            var branchCode = x.branch_code.toString();

            if (!acc.set.has(branchCode)) {
              acc.set.add(branchCode);
              acc.arr.push({
                branch_code: branchCode,
                branch_name: x.branch_name
              });
            }

            return acc;
          }, {
            set: new Set(),
            arr: []
          }).arr;
          _this.FilteredDocuments = _this.suspendedDocuments;
          _this.showLoader = false;
        },
        error: function error(_error) {
          _this.alertService.showAlertError(_error.error, false);

          _this.showLoader = false;
        }
      });
    }
  }, {
    key: "searchForUsers",
    value: function searchForUsers() {
      this.page = 1;
      var client_name = this.SearchForm.value.client_name;
      var branch_code = this.SearchForm.value.branch_code;
      var nation_id = this.SearchForm.value.nation_id;
      this.FilteredDocuments = this.suspendedDocuments.filter(function (v) {
        var _a;

        return (client_name == "" || v.client_name.toLowerCase().match(client_name.toLowerCase())) && (branch_code == "" || v.branch_code == branch_code) && (nation_id == "" || ((_a = v.nation_id) === null || _a === void 0 ? void 0 : _a.startsWith(nation_id)));
      });
    }
  }, {
    key: "showErrorMsg",
    value: function showErrorMsg(errorMsg) {
      this.alertService.showAlertError(errorMsg, false);
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
      var result = (0,_angular_common__WEBPACK_IMPORTED_MODULE_12__.formatNumber)(Number(number), "en-US", "1.0");
      return result;
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.details = false;
    }
  }, {
    key: "MoreDetails",
    value: function MoreDetails(document) {
      this.curDocument = document;
      this.details = !this.details;
    }
  }, {
    key: "rejectApplication",
    value: function rejectApplication(exception_id) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.alertService.SaveAlert("هل تريد رفض الطلب؟");

              case 2:
                if (!_context2.sent) {
                  _context2.next = 3;
                  break;
                }

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "UnsuspendApplication",
    value: function UnsuspendApplication(exception_id) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.alertService.SaveAlert("هل تريد الغاء تعليق الطلب؟");

              case 2:
                if (!_context3.sent) {
                  _context3.next = 5;
                  break;
                }

                this.showLoader = true;
                this.http.post(this.env.API_URL + "api/LoanApplications/HandleUserSuspendedDocument?exception_id=".concat(exception_id), {}).subscribe({
                  next: function next() {
                    _this2.alertService.showAlertConfirm("تم ايقاف تعليق الطلب بنجاح", true);

                    _this2.showLoader = false;
                  },
                  error: function error(_error2) {
                    _this2.alertService.showAlertError(_error2.error, false);

                    _this2.showLoader = false;
                  }
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }]);

  return UserSuspendedDocumentsPage;
}();

UserSuspendedDocumentsPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_7__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_9__.sortingService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_5__.MohassilAuthService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_8__.pagingService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_10__.ReferencesService
  }];
};

UserSuspendedDocumentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: "app-user-suspended-documents",
  template: _user_suspended_documents_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_user_suspended_documents_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], UserSuspendedDocumentsPage);


/***/ }),

/***/ 79107:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/user-suspended-documents/user-suspended-documents.page.scss?ngResource ***!
  \****************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXN1c3BlbmRlZC1kb2N1bWVudHMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 13163:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/user-suspended-documents/user-suspended-documents.page.html?ngResource ***!
  \****************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div\n  class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\"\n>\n  <div>\n    <h4 class=\"mr-1 mb-md-0\">طلبات القروض المعلقة يدوياً</h4>\n  </div>\n</div>\n<div class=\"col pt-3\">\n  <form [formGroup]=\"SearchForm\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md-4\">\n        <div class=\"form-group\">\n          <ion-label class=\"form-label\"> بحث باسم العميل </ion-label>\n          <ion-input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"client_name\"\n            formControlName=\"client_name\"\n            (ionChange)=\"searchForUsers()\"\n          ></ion-input>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <div class=\"form-group\">\n          <ion-label class=\"form-label\"> الفروع </ion-label>\n          <ion-select\n            interface=\"popover\"\n            formControlName=\"branch_code\"\n            class=\"subselect\"\n            placeholder=\"الفروع\"\n            (ionChange)=\"searchForUsers()\"\n          >\n            <ion-select-option value=\"\">كل الفروع</ion-select-option>\n            <ion-select-option\n              *ngFor=\"let branch of branches\"\n              [value]=\"branch.branch_code\"\n            >\n              {{branch.branch_name}}\n            </ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <div class=\"form-group\">\n          <ion-label class=\"form-label\"> بحث بالرقم القومي </ion-label>\n          <ion-input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"nation_id\"\n            formControlName=\"nation_id\"\n            [maxlength]=\"14\"\n            (ionChange)=\"searchForUsers()\"\n          ></ion-input>\n        </div>\n      </div>\n    </div>\n  </form>\n  <div class=\"row-12\">\n    <div class=\"row mx-0 card table-responsive justify-content-center\">\n      <table class=\"table\">\n        <thead>\n          <th class=\"text-center\"></th>\n          <th\n            class=\"text-center\"\n            (click)=\"sortingTable(FilteredDocuments , 'client_name')\"\n          >\n            اسم العميل<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingIconClass\"\n              *ngIf=\"sortingIconParam == 'client_name'\"\n            ></ion-icon>\n          </th>\n          <th\n            class=\"text-center\"\n            (click)=\"sortingTable(FilteredDocuments , 'date_assigned')\"\n          >\n            معلق من تاريخ<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingIconClass\"\n              *ngIf=\"sortingIconParam == 'date_assigned'\"\n            ></ion-icon>\n          </th>\n          <th\n            class=\"text-center\"\n            (click)=\"sortingTable(FilteredDocuments , 'aprv_am')\"\n          >\n            مبلغ طلب القرض<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingIconClass\"\n              *ngIf=\"sortingIconParam == 'aprv_am'\"\n            ></ion-icon>\n          </th>\n          <th class=\"text-center\">اسم نوع القرض</th>\n          <th class=\"text-center\">سبب تعليق الطلب</th>\n          <th class=\"text-center\">ملاحظات</th>\n          <th class=\"text-center\">الغاء تعليق الطلب</th>\n          <!-- <th class=\"text-center\">رفض الطلب</th> -->\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let Document of this.pagingService.Paging(\n            this.FilteredDocuments,\n            this.page\n          ); let i = index\"\n          >\n            <td class=\"text-center\" (click)=\"MoreDetails(Document)\">\n              <ion-icon name=\"person-circle-outline\"></ion-icon>\n            </td>\n            <td class=\"text-center\">{{Document.client_name}}</td>\n            <!-- <td class=\"text-center\">{{Document.branch_name}}</td> -->\n            <!-- <td class=\"text-center\">{{Document.nation_id}}</td> -->\n            <td class=\"text-center\">{{dateFormat(Document.date_assigned)}}</td>\n            <td class=\"text-center\">{{NumberFormatStyle(Document.aprv_am)}}</td>\n            <td class=\"text-center\">{{Document.loan_type_name}}</td>\n            <td class=\"text-center\">{{Document.exception_reason}}</td>\n            <td class=\"text-center\">\n              <ion-button (click)=\"showErrorMsg(Document.exception_note)\"\n                ><ion-icon name=\"information-circle-outline\"></ion-icon\n              ></ion-button>\n            </td>\n            <td class=\"text-center\">\n              <ion-button (click)=\"UnsuspendApplication(Document.exception_id)\"\n                ><ion-icon name=\"reload-outline\"></ion-icon\n              ></ion-button>\n            </td>\n            <!-- <td class=\"text-center\"><ion-button  color=\"danger\" (click)=\"rejectApplication(Document.exception_id)\"><ion-icon\n                  name=\"trash-outline\"></ion-icon></ion-button></td> -->\n          </tr>\n          <tr *ngIf=\"!!FilteredDocuments && FilteredDocuments.length == 0\">\n            <td class=\"text-center\" colspan=\"12\">\n              لم يتم العثور على طلبات قروض معلقة\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <app-pagination\n      [page]=\"page\"\n      [collectionSize]=\"FilteredDocuments?.length\"\n      (pageChange)=\"changePage($event);\"\n    ></app-pagination>\n  </div>\n</div>\n\n<ion-content>\n  <ion-modal #modal [isOpen]=\"details\" (didDismiss)=\"dismissModal();\">\n    <ng-template>\n      <ion-toolbar>\n        <ion-title>بيانات: {{ curDocument.client_name }}</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"dismissModal()\">\n            <ion-icon name=\"close-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-card class=\"w-100 h-100 mx-0 my-0 inherit-color\">\n        <ion-card-content class=\"align-middle modalSize\">\n          <ion-grid class=\"card inherit-color px-0 py-0\">\n            <div class=\"card-body\">\n              <ion-row>\n                <ion-col>\n                  <ion-label>المحمول</ion-label>\n                  <ion-label class=\"form-control\">\n                    {{curDocument.mobile_1}}\n                  </ion-label>\n                </ion-col>\n                <ion-col>\n                  <ion-label>الرقم القومي</ion-label>\n                  <ion-label class=\"form-control\">\n                    {{curDocument.nation_id}}\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </ng-template>\n  </ion-modal>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_user-suspended-documents_user-suspended-documents_module_ts.js.map