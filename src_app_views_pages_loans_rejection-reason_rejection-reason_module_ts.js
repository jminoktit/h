"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_loans_rejection-reason_rejection-reason_module_ts"],{

/***/ 79981:
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/loans/rejection-reason/rejection-reason-routing.module.ts ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RejectionReasonPageRoutingModule": function() { return /* binding */ RejectionReasonPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _rejection_reason_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rejection-reason.page */ 30239);






var routes = [{
  path: '',
  component: _rejection_reason_page__WEBPACK_IMPORTED_MODULE_2__.RejectionReasonPage
}];

var RejectionReasonPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function RejectionReasonPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RejectionReasonPageRoutingModule);
});

RejectionReasonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], RejectionReasonPageRoutingModule);


/***/ }),

/***/ 27975:
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/loans/rejection-reason/rejection-reason.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RejectionReasonPageModule": function() { return /* binding */ RejectionReasonPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _rejection_reason_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rejection-reason-routing.module */ 79981);
/* harmony import */ var _rejection_reason_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rejection-reason.page */ 30239);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var RejectionReasonPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function RejectionReasonPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RejectionReasonPageModule);
});

RejectionReasonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _rejection_reason_routing_module__WEBPACK_IMPORTED_MODULE_2__.RejectionReasonPageRoutingModule],
  declarations: [_rejection_reason_page__WEBPACK_IMPORTED_MODULE_3__.RejectionReasonPage]
})], RejectionReasonPageModule);


/***/ }),

/***/ 30239:
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/loans/rejection-reason/rejection-reason.page.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RejectionReasonPage": function() { return /* binding */ RejectionReasonPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _rejection_reason_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rejection-reason.page.html?ngResource */ 40544);
/* harmony import */ var _rejection_reason_page_css_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rejection-reason.page.css?ngResource */ 84154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/env.service */ 41752);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);













var RejectionReasonPage = /*#__PURE__*/function () {
  function RejectionReasonPage(formBuilder, datepipe, http, env, alertServices) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RejectionReasonPage);

    this.formBuilder = formBuilder;
    this.datepipe = datepipe;
    this.http = http;
    this.env = env;
    this.alertServices = alertServices;
    this.showLoader = false;
    this.isSubmitted = false;
    this.isInserting = false;
    this.isEditing = false;
    this.hasSupervisor = false; // nodeMap: Record<number, TreeNodes> = [];

    this.rejectionReasonForm = this.formBuilder.group({
      tree_code: [""],
      tree_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      active_rec: [""]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RejectionReasonPage, [{
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
      this.loadRejectionReasons();
    }
  }, {
    key: "loadRejectionReasons",
    value: function loadRejectionReasons() {
      var _this = this;

      this.showLoader = true;
      this.TreeNodes = [{
        data: {
          node_code: 0,
          active_rec: null,
          parent_id: null
        },
        text: "اسباب الرفض الرئيسية",
        collapsed: true,
        canEdit: false,
        canDelete: false,
        canSelect: false,
        canAdd: true,
        initialized: false
      }];
      this.http.get(this.env.API_URL + "api/Rej/GetRejParent").subscribe({
        next: function next(Rejs_1) {
          _this.TreeNodes = _this.TreeNodes.map(function (treeNode) {
            return Object.assign(Object.assign({}, treeNode), {
              children: Rejs_1.filter(function (Rej_1) {
                return treeNode.data.node_code == 0;
              }).map(function (Rej_1) {
                return {
                  data: {
                    node_code: parseInt(Rej_1.parent_rej_code),
                    active_rec: null,
                    parent_id: 0
                  },
                  text: Rej_1.parent_rej_desc,
                  children_id: null,
                  collapsed: true,
                  canEdit: true,
                  canDelete: true,
                  canSelect: false,
                  canAdd: true,
                  initialized: false
                };
              })
            });
          });

          _this.http.get(_this.env.API_URL + "api/Rej/GetRejAll").subscribe({
            next: function next(Rejs_2) {
              _this.TreeNodes = _this.TreeNodes.map(function (treeNode) {
                var _a;

                return Object.assign(Object.assign({}, treeNode), {
                  children: (_a = treeNode.children) === null || _a === void 0 ? void 0 : _a.map(function (child) {
                    return Object.assign(Object.assign({}, child), {
                      children: Rejs_2.filter(function (Rej_2) {
                        return child.data.node_code == parseInt(Rej_2.parent_rej_code) && treeNode.data.node_code == 0;
                      }).map(function (Rejs_2) {
                        return {
                          data: {
                            node_code: parseInt(Rejs_2.loan_rej_code),
                            active_rec: Rejs_2.active_rec,
                            parent_id: parseInt(Rejs_2.parent_rej_code)
                          },
                          text: Rejs_2.loan_rej_desc,
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
  }, {
    key: "Edit",
    value: function Edit(node) {
      this.hasSupervisor = false;
      this.currentTreeNode = node;
      console.log(node);
      console.log(this.TreeNodes);

      if (node.data.parent_id != null && node.children) {
        this.GetRej1ByID(node.data.node_code, true);
      }

      if (node.data.parent_id != null && !node.children) {
        this.GetRej2ByID(node.data.node_code, node.data.parent_id, true);
      }
    }
  }, {
    key: "Delete",
    value: function Delete(node) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
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
                  _context.next = 7;
                  break;
                }

                if (node.data.parent_id != null && !!node.children) {
                  this.showLoader = true;
                  this.http.post(this.env.API_URL + "api/Rej/RejParantDel", {
                    parent_rej_code: node.data.node_code.toString()
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

                if (node.data.parent_id != null && !node.children) {
                  this.showLoader = true;
                  this.http.post(this.env.API_URL + "api/Rej/RejRefDel", {
                    loan_rej_code: node.data.node_code.toString(),
                    parent_rej_code: node.data.parent_id.toString()
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

              case 7:
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

      if (node.data.parent_id == null && !!node.children) {
        this.GetRej1Insert(true);
      }

      if (node.data.parent_id != null && !!node.children) {
        this.GetRej2Insert(true);
      }

      this.isInserting = this.isInserting;
      this.showLoader = false;
      this.hasSupervisor = true;
    }
  }, {
    key: "GetRej1Insert",
    value: function GetRej1Insert(isInserting) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (isInserting) this.Rej1Insert();
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
    key: "Rej1Insert",
    value: function Rej1Insert() {
      this.rejectionReasonForm.patchValue({
        tree_name: " ",
        tree_code: 0,
        active_rec: 0
      });
    }
  }, {
    key: "GetRej2Insert",
    value: function GetRej2Insert(isInserting) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (isInserting) this.Rej2Insert();
                this.isInserting = isInserting;
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
    key: "Rej2Insert",
    value: function Rej2Insert() {
      this.rejectionReasonForm.patchValue({
        tree_name: " ",
        tree_code: 0,
        active_rec: 0
      });
    }
  }, {
    key: "GetRej1ByID",
    value: function GetRej1ByID(parent_rej_code, isEditing) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
        var _this3 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.http.get("".concat(this.env.API_URL, "api/Rej/GetRejParentByCode?parent_rej_code=").concat(parent_rej_code)).subscribe({
                  next: function next(data) {
                    _this3.LoanRejectionParentInfo = data;
                    if (isEditing) _this3.patchDataValue();
                    _this3.isEditing = isEditing;
                    _this3.showLoader = false;
                  },
                  error: function error(err) {
                    console.log(err);
                    _this3.showLoader = false;
                  }
                });

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "patchDataValue",
    value: function patchDataValue() {
      this.rejectionReasonForm.patchValue({
        tree_name: this.LoanRejectionParentInfo[0].parent_rej_desc,
        tree_code: this.LoanRejectionParentInfo[0].parent_rej_code,
        active_rec: this.LoanRejectionParentInfo[0].active_rec
      });
    }
  }, {
    key: "GetRej2ByID",
    value: function GetRej2ByID(loan_rej_code, parent_rej_code, isEditing) {
      var _this4 = this;

      this.http.get("".concat(this.env.API_URL, "api/Rej/GetRejByCode?loan_rej_code=").concat(loan_rej_code, "&parent_rej_code=").concat(parent_rej_code)).subscribe({
        next: function next(data) {
          console.log(data);
          _this4.rejectionInfo = data;
          if (isEditing) _this4.GetNestedRejection();
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
    key: "GetNestedRejection",
    value: function GetNestedRejection() {
      console.log(this.rejectionInfo);
      this.rejectionReasonForm.patchValue({
        tree_name: this.rejectionInfo[0].loan_rej_desc,
        tree_code: this.rejectionInfo[0].loan_rej_code,
        active_rec: this.rejectionInfo[0].active_rec
      });
    }
  }, {
    key: "EditRej",
    value: function EditRej() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
        var _this5 = this;

        var node;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                node = this.currentTreeNode;
                console.log(node, node.data.parent_id != null && !!node.children, node.data.parent_id != null && !node.children);

                if (!this.rejectionReasonForm.valid) {
                  _context5.next = 10;
                  break;
                }

                _context5.next = 5;
                return this.alertServices.SaveAlert("هل تريد تعديل البيانات؟");

              case 5:
                if (!_context5.sent) {
                  _context5.next = 8;
                  break;
                }

                if (node.data.parent_id != null && !!node.children) {
                  this.showLoader = true;
                  this.http.post(this.env.API_URL + "api/Rej/RejectionParent", {
                    parent_rej_code: node.data.node_code.toString(),
                    parent_rej_desc: this.rejectionReasonForm.value.tree_name.toString(),
                    active_rec: this.rejectionReasonForm.value.active_rec == "1" ? "1" : "0"
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
                }

                if (node.data.parent_id != null && !node.children) {
                  this.showLoader = true;
                  console.log({
                    loan_rej_code: node.data.node_code.toString(),
                    loan_rej_desc: this.rejectionReasonForm.value.tree_name.toString(),
                    active_rec: this.rejectionReasonForm.value.active_rec == "1" ? "1" : "0",
                    parent_rej_code: node.data.parent_id
                  });
                  this.http.post(this.env.API_URL + "api/LoanApplications/UpdateRejection", {
                    loan_rej_code: node.data.node_code.toString(),
                    loan_rej_desc: this.rejectionReasonForm.value.tree_name.toString(),
                    active_rec: this.rejectionReasonForm.value.active_rec == "1" ? "1" : "0",
                    parent_rej_code: node.data.parent_id.toString()
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
                }

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
    key: "InsertRej",
    value: function InsertRej() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        var _this6 = this;

        var node;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                node = this.currentTreeNode;

                if (!this.rejectionReasonForm.valid) {
                  _context6.next = 9;
                  break;
                }

                _context6.next = 4;
                return this.alertServices.SaveAlert("هل تريد الاضافة؟");

              case 4:
                if (!_context6.sent) {
                  _context6.next = 7;
                  break;
                }

                if (node.data.parent_id == null && node.children) {
                  this.showLoader = true;
                  this.http.post(this.env.API_URL + "api/Rej/RejectionParent", {
                    parent_rej_code: "0",
                    parent_rej_desc: this.rejectionReasonForm.value.tree_name.toString(),
                    active_rec: this.rejectionReasonForm.value.active_rec == "1" ? "1" : "0"
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
                }

                if (node.data.parent_id != null && node.children) {
                  this.showLoader = true;
                  this.http.post(this.env.API_URL + "api/LoanApplications/UpdateRejection", {
                    loan_rej_code: "0",
                    loan_rej_desc: this.rejectionReasonForm.value.tree_name.toString(),
                    active_rec: this.rejectionReasonForm.value.active_rec == "1" ? "1" : "0",
                    parent_rej_code: node.data.node_code.toString()
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
                }

              case 7:
                _context6.next = 10;
                break;

              case 9:
                this.alertServices.showAlertError("يجب ادخال جميع البيانات", false);

              case 10:
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
      this.isSubmitted = false;
      this.rejectionReasonForm.reset();
    }
  }]);

  return RejectionReasonPage;
}();

RejectionReasonPage.ctorParameters = function () {
  return [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
  }, {
    type: src_app_core_services_env_service__WEBPACK_IMPORTED_MODULE_5__.EnvService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }];
};

RejectionReasonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: "app-rejection-reason",
  template: _rejection_reason_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_rejection_reason_page_css_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], RejectionReasonPage);


/***/ }),

/***/ 84154:
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/loans/rejection-reason/rejection-reason.page.css?ngResource ***!
  \*****************************************************************************************/
/***/ (function(module) {

module.exports = ".form-label-required {\r\n    &::after {\r\n      content: \"*\";\r\n      color: rgb(255, 51, 102) !important;\r\n    }\r\n  }\r\n  \r\n  td {\r\n    word-wrap: break-word;\r\n    white-space: normal;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlamVjdGlvbi1yZWFzb24ucGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtNQUNFLFlBQVk7TUFDWixtQ0FBbUM7SUFDckM7RUFDRjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixtQkFBbUI7RUFDckIiLCJmaWxlIjoicmVqZWN0aW9uLXJlYXNvbi5wYWdlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWxhYmVsLXJlcXVpcmVkIHtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCIqXCI7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjU1LCA1MSwgMTAyKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICB0ZCB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuICAiXX0= */";

/***/ }),

/***/ 40544:
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/loans/rejection-reason/rejection-reason.page.html?ngResource ***!
  \******************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<ion-card class=\"ion-padding\" *ngIf=\"!isInserting && !isEditing\">\n  <ion-card-header>\n    <ion-card-title>الفروع</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <div *ngIf=\"TreeNodes\">\n      <div *ngFor=\"let node of TreeNodes\" class=\"table-responsive\">\n        <app-tree #tree [node]=\"node\" (Edit)=\"Edit($event)\" (Delete)=\"Delete($event)\" (Add)=\"Add($event)\"></app-tree>\n      </div>\n    </div>\n  </ion-card-content>\n</ion-card>\n\n<div class=\"row\" *ngIf=\"isInserting || isEditing\">\n  <div class=\"col-md-12 grid-margin\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <form [formGroup]=\"rejectionReasonForm\">\n          <div class=\"row\">\n            <div class=\"col-12 col-md-4\">\n              <ion-label class=\"form-label form-label-required\">\n                سبب الرفض\n              </ion-label>\n              <ion-input type=\"text\" class=\"form-control\" formControlName=\"tree_name\">\n              </ion-input>\n            </div>\n          </div>\n          <div class=\"row pt-3\">\n            <div class=\"col-12 col-md-6\">\n              <ion-checkbox type=\"checkbox\" formControlName=\"active_rec\">\n              </ion-checkbox>\n              <ion-label class=\"form-label pl-1\"> فعال </ion-label>\n            </div>\n          </div>\n        </form>\n        <div class=\"row-12 pt-3\">\n          <div class=\"d-flex justify-content-center mt-2\">\n            <ion-button color=\"danger\" (click)=\"clearForms()\">\n              رجوع\n            </ion-button>\n            <ion-button *ngIf=\"isEditing\" (click)=\"EditRej()\">\n              تعديل\n            </ion-button>\n            <ion-button *ngIf=\"isInserting\" (click)=\"InsertRej()\">\n              حفظ\n            </ion-button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_loans_rejection-reason_rejection-reason_module_ts.js.map