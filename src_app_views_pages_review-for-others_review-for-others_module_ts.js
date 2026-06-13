"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_review-for-others_review-for-others_module_ts"],{

/***/ 20873:
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/review-for-others/review-for-others-routing.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewForOthersPageRoutingModule": function() { return /* binding */ ReviewForOthersPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _review_for_others_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review-for-others.page */ 66609);






var routes = [{
  path: '',
  component: _review_for_others_page__WEBPACK_IMPORTED_MODULE_2__.ReviewForOthersPage
}];

var ReviewForOthersPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ReviewForOthersPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ReviewForOthersPageRoutingModule);
});

ReviewForOthersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ReviewForOthersPageRoutingModule);


/***/ }),

/***/ 69089:
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/review-for-others/review-for-others.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewForOthersPageModule": function() { return /* binding */ ReviewForOthersPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _review_for_others_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review-for-others-routing.module */ 20873);
/* harmony import */ var _review_for_others_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./review-for-others.page */ 66609);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ 63430);











var ReviewForOthersPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ReviewForOthersPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ReviewForOthersPageModule);
});

ReviewForOthersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _review_for_others_routing_module__WEBPACK_IMPORTED_MODULE_2__.ReviewForOthersPageRoutingModule],
  declarations: [_review_for_others_page__WEBPACK_IMPORTED_MODULE_3__.ReviewForOthersPage]
})], ReviewForOthersPageModule);


/***/ }),

/***/ 66609:
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/review-for-others/review-for-others.page.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReviewForOthersPage": function() { return /* binding */ ReviewForOthersPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _review_for_others_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./review-for-others.page.html?ngResource */ 92754);
/* harmony import */ var _review_for_others_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./review-for-others.page.scss?ngResource */ 40777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/loan-applications.service */ 35866);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);











var ReviewForOthersPage = /*#__PURE__*/function () {
  function ReviewForOthersPage(loanApplicationService, pagingService, sortingService) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReviewForOthersPage);

    this.loanApplicationService = loanApplicationService;
    this.pagingService = pagingService;
    this.sortingService = sortingService;
    this.showLoader = false;
    this.revisionFormStatus = {
      valid: false,
      visible: false
    };
    this.ClientApplications = {
      allSupervisedLoanApps: [],
      chosenApplicationKey: null
    };
    this.sortingObject = {
      sortingIconClass: null,
      sortingIconParam: null
    };
    this.pagingObject = {
      page: 1
    };

    this.changePaginationPage = function (newPage) {
      _this.pagingObject.page = newPage;
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ReviewForOthersPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.loanApplicationService.getAllSupervisedLoanApps();

              case 2:
                this.ClientApplications.allSupervisedLoanApps = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "reviewApplication",
    value: function reviewApplication(applicationKey) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.ClientApplications.chosenApplicationKey = applicationKey;
                this.revisionFormStatus.visible = true;

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "sortingTable",
    value: function sortingTable(data, param) {
      this.sortingService.sortByParameter(data, param);
      this.sortingObject.sortingIconClass = this.sortingService.sortOrder === "asc" ? "arrow-down-outline" : "arrow-up-outline";
      this.sortingObject.sortingIconParam = param;
    }
  }]);

  return ReviewForOthersPage;
}();

ReviewForOthersPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_5__.LoanApplicationsService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_7__.pagingService
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_6__.sortingService
  }];
};

ReviewForOthersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: "app-review-for-others",
  template: _review_for_others_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_review_for_others_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], ReviewForOthersPage);


/***/ }),

/***/ 40777:
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/review-for-others/review-for-others.page.scss?ngResource ***!
  \**************************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.alignBtns {\n  top: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy1mb3Itb3RoZXJzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xccmV2aWV3LWZvci1vdGhlcnNcXHJldmlldy1mb3Itb3RoZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0FKOztBRElBO0VBQ0UsUUFBQTtBQ0RGIiwiZmlsZSI6InJldmlldy1mb3Itb3RoZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWxhYmVsLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmFsaWduQnRucyB7XHJcbiAgdG9wOiA5cHg7XHJcbn1cclxuIiwiLmZvcm0tbGFiZWwtcmVxdWlyZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCIqXCI7XG4gIGNvbG9yOiAjZmYzMzY2ICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbkJ0bnMge1xuICB0b3A6IDlweDtcbn0iXX0= */";

/***/ }),

/***/ 92754:
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/review-for-others/review-for-others.page.html?ngResource ***!
  \**************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<ion-title class=\"ion-padding-vertical\">\n  مراجعة للآخرين\n</ion-title>\n<ion-card>\n  <!-- Grid of users Applications -->\n  <ion-card-content *ngIf=\"!revisionFormStatus.visible\">\n    <div class=\"table-responsive\">\n      <ion-grid style=\"min-width: 1000px\">\n        <ion-row class=\"header-row\">\n          <ion-col>\n            <ion-label (click)=\"sortingTable(ClientApplications.allSupervisedLoanApps , 'clientName')\">اسم العميل\n              <ion-icon class=\"ion-icon-class\" [name]=\"sortingObject.sortingIconClass\"\n                *ngIf=\"sortingObject.sortingIconParam == 'clientName'\"></ion-icon></ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label (click)=\"sortingTable(ClientApplications.allSupervisedLoanApps , 'branchName')\">اسم الفرع\n              <ion-icon class=\"ion-icon-class\" [name]=\"sortingObject.sortingIconClass\"\n                *ngIf=\"sortingObject.sortingIconParam == 'branchName'\"></ion-icon></ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label (click)=\"sortingTable(ClientApplications.allSupervisedLoanApps , 'entryDate')\">تاريخ طلب القرض\n              <ion-icon class=\"ion-icon-class\" [name]=\"sortingObject.sortingIconClass\"\n                *ngIf=\"sortingObject.sortingIconParam == 'entryDate'\"></ion-icon></ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label (click)=\"sortingTable(ClientApplications.allSupervisedLoanApps , 'requestedAmount')\">قيمة القرض\n              <ion-icon class=\"ion-icon-class\" [name]=\"sortingObject.sortingIconClass\"\n                *ngIf=\"sortingObject.sortingIconParam == 'requestedAmount'\"></ion-icon></ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label (click)=\"sortingTable(ClientApplications.allSupervisedLoanApps , 'user_name')\">اسم المستخدم\n              <ion-icon class=\"ion-icon-class\" [name]=\"sortingObject.sortingIconClass\"\n                *ngIf=\"sortingObject.sortingIconParam == 'user_name'\"></ion-icon></ion-label>\n          </ion-col>\n          <ion-col></ion-col>\n        </ion-row>\n        <ion-row class=\"details-row\" *ngFor=\"let data of this.pagingService.Paging(\n        ClientApplications.allSupervisedLoanApps,\n        pagingObject.page\n      )\">\n          <ion-col>\n            <ion-label>{{data.clientName}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>{{data.branchName}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>{{data.entryDate | date:'yyyy-MM-dd'}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>{{data.requestedAmount | number: '1.0-0':'en-US'}}</ion-label>\n          </ion-col>\n          <ion-col>\n            <ion-label>{{data.user_name}}</ion-label>\n          </ion-col>\n          <ion-col><ion-button (click)=\"reviewApplication(data.applicationKey)\">مراجعة</ion-button></ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"ClientApplications.allSupervisedLoanApps?.length === 0\">\n          <ion-col size=\"12\" class=\"text-center\">\n            <ion-label>لم يتم العثور على طلبات قروض</ion-label>\n          </ion-col>\n        </ion-row>\n        <app-pagination [page]=\"pagingObject.page\"\n          [collectionSize]=\"ClientApplications.allSupervisedLoanApps?.length\"\n          (pageChange)=\"changePaginationPage($event);\"></app-pagination>\n      </ion-grid>\n    </div>\n  </ion-card-content>\n  <app-workflow-take-action *ngIf=\"revisionFormStatus.visible\" [reviewForOthers]=\"1\"\n    [applicationKey]=\"ClientApplications.chosenApplicationKey\"></app-workflow-take-action>\n</ion-card>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_review-for-others_review-for-others_module_ts.js.map