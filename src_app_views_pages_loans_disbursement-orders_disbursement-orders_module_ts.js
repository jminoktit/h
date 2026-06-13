"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_disbursement-orders_disbursement-orders_module_ts"],{

/***/ 57044:
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/loans/disbursement-orders/disbursement-orders-routing.module.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisbursementOrdersPageRoutingModule": function() { return /* binding */ DisbursementOrdersPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _disbursement_orders_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disbursement-orders.page */ 76374);






var routes = [{
  path: '',
  component: _disbursement_orders_page__WEBPACK_IMPORTED_MODULE_2__.DisbursementOrdersPage
}];

var DisbursementOrdersPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DisbursementOrdersPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DisbursementOrdersPageRoutingModule);
});

DisbursementOrdersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], DisbursementOrdersPageRoutingModule);


/***/ }),

/***/ 54209:
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/loans/disbursement-orders/disbursement-orders.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisbursementOrdersPageModule": function() { return /* binding */ DisbursementOrdersPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _disbursement_orders_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disbursement-orders-routing.module */ 57044);
/* harmony import */ var _disbursement_orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disbursement-orders.page */ 76374);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);












var DisbursementOrdersPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DisbursementOrdersPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DisbursementOrdersPageModule);
});

DisbursementOrdersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _disbursement_orders_routing_module__WEBPACK_IMPORTED_MODULE_2__.DisbursementOrdersPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_disbursement_orders_page__WEBPACK_IMPORTED_MODULE_3__.DisbursementOrdersPage]
})], DisbursementOrdersPageModule);


/***/ }),

/***/ 76374:
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/loans/disbursement-orders/disbursement-orders.page.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisbursementOrdersPage": function() { return /* binding */ DisbursementOrdersPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ 58277);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _disbursement_orders_page_html_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./disbursement-orders.page.html?ngResource */ 85993);
/* harmony import */ var _disbursement_orders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disbursement-orders.page.scss?ngResource */ 30070);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);



















var DisbursementOrdersPage = /*#__PURE__*/function () {
  //region Constructor
  function DisbursementOrdersPage(formBuilder, authService, referencesService, http, env, alertService, alertController, pagingService, sortingService) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DisbursementOrdersPage);

    this.formBuilder = formBuilder;
    this.authService = authService;
    this.referencesService = referencesService;
    this.http = http;
    this.env = env;
    this.alertService = alertService;
    this.alertController = alertController;
    this.pagingService = pagingService;
    this.sortingService = sortingService;
    this.showLoader = false;
    this.DisbOrdersResponseModal = [];
    this.isDisbursementFormValid = false;
    this.isDisbursementLayoutFormValid = false;
    this.isDisbursementCoFormValid = false;
    this.isActiveOfficerButt = true;
    this.disableDatepickerButt = true;
    this.disableIonSelect = true;
    this.disableDisbCoButt = true;
    this.showSingleDataGrid = false;
    this.showGroupDataGrid = false;
    this.selectedRowIndex = -1;
    this.selectedSingleLoans = [];
    this.selectedGroupLoans = [];
    this.checked = false;
    this.showLayoutOption = false;
    this.paramsPage = true;
    this.optionsGrid = false;
    this.isLoanStatusActive = true;
    this.isGroup = false;
    this.uniqueKeys = []; // Unique keys for checkboxes

    this.checkedKeys = {}; // State of checkboxes by key

    this.masterChecked = false; // State of the master checkbox

    this.sortingIconClass = "arrow-down-outline";
    this.pageSize = 1; // Number of unique keys per page

    this.currentPage = 1; // Current page number

    this.pagedData = {}; // Data to be displayed for the current page
    //region Forms

    this.disbursementForm = this.formBuilder.group({
      branch_code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      officer_key: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      loan_start_date: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern("((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])"), this.noDateGreaterToday]],
      loan_end_date: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern("((?:19|20)\\d\\d)-(0?[1-9]|1[012])-([12][0-9]|3[01]|0?[1-9])"), this.noDateGreaterToday]],
      funder_code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      // id: ["", Validators.required],
      loan_status: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      client_type_code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required] //co_disb_type: ["", Validators.required],

    });
    this.disbursementLayoutForm = this.formBuilder.group({
      disb_co_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
    }); //region get data

    this.getOfficersByBranchCode = function () {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var response;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.disbursementForm.controls.branch_code.value != -1)) {
                  _context.next = 16;
                  break;
                }

                _context.prev = 1;
                this.showLoader = true;
                _context.next = 5;
                return this.http.get(this.env.API_URL + "api/Officer/GetBranchOfficers?branch_code=".concat(this.disbursementForm.controls.branch_code.value), {}).toPromise();

              case 5:
                response = _context.sent;
                this.officerResponseModal = response;
                this.showLoader = false;
                this.isActiveOfficerButt = false;
                return _context.abrupt("return", response);

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](1);
                console.error("Error", _context.t0);
                throw _context.t0;

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 12]]);
      }));
    };

    this.getDisbOrders = function () {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        var _this2 = this;

        var response;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.pagingObject.page = 1;
                this.currentPage = 1;
                this.pagedData = {};
                this.sortingIconClass = "arrow-down-outline";
                console.log("officer_key at all", this.disbursementForm.controls.officer_key.value);
                console.log("funder_code", this.disbursementForm.controls.funder_code.value);
                console.log("selectedLoanString at get disb", this.selectedLoanString);
                this.isDisbursementFormValid = true;

                if (!this.disbursementForm.valid) {
                  _context2.next = 41;
                  break;
                }

                _context2.prev = 9;
                this.showLoader = true;
                _context2.next = 13;
                return this.http.get(this.env.API_URL + "api/Loan/GetDisbOrders?org_code=".concat(this.org_code_user_info, "\n              &branch_code=").concat(this.disbursementForm.controls.branch_code.value, "\n              &officer_key=").concat(this.disbursementForm.controls.officer_key.value, "\n              &loan_start_date=").concat(this.disbursementForm.controls.loan_start_date.value, "\n              &loan_end_date=").concat(this.disbursementForm.controls.loan_end_date.value, "\n              &loans_status=").concat(this.disbursementForm.controls.loan_status.value, "\n              &client_type_code=").concat(this.disbursementForm.controls.client_type_code.value, "\n              &funder_code=").concat(this.disbursementForm.controls.funder_code.value)).toPromise();

              case 13:
                response = _context2.sent;
                this.DisbOrdersResponseModal = response; //--> THIS PART FOR GROUP LOANS | START \\

                this.groupedData = this.groupByKey(response, "loan_key");
                this.uniqueKeys = Object.keys(this.groupedData);
                this.uniqueKeys.forEach(function (key) {
                  _this2.checkedKeys[key] = false;
                });
                this.totalCount = this.uniqueKeys.length;
                this.updatePagedData(); //--> THIS PART FOR GROUP LOANS | END \\

                this.selectedLoanString = "";
                this.selectedSingleLoans = [];
                this.selectedGroupLoans = [];
                this.showLoader = false;
                this.isActiveOfficerButt = false;
                console.log("response", response);

                if (response.length == 0) {
                  this.alertService.showAlertError("لا يوجد بيانات للعرض", false);
                  this.showSingleDataGrid = false;
                  this.showGroupDataGrid = false;
                } else {
                  if (this.disbursementForm.controls.client_type_code.value == 1) {
                    this.showSingleDataGrid = true;
                    this.showLayoutOption = true;
                  } else if (this.disbursementForm.controls.client_type_code.value == 2) {
                    this.showGroupDataGrid = true;
                    this.showLayoutOption = true;
                  }
                }

                this.masterChecked = false;
                this.checked = false;
                this.isAllGroupsLoansSelected = false;
                this.isAllSingleLoansSelected = false;
                console.log("isAllSelectedGroupLoans", this.isAllGroupsLoansSelected);

                if (this.ionCheckBoxGroupLoan) {
                  if (this.isGroup == true) {
                    this.ionCheckBoxGroupLoan.checked = false;
                    this.ionCheckBoxGroupLoan.indeterminate = false;
                  }
                }

                if (this.ionCheckBoxSingleLoan) {
                  if (this.isGroup != true) {
                    this.ionCheckBoxSingleLoan.checked = false;
                    this.ionCheckBoxSingleLoan.indeterminate = false;
                  }
                }

                return _context2.abrupt("return", response);

              case 37:
                _context2.prev = 37;
                _context2.t0 = _context2["catch"](9);
                console.error("Error", _context2.t0);
                throw _context2.t0;

              case 41:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[9, 37]]);
      }));
    };

    this.getDispCompanies = function () {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {
        var response;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.http.get(this.env.API_URL + "api/Loan/GetDisbCompanies?org_code=".concat(this.org_code_user_info), {}).toPromise();

              case 3:
                response = _context3.sent;
                this.DisbCompaniesResponseModal = response;
                console.log("DisbCompaniesResponseModal", this.DisbCompaniesResponseModal); //this.showLoader = false;
                //this.disableOfficerButt = false;

                return _context3.abrupt("return", response);

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                console.error("Error", _context3.t0);
                throw _context3.t0;

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9]]);
      }));
    };

    this.changePaginationPage = function (newPage) {
      _this.pagingObject.page = newPage;
    };
  } // isArrowActive = false;


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(DisbursementOrdersPage, [{
    key: "isAllSingleLoansSelected",
    set: function set(value) {
      this.DisbOrdersResponseModal.forEach(function (loan) {
        return loan.isCheck = value;
      });
    }
  }, {
    key: "isAllGroupsLoansSelected",
    set: function set(value) {
      Object.values(this.pagedData).every(function (group) {
        return group.every(function (loan) {
          return loan.isCheck = value;
        });
      });
    } //region ngOnInit

  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4() {
        var _this3 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.pagingObject = {
                  pageSize: this.pagingService.getPageSizeFromLocalStorage(),
                  page: 1
                };
                _context4.next = 3;
                return this.referencesService.getAllBranches();

              case 3:
                this.branchModelResponseModal = _context4.sent;
                // this.Funders = await this.referencesService.GetAllFunders();
                this.GetAllFunders();
                this.authService.getUserInfo().then(function (userInfo) {
                  _this3.org_code_user_info = userInfo.org_code;
                  console.log(_this3.org_code_user_info);
                  console.log("user branch code", userInfo.branch_code);
                  console.log("all branches 01", _this3.branchModelResponseModal);
                  console.log("Funders", _this3.Funders);

                  _this3.getDispCompanies();
                });

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "GetDisbursementForm",
    get: function get() {
      return this.disbursementForm.controls;
    }
  }, {
    key: "GetDisbursementLayoutForm",
    get: function get() {
      return this.disbursementLayoutForm.controls;
    } //region Navigation Methods
    // onEnter() {
    //   this.getDisbOrders();
    // }

  }, {
    key: "selectGridRow",
    value: function selectGridRow(index) {
      this.selectedRowIndex = index;
    } //region Validation Methods

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
    }
  }, {
    key: "groupByKey",
    value: function groupByKey(data, key) {
      return data.reduce(function (result, item) {
        var keyValue = item[key]; // Assuming the key is a string

        if (!result[keyValue]) {
          result[keyValue] = [];
        }

        result[keyValue].push(item);
        return result;
      }, {});
    }
  }, {
    key: "GetAllFunders",
    value: function GetAllFunders() {
      var _this4 = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/Loan/GetAllFunders").subscribe({
        next: function next(data) {
          _this4.Funders = data;
          _this4.showLoader = false;
          console.log("funders here ", data);
        },
        error: function error(err) {
          console.log(err);
          _this4.showLoader = false;
        }
      });
    } //region form tools

  }, {
    key: "clear",
    value: function clear() {
      this.masterChecked = false;
      this.selectedSingleLoans = [];
      this.showSingleDataGrid = false;
      this.isAllGroupsLoansSelected = false;
      this.groupedData = {};
      this.pagedData = {};
      this.selectedGroupLoans = [];
      this.showGroupDataGrid = false;
      this.disbursementLayoutForm.patchValue({
        disb_co_id: null
      });
      this.showLayoutOption = false;
      this.selectedRowIndex = -1;
      this.selectedLoanString = "";
      console.log("isAllSelectedGroupLoans", this.isAllGroupsLoansSelected);

      if (this.ionCheckBoxGroupLoan) {
        if (this.isGroup == true) {
          this.ionCheckBoxGroupLoan.checked = false;
          this.ionCheckBoxGroupLoan.indeterminate = false;
        }
      }

      if (this.ionCheckBoxSingleLoan) {
        if (this.isGroup != true) {
          this.ionCheckBoxSingleLoan.checked = false;
          this.ionCheckBoxSingleLoan.indeterminate = false;
        }
      } // if (!this.isGroup == true) {
      // } else {
      // }
      //this.ionCheckBoxSingleLoan.indeterminate = false;
      //this.ionCheckBoxGroupLoan.indeterminate = false;
      //this.isAllSelectedGroupLoans = false;
      //this.ionCheckBoxGroupLoan.checked = false;
      //this.ionCheckBoxSingleLoan.checked = false;

    }
  }, {
    key: "getDisbCoInfo",
    value: function getDisbCoInfo() {
      var _this5 = this;

      var company = this.DisbCompaniesResponseModal.find(function (c) {
        return c.ref_code === _this5.disbursementLayoutForm.controls.disb_co_id.value;
      });
      this.ChosenCoName = company.ref_desc;
      console.log("ChosenCoName", this.ChosenCoName);
      return company ? company.ref_desc : undefined;
    }
  }, {
    key: "sortingTable",
    value: function sortingTable(data, param) {
      this.sortingService.sortByParameter(data, param);
      this.sortingIconClass = this.sortingService.sortOrder === "asc" ? "arrow-down-outline" : "arrow-up-outline";
      this.sortingIconParam = param;
    }
  }, {
    key: "officerIsChosen",
    value: function officerIsChosen() {
      this.showSingleDataGrid = false;
      this.showGroupDataGrid = false;
      this.showLayoutOption = false;
      this.disableDatepickerButt = false;
      this.disableDisbCoButt = false;
      this.disableIonSelect = false;

      if (this.ionCheckBoxGroupLoan) {
        if (this.isGroup == true) {
          this.ionCheckBoxGroupLoan.checked = false;
          this.ionCheckBoxGroupLoan.indeterminate = false;
        }
      }

      if (this.ionCheckBoxSingleLoan) {
        if (this.isGroup != true) {
          this.ionCheckBoxSingleLoan.checked = false;
          this.ionCheckBoxSingleLoan.indeterminate = false;
        }
      }
    } //   if (!this.isGroup == true) {
    //   } else {
    //   }
    // }
    // toggleArrow() {
    //   this.isArrowActive = !this.isArrowActive;
    // }
    // waitForCheckboxToRender(testedComponent: any): Promise<void> {
    //   return new Promise((resolve, reject) => {
    //     const interval = setInterval(() => {
    //       if (testedComponent) {
    //         clearInterval(interval); // Stop checking
    //         resolve(); // Checkbox is rendered
    //       }
    //     }, 50); // Check every 50ms
    //   });
    // }
    //region form actions

  }, {
    key: "onClientTypeChange",
    value: function onClientTypeChange() {
      this.clientTypeChecker();
      this.clear();
    }
  }, {
    key: "onBranchChange",
    value: function onBranchChange() {
      this.getOfficersByBranchCode();
      this.selectedOfficer = null;
    }
  }, {
    key: "onLoanStatusChange",
    value: function onLoanStatusChange() {
      this.clientTypeChecker();
      this.clear();
    }
  }, {
    key: "toggleSelectionloanKeys",
    value: function toggleSelectionloanKeys(loan_key) {
      var index = this.selectedSingleLoans.indexOf(loan_key);

      if (index > -1) {
        //this.selectedLoanString === "";
        this.selectedSingleLoans.splice(index, 1);
      } else {
        this.selectedSingleLoans.push(loan_key);
      }
    } //

  }, {
    key: "collectClientsLoanKeys",
    value: function collectClientsLoanKeys() {
      this.isDisbursementCoFormValid = true;
      this.isDisbursementLayoutFormValid = true;

      if (this.disbursementForm.valid && this.disbursementLayoutForm.valid) {
        if (this.selectedSingleLoans.length != 0) {
          console.log("form is valid and im in if con");
          this.selectedLoanString = this.selectedSingleLoans.join(","); //this.printDoc(1);

          console.log("new", this.selectedLoanString);
          console.log(this.selectedSingleLoans);
          this.getDisbCoInfo();
          this.confirmMakingDisbOrdersAlert();
        } else if (this.selectedGroupLoans.length != 0) {
          console.log("form is valid and im in if con");
          this.selectedLoanString = this.selectedGroupLoans.join(","); //this.printDoc(1);

          console.log("selectedLoanString", this.selectedLoanString);
          console.log(this.selectedSingleLoans);
          this.getDisbCoInfo();
          this.confirmMakingDisbOrdersAlert();
        } else {
          this.alertService.showAlertError("لا يوجد عملاء مختارين", false);
        }
      }
    } // checkAllLoans() {
    //   this.checked = !this.checked;
    // }

  }, {
    key: "options",
    value: function options(option) {
      this.selectedOption = option;
      console.log("option is: ", option);
      console.log("selectedOption is: ", this.selectedOption);
    }
  }, {
    key: "selectOption",
    value: function selectOption() {
      if (this.selectedOption != null) {
        this.paramsPage = false;
        this.optionsGrid = true;
        console.log("selectedOption is: ", this.selectedOption);
      } else {
        this.alertService.showAlertError("برجاء اختيار نوع الملف", false);
      }

      if (this.selectedOption == "custom-checked") {
        this.isLoanStatusActive = false;
        this.optionName = "استخراج ملف الدفعات";
        this.disbursementForm.controls.loan_status.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required);
        this.disbursementForm.controls.loan_status.updateValueAndValidity();
      } else {
        this.optionName = "استخراج ملف الدفعات واصدار القروض";
        this.disbursementForm.controls.loan_status.clearValidators();
        this.disbursementForm.controls.loan_status.updateValueAndValidity();
        this.disbursementForm.patchValue({
          loan_status: 0
        });
      }
    }
  }, {
    key: "clearSearchParams",
    value: function clearSearchParams() {
      console.log("isActiveOfficerButt", this.isActiveOfficerButt);
      this.radioGroup.value = null;
      var todayFormatted = new Date().toISOString().split("T")[0];
      console.log(todayFormatted);
      console.log("branch before null", this.disbursementForm.controls.branch_code.value);
      this.disbursementForm.patchValue({
        branch_code: -1,
        officer_key: null,
        loan_start_date: todayFormatted,
        loan_end_date: todayFormatted,
        funder_code: null,
        id: null,
        loan_status: null,
        client_type_code: null
      });
      this.disbursementLayoutForm.patchValue({
        disb_co_id: null
      });
      this.disableDatepickerButt = true;
      this.disableIonSelect = true;
      this.disableDisbCoButt = true;
      this.isActiveOfficerButt = true;
      this.optionName = "";
      this.isDisbursementFormValid = false;
      this.isDisbursementLayoutFormValid = false;
      console.log("isActiveOfficerButt", this.isActiveOfficerButt);
    }
  }, {
    key: "backButt",
    value: function backButt() {
      this.clearSearchParams();
      this.optionsGrid = false;
      this.paramsPage = true;
      this.isLoanStatusActive = true;
    }
  }, {
    key: "clientTypeChecker",
    value: function clientTypeChecker() {
      if (this.disbursementForm.controls.client_type_code.value != 1) {
        this.isGroup = true;
      } else {
        this.isGroup = false;
      }

      console.log("isGroup", this.isGroup);
    }
  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(event, loan_key, index) {
      var selectedLoan = this.DisbOrdersResponseModal[index + this.pagingObject.pageSize * (this.pagingObject.page - 1)];
      selectedLoan.isCheck = event.target.checked;
      this.updateSelectedLoan(loan_key, event.target.checked);
      this.updateMasterSingleLoanCheckbox();

      if (this.DisbOrdersResponseModal.length !== this.selectedSingleLoans.length) {
        this.ionCheckBoxSingleLoan.indeterminate = true;
      } else if (this.DisbOrdersResponseModal.length == this.selectedSingleLoans.length) {
        // console.log("not equal");
        this.ionCheckBoxSingleLoan.indeterminate = false;
        this.ionCheckBoxSingleLoan.checked = true;
      }

      if (this.selectedSingleLoans.length == 0) {
        // console.log("last if");
        this.ionCheckBoxSingleLoan.indeterminate = false;
      }
    }
  }, {
    key: "onCheckboxMasterChange",
    value: function onCheckboxMasterChange(event) {
      var isChecked = event.target.checked;
      this.DisbOrdersResponseModal.forEach(function (loan) {
        return loan.isCheck = isChecked;
      });
      this.updateSelectedLoanForAll(isChecked);
    }
  }, {
    key: "onCheckboxMasterChangeGroup",
    value: function onCheckboxMasterChangeGroup(event) {
      var isChecked = event.target.checked;
      this.DisbOrdersResponseModal.forEach(function (loan) {
        return loan.isCheck = isChecked;
      });
      this.updateSelectedLoanForAll(isChecked);
    }
  }, {
    key: "updateSelectedLoan",
    value: function updateSelectedLoan(loan_key, isChecked) {
      console.log("updateSelectedLoan works");
      var index = this.selectedSingleLoans.indexOf(loan_key);

      if (isChecked && index === -1) {
        this.selectedSingleLoans.push(loan_key);
      } else if (!isChecked && index > -1) {
        this.selectedSingleLoans.splice(index, 1);
      }
    }
  }, {
    key: "updateSelectedLoanForAll",
    value: function updateSelectedLoanForAll(isChecked) {
      var _this6 = this;

      this.selectedSingleLoans = [];

      if (isChecked) {
        this.DisbOrdersResponseModal.forEach(function (loan) {
          _this6.selectedSingleLoans.push(loan.loan_key);
        });
      }
    }
  }, {
    key: "updateMasterSingleLoanCheckbox",
    value: function updateMasterSingleLoanCheckbox() {
      var allSelected = this.DisbOrdersResponseModal.every(function (loan) {
        return loan.isCheck;
      });
      var someSelected = this.DisbOrdersResponseModal.some(function (loan) {
        return loan.isCheck;
      });

      if (allSelected) {
        this.isAllSingleLoansSelected = true;
      } else if (!someSelected) {
        console.log("some selected");
        this.ionCheckBoxSingleLoan.checked = false;
        this.ionCheckBoxSingleLoan.indeterminate = false;
        this.isAllSingleLoansSelected = false;
      }
    } //////////////////////////////////////GRID CONTROL For GROUP

  }, {
    key: "onCheckboxMasterChangeForGroups",
    value: function onCheckboxMasterChangeForGroups(event) {
      var _this7 = this;

      console.log("im working");
      var isChecked = event.target.checked;
      this.uniqueKeys.forEach(function (key) {
        _this7.checkedKeys[key] = _this7.masterChecked;

        _this7.groupedData[key].forEach(function (row) {
          return row.isCheck = _this7.masterChecked;
        });
      });
      this.updateSelectedLoanForGoups(isChecked);
    }
  }, {
    key: "onCheckboxChangeForGroup",
    value: function onCheckboxChangeForGroup(event, key, index) {
      var selectedLoan = this.groupedData[key][index + this.pagingObject.pageSize * (this.pagingObject.page - 1)];
      selectedLoan.isCheck = event.target.checked;
      var isChecked = this.checkedKeys[key];
      this.groupedData[key].forEach(function (row) {
        return row.isCheck = isChecked;
      });
      this.updateSelectedLoanGroup(key, isChecked);
      this.updateMasterGroupLoanCheckbox();

      if (this.uniqueKeys.length !== this.selectedGroupLoans.length) {
        this.ionCheckBoxGroupLoan.indeterminate = true;
      } else if (this.uniqueKeys.length == this.selectedGroupLoans.length) {
        this.ionCheckBoxGroupLoan.indeterminate = false;
        this.ionCheckBoxGroupLoan.checked = true;
      }

      if (this.selectedGroupLoans.length == 0) {
        this.ionCheckBoxGroupLoan.indeterminate = false;
      }
    }
  }, {
    key: "updateSelectedLoanForGoups",
    value: function updateSelectedLoanForGoups(isChecked) {
      this.selectedGroupLoans = [];

      if (isChecked) {
        this.selectedGroupLoans = this.masterChecked ? (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.uniqueKeys) : [];
      }
    }
  }, {
    key: "updateSelectedLoanGroup",
    value: function updateSelectedLoanGroup(loan_key, isChecked) {
      console.log("updateSelectedLoan works");
      var index = this.selectedGroupLoans.indexOf(loan_key);

      if (isChecked && index === -1) {
        this.selectedGroupLoans.push(loan_key);
      } else if (!isChecked && index > -1) {
        this.selectedGroupLoans.splice(index, 1);
      }
    }
  }, {
    key: "updateMasterGroupLoanCheckbox",
    value: function updateMasterGroupLoanCheckbox() {
      // Determine if all rows are selected across all groups
      var allSelected = Object.values(this.groupedData).every(function (group) {
        return group.every(function (loan) {
          return loan.isCheck;
        });
      }); // Determine if at least one row is selected across all groups

      var someSelected = Object.values(this.groupedData).some(function (group) {
        return group.some(function (loan) {
          return loan.isCheck;
        });
      });

      if (allSelected) {
        this.isAllGroupsLoansSelected = true;
      } else if (!someSelected) {
        console.log("some selected");
        this.ionCheckBoxGroupLoan.checked = false;
        this.ionCheckBoxGroupLoan.indeterminate = false;
        this.isAllGroupsLoansSelected = false;
      }
    }
  }, {
    key: "groupsPaging",
    value: function groupsPaging(listInput, page) {
      var startIndex = (page - 1) * this.pageSize;
      var endIndex = startIndex + this.pageSize;
      return listInput === null || listInput === void 0 ? void 0 : listInput.slice(startIndex, endIndex);
    }
  }, {
    key: "updatePagedData",
    value: function updatePagedData() {
      var _this8 = this;

      var keysForCurrentPage = this.groupsPaging(this.uniqueKeys, this.currentPage); // Clear paged data and populate it with data for the current page

      this.pagedData = {};
      keysForCurrentPage.forEach(function (key) {
        _this8.pagedData[key] = _this8.groupedData[key];
      });
    }
  }, {
    key: "changePaginationPageGroupLoans",
    value: function changePaginationPageGroupLoans(newPage) {
      this.currentPage = newPage;
      this.updatePagedData();
    }
  }, {
    key: "totalPages",
    get: function get() {
      return Math.ceil(this.totalCount / this.pageSize);
    }
  }, {
    key: "goToFirstPage",
    value: function goToFirstPage() {
      this.changePaginationPageGroupLoans(1);
    } // Navigate to the last page

  }, {
    key: "goToLastPage",
    value: function goToLastPage() {
      this.changePaginationPageGroupLoans(this.totalPages);
    }
  }, {
    key: "confirmMakingDisbOrdersAlert",
    value: function confirmMakingDisbOrdersAlert() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5() {
        var _this9 = this;

        var message, selectedLoansNo, clientTypeDesc, header, alert;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                message = "";
                clientTypeDesc = "";
                header = "";

                if (this.selectedOption == "custom-checked") {
                  message = "هل انت متأكد من استخراج ملف الدفعات بصيغة CSV للعملاء المختارين ";
                } else {
                  message = "هل انت متأكد من تنفيذ امر الصرف للعملاء المختارين واستخراج ملف CSV ";
                }

                if (this.selectedOption == "custom-checked") {
                  header = "استخراج ملف الدفعات";
                } else {
                  header = "تنفيذ امر الصرف";
                }

                if (this.disbursementForm.controls.client_type_code.value == 1) {
                  selectedLoansNo = this.selectedSingleLoans.length;
                  clientTypeDesc = "عميل";
                } else {
                  selectedLoansNo = this.selectedGroupLoans.length;
                  clientTypeDesc = "مجموعة";
                }

                _context5.next = 8;
                return this.alertController.create({
                  header: header,
                  // subHeader: "اسم العميل: " + this.clientName,
                  message: message + "لعدد " + selectedLoansNo + " " + clientTypeDesc + "؟",
                  inputs: [{
                    name: "checkbox",
                    type: "checkbox",
                    label: "نعم اوافق.",
                    value: "confirm",
                    checked: false
                  }],
                  buttons: [{
                    text: "الغاء",
                    role: "cancel",
                    cssClass: "secondary",
                    handler: function handler(value) {
                      if (value === undefined) {}
                    }
                  }, {
                    text: "نعم",
                    handler: function handler(value) {
                      if (value.length > 0 && value[0] == "confirm") {
                        _this9.makeDisbOrders();
                      }
                    }
                  }]
                });

              case 8:
                alert = _context5.sent;
                _context5.next = 11;
                return alert.present();

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "makeDisbOrders",
    value: function makeDisbOrders() {
      var _this10 = this;

      this.showLoader = true;

      if (this.disbursementForm.valid) {
        if (this.selectedOption == "custom-checked") {
          console.log("im hereeeeee");
          this.getDisbOrdersCSV();
        } else {
          this.http.post(this.env.API_URL + "api/Loan/MakeDisbOrders?org_code=".concat(this.org_code_user_info, "&disb_co_id=").concat(this.disbursementLayoutForm.controls.disb_co_id.value, "&loan_key_string=").concat(this.selectedLoanString), {}).subscribe({
            next: function next(data) {
              _this10.alertService.InfoAlert("تم تنفيذ امر الصرف بنجاح", true);

              _this10.getDisbOrdersCSV();
            },
            error: function error(err) {
              console.log(err);

              _this10.alertService.showAlertError(err.error, false);
            }
          });
        }
      }
    } //region Exporting Excel (csv file)

  }, {
    key: "getDisbOrdersCSV",
    value: function getDisbOrdersCSV() {
      var _this11 = this;

      //if (this.disbursementForm.valid) {
      //this.showLoader = true;
      this.http.get(this.env.API_URL + "api/Loan/getDisbOrdersInfoForCSV?org_code=".concat(this.org_code_user_info, "&loan_key_string=").concat(this.selectedLoanString, "&disb_co_id=").concat(this.disbursementLayoutForm.controls.disb_co_id.value, "&client_type_code=").concat(this.disbursementForm.controls.client_type_code.value), {
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
          var filename = formattedDateTime + " " + _this11.ChosenCoName + " " + ".csv";
          var options = {
            autoBom: false
          };
          (0,file_saver__WEBPACK_IMPORTED_MODULE_10__.saveAs)(response, filename, options);
          console.log("response HERE", response); // this.showLoader = false;

          _this11.isActiveOfficerButt = false;
          console.log("response", response);
          _this11.showLoader = false; //window.location.reload();
        },
        error: function error(err) {
          console.log(err);
        }
      }); //}
    }
  }]);

  return DisbursementOrdersPage;
}();

DisbursementOrdersPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_8__.ReferencesService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_7__.EnvService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_9__.AlertService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_11__.pagingService
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_12__.sortingService
  }];
};

DisbursementOrdersPage.propDecorators = {
  ionCheckBoxSingleLoan: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: ["ionCheckBoxSingleLoan"]
  }],
  ionCheckBoxGroupLoan: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: ["ionCheckBoxGroupLoan"]
  }],
  radioGroup: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: ["radioGroup"]
  }]
};
DisbursementOrdersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: "app-disbursement-orders",
  template: _disbursement_orders_page_html_ngResource__WEBPACK_IMPORTED_MODULE_4__,
  styles: [_disbursement_orders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_5__]
})], DisbursementOrdersPage);


/***/ }),

/***/ 30070:
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/disbursement-orders/disbursement-orders.page.scss?ngResource ***!
  \************************************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.disabled {\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n.paddingTop30px {\n  padding-top: 30px;\n}\n\n.sms-grid .sms-row {\n  background: #cdcfd6;\n  border: 1px solid #aeb7ca;\n}\n\n.sms-grid ion-row {\n  border: 1px solid #aeb7ca;\n  border-bottom: 1px solid #aeb7ca;\n}\n\n.highlighted-row {\n  background-color: rgba(128, 128, 128, 0.434);\n}\n\n.ClickableIcon {\n  cursor: pointer;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.borderOne {\n  border-color: #cdcfd68f;\n  border-radius: 8px;\n  border-style: solid;\n  border-left-width: 3px;\n  border-left-color: #1e9ea5;\n  border-left-style: solid;\n  border-width: 3px;\n}\n\nion-item[id=radius] {\n  border: #cdcfd6;\n  border-radius: 8px;\n}\n\n.paddingLeft {\n  padding-left: 5px;\n}\n\n.justify-content-end {\n  -ms-flex-pack: end;\n      justify-content: end;\n}\n\n.center-checkbox {\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n\n.gridRadius {\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2J1cnNlbWVudC1vcmRlcnMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcbG9hbnNcXGRpc2J1cnNlbWVudC1vcmRlcnNcXGRpc2J1cnNlbWVudC1vcmRlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQUo7O0FER0E7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0FDQUY7O0FESUU7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FDREo7O0FESUU7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0FDRko7O0FET0E7RUFDRSw0Q0FBQTtBQ0pGOztBRE9BO0VBR0UsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsaUJBQUE7QUNQRjs7QUQrREE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQzVERjs7QURnRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUM3REY7O0FEZ0VBO0VBQ0UsaUJBQUE7QUM3REY7O0FEZ0VBO0VBQ0Usa0JBQUE7TUFBQSxvQkFBQTtBQzdERjs7QURnRUE7RUFDRSwwQkFBQTtNQUFBLHFCQUFBO0FDN0RGOztBRGdFQTtFQUNFLGtCQUFBO0FDN0RGIiwiZmlsZSI6ImRpc2J1cnNlbWVudC1vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5kaXNhYmxlZCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4ucGFkZGluZ1RvcDMwcHgge1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uc21zLWdyaWQge1xyXG4gIC5zbXMtcm93IHtcclxuICAgIGJhY2tncm91bmQ6ICNjZGNmZDY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWViN2NhO1xyXG4gIH1cclxuXHJcbiAgaW9uLXJvdyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYWViN2NhO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZWI3Y2E7XHJcbiAgfVxyXG59XHJcblxyXG4vL2RvIG5vdCBkZWxldGUgdGhpcyBjbGFzc1xyXG4uaGlnaGxpZ2h0ZWQtcm93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDM0KTtcclxufVxyXG5cclxuLkNsaWNrYWJsZUljb24ge1xyXG4gIC8vIHdpZHRoOiAyNXB4O1xyXG4gIC8vIGhlaWdodDogMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy9tYXJnaW4tdG9wOiA0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLy8gLnJvdGF0ZUljb24ge1xyXG4vLyAgIHJvdGF0ZTogOTBkZWc7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbi8vIH1cclxuLy8gLnNvcnRhYmxlQ29sIHtcclxuLy8gICBib3JkZXItd2lkdGg6IDVweDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuLy8gfVxyXG5cclxuLy8gLmFycm93LXVwLWRvd24ge1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICB3aWR0aDogMTJweDtcclxuLy8gICBoZWlnaHQ6IDEycHg7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBjb2xvciAwLjNzO1xyXG4vLyB9XHJcblxyXG4vLyAuYXJyb3ctdXAtZG93bjpiZWZvcmUsXHJcbi8vIC5hcnJvdy11cC1kb3duOmFmdGVyIHtcclxuLy8gICBjb250ZW50OiBcIlwiO1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB3aWR0aDogMDtcclxuLy8gICBoZWlnaHQ6IDA7XHJcbi8vICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuLy8gICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuLy8gICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XHJcbi8vIH1cclxuXHJcbi8vIC5hcnJvdy11cC1kb3duOmJlZm9yZSB7XHJcbi8vICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICMxZTllYTU1NDtcclxuLy8gICB0b3A6IDA7XHJcbi8vIH1cclxuXHJcbi8vIC5hcnJvdy11cC1kb3duOmFmdGVyIHtcclxuLy8gICBib3JkZXItdG9wOiA2cHggc29saWQgIzFlOWVhNTU0O1xyXG4vLyAgIGJvdHRvbTogMDtcclxuLy8gfVxyXG5cclxuLy8gLmFycm93LXVwLWRvd24uYWN0aXZlIHtcclxuLy8gICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4vLyAgIGNvbG9yOiAjODg4O1xyXG4vLyB9XHJcblxyXG4vLyAuYXJyb3ctdXAtZG93bi5hY3RpdmU6YmVmb3JlIHtcclxuLy8gICBib3JkZXItYm90dG9tLWNvbG9yOiAjMWU5ZWE1O1xyXG4vLyB9XHJcblxyXG4vLyAuYXJyb3ctdXAtZG93bi5hY3RpdmU6YWZ0ZXIge1xyXG4vLyAgIGJvcmRlci10b3AtY29sb3I6ICMxZTllYTU7XHJcbi8vIH1cclxuXHJcbi5ib3JkZXJPbmUge1xyXG4gIGJvcmRlci1jb2xvcjogI2NkY2ZkNjhmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAzcHg7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMxZTllYTU7XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogM3B4O1xyXG4gIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMWU5ZWE1IDIwJSwgdHJhbnNwYXJlbnQgMjAlKTtcclxufVxyXG5cclxuaW9uLWl0ZW1baWQ9XCJyYWRpdXNcIl0ge1xyXG4gIGJvcmRlcjogI2NkY2ZkNjtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nTGVmdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxufVxyXG5cclxuLmNlbnRlci1jaGVja2JveCB7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JpZFJhZGl1cyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiIsIi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufVxuXG4uZGlzYWJsZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ucGFkZGluZ1RvcDMwcHgge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLnNtcy1ncmlkIC5zbXMtcm93IHtcbiAgYmFja2dyb3VuZDogI2NkY2ZkNjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FlYjdjYTtcbn1cbi5zbXMtZ3JpZCBpb24tcm93IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FlYjdjYTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNhZWI3Y2E7XG59XG5cbi5oaWdobGlnaHRlZC1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDM0KTtcbn1cblxuLkNsaWNrYWJsZUljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uYm9yZGVyT25lIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2RjZmQ2OGY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDNweDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMxZTllYTU7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAzcHg7XG59XG5cbmlvbi1pdGVtW2lkPXJhZGl1c10ge1xuICBib3JkZXI6ICNjZGNmZDY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnBhZGRpbmdMZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi5jZW50ZXItY2hlY2tib3gge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ncmlkUmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */";

/***/ }),

/***/ 85993:
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/loans/disbursement-orders/disbursement-orders.page.html?ngResource ***!
  \************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<ion-title class=\"ion-padding-vertical\"> أمر الصرف </ion-title>\n<div class=\"row\">\n  <div class=\"col-md-12 grid-margin\">\n    <ion-card style=\"border-radius: 20px\">\n      <ion-card-content>\n        <div [hidden]=\"optionsGrid\">\n          <ion-grid>\n            <ion-radio-group #radioGroup value=\"custom-checked\" [(ngModel)]=\"selectedOption\">\n              <ion-row class=\"justify-content-center\">\n                <ion-col size-xs=\"12\" size-sm=\"7\" size-md=\"5\" size-lg=\"4\" size-xl=\"3\" class=\"borderOne ion-padding\">\n                  <ion-item lines=\"none\" id=\"radius\">\n                    <ion-icon name=\"document\" class=\"paddingLeft\"></ion-icon>\n                    <ion-label class=\"form-label\">استخراج ملف الدفعات</ion-label>\n                    <ion-radio value=\"custom-checked\" slot=\"end\" (click)=\"options('option1')\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n                <ion-col size=\"0\"></ion-col>\n                <ion-col size-xs=\"12\" size-sm=\"7\" size-md=\"5\" size-lg=\"4\" size-xl=\"3\" class=\"borderOne ion-padding\">\n                  <ion-item lines=\"none\" id=\"radius\">\n                    <ion-icon name=\"wallet\" class=\"paddingLeft\"></ion-icon>\n                    <ion-label class=\"form-label\">استخراج ملف الدفعات واصدار القروض</ion-label>\n                    <ion-radio value=\"custom\" slot=\"end\" (click)=\"options('option2')\"></ion-radio>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-radio-group>\n          </ion-grid>\n          <ion-row class=\"justify-content-center paddingTop30px\">\n            <ion-button (click)=\"selectOption()\">\n              <ion-icon name=\"arrow-back\"></ion-icon>\n            </ion-button>\n          </ion-row>\n        </div>\n        <form [formGroup]=\" disbursementForm\" [hidden]=\"paramsPage\">\n          <ion-grid>\n            <ion-row>\n              <!-- <ion-icon name=\"document\"></ion-icon> -->\n              <h1>{{optionName}}</h1>\n            </ion-row>\n          </ion-grid>\n          <ion-grid class=\"card\">\n            <ion-row class=\"justify-content-center\">\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  الفرع\n                </ion-label>\n                <ion-select interface=\"popover\" placeholder=\"اختار الفرع\" formControlName=\"branch_code\"\n                  class=\"subselect\" (ionChange)=\"onBranchChange()\">\n                  <ion-select-option [value]=\"0\">الكل</ion-select-option>\n                  <ion-select-option *ngFor=\"let branch of branchModelResponseModal\" [value]=\"branch.branch_code\">\n                    {{branch.branch_name}}\n                  </ion-select-option>\n                </ion-select>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isDisbursementFormValid && (disbursementForm.controls['branch_code'].hasError('required'))\"\n                  role=\"alert\">\n                  برجاء اختيار الفرع\n                </div>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  المندوب\n                </ion-label>\n                <ion-select [(ngModel)]=\"selectedOfficer\" interface=\"popover\" placeholder=\"اختار المندوب\"\n                  formControlName=\"officer_key\" class=\"subselect\" [disabled]=\"isActiveOfficerButt\"\n                  (ionChange)=\"officerIsChosen()\">\n                  <ion-select-option [value]=\"0\">الكل</ion-select-option>\n                  <ion-select-option *ngFor=\"let officer of officerResponseModal\" [value]=\"officer.officer_key\">\n                    {{officer.officer_name}}\n                  </ion-select-option>\n                </ion-select>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isDisbursementFormValid && (disbursementForm.controls['officer_key'].hasError('required'))\"\n                  role=\"alert\">\n                  برجاء اختيار المندوب\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"justify-content-center\">\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  عرض القروض - من تاريخ\n                </ion-label>\n                <ngx-datepicker (ionChange)=\"clear()\" [class.disabled]=\"disableDatepickerButt\"\n                  [parentForm]=\"disbursementForm\" parentFormControllerName=\"loan_start_date\"></ngx-datepicker>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isDisbursementFormValid && (disbursementForm.controls['loan_start_date'].hasError('pattern'))\"\n                  role=\"alert\">\n                  (yyyy-mm-dd)\n                </div>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isDisbursementFormValid && (disbursementForm.controls['loan_start_date'].hasError('DateIsGrater'))\"\n                  role=\"alert\">\n                  لا يمكن اختيار تاريخ بعد تاريخ اليوم الحالي\n                </div>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isDisbursementFormValid && (disbursementForm.controls['loan_start_date'].hasError('required'))\"\n                  role=\"alert\">\n                  يجب اختيار تاريخ البداية\n                </div>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  الى تاريخ\n                </ion-label>\n                <ngx-datepicker (ionChange)=\"clear()\" [class.disabled]=\"disableDatepickerButt\"\n                  [parentForm]=\"disbursementForm\" parentFormControllerName=\"loan_end_date\"></ngx-datepicker>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isDisbursementFormValid && (disbursementForm.controls['loan_end_date'].hasError('pattern'))\"\n                  role=\"alert\">\n                  (yyyy-mm-dd)\n                </div>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isDisbursementFormValid && (disbursementForm.controls['loan_end_date'].hasError('DateIsGrater'))\"\n                  role=\"alert\">\n                  لا يمكن اختيار تاريخ بعد تاريخ اليوم الحالي\n                </div>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isDisbursementFormValid && (disbursementForm.controls['loan_end_date'].hasError('required'))\"\n                  role=\"alert\">\n                  يجب اختيار تاريخ النهاية\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"justify-content-center\">\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  مصدر التمويل\n                </ion-label>\n                <ion-select interface=\"popover\" placeholder=\"اختار مصدر التمويل\" [disabled]=\"disableIonSelect\"\n                  formControlName=\"funder_code\" class=\"subselect\" (ionChange)=\"clear()\">\n                  <ion-select-option [value]=\"0\">الكل</ion-select-option>\n                  <ion-select-option *ngFor=\"let Funder of Funders\" [value]=\"Funder.funder_code\">\n                    {{Funder.funder_name}}\n                  </ion-select-option>\n                </ion-select>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isDisbursementFormValid && (disbursementForm.controls['funder_code'].hasError('required'))\"\n                  role=\"alert\">\n                  برجاء اختيار مصدر التمويل\n                </div>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  نوع الاقتراض\n                </ion-label>\n                <ion-select interface=\"popover\" placeholder=\"اختار نوع الاقتراض\" [disabled]=\"disableIonSelect\"\n                  formControlName=\"client_type_code\" class=\"subselect\" (ionChange)=\"onClientTypeChange()\">\n                  <ion-select-option [value]=\"1\">فردى</ion-select-option>\n                  <ion-select-option [value]=\"2\">مجموعة</ion-select-option>\n                </ion-select>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isDisbursementFormValid && (disbursementForm.controls['client_type_code'].hasError('required'))\"\n                  role=\"alert\">\n                  برجاء اختيار نوع الاقتراض\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"justify-content-center\" [hidden]=\"isLoanStatusActive\">\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  حالة القروض\n                </ion-label>\n                <ion-select interface=\"popover\" placeholder=\"اختار حالة القروض\" [disabled]=\"disableIonSelect\"\n                  formControlName=\"loan_status\" class=\"subselect\" (ionChange)=\"onLoanStatusChange()\">\n                  <ion-select-option [value]=\"0\">غير مصدر</ion-select-option>\n                  <ion-select-option [value]=\"1\">مصدر</ion-select-option>\n                </ion-select>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isDisbursementFormValid && (disbursementForm.controls['loan_status'].hasError('required'))\"\n                  role=\"alert\">\n                  برجاء اختيار حالة القروض\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"justify-content-center paddingTop30px\">\n              <ion-button (click)=\"backButt()\" color=\"danger\">\n                <ion-icon name=\"arrow-forward\"></ion-icon>\n              </ion-button>\n              <ion-button (click)=\"getDisbOrders()\">\n                <ion-icon name=\"search\"></ion-icon>\n              </ion-button>\n              <!-- \n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <div class=\"arrow-up-down\" [class.active]=\"isArrowActive\" (click)=\"toggleArrow()\"></div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid> -->\n            </ion-row>\n            <div *ngIf=\"showSingleDataGrid\" class=\"ion-padding table-responsive\">\n              <ion-grid [fixed]=\"true\" style=\"min-width: 1350px;\" class=\"sms-grid scroll-container \">\n                <ion-row class=\"ion-align-items-center header-row\">\n                  <ion-col size=\"0.2\" class=\"text-center\">\n                    <ion-badge>\n                      {{this.DisbOrdersResponseModal.length }}\n                      /\n                      {{this.selectedSingleLoans.length }}\n                    </ion-badge>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label color=\"dark\">\n                      <ion-checkbox type=\"checkbox\" #ionCheckBoxSingleLoan (ionChange)=\"onCheckboxMasterChange($event)\"\n                        [checked]=\"isAllSingleLoansSelected\"></ion-checkbox>\n                    </ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label color=\"dark\">كود العميل</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\" (click)=\"sortingTable(DisbOrdersResponseModal , 'client_name')\">\n                    <ion-icon class=\"ion-icon-class ClickableIcon\" [name]=\"sortingIconClass\"\n                      *ngIf=\"sortingIconParam == 'client_name'\"></ion-icon>\n                    <ion-label color=\"dark \">اسم العميل</ion-label>\n                    <!-- <ion-col>\n                      <div class=\"arrow-up-down\" [class.active]=\"isArrowActive\" (click)=\"toggleArrow()\"></div>\n                    </ion-col> -->\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label color=\"dark\">نوع الاقتراض</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label color=\"dark\">الرقم القومي</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label color=\"dark\">رقم التليفون</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\" (click)=\"sortingTable(DisbOrdersResponseModal , 'loan_am')\">\n                    <ion-icon class=\"ion-icon-class ClickableIcon\" [name]=\"sortingIconClass\"\n                      *ngIf=\"sortingIconParam == 'loan_am'\"></ion-icon>\n                    <ion-label color=\"dark\">مبلغ القرض</ion-label>\n                    <span class=\"ClickableIcon\">\n                      <span class=\"arrow-up\"></span>\n                      <span class=\"arrow-down\"></span>\n                    </span>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label color=\"dark\">حالة القرض</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\" (click)=\"sortingTable(DisbOrdersResponseModal , 'loan_date')\">\n                    <ion-icon class=\"ion-icon-class ClickableIcon\" [name]=\"sortingIconClass\"\n                      *ngIf=\"sortingIconParam == 'loan_date'\"></ion-icon>\n                    <ion-label color=\"dark\">تاريخ القرض</ion-label>\n                  </ion-col>\n                  <!-- *ngIf=\"this.disbursementForm.controls.branch_code.value==0\" -->\n                  <ion-col class=\"text-center\">\n                    <ion-label color=\"dark\">الفرع</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\" (click)=\"sortingTable(DisbOrdersResponseModal , 'officer_name')\">\n                    <ion-icon class=\"ion-icon-class ClickableIcon\" [name]=\"sortingIconClass\"\n                      *ngIf=\"sortingIconParam == 'officer_name'\"></ion-icon>\n                    <ion-label color=\"dark\">المندوب</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\" (click)=\"sortingTable(DisbOrdersResponseModal , 'funder_name')\">\n                    <ion-icon class=\"ion-icon-class ClickableIcon\" [name]=\"sortingIconClass\"\n                      *ngIf=\"sortingIconParam == 'funder_name'\"></ion-icon>\n                    <ion-label color=\"dark\">مصدر التمويل</ion-label>\n                  </ion-col>\n                </ion-row>\n                <!-- this.pagingService.Paging(\n                  this.DisbOrdersResponseModal,\n                  pagingObject.page,\n                  pagingObject.pageSize\n                ) -->\n                <ion-row class=\"ion-align-items-center details-row \" *ngFor=\"let disb of this.pagingService.Paging(\n                  this.DisbOrdersResponseModal,\n                  pagingObject.page\n                ); let i = index\" [class.highlighted-row]=\"selectedRowIndex === i\" (click)=\"selectGridRow(i)\">\n                  <ion-col class=\"text-center\" size=\"0.2\"></ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>\n                      <ion-checkbox [checked]=\"disb.isCheck\" (ionChange)=\"onCheckboxChange($event, disb.loan_key , i)\"\n                        class=\"justify\"></ion-checkbox>\n                    </ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ disb.client_code }} / {{ disb.branch_code }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ disb.client_name }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ disb.client_type_desc }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ disb.nation_id }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ disb.mobile_1 }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ disb.loan_am|number: '1.2-2' : 'en' }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ disb.loan_status_desc }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ disb.loan_date|\n                      date:'yyyy-MM-dd' }}</ion-label>\n                  </ion-col>\n                  <!-- *ngIf=\"this.disbursementForm.controls.branch_code.value==0\" -->\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ disb.branch_name }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ disb.officer_name }}</ion-label>\n                  </ion-col>\n                  <ion-col class=\"text-center\">\n                    <ion-label>{{ disb.funder_name }}</ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <!-- <ion-grid [fixed]=\"true\" style=\"min-width: 1350px;\" class=\"sms-grid scroll-container\">\n                <ion-row *ngFor=\"let key of uniqueKeys\">\n                  <ion-col class=\"text-center\">\n                    <ion-label>\n      \n                      <ion-checkbox class=\"justify\" [(ngModel)]=\"checkedKeys[key]\"\n                        (ionChange)=\"onCheckboxChangeGroup(key)\"></ion-checkbox>\n                    </ion-label>\n                  </ion-col>\n\n                  <ion-col size=\"11\">\n\n                    <div *ngFor=\"let row of groupedData[key]\">\n                      {{ row.loan_key }} - {{ row.group_name }}\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid> -->\n\n\n              <app-pagination [page]=\"pagingObject.page\" [collectionSize]=\"DisbOrdersResponseModal?.length\"\n                (pageChange)=\"changePaginationPage($event);\"></app-pagination>\n            </div>\n          </ion-grid>\n        </form>\n        <div *ngIf=\"showGroupDataGrid\" class=\"table-responsive\" class=\"ion-padding table-responsive\">\n          <ion-grid [fixed]=\"true\" style=\"min-width: 1350px;\" class=\"sms-grid scroll-container\">\n            <ion-row class=\"ion-align-items-center header-row\">\n              <ion-col size=\"0.3\" class=\"text-center\">\n                <ion-badge>\n                  {{this.uniqueKeys.length }}\n                  /\n                  {{this.selectedGroupLoans.length }}\n                </ion-badge>\n              </ion-col>\n              <ion-col size=\"0.7\" class=\"text-center\">\n                <ion-label color=\"dark\">\n                  <ion-checkbox type=\"checkbox\" #ionCheckBoxGroupLoan\n                    (ionChange)=\"onCheckboxMasterChangeForGroups($event)\" [(ngModel)]=\"masterChecked\"\n                    [checked]=\"isAllGroupsLoansSelected\"></ion-checkbox>\n                </ion-label>\n              </ion-col>\n              <ion-col class=\"text-center\">\n                <ion-label color=\"dark\">كود العميل</ion-label>\n              </ion-col>\n              <!-- <ion-col class=\"text-center\" (click)=\"sortingTable(DisbOrdersResponseModal , 'client_name')\">\n                <ion-icon class=\"ion-icon-class ClickableIcon\" [name]=\"sortingIconClass\"\n                  *ngIf=\"sortingIconParam == 'client_name'\"></ion-icon>\n                <ion-label color=\"dark \">اسم العميل</ion-label>\n              </ion-col> -->\n              <ion-col class=\"text-center\">\n                <ion-label color=\"dark \">اسم العميل</ion-label>\n              </ion-col>\n              <ion-col class=\"text-center\">\n                <ion-label color=\"dark\">نوع الاقتراض</ion-label>\n              </ion-col>\n              <ion-col class=\"text-center\" *ngIf=\"isGroup\">\n                <ion-label color=\"dark\">اسم المجموعة</ion-label>\n              </ion-col>\n              <ion-col class=\"text-center\">\n                <ion-label color=\"dark\">الرقم القومي</ion-label>\n              </ion-col>\n              <ion-col class=\"text-center\">\n                <ion-label color=\"dark\">رقم التليفون</ion-label>\n              </ion-col>\n              <ion-col class=\"text-center\">\n                <ion-label color=\"dark\">مبلغ القرض</ion-label>\n              </ion-col>\n              <ion-col class=\"text-center\">\n                <ion-label color=\"dark\">حالة القرض</ion-label>\n              </ion-col>\n              <ion-col class=\"text-center\">\n                <ion-label color=\"dark\">تاريخ القرض</ion-label>\n              </ion-col>\n              <ion-col class=\"text-center\">\n                <ion-label color=\"dark\">الفرع</ion-label>\n              </ion-col>\n              <ion-col class=\"text-center\">\n                <ion-label color=\"dark\">المندوب</ion-label>\n              </ion-col>\n              <ion-col class=\"text-center\">\n                <ion-label color=\"dark\">مصدر التمويل</ion-label>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngFor=\"let key of pagedData  | keyvalue ; let i = index\" class=\"details-row\">\n              <ion-col class=\"text-center\" size=\"0.3\"></ion-col>\n              <ion-col size=\"0.7\" class=\"text-center center-checkbox\">\n                <ion-label>\n                  <ion-checkbox class=\"justify \" [(ngModel)]=\"checkedKeys[key.key]\"\n                    (ionChange)=\"onCheckboxChangeForGroup($event,key.key,i)\"></ion-checkbox>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"11\">\n                <div>\n                  <ion-row class=\"ion-align-items-center details-row\" *ngFor=\"let row of key.value\">\n                    <ion-col class=\"text-center\">\n                      <ion-label>{{ row.client_code }} / {{ row.branch_code }}</ion-label>\n                    </ion-col>\n                    <ion-col class=\"text-center\">\n                      <ion-label>{{ row.client_name }}</ion-label>\n                    </ion-col>\n                    <ion-col class=\"text-center\">\n                      <ion-label>{{ row.client_type_desc }}</ion-label>\n                    </ion-col>\n                    <ion-col class=\"text-center\">\n                      <ion-label>{{ row.group_name }}</ion-label>\n                    </ion-col>\n                    <ion-col class=\"text-center\">\n                      <ion-label>{{ row.nation_id }}</ion-label>\n                    </ion-col>\n                    <ion-col class=\"text-center\">\n                      <ion-label>{{ row.mobile_1 }}</ion-label>\n                    </ion-col>\n                    <ion-col class=\"text-center\">\n                      <ion-label>{{ row.loan_am|number: '1.2-2' : 'en' }}</ion-label>\n                    </ion-col>\n                    <ion-col class=\"text-center\">\n                      <ion-label>{{ row.loan_status_desc }}</ion-label>\n                    </ion-col>\n                    <ion-col class=\"text-center\">\n                      <ion-label>{{ row.loan_date|\n                        date:'yyyy-MM-dd' }}</ion-label>\n                    </ion-col>\n                    <ion-col class=\"text-center\">\n                      <ion-label>{{ row.branch_name }}</ion-label>\n                    </ion-col>\n                    <ion-col class=\"text-center\">\n                      <ion-label>{{ row.officer_name }}</ion-label>\n                    </ion-col>\n                    <ion-col class=\"text-center\">\n                      <ion-label>{{ row.funder_name }}</ion-label>\n                    </ion-col>\n                  </ion-row>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n          <ion-grid>\n            <ion-row class=\"justify-content-center\">\n              <ion-button (click)=\"goToFirstPage()\" [disabled]=\"currentPage === 1\">\n                <ion-icon name=\"play-forward-outline\" class=\"pagination-icon \" id=\"child\"></ion-icon>\n              </ion-button>\n              <ion-button (click)=\"changePaginationPageGroupLoans(currentPage - 1)\" [disabled]=\"currentPage === 1\">\n                <ion-icon name=\"chevron-forward-outline\" class=\"pagination-icon \" id=\"child\"></ion-icon>\n              </ion-button>\n              <span class=\"ion-padding\">{{ currentPage }} من {{ totalPages }}</span>\n              <ion-button (click)=\" changePaginationPageGroupLoans(currentPage + 1)\"\n                [disabled]=\"currentPage >= totalPages\">\n                <ion-icon name=\"chevron-back-outline\" class=\"pagination-icon \" id=\"child\"></ion-icon>\n              </ion-button>\n              <ion-button (click)=\"goToLastPage()\" [disabled]=\"currentPage >= totalPages\">\n                <ion-icon name=\"play-back-outline\" class=\"pagination-icon \" id=\"child\"></ion-icon>\n              </ion-button>\n            </ion-row>\n          </ion-grid>\n        </div>\n        <form [formGroup]=\"disbursementLayoutForm\">\n          <ion-grid *ngIf=\"showLayoutOption\" class=\"card\">\n            <ion-row class=\"justify-content-center paddingTop30px\">\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  نموذج الملف المستخرج\n                </ion-label>\n                <ion-select interface=\"popover\" placeholder=\"اختار نموذج التقرير المستخرج\" [disabled]=\"disableIonSelect\"\n                  formControlName=\"disb_co_id\" class=\"subselect\">\n                  <!-- (keyup.enter)=\"onEnter()\" -->\n                  <ion-select-option *ngFor=\"let disbCo of DisbCompaniesResponseModal\" [value]=\"disbCo.ref_code\">\n                    {{disbCo.ref_desc}}\n                  </ion-select-option>\n                </ion-select>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isDisbursementLayoutFormValid && (disbursementLayoutForm.controls['disb_co_id'].hasError('required'))\"\n                  role=\"alert\">\n                  برجاء اختيار نموذج التقرير المستخرج\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"justify-content-center paddingTop30px\">\n              <ion-button (click)=\"collectClientsLoanKeys()\">\n                <ion-icon *ngIf=\"this.selectedOption == 'custom'\" name=\"save-outline\"></ion-icon>\n                <ion-icon *ngIf=\"this.selectedOption == 'custom-checked'\" name=\"eye\"></ion-icon>\n              </ion-button>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_disbursement-orders_disbursement-orders_module_ts.js.map