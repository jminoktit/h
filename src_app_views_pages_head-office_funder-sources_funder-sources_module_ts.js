"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_head-office_funder-sources_funder-sources_module_ts"],{

/***/ 68193:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/funder-sources/funder-sources-routing.module.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunderSourcesPageRoutingModule": function() { return /* binding */ FunderSourcesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _funder_sources_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funder-sources.page */ 13273);






var routes = [{
  path: '',
  component: _funder_sources_page__WEBPACK_IMPORTED_MODULE_2__.FunderSourcesPage
}];

var FunderSourcesPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function FunderSourcesPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FunderSourcesPageRoutingModule);
});

FunderSourcesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], FunderSourcesPageRoutingModule);


/***/ }),

/***/ 65129:
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/head-office/funder-sources/funder-sources.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunderSourcesPageModule": function() { return /* binding */ FunderSourcesPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _funder_sources_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funder-sources-routing.module */ 68193);
/* harmony import */ var _funder_sources_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funder-sources.page */ 13273);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var FunderSourcesPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function FunderSourcesPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FunderSourcesPageModule);
});

FunderSourcesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _funder_sources_routing_module__WEBPACK_IMPORTED_MODULE_2__.FunderSourcesPageRoutingModule],
  declarations: [_funder_sources_page__WEBPACK_IMPORTED_MODULE_3__.FunderSourcesPage]
})], FunderSourcesPageModule);


/***/ }),

/***/ 13273:
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/head-office/funder-sources/funder-sources.page.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunderSourcesPage": function() { return /* binding */ FunderSourcesPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _funder_sources_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funder-sources.page.html?ngResource */ 30865);
/* harmony import */ var _funder_sources_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./funder-sources.page.scss?ngResource */ 97757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);














var FunderSourcesPage = /*#__PURE__*/function () {
  function FunderSourcesPage(formBuilder, datepipe, http, env, alertServices, inputMaskingService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FunderSourcesPage);

    this.formBuilder = formBuilder;
    this.datepipe = datepipe;
    this.http = http;
    this.env = env;
    this.alertServices = alertServices;
    this.inputMaskingService = inputMaskingService;
    this.showLoader = false;
    this.isSubmitted = false;
    this.isInserting = false;
    this.isEditing = false;
    this.isAdd = false;
    this.isAdding = false;
    this.isUpdating = false;
    this.isEditingOld = false;
    this.isAddition = false;
    this.hasSupervisor = false;
    this.FundForm = this.formBuilder.group({
      tree_code: [""],
      tree_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      active_rec: [""],
      fees_perc: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      export_data: [""],
      iscore_external_funding: [""]
    });
    this.FundRefForm = this.formBuilder.group({
      funding_reference_id: [""],
      funder_code: [""],
      funding_reference_code: [""],
      funding_amount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      funding_date: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
    this.RefForm = this.formBuilder.group({
      funding_reference_id: [""],
      funder_code: [""],
      funding_reference_code: [""],
      funding_amount: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      funding_date: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(FunderSourcesPage, [{
    key: "noWhitespaceValidator",
    value: function noWhitespaceValidator(control) {
      var isWhitespace = control.value !== null && (control.value || "").toString().trim().length === 0;
      var isValid = !isWhitespace;
      return isValid ? null : {
        whitespace: true
      };
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      this.FunderReasons();
    }
  }, {
    key: "FunderReasons",
    value: function FunderReasons() {
      var _this = this;

      this.showLoader = true;
      this.TreeNodes = [{
        data: {
          node_code: 0,
          active_rec: null,
          parent_id: null
        },
        collapsed: true,
        text: "مصادر التمويل",
        canEdit: false,
        canDelete: false,
        canAdd: true,
        canSelect: false,
        initialized: false
      }];
      this.http.get(this.env.API_URL + "api/Settings/GetAllFunder").subscribe({
        next: function next(Funds_1) {
          _this.TreeNodes = _this.TreeNodes.map(function (treeNode) {
            return Object.assign(Object.assign({}, treeNode), {
              children: Funds_1.filter(function (Fund) {
                return treeNode.data.node_code == 0;
              }).map(function (Fund) {
                return {
                  data: {
                    org_code: parseInt(Fund.org_code),
                    node_code: parseInt(Fund.funder_code),
                    active_rec: Fund.active_rec,
                    parent_id: 0
                  },
                  text: Fund.funder_name,
                  initialized: false,
                  collapsed: true,
                  canEdit: true,
                  canDelete: true,
                  canSelect: false,
                  canAdd: false
                };
              })
            });
          });
          _this.showLoader = false;
        }
      });
    }
  }, {
    key: "Edit",
    value: function Edit(tree) {
      this.hasSupervisor = false;
      this.currentTreeNode = tree;

      if (tree.data.parent_id != null && !tree.children) {
        this.GetFundByID(tree.data.node_code, true, true);
        this.GetFundRefByID(tree.data.node_code, true);
      }
    }
  }, {
    key: "Delete",
    value: function Delete(node) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this2 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.hasSupervisor = false;
                this.currentTreeNode = node;
                _context.next = 4;
                return this.alertServices.SaveAlert("هل تريد الحذف؟");

              case 4:
                if (!_context.sent) {
                  _context.next = 6;
                  break;
                }

                if (node.data.parent_id != null && !node.children) {
                  this.showLoader = true;
                  this.http.post("".concat(this.env.API_URL, "api/Settings/GetFunderDelete"), {
                    funder_code: node.data.node_code.toString()
                  }).subscribe({
                    next: function next(data) {
                      _this2.showLoader = false;

                      _this2.alertServices.showAlertConfirm("تم الحذف بنجاح", true);
                    },
                    error: function error(err) {
                      console.log(err);

                      _this2.alertServices.showAlertError(err.error, false);

                      _this2.showLoader = false;
                    }
                  });
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "Add",
    value: function Add(node) {
      this.currentTreeNode = node;

      if (node.data.parent_id == null && node.children) {
        this.GetFundInsert(true);
      }
    }
  }, {
    key: "GetFundByID",
    value: function GetFundByID(funder_code, isEditing, isInserting) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var _this3 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.http.get("".concat(this.env.API_URL, "api/Settings/GetFunder?funderCode=").concat(funder_code)).subscribe({
                  next: function next(data) {
                    _this3.funderInfo = data;
                    if (isEditing) _this3.patchDataValue();
                    _this3.isEditing = isEditing;
                    _this3.isInserting = isInserting;
                    _this3.isEditingOld = _this3.isEditingOld;
                    _this3.showLoader = false;
                  },
                  error: function error(err) {
                    console.log(err);
                    _this3.showLoader = false;
                  }
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "patchDataValue",
    value: function patchDataValue() {
      this.FundForm.patchValue({
        tree_name: this.funderInfo[0].funder_name,
        tree_code: this.funderInfo[0].funder_code,
        active_rec: this.funderInfo[0].active_rec,
        fees_perc: this.funderInfo[0].fees_perc,
        export_data: this.funderInfo[0].export_data,
        iscore_external_funding: this.funderInfo[0].iscore_external_funding
      });
    }
  }, {
    key: "GetFundInsert",
    value: function GetFundInsert(isAdd) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (isAdd) this.FundInsert();
                this.isAdd = isAdd;
                this.showLoader = false;

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "FundInsert",
    value: function FundInsert() {
      this.FundForm.patchValue({
        tree_name: " ",
        tree_code: 0,
        active_rec: 0,
        fees_perc: 0,
        export_data: 0,
        iscore_external_funding: 0
      });
    }
  }, {
    key: "clearForms",
    value: function clearForms() {
      this.isInserting = false;
      this.isEditing = false;
      this.isSubmitted = false;
      this.isAdd = false;
      this.isAdding = false;
      this.isUpdating = false;
      this.isEditingOld = false;
      this.isAddition = false;
      this.FundForm.reset();
      this.RefForm.reset();
      this.FundRefForm.reset();
    }
  }, {
    key: "clear",
    value: function clear() {
      this.isAdding = false;
      this.isUpdating = false;
      this.isAddition = true;
      this.isEditingOld = true;
      this.RefForm.reset();
    }
  }, {
    key: "EditFund",
    value: function EditFund() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var _this4 = this;

        var node;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                node = this.currentTreeNode;

                if (!this.FundForm.valid) {
                  _context4.next = 7;
                  break;
                }

                _context4.next = 4;
                return this.alertServices.SaveAlert("هل تريد تعديل البيانات؟");

              case 4:
                if (!_context4.sent) {
                  _context4.next = 7;
                  break;
                }

                this.showLoader = true;
                this.http.post(this.env.API_URL + "api/Settings/GetFunderUpdate", {
                  funder_code: node.data.node_code.toString(),
                  funder_name: this.FundForm.value.tree_name.toString(),
                  active_rec: this.FundForm.value.active_rec == 1 ? 1 : 0,
                  fees_perc: this.FundForm.value.fees_perc.toString(),
                  export_data: this.FundForm.value.export_data == 1 ? 1 : 0,
                  iscore_external_funding: this.FundForm.value.iscore_external_funding == 1 ? 1 : 0
                }).subscribe({
                  next: function next(data) {
                    _this4.showLoader = false;

                    _this4.alertServices.showAlertConfirm("تم الحفظ بنجاح", true);
                  },
                  error: function error(err) {
                    console.log(err);

                    _this4.alertServices.showAlertError(err.error, false);

                    _this4.showLoader = false;
                  }
                });

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "InsertFund",
    value: function InsertFund() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var _this5 = this;

        var node;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                node = this.currentTreeNode;

                if (!this.FundForm.valid) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 4;
                return this.alertServices.SaveAlert("هل تريد الاضافة؟");

              case 4:
                if (!_context5.sent) {
                  _context5.next = 7;
                  break;
                }

                this.showLoader = true;
                this.http.post(this.env.API_URL + "api/Settings/GetFunderInsert", {
                  funder_name: this.FundForm.value.tree_name.toString(),
                  active_rec: this.FundForm.value.active_rec == 1 ? 1 : 0,
                  fees_perc: this.FundForm.value.fees_perc.toString(),
                  export_data: this.FundForm.value.export_data == 1 ? 1 : 0,
                  iscore_external_funding: this.FundForm.value.iscore_external_funding == 1 ? 1 : 0
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

              case 7:
                _context5.next = 10;
                break;

              case 9:
                this.alertServices.showAlertError("يجب ادخال جميع البيانات", false);

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "updateFundRef",
    value: function updateFundRef(index) {
      var FundRef = this.FundRef[index];
      this.RefForm.patchValue({
        funding_reference_id: FundRef.funding_reference_id,
        funder_code: FundRef.funder_code,
        funding_reference_code: FundRef.funding_reference_code,
        funding_amount: FundRef.funding_amount,
        funding_date: FundRef.funding_date
      });
      this.isAdding = false;
      this.isUpdating = true;
    }
  }, {
    key: "insertFundRef",
    value: function insertFundRef() {
      this.isAdding = true;
      this.RefForm.reset();
      this.isUpdating = false;
    }
  }, {
    key: "submitRefInsert",
    value: function submitRefInsert() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        var _this6 = this;

        var node;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                node = this.currentTreeNode;

                if (!this.RefForm.valid) {
                  _context6.next = 9;
                  break;
                }

                _context6.next = 5;
                return this.alertServices.SaveAlert("هل تريد الاضافة؟");

              case 5:
                if (!_context6.sent) {
                  _context6.next = 7;
                  break;
                }

                this.http.post(this.env.API_URL + "api/Settings/GetFunderRefIns", {
                  funder_code: node.data.node_code.toString(),
                  funding_reference_code: this.RefForm.value.funding_reference_code.toString(),
                  funding_amount: this.RefForm.value.funding_amount.toString(),
                  funding_date: this.RefForm.value.funding_date.toString()
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

              case 7:
                _context6.next = 10;
                break;

              case 9:
                this.alertServices.showAlertError("يجب ادخال جميع البيانات", false);

              case 10:
                _context6.next = 14;
                break;

              case 12:
                _context6.prev = 12;
                _context6.t0 = _context6["catch"](0);

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 12]]);
      }));
    }
  }, {
    key: "submitRefUpdate",
    value: function submitRefUpdate() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
        var _this7 = this;

        var node;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                node = this.currentTreeNode;

                if (!this.RefForm.valid) {
                  _context7.next = 8;
                  break;
                }

                _context7.next = 4;
                return this.alertServices.SaveAlert("هل تريد تعديل البيانات؟");

              case 4:
                if (!_context7.sent) {
                  _context7.next = 6;
                  break;
                }

                this.http.post(this.env.API_URL + "api/Settings/GetFunderRefUpd", {
                  funder_code: node.data.node_code.toString(),
                  funding_reference_id: this.RefForm.value.funding_reference_id.toString(),
                  funding_reference_code: this.RefForm.value.funding_reference_code.toString(),
                  funding_amount: this.RefForm.value.funding_amount.toString(),
                  funding_date: this.RefForm.value.funding_date.toString()
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

              case 6:
                _context7.next = 9;
                break;

              case 8:
                this.alertServices.showAlertError("يجب ادخال جميع البيانات", false);

              case 9:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "GetFundRefByID",
    value: function GetFundRefByID(funder_code, isEditingOld) {
      var _this8 = this;

      this.http.get("".concat(this.env.API_URL, "api/Settings/GetFunderRef?funderCode=").concat(funder_code)).subscribe({
        next: function next(data) {
          _this8.FundRef = data;
          _this8.isEditingOld = isEditingOld;
          _this8.showLoader = false;
        },
        error: function error(err) {
          console.log(err);
          _this8.showLoader = false;
        }
      });
    }
  }]);

  return FunderSourcesPage;
}();

FunderSourcesPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_7__.InputMaskingService
  }];
};

FunderSourcesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-funder-sources",
  template: _funder_sources_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_funder_sources_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], FunderSourcesPage);


/***/ }),

/***/ 97757:
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/funder-sources/funder-sources.page.scss?ngResource ***!
  \********************************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required::after {\n  content: \"*\";\n  color: #ff3366 !important;\n}\n\ntd {\n  word-wrap: break-word;\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmRlci1zb3VyY2VzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGhlYWQtb2ZmaWNlXFxmdW5kZXItc291cmNlc1xcZnVuZGVyLXNvdXJjZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQU47O0FESUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FDREoiLCJmaWxlIjoiZnVuZGVyLXNvdXJjZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tbGFiZWwtcmVxdWlyZWQge1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIipcIjtcclxuICAgICAgY29sb3I6IHJnYigyNTUsIDUxLCAxMDIpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIHRkIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfVxyXG4gICIsIi5mb3JtLWxhYmVsLXJlcXVpcmVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiKlwiO1xuICBjb2xvcjogI2ZmMzM2NiAhaW1wb3J0YW50O1xufVxuXG50ZCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn0iXX0= */";

/***/ }),

/***/ 30865:
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/head-office/funder-sources/funder-sources.page.html?ngResource ***!
  \********************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<ion-card class=\"ion-padding\" *ngIf=\"!isInserting && !isEditing && !isAdd\">\n  <ion-card-content>\n    <div *ngIf=\"TreeNodes\">\n      <div *ngFor=\"let node of TreeNodes\" class=\"table-responsive\">\n        <app-tree #tree [node]=\"node\" (Edit)=\"Edit($event)\" (Delete)=\"Delete($event)\" (Add)=\"Add($event)\"></app-tree>\n      </div>\n    </div>\n  </ion-card-content>\n</ion-card>\n\n<div class=\"row\" *ngIf=\" isEditing || isAdd\">\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"FundForm\">\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <div class=\"form-group\">\n                <ion-label class=\"form-label form-label-required\">\n                  مصدر التمويل\n                </ion-label>\n                <ion-input type=\"text\" class=\"form-control\" formControlName=\"tree_name\">\n                </ion-input>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label\"> نسبة الفائدة </ion-label>\n              <ion-input type=\"text\" class=\"form-control\" formControlName=\"fees_perc\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 4)\">\n              </ion-input>\n            </div>\n          </div>\n          <div class=\"row pt-3\">\n            <div class=\"col-12 col-md-6\">\n              <ion-col>\n                <ion-checkbox type=\"checkbox\" formControlName=\"active_rec\">\n                </ion-checkbox>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"form-label pl-1\">\n                  يمكن إستخدام هذا المصدر\n                </ion-label>\n              </ion-col>\n            </div>\n          </div>\n          <div class=\"row pt-3\">\n            <div class=\"col-12 col-md-6\">\n              <ion-col>\n                <ion-checkbox type=\"checkbox\" formControlName=\"export_data\">\n                </ion-checkbox>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"form-label pl-1\"> تصدير البيانات </ion-label>\n              </ion-col>\n            </div>\n          </div>\n          <div class=\"row pt-3\">\n            <div class=\"col-12 col-md-6\">\n              <ion-col>\n                <ion-checkbox type=\"checkbox\" formControlName=\"iscore_external_funding\">\n                </ion-checkbox>\n              </ion-col>\n              <ion-col>\n                <ion-label class=\"form-label pl-1\"> مصدر خارجى </ion-label>\n              </ion-col>\n            </div>\n          </div>\n        </form>\n        <form [formGroup]=\"FundRefForm\">\n          <div class=\"ion-padding\" *ngIf=\"isAddition || isEditingOld\">\n            <div>\n              <h5 class=\"mr-1 mb-md-0 pb-3\">التمويل</h5>\n            </div>\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"row justify-content-center\">\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <thead>\n                        <th class=\"text-center\">كود التمويل</th>\n                        <th class=\"text-center\">قيمه التمويل</th>\n                        <th class=\"text-center\">تاريخ التمويل</th>\n                        <th class=\"text-center\">\n                          <ion-button (click)=\"insertFundRef()\"><ion-icon name=\"add-outline\"></ion-icon></ion-button>\n                        </th>\n                      </thead>\n\n                      <tbody>\n                        <tr *ngFor=\"let FundRef of FundRef; let i = index\">\n                          <td class=\"text-center\">\n                            {{FundRef.funding_reference_code}}\n                          </td>\n                          <td class=\"text-center\">\n                            {{FundRef.funding_amount}}\n                          </td>\n                          <td class=\"text-center\">{{FundRef.funding_date}}</td>\n\n                          <td class=\"text-center\">\n                            <ion-button (click)=\"updateFundRef(i)\"><ion-icon\n                                name=\"create-outline\"></ion-icon></ion-button>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n        <div class=\"row\" *ngIf=\"isAdding || isUpdating\">\n          <div class=\"col-md-12 grid-margin\">\n            <div class=\"card\">\n              <div class=\"card-body\">\n                <form [formGroup]=\"RefForm\">\n                  <div class=\"row\">\n                    <div class=\"col-12 col-md-4\">\n                      <div class=\"form-group\">\n                        <ion-label class=\"form-label form-label-required\">\n                          كود التمويل\n                        </ion-label>\n                        <ion-input type=\"text\" class=\"form-control\" formControlName=\"funding_reference_code\">\n                        </ion-input>\n                        <div class=\"text-danger input-validator\"\n                          *ngIf=\"isSubmitted && ((RefForm.controls['funding_reference_code'].errors?.['required']))\"\n                          role=\"alert\">\n                          يجب ادخال كود التمويل\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-12 col-md-4\">\n                      <div class=\"form-group\">\n                        <ion-label class=\"form-label form-label-required\">\n                          قيمه التمويل\n                        </ion-label>\n                        <ion-input type=\"text\" class=\"form-control\" formControlName=\"funding_amount\"\n                          (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e15, 2)\">\n                        </ion-input>\n                        <div class=\"form-label input-validator\"\n                          *ngIf=\"isSubmitted && ((RefForm.controls['funding_amount'].errors?.['required']))\"\n                          role=\"alert\">\n                          يجب ادخال قيمه التمويل\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-12 col-md-4\">\n                      <div class=\"form-group\">\n                        <ion-label class=\"form-label\">\n                          تاريخ التمويل\n                        </ion-label>\n                        <ngx-datepicker [parentForm]=\"RefForm\" parentFormControllerName=\"funding_date\">\n                        </ngx-datepicker>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row-12 pt-3\">\n                    <div class=\"d-flex justify-content-center mt-2\">\n                      <ion-button *ngIf=\"isAdding\" (click)=\"submitRefInsert()\">\n                        حفظ التمويل</ion-button>\n                      <ion-button *ngIf=\"isUpdating\" (click)=\"submitRefUpdate()\">\n                        تعديل التمويل</ion-button>\n                      <ion-button color=\"danger\" (click)=\"clear()\">\n                        رجوع\n                      </ion-button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row-12 pt-3\">\n          <div class=\"d-flex justify-content-center mt-2\">\n            <ion-button color=\"danger\" (click)=\"clearForms()\">\n              رجوع\n            </ion-button>\n            <ion-button *ngIf=\"isEditing\" (click)=\"EditFund()\">\n              تعديل\n            </ion-button>\n            <ion-button *ngIf=\"isAdd\" (click)=\"InsertFund()\"> حفظ </ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div></div>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_head-office_funder-sources_funder-sources_module_ts.js.map