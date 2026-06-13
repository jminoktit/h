"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_permissions_user-permissions_user-permissions_module_ts"],{

/***/ 36939:
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/user-permissions/user-permissions-routing.module.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPermissionsPageRoutingModule": function() { return /* binding */ UserPermissionsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _user_permissions_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-permissions.page */ 11070);






var routes = [{
  path: '',
  component: _user_permissions_page__WEBPACK_IMPORTED_MODULE_2__.UserPermissionsPage
}];

var UserPermissionsPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UserPermissionsPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UserPermissionsPageRoutingModule);
});

UserPermissionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], UserPermissionsPageRoutingModule);


/***/ }),

/***/ 29650:
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/user-permissions/user-permissions.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPermissionsPageModule": function() { return /* binding */ UserPermissionsPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _user_permissions_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-permissions-routing.module */ 36939);
/* harmony import */ var _user_permissions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-permissions.page */ 11070);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/components.module */ 63430);












var UserPermissionsPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UserPermissionsPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UserPermissionsPageModule);
});

UserPermissionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  declarations: [_user_permissions_page__WEBPACK_IMPORTED_MODULE_3__.UserPermissionsPage],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _user_permissions_routing_module__WEBPACK_IMPORTED_MODULE_2__.UserPermissionsPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
})], UserPermissionsPageModule);


/***/ }),

/***/ 11070:
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/permissions/user-permissions/user-permissions.page.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPermissionsPage": function() { return /* binding */ UserPermissionsPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _user_permissions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-permissions.page.html?ngResource */ 3399);
/* harmony import */ var _user_permissions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-permissions.page.scss?ngResource */ 55167);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 74876);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);


















var UserPermissionsPage = /*#__PURE__*/function () {
  function UserPermissionsPage(env, http, alertController, modal, formBuilder, datepipe, translate, pagingService, alertService, document) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserPermissionsPage);

    this.env = env;
    this.http = http;
    this.alertController = alertController;
    this.modal = modal;
    this.formBuilder = formBuilder;
    this.datepipe = datepipe;
    this.translate = translate;
    this.pagingService = pagingService;
    this.alertService = alertService;
    this.document = document;
    this.showLoader = false;
    this.initialLoad = true;
    this.permissions = [];
    this.userPage = 1;

    this.changePaginationPage = function (newPage) {
      _this.userPage = newPage;
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UserPermissionsPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.translate.get("days.saturday").toPromise();

              case 2:
                _context.t0 = _context.sent;
                _context.t1 = [_context.t0, "1"];
                _context.next = 6;
                return this.translate.get("days.sunday").toPromise();

              case 6:
                _context.t2 = _context.sent;
                _context.t3 = [_context.t2, "2"];
                _context.next = 10;
                return this.translate.get("days.monday").toPromise();

              case 10:
                _context.t4 = _context.sent;
                _context.t5 = [_context.t4, "3"];
                _context.next = 14;
                return this.translate.get("days.tuesday").toPromise();

              case 14:
                _context.t6 = _context.sent;
                _context.t7 = [_context.t6, "4"];
                _context.next = 18;
                return this.translate.get("days.wednesday").toPromise();

              case 18:
                _context.t8 = _context.sent;
                _context.t9 = [_context.t8, "5"];
                _context.next = 22;
                return this.translate.get("days.thursday").toPromise();

              case 22:
                _context.t10 = _context.sent;
                _context.t11 = [_context.t10, "6"];
                _context.next = 26;
                return this.translate.get("days.friday").toPromise();

              case 26:
                _context.t12 = _context.sent;
                _context.t13 = [_context.t12, "7"];
                this.days = [_context.t1, _context.t3, _context.t5, _context.t7, _context.t9, _context.t11, _context.t13];
                this.permissionDateForm = this.formBuilder.group({
                  startDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
                  endDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
                  workingDays: [""]
                });
                this.permissionTimeForm = this.formBuilder.group({
                  startTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
                  endTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
                });

              case 31:
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
    key: "userSelected",
    value: function userSelected(user) {
      var _this2 = this;

      this.selectedUser = user;
      this.showLoader = true;
      this.http.post(this.env.API_URL + "api/Permissions/GetUserPermissions", user).subscribe({
        next: function next(data) {
          _this2.permissions = data["permissions"];
          _this2.showLoader = false;
        },
        error: function error(err) {
          console.log(err.message);
          _this2.showLoader = false;
        }
      });
    }
  }, {
    key: "ChangePermission",
    value: function ChangePermission(permission, value) {
      var _this3 = this;

      this.showLoader = true;
      var changedPermission = {
        feature_description: permission.feature_description,
        feature_name: permission.feature_name,
        feature_number: permission.feature_number,
        feature_type: permission.feature_type,
        permission: value,
        branch_code: permission.branch_code,
        org_code: permission.org_code,
        username: permission.username,
        work_end_date: permission.work_end_date,
        work_start_date: permission.work_start_date,
        working_days: permission.working_days,
        work_start_time: permission.work_start_time,
        work_end_time: permission.work_end_time
      };
      this.http.put(this.env.API_URL + "api/Permissions/SetUserPermission", changedPermission).subscribe({
        next: function next(data) {
          console.log(data);
          _this3.permissions = data["permissions"];
          _this3.showLoader = false;
        },
        error: function error(err) {
          console.log(err.message);
          _this3.showLoader = false;
        }
      });
    }
  }, {
    key: "ChangePermissionDate",
    value: function ChangePermissionDate(permission) {
      var _this4 = this;

      this.showLoader = true;
      var changedPermission = {
        feature_description: permission.feature_description,
        feature_name: permission.feature_name,
        feature_number: permission.feature_number,
        feature_type: permission.feature_type,
        permission: permission.permission,
        branch_code: permission.branch_code,
        org_code: permission.org_code,
        username: permission.username,
        work_end_date: this.permissionDateFormControls.endDate.value,
        work_start_date: this.permissionDateFormControls.startDate.value,
        working_days: this.permissionDateFormControls.workingDays.value.toString(),
        work_start_time: permission.work_start_time,
        work_end_time: permission.work_end_time
      };
      this.http.put(this.env.API_URL + "api/Permissions/SetUserPermission", changedPermission).subscribe({
        next: function next(data) {
          console.log(data);
          _this4.permissions = data["permissions"];
          _this4.showLoader = false;
        },
        error: function error(err) {
          console.log(err.message);
          _this4.showLoader = false;
        }
      });
    }
  }, {
    key: "ChangePermissionsDate",
    value: function ChangePermissionsDate(permissions) {
      var _this5 = this;

      this.showLoader = true;
      var newPermissions = [];
      permissions.forEach(function (permission) {
        var changedPermission = {
          feature_description: permission.feature_description,
          feature_name: permission.feature_name,
          feature_number: permission.feature_number,
          feature_type: permission.feature_type,
          permission: permission.permission,
          branch_code: permission.branch_code,
          org_code: permission.org_code,
          username: permission.username,
          work_end_date: _this5.permissionDateFormControls.endDate.value,
          work_start_date: _this5.permissionDateFormControls.startDate.value,
          working_days: _this5.permissionDateFormControls.workingDays.value.toString(),
          work_start_time: permission.work_start_time,
          work_end_time: permission.work_end_time
        };
        newPermissions.push(changedPermission);
      });
      this.http.put(this.env.API_URL + "api/Permissions/SetUserPermissions", newPermissions).subscribe({
        next: function next(data) {
          console.log(data);
          _this5.permissions = data["permissions"];
          _this5.showLoader = false;
        },
        error: function error(err) {
          console.log(err.message);
          _this5.showLoader = false;
        }
      });
    }
  }, {
    key: "ChangePermissionTime",
    value: function ChangePermissionTime(permission) {
      var _this6 = this;

      this.showLoader = true;
      console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.permissionTimeFormControls.startTime.value, "hh:mm", new Date()));
      console.log(this.permissionTimeFormControls.startTime.value);
      var changedPermission = {
        feature_description: permission.feature_description,
        feature_name: permission.feature_name,
        feature_number: permission.feature_number,
        feature_type: permission.feature_type,
        permission: permission.permission,
        branch_code: permission.branch_code,
        org_code: permission.org_code,
        username: permission.username,
        work_end_date: permission.work_end_date,
        work_start_date: permission.work_start_date,
        working_days: permission.working_days,
        work_start_time: this.permissionTimeFormControls.startTime.value,
        work_end_time: this.permissionTimeFormControls.endTime.value
      };
      this.http.put(this.env.API_URL + "api/Permissions/SetUserPermission", changedPermission).subscribe({
        next: function next(data) {
          console.log(data);
          _this6.permissions = data["permissions"];
          _this6.showLoader = false;
        },
        error: function error(err) {
          console.log(err.message);
          _this6.showLoader = false;
        }
      });
    }
  }, {
    key: "ChangePermissionsTime",
    value: function ChangePermissionsTime(permissions) {
      var _this7 = this;

      this.showLoader = true;
      var newPermissions = [];
      permissions.forEach(function (permission) {
        var changedPermission = {
          feature_description: permission.feature_description,
          feature_name: permission.feature_name,
          feature_number: permission.feature_number,
          feature_type: permission.feature_type,
          permission: permission.permission,
          branch_code: permission.branch_code,
          org_code: permission.org_code,
          username: permission.username,
          work_end_date: permission.work_end_date,
          work_start_date: permission.work_start_date,
          working_days: permission.working_days,
          work_start_time: _this7.permissionTimeFormControls.startTime.value,
          work_end_time: _this7.permissionTimeFormControls.endTime.value
        };
        newPermissions.push(changedPermission);
      });
      this.http.put(this.env.API_URL + "api/Permissions/SetUserPermissions", newPermissions).subscribe({
        next: function next(data) {
          console.log(data);
          _this7.permissions = data["permissions"];
          _this7.showLoader = false;
        },
        error: function error(err) {
          console.log(err.message);
          _this7.showLoader = false;
        }
      });
    }
  }, {
    key: "ChangePermissions",
    value: function ChangePermissions(permissions, value) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var _this8 = this;

        var newPermissions, alertText;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.showLoader = true;
                newPermissions = [];
                permissions.forEach(function (permission) {
                  var changedPermission = {
                    feature_description: permission.feature_description,
                    feature_name: permission.feature_name,
                    feature_number: permission.feature_number,
                    feature_type: permission.feature_type,
                    permission: value,
                    branch_code: permission.branch_code,
                    org_code: permission.org_code,
                    username: permission.username,
                    work_end_date: permission.work_end_date,
                    work_start_date: permission.work_start_date,
                    working_days: permission.working_days,
                    work_start_time: permission.work_start_time,
                    work_end_time: permission.work_end_time
                  };
                  newPermissions.push(changedPermission);
                });
                alertText = value == 1 ? "منح" : "إلغاء";
                _context2.t0 = permissions.length > 0;

                if (!_context2.t0) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 8;
                return this.alertService.SaveAlert("\u0647\u0644 \u062A\u0631\u064A\u062F ".concat(alertText, " \u062C\u0645\u064A\u0639 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A\u061F"));

              case 8:
                _context2.t0 = !_context2.sent;

              case 9:
                if (!_context2.t0) {
                  _context2.next = 12;
                  break;
                }

                this.showLoader = false;
                return _context2.abrupt("return");

              case 12:
                this.http.put(this.env.API_URL + "api/Permissions/SetUserPermissions", newPermissions).subscribe({
                  next: function next(data) {
                    console.log(data);
                    _this8.permissions = data["permissions"];
                    _this8.showLoader = false;
                  },
                  error: function error(err) {
                    console.log(err.message);
                    _this8.showLoader = false;
                  }
                });

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "DeselectUser",
    value: function DeselectUser() {
      this.selectedUser = null;
    }
  }, {
    key: "cancelModal",
    value: function cancelModal() {
      this.modal.dismiss(null, "cancel");
    }
  }, {
    key: "confirmModal",
    value: function confirmModal(date) {
      this.modal.dismiss(date, "confirm");
    }
  }, {
    key: "onWillDismiss",
    value: function onWillDismiss(event) {
      var ev = event;

      if (ev.detail.role === "confirm") {
        if (ev.detail.data == true) {
          if (!this.selectedAllPermissions) {
            this.ChangePermissionDate(this.selectedPermission);
          } else {
            this.ChangePermissionsDate(this.permissions);
          }
        } else {
          if (!this.selectedAllPermissions) {
            this.ChangePermissionTime(this.selectedPermission);
          } else {
            this.ChangePermissionsTime(this.permissions);
          }
        }
      }
    }
  }, {
    key: "onDidDismiss",
    value: function onDidDismiss(event) {
      var ev = event;
      this.permissionDateForm = this.formBuilder.group({
        startDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        endDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        workingDays: [""]
      });
      this.permissionTimeForm = this.formBuilder.group({
        startTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        endTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
      });
      this.selectedPermission = null;
      this.selectedAllPermissions = false;
      this.isDateModalOpen = false;
      this.isTimeModalOpen = false;
    }
  }, {
    key: "onWillPresentDate",
    value: function onWillPresentDate(event) {
      console.log(this.selectedPermission, "permission");
      console.log(this.selectedAllPermissions, "boolean");
    }
  }, {
    key: "onWillPresentTime",
    value: function onWillPresentTime(event) {
      console.log(this.selectedPermission, "permission");
      console.log(this.selectedAllPermissions, "boolean");
    }
  }, {
    key: "PermChosenForDateEdit",
    value: function PermChosenForDateEdit(permission, all) {
      this.selectedAllPermissions = all;
      this.selectedPermission = permission;
      this.isDateModalOpen = true;

      if (!all) {
        this.permissionDateForm.patchValue({
          startDate: this.datepipe.transform(new Date(this.selectedPermission.work_start_date), "yyyy-MM-dd"),
          endDate: this.datepipe.transform(new Date(this.selectedPermission.work_end_date), "yyyy-MM-dd"),
          workingDays: this.selectedPermission.working_days.split(",")
        });
      } else {
        this.permissionDateForm.patchValue({
          startDate: this.datepipe.transform(new Date(), "yyyy-MM-dd"),
          endDate: this.datepipe.transform(new Date(), "yyyy-MM-dd"),
          workingDays: []
        });
      }
    }
  }, {
    key: "PermChosenForTimeEdit",
    value: function PermChosenForTimeEdit(permission, all) {
      this.selectedAllPermissions = all;
      this.selectedPermission = permission;
      this.isTimeModalOpen = true;

      if (!all) {
        this.permissionTimeForm.patchValue({
          startTime: permission.work_start_time,
          endTime: permission.work_end_time
        });
      } else {
        this.permissionTimeForm.patchValue({
          startTime: "00:00",
          endTime: "23:59"
        });
      }
    }
  }, {
    key: "permissionDateFormControls",
    get: function get() {
      return this.permissionDateForm.controls;
    }
  }, {
    key: "permissionTimeFormControls",
    get: function get() {
      return this.permissionTimeForm.controls;
    }
  }, {
    key: "checkAllUserEnable",
    value: function checkAllUserEnable(permissions) {
      return permissions.every(function (item) {
        return item.permission == 1;
      });
    }
  }, {
    key: "checkAllUserDisable",
    value: function checkAllUserDisable(permissions) {
      return permissions.every(function (item) {
        return item.permission == 0;
      });
    }
  }]);

  return UserPermissionsPage;
}();

UserPermissionsPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_6__.pagingService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
  }, {
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT]
    }]
  }];
};

UserPermissionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: "UserPermissions",
  template: _user_permissions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_user_permissions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], UserPermissionsPage);


/***/ }),

/***/ 55167:
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/user-permissions/user-permissions.page.scss?ngResource ***!
  \************************************************************************************************/
/***/ (function(module) {

module.exports = "app-pagination {\n  background: none !important;\n}\n\ndiv[class~=card-header] {\n  border-width: 0px !important;\n}\n\ndiv[class~=card-footer] {\n  border-width: 0px !important;\n}\n\n#selecteduser {\n  width: 100% !important;\n}\n\n#search {\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n}\n\n.hideCol {\n  display: none;\n}\n\n.showCol {\n  display: unset;\n}\n\n.form-control-error {\n  border-color: #ff3366;\n}\n\n.form-control-error:hover {\n  border-color: #da0036;\n}\n\n.input-validator {\n  font-weight: 600;\n  padding-right: 10px;\n  padding-left: 10px;\n  color: #ff3366 !important;\n}\n\n.input-validator::before {\n  content: \"-\";\n  margin-left: 6px;\n}\n\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.input:focus {\n  background-color: var(--input-bg-focus);\n  color: var(--form-text-color);\n}\n\ntd {\n  word-wrap: break-word;\n  white-space: normal;\n}\n\n.vertical-align {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcGVybWlzc2lvbnMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xccGVybWlzc2lvbnNcXHVzZXItcGVybWlzc2lvbnNcXHVzZXItcGVybWlzc2lvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0UsMkJBQUE7QUNWRjs7QURhQTtFQUNFLDRCQUFBO0FDVkY7O0FEYUE7RUFDRSw0QkFBQTtBQ1ZGOztBRGFBO0VBQ0Usc0JBQUE7QUNWRjs7QURZQTtFQUNFLHFDQUFBO0VBQUEsa0NBQUE7RUFBQSw2QkFBQTtBQ1RGOztBRGdCQTtFQUNFLGFBQUE7QUNiRjs7QURlQTtFQUNFLGNBQUE7QUNaRjs7QURjQTtFQUNFLHFCQUFBO0FDWEY7O0FEWUU7RUFDRSxxQkFBQTtBQ1ZKOztBRGNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNYRjs7QURZRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ1ZKOztBRGVFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDWko7O0FEZ0JBO0VBQ0UsdUNBQUE7RUFDQSw2QkFBQTtBQ2JGOztBRGVBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQ1pGOztBRGNBO0VBQ0Usc0JBQUE7QUNYRiIsImZpbGUiOiJ1c2VyLXBlcm1pc3Npb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4vLyAgICAgZGl2W2NsYXNzfj1cImNhcmRcIl17XHJcbi8vICAgICAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIEBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XHJcbi8vICAgICBkaXZbY2xhc3N+PVwiY2FyZFwiXXtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5hcHAtcGFnaW5hdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5kaXZbY2xhc3N+PVwiY2FyZC1oZWFkZXJcIl0ge1xyXG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmRpdltjbGFzc349XCJjYXJkLWZvb3RlclwiXSB7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI3NlbGVjdGVkdXNlciB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4jc2VhcmNoIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxufVxyXG4vLyBkaXZbY2xhc3N+PVwiY2FyZC1ib2R5XCJde1xyXG4vLyAgICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xyXG4vLyAgICAgaGVpZ2h0OiAyNSUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLmhpZGVDb2wge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNob3dDb2wge1xyXG4gIGRpc3BsYXk6IHVuc2V0O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wtZXJyb3Ige1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgNTEsIDEwMik7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTgsIDAsIDU0KTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC12YWxpZGF0b3Ige1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiLVwiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0OmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1iZy1mb2N1cyk7XHJcbiAgY29sb3I6IHZhcigtLWZvcm0tdGV4dC1jb2xvcik7XHJcbn1cclxudGQge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcbi52ZXJ0aWNhbC1hbGlnbiB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4iLCJhcHAtcGFnaW5hdGlvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuZGl2W2NsYXNzfj1jYXJkLWhlYWRlcl0ge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuXG5kaXZbY2xhc3N+PWNhcmQtZm9vdGVyXSB7XG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNzZWxlY3RlZHVzZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4jc2VhcmNoIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5oaWRlQ29sIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3dDb2wge1xuICBkaXNwbGF5OiB1bnNldDtcbn1cblxuLmZvcm0tY29udHJvbC1lcnJvciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzM2Njtcbn1cbi5mb3JtLWNvbnRyb2wtZXJyb3I6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNkYTAwMzY7XG59XG5cbi5pbnB1dC12YWxpZGF0b3Ige1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZmYzMzY2ICFpbXBvcnRhbnQ7XG59XG4uaW5wdXQtdmFsaWRhdG9yOjpiZWZvcmUge1xuICBjb250ZW50OiBcIi1cIjtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmZvcm0tbGFiZWwtcmVxdWlyZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCIqXCI7XG4gIGNvbG9yOiAjZmYzMzY2ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LWJnLWZvY3VzKTtcbiAgY29sb3I6IHZhcigtLWZvcm0tdGV4dC1jb2xvcik7XG59XG5cbnRkIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4udmVydGljYWwtYWxpZ24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSJdfQ== */";

/***/ }),

/***/ 3399:
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/user-permissions/user-permissions.page.html?ngResource ***!
  \************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<app-user-search\n  *ngIf=\"selectedUser == null || selectedUser == undefined\"\n  [resultType]=\"0\"\n  (selectedUser)=\"userSelected($event)\"\n>\n</app-user-search>\n<div *ngIf=\"selectedUser != null && selectedUser != undefined\" class=\"col\">\n  <div class=\"d-flex justify-content-between\">\n    <div\n      class=\"card px-1 py-1 my-1 mx-1 text-center row-12 d-flex justify-content-center\"\n      id=\"selecteduser\"\n    >\n      <div class=\"card-body py-2\">\n        <div class=\"card-text\">\n          <div class=\"row\">\n            <div class=\"col-4 align-self-center\">\n              {{selectedUser.branch_name}}\n            </div>\n            <div class=\"col-4 align-self-center\">\n              {{selectedUser.user_name}}\n            </div>\n            <div class=\"col-4 align-self-center\">\n              <ion-button (click)=\"DeselectUser()\"\n                ><ion-icon name=\"arrow-back-outline\"></ion-icon\n              ></ion-button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card table-responsive row-12\">\n    <table class=\"table mx-0\">\n      <thead>\n        <tr>\n          <td class=\"w-90\">الاسم</td>\n          <td>\n            <div class=\"col\">\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button (click)=\"PermChosenForDateEdit(null,true)\">\n                  <ion-icon name=\"calendar-outline\"></ion-icon>\n                </ion-button>\n              </div>\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button (click)=\"PermChosenForTimeEdit(null,true)\">\n                  <ion-icon name=\"alarm-outline\"></ion-icon>\n                </ion-button>\n              </div>\n            </div>\n          </td>\n          <td>\n            <div class=\"col\">\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button\n                  color=\"danger\"\n                  [disabled]=\"checkAllUserDisable(permissions)\"\n                  (click)=\"ChangePermissions(permissions,0)\"\n                  id=\"lock-all\"\n                >\n                  <ion-icon name=\"lock-closed-outline\"></ion-icon>\n                </ion-button>\n              </div>\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button\n                  [disabled]=\"checkAllUserEnable(permissions)\"\n                  (click)=\"ChangePermissions(permissions,1)\"\n                  id=\"unlock-all\"\n                  ><ion-icon name=\"lock-open-outline\"></ion-icon\n                ></ion-button>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let permission of this.pagingService.Paging(permissions, userPage)\">\n          <td>\n            <ion-label [color]=\"permission.permission == 0?'danger':''\">\n              {{permission.feature_name}}\n            </ion-label>\n          </td>\n          <td>\n            <div class=\"col\">\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button (click)=\"PermChosenForDateEdit(permission,false)\">\n                  <ion-icon name=\"calendar-outline\"></ion-icon>\n                </ion-button>\n              </div>\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button (click)=\"PermChosenForTimeEdit(permission,false)\">\n                  <ion-icon name=\"alarm-outline\"></ion-icon>\n                </ion-button>\n              </div>\n            </div>\n          </td>\n          <td>\n            <div class=\"col\">\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button\n                  color=\"danger\"\n                  [disabled]=\"permission.permission == 0\"\n                  (click)=\"ChangePermission(permission,0)\"\n                >\n                  <ion-icon name=\"lock-closed-outline\"></ion-icon\n                ></ion-button>\n              </div>\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button\n                  [disabled]=\"permission.permission == 1\"\n                  (click)=\"ChangePermission(permission,1)\"\n                  ><ion-icon name=\"lock-open-outline\"></ion-icon\n                ></ion-button>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    \n    <ion-modal\n      (willDismiss)=\"onWillDismiss($event)\"\n      (didDismiss)=\"onDidDismiss($event)\"\n      (willPresent)=\"onWillPresentDate($event)\"\n      [isOpen]=\"isDateModalOpen\"\n    >\n      <ng-template>\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"cancelModal()\"\n                ><ion-icon name=\"ban-outline\"></ion-icon\n              ></ion-button>\n            </ion-buttons>\n            <ion-title>أدخل تاريخ العمل المسموح به</ion-title>\n            <ion-buttons slot=\"end\">\n              <ion-button (click)=\"confirmModal(true)\" [strong]=\"true\"\n                ><ion-icon name=\"add-outline\"></ion-icon\n              ></ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content class=\"ion-padding\">\n          <form [formGroup]=\"permissionDateForm\">\n            <div class=\"col\">\n              <div class=\"row-12\">\n                <ion-label for=\"startDate\"> تاريخ بدء العمل </ion-label>\n                <ngx-datepicker\n                  [parentForm]=\"permissionDateForm\"\n                  parentFormControllerName=\"startDate\"\n                ></ngx-datepicker>\n              </div>\n              <div class=\"row-12\">\n                <ion-label for=\"endDate\"> تاريخ انتهاء العمل </ion-label>\n                <ngx-datepicker\n                  [parentForm]=\"permissionDateForm\"\n                  parentFormControllerName=\"endDate\"\n                ></ngx-datepicker>\n              </div>\n              <div class=\"row-12\">\n                <ion-label for=\"workingDays\"> أيام العمل في الأسبوع </ion-label>\n                <ion-select\n                  interface=\"popover\"\n                  id=\"workingDays\"\n                  formControlName=\"workingDays\"\n                  multiple=\"true\"\n                >\n                  <ion-select-option *ngFor=\"let day of days\" [value]=\"day[1]\">\n                    {{day[0]}}\n                  </ion-select-option>\n                </ion-select>\n              </div>\n              <!-- <div class=\"row-12\">أيام أسبوع العمل</div> -->\n            </div>\n          </form>\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n    <ion-modal\n      (willDismiss)=\"onWillDismiss($event)\"\n      (didDismiss)=\"onDidDismiss($event)\"\n      (willPresent)=\"onWillPresentTime($event)\"\n      [isOpen]=\"isTimeModalOpen\"\n    >\n      <ng-template>\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"cancelModal()\"\n                ><ion-icon name=\"ban-outline\"></ion-icon\n              ></ion-button>\n            </ion-buttons>\n            <ion-title>أدخل مدة العمل المسموح بها</ion-title>\n            <ion-buttons slot=\"end\">\n              <ion-button (click)=\"confirmModal(false)\" [strong]=\"true\"\n                ><ion-icon name=\"add-outline\"></ion-icon\n              ></ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content class=\"ion-padding\">\n          <form [formGroup]=\"permissionTimeForm\">\n            <div class=\"col\">\n              <div class=\"row-12\">\n                <ion-item lines=\"none\">\n                  <ion-label> وقت بداية العمل </ion-label>\n                  <ion-datetime-button\n                    datetime=\"startTime\"\n                    slot=\"end\"\n                  ></ion-datetime-button>\n                  <ion-modal [keepContentsMounted]=\"true\">\n                    <ng-template>\n                      <ion-datetime\n                        presentation=\"time\"\n                        id=\"startTime\"\n                        formControlName=\"startTime\"\n                        hourCycle=\"h23\"\n                        locale=\"en\"\n                      ></ion-datetime>\n                    </ng-template>\n                  </ion-modal>\n                </ion-item>\n              </div>\n              <div class=\"row-12\">\n                <ion-item lines=\"none\">\n                  <ion-label> وقت انتهاء العمل </ion-label>\n                  <ion-datetime-button\n                    datetime=\"endTime\"\n                    slot=\"end\"\n                  ></ion-datetime-button>\n                  <ion-modal [keepContentsMounted]=\"true\">\n                    <ng-template>\n                      <ion-datetime\n                        presentation=\"time\"\n                        id=\"endTime\"\n                        formControlName=\"endTime\"\n                        hourCycle=\"h23\"\n                        locale=\"en\"\n                      ></ion-datetime>\n                    </ng-template>\n                  </ion-modal>\n                </ion-item>\n              </div>\n            </div>\n          </form>\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n  </div>\n  <app-pagination class=\"ion-padding\"\n          [page]=\"userPage\"\n          [collectionSize]=\"permissions?.length\"\n          (pageChange)=\"changePaginationPage($event);\"\n        ></app-pagination>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_permissions_user-permissions_user-permissions_module_ts.js.map