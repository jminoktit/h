"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_loan-calculation-methods_loan-calculation-methods_module_ts"],{

/***/ 63802:
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-calculation-methods/loan-calculation-methods-routing.module.ts ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanCalculationMethodsPageRoutingModule": function() { return /* binding */ LoanCalculationMethodsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_calculation_methods_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-calculation-methods.page */ 40974);






var routes = [{
  path: "",
  component: _loan_calculation_methods_page__WEBPACK_IMPORTED_MODULE_2__.LoanCalculationMethodsPage
}];

var LoanCalculationMethodsPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanCalculationMethodsPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanCalculationMethodsPageRoutingModule);
});

LoanCalculationMethodsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoanCalculationMethodsPageRoutingModule);


/***/ }),

/***/ 74336:
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-calculation-methods/loan-calculation-methods.module.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanCalculationMethodsPageModule": function() { return /* binding */ LoanCalculationMethodsPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_calculation_methods_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-calculation-methods-routing.module */ 63802);
/* harmony import */ var _loan_calculation_methods_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-calculation-methods.page */ 40974);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var LoanCalculationMethodsPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanCalculationMethodsPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanCalculationMethodsPageModule);
});

LoanCalculationMethodsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _loan_calculation_methods_routing_module__WEBPACK_IMPORTED_MODULE_2__.LoanCalculationMethodsPageRoutingModule],
  declarations: [_loan_calculation_methods_page__WEBPACK_IMPORTED_MODULE_3__.LoanCalculationMethodsPage]
})], LoanCalculationMethodsPageModule);


/***/ }),

/***/ 40974:
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-calculation-methods/loan-calculation-methods.page.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanCalculationMethodsPage": function() { return /* binding */ LoanCalculationMethodsPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _loan_calculation_methods_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-calculation-methods.page.html?ngResource */ 58525);
/* harmony import */ var _loan_calculation_methods_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-calculation-methods.page.scss?ngResource */ 70403);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);















var LoanCalculationMethodsPage = /*#__PURE__*/function () {
  function LoanCalculationMethodsPage(http, formBuilder, alertController, datepipe, env, alertServices, inputMaskingService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoanCalculationMethodsPage);

    this.http = http;
    this.formBuilder = formBuilder;
    this.alertController = alertController;
    this.datepipe = datepipe;
    this.env = env;
    this.alertServices = alertServices;
    this.inputMaskingService = inputMaskingService;
    this.showLoader = false;
    this.isEditingCalcMethod = false;
    this.isInsertingCalcMethod = false;
    this.isRoundApply = true;
    this.isSubmitted = false;
    this.isDecreasingCalcMethod = false;
    this.isTestCalcMethod = false;
    this.isTestCalcMethodResult = false;
    this.CalculationMethodForm = this.formBuilder.group({
      calc_method_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.noWhitespaceValidator]],
      calc_method: [""],
      distribution_order: [""],
      apply_rounding: [1],
      grace_prd_inst: [0],
      round_direction: [""],
      round_to_value: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.noWhitespaceValidator]],
      round_what: [""],
      equal_inst_amnt: [0],
      round_last_inst: [1]
    });
    this.TestCalculationMethodForm = this.formBuilder.group({
      loan_amount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.noWhitespaceValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1)]],
      payments_shift: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.noWhitespaceValidator]],
      no_of_inst: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.noWhitespaceValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1)]],
      grace_prd: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.noWhitespaceValidator]],
      period_length: ["1", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.noWhitespaceValidator]],
      period_type: ["1", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      fees_rate: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      loan_int_type: ["1", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      charges: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.noWhitespaceValidator]],
      loan_date: [this.datepipe.transform(new Date(), "yyyy-MM-dd"), [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.noWhitespaceValidator]],
      hd_skip: ["1", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      loan_int_rt_2: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.noWhitespaceValidator]],
      loan_int_type_2: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      loan_int_2_deduct: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      skip_day: ["1", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.noWhitespaceValidator]],
      due_day: ["1", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.noWhitespaceValidator]],
      first_inst_int: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, this.noWhitespaceValidator]]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoanCalculationMethodsPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getAllLoanCalcMethods();
      this.getCalcMethodTypes();
      this.getDistributionOrder();
      this.getRoundDirection();
      this.getRoundWhat();
      this.GetPeriodTypes();
      this.GetLoanIntType();
      this.GetHDSkip();
      this.GetLoanIntType2();
      this.GetLoanIntDeduct();
    }
  }, {
    key: "patchCalcMethodDataValue",
    value: function patchCalcMethodDataValue(calcMethodData) {
      this.CalculationMethodForm.patchValue({
        calc_method_name: calcMethodData.calc_method_name,
        calc_method: calcMethodData.calc_method,
        distribution_order: calcMethodData.distribution_order,
        round_direction: calcMethodData.round_direction,
        round_to_value: calcMethodData.round_to_value,
        round_what: calcMethodData.round_what,
        round_last_inst: calcMethodData.round_last_inst
      });
      this.CalculationMethodForm.get("grace_prd_inst").setValue(parseInt(calcMethodData.grace_prd_inst));
      this.CalculationMethodForm.get("apply_rounding").setValue(parseInt(calcMethodData.apply_rounding));
      this.CalculationMethodForm.get("equal_inst_amnt").setValue(parseInt(calcMethodData.equal_inst_amnt));
      this.CalculationMethodForm.get("round_last_inst").setValue(parseInt(calcMethodData.round_last_inst));

      if (this.CalculationMethodForm.value.apply_rounding == 1) {
        this.isRoundApply = true;
      } else {
        this.isRoundApply = false;
      }
    }
  }, {
    key: "onEqualInstAmntChange",
    value: function onEqualInstAmntChange(event) {
      if (event.target.checked) {
        this.CalculationMethodForm.get("round_last_inst").setValue(0);
      }
    }
  }, {
    key: "onRoundLastInstChange",
    value: function onRoundLastInstChange(event) {
      if (event.target.checked) {
        this.CalculationMethodForm.get("equal_inst_amnt").setValue(0);
      }
    }
  }, {
    key: "onApplyRoundChange",
    value: function onApplyRoundChange(event) {
      if (event.target.checked) {
        this.isRoundApply = true;
      } else {
        this.isRoundApply = false;
      }
    }
  }, {
    key: "CalcMethodCheck",
    value: function CalcMethodCheck() {
      if (this.CalculationMethodForm.value.calc_method == "4") {
        this.CalculationMethodForm.get("apply_rounding").setValue(0);
        this.isDecreasingCalcMethod = true;
      } else {
        this.isDecreasingCalcMethod = false;
      }
    }
  }, {
    key: "InsertCalcMethod",
    value: function InsertCalcMethod() {
      this.isInsertingCalcMethod = true;
      this.CalculationMethodForm.get("apply_rounding").setValue(1);
      this.CalculationMethodForm.get("round_last_inst").setValue(1);
      this.CalculationMethodForm.get("round_to_value").setValue(this.NumberFormatStyle(1));
    }
  }, {
    key: "SubmitCalcMethod",
    value: function SubmitCalcMethod() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        var calc_type;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isSubmitted = true;

                if (!this.CalculationMethodForm.valid) {
                  _context.next = 12;
                  break;
                }

                _context.next = 4;
                return this.alertServices.SaveAlert();

              case 4:
                if (!_context.sent) {
                  _context.next = 12;
                  break;
                }

                this.showLoader = true;

                if (typeof this.CalculationMethodForm.value.apply_rounding == "boolean") {
                  this.CalculationMethodForm.patchValue({
                    apply_rounding: this.ChangeCheckBoxValue(this.CalculationMethodForm.value.apply_rounding)
                  });
                }

                if (typeof this.CalculationMethodForm.value.round_last_inst == "boolean") {
                  this.CalculationMethodForm.patchValue({
                    round_last_inst: this.ChangeCheckBoxValue(this.CalculationMethodForm.value.round_last_inst)
                  });
                }

                if (typeof this.CalculationMethodForm.value.grace_prd_inst == "boolean") {
                  this.CalculationMethodForm.patchValue({
                    grace_prd_inst: this.ChangeCheckBoxValue(this.CalculationMethodForm.value.grace_prd_inst)
                  });
                }

                if (typeof this.CalculationMethodForm.value.equal_inst_amnt == "boolean") {
                  this.CalculationMethodForm.patchValue({
                    equal_inst_amnt: this.ChangeCheckBoxValue(this.CalculationMethodForm.value.equal_inst_amnt)
                  });
                }

                calc_type = this.calcMethods.reduce(function (max, obj) {
                  return obj.calc_type > max ? obj.calc_type : max;
                }, -Infinity) + 1;
                this.http.post(this.env.API_URL + "api/Loan/InsertCalcMethod", {
                  calc_type: calc_type.toString(),
                  calc_method_name: this.CalculationMethodForm.value.calc_method_name,
                  apply_rounding: this.CalculationMethodForm.value.apply_rounding.toString(),
                  round_direction: this.CalculationMethodForm.value.round_direction,
                  round_to_value: this.CalculationMethodForm.value.round_to_value,
                  round_what: this.CalculationMethodForm.value.round_what,
                  round_last_inst: this.CalculationMethodForm.value.round_last_inst.toString(),
                  grace_prd_inst: this.CalculationMethodForm.value.grace_prd_inst.toString(),
                  equal_inst_amnt: this.CalculationMethodForm.value.equal_inst_amnt.toString(),
                  calc_method: this.CalculationMethodForm.value.calc_method,
                  distribution_order: this.CalculationMethodForm.value.distribution_order
                }).subscribe({
                  next: function next(data) {
                    _this.showLoader = false;

                    _this.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                  },
                  error: function error(err) {
                    console.log(err);

                    _this.alertServices.showAlertError(err.error, false);

                    _this.showLoader = false;
                  }
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "DeleteCalcMethod",
    value: function DeleteCalcMethod(index) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.alertServices.DeleteAlert();

              case 2:
                if (!_context2.sent) {
                  _context2.next = 5;
                  break;
                }

                this.showLoader = true;
                this.http.post(this.env.API_URL + "api/Loan/DeleteCalcMethod", {
                  calc_type: this.calcMethods[index].calc_type.toString()
                }).subscribe({
                  next: function next(data) {
                    _this2.showLoader = false;

                    _this2.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                  },
                  error: function error(err) {
                    console.log(err);

                    _this2.alertServices.showAlertError(err.error, false);

                    _this2.showLoader = false;
                  }
                });

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "EditCalcMethod",
    value: function EditCalcMethod() {
      var _this3 = this;

      this.isSubmitted = true;

      if (this.CalculationMethodForm.valid) {
        this.showLoader = true;

        if (typeof this.CalculationMethodForm.value.apply_rounding == "boolean") {
          this.CalculationMethodForm.patchValue({
            apply_rounding: this.ChangeCheckBoxValue(this.CalculationMethodForm.value.apply_rounding)
          });
        }

        if (typeof this.CalculationMethodForm.value.round_last_inst == "boolean") {
          this.CalculationMethodForm.patchValue({
            round_last_inst: this.ChangeCheckBoxValue(this.CalculationMethodForm.value.round_last_inst)
          });
        }

        if (typeof this.CalculationMethodForm.value.grace_prd_inst == "boolean") {
          this.CalculationMethodForm.patchValue({
            grace_prd_inst: this.ChangeCheckBoxValue(this.CalculationMethodForm.value.grace_prd_inst)
          });
        }

        if (typeof this.CalculationMethodForm.value.equal_inst_amnt == "boolean") {
          this.CalculationMethodForm.patchValue({
            equal_inst_amnt: this.ChangeCheckBoxValue(this.CalculationMethodForm.value.equal_inst_amnt)
          });
        }

        this.http.post(this.env.API_URL + "api/Loan/EditCalcMethod", {
          calc_type: this.calcMethodData.calc_type.toString(),
          calc_method_name: this.CalculationMethodForm.value.calc_method_name,
          apply_rounding: this.CalculationMethodForm.value.apply_rounding.toString(),
          round_direction: this.CalculationMethodForm.value.round_direction,
          round_to_value: this.CalculationMethodForm.value.round_to_value,
          round_what: this.CalculationMethodForm.value.round_what,
          round_last_inst: this.CalculationMethodForm.value.round_last_inst.toString(),
          grace_prd_inst: this.CalculationMethodForm.value.grace_prd_inst.toString(),
          equal_inst_amnt: this.CalculationMethodForm.value.equal_inst_amnt.toString(),
          calc_method: this.CalculationMethodForm.value.calc_method,
          distribution_order: this.CalculationMethodForm.value.distribution_order,
          uuc: this.calcMethodData.uuc
        }).subscribe({
          next: function next(data) {
            _this3.showLoader = false;

            _this3.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
          },
          error: function error(err) {
            console.log(err);

            _this3.alertServices.showAlertError(err.error, false);

            _this3.showLoader = false;
          }
        });
      }
    }
  }, {
    key: "TestCalcMethod",
    value: function TestCalcMethod() {
      this.isTestCalcMethod = true;
      this.isEditingCalcMethod = false;
      this.isInsertingCalcMethod = false;
    }
  }, {
    key: "TestCalcMethodSubmit",
    value: function TestCalcMethodSubmit() {
      var _this4 = this;

      this.isSubmitted = true;
      console.log(this.TestCalculationMethodForm.value.fees_rate.toString());

      if (this.TestCalculationMethodForm.valid) {
        this.showLoader = true;

        if (typeof this.CalculationMethodForm.value.apply_rounding == "boolean") {
          this.CalculationMethodForm.patchValue({
            apply_rounding: this.ChangeCheckBoxValue(this.CalculationMethodForm.value.apply_rounding)
          });
        }

        if (typeof this.CalculationMethodForm.value.round_last_inst == "boolean") {
          this.CalculationMethodForm.patchValue({
            round_last_inst: this.ChangeCheckBoxValue(this.CalculationMethodForm.value.round_last_inst)
          });
        }

        if (typeof this.CalculationMethodForm.value.grace_prd_inst == "boolean") {
          this.CalculationMethodForm.patchValue({
            grace_prd_inst: this.ChangeCheckBoxValue(this.CalculationMethodForm.value.grace_prd_inst)
          });
        }

        if (typeof this.CalculationMethodForm.value.equal_inst_amnt == "boolean") {
          this.CalculationMethodForm.patchValue({
            equal_inst_amnt: this.ChangeCheckBoxValue(this.CalculationMethodForm.value.equal_inst_amnt)
          });
        }

        this.http.post(this.env.API_URL + "api/Loan/TestCalcMethod", {
          calc_type: this.calcMethodData.calc_type.toString(),
          loan_amount: this.TestCalculationMethodForm.value.loan_amount.toString(),
          loan_date: new Date(this.TestCalculationMethodForm.value.loan_date.toString()),
          no_of_inst: this.TestCalculationMethodForm.value.no_of_inst.toString(),
          grace_prd: this.TestCalculationMethodForm.value.grace_prd,
          feesrate: this.TestCalculationMethodForm.value.fees_rate.toString(),
          charge: this.TestCalculationMethodForm.value.charges,
          loan_int_type: this.TestCalculationMethodForm.value.loan_int_type,
          period_type: this.TestCalculationMethodForm.value.period_type,
          apply_rounding: this.CalculationMethodForm.value.apply_rounding.toString(),
          round_direction: this.CalculationMethodForm.value.round_direction,
          round_to_value: this.CalculationMethodForm.value.round_to_value,
          round_what: this.CalculationMethodForm.value.round_what,
          round_last_inst: this.CalculationMethodForm.value.round_last_inst.toString(),
          grace_prd_inst: this.CalculationMethodForm.value.grace_prd_inst.toString(),
          equal_inst_amnt: this.CalculationMethodForm.value.equal_inst_amnt.toString(),
          calc_method: this.CalculationMethodForm.value.calc_method,
          hd_skip: this.TestCalculationMethodForm.value.hd_skip,
          deduction_type: this.TestCalculationMethodForm.value.deduction_type,
          payments_shift: this.TestCalculationMethodForm.value.payments_shift,
          period_length: this.TestCalculationMethodForm.value.period_length.toString(),
          loan_int_rt_2: this.TestCalculationMethodForm.value.loan_int_rt_2,
          loan_int_type_2: this.TestCalculationMethodForm.value.loan_int_type_2,
          loan_int_2_deduct: this.TestCalculationMethodForm.value.loan_int_2_deduct,
          distribution_order: this.CalculationMethodForm.value.distribution_order,
          skip_day: this.TestCalculationMethodForm.value.skip_day,
          due_day: this.TestCalculationMethodForm.value.due_day,
          first_inst_int_rt: this.TestCalculationMethodForm.value.first_inst_int
        }).subscribe({
          next: function next(data) {
            _this4.TestResult = data;
            _this4.isTestCalcMethodResult = true;
            _this4.showLoader = false;
          },
          error: function error(err) {
            console.log(err);

            _this4.alertServices.showAlertError(err.error, false);

            _this4.showLoader = false;
          }
        });
      } else {
        this.alertServices.showAlertError("يجب ادخال جميع البيانات", false);
      }
    }
  }, {
    key: "checker",
    value: function checker(input) {
      return this.datepipe.transform(input, "yyyy-MM-dd");
    }
  }, {
    key: "clearTestResultForm",
    value: function clearTestResultForm() {
      this.TestResult = [];
      this.isTestCalcMethod = true;
      this.isTestCalcMethodResult = false;
      this.isSubmitted = false;
    }
  }, {
    key: "clearTestForm",
    value: function clearTestForm() {
      this.isEditingCalcMethod = true;
      this.isTestCalcMethod = false;
      this.isTestCalcMethodResult = false;
      this.isSubmitted = false;
    }
  }, {
    key: "clearForms",
    value: function clearForms() {
      this.isEditingCalcMethod = false;
      this.isInsertingCalcMethod = false;
      this.isTestCalcMethod = false;
      this.isTestCalcMethodResult = false;
      this.CalculationMethodForm.reset();
      this.CalculationMethodForm.get("grace_prd_inst").setValue(0);
      this.CalculationMethodForm.get("apply_rounding").setValue(1);
      this.CalculationMethodForm.get("equal_inst_amnt").setValue(0);
      this.CalculationMethodForm.get("round_last_inst").setValue(1);
      this.CalculationMethodForm.patchValue({
        round_what: this.GetRoundWhat[0].ref_code
      });
      this.CalculationMethodForm.patchValue({
        round_direction: this.GetRoundDirections[0].ref_code
      });
      this.CalculationMethodForm.patchValue({
        distribution_order: this.GetDistributionOrders[0].ref_code
      });
      this.CalculationMethodForm.patchValue({
        calc_method: this.calcMethodTypes[0].ref_code
      });
      this.isSubmitted = false;
    }
  }, {
    key: "getAllLoanCalcMethods",
    value: function getAllLoanCalcMethods() {
      var _this5 = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/Loan/GetLoanCalcMethods").subscribe({
        next: function next(data) {
          _this5.calcMethods = data;
          _this5.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this5.showLoader = false;
        }
      });
    }
  }, {
    key: "getCalcMethodInfo",
    value: function getCalcMethodInfo(calc_type) {
      var _this6 = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/Loan/GetCalcMethodByCalcType?calc_type=".concat(calc_type.toString())).subscribe({
        next: function next(data) {
          _this6.calcMethodData = data;
          _this6.isEditingCalcMethod = true;

          _this6.patchCalcMethodDataValue(_this6.calcMethodData);

          _this6.showLoader = false;
        },
        error: function error(err) {
          // console.log(err);
          _this6.showLoader = false;
        }
      });
    }
  }, {
    key: "getCalcMethodTypes",
    value: function getCalcMethodTypes() {
      var _this7 = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/StaticRef/GetCalcMethodTypes").subscribe({
        next: function next(data) {
          _this7.calcMethodTypes = data;

          _this7.CalculationMethodForm.patchValue({
            calc_method: _this7.calcMethodTypes[0].ref_code
          });

          _this7.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this7.showLoader = false;
        }
      });
    }
  }, {
    key: "getDistributionOrder",
    value: function getDistributionOrder() {
      var _this8 = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/StaticRef/GetDistributionOrder").subscribe({
        next: function next(data) {
          _this8.GetDistributionOrders = data;

          _this8.CalculationMethodForm.patchValue({
            distribution_order: _this8.GetDistributionOrders[0].ref_code
          });

          _this8.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this8.showLoader = false;
        }
      });
    }
  }, {
    key: "getRoundDirection",
    value: function getRoundDirection() {
      var _this9 = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/StaticRef/GetRoundDirection").subscribe({
        next: function next(data) {
          _this9.GetRoundDirections = data;

          _this9.CalculationMethodForm.patchValue({
            round_direction: _this9.GetRoundDirections[0].ref_code
          });

          _this9.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this9.showLoader = false;
        }
      });
    }
  }, {
    key: "getRoundWhat",
    value: function getRoundWhat() {
      var _this10 = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/StaticRef/GetRoundWhat").subscribe({
        next: function next(data) {
          _this10.GetRoundWhat = data;

          _this10.CalculationMethodForm.patchValue({
            round_what: _this10.GetRoundWhat[0].ref_code
          });

          _this10.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this10.showLoader = false;
        }
      });
    }
  }, {
    key: "GetPeriodTypes",
    value: function GetPeriodTypes() {
      var _this11 = this;

      this.http.get(this.env.API_URL + "api/StaticRef/GetPeriodTypes").subscribe({
        next: function next(data) {
          _this11.period_types = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
    }
  }, {
    key: "GetLoanIntType",
    value: function GetLoanIntType() {
      var _this12 = this;

      this.http.get(this.env.API_URL + "api/StaticRef/GetLoanIntType").subscribe({
        next: function next(data) {
          _this12.loan_int_type = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
    }
  }, {
    key: "GetHDSkip",
    value: function GetHDSkip() {
      var _this13 = this;

      this.http.get(this.env.API_URL + "api/StaticRef/GetHDSkip").subscribe({
        next: function next(data) {
          _this13.hd_skip = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
    }
  }, {
    key: "GetLoanIntType2",
    value: function GetLoanIntType2() {
      var _this14 = this;

      this.http.get(this.env.API_URL + "api/StaticRef/GetLoanIntType2").subscribe({
        next: function next(data) {
          _this14.loan_int_type_2 = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
    }
  }, {
    key: "GetLoanIntDeduct",
    value: function GetLoanIntDeduct() {
      var _this15 = this;

      this.http.get(this.env.API_URL + "api/StaticRef/GetLoanIntDeduct").subscribe({
        next: function next(data) {
          _this15.loan_int_2_deduct = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
    }
  }, {
    key: "NumberFormatStyle",
    value: function NumberFormatStyle(number) {
      var result = (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.formatNumber)(Number(number), "en-US", "1.3-3");
      return result;
    }
  }, {
    key: "ChangeCheckBoxValue",
    value: function ChangeCheckBoxValue(value) {
      if (value == true) {
        return 1;
      } else if (value == false) {
        return 0;
      }
    }
  }, {
    key: "noWhitespaceValidator",
    value: function noWhitespaceValidator(control) {
      var isWhitespace = control.value !== null && (control.value || "").toString().trim().length === 0;
      var isValid = !isWhitespace;
      return isValid ? null : {
        whitespace: true
      };
    }
  }]);

  return LoanCalculationMethodsPage;
}();

LoanCalculationMethodsPage.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_7__.InputMaskingService
  }];
};

LoanCalculationMethodsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: "app-loan-calculation-methods-tracker",
  template: _loan_calculation_methods_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_loan_calculation_methods_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], LoanCalculationMethodsPage);


/***/ }),

/***/ 70403:
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-calculation-methods/loan-calculation-methods.page.scss?ngResource ***!
  \**********************************************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\ntd {\n  word-wrap: break-word;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tY2FsY3VsYXRpb24tbWV0aG9kcy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEZWxldGUlMjBpdFxcTmV3TW9oYXNzaWxDbGllbnRfMzA5NV9zcmNcXE5ld01vaGFzc2lsQ2xpZW50XFxzcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxsb2Fuc1xcbG9hbi1jYWxjdWxhdGlvbi1tZXRob2RzXFxsb2FuLWNhbGN1bGF0aW9uLW1ldGhvZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQUo7O0FESUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FDREYiLCJmaWxlIjoibG9hbi1jYWxjdWxhdGlvbi1tZXRob2RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWxhYmVsLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxudGQge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcbiIsIi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufVxuXG50ZCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn0iXX0= */";

/***/ }),

/***/ 58525:
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-calculation-methods/loan-calculation-methods.page.html?ngResource ***!
  \**********************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div class=\"ion-padding\">\n  <div>\n    <h5 class=\"mr-1 mb-md-0 pb-3\">طرق الحساب</h5>\n  </div>\n  <div\n    class=\"card\"\n    *ngIf=\"!isEditingCalcMethod && !isInsertingCalcMethod && !isTestCalcMethod\"\n  >\n    <div class=\"card-body\">\n      <div class=\"row justify-content-center\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th class=\"text-center\">إسم طريقه الحساب</th>\n                <th></th>\n                <th class=\"text-center\">\n                  <ion-button (click)=\"InsertCalcMethod()\"\n                    ><ion-icon name=\"add-outline\"></ion-icon\n                  ></ion-button>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let calcMethod of calcMethods; let i = index\">\n                <td class=\"text-center\">{{calcMethod.calc_method_name}}</td>\n                <td class=\"text-center\">\n                  <ion-button (click)=\"getCalcMethodInfo(calcMethod.calc_type)\"\n                    ><ion-icon name=\"create-outline\"></ion-icon\n                  ></ion-button>\n                </td>\n                <td class=\"text-center\">\n                  <ion-button color=\"danger\" (click)=\"DeleteCalcMethod(i)\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                  </ion-button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"isEditingCalcMethod || isInsertingCalcMethod\">\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"CalculationMethodForm\">\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                إسم طريقه الحساب\n              </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"calc_method_name\"\n              >\n              </ion-input>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isSubmitted && ((CalculationMethodForm.controls['calc_method_name'].errors?.['required']) || (CalculationMethodForm.controls['calc_method_name'].errors?.['whitespace']))\"\n                role=\"alert\"\n              >\n                يجب ادخال إسم طريقه الحساب\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                نوع طريقه الحساب\n              </ion-label>\n              <ion-select\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                (ionChange)=\"CalcMethodCheck()\"\n                interface=\"popover\"\n                placeholder=\"نوع طريقه الحساب\"\n                formControlName=\"calc_method\"\n              >\n                <ion-select-option\n                  class=\"pb-2\"\n                  *ngFor=\"let type of calcMethodTypes\"\n                  [value]=\"type.ref_code\"\n                >\n                  {{type.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                قيمة القسط\n              </ion-label>\n              <ion-select\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                interface=\"popover\"\n                placeholder=\"قيمة القسط\"\n                formControlName=\"distribution_order\"\n              >\n                <ion-select-option\n                  *ngFor=\"let distributionOrder of GetDistributionOrders\"\n                  [value]=\"distributionOrder.ref_code\"\n                >\n                  {{distributionOrder.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n          </div>\n          <div class=\"row pt-3\">\n            <div class=\"col-12 col-md-6\">\n              <ion-label class=\"form-label pl-1\"\n                >يتم حساب اقساط بقيمه المصاريف فقط اثناء فتره السماح</ion-label\n              >\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"grace_prd_inst\"\n              ></ion-checkbox>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label pl-1\"\n                >يتم تقريب قيمه الاقساط</ion-label\n              >\n              <ion-checkbox\n                type=\"checkbox\"\n                [disabled]=\"isDecreasingCalcMethod\"\n                formControlName=\"apply_rounding\"\n                (ionChange)=\"onApplyRoundChange($event)\"\n              ></ion-checkbox>\n            </div>\n          </div>\n          <div>\n            <h5 class=\"mr-1 mb-md-0 pb-3\">طريقه تقريب قيمه القسط</h5>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                إتجاه التقريب\n              </ion-label>\n              <ion-select\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                interface=\"popover\"\n                [disabled]=\"!isRoundApply\"\n                placeholder=\"إتجاه التقريب\"\n                formControlName=\"round_direction\"\n              >\n                <ion-select-option\n                  *ngFor=\"let roundDirection of GetRoundDirections\"\n                  [value]=\"roundDirection.ref_code\"\n                >\n                  {{roundDirection.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                يتم التقريب الى أقرب\n              </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                [disabled]=\"!isRoundApply\"\n                formControlName=\"round_to_value\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 9999.999, 3)\"\n              >\n              </ion-input>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isSubmitted && ((CalculationMethodForm.controls['round_to_value'].errors?.['required']) || (CalculationMethodForm.controls['round_to_value'].errors?.['whitespace']))\"\n                role=\"alert\"\n              >\n                يجب ادخال قيمة التقريب\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                القيمه التى يتم تقريبها\n              </ion-label>\n              <ion-select\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                [disabled]=\"!isRoundApply\"\n                interface=\"popover\"\n                placeholder=\"القيمه التى يتم تقريبها\"\n                formControlName=\"round_what\"\n              >\n                <ion-select-option\n                  *ngFor=\"let round of GetRoundWhat\"\n                  [value]=\"round.ref_code\"\n                >\n                  {{round.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n          </div>\n          <div class=\"row pt-3\">\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label pl-1\">\n                جميع الأقساط متساويه القيمه</ion-label\n              >\n              <ion-checkbox\n                type=\"checkbox\"\n                [disabled]=\"!isRoundApply\"\n                formControlName=\"equal_inst_amnt\"\n                (ionChange)=\"onEqualInstAmntChange($event)\"\n              ></ion-checkbox>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label pl-1\">يتم تقريب اخر قسط</ion-label>\n              <ion-checkbox\n                type=\"checkbox\"\n                [disabled]=\"!isRoundApply\"\n                formControlName=\"round_last_inst\"\n                (ionChange)=\"onRoundLastInstChange($event)\"\n              ></ion-checkbox>\n            </div>\n          </div>\n        </form>\n        <div class=\"row-12 pt-3\">\n          <div class=\"d-flex justify-content-center mt-2\">\n            <ion-button *ngIf=\"isEditingCalcMethod\" (click)=\"TestCalcMethod()\">\n              تجربه طريقه الحساب\n            </ion-button>\n          </div>\n          <div class=\"d-flex justify-content-center mt-2\">\n            <ion-button color=\"danger\" (click)=\"clearForms()\">\n              رجوع\n            </ion-button>\n            <ion-button\n              *ngIf=\"isInsertingCalcMethod\"\n              (click)=\"SubmitCalcMethod()\"\n            >\n              اضافه طريقه الحساب\n            </ion-button>\n            <ion-button *ngIf=\"isEditingCalcMethod\" (click)=\"EditCalcMethod()\">\n              تعديل طريقه الحساب\n            </ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"isTestCalcMethod && !isTestCalcMethodResult\">\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"TestCalculationMethodForm\">\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                قيمه القرض\n              </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"loan_amount\"\n                min=\"0\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e15, 0)\"\n              >\n              </ion-input>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isSubmitted && ((TestCalculationMethodForm.controls['loan_amount'].errors?.['required']) || (TestCalculationMethodForm.controls['loan_amount'].errors?.['whitespace']))\"\n                role=\"alert\"\n              >\n                قيمه القرض غير سليمه\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                عدد أيام ترحيل الأقساط\n              </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"payments_shift\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, -999, 999, 0)\"\n              >\n              </ion-input>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                عدد الأقساط\n              </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"no_of_inst\"\n                min=\"1\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\n              >\n              </ion-input>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isSubmitted && ((TestCalculationMethodForm.controls['no_of_inst'].errors?.['required']) || (TestCalculationMethodForm.controls['no_of_inst'].errors?.['whitespace']))\"\n                role=\"alert\"\n              >\n                قيمه عدد الأقساط غير سليمه\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                فتره السماح\n              </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"grace_prd\"\n                min=\"0\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, -99, 99, 0)\"\n              >\n              </ion-input>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label\n                for=\"period_length\"\n                class=\"form-label form-label-required\"\n              >\n                فترة السداد كل\n              </ion-label>\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <ion-input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"period_length\"\n                    formControlName=\"period_length\"\n                    min=\"1\"\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 99, 0)\"\n                  ></ion-input>\n                </div>\n                <div class=\"col-6\">\n                  <ion-select\n                    interface=\"popover\"\n                    id=\"period_type\"\n                    formControlName=\"period_type\"\n                    placeholder=\"فترة السداد كل\"\n                    class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                  >\n                    <ion-select-option\n                      *ngFor=\"let item of period_types\"\n                      value=\"{{item.ref_code}}\"\n                    >\n                      {{item.ref_desc}}\n                    </ion-select-option>\n                  </ion-select>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                نسبه المصاريف الموزعه\n              </ion-label>\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <ion-input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"fees_rate\"\n                    formControlName=\"fees_rate\"\n                    min=\"0\"\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n                  ></ion-input>\n                </div>\n                <div class=\"col-6\">\n                  <ion-select\n                    interface=\"popover\"\n                    id=\"loan_int_type\"\n                    formControlName=\"loan_int_type\"\n                    class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                  >\n                    <ion-select-option\n                      *ngFor=\"let item of loan_int_type\"\n                      value=\"{{item.ref_code}}\"\n                    >\n                      {{item.ref_desc}}\n                    </ion-select-option>\n                  </ion-select>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                مصاريف إدارية على القسط\n              </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"charges\"\n                min=\"0\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 9999.99, 2)\"\n              >\n              </ion-input>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                تاريخ القرض\n              </ion-label>\n              <ngx-datepicker\n                [parentForm]=\"TestCalculationMethodForm\"\n                parentFormControllerName=\"loan_date\"\n                [disabledValue]=\"true\"\n              ></ngx-datepicker>\n              <!-- <ion-input type=\"date\" class=\"form-control\" formControlName=\"loan_date\" min=\"0\">\n              </ion-input> -->\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                تخطى العطلات لليوم\n              </ion-label>\n              <ion-select\n                interface=\"popover\"\n                id=\"hd_skip\"\n                formControlName=\"hd_skip\"\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n              >\n                <ion-select-option\n                  *ngFor=\"let item of hd_skip\"\n                  value=\"{{item.ref_code}}\"\n                >\n                  {{item.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                نسبه المصاريف المقدمه\n              </ion-label>\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <ion-input\n                    type=\"text\"\n                    class=\"form-control\"\n                    formControlName=\"loan_int_rt_2\"\n                    min=\"0\"\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n                  >\n                  </ion-input>\n                </div>\n                <div class=\"col-6\">\n                  <ion-select\n                    interface=\"popover\"\n                    id=\"loan_int_type_2\"\n                    formControlName=\"loan_int_type_2\"\n                    placeholder=\"نسبه المصاريف المقدمه\"\n                    class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                  >\n                    <ion-select-option\n                      *ngFor=\"let item of loan_int_type_2\"\n                      value=\"{{item.ref_code}}\"\n                    >\n                      {{item.ref_desc}}\n                    </ion-select-option>\n                  </ion-select>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                طريقه إستخدام النسبه المقدمه\n              </ion-label>\n              <ion-select\n                interface=\"popover\"\n                id=\"loan_int_2_deduct\"\n                formControlName=\"loan_int_2_deduct\"\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n              >\n                <ion-select-option\n                  *ngFor=\"let item of loan_int_2_deduct\"\n                  value=\"{{item.ref_code}}\"\n                >\n                  {{item.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                يوم تخطى تاريخ القرض\n              </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"skip_day\"\n                min=\"1\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 31, 0)\"\n              >\n              </ion-input>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                يوم استحقاق اول قسط\n              </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"due_day\"\n                min=\"1\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 31, 0)\"\n              >\n              </ion-input>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                نسبة مصاريف اول قسط من مصاريف القرض\n              </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"first_inst_int\"\n                min=\"0\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </div>\n          </div>\n          <div class=\"row-12 pt-3\">\n            <div class=\"d-flex justify-content-center mt-2\">\n              <ion-button color=\"danger\" (click)=\"clearTestForm()\">\n                رجوع\n              </ion-button>\n              <ion-button\n                *ngIf=\"isTestCalcMethod\"\n                (click)=\"TestCalcMethodSubmit()\"\n              >\n                عرض\n              </ion-button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"card\" *ngIf=\"isTestCalcMethodResult\">\n  <div class=\"card-body\">\n    <div class=\"row justify-content-center\">\n      <div class=\"table-responsive\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th class=\"text-center\">الرقم المسلسل</th>\n              <th class=\"text-center\">قيمة القسط</th>\n              <th class=\"text-center\">الاصل</th>\n              <th class=\"text-center\">المصاريف</th>\n              <th class=\"text-center\">تاريخ الاستحقاق</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let result of TestResult; let i = index\">\n              <td class=\"text-center\">{{result.serial}}</td>\n              <td class=\"text-center\">\n                {{NumberFormatStyle(result.payamoun)}}\n              </td>\n              <td class=\"text-center\">\n                {{NumberFormatStyle(result.principle)}}\n              </td>\n              <td class=\"text-center\">{{NumberFormatStyle(result.fees)}}</td>\n              <td class=\"text-center\">{{checker(result.pay_date)}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"row-12 pt-3\">\n      <div class=\"d-flex justify-content-center mt-2\">\n        <ion-button color=\"danger\" (click)=\"clearTestResultForm()\">\n          رجوع\n        </ion-button>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_loan-calculation-methods_loan-calculation-methods_module_ts.js.map