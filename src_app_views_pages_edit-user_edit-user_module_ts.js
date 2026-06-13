"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_edit-user_edit-user_module_ts"],{

/***/ 95089:
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/edit-user/edit-user-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserPageRoutingModule": function() { return /* binding */ EditUserPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _edit_user_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-user.page */ 71461);






var routes = [{
  path: '',
  component: _edit_user_page__WEBPACK_IMPORTED_MODULE_2__.EditUserPage
}];

var EditUserPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function EditUserPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EditUserPageRoutingModule);
});

EditUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], EditUserPageRoutingModule);


/***/ }),

/***/ 82191:
/*!***********************************************************!*\
  !*** ./src/app/views/pages/edit-user/edit-user.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserPageModule": function() { return /* binding */ EditUserPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _edit_user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-user-routing.module */ 95089);
/* harmony import */ var _edit_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-user.page */ 71461);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ 63430);











var EditUserPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function EditUserPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EditUserPageModule);
});

EditUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _edit_user_routing_module__WEBPACK_IMPORTED_MODULE_2__.EditUserPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_edit_user_page__WEBPACK_IMPORTED_MODULE_3__.EditUserPage]
})], EditUserPageModule);


/***/ }),

/***/ 71461:
/*!*********************************************************!*\
  !*** ./src/app/views/pages/edit-user/edit-user.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserPage": function() { return /* binding */ EditUserPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _edit_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-user.page.html?ngResource */ 16308);
/* harmony import */ var _edit_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-user.page.scss?ngResource */ 59336);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_officer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/officer.service */ 84598);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);




















var EditUserPage = /*#__PURE__*/function () {
  function EditUserPage(http, env, referencesService, FormBuilder, authService, alertService, OfficerService, alertController, modal, formBuilder, datepipe, translate, inputMaskingService, document) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EditUserPage);

    this.http = http;
    this.env = env;
    this.referencesService = referencesService;
    this.FormBuilder = FormBuilder;
    this.authService = authService;
    this.alertService = alertService;
    this.OfficerService = OfficerService;
    this.alertController = alertController;
    this.modal = modal;
    this.formBuilder = formBuilder;
    this.datepipe = datepipe;
    this.translate = translate;
    this.inputMaskingService = inputMaskingService;
    this.document = document;
    this.personalFormStatus = false;
    this.personalForm = this.FormBuilder.group({
      user_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      full_name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      nation_id: [null],
      job_code: [null],
      hashed_password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      mobile1: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("^[0-9]*$")]],
      mobile2: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("^[0-9]*$")]],
      client_code: [null],
      type: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      mail: [null],
      Officerkey: [null],
      loan_am_req: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      loan_no_req: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      StartingWorkingDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      policyCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      userBrcode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      EndWorkingDate: [null],
      MoveWorkingDate: [null],
      NextWorkingDate: [null],
      StartDate: [null]
    });

    this.getOfficersByBranchCode = function () {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var response;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                console.log("br", this.personalForm.value.userBrcode);
                this.showLoader = true;
                _context.next = 5;
                return this.http.get(this.env.API_URL + "api/Officer/GetBranchOfficers?branch_code=".concat(this.personalForm.value.userBrcode), {}).toPromise();

              case 5:
                response = _context.sent;
                this.Officer = response;
                console.log("off", response);
                this.showLoader = false;
                this.disableOfficerButt = false;
                return _context.abrupt("return", response);

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                console.error("Error", _context.t0);
                throw _context.t0;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13]]);
      }));
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EditUserPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
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
                this.PersonalFormValid = false; //this.getOfficersByBranchCode();

                this.personalFormStatus = true;
                this.GetuserPolicy(Number(this.userInfo.org_code));
                this.GetbranchByUser(this.userInfo.user_name);
                this.isVisible = false;

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "userSelected",
    value: function userSelected(user) {
      var _this2 = this;

      console.log("ssssss");
      this.isVisible = true;
      this.selectedUser = user;
      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/User/GetUserInfo?user_name=".concat(user.user_name)).subscribe({
        next: function next(data) {
          _this2.UserDataInfo = data;
          console.log("ssd", _this2.UserDataInfo.officerkey);

          _this2.personalForm.patchValue({
            user_name: _this2.UserDataInfo.user_name,
            full_name: _this2.UserDataInfo.full_name,
            hashed_password: _this2.UserDataInfo.re_password,
            type: _this2.UserDataInfo.user_type,
            job_code: _this2.UserDataInfo.job_code,
            policyCode: _this2.UserDataInfo.policyCode,
            mail: _this2.UserDataInfo.mail,
            client_code: _this2.UserDataInfo.client_code,
            userBrcode: _this2.UserDataInfo.userBrcode,
            nation_id: _this2.UserDataInfo.nation_id,
            mobile1: _this2.UserDataInfo.mobile1,
            mobile2: _this2.UserDataInfo.mobile2,
            Officerkey: _this2.UserDataInfo.officerkey,
            loan_am_req: _this2.UserDataInfo.loan_am_req,
            loan_no_req: _this2.UserDataInfo.loan_no_req,
            MoveWorkingDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(_this2.UserDataInfo.moveWorkingDate), "yyyy-MM-dd"),
            EndWorkingDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(_this2.UserDataInfo.endWorkingDate), "yyyy-MM-dd"),
            StartingWorkingDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(_this2.UserDataInfo.startingWorkingDate), "yyyy-MM-dd"),
            NextWorkingDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(_this2.UserDataInfo.nextWorkingDate), "yyyy-MM-dd"),
            StartDate: (0,date_fns__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(_this2.UserDataInfo.startDate), "yyyy-MM-dd")
          });

          console.log("shsd", _this2.personalForm.value.nation_id);

          _this2.getOfficersByBranchCode();

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
    key: "GetuserPolicy",
    value: function GetuserPolicy(org_code) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
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
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
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
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var _this3 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.PersonalFormValid = true;

                if (!this.personalForm.valid) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 4;
                return this.alertService.SaveAlert("هل تريد حفظ التعديلات؟");

              case 4:
                if (!_context5.sent) {
                  _context5.next = 7;
                  break;
                }

                console.log("nn", Number(this.personalForm.value.nation_id));
                this.http.post(this.env.API_URL + "api/User/UpdateUser", {
                  user_name: this.personalForm.value.user_name,
                  full_name: this.personalForm.value.full_name,
                  nation_id: this.personalForm.value.nation_id,
                  job_code: this.personalForm.value.job_code,
                  password: this.UserDataInfo.password,
                  re_password: this.UserDataInfo.password,
                  hashed_password: this.UserDataInfo.password,
                  mobile1: this.personalForm.value.mobile1 === null ? "" : this.personalForm.value.mobile1.toString(),
                  mobile2: this.personalForm.value.mobile2 === null ? "" : this.personalForm.value.mobile2.toString(),
                  client_code: this.personalForm.value.client_code,
                  user_type: this.personalForm.value.type,
                  mail: this.personalForm.value.mail,
                  Officerkey: this.personalForm.value.Officerkey,
                  loan_am_req: this.personalForm.value.loan_am_req,
                  loan_no_req: this.personalForm.value.loan_no_req,
                  entry_user: this.userInfo.user_name,
                  startingWorkingDate: this.personalForm.value.StartingWorkingDate,
                  policyCode: this.personalForm.value.policyCode,
                  userBrcode: this.personalForm.value.userBrcode,
                  endWorkingDate: this.personalForm.value.EndWorkingDate,
                  moveWorkingDate: this.personalForm.value.MoveWorkingDate,
                  nextWorkingDate: this.personalForm.value.NextWorkingDate,
                  startDate: this.personalForm.value.StartDate
                }).subscribe({
                  next: function next(data) {
                    _this3.alertService.showAlertConfirm("تم الحفظ بنجاح", true);

                    _this3.ViewDocument();
                  },
                  error: function error(err) {
                    console.log(err);

                    _this3.alertService.showAlertError(err.error, false);
                  }
                });

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "BackUser",
    value: function BackUser() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.PersonalFormValid = false;
                this.personalFormStatus = true;
                this.DeselectUser();
                this.isVisible = false;

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }]);

  return EditUserPage;
}();

EditUserPage.ctorParameters = function () {
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
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ModalController
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_10__.InputMaskingService
  }, {
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.DOCUMENT]
    }]
  }];
};

EditUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
  selector: "app-edit-user",
  template: _edit_user_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_edit_user_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], EditUserPage);


/***/ }),

/***/ 59336:
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/edit-user/edit-user.page.scss?ngResource ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXVzZXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 16308:
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/edit-user/edit-user.page.html?ngResource ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = "<ion-title>تعديل مستخدمين</ion-title>\n\n<ion-card>\n  <ion-card-content>\n    <app-user-search\n      *ngIf=\"selectedUser == null || selectedUser == undefined\"\n      [resultType]=\"0\"\n      (selectedUser)=\"userSelected($event)\"\n    >\n    </app-user-search>\n    <div *ngIf=\"selectedUser != null && selectedUser != undefined\" class=\"col\">\n      <div class=\"d-flex justify-content-between\">\n        <div\n          class=\"card px-1 py-1 my-1 mx-1 text-center row-12 d-flex justify-content-center\"\n          id=\"selecteduser\"\n        ></div>\n      </div>\n    </div>\n    <form [formGroup]=\"personalForm\" *ngIf=\"isVisible\">\n      <ion-row class=\"justify-content-center\">\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">اسم المستخدم</ion-label>\n          <ion-input\n            class=\"form-control\"\n            formControlName=\"user_name\"\n            [disabled]=\"true\"\n          ></ion-input>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['user_name'].hasError('required'))\"\n            role=\"alert\"\n          >\n            يجب ادخال اسم المستخدم\n          </ion-note>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">الاسم بالكامل</ion-label>\n          <ion-input\n            class=\"form-control\"\n            formControlName=\"full_name\"\n          ></ion-input>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['full_name'].hasError('required'))\"\n            role=\"alert\"\n          >\n            يجب ادخال الاسم بالكامل\n          </ion-note>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">الرقم القومي</ion-label>\n          <ion-input\n            class=\"form-control\"\n            type=\"number\"\n            formControlName=\"nation_id\"\n            [type]=\"number\"\n          ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"justify-content-center\">\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">رقم الهاتف 1</ion-label>\n          <ion-input\n            class=\"form-control\"\n            type=\"tel\"\n            formControlName=\"mobile1\"\n            [maxlength]=\"11\"\n          ></ion-input>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['mobile1'].hasError('pattern'))\"\n            role=\"alert\"\n          >\n            صيغة الهاتف غير سليمة\n          </ion-note>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">رقم الهاتف 2</ion-label>\n          <ion-input\n            class=\"form-control\"\n            type=\"tel\"\n            formControlName=\"mobile2\"\n            [maxlength]=\"11\"\n          ></ion-input>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['mobile2'].hasError('pattern'))\"\n            role=\"alert\"\n          >\n            صيغة الهاتف غير سليمة\n          </ion-note>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">كوده كعميل</ion-label>\n          <ion-input\n            class=\"form-control\"\n            formControlName=\"client_code\"\n          ></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"justify-content-center\">\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">النوع</ion-label>\n          <ion-select\n            interface=\"popover\"\n            placeholder=\"\"\n            class=\"subselect\"\n            formControlName=\"type\"\n          >\n            <ion-select-option\n              *ngFor=\"let Gender of Genders\"\n              [value]=\"Gender.ref_code\"\n            >\n              {{Gender.ref_desc}}\n            </ion-select-option>\n          </ion-select>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['type'].hasError('required'))\"\n            role=\"alert\"\n          >\n            يجب اختيار النوع\n          </ion-note>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">سياسه التعريف</ion-label>\n          <ion-select\n            interface=\"popover\"\n            placeholder=\"\"\n            class=\"subselect\"\n            formControlName=\"policyCode\"\n          >\n            <ion-select-option\n              *ngFor=\"let Policy of Policy\"\n              [value]=\"Policy.policy_code\"\n            >\n              {{Policy.policy_name}}\n            </ion-select-option>\n          </ion-select>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['type'].hasError('required'))\"\n            role=\"alert\"\n          >\n            يجب اختيار سياسه التعريف\n          </ion-note>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">فرع المستخدم</ion-label>\n          <ion-select\n            interface=\"popover\"\n            placeholder=\"\"\n            class=\"subselect\"\n            formControlName=\"userBrcode\"\n            (ionChange)=\"getOfficersByBranchCode()\"\n          >\n            <ion-select-option\n              *ngFor=\"let br of BRData\"\n              [value]=\"br.branch_code\"\n            >\n              {{br.branch_name}}\n            </ion-select-option>\n          </ion-select>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['userBrcode'].hasError('required'))\"\n            role=\"alert\"\n          >\n            يجب اختيار فرع المستخدم\n          </ion-note>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"justify-content-center\">\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">تاريخ البدء</ion-label>\n          <ngx-datepicker\n            [parentForm]=\"personalForm\"\n            parentFormControllerName=\"StartDate\"\n          ></ngx-datepicker>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">تاريخ الإنتهاء</ion-label>\n          <ngx-datepicker\n            [parentForm]=\"personalForm\"\n            parentFormControllerName=\"EndWorkingDate\"\n          ></ngx-datepicker>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">تاريخ التعيين</ion-label>\n          <ngx-datepicker\n            [parentForm]=\"personalForm\"\n            parentFormControllerName=\"StartingWorkingDate\"\n          ></ngx-datepicker>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"justify-content-center\">\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">تاريخ الترقية</ion-label>\n          <ngx-datepicker\n            [parentForm]=\"personalForm\"\n            parentFormControllerName=\"NextWorkingDate\"\n          ></ngx-datepicker>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">تاريخ النقل</ion-label>\n          <ngx-datepicker\n            [parentForm]=\"personalForm\"\n            parentFormControllerName=\"MoveWorkingDate\"\n          ></ngx-datepicker>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">البريد الاليكتروني</ion-label>\n          <ion-input class=\"form-control\" formControlName=\"mail\"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"justify-content-center\">\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">المندوب</ion-label>\n          <ion-select\n            interface=\"popover\"\n            placeholder=\"\"\n            class=\"subselect\"\n            formControlName=\"Officerkey\"\n          >\n            <ion-select-option\n              *ngFor=\"let off of Officer\"\n              [value]=\"off.officer_key\"\n            >\n              {{off.officer_name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\"\n            >قيمة القروض المفتوحة المسموح بها</ion-label\n          >\n          <ion-input\n            class=\"form-control\"\n            formControlName=\"loan_am_req\"\n            (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e15 - 1, 0)\"\n          ></ion-input>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['loan_am_req'].hasError('required'))\"\n            role=\"alert\"\n          >\n            يجب ادخال قيمة القروض المفتوحة المسموح بها\n          </ion-note>\n        </ion-col>\n\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\"\n            >عددالقروض المفتوحة المسموح بها</ion-label\n          >\n          <ion-input\n            class=\"form-control\"\n            formControlName=\"loan_no_req\"\n            (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e11 - 1, 0)\"\n          ></ion-input>\n          <ion-note\n            color=\"danger\"\n            class=\"input-validator\"\n            *ngIf=\"PersonalFormValid&&(personalForm.controls['loan_no_req'].hasError('required'))\"\n            role=\"alert\"\n          >\n            يجب ادخال عدد القروض المفتوحة المسموح بها\n          </ion-note>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"justify-content-center\">\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-label class=\"form-label\">الكود الوظيفى</ion-label>\n          <ion-input\n            class=\"form-control\"\n            formControlName=\"job_code\"\n          ></ion-input>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"justify-content-center\">\n        <ion-col\n          size=\"12\"\n          size-lg=\"4\"\n          size-md=\"6\"\n          size-sm=\"12\"\n          class=\"text-center\"\n        >\n          <ion-button (click)=\"SaveUser()\"> حفظ </ion-button>\n          <ion-button (click)=\"BackUser()\"> رجوع </ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_edit-user_edit-user_module_ts.js.map