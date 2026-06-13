"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_loan-calculator_loan-calculator_module_ts"],{

/***/ 21709:
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-calculator/loan-calculator-routing.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanCalculatorPageRoutingModule": function() { return /* binding */ LoanCalculatorPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_calculator_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-calculator.page */ 43310);






var routes = [{
  path: '',
  component: _loan_calculator_page__WEBPACK_IMPORTED_MODULE_2__.loancalculatorPage
}];

var LoanCalculatorPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanCalculatorPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanCalculatorPageRoutingModule);
});

LoanCalculatorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoanCalculatorPageRoutingModule);


/***/ }),

/***/ 26241:
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-calculator/loan-calculator.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanCalculatorPageModule": function() { return /* binding */ LoanCalculatorPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);
/* harmony import */ var _loan_calculator_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-calculator-routing.module */ 21709);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-archwizard */ 38531);
/* harmony import */ var _loan_calculator_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-calculator.page */ 43310);













var LoanCalculatorPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanCalculatorPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanCalculatorPageModule);
});

LoanCalculatorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _loan_calculator_routing_module__WEBPACK_IMPORTED_MODULE_3__.LoanCalculatorPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, angular_archwizard__WEBPACK_IMPORTED_MODULE_10__.ArchwizardModule],
  declarations: [_loan_calculator_page__WEBPACK_IMPORTED_MODULE_4__.loancalculatorPage]
})], LoanCalculatorPageModule);


/***/ }),

/***/ 43310:
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-calculator/loan-calculator.page.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loancalculatorPage": function() { return /* binding */ loancalculatorPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _loan_calculator_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-calculator.page.html?ngResource */ 45602);
/* harmony import */ var _loan_calculator_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-calculator.page.scss?ngResource */ 41418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);












var loancalculatorPage = /*#__PURE__*/function () {
  function loancalculatorPage(formBuilder, alertService, loansService, inputMaskingService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, loancalculatorPage);

    this.formBuilder = formBuilder;
    this.alertService = alertService;
    this.loansService = loansService;
    this.inputMaskingService = inputMaskingService; //#region Variables

    this.showLoader = false;
    this.calculationFormStatus = {
      valid: false,
      visible: true
    };
    this.gridFormStatus = {
      valid: false,
      visible: false
    };
    this.calculationForm = this.formBuilder.group({
      loanType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      requestNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern("[0-9]*")]],
      requestAmount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern("[0-9]*.[0-9]*")]]
    });
  } //#endregion


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(loancalculatorPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.showLoader = true;
                _context.next = 3;
                return this.loansService.getAllActiveLoanTypes();

              case 3:
                this.loanTypesModel = _context.sent;
                this.showLoader = false;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "SubmitForm",
    value: function SubmitForm() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var installmentCalculationRequest;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.calculationFormStatus.valid = true;

                if (this.calculationForm.valid) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                installmentCalculationRequest = {
                  req_am: Number(this.calculationForm.value.requestAmount).toString(),
                  req_no: this.calculationForm.value.requestNumber.toString(),
                  loan_type: this.calculationForm.value.loanType
                };
                _context2.prev = 4;
                this.showLoader = true;
                _context2.next = 8;
                return this.loansService.calculateLoanInstallment(installmentCalculationRequest);

              case 8:
                this.installmentCalculationResponse = _context2.sent;
                this.gridFormStatus.visible = true;
                this.showLoader = false;
                _context2.next = 17;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](4);
                this.showLoader = false;
                this.alertService.showAlertError(_context2.t0.message, false);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 13]]);
      }));
    }
  }, {
    key: "enterClick",
    value: function enterClick(event) {
      if (event.key == "Enter") {
        this.SubmitForm();
      }
    }
  }]);

  return loancalculatorPage;
}();

loancalculatorPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_7__.LoansService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_6__.InputMaskingService
  }];
};

loancalculatorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: "app-loan-calculator",
  template: _loan_calculator_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_loan_calculator_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], loancalculatorPage);


/***/ }),

/***/ 41418:
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-calculator/loan-calculator.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ (function(module) {

module.exports = ".table tbody th,\n.table tbody td {\n  padding: 0.4rem 0.9375rem !important;\n}\n\n.labelpad {\n  padding-bottom: 55px;\n}\n\n@media (min-width: 770px) {\n  .btnMar {\n    margin-right: 290%;\n    font-size: medium;\n  }\n}\n\n.checkBoxs {\n  margin-right: 1.5rem;\n}\n\n.form-control-error {\n  border-color: #ff3366;\n}\n\n.form-control-error:hover {\n  border-color: #da0036;\n}\n\n.input-validator {\n  font-weight: 600;\n  padding-right: 10px;\n  padding-left: 10px;\n  color: #ff3366 !important;\n}\n\n.input-validator::before {\n  content: \"-\";\n  margin-left: 6px;\n}\n\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.checkBox-isactive {\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n\n.group-title {\n  font-weight: 700;\n  font-size: 1.2rem;\n  text-align: center;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n  border-radius: 6px;\n  background-image: linear-gradient(to left, rgba(112, 123, 245, 0.2), var(--card-bg));\n  border-color: #c8cbea;\n  color: var(--body-color);\n}\n\n.nested-form {\n  border: 2px solid rgba(112, 123, 245, 0.2);\n  border-radius: 5px;\n  padding: 1rem 2rem;\n}\n\n.form-group-title {\n  display: block;\n  color: var(--theme-color-primary);\n  font-weight: 700;\n}\n\n.alert-button-confirm {\n  color: var(--body-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tY2FsY3VsYXRvci5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEZWxldGUlMjBpdFxcTmV3TW9oYXNzaWxDbGllbnRfMzA5NV9zcmNcXE5ld01vaGFzc2lsQ2xpZW50XFxzcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxsb2Fuc1xcbG9hbi1jYWxjdWxhdG9yXFxsb2FuLWNhbGN1bGF0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJOztFQUVFLG9DQUFBO0FDRk47O0FET0E7RUFDRSxvQkFBQTtBQ0pGOztBRFdBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0VDUkY7QUFDRjs7QURXQTtFQUNFLG9CQUFBO0FDVEY7O0FEWUE7RUFDRSxxQkFBQTtBQ1RGOztBRFdFO0VBQ0UscUJBQUE7QUNUSjs7QURhQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDVkY7O0FEWUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNWSjs7QURlRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ1pKOztBRGdCQTtFQUVFLG1CQUFBO01BQUEscUJBQUE7QUNkRjs7QURpQkE7RUFHRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFHQSxvRkFBQTtFQUdBLHFCQUFBO0VBQ0Esd0JBQUE7QUNwQkY7O0FEdUJBO0VBR0UsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDdEJGOztBRHlCQTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDdEJGOztBRHlCQTtFQUNFLHdCQUFBO0FDdEJGIiwiZmlsZSI6ImxvYW4tY2FsY3VsYXRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gIHRib2R5IHtcclxuXHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgcGFkZGluZzogMC40cmVtIDAuOTM3NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxhYmVscGFkIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcclxufVxyXG5cclxuLy8gaW9uLWJ1dHRvbiB7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbi8vICAgcGFkZGluZy1yaWdodDogMjAlO1xyXG4vLyAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NzBweCkge1xyXG4gIC5idG5NYXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyOTAlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgfVxyXG59XHJcblxyXG4uY2hlY2tCb3hzIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1lcnJvciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTgsIDAsIDU0KTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC12YWxpZGF0b3Ige1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIi1cIjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgNTEsIDEwMikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jaGVja0JveC1pc2FjdGl2ZSB7XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5ncm91cC10aXRsZSB7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjNDVjY2IxLCAwLjgpO1xyXG4gIC8vIGNvbG9yOiAjZjZmY2VmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNhNGQ0OTEsIDAuMyk7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2M4Y2JlYTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCxcclxuICAgICAgcmdiYSgjNzA3YmY1LCAwLjIpLFxyXG4gICAgICB2YXIoLS1jYXJkLWJnKSk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzhjYmVhO1xyXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxufVxyXG5cclxuLm5lc3RlZC1mb3JtIHtcclxuICAvLyBib3JkZXItcmlnaHQ6IDAuMnJlbSBzb2xpZCByZ2JhKCM3MDdiZjUsIDAuMik7XHJcbiAgLy8gcGFkZGluZy1yaWdodDogMXJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKCM3MDdiZjUsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1wcmltYXJ5KTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYWxlcnQtYnV0dG9uLWNvbmZpcm0ge1xyXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxufVxyXG5cclxuIiwiLnRhYmxlIHRib2R5IHRoLFxuLnRhYmxlIHRib2R5IHRkIHtcbiAgcGFkZGluZzogMC40cmVtIDAuOTM3NXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWxwYWQge1xuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc3MHB4KSB7XG4gIC5idG5NYXIge1xuICAgIG1hcmdpbi1yaWdodDogMjkwJTtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgfVxufVxuLmNoZWNrQm94cyB7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuXG4uZm9ybS1jb250cm9sLWVycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmYzMzY2O1xufVxuLmZvcm0tY29udHJvbC1lcnJvcjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2RhMDAzNjtcbn1cblxuLmlucHV0LXZhbGlkYXRvciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6ICNmZjMzNjYgIWltcG9ydGFudDtcbn1cbi5pbnB1dC12YWxpZGF0b3I6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiLVwiO1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uZm9ybS1sYWJlbC1yZXF1aXJlZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIipcIjtcbiAgY29sb3I6ICNmZjMzNjYgIWltcG9ydGFudDtcbn1cblxuLmNoZWNrQm94LWlzYWN0aXZlIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uZ3JvdXAtdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMTEyLCAxMjMsIDI0NSwgMC4yKSwgdmFyKC0tY2FyZC1iZykpO1xuICBib3JkZXItY29sb3I6ICNjOGNiZWE7XG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcbn1cblxuLm5lc3RlZC1mb3JtIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMTIsIDEyMywgMjQ1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbn1cblxuLmZvcm0tZ3JvdXAtdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYWxlcnQtYnV0dG9uLWNvbmZpcm0ge1xuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XG59Il19 */";

/***/ }),

/***/ 45602:
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-calculator/loan-calculator.page.html?ngResource ***!
  \****************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\r\n\r\n<div\r\n  class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\"\r\n>\r\n  <div>\r\n    <h4 class=\"mr-1 mb-md-0\">حساب الاقساط</h4>\r\n  </div>\r\n</div>\r\n\r\n<ion-card *ngIf=\"calculationFormStatus.visible\">\r\n  <ion-card-content>\r\n    <ion-grid>\r\n      <form [formGroup]=\"calculationForm\" (keyup)=\"enterClick($event)\">\r\n        <ion-row>\r\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\r\n            <ion-label class=\"form-label form-label-required\">\r\n              قيمة القرض المطلوب\r\n            </ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"requestAmount\"\r\n              placeholder=\"قيمة القرض المطلوب\"\r\n              (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e9, 0)\"\r\n            >\r\n            </ion-input>\r\n            <ion-note\r\n              color=\"danger\"\r\n              class=\"input-validator\"\r\n              *ngIf=\"calculationFormStatus.valid && (calculationForm.controls['requestAmount'].hasError('required'))\"\r\n              role=\"alert\"\r\n            >\r\n              يجب كتابة قيمة القرض\r\n            </ion-note>\r\n            <ion-note\r\n              color=\"danger\"\r\n              class=\"input-validator\"\r\n              *ngIf=\"calculationFormStatus.valid && (calculationForm.controls['requestAmount'].hasError('pattern'))\"\r\n              role=\"alert\"\r\n            >\r\n              أرقام فقط\r\n            </ion-note>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\r\n            <ion-label class=\"form-label form-label-required\">\r\n              عـدد الأقساط\r\n            </ion-label>\r\n            <ion-input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"requestNumber\"\r\n              placeholder=\"عـدد الأقساط\"\r\n              (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\r\n            >\r\n            </ion-input>\r\n            <ion-note\r\n              color=\"danger\"\r\n              class=\"input-validator\"\r\n              *ngIf=\"calculationFormStatus.valid && (calculationForm.controls['requestNumber'].hasError('required'))\"\r\n              role=\"alert\"\r\n            >\r\n              يجب كتابة عدد الاقساط\r\n            </ion-note>\r\n            <ion-note\r\n              color=\"danger\"\r\n              class=\"input-validator\"\r\n              *ngIf=\"calculationFormStatus.valid && (calculationForm.controls['requestNumber'].hasError('pattern'))\"\r\n              role=\"alert\"\r\n            >\r\n              أرقام فقط\r\n            </ion-note>\r\n          </ion-col>\r\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\r\n            <ion-label class=\"form-label form-label-required\">\r\n              نوع التقسيط\r\n            </ion-label>\r\n            <ion-select\r\n              interface=\"popover\"\r\n              placeholder=\"نوع التقسيط\"\r\n              formControlName=\"loanType\"\r\n              class=\"subselect\"\r\n            >\r\n              <ion-select-option\r\n                *ngFor=\"let loan of loanTypesModel\"\r\n                [value]=\"loan.loan_type_code\"\r\n              >\r\n                {{loan.loan_type_name}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n            <ion-note\r\n              color=\"danger\"\r\n              class=\"input-validator\"\r\n              *ngIf=\"calculationFormStatus.valid && (calculationForm.controls['loanType'].hasError('required'))\"\r\n              role=\"alert\"\r\n            >\r\n              يجب اختيار نوع القرض\r\n            </ion-note>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\" style=\"padding-top: 10px\">\r\n          <ion-button (click)=\"SubmitForm()\">احسب</ion-button>\r\n        </ion-row>\r\n      </form>\r\n    </ion-grid>\r\n  </ion-card-content>\r\n</ion-card>\r\n<ion-card *ngIf=\"gridFormStatus.visible\">\r\n  <ion-card-content>\r\n    <ion-grid>\r\n      <form>\r\n        <ion-row class=\"header-row\">\r\n          <ion-col>\r\n            <ion-label>عدد الاقساط</ion-label>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-label>القسط</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row\r\n          class=\"details-row\"\r\n          *ngFor=\"let calc of installmentCalculationResponse\"\r\n        >\r\n          <ion-col>\r\n            <ion-label>{{calc.serial| number:'1.0-0':'en-US'}}</ion-label>\r\n          </ion-col>\r\n          <ion-col>\r\n            <ion-label>{{calc.payamoun| number:'1.0-0':'en-US'}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </ion-grid>\r\n  </ion-card-content>\r\n</ion-card>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_loan-calculator_loan-calculator_module_ts.js.map