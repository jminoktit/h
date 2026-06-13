"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_permissions_group-permissions_group-permissions_module_ts"],{

/***/ 14091:
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/group-permissions/group-permissions-routing.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupPermissionsPageRoutingModule": function() { return /* binding */ GroupPermissionsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _group_permissions_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-permissions.page */ 40537);






var routes = [{
  path: '',
  component: _group_permissions_page__WEBPACK_IMPORTED_MODULE_2__.GroupPermissionsPage
}];

var GroupPermissionsPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function GroupPermissionsPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GroupPermissionsPageRoutingModule);
});

GroupPermissionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], GroupPermissionsPageRoutingModule);


/***/ }),

/***/ 79296:
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/group-permissions/group-permissions.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupPermissionsPageModule": function() { return /* binding */ GroupPermissionsPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _group_permissions_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-permissions-routing.module */ 14091);
/* harmony import */ var _group_permissions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-permissions.page */ 40537);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/components.module */ 63430);












var GroupPermissionsPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function GroupPermissionsPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GroupPermissionsPageModule);
});

GroupPermissionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  declarations: [_group_permissions_page__WEBPACK_IMPORTED_MODULE_3__.GroupPermissionsPage],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _group_permissions_routing_module__WEBPACK_IMPORTED_MODULE_2__.GroupPermissionsPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
})], GroupPermissionsPageModule);


/***/ }),

/***/ 40537:
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/group-permissions/group-permissions.page.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupPermissionsPage": function() { return /* binding */ GroupPermissionsPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _group_permissions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-permissions.page.html?ngResource */ 39449);
/* harmony import */ var _group_permissions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-permissions.page.scss?ngResource */ 46306);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 74876);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);

















var GroupPermissionsPage = /*#__PURE__*/function () {
  function GroupPermissionsPage(env, http, alertController, modal, formBuilder, datepipe, pagingService, alertService, document) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, GroupPermissionsPage);

    this.env = env;
    this.http = http;
    this.alertController = alertController;
    this.modal = modal;
    this.formBuilder = formBuilder;
    this.datepipe = datepipe;
    this.pagingService = pagingService;
    this.alertService = alertService;
    this.document = document;
    this.showLoader = false;
    this.initialLoad = true;
    this.groups = [];
    this.days = [["السبت", "1"], ["الأحد", "2"], ["الاثنين", "3"], ["الثلاثاء", "4"], ["الأربعاء", "5"], ["الخميس", "6"], ["الجمعة", "7"]];
    this.permissions = [];
    this.sortTypes = ["لم يتم تحديد أي اختيار", "ترتيب تصاعديا", "ترتيب تنازلي"];
    this.groupSortVal = "0";
    this.groupPage = 1;
    this.page = 1; // the page we are viewing

    this.totalPages = 1; // calculate by the pageSize and resultcount this.totalPages = (Math.trunc(x) < (this.resultsCount/this.pageSize)) ? Math.trunc(x)+1:Math.trunc(x) ;

    this.changePaginationPage = function (newPage) {
      _this.groupPage = newPage;
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(GroupPermissionsPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.pageSize = this.pagingService.getPageSizeFromLocalStorage();
      this.SortForm = this.formBuilder.group({
        groupSort: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(this.groupSortVal)
      });
      this.SearchForm = this.formBuilder.group({
        search_input: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl("")
      });
      this.permissionDateForm = this.formBuilder.group({
        startDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        endDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        workingDays: [""]
      });
      this.permissionTimeForm = this.formBuilder.group({
        startTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        endTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
      });
      this.getGroups();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {}
  }, {
    key: "getGroups",
    value: function getGroups() {
      var _this2 = this;

      console.log(this.SearchForm.controls);
      this.showLoader = true;
      this.initialLoad = false;
      this.http.post(this.env.API_URL + "api/Permissions/GetGroups", {
        page: this.page,
        pageSize: this.pageSize,
        searchString: this.SearchForm.controls.search_input.value,
        groupSort: this.groupSortVal
      }).subscribe({
        next: function next(data) {
          _this2.groups = data.entities;
          _this2.resultsCount = data.totalCount;
          var x = data.totalCount / _this2.pageSize;
          _this2.totalPages = Math.trunc(x) < data.totalCount / _this2.pageSize ? Math.trunc(x) + 1 : Math.trunc(x);

          if (_this2.groups.length > 0) {
            _this2.noResults = false;

            if (_this2.groups.length == 1 && _this2.totalPages == 1) {}
          } else {
            _this2.noResults = true;
          }

          _this2.showLoader = false;
        },
        error: function error(err) {
          console.log(err.message);
          _this2.showLoader = false;
        }
      });
    }
  }, {
    key: "search",
    value: function search() {}
  }, {
    key: "goLast",
    value: function goLast() {
      if (this.page != this.totalPages) {
        this.page = this.totalPages;
      }
    }
  }, {
    key: "nextPage",
    value: function nextPage() {
      if (this.totalPages > this.page) {
        this.page++;
      }
    }
  }, {
    key: "prevPage",
    value: function prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    }
  }, {
    key: "goFirst",
    value: function goFirst() {
      if (this.page != 1) {
        this.page = 1;
      }
    }
  }, {
    key: "changePage",
    value: function changePage(newPage) {
      this.page = newPage;
    }
  }, {
    key: "groupSelected",
    value: function groupSelected(group) {
      var _this3 = this;

      this.selectedGroup = group;
      this.showLoader = true;
      console.log(this.selectedGroup);
      this.http.post(this.env.API_URL + "api/Permissions/GetGroupPermissions", group).subscribe({
        next: function next(data) {
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
    key: "ChangePermission",
    value: function ChangePermission(permission, value) {
      var _this4 = this;

      this.showLoader = true;
      var changedPermission = {
        feature_description: permission.feature_description,
        feature_name: permission.feature_name,
        feature_number: permission.feature_number,
        feature_type: permission.feature_type,
        permission: value,
        branch_code: permission.branch_code,
        org_code: permission.org_code,
        group_code: permission.group_code,
        group_name: this.selectedGroup.group_name,
        work_end_date: permission.work_end_date,
        work_start_date: permission.work_start_date,
        working_days: permission.working_days,
        work_start_time: permission.work_start_time,
        work_end_time: permission.work_end_time
      };
      this.http.put(this.env.API_URL + "api/Permissions/SetGroupPermission", changedPermission).subscribe({
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
    key: "ChangePermissions",
    value: function ChangePermissions(permissions, value) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this5 = this;

        var newPermissions, alertText;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
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
                    group_code: permission.group_code,
                    group_name: _this5.selectedGroup.group_name,
                    work_end_date: permission.work_end_date,
                    work_start_date: permission.work_start_date,
                    working_days: permission.working_days,
                    work_start_time: permission.work_start_time,
                    work_end_time: permission.work_end_time
                  };
                  newPermissions.push(changedPermission);
                });
                alertText = value == 1 ? "منح" : "إلغاء";
                _context.t0 = permissions.length > 0;

                if (!_context.t0) {
                  _context.next = 9;
                  break;
                }

                _context.next = 8;
                return this.alertService.SaveAlert("\u0647\u0644 \u062A\u0631\u064A\u062F ".concat(alertText, " \u062C\u0645\u064A\u0639 \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0627\u062A\u061F"));

              case 8:
                _context.t0 = !_context.sent;

              case 9:
                if (!_context.t0) {
                  _context.next = 12;
                  break;
                }

                this.showLoader = false;
                return _context.abrupt("return");

              case 12:
                this.http.put(this.env.API_URL + "api/Permissions/SetGroupPermissions", newPermissions).subscribe({
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

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "ChangePermissionDate",
    value: function ChangePermissionDate(permission) {
      var _this6 = this;

      this.showLoader = true;
      var changedPermission = {
        feature_description: permission.feature_description,
        feature_name: permission.feature_name,
        feature_number: permission.feature_number,
        feature_type: permission.feature_type,
        permission: permission.permission,
        branch_code: permission.branch_code,
        org_code: permission.org_code,
        group_code: permission.group_code,
        group_name: this.selectedGroup.group_name,
        work_end_date: this.permissionDateFormControls.endDate.value,
        work_start_date: this.permissionDateFormControls.startDate.value,
        working_days: this.permissionDateFormControls.workingDays.value.toString(),
        work_start_time: permission.work_start_time,
        work_end_time: permission.work_end_time
      };
      this.http.put(this.env.API_URL + "api/Permissions/SetGroupPermission", changedPermission).subscribe({
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
    key: "ChangePermissionsDate",
    value: function ChangePermissionsDate(permissions) {
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
          group_code: permission.group_code,
          group_name: _this7.selectedGroup.group_name,
          work_end_date: _this7.permissionDateFormControls.endDate.value,
          work_start_date: _this7.permissionDateFormControls.startDate.value,
          working_days: _this7.permissionDateFormControls.workingDays.value.toString(),
          work_start_time: permission.work_start_time,
          work_end_time: permission.work_end_time
        };
        newPermissions.push(changedPermission);
      });
      this.http.put(this.env.API_URL + "api/Permissions/SetGroupPermissions", newPermissions).subscribe({
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
    key: "ChangePermissionTime",
    value: function ChangePermissionTime(permission) {
      var _this8 = this;

      this.showLoader = true;
      console.log((0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.permissionTimeFormControls.startTime.value, "hh:mm", new Date()));
      var changedPermission = {
        feature_description: permission.feature_description,
        feature_name: permission.feature_name,
        feature_number: permission.feature_number,
        feature_type: permission.feature_type,
        permission: permission.permission,
        branch_code: permission.branch_code,
        org_code: permission.org_code,
        group_code: permission.group_code,
        group_name: this.selectedGroup.group_name,
        work_end_date: permission.work_end_date,
        work_start_date: permission.work_start_date,
        working_days: permission.working_days,
        work_start_time: this.permissionTimeFormControls.startTime.value,
        work_end_time: this.permissionTimeFormControls.endTime.value
      };
      this.http.put(this.env.API_URL + "api/Permissions/SetGroupPermission", changedPermission).subscribe({
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
    }
  }, {
    key: "ChangePermissionsTime",
    value: function ChangePermissionsTime(permissions) {
      var _this9 = this;

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
          group_code: permission.group_code,
          group_name: _this9.selectedGroup.group_name,
          work_end_date: permission.work_end_date,
          work_start_date: permission.work_start_date,
          working_days: permission.working_days,
          work_start_time: _this9.permissionTimeFormControls.startTime.value,
          work_end_time: _this9.permissionTimeFormControls.endTime.value
        };
        newPermissions.push(changedPermission);
      });
      this.http.put(this.env.API_URL + "api/Permissions/SetGroupPermissions", newPermissions).subscribe({
        next: function next(data) {
          console.log(data);
          _this9.permissions = data["permissions"];
          _this9.showLoader = false;
        },
        error: function error(err) {
          console.log(err.message);
          _this9.showLoader = false;
        }
      });
    }
  }, {
    key: "DeselectUser",
    value: function DeselectUser() {
      this.selectedGroup = null;
    }
  }, {
    key: "searchForm",
    get: function get() {
      return this.SearchForm.controls;
    }
  }, {
    key: "sortForm",
    get: function get() {
      return this.SortForm.controls;
    }
  }, {
    key: "confirm",
    value: function confirm() {
      this.groupSortVal = this.sortForm.groupSort.value;
      this.getGroups();
      this.page = 1;
      this.modal.dismiss("", "confirm");
    }
  }, {
    key: "reset",
    value: function reset() {
      console.log(this.SortForm.controls);
      this.groupSortVal = "0";
      this.sortForm.groupSort.setValue("0");
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
        startDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        endDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        workingDays: [""]
      });
      this.permissionTimeForm = this.formBuilder.group({
        startTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        endTime: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
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
    key: "checkAllGroupEnable",
    value: function checkAllGroupEnable(permissions) {
      return permissions.every(function (item) {
        return item.permission == 1;
      });
    }
  }, {
    key: "checkAllGroupDisable",
    value: function checkAllGroupDisable(permissions) {
      return permissions.every(function (item) {
        return item.permission == 0;
      });
    }
  }]);

  return GroupPermissionsPage;
}();

GroupPermissionsPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_6__.pagingService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
  }, {
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.DOCUMENT]
    }]
  }];
};

GroupPermissionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: "GroupPermissions",
  template: _group_permissions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_group_permissions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], GroupPermissionsPage);


/***/ }),

/***/ 46306:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/group-permissions/group-permissions.page.scss?ngResource ***!
  \**************************************************************************************************/
/***/ (function(module) {

module.exports = "app-pagination {\n  background: none !important;\n}\n\ndiv[class~=card-header] {\n  border-width: 0px !important;\n}\n\ndiv[class~=card-footer] {\n  border-width: 0px !important;\n}\n\n#selecteduser {\n  width: 100% !important;\n}\n\n#search {\n  width: -webkit-fit-content !important;\n  width: -moz-fit-content !important;\n  width: fit-content !important;\n}\n\ntd {\n  word-wrap: break-word;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLXBlcm1pc3Npb25zLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXHBlcm1pc3Npb25zXFxncm91cC1wZXJtaXNzaW9uc1xcZ3JvdXAtcGVybWlzc2lvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdBO0VBQ0ksMkJBQUE7QUNWSjs7QURhQTtFQUNJLDRCQUFBO0FDVko7O0FEYUE7RUFDSSw0QkFBQTtBQ1ZKOztBRGFBO0VBQ0ksc0JBQUE7QUNWSjs7QURZQTtFQUNJLHFDQUFBO0VBQUEsa0NBQUE7RUFBQSw2QkFBQTtBQ1RKOztBRGdCQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUNiSiIsImZpbGUiOiJncm91cC1wZXJtaXNzaW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuLy8gICAgIGRpdltjbGFzc349XCJjYXJkXCJde1xyXG4vLyAgICAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBAbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4vLyAgICAgZGl2W2NsYXNzfj1cImNhcmRcIl17XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuYXBwLXBhZ2luYXRpb257XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmRpdltjbGFzc349XCJjYXJkLWhlYWRlclwiXXtcclxuICAgIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmRpdltjbGFzc349XCJjYXJkLWZvb3RlclwiXXtcclxuICAgIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNzZWxlY3RlZHVzZXJ7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbiNzZWFyY2h7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcclxufVxyXG4vLyBkaXZbY2xhc3N+PVwiY2FyZC1ib2R5XCJde1xyXG4vLyAgICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xyXG4vLyAgICAgaGVpZ2h0OiAyNSUgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxudGQge1xyXG4gICAgd29yZC13cmFwOmJyZWFrLXdvcmQ7XHJcbiAgICB3aGl0ZS1zcGFjZTpub3JtYWw7XHJcbiAgfVxyXG4iLCJhcHAtcGFnaW5hdGlvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuZGl2W2NsYXNzfj1jYXJkLWhlYWRlcl0ge1xuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuXG5kaXZbY2xhc3N+PWNhcmQtZm9vdGVyXSB7XG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbiNzZWxlY3RlZHVzZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4jc2VhcmNoIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XG59XG5cbnRkIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufSJdfQ== */";

/***/ }),

/***/ 39449:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/permissions/group-permissions/group-permissions.page.html?ngResource ***!
  \**************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div *ngIf=\"selectedGroup == null || selectedGroup == undefined\" class=\"col\">\n  <div class=\"row-12 d-flex justify-content-center\">\n    <div class=\"card mb-2 px-0\" id=\"search\">\n      <div class=\"card-body text-center d-flex justify-content-center\">\n        <form\n          (ngSubmit)=\"getGroups()\"\n          class=\"row d-flex align-items-baseline px-0 py-0\"\n          [formGroup]=\"SearchForm\"\n        >\n          <div class=\"col-7 align-self-center\">\n            <input\n              type=\"text\"\n              class=\"form-control input\"\n              id=\"search_input\"\n              formControlName=\"search_input\"\n            />\n          </div>\n          <div class=\"col-5 align-self-center\">\n            <div class=\"row\">\n              <ion-button\n                (click)=\"page = 1;getGroups();\"\n                class=\"py-0 px-0 col-5 my-0\"\n                ><ion-icon name=\"search-outline\"></ion-icon\n              ></ion-button>\n              <ion-button class=\"py-0 px-0 col-5 my-0\" id=\"filter-modal\"\n                ><ion-icon name=\"funnel-outline\"></ion-icon\n              ></ion-button>\n              <ion-modal trigger=\"filter-modal\">\n                <ng-template>\n                  <ion-header>\n                    <ion-toolbar>\n                      <ion-buttons slot=\"end\">\n                        <ion-button (click)=\"confirm()\" [strong]=\"true\">\n                          <ion-icon name=\"checkmark-outline\"></ion-icon>\n                        </ion-button>\n                      </ion-buttons>\n                      <ion-buttons slot=\"start\">\n                        <ion-button (click)=\"reset()\" [strong]=\"true\">\n                          <ion-icon name=\"refresh-outline\"></ion-icon>\n                        </ion-button>\n                      </ion-buttons>\n                    </ion-toolbar>\n                  </ion-header>\n                  <ion-content class=\"ion-padding\">\n                    <form [formGroup]=\"SortForm\">\n                      <div class=\"col\">\n                        <div class=\"row-12 pb-1\">\n                          <div class=\"row\">\n                            <div class=\"col-3 text-center align-self-center\">\n                              <ion-label>ترتيب المجموعات</ion-label>\n                            </div>\n                            <div class=\"col-9\">\n                              <ion-select\n                                interface=\"popover\"\n                                id=\"groupSort\"\n                                formControlName=\"groupSort\"\n                                class=\"subselect ng-pristine ng-invalid md hydrated ng-touched ion-pristine ion-invalid ion-touched\"\n                              >\n                                <ion-select-option\n                                  *ngFor=\"let sortType of sortTypes; let i = index\"\n                                  value=\"{{ i }}\"\n                                >\n                                  {{ sortType }}\n                                </ion-select-option>\n                              </ion-select>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </form>\n                  </ion-content>\n                </ng-template>\n              </ion-modal>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"row-12\">\n    <div class=\"card row mx-0 table-responsive d-flex justify-content-center\">\n      <table\n        class=\"table\"\n        *ngIf=\"groups.length > 0 && noResults !== undefined && noResults !== null && noResults == false\"\n      >\n        <thead>\n          <th>اسم المجموعة</th>\n          <th></th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let group of groups\">\n            <td class=\"w-75\">{{group.group_name}}</td>\n            <td class=\"w-25\">\n              <div class=\"d-flex justify-content-end\">\n                <ion-button (click)=\"groupSelected(group)\">\n                  <ion-icon name=\"caret-back-outline\"></ion-icon>\n                </ion-button>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <ion-label\n        *ngIf=\"groups.length == 0 && noResults !== undefined && noResults !== null && noResults == true\"\n        class=\"py-3 text-center\"\n      >\n        لا توجد مجموعات أو هذا ليس المركز الرئيسي\n      </ion-label>\n    </div>\n    <app-pagination\n      [page]=\"page\"\n      [collectionSize]=\"resultsCount\"\n      (pageChange)=\"changePage($event); getGroups();\"\n    ></app-pagination>\n  </div>\n</div>\n<div *ngIf=\"selectedGroup != null && selectedGroup != undefined\" class=\"col\">\n  <div class=\"d-flex justify-content-center\">\n    <div\n      class=\"card px-1 py-1 my-1 mx-1 text-center row-12 d-flex justify-content-center\"\n      id=\"selecteduser\"\n    >\n      <div class=\"card-body py-2\">\n        <div class=\"card-text\">\n          <div class=\"row\">\n            <div class=\"col-8 align-self-center\">\n              {{selectedGroup.group_name}}\n            </div>\n            <div class=\"col-4 align-self-center justify-self-end\">\n              <ion-button (click)=\"DeselectUser()\"\n                ><ion-icon name=\"arrow-back-outline\"></ion-icon\n              ></ion-button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card table-responsive row-12\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <td class=\"w-90\">الاسم</td>\n          <td>\n            <div class=\"col\">\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button (click)=\"PermChosenForDateEdit(null,true)\">\n                  <ion-icon name=\"calendar-outline\"></ion-icon>\n                </ion-button>\n              </div>\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button (click)=\"PermChosenForTimeEdit(null,true)\">\n                  <ion-icon name=\"alarm-outline\"></ion-icon>\n                </ion-button>\n              </div>\n            </div>\n          </td>\n          <td>\n            <div class=\"col\">\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button\n                  color=\"danger\"\n                  [disabled]=\"checkAllGroupDisable(permissions)\"\n                  (click)=\"ChangePermissions(permissions,0)\"\n                  id=\"lock-all\"\n                >\n                  <ion-icon name=\"lock-closed-outline\"></ion-icon>\n                </ion-button>\n              </div>\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button\n                [disabled]=\"checkAllGroupEnable(permissions)\"\n                  (click)=\"ChangePermissions(permissions,1)\"\n                  id=\"unlock-all\"\n                  ><ion-icon name=\"lock-open-outline\"></ion-icon\n                ></ion-button>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let permission of this.pagingService.Paging(permissions, groupPage)\">\n          <td>\n            <ion-label [color]=\"permission.permission == 0?'danger':''\">\n              {{permission.feature_name}}\n            </ion-label>\n          </td>\n          <td>\n            <div class=\"col\">\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button (click)=\"PermChosenForDateEdit(permission,false)\">\n                  <ion-icon name=\"calendar-outline\"></ion-icon>\n                </ion-button>\n              </div>\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button (click)=\"PermChosenForTimeEdit(permission,false)\">\n                  <ion-icon name=\"alarm-outline\"></ion-icon>\n                </ion-button>\n              </div>\n            </div>\n          </td>\n          <td>\n            <div class=\"col\">\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button\n                  color=\"danger\"\n                  [disabled]=\"permission.permission == 0\"\n                  (click)=\"ChangePermission(permission,0)\"\n                >\n                  <ion-icon name=\"lock-closed-outline\"></ion-icon\n                ></ion-button>\n              </div>\n              <div class=\"row-12 d-flex justify-content-end\">\n                <ion-button\n                  [disabled]=\"permission.permission == 1\"\n                  (click)=\"ChangePermission(permission,1)\"\n                  ><ion-icon name=\"lock-open-outline\"></ion-icon\n                ></ion-button>\n              </div>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <ion-modal\n      (willDismiss)=\"onWillDismiss($event)\"\n      (didDismiss)=\"onDidDismiss($event)\"\n      (willPresent)=\"onWillPresentDate($event)\"\n      [isOpen]=\"isDateModalOpen\"\n    >\n      <ng-template>\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"cancelModal()\"\n                ><ion-icon name=\"ban-outline\"></ion-icon\n              ></ion-button>\n            </ion-buttons>\n            <ion-title>أدخل تاريخ العمل المسموح به</ion-title>\n            <ion-buttons slot=\"end\">\n              <ion-button (click)=\"confirmModal(true)\" [strong]=\"true\"\n                ><ion-icon name=\"add-outline\"></ion-icon\n              ></ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content class=\"ion-padding\">\n          <form [formGroup]=\"permissionDateForm\">\n            <div class=\"col\">\n              <div class=\"row-12\">\n                <ion-label for=\"startDate\"> تاريخ بدء العمل </ion-label>\n                <ngx-datepicker\n                  [parentForm]=\"permissionDateForm\"\n                  parentFormControllerName=\"startDate\"\n                ></ngx-datepicker>\n              </div>\n              <div class=\"row-12\">\n                <ion-label for=\"endDate\"> تاريخ انتهاء العمل </ion-label>\n                <ngx-datepicker\n                  [parentForm]=\"permissionDateForm\"\n                  parentFormControllerName=\"endDate\"\n                ></ngx-datepicker>\n              </div>\n              <div class=\"row-12\">\n                <ion-label for=\"workingDays\"> أيام العمل في الأسبوع </ion-label>\n                <ion-select\n                  interface=\"popover\"\n                  id=\"workingDays\"\n                  formControlName=\"workingDays\"\n                  multiple=\"true\"\n                >\n                  <ion-select-option *ngFor=\"let day of days\" [value]=\"day[1]\">\n                    {{day[0]}}\n                  </ion-select-option>\n                </ion-select>\n              </div>\n              <!-- <div class=\"row-12\">أيام أسبوع العمل</div> -->\n            </div>\n          </form>\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n    <ion-modal\n      (willDismiss)=\"onWillDismiss($event)\"\n      (didDismiss)=\"onDidDismiss($event)\"\n      (willPresent)=\"onWillPresentTime($event)\"\n      [isOpen]=\"isTimeModalOpen\"\n    >\n      <ng-template>\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <ion-button (click)=\"cancelModal()\"\n                ><ion-icon name=\"ban-outline\"></ion-icon\n              ></ion-button>\n            </ion-buttons>\n            <ion-title>أدخل مدة العمل المسموح بها</ion-title>\n            <ion-buttons slot=\"end\">\n              <ion-button (click)=\"confirmModal(false)\" [strong]=\"true\"\n                ><ion-icon name=\"add-outline\"></ion-icon\n              ></ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-header>\n        <ion-content class=\"ion-padding\">\n          <form [formGroup]=\"permissionTimeForm\">\n            <div class=\"col\">\n              <div class=\"row-12\">\n                <ion-item lines=\"none\">\n                  <ion-label> وقت بداية العمل </ion-label>\n                  <ion-datetime-button\n                    datetime=\"startTime\"\n                    slot=\"end\"\n                  ></ion-datetime-button>\n                  <ion-modal [keepContentsMounted]=\"true\">\n                    <ng-template>\n                      <ion-datetime\n                        presentation=\"time\"\n                        id=\"startTime\"\n                        formControlName=\"startTime\"\n                        hourCycle=\"h23\"\n                        locale=\"en\"\n                      ></ion-datetime>\n                    </ng-template>\n                  </ion-modal>\n                </ion-item>\n              </div>\n              <div class=\"row-12\">\n                <ion-item lines=\"none\">\n                  <ion-label> وقت انتهاء العمل </ion-label>\n                  <ion-datetime-button\n                    datetime=\"endTime\"\n                    slot=\"end\"\n                  ></ion-datetime-button>\n                  <ion-modal [keepContentsMounted]=\"true\">\n                    <ng-template>\n                      <ion-datetime\n                        presentation=\"time\"\n                        id=\"endTime\"\n                        formControlName=\"endTime\"\n                        hourCycle=\"h23\"\n                        locale=\"en\"\n                      ></ion-datetime>\n                    </ng-template>\n                  </ion-modal>\n                </ion-item>\n              </div>\n            </div>\n          </form>\n        </ion-content>\n      </ng-template>\n    </ion-modal>\n  </div>\n  <app-pagination class=\"ion-padding\"\n          [page]=\"groupPage\"\n          [collectionSize]=\"permissions?.length\"\n          (pageChange)=\"changePaginationPage($event);\"\n        ></app-pagination>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_permissions_group-permissions_group-permissions_module_ts.js.map