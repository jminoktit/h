"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_head-office_labor-sector-manage_labor-sector-manage_module_ts"],{

/***/ 96845:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/labor-sector-manage/labor-sector-manage-routing.module.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaborSectorManagePageRoutingModule": function() { return /* binding */ LaborSectorManagePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _labor_sector_manage_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./labor-sector-manage.page */ 24360);






var routes = [{
  path: '',
  component: _labor_sector_manage_page__WEBPACK_IMPORTED_MODULE_2__.LaborSectorManagePage
}];

var LaborSectorManagePageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LaborSectorManagePageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LaborSectorManagePageRoutingModule);
});

LaborSectorManagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LaborSectorManagePageRoutingModule);


/***/ }),

/***/ 74074:
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/labor-sector-manage/labor-sector-manage.module.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaborSectorManagePageModule": function() { return /* binding */ LaborSectorManagePageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _labor_sector_manage_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./labor-sector-manage-routing.module */ 96845);
/* harmony import */ var _labor_sector_manage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./labor-sector-manage.page */ 24360);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var LaborSectorManagePageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function LaborSectorManagePageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LaborSectorManagePageModule);
});

LaborSectorManagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _labor_sector_manage_routing_module__WEBPACK_IMPORTED_MODULE_2__.LaborSectorManagePageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_labor_sector_manage_page__WEBPACK_IMPORTED_MODULE_3__.LaborSectorManagePage]
})], LaborSectorManagePageModule);


/***/ }),

/***/ 24360:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/labor-sector-manage/labor-sector-manage.page.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LaborSectorManagePage": function() { return /* binding */ LaborSectorManagePage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _labor_sector_manage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./labor-sector-manage.page.html?ngResource */ 29585);
/* harmony import */ var _labor_sector_manage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./labor-sector-manage.page.scss?ngResource */ 24536);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/sorting.service */ 51713);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);

















var LaborSectorManagePage = /*#__PURE__*/function () {
  function LaborSectorManagePage(formBuilder, http, alertController, env, authService, sortingService, alertServices, translate, ReferencesService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LaborSectorManagePage);

    this.formBuilder = formBuilder;
    this.http = http;
    this.alertController = alertController;
    this.env = env;
    this.authService = authService;
    this.sortingService = sortingService;
    this.alertServices = alertServices;
    this.translate = translate;
    this.ReferencesService = ReferencesService;
    this.showLoader = false;
    this.isInserting = false;
    this.isEditing = false;
    this.isSubmitted = false;
    this.hasSupervisor = false;
    this.laborForm = this.formBuilder.group({
      tree_code: [""],
      tree_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
      active_rec: [""]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LaborSectorManagePage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.GetBsDiv1();
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
    key: "GetBsDiv1",
    value: function GetBsDiv1() {
      var _this = this;

      this.showLoader = true;
      this.http.get(this.env.API_URL + "api/Business/GetBusinessDivisions").subscribe({
        next: function next(bs_divs_1) {
          _this.TreeNodes = bs_divs_1.map(function (bs_div_1) {
            return {
              data: {
                org_code: bs_div_1.org_code,
                node_code: parseInt(bs_div_1.bs_div_1_code),
                active_rec: bs_div_1.active_rec,
                parent_id: null
              },
              text: bs_div_1.bs_div_1_name,
              collapsed: true,
              canEdit: true,
              canDelete: true,
              canAdd: true,
              canSelect: false,
              initialized: false
            };
          });

          _this.http.get(_this.env.API_URL + "api/Business/GetBusinessActivityTypes").subscribe({
            next: function next(bs_divs_2) {
              _this.TreeNodes = _this.TreeNodes.map(function (treeNode) {
                return Object.assign(Object.assign({}, treeNode), {
                  children: bs_divs_2.filter(function (bs_div_2) {
                    return treeNode.data.node_code == parseInt(bs_div_2.bs_div_1_code);
                  }).map(function (bs_div_2) {
                    return {
                      data: {
                        org_code: bs_div_2.org_code,
                        node_code: parseInt(bs_div_2.bs_div_2_code),
                        active_rec: bs_div_2.active_rec,
                        parent_id: parseInt(bs_div_2.bs_div_1_code)
                      },
                      text: bs_div_2.bs_div_2_name,
                      collapsed: true,
                      canEdit: true,
                      canDelete: true,
                      canAdd: true,
                      canSelect: false,
                      initialized: false
                    };
                  })
                });
              });

              _this.http.get(_this.env.API_URL + "api/Business/GetBusinessSpecialities").subscribe({
                next: function next(bs_divs_3) {
                  _this.TreeNodes = _this.TreeNodes.map(function (treeNode) {
                    var _a;

                    return Object.assign(Object.assign({}, treeNode), {
                      children: (_a = treeNode.children) === null || _a === void 0 ? void 0 : _a.map(function (child) {
                        return Object.assign(Object.assign({}, child), {
                          children: bs_divs_3.filter(function (bs_div_3) {
                            return child.data.node_code == parseInt(bs_div_3.bs_div_2_code) && treeNode.data.node_code == parseInt(bs_div_3.bs_div_1_code);
                          }).map(function (bs_div_3) {
                            return {
                              data: {
                                org_code: bs_div_3.org_code,
                                node_code: parseInt(bs_div_3.bs_div_3_code),
                                active_rec: bs_div_3.active_rec,
                                parent_id: parseInt(bs_div_3.bs_div_2_code)
                              },
                              text: bs_div_3.bs_div_3_name,
                              collapsed: true,
                              canEdit: true,
                              canDelete: true,
                              canAdd: false,
                              canSelect: false,
                              initialized: false
                            };
                          })
                        });
                      })
                    });
                  });
                  _this.showLoader = false;
                }
              });
            }
          });
        }
      });
    }
  }, {
    key: "Edit",
    value: function Edit(node) {
      this.hasSupervisor = false;
      this.currentTreeNode = node;

      if (node.data.parent_id == null && node.children) {
        this.GetBsDivByID(node.data.node_code, true);
      }

      if (node.data.parent_id != null && node.children) {
        this.GetBsDiv2ByID(node.data.parent_id, node.data.node_code, true);
      }

      if (node.data.parent_id != null && !node.children) {
        var rootNode = this.TreeNodes.find(function (rootNode) {
          var _a;

          return (_a = rootNode.children) === null || _a === void 0 ? void 0 : _a.find(function (nestedNodes) {
            return nestedNodes.data.node_code == node.data.parent_id;
          });
        });
        this.GetBsDiv3ByID(rootNode.data.node_code, node.data.parent_id, node.data.node_code, true);
      }
    }
  }, {
    key: "Delete",
    value: function Delete(node) {
      if (node.data.parent_id == null && node.children) {
        this.GetBsDivByIDDelete(node.data.node_code);
      }

      if (node.data.parent_id != null && node.children) {
        this.GetBsDiv2ByIDDelete(node.data.parent_id, node.data.node_code);
      }

      if (node.data.parent_id != null && !node.children) {
        var rootNode = this.TreeNodes.find(function (rootNode) {
          var _a;

          return (_a = rootNode.children) === null || _a === void 0 ? void 0 : _a.find(function (nestedNodes) {
            return nestedNodes.data.node_code == node.data.parent_id;
          });
        });
        this.GetBsDiv3ByIDDelete(rootNode.data.node_code, node.data.parent_id, node.data.node_code);
      }
    }
  }, {
    key: "Add",
    value: function Add(node) {
      this.currentTreeNode = node;

      if (node.data.parent_id == null && node.children) {
        this.GetBsDiv1Insert(node.data.node_code, true);
      }

      if (node.data.parent_id != null && node.children) {
        this.GetBsDiv2Insert(node.data.parent_id, node.data.node_code, true);
      }

      this.isInserting = this.isInserting;
      this.showLoader = false;
      this.hasSupervisor = true;
    }
  }, {
    key: "BsDivInsert",
    value: function BsDivInsert() {
      this.isInserting = true;
      this.showLoader = false;
      this.laborForm.patchValue({
        tree_name: "",
        tree_code: "",
        active_rec: 0
      });
    }
  }, {
    key: "GetBsDiv1Insert",
    value: function GetBsDiv1Insert(bs_div_1_code, isInserting) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isInserting) this.BsDiv1Insert(bs_div_1_code);
                this.isInserting = isInserting;
                this.showLoader = false;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "BsDiv1Insert",
    value: function BsDiv1Insert(bs_div_1_code) {
      this.laborForm.patchValue({
        tree_name: " ",
        tree_code: bs_div_1_code,
        active_rec: 0
      });
    }
  }, {
    key: "GetBsDiv2Insert",
    value: function GetBsDiv2Insert(bs_div_1_code, bs_div_2_code, isInserting) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (isInserting) this.BsDiv2Insert(bs_div_1_code, bs_div_2_code);
                this.isInserting = isInserting;
                this.showLoader = false;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "BsDiv2Insert",
    value: function BsDiv2Insert(bs_div_1_code, bs_div_2_code) {
      this.laborForm.patchValue({
        tree_name: " ",
        tree_code: bs_div_1_code,
        active_rec: 0,
        parent_id: bs_div_2_code
      });
    }
  }, {
    key: "GetBsDivByID",
    value: function GetBsDivByID(bs_div_1_code, isEditing) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.http.get("".concat(this.env.API_URL, "api/Business/GetBusinessDivisionsByCode?bs_div_1_code=").concat(bs_div_1_code)).subscribe({
                  next: function next(data) {
                    _this2.BsDivInfo = data;
                    if (isEditing) _this2.patchDataValue();
                    _this2.isEditing = isEditing;
                    _this2.showLoader = false;
                  },
                  error: function error(err) {
                    console.log(err);
                    _this2.showLoader = false;
                  }
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "GetBsDiv2ByID",
    value: function GetBsDiv2ByID(bs_div_1_code, bs_div_2_code, isEditing) {
      var _this3 = this;

      this.http.get("".concat(this.env.API_URL, "api/Business/GetBusinessActivityTypesByCode?bs_div_1_code=").concat(bs_div_1_code, "&bs_div_2_code=").concat(bs_div_2_code)).subscribe({
        next: function next(data) {
          _this3.BsDivInfo = data;
          if (isEditing) _this3.GetAllSupervisors();
          _this3.isEditing = isEditing;
          _this3.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this3.showLoader = false;
        }
      });
    }
  }, {
    key: "GetBsDiv3ByID",
    value: function GetBsDiv3ByID(bs_div_1_code, bs_div_2_code, bs_div_3_code, isEditing) {
      var _this4 = this;

      this.http.get("".concat(this.env.API_URL, "api/Business/GetBusinessSpecialitiesByCode?bs_div_1_code=").concat(bs_div_1_code, "&bs_div_2_code=").concat(bs_div_2_code, "&bs_div_3_code=").concat(bs_div_3_code)).subscribe({
        next: function next(data) {
          _this4.BsDivInfo = data;
          if (isEditing) _this4.GetAllChild();
          _this4.isEditing = isEditing;
          _this4.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this4.showLoader = false;
        }
      });
    }
  }, {
    key: "patchDataValue",
    value: function patchDataValue() {
      this.laborForm.patchValue({
        tree_name: this.BsDivInfo[0].bs_div_1_name,
        tree_code: this.BsDivInfo[0].bs_div_1_code,
        active_rec: this.BsDivInfo[0].active_rec
      });
    }
  }, {
    key: "GetAllSupervisors",
    value: function GetAllSupervisors() {
      this.laborForm.patchValue({
        tree_name: this.BsDivInfo[0].bs_div_2_name,
        tree_code: this.BsDivInfo[0].bs_div_2_code,
        active_rec: this.BsDivInfo[0].active_rec
      });
    }
  }, {
    key: "GetAllChild",
    value: function GetAllChild() {
      this.laborForm.patchValue({
        tree_name: this.BsDivInfo[0].bs_div_3_name,
        tree_code: this.BsDivInfo[0].bs_div_3_code,
        active_rec: this.BsDivInfo[0].active_rec
      });
    }
  }, {
    key: "GetBsDivByIDDelete",
    value: function GetBsDivByIDDelete(bs_div_1_code) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var _this5 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.alertServices.DeleteAlert("هل انت متاكد من مسح هذه الوظيفة؟");

              case 2:
                if (!_context4.sent) {
                  _context4.next = 5;
                  break;
                }

                this.showLoader = true;
                this.http.post(this.env.API_URL + "api/Business/GetBusinessDivisionsDelete", {
                  bs_div_1_code: bs_div_1_code.toString()
                }).subscribe({
                  next: function next(data) {
                    _this5.showLoader = false;

                    _this5.alertServices.showAlertConfirm("تم الحذف بنجاح", true);
                  },
                  error: function error(err) {
                    console.log(err);

                    _this5.alertServices.showAlertError(err.error, false);

                    _this5.showLoader = false;
                  }
                });

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "GetBsDiv2ByIDDelete",
    value: function GetBsDiv2ByIDDelete(bs_div_1_code, bs_div_2_code) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var _this6 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.alertServices.DeleteAlert("هل انت متاكد من مسح هذه الوظيفة؟");

              case 2:
                if (!_context5.sent) {
                  _context5.next = 5;
                  break;
                }

                this.showLoader = true;
                this.http.post(this.env.API_URL + "api/Business/GetBusinessActivityTypeDelete", {
                  bs_div_1_code: bs_div_1_code.toString(),
                  bs_div_2_code: bs_div_2_code.toString()
                }).subscribe({
                  next: function next(data) {
                    _this6.showLoader = false;

                    _this6.alertServices.showAlertConfirm("تم الحذف بنجاح", true);
                  },
                  error: function error(err) {
                    console.log(err);

                    _this6.alertServices.showAlertError(err.error, false);

                    _this6.showLoader = false;
                  }
                });

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "GetBsDiv3ByIDDelete",
    value: function GetBsDiv3ByIDDelete(bs_div_1_code, bs_div_2_code, bs_div_3_code) {
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
                  _context6.next = 6;
                  break;
                }

                this.showLoader = true;
                console.log(bs_div_1_code, bs_div_2_code, bs_div_3_code);
                this.http.post(this.env.API_URL + "api/Business/GetBusinessSpecialitiesDelete", {
                  bs_div_1_code: bs_div_1_code.toString(),
                  bs_div_2_code: bs_div_2_code.toString(),
                  bs_div_3_code: bs_div_3_code.toString()
                }).subscribe({
                  next: function next(data) {
                    _this7.showLoader = false;

                    _this7.alertServices.showAlertConfirm("تم الحذف بنجاح", true);
                  },
                  error: function error(err) {
                    console.log(err);

                    _this7.alertServices.showAlertError(err.error, false);

                    _this7.showLoader = false;
                  }
                });

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "clearForms",
    value: function clearForms() {
      this.isInserting = false;
      this.isEditing = false;
      this.laborForm.reset();
    }
  }, {
    key: "Insertbs",
    value: function Insertbs() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        var _this8 = this;

        var node;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                node = this.currentTreeNode;
                _context7.t0 = node == undefined;

                if (!_context7.t0) {
                  _context7.next = 6;
                  break;
                }

                _context7.next = 5;
                return this.alertServices.SaveAlert("هل تريد الاضافة؟");

              case 5:
                _context7.t0 = _context7.sent;

              case 6:
                if (!_context7.t0) {
                  _context7.next = 8;
                  break;
                }

                this.http.post(this.env.API_URL + "api/Business/GetBusinessDivisionsInsert", {
                  bs_div_1_name: this.laborForm.value.tree_name.toString(),
                  active_rec: this.laborForm.value.active_rec == 1 ? 1 : 0
                }).subscribe({
                  next: function next(data) {
                    _this8.showLoader = false;

                    _this8.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                  },
                  error: function error(err) {
                    console.log(err);

                    _this8.alertServices.showAlertError(err.error, false);

                    _this8.showLoader = false;
                  }
                });

              case 8:
                if (!this.laborForm.valid) {
                  _context7.next = 17;
                  break;
                }

                _context7.next = 11;
                return this.alertServices.SaveAlert("هل تريد الاضافة؟");

              case 11:
                if (!_context7.sent) {
                  _context7.next = 15;
                  break;
                }

                this.showLoader = true;

                if (node.data.parent_id == null) {
                  this.http.post(this.env.API_URL + "api/Business/GetBusinessActivityTypesInsert", {
                    bs_div_1_code: node.data.node_code.toString(),
                    bs_div_2_name: this.laborForm.value.tree_name.toString(),
                    active_rec: this.laborForm.value.active_rec == 1 ? 1 : 0
                  }).subscribe({
                    next: function next(data) {
                      _this8.showLoader = false;

                      _this8.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                    },
                    error: function error(err) {
                      console.log(err);

                      _this8.alertServices.showAlertError(err.error, false);

                      _this8.showLoader = false;
                    }
                  });
                }

                if (node.data.parent_id != null) {
                  this.http.post(this.env.API_URL + "api/Business/GetBusinessSpecialitiesInsert", {
                    bs_div_1_code: node.data.parent_id.toString(),
                    bs_div_2_code: node.data.node_code.toString(),
                    bs_div_3_name: this.laborForm.value.tree_name.toString(),
                    active_rec: this.laborForm.value.active_rec == 1 ? 1 : 0
                  }).subscribe({
                    next: function next(data) {
                      _this8.showLoader = false;

                      _this8.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                    },
                    error: function error(err) {
                      console.log(err);

                      _this8.alertServices.showAlertError(err.error, false);

                      _this8.showLoader = false;
                    }
                  });
                }

              case 15:
                _context7.next = 18;
                break;

              case 17:
                this.alertServices.showAlertError("يجب ادخال جميع البيانات", false);

              case 18:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "Editbs",
    value: function Editbs() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
        var _this9 = this;

        var node, rootNode;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                node = this.currentTreeNode;

                if (!this.laborForm.valid) {
                  _context8.next = 10;
                  break;
                }

                _context8.next = 4;
                return this.alertServices.SaveAlert("هل تريد تعديل البيانات؟");

              case 4:
                if (!_context8.sent) {
                  _context8.next = 6;
                  break;
                }

                if (node.data.parent_id == null && node.children) {
                  this.showLoader = true;
                  this.http.post(this.env.API_URL + "api/Business/GetBusinessDivisionsUpdate", {
                    bs_div_1_code: node.data.node_code.toString(),
                    bs_div_1_name: this.laborForm.value.tree_name.toString(),
                    active_rec: this.laborForm.value.active_rec == 1 ? 1 : 0
                  }).subscribe({
                    next: function next(data) {
                      _this9.showLoader = false;

                      _this9.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                    },
                    error: function error(err) {
                      console.log(err);

                      _this9.alertServices.showAlertError(err.error, false);

                      _this9.showLoader = false;
                    }
                  });
                }

              case 6:
                if (node.data.parent_id != null && node.children) {
                  this.showLoader = true;
                  this.http.post(this.env.API_URL + "api/Business/GetBusinessActivityTypesUpdate", {
                    bs_div_1_code: node.data.parent_id.toString(),
                    bs_div_2_code: node.data.node_code.toString(),
                    bs_div_2_name: this.laborForm.value.tree_name.toString(),
                    active_rec: this.laborForm.value.active_rec == 1 ? 1 : 0
                  }).subscribe({
                    next: function next(data) {
                      _this9.showLoader = false;

                      _this9.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                    },
                    error: function error(err) {
                      console.log(err);

                      _this9.alertServices.showAlertError(err.error, false);

                      _this9.showLoader = false;
                    }
                  });
                }

                if (node.data.parent_id != null && !node.children) {
                  this.showLoader = true;
                  rootNode = this.TreeNodes.find(function (rootNode) {
                    var _a;

                    return (_a = rootNode.children) === null || _a === void 0 ? void 0 : _a.find(function (nestedNodes) {
                      return nestedNodes.data.node_code == node.data.parent_id;
                    });
                  });
                  this.http.post(this.env.API_URL + "api/Business/GetBusinessSpecialitiesUpdate", {
                    bs_div_1_code: rootNode.data.node_code.toString(),
                    bs_div_2_code: node.data.parent_id.toString(),
                    bs_div_3_code: node.data.node_code.toString(),
                    bs_div_3_name: this.laborForm.value.tree_name.toString(),
                    active_rec: this.laborForm.value.active_rec == 1 ? 1 : 0
                  }).subscribe({
                    next: function next(data) {
                      _this9.showLoader = false;

                      _this9.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                    },
                    error: function error(err) {
                      console.log(err);

                      _this9.alertServices.showAlertError(err.error, false);

                      _this9.showLoader = false;
                    }
                  });
                }

                _context8.next = 11;
                break;

              case 10:
                this.alertServices.showAlertError("يجب ادخال جميع البيانات", false);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }]);

  return LaborSectorManagePage;
}();

LaborSectorManagePage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_6__.EnvService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_7__.MohassilAuthService
  }, {
    type: src_app_core_services_sorting_service__WEBPACK_IMPORTED_MODULE_8__.sortingService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_9__.ReferencesService
  }];
};

LaborSectorManagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: "app-labor-sector-manage",
  template: _labor_sector_manage_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_labor_sector_manage_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], LaborSectorManagePage);


/***/ }),

/***/ 24536:
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/labor-sector-manage/labor-sector-manage.page.scss?ngResource ***!
  \******************************************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\n.ion-icon-class {\n  width: 1em;\n  height: 1em;\n}\n\ntd {\n  word-wrap: break-word;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhYm9yLXNlY3Rvci1tYW5hZ2UucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcaGVhZC1vZmZpY2VcXGxhYm9yLXNlY3Rvci1tYW5hZ2VcXGxhYm9yLXNlY3Rvci1tYW5hZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQU47O0FER0U7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6ImxhYm9yLXNlY3Rvci1tYW5hZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwtcmVxdWlyZWQge1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIipcIjtcclxuICAgICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pb24taWNvbi1jbGFzcyB7XHJcbiAgICB3aWR0aDogMWVtO1xyXG4gICAgaGVpZ2h0OiAxZW07XHJcbiAgfVxyXG4gIHRkIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfVxyXG4gICIsIi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWljb24tY2xhc3Mge1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbn1cblxudGQge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59Il19 */";

/***/ }),

/***/ 29585:
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/labor-sector-manage/labor-sector-manage.page.html?ngResource ***!
  \******************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<ion-card class=\"ion-padding\" *ngIf=\"!isInserting && !isEditing\">\n  <ion-card-header>\n    <ion-card-title>\n      <ion-item lines=\"none\">\n        <ion-text slot=\"start\">قطاع العمل</ion-text>\n        <ion-button (click)=\"BsDivInsert()\" slot=\"end\"><ion-icon name=\"add-outline\"></ion-icon></ion-button>\n      </ion-item>\n    </ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <div *ngIf=\"TreeNodes\">\n      <div *ngFor=\"let node of TreeNodes\" class=\"table-responsive\">\n        <app-tree #tree [node]=\"node\" (Edit)=\"Edit($event)\" (Delete)=\"Delete($event)\" (Add)=\"Add($event)\"></app-tree>\n      </div>\n    </div>\n  </ion-card-content>\n</ion-card>\n\n\n<div class=\"row\" *ngIf=\"isInserting || isEditing\">\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"laborForm\">\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                الاسم\n              </ion-label>\n              <ion-input type=\"text\" class=\"form-control\" formControlName=\"tree_name\">\n              </ion-input>\n            </div>\n          </div>\n          <div class=\"row pt-3\">\n            <div class=\"col-12 col-md-6\">\n              <ion-checkbox type=\"checkbox\" formControlName=\"active_rec\">\n              </ion-checkbox>\n              <ion-label class=\"form-label pl-1\"> فعال </ion-label>\n            </div>\n          </div>\n        </form>\n        <div class=\"row-12 pt-3\">\n          <div class=\"d-flex justify-content-center mt-2\">\n            <ion-button color=\"danger\" (click)=\"clearForms()\">\n              رجوع\n            </ion-button>\n            <ion-button *ngIf=\"isEditing\" (click)=\"Editbs()\">\n              تعديل\n            </ion-button>\n            <ion-button *ngIf=\"isInserting\" (click)=\"Insertbs()\">\n              حفظ\n            </ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_head-office_labor-sector-manage_labor-sector-manage_module_ts.js.map