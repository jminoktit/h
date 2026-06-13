"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_permissions_add-banks-for-user_add-banks-for-user_module_ts"],{

/***/ 86511:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/add-banks-for-user/add-banks-for-user-routing.module.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBanksForUserPageRoutingModule": function() { return /* binding */ AddBanksForUserPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _add_banks_for_user_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-banks-for-user.page */ 53500);






var routes = [{
  path: '',
  component: _add_banks_for_user_page__WEBPACK_IMPORTED_MODULE_2__.AddBanksForUserPage
}];

var AddBanksForUserPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AddBanksForUserPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddBanksForUserPageRoutingModule);
});

AddBanksForUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], AddBanksForUserPageRoutingModule);


/***/ }),

/***/ 48730:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/add-banks-for-user/add-banks-for-user.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBanksForUserPageModule": function() { return /* binding */ AddBanksForUserPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _add_banks_for_user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-banks-for-user-routing.module */ 86511);
/* harmony import */ var _add_banks_for_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-banks-for-user.page */ 53500);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var AddBanksForUserPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AddBanksForUserPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddBanksForUserPageModule);
});

AddBanksForUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _add_banks_for_user_routing_module__WEBPACK_IMPORTED_MODULE_2__.AddBanksForUserPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_add_banks_for_user_page__WEBPACK_IMPORTED_MODULE_3__.AddBanksForUserPage]
})], AddBanksForUserPageModule);


/***/ }),

/***/ 53500:
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/add-banks-for-user/add-banks-for-user.page.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddBanksForUserPage": function() { return /* binding */ AddBanksForUserPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _add_banks_for_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-banks-for-user.page.html?ngResource */ 23388);
/* harmony import */ var _add_banks_for_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-banks-for-user.page.scss?ngResource */ 39216);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/user.service */ 88386);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);














var AddBanksForUserPage = /*#__PURE__*/function () {
  function AddBanksForUserPage(env, http, translate, pagingService, userService, formBuilder) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddBanksForUserPage);

    this.env = env;
    this.http = http;
    this.translate = translate;
    this.pagingService = pagingService;
    this.userService = userService;
    this.formBuilder = formBuilder;
    this.showLoader = false;
    this.initialLoad = true;
    this.page = 1;
    this.permissions = [];
    this.BranchReferences = [];
    this.BanksForUser = [];
    this.filteredBanks = [];
    this.SearchForm = this.formBuilder.group({
      search_input: [""]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddBanksForUserPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.GetBranches();

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {}
  }, {
    key: "GetBranches",
    value: function GetBranches() {
      var _this = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/Branch/GetAllBranches").subscribe({
        next: function next(data) {
          _this.BranchReferences = data["BranchReferences"];
          _this.showLoader = false;
        },
        error: function error(err) {
          console.log(err.message);
          _this.showLoader = false;
        }
      });
    }
  }, {
    key: "userSelected",
    value: function userSelected(user) {
      var _this2 = this;

      this.selectedUser = user;
      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/Bank/GetUserBanks?username=".concat(user.user_name)).subscribe({
        next: function next(data) {
          _this2.BanksForUser = data;
          _this2.filteredBanks = _this2.BanksForUser;
          _this2.showLoader = false;
        },
        error: function error(err) {
          console.log(err.message);
          _this2.showLoader = false;
        }
      });
    }
  }, {
    key: "DeselectUser",
    value: function DeselectUser() {
      this.selectedUser = null;
      this.page = 1;
      this.SearchForm.controls.search_input.reset();
    }
  }, {
    key: "ChangePermissions",
    value: function ChangePermissions(BankForUser, value) {
      var _this3 = this;

      this.showLoader = true;

      if (value === 1) {
        this.http.post(this.env.API_URL + "api/Bank/AddUserAllBanks?user_name=".concat(this.selectedUser.user_name), {}).subscribe({
          next: function next() {
            BankForUser.forEach(function (x) {
              x.have_rights = 1;
            });
            _this3.showLoader = false;
          },
          error: function error(err) {
            console.log(err.message);
            _this3.showLoader = false;
          }
        });
      } else {
        this.http.post(this.env.API_URL + "api/Bank/RemoveUserAllBanks?user_name=".concat(this.selectedUser.user_name), {}).subscribe({
          next: function next() {
            BankForUser.forEach(function (x) {
              x.have_rights = 0;
            });
            _this3.showLoader = false;
          },
          error: function error(err) {
            console.log(err.message);
            _this3.showLoader = false;
          }
        });
      }
    }
  }, {
    key: "ChangePermission",
    value: function ChangePermission(BankForUser, value) {
      var _this4 = this;

      this.showLoader = true;

      if (value === 1) {
        this.http.post(this.env.API_URL + "api/Bank/AddUserBank?user_name=".concat(this.selectedUser.user_name, "&bank_key=").concat(BankForUser.bank_key), {}).subscribe({
          next: function next() {
            BankForUser.have_rights = 1;
            _this4.showLoader = false;
          },
          error: function error(err) {
            console.log(err.message);
            _this4.showLoader = false;
          }
        });
      } else {
        this.http.post(this.env.API_URL + "api/Bank/RemoveUserBank?user_name=".concat(this.selectedUser.user_name, "&bank_key=").concat(BankForUser.bank_key), {}).subscribe({
          next: function next() {
            BankForUser.have_rights = 0;
            _this4.showLoader = false;
          },
          error: function error(err) {
            console.log(err.message);
            _this4.showLoader = false;
          }
        });
      }
    }
  }, {
    key: "checkAllBanksForUserEnable",
    value: function checkAllBanksForUserEnable(BanksForUser) {
      return BanksForUser.every(function (item) {
        return item.have_rights == 1;
      });
    }
  }, {
    key: "checkAllBanksForUserDisable",
    value: function checkAllBanksForUserDisable(BanksForUser) {
      return BanksForUser.every(function (item) {
        return item.have_rights == 0;
      });
    }
  }, {
    key: "changePage",
    value: function changePage(newPage) {
      this.page = newPage;
    }
  }, {
    key: "searchForUsers",
    value: function searchForUsers() {
      this.page = 1;
      var bank_name = this.SearchForm.value.search_input;
      this.filteredBanks = this.BanksForUser.filter(function (v) {
        return bank_name == "" || v.bank_name.toLowerCase().match(bank_name.toLowerCase());
      });
    }
  }]);

  return AddBanksForUserPage;
}();

AddBanksForUserPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_6__.pagingService
  }, {
    type: src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
  }];
};

AddBanksForUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-add-banks-for-user",
  template: _add_banks_for_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_add_banks_for_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], AddBanksForUserPage);


/***/ }),

/***/ 39216:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/add-banks-for-user/add-banks-for-user.page.scss?ngResource ***!
  \****************************************************************************************************/
/***/ (function(module) {

module.exports = "app-pagination {\n  background: none !important;\n}\n\ndiv[class~=card-header] {\n  border-width: 0px !important;\n}\n\ndiv[class~=card-footer] {\n  border-width: 0px !important;\n}\n\n#selecteduser {\n  width: 100% !important;\n}\n\n#search {\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n}\n\n.hideCol {\n  display: none;\n}\n\n.showCol {\n  display: unset;\n}\n\n.form-control-error {\n  border-color: #ff3366;\n}\n\n.form-control-error:hover {\n  border-color: #da0036;\n}\n\n.input-validator {\n  font-weight: 600;\n  padding-right: 10px;\n  padding-left: 10px;\n  color: #ff3366 !important;\n}\n\n.input-validator::before {\n  content: \"-\";\n  margin-left: 6px;\n}\n\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.input:focus {\n  background-color: var(--input-bg-focus);\n  color: var(--form-text-color);\n}\n\ntd {\n  word-wrap: break-word;\n  white-space: normal;\n}\n\n.vertical-align {\n  vertical-align: middle;\n}\n\n.redColor {\n  color: #ff3366 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1iYW5rcy1mb3ItdXNlci5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEZWxldGUlMjBpdFxcTmV3TW9oYXNzaWxDbGllbnRfMzA5NV9zcmNcXE5ld01vaGFzc2lsQ2xpZW50XFxzcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxwZXJtaXNzaW9uc1xcYWRkLWJhbmtzLWZvci11c2VyXFxhZGQtYmFua3MtZm9yLXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0ksMkJBQUE7QUNWSjs7QURhRTtFQUNFLDRCQUFBO0FDVko7O0FEYUU7RUFDRSw0QkFBQTtBQ1ZKOztBRGFFO0VBQ0Usc0JBQUE7QUNWSjs7QURZRTtFQUNFLHFDQUFBO0VBQUEsa0NBQUE7RUFBQSw2QkFBQTtBQ1RKOztBRGdCRTtFQUNFLGFBQUE7QUNiSjs7QURlRTtFQUNFLGNBQUE7QUNaSjs7QURjRTtFQUNFLHFCQUFBO0FDWEo7O0FEWUk7RUFDRSxxQkFBQTtBQ1ZOOztBRGNFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNYSjs7QURZSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ1ZOOztBRGVJO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDWk47O0FEZ0JFO0VBQ0UsdUNBQUE7RUFDQSw2QkFBQTtBQ2JKOztBRGVFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQ1pKOztBRGNFO0VBQ0Usc0JBQUE7QUNYSjs7QURjRTtFQUVFLHlCQUFBO0FDWkoiLCJmaWxlIjoiYWRkLWJhbmtzLWZvci11c2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4vLyAgICAgZGl2W2NsYXNzfj1cImNhcmRcIl17XHJcbi8vICAgICAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIEBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbi8vICAgICBkaXZbY2xhc3N+PVwiY2FyZFwiXXtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5hcHAtcGFnaW5hdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGRpdltjbGFzc349XCJjYXJkLWhlYWRlclwiXSB7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBkaXZbY2xhc3N+PVwiY2FyZC1mb290ZXJcIl0ge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgI3NlbGVjdGVkdXNlciB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAjc2VhcmNoIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvLyBkaXZbY2xhc3N+PVwiY2FyZC1ib2R5XCJde1xyXG4gIC8vICAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgLy8gICAgIGhlaWdodDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC5oaWRlQ29sIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5zaG93Q29sIHtcclxuICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gIH1cclxuICAuZm9ybS1jb250cm9sLWVycm9yIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgNTEsIDEwMik7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMjE4LCAwLCA1NCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dC12YWxpZGF0b3Ige1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgNTEsIDEwMikgIWltcG9ydGFudDtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiLVwiO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1yZXF1aXJlZCB7XHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgICBjb2xvcjogcmdiKDI1NSwgNTEsIDEwMikgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmlucHV0OmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWJnLWZvY3VzKTtcclxuICAgIGNvbG9yOiB2YXIoLS1mb3JtLXRleHQtY29sb3IpO1xyXG4gIH1cclxuICB0ZCB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuICAudmVydGljYWwtYWxpZ24ge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB9XHJcblxyXG4gIC5yZWRDb2xvclxyXG4gIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAiLCJhcHAtcGFnaW5hdGlvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuZGl2W2NsYXNzfj1jYXJkLWhlYWRlcl0ge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuXG5kaXZbY2xhc3N+PWNhcmQtZm9vdGVyXSB7XG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNzZWxlY3RlZHVzZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4jc2VhcmNoIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5oaWRlQ29sIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3dDb2wge1xuICBkaXNwbGF5OiB1bnNldDtcbn1cblxuLmZvcm0tY29udHJvbC1lcnJvciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzM2Njtcbn1cbi5mb3JtLWNvbnRyb2wtZXJyb3I6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNkYTAwMzY7XG59XG5cbi5pbnB1dC12YWxpZGF0b3Ige1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZmYzMzY2ICFpbXBvcnRhbnQ7XG59XG4uaW5wdXQtdmFsaWRhdG9yOjpiZWZvcmUge1xuICBjb250ZW50OiBcIi1cIjtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmZvcm0tbGFiZWwtcmVxdWlyZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCIqXCI7XG4gIGNvbG9yOiAjZmYzMzY2ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWJnLWZvY3VzKTtcbiAgY29sb3I6IHZhcigtLWZvcm0tdGV4dC1jb2xvcik7XG59XG5cbnRkIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4udmVydGljYWwtYWxpZ24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucmVkQ29sb3Ige1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 23388:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/add-banks-for-user/add-banks-for-user.page.html?ngResource ***!
  \****************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<app-user-search\n  *ngIf=\"selectedUser == null || selectedUser == undefined\"\n  [resultType]=\"3\"\n  (selectedUser)=\"userSelected($event)\"\n>\n</app-user-search>\n<div *ngIf=\"selectedUser != null && selectedUser != undefined\" class=\"col\">\n  <div class=\"d-flex justify-content-between\">\n    <div\n      class=\"card px-1 py-1 my-1 mx-1 text-center row-12 d-flex justify-content-center\"\n      id=\"selecteduser\"\n    >\n      <div class=\"card-body py-2\">\n        <div class=\"card-text\">\n          <div class=\"row\">\n            <div class=\"col-4 align-self-center\">\n              {{selectedUser.branch_name}}\n            </div>\n            <div class=\"col-4 align-self-center\">\n              {{selectedUser.user_name}}\n            </div>\n            <div class=\"col-4 align-self-center\">\n              <ion-button (click)=\"DeselectUser()\"\n                ><ion-icon name=\"arrow-back-outline\"></ion-icon\n              ></ion-button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n    <!-- <form [formGroup]=\"SearchForm\" class=\"ion-margin\">\n        <ion-row style=\"margin-left: 10%; margin-right: 10%;\">\n          <ion-col style=\"align-content: center; text-align: center;\">\n            <ion-label class=\"form-label\">\n              بحث بأسم البنك\n            </ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-input type=\"text\" class=\"form-control\" id=\"search_input\" formControlName=\"search_input\"\n          (ionChange)=\"searchForUsers()\"></ion-input>\n          </ion-col>\n        </ion-row>\n    </form> -->\n  <div class=\"card table-responsive row-12\">\n    <table class=\"table mx-0\">\n      <thead>\n        <tr>\n          <td class=\"w-90\">البنوك والخزائن</td>\n          <td>\n            <div class=\"col\">\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button\n                  color=\"danger\"\n                  [disabled]=\"checkAllBanksForUserDisable(BanksForUser)\"\n                  (click)=\"ChangePermissions(BanksForUser,0)\"\n                  id=\"lock-all\"\n                >\n                  <ion-icon name=\"lock-closed-outline\"></ion-icon>\n                </ion-button>\n              </div>\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button\n                  [disabled]=\"checkAllBanksForUserEnable(BanksForUser)\"\n                  (click)=\"ChangePermissions(BanksForUser,1)\"\n                  id=\"unlock-all\"\n                  ><ion-icon name=\"lock-open-outline\"></ion-icon\n                ></ion-button>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let BankForUser of this.pagingService.Paging(\n          this.filteredBanks,\n          this.page\n        );\">\n          <td>\n            <ion-label [ngClass]=\"BankForUser.have_rights == 0? 'redColor': ''\">\n              {{BankForUser.bank_name}}\n            </ion-label>\n          </td>\n          <td>\n            <div class=\"col\">\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button\n                  color=\"danger\"\n                  [disabled]=\"BankForUser.have_rights == 0\"\n                  (click)=\"ChangePermission(BankForUser,0)\"\n                >\n                  <ion-icon name=\"lock-closed-outline\"></ion-icon\n                ></ion-button>\n              </div>\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button\n                  [disabled]=\"BankForUser.have_rights == 1\"\n                  (click)=\"ChangePermission(BankForUser,1)\"\n                  ><ion-icon name=\"lock-open-outline\"></ion-icon\n                ></ion-button>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <app-pagination [page]=\"page\" [collectionSize]=\"filteredBanks?.length\"\n    (pageChange)=\"changePage($event);\"></app-pagination> \n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_permissions_add-banks-for-user_add-banks-for-user_module_ts.js.map