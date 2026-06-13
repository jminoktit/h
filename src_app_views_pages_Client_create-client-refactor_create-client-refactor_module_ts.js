"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_Client_create-client-refactor_create-client-refactor_module_ts"],{

/***/ 80440:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/Client/create-client-refactor/create-client-refactor-routing.module.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateClientRefactorPageRoutingModule": function() { return /* binding */ CreateClientRefactorPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _create_client_refactor_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-client-refactor.page */ 71969);






var routes = [{
  path: '',
  component: _create_client_refactor_page__WEBPACK_IMPORTED_MODULE_2__.CreateClientRefactorPage
}];

var CreateClientRefactorPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CreateClientRefactorPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CreateClientRefactorPageRoutingModule);
});

CreateClientRefactorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], CreateClientRefactorPageRoutingModule);


/***/ }),

/***/ 98847:
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/Client/create-client-refactor/create-client-refactor.module.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateClientRefactorPageModule": function() { return /* binding */ CreateClientRefactorPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _create_client_refactor_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-client-refactor-routing.module */ 80440);
/* harmony import */ var _create_client_refactor_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-client-refactor.page */ 71969);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-archwizard */ 38531);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);












var CreateClientRefactorPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function CreateClientRefactorPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CreateClientRefactorPageModule);
});

CreateClientRefactorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _create_client_refactor_routing_module__WEBPACK_IMPORTED_MODULE_2__.CreateClientRefactorPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, angular_archwizard__WEBPACK_IMPORTED_MODULE_10__.ArchwizardModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_create_client_refactor_page__WEBPACK_IMPORTED_MODULE_3__.CreateClientRefactorPage]
})], CreateClientRefactorPageModule);


/***/ }),

/***/ 71969:
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/Client/create-client-refactor/create-client-refactor.page.ts ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateClientRefactorPage": function() { return /* binding */ CreateClientRefactorPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _create_client_refactor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-client-refactor.page.html?ngResource */ 26695);
/* harmony import */ var _create_client_refactor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-client-refactor.page.scss?ngResource */ 53081);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-archwizard */ 38531);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/client.service */ 2671);
/* harmony import */ var src_app_core_services_e_disb_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/e-disb.service */ 92078);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);
/* harmony import */ var src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/location.service */ 33094);
/* harmony import */ var src_app_core_services_officer_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/officer.service */ 84598);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_services_sms_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/sms.service */ 26921);
/* harmony import */ var src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/validators/custom-validators */ 92609);

























var CreateClientRefactorPage = /*#__PURE__*/function () {
  function CreateClientRefactorPage(FormBuilder, alertService, referencesService, cdref, clientService, smsService, locationService, authService, route, router, alertController, platform, eDisburseService, inputMaskingService, officerService, datePipe) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CreateClientRefactorPage);

    this.FormBuilder = FormBuilder;
    this.alertService = alertService;
    this.referencesService = referencesService;
    this.cdref = cdref;
    this.clientService = clientService;
    this.smsService = smsService;
    this.locationService = locationService;
    this.authService = authService;
    this.route = route;
    this.router = router;
    this.alertController = alertController;
    this.platform = platform;
    this.eDisburseService = eDisburseService;
    this.inputMaskingService = inputMaskingService;
    this.officerService = officerService;
    this.datePipe = datePipe; //#region Variables

    this.showLoader = false;
    this.searchFormStatus = {
      visible: true,
      valid: false
    };
    this.personalFormStatus = {
      visible: false,
      valid: false
    };
    this.homeFormStatus = {
      visible: false,
      valid: false
    };
    this.businessFormStatus = {
      visible: false,
      valid: false
    };
    this.smeFormStatus = {
      visible: false,
      valid: false
    };
    this.documentFormStatus = {
      visible: false,
      valid: false
    };
    this.otherInformationFormStatus = {
      visible: false,
      valid: false
    };
    this.smeCategories = [];
    this.smeLegals = [];
    this.allOfficersModal = [];
    this.homeLocationData = {
      lat: null,
      long: null
    };
    this.businessLocationData = {
      lat: null,
      long: null
    };
    this.mobileReadOnly = false; // indicating that the mobile number is verified and should not be editable.

    this.smsActive = false;
    this.smsCountDown = null;
    this.canResendSmsResult = false;
    this.directedFromLoanPage = false;
    this.showEditClientComponent = false;
    this.geographyAreaObject = {
      allGeographyAreas: []
    };
    this.documentObject = {
      componentInput: {
        documentsTypesCodes: ["-2"],
        canDocumentsTypeCodesBeRemoved: false,
        canEdit: true,
        canAddingDocumentsType: true
      },
      documentComponentResponse: []
    };
    this.ebcBanks = [];
    this.ebcBankBranches = [];
    this.searchForm = this.FormBuilder.group({
      nationId: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.nationalIdValidator({
        required: true
      })]]
    });
    this.personalForm = this.FormBuilder.group({
      clientName: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.clientNameValidator({
        required: true,
        minimumThreeWord: true
      })]],
      nationId: [null],
      gender: [null],
      birthDate: [null],
      nationIdIssuanceDate: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.dateTypeStringValidator({
        required: true,
        dateCannotBeAfterToday: true
      })]],
      nationIdExpiryDate: [null, src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.dateTypeStringValidator({
        required: true,
        dateCannotBeBeforeToday: true
      })],
      mobileNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("01([0,1,2,5]{1})([0-9]{8})$")]],
      alternativeMobileNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("01([0,1,2,5]{1})([0-9]{8})$")]],
      nationIdSerial: [null]
    });
    this.smsForm = this.FormBuilder.group({
      otp: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.otpVerificationValidator({
        required: true
      })]]
    });
    this.homeForm = this.FormBuilder.group({
      governorate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
      district: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
      village: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
      address1: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.generalValidation({
        required: true,
        maxCharacter: 40
      })]],
      address2: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.generalValidation({
        required: false,
        maxCharacter: 40
      })]],
      address3: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.generalValidation({
        required: false,
        maxCharacter: 40
      })]],
      homeTel: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("([0-9]{8})$")]],
      martialStatus: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
      educationalLevel: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]]
    });
    this.businessForm = this.FormBuilder.group({
      name: [null],
      address1: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.generalValidation({
        required: false,
        maxCharacter: 40
      })]],
      address2: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.generalValidation({
        required: false,
        maxCharacter: 40
      })]],
      address3: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.generalValidation({
        required: false,
        maxCharacter: 40
      })]],
      businessSector: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
      businessActivity: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
      businessSpecialization: [null]
    });
    this.smeForm = this.FormBuilder.group({
      paidCapital: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.numberValidation({
        required: false
      })]],
      turnOver: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.numberValidation({
        required: false
      })]],
      totalAssets: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.numberValidation({
        required: false
      })]],
      establishmentDate: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.dateTypeStringValidator({
        required: false,
        dateCannotBeAfterToday: true
      })]],
      businessActivityStartDate: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.dateTypeStringValidator({
        required: false,
        dateCannotBeAfterToday: true
      })]],
      financialStatementDate: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.dateTypeStringValidator({
        required: false,
        dateCannotBeAfterToday: true
      })]],
      cbeCode: [null],
      smeCategory: [null],
      legalConstitution: [null]
    });
    this.documentForm = this.FormBuilder.group({});
    this.otherInformationForm = this.FormBuilder.group({
      officerKey: [null, [src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.officersValidator({
        required: true
      })]],
      geographyArea: [null],
      iBanNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.maxLength(34), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("[a-zA-Z0-9]*")]],
      ebcBank: [""],
      ebcBankBranch: [""],
      notes: [null]
    });

    this.clientNameCleaner = function (clientName) {
      var prefixPatterns = [{
        pattern: /عبد/gi,
        replacement: "عبد"
      }, {
        pattern: /ابو/gi,
        replacement: "ابو"
      }];

      for (var _i = 0, _prefixPatterns = prefixPatterns; _i < _prefixPatterns.length; _i++) {
        var _prefixPatterns$_i = _prefixPatterns[_i],
            pattern = _prefixPatterns$_i.pattern,
            replacement = _prefixPatterns$_i.replacement;
        clientName = clientName.replace(pattern, replacement);
      }

      clientName = clientName.replace(/\s+/g, " ");
      return clientName.trim();
    };

    this.startingSmsCountDown = function () {
      _this.smsCountDown = 30;
      _this.canResendSmsResult = false;
      return new Promise(function (resolve) {
        _this.intervalId = setInterval(function () {
          _this.smsCountDown -= 1; // every second (-1) from the CountDown

          if (_this.smsCountDown <= 0) {
            clearInterval(_this.intervalId);
            resolve(true);
            _this.canResendSmsResult = true;
            _this.smsCountDown = null;
          }
        }, 1000);
      });
    };

    this.getHomeLocation = function () {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var loc;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.locationService.getLocation();

              case 2:
                loc = _context.sent;

                if (loc.success) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return this.alertService.showAlertError(loc.message, false);

              case 6:
                return _context.abrupt("return", _context.sent);

              case 7:
                this.homeLocationData = {
                  lat: loc.position.coords.latitude,
                  long: loc.position.coords.longitude
                };
                this.alertService.showAlertConfirm("تم اخذ اللقطة بنجاح", false);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    };

    this.getBusinessLocation = function () {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var loc;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.locationService.getLocation();

              case 2:
                loc = _context2.sent;

                if (loc.success) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return this.alertService.showAlertError(loc.message, false);

              case 6:
                return _context2.abrupt("return", _context2.sent);

              case 7:
                this.businessLocationData = {
                  lat: loc.position.coords.latitude,
                  long: loc.position.coords.longitude
                };
                this.alertService.showAlertConfirm("تم اخذ اللقطة بنجاح", false);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    };
  } //#endregion


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CreateClientRefactorPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.showLoader = true;
                this.isCurrentPlatformMobile = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__.Capacitor.getPlatform() === "web" ? false : true;
                _context3.next = 5;
                return this.clientService.getClientTypeProp("1");

              case 5:
                this.clientTypeProp = _context3.sent;
                _context3.next = 8;
                return this.referencesService.getGender();

              case 8:
                this.genderModel = _context3.sent;
                _context3.next = 11;
                return this.referencesService.getGovernorate();

              case 11:
                this.governorateModel = _context3.sent;
                _context3.next = 14;
                return this.referencesService.getMartial();

              case 14:
                this.martialStatusModel = _context3.sent;
                _context3.next = 17;
                return this.referencesService.getEducationLevel();

              case 17:
                this.educationalLevelModel = _context3.sent;
                _context3.next = 20;
                return this.referencesService.getBusinessSector();

              case 20:
                this.businessSectorModel = _context3.sent;
                _context3.next = 23;
                return this.smsService.SMSAllowed("0");

              case 23:
                this.smsActive = _context3.sent;
                _context3.next = 26;
                return this.authService.getUserInfo();

              case 26:
                this.userInfo = _context3.sent;
                _context3.next = 29;
                return this.referencesService.getStaticValueById(64);

              case 29:
                this.checkIfMobileNumberExistFlag = _context3.sent;
                _context3.next = 32;
                return this.referencesService.getStaticValueById(74);

              case 32:
                this.NationalIDExpirationPeriod = _context3.sent;
                _context3.next = 35;
                return this.officerService.GetBranchOfficers({
                  branchCode: this.userInfo.branch_code
                }).toPromise();

              case 35:
                this.allOfficersModal = _context3.sent;
                this.referencesService.getSmeCategories().subscribe(function (value) {
                  _this2.smeCategories = value;
                });
                this.referencesService.getSmeLegals().subscribe(function (value) {
                  _this2.smeLegals = value;
                });
                this.route.queryParams.subscribe(function (params) {
                  if (params === null || params === void 0 ? void 0 : params.co) {
                    _this2.directedFromLoanPage = true;
                  }
                });
                this.registerBackButtonListener();
                this.referencesService.getGeographyArea().subscribe(function (x) {
                  return _this2.geographyAreaObject.allGeographyAreas = x;
                });
                _context3.t0 = [{
                  text: "",
                  value: ""
                }];
                _context3.next = 44;
                return this.eDisburseService.getActiveEbcBanks();

              case 44:
                _context3.t1 = _context3.sent.map(function (bank) {
                  return {
                    text: bank.bankName,
                    value: bank.bankId.toString()
                  };
                });
                this.ebcBanks = _context3.t0.concat.call(_context3.t0, _context3.t1);
                _context3.next = 51;
                break;

              case 48:
                _context3.prev = 48;
                _context3.t2 = _context3["catch"](0);
                this.handleError(_context3.t2);

              case 51:
                _context3.prev = 51;
                setTimeout(function () {
                  _this2.inputNationalId.setFocus();
                }, 200);
                this.showLoader = false;
                return _context3.finish(51);

              case 55:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 48, 51, 55]]);
      }));
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var _a;

      (_a = this.backButtonListener) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
  }, {
    key: "registerBackButtonListener",
    value: function registerBackButtonListener() {
      var _this3 = this;

      this.backButtonListener = this.platform.backButton.subscribeWithPriority(10, function (next) {
        _this3.backBtn();
      });
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      this.cdref.detectChanges();
    }
  }, {
    key: "nationIdSearchBtn",
    value: function nationIdSearchBtn() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var _this4 = this;

        var nationId, clientById, canOfficerEdit, clientByIdWithAnyBranch, alertMessage, clientByIdFromClientRegistration;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.searchFormStatus.valid = true;
                _context5.prev = 1;
                this.showLoader = true;

                if (!this.searchForm.valid) {
                  _context5.next = 42;
                  break;
                }

                nationId = this.searchForm.value.nationId;
                _context5.next = 7;
                return this.clientService.getClientById(nationId);

              case 7:
                clientById = _context5.sent;

                if (!clientById) {
                  _context5.next = 23;
                  break;
                }

                _context5.next = 11;
                return this.authService.getAccessRights().then(function (accessRights) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            return _context4.abrupt("return", accessRights.map(function (x) {
                              return x.window_code;
                            }).includes("5564"));

                          case 1:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));
                });

              case 11:
                canOfficerEdit = _context5.sent;

                if (canOfficerEdit) {
                  _context5.next = 14;
                  break;
                }

                return _context5.abrupt("return", this.alertService.showAlertError("غير مسموح لك التعديل", false));

              case 14:
                if (!(clientById.client_type_code == "4" || clientById.client_type_code == "2" // clientById.client_type_code == "3"
                )) {
                  _context5.next = 18;
                  break;
                }

                _context5.next = 17;
                return this.alertService.showAlertError("هذا العميل مسجل في مجموعة / شركات", false);

              case 17:
                return _context5.abrupt("return", _context5.sent);

              case 18:
                this.existingClientInfo = clientById;
                this.searchFormStatus.visible = false;
                this.showEditClientComponent = true;
                _context5.next = 42;
                break;

              case 23:
                _context5.next = 25;
                return this.clientService.getClientByIdWithAnyBranch(nationId);

              case 25:
                clientByIdWithAnyBranch = _context5.sent;

                if (!clientByIdWithAnyBranch) {
                  _context5.next = 31;
                  break;
                }

                alertMessage = "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0642\u0648\u0645\u064A \u0645\u0643\u0631\u0631" + "<br>" + "\u0645\u0639 \u0627\u0644\u0639\u0645\u064A\u0644 ".concat(clientByIdWithAnyBranch.client_name) + "<br>" + "\u0628\u0627\u0644\u0641\u0631\u0639 ".concat(clientByIdWithAnyBranch.branch_name) + "<br>" + "\u0648\u064A\u062D\u0645\u0644 \u0643\u0648\u062F \u0631\u0642\u0645 ".concat(clientByIdWithAnyBranch.client_code) + "<br>" + "\u0645\u0639 \u0645\u0646\u062F\u0648\u0628:  ".concat(clientByIdWithAnyBranch.officer_name);
                _context5.next = 30;
                return this.alertService.showAlertError(alertMessage, false);

              case 30:
                return _context5.abrupt("return");

              case 31:
                _context5.next = 33;
                return this.clientService.getClientByIdFromClientRegistration(nationId);

              case 33:
                clientByIdFromClientRegistration = _context5.sent;

                if (!clientByIdFromClientRegistration.count) {
                  _context5.next = 38;
                  break;
                }

                _context5.next = 37;
                return this.alertService.showAlertError("هذا العميل قيد المراجعة", false);

              case 37:
                return _context5.abrupt("return", _context5.sent);

              case 38:
                this.extractDataFromNationId();
                this.searchFormStatus = {
                  valid: false,
                  visible: false
                };
                this.wizardForm.goToNextStep();
                this.personalFormStatus.visible = true;

              case 42:
                _context5.next = 47;
                break;

              case 44:
                _context5.prev = 44;
                _context5.t0 = _context5["catch"](1);
                this.handleError(_context5.t0);

              case 47:
                _context5.prev = 47;
                this.showLoader = false;
                return _context5.finish(47);

              case 50:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 44, 47, 50]]);
      }));
    }
  }, {
    key: "noDateGreaterToday",
    value: function noDateGreaterToday(control) {
      var selectedDate = new Date(control.value);
      var currentDate = new Date();

      if (selectedDate > currentDate) {
        return {
          DateIsGreater: true
        };
      }
    }
  }, {
    key: "changeIssuanceDate",
    value: function changeIssuanceDate(date) {
      var issuanceDate = new Date(date);
      var issuanceYear = issuanceDate.getFullYear();
      var issuanceMonth = issuanceDate.getMonth();
      var issuanceDay = issuanceDate.getDate();
      var NationalIDExpirationPeriod = Number(this.NationalIDExpirationPeriod.value);
      var expiryDate = new Date(issuanceYear + NationalIDExpirationPeriod, issuanceMonth, issuanceDay);
      this.personalForm.patchValue({
        nationIdExpiryDate: this.datePipe.transform(expiryDate, "yyyy-MM-dd")
      });
    }
  }, {
    key: "submitPersonalForm",
    value: function submitPersonalForm() {
      var _a, _b;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        var mobileNumber;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                this.showLoader = true;
                this.personalFormStatus.valid = true;

                if (this.personalForm.valid) {
                  _context6.next = 5;
                  break;
                }

                return _context6.abrupt("return");

              case 5:
                if (!(this.smsActive === true && this.mobileReadOnly === false)) {
                  _context6.next = 7;
                  break;
                }

                return _context6.abrupt("return", this.alertService.showAlertError("برجاء ارسال رمز التحقق", false));

              case 7:
                mobileNumber = (_b = (_a = this.personalForm) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.mobileNumber.toString();
                _context6.t1 = this.checkIfMobileNumberExistFlag.value === "1";

                if (!_context6.t1) {
                  _context6.next = 14;
                  break;
                }

                _context6.next = 12;
                return this.clientService.checkRepeatedMobile(mobileNumber);

              case 12:
                _context6.t2 = _context6.sent;
                _context6.t1 = _context6.t2 === 1;

              case 14:
                _context6.t0 = _context6.t1;

                if (!_context6.t0) {
                  _context6.next = 17;
                  break;
                }

                _context6.t0 = this.smsActive === false;

              case 17:
                if (!_context6.t0) {
                  _context6.next = 19;
                  break;
                }

                return _context6.abrupt("return", this.alertService.showAlertError("رقم المحمول(1) مكرر", false));

              case 19:
                this.personalFormStatus.visible = false;
                this.homeFormStatus.visible = true;
                this.wizardForm.goToNextStep();
                _context6.next = 27;
                break;

              case 24:
                _context6.prev = 24;
                _context6.t3 = _context6["catch"](0);
                this.handleError(_context6.t3);

              case 27:
                _context6.prev = 27;
                this.showLoader = false;
                return _context6.finish(27);

              case 30:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 24, 27, 30]]);
      }));
    }
  }, {
    key: "extractDataFromNationId",
    value: function extractDataFromNationId() {
      var nationId = this.searchForm.value.nationId;
      var gender;
      var century;
      var decade;
      var month;
      var day;
      gender = Number(nationId.slice(12, -1)) % 2 !== 0 ? "1" : "2";

      switch (Number(nationId.slice(0, -13))) {
        case 1:
          {
            century = "18";
            break;
          }

        case 2:
          {
            century = "19";
            break;
          }

        case 3:
          {
            century = "20";
            break;
          }

        case 4:
          {
            century = "21";
            break;
          }
      }

      decade = nationId.slice(1, -11);
      month = nationId.slice(3, -9);
      day = nationId.slice(5, -7);
      this.personalForm.patchValue({
        nationId: nationId,
        gender: gender,
        birthDate: century + decade + "-" + month + "-" + day
      });
    }
  }, {
    key: "sendingOtp",
    value: function sendingOtp() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        var mobileNumber;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.personalFormStatus.valid = true;

                if (this.personalForm.valid) {
                  _context7.next = 3;
                  break;
                }

                return _context7.abrupt("return");

              case 3:
                mobileNumber = this.personalForm.value.mobileNumber;
                _context7.next = 6;
                return this.clientService.checkRepeatedMobile(mobileNumber);

              case 6:
                _context7.t0 = _context7.sent;

                if (!(_context7.t0 === 1)) {
                  _context7.next = 9;
                  break;
                }

                return _context7.abrupt("return", this.alertService.showAlertError("رقم المحمول(1) مكرر", false));

              case 9:
                this.smsModal.isOpen = true;
                this.startingSmsCountDown();
                _context7.next = 13;
                return this.smsService.OTP(mobileNumber);

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "closingSmsModal",
    value: function closingSmsModal() {
      clearInterval(this.intervalId);
      this.smsModal.isOpen = false;
    }
  }, {
    key: "smsCheckOtp",
    value: function smsCheckOtp() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
        var mobileNumber;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (this.smsForm.valid) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt("return");

              case 2:
                mobileNumber = this.personalForm.value.mobileNumber;
                _context8.next = 5;
                return this.smsService.VerifyOTP(mobileNumber, this.smsForm.value.otp.toString());

              case 5:
                if (_context8.sent) {
                  _context8.next = 7;
                  break;
                }

                return _context8.abrupt("return", this.alertService.showAlertError("رمز التحقق غير سليم", false));

              case 7:
                this.mobileReadOnly = true;
                this.smsModal.dismiss();

              case 9:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }, {
    key: "governorateChanging",
    value: function governorateChanging() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
        var governorate;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.homeForm.patchValue({
                  district: null,
                  village: null
                });
                governorate = this.homeForm.value.governorate;

                if (governorate) {
                  _context9.next = 4;
                  break;
                }

                return _context9.abrupt("return");

              case 4:
                _context9.next = 6;
                return this.referencesService.getDistrict(governorate);

              case 6:
                this.districtModel = _context9.sent;

              case 7:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    }
  }, {
    key: "districtChanging",
    value: function districtChanging() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10() {
        var governorate, district;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.homeForm.patchValue({
                  village: null
                });
                governorate = this.homeForm.value.governorate;
                district = this.homeForm.value.district;

                if (!(!governorate || !district)) {
                  _context10.next = 5;
                  break;
                }

                return _context10.abrupt("return");

              case 5:
                _context10.next = 7;
                return this.referencesService.getVillage(governorate, district);

              case 7:
                this.villageModel = _context10.sent;

              case 8:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
    }
  }, {
    key: "submitHomeForm",
    value: function submitHomeForm() {
      try {
        this.showLoader = true;
        this.homeFormStatus.valid = true;

        if (!this.homeForm.valid) {
          return;
        }

        this.homeFormStatus.visible = false;
        this.businessFormStatus.visible = true;
        this.wizardForm.goToNextStep();
      } catch (error) {
        this.handleError(error);
      } finally {
        this.showLoader = false;
      }
    }
  }, {
    key: "backBtn",
    value: function backBtn() {
      if (this.personalFormStatus.visible) {
        window.location.reload();
        return;
      }

      if (this.homeFormStatus.visible) {
        this.homeFormStatus.visible = false;
        this.wizardForm.goToPreviousStep();
        this.personalFormStatus.visible = true;
        return;
      }

      if (this.businessFormStatus.visible) {
        this.businessFormStatus.visible = false;
        this.wizardForm.goToPreviousStep();
        this.homeFormStatus.visible = true;
        return;
      }

      if (this.smeFormStatus.visible) {
        this.smeFormStatus.visible = false;
        this.wizardForm.goToPreviousStep();
        this.businessFormStatus.visible = true;
        return;
      }

      if (this.documentFormStatus.visible) {
        this.documentFormStatus.visible = false;
        this.wizardForm.goToPreviousStep();
        this.smeFormStatus.visible = true;
        return;
      }

      if (this.otherInformationFormStatus.visible) {
        this.otherInformationFormStatus.visible = false;
        this.wizardForm.goToPreviousStep();
        this.documentFormStatus.visible = true;
        return;
      }
    }
  }, {
    key: "businessSectorChanging",
    value: function businessSectorChanging() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee11() {
        var businessSector;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.businessForm.patchValue({
                  businessActivity: null,
                  businessSpecialization: null
                });
                this.businessSpecializationModel = [];
                businessSector = this.businessForm.value.businessSector;

                if (businessSector) {
                  _context11.next = 5;
                  break;
                }

                return _context11.abrupt("return");

              case 5:
                _context11.next = 7;
                return this.referencesService.getBusinessActivity(Number(businessSector));

              case 7:
                this.businessActivityModel = _context11.sent;

              case 8:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
    }
  }, {
    key: "businessActivityChanging",
    value: function businessActivityChanging() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee12() {
        var businessSector, businessActivity;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this.businessForm.patchValue({
                  businessSpecialization: null
                });
                businessSector = this.businessForm.value.businessSector;
                businessActivity = this.businessForm.value.businessActivity;

                if (!(!businessSector || !businessActivity)) {
                  _context12.next = 5;
                  break;
                }

                return _context12.abrupt("return");

              case 5:
                _context12.next = 7;
                return this.referencesService.getBusinessSpecialization(Number(businessSector), Number(businessActivity));

              case 7:
                this.businessSpecializationModel = _context12.sent;

              case 8:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
    }
  }, {
    key: "submitBusinessForm",
    value: function submitBusinessForm() {
      try {
        this.showLoader = true;

        if (this.clientTypeProp.force_business_info == 1) {
          this.businessForm.controls["name"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]);
          this.businessForm.controls["address1"].setValidators([src_app_core_validators_custom_validators__WEBPACK_IMPORTED_MODULE_15__.generalValidation({
            required: true,
            maxCharacter: 40
          })]);
          this.businessForm.controls["name"].updateValueAndValidity();
          this.businessForm.controls["address1"].updateValueAndValidity();
        }

        this.businessFormStatus.valid = true;
        if (!this.businessForm.valid) return;
        this.businessFormStatus.visible = false;
        this.smeFormStatus.visible = true;
        this.wizardForm.goToNextStep();
      } catch (error) {
        this.handleError(error);
      } finally {
        this.showLoader = false;
      }
    }
  }, {
    key: "submitSmeForm",
    value: function submitSmeForm() {
      try {
        this.showLoader = true;
        if (!this.smeForm.valid) return this.smeFormStatus.valid = true;
        this.smeFormStatus.visible = false;
        this.documentFormStatus.visible = true;
        this.wizardForm.goToNextStep();
      } catch (error) {
        this.handleError(error);
      } finally {
        this.showLoader = false;
      }
    }
  }, {
    key: "submitDocumentForm",
    value: function submitDocumentForm() {
      if (this.documentObject.documentComponentResponse.length === 0) {
        this.alertService.showAlertError("\u064A\u062C\u0628 \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A", false);
        return;
      }

      var documentNotHasData = this.documentObject.documentComponentResponse.filter(function (x) {
        return x.numberOfPagesExist === 0;
      }).length;

      if (documentNotHasData > 0) {
        this.alertService.showAlertError("\u064A\u062C\u0628 \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0633\u062A\u0646\u062F\u0627\u062A", false);
        return;
      }

      this.documentFormStatus.visible = false;
      this.otherInformationFormStatus.visible = true;
      this.wizardForm.goToNextStep();
    }
  }, {
    key: "submitOtherInformationForm",
    value: function submitOtherInformationForm() {
      var _a, _b, _c, _d;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee13() {
        var documentArray, object, insertClientResult;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.prev = 0;
                this.showLoader = true;

                if (this.otherInformationForm.valid) {
                  _context13.next = 4;
                  break;
                }

                return _context13.abrupt("return", this.otherInformationFormStatus.valid = true);

              case 4:
                documentArray = this.documentObject.documentComponentResponse.map(function (x) {
                  return {
                    documentType: x.documentTypeCode,
                    documentDetail: x.details.map(function (x) {
                      return Object.assign(Object.assign({}, x), {
                        base64: x.base64
                      });
                    })
                  };
                });
                object = {
                  client_name: this.personalForm.value.clientName,
                  nation_id: this.personalForm.value.nationId,
                  gender: this.personalForm.value.gender,
                  birth_date: this.personalForm.value.birthDate,
                  id_date: this.personalForm.value.nationIdIssuanceDate,
                  nation_no: this.personalForm.value.nationIdExpiryDate,
                  id_serial: this.personalForm.value.nationIdSerial,
                  mobile_1: this.personalForm.value.mobileNumber,
                  mobile_2: this.personalForm.value.alternativeMobileNumber,
                  gov_code: this.homeForm.value.governorate,
                  dist_code: this.homeForm.value.district,
                  vill_code: this.homeForm.value.village,
                  home_add_1: this.homeForm.value.address1,
                  home_add_2: this.homeForm.value.address2,
                  home_add_3: this.homeForm.value.address3,
                  home_Lat: ((_a = this.homeLocationData.lat) === null || _a === void 0 ? void 0 : _a.toString()) || null,
                  home_Long: ((_b = this.homeLocationData.long) === null || _b === void 0 ? void 0 : _b.toString()) || null,
                  home_tel: this.homeForm.value.homeTel,
                  martial_status: this.homeForm.value.martialStatus,
                  edu_level_code: this.homeForm.value.educationalLevel,
                  bs_div_1_code: this.businessForm.value.businessSector,
                  bs_div_2_code: this.businessForm.value.businessActivity,
                  bs_div_3_code: this.businessForm.value.businessSpecialization,
                  bus_name: this.businessForm.value.name,
                  bus_add_1: this.businessForm.value.address1,
                  bus_add_2: this.businessForm.value.address2,
                  bus_add_3: this.businessForm.value.address3,
                  bus_Lat: ((_c = this.businessLocationData.lat) === null || _c === void 0 ? void 0 : _c.toString()) || null,
                  bus_Long: ((_d = this.businessLocationData.long) === null || _d === void 0 ? void 0 : _d.toString()) || null,
                  geo_area_code: this.otherInformationForm.value.geographyArea,
                  officer_key: this.otherInformationForm.value.officerKey,
                  notes: this.otherInformationForm.value.notes,
                  client_account: this.otherInformationForm.value.iBanNumber,
                  document: documentArray,
                  ebcBankId: this.otherInformationForm.controls["ebcBank"].value && this.otherInformationForm.controls["ebcBank"].value.length > 0 ? this.otherInformationForm.controls["ebcBank"].value : null,
                  ebcBankBranchId: this.otherInformationForm.controls["ebcBankBranch"].value && this.otherInformationForm.controls["ebcBankBranch"].value.length > 0 ? this.otherInformationForm.controls["ebcBankBranch"].value : null,
                  paidCapital: this.smeForm.controls["paidCapital"].value || null,
                  turnover: this.smeForm.controls["turnOver"].value || null,
                  totalAssets: this.smeForm.controls["totalAssets"].value || null,
                  establishmentDate: this.smeForm.controls["establishmentDate"].value,
                  busActivityStartDate: this.smeForm.controls["businessActivityStartDate"].value,
                  financialStatementDate: this.smeForm.controls["financialStatementDate"].value,
                  cbeCode: this.smeForm.controls["cbeCode"].value,
                  smeCategoryCode: this.smeForm.controls["smeCategory"].value,
                  legalConstitutionCode: this.smeForm.controls["legalConstitution"].value
                };
                _context13.next = 8;
                return this.alertService.SaveAlert();

              case 8:
                if (_context13.sent) {
                  _context13.next = 10;
                  break;
                }

                return _context13.abrupt("return");

              case 10:
                _context13.next = 12;
                return this.clientService.insertClient(object);

              case 12:
                insertClientResult = _context13.sent;
                _context13.next = 15;
                return this.redirectAlert(insertClientResult.orgBranchClientCode);

              case 15:
                _context13.next = 21;
                break;

              case 17:
                _context13.prev = 17;
                _context13.t0 = _context13["catch"](0);
                this.handleError(_context13.t0);
                return _context13.abrupt("return");

              case 21:
                _context13.prev = 21;
                this.showLoader = false;
                return _context13.finish(21);

              case 24:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[0, 17, 21, 24]]);
      }));
    }
  }, {
    key: "ocrResult",
    value: function ocrResult(idData) {
      this.ocrData = idData;
      this.searchForm.patchValue({
        nationId: idData.nationalId
      });
      this.personalForm.patchValue({
        clientName: idData.firstName + " " + idData.familyName,
        nationId: idData.nationalId,
        gender: idData.gender,
        birthDate: idData.birthDate,
        nationIdIssuanceDate: idData.issueDate,
        nationIdExpiryDate: idData.expiryDate,
        nationIdSerial: idData.documentId
      });
      this.homeForm.patchValue({
        address1: idData.address
      });
    }
  }, {
    key: "enterClick",
    value: function enterClick(event) {
      if (this.showLoader) return;

      if (this.searchFormStatus.visible) {
        event.key === "Enter" ? this.nationIdSearchBtn() : null;
        return;
      } else if (this.personalFormStatus.visible && this.smsModal.isOpen === false) {
        event.key === "Enter" ? this.submitPersonalForm() : null;
        return;
      } else if (this.personalFormStatus.visible && this.smsModal.isOpen === true) {
        event.key === "Enter" ? this.smsCheckOtp() : null;
        return;
      } else if (this.homeFormStatus.visible) {
        event.key === "Enter" ? this.submitHomeForm() : null;
        return;
      } else if (this.businessFormStatus.visible) {
        event.key === "Enter" ? this.submitBusinessForm() : null;
        return;
      } else if (this.smeFormStatus.visible) {
        event.key === "Enter" ? this.submitSmeForm() : null;
        return;
      } else if (this.documentFormStatus.visible) {
        event.key === "Enter" ? this.submitDocumentForm() : null;
        return;
      } else if (this.otherInformationFormStatus.visible) {
        event.key === "Enter" ? this.submitOtherInformationForm() : null;
        return;
      }
    }
  }, {
    key: "redirectAlert",
    value: function redirectAlert(orgBranchClientCode) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee14() {
        var _this5 = this;

        var alert;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (!this.directedFromLoanPage) {
                  _context14.next = 5;
                  break;
                }

                this.router.navigate(["/create-loan"], {
                  queryParams: {
                    client_code: orgBranchClientCode
                  }
                });
                return _context14.abrupt("return");

              case 5:
                localStorage.removeItem("loanDataForCreateCo");

              case 6:
                alert = this.alertController.create({
                  header: "\u062A\u0645 \u0627\u0646\u0634\u0627\u0621 \u0627\u0644\u0639\u0645\u064A\u0644 \u0628\u0643\u0648\u062F: ".concat(orgBranchClientCode),
                  message: "هل تريد تقديم طلب قرض لهذا العميل؟ ",
                  buttons: [{
                    text: "نعم",
                    role: "OK",
                    cssClass: "btn-success",
                    handler: function handler() {
                      _this5.router.navigate(["/create-loan"], {
                        queryParams: {
                          client_code: orgBranchClientCode
                        }
                      });
                    }
                  }, {
                    text: "لا",
                    cssClass: "btn-danger",
                    role: "cancel",
                    handler: function handler() {
                      location.reload();
                    }
                  }],
                  backdropDismiss: false
                });
                _context14.next = 9;
                return alert;

              case 9:
                _context14.sent.present();

              case 10:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
    }
  }, {
    key: "documentComponentResponse",
    value: function documentComponentResponse(response) {
      this.documentObject.documentComponentResponse = response;
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var errorMessage;

      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpErrorResponse) {
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
    key: "onEbcBankChanged",
    value: function onEbcBankChanged() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee15() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (this.otherInformationForm.controls["ebcBank"].value) {
                  _context15.next = 4;
                  break;
                }

                this.ebcBankBranches = null;
                this.otherInformationForm.patchValue({
                  ebcBankBranch: null
                });
                return _context15.abrupt("return");

              case 4:
                _context15.next = 6;
                return this.eDisburseService.getActiveEbcBankBranches(this.otherInformationForm.controls["ebcBank"].value);

              case 6:
                this.ebcBankBranches = _context15.sent.map(function (branch) {
                  return {
                    text: branch.branchName,
                    value: branch.branchId.toString()
                  };
                });

              case 7:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
    }
  }]);

  return CreateClientRefactorPage;
}();

CreateClientRefactorPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_13__.ReferencesService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef
  }, {
    type: src_app_core_services_client_service__WEBPACK_IMPORTED_MODULE_8__.ClientService
  }, {
    type: src_app_core_services_sms_service__WEBPACK_IMPORTED_MODULE_14__.SMSService
  }, {
    type: src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_11__.LocationService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.AlertController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.Platform
  }, {
    type: src_app_core_services_e_disb_service__WEBPACK_IMPORTED_MODULE_9__.EDisbService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_10__.InputMaskingService
  }, {
    type: src_app_core_services_officer_service__WEBPACK_IMPORTED_MODULE_12__.OfficerService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe
  }];
};

CreateClientRefactorPage.propDecorators = {
  wizardForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
    args: [angular_archwizard__WEBPACK_IMPORTED_MODULE_23__.WizardComponent]
  }],
  smsModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
    args: ["smsModal"]
  }],
  documentDropdownSelect: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonSelect]
  }],
  inputNationalId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.ViewChild,
    args: ["inputNationalId", {
      static: false
    }]
  }]
};
CreateClientRefactorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_17__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_19__.Component)({
  selector: "app-create-client-refactor",
  template: _create_client_refactor_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_create_client_refactor_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], CreateClientRefactorPage);


/***/ }),

/***/ 53081:
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/Client/create-client-refactor/create-client-refactor.page.scss?ngResource ***!
  \*******************************************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jbGllbnQtcmVmYWN0b3IucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcQ2xpZW50XFxjcmVhdGUtY2xpZW50LXJlZmFjdG9yXFxjcmVhdGUtY2xpZW50LXJlZmFjdG9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0FKIiwiZmlsZSI6ImNyZWF0ZS1jbGllbnQtcmVmYWN0b3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 26695:
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/Client/create-client-refactor/create-client-refactor.page.html?ngResource ***!
  \*******************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<ng-container [ngSwitch]=\"showEditClientComponent\">\n  <ion-title *ngSwitchCase=\"false\">تعريف عميل</ion-title>\n  <ion-title *ngSwitchCase=\"true\">تعديل عميل</ion-title>\n</ng-container>\n\n<ion-card *ngIf=\"!showEditClientComponent\" (keyup)=\"enterClick($event)\">\n  <ion-card-content>\n    <aw-wizard\n      #wizardForm\n      [defaultStepIndex]=\"0\"\n      [navBarLayout]=\"'large-filled'\"\n      [navBarDirection]=\"'left-right'\"\n      [navBarLocation]=\"'top'\"\n      [awNavigationMode]\n      navigateBackward=\"deny\"\n      navigateForward=\"deny\"\n    >\n      <aw-wizard-step>\n        <ng-template awWizardStepSymbol>\n          <ion-icon name=\"search\"></ion-icon>\n        </ng-template>\n        <ion-grid>\n          <form [formGroup]=\"searchForm\" *ngIf=\"searchFormStatus.visible\">\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  الرقم القومي\n                </ion-label>\n                <ion-input\n                  #inputNationalId\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"الرقم القومي\"\n                  formControlName=\"nationId\"\n                  [readonly]=\"ocrData?.nationalId\"\n                  [maxlength]=\"14\"\n                >\n                </ion-input>\n                <html-validations\n                  [validationInput]=\"{\n                  showError:searchFormStatus.valid,\n                  formGroup: searchForm,\n                  formControlName: 'nationId'}\"\n                ></html-validations>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-button (click)=\"nationIdSearchBtn()\"\n                  >البحث في قاعدة البيانات</ion-button\n                >\n                <ion-button id=\"open-modal\" *ngIf=\"isCurrentPlatformMobile\"\n                  ><ion-icon class=\"ml-3\" name=\"card-outline\"></ion-icon>تصوير\n                  بطاقة الرقم القومي</ion-button\n                >\n              </ion-col>\n            </ion-row>\n          </form>\n        </ion-grid>\n      </aw-wizard-step>\n      <!-- Search -->\n      <aw-wizard-step>\n        <ng-template awWizardStepSymbol>\n          <ion-icon name=\"person\"></ion-icon>\n        </ng-template>\n        <ion-grid>\n          <form [formGroup]=\"personalForm\" *ngIf=\"personalFormStatus.visible\">\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  الاسم بالكامل\n                </ion-label>\n                <ion-input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"clientName\"\n                  placeholder=\"الاسم بالكامل\"\n                >\n                </ion-input>\n                <html-validations\n                  [validationInput]=\"{\n                  showError:personalFormStatus.valid,\n                  formGroup: personalForm,\n                  formControlName: 'clientName'}\"\n                ></html-validations>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\"> الرقم القومي </ion-label>\n                <ion-input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"nationId\"\n                  placeholder=\"الرقم القومي\"\n                  [readonly]=\"true\"\n                >\n                </ion-input>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\"> نوع </ion-label>\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"نوع \"\n                  formControlName=\"gender\"\n                  class=\"subselect\"\n                  [disabled]=\"true\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let gender of genderModel\"\n                    [value]=\"gender.ref_code\"\n                  >\n                    {{gender.ref_desc}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\"> تاريخ الميلاد </ion-label>\n                <ngx-datepicker\n                  [parentForm]=\"personalForm\"\n                  parentFormControllerName=\"birthDate\"\n                  [disabledValue]=\"true\"\n                ></ngx-datepicker>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  تاريخ اصدار البطاقة\n                </ion-label>\n                <ngx-datepicker\n                  [parentForm]=\"personalForm\"\n                  parentFormControllerName=\"nationIdIssuanceDate\"\n                  [options]=\"{nullInitialValue:true}\"\n                  (ionChange)=\"changeIssuanceDate($event)\"\n                ></ngx-datepicker>\n                <html-validations\n                  [validationInput]=\"{\n                  showError:personalFormStatus.valid,\n                  formGroup: personalForm,\n                  formControlName: 'nationIdIssuanceDate'}\"\n                ></html-validations>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  البطاقة سارية حتي\n                </ion-label>\n                <ngx-datepicker\n                  [parentForm]=\"personalForm\"\n                  parentFormControllerName=\"nationIdExpiryDate\"\n                  [options]=\"{nullInitialValue:true}\"\n                  [disabledValue]=\"true\"\n                ></ngx-datepicker>\n                <html-validations\n                  [validationInput]=\"{\n                  showError:personalFormStatus.valid,\n                  formGroup: personalForm,\n                  formControlName: 'nationIdExpiryDate'}\"\n                ></html-validations>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  المحمول(1)\n                </ion-label>\n                <ion-input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"mobileNumber\"\n                  placeholder=\"المحمول\"\n                  [readonly]=\"mobileReadOnly\"\n                  [maxlength]=\"11\"\n                >\n                </ion-input>\n                <ion-note\n                  color=\"danger\"\n                  class=\"input-validator\"\n                  *ngIf=\"personalFormStatus.valid && personalForm.controls['mobileNumber'].hasError('required')\"\n                  role=\"alert\"\n                >\n                  يجب ادخال رقم المحمول\n                </ion-note>\n                <ion-note\n                  color=\"danger\"\n                  class=\"input-validator\"\n                  *ngIf=\"personalFormStatus.valid && (!personalForm.controls['mobileNumber'].hasError('required') && personalForm.controls['mobileNumber'].hasError('pattern'))\"\n                  role=\"alert\"\n                >\n                  رقم المحمول يجب ان يكون أحد عشر رقم!\n                </ion-note>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\"> المحمول(2) </ion-label>\n                <ion-input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"alternativeMobileNumber\"\n                  placeholder=\"المحمول\"\n                >\n                </ion-input>\n                <ion-note\n                  color=\"danger\"\n                  class=\"input-validator\"\n                  *ngIf=\"personalFormStatus.valid && personalForm.controls['alternativeMobileNumber'].hasError('pattern')\"\n                  role=\"alert\"\n                >\n                  رقم المحمول يجب ان يتكون من ارقام فقط!\n                </ion-note>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\">\n                  الرقم التسلسلي للبطاقة\n                </ion-label>\n                <ion-input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"nationIdSerial\"\n                  placeholder=\"الرقم التسلسلي للبطاقة \"\n                >\n                </ion-input>\n              </ion-col>\n            </ion-row>\n            <ion-row style=\"padding-top: 10px\" *ngIf=\"smsActive\">\n              <ion-button (click)=\"sendingOtp()\"> ارسال رمز التحقق </ion-button>\n            </ion-row>\n            <ion-row\n              class=\"ion-justify-content-center\"\n              style=\"padding-top: 10px\"\n            >\n              <ion-button color=\"danger\" (click)=\"backBtn()\"> رجوع </ion-button>\n              <ion-button (click)=\"submitPersonalForm()\"> متابعة </ion-button>\n            </ion-row>\n          </form>\n        </ion-grid>\n      </aw-wizard-step>\n      <!-- Personal Information -->\n      <aw-wizard-step>\n        <ng-template awWizardStepSymbol>\n          <ion-icon name=\"home\"></ion-icon>\n        </ng-template>\n        <ion-grid>\n          <form [formGroup]=\"homeForm\" *ngIf=\"homeFormStatus.visible\">\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  المحافظة\n                </ion-label>\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"المحافظة\"\n                  formControlName=\"governorate\"\n                  class=\"subselect\"\n                  (ionChange)=\"governorateChanging()\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let gov of governorateModel\"\n                    [value]=\"gov.gov_code\"\n                  >\n                    {{gov.gov_name}}\n                  </ion-select-option>\n                </ion-select>\n                <ion-note\n                  color=\"danger\"\n                  class=\"input-validator\"\n                  *ngIf=\"homeFormStatus.valid && (homeForm.controls['governorate'].hasError('required'))\"\n                  role=\"alert\"\n                >\n                  يجب ادخال المحافظة\n                </ion-note>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  المركز\n                </ion-label>\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"المركز\"\n                  formControlName=\"district\"\n                  class=\"subselect\"\n                  (ionChange)=\"districtChanging()\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let dist of districtModel\"\n                    [value]=\"dist.dist_code\"\n                  >\n                    {{dist.dist_name}}\n                  </ion-select-option>\n                </ion-select>\n                <ion-note\n                  color=\"danger\"\n                  class=\"input-validator\"\n                  *ngIf=\"homeFormStatus.valid && (homeForm.controls['district'].hasError('required'))\"\n                  role=\"alert\"\n                >\n                  يجب ادخال المركز\n                </ion-note>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  القرية\n                </ion-label>\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"القرية\"\n                  formControlName=\"village\"\n                  class=\"subselect\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let vill of villageModel\"\n                    [value]=\"vill.vill_code\"\n                  >\n                    {{vill.vill_name}}\n                  </ion-select-option>\n                </ion-select>\n                <ion-note\n                  color=\"danger\"\n                  class=\"input-validator\"\n                  *ngIf=\"homeFormStatus.valid && (homeForm.controls['village'].hasError('required'))\"\n                  role=\"alert\"\n                >\n                  يجب ادخال القرية\n                </ion-note>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-padding-top\">\n              <ion-label class=\"form-label form-label-required\"\n                >العنوان\n              </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-input\n                  class=\"form-control\"\n                  formControlName=\"address1\"\n                ></ion-input>\n                <html-validations\n                  [validationInput]=\"{\n                showError:homeFormStatus.valid,\n                formGroup: homeForm,\n                formControlName: 'address1'}\"\n                ></html-validations>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-input\n                  class=\"form-control\"\n                  formControlName=\"address2\"\n                ></ion-input>\n                <html-validations\n                  [validationInput]=\"{\n                showError:homeFormStatus.valid,\n                formGroup: homeForm,\n                formControlName: 'address2'}\"\n                ></html-validations>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-input\n                  class=\"form-control\"\n                  formControlName=\"address3\"\n                ></ion-input>\n                <html-validations\n                  [validationInput]=\"{\n                showError:homeFormStatus.valid,\n                formGroup: homeForm,\n                formControlName: 'address3'}\"\n                ></html-validations>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\">تليفون المنزل</ion-label>\n                <ion-input\n                  formControlName=\"homeTel\"\n                  class=\"form-control\"\n                ></ion-input>\n                <ion-note\n                  color=\"danger\"\n                  class=\"input-validator\"\n                  *ngIf=\"homeFormStatus.valid && (homeForm.controls['homeTel'].hasError('pattern'))\"\n                  role=\"alert\"\n                >\n                  تليفون المنزل يجب ان يكون ثمانية أرقام!\n                </ion-note>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  الحالة الاجتماعية\n                </ion-label>\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"الحالة الاجتماعية\"\n                  formControlName=\"martialStatus\"\n                  class=\"subselect\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let mart of martialStatusModel\"\n                    [value]=\"mart.ref_code\"\n                  >\n                    {{mart.ref_desc}}\n                  </ion-select-option>\n                </ion-select>\n                <ion-note\n                  color=\"danger\"\n                  class=\"input-validator\"\n                  *ngIf=\"homeFormStatus.valid && (homeForm.controls['martialStatus'].hasError('required'))\"\n                  role=\"alert\"\n                >\n                  يجب ادخال الحالة الاجتماعية\n                </ion-note>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  المؤهل الدراسي\n                </ion-label>\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"المؤهل الدراسي\"\n                  formControlName=\"educationalLevel\"\n                  class=\"subselect\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let mart of educationalLevelModel\"\n                    [value]=\"mart.edu_level_code\"\n                  >\n                    {{mart.edu_level_name}}\n                  </ion-select-option>\n                </ion-select>\n                <ion-note\n                  color=\"danger\"\n                  class=\"input-validator\"\n                  *ngIf=\"homeFormStatus.valid && (homeForm.controls['educationalLevel'].hasError('required'))\"\n                  role=\"alert\"\n                >\n                  يجب ادخال المؤهل الدراسي\n                </ion-note>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-justify-content-center ion-padding\">\n              <ion-button (click)=\"getHomeLocation()\">\n                اخذ لقطة لعنوان المنزل\n              </ion-button>\n            </ion-row>\n            <ion-row class=\"ion-justify-content-center ion-padding\">\n              <ion-button color=\"danger\" (click)=\"backBtn()\"> رجوع </ion-button>\n              <ion-button (click)=\"submitHomeForm()\"> متابعة </ion-button>\n            </ion-row>\n          </form>\n        </ion-grid>\n      </aw-wizard-step>\n      <!-- Home Information -->\n      <aw-wizard-step>\n        <ng-template awWizardStepSymbol>\n          <ion-icon name=\"briefcase\"></ion-icon>\n        </ng-template>\n        <ion-grid>\n          <form [formGroup]=\"businessForm\" *ngIf=\"businessFormStatus.visible\">\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label\n                  [ngClass]=\"clientTypeProp?.force_business_info == 1 ? 'form-label-required' : ''\"\n                  class=\"form-label\"\n                >\n                  اسم العمل\n                </ion-label>\n                <ion-input\n                  class=\"form-control\"\n                  formControlName=\"name\"\n                ></ion-input>\n                <ion-note\n                  color=\"danger\"\n                  class=\"input-validator\"\n                  *ngIf=\"businessFormStatus.valid && (businessForm.controls['name'].hasError('required'))\"\n                  role=\"alert\"\n                >\n                  يجب ادخال اسم العمل\n                </ion-note>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-label\n                [ngClass]=\"clientTypeProp?.force_business_info == 1 ? 'form-label-required' : ''\"\n                class=\"form-label\"\n              >\n                عنوان العمل\n              </ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"address1\"\n                  placeholder=\"عنوان العمل\"\n                >\n                </ion-input>\n                <html-validations\n                  [validationInput]=\"{\n                showError:businessFormStatus.valid,\n                formGroup: businessForm,\n                formControlName: 'address1'}\"\n                ></html-validations>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"address2\"\n                >\n                </ion-input>\n                <html-validations\n                  [validationInput]=\"{\n                showError:businessFormStatus.valid,\n                formGroup: businessForm,\n                formControlName: 'address2'}\"\n                ></html-validations>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"address3\"\n                >\n                </ion-input>\n                <html-validations\n                  [validationInput]=\"{\n                showError:businessFormStatus.valid,\n                formGroup: businessForm,\n                formControlName: 'address3'}\"\n                ></html-validations>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  قطاع العمل\n                </ion-label>\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"قطاع العمل\"\n                  formControlName=\"businessSector\"\n                  class=\"subselect\"\n                  (ionChange)=\"businessSectorChanging()\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let bus of businessSectorModel\"\n                    [value]=\"bus.bs_div_1_code\"\n                  >\n                    {{bus.bs_div_1_name}}\n                  </ion-select-option>\n                </ion-select>\n                <ion-note\n                  color=\"danger\"\n                  class=\"input-validator\"\n                  *ngIf=\"businessFormStatus.valid && (businessForm.controls['businessSector'].hasError('required'))\"\n                  role=\"alert\"\n                >\n                  يجب ادخال قطاع العمل\n                </ion-note>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  نوع النشاط\n                </ion-label>\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"نوع النشاط\"\n                  formControlName=\"businessActivity\"\n                  class=\"subselect\"\n                  (ionChange)=\"businessActivityChanging()\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let activity of businessActivityModel\"\n                    [value]=\"activity.bs_div_2_code\"\n                  >\n                    {{activity.bs_div_2_name}}\n                  </ion-select-option>\n                </ion-select>\n                <ion-note\n                  color=\"danger\"\n                  class=\"input-validator\"\n                  *ngIf=\"businessFormStatus.valid && (businessForm.controls['businessActivity'].hasError('required'))\"\n                  role=\"alert\"\n                >\n                  يجب ادخال نوع النشاط\n                </ion-note>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\"> التخصص </ion-label>\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"التخصص\"\n                  formControlName=\"businessSpecialization\"\n                  class=\"subselect\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let spec of businessSpecializationModel\"\n                    [value]=\"spec.bs_div_3_code\"\n                  >\n                    {{spec.bs_div_3_name}}\n                  </ion-select-option>\n                </ion-select>\n                <ion-note\n                  color=\"danger\"\n                  class=\"input-validator\"\n                  *ngIf=\"businessFormStatus.valid && (businessForm.controls['businessSpecialization'].hasError('required'))\"\n                  role=\"alert\"\n                >\n                  يجب اختيار التخصص\n                </ion-note>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-justify-content-center ion-padding\">\n              <ion-button (click)=\"getBusinessLocation()\">\n                اخذ لقطة لعنوان العمل\n              </ion-button>\n            </ion-row>\n            <ion-row class=\"ion-justify-content-center ion-padding\">\n              <ion-button color=\"danger\" (click)=\"backBtn()\"> رجوع </ion-button>\n              <ion-button (click)=\"submitBusinessForm()\"> متابعة </ion-button>\n            </ion-row>\n          </form>\n        </ion-grid>\n      </aw-wizard-step>\n      <!-- Business Information -->\n      <aw-wizard-step>\n        <ng-template awWizardStepSymbol>\n          <ion-icon name=\"business\"></ion-icon>\n        </ng-template>\n        <ion-grid>\n          <form [formGroup]=\"smeForm\" [hidden]=\"!smeFormStatus.visible\">\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\"> رأس المال المدفوع </ion-label>\n                <ion-input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"رأس المال المدفوع\"\n                  formControlName=\"paidCapital\"\n                >\n                </ion-input>\n                <html-validations\n                  [validationInput]=\"{\n                showError:smeFormStatus.valid,\n                formGroup: smeForm,\n                formControlName: 'paidCapital'}\"\n                ></html-validations>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\"> حجم المبيعات </ion-label>\n                <ion-input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"حجم المبيعات\"\n                  formControlName=\"turnOver\"\n                >\n                </ion-input>\n                <html-validations\n                  [validationInput]=\"{\n                showError:smeFormStatus.valid,\n                formGroup: smeForm,\n                formControlName: 'turnOver'}\"\n                ></html-validations>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\"> إجمالي الأصول </ion-label>\n                <ion-input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"إجمالي الأصول\"\n                  formControlName=\"totalAssets\"\n                >\n                </ion-input>\n                <html-validations\n                  [validationInput]=\"{\n                showError:smeFormStatus.valid,\n                formGroup: smeForm,\n                formControlName: 'totalAssets'}\"\n                ></html-validations>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\"> تاريخ التأسيس </ion-label>\n                <ngx-datepicker\n                  [parentForm]=\"smeForm\"\n                  parentFormControllerName=\"establishmentDate\"\n                  [options]=\"{nullInitialValue:true}\"\n                ></ngx-datepicker>\n                <html-validations\n                  [validationInput]=\"{\n                  showError:smeFormStatus.valid,\n                  formGroup: smeForm,\n                  formControlName: 'establishmentDate'}\"\n                ></html-validations>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\"> تاريخ بدء نشاط </ion-label>\n                <ngx-datepicker\n                  [parentForm]=\"smeForm\"\n                  parentFormControllerName=\"businessActivityStartDate\"\n                  [options]=\"{nullInitialValue:true}\"\n                ></ngx-datepicker>\n                <html-validations\n                  [validationInput]=\"{\n                  showError:smeFormStatus.valid,\n                  formGroup: smeForm,\n                  formControlName: 'businessActivityStartDate'}\"\n                ></html-validations>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\">\n                  تاريخ القوائم المالية\n                </ion-label>\n                <ngx-datepicker\n                  [parentForm]=\"smeForm\"\n                  parentFormControllerName=\"financialStatementDate\"\n                  [options]=\"{nullInitialValue:true}\"\n                ></ngx-datepicker>\n                <html-validations\n                  [validationInput]=\"{\n                  showError:smeFormStatus.valid,\n                  formGroup: smeForm,\n                  formControlName: 'financialStatementDate'}\"\n                ></html-validations>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\"> حساب البنك المركزي </ion-label>\n                <ion-input\n                  type=\"text\"\n                  class=\"form-control\"\n                  placeholder=\"حساب البنك المركزي\"\n                  formControlName=\"cbeCode\"\n                >\n                </ion-input>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\"> تصنيف SME </ion-label>\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"تصنيف SME\"\n                  formControlName=\"smeCategory\"\n                  class=\"subselect\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let cat of smeCategories\"\n                    [value]=\"cat.ref_code\"\n                  >\n                    {{cat.ref_desc}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\">\n                  الهيكل القانوني للشركة\n                </ion-label>\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"الهيكل القانوني للشركة\"\n                  formControlName=\"legalConstitution\"\n                  class=\"subselect\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let legal of smeLegals\"\n                    [value]=\"legal.ref_code\"\n                  >\n                    {{legal.ref_desc}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-justify-content-center ion-padding\">\n              <ion-button color=\"danger\" (click)=\"backBtn()\"> رجوع </ion-button>\n              <ion-button (click)=\"submitSmeForm()\"> متابعة </ion-button>\n            </ion-row>\n          </form>\n        </ion-grid>\n      </aw-wizard-step>\n      <!-- Sme Information -->\n      <aw-wizard-step>\n        <ng-template awWizardStepSymbol>\n          <ion-icon name=\"documents\"></ion-icon>\n        </ng-template>\n        <ion-grid>\n          <form\n            [formGroup]=\"documentForm\"\n            [hidden]=\"!documentFormStatus.visible\"\n          >\n            <image-and-pdf-independent\n              [inputsInterface]=\"documentObject.componentInput\"\n              (documentComponentResponse)=\"documentComponentResponse($event)\"\n            ></image-and-pdf-independent>\n            <ion-row class=\"ion-justify-content-center ion-padding\">\n              <ion-button color=\"danger\" (click)=\"backBtn()\"> رجوع </ion-button>\n              <ion-button (click)=\"submitDocumentForm()\"> متابعة </ion-button>\n            </ion-row>\n          </form>\n        </ion-grid>\n      </aw-wizard-step>\n      <!-- Documents Information -->\n      <aw-wizard-step>\n        <ng-template awWizardStepSymbol>\n          <ion-icon name=\"create\"></ion-icon>\n        </ng-template>\n        <ion-grid>\n          <form\n            [formGroup]=\"otherInformationForm\"\n            *ngIf=\"otherInformationFormStatus.visible\"\n          >\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label form-label-required\">\n                  المندوب\n                </ion-label>\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"اختار المندوب\"\n                  formControlName=\"officerKey\"\n                  class=\"subselect\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let officer of allOfficersModal\"\n                    [value]=\"officer.officer_key\"\n                  >\n                    {{officer.officer_name}}\n                  </ion-select-option>\n                </ion-select>\n                <html-validations\n                  [validationInput]=\"{\n                  showError:otherInformationFormStatus.valid,\n                  formGroup: otherInformationForm,\n                  formControlName: 'officerKey'}\"\n                ></html-validations>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\"> المنطقة الجغرافية </ion-label>\n                <ion-select\n                  interface=\"popover\"\n                  placeholder=\"المنطقة الجغرافية\"\n                  formControlName=\"geographyArea\"\n                  class=\"subselect\"\n                >\n                  <ion-select-option\n                    *ngFor=\"let geo of geographyAreaObject.allGeographyAreas\"\n                    [value]=\"geo.geo_area_code\"\n                  >\n                    {{geo.geo_area_name}} - {{geo.risk_name}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <ion-label class=\"form-label\">\n                  رقم حساب العميل البنكي / رقم بطاقة الائتمان / IBAN\n                </ion-label>\n                <ion-input\n                  type=\"text\"\n                  class=\"form-control\"\n                  formControlName=\"iBanNumber\"\n                  placeholder=\"رقم الحساب\"\n                  (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e34, 0)\"\n                >\n                </ion-input>\n                <ion-note\n                  color=\"danger\"\n                  class=\"input-validator\"\n                  *ngIf=\"otherInformationFormStatus.valid && (otherInformationForm.controls['iBanNumber'].hasError('minlength'))\"\n                  role=\"alert\"\n                >\n                  رقم كارت الائتمان / رقم IBan لا يقل عن 16\n                </ion-note>\n                <ion-note\n                  color=\"danger\"\n                  class=\"input-validator\"\n                  *ngIf=\"otherInformationFormStatus.valid && (otherInformationForm.controls['iBanNumber'].hasError('maxlength'))\"\n                  role=\"alert\"\n                >\n                  رقم كارت الائتمان / رقم IBan لا يزيد عن 34\n                </ion-note>\n                <ion-note\n                  color=\"danger\"\n                  class=\"input-validator\"\n                  *ngIf=\"otherInformationFormStatus.valid && (otherInformationForm.controls['iBanNumber'].hasError('pattern'))\"\n                  role=\"alert\"\n                >\n                  أرقام فقط\n                </ion-note>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <app-select-with-search\n                  [items]=\"ebcBanks\"\n                  label=\"البنك\"\n                  labelClass=\"form-label\"\n                  title=\"البنوك\"\n                  formControlName=\"ebcBank\"\n                  (ionChange)=\"onEbcBankChanged()\"\n                ></app-select-with-search>\n              </ion-col>\n              <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n                <app-select-with-search\n                  [items]=\"ebcBankBranches\"\n                  label=\"الفرع\"\n                  labelClass=\"form-label\"\n                  title=\"الفروع\"\n                  formControlName=\"ebcBankBranch\"\n                ></app-select-with-search>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"12\" size-lg=\"12\" size-md=\"12\" size-sm=\"12\">\n                <ion-label class=\"form-label\"> ملاحظات </ion-label>\n                <ion-textarea\n                  class=\"form-control\"\n                  formControlName=\"notes\"\n                  [autoGrow]=\"true\"\n                  style=\"height: max-content\"\n                  placeholder=\" ملاحظات\"\n                >\n                </ion-textarea>\n              </ion-col>\n            </ion-row>\n            <ion-row class=\"ion-justify-content-center ion-padding\">\n              <ion-button color=\"danger\" (click)=\"backBtn()\"> رجوع </ion-button>\n              <ion-button (click)=\"submitOtherInformationForm()\">\n                متابعة\n              </ion-button>\n            </ion-row>\n          </form>\n        </ion-grid>\n      </aw-wizard-step>\n      <!-- Other Information -->\n    </aw-wizard>\n  </ion-card-content>\n</ion-card>\n\n<app-edit-client\n  [existingClientInfo]=\"existingClientInfo\"\n  *ngIf=\"showEditClientComponent\"\n></app-edit-client>\n<!-- OTP Modal -->\n<ion-modal #smsModal [backdropDismiss]=\"false\" (keyup)=\"enterClick($event)\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar class=\"text-center\">\n        <ion-title>رقم التحقق</ion-title>\n        <ion-button slot=\"end\" (click)=\"closingSmsModal()\">\n          <ion-icon name=\"close\"></ion-icon>\n        </ion-button>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding ion-text-center\">\n      <ion-grid>\n        <form [formGroup]=\"smsForm\">\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"form-label form-label-required\"\n                >رمز التحقق\n              </ion-label>\n              <ion-input class=\"form-control\" formControlName=\"otp\"></ion-input>\n              <html-validations\n                [validationInput]=\"{\n                  showError:true,\n                  formGroup: smsForm,\n                  formControlName: 'otp'}\"\n              ></html-validations>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-buttons class=\"ion-justify-content-center\">\n                <ion-button (click)=\"smsCheckOtp()\">تحقق من الرمز</ion-button>\n                <ion-button\n                  [disabled]=\"!canResendSmsResult\"\n                  (click)=\"startingSmsCountDown()\"\n                  >اعادة الارسال {{smsCountDown}}</ion-button\n                >\n              </ion-buttons>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-grid>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n<!-- OCR -->\n<app-ocr (ocrResult)=\"ocrResult($event)\"></app-ocr>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_Client_create-client-refactor_create-client-refactor_module_ts.js.map