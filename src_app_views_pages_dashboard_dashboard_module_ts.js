"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_dashboard_dashboard_module_ts"],{

/***/ 35332:
/*!****************************************************!*\
  !*** ./src/app/core/services/dashboard.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardService": function() { return /* binding */ DashboardService; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ 43081);
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env.service */ 41752);








var DashboardService = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DashboardService(env, http, alertService) {
  var _this = this;

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DashboardService);

  this.env = env;
  this.http = http;
  this.alertService = alertService;

  this.getUserSupervisionDashBoard = function (request) {
    try {
      var result = _this.http.post(_this.env.API_URL + "api/DashBoard/GetUserSupervisionDashBoard", {
        username: request.username
      }).toPromise();

      return result;
    } catch (error) {
      console.error("Error GetUserSupervisionDashBoard:", error);
      throw error;
    }
  };

  this.getUserHierarchyDashBoard = function (request) {
    try {
      var result = _this.http.post(_this.env.API_URL + "api/DashBoard/GetUserHierarchyDashBoard", {
        username: request.username
      }).toPromise();

      return result;
    } catch (error) {
      console.error("Error GetUserHierarchyDashBoard:", error);
      throw error;
    }
  };

  this.getUserSupervisionDetails = function (request) {
    try {
      return _this.http.post(_this.env.API_URL + "api/DashBoard/GetUserSupervisionDetails", {
        username: request.username,
        dashboardSection: request.dashboardSection,
        branchCode: request.branchCode
      });
    } catch (error) {
      console.error("Error GetUserSupervisionDetails:", error);
      throw error;
    }
  };

  this.getUserHierarchyDetails = function (request) {
    try {
      return _this.http.post(_this.env.API_URL + "api/DashBoard/GetUserHierarchyDetails", {
        username: request.username,
        dashboardSection: request.dashboardSection,
        branchCode: request.branchCode
      });
    } catch (error) {
      console.error("Error GetUserHierarchyDetails:", error);
      throw error;
    }
  };

  this.getMainData = function () {
    try {
      return _this.http.get(_this.env.API_URL + "api/DashBoard/GetMainData");
    } catch (error) {
      console.error("Error getMainData:", error);
      throw error;
    }
  };

  this.getUserBranchesSummary = function (request) {
    try {
      return _this.http.post(_this.env.API_URL + "api/DashBoard/GetUserBranchesSummary", {
        username: request.username
      });
    } catch (error) {
      console.error("Error getUserBranchesSummary:", error);
      throw error;
    }
  };
});

DashboardService.ctorParameters = function () {
  return [{
    type: _env_service__WEBPACK_IMPORTED_MODULE_3__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
  }, {
    type: _alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService
  }];
};

DashboardService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
  providedIn: "root"
})], DashboardService);


/***/ }),

/***/ 57892:
/*!***********************************************!*\
  !*** ./src/app/views/animation/Animations.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideInOutAnimation": function() { return /* binding */ SlideInOutAnimation; },
/* harmony export */   "SlideLeftRightAnimation": function() { return /* binding */ SlideLeftRightAnimation; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 31631);

var SlideInOutAnimation = [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)("slideInOut", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(":leave", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 1
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("1500ms ease-in-out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: "hidden",
  "max-height": "0px",
  opacity: "0"
}))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("2500ms ease-in-out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  visibility: "visible",
  "max-height": "500px",
  opacity: "1"
}))])])])];
var SlideLeftRightAnimation = [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)("slideLeftRight", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(":leave", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  trasform: "translateX(0%)",
  opacity: 1
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("500ms ease-in-out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: "translateX(100%)",
  opacity: "0"
}))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(":enter", [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: "translateX(-100%)",
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("500ms ease-in-out", (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: "translateX(0%)",
  opacity: "1"
}))])])])];

/***/ }),

/***/ 69916:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard-branches-grid/dashboard-branches-grid.component.ts ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardBranchesGridComponent": function() { return /* binding */ DashboardBranchesGridComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _dashboard_branches_grid_component_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-branches-grid.component.html?ngResource */ 83389);
/* harmony import */ var _dashboard_branches_grid_component_css_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-branches-grid.component.css?ngResource */ 30012);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/dashboard.service */ 35332);











var DashboardBranchesGridComponent = /*#__PURE__*/function () {
  function DashboardBranchesGridComponent(mohassilAuthService, dashboardService, alertService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DashboardBranchesGridComponent);

    this.mohassilAuthService = mohassilAuthService;
    this.dashboardService = dashboardService;
    this.alertService = alertService;
    this.selectedBranchOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.showLoader = false;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DashboardBranchesGridComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.showLoader = true;
                this.gridData = {
                  header: {
                    first: "",
                    second: "",
                    third: "",
                    fourth: "",
                    fifth: ""
                  },
                  row: []
                };
                _context.next = 4;
                return this.mohassilAuthService.getUserInfo();

              case 4:
                this.username = _context.sent.user_name;
                _context.next = 7;
                return this.dashboardService.getUserBranchesSummary({
                  username: this.username
                }).toPromise();

              case 7:
                this.userBranches = _context.sent;
                this.getBranchesGridFields();
                this.showLoader = false;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "onBranchClick",
    value: function onBranchClick(branchName) {
      var selectedBranch = this.userBranches.find(function (branch) {
        return branch.branchName === branchName;
      });
      var response = {
        branchName: selectedBranch.branchName,
        branchCode: selectedBranch.branchCode
      };
      this.selectedBranchOutput.emit(response);
    }
  }, {
    key: "getBranchesGridFields",
    value: function getBranchesGridFields() {
      if (this.section === 1 && this.subSection === 1) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "الشهر الحالي",
          third: "الشهر السابق"
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.achieveNumber,
            thirdCol: branch.previousAchieveNumber
          };
        });
        return;
      }

      if (this.section === 1 && this.subSection === 2) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "الشهر الحالي",
          third: "الشهر السابق"
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.achieveAmount,
            thirdCol: branch.previousAchieveAmount
          };
        });
        return;
      }

      if (this.section === 1 && this.subSection === 3) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "المحقق",
          third: "المستهدف"
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.achieveNumber,
            thirdCol: branch.targetNumber
          };
        });
        return;
      }

      if (this.section === 1 && this.subSection === 4) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "المحقق",
          third: "المستهدف"
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.achieveAmount,
            thirdCol: branch.targetAmount
          };
        });
        return;
      }

      if (this.section === 2 && this.subSection === 1) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد الشهر الحالي",
          third: "قيمة الشهر الحالي",
          fourth: "عدد الشهر السابق",
          fifth: "قيمة الشهر السابق"
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.totalActiveLoanNumber,
            thirdCol: branch.totalActiveLoanUnpaidAmount,
            fourthCol: branch.totalActiveLoanNumberPreviousMonth,
            fifthCol: branch.totalActiveLoanUnpaidAmountPreviousMonth
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 1) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.currentArrearNumber7,
            thirdCol: branch.currentArrearAmount7
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 2) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.currentArrearNumber30,
            thirdCol: branch.currentArrearAmount30
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 3) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.currentArrearNumber60,
            thirdCol: branch.currentArrearAmount60
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 4) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.currentArrearNumber90,
            thirdCol: branch.currentArrearAmount90
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 5) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.currentArrearNumber120,
            thirdCol: branch.currentArrearAmount120
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 6) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.currentArrearNumberX120,
            thirdCol: branch.currentArrearAmountX120
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 7) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.currentArrearPaidNumber7,
            thirdCol: branch.currentArrearPaidAmount7
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 8) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.currentArrearPaidNumber30,
            thirdCol: branch.currentArrearPaidAmount30
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 9) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.currentArrearPaidNumber60,
            thirdCol: branch.currentArrearPaidAmount60
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 10) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.currentArrearPaidNumber90,
            thirdCol: branch.currentArrearPaidAmount90
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 11) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.currentArrearPaidNumber120,
            thirdCol: branch.currentArrearPaidAmount120
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 12) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.currentArrearPaidNumberX120,
            thirdCol: branch.currentArrearPaidAmountX120
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 1) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.previousArrearNumber7,
            thirdCol: branch.previousArrearAmount7
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 2) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.previousArrearNumber30,
            thirdCol: branch.previousArrearAmount30
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 3) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.previousArrearNumber60,
            thirdCol: branch.previousArrearAmount60
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 4) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.previousArrearNumber90,
            thirdCol: branch.previousArrearAmount90
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 5) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.previousArrearNumber120,
            thirdCol: branch.previousArrearAmount120
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 6) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.previousArrearNumberX120,
            thirdCol: branch.previousArrearAmountX120
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 7) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.previousArrearPaidNumber7,
            thirdCol: branch.previousArrearPaidAmount7
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 8) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.previousArrearPaidNumber30,
            thirdCol: branch.previousArrearPaidAmount30
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 9) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.previousArrearPaidNumber60,
            thirdCol: branch.previousArrearPaidAmount60
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 10) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.previousArrearPaidNumber90,
            thirdCol: branch.previousArrearPaidAmount90
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 11) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.previousArrearPaidNumber120,
            thirdCol: branch.previousArrearPaidAmount120
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 12) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.previousArrearPaidNumberX120,
            thirdCol: branch.previousArrearPaidAmountX120
          };
        });
        return;
      }

      if (this.section === 5 && this.subSection === 1) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.balancesAtRiskNumberCurrentMonth1To7,
            thirdCol: branch.balancesAtRiskAmountCurrentMonth1To7
          };
        });
        return;
      }

      if (this.section === 5 && this.subSection === 2) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.balancesAtRiskNumberCurrentMonth8To30,
            thirdCol: branch.balancesAtRiskAmountCurrentMonth8To30
          };
        });
        return;
      }

      if (this.section === 5 && this.subSection === 3) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.balancesAtRiskNumberCurrentMonth31To60,
            thirdCol: branch.balancesAtRiskAmountCurrentMonth31To60
          };
        });
        return;
      }

      if (this.section === 5 && this.subSection === 4) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.balancesAtRiskNumberCurrentMonth61To90,
            thirdCol: branch.balancesAtRiskAmountCurrentMonth61To90
          };
        });
        return;
      }

      if (this.section === 5 && this.subSection === 5) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.balancesAtRiskNumberCurrentMonth91To120,
            thirdCol: branch.balancesAtRiskAmountCurrentMonth91To120
          };
        });
        return;
      }

      if (this.section === 6 && this.subSection === 1) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.balancesAtRiskNumberPreviousMonth1To7,
            thirdCol: branch.balancesAtRiskAmountPreviousMonth1To7
          };
        });
        return;
      }

      if (this.section === 6 && this.subSection === 2) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.balancesAtRiskNumberPreviousMonth8To30,
            thirdCol: branch.balancesAtRiskAmountPreviousMonth8To30
          };
        });
        return;
      }

      if (this.section === 6 && this.subSection === 3) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.balancesAtRiskNumberPreviousMonth31To60,
            thirdCol: branch.balancesAtRiskAmountPreviousMonth31To60
          };
        });
        return;
      }

      if (this.section === 6 && this.subSection === 4) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.balancesAtRiskNumberPreviousMonth61To90,
            thirdCol: branch.balancesAtRiskAmountPreviousMonth61To90
          };
        });
        return;
      }

      if (this.section === 6 && this.subSection === 5) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد ",
          third: "القيمة "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.balancesAtRiskNumberPreviousMonth91To120,
            thirdCol: branch.balancesAtRiskAmountPreviousMonth91To120
          };
        });
        return;
      }

      if (this.section === 7 && this.subSection === 1) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد تم تحصيله",
          third: "العدد المطلوب",
          fourth: "قيمه تم تحصيلها",
          fifth: "القيمه المطلوبه "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.totalPaidInstallmentsTillToday,
            thirdCol: branch.totalInstallmentsDueTillToday,
            fourthCol: branch.totalPaidAmountTillToday,
            fifthCol: branch.totalAmountDueTillToday
          };
        });
        return;
      }

      if (this.section === 7 && this.subSection === 2) {
        this.gridData.header = {
          first: "اسم الفرع",
          second: "عدد تم تحصيله",
          third: "العدد المطلوب",
          fourth: "قيمه تم تحصيلها",
          fifth: "القيمه المطلوبه "
        };
        this.gridData.row = this.userBranches.map(function (branch) {
          return {
            firstCol: branch.branchName,
            secondCol: branch.totalPaidInstallmentsThisMonth,
            thirdCol: branch.totalInstallmentsDueThisMonth,
            fourthCol: branch.totalPaidAmountThisMonth,
            fifthCol: branch.totalAmountDueThisMonth
          };
        });
        return;
      }
    }
  }]);

  return DashboardBranchesGridComponent;
}();

DashboardBranchesGridComponent.ctorParameters = function () {
  return [{
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: src_app_core_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__.DashboardService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }];
};

DashboardBranchesGridComponent.propDecorators = {
  section: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  subSection: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  selectedBranchOutput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output
  }]
};
DashboardBranchesGridComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: "app-dashboard-branches-grid",
  template: _dashboard_branches_grid_component_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_dashboard_branches_grid_component_css_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], DashboardBranchesGridComponent);


/***/ }),

/***/ 87023:
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": function() { return /* binding */ DashboardPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page */ 69917);






var routes = [{
  path: '',
  component: _dashboard_page__WEBPACK_IMPORTED_MODULE_2__.DashboardPage
}];

var DashboardPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DashboardPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DashboardPageRoutingModule);
});

DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], DashboardPageRoutingModule);


/***/ }),

/***/ 61571:
/*!***********************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": function() { return /* binding */ DashboardPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ 87023);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ 69917);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-apexcharts */ 20054);
/* harmony import */ var _pie_chart_dashboard_pie_chart_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pie-chart-dashboard/pie-chart-dashboard.component */ 79480);
/* harmony import */ var _drill_down_supervision_drill_down_supervision_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drill-down-supervision/drill-down-supervision.component */ 77866);
/* harmony import */ var _drill_down_hierarchy_drill_down_hierarchy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drill-down-hierarchy/drill-down-hierarchy.component */ 67325);
/* harmony import */ var _drill_down_hierarchy_dashboard_users_grid_dashboard_users_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./drill-down-hierarchy/dashboard-users-grid/dashboard-users-grid.component */ 55605);
/* harmony import */ var _dashboard_branches_grid_dashboard_branches_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-branches-grid/dashboard-branches-grid.component */ 69916);
/* harmony import */ var _drill_down_supervision_dashboard_officers_grid_dashboard_officers_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./drill-down-supervision/dashboard-officers-grid/dashboard-officers-grid.component */ 18144);



















var DashboardPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DashboardPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DashboardPageModule);
});

DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonicModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__.NgApexchartsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateModule],
  declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_3__.DashboardPage, _pie_chart_dashboard_pie_chart_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.PieChartDashboardComponent, _drill_down_supervision_drill_down_supervision_component__WEBPACK_IMPORTED_MODULE_6__.DrillDownSupervisionComponent, _drill_down_hierarchy_drill_down_hierarchy_component__WEBPACK_IMPORTED_MODULE_7__.DrillDownHierarchyComponent, _drill_down_hierarchy_dashboard_users_grid_dashboard_users_grid_component__WEBPACK_IMPORTED_MODULE_8__.DashboardUsersGridComponent, _dashboard_branches_grid_dashboard_branches_grid_component__WEBPACK_IMPORTED_MODULE_9__.DashboardBranchesGridComponent, _drill_down_supervision_dashboard_officers_grid_dashboard_officers_grid_component__WEBPACK_IMPORTED_MODULE_10__.DashboardOfficersGridComponent]
})], DashboardPageModule);


/***/ }),

/***/ 69917:
/*!*********************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": function() { return /* binding */ DashboardPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page.html?ngResource */ 71521);
/* harmony import */ var _dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard.page.scss?ngResource */ 64519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var _animation_Animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animation/Animations */ 57892);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_dashboard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/dashboard.service */ 35332);
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/user.service */ 88386);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
















var DashboardPage = /*#__PURE__*/function () {
  function DashboardPage(cdref, authService, alertService, dashboardService, userService, referencesService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DashboardPage);

    this.cdref = cdref;
    this.authService = authService;
    this.alertService = alertService;
    this.dashboardService = dashboardService;
    this.userService = userService;
    this.referencesService = referencesService;
    this.showLoader = false;
    this.dashboardTypeViewModel = [];
    this.dashboardView = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(null);
    this.dashboardView$ = this.dashboardView.asObservable();
    this.useWorkflow = 0;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DashboardPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.showLoader = true;
                _context.prev = 1;
                _context.t0 = Number;
                _context.next = 5;
                return this.referencesService.getStaticValueById(26);

              case 5:
                _context.t1 = _context.sent.value;
                this.useWorkflow = (0, _context.t0)(_context.t1);
                this.initializeState();
                _context.next = 10;
                return this.loadInitialData();

              case 10:
                this.applyChartsData();
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t2 = _context["catch"](1);
                this.handleError(_context.t2);

              case 16:
                _context.prev = 16;
                this.showLoader = false;
                return _context.finish(16);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 13, 16, 19]]);
      }));
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      this.cdref.detectChanges();
    }
  }, {
    key: "initializeState",
    value: function initializeState() {
      this.mainDashboardData = null;
      this.resetDrillDownGrids();
    }
  }, {
    key: "loadInitialData",
    value: function loadInitialData() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.authService.getUserInfo();

              case 2:
                this.userInfo = _context2.sent;

                if (!this.useWorkflow) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 6;
                return this.referencesService.getDashboardTypeView();

              case 6:
                this.dashboardTypeViewModel = _context2.sent;

              case 7:
                _context2.next = 9;
                return this.userService.getUserPreference().toPromise();

              case 9:
                this.userPreference = _context2.sent;

                if (this.useWorkflow === 1) {
                  this.dashboardView.next(this.userPreference.dsh_type_view.toString());
                } else {
                  this.dashboardView.next("2");
                }

                _context2.next = 13;
                return this.dashboardService.getMainData().toPromise();

              case 13:
                this.mainDashboardData = _context2.sent;

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "applyChartsData",
    value: function applyChartsData() {
      var _this$dashboardData = this.dashboardData,
          achieveNumber = _this$dashboardData.achieveNumber,
          targetNumber = _this$dashboardData.targetNumber,
          achieveAmount = _this$dashboardData.achieveAmount,
          targetAmount = _this$dashboardData.targetAmount;
      this.chartsDashboard = {
        targetNumber: {
          first: {
            name: "المحقق",
            value: achieveNumber
          },
          second: {
            name: "المستهدف",
            value: targetNumber
          },
          finalName: null
        },
        targetAmount: {
          first: {
            name: "المحقق",
            value: achieveAmount
          },
          second: {
            name: "المستهدف",
            value: targetAmount
          },
          finalName: null
        }
      };
    }
  }, {
    key: "resetDrillDownGrids",
    value: function resetDrillDownGrids() {
      this.dashboardSectionVisibility = {
        productivity: {
          comparison: null,
          targetAmount: null,
          targetNumber: null
        },
        portfolio: {
          comparison: null
        },
        currentMonthOverdue: {
          notPaid: null,
          paid: null
        },
        previousMonthOverdue: {
          notPaid: null,
          paid: null
        },
        currentMonthAtRiskBalances: {
          notPaid: null
        },
        previousMonthAtRiskBalances: {
          notPaid: null
        },
        payment: {
          tillToday: null,
          untilThisMonth: null
        }
      };
    }
  }, {
    key: "dashboardData",
    get: function get() {
      return this.mainDashboardData;
    }
  }, {
    key: "dashboardTypeView",
    get: function get() {
      return Number(this.dashboardView.value);
    }
  }, {
    key: "updateDashboardView",
    value: function updateDashboardView(viewType) {
      this.dashboardView.next(viewType.toString());
      this.resetDrillDownGrids();
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var errorMessage = error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpErrorResponse ? JSON.stringify(error.error) : error instanceof Error ? error.message : String(error);
      this.alertService.showAlertError(errorMessage, false);
      console.error("Error:", error);
    }
  }]);

  return DashboardPage;
}();

DashboardPage.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
  }, {
    type: src_app_core_services_dashboard_service__WEBPACK_IMPORTED_MODULE_8__.DashboardService
  }, {
    type: src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_10__.ReferencesService
  }];
};

DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: "app-dashboard",
  template: _dashboard_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  animations: [_animation_Animations__WEBPACK_IMPORTED_MODULE_5__.SlideInOutAnimation],
  styles: [_dashboard_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], DashboardPage);


/***/ }),

/***/ 55605:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/drill-down-hierarchy/dashboard-users-grid/dashboard-users-grid.component.ts ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardUsersGridComponent": function() { return /* binding */ DashboardUsersGridComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _dashboard_users_grid_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-users-grid.component.html?ngResource */ 34398);
/* harmony import */ var _dashboard_users_grid_component_css_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-users-grid.component.css?ngResource */ 61608);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







var DashboardUsersGridComponent = /*#__PURE__*/function () {
  function DashboardUsersGridComponent() {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DashboardUsersGridComponent);

    this.usernameOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DashboardUsersGridComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {}
  }, {
    key: "clickOnSpecificUser",
    value: function clickOnSpecificUser(username) {
      this.usernameOutput.emit(username);
    }
  }]);

  return DashboardUsersGridComponent;
}();

DashboardUsersGridComponent.ctorParameters = function () {
  return [];
};

DashboardUsersGridComponent.propDecorators = {
  dashboardUserGrid: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
  }],
  usernameOutput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Output
  }]
};
DashboardUsersGridComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: "app-dashboard-users-grid",
  template: _dashboard_users_grid_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  styles: [_dashboard_users_grid_component_css_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], DashboardUsersGridComponent);


/***/ }),

/***/ 67325:
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/drill-down-hierarchy/drill-down-hierarchy.component.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrillDownHierarchyComponent": function() { return /* binding */ DrillDownHierarchyComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _drill_down_hierarchy_component_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drill-down-hierarchy.component.html?ngResource */ 94360);
/* harmony import */ var _drill_down_hierarchy_component_css_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drill-down-hierarchy.component.css?ngResource */ 56888);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/dashboard.service */ 35332);











var DashboardSections;

(function (DashboardSections) {
  DashboardSections[DashboardSections["productivitySection"] = 1] = "productivitySection";
  DashboardSections[DashboardSections["portfolioComparison"] = 2] = "portfolioComparison";
  DashboardSections[DashboardSections["currentMonthOverdue"] = 3] = "currentMonthOverdue";
  DashboardSections[DashboardSections["previousMonthOverdue"] = 4] = "previousMonthOverdue";
  DashboardSections[DashboardSections["currentMonthAtRiskBalances"] = 5] = "currentMonthAtRiskBalances";
  DashboardSections[DashboardSections["previousMonthAtRiskBalances"] = 6] = "previousMonthAtRiskBalances";
  DashboardSections[DashboardSections["payment"] = 7] = "payment";
})(DashboardSections || (DashboardSections = {}));

var DashboardLevels;

(function (DashboardLevels) {
  DashboardLevels[DashboardLevels["hide"] = 0] = "hide";
  DashboardLevels[DashboardLevels["branch"] = 1] = "branch";
  DashboardLevels[DashboardLevels["users"] = 2] = "users";
})(DashboardLevels || (DashboardLevels = {}));

var DrillDownHierarchyComponent = /*#__PURE__*/function () {
  //#endregion
  function DrillDownHierarchyComponent(cdref, mohassilAuthService, dashboardService, alertService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DrillDownHierarchyComponent);

    this.cdref = cdref;
    this.mohassilAuthService = mohassilAuthService;
    this.dashboardService = dashboardService;
    this.alertService = alertService;
    this.closeComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter(false);
    this.usersSupervisors = [];
    this.dashboardLevel = 1;
    this.showLoader = false;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DrillDownHierarchyComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.showLoader = true;
                this.dashboardUserGrid = {
                  header: {
                    first: "",
                    second: "",
                    third: "",
                    fourth: "",
                    fifth: ""
                  },
                  row: []
                };
                _context.next = 4;
                return this.mohassilAuthService.getUserInfo();

              case 4:
                this.userInfo = _context.sent;
                this.username = this.userInfo.user_name;
                this.usersSupervisors.push(this.username);
                this.showLoader = false;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      this.cdref.detectChanges();
    }
  }, {
    key: "addingNewUserSupervisor",
    value: function addingNewUserSupervisor(username) {
      this.usersSupervisors.push(username);
    }
  }, {
    key: "fetchData",
    value: function fetchData(username) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var section;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                section = this.section;
                this.showLoader = true;
                _context2.next = 5;
                return this.dashboardService.getUserHierarchyDetails({
                  username: username,
                  dashboardSection: section,
                  branchCode: this.selectedBranch.code
                }).toPromise();

              case 5:
                this.dashboardData = _context2.sent;
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                this.handleError(_context2.t0);

              case 11:
                _context2.prev = 11;
                this.showLoader = false;
                return _context2.finish(11);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8, 11, 14]]);
      }));
    }
  }, {
    key: "backButton",
    value: function backButton() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.showLoader = true;

                if (!(this.dashboardLevel === 1)) {
                  _context3.next = 7;
                  break;
                }

                this.dashboardLevel = 0;
                this.closeComponent.emit(true);
                _context3.next = 18;
                break;

              case 7:
                if (!(this.dashboardLevel === 2)) {
                  _context3.next = 18;
                  break;
                }

                this.usersSupervisors.pop();

                if (!(this.usersSupervisors.length === 0)) {
                  _context3.next = 15;
                  break;
                }

                this.selectedBranch = null;
                this.dashboardLevel = 1;
                this.usersSupervisors.push(this.username);
                _context3.next = 18;
                break;

              case 15:
                _context3.next = 17;
                return this.fetchData(this.getActiveSuperVisor());

              case 17:
                this.getUserGridFields();

              case 18:
                _context3.next = 23;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3["catch"](0);
                this.handleError(_context3.t0);

              case 23:
                _context3.prev = 23;
                this.showLoader = false;
                return _context3.finish(23);

              case 26:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 20, 23, 26]]);
      }));
    }
  }, {
    key: "getActiveSuperVisor",
    value: function getActiveSuperVisor() {
      return this.usersSupervisors[this.usersSupervisors.length - 1] || "";
    }
  }, {
    key: "getUserGridFields",
    value: function getUserGridFields() {
      var _this = this;

      if (this.dashboardLevel === 1) return;

      if (this.section === 1 && this.subSection === 1) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد الشهر الحالي",
          third: "عدد الشهر السابق"
        };
        var productivitySectionFiltered = this.dashboardData.productivitySection.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });
        this.dashboardUserGrid.row = productivitySectionFiltered.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.achieveNumber,
            thirdCol: user.previousAchieveNumber
          };
        });
        return;
      }

      if (this.section === 1 && this.subSection === 2) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "قيمة الشهر الحالي",
          third: "قيمة الشهر السابق"
        };

        var _productivitySectionFiltered = this.dashboardData.productivitySection.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _productivitySectionFiltered.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.achieveAmount,
            thirdCol: user.previousAchieveAmount
          };
        });
        return;
      }

      if (this.section === 1 && this.subSection === 3) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "المحقق",
          third: "المستهدف"
        };

        var _productivitySectionFiltered2 = this.dashboardData.productivitySection.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _productivitySectionFiltered2.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.achieveNumber,
            thirdCol: user.targetNumber
          };
        });
        return;
      }

      if (this.section === 1 && this.subSection === 4) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "المحقق",
          third: "المستهدف"
        };

        var _productivitySectionFiltered3 = this.dashboardData.productivitySection.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _productivitySectionFiltered3.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.achieveAmount,
            thirdCol: user.targetAmount
          };
        });
        return;
      }

      if (this.section === 2 && this.subSection === 1) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد الشهر الحالي",
          third: "قيمة الشهر الحالي",
          fourth: "عدد الشهر السابق",
          fifth: "قيمة الشهر السابق"
        };
        var portfolioComparisonFiltered = this.dashboardData.portfolioComparison.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });
        this.dashboardUserGrid.row = portfolioComparisonFiltered.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.totalActiveLoanNumber,
            thirdCol: user.totalActiveLoanUnpaidAmount,
            fourthCol: user.totalActiveLoanNumberPreviousMonth,
            fifthCol: user.totalActiveLoanUnpaidAmountPreviousMonth
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 1) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };
        var currentMonthOverdueFiltered = this.dashboardData.currentMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });
        this.dashboardUserGrid.row = currentMonthOverdueFiltered.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.currentArrearNumber7,
            thirdCol: user.currentArrearAmount7
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 2) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _currentMonthOverdueFiltered = this.dashboardData.currentMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _currentMonthOverdueFiltered.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.currentArrearNumber30,
            thirdCol: user.currentArrearAmount30
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 3) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _currentMonthOverdueFiltered2 = this.dashboardData.currentMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _currentMonthOverdueFiltered2.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.currentArrearNumber60,
            thirdCol: user.currentArrearAmount60
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 4) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _currentMonthOverdueFiltered3 = this.dashboardData.currentMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _currentMonthOverdueFiltered3.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.currentArrearNumber90,
            thirdCol: user.currentArrearAmount90
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 5) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _currentMonthOverdueFiltered4 = this.dashboardData.currentMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _currentMonthOverdueFiltered4.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.currentArrearNumber120,
            thirdCol: user.currentArrearAmount120
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 6) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _currentMonthOverdueFiltered5 = this.dashboardData.currentMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _currentMonthOverdueFiltered5.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.currentArrearNumberX120,
            thirdCol: user.currentArrearAmountX120
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 7) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _currentMonthOverdueFiltered6 = this.dashboardData.currentMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _currentMonthOverdueFiltered6.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.currentArrearPaidNumber7,
            thirdCol: user.currentArrearPaidAmount7
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 8) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _currentMonthOverdueFiltered7 = this.dashboardData.currentMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _currentMonthOverdueFiltered7.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.currentArrearPaidNumber30,
            thirdCol: user.currentArrearPaidAmount30
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 9) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _currentMonthOverdueFiltered8 = this.dashboardData.currentMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _currentMonthOverdueFiltered8.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.currentArrearPaidNumber60,
            thirdCol: user.currentArrearPaidAmount60
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 10) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _currentMonthOverdueFiltered9 = this.dashboardData.currentMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _currentMonthOverdueFiltered9.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.currentArrearPaidNumber90,
            thirdCol: user.currentArrearPaidAmount90
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 11) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _currentMonthOverdueFiltered10 = this.dashboardData.currentMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _currentMonthOverdueFiltered10.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.currentArrearPaidNumber120,
            thirdCol: user.currentArrearPaidAmount120
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 12) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _currentMonthOverdueFiltered11 = this.dashboardData.currentMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _currentMonthOverdueFiltered11.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.currentArrearPaidNumberX120,
            thirdCol: user.currentArrearPaidAmountX120
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 1) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };
        var previousMonthOverdueFiltered = this.dashboardData.previousMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });
        this.dashboardUserGrid.row = previousMonthOverdueFiltered.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.previousArrearNumber7,
            thirdCol: user.previousArrearAmount7
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 2) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _previousMonthOverdueFiltered = this.dashboardData.previousMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _previousMonthOverdueFiltered.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.previousArrearNumber30,
            thirdCol: user.previousArrearAmount30
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 3) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _previousMonthOverdueFiltered2 = this.dashboardData.previousMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _previousMonthOverdueFiltered2.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.previousArrearNumber60,
            thirdCol: user.previousArrearAmount60
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 4) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _previousMonthOverdueFiltered3 = this.dashboardData.previousMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _previousMonthOverdueFiltered3.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.previousArrearNumber90,
            thirdCol: user.previousArrearAmount90
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 5) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _previousMonthOverdueFiltered4 = this.dashboardData.previousMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _previousMonthOverdueFiltered4.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.previousArrearNumber120,
            thirdCol: user.previousArrearAmount120
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 6) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _previousMonthOverdueFiltered5 = this.dashboardData.previousMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _previousMonthOverdueFiltered5.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.previousArrearNumberX120,
            thirdCol: user.previousArrearAmountX120
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 7) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _previousMonthOverdueFiltered6 = this.dashboardData.previousMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _previousMonthOverdueFiltered6.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.previousArrearPaidNumber7,
            thirdCol: user.previousArrearPaidAmount7
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 8) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _previousMonthOverdueFiltered7 = this.dashboardData.previousMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _previousMonthOverdueFiltered7.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.previousArrearPaidNumber30,
            thirdCol: user.previousArrearPaidAmount30
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 9) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _previousMonthOverdueFiltered8 = this.dashboardData.previousMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _previousMonthOverdueFiltered8.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.previousArrearPaidNumber60,
            thirdCol: user.previousArrearPaidAmount60
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 10) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _previousMonthOverdueFiltered9 = this.dashboardData.previousMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _previousMonthOverdueFiltered9.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.previousArrearPaidNumber90,
            thirdCol: user.previousArrearPaidAmount90
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 11) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _previousMonthOverdueFiltered10 = this.dashboardData.previousMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _previousMonthOverdueFiltered10.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.previousArrearPaidNumber120,
            thirdCol: user.previousArrearPaidAmount120
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 12) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _previousMonthOverdueFiltered11 = this.dashboardData.previousMonthOverdue.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _previousMonthOverdueFiltered11.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.previousArrearPaidNumberX120,
            thirdCol: user.previousArrearPaidAmountX120
          };
        });
        return;
      }

      if (this.section === 5 && this.subSection === 1) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };
        var currentMonthAtRiskBalancesFiltered = this.dashboardData.currentMonthAtRiskBalances.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });
        this.dashboardUserGrid.row = currentMonthAtRiskBalancesFiltered.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.balancesAtRiskNumberCurrentMonth1To7,
            thirdCol: user.balancesAtRiskAmountCurrentMonth1To7
          };
        });
        return;
      }

      if (this.section === 5 && this.subSection === 2) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _currentMonthAtRiskBalancesFiltered = this.dashboardData.currentMonthAtRiskBalances.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _currentMonthAtRiskBalancesFiltered.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.balancesAtRiskNumberCurrentMonth8To30,
            thirdCol: user.balancesAtRiskAmountCurrentMonth8To30
          };
        });
        return;
      }

      if (this.section === 5 && this.subSection === 3) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _currentMonthAtRiskBalancesFiltered2 = this.dashboardData.currentMonthAtRiskBalances.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _currentMonthAtRiskBalancesFiltered2.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.balancesAtRiskNumberCurrentMonth31To60,
            thirdCol: user.balancesAtRiskAmountCurrentMonth31To60
          };
        });
        return;
      }

      if (this.section === 5 && this.subSection === 4) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _currentMonthAtRiskBalancesFiltered3 = this.dashboardData.currentMonthAtRiskBalances.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _currentMonthAtRiskBalancesFiltered3.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.balancesAtRiskNumberCurrentMonth61To90,
            thirdCol: user.balancesAtRiskAmountCurrentMonth61To90
          };
        });
        return;
      }

      if (this.section === 5 && this.subSection === 5) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _currentMonthAtRiskBalancesFiltered4 = this.dashboardData.currentMonthAtRiskBalances.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _currentMonthAtRiskBalancesFiltered4.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.balancesAtRiskNumberCurrentMonth91To120,
            thirdCol: user.balancesAtRiskAmountCurrentMonth91To120
          };
        });
        return;
      }

      if (this.section === 6 && this.subSection === 1) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };
        var previousMonthAtRiskBalancesFiltered = this.dashboardData.previousMonthAtRiskBalances.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });
        this.dashboardUserGrid.row = previousMonthAtRiskBalancesFiltered.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.balancesAtRiskNumberPreviousMonth1To7,
            thirdCol: user.balancesAtRiskAmountPreviousMonth1To7
          };
        });
        return;
      }

      if (this.section === 6 && this.subSection === 2) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _previousMonthAtRiskBalancesFiltered = this.dashboardData.previousMonthAtRiskBalances.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _previousMonthAtRiskBalancesFiltered.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.balancesAtRiskNumberPreviousMonth8To30,
            thirdCol: user.balancesAtRiskAmountPreviousMonth8To30
          };
        });
        return;
      }

      if (this.section === 6 && this.subSection === 3) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _previousMonthAtRiskBalancesFiltered2 = this.dashboardData.previousMonthAtRiskBalances.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _previousMonthAtRiskBalancesFiltered2.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.balancesAtRiskNumberPreviousMonth31To60,
            thirdCol: user.balancesAtRiskAmountPreviousMonth31To60
          };
        });
        return;
      }

      if (this.section === 6 && this.subSection === 4) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _previousMonthAtRiskBalancesFiltered3 = this.dashboardData.previousMonthAtRiskBalances.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _previousMonthAtRiskBalancesFiltered3.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.balancesAtRiskNumberPreviousMonth61To90,
            thirdCol: user.balancesAtRiskAmountPreviousMonth61To90
          };
        });
        return;
      }

      if (this.section === 6 && this.subSection === 5) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد ",
          third: "القيمة "
        };

        var _previousMonthAtRiskBalancesFiltered4 = this.dashboardData.previousMonthAtRiskBalances.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _previousMonthAtRiskBalancesFiltered4.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.balancesAtRiskNumberPreviousMonth91To120,
            thirdCol: user.balancesAtRiskAmountPreviousMonth91To120
          };
        });
        return;
      }

      if (this.section === 7 && this.subSection === 1) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد تم تحصيله",
          third: "العدد المطلوب",
          fourth: "قيمه تم تحصيلها",
          fifth: "القيمه المطلوبه "
        };
        var paymentFiltered = this.dashboardData.payment.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });
        this.dashboardUserGrid.row = paymentFiltered.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.totalPaidInstallmentsTillToday,
            thirdCol: user.totalInstallmentsDueTillToday,
            fourthCol: user.totalPaidAmountTillToday,
            fifthCol: user.totalAmountDueTillToday
          };
        });
        return;
      }

      if (this.section === 7 && this.subSection === 2) {
        this.dashboardUserGrid.header = {
          first: "اسم المستخدم",
          second: "عدد تم تحصيله",
          third: "العدد المطلوب",
          fourth: "قيمه تم تحصيلها",
          fifth: "القيمه المطلوبه "
        };

        var _paymentFiltered = this.dashboardData.payment.filter(function (x) {
          return x.branchCode === _this.selectedBranch.code;
        });

        this.dashboardUserGrid.row = _paymentFiltered.map(function (user) {
          return {
            firstCol: user.supervisedUserName,
            secondCol: user.totalPaidInstallmentsThisMonth,
            thirdCol: user.totalInstallmentsDueThisMonth,
            fourthCol: user.totalPaidAmountThisMonth,
            fifthCol: user.totalAmountDueThisMonth
          };
        });
        return;
      }
    }
  }, {
    key: "clickOnSpecificBranch",
    value: function clickOnSpecificBranch(branch) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.showLoader = true;
                this.selectedBranch = {
                  name: branch.branchName,
                  code: branch.branchCode
                };
                _context4.next = 4;
                return this.fetchData(this.username);

              case 4:
                this.dashboardLevel = 2;
                this.getUserGridFields();

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "clickOnSpecificUser",
    value: function clickOnSpecificUser(username) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;

                if (!(username === "اخري")) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt("return");

              case 3:
                this.showLoader = true;
                _context5.next = 6;
                return this.fetchData(username);

              case 6:
                this.addingNewUserSupervisor(username);
                this.getUserGridFields();
                _context5.next = 13;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](0);
                this.handleError(_context5.t0);

              case 13:
                _context5.prev = 13;
                this.showLoader = false;
                return _context5.finish(13);

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 10, 13, 16]]);
      }));
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var errorMessage;

      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpErrorResponse) {
        errorMessage = JSON.stringify(error.error);
      } else if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = String(error);
      }

      this.alertService.showAlertError(errorMessage, false);
      console.error("Error:", error);
    }
  }]);

  return DrillDownHierarchyComponent;
}();

DrillDownHierarchyComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: src_app_core_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__.DashboardService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }];
};

DrillDownHierarchyComponent.propDecorators = {
  section: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  subSection: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }],
  closeComponent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Output
  }]
};
DrillDownHierarchyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: "app-drill-down-hierarchy",
  template: _drill_down_hierarchy_component_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_drill_down_hierarchy_component_css_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], DrillDownHierarchyComponent);


/***/ }),

/***/ 18144:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/drill-down-supervision/dashboard-officers-grid/dashboard-officers-grid.component.ts ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardOfficersGridComponent": function() { return /* binding */ DashboardOfficersGridComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _dashboard_officers_grid_component_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-officers-grid.component.html?ngResource */ 93768);
/* harmony import */ var _dashboard_officers_grid_component_css_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-officers-grid.component.css?ngResource */ 35735);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/dashboard.service */ 35332);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);














var DashboardOfficersGridComponent = /*#__PURE__*/function () {
  function DashboardOfficersGridComponent(mohassilAuthService, dashboardService, alertService, pagingService, sortingService) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DashboardOfficersGridComponent);

    this.mohassilAuthService = mohassilAuthService;
    this.dashboardService = dashboardService;
    this.alertService = alertService;
    this.pagingService = pagingService;
    this.sortingService = sortingService;
    this.closeComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter(false);
    this.showLoader = false;
    this.paginationPage = 1;
    this.sortingObject = {
      sortingIconClass: null,
      sortingIconParam: null
    };

    this.changePaginationPage = function (newPage) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.paginationPage = newPage;

                try {
                  this.showLoader = true; // this.allFunderCodesInSystem = await this.referencesService
                  //   .getAllFunderCodeInSystem()
                  //   .toPromise();
                } catch (error) {
                  console.log("error", error);
                  this.alertService.showAlertError((error === null || error === void 0 ? void 0 : error.message) || "حدث خطا في البيانات", false);
                } finally {
                  this.showLoader = false;
                }

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DashboardOfficersGridComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var username;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                this.showLoader = true;
                this.dashboardUserGrid = {
                  header: {
                    first: "",
                    second: "",
                    third: "",
                    fourth: "",
                    fifth: ""
                  },
                  row: []
                };
                _context2.next = 5;
                return this.mohassilAuthService.getUserInfo();

              case 5:
                username = _context2.sent.user_name;
                console.log(this.selectedBranchCode);
                _context2.next = 9;
                return this.dashboardService.getUserSupervisionDetails({
                  username: username,
                  dashboardSection: this.section,
                  branchCode: this.selectedBranchCode
                }).toPromise();

              case 9:
                this.dashboardData = _context2.sent;
                this.getGridFields();
                _context2.next = 16;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                this.handleError(_context2.t0);

              case 16:
                _context2.prev = 16;
                this.showLoader = false;
                return _context2.finish(16);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 13, 16, 19]]);
      }));
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var errorMessage;

      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpErrorResponse) {
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
    key: "sortingTable",
    value: function sortingTable(data, param) {
      console.log(data, param);
      this.sortingService.sortByParameter(data, param);
      this.sortingObject.sortingIconClass = this.sortingService.sortOrder === "asc" ? "arrow-down-outline" : "arrow-up-outline";
      this.sortingObject.sortingIconParam = param;
    }
  }, {
    key: "getGridFields",
    value: function getGridFields() {
      if (this.section === 1 && this.subSection === 1) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد الشهر الحالي",
          third: "عدد الشهر السابق"
        };
        this.dashboardUserGrid.row = this.dashboardData.productivitySection.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.achieveNumber,
            thirdCol: user.previousAchieveNumber
          };
        });
        return;
      }

      if (this.section === 1 && this.subSection === 2) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "قيمة الشهر الحالي",
          third: "قيمة الشهر السابق"
        };
        this.dashboardUserGrid.row = this.dashboardData.productivitySection.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.achieveAmount,
            thirdCol: user.previousAchieveAmount
          };
        });
        return;
      }

      if (this.section === 1 && this.subSection === 3) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "العدد المحقق",
          third: "العدد المستهدف"
        };
        this.dashboardUserGrid.row = this.dashboardData.productivitySection.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.achieveNumber,
            thirdCol: user.targetNumber
          };
        });
        return;
      }

      if (this.section === 1 && this.subSection === 4) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "القيمة المحقق",
          third: "القيمة المستهدف"
        };
        this.dashboardUserGrid.row = this.dashboardData.productivitySection.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.achieveAmount,
            thirdCol: user.targetAmount
          };
        });
        return;
      }

      if (this.section === 2 && this.subSection === 1) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد الشهر الحالي",
          third: "قيمة الشهر الحالي",
          fourth: "عدد الشهر السابق",
          fifth: "قيمة الشهر السابق"
        };
        this.dashboardUserGrid.row = this.dashboardData.portfolioComparison.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.totalActiveLoanNumber,
            thirdCol: user.totalActiveLoanUnpaidAmount,
            fourthCol: user.totalActiveLoanNumberPreviousMonth,
            fifthCol: user.totalActiveLoanUnpaidAmountPreviousMonth
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 1) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.currentArrearNumber7,
            thirdCol: user.currentArrearAmount7
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 2) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.currentArrearNumber30,
            thirdCol: user.currentArrearAmount30
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 3) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.currentArrearNumber60,
            thirdCol: user.currentArrearAmount60
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 4) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.currentArrearNumber90,
            thirdCol: user.currentArrearAmount90
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 5) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.currentArrearNumber120,
            thirdCol: user.currentArrearAmount120
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 6) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.currentArrearNumberX120,
            thirdCol: user.currentArrearAmountX120
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 7) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.currentArrearPaidNumber7,
            thirdCol: user.currentArrearPaidAmount7
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 8) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.currentArrearPaidNumber30,
            thirdCol: user.currentArrearPaidAmount30
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 9) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.currentArrearPaidNumber60,
            thirdCol: user.currentArrearPaidAmount60
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 10) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.currentArrearPaidNumber90,
            thirdCol: user.currentArrearPaidAmount90
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 11) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.currentArrearPaidNumber120,
            thirdCol: user.currentArrearPaidAmount120
          };
        });
        return;
      }

      if (this.section === 3 && this.subSection === 12) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.currentArrearPaidNumberX120,
            thirdCol: user.currentArrearPaidAmountX120
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 1) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.previousArrearNumber7,
            thirdCol: user.previousArrearAmount7
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 2) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.previousArrearNumber30,
            thirdCol: user.previousArrearAmount30
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 3) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.previousArrearNumber60,
            thirdCol: user.previousArrearAmount60
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 4) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.previousArrearNumber90,
            thirdCol: user.previousArrearAmount90
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 5) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.previousArrearNumber120,
            thirdCol: user.previousArrearAmount120
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 6) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.previousArrearNumberX120,
            thirdCol: user.previousArrearAmountX120
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 7) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.previousArrearPaidNumber7,
            thirdCol: user.previousArrearPaidAmount7
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 8) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.previousArrearPaidNumber30,
            thirdCol: user.previousArrearPaidAmount30
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 9) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.previousArrearPaidNumber60,
            thirdCol: user.previousArrearPaidAmount60
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 10) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.previousArrearPaidNumber90,
            thirdCol: user.previousArrearPaidAmount90
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 11) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.previousArrearPaidNumber120,
            thirdCol: user.previousArrearPaidAmount120
          };
        });
        return;
      }

      if (this.section === 4 && this.subSection === 12) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthOverdue.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.previousArrearPaidNumberX120,
            thirdCol: user.previousArrearPaidAmountX120
          };
        });
        return;
      }

      if (this.section === 5 && this.subSection === 1) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthAtRiskBalances.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.balancesAtRiskNumberCurrentMonth1To7,
            thirdCol: user.balancesAtRiskAmountCurrentMonth1To7
          };
        });
        return;
      }

      if (this.section === 5 && this.subSection === 2) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthAtRiskBalances.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.balancesAtRiskNumberCurrentMonth8To30,
            thirdCol: user.balancesAtRiskAmountCurrentMonth8To30
          };
        });
        return;
      }

      if (this.section === 5 && this.subSection === 3) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthAtRiskBalances.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.balancesAtRiskNumberCurrentMonth31To60,
            thirdCol: user.balancesAtRiskAmountCurrentMonth31To60
          };
        });
        return;
      }

      if (this.section === 5 && this.subSection === 4) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthAtRiskBalances.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.balancesAtRiskNumberCurrentMonth61To90,
            thirdCol: user.balancesAtRiskAmountCurrentMonth61To90
          };
        });
        return;
      }

      if (this.section === 5 && this.subSection === 5) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.currentMonthAtRiskBalances.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.balancesAtRiskNumberCurrentMonth91To120,
            thirdCol: user.balancesAtRiskAmountCurrentMonth91To120
          };
        });
        return;
      }

      if (this.section === 6 && this.subSection === 1) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthAtRiskBalances.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.balancesAtRiskNumberPreviousMonth1To7,
            thirdCol: user.balancesAtRiskAmountPreviousMonth1To7
          };
        });
        return;
      }

      if (this.section === 6 && this.subSection === 2) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthAtRiskBalances.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.balancesAtRiskNumberPreviousMonth8To30,
            thirdCol: user.balancesAtRiskAmountPreviousMonth8To30
          };
        });
        return;
      }

      if (this.section === 6 && this.subSection === 3) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthAtRiskBalances.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.balancesAtRiskNumberPreviousMonth31To60,
            thirdCol: user.balancesAtRiskAmountPreviousMonth31To60
          };
        });
        return;
      }

      if (this.section === 6 && this.subSection === 4) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthAtRiskBalances.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.balancesAtRiskNumberPreviousMonth61To90,
            thirdCol: user.balancesAtRiskAmountPreviousMonth61To90
          };
        });
        return;
      }

      if (this.section === 6 && this.subSection === 5) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد ",
          third: "القيمة "
        };
        this.dashboardUserGrid.row = this.dashboardData.previousMonthAtRiskBalances.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.balancesAtRiskNumberPreviousMonth91To120,
            thirdCol: user.balancesAtRiskAmountPreviousMonth91To120
          };
        });
        return;
      }

      if (this.section === 7 && this.subSection === 1) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد تم تحصيله",
          third: "العدد المطلوب",
          fourth: "قيمه تم تحصيلها",
          fifth: "القيمه المطلوبه "
        };
        this.dashboardUserGrid.row = this.dashboardData.payment.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.totalPaidInstallmentsTillToday,
            thirdCol: user.totalInstallmentsDueTillToday,
            fourthCol: user.totalPaidAmountTillToday,
            fifthCol: user.totalAmountDueTillToday
          };
        });
        return;
      }

      if (this.section === 7 && this.subSection === 2) {
        this.dashboardUserGrid.header = {
          first: "اسم المندوب",
          second: "عدد تم تحصيله",
          third: "العدد المطلوب",
          fourth: "قيمه تم تحصيلها",
          fifth: "القيمه المطلوبه "
        };
        this.dashboardUserGrid.row = this.dashboardData.payment.map(function (user) {
          return {
            firstCol: user.officerName,
            secondCol: user.totalPaidInstallmentsThisMonth,
            thirdCol: user.totalInstallmentsDueThisMonth,
            fourthCol: user.totalPaidAmountThisMonth,
            fifthCol: user.totalAmountDueThisMonth
          };
        });
        return;
      }
    }
  }]);

  return DashboardOfficersGridComponent;
}();

DashboardOfficersGridComponent.ctorParameters = function () {
  return [{
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: src_app_core_services_dashboard_service__WEBPACK_IMPORTED_MODULE_7__.DashboardService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_8__.pagingService
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_9__.sortingService
  }];
};

DashboardOfficersGridComponent.propDecorators = {
  section: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
  }],
  subSection: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
  }],
  selectedBranchCode: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
  }],
  closeComponent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output
  }]
};
DashboardOfficersGridComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: "app-dashboard-officers-grid",
  template: _dashboard_officers_grid_component_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_dashboard_officers_grid_component_css_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], DashboardOfficersGridComponent);


/***/ }),

/***/ 77866:
/*!**************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/drill-down-supervision/drill-down-supervision.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DrillDownSupervisionComponent": function() { return /* binding */ DrillDownSupervisionComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _drill_down_supervision_component_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drill-down-supervision.component.html?ngResource */ 28761);
/* harmony import */ var _drill_down_supervision_component_css_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drill-down-supervision.component.css?ngResource */ 50456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);









var DashboardLevels;

(function (DashboardLevels) {
  DashboardLevels[DashboardLevels["hide"] = 0] = "hide";
  DashboardLevels[DashboardLevels["branch"] = 1] = "branch";
  DashboardLevels[DashboardLevels["users"] = 2] = "users";
})(DashboardLevels || (DashboardLevels = {}));

var DrillDownSupervisionComponent = /*#__PURE__*/function () {
  function DrillDownSupervisionComponent(alertService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DrillDownSupervisionComponent);

    this.alertService = alertService; //#region Variables

    this.showLoader = false;
    this.dashboardLevel = 1;
    this.closeComponent = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter(false);
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DrillDownSupervisionComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  this.showLoader = true;
                  this.dashboardBranchesOutput = {
                    branchCode: null,
                    branchName: null
                  };
                } catch (error) {
                  this.handleError(error);
                } finally {
                  this.showLoader = false;
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "backButton",
    value: function backButton() {
      if (this.dashboardLevel === 2) {
        this.dashboardLevel = 1;
        return;
      }

      this.closeComponent.emit(true);
    }
  }, {
    key: "clickOnSpecificBranch",
    value: function clickOnSpecificBranch(branch) {
      this.dashboardBranchesOutput = branch;
      this.dashboardLevel = 2;
    }
  }, {
    key: "handleError",
    value: function handleError(error) {
      var errorMessage;

      if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpErrorResponse) {
        errorMessage = JSON.stringify(error.error);
      } else if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = String(error);
      }

      this.alertService.showAlertError(errorMessage, false);
      console.error("Error:", error);
    }
  }]);

  return DrillDownSupervisionComponent;
}();

DrillDownSupervisionComponent.ctorParameters = function () {
  return [{
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }];
};

DrillDownSupervisionComponent.propDecorators = {
  section: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  subSection: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  closeComponent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Output
  }]
};
DrillDownSupervisionComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: "app-drill-down-supervision",
  template: _drill_down_supervision_component_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_drill_down_supervision_component_css_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], DrillDownSupervisionComponent);


/***/ }),

/***/ 79480:
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/pie-chart-dashboard/pie-chart-dashboard.component.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PieChartDashboardComponent": function() { return /* binding */ PieChartDashboardComponent; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _pie_chart_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pie-chart-dashboard.component.html?ngResource */ 46767);
/* harmony import */ var _pie_chart_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pie-chart-dashboard.component.scss?ngResource */ 16174);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








var PieChartDashboardComponent = /*#__PURE__*/function () {
  function PieChartDashboardComponent(decimalPipe) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PieChartDashboardComponent);

    this.decimalPipe = decimalPipe;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PieChartDashboardComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.initializeChartUi();
      this.initialState();
    }
  }, {
    key: "initializeChartUi",
    value: function initializeChartUi() {
      var _a;

      this.chartOptions = {
        chart: {
          height: 300,
          type: "radialBar"
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "60%"
            },
            dataLabels: {
              name: {
                show: ((_a = this.chartInput) === null || _a === void 0 ? void 0 : _a.finalName) === null ? false : true
              },
              value: {
                show: true
              }
            }
          }
        }
      };
    }
  }, {
    key: "initialState",
    value: function initialState() {
      var _a;

      var _this$chartData = this.chartData,
          first = _this$chartData.first,
          second = _this$chartData.second,
          finalName = _this$chartData.finalName;
      var _ref = [first.name, first.value, second.name, second.value],
          firstName = _ref[0],
          firstValue = _ref[1],
          secondName = _ref[2],
          secondValue = _ref[3];
      var percentageValue = Math.floor(firstValue / secondValue * 100) | 0;
      var formattedFirstValue = this.decimalPipe.transform(firstValue, "1.0-0");
      var formattedSecondValue = this.decimalPipe.transform(secondValue, "1.0-0");
      this.chartOptions = Object.assign(Object.assign({}, this.chartOptions), {
        series: [percentageValue],
        labels: [((_a = this.chartInput) === null || _a === void 0 ? void 0 : _a.finalName) === null ? "" : finalName],
        legend: {
          show: true,
          floating: false,
          fontSize: "16px",
          markers: {
            width: 0,
            height: 0
          },
          position: "bottom",
          horizontalAlign: "center",
          labels: {
            useSeriesColors: false
          },
          onItemClick: {
            toggleDataSeries: false
          },
          onItemHover: {
            highlightDataSeries: false
          },
          formatter: function formatter() {
            return "<ion-label>".concat(firstName, ": ").concat(formattedFirstValue, "</ion-label> <br> <ion-label>").concat(secondName, ": ").concat(formattedSecondValue, "</ion-label>");
          },
          itemMargin: {
            vertical: 0
          }
        }
      });
    }
  }, {
    key: "chartData",
    get: function get() {
      return this.chartInput;
    }
  }]);

  return PieChartDashboardComponent;
}();

PieChartDashboardComponent.ctorParameters = function () {
  return [{
    type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe
  }];
};

PieChartDashboardComponent.propDecorators = {
  chart: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: ["chart"]
  }],
  chartInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }]
};
PieChartDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: "app-pie-chart-dashboard",
  template: _pie_chart_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_2__,
  providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe],
  styles: [_pie_chart_dashboard_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_3__]
})], PieChartDashboardComponent);


/***/ }),

/***/ 30012:
/*!****************************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard-branches-grid/dashboard-branches-grid.component.css?ngResource ***!
  \****************************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtYnJhbmNoZXMtZ3JpZC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 61608:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/drill-down-hierarchy/dashboard-users-grid/dashboard-users-grid.component.css?ngResource ***!
  \*******************************************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtdXNlcnMtZ3JpZC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 56888:
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/drill-down-hierarchy/drill-down-hierarchy.component.css?ngResource ***!
  \**********************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmlsbC1kb3duLWhpZXJhcmNoeS5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 35735:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/drill-down-supervision/dashboard-officers-grid/dashboard-officers-grid.component.css?ngResource ***!
  \***************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQtb2ZmaWNlcnMtZ3JpZC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 50456:
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/drill-down-supervision/drill-down-supervision.component.css?ngResource ***!
  \**************************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcmlsbC1kb3duLXN1cGVydmlzaW9uLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 64519:
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.page.scss?ngResource ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 16174:
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/pie-chart-dashboard/pie-chart-dashboard.component.scss?ngResource ***!
  \*********************************************************************************************************/
/***/ (function(module) {

module.exports = "#chart {\n  padding: 0;\n  max-width: 650px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpZS1jaGFydC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEZWxldGUlMjBpdFxcTmV3TW9oYXNzaWxDbGllbnRfMzA5NV9zcmNcXE5ld01vaGFzc2lsQ2xpZW50XFxzcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxkYXNoYm9hcmRcXHBpZS1jaGFydC1kYXNoYm9hcmRcXHBpZS1jaGFydC1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJwaWUtY2hhcnQtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoYXJ0IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1heC13aWR0aDogNjUwcHg7XHJcbn1cclxuIiwiI2NoYXJ0IHtcbiAgcGFkZGluZzogMDtcbiAgbWF4LXdpZHRoOiA2NTBweDtcbn0iXX0= */";

/***/ }),

/***/ 83389:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard-branches-grid/dashboard-branches-grid.component.html?ngResource ***!
  \*****************************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n\n<ion-row class=\"header-row\">\n  <ion-col *ngIf=\"gridData?.header?.first\">\n    <ion-label>\n      {{ gridData.header.first }}\n    </ion-label>\n  </ion-col>\n  <ion-col *ngIf=\"gridData?.header?.second\">\n    <ion-label>\n      {{ gridData.header.second }}\n    </ion-label>\n  </ion-col>\n  <ion-col *ngIf=\"gridData?.header?.third\">\n    <ion-label>\n      {{ gridData.header.third }}\n    </ion-label>\n  </ion-col>\n  <ion-col *ngIf=\"gridData?.header?.fourth\">\n    <ion-label>\n      {{ gridData.header.fourth }}\n    </ion-label>\n  </ion-col>\n  <ion-col *ngIf=\"gridData?.header?.fifth\">\n    <ion-label>\n      {{ gridData.header.fifth }}\n    </ion-label>\n  </ion-col>\n</ion-row>\n<ion-row\n  class=\"details-row text-left\"\n  *ngFor=\"let branch of gridData.row\"\n  (click)=\"onBranchClick(branch.firstCol)\"\n  style=\"cursor: pointer\"\n>\n  <ion-col *ngIf=\"gridData?.header?.first\">\n    <ion-label>\n      {{ branch.firstCol }}\n    </ion-label>\n  </ion-col>\n  <ion-col *ngIf=\"gridData?.header?.second\">\n    <ion-label>\n      {{ branch.secondCol | number : \"1.0-0\" : \"en-US\" }}\n    </ion-label>\n  </ion-col>\n  <ion-col *ngIf=\"gridData?.header?.third\">\n    <ion-label>\n      {{ branch.thirdCol | number : \"1.0-0\" : \"en-US\" }}\n    </ion-label>\n  </ion-col>\n  <ion-col *ngIf=\"gridData?.header?.fourth\">\n    <ion-label>\n      {{ branch.fourthCol | number : \"1.0-0\" : \"en-US\" }}\n    </ion-label>\n  </ion-col>\n  <ion-col *ngIf=\"gridData?.header?.fifth\">\n    <ion-label>\n      {{ branch.fifthCol | number : \"1.0-0\" : \"en-US\" }}\n    </ion-label>\n  </ion-col>\n</ion-row>\n";

/***/ }),

/***/ 71521:
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.page.html?ngResource ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n\n<ion-card *ngIf=\"dashboardData !== null\">\n  <ion-card-content>\n    <ion-grid>\n      <ion-row class=\"text-center justify-content-center\" *ngIf=\"useWorkflow\">\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\">\n          <ion-label class=\"form-label\">طريقة العرض</ion-label>\n          <ion-select\n            interface=\"popover\"\n            [ngModel]=\"dashboardView$ | async\"\n            (ngModelChange)=\"updateDashboardView($event)\"\n            class=\"subselect\"\n          >\n            <ion-select-option\n              *ngFor=\"let item of dashboardTypeViewModel\"\n              [value]=\"item.ref_code\"\n            >\n              {{ item.ref_desc}}\n            </ion-select-option>\n          </ion-select>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\" @slideInOut>\n          <ion-card>\n            <ion-card-header class=\"text-center\">\n              <ion-label\n                class=\"ion-padding-top\"\n                style=\"font-size: medium; font-weight: bold\"\n                >نسبة تحقق العدد</ion-label\n              >\n            </ion-card-header>\n            <ion-card-content class=\"text-center\">\n              <div *ngIf=\"chartsDashboard?.targetNumber\">\n                <app-pie-chart-dashboard\n                  [chartInput]=\"chartsDashboard?.targetNumber\"\n                  (click)=\"dashboardSectionVisibility.productivity.targetNumber = 1\"\n                ></app-pie-chart-dashboard>\n              </div>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.productivity.targetNumber === 1\"\n                [section]=\"1\"\n                [subSection]=\"3\"\n                (closeComponent)=\"dashboardSectionVisibility.productivity.targetNumber = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.productivity.targetNumber === 1\"\n                [section]=\"1\"\n                [subSection]=\"3\"\n                (closeComponent)=\"dashboardSectionVisibility.productivity.targetNumber = null\"\n              ></app-drill-down-supervision>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\" @slideInOut>\n          <ion-card>\n            <ion-card-header class=\"text-center\">\n              <ion-label\n                class=\"ion-padding-top\"\n                style=\"font-size: medium; font-weight: bold\"\n                >نسبة تحقق القيمة</ion-label\n              >\n            </ion-card-header>\n            <ion-card-content class=\"text-center\">\n              <div *ngIf=\"chartsDashboard?.targetAmount\">\n                <app-pie-chart-dashboard\n                  [chartInput]=\"chartsDashboard?.targetAmount\"\n                  (click)=\"dashboardSectionVisibility.productivity.targetAmount = 1\"\n                ></app-pie-chart-dashboard>\n              </div>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.productivity.targetAmount === 1\"\n                [section]=\"1\"\n                [subSection]=\"4\"\n                (closeComponent)=\"dashboardSectionVisibility.productivity.targetAmount = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.productivity.targetAmount === 1\"\n                [section]=\"1\"\n                [subSection]=\"4\"\n                (closeComponent)=\"dashboardSectionVisibility.productivity.targetAmount = null\"\n              ></app-drill-down-supervision>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\" @slideInOut>\n          <ion-card>\n            <ion-card-header class=\"text-center\">\n              <ion-label\n                class=\"ion-padding-top\"\n                style=\"font-size: medium; font-weight: bold\"\n              >\n                مقارنة الانتاجية\n              </ion-label>\n            </ion-card-header>\n            <ion-card-content class=\"text-center\">\n              <ion-grid style=\"cursor: pointer\" [fixed]=\"true\">\n                <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n                  <ion-col>\n                    <ion-label style=\"visibility: hidden\">hidden</ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      الشهر الحالي\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      الشهر السابق\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.productivity.comparison = 1\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      عدد القروض\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.achieveNumber | number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousAchieveNumber |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.productivity.comparison = 2\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      قيمة القروض\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.achieveAmount | number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousAchieveAmount |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.productivity.comparison === 1\"\n                [section]=\"1\"\n                [subSection]=\"1\"\n                (closeComponent)=\"dashboardSectionVisibility.productivity.comparison = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.productivity.comparison === 2\"\n                [section]=\"1\"\n                [subSection]=\"2\"\n                (closeComponent)=\"dashboardSectionVisibility.productivity.comparison = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.productivity.comparison === 1\"\n                [section]=\"1\"\n                [subSection]=\"1\"\n                (closeComponent)=\"dashboardSectionVisibility.productivity.comparison = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.productivity.comparison === 2\"\n                [section]=\"1\"\n                [subSection]=\"2\"\n                (closeComponent)=\"dashboardSectionVisibility.productivity.comparison = null\"\n              ></app-drill-down-supervision>\n            </ion-card-content>\n          </ion-card>\n          <ion-card>\n            <ion-card-header class=\"text-center\">\n              <ion-label\n                class=\"ion-padding-top\"\n                style=\"font-size: medium; font-weight: bold\"\n                >متوسط الانتاجية</ion-label\n              >\n            </ion-card-header>\n            <ion-card-content class=\"text-center\">\n              <ion-grid [fixed]=\"true\">\n                <ion-row class=\"ion-align-items-center\">\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      عدد مسئولي الائتمان\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      عدد القروض\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      قيمة القروض\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"ion-align-items-center\">\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.numberOfficersInService |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.achieveNumber /\n                      dashboardData?.numberOfficersInService |\n                      number:'1.0-0':'en-US' }}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.achieveAmount /\n                      dashboardData?.numberOfficersInService |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\" @slideInOut>\n          <ion-card>\n            <ion-card-header class=\"text-center\">\n              <ion-label\n                class=\"ion-padding-top\"\n                style=\"font-size: medium; font-weight: bold\"\n              >\n                مقارنة المحفظة\n              </ion-label>\n            </ion-card-header>\n            <ion-card-content class=\"text-center\">\n              <ion-grid\n                style=\"cursor: pointer\"\n                [fixed]=\"true\"\n                (click)=\"dashboardSectionVisibility.portfolio.comparison = 1\"\n              >\n                <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n                  <ion-col>\n                    <ion-label style=\"visibility: hidden\">hidden</ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      الشهر الحالي\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      الشهر السابق\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      عدد القروض\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.totalActiveLoanNumber |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.totalActiveLoanNumberPreviousMonth |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      قيمة القروض\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.totalActiveLoanUnpaidAmount |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.totalActiveLoanUnpaidAmountPreviousMonth\n                      | number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.portfolio.comparison === 1\"\n                [section]=\"2\"\n                [subSection]=\"1\"\n                (closeComponent)=\"dashboardSectionVisibility.portfolio.comparison = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.portfolio.comparison === 1\"\n                [section]=\"2\"\n                [subSection]=\"1\"\n                (closeComponent)=\"dashboardSectionVisibility.portfolio.comparison = null\"\n              ></app-drill-down-supervision>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\" @slideInOut>\n          <ion-card>\n            <ion-card-header class=\"text-center\">\n              <ion-label\n                class=\"ion-padding-top\"\n                style=\"font-size: medium; font-weight: bold\"\n              >\n                المتأخرات الشهر الحالي\n              </ion-label>\n            </ion-card-header>\n            <ion-card-content class=\"text-center\">\n              <ion-grid style=\"cursor: pointer\" [fixed]=\"true\">\n                <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n                  <ion-col>\n                    <ion-label style=\"visibility: hidden\">hidden</ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      عدد الاقساط\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      قيمة الاقساط\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid= 1\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      1 - 7 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearNumber7 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearAmount7 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid= 2\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      8 - 30 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearNumber30 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearAmount30 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid= 3\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      31 - 60 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearNumber60 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearAmount60 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid= 4\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      61 - 90 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearNumber90 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearAmount90 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid= 5\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      91 - 120 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearNumber120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearAmount120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid= 6\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      أكثر من 120 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearNumberX120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearAmountX120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthOverdue.notPaid === 1\"\n                [section]=\"3\"\n                [subSection]=\"1\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthOverdue.notPaid === 2\"\n                [section]=\"3\"\n                [subSection]=\"2\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthOverdue.notPaid === 3\"\n                [section]=\"3\"\n                [subSection]=\"3\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthOverdue.notPaid === 4\"\n                [section]=\"3\"\n                [subSection]=\"4\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthOverdue.notPaid === 5\"\n                [section]=\"3\"\n                [subSection]=\"5\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthOverdue.notPaid === 6\"\n                [section]=\"3\"\n                [subSection]=\"6\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthOverdue.notPaid === 1\"\n                [section]=\"3\"\n                [subSection]=\"1\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthOverdue.notPaid === 2\"\n                [section]=\"3\"\n                [subSection]=\"2\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthOverdue.notPaid === 3\"\n                [section]=\"3\"\n                [subSection]=\"3\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthOverdue.notPaid === 4\"\n                [section]=\"3\"\n                [subSection]=\"4\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthOverdue.notPaid === 5\"\n                [section]=\"3\"\n                [subSection]=\"5\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthOverdue.notPaid === 6\"\n                [section]=\"3\"\n                [subSection]=\"6\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.notPaid = null\"\n              ></app-drill-down-supervision>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\" @slideInOut>\n          <ion-card>\n            <ion-card-header class=\"text-center\">\n              <ion-label\n                class=\"ion-padding-top\"\n                style=\"font-size: medium; font-weight: bold\"\n              >\n                المتأخرات الشهر السابق\n              </ion-label>\n            </ion-card-header>\n            <ion-card-content class=\"text-center\">\n              <ion-grid style=\"cursor: pointer\" [fixed]=\"true\">\n                <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n                  <ion-col>\n                    <ion-label style=\"visibility: hidden\">hidden</ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      عدد الاقساط\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      قيمة الاقساط\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid= 1\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      1 - 7 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearNumber0 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearAmount7 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid= 2\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      8 - 30 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearNumber30 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearAmount30 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid= 3\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      31 - 60 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearNumber60 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearAmount60 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid= 4\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      61 - 90 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearNumber90 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearAmount90 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid= 5\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      91 - 120 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearNumber120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearAmount120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid= 6\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      أكثر من 120 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearNumberX120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearAmountX120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthOverdue.notPaid === 1\"\n                [section]=\"4\"\n                [subSection]=\"1\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthOverdue.notPaid === 2\"\n                [section]=\"4\"\n                [subSection]=\"2\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthOverdue.notPaid === 3\"\n                [section]=\"4\"\n                [subSection]=\"3\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthOverdue.notPaid === 4\"\n                [section]=\"4\"\n                [subSection]=\"4\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthOverdue.notPaid === 5\"\n                [section]=\"4\"\n                [subSection]=\"5\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthOverdue.notPaid === 6\"\n                [section]=\"4\"\n                [subSection]=\"6\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthOverdue.notPaid === 1\"\n                [section]=\"4\"\n                [subSection]=\"1\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthOverdue.notPaid === 2\"\n                [section]=\"4\"\n                [subSection]=\"2\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthOverdue.notPaid === 3\"\n                [section]=\"4\"\n                [subSection]=\"3\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthOverdue.notPaid === 4\"\n                [section]=\"4\"\n                [subSection]=\"4\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthOverdue.notPaid === 5\"\n                [section]=\"4\"\n                [subSection]=\"5\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthOverdue.notPaid === 6\"\n                [section]=\"4\"\n                [subSection]=\"6\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.notPaid = null\"\n              ></app-drill-down-supervision>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\" @slideInOut>\n          <ion-card>\n            <ion-card-header class=\"text-center\">\n              <ion-label\n                class=\"ion-padding-top\"\n                style=\"font-size: medium; font-weight: bold\"\n              >\n                سداد المتأخرات الشهر الحالي\n              </ion-label>\n            </ion-card-header>\n            <ion-card-content class=\"text-center\">\n              <ion-grid style=\"cursor: pointer\" [fixed]=\"true\">\n                <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n                  <ion-col>\n                    <ion-label style=\"visibility: hidden\">hidden</ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      عدد الاقساط\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      قيمة الاقساط\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthOverdue.paid= 1\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      1 - 7 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearPaidNumber7 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearPaidAmount7 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthOverdue.paid= 2\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      8 - 30 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearPaidNumber30 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearPaidAmount30 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthOverdue.paid= 3\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      31 - 60 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearPaidNumber60 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearPaidAmount60 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthOverdue.paid= 4\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      61 - 90 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearPaidNumber90 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearPaidAmount90 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthOverdue.paid= 5\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      91 - 120 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearPaidNumber120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearPaidAmount120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthOverdue.paid= 6\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      أكثر من 120 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearPaidNumberX120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.currentArrearPaidAmountX120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthOverdue.paid === 1\"\n                [section]=\"3\"\n                [subSection]=\"7\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.paid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthOverdue.paid === 2\"\n                [section]=\"3\"\n                [subSection]=\"8\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.paid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthOverdue.paid === 3\"\n                [section]=\"3\"\n                [subSection]=\"9\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.paid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthOverdue.paid === 4\"\n                [section]=\"3\"\n                [subSection]=\"10\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.paid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthOverdue.paid === 5\"\n                [section]=\"3\"\n                [subSection]=\"11\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.paid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthOverdue.paid === 6\"\n                [section]=\"3\"\n                [subSection]=\"12\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.paid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthOverdue.paid === 1\"\n                [section]=\"3\"\n                [subSection]=\"7\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.paid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthOverdue.paid === 2\"\n                [section]=\"3\"\n                [subSection]=\"8\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.paid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthOverdue.paid === 3\"\n                [section]=\"3\"\n                [subSection]=\"9\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.paid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthOverdue.paid === 4\"\n                [section]=\"3\"\n                [subSection]=\"10\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.paid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthOverdue.paid === 5\"\n                [section]=\"3\"\n                [subSection]=\"11\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.paid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthOverdue.paid === 6\"\n                [section]=\"3\"\n                [subSection]=\"12\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthOverdue.paid = null\"\n              ></app-drill-down-supervision>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\" @slideInOut>\n          <ion-card>\n            <ion-card-header class=\"text-center\">\n              <ion-label\n                class=\"ion-padding-top\"\n                style=\"font-size: medium; font-weight: bold\"\n              >\n                سداد المتأخرات الشهر السابق\n              </ion-label>\n            </ion-card-header>\n            <ion-card-content class=\"text-center\">\n              <ion-grid style=\"cursor: pointer\" [fixed]=\"true\">\n                <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n                  <ion-col>\n                    <ion-label style=\"visibility: hidden\">hidden</ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      عدد الاقساط\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      قيمة الاقساط\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthOverdue.paid= 1\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      1 - 7 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearPaidNumber0 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearPaidAmount7 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthOverdue.paid= 2\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      8 - 30 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearPaidNumber30 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearPaidAmount30 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthOverdue.paid= 3\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      31 - 60 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearPaidNumber60 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearPaidAmount60 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthOverdue.paid= 4\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      61 - 90 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearPaidNumber90 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearPaidAmount90 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthOverdue.paid=5\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      91 - 120 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearPaidNumber120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearPaidAmount120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthOverdue.paid= 6\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      أكثر من 120 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearPaidNumberX120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.previousArrearPaidAmountX120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthOverdue.paid === 1\"\n                [section]=\"4\"\n                [subSection]=\"7\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.paid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthOverdue.paid === 2\"\n                [section]=\"4\"\n                [subSection]=\"8\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.paid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthOverdue.paid === 3\"\n                [section]=\"4\"\n                [subSection]=\"9\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.paid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthOverdue.paid === 4\"\n                [section]=\"4\"\n                [subSection]=\"10\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.paid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthOverdue.paid === 5\"\n                [section]=\"4\"\n                [subSection]=\"11\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.paid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthOverdue.paid === 6\"\n                [section]=\"4\"\n                [subSection]=\"12\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.paid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthOverdue.paid === 1\"\n                [section]=\"4\"\n                [subSection]=\"7\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.paid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthOverdue.paid === 2\"\n                [section]=\"4\"\n                [subSection]=\"8\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.paid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthOverdue.paid === 3\"\n                [section]=\"4\"\n                [subSection]=\"9\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.paid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthOverdue.paid === 4\"\n                [section]=\"4\"\n                [subSection]=\"10\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.paid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthOverdue.paid === 5\"\n                [section]=\"4\"\n                [subSection]=\"11\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.paid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthOverdue.paid === 6\"\n                [section]=\"4\"\n                [subSection]=\"12\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthOverdue.paid = null\"\n              ></app-drill-down-supervision>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\" @slideInOut>\n          <ion-card>\n            <ion-card-header class=\"text-center\">\n              <ion-label\n                class=\"ion-padding-top\"\n                style=\"font-size: medium; font-weight: bold\"\n              >\n                ارصدة في خطر الشهر الحالي\n              </ion-label>\n            </ion-card-header>\n            <ion-card-content class=\"text-center\">\n              <ion-grid style=\"cursor: pointer\" [fixed]=\"true\">\n                <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n                  <ion-col>\n                    <ion-label style=\"visibility: hidden\">hidden</ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      عدد القروض\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      قيمة القرض المتبقي\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid= 1\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      1 - 7 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskNumberCurrentMonth1To7 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskAmountCurrentMonth1To7 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid= 2\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      8 - 30 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskNumberCurrentMonth8To30 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskAmountCurrentMonth8To30 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid= 3\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      31 - 60 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskNumberCurrentMonth31To60 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskAmountCurrentMonth31To60 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid= 4\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      61 - 90 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskNumberCurrentMonth61To90 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskAmountCurrentMonth61To90 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid= 5\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      91 - 120 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskNumberCurrentMonth91To120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskAmountCurrentMonth91To120 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid === 1\"\n                [section]=\"5\"\n                [subSection]=\"1\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid === 2\"\n                [section]=\"5\"\n                [subSection]=\"2\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid === 3\"\n                [section]=\"5\"\n                [subSection]=\"3\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid === 4\"\n                [section]=\"5\"\n                [subSection]=\"4\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid === 5\"\n                [section]=\"5\"\n                [subSection]=\"5\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid === 1\"\n                [section]=\"5\"\n                [subSection]=\"1\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid === 2\"\n                [section]=\"5\"\n                [subSection]=\"2\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid === 3\"\n                [section]=\"5\"\n                [subSection]=\"3\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid === 4\"\n                [section]=\"5\"\n                [subSection]=\"4\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid === 5\"\n                [section]=\"5\"\n                [subSection]=\"5\"\n                (closeComponent)=\"dashboardSectionVisibility.currentMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-supervision>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\" @slideInOut>\n          <ion-card>\n            <ion-card-header class=\"text-center\">\n              <ion-label\n                class=\"ion-padding-top\"\n                style=\"font-size: medium; font-weight: bold\"\n              >\n                ارصدة في خطر الشهر السابق\n              </ion-label>\n            </ion-card-header>\n            <ion-card-content class=\"text-center\">\n              <ion-grid style=\"cursor: pointer\" [fixed]=\"true\">\n                <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n                  <ion-col>\n                    <ion-label style=\"visibility: hidden\">hidden</ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      عدد القروض\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      قيمة القرض المتبقي\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid= 1\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      1 - 7 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskNumberPreviousMonth1To7 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskAmountPreviousMonth1To7 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid= 2\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      8 - 30 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskNumberPreviousMonth8To30 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskAmountPreviousMonth8To30 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid= 3\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      31 - 60 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskNumberPreviousMonth31To60 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskAmountPreviousMonth31To60 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid= 4\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      61 - 90 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskNumberPreviousMonth61To90 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskAmountPreviousMonth61To90 |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row\n                  class=\"ion-align-items-center ion-padding-bottom\"\n                  (click)=\"dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid= 5\"\n                >\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      91 - 120 يوم\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskNumberPreviousMonth91To120\n                      | number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.balancesAtRiskAmountPreviousMonth91To120\n                      | number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid === 1\"\n                [section]=\"6\"\n                [subSection]=\"1\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid === 2\"\n                [section]=\"6\"\n                [subSection]=\"2\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid === 3\"\n                [section]=\"6\"\n                [subSection]=\"3\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid === 4\"\n                [section]=\"6\"\n                [subSection]=\"4\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid === 5\"\n                [section]=\"6\"\n                [subSection]=\"5\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid === 1\"\n                [section]=\"6\"\n                [subSection]=\"1\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid === 2\"\n                [section]=\"6\"\n                [subSection]=\"2\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid === 3\"\n                [section]=\"6\"\n                [subSection]=\"3\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid === 4\"\n                [section]=\"6\"\n                [subSection]=\"4\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-supervision>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid === 5\"\n                [section]=\"6\"\n                [subSection]=\"5\"\n                (closeComponent)=\"dashboardSectionVisibility.previousMonthAtRiskBalances.notPaid = null\"\n              ></app-drill-down-supervision>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\" @slideInOut>\n          <ion-card>\n            <ion-card-header class=\"text-center\">\n              <ion-label\n                class=\"ion-padding-top\"\n                style=\"font-size: medium; font-weight: bold\"\n              >\n                السداد حتي تاريخه\n              </ion-label>\n            </ion-card-header>\n            <ion-card-content class=\"text-center\">\n              <ion-grid\n                style=\"cursor: pointer\"\n                [fixed]=\"true\"\n                (click)=\"dashboardSectionVisibility.payment.tillToday= 1\"\n              >\n                <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n                  <ion-col>\n                    <ion-label style=\"visibility: hidden\">hidden</ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      تم تحصيله\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      المطلوب\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      العدد\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.totalPaidInstallmentsTillToday |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.totalInstallmentsDueTillToday |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      القيمة\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.totalPaidAmountTillToday |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.totalAmountDueTillToday |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.payment.tillToday === 1\"\n                [section]=\"7\"\n                [subSection]=\"1\"\n                (closeComponent)=\"dashboardSectionVisibility.payment.tillToday = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.payment.tillToday === 1\"\n                [section]=\"7\"\n                [subSection]=\"1\"\n                (closeComponent)=\"dashboardSectionVisibility.payment.tillToday = null\"\n              ></app-drill-down-supervision>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"12\" size-lg=\"4\" size-md=\"6\" size-sm=\"12\" @slideInOut>\n          <ion-card>\n            <ion-card-header class=\"text-center\">\n              <ion-label\n                class=\"ion-padding-top\"\n                style=\"font-size: medium; font-weight: bold\"\n              >\n                السداد حتي نهاية الشهر\n              </ion-label>\n            </ion-card-header>\n            <ion-card-content class=\"text-center\">\n              <ion-grid\n                style=\"cursor: pointer\"\n                [fixed]=\"true\"\n                (click)=\"dashboardSectionVisibility.payment.untilThisMonth= 1\"\n              >\n                <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n                  <ion-col>\n                    <ion-label style=\"visibility: hidden\">hidden</ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      تم تحصيله\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      المطلوب\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      العدد\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.totalPaidInstallmentsThisMonth |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.totalInstallmentsDueThisMonth |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"ion-align-items-center ion-padding-bottom\">\n                  <ion-col>\n                    <ion-label style=\"font-size: 14px; font-weight: bold\">\n                      القيمة\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.totalPaidAmountThisMonth |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                  <ion-col>\n                    <ion-label>\n                      {{dashboardData?.totalAmountDueThisMonth |\n                      number:'1.0-0':'en-US'}}\n                    </ion-label>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n              <app-drill-down-hierarchy\n                *ngIf=\"dashboardTypeView === 1 && dashboardSectionVisibility.payment.untilThisMonth === 1\"\n                [section]=\"7\"\n                [subSection]=\"2\"\n                (closeComponent)=\"dashboardSectionVisibility.payment.untilThisMonth = null\"\n              ></app-drill-down-hierarchy>\n              <app-drill-down-supervision\n                *ngIf=\"dashboardTypeView === 2 && dashboardSectionVisibility.payment.untilThisMonth === 1\"\n                [section]=\"7\"\n                [subSection]=\"2\"\n                (closeComponent)=\"dashboardSectionVisibility.payment.untilThisMonth = null\"\n              ></app-drill-down-supervision>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 34398:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/drill-down-hierarchy/dashboard-users-grid/dashboard-users-grid.component.html?ngResource ***!
  \********************************************************************************************************************************/
/***/ (function(module) {

module.exports = "<ion-grid *ngIf=\"dashboardUserGrid\">\n  <ion-row class=\"header-row\">\n    <ion-col *ngIf=\"dashboardUserGrid?.header?.first\">\n      <ion-label>\n        {{ dashboardUserGrid?.header?.first }}\n      </ion-label>\n    </ion-col>\n    <ion-col *ngIf=\"dashboardUserGrid?.header?.second\">\n      <ion-label>\n        {{ dashboardUserGrid?.header?.second }}\n      </ion-label>\n    </ion-col>\n    <ion-col *ngIf=\"dashboardUserGrid?.header?.third\">\n      <ion-label>\n        {{ dashboardUserGrid?.header?.third }}\n      </ion-label>\n    </ion-col>\n    <ion-col *ngIf=\"dashboardUserGrid?.header?.fourth\">\n      <ion-label>\n        {{ dashboardUserGrid?.header?.fourth }}\n      </ion-label>\n    </ion-col>\n    <ion-col *ngIf=\"dashboardUserGrid?.header?.fifth\">\n      <ion-label>\n        {{ dashboardUserGrid?.header?.fifth }}\n      </ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row\n    class=\"details-row text-left\"\n    *ngFor=\"let val of dashboardUserGrid.row\"\n    style=\"cursor: pointer\"\n    (click)=\"clickOnSpecificUser(val.firstCol)\"\n  >\n    <ion-col *ngIf=\"dashboardUserGrid?.header?.first\">\n      <ion-label>\n        {{ val.firstCol }}\n      </ion-label>\n    </ion-col>\n    <ion-col *ngIf=\"dashboardUserGrid?.header?.second\">\n      <ion-label>\n        {{ val.secondCol | number : \"1.0-0\" : \"en-US\" }}\n      </ion-label>\n    </ion-col>\n    <ion-col *ngIf=\"dashboardUserGrid?.header?.third\">\n      <ion-label>\n        {{ val.thirdCol | number : \"1.0-0\" : \"en-US\" }}\n      </ion-label>\n    </ion-col>\n    <ion-col *ngIf=\"dashboardUserGrid?.header?.fourth\">\n      <ion-label>\n        {{ val.fourthCol | number : \"1.0-0\" : \"en-US\" }}\n      </ion-label>\n    </ion-col>\n    <ion-col *ngIf=\"dashboardUserGrid?.header?.fifth\">\n      <ion-label>\n        {{ val.fifthCol | number : \"1.0-0\" : \"en-US\" }}\n      </ion-label>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n";

/***/ }),

/***/ 94360:
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/drill-down-hierarchy/drill-down-hierarchy.component.html?ngResource ***!
  \***********************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n\n<ion-note class=\"ion-padding\" *ngIf=\"dashboardLevel !== 0\">\n  <ion-grid>\n    <!-- User name -->\n    <ion-row class=\"header-row text-center\">\n      <ion-col>\n        <ion-label> اسم المستخدم: {{ getActiveSuperVisor() }} </ion-label>\n      </ion-col>\n    </ion-row>\n\n    <!-- First Level For branches -->\n    <div *ngIf=\"dashboardLevel === 1\">\n      <app-dashboard-branches-grid\n        [section]=\"section\"\n        [subSection]=\"subSection\"\n        (selectedBranchOutput)=\"clickOnSpecificBranch($event)\"\n      ></app-dashboard-branches-grid>\n    </div>\n\n    <!-- Users Sections -->\n    <div *ngIf=\"dashboardLevel === 2 && getActiveSuperVisor\">\n      <ion-row class=\"header-row\">\n        <ion-col>\n          <ion-label> فرع : {{ selectedBranch.name }} </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"dashboardUserGrid.row.length === 0\" class=\"text-center\">\n        <ion-col>\n          <ion-label> لا يوجد معلومات </ion-label>\n        </ion-col>\n      </ion-row>\n      <app-dashboard-users-grid\n        *ngIf=\"dashboardUserGrid.row.length !== 0\"\n        [dashboardUserGrid]=\"dashboardUserGrid\"\n        (usernameOutput)=\"clickOnSpecificUser($event)\"\n      ></app-dashboard-users-grid>\n    </div>\n  </ion-grid>\n  <ion-row class=\"justify-content-center ion-padding\">\n    <ion-button color=\"danger\" (click)=\"backButton()\"> رجوع </ion-button>\n  </ion-row>\n</ion-note>\n";

/***/ }),

/***/ 93768:
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/drill-down-supervision/dashboard-officers-grid/dashboard-officers-grid.component.html?ngResource ***!
  \****************************************************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<ion-grid>\n  <ion-row class=\"header-row\">\n    <ion-col *ngIf=\"dashboardUserGrid.header?.first\">\n      <ion-label>\n        {{ dashboardUserGrid.header?.first }}\n      </ion-label>\n    </ion-col>\n    <ion-col *ngIf=\"dashboardUserGrid.header?.second\">\n      <ion-label>\n        {{ dashboardUserGrid.header?.second }}\n      </ion-label>\n    </ion-col>\n    <ion-col *ngIf=\"dashboardUserGrid.header?.third\">\n      <ion-label>\n        {{ dashboardUserGrid.header?.third }}\n      </ion-label>\n    </ion-col>\n    <ion-col *ngIf=\"dashboardUserGrid.header?.fourth\">\n      <ion-label>\n        {{ dashboardUserGrid.header?.fourth }}\n      </ion-label>\n    </ion-col>\n    <ion-col *ngIf=\"dashboardUserGrid.header?.fifth\">\n      <ion-label>\n        {{ dashboardUserGrid.header?.fifth }}\n      </ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row\n    class=\"details-row text-left\"\n    style=\"cursor: pointer\"\n    *ngFor=\"\n      let row of this.pagingService.Paging(\n        this.dashboardUserGrid.row,\n        paginationPage\n      )\n    \"\n  >\n    <ion-col *ngIf=\"dashboardUserGrid.header?.first\">\n      <ion-label>\n        {{ row.firstCol }}\n      </ion-label>\n    </ion-col>\n    <ion-col *ngIf=\"dashboardUserGrid.header?.second\">\n      <ion-label>\n        {{ row.secondCol | number : \"1.0-0\" : \"en-US\" }}\n      </ion-label>\n    </ion-col>\n    <ion-col *ngIf=\"dashboardUserGrid.header?.third\">\n      <ion-label>\n        {{ row.thirdCol | number : \"1.0-0\" : \"en-US\" }}\n      </ion-label>\n    </ion-col>\n    <ion-col *ngIf=\"dashboardUserGrid.header?.fourth\">\n      <ion-label>\n        {{ row.fourthCol | number : \"1.0-0\" : \"en-US\" }}\n      </ion-label>\n    </ion-col>\n    <ion-col *ngIf=\"dashboardUserGrid.header?.fifth\">\n      <ion-label>\n        {{ row.fifthCol | number : \"1.0-0\" : \"en-US\" }}\n      </ion-label>\n    </ion-col>\n  </ion-row>\n  <app-pagination\n    [page]=\"paginationPage\"\n    [collectionSize]=\"dashboardUserGrid.row.length\"\n    (pageChange)=\"changePaginationPage($event)\"\n  ></app-pagination>\n</ion-grid>\n";

/***/ }),

/***/ 28761:
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/drill-down-supervision/drill-down-supervision.component.html?ngResource ***!
  \***************************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n\n<ion-note class=\"ion-padding\" *ngIf=\"dashboardLevel !== 0\">\n  <!-- First Level For branches -->\n  <div *ngIf=\"dashboardLevel === 1\">\n    <app-dashboard-branches-grid\n      [section]=\"section\"\n      [subSection]=\"subSection\"\n      (selectedBranchOutput)=\"clickOnSpecificBranch($event)\"\n    ></app-dashboard-branches-grid>\n  </div>\n\n  <!-- Users Sections -->\n  <div *ngIf=\"dashboardLevel === 2\">\n    <app-dashboard-officers-grid\n      [section]=\"section\"\n      [subSection]=\"subSection\"\n      [selectedBranchCode]=\"dashboardBranchesOutput.branchCode\"\n    ></app-dashboard-officers-grid>\n  </div>\n  <ion-row class=\"justify-content-center ion-padding\">\n    <ion-button color=\"danger\" (click)=\"backButton()\"> رجوع </ion-button>\n  </ion-row>\n</ion-note>\n";

/***/ }),

/***/ 46767:
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/dashboard/pie-chart-dashboard/pie-chart-dashboard.component.html?ngResource ***!
  \*********************************************************************************************************/
/***/ (function(module) {

module.exports = "<div id=\"chart\">\n  <apx-chart\n    id=\"productivityChart\"\n    style=\"cursor: pointer\"\n    [series]=\"chartOptions.series\"\n    [chart]=\"chartOptions.chart\"\n    [plotOptions]=\"chartOptions.plotOptions\"\n    [labels]=\"chartOptions.labels\"\n    [legend]=\"chartOptions.legend\"\n    [colors]=\"chartOptions.colors\"\n  ></apx-chart>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_dashboard_dashboard_module_ts.js.map