"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_loan-app-revision_loan-app-revision_module_ts"],{

/***/ 58670:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-app-revision/loan-app-revision-routing.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanAppRevisionPageRoutingModule": function() { return /* binding */ LoanAppRevisionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_app_revision_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-app-revision.page */ 95912);






var routes = [{
  path: '',
  component: _loan_app_revision_page__WEBPACK_IMPORTED_MODULE_2__.LoanAppRevisionPage
}];

var LoanAppRevisionPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanAppRevisionPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanAppRevisionPageRoutingModule);
});

LoanAppRevisionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoanAppRevisionPageRoutingModule);


/***/ }),

/***/ 91454:
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-app-revision/loan-app-revision.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanAppRevisionPageModule": function() { return /* binding */ LoanAppRevisionPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_app_revision_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-app-revision-routing.module */ 58670);
/* harmony import */ var _loan_app_revision_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-app-revision.page */ 95912);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var LoanAppRevisionPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanAppRevisionPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanAppRevisionPageModule);
});

LoanAppRevisionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _loan_app_revision_routing_module__WEBPACK_IMPORTED_MODULE_2__.LoanAppRevisionPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_loan_app_revision_page__WEBPACK_IMPORTED_MODULE_3__.LoanAppRevisionPage],
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe]
})], LoanAppRevisionPageModule);


/***/ }),

/***/ 95912:
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-app-revision/loan-app-revision.page.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanAppRevisionPage": function() { return /* binding */ LoanAppRevisionPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _loan_app_revision_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-app-revision.page.html?ngResource */ 90543);
/* harmony import */ var _loan_app_revision_page_css_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-app-revision.page.css?ngResource */ 88521);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);













var LoanAppRevisionPage = /*#__PURE__*/function () {
  function LoanAppRevisionPage(formBuilder, http, env, authService, datepipe, DecimalPipe) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoanAppRevisionPage);

    this.formBuilder = formBuilder;
    this.http = http;
    this.env = env;
    this.authService = authService;
    this.datepipe = datepipe;
    this.DecimalPipe = DecimalPipe;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoanAppRevisionPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.authService.getUserInfo().then(function (userInfo) {
                  _this.branch_code_user_info = userInfo.branch_code;
                  _this.org_code_user_info = userInfo.org_code;
                });

              case 2:
                this.loanAppRevisionForm = this.formBuilder.group({
                  //client info card
                  client_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  nation_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  id_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  birth_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  client_code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  client_no: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  //this loan penalties
                  loan_penalties: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  pen_discard: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  pen_due: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  //ALL loans penalties
                  loan_penalties_all_loans: ["value of this.loan_penalties from all loans penalties SP"],
                  pen_discard_all_loans: ["value of this.pen_discard from all loans penalties SP"],
                  pen_due_all_loans: ["value of this.pen_due from all loans penalties SP"],
                  //loan app info card
                  application_key: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  loan_type_code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  calc_type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  loan_int_rt: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  loan_int_type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  loan_int_rt_2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  loan_int_type_2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  loan_int_2_deduct: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  period_length: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  period_type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  req_gp: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  payments_shift: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  req_no: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  req_am: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  app_charge: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  app_charge_perc_type: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  lo_commission_rt: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  stamp_duty_rt: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  installment_charges: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  entry_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  loan_usage_code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  iscore_facility_code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  //CO info الضامن الاول
                  co_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  co_client_key: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  co_gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  co_nation_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  co_id_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  co_birth_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  co_home_tel: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  co_home_add_1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  //CO info الضامن الثاني
                  co2_name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  co2_client_key: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  co2_gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  co2_nation_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  co2_id_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  co2_birth_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  co2_home_tel: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
                  co2_home_add_1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "clientSelected",
    value: function clientSelected(event) {
      var _this2 = this;

      this.SearchResult = event;
      console.log(event);
      var client_key = this.SearchResult.client_key.toString();
      var application_key = this.SearchResult.application_key.toString();
      var org_code = this.org_code_user_info.toString();
      var branch_code = this.branch_code_user_info.toString();
      this.http.post(this.env.API_URL + "api/LoanApplications/ClientLoanApplicationRevision", {
        client_key: client_key,
        application_key: application_key,
        org_code: org_code,
        branch_code: branch_code
      }).subscribe({
        next: function next(data) {
          _this2.LoanAppToRevisionInfo = data;
          console.log("data here:", _this2.LoanAppToRevisionInfo);

          _this2.getLoanAppToRevision();
        },
        error: function error(err) {}
      });
    }
  }, {
    key: "getLoanAppToRevision",
    value: function getLoanAppToRevision() {
      this.loanAppRevisionForm.patchValue({
        client_name: this.LoanAppToRevisionInfo.client_name
      });
      this.loanAppRevisionForm.patchValue({
        nation_id: this.LoanAppToRevisionInfo.nation_id
      });
      this.loanAppRevisionForm.patchValue({
        client_no: this.LoanAppToRevisionInfo.client_no
      });
      this.loanAppRevisionForm.patchValue({
        birth_date: this.datepipe.transform(this.LoanAppToRevisionInfo.birth_date, "yyyy-MM-dd")
      });
      this.loanAppRevisionForm.patchValue({
        id_date: this.datepipe.transform(this.LoanAppToRevisionInfo.id_date, "yyyy-MM-dd")
      });
      this.loanAppRevisionForm.patchValue({
        gender: this.LoanAppToRevisionInfo.gender
      });
      this.loanAppRevisionForm.patchValue({
        application_key: this.LoanAppToRevisionInfo.application_key
      });
      this.loanAppRevisionForm.patchValue({
        loan_type_code: this.LoanAppToRevisionInfo.loan_type_code
      });
      this.loanAppRevisionForm.patchValue({
        calc_type: this.LoanAppToRevisionInfo.calc_type
      }); //

      this.loanAppRevisionForm.patchValue({
        loan_int_rt: this.LoanAppToRevisionInfo.loan_int_rt
      });
      this.loanAppRevisionForm.patchValue({
        loan_int_type: this.LoanAppToRevisionInfo.loan_int_type
      });
      this.loanAppRevisionForm.patchValue({
        loan_int_rt_2: this.LoanAppToRevisionInfo.loan_int_rt_2
      });
      this.loanAppRevisionForm.patchValue({
        loan_int_type_2: this.LoanAppToRevisionInfo.loan_int_type_2
      });
      this.loanAppRevisionForm.patchValue({
        loan_int_2_deduct: this.LoanAppToRevisionInfo.loan_int_2_deduct
      }); //

      this.loanAppRevisionForm.patchValue({
        period_length: this.LoanAppToRevisionInfo.period_length
      });
      this.loanAppRevisionForm.patchValue({
        period_type: this.LoanAppToRevisionInfo.period_type
      });
      this.loanAppRevisionForm.patchValue({
        req_gp: this.LoanAppToRevisionInfo.req_gp
      });
      this.loanAppRevisionForm.patchValue({
        payments_shift: this.LoanAppToRevisionInfo.payments_shift
      });
      this.loanAppRevisionForm.patchValue({
        req_am: this.DecimalPipe.transform(this.LoanAppToRevisionInfo.req_am)
      });
      console.log("req_am", this.LoanAppToRevisionInfo.req_am);
      this.loanAppRevisionForm.patchValue({
        req_no: this.LoanAppToRevisionInfo.req_no
      }); //

      this.loanAppRevisionForm.patchValue({
        app_charge: this.LoanAppToRevisionInfo.app_charge
      });
      this.loanAppRevisionForm.patchValue({
        app_charge_perc_type: this.LoanAppToRevisionInfo.app_charge_perc_type
      }); // this.loanAppRevisionForm.patchValue({
      //   req_no: this.LoanAppToRevisionInfo.req_no,
      // });  app_type_ddl

      this.loanAppRevisionForm.patchValue({
        lo_commission_rt: this.LoanAppToRevisionInfo.lo_commission_rt
      });
      this.loanAppRevisionForm.patchValue({
        stamp_duty_rt: this.LoanAppToRevisionInfo.stamp_duty_rt
      }); //

      this.loanAppRevisionForm.patchValue({
        installment_charges: this.LoanAppToRevisionInfo.installment_charges
      });
      this.loanAppRevisionForm.patchValue({
        entry_date: this.datepipe.transform(this.LoanAppToRevisionInfo.entry_date, "yyyy-MM-dd")
      });
      this.loanAppRevisionForm.patchValue({
        loan_usage_code: this.LoanAppToRevisionInfo.loan_usage_code
      });
      this.loanAppRevisionForm.patchValue({
        iscore_facility_code: this.LoanAppToRevisionInfo.iscore_facility_code
      }); //

      this.loanAppRevisionForm.patchValue({
        co_name: this.LoanAppToRevisionInfo.co_name
      });
      this.loanAppRevisionForm.patchValue({
        co_nation_id: this.LoanAppToRevisionInfo.co_nation_id
      });
      this.loanAppRevisionForm.patchValue({
        co_id_date: this.datepipe.transform(this.LoanAppToRevisionInfo.co_id_date, "yyyy-MM-dd")
      });
      this.loanAppRevisionForm.patchValue({
        co_birth_date: this.datepipe.transform(this.LoanAppToRevisionInfo.co_birth_date, "yyyy-MM-dd")
      });
      this.loanAppRevisionForm.patchValue({
        co_gender: this.LoanAppToRevisionInfo.co_gender
      });
      this.loanAppRevisionForm.patchValue({
        co_home_tel: this.LoanAppToRevisionInfo.co_home_tel
      });
      this.loanAppRevisionForm.patchValue({
        co_home_add_1: this.LoanAppToRevisionInfo.co_home_add_1
      }); //

      this.loanAppRevisionForm.patchValue({
        co2_name: this.LoanAppToRevisionInfo.co2_name
      });
      this.loanAppRevisionForm.patchValue({
        co2_nation_id: this.LoanAppToRevisionInfo.co2_nation_id
      });
      this.loanAppRevisionForm.patchValue({
        co2_id_date: this.datepipe.transform(this.LoanAppToRevisionInfo.co2_id_date, "yyyy-MM-dd")
      });
      this.loanAppRevisionForm.patchValue({
        co2_birth_date: this.datepipe.transform(this.LoanAppToRevisionInfo.co2_birth_date, "yyyy-MM-dd")
      });
      this.loanAppRevisionForm.patchValue({
        co2_gender: this.LoanAppToRevisionInfo.co2_gender
      });
      this.loanAppRevisionForm.patchValue({
        co2_home_tel: this.LoanAppToRevisionInfo.co2_home_tel
      });
      this.loanAppRevisionForm.patchValue({
        co2_home_add_1: this.LoanAppToRevisionInfo.co2_home_add_1
      });
    }
  }, {
    key: "getTodayDate",
    value: function getTodayDate() {
      var today = new Date();
      var yyyy = today.getFullYear();
      var mm = today.getMonth() + 1;
      var dd = today.getDate();

      if (mm < 10) {
        mm = "0" + mm;
      }

      if (dd < 10) {
        dd = "0" + dd;
      }

      return yyyy + "-" + mm + "-" + dd;
    }
  }]);

  return LoanAppRevisionPage;
}();

LoanAppRevisionPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe
  }];
};

LoanAppRevisionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: "app-loan-app-revision",
  template: _loan_app_revision_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_loan_app_revision_page_css_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], LoanAppRevisionPage);


/***/ }),

/***/ 88521:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-app-revision/loan-app-revision.page.css?ngResource ***!
  \*******************************************************************************************/
/***/ (function(module) {

module.exports = ".divCenter {\r\n  justify-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.faded-line {\r\n  margin-bottom: 0.5em;\r\n  display: block;\r\n  border: none;\r\n  color: white;\r\n  height: 2px;\r\n  background: rgb(210, 210, 210);\r\n}\r\n\r\n.buttonExpand {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tYXBwLXJldmlzaW9uLnBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImxvYW4tYXBwLXJldmlzaW9uLnBhZ2UuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdkNlbnRlciB7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZhZGVkLWxpbmUge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIxMCwgMjEwLCAyMTApO1xyXG59XHJcblxyXG4uYnV0dG9uRXhwYW5kIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 90543:
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-app-revision/loan-app-revision.page.html?ngResource ***!
  \********************************************************************************************/
/***/ (function(module) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-client-search\n      [sourcePage]=\"6\"\n      [pageAction]=\"2\"\n      [resultType]=\"2\"\n      (selectedClient)=\"clientSelected($event)\"\n    >\n    </app-client-search>\n  </div>\n</div>\n<!-- *ngIf=\"isSearching\" -->\n<!-- *ngIf=\"isfirstForm\" -->\n\n<!-- <ion-img\n    [src]=\"'data:image/jpg;base64,' + this.RegulaIDImagePortrait\"\n    style=\"width: 100px; height: 100px\"\n    *ngIf=\"portrait\"\n  ></ion-img> -->\n\n<form [formGroup]=\"loanAppRevisionForm\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"divCenter\">\n        <h4><b>بيانات العميل</b></h4>\n        <div class=\"faded-line\"></div>\n      </div>\n      <br />\n      <div class=\"row\">\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> الاسم بالكامل </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"client_name\"\n              placeholder=\"الاسم بالكامل\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> الرقم القومي </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"nation_id\"\n              placeholder=\"الرقم القومي\"\n              [readonly]=\"true\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> النوع </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"gender\"\n              placeholder=\"النوع\"\n              [readonly]=\"true\"\n            >\n            </ion-input>\n          </div>\n        </div>\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> كود العميل </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"client_no\"\n              placeholder=\"كود العميل\"\n              [readonly]=\"true\"\n            >\n            </ion-input>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-12 col-md-4\">\n          <ion-label class=\"form-label\"> تاريخ الميلاد </ion-label>\n\n          <ion-input type=\"date\" formControlName=\"birth_date\"> </ion-input>\n        </div>\n\n        <div class=\"col-12 col-md-4\">\n          <ion-label class=\"form-label\"> تاريخ اصدار البطاقة </ion-label>\n\n          <ion-input type=\"date\" formControlName=\"id_date\"> </ion-input>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br />\n\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"divCenter\">\n        <h4><b>بيانات القرض المطلوب</b></h4>\n        <div class=\"faded-line\"></div>\n      </div>\n      <br />\n      <div class=\"row\">\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> رقم طلب القرض </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"application_key\"\n              placeholder=\"الاسم بالكامل\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> نوع طلب القرض </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"loan_type_code\"\n              placeholder=\"نوع طلب القرض\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> طريقة الحساب </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"calc_type\"\n              placeholder=\"طريقة الحساب\"\n            >\n            </ion-input>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> قيمة القرض المطلوب </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"req_am\"\n              placeholder=\"قيمة القرض المطلوب\"\n            >\n            </ion-input>\n          </div>\n        </div>\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> عدد الاقساط </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"req_no\"\n              placeholder=\"عدد الاقساط\"\n            >\n            </ion-input>\n          </div>\n        </div>\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> فترة السداد كل </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"period_length\"\n              placeholder=\"فترة السداد كل\"\n            >\n            </ion-input>\n          </div>\n        </div>\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> الفترة </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"period_type\"\n              placeholder=\"الفترة\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> فترة السماح </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"req_gp\"\n              placeholder=\"فترة السماح\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> عدد ايام الترحيل </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"payments_shift\"\n              placeholder=\"عدد ايام الترحيل\"\n            >\n            </ion-input>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> نسبة المصاريف الموزعة </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"loan_int_rt\"\n              placeholder=\"نسبة المصاريف الموزعة\"\n            >\n            </ion-input>\n          </div>\n        </div>\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> الفترة </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"loan_int_type\"\n              placeholder=\"الفترة\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> نسبة المصاريف المقدمة </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"loan_int_rt_2\"\n              placeholder=\"نسبة المصاريف المقدمة\"\n            >\n            </ion-input>\n          </div>\n        </div>\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> من </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"loan_int_type_2\"\n              placeholder=\"من\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> ||||| </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"loan_int_2_deduct\"\n              placeholder=\"|||||\"\n            >\n            </ion-input>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> رسوم طلب القرض </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"app_charge\"\n              placeholder=\"رسوم طلب القرض\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> نسبة رسوم طلب القرض </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"app_charge_perc_type\"\n              placeholder=\"نسبة رسوم طلب القرض\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> من ??????????? </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"\"\n              placeholder=\"من\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> عمولة المندوب </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"lo_commission_rt\"\n              placeholder=\"عمولة المندوب\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> رسوم الطوابع </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"stamp_duty_rt\"\n              placeholder=\"رسوم الطوابع\"\n            >\n            </ion-input>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> مصاريف ادارية على القسط </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"installment_charges\"\n              placeholder=\"مصاريف ادارية على القسط\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> تاريخ ادخال طلب القرض </ion-label>\n            <ion-input type=\"date\" formControlName=\"entry_date\"> </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> الاستخدام </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"loan_usage_code\"\n              placeholder=\"الاستخدام\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> طبيعة التسهيل </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"iscore_facility_code\"\n              placeholder=\"طبيعة التسهيل\"\n            >\n            </ion-input>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br />\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"divCenter\">\n        <h4><b>بيانات الضامنين - الضامن الاول</b></h4>\n        <div class=\"faded-line\"></div>\n      </div>\n      <br />\n      <div class=\"row\">\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> الاسم بالكامل </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"co_name\"\n              placeholder=\"الاسم بالكامل\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> الرقم القومي </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"co_nation_id\"\n              placeholder=\"الرقم القومي\"\n              [readonly]=\"true\"\n            >\n            </ion-input>\n          </div>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <ion-label class=\"form-label\"> تاريخ اصدار البطاقة </ion-label>\n\n          <ion-input type=\"date\" formControlName=\"co_id_date\"> </ion-input>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-6 col-md-2\">\n          <ion-label class=\"form-label\"> تاريخ الميلاد </ion-label>\n\n          <ion-input type=\"date\" formControlName=\"co_birth_date\"> </ion-input>\n        </div>\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> النوع </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"co_gender\"\n              placeholder=\"النوع\"\n              [readonly]=\"true\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> رقم التليفون </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"co_home_tel\"\n              placeholder=\"رقم التليفون\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> العنوان </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"co_home_add_1\"\n              placeholder=\"العنوان\"\n            >\n            </ion-input>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br />\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"divCenter\">\n        <h4><b>بيانات الضامنين - الضامن الثاني</b></h4>\n        <div class=\"faded-line\"></div>\n      </div>\n      <br />\n      <div class=\"row\">\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> الاسم بالكامل </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"co2_name\"\n              placeholder=\"الاسم بالكامل\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> الرقم القومي </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"co2_nation_id\"\n              placeholder=\"الرقم القومي\"\n              [readonly]=\"true\"\n            >\n            </ion-input>\n          </div>\n        </div>\n        <div class=\"col-12 col-md-4\">\n          <ion-label class=\"form-label\"> تاريخ اصدار البطاقة </ion-label>\n\n          <ion-input type=\"date\" formControlName=\"co2_id_date\"> </ion-input>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-6 col-md-2\">\n          <ion-label class=\"form-label\"> تاريخ الميلاد </ion-label>\n\n          <ion-input type=\"date\" formControlName=\"co2_birth_date\"> </ion-input>\n        </div>\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> النوع </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"co2_gender\"\n              placeholder=\"النوع\"\n              [readonly]=\"true\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> رقم التليفون </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"co2_home_tel\"\n              placeholder=\"رقم التليفون\"\n            >\n            </ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> العنوان </ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"co2_home_add_1\"\n              placeholder=\"العنوان\"\n            >\n            </ion-input>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br />\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"divCenter\">\n        <h4><b>الانتهاء من المراجعة</b></h4>\n        <div class=\"faded-line\"></div>\n      </div>\n      <br />\n\n      <div class=\"row\">\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\"> تاريخ المراجعة </ion-label>\n            <ion-input\n              type=\"date\"\n              formControlName=\"\"\n              value=\"{{getTodayDate()}}\"\n              [readonly]=\"true\"\n            >\n            </ion-input>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-button class=\"buttonExpand\">تمت المراجعة</ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br />\n</form>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_loan-app-revision_loan-app-revision_module_ts.js.map