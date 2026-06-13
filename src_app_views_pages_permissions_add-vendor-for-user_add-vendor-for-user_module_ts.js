"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_permissions_add-vendor-for-user_add-vendor-for-user_module_ts"],{

/***/ 40460:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/add-vendor-for-user/add-vendor-for-user-routing.module.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddVendorForUserPageRoutingModule": function() { return /* binding */ AddVendorForUserPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _add_vendor_for_user_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-vendor-for-user.page */ 86983);






var routes = [{
  path: '',
  component: _add_vendor_for_user_page__WEBPACK_IMPORTED_MODULE_2__.AddVendorForUserPage
}];

var AddVendorForUserPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AddVendorForUserPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddVendorForUserPageRoutingModule);
});

AddVendorForUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], AddVendorForUserPageRoutingModule);


/***/ }),

/***/ 11505:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/add-vendor-for-user/add-vendor-for-user.module.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddVendorForUserPageModule": function() { return /* binding */ AddVendorForUserPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _add_vendor_for_user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-vendor-for-user-routing.module */ 40460);
/* harmony import */ var _add_vendor_for_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-vendor-for-user.page */ 86983);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var AddVendorForUserPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AddVendorForUserPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddVendorForUserPageModule);
});

AddVendorForUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _add_vendor_for_user_routing_module__WEBPACK_IMPORTED_MODULE_2__.AddVendorForUserPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_add_vendor_for_user_page__WEBPACK_IMPORTED_MODULE_3__.AddVendorForUserPage]
})], AddVendorForUserPageModule);


/***/ }),

/***/ 86983:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/add-vendor-for-user/add-vendor-for-user.page.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddVendorForUserPage": function() { return /* binding */ AddVendorForUserPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _add_vendor_for_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-vendor-for-user.page.html?ngResource */ 11412);
/* harmony import */ var _add_vendor_for_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-vendor-for-user.page.scss?ngResource */ 73390);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);













var AddVendorForUserPage = /*#__PURE__*/function () {
  function AddVendorForUserPage(env, http, translate, alertService, document) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddVendorForUserPage);

    this.env = env;
    this.http = http;
    this.translate = translate;
    this.alertService = alertService;
    this.document = document;
    this.showLoader = false;
    this.initialLoad = true;
    this.VendorReferences = [];
    this.VendorForUsers = [];
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddVendorForUserPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.GetVendor();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {}
  }, {
    key: "GetVendor",
    value: function GetVendor() {
      var _this = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/Settings/GetAllVendors").subscribe({
        next: function next(data) {
          _this.VendorReferences = data["VendorReferences"];
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
      this.http.get(this.env.API_URL + "api/Settings/GetVendorsByUser?user_name=".concat(user.user_name)).subscribe({
        next: function next(data) {
          _this2.VendorForUsers = data;
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
    }
  }, {
    key: "ChangePermissions",
    value: function ChangePermissions(VendorForUsers, value) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this3 = this;

        var alertText;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                alertText = value == 1 ? "منح" : "إلغاء";
                _context.next = 3;
                return this.alertService.SaveAlert("\u0647\u0644 \u062A\u0631\u064A\u062F ".concat(alertText, " \u062C\u0645\u064A\u0639 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A\u061F"));

              case 3:
                if (_context.sent) {
                  _context.next = 6;
                  break;
                }

                this.showLoader = false;
                return _context.abrupt("return");

              case 6:
                if (value === 1) {
                  this.http.post(this.env.API_URL + "api/Settings/GetvendorsAllowForUser?vendor_code=".concat(1, "&user_name=", this.selectedUser.user_name), {}).subscribe({
                    next: function next(data) {
                      VendorForUsers.forEach(function (x) {
                        x.permission = 1;
                      });
                      _this3.showLoader = false;
                    },
                    error: function error(err) {
                      console.log(err.message);
                      _this3.showLoader = false;
                    }
                  });
                } else {
                  this.http.post(this.env.API_URL + "api/Settings/GetVendorsNotAllowForUser?vendor_code=".concat(0, "&user_name=", this.selectedUser.user_name), {}).subscribe({
                    next: function next(data) {
                      VendorForUsers.forEach(function (x) {
                        x.permission = 0;
                      });
                      _this3.showLoader = false;
                    },
                    error: function error(err) {
                      console.log(err.message);
                      _this3.showLoader = false;
                    }
                  });
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "ChangePermission",
    value: function ChangePermission(VendorForUser, value) {
      var _this4 = this;

      this.showLoader = true;

      if (value === 1) {
        this.http.post(this.env.API_URL + "api/Settings/GetVendorAllowForUser?vendor_code=".concat(VendorForUser.vendor_code, "&user_name=").concat(this.selectedUser.user_name), {}).subscribe({
          next: function next(data) {
            VendorForUser.permission = 1;
            _this4.showLoader = false;
          },
          error: function error(err) {
            console.log(err.message);
            _this4.showLoader = false;
          }
        });
      } else {
        this.http.post(this.env.API_URL + "api/Settings/GetVendorNotAllowForUser?vendor_code=".concat(VendorForUser.vendor_code, "&user_name=").concat(this.selectedUser.user_name), {}).subscribe({
          next: function next(data) {
            VendorForUser.permission = 0;
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
    key: "checkAllVendorEnable",
    value: function checkAllVendorEnable(VendorForUser) {
      return VendorForUser.every(function (item) {
        return item.permission == 1;
      });
    }
  }, {
    key: "checkAllVendorDisable",
    value: function checkAllVendorDisable(VendorForUser) {
      return VendorForUser.every(function (item) {
        return item.permission == 0;
      });
    }
  }]);

  return AddVendorForUserPage;
}();

AddVendorForUserPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }, {
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
    }]
  }];
};

AddVendorForUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: "app-add-vendor-for-user",
  template: _add_vendor_for_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_add_vendor_for_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], AddVendorForUserPage);


/***/ }),

/***/ 73390:
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/add-vendor-for-user/add-vendor-for-user.page.scss?ngResource ***!
  \******************************************************************************************************/
/***/ (function(module) {

module.exports = "app-pagination {\n  background: none !important;\n}\n\ndiv[class~=card-header] {\n  border-width: 0px !important;\n}\n\ndiv[class~=card-footer] {\n  border-width: 0px !important;\n}\n\n#selecteduser {\n  width: 100% !important;\n}\n\n#search {\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n}\n\n.hideCol {\n  display: none;\n}\n\n.showCol {\n  display: unset;\n}\n\n.form-control-error {\n  border-color: #ff3366;\n}\n\n.form-control-error:hover {\n  border-color: #da0036;\n}\n\n.input-validator {\n  font-weight: 600;\n  padding-right: 10px;\n  padding-left: 10px;\n  color: #ff3366 !important;\n}\n\n.input-validator::before {\n  content: \"-\";\n  margin-left: 6px;\n}\n\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.input:focus {\n  background-color: var(--input-bg-focus);\n  color: var(--form-text-color);\n}\n\ntd {\n  word-wrap: break-word;\n  white-space: normal;\n}\n\n.vertical-align {\n  vertical-align: middle;\n}\n\n.redColor {\n  color: #ff3366 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC12ZW5kb3ItZm9yLXVzZXIucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xccGVybWlzc2lvbnNcXGFkZC12ZW5kb3ItZm9yLXVzZXJcXGFkZC12ZW5kb3ItZm9yLXVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0ksMkJBQUE7QUNWSjs7QURhRTtFQUNFLDRCQUFBO0FDVko7O0FEYUU7RUFDRSw0QkFBQTtBQ1ZKOztBRGFFO0VBQ0Usc0JBQUE7QUNWSjs7QURZRTtFQUNFLHFDQUFBO0VBQUEsa0NBQUE7RUFBQSw2QkFBQTtBQ1RKOztBRGdCRTtFQUNFLGFBQUE7QUNiSjs7QURlRTtFQUNFLGNBQUE7QUNaSjs7QURjRTtFQUNFLHFCQUFBO0FDWEo7O0FEWUk7RUFDRSxxQkFBQTtBQ1ZOOztBRGNFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNYSjs7QURZSTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ1ZOOztBRGVJO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDWk47O0FEZ0JFO0VBQ0UsdUNBQUE7RUFDQSw2QkFBQTtBQ2JKOztBRGVFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQ1pKOztBRGNFO0VBQ0Usc0JBQUE7QUNYSjs7QURjRTtFQUVFLHlCQUFBO0FDWkoiLCJmaWxlIjoiYWRkLXZlbmRvci1mb3ItdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuLy8gICAgIGRpdltjbGFzc349XCJjYXJkXCJde1xyXG4vLyAgICAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBAbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4vLyAgICAgZGl2W2NsYXNzfj1cImNhcmRcIl17XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuYXBwLXBhZ2luYXRpb24ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBkaXZbY2xhc3N+PVwiY2FyZC1oZWFkZXJcIl0ge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgZGl2W2NsYXNzfj1cImNhcmQtZm9vdGVyXCJdIHtcclxuICAgIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gICNzZWxlY3RlZHVzZXIge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgI3NlYXJjaCB7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLy8gZGl2W2NsYXNzfj1cImNhcmQtYm9keVwiXXtcclxuICAvLyAgICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xyXG4gIC8vICAgICBoZWlnaHQ6IDI1JSAhaW1wb3J0YW50O1xyXG4gIC8vIH1cclxuICBcclxuICAuaGlkZUNvbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuc2hvd0NvbCB7XHJcbiAgICBkaXNwbGF5OiB1bnNldDtcclxuICB9XHJcbiAgLmZvcm0tY29udHJvbC1lcnJvciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIxOCwgMCwgNTQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaW5wdXQtdmFsaWRhdG9yIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIi1cIjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtcmVxdWlyZWQge1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIipcIjtcclxuICAgICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dDpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1iZy1mb2N1cyk7XHJcbiAgICBjb2xvcjogdmFyKC0tZm9ybS10ZXh0LWNvbG9yKTtcclxuICB9XHJcbiAgdGQge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB9XHJcbiAgLnZlcnRpY2FsLWFsaWduIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5yZWRDb2xvclxyXG4gIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKSAhaW1wb3J0YW50O1xyXG4gIH0iLCJhcHAtcGFnaW5hdGlvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuZGl2W2NsYXNzfj1jYXJkLWhlYWRlcl0ge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuXG5kaXZbY2xhc3N+PWNhcmQtZm9vdGVyXSB7XG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNzZWxlY3RlZHVzZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4jc2VhcmNoIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5oaWRlQ29sIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3dDb2wge1xuICBkaXNwbGF5OiB1bnNldDtcbn1cblxuLmZvcm0tY29udHJvbC1lcnJvciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzM2Njtcbn1cbi5mb3JtLWNvbnRyb2wtZXJyb3I6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNkYTAwMzY7XG59XG5cbi5pbnB1dC12YWxpZGF0b3Ige1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZmYzMzY2ICFpbXBvcnRhbnQ7XG59XG4uaW5wdXQtdmFsaWRhdG9yOjpiZWZvcmUge1xuICBjb250ZW50OiBcIi1cIjtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmZvcm0tbGFiZWwtcmVxdWlyZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCIqXCI7XG4gIGNvbG9yOiAjZmYzMzY2ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWJnLWZvY3VzKTtcbiAgY29sb3I6IHZhcigtLWZvcm0tdGV4dC1jb2xvcik7XG59XG5cbnRkIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4udmVydGljYWwtYWxpZ24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ucmVkQ29sb3Ige1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 11412:
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/add-vendor-for-user/add-vendor-for-user.page.html?ngResource ***!
  \******************************************************************************************************/
/***/ (function(module) {

module.exports = " <app-loader [isVisible]=\"showLoader\"></app-loader>\n<app-user-search\n  *ngIf=\"selectedUser == null || selectedUser == undefined\"\n  [resultType]=\"0\"\n  (selectedUser)=\"userSelected($event)\"\n>\n</app-user-search>\n<div *ngIf=\"selectedUser != null && selectedUser != undefined\" class=\"col\">\n  <div class=\"d-flex justify-content-between\">\n    <div\n      class=\"card px-1 py-1 my-1 mx-1 text-center row-12 d-flex justify-content-center\"\n      id=\"selecteduser\"\n    >\n      <div class=\"card-body py-2\">\n        <div class=\"card-text\">\n          <div class=\"row\">\n            <div class=\"col-4 align-self-center\">\n              {{selectedUser.branch_name}}\n            </div>\n            <div class=\"col-4 align-self-center\">\n              {{selectedUser.user_name}}\n            </div>\n            <div class=\"col-4 align-self-center\">\n              <ion-button (click)=\"DeselectUser()\"\n                ><ion-icon name=\"arrow-back-outline\"></ion-icon\n              ></ion-button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card table-responsive row-12\">\n    <table class=\"table mx-0\">\n      <thead>\n        <tr>\n          <td class=\"w-90\">الموردين</td>\n          <td>\n            <div class=\"col\">\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button\n                  color=\"danger\"\n                  [disabled]=\"checkAllVendorDisable(VendorForUsers)\"\n                  (click)=\"ChangePermissions(VendorForUsers,0)\"\n                  id=\"lock-all\"\n                >\n                  <ion-icon name=\"lock-closed-outline\"></ion-icon>\n                </ion-button>\n              </div>\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button\n                  [disabled]=\"checkAllVendorEnable(VendorForUsers)\"\n                  (click)=\"ChangePermissions(VendorForUsers,1)\"\n                  id=\"unlock-all\"\n                  ><ion-icon name=\"lock-open-outline\"></ion-icon\n                ></ion-button>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let VendorForUser of VendorForUsers\">\n          <td>\n            <ion-label [ngClass]=\"VendorForUser.permission == 0? 'redColor': ''\">\n              {{VendorForUser.vendor_name}}\n            </ion-label>\n          </td>\n          <td>\n            <div class=\"col\">\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button\n                  color=\"danger\"\n                  [disabled]=\"VendorForUser.permission == 0\"\n                  (click)=\"ChangePermission(VendorForUser,0)\"\n                >\n                  <ion-icon name=\"lock-closed-outline\"></ion-icon\n                ></ion-button>\n              </div>\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button\n                  [disabled]=\"VendorForUser.permission == 1\"\n                  (click)=\"ChangePermission(VendorForUser,1)\"\n                  ><ion-icon name=\"lock-open-outline\"></ion-icon\n                ></ion-button>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  \n</div>\n\n  \n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_permissions_add-vendor-for-user_add-vendor-for-user_module_ts.js.map