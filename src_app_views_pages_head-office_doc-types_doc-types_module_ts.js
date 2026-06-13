"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_head-office_doc-types_doc-types_module_ts"],{

/***/ 9058:
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/head-office/doc-types/doc-types-routing.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocTypesPageRoutingModule": function() { return /* binding */ DocTypesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _doc_types_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doc-types.page */ 8281);






var routes = [{
  path: '',
  component: _doc_types_page__WEBPACK_IMPORTED_MODULE_2__.DocTypesPage
}];

var DocTypesPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DocTypesPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DocTypesPageRoutingModule);
});

DocTypesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], DocTypesPageRoutingModule);


/***/ }),

/***/ 26601:
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/head-office/doc-types/doc-types.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocTypesPageModule": function() { return /* binding */ DocTypesPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _doc_types_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doc-types-routing.module */ 9058);
/* harmony import */ var _doc_types_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doc-types.page */ 8281);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var DocTypesPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DocTypesPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DocTypesPageModule);
});

DocTypesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _doc_types_routing_module__WEBPACK_IMPORTED_MODULE_2__.DocTypesPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_doc_types_page__WEBPACK_IMPORTED_MODULE_3__.DocTypesPage]
})], DocTypesPageModule);


/***/ }),

/***/ 8281:
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/head-office/doc-types/doc-types.page.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocTypesPage": function() { return /* binding */ DocTypesPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _doc_types_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doc-types.page.html?ngResource */ 72928);
/* harmony import */ var _doc_types_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doc-types.page.scss?ngResource */ 34141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);














var DocTypesPage = /*#__PURE__*/function () {
  function DocTypesPage(http, env, formBuilder, alertServices, ReferencesService, inputMaskingService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DocTypesPage);

    this.http = http;
    this.env = env;
    this.formBuilder = formBuilder;
    this.alertServices = alertServices;
    this.ReferencesService = ReferencesService;
    this.inputMaskingService = inputMaskingService;
    this.DocTypeForm = this.formBuilder.group({
      doc_type_code: [""],
      doc_type_desc: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      doc_no_pages: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      doc_def_size: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      doc_size_edit: [""],
      doc_scan_loc: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      doc_ref_type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
    this.showLoader = false;
    this.isSubmitted = false;
    this.isInserting = false;
    this.isUpdating = false;
    this.disableIonSelect = false;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DocTypesPage, [{
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
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.ReferencesService.GetDocumentTypes();

              case 2:
                this.DocType = _context.sent;
                _context.next = 5;
                return this.ReferencesService.GetIdocDefSize();

              case 5:
                this.DocDefSizeRef = _context.sent;
                _context.next = 8;
                return this.ReferencesService.GetVouchPrint();

              case 8:
                this.IDocScanLoc = _context.sent;
                _context.next = 11;
                return this.ReferencesService.GetTCRadRefType();

              case 11:
                this.TCRadRefType = _context.sent;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "insertDocTypes",
    value: function insertDocTypes() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.isUpdating = false;
                this.isInserting = true;
                this.disableIonSelect = false;
                this.DocTypeForm.reset();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "updateDocType",
    value: function updateDocType(index) {
      var DocType = this.DocType[index];
      this.DocTypeForm.patchValue({
        doc_type_code: DocType.doc_type_code,
        doc_type_desc: DocType.doc_type_desc,
        doc_no_pages: Number(DocType.doc_no_pages),
        doc_def_size: DocType.doc_def_size.toString(),
        doc_size_edit: DocType.doc_size_edit == "1",
        doc_scan_loc: DocType.doc_scan_loc.toString(),
        doc_ref_type: DocType.doc_ref_type.toString()
      });
      this.isInserting = false;
      this.isUpdating = true;
      this.disableIonSelect = true;
    }
  }, {
    key: "deleteDocType",
    value: function deleteDocType(doc_type_code) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.alertServices.DeleteAlert("هل انت متاكد من مسح هذه المستند؟");

              case 2:
                if (!_context3.sent) {
                  _context3.next = 5;
                  break;
                }

                this.showLoader = true;
                this.http.post(this.env.API_URL + "api/Documents/DeleteDocType", {
                  doc_type_code: doc_type_code.toString()
                }).subscribe({
                  next: function next(data) {
                    _this.showLoader = false;

                    _this.alertServices.showAlertConfirm(" تم الحذف بنجاح", true);
                  },
                  error: function error(err) {
                    console.log(err);

                    _this.alertServices.showAlertError(err.error, false);

                    _this.showLoader = false;
                  }
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
      this.DocTypeForm.reset();
    }
  }, {
    key: "submitDocTypeInsert",
    value: function submitDocTypeInsert() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.showLoader = true;

                if (!this.DocTypeForm.valid) {
                  _context4.next = 8;
                  break;
                }

                _context4.next = 4;
                return this.alertServices.SaveAlert("هل تريد الاضافة؟");

              case 4:
                if (!_context4.sent) {
                  _context4.next = 6;
                  break;
                }

                this.http.post(this.env.API_URL + "api/Documents/InsertDocType", {
                  doc_type_desc: this.DocTypeForm.value.doc_type_desc.toString(),
                  doc_ref_type: this.DocTypeForm.value.doc_ref_type.toString(),
                  doc_no_pages: this.DocTypeForm.value.doc_no_pages.toString(),
                  doc_def_size: this.DocTypeForm.value.doc_def_size.toString(),
                  doc_size_edit: this.DocTypeForm.value.doc_size_edit === true ? 1 : 0,
                  doc_scan_loc: this.DocTypeForm.value.doc_scan_loc.toString()
                }).subscribe({
                  next: function next(data) {
                    _this2.showLoader = false;

                    _this2.alertServices.showAlertConfirm(" تم الاضافة بنجاح", true);
                  },
                  error: function error(err) {
                    console.log(err);

                    _this2.alertServices.showAlertError(err.error, false);

                    _this2.showLoader = false;
                  }
                });

              case 6:
                _context4.next = 10;
                break;

              case 8:
                this.alertServices.showAlertError(" يجب ادخال جميع البيانات", false);
                this.showLoader = false;

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "submitDocTypeUpdate",
    value: function submitDocTypeUpdate() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var _this3 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.showLoader = true;

                if (!this.DocTypeForm.valid) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 4;
                return this.alertServices.SaveAlert("هل تريد تعديل البيانات؟");

              case 4:
                if (!_context5.sent) {
                  _context5.next = 6;
                  break;
                }

                this.http.post(this.env.API_URL + "api/Documents/UpdateDocType", {
                  doc_type_code: this.DocTypeForm.value.doc_type_code.toString(),
                  doc_type_desc: this.DocTypeForm.value.doc_type_desc.toString(),
                  doc_no_pages: this.DocTypeForm.value.doc_no_pages.toString(),
                  doc_def_size: this.DocTypeForm.value.doc_def_size.toString(),
                  doc_size_edit: this.DocTypeForm.value.doc_size_edit === true ? 1 : 0
                }).subscribe({
                  next: function next(data) {
                    _this3.showLoader = false;

                    _this3.alertServices.showAlertConfirm(" تم التعديل بنجاح", true);
                  },
                  error: function error(err) {
                    console.log(err);

                    _this3.alertServices.showAlertError(err.error, false);

                    _this3.showLoader = false;
                  }
                });

              case 6:
                _context5.next = 10;
                break;

              case 8:
                this.alertServices.showAlertError(" يجب ادخال جميع البيانات", false);
                this.showLoader = false;

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }]);

  return DocTypesPage;
}();

DocTypesPage.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_7__.EnvService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_6__.ReferencesService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_8__.InputMaskingService
  }];
};

DocTypesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-doc-types",
  template: _doc_types_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_doc_types_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], DocTypesPage);


/***/ }),

/***/ 34141:
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/head-office/doc-types/doc-types.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2MtdHlwZXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 72928:
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/head-office/doc-types/doc-types.page.html?ngResource ***!
  \**********************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div class=\"ion-padding\" *ngIf=\"!isInserting && !isUpdating\">\n  <div>\n    <h5 class=\"mr-1 mb-md-0 pb-3\">انواع مستندات المسح الضوئي</h5>\n  </div>\n  <div class=\"card\">\n    <div class=\"table-responsive\">\n      <table class=\"table card-body\">\n        <thead>\n          <th class=\"text-center\">انواع مستندات المسح الضوئي</th>\n          <th></th>\n          <th class=\"text-center\">\n            <ion-button (click)=\"insertDocTypes()\"\n              ><ion-icon name=\"add-outline\"></ion-icon\n            ></ion-button>\n          </th>\n        </thead>\n\n        <tbody>\n          <tr *ngFor=\"let DocType of DocType; let i = index\">\n            <td class=\"text-center\">{{DocType.doc_type_desc}}</td>\n\n            <td class=\"text-center\">\n              <ion-button (click)=\"updateDocType(i)\"\n                ><ion-icon name=\"create-outline\"></ion-icon\n              ></ion-button>\n            </td>\n            <td class=\"text-center\">\n              <ion-button\n                color=\"danger\"\n                (click)=\"deleteDocType(DocType.doc_type_code)\"\n              >\n                <ion-icon name=\"trash-outline\"></ion-icon>\n              </ion-button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"isInserting || isUpdating\">\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"DocTypeForm\">\n          <ion-row>\n            <ion-col class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                اسم المستند\n              </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"doc_type_desc\"\n              >\n              </ion-input>\n              <ion-col\n                class=\"text-danger input-validator\"\n                *ngIf=\"isSubmitted && ((DocTypeForm.controls['doc_type_desc'].errors?.['required']))\"\n                role=\"alert\"\n              >\n                يجب ادخال اسم المستند\n              </ion-col>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                عدد الصفحات\n              </ion-label>\n              <ion-col class=\"text-danger input-validator\">\n                <ion-input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"doc_no_pages\"\n                  [min]=\"0\"\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 99, 0)\"\n                >\n                </ion-input>\n              </ion-col>\n            </ion-col>\n            <ion-col class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                حجم الورقة\n              </ion-label>\n              <ion-select\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                interface=\"popover\"\n                placeholder=\"حجم الورقة \"\n                formControlName=\"doc_def_size\"\n              >\n                <ion-select-option\n                  class=\"pb-2\"\n                  *ngFor=\"let docSize of DocDefSizeRef\"\n                  [value]=\"docSize.ref_code\"\n                >\n                  {{docSize.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col class=\"col-12 col-md-4 mt-3\" style=\"align-self: center\">\n              <ion-checkbox\n                class=\"ml-2\"\n                type=\"checkbox\"\n                formControlName=\"doc_size_edit\"\n              ></ion-checkbox>\n              <ion-label class=\"form-label form-label-required\">\n                السماح بالتعديل\n              </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                مكان الصيانه\n              </ion-label>\n              <ion-select\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                [disabled]=\"disableIonSelect\"\n                interface=\"popover\"\n                placeholder=\"مكان الصيانه \"\n                formControlName=\"doc_scan_loc\"\n              >\n                <ion-select-option\n                  class=\"pb-2\"\n                  *ngFor=\"let Tc of IDocScanLoc\"\n                  [value]=\"Tc.ref_code\"\n                >\n                  {{Tc.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                مستند خاص ببيانات\n              </ion-label>\n              <ion-select\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                [disabled]=\"disableIonSelect\"\n                interface=\"popover\"\n                placeholder=\"مستند خاص ببيانات  \"\n                formControlName=\"doc_ref_type\"\n                class=\"subselect\"\n              >\n                <ion-select-option\n                  class=\"pb-2\"\n                  *ngFor=\"let Tc of TCRadRefType\"\n                  [value]=\"Tc.ref_code\"\n                >\n                  {{Tc.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n\n          <div class=\"row-12 pt-3\">\n            <div class=\"d-flex justify-content-center mt-2\">\n              <ion-button color=\"danger\" (click)=\"clearForms()\">\n                رجوع\n              </ion-button>\n              <ion-button *ngIf=\"isInserting\" (click)=\"submitDocTypeInsert()\">\n                اضافة\n              </ion-button>\n              <ion-button *ngIf=\"isUpdating\" (click)=\"submitDocTypeUpdate()\">\n                تعديل\n              </ion-button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_head-office_doc-types_doc-types_module_ts.js.map