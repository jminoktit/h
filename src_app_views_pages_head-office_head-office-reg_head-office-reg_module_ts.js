"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_head-office_head-office-reg_head-office-reg_module_ts"],{

/***/ 41707:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/head-office-reg/head-office-reg-routing.module.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadOfficeRegPageRoutingModule": function() { return /* binding */ HeadOfficeRegPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _head_office_reg_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./head-office-reg.page */ 74067);






var routes = [{
  path: '',
  component: _head_office_reg_page__WEBPACK_IMPORTED_MODULE_2__.HeadOfficeRegPage
}];

var HeadOfficeRegPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HeadOfficeRegPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HeadOfficeRegPageRoutingModule);
});

HeadOfficeRegPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], HeadOfficeRegPageRoutingModule);


/***/ }),

/***/ 62534:
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/head-office/head-office-reg/head-office-reg.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadOfficeRegPageModule": function() { return /* binding */ HeadOfficeRegPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _head_office_reg_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./head-office-reg-routing.module */ 41707);
/* harmony import */ var _head_office_reg_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./head-office-reg.page */ 74067);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var HeadOfficeRegPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function HeadOfficeRegPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HeadOfficeRegPageModule);
});

HeadOfficeRegPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _head_office_reg_routing_module__WEBPACK_IMPORTED_MODULE_2__.HeadOfficeRegPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_head_office_reg_page__WEBPACK_IMPORTED_MODULE_3__.HeadOfficeRegPage]
})], HeadOfficeRegPageModule);


/***/ }),

/***/ 74067:
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/head-office/head-office-reg/head-office-reg.page.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadOfficeRegPage": function() { return /* binding */ HeadOfficeRegPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _head_office_reg_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./head-office-reg.page.html?ngResource */ 57806);
/* harmony import */ var _head_office_reg_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./head-office-reg.page.scss?ngResource */ 27370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);














var HeadOfficeRegPage = /*#__PURE__*/function () {
  function HeadOfficeRegPage(formBuilder, datepipe, http, env, alertServices, ReferencesService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HeadOfficeRegPage);

    this.formBuilder = formBuilder;
    this.datepipe = datepipe;
    this.http = http;
    this.env = env;
    this.alertServices = alertServices;
    this.ReferencesService = ReferencesService;
    this.RegForm = this.formBuilder.group({
      reg_code: [""],
      reg_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      active_rec: [0]
    });
    this.showLoader = false;
    this.isSubmitted = false;
    this.isInserting = false;
    this.isUpdating = false;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(HeadOfficeRegPage, [{
    key: "noWhitespaceValidator",
    value: function noWhitespaceValidator(control) {
      var isWhitespace = control.value !== null && (control.value || "").toString().trim().length === 0;
      var isValid = !isWhitespace;
      return isValid ? null : {
        whitespace: true
      };
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.loadReg();
    }
  }, {
    key: "loadReg",
    value: function loadReg() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.ReferencesService.GetAllReg();

              case 2:
                this.Reg = _context.sent;
                console.log(this.Reg);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "updateReg",
    value: function updateReg(index) {
      var Reg = this.Reg[index];
      this.RegForm.patchValue({
        reg_code: Reg.reg_code,
        reg_name: Reg.reg_name,
        active_rec: Reg.active_rec == "1"
      });
      this.isInserting = false;
      this.isUpdating = true;
    }
  }, {
    key: "insertReg",
    value: function insertReg() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.isUpdating = false;
                this.isInserting = true;

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "deleteReg",
    value: function deleteReg(reg_code) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.alertServices.SaveAlert("هل تريد الحذف؟");

              case 2:
                if (!_context3.sent) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 5;
                return this.ReferencesService.GetRegDelete(reg_code.toString()).then(function () {
                  _this.alertServices.showAlertConfirm("تم الحذف بنجاح", true);
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "clearForms",
    value: function clearForms() {
      this.isInserting = false;
      this.isUpdating = false;
      this.isSubmitted = false;
      this.RegForm.reset();
    }
  }, {
    key: "submitRegInsert",
    value: function submitRegInsert() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                if (!this.RegForm.valid) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 4;
                return this.alertServices.SaveAlert("هل تريد الاضافة؟");

              case 4:
                if (!_context4.sent) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 7;
                return this.ReferencesService.GetRegInsert(this.RegForm.value.reg_name, this.RegForm.value.active_rec === true ? 1 : 0).then(function () {
                  _this2.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                });

              case 7:
                _context4.next = 10;
                break;

              case 9:
                this.alertServices.showAlertError("يجب ادخال جميع البيانات", false);

              case 10:
                _context4.next = 14;
                break;

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](0);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 12]]);
      }));
    }
  }, {
    key: "submitRegUpdate",
    value: function submitRegUpdate() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var _this3 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;

                if (!this.RegForm.valid) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 4;
                return this.alertServices.SaveAlert("هل تريد تعديل البيانات؟");

              case 4:
                if (!_context5.sent) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 7;
                return this.ReferencesService.GetRegUpdate(Number(this.RegForm.value.reg_code), this.RegForm.value.reg_name, this.RegForm.value.active_rec === true ? 1 : 0).then(function () {
                  _this3.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                });

              case 7:
                _context5.next = 10;
                break;

              case 9:
                this.alertServices.showAlertError("يجب ادخال جميع البيانات", false);

              case 10:
                _context5.next = 14;
                break;

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](0);

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 12]]);
      }));
    }
  }]);

  return HeadOfficeRegPage;
}();

HeadOfficeRegPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_7__.ReferencesService
  }];
};

HeadOfficeRegPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-head-office-reg",
  template: _head_office_reg_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_head_office_reg_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], HeadOfficeRegPage);


/***/ }),

/***/ 27370:
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/head-office-reg/head-office-reg.page.scss?ngResource ***!
  \**********************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkLW9mZmljZS1yZWcucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 57806:
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/head-office-reg/head-office-reg.page.html?ngResource ***!
  \**********************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div class=\"ion-padding\" *ngIf=\"!isInserting && !isUpdating\">\n  <div>\n    <h5 class=\"mr-1 mb-md-0 pb-3\"> المناطق الإقليمية </h5>\n  </div>\n  <div class=\"card\">\n    <div class=\"table-responsive\">\n      <table class=\"table card-body\">\n        <thead>\n          <th class=\"text-center\">المناطق الإقليمية </th>\n          <th class=\"col-12 col-md-3\">فعال</th>\n          <th></th>\n          <th class=\"text-center\">\n            <ion-button (click)=\"insertReg()\"><ion-icon name=\"add-outline\"></ion-icon></ion-button>\n          </th>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let Reg of Reg; let i = index\">\n            <td class=\"text-center\">{{Reg.reg_name}}</td>\n            <td class=\"col-12 col-md-3\">\n              <ion-checkbox type=\"checkbox\" [disabled]=\"true\" [checked]=\"Reg.active_rec == '1'\"></ion-checkbox>\n            </td>\n            <td class=\"text-center\">\n              <ion-button (click)=\"updateReg(i)\"><ion-icon name=\"create-outline\"></ion-icon></ion-button>\n            </td>\n            <td class=\"text-center\">\n              <ion-button color=\"danger\" (click)=\"deleteReg(Reg.reg_code)\">\n                <ion-icon name=\"trash-outline\"></ion-icon>\n              </ion-button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"isInserting || isUpdating\">\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"RegForm\">\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                المناطق الإقليمية\n              </ion-label>\n              <ion-input type=\"text\" class=\"form-control\" formControlName=\"reg_name\">\n              </ion-input>\n              <div class=\"text-danger input-validator\"\n                *ngIf=\"isSubmitted && ((RegForm.controls['reg_name'].errors?.['required']))\" role=\"alert\">\n                يجب ادخال المناطق الإقليمية\n              </div>\n            </div>\n          </div>\n          <div class=\"row pt-3\">\n            <div class=\"col-12 col-md-6\">\n              <ion-label class=\"form-label pl-1\"> فعال </ion-label>\n              <ion-checkbox type=\"checkbox\" formControlName=\"active_rec\"></ion-checkbox>\n            </div>\n          </div>\n\n          <div class=\"row-12 pt-3\">\n            <div class=\"d-flex justify-content-center mt-2\">\n              <ion-button color=\"danger\" (click)=\"clearForms()\">\n                رجوع\n              </ion-button>\n              <ion-button *ngIf=\"isInserting\" (click)=\"submitRegInsert()\"> حفظ </ion-button>\n              <ion-button *ngIf=\"isUpdating\" (click)=\"submitRegUpdate()\"> حفظ </ion-button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_head-office_head-office-reg_head-office-reg_module_ts.js.map