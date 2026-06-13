"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_loan-field-review_loan-field-review_module_ts"],{

/***/ 13131:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-field-review/loan-field-review-routing.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanFieldReviewPageRoutingModule": function() { return /* binding */ LoanFieldReviewPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_field_review_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-field-review.page */ 78792);






var routes = [{
  path: '',
  component: _loan_field_review_page__WEBPACK_IMPORTED_MODULE_2__.LoanFieldReviewPage
}];

var LoanFieldReviewPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanFieldReviewPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanFieldReviewPageRoutingModule);
});

LoanFieldReviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoanFieldReviewPageRoutingModule);


/***/ }),

/***/ 91929:
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-field-review/loan-field-review.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanFieldReviewPageModule": function() { return /* binding */ LoanFieldReviewPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_field_review_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-field-review-routing.module */ 13131);
/* harmony import */ var _loan_field_review_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-field-review.page */ 78792);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-archwizard */ 38531);












var LoanFieldReviewPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanFieldReviewPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanFieldReviewPageModule);
});

LoanFieldReviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _loan_field_review_routing_module__WEBPACK_IMPORTED_MODULE_2__.LoanFieldReviewPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, angular_archwizard__WEBPACK_IMPORTED_MODULE_10__.ArchwizardModule],
  declarations: [_loan_field_review_page__WEBPACK_IMPORTED_MODULE_3__.LoanFieldReviewPage]
})], LoanFieldReviewPageModule);


/***/ }),

/***/ 78792:
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-field-review/loan-field-review.page.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanFieldReviewPage": function() { return /* binding */ LoanFieldReviewPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _loan_field_review_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-field-review.page.html?ngResource */ 24404);
/* harmony import */ var _loan_field_review_page_css_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-field-review.page.css?ngResource */ 11282);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/location.service */ 33094);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);

















var LoanFieldReviewPage = /*#__PURE__*/function () {
  function LoanFieldReviewPage(formBuilder, env, alert, http, alertController, authService, locationService, modal, cdref, toastController, datePipe, platform, router) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoanFieldReviewPage);

    this.formBuilder = formBuilder;
    this.env = env;
    this.alert = alert;
    this.http = http;
    this.alertController = alertController;
    this.authService = authService;
    this.locationService = locationService;
    this.modal = modal;
    this.cdref = cdref;
    this.toastController = toastController;
    this.datePipe = datePipe;
    this.platform = platform;
    this.router = router;
    this.showLoader = false;
    this.isLoanForm = false;
    this.isSearching = true;
    this.home_lat = null;
    this.home_long = null;
    this.home_zoom = null;
    this.bus_lat = null;
    this.bus_long = null;
    this.bus_zoom = null;
    this.notes = null;
    this.page = 1; // the page we are viewing

    this.pageSize = 10; // number of viewed results

    this.count = 1;
    this.sortingParam = "application_code";
    this.orderBy = false;
    this.RandomSelection = 0;
    this.LoanForm = this.formBuilder.group({
      notes: [null]
    });
  } //#endregion


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoanFieldReviewPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.registerBackButtonListener();
      this.authService.getUserInfo().then(function (userInfo) {
        _this.branch_code_userinfo = userInfo.branch_code;
        _this.org_code_userinfo = userInfo.org_code;
        _this.officer_key_userinfo = userInfo.officer_key;
        _this.user_name_userinfo = userInfo.user_name;
        _this.job_code_userinfo = userInfo.job_code;
      });
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
      if (this.isLoanForm == true) {
        this.BackToSearchForm();
      } else {
        this.router.navigate(["/home"]);
      }
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      this.cdref.detectChanges();
    }
  }, {
    key: "clientSelected",
    value: function clientSelected(searchResult) {
      this.isSearching = false;
      this.isLoanForm = true;
      this.SearchResult = searchResult;
      this.GetClientInfo(searchResult);
    }
  }, {
    key: "GetClientInfo",
    value: function GetClientInfo(i) {
      var _this3 = this;

      console.log("clientSEARCH", i);
      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/Clients/GetClientByKey?clientKey=".concat(i.client_key)).subscribe({
        next: function next(data_1) {
          _this3.http.post(_this3.env.API_URL + "api/Clients/GetClientById", {
            nation_id: data_1.nation_id
          }).subscribe(function (data) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
              return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.clientInfo = data["result"][0];

                      if (!this.clientInfo) {
                        this.clientInfo = data_1;
                      } // this.home_lat = this.clientInfo.home_Lat;
                      // this.home_long = this.clientInfo.home_Long;
                      // this.home_zoom = this.clientInfo.home_Zoom;
                      // this.bus_lat = this.clientInfo.bus_Lat;
                      // this.bus_long = this.clientInfo.bus_Long;
                      // this.bus_zoom = this.clientInfo.bus_Zoom;


                      this.showLoader = false;
                      console.log("ClientInfo", this.clientInfo);
                      this.GetLoanInfo(i);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        },
        error: function error(err) {
          console.log(err);
          _this3.showLoader = false;
        }
      });
    }
  }, {
    key: "GetLoanInfo",
    value: function GetLoanInfo(searchResult) {
      var _this4 = this;

      this.showLoader = true;
      this.http.post(this.env.API_URL + "api/Loan/GetLoanInfo", {
        org_code: this.org_code_userinfo,
        branch_code: this.branch_code_userinfo,
        client_Code: searchResult.client_code.toString(),
        org_branch_code: searchResult.org_branch_code.toString(),
        loan_code: searchResult.loan_code.toString()
      }).subscribe({
        next: function next(data) {
          _this4.LoanInfo = data[0];
          console.log("LoanInfo", _this4.LoanInfo);
          _this4.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this4.showLoader = false;
        }
      });
    }
  }, {
    key: "ShowHomeLocation",
    value: function ShowHomeLocation() {
      this.locationService.showLocation(this.clientInfo.home_Lat + "," + this.clientInfo.home_Long);
    }
  }, {
    key: "GetHomeLocation",
    value: function GetHomeLocation() {
      var _a, _b;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var locationResult;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.showLoader = true;
                _context2.prev = 1;
                _context2.next = 4;
                return this.locationService.getLocation();

              case 4:
                locationResult = _context2.sent;
                console.log(locationResult);

                if (locationResult.success) {
                  _context2.next = 10;
                  break;
                }

                this.showAlertNoReload(locationResult.message);
                this.showLoader = false;
                return _context2.abrupt("return");

              case 10:
                this.home_lat = (_a = locationResult.position) === null || _a === void 0 ? void 0 : _a.coords.latitude.toString();
                this.home_long = (_b = locationResult.position) === null || _b === void 0 ? void 0 : _b.coords.longitude.toString();
                this.home_zoom = "0";
                this.presentToast("تم", locationResult.message);
                this.showLoader = false;
                _context2.next = 21;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](1);
                this.showLoader = false;
                this.showAlertNoReload("خطأ عند أخذ لقطة الموقع");

              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 17]]);
      }));
    }
  }, {
    key: "ShowBusLocation",
    value: function ShowBusLocation() {
      this.locationService.showLocation(this.clientInfo.bus_Lat + "," + this.clientInfo.bus_Long);
    }
  }, {
    key: "GetBusLocation",
    value: function GetBusLocation() {
      var _a, _b;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var locationResult;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.showLoader = true;
                _context3.prev = 1;
                _context3.next = 4;
                return this.locationService.getLocation();

              case 4:
                locationResult = _context3.sent;
                console.log(locationResult);

                if (locationResult.success) {
                  _context3.next = 10;
                  break;
                }

                this.showAlertNoReload(locationResult.message);
                this.showLoader = false;
                return _context3.abrupt("return");

              case 10:
                this.bus_lat = (_a = locationResult.position) === null || _a === void 0 ? void 0 : _a.coords.latitude.toString();
                this.bus_long = (_b = locationResult.position) === null || _b === void 0 ? void 0 : _b.coords.longitude.toString();
                this.bus_zoom = "0";
                this.presentToast("تم", locationResult.message);
                this.showLoader = false;
                _context3.next = 21;
                break;

              case 17:
                _context3.prev = 17;
                _context3.t0 = _context3["catch"](1);
                this.showLoader = false;
                this.showAlertNoReload("خطأ عند أخذ لقطة الموقع");

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 17]]);
      }));
    }
  }, {
    key: "submit",
    value: function submit() {
      var _this5 = this;

      this.showLoader = true;
      this.notes = this.LoanForm.value.notes;
      this.http.post(this.env.API_URL + "api/Loan/InsertLoanFieldVisit", {
        org_code: this.org_code_userinfo,
        branch_code: this.branch_code_userinfo,
        application_key: this.LoanInfo.application_key.toString(),
        officer_key: this.officer_key_userinfo,
        user_name: this.user_name_userinfo,
        uuc_appl: null,
        job_code: this.job_code_userinfo,
        visit_date: this.datePipe.transform(new Date(), "yyyy-MM-dd"),
        home_lat: this.home_lat,
        home_long: this.home_long,
        home_Zoom: this.home_zoom,
        bus_lat: this.bus_lat,
        bus_long: this.bus_long,
        bus_Zoom: this.bus_zoom,
        notes: this.notes
      }).subscribe({
        next: function next(data) {
          _this5.showLoader = false;

          _this5.showAlert("لقد تم المراجعة بنجاح");
        },
        error: function error(err) {
          _this5.showLoader = false;

          _this5.showAlertNoReload("خطأ في : " + err);

          console.log("err", err);
        }
      });
    }
  }, {
    key: "BackToSearchForm",
    value: function BackToSearchForm() {
      this.isLoanForm = false;
      this.isSearching = true;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.home_lat = null;
      this.home_long = null;
      this.home_zoom = null;
      this.bus_lat = null;
      this.bus_long = null;
      this.bus_zoom = null;
      this.clientInfo = null;
      this.SearchResult = null;
      this.LoanInfo = null;
      this.LoanForm.patchValue({
        notes: null
      });
      this.isLoanForm = false;
      this.isSearching = true;
    }
  }, {
    key: "checker",
    value: function checker(input) {
      if (input == null) return "لا يوجد";else {
        if (input.includes("00:00:00")) {
          return input.split(" ")[0];
        } else {
          return input;
        }
      }
    }
  }, {
    key: "showAlertNoReload",
    value: function showAlertNoReload(message) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var alert;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                alert = this.alertController.create({
                  header: "تنبيه",
                  message: message,
                  buttons: [{
                    text: "OK",
                    role: "OK"
                  }]
                });
                _context4.next = 3;
                return alert;

              case 3:
                _context4.sent.present();

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "presentToast",
    value: function presentToast(header, message) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var toast;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.toastController.create({
                  header: header,
                  message: message,
                  cssClass: "toast-primary",
                  duration: 2000,
                  position: "bottom"
                });

              case 2:
                toast = _context5.sent;
                _context5.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "showAlert",
    value: function showAlert(message) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        var alert;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                alert = this.alertController.create({
                  header: "تنبيه",
                  message: message,
                  buttons: [{
                    text: "OK",
                    role: "OK",
                    handler: function handler() {
                      location.reload();
                    }
                  }]
                });
                _context6.next = 3;
                return alert;

              case 3:
                _context6.sent.present();

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "SaveAlert",
    value: function SaveAlert() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        var _this6 = this;

        var alert;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.notes = this.LoanForm.value.notes;

                if (!((this.home_lat && this.home_long && this.home_zoom || this.bus_lat && this.bus_long && this.bus_zoom) != null && this.notes != null)) {
                  _context7.next = 8;
                  break;
                }

                alert = this.alertController.create({
                  header: "تنبيه",
                  message: "هل أنت متأكد أنك تريد تنفيذ هذة العملية؟ ",
                  buttons: [{
                    text: "نعم",
                    role: "OK",
                    cssClass: "btn-success",
                    handler: function handler() {
                      _this6.submit();
                    }
                  }, {
                    text: "لا",
                    cssClass: "btn-danger",
                    role: "cancel",
                    handler: function handler() {}
                  }]
                });
                _context7.next = 5;
                return alert;

              case 5:
                _context7.sent.present();

                _context7.next = 10;
                break;

              case 8:
                if (this.notes == null) {
                  this.presentToast("خطأ", "يجب اضافة ملاحظات الزيارة");
                }

                if ((this.home_lat && this.home_long && this.home_zoom || this.bus_lat && this.bus_long && this.bus_zoom) == null) {
                  this.presentToast("خطأ", "يجب أخذ لقطة للمنزل او للعمل");
                }

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }]);

  return LoanFieldReviewPage;
}();

LoanFieldReviewPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__.MohassilAuthService
  }, {
    type: src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_8__.LocationService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router
  }];
};

LoanFieldReviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: "app-loan-field-review",
  template: _loan_field_review_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_loan_field_review_page_css_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], LoanFieldReviewPage);


/***/ }),

/***/ 11282:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-field-review/loan-field-review.page.css?ngResource ***!
  \*******************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FuLWZpZWxkLXJldmlldy5wYWdlLmNzcyJ9 */";

/***/ }),

/***/ 24404:
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-field-review/loan-field-review.page.html?ngResource ***!
  \********************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div\n  class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\"\n>\n  <div>\n    <h4 class=\"mr-1 mb-md-0\">مراجعة القرض</h4>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-client-search\n      *ngIf=\"isSearching\"\n      [sourcePage]=\"57\"\n      [pageAction]=\"0\"\n      [resultType]=\"1\"\n      (selectedClient)=\"clientSelected($event)\"\n    >\n    </app-client-search>\n  </div>\n</div>\n<div class=\"col-md-12 grid-margin\" *ngIf=\"isLoanForm\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <form [formGroup]=\"LoanForm\">\n        <ng-container>\n          <ion-item slot=\"header\">\n            <ion-label class=\"font-weight-bold text-center\"\n              >بيانات العميل</ion-label\n            >\n          </ion-item>\n          <div class=\"ion-padding\" slot=\"content\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <span class=\"font-weight-bold pl-1\">اسم العميل</span>\n                <ion-label class=\"form-control\">\n                  {{checker(clientInfo?.client_name)}}\n                </ion-label>\n              </div>\n              <div class=\"col-md-3\">\n                <span class=\"font-weight-bold pl-1\">كود العميل</span>\n                <ion-label class=\"form-control\">\n                  {{checker(clientInfo?.client_code)}}\n                </ion-label>\n              </div>\n              <div class=\"col-md-3\">\n                <span class=\"font-weight-bold pl-1\">رقم المحمول</span>\n                <ion-label class=\"form-control\">\n                  {{checker(clientInfo?.mobile_1)}}\n                </ion-label>\n              </div>\n            </div>\n          </div>\n          <ion-item slot=\"header\">\n            <ion-label class=\"font-weight-bold text-center\"\n              >بيانات القرض</ion-label\n            >\n          </ion-item>\n          <div class=\"ion-padding\" slot=\"content\">\n            <div class=\"row\">\n              <div class=\"col-md-3\">\n                <span class=\"font-weight-bold pl-1\">رقم القرض</span>\n                <ion-label class=\"form-control\">\n                  {{checker(LoanInfo?.loan_code.toString())}}\n                </ion-label>\n              </div>\n              <div class=\"col-md-3\">\n                <span class=\"font-weight-bold pl-1\">عدد الاقساط</span>\n                <ion-label class=\"form-control\">\n                  {{checker(LoanInfo?.loan_no.toString())}}\n                </ion-label>\n              </div>\n              <div class=\"col-md-6\">\n                <span class=\"font-weight-bold pl-1\">مبلغ القرض</span>\n                <ion-label class=\"form-control\">\n                  {{checker(LoanInfo?.loan_am.toString())}}\n                </ion-label>\n              </div>\n            </div>\n          </div>\n          <ion-item slot=\"header\">\n            <ion-label class=\"font-weight-bold text-center\"\n              >بيانات عنوان السكن</ion-label\n            >\n          </ion-item>\n          <div class=\"ion-padding\" slot=\"content\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <span class=\"font-weight-bold pl-1\">عنوان المنزل</span>\n                <ion-label class=\"form-control\">\n                  {{checker(clientInfo?.home_add_1)}}{{clientInfo?.home_add_2}}{{clientInfo?.home_add_3}}\n                </ion-label>\n              </div>\n            </div>\n            <div class=\"row justify-content-center\">\n              <ion-button\n                class=\"py-0 h-max\"\n                (click)=\"ShowHomeLocation()\"\n                [disabled]=\"!clientInfo?.home_Lat || !clientInfo?.home_Long\"\n                ><ion-icon slot=\"start\" name=\"location-sharp\"></ion-icon>اظهر\n                العنوان الحالي على الخريطة</ion-button\n              >\n              <ion-button class=\"py-0 h-max\" (click)=\"GetHomeLocation()\"\n                ><ion-icon slot=\"start\" name=\"location-sharp\"></ion-icon>أخذ\n                لقطة جديدة</ion-button\n              >\n            </div>\n          </div>\n          <ion-item slot=\"header\">\n            <ion-label class=\"font-weight-bold text-center\"\n              >بيانات عنوان العمل</ion-label\n            >\n          </ion-item>\n          <div class=\"ion-padding\" slot=\"content\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <span class=\"font-weight-bold pl-1\">عنوان العمل</span>\n                <ion-label class=\"form-control\">\n                  {{checker(clientInfo?.bus_add_1)}}{{clientInfo?.bus_add_2}}{{clientInfo?.bus_add_3}}\n                </ion-label>\n              </div>\n            </div>\n            <div class=\"row justify-content-center\">\n              <ion-button\n                class=\"py-0 h-max\"\n                (click)=\"ShowBusLocation()\"\n                [disabled]=\"!clientInfo?.bus_Lat || !clientInfo?.bus_Long\"\n                ><ion-icon slot=\"start\" name=\"location-sharp\"></ion-icon>اظهر\n                العنوان الحالي على الخريطة</ion-button\n              >\n              <ion-button class=\"py-0 h-max\" (click)=\"GetBusLocation()\"\n                ><ion-icon slot=\"start\" name=\"location-sharp\"></ion-icon>أخذ\n                لقطة جديدة</ion-button\n              >\n            </div>\n          </div>\n          <ion-item slot=\"header\">\n            <ion-label class=\"font-weight-bold text-center\"\n              >بيانات الاستعلام</ion-label\n            >\n          </ion-item>\n          <div class=\"ion-padding\" slot=\"content\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <ion-textarea\n                  formControlName=\"notes\"\n                  placeholder=\"الملاحظات\"\n                  [autoGrow]=\"true\"\n                ></ion-textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col py-3\">\n              <ion-button\n                class=\"btn py-0 btn-block btn-lg h-max\"\n                (click)=\"SaveAlert()\"\n                >حفظ</ion-button\n              >\n              <ion-button\n                color=\"danger\"\n                class=\"btn py-0 btn-block btn-lg h-max\"\n                (click)=\"cancel()\"\n                >الغاء</ion-button\n              >\n            </div>\n          </div>\n        </ng-container>\n      </form>\n    </div>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_loan-field-review_loan-field-review_module_ts.js.map