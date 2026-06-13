"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_officer_late-clients-tracker_late-clients-tracker_module_ts"],{

/***/ 31978:
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/officer/late-clients-tracker/late-clients-tracker-routing.module.ts ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LateClientTrackerPageRoutingModule": function() { return /* binding */ LateClientTrackerPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _late_clients_tracker_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./late-clients-tracker.page */ 14808);






var routes = [{
  path: '',
  component: _late_clients_tracker_page__WEBPACK_IMPORTED_MODULE_2__.lateclienttrackerPage
}];

var LateClientTrackerPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LateClientTrackerPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LateClientTrackerPageRoutingModule);
});

LateClientTrackerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LateClientTrackerPageRoutingModule);


/***/ }),

/***/ 34409:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/officer/late-clients-tracker/late-clients-tracker.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LateClientTrackerPageModule": function() { return /* binding */ LateClientTrackerPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);
/* harmony import */ var _late_clients_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./late-clients-tracker-routing.module */ 31978);
/* harmony import */ var angular_archwizard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-archwizard */ 38531);
/* harmony import */ var _late_clients_tracker_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./late-clients-tracker.page */ 14808);













var LateClientTrackerPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LateClientTrackerPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LateClientTrackerPageModule);
});

LateClientTrackerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _late_clients_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__.LateClientTrackerPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, angular_archwizard__WEBPACK_IMPORTED_MODULE_10__.ArchwizardModule],
  declarations: [_late_clients_tracker_page__WEBPACK_IMPORTED_MODULE_4__.lateclienttrackerPage]
})], LateClientTrackerPageModule);


/***/ }),

/***/ 14808:
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/officer/late-clients-tracker/late-clients-tracker.page.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lateclienttrackerPage": function() { return /* binding */ lateclienttrackerPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _late_clients_tracker_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./late-clients-tracker.page.html?ngResource */ 96209);
/* harmony import */ var _late_clients_tracker_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./late-clients-tracker.page.scss?ngResource */ 62710);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/location.service */ 33094);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);















var httpOptions = {
  headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
    "Content-Type": "application/json"
  })
};

var lateclienttrackerPage = /*#__PURE__*/function () {
  function lateclienttrackerPage(env, http, formBuilder, alertController, locationService, toastController, alertSerivce, AuthService, pagingService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, lateclienttrackerPage);

    this.env = env;
    this.http = http;
    this.formBuilder = formBuilder;
    this.alertController = alertController;
    this.locationService = locationService;
    this.toastController = toastController;
    this.alertSerivce = alertSerivce;
    this.AuthService = AuthService;
    this.pagingService = pagingService;
    this.showLoader = false;
    this.clients = [];
    this.l_type = "0";
    this.loan_type = "";
    this.endDate = null; // clientLong;
    // clientlat;

    this.clientDistance = [];
    this.Radius = 6371; // Radius of the earth in KM

    this.page = 1; // the page we are viewing

    this.totalPages = 1; // calculate by the pageSize and resultcount this.totalPages = (Math.trunc(x) < (this.resultsCount/this.pageSize)) ? Math.trunc(x)+1:Math.trunc(x) ;
    // sortedByDistance: boolean = false;
    // sortedByAmount: boolean = false;
    // sortedByLateDays: boolean = false;
    // onlyByDistance: boolean = false;
    // onlyByAmount: boolean = false;
    // onlyByLateDays: boolean = false;

    this.sortingParam = "distance";
    this.orderBy = false;
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(lateclienttrackerPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.pageSize = this.pagingService.getPageSizeFromLocalStorage();
                _context.next = 3;
                return this.formatForm();

              case 3:
                _context.next = 5;
                return this.userInfo();

              case 5:
                _context.next = 7;
                return this.getOfficerLocation();

              case 7:
                _context.next = 9;
                return this.GetLoanType();

              case 9:
                _context.next = 11;
                return this.GetLateClients();

              case 11:
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
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
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
      this.lateClientsForm = this.formBuilder.group({
        endDate: [this.endDate],
        loan_type: [""]
      });
    }
  }, {
    key: "GetLoanType",
    value: function GetLoanType() {
      var _this = this;

      return this.http.get(this.env.API_URL + "api/Loan/GetAllLoanTypesForApp").subscribe(function (data) {
        _this.Loans = data; // console.log(this.Loans)
      });
    }
  }, {
    key: "showHomeLocation",
    value: function showHomeLocation(home_Lat, home_Long) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var coordinates, result;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                coordinates = "".concat(home_Lat, ",").concat(home_Long);
                _context3.next = 3;
                return this.locationService.showLocation(coordinates);

              case 3:
                result = _context3.sent;

                if (!result.success) {
                  this, this.alertSerivce.showAlertError(result.message, false);
                }

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "getOfficerLocation",
    value: function getOfficerLocation() {
      var _a, _b;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var locationResult;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // if (Capacitor.getPlatform() != "web") {
                this.showLoader = true;
                _context4.prev = 1;
                _context4.next = 4;
                return this.locationService.getLocation();

              case 4:
                locationResult = _context4.sent;

                if (locationResult.success) {
                  _context4.next = 9;
                  break;
                }

                this, this.alertSerivce.showAlertError(locationResult.message, false);
                this.showLoader = false;
                return _context4.abrupt("return");

              case 9:
                this.OfficerLat = (_a = locationResult.position) === null || _a === void 0 ? void 0 : _a.coords.latitude.toString();
                this.OfficerLong = (_b = locationResult.position) === null || _b === void 0 ? void 0 : _b.coords.longitude.toString();
                this.OfficerZoom = "0"; // console.log(this.OfficerLat, this.OfficerLong);
                // this.presentToast("تم", locationResult.message);

                this.showLoader = false;
                _context4.next = 18;
                break;

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](1);
                this.showLoader = false; // this.showAlertNoReload("خطأ عند أخذ لقطة الموقع");

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 15]]);
      }));
    }
  }, {
    key: "GetLateClients",
    value: function GetLateClients() {
      var _this2 = this;

      this.showLoader = true;
      var lateClients = {
        end_date: this.endDate,
        currency_code: "0",
        officer_key: this.officer_key,
        inst_cond: "0",
        client_type_code: "1,2,3,4",
        cur_branch_code: this.cur_branch_code,
        all_currency_codes: "0",
        all_officer_keys: "0",
        all_inst_conds: "0",
        all_client_type_codes: "0",
        l_type: this.l_type,
        all_l_type: "1",
        funder_list: "0",
        all_funder: "1",
        OfficerLat: this.OfficerLat,
        OfficerLong: this.OfficerLong
      };
      this.http.post(this.env.API_URL + "api/Clients/LateClient?&pageNo=".concat(this.page, "&pageSize=").concat(this.pageSize, "&sortingParam=").concat(this.sortingParam, "&orderBy=").concat(this.orderBy), lateClients).subscribe({
        next: function next(data) {
          _this2.reset();

          _this2.clients = data["result"]; // console.log(this.clients);

          _this2.resultsCount = data["count"]; // this.sortDistance();
          // this.success("تم اضافة طلب القرض بنجاح");

          _this2.showLoader = false;
        },
        error: function error(err) {
          console.log(err.error); // this.fail(err.error);

          _this2.showLoader = false;
        }
      });
    } // async getDistance(clientlat, clientLong) {
    //   await this.getOfficerLocation();
    //   if (clientlat && clientLong != null) {
    //     this.dlat = this.deg2rad(this.OfficerLat - clientlat);
    //     this.dlong = this.deg2rad(this.OfficerLong - clientLong);
    //     // console.log(this.dlat, this.dlong);
    //     // console.log(clientlat, clientLong);
    //     console.log(this.OfficerLat, this.OfficerLong);
    //     let ans =
    //       Math.sin(this.dlat / 2) * Math.sin(this.dlat / 2) +
    //       Math.cos(this.deg2rad(this.OfficerLat)) *
    //         Math.cos(this.deg2rad(clientlat)) *
    //         Math.sin(this.dlong / 2) *
    //         Math.sin(this.dlong / 2);
    //     var c = 2 * Math.atan2(Math.sqrt(ans), Math.sqrt(1 - ans));
    //     var distance = this.Radius * c;
    //     // console.log(distance);
    //     return distance.toFixed(2);
    //   } else {
    //     return "غير معروفة";
    //   }
    // }
    // sortDistance() {
    //   this.clients.forEach(async (client) => {
    //     var distance = await this.getDistance(client.home_Lat, client.home_Long);
    //     var clientName = client.client_name;
    //     var home_Lat = client.home_Lat;
    //     var home_Long = client.home_Long;
    //     var late_days = client.late_days;
    //     var inst_am = client.inst_am;
    //     this.clientDistance.push({
    //       clientName,
    //       distance,
    //       home_Lat,
    //       home_Long,
    //       late_days,
    //       inst_am,
    //     });
    //     // this.clientDistance.sort((n1, n2) => {
    //     //   if (n1.distance > n2.distance) {
    //     //     return 1;
    //     //   }
    //     //   if (n1.distance < n2.distance) {
    //     //     return -1;
    //     //   }
    //     //   return 0;
    //     // });
    //   });
    //   // console.log(this.clientDistance,"dd")
    // }

  }, {
    key: "sortByDistance",
    value: function sortByDistance() {
      this.sortingParam = "distance";
      this.orderBy = !this.orderBy;
      this.GetLateClients();
    }
  }, {
    key: "sortByAmount",
    value: function sortByAmount() {
      this.sortingParam = "inst_am";
      this.orderBy = !this.orderBy;
      this.GetLateClients();
    }
  }, {
    key: "sortByInstMatDate",
    value: function sortByInstMatDate() {
      this.sortingParam = "inst_mat_date";
      this.orderBy = !this.orderBy;
      this.GetLateClients();
    }
  }, {
    key: "sortByLateDays",
    value: function sortByLateDays() {
      this.sortingParam = "late_days";
      this.orderBy = !this.orderBy;
      this.GetLateClients(); // this.clientDistance.sort((n1, n2) => {
      //   if (this.sortedByLateDays) {
      //     if (n1.late_days < n2.late_days) {
      //       return 1;
      //     }
      //     if (n1.late_days > n2.late_days) {
      //       return -1;
      //     }
      //   } else if (!this.sortedByLateDays) {
      //     if (n1.late_days > n2.late_days) {
      //       return 1;
      //     }
      //     if (n1.late_days < n2.late_days) {
      //       return -1;
      //     }
      //   }
      //   return 0;
      // });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.clientDistance = [];
      this.clients = [];
    }
  }, {
    key: "changePage",
    value: function changePage(newPage) {
      this.page = newPage;
    }
  }, {
    key: "presentToast",
    value: function presentToast(header, message) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var toast;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.toastController.create({
                  header: header,
                  message: message,
                  cssClass: "toast-primary",
                  duration: 2000,
                  position: "bottom"
                });

              case 2:
                toast = _context5.sent;
                _context5.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "CleanDateTime",
    value: function CleanDateTime(input) {
      var result = input.replace("T", " ");
      var split = result.split(" ");
      var secondsCleaned = split[1].split(".");
      var date = result.replace(secondsCleaned[0], " ");
      return date;
    }
  }]);

  return lateclienttrackerPage;
}();

lateclienttrackerPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController
  }, {
    type: src_app_core_services_location_service__WEBPACK_IMPORTED_MODULE_6__.LocationService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_8__.AlertService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__.MohassilAuthService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_9__.pagingService
  }];
};

lateclienttrackerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: "app-late-clients-tracker",
  template: _late_clients_tracker_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_late_clients_tracker_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], lateclienttrackerPage);


/***/ }),

/***/ 62710:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/officer/late-clients-tracker/late-clients-tracker.page.scss?ngResource ***!
  \****************************************************************************************************/
/***/ (function(module) {

module.exports = ".table tbody th,\n.table tbody td {\n  padding: 0.4rem 0.9375rem !important;\n}\n\n.labelpad {\n  padding-bottom: 55px;\n}\n\n@media (min-width: 770px) {\n  .btnMar {\n    margin-right: 290%;\n    font-size: medium;\n  }\n}\n\n.checkBoxs {\n  margin-right: 1.5rem;\n}\n\n.form-control-error {\n  border-color: #ff3366;\n}\n\n.form-control-error:hover {\n  border-color: #da0036;\n}\n\n.input-validator {\n  font-weight: 600;\n  padding-right: 10px;\n  padding-left: 10px;\n  color: #ff3366 !important;\n}\n\n.input-validator::before {\n  content: \"-\";\n  margin-left: 6px;\n}\n\n.form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.checkBox-isactive {\n  -ms-flex-align: end;\n      align-items: flex-end;\n}\n\n.group-title {\n  font-weight: 700;\n  font-size: 1.2rem;\n  text-align: center;\n  padding: 10px 20px;\n  margin-bottom: 20px;\n  border-radius: 6px;\n  background-image: linear-gradient(to left, rgba(112, 123, 245, 0.2), var(--card-bg));\n  border-color: #c8cbea;\n  color: var(--body-color);\n}\n\n.nested-form {\n  border: 2px solid rgba(112, 123, 245, 0.2);\n  border-radius: 5px;\n  padding: 1rem 2rem;\n}\n\n.form-group-title {\n  display: block;\n  color: var(--theme-color-primary);\n  font-weight: 700;\n}\n\n.alert-button-confirm {\n  color: var(--body-color);\n}\n\n.sortingCol {\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhdGUtY2xpZW50cy10cmFja2VyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXG9mZmljZXJcXGxhdGUtY2xpZW50cy10cmFja2VyXFxsYXRlLWNsaWVudHMtdHJhY2tlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7O0VBRUUsb0NBQUE7QUNGTjs7QURPQTtFQUNFLG9CQUFBO0FDSkY7O0FEV0E7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7RUNSRjtBQUNGOztBRFdBO0VBQ0Usb0JBQUE7QUNURjs7QURZQTtFQUNFLHFCQUFBO0FDVEY7O0FEV0U7RUFDRSxxQkFBQTtBQ1RKOztBRGFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNWRjs7QURZRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ1ZKOztBRGVFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDWko7O0FEZ0JBO0VBRUUsbUJBQUE7TUFBQSxxQkFBQTtBQ2RGOztBRGlCQTtFQUdFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUdBLG9GQUFBO0VBR0EscUJBQUE7RUFDQSx3QkFBQTtBQ3BCRjs7QUR1QkE7RUFHRSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUN0QkY7O0FEeUJBO0VBQ0Usd0JBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsV0FBQTtBQ3RCRiIsImZpbGUiOiJsYXRlLWNsaWVudHMtdHJhY2tlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gIHRib2R5IHtcclxuXHJcbiAgICB0aCxcclxuICAgIHRkIHtcclxuICAgICAgcGFkZGluZzogMC40cmVtIDAuOTM3NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxhYmVscGFkIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcclxufVxyXG5cclxuLy8gaW9uLWJ1dHRvbiB7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbi8vICAgcGFkZGluZy1yaWdodDogMjAlO1xyXG4vLyAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NzBweCkge1xyXG4gIC5idG5NYXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyOTAlO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgfVxyXG59XHJcblxyXG4uY2hlY2tCb3hzIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1lcnJvciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTgsIDAsIDU0KTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dC12YWxpZGF0b3Ige1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIi1cIjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1yZXF1aXJlZCB7XHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIqXCI7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgNTEsIDEwMikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jaGVja0JveC1pc2FjdGl2ZSB7XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5ncm91cC10aXRsZSB7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjNDVjY2IxLCAwLjgpO1xyXG4gIC8vIGNvbG9yOiAjZjZmY2VmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNhNGQ0OTEsIDAuMyk7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2M4Y2JlYTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCxcclxuICAgICAgcmdiYSgjNzA3YmY1LCAwLjIpLFxyXG4gICAgICB2YXIoLS1jYXJkLWJnKSk7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYzhjYmVhO1xyXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxufVxyXG5cclxuLm5lc3RlZC1mb3JtIHtcclxuICAvLyBib3JkZXItcmlnaHQ6IDAuMnJlbSBzb2xpZCByZ2JhKCM3MDdiZjUsIDAuMik7XHJcbiAgLy8gcGFkZGluZy1yaWdodDogMXJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKCM3MDdiZjUsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvci1wcmltYXJ5KTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYWxlcnQtYnV0dG9uLWNvbmZpcm0ge1xyXG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxufVxyXG5cclxuLnNvcnRpbmdDb2x7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn0iLCIudGFibGUgdGJvZHkgdGgsXG4udGFibGUgdGJvZHkgdGQge1xuICBwYWRkaW5nOiAwLjRyZW0gMC45Mzc1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5sYWJlbHBhZCB7XG4gIHBhZGRpbmctYm90dG9tOiA1NXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzcwcHgpIHtcbiAgLmJ0bk1hciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyOTAlO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB9XG59XG4uY2hlY2tCb3hzIHtcbiAgbWFyZ2luLXJpZ2h0OiAxLjVyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wtZXJyb3Ige1xuICBib3JkZXItY29sb3I6ICNmZjMzNjY7XG59XG4uZm9ybS1jb250cm9sLWVycm9yOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZGEwMDM2O1xufVxuXG4uaW5wdXQtdmFsaWRhdG9yIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufVxuLmlucHV0LXZhbGlkYXRvcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCItXCI7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG59XG5cbi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufVxuXG4uY2hlY2tCb3gtaXNhY3RpdmUge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5ncm91cC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgxMTIsIDEyMywgMjQ1LCAwLjIpLCB2YXIoLS1jYXJkLWJnKSk7XG4gIGJvcmRlci1jb2xvcjogI2M4Y2JlYTtcbiAgY29sb3I6IHZhcigtLWJvZHktY29sb3IpO1xufVxuXG4ubmVzdGVkLWZvcm0ge1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDExMiwgMTIzLCAyNDUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXJlbSAycmVtO1xufVxuXG4uZm9ybS1ncm91cC10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5hbGVydC1idXR0b24tY29uZmlybSB7XG4gIGNvbG9yOiB2YXIoLS1ib2R5LWNvbG9yKTtcbn1cblxuLnNvcnRpbmdDb2wge1xuICB3aWR0aDogNTBweDtcbn0iXX0= */";

/***/ }),

/***/ 96209:
/*!****************************************************************************************************!*\
  !*** ./src/app/views/pages/officer/late-clients-tracker/late-clients-tracker.page.html?ngResource ***!
  \****************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\r\n\r\n<div\r\n  class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\"\r\n>\r\n  <div>\r\n    <h4 class=\"mr-1 mb-md-0\">العملاء المتأخرين</h4>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 grid-margin\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <!-- <div class=\"d-flex justify-content-center mt-2\">\r\n          <ion-button\r\n                id=\"popover-button\"\r\n                color=\"success\"\r\n              >\r\n                <ion-icon name=\"funnel-outline\"></ion-icon>\r\n                إعدادات البحث\r\n              </ion-button>\r\n        \r\n              <ion-popover trigger=\"popover-button\" [dismissOnSelect]=\"true\">\r\n              <ng-template>\r\n                <ion-content>\r\n                  <ion-list>\r\n                    <ion-item [button]=\"true\" (click)=\"sortByDistance()\" [detail]=\"false\">ترتيب بالاقرب</ion-item>\r\n                    <ion-item [button]=\"true\" (click)=\"sortByAmount()\" [detail]=\"false\">ترتيب باكبر مبلغ</ion-item>\r\n                    <ion-item [button]=\"true\" (click)=\"sortByLateDays()\" [detail]=\"false\">ترتيب باكبر عدد ايام تأخير</ion-item>\r\n                  </ion-list>\r\n                </ion-content>\r\n              </ng-template>\r\n              </ion-popover>\r\n        </div> -->\r\n        <!-- <div class=\"row\"> -->\r\n          <!-- <form [formGroup]=\"lateClientsForm\">\r\n      <div class=\"col-12\">\r\n        <div class=\"form-group\">\r\n          <ion-label class=\"form-label\">\r\n            الى تاريخ \r\n          </ion-label>\r\n          <datepicker\r\n                [(date)]=\"endDate\"\r\n                pickerId=\"endDate\"\r\n                [parentForm]=\"lateClientsForm\"\r\n                parentFormControllerName=\"endDate\"\r\n              ></datepicker>\r\n        </div>\r\n      </div>\r\n      \r\n    </form> -->\r\n          <!-- <div class=\"row\">\r\n            <div class=\"d-flex justify-content-center mt-2\">\r\n              <ion-button\r\n                color=\"success\"\r\n                (click)=\"sortByDistance()\"\r\n                type=\"submit\"\r\n              >\r\n                <ion-icon name=\"funnel-outline\"></ion-icon>\r\n                إعدادات البحث\r\n              </ion-button>\r\n            </div>\r\n              <div class=\"d-flex justify-content-center mt-2\">\r\n              <ion-button\r\n                color=\"success\"\r\n                (click)=\"sortByAmount()\"\r\n                type=\"submit\"\r\n                >ييس</ion-button\r\n              >\r\n            </div>\r\n            <div class=\"d-flex justify-content-center mt-2\">\r\n              <ion-button\r\n                color=\"success\"\r\n                (click)=\"sortByLateDays()\"\r\n                type=\"submit\"\r\n                >ssasa</ion-button\r\n              >\r\n            </div>\r\n          </div> -->\r\n        <!-- </div> -->\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"card-body\">\r\n          <div class=\"form-group\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"text-center sortingCol\"><ion-icon color=\"success\" name=\"swap-vertical-outline\"></ion-icon></th>\r\n                    <th class=\"text-center\">اسم العميل</th>\r\n                    <th class=\"text-center\" (click)=\"sortByDistance()\">المسافة (كم)<ion-icon color=\"success\" *ngIf=\"orderBy && sortingParam == 'distance' && resultsCount != 0\" name=\"arrow-down-outline\"></ion-icon> <ion-icon color=\"success\" *ngIf=\"!orderBy && sortingParam == 'distance' && resultsCount != 0\" name=\"arrow-up-outline\"></ion-icon> </th>\r\n                    <th class=\"text-center\" (click)=\"sortByAmount()\">المبلغ <ion-icon color=\"success\" *ngIf=\"!orderBy && sortingParam == 'inst_am' && resultsCount != 0\" name=\"arrow-up-outline\"></ion-icon> <ion-icon color=\"success\" *ngIf=\"orderBy && sortingParam == 'inst_am' && resultsCount != 0\" name=\"arrow-down-outline\"></ion-icon> </th>\r\n                    <th class=\"text-center\" (click)=\"sortByLateDays()\">ايام التاخير <ion-icon color=\"success\" *ngIf=\"!orderBy && sortingParam == 'late_days' && resultsCount != 0\" name=\"arrow-up-outline\"></ion-icon> <ion-icon color=\"success\" *ngIf=\"orderBy && sortingParam == 'late_days' && resultsCount != 0\" name=\"arrow-down-outline\"></ion-icon> </th>\r\n                    <th class=\"text-center\" (click)=\"sortByInstMatDate()\">تاريخ الستحقاق <ion-icon color=\"success\" *ngIf=\"!orderBy && sortingParam == 'inst_mat_date' && resultsCount != 0\" name=\"arrow-up-outline\"></ion-icon> <ion-icon color=\"success\" *ngIf=\"orderBy && sortingParam == 'inst_mat_date' && resultsCount != 0\" name=\"arrow-down-outline\"></ion-icon></th>\r\n                    <th class=\"text-center\"></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let client of clients\">\r\n                    <td class=\"text-center sortingCol\"></td>\r\n                    <td class=\"text-center\">{{ client.client_name }}</td>\r\n                    <td class=\"text-center\">{{ client.distance }}</td>\r\n                    <td class=\"text-center\">{{ client.inst_am }}</td>\r\n                    <td class=\"text-center\">{{ client.late_days }}</td>\r\n                    <td class=\"text-center\">{{ CleanDateTime(client.inst_mat_date) }}</td>\r\n                    <td class=\"text-center\">\r\n                      <ion-button\r\n                        color=\"success\"\r\n                        (click)=\"showHomeLocation(client.home_Lat, client.home_Long)\"\r\n                        ><ion-icon name=\"location-sharp\"></ion-icon>\r\n                      </ion-button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <div *ngIf=\"resultsCount == 0\" class=\"text-center\"> \r\n                <h4 >لا يوجد عملاء</h4>\r\n              </div>\r\n              <app-pagination\r\n                [page]=\"page\"\r\n                [collectionSize]=\"resultsCount\"\r\n                (pageChange)=\"changePage($event); GetLateClients();\"\r\n              ></app-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_officer_late-clients-tracker_late-clients-tracker_module_ts.js.map