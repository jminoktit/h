"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_head-office_database-jobs-management_database-jobs-management_module_ts"],{

/***/ 26141:
/*!*******************************************************************!*\
  !*** ./src/app/core/services/database-jobs-management.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseJobsManagementService": function() { return /* binding */ DatabaseJobsManagementService; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env.service */ 41752);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.service */ 43081);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 84505);









var DatabaseJobsManagementService = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DatabaseJobsManagementService(env, http, alertService) {
  var _this = this;

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DatabaseJobsManagementService);

  this.env = env;
  this.http = http;
  this.alertService = alertService;

  this.getEligibleDatabaseJobs = function () {
    try {
      return _this.http.get(_this.env.API_URL + "api/Settings/GetEligibleDatabaseJobs");
    } catch (error) {
      console.error("Error GetEligibleDatabaseJobs:", error);
      throw error;
    }
  };

  this.initiateEligibleDatabaseJob = function (job) {
    try {
      return _this.http.post(_this.env.API_URL + "api/Settings/InitiateEligibleDatabaseJob", job);
    } catch (error) {
      console.error("Error InitiateEligibleDatabaseJob:", error);
      throw error;
    }
  };

  this.toggleEligibleDatabaseJob = function (job) {
    try {
      console.log(job);
      return _this.http.post(_this.env.API_URL + "api/Settings/ToggleEligibleDatabaseJob", job);
    } catch (error) {
      console.error("Error ToggleEligibleDatabaseJob:", error);
      var result = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
      return result;
    }
  };
});

DatabaseJobsManagementService.ctorParameters = function () {
  return [{
    type: _env_service__WEBPACK_IMPORTED_MODULE_2__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }, {
    type: _alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService
  }];
};

DatabaseJobsManagementService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: "root"
})], DatabaseJobsManagementService);


/***/ }),

/***/ 22191:
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/database-jobs-management/database-jobs-management-routing.module.ts ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseJobsManagementPageRoutingModule": function() { return /* binding */ DatabaseJobsManagementPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _database_jobs_management_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database-jobs-management.page */ 89765);






var routes = [{
  path: "",
  component: _database_jobs_management_page__WEBPACK_IMPORTED_MODULE_2__.DatabaseJobsManagementPage
}];

var DatabaseJobsManagementPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DatabaseJobsManagementPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DatabaseJobsManagementPageRoutingModule);
});

DatabaseJobsManagementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], DatabaseJobsManagementPageRoutingModule);


/***/ }),

/***/ 15549:
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/database-jobs-management/database-jobs-management.module.ts ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseJobsManagementPageModule": function() { return /* binding */ DatabaseJobsManagementPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _database_jobs_management_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database-jobs-management.page */ 89765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _database_jobs_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database-jobs-management-routing.module */ 22191);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var DatabaseJobsManagementPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function DatabaseJobsManagementPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, DatabaseJobsManagementPageModule);
});

DatabaseJobsManagementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _database_jobs_management_routing_module__WEBPACK_IMPORTED_MODULE_3__.DatabaseJobsManagementPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_database_jobs_management_page__WEBPACK_IMPORTED_MODULE_2__.DatabaseJobsManagementPage]
})], DatabaseJobsManagementPageModule);


/***/ }),

/***/ 89765:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/database-jobs-management/database-jobs-management.page.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseJobsManagementPage": function() { return /* binding */ DatabaseJobsManagementPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _database_jobs_management_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database-jobs-management.page.html?ngResource */ 87944);
/* harmony import */ var _database_jobs_management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database-jobs-management.page.scss?ngResource */ 82402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_database_jobs_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/database-jobs-management.service */ 26141);









var DatabaseJobsManagementPage = /*#__PURE__*/function () {
  function DatabaseJobsManagementPage(databaseJobsManagementService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DatabaseJobsManagementPage);

    this.databaseJobsManagementService = databaseJobsManagementService;
    this.jobs = [];
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(DatabaseJobsManagementPage, [{
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      clearInterval(this.intervalId);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getEligibleDatabaseJobs();

              case 2:
                this.intervalId = setInterval(function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return this.getEligibleDatabaseJobs();

                          case 2:
                            return _context.abrupt("return", _context.sent);

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, this);
                  }));
                }, 60000);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "getEligibleDatabaseJobs",
    value: function getEligibleDatabaseJobs() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log("aaaaaaaaaaaaaaaaaa");
                _context3.next = 3;
                return this.databaseJobsManagementService.getEligibleDatabaseJobs().toPromise();

              case 3:
                this.jobs = _context3.sent.map(function (x) {
                  return Object.assign(Object.assign({}, x), {
                    enabled: x.enabled == 1 ? true : false,
                    isRunning: x.isRunning == 1 ? true : false
                  });
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "enabledChanged",
    value: function enabledChanged(job) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var result;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log(this.jobs, job, {
                  name: job.name,
                  enabled: job.enabled ? 1 : 0
                });
                _context4.next = 3;
                return this.databaseJobsManagementService.toggleEligibleDatabaseJob({
                  name: job.name,
                  enable: job.enabled ? 1 : 0
                }).toPromise();

              case 3:
                result = _context4.sent;

                if (!result) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 7;
                return this.getEligibleDatabaseJobs();

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "isRunningChanged",
    value: function isRunningChanged(job) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var result;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.databaseJobsManagementService.initiateEligibleDatabaseJob({
                  name: job.name,
                  start: job.isRunning ? 1 : 0
                }).toPromise();

              case 3:
                result = _context5.sent;
                _context5.next = 10;
                break;

              case 6:
                _context5.prev = 6;
                _context5.t0 = _context5["catch"](0);
                _context5.next = 10;
                return this.getEligibleDatabaseJobs();

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 6]]);
      }));
    }
  }]);

  return DatabaseJobsManagementPage;
}();

DatabaseJobsManagementPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_database_jobs_management_service__WEBPACK_IMPORTED_MODULE_5__.DatabaseJobsManagementService
  }];
};

DatabaseJobsManagementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: "app-database-jobs-management",
  template: _database_jobs_management_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_database_jobs_management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], DatabaseJobsManagementPage);


/***/ }),

/***/ 82402:
/*!****************************************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/database-jobs-management/database-jobs-management.page.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhYmFzZS1qb2JzLW1hbmFnZW1lbnQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 87944:
/*!****************************************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/database-jobs-management/database-jobs-management.page.html?ngResource ***!
  \****************************************************************************************************************/
/***/ (function(module) {

module.exports = "<ion-card>\n  <div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\n    <div>\n      <ion-item lines=\"none\">\n        <h5 class=\"mr-1 mb-md-0 pb-3\">إدارة خادم قواعد البيانات</h5>\n        <!-- <ion-button slot=\"start\" (click)=\"InsertJob()\"><ion-icon name=\"add-outline\"></ion-icon></ion-button> -->\n      </ion-item>\n    </div>\n  </div>\n  <ion-grid class=\"scroll-container\">\n    <ion-row class=\"header-row\">\n      <ion-col size=\"3\"><ion-label>خادم قاعدة البيانات</ion-label></ion-col>\n      <ion-col size=\"4\"><ion-label>تفعيل</ion-label></ion-col>\n      <ion-col size=\"4\"><ion-label>تشغيل</ion-label></ion-col>\n      <ion-col size=\"1\">\n        <ion-button (click)=\"getEligibleDatabaseJobs()\">\n          <ion-icon name=\"refresh\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"details-row\" *ngFor=\"let job of jobs\">\n      <ion-col size=\"3\"><ion-label>{{job.name}}</ion-label></ion-col>\n      <ion-col size=\"4\"><ion-toggle [(ngModel)]=\"job.enabled\"\n          (ngModelChange)=\"enabledChanged(job)\"></ion-toggle></ion-col>\n      <ion-col size=\"4\"><ion-toggle [(ngModel)]=\"job.isRunning\"\n          (ngModelChange)=\"isRunningChanged(job)\"></ion-toggle></ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_head-office_database-jobs-management_database-jobs-management_module_ts.js.map