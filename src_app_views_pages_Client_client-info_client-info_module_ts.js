"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_Client_client-info_client-info_module_ts"],{

/***/ 85618:
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/Client/client-info/client-info-routing.module.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientInfoPageRoutingModule": function() { return /* binding */ ClientInfoPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _client_info_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-info.page */ 10443);






var routes = [{
  path: '',
  component: _client_info_page__WEBPACK_IMPORTED_MODULE_2__.ClientInfoPage
}];

var ClientInfoPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ClientInfoPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientInfoPageRoutingModule);
});

ClientInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ClientInfoPageRoutingModule);


/***/ }),

/***/ 18751:
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/Client/client-info/client-info.module.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientInfoPageModule": function() { return /* binding */ ClientInfoPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _client_info_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client-info-routing.module */ 85618);
/* harmony import */ var _client_info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-info.page */ 10443);










var ClientInfoPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ClientInfoPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ClientInfoPageModule);
});

ClientInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _client_info_routing_module__WEBPACK_IMPORTED_MODULE_2__.ClientInfoPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule],
  declarations: [_client_info_page__WEBPACK_IMPORTED_MODULE_3__.ClientInfoPage]
})], ClientInfoPageModule);


/***/ }),

/***/ 10443:
/*!********************************************************************!*\
  !*** ./src/app/views/pages/Client/client-info/client-info.page.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientInfoPage": function() { return /* binding */ ClientInfoPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _client_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-info.page.html?ngResource */ 27982);
/* harmony import */ var _client_info_page_css_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client-info.page.css?ngResource */ 8409);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);













var ClientInfoPage = /*#__PURE__*/function () {
  function ClientInfoPage(formBuilder, http, env, authService, datepipe) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ClientInfoPage);

    this.formBuilder = formBuilder;
    this.http = http;
    this.env = env;
    this.authService = authService;
    this.datepipe = datepipe;
    this.clientInfoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      client_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
      nation_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
      gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
      birth_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
      marital_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
      client_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
      id_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
      edu_level: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
      gov: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
      vill: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
      dist: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
      home_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
      mobile_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
      mobile_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl()
    }); //notFound: string = "لا يوجد";

    this.client_info = [{
      client_key: "190020021947",
      client_name: "Bishoy",
      birth_date: "1991-08-09 12:00:00 AM",
      nation_id: "29108090202812",
      id_date: "2021-03-01 12:00:00 AM",
      marital_status: "اعزب",
      client_type: "فردى",
      edu_level: "بكالوريوس",
      gov: "القاهرة",
      dist: "قسم الساحل",
      vill: "الساحل",
      gender: "ذكر",
      mobile_1: "01284000076",
      mobile_2: null,
      home_Add_1: "14ب شارع مصنع السماد",
      email_1: "bishoysamy@pm.me"
    }];
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ClientInfoPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.authService.getUserInfo().then(function (userInfo) {
                  _this.branch_code_user_info = userInfo.branch_code;
                  _this.org_code_user_info = userInfo.org_code;
                });

              case 2:
                _context.next = 4;
                return this.getData();

              case 4:
                this.clientInfoForm.setValue({
                  client_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.client_name).value,
                  nation_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.nation_id).value,
                  gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.gender).value,
                  birth_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.birth_date).value,
                  marital_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.marital_status).value,
                  client_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.client_type).value,
                  id_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.id_date).value,
                  edu_level: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.edu_level).value,
                  gov: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.gov).value,
                  vill: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.vill).value,
                  dist: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.dist).value,
                  home_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.home_address).value,
                  mobile_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.mobile_1).value,
                  mobile_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.mobile_2).value,
                  email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.email).value
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "getData",
    value: function getData() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var birthString, subbirthString, idDateString, subidDateString;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.client_name = this.client_info[0].client_name;
                this.client_type = this.client_info[0].client_type;
                birthString = this.client_info[0].birth_date;
                subbirthString = birthString.split(" ");
                this.birth_date = subbirthString[0];
                this.nation_id = this.client_info[0].nation_id;
                this.gender = this.client_info[0].gender;
                this.marital_status = this.client_info[0].marital_status;
                idDateString = this.client_info[0].id_date;
                subidDateString = idDateString.split(" ");
                this.id_date = subidDateString[0];
                this.edu_level = this.client_info[0].edu_level;
                this.gov = this.client_info[0].gov;
                this.dist = this.client_info[0].dist;
                this.vill = this.client_info[0].vill;
                this.home_address = this.client_info[0].home_Add_1;
                this.mobile_1 = this.client_info[0].mobile_1;
                this.mobile_2 = this.client_info[0].mobile_2;
                this.email = this.client_info[0].email_1;

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }]);

  return ClientInfoPage;
}();

ClientInfoPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe
  }];
};

ClientInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: "app-client-info",
  template: _client_info_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_client_info_page_css_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], ClientInfoPage);


/***/ }),

/***/ 8409:
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/Client/client-info/client-info.page.css?ngResource ***!
  \********************************************************************************/
/***/ (function(module) {

module.exports = "ion-input [readonly] {\r\n  background-color: transparent !important;\r\n  color: black !important;\r\n}\r\n\r\n.divCenter{\r\n  justify-items: center;\r\n  text-align: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1pbmZvLnBhZ2UuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQXdDO0VBQ3hDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIiLCJmaWxlIjoiY2xpZW50LWluZm8ucGFnZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taW5wdXQgW3JlYWRvbmx5XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpdkNlbnRlcntcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 27982:
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/Client/client-info/client-info.page.html?ngResource ***!
  \*********************************************************************************/
/***/ (function(module) {

module.exports = "<form [formGroup]=\"clientInfoForm\">\n\n  <div class=\"card\">\n\n    <div class=\"card-body\">\n      <div class=\"divCenter\">\n        <h4><b>بيانات العميل</b></h4>\n        <div class=\"faded-line\"></div>\n      </div>\n\n      <br />\n\n      <div class=\"row \">\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label \">\n              الاسم بالكامل\n            </ion-label>\n            <!-- <ion-label class=\"form-control\">{{client_name? client_name : notFound}}</ion-label> -->\n            <ion-input type=\"text\" class=\"form-control\" placeholder=\"اسم العميل\" [readonly]=\"true\"\n              formControlName=\"client_name\"></ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label \">\n              الرقم القومي\n            </ion-label>\n            <!-- <ion-label class=\"form-control\">{{nation_id? nation_id : notFound}}</ion-label> -->\n            <ion-input type=\"text\" class=\"form-control\" placeholder=\"الرقم القومي\" [readonly]=\"true\"\n              formControlName=\"nation_id\"></ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label \">\n              النوع\n            </ion-label>\n            <!-- <ion-label class=\"form-control\">{{gender? gender : notFound}}</ion-label> -->\n            <ion-input type=\"text\" class=\"form-control\" placeholder=\"النوع\" [readonly]=\"true\"\n              formControlName=\"gender\"></ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label \">\n              حالة العميل\n            </ion-label>\n            <!-- <ion-label class=\"form-control\">{{client_type? client_type : notFound}}</ion-label> -->\n            <ion-input type=\"text\" class=\"form-control\" placeholder=\"حالة العميل\" [readonly]=\"true\"\n              formControlName=\"client_type\"></ion-input>\n          </div>\n        </div>\n\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"col-12 col-md-4\">\n          <ion-label class=\"form-label \">\n            تاريخ الميلاد\n          </ion-label>\n          <!-- <ion-label class=\"form-control\">{{birth_date? birth_date : notFound}}</ion-label> -->\n          <ion-input type=\"text\" class=\"form-control\" placeholder=\"تاريخ الميلاد\" [readonly]=\"true\"\n            formControlName=\"birth_date\"></ion-input>\n        </div>\n\n        <div class=\"col-12 col-md-4\">\n          <ion-label class=\"form-label \">\n            تاريخ اصدار البطاقة\n          </ion-label>\n          <!-- <ion-label class=\"form-control\">{{id_date? id_date : notFound}}</ion-label> -->\n          <ion-input type=\"text\" class=\"form-control\" placeholder=\"تاريخ اصدار البطاقة\" [readonly]=\"true\"\n            formControlName=\"id_date\"></ion-input>\n        </div>\n\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label \">\n              الحالة الاجتماعية\n            </ion-label>\n            <!-- <ion-label class=\"form-control\">{{marital_status? marital_status : notFound}}</ion-label> -->\n            <ion-input type=\"text\" class=\"form-control\" placeholder=\"الحالة الاجتماعية\" [readonly]=\"true\"\n              formControlName=\"marital_status\"></ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label \">\n              المؤهل الدراسي\n            </ion-label>\n            <!-- <ion-label class=\"form-control\">{{edu_level? edu_level : notFound}}</ion-label> -->\n            <ion-input type=\"text\" class=\"form-control\" placeholder=\"المؤهل الدراسي\" [readonly]=\"true\"\n              formControlName=\"edu_level\"></ion-input>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-12 col-md-6\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label \">\n              العنوان\n            </ion-label>\n            <!-- <ion-label class=\"form-control\">{{home_address? home_address : notFound}}</ion-label> -->\n            <ion-input type=\"text\" class=\"form-control\" placeholder=\"العنوان\" [readonly]=\"true\"\n              formControlName=\"home_address\"></ion-input>\n          </div>\n        </div>\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label \">\n              المحافظة\n            </ion-label>\n            <!-- <ion-label class=\"form-control\">{{gov? gov : notFound}}</ion-label> -->\n            <ion-input type=\"text\" class=\"form-control\" placeholder=\"المحافظة\" [readonly]=\"true\"\n              formControlName=\"gov\"></ion-input>\n          </div>\n        </div>\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label \">\n              المركز\n            </ion-label>\n            <!-- <ion-label class=\"form-control\">{{dist? dist : notFound}}</ion-label> -->\n            <ion-input type=\"text\" class=\"form-control\" placeholder=\"المركز\" [readonly]=\"true\"\n              formControlName=\"dist\"></ion-input>\n          </div>\n        </div>\n        <div class=\"col-6 col-md-2\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label \">\n              القرية\n            </ion-label>\n            <!-- <ion-label class=\"form-control\">{{vil? vil : notFound}}</ion-label> -->\n            <ion-input type=\"text\" class=\"form-control\" placeholder=\"القرية\" [readonly]=\"true\"\n              formControlName=\"vill\"></ion-input>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-6 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label \">\n              المحمول\n            </ion-label>\n            <!-- <ion-label class=\"form-control\">{{mobile_1? mobile_1 : notFound}}</ion-label> -->\n            <ion-input type=\"text\" class=\"form-control\" placeholder=\"المحمول\" [readonly]=\"true\"\n              formControlName=\"mobile_1\"></ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label \">\n              المحمول 2\n            </ion-label>\n            <!-- <ion-label class=\"form-control\">{{mobile_2? mobile_2 : notFound}}</ion-label> -->\n            <ion-input type=\"text\" class=\"form-control\" placeholder=\"المحمول 2\" [readonly]=\"true\"\n              formControlName=\"mobile_2\"></ion-input>\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-4\">\n          <div class=\"form-group\">\n            <ion-label class=\"form-label\">\n              البريد الالكتروني\n            </ion-label>\n            <!-- <ion-label class=\"form-control\">{{email? email : notFound}}</ion-label> -->\n            <ion-input type=\"text\" class=\"form-control\" [readonly]=\"true\" placeholder=\"البريد الالكتروني\"\n              formControlName=\"email\"></ion-input>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</form>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_Client_client-info_client-info_module_ts.js.map