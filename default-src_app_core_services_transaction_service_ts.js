"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["default-src_app_core_services_transaction_service_ts"],{

/***/ 42836:
/*!******************************************************!*\
  !*** ./src/app/core/services/transaction.service.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionService": function() { return /* binding */ TransactionService; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env.service */ 41752);








var TransactionService = /*#__PURE__*/function () {
  function TransactionService(env, http) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TransactionService);

    this.env = env;
    this.http = http;

    this.getClientInformationForUnexecutedPayment = function (clientKey) {
      try {
        return _this.http.get(_this.env.API_URL + "api/Transaction/GetClientInformationForUnexecutedPayment?clientKey=".concat(clientKey));
      } catch (error) {
        console.error("Error getClientInformationForUnexecutedPayment:", error);
        throw error;
      }
    };

    this.insertUnexecutedPaymentTransaction = function (inputs) {
      try {
        return _this.http.post(_this.env.API_URL + "api/Transaction/InsertUnexecutedPaymentTransaction", {
          transactionCurrentBank: inputs.transactionCurrentBank,
          transactionAmount: inputs.transactionAmount,
          transactionInstallmentInterest: inputs.transactionInstallmentInterest,
          transactionActualDate: inputs.transactionActualDate,
          transactionInstallmentVoucher: inputs.transactionInstallmentVoucher,
          installmentUuc: inputs.installmentUuc,
          installmentKey: inputs.installmentKey,
          paidBy: inputs.paidBy
        });
      } catch (error) {
        console.error("Error insertUnexecutedPaymentTransaction:", error);
        throw error;
      }
    };

    this.getUnexecutedPenaltiesByClientKey = function (clientKey) {
      try {
        return _this.http.get(_this.env.API_URL + "api/Transaction/GetUnexecutedPenaltiesByClientKey?clientKey=".concat(clientKey));
      } catch (error) {
        console.error("Error getUnexecutedPenaltiesByClientKey:", error);
        throw error;
      }
    };

    this.insertUnexecutedPenalties = function (inputs) {
      try {
        return _this.http.post(_this.env.API_URL + "api/Transaction/InsertUnexecutedPenalties", {
          transactionCurrentBank: inputs.transactionCurrentBank,
          transactionLoanPenalty: inputs.transactionLoanPenalty,
          transactionLoanPenaltyType: inputs.transactionLoanPenaltyType,
          transactionActualDate: inputs.transactionActualDate,
          transactionInstVoucher: inputs.transactionInstVoucher,
          loanKey: inputs.loanKey,
          loanUucString: inputs.loanUucString,
          paidBy: inputs.paidBy
        });
      } catch (error) {
        console.error("Error InsertUnexecutedPenalties:", error);
        throw error;
      }
    };

    this.getInstallmentsPaymentTransactions = function (clientKey) {
      try {
        return _this.http.get(_this.env.API_URL + "api/Transaction/GetInstallmentsPaymentTransaction?clientKey=".concat(clientKey));
      } catch (error) {
        console.error("Error getInstallmentsPaymentTransactions:", error);
        throw error;
      }
    };

    this.getPaymentTransactionByTransactionCode = function (transactionCode) {
      try {
        return _this.http.get(_this.env.API_URL + "api/Transaction/GetPaymentTransactionByTransactionCode?transactionCode=".concat(transactionCode));
      } catch (error) {
        console.error("Error getPaymentTransactionByTransactionCode:", error);
        throw error;
      }
    };

    this.updatePaymentTransaction = function (inputs) {
      try {
        return _this.http.post(_this.env.API_URL + "api/Transaction/updatePaymentTransaction", {
          trans_amount: inputs.trans_amount,
          trans_inst_int: inputs.trans_inst_int,
          trans_act_date: inputs.trans_act_date,
          trans_cur_bank: inputs.trans_cur_bank,
          trans_inst_vouch: inputs.trans_inst_vouch,
          paid_by: inputs.paid_by,
          trans_code: inputs.trans_code,
          transaction_uuc: inputs.transaction_uuc
        });
      } catch (error) {
        console.error("Error updatePaymentTransaction:", error);
        throw error;
      }
    };

    this.deleteTransactionByTransactionCode = function (inputs) {
      try {
        return _this.http.post(_this.env.API_URL + "api/Transaction/DeleteTransactionByTransCode", {
          transactionCode: inputs.transactionCode,
          transactionUuc: inputs.transactionUuc
        });
      } catch (error) {
        console.error("Error deleteTransactionByTransactionCode:", error);
        throw error;
      }
    };

    this.getUnexecutedPenaltiesPaymentByClientKey = function (clientKey) {
      try {
        return _this.http.get(_this.env.API_URL + "api/Transaction/GetPenaltiesPaymentByClientKey?clientKey=".concat(clientKey));
      } catch (error) {
        console.error("Error GetUnexecutedPenaltiesPaymentByClientKey:", error);
        throw error;
      }
    };

    this.getUnexecutedPenaltyInformationForUpdate = function (transactionCode) {
      try {
        return _this.http.get(_this.env.API_URL + "api/Transaction/GetUnexecutedPenaltyInformationForUpdate?transactionCode=".concat(transactionCode));
      } catch (error) {
        console.error("Error getUnexecutedPenaltyInformationForUpdate:", error);
        throw error;
      }
    };

    this.updateUnexecutedPenalty = function (inputs) {
      try {
        return _this.http.post(_this.env.API_URL + "api/Transaction/UpdateUnexecutedPenalty", {
          transactionDate: inputs.transactionDate,
          transactionCurrentBank: inputs.transactionCurrentBank,
          transactionVoucher: inputs.transactionVoucher,
          paidBy: inputs.paidBy,
          transactionCode: inputs.transactionCode,
          transactionLoanPenalty: inputs.transactionLoanPenalty,
          transactionLoanPenaltyType: inputs.transactionLoanPenaltyType,
          transactionUuc: inputs.transactionUuc
        });
      } catch (error) {
        console.error("Error UpdateUnexecutedPenalty:", error);
        throw error;
      }
    };

    this.deleteUnexecutedPenalty = function (inputs) {
      try {
        return _this.http.post(_this.env.API_URL + "api/Transaction/deleteUnexecutedPenalty", {
          transactionCode: inputs.transactionCode,
          transactionUuc: inputs.transactionUuc
        });
      } catch (error) {
        console.error("Error deleteUnexecutedPenalty:", error);
        throw error;
      }
    };

    this.GetPostingTransactions = function (pageAction) {
      try {
        return _this.http.get(_this.env.API_URL + "api/Transaction/GetPostingTransactions?pageAction=".concat(pageAction));
      } catch (error) {
        console.error("Error GetPostingTransactions:", error);
        throw error;
      }
    };

    this.postTransactions = function (request) {
      try {
        return _this.http.post(_this.env.API_URL + "api/Transaction/PostTransactions", request);
      } catch (error) {
        console.error("Error postTransactions:", error);
        throw error;
      }
    };

    this.insertExecutedPaymentTransaction = function (inputs) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var response;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.http.post(this.env.API_URL + "api/Transaction/InsertExecutedPaymentTransaction", {
                  transactionCurrentBank: inputs.transactionCurrentBank,
                  transactionAmount: inputs.transactionAmount,
                  transactionInstallmentInterest: inputs.transactionInstallmentInterest,
                  transactionActualDate: inputs.transactionActualDate,
                  transactionInstallmentVoucher: inputs.transactionInstallmentVoucher,
                  installmentUuc: inputs.installmentUuc,
                  installmentKey: inputs.installmentKey,
                  paidBy: inputs.paidBy
                }).toPromise();

              case 3:
                response = _context.sent;
                console.log("TransactionCode", response);
                return _context.abrupt("return", response);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.error("Error", _context.t0);
                throw _context.t0;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));
    };

    this.getUnexecutedCancellationPaymentByClientKey = function (clientKey) {
      try {
        return _this.http.get(_this.env.API_URL + "api/Transaction/GetUnexecutedCancellationPaymentByClientKey?clientKey=".concat(clientKey));
      } catch (error) {
        console.error("Error getUnexecutedCancellationPaymentByClientKey:", error);
        throw error;
      }
    };

    this.insertUnexecutedCancellationPayment = function (inputs) {
      try {
        return _this.http.post(_this.env.API_URL + "api/Transaction/insertUnexecutedCancellationPayment", {
          transactionCode: inputs.transactionCode,
          transactionActualCancelDate: inputs.transactionActualCancelDate,
          transactionInstallmentVoucher: inputs.transactionInstallmentVoucher,
          transactionUuc: inputs.transactionUuc
        });
      } catch (error) {
        console.error("Error insertUnexecutedCancellationPayment:", error);
        throw error;
      }
    };

    this.getInsertedCancellationPaymentTransactionsByClientKey = function (clientKey) {
      try {
        return _this.http.get(_this.env.API_URL + "api/Transaction/getInsertedCancellationPaymentTransactionsByClientKey?clientKey=".concat(clientKey));
      } catch (error) {
        console.error("Error getInsertedCancellationPaymentTransactionsByClientKey:", error);
        throw error;
      }
    };

    this.updateInsertedCancellationPaymentTransactions = function (inputs) {
      try {
        return _this.http.post(_this.env.API_URL + "api/Transaction/UpdateInsertedCancellationPaymentTransactions", {
          transactionCode: inputs.transactionCode,
          transactionActualDate: inputs.transactionActualDate,
          transactionVoucher: inputs.transactionVoucher,
          transactionUuc: inputs.transactionUuc
        });
      } catch (error) {
        console.error("Error updateInsertedCancellationPaymentTransactions:", error);
        throw error;
      }
    };

    this.deleteInsertedCancellationPaymentTransactions = function (inputs) {
      try {
        return _this.http.post(_this.env.API_URL + "api/Transaction/DeleteInsertedCancellationPaymentTransactions", {
          transactionCode: inputs.transactionCode,
          transactionUuc: inputs.transactionUuc
        });
      } catch (error) {
        console.error("Error deleteInsertedCancellationPaymentTransactions:", error);
        throw error;
      }
    };

    this.getTransactionInformationByTransactionCode = function (transactionCode) {
      try {
        return _this.http.get(_this.env.API_URL + "api/Transaction/GetTransactionInformationByTransactionCode?transactionCode=".concat(transactionCode));
      } catch (error) {
        console.error("Error GetTransactionInformationByTransactionCode:", error);
        throw error;
      }
    };

    this.getUnexecutedCancellationPenaltyByClientKey = function (clientKey) {
      try {
        return _this.http.get(_this.env.API_URL + "api/Transaction/getUnexecutedCancellationPenaltyByClientKey?clientKey=".concat(clientKey));
      } catch (error) {
        console.error("Error getUnexecutedCancellationPenaltyByClientKey:", error);
        throw error;
      }
    };

    this.insertUnexecutedCancellationPenalty = function (inputs) {
      try {
        return _this.http.post(_this.env.API_URL + "api/Transaction/InsertUnexecutedCancellationPenalty", {
          transactionCode: inputs.transactionCode,
          transactionActualCancelDate: inputs.transactionActualCancelDate,
          transactionInstallmentVoucher: inputs.transactionInstallmentVoucher,
          transactionUuc: inputs.transactionUuc
        });
      } catch (error) {
        console.error("Error InsertUnexecutedCancellationPenalty:", error);
        throw error;
      }
    };

    this.getInsertedCancellationPenaltyTransactionsByClientKey = function (clientKey) {
      try {
        return _this.http.get(_this.env.API_URL + "api/Transaction/GetInsertedCancellationPenaltyTransactionsByClientKey?clientKey=".concat(clientKey));
      } catch (error) {
        console.error("Error GetInsertedCancellationPenaltyTransactionsByClientKey:", error);
        throw error;
      }
    };

    this.updateInsertedCancellationPenaltyTransactions = function (inputs) {
      try {
        return _this.http.post(_this.env.API_URL + "api/Transaction/UpdateInsertedCancellationPenaltyTransactions", {
          transactionCode: inputs.transactionCode,
          transactionActualDate: inputs.transactionActualDate,
          transactionVoucher: inputs.transactionVoucher,
          transactionUuc: inputs.transactionUuc
        });
      } catch (error) {
        console.error("Error UpdateInsertedCancellationPenaltyTransactions:", error);
        throw error;
      }
    };

    this.deleteInsertedCancellationPenaltyTransactions = function (inputs) {
      try {
        return _this.http.post(_this.env.API_URL + "api/Transaction/DeleteInsertedCancellationPenaltyTransactions", {
          transactionCode: inputs.transactionCode,
          transactionUuc: inputs.transactionUuc
        });
      } catch (error) {
        console.error("Error DeleteInsertedCancellationPenaltyTransactions:", error);
        throw error;
      }
    };

    this.insertExecutedPenalties = function (inputs) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var response;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.http.post(this.env.API_URL + "api/Transaction/InsertExecutedPenalties", {
                  transactionCurrentBank: inputs.transactionCurrentBank,
                  transactionLoanPenalty: inputs.transactionLoanPenalty,
                  transactionLoanPenaltyType: inputs.transactionLoanPenaltyType,
                  transactionActualDate: inputs.transactionActualDate,
                  transactionInstVoucher: inputs.transactionInstVoucher,
                  loanKey: inputs.loanKey,
                  loanUucString: inputs.loanUucString,
                  paidBy: inputs.paidBy
                }).toPromise();

              case 3:
                response = _context2.sent;
                console.log("TransactionCode", response);
                return _context2.abrupt("return", response);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                console.error("Error InsertUnexecutedPenalties:", _context2.t0);
                throw _context2.t0;

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(TransactionService, [{
    key: "ExecutedTransactionMarkPrintingFlag",
    value: function ExecutedTransactionMarkPrintingFlag(trans_code, org_code_user_info, branch_code_user_info) {
      this.http.post(this.env.API_URL + "api/Transaction/ExecutedPaymentTransactionMarkPrintingFlag?transCode=".concat(trans_code, "&orgCode=").concat(org_code_user_info, "&branchCode=").concat(branch_code_user_info), {}).subscribe({
        next: function next(data) {},
        error: function error(err) {
          console.log(err);
        }
      });
    }
  }]);

  return TransactionService;
}();

TransactionService.ctorParameters = function () {
  return [{
    type: _env_service__WEBPACK_IMPORTED_MODULE_3__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }];
};

TransactionService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: "root"
})], TransactionService);


/***/ })

}]);
//# sourceMappingURL=default-src_app_core_services_transaction_service_ts.js.map