"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_registry_client-edit_client-edit_module_ts"],{

/***/ 83342:
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/registry/client-edit/client-edit-routing.module.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientEditPageRoutingModule": function() { return /* binding */ ClientEditPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _client_edit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-edit.page */ 72028);






var routes = [{
  path: '',
  component: _client_edit_page__WEBPACK_IMPORTED_MODULE_2__.ClientEditPage
}];

var ClientEditPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ClientEditPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientEditPageRoutingModule);
});

ClientEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ClientEditPageRoutingModule);


/***/ }),

/***/ 30850:
/*!************************************************************************!*\
  !*** ./src/app/views/pages/registry/client-edit/client-edit.module.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientEditPageModule": function() { return /* binding */ ClientEditPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _client_edit_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-edit-routing.module */ 83342);
/* harmony import */ var _client_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-edit.page */ 72028);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var ClientEditPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ClientEditPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientEditPageModule);
});

ClientEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _client_edit_routing_module__WEBPACK_IMPORTED_MODULE_2__.ClientEditPageRoutingModule],
  declarations: [_client_edit_page__WEBPACK_IMPORTED_MODULE_3__.ClientEditPage]
})], ClientEditPageModule);


/***/ }),

/***/ 72028:
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/registry/client-edit/client-edit.page.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientEditPage": function() { return /* binding */ ClientEditPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _client_edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-edit.page.html?ngResource */ 10228);
/* harmony import */ var _client_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-edit.page.scss?ngResource */ 47646);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var src_app_core_services_camera_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/camera.service */ 9102);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_sms_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/sms.service */ 26921);

















var circleR = 25;
var circleDasharray = 2 * Math.PI * circleR;

var ClientEditPage = /*#__PURE__*/function () {
  function ClientEditPage(env, http, formBuilder, datepipe, authService, toastCtrl, alertController, alertSerivce, cameraService, smsService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClientEditPage);

    this.env = env;
    this.http = http;
    this.formBuilder = formBuilder;
    this.datepipe = datepipe;
    this.authService = authService;
    this.toastCtrl = toastCtrl;
    this.alertController = alertController;
    this.alertSerivce = alertSerivce;
    this.cameraService = cameraService;
    this.smsService = smsService;
    this.showLoader = false;
    this.isvalid = true;
    this.isDocumentSelected = false;
    this.picture = [];
    this.displayDocuments = false;
    this.ismobileNumberDisabled = false;
    this.existingClientFlag = false; // switches //

    this.PersonalData = true;
    this.BusinessData = false;
    this.CommunicationData = false;
    this.DocumentData = false;
    this.mobileInputIsDisabled = false;
    this.SMSdivHidden = true;
    this.mobileNumberCheckButton = true;
    this.isOTPBtnDisabled = true;
    this.OTPisNotCorrectHidden = true;
    this.OTPisCorrectHidden = true;
    this.openOTPModal = false;
    this.isOTPVerified = false; // OTP //
    // timer //

    this.time = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject("00:00");
    this.percent = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(100);
    this.state = "stop";
    this.startDuration = 1;
    this.circleR = circleR;
    this.circleDasharray = circleDasharray;
    this.isDisabled = true;
    this.ResendOTPisHidden = true;
    this.timerIsHidden = true;
    this.NotesFlag = true; // timer //
    // forms //

    this.PersonalDataForm = this.formBuilder.group({
      client_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, this.noWhitespaceValidator]],
      nationID: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$")]],
      birthDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      address1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, this.noWhitespaceValidator]],
      address2: [""],
      address3: [""],
      id_date: ["", this.noDateGreaterToday],
      educationLevel: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
      Gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      maritalStatus: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      cridetCardNo: [""],
      nationIDserial: [""]
    });
    this.BusinessDataForm = this.formBuilder.group({
      GovCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      DistCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      VillCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      branchCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      BusName: [""],
      BusAddress: [""],
      busSectorCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      BusActivityTypesCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      BusSpecializationCode: [""] //تخصص العمل

    });
    this.CommunicationDataForm = this.formBuilder.group({
      mobileNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("01([0-5]{1})([0-9]{8})$")]],
      mobileNumber2: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("01([0-5]{1})([0-9]{8})$")],
      checkOTP_no: [""],
      email: [""],
      notes: [""]
    });
    this.DocumentDataForm = this.formBuilder.group({
      docCode: [""]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ClientEditPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.authService.getUserInfo().then(function (userInfo) {
                  _this.org_code_user_info = userInfo.org_code;
                });

              case 2:
                _context.next = 4;
                return this.GetEduLevel();

              case 4:
                _context.next = 6;
                return this.GetGender();

              case 6:
                _context.next = 8;
                return this.GetMartialStatus();

              case 8:
                _context.next = 10;
                return this.GetBusinessDivisions();

              case 10:
                _context.next = 12;
                return this.GetGoveName();

              case 12:
                _context.next = 14;
                return this.getAllBranches();

              case 14:
                _context.next = 16;
                return this.getClientData();

              case 16:
                _context.next = 18;
                return this.checkSMSorgAllowed();

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "SubmitForm",
    value: function SubmitForm() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(this.CommunicationDataForm.controls.mobileNumber.value != this.EditClient.clientData.mobile_1 && this.isOTPVerified == true || this.CommunicationDataForm.controls.mobileNumber.value == this.EditClient.clientData.mobile_1)) {
                  _context4.next = 4;
                  break;
                }

                if (this.PersonalDataForm.valid && this.BusinessDataForm.valid && this.CommunicationDataForm.valid && this.DocumentDataForm.valid) {
                  this.showLoader = true;
                  this.http.post(this.env.API_URL + "api/Clients/EditSelfRegistrationClient", {
                    org_code: this.EditClient.clientData.org_code,
                    branch_code: this.BusinessDataForm.value.branchCode,
                    mobile_1: this.CommunicationDataForm.value.mobileNumber,
                    mobile_2: this.CommunicationDataForm.value.mobileNumber2,
                    client_name: this.PersonalDataForm.value.client_name,
                    home_add_1: this.PersonalDataForm.value.address1,
                    home_add_2: this.PersonalDataForm.value.address2,
                    home_add_3: this.PersonalDataForm.value.address3,
                    nation_id: this.PersonalDataForm.value.nationID,
                    id_serial: this.PersonalDataForm.value.nationIDserial,
                    birth_date: this.PersonalDataForm.value.birthDate,
                    gender: this.PersonalDataForm.value.Gender,
                    email_1: this.CommunicationDataForm.value.email,
                    id_date: this.PersonalDataForm.value.id_date,
                    gov_code: this.BusinessDataForm.value.GovCode,
                    dist_code: this.BusinessDataForm.value.DistCode,
                    vill_code: this.BusinessDataForm.value.VillCode,
                    bs_div_1_code: this.BusinessDataForm.value.busSectorCode,
                    bs_div_2_code: this.BusinessDataForm.value.BusActivityTypesCode,
                    bs_div_3_code: this.BusinessDataForm.value.BusSpecializationCode,
                    bus_name: this.BusinessDataForm.value.BusName,
                    bus_add_1: this.BusinessDataForm.value.BusAddress,
                    client_account: this.PersonalDataForm.value.cridetCardNo,
                    martial_status: this.PersonalDataForm.value.maritalStatus,
                    edu_level_code: this.PersonalDataForm.value.educationLevel,
                    intro_date: this.EditClient.clientData.intro_date,
                    uuc: this.EditClient.clientData.uuc
                  }).subscribe({
                    next: function next(data) {
                      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
                        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                this.showLoader = false;
                                _context2.next = 3;
                                return this.alertSerivce.showAlertConfirm("لقد تم حفظ التعديلات", true);

                              case 3:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    },
                    error: function error(err) {
                      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
                        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                this.showLoader = false;
                                _context3.next = 3;
                                return this.alertSerivce.showAlertError("خطأ في حفظ التعديلات " + err.error, false);

                              case 3:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    }
                  });
                }

                _context4.next = 6;
                break;

              case 4:
                _context4.next = 6;
                return this.alertSerivce.showAlertError("برجاء ارسال رمز التحقق", false);

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "next",
    value: function next() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(this.PersonalData == true && this.PersonalDataForm.valid)) {
                  _context5.next = 7;
                  break;
                }

                this.PersonalData = false;
                this.BusinessData = true;
                this.CommunicationData = false;
                this.DocumentData = false;
                _context5.next = 24;
                break;

              case 7:
                if (!(this.BusinessData == true && this.BusinessDataForm.valid)) {
                  _context5.next = 14;
                  break;
                }

                this.PersonalData = false;
                this.BusinessData = false;
                this.CommunicationData = true;
                this.DocumentData = false;
                _context5.next = 24;
                break;

              case 14:
                if (!(this.CommunicationData == true && this.CommunicationDataForm.valid)) {
                  _context5.next = 24;
                  break;
                }

                if (!(this.CommunicationDataForm.controls.mobileNumber.value != this.EditClient.clientData.mobile_1 && this.isOTPVerified == true || this.CommunicationDataForm.controls.mobileNumber.value == this.EditClient.clientData.mobile_1)) {
                  _context5.next = 22;
                  break;
                }

                this.PersonalData = false;
                this.BusinessData = false;
                this.CommunicationData = false;
                this.DocumentData = true;
                _context5.next = 24;
                break;

              case 22:
                _context5.next = 24;
                return this.alertSerivce.showAlertError("برجاء ارسال رمز التحقق", false);

              case 24:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "back",
    value: function back() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(this.BusinessData == true && this.BusinessDataForm.valid)) {
                  _context6.next = 7;
                  break;
                }

                this.PersonalData = true;
                this.BusinessData = false;
                this.CommunicationData = false;
                this.DocumentData = false;
                _context6.next = 20;
                break;

              case 7:
                if (!(this.CommunicationData == true && this.CommunicationDataForm.valid)) {
                  _context6.next = 19;
                  break;
                }

                if (!(this.CommunicationDataForm.controls.mobileNumber.value != this.EditClient.clientData.mobile_1 && this.isOTPVerified == true || this.CommunicationDataForm.controls.mobileNumber.value == this.EditClient.clientData.mobile_1)) {
                  _context6.next = 15;
                  break;
                }

                this.PersonalData = false;
                this.BusinessData = true;
                this.CommunicationData = false;
                this.DocumentData = false;
                _context6.next = 17;
                break;

              case 15:
                _context6.next = 17;
                return this.alertSerivce.showAlertError("برجاء ارسال رمز التحقق", false);

              case 17:
                _context6.next = 20;
                break;

              case 19:
                if (this.DocumentData == true && this.DocumentDataForm.valid) {
                  this.PersonalData = false;
                  this.BusinessData = false;
                  this.CommunicationData = true;
                  this.DocumentData = false;
                  this.displayDocuments = false;
                }

              case 20:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "startTimer",
    value: function startTimer(duration) {
      var _this3 = this;

      this.isOTPBtnDisabled = true;
      this.state = "start";
      clearInterval(this.interval);
      this.timer = duration * 3; //Change seconds here

      this.updateTimeValue();
      this.interval = setInterval(function () {
        _this3.updateTimeValue();
      }, 1000);
      this.isDisabled = true;
    }
  }, {
    key: "GetGoveName",
    value: function GetGoveName() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        var _this4 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", this.http.get(this.env.API_URL + "api/Location/GetGovNames", {}).subscribe({
                  next: function next(data) {
                    _this4.GetGoveNameObjects = data;
                  },
                  error: function error(err) {}
                }));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "getClientData",
    value: function getClientData() {
      var _this5 = this;

      this.showLoader = true;
      this.http.post(this.env.API_URL + "api/Clients/GetSelfRegistrationClientByNationID", {
        nation_id: "28809040102271",
        org_code: this.org_code_user_info
      }).subscribe({
        next: function next(data) {
          _this5.EditClient = data["result"];
          _this5.ClientDocuments = data["result"]["clientDocDetails"];

          if (_this5.EditClient.clientData.existing_client == "1") {
            _this5.existingClientFlag = true;
          }

          _this5.patchMethods();

          _this5.GetClientDocs();

          _this5.showLoader = false;
        },
        error: function error(err) {
          _this5.showLoader = false;
        }
      });
    }
  }, {
    key: "patchMethods",
    value: function patchMethods() {
      this.PersonalDataForm.patchValue({
        client_name: this.EditClient.clientData.client_name,
        birthDate: this.datepipe.transform(this.EditClient.clientData.birth_date, "yyyy-MM-dd"),
        nationID: this.EditClient.clientData.nation_id,
        address1: this.EditClient.clientData.home_add_1,
        address2: this.EditClient.clientData.home_add_2,
        address3: this.EditClient.clientData.home_add_3,
        id_date: this.datepipe.transform(this.EditClient.clientData.id_date, "yyyy-MM-dd"),
        educationLevel: this.EditClient.clientData.edu_level_code,
        Gender: this.EditClient.clientData.gender,
        maritalStatus: this.EditClient.clientData.martial_status,
        cridetCardNo: this.EditClient.clientData.client_account,
        nationIDserial: this.EditClient.clientData.id_serial
      });
      this.BusinessDataForm.patchValue({
        GovCode: this.EditClient.clientData.gov_code,
        DistCode: this.EditClient.clientData.dist_code,
        VillCode: this.EditClient.clientData.vill_code,
        branchCode: this.EditClient.clientData.branch_code,
        BusName: this.EditClient.clientData.bus_name,
        BusAddress: this.EditClient.clientData.bus_add_1,
        busSectorCode: this.EditClient.clientData.bs_div_1_code,
        BusActivityTypesCode: this.EditClient.clientData.bs_div_2_code,
        BusSpecializationCode: this.EditClient.clientData.bs_div_3_code
      });
      this.CommunicationDataForm.patchValue({
        mobileNumber: this.EditClient.clientData.mobile_1,
        mobileNumber2: this.EditClient.clientData.mobile_2,
        email: this.EditClient.clientData.email_1,
        notes: this.EditClient.clientData.notes
      });

      if (this.EditClient.clientData.notes != null) {
        this.NotesFlag = false;
      }

      this.ChangeGov();
      this.ChangeBusDiv1();
      this.GetBusinessActivityTypes();
      this.getDocumentTypes();
    }
  }, {
    key: "GetEduLevel",
    value: function GetEduLevel() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
        var _this6 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                return _context8.abrupt("return", this.http.get(this.env.API_URL + "api/Edu/GetAllEduLevel").subscribe(function (data) {
                  _this6.EduLevelObjects = data;
                }));

              case 1:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }, {
    key: "GetGender",
    value: function GetGender() {
      var _this7 = this;

      this.http.get(this.env.API_URL + "api/StaticRef/GetGender").subscribe(function (data) {
        _this7.Genders = data;
      });
    }
  }, {
    key: "GetMartialStatus",
    value: function GetMartialStatus() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
        var _this8 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this.http.get(this.env.API_URL + "api/StaticRef/GetMaritalStatus").subscribe(function (data) {
                  _this8.MartialStatusObjects = data;
                }));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    }
  }, {
    key: "getAllBranches",
    value: function getAllBranches() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10() {
        var _this9 = this;

        var params;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpParams();
                params = params.set("org_code", this.org_code_user_info);
                params = params.set("gov_code", this.BusinessDataForm.controls.GovCode.value);

                if (this.ClientLat && this.ClientLat != null) {
                  params = params.set("client_Lat", this.ClientLat);
                  params = params.set("client_Long", this.ClientLong);
                }

                return _context10.abrupt("return", this.http.get(this.env.API_URL + "api/ClientRegistration/GetAllBranches?".concat(params.toString()), {}).subscribe({
                  next: function next(data) {
                    _this9.getAllBranchesObjects = data;

                    if (_this9.ClientLat != null && _this9.ClientLong != null) {
                      _this9.selectBranch = _this9.getAllBranchesObjects[0].branch_code;
                    }
                  },
                  error: function error(err) {}
                }));

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
    } // OTP AND SMS //

  }, {
    key: "checkMobileNumber",
    value: function checkMobileNumber() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee11() {
        var _this10 = this;

        var mobileNumber, org_code;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                mobileNumber = this.CommunicationDataForm.controls.mobileNumber.value.toString();
                org_code = this.org_code_user_info;
                this.http.post(this.env.API_URL + "api/ClientRegistration/CheckPhoneNumber", {
                  mobileNumber: mobileNumber,
                  org_code: org_code
                }).subscribe({
                  next: function next(data) {
                    if (_this10.CommunicationDataForm.controls.mobileNumber.value.length < 11) {
                      _this10.ErrorToast("رقم المحمول يجب ان يكون 11 رقم");
                    } // front error if num less than 11
                    else if (_this10.SMSAllowedInfoVar.par_value == "1" && _this10.SMSAllowedInfoVar.status == 1 && _this10.CommunicationDataForm.controls.mobileNumber.valid) {
                      _this10.openOTPModal = true;

                      _this10.SMSsendOTP();
                    }
                  },
                  error: function error(err) {
                    // recive errors from DB
                    _this10.ErrorToast(err.error);
                  }
                });

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
    }
  }, {
    key: "SMSsendOTP",
    value: function SMSsendOTP() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee12() {
        var event_id, mobile;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                event_id = "0";
                mobile = this.CommunicationDataForm.controls.mobileNumber.value;
                _context12.next = 4;
                return this.smsService.OTP(mobile);

              case 4:
                this.timerIsHidden = false;
                this.ismobileNumberDisabled = true;
                this.startTimer(20); // this.http
                //   .post<SMSEvents>(this.env.API_URL + `api/Settings/SMS`, {
                //     event_id,
                //     mobile,
                //   })
                //   .subscribe({
                //     next: (data) => {
                //       this.showMobileOtpSendingToast();
                //       this.timerIsHidden = false;
                //       this.ismobileNumberDisabled = true;
                //       this.startTimer(20);
                //       this.SMSsendOTPobjects = data[0];
                //       this.otpSim = this.SMSsendOTPobjects.otp_no;
                //       this.otpSimShow(this.otpSim);
                //       this.mobileInputIsDisabled = true;
                //       let OTPvalue: any = this.SMSsendOTPobjects.otp_no;
                //     },
                //     error: (err) => {
                //       this.ErrorToast(err.error);
                //     },
                //   });

              case 7:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
    }
  }, {
    key: "VerifyOTP",
    value: function VerifyOTP() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee13() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.smsService.VerifyOTP("0", this.CommunicationDataForm.controls.checkOTP_no.value);

              case 2:
                if (!_context13.sent) {
                  _context13.next = 11;
                  break;
                }

                this.OTPisNotCorrectHidden = true;
                this.OTPisCorrectHidden = false;
                this.OTPisCorrect = "1";
                this.timerIsHidden = true;
                this.isOTPVerified = true;
                this.openOTPModal = false;
                _context13.next = 14;
                break;

              case 11:
                this.OTPisNotCorrectHidden = false;
                this.isOTPVerified = false;
                this.OTPisCorrectHidden = true;

              case 14:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
    }
  }, {
    key: "showMobileOtpSendingToast",
    value: function showMobileOtpSendingToast() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee14() {
        var toast;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.toastCtrl.create({
                  header: "كود التحقق (OTP)",
                  message: "سيتم ارسال كود التحقق من 6 ارقام في رسالة نصية SMS على رقم التليفون الاساسي",
                  position: "top",
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
                toast = _context14.sent;
                _context14.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
    }
  }, {
    key: "openOTPBtn",
    value: function openOTPBtn() {
      if (this.CommunicationDataForm.controls.mobileNumber.value == this.EditClient.clientData.mobile_1) {
        this.isOTPBtnDisabled = true;
      } else {
        this.isOTPBtnDisabled = false;
      }
    }
  }, {
    key: "otpSimShow",
    value: function otpSimShow(otpSim) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee15() {
        var toast;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.toastCtrl.create({
                  //header : 'otp is:',
                  message: "otp is: " + otpSim.toString(),
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
                toast = _context15.sent;
                _context15.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
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
    key: "stopTimer",
    value: function stopTimer() {
      clearInterval(this.interval);
      this.time.next("00:00");
      this.state = "stop";
      this.isDisabled = false;
      this.timerIsHidden = true;
      this.isOTPBtnDisabled = false;
    }
  }, {
    key: "checkSMSorgAllowed",
    value: function checkSMSorgAllowed() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee16() {
        var _this11 = this;

        var org_code;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                org_code = this.org_code_user_info;
                this.http.post(this.env.API_URL + "api/Settings/SMSAllowed", {
                  org_code: org_code,
                  event_id: "0"
                }).subscribe({
                  next: function next(data) {
                    // Data variable is the data that came from api you can change it
                    _this11.SMSAllowedInfoVar = data; // PASS DATA FROM API INTO SMSAllowedInfoVar || THE DATA IS ARRY
                    // the api have 1 array is 0 contained by par_value & status

                    if (_this11.SMSAllowedInfoVar.par_value == "1" && _this11.SMSAllowedInfoVar.status == 1) {
                      // case 3
                      _this11.SMSdivHidden = false;
                    } else {
                      _this11.mobileNumberCheckButton = false;
                    }
                  },
                  error: function error(err) {}
                });

              case 2:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
    } // Business functions //

  }, {
    key: "ChangeGov",
    value: function ChangeGov() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee17() {
        var _this12 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                this.BusinessDataForm.patchValue({
                  DistCode: null
                });
                this.BusinessDataForm.patchValue({
                  VillCode: null
                });

                if (this.BusinessDataForm.value.GovCode == this.EditClient.clientData.gov_code) {
                  this.http.get(this.env.API_URL + "api/Location/GetDistCodes?gov_code=" + this.BusinessDataForm.controls.GovCode.value, {}).subscribe(function (data) {
                    _this12.GetDistNamesObjects = data;

                    _this12.BusinessDataForm.patchValue({
                      DistCode: _this12.EditClient.clientData.dist_code
                    });

                    _this12.ChangeDist();
                  });
                } else {
                  this.http.get(this.env.API_URL + "api/Location/GetDistCodes?gov_code=" + this.BusinessDataForm.controls.GovCode.value, {}).subscribe(function (data) {
                    _this12.GetDistNamesObjects = data;

                    _this12.BusinessDataForm.patchValue({
                      DistCode: _this12.BusinessDataForm.value.DistCode
                    });

                    _this12.ChangeDist();
                  });
                }

              case 3:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
    }
  }, {
    key: "ChangeDist",
    value: function ChangeDist() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee18() {
        var _this13 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                this.BusinessDataForm.patchValue({
                  VillCode: null
                });

                if (this.BusinessDataForm.value.DistCode == this.EditClient.clientData.dist_code && this.BusinessDataForm.value.GovCode == this.EditClient.clientData.gov_code) {
                  this.http.get(this.env.API_URL + "api/Location/GetVillCodes?gov_code=" + this.BusinessDataForm.controls.GovCode.value + "&dist_code=" + this.BusinessDataForm.controls.DistCode.value).subscribe(function (data) {
                    _this13.GetVillNameObjects = data;

                    _this13.BusinessDataForm.patchValue({
                      VillCode: _this13.EditClient.clientData.vill_code
                    });
                  });
                } else {
                  this.http.get(this.env.API_URL + "api/Location/GetVillCodes?gov_code=" + this.BusinessDataForm.controls.GovCode.value + "&dist_code=" + this.BusinessDataForm.controls.DistCode.value).subscribe(function (data) {
                    _this13.GetVillNameObjects = data;

                    _this13.BusinessDataForm.patchValue({
                      VillCode: _this13.BusinessDataForm.value.VillCode
                    });
                  });
                }

              case 2:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
    }
  }, {
    key: "GetBusinessActivityTypes",
    value: function GetBusinessActivityTypes() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee19() {
        var _this14 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                return _context19.abrupt("return", this.http.get(this.env.API_URL + "api/StaticRef/GetBusinessActivityTypes?bs_div_1_code=".concat(this.BusinessDataForm.value.busSectorCode), {}).subscribe({
                  next: function next(data) {
                    _this14.GetBusinessActivityTypesObjects = data;
                  },
                  error: function error(err) {}
                }));

              case 1:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));
    }
  }, {
    key: "ChangeBusDiv1",
    value: function ChangeBusDiv1() {
      var _this15 = this;

      this.BusinessDataForm.patchValue({
        BusActivityTypesCode: null
      });
      this.BusinessDataForm.patchValue({
        BusSpecializationCode: null
      });

      if (this.BusinessDataForm.value.busSectorCode == this.EditClient.clientData.bs_div_1_code) {
        this.http.get(this.env.API_URL + "api/StaticRef/GetBusinessActivityTypes?bs_div_1_code=" + this.BusinessDataForm.controls.busSectorCode.value, {}).subscribe(function (data) {
          _this15.GetBusinessActivityTypesObjects = data;

          _this15.BusinessDataForm.patchValue({
            BusActivityTypesCode: _this15.EditClient.clientData.bs_div_2_code
          });

          _this15.ChangeBusDiv2();
        });
      } else {
        this.http.get(this.env.API_URL + "api/StaticRef/GetBusinessActivityTypes?bs_div_1_code=" + this.BusinessDataForm.controls.busSectorCode.value, {}).subscribe(function (data) {
          _this15.GetBusinessActivityTypesObjects = data;

          _this15.BusinessDataForm.patchValue({
            BusActivityTypesCode: _this15.BusinessDataForm.value.BusActivityTypesCode
          });

          _this15.ChangeBusDiv2();
        });
      }
    }
  }, {
    key: "ChangeBusDiv2",
    value: function ChangeBusDiv2() {
      var _this16 = this;

      this.BusinessDataForm.patchValue({
        BusSpecializationCode: null
      });

      if (this.BusinessDataForm.value.BusActivityTypesCode == this.EditClient.clientData.bs_div_2_code && this.BusinessDataForm.value.busSectorCode == this.EditClient.clientData.bs_div_1_code) {
        this.http.get(this.env.API_URL + "api/StaticRef/GetBusinessSpecialities?bs_div_1_code=" + this.BusinessDataForm.controls.busSectorCode.value + "&bs_div_2_code=" + this.BusinessDataForm.controls.BusActivityTypesCode.value).subscribe(function (data) {
          _this16.GetBusinessSpecialitiesObjects = data;

          _this16.BusinessDataForm.patchValue({
            BusSpecializationCode: _this16.EditClient.clientData.bs_div_3_code
          });
        });
      } else {
        this.http.get(this.env.API_URL + "api/StaticRef/GetBusinessSpecialities?bs_div_1_code=" + this.BusinessDataForm.controls.busSectorCode.value + "&bs_div_2_code=" + this.BusinessDataForm.controls.BusActivityTypesCode.value).subscribe(function (data) {
          _this16.GetBusinessSpecialitiesObjects = data;

          _this16.BusinessDataForm.patchValue({
            BusSpecializationCode: _this16.BusinessDataForm.value.BusSpecializationCode
          });
        });
      }
    }
  }, {
    key: "GetBusinessDivisions",
    value: function GetBusinessDivisions() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee20() {
        var _this17 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this.http.get(this.env.API_URL + "api/StaticRef/GetBusinessDivisions", {}).subscribe({
                  next: function next(data) {
                    _this17.GetBusinessDivisionsObjects = data;
                  },
                  error: function error(err) {}
                }));

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));
    } // Document functions //

  }, {
    key: "getDocumentTypes",
    value: function getDocumentTypes() {
      var _this18 = this;

      this.http.get(this.env.API_URL + "api/ClientRegistration/GetAllDocumentsTypesSelfRegistration?nation_id=".concat(this.PersonalDataForm.value.nationID.toString(), "\n          &org_code=").concat(this.org_code_user_info)).subscribe({
        next: function next(data) {
          _this18.documentTypes = data; //this.showLoader = false;
        },
        error: function error(err) {
          //this.showLoader = false;
          _this18.ErrorToast(err.error);
        }
      });
    }
  }, {
    key: "addNewDocument",
    value: function addNewDocument() {
      var _this19 = this;

      this.http.post(this.env.API_URL + "api/ClientRegistration/InsertUnconfirmedDocument", {
        documentTypeCode: this.DocumentDataForm.controls.docCode.value.toString(),
        nation_id: this.PersonalDataForm.controls.nationID.value.toString(),
        org_code: this.org_code_user_info
      }).subscribe({
        next: function next(data) {
          _this19.UnconfirmedDocumentObjects = data;
          console.log(_this19.DocumentDataForm.controls.docCode.value.toString());
          _this19.documentDetails = [].constructor(data.pageNumber);
          console.log(data.pageNumber);
          _this19.isDocumentSelected = true;
          _this19.displayDocuments = false; //this.showLoader = false;
        },
        error: function error(err) {}
      });
    }
  }, {
    key: "takePicture",
    value: function takePicture(index) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee21() {
        var cameraResult;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return this.cameraService.getPhoto();

              case 2:
                cameraResult = _context21.sent;

                if (!cameraResult.success) {
                  _context21.next = 11;
                  break;
                }

                this.photo = cameraResult.photo;
                this.picture[index] = this.photo;
                this.imageSrc = "data:image/jpg;base64," + this.photo.base64String;
                this.imageModal.present();
                this.uploadPicture(index);
                _context21.next = 13;
                break;

              case 11:
                _context21.next = 13;
                return this.alertSerivce.showAlertError(cameraResult.message, false);

              case 13:
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
      var _this20 = this;

      var orgCode = this.UnconfirmedDocumentObjects.orgCode;
      var documentSerial = this.UnconfirmedDocumentObjects.documentSerial;
      var documentTypeCode = this.UnconfirmedDocumentObjects.documentTypeCode;
      this.http.post(this.env.API_URL + "api/ClientRegistration/UploadUnconfirmedImage", {
        orgCode: orgCode,
        documentSerial: documentSerial,
        documentTypeCode: documentTypeCode,
        // ...this.currentDocument,
        pageNumber: index + 1,
        image: this.photo.base64String
      }).subscribe({
        next: function next(data) {
          //this.showLoader = false;
          _this20.presentToast("تم", "تم رفع الصورة بنجاح");
        },
        error: function error(err) {
          //this.showLoader = false;
          _this20.documentDetails[index] = null;

          _this20.presentToast("خطأ", "خطأ في رفع الصورة");
        }
      });
    }
  }, {
    key: "getDistinctValues",
    value: function getDistinctValues(data, distinct_name) {
      var values = data.map(function (item) {
        return item[distinct_name];
      });
      var distinctValues = values.filter(function (value, index, array) {
        return value != null && array.indexOf(value) === index;
      });
      return distinctValues;
    }
  }, {
    key: "GetClientDocs",
    value: function GetClientDocs() {
      // this.ClientDocuments = this.EditClient["result"]["clientDocDetails"];
      this.allDocs = this.getDistinctValues(this.ClientDocuments, "doc_image");
    }
  }, {
    key: "isImageValid",
    value: function isImageValid(index) {
      var image = this.picture[index];
      return !!image && image != "" && /^[a-zA-Z0-9\+/]*={0,3}$/.test(this.photo);
    }
  }, {
    key: "showCurrentDocuments",
    value: function showCurrentDocuments() {
      this.displayDocuments = !this.displayDocuments;
    }
  }, {
    key: "backToClient",
    value: function backToClient() {
      this.imageSrc = null;
      this.documentDetails = null; // this.currentDocument = null;

      this.isDocumentSelected = false;
    }
  }, {
    key: "backButton",
    value: function backButton() {
      // Client selected
      if (this.isDocumentSelected) {
        this.backToClient();
      }
    } // Document functions //
    // toast and Alert //

  }, {
    key: "presentToast",
    value: function presentToast(header, message) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee22() {
        var toast;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return this.toastCtrl.create({
                  header: header,
                  message: message,
                  cssClass: "toast-primary",
                  duration: 2000,
                  position: "bottom"
                });

              case 2:
                toast = _context22.sent;
                _context22.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));
    }
  }, {
    key: "ErrorToast",
    value: function ErrorToast(message) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee23() {
        var toast;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.next = 2;
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
                toast = _context23.sent;
                _context23.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));
    }
  }, {
    key: "noWhitespaceValidator",
    value: function noWhitespaceValidator(control) {
      var isWhitespace = control.value !== null && (control.value || "").toString().trim().length === 0;
      var isValid = !isWhitespace;
      return isValid ? null : {
        whitespace: true
      };
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
  }]);

  return ClientEditPage;
}();

ClientEditPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.ToastController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.AlertController
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService
  }, {
    type: src_app_core_services_camera_service__WEBPACK_IMPORTED_MODULE_7__.CameraService
  }, {
    type: src_app_core_services_sms_service__WEBPACK_IMPORTED_MODULE_9__.SMSService
  }];
};

ClientEditPage.propDecorators = {
  imageModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
    args: ["imageModal"]
  }]
};
ClientEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: "app-client-edit",
  template: _client_edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_client_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], ClientEditPage);


/***/ }),

/***/ 47646:
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/registry/client-edit/client-edit.page.scss?ngResource ***!
  \***********************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.zoomable {\n  cursor: zoom-in;\n  transition: transform 0.5s;\n  width: 280px;\n  height: 180px;\n}\n\n.redCard {\n  border-color: #ff3366 !important;\n  --color: #000000;\n  /* text color */\n  border-top: 2px;\n  border-bottom: 2px;\n  border-left: 2px;\n  border-right: 10px;\n  border-style: solid;\n  border-radius: 5px;\n  box-shadow: none;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1lZGl0LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXHJlZ2lzdHJ5XFxjbGllbnQtZWRpdFxcY2xpZW50LWVkaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQUo7O0FESUE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0NBQUE7RUFDQSxnQkFBQTtFQUFrQixlQUFBO0VBQ2xCLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNBRiIsImZpbGUiOiJjbGllbnQtZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1sYWJlbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgNTEsIDEwMikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi56b29tYWJsZSB7XHJcbiAgY3Vyc29yOiB6b29tLWluO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gIHdpZHRoOiAyODBweDtcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG59XHJcblxyXG4ucmVkQ2FyZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKSAhaW1wb3J0YW50O1xyXG4gIC0tY29sb3I6ICMwMDAwMDA7IC8qIHRleHQgY29sb3IgKi9cclxuICBib3JkZXItdG9wOiAycHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4O1xyXG4gIGJvcmRlci1sZWZ0OiAycHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG4iLCIuZm9ybS1sYWJlbC1yZXF1aXJlZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIipcIjtcbiAgY29sb3I6ICNmZjMzNjYgIWltcG9ydGFudDtcbn1cblxuLnpvb21hYmxlIHtcbiAgY3Vyc29yOiB6b29tLWluO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDE4MHB4O1xufVxuXG4ucmVkQ2FyZCB7XG4gIGJvcmRlci1jb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiAjMDAwMDAwO1xuICAvKiB0ZXh0IGNvbG9yICovXG4gIGJvcmRlci10b3A6IDJweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4O1xuICBib3JkZXItbGVmdDogMnB4O1xuICBib3JkZXItcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 10228:
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/registry/client-edit/client-edit.page.html?ngResource ***!
  \***********************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\n  <div>\n    <h4 class=\"mr-1 mb-md-0\">مراجعه بيانات العميل</h4>\n  </div>\n</div>\n\n<div class=\"row\" [hidden]=\"NotesFlag\">\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h6 class=\"mr-1 mb-md-0\">ملاحظات</h6>\n        <ion-card class=\"redCard\">\n          <ion-label class=\"form-label\">{{CommunicationDataForm.controls.notes.value}}</ion-label></ion-card>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n\n        <!-- Personal Data -->\n\n        <form [formGroup]=\"PersonalDataForm\">\n          <div *ngIf=\"PersonalData\">\n            <h4>البيانات الشخصية</h4>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-4\">\n                <div class=\"form-group\">\n                  <ion-label class=\"form-label form-label-required\">\n                    الاسم بالكامل\n                  </ion-label>\n                  <ion-input type=\"text\" class=\"form-control\" formControlName=\"client_name\"\n                    [disabled]=\"existingClientFlag\">\n                  </ion-input>\n                  <div *ngIf=\"isvalid && (PersonalDataForm.controls['client_name'].hasError('required'))\"\n                    class=\"text-danger\" role=\"alert\">\n                    يجب ادخال الاسم الاول\n                  </div>\n                  <div *ngIf=\"isvalid && (PersonalDataForm.controls['client_name'].hasError('whitespace'))\"\n                    class=\"text-danger\" role=\"alert\">\n                    يجب ادخال حروف فقط\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-md-4\">\n                <div class=\"form-group\">\n                  <ion-label class=\"form-label form-label-required\">\n                    الرقم القومي\n                  </ion-label>\n                  <ion-input type=\"text\" class=\"form-control\" formControlName=\"nationID\"\n                    [disabled]=\"existingClientFlag\">\n                  </ion-input>\n                  <div *ngIf=\"isvalid && (PersonalDataForm.controls['nationID'].hasError('required'))\"\n                    class=\"text-danger\" role=\"alert\">\n                    يجب ادخال الرقم القومي\n                  </div>\n                  <div *ngIf=\"isvalid && (PersonalDataForm.controls['nationID'].hasError('pattern'))\"\n                    class=\"text-danger\" role=\"alert\">\n                    الرقم القومي غير صحيح و يجب ان يتكون ١٤ رقم!\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-md-4\">\n                <ion-label class=\"form-label form-label-required\">\n                  تاريخ الميلاد\n                </ion-label>\n                <ion-input type=\"date\" [disabled]=\"true\" class=\"form-control\" formControlName=\"birthDate\"\n                  [disabled]=\"existingClientFlag\"></ion-input>\n                <div *ngIf=\"isvalid && (PersonalDataForm.controls['birthDate'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال تاريخ الميلاد\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-4\">\n                <div class=\"form-group\">\n                  <ion-label class=\"form-label form-label-required\">\n                    عنوان البطاقة\n                  </ion-label>\n                  <ion-input type=\"text\" class=\"form-control\" formControlName=\"address1\"\n                    [disabled]=\"existingClientFlag\">\n                  </ion-input>\n                  <div *ngIf=\"isvalid && (PersonalDataForm.controls['address1'].hasError('required'))\"\n                    class=\"text-danger\" role=\"alert\">\n                    يجب ادخال عنوان البطاقة\n                  </div>\n                  <div *ngIf=\"isvalid && (PersonalDataForm.controls['address1'].hasError('whitespace'))\"\n                    class=\"text-danger\" role=\"alert\">\n                    يجب ادخال حروف فقط\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-md-4\">\n                <div class=\"form-group\">\n                  <ion-label class=\"form-label\">\n                    العنوان الفعلي\n                  </ion-label>\n                  <ion-input type=\"text\" class=\"form-control\" formControlName=\"address2\"\n                    [disabled]=\"existingClientFlag\">\n                  </ion-input>\n                </div>\n              </div>\n              <div class=\"col-12 col-md-4\">\n                <ion-label class=\"form-label\">\n                  العنوان البديل\n                </ion-label>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"address3\"\n                  [disabled]=\"existingClientFlag\"></ion-input>\n\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-4\">\n                <div class=\"form-group\">\n                  <ion-label class=\"form-label form-label-required\">\n                    تاريخ اصدار البطاقة\n                  </ion-label>\n\n\n                  <ngx-datepicker [disabledValue]=\"existingClientFlag\" [parentForm]=\"PersonalDataForm\"\n                    parentFormControllerName=\"id_date\"></ngx-datepicker>\n\n\n                  <div *ngIf=\"isvalid && (PersonalDataForm.controls['id_date'].hasError('required'))\"\n                    class=\"text-danger\" role=\"alert\">\n                    يجب ادخال تاريخ اصدار البطاقة\n                  </div>\n                  <div *ngIf=\"isvalid && (PersonalDataForm.controls['id_date'].hasError('DateIsGrater'))\"\n                    class=\"text-danger\" role=\"alert\">\n                    تاريخ اصدار البطاقة لا يمكن ان يكون بعد اليوم الحالي\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-md-4\">\n                <div class=\"form-group\">\n                  <ion-label class=\"form-label form-label-required\">\n                    المستوي التعليمي\n                  </ion-label>\n                  <ion-select class=\"ionSelectSize\" interface=\"popover\" class=\"subselect\" placeholder=\"اختيار\"\n                    formControlName=\"educationLevel\" [disabled]=\"existingClientFlag\">\n                    <ion-select-option *ngFor=\"let Level of EduLevelObjects\" [value]=\"Level.edu_level_code\">\n                      {{Level.edu_level_name}}\n                    </ion-select-option>\n                  </ion-select>\n                  <div *ngIf=\"isvalid && (PersonalDataForm.controls['educationLevel'].hasError('required'))\"\n                    class=\"text-danger\" role=\"alert\">\n                    يجب اختيار المستوي التعليمي\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-md-4\">\n                <ion-label class=\"form-label form-label-required\">\n                  النوع\n                </ion-label>\n\n                <ion-select interface=\"popover\" placeholder=\"نوع \" formControlName=\"Gender\" class=\"subselect\"\n                  [disabled]=\"true\">\n                  <ion-select-option *ngFor=\"let Gen of Genders\" [value]=\"Gen.ref_code\">\n                    {{ Gen.ref_desc }}\n                  </ion-select-option>\n                </ion-select>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-4\">\n                <div class=\"form-group\">\n                  <ion-label class=\"form-label form-label-required\">\n                    الحالة الاجتماعية\n                  </ion-label>\n                  <ion-select class=\"ionSelectSize\" interface=\"popover\" placeholder=\"اختيار\"\n                    formControlName=\"maritalStatus\" class=\"subselect\" [disabled]=\"existingClientFlag\">\n                    <ion-select-option *ngFor=\"let Status of MartialStatusObjects\" [value]=\"Status.ref_code\">\n                      {{Status.ref_desc}}\n                    </ion-select-option>\n                  </ion-select>\n                  <div class=\"text-danger input-validator\"\n                    *ngIf=\"isvalid && (PersonalDataForm.controls['maritalStatus'].hasError('required'))\" role=\"alert\">\n                    برجاء اختيار الحالة الاجتماعية\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-md-4\">\n                <div class=\"form-group\">\n                  <ion-label class=\"form-label\">\n                    رقم كارت الائتمان / رقم IBAN\n                  </ion-label>\n                  <ion-input type=\"tel\" class=\"form-control\" id=\"cridetCardNo\" formControlName=\"cridetCardNo\"\n                    [disabled]=\"existingClientFlag\" placeholder=\"رقم كارت الائتمان / رقم IBAN\"></ion-input>\n                </div>\n              </div>\n              <div class=\"col-12 col-md-4\">\n                <ion-label class=\"form-label\">\n                  سيريال بطاقة الرقم القومي\n                </ion-label>\n                <ion-input type=\"text\" id=\"nationIDserial\" class=\"form-control\" formControlName=\"nationIDserial\"\n                  [disabled]=\"existingClientFlag\" placeholder=\"سيريال بطاقة الرقم القومي\"></ion-input>\n              </div>\n            </div>\n          </div>\n        </form>\n\n        <!-- Business Data -->\n        <form [formGroup]=\"BusinessDataForm\">\n          <div *ngIf=\"BusinessData\">\n            <h4> بيانات العمل</h4>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-4\">\n                <div class=\"form-group\">\n                  <ion-label class=\"form-label form-label-required\">المحافظة</ion-label>\n\n                  <ion-select class=\"ionSelectSize\" interface=\"popover\" class=\"subselect\" placeholder=\"اختار المحافظة\"\n                    formControlName=\"GovCode\" [disabled]=\"existingClientFlag\" (ionChange)=\"ChangeGov()\">\n                    <ion-select-option *ngFor=\"let Gov of GetGoveNameObjects\" [value]=\"Gov.gov_code\">\n                      {{Gov.gov_name}}\n                    </ion-select-option>\n                  </ion-select>\n\n                  <div *ngIf=\"isvalid && (BusinessDataForm.controls['GovCode'].hasError('required'))\"\n                    class=\"text-danger\" role=\"alert\">\n                    يجب اختيار المحافظة\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-md-4\">\n                <div class=\"form-group\">\n                  <ion-label class=\"form-label form-label-required\">القسم / المركز</ion-label>\n\n                  <ion-select class=\"ionSelectSize\" interface=\"popover\" class=\"subselect\" placeholder=\"اختار المركز\"\n                    formControlName=\"DistCode\" [disabled]=\"existingClientFlag\" (ionChange)=\"ChangeDist()\">\n                    <ion-select-option *ngFor=\"let Dist of GetDistNamesObjects\" [value]=\"Dist.dist_code\">\n                      {{Dist.dist_name}}\n                    </ion-select-option>\n                  </ion-select>\n                  <div class=\"text-danger input-validator\"\n                    *ngIf=\"isvalid && (BusinessDataForm.controls.DistCode.errors?.['required'])\" role=\"alert\">\n                    برجاء اختيار المركز\n                  </div>\n\n                </div>\n              </div>\n              <div class=\"col-12 col-md-4\">\n                <ion-label class=\"form-label form-label-required\"> المنطقة / القرية</ion-label>\n\n                <ion-select class=\"ionSelectSize\" interface=\"popover\" class=\"subselect\" placeholder=\"اختار القرية\"\n                  formControlName=\"VillCode\" [disabled]=\"existingClientFlag\">\n                  <ion-select-option *ngFor=\"let Vill of GetVillNameObjects\" [value]=\"Vill.vill_code\">\n                    {{Vill.vill_name}}\n                  </ion-select-option>\n                </ion-select>\n\n                <div *ngIf=\"isvalid && (BusinessDataForm.controls['VillCode'].hasError('required'))\" class=\"text-danger\"\n                  role=\"alert\">\n                  يجب اختيار القرية\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-12 col-md-4\">\n                <ion-label class=\"form-label form-label-required\">اختيار الفرع</ion-label>\n\n                <ion-select class=\"ionSelectSize\" interface=\"popover\" class=\"subselect\" placeholder=\"اختيار\"\n                  formControlName=\"branchCode\" [disabled]=\"existingClientFlag\">\n                  <ion-select-option *ngFor=\"let branch of getAllBranchesObjects\" [value]=\"branch.branch_code\">\n                    {{branch.branch_name}}\n                  </ion-select-option>\n                </ion-select>\n\n                <div *ngIf=\"isvalid && (BusinessDataForm.controls['branchCode'].hasError('required'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب اختيار الفرع\n                </div>\n              </div>\n              <div class=\"col-12 col-md-4\">\n                <ion-label class=\"form-label\">اسم العمل</ion-label>\n                <ion-input type=\"text\" id=\"BusName\" formControlName=\"BusName\" [disabled]=\"existingClientFlag\"\n                  class=\"form-control\" placeholder=\"اسم العمل\">\n                </ion-input>\n              </div>\n              <div class=\"col-12 col-md-4\">\n                <ion-label class=\"form-label\">عنوان العمل</ion-label>\n                <ion-input type=\"text\" id=\"BusAddress\" formControlName=\"BusAddress\" [disabled]=\"existingClientFlag\"\n                  class=\"form-control\" placeholder=\"عنوان العمل\">\n                </ion-input>\n              </div>\n            </div>\n            <div class=\"row mt-3\">\n              <div class=\"col-12 col-md-4\">\n                <ion-label class=\"form-label form-label-required\">قطاع العمل</ion-label>\n\n                <ion-select class=\"ionSelectSize\" interface=\"popover\" class=\"subselect\" placeholder=\"اختار قطاع العمل\"\n                  formControlName=\"busSectorCode\" [disabled]=\"existingClientFlag\" (ionChange)=\"ChangeBusDiv1()\">\n                  <ion-select-option *ngFor=\"let Division of GetBusinessDivisionsObjects\"\n                    [value]=\"Division.bs_div_1_code\">\n                    {{Division.bs_div_1_name}}\n                  </ion-select-option>\n                </ion-select>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isvalid && (BusinessDataForm.controls.busSectorCode.errors?.['required'])\" role=\"alert\">\n                  برجاء اختيار قطاع العمل\n                </div>\n              </div>\n              <div class=\"col-12 col-md-4\">\n                <ion-label class=\"form-label form-label-required\">نوع النشاط</ion-label>\n\n                <ion-select class=\"ionSelectSize\" interface=\"popover\" class=\"subselect\" placeholder=\"اختار نوع النشاط\"\n                  formControlName=\"BusActivityTypesCode\" [disabled]=\"existingClientFlag\" (ionChange)=\"ChangeBusDiv2()\">\n                  <ion-select-option *ngFor=\"let type of GetBusinessActivityTypesObjects\" [value]=\"type.bs_div_2_code\">\n                    {{type.bs_div_2_name}}\n                  </ion-select-option>\n                </ion-select>\n                <div class=\"text-danger input-validator\"\n                  *ngIf=\"isvalid && (BusinessDataForm.controls.BusActivityTypesCode.errors?.['required'])\" role=\"alert\">\n                  برجاء اختيار نوع النشاط\n                </div>\n              </div>\n              <div class=\"col-12 col-md-4\">\n                <ion-label class=\"form-label\">التخصص</ion-label>\n\n                <ion-select class=\"ionSelectSize\" interface=\"popover\" class=\"subselect\" placeholder=\"اختار التخصص\"\n                  formControlName=\"BusSpecializationCode\" [disabled]=\"existingClientFlag\">\n                  <ion-select-option *ngFor=\"let spe of GetBusinessSpecialitiesObjects\" [value]=\"spe.bs_div_3_code\">\n                    {{spe.bs_div_3_name}}\n                  </ion-select-option>\n                </ion-select>\n              </div>\n            </div>\n          </div>\n        </form>\n\n        <!-- Communication Data -->\n        <form [formGroup]=\"CommunicationDataForm\">\n          <div *ngIf=\"CommunicationData\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-4\">\n                <div class=\"form-group\">\n                  <ion-label class=\"form-label form-label-required\">\n                    رقم الموبايل - اساسي\n                  </ion-label>\n                  <ion-input maxLength=\"11\" minLength=\"11\" type=\"tel\" id=\"mobileNumber\" class=\"form-control\"\n                    formControlName=\"mobileNumber\" [disabled]=\"ismobileNumberDisabled\" (ionChange)=\"openOTPBtn()\"\n                    placeholder=\"   رقم الموبايل\">\n                  </ion-input>\n                  <div *ngIf=\"isvalid && (CommunicationDataForm.controls['mobileNumber'].hasError('required'))\"\n                    class=\"text-danger\" role=\"alert\">\n                    يجب ادخال رقم الموبايل\n                  </div>\n                  <div *ngIf=\"isvalid && (CommunicationDataForm.controls['mobileNumber'].hasError('pattern'))\"\n                    class=\"text-danger\" role=\"alert\">\n                    رقم الموبايل غير صحيح\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-md-4 d-flex align-items-center justify-content-start\">\n                <ion-button (click)=\"checkMobileNumber()\" id=\"open-trigger\" class=\"mb-0 mt-3\" size=\"deafult\"\n                  shape=\"sharp\" expand=\"block\" [disabled]=\"isOTPBtnDisabled\">\n                  ارسال رمز التحقق\n                </ion-button>\n                <ion-label [hidden]=\"timerIsHidden\" class=\"mt-3 mr-3\"><b>{{ time | async }}\n                  </b></ion-label>\n              </div>\n            </div>\n            <div class=\"row pt-3\">\n              <div class=\"col-12 col-md-4\" *ngIf=\"openOTPModal\">\n                <div class=\"form-group\">\n                  <div class=\"row d-flex align-items-end\">\n                    <div class=\"col-11 col-md-7\">\n                      <ion-label for=\"checkOTP_no\" class=\"form-label form-label-required\">\n                        كتابة رمز التحقق\n                      </ion-label>\n                      <ion-input #checkOTPnoinput class=\"form-control\" maxLength=\"6\" minLength=\"6\" type=\"tel\"\n                        id=\"checkOTP_no\" formControlName=\"checkOTP_no\" placeholder=\"رمز التحقق\">\n                      </ion-input>\n                      <div *ngIf=\"isvalid && (CommunicationDataForm.controls['checkOTP_no'].hasError('required'))\"\n                        class=\"text-danger\" role=\"alert\">\n                        يجب كتابة رمز التحقق\n                      </div>\n                    </div>\n                    <div class=\"col-1 col-md-1\">\n                      <ion-icon name=\"close\" class=\"paddingTop10px mb-0\" size=\"small\"\n                        [hidden]=\"OTPisNotCorrectHidden\"></ion-icon>\n                      <ion-icon name=\"checkmark-done\" class=\"greenColor\" size=\"small\"\n                        [hidden]=\"OTPisCorrectHidden\"></ion-icon>\n                    </div>\n                    <div class=\"col-12 col-md-4 \">\n                      <ion-button (click)=\"VerifyOTP()\" size=\"deafult\" shape=\"sharp\" class=\"mb-0\">\n                        <ion-label>تحقق</ion-label>\n                      </ion-button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row pt-3\">\n              <div class=\"col-12 col-md-4\">\n                <div class=\"form-group\">\n                  <ion-label class=\"form-label\">\n                    رقم موبايل بديل\n                  </ion-label>\n                  <ion-input maxLength=\"11\" minLength=\"11\" type=\"tel\" id=\"mobileNumber2\" class=\"form-control\"\n                    formControlName=\"mobileNumber2\" placeholder=\"رقم موبايل بديل\">\n                  </ion-input>\n                  <div *ngIf=\"isvalid && (CommunicationDataForm.controls['mobileNumber2'].hasError('pattern'))\"\n                    class=\"text-danger\">\n                    رقم الموبايل غير صحيح\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 col-md-4\">\n                <ion-label class=\"form-label\" for=\"email\">البريد الالكتروني</ion-label>\n                <ion-input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\"\n                  [disabled]=\"existingClientFlag\" placeholder=\"البريد الالكتروني\">\n                </ion-input>\n\n                <span slot=\"error\" *ngIf=\"CommunicationDataForm.controls['email'].hasError('email')\" class=\"\">\n                  قم بإدخال بريد الكتروني سليم مثل: (john@example.com)\n                </span>\n                <div *ngIf=\"isvalid && (CommunicationDataForm.controls['email'].hasError('pattern'))\"\n                  class=\"text-danger\" role=\"alert\">\n                  يجب ادخال البريد الالكتروني\n                  مثل: (john@example.com)\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n\n        <!-- Document Data -->\n        <form [formGroup]=\"DocumentDataForm\">\n          <div *ngIf=\"DocumentData\">\n            <h4>رفع مستندات</h4>\n            <ng-container *ngIf=\"!isDocumentSelected\">\n              <ion-select interface=\"popover\" placeholder=\"اختر نوع المستند\" class=\"subselect\"\n                formControlName=\"docCode\">\n                <ion-select-option *ngFor=\"let documentType of documentTypes\" [value]=\"documentType.documentTypeCode\">\n                  {{documentType.documentTypeDesc}}\n                </ion-select-option>\n              </ion-select>\n\n            </ng-container>\n            <ng-container *ngIf=\"isDocumentSelected\">\n              <ion-accordion-group>\n                <ion-accordion class=\"rounded my-2\" *ngFor=\"let image of documentDetails; let i = index\">\n                  <ion-item slot=\"header\">\n                    <ion-label class=\"font-weight-bold text-center\">صفحة رقم {{ i + 1 }}</ion-label>\n                  </ion-item>\n                  <div class=\"ion-padding\" slot=\"content\">\n                    <div class=\"row justify-content-center\">\n                      <div class=\"col text-center\">\n                        <ion-button class=\"py-0 h-max\" (click)=\"takePicture(i)\" #getBusinessImageButton><ion-icon\n                            slot=\"start\"\n                            [name]=\"getBusinessImageButton.disabled ? 'checkmark-done-sharp' : 'camera-sharp'\"></ion-icon>اضافة\n                          صورة</ion-button>\n                        <ion-modal #imageModal trigger=\"open-business-image-modal\" class=\"p-5 h-auto image-modal\"\n                          [backdropDismiss]=\"true\" [keyboardClose]=\"true\">\n                          <ng-template>\n                            <ion-content>\n                              <img [src]=\"imageSrc\" class=\"p-4\" />\n                              <div style=\"\n                                  position: fixed;\n                                  bottom: 0;\n                                  width: 100%;\n                                  background-color: var(--card-bg);\n                                \">\n                                <ion-button expand=\"block\" (click)=\"imageModal.dismiss()\">اغلاق</ion-button>\n                              </div>\n                            </ion-content>\n                          </ng-template>\n                        </ion-modal>\n                      </div>\n                    </div>\n                  </div>\n                </ion-accordion>\n              </ion-accordion-group>\n            </ng-container>\n\n            <div class=\"d-flex justify-content-center mt-2 text-center\">\n              <ion-button (click)=\"showCurrentDocuments()\">عرض المستندات</ion-button>\n              <ion-button (click)=\"addNewDocument()\"> اضافة مستند </ion-button>\n              <ion-button color=\"danger\" [disabled]=\"!isDocumentSelected\" (click)=\"backButton()\">عودة</ion-button>\n            </div>\n          </div>\n\n          <div class=\"row d-flex justify-content-center\" *ngIf=\"displayDocuments\">\n            <ion-img class=\"zoomable mt-3\" *ngFor=\" let doc of allDocs\"\n              src=\"data:image/jpeg;base64,{{ doc }}\"></ion-img>\n          </div>\n        </form>\n\n        <div class=\"d-flex justify-content-center mt-2 text-center\">\n\n          <ion-button expand=\"block\" color=\"danger\" (click)=\"back()\" *ngIf=\"!PersonalData\"> رجوع </ion-button>\n          <ion-button expand=\"block\" (click)=\"SubmitForm()\">حفظ التعديلات</ion-button>\n          <ion-button *ngIf=\"!DocumentData\" (click)=\" next()\" expand=\"block\">التالي</ion-button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<!-- \n<ion-modal #modal trigger=\"open-trigger\" isOpen=\"openOTPModal\">\n  <ng-template>\n    <ion-toolbar>\n      <ion-title> بيانات العميل </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"modal.dismiss()\">\n          <ion-icon name=\"close-outline\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-card class=\"w-100 h-100 mx-0 my-0 inherit-color\">\n      <ion-card-content class=\"align-middle\">\n        <ion-grid class=\"card inherit-color px-0 py-0\">\n          <div class=\"card-body\">\n\n          </div>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </ng-template>\n</ion-modal> -->";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_registry_client-edit_client-edit_module_ts.js.map