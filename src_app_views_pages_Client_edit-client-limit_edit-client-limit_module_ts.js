"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_Client_edit-client-limit_edit-client-limit_module_ts"],{

/***/ 4906:
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/Client/edit-client-limit/edit-client-limit-routing.module.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditClientLimitPageRoutingModule": function() { return /* binding */ EditClientLimitPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _edit_client_limit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-client-limit.page */ 98114);






var routes = [{
  path: '',
  component: _edit_client_limit_page__WEBPACK_IMPORTED_MODULE_2__.EditClientLimitPage
}];

var EditClientLimitPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function EditClientLimitPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EditClientLimitPageRoutingModule);
});

EditClientLimitPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], EditClientLimitPageRoutingModule);


/***/ }),

/***/ 5880:
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/Client/edit-client-limit/edit-client-limit.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditClientLimitPageModule": function() { return /* binding */ EditClientLimitPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _edit_client_limit_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-client-limit-routing.module */ 4906);
/* harmony import */ var _edit_client_limit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-client-limit.page */ 98114);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var EditClientLimitPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function EditClientLimitPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, EditClientLimitPageModule);
});

EditClientLimitPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _edit_client_limit_routing_module__WEBPACK_IMPORTED_MODULE_2__.EditClientLimitPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_edit_client_limit_page__WEBPACK_IMPORTED_MODULE_3__.EditClientLimitPage]
})], EditClientLimitPageModule);


/***/ }),

/***/ 98114:
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/Client/edit-client-limit/edit-client-limit.page.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditClientLimitPage": function() { return /* binding */ EditClientLimitPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _edit_client_limit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-client-limit.page.html?ngResource */ 89453);
/* harmony import */ var _edit_client_limit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-client-limit.page.scss?ngResource */ 75356);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/client.service */ 2671);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);














var EditClientLimitPage = /*#__PURE__*/function () {
  function EditClientLimitPage(formBuilder, clientService, inputMaskingService, alertServices, http, env) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EditClientLimitPage);

    this.formBuilder = formBuilder;
    this.clientService = clientService;
    this.inputMaskingService = inputMaskingService;
    this.alertServices = alertServices;
    this.http = http;
    this.env = env;
    this.showLoader = false;
    this.isSearching = true;
    this.isSubmitted = false;
    this.isUpdating = false;
    this.isReportForm = false;
    this.initialSearchType = "1";
    this.disabled = false;
    this.ClientForm = this.formBuilder.group({
      client_name: [""],
      client_code: [""],
      no_conc_loans: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      cr_limit_total: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(EditClientLimitPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "clientSelected",
    value: function clientSelected(event) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.clientService.GetClientLimit(event.client_key);

              case 2:
                this.selectedClient = _context.sent;
                this.ClientForm.patchValue({
                  client_name: this.selectedClient.client_name,
                  client_code: this.selectedClient.org_branch_code + '/' + this.selectedClient.client_code,
                  no_conc_loans: this.selectedClient.no_conc_loans,
                  cr_limit_total: this.selectedClient.cr_limit_total
                });
                this.isSearching = false;
                this.isReportForm = true;
                this.isUpdating = true;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "backToSearch",
    value: function backToSearch() {
      this.clientInfo = null;
      this.isSearching = true;
      this.isReportForm = false;
      this.isUpdating = false;
      this.selectedClient = null;
      this.ClientForm.reset();
    }
  }, {
    key: "submitUpdate",
    value: function submitUpdate() {
      var _this = this;

      this.showLoader = true;

      if (this.ClientForm.valid) {
        this.http.post(this.env.API_URL + "api/ClientRegistration/GetClientLimitUpdate", {
          client_key: this.selectedClient.client_key,
          cr_limit_princ: this.ClientForm.value.cr_limit_total.toString(),
          cr_limit_total: this.ClientForm.value.cr_limit_total.toString(),
          no_conc_loans: this.ClientForm.value.no_conc_loans.toString(),
          uuc: this.selectedClient.uuc
        }).subscribe({
          next: function next(data) {
            _this.showLoader = false;

            _this.alertServices.showAlertConfirm(" تم التعديل بنجاح", true);
          },
          error: function error(err) {
            console.log(err);

            _this.alertServices.showAlertError(err.error, false);

            _this.showLoader = false;
          }
        });
      } else {
        this.alertServices.showAlertError(" يجب ادخال القيمة", false);
        this.showLoader = false;
      }
    }
  }]);

  return EditClientLimitPage;
}();

EditClientLimitPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
  }, {
    type: src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_6__.ClientService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_8__.InputMaskingService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_7__.EnvService
  }];
};

EditClientLimitPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-edit-client-limit',
  template: _edit_client_limit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_edit_client_limit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], EditClientLimitPage);


/***/ }),

/***/ 75356:
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/Client/edit-client-limit/edit-client-limit.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ (function(module) {

module.exports = ".table tbody th,\n.table tbody td {\n  padding: 0.4rem 0.9375rem !important;\n}\n\n.labelpad {\n  padding-bottom: 55px;\n}\n\n@media (min-width: 770px) {\n  .btnMar {\n    margin-right: 290%;\n    font-size: medium;\n  }\n}\n\n.checkBoxs {\n  margin-right: 1.5rem;\n}\n\n.form-control-error {\n  border-color: #ff3366;\n}\n\n.form-control-error:hover {\n  border-color: #da0036;\n}\n\n.input-validator {\n  font-weight: 600;\n  padding-right: 10px;\n  padding-left: 10px;\n  color: #ff3366 !important;\n}\n\n.input-validator::before {\n  content: \"-\";\n  margin-left: 6px;\n}\n\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.checkBox-isactive {\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n\n.group-title {\n  font-weight: 700;\n  font-size: 1.2rem;\n  text-align: center;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n  border-radius: 6px;\n  background-image: linear-gradient(to left, rgba(112, 123, 245, 0.2), var(--card-bg));\n  border-color: #c8cbea;\n  color: var(--body-color);\n}\n\n.nested-form {\n  border: 2px solid rgba(112, 123, 245, 0.2);\n  border-radius: 5px;\n  padding: 1rem 2rem;\n}\n\n.form-group-title {\n  display: block;\n  color: var(--theme-color-primary);\n  font-weight: 700;\n}\n\n.alert-button-confirm {\n  color: var(--body-color);\n}\n\n.image-modal {\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.image-modal::part(content) {\n  max-width: 90%;\n  max-height: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtY2xpZW50LWxpbWl0LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXENsaWVudFxcZWRpdC1jbGllbnQtbGltaXRcXGVkaXQtY2xpZW50LWxpbWl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTs7RUFFRSxvQ0FBQTtBQ0RSOztBRE1FO0VBQ0Usb0JBQUE7QUNISjs7QURVRTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtFQ1BKO0FBQ0Y7O0FEVUU7RUFDRSxvQkFBQTtBQ1JKOztBRFdFO0VBQ0UscUJBQUE7QUNSSjs7QURVSTtFQUNFLHFCQUFBO0FDUk47O0FEWUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ1RKOztBRFdJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDVE47O0FEY0k7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNYTjs7QURlRTtFQUVFLG1CQUFBO01BQUEscUJBQUE7QUNiSjs7QURnQkU7RUFHRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFHQSxvRkFBQTtFQUtBLHFCQUFBO0VBQ0Esd0JBQUE7QUNyQko7O0FEd0JFO0VBR0UsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDdkJKOztBRDBCRTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDdkJKOztBRDBCRTtFQUNFLHdCQUFBO0FDdkJKOztBRDBCRTtFQUNFLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxxQkFBQTtNQUFBLHVCQUFBO0FDdkJKOztBRHdCSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDdEJOIiwiZmlsZSI6ImVkaXQtY2xpZW50LWxpbWl0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgICB0Ym9keSB7XHJcbiAgICAgIHRoLFxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogMC40cmVtIDAuOTM3NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5sYWJlbHBhZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTVweDtcclxuICB9XHJcbiAgXHJcbiAgLy8gaW9uLWJ1dHRvbiB7XHJcbiAgLy8gICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxuICAvLyAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcclxuICAvLyAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc3MHB4KSB7XHJcbiAgICAuYnRuTWFyIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyOTAlO1xyXG4gICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNoZWNrQm94cyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY29udHJvbC1lcnJvciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpO1xyXG4gIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiKDIxOCwgMCwgNTQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuaW5wdXQtdmFsaWRhdG9yIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIi1cIjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tbGFiZWwtcmVxdWlyZWQge1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIipcIjtcclxuICAgICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVja0JveC1pc2FjdGl2ZSB7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIH1cclxuICBcclxuICAuZ3JvdXAtdGl0bGUge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjNDVjY2IxLCAwLjgpO1xyXG4gICAgLy8gY29sb3I6ICNmNmZjZWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjYTRkNDkxLCAwLjMpO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2M4Y2JlYTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgdG8gbGVmdCxcclxuICAgICAgcmdiYSgjNzA3YmY1LCAwLjIpLFxyXG4gICAgICB2YXIoLS1jYXJkLWJnKVxyXG4gICAgKTtcclxuICAgIGJvcmRlci1jb2xvcjogI2M4Y2JlYTtcclxuICAgIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgLm5lc3RlZC1mb3JtIHtcclxuICAgIC8vIGJvcmRlci1yaWdodDogMC4ycmVtIHNvbGlkIHJnYmEoIzcwN2JmNSwgMC4yKTtcclxuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKCM3MDdiZjUsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWdyb3VwLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgXHJcbiAgLmFsZXJ0LWJ1dHRvbi1jb25maXJtIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlLW1vZGFsIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICY6OnBhcnQoY29udGVudCkge1xyXG4gICAgICBtYXgtd2lkdGg6IDkwJTtcclxuICAgICAgbWF4LWhlaWdodDogNzAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCIudGFibGUgdGJvZHkgdGgsXG4udGFibGUgdGJvZHkgdGQge1xuICBwYWRkaW5nOiAwLjRyZW0gMC45Mzc1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbHBhZCB7XG4gIHBhZGRpbmctYm90dG9tOiA1NXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzcwcHgpIHtcbiAgLmJ0bk1hciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyOTAlO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB9XG59XG4uY2hlY2tCb3hzIHtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wtZXJyb3Ige1xuICBib3JkZXItY29sb3I6ICNmZjMzNjY7XG59XG4uZm9ybS1jb250cm9sLWVycm9yOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGEwMDM2O1xufVxuXG4uaW5wdXQtdmFsaWRhdG9yIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufVxuLmlucHV0LXZhbGlkYXRvcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCItXCI7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2tCb3gtaXNhY3RpdmUge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5ncm91cC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgxMTIsIDEyMywgMjQ1LCAwLjIpLCB2YXIoLS1jYXJkLWJnKSk7XG4gIGJvcmRlci1jb2xvcjogI2M4Y2JlYTtcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xufVxuXG4ubmVzdGVkLWZvcm0ge1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDExMiwgMTIzLCAyNDUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xufVxuXG4uZm9ybS1ncm91cC10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hbGVydC1idXR0b24tY29uZmlybSB7XG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcbn1cblxuLmltYWdlLW1vZGFsIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW1hZ2UtbW9kYWw6OnBhcnQoY29udGVudCkge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWF4LWhlaWdodDogNzAlO1xufSJdfQ== */";

/***/ }),

/***/ 89453:
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/Client/edit-client-limit/edit-client-limit.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div\n  class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\"\n>\n  <div>\n    <h4 class=\"mr-1 mb-md-0\">تعديل الحد الائتماني للعميل</h4>\n  </div>\n</div>\n<app-client-search\n  *ngIf=\"isSearching\"\n  [sourcePage]=\"109\"\n  [searchMethod]=\"2\"\n  [resultType]=\"0\"\n  [pageAction]=\"0\"\n  [initialSearchType]=\"initialSearchType\"\n  (selectedClient)=\"clientSelected($event)\"\n>\n</app-client-search>\n<div class=\"card\" *ngIf=\"isReportForm\">\n  <div class=\"card-body\">\n    <form [formGroup]=\"ClientForm\">\n      <ion-row>\n        <ion-col class=\"col-12 col-md-4\">\n          <ion-label class=\"form-label\"> اسم العميل </ion-label>\n          <ion-input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"client_name\"\n            [disabled]=\"true\"\n          >\n          </ion-input>\n        </ion-col>\n        <ion-col class=\"col-12 col-md-4\">\n          <ion-label class=\"form-label\"> كود العميل </ion-label>\n          <ion-input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"client_code\"\n            [disabled]=\"true\"\n          >\n          </ion-input>\n        </ion-col>\n\n        <ion-col>\n          <ion-label class=\"form-label form-label-required\">\n            عددالقروض المفتوحة المسموح بها          \n          </ion-label>\n          <ion-input\n            type=\"number\"\n            class=\"form-control\"\n            formControlName=\"no_conc_loans\"\n            (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 0)\"\n          >\n          </ion-input>\n          <ion-col\n            class=\"text-danger input-validator\"\n            *ngIf=\"isSubmitted && ((ClientForm.controls['no_conc_loans'].errors?.['required']))\"\n            role=\"alert\"\n          >\n            يجب ادخال عدد القروض المفتوحة المسموح بها\n          </ion-col>\n        </ion-col>\n\n        <ion-col>\n          <ion-label class=\"form-label form-label-required\">\n            قيمة القروض المفتوحة المسموح بها\n          </ion-label>\n          <ion-input\n            type=\"number\"\n            class=\"form-control\"\n            formControlName=\"cr_limit_total\"\n            (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 0)\"\n          >\n          </ion-input>\n          <ion-col\n            class=\"text-danger input-validator\"\n            *ngIf=\"isSubmitted && ((ClientForm.controls['cr_limit_total'].errors?.['required']))\"\n            role=\"alert\"\n          >\n            يجب ادخال قيمة القروض المفتوحة المسموح بها\n          </ion-col>\n        </ion-col>\n      </ion-row>\n      <div class=\"row-12 pt-3\">\n        <div class=\"d-flex justify-content-center mt-2\">\n          <ion-button color=\"danger\" size=\"block\" (click)=\"backToSearch()\"\n            >عودة</ion-button\n          >\n          <ion-button *ngIf=\"isUpdating\" (click)=\"submitUpdate()\">\n            تعديل\n          </ion-button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_Client_edit-client-limit_edit-client-limit_module_ts.js.map