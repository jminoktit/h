"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_loan-tracker_loan-tracker_module_ts"],{

/***/ 35398:
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-tracker/loan-tracker-routing.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanTrackerPageRoutingModule": function() { return /* binding */ LoanTrackerPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_tracker_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-tracker.page */ 30306);






var routes = [{
  path: '',
  component: _loan_tracker_page__WEBPACK_IMPORTED_MODULE_2__.loantrackerPage
}];

var LoanTrackerPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanTrackerPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanTrackerPageRoutingModule);
});

LoanTrackerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoanTrackerPageRoutingModule);


/***/ }),

/***/ 63357:
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-tracker/loan-tracker.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanTrackerPageModule": function() { return /* binding */ LoanTrackerPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);
/* harmony import */ var _loan_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-tracker-routing.module */ 35398);
/* harmony import */ var _loan_tracker_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-tracker.page */ 30306);












var LoanTrackerPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanTrackerPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanTrackerPageModule);
});

LoanTrackerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _loan_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__.LoanTrackerPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_loan_tracker_page__WEBPACK_IMPORTED_MODULE_4__.loantrackerPage]
})], LoanTrackerPageModule);


/***/ }),

/***/ 30306:
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-tracker/loan-tracker.page.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loantrackerPage": function() { return /* binding */ loantrackerPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _loan_tracker_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-tracker.page.html?ngResource */ 60885);
/* harmony import */ var _loan_tracker_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-tracker.page.scss?ngResource */ 71761);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);















var loantrackerPage = /*#__PURE__*/function () {
  function loantrackerPage(env, datepipe, http, formBuilder, platform, router, alertController, authService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, loantrackerPage);

    this.env = env;
    this.datepipe = datepipe;
    this.http = http;
    this.formBuilder = formBuilder;
    this.platform = platform;
    this.router = router;
    this.alertController = alertController;
    this.authService = authService;
    this.showLoader = false;
    this.isSubmitted = false;
    this.isvalids = false; //#region Variables

    this.isTrackerForm = false;
    this.isSearching = true;
    this.isIonAccordion = false;
  } //#endregion


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(loantrackerPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.registerBackButtonListener();

              case 1:
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
      var _this = this;

      this.SearchResult = event;
      this.showLoader = true;

      try {
        this.isSearching = false;
        this.http.post(this.env.API_URL + "api/Loan/TrackingLoan", {
          nation_id: event.nation_id
        }).subscribe(function (data) {
          _this.Tracking = data; // changing in formats in Tracking Result

          for (var i = 0; i < _this.Tracking.length;) {
            _this.Tracking[i].original_amount = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatNumber)(Number(parseInt(_this.Tracking[i].original_amount)), "en-US", "1.0-0");
            _this.Tracking[i].inst_int = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatNumber)(Number(parseInt(_this.Tracking[i].inst_int)), "en-US", "1.0-0");
            _this.Tracking[i].inst_am = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatNumber)(Number(parseInt(_this.Tracking[i].inst_am)), "en-US", "1.0-0");
            _this.Tracking[i].deserved_amount = (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.formatNumber)(Number(parseInt(_this.Tracking[i].deserved_amount)), "en-US", "1.0-0");
            _this.Tracking[i].inst_mat_date = _this.datepipe.transform(_this.Tracking[i].inst_mat_date, "yyyy-MM-dd");
            i++;
          } // put all loan_code together in array


          var distinct_loan_code_array = _this.getDistinctValues(_this.Tracking, "loan_code"); // here i get the info of every loan and put it in variable InfoOfEveryLoan


          _this.InfoOfEveryLoan = distinct_loan_code_array.map(function (loanCode) {
            return _this.Tracking.find(function (x) {
              return x.loan_code === loanCode;
            });
          });
          _this.isIonAccordion = true; // put every installment with each other in array

          _this.InstallmentsArray = distinct_loan_code_array.filter(function (code) {
            return _this.Tracking.some(function (item) {
              return item.loan_code.toString() === code.toString();
            });
          }).map(function (code) {
            return _this.Tracking.filter(function (item) {
              return item.loan_code.toString() === code.toString();
            });
          });
          _this.isTrackerForm = true;
          _this.showLoader = false;
        });
      } catch (error) {
        console.log(error);
        this.showLoader = false;
        this.showAlertNoReload("\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0635\u0641\u062D\u0629 : ".concat(error));
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.backButtonListener.unsubscribe();
    } // this method to get all available values from specific column in array

  }, {
    key: "getDistinctValues",
    value: function getDistinctValues(data, distinct_name) {
      var values = data.map(function (item) {
        return item[distinct_name];
      });
      var distinctValues = values.filter(function (value, index, array) {
        return array.indexOf(value) === index;
      });
      return distinctValues;
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
      if (this.isSearching == true) {
        this.router.navigate(["/home"]);
      } else if (this.isTrackerForm == true) {
        this.isTrackerForm = false;
        this.isSearching = true;
      }
    }
  }, {
    key: "showAlertNoReload",
    value: function showAlertNoReload(message) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var alert;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                alert = this.alertController.create({
                  header: "تنبيه",
                  message: message,
                  buttons: [{
                    text: "OK",
                    role: "OK"
                  }]
                });
                _context2.next = 3;
                return alert;

              case 3:
                _context2.sent.present();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "showAlert",
    value: function showAlert(message) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var alert;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
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
                _context3.next = 3;
                return alert;

              case 3:
                _context3.sent.present();

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
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
    key: "backToSearch",
    value: function backToSearch() {
      if (!this.isSearching) {
        location.reload();
      }
    }
  }]);

  return loantrackerPage;
}();

loantrackerPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }];
};

loantrackerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: "app-loan-tracker",
  template: _loan_tracker_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_loan_tracker_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], loantrackerPage);


/***/ }),

/***/ 71761:
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-tracker/loan-tracker.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ (function(module) {

module.exports = ".table tbody th,\n.table tbody td {\n  padding: 0.4rem 0.9375rem !important;\n}\n\n.labelpad {\n  padding-bottom: 55px;\n}\n\n@media (min-width: 770px) {\n  .btnMar {\n    margin-right: 290%;\n    font-size: medium;\n  }\n}\n\n.checkBoxs {\n  margin-right: 1.5rem;\n}\n\n.form-control-error {\n  border-color: #ff3366;\n}\n\n.form-control-error:hover {\n  border-color: #da0036;\n}\n\n.input-validator {\n  font-weight: 600;\n  padding-right: 10px;\n  padding-left: 10px;\n  color: #ff3366 !important;\n}\n\n.input-validator::before {\n  content: \"-\";\n  margin-left: 6px;\n}\n\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.checkBox-isactive {\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n\n.group-title {\n  font-weight: 700;\n  font-size: 1.2rem;\n  text-align: center;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n  border-radius: 6px;\n  background-image: linear-gradient(to left, rgba(112, 123, 245, 0.2), var(--card-bg));\n  border-color: #c8cbea;\n  color: var(--body-color);\n}\n\n.nested-form {\n  border: 2px solid rgba(112, 123, 245, 0.2);\n  border-radius: 5px;\n  padding: 1rem 2rem;\n}\n\n.form-group-title {\n  display: block;\n  color: var(--theme-color-primary);\n  font-weight: 700;\n}\n\n.alert-button-confirm {\n  color: var(--body-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tdHJhY2tlci5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEZWxldGUlMjBpdFxcTmV3TW9oYXNzaWxDbGllbnRfMzA5NV9zcmNcXE5ld01vaGFzc2lsQ2xpZW50XFxzcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxsb2Fuc1xcbG9hbi10cmFja2VyXFxsb2FuLXRyYWNrZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJOztFQUVFLG9DQUFBO0FDRE47O0FETUE7RUFDRSxvQkFBQTtBQ0hGOztBRFVBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0VDUEY7QUFDRjs7QURTQTtFQUNFLG9CQUFBO0FDUEY7O0FEVUE7RUFDRSxxQkFBQTtBQ1BGOztBRFFFO0VBQ0UscUJBQUE7QUNOSjs7QURVQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDUEY7O0FEUUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURXRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ1JKOztBRFlBO0VBRUUsbUJBQUE7TUFBQSxxQkFBQTtBQ1ZGOztBRGFBO0VBR0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBR0Esb0ZBQUE7RUFLQSxxQkFBQTtFQUNBLHdCQUFBO0FDbEJGOztBRHFCQTtFQUdFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSx3QkFBQTtBQ3BCRiIsImZpbGUiOiJsb2FuLXRyYWNrZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICB0Ym9keSB7XHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgcGFkZGluZzogMC40cmVtIDAuOTM3NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxhYmVscGFkIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcclxufVxyXG5cclxuLy8gaW9uLWJ1dHRvbiB7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbi8vICAgcGFkZGluZy1yaWdodDogMjAlO1xyXG4vLyAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NzBweCkge1xyXG4gIC5idG5NYXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyOTAlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgfVxyXG59XHJcbi5jaGVja0JveHMge1xyXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWVycm9yIHtcclxuICBib3JkZXItY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjE4LCAwLCA1NCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXQtdmFsaWRhdG9yIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKSAhaW1wb3J0YW50O1xyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIi1cIjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgNTEsIDEwMikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jaGVja0JveC1pc2FjdGl2ZSB7XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5ncm91cC10aXRsZSB7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjNDVjY2IxLCAwLjgpO1xyXG4gIC8vIGNvbG9yOiAjZjZmY2VmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNhNGQ0OTEsIDAuMyk7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2M4Y2JlYTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBsZWZ0LFxyXG4gICAgcmdiYSgjNzA3YmY1LCAwLjIpLFxyXG4gICAgdmFyKC0tY2FyZC1iZylcclxuICApO1xyXG4gIGJvcmRlci1jb2xvcjogI2M4Y2JlYTtcclxuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XHJcbn1cclxuXHJcbi5uZXN0ZWQtZm9ybSB7XHJcbiAgLy8gYm9yZGVyLXJpZ2h0OiAwLjJyZW0gc29saWQgcmdiYSgjNzA3YmY1LCAwLjIpO1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgjNzA3YmY1LCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwLXRpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmFsZXJ0LWJ1dHRvbi1jb25maXJtIHtcclxuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XHJcbn1cclxuIiwiLnRhYmxlIHRib2R5IHRoLFxuLnRhYmxlIHRib2R5IHRkIHtcbiAgcGFkZGluZzogMC40cmVtIDAuOTM3NXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubGFiZWxwYWQge1xuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc3MHB4KSB7XG4gIC5idG5NYXIge1xuICAgIG1hcmdpbi1yaWdodDogMjkwJTtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgfVxufVxuLmNoZWNrQm94cyB7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xufVxuXG4uZm9ybS1jb250cm9sLWVycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmYzMzY2O1xufVxuLmZvcm0tY29udHJvbC1lcnJvcjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2RhMDAzNjtcbn1cblxuLmlucHV0LXZhbGlkYXRvciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6ICNmZjMzNjYgIWltcG9ydGFudDtcbn1cbi5pbnB1dC12YWxpZGF0b3I6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiLVwiO1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuXG4uZm9ybS1sYWJlbC1yZXF1aXJlZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIipcIjtcbiAgY29sb3I6ICNmZjMzNjYgIWltcG9ydGFudDtcbn1cblxuLmNoZWNrQm94LWlzYWN0aXZlIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uZ3JvdXAtdGl0bGUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMTEyLCAxMjMsIDI0NSwgMC4yKSwgdmFyKC0tY2FyZC1iZykpO1xuICBib3JkZXItY29sb3I6ICNjOGNiZWE7XG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcbn1cblxuLm5lc3RlZC1mb3JtIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgxMTIsIDEyMywgMjQ1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbn1cblxuLmZvcm0tZ3JvdXAtdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uYWxlcnQtYnV0dG9uLWNvbmZpcm0ge1xuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XG59Il19 */";

/***/ }),

/***/ 60885:
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-tracker/loan-tracker.page.html?ngResource ***!
  \**********************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\r\n<div\r\n  class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\"\r\n>\r\n  <div>\r\n    <h4 class=\"mr-1 mb-md-0\">متابعة القرض</h4>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12\">\r\n    <app-client-search\r\n      *ngIf=\"isSearching\"\r\n      [sourcePage]=\"61\"\r\n      [pageAction]=\"1\"\r\n      (selectedClient)=\"clientSelected($event)\"\r\n      [initialSearchType]=\"'1'\"\r\n    >\r\n    </app-client-search>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"isTrackerForm\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row d-flex align-items-center\">\r\n          <div class=\"col-lg-3\">\r\n            <div class=\"form-group\">\r\n              <h6>الاسم</h6>\r\n              <div>\r\n                <ion-label> {{SearchResult.client_name}} </ion-label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3\">\r\n            <div class=\"form-group\">\r\n              <h6>كود العميل</h6>\r\n\r\n              <div>\r\n                <ion-label> {{SearchResult.client_code }} </ion-label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-3\">\r\n            <div class=\"form-group\">\r\n              <h6>الرقم القومي</h6>\r\n\r\n              <div>\r\n                <ion-label> {{SearchResult.nation_id}} </ion-label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-container *ngIf=\"isIonAccordion\">\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-accordion-group>\r\n        <ion-accordion\r\n          class=\"rounded my-2\"\r\n          *ngFor=\"let info of InfoOfEveryLoan; let i = index\"\r\n        >\r\n          <ion-item slot=\"header\">\r\n            <ion-label class=\"font-weight-bold text-center\"\r\n              >رقم القرض: {{ info.loan_code }}</ion-label\r\n            >\r\n            <ion-label class=\"font-weight-bold text-center\"\r\n              >مبلغ القرض: {{ info.loan_am }}</ion-label\r\n            >\r\n            <ion-label class=\"font-weight-bold text-center\"\r\n              >حالة القرض: {{ info.loan_status_desc }}</ion-label\r\n            >\r\n          </ion-item>\r\n          <div class=\"ion-padding\" slot=\"content\">\r\n            <div class=\"row justify-content-center\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th class=\"text-center\">رقم القسط</th>\r\n                      <th class=\"text-center\">التاريخ</th>\r\n                      <th class=\"text-center\">المبلغ المطلوب</th>\r\n                      <th class=\"text-center\">المبلغ المستحق</th>\r\n                      <th class=\"text-center\">الحالة</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr\r\n                      *ngFor=\"let track of InstallmentsArray[i]; let i = index\"\r\n                    >\r\n                      <td class=\"text-center\">{{ track.inst_serial }}</td>\r\n                      <td class=\"text-center\">{{ track.inst_mat_date }}</td>\r\n                      <td class=\"text-center\">{{ track.inst_am}}</td>\r\n                      <td class=\"text-center\">{{ track.deserved_amount }}</td>\r\n                      <td class=\"text-center\">{{ track.inst_status_desc }}</td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ion-accordion>\r\n      </ion-accordion-group>\r\n      <ion-row class=\"ion-padding ion-justify-content-center\">\r\n        <ion-button color=\"danger\" (click)=\"backToSearch()\">رجوع</ion-button>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ng-container>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_loan-tracker_loan-tracker_module_ts.js.map