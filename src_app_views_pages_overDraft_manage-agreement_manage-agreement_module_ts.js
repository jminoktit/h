"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_overDraft_manage-agreement_manage-agreement_module_ts"],{

/***/ 26786:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/overDraft/manage-agreement/manage-agreement-routing.module.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageAgreementPageRoutingModule": function() { return /* binding */ ManageAgreementPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _manage_agreement_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-agreement.page */ 5907);






var routes = [{
  path: '',
  component: _manage_agreement_page__WEBPACK_IMPORTED_MODULE_2__.ManageAgreementPage
}];

var ManageAgreementPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ManageAgreementPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ManageAgreementPageRoutingModule);
});

ManageAgreementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ManageAgreementPageRoutingModule);


/***/ }),

/***/ 34734:
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/overDraft/manage-agreement/manage-agreement.module.ts ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageAgreementPageModule": function() { return /* binding */ ManageAgreementPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _manage_agreement_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-agreement-routing.module */ 26786);
/* harmony import */ var _manage_agreement_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-agreement.page */ 5907);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var ManageAgreementPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ManageAgreementPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ManageAgreementPageModule);
});

ManageAgreementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _manage_agreement_routing_module__WEBPACK_IMPORTED_MODULE_2__.ManageAgreementPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_manage_agreement_page__WEBPACK_IMPORTED_MODULE_3__.ManageAgreementPage]
})], ManageAgreementPageModule);


/***/ }),

/***/ 5907:
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/overDraft/manage-agreement/manage-agreement.page.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageAgreementPage": function() { return /* binding */ ManageAgreementPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _manage_agreement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-agreement.page.html?ngResource */ 12311);
/* harmony import */ var _manage_agreement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-agreement.page.scss?ngResource */ 58661);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 47418);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_overdraft_agreement_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/overdraft/agreement.service */ 27325);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);













var State;

(function (State) {
  State[State["SEARCHING"] = 0] = "SEARCHING";
  State[State["LIST"] = 1] = "LIST";
  State[State["DETAIL"] = 2] = "DETAIL";
})(State || (State = {}));

var ManageAgreementPage = /*#__PURE__*/function () {
  function ManageAgreementPage(agreementService, referencesService, formBuilder, alertService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ManageAgreementPage);

    this.agreementService = agreementService;
    this.referencesService = referencesService;
    this.formBuilder = formBuilder;
    this.alertService = alertService;
    this.EXCLUDED_STATUSES = ["0", "2"];
    this.State = State;
    this.currentViewState = State.SEARCHING;
    this.showLoader = false;
    this.agreements = [];
    this.agreementStatusList = [];
    this.manageAgreementForm = this.formBuilder.group({
      agreementStatus: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ManageAgreementPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.retrieveAgreementsStatus();
    }
  }, {
    key: "retrieveAgreementsStatus",
    value: function retrieveAgreementsStatus() {
      var _this = this;

      this.referencesService.getOverDraftAgreementStatus().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(function (error) {
        _this.handleError(error);

        return [];
      })).subscribe(function (statuses) {
        return _this.agreementStatusList = statuses.filter(function (stat) {
          return !_this.EXCLUDED_STATUSES.includes(stat.ref_code);
        });
      });
    }
  }, {
    key: "clientSelected",
    value: function clientSelected(event) {
      var _this2 = this;

      this.selectedClient = event;
      if (event.client_key == null) return;
      this.agreementService.getAgreementsByClientKey(event.client_key.toString(), 1).subscribe(function (response) {
        if (response.length === 0) {
          return _this2.alertService.showAlertError("لا يوجد حساب لهذا العميل", false);
        }

        _this2.agreements = response;
        _this2.currentViewState = State.LIST;
      });
    }
  }, {
    key: "onSelectAgreement",
    value: function onSelectAgreement(agreement) {
      this.agreement = agreement;
      this.currentViewState = State.DETAIL;
      this.manageAgreementForm.patchValue({
        agreementStatus: agreement.agr_status
      });
    }
  }, {
    key: "saveAgreement",
    value: function saveAgreement() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.manageAgreementForm.valid) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return this.alertService.SaveAlert();

              case 4:
                if (_context.sent) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                _context.prev = 6;
                this.showLoader = true;
                request = {
                  agreementKey: this.agreement.agreement_key,
                  agreementStatus: this.manageAgreementForm.get("agreementStatus").value,
                  agreementUuc: this.agreement.agreement_uuc
                };
                _context.next = 11;
                return this.agreementService.updateAgreement(request).toPromise();

              case 11:
                this.alertService.showAlertConfirm("لقد تم الحفظ بنجاح", true);
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](6);
                this.handleError(_context.t0);

              case 17:
                _context.prev = 17;
                this.showLoader = false;
                return _context.finish(17);

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 14, 17, 20]]);
      }));
    }
  }, {
    key: "backButton",
    value: function backButton() {
      if (this.currentViewState === State.LIST) {
        this.agreements = [];
        this.currentViewState = State.SEARCHING;
      } else if (this.currentViewState === State.DETAIL) {
        this.agreement = null;
        this.currentViewState = State.LIST;
      }
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var errorMessage = error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpErrorResponse ? JSON.stringify(error.error) : error instanceof Error ? error.message : String(error);
      this.alertService.showAlertError(errorMessage, false);
      console.error("Error:", error);
    }
  }]);

  return ManageAgreementPage;
}();

ManageAgreementPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_overdraft_agreement_service__WEBPACK_IMPORTED_MODULE_6__.AgreementService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_7__.ReferencesService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }];
};

ManageAgreementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-manage-agreement",
  template: _manage_agreement_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_manage_agreement_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], ManageAgreementPage);


/***/ }),

/***/ 58661:
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/overDraft/manage-agreement/manage-agreement.page.scss?ngResource ***!
  \**********************************************************************************************/
/***/ (function(module) {

module.exports = ".clickableRow {\n  cursor: pointer;\n}\n\n.clickableRow:active {\n  background-color: rgba(209, 209, 209, 0.46);\n  /* Scaling button to 0.98 to its original size */\n  /* Lowering the shadow */\n}\n\n.clickableRow:hover {\n  background-color: rgba(209, 209, 209, 0.46);\n  /* Scaling button to 0.98 to its original size */\n  /* Lowering the shadow */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1hZ3JlZW1lbnQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcb3ZlckRyYWZ0XFxtYW5hZ2UtYWdyZWVtZW50XFxtYW5hZ2UtYWdyZWVtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURHQTtFQUVFLDJDQUFBO0VBRUEsZ0RBQUE7RUFFQSx3QkFBQTtBQ0hGOztBREtBO0VBRUUsMkNBQUE7RUFDQSxnREFBQTtFQUVBLHdCQUFBO0FDSkYiLCJmaWxlIjoibWFuYWdlLWFncmVlbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xpY2thYmxlUm93IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLy8gYm94LXNoYWRvdzogcmdiYSgxNCwgMzAsIDM3LCAwLjEyKSAwcHggMnB4IDRweCAwcHgsXHJcbiAgLy8gICByZ2JhKDE0LCAzMCwgMzcsIDAuMzIpIDBweCAxcHggMnB4IDBweDtcclxufVxyXG4uY2xpY2thYmxlUm93OmFjdGl2ZSB7XHJcbiAgLy90cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA5LCAyMDksIDIwOSwgMC40Nik7XHJcblxyXG4gIC8qIFNjYWxpbmcgYnV0dG9uIHRvIDAuOTggdG8gaXRzIG9yaWdpbmFsIHNpemUgKi9cclxuICAvL2JveC1zaGFkb3c6IDNweCAycHggMjJweCAxcHggIzFlOWVhNSgxNzYsIDE3NiwgMTc2LCAwLjI0KTtcclxuICAvKiBMb3dlcmluZyB0aGUgc2hhZG93ICovXHJcbn1cclxuLmNsaWNrYWJsZVJvdzpob3ZlciB7XHJcbiAgLy90cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA5LCAyMDksIDIwOSwgMC40Nik7XHJcbiAgLyogU2NhbGluZyBidXR0b24gdG8gMC45OCB0byBpdHMgb3JpZ2luYWwgc2l6ZSAqL1xyXG4gIC8vYm94LXNoYWRvdzogM3B4IDJweCAyMnB4IDFweCAjMWU5ZWE1KDE3NiwgMTc2LCAxNzYsIDAuMjQpO1xyXG4gIC8qIExvd2VyaW5nIHRoZSBzaGFkb3cgKi9cclxufVxyXG4iLCIuY2xpY2thYmxlUm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2xpY2thYmxlUm93OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA5LCAyMDksIDIwOSwgMC40Nik7XG4gIC8qIFNjYWxpbmcgYnV0dG9uIHRvIDAuOTggdG8gaXRzIG9yaWdpbmFsIHNpemUgKi9cbiAgLyogTG93ZXJpbmcgdGhlIHNoYWRvdyAqL1xufVxuXG4uY2xpY2thYmxlUm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDksIDIwOSwgMjA5LCAwLjQ2KTtcbiAgLyogU2NhbGluZyBidXR0b24gdG8gMC45OCB0byBpdHMgb3JpZ2luYWwgc2l6ZSAqL1xuICAvKiBMb3dlcmluZyB0aGUgc2hhZG93ICovXG59Il19 */";

/***/ }),

/***/ 12311:
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/overDraft/manage-agreement/manage-agreement.page.html?ngResource ***!
  \**********************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<ion-title>ادارة حساب العميل</ion-title>\n<app-client-search\n  *ngIf=\"currentViewState === State.SEARCHING\"\n  [sourcePage]=\"109\"\n  [searchMethod]=\"2\"\n  [resultType]=\"0\"\n  [pageAction]=\"0\"\n  [initialSearchType]=\"'1'\"\n  (selectedClient)=\"clientSelected($event)\"\n>\n</app-client-search>\n\n<div *ngIf=\"currentViewState === State.LIST\">\n  <ion-card>\n    <div class=\"table-responsive ion-padding\">\n      <ion-grid class=\"scroll-container\">\n        <ion-row class=\"header-row\">\n          <ion-col size=\"1\" class=\"text-center\">\n            <ion-label>م</ion-label>\n          </ion-col>\n          <ion-col class=\"text-center\">\n            <ion-label>نوع الحساب</ion-label>\n          </ion-col>\n          <ion-col class=\"text-center\">\n            <ion-label>قيمة الحساب</ion-label>\n          </ion-col>\n          <ion-col class=\"text-center\">\n            <ion-label>حالة الحساب</ion-label>\n          </ion-col>\n          <ion-col class=\"text-center\">\n            <ion-label>تاريخ الحساب</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          class=\"details-row clickableRow\"\n          *ngFor=\"let agree of agreements\"\n          (click)=\"onSelectAgreement(agree)\"\n        >\n          <ion-col size=\"1\" class=\"text-center\">\n            <ion-label> {{agree.row_num}} </ion-label>\n          </ion-col>\n          <ion-col class=\"text-center\">\n            <ion-label> {{agree.loan_type_name}} </ion-label>\n          </ion-col>\n          <ion-col class=\"text-center\">\n            <ion-label>\n              {{agree.credit_limit|number: '1.2-2' : 'en' }}\n            </ion-label>\n          </ion-col>\n          <ion-col class=\"text-center\">\n            <ion-label> {{agree.agr_status_desc}} </ion-label>\n          </ion-col>\n          <ion-col class=\"text-center\">\n            <ion-label> {{agree.agr_date|date:'yyyy-MM-dd'}} </ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-card>\n  <ion-row class=\"justify-content-center\">\n    <ion-button color=\"danger\" (click)=\"backButton()\">رجوع</ion-button>\n  </ion-row>\n</div>\n\n<div *ngIf=\"currentViewState === State.DETAIL\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"text-center\">بيانات الحساب</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid class=\"ion-padding\">\n        <ion-row>\n          <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" size-xl=\"3\">\n            <ion-row style=\"justify-content: center\">\n              <ion-label class=\"form-label\"> اسم العميل </ion-label>\n            </ion-row>\n            <ion-row style=\"justify-content: center\" class=\"Border\">\n              <ion-label> {{agreement.client_name}} </ion-label>\n            </ion-row>\n          </ion-col>\n          <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" size-xl=\"3\">\n            <ion-row style=\"justify-content: center\">\n              <ion-label class=\"form-label\"> الرقم القومي </ion-label>\n            </ion-row>\n            <ion-row style=\"justify-content: center\" class=\"Border\">\n              <ion-label> {{agreement.nation_id}} </ion-label>\n            </ion-row>\n          </ion-col>\n          <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" size-xl=\"3\">\n            <ion-row style=\"justify-content: center\">\n              <ion-label class=\"form-label\"> الحد الاقصي </ion-label>\n            </ion-row>\n            <ion-row style=\"justify-content: center\" class=\"Border\">\n              <ion-label>\n                {{agreement.credit_limit|number: '1.2-2' : 'en' }}\n              </ion-label>\n            </ion-row>\n          </ion-col>\n          <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" size-xl=\"3\">\n            <ion-row style=\"justify-content: center\">\n              <ion-label class=\"form-label\"> نوع الحساب </ion-label>\n            </ion-row>\n            <ion-row style=\"justify-content: center\" class=\"Border\">\n              <ion-label> {{agreement.loan_type_name}} </ion-label>\n            </ion-row>\n          </ion-col>\n          <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" size-xl=\"3\">\n            <ion-row style=\"justify-content: center\">\n              <ion-label class=\"form-label\"> حالة الحساب </ion-label>\n            </ion-row>\n            <ion-row style=\"justify-content: center\" class=\"Border\">\n              <ion-label> {{agreement.agr_status_desc}} </ion-label>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"text-center\">ادارة الحساب</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form [formGroup]=\"manageAgreementForm\">\n        <ion-grid class=\"ion-padding\">\n          <ion-row class=\"justify-content-center\">\n            <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n              <ion-label class=\"form-label\"> حالة الحساب </ion-label>\n              <ion-select\n                interface=\"popover\"\n                placeholder=\"حالة الحساب\"\n                formControlName=\"agreementStatus\"\n                class=\"subselect\"\n              >\n                <ion-select-option\n                  *ngFor=\"let agr of agreementStatusList\"\n                  [value]=\"agr.ref_code\"\n                >\n                  {{ agr.ref_desc }}\n                </ion-select-option>\n              </ion-select>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </ion-card-content>\n  </ion-card>\n  <ion-row class=\"justify-content-center\">\n    <ion-button (click)=\"saveAgreement()\">حفظ</ion-button>\n    <ion-button color=\"danger\" (click)=\"backButton()\">رجوع</ion-button>\n  </ion-row>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_overDraft_manage-agreement_manage-agreement_module_ts.js.map