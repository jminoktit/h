"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_overDraft_agreement-trans-tracking_agreement-trans-tracking_module_ts"],{

/***/ 91430:
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/overDraft/agreement-trans-tracking/agreement-trans-tracking-routing.module.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementTransTrackingPageRoutingModule": function() { return /* binding */ AgreementTransTrackingPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _agreement_trans_tracking_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agreement-trans-tracking.page */ 83546);






var routes = [{
  path: '',
  component: _agreement_trans_tracking_page__WEBPACK_IMPORTED_MODULE_2__.AgreementTransTrackingPage
}];

var AgreementTransTrackingPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AgreementTransTrackingPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AgreementTransTrackingPageRoutingModule);
});

AgreementTransTrackingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], AgreementTransTrackingPageRoutingModule);


/***/ }),

/***/ 92194:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/overDraft/agreement-trans-tracking/agreement-trans-tracking.module.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementTransTrackingPageModule": function() { return /* binding */ AgreementTransTrackingPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _agreement_trans_tracking_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agreement-trans-tracking-routing.module */ 91430);
/* harmony import */ var _agreement_trans_tracking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agreement-trans-tracking.page */ 83546);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/components.module */ 63430);














var AgreementTransTrackingPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AgreementTransTrackingPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AgreementTransTrackingPageModule);
});

AgreementTransTrackingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _agreement_trans_tracking_routing_module__WEBPACK_IMPORTED_MODULE_2__.AgreementTransTrackingPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_10__.NgApexchartsModule, _components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_agreement_trans_tracking_page__WEBPACK_IMPORTED_MODULE_3__.AgreementTransTrackingPage],
  schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_ELEMENTS_SCHEMA]
})], AgreementTransTrackingPageModule);


/***/ }),

/***/ 83546:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/overDraft/agreement-trans-tracking/agreement-trans-tracking.page.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementTransTrackingPage": function() { return /* binding */ AgreementTransTrackingPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _agreement_trans_tracking_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agreement-trans-tracking.page.html?ngResource */ 6504);
/* harmony import */ var _agreement_trans_tracking_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agreement-trans-tracking.page.scss?ngResource */ 27037);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_overdraft_agreement_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/overdraft/agreement.service */ 27325);












var AgreementTransTrackingPage = /*#__PURE__*/function () {
  function AgreementTransTrackingPage(pagingService, alertService, agreementService, cdref) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AgreementTransTrackingPage);

    this.pagingService = pagingService;
    this.alertService = alertService;
    this.agreementService = agreementService;
    this.cdref = cdref; //region Variables

    this.ClientAgreementsResponseModal = [];
    this.ClientAgreementInfoResponseModal = [];
    this.ClientAgreementTransResponseModal = [];
    this.isSearching = true;
    this.initialSearchType = "1";
    this.isAgreementsList = false;
    this.isAgreementSelected = false;
    this.availableCredit = 0;
    this.creditLimit = 0;
    this.usedBalance = 0;
    this.isAgreeHaveNoTrans = false;
    this.showLoader = false;
    this.currentTransType = 0;
    this.transViewSelectInitialValue = 0;
    this.isWithdraw = true;
    this.isDeposit = true;
    this.isDailyTrns = true;
    this.isCounterCard = true;
    this.showMoreOptions = false;
    this.withdrawTransCounter = 0;
    this.depositTransCounter = 0;
    this.dailyTransCounter = 0;
    this.isNotActiveAgr = false;
    this.chartData = {
      series: [0, 0],
      chart: {
        type: "donut",
        width: 200
      },
      labels: ["اجمالي الحساب", "المتاح للسحب"],
      colors: ["#ff4560", "#199802"],
      tooltip: {
        enabled: true
      },
      legend: {
        position: "bottom" // Change to "bottom", "top", "left", "right"

      }
    }; //*paging variables*//

    this.page = 1;
    this.totalPages = 1;
    this.pageSize = 4;

    this.changePaginationPage = function (newPage) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.page = newPage;
                this.getAgreementTrans(this.agreementKey, this.currentTransType);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(AgreementTransTrackingPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.pageSize = this.pagingService.getPageSizeFromLocalStorage();
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      this.cdref.detectChanges();
    }
  }, {
    key: "clientSelected",
    value: function clientSelected(event) {
      var _this2 = this;

      this.selectedClient = event;
      this.showLoader = true;

      if (event.client_key != null) {
        this.agreementService.getAgreementsByClientKey(event.client_key.toString(), 0).subscribe(function (response) {
          if (response.length === 0) {
            return _this2.alertService.showAlertError("لا يوجد حساب لهذا العميل", false);
          }

          _this2.ClientAgreementsResponseModal = response;
          _this2.isSearching = false;
          _this2.isAgreementsList = true;
          _this2.showLoader = false;
        });
      }
    }
  }, {
    key: "getAgreementInfo",
    value: function getAgreementInfo(agreement_key) {
      var _this3 = this;

      if (agreement_key != null) {
        this.showLoader = true;
        this.agreementService.getAgreementInfo(agreement_key).subscribe(function (response) {
          _this3.ClientAgreementInfoResponseModal = response;
          _this3.agreementKey = _this3.ClientAgreementInfoResponseModal[0].agreement_key;

          _this3.getAgreementTrans(agreement_key, 0);

          _this3.availableCredit = _this3.ClientAgreementInfoResponseModal[0].available_credit;
          _this3.creditLimit = _this3.ClientAgreementInfoResponseModal[0].credit_limit;

          if (_this3.ClientAgreementInfoResponseModal[0].agr_status !== "1") {
            _this3.isNotActiveAgr = true;
          } else {
            _this3.isNotActiveAgr = false;
          }

          _this3.usedBalance = _this3.creditLimit - _this3.availableCredit;

          _this3.chartUpdate();

          _this3.showLoader = false;
        });
      }
    }
  }, {
    key: "chartUpdate",
    value: function chartUpdate() {
      this.availableCredit = this.ClientAgreementInfoResponseModal[0].available_credit;
      this.creditLimit = this.ClientAgreementInfoResponseModal[0].credit_limit;
      this.chartData = {
        series: [Number(Number(this.usedBalance).toFixed(2)), Number(Number(this.availableCredit).toFixed(2))],
        chart: {
          //"donut" | "line" | "area" | "bar" | "histogram" | "pie" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap"
          type: "donut",
          height: "200%",
          width: "200%"
        },
        labels: ["المستخدم", "المتاح للسحب"],
        colors: ["#ff4560", "#199802"],
        tooltip: {
          enabled: true
        },
        legend: {
          position: "bottom" // Change to "bottom", "top", "left", "right"

        }
      };
    }
  }, {
    key: "transViewSelectHandleChange",
    value: function transViewSelectHandleChange() {
      this.currentTransType = this.transViewSelect.value;

      switch (this.transViewSelect.value) {
        case 0:
          {
            this.page = 1;
            this.isCounterCard = true; // this.isWithdraw = true;
            // this.isDeposit = true;

            break;
          }

        case 1:
          {
            this.page = 1;
            this.isCounterCard = true; // this.isWithdraw = true;
            // this.isDeposit = false;

            break;
          }

        case 3:
          {
            this.page = 1;
            this.isCounterCard = true; // this.isWithdraw = false;
            // this.isDeposit = true;

            break;
          }

        case 5:
          {
            this.page = 1;
            this.isCounterCard = false; // this.isWithdraw = false;
            // this.isDeposit = false;

            break;
          }
      }

      this.getAgreementTrans(this.agreementKey, this.transViewSelect.value);
    }
  }, {
    key: "moreOptionsToggleSelect",
    value: function moreOptionsToggleSelect() {
      this.showMoreOptions = !this.showMoreOptions;
    }
  }, {
    key: "backButt",
    value: function backButt(type) {
      switch (type) {
        case "toSearch":
          {
            this.isAgreementsList = false;
            this.isSearching = true;
            this.ClientAgreementsResponseModal = [];
            this.ClientAgreementInfoResponseModal = [];
            this.ClientAgreementTransResponseModal = [];
            this.agreementKey = " ";
            this.showMoreOptions = false;
            break;
          }

        case "toList":
          {
            this.transViewSelectInitialValue = 0;
            this.ClientAgreementTransResponseModal = [];
            this.isAgreementsList = true;
            this.isAgreementSelected = false;
            this.ClientAgreementInfoResponseModal = [];
            this.agreementKey = " ";
            this.showMoreOptions = false;
            this.isAgreeHaveNoTrans = false;
            this.page = 1;
            this.clientSelected(this.selectedClient);
            break;
          }
        // default: {
        //    //statements;
        //    break;
        // }
      }
    }
  }, {
    key: "startCounting",
    value: function startCounting() {
      var _this4 = this;

      var interval = setInterval(function () {
        if (_this4.withdrawTransCounter < _this4.withdrawTransCounter) {
          _this4.withdrawTransCounter++;
        } else {
          clearInterval(interval);
        }
      }, 1000);
    }
  }, {
    key: "transTypeChecker",
    value: function transTypeChecker() {
      if (this.withdrawTransCounter == 0) {
        this.isWithdraw = false;
      } else {
        this.isWithdraw = true;
      }

      if (this.depositTransCounter == 0) {
        this.isDeposit = false;
      } else {
        this.isDeposit = true;
      }

      if (this.dailyTransCounter == 0) {
        this.isDailyTrns = false;
      } else {
        this.isDailyTrns = true;
      }
    }
  }, {
    key: "getAgreementTrans",
    value: function getAgreementTrans(agreement_key, transType) {
      var _this5 = this;

      if (agreement_key != null) {
        this.showLoader = true;
        this.isAgreementsList = false;
        this.isAgreementSelected = true;
        this.agreementService.getAgreementTransPaging(agreement_key, this.page, this.pageSize, transType).subscribe(function (response) {
          _this5.ClientAgreementTransResponseModalPaging = response["result"];
          _this5.resultsCount = response.count;
          var x = response.count / _this5.pageSize;
          _this5.totalPages = Math.trunc(x) < response.count / _this5.pageSize ? Math.trunc(x) + 1 : Math.trunc(x);

          if (response.count == 0) {
            _this5.isAgreeHaveNoTrans = true;
            _this5.isCounterCard = false;
          } else {
            _this5.isAgreeHaveNoTrans = false;
            _this5.isCounterCard = true;
          }

          if (response["result"].length === 0) {
            _this5.showLoader = false;
            return;
          } //filter only withdraw = 1


          _this5.withdrawTransCounter = response["result"][0]["withdrawTransCounter"]; //filter only deposit = 3

          _this5.depositTransCounter = response["result"][0]["depositTransCounter"]; //filter only deposit = 5

          _this5.dailyTransCounter = response["result"][0]["dailyTransCounter"];

          _this5.transTypeChecker();

          _this5.showLoader = false;
        });
      }
    }
  }]);

  return AgreementTransTrackingPage;
}();

AgreementTransTrackingPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_5__.pagingService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }, {
    type: src_app_core_services_overdraft_agreement_service__WEBPACK_IMPORTED_MODULE_7__.AgreementService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef
  }];
};

AgreementTransTrackingPage.propDecorators = {
  search: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ["search"]
  }],
  transViewSelect: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ["transViewSelect"]
  }]
};
AgreementTransTrackingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: "app-agreement-trans-tracking",
  template: _agreement_trans_tracking_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)("fadeSlide", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)("hidden", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
    opacity: 0,
    transform: "translateX(-50px)",
    display: "none"
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.state)("visible", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
    opacity: 1,
    transform: "translateX(0)",
    display: "block"
  })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)("hidden => visible", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)("400ms ease-out")]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)("visible => hidden", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)("300ms ease-in")]) // Fade out + Slide Left
  ]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.trigger)("countAnimation", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.transition)(":increment", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
    opacity: 0,
    transform: "translateY(-20px)"
  }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.animate)("300ms ease-out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_10__.style)({
    opacity: 1,
    transform: "translateY(0)"
  }))])])],
  styles: [_agreement_trans_tracking_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], AgreementTransTrackingPage);


/***/ }),

/***/ 27037:
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/pages/overDraft/agreement-trans-tracking/agreement-trans-tracking.page.scss?ngResource ***!
  \**************************************************************************************************************/
/***/ (function(module) {

module.exports = ".infoFieldBorder {\n  justify-items: anchor-center;\n  border-radius: 5px;\n  border: 1px;\n  border-color: #1e9ea5 92, 92, 92;\n  border-style: solid;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  width: auto;\n  min-height: 30px;\n  height: auto;\n  margin-left: 1px;\n  margin-right: 1px;\n  margin-top: 1px;\n  margin-bottom: 1px;\n  text-align: right;\n  color: rgba(255, 255, 255, 0.245);\n  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 1px 2px 0px;\n  -moz-text-align-last: center;\n       text-align-last: center;\n}\n\n.ionSize {\n  width: 20px;\n  height: 20px;\n  padding-top: 5px;\n}\n\n.clickableRow {\n  cursor: pointer;\n}\n\n.clickableRow:active {\n  background-color: rgba(209, 209, 209, 0.46);\n}\n\n.clickableRow:hover {\n  background-color: rgba(209, 209, 209, 0.46);\n}\n\n.optionsButt {\n  width: 20px;\n  height: 20px;\n  padding-bottom: 5px;\n  padding-right: 5px;\n  cursor: pointer;\n}\n\n.optionsButt:active {\n  -ms-transform: scale(1.09);\n      transform: scale(1.09);\n}\n\nion-select[id=view] {\n  height: 20px;\n}\n\n.warningShadow {\n  justify-items: anchor-center;\n  border-radius: 5px;\n  border: 1px;\n  border-color: #1e9ea5 92, 92, 92;\n  border-style: solid;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  width: auto;\n  min-height: 30px;\n  height: auto;\n  margin-left: 1px;\n  margin-right: 1px;\n  margin-top: 1px;\n  margin-bottom: 1px;\n  text-align: right;\n  color: rgba(136, 132, 132, 0.329);\n  -moz-text-align-last: center;\n       text-align-last: center;\n  box-shadow: 0px 0px 8px 2px rgba(255, 0, 0, 0.35);\n  -webkit-box-shadow: 0px 0px 8px 2px rgba(255, 0, 0, 0.35);\n  -moz-box-shadow: 0px 0px 8px 2px rgba(255, 0, 0, 0.35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFncmVlbWVudC10cmFucy10cmFja2luZy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEZWxldGUlMjBpdFxcTmV3TW9oYXNzaWxDbGllbnRfMzA5NV9zcmNcXE5ld01vaGFzc2lsQ2xpZW50XFxzcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxvdmVyRHJhZnRcXGFncmVlbWVudC10cmFucy10cmFja2luZ1xcYWdyZWVtZW50LXRyYW5zLXRyYWNraW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO01BQUEscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwRkFBQTtFQUVBLDRCQUFBO09BQUEsdUJBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7QUNBRjs7QURHQTtFQUNFLDJDQUFBO0FDQUY7O0FER0E7RUFDRSwyQ0FBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsMEJBQUE7TUFBQSxzQkFBQTtBQ0FGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREdBO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7TUFBQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO09BQUEsdUJBQUE7RUFDQSxpREFBQTtFQUNBLHlEQUFBO0VBQ0Esc0RBQUE7QUNBRiIsImZpbGUiOiJhZ3JlZW1lbnQtdHJhbnMtdHJhY2tpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm9GaWVsZEJvcmRlciB7XHJcbiAganVzdGlmeS1pdGVtczogYW5jaG9yLWNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMWU5ZWE1KDkyLCA5MiwgOTIpO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0NSk7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgxNCwgMzAsIDM3LCAwLjEyKSAwcHggMnB4IDRweCAwcHgsXHJcbiAgICByZ2JhKDE0LCAzMCwgMzcsIDAuMzIpIDBweCAxcHggMnB4IDBweDtcclxuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxufVxyXG5cclxuLmlvblNpemUge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcblxyXG4uY2xpY2thYmxlUm93IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jbGlja2FibGVSb3c6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOSwgMjA5LCAyMDksIDAuNDYpO1xyXG59XHJcblxyXG4uY2xpY2thYmxlUm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOSwgMjA5LCAyMDksIDAuNDYpO1xyXG59XHJcblxyXG4ub3B0aW9uc0J1dHQge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5vcHRpb25zQnV0dDphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XHJcbn1cclxuXHJcbmlvbi1zZWxlY3RbaWQ9XCJ2aWV3XCJdIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi53YXJuaW5nU2hhZG93IHtcclxuICBqdXN0aWZ5LWl0ZW1zOiBhbmNob3ItY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweDtcclxuICBib3JkZXItY29sb3I6ICMxZTllYTUoOTIsIDkyLCA5Mik7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMzBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICBtYXJnaW4tcmlnaHQ6IDFweDtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiByZ2JhKDEzNiwgMTMyLCAxMzIsIDAuMzI5KTtcclxuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggcmdiYSgyNTUsIDAsIDAsIDAuMzUpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4IHJnYmEoMjU1LCAwLCAwLCAwLjM1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDI1NSwgMCwgMCwgMC4zNSk7XHJcbn1cclxuIiwiLmluZm9GaWVsZEJvcmRlciB7XG4gIGp1c3RpZnktaXRlbXM6IGFuY2hvci1jZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogIzFlOWVhNSA5MiwgOTIsIDkyO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4taGVpZ2h0OiAzMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQ1KTtcbiAgYm94LXNoYWRvdzogcmdiYSgxNCwgMzAsIDM3LCAwLjEyKSAwcHggMnB4IDRweCAwcHgsIHJnYmEoMTQsIDMwLCAzNywgMC4zMikgMHB4IDFweCAycHggMHB4O1xuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbn1cblxuLmlvblNpemUge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uY2xpY2thYmxlUm93IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2xpY2thYmxlUm93OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjA5LCAyMDksIDIwOSwgMC40Nik7XG59XG5cbi5jbGlja2FibGVSb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOSwgMjA5LCAyMDksIDAuNDYpO1xufVxuXG4ub3B0aW9uc0J1dHQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm9wdGlvbnNCdXR0OmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XG59XG5cbmlvbi1zZWxlY3RbaWQ9dmlld10ge1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi53YXJuaW5nU2hhZG93IHtcbiAganVzdGlmeS1pdGVtczogYW5jaG9yLWNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAjMWU5ZWE1IDkyLCA5MiwgOTI7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHJnYmEoMTM2LCAxMzIsIDEzMiwgMC4zMjkpO1xuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggMnB4IHJnYmEoMjU1LCAwLCAwLCAwLjM1KTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAycHggcmdiYSgyNTUsIDAsIDAsIDAuMzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4IDJweCByZ2JhKDI1NSwgMCwgMCwgMC4zNSk7XG59Il19 */";

/***/ }),

/***/ 6504:
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/pages/overDraft/agreement-trans-tracking/agreement-trans-tracking.page.html?ngResource ***!
  \**************************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n\n<ion-title>عرض حساب العميل</ion-title>\n<app-client-search\n  *ngIf=\"isSearching\"\n  [sourcePage]=\"109\"\n  [searchMethod]=\"2\"\n  [resultType]=\"0\"\n  [pageAction]=\"0\"\n  [initialSearchType]=\"initialSearchType\"\n  (selectedClient)=\"clientSelected($event)\"\n>\n</app-client-search>\n\n<div *ngIf=\"isAgreementsList\">\n  <ion-card>\n    <div class=\"table-responsive ion-padding\">\n      <ion-grid\n        [fixed]=\"true\"\n        style=\"min-width: 1350px\"\n        class=\"sms-grid scroll-container\"\n      >\n        <ion-row class=\"header-row\">\n          <ion-col size=\"1\" class=\"text-center\">\n            <ion-label>م</ion-label>\n          </ion-col>\n          <ion-col class=\"text-center\">\n            <ion-label>نوع الحساب</ion-label>\n          </ion-col>\n          <ion-col class=\"text-center\">\n            <ion-label>تاريخ الحساب</ion-label>\n          </ion-col>\n          <ion-col class=\"text-center\">\n            <ion-label>قيمة الحساب</ion-label>\n          </ion-col>\n          <ion-col class=\"text-center\">\n            <ion-label>حالة الحساب</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row\n          class=\"details-row clickableRow\"\n          *ngFor=\"let agree of ClientAgreementsResponseModal\"\n          (click)=\"getAgreementInfo(agree.agreement_key)\"\n        >\n          <ion-col size=\"1\" class=\"text-center\">\n            <ion-label> {{agree.row_num}} </ion-label>\n          </ion-col>\n          <ion-col class=\"text-center\">\n            <ion-label> {{agree.loan_type_name}} </ion-label>\n          </ion-col>\n          <ion-col class=\"text-center\">\n            <ion-label> {{agree.agr_date|date:'yyyy/MM/dd'}} </ion-label>\n          </ion-col>\n          <ion-col class=\"text-center\">\n            <ion-label>\n              {{agree.credit_limit|number: '1.2-2' : 'en' }}\n            </ion-label>\n          </ion-col>\n          <ion-col class=\"text-center\">\n            <ion-label> {{agree.agr_status_desc}} </ion-label>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </ion-card>\n  <ion-row class=\"justify-content-center paddingTop30px\">\n    <ion-button color=\"danger\" (click)=\"backButt('toSearch')\">رجوع</ion-button>\n  </ion-row>\n</div>\n\n<div *ngIf=\"isAgreementSelected\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-grid class=\"ion-padding\">\n            <ion-row *ngFor=\"let agree of ClientAgreementInfoResponseModal\">\n              <ion-col\n                size-xs=\"12\"\n                size-sm=\"6\"\n                size-md=\"3\"\n                size-lg=\"3\"\n                size-xl=\"3\"\n              >\n                <ion-row style=\"justify-content: center\">\n                  <ion-label class=\"form-label\"> اسم العميل </ion-label>\n                </ion-row>\n                <ion-row style=\"justify-content: center\">\n                  <ion-row\n                    class=\"infoFieldBorder\"\n                    style=\"justify-content: center\"\n                  >\n                    <ion-col size=\"auto\">\n                      <ion-icon name=\"person\" class=\"ionSize\"></ion-icon>\n                    </ion-col>\n                    <ion-col style=\"align-content: space-around\">\n                      <ion-label> {{agree.client_name}} </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-row>\n              </ion-col>\n              <ion-col\n                size-xs=\"12\"\n                size-sm=\"6\"\n                size-md=\"3\"\n                size-lg=\"3\"\n                size-xl=\"3\"\n              >\n                <ion-row style=\"justify-content: center\">\n                  <ion-label class=\"form-label\"> الرقم القومي </ion-label>\n                </ion-row>\n                <ion-row style=\"justify-content: center\">\n                  <ion-row\n                    class=\"infoFieldBorder\"\n                    style=\"justify-content: center\"\n                  >\n                    <ion-col size=\"auto\">\n                      <ion-icon name=\"card\" class=\"ionSize\"></ion-icon>\n                    </ion-col>\n                    <ion-col style=\"align-content: space-around\">\n                      <ion-label> {{agree.nation_id}} </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-row>\n              </ion-col>\n              <ion-col\n                size-xs=\"12\"\n                size-sm=\"6\"\n                size-md=\"3\"\n                size-lg=\"3\"\n                size-xl=\"3\"\n              >\n                <ion-row style=\"justify-content: center\">\n                  <ion-label class=\"form-label\"> نوع العميل </ion-label>\n                </ion-row>\n                <ion-row style=\"justify-content: center\">\n                  <ion-row\n                    class=\"infoFieldBorder\"\n                    style=\"justify-content: center\"\n                  >\n                    <ion-col size=\"auto\">\n                      <ion-icon name=\"people\" class=\"ionSize\"></ion-icon>\n                    </ion-col>\n                    <ion-col style=\"align-content: space-around\">\n                      <ion-label> {{agree.client_gender_desc}} </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-row>\n              </ion-col>\n              <ion-col\n                size-xs=\"12\"\n                size-sm=\"6\"\n                size-md=\"3\"\n                size-lg=\"3\"\n                size-xl=\"3\"\n              >\n                <ion-row style=\"justify-content: center\">\n                  <ion-label class=\"form-label\"> حالة العميل </ion-label>\n                </ion-row>\n                <ion-row style=\"justify-content: center\">\n                  <ion-row\n                    class=\"infoFieldBorder\"\n                    style=\"justify-content: center\"\n                  >\n                    <ion-col size=\"auto\">\n                      <ion-icon name=\"pulse\" class=\"ionSize\"></ion-icon>\n                    </ion-col>\n                    <ion-col style=\"align-content: space-around\">\n                      <ion-label> {{agree.client_status_desc}} </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card>\n          <ion-grid class=\"ion-padding\">\n            <ion-row *ngFor=\"let agree of ClientAgreementInfoResponseModal\">\n              <ion-col\n                size-xs=\"12\"\n                size-sm=\"6\"\n                size-md=\"3\"\n                size-lg=\"3\"\n                size-xl=\"3\"\n              >\n                <ion-row style=\"justify-content: center\">\n                  <ion-label class=\"form-label\"> نوع الحساب </ion-label>\n                </ion-row>\n                <ion-row style=\"justify-content: center\">\n                  <ion-row\n                    class=\"infoFieldBorder\"\n                    style=\"justify-content: center\"\n                  >\n                    <ion-col size=\"auto\">\n                      <ion-icon name=\"document\" class=\"ionSize\"></ion-icon>\n                    </ion-col>\n                    <ion-col style=\"align-content: space-around\">\n                      <ion-label> {{agree.loan_type_name}} </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-row>\n              </ion-col>\n              <ion-col\n                size-xs=\"12\"\n                size-sm=\"6\"\n                size-md=\"3\"\n                size-lg=\"3\"\n                size-xl=\"3\"\n              >\n                <ion-row style=\"justify-content: center\">\n                  <ion-label class=\"form-label\"> تاريخ الموافقة </ion-label>\n                </ion-row>\n                <ion-row style=\"justify-content: center\">\n                  <ion-row\n                    class=\"infoFieldBorder\"\n                    style=\"justify-content: center\"\n                  >\n                    <ion-col size=\"auto\">\n                      <ion-icon name=\"calendar\" class=\"ionSize\"></ion-icon>\n                    </ion-col>\n                    <ion-col style=\"align-content: space-around\">\n                      <ion-label>\n                        {{agree.agr_date|date:'yyyy/MM/dd'}}\n                      </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-row>\n              </ion-col>\n              <ion-col\n                size-xs=\"12\"\n                size-sm=\"6\"\n                size-md=\"3\"\n                size-lg=\"3\"\n                size-xl=\"3\"\n              >\n                <ion-row style=\"justify-content: center\">\n                  <ion-label class=\"form-label\"> الحد الاقصي للسحب </ion-label>\n                </ion-row>\n                <ion-row style=\"justify-content: center\">\n                  <ion-row\n                    style=\"justify-content: center\"\n                    class=\"infoFieldBorder\"\n                  >\n                    <ion-col size=\"auto\">\n                      <ion-icon name=\"cash\" class=\"ionSize\"></ion-icon>\n                    </ion-col>\n                    <ion-col size=\"auto\" style=\"align-content: space-around\">\n                      <ion-label>\n                        {{agree.credit_limit|number: '1.2-2' : 'en' }} ج.م\n                      </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-row>\n              </ion-col>\n              <ion-col\n                size-xs=\"12\"\n                size-sm=\"6\"\n                size-md=\"3\"\n                size-lg=\"3\"\n                size-xl=\"3\"\n              >\n                <ion-row style=\"justify-content: center\">\n                  <ion-label class=\"form-label\"> حالة الحساب </ion-label>\n                </ion-row>\n                <ion-row style=\"justify-content: center\">\n                  <ion-row\n                    class=\"infoFieldBorder\"\n                    [class.warningShadow]=\"isNotActiveAgr\"\n                    style=\"justify-content: center\"\n                  >\n                    <ion-col size=\"auto\">\n                      <ion-icon name=\"pulse\" class=\"ionSize\"></ion-icon>\n                    </ion-col>\n                    <ion-col style=\"align-content: space-around\">\n                      <ion-label> {{agree.agr_status_desc}} </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n            <ion-row\n              *ngFor=\"let agree of ClientAgreementInfoResponseModal\"\n              class=\"pt-2\"\n              style=\"justify-content: space-between\"\n            >\n              <ion-col\n                size-xs=\"12\"\n                size-sm=\"6\"\n                size-md=\"3\"\n                size-lg=\"3\"\n                size-xl=\"3\"\n              >\n                <ion-row style=\"justify-content: center\">\n                  <ion-row\n                    class=\"infoFieldBorder\"\n                    style=\"justify-content: center\"\n                  >\n                    <ion-col size=\"auto\">\n                      <ion-icon name=\"cash\" class=\"ionSize\"></ion-icon>\n                      <ion-label\n                        style=\"vertical-align: super; padding-right: 5px\"\n                        >ج.الاصل</ion-label\n                      >\n                    </ion-col>\n                    <ion-col style=\"align-content: space-around\">\n                      <ion-label>\n                        {{agree.principle_balance|number: '1.2-2' : 'en' }} ج.م\n                      </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-row>\n                <ion-row style=\"justify-content: center\">\n                  <ion-row\n                    class=\"infoFieldBorder\"\n                    style=\"justify-content: center\"\n                  >\n                    <ion-col size=\"auto\">\n                      <ion-icon name=\"cash\" class=\"ionSize\"></ion-icon>\n                      <ion-label\n                        style=\"vertical-align: super; padding-right: 5px\"\n                        >ج.الرسوم</ion-label\n                      >\n                    </ion-col>\n                    <ion-col style=\"align-content: space-around\">\n                      <ion-label>\n                        {{agree.charges_balance|number: '1.2-2' : 'en' }} ج.م\n                      </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-row>\n              </ion-col>\n              <ion-col\n                size-xs=\"12\"\n                size-sm=\"6\"\n                size-md=\"3\"\n                size-lg=\"3\"\n                size-xl=\"3\"\n              >\n                <ion-row style=\"justify-content: center\">\n                  <ion-row\n                    class=\"infoFieldBorder\"\n                    style=\"justify-content: center\"\n                  >\n                    <ion-col size=\"auto\">\n                      <ion-icon name=\"cash\" class=\"ionSize\"></ion-icon>\n                      <ion-label\n                        style=\"vertical-align: super; padding-right: 5px\"\n                        >ج.فـــــوائد</ion-label\n                      >\n                    </ion-col>\n                    <ion-col style=\"align-content: space-around\">\n                      <ion-label>\n                        {{agree.interest_balance|number: '1.2-2' : 'en' }} ج.م\n                      </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-row>\n                <ion-row style=\"justify-content: center\">\n                  <ion-row\n                    class=\"infoFieldBorder\"\n                    style=\"justify-content: center\"\n                  >\n                    <ion-col size=\"auto\">\n                      <ion-icon name=\"cash\" class=\"ionSize\"></ion-icon>\n                      <ion-label\n                        style=\"vertical-align: super; padding-right: 5px\"\n                        >ج.غرامات</ion-label\n                      >\n                    </ion-col>\n                    <ion-col style=\"align-content: space-around\">\n                      <ion-label>\n                        {{agree.penalty_balance|number: '1.2-2' : 'en' }} ج.م\n                      </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-row>\n              </ion-col>\n              <ion-col\n                size-xs=\"12\"\n                size-sm=\"6\"\n                size-md=\"3\"\n                size-lg=\"3\"\n                size-xl=\"3\"\n              >\n                <ion-row style=\"justify-content: center\">\n                  <ion-row\n                    class=\"infoFieldBorder\"\n                    style=\"justify-content: center\"\n                  >\n                    <ion-col size=\"auto\">\n                      <ion-icon name=\"calendar\" class=\"ionSize\"></ion-icon>\n                      <ion-label\n                        style=\"vertical-align: super; padding-right: 5px\"\n                        >بدء السحب</ion-label\n                      >\n                    </ion-col>\n                    <ion-col style=\"align-content: space-around\">\n                      <ion-label> {{agree.first_withdraw_trans}} </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-row>\n                <ion-row style=\"justify-content: center\">\n                  <ion-row\n                    class=\"infoFieldBorder\"\n                    style=\"justify-content: center\"\n                  >\n                    <ion-col size=\"auto\">\n                      <ion-icon name=\"calendar\" class=\"ionSize\"></ion-icon>\n                      <ion-label\n                        style=\"vertical-align: super; padding-right: 5px\"\n                        >اخـر سحب</ion-label\n                      >\n                    </ion-col>\n                    <ion-col style=\"align-content: space-around\">\n                      <ion-label> {{agree.last_withdraw_trans}} </ion-label>\n                    </ion-col>\n                  </ion-row>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"4\" size-lg=\"4\" size-xl=\"4\">\n        <ion-card>\n          <ion-grid class=\"ion-padding\">\n            <ion-row>\n              <ion-col>\n                <ion-row style=\"justify-content: center\">\n                  <div style=\"display: flex; justify-content: center\">\n                    <apx-chart\n                      #chart\n                      [series]=\"chartData.series\"\n                      [chart]=\"chartData.chart\"\n                      [labels]=\"chartData.labels\"\n                      [colors]=\"chartData.colors\"\n                      [legend]=\"chartData.legend\"\n                      [tooltip]=\"chartData.tooltip\"\n                    >\n                    </apx-chart>\n                  </div>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n        <ion-card *ngIf=\"isCounterCard\">\n          <ion-grid class=\"ion-padding\">\n            <ion-row>\n              <ion-col>\n                <ion-row style=\"justify-content: center\">\n                  <div style=\"display: flex; justify-content: center\">\n                    <ion-grid>\n                      <ion-row *ngIf=\"isWithdraw\">\n                        <ion-col size=\"10\">عدد مرات السحب</ion-col>\n                        <ion-col size=\"2\">\n                          <ion-badge [@countAnimation]=\"withdrawTransCounter\">\n                            <ion-label>{{ withdrawTransCounter }}</ion-label>\n                          </ion-badge>\n                        </ion-col>\n                      </ion-row>\n                      <ion-row *ngIf=\"isDeposit\">\n                        <ion-col size=\"10\">عدد مرات الايداع</ion-col>\n                        <ion-col size=\"2\">\n                          <ion-badge [@countAnimation]=\"depositTransCounter\">\n                            <ion-label> {{depositTransCounter}}</ion-label>\n                          </ion-badge>\n                        </ion-col>\n                      </ion-row>\n                    </ion-grid>\n                  </div>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </ion-col>\n      <ion-col size-xs=\"12\" size-sm=\"6\" size-md=\"8\" size-lg=\"8\" size-xl=\"8\">\n        <ion-card>\n          <div class=\"table-responsive ion-padding\">\n            <ion-grid\n              [fixed]=\"true\"\n              style=\"min-width: 800px\"\n              class=\"sms-grid scroll-container\"\n            >\n              <ion-row\n                style=\"justify-content: left\"\n                *ngIf=\"!isAgreeHaveNoTrans\"\n              >\n                <ion-col\n                  size-xs=\"2\"\n                  size-sm=\"8\"\n                  size-md=\"6\"\n                  size-lg=\"4\"\n                  size-xl=\"2\"\n                  dir=\"ltr\"\n                  [@fadeSlide]=\"showMoreOptions ? 'visible' : 'hidden'\"\n                >\n                  <ion-select\n                    id=\"view\"\n                    [(ngModel)]=\"transViewSelectInitialValue\"\n                    defaultValue\n                    #transViewSelect\n                    (ionChange)=\"transViewSelectHandleChange()\"\n                    interface=\"popover\"\n                    placeholder=\"طريقة العرض\"\n                  >\n                    <ion-select-option [value]=\"0\"\n                      >كل الحركات</ion-select-option\n                    >\n                    <ion-select-option *ngIf=\"isWithdraw\" [value]=\"1\"\n                      >سحب</ion-select-option\n                    >\n                    <ion-select-option *ngIf=\"isDeposit\" [value]=\"3\"\n                      >ايداع</ion-select-option\n                    >\n                    <ion-select-option *ngIf=\"isDailyTrns\" [value]=\"5\"\n                      >حساب الاغلاق</ion-select-option\n                    >\n                  </ion-select>\n                </ion-col>\n                <ion-col\n                  size=\"1\"\n                  dir=\"ltr\"\n                  style=\"text-align-last: start; align-content: end\"\n                >\n                  <ion-icon\n                    name=\"options\"\n                    class=\"optionsButt\"\n                    (click)=\"moreOptionsToggleSelect()\"\n                  ></ion-icon>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n            <ion-grid\n              [fixed]=\"true\"\n              style=\"min-width: 800px\"\n              class=\"sms-grid scroll-container\"\n            >\n              <ion-row class=\"header-row\">\n                <ion-col size=\"1\" class=\"text-center\">\n                  <ion-label>م</ion-label>\n                </ion-col>\n                <ion-col class=\"text-center\">\n                  <ion-label>نوع الحركة</ion-label>\n                </ion-col>\n                <ion-col class=\"text-center\">\n                  <ion-label>تاريخ الحركة</ion-label>\n                </ion-col>\n                <ion-col class=\"text-center\">\n                  <ion-label>قيمة الحركة</ion-label>\n                </ion-col>\n              </ion-row>\n              <ion-row\n                class=\"details-row\"\n                *ngFor=\"let trans of ClientAgreementTransResponseModalPaging\"\n              >\n                <ion-col size=\"1\" class=\"text-center\">\n                  <ion-label>{{trans.countClient}}</ion-label>\n                </ion-col>\n                <ion-col class=\"text-center\">\n                  <ion-label>{{trans.trans_act_desc}}</ion-label>\n                </ion-col>\n                <ion-col class=\"text-center\">\n                  <ion-label\n                    >{{trans.trans_act_date|date:'yyyy/MM/dd'}}</ion-label\n                  >\n                </ion-col>\n                <ion-col class=\"text-center\">\n                  <ion-label\n                    >{{trans.tot_trans_am|number: '1.2-2' : 'en' }}</ion-label\n                  >\n                </ion-col>\n              </ion-row>\n              <ion-row\n                class=\"justify-content-center details-row\"\n                *ngIf=\"isAgreeHaveNoTrans\"\n                >لا يوجد حركات على هذا الحساب</ion-row\n              >\n            </ion-grid>\n          </div>\n          <app-pagination\n            [page]=\"page\"\n            [pageSize]=\"pageSize\"\n            [collectionSize]=\"resultsCount\"\n            (pageChange)=\"changePaginationPage($event);\"\n          ></app-pagination>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-row class=\"justify-content-center paddingTop30px\">\n    <ion-button color=\"danger\" (click)=\"backButt('toList')\">رجوع</ion-button>\n  </ion-row>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_overDraft_agreement-trans-tracking_agreement-trans-tracking_module_ts.js.map