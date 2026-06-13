"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_iscore-response_iscore-response_module_ts"],{

/***/ 58767:
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/iscore-response/iscore-response-routing.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IscoreResponsePageRoutingModule": function() { return /* binding */ IscoreResponsePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _iscore_response_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iscore-response.page */ 34132);






var routes = [{
  path: '',
  component: _iscore_response_page__WEBPACK_IMPORTED_MODULE_2__.iscoreresponsePage
}];

var IscoreResponsePageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function IscoreResponsePageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, IscoreResponsePageRoutingModule);
});

IscoreResponsePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], IscoreResponsePageRoutingModule);


/***/ }),

/***/ 98816:
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/iscore-response/iscore-response.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IscoreResponsePageModule": function() { return /* binding */ IscoreResponsePageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);
/* harmony import */ var _iscore_response_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iscore-response-routing.module */ 58767);
/* harmony import */ var _iscore_response_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iscore-response.page */ 34132);












var IscoreResponsePageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function IscoreResponsePageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, IscoreResponsePageModule);
});

IscoreResponsePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _iscore_response_routing_module__WEBPACK_IMPORTED_MODULE_3__.IscoreResponsePageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_iscore_response_page__WEBPACK_IMPORTED_MODULE_4__.iscoreresponsePage]
})], IscoreResponsePageModule);


/***/ }),

/***/ 34132:
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/iscore-response/iscore-response.page.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iscoreresponsePage": function() { return /* binding */ iscoreresponsePage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _iscore_response_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iscore-response.page.html?ngResource */ 36825);
/* harmony import */ var _iscore_response_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./iscore-response.page.scss?ngResource */ 12498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var src_app_core_services_iscore_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/iscore-http.service */ 80889);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/pdf-viewer.service */ 37801);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
















var iscoreresponsePage = /*#__PURE__*/function () {
  function iscoreresponsePage(iscoreHttpService, alertService, platform, pdfViewerService, referencesService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, iscoreresponsePage);

    this.iscoreHttpService = iscoreHttpService;
    this.alertService = alertService;
    this.platform = platform;
    this.pdfViewerService = pdfViewerService;
    this.referencesService = referencesService;
    this.showLoader = false;
    this.inquirySuccess = false;
    this.searchType = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(1);
    this.searchType$ = this.searchType.asObservable();
    this.inquiryReason = new rxjs__WEBPACK_IMPORTED_MODULE_9__.BehaviorSubject(null);
    this.inquiryReason$ = this.inquiryReason.asObservable();
    this.sourcePage$ = this.searchType$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(function (searchType) {
      return searchType == 1 ? 56 : 53;
    }));
    this.inquiryPdfBase64 = null;
    this.inquiryReasonArray = [];
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(iscoreresponsePage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.backButtonListener = this.platform.backButton.subscribeWithPriority(10, function (next) {
                  if (_this.backButton()) {
                    next();
                  }
                });
                _context.next = 3;
                return this.referencesService.getInquiryReasonIScore();

              case 3:
                this.inquiryReasonArray = _context.sent;

              case 4:
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
      this.backButtonListener.unsubscribe();
    }
  }, {
    key: "backToSearch",
    value: function backToSearch() {
      this.clientWithLastInquiryInfo = undefined;
      this.inquiryPdfBase64 = null;
      this.inquirySuccess = false;
      this.inquiryReason.next(null);
    }
  }, {
    key: "backButton",
    value: function backButton() {
      if (!this.clientWithLastInquiryInfo) {
        return true;
      }

      this.backToSearch();
      return false;
    }
  }, {
    key: "changeSearchType",
    value: function changeSearchType(searchType) {
      this.searchType.next(searchType);
    }
  }, {
    key: "onClientSelected",
    value: function onClientSelected(client) {
      this.clientKey = client.client_key.toString();
      this.getClientWithLastInquiryInfo(this.clientKey);
    }
  }, {
    key: "getClientWithLastInquiryInfo",
    value: function getClientWithLastInquiryInfo(clientKey) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.showLoader = true;
                _context2.prev = 1;
                _context2.next = 4;
                return this.iscoreHttpService.getClientWithLastInquiryInfo(clientKey).toPromise();

              case 4:
                this.clientWithLastInquiryInfo = _context2.sent;
                this.showLoader = false;
                _context2.next = 14;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                this.showLoader = false;

                if (!(_context2.t0 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpErrorResponse)) {
                  _context2.next = 14;
                  break;
                }

                this.alertService.showAlertError(JSON.stringify(_context2.t0.error), false);
                return _context2.abrupt("return");

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 8]]);
      }));
    }
  }, {
    key: "onChangeInquiryReason",
    value: function onChangeInquiryReason(inquiryReason) {
      this.inquiryReason.next(inquiryReason);
    }
  }, {
    key: "inquire",
    value: function inquire(clientKey) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var _this2 = this;

        var inquiryReason, confirmation, inquiryResponse;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                inquiryReason = this.inquiryReason.getValue();

                if (!(inquiryReason === null)) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 4;
                return this.alertService.showAlertError("برجاء اختيار سبب الاستعلام", false);

              case 4:
                return _context3.abrupt("return");

              case 5:
                _context3.next = 7;
                return this.alertService.SaveAlert("هل أنت متأكد من الاستعلام عن العميل؟");

              case 7:
                confirmation = _context3.sent;

                if (confirmation) {
                  _context3.next = 10;
                  break;
                }

                return _context3.abrupt("return");

              case 10:
                _context3.prev = 10;
                this.showLoader = true;
                _context3.next = 14;
                return this.iscoreHttpService.inquire(clientKey, inquiryReason.toString()).toPromise();

              case 14:
                inquiryResponse = _context3.sent;

                if (inquiryResponse.success) {
                  _context3.next = 19;
                  break;
                }

                this.showLoader = false;
                this.alertService.showAlertError(inquiryResponse.error, false);
                return _context3.abrupt("return");

              case 19:
                this.inquirySuccess = true;
                _context3.next = 22;
                return this.getClientWithLastInquiryInfo(clientKey);

              case 22:
                this.showLoader = false;
                _context3.next = 25;
                return this.alertService.popAlertBoolean("هل ترغب في عرض مستند نتيجة الاستعلام؟", "تم الاستعلام", "inquiry-pdf-show-alert", [""], [{
                  text: "عرض المستند",
                  handler: function handler() {
                    _this2.showInquiryPdf(inquiryResponse.inquiryId);
                  }
                }, {
                  text: "إلغاء",
                  role: "cancel"
                }]);

              case 25:
                _context3.next = 33;
                break;

              case 27:
                _context3.prev = 27;
                _context3.t0 = _context3["catch"](10);
                this.showLoader = false;

                if (!(_context3.t0 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpErrorResponse)) {
                  _context3.next = 33;
                  break;
                }

                this.alertService.showAlertError(JSON.stringify(_context3.t0.error), false);
                return _context3.abrupt("return");

              case 33:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[10, 27]]);
      }));
    }
  }, {
    key: "showInquiryPdf",
    value: function showInquiryPdf(inquiryId) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (this.pdfViewerService.canViewPdf()) {
                  _context4.next = 4;
                  break;
                }

                _context4.next = 3;
                return this.alertService.showAlertError("لا يمكن عرض أو تنزيل المستند على المتصفح الحالي", false);

              case 3:
                return _context4.abrupt("return");

              case 4:
                _context4.next = 6;
                return this.getInquiryPdf(inquiryId);

              case 6:
                _context4.next = 8;
                return this.pdfViewerService.viewPdf(this.inquiryPdfBase64, "inquiry_".concat(inquiryId, ".pdf"), "تقرير الاستعلام الائتماني");

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "getInquiryPdf",
    value: function getInquiryPdf(inquiryId) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var pdfResponse;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(this.inquiryPdfBase64 == null)) {
                  _context5.next = 16;
                  break;
                }

                this.showLoader = true;
                _context5.prev = 2;
                _context5.next = 5;
                return this.iscoreHttpService.getInquiryPdf(inquiryId).toPromise();

              case 5:
                pdfResponse = _context5.sent;
                this.inquiryPdfBase64 = pdfResponse.base64String;
                this.showLoader = false;
                _context5.next = 16;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](2);
                this.showLoader = false;

                if (!(_context5.t0 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpErrorResponse)) {
                  _context5.next = 16;
                  break;
                }

                this.alertService.showAlertError(JSON.stringify(_context5.t0.error), false);
                return _context5.abrupt("return");

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2, 10]]);
      }));
    }
  }, {
    key: "isInquiryAvailable",
    value: function isInquiryAvailable() {
      return this.inquirySuccess || this.clientWithLastInquiryInfo.validInquiry && this.clientWithLastInquiryInfo.applicationsWaitingInquiry == 0;
    }
  }]);

  return iscoreresponsePage;
}();

iscoreresponsePage.ctorParameters = function () {
  return [{
    type: src_app_core_services_iscore_http_service__WEBPACK_IMPORTED_MODULE_5__.IscoreHttpService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform
  }, {
    type: src_app_core_services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_7__.PdfViewerService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_8__.ReferencesService
  }];
};

iscoreresponsePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: "app-iscore-response",
  template: _iscore_response_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_iscore_response_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], iscoreresponsePage);


/***/ }),

/***/ 12498:
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/iscore-response/iscore-response.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpc2NvcmUtcmVzcG9uc2UucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 36825:
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/iscore-response/iscore-response.page.html?ngResource ***!
  \**********************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\r\n<ion-title class=\"ion-padding-vertical\"> الاستعلام الائتماني </ion-title>\r\n\r\n<ion-card>\r\n  <ion-card-content>\r\n    <ng-template #search>\r\n      <ion-row>\r\n        <ion-col size=\"12\" sizeLg=\"3\" sizeMd=\"4\" sizeSm=\"12\">\r\n          <div class=\"form-group w-100\">\r\n            <ion-select\r\n              interface=\"popover\"\r\n              [ngModel]=\"searchType$ | async\"\r\n              (ngModelChange)=\"changeSearchType($event)\"\r\n              placeholder=\"البحث عن...\"\r\n              class=\"subselect\"\r\n            >\r\n              <ion-select-option [value]=\"1\">كل العملاء</ion-select-option>\r\n              <ion-select-option [value]=\"2\"\r\n                >عملاء لهم طلبات قروض</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <app-client-search\r\n        [sourcePage]=\"sourcePage$ | async\"\r\n        initialSearchType=\"5\"\r\n        (selectedClient)=\"onClientSelected($event)\"\r\n      ></app-client-search>\r\n    </ng-template>\r\n    <ng-container *ngIf=\"!!clientWithLastInquiryInfo; else search\">\r\n      <ion-item slot=\"header\">\r\n        <ion-label class=\"font-weight-bold text-center\">\r\n          بيانات العميل\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-row>\r\n        <ion-col size=\"12\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\">\r\n          <ion-label class=\"form-label\">اسم العميل</ion-label>\r\n          <ion-input\r\n            class=\"form-control\"\r\n            [ngModel]=\"clientWithLastInquiryInfo.clientName\"\r\n            [readonly]=\"true\"\r\n          ></ion-input>\r\n        </ion-col>\r\n        <ion-col size=\"12\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\">\r\n          <ion-label class=\"form-label\">الرقم القومي</ion-label>\r\n          <ion-input\r\n            class=\"form-control\"\r\n            [ngModel]=\"clientWithLastInquiryInfo.nationalId\"\r\n            [readonly]=\"true\"\r\n          ></ion-input>\r\n        </ion-col>\r\n        <ion-col size=\"12\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\">\r\n          <ion-label class=\"form-label\">كود العميل</ion-label>\r\n          <ion-input\r\n            class=\"form-control\"\r\n            [ngModel]=\"clientWithLastInquiryInfo.fullClientCode\"\r\n            [readonly]=\"true\"\r\n          ></ion-input>\r\n        </ion-col>\r\n        <ion-col size=\"12\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\">\r\n          <ion-label class=\"form-label\">نوع الاقتراض</ion-label>\r\n          <ion-input\r\n            class=\"form-control\"\r\n            [ngModel]=\"clientWithLastInquiryInfo.clientTypeName\"\r\n            [readonly]=\"true\"\r\n          ></ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ng-container *ngIf=\"clientWithLastInquiryInfo.inquiryId != null\">\r\n        <ion-item slot=\"header\" class=\"mt-4\">\r\n          <ion-label class=\"font-weight-bold text-center\">\r\n            بيانات آخر استعلام\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-row>\r\n          <ion-col size=\"12\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\">\r\n            <ion-label class=\"form-label\">تقييم العميل</ion-label>\r\n            <ion-input\r\n              class=\"form-control\"\r\n              [ngModel]=\"clientWithLastInquiryInfo.scoreDesc\"\r\n              [readonly]=\"true\"\r\n            ></ion-input>\r\n          </ion-col>\r\n          <ion-col size=\"12\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\">\r\n            <ion-label class=\"form-label\">التقييم الرقمي</ion-label>\r\n            <ion-input\r\n              class=\"form-control\"\r\n              [ngModel]=\"clientWithLastInquiryInfo.score ?? 'غير متاح'\"\r\n              [readonly]=\"true\"\r\n            ></ion-input>\r\n          </ion-col>\r\n          <ion-col size=\"12\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\">\r\n            <ion-label class=\"form-label\">تاريخ الاستعلام</ion-label>\r\n            <ion-input\r\n              class=\"form-control\"\r\n              [ngModel]=\"clientWithLastInquiryInfo.inquiryTimestamp | date: 'yyyy/MM/dd'\"\r\n              [readonly]=\"true\"\r\n            ></ion-input>\r\n          </ion-col>\r\n          <ion-col size=\"12\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\">\r\n            <ion-label class=\"form-label\">وقت الاستعلام</ion-label>\r\n            <ion-input\r\n              class=\"form-control\"\r\n              [ngModel]=\"clientWithLastInquiryInfo.inquiryTimestamp | date: 'hh:mm:ss a'\"\r\n              [readonly]=\"true\"\r\n            ></ion-input>\r\n          </ion-col>\r\n          <ion-col size=\"12\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\">\r\n            <ion-label class=\"form-label\">المستخدم</ion-label>\r\n            <ion-input\r\n              class=\"form-control\"\r\n              [ngModel]=\"clientWithLastInquiryInfo.username\"\r\n              [readonly]=\"true\"\r\n            ></ion-input>\r\n          </ion-col>\r\n          <ion-col size=\"12\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\">\r\n            <ion-label class=\"form-label\">حالة الاستعلام</ion-label>\r\n            <ion-input\r\n              class=\"form-control\"\r\n              [ngModel]=\"clientWithLastInquiryInfo.validInquiry ? 'ساري' : 'منتهي'\"\r\n              [readonly]=\"true\"\r\n            ></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"justify-content-center my-4\">\r\n          <ion-col size=\"12\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\">\r\n            <ion-button\r\n              expand=\"block\"\r\n              (click)=\"showInquiryPdf(clientWithLastInquiryInfo.inquiryId)\"\r\n              [disabled]=\"!clientWithLastInquiryInfo.pdfAvailable\"\r\n            >\r\n              <ion-icon slot=\"end\" name=\"document-text\"></ion-icon>\r\n              تقرير الاستعلام بصيغة PDF</ion-button\r\n            >\r\n          </ion-col>\r\n        </ion-row>\r\n      </ng-container>\r\n      <ion-row\r\n        class=\"mt-4 justify-content-center\"\r\n        *ngIf=\"!isInquiryAvailable()\"\r\n      >\r\n        <ion-col size=\"12\" sizeLg=\"3\" sizeMd=\"4\" sizeSm=\"12\">\r\n          <div class=\"form-group w-100\">\r\n            <ion-label class=\"form-label\">سبب الاستعلام</ion-label>\r\n            <ion-select\r\n              interface=\"popover\"\r\n              [ngModel]=\"inquiryReason$ | async\"\r\n              (ngModelChange)=\"onChangeInquiryReason($event)\"\r\n              placeholder=\"سبب الاستعلام\"\r\n              class=\"subselect\"\r\n            >\r\n              <ion-select-option\r\n                *ngFor=\"let reason of inquiryReasonArray\"\r\n                [value]=\"reason.ref_code\"\r\n                >{{reason.ref_desc}}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"mt-4 justify-content-center\">\r\n        <ion-col size=\"12\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\">\r\n          <ion-button\r\n            expand=\"block\"\r\n            (click)=\"inquire(clientWithLastInquiryInfo.clientKey)\"\r\n            [disabled]=\"isInquiryAvailable()\"\r\n          >\r\n            <ion-icon slot=\"end\" name=\"search-sharp\"></ion-icon>\r\n            استعلام</ion-button\r\n          >\r\n        </ion-col>\r\n        <ion-col size=\"12\" sizeLg=\"3\" sizeMd=\"6\" sizeSm=\"12\">\r\n          <ion-button expand=\"block\" color=\"danger\" (click)=\"backToSearch()\">\r\n            رجوع</ion-button\r\n          >\r\n        </ion-col>\r\n      </ion-row>\r\n    </ng-container>\r\n  </ion-card-content>\r\n</ion-card>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_iscore-response_iscore-response_module_ts.js.map