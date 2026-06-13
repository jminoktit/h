"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_login_login_module_ts"],{

/***/ 21950:
/*!***********************************************************!*\
  !*** ./src/app/views/pages/login/login-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page */ 7152);






var routes = [{
  path: '',
  component: _login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage
}];

var LoginPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoginPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoginPageRoutingModule);
});

LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoginPageRoutingModule);


/***/ }),

/***/ 96418:
/*!***************************************************!*\
  !*** ./src/app/views/pages/login/login.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ 21950);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ 7152);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ 63430);











var LoginPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LoginPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LoginPageModule);
});

LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_2__.LoginPageRoutingModule, _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_login_page__WEBPACK_IMPORTED_MODULE_3__.LoginPage]
})], LoginPageModule);


/***/ }),

/***/ 7152:
/*!*************************************************!*\
  !*** ./src/app/views/pages/login/login.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page.html?ngResource */ 24732);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 59446);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_theme_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/theme.service */ 6074);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @capacitor/app */ 93253);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/location.service */ 33094);
/* harmony import */ var src_app_core_services_camera_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/camera.service */ 9102);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/core/services/user.service */ 88386);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);






















var LoginPage = /*#__PURE__*/function () {
  function LoginPage(formBuilder, authService, cameraService, http, envService, router, activatedRoute, document, themeService, platform, alertController, location, pagingService, elRef, datePipe, inputMaskingService, userService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginPage);

    this.formBuilder = formBuilder;
    this.authService = authService;
    this.cameraService = cameraService;
    this.http = http;
    this.envService = envService;
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.document = document;
    this.themeService = themeService;
    this.platform = platform;
    this.alertController = alertController;
    this.location = location;
    this.pagingService = pagingService;
    this.elRef = elRef;
    this.datePipe = datePipe;
    this.inputMaskingService = inputMaskingService;
    this.userService = userService;
    this.showLoader = false;
    this.isLoggedIn = false;
    this.shouldChangePassword = false;
    this.isSubmitted = false;
    this.errorMessage = null;
    this.openOtp = false;
    this.loginForm = this.formBuilder.group({
      // serviceUrl: ["", [Validators.required]],
      username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]],
      password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]]
    });
    this.otpForm = this.formBuilder.group({
      firstField: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.max(99)]],
      secondField: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.max(99)]],
      thirdField: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.max(99)]],
      fourthField: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.max(99)]]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginPage, [{
    key: "ionViewWillEnter",
    value: function ionViewWillEnter() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // check if logged in already and redirect
                this.registerBackButtonListener();
                this.updateTheme();
                _context.next = 4;
                return this.checkForLogout();

              case 4:
                _context.next = 6;
                return this.initializeForm();

              case 6:
                this.elRef.nativeElement.addEventListener("keydown", this.handleKeyDown.bind(this));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "ionViewWillLeave",
    value: function ionViewWillLeave() {
      this.backButtonListener.unsubscribe();
      this.elRef.nativeElement.removeEventListener("keydown", this.handleKeyDown.bind(this));
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      if (event.key === "Enter") {
        this.onSubmit();
      }
    }
  }, {
    key: "registerBackButtonListener",
    value: function registerBackButtonListener() {
      var _this = this;

      this.backButtonListener = this.platform.backButton.subscribeWithPriority(0, function (next) {
        _this.exitAlert();
      });
    }
  }, {
    key: "exitAlert",
    value: function exitAlert() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var alert;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                alert = this.alertController.create({
                  header: "الخروج",
                  message: "هل انت متأكد من الخروج من البرنامج؟",
                  buttons: [{
                    text: "نعم",
                    role: "OK",
                    cssClass: "alert-button-confirm",
                    handler: function handler() {
                      _capacitor_app__WEBPACK_IMPORTED_MODULE_8__.App.exitApp();
                    }
                  }, {
                    text: "لا",
                    cssClass: "alert-button-confirm",
                    role: "cancel",
                    handler: function handler() {}
                  }]
                });
                _context2.next = 3;
                return alert;

              case 3:
                _context2.sent.present();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "updateTheme",
    value: function updateTheme() {
      if (this.themeService.isDarkMode) {
        this.document.body.classList.add("darkmode");
      } else {
        this.document.body.classList.remove("darkmode");
      }
    }
  }, {
    key: "checkForLogout",
    value: function checkForLogout() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var params;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                params = this.activatedRoute.snapshot.queryParams;

                if (!!params["logout"] && params["logout"] == "true") {
                  this.resetLoginForm();
                  this.resetOtpForm();
                }

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "initializeForm",
    value: function initializeForm() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
    }
  }, {
    key: "resetLoginForm",
    value: function resetLoginForm() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var otpToken;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.isSubmitted = false;
                _context5.next = 3;
                return this.authService.getOtpToken();

              case 3:
                otpToken = _context5.sent;
                this.openOtp = !!otpToken;
                this.errorMessage = null;
                this.loginForm.patchValue({
                  username: "",
                  password: ""
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
    key: "resetOtpForm",
    value: function resetOtpForm() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        var otpToken;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.isSubmitted = false;
                _context6.next = 3;
                return this.authService.getOtpToken();

              case 3:
                otpToken = _context6.sent;
                this.openOtp = !!otpToken;
                this.errorMessage = null;
                this.otpForm.patchValue({
                  firstField: "",
                  secondField: "",
                  thirdField: "",
                  fourthField: ""
                });

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    } // async saveServiceUrl(): Promise<void> {
    //   const currentServiceUrl: string =
    //     this.loginForm.get("serviceUrl").value ?? "";
    //   await this.authService.setServiceUrl(currentServiceUrl);
    // }

  }, {
    key: "onSubmit",
    value: function onSubmit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        var serviceUrl, username, password, response;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.isSubmitted = true;

                if (this.loginForm.valid) {
                  _context7.next = 3;
                  break;
                }

                return _context7.abrupt("return");

              case 3:
                this.showLoader = true;
                _context7.prev = 4;
                serviceUrl = new URL(this.envService.API_URL);
                _context7.next = 12;
                break;

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](4);
                this.errorMessage = "عنوان الخادم غير سليم، برجاء الرجوع لمشرف النظام";
                return _context7.abrupt("return");

              case 12:
                username = this.loginForm.get("username").value;
                password = this.loginForm.get("password").value;
                _context7.prev = 14;
                _context7.next = 17;
                return this.authService.login(username, password);

              case 17:
                response = _context7.sent;

                if (typeof response === "boolean") {
                  this.shouldChangePassword = !response;
                  this.openOtp = false;
                } else {
                  this.shouldChangePassword = false;
                  this.openOtp = response.twoFactorAuth;
                }

                this.errorMessage = "";
                _context7.next = 25;
                break;

              case 22:
                _context7.prev = 22;
                _context7.t1 = _context7["catch"](14);
                this.errorMessage = _context7.t1;

              case 25:
                this.showLoader = false;

              case 26:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[4, 8], [14, 22]]);
      }));
    }
  }, {
    key: "onSubmitOtp",
    value: function onSubmitOtp() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
        var serviceUrl, first, second, third, fourth, otp, response;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                this.isSubmitted = true;

                if (this.otpForm.valid) {
                  _context8.next = 4;
                  break;
                }

                this.errorMessage = "يجب أن تكون حقول OTP بين 0 و 99";
                return _context8.abrupt("return");

              case 4:
                this.showLoader = true;
                _context8.prev = 5;
                serviceUrl = new URL(this.envService.API_URL);
                _context8.next = 13;
                break;

              case 9:
                _context8.prev = 9;
                _context8.t0 = _context8["catch"](5);
                this.errorMessage = "عنوان الخادم غير سليم، برجاء الرجوع لمشرف النظام";
                return _context8.abrupt("return");

              case 13:
                first = this.otpForm.get("firstField").value;
                second = this.otpForm.get("secondField").value;
                third = this.otpForm.get("thirdField").value;
                fourth = this.otpForm.get("fourthField").value;
                otp = "".concat(first, "/").concat(second, "/").concat(third, "/").concat(fourth);
                _context8.prev = 18;
                _context8.next = 21;
                return this.authService.sendOtp(otp);

              case 21:
                response = _context8.sent;
                this.errorMessage = "";
                _context8.next = 28;
                break;

              case 25:
                _context8.prev = 25;
                _context8.t1 = _context8["catch"](18);
                this.errorMessage = _context8.t1;

              case 28:
                this.showLoader = false;

              case 29:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[5, 9], [18, 25]]);
      }));
    }
  }]);

  return LoginPage;
}();

LoginPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: src_app_core_services_camera_service__WEBPACK_IMPORTED_MODULE_10__.CameraService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClient
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute
  }, {
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.DOCUMENT]
    }]
  }, {
    type: src_app_core_services_theme_service__WEBPACK_IMPORTED_MODULE_7__.ThemeService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.Platform
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.AlertController
  }, {
    type: src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_9__.LocationService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_11__.pagingService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ElementRef
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_13__.InputMaskingService
  }, {
    type: src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_12__.UserService
  }];
};

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
  selector: "app-login",
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], LoginPage);


/***/ }),

/***/ 59446:
/*!**************************************************************!*\
  !*** ./src/app/views/pages/login/login.page.scss?ngResource ***!
  \**************************************************************/
/***/ (function(module) {

module.exports = ":host {\n  height: 100vh;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.alert-button-confirm {\n  color: var(--body-color);\n}\n\n.password {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row-reverse;\n      flex-direction: row-reverse;\n}\n\n.showIcon {\n  cursor: pointer;\n}\n\n.modal-container {\n  width: 46rem;\n}\n\n.modal-title {\n  font-weight: 900;\n  font-size: 1.5rem;\n}\n\n.modal-content {\n  border-radius: 1rem;\n  box-shadow: var(--card-box-shadow);\n  background-color: var(--card-bg);\n  border-color: var(--card-border-color);\n}\n\n.form-validators-group {\n  margin-bottom: 10px;\n}\n\n.input-validator {\n  font-weight: 600;\n  padding-right: 10px;\n  padding-left: 10px;\n  color: #ff3366 !important;\n  -ms-user-select: none;\n      user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n.input-validator::before {\n  content: \"-\";\n  margin-left: 6px;\n}\n\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.form-control-error {\n  border-color: #ff3366;\n}\n\n.form-control-error:hover {\n  border-color: #da0036;\n}\n\n.form-control-info {\n  font-weight: 700;\n  font-size: 0.8rem;\n  padding-right: 10px;\n  padding-left: 10px;\n  color: var(--theme-color-primary) !important;\n  -ms-user-select: none;\n      user-select: none;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n\n.form-control-info::before {\n  content: \"-\";\n  margin-left: 6px;\n}\n\n.form-label {\n  white-space: nowrap;\n  -ms-user-select: text;\n      user-select: text;\n  -moz-user-select: text;\n  -webkit-user-select: text;\n}\n\n.form-group-title {\n  display: block;\n  color: var(--theme-color-primary);\n}\n\n.success-report {\n  font-weight: 700;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n  border-radius: 6px;\n  background-image: linear-gradient(to left, rgba(0, 220, 103, 0.2), var(--card-bg));\n  border-color: #d6e9c6;\n  color: var(--body-color);\n}\n\n.error-report {\n  font-weight: 700;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n  border-radius: 6px;\n  background-image: linear-gradient(to left, rgba(220, 0, 0, 0.2), var(--card-bg));\n  border-color: #e9c6c6;\n  color: var(--body-color);\n}\n\n.url-modal {\n  --height: 14rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtNQUFBLG1CQUFBO0VBQ0EscUJBQUE7TUFBQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLCtCQUFBO01BQUEsMkJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURLQTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtNQUFBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ0ZGOztBREdFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDREo7O0FETUU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNISjs7QURPQTtFQUNFLHFCQUFBO0FDSkY7O0FES0U7RUFDRSxxQkFBQTtBQ0hKOztBRE9BO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLHFCQUFBO01BQUEsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDSkY7O0FES0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURPQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7TUFBQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNKRjs7QURPQTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtBQ0pGOztBRE9BO0VBR0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFFQSxrRkFBQTtFQUtBLHFCQUFBO0VBQ0Esd0JBQUE7QUNYRjs7QURjQTtFQUdFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsZ0ZBQUE7RUFLQSxxQkFBQTtFQUNBLHdCQUFBO0FDbEJGOztBRHFCQTtFQUNFLGVBQUE7QUNsQkYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWxlcnQtYnV0dG9uLWNvbmZpcm0ge1xyXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxufVxyXG5cclxuLnBhc3N3b3JkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuLnNob3dJY29uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250YWluZXIge1xyXG4gIHdpZHRoOiA0NnJlbTtcclxufVxyXG5cclxuLm1vZGFsLXRpdGxlIHtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIC8vIHVzZXItc2VsZWN0OiB0ZXh0O1xyXG4gIC8vIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XHJcbiAgLy8gLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1ib3gtc2hhZG93KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJnKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yKTtcclxufVxyXG5cclxuLmZvcm0tdmFsaWRhdG9ycy1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmlucHV0LXZhbGlkYXRvciB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBjb2xvcjogcmdiKDI1NSwgNTEsIDEwMikgIWltcG9ydGFudDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiLVwiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLXJlcXVpcmVkIHtcclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIipcIjtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1lcnJvciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKTtcclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxOCwgMCwgNTQpO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1pbmZvIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1wcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCItXCI7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiB0ZXh0O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cC10aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4uc3VjY2Vzcy1yZXBvcnQge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzQ1Y2NiMSwgMC44KTtcclxuICAvLyBjb2xvcjogI2Y2ZmNlZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNhNGQ0OTEsIDAuMyk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gbGVmdCxcclxuICAgIHJnYmEoIzAwZGM2NywgMC4yKSxcclxuICAgIHZhcigtLWNhcmQtYmcpXHJcbiAgKTtcclxuICBib3JkZXItY29sb3I6ICNkNmU5YzY7XHJcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xyXG59XHJcblxyXG4uZXJyb3ItcmVwb3J0IHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCM0NWNjYjEsIDAuOCk7XHJcbiAgLy8gY29sb3I6ICNmNmZjZWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjYTRkNDkxLCAwLjMpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGxlZnQsXHJcbiAgICByZ2JhKCNkYzAwMDAsIDAuMiksXHJcbiAgICB2YXIoLS1jYXJkLWJnKVxyXG4gICk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTljNmM2O1xyXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxufVxyXG5cclxuLnVybC1tb2RhbCB7XHJcbiAgLS1oZWlnaHQ6IDE0cmVtO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hbGVydC1idXR0b24tY29uZmlybSB7XG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcbn1cblxuLnBhc3N3b3JkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4uc2hvd0ljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICB3aWR0aDogNDZyZW07XG59XG5cbi5tb2RhbC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtYm94LXNoYWRvdyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmcpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNhcmQtYm9yZGVyLWNvbG9yKTtcbn1cblxuLmZvcm0tdmFsaWRhdG9ycy1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5pbnB1dC12YWxpZGF0b3Ige1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjZmYzMzY2ICFpbXBvcnRhbnQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xufVxuLmlucHV0LXZhbGlkYXRvcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCItXCI7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1jb250cm9sLWVycm9yIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmYzMzY2O1xufVxuLmZvcm0tY29udHJvbC1lcnJvcjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2RhMDAzNjtcbn1cblxuLmZvcm0tY29udHJvbC1pbmZvIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xufVxuLmZvcm0tY29udHJvbC1pbmZvOjpiZWZvcmUge1xuICBjb250ZW50OiBcIi1cIjtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn1cblxuLmZvcm0tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbn1cblxuLmZvcm0tZ3JvdXAtdGl0bGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc3VjY2Vzcy1yZXBvcnQge1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMjIwLCAxMDMsIDAuMiksIHZhcigtLWNhcmQtYmcpKTtcbiAgYm9yZGVyLWNvbG9yOiAjZDZlOWM2O1xuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XG59XG5cbi5lcnJvci1yZXBvcnQge1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMjIwLCAwLCAwLCAwLjIpLCB2YXIoLS1jYXJkLWJnKSk7XG4gIGJvcmRlci1jb2xvcjogI2U5YzZjNjtcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xufVxuXG4udXJsLW1vZGFsIHtcbiAgLS1oZWlnaHQ6IDE0cmVtO1xufSJdfQ== */";

/***/ }),

/***/ 24732:
/*!**************************************************************!*\
  !*** ./src/app/views/pages/login/login.page.html?ngResource ***!
  \**************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<!-- <ion-header>\n  <ion-toolbar class=\"navbar\" style=\"width: 100%\">\n    <ion-title>\n      <ion-button fill=\"clear\" id=\"open-url-modal\">\n        <ion-icon name=\"settings-sharp\"></ion-icon>\n      </ion-button>\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<!-- <ion-modal\n  #urlModal\n  trigger=\"open-url-modal\"\n  class=\"p-5 h-auto url-modal\"\n  [backdropDismiss]=\"true\"\n  [keyboardClose]=\"true\"\n  ><ng-template\n    ><ion-content\n      ><div class=\"modal-body\">\n        <div class=\"container\">\n          <form [formGroup]=\"loginForm\">\n            <div class=\"modal-body px-sm-5 px-3 py-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\">\n                  URL\n                </ion-label>\n                <ion-input\n                  #serviceUrl\n                  (ionBlur)=\"\n                  serviceUrl.value = serviceUrl.value.toString().trim()\n                  \"\n                  type=\"text\"\n                  class=\"form-control\"\n                  dir=\"ltr\"\n                  [class.form-control-error]=\"\n                    isSubmitted && loginForm.get('serviceUrl').errors\n                  \"\n                  placeholder=\"http://...\"\n                  formControlName=\"serviceUrl\"\n                ></ion-input>\n                <ion-button\n                  class=\"mt-4\"\n                  size=\"block\"\n                  (click)=\"saveServiceUrl(); urlModal.dismiss()\"\n                  >حفظ</ion-button\n                >\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </ion-content></ng-template\n  >\n</ion-modal> -->\n\n<ion-content>\n  <div *ngIf=\"!openOtp && !shouldChangePassword\"\n    class=\"container align-items-center min-vh-100 d-flex justify-content-center\">\n    <div class=\"modal-container\">\n      <div class=\"card-body\">\n        <div class=\"d-flex h-100 justify-content-center align-items-center\">\n          <div class=\"mx-auto app-login-box col-md-8\">\n            <div class=\"modal-dialog w-100 mx-auto\">\n              <div class=\"modal-content\">\n                <form *ngIf=\"!isLoggedIn\" name=\"form\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\">\n                  <div class=\"modal-body px-sm-5 px-3 py-4\">\n                    <div class=\"text-center modal-title mt-2 mb-3\">\n                      تسجيل الدخول\n                    </div>\n                    <div class=\"error-report\" *ngIf=\"isSubmitted && errorMessage\">\n                      خطأ: {{ errorMessage }}\n                    </div>\n\n                    <!-- <div class=\"form-group\">\n                      <ion-label class=\"form-label form-label-required\">\n                        URL\n                      </ion-label>\n                      <ion-input\n                        #serviceUrl\n                        (ionBlur)=\"\n                        serviceUrl.value = serviceUrl.value.toString().trim()\n                        \"\n                        type=\"text\"\n                        class=\"form-control\"\n                        dir=\"ltr\"\n                        [class.form-control-error]=\"\n                          isSubmitted && loginForm.get('serviceUrl').errors\n                        \"\n                        placeholder=\"http://...\"\n                        formControlName=\"serviceUrl\"\n                      ></ion-input>\n                      <div\n                        class=\"form-validators-group\"\n                        *ngIf=\"isSubmitted && loginForm.get('serviceUrl').errors\"\n                      >\n                        <div\n                          class=\"text-danger input-validator\"\n                          *ngIf=\"loginForm.get('serviceUrl').hasError('required')\"\n                        >\n                          يجب ادخال هذا الحقل\n                        </div>\n                      </div>\n                    </div> -->\n\n                    <div class=\"form-group\">\n                      <ion-label class=\"form-label form-label-required\">\n                        اسم المستخدم\n                      </ion-label>\n                      <ion-input #username (ionBlur)=\"\n                          username.value = username.value.toString().trim()\n                        \" type=\"text\" class=\"form-control\" [class.form-control-error]=\"\n                          isSubmitted && loginForm.get('username').errors\n                        \" placeholder=\"اسم المستخدم\" formControlName=\"username\"></ion-input>\n                      <div class=\"form-validators-group\" *ngIf=\"isSubmitted && loginForm.get('username').errors\">\n                        <div class=\"text-danger input-validator\" *ngIf=\"loginForm.get('username').hasError('required')\">\n                          يجب ادخال اسم المستخدم\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                      <ion-label class=\"form-label form-label-required\">\n                        كلمة المرور\n                      </ion-label>\n                      <ion-input #password type=\"password\" class=\"form-control\" [class.form-control-error]=\"\n                          isSubmitted && loginForm.get('password').errors\n                        \" placeholder=\"كلمة المرور\" formControlName=\"password\"></ion-input>\n                      <div class=\"form-validators-group\" *ngIf=\"isSubmitted && loginForm.get('password').errors\">\n                        <div class=\"text-danger input-validator\" *ngIf=\"loginForm.get('password').hasError('required')\">\n                          يجب ادخال كلمة المرور\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"mt-4 mb-2\">\n                      <ion-button type=\"submit\" expand=\"block\">\n                        تسجيل الدخول\n                      </ion-button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n\n              <!-- <div class=\"text-center opacity-8 mt-3\">\n                جميع الحقوق محفوظة لشركة نوعية البيئة الدولية لتكنولوجيا\n                المعلومات\n              </div>\n              <div class=\"text-center opacity-8\">EQI-IT © 2022</div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"openOtp && !shouldChangePassword\"\n    class=\"container align-items-center min-vh-100 d-flex justify-content-center\">\n    <div class=\"modal-container\">\n      <div class=\"card-body\">\n        <div class=\"d-flex h-100 justify-content-center align-items-center\">\n          <div class=\"mx-auto app-login-box col-md-8\">\n            <div class=\"modal-dialog w-100 mx-auto\">\n              <div class=\"modal-content\">\n                <form name=\"form\" (ngSubmit)=\"onSubmitOtp()\" [formGroup]=\"otpForm\">\n                  <div class=\"modal-body px-sm-5 px-3 py-4\">\n                    <div class=\"text-center modal-title mt-2 mb-3\">\n                      تسجيل الدخول\n                    </div>\n                    <div class=\"error-report\" *ngIf=\"isSubmitted && errorMessage\">\n                      خطأ: {{ errorMessage }}\n                    </div>\n\n                    <ion-grid>\n                      <ion-row>\n                        <ion-col>\n                          <ion-input type=\"text\" class=\"form-control\" id=\"fourthField\" formControlName=\"fourthField\"\n                            min=\"0\" max=\"99\"\n                            (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 99, 0)\"></ion-input>\n                        </ion-col>\n                        <ion-col>\n                          <ion-input type=\"text\" class=\"form-control\" id=\"thirdField\" formControlName=\"thirdField\"\n                            min=\"0\" max=\"99\"\n                            (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 99, 0)\"></ion-input>\n                        </ion-col>\n                        <ion-col>\n                          <ion-input type=\"text\" class=\"form-control\" id=\"secondField\" formControlName=\"secondField\"\n                            min=\"0\" max=\"99\"\n                            (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 99, 0)\"></ion-input>\n                        </ion-col>\n                        <ion-col>\n                          <ion-input type=\"text\" class=\"form-control\" id=\"firstField\" formControlName=\"firstField\"\n                            min=\"0\" max=\"99\"\n                            (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 99, 0)\"></ion-input>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row>\n                        <ion-col>\n                          <ion-button button-type=\"link\" (click)=\"onSubmit()\">\n                            إعادة إرسال OTP\n                          </ion-button>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n\n                    <div class=\"mt-4 mb-2\">\n                      <ion-button type=\"submit\" expand=\"block\">\n                        أرسل الOTP\n                      </ion-button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-change-user-password [isLoggingIn]=\"true\" [username]=\"loginForm.controls.username.value\"\n    *ngIf=\"shouldChangePassword\"></app-change-user-password>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_login_login_module_ts.js.map