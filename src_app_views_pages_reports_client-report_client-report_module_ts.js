"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_reports_client-report_client-report_module_ts"],{

/***/ 72282:
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/reports/client-report/client-report-routing.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientReportPageRoutingModule": function() { return /* binding */ ClientReportPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _client_report_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-report.page */ 62388);






var routes = [{
  path: '',
  component: _client_report_page__WEBPACK_IMPORTED_MODULE_2__.ClientReportPage
}];

var ClientReportPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ClientReportPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientReportPageRoutingModule);
});

ClientReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ClientReportPageRoutingModule);


/***/ }),

/***/ 99998:
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/reports/client-report/client-report.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientReportPageModule": function() { return /* binding */ ClientReportPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _client_report_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-report-routing.module */ 72282);
/* harmony import */ var _client_report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-report.page */ 62388);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var ClientReportPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ClientReportPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientReportPageModule);
});

ClientReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _client_report_routing_module__WEBPACK_IMPORTED_MODULE_2__.ClientReportPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_client_report_page__WEBPACK_IMPORTED_MODULE_3__.ClientReportPage]
})], ClientReportPageModule);


/***/ }),

/***/ 62388:
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/reports/client-report/client-report.page.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientReportPage": function() { return /* binding */ ClientReportPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _client_report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-report.page.html?ngResource */ 50157);
/* harmony import */ var _client_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-report.page.scss?ngResource */ 51746);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/client.service */ 2671);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/loan-applications.service */ 35866);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/pdf-viewer.service */ 37801);
/* harmony import */ var src_app_core_util_atobSafe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/util/atobSafe */ 82817);



















var ClientReportPage = /*#__PURE__*/function () {
  //endregion
  function ClientReportPage(formBuilder, platform, env, http, authService, alertService, pdfViewerService, clientService, loanApplicationService, pagingService) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClientReportPage);

    this.formBuilder = formBuilder;
    this.platform = platform;
    this.env = env;
    this.http = http;
    this.authService = authService;
    this.alertService = alertService;
    this.pdfViewerService = pdfViewerService;
    this.clientService = clientService;
    this.loanApplicationService = loanApplicationService;
    this.pagingService = pagingService;
    this.showLoader = false;
    this.isSearching = true;
    this.isReportForm = false;
    this.isApplicationGrid = false;
    this.isRiskReport = false;
    this.all_applic = 0; //endregion
    //region Variables

    this.initialSearchType = "1";
    this.selectedApplication = [];
    this.ApplicationPage = 1; //endregion
    //region Forms

    this.ReportForm = this.formBuilder.group({
      reportValue: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
    });

    this.changePaginationPage = function (newPage) {
      _this.ApplicationPage = newPage;
    };

    this.isMobile = this.platform.is("mobile");
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ClientReportPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.selectedClient = null;
      this.selectedClientApplications = null;
      this.isReportForm = false;
      this.isSearching = true;
      this.isApplicationGrid = false;
      this.ReportForm.reset();
      this.reportsLabels = [{
        key: 1,
        value: "حالة عميل"
      }, {
        key: 2,
        value: "حالة عميل مجمعة"
      }, {
        key: 3,
        value: "الحركة تبعاً للعميل"
      }, {
        key: 4,
        value: "حالة العميل التفصيلية"
      }, {
        key: 5,
        value: "ملخص القروض تبعاً للعميل"
      }, {
        key: 6,
        value: "طلبات قروض ضمنها العميل"
      }, {
        key: 7,
        value: "قائمة الاقساط بالقيمة الحالية"
      }, {
        key: 8,
        value: "طلبات قروض العميل"
      }, {
        key: 9,
        value: "الجدارة الائتمانية"
      }];
    } //region Client Search

  }, {
    key: "clientSelected",
    value: function clientSelected(event) {
      var _this2 = this;

      this.clientService.getClientInfoByClientKey(event.client_key).then(function (client) {
        _this2.selectedClient = client;
        _this2.isSearching = false;
        _this2.isReportForm = true;
      });
    }
  }, {
    key: "backToSearchForm",
    value: function backToSearchForm() {
      this.isSearching = true;
      this.isReportForm = false;
      this.isApplicationGrid = false;
      this.selectedClient = null;
      this.selectedClientApplications = null;
      this.ReportForm.reset();
      this.isRiskReport = false;
    } //endregion
    //region Select Report

  }, {
    key: "onChangeReportValue",
    value: function onChangeReportValue() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.isReportForm) {
                  _context.next = 19;
                  break;
                }

                this.showLoader = true;

                if (!(this.ReportForm.controls.reportValue.value == 8 || this.ReportForm.controls.reportValue.value == 9)) {
                  _context.next = 14;
                  break;
                }

                this.selectedApplication = [];
                this.selectedClientApplications = [];
                _context.next = 7;
                return this.loanApplicationService.getApplicationByClientKey(Number(this.selectedClient.clientKey));

              case 7:
                _context.next = 9;
                return _context.sent.map(function (x) {
                  return Object.assign(Object.assign({}, x), {
                    isChecked: false
                  });
                });

              case 9:
                this.selectedClientApplications = _context.sent;
                this.isApplicationGrid = true;

                if (this.ReportForm.controls.reportValue.value == 9) {
                  this.isRiskReport = true;
                  this.selectedApplication = [];
                } else {
                  this.isRiskReport = false;
                }

                _context.next = 18;
                break;

              case 14:
                this.isRiskReport = false;
                this.isApplicationGrid = false;
                this.selectedClientApplications = null;
                this.selectedApplication = [];

              case 18:
                this.showLoader = false;

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    } //endregion
    //region GET Report

  }, {
    key: "b64DecodeUnicode",
    value: function b64DecodeUnicode(str) {
      return decodeURIComponent((0,src_app_core_util_atobSafe__WEBPACK_IMPORTED_MODULE_12__.atobSafe)(str).split("").map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(""));
    }
  }, {
    key: "getClientReport",
    value: function getClientReport() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var _this3 = this;

        var ReportValue, reportName, reportParameter, client_name, token, claims, username, pwd;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                ReportValue = this.ReportForm.controls.reportValue.value;

                if (!(ReportValue == "" || !!!ReportValue)) {
                  _context4.next = 5;
                  break;
                }

                this.alertService.showAlertError("يجب اختيار نوع تقرير", false, "موافق");
                _context4.next = 43;
                break;

              case 5:
                reportParameter = [{
                  key: "@client_key",
                  value: this.selectedClient.clientKey
                }];
                _context4.t0 = ReportValue;
                _context4.next = _context4.t0 === 1 ? 9 : _context4.t0 === 2 ? 11 : _context4.t0 === 3 ? 13 : _context4.t0 === 4 ? 16 : _context4.t0 === 5 ? 18 : _context4.t0 === 6 ? 20 : _context4.t0 === 7 ? 22 : _context4.t0 === 8 ? 24 : _context4.t0 === 9 ? 28 : 31;
                break;

              case 9:
                reportName = "web_02_viewclient";
                return _context4.abrupt("break", 31);

              case 11:
                reportName = "web_02_viewclient_sum";
                return _context4.abrupt("break", 31);

              case 13:
                reportName = "web_client_transaction_rep";
                reportParameter = [{
                  key: "@cur_client_key",
                  value: this.selectedClient.clientKey
                }];
                return _context4.abrupt("break", 31);

              case 16:
                reportName = "web_02_viewclient_details";
                return _context4.abrupt("break", 31);

              case 18:
                reportName = "web_client_cosigner_loan";
                return _context4.abrupt("break", 31);

              case 20:
                reportName = "web_loan_app_co";
                return _context4.abrupt("break", 31);

              case 22:
                reportName = "web_client_loans_present_value";
                return _context4.abrupt("break", 31);

              case 24:
                reportName = "web_02_client_applic";

                if (this.all_applic == 1) {
                  this.selectedApplicationString = "";
                } else {
                  this.selectedApplicationString = this.selectedApplication.join(",");
                }

                reportParameter = [{
                  key: "@client_key",
                  value: this.selectedClient.clientKey
                }, {
                  key: "@application_key",
                  value: this.selectedApplicationString
                }, {
                  key: "@all_applic",
                  value: this.all_applic.toString()
                }];
                return _context4.abrupt("break", 31);

              case 28:
                reportName = "web_client_risk";
                reportParameter = [{
                  key: "@application_key",
                  value: this.selectedApplication.toString()
                }];
                return _context4.abrupt("break", 31);

              case 31:
                client_name = this.selectedClient.clientName;
                _context4.next = 34;
                return this.authService.getAccessToken();

              case 34:
                token = _context4.sent;
                token = token.replace("-", "+").replace("_", "/");
                claims = JSON.parse((0,src_app_core_util_atobSafe__WEBPACK_IMPORTED_MODULE_12__.atobSafe)(token.split(".")[1]));
                username = "";
                pwd = "";

                try {
                  username = this.b64DecodeUnicode(btoa(claims.user_name));
                } catch (err) {
                  username = claims.user_name;
                }

                try {
                  pwd = this.b64DecodeUnicode(btoa(claims.pwd));
                } catch (err) {
                  pwd = claims.pwd;
                }

                this.showLoader = true;
                this.http.post(this.env.API_URL + "api/Reporting/GetReport", {
                  report_name: reportName,
                  report_parameters: reportParameter,
                  token: {
                    username: username,
                    password: pwd
                  }
                }).subscribe({
                  next: function next(data) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              this.showLoader = false;

                              if (!(data.status_code == 200)) {
                                _context2.next = 5;
                                break;
                              }

                              this.showClientReportPdf(data.report, client_name);
                              _context2.next = 7;
                              break;

                            case 5:
                              _context2.next = 7;
                              return this.alertService.showAlertError(data.message, false);

                            case 7:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2, this);
                    }));
                  },
                  error: function error(err) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _context3.next = 2;
                              return this.alertService.showAlertError(err.error, false);

                            case 2:
                              this.showLoader = false;

                            case 3:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3, this);
                    }));
                  }
                });

              case 43:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "showClientReportPdf",
    value: function showClientReportPdf(pdfBase64, client_name) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var _this4 = this;

        var reportlabel;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this.pdfViewerService.canViewPdf()) {
                  _context5.next = 4;
                  break;
                }

                _context5.next = 3;
                return this.alertService.showAlertError("لا يمكن عرض أو تنزيل المستند على المتصفح الحالي", false);

              case 3:
                return _context5.abrupt("return");

              case 4:
                reportlabel = this.reportsLabels.find(function (x) {
                  return x.key == _this4.ReportForm.controls.reportValue.value;
                }).value;
                _context5.next = 7;
                return this.pdfViewerService.viewPdf(pdfBase64, "\u062A\u0642\u0631\u064A\u0631 ".concat({
                  reportlabel: reportlabel
                }, " - ").concat({
                  client_name: client_name
                }, ".pdf"), reportlabel);

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    } //endregion
    //region Checbox

  }, {
    key: "isAllSelected",
    set: function set(value) {
      this.selectedClientApplications.forEach(function (app) {
        return app.isChecked = value;
      });
    }
  }, {
    key: "onCheckboxMasterChange",
    value: function onCheckboxMasterChange(event) {
      var isChecked = event.target.checked;
      this.selectedClientApplications.forEach(function (app) {
        return app.isChecked = isChecked;
      });
      this.updateSelectedLoanForAll(isChecked);
    }
  }, {
    key: "updateSelectedLoanForAll",
    value: function updateSelectedLoanForAll(isChecked) {
      var _this5 = this;

      this.selectedApplication = [];

      if (isChecked) {
        this.selectedClientApplications.forEach(function (app) {
          _this5.selectedApplication.push(app.applicationKey);
        });
        this.all_applic = 1;
      }
    }
  }, {
    key: "convertStringToDate",
    value: function convertStringToDate(str) {
      var date = new Date(str);
      return date.toLocaleDateString();
    }
  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(event, app_key, index) {
      var selectedApp = this.selectedClientApplications[index + this.pagingService.pageSize * (this.ApplicationPage - 1)];
      selectedApp.isChecked = event.target.checked;
      this.updateSelectedApplicaiton(app_key, event.target.checked);
      this.updateMasterCheckbox();

      if (this.selectedClientApplications.length !== this.selectedApplication.length) {
        if (this.selectedApplication.length === 0) {
          this.ionCheckBox.indeterminate = false;
        } else {
          this.ionCheckBox.indeterminate = true;
        }

        this.all_applic = 0;
      } else if (this.selectedClientApplications.length === this.selectedApplication.length) {
        this.ionCheckBox.indeterminate = false;
        this.isAllSelected = true;
        this.all_applic = 1;
      }
    }
  }, {
    key: "updateSelectedApplicaiton",
    value: function updateSelectedApplicaiton(app_key, isChecked) {
      var index = this.selectedApplication.indexOf(app_key);

      if (isChecked && index === -1) {
        this.selectedApplication.push(app_key);
      } else if (!isChecked && index > -1) {
        this.selectedApplication.splice(index, 1);
      }
    }
  }, {
    key: "updateMasterCheckbox",
    value: function updateMasterCheckbox() {
      var allSelected = this.selectedClientApplications.every(function (app) {
        return app.isChecked;
      });
      var someSelected = this.selectedClientApplications.some(function (app) {
        return app.isChecked;
      });

      if (allSelected) {
        this.isAllSelected = true;
        this.ionCheckBox.checked = true;
      } else if (!someSelected) {
        this.ionCheckBox.checked = false;
        this.ionCheckBox.indeterminate = false;
        this.isAllSelected = false;
        this.all_applic = 0;
      }
    } //endregion

  }, {
    key: "ReportApplicationRisk",
    value: function ReportApplicationRisk(app) {
      this.selectedApplication = [];
      this.selectedApplication.push(app);
      this.getClientReport();
    }
  }]);

  return ClientReportPage;
}();

ClientReportPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.Platform
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_8__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: src_app_core_services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_11__.PdfViewerService
  }, {
    type: src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_7__.ClientService
  }, {
    type: src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_9__.LoanApplicationsService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_10__.pagingService
  }];
};

ClientReportPage.propDecorators = {
  ionCheckBox: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: ["ionCheckBox"]
  }]
};
ClientReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: "app-client-report",
  template: _client_report_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_client_report_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], ClientReportPage);


/***/ }),

/***/ 51746:
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/reports/client-report/client-report.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ (function(module) {

module.exports = ".Settings-Btn {\n  --background: none !important;\n  --border-width: 0px !important;\n}\n.Settings-Btn ion-icon {\n  color: var(--menu-icon);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1yZXBvcnQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xccmVwb3J0c1xcY2xpZW50LXJlcG9ydFxcY2xpZW50LXJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLDhCQUFBO0FDQ0o7QURDSTtFQUNFLHVCQUFBO0FDQ04iLCJmaWxlIjoiY2xpZW50LXJlcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuU2V0dGluZ3MtQnRuIHtcclxuICAgIC0tYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG4gIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBjb2xvcjogdmFyKC0tbWVudS1pY29uKTtcclxuICAgIH1cclxuICB9IiwiLlNldHRpbmdzLUJ0biB7XG4gIC0tYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAtLWJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uU2V0dGluZ3MtQnRuIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLW1lbnUtaWNvbik7XG59Il19 */";

/***/ }),

/***/ 50157:
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/reports/client-report/client-report.page.html?ngResource ***!
  \**************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<h4 class=\"divCenter\">تقرير حالة العميل</h4>\n\n<app-client-search\n  *ngIf=\"isSearching\"\n  [sourcePage]=\"109\"\n  [searchMethod]=\"2\"\n  [resultType]=\"0\"\n  [pageAction]=\"0\"\n  [initialSearchType]=\"initialSearchType\"\n  (selectedClient)=\"clientSelected($event)\"\n>\n</app-client-search>\n<ion-card *ngIf=\"isReportForm\">\n  <ion-card-content>\n    <form [formGroup]=\"ReportForm\" (ngSubmit)=\"getClientReport()\">\n      <div class=\"table-responsive\">\n        <ion-grid class=\"scroll-container\" style=\"min-width: 700px\">\n          <ion-row class=\"header-row\">\n            <ion-col size=\"3\">\n              <ion-label>اسم العميل</ion-label>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-label>الفرع</ion-label>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-label>الرقم القومي</ion-label>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-label>نوع التقرير</ion-label>\n            </ion-col>\n            <ion-col size=\"1\" *ngIf=\"!isRiskReport\">\n              <ion-label>عرض التقرير</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row class=\"details-row\">\n            <ion-col size=\"3\">\n              <ion-label>{{ this.selectedClient.clientName }}</ion-label>\n            </ion-col>\n            <ion-col size=\"2\">\n              <ion-label>{{ this.selectedClient.branchName }}</ion-label>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-label>{{ this.selectedClient.nationalId }}</ion-label>\n            </ion-col>\n            <ion-col size=\"3\">\n              <ion-select\n                interface=\"popover\"\n                placeholder=\"اختر نوع التقرير\"\n                class=\"subselect\"\n                formControlName=\"reportValue\"\n                (ionChange)=\"onChangeReportValue()\"\n              >\n                <ion-select-option [value]=\"1\"> حالة عميل </ion-select-option>\n                <ion-select-option [value]=\"2\">\n                  حالة عميل مجمعة\n                </ion-select-option>\n                <ion-select-option [value]=\"3\">\n                  الحركة تبعاً للعميل\n                </ion-select-option>\n                <ion-select-option [value]=\"4\">\n                  حالة العميل التفصيلية\n                </ion-select-option>\n                <ion-select-option [value]=\"5\">\n                  ملخص القروض تبعاً للعميل\n                </ion-select-option>\n                <ion-select-option [value]=\"6\">\n                  طلبات قروض ضمنها العميل\n                </ion-select-option>\n                <ion-select-option [value]=\"7\">\n                  قائمة الاقساط بالقيمة الحالية\n                </ion-select-option>\n                <ion-select-option [value]=\"8\">\n                  طلبات قروض العميل\n                </ion-select-option>\n                <ion-select-option [value]=\"9\">\n                  الجدارة الائتمانية\n                </ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col size=\"1\" *ngIf=\"!isRiskReport\">\n              <ion-button\n                [disabled]=\"isApplicationGrid && this.selectedApplication.length==0\"\n                type=\"submit\"\n                fill=\"clear\"\n                class=\"Settings-Btn\"\n              >\n                <ion-icon name=\"document-text\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <div class=\"d-flex justify-content-center mt-2\">\n        <ion-button (click)=\"backToSearchForm()\" color=\"danger\"\n          >رجوع</ion-button\n        >\n      </div>\n    </form>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"isApplicationGrid\">\n  <ion-card-content *ngIf=\"this.selectedClientApplications.length>0\">\n    <div class=\"table-responsive\">\n      <ion-grid class=\"scroll-container\" style=\"min-width: 600px\">\n        <ion-row class=\"header-row\">\n          <ion-col size=\"1\" *ngIf=\"!isRiskReport\">\n            <ion-checkbox\n              type=\"checkbox\"\n              #ionCheckBox\n              (ionChange)=\"onCheckboxMasterChange($event)\"\n              [checked]=\"isAllSelected\"\n            ></ion-checkbox>\n          </ion-col>\n          <ion-col size=\"1\" *ngIf=\"isRiskReport\">\n            <ion-label>عرض التقرير</ion-label>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-label>كود الطلب</ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-label>قيمة القرض المطلوب</ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-label>قيمة القرض الموافق علبها</ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-label>تاريخ الطلب</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          class=\"details-row\"\n          *ngFor=\"let app of this.pagingService.Paging(\n        this.selectedClientApplications,\n        this.ApplicationPage\n      ); let i = index\"\n        >\n          <ion-col size=\"1\">\n            <ion-checkbox\n              *ngIf=\"!isRiskReport\"\n              type=\"checkbox\"\n              (ionChange)=\"onCheckboxChange($event, app.applicationKey , i)\"\n              [checked]=\"app.isChecked\"\n            ></ion-checkbox>\n            <ion-button\n              *ngIf=\"isRiskReport\"\n              (click)=\"ReportApplicationRisk(app.applicationKey)\"\n              fill=\"clear\"\n              class=\"Settings-Btn\"\n            >\n              <ion-icon name=\"document-text\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col size=\"2\">\n            <ion-label>{{app.applicationCode}}</ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-label>{{app.requestInstallmentAmount}}</ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-label>{{app.approvedInstallmentAmount}}</ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-label>{{convertStringToDate(app.entryDate)}}</ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <app-pagination\n      [page]=\"ApplicationPage\"\n      [collectionSize]=\"selectedClientApplications?.length\"\n      (pageChange)=\"changePaginationPage($event);\"\n    ></app-pagination>\n  </ion-card-content>\n  <ion-card-content\n    style=\"text-align: center\"\n    *ngIf=\"this.selectedClientApplications.length==0\"\n  >\n    <ion-label>لا يوجد طلبات قروض لدي العميل</ion-label>\n  </ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_reports_client-report_client-report_module_ts.js.map