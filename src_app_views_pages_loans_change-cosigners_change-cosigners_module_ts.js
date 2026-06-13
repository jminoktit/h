"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_change-cosigners_change-cosigners_module_ts"],{

/***/ 13457:
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/loans/change-cosigners/change-cosigners-routing.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeCosignersPageRoutingModule": function() { return /* binding */ ChangeCosignersPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _change_cosigners_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-cosigners.page */ 31804);






var routes = [{
  path: '',
  component: _change_cosigners_page__WEBPACK_IMPORTED_MODULE_2__.ChangeCosignersPage
}];

var ChangeCosignersPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ChangeCosignersPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ChangeCosignersPageRoutingModule);
});

ChangeCosignersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ChangeCosignersPageRoutingModule);


/***/ }),

/***/ 52245:
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/loans/change-cosigners/change-cosigners.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeCosignersPageModule": function() { return /* binding */ ChangeCosignersPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _change_cosigners_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-cosigners-routing.module */ 13457);
/* harmony import */ var _change_cosigners_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-cosigners.page */ 31804);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var ChangeCosignersPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ChangeCosignersPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ChangeCosignersPageModule);
});

ChangeCosignersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _change_cosigners_routing_module__WEBPACK_IMPORTED_MODULE_2__.ChangeCosignersPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_change_cosigners_page__WEBPACK_IMPORTED_MODULE_3__.ChangeCosignersPage]
})], ChangeCosignersPageModule);


/***/ }),

/***/ 31804:
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/loans/change-cosigners/change-cosigners.page.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeCosignersPage": function() { return /* binding */ ChangeCosignersPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ 10507);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _change_cosigners_page_html_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-cosigners.page.html?ngResource */ 95824);
/* harmony import */ var _change_cosigners_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-cosigners.page.scss?ngResource */ 78255);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/loan-applications.service */ 35866);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);
/* harmony import */ var src_app_views_components_cosigners_cosigners_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/views/components/cosigners/cosigners.component */ 85491);















var ChangeCosignersPage = /*#__PURE__*/function () {
  function ChangeCosignersPage(authServices, alertService, loanService, loanApplicationService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ChangeCosignersPage);

    this.authServices = authServices;
    this.alertService = alertService;
    this.loanService = loanService;
    this.loanApplicationService = loanApplicationService;
    this.showLoader = false;
    this.loanInformation = null;
    this.cosignerParameterForClientInfo = null;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ChangeCosignersPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.initState();
                _context.next = 3;
                return this.setPagesPermission();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "initState",
    value: function initState() {
      this.segmentInterface = {
        visible: true,
        segmentsData: [{
          name: "قروض غير المصدرة",
          windowCode: "5671",
          disable: false,
          isSegmentSelected: false,
          pageAction: 0
        }, {
          name: "قروض المصدرة",
          windowCode: "5672",
          disable: false,
          isSegmentSelected: false,
          pageAction: 1
        }]
      };
      this.clientSearchInterface = {
        visible: true,
        searchResult: null
      };
    }
  }, {
    key: "setPagesPermission",
    value: function setPagesPermission() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        var accessRight;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.authServices.getAccessRights();

              case 2:
                accessRight = _context2.sent.map(function (pages) {
                  return pages.window_code;
                });
                this.segmentInterface.segmentsData.forEach(function (segment) {
                  segment.disable = !accessRight.includes(segment.windowCode);
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "selectedSegment",
    get: function get() {
      // Find the first segment that is selected
      var selected = this.segmentInterface.segmentsData.find(function (segment) {
        return segment.isSegmentSelected;
      }); // If no selected segment, find the first segment that is not disabled (having permission on it)

      return selected || this.segmentInterface.segmentsData.find(function (segment) {
        return !segment.disable;
      });
    }
  }, {
    key: "onSegmentChange",
    value: function onSegmentChange(event) {
      var segmentEvent = event;
      var selectedWindowCode = segmentEvent.detail.value;
      this.segmentInterface.segmentsData.forEach(function (segment) {
        return segment.isSegmentSelected = segment.windowCode === selectedWindowCode;
      });
      this.resetClientSearchComponent();
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var errorMessage;

      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpErrorResponse) {
        errorMessage = JSON.stringify(error.error);
      } else if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = String(error);
      }

      this.alertService.showAlertError(errorMessage, false);
      console.error("Error:", error);
    }
  }, {
    key: "resetClientSearchComponent",
    value: function resetClientSearchComponent() {
      var _this = this;

      this.clientSearchInterface.visible = false;
      setTimeout(function () {
        return _this.clientSearchInterface.visible = true;
      }, 0);
    }
  }, {
    key: "searchResult",
    value: function searchResult(_searchResult) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.showLoader = true;
                console.log(_searchResult);
                this.clientSearchInterface.searchResult = _searchResult;
                _context3.next = 6;
                return this.patchingFormGroup();

              case 6:
                this.clientSearchInterface.visible = false;
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](0);
                this.handleError(_context3.t0);

              case 12:
                _context3.prev = 12;
                this.showLoader = false;
                return _context3.finish(12);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 9, 12, 15]]);
      }));
    }
  }, {
    key: "backButton",
    value: function backButton() {
      this.clientSearchInterface.visible = true;
    }
  }, {
    key: "patchingFormGroup",
    value: function patchingFormGroup() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4() {
        var _yield$Promise$all, _yield$Promise$all2, loan, cosigners;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.t0 = Promise;
                _context4.t1 = this.loanService.getLoanInformationByLoanKey(Number(this.clientSearchInterface.searchResult.loan_key)).toPromise();
                _context4.next = 4;
                return this.loanApplicationService.getLoanApplicationCosigners(this.clientSearchInterface.searchResult.application_key.toString());

              case 4:
                _context4.t2 = _context4.sent;
                _context4.t3 = [_context4.t1, _context4.t2];
                _context4.next = 8;
                return _context4.t0.all.call(_context4.t0, _context4.t3);

              case 8:
                _yield$Promise$all = _context4.sent;
                _yield$Promise$all2 = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$Promise$all, 2);
                loan = _yield$Promise$all2[0];
                cosigners = _yield$Promise$all2[1];
                this.loanInformation = {
                  clientName: this.clientSearchInterface.searchResult.client_name,
                  loanAmount: loan.loanAmount,
                  loanDate: loan.loanDate,
                  loanKey: loan.loanKey.toString(),
                  clientCode: this.clientSearchInterface.searchResult.client_code.toString(),
                  clientNationId: this.clientSearchInterface.searchResult.nation_id,
                  orgCode: loan.orgCode.toString(),
                  applicationKey: this.clientSearchInterface.searchResult.application_key.toString()
                };
                this.cosignerParameterForClientInfo = {
                  org_code: loan.orgCode.toString(),
                  client_code: this.clientSearchInterface.searchResult.client_code.toString(),
                  nation_id: this.clientSearchInterface.searchResult.nation_id
                };
                this.selectedCosigners = cosigners.map(function (cosigner) {
                  return Object.assign({}, cosigner);
                });

              case 15:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "extractCosignersFromComponent",
    value: function extractCosignersFromComponent() {
      return this.cosignersComponent.getSelectedCosigners();
    }
  }, {
    key: "saveButton",
    value: function saveButton() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5() {
        var cosigners, cosignerBody;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                this.showLoader = true;
                _context5.next = 4;
                return this.alertService.SaveAlert();

              case 4:
                if (_context5.sent) {
                  _context5.next = 6;
                  break;
                }

                return _context5.abrupt("return");

              case 6:
                cosigners = this.extractCosignersFromComponent();
                cosignerBody = cosigners.map(function (cosigner, index) {
                  return {
                    row_no: index + 1,
                    client_key: Number(cosigner.coClientKey)
                  };
                });
                _context5.next = 10;
                return this.loanApplicationService.updateLoanApplicationCosigners({
                  application_key: Number(this.loanInformation.applicationKey),
                  cosigners: cosignerBody
                });

              case 10:
                _context5.next = 12;
                return this.alertService.showAlertConfirm("لقد تم التعديل بنجاح", true);

              case 12:
                _context5.next = 17;
                break;

              case 14:
                _context5.prev = 14;
                _context5.t0 = _context5["catch"](0);
                this.handleError(_context5.t0);

              case 17:
                _context5.prev = 17;
                this.showLoader = false;
                return _context5.finish(17);

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 14, 17, 20]]);
      }));
    }
  }]);

  return ChangeCosignersPage;
}();

ChangeCosignersPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__.MohassilAuthService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }, {
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_9__.LoansService
  }, {
    type: src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_8__.LoanApplicationsService
  }];
};

ChangeCosignersPage.propDecorators = {
  cosignersComponent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: [src_app_views_components_cosigners_cosigners_component__WEBPACK_IMPORTED_MODULE_10__.CosignersComponent]
  }]
};
ChangeCosignersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: "app-change-cosigners",
  template: _change_cosigners_page_html_ngResource__WEBPACK_IMPORTED_MODULE_4__,
  styles: [_change_cosigners_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_5__]
})], ChangeCosignersPage);


/***/ }),

/***/ 78255:
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/loans/change-cosigners/change-cosigners.page.scss?ngResource ***!
  \******************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtY29zaWduZXJzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 95824:
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/loans/change-cosigners/change-cosigners.page.html?ngResource ***!
  \******************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n\n<ion-toolbar>\n  <ion-title>تغيير الضامن</ion-title>\n</ion-toolbar>\n\n<ion-segment *ngIf=\"segmentInterface.visible\" [value]=\"selectedSegment.windowCode\"\n  (ionChange)=\"onSegmentChange($event)\">\n  <ion-segment-button *ngFor=\"let segment of segmentInterface.segmentsData\" [value]=\"segment.windowCode\"\n    [disabled]=\"segment.disable || !clientSearchInterface.visible\">\n    <ion-label class=\"form-label\">{{ segment.name }}</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<app-client-search *ngIf=\"clientSearchInterface.visible\" [sourcePage]=\"15\" [pageAction]=\"selectedSegment.pageAction\"\n  (selectedClient)=\"searchResult($event)\" initialSearchType=\"1\">\n</app-client-search>\n\n<ion-card *ngIf=\"!clientSearchInterface.visible\">\n  <ion-card-content>\n    <form>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n            <ion-label class=\"form-label\"> اسم العميل </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanInformation.clientName}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> الرقم القومي </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanInformation.clientNationId}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> كود القرض </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanInformation.loanKey}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> تاريخ القرض </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanInformation.loanDate | date:'yyyy-MM-dd'}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"6\" size-lg=\"2\" size-md=\"3\" size-sm=\"6\">\n            <ion-label class=\"form-label\"> مبلغ القرض </ion-label>\n            <ion-label class=\"form-control\">\n              {{loanInformation.loanAmount | number:'1.0-0'}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <app-cosigners [canEdit]=\"true\" [(selectedCosigners)]=\"selectedCosigners\"\n        [clientInfo]=\"cosignerParameterForClientInfo\"></app-cosigners>\n    </form>\n    <ion-row class=\"justify-content-center ion-padding\">\n      <ion-button color=\"danger\" (click)=\"backButton()\"> رجوع </ion-button>\n      <ion-button (click)=\"saveButton()\"> حفظ </ion-button>\n    </ion-row>\n  </ion-card-content>\n</ion-card>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_change-cosigners_change-cosigners_module_ts.js.map