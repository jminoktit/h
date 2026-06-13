"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_officer_officer-target_officer-target_module_ts"],{

/***/ 35086:
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/officer/officer-target/officer-target-routing.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfficerTargetPageRoutingModule": function() { return /* binding */ OfficerTargetPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _officer_target_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./officer-target.page */ 71116);






var routes = [{
  path: '',
  component: _officer_target_page__WEBPACK_IMPORTED_MODULE_2__.OfficerTargetPage
}];

var OfficerTargetPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function OfficerTargetPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, OfficerTargetPageRoutingModule);
});

OfficerTargetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], OfficerTargetPageRoutingModule);


/***/ }),

/***/ 74674:
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/officer/officer-target/officer-target.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfficerTargetPageModule": function() { return /* binding */ OfficerTargetPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _officer_target_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./officer-target-routing.module */ 35086);
/* harmony import */ var _officer_target_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./officer-target.page */ 71116);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var OfficerTargetPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function OfficerTargetPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, OfficerTargetPageModule);
});

OfficerTargetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _officer_target_routing_module__WEBPACK_IMPORTED_MODULE_2__.OfficerTargetPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_officer_target_page__WEBPACK_IMPORTED_MODULE_3__.OfficerTargetPage]
})], OfficerTargetPageModule);


/***/ }),

/***/ 71116:
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/officer/officer-target/officer-target.page.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfficerTargetPage": function() { return /* binding */ OfficerTargetPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _officer_target_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./officer-target.page.html?ngResource */ 45322);
/* harmony import */ var _officer_target_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./officer-target.page.scss?ngResource */ 96721);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_core_services_scrolling_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/scrolling.service */ 68931);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_services_officer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/officer.service */ 84598);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ 97064);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ 14190);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);





















var OfficerTargetPage = /*#__PURE__*/function () {
  function OfficerTargetPage(formBuilder, env, http, sortingService, authService, datePipe, cdref, alertService, ScrollingService, referencesServices, officerServices, inputMaskingService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OfficerTargetPage);

    this.formBuilder = formBuilder;
    this.env = env;
    this.http = http;
    this.sortingService = sortingService;
    this.authService = authService;
    this.datePipe = datePipe;
    this.cdref = cdref;
    this.alertService = alertService;
    this.ScrollingService = ScrollingService;
    this.referencesServices = referencesServices;
    this.officerServices = officerServices;
    this.inputMaskingService = inputMaskingService;
    this.officersObjectsFromDatabase = [];
    this.officersAfterFiltering = [];
    this.checkBoxResult = [];
    this.prevMonthYear = [];
    this.nextMonthYear = [];
    this.targetStartDate = [];
    this.targetEndDate = [];
    this.isNewOfficersTargetForm = false;
    this.showLoader = false;
    this.checkBoxMaster = false; //#endregion
    //#region FormsControl

    this.newOfficersTargetForm = this.formBuilder.group({
      target_group: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      branch_code: [""],
      officer_name: [""],
      target_group_start_date: [""],
      target_group_end_date: [""],
      target_start_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      target_end_date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      target_number: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern("[0-9]*")]],
      target_amount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.pattern("[0-9]*")]]
    });

    this.convertDateToArabicMonths = function (date) {
      var monthNames = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
      var inputDate = new Date(date);
      var month = (0,date_fns__WEBPACK_IMPORTED_MODULE_14__["default"])(inputDate);
      var year = (0,date_fns__WEBPACK_IMPORTED_MODULE_15__["default"])(inputDate);
      return monthNames[month] + " " + String(year);
    };
  } //#endregion
  //#region Angular Hooks


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(OfficerTargetPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.authService.getUserInfo();

              case 2:
                this.userInfoToken = _context.sent;
                _context.next = 5;
                return this.referencesServices.getAllBranches();

              case 5:
                this.IBranch = _context.sent;
                this.targetStartDate = this.generateMonthYearDropDown(12, 12);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      this.cdref.detectChanges();
    } //#endregion
    //#region onChanging

  }, {
    key: "onChangeTargetStartDate",
    value: function onChangeTargetStartDate() {
      var _this = this;

      this.targetEndDate = this.generateMonthYearDropDown(12, 12).filter(function (a) {
        return a.date >= _this.newOfficersTargetForm.controls["target_start_date"].value;
      });
      this.newOfficersTargetForm.patchValue({
        target_end_date: this.newOfficersTargetForm.controls["target_start_date"].value
      });
    }
  }, {
    key: "onChangeTargetEndDate",
    value: function onChangeTargetEndDate() {
      this.checkOfficerTargetHistory();
    }
  }, {
    key: "onCheckboxChange",
    value: function onCheckboxChange(event, officer) {
      var check = event.target.checked;

      if (check) {
        officer.isChecked = true;
        this.checkBoxResult.push(officer);
      } else {
        officer.isChecked = false;
        this.checkBoxResult = this.checkBoxResult.filter(function (obj) {
          return obj !== officer;
        });
      }

      if (this.checkBoxMaster && !check) {
        officer.isChecked = check;
        this.checkBoxResult = this.checkBoxResult.filter(function (obj) {
          return obj !== officer;
        });
        this.checkBoxMaster = false;
      }

      if (!this.checkBoxMaster && check && this.checkBoxResult.length === this.officersAfterFiltering.length) {
        this.checkBoxMaster = true;
      }

      console.log("checkBoxResult", this.checkBoxResult); // if (check) {
      //   officer.isChecked = true;
      //   this.checkBoxResult.push(officer);
      // } else {
      //   const index = this.checkBoxResult.indexOf(officer);
      //   if (index > -1) {
      //     officer.isChecked = false;
      //     this.checkBoxResult.splice(index, 1);
      //   }
      // }
      // if (
      //   !check &&
      //   this.checkBoxResult.length == this.officersAfterFiltering.length - 1
      // ) {
      //   this.checkBoxMaster = false;
      // } else if (
      //   check &&
      //   this.checkBoxResult.length == this.officersAfterFiltering.length
      // ) {
      //   this.checkBoxMaster = true;
      // }
    }
  }, {
    key: "onCheckboxMasterChange",
    value: function onCheckboxMasterChange(event) {
      var check = event.target.checked;
      this.checkBoxMaster = check;

      if (check && this.checkBoxResult.length === 0) {
        this.officersAfterFiltering = this.officersAfterFiltering.map(function (officer) {
          return Object.assign(Object.assign({}, officer), {
            isChecked: check
          });
        });
        this.checkBoxResult = this.officersAfterFiltering;
      }

      if (!check && this.checkBoxResult.length === this.officersAfterFiltering.length) {
        this.officersAfterFiltering = this.officersAfterFiltering.map(function (officer) {
          return Object.assign(Object.assign({}, officer), {
            isChecked: check
          });
        });
        this.checkBoxResult = [];
      }

      if (check && this.checkBoxResult.length > 0 && this.checkBoxResult.length < this.officersAfterFiltering.length) {
        this.officersAfterFiltering = this.officersAfterFiltering.map(function (officer) {
          return Object.assign(Object.assign({}, officer), {
            isChecked: check
          });
        });
        this.checkBoxResult = this.officersAfterFiltering;
      } // if (
      //   !check &&
      //   this.checkBoxResult.length == this.officersAfterFiltering.length - 1
      // ) {
      //   return;
      // } else if (
      //   check &&
      //   this.checkBoxResult.length == this.officersAfterFiltering.length
      // ) {
      //   return;
      // }
      // else {
      //   this.checkBoxResult = [];
      //   if (check) {
      //     this.officersAfterFiltering = this.officersAfterFiltering.map((x) => ({
      //       ...x,
      //       isChecked: check,
      //     }));
      //     this.checkBoxResult = this.officersAfterFiltering;
      //   } else {
      //     this.officersAfterFiltering = this.officersAfterFiltering.map((x) => ({
      //       ...x,
      //       isChecked: check,
      //     }));
      //   }
      // }

    }
  }, {
    key: "changeTargetGroup",
    value: function changeTargetGroup() {
      this.officersObjectsFromDatabase = [];
      this.officersAfterFiltering = [];
      this.checkBoxResult = [];
      this.prevMonthYear = null;
      this.nextMonthYear = null;
      this.newOfficersTargetForm.patchValue({
        checkBox: false
      });
      this.checkBoxMaster = false;
      this.newOfficersTargetForm.patchValue({
        branch_code: null
      });
      this.newOfficersTargetForm.patchValue({
        target_group_start_date: null
      });
      this.newOfficersTargetForm.patchValue({
        target_group_end_date: null
      });
      this.newOfficersTargetForm.patchValue({
        target_start_date: null
      });
      this.newOfficersTargetForm.patchValue({
        target_end_date: null
      });

      if (this.newOfficersTargetForm.controls["target_group"].value == "1") {
        this.getAllOfficers();
      } else if (this.newOfficersTargetForm.controls["target_group"].value == "2") {
        this.getAllOfficers();
      } else if (this.newOfficersTargetForm.controls["target_group"].value == "3") {
        this.getAllOfficers();
      }
    }
  }, {
    key: "changeOfficerName",
    value: function changeOfficerName() {
      this.checkBoxMaster = false;
      var officer_name = this.newOfficersTargetForm.get("officer_name").value.toLowerCase();
      this.officersAfterFiltering = this.officersAfterFiltering.map(function (officer) {
        if (!officer.officerInformation.officer_name.toLowerCase().includes(officer_name)) {
          return Object.assign(Object.assign({}, officer), {
            showInGrid: false
          });
        } else {
          return Object.assign(Object.assign({}, officer), {
            showInGrid: true
          });
        }
      });
    }
  }, {
    key: "changeBranchCode",
    value: function changeBranchCode() {
      var _this2 = this;

      this.newOfficersTargetForm.patchValue({
        checkBox: false
      });
      this.checkBoxMaster = false;
      this.checkBoxResult = [];
      this.officersAfterFiltering = [];
      this.officersObjectsFromDatabase.filter(function (v) {
        return v.branch_code == _this2.newOfficersTargetForm.controls["branch_code"].value;
      }).map(function (x) {
        return _this2.officersAfterFiltering.push({
          officerInformation: x,
          hasTargetHistory: false,
          targetHistory: {
            officerKey: undefined,
            detailsSections: []
          },
          isChecked: false,
          showInGrid: true
        });
      });
    }
  }, {
    key: "onChangeTargetGroupDate",
    value: function onChangeTargetGroupDate(startDate, endDate) {
      var _this3 = this;

      var isBetweenDates = function isBetweenDates(date, startDate, endDate) {
        var dateObj = new Date(date);
        var startObj = new Date(startDate);
        var endObj = new Date(endDate);
        return dateObj >= startObj && dateObj <= endObj;
      };

      this.officersAfterFiltering = [];
      var officers = this.officersObjectsFromDatabase || [];
      var filteredOfficers = officers.filter(function (officer) {
        return isBetweenDates(officer.officer_emp_date, startDate, endDate);
      });
      filteredOfficers.forEach(function (off) {
        _this3.officersAfterFiltering.push({
          officerInformation: off,
          hasTargetHistory: false,
          targetHistory: {
            officerKey: undefined,
            detailsSections: []
          },
          isChecked: false,
          showInGrid: true
        });
      });
    } //#endregion
    //#region Buttons

  }, {
    key: "addingNewTarget",
    value: function addingNewTarget() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var officersDetails, request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.newOfficersTargetForm.controls["target_group"].value == "1" && this.newOfficersTargetForm.controls["branch_code"].value == null)) {
                  _context2.next = 4;
                  break;
                }

                _context2.next = 3;
                return this.alertService.showAlertError("برجاء اختيار الفرع", false);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 4:
                if (!(this.checkBoxResult.length <= 0)) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 7;
                return this.alertService.showAlertError("برجاء اختيار المندوب", false);

              case 7:
                return _context2.abrupt("return", _context2.sent);

              case 8:
                if (!(this.newOfficersTargetForm.controls["target_group"].value == "3" && this.newOfficersTargetForm.controls["target_group_start_date"].value == null && this.newOfficersTargetForm.controls["target_group_end_date"].value == null)) {
                  _context2.next = 12;
                  break;
                }

                _context2.next = 11;
                return this.alertService.showAlertError("برجاء اختيار تاريخ الفترة", false);

              case 11:
                return _context2.abrupt("return", _context2.sent);

              case 12:
                this.isNewOfficersTargetForm = true;

                if (!(this.newOfficersTargetForm.valid == true)) {
                  _context2.next = 37;
                  break;
                }

                _context2.next = 16;
                return this.alertService.SaveAlert();

              case 16:
                if (_context2.sent) {
                  _context2.next = 18;
                  break;
                }

                return _context2.abrupt("return");

              case 18:
                _context2.prev = 18;
                this.showLoader = true;
                officersDetails = this.checkBoxResult.map(function (x) {
                  return x.officerInformation;
                });
                request = {
                  officer_key: officersDetails.map(function (a) {
                    return String(a.officer_key);
                  }),
                  period_type: "2",
                  target_start_date: this.newOfficersTargetForm.controls["target_start_date"].value,
                  target_end_date: this.newOfficersTargetForm.controls["target_end_date"].value,
                  target_number: this.newOfficersTargetForm.controls["target_number"].value,
                  target_amount: this.newOfficersTargetForm.controls["target_amount"].value
                };
                _context2.next = 24;
                return this.http.post(this.env.API_URL + "api/Officer/InsertOfficerTarget", request).toPromise();

              case 24:
                this.alertService.showAlertConfirm("لقد تم الحفظ بنجاح", true);
                _context2.next = 32;
                break;

              case 27:
                _context2.prev = 27;
                _context2.t0 = _context2["catch"](18);
                console.error(_context2.t0);
                _context2.next = 32;
                return this.alertService.showAlertError(_context2.t0.error, false);

              case 32:
                _context2.prev = 32;
                this.showLoader = false;
                return _context2.finish(32);

              case 35:
                _context2.next = 38;
                break;

              case 37:
                this.ScrollingService.findInvalidControls(this.newOfficersTargetForm);

              case 38:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[18, 27, 32, 35]]);
      }));
    }
  }, {
    key: "officerDetailsBtn",
    value: function officerDetailsBtn(officer) {
      this.officerDetailModel.isOpen = true;
      this.officerDetailModel.htmlAttributes = {
        officer: officer
      };
    } //#endregion
    //#region Sorting

  }, {
    key: "sortingTable",
    value: function sortingTable(data, param) {
      this.sortingService.sortByParameter(data, param);
      this.sortingIconClass = this.sortingService.sortOrder === "asc" ? "arrow-down-outline" : "arrow-up-outline";
      this.sortingIconParam = param;
    } //#endregion

  }, {
    key: "generateMonthYearDropDown",
    value: function generateMonthYearDropDown(numberOfPrevMonths, numberOfNextMonths) {
      var date1 = new Date();
      var date2 = new Date();
      var prevMonths = [];
      var nextMonths = [];
      var monthNames = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
      var currentMonth = date1.getMonth(); // Generate previous months

      for (var i = numberOfPrevMonths; i > 0; i--) {
        currentMonth--;

        if (currentMonth < 0) {
          currentMonth = 11;
          date1.setFullYear(date1.getFullYear() - 1);
        }

        prevMonths.unshift({
          name: monthNames[currentMonth] + " " + date1.getFullYear(),
          date: (0,date_fns__WEBPACK_IMPORTED_MODULE_17__["default"])(new Date(date1.getFullYear(), currentMonth, 1), "yyyy-MM-dd")
        });
      } // Reset to the original month and year


      currentMonth = date2.getMonth(); // Generate current month and future months

      for (var j = 0; j <= numberOfNextMonths; j++) {
        nextMonths.push({
          name: monthNames[currentMonth] + " " + date2.getFullYear(),
          date: (0,date_fns__WEBPACK_IMPORTED_MODULE_17__["default"])(new Date(date2.getFullYear(), currentMonth, 1), "yyyy-MM-dd")
        });
        currentMonth++;

        if (currentMonth > 11) {
          currentMonth = 0;
          date2.setFullYear(date2.getFullYear() + 1);
        }
      }

      return prevMonths.concat(nextMonths);
    }
  }, {
    key: "checkOfficerTargetHistory",
    value: function checkOfficerTargetHistory() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var targetStartDateControl, targetEndDateControl, officersToShow, requestObject, targetHistoryDatabaseResponse;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                targetStartDateControl = this.newOfficersTargetForm.controls["target_start_date"].value;
                targetEndDateControl = this.newOfficersTargetForm.controls["target_end_date"].value;
                officersToShow = this.officersAfterFiltering;

                if (!(officersToShow.length === 0 || targetStartDateControl === null || targetEndDateControl === null)) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return");

              case 5:
                _context3.prev = 5;
                this.showLoader = true;
                requestObject = {
                  officer_key: officersToShow.map(function (a) {
                    return String(a.officerInformation.officer_key);
                  }),
                  target_start_date: targetStartDateControl,
                  target_end_date: targetEndDateControl
                };
                _context3.next = 10;
                return this.officerServices.getOfficerTargetHistory(requestObject).toPromise();

              case 10:
                targetHistoryDatabaseResponse = _context3.sent;
                this.officersAfterFiltering = officersToShow.map(function (officer) {
                  var matchingResponse = targetHistoryDatabaseResponse.find(function (res) {
                    return res.officerKey === Number(officer.officerInformation.officer_key);
                  });

                  if (matchingResponse) {
                    officer.hasTargetHistory = true;
                    officer.targetHistory = {
                      officerKey: matchingResponse.officerKey,
                      detailsSections: matchingResponse.detailsSections
                    };
                  } else {
                    officer.hasTargetHistory = false;
                    officer.targetHistory = {
                      officerKey: undefined,
                      detailsSections: []
                    };
                  }

                  return officer;
                });
                this.showLoader = false;
                _context3.next = 21;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](5);
                console.log(_context3.t0);
                _context3.next = 20;
                return this.alertService.showAlertError("حدث خطا في: " + _context3.t0.error + "", false);

              case 20:
                this.showLoader = false;

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[5, 15]]);
      }));
    }
  }, {
    key: "closingSelectedOfficerTargetModal",
    value: function closingSelectedOfficerTargetModal() {
      this.officerDetailModel.isOpen = false;
    }
  }, {
    key: "getAllOfficers",
    value: function getAllOfficers() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var _this4 = this;

        var allOfficers;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                this.showLoader = true;
                _context4.next = 4;
                return this.officerServices.getAllOfficers().toPromise();

              case 4:
                allOfficers = _context4.sent;
                this.officersObjectsFromDatabase = allOfficers.map(function (officer) {
                  return Object.assign(Object.assign({}, officer), {
                    officer_emp_date: _this4.datePipe.transform(officer.officer_emp_date, "yyyy-MM-dd")
                  });
                });
                this.officersObjectsFromDatabase.forEach(function (off) {
                  _this4.officersAfterFiltering.push({
                    officerInformation: off,
                    hasTargetHistory: false,
                    targetHistory: {
                      officerKey: undefined,
                      detailsSections: []
                    },
                    isChecked: false,
                    showInGrid: true
                  });
                });
                this.showLoader = false;
                _context4.next = 14;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);
                this.showLoader = false;
                this.alertService.showAlertError((_context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.error) || "خطأ في المناديب", false);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 10]]);
      }));
    }
  }]);

  return OfficerTargetPage;
}();

OfficerTargetPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_6__.sortingService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__.MohassilAuthService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ChangeDetectorRef
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_9__.AlertService
  }, {
    type: src_app_core_services_scrolling_service__WEBPACK_IMPORTED_MODULE_8__.ScrollingService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_10__.ReferencesService
  }, {
    type: src_app_core_services_officer_service__WEBPACK_IMPORTED_MODULE_11__.OfficerService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_12__.InputMaskingService
  }];
};

OfficerTargetPage.propDecorators = {
  officerDetailModel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ViewChild,
    args: ["officerDetailModel"]
  }]
};
OfficerTargetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
  selector: "app-officer-target",
  template: _officer_target_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_officer_target_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], OfficerTargetPage);


/***/ }),

/***/ 96721:
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/officer/officer-target/officer-target.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ (function(module) {

module.exports = ".divCenter {\n  justify-items: center;\n  text-align: center;\n}\n\n.targetDate {\n  width: 50%;\n}\n\n.targetDateAll {\n  width: 100%;\n}\n\n.ion-icon-class {\n  width: 1em;\n  height: 1em;\n}\n\ntd {\n  text-align: center;\n  /* center checkbox horizontally */\n  vertical-align: middle;\n  /* center checkbox vertically */\n}\n\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.row-shadow {\n  background-color: var(--row-shadow-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmljZXItdGFyZ2V0LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXG9mZmljZXJcXG9mZmljZXItdGFyZ2V0XFxvZmZpY2VyLXRhcmdldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7QUNJRjs7QURERTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0lKOztBRERBO0VBQ0UseUNBQUE7QUNJRiIsImZpbGUiOiJvZmZpY2VyLXRhcmdldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2Q2VudGVyIHtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGFyZ2V0RGF0ZSB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4udGFyZ2V0RGF0ZUFsbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmlvbi1pY29uLWNsYXNzIHtcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG59XHJcbnRkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLyogY2VudGVyIGNoZWNrYm94IGhvcml6b250YWxseSAqL1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgLyogY2VudGVyIGNoZWNrYm94IHZlcnRpY2FsbHkgKi9cclxufVxyXG4uZm9ybS1sYWJlbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgNTEsIDEwMikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLnJvdy1zaGFkb3d7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm93LXNoYWRvdy1jb2xvcik7XHJcbn1cclxuIiwiLmRpdkNlbnRlciB7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFyZ2V0RGF0ZSB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi50YXJnZXREYXRlQWxsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pb24taWNvbi1jbGFzcyB7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xufVxuXG50ZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogY2VudGVyIGNoZWNrYm94IGhvcml6b250YWxseSAqL1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAvKiBjZW50ZXIgY2hlY2tib3ggdmVydGljYWxseSAqL1xufVxuXG4uZm9ybS1sYWJlbC1yZXF1aXJlZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIipcIjtcbiAgY29sb3I6ICNmZjMzNjYgIWltcG9ydGFudDtcbn1cblxuLnJvdy1zaGFkb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3ctc2hhZG93LWNvbG9yKTtcbn0iXX0= */";

/***/ }),

/***/ 45322:
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/officer/officer-target/officer-target.page.html?ngResource ***!
  \****************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div\n  class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\"\n>\n  <div>\n    <h4 class=\"mr-1 mb-md-0\">تحديد اهداف الانتاجية الشهرية</h4>\n  </div>\n</div>\n<div class=\"col-md-12\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <form [formGroup]=\"newOfficersTargetForm\">\n        <div class=\"row\">\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\">\n                المجموعة المستهدفة\n              </ion-label>\n              <ion-select\n                interface=\"popover\"\n                formControlName=\"target_group\"\n                class=\"subselect\"\n                placeholder=\"المجموعة المستهدفة\"\n                (ionChange)=\"changeTargetGroup()\"\n              >\n                <ion-select-option value=\"1\">بالفرع</ion-select-option>\n                <ion-select-option value=\"2\">بالمندوب</ion-select-option>\n                <ion-select-option value=\"3\">بتاريخ التعيين</ion-select-option>\n              </ion-select>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isNewOfficersTargetForm && newOfficersTargetForm.controls['target_group'].hasError('required')\"\n                role=\"alert\"\n              >\n                برجاء اختيار المجموعة المستهدف\n              </div>\n            </div>\n          </div>\n          <div\n            class=\"col-12 col-md-4\"\n            *ngIf=\"this.newOfficersTargetForm.controls['target_group'].value == '1'\"\n          >\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\">\n                الفروع\n              </ion-label>\n              <ion-select\n                interface=\"popover\"\n                formControlName=\"branch_code\"\n                class=\"subselect\"\n                placeholder=\"الفروع\"\n                (ionChange)=\"changeBranchCode()\"\n              >\n                <ion-select-option\n                  *ngFor=\"let branch of IBranch\"\n                  [value]=\"branch.branch_code\"\n                >\n                  {{branch.branch_name}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n          </div>\n          <div\n            class=\"col-12 col-md-4\"\n            *ngIf=\"this.newOfficersTargetForm.controls['target_group'].value == '2'\"\n          >\n            <div class=\"form-group\">\n              <ion-label class=\"form-label\"> اسم المندوب </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"officer_name\"\n                placeholder=\"اسم المندوب\"\n                (ionChange)=\"changeOfficerName()\"\n              ></ion-input>\n            </div>\n          </div>\n          <div\n            class=\"col-12 col-md-4\"\n            *ngIf=\"this.newOfficersTargetForm.controls['target_group'].value == '3'\"\n          >\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\">\n                تاريخ التعيين من\n              </ion-label>\n              <ngx-datepicker\n                [parentForm]=\"newOfficersTargetForm\"\n                parentFormControllerName=\"target_group_start_date\"\n                (ionChange)=\"onChangeTargetGroupDate($event,this.newOfficersTargetForm.controls['target_group_end_date'].value)\"\n              ></ngx-datepicker>\n            </div>\n          </div>\n          <div\n            class=\"col-12 col-md-4\"\n            *ngIf=\"this.newOfficersTargetForm.controls['target_group'].value == '3'\"\n          >\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\">\n                تاريخ التعيين الي\n              </ion-label>\n              <ngx-datepicker\n                [parentForm]=\"newOfficersTargetForm\"\n                parentFormControllerName=\"target_group_end_date\"\n                (ionChange)=\"onChangeTargetGroupDate(this.newOfficersTargetForm.controls['target_group_start_date'].value,$event)\"\n              ></ngx-datepicker>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12 col-md-4 d-flex\">\n            <div class=\"form-group targetDate ml-2\">\n              <ion-label class=\"form-label form-label-required\">\n                تاريخ المستهدف من\n              </ion-label>\n              <ion-select\n                interface=\"popover\"\n                formControlName=\"target_start_date\"\n                class=\"subselect\"\n                placeholder=\"تاريخ المستهدف من\"\n                (ionChange)=\"onChangeTargetStartDate()\"\n              >\n                <ion-select-option\n                  *ngFor=\"let month of targetStartDate\"\n                  [value]=\"month.date\"\n                  >{{month.name}}</ion-select-option\n                >\n              </ion-select>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isNewOfficersTargetForm && newOfficersTargetForm.controls['target_start_date'].hasError('required')\"\n                role=\"alert\"\n              >\n                برجاء اختيار تاريخ المستهدف\n              </div>\n            </div>\n            <div class=\"form-group targetDate\">\n              <ion-label class=\"form-label form-label-required\">\n                تاريخ المستهدف الي\n              </ion-label>\n              <ion-select\n                interface=\"popover\"\n                formControlName=\"target_end_date\"\n                class=\"subselect\"\n                (ionChange)=\"onChangeTargetEndDate()\"\n                placeholder=\"تاريخ المستهدف الي\"\n              >\n                <ion-select-option\n                  *ngFor=\"let month of targetEndDate\"\n                  [value]=\"month.date\"\n                  >{{month.name}}</ion-select-option\n                >\n              </ion-select>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isNewOfficersTargetForm && newOfficersTargetForm.controls['target_end_date'].hasError('required')\"\n                role=\"alert\"\n              >\n                برجاء اختيار تاريخ المستهدف\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\">\n                عدد العملاء المستهدفة شهريا\n              </ion-label>\n              <ion-input\n                class=\"form-control\"\n                type=\"text\"\n                placeholder=\"عدد العملاء المستهدفة\"\n                formControlName=\"target_number\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 10000000000, 0)\"\n              ></ion-input>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isNewOfficersTargetForm && newOfficersTargetForm.controls['target_number'].hasError('required')\"\n                role=\"alert\"\n              >\n                برجاء كتابة عدد العملاء المستهدفة\n              </div>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isNewOfficersTargetForm && newOfficersTargetForm.controls['target_number'].hasError('pattern')\"\n                role=\"alert\"\n              >\n                برجاء كتابة ارقام فقط\n              </div>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\">\n                المبلغ المستهدف\n              </ion-label>\n              <ion-input\n                class=\"form-control\"\n                type=\"text\"\n                placeholder=\"مبلغ المستهدف\"\n                formControlName=\"target_amount\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1000000000000, 0)\"\n              ></ion-input>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isNewOfficersTargetForm && newOfficersTargetForm.controls['target_amount'].hasError('required')\"\n                role=\"alert\"\n              >\n                برجاء كتابة المبلغ المستهدف\n              </div>\n              <div\n                class=\"text-danger input-validator\"\n                *ngIf=\"isNewOfficersTargetForm && newOfficersTargetForm.controls['target_amount'].hasError('pattern')\"\n                role=\"alert\"\n              >\n                برجاء كتابة ارقام فقط\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex justify-content-center mt-2\">\n          <ion-button (click)=\"addingNewTarget()\"\n            >تطبيق الانتاجية المستهدفة</ion-button\n          >\n        </div>\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"form-group\">\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th class=\"text-center\">\n                        <ion-checkbox\n                          type=\"checkbox\"\n                          [checked]=\"checkBoxMaster\"\n                          (ionChange)=\"onCheckboxMasterChange($event)\"\n                        >\n                        </ion-checkbox>\n                      </th>\n                      <th\n                        class=\"text-center\"\n                        (click)=\"sortingTable(officersAfterFiltering, 'officerInformation.officer_name')\"\n                      >\n                        اسم المندوب\n                        <ion-icon\n                          class=\"ion-icon-class\"\n                          [name]=\"sortingIconClass\"\n                          *ngIf=\"sortingIconParam == 'officerInformation.officer_name'\"\n                        ></ion-icon>\n                      </th>\n                      <th\n                        class=\"text-center\"\n                        (click)=\"sortingTable(officersAfterFiltering , 'officerInformation.branch_name')\"\n                      >\n                        فرع المندوب\n                        <ion-icon\n                          class=\"ion-icon-class\"\n                          [name]=\"sortingIconClass\"\n                          *ngIf=\"sortingIconParam == 'officerInformation.branch_name'\"\n                        ></ion-icon>\n                      </th>\n                      <th\n                        class=\"text-center\"\n                        (click)=\"sortingTable(officersAfterFiltering , 'officerInformation.officer_emp_date')\"\n                      >\n                        تاريخ التعيين المندوب\n                        <ion-icon\n                          class=\"ion-icon-class\"\n                          [name]=\"sortingIconClass\"\n                          *ngIf=\"sortingIconParam == 'officerInformation.officer_emp_date'\"\n                        ></ion-icon>\n                      </th>\n                      <th></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr\n                      *ngFor=\"let officer of officersAfterFiltering\"\n                      [ngClass]=\"officer.hasTargetHistory === true ? 'row-shadow' : ''\"\n                    >\n                      <td *ngIf=\"officer.showInGrid\">\n                        <ion-checkbox\n                          type=\"checkbox\"\n                          [checked]=\"officer.isChecked\"\n                          (ionChange)=\"onCheckboxChange($event,officer)\"\n                        ></ion-checkbox>\n                      </td>\n                      <td *ngIf=\"officer.showInGrid\" class=\"text-center\">\n                        {{ officer.officerInformation.officer_name }}\n                      </td>\n                      <td *ngIf=\"officer.showInGrid\" class=\"text-center\">\n                        {{ officer.officerInformation.branch_name }}\n                      </td>\n                      <td *ngIf=\"officer.showInGrid\" class=\"text-center\">\n                        {{ officer.officerInformation.officer_emp_date }}\n                      </td>\n                      <td *ngIf=\"officer.showInGrid\">\n                        <ion-button\n                          (click)=\"officerDetailsBtn(officer)\"\n                          [disabled]=\"officer.hasTargetHistory !== true\"\n                        >\n                          <ion-icon\n                            name=\"information-circle-outline\"\n                          ></ion-icon>\n                        </ion-button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n\n<!-- Officer Target History Modal -->\n<ion-modal #officerDetailModel [backdropDismiss]=\"false\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar class=\"text-center\">\n        <ion-title>اهداف المندوب</ion-title>\n        <ion-button slot=\"end\" (click)=\"closingSelectedOfficerTargetModal()\">\n          <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding ion-text-center\">\n      <ion-grid [fixed]=\"true\">\n        <ion-row class=\"justify-content-around ion-padding\">\n          <ion-label class=\"form-label\">\n            اسم المندوب :\n            {{officerDetailModel.htmlAttributes?.officer?.officerInformation?.officer_name}}\n          </ion-label>\n          <ion-label class=\"form-label\">\n            فرع :\n            {{officerDetailModel.htmlAttributes?.officer?.officerInformation?.branch_name}}\n          </ion-label>\n        </ion-row>\n        <ion-row>\n          <ion-col> التاريخ </ion-col>\n          <ion-col> العدد المستهدف </ion-col>\n          <ion-col> العدد المحقق </ion-col>\n          <ion-col> القيمة المستهدفة </ion-col>\n          <ion-col> القيمة المحققة </ion-col>\n        </ion-row>\n        <ion-row\n          *ngFor=\"let detail of officerDetailModel.htmlAttributes?.officer?.targetHistory?.detailsSections\"\n          class=\"text-center\"\n        >\n          <ion-col>\n            {{convertDateToArabicMonths(detail.officer_target_date)}}\n          </ion-col>\n          <ion-col> {{detail.officer_target_no}} </ion-col>\n          <ion-col> {{detail.officer_achieve_number}} </ion-col>\n          <ion-col>\n            {{detail.officer_target_amount | number: '1.0-0'}}\n          </ion-col>\n          <ion-col>\n            {{detail.officer_achieve_amount | number: '1.0-0'}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_officer_officer-target_officer-target_module_ts.js.map