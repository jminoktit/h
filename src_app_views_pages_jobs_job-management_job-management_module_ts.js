"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_jobs_job-management_job-management_module_ts"],{

/***/ 94839:
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/jobs/job-management/job-management-routing.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobManagementPageRoutingModule": function() { return /* binding */ JobManagementPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _job_management_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-management.page */ 40637);






var routes = [{
  path: '',
  component: _job_management_page__WEBPACK_IMPORTED_MODULE_2__.JobManagementPage
}];

var JobManagementPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function JobManagementPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, JobManagementPageRoutingModule);
});

JobManagementPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], JobManagementPageRoutingModule);


/***/ }),

/***/ 21939:
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/jobs/job-management/job-management.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobManagementPageModule": function() { return /* binding */ JobManagementPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _job_management_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-management-routing.module */ 94839);
/* harmony import */ var _job_management_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-management.page */ 40637);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var JobManagementPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function JobManagementPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, JobManagementPageModule);
});

JobManagementPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _job_management_routing_module__WEBPACK_IMPORTED_MODULE_2__.JobManagementPageRoutingModule],
  declarations: [_job_management_page__WEBPACK_IMPORTED_MODULE_3__.JobManagementPage]
})], JobManagementPageModule);


/***/ }),

/***/ 40637:
/*!************************************************************************!*\
  !*** ./src/app/views/pages/jobs/job-management/job-management.page.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobManagementPage": function() { return /* binding */ JobManagementPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _job_management_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-management.page.html?ngResource */ 11690);
/* harmony import */ var _job_management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job-management.page.scss?ngResource */ 12573);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);
/* harmony import */ var src_app_core_services_jobs_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/jobs.service */ 64923);


















var JobManagementPage = /*#__PURE__*/function () {
  function JobManagementPage(http, formBuilder, alertController, env, authService, sortingService, alertServices, translate, inputMaskingService, jobsService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, JobManagementPage);

    this.http = http;
    this.formBuilder = formBuilder;
    this.alertController = alertController;
    this.env = env;
    this.authService = authService;
    this.sortingService = sortingService;
    this.alertServices = alertServices;
    this.translate = translate;
    this.inputMaskingService = inputMaskingService;
    this.jobsService = jobsService;
    this.showLoader = false;
    this.isInsertingJob = false;
    this.isEditingJob = false;
    this.canEdit = true;
    this.canAdd = true;
    this.canDelete = true;
    this.hasSupervisor = false;
    this.jobTypes = [];
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(JobManagementPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.translate.get("days.saturday").toPromise();

              case 2:
                _context.t0 = _context.sent;
                _context.t1 = [_context.t0, "saturday"];
                _context.next = 6;
                return this.translate.get("days.sunday").toPromise();

              case 6:
                _context.t2 = _context.sent;
                _context.t3 = [_context.t2, "sunday"];
                _context.next = 10;
                return this.translate.get("days.monday").toPromise();

              case 10:
                _context.t4 = _context.sent;
                _context.t5 = [_context.t4, "monday"];
                _context.next = 14;
                return this.translate.get("days.tuesday").toPromise();

              case 14:
                _context.t6 = _context.sent;
                _context.t7 = [_context.t6, "tuesday"];
                _context.next = 18;
                return this.translate.get("days.wednesday").toPromise();

              case 18:
                _context.t8 = _context.sent;
                _context.t9 = [_context.t8, "wednesday"];
                _context.next = 22;
                return this.translate.get("days.thursday").toPromise();

              case 22:
                _context.t10 = _context.sent;
                _context.t11 = [_context.t10, "thursday"];
                _context.next = 26;
                return this.translate.get("days.friday").toPromise();

              case 26:
                _context.t12 = _context.sent;
                _context.t13 = [_context.t12, "friday"];
                this.days = [_context.t1, _context.t3, _context.t5, _context.t7, _context.t9, _context.t11, _context.t13];
                _context.next = 31;
                return this.authService.getUserInfo().then(function (userInfo) {
                  _this.org_code = userInfo.org_code;
                });

              case 31:
                this.GetJobTypes();
                this.GetAllJobs();
                this.JobForm = this.formBuilder.group({
                  job_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, this.noWhitespaceValidator]],
                  job_type: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, this.noWhitespaceValidator]],
                  supervisor_id: [null],
                  max_no_users: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, this.noWhitespaceValidator]],
                  startTime: ["00:00", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
                  endTime: ["23:59", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
                  workingDays: [["sunday", "monday", "tuesday", "wednesday", "thursday"], [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
                  saturday: [0],
                  sunday: [1],
                  monday: [1],
                  tuesday: [1],
                  wednesday: [1],
                  thursday: [1],
                  friday: [0]
                });

              case 34:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "clearForms",
    value: function clearForms() {
      this.isInsertingJob = false;
      this.isEditingJob = false;
      this.JobForm.reset();
      this.JobForm.patchValue({
        startTime: "00:00",
        endTime: "23:59",
        workingDays: ["sunday", "monday", "tuesday", "wednesday", "thursday"]
      });
    }
  }, {
    key: "InsertJob",
    value: function InsertJob() {
      this.isInsertingJob = true;
      this.FilteredJobs = this.jobs;
      if (this.JobForm.value.supervisor_id) this.hasSupervisor = true;else this.hasSupervisor = false;
    }
  }, {
    key: "GetJobTypes",
    value: function GetJobTypes() {
      var _this2 = this;

      this.http.get(this.env.API_URL + "api/StaticRef/GetJobTypes").subscribe({
        next: function next(data) {
          _this2.jobTypes = data;
        },
        error: function error(err) {
          console.log(err);
        }
      });
    }
  }, {
    key: "GetAllJobs",
    value: function GetAllJobs() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.showLoader = true;
                _context2.next = 3;
                return this.jobsService.getJobsTree();

              case 3:
                this.jobHierarchy = _context2.sent;
                this.showLoader = false;

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "GetAllJobSupervisors",
    value: function GetAllJobSupervisors(job_id) {
      var _this3 = this;

      this.showLoader = true;
      this.http.post(this.env.API_URL + "api/Job/GetAllJobSupervisors", {
        org_code: this.org_code,
        // job_id: this.jobs[index].job_id.toString(),
        job_id: job_id.toString()
      }).subscribe({
        next: function next(data) {
          _this3.FilteredJobs = data;
          _this3.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this3.showLoader = false;
        }
      });
    }
  }, {
    key: "GetJobByID",
    value: function GetJobByID(job_id, isEditingJob) {
      var _this4 = this;

      // this.showLoader = true;
      this.http.post(this.env.API_URL + "api/Job/GetJobByID", {
        org_code: this.org_code.toString(),
        // job_id: this.jobs[index].job_id.toString(),
        job_id: job_id
      }).subscribe({
        next: function next(data) {
          console.log(data);
          _this4.jobInfo = data;
          if (isEditingJob) _this4.patchJobDataValue(_this4.jobInfo);
          if (isEditingJob) _this4.GetAllJobSupervisors(job_id); // this.FilteredJobs = this.jobs.filter(
          //   (job) =>
          //     (job.supervisor_id == null &&
          //       this.jobInfo.job_id != job.job_id) ||
          //     (parseInt(job.supervisor_id) < parseInt(this.jobInfo.job_id) &&
          //       parseInt(job.job_id) != parseInt(this.jobInfo.job_id))
          // );
          // console.log(this.FilteredJobs);

          _this4.isEditingJob = isEditingJob;
          _this4.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this4.showLoader = false;
        }
      });
    }
  }, {
    key: "GetWorkingDays",
    value: function GetWorkingDays() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var workingDays, saturday, sunday, monday, tuesday, wednesday, thursday, friday;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                workingDays = this.JobForm.value.workingDays;
                saturday = workingDays.find(function (x) {
                  return x === "saturday";
                });
                sunday = workingDays.find(function (x) {
                  return x === "sunday";
                });
                monday = workingDays.find(function (x) {
                  return x === "monday";
                });
                tuesday = workingDays.find(function (x) {
                  return x === "tuesday";
                });
                wednesday = workingDays.find(function (x) {
                  return x === "wednesday";
                });
                thursday = workingDays.find(function (x) {
                  return x === "thursday";
                });
                friday = workingDays.find(function (x) {
                  return x === "friday";
                });
                this.JobForm.patchValue({
                  saturday: saturday != undefined ? 1 : 0,
                  sunday: sunday != undefined ? 1 : 0,
                  monday: monday != undefined ? 1 : 0,
                  tuesday: tuesday != undefined ? 1 : 0,
                  wednesday: wednesday != undefined ? 1 : 0,
                  thursday: thursday != undefined ? 1 : 0,
                  friday: friday != undefined ? 1 : 0
                });
                console.log(this.JobForm.value);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "SubmitJob",
    value: function SubmitJob() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var _this5 = this;

        var supervisor_id;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.JobForm.valid) {
                  _context4.next = 8;
                  break;
                }

                this.showLoader = true;

                if (this.JobForm.value.supervisor_id != null) {
                  supervisor_id = this.JobForm.value.supervisor_id == "" ? null : this.JobForm.value.supervisor_id.toString();
                }

                _context4.next = 5;
                return this.GetWorkingDays();

              case 5:
                this.http.post(this.env.API_URL + "api/Job/CreateJob", {
                  org_code: this.org_code.toString(),
                  job_name: this.JobForm.value.job_name.toString(),
                  job_type: this.JobForm.value.job_type.toString(),
                  supervisor_id: supervisor_id,
                  max_no_users: this.JobForm.value.max_no_users.toString(),
                  start_time: this.JobForm.value.startTime.toString(),
                  end_time: this.JobForm.value.endTime.toString(),
                  saturday: this.JobForm.value.saturday,
                  sunday: this.JobForm.value.sunday,
                  monday: this.JobForm.value.monday,
                  tuesday: this.JobForm.value.tuesday,
                  wednesday: this.JobForm.value.wednesday,
                  thursday: this.JobForm.value.thursday,
                  friday: this.JobForm.value.friday
                }).subscribe({
                  next: function next(data) {
                    _this5.showLoader = false;

                    _this5.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                  },
                  error: function error(err) {
                    console.log(err);

                    _this5.alertServices.showAlertError(err.error, false);

                    _this5.showLoader = false;
                  }
                });
                _context4.next = 9;
                break;

              case 8:
                this.alertServices.showAlertError("يجب ادخال جميع البيانات", false);

              case 9:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "EditJob",
    value: function EditJob() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var _this6 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!this.JobForm.valid) {
                  _context5.next = 10;
                  break;
                }

                _context5.next = 3;
                return this.alertServices.SaveAlert("هل انت متاكد من تغيير بيانات الوظيفة؟");

              case 3:
                if (!_context5.sent) {
                  _context5.next = 8;
                  break;
                }

                this.showLoader = true;
                _context5.next = 7;
                return this.GetWorkingDays();

              case 7:
                this.http.post(this.env.API_URL + "api/Job/EditJob", {
                  org_code: this.org_code.toString(),
                  job_id: this.jobInfo.job_id.toString(),
                  job_name: this.JobForm.value.job_name.toString(),
                  job_type: this.jobInfo.job_type,
                  supervisor_id: this.JobForm.value.supervisor_id == "" || !this.JobForm.value.supervisor_id ? null : this.JobForm.value.supervisor_id.toString(),
                  max_no_users: this.JobForm.value.max_no_users.toString(),
                  start_time: this.JobForm.value.startTime.toString(),
                  end_time: this.JobForm.value.endTime.toString(),
                  saturday: this.JobForm.value.saturday,
                  sunday: this.JobForm.value.sunday,
                  monday: this.JobForm.value.monday,
                  tuesday: this.JobForm.value.tuesday,
                  wednesday: this.JobForm.value.wednesday,
                  thursday: this.JobForm.value.thursday,
                  friday: this.JobForm.value.friday
                }).subscribe({
                  next: function next(data) {
                    _this6.showLoader = false;

                    _this6.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                  },
                  error: function error(err) {
                    console.log(err);

                    _this6.alertServices.showAlertError(err.error, false);

                    _this6.showLoader = false;
                  }
                });

              case 8:
                _context5.next = 11;
                break;

              case 10:
                this.alertServices.showAlertError("يجب ادخال جميع البيانات", false);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "DeleteJob",
    value: function DeleteJob(job_id, org_code) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        var _this7 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.alertServices.DeleteAlert("هل انت متاكد من مسح هذه الوظيفة؟");

              case 2:
                if (!_context6.sent) {
                  _context6.next = 5;
                  break;
                }

                this.showLoader = true;
                this.http.post(this.env.API_URL + "api/Job/DeleteJob", {
                  // org_code: this.jobs[index].org_code.toString(),
                  // job_id: this.jobs[index].job_id.toString(),
                  org_code: org_code,
                  job_id: job_id
                }).subscribe({
                  next: function next(data) {
                    _this7.showLoader = false;

                    _this7.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                  },
                  error: function error(err) {
                    console.log(err);

                    _this7.alertServices.showAlertError(err.error, false);

                    _this7.showLoader = false;
                  }
                });

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "patchJobDataValue",
    value: function patchJobDataValue(job) {
      var days;
      days = this.days.map(function (d) {
        return d[1];
      }).filter(function (d) {
        return job[d] == 1;
      });
      console.log(job);
      this.JobForm.patchValue({
        job_name: job.job_name,
        job_type: job.job_type + "",
        supervisor_id: job.supervisor_id,
        max_no_users: job.max_no_users,
        startTime: job.start_time,
        endTime: job.end_time,
        workingDays: days
      });
    }
  }, {
    key: "noWhitespaceValidator",
    value: function noWhitespaceValidator(control) {
      var isWhitespace = control.value !== null && (control.value || "").toString().trim().length === 0;
      var isValid = !isWhitespace;
      return isValid ? null : {
        whitespace: true
      };
    }
  }, {
    key: "sortingTable",
    value: function sortingTable(data, param) {
      this.sortingService.sortByParameter(data, param);
      this.sortingIconClass = this.sortingService.sortOrder === "asc" ? "arrow-down-outline" : "arrow-up-outline";
      this.sortingIconParam = param;
    }
  }, {
    key: "Edit",
    value: function Edit(node) {
      this.hasSupervisor = false;
      this.GetJobByID(node.data.job_id, true);
    }
  }, {
    key: "Delete",
    value: function Delete(node) {
      this.DeleteJob(node.data.job_id, node.data.org_code);
    }
  }, {
    key: "Add",
    value: function Add(node) {
      this.GetJobByID(node.data.job_id, false);
      this.JobForm.patchValue({
        supervisor_id: node.data.job_id
      });
      this.hasSupervisor = true;
      this.InsertJob();
      console.log(this.isEditingJob, this.isInsertingJob);
    }
  }]);

  return JobManagementPage;
}();

JobManagementPage.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__.EnvService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__.MohassilAuthService
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_8__.sortingService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_9__.InputMaskingService
  }, {
    type: src_app_core_services_jobs_service__WEBPACK_IMPORTED_MODULE_10__.JobsService
  }];
};

JobManagementPage.propDecorators = {
  appFoo: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.ViewChild,
    args: ["appFoo"]
  }]
};
JobManagementPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: "app-job-management",
  template: _job_management_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_job_management_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], JobManagementPage);


/***/ }),

/***/ 12573:
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/jobs/job-management/job-management.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.ion-icon-class {\n  width: 1em;\n  height: 1em;\n}\n\ntd {\n  word-wrap: break-word;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1tYW5hZ2VtZW50LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGpvYnNcXGpvYi1tYW5hZ2VtZW50XFxqb2ItbWFuYWdlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDQUY7O0FERUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoiam9iLW1hbmFnZW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwtcmVxdWlyZWQge1xyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiKlwiO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5pb24taWNvbi1jbGFzcyB7XHJcbiAgd2lkdGg6IDFlbTtcclxuICBoZWlnaHQ6IDFlbTtcclxufVxyXG50ZCB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuIiwiLmZvcm0tbGFiZWwtcmVxdWlyZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCIqXCI7XG4gIGNvbG9yOiAjZmYzMzY2ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24taWNvbi1jbGFzcyB7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xufVxuXG50ZCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn0iXX0= */";

/***/ }),

/***/ 11690:
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/jobs/job-management/job-management.page.html?ngResource ***!
  \*************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<div class=\"ion-padding\">\n  <ion-item lines=\"none\">\n    <h5 class=\"mr-1 mb-md-0 pb-3\">ادارة الوظائف</h5>\n  </ion-item>\n  <ion-card *ngIf=\"!isInsertingJob && !isEditingJob\">\n    <ion-card-content>\n      <div *ngIf=\"jobHierarchy\">\n        <div *ngFor=\"let node of jobHierarchy\" class=\"table-responsive\">\n          <app-tree #tree [node]=\"node\" (Edit)=\"Edit($event)\" (Delete)=\"Delete($event)\" (Add)=\"Add($event)\"></app-tree>\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</div>\n\n<div class=\"row\" *ngIf=\"isInsertingJob || isEditingJob\">\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"JobForm\">\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                إسم الوظيفة\n              </ion-label>\n              <ion-input type=\"text\" class=\"form-control\" formControlName=\"job_name\">\n              </ion-input>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                القائم بالاشراف\n              </ion-label>\n              <ion-select [disabled]=\"hasSupervisor\" class=\"subselect ionSelectSize ion-text-wrap select-text\"\n                interface=\"popover\" formControlName=\"supervisor_id\">\n                <!-- <ion-select-option value=\"\"></ion-select-option> -->\n                <ion-select-option class=\"pb-2\" *ngFor=\"let job of FilteredJobs\" [value]=\"job.job_id\">\n                  {{job.job_name}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                اقصي عدد موظفين\n              </ion-label>\n              <ion-input type=\"text\" class=\"form-control\" formControlName=\"max_no_users\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e9, 0)\">\n              </ion-input>\n            </div>\n          </div>\n          <div class=\"row pt-3\">\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\" for=\"workingDays\">\n                أيام العمل في الأسبوع\n              </ion-label>\n              <ion-select class=\"subselect\" interface=\"popover\" id=\"workingDays\" formControlName=\"workingDays\"\n                multiple=\"true\">\n                <ion-select-option *ngFor=\"let day of days\" [value]=\"day[1]\">\n                  {{day[0]}}\n                </ion-select-option>\n              </ion-select>\n            </div>\n            <div class=\"col-12 col-md-4 pt-3\">\n              <ion-item lines=\"none\">\n                <ion-label> وقت بداية العمل </ion-label>\n                <ion-datetime-button datetime=\"startTime\" slot=\"end\"></ion-datetime-button>\n                <ion-modal [keepContentsMounted]=\"true\">\n                  <ng-template>\n                    <ion-datetime presentation=\"time\" id=\"startTime\" formControlName=\"startTime\" hourCycle=\"h23\"\n                      locale=\"en\"></ion-datetime>\n                  </ng-template>\n                </ion-modal>\n              </ion-item>\n            </div>\n            <div class=\"col-12 col-md-4 pt-3\">\n              <ion-item lines=\"none\">\n                <ion-label> وقت انتهاء العمل </ion-label>\n                <ion-datetime-button datetime=\"endTime\" slot=\"end\"></ion-datetime-button>\n                <ion-modal [keepContentsMounted]=\"true\">\n                  <ng-template>\n                    <ion-datetime presentation=\"time\" id=\"endTime\" formControlName=\"endTime\" hourCycle=\"h23\"\n                      locale=\"en\"></ion-datetime>\n                  </ng-template>\n                </ion-modal>\n              </ion-item>\n            </div>\n          </div>\n          <div class=\"row pt-3\">\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\" for=\"job_type\">\n                نوع الوظيفة\n              </ion-label>\n              <ion-select class=\"subselect\" interface=\"popover\" id=\"job_type\" formControlName=\"job_type\">\n                <div *ngFor=\"let jobType of jobTypes\">\n                  <ion-select-option [value]=\"jobType.ref_code\" *ngIf=\"!(isEditingJob && jobInfo.job_type + '' != jobType.ref_code)\n                            && !(isInsertingJob && jobType.ref_code == '0')\">\n                    {{jobType.ref_desc}}\n                  </ion-select-option>\n                </div>\n              </ion-select>\n            </div>\n          </div>\n        </form>\n        <div class=\"row-12 pt-3\">\n          <div class=\"d-flex justify-content-center mt-2\">\n            <ion-button color=\"danger\" (click)=\"clearForms()\">\n              رجوع\n            </ion-button>\n            <ion-button *ngIf=\"isEditingJob\" (click)=\"EditJob()\">\n              تعديل الوظيفة\n            </ion-button>\n            <ion-button *ngIf=\"isInsertingJob\" (click)=\"SubmitJob()\">\n              حفظ الوظيفة\n            </ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div></div>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_jobs_job-management_job-management_module_ts.js.map