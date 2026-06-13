"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_head-office_transaction-type_transaction-type_module_ts"],{

/***/ 61051:
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/transaction-type/transaction-type-routing.module.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionTypePageRoutingModule": function() { return /* binding */ TransactionTypePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _transaction_type_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction-type.page */ 12016);






var routes = [{
  path: '',
  component: _transaction_type_page__WEBPACK_IMPORTED_MODULE_2__.TransactionTypePage
}];

var TransactionTypePageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function TransactionTypePageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TransactionTypePageRoutingModule);
});

TransactionTypePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], TransactionTypePageRoutingModule);


/***/ }),

/***/ 49848:
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/transaction-type/transaction-type.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionTypePageModule": function() { return /* binding */ TransactionTypePageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _transaction_type_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction-type-routing.module */ 61051);
/* harmony import */ var _transaction_type_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction-type.page */ 12016);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var TransactionTypePageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function TransactionTypePageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TransactionTypePageModule);
});

TransactionTypePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _transaction_type_routing_module__WEBPACK_IMPORTED_MODULE_2__.TransactionTypePageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_transaction_type_page__WEBPACK_IMPORTED_MODULE_3__.TransactionTypePage]
})], TransactionTypePageModule);


/***/ }),

/***/ 12016:
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/head-office/transaction-type/transaction-type.page.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionTypePage": function() { return /* binding */ TransactionTypePage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _transaction_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction-type.page.html?ngResource */ 10878);
/* harmony import */ var _transaction_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transaction-type.page.scss?ngResource */ 43669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);














var TransactionTypePage = /*#__PURE__*/function () {
  function TransactionTypePage(formBuilder, datepipe, http, env, alertServices, ReferencesService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TransactionTypePage);

    this.formBuilder = formBuilder;
    this.datepipe = datepipe;
    this.http = http;
    this.env = env;
    this.alertServices = alertServices;
    this.ReferencesService = ReferencesService;
    this.TransTypeForm = this.formBuilder.group({
      type_key: [""],
      trans_act_desc: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      trans_type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      account_type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      active_rec: [0],
      allow_client_trans_on_vac: [0],
      trans_reference: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      sales_tax: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
    this.showLoader = false;
    this.isSubmitted = false;
    this.isInserting = false;
    this.isUpdating = false;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TransactionTypePage, [{
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
      this.transaction();
    }
  }, {
    key: "transaction",
    value: function transaction() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.ReferencesService.GetTransAll();

              case 2:
                this.TransType = _context.sent;
                console.log(this.TransType, "1111111");
                _context.next = 6;
                return this.ReferencesService.GetTransType();

              case 6:
                this.transType = _context.sent;
                _context.next = 9;
                return this.ReferencesService.GetAccountType();

              case 9:
                this.AccountType = _context.sent;
                _context.next = 12;
                return this.ReferencesService.GetTransReference();

              case 12:
                this.TransReference = _context.sent;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "clearForms",
    value: function clearForms() {
      this.isInserting = false;
      this.isUpdating = false;
      this.isSubmitted = false;
      this.TransTypeForm.reset();
    }
  }, {
    key: "updateTransType",
    value: function updateTransType(index) {
      var TransType = this.TransType[index];
      this.TransTypeForm.patchValue({
        type_key: TransType.type_key,
        trans_act_desc: TransType.trans_act_desc,
        trans_type: TransType.trans_type.toString(),
        account_type: TransType.account_type.toString(),
        active_rec: TransType.active_rec == "1",
        allow_client_trans_on_vac: TransType.allow_client_trans_on_vac == "1",
        trans_reference: TransType.trans_reference ? TransType.trans_reference.toString() : null,
        sales_tax: TransType.sales_tax
      });
      this.isInserting = false;
      this.isUpdating = true;
    }
  }, {
    key: "insertTransType",
    value: function insertTransType() {
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
    key: "deleteTransType",
    value: function deleteTransType(type_key) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.ReferencesService.GetTransTypeDelete(type_key.toString());

              case 2:
                this.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "submitTransInsert",
    value: function submitTransInsert() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;

                if (!this.TransTypeForm.valid) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 4;
                return this.ReferencesService.GetTransTypeInsert(this.TransTypeForm.value.trans_act_desc, this.TransTypeForm.value.trans_type, this.TransTypeForm.value.account_type, this.TransTypeForm.value.active_rec === true ? 1 : 0, this.TransTypeForm.value.allow_client_trans_on_vac === true ? 1 : 0, this.TransTypeForm.value.trans_reference, this.TransTypeForm.value.sales_tax);

              case 4:
                this.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                _context4.next = 8;
                break;

              case 7:
                this.alertServices.showAlertError("يجب ادخال جميع البيانات", false);

              case 8:
                _context4.next = 12;
                break;

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 10]]);
      }));
    }
  }, {
    key: "submitTransUpdate",
    value: function submitTransUpdate() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;

                if (!this.TransTypeForm.valid) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 4;
                return this.ReferencesService.GetTransTypeUpdate(this.TransTypeForm.value.type_key, this.TransTypeForm.value.trans_act_desc, this.TransTypeForm.value.trans_type, this.TransTypeForm.value.account_type, this.TransTypeForm.value.active_rec === true ? 1 : 0, this.TransTypeForm.value.allow_client_trans_on_vac === true ? 1 : 0, this.TransTypeForm.value.trans_reference, this.TransTypeForm.value.sales_tax);

              case 4:
                this.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                _context5.next = 8;
                break;

              case 7:
                this.alertServices.showAlertError("يجب ادخال جميع البيانات", false);

              case 8:
                _context5.next = 12;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](0);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 10]]);
      }));
    }
  }]);

  return TransactionTypePage;
}();

TransactionTypePage.ctorParameters = function () {
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

TransactionTypePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-transaction-type",
  template: _transaction_type_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_transaction_type_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], TransactionTypePage);


/***/ }),

/***/ 43669:
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/transaction-type/transaction-type.page.scss?ngResource ***!
  \************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbi10eXBlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 10878:
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/transaction-type/transaction-type.page.html?ngResource ***!
  \************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div class=\"ion-padding\" *ngIf=\"!isInserting && !isUpdating\">\n  <div>\n    <h5 class=\"mr-1 mb-md-0 pb-3\">أنواع الحركات </h5>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"row justify-content-center\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <th class=\"col-4 col-md-4\" style=\"font-size: medium;\">أنواع الحركات</th>\n              <th class=\"col-4 col-md-3\" style=\"font-size: medium;\">نوع الحركة</th>\n              <th class=\"col-4 col-md-3\" style=\"font-size: medium;\">طبيعة الحركة</th>\n              <th class=\"col-4 col-md-3\" style=\"font-size: medium;\">رقم الحركه يشير الى</th>\n              <th class=\"col-4 col-md-3\" style=\"font-size: medium;\">نسبه الضريبه</th>\n              <th class=\"col-4 col-md-3\" style=\"font-size: medium;\">فعال</th>\n              <th class=\"col-4 col-md-3\" style=\"font-size: medium;\">السماح بالتنفيذ في العطلات</th>\n              \n              <th></th>\n              <th class=\"text-center\">\n                <ion-button (click)=\"insertTransType()\"\n                  ><ion-icon name=\"add-outline\"></ion-icon\n                ></ion-button>\n              </th>\n            </thead>\n           \n            <tbody>\n              <tr\n                *ngFor=\"let TransType of TransType; let i = index\"\n              >\n                <td class=\"col-4 col-md-4\">{{TransType.trans_act_desc}}</td>\n                <td class=\"col-4 col-md-3\">{{TransType.trans_type_desc}}</td>\n                <td class=\"col-4 col-md-3\">{{TransType.account_type_desc}}</td>\n                <td class=\"col-4 col-md-3\">{{TransType.trans_reference_desc}}</td>\n                <td class=\"col-4 col-md-3\">{{TransType.sales_tax}}</td>\n                <td class=\"col-4 col-md-3\">\n                  <ion-checkbox\n                    type=\"checkbox\"\n                    [disabled]=\"true\"\n                    [checked]=\"TransType.active_rec == '1'\"\n                  ></ion-checkbox>\n                </td>\n                <td class=\"col-4 col-md-3\">\n                  <ion-checkbox\n                    type=\"checkbox\"\n                    [disabled]=\"true\"\n                    [checked]=\"TransType.allow_client_trans_on_vac == '1'\"\n                  ></ion-checkbox>\n                </td>\n\n                <td class=\"text-center\">\n                  <ion-button (click)=\"updateTransType(i)\"\n                    ><ion-icon name=\"create-outline\"></ion-icon\n                  ></ion-button>\n                </td>\n                <td class=\"text-center\">\n                  <ion-button color=\"danger\" (click)=\"deleteTransType(TransType.type_key)\">\n                    <ion-icon name=\"trash-outline\"></ion-icon>\n                  </ion-button>\n                </td>\n               \n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"isInserting || isUpdating\">\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"TransTypeForm\">\n            <div class=\"col-12 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\">\n                 أنواع الحركات\n                </ion-label>\n                <ion-input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"trans_act_desc\"\n                >\n                </ion-input>\n                <div\n                  class=\"text-danger input-validator\"\n                  *ngIf=\"isSubmitted && ((TransTypeForm.controls['trans_act_desc'].errors?.['required']))\"\n                  role=\"alert\"\n                >\n                  يجب ادخال نوع الحركة \n                </div>\n              </div>\n            </div>\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\">\n                نوع الحركة\n              </ion-label>\n              <ion-select class=\"subselect ionSelectSize ion-text-wrap select-text\" \n                interface=\"popover\" placeholder=\"نوع الحركة \"formControlName=\"trans_type\">\n                <ion-select-option class=\"pb-2\" *ngFor=\"let type of transType\" [value]=\"type.ref_code\">\n                  {{type.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\">\n                طبيعة الحركة\n              </ion-label>\n              <ion-select class=\"subselect ionSelectSize ion-text-wrap select-text\" \n                interface=\"popover\" placeholder=\"طبيعة الحركة\"formControlName=\"account_type\">\n                <ion-select-option class=\"pb-2\" *ngFor=\"let type of AccountType\" [value]=\"type.ref_code\">\n                  {{type.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-6\">\n            <div class=\"form-group\">\n              <ion-col>\n                <ion-checkbox\n                  type=\"checkbox\"\n                  formControlName=\"active_rec\">\n                </ion-checkbox>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"form-label pl-1\"> فعال </ion-label>\n              </ion-col>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-6\">\n            <div class=\"form-group\">\n              <ion-col>\n                <ion-checkbox\n                  type=\"checkbox\"\n                  formControlName=\"allow_client_trans_on_vac\">\n                </ion-checkbox>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"form-label pl-1\"> السماح بالتنفيذ في العطلات</ion-label>\n              </ion-col>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-4\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\">\n                رقم الحركه يشير الى\n              </ion-label>\n              <ion-select class=\"subselect ionSelectSize ion-text-wrap select-text\" \n                interface=\"popover\" placeholder=\"رقم الحركه يشير الى\"formControlName=\"trans_reference\">\n                <ion-select-option class=\"pb-2\" *ngFor=\"let type of TransReference\" [value]=\"type.ref_code\">\n                  {{type.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n          </div>\n          <div class=\"col-12 col-md-7\">\n            <div class=\"form-group\">\n              <ion-label class=\"form-label form-label-required\">\n                نسبه الضريبه\n              </ion-label>\n              <div>\n                <ion-input type=\"number\" class=\"form-control\" id=\"sales_tax\" formControlName=\"sales_tax\" min=\"0\" ></ion-input>\n              </div>\n            </div>\n          </div>\n          <div class=\"row-12 pt-3\">\n            <div class=\"d-flex justify-content-center mt-2\">\n              <ion-button color=\"danger\" (click)=\"clearForms()\">\n                رجوع\n              </ion-button>\n              <ion-button *ngIf=\"isInserting\" (click)=\"submitTransInsert()\"> حفظ </ion-button>\n              <ion-button *ngIf=\"isUpdating\"(click)=\"submitTransUpdate()\"> حفظ </ion-button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_head-office_transaction-type_transaction-type_module_ts.js.map