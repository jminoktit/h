"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_remove-application_remove-application_module_ts"],{

/***/ 92486:
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/remove-application/remove-application-routing.module.ts ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveApplicationPageRoutingModule": function() { return /* binding */ RemoveApplicationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _remove_application_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-application.page */ 87658);






var routes = [{
  path: '',
  component: _remove_application_page__WEBPACK_IMPORTED_MODULE_2__.RemoveApplicationPage
}];

var RemoveApplicationPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function RemoveApplicationPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RemoveApplicationPageRoutingModule);
});

RemoveApplicationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], RemoveApplicationPageRoutingModule);


/***/ }),

/***/ 84555:
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/remove-application/remove-application.module.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveApplicationPageModule": function() { return /* binding */ RemoveApplicationPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _remove_application_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove-application-routing.module */ 92486);
/* harmony import */ var _remove_application_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-application.page */ 87658);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ 63430);











var RemoveApplicationPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function RemoveApplicationPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RemoveApplicationPageModule);
});

RemoveApplicationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _remove_application_routing_module__WEBPACK_IMPORTED_MODULE_2__.RemoveApplicationPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_remove_application_page__WEBPACK_IMPORTED_MODULE_3__.RemoveApplicationPage]
})], RemoveApplicationPageModule);


/***/ }),

/***/ 87658:
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/remove-application/remove-application.page.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveApplicationPage": function() { return /* binding */ RemoveApplicationPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _remove_application_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove-application.page.html?ngResource */ 24405);
/* harmony import */ var _remove_application_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remove-application.page.scss?ngResource */ 45015);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/loan-applications.service */ 35866);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/client.service */ 2671);











var RemoveApplicationPage = /*#__PURE__*/function () {
  function RemoveApplicationPage(loanApplicationService, alertService, clientService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RemoveApplicationPage);

    this.loanApplicationService = loanApplicationService;
    this.alertService = alertService;
    this.clientService = clientService;
    this.showLoader = false;
    this.isSearching = true;
    this.selectedCosigners = [];
    this.openModal = false;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RemoveApplicationPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "clientSelected",
    value: function clientSelected(event) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.showLoader = true;
                _context3.next = 3;
                return this.loanApplicationService.getApplicationKey(event.application_key).then(function (res) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
                    var _this2 = this;

                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            this.applicationInfo = res;
                            _context2.next = 3;
                            return this.clientService.getClientByClientKey(res.clientKey).then(function (client) {
                              return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
                                return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                                  while (1) {
                                    switch (_context.prev = _context.next) {
                                      case 0:
                                        this.clientInfo = client;
                                        this.isSearching = false;
                                        this.cosignerParameterForClientInfo = {
                                          org_code: client.org_code,
                                          client_code: client.org_branch_code + "/" + client.client_code,
                                          nation_id: client.nation_id
                                        };
                                        _context.next = 5;
                                        return this.loanApplicationService.getLoanApplicationCosigners(res.applicationKey.toString());

                                      case 5:
                                        this.selectedCosigners = _context.sent;
                                        _context.next = 8;
                                        return this.loanApplicationService.getJobUsersDoc(res.applicationKey.toString());

                                      case 8:
                                        this.currentStep = _context.sent;
                                        _context.next = 11;
                                        return this.loanApplicationService.getLastSteps(res.applicationKey.toString());

                                      case 11:
                                        this.lastSteps = _context.sent;

                                      case 12:
                                      case "end":
                                        return _context.stop();
                                    }
                                  }
                                }, _callee, this);
                              }));
                            });

                          case 3:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));
                }).catch(function (err) {
                  _this.alertService.showAlertError(err.error, false);

                  console.log("Error fetching application key:", err);
                }).finally(function () {
                  _this.showLoader = false;
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "backToSearch",
    value: function backToSearch() {
      this.isSearching = true;
      this.applicationInfo = null;
      this.clientInfo = null;
      this.selectedCosigners = [];
      this.cosignerParameterForClientInfo = null;
      this.lastSteps = [];
      this.currentStep = [];
      this.openModal = false;
    }
  }, {
    key: "removeApplication",
    value: function removeApplication() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var _this3 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.alertService.SaveAlert("هل أنت متأكد من حذف الطلب؟");

              case 2:
                if (!_context4.sent) {
                  _context4.next = 6;
                  break;
                }

                this.showLoader = true;
                _context4.next = 6;
                return this.loanApplicationService.deleteApplication(this.applicationInfo.applicationKey.toString(), this.applicationInfo.uuc.toString(), this.clientInfo.uuc.toString()).toPromise().then(function () {
                  _this3.showLoader = false;

                  _this3.alertService.showAlertConfirm("تم حذف الطلب بنجاح", true);
                }).catch(function (error) {
                  _this3.showLoader = false;

                  _this3.alertService.showAlertError("حدث خطأ أثناء حذف الطلب: " + error.error, false);

                  console.error("Error removing application:", error);
                });

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }]);

  return RemoveApplicationPage;
}();

RemoveApplicationPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_5__.LoanApplicationsService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }, {
    type: src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_7__.ClientService
  }];
};

RemoveApplicationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: "app-remove-application",
  template: _remove_application_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_remove_application_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], RemoveApplicationPage);


/***/ }),

/***/ 45015:
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/remove-application/remove-application.page.scss?ngResource ***!
  \****************************************************************************************/
/***/ (function(module) {

module.exports = "ion-modal {\n  --width: 100% !important;\n  --height: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbW92ZS1hcHBsaWNhdGlvbi5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXHJlbW92ZS1hcHBsaWNhdGlvblxccmVtb3ZlLWFwcGxpY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJyZW1vdmUtYXBwbGljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1vZGFsIHtcclxuICAtLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgLS1oZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4iLCJpb24tbW9kYWwge1xuICAtLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 24405:
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/remove-application/remove-application.page.html?ngResource ***!
  \****************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<h4>حذف طلب القرض</h4>\n<app-client-search\n  *ngIf=\"isSearching\"\n  [sourcePage]=\"168\"\n  [pageAction]=\"0\"\n  [resultType]=\"2\"\n  [initialSearchType]=\"'1'\"\n  (selectedClient)=\"clientSelected($event)\"\n>\n</app-client-search>\n<div *ngIf=\"!isSearching\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>بيانات العميل</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label class=\"ion-text-nowrap\">الاسم</ion-label>\n            <ion-label class=\"form-control ion-text-nowrap\"\n              >{{ clientInfo.client_name }}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"ion-text-nowrap\">الرقم القومي</ion-label>\n            <ion-label class=\"form-control ion-text-nowrap\"\n              >{{ clientInfo.nation_id }}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"ion-text-nowrap\">رقم المحمول</ion-label>\n            <ion-label class=\"form-control ion-text-nowrap\"\n              >{{ clientInfo.mobile_1 }}</ion-label\n            >\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>بيانات طلب القرض</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label class=\"ion-text-nowrap\">رقم الطلب</ion-label>\n            <ion-label class=\"form-control ion-text-nowrap\"\n              >{{ applicationInfo.applicationCode }}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"ion-text-nowrap\">تاريخ الطلب</ion-label>\n            <ion-label class=\"form-control ion-text-nowrap\"\n              >{{ applicationInfo.entryDate | date: \"dd/MM/yyyy\" }}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"ion-text-nowrap\">المبلغ المطلوب</ion-label>\n            <ion-label class=\"form-control ion-text-nowrap\"\n              >{{ applicationInfo.requestInstallmentAmount| number }}</ion-label\n            >\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label class=\"ion-text-nowrap\">عدد الاقساط</ion-label>\n            <ion-label class=\"form-control ion-text-nowrap\"\n              >{{ applicationInfo.requestInstallmentNumber }}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"ion-text-nowrap\">فترة السداد كل</ion-label>\n            <ion-label class=\"form-control ion-text-nowrap\"\n              >{{ applicationInfo.periodLength }}\n              {{applicationInfo.periodTypeName}}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"ion-text-nowrap\">نسبة المصاريف الموزعة</ion-label>\n            <ion-label class=\"form-control ion-text-nowrap\"\n              >{{ applicationInfo.loanInterestRate}}</ion-label\n            >\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-label class=\"ion-text-nowrap\">نوع القرض</ion-label>\n            <ion-label class=\"form-control ion-text-nowrap\"\n              >{{ applicationInfo.loanTypeName}}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"ion-text-nowrap\">طريقة الحساب</ion-label>\n            <ion-label class=\"form-control ion-text-nowrap\"\n              >{{ applicationInfo.calculationTypeName}}</ion-label\n            >\n          </ion-col>\n          <ion-col>\n            <ion-label class=\"ion-text-nowrap\">المندوب</ion-label>\n            <ion-label class=\"form-control ion-text-nowrap\"\n              >{{ applicationInfo.officerName}}</ion-label\n            >\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col\n            [ngStyle]=\"{'text-align': applicationInfo.useWorkflow === 1 ? 'left' : 'center'}\"\n          >\n            <app-cosigners\n              [canEdit]=\"false\"\n              [(selectedCosigners)]=\"selectedCosigners\"\n              [clientInfo]=\"cosignerParameterForClientInfo\"\n            ></app-cosigners>\n          </ion-col>\n          <ion-col\n            style=\"text-align: right\"\n            *ngIf=\"applicationInfo.useWorkflow === 1\"\n          >\n            <ion-button (click)=\"openModal= true\">\n              <ion-icon name=\"document-text\"></ion-icon> عرض خطوات طلب القرض\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-row>\n    <ion-col style=\"text-align: center\">\n      <ion-button (click)=\"removeApplication()\">حذف الطلب</ion-button>\n      <ion-button color=\"danger\" (click)=\"backToSearch()\"> رجوع </ion-button>\n    </ion-col>\n  </ion-row>\n</div>\n<ion-modal [isOpen]=\"openModal\" (willDismiss)=\"openModal = false\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>خطوات طلب القرض</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"openModal = false\">\n            <ion-icon name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <app-timeline\n        *ngIf=\"applicationInfo?.useWorkflow === 1\"\n        [lastSteps]=\"lastSteps\"\n        [currentStep]=\"currentStep\"\n      ></app-timeline>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_remove-application_remove-application_module_ts.js.map