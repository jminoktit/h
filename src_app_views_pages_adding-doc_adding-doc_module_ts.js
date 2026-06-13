"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_adding-doc_adding-doc_module_ts"],{

/***/ 27656:
/*!*********************************************************************!*\
  !*** ./src/app/views/pages/adding-doc/adding-doc-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addingdocPageRoutingModule": function() { return /* binding */ addingdocPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _adding_doc_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adding-doc.page */ 93774);






var routes = [{
  path: '',
  component: _adding_doc_page__WEBPACK_IMPORTED_MODULE_2__.addingdocPage
}];

var addingdocPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function addingdocPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, addingdocPageRoutingModule);
});

addingdocPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], addingdocPageRoutingModule);


/***/ }),

/***/ 2801:
/*!*************************************************************!*\
  !*** ./src/app/views/pages/adding-doc/adding-doc.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddingDocPageModule": function() { return /* binding */ AddingDocPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);
/* harmony import */ var _adding_doc_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adding-doc-routing.module */ 27656);
/* harmony import */ var _adding_doc_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adding-doc.page */ 93774);












var AddingDocPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AddingDocPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AddingDocPageModule);
});

AddingDocPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _adding_doc_routing_module__WEBPACK_IMPORTED_MODULE_3__.addingdocPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule],
  declarations: [_adding_doc_page__WEBPACK_IMPORTED_MODULE_4__.addingdocPage]
})], AddingDocPageModule);


/***/ }),

/***/ 93774:
/*!***********************************************************!*\
  !*** ./src/app/views/pages/adding-doc/adding-doc.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addingdocPage": function() { return /* binding */ addingdocPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _adding_doc_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adding-doc.page.html?ngResource */ 11309);
/* harmony import */ var _adding_doc_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adding-doc.page.scss?ngResource */ 43576);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/state.service */ 87051);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_camera_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/camera.service */ 9102);
















var addingdocPage = /*#__PURE__*/function () {
  function addingdocPage(env, http, formBuilder, alertController, toastController, router, stateService, alertSerivce, platform, cameraService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, addingdocPage);

    this.env = env;
    this.http = http;
    this.formBuilder = formBuilder;
    this.alertController = alertController;
    this.toastController = toastController;
    this.router = router;
    this.stateService = stateService;
    this.alertSerivce = alertSerivce;
    this.platform = platform;
    this.cameraService = cameraService;
    this.showLoader = false;
    this.isSearching = true;
    this.isDocumentSelected = false;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(addingdocPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var isDataRestored;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.registerBackButtonListener();
                _context.next = 3;
                return this.loadSession();

              case 3:
                isDataRestored = _context.sent;

                if (!isDataRestored) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return");

              case 8:
                this.getDocumentTypes();

              case 9:
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
    key: "registerBackButtonListener",
    value: function registerBackButtonListener() {
      var _this = this;

      this.backButtonListener = this.platform.backButton.subscribeWithPriority(10, function (next) {
        _this.backButton();
      });
    }
  }, {
    key: "saveSession",
    value: function saveSession(index) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var uri, state;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                uri = this.router.url;
                state = this.stateService.serialize({
                  showLoader: this.showLoader,
                  isSearching: this.isSearching,
                  isDocumentSelected: this.isDocumentSelected,
                  documentTypes: this.documentTypes,
                  clientInfo: this.clientInfo,
                  currentDocument: this.currentDocument,
                  documentDetails: this.documentDetails,
                  imageSrc: this.imageSrc,
                  index: index
                });
                _context2.next = 4;
                return this.stateService.savePageState(uri, state);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "loadSession",
    value: function loadSession() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var uri, serializedState, restoredResult, state, index;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.showLoader = true;
                _context3.prev = 1;
                uri = this.router.url;
                _context3.next = 5;
                return this.stateService.getPageState(uri);

              case 5:
                serializedState = _context3.sent;
                _context3.next = 8;
                return this.stateService.getAppRestoredResult();

              case 8:
                restoredResult = _context3.sent;

                if (!(!serializedState || !restoredResult)) {
                  _context3.next = 12;
                  break;
                }

                this.showLoader = false;
                return _context3.abrupt("return", false);

              case 12:
                state = this.stateService.deserialize(serializedState);
                _context3.next = 15;
                return this.stateService.clearPageState(uri);

              case 15:
                this.showLoader = state.showLoader;
                this.isSearching = state.isSearching;
                this.isDocumentSelected = state.isDocumentSelected;
                this.documentTypes = state.documentTypes;
                this.clientInfo = state.clientInfo;
                this.currentDocument = state.currentDocument;
                this.documentDetails = state.documentDetails;
                this.imageSrc = state.imageSrc;
                index = state.index;

                if (!(!restoredResult.success || restoredResult.pluginId != "Camera" || restoredResult.methodName != "getPhoto" || !restoredResult.data)) {
                  _context3.next = 27;
                  break;
                }

                this.showLoader = false;
                return _context3.abrupt("return", false);

              case 27:
                this.documentDetails[index] = restoredResult.data.base64String;
                this.imageSrc = "data:image/jpg;base64," + restoredResult.data.base64String;
                this.imageModal.present();
                this.uploadPicture(index);
                this.showLoader = false;
                return _context3.abrupt("return", true);

              case 35:
                _context3.prev = 35;
                _context3.t0 = _context3["catch"](1);
                this.showLoader = false;
                return _context3.abrupt("return", false);

              case 39:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 35]]);
      }));
    }
  }, {
    key: "clearSession",
    value: function clearSession() {
      var uri = this.router.url;
      this.stateService.clearPageState(uri);
    }
  }, {
    key: "test",
    value: function test() {
      this.clientInfo = {
        client_code: 21480,
        org_branch_code: 2,
        client_name: "qqqqq",
        application_code: null,
        entry_date: null,
        client_type_name: "فردي",
        client_key: 190020021480,
        application_key: null,
        client_type_code: 1,
        group_name: null,
        loan_code: null,
        nation_id: null,
        loan_key: null
      };
      this.currentDocument = {
        orgCode: 19,
        branchCode: 2,
        curBranchCode: 2,
        documentSerial: 105,
        pageNumber: 5,
        documentTypeCode: 2
      };
      this.documentDetails = [].constructor(this.currentDocument.pageNumber);
      this.isSearching = false;
      this.isDocumentSelected = true;
    }
  }, {
    key: "getDocumentTypes",
    value: function getDocumentTypes() {
      var _this2 = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/Documents/AllDocumentTypes").subscribe({
        next: function next(data) {
          _this2.documentTypes = data;
          _this2.showLoader = false;
        },
        error: function error(err) {
          return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this2, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
            return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.showLoader = false;
                    _context4.next = 3;
                    return this.alertSerivce.showAlertError("\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u062E\u0627\u062F\u0645<br>".concat(JSON.stringify(err === null || err === void 0 ? void 0 : err.error)), false);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      });
    }
  }, {
    key: "clientSelected",
    value: function clientSelected(event) {
      this.isSearching = false;
      this.clientInfo = event; //console.log(event);
    }
  }, {
    key: "addNewDocument",
    value: function addNewDocument(documentTypeCode) {
      var _this3 = this;

      this.showLoader = true;
      this.http.post(this.env.API_URL + "api/Documents/InsertDocument", {
        documentTypeCode: documentTypeCode,
        clientKey: this.clientInfo.client_key.toString()
      }).subscribe({
        next: function next(data) {
          _this3.currentDocument = data;
          console.log(data);
          _this3.documentDetails = [].constructor(data.pageNumber);
          _this3.isDocumentSelected = true;
          _this3.showLoader = false;
        },
        error: function error(err) {
          return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
            return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.showLoader = false;
                    _context5.next = 3;
                    return this.alertSerivce.showAlertError("\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u0627\u062A\u0635\u0627\u0644 \u0628\u0627\u0644\u062E\u0627\u062F\u0645<br>".concat(JSON.stringify(err === null || err === void 0 ? void 0 : err.error)), false);

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      });
    }
  }, {
    key: "takePicture",
    value: function takePicture(index) {
      var _a, _b;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        var cameraResult;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.showLoader = true;
                _context6.next = 3;
                return this.saveSession(index);

              case 3:
                _context6.next = 5;
                return this.cameraService.getPhoto();

              case 5:
                cameraResult = _context6.sent;

                if (cameraResult.success) {
                  this.documentDetails[index] = (_a = cameraResult.photo) === null || _a === void 0 ? void 0 : _a.base64String;
                  this.imageSrc = "data:image/jpg;base64," + ((_b = cameraResult.photo) === null || _b === void 0 ? void 0 : _b.base64String);
                  this.imageModal.present();
                  this.uploadPicture(index);
                } else {
                  this.alertSerivce.showAlertError(cameraResult.message, false);
                }

                this.clearSession();
                this.showLoader = false;

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "uploadPicture",
    value: function uploadPicture(index) {
      var _this4 = this;

      this.showLoader = true;
      var image = this.documentDetails[index];
      this.http.post(this.env.API_URL + "api/Documents/UploadImage", Object.assign(Object.assign({}, this.currentDocument), {
        pageNumber: index + 1,
        image: image
      })).subscribe({
        next: function next(data) {
          _this4.showLoader = false;

          _this4.presentToast("تم", "تم رفع الصورة بنجاح");
        },
        error: function error(err) {
          _this4.showLoader = false;
          _this4.documentDetails[index] = null;

          _this4.presentToast("خطأ", "خطأ في رفع الصورة");
        }
      });
    }
  }, {
    key: "isImageValid",
    value: function isImageValid(index) {
      var image = this.documentDetails[index];
      return !!image && image != "" && /^[a-zA-Z0-9\+/]*={0,3}$/.test(image);
    } // async checkCameraPermission(): Promise<boolean> {
    //   let { photos, camera } = await Camera.checkPermissions();
    //   return photos == "granted" && camera == "granted";
    // }
    // async canAskForCameraPermission(): Promise<boolean> {
    //   let { photos, camera } = await Camera.checkPermissions();
    //   return photos != "denied" && camera != "denied";
    // }
    // async requestCameraPermission(): Promise<boolean> {
    //   let granted: boolean = await this.checkCameraPermission();
    //   if (granted) {
    //     return true;
    //   } else {
    //     const canAskForPermission: boolean =
    //       await this.canAskForCameraPermission();
    //     if (canAskForPermission) {
    //       await Camera.requestPermissions();
    //       granted = await this.checkCameraPermission();
    //       if (granted) {
    //         return true;
    //       }
    //     }
    //   }
    //   return false;
    // }

  }, {
    key: "backButton",
    value: function backButton() {
      if (!this.isSearching) {
        // Client selected
        if (this.isDocumentSelected) {
          this.backToClient();
        } else {
          this.backToSearch();
        }
      } else {
        this.router.navigate(["/"]);
      }
    }
  }, {
    key: "backToSearch",
    value: function backToSearch() {
      this.imageSrc = null;
      this.documentDetails = null;
      this.currentDocument = null;
      this.clientInfo = null;
      this.isDocumentSelected = false;
      this.isSearching = true;
    }
  }, {
    key: "backToClient",
    value: function backToClient() {
      this.imageSrc = null;
      this.documentDetails = null;
      this.currentDocument = null;
      this.isDocumentSelected = false;
    }
  }, {
    key: "presentToast",
    value: function presentToast(header, message) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        var toast;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.toastController.create({
                  header: header,
                  message: message,
                  cssClass: "toast-primary",
                  duration: 2000,
                  position: "bottom"
                });

              case 2:
                toast = _context7.sent;
                _context7.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }]);

  return addingdocPage;
}();

addingdocPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
  }, {
    type: src_app_core_services_state_service__WEBPACK_IMPORTED_MODULE_6__.StateService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
  }, {
    type: src_app_core_services_camera_service__WEBPACK_IMPORTED_MODULE_8__.CameraService
  }];
};

addingdocPage.propDecorators = {
  imageModal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ["imageModal"]
  }]
};
addingdocPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: "app-adding-doc",
  template: _adding_doc_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_adding_doc_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], addingdocPage);


/***/ }),

/***/ 43576:
/*!************************************************************************!*\
  !*** ./src/app/views/pages/adding-doc/adding-doc.page.scss?ngResource ***!
  \************************************************************************/
/***/ (function(module) {

module.exports = ".table tbody th,\n.table tbody td {\n  padding: 0.4rem 0.9375rem !important;\n}\n\n.labelpad {\n  padding-bottom: 55px;\n}\n\n@media (min-width: 770px) {\n  .btnMar {\n    margin-right: 290%;\n    font-size: medium;\n  }\n}\n\n.checkBoxs {\n  margin-right: 1.5rem;\n}\n\n.form-control-error {\n  border-color: #ff3366;\n}\n\n.form-control-error:hover {\n  border-color: #da0036;\n}\n\n.input-validator {\n  font-weight: 600;\n  padding-right: 10px;\n  padding-left: 10px;\n  color: #ff3366 !important;\n}\n\n.input-validator::before {\n  content: \"-\";\n  margin-left: 6px;\n}\n\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.checkBox-isactive {\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n\n.group-title {\n  font-weight: 700;\n  font-size: 1.2rem;\n  text-align: center;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n  border-radius: 6px;\n  background-image: linear-gradient(to left, rgba(112, 123, 245, 0.2), var(--card-bg));\n  border-color: #c8cbea;\n  color: var(--body-color);\n}\n\n.nested-form {\n  border: 2px solid rgba(112, 123, 245, 0.2);\n  border-radius: 5px;\n  padding: 1rem 2rem;\n}\n\n.form-group-title {\n  display: block;\n  color: var(--theme-color-primary);\n  font-weight: 700;\n}\n\n.alert-button-confirm {\n  color: var(--body-color);\n}\n\n.image-modal {\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n}\n\n.image-modal::part(content) {\n  max-width: 90%;\n  max-height: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZGluZy1kb2MucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEZWxldGUlMjBpdFxcTmV3TW9oYXNzaWxDbGllbnRfMzA5NV9zcmNcXE5ld01vaGFzc2lsQ2xpZW50XFxzcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxhZGRpbmctZG9jXFxhZGRpbmctZG9jLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTs7RUFFRSxvQ0FBQTtBQ0ROOztBRE1BO0VBQ0Usb0JBQUE7QUNIRjs7QURVQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxpQkFBQTtFQ1BGO0FBQ0Y7O0FEVUE7RUFDRSxvQkFBQTtBQ1JGOztBRFdBO0VBQ0UscUJBQUE7QUNSRjs7QURVRTtFQUNFLHFCQUFBO0FDUko7O0FEWUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ1RGOztBRFdFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDVEo7O0FEY0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNYSjs7QURlQTtFQUVFLG1CQUFBO01BQUEscUJBQUE7QUNiRjs7QURnQkE7RUFHRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFHQSxvRkFBQTtFQUtBLHFCQUFBO0VBQ0Esd0JBQUE7QUNyQkY7O0FEd0JBO0VBR0UsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDdkJGOztBRDBCQTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDdkJGOztBRDBCQTtFQUNFLHdCQUFBO0FDdkJGOztBRDBCQTtFQUNFLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxxQkFBQTtNQUFBLHVCQUFBO0FDdkJGOztBRHdCRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDdEJKIiwiZmlsZSI6ImFkZGluZy1kb2MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICB0Ym9keSB7XHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgcGFkZGluZzogMC40cmVtIDAuOTM3NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxhYmVscGFkIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcclxufVxyXG5cclxuLy8gaW9uLWJ1dHRvbiB7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbi8vICAgcGFkZGluZy1yaWdodDogMjAlO1xyXG4vLyAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NzBweCkge1xyXG4gIC5idG5NYXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyOTAlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgfVxyXG59XHJcblxyXG4uY2hlY2tCb3hzIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1lcnJvciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTgsIDAsIDU0KTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC12YWxpZGF0b3Ige1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIi1cIjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgNTEsIDEwMikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jaGVja0JveC1pc2FjdGl2ZSB7XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5ncm91cC10aXRsZSB7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjNDVjY2IxLCAwLjgpO1xyXG4gIC8vIGNvbG9yOiAjZjZmY2VmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNhNGQ0OTEsIDAuMyk7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2M4Y2JlYTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBsZWZ0LFxyXG4gICAgcmdiYSgjNzA3YmY1LCAwLjIpLFxyXG4gICAgdmFyKC0tY2FyZC1iZylcclxuICApO1xyXG4gIGJvcmRlci1jb2xvcjogI2M4Y2JlYTtcclxuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XHJcbn1cclxuXHJcbi5uZXN0ZWQtZm9ybSB7XHJcbiAgLy8gYm9yZGVyLXJpZ2h0OiAwLjJyZW0gc29saWQgcmdiYSgjNzA3YmY1LCAwLjIpO1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgjNzA3YmY1LCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwLXRpdGxlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItcHJpbWFyeSk7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmFsZXJ0LWJ1dHRvbi1jb25maXJtIHtcclxuICBjb2xvcjogdmFyKC0tYm9keS1jb2xvcik7XHJcbn1cclxuXHJcbi5pbWFnZS1tb2RhbCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAmOjpwYXJ0KGNvbnRlbnQpIHtcclxuICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgbWF4LWhlaWdodDogNzAlO1xyXG4gIH1cclxufVxyXG4iLCIudGFibGUgdGJvZHkgdGgsXG4udGFibGUgdGJvZHkgdGQge1xuICBwYWRkaW5nOiAwLjRyZW0gMC45Mzc1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbHBhZCB7XG4gIHBhZGRpbmctYm90dG9tOiA1NXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzcwcHgpIHtcbiAgLmJ0bk1hciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyOTAlO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB9XG59XG4uY2hlY2tCb3hzIHtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wtZXJyb3Ige1xuICBib3JkZXItY29sb3I6ICNmZjMzNjY7XG59XG4uZm9ybS1jb250cm9sLWVycm9yOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGEwMDM2O1xufVxuXG4uaW5wdXQtdmFsaWRhdG9yIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufVxuLmlucHV0LXZhbGlkYXRvcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCItXCI7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2tCb3gtaXNhY3RpdmUge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5ncm91cC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgxMTIsIDEyMywgMjQ1LCAwLjIpLCB2YXIoLS1jYXJkLWJnKSk7XG4gIGJvcmRlci1jb2xvcjogI2M4Y2JlYTtcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xufVxuXG4ubmVzdGVkLWZvcm0ge1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDExMiwgMTIzLCAyNDUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xufVxuXG4uZm9ybS1ncm91cC10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hbGVydC1idXR0b24tY29uZmlybSB7XG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcbn1cblxuLmltYWdlLW1vZGFsIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW1hZ2UtbW9kYWw6OnBhcnQoY29udGVudCkge1xuICBtYXgtd2lkdGg6IDkwJTtcbiAgbWF4LWhlaWdodDogNzAlO1xufSJdfQ== */";

/***/ }),

/***/ 11309:
/*!************************************************************************!*\
  !*** ./src/app/views/pages/adding-doc/adding-doc.page.html?ngResource ***!
  \************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\r\n<div\r\n  class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\"\r\n>\r\n  <div>\r\n    <h4 class=\"mr-1 mb-md-0\">اضافة مستند</h4>\r\n  </div>\r\n</div>\r\n<ion-modal\r\n  #imageModal\r\n  trigger=\"open-business-image-modal\"\r\n  class=\"p-5 h-auto image-modal\"\r\n  [backdropDismiss]=\"true\"\r\n  [keyboardClose]=\"true\"\r\n>\r\n  <ng-template>\r\n    <ion-content>\r\n      <img [src]=\"imageSrc\" class=\"p-4\" />\r\n      <div\r\n        style=\"\r\n          position: fixed;\r\n          bottom: 0;\r\n          width: 100%;\r\n          background-color: var(--card-bg);\r\n        \"\r\n      >\r\n        <ion-button expand=\"block\" (click)=\"imageModal.dismiss()\"\r\n          >اغلاق</ion-button\r\n        >\r\n      </div>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 grid-margin\">\r\n    <app-client-search\r\n      *ngIf=\"isSearching\"\r\n      [sourcePage]=\"40\"\r\n      (selectedClient)=\"clientSelected($event)\"\r\n    >\r\n    </app-client-search>\r\n    <div class=\"card\" *ngIf=\"!isSearching\">\r\n      <div class=\"card-body\">\r\n        <ng-container *ngIf=\"!isDocumentSelected\">\r\n          <div class=\"mt-1 mb-4\">\r\n            <ion-label\r\n              >اضافة المستندات للعميل:\r\n              <span class=\"font-weight-bold\"\r\n                >{{clientInfo.client_name}} -\r\n                {{clientInfo.org_branch_code}}/{{clientInfo.client_code}}</span\r\n              ></ion-label\r\n            >\r\n          </div>\r\n          <ion-select\r\n            interface=\"popover\"\r\n            placeholder=\"اختر نوع المستند\"\r\n            class=\"subselect\"\r\n            #documentTypeDropdown\r\n          >\r\n            <ion-select-option\r\n              *ngFor=\"let documentType of documentTypes\"\r\n              [value]=\"documentType.documentTypeCode\"\r\n            >\r\n              {{documentType.documentTypeDesc}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n          <ion-button\r\n            size=\"block\"\r\n            (click)=\"addNewDocument(documentTypeDropdown.value)\"\r\n            [disabled]=\"!documentTypeDropdown.value || documentTypeDropdown.value == ''\"\r\n          >\r\n            اضافة مستند\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"isDocumentSelected\">\r\n          <ion-accordion-group>\r\n            <ion-accordion\r\n              class=\"rounded my-2\"\r\n              *ngFor=\"let image of documentDetails; let i = index\"\r\n            >\r\n              <ion-item slot=\"header\">\r\n                <ion-label class=\"font-weight-bold text-center\"\r\n                  >صفحة رقم {{ i + 1 }}</ion-label\r\n                >\r\n              </ion-item>\r\n              <div class=\"ion-padding\" slot=\"content\">\r\n                <div class=\"row justify-content-center\">\r\n                  <div class=\"col text-center\">\r\n                    <ion-button\r\n                      *ngIf=\"isImageValid(i)\"\r\n                      class=\"py-0 h-max\"\r\n                      (click)=\"imageSrc = 'data:image/jpg;base64,' + documentDetails[i]; imageModal.present()\"\r\n                    >\r\n                      <ion-icon slot=\"start\" name=\"image\"></ion-icon>عرض الصورة\r\n                    </ion-button>\r\n                    <ion-button\r\n                      class=\"py-0 h-max\"\r\n                      (click)=\"takePicture(i)\"\r\n                      #getBusinessImageButton\r\n                      ><ion-icon\r\n                        slot=\"start\"\r\n                        [name]=\"getBusinessImageButton.disabled ? 'checkmark-done-sharp' : 'camera-sharp'\"\r\n                      ></ion-icon\r\n                      >اضافة صورة</ion-button\r\n                    >\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ion-accordion>\r\n          </ion-accordion-group>\r\n        </ng-container>\r\n        <ion-button color=\"danger\" size=\"block\" (click)=\"backButton()\"\r\n          >عودة</ion-button\r\n        >\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_adding-doc_adding-doc_module_ts.js.map