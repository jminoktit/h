"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_registry_loan-application-tracker_loan-application-tracker_module_ts"],{

/***/ 47445:
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/pages/registry/loan-application-tracker/loan-application-tracker-routing.module.ts ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanApplicationTrackerPageRoutingModule": function() { return /* binding */ LoanApplicationTrackerPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_application_tracker_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-application-tracker.page */ 47514);






var routes = [{
  path: '',
  component: _loan_application_tracker_page__WEBPACK_IMPORTED_MODULE_2__.LoanApplicationTrackerPage
}];

var LoanApplicationTrackerPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanApplicationTrackerPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanApplicationTrackerPageRoutingModule);
});

LoanApplicationTrackerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoanApplicationTrackerPageRoutingModule);


/***/ }),

/***/ 72951:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/registry/loan-application-tracker/loan-application-tracker.module.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanApplicationTrackerPageModule": function() { return /* binding */ LoanApplicationTrackerPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_application_tracker_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-application-tracker-routing.module */ 47445);
/* harmony import */ var _loan_application_tracker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-application-tracker.page */ 47514);










var LoanApplicationTrackerPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanApplicationTrackerPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanApplicationTrackerPageModule);
});

LoanApplicationTrackerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _loan_application_tracker_routing_module__WEBPACK_IMPORTED_MODULE_2__.LoanApplicationTrackerPageRoutingModule],
  declarations: [_loan_application_tracker_page__WEBPACK_IMPORTED_MODULE_3__.LoanApplicationTrackerPage]
})], LoanApplicationTrackerPageModule);


/***/ }),

/***/ 47514:
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/registry/loan-application-tracker/loan-application-tracker.page.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanApplicationTrackerPage": function() { return /* binding */ LoanApplicationTrackerPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _loan_application_tracker_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-application-tracker.page.html?ngResource */ 21610);
/* harmony import */ var _loan_application_tracker_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-application-tracker.page.scss?ngResource */ 50718);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);









var LoanApplicationTrackerPage = /*#__PURE__*/function () {
  function LoanApplicationTrackerPage(datepipe, sortingService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoanApplicationTrackerPage);

    this.datepipe = datepipe;
    this.sortingService = sortingService;
    this.LoanApplications = [{
      application_code: 1,
      loan_type_name: "اقراض سداد شهري",
      req_am: 20000.0,
      aprv_am: 20000.0,
      req_no: 12,
      entry_date: "2023-08-08",
      rev_status: "تمت مراجعته",
      application_status: "موافق عليه",
      loan_rej_desc: null,
      loan_gen_status: "تم إنشاء القرض",
      loan_application_status: "تم إنشاء القرض"
    }, {
      application_code: 2,
      loan_type_name: "اقراض سداد شهري",
      req_am: 6000.0,
      aprv_am: 6000.0,
      req_no: 12,
      entry_date: "2023-08-17",
      rev_status: "تمت مراجعته",
      application_status: "موافق عليه",
      loan_rej_desc: null,
      loan_gen_status: "قرض غير منشأ",
      loan_application_status: "موافق عليه"
    }, {
      application_code: 3,
      loan_type_name: "اقراض سداد شهري",
      req_am: 4000.0,
      aprv_am: 4000.0,
      req_no: 12,
      entry_date: "2023-08-17",
      rev_status: "تمت مراجعته",
      application_status: "مرفوض",
      loan_rej_desc: "عدم حضورهم للصرف",
      loan_gen_status: "قرض غير منشأ",
      loan_application_status: "مرفوض"
    }, {
      application_code: 4,
      loan_type_name: "اقراض سداد شهري",
      req_am: 3000.0,
      aprv_am: 3000.0,
      req_no: 12,
      entry_date: "2023-08-20",
      rev_status: "تمت مراجعته",
      application_status: "منتظر قرار",
      loan_rej_desc: null,
      loan_gen_status: "قرض غير منشأ",
      loan_application_status: "تمت مراجعته"
    }, {
      application_code: 5,
      loan_type_name: "اقراض سداد شهري",
      req_am: 5000.0,
      aprv_am: 5000.0,
      req_no: 6,
      entry_date: "2023-08-20",
      rev_status: "تحت التحرير",
      application_status: "منتظر قرار",
      loan_rej_desc: null,
      loan_gen_status: "قرض غير منشأ",
      loan_application_status: "تحت التحرير"
    }];
    this.details = false;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoanApplicationTrackerPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "DateFormatter",
    value: function DateFormatter(input) {
      return this.datepipe.transform(input, "yyyy-MM-dd");
    }
  }, {
    key: "MoreDetails",
    value: function MoreDetails(application) {
      this.applicationDetail = application;
      this.details = !this.details;
    }
  }, {
    key: "dismissModal",
    value: function dismissModal() {
      this.details = false;
    }
  }, {
    key: "sortingTable",
    value: function sortingTable(data, param) {
      this.sortingService.sortByParameter(data, param);
    }
  }]);

  return LoanApplicationTrackerPage;
}();

LoanApplicationTrackerPage.ctorParameters = function () {
  return [{
    type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_4__.sortingService
  }];
};

LoanApplicationTrackerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: "app-loan-application-tracker",
  template: _loan_application_tracker_page_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_loan_application_tracker_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], LoanApplicationTrackerPage);


/***/ }),

/***/ 50718:
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/registry/loan-application-tracker/loan-application-tracker.page.scss?ngResource ***!
  \*************************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FuLWFwcGxpY2F0aW9uLXRyYWNrZXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 21610:
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/registry/loan-application-tracker/loan-application-tracker.page.html?ngResource ***!
  \*************************************************************************************************************/
/***/ (function(module) {

module.exports = "<div class=\"ion-padding\">\n  <div>\n    <h5 class=\"mr-1 mb-md-0 pb-3\">متابعة طلبات القروض</h5>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <div class=\"row justify-content-center\">\n        <div class=\"table-responsive\">\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th class=\"text-center\"><ion-icon color=\"success\" name=\"swap-vertical-outline\"></ion-icon></th>\n                <th class=\"text-center\" (click)=\"sortingTable(LoanApplications, 'entry_date')\">تاريخ طلب القرض</th>\n                <th class=\"text-center\" (click)=\"sortingTable(LoanApplications, 'req_am')\">قيمة القرض المطلوب</th>\n                <th class=\"text-center\" (click)=\"sortingTable(LoanApplications, 'loan_application_status')\">حاله طلب\n                  القرض</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let application of LoanApplications; let i = index\" (click)=\"MoreDetails(application)\">\n                <td class=\"text-center\"><ion-icon name=\"information-circle-outline\"></ion-icon></td>\n                <td class=\"text-center\"> {{application.entry_date}} </td>\n                <td class=\"text-center\"> {{application.req_am}} </td>\n                <td class=\"text-center\"> {{application.loan_application_status}} </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ion-content>\n  <ion-modal #modal [isOpen]=\"details\" (didDismiss)=\"dismissModal();\">\n    <ng-template>\n      <ion-toolbar>\n        <ion-title>بيانات طلب القرض رقم {{ applicationDetail.application_code }}</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"dismissModal()\">\n            <ion-icon name=\"close-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-card class=\"w-100 h-100 mx-0 my-0 inherit-color\">\n        <ion-card-content class=\"align-middle modalSize\">\n          <ion-grid class=\"card inherit-color px-0 py-0\">\n            <div class=\"card-body\">\n              <ion-row>\n                <ion-col>\n                  <ion-label>نوع القرض المطلوب</ion-label>\n                  <!-- <ion-label> : </ion-label> -->\n                  <ion-label class=\"form-control\"> {{applicationDetail.loan_type_name}} </ion-label>\n                </ion-col>\n                <ion-col>\n                  <ion-label>عدد القساط</ion-label>\n                  <!-- <ion-label> : </ion-label> -->\n                  <ion-label class=\"form-control\"> {{applicationDetail.req_no}} </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-label>قيمة القرض المطلوب</ion-label>\n                  <!-- <ion-label> : </ion-label> -->\n                  <ion-label class=\"form-control\"> {{applicationDetail.req_am}} </ion-label>\n                </ion-col>\n                <ion-col>\n                  <ion-label>الموافق عليه</ion-label>\n                  <!-- <ion-label> : </ion-label> -->\n                  <ion-label class=\"form-control\"> {{applicationDetail.aprv_am}} </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-label>تاريخ طلب القرض</ion-label>\n                  <!-- <ion-label> : </ion-label> -->\n                  <ion-label class=\"form-control\"> {{DateFormatter(applicationDetail.entry_date)}} </ion-label>\n                </ion-col>\n                <ion-col>\n                  <ion-label>حاله طلب القرض</ion-label>\n                  <!-- <ion-label> : </ion-label> -->\n                  <ion-label class=\"form-control\"> {{applicationDetail.loan_application_status}} </ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row *ngIf=\"applicationDetail.loan_rej_desc\">\n                <ion-col>\n                  <ion-label>سبب الرفض</ion-label>\n                  <!-- <ion-label> : </ion-label> -->\n                  <ion-label class=\"form-control\"> {{applicationDetail.loan_rej_desc}} </ion-label>\n                </ion-col>\n              </ion-row>\n            </div>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n    </ng-template>\n  </ion-modal>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_registry_loan-application-tracker_loan-application-tracker_module_ts.js.map