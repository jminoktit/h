"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_users-temporary-suspension_users-temporary-suspension_module_ts"],{

/***/ 95742:
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/users-temporary-suspension/users-temporary-suspension-routing.module.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersTemporarySuspensionPageRoutingModule": function() { return /* binding */ UsersTemporarySuspensionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _users_temporary_suspension_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-temporary-suspension.page */ 88701);






var routes = [{
  path: '',
  component: _users_temporary_suspension_page__WEBPACK_IMPORTED_MODULE_2__.UsersTemporarySuspensionPage
}];

var UsersTemporarySuspensionPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UsersTemporarySuspensionPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UsersTemporarySuspensionPageRoutingModule);
});

UsersTemporarySuspensionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], UsersTemporarySuspensionPageRoutingModule);


/***/ }),

/***/ 21916:
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/users-temporary-suspension/users-temporary-suspension.module.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersTemporarySuspensionPageModule": function() { return /* binding */ UsersTemporarySuspensionPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _users_temporary_suspension_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users-temporary-suspension-routing.module */ 95742);
/* harmony import */ var _users_temporary_suspension_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-temporary-suspension.page */ 88701);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ 63430);











var UsersTemporarySuspensionPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UsersTemporarySuspensionPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UsersTemporarySuspensionPageModule);
});

UsersTemporarySuspensionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _users_temporary_suspension_routing_module__WEBPACK_IMPORTED_MODULE_2__.UsersTemporarySuspensionPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_users_temporary_suspension_page__WEBPACK_IMPORTED_MODULE_3__.UsersTemporarySuspensionPage]
})], UsersTemporarySuspensionPageModule);


/***/ }),

/***/ 88701:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/users-temporary-suspension/users-temporary-suspension.page.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersTemporarySuspensionPage": function() { return /* binding */ UsersTemporarySuspensionPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _users_temporary_suspension_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users-temporary-suspension.page.html?ngResource */ 55381);
/* harmony import */ var _users_temporary_suspension_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-temporary-suspension.page.scss?ngResource */ 19112);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 90475);
/* harmony import */ var date_fns_isAfter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns/isAfter */ 51233);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);


















var UsersTemporarySuspensionPage = /*#__PURE__*/function () {
  function UsersTemporarySuspensionPage(env, http, formBuilder, datePipe, sortingService, authService, alertService, pagingService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UsersTemporarySuspensionPage);

    this.env = env;
    this.http = http;
    this.formBuilder = formBuilder;
    this.datePipe = datePipe;
    this.sortingService = sortingService;
    this.authService = authService;
    this.alertService = alertService;
    this.pagingService = pagingService;
    this.showLoader = false;
    this.isSearching = true;
    this.canEnableUser = false;
    this.validationErrors = "";
    this.page = 1; // the page we are viewing

    this.filteredUsers = [];
    this.branches = [];
    this.SearchForm = this.formBuilder.group({
      search_input: [""],
      branch_code: [""]
    });
    this.UserForm = this.formBuilder.group({
      user_name: [""],
      user_branch_code: [""],
      disable_user_from: [this.datePipe.transform(Date.now(), "yyyy-MM-dd")],
      disable_user_to: [this.datePipe.transform(Date.now(), "yyyy-MM-dd")]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UsersTemporarySuspensionPage, [{
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
                  _this.branch_code = userInfo.branch_code;
                });

              case 2:
                this.getUsers();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "changePage",
    value: function changePage(newPage) {
      this.page = newPage;
    }
  }, {
    key: "submit",
    value: function submit() {
      var enable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.validateRevision()) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 3;
                return this.alertService.SaveAlert();

              case 3:
                if (!_context2.sent) {
                  _context2.next = 7;
                  break;
                }

                this.showLoader = true;

                if (enable) {
                  this.UserForm.patchValue({
                    disable_user_from: null,
                    disable_user_to: null
                  });
                }

                this.http.post(this.env.API_URL + "api/User/DisableUser", {
                  org_code: this.org_code,
                  branch_code: this.UserForm.value.user_branch_code.toString(),
                  user_name: this.UserForm.value.user_name,
                  disable_user_from: this.UserForm.value.disable_user_from,
                  disable_user_to: this.UserForm.value.disable_user_to
                }).subscribe({
                  next: function next(data) {
                    _this2.alertService.showAlertConfirm("تم الحفظ بنجاح", true);

                    _this2.showLoader = false;
                  },
                  error: function error(_error) {
                    _this2.alertService.showAlertError(_error.error, false);

                    _this2.showLoader = false;
                  }
                });

              case 7:
                _context2.next = 10;
                break;

              case 9:
                this.alertService.showAlertError(this.validationErrors, false);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "getUsers",
    value: function getUsers() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var _this3 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.showLoader = true;
                return _context3.abrupt("return", this.http.get(this.env.API_URL + "api/User/GetUsers").subscribe(function (data) {
                  _this3.users = data["entities"];
                  _this3.branches = data["branches"];
                  _this3.filteredUsers = _this3.users;

                  _this3.filteredUsers.forEach(function (x) {
                    x.disable_user_from = x.disable_user_from != null ? _this3.dateFormat(x.disable_user_from) : "لا يوجد";
                    x.disable_user_to = x.disable_user_to != null ? _this3.dateFormat(x.disable_user_to) : "لا يوجد";
                  });

                  _this3.showLoader = false;
                }));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "review",
    value: function review(user) {
      this.isSearching = false;
      this.UserForm.patchValue({
        user_name: user.user_name,
        user_branch_code: user.branch_code,
        disable_user_from: user.disable_user_from,
        disable_user_to: user.disable_user_to
      });

      if (user.disable_user_from && user.disable_user_to != "لا يوجد") {
        this.canEnableUser = true;
      } else {
        this.UserForm.patchValue({
          disable_user_from: this.datePipe.transform(Date.now(), "yyyy-MM-dd"),
          disable_user_to: this.datePipe.transform(Date.now(), "yyyy-MM-dd")
        });
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.isSearching = true;
      this.canEnableUser = false;
    }
  }, {
    key: "searchForUsers",
    value: function searchForUsers() {
      this.page = 1;
      var user_name = this.SearchForm.value.search_input;
      var branch_code = this.SearchForm.value.branch_code;
      this.filteredUsers = this.users.filter(function (v) {
        return (user_name == "" || v.user_name.toLowerCase().match(user_name.toLowerCase())) && (branch_code == "" || v.branch_code == branch_code);
      });
    }
  }, {
    key: "validateRevision",
    value: function validateRevision() {
      this.validationErrors = "";
      var state = true;
      var currentDate = new Date(this.datePipe.transform(Date.now(), "yyyy-MM-dd"));
      var disable_user_from = new Date(this.datePipe.transform(this.UserForm.value.disable_user_from, "yyyy-MM-dd"));
      var disable_user_to = new Date(this.datePipe.transform(this.UserForm.value.disable_user_to, "yyyy-MM-dd"));

      if ((0,date_fns_isAfter__WEBPACK_IMPORTED_MODULE_11__["default"])(disable_user_from, disable_user_to)) {
        this.validationErrors += "تاريخ انتهاء الوقف قبل تاريخ البدء<br>";
        state = false;
      }

      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(disable_user_from, currentDate) && this.UserForm.value.disable_user_from != null && this.UserForm.value.disable_user_to != null) {
        this.validationErrors += "يجب اختيار التاريخ بدءاً من تاريخ اليوم<br>";
        state = false;
      }

      return state;
    }
  }, {
    key: "dateFormat",
    value: function dateFormat(date) {
      return this.datePipe.transform(date, "yyyy-MM-dd");
    }
  }, {
    key: "sortingTable",
    value: function sortingTable(data, param) {
      this.sortingService.sortByParameter(data, param);
      this.sortingIconClass = this.sortingService.sortOrder === "asc" ? "arrow-down-outline" : "arrow-up-outline";
      this.sortingIconParam = param;
    }
  }]);

  return UsersTemporarySuspensionPage;
}();

UsersTemporarySuspensionPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_7__.sortingService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_9__.MohassilAuthService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_6__.pagingService
  }];
};

UsersTemporarySuspensionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: "app-users-temporary-suspension",
  template: _users_temporary_suspension_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_users_temporary_suspension_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], UsersTemporarySuspensionPage);


/***/ }),

/***/ 19112:
/*!********************************************************************************************************!*\
  !*** ./src/app/views/pages/users-temporary-suspension/users-temporary-suspension.page.scss?ngResource ***!
  \********************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy10ZW1wb3Jhcnktc3VzcGVuc2lvbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 55381:
/*!********************************************************************************************************!*\
  !*** ./src/app/views/pages/users-temporary-suspension/users-temporary-suspension.page.html?ngResource ***!
  \********************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div class=\"col card pt-3\" *ngIf=\"isSearching\">\n  <form [formGroup]=\"SearchForm\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md-4\">\n        <div class=\"form-group\">\n          <ion-label class=\"form-label\"> بحث باسم المستخدم </ion-label>\n          <ion-input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"search_input\"\n            formControlName=\"search_input\"\n            (ionChange)=\"searchForUsers()\"\n          ></ion-input>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-4\">\n        <div class=\"form-group\">\n          <ion-label class=\"form-label\"> الفروع </ion-label>\n          <ion-select\n            interface=\"popover\"\n            formControlName=\"branch_code\"\n            class=\"subselect\"\n            placeholder=\"الفروع\"\n            (ionChange)=\"searchForUsers()\"\n          >\n            <ion-select-option value=\"\"></ion-select-option>\n            <ion-select-option\n              *ngFor=\"let branch of branches\"\n              [value]=\"branch.branch_code\"\n            >\n              {{branch.branch_name}}\n            </ion-select-option>\n          </ion-select>\n        </div>\n      </div>\n    </div>\n  </form>\n  <div class=\"row-12\">\n    <div class=\"row mx-0 table-responsive d-flex justify-content-center\">\n      <table class=\"table\">\n        <thead>\n          <th\n            class=\"w-40 text-center\"\n            (click)=\"sortingTable(filteredUsers , 'user_name')\"\n          >\n            المستخدم<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingIconClass\"\n              *ngIf=\"sortingIconParam == 'user_name'\"\n            ></ion-icon>\n          </th>\n          <th\n            class=\"w-40 text-center\"\n            (click)=\"sortingTable(filteredUsers , 'branch_name')\"\n          >\n            الفرع<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingIconClass\"\n              *ngIf=\"sortingIconParam == 'branch_name'\"\n            ></ion-icon>\n          </th>\n          <th\n            class=\"w-40 text-center\"\n            (click)=\"sortingTable(filteredUsers , 'disable_user_from')\"\n          >\n            موقوف من<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingIconClass\"\n              *ngIf=\"sortingIconParam == 'disable_user_from'\"\n            ></ion-icon>\n          </th>\n          <th\n            class=\"w-40 text-center\"\n            (click)=\"sortingTable(filteredUsers , 'disable_user_to')\"\n          >\n            الي<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingIconClass\"\n              *ngIf=\"sortingIconParam == 'disable_user_to'\"\n            ></ion-icon>\n          </th>\n        </thead>\n        <tbody>\n          <tr\n            *ngFor=\"let user of this.pagingService.Paging(\n            this.filteredUsers,\n            this.page\n          ); let i = index\"\n            (click)=\"review(user)\"\n          >\n            <td class=\"w-40 text-center\">{{user.user_name}}</td>\n            <td class=\"w-40 text-center\">{{user.branch_name}}</td>\n            <td class=\"w-40 text-center\">{{user.disable_user_from}}</td>\n            <td class=\"w-40 text-center\">{{user.disable_user_to}}</td>\n          </tr>\n          <tr *ngIf=\"!!filteredUsers && filteredUsers.length == 0\">\n            <td class=\"text-center\" colspan=\"6\">لم يتم العثور على مستخدمين</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <app-pagination\n      [page]=\"page\"\n      [collectionSize]=\"filteredUsers?.length\"\n      (pageChange)=\"changePage($event);\"\n    ></app-pagination>\n  </div>\n</div>\n\n<div class=\"col card pt-3\" *ngIf=\"!isSearching\">\n  <form [formGroup]=\"UserForm\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md-4\">\n        <div class=\"form-group\">\n          <ion-label class=\"form-label\"> اسم المستخدم </ion-label>\n          <ion-input\n            [disabled]=\"true\"\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"user_name\"\n          ></ion-input>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 col-md-4\">\n        <div class=\"form-group\">\n          <ion-label class=\"form-label\"> تاريخ الوقف من </ion-label>\n          <ngx-datepicker\n            [parentForm]=\"UserForm\"\n            parentFormControllerName=\"disable_user_from\"\n          ></ngx-datepicker>\n        </div>\n      </div>\n      <div class=\"col-6 col-md-4\">\n        <div class=\"form-group\">\n          <ion-label class=\"form-label\"> الي </ion-label>\n          <ngx-datepicker\n            [parentForm]=\"UserForm\"\n            parentFormControllerName=\"disable_user_to\"\n          ></ngx-datepicker>\n        </div>\n      </div>\n    </div>\n  </form>\n  <div class=\"d-flex justify-content-center mt-2\">\n    <ion-button color=\"danger\" (click)=\"cancel()\">رجوع</ion-button>\n    <ion-button (click)=\"submit(false)\">وقف</ion-button>\n    <ion-button *ngIf=\"canEnableUser\" (click)=\"submit(true)\"\n      >الغاء الوقف</ion-button\n    >\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_users-temporary-suspension_users-temporary-suspension_module_ts.js.map