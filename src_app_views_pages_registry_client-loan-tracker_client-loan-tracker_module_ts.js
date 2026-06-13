"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_registry_client-loan-tracker_client-loan-tracker_module_ts"],{

/***/ 55445:
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/registry/client-loan-tracker/client-loan-tracker-routing.module.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientLoanTrackerPageRoutingModule": function() { return /* binding */ ClientLoanTrackerPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _client_loan_tracker_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-loan-tracker.page */ 57856);






var routes = [{
  path: '',
  component: _client_loan_tracker_page__WEBPACK_IMPORTED_MODULE_2__.ClientLoanTrackerPage
}];

var ClientLoanTrackerPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ClientLoanTrackerPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientLoanTrackerPageRoutingModule);
});

ClientLoanTrackerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ClientLoanTrackerPageRoutingModule);


/***/ }),

/***/ 2726:
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/registry/client-loan-tracker/client-loan-tracker.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientLoanTrackerPageModule": function() { return /* binding */ ClientLoanTrackerPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _client_loan_tracker_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-loan-tracker-routing.module */ 55445);
/* harmony import */ var _client_loan_tracker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-loan-tracker.page */ 57856);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var ClientLoanTrackerPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ClientLoanTrackerPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientLoanTrackerPageModule);
});

ClientLoanTrackerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _client_loan_tracker_routing_module__WEBPACK_IMPORTED_MODULE_2__.ClientLoanTrackerPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_client_loan_tracker_page__WEBPACK_IMPORTED_MODULE_3__.ClientLoanTrackerPage]
})], ClientLoanTrackerPageModule);


/***/ }),

/***/ 57856:
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/registry/client-loan-tracker/client-loan-tracker.page.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientLoanTrackerPage": function() { return /* binding */ ClientLoanTrackerPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _client_loan_tracker_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-loan-tracker.page.html?ngResource */ 67086);
/* harmony import */ var _client_loan_tracker_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-loan-tracker.page.scss?ngResource */ 41195);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);












var ClientLoanTrackerPage = /*#__PURE__*/function () {
  function ClientLoanTrackerPage(datepipe, sortingService, platform, router) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClientLoanTrackerPage);

    this.datepipe = datepipe;
    this.sortingService = sortingService;
    this.platform = platform;
    this.router = router;
    this.allLoans = [{
      loan_key: 190020021941001,
      loan_code: 1,
      inst_serial: 1,
      deserved_amount: 2239.0,
      inst_paid_total: 0.0,
      inst_am: 2239.0,
      inst_mat_date: "2023-07-13 00:00:00.000",
      inst_status_desc: "لدى بنك خارجي",
      loan_am: 25000.0,
      loan_status_desc: "مصدر",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941001,
      loan_code: 1,
      inst_serial: 2,
      deserved_amount: 2239.0,
      inst_paid_total: 0.0,
      inst_am: 2239.0,
      inst_mat_date: "2023-08-14 00:00:00.000",
      inst_status_desc: "لدى بنك خارجي",
      loan_am: 25000.0,
      loan_status_desc: "مصدر",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941001,
      loan_code: 1,
      inst_serial: 3,
      deserved_amount: 2239.0,
      inst_paid_total: 0.0,
      inst_am: 2239.0,
      inst_mat_date: "2023-09-14 00:00:00.000",
      inst_status_desc: "لدى بنك خارجي",
      loan_am: 25000.0,
      loan_status_desc: "مصدر",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941001,
      loan_code: 1,
      inst_serial: 4,
      deserved_amount: 2239.0,
      inst_paid_total: 0.0,
      inst_am: 2239.0,
      inst_mat_date: "2023-10-14 00:00:00.000",
      inst_status_desc: "لدى بنك خارجي",
      loan_am: 25000.0,
      loan_status_desc: "مصدر",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941001,
      loan_code: 1,
      inst_serial: 5,
      deserved_amount: 2239.0,
      inst_paid_total: 0.0,
      inst_am: 2239.0,
      inst_mat_date: "2023-11-14 00:00:00.000",
      inst_status_desc: "لدى بنك خارجي",
      loan_am: 25000.0,
      loan_status_desc: "مصدر",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941001,
      loan_code: 1,
      inst_serial: 6,
      deserved_amount: 2239.0,
      inst_paid_total: 0.0,
      inst_am: 2239.0,
      inst_mat_date: "2023-12-14 00:00:00.000",
      inst_status_desc: "لدى بنك خارجي",
      loan_am: 25000.0,
      loan_status_desc: "مصدر",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941001,
      loan_code: 1,
      inst_serial: 7,
      deserved_amount: 2239.0,
      inst_paid_total: 0.0,
      inst_am: 2239.0,
      inst_mat_date: "2024-01-14 00:00:00.000",
      inst_status_desc: "لدى بنك خارجي",
      loan_am: 25000.0,
      loan_status_desc: "مصدر",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941001,
      loan_code: 1,
      inst_serial: 8,
      deserved_amount: 2239.0,
      inst_paid_total: 0.0,
      inst_am: 2239.0,
      inst_mat_date: "2024-02-14 00:00:00.000",
      inst_status_desc: "لدى بنك خارجي",
      loan_am: 25000.0,
      loan_status_desc: "مصدر",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941001,
      loan_code: 1,
      inst_serial: 9,
      deserved_amount: 2239.0,
      inst_paid_total: 0.0,
      inst_am: 2239.0,
      inst_mat_date: "2024-03-14 00:00:00.000",
      inst_status_desc: "لدى بنك خارجي",
      loan_am: 25000.0,
      loan_status_desc: "مصدر",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941001,
      loan_code: 1,
      inst_serial: 10,
      deserved_amount: 2239.0,
      inst_paid_total: 0.0,
      inst_am: 2239.0,
      inst_mat_date: "2024-04-14 00:00:00.000",
      inst_status_desc: "لدى بنك خارجي",
      loan_am: 25000.0,
      loan_status_desc: "مصدر",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941001,
      loan_code: 1,
      inst_serial: 11,
      deserved_amount: 2239.0,
      inst_paid_total: 0.0,
      inst_am: 2239.0,
      inst_mat_date: "2024-05-14 00:00:00.000",
      inst_status_desc: "لدى بنك خارجي",
      loan_am: 25000.0,
      loan_status_desc: "مصدر",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941001,
      loan_code: 1,
      inst_serial: 12,
      deserved_amount: 2239.0,
      inst_paid_total: 0.0,
      inst_am: 2239.0,
      inst_mat_date: "2024-06-13 00:00:00.000",
      inst_status_desc: "لدى بنك خارجي",
      loan_am: 25000.0,
      loan_status_desc: "مصدر",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941001,
      loan_code: 1,
      inst_serial: 13,
      deserved_amount: 2239.0,
      inst_paid_total: 0.0,
      inst_am: 2239.0,
      inst_mat_date: "2024-07-14 00:00:00.000",
      inst_status_desc: "لدى بنك خارجي",
      loan_am: 25000.0,
      loan_status_desc: "مصدر",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941001,
      loan_code: 1,
      inst_serial: 14,
      deserved_amount: 2239.0,
      inst_paid_total: 0.0,
      inst_am: 2239.0,
      inst_mat_date: "2024-08-14 00:00:00.000",
      inst_status_desc: "لدى بنك خارجي",
      loan_am: 25000.0,
      loan_status_desc: "مصدر",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941001,
      loan_code: 1,
      inst_serial: 15,
      deserved_amount: 2263.38,
      inst_paid_total: 0.0,
      inst_am: 2263.38,
      inst_mat_date: "2024-09-14 00:00:00.000",
      inst_status_desc: "لدى بنك خارجي",
      loan_am: 25000.0,
      loan_status_desc: "مصدر",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941002,
      loan_code: 2,
      inst_serial: 1,
      deserved_amount: 0.0,
      inst_paid_total: 809.0,
      inst_am: 809.0,
      inst_mat_date: "2023-07-13 00:00:00.000",
      inst_status_desc: "مسدد في بنك خارجي",
      loan_am: 10000.0,
      loan_status_desc: "مسدد بالكامل",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941002,
      loan_code: 2,
      inst_serial: 2,
      deserved_amount: 0.0,
      inst_paid_total: 809.0,
      inst_am: 809.0,
      inst_mat_date: "2023-08-14 00:00:00.000",
      inst_status_desc: "مسدد في بنك خارجي",
      loan_am: 10000.0,
      loan_status_desc: "مسدد بالكامل",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941002,
      loan_code: 2,
      inst_serial: 3,
      deserved_amount: 0.0,
      inst_paid_total: 809.0,
      inst_am: 809.0,
      inst_mat_date: "2023-09-14 00:00:00.000",
      inst_status_desc: "مسدد في بنك خارجي",
      loan_am: 10000.0,
      loan_status_desc: "مسدد بالكامل",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941002,
      loan_code: 2,
      inst_serial: 4,
      deserved_amount: 0.0,
      inst_paid_total: 809.0,
      inst_am: 809.0,
      inst_mat_date: "2023-10-14 00:00:00.000",
      inst_status_desc: "مسدد في بنك خارجي",
      loan_am: 10000.0,
      loan_status_desc: "مسدد بالكامل",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941002,
      loan_code: 2,
      inst_serial: 5,
      deserved_amount: 0.0,
      inst_paid_total: 809.0,
      inst_am: 809.0,
      inst_mat_date: "2023-11-14 00:00:00.000",
      inst_status_desc: "مسدد في بنك خارجي",
      loan_am: 10000.0,
      loan_status_desc: "مسدد بالكامل",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941002,
      loan_code: 2,
      inst_serial: 6,
      deserved_amount: 0.0,
      inst_paid_total: 809.0,
      inst_am: 809.0,
      inst_mat_date: "2023-12-14 00:00:00.000",
      inst_status_desc: "مسدد في بنك خارجي",
      loan_am: 10000.0,
      loan_status_desc: "مسدد بالكامل",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941002,
      loan_code: 2,
      inst_serial: 7,
      deserved_amount: 0.0,
      inst_paid_total: 809.0,
      inst_am: 809.0,
      inst_mat_date: "2024-01-14 00:00:00.000",
      inst_status_desc: "مسدد في بنك خارجي",
      loan_am: 10000.0,
      loan_status_desc: "مسدد بالكامل",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941002,
      loan_code: 2,
      inst_serial: 8,
      deserved_amount: 0.0,
      inst_paid_total: 809.0,
      inst_am: 809.0,
      inst_mat_date: "2024-02-14 00:00:00.000",
      inst_status_desc: "مسدد في بنك خارجي",
      loan_am: 10000.0,
      loan_status_desc: "مسدد بالكامل",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941002,
      loan_code: 2,
      inst_serial: 9,
      deserved_amount: 0.0,
      inst_paid_total: 809.0,
      inst_am: 809.0,
      inst_mat_date: "2024-03-14 00:00:00.000",
      inst_status_desc: "مسدد في بنك خارجي",
      loan_am: 10000.0,
      loan_status_desc: "مسدد بالكامل",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941002,
      loan_code: 2,
      inst_serial: 10,
      deserved_amount: 0.0,
      inst_paid_total: 809.0,
      inst_am: 809.0,
      inst_mat_date: "2024-04-14 00:00:00.000",
      inst_status_desc: "مسدد في بنك خارجي",
      loan_am: 10000.0,
      loan_status_desc: "مسدد بالكامل",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941002,
      loan_code: 2,
      inst_serial: 11,
      deserved_amount: 0.0,
      inst_paid_total: 809.0,
      inst_am: 809.0,
      inst_mat_date: "2024-05-14 00:00:00.000",
      inst_status_desc: "مسدد في بنك خارجي",
      loan_am: 10000.0,
      loan_status_desc: "مسدد بالكامل",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941002,
      loan_code: 2,
      inst_serial: 12,
      deserved_amount: 0.0,
      inst_paid_total: 809.0,
      inst_am: 809.0,
      inst_mat_date: "2024-06-13 00:00:00.000",
      inst_status_desc: "مسدد في بنك خارجي",
      loan_am: 10000.0,
      loan_status_desc: "مسدد بالكامل",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941002,
      loan_code: 2,
      inst_serial: 13,
      deserved_amount: 0.0,
      inst_paid_total: 809.0,
      inst_am: 809.0,
      inst_mat_date: "2024-07-14 00:00:00.000",
      inst_status_desc: "مسدد في بنك خارجي",
      loan_am: 10000.0,
      loan_status_desc: "مسدد بالكامل",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941002,
      loan_code: 2,
      inst_serial: 14,
      deserved_amount: 0.0,
      inst_paid_total: 809.0,
      inst_am: 809.0,
      inst_mat_date: "2024-08-14 00:00:00.000",
      inst_status_desc: "مسدد في بنك خارجي",
      loan_am: 10000.0,
      loan_status_desc: "مسدد بالكامل",
      loan_date: "2023-06-14 00:00:00.000"
    }, {
      loan_key: 190020021941002,
      loan_code: 2,
      inst_serial: 15,
      deserved_amount: 0.0,
      inst_paid_total: 830.25,
      inst_am: 830.25,
      inst_mat_date: "2024-09-14 00:00:00.000",
      inst_status_desc: "مسدد في بنك خارجي",
      loan_am: 10000.0,
      loan_status_desc: "مسدد بالكامل",
      loan_date: "2023-06-14 00:00:00.000"
    }];
    this.allLoansCustomize = [];
    this.modalResult = [];
    this.modalView = false;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ClientLoanTrackerPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.registerBackButtonListener();
                this.customizeResult();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      //Handling The BackButton in mobile
      this.backButtonListener.unsubscribe();
    }
  }, {
    key: "groupByProperty",
    value: function groupByProperty(arr, propertyName) {
      var groups = arr.reduce(function (acc, item) {
        var propertyValue = item[propertyName];

        if (!acc[propertyValue]) {
          acc[propertyValue] = [];
        }

        acc[propertyValue].push(item);
        return acc;
      }, {});
      var distinctValues = Object.keys(groups);
      var infoOfEveryItem = distinctValues.map(function (value) {
        return groups[value][0];
      });
      var groupedItems = distinctValues.map(function (value) {
        return groups[value];
      });
      return this.groupingRes = [distinctValues, infoOfEveryItem, groupedItems];
    }
  }, {
    key: "customizeResult",
    value: function customizeResult() {
      for (var i = 0; i < this.allLoans.length;) {
        this.allLoansCustomize.push({
          loan_key: this.allLoans[i].loan_key.toString(),
          loan_code: this.allLoans[i].loan_code.toString(),
          inst_serial: this.allLoans[i].inst_serial.toString(),
          deserved_amount: this.allLoans[i].deserved_amount.toString(),
          inst_paid_total: this.allLoans[i].inst_paid_total.toString(),
          inst_am: this.allLoans[i].inst_am.toString(),
          inst_mat_date: this.allLoans[i].inst_mat_date,
          inst_status_desc: this.allLoans[i].inst_status_desc,
          loan_am: this.allLoans[i].loan_am.toString(),
          loan_status_desc: this.allLoans[i].loan_status_desc,
          loan_date: this.allLoans[i].loan_date
        });
        this.allLoansCustomize[i].loan_am = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(Number(parseInt(this.allLoansCustomize[i].loan_am)), "en-US", "1.0-0");
        this.allLoansCustomize[i].loan_date = this.datepipe.transform(this.allLoansCustomize[i].loan_date, "yyyy-MM-dd");
        this.allLoansCustomize[i].inst_am = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(Number(parseInt(this.allLoansCustomize[i].inst_am)), "en-US", "1.0-0");
        this.allLoansCustomize[i].inst_paid_total = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(Number(parseInt(this.allLoansCustomize[i].inst_paid_total)), "en-US", "1.0-0");
        this.allLoansCustomize[i].deserved_amount = (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.formatNumber)(Number(parseInt(this.allLoansCustomize[i].deserved_amount)), "en-US", "1.0-0");
        this.allLoansCustomize[i].inst_mat_date = this.datepipe.transform(this.allLoans[i].inst_mat_date, "yyyy-MM-dd");
        i++;
      }

      this.groupByProperty(this.allLoansCustomize, "loan_key");
    }
  }, {
    key: "installmentDetails",
    value: function installmentDetails(i) {
      this.modalResult = this.allLoansCustomize.filter(function (x) {
        return x.loan_key == i.loan_key;
      });
      this.modalView = true;
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.modalView = false;
    }
  }, {
    key: "sortingTable",
    value: function sortingTable(data, param) {
      this.sortingService.sortByParameter(data, param);
    }
  }, {
    key: "registerBackButtonListener",
    value: function registerBackButtonListener() {
      var _this = this;

      this.backButtonListener = this.platform.backButton.subscribeWithPriority(10, function (next) {
        _this.backButton();
      });
    }
  }, {
    key: "backButton",
    value: function backButton() {
      if (this.modalView == true) {
        this.modalView = false;
      } else if (this.modalView == false) {
        this.router.navigate(["/home"]);
      }
    }
  }, {
    key: "escapeBtn",
    value: function escapeBtn(event) {
      if (event.key == "Escape") {
        this.dismissModal();
      }
    }
  }]);

  return ClientLoanTrackerPage;
}();

ClientLoanTrackerPage.ctorParameters = function () {
  return [{
    type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_5__.sortingService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }];
};

ClientLoanTrackerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: "app-client-loan-tracker",
  template: _client_loan_tracker_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_client_loan_tracker_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], ClientLoanTrackerPage);


/***/ }),

/***/ 41195:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/registry/client-loan-tracker/client-loan-tracker.page.scss?ngResource ***!
  \***************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQtbG9hbi10cmFja2VyLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 67086:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/registry/client-loan-tracker/client-loan-tracker.page.html?ngResource ***!
  \***************************************************************************************************/
/***/ (function(module) {

module.exports = "<ion-toolbar>\n  <ion-title>متابعة القروض</ion-title>\n</ion-toolbar>\n\n<div class=\"row\">\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form>\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"form-group \">\n                <div class=\"table-responsive\">\n                  <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th class=\"text-center sortingCol\">\n                          <ion-icon color=\"success\" name=\"swap-vertical-outline\"></ion-icon>\n                        </th>\n                        <th class=\"text-center\" (click)=\"sortingTable(groupingRes[1] , 'loan_date')\">تاريخ القرض</th>\n                        <th class=\"text-center\" (click)=\"sortingTable(groupingRes[1] , 'loan_am')\">مبلغ القرض</th>\n                        <th class=\"text-center\" (click)=\"sortingTable(groupingRes[1] , 'loan_status_desc')\">مبلغ القرض\n                        </th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let loan of groupingRes[1]; let i = index\" (click)=\"installmentDetails(loan)\">\n                        <td class=\"text-center\">\n                          <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        </td>\n                        <td class=\"text-center\">{{ loan.loan_date }}</td>\n                        <td class=\"text-center\"> {{ loan.loan_am }} </td>\n                        <td class=\"text-center\"> {{ loan.loan_status_desc }} </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ion-modal #modal *ngIf=\"modalView\" [isOpen]=\"modalView\" (didDismiss)=\"dismissModal();\" [backdropDismiss]=\"false\"\n  (keyup)=\"escapeBtn($event)\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title> الاقساط </ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"dismissModal()\">\n            <ion-icon name=\"close-outline\" class=\"close-icon\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <div class=\"row\">\n        <div class=\"col-md-12 grid-margin\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <form>\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <div class=\"form-group\">\n                      <div class=\"table-responsive\">\n                        <table class=\"table\">\n                          <thead>\n                            <tr>\n                              <th class=\"text-center sortingCol\"><ion-icon color=\"success\"\n                                  name=\"swap-vertical-outline\"></ion-icon></th>\n                              <th class=\"text-center\" (click)=\"sortingTable(modalResult , 'inst_serial')\">رقم القسط</th>\n                              <th class=\"text-center\" (click)=\"sortingTable(modalResult , 'inst_am')\">مبلغ القسط</th>\n                              <th class=\"text-center\" (click)=\"sortingTable(modalResult , 'inst_paid_total')\">المبلغ\n                                المدفوع</th>\n                              <th class=\"text-center\" (click)=\"sortingTable(modalResult , 'deserved_amount')\">المبلغ\n                                المستحق</th>\n                              <th class=\"text-center\" (click)=\"sortingTable(modalResult , 'inst_mat_date')\">التاريخ</th>\n                              <th class=\"text-center\" (click)=\"sortingTable(modalResult , 'inst_status_desc')\">الحالة\n                              </th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let inst of modalResult\">\n                              <td class=\"text-center\"></td>\n                              <td class=\"text-center\">{{ inst.inst_serial }}</td>\n                              <td class=\"text-center\"> {{ inst.inst_am}} </td>\n                              <td class=\"text-center\"> {{ inst.inst_paid_total }} </td>\n                              <td class=\"text-center\"> {{ inst.deserved_amount }} </td>\n                              <td class=\"text-center\"> {{ inst.inst_mat_date }} </td>\n                              <td class=\"text-center\"> {{ inst.inst_status_desc }} </td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_registry_client-loan-tracker_client-loan-tracker_module_ts.js.map