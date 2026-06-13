"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_add-user_add-user_module_ts"],{

/***/ 24138:
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/add-user/add-user-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUserPageRoutingModule": function() { return /* binding */ AddUserPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _add_user_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user.page */ 54498);






var routes = [{
  path: '',
  component: _add_user_page__WEBPACK_IMPORTED_MODULE_2__.AddUserPage
}];

var AddUserPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AddUserPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddUserPageRoutingModule);
});

AddUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], AddUserPageRoutingModule);


/***/ }),

/***/ 94518:
/*!*********************************************************!*\
  !*** ./src/app/views/pages/add-user/add-user.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUserPageModule": function() { return /* binding */ AddUserPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _add_user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user-routing.module */ 24138);
/* harmony import */ var _add_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-user.page */ 54498);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ 63430);











var AddUserPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AddUserPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddUserPageModule);
});

AddUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _add_user_routing_module__WEBPACK_IMPORTED_MODULE_2__.AddUserPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_add_user_page__WEBPACK_IMPORTED_MODULE_3__.AddUserPage]
})], AddUserPageModule);


/***/ }),

/***/ 54498:
/*!*******************************************************!*\
  !*** ./src/app/views/pages/add-user/add-user.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddUserPage": function() { return /* binding */ AddUserPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _add_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-user.page.html?ngResource */ 8108);
/* harmony import */ var _add_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-user.page.scss?ngResource */ 31485);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_officer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/officer.service */ 84598);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);

















var AddUserPage = /*#__PURE__*/function () {
  function AddUserPage(http, env, referencesService, FormBuilder, authService, alertService, OfficerService, inputMaskingService) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddUserPage);

    this.http = http;
    this.env = env;
    this.referencesService = referencesService;
    this.FormBuilder = FormBuilder;
    this.authService = authService;
    this.alertService = alertService;
    this.OfficerService = OfficerService;
    this.inputMaskingService = inputMaskingService;
    this.personalFormStatus = false;
    this.personalForm = this.FormBuilder.group({
      user_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      full_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      nation_id: [null],
      job_code: [null],
      password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      re_password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      mobile1: [null],
      mobile2: [null],
      client_code: [null],
      type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      mail: [null],
      Officerkey: [null],
      loan_am_req: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      loan_no_req: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      StartingWorkingDate: [(0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date().setDate(0), "yyyy-MM-dd"), [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      Policycode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      UserBrcode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      EndWorkingDate: [(0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(new Date("01-01-2050"), "yyyy-MM-dd")],
      MoveWorkingDate: [null],
      NextWorkingDate: [null],
      StartDate: [null]
    });

    this.getOfficersByBranchCode = function () {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var response;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                console.log("br", this.personalForm.value.userBrcode);
                this.showLoader = true;
                _context.next = 5;
                return this.http.get(this.env.API_URL + "api/Officer/GetBranchOfficers?branch_code=".concat(this.personalForm.value.UserBrcode), {}).toPromise();

              case 5:
                response = _context.sent;
                this.Officer = response;
                this.showLoader = false;
                this.disableOfficerButt = false;
                return _context.abrupt("return", response);

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                console.error("Error", _context.t0);
                throw _context.t0;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 12]]);
      }));
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AddUserPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.referencesService.getGender();

              case 2:
                this.Genders = _context2.sent;
                _context2.next = 5;
                return this.authService.getUserInfo();

              case 5:
                this.userInfo = _context2.sent;
                this.PersonalFormValid = false;
                this.getOfficersByBranchCode();
                this.personalFormStatus = true;
                this.GetuserPolicy(Number(this.userInfo.org_code));
                this.GetbranchByUser(this.userInfo.user_name);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "GetuserPolicy",
    value: function GetuserPolicy(org_code) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.http.get(this.env.API_URL + "api/Policy/GetuserPolicy?org_code=" + org_code).toPromise();

              case 2:
                this.Policy = _context3.sent;
                console.log("Test", this.Policy);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "GetbranchByUser",
    value: function GetbranchByUser(user_name) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.http.get(this.env.API_URL + "api/Branch/GetbranchByUser?user_name=" + user_name).toPromise();

              case 2:
                this.BRData = _context4.sent;
                console.log("Test", this.Policy);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "SaveUser",
    value: function SaveUser() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.personalForm.valid) {
                  if (this.personalForm.value.password == this.personalForm.value.re_password) {
                    this.http.post(this.env.API_URL + "api/User/AddUser", {
                      user_name: this.personalForm.value.user_name,
                      full_name: this.personalForm.value.full_name,
                      nation_id: this.personalForm.value.nation_id,
                      job_code: this.personalForm.value.job_code,
                      password: this.personalForm.value.password,
                      re_password: this.personalForm.value.re_password,
                      hashed_password: this.personalForm.value.re_password,
                      mobile1: this.personalForm.value.mobile1 === null ? "" : this.personalForm.value.mobile1.toString(),
                      mobile2: this.personalForm.value.mobile2 === null ? "" : this.personalForm.value.mobile2.toString(),
                      client_code: this.personalForm.value.client_code,
                      type: this.personalForm.value.type,
                      mail: this.personalForm.value.mail,
                      Officerkey: this.personalForm.value.Officerkey,
                      loan_am_req: this.personalForm.value.loan_am_req,
                      loan_no_req: this.personalForm.value.loan_no_req,
                      startingWorkingDate: this.personalForm.value.StartingWorkingDate,
                      Policycode: this.personalForm.value.Policycode,
                      userBrcode: this.personalForm.value.UserBrcode,
                      endWorkingDate: this.personalForm.value.EndWorkingDate,
                      moveWorkingDate: this.personalForm.value.MoveWorkingDate,
                      nextWorkingDate: this.personalForm.value.NextWorkingDate,
                      startDate: this.personalForm.value.StartDate
                    }).subscribe({
                      next: function next(data) {
                        _this2.alertService.showAlertConfirm("تم الحفظ بنجاح", false); //this.ViewDocument();


                        _this2.personalForm.reset();

                        _this2.PersonalFormValid = false;
                      },
                      error: function error(err) {
                        console.log(err);

                        _this2.alertService.showAlertError(err.error, false);
                      }
                    });
                  } else {
                    this.alertService.showAlertError("كلمة المرور غير متطابقة", false);
                  }

                  this.PersonalFormValid = true;
                } else {
                  this.alertService.showAlertError("يجب ادخال البيانات", false);
                  this.PersonalFormValid = true;
                }

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }]);

  return AddUserPage;
}();

AddUserPage.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_6__.ReferencesService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__.MohassilAuthService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_9__.AlertService
  }, {
    type: src_app_core_services_officer_service__WEBPACK_IMPORTED_MODULE_8__.OfficerService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_10__.InputMaskingService
  }];
};

AddUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: "app-add-user",
  template: _add_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_add_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], AddUserPage);


/***/ }),

/***/ 31485:
/*!********************************************************************!*\
  !*** ./src/app/views/pages/add-user/add-user.page.scss?ngResource ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtdXNlci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 8108:
/*!********************************************************************!*\
  !*** ./src/app/views/pages/add-user/add-user.page.html?ngResource ***!
  \********************************************************************/
/***/ (function(module) {

module.exports = "<ion-title>اضافة مستخدم</ion-title>\n\n<ion-card>\n  <ion-card-content>\n    <form [formGroup]=\"personalForm\">\n      <ion-row class=\"justify-content-center\">\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">اسم المستخدم</ion-label>\n          <ion-input\n            class=\"form-control\"\n            formControlName=\"user_name\"\n          ></ion-input>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['user_name'].hasError('required'))\"\n            role=\"alert\"\n          >\n            يجب ادخال اسم المستخدم\n          </ion-note>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">الاسم بالكامل</ion-label>\n          <ion-input\n            class=\"form-control\"\n            formControlName=\"full_name\"\n          ></ion-input>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['full_name'].hasError('required'))\"\n            role=\"alert\"\n          >\n            يجب ادخال الاسم بالكامل\n          </ion-note>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">الرقم القومي</ion-label>\n          <ion-input\n            class=\"form-control\"\n            type=\"number\"\n            formControlName=\"nation_id\"\n            [type]=\"number\"\n          ></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"justify-content-center\">\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">الكود الوظيفى</ion-label>\n          <ion-input\n            class=\"form-control\"\n            formControlName=\"job_code\"\n          ></ion-input>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">كلمة السر</ion-label>\n          <ion-input\n            class=\"form-control\"\n            formControlName=\"password\"\n            type=\"password\"\n          ></ion-input>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['password'].hasError('required'))\"\n            role=\"alert\"\n          >\n            يجب ادخال كلمة السر\n          </ion-note>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">تأكيد كلمة السر</ion-label>\n          <ion-input\n            class=\"form-control\"\n            formControlName=\"re_password\"\n            type=\"password\"\n          ></ion-input>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['re_password'].hasError('required'))\"\n            role=\"alert\"\n          >\n            يجب ادخال كلمة السر\n          </ion-note>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"justify-content-center\">\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">رقم الهاتف 1</ion-label>\n          <ion-input\n            class=\"form-control\"\n            type=\"number\"\n            formControlName=\"mobile1\"\n          ></ion-input>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">رقم الهاتف 2</ion-label>\n          <ion-input\n            class=\"form-control\"\n            type=\"number\"\n            formControlName=\"mobile2\"\n          ></ion-input>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">كوده كعميل</ion-label>\n          <ion-input\n            class=\"form-control\"\n            formControlName=\"client_code\"\n          ></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"justify-content-center\">\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">النوع</ion-label>\n          <ion-select\n            interface=\"popover\"\n            placeholder=\"\"\n            class=\"subselect\"\n            formControlName=\"type\"\n          >\n            <ion-select-option\n              *ngFor=\"let Gender of Genders\"\n              [value]=\"Gender.ref_code\"\n            >\n              {{Gender.ref_desc}}\n            </ion-select-option>\n          </ion-select>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['type'].hasError('required'))\"\n            role=\"alert\"\n          >\n            يجب اختيار النوع\n          </ion-note>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">سياسه التعريف</ion-label>\n          <ion-select\n            interface=\"popover\"\n            placeholder=\"\"\n            class=\"subselect\"\n            formControlName=\"Policycode\"\n          >\n            <ion-select-option\n              *ngFor=\"let Policy of Policy\"\n              [value]=\"Policy.policy_code\"\n            >\n              {{Policy.policy_name}}\n            </ion-select-option>\n          </ion-select>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['Policycode'].hasError('required'))\"\n            role=\"alert\"\n          >\n            يجب اختيار سياسه التعريف\n          </ion-note>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">فرع المستخدم</ion-label>\n          <ion-select\n            interface=\"popover\"\n            placeholder=\"\"\n            class=\"subselect\"\n            formControlName=\"UserBrcode\"\n            (ionChange)=\"getOfficersByBranchCode()\"\n          >\n            <ion-select-option\n              *ngFor=\"let br of BRData\"\n              [value]=\"br.branch_code\"\n            >\n              {{br.branch_name}}\n            </ion-select-option>\n          </ion-select>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['UserBrcode'].hasError('required'))\"\n            role=\"alert\"\n          >\n            يجب اختيار فرع المستخدم\n          </ion-note>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"justify-content-center\">\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">تاريخ البدء</ion-label>\n          <ngx-datepicker\n            [parentForm]=\"personalForm\"\n            parentFormControllerName=\"StartDate\"\n          ></ngx-datepicker>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">تاريخ الإنتهاء</ion-label>\n          <ngx-datepicker\n            [parentForm]=\"personalForm\"\n            parentFormControllerName=\"EndWorkingDate\"\n          ></ngx-datepicker>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">تاريخ التعيين</ion-label>\n          <ngx-datepicker\n            [parentForm]=\"personalForm\"\n            parentFormControllerName=\"StartingWorkingDate\"\n          ></ngx-datepicker>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"justify-content-center\">\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">تاريخ الترقية</ion-label>\n          <ngx-datepicker\n            [parentForm]=\"personalForm\"\n            parentFormControllerName=\"NextWorkingDate\"\n          ></ngx-datepicker>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">تاريخ النقل</ion-label>\n          <ngx-datepicker\n            [parentForm]=\"personalForm\"\n            parentFormControllerName=\"MoveWorkingDate\"\n          ></ngx-datepicker>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">البريد الاليكتروني</ion-label>\n          <ion-input class=\"form-control\" formControlName=\"mail\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"justify-content-center\">\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">المندوب</ion-label>\n          <ion-select\n            interface=\"popover\"\n            placeholder=\"\"\n            class=\"subselect\"\n            formControlName=\"Officerkey\"\n          >\n            <ion-select-option\n              *ngFor=\"let off of Officer\"\n              [value]=\"off.officer_key\"\n            >\n              {{off.officer_name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\"\n            >قيمة القروض المفتوحة المسموح بها</ion-label\n          >\n          <ion-input\n            class=\"form-control\"\n            formControlName=\"loan_am_req\"\n            (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e15 - 1, 0)\"\n          ></ion-input>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['loan_am_req'].hasError('required'))\"\n            role=\"alert\"\n          >\n            يجب ادخال قيمة القروض المفتوحة المسموح بها\n          </ion-note>\n        </ion-col>\n\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\"\n            >عددالقروض المفتوحة المسموح بها</ion-label\n          >\n          <ion-input\n            class=\"form-control\"\n            formControlName=\"loan_no_req\"\n            (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e11 - 1, 0)\"\n          ></ion-input>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['loan_no_req'].hasError('required'))\"\n            role=\"alert\"\n          >\n            يجب ادخال عدد القروض المفتوحة المسموح بها\n          </ion-note>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"justify-content-center\">\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-button (click)=\"SaveUser()\"> حفظ </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_add-user_add-user_module_ts.js.map