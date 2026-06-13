"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_overDraft_upload-transaction-file_upload-transaction-file_module_ts"],{

/***/ 55278:
/*!****************************************************!*\
  !*** ./src/app/core/services/importing.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImportingService": function() { return /* binding */ ImportingService; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ 10507);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xlsx */ 4126);








var ImportingService = /*#__PURE__*/function () {
  function ImportingService() {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ImportingService);

    this.allowedExtensions = ['xlsx', 'xls'];
    this.allowedMimeTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'];
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ImportingService, [{
    key: "uploadExcelFile",
    value: function uploadExcelFile() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var file, validationResult, _yield$Promise$all, _yield$Promise$all2, processedData, formData;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.selectExcelFile();

              case 3:
                file = _context.sent;
                validationResult = this.validateExcelFile(file);

                if (validationResult.isValid) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", this.createResponse(false, validationResult.errorMessage));

              case 7:
                _context.next = 9;
                return Promise.all([this.processExcelFile(file), this.createFormData(file)]);

              case 9:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_yield$Promise$all, 2);
                processedData = _yield$Promise$all2[0];
                formData = _yield$Promise$all2[1];
                return _context.abrupt("return", this.createResponse(true, null, file.name, processedData, formData));

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", this.handleError(_context.t0));

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 16]]);
      }));
    }
  }, {
    key: "selectExcelFile",
    value: function selectExcelFile() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  var input = _this.createFileInput();

                  var fileHandled = false;

                  var cleanup = function cleanup() {
                    window.removeEventListener('focus', handleCancel);
                    document.body.removeChild(input);
                  };

                  var handleCancel = function handleCancel() {
                    setTimeout(function () {
                      if (!fileHandled) {
                        cleanup();
                        reject(new Error('تم إلغاء اختيار الملف'));
                      }
                    }, 500);
                  };

                  input.addEventListener('change', function (event) {
                    var _a;

                    fileHandled = true;
                    cleanup();
                    var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
                    file ? resolve(file) : reject(new Error('لم يتم تحديد أي ملف'));
                  });
                  window.addEventListener('focus', handleCancel);
                  document.body.appendChild(input);
                  input.click();
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
  }, {
    key: "createFileInput",
    value: function createFileInput() {
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = this.allowedExtensions.map(function (ext) {
        return ".".concat(ext);
      }).join(', ');
      input.style.display = 'none';
      return input;
    }
  }, {
    key: "validateExcelFile",
    value: function validateExcelFile(file) {
      var _a;

      var extension = (_a = file.name.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
      var isValidExtension = extension && this.allowedExtensions.includes(extension);
      var isValidMimeType = this.allowedMimeTypes.includes(file.type);

      if (!isValidExtension || !isValidMimeType) {
        return {
          isValid: false,
          errorMessage: 'تنسيق الملف غير صالح. يرجى تحميل ملف Excel (.xlsx, .xls)'
        };
      }

      return {
        isValid: true
      };
    }
  }, {
    key: "processExcelFile",
    value: function processExcelFile(file) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  var reader = new FileReader();

                  reader.onload = function (event) {
                    var _a;

                    try {
                      var data = new Uint8Array((_a = event.target) === null || _a === void 0 ? void 0 : _a.result);
                      var workbook = xlsx__WEBPACK_IMPORTED_MODULE_5__.read(data, {
                        type: 'array'
                      });
                      resolve(_this2.workbookToJson(workbook));
                    } catch (error) {
                      reject(new Error('خطأ في معالجة ملف Excel'));
                    }
                  };

                  reader.onerror = function () {
                    return reject(new Error('خطأ في قراءة الملف'));
                  };

                  reader.readAsArrayBuffer(file);
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));
    }
  }, {
    key: "createFormData",
    value: function createFormData(file) {
      var formData = new FormData();
      formData.append('file', file, file.name);
      formData.append('uploadDate', new Date().toISOString());
      return formData;
    }
  }, {
    key: "workbookToJson",
    value: function workbookToJson(workbook) {
      return workbook.SheetNames.map(function (sheetName) {
        return {
          sheetName: sheetName,
          data: xlsx__WEBPACK_IMPORTED_MODULE_5__.utils.sheet_to_json(workbook.Sheets[sheetName], {
            header: 1
          })
        };
      });
    }
  }, {
    key: "createResponse",
    value: function createResponse(isSuccess) {
      var errorMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var fileName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var result = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var formData = arguments.length > 4 ? arguments[4] : undefined;
      return {
        isSuccess: isSuccess,
        errorMessage: errorMessage,
        fileName: fileName,
        result: result,
        formData: formData
      };
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var errorMessage = error instanceof Error ? error.message : 'حدث خطأ غير معروف';
      return this.createResponse(false, errorMessage);
    }
  }]);

  return ImportingService;
}();

ImportingService.ctorParameters = function () {
  return [];
};

ImportingService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: "root"
})], ImportingService);


/***/ }),

/***/ 84940:
/*!*******************************************************************!*\
  !*** ./src/app/core/services/overdraft/od-transaction.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OdTransactionService": function() { return /* binding */ OdTransactionService; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../env.service */ 41752);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);







var OdTransactionService = /*#__PURE__*/function () {
  function OdTransactionService(http, env) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, OdTransactionService);

    this.http = http;
    this.env = env;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(OdTransactionService, [{
    key: "uploadTransactionFile",
    value: function uploadTransactionFile(request) {
      var formData = new FormData();
      formData.append("FileName", request.fileName);
      formData.append("FileData", request.fileData);
      formData.append("FileType", request.fileType);
      var httpParams = {
        responseType: "text/csv"
      };
      return this.http.post("".concat(this.env.API_URL, "api/Transaction/UploadFile"), formData, httpParams);
    }
  }]);

  return OdTransactionService;
}();

OdTransactionService.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
  }, {
    type: _env_service__WEBPACK_IMPORTED_MODULE_2__.EnvService
  }];
};

OdTransactionService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: "root"
})], OdTransactionService);


/***/ }),

/***/ 22386:
/*!*******************************************************************************!*\
  !*** ./src/app/views/Models/Overdraft/OdTransaction/UploadTransactionFile.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverDraftTransactionFileType": function() { return /* binding */ OverDraftTransactionFileType; }
/* harmony export */ });
var OverDraftTransactionFileType;

(function (OverDraftTransactionFileType) {
  OverDraftTransactionFileType["WithDraw"] = "1";
  OverDraftTransactionFileType["Deposit"] = "2";
})(OverDraftTransactionFileType || (OverDraftTransactionFileType = {}));

/***/ }),

/***/ 55172:
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/overDraft/upload-transaction-file/upload-transaction-file-routing.module.ts ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadTransactionFilePageRoutingModule": function() { return /* binding */ UploadTransactionFilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _upload_transaction_file_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-transaction-file.page */ 9566);






var routes = [{
  path: '',
  component: _upload_transaction_file_page__WEBPACK_IMPORTED_MODULE_2__.UploadTransactionFilePage
}];

var UploadTransactionFilePageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UploadTransactionFilePageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UploadTransactionFilePageRoutingModule);
});

UploadTransactionFilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], UploadTransactionFilePageRoutingModule);


/***/ }),

/***/ 37989:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/overDraft/upload-transaction-file/upload-transaction-file.module.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadTransactionFilePageModule": function() { return /* binding */ UploadTransactionFilePageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _upload_transaction_file_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-transaction-file-routing.module */ 55172);
/* harmony import */ var _upload_transaction_file_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-transaction-file.page */ 9566);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var UploadTransactionFilePageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function UploadTransactionFilePageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, UploadTransactionFilePageModule);
});

UploadTransactionFilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _upload_transaction_file_routing_module__WEBPACK_IMPORTED_MODULE_2__.UploadTransactionFilePageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_upload_transaction_file_page__WEBPACK_IMPORTED_MODULE_3__.UploadTransactionFilePage]
})], UploadTransactionFilePageModule);


/***/ }),

/***/ 9566:
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/overDraft/upload-transaction-file/upload-transaction-file.page.ts ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadTransactionFilePage": function() { return /* binding */ UploadTransactionFilePage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _upload_transaction_file_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-transaction-file.page.html?ngResource */ 39120);
/* harmony import */ var _upload_transaction_file_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upload-transaction-file.page.scss?ngResource */ 59692);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_importing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/importing.service */ 55278);
/* harmony import */ var src_app_core_services_overdraft_od_transaction_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/overdraft/od-transaction.service */ 84940);
/* harmony import */ var src_app_views_Models_Overdraft_OdTransaction_UploadTransactionFile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/views/Models/Overdraft/OdTransaction/UploadTransactionFile */ 22386);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
















var UploadTransactionFilePage = /*#__PURE__*/function () {
  function UploadTransactionFilePage(alertService, importingService, OdTransactionService, alertController) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UploadTransactionFilePage);

    this.alertService = alertService;
    this.importingService = importingService;
    this.OdTransactionService = OdTransactionService;
    this.alertController = alertController;
    this.showLoader = false;
    this.documentType = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject(null);
    this.documentType$ = this.documentType.asObservable();
    this.documentTypeList = [{
      id: "1",
      name: "سحب"
    }, {
      id: "2",
      name: "ايداع"
    }];
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(UploadTransactionFilePage, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "onDocumentTypeChange",
    value: function onDocumentTypeChange(event) {
      this.documentType.next(event);
    }
  }, {
    key: "uploadingExcelFile",
    value: function uploadingExcelFile() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        var result, request, dbResult;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                this.showLoader = true;
                _context.next = 4;
                return this.importingService.uploadExcelFile();

              case 4:
                result = _context.sent;

                if (result.isSuccess) {
                  _context.next = 8;
                  break;
                }

                this.alertService.showAlertError(result.errorMessage, false);
                return _context.abrupt("return");

              case 8:
                request = null;
                result.formData.forEach(function (file) {
                  if (file instanceof File) {
                    request = {
                      fileData: file,
                      fileName: file.name,
                      fileType: _this.documentType.value === "1" ? src_app_views_Models_Overdraft_OdTransaction_UploadTransactionFile__WEBPACK_IMPORTED_MODULE_8__.OverDraftTransactionFileType.WithDraw : src_app_views_Models_Overdraft_OdTransaction_UploadTransactionFile__WEBPACK_IMPORTED_MODULE_8__.OverDraftTransactionFileType.Deposit
                    };
                  }
                });

                if (request) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return");

              case 12:
                _context.next = 14;
                return this.OdTransactionService.uploadTransactionFile(request).toPromise();

              case 14:
                dbResult = _context.sent;

                if (!(dbResult === null)) {
                  _context.next = 20;
                  break;
                }

                _context.next = 18;
                return this.alertService.showAlertConfirm("لقد تم الحفظ بنجاح", false);

              case 18:
                _context.next = 22;
                break;

              case 20:
                _context.next = 22;
                return this.downloadingErrorFile(dbResult);

              case 22:
                _context.next = 27;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](0);
                this.handleError(_context.t0);

              case 27:
                _context.prev = 27;
                this.showLoader = false;
                return _context.finish(27);

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 24, 27, 30]]);
      }));
    }
  }, {
    key: "downloadingErrorFile",
    value: function downloadingErrorFile(file) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var blob, fileName;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                blob = new Blob([file], {
                  type: "text/csv"
                });
                fileName = "response-".concat(new Date().toISOString().split("T")[0]);
                _context2.next = 4;
                return (0,file_saver__WEBPACK_IMPORTED_MODULE_9__.saveAs)(blob, fileName);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var errorMessage = error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpErrorResponse ? JSON.stringify(error.error) : error instanceof Error ? error.message : String(error);
      this.alertService.showAlertError(errorMessage, false);
      console.error("Error:", error);
    }
  }]);

  return UploadTransactionFilePage;
}();

UploadTransactionFilePage.ctorParameters = function () {
  return [{
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: src_app_core_services_importing_service__WEBPACK_IMPORTED_MODULE_6__.ImportingService
  }, {
    type: src_app_core_services_overdraft_od_transaction_service__WEBPACK_IMPORTED_MODULE_7__.OdTransactionService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController
  }];
};

UploadTransactionFilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: "app-upload-transaction-file",
  template: _upload_transaction_file_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_upload_transaction_file_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], UploadTransactionFilePage);


/***/ }),

/***/ 59692:
/*!************************************************************************************************************!*\
  !*** ./src/app/views/pages/overDraft/upload-transaction-file/upload-transaction-file.page.scss?ngResource ***!
  \************************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQtdHJhbnNhY3Rpb24tZmlsZS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 39120:
/*!************************************************************************************************************!*\
  !*** ./src/app/views/pages/overDraft/upload-transaction-file/upload-transaction-file.page.html?ngResource ***!
  \************************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<ion-title>رفع ملفات المعاملات</ion-title>\n\n<ion-card>\n  <ion-card-content>\n    <ion-grid>\n      <ion-row class=\"justify-content-center text-center\">\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n          <ion-label class=\"form-label\">نوع المستند</ion-label>\n          <ion-select\n            interface=\"popover\"\n            placeholder=\"نوع المستند\"\n            class=\"subselect\"\n            [ngModel]=\"documentType$ | async\"\n            (ngModelChange)=\"onDocumentTypeChange($event)\"\n          >\n            <ion-select-option\n              *ngFor=\"let type of documentTypeList\"\n              [value]=\"type.id\"\n            >\n              {{ type.name }}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        class=\"justify-content-center ion-padding\"\n        *ngIf=\"documentType$ | async\"\n      >\n        <ion-button (click)=\"uploadingExcelFile()\">\n          <ion-icon name=\"arrow-up-outline\" class=\"pl-2\"></ion-icon>\n          رفع الملف</ion-button\n        >\n      </ion-row>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_overDraft_upload-transaction-file_upload-transaction-file_module_ts.js.map