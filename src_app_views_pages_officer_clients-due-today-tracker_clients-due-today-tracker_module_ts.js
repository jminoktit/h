"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_officer_clients-due-today-tracker_clients-due-today-tracker_module_ts"],{

/***/ 66297:
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/officer/clients-due-today-tracker/clients-due-today-tracker-routing.module.ts ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsDueTodayTrackerPageRoutingModule": function() { return /* binding */ ClientsDueTodayTrackerPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _clients_due_today_tracker_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients-due-today-tracker.page */ 20404);






var routes = [{
  path: '',
  component: _clients_due_today_tracker_page__WEBPACK_IMPORTED_MODULE_2__.ClientsDueTodayTrackerPage
}];

var ClientsDueTodayTrackerPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ClientsDueTodayTrackerPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientsDueTodayTrackerPageRoutingModule);
});

ClientsDueTodayTrackerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ClientsDueTodayTrackerPageRoutingModule);


/***/ }),

/***/ 45564:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/officer/clients-due-today-tracker/clients-due-today-tracker.module.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsDueTodayTrackerPageModule": function() { return /* binding */ ClientsDueTodayTrackerPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _clients_due_today_tracker_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clients-due-today-tracker-routing.module */ 66297);
/* harmony import */ var _clients_due_today_tracker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients-due-today-tracker.page */ 20404);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-archwizard */ 38531);












var ClientsDueTodayTrackerPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ClientsDueTodayTrackerPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientsDueTodayTrackerPageModule);
});

ClientsDueTodayTrackerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _clients_due_today_tracker_routing_module__WEBPACK_IMPORTED_MODULE_2__.ClientsDueTodayTrackerPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, angular_archwizard__WEBPACK_IMPORTED_MODULE_10__.ArchwizardModule],
  declarations: [_clients_due_today_tracker_page__WEBPACK_IMPORTED_MODULE_3__.ClientsDueTodayTrackerPage]
})], ClientsDueTodayTrackerPageModule);


/***/ }),

/***/ 20404:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/officer/clients-due-today-tracker/clients-due-today-tracker.page.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsDueTodayTrackerPage": function() { return /* binding */ ClientsDueTodayTrackerPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _clients_due_today_tracker_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clients-due-today-tracker.page.html?ngResource */ 18181);
/* harmony import */ var _clients_due_today_tracker_page_css_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clients-due-today-tracker.page.css?ngResource */ 81944);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/location.service */ 33094);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
















var ClientsDueTodayTrackerPage = /*#__PURE__*/function () {
  function ClientsDueTodayTrackerPage(env, http, formBuilder, alertController, locationService, alertSerivce, AuthService, pagingService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClientsDueTodayTrackerPage);

    this.env = env;
    this.http = http;
    this.formBuilder = formBuilder;
    this.alertController = alertController;
    this.locationService = locationService;
    this.alertSerivce = alertSerivce;
    this.AuthService = AuthService;
    this.pagingService = pagingService;
    this.clients = [];
    this.showLoader = false;
    this.startDate = null;
    this.endDate = null;
    this.page = 1; // the page we are viewing

    this.totalPages = 1; // calculate by the pageSize and resultcount this.totalPages = (Math.trunc(x) < (this.resultsCount/this.pageSize)) ? Math.trunc(x)+1:Math.trunc(x) ;

    this.sortingParam = "distance";
    this.orderBy = false;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ClientsDueTodayTrackerPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.pageSize = this.pagingService.getPageSizeFromLocalStorage();
                _context.next = 3;
                return this.formatForm();

              case 3:
                _context.next = 5;
                return this.getOfficerLocation();

              case 5:
                _context.next = 7;
                return this.userInfo();

              case 7:
                _context.next = 9;
                return this.GetClientsDueToday();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "userInfo",
    value: function userInfo() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.AuthService.getUserInfo();

              case 2:
                this.officer_key = _context2.sent.officer_key;
                _context2.next = 5;
                return this.AuthService.getUserInfo();

              case 5:
                this.cur_branch_code = _context2.sent.branch_code;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "formatForm",
    value: function formatForm() {
      this.ClientsDueTodayForm = this.formBuilder.group({
        startDate: [null],
        endDate: [null]
      });
    }
  }, {
    key: "GetClientsDueToday",
    value: function GetClientsDueToday() {
      var _this = this;

      this.showLoader = true;
      var ClientDueToday = {
        end_date: this.ClientsDueTodayForm.controls.endDate.value,
        start_date: this.ClientsDueTodayForm.controls.startDate.value,
        cur_inst_status: "1,2,6",
        cur_inst_cond: "0",
        cur_currency_code: "0",
        cur_client_type: "0",
        cur_officer_key: this.officer_key,
        cur_branch_code: this.cur_branch_code,
        ls_loan_type: "0",
        all_loan_types: "1",
        ls_funder: "0",
        all_funder: "1",
        OfficerLat: this.OfficerLat,
        OfficerLong: this.OfficerLong
      };
      this.http.post(this.env.API_URL + "api/Clients/ClientsDueToday?&pageNo=".concat(this.page, "&pageSize=").concat(this.pageSize, "&sortingParam=").concat(this.sortingParam, "&orderBy=").concat(this.orderBy), ClientDueToday).subscribe({
        next: function next(data) {
          // this.reset();
          _this.clients = data["result"]; // console.log(this.clients);

          _this.resultsCount = data["count"]; // this.sortDistance();
          // this.success("تم اضافة طلب القرض بنجاح");

          _this.showLoader = false;
        },
        error: function error(err) {
          console.log(err.error); // this.fail(err.error);

          _this.showLoader = false;
        }
      });
    }
  }, {
    key: "getOfficerLocation",
    value: function getOfficerLocation() {
      var _a, _b;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var locationResult;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                // if (Capacitor.getPlatform() != "web") {
                this.showLoader = true;
                _context3.prev = 1;
                _context3.next = 4;
                return this.locationService.getLocation();

              case 4:
                locationResult = _context3.sent;

                if (locationResult.success) {
                  _context3.next = 9;
                  break;
                }

                this.alertSerivce.showAlertError(locationResult.message, false);
                this.showLoader = false;
                return _context3.abrupt("return");

              case 9:
                this.OfficerLat = (_a = locationResult.position) === null || _a === void 0 ? void 0 : _a.coords.latitude.toString();
                this.OfficerLong = (_b = locationResult.position) === null || _b === void 0 ? void 0 : _b.coords.longitude.toString();
                this.OfficerZoom = "0"; // console.log(this.OfficerLat, this.OfficerLong,"off");
                // this.presentToast("تم", locationResult.message);

                this.showLoader = false;
                _context3.next = 18;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](1);
                this.showLoader = false;

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 15]]);
      }));
    }
  }, {
    key: "sortByDistance",
    value: function sortByDistance() {
      this.sortingParam = "distance";
      this.orderBy = !this.orderBy;
      this.GetClientsDueToday();
    }
  }, {
    key: "sortByAmount",
    value: function sortByAmount() {
      this.sortingParam = "Total";
      this.orderBy = !this.orderBy;
      this.GetClientsDueToday();
    }
  }, {
    key: "changePage",
    value: function changePage(newPage) {
      this.page = newPage;
    }
  }, {
    key: "showHomeLocation",
    value: function showHomeLocation(home_Lat, home_Long) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var coordinates, result;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                coordinates = "".concat(home_Lat, ",").concat(home_Long);
                _context4.next = 3;
                return this.locationService.showLocation(coordinates);

              case 3:
                result = _context4.sent;

                if (!result.success) {
                  this.alertSerivce.showAlertError(result.message, false);
                }

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }]);

  return ClientsDueTodayTrackerPage;
}();

ClientsDueTodayTrackerPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController
  }, {
    type: src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_7__.LocationService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_8__.MohassilAuthService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_9__.pagingService
  }];
};

ClientsDueTodayTrackerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: "app-clients-due-today-tracker",
  template: _clients_due_today_tracker_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_clients_due_today_tracker_page_css_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], ClientsDueTodayTrackerPage);


/***/ }),

/***/ 81944:
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/officer/clients-due-today-tracker/clients-due-today-tracker.page.css?ngResource ***!
  \*************************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRzLWR1ZS10b2RheS10cmFja2VyLnBhZ2UuY3NzIn0= */";

/***/ }),

/***/ 18181:
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/pages/officer/clients-due-today-tracker/clients-due-today-tracker.page.html?ngResource ***!
  \**************************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div\n  class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\"\n>\n  <div>\n    <h4 class=\"mr-1 mb-md-0\">العملاء المستحقين خلال فترة</h4>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"ClientsDueTodayForm\">\n          <div class=\"row\">\n            <div class=\"col-md-6 col-12\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"> من تاريخ </ion-label>\n                <!-- <datepicker min=\"1700/01/01\" max=\"2050/01/01\" [(date)]=\"startDate\" pickerId=\"startDate\"\n                  [parentForm]=\"ClientsDueTodayForm\" parentFormControllerName=\"startDate\"></datepicker> -->\n                <ion-input\n                  type=\"date\"\n                  id=\"startDate\"\n                  formControlName=\"startDate\"\n                >\n                </ion-input>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-6\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label\"> الى تاريخ </ion-label>\n                <ion-input type=\"date\" id=\"endDate\" formControlName=\"endDate\">\n                </ion-input>\n              </div>\n            </div>\n          </div>\n          <div class=\"d-flex justify-content-center mt-2 text-center\">\n            <ion-button (click)=\"GetClientsDueToday()\" type=\"submit\">\n              البحث\n            </ion-button>\n          </div>\n        </form>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"card-body\">\n            <div class=\"form-group\">\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <thead>\n                    <tr>\n                      <th class=\"text-center sortingCol\">\n                        <ion-icon\n                          color=\"success\"\n                          name=\"swap-vertical-outline\"\n                        ></ion-icon>\n                      </th>\n                      <th class=\"text-center\">اسم العميل</th>\n                      <th class=\"text-center\" (click)=\"sortByDistance()\">\n                        المسافة (كم)<ion-icon\n                          *ngIf=\"orderBy && sortingParam == 'distance' && resultsCount != 0\"\n                          color=\"success\"\n                          name=\"arrow-down-outline\"\n                        ></ion-icon>\n                        <ion-icon\n                          *ngIf=\"!orderBy && sortingParam == 'distance' && resultsCount != 0\"\n                          color=\"success\"\n                          name=\"arrow-up-outline\"\n                        ></ion-icon>\n                      </th>\n                      <th class=\"text-center\" (click)=\"sortByAmount()\">\n                        صافي المستحق<ion-icon\n                          *ngIf=\"!orderBy && sortingParam == 'Total' && resultsCount != 0\"\n                          color=\"success\"\n                          name=\"arrow-up-outline\"\n                        ></ion-icon\n                        ><ion-icon\n                          *ngIf=\"orderBy && sortingParam == 'Total' && resultsCount != 0\"\n                          color=\"success\"\n                          name=\"arrow-down-outline\"\n                        ></ion-icon>\n                      </th>\n                      <th class=\"text-center\"></th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let client of clients\">\n                      <td class=\"text-center sortingCol\"></td>\n                      <td class=\"text-center\">{{ client.client_name }}</td>\n                      <td class=\"text-center\">{{ client.distance }}</td>\n                      <td class=\"text-center\">{{ client.total }}</td>\n                      <td class=\"text-center\">\n                        <ion-button\n                          color=\"success\"\n                          (click)=\"showHomeLocation(client.home_geographyLat, client.home_geographyLong)\"\n                          ><ion-icon name=\"location-sharp\"></ion-icon>\n                        </ion-button>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div *ngIf=\"resultsCount == 0\" class=\"text-center\">\n                  <h4>لا يوجد عملاء</h4>\n                </div>\n                <app-pagination\n                  [page]=\"page\"\n                  [collectionSize]=\"resultsCount\"\n                  (pageChange)=\"changePage($event); GetClientsDueToday();\"\n                ></app-pagination>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_officer_clients-due-today-tracker_clients-due-today-tracker_module_ts.js.map