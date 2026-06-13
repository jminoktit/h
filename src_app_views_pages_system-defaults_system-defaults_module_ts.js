"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_system-defaults_system-defaults_module_ts"],{

/***/ 7396:
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/system-defaults/system-defaults-routing.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemDefaultsPageRoutingModule": function() { return /* binding */ SystemDefaultsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _system_defaults_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system-defaults.page */ 59423);






var routes = [{
  path: '',
  component: _system_defaults_page__WEBPACK_IMPORTED_MODULE_2__.SystemDefaultsPage
}];

var SystemDefaultsPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SystemDefaultsPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SystemDefaultsPageRoutingModule);
});

SystemDefaultsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], SystemDefaultsPageRoutingModule);


/***/ }),

/***/ 32988:
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/system-defaults/system-defaults.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemDefaultsPageModule": function() { return /* binding */ SystemDefaultsPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _system_defaults_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system-defaults-routing.module */ 7396);
/* harmony import */ var _system_defaults_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-defaults.page */ 59423);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ 63430);











var SystemDefaultsPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function SystemDefaultsPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SystemDefaultsPageModule);
});

SystemDefaultsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _system_defaults_routing_module__WEBPACK_IMPORTED_MODULE_2__.SystemDefaultsPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_system_defaults_page__WEBPACK_IMPORTED_MODULE_3__.SystemDefaultsPage]
})], SystemDefaultsPageModule);


/***/ }),

/***/ 59423:
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/system-defaults/system-defaults.page.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemDefaultsPage": function() { return /* binding */ SystemDefaultsPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _system_defaults_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-defaults.page.html?ngResource */ 71726);
/* harmony import */ var _system_defaults_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system-defaults.page.scss?ngResource */ 24361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);














var SystemDefaultsPage = /*#__PURE__*/function () {
  function SystemDefaultsPage(formBuilder, ReferencesService, http, env, alertServices, inputMaskingService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SystemDefaultsPage);

    this.formBuilder = formBuilder;
    this.ReferencesService = ReferencesService;
    this.http = http;
    this.env = env;
    this.alertServices = alertServices;
    this.inputMaskingService = inputMaskingService;
    this.showLoader = false;
    this.isEditing = false;
    this.SysDefForm = this.formBuilder.group({
      vouch_print: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      gl_repay_cash: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov000: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_postpone_00: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_postpone_01: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      period_range1: [[_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min], [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max]],
      prov001: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      period_range2: [[_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min], [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max]],
      prov031: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      period_range3: [[_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min], [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max]],
      prov061: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      period_range4: [[_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min], [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max]],
      prov091: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      period_range5: [[_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min], [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max]],
      prov121: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      period_range6: [[_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min], [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.max]],
      provision_range6: [[_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      provision_range7: [[_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      include_resc: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      provresc: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      resc_range_01: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_resc_01: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      include_resc_doubt: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_resc_02: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      provresc_doubt: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      cb_curr_acc_f: [0],
      tot_equity_f: [0],
      tot_liab_f: [0],
      tot_assets_f: [0],
      read_mark_inv_f: [0],
      client_audit_app: [0],
      cosigner_audit_app: [0],
      client_info_col_1_dual_check: [0],
      terrorism_menu: [0],
      terrorism_reject_automatic: [0],
      terrorism_reject_status: [0],
      terrorism_reject_reason: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      iscore_month_search: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      iscore_add_trans: [0],
      iscore_trans_type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      iscore_trans_amount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      iscore_bank_default: [0],
      iscore_lang_type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      client_status_auto_flag: [0],
      client_status_auto_num: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      client_status_auto_late_calc: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      close_all_branches: [0],
      csv_view: [0],
      prov_postpone_dtl_1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_postpone_dtl_2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_postpone_dtl_3: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_postpone_dtl_4: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_postpone_dtl_5: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_postpone_dtl_6: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_postpone_dtl_7: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_postpone_dtl_8: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_resc_dtl_1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_resc_dtl_2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_resc_dtl_3: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_resc_dtl_4: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_resc_dtl_5: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_resc_dtl_6: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_resc_dtl_7: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      prov_resc_dtl_8: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
      org_lic_num: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(SystemDefaultsPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.ReferencesService.GetOrgInfo();

              case 2:
                this.GetOrgInfo = _context.sent;
                _context.next = 5;
                return this.ReferencesService.GetVouchPrint();

              case 5:
                this.vouch_print = _context.sent;
                _context.next = 8;
                return this.ReferencesService.GetGlRepayCash();

              case 8:
                this.gl_repay_cash = _context.sent;
                _context.next = 11;
                return this.ReferencesService.GetIncludeResc();

              case 11:
                this.include_resc = _context.sent;
                _context.next = 14;
                return this.ReferencesService.GetRejActive();

              case 14:
                this.terrorism_reject_reason = _context.sent;
                _context.next = 17;
                return this.ReferencesService.GetTransActive();

              case 17:
                this.iscore_trans_type = _context.sent;
                _context.next = 20;
                return this.ReferencesService.GetClientStatusAutoLate();

              case 20:
                this.client_status_auto_late_calc = _context.sent;
                this.SysDefForm.patchValue({
                  vouch_print: this.GetOrgInfo.vouch_print,
                  gl_repay_cash: this.GetOrgInfo.gl_repay_cash,
                  prov000: this.GetOrgInfo.prov000,
                  prov_postpone_00: this.GetOrgInfo.prov_postpone_00,
                  prov_postpone_01: this.GetOrgInfo.prov_postpone_01,
                  period_range1: this.GetOrgInfo.period_range1,
                  prov001: this.GetOrgInfo.prov001,
                  period_range2: this.GetOrgInfo.period_range2,
                  prov031: this.GetOrgInfo.prov031,
                  period_range3: this.GetOrgInfo.period_range3,
                  prov061: this.GetOrgInfo.prov061,
                  period_range4: this.GetOrgInfo.period_range4,
                  prov091: this.GetOrgInfo.prov091,
                  period_range5: this.GetOrgInfo.period_range5,
                  prov121: this.GetOrgInfo.prov121,
                  period_range6: this.GetOrgInfo.period_range6,
                  provision_range6: this.GetOrgInfo.provision_range6,
                  provision_range7: this.GetOrgInfo.provision_range7,
                  include_resc: this.GetOrgInfo.include_resc,
                  provresc: this.GetOrgInfo.provresc,
                  resc_range_01: this.GetOrgInfo.resc_range_01,
                  prov_resc_01: this.GetOrgInfo.prov_resc_01,
                  include_resc_doubt: this.GetOrgInfo.include_resc_doubt,
                  provresc_doubt: this.GetOrgInfo.provresc_doubt,
                  prov_resc_02: this.GetOrgInfo.prov_resc_02,
                  cb_curr_acc_f: this.GetOrgInfo.cb_curr_acc_f == "1",
                  read_mark_inv_f: this.GetOrgInfo.read_mark_inv_f == "1",
                  tot_assets_f: this.GetOrgInfo.tot_assets_f == "1",
                  tot_liab_f: this.GetOrgInfo.tot_liab_f == "1",
                  tot_equity_f: this.GetOrgInfo.tot_equity_f == "1",
                  client_audit_app: this.GetOrgInfo.client_audit_app == "1",
                  cosigner_audit_app: this.GetOrgInfo.cosigner_audit_app == "1",
                  client_info_col_1_dual_check: this.GetOrgInfo.client_info_col_1_dual_check == "1",
                  terrorism_menu: this.GetOrgInfo.terrorism_menu == "1",
                  terrorism_reject_automatic: this.GetOrgInfo.terrorism_reject_automatic == "1",
                  terrorism_reject_status: this.GetOrgInfo.terrorism_reject_status == "1",
                  terrorism_reject_reason: this.GetOrgInfo.terrorism_reject_reason,
                  iscore_month_search: this.GetOrgInfo.iscore_month_search,
                  iscore_add_trans: this.GetOrgInfo.iscore_add_trans == "1",
                  iscore_trans_type: this.GetOrgInfo.iscore_trans_type,
                  iscore_trans_amount: this.GetOrgInfo.iscore_trans_amount,
                  iscore_bank_default: this.GetOrgInfo.iscore_bank_default == "1",
                  iscore_lang_type: this.GetOrgInfo.iscore_lang_type,
                  client_status_auto_flag: this.GetOrgInfo.client_status_auto_flag == "1",
                  client_status_auto_num: this.GetOrgInfo.client_status_auto_num,
                  client_status_auto_late_calc: this.GetOrgInfo.client_status_auto_late_calc,
                  close_all_branches: this.GetOrgInfo.close_all_branches == "1",
                  csv_view: this.GetOrgInfo.csv_view == "1",
                  prov_postpone_dtl_1: this.GetOrgInfo.prov_postpone_dtl_1,
                  prov_postpone_dtl_2: this.GetOrgInfo.prov_postpone_dtl_2,
                  prov_postpone_dtl_3: this.GetOrgInfo.prov_postpone_dtl_3,
                  prov_postpone_dtl_4: this.GetOrgInfo.prov_postpone_dtl_4,
                  prov_postpone_dtl_5: this.GetOrgInfo.prov_postpone_dtl_5,
                  prov_postpone_dtl_6: this.GetOrgInfo.prov_postpone_dtl_6,
                  prov_postpone_dtl_7: this.GetOrgInfo.prov_postpone_dtl_7,
                  prov_postpone_dtl_8: this.GetOrgInfo.prov_postpone_dtl_8,
                  prov_resc_dtl_1: this.GetOrgInfo.prov_resc_dtl_1,
                  prov_resc_dtl_2: this.GetOrgInfo.prov_resc_dtl_2,
                  prov_resc_dtl_3: this.GetOrgInfo.prov_resc_dtl_3,
                  prov_resc_dtl_4: this.GetOrgInfo.prov_resc_dtl_4,
                  prov_resc_dtl_5: this.GetOrgInfo.prov_resc_dtl_5,
                  prov_resc_dtl_6: this.GetOrgInfo.prov_resc_dtl_6,
                  prov_resc_dtl_7: this.GetOrgInfo.prov_resc_dtl_7,
                  prov_resc_dtl_8: this.GetOrgInfo.prov_resc_dtl_8,
                  org_lic_num: this.GetOrgInfo.org_lic_num
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "OrgInfoControls",
    get: function get() {
      return this.SysDefForm.controls;
    }
  }, {
    key: "EditOrg",
    value: function EditOrg() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.showLoader = true;
                this.http.post(this.env.API_URL + "api/Settings/GetOrgInfoUpdate", {
                  prov001: this.SysDefForm.value.prov001,
                  prov031: this.SysDefForm.value.prov031,
                  prov061: this.SysDefForm.value.prov061,
                  prov091: this.SysDefForm.value.prov091,
                  prov121: this.SysDefForm.value.prov121,
                  cb_curr_acc_f: this.SysDefForm.value.cb_curr_acc_f == 1 ? 1 : 0,
                  read_mark_inv_f: this.SysDefForm.value.read_mark_inv_f == 1 ? 1 : 0,
                  tot_assets_f: this.SysDefForm.value.tot_assets_f == 1 ? 1 : 0,
                  tot_liab_f: this.SysDefForm.value.tot_liab_f == 1 ? 1 : 0,
                  tot_equity_f: this.SysDefForm.value.tot_equity_f == 1 ? 1 : 0,
                  include_resc: this.SysDefForm.value.include_resc,
                  provresc: this.SysDefForm.value.provresc,
                  include_resc_doubt: this.SysDefForm.value.include_resc_doubt,
                  provresc_doubt: this.SysDefForm.value.provresc_doubt,
                  client_audit_app: this.SysDefForm.value.client_audit_app == 1 ? 1 : 0,
                  cosigner_audit_app: this.SysDefForm.value.cosigner_audit_app == 1 ? 1 : 0,
                  vouch_print: this.SysDefForm.value.vouch_print,
                  gl_repay_cash: this.SysDefForm.value.gl_repay_cash,
                  client_info_col_1_dual_check: this.SysDefForm.value.client_info_col_1_dual_check == 1 ? 1 : 0,
                  prov000: this.SysDefForm.value.prov000,
                  period_range1: this.SysDefForm.value.period_range1,
                  period_range2: this.SysDefForm.value.period_range2,
                  period_range3: this.SysDefForm.value.period_range3,
                  period_range4: this.SysDefForm.value.period_range4,
                  period_range5: this.SysDefForm.value.period_range5,
                  period_range6: this.SysDefForm.value.period_range6,
                  provision_range6: this.SysDefForm.value.provision_range6,
                  provision_range7: this.SysDefForm.value.provision_range7,
                  prov_postpone_00: this.SysDefForm.value.prov_postpone_00,
                  prov_postpone_01: this.SysDefForm.value.prov_postpone_01,
                  resc_range_01: this.SysDefForm.value.resc_range_01,
                  prov_resc_01: this.SysDefForm.value.prov_resc_01,
                  prov_resc_02: this.SysDefForm.value.prov_resc_02,
                  iscore_month_search: this.SysDefForm.value.iscore_month_search,
                  terrorism_menu: this.SysDefForm.value.terrorism_menu == 1 ? 1 : 0,
                  terrorism_reject_automatic: this.SysDefForm.value.terrorism_reject_automatic == 1 ? 1 : 0,
                  terrorism_reject_reason: this.SysDefForm.value.terrorism_reject_reason,
                  terrorism_reject_status: this.SysDefForm.value.terrorism_reject_status == 1 ? 1 : 0,
                  iscore_add_trans: this.SysDefForm.value.iscore_add_trans == 1 ? 1 : 0,
                  iscore_trans_type: this.SysDefForm.value.iscore_trans_type,
                  iscore_trans_amount: this.SysDefForm.value.iscore_trans_amount,
                  iscore_bank_default: this.SysDefForm.value.iscore_bank_default == 1 ? 1 : 0,
                  close_all_branches: this.SysDefForm.value.close_all_branches == 1 ? 1 : 0,
                  iscore_lang_type: this.SysDefForm.value.iscore_lang_type,
                  csv_view: this.SysDefForm.value.csv_view == 1 ? 1 : 0,
                  client_status_auto_flag: this.SysDefForm.value.client_status_auto_flag == 1 ? 1 : 0,
                  client_status_auto_num: this.SysDefForm.value.client_status_auto_num,
                  client_status_auto_late_calc: this.SysDefForm.value.client_status_auto_late_calc,
                  prov_postpone_dtl_1: this.SysDefForm.value.prov_postpone_dtl_1,
                  prov_postpone_dtl_2: this.SysDefForm.value.prov_postpone_dtl_2,
                  prov_postpone_dtl_3: this.SysDefForm.value.prov_postpone_dtl_3,
                  prov_postpone_dtl_4: this.SysDefForm.value.prov_postpone_dtl_4,
                  prov_postpone_dtl_5: this.SysDefForm.value.prov_postpone_dtl_5,
                  prov_postpone_dtl_6: this.SysDefForm.value.prov_postpone_dtl_6,
                  prov_postpone_dtl_7: this.SysDefForm.value.prov_postpone_dtl_7,
                  prov_postpone_dtl_8: this.SysDefForm.value.prov_postpone_dtl_8,
                  prov_resc_dtl_1: this.SysDefForm.value.prov_resc_dtl_1,
                  prov_resc_dtl_2: this.SysDefForm.value.prov_resc_dtl_2,
                  prov_resc_dtl_3: this.SysDefForm.value.prov_resc_dtl_3,
                  prov_resc_dtl_4: this.SysDefForm.value.prov_resc_dtl_4,
                  prov_resc_dtl_5: this.SysDefForm.value.prov_resc_dtl_5,
                  prov_resc_dtl_6: this.SysDefForm.value.prov_resc_dtl_6,
                  prov_resc_dtl_7: this.SysDefForm.value.prov_resc_dtl_7,
                  prov_resc_dtl_8: this.SysDefForm.value.prov_resc_dtl_8,
                  org_lic_num: this.SysDefForm.value.org_lic_num
                }).subscribe({
                  next: function next(data) {
                    _this.showLoader = false;

                    _this.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                  },
                  error: function error(err) {
                    console.log(err);

                    _this.alertServices.showAlertError(err.error, false);

                    _this.showLoader = false;
                  }
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }]);

  return SystemDefaultsPage;
}();

SystemDefaultsPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_5__.ReferencesService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__.EnvService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_8__.InputMaskingService
  }];
};

SystemDefaultsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-system-defaults",
  template: _system_defaults_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_system_defaults_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], SystemDefaultsPage);


/***/ }),

/***/ 24361:
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/system-defaults/system-defaults.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzeXN0ZW0tZGVmYXVsdHMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 71726:
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/system-defaults/system-defaults.page.html?ngResource ***!
  \**********************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div class=\"row\">\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"SysDefForm\">\n          <ion-col>\n            <h1 class=\"mr-1 mb-md-0 pb-3\">تعديل إفتراضات النظام</h1>\n          </ion-col>\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"form-label form-label-required\">\n                يتم طباعة الشيكات فى\n              </ion-label>\n              <ion-select\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                interface=\"popover\"\n                placeholder=\"يتم طباعة الشيكات فى\"\n                formControlName=\"vouch_print\"\n              >\n                <ion-select-option\n                  class=\"pb-2\"\n                  *ngFor=\"let type of vouch_print\"\n                  [value]=\"type.ref_code\"\n                >\n                  {{type.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col>\n              <ion-label class=\"form-label form-label-required\">\n                النظام المحاسبى المستخدم\n              </ion-label>\n              <ion-select\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                interface=\"popover\"\n                placeholder=\"النظام المحاسبى المستخدم \"\n                formControlName=\"gl_repay_cash\"\n              >\n                <ion-select-option\n                  class=\"pb-2\"\n                  *ngFor=\"let type of gl_repay_cash\"\n                  [value]=\"type.ref_code\"\n                >\n                  {{type.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-md-7\">\n              <ion-label class=\"form-label form-label-required\">\n                رقم الترخيص\n              </ion-label>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"org_lic_num\"\n              >\n              </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-col>\n            <h4 class=\"mr-1 mb-md-0 pb-3\">مخصصات الديون فى خطر</h4>\n          </ion-col>\n          <ion-row>\n            <ion-col  class=\"col-md-6\">\n              \n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <h6 class=\"mr-1 mb-md-0 pb-3\">القروض المرحلة</h6>\n            </ion-col>\n            <ion-col class=\"col-md-2\">\n              <h6 class=\"mr-1 mb-md-0 pb-3\">القروض المجدولة</h6>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-md-5\">\n              <ion-label >\n                القروض الجيدة (الغير متأخرة)\n              </ion-label>\n            </ion-col>\n            <ion-col  class=\"col-md-1\">\n              <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"prov000\"\n              (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n            >\n            </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_postpone_dtl_1\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_resc_dtl_1\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-label >\n                القروض المرحلة\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_postpone_00\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1000, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-md-8\">\n            </ion-col>\n            <ion-col  class=\"col-md-1\">\n              <ion-label>\n                القروض المرحلة\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_postpone_01\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1000, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\"> من </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"number\"\n                class=\"form-control\"\n                value=\"1\"\n                [disabled]=\"true\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\">\n                يوم الى\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"number\"\n                class=\"form-control\"\n                formControlName=\"period_range1\"\n                id=\"period_range1\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\">\n                يوم\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov001\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1000, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_postpone_dtl_2\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_resc_dtl_2\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\"> من </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"number\"\n                value=\"{{(OrgInfoControls.period_range1.value + 1 > 999)? 999 : OrgInfoControls.period_range1.value + 1}}\"\n                [disabled]=\"true\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\">\n                يوم الى\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"number\"\n                class=\"form-control\"\n                formControlName=\"period_range2\"\n                id=\"period_range2\"\n                min=\"{{(OrgInfoControls.period_range1.value + 1 > 999)? 999 : OrgInfoControls.period_range1.value + 1}}\"\n                max=\"{{OrgInfoControls.period_range3.value && 999}}\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\">\n                يوم\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov031\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1000, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_postpone_dtl_3\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_resc_dtl_3\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\"> من </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"number\"\n                value=\"{{(OrgInfoControls.period_range2.value + 1 > 999)? 999 : OrgInfoControls.period_range2.value + 1}}\"\n                [disabled]=\"true\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\">\n                يوم الى\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"number\"\n                class=\"form-control\"\n                formControlName=\"period_range3\"\n                id=\"period_range3\"\n                min=\"{{(OrgInfoControls.period_range2.value + 1 > 999)? 999 : OrgInfoControls.period_range2.value + 1}}\"\n                max=\"{{OrgInfoControls.period_range4.value && 999}}\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\">\n                يوم\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov061\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1000, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_postpone_dtl_4\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_resc_dtl_4\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\"> من </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"number\"\n                value=\"{{(OrgInfoControls.period_range3.value + 1 > 999)? 999 : OrgInfoControls.period_range3.value + 1}}\"\n                [disabled]=\"true\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\">\n                يوم الى\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"number\"\n                class=\"form-control\"\n                formControlName=\"period_range4\"\n                id=\"period_range4\"\n                min=\"{{(OrgInfoControls.period_range3.value + 1 > 999)? 999 : OrgInfoControls.period_range3.value + 1}}\"\n                max=\"{{OrgInfoControls.period_range5.value && 999}}\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\">\n                يوم\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov091\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1000, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_postpone_dtl_5\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_resc_dtl_5\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\"> من </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"number\"\n                value=\"{{(OrgInfoControls.period_range4.value + 1 > 999)? 999 : OrgInfoControls.period_range4.value + 1}}\"\n                [disabled]=\"true\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\">\n                يوم الى\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"number\"\n                class=\"form-control\"\n                formControlName=\"period_range5\"\n                id=\"period_range5\"\n                min=\"{{(OrgInfoControls.period_range4.value + 1 > 999)? 999 : OrgInfoControls.period_range4.value + 1}}\"\n                max=\"{{OrgInfoControls.period_range6.value && 999}}\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\">\n                يوم\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov121\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1000, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_postpone_dtl_6\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_resc_dtl_6\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\"> من </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"number\"\n                value=\"{{(OrgInfoControls.period_range5.value + 1 > 999)? 999 : OrgInfoControls.period_range5.value + 1}}\"\n                [disabled]=\"true\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\">\n                يوم الى\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"number\"\n                class=\"form-control\"\n                formControlName=\"period_range6\"\n                id=\"period_range6\"\n                min=\"{{(OrgInfoControls.period_range5.value + 1 > 999)? 999 : OrgInfoControls.period_range5.value + 1}}\"\n                max=\" 999\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\">\n                يوم\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"provision_range6\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1000, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_postpone_dtl_7\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_resc_dtl_7\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-md-2\">\n              <ion-label class=\"form-label form-label-required\"> </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\">\n                أكثر من\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"number\"\n                value=\"{{(OrgInfoControls.period_range6.value + 1 > 999)? 999 : OrgInfoControls.period_range6.value }}\"\n                [disabled]=\"true\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-label class=\"form-label form-label-required\">\n                يوم\n              </ion-label>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"number\"\n                class=\"form-control\"\n                formControlName=\"provision_range7\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_postpone_dtl_8\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col class=\"col-md-1\">\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_resc_dtl_8\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-md-2\">\n              <ion-label class=\"form-label form-label-required\">\n                القروض المجدولةالغير مشكوك في سدادها\n              </ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-select\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                interface=\"popover\"\n                placeholder=\"  القروض المجدولةالغير مشكوك في سدادها  \"\n                formControlName=\"include_resc\"\n              >\n                <ion-select-option\n                  class=\"pb-2\"\n                  *ngFor=\"let type of include_resc\"\n                  [value]=\"type.ref_code\"\n                >\n                  {{type.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"provresc\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col>\n              <h1>%</h1>\n            </ion-col>\n            <ion-col>\n              <ion-label class=\"form-label form-label-required\">\n                عدد ايام التاخير من 0 الي\n              </ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"resc_range_01\"\n                id=\"resc_range_01\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_resc_01\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col>\n              <h1>%</h1>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-md-2\">\n              <ion-label class=\"form-label form-label-required\">\n                القروض المجدولة المشكوك في سدادها\n              </ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-select\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                interface=\"popover\"\n                placeholder=\"القروض المجدولة المشكوك في سدادها \"\n                formControlName=\"include_resc_doubt\"\n              >\n                <ion-select-option\n                  class=\"pb-2\"\n                  *ngFor=\"let type of include_resc\"\n                  [value]=\"type.ref_code\"\n                >\n                  {{type.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </ion-col>\n            <ion-col>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"provresc_doubt\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col>\n              <h1>%</h1>\n            </ion-col>\n            <ion-col>\n              <ion-label class=\"form-label form-label-required\">\n                عدد ايام التاخير من\n              </ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-input\n                type=\"number\"\n                class=\"form-control\"\n                value=\"{{(OrgInfoControls.resc_range_01.value + 1 > 999)? 999 : OrgInfoControls.resc_range_01.value + 1}}\"\n                [disabled]=\"true\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"prov_resc_02\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col>\n              <h1>%</h1>\n            </ion-col>\n          </ion-row>\n          <ion-col>\n            <h4 class=\"mr-1 mb-md-0 pb-3\">\n              صيانة مدخلات الميزانية بالمركز الرئيسى\n            </h4>\n          </ion-col>\n          <ion-row>\n            <ion-col>\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"cb_curr_acc_f\"\n              ></ion-checkbox>\n              <ion-label> رصيد الحسابات الجارية والبنوك </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"read_mark_inv_f\"\n              ></ion-checkbox>\n              <ion-label> المبالغ المعاد إستثمارها بالسوق </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"tot_assets_f\"\n              ></ion-checkbox>\n              <ion-label> إجمالى الأصول </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"tot_liab_f\"\n              ></ion-checkbox>\n              <ion-label> إجمالى الخصوم </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"tot_equity_f\"\n              ></ion-checkbox>\n              <ion-label> إجمالى رأس المال وحقوق الملكية </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-col>\n            <h4 class=\"mr-1 mb-md-0 pb-3\">الرقابة الثنائية</h4>\n          </ion-col>\n          <ion-row>\n            <ion-col>\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"client_audit_app\"\n              ></ion-checkbox>\n              <ion-label> تطبق على تغيير بيانات الهوية للعميل </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"cosigner_audit_app\"\n                [disabled]=\"true\"\n              ></ion-checkbox>\n              <ion-label> تطبق على تغيير الضامن بعد إنشاء القرض </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"client_info_col_1_dual_check\"\n              ></ion-checkbox>\n              <ion-label>\n                تطبق على ادخال وصف العمود كود 1 فى جدول بيانات العملاء\n              </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-col>\n            <h4 class=\"mr-1 mb-md-0 pb-3\">استعلام ISCORE</h4>\n          </ion-col>\n          <ion-row>\n            <ion-col class=\"col-sm-2 mb-1\">\n              <ion-label> عدد أيام صلاحية الاستعلام الائتماني </ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"iscore_month_search\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\n              >\n              </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"iscore_add_trans\"\n              ></ion-checkbox>\n              <ion-label> ادخال حركة مالية مع الاستعلام </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-sm-1 mb-1\">\n              <ion-label> نوع الحركة </ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-select\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                interface=\"popover\"\n                placeholder=\"نوع الحركة \"\n                formControlName=\"iscore_trans_type\"\n              >\n                <ion-select-option\n                  class=\"pb-2\"\n                  *ngFor=\"let type of iscore_trans_type\"\n                  [value]=\"type.type_key\"\n                >\n                  {{type.trans_act_desc}}\n                </ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-sm-1 mb-1\">\n              <ion-label> مبلغ الحركة </ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"iscore_trans_amount\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 4)\"\n              >\n              </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"iscore_bank_default\"\n              ></ion-checkbox>\n              <ion-label> سداد فى الخزينة الافتراضية للفرع </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-sm-1 mb-1\">\n              <ion-label> لغة التقرير </ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-select\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                interface=\"popover\"\n                placeholder=\"لغة التقرير\"\n                formControlName=\"iscore_lang_type\"\n              >\n                <ion-select-option value=\"AR\"> عربي</ion-select-option>\n                <ion-select-option value=\"EN\"> انجليزي</ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-col>\n            <h4 class=\"mr-1 mb-md-0 pb-3\">قوائم الارهاب</h4>\n          </ion-col>\n          <ion-row>\n            <ion-col>\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"terrorism_menu\"\n              ></ion-checkbox>\n              <ion-label> تطبيق نظام قوائم الارهاب </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"terrorism_reject_automatic\"\n              ></ion-checkbox>\n              <ion-label>\n                رفض العميل المتواجد فى قوائم الارهاب اتوماتيك\n              </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"terrorism_reject_status\"\n              ></ion-checkbox>\n              <ion-label>\n                منع التعامل مع العميل في قوائم الارهاب اتوماتيك\n              </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-sm-3 mb-1\">\n              <ion-label>\n                سبب رفض العميل المتواجد فى قوائم الارهاب اتوماتيك\n              </ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-select\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                interface=\"popover\"\n                placeholder=\"سبب رفض العميل المتواجد فى قوائم الارهاب اتوماتيك\"\n                formControlName=\"terrorism_reject_reason\"\n              >\n                <ion-select-option\n                  class=\"pb-2\"\n                  *ngFor=\"let type of terrorism_reject_reason\"\n                  [value]=\"type.loan_rej_code\"\n                >\n                  {{type.loan_rej_desc}}\n                </ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-col>\n            <h4 class=\"mr-1 mb-md-0 pb-3\">اعدادات العملاء المتأخرين</h4>\n          </ion-col>\n          <ion-row>\n            <ion-col>\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"client_status_auto_flag\"\n              ></ion-checkbox>\n              <ion-label>\n                تفعيل تغيير حالة العميل الى ممنوع التعامل تلقائيآ\n              </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-sm-1 mb-1\">\n              <ion-label> بعد عدد ايام تأخير </ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-input\n                type=\"text\"\n                class=\"form-control\"\n                formControlName=\"client_status_auto_num\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e7, 0)\"\n              >\n              </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"col-sm-2 mb-1\">\n              <ion-label> طريقة حساب ايام التأخير </ion-label>\n            </ion-col>\n            <ion-col>\n              <ion-select\n                class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                interface=\"popover\"\n                placeholder=\"طريقة حساب ايام التأخير\"\n                formControlName=\"client_status_auto_late_calc\"\n              >\n                <ion-select-option\n                  class=\"pb-2\"\n                  *ngFor=\"let type of client_status_auto_late_calc\"\n                  [value]=\"type.ref_code\"\n                >\n                  {{type.ref_desc}}\n                </ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n          <ion-col>\n            <h4 class=\"mr-1 mb-md-0 pb-3\">اغلاق الفتره الاوتوماتيك</h4>\n          </ion-col>\n          <ion-row>\n            <ion-col>\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"close_all_branches\"\n              ></ion-checkbox>\n              <ion-label> اغلاق جميع الفروع </ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-col>\n            <h4 class=\"mr-1 mb-md-0 pb-3\">اعدادات استخراج التقارير</h4>\n          </ion-col>\n          <ion-row>\n            <ion-col>\n              <ion-checkbox\n                type=\"checkbox\"\n                formControlName=\"csv_view\"\n              ></ion-checkbox>\n              <ion-label> استخراج التقارير بصيغة الcsv </ion-label>\n            </ion-col>\n          </ion-row>\n        </form>\n        <ion-button (click)=\"EditOrg()\"> تعديل </ion-button>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_system-defaults_system-defaults_module_ts.js.map