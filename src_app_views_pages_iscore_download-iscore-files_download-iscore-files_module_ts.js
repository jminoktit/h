"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_iscore_download-iscore-files_download-iscore-files_module_ts"],{

/***/ 26546:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/iscore/download-iscore-files/download-iscore-files-routing.module.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadIscoreFilesPageRoutingModule": function() { return /* binding */ DownloadIscoreFilesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _download_iscore_files_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download-iscore-files.page */ 11139);






var routes = [{
  path: '',
  component: _download_iscore_files_page__WEBPACK_IMPORTED_MODULE_2__.DownloadIscoreFilesPage
}];

var DownloadIscoreFilesPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DownloadIscoreFilesPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DownloadIscoreFilesPageRoutingModule);
});

DownloadIscoreFilesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], DownloadIscoreFilesPageRoutingModule);


/***/ }),

/***/ 44074:
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/iscore/download-iscore-files/download-iscore-files.module.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadIscoreFilesPageModule": function() { return /* binding */ DownloadIscoreFilesPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _download_iscore_files_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download-iscore-files-routing.module */ 26546);
/* harmony import */ var _download_iscore_files_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download-iscore-files.page */ 11139);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var DownloadIscoreFilesPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DownloadIscoreFilesPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DownloadIscoreFilesPageModule);
});

DownloadIscoreFilesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _download_iscore_files_routing_module__WEBPACK_IMPORTED_MODULE_2__.DownloadIscoreFilesPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_download_iscore_files_page__WEBPACK_IMPORTED_MODULE_3__.DownloadIscoreFilesPage]
})], DownloadIscoreFilesPageModule);


/***/ }),

/***/ 11139:
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/iscore/download-iscore-files/download-iscore-files.page.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadIscoreFilesPage": function() { return /* binding */ DownloadIscoreFilesPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _download_iscore_files_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./download-iscore-files.page.html?ngResource */ 77363);
/* harmony import */ var _download_iscore_files_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./download-iscore-files.page.scss?ngResource */ 12372);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_branch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/branch.service */ 34867);
/* harmony import */ var src_app_core_services_iscore_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/iscore-http.service */ 80889);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_11__);

















var DownloadIscoreFilesPage = /*#__PURE__*/function () {
  //#endregion
  function DownloadIscoreFilesPage(iscoreService, pagingService, branchService, referenceService, loanService, formBuilder, alertService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DownloadIscoreFilesPage);

    this.iscoreService = iscoreService;
    this.pagingService = pagingService;
    this.branchService = branchService;
    this.referenceService = referenceService;
    this.loanService = loanService;
    this.formBuilder = formBuilder;
    this.alertService = alertService; //#region Flags

    this.showLoader = false;
    this.showModal = false; //#endregion
    //#region Variables

    this.page = 1;
    this.selectedIscoreEcportedFile = null; //#endregion
    //#region Forms

    this.formGroup = this.formBuilder.group({
      branchId: [null],
      funderId: [null],
      clientTypeId: [null],
      loanTypeId: [null],
      loanTypeCategoryId: [null]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DownloadIscoreFilesPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.showLoader = true;
                _context.next = 3;
                return this.branchService.getBranches();

              case 3:
                this.branches = _context.sent;
                this.disabledBranches = this.branches.map(function (branch) {
                  return branch.branch_code;
                });
                _context.next = 7;
                return this.referenceService.getAllFunders();

              case 7:
                this.funders = _context.sent;
                this.disabledFunders = this.funders.map(function (funder) {
                  return funder.funder_code;
                });
                _context.next = 11;
                return this.referenceService.GetClientTypes();

              case 11:
                this.clientTypes = _context.sent;
                this.disabledClientTypes = this.clientTypes.map(function (clientType) {
                  return clientType.client_type_code;
                });
                _context.next = 15;
                return this.loanService.getLoanTypes();

              case 15:
                this.loanTypes = _context.sent;
                this.disabledLoanTypes = this.loanTypes.map(function (loanType) {
                  return loanType.loan_type_code;
                });
                _context.next = 19;
                return this.referenceService.getLoanTypeCategories();

              case 19:
                this.loanTypeCat = _context.sent;
                _context.next = 22;
                return this.referenceService.getIScoreReportType().toPromise();

              case 22:
                this.iscoreReportType = _context.sent;
                _context.next = 25;
                return this.referenceService.getMonths().toPromise();

              case 25:
                this.months = _context.sent;
                this.iscoreService.getIscoreExportedFileList().subscribe(function (data) {
                  _this.IscoreExportedFilesList = data;
                  _this.showLoader = false;
                }, function (error) {
                  console.log(error);
                  _this.showLoader = false;
                });

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "changePage",
    value: function changePage(newPage) {
      this.page = newPage;
    }
  }, {
    key: "openOptionsModal",
    value: function openOptionsModal(iscoreExportedFile) {
      this.selectedIscoreEcportedFile = iscoreExportedFile;
      this.formGroup.patchValue({
        funderId: iscoreExportedFile.ls_fund,
        branchId: iscoreExportedFile.ls_branch,
        clientTypeId: iscoreExportedFile.ls_client_type,
        loanTypeId: iscoreExportedFile.ls_loan_type
      });
      var date = new Date(iscoreExportedFile.period_start_date);
      this.selectedMonth = date.getMonth() + 1;
      this.showModal = true;
    }
  }, {
    key: "closeOptionsModal",
    value: function closeOptionsModal() {
      this.selectedIscoreEcportedFile = null;
      this.selectedMonth = null;
      this.showModal = false;
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(batchId, fileType, fileName) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var request, file;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.showLoader = true;
                request = {
                  batchId: Number(batchId),
                  fileType: fileType
                };
                _context2.next = 5;
                return this.iscoreService.getIscoreExportedFileData(request).toPromise();

              case 5:
                file = _context2.sent;
                _context2.next = 8;
                return this.downloadingFile(file, fileName);

              case 8:
                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                this.handleError(_context2.t0);

              case 13:
                _context2.prev = 13;
                this.showLoader = false;
                return _context2.finish(13);

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10, 13, 16]]);
      }));
    }
  }, {
    key: "downloadingFile",
    value: function downloadingFile(file, fileName) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var cleanedContent, blob;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                cleanedContent = file.replace(/^details_content\s*\r?\n/, "");
                blob = new Blob([cleanedContent], {
                  type: "application/octet-stream"
                });
                _context3.next = 4;
                return (0,file_saver__WEBPACK_IMPORTED_MODULE_11__.saveAs)(blob, fileName.endsWith(".dlt") ? fileName : "".concat(fileName, ".dlt"));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var errorMessage = error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpErrorResponse ? JSON.stringify(error.error) : error instanceof Error ? error.message : String(error);
      this.alertService.showAlertError(errorMessage, false);
      console.error("Error:", error);
    }
  }]);

  return DownloadIscoreFilesPage;
}();

DownloadIscoreFilesPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_iscore_http_service__WEBPACK_IMPORTED_MODULE_7__.IscoreHttpService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_9__.pagingService
  }, {
    type: src_app_core_services_branch_service__WEBPACK_IMPORTED_MODULE_6__.BranchService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_10__.ReferencesService
  }, {
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_8__.LoansService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }];
};

DownloadIscoreFilesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: "app-download-iscore-files",
  template: _download_iscore_files_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_download_iscore_files_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], DownloadIscoreFilesPage);


/***/ }),

/***/ 12372:
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/iscore/download-iscore-files/download-iscore-files.page.scss?ngResource ***!
  \*****************************************************************************************************/
/***/ (function(module) {

module.exports = "ion-modal::part(content) {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.transparent-button {\n  --background: transparent;\n  --box-shadow: none;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvd25sb2FkLWlzY29yZS1maWxlcy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEZWxldGUlMjBpdFxcTmV3TW9oYXNzaWxDbGllbnRfMzA5NV9zcmNcXE5ld01vaGFzc2lsQ2xpZW50XFxzcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxpc2NvcmVcXGRvd25sb2FkLWlzY29yZS1maWxlc1xcZG93bmxvYWQtaXNjb3JlLWZpbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0YiLCJmaWxlIjoiZG93bmxvYWQtaXNjb3JlLWZpbGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tb2RhbDo6cGFydChjb250ZW50KSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRyYW5zcGFyZW50LWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIiwiaW9uLW1vZGFsOjpwYXJ0KGNvbnRlbnQpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50cmFuc3BhcmVudC1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn0iXX0= */";

/***/ }),

/***/ 77363:
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/iscore/download-iscore-files/download-iscore-files.page.html?ngResource ***!
  \*****************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<h4>تحميل ملفات I-Score</h4>\n\n<ion-card>\n  <ion-card-content>\n    <div class=\"table-responsive\">\n      <ion-grid class=\"scroll-container\" style=\"min-width: 1100px\">\n        <ion-row class=\"header-row\">\n          <ion-col size=\"4\">\n            <ion-label>ملف crf</ion-label>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-label> ملف segment </ion-label>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-label> تاريخ الملف </ion-label>\n          </ion-col>\n          <ion-col size=\"1\">\n            <ion-label> اختيارات الملف </ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          class=\"details-row\"\n          *ngFor=\"let file of this.pagingService.Paging(\n            this.IscoreExportedFilesList,\n            this.page\n          ); let i = index\"\n        >\n          <ion-col size=\"4\">\n            <ion-row style=\"align-items: center\">\n              <ion-col size=\"1\">\n                <ion-buttons>\n                  <ion-button\n                    class=\"clearButton\"\n                    (click)=\"downloadFile(file.batch_id, 1, file.crf_file_name)\"\n                  >\n                    <ion-icon\n                      slot=\"icon-only\"\n                      color=\"primary\"\n                      name=\"arrow-down-circle\"\n                    ></ion-icon>\n                  </ion-button>\n                </ion-buttons>\n              </ion-col>\n              <ion-col size=\"11\">\n                <ion-label>{{file.crf_file_name}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-row style=\"align-items: center\">\n              <ion-col size=\"1\">\n                <ion-buttons>\n                  <ion-button\n                    class=\"clearButton\"\n                    (click)=\"downloadFile(file.batch_id, 2, file.segment_file_name)\"\n                  >\n                    <ion-icon\n                      slot=\"icon-only\"\n                      color=\"primary\"\n                      name=\"arrow-down-circle\"\n                    ></ion-icon>\n                  </ion-button>\n                </ion-buttons>\n              </ion-col>\n              <ion-col size=\"11\">\n                <ion-label> {{file.segment_file_name}} </ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col size=\"3\">\n            <ion-label>\n              {{file.update_stamp | date: \"yyyy-MM-dd hh:mm\"}}\n            </ion-label>\n          </ion-col>\n          <ion-col size=\"1\">\n            <ion-button (click)=\"openOptionsModal(file)\">\n              <ion-icon name=\"options-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <app-pagination\n        [page]=\"page\"\n        [collectionSize]=\"IscoreExportedFilesList?.length\"\n        (pageChange)=\"changePage($event);\"\n      ></app-pagination>\n    </div>\n  </ion-card-content>\n</ion-card>\n\n<ion-modal\n  [isOpen]=\"showModal\"\n  (willDismiss)=\"closeOptionsModal()\"\n  *ngIf=\"selectedIscoreEcportedFile\"\n>\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>\n          <ion-label>اختيارات الملف</ion-label>\n        </ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"closeOptionsModal()\">\n            <ion-icon name=\"close-outline\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label>القروض المصدرة من تاريخ : </ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-input\n              [readonly]=\"true\"\n              [value]=\"selectedIscoreEcportedFile.startdate | date: 'yyyy-MM-dd'\"\n            >\n            </ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label>نوع التقرير : </ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-select\n              [disabled]=\"true\"\n              [value]=\"selectedIscoreEcportedFile.rep_type\"\n            >\n              <ion-select-option\n                *ngFor=\"let i of iscoreReportType\"\n                value=\"{{i.ref_code}}\"\n                >{{i.ref_desc}}</ion-select-option\n              >\n            </ion-select>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"selectedIscoreEcportedFile.rep_type === '1'\">\n          <ion-col size=\"6\">\n            <ion-label>استخراج البيانات لشهر : </ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-select\n                  [disabled]=\"true\"\n                  [value]=\"selectedMonth.toString()\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let i of months\"\n                    value=\"{{i.ref_code}}\"\n                    >{{i.ref_desc}}</ion-select-option\n                  >\n                </ion-select>\n              </ion-col>\n              <ion-col size=\"6\"\n                ><ion-input\n                  [readonly]=\"true\"\n                  [value]=\"selectedIscoreEcportedFile.period_start_date | date: 'yyyy'\"\n                >\n                </ion-input\n              ></ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf=\"selectedIscoreEcportedFile.rep_type === '2'\">\n          <ion-col size=\"6\">\n            <ion-label>استخراج البيانات ليوم : </ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-input\n              [readonly]=\"true\"\n              [value]=\"selectedIscoreEcportedFile.period_start_date | date: 'yyyy-MM-dd'\"\n            >\n            </ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label>استخراج بيانات العملاء منذ بدء النشاط: </ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-checkbox\n              [disabled]=\"true\"\n              [checked]=\"selectedIscoreEcportedFile.all_clients\"\n            ></ion-checkbox>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label>مصادر التمويل : </ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <app-multiplePopover\n              [parentForm]=\"formGroup\"\n              parentFormControllerName=\"funderId\"\n              [arrayModal]=\"funders\"\n              arrayName=\"funder_name\"\n              arrayValue=\"funder_code\"\n              okText=\"موافق\"\n              cancelText=\"الغاء\"\n              placeholderText=\"مصادر التمويل\"\n              [valuesToDisable]=\"disabledFunders\"\n            ></app-multiplePopover>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label>نوع الاقتراض : </ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <app-multiplePopover\n              [parentForm]=\"formGroup\"\n              parentFormControllerName=\"clientTypeId\"\n              [arrayModal]=\"clientTypes\"\n              arrayName=\"client_type_name\"\n              arrayValue=\"client_type_code\"\n              okText=\"موافق\"\n              cancelText=\"الغاء\"\n              placeholderText=\"نوع الاقتراض\"\n              [valuesToDisable]=\"disabledClientTypes\"\n            ></app-multiplePopover>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label>الفروع : </ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <app-multiplePopover\n              [parentForm]=\"formGroup\"\n              parentFormControllerName=\"branchId\"\n              [arrayModal]=\"branches\"\n              arrayName=\"branch_name\"\n              arrayValue=\"branch_code\"\n              okText=\"موافق\"\n              cancelText=\"الغاء\"\n              placeholderText=\"الفروع\"\n              [valuesToDisable]=\"disabledBranches\"\n            ></app-multiplePopover>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label>نوع التمويل : </ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-select\n              [disabled]=\"true\"\n              [value]=\"selectedIscoreEcportedFile.iscore_ext_type\"\n            >\n              <ion-select-option\n                *ngFor=\"let i of loanTypeCat\"\n                value=\"{{i.ref_code}}\"\n                >{{i.ref_desc}}</ion-select-option\n              >\n            </ion-select>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-label>انواع القروض : </ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <app-multiplePopover\n              [parentForm]=\"formGroup\"\n              parentFormControllerName=\"loanTypeId\"\n              [arrayModal]=\"loanTypes\"\n              arrayName=\"loan_type_name\"\n              arrayValue=\"loan_type_code\"\n              okText=\"موافق\"\n              cancelText=\"الغاء\"\n              placeholderText=\"انواع القروض\"\n              [valuesToDisable]=\"disabledLoanTypes\"\n            ></app-multiplePopover>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_iscore_download-iscore-files_download-iscore-files_module_ts.js.map