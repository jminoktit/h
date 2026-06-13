"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_CashOut_expenses_expenses_module_ts"],{

/***/ 40181:
/*!***************************************************!*\
  !*** ./src/app/core/services/cash-out.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CashOutService": function() { return /* binding */ CashOutService; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ 43081);
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env.service */ 41752);








var CashOutService = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CashOutService(env, http, alertService) {
  var _this = this;

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CashOutService);

  this.env = env;
  this.http = http;
  this.alertService = alertService;

  this.checkNationId = function (nationalId) {
    try {
      return _this.http.get(_this.env.API_URL + "api/CashOut/NationIdChecking?nationalId=".concat(nationalId));
    } catch (error) {
      console.error("Error getHierarchyDashboardSummary:", error);
      throw error;
    }
  };

  this.checkOtp = function (request) {
    try {
      return _this.http.post(_this.env.API_URL + "api/CashOut/CheckOtp", {
        otp: request.otp.toString(),
        nation_id: request.nationalId.toString(),
        preshared_key: null,
        ref_no: request.referenceNumber
      });
    } catch (error) {
      console.error("Error getHierarchyDashboardSummary:", error);
      throw error;
    }
  };

  this.disburseLoan = function (request) {
    try {
      return _this.http.post(_this.env.API_URL + "api/CashOut/DisburseLoan", {
        nation_id: request.nationalId,
        ref_no: request.referenceNumber
      });
    } catch (error) {
      console.error("Error getHierarchyDashboardSummary:", error);
      throw error;
    }
  };
});

CashOutService.ctorParameters = function () {
  return [{
    type: _env_service__WEBPACK_IMPORTED_MODULE_3__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
  }, {
    type: _alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
  }];
};

CashOutService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: "root"
})], CashOutService);


/***/ }),

/***/ 73632:
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/CashOut/expenses/expenses-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensesPageRoutingModule": function() { return /* binding */ ExpensesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _expenses_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expenses.page */ 13732);






var routes = [{
  path: '',
  component: _expenses_page__WEBPACK_IMPORTED_MODULE_2__.ExpensesPage
}];

var ExpensesPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ExpensesPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ExpensesPageRoutingModule);
});

ExpensesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ExpensesPageRoutingModule);


/***/ }),

/***/ 33654:
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/CashOut/expenses/expenses.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensesPageModule": function() { return /* binding */ ExpensesPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _expenses_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expenses-routing.module */ 73632);
/* harmony import */ var _expenses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expenses.page */ 13732);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var ExpensesPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ExpensesPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ExpensesPageModule);
});

ExpensesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _expenses_routing_module__WEBPACK_IMPORTED_MODULE_2__.ExpensesPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_expenses_page__WEBPACK_IMPORTED_MODULE_3__.ExpensesPage]
})], ExpensesPageModule);


/***/ }),

/***/ 13732:
/*!***************************************************************!*\
  !*** ./src/app/views/pages/CashOut/expenses/expenses.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensesPage": function() { return /* binding */ ExpensesPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _expenses_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expenses.page.html?ngResource */ 17175);
/* harmony import */ var _expenses_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expenses.page.scss?ngResource */ 94386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_cash_out_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/cash-out.service */ 40181);
/* harmony import */ var src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/validators/custom-validators */ 92609);












var ExpensesPage = /*#__PURE__*/function () {
  //#endregion
  function ExpensesPage(formBuilder, alertService, cashOutService) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExpensesPage);

    this.formBuilder = formBuilder;
    this.alertService = alertService;
    this.cashOutService = cashOutService; //#region Objects

    this.formsState = {
      identificationForm: null,
      smsForm: null,
      clientInformationForm: null,
      showLoader: false
    };
    this.DataBaseRequestsAndResponses = {
      checkClient: {
        request: {
          nationalId: null
        },
        response: {
          result: {
            message: null,
            ref_no: null,
            response_status: null
          }
        }
      },
      checkOtp: {
        request: {
          nationalId: null,
          otp: null,
          referenceNumber: null
        },
        response: {
          response_status: null,
          result: {
            client_name: null,
            disbursement_amount: null,
            message: null,
            nation_id: null
          }
        }
      },
      disburseLoan: {
        request: {
          nationalId: null,
          referenceNumber: null
        },
        response: {
          message: null,
          response_status: null
        }
      }
    }; //#endregion

    this.reSendingOtp = function () {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.formsState.showLoader = true;
                _context.next = 4;
                return this.verifyNationalId();

              case 4:
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", this.alertService.showAlertError(_context.t0, false));

              case 9:
                _context.prev = 9;
                this.formsState.showLoader = false;
                return _context.finish(9);

              case 12:
                this.startSmsTimeout(this.formsState.smsForm.timeOut.howManySecondsForSmsTimeout);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6, 9, 12]]);
      }));
    };

    this.startSmsTimeout = function (durationInSeconds) {
      _this.formsState.smsForm.timeOut.disableResendSmsButton = true;
      _this.formsState.smsForm.timeOut.timeRemaining = durationInSeconds;
      _this.formsState.smsForm.timeOut.intervalId = setInterval(function () {
        if (_this.formsState.smsForm.timeOut.timeRemaining <= 0) {
          _this.formsState.smsForm.timeOut.timeRemaining = null;
          _this.formsState.smsForm.timeOut.disableResendSmsButton = false;
          clearInterval(_this.formsState.smsForm.timeOut.intervalId);
        } else {
          _this.formsState.smsForm.timeOut.timeRemaining -= 1;
        }
      }, 1000);
    };

    this.backButton = function () {
      // sms ==> identification
      if (_this.formsState.smsForm.visible) {
        _this.formsState.smsForm.visible = false;
        clearInterval(_this.formsState.smsForm.timeOut.intervalId);

        _this.clearIdentificationFormValues();

        _this.formsState.smsForm.checkIfInputsValid = false;
        _this.formsState.identificationForm.visible = true;
      } // client ==> identification


      if (_this.formsState.clientInformationForm.visible) {
        _this.clearIdentificationFormValues();

        _this.formsState.clientInformationForm.visible = false;
        _this.formsState.identificationForm.visible = true;
      }
    };

    this.clearIdentificationFormValues = function () {
      _this.formsState.identificationForm.formGroup.patchValue({
        nationalId: null
      });
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ExpensesPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.initializeForms();
    }
  }, {
    key: "initializeForms",
    value: function initializeForms() {
      this.formsState.identificationForm = {
        checkIfInputsValid: false,
        visible: true,
        formGroup: this.formBuilder.group({
          nationalId: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [(0,src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_7__.nationalIdValidator)({
            required: true
          })])
        }),
        formControlsNames: {
          nationalId: "nationalId"
        }
      };
      this.formsState.smsForm = {
        checkIfInputsValid: false,
        visible: false,
        formGroup: this.formBuilder.group({
          otpInput: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(null, [(0,src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_7__.otpVerificationValidator)({
            required: true
          })])
        }),
        formControlsNames: {
          otpInput: "otpInput"
        },
        timeOut: {
          howManySecondsForSmsTimeout: 5,
          disableResendSmsButton: true,
          timeRemaining: null,
          intervalId: null
        }
      };
      this.formsState.clientInformationForm = {
        visible: false
      };
      this.formsState.showLoader = false;
    } //#region Buttons

  }, {
    key: "submittingIdentificationForm",
    value: function submittingIdentificationForm() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.formsState.identificationForm.formGroup.valid) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", this.formsState.identificationForm.checkIfInputsValid = true);

              case 2:
                _context2.prev = 2;
                this.formsState.showLoader = true;
                _context2.next = 6;
                return this.verifyNationalId();

              case 6:
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);
                return _context2.abrupt("return", this.alertService.showAlertError("لا توجد بيانات", false));

              case 11:
                _context2.prev = 11;
                this.formsState.showLoader = false;
                return _context2.finish(11);

              case 14:
                this.formsState.smsForm.formGroup.patchValue({
                  otpInput: null
                });
                this.formsState.identificationForm.visible = false;
                this.formsState.smsForm.visible = true;
                this.startSmsTimeout(this.formsState.smsForm.timeOut.howManySecondsForSmsTimeout);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 8, 11, 14]]);
      }));
    }
  }, {
    key: "submittingSmsForm",
    value: function submittingSmsForm() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.formsState.smsForm.formGroup.valid) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", this.formsState.smsForm.checkIfInputsValid = true);

              case 2:
                _context3.prev = 2;
                this.formsState.showLoader = true;
                _context3.next = 6;
                return this.verifyOtp();

              case 6:
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](2);
                return _context3.abrupt("return", this.alertService.showAlertError(_context3.t0 || "حدث خطا", false));

              case 11:
                _context3.prev = 11;
                this.formsState.showLoader = false;
                return _context3.finish(11);

              case 14:
                this.formsState.smsForm.visible = false;
                this.formsState.clientInformationForm.visible = true;

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 8, 11, 14]]);
      }));
    }
  }, {
    key: "submittingClientInformationForm",
    value: function submittingClientInformationForm() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.alertService.SaveAlert();

              case 2:
                if (_context4.sent) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt("return");

              case 4:
                _context4.prev = 4;
                this.formsState.showLoader = true;
                _context4.next = 8;
                return this.verifyDisburseLoan();

              case 8:
                _context4.next = 13;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](4);
                return _context4.abrupt("return", this.alertService.showAlertError(_context4.t0, false));

              case 13:
                _context4.prev = 13;
                this.formsState.showLoader = false;
                return _context4.finish(13);

              case 16:
                this.alertService.showAlertConfirm("تم الصرف بنجاح", true);

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[4, 10, 13, 16]]);
      }));
    }
  }, {
    key: "keyboardEvent",
    value: function keyboardEvent(event) {
      if (event.key == "Enter") {
        if (this.formsState.identificationForm.visible) this.submittingIdentificationForm();
        if (this.formsState.smsForm.visible) this.submittingSmsForm();
        if (this.formsState.clientInformationForm.visible) this.submittingClientInformationForm();
      }
    } //#region Databases Requested

  }, {
    key: "verifyNationalId",
    value: function verifyNationalId() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var nationalId, response;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                // Prepare the request
                nationalId = this.formsState.identificationForm.formGroup.value.nationalId;
                this.DataBaseRequestsAndResponses.checkClient.request = {
                  nationalId: nationalId
                }; // Send the request and await the response

                _context5.next = 5;
                return this.cashOutService.checkNationId(nationalId).toPromise();

              case 5:
                response = _context5.sent;
                this.DataBaseRequestsAndResponses.checkClient.response = response;
                console.log(response); // Check the response status

                if (!(response.result.response_status !== 202)) {
                  _context5.next = 10;
                  break;
                }

                throw new Error(response.result.message);

              case 10:
                _context5.next = 15;
                break;

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](0);
                throw new Error(_context5.t0.message);

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 12]]);
      }));
    }
  }, {
    key: "verifyOtp",
    value: function verifyOtp() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        var nationalId, otp, referenceNumber, response;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                // Prepare the request
                nationalId = this.formsState.identificationForm.formGroup.value.nationalId;
                otp = this.formsState.smsForm.formGroup.value.otpInput;
                referenceNumber = this.DataBaseRequestsAndResponses.checkClient.response.result.ref_no;
                this.DataBaseRequestsAndResponses.checkOtp.request = {
                  nationalId: nationalId,
                  otp: otp,
                  referenceNumber: referenceNumber
                }; // Send the request and await the response

                _context6.next = 7;
                return this.cashOutService.checkOtp(this.DataBaseRequestsAndResponses.checkOtp.request).toPromise();

              case 7:
                response = _context6.sent;
                this.DataBaseRequestsAndResponses.checkOtp.response = response; // Check the response status

                if (!(response.response_status !== 202)) {
                  _context6.next = 11;
                  break;
                }

                throw new Error(response.result.message);

              case 11:
                _context6.next = 16;
                break;

              case 13:
                _context6.prev = 13;
                _context6.t0 = _context6["catch"](0);
                throw new Error(_context6.t0.message);

              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 13]]);
      }));
    }
  }, {
    key: "verifyDisburseLoan",
    value: function verifyDisburseLoan() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        var nationalId, referenceNumber, response;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                nationalId = this.formsState.identificationForm.formGroup.value.nationalId.toString();
                referenceNumber = this.DataBaseRequestsAndResponses.checkClient.response.result.ref_no.toString();
                this.DataBaseRequestsAndResponses.disburseLoan.request = {
                  nationalId: nationalId,
                  referenceNumber: referenceNumber
                }; // Send the request and await the response

                _context7.next = 6;
                return this.cashOutService.disburseLoan(this.DataBaseRequestsAndResponses.disburseLoan.request).toPromise();

              case 6:
                response = _context7.sent;
                this.DataBaseRequestsAndResponses.disburseLoan.response = response; // Check the resopnse status

                if (!(response.response_status !== 202)) {
                  _context7.next = 10;
                  break;
                }

                throw new Error(response.message);

              case 10:
                _context7.next = 15;
                break;

              case 12:
                _context7.prev = 12;
                _context7.t0 = _context7["catch"](0);
                throw new Error(_context7.t0.message);

              case 15:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 12]]);
      }));
    }
  }]);

  return ExpensesPage;
}();

ExpensesPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: src_app_core_services_cash_out_service__WEBPACK_IMPORTED_MODULE_6__.CashOutService
  }];
};

ExpensesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: "app-expenses",
  template: _expenses_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_expenses_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], ExpensesPage);


/***/ }),

/***/ 94386:
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/CashOut/expenses/expenses.page.scss?ngResource ***!
  \****************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlbnNlcy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 17175:
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/CashOut/expenses/expenses.page.html?ngResource ***!
  \****************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"formsState.showLoader\"></app-loader>\n<ion-toolbar>\n  <ion-title>الصرف</ion-title>\n</ion-toolbar>\n\n<ion-note (keyup)=\"keyboardEvent($event)\">\n  <ion-card *ngIf=\"formsState.identificationForm.visible\">\n    <ion-card-content>\n      <form [formGroup]=\"formsState.identificationForm.formGroup\">\n        <ion-row class=\"justify-content-center\">\n          <ion-col\n            size=\"12\"\n            size-lg=\"4\"\n            size-md=\"6\"\n            size-sm=\"12\"\n            class=\"text-center\"\n          >\n            <ion-label class=\"form-label\">الرقم القومي</ion-label>\n            <ion-input\n              class=\"form-control\"\n              [formControlName]=\"this.formsState.identificationForm.formControlsNames.nationalId\"\n              type=\"number\"\n            ></ion-input>\n            <html-validations\n              [validationInput]=\"{\n            showError:formsState.identificationForm.checkIfInputsValid,\n            formGroup: this.formsState.identificationForm.formGroup,\n            formControlName: this.formsState.identificationForm.formControlsNames.nationalId}\"\n            ></html-validations>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"justify-content-center ion-padding\">\n          <ion-button (click)=\"submittingIdentificationForm()\">\n            بحث\n          </ion-button>\n        </ion-row>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"formsState.smsForm.visible\">\n    <ion-card-content>\n      <form [formGroup]=\"formsState.smsForm.formGroup\">\n        <ion-row class=\"justify-content-center\">\n          <ion-col\n            size=\"12\"\n            size-lg=\"4\"\n            size-md=\"6\"\n            size-sm=\"12\"\n            class=\"text-center\"\n          >\n            <ion-label class=\"form-label\">رمز التحقق</ion-label>\n            <ion-input\n              class=\"form-control\"\n              [formControlName]=\"this.formsState.smsForm.formControlsNames.otpInput\"\n              type=\"number\"\n            ></ion-input>\n            <html-validations\n              [validationInput]=\"{\n            showError:formsState.smsForm.checkIfInputsValid,\n            formGroup: this.formsState.smsForm.formGroup,\n            formControlName: this.formsState.smsForm.formControlsNames.otpInput}\"\n            ></html-validations>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"justify-content-center ion-padding\">\n          <ion-button color=\"danger\" (click)=\"backButton()\"> رجوع </ion-button>\n          <ion-button (click)=\"submittingSmsForm()\"> تحقق </ion-button>\n          <ion-button\n            (click)=\"reSendingOtp()\"\n            [disabled]=\"formsState.smsForm.timeOut.disableResendSmsButton\"\n          >\n            اعادة الارسال {{formsState.smsForm.timeOut.timeRemaining}}\n          </ion-button>\n        </ion-row>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"formsState.clientInformationForm.visible\">\n    <ion-card-content>\n      <ion-row class=\"justify-content-center\">\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n          <ion-label class=\"form-label\">الرقم القومي</ion-label>\n          <ion-label class=\"form-control\">\n            {{this.DataBaseRequestsAndResponses.checkOtp.response.result.nation_id}}\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n          <ion-label class=\"form-label\">اسم العميل</ion-label>\n          <ion-label class=\"form-control\">\n            {{this.DataBaseRequestsAndResponses.checkOtp.response.result.client_name}}\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n          <ion-label class=\"form-label\">مبلغ الصرف</ion-label>\n          <ion-label class=\"form-control\">\n            {{this.DataBaseRequestsAndResponses.checkOtp.response.result.disbursement_amount\n            | number: '1.0-0' }}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"justify-content-center ion-padding\">\n        <ion-button color=\"danger\" (click)=\"backButton()\"> رجوع </ion-button>\n        <ion-button (click)=\"submittingClientInformationForm()\">\n          صرف\n        </ion-button>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-note>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_CashOut_expenses_expenses_module_ts.js.map