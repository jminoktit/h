"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_officer_productivity_officer-productivity_module_ts"],{

/***/ 33566:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/officer/productivity/officer-productivity-routing.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfficerProductivityPageRoutingModule": function() { return /* binding */ OfficerProductivityPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _officer_productivity_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./officer-productivity.page */ 14589);






var routes = [{
  path: '',
  component: _officer_productivity_page__WEBPACK_IMPORTED_MODULE_2__.officerproductivityPage
}];

var OfficerProductivityPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function OfficerProductivityPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, OfficerProductivityPageRoutingModule);
});

OfficerProductivityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], OfficerProductivityPageRoutingModule);


/***/ }),

/***/ 35116:
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/officer/productivity/officer-productivity.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "officerproductivityPageModule": function() { return /* binding */ officerproductivityPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);
/* harmony import */ var _officer_productivity_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./officer-productivity-routing.module */ 33566);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-archwizard */ 38531);
/* harmony import */ var _officer_productivity_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./officer-productivity.page */ 14589);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-apexcharts */ 20054);














var officerproductivityPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function officerproductivityPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, officerproductivityPageModule);
});

officerproductivityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _officer_productivity_routing_module__WEBPACK_IMPORTED_MODULE_3__.OfficerProductivityPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, angular_archwizard__WEBPACK_IMPORTED_MODULE_10__.ArchwizardModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule],
  declarations: [_officer_productivity_page__WEBPACK_IMPORTED_MODULE_4__.officerproductivityPage]
})], officerproductivityPageModule);


/***/ }),

/***/ 14589:
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/officer/productivity/officer-productivity.page.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "officerproductivityPage": function() { return /* binding */ officerproductivityPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _officer_productivity_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./officer-productivity.page.html?ngResource */ 88062);
/* harmony import */ var _officer_productivity_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./officer-productivity.page.scss?ngResource */ 90830);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);















var httpOptions = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpHeaders({
    "Content-Type": "application/json"
  })
};

var officerproductivityPage = /*#__PURE__*/function () {
  function officerproductivityPage(env, http, formBuilder, alertController, datepipe, authService, platform, router, alertSerivce, cdref) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, officerproductivityPage);

    this.env = env;
    this.http = http;
    this.formBuilder = formBuilder;
    this.alertController = alertController;
    this.datepipe = datepipe;
    this.authService = authService;
    this.platform = platform;
    this.router = router;
    this.alertSerivce = alertSerivce;
    this.cdref = cdref; //#region variable

    this.showLoader = false;
    this.currentDateTime = new Date();
    this.isValid = false;
    this.DefaultValueDropDown = "0"; //check if the values goes to the Methods to show the Form

    this.CheckInstallmentListByDay = false;
    this.CheckInstallmentListByMonth = false; //#endregion
    //#region  // use this method in HTML .. If the condition true  show the Form

    this.ValidObject = [{
      CountClientsBYMonthValid: false,
      CountClientsBYYearValid: false,
      ValueClientsBYMonthValid: false,
      ValueClientsBYYearValid: false,
      InstallmentListByDayValid: false,
      InstallmentListByMonthValid: false
    }];
    this.OfficerForm = this.formBuilder.group({
      Officer: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(officerproductivityPage, [{
    key: "Results",
    get: function get() {
      if (this.ValidObject[0].CountClientsBYMonthValid && this.ValidObject[0].CountClientsBYYearValid && this.ValidObject[0].ValueClientsBYMonthValid && this.ValidObject[0].ValueClientsBYYearValid && this.ValidObject[0].InstallmentListByDayValid && this.ValidObject[0].InstallmentListByMonthValid) {
        this.showLoader = false;
        return true;
      }
    } //#endregion

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.registerBackButtonListener();
                _context.next = 3;
                return this.authService.getUserInfo().then(function (userInfo) {
                  _this.branch_code = userInfo.branch_code;
                  _this.org_code = userInfo.org_code;
                  _this.officer_key = userInfo.officer_key;
                  _this.job_code = userInfo.job_code;
                });

              case 3:
                _context.prev = 3;

                if (!(this.job_code == "-3" || this.job_code == "-4" || this.job_code == "-5")) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return this.GetOfficersBySuperVisor();

              case 7:
                _context.next = 19;
                break;

              case 9:
                if (!(this.job_code == "-2")) {
                  _context.next = 19;
                  break;
                }

                this.showLoader = true;
                _context.next = 13;
                return this.GetOfficerInstallmentListDay();

              case 13:
                _context.next = 15;
                return this.GetOfficerInstallmentListMonth();

              case 15:
                _context.next = 17;
                return this.GetOfficerProdByMonth();

              case 17:
                _context.next = 19;
                return this.GetOfficerProdByYear();

              case 19:
                _context.next = 24;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 21]]);
      }));
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.backButtonListener.unsubscribe();
    }
  }, {
    key: "registerBackButtonListener",
    value: function registerBackButtonListener() {
      var _this2 = this;

      this.backButtonListener = this.platform.backButton.subscribeWithPriority(10, function (next) {
        _this2.backButton();
      });
    }
  }, {
    key: "backButton",
    value: function backButton() {
      this.router.navigate(["/home"]);
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      this.cdref.detectChanges();
    }
  }, {
    key: "GetOfficersBySuperVisor",
    value: function GetOfficersBySuperVisor() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var _this3 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.showLoader = true;

                if (this.job_code == "-3" || this.job_code == "-4" || this.job_code == "-5") {
                  this.http.get(this.env.API_URL + "api/Officer/GetOfficersBySuperVisor").subscribe({
                    next: function next(data) {
                      _this3.OfficersBySuperVisor = data;
                      _this3.showLoader = false;

                      _this3.Result();
                    },
                    error: function error(err) {
                      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
                        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                console.log(err);
                                this.showLoader = false;
                                _context2.next = 4;
                                return this.alertSerivce.showAlertError(err.error, false);

                              case 4:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    }
                  });
                }

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    } //#region الانتاجية شهر و سنة

  }, {
    key: "GetOfficerProdByMonth",
    value: function GetOfficerProdByMonth() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
        var _this4 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;

                if (!(this.job_code == "-2")) {
                  _context8.next = 5;
                  break;
                }

                return _context8.abrupt("return", this.http.post(this.env.API_URL + "api/Officer/GetOfficerProduction", {
                  org_code: this.org_code,
                  currency_code: "0",
                  start_date: this.datepipe.transform(this.currentDateTime, "yyyy-MM-01"),
                  //2022-03-01
                  end_date: this.datepipe.transform(this.currentDateTime, "yyyy-MM-dd"),
                  //2022-03-30
                  branch_code: this.branch_code,
                  officer_key: this.officer_key,
                  officer_type: "0"
                }).subscribe({
                  next: function next(data) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              this.officerProductivitythisMonth = data;

                              if (!(data.length == 0)) {
                                _context4.next = 6;
                                break;
                              }

                              this.CountClientsBYMonth(0, 0);
                              this.ValueClientsBYMonth(0, 0);
                              _context4.next = 10;
                              break;

                            case 6:
                              _context4.next = 8;
                              return this.CountClientsBYMonth(parseInt(this.officerProductivitythisMonth[0].no_new_loans) - parseInt(this.officerProductivitythisMonth[0].canc_no_new_loans), parseInt(this.officerProductivitythisMonth[0].no_repeat_loans) - parseInt(this.officerProductivitythisMonth[0].no_new_loans) - parseInt(this.officerProductivitythisMonth[0].canc_no_repeat_loans) - parseInt(this.officerProductivitythisMonth[0].canc_no_new_loans));

                            case 8:
                              _context4.next = 10;
                              return this.ValueClientsBYMonth(parseInt(this.officerProductivitythisMonth[0].am_new_loans) - parseInt(this.officerProductivitythisMonth[0].canc_am_new_loans), parseInt(this.officerProductivitythisMonth[0].am_repeat_loans) - parseInt(this.officerProductivitythisMonth[0].am_new_loans) - parseInt(this.officerProductivitythisMonth[0].canc_am_repeat_loans) - parseInt(this.officerProductivitythisMonth[0].canc_am_new_loans));

                            case 10:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4, this);
                    }));
                  },
                  error: function error(err) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              _context5.next = 2;
                              return this.alertSerivce.showAlertError(err.error, false);

                            case 2:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5, this);
                    }));
                  }
                }));

              case 5:
                if (this.job_code == "-3" || this.job_code == "-4" || this.job_code == "-5") {
                  this.Officer = this.OfficerForm.value.Officer.toString();
                  this.http.post(this.env.API_URL + "api/Officer/GetOfficerProduction", {
                    org_code: this.org_code,
                    currency_code: "0",
                    start_date: this.datepipe.transform(this.currentDateTime, "yyyy-MM-01"),
                    //2022-03-01
                    end_date: this.datepipe.transform(this.currentDateTime, "yyyy-MM-dd"),
                    //2022-03-30
                    branch_code: this.branch_code,
                    officer_key: this.Officer,
                    officer_type: "0"
                  }).subscribe({
                    next: function next(data) {
                      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
                        var totno_new_loans, totam_new_loans, totcanc_no_new_loans, totcanc_am_new_loans, totno_repeat_loans, totcanc_no_repeat_loans, totam_repeat_loans, totcanc_am_repeat_loans, i;
                        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                this.officerProductivitythisMonth = data;

                                if (!(data.length == 0)) {
                                  _context6.next = 6;
                                  break;
                                }

                                this.CountClientsBYMonth(0, 0);
                                this.ValueClientsBYMonth(0, 0);
                                _context6.next = 26;
                                break;

                              case 6:
                                if (!(this.OfficerForm.value.Officer == 0)) {
                                  _context6.next = 22;
                                  break;
                                }

                                totno_new_loans = 0;
                                totam_new_loans = 0;
                                totcanc_no_new_loans = 0;
                                totcanc_am_new_loans = 0;
                                totno_repeat_loans = 0;
                                totcanc_no_repeat_loans = 0;
                                totam_repeat_loans = 0;
                                totcanc_am_repeat_loans = 0;

                                for (i = 0; i < this.officerProductivitythisMonth.length;) {
                                  if (this.officerProductivitythisMonth[i].currency_code == "1") {
                                    totno_new_loans += parseInt(this.officerProductivitythisMonth[i].no_new_loans);
                                    totam_new_loans += parseInt(this.officerProductivitythisMonth[i].am_new_loans);
                                    totcanc_no_new_loans += parseInt(this.officerProductivitythisMonth[i].canc_no_new_loans);
                                    totcanc_am_new_loans += parseInt(this.officerProductivitythisMonth[i].canc_am_new_loans);
                                    totno_repeat_loans += parseInt(this.officerProductivitythisMonth[i].no_repeat_loans);
                                    totcanc_no_repeat_loans += parseInt(this.officerProductivitythisMonth[i].canc_no_repeat_loans);
                                    totam_repeat_loans += parseInt(this.officerProductivitythisMonth[i].am_repeat_loans);
                                    totcanc_am_repeat_loans += parseInt(this.officerProductivitythisMonth[i].canc_am_repeat_loans);
                                  }

                                  i++;
                                }

                                _context6.next = 18;
                                return this.CountClientsBYMonth(totno_new_loans - totcanc_no_new_loans, totno_repeat_loans - totno_new_loans - (totcanc_no_repeat_loans - totcanc_no_new_loans));

                              case 18:
                                _context6.next = 20;
                                return this.ValueClientsBYMonth(totam_new_loans - totcanc_am_new_loans, totam_repeat_loans - totam_new_loans - (totcanc_am_repeat_loans - totcanc_am_new_loans));

                              case 20:
                                _context6.next = 26;
                                break;

                              case 22:
                                _context6.next = 24;
                                return this.CountClientsBYMonth(parseInt(this.officerProductivitythisMonth[0].no_new_loans) - parseInt(this.officerProductivitythisMonth[0].canc_no_new_loans), parseInt(this.officerProductivitythisMonth[0].no_repeat_loans) - parseInt(this.officerProductivitythisMonth[0].no_new_loans) - parseInt(this.officerProductivitythisMonth[0].canc_no_repeat_loans) - parseInt(this.officerProductivitythisMonth[0].canc_no_new_loans));

                              case 24:
                                _context6.next = 26;
                                return this.ValueClientsBYMonth(parseInt(this.officerProductivitythisMonth[0].am_new_loans) - parseInt(this.officerProductivitythisMonth[0].canc_am_new_loans), parseInt(this.officerProductivitythisMonth[0].am_repeat_loans) - parseInt(this.officerProductivitythisMonth[0].am_new_loans) - parseInt(this.officerProductivitythisMonth[0].canc_am_repeat_loans) - parseInt(this.officerProductivitythisMonth[0].canc_am_new_loans));

                              case 26:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6, this);
                      }));
                    },
                    error: function error(err) {
                      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
                        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                _context7.next = 2;
                                return this.alertSerivce.showAlertError(err.error, false);

                              case 2:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this);
                      }));
                    }
                  });
                }

              case 6:
                _context8.next = 13;
                break;

              case 8:
                _context8.prev = 8;
                _context8.t0 = _context8["catch"](0);
                console.log(_context8.t0);
                this.CountClientsBYMonth(0, 0);
                this.ValueClientsBYMonth(0, 0);

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 8]]);
      }));
    }
  }, {
    key: "GetOfficerProdByYear",
    value: function GetOfficerProdByYear() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee13() {
        var _this5 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                try {
                  if (this.job_code == "-2") {
                    this.http.post(this.env.API_URL + "api/Officer/GetOfficerProduction", {
                      org_code: this.org_code,
                      currency_code: "0",
                      start_date: this.datepipe.transform(this.currentDateTime, "yyyy-01-01"),
                      //2022-01-01
                      end_date: this.datepipe.transform(this.currentDateTime, "yyyy-MM-dd"),
                      //2022-12-30
                      branch_code: this.branch_code,
                      officer_key: this.officer_key,
                      officer_type: "0"
                    }).subscribe({
                      next: function next(data) {
                        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
                          return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
                            while (1) {
                              switch (_context9.prev = _context9.next) {
                                case 0:
                                  this.officerProductivitythisYear = data;

                                  if (!(data.length == 0)) {
                                    _context9.next = 6;
                                    break;
                                  }

                                  this.CountClientsBYYear(0, 0);
                                  this.ValueClientsBYYear(0, 0);
                                  _context9.next = 10;
                                  break;

                                case 6:
                                  _context9.next = 8;
                                  return this.CountClientsBYYear(parseInt(this.officerProductivitythisYear[0].no_new_loans) - parseInt(this.officerProductivitythisYear[0].canc_no_new_loans), parseInt(this.officerProductivitythisYear[0].no_repeat_loans) - parseInt(this.officerProductivitythisYear[0].no_new_loans) - parseInt(this.officerProductivitythisYear[0].canc_no_repeat_loans) - parseInt(this.officerProductivitythisYear[0].canc_no_new_loans));

                                case 8:
                                  _context9.next = 10;
                                  return this.ValueClientsBYYear(parseInt(this.officerProductivitythisYear[0].am_new_loans) - parseInt(this.officerProductivitythisYear[0].canc_am_new_loans), parseInt(this.officerProductivitythisYear[0].am_repeat_loans) - parseInt(this.officerProductivitythisYear[0].am_new_loans) - parseInt(this.officerProductivitythisYear[0].canc_am_repeat_loans) - parseInt(this.officerProductivitythisYear[0].canc_am_new_loans));

                                case 10:
                                case "end":
                                  return _context9.stop();
                              }
                            }
                          }, _callee9, this);
                        }));
                      },
                      error: function error(err) {
                        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10() {
                          return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context10) {
                            while (1) {
                              switch (_context10.prev = _context10.next) {
                                case 0:
                                  _context10.next = 2;
                                  return this.alertSerivce.showAlertError(err.error, false);

                                case 2:
                                case "end":
                                  return _context10.stop();
                              }
                            }
                          }, _callee10, this);
                        }));
                      }
                    });
                  } else if (this.job_code == "-3" || this.job_code == "-4" || this.job_code == "-5") {
                    this.Officer = this.OfficerForm.value.Officer.toString();
                    this.http.post(this.env.API_URL + "api/Officer/GetOfficerProduction", {
                      org_code: this.org_code,
                      currency_code: "0",
                      start_date: this.datepipe.transform(this.currentDateTime, "yyyy-01-01"),
                      //2022-01-01
                      end_date: this.datepipe.transform(this.currentDateTime, "yyyy-MM-dd"),
                      //2022-12-30
                      branch_code: this.branch_code,
                      officer_key: this.Officer,
                      officer_type: "0"
                    }).subscribe({
                      next: function next(data) {
                        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee11() {
                          var totno_new_loans, totam_new_loans, totcanc_no_new_loans, totcanc_am_new_loans, totno_repeat_loans, totcanc_no_repeat_loans, totam_repeat_loans, totcanc_am_repeat_loans, i;
                          return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee11$(_context11) {
                            while (1) {
                              switch (_context11.prev = _context11.next) {
                                case 0:
                                  this.officerProductivitythisYear = data;

                                  if (!(data.length == 0)) {
                                    _context11.next = 6;
                                    break;
                                  }

                                  this.CountClientsBYYear(0, 0);
                                  this.ValueClientsBYYear(0, 0);
                                  _context11.next = 26;
                                  break;

                                case 6:
                                  if (!(this.OfficerForm.value.Officer == 0)) {
                                    _context11.next = 22;
                                    break;
                                  }

                                  totno_new_loans = 0;
                                  totam_new_loans = 0;
                                  totcanc_no_new_loans = 0;
                                  totcanc_am_new_loans = 0;
                                  totno_repeat_loans = 0;
                                  totcanc_no_repeat_loans = 0;
                                  totam_repeat_loans = 0;
                                  totcanc_am_repeat_loans = 0;

                                  for (i = 0; i < this.officerProductivitythisYear.length;) {
                                    if (this.officerProductivitythisYear[i].currency_code == "1") {
                                      totno_new_loans += parseInt(this.officerProductivitythisYear[i].no_new_loans);
                                      totam_new_loans += parseInt(this.officerProductivitythisYear[i].am_new_loans);
                                      totcanc_no_new_loans += parseInt(this.officerProductivitythisYear[i].canc_no_new_loans);
                                      totcanc_am_new_loans += parseInt(this.officerProductivitythisYear[i].canc_am_new_loans);
                                      totno_repeat_loans += parseInt(this.officerProductivitythisYear[i].no_repeat_loans);
                                      totcanc_no_repeat_loans += parseInt(this.officerProductivitythisYear[i].canc_no_repeat_loans);
                                      totam_repeat_loans += parseInt(this.officerProductivitythisYear[i].am_repeat_loans);
                                      totcanc_am_repeat_loans += parseInt(this.officerProductivitythisYear[i].canc_am_repeat_loans);
                                    }

                                    i++;
                                  }

                                  _context11.next = 18;
                                  return this.CountClientsBYYear(totno_new_loans - totcanc_no_new_loans, totno_repeat_loans - totno_new_loans - (totcanc_no_repeat_loans - totcanc_no_new_loans));

                                case 18:
                                  _context11.next = 20;
                                  return this.ValueClientsBYYear(totam_new_loans - totcanc_am_new_loans, totam_repeat_loans - totam_new_loans - (totcanc_am_repeat_loans - totcanc_am_new_loans));

                                case 20:
                                  _context11.next = 26;
                                  break;

                                case 22:
                                  _context11.next = 24;
                                  return this.CountClientsBYYear(parseInt(this.officerProductivitythisYear[0].no_new_loans) - parseInt(this.officerProductivitythisYear[0].canc_no_new_loans), parseInt(this.officerProductivitythisYear[0].no_repeat_loans) - parseInt(this.officerProductivitythisYear[0].no_new_loans) - parseInt(this.officerProductivitythisYear[0].canc_no_repeat_loans) - parseInt(this.officerProductivitythisYear[0].canc_no_new_loans));

                                case 24:
                                  _context11.next = 26;
                                  return this.ValueClientsBYYear(parseInt(this.officerProductivitythisYear[0].am_new_loans) - parseInt(this.officerProductivitythisYear[0].canc_am_new_loans), parseInt(this.officerProductivitythisYear[0].am_repeat_loans) - parseInt(this.officerProductivitythisYear[0].am_new_loans) - parseInt(this.officerProductivitythisYear[0].canc_am_repeat_loans) - parseInt(this.officerProductivitythisYear[0].canc_am_new_loans));

                                case 26:
                                case "end":
                                  return _context11.stop();
                              }
                            }
                          }, _callee11, this);
                        }));
                      },
                      error: function error(err) {
                        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee12() {
                          return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee12$(_context12) {
                            while (1) {
                              switch (_context12.prev = _context12.next) {
                                case 0:
                                  _context12.next = 2;
                                  return this.alertSerivce.showAlertError(err.error, false);

                                case 2:
                                case "end":
                                  return _context12.stop();
                              }
                            }
                          }, _callee12, this);
                        }));
                      }
                    });
                  }
                } catch (error) {
                  console.log(error);
                }

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
    }
  }, {
    key: "CountClientsBYMonth",
    value: function CountClientsBYMonth(a, b) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee14() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                try {
                  if (a == 0 && b == 0) {
                    this.chartCountMonth = {
                      nonAxisSeries: [a, b, 1],
                      colors: ["#0D95BC", "#F36F13", "#413F42"],
                      chart: {
                        height: 240,
                        type: "pie"
                      },
                      stroke: {
                        colors: ["rgba(0,0,0,0)"]
                      },
                      legend: {
                        position: "bottom",
                        horizontalAlign: "center",
                        fontSize: "15px",
                        fontWeight: 550,
                        labels: {
                          colors: undefined,
                          useSeriesColors: true
                        },
                        onItemClick: {
                          toggleDataSeries: false
                        },
                        onItemHover: {
                          highlightDataSeries: false
                        }
                      },
                      dataLabels: {
                        enabled: false,
                        style: {
                          fontSize: "15"
                        }
                      },
                      labels: [" جديد عدد", " تجديد عدد", " لا يوجد بيانات"]
                    };
                    this.ValidObject[0].CountClientsBYMonthValid = true;
                  } else {
                    this.chartCountMonth = {
                      nonAxisSeries: [a, b],
                      colors: ["#0D95BC", "#F36F13"],
                      chart: {
                        height: 240,
                        type: "pie"
                      },
                      stroke: {
                        colors: ["rgba(0,0,0,0)"]
                      },
                      legend: {
                        position: "bottom",
                        horizontalAlign: "center",
                        fontSize: "15px",
                        fontWeight: 550,
                        labels: {
                          colors: undefined,
                          useSeriesColors: true
                        },
                        onItemClick: {
                          toggleDataSeries: false
                        },
                        onItemHover: {
                          highlightDataSeries: false
                        }
                      },
                      dataLabels: {
                        enabled: true,
                        style: {
                          fontSize: "14"
                        },
                        formatter: function formatter(val, opt) {
                          switch (opt.seriesIndex // seriesIndex gives the position of slice
                          ) {
                            case 0:
                              return [(0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatNumber)(Number(a), "en-US", "1.0-0")];

                            case 1:
                              return [(0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatNumber)(Number(b), "en-US", "1.0-0")];

                            default:
                              return val;
                          }
                        }
                      },
                      labels: [" جديد عدد", " تجديد عدد"]
                    };
                  }

                  this.ValidObject[0].CountClientsBYMonthValid = true;
                } catch (error) {
                  console.log(error);
                }

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
    }
  }, {
    key: "CountClientsBYYear",
    value: function CountClientsBYYear(a, b) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee15() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                try {
                  if (a == 0 && b == 0) {
                    this.chartCountYear = {
                      nonAxisSeries: [a, b, 1],
                      colors: ["#0D95BC", "#F36F13", "#413F42"],
                      chart: {
                        height: 240,
                        type: "pie"
                      },
                      stroke: {
                        colors: ["rgba(0,0,0,0)"]
                      },
                      legend: {
                        position: "bottom",
                        horizontalAlign: "center",
                        fontSize: "15px",
                        fontWeight: 550,
                        labels: {
                          colors: undefined,
                          useSeriesColors: true
                        },
                        onItemClick: {
                          toggleDataSeries: false
                        },
                        onItemHover: {
                          highlightDataSeries: false
                        }
                      },
                      dataLabels: {
                        enabled: false
                      },
                      labels: ["جديد عدد", "تجديد عدد", " لا يوجد بيانات"]
                    };
                    this.ValidObject[0].CountClientsBYYearValid = true;
                  } else {
                    this.chartCountYear = {
                      nonAxisSeries: [a, b],
                      colors: ["#0D95BC", "#F36F13"],
                      chart: {
                        height: 240,
                        type: "pie"
                      },
                      stroke: {
                        colors: ["rgba(0,0,0,0)"]
                      },
                      legend: {
                        position: "bottom",
                        horizontalAlign: "center",
                        fontSize: "15px",
                        fontWeight: 550,
                        formatter: function formatter(val) {
                          console.log(val);
                          return val + "\n";
                        },
                        labels: {
                          colors: undefined,
                          useSeriesColors: true
                        },
                        onItemClick: {
                          toggleDataSeries: false
                        },
                        onItemHover: {
                          highlightDataSeries: false
                        }
                      },
                      dataLabels: {
                        enabled: true,
                        style: {
                          fontSize: "14"
                        },
                        formatter: function formatter(val, opt) {
                          switch (opt.seriesIndex // seriesIndex gives the position of slice
                          ) {
                            case 0:
                              return [(0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatNumber)(Number(a), "en-US", "1.0-0")];

                            case 1:
                              return [(0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatNumber)(Number(b), "en-US", "1.0-0")];

                            default:
                              return val;
                          }
                        }
                      },
                      labels: [" جديد عدد", " تجديد عدد"]
                    };
                  }

                  this.ValidObject[0].CountClientsBYYearValid = true;
                } catch (error) {
                  console.log(error);
                }

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
    }
  }, {
    key: "ValueClientsBYMonth",
    value: function ValueClientsBYMonth(a, b) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee16() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                try {
                  if (a == 0 && b == 0) {
                    this.chartValueMonth = {
                      nonAxisSeries: [a, b, 1],
                      colors: ["#0D95BC", "#F36F13", "#413F42"],
                      chart: {
                        height: 240,
                        type: "pie"
                      },
                      stroke: {
                        colors: ["rgba(0,0,0,0)"]
                      },
                      legend: {
                        position: "bottom",
                        horizontalAlign: "center",
                        fontSize: "15px",
                        fontWeight: 550,
                        labels: {
                          colors: undefined,
                          useSeriesColors: true
                        },
                        onItemClick: {
                          toggleDataSeries: false
                        },
                        onItemHover: {
                          highlightDataSeries: false
                        }
                      },
                      dataLabels: {
                        enabled: false
                      },
                      labels: [" جديد قيمة", " تجديد قيمة", " لا يوجد بيانات"]
                    };
                    this.ValidObject[0].ValueClientsBYMonthValid = true;
                  } else {
                    this.chartValueMonth = {
                      nonAxisSeries: [a, b],
                      colors: ["#0D95BC", "#F36F13"],
                      chart: {
                        height: 240,
                        type: "pie"
                      },
                      stroke: {
                        colors: ["rgba(0,0,0,0)"]
                      },
                      legend: {
                        position: "bottom",
                        horizontalAlign: "center",
                        fontSize: "15px",
                        fontWeight: 550,
                        labels: {
                          colors: undefined,
                          useSeriesColors: true
                        },
                        onItemClick: {
                          toggleDataSeries: false
                        },
                        onItemHover: {
                          highlightDataSeries: false
                        }
                      },
                      dataLabels: {
                        enabled: true,
                        style: {
                          fontSize: "14"
                        },
                        formatter: function formatter(val, opt) {
                          switch (opt.seriesIndex // seriesIndex gives the position of slice
                          ) {
                            case 0:
                              return [(0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatNumber)(Number(a), "en-US", "1.0-0")];

                            case 1:
                              return [(0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatNumber)(Number(b), "en-US", "1.0-0")];

                            default:
                              return val;
                          }
                        }
                      },
                      labels: [" جديد قيمة", " تجديد قيمة"]
                    };
                    this.ValidObject[0].ValueClientsBYMonthValid = true;
                  } // this.CheckValueClientsBYMonth = true;

                } catch (error) {
                  console.log(error);
                }

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
    }
  }, {
    key: "ValueClientsBYYear",
    value: function ValueClientsBYYear(a, b) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee17() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                try {
                  if (a == 0 && b == 0) {
                    this.chartValueYear = {
                      nonAxisSeries: [a, b, 1],
                      colors: ["#0D95BC", "#F36F13", "#413F42"],
                      chart: {
                        height: 240,
                        type: "pie"
                      },
                      stroke: {
                        colors: ["rgba(0,0,0,0)"]
                      },
                      legend: {
                        position: "bottom",
                        horizontalAlign: "center",
                        fontSize: "15px",
                        fontWeight: 550,
                        labels: {
                          colors: undefined,
                          useSeriesColors: true
                        },
                        onItemClick: {
                          toggleDataSeries: false
                        },
                        onItemHover: {
                          highlightDataSeries: false
                        }
                      },
                      dataLabels: {
                        enabled: false
                      },
                      labels: [" جديد قيمة", " تجديد قيمة", " لا يوجد بيانات"]
                    };
                    this.ValidObject[0].ValueClientsBYYearValid = true;
                  } else {
                    this.chartValueYear = {
                      nonAxisSeries: [a, b],
                      colors: ["#0D95BC", "#F36F13"],
                      chart: {
                        height: 240,
                        type: "pie"
                      },
                      stroke: {
                        colors: ["rgba(0,0,0,0)"]
                      },
                      legend: {
                        position: "bottom",
                        horizontalAlign: "center",
                        fontSize: "15px",
                        fontWeight: 550,
                        labels: {
                          colors: undefined,
                          useSeriesColors: true
                        },
                        onItemClick: {
                          toggleDataSeries: false
                        },
                        onItemHover: {
                          highlightDataSeries: false
                        }
                      },
                      dataLabels: {
                        enabled: true,
                        style: {
                          fontSize: "14"
                        },
                        formatter: function formatter(val, opt) {
                          switch (opt.seriesIndex // seriesIndex gives the position of slice
                          ) {
                            case 0:
                              return [(0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatNumber)(Number(a), "en-US", "1.0-0")];

                            case 1:
                              return [(0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatNumber)(Number(b), "en-US", "1.0-0")];

                            default:
                              return val;
                          }
                        }
                      },
                      labels: [" جديد قيمة", " تجديد قيمة"]
                    };
                    this.ValidObject[0].ValueClientsBYYearValid = true;
                  } // this.CheckValueClientsBYYear = true;

                } catch (error) {
                  console.log(error);
                }

              case 1:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
    } //#endregion
    //#region  التحصيلات يوم و شهر

  }, {
    key: "GetOfficerInstallmentListDay",
    value: function GetOfficerInstallmentListDay() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee20() {
        var _this6 = this;

        var SumOfpaid, SumOfUnpaid, _SumOfpaid, _SumOfUnpaid;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (this.job_code == "-2") {
                  SumOfpaid = 0;
                  SumOfUnpaid = 0;
                  this.http.post(this.env.API_URL + "api/Officer/GetOfficerInstallmentList", {
                    start_date: this.datepipe.transform(this.currentDateTime, "yyyy-MM-dd"),
                    end_date: this.datepipe.transform(this.currentDateTime, "yyyy-MM-dd"),
                    cur_inst_status: "1,2,3,5,6",
                    cur_inst_cond: "0",
                    cur_currency_code: "0",
                    cur_client_type: "0",
                    ls_loan_type: "0",
                    all_loan_types: "1",
                    ls_funder: "0",
                    all_funder: "1",
                    cur_officer_key: this.officer_key,
                    cur_branch_code: this.branch_code
                  }).subscribe({
                    next: function next(data) {
                      _this6.officerInstallmentListthisDay = data;

                      for (var i = 0; i < _this6.officerInstallmentListthisDay.length;) {
                        if (_this6.officerInstallmentListthisDay[i].inst_status == "في الخزينة" || _this6.officerInstallmentListthisDay[i].inst_status == "لدى بنك خارجي" || _this6.officerInstallmentListthisDay[i].inst_status == "مسدد جزئي") {
                          SumOfUnpaid += parseInt(_this6.officerInstallmentListthisDay[i].inst_amount);
                        }

                        if (_this6.officerInstallmentListthisDay[i].inst_status == "مسدد بالخزينة" || _this6.officerInstallmentListthisDay[i].inst_status == "مسدد في بنك خارجي") {
                          SumOfpaid += parseInt(_this6.officerInstallmentListthisDay[i].inst_amount);
                        }

                        i++;
                      }

                      _this6.InstallmentListByDay(SumOfpaid, SumOfUnpaid);
                    },
                    error: function error(err) {
                      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee18() {
                        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee18$(_context18) {
                          while (1) {
                            switch (_context18.prev = _context18.next) {
                              case 0:
                                _context18.next = 2;
                                return this.alertSerivce.showAlertError(err.error, false);

                              case 2:
                              case "end":
                                return _context18.stop();
                            }
                          }
                        }, _callee18, this);
                      }));
                    }
                  });
                } else if (this.job_code == "-3" || this.job_code == "-4" || this.job_code == "-5") {
                  this.Officer = this.OfficerForm.value.Officer.toString();
                  _SumOfpaid = 0;
                  _SumOfUnpaid = 0;
                  this.http.post(this.env.API_URL + "api/Officer/GetOfficerInstallmentList", {
                    start_date: this.datepipe.transform(this.currentDateTime, "yyyy-MM-dd"),
                    end_date: this.datepipe.transform(this.currentDateTime, "yyyy-MM-dd"),
                    cur_inst_status: "1,2,3,5,6",
                    cur_inst_cond: "0",
                    cur_currency_code: "0",
                    cur_client_type: "0",
                    ls_loan_type: "0",
                    all_loan_types: "1",
                    ls_funder: "0",
                    all_funder: "1",
                    cur_officer_key: this.Officer,
                    cur_branch_code: this.branch_code
                  }).subscribe({
                    next: function next(data) {
                      _this6.officerInstallmentListthisDay = data;

                      if (data.length == 0) {
                        _this6.InstallmentListByDay(0, 0);
                      } else {
                        for (var i = 0; i < _this6.officerInstallmentListthisDay.length;) {
                          if (_this6.officerInstallmentListthisDay[i].inst_status == "في الخزينة" || _this6.officerInstallmentListthisDay[i].inst_status == "لدى بنك خارجي" || _this6.officerInstallmentListthisDay[i].inst_status == "مسدد جزئي") {
                            _SumOfUnpaid += parseInt(_this6.officerInstallmentListthisDay[i].inst_amount);
                          }

                          if (_this6.officerInstallmentListthisDay[i].inst_status == "مسدد بالخزينة" || _this6.officerInstallmentListthisDay[i].inst_status == "مسدد في بنك خارجي") {
                            _SumOfpaid += parseInt(_this6.officerInstallmentListthisDay[i].inst_amount);
                          }

                          i++;
                        }

                        _this6.InstallmentListByDay(_SumOfpaid, _SumOfUnpaid);
                      }
                    },
                    error: function error(err) {
                      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee19() {
                        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee19$(_context19) {
                          while (1) {
                            switch (_context19.prev = _context19.next) {
                              case 0:
                                _context19.next = 2;
                                return this.alertSerivce.showAlertError(err.error, false);

                              case 2:
                              case "end":
                                return _context19.stop();
                            }
                          }
                        }, _callee19, this);
                      }));
                    }
                  });
                }

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));
    }
  }, {
    key: "GetOfficerInstallmentListMonth",
    value: function GetOfficerInstallmentListMonth() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee23() {
        var _this7 = this;

        var SumOfpaid, SumOfUnpaid, _SumOfpaid2, _SumOfUnpaid2;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                if (this.job_code == "-2") {
                  SumOfpaid = 0;
                  SumOfUnpaid = 0;
                  this.http.post(this.env.API_URL + "api/Officer/GetOfficerInstallmentList", {
                    start_date: this.datepipe.transform(this.currentDateTime, "yyyy-MM-01"),
                    end_date: this.datepipe.transform(this.currentDateTime, "yyyy-MM-dd"),
                    cur_inst_status: "1,2,3,5,6",
                    cur_inst_cond: "0",
                    cur_currency_code: "0",
                    cur_client_type: "0",
                    ls_loan_type: "0",
                    all_loan_types: "1",
                    ls_funder: "0",
                    all_funder: "1",
                    cur_officer_key: this.officer_key,
                    cur_branch_code: this.branch_code
                  }).subscribe({
                    next: function next(data) {
                      _this7.officerInstallmentListthisMonth = data;

                      if (data.length == 0) {
                        _this7.InstallmentListByMonth(0, 0);
                      } else {
                        for (var i = 0; i < _this7.officerInstallmentListthisMonth.length;) {
                          if (_this7.officerInstallmentListthisMonth[i].inst_status == "في الخزينة" || _this7.officerInstallmentListthisMonth[i].inst_status == "لدى بنك خارجي" || _this7.officerInstallmentListthisMonth[i].inst_status == "مسدد جزئي") {
                            SumOfUnpaid += parseInt(_this7.officerInstallmentListthisMonth[i].inst_amount);
                          }

                          if (_this7.officerInstallmentListthisMonth[i].inst_status == "مسدد بالخزينة" || _this7.officerInstallmentListthisMonth[i].inst_status == "مسدد في بنك خارجي") {
                            SumOfpaid += parseInt(_this7.officerInstallmentListthisMonth[i].inst_amount);
                          }

                          i++;
                        }

                        _this7.InstallmentListByMonth(SumOfpaid, SumOfUnpaid);
                      }
                    },
                    error: function error(err) {
                      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee21() {
                        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee21$(_context21) {
                          while (1) {
                            switch (_context21.prev = _context21.next) {
                              case 0:
                                _context21.next = 2;
                                return this.alertSerivce.showAlertError(err.error, false);

                              case 2:
                              case "end":
                                return _context21.stop();
                            }
                          }
                        }, _callee21, this);
                      }));
                    }
                  });
                } else if (this.job_code == "-3" || this.job_code == "-4" || this.job_code == "-5") {
                  this.Officer = this.OfficerForm.value.Officer.toString();
                  _SumOfpaid2 = 0;
                  _SumOfUnpaid2 = 0;
                  this.http.post(this.env.API_URL + "api/Officer/GetOfficerInstallmentList", {
                    start_date: this.datepipe.transform(this.currentDateTime, "yyyy-MM-01"),
                    end_date: this.datepipe.transform(this.currentDateTime, "yyyy-MM-dd"),
                    cur_inst_status: "1,2,3,5,6",
                    cur_inst_cond: "0",
                    cur_currency_code: "0",
                    cur_client_type: "0",
                    ls_loan_type: "0",
                    all_loan_types: "1",
                    ls_funder: "0",
                    all_funder: "1",
                    cur_officer_key: this.Officer,
                    cur_branch_code: this.branch_code
                  }).subscribe({
                    next: function next(data) {
                      _this7.officerInstallmentListthisMonth = data;

                      for (var i = 0; i < _this7.officerInstallmentListthisMonth.length;) {
                        if (_this7.officerInstallmentListthisMonth[i].inst_status == "في الخزينة" || _this7.officerInstallmentListthisMonth[i].inst_status == "لدى بنك خارجي" || _this7.officerInstallmentListthisMonth[i].inst_status == "مسدد جزئي") {
                          _SumOfUnpaid2 += parseInt(_this7.officerInstallmentListthisMonth[i].inst_amount);
                        }

                        if (_this7.officerInstallmentListthisMonth[i].inst_status == "مسدد بالخزينة" || _this7.officerInstallmentListthisMonth[i].inst_status == "مسدد في بنك خارجي") {
                          _SumOfpaid2 += parseInt(_this7.officerInstallmentListthisMonth[i].inst_amount);
                        }

                        i++;
                      }

                      _this7.InstallmentListByMonth(_SumOfpaid2, _SumOfUnpaid2);
                    },
                    error: function error(err) {
                      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee22() {
                        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee22$(_context22) {
                          while (1) {
                            switch (_context22.prev = _context22.next) {
                              case 0:
                                _context22.next = 2;
                                return this.alertSerivce.showAlertError(err.error, false);

                              case 2:
                              case "end":
                                return _context22.stop();
                            }
                          }
                        }, _callee22, this);
                      }));
                    }
                  });
                }

              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));
    }
  }, {
    key: "InstallmentListByDay",
    value: function InstallmentListByDay(a, b) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee24() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                if (a == 0 && b == 0) {
                  this.chartInstallmentListThisDay = {
                    nonAxisSeries: [a, b, 1],
                    colors: ["#0D95BC", "#F36F13", "#413F42"],
                    chart: {
                      height: 240,
                      type: "pie"
                    },
                    stroke: {
                      colors: ["rgba(0,0,0,0)"]
                    },
                    legend: {
                      position: "bottom",
                      horizontalAlign: "center",
                      fontSize: "15px",
                      fontWeight: 550,
                      labels: {
                        colors: undefined,
                        useSeriesColors: true
                      },
                      onItemClick: {
                        toggleDataSeries: false
                      },
                      onItemHover: {
                        highlightDataSeries: false
                      }
                    },
                    dataLabels: {
                      enabled: false
                    },
                    labels: [" تم تحصيله هذا اليوم", " مطلوب تحصيله هذا اليوم", " لا يوجد بيانات"]
                  };
                  this.CheckInstallmentListByDay = true;
                  this.ValidObject[0].InstallmentListByDayValid = true;
                } else {
                  this.chartInstallmentListThisDay = {
                    nonAxisSeries: [a, b],
                    colors: ["#0D95BC", "#F36F13"],
                    chart: {
                      height: 240,
                      type: "pie"
                    },
                    stroke: {
                      colors: ["rgba(0,0,0,0)"]
                    },
                    legend: {
                      position: "bottom",
                      horizontalAlign: "center",
                      fontSize: "15px",
                      fontWeight: 550,
                      labels: {
                        colors: undefined,
                        useSeriesColors: true
                      },
                      onItemClick: {
                        toggleDataSeries: false
                      },
                      onItemHover: {
                        highlightDataSeries: false
                      }
                    },
                    dataLabels: {
                      enabled: true,
                      style: {
                        fontSize: "14"
                      },
                      formatter: function formatter(val, opt) {
                        switch (opt.seriesIndex // seriesIndex gives the position of slice
                        ) {
                          case 0:
                            return [(0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatNumber)(Number(a), "en-US", "1.0-0")];

                          case 1:
                            return [(0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatNumber)(Number(b), "en-US", "1.0-0")];

                          default:
                            return val;
                        }
                      }
                    },
                    labels: [" تم تحصيله هذا اليوم", " مطلوب تحصيله هذا اليوم"]
                  };
                  this.CheckInstallmentListByDay = true;
                  this.ValidObject[0].InstallmentListByDayValid = true;
                }

              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));
    }
  }, {
    key: "InstallmentListByMonth",
    value: function InstallmentListByMonth(a, b) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee25() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                if (a == 0 && b == 0) {
                  this.chartInstallmentListThisMonth = {
                    nonAxisSeries: [a, b, 1],
                    colors: ["#0D95BC", "#F36F13", "#413F42"],
                    chart: {
                      height: 240,
                      type: "pie"
                    },
                    stroke: {
                      colors: ["rgba(0,0,0,0)"]
                    },
                    legend: {
                      position: "bottom",
                      horizontalAlign: "center",
                      fontSize: "15px",
                      fontWeight: 550,
                      labels: {
                        colors: undefined,
                        useSeriesColors: true
                      },
                      onItemClick: {
                        toggleDataSeries: false
                      },
                      onItemHover: {
                        highlightDataSeries: false
                      }
                    },
                    dataLabels: {
                      enabled: false
                    },
                    labels: [" تم تحصيله هذا الشهر", " مطلوب تحصيله هذا الشهر", " لا يوجد بيانات"]
                  };
                  this.CheckInstallmentListByMonth = true;
                  this.ValidObject[0].InstallmentListByMonthValid = true;
                } else {
                  this.chartInstallmentListThisMonth = {
                    nonAxisSeries: [a, b],
                    colors: ["#0D95BC", "#F36F13"],
                    chart: {
                      height: 240,
                      type: "pie"
                    },
                    stroke: {
                      colors: ["rgba(0,0,0,0)"]
                    },
                    legend: {
                      position: "bottom",
                      horizontalAlign: "center",
                      fontSize: "15px",
                      fontWeight: 550,
                      labels: {
                        colors: undefined,
                        useSeriesColors: true
                      },
                      onItemClick: {
                        toggleDataSeries: false
                      },
                      onItemHover: {
                        highlightDataSeries: false
                      }
                    },
                    dataLabels: {
                      enabled: true,
                      style: {
                        fontSize: "14"
                      },
                      formatter: function formatter(val, opt) {
                        switch (opt.seriesIndex // seriesIndex gives the position of slice
                        ) {
                          case 0:
                            return [(0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatNumber)(Number(a), "en-US", "1.0-0")];

                          case 1:
                            return [(0,_angular_common__WEBPACK_IMPORTED_MODULE_11__.formatNumber)(Number(b), "en-US", "1.0-0")];

                          default:
                            return val;
                        }
                      }
                    },
                    labels: [" تم تحصيله هذا الشهر ", " مطلوب تحصيله هذا الشهر "]
                  };
                  this.CheckInstallmentListByMonth = true;
                  this.ValidObject[0].InstallmentListByMonthValid = true;
                }

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));
    } //#endregion

  }, {
    key: "Result",
    value: function Result() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee26() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                this.isValid = true;
                this.ValidObject[0].CountClientsBYMonthValid = false;
                this.ValidObject[0].CountClientsBYYearValid = false;
                this.ValidObject[0].ValueClientsBYMonthValid = false;
                this.ValidObject[0].ValueClientsBYYearValid = false;
                this.ValidObject[0].InstallmentListByDayValid = false;
                this.ValidObject[0].InstallmentListByMonthValid = false;
                _context26.prev = 7;
                this.showLoader = true;

                if (!(this.OfficerForm.valid == true)) {
                  _context26.next = 18;
                  break;
                }

                _context26.next = 12;
                return this.GetOfficerInstallmentListDay();

              case 12:
                _context26.next = 14;
                return this.GetOfficerInstallmentListMonth();

              case 14:
                _context26.next = 16;
                return this.GetOfficerProdByMonth();

              case 16:
                _context26.next = 18;
                return this.GetOfficerProdByYear();

              case 18:
                _context26.next = 24;
                break;

              case 20:
                _context26.prev = 20;
                _context26.t0 = _context26["catch"](7);
                console.log(_context26.t0);
                this.showLoader = false;

              case 24:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this, [[7, 20]]);
      }));
    }
  }, {
    key: "Form1",
    get: function get() {
      return this.OfficerForm.controls;
    }
  }]);

  return officerproductivityPage;
}();

officerproductivityPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef
  }];
};

officerproductivityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: "app-officer-productivity",
  template: _officer_productivity_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_officer_productivity_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], officerproductivityPage);


/***/ }),

/***/ 90830:
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/officer/productivity/officer-productivity.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ (function(module) {

module.exports = ".table tbody th,\n.table tbody td {\n  padding: 0.4rem 0.9375rem !important;\n}\n\n.labelpad {\n  padding-bottom: 55px;\n}\n\n@media (min-width: 770px) {\n  .btnMar {\n    margin-right: 290%;\n    font-size: medium;\n  }\n}\n\n.checkBoxs {\n  margin-right: 1.5rem;\n}\n\n.form-control-error {\n  border-color: #ff3366;\n}\n\n.form-control-error:hover {\n  border-color: #da0036;\n}\n\n.input-validator {\n  font-weight: 600;\n  padding-right: 10px;\n  padding-left: 10px;\n  color: #ff3366 !important;\n}\n\n.input-validator::before {\n  content: \"-\";\n  margin-left: 6px;\n}\n\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.checkBox-isactive {\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n\n.group-title {\n  font-weight: 700;\n  font-size: 1.2rem;\n  text-align: center;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n  border-radius: 6px;\n  background-image: linear-gradient(to left, rgba(112, 123, 245, 0.2), var(--card-bg));\n  border-color: #c8cbea;\n  color: var(--body-color);\n}\n\n.nested-form {\n  border: 2px solid rgba(112, 123, 245, 0.2);\n  border-radius: 5px;\n  padding: 1rem 2rem;\n}\n\n.form-group-title {\n  display: block;\n  color: var(--theme-color-primary);\n  font-weight: 700;\n}\n\n.alert-button-confirm {\n  color: var(--body-color);\n}\n\nion-item {\n  --background: white;\n}\n\n.background {\n  background: white;\n}\n\n.chartContainer {\n  width: 800px;\n  height: 500;\n}\n\n.close {\n  width: 8rem;\n  height: 8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmljZXItcHJvZHVjdGl2aXR5LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXG9mZmljZXJcXHByb2R1Y3Rpdml0eVxcb2ZmaWNlci1wcm9kdWN0aXZpdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJOztFQUVFLG9DQUFBO0FDRk47O0FET0E7RUFDRSxvQkFBQTtBQ0pGOztBRFdBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0VDUkY7QUFDRjs7QURXQTtFQUNFLG9CQUFBO0FDVEY7O0FEWUE7RUFDRSxxQkFBQTtBQ1RGOztBRFdFO0VBQ0UscUJBQUE7QUNUSjs7QURhQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDVkY7O0FEWUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNWSjs7QURlRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ1pKOztBRGdCQTtFQUVFLG1CQUFBO01BQUEscUJBQUE7QUNkRjs7QURpQkE7RUFHRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFHQSxvRkFBQTtFQUdBLHFCQUFBO0VBQ0Esd0JBQUE7QUNwQkY7O0FEdUJBO0VBR0UsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDdEJGOztBRHlCQTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDdEJGOztBRHlCQTtFQUNFLHdCQUFBO0FDdEJGOztBRHdCQTtFQUNFLG1CQUFBO0FDckJGOztBRHVCQTtFQUNFLGlCQUFBO0FDcEJGOztBRHVCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDcEJGOztBRHNCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDbkJGIiwiZmlsZSI6Im9mZmljZXItcHJvZHVjdGl2aXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgdGJvZHkge1xyXG5cclxuICAgIHRoLFxyXG4gICAgdGQge1xyXG4gICAgICBwYWRkaW5nOiAwLjRyZW0gMC45Mzc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGFiZWxwYWQge1xyXG4gIHBhZGRpbmctYm90dG9tOiA1NXB4O1xyXG59XHJcblxyXG4vLyBpb24tYnV0dG9uIHtcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxuLy8gICBwYWRkaW5nLXJpZ2h0OiAyMCU7XHJcbi8vICAgZm9udC1zaXplOiBsYXJnZTtcclxuQG1lZGlhIChtaW4td2lkdGg6IDc3MHB4KSB7XHJcbiAgLmJ0bk1hciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI5MCU7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICB9XHJcbn1cclxuXHJcbi5jaGVja0JveHMge1xyXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWVycm9yIHtcclxuICBib3JkZXItY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxOCwgMCwgNTQpO1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0LXZhbGlkYXRvciB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBjb2xvcjogcmdiKDI1NSwgNTEsIDEwMikgIWltcG9ydGFudDtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiLVwiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmNoZWNrQm94LWlzYWN0aXZlIHtcclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmdyb3VwLXRpdGxlIHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCM0NWNjYjEsIDAuOCk7XHJcbiAgLy8gY29sb3I6ICNmNmZjZWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2E0ZDQ5MSwgMC4zKTtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjYmVhO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LFxyXG4gICAgICByZ2JhKCM3MDdiZjUsIDAuMiksXHJcbiAgICAgIHZhcigtLWNhcmQtYmcpKTtcclxuICBib3JkZXItY29sb3I6ICNjOGNiZWE7XHJcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xyXG59XHJcblxyXG4ubmVzdGVkLWZvcm0ge1xyXG4gIC8vIGJvcmRlci1yaWdodDogMC4ycmVtIHNvbGlkIHJnYmEoIzcwN2JmNSwgMC4yKTtcclxuICAvLyBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoIzcwN2JmNSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMXJlbSAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cC10aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5hbGVydC1idXR0b24tY29uZmlybSB7XHJcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xyXG59XHJcbmlvbi1pdGVte1xyXG4gIC0tYmFja2dyb3VuZCA6IHdoaXRlO1xyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG4gIGJhY2tncm91bmQ6ICB3aGl0ZTtcclxuICBcclxufVxyXG4uY2hhcnRDb250YWluZXJ7XHJcbiAgd2lkdGg6IDgwMHB4O1xyXG4gIGhlaWdodDogNTAwO1xyXG59XHJcbi5jbG9zZXtcclxuICB3aWR0aDogOHJlbTtcclxuICBoZWlnaHQ6IDhyZW07XHJcbn0iLCIudGFibGUgdGJvZHkgdGgsXG4udGFibGUgdGJvZHkgdGQge1xuICBwYWRkaW5nOiAwLjRyZW0gMC45Mzc1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbHBhZCB7XG4gIHBhZGRpbmctYm90dG9tOiA1NXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzcwcHgpIHtcbiAgLmJ0bk1hciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyOTAlO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB9XG59XG4uY2hlY2tCb3hzIHtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wtZXJyb3Ige1xuICBib3JkZXItY29sb3I6ICNmZjMzNjY7XG59XG4uZm9ybS1jb250cm9sLWVycm9yOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGEwMDM2O1xufVxuXG4uaW5wdXQtdmFsaWRhdG9yIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufVxuLmlucHV0LXZhbGlkYXRvcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCItXCI7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2tCb3gtaXNhY3RpdmUge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5ncm91cC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgxMTIsIDEyMywgMjQ1LCAwLjIpLCB2YXIoLS1jYXJkLWJnKSk7XG4gIGJvcmRlci1jb2xvcjogI2M4Y2JlYTtcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xufVxuXG4ubmVzdGVkLWZvcm0ge1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDExMiwgMTIzLCAyNDUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xufVxuXG4uZm9ybS1ncm91cC10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hbGVydC1idXR0b24tY29uZmlybSB7XG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY2hhcnRDb250YWluZXIge1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogNTAwO1xufVxuXG4uY2xvc2Uge1xuICB3aWR0aDogOHJlbTtcbiAgaGVpZ2h0OiA4cmVtO1xufSJdfQ== */";

/***/ }),

/***/ 88062:
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/officer/productivity/officer-productivity.page.html?ngResource ***!
  \********************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\r\n\r\n<div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\r\n  <!-- <div>\r\n    <h4 class=\"mr-1 mb-md-0\">الانتاجية المندوبين</h4>\r\n  </div> -->\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-12 grid-margin\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <!-- First Form  DropDown Form-->\r\n        <form [formGroup]=\"OfficerForm\"  *ngIf=\"job_code == '-3' || job_code == '-4' || job_code == '-5'\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-md-4\">\r\n              <div class=\"form-group\">\r\n                <ion-label class=\"form-label form-label-required\">\r\n                  أسم المندوب\r\n                </ion-label>\r\n                <ion-select interface=\"popover\" placeholder=\"أسم المندوبين\" formControlName=\"Officer\" class=\"subselect\"\r\n                  [(ngModel)]=\"DefaultValueDropDown\">\r\n                  <ion-select-option value=\"0\">كل المندوبين</ion-select-option>\r\n                  <!-- <ion-select-option value=\"{{officer_key}}\" >أنا</ion-select-option> -->\r\n                  <ion-select-option *ngFor=\"let off of OfficersBySuperVisor\" [value]=\"off.officer_key\">\r\n                    {{off.officer_name}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <div class=\"text-danger input-validator\" *ngIf=\"isValid && (Form1.Officer.errors?.['required'])\"\r\n                  role=\"alert\">\r\n                  يجب اختيار المندوب\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 col-md-4\"></div>\r\n            <div class=\"col-12 col-md-4\"></div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 col-md-4 pb-3\">\r\n                <ion-button (click)=\"Result()\" type=\"submit\">النتائج</ion-button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <!-- Second Form  Chart Form-->\r\n        <form *ngIf=\"Results\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12 col-md-4\">\r\n              <div class=\" grid-margin stretch-card\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h6 class=\"card-title\">الانتاجية لهذا الشهر</h6>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6\">\r\n                        <apx-chart [labels]=\"chartCountMonth.labels\" [series]=\"chartCountMonth.nonAxisSeries\"\r\n                          [chart]=\"chartCountMonth.chart\" [colors]=\"chartCountMonth.colors\"\r\n                          [stroke]=\"chartCountMonth.stroke\" [legend]=\"chartCountMonth.legend\"\r\n                          [dataLabels]=\"chartCountMonth.dataLabels\"></apx-chart>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <apx-chart [labels]=\"chartValueMonth.labels\" [series]=\"chartValueMonth.nonAxisSeries\"\r\n                          [chart]=\"chartValueMonth.chart\" [colors]=\"chartValueMonth.colors\"\r\n                          [stroke]=\"chartValueMonth.stroke\" [legend]=\"chartValueMonth.legend\"\r\n                          [dataLabels]=\"chartValueMonth.dataLabels\"></apx-chart>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 col-md-4\">\r\n              <div class=\" grid-margin stretch-card\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h6 class=\"card-title\">الانتاجية لهذا العام</h6>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-6\">\r\n                        <apx-chart [labels]=\"chartCountYear.labels\" [series]=\"chartCountYear.nonAxisSeries\"\r\n                          [chart]=\"chartCountYear.chart\" [colors]=\"chartCountYear.colors\"\r\n                          [stroke]=\"chartCountYear.stroke\" [legend]=\"chartCountYear.legend\"\r\n                          [dataLabels]=\"chartCountYear.dataLabels\"></apx-chart>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <apx-chart [labels]=\"chartValueYear.labels\" [series]=\"chartValueYear.nonAxisSeries\"\r\n                          [chart]=\"chartValueYear.chart\" [colors]=\"chartValueYear.colors\"\r\n                          [stroke]=\"chartValueYear.stroke\" [legend]=\"chartValueYear.legend\"\r\n                          [dataLabels]=\"chartValueYear.dataLabels\"></apx-chart>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 col-md-4\">\r\n              <div class=\" grid-margin stretch-card\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h6 class=\"card-title\">التحصيلات</h6>\r\n                    <div class=\"row \">\r\n                      <div class=\"col-6\">\r\n                        <apx-chart [labels]=\"chartInstallmentListThisDay.labels\"\r\n                          [series]=\"chartInstallmentListThisDay.nonAxisSeries\"\r\n                          [chart]=\"chartInstallmentListThisDay.chart\" [colors]=\"chartInstallmentListThisDay.colors\"\r\n                          [stroke]=\"chartInstallmentListThisDay.stroke\" [legend]=\"chartInstallmentListThisDay.legend\"\r\n                          [dataLabels]=\"chartInstallmentListThisDay.dataLabels\"></apx-chart>\r\n                      </div>\r\n                      <div class=\"col-6\">\r\n                        <apx-chart [labels]=\"chartInstallmentListThisMonth.labels\"\r\n                          [series]=\"chartInstallmentListThisMonth.nonAxisSeries\"\r\n                          [chart]=\"chartInstallmentListThisMonth.chart\" [colors]=\"chartInstallmentListThisMonth.colors\"\r\n                          [stroke]=\"chartInstallmentListThisMonth.stroke\"\r\n                          [legend]=\"chartInstallmentListThisMonth.legend\"\r\n                          [dataLabels]=\"chartInstallmentListThisMonth.dataLabels\"></apx-chart>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_officer_productivity_officer-productivity_module_ts.js.map