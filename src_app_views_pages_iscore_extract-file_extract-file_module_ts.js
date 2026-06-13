"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_iscore_extract-file_extract-file_module_ts"],{

/***/ 67554:
/*!***************************************************!*\
  !*** ./src/app/core/models/IScore/ExtractFile.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtractFileReportType": function() { return /* binding */ ExtractFileReportType; }
/* harmony export */ });
var ExtractFileReportType;

(function (ExtractFileReportType) {
  ExtractFileReportType["Monthly"] = "1";
  ExtractFileReportType["Daily"] = "2";
})(ExtractFileReportType || (ExtractFileReportType = {}));

/***/ }),

/***/ 24938:
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/iscore/extract-file/extract-file-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtractFilePageRoutingModule": function() { return /* binding */ ExtractFilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _extract_file_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extract-file.page */ 90195);






var routes = [{
  path: '',
  component: _extract_file_page__WEBPACK_IMPORTED_MODULE_2__.ExtractFilePage
}];

var ExtractFilePageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ExtractFilePageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ExtractFilePageRoutingModule);
});

ExtractFilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ExtractFilePageRoutingModule);


/***/ }),

/***/ 23498:
/*!************************************************************************!*\
  !*** ./src/app/views/pages/iscore/extract-file/extract-file.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtractFilePageModule": function() { return /* binding */ ExtractFilePageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _extract_file_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extract-file-routing.module */ 24938);
/* harmony import */ var _extract_file_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extract-file.page */ 90195);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var ExtractFilePageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ExtractFilePageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ExtractFilePageModule);
});

ExtractFilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _extract_file_routing_module__WEBPACK_IMPORTED_MODULE_2__.ExtractFilePageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_extract_file_page__WEBPACK_IMPORTED_MODULE_3__.ExtractFilePage]
})], ExtractFilePageModule);


/***/ }),

/***/ 90195:
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/iscore/extract-file/extract-file.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtractFilePage": function() { return /* binding */ ExtractFilePage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _extract_file_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extract-file.page.html?ngResource */ 50785);
/* harmony import */ var _extract_file_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extract-file.page.scss?ngResource */ 48071);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/validators/custom-validators */ 92609);
/* harmony import */ var src_app_core_services_iscore_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/iscore-http.service */ 80889);
/* harmony import */ var src_app_core_models_IScore_ExtractFile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/models/IScore/ExtractFile */ 67554);
















var ExtractFilePage = /*#__PURE__*/function () {
  function ExtractFilePage(formBuilder, referencesService, alertService, loansService, iScoreService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ExtractFilePage);

    this.formBuilder = formBuilder;
    this.referencesService = referencesService;
    this.alertService = alertService;
    this.loansService = loansService;
    this.iScoreService = iScoreService;
    this.showLoader = false;
    this.reportsTypesList = [];
    this.monthsList = [];
    this.yearsList = [];
    this.fundersList = [];
    this.clientTypesList = [];
    this.branchesList = [];
    this.loanTypeCategoriesList = [];
    this.loanTypesList = [];
    this.ReportType = src_app_core_models_IScore_ExtractFile__WEBPACK_IMPORTED_MODULE_10__.ExtractFileReportType;
    this.currentReportType = this.ReportType.Monthly;
    this.informationForm = this.formBuilder.group({
      loansStartDate: [new Date(1980, 0, 1), [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_8__.dateTypeStringValidator({
        required: true
      })]],
      reportType: [this.currentReportType, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_8__.generalValidation({
        required: true
      })]],
      month: [new Date().getMonth().toString(), [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_8__.generalValidation({
        required: true
      })]],
      year: [new Date().getFullYear(), [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_8__.generalValidation({
        required: true
      })]],
      date: [new Date()],
      funders: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_8__.generalValidation({
        required: true
      })]],
      clientTypes: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_8__.generalValidation({
        required: true
      })]],
      branches: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_8__.generalValidation({
        required: true
      })]],
      loanTypeCategory: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_8__.generalValidation({
        required: true
      })]],
      loanTypes: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_8__.generalValidation({
        required: true
      })]],
      fromActivityStart: [true]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ExtractFilePage, [{
    key: "loanTypes",
    get: function get() {
      var loanTypeCategories = this.informationForm.value.loanTypeCategory;
      if (!loanTypeCategories) return [];
      return this.loanTypesList.filter(function (loan) {
        return loan.loan_type_cat === Number(loanTypeCategories);
      });
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.fetchingData();

              case 2:
                this.yearsList = this.generateYearsList();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "fetchingData",
    value: function fetchingData() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.referencesService.GetClientTypes();

              case 2:
                this.clientTypesList = _context2.sent;
                _context2.next = 5;
                return this.referencesService.getAllBranches();

              case 5:
                this.branchesList = _context2.sent;
                _context2.next = 8;
                return this.referencesService.getLoanTypeCategories();

              case 8:
                this.loanTypeCategoriesList = _context2.sent;
                _context2.next = 11;
                return this.loansService.getLoanTypes();

              case 11:
                this.loanTypesList = _context2.sent;
                this.referencesService.getIScoreReportType().subscribe(function (data) {
                  return _this.reportsTypesList = data;
                }, function (error) {
                  return _this.handleError(error);
                });
                this.referencesService.getMonths().subscribe(function (data) {
                  return _this.monthsList = data;
                }, function (error) {
                  return _this.handleError(error);
                });
                this.referencesService.getAllFunderCodeInSystem().subscribe(function (data) {
                  return _this.fundersList = data;
                }, function (error) {
                  return _this.handleError(error);
                });

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "generateYearsList",
    value: function generateYearsList() {
      var currentYear = new Date().getFullYear();

      var range = function range(start, stop, step) {
        return Array.from({
          length: (stop - start) / step + 1
        }, function (_, i) {
          return start + i * step;
        }).map(function (year) {
          return {
            name: year.toString(),
            value: year
          };
        });
      };

      return range(currentYear, 1900, -1);
    }
  }, {
    key: "reportsTypeChanging",
    value: function reportsTypeChanging(event) {
      var value = event.detail.value;

      switch (value) {
        case this.ReportType.Monthly:
          this.currentReportType = this.ReportType.Monthly;
          this.informationForm.controls["month"].setValidators([src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_8__.generalValidation({
            required: true
          })]);
          this.informationForm.controls["month"].updateValueAndValidity();
          this.informationForm.controls["year"].setValidators([src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_8__.generalValidation({
            required: true
          })]);
          this.informationForm.controls["year"].updateValueAndValidity();
          this.informationForm.controls["date"].setValidators([]);
          this.informationForm.controls["date"].updateValueAndValidity();
          break;

        case this.ReportType.Daily:
          this.currentReportType = this.ReportType.Daily;
          this.informationForm.controls["month"].setValidators([]);
          this.informationForm.controls["month"].updateValueAndValidity();
          this.informationForm.controls["year"].setValidators([]);
          this.informationForm.controls["year"].updateValueAndValidity();
          this.informationForm.controls["date"].setValidators([src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_8__.dateTypeStringValidator({
            required: true
          })]);
          this.informationForm.controls["date"].updateValueAndValidity();
          break;
      }
    }
  }, {
    key: "loanTypeCategoryChanging",
    value: function loanTypeCategoryChanging(event) {
      var loanTypeCat = event.detail.value;
      this.informationForm.patchValue({
        loanTypes: null,
        loanTypeCategory: loanTypeCat
      });
    }
  }, {
    key: "extractFile",
    value: function extractFile() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var isValid, request, result;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                isValid = this.informationForm.valid;
                this.informationForm.markAllAsTouched();

                if (isValid) {
                  _context3.next = 5;
                  break;
                }

                return _context3.abrupt("return");

              case 5:
                this.showLoader = true;
                request = {
                  loansStartDate: this.informationForm.controls["loansStartDate"].value,
                  reportType: this.currentReportType,
                  extractMonth: this.currentReportType === this.ReportType.Monthly ? this.informationForm.controls["month"].value : null,
                  extractYear: this.currentReportType === this.ReportType.Monthly ? this.informationForm.controls["year"].value : null,
                  extractDate: this.currentReportType === this.ReportType.Daily ? this.informationForm.controls["date"].value : null,
                  funders: this.informationForm.controls["funders"].value,
                  clientTypes: this.informationForm.controls["clientTypes"].value,
                  branches: this.informationForm.controls["branches"].value,
                  loanTypeCategory: this.informationForm.controls["loanTypeCategory"].value,
                  loanTypes: this.informationForm.controls["loanTypes"].value,
                  fromActivityStart: this.informationForm.controls["fromActivityStart"].value
                };
                console.log(request);
                _context3.next = 10;
                return this.iScoreService.extractFile(request).toPromise();

              case 10:
                result = _context3.sent;

                if (result.success) {
                  _context3.next = 13;
                  break;
                }

                return _context3.abrupt("return", this.alertService.showAlertError("خطأ في استخراج الملف", false));

              case 13:
                this.alertService.showAlertConfirm("لقد تم استخراج الملف", true);
                _context3.next = 19;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](0);
                this.handleError(_context3.t0);

              case 19:
                _context3.prev = 19;
                this.showLoader = false;
                return _context3.finish(19);

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 16, 19, 22]]);
      }));
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var errorMessage = error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpErrorResponse ? JSON.stringify(error.error) : error instanceof Error ? error.message : String(error);
      this.alertService.showAlertError(errorMessage, false);
      console.error("Error:", error);
    }
  }]);

  return ExtractFilePage;
}();

ExtractFilePage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_7__.ReferencesService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_6__.LoansService
  }, {
    type: src_app_core_services_iscore_http_service__WEBPACK_IMPORTED_MODULE_9__.IscoreHttpService
  }];
};

ExtractFilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: "app-extract-file",
  template: _extract_file_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_extract_file_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], ExtractFilePage);


/***/ }),

/***/ 48071:
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/iscore/extract-file/extract-file.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHRyYWN0LWZpbGUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 50785:
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/iscore/extract-file/extract-file.page.html?ngResource ***!
  \***********************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<ion-title class=\"ion-padding-vertical\"> استخراج ملف I-Score </ion-title>\n\n<ion-card>\n  <ion-card-content>\n    <ion-grid>\n      <form [formGroup]=\"informationForm\">\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label form-label-required\">\n              القروض المصدره من تاريخ\n            </ion-label>\n            <ngx-datepicker\n              [parentForm]=\"informationForm\"\n              parentFormControllerName=\"loansStartDate\"\n              [options]=\"{nullInitialValue:true}\"\n            ></ngx-datepicker>\n            <html-validations\n              [validationInput]=\"{\n                  showError:informationForm.controls['loansStartDate'].touched,\n                  formGroup: informationForm,\n                  formControlName: 'loansStartDate'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label form-label-required\">\n              نوع التقرير\n            </ion-label>\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"نوع التقرير\"\n              formControlName=\"reportType\"\n              class=\"subselect\"\n              (ionChange)=\"reportsTypeChanging($event)\"\n            >\n              <ion-select-option\n                *ngFor=\"let rep of reportsTypesList\"\n                [value]=\"rep.ref_code\"\n              >\n                {{rep.ref_desc}}\n              </ion-select-option>\n            </ion-select>\n            <html-validations\n              [validationInput]=\"{\n                  showError:informationForm.controls['reportType'].touched,\n                  formGroup: informationForm,\n                  formControlName: 'reportType'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label form-label-required\">\n              استخراج البيانات {{ReportType.Monthly? 'لشهر':'ليوم'}}\n            </ion-label>\n            <ion-row *ngIf=\"currentReportType === ReportType.Monthly\">\n              <ion-col>\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"الشهر\"\n                  formControlName=\"month\"\n                  class=\"subselect\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let month of monthsList\"\n                    [value]=\"month.ref_code\"\n                  >\n                    {{month.ref_desc}}\n                  </ion-select-option>\n                </ion-select>\n                <html-validations\n                  [validationInput]=\"{\n                  showError:informationForm.controls['month'].touched,\n                  formGroup: informationForm,\n                  formControlName: 'month'}\"\n                ></html-validations>\n              </ion-col>\n              <ion-col>\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"السنة\"\n                  formControlName=\"year\"\n                  class=\"subselect\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let year of yearsList\"\n                    [value]=\"year.value\"\n                  >\n                    {{year.name}}\n                  </ion-select-option>\n                </ion-select>\n                <html-validations\n                  [validationInput]=\"{\n                  showError:informationForm.controls['year'].touched,\n                  formGroup: informationForm,\n                  formControlName: 'year'}\"\n                ></html-validations>\n              </ion-col>\n            </ion-row>\n            <ngx-datepicker\n              *ngIf=\"currentReportType === ReportType.Daily\"\n              [parentForm]=\"informationForm\"\n              parentFormControllerName=\"date\"\n              [options]=\"{nullInitialValue:true}\"\n            ></ngx-datepicker>\n            <html-validations\n              [validationInput]=\"{\n                  showError:informationForm.controls['date'].touched,\n                  formGroup: informationForm,\n                  formControlName: 'date'}\"\n            ></html-validations>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label form-label-required\">\n              مصادر التمويل\n            </ion-label>\n            <app-multiplePopover\n              [parentForm]=\"informationForm\"\n              parentFormControllerName=\"funders\"\n              [arrayModal]=\"fundersList\"\n              [arrayName]=\"'funder_name'\"\n              [arrayValue]=\"'funder_code'\"\n              okText=\"موافق\"\n              cancelText=\"الغاء\"\n              placeholderText=\"اختيار مصادر التمويل\"\n            ></app-multiplePopover>\n            <html-validations\n              [validationInput]=\"{\n                  showError:informationForm.controls['funders'].touched,\n                  formGroup: informationForm,\n                  formControlName: 'funders'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label form-label-required\">\n              نوع الاقتراض\n            </ion-label>\n            <app-multiplePopover\n              [parentForm]=\"informationForm\"\n              parentFormControllerName=\"clientTypes\"\n              [arrayModal]=\"clientTypesList\"\n              [arrayName]=\"'client_type_name'\"\n              [arrayValue]=\"'client_type_code'\"\n              okText=\"موافق\"\n              cancelText=\"الغاء\"\n              placeholderText=\"اختيار نوع الاقتراض\"\n            ></app-multiplePopover>\n            <html-validations\n              [validationInput]=\"{\n                  showError:informationForm.controls['clientTypes'].touched,\n                  formGroup: informationForm,\n                  formControlName: 'clientTypes'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label form-label-required\">\n              الفروع\n            </ion-label>\n            <app-multiplePopover\n              [parentForm]=\"informationForm\"\n              parentFormControllerName=\"branches\"\n              [arrayModal]=\"branchesList\"\n              [arrayName]=\"'branch_name'\"\n              [arrayValue]=\"'branch_code'\"\n              okText=\"موافق\"\n              cancelText=\"الغاء\"\n              placeholderText=\"اختيار الفروع\"\n            ></app-multiplePopover>\n            <html-validations\n              [validationInput]=\"{\n                  showError:informationForm.controls['branches'].touched,\n                  formGroup: informationForm,\n                  formControlName: 'branches'}\"\n            ></html-validations>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label form-label-required\">\n              نوع التمويل\n            </ion-label>\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"نوع التمويل\"\n              formControlName=\"loanTypeCategory\"\n              class=\"subselect\"\n              (ionChange)=\"loanTypeCategoryChanging($event)\"\n            >\n              <ion-select-option\n                *ngFor=\"let cat of loanTypeCategoriesList\"\n                [value]=\"cat.ref_code\"\n              >\n                {{cat.ref_desc}}\n              </ion-select-option>\n            </ion-select>\n            <html-validations\n              [validationInput]=\"{\n                  showError:informationForm.controls['loanTypeCategory'].touched,\n                  formGroup: informationForm,\n                  formControlName: 'loanTypeCategory'}\"\n            ></html-validations>\n          </ion-col>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label form-label-required\">\n              انواع القروض\n            </ion-label>\n            <app-multiplePopover\n              [parentForm]=\"informationForm\"\n              parentFormControllerName=\"loanTypes\"\n              [arrayModal]=\"loanTypes\"\n              [arrayName]=\"'loan_type_name'\"\n              [arrayValue]=\"'loan_type_code'\"\n              [disable]=\"loanTypes.length === 0\"\n              okText=\"موافق\"\n              cancelText=\"الغاء\"\n              placeholderText=\"اختيار انواع القروض\"\n            ></app-multiplePopover>\n            <html-validations\n              [validationInput]=\"{\n                  showError:informationForm.controls['loanTypes'].touched,\n                  formGroup: informationForm,\n                  formControlName: 'loanTypes'}\"\n            ></html-validations>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-checkbox\n              type=\"checkbox\"\n              formControlName=\"fromActivityStart\"\n            ></ion-checkbox>\n            <ion-label class=\"form-label ion-padding-start\">\n              استخراج بيانات العملاء منذ بدء النشاط\n            </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-button (click)=\"extractFile()\"> استخراج </ion-button>\n        </ion-row>\n      </form>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_iscore_extract-file_extract-file_module_ts.js.map