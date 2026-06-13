"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_jobs_job-supervision_job-supervision_module_ts"],{

/***/ 79025:
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/jobs/job-supervision/job-supervision-routing.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobSupervisionPageRoutingModule": function() { return /* binding */ JobSupervisionPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _job_supervision_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-supervision.page */ 69961);






var routes = [{
  path: "",
  component: _job_supervision_page__WEBPACK_IMPORTED_MODULE_2__.JobSupervisionPage
}];

var JobSupervisionPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function JobSupervisionPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, JobSupervisionPageRoutingModule);
});

JobSupervisionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], JobSupervisionPageRoutingModule);


/***/ }),

/***/ 13154:
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/jobs/job-supervision/job-supervision.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobSupervisionPageModule": function() { return /* binding */ JobSupervisionPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _job_supervision_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-supervision-routing.module */ 79025);
/* harmony import */ var _job_supervision_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-supervision.page */ 69961);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);












var JobSupervisionPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function JobSupervisionPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, JobSupervisionPageModule);
});

JobSupervisionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _job_supervision_routing_module__WEBPACK_IMPORTED_MODULE_2__.JobSupervisionPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule],
  declarations: [_job_supervision_page__WEBPACK_IMPORTED_MODULE_3__.JobSupervisionPage]
})], JobSupervisionPageModule);


/***/ }),

/***/ 69961:
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/jobs/job-supervision/job-supervision.page.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobSupervisionPage": function() { return /* binding */ JobSupervisionPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _job_supervision_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-supervision.page.html?ngResource */ 14721);
/* harmony import */ var _job_supervision_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job-supervision.page.scss?ngResource */ 31741);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_jobs_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/jobs.service */ 64923);















var JobSupervisionPage = /*#__PURE__*/function () {
  function JobSupervisionPage(http, activatedRoute, env, alertServices, translate, pagingService, jobsService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, JobSupervisionPage);

    this.http = http;
    this.activatedRoute = activatedRoute;
    this.env = env;
    this.alertServices = alertServices;
    this.translate = translate;
    this.pagingService = pagingService;
    this.jobsService = jobsService;
    this.showLoader = false;
    this.currentLanguage = localStorage.getItem("currentLanguage") || "en-GB";
    this.textDir = "ltr";
    this.params = {};
    this.initialLoad = true;
    this.page = 1;
    this.jobsPageNo = 1;
    this.isSearching = true;
    this.isModalOpen = false;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(JobSupervisionPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.showLoader = true;
                this.pageSize = this.pagingService.getPageSizeFromLocalStorage();
                this.params = this.activatedRoute.snapshot.queryParams;
                this.initialLoad = this.params["jobId"] && this.params["applicationKey"] && this.params["username"];
                this.translate.get("languages.".concat(this.currentLanguage, ".dir")).subscribe({
                  next: function next(dir) {
                    _this.textDir = dir;
                    console.log(dir);
                  },
                  error: function error() {
                    _this.textDir = "ltr";
                  }
                });
                _context.next = 7;
                return this.jobsService.getJobsSupervisedTree();

              case 7:
                this.jobHierarchy = _context.sent;

                if (!(this.params["jobId"] && this.initialLoad)) {
                  _context.next = 13;
                  break;
                }

                _context.next = 11;
                return this.jobsService.getJobsSupervised();

              case 11:
                this.jobs = _context.sent;
                this.selectedJob = this.jobs.find(function (x) {
                  return x.job_id == _this.params["jobId"];
                });

              case 13:
                console.log(this.jobHierarchy);
                this.showLoader = false;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "loadJobUserLoanApps",
    value: function loadJobUserLoanApps(user) {
      var _this2 = this;

      this.showLoader = true;
      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
          "Content-Type": "application/json"
        })
      };
      this.http.post(this.env.API_URL + "api/Job/GetLoanAppsAssignedToJobUserPaged?page=".concat(this.page, "&pageSize=").concat(this.pageSize, "&username=").concat(user.user_name), this.selectedJob.job_id, httpOptions).subscribe({
        next: function next(data) {
          _this2.loanApps = data["result"];
          _this2.resultsCount = data["totalCount"];
          if (_this2.params["applicationKey"] && _this2.initialLoad) _this2.reassignLoanApp(_this2.loanApps.filter(function (x) {
            return x.application_key == _this2.params["applicationKey"];
          })[0]);
          console.log(_this2.loanApps);
        },
        error: function error(err) {
          console.log(err);
        }
      });
      this.http.get(this.env.API_URL + "api/Job/GetJobUsersBySupervisor?job=".concat(this.selectedJob.job_id, "&branch=").concat(this.selectedUser.branch_code), httpOptions).subscribe({
        next: function next(data) {
          _this2.jobUsers = data.filter(function (x) {
            return x.user_name != _this2.selectedUser.user_name;
          });
          _this2.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this2.showLoader = false;
        }
      });
    }
  }, {
    key: "loadActiveJobUsers",
    value: function loadActiveJobUsers(job) {
      this.selectedJob = job;
      this.isSearching = true;
    }
  }, {
    key: "userSelected",
    value: function userSelected(event) {
      this.selectedUser = event;
      this.loadJobUserLoanApps(event);
      this.isSearching = false;
    }
  }, {
    key: "reassignLoanApp",
    value: function reassignLoanApp(loanApp) {
      this.selectedLoanApp = loanApp;
      this.setOpen(true);
    }
  }, {
    key: "deselectJob",
    value: function deselectJob() {
      this.selectedJob = null;
      this.selectedUser = null;
      this.isSearching = true;
      this.initialLoad = false;
    }
  }, {
    key: "deselectUser",
    value: function deselectUser() {
      this.isSearching = true;
      this.selectedUser = null;
      this.initialLoad = false;
    }
  }, {
    key: "changePage",
    value: function changePage(newPage) {
      this.page = newPage;
      this.loadJobUserLoanApps(this.selectedUser);
    }
  }, {
    key: "changeJobsPage",
    value: function changeJobsPage(newPage) {
      this.jobsPageNo = newPage;
    }
  }, {
    key: "setOpen",
    value: function setOpen(isOpen) {
      this.isModalOpen = isOpen;
      this.initialLoad = false;
    }
  }, {
    key: "onChange",
    value: function onChange($event) {
      this.selectedJobUser = this.jobUsers.filter(function (x) {
        return x.user_name == $event["detail"].value;
      })[0];
    }
  }, {
    key: "saveChanges",
    value: function saveChanges() {
      var _this3 = this;

      var body = {
        user_name: this.selectedUser.user_name,
        branch_code: this.selectedUser.branch_code.toString(),
        job_id: this.selectedJob.job_id,
        user_assigned: this.selectedJobUser.user_name,
        doc_key: this.selectedLoanApp.application_key
      };
      console.log(body);
      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
          "Content-Type": "application/json"
        })
      };
      this.http.post(this.env.API_URL + "api/Job/ReassignWork", body, httpOptions).subscribe({
        next: function next() {
          return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
            return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadJobUserLoanApps(this.selectedUser);

                  case 2:
                    this.initialLoad = false;
                    this.setOpen(false);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        },
        error: function error(err) {
          console.log(err);
          _this3.initialLoad = false;

          _this3.setOpen(false);
        }
      });
    }
  }]);

  return JobSupervisionPage;
}();

JobSupervisionPage.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__.EnvService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_7__.pagingService
  }, {
    type: src_app_core_services_jobs_service__WEBPACK_IMPORTED_MODULE_8__.JobsService
  }];
};

JobSupervisionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: "app-job-supervision",
  template: _job_supervision_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_job_supervision_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], JobSupervisionPage);


/***/ }),

/***/ 31741:
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/jobs/job-supervision/job-supervision.page.scss?ngResource ***!
  \***************************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.ion-icon-class {\n  width: 1em;\n  height: 1em;\n}\n\ntd,\nth {\n  word-wrap: break-word;\n  white-space: normal;\n}\n\ntd,\nth {\n  text-align: center !important;\n}\n\n* {\n  text-align: justify !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1zdXBlcnZpc2lvbi5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEZWxldGUlMjBpdFxcTmV3TW9oYXNzaWxDbGllbnRfMzA5NV9zcmNcXE5ld01vaGFzc2lsQ2xpZW50XFxzcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxqb2JzXFxqb2Itc3VwZXJ2aXNpb25cXGpvYi1zdXBlcnZpc2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDQUY7O0FERUE7O0VBRUUscUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBOztFQUVFLDZCQUFBO0FDRUY7O0FEQ0E7RUFDRSw4QkFBQTtBQ0VGIiwiZmlsZSI6ImpvYi1zdXBlcnZpc2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1sYWJlbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgNTEsIDEwMikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmlvbi1pY29uLWNsYXNzIHtcclxuICB3aWR0aDogMWVtO1xyXG4gIGhlaWdodDogMWVtO1xyXG59XHJcbnRkLFxyXG50aCB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxudGQsXHJcbnRoIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuKiB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWljb24tY2xhc3Mge1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbn1cblxudGQsXG50aCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxudGQsXG50aCB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4qIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 14721:
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/jobs/job-supervision/job-supervision.page.html?ngResource ***!
  \***************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div class=\"ion-padding\">\n  <ion-item lines=\"none\">\n    <h4>{{ \"jobs.SupervisedJobsTitle\" | translate }}</h4>\n    <ion-button (click)=\"deselectJob()\" slot=\"end\" size=\"default\" *ngIf=\"selectedJob && !selectedUser && isSearching\">\n      <ion-icon [name]=\"textDir == 'rtl'? 'arrow-back-outline':'arrow-forward-outline'\"></ion-icon>\n    </ion-button>\n    <ion-button (click)=\"deselectUser()\" size=\"default\" slot=\"end\" *ngIf=\"selectedJob && selectedUser && !isSearching\">\n      <ion-icon [name]=\"textDir == 'rtl'? 'arrow-back-outline':'arrow-forward-outline'\"></ion-icon>\n    </ion-button>\n  </ion-item>\n  <div class=\"card\" *ngIf=\"selectedJob && selectedUser && !isSearching\">\n    <div class=\"card-body d-flex justify-content-around\">\n      <ion-item lines=\"none\">\n        <ion-label> <b>{{\"jobs.JobName\" | translate}}</b>: </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label> {{selectedJob.job_name}} </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label>\n          <b>{{\"users.username\" | translate}}</b>:\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\">\n        <ion-label> {{selectedUser.user_name}} </ion-label>\n      </ion-item>\n    </div>\n  </div>\n  <br />\n  <app-user-search [resultType]=\"2\" [jobId]=\"selectedJob.job_id\" [searchInitValue]=\"params['username']\"\n    [applyInitialSelection]=\"initialLoad\" (selectedUser)=\"userSelected($event)\"\n    *ngIf=\"selectedJob && !selectedUser && isSearching\">\n  </app-user-search>\n  <ion-card *ngIf=\"!selectedJob && !selectedUser && isSearching\">\n    <ion-card-content>\n      <div *ngIf=\"jobHierarchy && jobHierarchy.length > 0\">\n        <div *ngFor=\"let node of jobHierarchy\" class=\"table-responsive\">\n          <app-tree #tree [node]=\"node\" (Select)=\"loadActiveJobUsers($event.data)\"></app-tree>\n        </div>\n        <div *ngIf=\"!jobHierarchy || jobHierarchy.length == 0\">\n          <ion-label class=\"py-3 d-flex justify-content-center\"> {{\"searchOptions.noData\" | translate}} </ion-label>\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <div class=\"card table-responsive\" *ngIf=\"selectedJob && selectedUser && !isSearching\">\n    <table class=\"table card-body\" *ngIf=\"loanApps && loanApps.length > 0\">\n      <thead>\n        <th>{{\"clients.clientname\" | translate}}</th>\n        <th>{{\"clients.clientcode\" | translate}}</th>\n        <th>{{\"loans.applicationcode\" | translate}}</th>\n        <th></th>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let loanApp of loanApps\">\n          <td>{{loanApp.client_name}}</td>\n          <td>{{loanApp.client_code}}</td>\n          <td>{{loanApp.application_code}}</td>\n          <td>\n            <ion-button (click)=\"reassignLoanApp(loanApp)\">\n              <ion-icon name=\"create-outline\"></ion-icon>\n            </ion-button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"card-body\" *ngIf=\"!loanApps || loanApps.length == 0\">\n      <ion-label class=\"py-3 d-flex justify-content-center\"> {{\"searchOptions.noData\" | translate}} </ion-label>\n    </div>\n  </div>\n  <ion-modal [isOpen]=\"isModalOpen\" [backdropDismiss]=\"false\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>{{\"jobs.reassign\" | translate}}</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"setOpen(false)\">\n              <ion-icon name=\"close-outline\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <ion-grid class=\"card\">\n          <ion-col class=\"card-body\">\n            <ion-row>\n              <ion-item lines=\"none\" class=\"w-50\">\n                <ion-label>\n                  <h3>{{\"jobs.JobName\" | translate}}</h3>\n                  <p>{{selectedJob.job_name}}</p>\n                </ion-label>\n              </ion-item>\n              <ion-item lines=\"none\" class=\"w-50\">\n                <ion-label>\n                  <h3>{{\"users.username\" | translate}}</h3>\n                  <p>{{selectedUser.user_name}}</p>\n                </ion-label>\n              </ion-item>\n            </ion-row>\n            <ion-row>\n              <ion-item lines=\"none\" class=\"w-50\">\n                <ion-label>\n                  <h3>{{\"clients.clientname\" | translate}}</h3>\n                  <p>{{selectedLoanApp.client_name}}</p>\n                </ion-label>\n              </ion-item>\n              <ion-item lines=\"none\" class=\"w-50\">\n                <ion-label>\n                  <h3>{{\"clients.clientcode\" | translate}}</h3>\n                  <p>{{selectedLoanApp.client_code}}</p>\n                </ion-label>\n              </ion-item>\n            </ion-row>\n            <ion-row>\n              <ion-item lines=\"none\" class=\"w-50\">\n                <ion-label>\n                  <h3>{{\"loans.applicationcode\" | translate}}</h3>\n                  <p>{{selectedLoanApp.application_code}}</p>\n                </ion-label>\n              </ion-item>\n            </ion-row>\n            <ion-row>\n              <ion-item lines=\"none\" class=\"w-100\">\n                <ion-label>\n                  <h3>{{\"jobs.reassignTo\" | translate}}</h3>\n                </ion-label>\n                <ion-select class=\"w-100\" (ionChange)=\"onChange($event)\" interface=\"popover\">\n                  <ion-select-option *ngFor=\"let jobUser of jobUsers\" value=\"{{jobUser.user_name}}\">\n                    {{jobUser.user_name}}\n                  </ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-row>\n            <ion-row class=\"d-flex justify-content-center\">\n              <br />\n              <ion-button (click)=\"saveChanges()\">\n                {{\"generic.save\" | translate}}\n              </ion-button>\n            </ion-row>\n          </ion-col>\n        </ion-grid>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_jobs_job-supervision_job-supervision_module_ts.js.map