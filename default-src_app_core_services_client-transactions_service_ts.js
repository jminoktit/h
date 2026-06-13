"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["default-src_app_core_services_client-transactions_service_ts"],{

/***/ 64242:
/*!**************************************************************!*\
  !*** ./src/app/core/services/client-transactions.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientTransactionsService": function() { return /* binding */ ClientTransactionsService; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env.service */ 41752);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);








var ClientTransactionsService = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ClientTransactionsService(env, http) {
  var _this = this;

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientTransactionsService);

  this.env = env;
  this.http = http;

  this.getClientTransactions = function (client_key) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var response;
      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this.http.post("".concat(this.env.API_URL, "api/ClientTransactions/GetClientTransactions"), {
                client_key: client_key
              }).toPromise();

            case 3:
              response = _context.sent;
              return _context.abrupt("return", response);

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error("Error fetching ClientTransactions:", _context.t0);
              throw _context.t0;

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 7]]);
    }));
  };

  this.getClientTransactionByTransCode = function (trans_code) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
      var response;
      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return this.http.get("".concat(this.env.API_URL, "api/ClientTransactions/GetClientTransactionByTransCode?trans_code=").concat(trans_code)).toPromise();

            case 3:
              response = _context2.sent;
              return _context2.abrupt("return", response);

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              console.error("Error fetching ClientTransactionByTransCode:", _context2.t0);
              throw _context2.t0;

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 7]]);
    }));
  };

  this.deleteClientTransaction = function (trans_code, uuc) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return this.http.post("".concat(this.env.API_URL, "api/ClientTransactions/DeleteClientTransaction"), {
                trans_code: trans_code,
                uuc: uuc
              }).toPromise();

            case 3:
              _context3.next = 9;
              break;

            case 5:
              _context3.prev = 5;
              _context3.t0 = _context3["catch"](0);
              console.error("Error fetching deleteClientTransaction:", _context3.t0);
              throw _context3.t0;

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[0, 5]]);
    }));
  };

  this.insertClientTransaction = function (transaction) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return this.http.post("".concat(this.env.API_URL, "api/ClientTransactions/InsertClientTransaction"), {
                client_key: transaction.clientKey.toString(),
                trans_amount: transaction.transAmount,
                trans_act_date: transaction.transActionDate,
                trans_vouch: transaction.transVouch,
                type_key: transaction.transactionType,
                cur_bank_key: transaction.bankKey
              }).toPromise();

            case 3:
              _context4.next = 9;
              break;

            case 5:
              _context4.prev = 5;
              _context4.t0 = _context4["catch"](0);
              console.error("Error fetching insertClientTransaction:", _context4.t0);
              throw _context4.t0;

            case 9:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 5]]);
    }));
  };

  this.editClientTransaction = function (transaction) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return this.http.post("".concat(this.env.API_URL, "api/ClientTransactions/EditClientTransaction"), {
                trans_code: transaction.transCode,
                trans_amount: transaction.transAmount,
                trans_act_date: transaction.transActionDate,
                trans_vouch: transaction.transVouch,
                type_key: transaction.transactionType,
                cur_bank_key: transaction.bankKey,
                uuc: transaction.uuc
              }).toPromise();

            case 3:
              _context5.next = 9;
              break;

            case 5:
              _context5.prev = 5;
              _context5.t0 = _context5["catch"](0);
              console.error("Error fetching editClientTransaction:", _context5.t0);
              throw _context5.t0;

            case 9:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[0, 5]]);
    }));
  };

  this.GetTransType = function (transType, cancel) {
    try {
      return _this.http.get(_this.env.API_URL + "api/ClientTransactions/GetTransTypes?transType=".concat(transType, "&cancel=").concat(cancel));
    } catch (error) {
      console.error("Error GetTransTypes:", error);
      throw error;
    }
  };

  this.GetFinancialTransactions = function (transType, typeKeys) {
    try {
      return _this.http.get(_this.env.API_URL + "api/ClientTransactions/GetFinancialTransactions?transType=".concat(transType, "&typeKeys=").concat(typeKeys));
    } catch (error) {
      console.error("Error GetFinancialTransactions:", error);
      throw error;
    }
  };

  this.postFinancialTransactions = function (request) {
    try {
      return _this.http.post(_this.env.API_URL + "api/ClientTransactions/PostFinancialTransactions", request);
    } catch (error) {
      console.error("Error PostFinancialTransactions:", error);
      throw error;
    }
  };

  this.getApplicationTransactions = function (client_key) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
      var response;
      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return this.http.post("".concat(this.env.API_URL, "api/ClientTransactions/GetApplicationTransactions"), {
                client_key: client_key
              }).toPromise();

            case 3:
              response = _context6.sent;
              return _context6.abrupt("return", response);

            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](0);
              console.error("Error fetching ApplicationTransactions:", _context6.t0);
              throw _context6.t0;

            case 11:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this, [[0, 7]]);
    }));
  };

  this.getApplicationTransactionByTransCode = function (trans_code) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
      var response;
      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              _context7.next = 3;
              return this.http.get("".concat(this.env.API_URL, "api/ClientTransactions/GetApplicationTransactionByTransCode?trans_code=").concat(trans_code)).toPromise();

            case 3:
              response = _context7.sent;
              return _context7.abrupt("return", response);

            case 7:
              _context7.prev = 7;
              _context7.t0 = _context7["catch"](0);
              console.error("Error fetching ApplicationTransactionByTransCode:", _context7.t0);
              throw _context7.t0;

            case 11:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this, [[0, 7]]);
    }));
  };

  this.insertLoanApplicationTransaction = function (transaction) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              _context8.next = 3;
              return this.http.post("".concat(this.env.API_URL, "api/ClientTransactions/InsertLoanApplicationTransaction"), {
                client_key: transaction.clientKey.toString(),
                trans_amount: transaction.transactionAmount,
                trans_act_date: transaction.transactionMaturityDate,
                trans_vouch: transaction.transactionVoucher,
                type_key: transaction.transactionType,
                application_key: transaction.applicationKey.toString(),
                cur_bank_key: transaction.transactionBank
              }).toPromise();

            case 3:
              _context8.next = 9;
              break;

            case 5:
              _context8.prev = 5;
              _context8.t0 = _context8["catch"](0);
              console.error("Error fetching insertLoanApplicationTransaction:", _context8.t0);
              throw _context8.t0;

            case 9:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this, [[0, 5]]);
    }));
  };
});

ClientTransactionsService.ctorParameters = function () {
  return [{
    type: _env_service__WEBPACK_IMPORTED_MODULE_3__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }];
};

ClientTransactionsService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: "root"
})], ClientTransactionsService);


/***/ })

}]);
//# sourceMappingURL=default-src_app_core_services_client-transactions_service_ts.js.map