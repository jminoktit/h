"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_loan-items_loan-items_module_ts"],{

/***/ 41858:
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-items/loan-items-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanItemsPageRoutingModule": function() { return /* binding */ LoanItemsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_items_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-items.page */ 82853);






var routes = [{
  path: '',
  component: _loan_items_page__WEBPACK_IMPORTED_MODULE_2__.LoanItemsPage
}];

var LoanItemsPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanItemsPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanItemsPageRoutingModule);
});

LoanItemsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoanItemsPageRoutingModule);


/***/ }),

/***/ 99379:
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-items/loan-items.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanItemsPageModule": function() { return /* binding */ LoanItemsPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_items_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-items-routing.module */ 41858);
/* harmony import */ var _loan_items_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-items.page */ 82853);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);












var LoanItemsPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanItemsPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanItemsPageModule);
});

LoanItemsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _loan_items_routing_module__WEBPACK_IMPORTED_MODULE_2__.LoanItemsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_loan_items_page__WEBPACK_IMPORTED_MODULE_3__.LoanItemsPage]
})], LoanItemsPageModule);


/***/ }),

/***/ 82853:
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-items/loan-items.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanItemsPage": function() { return /* binding */ LoanItemsPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _loan_items_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-items.page.html?ngResource */ 99069);
/* harmony import */ var _loan_items_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-items.page.scss?ngResource */ 63528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/pdf-viewer.service */ 37801);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_core_util_atobSafe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/util/atobSafe */ 82817);




















var LoanItemsPage = /*#__PURE__*/function () {
  function LoanItemsPage(formBuilder, pagingService, sortingService, LoansService, env, http, authService, alertService, pdfViewerService) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoanItemsPage);

    this.formBuilder = formBuilder;
    this.pagingService = pagingService;
    this.sortingService = sortingService;
    this.LoansService = LoansService;
    this.env = env;
    this.http = http;
    this.authService = authService;
    this.alertService = alertService;
    this.pdfViewerService = pdfViewerService; // LOAN-ITEMS

    this.VendorForUsers = []; //region VARIABLES

    this.showLoader = false;
    this.isParametersFormValid = false;
    this.showDataGrid = false;
    this.consumerLoansListResponsModel = [];
    this.consumerLoanItemsResponsModel = [];
    this.selectedLoanRowIndex = -1;
    this.selectedItemRowIndex = -1;
    this.sortingIconClass = "arrow-down-outline";
    this.showReportButton = false;
    this.isModalOpen = false; //region FORMS

    this.parametersForm = this.formBuilder.group({
      vendor_code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
      loan_date_start: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern("((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])"), this.noDateGreaterToday]],
      loan_date_end: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.pattern("((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])"), this.noDateGreaterToday]],
      rep_flag: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]
    }); // LOAN-ITEMS

    this.changePaginationPage = function (newPage) {
      _this.pagingObject.page = newPage;
      _this.selectedLoanRowIndex = -1;
      _this.selectedItemRowIndex = -1;
    };
  } //End region


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoanItemsPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.pagingObject = {
                  pageSize: this.pagingService.getPageSizeFromLocalStorage(),
                  page: 1
                };
                this.authService.getUserInfo().then(function (userInfo) {
                  _this2.org_code_user_info = userInfo.org_code;
                  _this2.user_name = userInfo.user_name;

                  _this2.getVendorsForUser(userInfo.user_name);
                });
                this.reportsLabels = [{
                  key: 1,
                  value: "سلع القروض الاستهلاكية للعملاء"
                }];

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "GetParametersForm",
    get: function get() {
      return this.parametersForm.controls;
    } //region FORM VALIDATION
    // LOAN-ITEMS
    // DONE

  }, {
    key: "noDateGreaterToday",
    value: function noDateGreaterToday(control) {
      var isDateGrater = new Date(control.value);
      var currentDate = new Date();

      if (isDateGrater > currentDate) {
        return {
          DateIsGrater: true
        };
      }
    } //region FORM TOOLS
    // LOAN-ITEMS
    // DONE

  }, {
    key: "clear",
    value: function clear() {
      this.consumerLoansListResponsModel = [];
      this.selectedVendors = "";
      this.showReportButton = false;
      this.pagingObject.page = 1;
      this.showDataGrid = false;
      this.selectedLoanRowIndex = -1;
      this.selectedItemRowIndex = -1;
      this.application_keys = "";
      this.application_keys_for_csv = [];
    } // LOAN-ITEMS
    // DONE

  }, {
    key: "selectLoanGridRow",
    value: function selectLoanGridRow(index) {
      this.selectedLoanRowIndex = index;
    } // LOAN-ITEMS
    // DONE

  }, {
    key: "selectItemGridRow",
    value: function selectItemGridRow(index) {
      this.selectedItemRowIndex = index;
    } // LOAN-ITEMS
    // DONE

  }, {
    key: "getRowClassesItemsGrid",
    value: function getRowClassesItemsGrid(index) {
      var isSelected = this.selectedItemRowIndex === index;
      if (isSelected) return ["highlighted-row"];
      return [];
    } // LOAN-ITEMS
    // DONE

  }, {
    key: "getRowClassesLoansGrid",
    value: function getRowClassesLoansGrid(index) {
      var isSelected = this.selectedLoanRowIndex === index;
      if (isSelected) return ["highlighted-row"];
      return [];
    } // LOAN-ITEMS
    // DONE

  }, {
    key: "sortingTable",
    value: function sortingTable(data, param) {
      this.sortingService.sortByParameter(data, param);
      this.sortingIconClass = this.sortingService.sortOrder === "asc" ? "arrow-down-outline" : "arrow-up-outline";
      this.sortingIconParam = param;
    } // region DATA GETTERS
    // LONA-ITEMS
    // DONE

  }, {
    key: "getConsumerLoansList",
    value: function getConsumerLoansList() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.isParametersFormValid = true;

                if (!(this.parametersForm.controls.loan_date_end.value < this.parametersForm.controls.loan_date_start.value)) {
                  _context2.next = 5;
                  break;
                }

                this.alertService.showAlertError("لا يمكن اختيار تاريخ النهاية اصغر من تاريخ البداية", null);
                _context2.next = 15;
                break;

              case 5:
                if (!this.parametersForm.valid) {
                  _context2.next = 15;
                  break;
                }

                this.showLoader = true;
                this.clear();
                _context2.next = 10;
                return this.LoansService.getConsumerLoans(this.parametersForm.controls.vendor_code.value, this.parametersForm.controls.loan_date_start.value, this.parametersForm.controls.loan_date_end.value, this.parametersForm.controls.rep_flag.value);

              case 10:
                this.consumerLoansListResponsModel = _context2.sent;
                this.collectParamsStrings();
                this.application_keys_for_csv = this.consumerLoansListResponsModel.map(function (key) {
                  return key.application_key;
                });

                if (this.consumerLoansListResponsModel.length != 0) {
                  this.showDataGrid = true;
                  this.showReportButton = true;
                } else {
                  this.alertService.showAlertError("لا يوجد نتيجة بناء على الخصائص المختارة", null);
                  this.showReportButton = false;
                }

                this.showLoader = false;

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    } // LONA-ITEMS
    // DONE

  }, {
    key: "getLoanItems",
    value: function getLoanItems(application_key) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!application_key) {
                  _context3.next = 7;
                  break;
                }

                this.showLoader = true;
                _context3.next = 4;
                return this.LoansService.getConsumerLoanItems(application_key);

              case 4:
                this.consumerLoanItemsResponsModel = _context3.sent;
                this.showLoader = false;
                this.setOpen(true);

              case 7:
                // PATCH DATA FOR ITEMS MODAL
                this.client_name = this.consumerLoanItemsResponsModel[0]["client_name"];
                this.nation_id = this.consumerLoanItemsResponsModel[0]["nation_id"];
                this.client_gender_desc = this.consumerLoanItemsResponsModel[0]["client_gender_desc"];
                this.client_status_desc = this.consumerLoanItemsResponsModel[0]["client_status_desc"];
                this.vendor_name = this.consumerLoanItemsResponsModel[0]["vendor_name"];
                this.vendor_br_name = this.consumerLoanItemsResponsModel[0]["vendor_br_name"];
                this.items_counter = this.consumerLoanItemsResponsModel.length;
                this.loan_type_name = this.consumerLoanItemsResponsModel[0]["loan_type_name"];
                this.loan_date = this.consumerLoanItemsResponsModel[0]["loan_date"];
                this.loan_am = this.consumerLoanItemsResponsModel[0]["loan_am"];
                this.loan_int_rt = this.consumerLoanItemsResponsModel[0]["loan_int_rt"];
                this.loan_items_grand_total_price = this.consumerLoanItemsResponsModel[0]["loan_items_grand_total_price"];
                this.full_loan_code = this.consumerLoanItemsResponsModel[0]["loan_code"] + " / " + this.consumerLoanItemsResponsModel[0]["client_code"] + " / " + this.consumerLoanItemsResponsModel[0]["org_branch_code"];
                this.loan_status_desc = this.consumerLoanItemsResponsModel[0]["loan_status_desc"];

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    } //region FORM ACTIONS
    // LOAN-ITEMS
    // DONE

  }, {
    key: "collectParamsStrings",
    value: function collectParamsStrings() {
      this.selectedVendors = this.parametersForm.controls.vendor_code.value.join(",");
      this.application_keys = this.consumerLoansListResponsModel.map(function (loan) {
        return [loan.application_key];
      }).join(",");
    } //region GET REPORT
    // DONE

  }, {
    key: "b64DecodeUnicode",
    value: function b64DecodeUnicode(str) {
      return decodeURIComponent((0,src_app_core_util_atobSafe__WEBPACK_IMPORTED_MODULE_13__.atobSafe)(str).split("").map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(""));
    } // LOAN-ITEMS
    // DONE

  }, {
    key: "GetConsumerLoansItemsCSV",
    value: function GetConsumerLoansItemsCSV() {
      var _this3 = this;

      this.showLoader = true;
      this.http.post(this.env.API_URL + "api/Loan/GetConsumerLoanItemsForCSV", {
        application_keys: this.application_keys_for_csv
      }, {
        responseType: "blob"
      }).subscribe({
        next: function next(response) {
          var currentDate = new Date();
          var dateString = currentDate.toLocaleDateString("en-US");
          var timeString = currentDate.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: false
          });
          var formattedDateTime = "".concat(dateString, " ").concat(timeString);
          var filename = formattedDateTime + " " + "ConsumerLoansItemsDetails.csv";
          var options = {
            autoBom: false
          };
          _this3.showLoader = false;
          (0,file_saver__WEBPACK_IMPORTED_MODULE_12__.saveAs)(response, filename, options);
          _this3.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
        }
      });
    } // LOAN-ITEMS
    // DONE

  }, {
    key: "getReport",
    value: function getReport(Report) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        var _this4 = this;

        var ReportValue, reportName, reportParameter, token, claims, username, pwd;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                ReportValue = Report;

                if (!(ReportValue == "" || !!!ReportValue)) {
                  _context6.next = 5;
                  break;
                }

                this.alertService.showAlertError("يجب اختيار نوع تقرير", false, "موافق");
                _context6.next = 22;
                break;

              case 5:
                reportParameter = [];
                _context6.t0 = ReportValue;
                _context6.next = _context6.t0 === "1" ? 9 : 11;
                break;

              case 9:
                if (this.application_keys.length != 0) {
                  if (this.sortingIconParam == undefined) {
                    this.sortingIconParam = "row_num";
                  }

                  reportName = "consumer_get_loan_items_report";
                  reportParameter = [{
                    key: "@application_keys",
                    value: this.application_keys
                  }];
                } else {
                  this.alertService.showAlertError("يجب اختيار طلبات قروض للعرض", false);
                }

                return _context6.abrupt("break", 11);

              case 11:
                _context6.next = 13;
                return this.authService.getAccessToken();

              case 13:
                token = _context6.sent;
                token = token.replace("-", "+").replace("_", "/");
                claims = JSON.parse((0,src_app_core_util_atobSafe__WEBPACK_IMPORTED_MODULE_13__.atobSafe)(token.split(".")[1]));
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
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              this.showLoader = false;

                              if (!(data.status_code == 200)) {
                                _context4.next = 5;
                                break;
                              }

                              this.showClientReportPdf(data.report, null);
                              _context4.next = 7;
                              break;

                            case 5:
                              _context4.next = 7;
                              return this.alertService.showAlertError(data.message, false);

                            case 7:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4, this);
                    }));
                  },
                  error: function error(err) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              _context5.next = 2;
                              return this.alertService.showAlertError(err.error, false);

                            case 2:
                              this.showLoader = false;

                            case 3:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5, this);
                    }));
                  }
                });

              case 22:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "showClientReportPdf",
    value: function showClientReportPdf(pdfBase64, client_name) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        var reportlabel;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (this.pdfViewerService.canViewPdf()) {
                  _context7.next = 4;
                  break;
                }

                _context7.next = 3;
                return this.alertService.showAlertError("لا يمكن عرض أو تنزيل المستند على المتصفح الحالي", false);

              case 3:
                return _context7.abrupt("return");

              case 4:
                reportlabel = this.reportsLabels.find(function (x) {
                  return x.key == 1;
                } //this.ReportForm.controls.reportValue.value
                ).value;
                _context7.next = 7;
                return this.pdfViewerService.viewPdf(pdfBase64, "\u062A\u0642\u0631\u064A\u0631 ".concat({
                  reportlabel: reportlabel
                }, " - ").concat({
                  client_name: client_name
                }, ".pdf"), reportlabel);

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    } //region ITEMS MODAL
    // LOAN-ITEMS
    // DONE

  }, {
    key: "setOpen",
    value: function setOpen(isOpen) {
      this.isModalOpen = isOpen;
      this.clearItemsModal();
    } // LOAN-ITEMS
    // DONE

  }, {
    key: "clearItemsModal",
    value: function clearItemsModal() {
      if (this.isModalOpen == false) {
        this.client_name = "";
        this.nation_id = "";
        this.client_gender_desc = "";
        this.client_status_desc = "";
        this.consumerLoanItemsResponsModel = [];
        this.selectedItemRowIndex = -1;
      }
    } // LOAN-ITEMS
    // DONE

  }, {
    key: "getVendorsForUser",
    value: function getVendorsForUser(user) {
      var _this5 = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/Settings/GetVendorsByUser?user_name=".concat(user)).subscribe({
        next: function next(data) {
          _this5.VendorForUsers = data;
          _this5.showLoader = false;
        },
        error: function error(err) {
          _this5.showLoader = false;
        }
      });
    }
  }]);

  return LoanItemsPage;
}();

LoanItemsPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_5__.pagingService
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_6__.sortingService
  }, {
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_11__.LoansService
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_7__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_8__.MohassilAuthService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_9__.AlertService
  }, {
    type: src_app_core_services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_10__.PdfViewerService
  }];
};

LoanItemsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: "app-loan-items",
  template: _loan_items_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.trigger)("slideFadeIn", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.style)({
    transform: "translateY(-20px)",
    opacity: 0
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.animate)("300ms ease-out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.style)({
    transform: "translateY(0)",
    opacity: 1
  }) // 👈 Move to position
  )]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.transition)(":leave", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.animate)("200ms ease-in", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.style)({
    transform: "translateY(-20px)",
    opacity: 0
  }) // 👈 Move back up
  )])])],
  styles: [_loan_items_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], LoanItemsPage);


/***/ }),

/***/ 63528:
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-items/loan-items.page.scss?ngResource ***!
  \******************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.paddingTop30px {\n  padding-top: 30px;\n}\n\n.sms-grid .sms-row {\n  background: #cdcfd6;\n  border: 1px solid #aeb7ca;\n}\n\n.sms-grid ion-row {\n  border: 1px solid #aeb7ca;\n  border-bottom: 1px solid #aeb7ca;\n}\n\n.late-selected {\n  background: linear-gradient(90deg, rgba(36, 0, 0, 0.446) 0%, rgba(104, 1, 1, 0.581) 100%);\n}\n\n.late-date {\n  background: linear-gradient(90deg, rgba(36, 0, 0, 0.2) 0%, rgba(180, 0, 0, 0.5) 100%);\n}\n\n.highlighted-row {\n  background-color: rgba(128, 128, 128, 0.434);\n}\n\n.ClickableIcon {\n  cursor: pointer;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.floating-note-wrapper {\n  position: relative;\n  overflow: visible;\n  line-height: inherit !important;\n  transform: perspective(1500px) translate3d(0px, 0px, -150px) scale(0.9, 0.9);\n  transition: 0.4s ease-in-out transform;\n  cursor: pointer;\n}\n\n.floating-note-wrapper:hover {\n  transform: translate3d(0px, 0px, -250px);\n  z-index: 15;\n}\n\n.floating-note {\n  position: absolute;\n  top: -15px;\n  left: 0;\n  background-color: rgba(128, 128, 128, 0.434);\n  padding: 1px 3px;\n  border-radius: 5px;\n  border: 0.5px;\n  border-style: dotted;\n  border-color: #00000033;\n  font-size: 12px;\n  font-weight: bold;\n  white-space: nowrap;\n  -webkit-animation: floatNote 1.5s ease-in-out infinite alternate;\n          animation: floatNote 1.5s ease-in-out infinite alternate;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);\n  z-index: 10;\n  transition-duration: 0.4s;\n  /* Arrow on the left now */\n}\n\n.floating-note::after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: -8px;\n  -ms-transform: translateY(-50%);\n      transform: translateY(-50%);\n  width: 0;\n  height: 0;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  border-right: 8px solid rgba(128, 128, 128, 0.434);\n}\n\n.floating-note:hover {\n  background-color: #1e9ea5 !important;\n  color: white;\n}\n\n.floating-note:hover::after {\n  border-color: transparent #1e9ea5 transparent transparent;\n}\n\n@-webkit-keyframes floatNote {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(5px);\n  }\n}\n\n@keyframes floatNote {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(5px);\n  }\n}\n\n.scrollHandler {\n  overflow-x: visible !important;\n}\n\n.gridButton {\n  color: #1e9ea5 !important;\n  width: 30px !important;\n  height: 30px !important;\n  cursor: pointer;\n  transition: background-color 0.3s ease, transform 0.1s ease;\n}\n\n.ionic-icon-button {\n  --color: var(--ion-color-primary);\n  font-size: 24px;\n  padding: 8px;\n  border-radius: 50%;\n  transition: background-color 0.3s ease, transform 0.1s ease;\n  color: #1e9ea5 !important;\n  -ms-transform: rotate(90deg) !important;\n      transform: rotate(90deg) !important;\n  width: 30px !important;\n  height: 30px !important;\n}\n\n.ionic-icon-button:hover {\n  background-color: var(--ion-color-primary-tint);\n  cursor: pointer;\n}\n\n.ionic-icon-button:active {\n  background-color: var(--ion-color-primary-shade);\n  -ms-transform: scale(0.95);\n      transform: scale(0.95);\n}\n\n.fullscreen {\n  --width: 95% !important;\n  --height: 95% !important;\n}\n\n.ionSize {\n  width: 20px;\n  height: 20px;\n  padding-top: 5px;\n}\n\n.infoFieldBorder {\n  justify-items: anchor-center;\n  border-radius: 5px;\n  border: 1px;\n  border-color: #1e9ea5 92, 92, 92;\n  border-style: solid;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  width: auto;\n  min-height: 30px;\n  height: auto;\n  margin-left: 1px;\n  margin-right: 1px;\n  margin-top: 1px;\n  margin-bottom: 1px;\n  text-align: right;\n  color: rgba(255, 255, 255, 0.245);\n  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 1px 2px 0px;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  padding: 0px 10px 0px 10px;\n}\n\n.late-selected {\n  background: linear-gradient(90deg, rgba(36, 0, 0, 0.446) 0%, rgba(104, 1, 1, 0.581) 100%);\n}\n\n.late-date {\n  background: linear-gradient(90deg, rgba(36, 0, 0, 0.2) 0%, rgba(180, 0, 0, 0.5) 100%);\n}\n\n.highlighted-row {\n  background-color: rgba(128, 128, 128, 0.434);\n}\n\n.floating-note-wrapperTOW {\n  position: relative;\n  overflow: visible;\n  line-height: inherit !important;\n  transform: perspective(1500px) translate3d(0px, 0px, -150px) scale(0.9, 0.9);\n  transition: 0.4s ease-in-out transform;\n  cursor: pointer;\n}\n\n.floating-note-wrapperTOW:hover {\n  transform: translate3d(0px, 0px, -250px);\n  z-index: 15;\n}\n\n.floating-noteTOW {\n  position: absolute;\n  top: -15px;\n  right: 0;\n  padding: 5px 3px;\n  font-size: 20px;\n  font-weight: bold;\n  white-space: nowrap;\n  -webkit-animation: floatNoteTOW 1.5s ease-in-out infinite alternate;\n          animation: floatNoteTOW 1.5s ease-in-out infinite alternate;\n  z-index: 10;\n  transition-duration: 0.4s;\n}\n\n@-webkit-keyframes floatNoteTOW {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-5px);\n  }\n}\n\n@keyframes floatNoteTOW {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-5px);\n  }\n}\n\n.warningShadow {\n  justify-items: anchor-center;\n  border-radius: 5px;\n  border: 1px;\n  border-color: #1e9ea5 92, 92, 92;\n  border-style: solid;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  width: auto;\n  min-height: 30px;\n  height: auto;\n  margin-left: 1px;\n  margin-right: 1px;\n  margin-top: 1px;\n  margin-bottom: 1px;\n  text-align: right;\n  color: rgba(136, 132, 132, 0.329);\n  -moz-text-align-last: center;\n       text-align-last: center;\n  box-shadow: 0px 0px 8px 2px rgba(255, 0, 0, 0.35);\n  -webkit-box-shadow: 0px 0px 8px 2px rgba(255, 0, 0, 0.35);\n  -moz-box-shadow: 0px 0px 8px 2px rgba(255, 0, 0, 0.35);\n}\n\n.paddLeft {\n  padding-left: 5px;\n}\n\n.buttonIcon {\n  width: 30px !important;\n  height: 30px !important;\n}\n\n.totals-row {\n  -ms-flex-align: center;\n      align-items: center;\n  border: 1px solid var(--ion-grid-border);\n  border-bottom: 1px solid var(--ion-grid-border);\n  text-align: center !important;\n  background: var(--ion-grid-header);\n  border-bottom-left-radius: 10px !important;\n  border-bottom-right-radius: 10px !important;\n}\n\n.side-details-col {\n  -ms-flex-align: center;\n      align-items: center;\n  border: 1px solid var(--ion-grid-border);\n  border-bottom: 1px solid var(--ion-grid-border);\n  text-align: center !important;\n}\n\n.grid-label {\n  display: inline-block;\n  vertical-align: top;\n  color: var(--body-color);\n}\n\n.grid-inside-row {\n  background: var(--ion-grid-header);\n  -ms-flex-align: center;\n      align-items: center;\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4taXRlbXMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcbG9hbnNcXGxvYW4taXRlbXNcXGxvYW4taXRlbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQUo7O0FESUE7RUFDRSxpQkFBQTtBQ0RGOztBREtFO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQ0ZKOztBREtFO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtBQ0hKOztBRE9BO0VBQ0UseUZBQUE7QUNKRjs7QURXQTtFQUNFLHFGQUFBO0FDUkY7O0FEZUE7RUFDRSw0Q0FBQTtBQ1pGOztBRGVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNaRjs7QURlQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLDRFQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0FDWkY7O0FEYUU7RUFDRSx3Q0FBQTtFQUNBLFdBQUE7QUNYSjs7QUQrREE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdFQUFBO1VBQUEsd0RBQUE7RUFDQSx5Q0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUVBLDBCQUFBO0FDN0RGOztBRDhERTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7TUFBQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLGtEQUFBO0FDNURKOztBRCtERTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQzdESjs7QUQ4REk7RUFDRSx5REFBQTtBQzVETjs7QURpRUE7RUFDRTtJQUNFLHdCQUFBO0VDOURGO0VEZ0VBO0lBQ0UsMEJBQUE7RUM5REY7QUFDRjs7QUR3REE7RUFDRTtJQUNFLHdCQUFBO0VDOURGO0VEZ0VBO0lBQ0UsMEJBQUE7RUM5REY7QUFDRjs7QURpRUE7RUFDRSw4QkFBQTtBQy9ERjs7QURrRUE7RUFDRSx5QkFBQTtFQUVBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkRBQUE7QUNoRUY7O0FEbUVBO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkRBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO01BQUEsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDaEVGOztBRGlFRTtFQUNFLCtDQUFBO0VBQ0EsZUFBQTtBQy9ESjs7QURrRUU7RUFDRSxnREFBQTtFQUNBLDBCQUFBO01BQUEsc0JBQUE7QUNoRUo7O0FEb0VBO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQ2pFRjs7QURvRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDakVGOztBRG1FQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO01BQUEscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwRkFBQTtFQUVBLDRCQUFBO09BQUEsdUJBQUE7RUFDQSwwQkFBQTtBQ2pFRjs7QURvRUE7RUFDRSx5RkFBQTtBQ2pFRjs7QUR3RUE7RUFDRSxxRkFBQTtBQ3JFRjs7QUQ0RUE7RUFDRSw0Q0FBQTtBQ3pFRjs7QUQ0RUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0RUFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtBQ3pFRjs7QUQwRUU7RUFDRSx3Q0FBQTtFQUNBLFdBQUE7QUN4RUo7O0FENEVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtRUFBQTtVQUFBLDJEQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDekVGOztBRDRFQTtFQUNFO0lBQ0Usd0JBQUE7RUN6RUY7RUQyRUE7SUFDRSwyQkFBQTtFQ3pFRjtBQUNGOztBRG1FQTtFQUNFO0lBQ0Usd0JBQUE7RUN6RUY7RUQyRUE7SUFDRSwyQkFBQTtFQ3pFRjtBQUNGOztBRDRFQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO01BQUEscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtPQUFBLHVCQUFBO0VBQ0EsaURBQUE7RUFDQSx5REFBQTtFQUNBLHNEQUFBO0FDMUVGOztBRDZFQTtFQUNFLGlCQUFBO0FDMUVGOztBRDZFQTtFQUdFLHNCQUFBO0VBQ0EsdUJBQUE7QUM1RUY7O0FEaUZBO0VBQ0Usc0JBQUE7TUFBQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsK0NBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtBQzlFRjs7QURpRkE7RUFDRSxzQkFBQTtNQUFBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQ0FBQTtFQUNBLDZCQUFBO0FDOUVGOztBRGlGQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQzlFRjs7QURpRkE7RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7RUFDQSw2QkFBQTtBQzlFRiIsImZpbGUiOiJsb2FuLWl0ZW1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWxhYmVsLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnBhZGRpbmdUb3AzMHB4IHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLnNtcy1ncmlkIHtcclxuICAuc21zLXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjY2RjZmQ2O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FlYjdjYTtcclxuICB9XHJcblxyXG4gIGlvbi1yb3cge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2FlYjdjYTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYWViN2NhO1xyXG4gIH1cclxufVxyXG5cclxuLmxhdGUtc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDkwZGVnLFxyXG4gICAgcmdiYSgzNiwgMCwgMCwgMC40NDYpIDAlLFxyXG4gICAgcmdiYSgxMDQsIDEsIDEsIDAuNTgxKSAxMDAlXHJcbiAgKTtcclxufVxyXG5cclxuLmxhdGUtZGF0ZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgOTBkZWcsXHJcbiAgICByZ2JhKDM2LCAwLCAwLCAwLjIpIDAlLFxyXG4gICAgcmdiYSgxODAsIDAsIDAsIDAuNSkgMTAwJVxyXG4gICk7XHJcbn1cclxuXHJcbi5oaWdobGlnaHRlZC1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MzQpO1xyXG59XHJcblxyXG4uQ2xpY2thYmxlSWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5mbG9hdGluZy1ub3RlLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBsaW5lLWhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTUwMHB4KSB0cmFuc2xhdGUzZCgwcHgsIDBweCwgLTE1MHB4KSBzY2FsZSgwLjksIDAuOSk7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dCB0cmFuc2Zvcm07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgLTI1MHB4KTtcclxuICAgIHotaW5kZXg6IDE1O1xyXG4gIH1cclxufVxyXG5cclxuLy8gLmZsb2F0aW5nLW5vdGUge1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IC0xNXB4O1xyXG4vLyAgIHJpZ2h0OiAwO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MzQpO1xyXG4vLyAgIHBhZGRpbmc6IDFweCAzcHg7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgIGJvcmRlcjogMC41cHg7XHJcbi8vICAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwMzM7XHJcbi8vICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4vLyAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbi8vICAgYW5pbWF0aW9uOiBmbG9hdE5vdGUgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbi8vICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbi8vICAgei1pbmRleDogMTA7XHJcbi8vICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuLy8gICAvKiBBcnJvdyBvbiB0aGUgcmlnaHQgKi9cclxuLy8gICAmOjphZnRlciB7XHJcbi8vICAgICBjb250ZW50OiBcIlwiO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdG9wOiA1MCU7XHJcbi8vICAgICByaWdodDogLThweDtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuLy8gICAgIHdpZHRoOiAwO1xyXG4vLyAgICAgaGVpZ2h0OiAwO1xyXG4vLyAgICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4vLyAgICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDM0KTtcclxuLy8gICB9XHJcbi8vICAgJjpob3ZlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU5ZWE1ICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICAmOjphZnRlciB7XHJcbi8vICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzFlOWVhNTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIEBrZXlmcmFtZXMgZmxvYXROb3RlIHtcclxuLy8gICAwJSB7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbi8vICAgfVxyXG4vLyAgIDEwMCUge1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLmZsb2F0aW5nLW5vdGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xNXB4O1xyXG4gIGxlZnQ6IDA7IC8vIENoYW5nZWQgZnJvbSByaWdodDogMFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MzQpO1xyXG4gIHBhZGRpbmc6IDFweCAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMC41cHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwMzM7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgYW5pbWF0aW9uOiBmbG9hdE5vdGUgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuXHJcbiAgLyogQXJyb3cgb24gdGhlIGxlZnQgbm93ICovXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogLThweDsgLy8gQ2hhbmdlZCBmcm9tIHJpZ2h0XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogOHB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MzQpOyAvLyBDaGFuZ2VkIGZyb20gYm9yZGVyLWxlZnRcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlOWVhNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMxZTllYTUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7IC8vIEFkanVzdGVkIGZvciBsZWZ0IGFycm93XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsb2F0Tm90ZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpOyAvLyBPcHBvc2l0ZSBkaXJlY3Rpb24gaWYgbmVlZGVkXHJcbiAgfVxyXG59XHJcblxyXG4uc2Nyb2xsSGFuZGxlciB7XHJcbiAgb3ZlcmZsb3cteDogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ3JpZEJ1dHRvbiB7XHJcbiAgY29sb3I6ICMxZTllYTUgIWltcG9ydGFudDtcclxuICAvL3RyYW5zZm9ybTogcm90YXRlKDkwZGVnKSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xyXG59XHJcblxyXG4uaW9uaWMtaWNvbi1idXR0b24ge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuMXMgZWFzZTtcclxuICBjb2xvcjogIzFlOWVhNSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgfVxyXG59XHJcblxyXG4uZnVsbHNjcmVlbiB7XHJcbiAgLS13aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgLS1oZWlnaHQ6IDk1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW9uU2l6ZSB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuLmluZm9GaWVsZEJvcmRlciB7XHJcbiAganVzdGlmeS1pdGVtczogYW5jaG9yLWNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMWU5ZWE1KDkyLCA5MiwgOTIpO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0NSk7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgxNCwgMzAsIDM3LCAwLjEyKSAwcHggMnB4IDRweCAwcHgsXHJcbiAgICByZ2JhKDE0LCAzMCwgMzcsIDAuMzIpIDBweCAxcHggMnB4IDBweDtcclxuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcclxufVxyXG5cclxuLmxhdGUtc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDkwZGVnLFxyXG4gICAgcmdiYSgzNiwgMCwgMCwgMC40NDYpIDAlLFxyXG4gICAgcmdiYSgxMDQsIDEsIDEsIDAuNTgxKSAxMDAlXHJcbiAgKTtcclxufVxyXG5cclxuLmxhdGUtZGF0ZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgOTBkZWcsXHJcbiAgICByZ2JhKDM2LCAwLCAwLCAwLjIpIDAlLFxyXG4gICAgcmdiYSgxODAsIDAsIDAsIDAuNSkgMTAwJVxyXG4gICk7XHJcbn1cclxuXHJcbi5oaWdobGlnaHRlZC1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MzQpO1xyXG59XHJcblxyXG4uZmxvYXRpbmctbm90ZS13cmFwcGVyVE9XIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE1MDBweCkgdHJhbnNsYXRlM2QoMHB4LCAwcHgsIC0xNTBweCkgc2NhbGUoMC45LCAwLjkpO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQgdHJhbnNmb3JtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIC0yNTBweCk7XHJcbiAgICB6LWluZGV4OiAxNTtcclxuICB9XHJcbn1cclxuXHJcbi5mbG9hdGluZy1ub3RlVE9XIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTVweDtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nOiA1cHggM3B4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGFuaW1hdGlvbjogZmxvYXROb3RlVE9XIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmxvYXROb3RlVE9XIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gIH1cclxufVxyXG5cclxuLndhcm5pbmdTaGFkb3cge1xyXG4gIGp1c3RpZnktaXRlbXM6IGFuY2hvci1jZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogIzFlOWVhNSg5MiwgOTIsIDkyKTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogYXV0bztcclxuICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMXB4O1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6IHJnYmEoMTM2LCAxMzIsIDEzMiwgMC4zMjkpO1xyXG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDI1NSwgMCwgMCwgMC4zNSk7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggcmdiYSgyNTUsIDAsIDAsIDAuMzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4IHJnYmEoMjU1LCAwLCAwLCAwLjM1KTtcclxufVxyXG5cclxuLnBhZGRMZWZ0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbkljb24ge1xyXG4gIC8vY29sb3I6ICMxZTllYTUgIWltcG9ydGFudDtcclxuICAvL3RyYW5zZm9ybTogcm90YXRlKDkwZGVnKSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy9jdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy90cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuMXMgZWFzZTtcclxufVxyXG5cclxuLnRvdGFscy1yb3cge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWdyaWQtYm9yZGVyKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWdyaWQtYm9yZGVyKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ3JpZC1oZWFkZXIpO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2lkZS1kZXRhaWxzLWNvbCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tZ3JpZC1ib3JkZXIpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tZ3JpZC1ib3JkZXIpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZ3JpZC1sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xyXG59XHJcblxyXG4uZ3JpZC1pbnNpZGUtcm93IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ3JpZC1oZWFkZXIpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLmZvcm0tbGFiZWwtcmVxdWlyZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCIqXCI7XG4gIGNvbG9yOiAjZmYzMzY2ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWRkaW5nVG9wMzBweCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uc21zLWdyaWQgLnNtcy1yb3cge1xuICBiYWNrZ3JvdW5kOiAjY2RjZmQ2O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWViN2NhO1xufVxuLnNtcy1ncmlkIGlvbi1yb3cge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWViN2NhO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2FlYjdjYTtcbn1cblxuLmxhdGUtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMzYsIDAsIDAsIDAuNDQ2KSAwJSwgcmdiYSgxMDQsIDEsIDEsIDAuNTgxKSAxMDAlKTtcbn1cblxuLmxhdGUtZGF0ZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgzNiwgMCwgMCwgMC4yKSAwJSwgcmdiYSgxODAsIDAsIDAsIDAuNSkgMTAwJSk7XG59XG5cbi5oaWdobGlnaHRlZC1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDM0KTtcbn1cblxuLkNsaWNrYWJsZUljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uZmxvYXRpbmctbm90ZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxNTAwcHgpIHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAtMTUwcHgpIHNjYWxlKDAuOSwgMC45KTtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dCB0cmFuc2Zvcm07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mbG9hdGluZy1ub3RlLXdyYXBwZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAtMjUwcHgpO1xuICB6LWluZGV4OiAxNTtcbn1cblxuLmZsb2F0aW5nLW5vdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE1cHg7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MzQpO1xuICBwYWRkaW5nOiAxcHggM3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMC41cHg7XG4gIGJvcmRlci1zdHlsZTogZG90dGVkO1xuICBib3JkZXItY29sb3I6ICMwMDAwMDAzMztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYW5pbWF0aW9uOiBmbG9hdE5vdGUgMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB6LWluZGV4OiAxMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgLyogQXJyb3cgb24gdGhlIGxlZnQgbm93ICovXG59XG4uZmxvYXRpbmctbm90ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAtOHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDM0KTtcbn1cbi5mbG9hdGluZy1ub3RlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlOWVhNSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4uZmxvYXRpbmctbm90ZTpob3Zlcjo6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMxZTllYTUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbkBrZXlmcmFtZXMgZmxvYXROb3RlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcbiAgfVxufVxuLnNjcm9sbEhhbmRsZXIge1xuICBvdmVyZmxvdy14OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG5cbi5ncmlkQnV0dG9uIHtcbiAgY29sb3I6ICMxZTllYTUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIGVhc2U7XG59XG5cbi5pb25pYy1pY29uLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjFzIGVhc2U7XG4gIGNvbG9yOiAjMWU5ZWE1ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSAhaW1wb3J0YW50O1xuICB3aWR0aDogMzBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cbi5pb25pYy1pY29uLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW9uaWMtaWNvbi1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG4uZnVsbHNjcmVlbiB7XG4gIC0td2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogOTUlICFpbXBvcnRhbnQ7XG59XG5cbi5pb25TaXplIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmluZm9GaWVsZEJvcmRlciB7XG4gIGp1c3RpZnktaXRlbXM6IGFuY2hvci1jZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogIzFlOWVhNSA5MiwgOTIsIDkyO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQ1KTtcbiAgYm94LXNoYWRvdzogcmdiYSgxNCwgMzAsIDM3LCAwLjEyKSAwcHggMnB4IDRweCAwcHgsIHJnYmEoMTQsIDMwLCAzNywgMC4zMikgMHB4IDFweCAycHggMHB4O1xuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG59XG5cbi5sYXRlLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDM2LCAwLCAwLCAwLjQ0NikgMCUsIHJnYmEoMTA0LCAxLCAxLCAwLjU4MSkgMTAwJSk7XG59XG5cbi5sYXRlLWRhdGUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMzYsIDAsIDAsIDAuMikgMCUsIHJnYmEoMTgwLCAwLCAwLCAwLjUpIDEwMCUpO1xufVxuXG4uaGlnaGxpZ2h0ZWQtcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQzNCk7XG59XG5cbi5mbG9hdGluZy1ub3RlLXdyYXBwZXJUT1cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBsaW5lLWhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDE1MDBweCkgdHJhbnNsYXRlM2QoMHB4LCAwcHgsIC0xNTBweCkgc2NhbGUoMC45LCAwLjkpO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4tb3V0IHRyYW5zZm9ybTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZsb2F0aW5nLW5vdGUtd3JhcHBlclRPVzpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIC0yNTBweCk7XG4gIHotaW5kZXg6IDE1O1xufVxuXG4uZmxvYXRpbmctbm90ZVRPVyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTVweDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDVweCAzcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGFuaW1hdGlvbjogZmxvYXROb3RlVE9XIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICB6LWluZGV4OiAxMDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbn1cblxuQGtleWZyYW1lcyBmbG9hdE5vdGVUT1cge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgfVxufVxuLndhcm5pbmdTaGFkb3cge1xuICBqdXN0aWZ5LWl0ZW1zOiBhbmNob3ItY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4O1xuICBib3JkZXItY29sb3I6ICMxZTllYTUgOTIsIDkyLCA5MjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB3aWR0aDogYXV0bztcbiAgbWluLWhlaWdodDogMzBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDFweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogcmdiYSgxMzYsIDEzMiwgMTMyLCAwLjMyOSk7XG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggcmdiYSgyNTUsIDAsIDAsIDAuMzUpO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDI1NSwgMCwgMCwgMC4zNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4IHJnYmEoMjU1LCAwLCAwLCAwLjM1KTtcbn1cblxuLnBhZGRMZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5idXR0b25JY29uIHtcbiAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50b3RhbHMtcm93IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWdyaWQtYm9yZGVyKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ncmlkLWJvcmRlcik7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tZ3JpZC1oZWFkZXIpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlLWRldGFpbHMtY29sIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWdyaWQtYm9yZGVyKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1ncmlkLWJvcmRlcik7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uZ3JpZC1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xufVxuXG4uZ3JpZC1pbnNpZGUtcm93IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWdyaWQtaGVhZGVyKTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 99069:
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-items/loan-items.page.html?ngResource ***!
  \******************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader class=\"zindex\" [isVisible]=\"showLoader\"></app-loader>\n<ion-title class=\"ion-padding-vertical\"> عرض سلع القروض الاستهلاكية </ion-title>\n<div class=\"row\">\n  <div class=\"col-md-12 grid-margin\">\n    <ion-card style=\"border-radius: 20px\">\n      <ion-card-content>\n        <form [formGroup]=\"parametersForm\">\n          <ion-grid class=\"card\">\n            <ion-row class=\"justify-content-center\">\n              <ion-col size=\"4\" size-lg=\"2\" size-md=\"3\" size-sm=\"4\">\n                <ion-label class=\"form-label form-label-required\">\n                  تاريخ القرض من\n                </ion-label>\n                <ngx-datepicker (ionChange)=\"clear()\" [parentForm]=\"parametersForm\"\n                  parentFormControllerName=\"loan_date_start\"></ngx-datepicker>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isParametersFormValid && (parametersForm.controls['loan_date_start'].hasError('pattern'))\"\n                  role=\"alert\">\n                  (yyyy-mm-dd)\n                </div>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isParametersFormValid && (parametersForm.controls['loan_date_start'].hasError('DateIsGrater'))\"\n                  role=\"alert\">\n                  لا يمكن اختيار تاريخ بعد تاريخ اليوم الحالي\n                </div>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isParametersFormValid && (parametersForm.controls['loan_date_start'].hasError('required'))\"\n                  role=\"alert\">\n                  يجب اختيار تاريخ البداية\n                </div>\n              </ion-col>\n              <ion-col size=\"4\" size-lg=\"2\" size-md=\"3\" size-sm=\"4\">\n                <ion-label class=\"form-label form-label-required\">\n                  الى\n                </ion-label>\n                <ngx-datepicker (ionChange)=\"clear()\" [parentForm]=\"parametersForm\"\n                  parentFormControllerName=\"loan_date_end\"></ngx-datepicker>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isParametersFormValid && (parametersForm.controls['loan_date_end'].hasError('pattern'))\"\n                  role=\"alert\">\n                  (yyyy-mm-dd)\n                </div>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isParametersFormValid && (parametersForm.controls['loan_date_end'].hasError('DateIsGrater'))\"\n                  role=\"alert\">\n                  لا يمكن اختيار تاريخ بعد تاريخ اليوم الحالي\n                </div>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isParametersFormValid && (parametersForm.controls['loan_date_end'].hasError('required'))\"\n                  role=\"alert\">\n                  يجب اختيار تاريخ النهاية\n                </div>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  المورد\n                </ion-label>\n                <app-multiplePopover [parentForm]=\"parametersForm\" parentFormControllerName=\"vendor_code\"\n                  [arrayModal]=\"VendorForUsers\" [arrayName]=\"'vendor_name'\" [arrayValue]=\"'vendor_code'\"\n                  [okText]=\"'موافق'\" [cancelText]=\"'الغاء'\" placeholderText=\"اختار المورد\"\n                  (ionChange)=\"clear()\"></app-multiplePopover>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isParametersFormValid && (parametersForm.controls['vendor_code'].hasError('required'))\"\n                  role=\"alert\">\n                  برجاء اختيار المورد\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"justify-content-center\">\n              <ion-col size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  حالة القرض\n                </ion-label>\n                <ion-select interface=\"popover\" placeholder=\"اختار حالة القرض\" formControlName=\"rep_flag\"\n                  class=\"subselect\" (ionChange)=\"clear()\">\n                  <ion-select-option [value]=\"1\"> قروض مصدرة </ion-select-option>\n                </ion-select>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isParametersFormValid && (parametersForm.controls['rep_flag'].hasError('required'))\"\n                  role=\"alert\">\n                  برجاء اختيار حالة القرض\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"justify-content-center\">\n            </ion-row>\n            <ion-row class=\"justify-content-center paddingTop30px\">\n              <ion-button (click)=\"getConsumerLoansList()\">\n                <ion-icon name=\"search\"></ion-icon>\n              </ion-button>\n            </ion-row>\n            <div *ngIf=\"showDataGrid\" class=\"ion-padding table-responsive\">\n              <ion-grid [fixed]=\"true\" style=\"min-width: 1250px;\" class=\"sms-grid scroll-container scrollHandler\">\n                <ion-row class=\"ion-align-items-center header-row\">\n                  <ion-col class=\"text-center\" (click)=\"sortingTable(consumerLoansListResponsModel , 'client_name')\">\n                    <ion-icon class=\"ion-icon-class ClickableIcon\" [name]=\"sortingIconClass\"\n                      *ngIf=\"sortingIconParam == 'client_name'\"></ion-icon>\n                    <ion-label class=\"form-label\">اسم العميل</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label class=\"form-label\">كود القرض</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label class=\"form-label\">نوع القرض</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\" (click)=\"sortingTable(consumerLoansListResponsModel , 'loan_status')\">\n                    <ion-icon class=\"ion-icon-class ClickableIcon\" [name]=\"sortingIconClass\"\n                      *ngIf=\"sortingIconParam == 'loan_status'\"></ion-icon>\n                    <ion-label class=\"form-label\">حالة القرض</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\" (click)=\"sortingTable(consumerLoansListResponsModel , 'loan_date')\">\n                    <ion-icon class=\"ion-icon-class ClickableIcon\" [name]=\"sortingIconClass\"\n                      *ngIf=\"sortingIconParam == 'loan_date'\"></ion-icon>\n                    <ion-label class=\"form-label\">تاريخ القرض</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\" (click)=\"sortingTable(consumerLoansListResponsModel , 'loan_am')\">\n                    <ion-icon class=\"ion-icon-class ClickableIcon\" [name]=\"sortingIconClass\"\n                      *ngIf=\"sortingIconParam == 'loan_am'\"></ion-icon>\n                    <ion-label class=\"form-label\">قيمة القرض</ion-label>\n                    <span class=\"ClickableIcon\">\n                      <span class=\"arrow-up\"></span>\n                      <span class=\"arrow-down\"></span>\n                    </span>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label class=\"form-label\">الفائدة</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\" (click)=\"sortingTable(consumerLoansListResponsModel , 'vendor_code')\">\n                    <ion-icon class=\"ion-icon-class ClickableIcon\" [name]=\"sortingIconClass\"\n                      *ngIf=\"sortingIconParam == 'vendor_code'\"></ion-icon>\n                    <ion-label class=\"form-label\">اسم المورد</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\" (click)=\"sortingTable(consumerLoansListResponsModel , 'vendor_br_code')\">\n                    <ion-icon class=\"ion-icon-class ClickableIcon\" [name]=\"sortingIconClass\"\n                      *ngIf=\"sortingIconParam == 'vendor_br_code'\"></ion-icon>\n                    <ion-label class=\"form-label\">فرع المورد</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\" (click)=\"sortingTable(consumerLoansListResponsModel , 'items_counter')\">\n                    <ion-icon class=\"ion-icon-class ClickableIcon\" [name]=\"sortingIconClass\"\n                      *ngIf=\"sortingIconParam == 'items_counter'\"></ion-icon>\n                    <ion-label class=\"form-label\">عدد السلع</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label class=\"form-label\">عرض سلع القرض</ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row [ngClass]=\"getRowClassesLoansGrid(i)\" (click)=\"selectLoanGridRow(i)\" class=\"details-row\"\n                  *ngFor=\"let loan of pagingService.Paging(consumerLoansListResponsModel, pagingObject.page); let i = index\">\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ loan.client_name }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{loan.loan_code}} / {{ loan.client_code }}\n                      / {{ loan.org_branch_code }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ loan.loan_type_name }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ loan.loan_status_desc }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ loan.loan_date|\n                      date:'yyyy-MM-dd' }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ loan.loan_am|number: '1.2-2' : 'en' }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ loan.loan_int_rt|number: '1.2-2' : 'en' }} % </ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ loan.vendor_name }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ loan.vendor_br_name }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ loan.items_counter }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-icon class=\"gridButton\" name=\"bag-check-sharp\"\n                      (click)=\"getLoanItems(loan.application_key)\"></ion-icon>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <app-pagination [page]=\"this.pagingObject.page\" [collectionSize]=\"consumerLoansListResponsModel?.length\"\n                (pageChange)=\"changePaginationPage($event);\"></app-pagination>\n            </div>\n            <ion-row class=\"justify-content-center\" *ngIf=\"showReportButton\">\n              <ion-button (click)=\"getReport('1')\">\n                <ion-icon name=\"document\"></ion-icon>\n              </ion-button>\n              <ion-button (click)=\"GetConsumerLoansItemsCSV()\">\n                <!-- <i class=\"fas fa-file-csv\" style='font-size:18px'></i> -->\n                CSV\n                <ion-icon style=\"padding-right: 5px;\" name=\"cloud-download-sharp\"></ion-icon>\n              </ion-button>\n            </ion-row>\n          </ion-grid>\n          <ion-modal [isOpen]=\"isModalOpen\" backdropDismiss=\"false\" showBackdrop=\"true\" class=\"fullscreen\">\n            <ng-template>\n              <ion-header>\n                <ion-toolbar>\n                  <ion-title>سلع القرض</ion-title>\n                  <ion-buttons slot=\"end\">\n                    <ion-button (click)=\"setOpen(false)\">\n                      <ion-icon name=\"close\"></ion-icon>\n                    </ion-button>\n                  </ion-buttons>\n                </ion-toolbar>\n              </ion-header>\n              <app-loader class=\"zindex\" [isVisible]=\"showLoader\"></app-loader>\n              <ion-content class=\"ion-padding\">\n                <ion-card style=\"border-radius: 20px\">\n                  <ion-card-content>\n                    <ion-grid class=\"ion-padding\">\n                      <ion-card style=\"border-radius: 20px\">\n                        <ion-card-content>\n                          <ion-row>\n                            <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\" size-xl=\"4\">\n                              <ion-row style=\"justify-content: center\">\n                                <ion-label class=\"form-label\"> اسم العميل </ion-label>\n                              </ion-row>\n                              <ion-row style=\"justify-content: center\">\n                                <ion-row class=\"infoFieldBorder\" style=\"justify-content: center\">\n                                  <ion-col size=\"auto\">\n                                    <ion-icon name=\"person\" class=\"ionSize\"></ion-icon>\n                                  </ion-col>\n                                  <ion-col style=\"align-content: space-around\">\n                                    <ion-label> {{client_name}} </ion-label>\n                                  </ion-col>\n                                </ion-row>\n                              </ion-row>\n                            </ion-col>\n                            <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\" size-xl=\"4\">\n                              <ion-row style=\"justify-content: center\">\n                                <ion-label class=\"form-label\"> الرقم القومي </ion-label>\n                              </ion-row>\n                              <ion-row style=\"justify-content: center\">\n                                <ion-row class=\"infoFieldBorder\" style=\"justify-content: center\">\n                                  <ion-col size=\"auto\">\n                                    <ion-icon name=\"card\" class=\"ionSize\"></ion-icon>\n                                  </ion-col>\n                                  <ion-col style=\"align-content: space-around\">\n                                    <ion-label> {{nation_id}} </ion-label>\n                                  </ion-col>\n                                </ion-row>\n                              </ion-row>\n                            </ion-col>\n                            <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\" size-xl=\"4\">\n                              <ion-row style=\"justify-content: center\">\n                                <ion-label class=\"form-label\"> نوع العميل </ion-label>\n                              </ion-row>\n                              <ion-row style=\"justify-content: center\">\n                                <ion-row class=\"infoFieldBorder\" style=\"justify-content: center\">\n                                  <ion-col size=\"auto\">\n                                    <ion-icon name=\"people\" class=\"ionSize\"></ion-icon>\n                                  </ion-col>\n                                  <ion-col style=\"align-content: space-around\">\n                                    <ion-label> {{client_gender_desc}} </ion-label>\n                                  </ion-col>\n                                </ion-row>\n                              </ion-row>\n                            </ion-col>\n                          </ion-row>\n                        </ion-card-content>\n                      </ion-card>\n                      <ion-card style=\"border-radius: 20px\">\n                        <ion-card-content>\n                          <ion-row style=\"justify-content: center\">\n                            <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\" size-xl=\"4\">\n                              <ion-row style=\"justify-content: center\">\n                                <ion-label class=\"form-label\"> كود القرض </ion-label>\n                              </ion-row>\n                              <ion-row style=\"justify-content: center\">\n                                <ion-row class=\"infoFieldBorder\" style=\"justify-content: center\">\n                                  <ion-col size=\"auto\">\n                                    <ion-icon name=\"ticket-sharp\" class=\"ionSize\"></ion-icon>\n                                  </ion-col>\n                                  <ion-col style=\"align-content: space-around\">\n                                    <ion-label> {{full_loan_code}} </ion-label>\n                                  </ion-col>\n                                </ion-row>\n                              </ion-row>\n                            </ion-col>\n                            <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\" size-xl=\"4\">\n                              <ion-row style=\"justify-content: center\">\n                                <ion-label class=\"form-label\"> نوع القرض </ion-label>\n                              </ion-row>\n                              <ion-row style=\"justify-content: center\">\n                                <ion-row class=\"infoFieldBorder\" style=\"justify-content: center\">\n                                  <ion-col size=\"auto\">\n                                    <ion-icon name=\"information-circle\" class=\"ionSize\"></ion-icon>\n                                  </ion-col>\n                                  <ion-col style=\"align-content: space-around\">\n                                    <ion-label> {{loan_type_name}} </ion-label>\n                                  </ion-col>\n                                </ion-row>\n                              </ion-row>\n                            </ion-col>\n                            <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\" size-xl=\"4\">\n                              <ion-row style=\"justify-content: center\">\n                                <ion-label class=\"form-label\"> حالة القرض </ion-label>\n                              </ion-row>\n                              <ion-row style=\"justify-content: center\">\n                                <ion-row class=\"infoFieldBorder\" style=\"justify-content: center\">\n                                  <ion-col size=\"auto\">\n                                    <ion-icon name=\"pulse-sharp\" class=\"ionSize\"></ion-icon>\n                                  </ion-col>\n                                  <ion-col style=\"align-content: space-around\">\n                                    <ion-label> {{loan_status_desc}} </ion-label>\n                                  </ion-col>\n                                </ion-row>\n                              </ion-row>\n                            </ion-col>\n                          </ion-row>\n                          <ion-row style=\"justify-content: center\">\n                            <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\" size-xl=\"4\">\n                              <ion-row style=\"justify-content: center\">\n                                <ion-label class=\"form-label\"> تاريخ القرض </ion-label>\n                              </ion-row>\n                              <ion-row style=\"justify-content: center\">\n                                <ion-row class=\"infoFieldBorder\" style=\"justify-content: center\">\n                                  <ion-col size=\"auto\">\n                                    <ion-icon name=\"calendar\" class=\"ionSize\"></ion-icon>\n                                  </ion-col>\n                                  <ion-col style=\"align-content: space-around\">\n                                    <ion-label> {{loan_date|date:'yyyy-MM-dd' }} </ion-label>\n                                  </ion-col>\n                                </ion-row>\n                              </ion-row>\n                            </ion-col>\n                            <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\" size-xl=\"4\">\n                              <ion-row style=\"justify-content: center\">\n                                <ion-label class=\"form-label\"> قيمة القرض </ion-label>\n                              </ion-row>\n                              <ion-row style=\"justify-content: center\">\n                                <ion-row class=\"infoFieldBorder\" style=\"justify-content: center\">\n                                  <ion-col size=\"auto\">\n                                    <ion-icon name=\"cash\" class=\"ionSize\"></ion-icon>\n                                  </ion-col>\n                                  <ion-col style=\"align-content: space-around\">\n                                    <ion-label> {{loan_am|number: '1.2-2' : 'en' }} </ion-label>\n                                  </ion-col>\n                                </ion-row>\n                              </ion-row>\n                            </ion-col>\n                            <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\" size-xl=\"4\">\n                              <ion-row style=\"justify-content: center\">\n                                <ion-label class=\"form-label\"> الفائدة </ion-label>\n                              </ion-row>\n                              <ion-row style=\"justify-content: center\">\n                                <ion-row class=\"infoFieldBorder\" style=\"justify-content: center\">\n                                  <ion-col size=\"auto\">\n                                    <ion-icon name=\"add-circle\" class=\"ionSize\"></ion-icon>\n                                  </ion-col>\n                                  <ion-col style=\"align-content: space-around\">\n                                    <ion-label> {{loan_int_rt|number: '1.2-2' : 'en' }} % </ion-label>\n                                  </ion-col>\n                                </ion-row>\n                              </ion-row>\n                            </ion-col>\n                          </ion-row>\n                          <ion-row style=\"justify-content: center\">\n                            <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\" size-xl=\"4\">\n                              <ion-row style=\"justify-content: center\">\n                                <ion-label class=\"form-label\"> المورد </ion-label>\n                              </ion-row>\n                              <ion-row style=\"justify-content: center\">\n                                <ion-row class=\"infoFieldBorder\" style=\"justify-content: center\">\n                                  <ion-col size=\"auto\">\n                                    <ion-icon name=\"business-sharp\" class=\"ionSize\"></ion-icon>\n                                  </ion-col>\n                                  <ion-col style=\"align-content: space-around\">\n                                    <ion-label> {{vendor_name}} </ion-label>\n                                  </ion-col>\n                                </ion-row>\n                              </ion-row>\n                            </ion-col>\n                            <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\" size-xl=\"4\">\n                              <ion-row style=\"justify-content: center\">\n                                <ion-label class=\"form-label\"> فرع المورد </ion-label>\n                              </ion-row>\n                              <ion-row style=\"justify-content: center\">\n                                <ion-row class=\"infoFieldBorder\" style=\"justify-content: center\">\n                                  <ion-col size=\"auto\">\n                                    <ion-icon name=\"storefront-sharp\" class=\"ionSize\"></ion-icon>\n                                  </ion-col>\n                                  <ion-col style=\"align-content: space-around\">\n                                    <ion-label> {{vendor_br_name}} </ion-label>\n                                  </ion-col>\n                                </ion-row>\n                              </ion-row>\n                            </ion-col>\n                            <ion-col size-xs=\"12\" size-sm=\"12\" size-md=\"4\" size-lg=\"4\" size-xl=\"4\">\n                              <ion-row style=\"justify-content: center\">\n                                <ion-label class=\"form-label\"> عدد السلع </ion-label>\n                              </ion-row>\n                              <ion-row style=\"justify-content: center\">\n                                <ion-row class=\"infoFieldBorder\" style=\"justify-content: center\">\n                                  <ion-col size=\"auto\">\n                                    <ion-icon name=\"calculator-sharp\" class=\"ionSize\"></ion-icon>\n                                  </ion-col>\n                                  <ion-col style=\"align-content: space-around\">\n                                    <ion-label> {{items_counter}} </ion-label>\n                                  </ion-col>\n                                </ion-row>\n                              </ion-row>\n                            </ion-col>\n                          </ion-row>\n                        </ion-card-content>\n                      </ion-card>\n                    </ion-grid>\n                  </ion-card-content>\n                </ion-card>\n                <ion-card style=\"border-radius: 20px\">\n                  <ion-card-content>\n                    <div class=\"ion-padding table-responsive\">\n                      <ion-grid [fixed]=\"true\" style=\"min-width: 1150px;\"\n                        class=\"sms-grid scroll-container scrollHandler\">\n                        <ion-row class=\"ion-align-items-center header-row\">\n                          <ion-col size=\"1\" class=\"text-center\">\n                          </ion-col>\n                          <ion-col class=\"text-center\">\n                            <ion-label class=\"form-label\">سلع القرض</ion-label>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row (click)=\"selectItemGridRow(i)\" [ngClass]=\"getRowClassesItemsGrid(i)\"\n                          *ngFor=\"let LoanItems of consumerLoanItemsResponsModel; let i = index\">\n                          <ion-col size=\"1\" class=\"text-center\">\n                            <ion-row class=\"grid-inside-row\">\n                              <ion-col class=\"text-center\">\n                                <ion-label class=\"grid-label\" style=\"font-weight: bold;\">\n                                  سلعة {{'( '+ LoanItems.row_num + ' )'}}</ion-label>\n                              </ion-col>\n                            </ion-row>\n                            <ion-row class=\"grid-inside-row\">\n                              <ion-col class=\"text-center\">\n                                <ion-label class=\"grid-label\"> الفئة </ion-label>\n                              </ion-col>\n                            </ion-row>\n                            <ion-row class=\"grid-inside-row\">\n                              <ion-col class=\"text-center\">\n                                <ion-label class=\"grid-label\"> تفاصيل السلعة </ion-label>\n                              </ion-col>\n                            </ion-row>\n                          </ion-col>\n                          <ion-col class=\"text-center\">\n                            <ion-row>\n                              <ion-col class=\"text-center\">\n                                <ion-label style=\"font-weight: bold;\">{{ LoanItems.item_name }}</ion-label>\n                              </ion-col>\n                            </ion-row>\n                            <ion-row>\n                              <ion-col class=\"text-center\">\n                                <ion-label>{{ LoanItems.full_cat_name }}</ion-label>\n                              </ion-col>\n                            </ion-row>\n                            <ion-row class=\"ion-align-items-center grid-inside-row\">\n                              <ion-col class=\"text-center\">\n                                <ion-label class=\"grid-label\"> السعر الاصلي</ion-label>\n                              </ion-col>\n                              <ion-col class=\"text-center\">\n                                <ion-label class=\"grid-label\"> السعر التمويلي </ion-label>\n                              </ion-col>\n                              <ion-col class=\"text-center\">\n                                <ion-label class=\"grid-label\"> عدد الوحدات </ion-label>\n                              </ion-col>\n                              <ion-col class=\"text-center\">\n                                <ion-label class=\"grid-label\" style=\"font-weight: bold;\"> المجموع </ion-label>\n                              </ion-col>\n                            </ion-row>\n                            <ion-row>\n                              <ion-col class=\"text-center\">\n                                <ion-label>{{ LoanItems.item_price|number: '1.2-2' : 'en' }}</ion-label>\n                              </ion-col>\n                              <ion-col class=\"text-center\">\n                                <ion-label>{{ LoanItems.funded_price|number: '1.2-2' : 'en' }}</ion-label>\n                              </ion-col>\n                              <ion-col class=\"text-center\">\n                                <ion-label>{{ LoanItems.quantity}}</ion-label>\n                              </ion-col>\n                              <ion-col class=\"text-center\" style=\"font-weight: bold;\">\n                                <ion-label>{{ LoanItems.item_sub_total|number: '1.2-2' : 'en' }}</ion-label>\n                              </ion-col>\n                            </ion-row>\n                          </ion-col>\n                        </ion-row>\n                        <ion-row class=\"totals-row\">\n                          <ion-col class=\"text-center\">\n                            <ion-label class=\"form-label\"> المجموع الكلي </ion-label>\n                          </ion-col>\n                          <ion-col size=\"2.8\" class=\"text-center\">\n                            <ion-label style=\"font-weight: bold;\">{{loan_items_grand_total_price|number: '1.2-2' : 'en'\n                              }}</ion-label>\n                          </ion-col>\n                        </ion-row>\n                      </ion-grid>\n                    </div>\n                  </ion-card-content>\n                </ion-card>\n              </ion-content>\n            </ng-template>\n          </ion-modal>\n        </form>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_loan-items_loan-items_module_ts.js.map