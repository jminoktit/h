"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_suspended-documents_suspended-documents_module_ts"],{

/***/ 82156:
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/suspended-documents/suspended-documents-routing.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuspendedDocumentsPageRoutingModule": function() { return /* binding */ SuspendedDocumentsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _suspended_documents_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suspended-documents.page */ 30185);






var routes = [{
  path: '',
  component: _suspended_documents_page__WEBPACK_IMPORTED_MODULE_2__.SuspendedDocumentsPage
}];

var SuspendedDocumentsPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SuspendedDocumentsPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SuspendedDocumentsPageRoutingModule);
});

SuspendedDocumentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], SuspendedDocumentsPageRoutingModule);


/***/ }),

/***/ 90735:
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/suspended-documents/suspended-documents.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuspendedDocumentsPageModule": function() { return /* binding */ SuspendedDocumentsPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _suspended_documents_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./suspended-documents-routing.module */ 82156);
/* harmony import */ var _suspended_documents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suspended-documents.page */ 30185);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ 63430);











var SuspendedDocumentsPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SuspendedDocumentsPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SuspendedDocumentsPageModule);
});

SuspendedDocumentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _suspended_documents_routing_module__WEBPACK_IMPORTED_MODULE_2__.SuspendedDocumentsPageRoutingModule],
  declarations: [_suspended_documents_page__WEBPACK_IMPORTED_MODULE_3__.SuspendedDocumentsPage]
})], SuspendedDocumentsPageModule);


/***/ }),

/***/ 30185:
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/suspended-documents/suspended-documents.page.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuspendedDocumentsPage": function() { return /* binding */ SuspendedDocumentsPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _suspended_documents_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suspended-documents.page.html?ngResource */ 40764);
/* harmony import */ var _suspended_documents_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./suspended-documents.page.scss?ngResource */ 60686);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/loan-applications.service */ 35866);

















var SuspendedDocumentsPage = /*#__PURE__*/function () {
  function SuspendedDocumentsPage(env, http, formBuilder, sortingService, alertService, loanApplicationsService, pagingService, translate) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SuspendedDocumentsPage);

    this.env = env;
    this.http = http;
    this.formBuilder = formBuilder;
    this.sortingService = sortingService;
    this.alertService = alertService;
    this.loanApplicationsService = loanApplicationsService;
    this.pagingService = pagingService;
    this.translate = translate;
    this.showLoader = false;
    this.details = false;
    this.page = 1; // the page we are viewing

    this.branches = [];
    this.SearchForm = this.formBuilder.group({
      client_name: [""],
      branch_code: [""],
      nation_id: [""]
    });

    this.NumberFormatStyle = function (number) {
      return (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatNumber)(Number(number), "en-US", "1.0");
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SuspendedDocumentsPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.GetSuspendedDocuments();
    }
  }, {
    key: "GetSuspendedDocuments",
    value: function GetSuspendedDocuments() {
      var _this = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/LoanApplications/GetSuspendedDocuments").subscribe({
        next: function next(data) {
          _this.suspendedDocuments = data["entities"];
          _this.branches = data["branches"];
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
    key: "UnSuspendDocument",
    value: function UnSuspendDocument(document) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var request, result, successMessage;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.alertService.SaveAlert("هل أنت متأكد أنك تريد إلغاء تعليق هذا الطلب؟");

              case 2:
                if (_context.sent) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.prev = 4;
                this.showLoader = true;
                request = {
                  id: document.id,
                  org_code: document.org_code,
                  branch_code: document.branch_code,
                  client_key: document.client_key
                };
                _context.next = 9;
                return this.loanApplicationsService.unSuspendApplication(request).toPromise();

              case 9:
                result = _context.sent;

                if (!(result.applicationCode === "-1")) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", this.alertService.showAlertConfirm(this.translate.instant("loans.workflowErrorMessage"), true));

              case 12:
                successMessage = this.translate.instant("loanApp.createSuccess") + ": ".concat(result.applicationCode, " ");
                this.alertService.showAlertConfirm(successMessage, true);
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](4);
                this.handleError(_context.t0);

              case 19:
                _context.prev = 19;
                this.showLoader = false;
                return _context.finish(19);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 16, 19, 22]]);
      }));
    }
  }, {
    key: "DeleteSuspendedDocument",
    value: function DeleteSuspendedDocument(document) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.alertService.SaveAlert();

              case 2:
                if (_context2.sent) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return");

              case 4:
                _context2.prev = 4;
                this.showLoader = true;
                _context2.next = 8;
                return this.loanApplicationsService.deleteSuspendedApplication(document).toPromise();

              case 8:
                this.alertService.showAlertConfirm("تم الحذف بنجاح", true);
                _context2.next = 14;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](4);
                this.handleError(_context2.t0);

              case 14:
                _context2.prev = 14;
                this.showLoader = false;
                return _context2.finish(14);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 11, 14, 17]]);
      }));
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
    value: function showErrorMsg(message) {
      this.alertService.showAlertError(message, false);
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
    key: "handleError",
    value: function handleError(error) {
      var errorMessage = error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpErrorResponse ? JSON.stringify(error.error) : error instanceof Error ? error.message : String(error);
      this.alertService.showAlertError(errorMessage, false);
      console.error("Error:", error);
    }
  }]);

  return SuspendedDocumentsPage;
}();

SuspendedDocumentsPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_8__.sortingService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_9__.LoanApplicationsService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_7__.pagingService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService
  }];
};

SuspendedDocumentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: "app-suspended-documents",
  template: _suspended_documents_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_suspended_documents_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], SuspendedDocumentsPage);


/***/ }),

/***/ 60686:
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/suspended-documents/suspended-documents.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXNwZW5kZWQtZG9jdW1lbnRzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 40764:
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/suspended-documents/suspended-documents.page.html?ngResource ***!
  \******************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<ion-title class=\"ion-padding-vertical\">طلبات القروض المعلقة</ion-title>\n\n<ion-card>\n  <ion-card-content>\n    <form [formGroup]=\"SearchForm\">\n      <ion-row>\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n          <ion-label class=\"form-label\"> بحث باسم العميل </ion-label>\n          <ion-input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"client_name\"\n            formControlName=\"client_name\"\n            (ionChange)=\"searchForUsers()\"\n            placeholder=\"اسم العميل\"\n          ></ion-input>\n        </ion-col>\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n          <ion-label class=\"form-label\"> الفروع </ion-label>\n          <ion-select\n            interface=\"popover\"\n            formControlName=\"branch_code\"\n            class=\"subselect\"\n            placeholder=\"الفروع\"\n            (ionChange)=\"searchForUsers()\"\n          >\n            <ion-select-option value=\"\"></ion-select-option>\n            <ion-select-option\n              *ngFor=\"let branch of branches\"\n              [value]=\"branch.branch_code\"\n            >\n              {{branch.branch_name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n          <ion-label class=\"form-label\"> بحث بالرقم القومي </ion-label>\n          <ion-input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"nation_id\"\n            formControlName=\"nation_id\"\n            [maxlength]=\"14\"\n            (ionChange)=\"searchForUsers()\"\n            placeholder=\"الرقم القومي\"\n          ></ion-input>\n        </ion-col>\n      </ion-row>\n    </form>\n    <ion-row class=\"pt-4\">\n      <div class=\"table-responsive\">\n        <ion-grid style=\"min-width: 1000px\" [fixed]=\"true\">\n          <ion-row class=\"header-row text-center\">\n            <ion-col> </ion-col>\n            <ion-col (click)=\"sortingTable(FilteredDocuments , 'client_name')\">\n              <ion-label> اسم العميل </ion-label>\n              <ion-icon\n                class=\"ion-icon-class\"\n                [name]=\"sortingIconClass\"\n                *ngIf=\"sortingIconParam == 'client_name'\"\n              ></ion-icon>\n            </ion-col>\n            <ion-col (click)=\"sortingTable(FilteredDocuments , 'entry_date')\">\n              <ion-label> معلق من تاريخ </ion-label>\n              <ion-icon\n                class=\"ion-icon-class\"\n                [name]=\"sortingIconClass\"\n                *ngIf=\"sortingIconParam == 'entry_date'\"\n              ></ion-icon>\n            </ion-col>\n            <ion-col (click)=\"sortingTable(FilteredDocuments , 'req_am')\">\n              <ion-label> مبلغ طلب القرض </ion-label>\n              <ion-icon\n                class=\"ion-icon-class\"\n                [name]=\"sortingIconClass\"\n                *ngIf=\"sortingIconParam == 'req_am'\"\n              ></ion-icon>\n            </ion-col>\n            <ion-col>\n              <ion-label> اسم نوع القرض </ion-label>\n            </ion-col>\n\n            <ion-col> </ion-col>\n            <ion-col> </ion-col>\n            <ion-col> </ion-col>\n          </ion-row>\n          <ion-row\n            class=\"details-row text-left\"\n            *ngFor=\"let Document of this.pagingService.Paging(\n            this.FilteredDocuments,\n            this.page\n          ); let i = index\"\n          >\n            <ion-col (click)=\"MoreDetails(Document)\">\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\n            </ion-col>\n            <ion-col>\n              <ion-label class=\"form-label\">{{Document.client_name}}</ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-label class=\"form-label\"\n                >{{Document.entry_date | date: 'yyyy-MM-dd'}}</ion-label\n              >\n            </ion-col>\n            <ion-col>\n              <ion-label class=\"form-label\"\n                >{{NumberFormatStyle(Document.req_am)}}</ion-label\n              >\n            </ion-col>\n            <ion-col>\n              <ion-label class=\"form-label\"\n                >{{Document.loan_type_name}}</ion-label\n              >\n            </ion-col>\n            <ion-col>\n              <ion-button (click)=\"showErrorMsg(Document.error_msg)\"\n                ><ion-icon\n                  name=\"alert-circle-outline\"\n                  id=\"showAlertError\"\n                ></ion-icon\n              ></ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button (click)=\"UnSuspendDocument(Document)\"\n                ><ion-icon name=\"reload-outline\"></ion-icon\n              ></ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button\n                (click)=\"DeleteSuspendedDocument(Document)\"\n                color=\"danger\"\n                ><ion-icon name=\"trash-outline\"></ion-icon\n              ></ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row\n            class=\"details-row text-center\"\n            *ngIf=\"!!FilteredDocuments && FilteredDocuments.length == 0\"\n          >\n            <ion-col>\n              <ion-label> لم يتم العثور على طلبات قروض معلقة </ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-row>\n    <app-pagination\n      [page]=\"page\"\n      [collectionSize]=\"FilteredDocuments?.length\"\n      (pageChange)=\"changePage($event);\"\n    ></app-pagination>\n  </ion-card-content>\n</ion-card>\n\n<ion-content>\n  <ion-modal #modal [isOpen]=\"details\" (didDismiss)=\"dismissModal();\">\n    <ng-template>\n      <ion-toolbar>\n        <ion-title>بيانات: {{ curDocument.client_name }}</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"dismissModal()\">\n            <ion-icon name=\"close-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-card class=\"w-100 h-100 mx-0 my-0 inherit-color\">\n        <ion-card-content class=\"align-middle modalSize\">\n          <ion-grid class=\"card inherit-color px-0 py-0\">\n            <div class=\"card-body\">\n              <ion-row>\n                <ion-col>\n                  <ion-label>المحمول</ion-label>\n                  <ion-label class=\"form-control\">\n                    {{curDocument.mobile_1}}\n                  </ion-label>\n                </ion-col>\n                <ion-col>\n                  <ion-label>الرقم القومي</ion-label>\n                  <ion-label class=\"form-control\">\n                    {{curDocument.nation_id}}\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </ng-template>\n  </ion-modal>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_suspended-documents_suspended-documents_module_ts.js.map