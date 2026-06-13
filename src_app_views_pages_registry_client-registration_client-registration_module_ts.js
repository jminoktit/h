"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_registry_client-registration_client-registration_module_ts"],{

/***/ 91811:
/*!*******************************************************************************!*\
  !*** ./src/app/core/services/AuthenticationServices/features-auth.service.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesAuthService": function() { return /* binding */ FeaturesAuthService; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../env.service */ 41752);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alert.service */ 43081);









var FeaturesAuthService = /*#__PURE__*/function () {
  function FeaturesAuthService(env, http, alert) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FeaturesAuthService);

    this.env = env;
    this.http = http;
    this.alert = alert;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FeaturesAuthService, [{
    key: "getFeaturePermission",
    value: function getFeaturePermission(feature) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  _this.http.post(_this.env.API_URL + "api/Permissions/FeaturePermission", feature).subscribe({
                    next: function next(data) {
                      resolve(data);
                    },
                    error: function error(err) {
                      reject(err.error);
                    }
                  });
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }]);

  return FeaturesAuthService;
}();

FeaturesAuthService.ctorParameters = function () {
  return [{
    type: _env_service__WEBPACK_IMPORTED_MODULE_3__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
  }, {
    type: _alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService
  }];
};

FeaturesAuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: "root"
})], FeaturesAuthService);


/***/ }),

/***/ 32315:
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/registry/client-registration/client-registration-routing.module.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRegistrationPageRoutingModule": function() { return /* binding */ ClientRegistrationPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _client_registration_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-registration.page */ 77500);






var routes = [{
  path: "",
  component: _client_registration_page__WEBPACK_IMPORTED_MODULE_2__.ClientRegistrationPage
}];

var ClientRegistrationPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ClientRegistrationPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientRegistrationPageRoutingModule);
});

ClientRegistrationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ClientRegistrationPageRoutingModule);


/***/ }),

/***/ 16282:
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/registry/client-registration/client-registration.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRegistrationPageModule": function() { return /* binding */ ClientRegistrationPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _client_registration_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-registration-routing.module */ 32315);
/* harmony import */ var _client_registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-registration.page */ 77500);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-archwizard */ 38531);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/google-maps */ 62754);














var ClientRegistrationPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ClientRegistrationPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientRegistrationPageModule);
});

ClientRegistrationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _client_registration_routing_module__WEBPACK_IMPORTED_MODULE_2__.ClientRegistrationPageRoutingModule, angular_archwizard__WEBPACK_IMPORTED_MODULE_10__.ArchwizardModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_11__.GoogleMapsModule //<-- Added GoogleMapsModule
  ],
  declarations: [_client_registration_page__WEBPACK_IMPORTED_MODULE_3__.ClientRegistrationPage],
  exports: [angular_archwizard__WEBPACK_IMPORTED_MODULE_10__.ArchwizardModule]
})], ClientRegistrationPageModule);


/***/ }),

/***/ 77500:
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/registry/client-registration/client-registration.page.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientRegistrationPage": function() { return /* binding */ ClientRegistrationPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _client_registration_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-registration.page.html?ngResource */ 97836);
/* harmony import */ var _client_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-registration.page.scss?ngResource */ 84930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-archwizard */ 38531);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _custom_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom-validators */ 93828);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var src_app_views_components_camerapreview_camerapreview_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/views/components/camerapreview/camerapreview.page */ 97316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/location.service */ 33094);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/google-maps */ 62754);
/* harmony import */ var src_app_core_services_camera_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/camera.service */ 9102);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var src_app_core_services_sms_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/sms.service */ 26921);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_AuthenticationServices_features_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/features-auth.service */ 91811);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);


























 // timer //

var circleR = 25;
var circleDasharray = 2 * Math.PI * circleR;

var ClientRegistrationPage = /*#__PURE__*/function () {
  function ClientRegistrationPage(cameraService, formBuilder, alertCtrl, alertController, toastCtrl, http, env, modal, datepipe, locationService, authService, platformId, geoCoder, SMSService, route, featuresAuth, alertSerivce) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClientRegistrationPage);

    this.cameraService = cameraService;
    this.formBuilder = formBuilder;
    this.alertCtrl = alertCtrl;
    this.alertController = alertController;
    this.toastCtrl = toastCtrl;
    this.http = http;
    this.env = env;
    this.modal = modal;
    this.datepipe = datepipe;
    this.locationService = locationService;
    this.authService = authService;
    this.platformId = platformId;
    this.geoCoder = geoCoder;
    this.SMSService = SMSService;
    this.route = route;
    this.featuresAuth = featuresAuth;
    this.alertSerivce = alertSerivce;
    this.zoom = 18; //DEFAULT 12

    this.maxZoom = 15;
    this.minZoom = 8;
    this.options = {
      zoomControl: true,
      scrollwheel: true,
      disableDoubleClickZoom: false,
      mapTypeId: "hybrid"
    };
    this.markers = []; // STEP1 //

    this.validationMobileForm = this.formBuilder.group({
      mobileNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("01([0-5]{1})([0-9]{8})$"), this.noWhitespaceValidator]],
      mobileNumber2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("01([0-5]{1})([0-9]{8})$")],
      checkOTP_no: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      otpField1: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      otpField2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      otpField3: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      otpField4: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      otpField5: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      otpField6: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]
    }); // STEP2 //
    //nation id not accepts B.Date part:
    //// 00 at day, month and year part.
    //// Inmatching days of month (30 Feb)...etc.
    //// B.Date after today date.

    this.nationIdCheckForm = this.formBuilder.group({
      nationID: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, this.noZerosAtNationIDBirthDate, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$")]]
    }); // STEP3 //

    this.validationPersonalInfoForm = this.formBuilder.group({
      firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("[a-zA-Z\u0600-\u06FF ]*"), this.noWhitespaceValidator]],
      restOfName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("[a-zA-Z\u0600-\u06FF ]*"), this.noWhitespaceValidator]],
      fullName: [""],
      address1part1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, this.noWhitespaceValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(/[A-Za-z0-9_-]*$/)]],
      address1part2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, this.noWhitespaceValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(/[A-Za-z0-9_-]*$/)]],
      address1: [""],
      nationID: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, this.noZerosAtNationIDBirthDate, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern("([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$")]],
      birthDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      nationIDserial: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(/^[A-Za-z0-9_-]*$/)]],
      nationIDissueDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, this.noDateGreaterToday]],
      educationLevel: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      Gender: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]],
      maritalStatus: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      address2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(/^[A-Za-z0-9\s]*[^\s][A-Za-z0-9\s]*$/) //  this.noSpaceValidator,
      ]],
      address3: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(/^[A-Za-z0-9\s]*[^\s][A-Za-z0-9\s]*$/) //this.noSpaceValidator,
      ]],
      cridetCardNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(/^[A-Za-z0-9_-]*$/)]],
      homeLat: [null],
      homeLong: [null],
      homeZoom: [null]
    }); // STEP4 //

    this.validationBusinessInfoForm = this.formBuilder.group({
      branchCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      GovCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      DistCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      VillCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      busSectorCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      BusActivityTypesCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      BusName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(/^[A-Za-z0-9\s]*[^\s][A-Za-z0-9\s]*$/) // this.noSpaceValidator,
      ]],
      BusAddress: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(/^[A-Za-z0-9\s]*[^\s][A-Za-z0-9\s]*$/) //this.noSpaceValidator,
      ]],
      BusSpecializationCode: [""],
      busLat: [null],
      busLong: [null],
      busZoom: [null]
    }); // STEP5 //

    this.validationUserNameAndPassForm = this.formBuilder.group({
      loginName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(/^[^;*\/'"\\-\s]*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, this.noWhitespaceValidator]],
      password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(/^[^;*\/'"\\-\s]*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, this.noWhitespaceValidator]],
      confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(/^[^;*\/'"\\-\s]*$/), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required, this.noWhitespaceValidator]]
    }, {
      validator: _custom_validators__WEBPACK_IMPORTED_MODULE_5__.CustomValidators.passwordMatchValidator
    }); // STEP6 //

    this.validationUploadDocForm = this.formBuilder.group({
      docCode: [""]
    }); // STEP7 //

    this.validationEmailForm = this.formBuilder.group({
      email: ["", //      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]
    });
    this.validationFinishForm = this.formBuilder.group({});
    this.isNationIdCheckForm = false;
    this.isPersonalInfoFormSubmitted = false;
    this.isMobileFormSubmitted = false;
    this.isUserNameAndPassFormSubmitted = false;
    this.isBusinessInfoFormSubmitted = false;
    this.isUploadDocFormSubmitted = false;
    this.isEmailFormSubmitted = false;
    this.add2inputDisabled = false;
    this.add3inputDisabled = false;
    this.add2buttLocationDisabled = false;
    this.add3buttLocationDisabled = false;
    this.add2toggole = true;
    this.add3toggole = true; // timer //

    this.time = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject("00:00");
    this.percent = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject(100);
    this.state = "stop";
    this.startDuration = 1;
    this.circleR = circleR;
    this.circleDasharray = circleDasharray;
    this.ResendOTPisHidden = true;
    this.SMSdivHidden = true;
    this.mobileNumberCheckButton = true;
    this.mobileInputIsDisabled = false;
    this.OTPFieldsIsDisabled = false;
    this.otpInputIsDisabled = false;
    this.OTPisNotCorrectHidden = true;
    this.OTPisCorrectHidden = true;
    this.showLoader = false;
    this.idRes = {
      firstName: "",
      familyName: "",
      address: "",
      region: "",
      birthDate: "",
      nationalId: "",
      documentId: "",
      issueDate: "",
      occupation: "",
      maritalStatus: "",
      gender: "",
      religion: "",
      expiryDate: "",
      faceImage: "",
      frontImage: "",
      backImage: ""
    };
    this.picture = [];
    this.IDimg = "https://content.almalnews.com/wp-content/uploads/2022/07/%D8%A7%D9%84%D8%A8%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B4%D8%AE%D8%B5%D9%8A%D8%A9.jpg";
    this.CCimg = "https://cardinsider.com/wp-content/uploads/2022/10/How-to-find-your-credit-card-number-without-the-physical-card-Post.png.webp";
    this.OCRused = false;
    this.step1nextButtHide = true;
    this.DistIsDisabled = true;
    this.VillIsDisabled = true;
    this.BusDiv1Is1Disabled = true;
    this.BusDiv1Is2Disabled = true;
    this.isDocumentSelected = false;
    this.isOtpSendDisabled = false;
    this.isOtpResendDisabled = false;
    this.timerIsHidden = true;
    this.isOtpModalOpen = false;
    this.OtpResendButton = false;
    this.isPersonalInfoStep = false;
    this.ClientCanBackIDinfoFlag = false;
    this.ClientCanBackBusInfoFlag = false;
    this.ClientCanBackUserPassFlag = false;
    this.ClientCanBackDocFlag = false;
    this.ClientCanBackEmailFlag = false;
    this.ocrAllowed = false;
    this.directedFromLoanPage = false;
    this.otpResendFlag = false;

    this.getMonthDaysCount = function (date) {
      var tmp = new Date(date);
      tmp.setMonth(tmp.getMonth() + 1);
      tmp.setDate(0);
      return tmp.getDate();
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ClientRegistrationPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                navigator.geolocation.getCurrentPosition(function (position) {
                  _this.latitude = position.coords.latitude;
                  _this.longitude = position.coords.longitude;
                  _this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                  };
                  console.log("getCurrentPosition latitude: ", position.coords.latitude);
                  console.log("getCurrentPosition longitude: ", position.coords.longitude); // Set marker position

                  _this.setMarkerPosition(_this.latitude, _this.longitude);
                });
                _context.next = 3;
                return this.authService.getUserInfo().then(function (userInfo) {
                  _this.org_code_user_info = userInfo.org_code;
                });

              case 3:
                _context.prev = 3;
                this.showLoader = true;
                this.route.queryParams.subscribe(function (params) {
                  if (params === null || params === void 0 ? void 0 : params.co) {
                    _this.directedFromLoanPage = true;
                  }
                });
                window.history.replaceState({}, document.title, window.location.pathname);
                _context.next = 9;
                return this.featuresAuth.getFeaturePermission(1).then(function (featurePermission) {
                  _this.ocrAllowed = featurePermission;
                }, function (reason) {
                  return console.log(reason);
                });

              case 9:
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0);

              case 14:
                _context.prev = 14;
                console.log("ocrAllowed: ", this.ocrAllowed);
                this.showLoader = false;
                return _context.finish(14);

              case 18:
                // this.deafultPhone = "01000876983";
                // this.deafultNaID = "28809040102288";
                this.GetTimeLimitStaticAction();
                this.getAllBranches();
                this.GetBusinessActivityTypes();
                this.GetGoveName();
                this.GetBusinessDivisions();
                this.GetGender();
                this.GetMartialStatus();
                this.GetEduLevel();
                this.checkSMSorgAllowed();

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 11, 14, 18]]);
      }));
    } // timer //

  }, {
    key: "startTimer",
    value: function startTimer(duration) {
      var _this2 = this;

      this.state = "start";
      clearInterval(this.interval);
      this.timer = duration * 3; //Change seconds here

      this.updateTimeValue();
      this.interval = setInterval(function () {
        _this2.updateTimeValue();
      }, 1000);
      this.isOtpSendDisabled = true;
      this.isOtpResendDisabled = true;
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      clearInterval(this.interval);
      this.time.next("00:00");
      this.state = "stop";
      this.isOtpResendDisabled = false;
      this.timerIsHidden = true;
    }
  }, {
    key: "percentageOffset",
    value: function percentageOffset(percent) {
      var percentFloat = percent / 100;
      return circleDasharray * (1 - percentFloat);
    }
  }, {
    key: "updateTimeValue",
    value: function updateTimeValue() {
      var minutes = this.timer / 60;
      var seconds = this.timer % 60;
      minutes = String("0" + Math.floor(minutes)).slice(-2);
      seconds = String("0" + Math.floor(seconds)).slice(-2);
      var text = minutes + ":" + seconds;
      this.time.next(text);
      var totalTime = this.startDuration * 59;
      var percentage = (totalTime - this.timer) / totalTime * 100;
      this.percent.next(percentage);
      --this.timer;

      if (this.timer < 0) {
        // this.startTimer(this.startDuration) //to reset timer to start again
        this.stopTimer(); // to stop timer after finish the time
      }
    }
  }, {
    key: "nextButtAnimation",
    value: function nextButtAnimation() {
      var butt = document.getElementById("nextButt");
      butt.classList.add("animation");
    } ////step 2 nation id check

  }, {
    key: "nationIdCheck",
    value: function nationIdCheck() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var _this3 = this;

        var nation_id, org_code;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.isNationIdCheckForm = true;
                nation_id = this.nationIdCheckForm.controls.nationID.value.toString();
                org_code = this.org_code_user_info;
                this.http.post(this.env.API_URL + "api/ClientRegistration/CheckNationalID", {
                  nation_id: nation_id,
                  org_code: org_code
                }).subscribe({
                  next: function next(data) {
                    _this3.nationIdCheckVar = data;
                    console.log("client data:", _this3.nationIdCheckVar);
                    _this3.idImage = _this3.nationIdCheckVar.idImage;

                    if (_this3.nationIdCheckVar.unregisteredClient == "1") {
                      _this3.ClientCanBackIDinfoFlag = true;
                      _this3.ClientCanBackBusInfoFlag = true;
                      _this3.ClientCanBackUserPassFlag = true;
                      _this3.ClientCanBackDocFlag = true;
                      _this3.ClientCanBackEmailFlag = true;
                    } else if (_this3.nationIdCheckVar.step_no != null && _this3.nationIdCheckVar.existingClient == null) {
                      if (_this3.nationIdCheckVar.step_no == "3") {
                        _this3.ClientCanBackIDinfoFlag = false;
                        _this3.ClientCanBackBusInfoFlag = true;
                      } else if (_this3.nationIdCheckVar.step_no == "4") {
                        _this3.ClientCanBackUserPassFlag = true; //this.ClientCanBackBusInfoFlag = true;

                        console.log("ClientCanBackBusInfoFlag", _this3.ClientCanBackBusInfoFlag);
                      } else if (_this3.nationIdCheckVar.step_no == "5") {
                        _this3.ClientCanBackUserPassFlag = false;
                        _this3.ClientCanBackDocFlag = true;
                      }
                    } else if (_this3.nationIdCheckVar.step_no != null && _this3.nationIdCheckVar.existingClient == "1") {
                      if (_this3.nationIdCheckVar.step_no == "2") {
                        _this3.ClientCanBackBusInfoFlag = false;
                      } else if (_this3.nationIdCheckVar.step_no == "4") {
                        _this3.ClientCanBackUserPassFlag = false;
                      }
                    }

                    if (_this3.nationIdCheckForm.controls.nationID.value.length < 1) {
                      _this3.ErrorToastWithLogin("الرقم القومي لا يمكن ان يكون خالي"), _this3.step1nextButtHide = true;
                    } else if (_this3.nationIdCheckForm.controls.nationID.value.length == 14 && _this3.nationIdCheckForm.controls.nationID.valid) {
                      _this3.nextButtAnimation();

                      _this3.GetGenderFromNation();

                      _this3.GetBirthYear1FromNation();

                      _this3.GetBirthYear2FromNation();

                      _this3.GetBirthMonthFromNation();

                      _this3.GetBirthDayFromNation();

                      _this3.fullBirtDate();

                      _this3.nationIDbdateValidator();
                    }

                    if (_this3.idRes.frontImage && _this3.idRes.backImage && _this3.idRes.faceImage != null || _this3.idRes.frontImage && _this3.idRes.backImage && _this3.idRes.faceImage != "") {
                      _this3.uploadOCRimgToTemp(_this3.idRes);

                      _this3.OCRused = true;
                    }

                    _this3.getDocumentTypes();
                  },
                  error: function error(err) {
                    _this3.ErrorToast(err.error);

                    console.log(err.error);
                  }
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
    key: "checkSMSorgAllowed",
    value: function checkSMSorgAllowed() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var _this4 = this;

        var org_code, event_id;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                org_code = this.org_code_user_info;
                event_id = "0";
                this.http.post(this.env.API_URL + "api/ClientRegistration/SMSAllowed", {
                  org_code: org_code,
                  event_id: event_id
                }).subscribe({
                  next: function next(data) {
                    _this4.SMSAllowedInfoVar = data;

                    if (_this4.SMSAllowedInfoVar.par_value == "1" && _this4.SMSAllowedInfoVar.status == 1) {
                      _this4.SMSdivHidden = false;
                    } else {
                      _this4.mobileNumberCheckButton = false;
                    }
                  },
                  error: function error(err) {}
                });

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    } //otp_no: number;

  }, {
    key: "SMSsendOTP",
    value: function SMSsendOTP() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var mobile;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.showLoader = true;
                mobile = this.validationMobileForm.controls.mobileNumber.value;
                _context4.next = 4;
                return this.SMSService.OTP(mobile);

              case 4:
                //this.showMobileOtpSendingToast(); //
                this.timerIsHidden = false;
                this.startTimer(5); //this.otpSimShow(this.otp_no); //

                this.mobileInputIsDisabled = true;
                this.setOpen(true);
                this.showLoader = false;
                this.otpResendFlag = true;

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "checkMobileNumber",
    value: function checkMobileNumber() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var _this5 = this;

        var mobileNumber, mobileNumber_2, org_code;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.isMobileFormSubmitted = true;
                mobileNumber = this.validationMobileForm.controls.mobileNumber.value.toString();
                mobileNumber_2 = this.validationMobileForm.controls.mobileNumber2.value.toString();
                org_code = this.org_code_user_info;
                console.log("mobile is: ", mobileNumber);

                if (this.otpResendFlag == true) {
                  this.ResendOTPisHidden = false;
                }

                this.http.post(this.env.API_URL + "api/ClientRegistration/CheckPhoneNumber", {
                  mobileNumber: mobileNumber,
                  mobileNumber_2: mobileNumber_2,
                  org_code: org_code
                }).subscribe({
                  next: function next(data) {
                    //this.isMobileFormSubmitted = true;
                    _this5.checkMobileNumberInofVar = data;

                    if (_this5.validationMobileForm.controls.mobileNumber.value.length < 11) {
                      _this5.ErrorToast("رقم المحمول يجب ان يكون 11 رقم");
                    } // front error if num less than 11
                    else if (_this5.SMSAllowedInfoVar.par_value == "1" && _this5.SMSAllowedInfoVar.status == 1 && _this5.validationMobileForm.controls.mobileNumber.valid) {
                      _this5.SMSsendOTP();
                    }
                  },
                  error: function error(err) {
                    // recive errors from DB
                    _this5.ErrorToast(err.error);

                    console.log("CheckPhoneNumber: ", err.error);
                  }
                });

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "VerifyOTP",
    value: function VerifyOTP() {
      if (this.otp_no == this.validationMobileForm.controls.checkOTP_no.value) {
        this.OTPisNotCorrectHidden = true;
        this.OTPisCorrectHidden = false;
        this.OTPisCorrect = "1";
        this.otpInputIsDisabled = true;
        this.isOtpSendDisabled = true;
        this.isOtpResendDisabled = true;
        this.timerIsHidden = true;
        this.OTPFieldsIsDisabled = true;
        this.OtpResendButton = true;
        this.ResendOTPisHidden = true;
        this.delayedMethod();
      } else {
        this.OTPisNotCorrectHidden = false;
        this.OTPisCorrectHidden = true;
      }
    }
  }, {
    key: "nationIdFormSubmit",
    value: function nationIdFormSubmit() {
      this.isNationIdCheckForm = true;

      if (this.nationIdCheckForm.valid && this.nationIdCheckVar.unregisteredClient == "1") {
        this.wizardForm.goToNextStep();
      }
    }
  }, {
    key: "personalInfoFormSubmit",
    value: function personalInfoFormSubmit() {
      this.isPersonalInfoFormSubmitted = true;
      this.wizardForm.goToNextStep();
    } //step 1 submit

  }, {
    key: "mobileFormSubmit",
    value: function mobileFormSubmit() {
      this.isMobileFormSubmitted = true;

      if (this.validationMobileForm.valid && this.OTPisCorrect == "1") {
        this.wizardForm.goToNextStep();
        this.toastDismiss();
      }
    } //step 3 submit

  }, {
    key: "BusInfoFormSubmit",
    value: function BusInfoFormSubmit() {
      this.isBusinessInfoFormSubmitted = true;
      this.wizardForm.goToNextStep();
    } //step 5 submit

  }, {
    key: "userNameAndPassFormSubmit",
    value: function userNameAndPassFormSubmit() {
      this.isUserNameAndPassFormSubmitted = true;
      this.wizardForm.goToNextStep();
    }
  }, {
    key: "uploadDocFormSubmit",
    value: function uploadDocFormSubmit() {
      this.isUploadDocFormSubmitted = true;
      this.saveDocStepNo();

      if (this.idImage == "1" || this.picture.length >= 2 || this.OCRused == true) {
        this.wizardForm.goToNextStep();
      } else {
        this.alertSerivce.showAlertError("يجب ادخال صورة البطاقة امامي و خلفي", false);
      }
    }
  }, {
    key: "emailFormSubmit",
    value: function emailFormSubmit() {
      this.isEmailFormSubmitted = true;

      if (this.validationEmailForm.valid) {
        this.wizardForm.goToNextStep();
      }
    }
  }, {
    key: "saveMobileNumber",
    value: function saveMobileNumber() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        var _this6 = this;

        var org_code, mobile_1, mobile_2, step_no;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.isMobileFormSubmitted = true;
                org_code = this.org_code_user_info;
                mobile_1 = this.validationMobileForm.controls.mobileNumber.value.toString();
                mobile_2 = this.validationMobileForm.controls.mobileNumber2.value.toString();
                step_no = "1";
                this.http.post(this.env.API_URL + "api/ClientRegistration/ClientRegistration", {
                  org_code: org_code,
                  mobile_1: mobile_1,
                  mobile_2: mobile_2,
                  step_no: step_no
                }).subscribe({
                  next: function next(data) {
                    _this6.mobileFormSubmit();
                  },
                  error: function error(err) {
                    // recive errors from DB
                    _this6.mobileInputIsDisabled = false;

                    _this6.ErrorToast(err.error);

                    console.log(err.error);
                  }
                });

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "saveNationID",
    value: function saveNationID() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        var _this7 = this;

        var nation_id, org_code, step_no, mobile_1, existing_client;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                nation_id = this.nationIdCheckForm.controls.nationID.value.toString();
                org_code = this.org_code_user_info;
                step_no = "2";
                mobile_1 = this.validationMobileForm.controls.mobileNumber.value.toString();

                if (this.nationIdCheckVar.existingClient == null) {
                  existing_client = "0";
                } else {
                  existing_client = this.nationIdCheckVar.existingClient.toString();
                }

                this.http.post(this.env.API_URL + "api/ClientRegistration/ClientRegistration", {
                  nation_id: nation_id,
                  org_code: org_code,
                  step_no: step_no,
                  mobile_1: mobile_1,
                  existing_client: existing_client
                }).subscribe({
                  next: function next(data) {
                    console.log("this.stepNo: ", _this7.stepNo);

                    _this7.ocrUsedAlert();

                    if (_this7.nationIdCheckVar.existingClient == "1" && _this7.nationIdCheckVar.step_no == null) {
                      _this7.ChangeStep(4); //create username & pass.


                      _this7.step1nextButtHide = true;
                    } else if (_this7.nationIdCheckVar.existingClient == "1" && _this7.nationIdCheckVar.step_no >= "4") {
                      _this7.stepNo = Number(_this7.nationIdCheckVar.step_no);

                      _this7.ChangeStep(_this7.stepNo); //create username & pass.


                      _this7.step1nextButtHide = true;
                    } else if (_this7.nationIdCheckVar.existingClient == "1" && _this7.nationIdCheckVar.step_no < "4") {
                      _this7.stepNo = Number(_this7.nationIdCheckVar.step_no);

                      _this7.ChangeStep(4); //create username & pass.


                      _this7.step1nextButtHide = true;
                    } else if (_this7.nationIdCheckVar.uncompletedStepsClient == "1" && _this7.nationIdCheckVar.step_no != null) {
                      _this7.GetGenderFromNation();

                      _this7.GetBirthYear1FromNation();

                      _this7.GetBirthYear2FromNation();

                      _this7.GetBirthMonthFromNation();

                      _this7.GetBirthDayFromNation();

                      _this7.fullBirtDate();

                      _this7.stepNo = Number(_this7.nationIdCheckVar.step_no);
                      console.log("this.stepNo: ", _this7.stepNo);

                      _this7.ChangeStep(_this7.stepNo);
                    } else {
                      _this7.nationIdFormSubmit();
                    } // this.GetMaritalStatusCode();

                  },
                  error: function error(err) {
                    // recive errors from DB
                    _this7.ErrorToast(err.error);

                    console.log(err.error);
                  }
                });

              case 6:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "saveIdInfo",
    value: function saveIdInfo() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
        var _this8 = this;

        var org_code, step_no, nation_id, mobile_1, client_name, birth_date, id_serial, id_date, gender, edu_level_code, martial_status, home_add_1, home_add_2, home_add_3, client_account, home_Lat, home_Long, home_Zoom;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.isPersonalInfoFormSubmitted = true;
                this.fullNameMearge();

                if (this.validationPersonalInfoForm.valid) {
                  org_code = this.org_code_user_info;
                  step_no = "3";
                  nation_id = this.validationPersonalInfoForm.controls.nationID.value.toString();
                  mobile_1 = this.validationMobileForm.controls.mobileNumber.value.toString();
                  client_name = this.fullName.toString(); //

                  birth_date = this.validationPersonalInfoForm.controls.birthDate.value.toString(); //

                  id_serial = this.validationPersonalInfoForm.controls.nationIDserial.value.toString();
                  id_date = this.validationPersonalInfoForm.controls.nationIDissueDate.value.toString(); //

                  gender = this.validationPersonalInfoForm.controls.Gender.value.toString(); //

                  edu_level_code = this.validationPersonalInfoForm.controls.educationLevel.value.toString(); //

                  martial_status = this.validationPersonalInfoForm.controls.maritalStatus.value.toString(); //

                  home_add_1 = this.address1.toString(); //

                  home_add_2 = this.validationPersonalInfoForm.controls.address2.value.toString(); //

                  home_add_3 = this.validationPersonalInfoForm.controls.address3.value.toString();
                  client_account = this.validationPersonalInfoForm.controls.cridetCardNo.value.toString();
                  home_Lat = this.validationPersonalInfoForm.controls.homeLat.value;
                  home_Long = this.validationPersonalInfoForm.controls.homeLong.value;
                  home_Zoom = "0";
                  this.http.post(this.env.API_URL + "api/ClientRegistration/ClientRegistration", {
                    nation_id: nation_id,
                    org_code: org_code,
                    step_no: step_no,
                    client_name: client_name,
                    home_add_1: home_add_1,
                    birth_date: birth_date,
                    id_serial: id_serial,
                    id_date: id_date,
                    gender: gender,
                    edu_level_code: edu_level_code,
                    martial_status: martial_status,
                    home_add_2: home_add_2,
                    home_add_3: home_add_3,
                    client_account: client_account,
                    mobile_1: mobile_1,
                    home_Lat: home_Lat,
                    home_Long: home_Long,
                    home_Zoom: home_Zoom
                  }).subscribe({
                    next: function next(data) {
                      console.log("next:");

                      _this8.personalInfoFormSubmit(); // if have no err. go to next step


                      console.log("next2:");
                    },
                    error: function error(err) {
                      // recive errors from DB
                      _this8.alertSerivce.showAlertError(err.error, false); //this.ErrorToast(err.error);
                      //if (err.error !== 0){this.validationPersonalInfoForm}
                      //console.log(err.error);

                    }
                  });
                }

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }, {
    key: "saveBusInfo",
    value: function saveBusInfo() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
        var _this9 = this;

        var org_code, step_no, nation_id, mobile_1, branch_code, gov_code, dist_code, vill_code, bs_div_1_code, bs_div_2_code, bus_name, bus_add_1, bus_Lat, bus_Long, bus_Zoom;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.isBusinessInfoFormSubmitted = true;

                if (this.validationBusinessInfoForm.valid) {
                  org_code = this.org_code_user_info; //+//

                  step_no = "4"; //+//

                  nation_id = this.nationIdCheckForm.controls.nationID.value.toString();
                  mobile_1 = this.validationMobileForm.controls.mobileNumber.value.toString(); // here define the new fields to save according to step

                  branch_code = this.validationBusinessInfoForm.controls.branchCode.value.toString(); //+//

                  gov_code = this.validationBusinessInfoForm.controls.GovCode.value.toString(); //

                  dist_code = this.validationBusinessInfoForm.controls.DistCode.value.toString(); //

                  vill_code = this.validationBusinessInfoForm.controls.VillCode.value.toString(); //

                  bs_div_1_code = this.validationBusinessInfoForm.controls.busSectorCode.value.toString(); //

                  bs_div_2_code = this.validationBusinessInfoForm.controls.BusActivityTypesCode.value.toString(); //

                  this.bs_div_3_code = this.validationBusinessInfoForm.controls.BusSpecializationCode.value; //

                  bus_name = this.validationBusinessInfoForm.controls.BusName.value.toString(); //

                  bus_add_1 = this.validationBusinessInfoForm.controls.BusAddress.value.toString(); //

                  bus_Lat = this.validationBusinessInfoForm.controls.busLat.value;
                  bus_Long = this.validationBusinessInfoForm.controls.busLong.value;
                  bus_Zoom = "0";
                  this.http.post(this.env.API_URL + "api/ClientRegistration/ClientRegistration", {
                    nation_id: nation_id,
                    org_code: org_code,
                    step_no: step_no,
                    gov_code: gov_code,
                    dist_code: dist_code,
                    vill_code: vill_code,
                    bs_div_1_code: bs_div_1_code,
                    bs_div_2_code: bs_div_2_code,
                    bs_div_3_code: this.bs_div_3_code,
                    bus_name: bus_name,
                    bus_add_1: bus_add_1,
                    branch_code: branch_code,
                    mobile_1: mobile_1,
                    bus_Lat: bus_Lat,
                    bus_Long: bus_Long,
                    bus_Zoom: bus_Zoom
                  }).subscribe({
                    next: function next(data) {
                      _this9.BusInfoFormSubmit(); // if have no err. go to next step

                    },
                    error: function error(err) {
                      // recive errors from DB
                      _this9.ErrorToast(err.error); //if (err.error !== 0){this.validationPersonalInfoForm}


                      console.log(err.error);
                    }
                  });
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
    key: "saveUserNameAndPassword",
    value: function saveUserNameAndPassword() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10() {
        var _this10 = this;

        var nation_id, org_code, step_no, mobile_1, loginName, password, confirmPassword;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                this.isUserNameAndPassFormSubmitted = true;

                if (this.validationUserNameAndPassForm.valid) {
                  nation_id = this.nationIdCheckForm.controls.nationID.value.toString();
                  org_code = this.org_code_user_info;
                  step_no = "5";
                  mobile_1 = this.validationMobileForm.controls.mobileNumber.value.toString();
                  loginName = this.validationUserNameAndPassForm.controls.loginName.value.toString();
                  password = this.validationUserNameAndPassForm.controls.password.value.toString();
                  confirmPassword = this.validationUserNameAndPassForm.controls.confirmPassword.value.toString();

                  if (this.validationUserNameAndPassForm.valid) {
                    this.http.post(this.env.API_URL + "api/ClientRegistration/ClientRegistration", {
                      nation_id: nation_id,
                      org_code: org_code,
                      step_no: step_no,
                      mobile_1: mobile_1,
                      loginName: loginName,
                      password: password,
                      confirmPassword: confirmPassword
                    }).subscribe({
                      next: function next(data) {
                        _this10.userNameAndPassFormSubmit();
                      },
                      error: function error(err) {
                        _this10.ErrorToast(err.error);
                      }
                    });
                  }
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
    key: "saveDocStepNo",
    value: function saveDocStepNo() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee11() {
        var _this11 = this;

        var nation_id, org_code, step_no, mobile_1;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.isUploadDocFormSubmitted = true;

                if (this.validationUploadDocForm.valid) {
                  console.log("save step no");
                  nation_id = this.nationIdCheckForm.controls.nationID.value.toString();
                  org_code = this.org_code_user_info;
                  step_no = "6";
                  mobile_1 = this.validationMobileForm.controls.mobileNumber.value.toString();
                  this.http.post(this.env.API_URL + "api/ClientRegistration/ClientRegistration", {
                    // here write the variables what you need from api
                    nation_id: nation_id,
                    org_code: org_code,
                    step_no: step_no,
                    mobile_1: mobile_1
                  }).subscribe({
                    next: function next(data) {},
                    error: function error(err) {
                      // recive errors from DB
                      _this11.ErrorToast(err.error);

                      console.log(err.error);
                    }
                  });
                }

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
    }
  }, {
    key: "saveEmail",
    value: function saveEmail() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee12() {
        var _this12 = this;

        var nation_id, org_code, step_no, email_1, mobile_1;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this.isEmailFormSubmitted = true;

                if (this.validationEmailForm.valid && this.validationEmailForm.controls.email.value != null && this.validationEmailForm.controls.email.value != "") {
                  nation_id = this.nationIdCheckForm.controls.nationID.value.toString();
                  org_code = this.org_code_user_info;
                  step_no = "7";
                  email_1 = this.validationEmailForm.controls.email.value.toString();
                  mobile_1 = this.validationMobileForm.controls.mobileNumber.value.toString();
                  this.http.post(this.env.API_URL + "api/ClientRegistration/ClientRegistration", {
                    nation_id: nation_id,
                    org_code: org_code,
                    step_no: step_no,
                    email_1: email_1,
                    mobile_1: mobile_1
                  }).subscribe({
                    next: function next(data) {
                      _this12.emailFormSubmit();
                    },
                    error: function error(err) {
                      // recive errors from DB
                      _this12.ErrorToast(err.error);

                      console.log(err.error);
                    }
                  });
                } else this.emailFormSubmit();

              case 2:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
    }
  }, {
    key: "fullNameMearge",
    value: function fullNameMearge() {
      this.fullName = this.validationPersonalInfoForm.controls.firstName.value.toString() + " " + this.validationPersonalInfoForm.controls.restOfName.value.toString();
      this.StrCleaner(this.fullName);
      console.log(this.fullName);
    }
  }, {
    key: "address1Mearge",
    value: function address1Mearge() {
      this.address1 = this.validationPersonalInfoForm.controls.address1part1.value.toString() + " " + this.validationPersonalInfoForm.controls.address1part2.value.toString();
    }
  }, {
    key: "GetEduLevel",
    value: function GetEduLevel() {
      var _this13 = this;

      return this.http.get(this.env.API_URL + "api/ClientRegistration/GetAllEduLevel").subscribe(function (data) {
        _this13.EduLevelObjects = data;
      });
    }
  }, {
    key: "GetMartialStatus",
    value: function GetMartialStatus() {
      var _this14 = this;

      return this.http.get(this.env.API_URL + "api/ClientRegistration/GetMaritalStatus").subscribe(function (data) {
        _this14.MartialStatusObjects = data;
        console.log("MartialStatusObjects is: ", _this14.MartialStatusObjects);
      });
    }
  }, {
    key: "GetGender",
    value: function GetGender() {
      var _this15 = this;

      return this.http.get(this.env.API_URL + "api/ClientRegistration/GetGender").subscribe(function (data) {
        _this15.Genders = data;
      });
    }
  }, {
    key: "GetGenderFromNation",
    value: function GetGenderFromNation() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee13() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (this.nationIdCheckForm.controls.nationID.value.slice(12, -1) % 2 != 0) {
                  //if odd ==> male
                  this.genders = "1";
                  this.validationPersonalInfoForm.patchValue({
                    Gender: this.genders
                  });
                } else {
                  //If Even OR 0 ==> Female
                  this.genders = "2";
                  this.validationPersonalInfoForm.patchValue({
                    Gender: this.genders
                  });
                }

              case 1:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
    }
  }, {
    key: "GetBirthYear1FromNation",
    value: function GetBirthYear1FromNation() {
      if (this.nationIdCheckForm.value.nationID.slice(0, -13) == 1) {
        //Range (1800 ==> 1899)
        return this.BirthYear1 = 18;
      }

      if (this.nationIdCheckForm.value.nationID.slice(0, -13) == 2) {
        //Range (1900 ==> 1999)
        return this.BirthYear1 = 19;
      }

      if (this.nationIdCheckForm.value.nationID.slice(0, -13) == 3) {
        //Range (2000 ==> 2099)
        return this.BirthYear1 = 20;
      }

      if (this.nationIdCheckForm.value.nationID.slice(0, -13) == 4) {
        //Range (2100 ==> 2199)
        return this.BirthYear1 = 21;
      }
    }
  }, {
    key: "GetBirthYear2FromNation",
    value: function GetBirthYear2FromNation() {
      //Range (??-- ==> ??--)
      return this.BirthYear2 = this.nationIdCheckForm.value.nationID.slice(1, -11);
    }
  }, {
    key: "fullBirtDate",
    value: function fullBirtDate() {
      this.BirthDate = this.BirthYear1 + this.BirthYear2 + "-" + this.BirthMonth + "-" + this.Birthday;
      this.validationPersonalInfoForm.patchValue({
        birthDate: this.datepipe.transform(this.BirthDate, "yyyy-MM-dd")
      }); // birthDate: this.datepipe.transform(
      //   this.AllClientsInfo.result.clientData.birth_date,
      //   "yyyy-MM-dd"
      // ),
    }
  }, {
    key: "GetBirthMonthFromNation",
    value: function GetBirthMonthFromNation() {
      return this.BirthMonth = this.nationIdCheckForm.value.nationID.slice(3, -9);
    }
  }, {
    key: "GetBirthDayFromNation",
    value: function GetBirthDayFromNation() {
      return this.Birthday = this.nationIdCheckForm.value.nationID.slice(5, -7);
    }
  }, {
    key: "GetGoveName",
    value: function GetGoveName() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee14() {
        var _this16 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", this.http.get(this.env.API_URL + "api/ClientRegistration/GetGovNames", {}).subscribe({
                  next: function next(data) {
                    _this16.GetGoveNameObjects = data;
                  },
                  error: function error(err) {}
                }));

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
    }
  }, {
    key: "ChangeGov",
    value: function ChangeGov() {
      var _this17 = this;

      this.validationBusinessInfoForm.patchValue({
        DistCode: null
      });
      this.validationBusinessInfoForm.patchValue({
        VillCode: null
      });
      {
        this.http.get(this.env.API_URL + "api/Location/GetDistCodes?gov_code=" + this.validationBusinessInfoForm.controls.GovCode.value, {}).subscribe(function (data) {
          _this17.getAllBranches();

          _this17.GetDistNamesObjects = data;
          _this17.DistIsDisabled = false;
        });
      }
    }
  }, {
    key: "ChangeDist",
    value: function ChangeDist() {
      var _this18 = this;

      this.validationBusinessInfoForm.patchValue({
        VillCode: null
      });
      {
        this.http.get(this.env.API_URL + "api/Location/GetVillCodes?gov_code=" + this.validationBusinessInfoForm.controls.GovCode.value + "&dist_code=" + this.validationBusinessInfoForm.controls.DistCode.value).subscribe(function (data) {
          _this18.GetVillNameObjects = data;
          _this18.VillIsDisabled = false;
        });
      }
    }
  }, {
    key: "ChangeBusDiv1",
    value: function ChangeBusDiv1() {
      var _this19 = this;

      this.validationBusinessInfoForm.patchValue({
        BusActivityTypesCode: null
      });
      this.validationBusinessInfoForm.patchValue({
        BusSpecializationCode: null
      });
      {
        this.http.get(this.env.API_URL + "api/ClientRegistration/GetBusinessActivityTypes?bs_div_1_code=" + this.validationBusinessInfoForm.controls.busSectorCode.value, {}).subscribe(function (data) {
          _this19.GetBusinessActivityTypesObjects = data;
          _this19.BusDiv1Is1Disabled = false;
        });
      }
    }
  }, {
    key: "ChangeBusDiv2",
    value: function ChangeBusDiv2() {
      var _this20 = this;

      this.validationBusinessInfoForm.patchValue({
        BusSpecializationCode: null
      });
      {
        this.http.get(this.env.API_URL + "api/ClientRegistration/GetBusinessSpecialities?bs_div_1_code=" + this.validationBusinessInfoForm.controls.busSectorCode.value + "&bs_div_2_code=" + this.validationBusinessInfoForm.controls.BusActivityTypesCode.value).subscribe(function (data) {
          _this20.GetBusinessSpecialitiesObjects = data;
          _this20.BusDiv1Is2Disabled = false;
        });
      }
    }
  }, {
    key: "GetBusinessDivisions",
    value: function GetBusinessDivisions() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee15() {
        var _this21 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                return _context15.abrupt("return", this.http.get(this.env.API_URL + "api/ClientRegistration/GetBusinessDivisions", {}).subscribe({
                  next: function next(data) {
                    _this21.GetBusinessDivisionsObjects = data;
                  },
                  error: function error(err) {}
                }));

              case 1:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
    }
  }, {
    key: "GetBusinessActivityTypes",
    value: function GetBusinessActivityTypes() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee16() {
        var _this22 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", this.http.get(this.env.API_URL + "api/ClientRegistration/GetBusinessActivityTypes?bs_div_1_code=".concat(this.bs_div_1_code), {}).subscribe({
                  next: function next(data) {
                    _this22.GetBusinessActivityTypesObjects = data;
                  },
                  error: function error(err) {}
                }));

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
    }
  }, {
    key: "ChangeStep",
    value: function ChangeStep(desinationIndex) {
      for (var i = 1; i <= desinationIndex;) {
        this.wizardForm.wizardSteps[i].completed = true;
        i++;
      }

      this.wizard.goToStep(desinationIndex);
    }
  }, {
    key: "getDocumentTypes",
    value: function getDocumentTypes() {
      var _this23 = this;

      this.http.get(this.env.API_URL + "api/ClientRegistration/GetAllDocumentsTypesSelfRegistration?nation_id=".concat(this.nationIdCheckForm.value.nationID.toString(), "\n          &org_code=").concat(this.org_code_user_info)).subscribe({
        next: function next(data) {
          _this23.documentTypes = data;
          console.log("documentTypes: ", _this23.documentTypes);
        },
        error: function error(err) {
          _this23.ErrorToast(err.error);
        }
      });
    }
  }, {
    key: "addNewDocument",
    value: function addNewDocument() {
      var _this24 = this;

      var documentTypeCode = this.validationUploadDocForm.controls.docCode.value.toString();
      var nation_id = this.nationIdCheckForm.controls.nationID.value.toString();
      var org_code = this.org_code_user_info;
      this.http.post(this.env.API_URL + "api/ClientRegistration/InsertUnconfirmedDocument", {
        documentTypeCode: documentTypeCode,
        nation_id: nation_id,
        org_code: org_code
      }).subscribe({
        next: function next(data) {
          _this24.UnconfirmedDocumentObjects = data;

          if (_this24.UnconfirmedDocumentObjects.documentTypeCode == "-2") {
            _this24.documentDetails = [].constructor(0, 1); //doc pages is 3 you need only 2 ID front and back IMG
          } else {
            _this24.documentDetails = [].constructor(data.pageNumber);
          }

          console.log("documentDetails", _this24.documentDetails);
          _this24.isDocumentSelected = true; //this.showLoader = false;
        },
        error: function error(err) {
          return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this24, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee17() {
            return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    this.showLoader = false;
                    _context17.next = 3;
                    return this.alertSerivce.showAlertError("\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u062E\u0627\u062F\u0645<br>".concat(JSON.stringify(err === null || err === void 0 ? void 0 : err.error)), false);

                  case 3:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, this);
          }));
        }
      });
    }
  }, {
    key: "takePicture",
    value: function takePicture(index) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee18() {
        var permission, cameraResult;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                console.log("take picture is start's here");
                _context18.next = 3;
                return this.requestCameraPermission();

              case 3:
                permission = _context18.sent;

                if (!permission) {
                  _context18.next = 10;
                  break;
                }

                _context18.next = 7;
                return this.cameraService.getPhoto();

              case 7:
                cameraResult = _context18.sent;
                console.log("getPhoto start's here");

                if (cameraResult.success = true) {
                  console.log("cameraResult: ", cameraResult.success);
                  this.photo = cameraResult.photo;
                  this.imageSrc = "data:image/jpg;base64," + this.photo.base64String;
                  this.picture[index] = this.photo;
                  this.uploadPicture(index);
                  this.imageModal.present();
                } else {
                  this.alertSerivce.showAlertError(cameraResult.message, false);
                }

              case 10:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
    }
  }, {
    key: "checkCameraPermission",
    value: function checkCameraPermission() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee19() {
        var _yield$Camera$checkPe, photos, camera;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return _capacitor_camera__WEBPACK_IMPORTED_MODULE_12__.Camera.checkPermissions();

              case 2:
                _yield$Camera$checkPe = _context19.sent;
                photos = _yield$Camera$checkPe.photos;
                camera = _yield$Camera$checkPe.camera;
                return _context19.abrupt("return", photos == "granted" && camera == "granted");

              case 6:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19);
      }));
    }
  }, {
    key: "canAskForCameraPermission",
    value: function canAskForCameraPermission() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee20() {
        var _yield$Camera$checkPe2, photos, camera;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return _capacitor_camera__WEBPACK_IMPORTED_MODULE_12__.Camera.checkPermissions();

              case 2:
                _yield$Camera$checkPe2 = _context20.sent;
                photos = _yield$Camera$checkPe2.photos;
                camera = _yield$Camera$checkPe2.camera;
                return _context20.abrupt("return", photos != "denied" && camera != "denied");

              case 6:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }));
    }
  }, {
    key: "requestCameraPermission",
    value: function requestCameraPermission() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee21() {
        var granted, canAskForPermission;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return this.checkCameraPermission();

              case 2:
                granted = _context21.sent;

                if (!granted) {
                  _context21.next = 7;
                  break;
                }

                return _context21.abrupt("return", true);

              case 7:
                _context21.next = 9;
                return this.canAskForCameraPermission();

              case 9:
                canAskForPermission = _context21.sent;

                if (!canAskForPermission) {
                  _context21.next = 18;
                  break;
                }

                _context21.next = 13;
                return _capacitor_camera__WEBPACK_IMPORTED_MODULE_12__.Camera.requestPermissions();

              case 13:
                _context21.next = 15;
                return this.checkCameraPermission();

              case 15:
                granted = _context21.sent;

                if (!granted) {
                  _context21.next = 18;
                  break;
                }

                return _context21.abrupt("return", true);

              case 18:
                return _context21.abrupt("return", false);

              case 19:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));
    }
  }, {
    key: "uploadPicture",
    value: function uploadPicture(index) {
      var _this25 = this;

      this.isUploadDocFormSubmitted = true;

      if (this.validationUploadDocForm.valid) {
        this.isUploadDocFormSubmitted = true;
        var orgCode = this.UnconfirmedDocumentObjects.orgCode;
        var documentSerial = this.UnconfirmedDocumentObjects.documentSerial;
        var documentTypeCode = this.UnconfirmedDocumentObjects.documentTypeCode;
        console.log();
        this.http.post(this.env.API_URL + "api/ClientRegistration/UploadUnconfirmedImage", {
          orgCode: orgCode,
          documentSerial: documentSerial,
          documentTypeCode: documentTypeCode,
          // ...this.currentDocument,
          pageNumber: index + 1,
          image: this.photo.base64String
        }).subscribe({
          next: function next(data) {
            console.log("photo: ", _this25.photo); //this.showLoader = false;

            _this25.presentToast("تم", "تم رفع الصورة بنجاح");
          },
          error: function error(err) {
            //this.showLoader = false;
            _this25.documentDetails[index] = null;

            _this25.presentToast("خطأ", "خطأ في رفع الصورة");
          }
        });
      }
    }
  }, {
    key: "uploadOCRimgToTemp",
    value: function uploadOCRimgToTemp(idRes) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee23() {
        var _this26 = this;

        var org_code, nation_id;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                this.isUploadDocFormSubmitted = true;

                if (this.validationUploadDocForm.valid) {
                  org_code = this.org_code_user_info;
                  nation_id = this.nationIdCheckForm.controls.nationID.value.toString();
                  this.showLoader = true;
                  this.http.post(this.env.API_URL + "api/ClientRegistration/UploadUnconfirmedClientImages", {
                    frontImage: idRes.frontImage,
                    backImage: idRes.backImage,
                    faceImage: idRes.faceImage,
                    org_code: org_code,
                    nation_id: nation_id
                  }).subscribe({
                    next: function next(data) {
                      _this26.getDocumentTypes();

                      _this26.showLoader = false;
                    },
                    error: function error(err) {
                      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this26, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee22() {
                        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee22$(_context22) {
                          while (1) {
                            switch (_context22.prev = _context22.next) {
                              case 0:
                                this.showLoader = false;
                                _context22.next = 3;
                                return this.alertSerivce.showAlertError(err.error, false);

                              case 3:
                              case "end":
                                return _context22.stop();
                            }
                          }
                        }, _callee22, this);
                      }));
                    }
                  });
                }

              case 2:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));
    }
  }, {
    key: "presentToast",
    value: function presentToast(header, message) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee24() {
        var toast;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return this.toastCtrl.create({
                  header: header,
                  message: message,
                  cssClass: "toast-primary",
                  duration: 2000,
                  position: "bottom"
                });

              case 2:
                toast = _context24.sent;
                _context24.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));
    }
  }, {
    key: "isImageValid",
    value: function isImageValid(index) {
      var image = this.picture[index];
      return !!image && image != "" && /^[a-zA-Z0-9\+/]*={0,3}$/.test(this.photo);
    } //#ALERT//

  }, {
    key: "infoAlertCamera",
    value: function infoAlertCamera() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee25() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                this.alertSerivce.InfoAlert("في شاشة البيانات الشخصية سيتم ملئ خانة الاسم والعنوان والرقم القومي وتاريخ الميلاد تلقائياً عند تصوير البطاقة، لذا يجب مراعاة ان البطاقة ليس بها اى كسور او شروخ. برجاء مراجعة البيانات والتأكد من صحتها اضغط تم للأستمرار.", false);

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));
    } //#ALERT//
    // async idSerialGuide() {
    //   const alert = await this.alertCtrl.create({
    //     header: "سيريال بطاقة الرقم القومي",
    //     cssClass: "form-group",
    //     message: new IonicSafeString(`<img src="${this.IDimg}" alt="photo" />`),
    //     buttons: [
    //       {
    //         text: "تم",
    //         cssClass: "alert-button-cancel",
    //       },
    //     ],
    //   });
    //   await alert.present();
    // }
    //#ALERT//
    // async cridetCardNoGuide() {
    //   const alert = await this.alertCtrl.create({
    //     header: "رقم كارت الائتمان",
    //     cssClass: "form-group",
    //     message: new IonicSafeString(`<img src="${this.CCimg}" alt="photo" />`),
    //     buttons: [
    //       {
    //         text: "تم",
    //         cssClass: "alert-button-cancel",
    //       },
    //     ],
    //     mode: "md",
    //   });
    //   await alert.present();
    // }

  }, {
    key: "infoAlertMobileOtp",
    value: function infoAlertMobileOtp() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee26() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                this.alertSerivce.InfoAlert("سيتم ارسال كود التحقق من 6 ارقام في رسالة نصية على رقم الموبايل (اساسي) الذي قمت بأدخالة، برجاء كتابة رمز التحقق تالياً.", false);

              case 1:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));
    }
  }, {
    key: "infoAlertEmailOtp",
    value: function infoAlertEmailOtp() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee27() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                this.alertSerivce.InfoAlert("سيتم ارسال كود التحقق من اربع ارقام في بريد الكتروني على عنوان البريد الالكتروني الذي قمت بإدخالة، برجاء كتابة رمز التحقق تالياً.", false);

              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));
    }
  }, {
    key: "showMailOtpToast",
    value: function showMailOtpToast() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee28() {
        var toast;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.next = 2;
                return this.toastCtrl.create({
                  header: "كود التحقق (OTP)",
                  message: "سيتم ارسال كود التحقق من 6 ارقام في بريد الكتروني على عنوان البريد الالكتروني الذي قمت بإدخالة",
                  position: "top",
                  duration: 10000,
                  color: "dark",
                  //show buttons in toast
                  buttons: [{
                    icon: "sms",
                    role: "cancel",
                    side: "end"
                  }],
                  cssClass: "form-group"
                });

              case 2:
                toast = _context28.sent;
                _context28.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));
    }
  }, {
    key: "ErrorToast",
    value: function ErrorToast(message) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee29() {
        var toast;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.next = 2;
                return this.toastCtrl.create({
                  header: "",
                  message: message = message,
                  position: "middle",
                  duration: 10000,
                  color: "dark",
                  keyboardClose: true,
                  //show buttons in toast
                  buttons: [{
                    side: "start"
                  }, {
                    icon: "close",
                    role: "cancel",
                    side: "start"
                  }],
                  cssClass: "ion-text-center"
                });

              case 2:
                toast = _context29.sent;
                _context29.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));
    }
  }, {
    key: "showMobileOtpSendingToast",
    value: function showMobileOtpSendingToast() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee30() {
        var toast;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                _context30.next = 2;
                return this.toastCtrl.create({
                  header: "كود التحقق (OTP)",
                  message: "سيتم ارسال كود التحقق من 6 ارقام في رسالة نصية SMS على رقم التليفون الاساسي",
                  position: "bottom",
                  duration: 10000,
                  color: "dark",
                  keyboardClose: true,
                  //show buttons in toast
                  buttons: [{
                    side: "end"
                  }, {
                    icon: "close",
                    role: "cancel",
                    side: "start"
                  }],
                  cssClass: "ion-text-center"
                });

              case 2:
                toast = _context30.sent;
                _context30.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));
    }
  }, {
    key: "ErrorToastWithLogin",
    value: function ErrorToastWithLogin(message) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee31() {
        var toast;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                _context31.next = 2;
                return this.toastCtrl.create({
                  //header : 'خطأ',
                  message: message = message,
                  position: "middle",
                  duration: 100000,
                  color: "dark",
                  //mode: 'md',
                  keyboardClose: true,
                  //show buttons in toast
                  buttons: [{
                    side: "start"
                  }, {
                    icon: "close",
                    role: "cancel",
                    side: "start"
                  }, {
                    side: "end"
                  }],
                  cssClass: "ion-text-center"
                });

              case 2:
                toast = _context31.sent;
                _context31.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));
    }
  }, {
    key: "toastDismiss",
    value: function toastDismiss() {
      this.toastCtrl.dismiss(this.showMobileOtpSendingToast);
      this.toastCtrl.dismiss(this.ErrorToastWithLogin);
    }
  }, {
    key: "otpSimShow",
    value: function otpSimShow(otp_no) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee32() {
        var toast;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _context32.next = 2;
                return this.toastCtrl.create({
                  //header : 'otp is:',
                  message: "otp is: " + otp_no.toString(),
                  position: "bottom",
                  duration: 100000,
                  color: "dark",
                  //mode: 'md',
                  keyboardClose: true,
                  //show buttons in toast
                  buttons: [{
                    side: "start"
                  }, {
                    icon: "close",
                    role: "cancel",
                    side: "start"
                  }, {
                    side: "end"
                  }],
                  cssClass: "ion-text-center"
                });

              case 2:
                toast = _context32.sent;
                _context32.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));
    }
  }, {
    key: "reloadPage",
    value: function reloadPage() {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_19__.isPlatformBrowser)(this.platformId)) {
        window.location.reload();
      }
    }
  }, {
    key: "noWhitespaceValidator",
    value: function noWhitespaceValidator(control) {
      var isWhitespace = (control.value || "").toString().trim().length === 0;
      var isValid = !isWhitespace;
      return isValid ? null : {
        whitespace: true
      };
    } /////////////////////////////OCR//////////////////////

  }, {
    key: "DetectIDImages",
    value: function DetectIDImages() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee35() {
        var _this27 = this;

        var org_code;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                org_code = this.org_code_user_info;

                if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_7__.Capacitor.getPlatform() != "web")) {
                  _context35.next = 11;
                  break;
                }

                if (!(this.imageSrcFront != undefined && this.imageSrcBack != undefined)) {
                  _context35.next = 7;
                  break;
                }

                this.showLoader = true;
                this.http.post(this.env.API_URL + "api/IDRecognition/ReadImages", {
                  image1: this.imageSrcFront.replace("data:image/jpeg;base64,", ""),
                  image2: this.imageSrcBack.replace("data:image/jpeg;base64,", "")
                }).subscribe({
                  next: function next(data) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this27, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee33() {
                      var successful;
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee33$(_context33) {
                        while (1) {
                          switch (_context33.prev = _context33.next) {
                            case 0:
                              successful = data["successful"];
                              this.idRes = data["result"];
                              if (this.idRes.faceImage != null) this.imageSrcFace = "data:image/jpeg;base64," + this.idRes.faceImage;else {
                                this.imageSrcFace = null;
                              }
                              if (this.idRes.frontImage != null) this.imageIdFront = "data:image/jpeg;base64," + this.idRes.frontImage;else {
                                this.imageIdFront = null;
                              }
                              if (this.idRes.backImage != null) this.imageIdBack = "data:image/jpeg;base64," + this.idRes.backImage;else {
                                this.imageIdBack = null;
                              }
                              this.ocrPatchValue(this.idRes);
                              this.showLoader = false;

                              if (!(successful != 1)) {
                                _context33.next = 10;
                                break;
                              }

                              _context33.next = 10;
                              return this.alertSerivce.showAlertError("قد تكون النتيجة غير صحيحة", false);

                            case 10:
                            case "end":
                              return _context33.stop();
                          }
                        }
                      }, _callee33, this);
                    }));
                  },
                  error: function error(err) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(_this27, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee34() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee34$(_context34) {
                        while (1) {
                          switch (_context34.prev = _context34.next) {
                            case 0:
                              this.showLoader = false;
                              _context34.next = 3;
                              return this.alertSerivce.showAlertError(err.error, false);

                            case 3:
                            case "end":
                              return _context34.stop();
                          }
                        }
                      }, _callee34, this);
                    }));
                  }
                });
                _context35.next = 9;
                break;

              case 7:
                _context35.next = 9;
                return this.alertSerivce.showAlertError("Please take ID photos first", false);

              case 9:
                _context35.next = 13;
                break;

              case 11:
                _context35.next = 13;
                return this.alertSerivce.showAlertError("Web is not supported for this function", false);

              case 13:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));
    }
  }, {
    key: "onWillDismiss",
    value: function onWillDismiss(event) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee36() {
        var ev;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                ev = event;

                if (ev.detail.role === "cancel") {
                  this.idRes = {
                    firstName: "",
                    familyName: "",
                    address: "",
                    region: "",
                    birthDate: "",
                    nationalId: "",
                    documentId: "",
                    issueDate: "",
                    occupation: "",
                    maritalStatus: "",
                    gender: "",
                    religion: "",
                    expiryDate: "",
                    faceImage: "",
                    frontImage: "",
                    backImage: ""
                  };
                } else {
                  this.validationPersonalInfoForm.patchValue({
                    nationID: this.idRes.nationalId
                  });
                }

              case 2:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));
    }
  }, {
    key: "IsIdResultEmpty",
    value: function IsIdResultEmpty() {
      return this.idRes.nationalId == "" && this.idRes.firstName == "" && this.idRes.familyName == "";
    }
  }, {
    key: "CheckImageFound",
    value: function CheckImageFound(image) {
      return image != undefined && image != null && image.length != 0 && !this.CheckImageUndefined(image);
    }
  }, {
    key: "openCameraModal",
    value: function openCameraModal(front) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee37() {
        var _this28 = this;

        var modal;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_7__.Capacitor.getPlatform() != "web")) {
                  _context37.next = 10;
                  break;
                }

                _context37.next = 3;
                return this.modal.create({
                  component: src_app_views_components_camerapreview_camerapreview_page__WEBPACK_IMPORTED_MODULE_8__.CameraPreviewPage,
                  cssClass: "",
                  animated: true
                });

              case 3:
                modal = _context37.sent;
                modal.onDidDismiss().then(function (data) {
                  if (data !== null) {
                    if (front) _this28.imageSrcFront = "data:image/jpeg;base64," + data.data;else {
                      _this28.imageSrcBack = "data:image/jpeg;base64," + data.data;
                    }
                  }
                });
                _context37.next = 7;
                return modal.present();

              case 7:
                return _context37.abrupt("return", _context37.sent);

              case 10:
                _context37.next = 12;
                return this.alertSerivce.showAlertError("Web is not supported for this function", false);

              case 12:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));
    }
  }, {
    key: "CheckImageUndefined",
    value: function CheckImageUndefined(image) {
      return image.includes("undefined");
    }
  }, {
    key: "EmptyIdResult",
    value: function EmptyIdResult() {
      this.idRes = {
        firstName: "",
        familyName: "",
        address: "",
        region: "",
        birthDate: "",
        nationalId: "",
        documentId: "",
        issueDate: "",
        occupation: "",
        maritalStatus: "",
        gender: "",
        religion: "",
        expiryDate: "",
        faceImage: "",
        frontImage: "",
        backImage: ""
      };
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.EmptyIdResult();
      this.ocrModal.dismiss(null, "cancel");
    }
  }, {
    key: "confirm",
    value: function confirm() {
      console.log("con. start");
      this.ocrModal.dismiss(null, "confirm");
      console.log("con. end");
    }
  }, {
    key: "ocrPatchValue",
    value: function ocrPatchValue(idRes) {
      this.nationIdCheckForm.patchValue({
        nationID: idRes.nationalId
      });
      this.validationPersonalInfoForm.patchValue({
        firstName: idRes.firstName
      });
      this.validationPersonalInfoForm.patchValue({
        restOfName: idRes.familyName
      });
      this.validationPersonalInfoForm.patchValue({
        address1part1: idRes.address
      });
      this.validationPersonalInfoForm.patchValue({
        address1part2: idRes.region
      });
      this.validationPersonalInfoForm.patchValue({
        nationID: idRes.nationalId
      });
      this.validationPersonalInfoForm.patchValue({
        nationIDserial: idRes.documentId
      }); // if (this.validationPersonalInfoForm.controls.nationIDserial.value == "" ){
      // }

      this.validationPersonalInfoForm.patchValue({
        nationIDissueDate: this.datepipe.transform(idRes.issueDate.slice(5, 7).toString() + // Issue Month
        "/01/" + // Asumed Issue Day
        idRes.issueDate.slice(0, -3).toString(), // Issue Year
        "yyyy-MM-dd")
      });
      this.validationPersonalInfoForm.patchValue({
        maritalStatus: idRes.maritalStatus
      });
      this.maritalStatus();
    }
  }, {
    key: "ocrUsedAlert",
    value: function ocrUsedAlert() {
      if (this.OCRused == true) {
        this.alertSerivce.popAlertBoolean("عزيزي العميل برجاء مراجعة البيانات المستخرجة من بطاقة الرقم القومي قبل الضغط على حفظ واستكمال.", "تنبية", "");
      }
    }
  }, {
    key: "maritalStatus",
    value: function maritalStatus() {
      switch (this.idRes.maritalStatus) {
        case "أعزب" || 0:
          this.validationPersonalInfoForm.controls.maritalStatus.patchValue("1");
          break;

        case "متزوج" || 0:
          this.validationPersonalInfoForm.controls.maritalStatus.patchValue("2");
          break;

        case "متزوج ويعول":
          this.validationPersonalInfoForm.controls.maritalStatus.patchValue("3");
          break;

        case "مطلق" || 0:
          this.validationPersonalInfoForm.controls.maritalStatus.patchValue("4");
          break;

        case "ارمل" || 0:
          this.validationPersonalInfoForm.controls.maritalStatus.patchValue("5");
          break;
        //default:
        //code block
      }
    } ///////////////////////////////////////location///////////////////////////////////////

  }, {
    key: "getClientLocation",
    value: function getClientLocation() {
      var _a, _b;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee38() {
        var locationResult;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                // if (Capacitor.getPlatform() != "web") {
                this.showLoader = true;
                _context38.prev = 1;
                _context38.next = 4;
                return this.locationService.getLocation();

              case 4:
                locationResult = _context38.sent;

                if (locationResult.success) {
                  _context38.next = 9;
                  break;
                }

                this.alertSerivce.showAlertError(locationResult.message, false);
                this.showLoader = false;
                return _context38.abrupt("return");

              case 9:
                this.ClientLat = (_a = locationResult.position) === null || _a === void 0 ? void 0 : _a.coords.latitude.toString();
                this.ClientLong = (_b = locationResult.position) === null || _b === void 0 ? void 0 : _b.coords.longitude.toString();
                this.showLoader = false;
                _context38.next = 17;
                break;

              case 14:
                _context38.prev = 14;
                _context38.t0 = _context38["catch"](1);
                this.showLoader = false;

              case 17:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this, [[1, 14]]);
      }));
    }
  }, {
    key: "getHomeLocation",
    value: function getHomeLocation() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee39() {
        var locationResult;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                this.showLoader = true;
                _context39.next = 3;
                return this.locationService.getLocation();

              case 3:
                locationResult = _context39.sent;
                console.log(locationResult);

                if (locationResult.success) {
                  _context39.next = 9;
                  break;
                }

                this.alertSerivce.showAlertError(locationResult.message, false);
                this.showLoader = false;
                return _context39.abrupt("return");

              case 9:
                //console.log("lat: ", this.validationBusinessInfoForm.controls.lat.value);
                this.presentToast("تم", locationResult.message);
                this.showLoader = false;
                _context39.next = 13;
                return this.alertSerivce.showAlertError("خطأ عند أخذ لقطة الموقع", false);

              case 13:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));
    } //////////////////////////////////////////////////////google maps methods/////////////////////////////////

  }, {
    key: "setMarkerPosition",
    value: function setMarkerPosition(latitude, longitude) {
      // Set marker position
      this.markers = [{
        position: {
          lat: latitude,
          lng: longitude
        },
        options: {
          animation: google.maps.Animation.DROP,
          draggable: true
        }
      }];
      this.zoom = 18;
    }
  }, {
    key: "eventHandler",
    value: function eventHandler(event, name) {
      // console.log(event, name);
      switch (name) {
        case "mapDblclick":
          // Add marker on double click event
          this.setMarkerPosition(event.latLng.lat(), event.latLng.lng());
          this.getAddress(event.latLng.lat(), event.latLng.lng());
          break;

        case "mapDragMarker":
          break;

        case "mapDragend":
          this.getAddress(event.latLng.lat(), event.latLng.lng());
          break;

        default:
          break;
      }
    }
  }, {
    key: "getAddress",
    value: function getAddress(latitude, longitude) {
      var _this29 = this;

      this.geoCoder.geocode({
        location: {
          lat: latitude,
          lng: longitude
        }
      }).subscribe(function (addr) {
        if (addr.status === "OK") {
          if (addr.results[0]) {
            _this29.zoom = 18; //DEFAULT 12

            _this29.address = addr.results[0].formatted_address;
            console.log("LAT here: ", addr.results[0].geometry.location.lat() + "LONG here: " + addr.results[0].geometry.location.lng() + "result: " + addr.results[0]); // this.isPersonalInfoStep = true

            if (_this29.wizardForm.currentStepIndex == 2) {
              console.log("currentStepIndex is: ", _this29.wizardForm.currentStepIndex); //home//

              _this29.validationPersonalInfoForm.patchValue({
                homeLat: addr.results[0].geometry.location.lat()
              });

              _this29.validationPersonalInfoForm.patchValue({
                homeLong: addr.results[0].geometry.location.lng()
              });

              _this29.validationPersonalInfoForm.patchValue({// homeZoom: addr.results[0].partial_match,
              });
            } else if (_this29.wizardForm.currentStepIndex == 3) {
              console.log("currentStepIndex is: ", _this29.wizardForm.currentStepIndex); //business//

              _this29.validationBusinessInfoForm.patchValue({
                busLat: addr.results[0].geometry.location.lat()
              });

              _this29.validationBusinessInfoForm.patchValue({
                busLong: addr.results[0].geometry.location.lng()
              });

              _this29.validationBusinessInfoForm.patchValue({// homeZoom: addr.results[0].partial_match,
              });
            }
          } else {
            _this29.address = null;
            window.alert("No results found");
          }
        } else {
          _this29.address = null;
          window.alert("Geocoder failed due to: " + addr.status);
        }
      });
    }
  }, {
    key: "GetGeolocation",
    value: function GetGeolocation() {
      var _this30 = this;

      navigator.geolocation.getCurrentPosition(function (position) {
        _this30.latitude = position.coords.latitude;
        _this30.longitude = position.coords.longitude;
        _this30.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }; // Set marker position

        _this30.setMarkerPosition(_this30.latitude, _this30.longitude);

        _this30.getAddress(_this30.latitude, _this30.longitude);
      });
    }
  }, {
    key: "getAllBranches",
    value: function getAllBranches() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee40() {
        var _this31 = this;

        var params;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpParams();
                params = params.set("org_code", this.org_code_user_info);
                params = params.set("gov_code", this.validationBusinessInfoForm.controls.GovCode.value); // if (this.ClientLat && this.ClientLong != null) {
                //   params = params.set("client_Lat", this.ClientLat);
                //   params = params.set("client_Long", this.ClientLong);
                // }

                return _context40.abrupt("return", this.http.get(this.env.API_URL + "api/ClientRegistration/GetAllBranches?".concat(params.toString()), {}).subscribe({
                  next: function next(data) {
                    _this31.getAllBranchesObjects = data; // if (this.ClientLat != null && this.ClientLong != null) {
                    //   this.selectBranch = this.getAllBranchesObjects[0].branch_code;
                    // }
                  },
                  error: function error(err) {}
                }));

              case 4:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));
    } // async getAllBranchesByLocationMarker() {
    //   // this.getClientLocation();
    //   let params = new HttpParams();
    //   params = params.set("org_code", this.org_code_user_info);
    //   params = params.set(
    //     "gov_code",
    //     this.validationBusinessInfoForm.controls.GovCode.value
    //   );
    //   if (this.latitude && this.longitude != null) {
    //     params = params.set("client_Lat", this.latitude);
    //     params = params.set("client_Long", this.longitude);
    //   }
    //   return this.http
    //     .get<IBranch[]>(
    //       this.env.API_URL +
    //         `api/ClientRegistration/GetAllBranches?${params.toString()}`,
    //       {}
    //     )
    //     .subscribe({
    //       next: (data) => {
    //         this.getAllBranchesObjects = data;
    //         if (this.latitude != null && this.longitude != null) {
    //           this.selectBranch = this.getAllBranchesObjects[0].branch_code;
    //         }
    //         this.BranchMapsModal.dismiss();
    //       },
    //       error: (err) => {},
    //     });
    // }

  }, {
    key: "gotoNextField",
    value: function gotoNextField(nextElement) {
      nextElement.setFocus();
    }
  }, {
    key: "otpFieldsMearge",
    value: function otpFieldsMearge() {
      this.validationMobileForm.patchValue({
        checkOTP_no: this.validationMobileForm.controls.otpField1.value.toString() + this.validationMobileForm.controls.otpField2.value.toString() + this.validationMobileForm.controls.otpField3.value.toString() + this.validationMobileForm.controls.otpField4.value.toString() + this.validationMobileForm.controls.otpField5.value.toString() + this.validationMobileForm.controls.otpField6.value.toString()
      });
      console.log("checkOTP_no 6 fields", this.validationMobileForm.controls.checkOTP_no);
    }
  }, {
    key: "meargeFieldsAndVerifyOtpFunctions",
    value: function meargeFieldsAndVerifyOtpFunctions() {
      this.otpFieldsMearge();

      if (this.validationMobileForm.value.checkOTP_no.length == 6) {
        this.VerifyOTP();
      }
    }
  }, {
    key: "otpModalDismissDelay",
    value: function otpModalDismissDelay() {
      this.otpModal.dismiss();
    }
  }, {
    key: "delayedMethod",
    value: function delayedMethod() {
      var _this32 = this;

      setTimeout(function () {
        _this32.otpModalDismissDelay(); // Call the delayed method after the delay

      }, 2000); // Delay of 2 seconds (2000 milliseconds)
    }
  }, {
    key: "GetTimeLimitStaticAction",
    value: function GetTimeLimitStaticAction() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee41() {
        var _this33 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                return _context41.abrupt("return", this.http.get(this.env.API_URL + "api/ClientRegistration/GetStaticActions?page=1&pagesize=1&org_code=".concat(this.org_code_user_info, "&requestType=2&static_action_id=28"), {}).subscribe({
                  next: function next(data) {
                    _this33.IStaticActionsObjects = data["result"];
                    _this33.timeLimit = _this33.IStaticActionsObjects[0].value + " ساعة ";
                  },
                  error: function error(err) {}
                }));

              case 1:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));
    }
  }, {
    key: "noDateGreaterToday",
    value: function noDateGreaterToday(control) {
      var isDateGrater = new Date(control.value);
      var currentDate = new Date();

      if (isDateGrater > currentDate) {
        return {
          DateIsGrater: true
        };
      }
    }
  }, {
    key: "noZerosAtNationIDBirthDate",
    value: function noZerosAtNationIDBirthDate(control) {
      var testedBDay = new String(control.value).slice(5, -7).toString();
      var testedBMonth = new String(control.value).slice(3, -9).toString();
      var testedBYear = new String(control.value).slice(1, -11).toString(); // console.log(testedBDay);

      var Zeros = new String("00").toString();

      if (testedBDay === Zeros || testedBMonth === Zeros || testedBYear === Zeros) {
        return {
          zerosAtDay: true
        };
      }
    } // currentYear() {
    //   let currentYear = new Date().getFullYear();
    //   console.log("currentYear is:", currentYear);
    //   const date = new Date();
    //   const currentDate = date.toISOString().split("T")[0];
    //   console.log("currentDate", currentDate);
    // }

  }, {
    key: "nationIDbdateValidator",
    value: function nationIDbdateValidator() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee42() {
        var testedBDay, testedBMonth, testedBYear, fullYear, yearMonth, maxMonths, currentYear, date, formatedCurrentDate, currentDate, fullTestedIDdate, DaysOfMonth;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                testedBDay = new String(this.nationIdCheckForm.controls.nationID.value).slice(5, -7).toString();
                testedBMonth = new String(this.nationIdCheckForm.controls.nationID.value).slice(3, -9).toString();
                testedBYear = new String(this.nationIdCheckForm.controls.nationID.value).slice(1, -11).toString();
                fullYear = this.BirthYear1 + testedBYear;
                yearMonth = fullYear + "-" + testedBMonth;
                maxMonths = "12";
                currentYear = new Date().getFullYear().toString();
                date = new Date();
                formatedCurrentDate = date.toISOString().split("T")[0];
                currentDate = new Date(formatedCurrentDate);
                fullTestedIDdate = new Date(this.BirthYear1 + testedBYear + "-" + testedBMonth + "-" + testedBDay);
                DaysOfMonth = this.getMonthDaysCount(yearMonth).toString();
                console.log("fullTestedIDdate....", fullTestedIDdate);
                console.log("currentDate", formatedCurrentDate);
                console.log("currentYear is:", currentYear);
                console.log("fullYear is:", fullYear);

                if (!(testedBDay > DaysOfMonth || testedBMonth > maxMonths || fullYear > currentYear || fullTestedIDdate > currentDate)) {
                  _context42.next = 23;
                  break;
                }

                _context42.next = 19;
                return this.alertSerivce.showAlertError("برجاء التحقق من كتابة الرقم القومي بشكل صحيح", false);

              case 19:
                this.validationPersonalInfoForm.valid == null;
                this.step1nextButtHide = true;
                _context42.next = 25;
                break;

              case 23:
                this.validationPersonalInfoForm.valid == true;
                this.step1nextButtHide = false;

              case 25:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));
    }
  }, {
    key: "StrCleaner",
    value: function StrCleaner(i) {
      var _this34 = this;

      {
        this.http.post(this.env.API_URL + "api/Functions/GetStrCleaner", {
          input_str: i
        }).subscribe(function (data) {
          _this34.strCleaner = data[0].str;

          _this34.check(_this34.strCleaner);
        });
      }
    }
  }, {
    key: "check",
    value: function check(i) {
      var re = /عبد /gi;
      var str = i;
      var newstr = str.replace(re, "عبد");
      var ii = newstr;
      this.check1(ii);
    }
  }, {
    key: "check1",
    value: function check1(i) {
      var re = /ابو /gi;
      var str = i;
      var newstr = str.replace(re, "ابو");
      i = newstr;
      this.check2(i);
    }
  }, {
    key: "check2",
    value: function check2(i) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee43() {
        var wordCount;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                // var wordCount = new String(this.fullName).trim().split(/\s+/).length;
                // if (wordCount < 3) {
                wordCount = i.trim().split(/\s+/).length;

                if (!(wordCount < 3)) {
                  _context43.next = 7;
                  break;
                }

                _context43.next = 4;
                return this.alertSerivce.showAlertError("برجاء كتابة الاسم الثلاثي علي الاقل", false);

              case 4:
                this.validationPersonalInfoForm.valid == null;
                _context43.next = 8;
                break;

              case 7:
                this.validationPersonalInfoForm.valid == true;

              case 8:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));
    }
  }, {
    key: "focusInputElement",
    value: function focusInputElement() {
      this.Field1.nativeElement.setFocus();
    }
  }, {
    key: "delayedfocus",
    value: function delayedfocus() {
      var _this35 = this;

      setTimeout(function () {
        _this35.focusInputElement();
      }, 1000);
    }
  }, {
    key: "setOpen",
    value: function setOpen(isOpen) {
      this.isOtpModalOpen = isOpen;
      this.delayedfocus();
    }
  }]);

  return ClientRegistrationPage;
}();

ClientRegistrationPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_camera_service__WEBPACK_IMPORTED_MODULE_11__.CameraService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.AlertController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.AlertController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ToastController
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClient
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__.EnvService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.ModalController
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe
  }, {
    type: src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_9__.LocationService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_10__.MohassilAuthService
  }, {
    type: Object,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.Inject,
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_22__.PLATFORM_ID]
    }]
  }, {
    type: _angular_google_maps__WEBPACK_IMPORTED_MODULE_23__.MapGeocoder
  }, {
    type: src_app_core_services_sms_service__WEBPACK_IMPORTED_MODULE_13__.SMSService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_24__.ActivatedRoute
  }, {
    type: src_app_core_services_AuthenticationServices_features_auth_service__WEBPACK_IMPORTED_MODULE_14__.FeaturesAuthService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_15__.AlertService
  }];
};

ClientRegistrationPage.propDecorators = {
  searchElementRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
    args: ["search"]
  }],
  map: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
    args: ["myGoogleMap", {
      static: false
    }]
  }],
  info: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
    args: [_angular_google_maps__WEBPACK_IMPORTED_MODULE_23__.MapInfoWindow, {
      static: false
    }]
  }],
  BranchMapsModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
    args: ["BranchMapsModal"]
  }],
  HomeMapsModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
    args: ["HomeMapsModal"]
  }],
  BusMapsModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
    args: ["BusMapsModal"]
  }],
  otpModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
    args: ["otpModal"]
  }],
  ocrModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
    args: ["ocrModal"]
  }],
  wizardForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
    args: ["wizardForm"]
  }],
  checkOTP_no: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
    args: ["checkOTPnoinput"]
  }],
  wizard: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
    args: [angular_archwizard__WEBPACK_IMPORTED_MODULE_25__.WizardComponent]
  }],
  imageModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
    args: ["imageModal"]
  }],
  Field1: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ViewChild,
    args: ["Field1", {
      static: false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_22__.ElementRef
    }]
  }]
};
ClientRegistrationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
  selector: "app-client-registration",
  template: _client_registration_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_client_registration_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], ClientRegistrationPage);


/***/ }),

/***/ 93828:
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/registry/client-registration/custom-validators.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomValidators": function() { return /* binding */ CustomValidators; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);


// step 5 //
// this step created by command (ng g class custom-validators) in terminal
var CustomValidators = /*#__PURE__*/function () {
  function CustomValidators() {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomValidators);
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomValidators, null, [{
    key: "patternValidator",
    value: function patternValidator(regex, error) {
      return function (control) {
        if (!control.value) {
          // if control is empty return no error
          return null;
        } // test the value of the control against the regexp supplied


        var valid = regex.test(control.value); // if true, return no error (no error), else return error passed in the second parameter

        return valid ? null : error;
      };
    }
  }, {
    key: "passwordMatchValidator",
    value: function passwordMatchValidator(control) {
      var password = control.get("password").value; // get password from our password form control

      var confirmPassword = control.get("confirmPassword").value; // get password from our confirmPassword form control
      // compare is the password math

      if (password !== confirmPassword) {
        // if they don't match, set an error in our confirmPassword form control
        control.get("confirmPassword").setErrors({
          NoPassswordMatch: true
        });
      }
    }
  }]);

  return CustomValidators;
}();

/***/ }),

/***/ 84930:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/registry/client-registration/client-registration.page.scss?ngResource ***!
  \***************************************************************************************************/
/***/ (function(module) {

module.exports = "@charset \"UTF-8\";\n.paddingTop10px {\n  padding-top: 10px;\n}\n.paddingTop35px {\n  padding-top: 35px;\n}\n.faded-line {\n  margin-bottom: 0.5em;\n  display: block;\n  border: none;\n  color: white;\n  height: 2px;\n  background: #d2d2d2;\n}\n.divCenter {\n  justify-items: center;\n  text-align: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-item-align: center !important;\n      align-self: center !important;\n}\n.headerIcon {\n  color: #1e9ea5;\n  width: 40px;\n  height: 40px;\n}\n.FormIcon {\n  color: #1e9ea5;\n  width: 50;\n  height: 22px;\n}\n.themeColor {\n  color: #1e9ea5;\n}\n.paddingTop5px {\n  padding-top: 5px;\n}\n.marginInline {\n  margin-inline: 1rem;\n  /*ok*/\n}\n.is-invalid {\n  border-left: solid 6px red;\n}\n.blackColor {\n  color: black;\n}\n.greenColor {\n  color: #008000;\n}\n.marginLeft {\n  margin-left: 10px;\n}\n.marginLeft20PX {\n  margin-left: 20px;\n}\n.marginRight {\n  margin-right: 10px;\n}\nbody {\n  padding: 1rem 0.5rem;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  font-family: \"Raleway\", Sans-serif;\n}\n.popup {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  background-color: #ffffff00;\n  text-align: center;\n}\n.popup .popup-content  {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n.popup .popup-title {\n  color: #32325d;\n  font-size: 1.8em;\n  line-height: 1.5em;\n  font-weight: 900;\n  margin-top: 0;\n}\n.popup .popup-body {\n  font-size: 1.1em;\n  line-height: 1.6em;\n  color: #6b7c93;\n  font-weight: 500;\n  margin-bottom: 2.1em;\n}\n.popup .popup-button {\n  display: block;\n  text-align: center;\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 1em;\n  text-transform: uppercase;\n  color: #fff;\n  border-radius: 5px;\n  margin: 10px;\n  background-size: 200% auto;\n  color: white;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n  background-image: linear-gradient(to right, #1e9ea5 0%, #ffabf4 50%, #1e9ea5 100%);\n  transition: 0.5s;\n}\n.popup .popup-button:hover {\n  background-position: right center;\n}\n.paddingTop40px {\n  padding-top: 40px;\n}\n.alignLeft {\n  -ms-flex-line-pack: end;\n      align-content: end;\n  text-align: left;\n}\n.buttonExpand {\n  width: 100%;\n}\n.marginTop35px {\n  margin-top: 35px;\n}\n.ionSelectSize {\n  min-width: 100%;\n}\n.text-danger {\n  font-size: 10px;\n  color: red;\n}\n.animation {\n  width: auto;\n  height: auto;\n  background-color: white;\n  -webkit-animation-name: example;\n          animation-name: example;\n  -webkit-animation-duration: 4s;\n          animation-duration: 4s;\n  -webkit-animation-iteration-count: 15;\n          animation-iteration-count: 15;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  box-shadow: gold;\n}\n@-webkit-keyframes example {\n  0%, 7% {\n    box-shadow: #008000;\n    transform: rotateZ(0);\n  }\n  15% {\n    transform: rotateZ(-5deg);\n  }\n  20% {\n    transform: rotateZ(10deg);\n  }\n  25% {\n    transform: rotateZ(-5deg);\n  }\n  30% {\n    transform: rotateZ(10deg);\n  }\n  35% {\n    transform: rotateZ(-5deg);\n  }\n  40%, 100% {\n    box-shadow: #e91e63;\n    transform: rotateZ(0);\n  }\n}\n@keyframes example {\n  0%, 7% {\n    box-shadow: #008000;\n    transform: rotateZ(0);\n  }\n  15% {\n    transform: rotateZ(-5deg);\n  }\n  20% {\n    transform: rotateZ(10deg);\n  }\n  25% {\n    transform: rotateZ(-5deg);\n  }\n  30% {\n    transform: rotateZ(10deg);\n  }\n  35% {\n    transform: rotateZ(-5deg);\n  }\n  40%, 100% {\n    box-shadow: #e91e63;\n    transform: rotateZ(0);\n  }\n}\n.picCenter {\n  -ms-flex-pack: center;\n      justify-content: center;\n  text-align: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.form-label-required::after {\n  content: \" *\";\n  color: #ff3366 !important;\n}\nion-input[type=number]::-webkit-inner-spin-button,\nion-input[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none !important;\n  margin: 0 !important;\n  display: none !important;\n}\n@-webkit-keyframes trueAnimation {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes trueAnimation {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.true-sign {\n  -webkit-animation: trueAnimation 0.6s ease-in-out;\n          animation: trueAnimation 0.6s ease-in-out;\n  opacity: 1;\n}\n.fullscreen {\n  --width: 100% !important;\n  --height: 100% !important;\n}\n@media (orientation: portrait) {\n  #cardFront,\n#cardBack {\n    aspect-ratio: 675/431;\n  }\n\n  .footer-button {\n    width: 100% !important;\n  }\n}\n@media (orientation: landscape) {\n  #cardFront {\n    aspect-ratio: 675/431;\n    width: 45% !important;\n  }\n\n  #cardBack {\n    aspect-ratio: 675/431;\n    width: 45% !important;\n  }\n\n  .footer-button {\n    width: 50% !important;\n  }\n\n  #footer {\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n/* component.scss */\n.highlighted-input::-moz-selection {\n  font-weight: bold;\n  color: #b4300f;\n}\n.highlighted-input::selection {\n  font-weight: bold;\n  color: #b4300f;\n}\n.spinner-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  height: 100vh;\n}\n.spinner-letters {\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 16px;\n}\n.spinner-letter {\n  font-size: 32px;\n  font-weight: bold;\n  margin: 0 8px;\n  opacity: 0;\n  -webkit-animation: spinner-letters-appear 1s infinite ease-in-out alternate;\n          animation: spinner-letters-appear 1s infinite ease-in-out alternate;\n}\n@-webkit-keyframes spinner-letters-appear {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  50% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n}\n@keyframes spinner-letters-appear {\n  0% {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  50% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXHJlZ2lzdHJ5XFxjbGllbnQtcmVnaXN0cmF0aW9uXFxjbGllbnQtcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsImNsaWVudC1yZWdpc3RyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGlCQUFBO0FERUY7QUNDQTtFQUNFLGlCQUFBO0FERUY7QUNDQTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FERUY7QUNDQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtNQUFBLHVCQUFBO0VBQ0Esc0NBQUE7TUFBQSw2QkFBQTtBREVGO0FDQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURFRjtBQ0NBO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FERUY7QUNDQTtFQUNFLGNBQUE7QURFRjtBQ0NBO0VBQ0UsZ0JBQUE7QURFRjtBQ0NBO0VBQ0UsbUJBQUE7RUFBcUIsS0FBQTtBREd2QjtBQ0FBO0VBQ0UsMEJBQUE7QURHRjtBQ0FBO0VBQ0UsWUFBQTtBREdGO0FDQUE7RUFDRSxjQUFBO0FER0Y7QUNBQTtFQUNFLGlCQUFBO0FER0Y7QUNBQTtFQUNFLGlCQUFBO0FER0Y7QUNBQTtFQUNFLGtCQUFBO0FER0Y7QUNDQTtFQUNFLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7QURFRjtBQ0NBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMEJBQUE7TUFBQSxxQkFBQTtFQUNBLHFCQUFBO01BQUEsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FERUY7QUNBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO01BQUEsZUFBQTtFQUNBLDBCQUFBO01BQUEsc0JBQUE7QURHRjtBQ0RBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QURJRjtBQ0ZBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FES0Y7QUNIQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsMkVBQUE7RUFDQSxrRkFBQTtFQU1BLGdCQUFBO0FEQ0Y7QUNDQTtFQUNFLGlDQUFBO0FERUY7QUNDQTtFQUNFLGlCQUFBO0FERUY7QUNDQTtFQUNFLHVCQUFBO01BQUEsa0JBQUE7RUFDQSxnQkFBQTtBREVGO0FDQ0E7RUFDRSxXQUFBO0FERUY7QUNDQTtFQUNFLGdCQUFBO0FERUY7QUNDQTtFQUNFLGVBQUE7QURFRjtBQ0NBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QURFRjtBQ0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUVBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxnQkFBQTtBRENGO0FDRUE7RUFDRTtJQUVFLG1CQUFBO0lBQ0EscUJBQUE7RURBRjtFQ0VBO0lBQ0UseUJBQUE7RURBRjtFQ0VBO0lBQ0UseUJBQUE7RURBRjtFQ0VBO0lBQ0UseUJBQUE7RURBRjtFQ0VBO0lBQ0UseUJBQUE7RURBRjtFQ0VBO0lBQ0UseUJBQUE7RURBRjtFQ0VBO0lBRUUsbUJBQUE7SUFDQSxxQkFBQTtFRERGO0FBQ0Y7QUN4QkE7RUFDRTtJQUVFLG1CQUFBO0lBQ0EscUJBQUE7RURBRjtFQ0VBO0lBQ0UseUJBQUE7RURBRjtFQ0VBO0lBQ0UseUJBQUE7RURBRjtFQ0VBO0lBQ0UseUJBQUE7RURBRjtFQ0VBO0lBQ0UseUJBQUE7RURBRjtFQ0VBO0lBQ0UseUJBQUE7RURBRjtFQ0VBO0lBRUUsbUJBQUE7SUFDQSxxQkFBQTtFRERGO0FBQ0Y7QUNJQTtFQUNFLHFCQUFBO01BQUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO01BQUEscUJBQUE7QURGRjtBQ01FO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FESEo7QUNPQTs7RUFFRSxtQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QURKRjtBQ09BO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RURKRjtFQ01BO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VESkY7QUFDRjtBQ0pBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLFVBQUE7RURKRjtFQ01BO0lBQ0UsbUJBQUE7SUFDQSxVQUFBO0VESkY7QUFDRjtBQ09BO0VBQ0UsaURBQUE7VUFBQSx5Q0FBQTtFQUNBLFVBQUE7QURMRjtBQ1FBO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtBRExGO0FDT0E7RUFDRTs7SUFFRSxxQkFBQTtFREpGOztFQ01BO0lBQ0Usc0JBQUE7RURIRjtBQUNGO0FDS0E7RUFDRTtJQUNFLHFCQUFBO0lBQ0EscUJBQUE7RURIRjs7RUNLQTtJQUNFLHFCQUFBO0lBQ0EscUJBQUE7RURGRjs7RUNJQTtJQUNFLHFCQUFBO0VEREY7O0VDR0E7SUFDRSxvQkFBQTtJQUFBLGFBQUE7RURBRjtBQUNGO0FDR0EsbUJBQUE7QUFDQTtFQUVFLGlCQUFBO0VBQ0EsY0FBQTtBREZGO0FDREE7RUFFRSxpQkFBQTtFQUNBLGNBQUE7QURGRjtBQ0tBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsMEJBQUE7TUFBQSxzQkFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxxQkFBQTtNQUFBLHVCQUFBO0VBQ0EsYUFBQTtBREZGO0FDS0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxnQkFBQTtBREZGO0FDS0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLDJFQUFBO1VBQUEsbUVBQUE7QURGRjtBQ0tBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RURGRjtFQ0lBO0lBQ0UsVUFBQTtJQUNBLHdCQUFBO0VERkY7RUNJQTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFREZGO0FBQ0Y7QUNWQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VERkY7RUNJQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFREZGO0VDSUE7SUFDRSxVQUFBO0lBQ0EsMkJBQUE7RURGRjtBQUNGIiwiZmlsZSI6ImNsaWVudC1yZWdpc3RyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnBhZGRpbmdUb3AxMHB4IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5wYWRkaW5nVG9wMzVweCB7XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xufVxuXG4uZmFkZWQtbGluZSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZDJkMmQyO1xufVxuXG4uZGl2Q2VudGVyIHtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlckljb24ge1xuICBjb2xvcjogIzFlOWVhNTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLkZvcm1JY29uIHtcbiAgY29sb3I6ICMxZTllYTU7XG4gIHdpZHRoOiA1MDtcbiAgaGVpZ2h0OiAyMnB4O1xufVxuXG4udGhlbWVDb2xvciB7XG4gIGNvbG9yOiAjMWU5ZWE1O1xufVxuXG4ucGFkZGluZ1RvcDVweCB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5tYXJnaW5JbmxpbmUge1xuICBtYXJnaW4taW5saW5lOiAxcmVtO1xuICAvKm9rKi9cbn1cblxuLmlzLWludmFsaWQge1xuICBib3JkZXItbGVmdDogc29saWQgNnB4IHJlZDtcbn1cblxuLmJsYWNrQ29sb3Ige1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5ncmVlbkNvbG9yIHtcbiAgY29sb3I6ICMwMDgwMDA7XG59XG5cbi5tYXJnaW5MZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tYXJnaW5MZWZ0MjBQWCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubWFyZ2luUmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbmJvZHkge1xuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgU2Fucy1zZXJpZjtcbn1cblxuLnBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb3B1cCAucG9wdXAtY29udGVudMKgIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucG9wdXAgLnBvcHVwLXRpdGxlIHtcbiAgY29sb3I6ICMzMjMyNWQ7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnBvcHVwIC5wb3B1cC1ib2R5IHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICBjb2xvcjogIzZiN2M5MztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMi4xZW07XG59XG5cbi5wb3B1cCAucG9wdXAtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcbiAgY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAwLjExKSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFlOWVhNSAwJSwgI2ZmYWJmNCA1MCUsICMxZTllYTUgMTAwJSk7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5wb3B1cCAucG9wdXAtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xufVxuXG4ucGFkZGluZ1RvcDQwcHgge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuLmFsaWduTGVmdCB7XG4gIGFsaWduLWNvbnRlbnQ6IGVuZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmJ1dHRvbkV4cGFuZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFyZ2luVG9wMzVweCB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbi5pb25TZWxlY3RTaXplIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4udGV4dC1kYW5nZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5hbmltYXRpb24ge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE1O1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGJveC1zaGFkb3c6IGdvbGQ7XG59XG5cbkBrZXlmcmFtZXMgZXhhbXBsZSB7XG4gIDAlLCA3JSB7XG4gICAgYm94LXNoYWRvdzogIzAwODAwMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMCk7XG4gIH1cbiAgMTUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTVkZWcpO1xuICB9XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDEwZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigtNWRlZyk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTBkZWcpO1xuICB9XG4gIDM1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC01ZGVnKTtcbiAgfVxuICA0MCUsIDEwMCUge1xuICAgIGJveC1zaGFkb3c6ICNlOTFlNjM7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDApO1xuICB9XG59XG4ucGljQ2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uZm9ybS1sYWJlbC1yZXF1aXJlZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiAqXCI7XG4gIGNvbG9yOiAjZmYzMzY2ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pb24taW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBrZXlmcmFtZXMgdHJ1ZUFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4udHJ1ZS1zaWduIHtcbiAgYW5pbWF0aW9uOiB0cnVlQW5pbWF0aW9uIDAuNnMgZWFzZS1pbi1vdXQ7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5mdWxsc2NyZWVuIHtcbiAgLS13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAjY2FyZEZyb250LFxuI2NhcmRCYWNrIHtcbiAgICBhc3BlY3QtcmF0aW86IDY3NS80MzE7XG4gIH1cblxuICAuZm9vdGVyLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICNjYXJkRnJvbnQge1xuICAgIGFzcGVjdC1yYXRpbzogNjc1LzQzMTtcbiAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAjY2FyZEJhY2sge1xuICAgIGFzcGVjdC1yYXRpbzogNjc1LzQzMTtcbiAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZm9vdGVyLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgI2Zvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuLyogY29tcG9uZW50LnNjc3MgKi9cbi5oaWdobGlnaHRlZC1pbnB1dDo6c2VsZWN0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjYjQzMDBmO1xufVxuXG4uc3Bpbm5lci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnNwaW5uZXItbGV0dGVycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5zcGlubmVyLWxldHRlciB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMCA4cHg7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc3Bpbm5lci1sZXR0ZXJzLWFwcGVhciAxcyBpbmZpbml0ZSBlYXNlLWluLW91dCBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgc3Bpbm5lci1sZXR0ZXJzLWFwcGVhciB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgfVxufSIsIi5wYWRkaW5nVG9wMTBweCB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nVG9wMzVweCB7XHJcbiAgcGFkZGluZy10b3A6IDM1cHg7XHJcbn1cclxuXHJcbi5mYWRlZC1saW5lIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMTAsIDIxMCwgMjEwKTtcclxufVxyXG5cclxuLmRpdkNlbnRlciB7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDsgLy9sYXN0IGFkZGluZ1xyXG59XHJcblxyXG4uaGVhZGVySWNvbiB7XHJcbiAgY29sb3I6ICMxZTllYTU7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uRm9ybUljb24ge1xyXG4gIGNvbG9yOiAjMWU5ZWE1O1xyXG4gIHdpZHRoOiA1MDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi50aGVtZUNvbG9yIHtcclxuICBjb2xvcjogIzFlOWVhNTtcclxufVxyXG5cclxuLnBhZGRpbmdUb3A1cHgge1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5tYXJnaW5JbmxpbmUge1xyXG4gIG1hcmdpbi1pbmxpbmU6IDFyZW07IC8qb2sqL1xyXG59XHJcblxyXG4uaXMtaW52YWxpZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDZweCByZWQ7XHJcbn1cclxuXHJcbi5ibGFja0NvbG9yIHtcclxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG59XHJcblxyXG4uZ3JlZW5Db2xvciB7XHJcbiAgY29sb3I6ICMwMDgwMDA7XHJcbn1cclxuXHJcbi5tYXJnaW5MZWZ0IHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLm1hcmdpbkxlZnQyMFBYIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLm1hcmdpblJpZ2h0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8vLz8/XHJcbmJvZHkge1xyXG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIFNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5wb3B1cCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucG9wdXAgLnBvcHVwLWNvbnRlbnTCoCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ucG9wdXAgLnBvcHVwLXRpdGxlIHtcclxuICBjb2xvcjogIzMyMzI1ZDtcclxuICBmb250LXNpemU6IDEuOGVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLnBvcHVwIC5wb3B1cC1ib2R5IHtcclxuICBmb250LXNpemU6IDEuMWVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjZlbTtcclxuICBjb2xvcjogIzZiN2M5MztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDIuMWVtO1xyXG59XHJcbi5wb3B1cCAucG9wdXAtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSg1MCwgNTAsIDkzLCAwLjExKSwgMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gcmlnaHQsXHJcbiAgICAjMWU5ZWE1IDAlLFxyXG4gICAgI2ZmYWJmNCA1MCUsXHJcbiAgICAjMWU5ZWE1IDEwMCVcclxuICApO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLnBvcHVwIC5wb3B1cC1idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZGRpbmdUb3A0MHB4IHtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuLmFsaWduTGVmdCB7XHJcbiAgYWxpZ24tY29udGVudDogZW5kO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5idXR0b25FeHBhbmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFyZ2luVG9wMzVweCB7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxufVxyXG5cclxuLmlvblNlbGVjdFNpemUge1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRleHQtZGFuZ2VyIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmFuaW1hdGlvbiB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuXHJcbiAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0cztcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxNTtcclxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgYm94LXNoYWRvdzogZ29sZDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBleGFtcGxlIHtcclxuICAwJSxcclxuICA3JSB7XHJcbiAgICBib3gtc2hhZG93OiAjMDA4MDAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDApO1xyXG4gIH1cclxuICAxNSUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC01ZGVnKTtcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWigxMGRlZyk7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTVkZWcpO1xyXG4gIH1cclxuICAzMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDEwZGVnKTtcclxuICB9XHJcbiAgMzUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWigtNWRlZyk7XHJcbiAgfVxyXG4gIDQwJSxcclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6ICNlOTFlNjM7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMCk7XHJcbiAgfVxyXG59XHJcblxyXG4ucGljQ2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgKlwiO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW9uLWlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50IDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdHJ1ZUFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4udHJ1ZS1zaWduIHtcclxuICBhbmltYXRpb246IHRydWVBbmltYXRpb24gMC42cyBlYXNlLWluLW91dDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZnVsbHNjcmVlbiB7XHJcbiAgLS13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIC0taGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcclxuICAjY2FyZEZyb250LFxyXG4gICNjYXJkQmFjayB7XHJcbiAgICBhc3BlY3QtcmF0aW86IDY3NS80MzE7XHJcbiAgfVxyXG4gIC5mb290ZXItYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICNjYXJkRnJvbnQge1xyXG4gICAgYXNwZWN0LXJhdGlvOiA2NzUvNDMxO1xyXG4gICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAjY2FyZEJhY2sge1xyXG4gICAgYXNwZWN0LXJhdGlvOiA2NzUvNDMxO1xyXG4gICAgd2lkdGg6IDQ1JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZm9vdGVyLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICNmb290ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuXHJcbi8qIGNvbXBvbmVudC5zY3NzICovXHJcbi5oaWdobGlnaHRlZC1pbnB1dDo6c2VsZWN0aW9uIHtcclxuICAvL2JhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogI2I0MzAwZjtcclxufVxyXG5cclxuLnNwaW5uZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uc3Bpbm5lci1sZXR0ZXJzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5zcGlubmVyLWxldHRlciB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbjogMCA4cHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICBhbmltYXRpb246IHNwaW5uZXItbGV0dGVycy1hcHBlYXIgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYWx0ZXJuYXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW5uZXItbGV0dGVycy1hcHBlYXIge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 97836:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/registry/client-registration/client-registration.page.html?ngResource ***!
  \***************************************************************************************************/
/***/ (function(module) {

module.exports = "<ion-toolbar>\n  <ion-title>\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-icon name=\"person-add-sharp\" size=\"large\" class=\"ion-justify-content-center headerIcon\"></ion-icon>\n    </ion-row>\n    <ion-row class=\"ion-justify-content-center themeColor\">\n      <b>طلب تسجيل عميل جديد</b>\n    </ion-row>\n  </ion-title>\n</ion-toolbar>\n<app-loader [isVisible]=\"showLoader\"></app-loader>\n<ion-row class=\"ion-justify-content-center card ion-padding\">\n  <aw-wizard class=\"paddingTop5px\" #wizardForm [defaultStepIndex]=\"0\" [navBarLayout]=\"'large-filled'\"\n    [navBarDirection]=\"'left-right'\" [navBarLocation]=\"'top'\" [awNavigationMode] navigateBackward=\"deny\"\n    navigateForward=\"deny\" [disableNavigationBar]=\"true\">\n    <!----------------------------------- step 0 --------------------------------->\n    <aw-wizard-step>\n      <ng-template awWizardStepSymbol>\n        <ion-icon name=\"call\"></ion-icon>\n      </ng-template>\n\n      <form [formGroup]=\"validationMobileForm\">\n\n\n\n        <!-- <div class=\"spinner-container\"> -->\n        <div class=\"spinner-letters\">\n          <div class=\"spinner-letter\">G</div>\n          <div class=\"spinner-letter\">E</div>\n        </div>\n        <!-- </div> -->\n\n\n        <div class=\"divCenter\">\n          <h4><b>رقم الموبايل</b></h4>\n          <div class=\"faded-line\"></div>\n        </div>\n        <br />\n\n        <ion-row>\n          <ion-col size=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\" class=\"alignLeft\">\n\n            <ion-icon name=\"call\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n          </ion-col>\n\n          <ion-col size=\"8\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\">\n            <ion-label for=\"mobileNumber\" class=\"form-label form-label-required input-glow\"><b>رقم الموبايل -\n                اساسي</b></ion-label>\n            <ion-input maxLength=\"11\" minLength=\"11\" type=\"tel\" id=\"mobileNumber\" formControlName=\"mobileNumber\"\n              placeholder=\"   رقم الموبايل\" [disabled]=\"mobileInputIsDisabled\" [autofocus]=\"true\">\n            </ion-input>\n            <div *ngIf=\"isMobileFormSubmitted && (validationMobileForm.controls['mobileNumber'].hasError('required'))\"\n              class=\"text-danger\" role=\"alert\">\n              يجب ادخال رقم الموبايل\n            </div>\n            <div *ngIf=\"isMobileFormSubmitted && (validationMobileForm.controls['mobileNumber'].hasError('pattern'))\"\n              class=\"text-danger\" role=\"alert\">\n              رقم الموبايل غير صحيح\n            </div>\n            <div *ngIf=\"isMobileFormSubmitted && (validationMobileForm.controls['mobileNumber'].hasError('whitespace'))\"\n              class=\"text-danger\" role=\"alert\">\n              يجب ادخال ارقام فقط\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <div [hidden]=\"SMSdivHidden\">\n          <ion-row>\n            <ion-col size=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\" class=\"alignLeft\">\n              <ion-icon name=\"chatbox-sharp\" size=\"large\" class=\"paddingTop10px FormIcon\"></ion-icon>\n            </ion-col>\n\n            <ion-col size=\"8\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\">\n              <ion-button (click)=\"checkMobileNumber()\" size=\"deafult\" shape=\"sharp\" [disabled]=\"isOtpSendDisabled\">\n                ارسال رمز التحقق\n              </ion-button>\n\n              <ion-modal cssClass=\"fullscreen\" #otpModal trigger=\"openOtp-modal\" [isOpen]=\"isOtpModalOpen\"\n                backdropDismiss=\"false\">\n                <ng-template>\n                  <ion-header>\n                    <ion-toolbar>\n                      <ion-title id=\"modalTitle\" class=\"picCenter\">\n                        <h4><b>كتابة رمزالتحقق OTP</b></h4>\n                      </ion-title>\n                    </ion-toolbar>\n                  </ion-header>\n                  <ion-content>\n\n                    <div class=\"card\">\n                      <div class=\"card-body divCenter\">\n                        <br />\n\n                        <div class=\"row divCenter\">\n                          <div class=\"col-2 col-md-2\">\n                            <div class=\"form-group\">\n                              <ion-input #Field6 formControlName=\"otpField6\" [clearOnEdit]=\"true\" minLength=\"1\"\n                                maxLength=\"1\" align=\"center\" (ionChange)=\"meargeFieldsAndVerifyOtpFunctions()\"\n                                [disabled]=\"OTPFieldsIsDisabled\" id=\"otpDigit\" type=\"tel\">\n                              </ion-input>\n                            </div>\n                          </div>\n\n                          <div class=\"col-2 col-md-2\">\n                            <div class=\"form-group\">\n                              <ion-input #Field5 formControlName=\"otpField5\" [clearOnEdit]=\"true\" minLength=\"1\"\n                                maxLength=\"1\" align=\"center\" (keyup)=\"gotoNextField(Field6)\"\n                                (ionChange)=\"meargeFieldsAndVerifyOtpFunctions()\" [disabled]=\"OTPFieldsIsDisabled\"\n                                id=\"otpDigit\" type=\"tel\"></ion-input>\n                            </div>\n                          </div>\n\n                          <div class=\"col-2 col-md-2\">\n                            <div class=\"form-group\">\n                              <ion-input #Field4 formControlName=\"otpField4\" [clearOnEdit]=\"true\" minLength=\"1\"\n                                maxLength=\"1\" align=\"center\" (keyup)=\"gotoNextField(Field5)\"\n                                (ionChange)=\"meargeFieldsAndVerifyOtpFunctions()\" [disabled]=\"OTPFieldsIsDisabled\"\n                                id=\"otpDigit\" type=\"tel\"></ion-input>\n                            </div>\n                          </div>\n\n                          <div class=\"col-2 col-md-2\">\n                            <div class=\"form-group\">\n                              <ion-input #Field3 formControlName=\"otpField3\" [clearOnEdit]=\"true\" minLength=\"1\"\n                                maxLength=\"1\" align=\"center\" (keyup)=\"gotoNextField(Field4)\"\n                                (ionChange)=\"meargeFieldsAndVerifyOtpFunctions()\" [disabled]=\"OTPFieldsIsDisabled\"\n                                id=\"otpDigit\" type=\"tel\"></ion-input>\n                            </div>\n                          </div>\n\n                          <div class=\"col-2 col-md-2\">\n                            <div class=\"form-group\">\n                              <ion-input #Field2 formControlName=\"otpField2\" [clearOnEdit]=\"true\" minLength=\"1\"\n                                maxLength=\"1\" align=\"center\" (keyup)=\"gotoNextField(Field3)\"\n                                (ionChange)=\"meargeFieldsAndVerifyOtpFunctions()\" [disabled]=\"OTPFieldsIsDisabled\"\n                                id=\"otpDigit\" type=\"tel\"></ion-input>\n                            </div>\n                          </div>\n\n                          <div class=\"col-2 col-md-2\">\n                            <div class=\"form-group\">\n                              <ion-input #Field1 formControlName=\"otpField1\" [clearOnEdit]=\"true\" minLength=\"1\"\n                                maxLength=\"1\" align=\"center\" (keyup)=\"gotoNextField(Field2)\"\n                                (ionChange)=\"meargeFieldsAndVerifyOtpFunctions()\" [disabled]=\"OTPFieldsIsDisabled\"\n                                id=\"otpDigit\" type=\"tel\"></ion-input>\n                            </div>\n                          </div>\n                          <!-- <div\n                            *ngIf=\"isMobileFormSubmitted && (validationMobileForm.controls['checkOTP_no'].hasError('required'))\"\n                            class=\"text-danger\" role=\"alert\">\n                            يجب كتابة رمز التحقق للاستكمال\n                          </div> -->\n\n                        </div>\n\n                      </div>\n\n                      <ion-title id=\"modalTitle\" class=\"picCenter\">\n                        <ion-icon name=\"close\" class=\"text-danger\" size=\"large\"\n                          [hidden]=\"OTPisNotCorrectHidden\"></ion-icon>\n                        <ion-icon name=\"checkmark-done\" class=\"greenColor true-sign\" size=\"large\"\n                          [hidden]=\"OTPisCorrectHidden\"></ion-icon>\n                      </ion-title>\n                      <ion-title id=\"modalTitle\" class=\"picCenter\">\n                        <ion-button (click)=\"checkMobileNumber()\" size=\"deafult\" shape=\"sharp\"\n                          [disabled]=\"isOtpResendDisabled\" [hidden]=\"OtpResendButton\">\n                          اعادة ارسال رمز التحقق\n                        </ion-button>\n\n                        <ion-label [hidden]=\"timerIsHidden\" class=\"paddingTop10px marginRight form-label\"><b>{{ time |\n                            async }}\n                          </b></ion-label>\n\n\n\n                        <div class=\"form-group\">\n                          <ion-row class=\"divCenter\" [hidden]=\"ResendOTPisHidden\">\n                            <ion-col size=\"auto\">\n                              <ion-icon name=\"checkmark-circle\" class=\"greenColor FormIcon marginLeft marginRight\"\n                                size=\"small\"></ion-icon>\n                            </ion-col>\n                            <ion-col size=\"auto\">\n                              <ion-label class=\"greenColor\"><b>\n                                  <h6>\n                                    تم ارسال رمز التحقق لك مرة اخري\n                                  </h6>\n                                </b></ion-label>\n                            </ion-col>\n                          </ion-row>\n                        </div>\n                      </ion-title>\n                    </div>\n                  </ion-content>\n                </ng-template>\n              </ion-modal>\n            </ion-col>\n\n            <ion-col size=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\" class=\"\">\n              <ion-button (click)=\"infoAlertMobileOtp()\" fill=\"clear\" class=\"clearButton\">\n                <ion-icon class=\"\" name=\"help-circle-outline\" slot=\"end\" size=\"small\" class=\"FormIcon\">\n                </ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n\n        <ion-row>\n          <ion-col size=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\" class=\"alignLeft\">\n            <ion-icon name=\"call\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n          </ion-col>\n\n          <ion-col size=\"8\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\">\n            <ion-label for=\"mobileNumber\" class=\"form-label\"><b>رقم موبايل - بديل</b></ion-label>\n            <ion-input maxLength=\"11\" minLength=\"11\" type=\"tel\" id=\"mobileNumber2\" formControlName=\"mobileNumber2\"\n              placeholder=\"   رقم موبايل بديل\">\n            </ion-input>\n            <div *ngIf=\"isMobileFormSubmitted && (validationMobileForm.controls['mobileNumber2'].hasError?.('pattern'))\"\n              class=\"text-danger\" role=\"alert\">\n              يجب ادخال ارقام فقط\n            </div>\n          </ion-col>\n        </ion-row>\n        <div class=\"d-flex justify-content-center mt-2\">\n          <ion-button (click)=\"saveMobileNumber()\"> حفظ واستكمال</ion-button>\n        </div>\n      </form>\n    </aw-wizard-step>\n    <!----------------------------------- step 1 --------------------------------->\n    <aw-wizard-step>\n      <ng-template awWizardStepSymbol>\n        <ion-icon name=\"search\"></ion-icon>\n      </ng-template>\n\n      <form [formGroup]=\"nationIdCheckForm\">\n        <ion-row>\n          <ion-col size=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\" class=\"alignLeft\">\n          </ion-col>\n          <ion-col size=\"8\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\" *ngIf=\"ocrAllowed\">\n            <ion-button id=\"open-modal\" type=\"submit\" class=\"buttonExpand\"><ion-icon class=\"ml-3\"\n                name=\"camera\"></ion-icon>تصوير بطاقة الرقم القومي</ion-button>\n            <ion-modal trigger=\"open-modal\" #ocrModal id=\"ocrModal\" (willDismiss)=\"onWillDismiss($event)\">\n              <ng-template>\n                <ion-header>\n                  <ion-toolbar>\n                    <ion-title id=\"modalTitle\" class=\"picCenter\">تصوير البطاقة</ion-title>\n                  </ion-toolbar>\n                </ion-header>\n                <ion-content>\n                  <app-loader [isVisible]=\"showLoader\"></app-loader>\n                  <div *ngIf=\"IsIdResultEmpty()\">\n                    <div class=\"card-deck mx-2\">\n                      <div class=\"card\">\n                        <div *ngIf=\"CheckImageFound(imageSrcFront)\" class=\"card-img-top\">\n                          <img id=\"imgFront\" [src]=\"imageSrcFront\" />\n                        </div>\n                        <div class=\"card-body mb-0 pb-0\">\n                          <div class=\"card-title\">\n                            <div class=\"row\">\n                              <div class=\"col-8 text-center align-self-center\">\n                                <div *ngIf=\"CheckImageFound(imageSrcFront)\">\n                                  الوجه الامامى للبطاقة\n                                </div>\n                                <div *ngIf=\"!CheckImageFound(imageSrcFront)\">\n                                  ادخل الوجه الامامى للبطاقة\n                                </div>\n                              </div>\n                              <div class=\"col-4\">\n                                <ion-button (click)=\"openCameraModal(true)\">\n                                  <ion-icon name=\"camera-outline\"></ion-icon>\n                                </ion-button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class=\"card\">\n                        <div *ngIf=\"CheckImageFound(imageSrcBack)\" class=\"card-img-top\">\n                          <img id=\"imgBack\" [src]=\"imageSrcBack\" />\n                        </div>\n                        <div class=\"card-body mb-0 pb-0\">\n                          <div class=\"card-title\">\n                            <div class=\"row\">\n                              <div class=\"col-8 text-center align-self-center\">\n                                <div *ngIf=\"CheckImageFound(imageSrcBack)\">\n                                  الوجه الخلفي للبطاقة\n                                </div>\n                                <div *ngIf=\"!CheckImageFound(imageSrcBack)\">\n                                  ادخل الوجه الخلفي للبطاقة\n                                </div>\n                              </div>\n                              <div>\n                                <div class=\"col-4\">\n                                  <ion-button (click)=\"openCameraModal(false)\">\n                                    <ion-icon name=\"camera-outline\"></ion-icon>\n                                  </ion-button>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div *ngIf=\"!IsIdResultEmpty()\">\n                    <div class=\"card\">\n                      <div class=\"card-body\">\n                        <div class=\"row\">\n                          <div class=\"col-8\">\n                            <div class=\"col text-right\">\n                              <div class=\"row-3\">{{idRes.firstName}}</div>\n                              <div class=\"row-3\">{{idRes.familyName}}</div>\n                              <div class=\"row-3\">{{idRes.address}}</div>\n                              <div class=\"row-3\">{{idRes.region}}</div>\n                            </div>\n                          </div>\n                          <div class=\"col-4\">\n                            <img id=\"imgFace\" [src]=\"imageSrcFace\" *ngIf=\"CheckImageFound(imageSrcFace)\" />\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"card-footer row\">\n                        <div class=\"col-6\">{{idRes.nationalId}}</div>\n                        <div class=\"text-left col-6\">{{idRes.documentId}}</div>\n                      </div>\n                    </div>\n                    <div class=\"card mt-2\">\n                      <div class=\"card-header row\">\n                        <div class=\"col-8\">{{idRes.nationalId}}</div>\n                        <div class=\"col-4 text-left\">{{idRes.issueDate}}</div>\n                      </div>\n                      <div class=\"card-body\">\n                        <div class=\"col\">\n                          <div class=\"row-6 pb-3\">{{idRes.occupation}}</div>\n                          <div class=\"row-6\">\n                            <div class=\"row\">\n                              <div class=\"col-4\">{{idRes.gender}}</div>\n                              <div class=\"col-4\">{{idRes.religion}}</div>\n                              <div class=\"col-4\">{{idRes.maritalStatus}}</div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"card-footer\">\n                        {{\" البطاقة سارية حتى \" + idRes.expiryDate}}\n                      </div>\n                    </div>\n                  </div>\n                </ion-content>\n                <ion-footer>\n                  <ion-toolbar>\n                    <div class=\"col\">\n                      <ion-button (click)=\"confirm()\" *ngIf=\"!IsIdResultEmpty()\" class=\"w-100 row-6\">\n                        <ion-icon name=\"checkmark-outline\"></ion-icon>\n                      </ion-button>\n                      <ion-button (click)=\"DetectIDImages()\"\n                        [disabled]=\"!CheckImageFound(imageSrcBack) || !CheckImageFound(imageSrcFront)\"\n                        *ngIf=\"IsIdResultEmpty()\" class=\"w-100 row-6\">\n                        <ion-icon name=\"search-outline\"></ion-icon>\n                      </ion-button>\n                      <ion-button (click)=\"cancel()\" class=\"w-100 row-6\" color=\"danger\" *ngIf=\"IsIdResultEmpty()\">\n                        <ion-icon name=\"close-outline\"></ion-icon>\n                      </ion-button>\n                      <ion-button (click)=\"EmptyIdResult()\" class=\"w-100 row-6\" *ngIf=\"!IsIdResultEmpty()\">\n                        <ion-icon name=\"refresh-outline\"></ion-icon>\n                      </ion-button>\n                    </div>\n                  </ion-toolbar>\n                </ion-footer>\n              </ng-template>\n            </ion-modal>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\" class=\"alignLeft\">\n\n            <ion-icon name=\"card\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n          </ion-col>\n\n          <ion-col size=\"8\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\">\n            <ion-label class=\"form-label form-label-required\"><b>ادخل الرقم\n                القومي</b></ion-label>\n            <ion-input type=\"tel\" id=\"nationID\" maxLength=\"14\" placeholder=\"   الرقم القومي\" formControlName=\"nationID\">\n            </ion-input>\n\n\n            <!-- <span [ngClass]=\"{ 'highlighted': this.nationIdCheckForm.value.nationID.includes('1') }\">\n              {{  this.nationIdCheckForm.value.nationID.replace('1', '') }}\n            </span> -->\n            <div *ngIf=\"isNationIdCheckForm && (nationIdCheckForm.controls['nationID'].hasError('required'))\"\n              class=\"text-danger\" role=\"alert\">\n              يجب ادخال الرقم القومي\n            </div>\n            <div *ngIf=\"isNationIdCheckForm && (nationIdCheckForm.controls['nationID'].hasError('pattern'))\"\n              class=\"text-danger\" role=\"alert\">\n              الرقم القومي غير صحيح و يجب ان يتكون ١٤ رقم!\n            </div>\n            <div *ngIf=\"isNationIdCheckForm && (nationIdCheckForm.controls['nationID'].hasError('zerosAtDay'))\"\n              class=\"text-danger\" role=\"alert\">\n              تاريخ اليوم/شهر/سنة لا يمكن ان يكون صفر\n            </div>\n            <!-- <div *ngIf=\"isNationIdCheckForm && (nationIdCheckForm.controls['nationID'].hasError('dayMonthLimit'))\"\n              class=\"text-danger\" role=\"alert\">\n              برجاء التحقق من تاريخ اليوم/شهر\n            </div> -->\n\n\n          </ion-col>\n        </ion-row>\n        <!-- <ion-button (click)=\"nationIDdayMonthLimit()\"></ion-button> -->\n        <ion-row>\n          <ion-col size=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\" class=\"alignLeft\">\n          </ion-col>\n          <ion-col size=\"8\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\">\n            <ion-button (click)=\"nationIdCheck()\" class=\"buttonExpand\"><ion-icon class=\"ml-3\" name=\"search\"></ion-icon>\n              البحث في بيانات العملاء\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n        <div class=\"d-flex justify-content-center mt-2\">\n          <div class=\"popup\">\n            <ion-button id=\"nextButt\" class=\"popup-button clearButton\" (click)=\"saveNationID()\"\n              [hidden]=\"step1nextButtHide\">\n              استكمال</ion-button>\n          </div>\n        </div>\n      </form>\n    </aw-wizard-step>\n    <!----------------------------------- step 2 --------------------------------->\n    <aw-wizard-step>\n      <ng-template awWizardStepSymbol>\n\n        <ion-icon name=\"card\"></ion-icon>\n      </ng-template>\n      <form [formGroup]=\"validationPersonalInfoForm\">\n        <div class=\"card-body\">\n          <div class=\"divCenter\">\n            <h4><b>البيانات الشخصية</b></h4>\n            <div class=\"faded-line\"></div>\n          </div>\n          <br />\n          <div class=\"row \">\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"person-circle-outline\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-4\">\n              <div class=\"form-group\">\n\n                <ion-label class=\"form-label form-label-required\"><b>الاسم الاول</b></ion-label>\n\n                <ion-input type=\"text\" id=\"firstName\" formControlName=\"firstName\" autocapitalize=\"words\"\n                  placeholder=\"   الاسم الاول\">\n                </ion-input>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['firstName'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال الاسم الاول\n                </div>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['firstName'].hasError('whitespace'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال حروف فقط\n                </div>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['firstName'].hasError('pattern'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال حروف فقط\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"person-circle-outline\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\"><b>الاسم الثاني الي الاخير</b></ion-label>\n                <ion-input type=\"text\" id=\"restOfName\" formControlName=\"restOfName\"\n                  placeholder=\"   الاسم الثاني الي الاخير\">\n                </ion-input>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['restOfName'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال الاسم الثاني الي الاخير\n                </div>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['restOfName'].hasError('whitespace'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال حروف فقط\n                </div>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['restOfName'].hasError('pattern'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال حروف فقط\n                </div>\n\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"row \">\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"home-outline\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\">\n                  <b>عنوان البطاقة</b>\n\n                </ion-label>\n                <ion-input (ionChange)=\"address1Mearge()\" type=\"text\" id=\"address1part1\" formControlName=\"address1part1\"\n                  placeholder=\"عنوان البطاقة\">\n                </ion-input>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['address1part1'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال عنوان البطاقة\n                </div>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['address1part1'].hasError('whitespace'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال حروف وارقام فقط\n                </div>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['address1part1'].hasError('pattern'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال حروف وارقام فقط\n                </div>\n\n\n              </div>\n            </div>\n\n\n\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"home-outline\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-4\">\n              <div class=\"form-group\">\n\n\n                <ion-label class=\"form-label form-label-required\">\n\n                  <b> (المنطقة + المحافظة)</b>\n                </ion-label>\n                <ion-input type=\"text\" (ionChange)=\"address1Mearge()\" id=\"address1part2\" formControlName=\"address1part2\"\n                  placeholder=\"   (المنطقة + المحافظة)\">\n                </ion-input>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['address1part2'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال عنوان البطاقة (المنطقة + المحافظة)\n                </div>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['address1part2'].hasError('whitespace'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال حروف وارقام فقط\n                </div>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['address1part2'].hasError('pattern'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال حروف وارقام فقط\n                </div>\n\n              </div>\n            </div>\n\n\n\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-10 col-md-3\">\n\n            </div>\n            <div class=\"col-10 col-md-4\">\n              <div class=\"form-group\">\n                <ion-button id=\"open-HomeMapsModal\" type=\"submit\" class=\" marginTop35px\">\n\n                  <ion-icon class=\"ml-3\" name=\"location\"></ion-icon>\n                  تحديد مكان المنزل على الخريطة\n                </ion-button>\n\n                <ion-modal #HomeMapsModal trigger=\"open-HomeMapsModal\" class=\"h-auto image-modal\"\n                  [backdropDismiss]=\"true\" [keyboardClose]=\"true\">\n                  <ng-template>\n                    <ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n                      <ion-button (click)=\"HomeMapsModal.dismiss()\" color=\"danger\" class=\"small\">\n                        <ion-icon name=\"close-sharp\"></ion-icon>\n                      </ion-button>\n                      <div>\n                        <ion-row>\n                          <ion-label class=\"form-label\">العنوان الذي قمت بأختيارة :</ion-label>\n                        </ion-row>\n                        <ion-row>\n                          <ion-label class=\"form-label\">{{address}}</ion-label>\n                        </ion-row>\n                      </div>\n\n                      <google-map #myGoogleMap height=\"65%\" width=\"100%\" [zoom]=\"zoom\" [center]=\"center\"\n                        [options]=\"options\" (mapClick)=\"eventHandler($event,'mapClick')\"\n                        (mapDblclick)=\"eventHandler($event,'mapDblclick')\" (mapDrag)=\"eventHandler($event,'mapDrag')\"\n                        (mapDragend)=\"eventHandler($event,'mapDragend')\"\n                        (mapRightclick)=\"eventHandler($event,'mapRightclick')\"\n                        (positionChanged)=\"eventHandler($event,'marker_positionChanged')\"\n                        (zoomChanged)=\"eventHandler($event,'zoomChanged')\">\n\n\n\n                        <map-marker #markerElem=\"mapMarker\" *ngFor=\"let marker of markers\" [position]=\"marker.position\"\n                          [label]=\"marker.label\" [title]=\"marker.title\" [options]=\"marker.options\"\n                          (mapDrag)=\"eventHandler($event,'mapDragMarker')\"\n                          (mapDragend)=\"eventHandler($event,'mapDragend')\">\n                        </map-marker>\n\n                        <ion-button size=\"small\" (click)=\"GetGeolocation()\">\n                          <ion-icon name=\"locate-sharp\"></ion-icon>\n                          تعيين موقعك الحالي\n                        </ion-button>\n\n                      </google-map>\n                    </ion-content>\n                    <div style=\"position: fixed;bottom: 0;width: 100%;background-color: var(--card-bg);\">\n                    </div>\n\n                  </ng-template>\n                </ion-modal>\n              </div>\n            </div>\n\n          </div>\n\n          <ion-row [hidden]=\"true\">\n            <ion-col size=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\" class=\"alignLeft\">\n              <ion-icon name=\"home\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n            </ion-col>\n            <ion-col size=\"8\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\">\n              <ion-label class=\"form-label\"><b>العنوان بالكامل</b></ion-label>\n              <ion-input readOnly value=\"{{address1}}\" (ionChange)=\"address1Mearge()\" formControlName=\"address1\">\n              </ion-input>\n            </ion-col>\n          </ion-row>\n\n\n\n          <div class=\"row\">\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"card\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\">\n                  <b>الرقم القومي</b>\n                </ion-label>\n                <ion-input readOnly value=\"{{nationIdCheckForm.controls.nationID.value}}\" type=\"tel\" maxlength=\"14\"\n                  id=\"nationID\" formControlName=\"nationID\" placeholder=\"   الرقم القومي\">\n                </ion-input>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['nationID'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال الرقم القومي\n                </div>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['nationID'].hasError('whitespace'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  الرقم القومي يحتوي على ارقام فقط\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"calendar\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\">\n                  <b>تاريخ الميلاد</b>\n                </ion-label>\n                <ngx-datepicker [parentForm]=\"validationPersonalInfoForm\"\n                  parentFormControllerName=\"birthDate\"></ngx-datepicker>\n\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['birthDate'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال تاريخ الميلاد\n                </div>\n              </div>\n            </div>\n\n          </div>\n\n\n          <div class=\"row \">\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"code-working\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\">\n                  <b>سيريال بطاقة الرقم القومي</b>\n                </ion-label>\n                <ion-input type=\"text\" id=\"nationIDserial\" formControlName=\"nationIDserial\"\n                  placeholder=\"   سيريال بطاقة الرقم القومي\"></ion-input>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['nationIDserial'].hasError('pattern'))\"\n                  class=\"text-danger \" role=\"alert\">\n                  يجب ادخال ارقام وحروف انجليزية فقط\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"calendar\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-4\">\n              <div class=\"form-group\">\n\n                <ion-label class=\"form-label form-label-required\">\n                  <b>تاريخ اصدار البطاقة</b>\n                </ion-label>\n\n\n                <ngx-datepicker [parentForm]=\"validationPersonalInfoForm\"\n                  parentFormControllerName=\"nationIDissueDate\"></ngx-datepicker>\n\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['nationIDissueDate'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال تاريخ اصدار البطاقة\n                </div>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['nationIDissueDate'].hasError('DateIsGrater'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  تاريخ اصدار البطاقة لا يمكن ان يكون بعد اليوم الحالي\n                </div>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"row \">\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n\n                <ion-icon name=\"school\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\">\n                  <b>المستوي التعليمي</b>\n                </ion-label>\n\n                <ion-select class=\"ionSelectSize\" interface=\"popover\" placeholder=\"اختيار\"\n                  formControlName=\"educationLevel\">\n                  <ion-select-option *ngFor=\"let Level of EduLevelObjects\" [value]=\"Level.edu_level_code\">\n                    {{Level.edu_level_name}}\n                  </ion-select-option>\n                </ion-select>\n\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['educationLevel'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب اختيار المستوي التعليمي\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n\n                <ion-icon name=\"people\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\">\n                  <b>النوع</b>\n                </ion-label>\n\n                <ion-radio-group value=\"custom-checked\" formControlName=\"Gender\">\n                  <ion-item lines=\"none\">\n                    ذكر\n                    <ion-radio value=\"1\" aria-label=\"Custom checkbox\" class=\"marginInline marginLeft20PX\"></ion-radio>\n                    انثي\n                    <ion-radio value=\"2\" aria-label=\"Custom checkbox that is checked\" class=\"marginLeft\"></ion-radio>\n                  </ion-item>\n                </ion-radio-group>\n\n\n\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['Gender'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب اختيار النوع\n                </div>\n\n              </div>\n            </div>\n\n\n          </div>\n\n\n          <div class=\"row \">\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"people-circle\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\">\n                  <b>الحالة الاجتماعية</b>\n                </ion-label>\n\n                <ion-select class=\"ionSelectSize\" interface=\"popover\" placeholder=\"اختيار\"\n                  formControlName=\"maritalStatus\">\n                  <ion-select-option *ngFor=\"let Status of MartialStatusObjects\" [value]=\"Status.ref_code\">\n                    {{Status.ref_desc}}\n                  </ion-select-option>\n                </ion-select>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['maritalStatus'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب اختيار الحالة الاجتماعية\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n\n                <ion-icon name=\"code-working\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-4\">\n              <div class=\"form-group\">\n\n                <ion-label class=\"form-label\">\n                  <b>رقم كارت الائتمان / رقم IBAN</b>\n                </ion-label>\n                <ion-input type=\"tel\" id=\"cridetCardNo\" formControlName=\"cridetCardNo\"\n                  placeholder=\"   رقم كارت الائتمان / رقم IBAN\"></ion-input>\n\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['cridetCardNo'].hasError('pattern'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال ارقام وحروف انجليزية فقط\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"home\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\">\n                  <b>العنوان الفعلي</b>\n                </ion-label>\n                <ion-input formControlName=\"address2\" type=\"text\" id=\"address2\" placeholder=\"العنوان الفعلي\"\n                  [disabled]=\"add2inputDisabled\">\n                </ion-input>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['address2'].hasError('pattern'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال حروف وارقام فقط\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n\n                <ion-icon name=\"home\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\">\n                  <b>العنوان البديل</b>\n                </ion-label>\n                <ion-input type=\"text\" id=\"address3\" formControlName=\"address3\" placeholder=\"العنوان البديل\"\n                  [disabled]=\"add3inputDisabled\">\n                </ion-input>\n                <div\n                  *ngIf=\"isPersonalInfoFormSubmitted && (validationPersonalInfoForm.controls['address3'].hasError('pattern'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال حروف وارقام فقط\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"d-flex justify-content-center mt-2\">\n          <ion-button (click)=\"saveIdInfo()\">حفظ واستكمال</ion-button>\n        </div>\n      </form>\n    </aw-wizard-step>\n    <!----------------------------------- step 3 --------------------------------->\n    <aw-wizard-step>\n      <ng-template awWizardStepSymbol>\n        <ion-icon name=\"briefcase\"></ion-icon>\n      </ng-template>\n      <form [formGroup]=\"validationBusinessInfoForm\">\n        <div class=\"card-body\">\n          <div class=\"divCenter\">\n            <h4><b>بيانات العمل</b></h4>\n            <div class=\"faded-line\"></div>\n          </div>\n          <br />\n\n\n          <div class=\"row \">\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n\n\n              </div>\n            </div>\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"location\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-3\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\"><b>المحافظة</b></ion-label>\n\n                <ion-select class=\"ionSelectSize\" interface=\"popover\" placeholder=\"اختار المحافظة\"\n                  formControlName=\"GovCode\" (ionChange)=\"ChangeGov()\">\n                  <ion-select-option *ngFor=\"let Gov of GetGoveNameObjects\" [value]=\"Gov.gov_code\">\n                    {{Gov.gov_name}}\n                  </ion-select-option>\n                </ion-select>\n\n                <div\n                  *ngIf=\"isBusinessInfoFormSubmitted && (validationBusinessInfoForm.controls['GovCode'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب اختيار المحافظة\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n\n                <ion-icon name=\"location\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-3\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\"><b>القسم / المركز</b></ion-label>\n\n                <ion-select class=\"ionSelectSize\" interface=\"popover\" placeholder=\"اختار المركز\"\n                  formControlName=\"DistCode\" (ionChange)=\"ChangeDist()\" [disabled]=\"DistIsDisabled\">\n                  <ion-select-option *ngFor=\"let Dist of GetDistNamesObjects\" [value]=\"Dist.dist_code\">\n                    {{Dist.dist_name}}\n                  </ion-select-option>\n                </ion-select>\n\n                <div\n                  *ngIf=\"isBusinessInfoFormSubmitted && (validationBusinessInfoForm.controls['DistCode'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب اختيار المركز\n                </div>\n\n\n              </div>\n            </div>\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"location\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-3\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\"><b> المنطقة / القرية</b></ion-label>\n\n                <ion-select class=\"ionSelectSize\" interface=\"popover\" placeholder=\"اختار القرية\"\n                  formControlName=\"VillCode\" [disabled]=\"VillIsDisabled\">\n                  <ion-select-option *ngFor=\"let Vill of GetVillNameObjects\" [value]=\"Vill.vill_code\">\n                    {{Vill.vill_name}}\n                  </ion-select-option>\n                </ion-select>\n\n                <div\n                  *ngIf=\"isBusinessInfoFormSubmitted && (validationBusinessInfoForm.controls['VillCode'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب اختيار القرية\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row \">\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n\n                <ion-icon name=\"cog\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-3\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\"><b>اختيار الفرع</b></ion-label>\n\n                <ion-select class=\"ionSelectSize\" interface=\"popover\" placeholder=\"اختيار\" formControlName=\"branchCode\"\n                  [(ngModel)]=\"selectBranch\">\n                  <ion-select-option *ngFor=\"let branch of getAllBranchesObjects\" [value]=\"branch.branch_code\">\n                    {{branch.branch_name}}\n                  </ion-select-option>\n                </ion-select>\n\n                <div\n                  *ngIf=\"isBusinessInfoFormSubmitted && (validationBusinessInfoForm.controls['branchCode'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب اختيار الفرع\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n\n                <ion-icon name=\"cog\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-3\">\n              <div class=\"form-group\">\n\n                <ion-label class=\"form-label form-label-required\"><b>قطاع العمل</b></ion-label>\n\n                <ion-select class=\"ionSelectSize\" interface=\"popover\" placeholder=\"اختار قطاع العمل\"\n                  (ionChange)=\"ChangeBusDiv1()\" formControlName=\"busSectorCode\">\n                  <ion-select-option *ngFor=\"let Division of GetBusinessDivisionsObjects\"\n                    [value]=\"Division.bs_div_1_code\">\n                    {{Division.bs_div_1_name}}\n                  </ion-select-option>\n                </ion-select>\n\n                <div\n                  *ngIf=\"isBusinessInfoFormSubmitted && (validationBusinessInfoForm.controls['busSectorCode'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب اختيار قطاع العمل\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"briefcase\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-3\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\"><b>نوع النشاط</b></ion-label>\n\n                <ion-select [disabled]=\"BusDiv1Is1Disabled\" class=\"ionSelectSize\" interface=\"popover\"\n                  placeholder=\"اختار نوع النشاط\" formControlName=\"BusActivityTypesCode\" (ionChange)=\"ChangeBusDiv2()\">\n                  <ion-select-option *ngFor=\"let type of GetBusinessActivityTypesObjects\" [value]=\"type.bs_div_2_code\">\n                    {{type.bs_div_2_name}}\n                  </ion-select-option>\n                </ion-select>\n\n                <div\n                  *ngIf=\"isBusinessInfoFormSubmitted && (validationBusinessInfoForm.controls['BusActivityTypesCode'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب اختيار نوع النشاط\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n\n          <div class=\"row \">\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"briefcase\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-3\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"><b>التخصص</b></ion-label>\n\n                <ion-select [disabled]=\"BusDiv1Is2Disabled\" class=\"ionSelectSize\" interface=\"popover\"\n                  placeholder=\"اختار التخصص\" formControlName=\"BusSpecializationCode\">\n                  <ion-select-option *ngFor=\"let spe of GetBusinessSpecialitiesObjects\" [value]=\"spe.bs_div_3_code\">\n                    {{spe.bs_div_3_name}}\n                  </ion-select-option>\n                </ion-select>\n\n              </div>\n            </div>\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n\n                <ion-icon name=\"storefront\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-3\">\n              <div class=\"form-group\">\n\n                <ion-label class=\"form-label\"><b>اسم العمل</b></ion-label>\n                <ion-input type=\"text\" id=\"BusName\" formControlName=\"BusName\" placeholder=\"   اسم العمل\">\n                </ion-input>\n                <div\n                  *ngIf=\"isBusinessInfoFormSubmitted && (validationBusinessInfoForm.controls['BusName'].hasError('pattern'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال حروف وارقام فقط\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"location\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-3\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"><b>عنوان العمل</b></ion-label>\n                <ion-input type=\"text\" id=\"BusAddress\" formControlName=\"BusAddress\" placeholder=\"   عنوان العمل\">\n                </ion-input>\n                <div\n                  *ngIf=\"isBusinessInfoFormSubmitted && (validationBusinessInfoForm.controls['BusAddress'].hasError('pattern'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال حروف وارقام فقط\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-10 col-md-3\">\n            </div>\n            <div class=\"col-10 col-md-4\">\n              <div class=\"form-group\">\n\n                <ion-button id=\"open-BusMapsModal\" type=\"submit\" class=\"buttonExpand\">\n                  <ion-icon class=\"ml-3\" name=\"Location\"></ion-icon>\n                  تحديد مقر العمل على الخريطة\n                </ion-button>\n                <ion-modal #BusMapsModal trigger=\"open-BusMapsModal\" class=\"h-auto image-modal\" [backdropDismiss]=\"true\"\n                  [keyboardClose]=\"true\">\n\n                  <ng-template>\n                    <ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n\n                      <ion-button (click)=\"BusMapsModal.dismiss()\" color=\"danger\" class=\"small\">\n                        <ion-icon name=\"close-sharp\"></ion-icon>\n                      </ion-button>\n                      <div>\n                        <ion-row>\n                          <ion-label class=\"form-label\">العنوان الذي قمت بأختيارة :</ion-label>\n                        </ion-row>\n                        <ion-row>\n                          <ion-label class=\"form-label\">{{address}}</ion-label>\n                        </ion-row>\n                      </div>\n                      <google-map #myGoogleMap height=\"65%\" width=\"100%\" [zoom]=\"zoom\" [center]=\"center\"\n                        [options]=\"options\" (mapClick)=\"eventHandler($event,'mapClick')\"\n                        (mapDblclick)=\"eventHandler($event,'mapDblclick')\" (mapDrag)=\"eventHandler($event,'mapDrag')\"\n                        (mapDragend)=\"eventHandler($event,'mapDragend')\"\n                        (mapRightclick)=\"eventHandler($event,'mapRightclick')\"\n                        (positionChanged)=\"eventHandler($event,'marker_positionChanged')\"\n                        (zoomChanged)=\"eventHandler($event,'zoomChanged')\">\n                        <map-marker #markerElem=\"mapMarker\" *ngFor=\"let marker of markers\" [position]=\"marker.position\"\n                          [label]=\"marker.label\" [title]=\"marker.title\" [options]=\"marker.options\"\n                          (mapDrag)=\"eventHandler($event,'mapDragMarker')\"\n                          (mapDragend)=\"eventHandler($event,'mapDragend')\">\n                        </map-marker>\n                        <ion-button size=\"small\" (click)=\"GetGeolocation()\">\n                          <ion-icon name=\"locate-sharp\"></ion-icon>\n                          تعيين موقعك الحالي\n                        </ion-button>\n                      </google-map>\n                    </ion-content>\n                    <div style=\"position: fixed;bottom: 0;width: 100%;background-color: var(--card-bg);\">\n                    </div>\n\n                  </ng-template>\n                </ion-modal>\n              </div>\n            </div>\n\n\n          </div>\n\n        </div>\n\n\n        <div class=\"d-flex justify-content-center\">\n\n          <ion-button *ngIf=\"ClientCanBackIDinfoFlag\" class=\"ml-2 marginRight\" type=\"button\" awPreviousStep>\n            عودة\n          </ion-button>\n          <ion-button (click)=\"saveBusInfo()\">حفظ واستكمال</ion-button>\n        </div>\n      </form>\n    </aw-wizard-step>\n    <!----------------------------------- step 4 --------------------------------->\n    <aw-wizard-step>\n      <form [formGroup]=\"validationUserNameAndPassForm\">\n        <ng-template awWizardStepSymbol>\n          <ion-icon name=\"person\"></ion-icon>\n        </ng-template>\n\n        <div class=\"card-body\">\n          <div class=\"divCenter\">\n            <h4><b>اسم المستخدم وكلمة السر</b></h4>\n            <div class=\"faded-line\"></div>\n          </div>\n          <br />\n\n\n          <div class=\"row \">\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n\n                <ion-icon name=\"man\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-3\">\n              <div class=\"form-group\">\n                <ion-label for=\"loginName\" class=\"form-label form-label-required\"><b>اسم المستخدم</b></ion-label>\n\n                <!-- <ion-item lines=\"none\"> -->\n\n                <ion-input type=\"text\" id=\"loginName\" formControlName=\"loginName\" placeholder=\"   اسم المستخدم\">\n                </ion-input>\n                <div\n                  *ngIf=\"isUserNameAndPassFormSubmitted && (validationUserNameAndPassForm.controls['loginName'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال اسم المستخدم\n                </div>\n\n                <div\n                  *ngIf=\"isUserNameAndPassFormSubmitted && (validationUserNameAndPassForm.controls['loginName'].hasError('pattern'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  اسم المستخدم لا يحتوي على علامات مثل ( ; * / ' \" - \\ ) او مسافات\n                </div>\n                <div\n                  *ngIf=\"isUserNameAndPassFormSubmitted && (validationUserNameAndPassForm.controls['loginName'].hasError('whitespace'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال حروف فقط\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row \">\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"lock-closed\" size=\"large\" class=\"paddingTop40px FormIcon\">\n                </ion-icon>\n\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-3\">\n              <div class=\"form-group\">\n                <ion-label for=\"password\" class=\"form-label form-label-required\"><b>كلمة السر</b></ion-label>\n                <!-- <ion-item lines=\"none\"> -->\n                <app-show-hide-password>\n                  <ion-input type=\"password\" formControlName=\"password\" placeholder=\"   كلمة السر\" id=\"passwordCss\">\n                  </ion-input>\n                </app-show-hide-password>\n                <div\n                  *ngIf=\"isUserNameAndPassFormSubmitted && (validationUserNameAndPassForm.controls['password'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال كلمة السر\n                </div>\n                <div\n                  *ngIf=\"isUserNameAndPassFormSubmitted && (validationUserNameAndPassForm.controls['password'].hasError('pattern'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  كلمة السر لا تحتوي على علامات مثل ( ; * / ' \" - \\ ) او مسافات\n                </div>\n                <div\n                  *ngIf=\"isUserNameAndPassFormSubmitted && (validationUserNameAndPassForm.controls['password'].hasError('whitespace'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال حروف فقط\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"col-0.8 col-md-0.8\">\n              <div class=\"form-group\">\n                <ion-icon name=\"lock-closed\" size=\"large\" class=\"paddingTop40px FormIcon\">\n                </ion-icon>\n              </div>\n            </div>\n\n            <div class=\"col-10 col-md-3\">\n              <div class=\"form-group\">\n                <ion-label for=\"confirmPassword\" class=\"form-label form-label-required\"><b>تأكيد - كلمة\n                    السر</b></ion-label>\n                <!-- <ion-item lines=\"none\"> -->\n                <app-show-hide-password>\n                  <ion-input type=\"password\" id=\"passwordCss\" formControlName=\"confirmPassword\"\n                    placeholder=\"   تأكيد - كلمة السر\">\n                  </ion-input>\n                </app-show-hide-password>\n                <!-- </ion-item> -->\n                <div\n                  *ngIf=\"isUserNameAndPassFormSubmitted && (validationUserNameAndPassForm.controls['confirmPassword'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال تأكيد كلمة السر\n                </div>\n                <div class=\"text-danger\"\n                  *ngIf=\"validationUserNameAndPassForm.controls['confirmPassword'].hasError('NoPassswordMatch')\">\n                  كلمة السر لا تتطابق مع تأكيد كلمة السر\n                </div>\n                <div\n                  *ngIf=\"isUserNameAndPassFormSubmitted && (validationUserNameAndPassForm.controls['confirmPassword'].hasError('pattern'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  كلمة السر لا تحتوي على علامات مثل ( ; * / ' \" - \\ ) او مسافات\n                </div>\n                <div\n                  *ngIf=\"isUserNameAndPassFormSubmitted && (validationUserNameAndPassForm.controls['confirmPassword'].hasError('whitespace'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال حروف فقط\n                </div>\n              </div>\n            </div>\n\n\n          </div>\n        </div>\n\n\n\n        <div class=\"d-flex justify-content-center\">\n\n          <ion-button *ngIf=\"ClientCanBackBusInfoFlag\" class=\"ml-2 marginRight\" type=\"button\" awPreviousStep>\n            عودة\n          </ion-button>\n          <ion-button (click)=\"saveUserNameAndPassword()\">حفظ واستكمال</ion-button>\n        </div>\n      </form>\n    </aw-wizard-step>\n    <!----------------------------------- step 5 --------------------------------->\n    <aw-wizard-step>\n      <ng-template awWizardStepSymbol>\n        <ion-icon name=\"attach\"></ion-icon>\n      </ng-template>\n\n      <form [formGroup]=\"validationUploadDocForm\" (ngSubmit)=\"uploadDocFormSubmit()\">\n        <div class=\"divCenter\">\n          <h4><b>رفع مستندات</b></h4>\n          <div class=\"faded-line\"></div>\n        </div>\n        <br />\n        <ion-row>\n          <ion-col size=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\" class=\"alignLeft\">\n            <ion-icon name=\"attach\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n          </ion-col>\n          <ion-col size=\"8\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\">\n            <ion-label class=\"form-label\"><b>نوع المستند</b></ion-label>\n\n            <ion-select class=\"ionSelectSize\" interface=\"popover\" placeholder=\"اختار مستند\" formControlName=\"docCode\">\n              <ion-select-option *ngFor=\"let Doc of documentTypes\" [value]=\"Doc.documentTypeCode\">\n                {{Doc.documentTypeDesc}}\n              </ion-select-option>\n            </ion-select>\n            <ion-button (click)=\"addNewDocument()\">اضافة المستند</ion-button>\n\n            <ng-container *ngIf=\"isDocumentSelected\">\n              <ion-accordion-group>\n                <ion-accordion class=\"rounded my-2\" *ngFor=\"let image of documentDetails; let i = index\">\n                  <ion-item slot=\"header\">\n                    <ion-label class=\"font-weight-bold text-center\">صفحة رقم {{ i + 1 }}</ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\">\n                    <div class=\"row justify-content-center\">\n                      <div class=\"col text-center\">\n                        <ion-button class=\"py-0 h-max\" (click)=\"takePicture(i)\" #getBusinessImageButton><ion-icon\n                            slot=\"start\"\n                            [name]=\"getBusinessImageButton.disabled ? 'checkmark-done-sharp' : 'camera-sharp'\"></ion-icon>اضافة\n                          صورة</ion-button>\n                        <ion-modal #imageModal trigger=\"open-business-image-modal\" class=\"p-5 h-auto image-modal\"\n                          [backdropDismiss]=\"true\" [keyboardClose]=\"true\">\n                          <ng-template>\n                            <ion-content>\n                              <img [src]=\"imageSrc\" class=\"p-4\" />\n                              <div style=\"\n                                  position: fixed;\n                                  bottom: 0;\n                                  width: 100%;\n                                  background-color: var(--card-bg);\n                                \">\n                                <ion-button expand=\"block\" (click)=\"imageModal.dismiss()\">اغلاق</ion-button>\n                              </div>\n                            </ion-content>\n                          </ng-template>\n                        </ion-modal>\n                      </div>\n                    </div>\n                  </div>\n                </ion-accordion>\n              </ion-accordion-group>\n            </ng-container>\n          </ion-col>\n        </ion-row>\n\n        <div class=\"d-flex justify-content-center\">\n          <ion-button *ngIf=\"ClientCanBackUserPassFlag\" class=\"ml-2 marginRight\" type=\"button\" awPreviousStep>\n            عودة\n          </ion-button>\n          <ion-button type=\"submit\">حفظ واستكمال</ion-button>\n        </div>\n      </form>\n    </aw-wizard-step>\n    <!----------------------------------- step 6 --------------------------------->\n    <aw-wizard-step [awOptionalStep]=\"true\">\n      <ng-template awWizardStepSymbol>\n        <ion-icon name=\"mail\"></ion-icon>\n      </ng-template>\n\n      <form [formGroup]=\"validationEmailForm\">\n        <div class=\"divCenter\">\n          <h4><b>البريد الالكتروني</b></h4>\n          <div class=\"faded-line\"></div>\n        </div>\n        <br />\n        <ion-row>\n          <ion-col size=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\" class=\"alignLeft\">\n            <ion-icon name=\"mail\" size=\"large\" class=\"paddingTop40px FormIcon\"></ion-icon>\n          </ion-col>\n\n          <ion-col size=\"8\" size-sm=\"6\" size-md=\"4\" size-lg=\"3\">\n            <ion-label class=\"form-label\" for=\"email\"><b>البريد الالكتروني</b></ion-label>\n            <ion-input formControlName=\"email\" placeholder=\"   البريد الالكتروني\">\n            </ion-input>\n            <div *ngIf=\"isEmailFormSubmitted && (validationEmailForm.controls['email'].hasError('pattern'))\"\n              class=\"text-danger\" role=\"alert\">\n              يجب ادخال البريد الالكتروني\n              مثل: (john@example.com)\n            </div>\n            <div *ngIf=\"isEmailFormSubmitted && (validationEmailForm.controls['email'].hasError('pattern'))\"\n              class=\"text-danger\" role=\"alert\">\n              يجب ادخال حروف وارقام فقط\n            </div>\n          </ion-col>\n\n\n          <ion-col size=\"1\" size-sm=\"1\" size-md=\"1\" size-lg=\"1\" class=\"paddingTop35px\">\n            <ion-button (click)=\"infoAlertEmailOtp()\" fill=\"clear\" class=\"clearButton\">\n              <ion-icon class=\"\" name=\"help-circle-outline\" slot=\"end\" size=\"small\" class=\"FormIcon\">\n              </ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n        <div class=\"d-flex justify-content-center mt-2\">\n          <ion-button *ngIf=\"ClientCanBackDocFlag\" class=\"ml-2 marginRight\" type=\"button\" awPreviousStep>\n            عودة\n          </ion-button>\n          <ion-button (click)=\"saveEmail()\">حفظ واستكمال</ion-button>\n        </div>\n      </form>\n    </aw-wizard-step>\n    <!----------------------------------- step 7 --------------------------------->\n    <aw-wizard-step stepTitle=\"\" [navigationSymbol]=\"{symbol:'7'}\">\n      <ng-template awWizardStepSymbol>\n        <ion-icon name=\"checkbox\"></ion-icon>\n      </ng-template>\n\n      <form [formGroup]=\"validationFinishForm\">\n        <div class=\"ion-padding\">\n          <div class=\"text-center\">\n            <i data-feather=\"check-circle\" appFeatherIcon class=\"text-success mt-4 mb-2 icon-xxl\"></i>\n            <h3 class=\"text-muted mb-3\">\n              تم تسجيل طلبكم لدينا وسيتم التواصل معكم في خلال\n            </h3>\n\n            <div>\n              <h3 class=\"text-muted mb-3\">{{timeLimit}}</h3>\n            </div>\n          </div>\n\n          <div class=\"d-flex justify-content-center mt-2\">\n            <ion-button *ngIf=\"ClientCanBackEmailFlag\" class=\"ml-2 marginRight\" type=\"button\" awPreviousStep>\n              عودة\n            </ion-button>\n            <ion-button type=\"button\" (click)=\"reloadPage()\">إنهاء</ion-button>\n          </div>\n        </div>\n      </form>\n    </aw-wizard-step>\n  </aw-wizard>\n</ion-row>";

/***/ }),

/***/ 62754:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/google-maps/fesm2015/google-maps.mjs ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": function() { return /* binding */ GoogleMap; },
/* harmony export */   "GoogleMapsModule": function() { return /* binding */ GoogleMapsModule; },
/* harmony export */   "MapBaseLayer": function() { return /* binding */ MapBaseLayer; },
/* harmony export */   "MapBicyclingLayer": function() { return /* binding */ MapBicyclingLayer; },
/* harmony export */   "MapCircle": function() { return /* binding */ MapCircle; },
/* harmony export */   "MapDirectionsRenderer": function() { return /* binding */ MapDirectionsRenderer; },
/* harmony export */   "MapDirectionsService": function() { return /* binding */ MapDirectionsService; },
/* harmony export */   "MapGeocoder": function() { return /* binding */ MapGeocoder; },
/* harmony export */   "MapGroundOverlay": function() { return /* binding */ MapGroundOverlay; },
/* harmony export */   "MapHeatmapLayer": function() { return /* binding */ MapHeatmapLayer; },
/* harmony export */   "MapInfoWindow": function() { return /* binding */ MapInfoWindow; },
/* harmony export */   "MapKmlLayer": function() { return /* binding */ MapKmlLayer; },
/* harmony export */   "MapMarker": function() { return /* binding */ MapMarker; },
/* harmony export */   "MapMarkerClusterer": function() { return /* binding */ MapMarkerClusterer; },
/* harmony export */   "MapPolygon": function() { return /* binding */ MapPolygon; },
/* harmony export */   "MapPolyline": function() { return /* binding */ MapPolyline; },
/* harmony export */   "MapRectangle": function() { return /* binding */ MapRectangle; },
/* harmony export */   "MapTrafficLayer": function() { return /* binding */ MapTrafficLayer; },
/* harmony export */   "MapTransitLayer": function() { return /* binding */ MapTransitLayer; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ 10507);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ 24582);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ 2496);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 19193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 85921);











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Manages event on a Google Maps object, ensuring that events are added only when necessary. */

var _c0 = ["*"];

var MapEventManager = /*#__PURE__*/function () {
  function MapEventManager(_ngZone) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapEventManager);

    this._ngZone = _ngZone;
    /** Pending listeners that were added before the target was set. */

    this._pending = [];
    this._listeners = [];
    this._targetStream = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
  }
  /** Clears all currently-registered event listeners. */


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapEventManager, [{
    key: "_clearListeners",
    value: function _clearListeners() {
      var _iterator = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._listeners),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var listener = _step.value;
          listener.remove();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this._listeners = [];
    }
    /** Gets an observable that adds an event listener to the map when a consumer subscribes to it. */

  }, {
    key: "getLazyEmitter",
    value: function getLazyEmitter(name) {
      var _this = this;

      return this._targetStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(function (target) {
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (observer) {
          // If the target hasn't been initialized yet, cache the observer so it can be added later.
          if (!target) {
            _this._pending.push({
              observable: observable,
              observer: observer
            });

            return undefined;
          }

          var listener = target.addListener(name, function (event) {
            _this._ngZone.run(function () {
              return observer.next(event);
            });
          });

          _this._listeners.push(listener);

          return function () {
            return listener.remove();
          };
        });
        return observable;
      }));
    }
    /** Sets the current target that the manager should bind events to. */

  }, {
    key: "setTarget",
    value: function setTarget(target) {
      var currentTarget = this._targetStream.value;

      if (target === currentTarget) {
        return;
      } // Clear the listeners from the pre-existing target.


      if (currentTarget) {
        this._clearListeners();

        this._pending = [];
      }

      this._targetStream.next(target); // Add the listeners that were bound before the map was initialized.


      this._pending.forEach(function (subscriber) {
        return subscriber.observable.subscribe(subscriber.observer);
      });

      this._pending = [];
    }
    /** Destroys the manager and clears the event listeners. */

  }, {
    key: "destroy",
    value: function destroy() {
      this._clearListeners();

      this._pending = [];

      this._targetStream.complete();
    }
  }]);

  return MapEventManager;
}(); /// <reference types="google.maps" />

/** default options set to the Googleplex */


var DEFAULT_OPTIONS = {
  center: {
    lat: 37.421995,
    lng: -122.084092
  },
  zoom: 17,
  // Note: the type conversion here isn't necessary for our CI, but it resolves a g3 failure.
  mapTypeId: 'roadmap'
};
/** Arbitrary default height for the map element */

var DEFAULT_HEIGHT = '500px';
/** Arbitrary default width for the map element */

var DEFAULT_WIDTH = '500px';
/**
 * Angular component that renders a Google Map via the Google Maps JavaScript
 * API.
 * @see https://developers.google.com/maps/documentation/javascript/reference/
 */

var GoogleMap = /*#__PURE__*/function () {
  function GoogleMap(_elementRef, _ngZone, platformId) {
    var _this2 = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, GoogleMap);

    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    /** Height of the map. Set this to `null` if you'd like to control the height through CSS. */

    this.height = DEFAULT_HEIGHT;
    /** Width of the map. Set this to `null` if you'd like to control the width through CSS. */

    this.width = DEFAULT_WIDTH;
    this._options = DEFAULT_OPTIONS;
    /** Event emitted when the map is initialized. */

    this.mapInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/events#auth-errors
     */

    this.authFailure = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.bounds_changed
     */

    this.boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.center_changed
     */

    this.centerChanged = this._eventManager.getLazyEmitter('center_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.click
     */

    this.mapClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dblclick
     */

    this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.drag
     */

    this.mapDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragend
     */

    this.mapDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.dragstart
     */

    this.mapDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.heading_changed
     */

    this.headingChanged = this._eventManager.getLazyEmitter('heading_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.idle
     */

    this.idle = this._eventManager.getLazyEmitter('idle');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.maptypeid_changed
     */

    this.maptypeidChanged = this._eventManager.getLazyEmitter('maptypeid_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mousemove
     */

    this.mapMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseout
     */

    this.mapMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mouseover
     */

    this.mapMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/map#Map.projection_changed
     */

    this.projectionChanged = this._eventManager.getLazyEmitter('projection_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.rightclick
     */

    this.mapRightclick = this._eventManager.getLazyEmitter('rightclick');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilesloaded
     */

    this.tilesloaded = this._eventManager.getLazyEmitter('tilesloaded');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.tilt_changed
     */

    this.tiltChanged = this._eventManager.getLazyEmitter('tilt_changed');
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.zoom_changed
     */

    this.zoomChanged = this._eventManager.getLazyEmitter('zoom_changed');
    this._isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.isPlatformBrowser)(platformId);

    if (this._isBrowser) {
      var googleMapsWindow = window;

      if (!googleMapsWindow.google && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Namespace google not found, cannot construct embedded google ' + 'map. Please install the Google Maps JavaScript API: ' + 'https://developers.google.com/maps/documentation/javascript/' + 'tutorial#Loading_the_Maps_API');
      }

      this._existingAuthFailureCallback = googleMapsWindow.gm_authFailure;

      googleMapsWindow.gm_authFailure = function () {
        if (_this2._existingAuthFailureCallback) {
          _this2._existingAuthFailureCallback();
        }

        _this2.authFailure.emit();
      };
    }
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(GoogleMap, [{
    key: "center",
    set: function set(center) {
      this._center = center;
    }
  }, {
    key: "zoom",
    set: function set(zoom) {
      this._zoom = zoom;
    }
  }, {
    key: "options",
    set: function set(options) {
      this._options = options || DEFAULT_OPTIONS;
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (changes['height'] || changes['width']) {
        this._setSize();
      }

      var googleMap = this.googleMap;

      if (googleMap) {
        if (changes['options']) {
          googleMap.setOptions(this._combineOptions());
        }

        if (changes['center'] && this._center) {
          googleMap.setCenter(this._center);
        } // Note that the zoom can be zero.


        if (changes['zoom'] && this._zoom != null) {
          googleMap.setZoom(this._zoom);
        }

        if (changes['mapTypeId'] && this.mapTypeId) {
          googleMap.setMapTypeId(this.mapTypeId);
        }
      }
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this3 = this;

      // It should be a noop during server-side rendering.
      if (this._isBrowser) {
        this._mapEl = this._elementRef.nativeElement.querySelector('.map-container');

        this._setSize(); // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.


        this._ngZone.runOutsideAngular(function () {
          _this3.googleMap = new google.maps.Map(_this3._mapEl, _this3._combineOptions());
        });

        this._eventManager.setTarget(this.googleMap);

        this.mapInitialized.emit(this.googleMap);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();

      if (this._isBrowser) {
        var googleMapsWindow = window;
        googleMapsWindow.gm_authFailure = this._existingAuthFailureCallback;
      }
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.fitBounds
     */

  }, {
    key: "fitBounds",
    value: function fitBounds(bounds, padding) {
      this._assertInitialized();

      this.googleMap.fitBounds(bounds, padding);
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panBy
     */

  }, {
    key: "panBy",
    value: function panBy(x, y) {
      this._assertInitialized();

      this.googleMap.panBy(x, y);
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panTo
     */

  }, {
    key: "panTo",
    value: function panTo(latLng) {
      this._assertInitialized();

      this.googleMap.panTo(latLng);
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.panToBounds
     */

  }, {
    key: "panToBounds",
    value: function panToBounds(latLngBounds, padding) {
      this._assertInitialized();

      this.googleMap.panToBounds(latLngBounds, padding);
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getBounds
     */

  }, {
    key: "getBounds",
    value: function getBounds() {
      this._assertInitialized();

      return this.googleMap.getBounds() || null;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getCenter
     */

  }, {
    key: "getCenter",
    value: function getCenter() {
      this._assertInitialized();

      return this.googleMap.getCenter();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getClickableIcons
     */

  }, {
    key: "getClickableIcons",
    value: function getClickableIcons() {
      this._assertInitialized();

      return this.googleMap.getClickableIcons();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getHeading
     */

  }, {
    key: "getHeading",
    value: function getHeading() {
      this._assertInitialized();

      return this.googleMap.getHeading();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getMapTypeId
     */

  }, {
    key: "getMapTypeId",
    value: function getMapTypeId() {
      this._assertInitialized();

      return this.googleMap.getMapTypeId();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getProjection
     */

  }, {
    key: "getProjection",
    value: function getProjection() {
      this._assertInitialized();

      return this.googleMap.getProjection() || null;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getStreetView
     */

  }, {
    key: "getStreetView",
    value: function getStreetView() {
      this._assertInitialized();

      return this.googleMap.getStreetView();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getTilt
     */

  }, {
    key: "getTilt",
    value: function getTilt() {
      this._assertInitialized();

      return this.googleMap.getTilt();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.getZoom
     */

  }, {
    key: "getZoom",
    value: function getZoom() {
      this._assertInitialized();

      return this.googleMap.getZoom();
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.controls
     */

  }, {
    key: "controls",
    get: function get() {
      this._assertInitialized();

      return this.googleMap.controls;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.data
     */

  }, {
    key: "data",
    get: function get() {
      this._assertInitialized();

      return this.googleMap.data;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.mapTypes
     */

  }, {
    key: "mapTypes",
    get: function get() {
      this._assertInitialized();

      return this.googleMap.mapTypes;
    }
    /**
     * See
     * https://developers.google.com/maps/documentation/javascript/reference/map#Map.overlayMapTypes
     */

  }, {
    key: "overlayMapTypes",
    get: function get() {
      this._assertInitialized();

      return this.googleMap.overlayMapTypes;
    }
  }, {
    key: "_setSize",
    value: function _setSize() {
      if (this._mapEl) {
        var styles = this._mapEl.style;
        styles.height = this.height === null ? '' : coerceCssPixelValue(this.height) || DEFAULT_HEIGHT;
        styles.width = this.width === null ? '' : coerceCssPixelValue(this.width) || DEFAULT_WIDTH;
      }
    }
    /** Combines the center and zoom and the other map options into a single object */

  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      var _a, _b;

      var options = this._options || {};
      return Object.assign(Object.assign({}, options), {
        // It's important that we set **some** kind of `center` and `zoom`, otherwise
        // Google Maps will render a blank rectangle which looks broken.
        center: this._center || options.center || DEFAULT_OPTIONS.center,
        zoom: (_b = (_a = this._zoom) !== null && _a !== void 0 ? _a : options.zoom) !== null && _b !== void 0 ? _b : DEFAULT_OPTIONS.zoom,
        // Passing in an undefined `mapTypeId` seems to break tile loading
        // so make sure that we have some kind of default (see #22082).
        mapTypeId: this.mapTypeId || options.mapTypeId || DEFAULT_OPTIONS.mapTypeId
      });
    }
    /** Asserts that the map has been initialized. */

  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (!this.googleMap && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
    }
  }]);

  return GoogleMap;
}();

GoogleMap.ɵfac = function GoogleMap_Factory(t) {
  return new (t || GoogleMap)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.PLATFORM_ID));
};

GoogleMap.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: GoogleMap,
  selectors: [["google-map"]],
  inputs: {
    height: "height",
    width: "width",
    mapTypeId: "mapTypeId",
    center: "center",
    zoom: "zoom",
    options: "options"
  },
  outputs: {
    mapInitialized: "mapInitialized",
    authFailure: "authFailure",
    boundsChanged: "boundsChanged",
    centerChanged: "centerChanged",
    mapClick: "mapClick",
    mapDblclick: "mapDblclick",
    mapDrag: "mapDrag",
    mapDragend: "mapDragend",
    mapDragstart: "mapDragstart",
    headingChanged: "headingChanged",
    idle: "idle",
    maptypeidChanged: "maptypeidChanged",
    mapMousemove: "mapMousemove",
    mapMouseout: "mapMouseout",
    mapMouseover: "mapMouseover",
    projectionChanged: "projectionChanged",
    mapRightclick: "mapRightclick",
    tilesloaded: "tilesloaded",
    tiltChanged: "tiltChanged",
    zoomChanged: "zoomChanged"
  },
  exportAs: ["googleMap"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 0,
  consts: [[1, "map-container"]],
  template: function GoogleMap_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](1);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](GoogleMap, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component,
    args: [{
      selector: 'google-map',
      exportAs: 'googleMap',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectionStrategy.OnPush,
      template: '<div class="map-container"></div><ng-content></ng-content>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_9__.PLATFORM_ID]
      }]
    }];
  }, {
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    mapTypeId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    center: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    zoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    mapInitialized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    authFailure: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    boundsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    centerChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    headingChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    idle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    maptypeidChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    projectionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    tilesloaded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    tiltChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    zoomChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }]
  });
})();

var cssUnitsPattern = /([A-Za-z%]+)$/;
/** Coerces a value to a CSS pixel value. */

function coerceCssPixelValue(value) {
  if (value == null) {
    return '';
  }

  return cssUnitsPattern.test(value) ? value : "".concat(value, "px");
} /// <reference types="google.maps" />


var MapBaseLayer = /*#__PURE__*/function () {
  function MapBaseLayer(_map, _ngZone) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapBaseLayer);

    this._map = _map;
    this._ngZone = _ngZone;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapBaseLayer, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this4 = this;

      if (this._map._isBrowser) {
        this._ngZone.runOutsideAngular(function () {
          _this4._initializeObject();
        });

        this._assertInitialized();

        this._setMap();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._unsetMap();
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }
    }
  }, {
    key: "_initializeObject",
    value: function _initializeObject() {}
  }, {
    key: "_setMap",
    value: function _setMap() {}
  }, {
    key: "_unsetMap",
    value: function _unsetMap() {}
  }]);

  return MapBaseLayer;
}();

MapBaseLayer.ɵfac = function MapBaseLayer_Factory(t) {
  return new (t || MapBaseLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};

MapBaseLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapBaseLayer,
  selectors: [["map-base-layer"]],
  exportAs: ["mapBaseLayer"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapBaseLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-base-layer',
      exportAs: 'mapBaseLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, null);
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Bicycling Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#BicyclingLayer
 */


var MapBicyclingLayer = /*#__PURE__*/function (_MapBaseLayer) {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MapBicyclingLayer, _MapBaseLayer);

  var _super = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MapBicyclingLayer);

  function MapBicyclingLayer() {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapBicyclingLayer);

    return _super.apply(this, arguments);
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapBicyclingLayer, [{
    key: "_initializeObject",
    value: function _initializeObject() {
      this.bicyclingLayer = new google.maps.BicyclingLayer();
    }
  }, {
    key: "_setMap",
    value: function _setMap() {
      this._assertLayerInitialized();

      this.bicyclingLayer.setMap(this._map.googleMap);
    }
  }, {
    key: "_unsetMap",
    value: function _unsetMap() {
      if (this.bicyclingLayer) {
        this.bicyclingLayer.setMap(null);
      }
    }
  }, {
    key: "_assertLayerInitialized",
    value: function _assertLayerInitialized() {
      if (!this.bicyclingLayer) {
        throw Error('Cannot interact with a Google Map Bicycling Layer before it has been initialized. ' + 'Please wait for the Transit Layer to load before trying to interact with it.');
      }
    }
  }]);

  return MapBicyclingLayer;
}(MapBaseLayer);

MapBicyclingLayer.ɵfac = /* @__PURE__ */function () {
  var ɵMapBicyclingLayer_BaseFactory;
  return function MapBicyclingLayer_Factory(t) {
    return (ɵMapBicyclingLayer_BaseFactory || (ɵMapBicyclingLayer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](MapBicyclingLayer)))(t || MapBicyclingLayer);
  };
}();

MapBicyclingLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapBicyclingLayer,
  selectors: [["map-bicycling-layer"]],
  exportAs: ["mapBicyclingLayer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapBicyclingLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-bicycling-layer',
      exportAs: 'mapBicyclingLayer'
    }]
  }], null, null);
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Circle via the Google Maps JavaScript API.
 * @see developers.google.com/maps/documentation/javascript/reference/polygon#Circle
 */


var MapCircle = /*#__PURE__*/function () {
  function MapCircle(_map, _ngZone) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapCircle);

    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this._center = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
    this._radius = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.center_changed
     */

    this.centerChanged = this._eventManager.getLazyEmitter('center_changed');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.click
     */

    this.circleClick = this._eventManager.getLazyEmitter('click');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dblclick
     */

    this.circleDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.drag
     */

    this.circleDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragend
     */

    this.circleDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.dragstart
     */

    this.circleDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousedown
     */

    this.circleMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mousemove
     */

    this.circleMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseout
     */

    this.circleMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseover
     */

    this.circleMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.mouseup
     */

    this.circleMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.radius_changed
     */

    this.radiusChanged = this._eventManager.getLazyEmitter('radius_changed');
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.rightclick
     */

    this.circleRightclick = this._eventManager.getLazyEmitter('rightclick');
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapCircle, [{
    key: "options",
    set: function set(options) {
      this._options.next(options || {});
    }
  }, {
    key: "center",
    set: function set(center) {
      this._center.next(center);
    }
  }, {
    key: "radius",
    set: function set(radius) {
      this._radius.next(radius);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this5 = this;

      if (this._map._isBrowser) {
        this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function (options) {
          // Create the object outside the zone so its events don't trigger change detection.
          // We'll bring it back in inside the `MapEventManager` only for the events that the
          // user has subscribed to.
          _this5._ngZone.runOutsideAngular(function () {
            _this5.circle = new google.maps.Circle(options);
          });

          _this5._assertInitialized();

          _this5.circle.setMap(_this5._map.googleMap);

          _this5._eventManager.setTarget(_this5.circle);
        });

        this._watchForOptionsChanges();

        this._watchForCenterChanges();

        this._watchForRadiusChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();

      this._destroyed.next();

      this._destroyed.complete();

      if (this.circle) {
        this.circle.setMap(null);
      }
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getBounds
     */

  }, {
    key: "getBounds",
    value: function getBounds() {
      this._assertInitialized();

      return this.circle.getBounds();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getCenter
     */

  }, {
    key: "getCenter",
    value: function getCenter() {
      this._assertInitialized();

      return this.circle.getCenter();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getDraggable
     */

  }, {
    key: "getDraggable",
    value: function getDraggable() {
      this._assertInitialized();

      return this.circle.getDraggable();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getEditable
     */

  }, {
    key: "getEditable",
    value: function getEditable() {
      this._assertInitialized();

      return this.circle.getEditable();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getRadius
     */

  }, {
    key: "getRadius",
    value: function getRadius() {
      this._assertInitialized();

      return this.circle.getRadius();
    }
    /**
     * @see
     * developers.google.com/maps/documentation/javascript/reference/polygon#Circle.getVisible
     */

  }, {
    key: "getVisible",
    value: function getVisible() {
      this._assertInitialized();

      return this.circle.getVisible();
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._options, this._center, this._radius]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(function (_ref) {
        var _ref2 = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 3),
            options = _ref2[0],
            center = _ref2[1],
            radius = _ref2[2];

        var combinedOptions = Object.assign(Object.assign({}, options), {
          center: center || options.center,
          radius: radius !== undefined ? radius : options.radius
        });
        return combinedOptions;
      }));
    }
  }, {
    key: "_watchForOptionsChanges",
    value: function _watchForOptionsChanges() {
      var _this6 = this;

      this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (options) {
        _this6._assertInitialized();

        _this6.circle.setOptions(options);
      });
    }
  }, {
    key: "_watchForCenterChanges",
    value: function _watchForCenterChanges() {
      var _this7 = this;

      this._center.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (center) {
        if (center) {
          _this7._assertInitialized();

          _this7.circle.setCenter(center);
        }
      });
    }
  }, {
    key: "_watchForRadiusChanges",
    value: function _watchForRadiusChanges() {
      var _this8 = this;

      this._radius.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (radius) {
        if (radius !== undefined) {
          _this8._assertInitialized();

          _this8.circle.setRadius(radius);
        }
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._map.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }

        if (!this.circle) {
          throw Error('Cannot interact with a Google Map Circle before it has been ' + 'initialized. Please wait for the Circle to load before trying to interact with it.');
        }
      }
    }
  }]);

  return MapCircle;
}();

MapCircle.ɵfac = function MapCircle_Factory(t) {
  return new (t || MapCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};

MapCircle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapCircle,
  selectors: [["map-circle"]],
  inputs: {
    options: "options",
    center: "center",
    radius: "radius"
  },
  outputs: {
    centerChanged: "centerChanged",
    circleClick: "circleClick",
    circleDblclick: "circleDblclick",
    circleDrag: "circleDrag",
    circleDragend: "circleDragend",
    circleDragstart: "circleDragstart",
    circleMousedown: "circleMousedown",
    circleMousemove: "circleMousemove",
    circleMouseout: "circleMouseout",
    circleMouseover: "circleMouseover",
    circleMouseup: "circleMouseup",
    radiusChanged: "radiusChanged",
    circleRightclick: "circleRightclick"
  },
  exportAs: ["mapCircle"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapCircle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-circle',
      exportAs: 'mapCircle'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    center: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    radius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    centerChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    radiusChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    circleRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Directions Renderer via the Google Maps
 * JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/directions#DirectionsRenderer
 */


var MapDirectionsRenderer = /*#__PURE__*/function () {
  function MapDirectionsRenderer(_googleMap, _ngZone) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapDirectionsRenderer);

    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    /**
     * See developers.google.com/maps/documentation/javascript/reference/directions
     * #DirectionsRenderer.directions_changed
     */

    this.directionsChanged = this._eventManager.getLazyEmitter('directions_changed');
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsRendererOptions.directions
   */


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapDirectionsRenderer, [{
    key: "directions",
    set: function set(directions) {
      this._directions = directions;
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/directions
     * #DirectionsRendererOptions
     */

  }, {
    key: "options",
    set: function set(options) {
      this._options = options;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this9 = this;

      if (this._googleMap._isBrowser) {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(function () {
          _this9.directionsRenderer = new google.maps.DirectionsRenderer(_this9._combineOptions());
        });

        this._assertInitialized();

        this.directionsRenderer.setMap(this._googleMap.googleMap);

        this._eventManager.setTarget(this.directionsRenderer);
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      if (this.directionsRenderer) {
        if (changes['options']) {
          this.directionsRenderer.setOptions(this._combineOptions());
        }

        if (changes['directions'] && this._directions !== undefined) {
          this.directionsRenderer.setDirections(this._directions);
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();

      if (this.directionsRenderer) {
        this.directionsRenderer.setMap(null);
      }
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/directions
     * #DirectionsRenderer.getDirections
     */

  }, {
    key: "getDirections",
    value: function getDirections() {
      this._assertInitialized();

      return this.directionsRenderer.getDirections();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/directions
     * #DirectionsRenderer.getPanel
     */

  }, {
    key: "getPanel",
    value: function getPanel() {
      this._assertInitialized();

      return this.directionsRenderer.getPanel();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/directions
     * #DirectionsRenderer.getRouteIndex
     */

  }, {
    key: "getRouteIndex",
    value: function getRouteIndex() {
      this._assertInitialized();

      return this.directionsRenderer.getRouteIndex();
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      var options = this._options || {};
      return Object.assign(Object.assign({}, options), {
        directions: this._directions || options.directions,
        map: this._googleMap.googleMap
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._googleMap.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }

        if (!this.directionsRenderer) {
          throw Error('Cannot interact with a Google Map Directions Renderer before it has been ' + 'initialized. Please wait for the Directions Renderer to load before trying ' + 'to interact with it.');
        }
      }
    }
  }]);

  return MapDirectionsRenderer;
}();

MapDirectionsRenderer.ɵfac = function MapDirectionsRenderer_Factory(t) {
  return new (t || MapDirectionsRenderer)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};

MapDirectionsRenderer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapDirectionsRenderer,
  selectors: [["map-directions-renderer"]],
  inputs: {
    directions: "directions",
    options: "options"
  },
  outputs: {
    directionsChanged: "directionsChanged"
  },
  exportAs: ["mapDirectionsRenderer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapDirectionsRenderer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-directions-renderer',
      exportAs: 'mapDirectionsRenderer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    directions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    directionsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Ground Overlay via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay
 */


var MapGroundOverlay = /*#__PURE__*/function () {
  function MapGroundOverlay(_map, _ngZone) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapGroundOverlay);

    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._opacity = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(1);
    this._url = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject('');
    this._bounds = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    /** Whether the overlay is clickable */

    this.clickable = false;
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay#GroundOverlay.click
     */

    this.mapClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.dblclick
     */

    this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
  }
  /** URL of the image that will be shown in the overlay. */


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapGroundOverlay, [{
    key: "url",
    set: function set(url) {
      this._url.next(url);
    }
    /** Bounds for the overlay. */

  }, {
    key: "bounds",
    get: function get() {
      return this._bounds.value;
    },
    set: function set(bounds) {
      this._bounds.next(bounds);
    }
    /** Opacity of the overlay. */

  }, {
    key: "opacity",
    set: function set(opacity) {
      this._opacity.next(opacity);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this10 = this;

      if (this._map._isBrowser) {
        // The ground overlay setup is slightly different from the other Google Maps objects in that
        // we have to recreate the `GroundOverlay` object whenever the bounds change, because
        // Google Maps doesn't provide an API to update the bounds of an existing overlay.
        this._bounds.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (bounds) {
          if (_this10.groundOverlay) {
            _this10.groundOverlay.setMap(null);

            _this10.groundOverlay = undefined;
          } // Create the object outside the zone so its events don't trigger change detection.
          // We'll bring it back in inside the `MapEventManager` only for the events that the
          // user has subscribed to.


          if (bounds) {
            _this10._ngZone.runOutsideAngular(function () {
              _this10.groundOverlay = new google.maps.GroundOverlay(_this10._url.getValue(), bounds, {
                clickable: _this10.clickable,
                opacity: _this10._opacity.value
              });
            });

            _this10._assertInitialized();

            _this10.groundOverlay.setMap(_this10._map.googleMap);

            _this10._eventManager.setTarget(_this10.groundOverlay);
          }
        });

        this._watchForOpacityChanges();

        this._watchForUrlChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();

      this._destroyed.next();

      this._destroyed.complete();

      if (this.groundOverlay) {
        this.groundOverlay.setMap(null);
      }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.getBounds
     */

  }, {
    key: "getBounds",
    value: function getBounds() {
      this._assertInitialized();

      return this.groundOverlay.getBounds();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.getOpacity
     */

  }, {
    key: "getOpacity",
    value: function getOpacity() {
      this._assertInitialized();

      return this.groundOverlay.getOpacity();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/image-overlay
     * #GroundOverlay.getUrl
     */

  }, {
    key: "getUrl",
    value: function getUrl() {
      this._assertInitialized();

      return this.groundOverlay.getUrl();
    }
  }, {
    key: "_watchForOpacityChanges",
    value: function _watchForOpacityChanges() {
      var _this11 = this;

      this._opacity.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (opacity) {
        if (opacity != null) {
          _this11._assertInitialized();

          _this11.groundOverlay.setOpacity(opacity);
        }
      });
    }
  }, {
    key: "_watchForUrlChanges",
    value: function _watchForUrlChanges() {
      var _this12 = this;

      this._url.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (url) {
        _this12._assertInitialized();

        var overlay = _this12.groundOverlay;
        overlay.set('url', url); // Google Maps only redraws the overlay if we re-set the map.

        overlay.setMap(null);
        overlay.setMap(_this12._map.googleMap);
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._map.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }

        if (!this.groundOverlay) {
          throw Error('Cannot interact with a Google Map GroundOverlay before it has been initialized. ' + 'Please wait for the GroundOverlay to load before trying to interact with it.');
        }
      }
    }
  }]);

  return MapGroundOverlay;
}();

MapGroundOverlay.ɵfac = function MapGroundOverlay_Factory(t) {
  return new (t || MapGroundOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};

MapGroundOverlay.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapGroundOverlay,
  selectors: [["map-ground-overlay"]],
  inputs: {
    url: "url",
    bounds: "bounds",
    clickable: "clickable",
    opacity: "opacity"
  },
  outputs: {
    mapClick: "mapClick",
    mapDblclick: "mapDblclick"
  },
  exportAs: ["mapGroundOverlay"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapGroundOverlay, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-ground-overlay',
      exportAs: 'mapGroundOverlay'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps info window via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/info-window
 */


var MapInfoWindow = /*#__PURE__*/function () {
  function MapInfoWindow(_googleMap, _elementRef, _ngZone) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapInfoWindow);

    this._googleMap = _googleMap;
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this._position = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
    this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.closeclick
     */

    this.closeclick = this._eventManager.getLazyEmitter('closeclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.content_changed
     */

    this.contentChanged = this._eventManager.getLazyEmitter('content_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.domready
     */

    this.domready = this._eventManager.getLazyEmitter('domready');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.position_changed
     */

    this.positionChanged = this._eventManager.getLazyEmitter('position_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.zindex_changed
     */

    this.zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapInfoWindow, [{
    key: "options",
    set: function set(options) {
      this._options.next(options || {});
    }
  }, {
    key: "position",
    set: function set(position) {
      this._position.next(position);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this13 = this;

      if (this._googleMap._isBrowser) {
        var combinedOptionsChanges = this._combineOptions();

        combinedOptionsChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function (options) {
          // Create the object outside the zone so its events don't trigger change detection.
          // We'll bring it back in inside the `MapEventManager` only for the events that the
          // user has subscribed to.
          _this13._ngZone.runOutsideAngular(function () {
            _this13.infoWindow = new google.maps.InfoWindow(options);
          });

          _this13._eventManager.setTarget(_this13.infoWindow);
        });

        this._watchForOptionsChanges();

        this._watchForPositionChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();

      this._destroy.next();

      this._destroy.complete(); // If no info window has been created on the server, we do not try closing it.
      // On the server, an info window cannot be created and this would cause errors.


      if (this.infoWindow) {
        this.close();
      }
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.close
     */

  }, {
    key: "close",
    value: function close() {
      this._assertInitialized();

      this.infoWindow.close();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getContent
     */

  }, {
    key: "getContent",
    value: function getContent() {
      this._assertInitialized();

      return this.infoWindow.getContent() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window
     * #InfoWindow.getPosition
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      this._assertInitialized();

      return this.infoWindow.getPosition() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow.getZIndex
     */

  }, {
    key: "getZIndex",
    value: function getZIndex() {
      this._assertInitialized();

      return this.infoWindow.getZIndex();
    }
    /**
     * Opens the MapInfoWindow using the provided anchor. If the anchor is not set,
     * then the position property of the options input is used instead.
     */

  }, {
    key: "open",
    value: function open(anchor, shouldFocus) {
      this._assertInitialized();

      var anchorObject = anchor ? anchor.getAnchor() : undefined; // Prevent the info window from initializing when trying to reopen on the same anchor.
      // Note that when the window is opened for the first time, the anchor will always be
      // undefined. If that's the case, we have to allow it to open in order to handle the
      // case where the window doesn't have an anchor, but is placed at a particular position.

      if (this.infoWindow.get('anchor') !== anchorObject || !anchorObject) {
        this._elementRef.nativeElement.style.display = ''; // The config is cast to `any`, because the internal typings are out of date.

        this.infoWindow.open({
          map: this._googleMap.googleMap,
          anchor: anchorObject,
          shouldFocus: shouldFocus
        });
      }
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      var _this14 = this;

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._options, this._position]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(function (_ref3) {
        var _ref4 = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 2),
            options = _ref4[0],
            position = _ref4[1];

        var combinedOptions = Object.assign(Object.assign({}, options), {
          position: position || options.position,
          content: _this14._elementRef.nativeElement
        });
        return combinedOptions;
      }));
    }
  }, {
    key: "_watchForOptionsChanges",
    value: function _watchForOptionsChanges() {
      var _this15 = this;

      this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroy)).subscribe(function (options) {
        _this15._assertInitialized();

        _this15.infoWindow.setOptions(options);
      });
    }
  }, {
    key: "_watchForPositionChanges",
    value: function _watchForPositionChanges() {
      var _this16 = this;

      this._position.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroy)).subscribe(function (position) {
        if (position) {
          _this16._assertInitialized();

          _this16.infoWindow.setPosition(position);
        }
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._googleMap.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }

        if (!this.infoWindow) {
          throw Error('Cannot interact with a Google Map Info Window before it has been ' + 'initialized. Please wait for the Info Window to load before trying to interact with ' + 'it.');
        }
      }
    }
  }]);

  return MapInfoWindow;
}();

MapInfoWindow.ɵfac = function MapInfoWindow_Factory(t) {
  return new (t || MapInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};

MapInfoWindow.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapInfoWindow,
  selectors: [["map-info-window"]],
  hostAttrs: [2, "display", "none"],
  inputs: {
    options: "options",
    position: "position"
  },
  outputs: {
    closeclick: "closeclick",
    contentChanged: "contentChanged",
    domready: "domready",
    positionChanged: "positionChanged",
    zindexChanged: "zindexChanged"
  },
  exportAs: ["mapInfoWindow"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapInfoWindow, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-info-window',
      exportAs: 'mapInfoWindow',
      host: {
        'style': 'display: none'
      }
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    closeclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    contentChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    domready: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    positionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    zindexChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps KML Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer
 */


var MapKmlLayer = /*#__PURE__*/function () {
  function MapKmlLayer(_map, _ngZone) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapKmlLayer);

    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this._url = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject('');
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.click
     */

    this.kmlClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/kml
     * #KmlLayer.defaultviewport_changed
     */

    this.defaultviewportChanged = this._eventManager.getLazyEmitter('defaultviewport_changed');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.status_changed
     */

    this.statusChanged = this._eventManager.getLazyEmitter('status_changed');
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapKmlLayer, [{
    key: "options",
    set: function set(options) {
      this._options.next(options || {});
    }
  }, {
    key: "url",
    set: function set(url) {
      this._url.next(url);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this17 = this;

      if (this._map._isBrowser) {
        this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function (options) {
          // Create the object outside the zone so its events don't trigger change detection.
          // We'll bring it back in inside the `MapEventManager` only for the events that the
          // user has subscribed to.
          _this17._ngZone.runOutsideAngular(function () {
            return _this17.kmlLayer = new google.maps.KmlLayer(options);
          });

          _this17._assertInitialized();

          _this17.kmlLayer.setMap(_this17._map.googleMap);

          _this17._eventManager.setTarget(_this17.kmlLayer);
        });

        this._watchForOptionsChanges();

        this._watchForUrlChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();

      this._destroyed.next();

      this._destroyed.complete();

      if (this.kmlLayer) {
        this.kmlLayer.setMap(null);
      }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getDefaultViewport
     */

  }, {
    key: "getDefaultViewport",
    value: function getDefaultViewport() {
      this._assertInitialized();

      return this.kmlLayer.getDefaultViewport();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getMetadata
     */

  }, {
    key: "getMetadata",
    value: function getMetadata() {
      this._assertInitialized();

      return this.kmlLayer.getMetadata();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getStatus
     */

  }, {
    key: "getStatus",
    value: function getStatus() {
      this._assertInitialized();

      return this.kmlLayer.getStatus();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getUrl
     */

  }, {
    key: "getUrl",
    value: function getUrl() {
      this._assertInitialized();

      return this.kmlLayer.getUrl();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/kml#KmlLayer.getZIndex
     */

  }, {
    key: "getZIndex",
    value: function getZIndex() {
      this._assertInitialized();

      return this.kmlLayer.getZIndex();
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._options, this._url]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(function (_ref5) {
        var _ref6 = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, 2),
            options = _ref6[0],
            url = _ref6[1];

        var combinedOptions = Object.assign(Object.assign({}, options), {
          url: url || options.url
        });
        return combinedOptions;
      }));
    }
  }, {
    key: "_watchForOptionsChanges",
    value: function _watchForOptionsChanges() {
      var _this18 = this;

      this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (options) {
        if (_this18.kmlLayer) {
          _this18._assertInitialized();

          _this18.kmlLayer.setOptions(options);
        }
      });
    }
  }, {
    key: "_watchForUrlChanges",
    value: function _watchForUrlChanges() {
      var _this19 = this;

      this._url.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (url) {
        if (url && _this19.kmlLayer) {
          _this19._assertInitialized();

          _this19.kmlLayer.setUrl(url);
        }
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._map.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }

        if (!this.kmlLayer) {
          throw Error('Cannot interact with a Google Map KmlLayer before it has been ' + 'initialized. Please wait for the KmlLayer to load before trying to interact with it.');
        }
      }
    }
  }]);

  return MapKmlLayer;
}();

MapKmlLayer.ɵfac = function MapKmlLayer_Factory(t) {
  return new (t || MapKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};

MapKmlLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapKmlLayer,
  selectors: [["map-kml-layer"]],
  inputs: {
    options: "options",
    url: "url"
  },
  outputs: {
    kmlClick: "kmlClick",
    defaultviewportChanged: "defaultviewportChanged",
    statusChanged: "statusChanged"
  },
  exportAs: ["mapKmlLayer"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapKmlLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-kml-layer',
      exportAs: 'mapKmlLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    url: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    kmlClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    defaultviewportChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    statusChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Default options for the Google Maps marker component. Displays a marker
 * at the Googleplex.
 */


var DEFAULT_MARKER_OPTIONS = {
  position: {
    lat: 37.421995,
    lng: -122.084092
  }
};
/**
 * Angular component that renders a Google Maps marker via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/marker
 */

var MapMarker = /*#__PURE__*/function () {
  function MapMarker(_googleMap, _ngZone) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapMarker);

    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.animation_changed
     */

    this.animationChanged = this._eventManager.getLazyEmitter('animation_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.click
     */

    this.mapClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.clickable_changed
     */

    this.clickableChanged = this._eventManager.getLazyEmitter('clickable_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.cursor_changed
     */

    this.cursorChanged = this._eventManager.getLazyEmitter('cursor_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dblclick
     */

    this.mapDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.drag
     */

    this.mapDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragend
     */

    this.mapDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.draggable_changed
     */

    this.draggableChanged = this._eventManager.getLazyEmitter('draggable_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.dragstart
     */

    this.mapDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.flat_changed
     */

    this.flatChanged = this._eventManager.getLazyEmitter('flat_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.icon_changed
     */

    this.iconChanged = this._eventManager.getLazyEmitter('icon_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mousedown
     */

    this.mapMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseout
     */

    this.mapMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseover
     */

    this.mapMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.mouseup
     */

    this.mapMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.position_changed
     */

    this.positionChanged = this._eventManager.getLazyEmitter('position_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.rightclick
     */

    this.mapRightclick = this._eventManager.getLazyEmitter('rightclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.shape_changed
     */

    this.shapeChanged = this._eventManager.getLazyEmitter('shape_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.title_changed
     */

    this.titleChanged = this._eventManager.getLazyEmitter('title_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.visible_changed
     */

    this.visibleChanged = this._eventManager.getLazyEmitter('visible_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.zindex_changed
     */

    this.zindexChanged = this._eventManager.getLazyEmitter('zindex_changed');
  }
  /**
   * Title of the marker.
   * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.title
   */


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapMarker, [{
    key: "title",
    set: function set(title) {
      this._title = title;
    }
    /**
     * Position of the marker. See:
     * developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.position
     */

  }, {
    key: "position",
    set: function set(position) {
      this._position = position;
    }
    /**
     * Label for the marker.
     * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.label
     */

  }, {
    key: "label",
    set: function set(label) {
      this._label = label;
    }
    /**
     * Whether the marker is clickable. See:
     * developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.clickable
     */

  }, {
    key: "clickable",
    set: function set(clickable) {
      this._clickable = clickable;
    }
    /**
     * Options used to configure the marker.
     * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions
     */

  }, {
    key: "options",
    set: function set(options) {
      this._options = options;
    }
    /**
     * Icon to be used for the marker.
     * See: https://developers.google.com/maps/documentation/javascript/reference/marker#Icon
     */

  }, {
    key: "icon",
    set: function set(icon) {
      this._icon = icon;
    }
    /**
     * Whether the marker is visible.
     * See: developers.google.com/maps/documentation/javascript/reference/marker#MarkerOptions.visible
     */

  }, {
    key: "visible",
    set: function set(value) {
      this._visible = value;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this20 = this;

      if (this._googleMap._isBrowser) {
        // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.
        this._ngZone.runOutsideAngular(function () {
          _this20.marker = new google.maps.Marker(_this20._combineOptions());
        });

        this._assertInitialized();

        this.marker.setMap(this._googleMap.googleMap);

        this._eventManager.setTarget(this.marker);
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var marker = this.marker,
          _title = this._title,
          _position = this._position,
          _label = this._label,
          _clickable = this._clickable,
          _icon = this._icon,
          _visible = this._visible;

      if (marker) {
        if (changes['options']) {
          marker.setOptions(this._combineOptions());
        }

        if (changes['title'] && _title !== undefined) {
          marker.setTitle(_title);
        }

        if (changes['position'] && _position) {
          marker.setPosition(_position);
        }

        if (changes['label'] && _label !== undefined) {
          marker.setLabel(_label);
        }

        if (changes['clickable'] && _clickable !== undefined) {
          marker.setClickable(_clickable);
        }

        if (changes['icon'] && _icon) {
          marker.setIcon(_icon);
        }

        if (changes['visible'] && _visible !== undefined) {
          marker.setVisible(_visible);
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();

      if (this.marker) {
        this.marker.setMap(null);
      }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getAnimation
     */

  }, {
    key: "getAnimation",
    value: function getAnimation() {
      this._assertInitialized();

      return this.marker.getAnimation() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getClickable
     */

  }, {
    key: "getClickable",
    value: function getClickable() {
      this._assertInitialized();

      return this.marker.getClickable();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getCursor
     */

  }, {
    key: "getCursor",
    value: function getCursor() {
      this._assertInitialized();

      return this.marker.getCursor() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getDraggable
     */

  }, {
    key: "getDraggable",
    value: function getDraggable() {
      this._assertInitialized();

      return !!this.marker.getDraggable();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getIcon
     */

  }, {
    key: "getIcon",
    value: function getIcon() {
      this._assertInitialized();

      return this.marker.getIcon() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getLabel
     */

  }, {
    key: "getLabel",
    value: function getLabel() {
      this._assertInitialized();

      return this.marker.getLabel() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getOpacity
     */

  }, {
    key: "getOpacity",
    value: function getOpacity() {
      this._assertInitialized();

      return this.marker.getOpacity() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getPosition
     */

  }, {
    key: "getPosition",
    value: function getPosition() {
      this._assertInitialized();

      return this.marker.getPosition() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getShape
     */

  }, {
    key: "getShape",
    value: function getShape() {
      this._assertInitialized();

      return this.marker.getShape() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getTitle
     */

  }, {
    key: "getTitle",
    value: function getTitle() {
      this._assertInitialized();

      return this.marker.getTitle() || null;
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getVisible
     */

  }, {
    key: "getVisible",
    value: function getVisible() {
      this._assertInitialized();

      return this.marker.getVisible();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/marker#Marker.getZIndex
     */

  }, {
    key: "getZIndex",
    value: function getZIndex() {
      this._assertInitialized();

      return this.marker.getZIndex() || null;
    }
    /** Gets the anchor point that can be used to attach other Google Maps objects. */

  }, {
    key: "getAnchor",
    value: function getAnchor() {
      this._assertInitialized();

      return this.marker;
    }
    /** Creates a combined options object using the passed-in options and the individual inputs. */

  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      var _a, _b;

      var options = this._options || DEFAULT_MARKER_OPTIONS;
      return Object.assign(Object.assign({}, options), {
        title: this._title || options.title,
        position: this._position || options.position,
        label: this._label || options.label,
        clickable: (_a = this._clickable) !== null && _a !== void 0 ? _a : options.clickable,
        map: this._googleMap.googleMap,
        icon: this._icon || options.icon,
        visible: (_b = this._visible) !== null && _b !== void 0 ? _b : options.visible
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._googleMap.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }

        if (!this.marker) {
          throw Error('Cannot interact with a Google Map Marker before it has been ' + 'initialized. Please wait for the Marker to load before trying to interact with it.');
        }
      }
    }
  }]);

  return MapMarker;
}();

MapMarker.ɵfac = function MapMarker_Factory(t) {
  return new (t || MapMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};

MapMarker.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapMarker,
  selectors: [["map-marker"]],
  inputs: {
    title: "title",
    position: "position",
    label: "label",
    clickable: "clickable",
    options: "options",
    icon: "icon",
    visible: "visible"
  },
  outputs: {
    animationChanged: "animationChanged",
    mapClick: "mapClick",
    clickableChanged: "clickableChanged",
    cursorChanged: "cursorChanged",
    mapDblclick: "mapDblclick",
    mapDrag: "mapDrag",
    mapDragend: "mapDragend",
    draggableChanged: "draggableChanged",
    mapDragstart: "mapDragstart",
    flatChanged: "flatChanged",
    iconChanged: "iconChanged",
    mapMousedown: "mapMousedown",
    mapMouseout: "mapMouseout",
    mapMouseover: "mapMouseover",
    mapMouseup: "mapMouseup",
    positionChanged: "positionChanged",
    mapRightclick: "mapRightclick",
    shapeChanged: "shapeChanged",
    titleChanged: "titleChanged",
    visibleChanged: "visibleChanged",
    zindexChanged: "zindexChanged"
  },
  exportAs: ["mapMarker"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapMarker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-marker',
      exportAs: 'mapMarker'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    clickable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    animationChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    clickableChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    cursorChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    draggableChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    flatChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    iconChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    positionChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    mapRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    shapeChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    titleChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    visibleChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    zindexChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/** Default options for a clusterer. */


var DEFAULT_CLUSTERER_OPTIONS = {};
/**
 * Angular component for implementing a Google Maps Marker Clusterer.
 *
 * See https://developers.google.com/maps/documentation/javascript/marker-clustering
 */

var MapMarkerClusterer = /*#__PURE__*/function () {
  function MapMarkerClusterer(_googleMap, _ngZone) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapMarkerClusterer);

    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
    this._currentMarkers = new Set();
    this._eventManager = new MapEventManager(this._ngZone);
    this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();

    this.ariaLabelFn = function () {
      return '';
    };
    /**
     * See
     * googlemaps.github.io/v3-utility-library/modules/
     * _google_markerclustererplus.html#clusteringbegin
     */


    this.clusteringbegin = this._eventManager.getLazyEmitter('clusteringbegin');
    /**
     * See
     * googlemaps.github.io/v3-utility-library/modules/_google_markerclustererplus.html#clusteringend
     */

    this.clusteringend = this._eventManager.getLazyEmitter('clusteringend');
    /** Emits when a cluster has been clicked. */

    this.clusterClick = this._eventManager.getLazyEmitter('click');
    this._canInitialize = this._googleMap._isBrowser;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapMarkerClusterer, [{
    key: "averageCenter",
    set: function set(averageCenter) {
      this._averageCenter = averageCenter;
    }
  }, {
    key: "batchSizeIE",
    set: function set(batchSizeIE) {
      this._batchSizeIE = batchSizeIE;
    }
  }, {
    key: "calculator",
    set: function set(calculator) {
      this._calculator = calculator;
    }
  }, {
    key: "clusterClass",
    set: function set(clusterClass) {
      this._clusterClass = clusterClass;
    }
  }, {
    key: "enableRetinaIcons",
    set: function set(enableRetinaIcons) {
      this._enableRetinaIcons = enableRetinaIcons;
    }
  }, {
    key: "gridSize",
    set: function set(gridSize) {
      this._gridSize = gridSize;
    }
  }, {
    key: "ignoreHidden",
    set: function set(ignoreHidden) {
      this._ignoreHidden = ignoreHidden;
    }
  }, {
    key: "imageExtension",
    set: function set(imageExtension) {
      this._imageExtension = imageExtension;
    }
  }, {
    key: "imagePath",
    set: function set(imagePath) {
      this._imagePath = imagePath;
    }
  }, {
    key: "imageSizes",
    set: function set(imageSizes) {
      this._imageSizes = imageSizes;
    }
  }, {
    key: "maxZoom",
    set: function set(maxZoom) {
      this._maxZoom = maxZoom;
    }
  }, {
    key: "minimumClusterSize",
    set: function set(minimumClusterSize) {
      this._minimumClusterSize = minimumClusterSize;
    }
  }, {
    key: "styles",
    set: function set(styles) {
      this._styles = styles;
    }
  }, {
    key: "title",
    set: function set(title) {
      this._title = title;
    }
  }, {
    key: "zIndex",
    set: function set(zIndex) {
      this._zIndex = zIndex;
    }
  }, {
    key: "zoomOnClick",
    set: function set(zoomOnClick) {
      this._zoomOnClick = zoomOnClick;
    }
  }, {
    key: "options",
    set: function set(options) {
      this._options = options;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this21 = this;

      if (this._canInitialize) {
        var clustererWindow = window;

        if (!clustererWindow.MarkerClusterer && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw Error('MarkerClusterer class not found, cannot construct a marker cluster. ' + 'Please install the MarkerClustererPlus library: ' + 'https://github.com/googlemaps/js-markerclustererplus');
        } // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.


        this._ngZone.runOutsideAngular(function () {
          _this21.markerClusterer = new MarkerClusterer(_this21._googleMap.googleMap, [], _this21._combineOptions());
        });

        this._assertInitialized();

        this._eventManager.setTarget(this.markerClusterer);
      }
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      if (this._canInitialize) {
        this._watchForMarkerChanges();
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var clusterer = this.markerClusterer,
          ariaLabelFn = this.ariaLabelFn,
          _averageCenter = this._averageCenter,
          _batchSizeIE = this._batchSizeIE,
          _calculator = this._calculator,
          _styles = this._styles,
          _clusterClass = this._clusterClass,
          _enableRetinaIcons = this._enableRetinaIcons,
          _gridSize = this._gridSize,
          _ignoreHidden = this._ignoreHidden,
          _imageExtension = this._imageExtension,
          _imagePath = this._imagePath,
          _imageSizes = this._imageSizes,
          _maxZoom = this._maxZoom,
          _minimumClusterSize = this._minimumClusterSize,
          _title = this._title,
          _zIndex = this._zIndex,
          _zoomOnClick = this._zoomOnClick;

      if (clusterer) {
        if (changes['options']) {
          clusterer.setOptions(this._combineOptions());
        }

        if (changes['ariaLabelFn']) {
          clusterer.ariaLabelFn = ariaLabelFn;
        }

        if (changes['averageCenter'] && _averageCenter !== undefined) {
          clusterer.setAverageCenter(_averageCenter);
        }

        if (changes['batchSizeIE'] && _batchSizeIE !== undefined) {
          clusterer.setBatchSizeIE(_batchSizeIE);
        }

        if (changes['calculator'] && !!_calculator) {
          clusterer.setCalculator(_calculator);
        }

        if (changes['clusterClass'] && _clusterClass !== undefined) {
          clusterer.setClusterClass(_clusterClass);
        }

        if (changes['enableRetinaIcons'] && _enableRetinaIcons !== undefined) {
          clusterer.setEnableRetinaIcons(_enableRetinaIcons);
        }

        if (changes['gridSize'] && _gridSize !== undefined) {
          clusterer.setGridSize(_gridSize);
        }

        if (changes['ignoreHidden'] && _ignoreHidden !== undefined) {
          clusterer.setIgnoreHidden(_ignoreHidden);
        }

        if (changes['imageExtension'] && _imageExtension !== undefined) {
          clusterer.setImageExtension(_imageExtension);
        }

        if (changes['imagePath'] && _imagePath !== undefined) {
          clusterer.setImagePath(_imagePath);
        }

        if (changes['imageSizes'] && _imageSizes) {
          clusterer.setImageSizes(_imageSizes);
        }

        if (changes['maxZoom'] && _maxZoom !== undefined) {
          clusterer.setMaxZoom(_maxZoom);
        }

        if (changes['minimumClusterSize'] && _minimumClusterSize !== undefined) {
          clusterer.setMinimumClusterSize(_minimumClusterSize);
        }

        if (changes['styles'] && _styles) {
          clusterer.setStyles(_styles);
        }

        if (changes['title'] && _title !== undefined) {
          clusterer.setTitle(_title);
        }

        if (changes['zIndex'] && _zIndex !== undefined) {
          clusterer.setZIndex(_zIndex);
        }

        if (changes['zoomOnClick'] && _zoomOnClick !== undefined) {
          clusterer.setZoomOnClick(_zoomOnClick);
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroy.next();

      this._destroy.complete();

      this._eventManager.destroy();

      if (this.markerClusterer) {
        this.markerClusterer.setMap(null);
      }
    }
  }, {
    key: "fitMapToMarkers",
    value: function fitMapToMarkers(padding) {
      this._assertInitialized();

      this.markerClusterer.fitMapToMarkers(padding);
    }
  }, {
    key: "getAverageCenter",
    value: function getAverageCenter() {
      this._assertInitialized();

      return this.markerClusterer.getAverageCenter();
    }
  }, {
    key: "getBatchSizeIE",
    value: function getBatchSizeIE() {
      this._assertInitialized();

      return this.markerClusterer.getBatchSizeIE();
    }
  }, {
    key: "getCalculator",
    value: function getCalculator() {
      this._assertInitialized();

      return this.markerClusterer.getCalculator();
    }
  }, {
    key: "getClusterClass",
    value: function getClusterClass() {
      this._assertInitialized();

      return this.markerClusterer.getClusterClass();
    }
  }, {
    key: "getClusters",
    value: function getClusters() {
      this._assertInitialized();

      return this.markerClusterer.getClusters();
    }
  }, {
    key: "getEnableRetinaIcons",
    value: function getEnableRetinaIcons() {
      this._assertInitialized();

      return this.markerClusterer.getEnableRetinaIcons();
    }
  }, {
    key: "getGridSize",
    value: function getGridSize() {
      this._assertInitialized();

      return this.markerClusterer.getGridSize();
    }
  }, {
    key: "getIgnoreHidden",
    value: function getIgnoreHidden() {
      this._assertInitialized();

      return this.markerClusterer.getIgnoreHidden();
    }
  }, {
    key: "getImageExtension",
    value: function getImageExtension() {
      this._assertInitialized();

      return this.markerClusterer.getImageExtension();
    }
  }, {
    key: "getImagePath",
    value: function getImagePath() {
      this._assertInitialized();

      return this.markerClusterer.getImagePath();
    }
  }, {
    key: "getImageSizes",
    value: function getImageSizes() {
      this._assertInitialized();

      return this.markerClusterer.getImageSizes();
    }
  }, {
    key: "getMaxZoom",
    value: function getMaxZoom() {
      this._assertInitialized();

      return this.markerClusterer.getMaxZoom();
    }
  }, {
    key: "getMinimumClusterSize",
    value: function getMinimumClusterSize() {
      this._assertInitialized();

      return this.markerClusterer.getMinimumClusterSize();
    }
  }, {
    key: "getStyles",
    value: function getStyles() {
      this._assertInitialized();

      return this.markerClusterer.getStyles();
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      this._assertInitialized();

      return this.markerClusterer.getTitle();
    }
  }, {
    key: "getTotalClusters",
    value: function getTotalClusters() {
      this._assertInitialized();

      return this.markerClusterer.getTotalClusters();
    }
  }, {
    key: "getTotalMarkers",
    value: function getTotalMarkers() {
      this._assertInitialized();

      return this.markerClusterer.getTotalMarkers();
    }
  }, {
    key: "getZIndex",
    value: function getZIndex() {
      this._assertInitialized();

      return this.markerClusterer.getZIndex();
    }
  }, {
    key: "getZoomOnClick",
    value: function getZoomOnClick() {
      this._assertInitialized();

      return this.markerClusterer.getZoomOnClick();
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;

      var options = this._options || DEFAULT_CLUSTERER_OPTIONS;
      return Object.assign(Object.assign({}, options), {
        ariaLabelFn: (_a = this.ariaLabelFn) !== null && _a !== void 0 ? _a : options.ariaLabelFn,
        averageCenter: (_b = this._averageCenter) !== null && _b !== void 0 ? _b : options.averageCenter,
        batchSize: (_c = this.batchSize) !== null && _c !== void 0 ? _c : options.batchSize,
        batchSizeIE: (_d = this._batchSizeIE) !== null && _d !== void 0 ? _d : options.batchSizeIE,
        calculator: (_e = this._calculator) !== null && _e !== void 0 ? _e : options.calculator,
        clusterClass: (_f = this._clusterClass) !== null && _f !== void 0 ? _f : options.clusterClass,
        enableRetinaIcons: (_g = this._enableRetinaIcons) !== null && _g !== void 0 ? _g : options.enableRetinaIcons,
        gridSize: (_h = this._gridSize) !== null && _h !== void 0 ? _h : options.gridSize,
        ignoreHidden: (_j = this._ignoreHidden) !== null && _j !== void 0 ? _j : options.ignoreHidden,
        imageExtension: (_k = this._imageExtension) !== null && _k !== void 0 ? _k : options.imageExtension,
        imagePath: (_l = this._imagePath) !== null && _l !== void 0 ? _l : options.imagePath,
        imageSizes: (_m = this._imageSizes) !== null && _m !== void 0 ? _m : options.imageSizes,
        maxZoom: (_o = this._maxZoom) !== null && _o !== void 0 ? _o : options.maxZoom,
        minimumClusterSize: (_p = this._minimumClusterSize) !== null && _p !== void 0 ? _p : options.minimumClusterSize,
        styles: (_q = this._styles) !== null && _q !== void 0 ? _q : options.styles,
        title: (_r = this._title) !== null && _r !== void 0 ? _r : options.title,
        zIndex: (_s = this._zIndex) !== null && _s !== void 0 ? _s : options.zIndex,
        zoomOnClick: (_t = this._zoomOnClick) !== null && _t !== void 0 ? _t : options.zoomOnClick
      });
    }
  }, {
    key: "_watchForMarkerChanges",
    value: function _watchForMarkerChanges() {
      var _this22 = this;

      this._assertInitialized();

      var initialMarkers = [];

      var _iterator2 = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this._getInternalMarkers(this._markers.toArray())),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var marker = _step2.value;

          this._currentMarkers.add(marker);

          initialMarkers.push(marker);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      this.markerClusterer.addMarkers(initialMarkers);

      this._markers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroy)).subscribe(function (markerComponents) {
        _this22._assertInitialized();

        var newMarkers = new Set(_this22._getInternalMarkers(markerComponents));
        var markersToAdd = [];
        var markersToRemove = [];

        for (var _i = 0, _Array$from = Array.from(newMarkers); _i < _Array$from.length; _i++) {
          var marker = _Array$from[_i];

          if (!_this22._currentMarkers.has(marker)) {
            _this22._currentMarkers.add(marker);

            markersToAdd.push(marker);
          }
        }

        for (var _i2 = 0, _Array$from2 = Array.from(_this22._currentMarkers); _i2 < _Array$from2.length; _i2++) {
          var _marker = _Array$from2[_i2];

          if (!newMarkers.has(_marker)) {
            markersToRemove.push(_marker);
          }
        }

        _this22.markerClusterer.addMarkers(markersToAdd, true);

        _this22.markerClusterer.removeMarkers(markersToRemove, true);

        _this22.markerClusterer.repaint();

        for (var _i3 = 0, _markersToRemove = markersToRemove; _i3 < _markersToRemove.length; _i3++) {
          var _marker2 = _markersToRemove[_i3];

          _this22._currentMarkers.delete(_marker2);
        }
      });
    }
  }, {
    key: "_getInternalMarkers",
    value: function _getInternalMarkers(markers) {
      return markers.filter(function (markerComponent) {
        return !!markerComponent.marker;
      }).map(function (markerComponent) {
        return markerComponent.marker;
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._googleMap.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }

        if (!this.markerClusterer) {
          throw Error('Cannot interact with a MarkerClusterer before it has been initialized. ' + 'Please wait for the MarkerClusterer to load before trying to interact with it.');
        }
      }
    }
  }]);

  return MapMarkerClusterer;
}();

MapMarkerClusterer.ɵfac = function MapMarkerClusterer_Factory(t) {
  return new (t || MapMarkerClusterer)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};

MapMarkerClusterer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: MapMarkerClusterer,
  selectors: [["map-marker-clusterer"]],
  contentQueries: function MapMarkerClusterer_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, MapMarker, 5);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx._markers = _t);
    }
  },
  inputs: {
    ariaLabelFn: "ariaLabelFn",
    averageCenter: "averageCenter",
    batchSize: "batchSize",
    batchSizeIE: "batchSizeIE",
    calculator: "calculator",
    clusterClass: "clusterClass",
    enableRetinaIcons: "enableRetinaIcons",
    gridSize: "gridSize",
    ignoreHidden: "ignoreHidden",
    imageExtension: "imageExtension",
    imagePath: "imagePath",
    imageSizes: "imageSizes",
    maxZoom: "maxZoom",
    minimumClusterSize: "minimumClusterSize",
    styles: "styles",
    title: "title",
    zIndex: "zIndex",
    zoomOnClick: "zoomOnClick",
    options: "options"
  },
  outputs: {
    clusteringbegin: "clusteringbegin",
    clusteringend: "clusteringend",
    clusterClick: "clusterClick"
  },
  exportAs: ["mapMarkerClusterer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MapMarkerClusterer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapMarkerClusterer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component,
    args: [{
      selector: 'map-marker-clusterer',
      exportAs: 'mapMarkerClusterer',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectionStrategy.OnPush,
      template: '<ng-content></ng-content>',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewEncapsulation.None
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    ariaLabelFn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    averageCenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    batchSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    batchSizeIE: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    calculator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    clusterClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    enableRetinaIcons: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    gridSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    ignoreHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    imageExtension: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    imagePath: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    imageSizes: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    maxZoom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    minimumClusterSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    zIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    zoomOnClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    clusteringbegin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    clusteringend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    clusterClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    _markers: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ContentChildren,
      args: [MapMarker, {
        descendants: true
      }]
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Polygon via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon
 */


var MapPolygon = /*#__PURE__*/function () {
  function MapPolygon(_map, _ngZone) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapPolygon);

    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this._paths = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.click
     */

    this.polygonClick = this._eventManager.getLazyEmitter('click');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dblclick
     */

    this.polygonDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.drag
     */

    this.polygonDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragend
     */

    this.polygonDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.dragstart
     */

    this.polygonDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousedown
     */

    this.polygonMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mousemove
     */

    this.polygonMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseout
     */

    this.polygonMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseover
     */

    this.polygonMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.mouseup
     */

    this.polygonMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.rightclick
     */

    this.polygonRightclick = this._eventManager.getLazyEmitter('rightclick');
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapPolygon, [{
    key: "options",
    set: function set(options) {
      this._options.next(options || {});
    }
  }, {
    key: "paths",
    set: function set(paths) {
      this._paths.next(paths);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this23 = this;

      if (this._map._isBrowser) {
        this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function (options) {
          // Create the object outside the zone so its events don't trigger change detection.
          // We'll bring it back in inside the `MapEventManager` only for the events that the
          // user has subscribed to.
          _this23._ngZone.runOutsideAngular(function () {
            _this23.polygon = new google.maps.Polygon(options);
          });

          _this23._assertInitialized();

          _this23.polygon.setMap(_this23._map.googleMap);

          _this23._eventManager.setTarget(_this23.polygon);
        });

        this._watchForOptionsChanges();

        this._watchForPathChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();

      this._destroyed.next();

      this._destroyed.complete();

      if (this.polygon) {
        this.polygon.setMap(null);
      }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getDraggable
     */

  }, {
    key: "getDraggable",
    value: function getDraggable() {
      this._assertInitialized();

      return this.polygon.getDraggable();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getEditable
     */

  }, {
    key: "getEditable",
    value: function getEditable() {
      this._assertInitialized();

      return this.polygon.getEditable();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPath
     */

  }, {
    key: "getPath",
    value: function getPath() {
      this._assertInitialized();

      return this.polygon.getPath();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getPaths
     */

  }, {
    key: "getPaths",
    value: function getPaths() {
      this._assertInitialized();

      return this.polygon.getPaths();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polygon.getVisible
     */

  }, {
    key: "getVisible",
    value: function getVisible() {
      this._assertInitialized();

      return this.polygon.getVisible();
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._options, this._paths]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(function (_ref7) {
        var _ref8 = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref7, 2),
            options = _ref8[0],
            paths = _ref8[1];

        var combinedOptions = Object.assign(Object.assign({}, options), {
          paths: paths || options.paths
        });
        return combinedOptions;
      }));
    }
  }, {
    key: "_watchForOptionsChanges",
    value: function _watchForOptionsChanges() {
      var _this24 = this;

      this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (options) {
        _this24._assertInitialized();

        _this24.polygon.setOptions(options);
      });
    }
  }, {
    key: "_watchForPathChanges",
    value: function _watchForPathChanges() {
      var _this25 = this;

      this._paths.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (paths) {
        if (paths) {
          _this25._assertInitialized();

          _this25.polygon.setPaths(paths);
        }
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._map.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }

        if (!this.polygon) {
          throw Error('Cannot interact with a Google Map Polygon before it has been ' + 'initialized. Please wait for the Polygon to load before trying to interact with it.');
        }
      }
    }
  }]);

  return MapPolygon;
}();

MapPolygon.ɵfac = function MapPolygon_Factory(t) {
  return new (t || MapPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};

MapPolygon.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapPolygon,
  selectors: [["map-polygon"]],
  inputs: {
    options: "options",
    paths: "paths"
  },
  outputs: {
    polygonClick: "polygonClick",
    polygonDblclick: "polygonDblclick",
    polygonDrag: "polygonDrag",
    polygonDragend: "polygonDragend",
    polygonDragstart: "polygonDragstart",
    polygonMousedown: "polygonMousedown",
    polygonMousemove: "polygonMousemove",
    polygonMouseout: "polygonMouseout",
    polygonMouseover: "polygonMouseover",
    polygonMouseup: "polygonMouseup",
    polygonRightclick: "polygonRightclick"
  },
  exportAs: ["mapPolygon"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapPolygon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-polygon',
      exportAs: 'mapPolygon'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    paths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    polygonClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polygonRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Polyline via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline
 */


var MapPolyline = /*#__PURE__*/function () {
  function MapPolyline(_map, _ngZone) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapPolyline);

    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this._path = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.click
     */

    this.polylineClick = this._eventManager.getLazyEmitter('click');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dblclick
     */

    this.polylineDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.drag
     */

    this.polylineDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragend
     */

    this.polylineDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.dragstart
     */

    this.polylineDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousedown
     */

    this.polylineMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mousemove
     */

    this.polylineMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseout
     */

    this.polylineMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseover
     */

    this.polylineMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.mouseup
     */

    this.polylineMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.rightclick
     */

    this.polylineRightclick = this._eventManager.getLazyEmitter('rightclick');
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapPolyline, [{
    key: "options",
    set: function set(options) {
      this._options.next(options || {});
    }
  }, {
    key: "path",
    set: function set(path) {
      this._path.next(path);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this26 = this;

      if (this._map._isBrowser) {
        this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function (options) {
          // Create the object outside the zone so its events don't trigger change detection.
          // We'll bring it back in inside the `MapEventManager` only for the events that the
          // user has subscribed to.
          _this26._ngZone.runOutsideAngular(function () {
            return _this26.polyline = new google.maps.Polyline(options);
          });

          _this26._assertInitialized();

          _this26.polyline.setMap(_this26._map.googleMap);

          _this26._eventManager.setTarget(_this26.polyline);
        });

        this._watchForOptionsChanges();

        this._watchForPathChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();

      this._destroyed.next();

      this._destroyed.complete();

      if (this.polyline) {
        this.polyline.setMap(null);
      }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getDraggable
     */

  }, {
    key: "getDraggable",
    value: function getDraggable() {
      this._assertInitialized();

      return this.polyline.getDraggable();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getEditable
     */

  }, {
    key: "getEditable",
    value: function getEditable() {
      this._assertInitialized();

      return this.polyline.getEditable();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getPath
     */

  }, {
    key: "getPath",
    value: function getPath() {
      this._assertInitialized();

      return this.polyline.getPath();
    }
    /**
     * See developers.google.com/maps/documentation/javascript/reference/polygon#Polyline.getVisible
     */

  }, {
    key: "getVisible",
    value: function getVisible() {
      this._assertInitialized();

      return this.polyline.getVisible();
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._options, this._path]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(function (_ref9) {
        var _ref10 = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref9, 2),
            options = _ref10[0],
            path = _ref10[1];

        var combinedOptions = Object.assign(Object.assign({}, options), {
          path: path || options.path
        });
        return combinedOptions;
      }));
    }
  }, {
    key: "_watchForOptionsChanges",
    value: function _watchForOptionsChanges() {
      var _this27 = this;

      this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (options) {
        _this27._assertInitialized();

        _this27.polyline.setOptions(options);
      });
    }
  }, {
    key: "_watchForPathChanges",
    value: function _watchForPathChanges() {
      var _this28 = this;

      this._path.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (path) {
        if (path) {
          _this28._assertInitialized();

          _this28.polyline.setPath(path);
        }
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._map.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }

        if (!this.polyline) {
          throw Error('Cannot interact with a Google Map Polyline before it has been ' + 'initialized. Please wait for the Polyline to load before trying to interact with it.');
        }
      }
    }
  }]);

  return MapPolyline;
}();

MapPolyline.ɵfac = function MapPolyline_Factory(t) {
  return new (t || MapPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};

MapPolyline.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapPolyline,
  selectors: [["map-polyline"]],
  inputs: {
    options: "options",
    path: "path"
  },
  outputs: {
    polylineClick: "polylineClick",
    polylineDblclick: "polylineDblclick",
    polylineDrag: "polylineDrag",
    polylineDragend: "polylineDragend",
    polylineDragstart: "polylineDragstart",
    polylineMousedown: "polylineMousedown",
    polylineMousemove: "polylineMousemove",
    polylineMouseout: "polylineMouseout",
    polylineMouseover: "polylineMouseover",
    polylineMouseup: "polylineMouseup",
    polylineRightclick: "polylineRightclick"
  },
  exportAs: ["mapPolyline"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapPolyline, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-polyline',
      exportAs: 'mapPolyline'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    path: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    polylineClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    polylineRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Rectangle via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle
 */


var MapRectangle = /*#__PURE__*/function () {
  function MapRectangle(_map, _ngZone) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapRectangle);

    this._map = _map;
    this._ngZone = _ngZone;
    this._eventManager = new MapEventManager(this._ngZone);
    this._options = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject({});
    this._bounds = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(undefined);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.boundsChanged
     */

    this.boundsChanged = this._eventManager.getLazyEmitter('bounds_changed');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.click
     */

    this.rectangleClick = this._eventManager.getLazyEmitter('click');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dblclick
     */

    this.rectangleDblclick = this._eventManager.getLazyEmitter('dblclick');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.drag
     */

    this.rectangleDrag = this._eventManager.getLazyEmitter('drag');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragend
     */

    this.rectangleDragend = this._eventManager.getLazyEmitter('dragend');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.dragstart
     */

    this.rectangleDragstart = this._eventManager.getLazyEmitter('dragstart');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousedown
     */

    this.rectangleMousedown = this._eventManager.getLazyEmitter('mousedown');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mousemove
     */

    this.rectangleMousemove = this._eventManager.getLazyEmitter('mousemove');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseout
     */

    this.rectangleMouseout = this._eventManager.getLazyEmitter('mouseout');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseover
     */

    this.rectangleMouseover = this._eventManager.getLazyEmitter('mouseover');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.mouseup
     */

    this.rectangleMouseup = this._eventManager.getLazyEmitter('mouseup');
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.rightclick
     */

    this.rectangleRightclick = this._eventManager.getLazyEmitter('rightclick');
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapRectangle, [{
    key: "options",
    set: function set(options) {
      this._options.next(options || {});
    }
  }, {
    key: "bounds",
    set: function set(bounds) {
      this._bounds.next(bounds);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this29 = this;

      if (this._map._isBrowser) {
        this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function (options) {
          // Create the object outside the zone so its events don't trigger change detection.
          // We'll bring it back in inside the `MapEventManager` only for the events that the
          // user has subscribed to.
          _this29._ngZone.runOutsideAngular(function () {
            _this29.rectangle = new google.maps.Rectangle(options);
          });

          _this29._assertInitialized();

          _this29.rectangle.setMap(_this29._map.googleMap);

          _this29._eventManager.setTarget(_this29.rectangle);
        });

        this._watchForOptionsChanges();

        this._watchForBoundsChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._eventManager.destroy();

      this._destroyed.next();

      this._destroyed.complete();

      if (this.rectangle) {
        this.rectangle.setMap(null);
      }
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getBounds
     */

  }, {
    key: "getBounds",
    value: function getBounds() {
      this._assertInitialized();

      return this.rectangle.getBounds();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getDraggable
     */

  }, {
    key: "getDraggable",
    value: function getDraggable() {
      this._assertInitialized();

      return this.rectangle.getDraggable();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getEditable
     */

  }, {
    key: "getEditable",
    value: function getEditable() {
      this._assertInitialized();

      return this.rectangle.getEditable();
    }
    /**
     * See
     * developers.google.com/maps/documentation/javascript/reference/polygon#Rectangle.getVisible
     */

  }, {
    key: "getVisible",
    value: function getVisible() {
      this._assertInitialized();

      return this.rectangle.getVisible();
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this._options, this._bounds]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(function (_ref11) {
        var _ref12 = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref11, 2),
            options = _ref12[0],
            bounds = _ref12[1];

        var combinedOptions = Object.assign(Object.assign({}, options), {
          bounds: bounds || options.bounds
        });
        return combinedOptions;
      }));
    }
  }, {
    key: "_watchForOptionsChanges",
    value: function _watchForOptionsChanges() {
      var _this30 = this;

      this._options.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (options) {
        _this30._assertInitialized();

        _this30.rectangle.setOptions(options);
      });
    }
  }, {
    key: "_watchForBoundsChanges",
    value: function _watchForBoundsChanges() {
      var _this31 = this;

      this._bounds.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (bounds) {
        if (bounds) {
          _this31._assertInitialized();

          _this31.rectangle.setBounds(bounds);
        }
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._map.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }

        if (!this.rectangle) {
          throw Error('Cannot interact with a Google Map Rectangle before it has been initialized. ' + 'Please wait for the Rectangle to load before trying to interact with it.');
        }
      }
    }
  }]);

  return MapRectangle;
}();

MapRectangle.ɵfac = function MapRectangle_Factory(t) {
  return new (t || MapRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};

MapRectangle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapRectangle,
  selectors: [["map-rectangle"]],
  inputs: {
    options: "options",
    bounds: "bounds"
  },
  outputs: {
    boundsChanged: "boundsChanged",
    rectangleClick: "rectangleClick",
    rectangleDblclick: "rectangleDblclick",
    rectangleDrag: "rectangleDrag",
    rectangleDragend: "rectangleDragend",
    rectangleDragstart: "rectangleDragstart",
    rectangleMousedown: "rectangleMousedown",
    rectangleMousemove: "rectangleMousemove",
    rectangleMouseout: "rectangleMouseout",
    rectangleMouseover: "rectangleMouseover",
    rectangleMouseup: "rectangleMouseup",
    rectangleRightclick: "rectangleRightclick"
  },
  exportAs: ["mapRectangle"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapRectangle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-rectangle',
      exportAs: 'mapRectangle'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    bounds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    boundsChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleDblclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleDrag: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleDragend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleDragstart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleMousemove: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleMouseout: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleMouseover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleMouseup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }],
    rectangleRightclick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Output
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Traffic Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#TrafficLayer
 */


var MapTrafficLayer = /*#__PURE__*/function () {
  function MapTrafficLayer(_map, _ngZone) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapTrafficLayer);

    this._map = _map;
    this._ngZone = _ngZone;
    this._autoRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(true);
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
  }
  /**
   * Whether the traffic layer refreshes with updated information automatically.
   */


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapTrafficLayer, [{
    key: "autoRefresh",
    set: function set(autoRefresh) {
      this._autoRefresh.next(autoRefresh);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this32 = this;

      if (this._map._isBrowser) {
        this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.take)(1)).subscribe(function (options) {
          // Create the object outside the zone so its events don't trigger change detection.
          _this32._ngZone.runOutsideAngular(function () {
            _this32.trafficLayer = new google.maps.TrafficLayer(options);
          });

          _this32._assertInitialized();

          _this32.trafficLayer.setMap(_this32._map.googleMap);
        });

        this._watchForAutoRefreshChanges();
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyed.next();

      this._destroyed.complete();

      if (this.trafficLayer) {
        this.trafficLayer.setMap(null);
      }
    }
  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      return this._autoRefresh.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.map)(function (autoRefresh) {
        var combinedOptions = {
          autoRefresh: autoRefresh
        };
        return combinedOptions;
      }));
    }
  }, {
    key: "_watchForAutoRefreshChanges",
    value: function _watchForAutoRefreshChanges() {
      var _this33 = this;

      this._combineOptions().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.takeUntil)(this._destroyed)).subscribe(function (options) {
        _this33._assertInitialized();

        _this33.trafficLayer.setOptions(options);
      });
    }
  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (!this._map.googleMap) {
        throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
      }

      if (!this.trafficLayer) {
        throw Error('Cannot interact with a Google Map Traffic Layer before it has been initialized. ' + 'Please wait for the Traffic Layer to load before trying to interact with it.');
      }
    }
  }]);

  return MapTrafficLayer;
}();

MapTrafficLayer.ɵfac = function MapTrafficLayer_Factory(t) {
  return new (t || MapTrafficLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};

MapTrafficLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapTrafficLayer,
  selectors: [["map-traffic-layer"]],
  inputs: {
    autoRefresh: "autoRefresh"
  },
  exportAs: ["mapTrafficLayer"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapTrafficLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-traffic-layer',
      exportAs: 'mapTrafficLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    autoRefresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }]
  });
})(); /// <reference types="google.maps" />

/**
 * Angular component that renders a Google Maps Transit Layer via the Google Maps JavaScript API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/map#TransitLayer
 */


var MapTransitLayer = /*#__PURE__*/function (_MapBaseLayer2) {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_1__["default"])(MapTransitLayer, _MapBaseLayer2);

  var _super2 = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(MapTransitLayer);

  function MapTransitLayer() {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapTransitLayer);

    return _super2.apply(this, arguments);
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapTransitLayer, [{
    key: "_initializeObject",
    value: function _initializeObject() {
      this.transitLayer = new google.maps.TransitLayer();
    }
  }, {
    key: "_setMap",
    value: function _setMap() {
      this._assertLayerInitialized();

      this.transitLayer.setMap(this._map.googleMap);
    }
  }, {
    key: "_unsetMap",
    value: function _unsetMap() {
      if (this.transitLayer) {
        this.transitLayer.setMap(null);
      }
    }
  }, {
    key: "_assertLayerInitialized",
    value: function _assertLayerInitialized() {
      if (!this.transitLayer) {
        throw Error('Cannot interact with a Google Map Transit Layer before it has been initialized. ' + 'Please wait for the Transit Layer to load before trying to interact with it.');
      }
    }
  }]);

  return MapTransitLayer;
}(MapBaseLayer);

MapTransitLayer.ɵfac = /* @__PURE__ */function () {
  var ɵMapTransitLayer_BaseFactory;
  return function MapTransitLayer_Factory(t) {
    return (ɵMapTransitLayer_BaseFactory || (ɵMapTransitLayer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](MapTransitLayer)))(t || MapTransitLayer);
  };
}();

MapTransitLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapTransitLayer,
  selectors: [["map-transit-layer"]],
  exportAs: ["mapTransitLayer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapTransitLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-transit-layer',
      exportAs: 'mapTransitLayer'
    }]
  }], null, null);
})(); /// <reference types="google.maps" />

/**
 * Angular directive that renders a Google Maps heatmap via the Google Maps JavaScript API.
 *
 * See: https://developers.google.com/maps/documentation/javascript/reference/visualization
 */


var MapHeatmapLayer = /*#__PURE__*/function () {
  function MapHeatmapLayer(_googleMap, _ngZone) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapHeatmapLayer);

    this._googleMap = _googleMap;
    this._ngZone = _ngZone;
  }
  /**
   * Data shown on the heatmap.
   * See: https://developers.google.com/maps/documentation/javascript/reference/visualization
   */


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapHeatmapLayer, [{
    key: "data",
    set: function set(data) {
      this._data = data;
    }
    /**
     * Options used to configure the heatmap. See:
     * developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayerOptions
     */

  }, {
    key: "options",
    set: function set(options) {
      this._options = options;
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this34 = this;

      var _a, _b;

      if (this._googleMap._isBrowser) {
        if (!((_b = (_a = window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.visualization) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw Error('Namespace `google.maps.visualization` not found, cannot construct heatmap. ' + 'Please install the Google Maps JavaScript API with the "visualization" library: ' + 'https://developers.google.com/maps/documentation/javascript/visualization');
        } // Create the object outside the zone so its events don't trigger change detection.
        // We'll bring it back in inside the `MapEventManager` only for the events that the
        // user has subscribed to.


        this._ngZone.runOutsideAngular(function () {
          _this34.heatmap = new google.maps.visualization.HeatmapLayer(_this34._combineOptions());
        });

        this._assertInitialized();

        this.heatmap.setMap(this._googleMap.googleMap);
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      var _data = this._data,
          heatmap = this.heatmap;

      if (heatmap) {
        if (changes['options']) {
          heatmap.setOptions(this._combineOptions());
        }

        if (changes['data'] && _data !== undefined) {
          heatmap.setData(this._normalizeData(_data));
        }
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.heatmap) {
        this.heatmap.setMap(null);
      }
    }
    /**
     * Gets the data that is currently shown on the heatmap.
     * See: developers.google.com/maps/documentation/javascript/reference/visualization#HeatmapLayer
     */

  }, {
    key: "getData",
    value: function getData() {
      this._assertInitialized();

      return this.heatmap.getData();
    }
    /** Creates a combined options object using the passed-in options and the individual inputs. */

  }, {
    key: "_combineOptions",
    value: function _combineOptions() {
      var options = this._options || {};
      return Object.assign(Object.assign({}, options), {
        data: this._normalizeData(this._data || options.data || []),
        map: this._googleMap.googleMap
      });
    }
    /**
     * Most Google Maps APIs support both `LatLng` objects and `LatLngLiteral`. The latter is more
     * convenient to write out, because the Google Maps API doesn't have to have been loaded in order
     * to construct them. The `HeatmapLayer` appears to be an exception that only allows a `LatLng`
     * object, or it throws a runtime error. Since it's more convenient and we expect that Angular
     * users will load the API asynchronously, we allow them to pass in a `LatLngLiteral` and we
     * convert it to a `LatLng` object before passing it off to Google Maps.
     */

  }, {
    key: "_normalizeData",
    value: function _normalizeData(data) {
      var result = [];
      data.forEach(function (item) {
        result.push(isLatLngLiteral(item) ? new google.maps.LatLng(item.lat, item.lng) : item);
      });
      return result;
    }
    /** Asserts that the heatmap object has been initialized. */

  }, {
    key: "_assertInitialized",
    value: function _assertInitialized() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._googleMap.googleMap) {
          throw Error('Cannot access Google Map information before the API has been initialized. ' + 'Please wait for the API to load before trying to interact with it.');
        }

        if (!this.heatmap) {
          throw Error('Cannot interact with a Google Map HeatmapLayer before it has been ' + 'initialized. Please wait for the heatmap to load before trying to interact with it.');
        }
      }
    }
  }]);

  return MapHeatmapLayer;
}();

MapHeatmapLayer.ɵfac = function MapHeatmapLayer_Factory(t) {
  return new (t || MapHeatmapLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](GoogleMap), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};

MapHeatmapLayer.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MapHeatmapLayer,
  selectors: [["map-heatmap-layer"]],
  inputs: {
    data: "data",
    options: "options"
  },
  exportAs: ["mapHeatmapLayer"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapHeatmapLayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Directive,
    args: [{
      selector: 'map-heatmap-layer',
      exportAs: 'mapHeatmapLayer'
    }]
  }], function () {
    return [{
      type: GoogleMap
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
    }]
  });
})();
/** Asserts that an object is a `LatLngLiteral`. */


function isLatLngLiteral(value) {
  return value && typeof value.lat === 'number' && typeof value.lng === 'number';
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var COMPONENTS = [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer, MapHeatmapLayer];

var GoogleMapsModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(function GoogleMapsModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, GoogleMapsModule);
});

GoogleMapsModule.ɵfac = function GoogleMapsModule_Factory(t) {
  return new (t || GoogleMapsModule)();
};

GoogleMapsModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: GoogleMapsModule,
  declarations: [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer, MapHeatmapLayer],
  exports: [GoogleMap, MapBaseLayer, MapBicyclingLayer, MapCircle, MapDirectionsRenderer, MapGroundOverlay, MapInfoWindow, MapKmlLayer, MapMarker, MapMarkerClusterer, MapPolygon, MapPolyline, MapRectangle, MapTrafficLayer, MapTransitLayer, MapHeatmapLayer]
});
GoogleMapsModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](GoogleMapsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule,
    args: [{
      declarations: COMPONENTS,
      exports: COMPONENTS
    }]
  }], null, null);
})(); /// <reference types="google.maps" />

/**
 * Angular service that wraps the Google Maps DirectionsService from the Google Maps JavaScript
 * API.
 *
 * See developers.google.com/maps/documentation/javascript/reference/directions#DirectionsService
 */


var MapDirectionsService = /*#__PURE__*/function () {
  function MapDirectionsService(_ngZone) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapDirectionsService);

    this._ngZone = _ngZone;
  }
  /**
   * See
   * developers.google.com/maps/documentation/javascript/reference/directions
   * #DirectionsService.route
   */


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapDirectionsService, [{
    key: "route",
    value: function route(request) {
      var _this35 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (observer) {
        // Initialize the `DirectionsService` lazily since the Google Maps API may
        // not have been loaded when the provider is instantiated.
        if (!_this35._directionsService) {
          _this35._directionsService = new google.maps.DirectionsService();
        }

        _this35._directionsService.route(request, function (result, status) {
          _this35._ngZone.run(function () {
            observer.next({
              result: result || undefined,
              status: status
            });
            observer.complete();
          });
        });
      });
    }
  }]);

  return MapDirectionsService;
}();

MapDirectionsService.ɵfac = function MapDirectionsService_Factory(t) {
  return new (t || MapDirectionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};

MapDirectionsService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: MapDirectionsService,
  factory: MapDirectionsService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapDirectionsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, null);
})(); /// <reference types="google.maps" />

/**
 * Angular service that wraps the Google Maps Geocoder from the Google Maps JavaScript API.
 * See developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder
 */


var MapGeocoder = /*#__PURE__*/function () {
  function MapGeocoder(_ngZone) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MapGeocoder);

    this._ngZone = _ngZone;
  }
  /**
   * See developers.google.com/maps/documentation/javascript/reference/geocoder#Geocoder.geocode
   */


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__["default"])(MapGeocoder, [{
    key: "geocode",
    value: function geocode(request) {
      var _this36 = this;

      return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(function (observer) {
        // Initialize the `Geocoder` lazily since the Google Maps API may
        // not have been loaded when the provider is instantiated.
        if (!_this36._geocoder) {
          _this36._geocoder = new google.maps.Geocoder();
        }

        _this36._geocoder.geocode(request, function (results, status) {
          _this36._ngZone.run(function () {
            observer.next({
              results: results || [],
              status: status
            });
            observer.complete();
          });
        });
      });
    }
  }]);

  return MapGeocoder;
}();

MapGeocoder.ɵfac = function MapGeocoder_Factory(t) {
  return new (t || MapGeocoder)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};

MapGeocoder.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: MapGeocoder,
  factory: MapGeocoder.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MapGeocoder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_registry_client-registration_client-registration_module_ts.js.map