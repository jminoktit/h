"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_loan-types_loan-types_module_ts"],{

/***/ 23993:
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-types/loan-types-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanTypesPageRoutingModule": function() { return /* binding */ LoanTypesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_types_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-types.page */ 44482);






var routes = [{
  path: '',
  component: _loan_types_page__WEBPACK_IMPORTED_MODULE_2__.LoanTypesPage
}];

var LoanTypesPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanTypesPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanTypesPageRoutingModule);
});

LoanTypesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoanTypesPageRoutingModule);


/***/ }),

/***/ 52770:
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-types/loan-types.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanTypesPageModule": function() { return /* binding */ LoanTypesPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_types_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loan-types-routing.module */ 23993);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-archwizard */ 38531);
/* harmony import */ var _loan_types_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-types.page */ 44482);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);













var LoanTypesPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoanTypesPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanTypesPageModule);
});

LoanTypesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, angular_archwizard__WEBPACK_IMPORTED_MODULE_10__.ArchwizardModule, _loan_types_routing_module__WEBPACK_IMPORTED_MODULE_2__.LoanTypesPageRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_loan_types_page__WEBPACK_IMPORTED_MODULE_3__.LoanTypesPage]
})], LoanTypesPageModule);


/***/ }),

/***/ 44482:
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-types/loan-types.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanTypesPage": function() { return /* binding */ LoanTypesPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ 58277);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _loan_types_page_html_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loan-types.page.html?ngResource */ 75217);
/* harmony import */ var _loan_types_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loan-types.page.scss?ngResource */ 81007);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_document_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/document.service */ 34726);
/* harmony import */ var src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/loans.service */ 55313);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);



















var LoanTypesPage = /*#__PURE__*/function () {
  //#endregion
  function LoanTypesPage(formBuilder, env, http, alert, documentService, loanService, authService, pagingService, inputMaskingService, references) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoanTypesPage);

    this.formBuilder = formBuilder;
    this.env = env;
    this.http = http;
    this.alert = alert;
    this.documentService = documentService;
    this.loanService = loanService;
    this.authService = authService;
    this.pagingService = pagingService;
    this.inputMaskingService = inputMaskingService;
    this.references = references;
    this.showLoader = false;
    this.initialLoad = true;
    this.createNewType = false;
    this.selectedStep = null;
    this.isEditModalOpen = false;
    this.overDraftAllowed = false;
    this.documentsInformation = {
      allAvailableDocuments: [],
      documentsByStep: []
    };
    this.documentRequiredModalObject = {
      isOpen: false
    };
    this.exception_jobs = [];
    this.page = 1; // the page we are viewing

    this.totalPages = 1; // calculate by the pageSize and resultsCount this.totalPages = (Math.trunc(x) < (this.resultsCount/this.pageSize)) ? Math.trunc(x)+1:Math.trunc(x) ;

    this.overdraftActiveDbFlag = false;
    this.overDraftInterestOnModal = [];
    this.overDraftPenaltyOnModal = [];
    this.overDraftBlockFromModal = [];
    this.overDraftChargesTypeModal = [];
    this.overDraftPenaltyPeriodTypeModal = [];
    this.isOverDraftPrioritiesOpen = false;
    this.paymentPriorities = [{
      id: 1,
      name: "الفائدة"
    }, {
      id: 2,
      name: "الغرامة"
    }, {
      id: 3,
      name: "الرسوم"
    }, {
      id: 4,
      name: "الاصل"
    }];
    this.filteredPaymentPriorities = [];
    this.downPaymentTypeIsPerc = false;
    this.haveDownPayment = false; //#region Document Required Modal

    this.toggleDocumentRequiredModal = function () {
      var _a;

      _this.documentRequiredModalObject.isOpen = !_this.documentRequiredModalObject.isOpen;
      if (_this.documentRequiredModalObject.isOpen) return;
      var currentStepId = _this.selectedStep.step_id;
      var currentJobId = _this.selectedStep.job_id;
      var currentLoanTypeCode = _this.selectedStep.loan_type_code;

      var selectedStep = _this.documentsInformation.documentsByStep.find(function (x) {
        return x.stepId === currentStepId && x.loanTypeCode === currentLoanTypeCode && x.jobId === currentJobId;
      });

      var selectedStepHasAnyDocuments = ((_a = selectedStep === null || selectedStep === void 0 ? void 0 : selectedStep.selectedDocuments) === null || _a === void 0 ? void 0 : _a.length) > 0;

      if (!selectedStepHasAnyDocuments) {
        selectedStep.isRequiredFlag = false; // this.stepDetails.patchValue({ documentRequiredCheckbox: false });
      }
    };

    this.isDocumentChecked = function (document) {
      var currentStepId = _this.selectedStep.step_id;
      var currentLoanTypeCode = _this.selectedStep.loan_type_code;
      var currentJobId = _this.selectedStep.job_id;
      var documentTypeCode = document.documentTypeCode;

      var selectedStep = _this.documentsInformation.documentsByStep.find(function (x) {
        return x.stepId === currentStepId && x.jobId === currentJobId && x.loanTypeCode === currentLoanTypeCode;
      });

      var isDocumentTypeCodeIsSelectedInSameStep = selectedStep.selectedDocuments.some(function (selectedDoc) {
        return selectedDoc.selectedDocumentTypeCode === documentTypeCode;
      });
      return isDocumentTypeCodeIsSelectedInSameStep;
    };

    this.isLoanTypeHasDocumentsSelected = function () {
      var currentStepId = _this.selectedStep.step_id;
      var currentLoanTypeCode = _this.selectedStep.loan_type_code;
      var currentJobId = _this.selectedStep.job_id;

      if (_this.documentsInformation.documentsByStep.length === 0) {
        return;
      }

      var selectedStep = _this.documentsInformation.documentsByStep.find(function (x) {
        return x.stepId === currentStepId && x.jobId === currentJobId && x.loanTypeCode === currentLoanTypeCode;
      });

      return !!(selectedStep === null || selectedStep === void 0 ? void 0 : selectedStep.isRequiredFlag);
    };

    this.makeSpecificDocument = function (document) {
      var currentStepId = _this.selectedStep.step_id;
      var currentJobId = _this.selectedStep.job_id;
      var currentLoanTypeCode = _this.selectedStep.loan_type_code;
      var documentTypeCode = document.documentTypeCode;

      var selectedStep = _this.documentsInformation.documentsByStep.find(function (x) {
        return x.stepId === currentStepId && x.jobId === currentJobId && x.loanTypeCode === currentLoanTypeCode;
      });

      var isArrayContainThisDocument = selectedStep.selectedDocuments.some(function (x) {
        return x.selectedDocumentTypeCode === documentTypeCode;
      });

      if (!isArrayContainThisDocument) {
        selectedStep.selectedDocuments.push({
          isThisDocumentMustEnter: false,
          selectedDocumentTypeCode: documentTypeCode
        });
        return;
      }

      selectedStep.selectedDocuments = selectedStep.selectedDocuments.filter(function (x) {
        return x.selectedDocumentTypeCode !== documentTypeCode;
      });
    };

    this.assignDocumentToMustUse = function (document) {
      var currentStepId = _this.selectedStep.step_id;
      var currentJobId = _this.selectedStep.job_id;
      var currentLoanTypeCode = _this.selectedStep.loan_type_code;
      var documentTypeCode = document.documentTypeCode;

      var selectedStep = _this.documentsInformation.documentsByStep.find(function (x) {
        return x.stepId === currentStepId && x.jobId === currentJobId && x.loanTypeCode === currentLoanTypeCode;
      });

      var selectedDocumentForSpecificDocumentType = selectedStep.selectedDocuments.filter(function (x) {
        return x.selectedDocumentTypeCode === documentTypeCode;
      })[0];
      selectedDocumentForSpecificDocumentType.isThisDocumentMustEnter = !selectedDocumentForSpecificDocumentType.isThisDocumentMustEnter;
    };

    this.isSpecificDocumentTypeCodeIsChecked = function (documentTypeCode) {
      var currentStepId = _this.selectedStep.step_id;
      var currentJobId = _this.selectedStep.job_id;
      var currentLoanTypeCode = _this.selectedStep.loan_type_code;

      var selectedStep = _this.documentsInformation.documentsByStep.find(function (x) {
        return x.stepId === currentStepId && x.jobId === currentJobId && x.loanTypeCode === currentLoanTypeCode;
      });

      if (!selectedStep) {
        return false;
      }

      var isDocumentChecked = selectedStep.selectedDocuments.some(function (x) {
        return x.selectedDocumentTypeCode === documentTypeCode;
      });
      return isDocumentChecked;
    };

    this.checkIfSelectedDocumentMustToUse = function (documentTypeCode) {
      var currentStepId = _this.selectedStep.step_id;
      var currentJobId = _this.selectedStep.job_id;
      var currentLoanTypeCode = _this.selectedStep.loan_type_code;

      var selectedStep = _this.documentsInformation.documentsByStep.find(function (x) {
        return x.stepId === currentStepId && x.jobId === currentJobId && x.loanTypeCode === currentLoanTypeCode;
      });

      if (!selectedStep) return false;
      var selectedDocumentForSpecificDocumentType = selectedStep.selectedDocuments.find(function (x) {
        return x.selectedDocumentTypeCode === documentTypeCode;
      });
      return (selectedDocumentForSpecificDocumentType === null || selectedDocumentForSpecificDocumentType === void 0 ? void 0 : selectedDocumentForSpecificDocumentType.isThisDocumentMustEnter) || false;
    };

    this.addingNewStepInsideDocuments = function (stepId, jobId, loanTypeCode) {
      var selectedStep = _this.documentsInformation.documentsByStep.find(function (x) {
        return x.stepId === stepId && x.loanTypeCode === loanTypeCode && x.jobId === jobId;
      });

      if (!selectedStep) {
        _this.documentsInformation.documentsByStep.push({
          stepId: stepId,
          isRequiredFlag: false,
          selectedDocuments: [],
          loanTypeCode: loanTypeCode,
          jobId: jobId
        });
      }
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(LoanTypesPage, [{
    key: "loanTypeDetailsControls",
    get: function get() {
      return this.loanTypeDetails.controls;
    }
  }, {
    key: "stepDetailsControls",
    get: function get() {
      return this.stepDetails.controls;
    }
  }, {
    key: "getShowDocumentsDetailsBtn",
    get: function get() {
      var currentStepId = this.selectedStep.step_id;
      var currentJobId = this.selectedStep.job_id;
      var currentLoanTypeCode = this.selectedStep.loan_type_code;
      var selectedStep = this.documentsInformation.documentsByStep.find(function (x) {
        return x.stepId === currentStepId && x.loanTypeCode === currentLoanTypeCode && x.jobId === currentJobId;
      });
      return !!(selectedStep === null || selectedStep === void 0 ? void 0 : selectedStep.isRequiredFlag);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.loanTypeDetails = this.formBuilder.group({
                  loanTypeName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  calcMethod: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanTypeCat: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanProduct: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  skipDay: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  dueDay: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  periodLength: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  periodType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  autoPayNoInst: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  autoPayDirection: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  instNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  lateDaysNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  gracePeriod: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  editGracePeriod: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  editLoanInst: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanIntRt: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanIntRtType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  editLoanIntRt: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanIntRt2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanIntRt2Type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanIntDeduct: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  payLoanIntAm: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  stampDutyRt: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  editStampDutyRt: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  LOComissionRt: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  editLOComissionRt: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  instCharges: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  editInstCharges: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  maxPostpone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  quickRepayRt: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  minLoan: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  maxLoan: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  minInst: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  maxInst: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  minAge: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  maxAge: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  applyAgeCondition: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  firstInstInt: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  appCharge: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  editAppCharge: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  addAppChargeToLoan: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  appChargeRt: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  appChargeRtType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  appChargePerMember: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  appChargeRtPerMember: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  appChargeRtTypePerMember: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  appChargeRtMin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  appChargeRtMax: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  applyAppChargeMargin: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  approxType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  approxValue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  fillAmountFirst: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  cosignerHasMultiClients: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  requiredCosigners: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  salesTax: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  discountRate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionRange: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionPeriod1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionPeriod2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionPeriod3: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionPeriod4: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionPeriod5: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionPeriod6: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionRange1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionRange2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionRange3: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionRange4: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionRange5: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionRange6: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionRange7: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  clientRiskStatus: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  clientRiskLowPerc: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  clientRiskMidPerc: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  clientRiskHighPerc: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  includeResc: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  includeRescDoubt: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionResc: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionRescDoubt: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  paymentsShift: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  holidaySkip: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  paymentsShiftSat: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  paymentsShiftSun: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  paymentsShiftMon: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  paymentsShiftTue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  paymentsShiftWed: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  paymentsShiftThu: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  paymentsShiftFri: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  allowPenaltyInVac: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  allowLoanDisbursmentInVac: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  allowLoanRescheduleInVac: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  allowLoanWrittenOffInVac: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  allowLoanDoubtfulInVac: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  allowLoanGenerationInVac: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  allowStampChargesInVac: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  allowOfficerCommissionInVac: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  allowApplicationChargesInVac: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  allowChangesFundingInVac: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  allowInstallmentRepaymentInVac: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  allowChequeMovementInVac: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  maxIScoreDays: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  requestIScore: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  requestIScoreAutomatic: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  reqGrpLeaderIScore: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  reqGrpMembersIScore: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  supervisorVisit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  deputyVisit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  managerVisit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  forceSupervisorVisit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  allowUsage: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  requireInsurance: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  clientUsable: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  useWorkflow: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  accumulatedInterest: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  daysBeforePenalty: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  penaltyType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  penaltyRate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  penaltyAmount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  cyclesBeforeBlock: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  compoundInterest: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  interestPeriodType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  penaltyCalcType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanPenRt: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  compoundPenalty: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  forceUserOtp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  forceClientOtp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  forceCosignersOtp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  iscoreAutoReject: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  iscoreMinScore: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern("^[1-9][0-9]{0,2}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max(999)]],
                  exceptionHandler: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftInterestOn: ["1", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftMonthlyInterest: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftPenaltyRate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftPenaltyOn: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftPenaltyStartDays: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftChargesType: ["1", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftChargesRate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftChargesAmount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftDaysToBlock: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftBlockFrom: ["1", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftPrinciplePaymentPriority: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftInterestPaymentPriority: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftPenaltyPaymentPriority: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftChargesPaymentPriority: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftPenaltyPeriodType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  // Down Payment
                  down_payment: [""],
                  down_payment_type: [""],
                  down_payment_perc: [""],
                  down_payment_edit: [0]
                });
                this.pageSize = this.pagingService.getPageSizeFromLocalStorage();
                this.showLoader = true;
                this.LoadData(false);
                this.documentService.getActiveDocumentsTypes().subscribe(function (documentData) {
                  _this2.documentsInformation.allAvailableDocuments = documentData.filter(function (x) {
                    return x.documentTypeRef === "2";
                  });
                });
                this.stepDetails = this.formBuilder.group({
                  stepName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  job: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  nextStep: [""],
                  stepDays: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  stepHours: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  stepMinutes: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  actions: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  locationRequired: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]]
                });
                this.authService.getUserInfo().then(function (userInfo) {
                  _this2.org_code_userinfo = userInfo.org_code;
                  _this2.exception_job_id = userInfo.workflow_job_id;
                });
                this.filteredPaymentPriorities = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.paymentPriorities);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "InitialActionChosen",
    value: function InitialActionChosen(loanType, create) {
      var _a, _b;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {
        var _this3 = this;

        var hasValue;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.initialLoad = false;
                this.createNewType = create;
                hasValue = false;

                if (!(create == false)) {
                  _context3.next = 11;
                  break;
                }

                this.typeChosen = loanType;
                this.showLoader = true;
                _context3.next = 8;
                return this.GetLoanTypeInfo().then(function (result) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
                    var _this4 = this;

                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            this.typeChosen = result;

                            if (this.typeChosen) {
                              hasValue = true;
                              this.GetLoanTypeSteps(parseInt(this.typeChosen.loan_type_code));
                              this.loanService.getLoanTypeStepsDocuments(parseInt(this.typeChosen.loan_type_code)).subscribe(function (x) {
                                _this4.responseOfLoanTypeStepsDocuments(x);
                              });

                              if (this.typeChosen.loan_type_cat === 2) {
                                this.typeChosen.loan_product_type = 3;
                                this.typeChosen.service_provider = 1;
                              } else if (this.typeChosen.loan_type_cat === 3) {
                                this.useOverDraft(true);
                              }
                            } else {
                              this.FailureAlert("لم يتم العثور على أي بيانات");
                              this.BackToInitial();
                            }

                            this.showLoader = false;

                          case 3:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));
                }, function (reason) {
                  console.log(reason);
                  _this3.showLoader = false;

                  _this3.BackToInitial();
                });

              case 8:
                // down payment check
                if (this.typeChosen.down_payment !== 0) {
                  this.haveDownPayment = true;

                  if (this.typeChosen.down_payment_type == 1) {
                    this.downPaymentTypeIsPerc = true;
                  }
                } else {
                  this.haveDownPayment = false;
                  this.downPaymentTypeIsPerc = false;
                }

                _context3.next = 14;
                break;

              case 11:
                this.steps = [{
                  step_id: 0,
                  next_step: null,
                  job_id: -1,
                  step_name: "خطوة أولية",
                  loan_type_code: null,
                  org_code: null,
                  enable_accept: 1,
                  enable_reject: 1
                }];
                this.documentsInformation.documentsByStep = [];
                this.addingNewStepInsideDocuments(this.steps[0].step_id, this.steps[0].job_id, this.steps[0].loan_type_code);

              case 14:
                this.loanTypeDetails = this.formBuilder.group({
                  loanTypeName: [hasValue && this.typeChosen.loan_type_name !== null ? this.typeChosen.loan_type_name : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  calcMethod: [hasValue && this.typeChosen.calc_type !== null ? this.typeChosen.calc_type : 1, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanTypeCat: [hasValue && this.typeChosen.loan_type_cat !== null ? this.typeChosen.loan_type_cat.toString() : "0", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanProduct: [hasValue && this.typeChosen.loan_product_type !== null ? this.typeChosen.loan_product_type.toString() : "0", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  skipDay: [hasValue && this.typeChosen.skip_day !== null ? this.typeChosen.skip_day : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  dueDay: [hasValue && this.typeChosen.due_day !== null ? this.typeChosen.due_day : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  periodLength: [hasValue && this.typeChosen.period_length !== null ? this.typeChosen.period_length : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  periodType: [hasValue && this.typeChosen.period_type !== null ? this.typeChosen.period_type.toString() : "1", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  autoPayNoInst: [hasValue && this.typeChosen.auto_pay_no_inst !== null ? this.typeChosen.auto_pay_no_inst : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  autoPayDirection: [hasValue && this.typeChosen.auto_pay_direction !== null ? this.typeChosen.auto_pay_direction.toString() : "1", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  instNo: [hasValue && this.typeChosen.loan_inst !== null ? this.typeChosen.loan_inst : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  lateDaysNo: [hasValue && this.typeChosen.nod_past_due !== null ? this.typeChosen.nod_past_due : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  gracePeriod: [hasValue && this.typeChosen.loan_gp !== null ? this.typeChosen.loan_gp : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  editGracePeriod: [hasValue && this.typeChosen.edit_loan_gp !== null ? this.ConvertBooleanToInt(this.typeChosen.edit_loan_gp) : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  editLoanInst: [hasValue && this.typeChosen.edit_loan_inst !== null ? this.ConvertBooleanToInt(this.typeChosen.edit_loan_inst) : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanIntRt: [hasValue && this.typeChosen.loan_int_rt !== null ? this.typeChosen.loan_int_rt : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanIntRtType: [hasValue && this.typeChosen.loan_int_type !== null ? this.typeChosen.loan_int_type.toString() : "1", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  editLoanIntRt: [hasValue && this.typeChosen.edit_loan_int_rt !== null ? this.ConvertBooleanToInt(this.typeChosen.edit_loan_int_rt) : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanIntRt2: [hasValue && this.typeChosen.loan_int_rt_2 !== null ? this.typeChosen.loan_int_rt_2 : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanIntRt2Type: [hasValue && this.typeChosen.loan_int_type_2 !== null ? this.typeChosen.loan_int_type_2.toString() : "1", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanIntDeduct: [hasValue && this.typeChosen.loan_int_2_deduct !== null ? this.typeChosen.loan_int_2_deduct.toString() : "0", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  payLoanIntAm: [hasValue && this.typeChosen.pay_loan_int_am_2 !== null ? this.typeChosen.pay_loan_int_am_2 : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  stampDutyRt: [hasValue && this.typeChosen.stamp_duty_rt !== null ? this.typeChosen.stamp_duty_rt : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max]],
                  editStampDutyRt: [hasValue && this.typeChosen.edit_stamp_duty_rt !== null ? this.ConvertBooleanToInt(this.typeChosen.edit_stamp_duty_rt) : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  LOComissionRt: [hasValue && this.typeChosen.lo_commission_rt !== null ? this.typeChosen.lo_commission_rt : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max]],
                  editLOComissionRt: [hasValue && this.typeChosen.edit_lo_commission_rt !== null ? this.ConvertBooleanToInt(this.typeChosen.edit_lo_commission_rt) : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  instCharges: [hasValue && this.typeChosen.installment_charges !== null ? this.typeChosen.installment_charges : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  editInstCharges: [hasValue && this.typeChosen.edit_installment_charges !== null ? this.ConvertBooleanToInt(this.typeChosen.edit_installment_charges) : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  maxPostpone: [hasValue && this.typeChosen.max_no_postpone !== null ? this.typeChosen.max_no_postpone : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  quickRepayRt: [hasValue && this.typeChosen.quick_repay_rt !== null ? this.typeChosen.quick_repay_rt : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  minLoan: [hasValue && this.typeChosen.min_loan_am !== null ? this.typeChosen.min_loan_am : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max]],
                  maxLoan: [hasValue && this.typeChosen.max_loan_am !== null ? this.typeChosen.max_loan_am : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  minInst: [hasValue && this.typeChosen.min_no_inst !== null ? this.typeChosen.min_no_inst : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max]],
                  maxInst: [hasValue && this.typeChosen.max_no_inst !== null ? this.typeChosen.max_no_inst : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  minAge: [hasValue && this.typeChosen.min_age !== null ? this.typeChosen.min_age : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max]],
                  maxAge: [hasValue && this.typeChosen.max_age !== null ? this.typeChosen.max_age : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  applyAgeCondition: [hasValue && this.typeChosen.apply_client_type_age_cond !== null ? this.ConvertBooleanToInt(this.typeChosen.apply_client_type_age_cond) : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  firstInstInt: [hasValue && this.typeChosen.first_inst_int !== null ? this.typeChosen.first_inst_int : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  appCharge: [hasValue && this.typeChosen.app_charge !== null ? this.typeChosen.app_charge : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  editAppCharge: [hasValue && this.typeChosen.edit_app_charge !== null ? this.ConvertBooleanToInt(this.typeChosen.edit_app_charge) : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  addAppChargeToLoan: [hasValue && this.typeChosen.add_app_charge_to_loan !== null ? this.ConvertBooleanToInt(this.typeChosen.add_app_charge_to_loan) : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  appChargeRt: [hasValue && this.typeChosen.app_charge_rt !== null ? this.typeChosen.app_charge_rt : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  appChargeRtType: [hasValue && this.typeChosen.app_charge_perc_type !== null ? this.typeChosen.app_charge_perc_type.toString() : "0", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  appChargePerMember: [hasValue && this.typeChosen.app_charge_mem !== null ? this.typeChosen.app_charge_mem : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  appChargeRtPerMember: [hasValue && this.typeChosen.app_charge_rt_mem !== null ? this.typeChosen.app_charge_rt_mem : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  appChargeRtTypePerMember: [hasValue && this.typeChosen.app_charge_mem_perc_type !== null ? this.typeChosen.app_charge_mem_perc_type.toString() : "0", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  appChargeRtMin: [hasValue && this.typeChosen.app_charge_rt_min !== null ? this.typeChosen.app_charge_rt_min : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max]],
                  appChargeRtMax: [hasValue && this.typeChosen.app_charge_rt_max !== null ? this.typeChosen.app_charge_rt_max : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  applyAppChargeMargin: [hasValue && this.typeChosen.app_charge_apply_min_max !== null ? this.typeChosen.app_charge_apply_min_max : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  approxType: [hasValue && this.typeChosen.app_charge_rounding_type !== null ? this.typeChosen.app_charge_rounding_type.toString() : "1", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  approxValue: [hasValue && this.typeChosen.app_charge_rounding !== null ? this.typeChosen.app_charge_rounding : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  fillAmountFirst: [hasValue && this.typeChosen.fill_am_first !== null ? this.typeChosen.fill_am_first.toString() : "1", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  cosignerHasMultiClients: [hasValue && this.typeChosen.co_multi_clients !== null ? this.typeChosen.co_multi_clients : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  requiredCosigners: [hasValue && this.typeChosen.min_no_cosigners !== null ? this.typeChosen.min_no_cosigners : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  salesTax: [hasValue && this.typeChosen.sales_tax !== null ? this.typeChosen.sales_tax : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  discountRate: [hasValue && this.typeChosen.discount_rate !== null ? this.typeChosen.discount_rate : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  provisionRange: [hasValue && this.typeChosen.provision_range0 !== null ? this.typeChosen.provision_range0 : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  clientRiskStatus: [hasValue && this.typeChosen.client_risk_status !== null ? this.typeChosen.client_risk_status.toString() : "0", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  clientRiskLowPerc: [hasValue && this.typeChosen.client_risk_low_perc !== null ? this.typeChosen.client_risk_low_perc : "10", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  clientRiskMidPerc: [hasValue && this.typeChosen.client_risk_mid_perc !== null ? this.typeChosen.client_risk_mid_perc : "20", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  clientRiskHighPerc: [hasValue && this.typeChosen.client_risk_high_perc !== null ? this.typeChosen.client_risk_high_perc : "30", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  provisionPeriod1: [hasValue && this.typeChosen.period_range1 !== null ? this.typeChosen.period_range1 : 400, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max]],
                  provisionPeriod2: [hasValue && this.typeChosen.period_range2 !== null ? this.typeChosen.period_range2 : 500, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max]],
                  provisionPeriod3: [hasValue && this.typeChosen.period_range3 !== null ? this.typeChosen.period_range3 : 600, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max]],
                  provisionPeriod4: [hasValue && this.typeChosen.period_range4 !== null ? this.typeChosen.period_range4 : 700, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max]],
                  provisionPeriod5: [hasValue && this.typeChosen.period_range5 !== null ? this.typeChosen.period_range5 : 800, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max]],
                  provisionPeriod6: [hasValue && this.typeChosen.period_range6 !== null ? this.typeChosen.period_range6 : 999, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  provisionRange1: [hasValue && this.typeChosen.provision_range1 !== null ? this.typeChosen.provision_range1 : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  provisionRange2: [hasValue && this.typeChosen.provision_range2 !== null ? this.typeChosen.provision_range2 : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  provisionRange3: [hasValue && this.typeChosen.provision_range3 !== null ? this.typeChosen.provision_range3 : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  provisionRange4: [hasValue && this.typeChosen.provision_range4 !== null ? this.typeChosen.provision_range4 : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  provisionRange5: [hasValue && this.typeChosen.provision_range5 !== null ? this.typeChosen.provision_range5 : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  provisionRange6: [hasValue && this.typeChosen.provision_range6 !== null ? this.typeChosen.provision_range6 : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  provisionRange7: [hasValue && this.typeChosen.provision_range7 !== null ? this.typeChosen.provision_range7 : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  includeResc: [hasValue && this.typeChosen.include_resc !== null ? this.typeChosen.include_resc.toString() : "0", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  includeRescDoubt: [hasValue && this.typeChosen.include_resc_doubt !== null ? this.typeChosen.include_resc_doubt.toString() : "0", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  provisionResc: [hasValue && this.typeChosen.provision_resc !== null ? this.typeChosen.provision_resc : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max]],
                  provisionRescDoubt: [hasValue && this.typeChosen.provresc_doubt !== null ? this.typeChosen.provresc_doubt : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max]],
                  paymentsShift: [hasValue && this.typeChosen.payments_shift !== null ? this.typeChosen.payments_shift : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  holidaySkip: [hasValue && this.typeChosen.hd_skip !== null ? this.typeChosen.hd_skip.toString() : "1", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  paymentsShiftSat: [hasValue && this.typeChosen.payments_shift_sat !== null ? this.typeChosen.payments_shift_sat : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  paymentsShiftSun: [hasValue && this.typeChosen.payments_shift_sun !== null ? this.typeChosen.payments_shift_sun : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  paymentsShiftMon: [hasValue && this.typeChosen.payments_shift_mon !== null ? this.typeChosen.payments_shift_mon : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  paymentsShiftTue: [hasValue && this.typeChosen.payments_shift_tue !== null ? this.typeChosen.payments_shift_tue : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  paymentsShiftWed: [hasValue && this.typeChosen.payments_shift_wed !== null ? this.typeChosen.payments_shift_wed : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  paymentsShiftThu: [hasValue && this.typeChosen.payments_shift_thu !== null ? this.typeChosen.payments_shift_thu : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  paymentsShiftFri: [hasValue && this.typeChosen.payments_shift_fri !== null ? this.typeChosen.payments_shift_fri : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  allowPenaltyInVac: [hasValue && this.typeChosen.allow_penalty_in_vac !== null ? this.typeChosen.allow_penalty_in_vac : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  allowLoanDisbursmentInVac: [hasValue && this.typeChosen.allow_loan_disbursment_in_vac !== null ? this.typeChosen.allow_loan_disbursment_in_vac : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  allowLoanRescheduleInVac: [hasValue && this.typeChosen.allow_loan_reschedule_in_vac !== null ? this.typeChosen.allow_loan_reschedule_in_vac : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  allowLoanWrittenOffInVac: [hasValue && this.typeChosen.allow_loan_written_off_in_vac !== null ? this.typeChosen.allow_loan_written_off_in_vac : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  allowLoanDoubtfulInVac: [hasValue && this.typeChosen.allow_loan_doubtful_in_vac !== null ? this.typeChosen.allow_loan_doubtful_in_vac : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  allowLoanGenerationInVac: [hasValue && this.typeChosen.allow_loan_generation_in_vac !== null ? this.typeChosen.allow_loan_generation_in_vac : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  allowStampChargesInVac: [hasValue && this.typeChosen.allow_stamp_charges_in_vac !== null ? this.typeChosen.allow_stamp_charges_in_vac : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  allowOfficerCommissionInVac: [hasValue && this.typeChosen.allow_officer_commission_in_vac !== null ? this.typeChosen.allow_officer_commission_in_vac : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  allowApplicationChargesInVac: [hasValue && this.typeChosen.allow_application_charges_in_vac !== null ? this.typeChosen.allow_application_charges_in_vac : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  allowChangesFundingInVac: [hasValue && this.typeChosen.allow_changes_funding_in_vac !== null ? this.typeChosen.allow_changes_funding_in_vac : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  allowInstallmentRepaymentInVac: [hasValue && this.typeChosen.allow_installment_repayment_in_vac !== null ? this.typeChosen.allow_installment_repayment_in_vac : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  allowChequeMovementInVac: [hasValue && this.typeChosen.allow_cheque_movement_in_vac !== null ? this.typeChosen.allow_cheque_movement_in_vac : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  maxIScoreDays: [hasValue && this.typeChosen.iscore_max_days !== null ? this.typeChosen.iscore_max_days : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min]],
                  requestIScore: [hasValue && this.typeChosen.iscore_request !== null ? this.typeChosen.iscore_request : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  requestIScoreAutomatic: [hasValue && this.typeChosen.iscore_automatic !== null ? this.typeChosen.iscore_automatic : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  reqGrpLeaderIScore: [hasValue && this.typeChosen.iscore_req_super !== null ? this.typeChosen.iscore_req_super : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  reqGrpMembersIScore: [hasValue && this.typeChosen.iscore_req_mem !== null ? this.typeChosen.iscore_req_mem : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  supervisorVisit: [hasValue && this.typeChosen.officer_supervisor_visit !== null ? this.typeChosen.officer_supervisor_visit : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  deputyVisit: [hasValue && this.typeChosen.br_deputy_visit !== null ? this.typeChosen.br_deputy_visit : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  managerVisit: [hasValue && this.typeChosen.br_manager_visit !== null ? this.typeChosen.br_manager_visit : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  forceSupervisorVisit: [hasValue && this.typeChosen.force_officer_supervisor_visit !== null ? this.typeChosen.force_officer_supervisor_visit : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  allowUsage: [hasValue && this.typeChosen.active_rec !== null ? this.typeChosen.active_rec : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  requireInsurance: [hasValue && this.typeChosen.to_be_insured !== null ? this.typeChosen.to_be_insured : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  clientUsable: [hasValue && this.typeChosen.client_usable !== null ? this.typeChosen.client_usable : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  useWorkflow: [hasValue && this.typeChosen.use_workflow !== null ? this.typeChosen.use_workflow : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  accumulatedInterest: [hasValue && this.typeChosen.accumulated_interest !== null ? this.typeChosen.accumulated_interest : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  daysBeforePenalty: [hasValue && this.typeChosen.days_before_penalty !== null ? this.typeChosen.days_before_penalty : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  penaltyType: [hasValue && this.typeChosen.penalty_type !== null ? this.typeChosen.penalty_type : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  penaltyRate: [hasValue && this.typeChosen.penalty_rate !== null ? this.typeChosen.penalty_rate : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  penaltyAmount: [hasValue && this.typeChosen.penalty_amount !== null ? this.typeChosen.penalty_amount : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  cyclesBeforeBlock: [hasValue && this.typeChosen.cycles_before_block !== null ? this.typeChosen.cycles_before_block : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  compoundInterest: [hasValue && this.typeChosen.compound_interest !== null ? this.typeChosen.compound_interest : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  interestPeriodType: [hasValue && this.typeChosen.interest_period_type !== null ? this.typeChosen.interest_period_type.toString() : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  penaltyCalcType: [hasValue && this.typeChosen.penalty_calc_type !== null ? this.typeChosen.penalty_calc_type.toString() : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  loanPenRt: [hasValue && this.typeChosen.loan_pen_rt !== null ? this.typeChosen.loan_pen_rt : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  compoundPenalty: [hasValue && this.typeChosen.compound_penalty !== null ? this.typeChosen.compound_penalty : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  forceUserOtp: [hasValue && this.typeChosen.force_user_otp !== null ? this.typeChosen.force_user_otp : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  forceClientOtp: [hasValue && this.typeChosen.force_client_otp !== null ? this.typeChosen.force_client_otp : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  forceCosignersOtp: [hasValue && this.typeChosen.force_cosigners_otp !== null ? this.typeChosen.force_cosigners_otp : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  iscoreAutoReject: [hasValue && this.typeChosen.iscore_auto_reject !== null ? this.typeChosen.iscore_auto_reject : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  iscoreMinScore: [hasValue && this.typeChosen.iscore_min_score !== null ? this.typeChosen.iscore_min_score : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern("^[1-9][0-9]{0,2}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.max(999)]],
                  exceptionHandler: [hasValue && this.typeChosen.exception_job_id !== null ? this.typeChosen.exception_job_id.toString() : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftInterestOn: [hasValue && this.typeChosen.od_interest_on !== null ? this.typeChosen.od_interest_on.toString() : "1", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftMonthlyInterest: [hasValue && this.typeChosen.od_monthly_interest !== null ? this.typeChosen.od_monthly_interest : 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftPenaltyRate: [hasValue && this.typeChosen.od_penalty_rate !== null ? this.typeChosen.od_penalty_rate.toString() : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftPenaltyOn: [hasValue && this.typeChosen.od_penalty_on !== null ? this.typeChosen.od_penalty_on.toString() : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftPenaltyStartDays: [hasValue && this.typeChosen.od_penalty_start_days !== null ? this.typeChosen.od_penalty_start_days.toString() : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftChargesType: [hasValue && this.typeChosen.od_charges_type !== null ? this.typeChosen.od_charges_type.toString() : "1", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftChargesRate: [hasValue && this.typeChosen.od_charges_rate !== null ? this.typeChosen.od_charges_rate.toString() : null, []],
                  overDraftChargesAmount: [hasValue && this.typeChosen.od_charges_amount !== null ? this.typeChosen.od_charges_amount.toString() : null, []],
                  overDraftDaysToBlock: [hasValue && this.typeChosen.od_days_to_block !== null ? this.typeChosen.od_days_to_block.toString() : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftBlockFrom: [hasValue && this.typeChosen.od_block_from !== null ? this.typeChosen.od_block_from.toString() : "1", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftPrinciplePaymentPriority: [hasValue && this.typeChosen.od_principle_payment_priority !== null ? this.typeChosen.od_principle_payment_priority.toString() : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftInterestPaymentPriority: [hasValue && this.typeChosen.od_interest_payment_priority !== null ? this.typeChosen.od_interest_payment_priority.toString() : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftPenaltyPaymentPriority: [hasValue && this.typeChosen.od_penalty_payment_priority !== null ? this.typeChosen.od_penalty_payment_priority.toString() : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftChargesPaymentPriority: [hasValue && this.typeChosen.od_charges_payment_priority !== null ? this.typeChosen.od_charges_payment_priority.toString() : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  overDraftPenaltyPeriodType: [hasValue && this.typeChosen.od_penalty_period_type !== null ? this.typeChosen.od_penalty_period_type.toString() : "1", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
                  // down payment
                  down_payment: [hasValue && this.typeChosen.down_payment !== null ? this.typeChosen.down_payment.toString() : "0" //[Validators.required],
                  ],
                  down_payment_type: [hasValue && this.typeChosen.down_payment_type !== null ? this.typeChosen.down_payment_type.toString() : null //[Validators.required],
                  ],
                  down_payment_perc: [hasValue && this.typeChosen.down_payment_perc !== null ? this.typeChosen.down_payment_perc : null //[Validators.required],
                  ],
                  down_payment_edit: [hasValue && this.typeChosen.down_payment_edit !== null ? this.ConvertBooleanToInt(this.typeChosen.down_payment_edit) : null //[Validators.required],
                  ]
                });

                if (this.workflowAllowed == 0) {
                  this.loanTypeDetails.patchValue({
                    useWorkflow: 0
                  });
                }

                this.loanTypeDetailsControls.penaltyType.setValue((_b = (_a = this.typeChosen) === null || _a === void 0 ? void 0 : _a.penalty_type.toString()) !== null && _b !== void 0 ? _b : "0");

                if (create) {
                  this.useOverDraft(false);
                }

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "GetLoanTypeSteps",
    value: function GetLoanTypeSteps(loanTypeCode) {
      var _this5 = this;

      if (this.workflowAllowed == 1) {
        this.http.post(this.env.API_URL + "api/Loan/GetLoanTypeSteps", loanTypeCode).subscribe({
          next: function next(data) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4() {
              var _this6 = this;

              return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.steps = data;

                      if (this.steps.length == 0) {
                        this.steps = [{
                          step_id: 0,
                          next_step: null,
                          job_id: -1,
                          step_name: "خطوة أولية",
                          loan_type_code: parseInt(this.typeChosen.loan_type_code),
                          org_code: this.typeChosen.org_code,
                          enable_accept: 1,
                          enable_reject: 1
                        }];
                      }

                      this.documentsInformation.documentsByStep = [];
                      this.steps.forEach(function (x) {
                        _this6.addingNewStepInsideDocuments(x.step_id, x.job_id, x.loan_type_code);
                      });

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          },
          error: function error(err) {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5() {
              return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log(err);
                      _context5.next = 3;
                      return this.FailureAlert(err.message);

                    case 3:
                      this.BackToInitial();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        });
      }
    }
  }, {
    key: "GetLoanTypeInfo",
    value: function GetLoanTypeInfo() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee7() {
        var _this7 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", new Promise(function (resolve, reject) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee6() {
                    var _this8 = this;

                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            _context6.next = 2;
                            return this.http.get(this.env.API_URL + "api/Loan/GetLoanTypeInfo?loanTypeCode=".concat(this.typeChosen.loan_type_code)).subscribe({
                              next: function next(data) {
                                _this8.showLoader = false;
                                resolve(data);
                              },
                              error: function error(err) {
                                _this8.showLoader = false;
                                reject(err);
                              }
                            });

                          case 2:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6, this);
                  }));
                }));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));
    }
  }, {
    key: "BackToInitial",
    value: function BackToInitial() {
      this.initialLoad = true;
      this.steps = []; // this.LoadData(false);

      this.typeChosen = this.DefaultLoanTypeInfo();
      this.haveDownPayment = false;
      this.downPaymentTypeIsPerc = false;
    }
  }, {
    key: "DefaultLoanTypeInfo",
    value: function DefaultLoanTypeInfo() {
      return {
        loan_type_name: "",
        loan_type_code: "",
        calc_type: 0,
        loan_type_cat: 0,
        org_code: 0,
        currency_code: 0,
        period_type: 0,
        auto_pay_direction: 0,
        auto_pay_no_inst: 0,
        loan_gp: 0,
        allow_parm_edit: false,
        update_stamp: "",
        user_name: "",
        loan_int_type: 0,
        loan_int_rt: 0,
        stamp_duty_rt: 0,
        app_charge: 0,
        lo_commission_rt: 0,
        installment_charges: 0,
        loan_inst: 0,
        nod_past_due: 0,
        hd_skip: 0,
        fill_am_first: 0,
        force_cosigner: 0,
        period_range1: 0,
        period_range2: 0,
        period_range3: 0,
        period_range4: 0,
        period_range5: 0,
        period_range6: 0,
        provision_range1: 0,
        provision_range2: 0,
        provision_range3: 0,
        provision_range4: 0,
        provision_range5: 0,
        provision_range6: 0,
        provision_range7: 0,
        edit_loan_inst: 0,
        edit_loan_int_rt: 0,
        edit_installment_charges: 0,
        edit_stamp_duty_rt: 0,
        edit_app_charge: 0,
        edit_lo_commission_rt: 0,
        edit_loan_gp: 0,
        provision_resc: 0,
        include_resc: 0,
        active_rec: 0,
        sm_disburse: 0,
        sm_repay: 0,
        sm_partial: 0,
        sm_compulsory_perc: 0,
        co_multi_clients: 0,
        payments_shift: 0,
        period_length: 0,
        loan_int_rt_2: 0,
        loan_int_type_2: 0,
        loan_int_2_deduct: 0,
        sales_tax: 0,
        provresc_doubt: 0,
        include_resc_doubt: 0,
        provision_range0: 0,
        discount_rate: 0,
        loan_product_type: 0,
        officer_supervisor_visit: 0,
        br_deputy_visit: 0,
        br_manager_visit: 0,
        second_hand_item: 0,
        gl_item_brand_code: "",
        gl_item_product_code: "",
        gl_item_category_code: "",
        payments_shift_sat: 0,
        payments_shift_sun: 0,
        payments_shift_mon: 0,
        payments_shift_tue: 0,
        payments_shift_wed: 0,
        payments_shift_thu: 0,
        payments_shift_fri: 0,
        app_charge_mem: 0,
        app_charge_rt: 0,
        app_charge_rt_mem: 0,
        max_no_postpone: 0,
        quick_repay_rt: 0,
        min_loan_am: 0,
        max_loan_am: 0,
        min_no_inst: 0,
        max_no_inst: 0,
        app_charge_amort: 0,
        app_charge_perc_type: 0,
        app_charge_mem_perc_type: 0,
        allow_penalty_in_vac: false,
        allow_loan_disbursment_in_vac: false,
        allow_loan_reschedule_in_vac: false,
        allow_loan_written_off_in_vac: false,
        allow_loan_doubtful_in_vac: false,
        allow_loan_generation_in_vac: false,
        allow_stamp_charges_in_vac: false,
        allow_officer_commission_in_vac: false,
        allow_application_charges_in_vac: false,
        allow_changes_funding_in_vac: false,
        allow_installment_repayment_in_vac: false,
        allow_cheque_movement_in_vac: false,
        to_be_insured: false,
        iscore_request: 0,
        iscore_automatic: 0,
        iscore_max_days: 0,
        iscore_req_super: 0,
        iscore_req_mem: 0,
        skip_day: 0,
        due_day: 0,
        gl_line_of_bus_code: "",
        gl_sector_code: "",
        service_provider: 0,
        prov_p_post_000: 0,
        prov_p_post_001: 0,
        prov_p_post_031: 0,
        prov_p_post_061: 0,
        prov_p_post_091: 0,
        prov_p_post_121: 0,
        prov_p_post_range6: 0,
        prov_p_post_range7: 0,
        prov_n_post_000: 0,
        prov_n_post_001: 0,
        prov_n_post_031: 0,
        prov_n_post_061: 0,
        prov_n_post_091: 0,
        prov_n_post_121: 0,
        prov_n_post_range6: 0,
        prov_n_post_range7: 0,
        prov_p_resc_000: 0,
        prov_p_resc_001: 0,
        prov_p_resc_031: 0,
        prov_p_resc_061: 0,
        prov_p_resc_091: 0,
        prov_p_resc_121: 0,
        prov_p_resc_range6: 0,
        prov_p_resc_range7: 0,
        prov_n_resc_000: 0,
        prov_n_resc_001: 0,
        prov_n_resc_031: 0,
        prov_n_resc_061: 0,
        prov_n_resc_091: 0,
        prov_n_resc_121: 0,
        prov_n_resc_range6: 0,
        prov_n_resc_range7: 0,
        pay_loan_int_am_2: 0,
        app_charge_rt_max: 0,
        app_charge_rt_min: 0,
        app_charge_rounding_type: 0,
        app_charge_apply_min_max: false,
        app_charge_rounding: 0,
        add_app_charge_to_loan: false,
        ecollect_stamp_duty: 0,
        ecollect_lo_commission: 0,
        ecollect_app_charge: 0,
        min_age: 0,
        max_age: 0,
        apply_client_type_age_cond: 0,
        first_inst_int: 0,
        client_risk_status: 0,
        client_risk_low_perc: 0,
        client_risk_mid_perc: 0,
        client_risk_high_perc: 0,
        force_officer_supervisor_visit: 0,
        uuc_int: 0,
        accumulated_interest: 0,
        compound_interest: 0,
        penalty_type: 0,
        penalty_rate: 0,
        penalty_amount: 0,
        days_before_penalty: 0,
        cycles_before_block: 0,
        interest_period_type: 0,
        loan_pen_rt: 0,
        compound_penalty: 0,
        force_user_otp: 0,
        force_client_otp: 0,
        force_cosigners_otp: 0,
        exception_job_id: null,
        min_no_cosigners: 0,
        // down payment
        down_payment: 0,
        down_payment_type: 0,
        down_payment_perc: 0,
        down_payment_edit: 0
      };
    }
  }, {
    key: "LoanTypeDetailsSubmit",
    value: function LoanTypeDetailsSubmit(create) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee8() {
        var controls, name, loanType, loanTypeWithSteps;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!(this.loanTypeDetails.controls.useWorkflow.value && this.workflowAllowed && !this.steps.find(function (x) {
                  return x.enable_accept === 1;
                }) && !this.steps.find(function (x) {
                  return x.enable_reject === 1;
                }) && !this.steps.find(function (x) {
                  return x.enable_accept_with_edit === 1;
                }) && !this.steps.find(function (x) {
                  return x.enable_reverse === 1;
                }) && !this.steps.find(function (x) {
                  return x.enable_exception === 1;
                }) && !this.steps.find(function (x) {
                  return x.enable_freeze === 1;
                }))) {
                  _context8.next = 3;
                  break;
                }

                this.alert.showAlertError("بيانات خطوات القرض غير سليمة", false);
                return _context8.abrupt("return");

              case 3:
                controls = this.loanTypeDetails.controls;
                console.log(this.steps);
                _context8.next = 7;
                return this.alert.SaveAlert("هل انت متاكد من حفظ البيانات؟");

              case 7:
                if (!_context8.sent) {
                  _context8.next = 12;
                  break;
                }

                if (this.ConvertBooleanToInt(this.loanTypeDetailsControls.useWorkflow.value) == 0) {
                  this.loanTypeDetails.controls.exceptionHandler.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.nullValidator]);
                  this.loanTypeDetails.controls["exceptionHandler"].updateValueAndValidity();
                }

                for (name in controls) {
                  if (controls[name].invalid) {
                    console.log("invalid", name);
                  }
                }

                if (this.loanTypeDetails.valid && this.areFormValueRangesLogical) {
                  loanType = {
                    edit_loan_inst: this.ConvertBooleanToInt(this.loanTypeDetailsControls.editLoanInst.value),
                    edit_loan_gp: this.ConvertBooleanToInt(this.loanTypeDetailsControls.editGracePeriod.value),
                    currency_code: 1,
                    second_hand_item: 0,
                    app_charge_amort: 0,
                    allow_parm_edit: true,
                    loan_type_name: this.loanTypeDetailsControls.loanTypeName.value,
                    loan_type_code: !create ? this.typeChosen.loan_type_code : null,
                    calc_type: this.loanTypeDetailsControls.calcMethod.value,
                    loan_type_cat: parseInt(this.loanTypeDetailsControls.loanTypeCat.value),
                    loan_product_type: parseInt(this.loanTypeDetailsControls.loanProduct.value),
                    skip_day: parseInt(this.loanTypeDetailsControls.skipDay.value),
                    due_day: this.loanTypeDetailsControls.dueDay.value,
                    period_length: this.loanTypeDetailsControls.periodLength.value,
                    period_type: parseInt(this.loanTypeDetailsControls.periodType.value),
                    auto_pay_no_inst: this.loanTypeDetailsControls.autoPayNoInst.value,
                    auto_pay_direction: parseInt(this.loanTypeDetailsControls.autoPayDirection.value),
                    loan_inst: this.loanTypeDetailsControls.instNo.value,
                    nod_past_due: this.loanTypeDetailsControls.lateDaysNo.value,
                    loan_gp: this.loanTypeDetailsControls.gracePeriod.value,
                    loan_int_rt: this.loanTypeDetailsControls.loanIntRt.value,
                    loan_int_type: parseInt(this.loanTypeDetailsControls.loanIntRtType.value),
                    edit_loan_int_rt: this.ConvertBooleanToInt(this.loanTypeDetailsControls.editLoanIntRt.value),
                    loan_int_rt_2: this.loanTypeDetailsControls.loanIntRt2.value,
                    loan_int_type_2: parseInt(this.loanTypeDetailsControls.loanIntRt2Type.value),
                    loan_int_2_deduct: parseInt(this.loanTypeDetailsControls.loanIntDeduct.value),
                    pay_loan_int_am_2: this.ConvertBooleanToInt(this.loanTypeDetailsControls.payLoanIntAm.value),
                    stamp_duty_rt: this.loanTypeDetailsControls.stampDutyRt.value,
                    edit_stamp_duty_rt: this.ConvertBooleanToInt(this.loanTypeDetailsControls.editStampDutyRt.value),
                    lo_commission_rt: this.loanTypeDetailsControls.LOComissionRt.value,
                    edit_lo_commission_rt: this.ConvertBooleanToInt(this.loanTypeDetailsControls.editLOComissionRt.value),
                    installment_charges: this.loanTypeDetailsControls.instCharges.value,
                    edit_installment_charges: this.ConvertBooleanToInt(this.loanTypeDetailsControls.editInstCharges.value),
                    max_no_postpone: this.loanTypeDetailsControls.maxPostpone.value,
                    quick_repay_rt: this.loanTypeDetailsControls.quickRepayRt.value,
                    min_loan_am: this.loanTypeDetailsControls.minLoan.value,
                    max_loan_am: this.loanTypeDetailsControls.maxLoan.value,
                    min_no_inst: this.loanTypeDetailsControls.minInst.value,
                    max_no_inst: this.loanTypeDetailsControls.maxInst.value,
                    min_age: this.loanTypeDetailsControls.minAge.value,
                    max_age: this.loanTypeDetailsControls.maxAge.value,
                    apply_client_type_age_cond: this.ConvertBooleanToInt(this.loanTypeDetailsControls.applyAgeCondition.value),
                    first_inst_int: this.loanTypeDetailsControls.firstInstInt.value,
                    app_charge: this.loanTypeDetailsControls.appCharge.value,
                    edit_app_charge: this.ConvertBooleanToInt(this.loanTypeDetailsControls.editAppCharge.value),
                    add_app_charge_to_loan: this.ConvertBooleanToInt(this.loanTypeDetailsControls.addAppChargeToLoan.value) == 1 ? true : false,
                    app_charge_rt: this.loanTypeDetailsControls.appChargeRt.value,
                    app_charge_perc_type: parseInt(this.loanTypeDetailsControls.appChargeRtType.value),
                    app_charge_mem: this.loanTypeDetailsControls.appChargePerMember.value,
                    app_charge_rt_mem: this.loanTypeDetailsControls.appChargeRtPerMember.value,
                    app_charge_mem_perc_type: parseInt(this.loanTypeDetailsControls.appChargeRtTypePerMember.value),
                    app_charge_rt_min: this.loanTypeDetailsControls.appChargeRtMin.value,
                    app_charge_rt_max: this.loanTypeDetailsControls.appChargeRtMax.value,
                    app_charge_apply_min_max: this.ConvertBooleanToInt(this.loanTypeDetailsControls.applyAppChargeMargin.value) == 1 ? true : false,
                    app_charge_rounding_type: parseInt(this.loanTypeDetailsControls.approxType.value),
                    app_charge_rounding: this.loanTypeDetailsControls.approxValue.value,
                    fill_am_first: parseInt(this.loanTypeDetailsControls.fillAmountFirst.value),
                    co_multi_clients: this.ConvertBooleanToInt(this.loanTypeDetailsControls.cosignerHasMultiClients.value),
                    force_cosigner: 0,
                    min_no_cosigners: parseInt(this.loanTypeDetailsControls.requiredCosigners.value),
                    sales_tax: this.loanTypeDetailsControls.salesTax.value,
                    discount_rate: this.loanTypeDetailsControls.discountRate.value,
                    provision_range0: this.loanTypeDetailsControls.provisionRange.value,
                    client_risk_status: parseInt(this.loanTypeDetailsControls.clientRiskStatus.value),
                    client_risk_low_perc: this.loanTypeDetailsControls.clientRiskLowPerc.value == "" ? null : this.loanTypeDetailsControls.clientRiskLowPerc.value,
                    client_risk_mid_perc: this.loanTypeDetailsControls.clientRiskMidPerc.value == "" ? null : this.loanTypeDetailsControls.clientRiskMidPerc.value,
                    client_risk_high_perc: this.loanTypeDetailsControls.clientRiskHighPerc.value == "" ? null : this.loanTypeDetailsControls.clientRiskHighPerc.value,
                    period_range1: this.loanTypeDetailsControls.provisionPeriod1.value,
                    period_range2: this.loanTypeDetailsControls.provisionPeriod2.value,
                    period_range3: this.loanTypeDetailsControls.provisionPeriod3.value,
                    period_range4: this.loanTypeDetailsControls.provisionPeriod4.value,
                    period_range5: this.loanTypeDetailsControls.provisionPeriod5.value,
                    period_range6: this.loanTypeDetailsControls.provisionPeriod6.value,
                    provision_range1: this.loanTypeDetailsControls.provisionRange1.value,
                    provision_range2: this.loanTypeDetailsControls.provisionRange2.value,
                    provision_range3: this.loanTypeDetailsControls.provisionRange3.value,
                    provision_range4: this.loanTypeDetailsControls.provisionRange4.value,
                    provision_range5: this.loanTypeDetailsControls.provisionRange5.value,
                    provision_range6: this.loanTypeDetailsControls.provisionRange6.value,
                    provision_range7: this.loanTypeDetailsControls.provisionRange7.value,
                    include_resc: parseInt(this.loanTypeDetailsControls.includeResc.value),
                    include_resc_doubt: parseInt(this.loanTypeDetailsControls.includeRescDoubt.value),
                    provision_resc: this.loanTypeDetailsControls.provisionResc.value,
                    provresc_doubt: this.loanTypeDetailsControls.provisionRescDoubt.value,
                    payments_shift: this.loanTypeDetailsControls.paymentsShift.value,
                    hd_skip: parseInt(this.loanTypeDetailsControls.holidaySkip.value),
                    payments_shift_sat: this.loanTypeDetailsControls.paymentsShiftSat.value,
                    payments_shift_sun: this.loanTypeDetailsControls.paymentsShiftSun.value,
                    payments_shift_mon: this.loanTypeDetailsControls.paymentsShiftMon.value,
                    payments_shift_tue: this.loanTypeDetailsControls.paymentsShiftTue.value,
                    payments_shift_wed: this.loanTypeDetailsControls.paymentsShiftWed.value,
                    payments_shift_thu: this.loanTypeDetailsControls.paymentsShiftThu.value,
                    payments_shift_fri: this.loanTypeDetailsControls.paymentsShiftFri.value,
                    allow_penalty_in_vac: this.ConvertBooleanToInt(this.loanTypeDetailsControls.allowPenaltyInVac.value) == 1 ? true : false,
                    allow_loan_disbursment_in_vac: this.ConvertBooleanToInt(this.loanTypeDetailsControls.allowLoanDisbursmentInVac.value) == 1 ? true : false,
                    allow_loan_reschedule_in_vac: this.ConvertBooleanToInt(this.loanTypeDetailsControls.allowLoanRescheduleInVac.value) == 1 ? true : false,
                    allow_loan_written_off_in_vac: this.ConvertBooleanToInt(this.loanTypeDetailsControls.allowLoanWrittenOffInVac.value) == 1 ? true : false,
                    allow_loan_doubtful_in_vac: this.ConvertBooleanToInt(this.loanTypeDetailsControls.allowLoanDoubtfulInVac.value) == 1 ? true : false,
                    allow_loan_generation_in_vac: this.ConvertBooleanToInt(this.loanTypeDetailsControls.allowLoanGenerationInVac.value) == 1 ? true : false,
                    allow_stamp_charges_in_vac: this.ConvertBooleanToInt(this.loanTypeDetailsControls.allowStampChargesInVac.value) == 1 ? true : false,
                    allow_officer_commission_in_vac: this.ConvertBooleanToInt(this.loanTypeDetailsControls.allowOfficerCommissionInVac.value) == 1 ? true : false,
                    allow_application_charges_in_vac: this.ConvertBooleanToInt(this.loanTypeDetailsControls.allowApplicationChargesInVac.value) == 1 ? true : false,
                    allow_changes_funding_in_vac: this.ConvertBooleanToInt(this.loanTypeDetailsControls.allowChangesFundingInVac.value) == 1 ? true : false,
                    allow_installment_repayment_in_vac: this.ConvertBooleanToInt(this.loanTypeDetailsControls.allowInstallmentRepaymentInVac.value) == 1 ? true : false,
                    allow_cheque_movement_in_vac: this.ConvertBooleanToInt(this.loanTypeDetailsControls.allowChequeMovementInVac.value) == 1 ? true : false,
                    iscore_max_days: this.ConvertBooleanToInt(this.loanTypeDetailsControls.maxIScoreDays.value),
                    iscore_request: this.ConvertBooleanToInt(this.loanTypeDetailsControls.requestIScore.value),
                    iscore_automatic: this.ConvertBooleanToInt(this.loanTypeDetailsControls.requestIScoreAutomatic.value),
                    iscore_req_super: this.ConvertBooleanToInt(this.loanTypeDetailsControls.reqGrpLeaderIScore.value),
                    iscore_req_mem: this.ConvertBooleanToInt(this.loanTypeDetailsControls.reqGrpMembersIScore.value),
                    officer_supervisor_visit: this.ConvertBooleanToInt(this.loanTypeDetailsControls.supervisorVisit.value),
                    br_deputy_visit: this.ConvertBooleanToInt(this.loanTypeDetailsControls.deputyVisit.value),
                    br_manager_visit: this.ConvertBooleanToInt(this.loanTypeDetailsControls.managerVisit.value),
                    force_officer_supervisor_visit: this.ConvertBooleanToInt(this.loanTypeDetailsControls.forceSupervisorVisit.value),
                    active_rec: this.ConvertBooleanToInt(this.loanTypeDetailsControls.allowUsage.value),
                    to_be_insured: this.ConvertBooleanToInt(this.loanTypeDetailsControls.requireInsurance.value) == 1 ? true : false,
                    uuc_int: !create ? this.typeChosen.uuc_int : null,
                    client_usable: this.ConvertBooleanToInt(this.loanTypeDetailsControls.clientUsable.value),
                    use_workflow: this.ConvertBooleanToInt(this.loanTypeDetailsControls.useWorkflow.value),
                    accumulated_interest: this.ConvertBooleanToInt(this.loanTypeDetailsControls.accumulatedInterest.value),
                    compound_interest: this.ConvertBooleanToInt(this.loanTypeDetailsControls.compoundInterest.value),
                    cycles_before_block: this.loanTypeDetailsControls.cyclesBeforeBlock.value,
                    days_before_penalty: this.loanTypeDetailsControls.daysBeforePenalty.value,
                    penalty_type: this.loanTypeDetailsControls.penaltyType.value,
                    penalty_amount: this.loanTypeDetailsControls.penaltyAmount.value,
                    penalty_rate: this.loanTypeDetailsControls.penaltyRate.value,
                    interest_period_type: this.loanTypeDetailsControls.interestPeriodType.value,
                    penalty_calc_type: this.loanTypeDetailsControls.penaltyCalcType.value,
                    loan_pen_rt: this.loanTypeDetailsControls.loanPenRt.value,
                    compound_penalty: this.ConvertBooleanToInt(this.loanTypeDetailsControls.compoundPenalty.value),
                    force_user_otp: this.ConvertBooleanToInt(this.loanTypeDetailsControls.forceUserOtp.value),
                    force_client_otp: this.ConvertBooleanToInt(this.loanTypeDetailsControls.forceClientOtp.value),
                    force_cosigners_otp: this.ConvertBooleanToInt(this.loanTypeDetailsControls.forceCosignersOtp.value),
                    iscore_auto_reject: this.ConvertBooleanToInt(this.loanTypeDetailsControls.iscoreAutoReject.value),
                    iscore_min_score: this.loanTypeDetailsControls.iscoreMinScore.value,
                    exception_job_id: this.loanTypeDetailsControls.exceptionHandler.value,
                    service_provider: parseInt(this.loanTypeDetailsControls.loanTypeCat.value) === 2 ? 1 : 0,
                    od_monthly_interest: this.ConvertBooleanToInt(this.loanTypeDetailsControls.overDraftMonthlyInterest.value),
                    od_interest_on: this.loanTypeDetailsControls.overDraftInterestOn.value || "1",
                    od_penalty_rate: this.loanTypeDetailsControls.overDraftPenaltyRate.value || 0,
                    od_penalty_on: this.loanTypeDetailsControls.overDraftPenaltyOn.value || 0,
                    od_penalty_start_days: this.loanTypeDetailsControls.overDraftPenaltyStartDays.value || 0,
                    od_charges_type: this.loanTypeDetailsControls.overDraftChargesType.value || "1",
                    od_charges_rate: this.loanTypeDetailsControls.overDraftChargesRate.value || 0,
                    od_charges_amount: this.loanTypeDetailsControls.overDraftChargesAmount.value || 0,
                    od_days_to_block: this.loanTypeDetailsControls.overDraftDaysToBlock.value || 0,
                    od_block_from: this.loanTypeDetailsControls.overDraftBlockFrom.value || "1",
                    od_principle_payment_priority: this.loanTypeDetailsControls.overDraftPrinciplePaymentPriority.value || 0,
                    od_interest_payment_priority: this.loanTypeDetailsControls.overDraftInterestPaymentPriority.value || 0,
                    od_penalty_payment_priority: this.loanTypeDetailsControls.overDraftPenaltyPaymentPriority.value || 0,
                    od_charges_payment_priority: this.loanTypeDetailsControls.overDraftChargesPaymentPriority.value || 0,
                    od_penalty_period_type: this.loanTypeDetailsControls.overDraftPenaltyPeriodType.value || "1",
                    // down payment
                    down_payment: this.loanTypeDetailsControls.down_payment.value,
                    down_payment_type: this.loanTypeDetailsControls.down_payment_type.value,
                    down_payment_perc: this.loanTypeDetailsControls.down_payment_perc.value,
                    down_payment_edit: this.downPaymentEditChecker(this.loanTypeDetailsControls.down_payment_edit.value)
                  };
                  loanTypeWithSteps = {
                    loanType: loanType,
                    steps: this.steps,
                    documents: this.documentsInformation.documentsByStep.map(function (doc) {
                      return Object.assign(Object.assign({}, doc), {
                        isRequiredFlag: doc.isRequiredFlag === true ? 1 : 0,
                        selectedDocuments: doc.selectedDocuments.map(function (selectedDoc) {
                          return Object.assign(Object.assign({}, selectedDoc), {
                            isThisDocumentMustEnter: selectedDoc.isThisDocumentMustEnter === true ? 1 : 0,
                            selectedDocumentTypeCode: Number(selectedDoc.selectedDocumentTypeCode)
                          });
                        })
                      });
                    })
                  };
                  this.SendLoanType(loanTypeWithSteps, create);
                } else {
                  this.validateAllFormFields(this.loanTypeDetails);
                }

                this.isLoanTypeDetailsSubmitted = true;

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }, {
    key: "validateAllFormFields",
    value: function validateAllFormFields(formGroup) {
      var _this9 = this;

      Object.keys(formGroup.controls).forEach(function (field) {
        var control = formGroup.get(field);

        if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl) {
          control.markAsTouched({
            onlySelf: true
          });
        } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup) {
          _this9.validateAllFormFields(control);
        }
      });
    }
  }, {
    key: "SendLoanType",
    value: function SendLoanType(loanType, create) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee11() {
        var _this10 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.showLoader = true;
                this.http.post(this.env.API_URL + "api/Loan/ManageLoanType?create=".concat(create), loanType).subscribe({
                  next: function next(data) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this10, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee9() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee9$(_context9) {
                        while (1) {
                          switch (_context9.prev = _context9.next) {
                            case 0:
                              this.showLoader = false;
                              _context9.next = 3;
                              return this.SuccessAlert();

                            case 3:
                              this.BackToInitial();

                            case 4:
                            case "end":
                              return _context9.stop();
                          }
                        }
                      }, _callee9, this);
                    }));
                  },
                  error: function error(err) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(_this10, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee10() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee10$(_context10) {
                        while (1) {
                          switch (_context10.prev = _context10.next) {
                            case 0:
                              this.showLoader = false;
                              _context10.next = 3;
                              return this.FailureAlert(err.error);

                            case 3:
                            case "end":
                              return _context10.stop();
                          }
                        }
                      }, _callee10, this);
                    }));
                  }
                });

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
    }
  }, {
    key: "InfoAlert",
    value: function InfoAlert() {
      this.alert.InfoAlert("\n    <ol type=\"1\">\n      <li>\u064A\u062A\u0645 \u062A\u0637\u0628\u064A\u0642 \u0639\u062F\u062F \u0627\u064A\u0627\u0645 \u062A\u0631\u062D\u064A\u0644 \u0627\u0644\u0623\u0642\u0633\u0627\u0637</li>\n      <li>\u064A\u062A\u0645 \u062A\u0637\u0628\u064A\u0642 \u062A\u0631\u062D\u064A\u0644 \u062A\u0627\u0631\u064A\u062E \u0625\u0633\u062A\u062D\u0642\u0627\u0642 \u0627\u0644\u0642\u0633\u0637 \u0645\u062A\u0649 \u0648\u0642\u0639 \u0641\u0649 \u0627\u0644\u0623\u064A\u0627\u0645</li>\n      <li>\u064A\u062A\u0645 \u062A\u0637\u0628\u064A\u0642 \u062A\u062E\u0637\u0649 \u0627\u0644\u0639\u0637\u0644\u0627\u062A \u0644\u0644\u064A\u0648\u0645</li>\n    </ol>", false);
    }
  }, {
    key: "FailureAlert",
    value: function FailureAlert(message) {
      this.alert.showAlertError(message, false);
    }
  }, {
    key: "SuccessAlert",
    value: function SuccessAlert() {
      this.alert.showAlertInformation("\u0627\u0646\u062A\u0647\u062A \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0628\u0646\u062C\u0627\u062D", true);
    }
  }, {
    key: "GetDocActions",
    value: function GetDocActions() {
      var _this11 = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/LoanApplications/GetDocActions").subscribe({
        next: function next(data) {
          _this11.docActions = data.filter(function (action) {
            return action.action_id != 0;
          });
          _this11.showLoader = false;
        },
        error: function error(err) {
          _this11.showLoader = false;
        }
      });
    }
  }, {
    key: "LoadData",
    value: function LoadData(refresh) {
      var _this12 = this;

      this.references.getStaticValueById(73).then(function (data) {
        _this12.overdraftActiveDbFlag = data.value === "1" ? true : false;
      });
      this.references.getLoanTypeCategories().then(function (data) {
        if (_this12.overdraftActiveDbFlag) {
          _this12.loanTypeCategories = data;
        } else {
          _this12.loanTypeCategories = data.filter(function (x) {
            return x.ref_code != "3";
          });
        }
      });
      this.references.getOverDraftBlockFrom().then(function (data) {
        _this12.overDraftBlockFromModal = data;
      });
      this.references.getOverDraftChargesType().then(function (data) {
        _this12.overDraftChargesTypeModal = data;
      });
      this.references.getOverDraftInterestOn().then(function (data) {
        _this12.overDraftInterestOnModal = data;
      });
      this.references.getOverDraftPenaltyOn().then(function (data) {
        _this12.overDraftPenaltyOnModal = data;
      });
      this.references.getOverDraftPenaltyPeriodType().then(function (data) {
        _this12.overDraftPenaltyPeriodTypeModal = data;
      });
      this.http.get(this.env.API_URL + "api/Settings/WorkFlowAllowed").subscribe({
        next: function next(data) {
          _this12.workflowAllowed = data;
          _this12.showLoader = false;
        },
        error: function error(err) {
          _this12.loanTypes = [];
          _this12.showLoader = false;
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/Loan/GetAllLoanTypes?pageNo=".concat(this.page, "&pageSize=").concat(this.pageSize)).subscribe({
        next: function next(data) {
          _this12.loanTypes = data["result"];
          _this12.resultsCount = data["count"];
          _this12.showLoader = false;
        },
        error: function error(err) {
          _this12.loanTypes = [];
          _this12.showLoader = false;
          console.log(err);
        }
      });
      this.GetAllJobs();
      this.GetDocActions();
      this.http.get(this.env.API_URL + "api/Loan/GetLoanCalcMethods").subscribe({
        next: function next(data) {
          _this12.calcMethods = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/StaticRef/GetPeriodTypes").subscribe({
        next: function next(data) {
          _this12.periodTypes = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/StaticRef/GetAutoPaymentDirections").subscribe({
        next: function next(data) {
          _this12.autoPayDirections = data;
        },
        error: function error(err) {
          console.log(err);
        }
      }); // this.http
      //   .get<StaticRef[]>(this.env.API_URL + "api/StaticRef/GetLoanProducts")
      //   .subscribe({
      //     next: (data) => {
      //       this.loanProducts = data;
      //     },
      //     error: (err) => {
      //       console.log(err);
      //     },
      //   });

      this.http.get(this.env.API_URL + "api/StaticRef/GetLoanInt").subscribe({
        next: function next(data) {
          _this12.loanIntRtTypes = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/StaticRef/GetLoanInt2").subscribe({
        next: function next(data) {
          _this12.loanIntRt2Types = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/StaticRef/GetLoanInt2Deduct").subscribe({
        next: function next(data) {
          _this12.loanIntDeductTypes = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/StaticRef/GetLoanAppChargePercentageTypes").subscribe({
        next: function next(data) {
          _this12.appChargeTypes = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/StaticRef/GetApproximationTypes").subscribe({
        next: function next(data) {
          _this12.approxTypes = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/StaticRef/GetFillAmountFirstOptions").subscribe({
        next: function next(data) {
          _this12.fillAmountFirstTypes = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/StaticRef/GetClientRiskStatusTypes").subscribe({
        next: function next(data) {
          _this12.clientRiskStatusTypes = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/StaticRef/GetIncludeRescheduleTypes").subscribe({
        next: function next(data) {
          _this12.loanRescheduleTypes = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/StaticRef/GetHolidaySkipTypes").subscribe({
        next: function next(data) {
          _this12.holidaySkipTypes = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/StaticRef/GetInterestPeriodTypes").subscribe({
        next: function next(data) {
          _this12.interestPeriodTypes = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/StaticRef/GetPenaltyTypes").subscribe({
        next: function next(data) {
          _this12.penaltyTypes = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/StaticRef/GetPenaltyCalcTypes").subscribe({
        next: function next(data) {
          _this12.penaltyCalcTypes = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/StaticAction/GetPenaltyStaticAction").subscribe({
        next: function next(data) {
          _this12.penaltyStaticAction = data;
        },
        error: function error(err) {
          console.log(err);
        }
      }); // Down Payment

      this.http.get(this.env.API_URL + "api/StaticRef/GetDownPaymentStaticRef").subscribe({
        next: function next(data) {
          _this12.downPaymetModal = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/StaticRef/GetDownPaymentTypesStaticRef").subscribe({
        next: function next(data) {
          _this12.downPaymetTypesModal = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
    }
  }, {
    key: "goLast",
    value: function goLast() {
      if (this.page != this.totalPages) {
        this.page = this.totalPages;
      }
    }
  }, {
    key: "nextPage",
    value: function nextPage() {
      if (this.totalPages > this.page) {
        this.page++;
      }
    }
  }, {
    key: "prevPage",
    value: function prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    }
  }, {
    key: "goFirst",
    value: function goFirst() {
      if (this.page != 1) {
        this.page = 1;
      }
    }
  }, {
    key: "changePage",
    value: function changePage(newPage) {
      this.page = newPage;
    }
  }, {
    key: "StepSubmit",
    value: function StepSubmit(create) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee12() {
        var _this13 = this;

        var step, foundIndex;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!this.stepDetails.valid) {
                  _context12.next = 5;
                  break;
                }

                step = {
                  org_code: this.typeChosen !== undefined && this.typeChosen !== null ? this.typeChosen.org_code : null,
                  loan_type_code: this.typeChosen !== undefined && this.typeChosen !== null ? parseInt(this.typeChosen.loan_type_code) : null,
                  next_step: this.stepDetailsControls.nextStep.value == -1 ? null : this.stepDetailsControls.nextStep.value,
                  step_id: create ? this.steps.reduce(function (highest, value) {
                    return highest = highest > value.step_id ? highest : value.step_id;
                  }, 0) + 1 : this.selectedStep.step_id,
                  job_id: parseInt(this.stepDetailsControls.job.value),
                  step_name: this.stepDetailsControls.stepName.value,
                  step_days: this.stepDetailsControls.stepDays.value,
                  step_hours: this.stepDetailsControls.stepHours.value,
                  step_minutes: this.stepDetailsControls.stepMinutes.value,
                  enable_accept: this.ConvertBooleanToInt(Array.from(this.stepDetailsControls.actions.value).includes(1)),
                  enable_reject: this.ConvertBooleanToInt(Array.from(this.stepDetailsControls.actions.value).includes(2)),
                  enable_accept_with_edit: this.ConvertBooleanToInt(Array.from(this.stepDetailsControls.actions.value).includes(3)),
                  enable_reverse: this.ConvertBooleanToInt(Array.from(this.stepDetailsControls.actions.value).includes(4)),
                  enable_freeze: this.ConvertBooleanToInt(Array.from(this.stepDetailsControls.actions.value).includes(5)),
                  enable_exception: this.ConvertBooleanToInt(Array.from(this.stepDetailsControls.actions.value).includes(7)),
                  location_required: this.stepDetailsControls.locationRequired.value !== null ? this.ConvertBooleanToInt(this.stepDetailsControls.locationRequired.value) : 0
                };

                if (create) {
                  this.steps = this.steps.concat([step]);
                  this.processDocumentSubmission(this.steps);
                } else {
                  this.steps = this.steps.filter(function (x) {
                    return x.step_id != _this13.selectedStep.step_id;
                  });
                  this.steps = this.steps.concat([step]).sort(function (n1, n2) {
                    return n1.step_id - n2.step_id;
                  });
                  this.documentsInformation.documentsByStep.find(function (x) {
                    return x.stepId === _this13.selectedStep.step_id && x.loanTypeCode === _this13.selectedStep.loan_type_code;
                  }).jobId = parseInt(this.stepDetailsControls.job.value);
                }

                _context12.next = 9;
                break;

              case 5:
                foundIndex = this.findIndexOfSpecificStepFromDocumentsArray(0, 0, 0);

                if (foundIndex !== -1) {
                  this.documentsInformation.documentsByStep.splice(foundIndex, 1);
                }

                _context12.next = 9;
                return this.FailureAlert("بيانات الخطوة غير صحيحة");

              case 9:
                this.isStepDetailsSubmitted = true;
                console.log("this.steps", this.steps);

              case 11:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
    }
  }, {
    key: "cancelCreateStep",
    value: function cancelCreateStep() {
      this.documentsInformation.documentsByStep.pop();
      this.createStepModal.dismiss(null, "cancel");
    }
  }, {
    key: "confirmCreateStep",
    value: function confirmCreateStep() {
      this.StepSubmit(true);
      this.createStepModal.dismiss(null, "confirm");
    }
  }, {
    key: "cancelEditStep",
    value: function cancelEditStep() {
      this.editStepModal.dismiss(null, "cancel");
    }
  }, {
    key: "confirmEditStep",
    value: function confirmEditStep() {
      this.StepSubmit(false);
      this.editStepModal.dismiss(null, "confirm");
    }
  }, {
    key: "onDidDismiss",
    value: function onDidDismiss(event) {
      var ev = event;
      this.stepDetails = this.formBuilder.group({
        stepName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
        job: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
        nextStep: [""],
        stepDays: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
        stepHours: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
        stepMinutes: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
        actions: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
        locationRequired: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]]
      });
      this.selectedStep = null;
      this.isEditModalOpen = false;
    }
  }, {
    key: "onWillPresentEdit",
    value: function onWillPresentEdit(event) {
      if (this.selectedStep != undefined && this.selectedStep != null) {
        this.stepDetails = this.formBuilder.group({
          stepName: [this.selectedStep.step_name == null ? "" : this.selectedStep.step_name, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
          job: [this.selectedStep.job_id == null ? null : this.selectedStep.job_id.toString(), [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
          nextStep: [this.selectedStep.next_step == null ? -1 : this.selectedStep.next_step],
          stepDays: [this.selectedStep.step_days == null ? 0 : this.selectedStep.step_days, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
          stepHours: [this.selectedStep.step_hours == null ? 0 : this.selectedStep.step_hours, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
          stepMinutes: [this.selectedStep.step_minutes == null ? 0 : this.selectedStep.step_minutes, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
          actions: [this.getStepActions(this.selectedStep), [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
          locationRequired: [this.selectedStep.location_required == null ? 0 : this.selectedStep.location_required, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]]
        });
      } else {
        this.stepDetails = this.formBuilder.group({
          stepName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
          job: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
          nextStep: [-1],
          stepDays: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
          stepHours: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
          stepMinutes: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
          actions: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]],
          locationRequired: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]]
        });
      }
    }
  }, {
    key: "GetJobName",
    value: function GetJobName(jobId) {
      if (jobId !== undefined && jobId !== null) return this.jobs.find(function (x) {
        return x.job_id == jobId;
      }).job_name;else return "";
    }
  }, {
    key: "GetStepName",
    value: function GetStepName(stepId) {
      if (stepId !== undefined && stepId !== null && stepId != -1) return this.steps.find(function (x) {
        return x.step_id == stepId;
      }).step_name;else return "";
    }
  }, {
    key: "GetAllJobs",
    value: function GetAllJobs() {
      var _this14 = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/Job/GetAllJobsForSteps").subscribe({
        next: function next(data) {
          _this14.jobs = data;
          _this14.exception_jobs = data.filter(function (x) {
            return (x.job_type == 1 || x.job_type == 0) && x.job_id > -2;
          });
          _this14.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this14.showLoader = false;
        }
      });
    }
  }, {
    key: "OpenEditModal",
    value: function OpenEditModal(step) {
      this.selectedStep = step;
      this.isEditModalOpen = true;
    }
  }, {
    key: "ConvertBooleanToInt",
    value: function ConvertBooleanToInt(intIn) {
      switch (typeof intIn) {
        case "boolean":
          return intIn == true ? 1 : 0;

        case "number":
          return intIn;

        default:
          return 0;
      }
    }
  }, {
    key: "RemoveStep",
    value: function RemoveStep(step) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee13() {
        var stepIndexToDelete;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (!(step.step_id != 0)) {
                  _context13.next = 7;
                  break;
                }

                this.steps = this.steps.filter(function (x) {
                  return x.step_id != step.step_id;
                });
                this.steps.forEach(function (x) {
                  if (x.next_step === step.step_id) {
                    x.next_step = null;
                  }
                });
                stepIndexToDelete = this.findIndexOfSpecificStepFromDocumentsArray(step.step_id, step.job_id, step.loan_type_code);
                this.documentsInformation.documentsByStep.splice(stepIndexToDelete, 1);
                _context13.next = 9;
                break;

              case 7:
                _context13.next = 9;
                return this.FailureAlert("لا يمكن إزالة الخطوة الأولية");

              case 9:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
    }
  }, {
    key: "getStepActions",
    value: function getStepActions(step) {
      var result = [];
      if (step.enable_accept == 1) result = result.concat(1);
      if (step.enable_reject == 1) result = result.concat(2);
      if (step.enable_accept_with_edit == 1) result = result.concat(3);
      if (step.enable_reverse == 1) result = result.concat(4);
      if (step.enable_freeze == 1) result = result.concat(5);
      if (step.enable_exception == 1) result = result.concat(7);
      return result;
    }
  }, {
    key: "clientRiskStatusChange",
    value: function clientRiskStatusChange() {
      var clientRiskStatus = this.loanTypeDetails.value.clientRiskStatus;

      if (clientRiskStatus === "1") {
        this.loanTypeDetails.patchValue({
          loanIntRt: 0
        });
      }
    }
  }, {
    key: "createStepBtn",
    value: function createStepBtn() {
      this.selectedStep = {
        step_id: 0,
        job_id: 0,
        loan_type_code: 0
      };
      this.addingNewStepInsideDocuments(this.selectedStep.step_id, this.selectedStep.job_id, this.selectedStep.loan_type_code);
    }
  }, {
    key: "confirmDocumentRequiredModal",
    value: function confirmDocumentRequiredModal() {
      var _a;

      this.documentRequiredModalObject.isOpen = false;
      var currentJobId = this.selectedStep.job_id;
      var currentLoanTypeCode = this.selectedStep.loan_type_code;
      var currentStepId = this.selectedStep.step_id;
      var selectedStep = this.documentsInformation.documentsByStep.find(function (x) {
        return x.stepId === currentStepId && x.jobId === currentJobId && x.loanTypeCode === currentLoanTypeCode;
      });
      var selectedStepHasAnyDocuments = ((_a = selectedStep === null || selectedStep === void 0 ? void 0 : selectedStep.selectedDocuments) === null || _a === void 0 ? void 0 : _a.length) > 0;

      if (!selectedStepHasAnyDocuments) {
        selectedStep.isRequiredFlag = false; // this.stepDetails.patchValue({ documentRequiredCheckbox: false });
      }
    } //#endregion
    //#region Document Required Methods

  }, {
    key: "toggleIsRequiredForDocuments",
    value: function toggleIsRequiredForDocuments() {
      var currentStepId = this.selectedStep.step_id;
      var currentJobId = this.selectedStep.job_id;
      var currentLoanTypeCode = this.selectedStep.loan_type_code;
      var selectedStep = this.documentsInformation.documentsByStep.find(function (x) {
        return x.stepId === currentStepId && x.loanTypeCode === currentLoanTypeCode && x.jobId === currentJobId;
      });
      console.log("selectedStep", selectedStep);
      selectedStep.isRequiredFlag = !selectedStep.isRequiredFlag;

      if (selectedStep.isRequiredFlag && selectedStep.selectedDocuments.length === 0) {
        this.documentRequiredModalObject.isOpen = true; // to open the modal if the check is true and nothing documents is selected
      }

      if (!selectedStep.isRequiredFlag) {
        selectedStep.selectedDocuments = [];
      }
    }
  }, {
    key: "responseOfLoanTypeStepsDocuments",
    value: function responseOfLoanTypeStepsDocuments(documentsStep) {
      var _this15 = this;

      var documentsData = documentsStep[0];

      if (!!(documentsData === null || documentsData === void 0 ? void 0 : documentsData.details)) {
        documentsData.details.forEach(function (document) {
          var stepId = document.stepId;
          var jobId = document.jobId;

          var foundIndex = _this15.findIndexOfSpecificStepFromDocumentsArray(stepId, jobId, documentsData.loanTypeCode);

          if (foundIndex !== -1) {
            _this15.documentsInformation.documentsByStep[foundIndex] = {
              jobId: jobId,
              stepId: stepId,
              isRequiredFlag: true,
              loanTypeCode: documentsData.loanTypeCode,
              selectedDocuments: document.selectedDocuments.map(function (selectedDoc) {
                return {
                  isThisDocumentMustEnter: selectedDoc.required === 1,
                  selectedDocumentTypeCode: selectedDoc.documentTypeCode.toString()
                };
              })
            };
          }
        });
      }
    }
  }, {
    key: "insertStepFromForm",
    value: function insertStepFromForm(step) {
      var tempStep = this.documentsInformation.documentsByStep.find(function (x) {
        return x.jobId === 0 && x.stepId === 0 && x.loanTypeCode === 0;
      });
      this.documentsInformation.documentsByStep.pop();
      var lastStepId = step.step_id;
      var lastJobId = step.job_id;
      var lastLoanTypeCode = step.loan_type_code;
      this.addingNewStepInsideDocuments(lastStepId, lastJobId, lastLoanTypeCode);
      var selectedStep = this.documentsInformation.documentsByStep.find(function (x) {
        return x.stepId === lastStepId && x.jobId === lastJobId && x.loanTypeCode === lastLoanTypeCode;
      });
      selectedStep = Object.assign(Object.assign({}, selectedStep), {
        isRequiredFlag: tempStep.isRequiredFlag,
        selectedDocuments: tempStep.selectedDocuments
      });
      var foundIndex = this.findIndexOfSpecificStepFromDocumentsArray(lastStepId, lastJobId, lastLoanTypeCode);

      if (foundIndex !== -1) {
        this.documentsInformation.documentsByStep[foundIndex] = Object.assign({}, selectedStep);
      }
    }
  }, {
    key: "findIndexOfSpecificStepFromDocumentsArray",
    value: function findIndexOfSpecificStepFromDocumentsArray(stepId, jobId, loanTypeCode) {
      return this.documentsInformation.documentsByStep.findIndex(function (x) {
        return x.stepId === stepId && x.jobId === jobId && x.loanTypeCode === loanTypeCode;
      });
    }
  }, {
    key: "processDocumentSubmission",
    value: function processDocumentSubmission(steps) {
      var _this16 = this;

      if (steps.length === this.documentsInformation.documentsByStep.length) {
        this.insertStepFromForm(steps[steps.length - 1]);
      } else {
        steps.forEach(function (x) {
          return _this16.addingNewStepInsideDocuments(x.step_id, x.job_id, x.loan_type_code);
        });
      }
    }
  }, {
    key: "isDocumentTypeCodeIsSelectedInAnotherStep",
    value: function isDocumentTypeCodeIsSelectedInAnotherStep(document) {
      var currentStepId = this.selectedStep.step_id;
      var currentLoanTypeCode = this.selectedStep.loan_type_code;
      var currentJobId = this.selectedStep.job_id;
      var documentTypeCode = document.documentTypeCode;
      var allStepsExceptCurrentStep = this.documentsInformation.documentsByStep.filter(function (x) {
        return x.jobId !== currentJobId;
      });
      var isDocumentTypeCodeIsSelectedInAnotherStep = allStepsExceptCurrentStep.some(function (x) {
        return x.selectedDocuments.some(function (selectedDoc) {
          return selectedDoc.selectedDocumentTypeCode === documentTypeCode;
        });
      }); // const isDocumentTypeCodeIsSelectedInAnotherStep =
      //   this.documentsInformation.documentsByStep.some((x) => {
      //     return (
      //       x.stepId !== currentStepId &&
      //       x.jobId !== currentJobId &&
      //       x.loanTypeCode === currentLoanTypeCode &&
      //       x.selectedDocuments.some((x) => {
      //         return x.selectedDocumentTypeCode === documentTypeCode;
      //       })
      //     );
      //   });

      return isDocumentTypeCodeIsSelectedInAnotherStep;
    }
  }, {
    key: "isDocumentTypeCodeIsRequiredInAnotherStep",
    value: function isDocumentTypeCodeIsRequiredInAnotherStep(document) {
      var currentJobId = this.selectedStep.job_id;
      var documentTypeCode = document.documentTypeCode;
      var allStepsExceptCurrentStep = this.documentsInformation.documentsByStep.filter(function (x) {
        return x.jobId !== currentJobId;
      });
      var isDocumentTypeCodeIsRequiredInAnotherStep = allStepsExceptCurrentStep.some(function (x) {
        return x.selectedDocuments.some(function (selectedDoc) {
          return selectedDoc.selectedDocumentTypeCode === documentTypeCode && selectedDoc.isThisDocumentMustEnter;
        });
      });
      return isDocumentTypeCodeIsRequiredInAnotherStep;
    } //#endregion

  }, {
    key: "changingIscoreAutoRejectStatus",
    value: function changingIscoreAutoRejectStatus(event) {
      if (event.detail.checked === false) {
        this.loanTypeDetails.patchValue({
          iscoreMinScore: null
        });
        this.loanTypeDetails.controls["iscoreMinScore"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.nullValidator]);
        this.loanTypeDetails.controls["iscoreMinScore"].updateValueAndValidity();
      } else {
        this.loanTypeDetails.controls["iscoreMinScore"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]);
        this.loanTypeDetails.controls["iscoreMinScore"].updateValueAndValidity();
      }
    }
  }, {
    key: "FixAutoPayInst",
    value: function FixAutoPayInst() {
      if (this.loanTypeDetailsControls.autoPayNoInst.value >= this.loanTypeDetailsControls.minInst.value) {
        this.loanTypeDetails.patchValue({
          autoPayNoInst: this.loanTypeDetailsControls.minInst.value - 1 < 0 ? 0 : this.loanTypeDetailsControls.minInst.value - 1
        });
      }
    }
  }, {
    key: "isProvisionPeriodValid",
    get: function get() {
      return Number(this.loanTypeDetailsControls.provisionPeriod1.value) <= Number(this.loanTypeDetailsControls.provisionPeriod2.value) && Number(this.loanTypeDetailsControls.provisionPeriod2.value) <= Number(this.loanTypeDetailsControls.provisionPeriod3.value) && Number(this.loanTypeDetailsControls.provisionPeriod3.value) <= Number(this.loanTypeDetailsControls.provisionPeriod4.value) && Number(this.loanTypeDetailsControls.provisionPeriod4.value) <= Number(this.loanTypeDetailsControls.provisionPeriod5.value) && Number(this.loanTypeDetailsControls.provisionPeriod5.value) <= Number(this.loanTypeDetailsControls.provisionPeriod6.value);
    }
  }, {
    key: "isLoanAmountRangeValid",
    get: function get() {
      return this.loanTypeDetailsControls.minLoan.value <= this.loanTypeDetailsControls.maxLoan.value;
    }
  }, {
    key: "isLoanInstRangeValid",
    get: function get() {
      return Number(this.loanTypeDetailsControls.minInst.value) <= Number(this.loanTypeDetailsControls.maxInst.value);
    }
  }, {
    key: "isAgeRangeValid",
    get: function get() {
      return this.loanTypeDetailsControls.minAge.value <= this.loanTypeDetailsControls.maxAge.value;
    }
  }, {
    key: "isAppChargeRangeValid",
    get: function get() {
      return this.loanTypeDetailsControls.appChargeRtMin.value <= this.loanTypeDetailsControls.appChargeRtMax.value;
    }
  }, {
    key: "areFormValueRangesLogical",
    get: function get() {
      return this.isProvisionPeriodValid && this.isLoanAmountRangeValid && this.isLoanInstRangeValid && this.isAgeRangeValid && this.isAppChargeRangeValid;
    } //#region OverDraft

  }, {
    key: "loanTypeCatChange",
    value: function loanTypeCatChange(value) {
      var customEvent = value;
      var loanTypeCat = parseInt(customEvent.detail.value);
      var isMicro = loanTypeCat === 1;
      var isConsumerLoan = loanTypeCat === 2;
      var isOverDraft = loanTypeCat === 3;
      this.loanTypeDetails.patchValue({
        loanProduct: isConsumerLoan ? "3" : "0"
      });
      this.useOverDraft(isOverDraft);
    }
  }, {
    key: "useOverDraft",
    value: function useOverDraft(use) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;

      this.overDraftAllowed = use;

      if (use) {
        this.loanTypeDetails.patchValue({
          useWorkflow: 1,
          minInst: 999,
          maxInst: 999,
          instNo: 999,
          autoPayNoInst: 0,
          periodLength: 1,
          overDraftBlockFrom: "1",
          overDraftInterestOn: ((_b = (_a = this.loanTypeDetails) === null || _a === void 0 ? void 0 : _a.controls["overDraftInterestOn"]) === null || _b === void 0 ? void 0 : _b.value) === "0" ? null : (_d = (_c = this.loanTypeDetails) === null || _c === void 0 ? void 0 : _c.controls["overDraftInterestOn"]) === null || _d === void 0 ? void 0 : _d.value,
          overDraftPenaltyOn: ((_f = (_e = this.loanTypeDetails) === null || _e === void 0 ? void 0 : _e.controls["overDraftPenaltyOn"]) === null || _f === void 0 ? void 0 : _f.value) === "0" ? null : (_h = (_g = this.loanTypeDetails) === null || _g === void 0 ? void 0 : _g.controls["overDraftPenaltyOn"]) === null || _h === void 0 ? void 0 : _h.value,
          overDraftChargesType: ((_k = (_j = this.loanTypeDetails) === null || _j === void 0 ? void 0 : _j.controls["overDraftChargesType"]) === null || _k === void 0 ? void 0 : _k.value) === "0" ? "1" : (_m = (_l = this.loanTypeDetails) === null || _l === void 0 ? void 0 : _l.controls["overDraftChargesType"]) === null || _m === void 0 ? void 0 : _m.value,
          overDraftPenaltyPeriodType: ((_p = (_o = this.loanTypeDetails) === null || _o === void 0 ? void 0 : _o.controls["overDraftPenaltyPeriodType"]) === null || _p === void 0 ? void 0 : _p.value) === "0" ? "1" : (_r = (_q = this.loanTypeDetails) === null || _q === void 0 ? void 0 : _q.controls["overDraftPenaltyPeriodType"]) === null || _r === void 0 ? void 0 : _r.value
        });
        this.initializeOverDraftPriorities();
      }

      this.setOverDraftValidations(use);
    }
  }, {
    key: "reorderItems",
    value: function reorderItems(event) {
      this.filteredPaymentPriorities = event.detail.complete(this.filteredPaymentPriorities);
      this.loanTypeDetails.patchValue({
        overDraftPrinciplePaymentPriority: this.filteredPaymentPriorities.findIndex(function (x) {
          return x.name == "الاصل";
        }) + 1,
        overDraftInterestPaymentPriority: this.filteredPaymentPriorities.findIndex(function (x) {
          return x.name == "الفائدة";
        }) + 1,
        overDraftPenaltyPaymentPriority: this.filteredPaymentPriorities.findIndex(function (x) {
          return x.name == "الغرامة";
        }) + 1,
        overDraftChargesPaymentPriority: this.filteredPaymentPriorities.findIndex(function (x) {
          return x.name == "الرسوم";
        }) + 1
      });
    }
  }, {
    key: "initializeOverDraftPriorities",
    value: function initializeOverDraftPriorities() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;

      var od_interest_payment_priority = (_b = (_a = this.typeChosen) === null || _a === void 0 ? void 0 : _a.od_interest_payment_priority) !== null && _b !== void 0 ? _b : (_c = this.paymentPriorities.find(function (x) {
        return x.name === "الفائدة";
      })) === null || _c === void 0 ? void 0 : _c.id;
      var od_penalty_payment_priority = (_e = (_d = this.typeChosen) === null || _d === void 0 ? void 0 : _d.od_penalty_payment_priority) !== null && _e !== void 0 ? _e : (_f = this.paymentPriorities.find(function (x) {
        return x.name === "الغرامة";
      })) === null || _f === void 0 ? void 0 : _f.id;
      var od_charges_payment_priority = (_h = (_g = this.typeChosen) === null || _g === void 0 ? void 0 : _g.od_charges_payment_priority) !== null && _h !== void 0 ? _h : (_j = this.paymentPriorities.find(function (x) {
        return x.name === "الرسوم";
      })) === null || _j === void 0 ? void 0 : _j.id;
      var od_principle_payment_priority = (_l = (_k = this.typeChosen) === null || _k === void 0 ? void 0 : _k.od_principle_payment_priority) !== null && _l !== void 0 ? _l : (_m = this.paymentPriorities.find(function (x) {
        return x.name === "الاصل";
      })) === null || _m === void 0 ? void 0 : _m.id;
      this.filteredPaymentPriorities = [{
        name: "الاصل",
        id: od_principle_payment_priority
      }, {
        name: "الفائدة",
        id: od_interest_payment_priority
      }, {
        name: "الغرامة",
        id: od_penalty_payment_priority
      }, {
        name: "الرسوم",
        id: od_charges_payment_priority
      }].sort(function (a, b) {
        return a.id - b.id;
      });
      this.loanTypeDetails.patchValue({
        overDraftPrinciplePaymentPriority: od_principle_payment_priority,
        overDraftInterestPaymentPriority: od_interest_payment_priority,
        overDraftPenaltyPaymentPriority: od_penalty_payment_priority,
        overDraftChargesPaymentPriority: od_charges_payment_priority
      });
    }
  }, {
    key: "toggleOverDraftPrioritiesModal",
    value: function toggleOverDraftPrioritiesModal(visible) {
      this.isOverDraftPrioritiesOpen = visible;
    }
  }, {
    key: "overDraftChargeTypeChanging",
    value: function overDraftChargeTypeChanging(value) {
      var chargeTypeValue = value.detail.value;
      this.loanTypeDetails.patchValue({
        overDraftChargesRate: null,
        overDraftChargesAmount: null
      });
      this.loanTypeDetails.controls["overDraftChargesRate"].setValidators(chargeTypeValue === "1" ? [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required] : []);
      this.loanTypeDetails.controls["overDraftChargesAmount"].setValidators(chargeTypeValue === "2" ? [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required] : []);
      this.loanTypeDetails.controls["overDraftChargesRate"].updateValueAndValidity();
      this.loanTypeDetails.controls["overDraftChargesAmount"].updateValueAndValidity();
    }
  }, {
    key: "setOverDraftValidations",
    value: function setOverDraftValidations(check) {
      var _this17 = this;

      var _a, _b, _c, _d;

      var fields = ["overDraftInterestOn", "overDraftPenaltyRate", "overDraftPenaltyOn", "overDraftPenaltyStartDays", "overDraftChargesType", "overDraftDaysToBlock", "overDraftBlockFrom", "overDraftPrinciplePaymentPriority", "overDraftInterestPaymentPriority", "overDraftPenaltyPaymentPriority", "overDraftChargesPaymentPriority", "overDraftPenaltyPeriodType"];

      if (check) {
        var overDraftChargesTypeValue = (_b = (_a = this.loanTypeDetails) === null || _a === void 0 ? void 0 : _a.controls["overDraftChargesType"]) === null || _b === void 0 ? void 0 : _b.value;
        console.log((_d = (_c = this.loanTypeDetails) === null || _c === void 0 ? void 0 : _c.controls["overDraftChargesType"]) === null || _d === void 0 ? void 0 : _d.value);

        if (overDraftChargesTypeValue === "1") {
          fields.push("overDraftChargesRate");
        } else {
          fields.push("overDraftChargesAmount");
        }
      } else {
        fields.push("overDraftChargesRate", "overDraftChargesAmount");
      }

      console.log("fields", fields);
      fields.forEach(function (field) {
        var selectedField = _this17.loanTypeDetails.controls[field];

        if (check) {
          selectedField.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]);
        } else {
          selectedField.removeValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]);
        }

        selectedField.updateValueAndValidity();
      });
    }
  }, {
    key: "convertToInt",
    value: function convertToInt(value) {
      if (value === null || value === undefined) return 0;
      return Number(value);
    }
  }, {
    key: "downPaymentOnChange",
    value: function downPaymentOnChange() {
      if (this.downPayment.value == 1 || this.downPayment.value == 2) {
        this.haveDownPayment = true;
        this.loanTypeDetails.controls["down_payment_type"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]);
        this.loanTypeDetails.controls["down_payment_type"].updateValueAndValidity();
      } else if (this.downPayment.value == 0) {
        // down_paymey = 0 لا يتم تطبيقها
        this.loanTypeDetails.patchValue({
          down_payment_type: null,
          down_payment_perc: null,
          down_payment_edit: null
        });
        this.loanTypeDetails.controls["down_payment_type"].removeValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]);
        this.loanTypeDetails.controls["down_payment_type"].updateValueAndValidity();
        this.downPaymentTypeIsPerc = false;
        this.haveDownPayment = false;
      }
    }
  }, {
    key: "downPaymentTypeOnChange",
    value: function downPaymentTypeOnChange() {
      if (this.downPaymentType.value == 1) {
        this.downPaymentTypeIsPerc = true;
        this.loanTypeDetails.controls["down_payment_perc"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]);
        this.loanTypeDetails.controls["down_payment_perc"].updateValueAndValidity();
      } else {
        this.downPaymentTypeIsPerc = false;
        this.loanTypeDetails.controls["down_payment_perc"].removeValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]);
        this.loanTypeDetails.controls["down_payment_perc"].updateValueAndValidity();
        this.loanTypeDetails.patchValue({
          down_payment_perc: null,
          down_payment_edit: null
        });
      }
    }
  }, {
    key: "downPaymentEditChecker",
    value: function downPaymentEditChecker(check) {
      if (this.loanTypeDetailsControls.down_payment.value == 0 || this.loanTypeDetailsControls.down_payment_type.value == 2) {
        return null;
      } else {
        return this.ConvertBooleanToInt(check);
      }
    }
  }]);

  return LoanTypesPage;
}();

LoanTypesPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
  }, {
    type: src_app_core_services_document_service__WEBPACK_IMPORTED_MODULE_8__.DocumentService
  }, {
    type: src_app_core_services_loans_service__WEBPACK_IMPORTED_MODULE_9__.LoansService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_10__.MohassilAuthService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_11__.pagingService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_12__.InputMaskingService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_13__.ReferencesService
  }];
};

LoanTypesPage.propDecorators = {
  createStepModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: ["createStepModal"]
  }],
  editStepModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: ["editStepModal"]
  }],
  documentRequiredModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: ["documentRequiredModal"]
  }],
  downPayment: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: ["downPayment"]
  }],
  downPaymentType: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ViewChild,
    args: ["downPaymentType"]
  }]
};
LoanTypesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: "app-loan-types",
  template: _loan_types_page_html_ngResource__WEBPACK_IMPORTED_MODULE_4__,
  styles: [_loan_types_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_5__]
})], LoanTypesPage);


/***/ }),

/***/ 81007:
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-types/loan-types.page.scss?ngResource ***!
  \******************************************************************************/
/***/ (function(module) {

module.exports = ".form-control-error {\n  border-color: #ff3366;\n}\n.form-control-error:hover {\n  border-color: #da0036;\n}\n.input-validator {\n  font-weight: 600;\n  padding-right: 10px;\n  padding-left: 10px;\n  color: #ff3366 !important;\n}\n.input-validator::before {\n  content: \"-\";\n  margin-left: 6px;\n}\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n.flex-wrap {\n  -ms-flex-wrap: wrap !important;\n      flex-wrap: wrap !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -ms-flex-direction: column !important;\n      flex-direction: column !important;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n.h-90 {\n  height: 90% !important;\n}\n.inherit-color {\n  --color: auto !important;\n}\n.table-size {\n  width: 100% !important;\n}\n.size-fit {\n  height: auto !important;\n}\nion-item:not(#accordion-header) {\n  --padding-start: 0 !important;\n  --padding-end: 0 !important;\n  --inner-padding-end: 0 !important;\n  --background: transparent !important;\n  height: -webkit-fit-content !important;\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n  width: 100% !important;\n}\nion-item:not(#accordion-header) ion-select {\n  width: 100% !important;\n  --padding-end: 15px !important;\n  --padding-start: 15px !important;\n}\n.ion-item-padding-start {\n  --padding-start: 0 !important;\n}\n.ion-item-padding-end {\n  --padding-start: 0 !important;\n  --padding-end: 0 !important;\n}\n@media (orientation: portrait) {\n  .info-button-size {\n    width: 100% !important;\n  }\n}\np {\n  color: red;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tdHlwZXMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcbG9hbnNcXGxvYW4tdHlwZXNcXGxvYW4tdHlwZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjtBREFFO0VBQ0UscUJBQUE7QUNFSjtBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDRUo7QURHRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0FKO0FESUE7RUFDRSw4QkFBQTtNQUFBLDBCQUFBO0VBQ0EsK0JBQUE7RUFBQSx3QkFBQTtFQUNBLHFDQUFBO01BQUEsaUNBQUE7RUFDQSxxQkFBQTtNQUFBLHVCQUFBO0FDREY7QURJQTtFQUNFLHNCQUFBO0FDREY7QURJQTtFQUNFLHdCQUFBO0FDREY7QURJQTtFQUNFLHNCQUFBO0FDREY7QURLQTtFQUNFLHVCQUFBO0FDRkY7QURNQTtFQUNFLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFBQSxtQ0FBQTtFQUFBLDhCQUFBO0VBQ0Esc0JBQUE7QUNIRjtBRElFO0VBQ0Usc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0FDRko7QURNQTtFQUNFLDZCQUFBO0FDSEY7QURNQTtFQUNFLDZCQUFBO0VBQ0EsMkJBQUE7QUNIRjtBRFNFO0VBSEY7SUFJSSxzQkFBQTtFQ0xGO0FBQ0Y7QURZQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDVEYiLCJmaWxlIjoibG9hbi10eXBlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sLWVycm9yIHtcclxuICBib3JkZXItY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjE4LCAwLCA1NCk7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXQtdmFsaWRhdG9yIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKSAhaW1wb3J0YW50O1xyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIi1cIjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgNTEsIDEwMikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5mbGV4LXdyYXAge1xyXG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oLTkwIHtcclxuICBoZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5oZXJpdC1jb2xvciB7XHJcbiAgLS1jb2xvcjogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUtc2l6ZSB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAvLyBoZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2l6ZS1maXQge1xyXG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIC8vIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taXRlbTpub3QoI2FjY29yZGlvbi1oZWFkZXIpIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBpb24tc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5pb24taXRlbS1wYWRkaW5nLXN0YXJ0IHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlvbi1pdGVtLXBhZGRpbmctZW5kIHtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcclxuICAtLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbmZvLWJ1dHRvbi1zaXplIHtcclxuICBAbWVkaWEgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICB9XHJcbiAgQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAqIHtcclxuLy8gICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luOiAwO1xyXG59IiwiLmZvcm0tY29udHJvbC1lcnJvciB7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzM2Njtcbn1cbi5mb3JtLWNvbnRyb2wtZXJyb3I6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNkYTAwMzY7XG59XG5cbi5pbnB1dC12YWxpZGF0b3Ige1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZmYzMzY2ICFpbXBvcnRhbnQ7XG59XG4uaW5wdXQtdmFsaWRhdG9yOjpiZWZvcmUge1xuICBjb250ZW50OiBcIi1cIjtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmZvcm0tbGFiZWwtcmVxdWlyZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCIqXCI7XG4gIGNvbG9yOiAjZmYzMzY2ICFpbXBvcnRhbnQ7XG59XG5cbi5mbGV4LXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaC05MCB7XG4gIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG59XG5cbi5pbmhlcml0LWNvbG9yIHtcbiAgLS1jb2xvcjogYXV0byAhaW1wb3J0YW50O1xufVxuXG4udGFibGUtc2l6ZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5zaXplLWZpdCB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbTpub3QoI2FjY29yZGlvbi1oZWFkZXIpIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1lbmQ6IDAgIWltcG9ydGFudDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbmlvbi1pdGVtOm5vdCgjYWNjb3JkaW9uLWhlYWRlcikgaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1lbmQ6IDE1cHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24taXRlbS1wYWRkaW5nLXN0YXJ0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5pb24taXRlbS1wYWRkaW5nLWVuZCB7XG4gIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctZW5kOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5pbmZvLWJ1dHRvbi1zaXplIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5cbnAge1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW46IDA7XG59Il19 */";

/***/ }),

/***/ 75217:
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/loans/loan-types/loan-types.page.html?ngResource ***!
  \******************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\r\n<div *ngIf=\"initialLoad\" class=\"card\">\r\n  <div class=\"card-header text-center\">اختيار نوع القرض</div>\r\n  <div *ngIf=\"loanTypes !== undefined && loanTypes !== null && loanTypes.length != 0\">\r\n    <table class=\"card-body table\">\r\n      <thead>\r\n        <th class=\"w-90\"></th>\r\n        <th class=\"w-10\">\r\n          <ion-button (click)=\"InitialActionChosen(null, true)\">\r\n            <ion-icon name=\"add-outline\"></ion-icon>\r\n          </ion-button>\r\n        </th>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let loanType of loanTypes\">\r\n          <td class=\"w-90\">\r\n            <ion-label>{{loanType.loan_type_name}}</ion-label>\r\n          </td>\r\n          <td class=\"w-10\">\r\n            <ion-button (click)=\"InitialActionChosen(loanType, false)\">\r\n              <ion-icon name=\"create-outline\"></ion-icon>\r\n            </ion-button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div *ngIf=\"loanTypes === undefined || loanTypes === null\" class=\"py-2 px-2 text-center\">\r\n    لا يزال يحمل\r\n  </div>\r\n  <div *ngIf=\"loanTypes !== undefined && loanTypes !== null && loanTypes.length == 0\" class=\"py-2 px-2 text-center\">\r\n    <table class=\"card-body table\">\r\n      <thead>\r\n        <th class=\"w-90\">اسم نوع القرض</th>\r\n        <th class=\"w-10\">\r\n          <ion-button (click)=\"InitialActionChosen(null, true)\">\r\n            <ion-icon name=\"add-outline\"></ion-icon>\r\n          </ion-button>\r\n        </th>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td class=\"w-90\">\r\n            <ion-label>لاتوجد بيانات</ion-label>\r\n          </td>\r\n          <td class=\"w-10\"></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<app-pagination [page]=\"page\" [collectionSize]=\"resultsCount\" (pageChange)=\"changePage($event); LoadData(true);\"\r\n  *ngIf=\"initialLoad\"></app-pagination>\r\n\r\n<div *ngIf=\"!initialLoad\" class=\"card\">\r\n  <div class=\"card-header d-flex justify-content-between\">\r\n    <ion-label class=\"align-self-center\" *ngIf=\"!createNewType\">\r\n      تعديل نوع القرض\r\n    </ion-label>\r\n    <ion-label class=\"align-self-center\" *ngIf=\"createNewType\">\r\n      إضافة نوع القرض\r\n    </ion-label>\r\n    <ion-button (click)=\"BackToInitial()\">\r\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n  <!-- Edit/Create loan type -->\r\n  <form (ngSubmit)=\"LoanTypeDetailsSubmit(this.createNewType)\" [formGroup]=\"loanTypeDetails\">\r\n    <ion-accordion-group multiple=\"true\" class=\"card-body px-0\">\r\n      <ion-accordion value=\"generalInfo\">\r\n        <ion-item slot=\"header\" id=\"accordion-header\">\r\n          <ion-label>بيانات عامة عن نوع القرض</ion-label>\r\n        </ion-item>\r\n        <div class=\"row justify-content-center my-2 mx-2\" slot=\"content\">\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.loanTypeName.errors}\">\r\n              <ion-label for=\"loanTypeName\" class=\"col-form-label form-label-required\">\r\n                أسم نوع القرض\r\n              </ion-label>\r\n              <div>\r\n                <ion-item lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"loanTypeName\" formControlName=\"loanTypeName\"></ion-input>\r\n                </ion-item>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.calcMethod.errors}\">\r\n              <ion-label for=\"calcMethod\" class=\"col-form-label form-label-required\">طريقه الحساب</ion-label>\r\n              <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                <ion-select interface=\"popover\" id=\"calcMethod\" formControlName=\"calcMethod\">\r\n                  <ion-select-option *ngFor=\"let calcMethod of calcMethods\" [value]=\"calcMethod.calc_type\">\r\n                    {{calcMethod.calc_method_name}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && (loanTypeDetailsControls.periodLength.errors || loanTypeDetailsControls.periodType.errors)}\">\r\n              <ion-label for=\"periodLength\" class=\"col-form-label form-label-required\">\r\n                فترة السداد كل\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <ion-item class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"periodLength\" formControlName=\"periodLength\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 99, 0)\"\r\n                    [ngClass]=\"{'is-invalid': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.periodLength.errors}\"\r\n                    [disabled]=\"overDraftAllowed\"></ion-input>\r\n                </ion-item>\r\n                <ion-item class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                  <ion-select interface=\"popover\" id=\"periodType\" formControlName=\"periodType\">\r\n                    <ion-select-option *ngFor=\"let periodType of periodTypes\" value=\"{{periodType.ref_code}}\">\r\n                      {{periodType.ref_desc}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && (loanTypeDetailsControls.loanIntRt.errors || loanTypeDetailsControls.loanIntRtType.errors)}\">\r\n              <ion-label for=\"loanIntRt\" class=\"col-form-label form-label-required\">\r\n                نسبه المصاريف الموزعه\r\n              </ion-label>\r\n\r\n              <div class=\"row\">\r\n                <ion-item class=\"d-flex justify-content-between col-sm-4\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"loanIntRt\" formControlName=\"loanIntRt\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\r\n                    [disabled]=\"this.loanTypeDetails.value.clientRiskStatus === '1'\"></ion-input>\r\n                </ion-item>\r\n                <ion-item class=\"d-flex justify-content-between col-sm-4\" lines=\"none\">\r\n                  <ion-select interface=\"popover\" id=\"loanIntRtType\" formControlName=\"loanIntRtType\"\r\n                    [ngClass]=\"{'form-control-error': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.loanIntRtType.errors}\">\r\n                    <ion-select-option *ngFor=\"let loanIntRtType of loanIntRtTypes\" value=\"{{loanIntRtType.ref_code}}\">\r\n                      {{loanIntRtType.ref_desc}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n                <div class=\"col-sm-4 align-self-center d-flex justify-content-end\">\r\n                  <ion-checkbox class=\"align-self-center\" id=\"editLoanIntRt\" formControlName=\"editLoanIntRt\"\r\n                    style=\"margin-left: 5%\"></ion-checkbox>\r\n                  <ion-label for=\"editLoanIntRt\"> السماح بالتعديل </ion-label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && (loanTypeDetailsControls.loanIntRt2.errors || loanTypeDetailsControls.loanIntRt2Type.errors)}\">\r\n              <ion-label for=\"loanIntRt2\" class=\"col-form-label form-label-required\">\r\n                نسبه المصاريف المقدمه\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <ion-item class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"loanIntRt2\" formControlName=\"loanIntRt2\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"></ion-input>\r\n                </ion-item>\r\n                <ion-item class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                  <ion-select interface=\"popover\" id=\"loanIntRt2Type\" formControlName=\"loanIntRt2Type\"\r\n                    [ngClass]=\"{'form-control-error': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.loanIntRt2Type.errors}\">\r\n                    <ion-select-option *ngFor=\"let loanIntRt2Type of loanIntRt2Types\"\r\n                      value=\"{{loanIntRt2Type.ref_code}}\">\r\n                      {{loanIntRt2Type.ref_desc}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.firstInstInt.errors}\">\r\n              <ion-label for=\"firstInstInt\" class=\"col-form-label form-label-required\">\r\n                الفائدة فى اول قسط\r\n              </ion-label>\r\n              <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                <ion-input type=\"text\" id=\"firstInstInt\" formControlName=\"firstInstInt\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"></ion-input>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.loanTypeCat.errors}\">\r\n              <ion-label for=\"loanTypeCat\" class=\"col-form-label form-label-required\">طبيعة التمويل</ion-label>\r\n              <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                <ion-select interface=\"popover\" id=\"loanTypeCat\" formControlName=\"loanTypeCat\"\r\n                  (ionChange)=\"loanTypeCatChange($event)\">\r\n                  <ion-select-option *ngFor=\"let category of loanTypeCategories\" [value]=\"category.ref_code\">\r\n                    {{category.ref_desc}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </div>\r\n            <!-- DOWN PAYMENT -->\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.down_payment_type.errors}\">\r\n              <ion-label for=\"down_payment\" class=\"col-form-label form-label-required\">\r\n                الدفعة المستقطعة من قيمة القرض\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <ion-item class=\"d-flex justify-content-END col-sm-6\" lines=\"none\">\r\n                  <!-- down payment -->\r\n                  <ion-select (ionChange)=\"downPaymentOnChange()\" #downPayment interface=\"popover\" id=\"down_payment\"\r\n                    formControlName=\"down_payment\">\r\n                    <ion-select-option *ngFor=\"let downPaymet of downPaymetModal\" value=\"{{downPaymet.ref_code}}\">\r\n                      {{downPaymet.ref_desc}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n                <ion-item *ngIf=\"haveDownPayment\" class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                  <!-- down payment type -->\r\n                  <ion-select #downPaymentType (ionChange)=\"downPaymentTypeOnChange()\" interface=\"popover\"\r\n                    id=\"down_payment_type\" formControlName=\"down_payment_type\" placeholder=\"نوع الدفعة\">\r\n                    <ion-select-option *ngFor=\"let downPaymetType of downPaymetTypesModal\"\r\n                      value=\"{{downPaymetType.ref_code}}\">\r\n                      {{downPaymetType.ref_desc}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\" *ngIf=\"this.downPaymentTypeIsPerc\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.down_payment_perc.errors}\">\r\n              <ion-label for=\"down_payment_perc\" class=\"col-form-label form-label-required\">\r\n                نسبة الدفعة\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <ion-item class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                  <!-- down payment perc -->\r\n                  <ion-input type=\"text\" id=\"down_payment_perc\" formControlName=\"down_payment_perc\" class=\"w-100\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0.01, 99.99, 2)\"\r\n                    placeholder=\"نسبة الدفعة\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"end\"> % </ion-label>\r\n                </ion-item>\r\n                <div *ngIf=\"downPaymentTypeIsPerc\" class=\"col-sm-3 align-self-center d-flex justify-content-end\">\r\n                  <ion-checkbox class=\"align-self-center\" id=\"down_payment_edit\" formControlName=\"down_payment_edit\"\r\n                    style=\"margin-left: 5%\"></ion-checkbox>\r\n                  <ion-label for=\"down_payment_edit\" style=\"color: rgb(0, 0, 0); font-weight: 100;\"> السماح بالتعديل\r\n                  </ion-label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && (loanTypeDetailsControls.autoPayNoInst.errors || loanTypeDetailsControls.autoPayNoInst.errors)}\">\r\n              <ion-label for=\"autoPayNoInst\" class=\"col-form-label form-label-required\">\r\n                عدد الأقساط المسددة تلقائي\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <ion-item class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"autoPayNoInst\" formControlName=\"autoPayNoInst\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, (((loanTypeDetailsControls.minInst.value ?? 100 ) - 1) > 0 ? ((loanTypeDetailsControls.minInst.value ?? 100 ) - 1) : 0), 0)\"\r\n                    [ngClass]=\"{'is-invalid': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.autoPayNoInst.errors}\"\r\n                    [disabled]=\"overDraftAllowed\"></ion-input>\r\n                </ion-item>\r\n                <ion-item class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                  <ion-select interface=\"popover\" id=\"autoPayDirection\" formControlName=\"autoPayDirection\">\r\n                    <ion-select-option *ngFor=\"let autoPayDirection of autoPayDirections\"\r\n                      value=\"{{autoPayDirection.ref_code}}\">\r\n                      {{autoPayDirection.ref_desc}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.skipDay.errors}\">\r\n              <ion-label for=\"skipDay\" class=\"col-form-label form-label-required\">\r\n                يوم تخطى تاريخ القرض\r\n              </ion-label>\r\n              <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                <ion-input type=\"text\" id=\"skipDay\" formControlName=\"skipDay\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 31, 0)\"></ion-input>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.dueDay.errors}\">\r\n              <ion-label for=\"dueDay\" class=\"col-form-label form-label-required\">\r\n                يوم استحقاق اول قسط\r\n              </ion-label>\r\n              <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                <ion-input type=\"text\" id=\"dueDay\" formControlName=\"dueDay\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 31, 0)\"></ion-input>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.instNo.errors}\">\r\n              <ion-label for=\"instNo\" class=\"col-form-label form-label-required\">\r\n                عدد الأقساط\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <ion-item class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"instNo\" formControlName=\"instNo\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\r\n                    [disabled]=\"overDraftAllowed\"></ion-input>\r\n                </ion-item>\r\n                <div class=\"col-sm-6 align-self-center d-flex justify-content-end\">\r\n                  <ion-checkbox class=\"align-self-center\" id=\"editLoanInst\" formControlName=\"editLoanInst\"\r\n                    style=\"margin-left: 5%\"></ion-checkbox>\r\n                  <ion-label for=\"editLoanInst\"> السماح بالتعديل </ion-label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.lateDaysNo.errors}\">\r\n              <ion-label for=\"lateDaysNo\" class=\"col-form-label form-label-required\">\r\n                عدد أيام التأخير\r\n              </ion-label>\r\n              <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                <ion-input type=\"text\" id=\"lateDaysNo\" formControlName=\"lateDaysNo\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 99, 0)\"></ion-input>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.gracePeriod.errors}\">\r\n              <ion-label for=\"gracePeriod\" class=\"col-form-label form-label-required\">\r\n                فتره السماح\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <ion-item class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"gracePeriod\" formControlName=\"gracePeriod\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, -99, 99, 0)\"></ion-input>\r\n                </ion-item>\r\n                <div class=\"col-sm-6 align-self-center d-flex justify-content-end\">\r\n                  <ion-checkbox class=\"align-self-center\" id=\"editGracePeriod\" formControlName=\"editGracePeriod\"\r\n                    style=\"margin-left: 5%\"></ion-checkbox>\r\n                  <ion-label for=\"editGracePeriod\"> السماح بالتعديل </ion-label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.loanIntDeduct.errors}\">\r\n              <ion-label for=\"loanIntDeduct\" class=\"col-form-label form-label-required\">طريقه استخدام النسبه\r\n                المقدمه</ion-label>\r\n              <div class=\"row\">\r\n                <ion-item class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                  <ion-select interface=\"popover\" id=\"loanIntDeduct\" formControlName=\"loanIntDeduct\">\r\n                    <ion-select-option *ngFor=\"let loanIntDeductType of loanIntDeductTypes\"\r\n                      [value]=\"loanIntDeductType.ref_code\">\r\n                      {{loanIntDeductType.ref_desc}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n                <div class=\"col-sm-6 align-self-center d-flex justify-content-end\">\r\n                  <ion-checkbox class=\"align-self-center\" id=\"payLoanIntAm\" formControlName=\"payLoanIntAm\"\r\n                    style=\"margin-left: 5%\"></ion-checkbox>\r\n                  <ion-label for=\"payLoanIntAm\">\r\n                    المصاريف المقدمة تسدد تلقائي\r\n                  </ion-label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.stampDutyRt.errors}\">\r\n              <ion-label for=\"stampDutyRt\" class=\"col-form-label form-label-required py-0\">\r\n                طوابع\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <ion-item class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"stampDutyRt\" formControlName=\"stampDutyRt\" class=\"w-100\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, -100, 100, 2)\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"end\"> % </ion-label>\r\n                </ion-item>\r\n                <div class=\"col-sm-6 align-self-center d-flex justify-content-end\">\r\n                  <ion-checkbox class=\"align-self-center\" id=\"editStampDutyRt\" formControlName=\"editStampDutyRt\"\r\n                    style=\"margin-left: 5%\"></ion-checkbox>\r\n                  <ion-label for=\"editStampDutyRt\"> السماح بالتعديل </ion-label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"this.penaltyStaticAction.value == 3\">\r\n              <div class=\"form-group\" *ngIf=\"this.ConvertBooleanToInt(this.loanTypeDetailsControls.accumulatedInterest.value)\r\n            == 0? true:false\"\r\n                [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.loanPenRt.errors}\">\r\n                <ion-label for=\"loanPenRt\" class=\"col-form-label form-label-required py-0\">\r\n                  نسبة الغرامة\r\n                </ion-label>\r\n                <div class=\"row\">\r\n                  <ion-item class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"loanPenRt\" formControlName=\"loanPenRt\" class=\"w-100\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"end\"> % </ion-label>\r\n                  </ion-item>\r\n                  <div class=\"col-sm-6 align-self-center d-flex justify-content-end\">\r\n                    <ion-checkbox class=\"align-self-center\" id=\"compoundPenalty\"\r\n                      formControlName=\"compoundPenalty\"></ion-checkbox>\r\n                    <ion-label for=\"compoundPenalty\" class=\"pl-2\">\r\n                      حساب الغرامة على الغرامة\r\n                    </ion-label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.LOComissionRt.errors}\">\r\n              <ion-label for=\"LOComissionRt\" class=\"col-form-label form-label-required py-0\">\r\n                عمولة المندوب\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <ion-item class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"LOComissionRt\" formControlName=\"LOComissionRt\" class=\"w-100\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, -100, 100, 2)\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"end\"> % </ion-label>\r\n                </ion-item>\r\n                <div class=\"col-sm-6 align-self-center d-flex justify-content-end\">\r\n                  <ion-checkbox class=\"align-self-center\" id=\"editLOComissionRt\" formControlName=\"editLOComissionRt\"\r\n                    style=\"margin-left: 5%\"></ion-checkbox>\r\n                  <ion-label for=\"editLOComissionRt\">\r\n                    السماح بالتعديل\r\n                  </ion-label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.instCharges.errors}\">\r\n              <ion-label for=\"instCharges\" class=\"col-form-label form-label-required\">\r\n                مصاريف إداريه على القسط\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <ion-item class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"instCharges\" formControlName=\"instCharges\" class=\"w-100\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 2)\"\r\n                    [ngClass]=\"{'is-invalid': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.instCharges.errors}\">\r\n                  </ion-input>\r\n                </ion-item>\r\n                <div class=\"col-sm-6 align-self-center d-flex justify-content-end\">\r\n                  <ion-checkbox class=\"align-self-center\" id=\"editInstCharges\" formControlName=\"editInstCharges\"\r\n                    style=\"margin-left: 5%\"></ion-checkbox>\r\n                  <ion-label for=\"editInstCharges\"> السماح بالتعديل </ion-label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.maxPostpone.errors}\">\r\n              <ion-label for=\"maxPostpone\" class=\"col-form-label form-label-required\">\r\n                الحد الاقصى لعدد مرات الترحيل للقرض\r\n              </ion-label>\r\n              <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                <ion-input type=\"text\" id=\"maxPostpone\" formControlName=\"maxPostpone\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e7, 0)\"></ion-input>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.quickRepayRt.errors}\">\r\n              <ion-label for=\"quickRepayRt\" class=\"col-form-label form-label-required\">\r\n                نسبة مصروفات السداد المعجل للقرض\r\n              </ion-label>\r\n              <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                <ion-input type=\"text\" id=\"quickRepayRt\" formControlName=\"quickRepayRt\" class=\"w-100\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\">\r\n                </ion-input>\r\n                <ion-label slot=\"end\"> % </ion-label>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && (loanTypeDetailsControls.minLoan.errors || loanTypeDetailsControls.maxLoan.errors || !isLoanAmountRangeValid)}\">\r\n              <ion-label for=\"minLoan\" class=\"col-form-label form-label-required\">\r\n                قيمة القرض المسموحة\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <ion-item class=\"d-flex justify-content-between col-6\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"minLoan\" formControlName=\"minLoan\" class=\"w-100\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e13, 0)\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"start\"> من </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"d-flex justify-content-between col-6\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"maxLoan\" formControlName=\"maxLoan\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e13, 0)\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"start\"> الى </ion-label>\r\n                </ion-item>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && (loanTypeDetailsControls.minInst.errors || loanTypeDetailsControls.maxInst.errors || !isLoanInstRangeValid)}\">\r\n              <ion-label for=\"minInst\" class=\"col-form-label form-label-required\">\r\n                عدد الاقساط المسموحة للقرض\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <ion-item class=\"d-flex justify-content-between col-6\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"minInst\" formControlName=\"minInst\" class=\"w-100\"\r\n                    (ionChange)=\"FixAutoPayInst()\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\r\n                    [disabled]=\"overDraftAllowed\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"start\"> من </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"d-flex justify-content-between col-6\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"maxInst\" formControlName=\"maxInst\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\r\n                    [disabled]=\"overDraftAllowed\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"start\"> الى </ion-label>\r\n                </ion-item>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && (loanTypeDetailsControls.minAge.errors || loanTypeDetailsControls.maxAge.errors || !isAgeRangeValid)}\">\r\n              <ion-label for=\"minAge\" class=\"col-form-label form-label-required\">\r\n                عمر العميل\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <ion-item class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"minAge\" formControlName=\"minAge\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"start\"> من </ion-label>\r\n                </ion-item>\r\n                <ion-item class=\"d-flex justify-content-between col-sm-6\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"maxAge\" formControlName=\"maxAge\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"start\"> الى </ion-label>\r\n                </ion-item>\r\n                <div class=\"col-sm-12 align-content-center d-flex justify-content-end mt-2\">\r\n                  <ion-checkbox id=\"applyAgeCondition\" formControlName=\"applyAgeCondition\"\r\n                    style=\"margin-left: 5%\"></ion-checkbox>\r\n                  <ion-label for=\"applyAgeCondition\">\r\n                    تطبيق شرط العمر لخصائص انواع الاقتراض\r\n                  </ion-label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group d-flex justify-content-between px-0\"></div>\r\n            <div class=\"form-group d-flex justify-content-between px-0\"></div>\r\n          </div>\r\n          <table class=\"w-100\">\r\n            <thead>\r\n              <th></th>\r\n              <th></th>\r\n              <th></th>\r\n              <th></th>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <ion-checkbox id=\"allowUsage\" formControlName=\"allowUsage\"></ion-checkbox>\r\n                </td>\r\n                <td>\r\n                  <ion-label for=\"allowUsage\">\r\n                    هذا النوع مسموح باستخدامه\r\n                  </ion-label>\r\n                </td>\r\n                <td>\r\n                  <ion-checkbox id=\"requireInsurance\" formControlName=\"requireInsurance\"></ion-checkbox>\r\n                </td>\r\n                <td class=\"pr-1\">\r\n                  <ion-label for=\"requireInsurance\">\r\n                    يجب التامين عليه\r\n                  </ion-label>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <ion-checkbox id=\"clientUsable\" formControlName=\"clientUsable\"></ion-checkbox>\r\n                </td>\r\n                <td>\r\n                  <ion-label for=\"clientUsable\">\r\n                    هذا النوع مسموح باستخدامه من قبل العملاء\r\n                  </ion-label>\r\n                </td>\r\n                <td>\r\n                  <ion-checkbox id=\"useWorkflow\" formControlName=\"useWorkflow\"\r\n                    [disabled]=\"workflowAllowed === 0 || overDraftAllowed\"></ion-checkbox>\r\n                </td>\r\n                <td class=\"pr-1\">\r\n                  <ion-label for=\"useWorkflow\">\r\n                    تفعيل خطوات إجراءات القرض\r\n                  </ion-label>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <ion-checkbox class=\"align-self-center\" id=\"supervisorVisit\" formControlName=\"supervisorVisit\"\r\n                    [disabled]=\"this.ConvertBooleanToInt(this.loanTypeDetailsControls.useWorkflow.value) == 1? true:false \"\r\n                    [checked]=\"this.ConvertBooleanToInt(this.loanTypeDetailsControls.useWorkflow.value) == 1? false:loanTypeDetailsControls.supervisorVisit.value \"></ion-checkbox>\r\n                </td>\r\n                <td>\r\n                  <ion-label for=\"supervisorVisit\" class=\"col-form-label\">\r\n                    يجب ادخال اسم نائب مدير ميداني و تاريخ الزيارة عند مراجعة\r\n                    طلب القرض\r\n                  </ion-label>\r\n                </td>\r\n                <td>\r\n                  <ion-checkbox class=\"align-self-center\" id=\"deputyVisit\" formControlName=\"deputyVisit\"\r\n                    [disabled]=\"this.ConvertBooleanToInt(this.loanTypeDetailsControls.useWorkflow.value) == 1? true:false \"\r\n                    [checked]=\"this.ConvertBooleanToInt(this.loanTypeDetailsControls.useWorkflow.value) == 1? false:loanTypeDetailsControls.deputyVisit.value \"></ion-checkbox>\r\n                </td>\r\n                <td class=\"pr-1\">\r\n                  <ion-label for=\"deputyVisit\" class=\"col-form-label\">\r\n                    يجب ادخال اسم مراجع - رئيس مجموعة مندوبين الفرع و تاريخ\r\n                    الزيارة عند اصدار القرض\r\n                  </ion-label>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <ion-checkbox class=\"align-self-center\" id=\"managerVisit\" formControlName=\"managerVisit\"\r\n                    [disabled]=\"this.ConvertBooleanToInt(this.loanTypeDetailsControls.useWorkflow.value) == 1? true:false \"\r\n                    [checked]=\"this.ConvertBooleanToInt(this.loanTypeDetailsControls.useWorkflow.value) == 1? false:loanTypeDetailsControls.managerVisit.value \"></ion-checkbox>\r\n                </td>\r\n                <td>\r\n                  <ion-label for=\"managerVisit\" class=\"col-form-label\">\r\n                    يجب ادخال اسم مدير فرع و تاريخ الزيارة عند اصدار القرض\r\n                  </ion-label>\r\n                </td>\r\n                <td>\r\n                  <ion-checkbox class=\"align-self-center\" id=\"forceSupervisorVisit\"\r\n                    formControlName=\"forceSupervisorVisit\"\r\n                    [disabled]=\"this.ConvertBooleanToInt(this.loanTypeDetailsControls.useWorkflow.value) == 1? true:false \"\r\n                    [checked]=\"this.ConvertBooleanToInt(this.loanTypeDetailsControls.useWorkflow.value) == 1? false:loanTypeDetailsControls.forceSupervisorVisit.value \"></ion-checkbox>\r\n                </td>\r\n                <td class=\"pr-1\">\r\n                  <ion-label for=\"forceSupervisorVisit\" class=\"col-form-label\">\r\n                    يجب اخذ زيارة ميدانية للمتابعة لقرار اللجنة\r\n                  </ion-label>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <ion-checkbox class=\"align-self-center\" id=\"accumulateInterest\"\r\n                    formControlName=\"accumulatedInterest\"></ion-checkbox>\r\n                </td>\r\n                <td>\r\n                  <ion-label for=\"accumulateInterest\" class=\"col-form-label\">\r\n                    تفعيل الفائدة الدورية\r\n                  </ion-label>\r\n                </td>\r\n                <td>\r\n                  <ion-checkbox class=\"align-self-center\" id=\"forceUserOtp\"\r\n                    formControlName=\"forceUserOtp\"></ion-checkbox>\r\n                </td>\r\n                <td>\r\n                  <ion-label for=\"forceUserOtp\" class=\"col-form-label\">\r\n                    ارسال رمز التحقق للمستخدم عند الانشاء\r\n                  </ion-label>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <ion-checkbox class=\"align-self-center\" id=\"forceClientOtp\"\r\n                    formControlName=\"forceClientOtp\"></ion-checkbox>\r\n                </td>\r\n                <td>\r\n                  <ion-label for=\"forceClientOtp\" class=\"col-form-label\">\r\n                    ارسال رمز التحقق للعميل عند الانشاء\r\n                  </ion-label>\r\n                </td>\r\n                <td>\r\n                  <ion-checkbox class=\"align-self-center\" id=\"forceCosignersOtp\"\r\n                    formControlName=\"forceCosignersOtp\"></ion-checkbox>\r\n                </td>\r\n                <td>\r\n                  <ion-label for=\"forceCosignersOtp\" class=\"col-form-label\">\r\n                    ارسال رمز التحقق للضامنين عند الانشاء\r\n                  </ion-label>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </ion-accordion>\r\n      <ion-accordion value=\"appCharge\">\r\n        <ion-item slot=\"header\" id=\"accordion-header\">\r\n          <ion-label>بيانات رسوم طلب القرض</ion-label>\r\n        </ion-item>\r\n        <div class=\"row justify-content-center my-2 mx-2\" slot=\"content\">\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && (loanTypeDetailsControls.appChargeRt.errors || loanTypeDetailsControls.appChargeRtType.errors)}\">\r\n              <ion-label for=\"appChargeRt\" class=\"col-form-label form-label-required py-0\">\r\n                نسبة رسوم طلب القرض\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"appChargeRt\" formControlName=\"appChargeRt\" class=\"w-100\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, -100, 100, 2)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"end\"> % </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <ion-item lines=\"none\">\r\n                    <ion-select interface=\"popover\" id=\"appChargeRtType\" formControlName=\"appChargeRtType\"\r\n                      [ngClass]=\"{'form-control-error': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.appChargeRtType.errors?.required}\">\r\n                      <ion-select-option *ngFor=\"let appChargeType of appChargeTypes\" [value]=\"appChargeType.ref_code\">\r\n                        {{appChargeType.ref_desc}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.appCharge.errors}\">\r\n              <ion-label for=\"appCharge\" class=\"col-form-label form-label-required\">\r\n                رسوم طلب القرض\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                  <ion-input type=\"text\" id=\"appCharge\" formControlName=\"appCharge\" class=\"w-100\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 2)\">\r\n                  </ion-input>\r\n                </div>\r\n                <table class=\"w-100 mt-2 mr-3\">\r\n                  <thead></thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>\r\n                        <ion-checkbox class=\"align-self-center\" id=\"editAppCharge\" formControlName=\"editAppCharge\"\r\n                          [ngClass]=\"{'is-invalid': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.editAppCharge.errors}\"></ion-checkbox>\r\n                      </td>\r\n                      <td>\r\n                        <ion-label for=\"editAppCharge\">\r\n                          السماح بالتعديل\r\n                        </ion-label>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <ion-checkbox class=\"align-self-center\" id=\"addAppChargeToLoan\"\r\n                          formControlName=\"addAppChargeToLoan\"\r\n                          [ngClass]=\"{'is-invalid': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.addAppChargeToLoan.errors}\"></ion-checkbox>\r\n                      </td>\r\n                      <td>\r\n                        <ion-label for=\"addAppChargeToLoan\">\r\n                          اضافة قيمة الرسوم لقيمة القرض\r\n                        </ion-label>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.appChargePerMember.errors}\">\r\n              <ion-label for=\"appChargePerMember\" class=\"col-form-label form-label-required\">\r\n                قيمة رسوم طلب القرض للعضو الواحد\r\n              </ion-label>\r\n              <div>\r\n                <ion-input type=\"text\" id=\"appChargePerMember\" formControlName=\"appChargePerMember\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 0)\"></ion-input>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && (loanTypeDetailsControls.appChargeRtPerMember.errors || loanTypeDetailsControls.appChargeRtTypePerMember.errors)}\">\r\n              <ion-label for=\"appChargeRtPerMember\" class=\"col-form-label form-label-required py-0\">\r\n                نسبة رسوم طلب القرض من حصة العضو\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"appChargeRtPerMember\" formControlName=\"appChargeRtPerMember\"\r\n                      class=\"w-100\" (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"end\"> % </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <ion-item lines=\"none\">\r\n                    <ion-select interface=\"popover\" id=\"appChargeRtTypePerMember\"\r\n                      formControlName=\"appChargeRtTypePerMember\"\r\n                      [ngClass]=\"{'form-control-error': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.appChargeRtTypePerMember.errors?.required}\">\r\n                      <ion-select-option *ngFor=\"let appChargeType of appChargeTypes\" [value]=\"appChargeType.ref_code\">\r\n                        {{appChargeType.ref_desc}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && (loanTypeDetailsControls.approxValue.errors || loanTypeDetailsControls.approxType.errors)}\">\r\n              <ion-label for=\"approxValue\" class=\"col-form-label form-label-required\">\r\n                قيمة الرسوم النهائية تقرب الي\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <ion-item lines=\"none\">\r\n                    <ion-select interface=\"popover\" id=\"approxType\" formControlName=\"approxType\">\r\n                      <ion-select-option *ngFor=\"let approxType of approxTypes\" [value]=\"approxType.ref_code\">\r\n                        {{approxType.ref_desc}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <ion-input type=\"text\" id=\"approxValue\" formControlName=\"approxValue\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 9999.999, 3)\"\r\n                    [ngClass]=\"{'is-invalid': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.approxValue.errors}\"></ion-input>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && (loanTypeDetailsControls.appChargeRtMin.errors || loanTypeDetailsControls.appChargeRtMax.errors || !isAppChargeRangeValid)}\">\r\n              <ion-label for=\"appChargeRtMin\" class=\"col-form-label form-label-required\">\r\n                قيمة الرسوم المسموحة للعميل الواحد\r\n              </ion-label>\r\n              <div class=\"row mb-2\">\r\n                <ion-item class=\"d-flex justify-content-between col-12\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"appChargeRtMin\" formControlName=\"appChargeRtMin\" class=\"w-100\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, (loanTypeDetailsControls.appChargeRtMax.value ?? 100), 2)\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"start\"> من </ion-label>\r\n                </ion-item>\r\n              </div>\r\n              <div class=\"row mb-2\">\r\n                <ion-item class=\"d-flex justify-content-between col-12\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"appChargeRtMax\" formControlName=\"appChargeRtMax\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"start\"> الى </ion-label>\r\n                </ion-item>\r\n              </div>\r\n              <div class=\"row\" style=\"margin-right: 10%\">\r\n                <table class=\"w-100\">\r\n                  <thead></thead>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>\r\n                        <ion-checkbox id=\"applyAppChargeMargin\" formControlName=\"applyAppChargeMargin\"></ion-checkbox>\r\n                      </td>\r\n                      <td>\r\n                        <ion-label for=\"applyAppChargeMargin\">وضع حدود لقيمة الرسوم\r\n                        </ion-label>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-accordion>\r\n      <ion-accordion value=\"cosignersAndFillAmountAndSales\">\r\n        <ion-item slot=\"header\" id=\"accordion-header\">\r\n          <ion-label>تأثير السداد والضامنون والمبيعات </ion-label>\r\n        </ion-item>\r\n        <div class=\"row justify-content-center mx-2 my-2\" slot=\"content\">\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.salesTax.errors}\">\r\n              <ion-label for=\"salesTax\" class=\"col-form-label form-label-required\">\r\n                ضريبة المبيعات\r\n              </ion-label>\r\n              <div>\r\n                <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"salesTax\" formControlName=\"salesTax\" class=\"w-100\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"end\"> % </ion-label>\r\n                </ion-item>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.discountRate.errors}\">\r\n              <ion-label for=\"discountRate\" class=\"col-form-label form-label-required\">\r\n                نسبه الخصم\r\n              </ion-label>\r\n              <div>\r\n                <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"discountRate\" formControlName=\"discountRate\" class=\"w-100\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"end\"> % </ion-label>\r\n                </ion-item>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.provisionRange.errors}\">\r\n              <ion-label for=\"provisionRange\" class=\"col-form-label form-label-required\">\r\n                نسبة مخصص الديون للقروض الجيدة (الغير متاخرة)\r\n              </ion-label>\r\n              <div>\r\n                <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"provisionRange\" formControlName=\"provisionRange\" class=\"w-100\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"end\"> % </ion-label>\r\n                </ion-item>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.fillAmountFirst.errors}\">\r\n              <ion-label for=\"fillAmountFirst\" class=\"col-form-label form-label-required\">\r\n                تأثير السداد\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                  <ion-item lines=\"none\">\r\n                    <ion-select interface=\"popover\" id=\"fillAmountFirst\" formControlName=\"fillAmountFirst\">\r\n                      <ion-select-option *ngFor=\"let fillAmountFirstType of fillAmountFirstTypes\"\r\n                        [value]=\"fillAmountFirstType.ref_code\">\r\n                        {{fillAmountFirstType.ref_desc}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.requiredCosigners.errors}\">\r\n              <ion-label for=\"requiredCosigners\" class=\"col-form-label form-label-required\">\r\n                عدد الضامنين\r\n              </ion-label>\r\n              <div>\r\n                <ion-input type=\"text\" id=\"requiredCosigners\" formControlName=\"requiredCosigners\" class=\"w-100\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 0)\">\r\n                </ion-input>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\" style=\"margin-top: 15%\">\r\n              <div class=\"align-content-center d-flex justify-content-start\">\r\n                <ion-checkbox id=\"cosignerHasMultiClients\" formControlName=\"cosignerHasMultiClients\"\r\n                  style=\"margin-left: 5%\"\r\n                  [ngClass]=\"{'is-invalid': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.cosignerHasMultiClients.errors}\"></ion-checkbox>\r\n                <ion-label for=\"cosignerHasMultiClients\">الضامن يضمن اكثر من عميل\r\n                </ion-label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-accordion>\r\n      <ion-accordion value=\"clientRisk\">\r\n        <ion-item slot=\"header\" id=\"accordion-header\">\r\n          <ion-label>الجدارة الائتمانية</ion-label>\r\n        </ion-item>\r\n        <div class=\"row justify-content-center mx-2 my-2\" slot=\"content\">\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.clientRiskLowPerc.errors}\">\r\n              <ion-label for=\"clientRiskLowPerc\" class=\"col-form-label form-label-required\">\r\n                النسبة المنخفضة\r\n              </ion-label>\r\n              <div>\r\n                <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"clientRiskLowPerc\" formControlName=\"clientRiskLowPerc\" class=\"w-100\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\r\n                    [required]=\"(loanTypeDetailsControls.clientRiskStatus.value == 1)? true : false\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"end\"> % </ion-label>\r\n                </ion-item>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.clientRiskStatus.errors}\">\r\n              <ion-label for=\"clientRiskStatus\" class=\"col-form-label form-label-required\">حساب نسبة الفائدة</ion-label>\r\n              <div>\r\n                <ion-item lines=\"none\">\r\n                  <ion-select interface=\"popover\" id=\"clientRiskStatus\" formControlName=\"clientRiskStatus\"\r\n                    (ionChange)=\"clientRiskStatusChange()\">\r\n                    <ion-select-option *ngFor=\"let clientRiskStatusType of clientRiskStatusTypes\"\r\n                      [value]=\"clientRiskStatusType.ref_code\">\r\n                      {{clientRiskStatusType.ref_desc}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.clientRiskMidPerc.errors}\">\r\n              <ion-label for=\"clientRiskMidPerc\" class=\"col-form-label form-label-required\">\r\n                النسبة المتوسطة\r\n              </ion-label>\r\n              <div>\r\n                <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"clientRiskMidPerc\" formControlName=\"clientRiskMidPerc\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\" class=\"w-100\"\r\n                    [required]=\"(loanTypeDetailsControls.clientRiskStatus.value == 1)? true : false\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"end\"> % </ion-label>\r\n                </ion-item>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.clientRiskHighPerc.errors}\">\r\n              <ion-label for=\"clientRiskHighPerc\" class=\"col-form-label form-label-required\">\r\n                النسبة المرتفعة\r\n              </ion-label>\r\n              <div>\r\n                <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"clientRiskHighPerc\" formControlName=\"clientRiskHighPerc\" class=\"w-100\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\r\n                    [required]=\"(loanTypeDetailsControls.clientRiskStatus.value == 1)? true : false\">\r\n                  </ion-input>\r\n                  <ion-label slot=\"end\"> % </ion-label>\r\n                </ion-item>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-accordion>\r\n      <ion-accordion value=\"Debt\">\r\n        <ion-item slot=\"header\" id=\"accordion-header\">\r\n          <ion-label>الديون</ion-label>\r\n        </ion-item>\r\n        <div class=\"row justify-content-center mx-2 my-2\" slot=\"content\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted\r\n              && (loanTypeDetailsControls.provisionPeriod1.errors || loanTypeDetailsControls.provisionPeriod2.errors || loanTypeDetailsControls.provisionPeriod3.errors || loanTypeDetailsControls.provisionPeriod4.errors || loanTypeDetailsControls.provisionPeriod5.errors || loanTypeDetailsControls.provisionPeriod6.errors || !isProvisionPeriodValid)}\">\r\n              <ion-label class=\"col-form-label form-label-required\">\r\n                مدد أعمار الديون\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"number\" value=\"1\" [disabled]=\"true\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\"> من </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"provisionPeriod1\" formControlName=\"provisionPeriod1\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\"> الى </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"number\"\r\n                      value=\"{{(convertToInt(loanTypeDetailsControls.provisionPeriod1.value) + 1 > 999)? 999 : convertToInt(loanTypeDetailsControls.provisionPeriod1.value) + 1}}\"\r\n                      [disabled]=\"true\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\"> من </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"provisionPeriod2\" formControlName=\"provisionPeriod2\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\"> الى </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"number\"\r\n                      value=\"{{(convertToInt(loanTypeDetailsControls.provisionPeriod2.value) + 1 > 999)? 999 : convertToInt(loanTypeDetailsControls.provisionPeriod2.value) + 1}}\"\r\n                      [disabled]=\"true\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\"> من </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"provisionPeriod3\" formControlName=\"provisionPeriod3\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\"> الى </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"number\"\r\n                      value=\"{{(convertToInt(loanTypeDetailsControls.provisionPeriod3.value) + 1 > 999)? 999 : convertToInt(loanTypeDetailsControls.provisionPeriod3.value) + 1}}\"\r\n                      [disabled]=\"true\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\"> من </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"provisionPeriod4\" formControlName=\"provisionPeriod4\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\"> الى </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"number\"\r\n                      value=\"{{(convertToInt(loanTypeDetailsControls.provisionPeriod4.value) + 1 > 999)? 999 : convertToInt(loanTypeDetailsControls.provisionPeriod4.value) + 1}}\"\r\n                      [disabled]=\"true\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\"> من </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"provisionPeriod5\" formControlName=\"provisionPeriod5\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\"> الى </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"number\"\r\n                      value=\"{{(convertToInt(loanTypeDetailsControls.provisionPeriod5.value) + 1 > 999)? 999 : convertToInt(loanTypeDetailsControls.provisionPeriod5.value) + 1}}\"\r\n                      [disabled]=\"true\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\"> من </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"provisionPeriod5\" formControlName=\"provisionPeriod6\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\"> الى </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"number\"\r\n                      value=\"{{(convertToInt(loanTypeDetailsControls.provisionPeriod6.value) > 999)? 999 : convertToInt(loanTypeDetailsControls.provisionPeriod6.value)}}\"\r\n                      [disabled]=\"true\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\" class=\"ml-1\"> اكثر من </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && (loanTypeDetailsControls.provisionRange1.errors || loanTypeDetailsControls.provisionRange2.errors || loanTypeDetailsControls.provisionRange3.errors || loanTypeDetailsControls.provisionRange4.errors || loanTypeDetailsControls.provisionRange5.errors || loanTypeDetailsControls.provisionRange6.errors || loanTypeDetailsControls.provisionRange7.errors)}\">\r\n              <ion-label class=\"col-form-label form-label-required py-0\">\r\n                نسب مخصص الديون\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                    <ion-label slot=\"start\"> (1) </ion-label>\r\n                    <ion-input type=\"text\" id=\"provisionRange1\" formControlName=\"provisionRange1\" class=\"w-100\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"end\"> % </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-12 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                    <ion-label slot=\"start\"> (2) </ion-label>\r\n                    <ion-input type=\"text\" id=\"provisionRange2\" formControlName=\"provisionRange2\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\" class=\"w-100\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"end\"> % </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-12 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                    <ion-label slot=\"start\"> (3) </ion-label>\r\n                    <ion-input type=\"text\" id=\"provisionRange3\" formControlName=\"provisionRange3\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\" class=\"w-100\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"end\"> % </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-12 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                    <ion-label slot=\"start\"> (4) </ion-label>\r\n                    <ion-input type=\"text\" id=\"provisionRange4\" formControlName=\"provisionRange4\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\" class=\"w-100\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"end\"> % </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-12 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                    <ion-label slot=\"start\"> (5) </ion-label>\r\n                    <ion-input type=\"text\" id=\"provisionRange5\" formControlName=\"provisionRange5\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\" class=\"w-100\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"end\"> % </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-12 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                    <ion-label slot=\"start\"> (6) </ion-label>\r\n                    <ion-input type=\"text\" id=\"provisionRange6\" formControlName=\"provisionRange6\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\" class=\"w-100\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"end\"> % </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-12 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                    <ion-label slot=\"start\"> (7) </ion-label>\r\n                    <ion-input type=\"text\" id=\"provisionRange7\" formControlName=\"provisionRange7\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\" class=\"w-100\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"end\"> % </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-accordion>\r\n      <ion-accordion value=\"RescheduledLoans\">\r\n        <ion-item slot=\"header\" id=\"accordion-header\">\r\n          <ion-label>القروض المجدوله</ion-label>\r\n        </ion-item>\r\n        <div class=\"row justify-content-center mx-2 my-2\" slot=\"content\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && (loanTypeDetailsControls.provisionResc.errors || loanTypeDetailsControls.includeResc.errors)}\">\r\n              <ion-label for=\"includeResc\" class=\"col-form-label form-label-required\">\r\n                الغير مشكوك في سدادها\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <ion-item lines=\"none\">\r\n                    <ion-select interface=\"popover\" id=\"includeResc\" formControlName=\"includeResc\">\r\n                      <ion-select-option *ngFor=\"let loanRescheduleType of loanRescheduleTypes\"\r\n                        value=\"{{loanRescheduleType.ref_code}}\">\r\n                        {{loanRescheduleType.ref_desc}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"provisionResc\" formControlName=\"provisionResc\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\" class=\"w-100\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"end\"> % </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && (loanTypeDetailsControls.provisionRescDoubt.errors || loanTypeDetailsControls.includeRescDoubt.errors)}\">\r\n              <ion-label for=\"includeRescDoubt\" class=\"col-form-label form-label-required\">\r\n                المشكوك في سدادها\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                  <ion-item lines=\"none\">\r\n                    <ion-select interface=\"popover\" id=\"includeRescDoubt\" formControlName=\"includeRescDoubt\">\r\n                      <ion-select-option *ngFor=\"let loanRescheduleType of loanRescheduleTypes\"\r\n                        value=\"{{loanRescheduleType.ref_code}}\">\r\n                        {{loanRescheduleType.ref_desc}}\r\n                      </ion-select-option>\r\n                    </ion-select>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6\">\r\n                  <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"provisionRescDoubt\" formControlName=\"provisionRescDoubt\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\" class=\"w-100\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"end\"> % </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-accordion>\r\n      <ion-accordion value=\"PaymentsShift\">\r\n        <ion-item slot=\"header\" id=\"accordion-header\">\r\n          <ion-label>الترحيل</ion-label>\r\n        </ion-item>\r\n        <div class=\"row mx-2 my-2\" slot=\"content\">\r\n          <div class=\"col-lg-12 d-flex justify-content-end\">\r\n            <ion-button (click)=\"this.InfoAlert()\" class=\"info-button-size\">\r\n              <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.paymentsShift.errors}\">\r\n              <ion-label for=\"paymentsShift\" class=\"col-form-label form-label-required\">\r\n                عدد أيام ترحيل الأقساط\r\n              </ion-label>\r\n              <div>\r\n                <ion-input type=\"text\" id=\"paymentsShift\" formControlName=\"paymentsShift\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, -99, 99, 0)\"></ion-input>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.holidaySkip.errors}\">\r\n              <ion-label for=\"holidaySkip\" class=\"col-form-label form-label-required\">تخطى العطلات لليوم</ion-label>\r\n              <div>\r\n                <ion-item lines=\"none\">\r\n                  <ion-select interface=\"popover\" id=\"holidaySkip\" formControlName=\"holidaySkip\">\r\n                    <ion-select-option *ngFor=\"let holidaySkipType of holidaySkipTypes\"\r\n                      [value]=\"holidaySkipType.ref_code\">\r\n                      {{holidaySkipType.ref_desc}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-8\">\r\n            <div class=\"form-group\" [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted\r\n              && (loanTypeDetailsControls.paymentsShiftSat.errors\r\n              || loanTypeDetailsControls.paymentsShiftSun.errors\r\n              || loanTypeDetailsControls.paymentsShiftMon.errors\r\n              || loanTypeDetailsControls.paymentsShiftTue.errors\r\n              || loanTypeDetailsControls.paymentsShiftWed.errors\r\n              || loanTypeDetailsControls.paymentsShiftThu.errors\r\n              || loanTypeDetailsControls.paymentsShiftFri.errors)}\">\r\n              <ion-label for=\"minAge\" class=\"col-form-label form-label-required\">\r\n                ترحيل تاريخ إستحقاق القسط متى وقع فى الأيام الأتية\r\n              </ion-label>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"paymentsShiftSat\" formControlName=\"paymentsShiftSat\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 99, 0)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\" class=\"w-20\"> السبت </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"paymentsShiftSun\" formControlName=\"paymentsShiftSun\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 99, 0)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\" class=\"w-20\"> الأحد </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"paymentsShiftMon\" formControlName=\"paymentsShiftMon\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 99, 0)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\" class=\"w-20\"> الاثنين </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"paymentsShiftTue\" formControlName=\"paymentsShiftTue\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 99, 0)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\" class=\"w-20\"> الثلاثاء </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"paymentsShiftWed\" formControlName=\"paymentsShiftWed\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 99, 0)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\" class=\"w-20\"> الاربعاء </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"paymentsShiftThu\" formControlName=\"paymentsShiftThu\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 99, 0)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\" class=\"w-20\"> الخميس </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n                <div class=\"col-sm-6 mb-2\">\r\n                  <ion-item class=\"d-flex justify-content-between px-0\" lines=\"none\">\r\n                    <ion-input type=\"text\" id=\"paymentsShiftFri\" formControlName=\"paymentsShiftFri\"\r\n                      (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 99, 0)\">\r\n                    </ion-input>\r\n                    <ion-label slot=\"start\" class=\"w-20\"> الجمعة </ion-label>\r\n                  </ion-item>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-accordion>\r\n      <ion-accordion value=\"TransactionInVacation\">\r\n        <ion-item slot=\"header\" id=\"accordion-header\">\r\n          <ion-label>الحركات فى العطلات</ion-label>\r\n        </ion-item>\r\n        <div class=\"row justify-content-center mx-2 my-2\" slot=\"content\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"form-group\">\r\n              <ion-label for=\"loanIntRt2\" class=\"col-form-label form-label-required\">\r\n                السماح بتطبيق الحركات فى العطلات\r\n              </ion-label>\r\n              <table class=\"w-100\">\r\n                <thead>\r\n                  <th></th>\r\n                  <th></th>\r\n                  <th></th>\r\n                  <th></th>\r\n                  <th></th>\r\n                  <th></th>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>\r\n                      <ion-checkbox class=\"align-self-center\" id=\"allowPenaltyInVac\"\r\n                        formControlName=\"allowPenaltyInVac\"></ion-checkbox>\r\n                    </td>\r\n                    <td>\r\n                      <ion-label for=\"allowPenaltyInVac\">\r\n                        سداد الغرامه\r\n                      </ion-label>\r\n                    </td>\r\n                    <td>\r\n                      <ion-checkbox class=\"align-self-center\" id=\"allowLoanDisbursmentInVac\"\r\n                        formControlName=\"allowLoanDisbursmentInVac\"></ion-checkbox>\r\n                    </td>\r\n                    <td>\r\n                      <ion-label for=\"allowLoanDisbursmentInVac\">\r\n                        اصدار القرض\r\n                      </ion-label>\r\n                    </td>\r\n                    <td>\r\n                      <ion-checkbox class=\"align-self-center\" id=\"allowLoanRescheduleInVac\"\r\n                        formControlName=\"allowLoanRescheduleInVac\"></ion-checkbox>\r\n                    </td>\r\n                    <td>\r\n                      <ion-label for=\"allowLoanRescheduleInVac\">\r\n                        جدوله\r\n                      </ion-label>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <ion-checkbox class=\"align-self-center\" id=\"allowLoanWrittenOffInVac\"\r\n                        formControlName=\"allowLoanWrittenOffInVac\"></ion-checkbox>\r\n                    </td>\r\n                    <td>\r\n                      <ion-label for=\"allowLoanWrittenOffInVac\">\r\n                        شطب قرض\r\n                      </ion-label>\r\n                    </td>\r\n                    <td>\r\n                      <ion-checkbox class=\"align-self-center\" id=\"allowLoanDoubtfulInVac\"\r\n                        formControlName=\"allowLoanDoubtfulInVac\"></ion-checkbox>\r\n                    </td>\r\n                    <td>\r\n                      <ion-label for=\"allowLoanDoubtfulInVac\">\r\n                        شك القرض\r\n                      </ion-label>\r\n                    </td>\r\n                    <td>\r\n                      <ion-checkbox class=\"align-self-center\" id=\"allowLoanGenerationInVac\"\r\n                        formControlName=\"allowLoanGenerationInVac\"></ion-checkbox>\r\n                    </td>\r\n                    <td>\r\n                      <ion-label for=\"allowLoanGenerationInVac\">\r\n                        انشاء القرض\r\n                      </ion-label>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <ion-checkbox class=\"align-self-center\" id=\"allowStampChargesInVac\"\r\n                        formControlName=\"allowStampChargesInVac\"></ion-checkbox>\r\n                    </td>\r\n                    <td>\r\n                      <ion-label for=\"allowStampChargesInVac\">\r\n                        رسوم طوابع\r\n                      </ion-label>\r\n                    </td>\r\n                    <td>\r\n                      <ion-checkbox class=\"align-self-center\" id=\"allowOfficerCommissionInVac\"\r\n                        formControlName=\"allowOfficerCommissionInVac\"></ion-checkbox>\r\n                    </td>\r\n                    <td>\r\n                      <ion-label for=\"allowOfficerCommissionInVac\">\r\n                        رسوم عموله مندوب\r\n                      </ion-label>\r\n                    </td>\r\n                    <td>\r\n                      <ion-checkbox class=\"align-self-center\" id=\"allowApplicationChargesInVac\"\r\n                        formControlName=\"allowApplicationChargesInVac\"></ion-checkbox>\r\n                    </td>\r\n                    <td>\r\n                      <ion-label for=\"allowApplicationChargesInVac\">\r\n                        رسوم طلب قرض\r\n                      </ion-label>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <ion-checkbox class=\"align-self-center\" id=\"allowChangesFundingInVac\"\r\n                        formControlName=\"allowChangesFundingInVac\"></ion-checkbox>\r\n                    </td>\r\n                    <td>\r\n                      <ion-label for=\"allowChangesFundingInVac\">\r\n                        تغيير مصدر تمويل\r\n                      </ion-label>\r\n                    </td>\r\n                    <td>\r\n                      <ion-checkbox class=\"align-self-center\" id=\"allowInstallmentRepaymentInVac\"\r\n                        formControlName=\"allowInstallmentRepaymentInVac\"></ion-checkbox>\r\n                    </td>\r\n                    <td>\r\n                      <ion-label for=\"allowInstallmentRepaymentInVac\">\r\n                        سداد قسط\r\n                      </ion-label>\r\n                    </td>\r\n                    <td>\r\n                      <ion-checkbox class=\"align-self-center\" id=\"allowChequeMovementInVac\"\r\n                        formControlName=\"allowChequeMovementInVac\"></ion-checkbox>\r\n                    </td>\r\n                    <td>\r\n                      <ion-label for=\"allowChequeMovementInVac\">\r\n                        نقل مستندات السداد\r\n                      </ion-label>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-accordion>\r\n      <ion-accordion value=\"CreditScoreInquiry\">\r\n        <ion-item slot=\"header\" id=\"accordion-header\">\r\n          <ion-label>الاستعلام الائتماني</ion-label>\r\n        </ion-item>\r\n        <div class=\"row justify-content-center mx-2 my-2\" slot=\"content\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"form-group\"\r\n              [ngClass]=\"{'text-danger input-validator': isLoanTypeDetailsSubmitted && loanTypeDetailsControls.maxIScoreDays.errors}\">\r\n              <ion-label for=\"maxIScoreDays\" class=\"col-form-label form-label-required\">\r\n                مدة الاستعلام الائتمانى\r\n              </ion-label>\r\n              <div>\r\n                <ion-input type=\"text\" id=\"maxIScoreDays\" formControlName=\"maxIScoreDays\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"></ion-input>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <table class=\"w-100\">\r\n            <thead>\r\n              <th></th>\r\n              <th></th>\r\n              <th></th>\r\n              <th></th>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <ion-checkbox class=\"align-self-center\" id=\"requestIScore\"\r\n                    formControlName=\"requestIScore\"></ion-checkbox>\r\n                </td>\r\n                <td>\r\n                  <ion-label for=\"requestIScore\" class=\"col-form-label form-label-required\">\r\n                    استعلام مع طلب قرض\r\n                  </ion-label>\r\n                </td>\r\n                <td>\r\n                  <ion-checkbox class=\"align-self-center\" id=\"requestIScoreAutomatic\"\r\n                    formControlName=\"requestIScoreAutomatic\"\r\n                    [checked]=\"(loanTypeDetailsControls.requestIScore.value == 0)? false : loanTypeDetailsControls.requestIScoreAutomatic.value\"\r\n                    [disabled]=\"(loanTypeDetailsControls.requestIScore.value == 0)? true : false\"></ion-checkbox>\r\n                </td>\r\n                <td>\r\n                  <ion-label for=\"requestIScoreAutomatic\" class=\"col-form-label form-label-required\">\r\n                    استعلام اتوماتيك مع طلب قرض\r\n                  </ion-label>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <ion-checkbox class=\"align-self-center\" id=\"reqGrpLeaderIScore\" formControlName=\"reqGrpLeaderIScore\"\r\n                    [checked]=\"(loanTypeDetailsControls.reqGrpMembersIScore.value == 1)? false : loanTypeDetailsControls.reqGrpLeaderIScore.value\"\r\n                    [disabled]=\"(loanTypeDetailsControls.reqGrpMembersIScore.value == 1)? true : false\"></ion-checkbox>\r\n                </td>\r\n                <td>\r\n                  <ion-label for=\"reqGrpLeaderIScore\" class=\"col-form-label form-label-required\">\r\n                    استعلام لرئيس المجموعة مع طلب قرض\r\n                  </ion-label>\r\n                </td>\r\n                <td>\r\n                  <ion-checkbox class=\"align-self-center\" id=\"reqGrpMembersIScore\" formControlName=\"reqGrpMembersIScore\"\r\n                    [checked]=\"(loanTypeDetailsControls.reqGrpLeaderIScore.value == 1)? false : loanTypeDetailsControls.reqGrpMembersIScore.value\"\r\n                    [disabled]=\"(loanTypeDetailsControls.reqGrpLeaderIScore.value == 1)? true : false\"></ion-checkbox>\r\n                </td>\r\n                <td>\r\n                  <ion-label for=\"reqGrpMembersIScore\" class=\"col-form-label form-label-required\">\r\n                    استعلام لرئيس المجموعة مع طلب قرض\r\n                  </ion-label>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <ion-checkbox class=\"align-self-center\" id=\"iscoreAutoReject\" formControlName=\"iscoreAutoReject\"\r\n                    [checked]=\"(loanTypeDetailsControls.requestIScoreAutomatic.value == 0) ? false : loanTypeDetailsControls.iscoreAutoReject.value\"\r\n                    [disabled]=\"(loanTypeDetailsControls.requestIScoreAutomatic.value == 0)? true : false\"\r\n                    (ionChange)=\"changingIscoreAutoRejectStatus($event)\"></ion-checkbox>\r\n                </td>\r\n                <td>\r\n              <tr>\r\n                <td>\r\n                  <ion-label for=\"reqGrpMembersIScore\" class=\"col-form-label\">\r\n                    الرفض التلقائي عند التقييم الائتماني أقل من\r\n                  </ion-label>\r\n                </td>\r\n                <td>\r\n                  <ion-input class=\"form-control mr-3\" type=\"text\" id=\"iscoreMinScore\" formControlName=\"iscoreMinScore\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\r\n                    [disabled]=\"loanTypeDetailsControls.iscoreAutoReject.value == 0\"></ion-input>\r\n                  <ion-note color=\"danger\" class=\"input-validator\"\r\n                    *ngIf=\"isLoanTypeDetailsSubmitted && loanTypeDetails.controls['iscoreMinScore'].hasError('required')\">\r\n                    لا يمكن تفعيل الرفض التلقائي بدون تحديد الحد الأدنى\r\n                    للتقييم الائتماني\r\n                  </ion-note>\r\n                  <ion-note color=\"danger\" class=\"input-validator\"\r\n                    *ngIf=\"isLoanTypeDetailsSubmitted && loanTypeDetails.controls['iscoreMinScore'].hasError('pattern')\">\r\n                    يجب إدخال رقم مكون من 3 أرقام كحد أقصى\r\n                  </ion-note>\r\n                </td>\r\n              </tr>\r\n              </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </ion-accordion>\r\n      <ion-accordion value=\"AccumulatedInterest\"\r\n        [disabled]=\"this.ConvertBooleanToInt(this.loanTypeDetailsControls.accumulatedInterest.value) == 0? true:false\">\r\n        <ion-item slot=\"header\" id=\"accordion-header\">\r\n          <ion-label>اجراءات الفائدة الدورية</ion-label>\r\n        </ion-item>\r\n        <div class=\"row justify-content-center mx-2 my-2 table-responsive\" slot=\"content\">\r\n          <div class=\"row justify-content-center mx-2 my-2\" slot=\"content\">\r\n            <div class=\"col-lg-6\">\r\n              <ion-label for=\"daysBeforePenalty\" class=\"col-form-label form-label-required\">\r\n                عدد الايام قبل حساب الغرامة\r\n              </ion-label>\r\n              <ion-input type=\"text\" id=\"daysBeforePenalty\" formControlName=\"daysBeforePenalty\"\r\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"></ion-input>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n              <ion-label for=\"cyclesBeforeBlock\" class=\"col-form-label form-label-required\">\r\n                فترة السماح قبل الحظر\r\n              </ion-label>\r\n              <ion-input type=\"text\" id=\"cyclesBeforeBlock\" formControlName=\"cyclesBeforeBlock\"\r\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 99, 0)\"></ion-input>\r\n            </div>\r\n          </div>\r\n          <div class=\"row justify-content mx-2 my-2\" slot=\"content\">\r\n            <div class=\"col-lg-2\">\r\n              <ion-label for=\"penaltyType\" class=\"col-form-label form-label-required\">\r\n                نوع الغرامة\r\n              </ion-label>\r\n              <ion-select interface=\"popover\" id=\"penaltyType\" formControlName=\"penaltyType\">\r\n                <ion-select-option *ngFor=\"let penaltyType of penaltyTypes\" [value]=\"penaltyType.ref_code\">\r\n                  {{penaltyType.ref_desc}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n              <div class=\"row justify-center-content\" slot=\"content\">\r\n                <div class=\"col-lg-6\">\r\n                  <ion-label for=\"penaltyRate\" class=\"col-form-label form-label-required\"\r\n                    *ngIf=\"this.loanTypeDetailsControls.penaltyType.value === '1'\">\r\n                    نسبة الغرامة\r\n                  </ion-label>\r\n                  <ion-input type=\"text\" id=\"penaltyRate\" formControlName=\"penaltyRate\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\r\n                    *ngIf=\"this.loanTypeDetailsControls.penaltyType.value === '1'\"></ion-input>\r\n                </div>\r\n                <div class=\"col-lg-2\" style=\"align-self: center\">\r\n                  <ion-label *ngIf=\"this.loanTypeDetailsControls.penaltyType.value === '1'\" style=\"font-size: large\">\r\n                    %\r\n                  </ion-label>\r\n                </div>\r\n                <div class=\"col-lg-4\" style=\"align-self: center\">\r\n                  <ion-label for=\"penaltyCalcType\" class=\"col-form-label form-label-required\"\r\n                    *ngIf=\"this.loanTypeDetailsControls.penaltyType.value === '1'\">\r\n                    حساب الغرامة على\r\n                  </ion-label>\r\n                  <ion-select interface=\"popover\" id=\"penaltyCalcType\" formControlName=\"penaltyCalcType\"\r\n                    *ngIf=\"this.loanTypeDetailsControls.penaltyType.value === '1'\">\r\n                    <ion-select-option *ngFor=\"let penaltyCalcType of penaltyCalcTypes\"\r\n                      [value]=\"penaltyCalcType.ref_code\">\r\n                      {{penaltyCalcType.ref_desc}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </div>\r\n              </div>\r\n              <ion-label for=\"penaltyAmount\" class=\"col-form-label form-label-required\"\r\n                *ngIf=\"this.loanTypeDetailsControls.penaltyType.value === '2'\">\r\n                قيمة الغرامة\r\n              </ion-label>\r\n              <ion-input type=\"text\" id=\"penaltyAmount\" formControlName=\"penaltyAmount\"\r\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 2)\"\r\n                *ngIf=\"this.loanTypeDetailsControls.penaltyType.value === '2'\"></ion-input>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n              <ion-label for=\"interestPeriodType\" class=\"col-form-label form-label-required\">\r\n                تحسب الفائدة كل\r\n              </ion-label>\r\n              <ion-select interface=\"popover\" id=\"interestPeriodType\" formControlName=\"interestPeriodType\">\r\n                <ion-select-option *ngFor=\"let interestPeriodType of interestPeriodTypes\"\r\n                  [value]=\"interestPeriodType.ref_code\">\r\n                  {{interestPeriodType.ref_desc}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </div>\r\n          </div>\r\n\r\n          <table class=\"w-100\">\r\n            <tr>\r\n              <td>\r\n                <div class=\"row justify-content mx-2 my-2\" slot=\"content\">\r\n                  <ion-checkbox class=\"align-self-center\" style=\"margin-right: 10px\" id=\"compoundInterest\"\r\n                    formControlName=\"compoundInterest\"></ion-checkbox>\r\n                  <ion-label for=\"compoundInterest\" class=\"col-form-label\" style=\"margin-right: 1%\">\r\n                    احتساب فائدة علي الفائدة\r\n                  </ion-label>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </ion-accordion>\r\n      <ion-accordion value=\"Workflow\" *ngIf=\"workflowAllowed\"\r\n        [disabled]=\"this.ConvertBooleanToInt(this.loanTypeDetailsControls.useWorkflow.value) == 0? true:false \">\r\n        <ion-item slot=\"header\" id=\"accordion-header\">\r\n          <ion-label>خطوات إجراءات القرض</ion-label>\r\n        </ion-item>\r\n        <ion-item slot=\"content\" class=\"p-5\">\r\n          <ion-label for=\"exceptionHandler\" class=\"col-form-label form-label-required\">\r\n            معالج الطلبات المعلقة\r\n          </ion-label>\r\n          <ion-select interface=\"popover\" id=\"exceptionHandler\" formControlName=\"exceptionHandler\">\r\n            <ion-select-option *ngFor=\"let exception_job of exception_jobs\" [value]=\"exception_job.job_id\">\r\n              {{exception_job.job_name}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n          <div\r\n            *ngIf=\"loanTypeDetails.get('exceptionHandler').touched && loanTypeDetails.get('exceptionHandler').invalid\">\r\n            <p *ngIf=\"loanTypeDetails.get('exceptionHandler').errors.required\">\r\n              يجب ادخال معالج الطلبات المعلقة\r\n            </p>\r\n          </div>\r\n        </ion-item>\r\n        <div class=\"row justify-content-center mx-2 my-2 table-responsive\" slot=\"content\">\r\n          <table class=\"table\">\r\n            <thead>\r\n              <th>اسم الخطوة</th>\r\n              <th>الوظيفة</th>\r\n              <th>الخطوة المقبلة</th>\r\n              <th class=\"w-10\">\r\n                <div class=\"d-flex justify-content-end\">\r\n                  <ion-button id=\"create-step-modal\" (click)=\"createStepBtn()\"><ion-icon\r\n                      name=\"add-circle-outline\"></ion-icon></ion-button>\r\n                </div>\r\n              </th>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let step of steps\">\r\n                <td>{{step.step_name}}</td>\r\n                <td>{{GetJobName(step.job_id)}}</td>\r\n                <td>{{GetStepName(step.next_step)}}</td>\r\n                <td class=\"w-10\">\r\n                  <div class=\"d-flex justify-content-center\">\r\n                    <ion-button (click)=\"RemoveStep(step)\" color=\"danger\"><ion-icon name=\"trash-outline\"></ion-icon>\r\n                    </ion-button>\r\n                    <ion-button (click)=\"OpenEditModal(step)\"><ion-icon name=\"create-outline\"></ion-icon>\r\n                    </ion-button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </ion-accordion>\r\n      <ion-accordion *ngIf=\"overdraftActiveDbFlag\" value=\"OverDraft\" [disabled]=\"!overDraftAllowed\">\r\n        <ion-item slot=\"header\" id=\"accordion-header\">\r\n          <ion-label> {{loanTypeCategories[3].ref_desc}}</ion-label>\r\n        </ion-item>\r\n        <ion-row slot=\"content\">\r\n          <ion-grid>\r\n            <ion-row class=\"justify-content-center\">\r\n              <ion-col size=\"6\" sizeLg=\"2\" sizeMd=\"3\" sizeSm=\"6\">\r\n                <ion-label class=\"form-label form-label-required\">\r\n                  نسبة الغرامة\r\n                </ion-label>\r\n                <ion-input type=\"text\" formControlName=\"overDraftPenaltyRate\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 2)\"></ion-input>\r\n                <ion-note color=\"danger\" class=\"input-validator\"\r\n                  *ngIf=\"isLoanTypeDetailsSubmitted && loanTypeDetails.controls['overDraftPenaltyRate'].hasError('required')\">\r\n                  يجب إدخال نسبة الغرامة\r\n                </ion-note>\r\n              </ion-col>\r\n              <ion-col size=\"6\" sizeLg=\"2\" sizeMd=\"3\" sizeSm=\"6\">\r\n                <ion-label class=\"form-label\" style=\"color: transparent\">-</ion-label>\r\n                <ion-select interface=\"popover\" class=\"subselect\" formControlName=\"overDraftPenaltyPeriodType\">\r\n                  <ion-select-option *ngFor=\"let pen of overDraftPenaltyPeriodTypeModal\" [value]=\"pen.ref_code\">\r\n                    {{pen.ref_desc}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n              <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\r\n                <ion-label class=\"form-label form-label-required\">\r\n                  احتساب الغرامة علي\r\n                </ion-label>\r\n                <ion-select interface=\"popover\" class=\"subselect\" formControlName=\"overDraftPenaltyOn\">\r\n                  <ion-select-option *ngFor=\"let pen of overDraftPenaltyOnModal\" [value]=\"pen.ref_code\">\r\n                    {{pen.ref_desc}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-note color=\"danger\" class=\"input-validator\"\r\n                  *ngIf=\"isLoanTypeDetailsSubmitted && loanTypeDetails.controls['overDraftPenaltyOn'].hasError('required')\">\r\n                  يجب الاختيار\r\n                </ion-note>\r\n              </ion-col>\r\n              <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\r\n                <ion-label class=\"form-label form-label-required\">\r\n                  احتساب الغرامة من (ايام)\r\n                </ion-label>\r\n                <ion-input type=\"text\" formControlName=\"overDraftPenaltyStartDays\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 2)\"></ion-input>\r\n                <ion-note color=\"danger\" class=\"input-validator\"\r\n                  *ngIf=\"isLoanTypeDetailsSubmitted && loanTypeDetails.controls['overDraftPenaltyStartDays'].hasError('required')\">\r\n                  يجب الادخال\r\n                </ion-note>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"6\" sizeLg=\"2\" sizeMd=\"3\" sizeSm=\"6\">\r\n                <ion-label class=\"form-label form-label-required\">\r\n                  احتساب الفائدة علي\r\n                </ion-label>\r\n                <ion-select interface=\"popover\" class=\"subselect\" formControlName=\"overDraftInterestOn\">\r\n                  <ion-select-option *ngFor=\"let interest of overDraftInterestOnModal\" [value]=\"interest.ref_code\">\r\n                    {{interest.ref_desc}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-note color=\"danger\" class=\"input-validator\"\r\n                  *ngIf=\"isLoanTypeDetailsSubmitted && loanTypeDetails.controls['overDraftInterestOn'].hasError('required')\">\r\n                  يجب الاختيار\r\n                </ion-note>\r\n              </ion-col>\r\n              <ion-col size=\"6\" sizeLg=\"2\" sizeMd=\"3\" sizeSm=\"6\">\r\n                <ion-label class=\"form-label form-label-required\">\r\n                  نوع الرسوم\r\n                </ion-label>\r\n                <ion-select interface=\"popover\" class=\"subselect\" formControlName=\"overDraftChargesType\"\r\n                  (ionChange)=\"overDraftChargeTypeChanging($event)\">\r\n                  <ion-select-option *ngFor=\"let pen of overDraftChargesTypeModal\" [value]=\"pen.ref_code\">\r\n                    {{pen.ref_desc}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-col>\r\n              <ion-col size=\"6\" sizeLg=\"2\" sizeMd=\"3\" sizeSm=\"6\"\r\n                *ngIf=\"this.loanTypeDetailsControls.overDraftChargesType.value === '1'\">\r\n                <ion-label class=\"form-label form-label-required\">\r\n                  نسبة الرسوم\r\n                </ion-label>\r\n                <ion-input type=\"text\" formControlName=\"overDraftChargesRate\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 2)\"></ion-input>\r\n                <ion-note color=\"danger\" class=\"input-validator\"\r\n                  *ngIf=\"isLoanTypeDetailsSubmitted && loanTypeDetails.controls['overDraftChargesRate'].hasError('required')\">\r\n                  يجب الادخال\r\n                </ion-note>\r\n              </ion-col>\r\n              <ion-col size=\"6\" sizeLg=\"2\" sizeMd=\"3\" sizeSm=\"6\"\r\n                *ngIf=\"this.loanTypeDetailsControls.overDraftChargesType.value === '2'\">\r\n                <ion-label class=\"form-label form-label-required\">\r\n                  قيمة الرسوم\r\n                </ion-label>\r\n                <ion-input type=\"text\" formControlName=\"overDraftChargesAmount\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 2)\"></ion-input>\r\n                <ion-note color=\"danger\" class=\"input-validator\"\r\n                  *ngIf=\"isLoanTypeDetailsSubmitted && loanTypeDetails.controls['overDraftChargesAmount'].hasError('required')\">\r\n                  يجب الادخال\r\n                </ion-note>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\r\n                <ion-label class=\"form-label form-label-required\">\r\n                  الحظر من\r\n                </ion-label>\r\n                <ion-select interface=\"popover\" class=\"subselect\" formControlName=\"overDraftBlockFrom\"\r\n                  [disabled]=\"true\">\r\n                  <ion-select-option *ngFor=\"let block of overDraftBlockFromModal\" [value]=\"block.ref_code\">\r\n                    {{block.ref_desc}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n                <ion-note color=\"danger\" class=\"input-validator\"\r\n                  *ngIf=\"isLoanTypeDetailsSubmitted && loanTypeDetails.controls['overDraftBlockFrom'].hasError('required')\">\r\n                  يجب الاختيار\r\n                </ion-note>\r\n              </ion-col>\r\n              <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\r\n                <ion-label class=\"form-label form-label-required\">\r\n                  عدد ايام للحظر\r\n                </ion-label>\r\n                <ion-input type=\"text\" formControlName=\"overDraftDaysToBlock\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 2)\"></ion-input>\r\n                <ion-note color=\"danger\" class=\"input-validator\"\r\n                  *ngIf=\"isLoanTypeDetailsSubmitted && loanTypeDetails.controls['overDraftDaysToBlock'].hasError('required')\">\r\n                  يجب الادخال\r\n                </ion-note>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col size=\"12\" sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"12\">\r\n                <ion-checkbox class=\"text-center\" formControlName=\"overDraftMonthlyInterest\"\r\n                  [checked]=\"(loanTypeDetailsControls.overDraftMonthlyInterest.value == 0) ? false : loanTypeDetailsControls.overDraftMonthlyInterest.value\"></ion-checkbox>\r\n                <ion-note style=\"padding-right: 5px\">\r\n                  <ion-label for=\"overDraftMonthlyInterest\">\r\n                    احتساب الفائدة شهرياً</ion-label>\r\n                </ion-note>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"justify-content-center\">\r\n              <ion-button (click)=\"toggleOverDraftPrioritiesModal(true)\">\r\n                تعديل أولويات السداد\r\n              </ion-button>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-row>\r\n      </ion-accordion>\r\n    </ion-accordion-group>\r\n    <ion-modal #createStepModal trigger=\"create-step-modal\" (willPresent)=\"onWillPresentEdit($event)\"\r\n      backdropDismiss=\"false\">\r\n      <ng-template>\r\n        <ion-header>\r\n          <ion-toolbar>\r\n            <ion-buttons slot=\"start\">\r\n              <ion-button (click)=\"cancelCreateStep()\"><ion-icon name=\"ban-outline\"></ion-icon></ion-button>\r\n            </ion-buttons>\r\n            <ion-title>أدخل خطوة</ion-title>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-button (click)=\"confirmCreateStep()\" [strong]=\"true\"><ion-icon\r\n                  name=\"add-outline\"></ion-icon></ion-button>\r\n            </ion-buttons>\r\n          </ion-toolbar>\r\n        </ion-header>\r\n        <ion-content class=\"ion-padding-horizontal\">\r\n          <form (ngSubmit)=\"StepSubmit(true)\" [formGroup]=\"stepDetails\">\r\n            <ion-list>\r\n              <div class=\"form-group\">\r\n                <ion-label for=\"stepName\"> اسم الخطوة </ion-label>\r\n                <ion-item lines=\"none\">\r\n                  <ion-input type=\"text\" id=\"stepName\" formControlName=\"stepName\"></ion-input>\r\n                </ion-item>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <ion-label for=\"nextStep\"> الخطوة التالية </ion-label>\r\n                <ion-item lines=\"none\" class=\"d-flex justify-content-between\">\r\n                  <ion-select interface=\"popover\" id=\"nextStep\" formControlName=\"nextStep\">\r\n                    <ion-select-option [value]=\"-1\">\r\n                      لا اختيار\r\n                    </ion-select-option>\r\n                    <div *ngFor=\"let step of steps\">\r\n                      <ion-select-option [value]=\"step.step_id\" *ngIf=\"step.step_id != 0\">\r\n                        {{step.step_name}}\r\n                      </ion-select-option>\r\n                    </div>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <ion-label for=\"job\"> تم تعيين الوظيفة </ion-label>\r\n                <ion-item lines=\"none\">\r\n                  <ion-select interface=\"popover\" id=\"job\" formControlName=\"job\" class=\"px-1\">\r\n                    <ion-select-option *ngFor=\"let job of jobs\" [value]=\"job.job_id\">\r\n                      {{job.job_name}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <ion-label for=\"actions\"> الإجراءات الممكنة </ion-label>\r\n                <ion-item lines=\"none\">\r\n                  <ion-select id=\"actions\" class=\"px-1\" [multiple]=\"true\" formControlName=\"actions\">\r\n                    <ion-select-option *ngFor=\"let docAction of docActions\" [value]=\"docAction.action_id\">\r\n                      {{docAction.action_name}}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <ion-label> تنتهي خلال وقت العمل</ion-label>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label for=\"stepDays\" slot=\"start\" class=\"w-20\">\r\n                    أيام العمل\r\n                  </ion-label>\r\n                  <ion-input type=\"text\" id=\"stepDays\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\r\n                    formControlName=\"stepDays\"></ion-input>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label for=\"stepHours\" slot=\"start\" class=\"w-20\">\r\n                    ساعات العمل\r\n                  </ion-label>\r\n                  <ion-input type=\"text\" id=\"stepHours\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 23, 0)\"\r\n                    formControlName=\"stepHours\"></ion-input>\r\n                </ion-item>\r\n                <ion-item lines=\"none\">\r\n                  <ion-label for=\"stepMinutes\" slot=\"start\" class=\"w-20\">\r\n                    دقائق العمل\r\n                  </ion-label>\r\n                  <ion-input type=\"text\" id=\"stepMinutes\"\r\n                    (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 59, 0)\"\r\n                    formControlName=\"stepMinutes\"></ion-input>\r\n                </ion-item>\r\n              </div>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-checkbox class=\"align-self-center\" id=\"locationRequired\"\r\n                    formControlName=\"locationRequired\"></ion-checkbox>\r\n                  <ion-note style=\"padding-right: 5px\">\r\n                    <ion-label for=\"locationRequired\"> يجب أخذ لقطة</ion-label>\r\n                  </ion-note>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <input type=\"checkbox\" class=\"align-self-center\" [checked]=\"isLoanTypeHasDocumentsSelected()\"\r\n                    (click)=\"toggleIsRequiredForDocuments()\" />\r\n                  <ion-note style=\"padding-right: 5px\">\r\n                    <ion-label> يجب اضافة مستندات</ion-label>\r\n                  </ion-note>\r\n                </ion-col>\r\n                <ion-col>\r\n                  <ion-button [disabled]=\"!getShowDocumentsDetailsBtn\"\r\n                    (click)=\"toggleDocumentRequiredModal()\">المستندات</ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n              <!-- <div class=\"row\">\r\n                <div class=\"col-9\">\r\n                  <ion-checkbox class=\"align-self-center\" id=\"documentRequired\"\r\n                    formControlName=\"locationRequired\"></ion-checkbox>\r\n                  <div class=\"col-3\">\r\n                    <ion-label for=\"locationRequired\"> يجب أخذ لقطة</ion-label>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n            </ion-list>\r\n          </form>\r\n        </ion-content>\r\n      </ng-template>\r\n    </ion-modal>\r\n    <ion-modal #editStepModal [isOpen]=\"isEditModalOpen\" (didDismiss)=\"onDidDismiss($event)\" backdropDismiss=\"false\"\r\n      (willPresent)=\"onWillPresentEdit($event)\">\r\n      <ng-template>\r\n        <ion-header>\r\n          <ion-toolbar>\r\n            <ion-buttons slot=\"start\">\r\n              <ion-button (click)=\"cancelEditStep()\"><ion-icon name=\"ban-outline\"></ion-icon></ion-button>\r\n            </ion-buttons>\r\n            <ion-title>تعديل خطوة</ion-title>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-button (click)=\"confirmEditStep()\" [strong]=\"true\"><ion-icon\r\n                  name=\"checkmark-outline\"></ion-icon></ion-button>\r\n            </ion-buttons>\r\n          </ion-toolbar>\r\n        </ion-header>\r\n        <ion-content class=\"ion-padding-horizontal\">\r\n          <form (ngSubmit)=\"StepSubmit(false)\" [formGroup]=\"stepDetails\" style=\"padding-bottom: 50px\">\r\n            <div class=\"form-group\">\r\n              <ion-label for=\"stepName\"> اسم الخطوة </ion-label>\r\n              <ion-item lines=\"none\">\r\n                <ion-input type=\"text\" id=\"stepName\" formControlName=\"stepName\"></ion-input>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <ion-label for=\"nextStep\"> الخطوة التالية </ion-label>\r\n              <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                <ion-select interface=\"popover\" id=\"nextStep\" formControlName=\"nextStep\">\r\n                  <ion-select-option [value]=\"-1\">\r\n                    لا اختيار\r\n                  </ion-select-option>\r\n                  <div *ngFor=\"let step of steps\">\r\n                    <ion-select-option [value]=\"step.step_id\"\r\n                      *ngIf=\"step.step_id !== selectedStep.step_id && step.step_id != 0\">\r\n                      {{step.step_name}}\r\n                    </ion-select-option>\r\n                  </div>\r\n                </ion-select>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <ion-label for=\"job\"> تم تعيين الوظيفة </ion-label>\r\n              <ion-item class=\"d-flex justify-content-between\" lines=\"none\">\r\n                <ion-select interface=\"popover\" id=\"job\" formControlName=\"job\">\r\n                  <ion-select-option *ngFor=\"let job of jobs\" [value]=\"job.job_id\">\r\n                    {{job.job_name}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <ion-label for=\"actions\"> الإجراءات الممكنة </ion-label>\r\n              <ion-item lines=\"none\">\r\n                <ion-select id=\"actions\" class=\"px-1\" [multiple]=\"true\" formControlName=\"actions\">\r\n                  <ion-select-option *ngFor=\"let docAction of docActions\" [value]=\"docAction.action_id\">\r\n                    {{docAction.action_name}}\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <ion-label for=\"job\"> تنتهي خلال وقت العمل</ion-label>\r\n              <ion-item lines=\"none\">\r\n                <ion-label for=\"stepDays\" slot=\"start\" class=\"w-20\">\r\n                  أيام العمل\r\n                </ion-label>\r\n                <ion-input type=\"text\" id=\"stepDays\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 999, 0)\"\r\n                  formControlName=\"stepDays\"></ion-input>\r\n              </ion-item>\r\n              <ion-item lines=\"none\">\r\n                <ion-label for=\"stepHours\" slot=\"start\" class=\"w-20\">\r\n                  ساعات العمل\r\n                </ion-label>\r\n                <ion-input type=\"text\" id=\"stepHours\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 23, 0)\"\r\n                  formControlName=\"stepHours\"></ion-input>\r\n              </ion-item>\r\n              <ion-item lines=\"none\">\r\n                <ion-label for=\"stepMinutes\" slot=\"start\" class=\"w-20\">\r\n                  دقائق العمل\r\n                </ion-label>\r\n                <ion-input type=\"text\" id=\"stepMinutes\"\r\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 59, 0)\"\r\n                  formControlName=\"stepMinutes\"></ion-input>\r\n              </ion-item>\r\n            </div>\r\n            <ion-row>\r\n              <ion-col>\r\n                <ion-checkbox class=\"align-self-center\" id=\"locationRequired\"\r\n                  formControlName=\"locationRequired\"></ion-checkbox>\r\n                <ion-note style=\"padding-right: 5px\">\r\n                  <ion-label for=\"locationRequired\"> يجب أخذ لقطة</ion-label>\r\n                </ion-note>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col>\r\n                <input type=\"checkbox\" class=\"align-self-center\" [checked]=\"isLoanTypeHasDocumentsSelected()\"\r\n                  (click)=\"toggleIsRequiredForDocuments()\" />\r\n                <ion-note style=\"padding-right: 5px\">\r\n                  <ion-label> يجب اضافة مستندات</ion-label>\r\n                </ion-note>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-button [disabled]=\"!getShowDocumentsDetailsBtn\"\r\n                  (click)=\"toggleDocumentRequiredModal()\">المستندات</ion-button>\r\n              </ion-col>\r\n            </ion-row>\r\n          </form>\r\n        </ion-content>\r\n      </ng-template>\r\n    </ion-modal>\r\n    <ion-modal #documentRequiredModal [isOpen]=\"documentRequiredModalObject.isOpen\" backdropDismiss=\"false\">\r\n      <ng-template>\r\n        <ion-header>\r\n          <ion-toolbar>\r\n            <!-- <ion-buttons slot=\"start\">\r\n              <ion-button (click)=\"toggleDocumentRequiredModal()\"><ion-icon name=\"ban-outline\"></ion-icon></ion-button>\r\n            </ion-buttons> -->\r\n            <ion-title>تعديل خطوة</ion-title>\r\n            <ion-buttons slot=\"end\">\r\n              <ion-button (click)=\"confirmDocumentRequiredModal()\" [strong]=\"true\"><ion-icon\r\n                  name=\"checkmark-outline\"></ion-icon></ion-button>\r\n            </ion-buttons>\r\n          </ion-toolbar>\r\n        </ion-header>\r\n        <ion-content class=\"documentContent\">\r\n          <ion-row class=\"text-center ion-padding\">\r\n            <ion-col class=\"text-center\">\r\n              <ion-label> اختار </ion-label>\r\n            </ion-col>\r\n            <ion-col> اسم المستند </ion-col>\r\n            <ion-col> يجب ادخال هذا المستند </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"text-center\" *ngFor=\"let document of documentsInformation.allAvailableDocuments\">\r\n            <ion-col>\r\n              <input type=\"checkbox\"\r\n                [checked]=\"isDocumentChecked(document) || isDocumentTypeCodeIsSelectedInAnotherStep(document)\"\r\n                (click)=\"makeSpecificDocument(document)\"\r\n                [disabled]=\"isDocumentTypeCodeIsSelectedInAnotherStep(document)\" />\r\n            </ion-col>\r\n            <ion-col> {{document.documentTypeDesc}} </ion-col>\r\n            <ion-col>\r\n              <input type=\"checkbox\"\r\n                [checked]=\"checkIfSelectedDocumentMustToUse(document.documentTypeCode) || isDocumentTypeCodeIsRequiredInAnotherStep(document)\"\r\n                [disabled]=\"!isSpecificDocumentTypeCodeIsChecked(document.documentTypeCode)\"\r\n                (click)=\"assignDocumentToMustUse(document)\" />\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-content>\r\n      </ng-template>\r\n    </ion-modal>\r\n    <ion-modal #modal [isOpen]=\"isOverDraftPrioritiesOpen\" (didDismiss)=\"toggleOverDraftPrioritiesModal(false);\">\r\n      <ng-template>\r\n        <ion-toolbar>\r\n          <ion-title>أولويات السداد</ion-title>\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"toggleOverDraftPrioritiesModal(false)\">\r\n              <ion-icon name=\"close-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </ion-toolbar>\r\n        <ion-card class=\"w-100 h-100 mx-0 my-0 inherit-color\">\r\n          <ion-card-content class=\"align-middle modalSize\">\r\n            <ion-grid class=\"card inherit-color px-0 py-0\">\r\n              <div class=\"card-body\">\r\n                <ion-list>\r\n                  <ion-reorder-group [disabled]=\"false\" (ionItemReorder)=\"reorderItems($any($event))\">\r\n                    <ion-item *ngFor=\"let payment of filteredPaymentPriorities\" [id]=\"payment.id\">\r\n                      {{ payment.name }}\r\n                      <ion-reorder slot=\"end\"></ion-reorder>\r\n                    </ion-item>\r\n                  </ion-reorder-group>\r\n                </ion-list>\r\n              </div>\r\n            </ion-grid>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ng-template>\r\n    </ion-modal>\r\n\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-lg-12 d-flex justify-content-center\">\r\n        <ion-button *ngIf=\"!createNewType\" (click)=\"LoanTypeDetailsSubmit(false)\">حفظ التعديلات</ion-button>\r\n        <ion-button *ngIf=\"createNewType\" (click)=\"LoanTypeDetailsSubmit(true)\">إضافة</ion-button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_loan-types_loan-types_module_ts.js.map