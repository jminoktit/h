"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_aml-revision_aml-revision_module_ts"],{

/***/ 57692:
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/aml-revision/aml-revision-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmlRevisionPageRoutingModule": function() { return /* binding */ AmlRevisionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _aml_revision_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aml-revision.page */ 88257);






var routes = [{
  path: '',
  component: _aml_revision_page__WEBPACK_IMPORTED_MODULE_2__.AmlRevisionPage
}];

var AmlRevisionPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AmlRevisionPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AmlRevisionPageRoutingModule);
});

AmlRevisionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], AmlRevisionPageRoutingModule);


/***/ }),

/***/ 20077:
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/aml-revision/aml-revision.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmlRevisionPageModule": function() { return /* binding */ AmlRevisionPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _aml_revision_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aml-revision-routing.module */ 57692);
/* harmony import */ var _aml_revision_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aml-revision.page */ 88257);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ 63430);











var AmlRevisionPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AmlRevisionPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AmlRevisionPageModule);
});

AmlRevisionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _aml_revision_routing_module__WEBPACK_IMPORTED_MODULE_2__.AmlRevisionPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_aml_revision_page__WEBPACK_IMPORTED_MODULE_3__.AmlRevisionPage]
})], AmlRevisionPageModule);


/***/ }),

/***/ 88257:
/*!***************************************************************!*\
  !*** ./src/app/views/pages/aml-revision/aml-revision.page.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AmlRevisionPage": function() { return /* binding */ AmlRevisionPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ 58277);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _aml_revision_page_html_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aml-revision.page.html?ngResource */ 10375);
/* harmony import */ var _aml_revision_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aml-revision.page.scss?ngResource */ 95952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_services_officer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/officer.service */ 84598);
/* harmony import */ var src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/loan-applications.service */ 35866);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);
/* harmony import */ var src_app_core_services_exporting_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/exporting.service */ 55081);
/* harmony import */ var src_app_core_services_document_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/document.service */ 34726);
/* harmony import */ var src_app_core_services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/pdf-viewer.service */ 37801);
/* harmony import */ var src_app_core_services_iscore_http_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/iscore-http.service */ 80889);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);























var AmlRevisionPage = /*#__PURE__*/function () {
  function AmlRevisionPage(formBuilder, cdref, referencesService, officerService, loanApplicationService, alertService, sortingService, pagingService, exportingService, documentService, pdfViewerService, iscoreHttpService, inputMaskingService) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AmlRevisionPage);

    this.formBuilder = formBuilder;
    this.cdref = cdref;
    this.referencesService = referencesService;
    this.officerService = officerService;
    this.loanApplicationService = loanApplicationService;
    this.alertService = alertService;
    this.sortingService = sortingService;
    this.pagingService = pagingService;
    this.exportingService = exportingService;
    this.documentService = documentService;
    this.pdfViewerService = pdfViewerService;
    this.iscoreHttpService = iscoreHttpService;
    this.inputMaskingService = inputMaskingService; //#region Variables

    this.showLoader = false;
    this.filterFormStatus = {
      valid: false,
      visible: true
    };
    this.applicationStatusArray = [{
      name: "لم يتم الانشاء",
      value: 1
    }, {
      name: "تم الانشاء و لم يتم الاصدار",
      value: 2
    }, {
      name: "تم الاصدار",
      value: 3
    }, {
      name: "مسدد بالكامل",
      value: 4
    }, {
      name: "مشكوك في السداد",
      value: 5
    }, {
      name: "مشطوب",
      value: 6
    }];
    this.officerModelResponse = [];
    this.gridFormStatus = {
      valid: false,
      visible: false
    };
    this.pagingObject = {
      page: 1 // the page we are viewing

    };
    this.sortingObject = {
      sortingIconClass: null,
      sortingIconParam: null
    };
    this.timeLineObject = {
      visible: false,
      lastStep: []
    };
    this.clientDocumentsStatus = {
      valid: false,
      visible: false
    };
    this.clientDocuments = [];
    this.iscoreInquiries = [];

    this.changePaginationPage = function (newPage) {
      _this.pagingObject.page = newPage;
    }; //#endregion
    //#region FormsGroup


    this.filterForm = this.formBuilder.group({
      applicationStatus: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.Validators.required],
      branch: ["00"],
      officer: ["00"],
      startDate: [null],
      endDate: [null],
      loanGenerateStatus: [null],
      loanStatus: [null],
      requestAmountFrom: [null],
      requestAmountTo: [null],
      loanCondition: [null]
    });
  } //#endregion
  //#region Angular Hooks


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(AmlRevisionPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.referencesService.getAllBranches();

              case 2:
                this.branchModelResponse = _context.sent;
                this.officerService.getAllOfficers().subscribe(function (officers) {
                  _this2.officerModelResponse = officers;
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.filterForm.patchValue({
                  startDate: null,
                  endDate: null
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "ngAfterViewChecked",
    value: function ngAfterViewChecked() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.cdref.detectChanges();

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    } //#endregion

  }, {
    key: "fetchAndCustomizeAmlApplicationFromDatabase",
    value: function fetchAndCustomizeAmlApplicationFromDatabase() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4() {
        var amlApplications, customizedApplications;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                this.showLoader = true;
                _context4.next = 4;
                return this.loanApplicationService.getAmlApplications(this.extractAmlApplicationDataFromFormGroup()).toPromise();

              case 4:
                amlApplications = _context4.sent;
                customizedApplications = amlApplications.map(function (application) {
                  return Object.assign(Object.assign({}, application), {
                    amlRevisionStatus: 0,
                    amlRevisionNotes: null
                  });
                });
                this.showLoader = false;
                return _context4.abrupt("return", customizedApplications);

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4["catch"](0);
                console.error("Error fetching AML applications:", _context4.t0);
                this.showLoader = false;
                this.alertService.showAlertError(_context4.t0 === null || _context4.t0 === void 0 ? void 0 : _context4.t0.error, false);
                throw _context4.t0;

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 10]]);
      }));
    }
  }, {
    key: "sortingTable",
    value: function sortingTable(data, param) {
      this.sortingService.sortByParameter(data, param);
      this.sortingObject.sortingIconClass = this.sortingService.sortOrder === "asc" ? "arrow-down-outline" : "arrow-up-outline";
      this.sortingObject.sortingIconParam = param;
    }
  }, {
    key: "extractClientsBeingRevised",
    value: function extractClientsBeingRevised() {
      var _a, _b;

      return ((_b = (_a = this.amlApplicationsGridData) === null || _a === void 0 ? void 0 : _a.filter(function (application) {
        return application.amlRevisionStatus === 1;
      })) === null || _b === void 0 ? void 0 : _b.map(function (application) {
        return {
          applicationKey: application.applicationKey,
          appStatus: application.amlRevisionStatus,
          appNotes: application.amlRevisionNotes
        };
      })) || [];
    } //#region Buttons

  }, {
    key: "filterSearchBtn",
    value: function filterSearchBtn() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.filterFormStatus.valid = true;

                if (this.filterForm.valid) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt("return");

              case 3:
                _context5.next = 5;
                return this.fetchAndCustomizeAmlApplicationFromDatabase();

              case 5:
                this.amlApplicationsGridData = _context5.sent;
                this.gridFormStatus.visible = true;

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "openTimeLineBtn",
    value: function openTimeLineBtn(applicationKey) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee6() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                this.showLoader = true;
                _context6.next = 4;
                return this.loanApplicationService.getLastSteps(applicationKey === null || applicationKey === void 0 ? void 0 : applicationKey.toString());

              case 4:
                this.timeLineObject.lastStep = _context6.sent;
                this.showLoader = false;
                _context6.next = 12;
                break;

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](0);
                this.showLoader = false;
                return _context6.abrupt("return", this.alertService.showAlertError(_context6.t0 === null || _context6.t0 === void 0 ? void 0 : _context6.t0.error, false));

              case 12:
                if (!(this.timeLineObject.lastStep.length === 0)) {
                  _context6.next = 14;
                  break;
                }

                return _context6.abrupt("return", this.alertService.showAlertError("لا يوجد بيانات", false));

              case 14:
                this.gridFormStatus.visible = false;
                this.filterFormStatus.visible = false;
                this.timeLineObject.visible = !this.timeLineObject.visible;

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 8]]);
      }));
    }
  }, {
    key: "backButton",
    value: function backButton() {
      var filterVisible = this.filterFormStatus.visible;
      var gridVisible = this.gridFormStatus.visible;
      var timeLineVisible = this.timeLineObject.visible;
      var documentVisible = this.clientDocumentsStatus.visible;

      if (timeLineVisible && !filterVisible && !gridVisible) {
        this.timeLineObject.visible = false;
        this.filterFormStatus.visible = true;
        this.gridFormStatus.visible = true;
      }

      if (documentVisible && !timeLineVisible && !filterVisible && !gridVisible) {
        this.clientDocumentsStatus.visible = false;
        this.filterFormStatus.visible = true;
        this.gridFormStatus.visible = true;
      }
    }
  }, {
    key: "savingAmlResultBtn",
    value: function savingAmlResultBtn() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee7() {
        var amlApplicationToSave, json;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                amlApplicationToSave = this.extractClientsBeingRevised();

                if (!(amlApplicationToSave.length === 0)) {
                  _context7.next = 4;
                  break;
                }

                return _context7.abrupt("return", this.alertService.showAlertError("برجاء اختيار العميل", false));

              case 4:
                _context7.next = 6;
                return this.alertService.SaveAlert();

              case 6:
                if (_context7.sent) {
                  _context7.next = 8;
                  break;
                }

                return _context7.abrupt("return");

              case 8:
                json = JSON.stringify(amlApplicationToSave);
                this.showLoader = true;
                _context7.next = 12;
                return this.loanApplicationService.amlRevisionApprove(json).toPromise();

              case 12:
                this.showLoader = false;
                this.alertService.showAlertConfirm("لقد تم المراجعة", true);
                _context7.next = 21;
                break;

              case 16:
                _context7.prev = 16;
                _context7.t0 = _context7["catch"](0);
                console.error("Error in savingAmlResultBtn:", _context7.t0);
                this.showLoader = false;
                return _context7.abrupt("return", this.alertService.showAlertError(_context7.t0 === null || _context7.t0 === void 0 ? void 0 : _context7.t0.error, false));

              case 21:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 16]]);
      }));
    }
  }, {
    key: "openDocumentsBtn",
    value: function openDocumentsBtn(clientKey) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee8() {
        var documents;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                this.showLoader = true;
                _context8.next = 4;
                return this.documentService.getDocumentsForClientPerClientKey(clientKey).toPromise();

              case 4:
                documents = _context8.sent;
                this.showLoader = false;

                if (documents) {
                  _context8.next = 8;
                  break;
                }

                return _context8.abrupt("return", this.alertService.showAlertError("لا يوجد مستندات للعرض", false));

              case 8:
                this.clientDocuments = documents.map(function (doc) {
                  return {
                    documentSlotInput: {
                      canEdit: false,
                      loanTypeCode: String(doc.documentTypeCode),
                      uploadedDocuments: doc.documentImage.map(function (x) {
                        return {
                          doc: x
                        };
                      })
                    },
                    documentName: doc.documentTypeDescription
                  };
                });
                console.log(this.clientDocuments);
                console.log(documents);
                this.clientDocumentsStatus.visible = true;
                this.filterFormStatus.visible = false;
                this.gridFormStatus.visible = false;
                _context8.next = 20;
                break;

              case 16:
                _context8.prev = 16;
                _context8.t0 = _context8["catch"](0);
                this.showLoader = false;
                this.alertService.showAlertError((_context8.t0 === null || _context8.t0 === void 0 ? void 0 : _context8.t0.error) || "حدث خطأ", false);

              case 20:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 16]]);
      }));
    } //#endregion
    //#region Changing Events

  }, {
    key: "amlStatusCheckBoxChange",
    value: function amlStatusCheckBoxChange(clientData) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee9() {
        var index;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                index = this.amlApplicationsGridData.findIndex(function (object) {
                  return object.applicationKey === clientData.applicationKey;
                });

                if (index !== -1) {
                  this.amlApplicationsGridData[index].amlRevisionStatus = this.amlApplicationsGridData[index].amlRevisionStatus === 0 ? 1 : 0;
                }

              case 2:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    }
  }, {
    key: "amlNoteChanging",
    value: function amlNoteChanging(clientData, event) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee10() {
        var index;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                index = this.amlApplicationsGridData.findIndex(function (object) {
                  return object.applicationKey === clientData.applicationKey;
                });

                if (index !== -1) {
                  this.amlApplicationsGridData[index].amlRevisionNotes = this.amlApplicationsGridData[index].amlRevisionNotes = event.detail["value"] == "" ? null : this.amlApplicationsGridData[index].amlRevisionNotes = event.detail["value"];
                }

              case 2:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
    }
  }, {
    key: "changingApplicationStatus",
    value: function changingApplicationStatus() {
      var applicationStatusValue = this.filterForm.controls["applicationStatus"].value;

      switch (applicationStatusValue) {
        case 1:
          this.filterForm.patchValue({
            loanGenerateStatus: 0,
            loanStatus: 0,
            loanCondition: null
          });
          break;

        case 2:
          this.filterForm.patchValue({
            loanGenerateStatus: 1,
            loanStatus: 0,
            loanCondition: null
          });
          break;

        case 3:
          this.filterForm.patchValue({
            loanGenerateStatus: 1,
            loanStatus: 1,
            loanCondition: null
          });
          break;

        case 4:
          this.filterForm.patchValue({
            loanGenerateStatus: 1,
            loanStatus: 5,
            loanCondition: null
          });
          break;

        case 5:
          this.filterForm.patchValue({
            loanGenerateStatus: 1,
            loanStatus: 1,
            loanCondition: 1
          });
          break;

        case 6:
          this.filterForm.patchValue({
            loanGenerateStatus: 1,
            loanStatus: 1,
            loanCondition: 2
          });
          break;
      }
    }
  }, {
    key: "extractAmlApplicationDataFromFormGroup",
    value: function extractAmlApplicationDataFromFormGroup() {
      return {
        branch_code: this.filterForm.controls["branch"].value === "00" ? null : this.filterForm.controls["branch"].value,
        start_date: this.filterForm.controls["startDate"].value,
        end_date: this.filterForm.controls["endDate"].value,
        loan_status: this.filterForm.controls["loanStatus"].value,
        loan_gen_status: this.filterForm.controls["loanGenerateStatus"].value,
        officer_key: this.filterForm.controls["officer"].value === "00" ? null : this.filterForm.controls["officer"].value,
        request_amount_from: this.filterForm.controls["requestAmountFrom"].value,
        request_amount_to: this.filterForm.controls["requestAmountTo"].value,
        loan_cond: this.filterForm.controls["loanCondition"].value
      };
    } //#endregion

  }, {
    key: "showInquiryPdf",
    value: function showInquiryPdf(inquiryId) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee11() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (this.pdfViewerService.canViewPdf()) {
                  _context11.next = 4;
                  break;
                }

                _context11.next = 3;
                return this.alertService.showAlertError("لا يمكن عرض أو تنزيل المستند على المتصفح الحالي", false);

              case 3:
                return _context11.abrupt("return");

              case 4:
                _context11.next = 6;
                return this.getInquiryPdf(inquiryId);

              case 6:
                _context11.next = 8;
                return this.pdfViewerService.viewPdf(this.iscoreInquiries.find(function (inquiry) {
                  return inquiry.inquiryId == inquiryId;
                }).inquiryPdfBase64, "inquiry_".concat(inquiryId, ".pdf"), "تقرير الاستعلام الائتماني");

              case 8:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
    }
  }, {
    key: "getInquiryPdf",
    value: function getInquiryPdf(inquiryId) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee12() {
        var pdfResponse;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (this.iscoreInquiries.some(function (inquiry) {
                  return inquiry.inquiryId == inquiryId;
                })) {
                  _context12.next = 16;
                  break;
                }

                this.showLoader = true;
                _context12.prev = 2;
                _context12.next = 5;
                return this.iscoreHttpService.getInquiryPdf(inquiryId).toPromise();

              case 5:
                pdfResponse = _context12.sent;
                this.iscoreInquiries = [].concat((0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.iscoreInquiries.slice(-2)), [{
                  inquiryId: inquiryId,
                  inquiryPdfBase64: pdfResponse.base64String
                }]);
                this.showLoader = false;
                _context12.next = 16;
                break;

              case 10:
                _context12.prev = 10;
                _context12.t0 = _context12["catch"](2);
                this.showLoader = false;

                if (!(_context12.t0 instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpErrorResponse)) {
                  _context12.next = 16;
                  break;
                }

                this.alertService.showAlertError(JSON.stringify(_context12.t0.error), false);
                return _context12.abrupt("return");

              case 16:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[2, 10]]);
      }));
    }
  }]);

  return AmlRevisionPage;
}();

AmlRevisionPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_20__.ChangeDetectorRef
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_6__.ReferencesService
  }, {
    type: src_app_core_services_officer_service__WEBPACK_IMPORTED_MODULE_7__.OfficerService
  }, {
    type: src_app_core_services_loan_applications_service__WEBPACK_IMPORTED_MODULE_8__.LoanApplicationsService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_9__.AlertService
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_11__.sortingService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_10__.pagingService
  }, {
    type: src_app_core_services_exporting_service__WEBPACK_IMPORTED_MODULE_12__.ExportingService
  }, {
    type: src_app_core_services_document_service__WEBPACK_IMPORTED_MODULE_13__.DocumentService
  }, {
    type: src_app_core_services_pdf_viewer_service__WEBPACK_IMPORTED_MODULE_14__.PdfViewerService
  }, {
    type: src_app_core_services_iscore_http_service__WEBPACK_IMPORTED_MODULE_15__.IscoreHttpService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_16__.InputMaskingService
  }];
};

AmlRevisionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
  selector: "app-aml-revision",
  template: _aml_revision_page_html_ngResource__WEBPACK_IMPORTED_MODULE_4__,
  styles: [_aml_revision_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_5__]
})], AmlRevisionPage);


/***/ }),

/***/ 95952:
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/aml-revision/aml-revision.page.scss?ngResource ***!
  \****************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \" *\";\n  color: #ff3366 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFtbC1yZXZpc2lvbi5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGFtbC1yZXZpc2lvblxcYW1sLXJldmlzaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQ0FKIiwiZmlsZSI6ImFtbC1yZXZpc2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1sYWJlbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgKlwiO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiICpcIjtcbiAgY29sb3I6ICNmZjMzNjYgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 10375:
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/aml-revision/aml-revision.page.html?ngResource ***!
  \****************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<ion-title class=\"ion-padding-vertical\"> طلبات القروض الموافق عليها </ion-title>\n\n<ion-card *ngIf=\"filterFormStatus.visible\">\n  <ion-card-content>\n    <ion-grid>\n      <form [formGroup]=\"filterForm\">\n        <ion-row>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label form-label-required\"\n              >حالة طلب القرض</ion-label\n            >\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"حالة طلب القرض \"\n              formControlName=\"applicationStatus\"\n              class=\"subselect\"\n              (ionChange)=\"changingApplicationStatus()\"\n            >\n              <ion-select-option\n                *ngFor=\"let status of applicationStatusArray\"\n                [value]=\"status.value\"\n              >\n                {{status.name}}\n              </ion-select-option>\n            </ion-select>\n            <ion-note\n              color=\"danger\"\n              class=\"input-validator\"\n              *ngIf=\"filterFormStatus.valid && (filterForm.controls['applicationStatus'].hasError('required'))\"\n              role=\"alert\"\n            >\n              يجب ادخال حالة القرض\n            </ion-note>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label\">الفرع</ion-label>\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"الفرع\"\n              formControlName=\"branch\"\n              class=\"subselect\"\n            >\n              <ion-select-option value=\"00\">الكل</ion-select-option>\n              <ion-select-option\n                *ngFor=\"let branch of branchModelResponse\"\n                [value]=\"branch.branch_code\"\n              >\n                {{branch.branch_name}}\n              </ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label\">المندوب</ion-label>\n            <ion-select\n              interface=\"popover\"\n              placeholder=\"المندوب\"\n              formControlName=\"officer\"\n              class=\"subselect\"\n            >\n              <ion-select-option value=\"00\">الكل</ion-select-option>\n              <ion-select-option\n                *ngFor=\"let off of officerModelResponse\"\n                [value]=\"off.officer_key\"\n              >\n                {{off.officer_name}}\n              </ion-select-option>\n            </ion-select>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label\">من تاريخ</ion-label>\n            <ngx-datepicker\n              [parentForm]=\"filterForm\"\n              parentFormControllerName=\"startDate\"\n              [options]=\"{\n                nullInitialValue: true\n              }\"\n            ></ngx-datepicker>\n          </ion-col>\n          <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\n            <ion-label class=\"form-label\">الي تاريخ</ion-label>\n            <ngx-datepicker\n              [parentForm]=\"filterForm\"\n              parentFormControllerName=\"endDate\"\n              [options]=\"{\n                nullInitialValue: true\n              }\"\n            ></ngx-datepicker>\n          </ion-col>\n          <ion-col size=\"6\" sizeLg=\"2\" sizeMd=\"3\" sizeSm=\"6\">\n            <ion-label class=\"form-label\">المبلغ من</ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"requestAmountFrom\"\n              (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 0)\"\n            ></ion-input>\n          </ion-col>\n          <ion-col size=\"6\" sizeLg=\"2\" sizeMd=\"3\" sizeSm=\"6\">\n            <ion-label class=\"form-label\">المبلغ الي</ion-label>\n            <ion-input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"requestAmountTo\"\n              (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 0)\"\n            ></ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"justify-content-center\">\n          <ion-button (click)=\"filterSearchBtn()\">بحث</ion-button>\n        </ion-row>\n      </form>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"gridFormStatus.visible && amlApplicationsGridData as gridData\">\n  <ion-card-content>\n    <ion-grid>\n      <ion-row class=\"header-row\">\n        <ion-col>\n          <ion-label (click)=\"sortingTable(gridData , 'clientName')\">\n            اسم العميل\n            <ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'clientName'\"\n            ></ion-icon>\n          </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label (click)=\"sortingTable(gridData , 'approvedAmount')\">\n            المبلغ\n            <ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'approvedAmount'\"\n            ></ion-icon>\n          </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label (click)=\"sortingTable(gridData , 'iScore')\">\n            الاستعلام الائتماني\n            <ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'iScore'\"\n            ></ion-icon>\n          </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label (click)=\"sortingTable(gridData , 'branchName')\">\n            الفرع<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'branchName'\"\n            ></ion-icon>\n          </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label (click)=\"sortingTable(gridData , 'riskDesc')\">\n            مخاطر المنطقة الجغرافية<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'riskDesc'\"\n            ></ion-icon>\n          </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label (click)=\"sortingTable(gridData , 'officerName')\">\n            اسم المندوب<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'officerName'\"\n            ></ion-icon>\n          </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label (click)=\"sortingTable(gridData , 'entryDate')\">\n            التاريخ<ion-icon\n              class=\"ion-icon-class\"\n              [name]=\"sortingObject.sortingIconClass\"\n              *ngIf=\"sortingObject.sortingIconParam == 'entryDate'\"\n            ></ion-icon>\n          </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label> الخطوات </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label> المستندات </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label> الملاحظات </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label> تم المراجعة </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        class=\"details-row\"\n        *ngFor=\"let data of this.pagingService.Paging(\n        this.gridData,\n        pagingObject.page\n      )\"\n      >\n        <ion-col>\n          <ion-label> {{data.clientName}} </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label>\n            {{data.approvedAmount | number:'1.0-0':'en-US'}}\n          </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label *ngIf=\"data.iscoreInquiryId != null\">\n            <ng-container *ngIf=\"data.iscorePdfAvailable\">\n              <ion-button (click)=\"showInquiryPdf(data.iscoreInquiryId)\">\n                <ion-icon slot=\"end\" name=\"document-text\"></ion-icon>\n                {{data.iScore ?? 'غير متاح'}}\n              </ion-button>\n            </ng-container>\n            <ng-container *ngIf=\"!data.iscorePdfAvailable\">\n              {{data.iScore ?? 'غير متاح'}}\n            </ng-container>\n          </ion-label>\n          <ion-label *ngIf=\"!data.iscoreInquiryId\"> لا يوجد </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label> {{data.branchName}} </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label> {{data.riskDesc}} </ion-label>\n          <ion-label *ngIf=\"data.riskDesc == '' || data.riskDesc == null\">\n            لا يوجد\n          </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label> {{data.officerName}} </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label> {{data.entryDate | date:'yyyy-MM-dd'}} </ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-button\n            [disabled]=\"data.useWorkFlow === 1 ? false : true\"\n            (click)=\"openTimeLineBtn(data.applicationKey)\"\n            >الخطوات</ion-button\n          >\n        </ion-col>\n        <ion-col>\n          <ion-button\n            [disabled]=\"data.havingDocuments === 1 ? false : true\"\n            (click)=\"openDocumentsBtn(data.clientKey)\"\n            >عرض</ion-button\n          >\n        </ion-col>\n        <ion-col>\n          <ion-textarea\n            class=\"form-control\"\n            [autoGrow]=\"true\"\n            style=\"height: max-content\"\n            placeholder=\" ملاحظات\"\n            (ionChange)=\"amlNoteChanging(data,$event)\"\n          >\n          </ion-textarea>\n        </ion-col>\n        <ion-col>\n          <ion-checkbox\n            type=\"checkbox\"\n            (ionChange)=\"amlStatusCheckBoxChange(data)\"\n            class=\"justify\"\n            [checked]=\"data.amlRevisionStatus === 1 ? true:false\"\n          ></ion-checkbox>\n        </ion-col>\n      </ion-row>\n      <app-pagination\n        [page]=\"pagingObject.page\"\n        [collectionSize]=\"gridData?.length\"\n        (pageChange)=\"changePaginationPage($event);\"\n      ></app-pagination>\n      <ion-row class=\"justify-content-center ion-padding\">\n        <ion-button (click)=\"savingAmlResultBtn()\">حفظ</ion-button>\n      </ion-row>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"timeLineObject.visible\">\n  <ion-card-content>\n    <app-timeline [lastSteps]=\"this.timeLineObject.lastStep\"></app-timeline>\n    <ion-row class=\"justify-content-center ion-padding\">\n      <ion-button color=\"danger\" (click)=\"backButton()\"> رجوع </ion-button>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n\n<ion-card *ngIf=\"clientDocumentsStatus.visible\">\n  <ion-card-content>\n    <ion-note *ngFor=\"let doc of clientDocuments\">\n      <ion-label class=\"form-label ion-padding\">\n        نوع المستند : {{doc.documentName}}\n      </ion-label>\n      <app-document-slot\n        [inputData]=\"doc.documentSlotInput\"\n      ></app-document-slot>\n    </ion-note>\n    <ion-row class=\"justify-content-center ion-padding\">\n      <ion-button color=\"danger\" (click)=\"backButton()\"> رجوع </ion-button>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_aml-revision_aml-revision_module_ts.js.map