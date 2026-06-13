"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_consumer_assign-branch-items_assign-branch-items_module_ts"],{

/***/ 35720:
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/consumer/assign-branch-items/assign-branch-items-routing.module.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignBranchItemsPageRoutingModule": function() { return /* binding */ AssignBranchItemsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _assign_branch_items_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assign-branch-items.page */ 57413);






var routes = [{
  path: '',
  component: _assign_branch_items_page__WEBPACK_IMPORTED_MODULE_2__.AssignBranchItemsPage
}];

var AssignBranchItemsPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AssignBranchItemsPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AssignBranchItemsPageRoutingModule);
});

AssignBranchItemsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], AssignBranchItemsPageRoutingModule);


/***/ }),

/***/ 31188:
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/consumer/assign-branch-items/assign-branch-items.module.ts ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignBranchItemsPageModule": function() { return /* binding */ AssignBranchItemsPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _assign_branch_items_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assign-branch-items-routing.module */ 35720);
/* harmony import */ var _assign_branch_items_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assign-branch-items.page */ 57413);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var AssignBranchItemsPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function AssignBranchItemsPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AssignBranchItemsPageModule);
});

AssignBranchItemsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _assign_branch_items_routing_module__WEBPACK_IMPORTED_MODULE_2__.AssignBranchItemsPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_assign_branch_items_page__WEBPACK_IMPORTED_MODULE_3__.AssignBranchItemsPage]
})], AssignBranchItemsPageModule);


/***/ }),

/***/ 57413:
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/consumer/assign-branch-items/assign-branch-items.page.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignBranchItemsPage": function() { return /* binding */ AssignBranchItemsPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ 58277);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _assign_branch_items_page_html_ngResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assign-branch-items.page.html?ngResource */ 39750);
/* harmony import */ var _assign_branch_items_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assign-branch-items.page.scss?ngResource */ 28721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_services_vendor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/vendor.service */ 20725);
















var AssignBranchItemsPage = /*#__PURE__*/function () {
  //#endregion
  function AssignBranchItemsPage(vendorService, pagingService, alertService, cdref, formbuilder, referencesService, inputMaskingService) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AssignBranchItemsPage);

    this.vendorService = vendorService;
    this.pagingService = pagingService;
    this.alertService = alertService;
    this.cdref = cdref;
    this.formbuilder = formbuilder;
    this.referencesService = referencesService;
    this.inputMaskingService = inputMaskingService; //#region Flags

    this.showLoader = false;
    this.showVendors = false;
    this.showItems = false;
    this.showCategories = false;
    this.showBranchItems = false;
    this.showBranchItemModal = false;
    this.vendorPage = 1;
    this.searchVendor = "";
    this.selectedRowIndex = -1;
    this.vendorBranchPage = 1;
    this.selectedBranches = [];
    this.itemResultCount = 0;
    this.itemsPage = 1;
    this.searchItemTerm = "";
    this.selectedItems = [];
    this.allItemSelected = false;
    this.notSelectedItems = [];
    this.categories = [];
    this.categoriesWithoutRoot = [];
    this.categoryPage = 1;
    this.breadcrumbs = [];
    this.currentParentCatCode = null;
    this.searchCategoryTerm = "";
    this.branchItems = [];
    this.branchItemsPage = 1;
    this.branchItemsCount = 0;
    this.branchItemsSearchTerm = "";
    this.savedbranchItemsSearchTerm = ""; //#endregion
    //#region Forms

    this.branchItemForm = this.formbuilder.group({
      itemCode: [null],
      itemPrice: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
      fundedPrice: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required],
      activeRec: [1],
      uuc: [""]
    });

    this.changePaginationPage = function (newPage) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.itemsPage = newPage;
                _context.next = 3;
                return this.getItems();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    };
  } //#region Initialization


  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(AssignBranchItemsPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
        var _this2 = this;

        var cat;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.showLoader = true;
                _context2.next = 3;
                return this.referencesService.getCategoriesItemsRef().toPromise();

              case 3:
                this.namingRef = _context2.sent;
                _context2.next = 6;
                return this.vendorService.getCategories();

              case 6:
                cat = _context2.sent;
                this.categoriesWithoutRoot = this.getActiveCategories(cat);
                this.categories = [{
                  catCode: 0,
                  catName: "جميع " + this.getNamingRefValue("3"),
                  leafCat: null,
                  username: null,
                  updateStamp: null,
                  itemsCount: 0,
                  uuc: null,
                  activeRec: 1,
                  subCategories: this.categoriesWithoutRoot
                }];
                this.filteredCategories = this.categories;
                _context2.next = 12;
                return this.vendorService.getActiveVendors().then(function (res) {
                  _this2.vendors = res;
                  _this2.filteredVendors = res;
                  _this2.showVendors = true;
                });

              case 12:
                this.showLoader = false;

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      this.cdref.detectChanges();
    }
  }, {
    key: "getNamingRefValue",
    value: function getNamingRefValue(code) {
      var _a, _b;

      var ref = (_a = this.namingRef) === null || _a === void 0 ? void 0 : _a.find(function (ref) {
        return ref.ref_code === code;
      });
      return (_b = ref === null || ref === void 0 ? void 0 : ref.ref_desc) !== null && _b !== void 0 ? _b : "";
    } //#endregion
    //#region Vendors

  }, {
    key: "search",
    value: function search($event) {
      var _this3 = this;

      var input = $event.target;
      this.searchVendor = input.value;
      this.vendorPage = 1;
      this.filteredVendors = this.vendors.filter(function (v) {
        return _this3.searchVendor == "" || v.vendor_name.toLowerCase().match(_this3.searchVendor.toLowerCase());
      });
    }
  }, {
    key: "openVendor",
    value: function openVendor(vendor) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5() {
        var _this4 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.showLoader = true;
                this.selectedVendor = vendor;
                this.vendorService.getActiveVendorContracts(vendor.vendor_code).then(function (res) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4() {
                    var _this5 = this;

                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            this.vendorContract = res;
                            _context4.next = 3;
                            return this.vendorService.getActiveVendorContractBranches(vendor.vendor_code).then(function (res) {
                              return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3() {
                                return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
                                  while (1) {
                                    switch (_context3.prev = _context3.next) {
                                      case 0:
                                        this.vendorBranch = res.map(function (x) {
                                          return Object.assign(Object.assign({}, x), {
                                            isChecked: false
                                          });
                                        });
                                        this.showCategories = true;
                                        this.showVendors = false;
                                        this.showLoader = false;

                                      case 4:
                                      case "end":
                                        return _context3.stop();
                                    }
                                  }
                                }, _callee3, this);
                              }));
                            });

                          case 3:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, this);
                  }));
                }).catch(function (err) {
                  console.error(err);
                  _this4.showLoader = false;
                });

              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "changeVendorPage",
    value: function changeVendorPage(newPage) {
      this.vendorPage = newPage;
    } //#endregion
    //#region Items and Branches

  }, {
    key: "changeBranchPage",
    value: function changeBranchPage(newPage) {
      this.vendorBranchPage = newPage;
    }
  }, {
    key: "getItems",
    value: function getItems() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee6() {
        var _this6 = this;

        var leafCatString;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.showLoader = true;
                leafCatString = this.selectedLeafCat.map(function (c) {
                  return c.catCode.toString();
                }).join(",");
                _context6.next = 4;
                return this.vendorService.getActiveItems(this.searchItemTerm, this.itemsPage, leafCatString).toPromise().then(function (res) {
                  _this6.showItems = true;
                  _this6.itemResultCount = res["count"];
                  _this6.itemList = res["result"].map(function (x) {
                    return Object.assign(Object.assign({}, x), {
                      isChecked: _this6.getCheckStatus(x)
                    });
                  });
                  _this6.showLoader = false;
                });

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "getCheckStatus",
    value: function getCheckStatus(item) {
      if (this.allItemSelected) {
        if (this.notSelectedItems.find(function (x) {
          return x.itemCode === item.itemCode;
        })) return false;else return true;
      } else {
        if (this.selectedItems.find(function (x) {
          return x.itemCode === item.itemCode;
        })) return true;else return false;
      }
    }
  }, {
    key: "assignItems",
    value: function assignItems() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee9() {
        var _this7 = this;

        var request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.alertService.SaveAlert("هل تريد الحفظ؟");

              case 2:
                if (!_context9.sent) {
                  _context9.next = 13;
                  break;
                }

                if (!(this.selectedBranches.length === 0)) {
                  _context9.next = 6;
                  break;
                }

                this.alertService.showAlertError("يجب اختيار فروع", false);
                return _context9.abrupt("return");

              case 6:
                if (!(this.selectedItems.length === 0 && !this.allItemSelected)) {
                  _context9.next = 9;
                  break;
                }

                this.alertService.showAlertError("يجب اختيار " + this.getNamingRefValue("3"), false);
                return _context9.abrupt("return");

              case 9:
                this.showLoader = true;
                request = {
                  vendorCode: this.selectedVendor.vendor_code,
                  categories: this.selectedLeafCat.map(function (c) {
                    return c.catCode.toString();
                  }).join(","),
                  vendorBranches: this.selectedBranches,
                  selectedItems: this.selectedItems,
                  notSelectedItems: this.notSelectedItems,
                  allItemsSelected: this.allItemSelected === true ? 1 : 0
                };
                _context9.next = 13;
                return this.vendorService.assignItemsToBranches(request).then(function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee7() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return this.alertService.showAlertConfirm("تم تعيين " + this.getNamingRefValue("3") + " للفروع ", false);

                          case 2:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7, this);
                  }));
                }).catch(function (err) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee8() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            console.log(err.error);
                            _context8.next = 3;
                            return this.alertService.showAlertError(err.error, false);

                          case 3:
                            return _context8.abrupt("return");

                          case 4:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8, this);
                  }));
                }).finally(function () {
                  _this7.showLoader = false;
                });

              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    } //#endregion
    //#region Category

  }, {
    key: "changeCategoryPage",
    value: function changeCategoryPage(newPage) {
      this.categoryPage = newPage;
    }
  }, {
    key: "getActiveCategories",
    value: function getActiveCategories(categories) {
      var _this8 = this;

      return categories.filter(function (cat) {
        return cat.activeRec === 1;
      }).map(function (cat) {
        return Object.assign(Object.assign({}, cat), {
          subCategories: _this8.getActiveCategories(cat.subCategories)
        });
      });
    }
  }, {
    key: "getLeafCategoriesUnder",
    value: function getLeafCategoriesUnder(catCode) {
      var findCategoryByCode = function findCategoryByCode(categories, code) {
        var _iterator = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(categories),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var cat = _step.value;
            if (cat.catCode === code) return cat;
            var found = findCategoryByCode(cat.subCategories, code);
            if (found) return found;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return undefined;
      };

      var collectLeafCategories = function collectLeafCategories(category) {
        if (category.leafCat) return [category];
        var leaves = [];

        var _iterator2 = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(category.subCategories),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var sub = _step2.value;
            leaves = leaves.concat(collectLeafCategories(sub));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return leaves;
      };

      var startCategory = findCategoryByCode(this.categories, catCode);
      if (!startCategory) return [];
      return collectLeafCategories(startCategory);
    }
  }, {
    key: "navigateCategory",
    value: function navigateCategory(cat) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee10() {
        var element;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                element = this.categoryContainer.nativeElement;
                element.classList.add("swipe-right");
                _context10.next = 4;
                return new Promise(function (resolve) {
                  element.addEventListener("animationend", function () {
                    resolve(true);
                  }, {
                    once: true
                  });
                });

              case 4:
                this.showLoader = true;
                this.currentParentCatCode = cat.catCode;

                if (!this.breadcrumbs.includes(cat)) {
                  this.breadcrumbs.push(cat);
                } else {
                  if (this.breadcrumbs.indexOf(cat) + 1 < this.breadcrumbs.length) {
                    this.breadcrumbs = this.breadcrumbs.slice(0, this.breadcrumbs.indexOf(cat) + 1);
                  }
                }

                this.selectedCategory = cat.subCategories;
                this.filteredCategories = cat.subCategories;
                this.searchCategoryTerm = "";
                this.categoryPage = 1;
                this.showLoader = false;
                element.classList.remove("swipe-right");

              case 13:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
    }
  }, {
    key: "backCategoryLevel",
    value: function backCategoryLevel() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee11() {
        var element;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.showLoader = true;
                this.breadcrumbs.pop();

                if (!(this.breadcrumbs.length > 0)) {
                  _context11.next = 6;
                  break;
                }

                this.navigateCategory(this.breadcrumbs[this.breadcrumbs.length - 1]);
                _context11.next = 16;
                break;

              case 6:
                element = this.categoryContainer.nativeElement;
                element.classList.add("swipe-right");
                _context11.next = 10;
                return new Promise(function (resolve) {
                  element.addEventListener("animationend", function () {
                    resolve(true);
                  }, {
                    once: true
                  });
                });

              case 10:
                this.selectedCategory = this.categories;
                this.filteredCategories = this.categories;
                this.currentParentCatCode = null;
                this.categoryPage = 1;
                this.searchCategoryTerm = "";
                element.classList.remove("swipe-right");

              case 16:
                this.showLoader = false;

              case 17:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
    }
  }, {
    key: "returnToHome",
    value: function returnToHome() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee12() {
        var element;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!(this.selectedCategory === this.categories)) {
                  _context12.next = 2;
                  break;
                }

                return _context12.abrupt("return");

              case 2:
                element = this.categoryContainer.nativeElement;
                element.classList.add("swipe-right");
                _context12.next = 6;
                return new Promise(function (resolve) {
                  element.addEventListener("animationend", function () {
                    resolve(true);
                  }, {
                    once: true
                  });
                });

              case 6:
                this.showLoader = true;
                this.breadcrumbs = [];
                this.selectedCategory = this.categories;
                this.filteredCategories = this.categories;
                this.currentParentCatCode = null;
                this.categoryPage = 1;
                this.searchCategoryTerm = "";
                this.showLoader = false;
                element.classList.remove("swipe-right");

              case 15:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
    }
  }, {
    key: "getCategoryItems",
    value: function getCategoryItems(cat) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee13() {
        var _this9 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.showLoader = true;
                this.selectedLeafCat = this.getLeafCategoriesUnder(cat.catCode);
                _context13.next = 4;
                return this.getItems().then(function () {
                  _this9.showItems = true;
                  _this9.showCategories = false;
                  _this9.showLoader = false;
                });

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
    }
  }, {
    key: "backToVendors",
    value: function backToVendors() {
      if (this.showItems) {
        this.itemsPage = 1;
        this.showItems = false;
        this.showCategories = true;
      } else if (this.showCategories) {
        this.vendorBranch = null;
        this.vendorContract = null;
        this.showCategories = false;
        this.showVendors = true;
        this.itemList = [];
        this.selectedItems = [];
        this.notSelectedItems = [];
        this.itemResultCount = 0;
        this.searchItemTerm = "";
        this.allItemSelected = false;
      }
    }
  }, {
    key: "getCategoryPathArray",
    value: function getCategoryPathArray(categories, targetCatCode) {
      var _a;

      var _iterator3 = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(categories),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var category = _step3.value;

          if (category.catCode === targetCatCode) {
            return [category];
          }

          if ((_a = category.subCategories) === null || _a === void 0 ? void 0 : _a.length) {
            var subPath = this.getCategoryPathArray(category.subCategories, targetCatCode);

            if (subPath) {
              return [category].concat((0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subPath));
            }
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return null;
    } //#endregion
    //region Checbox Branches

  }, {
    key: "isAllBranchesSelected",
    set: function set(value) {
      this.vendorBranch.forEach(function (br) {
        return br.isChecked = value;
      });
    }
  }, {
    key: "onBranchesCheckboxMasterChange",
    value: function onBranchesCheckboxMasterChange(event) {
      var isChecked = event.target.checked;
      this.vendorBranch.forEach(function (br) {
        return br.isChecked = isChecked;
      });
      this.updateSelectedBranchesForAll(isChecked);
    }
  }, {
    key: "updateSelectedBranchesForAll",
    value: function updateSelectedBranchesForAll(isChecked) {
      var _this10 = this;

      this.selectedBranches = [];

      if (isChecked) {
        this.vendorBranch.forEach(function (br) {
          _this10.selectedBranches.push(br);
        });
      }
    }
  }, {
    key: "onBranchCheckboxChange",
    value: function onBranchCheckboxChange(event, br, index) {
      var selectedApp = this.vendorBranch[index + this.pagingService.pageSize * (this.vendorBranchPage - 1)];
      selectedApp.isChecked = event.target.checked;
      this.updateSelectedBranch(br, event.target.checked);
      this.updateBranchMasterCheckbox();

      if (this.vendorBranch.length !== this.selectedBranches.length) {
        if (this.selectedBranches.length === 0) {
          this.ionCheckBoxBranches.indeterminate = false;
        } else {
          this.ionCheckBoxBranches.indeterminate = true;
        }
      } else if (this.vendorBranch.length === this.selectedBranches.length) {
        this.ionCheckBoxBranches.indeterminate = false;
        this.ionCheckBoxBranches.checked = true;
        this.isAllBranchesSelected = true;
      }
    }
  }, {
    key: "updateSelectedBranch",
    value: function updateSelectedBranch(br, isChecked) {
      var index = this.selectedBranches.indexOf(br);

      if (isChecked && index === -1) {
        this.selectedBranches.push(br);
      } else if (!isChecked && index > -1) {
        this.selectedBranches.splice(index, 1);
      }
    }
  }, {
    key: "updateBranchMasterCheckbox",
    value: function updateBranchMasterCheckbox() {
      var allSelected = this.vendorBranch.every(function (app) {
        return app.isChecked;
      });
      var someSelected = this.vendorBranch.some(function (app) {
        return app.isChecked;
      });

      if (allSelected) {
        this.isAllBranchesSelected = true;
      } else if (!someSelected) {
        this.ionCheckBoxBranches.checked = false;
        this.ionCheckBoxBranches.indeterminate = false;
        this.isAllBranchesSelected = false;
      }
    } //endregion
    //region Checbox Items

  }, {
    key: "onItemsCheckboxMasterChange",
    value: function onItemsCheckboxMasterChange(event) {
      var isChecked = event.target.checked;

      if (isChecked) {
        this.allItemSelected = true;
        this.ionCheckBoxItems.checked = true;
        this.ionCheckBoxItems.indeterminate = false;
        this.itemList.forEach(function (x) {
          return x.isChecked = true;
        });
        this.selectedItems = [];
        this.notSelectedItems = [];
      } else {
        this.ionCheckBoxItems.checked = false;
        this.ionCheckBoxItems.indeterminate = false;
        this.allItemSelected = false;
        this.itemList.forEach(function (x) {
          return x.isChecked = false;
        });
        this.selectedItems = [];
        this.notSelectedItems = [];
      }
    }
  }, {
    key: "onItemCheckboxChange",
    value: function onItemCheckboxChange(event, br) {
      var selectedApp = br;
      selectedApp.isChecked = event;
      this.updateSelectedItem(selectedApp);

      if (this.allItemSelected) {
        if (this.notSelectedItems.length === this.itemResultCount) {
          this.ionCheckBoxItems.checked = false;
        } else {
          if (this.notSelectedItems.length > 0) {
            this.ionCheckBoxItems.indeterminate = true;
          } else {
            this.ionCheckBoxItems.indeterminate = false;
          }
        }
      } else {
        if (this.selectedItems.length === this.itemResultCount) {
          this.ionCheckBoxItems.checked;
        } else {
          if (this.selectedItems.length > 0) {
            this.ionCheckBoxItems.indeterminate = true;
          } else {
            this.ionCheckBoxItems.indeterminate = false;
          }
        }
      }
    }
  }, {
    key: "updateSelectedItem",
    value: function updateSelectedItem(br) {
      if (this.allItemSelected) {
        var index = this.notSelectedItems.indexOf(br);

        if (!br.isChecked && index === -1) {
          this.notSelectedItems.push(br);
        } else if (br.isChecked && index > -1) {
          this.notSelectedItems.splice(index, 1);
        }
      } else {
        var _index = this.selectedItems.indexOf(br);

        if (br.isChecked && _index === -1) {
          this.selectedItems.push(br);
        } else if (!br.isChecked && _index > -1) {
          this.selectedItems.splice(_index, 1);
        }
      }

      console.log("this.selectedItems", this.selectedItems);
      console.log("this.notSelectedItems", this.notSelectedItems);
    } //endregion
    //#region Branch Items

  }, {
    key: "openBranch",
    value: function openBranch(branch) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee14() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                this.selectedVendorBranch = branch;
                this.showBranchItems = true;
                this.showItems = false;
                this.showCategories = false;
                this.selectedBranches = [];
                this.selectedItems = [];
                this.notSelectedItems = [];
                this.allItemSelected = false;
                this.vendorBranch.forEach(function (x) {
                  return x.isChecked = false;
                });
                _context14.next = 11;
                return this.getBranchItems();

              case 11:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
    }
  }, {
    key: "searchBranchItems",
    value: function searchBranchItems() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee15() {
        var _this11 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                this.showLoader = true;
                this.branchItemsSearchTerm = this.searchBranchItemInput.value.toString();
                if (this.savedbranchItemsSearchTerm != this.branchItemsSearchTerm) this.branchItemsPage = 1;
                _context15.next = 5;
                return this.vendorService.getBranchItems(this.branchItemsSearchTerm, this.branchItemsPage, this.selectedVendorBranch.vendorCode, this.vendorContract[0].vendContractCode, this.selectedVendorBranch.vendorBrCode).toPromise().then(function (res) {
                  _this11.savedbranchItemsSearchTerm = _this11.branchItemsSearchTerm;
                  _this11.branchItemsCount = res.count;
                  _this11.branchItems = res["result"];
                  _this11.showLoader = false;
                });

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
    }
  }, {
    key: "getBranchItems",
    value: function getBranchItems() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee17() {
        var _this12 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                this.showLoader = true;
                this.vendorService.getBranchItems(this.branchItemsSearchTerm, this.branchItemsPage, this.selectedVendorBranch.vendorCode, this.vendorContract[0].vendContractCode, this.selectedVendorBranch.vendorBrCode).toPromise().then(function (res) {
                  _this12.branchItemsCount = res.count;
                  _this12.branchItems = res["result"];
                  _this12.showBranchItems = true;
                  _this12.showItems = false;
                  _this12.showCategories = false;
                }).catch(function (err) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this12, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee16() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee16$(_context16) {
                      while (1) {
                        switch (_context16.prev = _context16.next) {
                          case 0:
                            _context16.next = 2;
                            return this.alertService.showAlertError(err.error, false);

                          case 2:
                          case "end":
                            return _context16.stop();
                        }
                      }
                    }, _callee16, this);
                  }));
                }).finally(function () {
                  _this12.showLoader = false;
                });

              case 2:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
    }
  }, {
    key: "backToItems",
    value: function backToItems() {
      this.showLoader = true;
      this.showBranchItems = false;
      this.branchItems = [];
      this.branchItemsCount = 0;
      this.branchItemsPage = 1;
      this.branchItemsSearchTerm = "";
      this.showItems = false;
      this.showCategories = true;
      this.showLoader = false;
    }
  }, {
    key: "changeBranchItemPage",
    value: function changeBranchItemPage(newPage) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee18() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                this.branchItemsPage = newPage;
                _context18.next = 3;
                return this.getBranchItems();

              case 3:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
    }
  }, {
    key: "openBranchItemModal",
    value: function openBranchItemModal(item) {
      this.selectedBranchItem = item;
      this.selectedBranchItemCategoryPath = this.getCategoryPathArray(this.categoriesWithoutRoot, item.catCode);
      this.branchItemForm.patchValue({
        itemCode: item.itemCode,
        itemPrice: item.itemPrice,
        fundedPrice: item.fundedPrice,
        activeRec: item.activeRec === 1,
        uuc: item.uuc
      });
      this.showBranchItemModal = true;
    }
  }, {
    key: "closeBranchItemModal",
    value: function closeBranchItemModal() {
      this.showBranchItemModal = false;
      this.branchItemForm.reset();
    }
  }, {
    key: "editBranchItem",
    value: function editBranchItem() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee21() {
        var _this13 = this;

        var request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return this.alertService.SaveAlert("هل تريد الحفظ؟");

              case 2:
                if (!_context21.sent) {
                  _context21.next = 4;
                  break;
                }

                if (this.branchItemForm.valid) {
                  this.showLoader = true;
                  request = {
                    vendorCode: this.selectedBranchItem.vendorCode,
                    vendContractCode: this.selectedBranchItem.vendContractCode,
                    vendorBrCode: this.selectedBranchItem.vendorBrCode,
                    uuc: this.branchItemForm.value.uuc,
                    itemCode: this.branchItemForm.value.itemCode,
                    itemPrice: this.branchItemForm.value.itemPrice,
                    fundedPrice: this.branchItemForm.value.fundedPrice,
                    activeRec: this.branchItemForm.value.activeRec === true ? 1 : 0
                  };
                  this.vendorService.editBranchItem(request).then(function () {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this13, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee19() {
                      var _this14 = this;

                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee19$(_context19) {
                        while (1) {
                          switch (_context19.prev = _context19.next) {
                            case 0:
                              _context19.next = 2;
                              return this.alertService.showAlertConfirm("تم حفظ ال" + this.getNamingRefValue("4") + " بنجاح", false);

                            case 2:
                              this.searchBranchItems().then(function () {
                                _this14.closeBranchItemModal();

                                _this14.showLoader = false;
                              });

                            case 3:
                            case "end":
                              return _context19.stop();
                          }
                        }
                      }, _callee19, this);
                    }));
                  }).catch(function (err) {
                    return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this13, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee20() {
                      return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee20$(_context20) {
                        while (1) {
                          switch (_context20.prev = _context20.next) {
                            case 0:
                              _context20.next = 2;
                              return this.alertService.showAlertError(err.error, false);

                            case 2:
                              this.showLoader = false;

                            case 3:
                            case "end":
                              return _context20.stop();
                          }
                        }
                      }, _callee20, this);
                    }));
                  });
                }

              case 4:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));
    }
  }, {
    key: "deleteBranchItem",
    value: function deleteBranchItem(item) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee24() {
        var _this15 = this;

        var request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return this.alertService.SaveAlert("هل تريد حذف هذا ال" + this.getNamingRefValue("4") + " من هذا الفرع؟");

              case 2:
                if (!_context24.sent) {
                  _context24.next = 6;
                  break;
                }

                this.showLoader = true;
                request = {
                  vendorCode: item.vendorCode,
                  vendContractCode: item.vendContractCode,
                  vendorBrCode: item.vendorBrCode,
                  uuc: item.uuc,
                  itemCode: item.itemCode
                };
                this.vendorService.deleteBranchItem(request).then(function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this15, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee22() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee22$(_context22) {
                      while (1) {
                        switch (_context22.prev = _context22.next) {
                          case 0:
                            _context22.next = 2;
                            return this.alertService.showAlertConfirm("تم حذف ال" + this.getNamingRefValue("4") + " بنجاح", false);

                          case 2:
                            this.searchBranchItems();

                          case 3:
                          case "end":
                            return _context22.stop();
                        }
                      }
                    }, _callee22, this);
                  }));
                }).catch(function (err) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this15, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee23() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee23$(_context23) {
                      while (1) {
                        switch (_context23.prev = _context23.next) {
                          case 0:
                            _context23.next = 2;
                            return this.alertService.showAlertError(err.error, false);

                          case 2:
                            this.showLoader = false;

                          case 3:
                          case "end":
                            return _context23.stop();
                        }
                      }
                    }, _callee23, this);
                  }));
                });

              case 6:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));
    }
  }]);

  return AssignBranchItemsPage;
}();

AssignBranchItemsPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_vendor_service__WEBPACK_IMPORTED_MODULE_11__.VendorService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_9__.pagingService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_10__.ReferencesService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_8__.InputMaskingService
  }];
};

AssignBranchItemsPage.propDecorators = {
  ionCheckBoxBranches: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ["ionCheckBoxBranches"]
  }],
  ionCheckBoxItems: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ["ionCheckBoxItems"]
  }],
  categoryContainer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ["categoryContainer"]
  }],
  searchBranchItemInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ["searchBranchItemInput"]
  }]
};
AssignBranchItemsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: "app-assign-branch-items",
  template: _assign_branch_items_page_html_ngResource__WEBPACK_IMPORTED_MODULE_5__,
  styles: [_assign_branch_items_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_6__]
})], AssignBranchItemsPage);


/***/ }),

/***/ 28721:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/consumer/assign-branch-items/assign-branch-items.page.scss?ngResource ***!
  \***************************************************************************************************/
/***/ (function(module) {

module.exports = ".search-bar {\n  padding: 0px;\n}\n@media (min-width: 768px) {\n  .search-bar {\n    width: 80%;\n  }\n}\n.clickable {\n  cursor: pointer;\n}\n.swipe-right {\n  -webkit-animation: swipeRight 0.5s ease forwards;\n          animation: swipeRight 0.5s ease forwards;\n}\n@-webkit-keyframes swipeRight {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(100px);\n    opacity: 0;\n  }\n}\n@keyframes swipeRight {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(100px);\n    opacity: 0;\n  }\n}\n.form-control {\n  height: -webkit-fit-content !important;\n  height: -moz-fit-content !important;\n  height: fit-content !important;\n}\n.breadcrumb-label {\n  padding: 5px;\n  border-radius: 5px;\n}\n.breadcrumb-label:hover {\n  background: rgba(128, 128, 128, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbi1icmFuY2gtaXRlbXMucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcRGVsZXRlJTIwaXRcXE5ld01vaGFzc2lsQ2xpZW50XzMwOTVfc3JjXFxOZXdNb2hhc3NpbENsaWVudFxcc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcY29uc3VtZXJcXGFzc2lnbi1icmFuY2gtaXRlbXNcXGFzc2lnbi1icmFuY2gtaXRlbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQUU7RUFGRjtJQUdJLFVBQUE7RUNHRjtBQUNGO0FEQUE7RUFDRSxlQUFBO0FDR0Y7QURBQTtFQUNFLGdEQUFBO1VBQUEsd0NBQUE7QUNHRjtBREFBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUNHRjtFRERBO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VDR0Y7QUFDRjtBRFhBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUNHRjtFRERBO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VDR0Y7QUFDRjtBREFBO0VBQ0Usc0NBQUE7RUFBQSxtQ0FBQTtFQUFBLDhCQUFBO0FDRUY7QURDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0VGO0FEREU7RUFDRSxvQ0FBQTtBQ0dKIiwiZmlsZSI6ImFzc2lnbi1icmFuY2gtaXRlbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaC1iYXIge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2xpY2thYmxlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zd2lwZS1yaWdodCB7XHJcbiAgYW5pbWF0aW9uOiBzd2lwZVJpZ2h0IDAuNXMgZWFzZSBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBzd2lwZVJpZ2h0IHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnJlYWRjcnVtYi1sYWJlbCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zKTtcclxuICB9XHJcbn1cclxuIiwiLnNlYXJjaC1iYXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNlYXJjaC1iYXIge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cblxuLmNsaWNrYWJsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN3aXBlLXJpZ2h0IHtcbiAgYW5pbWF0aW9uOiBzd2lwZVJpZ2h0IDAuNXMgZWFzZSBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBzd2lwZVJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQgIWltcG9ydGFudDtcbn1cblxuLmJyZWFkY3J1bWItbGFiZWwge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5icmVhZGNydW1iLWxhYmVsOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xufSJdfQ== */";

/***/ }),

/***/ 39750:
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/consumer/assign-branch-items/assign-branch-items.page.html?ngResource ***!
  \***************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<h3>تعيين {{getNamingRefValue(\"3\")}} للفروع</h3>\n<ion-label *ngIf=\"showBranchItems\"\n  >فرع: {{selectedVendorBranch.vendorBrName}}</ion-label\n>\n\n<ion-card *ngIf=\"showVendors && vendors.length > 0\">\n  <ion-row class=\"ion-padding\">\n    <ion-col style=\"justify-items: center\">\n      <ion-searchbar\n        [(ngModel)]=\"searchVendor\"\n        class=\"search-bar\"\n        placeholder=\"بحث\"\n        (ionInput)=\"search($event)\"\n      ></ion-searchbar>\n    </ion-col>\n  </ion-row>\n  <ion-grid [fixed]=\"true\" style=\"min-width: 800px\" class=\"scroll-container\">\n    <ion-row class=\"header-row\">\n      <ion-col size=\"11\"><ion-label>اسم المورد</ion-label></ion-col>\n      <ion-col size=\"1\"> </ion-col>\n    </ion-row>\n    <ion-row\n      class=\"details-row\"\n      *ngFor=\"let vendor of this.pagingService.Paging(filteredVendors, vendorPage); let i = index\"\n    >\n      <ion-col size=\"11\">\n        <ion-label>{{vendor.vendor_name}}</ion-label>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-button (click)=\"openVendor(vendor)\">\n          <ion-icon name=\"caret-back-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-pagination\n    [page]=\"vendorPage\"\n    [collectionSize]=\"filteredVendors.length\"\n    (pageChange)=\"changeVendorPage($event);\"\n  ></app-pagination>\n</ion-card>\n\n<ion-breadcrumbs *ngIf=\"showCategories\">\n  <ion-breadcrumb>\n    <ion-icon\n      name=\"home-outline\"\n      (click)=\"returnToHome()\"\n      class=\"clickable\"\n    ></ion-icon>\n    <ion-icon slot=\"separator\" name=\"arrow-back-circle\"></ion-icon>\n  </ion-breadcrumb>\n  <ion-breadcrumb *ngFor=\"let cat of breadcrumbs\">\n    <ion-label\n      class=\"breadcrumb-label clickable\"\n      (click)=\"navigateCategory(cat)\"\n      >{{cat.catName}}</ion-label\n    >\n    <ion-icon slot=\"separator\" name=\"arrow-back-circle\"></ion-icon>\n  </ion-breadcrumb>\n</ion-breadcrumbs>\n\n<ion-breadcrumbs *ngIf=\"showItems\">\n  <ion-breadcrumb>\n    <ion-icon name=\"home-outline\"></ion-icon>\n    <ion-icon slot=\"separator\" name=\"arrow-back-circle\"></ion-icon>\n  </ion-breadcrumb>\n  <ion-breadcrumb *ngFor=\"let cat of breadcrumbs\">\n    <ion-label>{{cat.catName}}</ion-label>\n    <ion-icon slot=\"separator\" name=\"arrow-back-circle\"></ion-icon>\n  </ion-breadcrumb>\n</ion-breadcrumbs>\n\n<ion-card *ngIf=\"showCategories || showItems\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"8\" *ngIf=\"showCategories\">\n        <div\n          #categoryContainer\n          class=\"table-responsive ion-padding category-container\"\n        >\n          <ion-grid\n            [fixed]=\"true\"\n            style=\"min-width: 800px\"\n            class=\"scroll-container\"\n          >\n            <ion-row class=\"header-row\">\n              <ion-col size=\"1\">\n                <ion-button\n                  *ngIf=\"breadcrumbs.length > 0\"\n                  (click)=\"backCategoryLevel()\"\n                >\n                  <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"6\"\n                ><ion-label\n                  >اسم ال{{getNamingRefValue(\"2\")}}</ion-label\n                ></ion-col\n              >\n              <ion-col size=\"6\"></ion-col>\n            </ion-row>\n            <ion-row\n              class=\"details-row\"\n              *ngFor=\"let cat of this.pagingService.Paging(filteredCategories, categoryPage); let i = index\"\n            >\n              <ion-col size=\"1\">\n                <ion-button\n                  [disabled]=\"cat.leafCat\"\n                  (click)=\"navigateCategory(cat)\"\n                >\n                  <ion-icon name=\"caret-back-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-label>{{cat.catName}}</ion-label>\n              </ion-col>\n              <ion-col size=\"5\" (click)=\"getCategoryItems(cat)\">\n                <ion-button> عرض {{getNamingRefValue(\"3\")}} </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n        <app-pagination\n          [page]=\"categoryPage\"\n          [collectionSize]=\"filteredCategories.length\"\n          (pageChange)=\"changeCategoryPage($event);\"\n        ></app-pagination>\n      </ion-col>\n      <ion-col size=\"8\" *ngIf=\"showItems\">\n        <div class=\"table-responsive ion-padding category-container\">\n          <ion-grid\n            [fixed]=\"true\"\n            style=\"min-width: 800px\"\n            class=\"scroll-container\"\n          >\n            <ion-row class=\"header-row\">\n              <ion-col size=\"1\">\n                <ion-checkbox\n                  type=\"checkbox\"\n                  #ionCheckBoxItems\n                  (ionChange)=\"onItemsCheckboxMasterChange($event)\"\n                  [checked]=\"allItemSelected\"\n                ></ion-checkbox>\n              </ion-col>\n              <ion-col size=\"6\"\n                ><ion-label\n                  >اسم ال{{getNamingRefValue(\"4\")}}</ion-label\n                ></ion-col\n              >\n              <ion-col size=\"5\"><ion-label>الكود الخارجي</ion-label></ion-col>\n              <ion-col size=\"1\"></ion-col>\n            </ion-row>\n            <ion-row\n              class=\"details-row\"\n              *ngFor=\"let item of itemList; let i = index\"\n            >\n              <ion-col size=\"1\">\n                <ion-checkbox\n                  type=\"checkbox\"\n                  (ngModelChange)=\"onItemCheckboxChange($event,item)\"\n                  [(ngModel)]=\"item.isChecked\"\n                ></ion-checkbox>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-label>{{item.itemName}}</ion-label>\n              </ion-col>\n              <ion-col size=\"5\">\n                <ion-label>{{item.itemExtCode}}</ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n        <app-pagination\n          [page]=\"itemsPage\"\n          [collectionSize]=\"itemResultCount\"\n          (pageChange)=\"changePaginationPage($event);\"\n        ></app-pagination>\n      </ion-col>\n      <ion-col size=\"4\">\n        <div class=\"table-responsive ion-padding category-container\">\n          <ion-grid\n            [fixed]=\"true\"\n            style=\"min-width: 100px\"\n            class=\"scroll-container\"\n          >\n            <ion-row class=\"header-row\">\n              <ion-col size=\"1\">\n                <ion-checkbox\n                  type=\"checkbox\"\n                  #ionCheckBoxBranches\n                  (ionChange)=\"onBranchesCheckboxMasterChange($event)\"\n                  [checked]=\"isAllBranchesSelected\"\n                ></ion-checkbox>\n              </ion-col>\n              <ion-col size=\"7\"><ion-label>اسم الفرع</ion-label></ion-col>\n              <ion-col size=\"4\"></ion-col>\n            </ion-row>\n            <ion-row\n              class=\"details-row\"\n              *ngFor=\"let branch of this.pagingService.Paging(vendorBranch, vendorBranchPage); let i = index\"\n            >\n              <ion-col size=\"1\">\n                <ion-checkbox\n                  type=\"checkbox\"\n                  (ionChange)=\"onBranchCheckboxChange($event, branch , i)\"\n                  [checked]=\"branch.isChecked\"\n                ></ion-checkbox>\n              </ion-col>\n              <ion-col size=\"7\">\n                <ion-label>{{branch.vendorBrName}}</ion-label>\n              </ion-col>\n              <ion-col size=\"4\">\n                <ion-button (click)=\"openBranch(branch)\">\n                  <ion-icon name=\"caret-back-outline\"></ion-icon>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n        <app-pagination\n          [page]=\"vendorBranchPage\"\n          [collectionSize]=\"vendorBranch.length\"\n          (pageChange)=\"changeBranchPage($event);\"\n        ></app-pagination>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-row>\n    <ion-col size=\"12\" style=\"text-align: center\">\n      <ion-button color=\"danger\" (click)=\"backToVendors()\">\n        <ion-label>رجوع</ion-label>\n      </ion-button>\n      <ion-button [disabled]=\"showCategories\" (click)=\"assignItems()\">\n        <ion-label>تعيين {{getNamingRefValue(\"3\")}}</ion-label>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-card>\n\n<ion-card *ngIf=\"showBranchItems\">\n  <ion-row class=\"ion-padding search-bar-items\">\n    <ion-col size=\"11\">\n      <ion-input\n        #searchBranchItemInput\n        placeholder=\"بحث\"\n        (keydown.enter)=\"searchBranchItems()\"\n      ></ion-input>\n    </ion-col>\n    <ion-col size=\"1\">\n      <ion-button (click)=\"searchBranchItems()\"> بحث </ion-button>\n    </ion-col>\n  </ion-row>\n  <div class=\"table-responsive ion-padding category-container\">\n    <ion-grid [fixed]=\"true\" style=\"min-width: 800px\" class=\"scroll-container\">\n      <ion-row class=\"header-row\">\n        <ion-col size=\"6\"\n          ><ion-label>اسم ال{{getNamingRefValue(\"4\")}}</ion-label></ion-col\n        >\n        <ion-col size=\"4\"><ion-label>الكود الخارجي</ion-label></ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n      <ion-row\n        class=\"details-row\"\n        *ngFor=\"let item of branchItems; let i = index\"\n      >\n        <ion-col size=\"6\">\n          <ion-label>{{item.itemName}}</ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-label>{{item.itemExtCode}}</ion-label>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-button (click)=\"openBranchItemModal(item)\">\n            <ion-icon name=\"create-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-button (click)=\"deleteBranchItem(item)\" color=\"danger\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <app-pagination\n    [page]=\"branchItemsPage\"\n    [collectionSize]=\"branchItemsCount\"\n    (pageChange)=\"changeBranchItemPage($event);\"\n  ></app-pagination>\n  <ion-row>\n    <ion-col size=\"12\" style=\"text-align: center\">\n      <ion-button color=\"danger\" (click)=\"backToItems()\">\n        <ion-label>رجوع</ion-label>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-card>\n\n<ion-modal\n  [isOpen]=\"showBranchItemModal\"\n  class=\"modal-fullscreen\"\n  (willDismiss)=\"closeBranchItemModal()\"\n>\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-button (click)=\"closeBranchItemModal()\">\n            <ion-icon name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <ion-title>تعديل ال{{getNamingRefValue(\"4\")}}</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class=\"ion-padding\">\n      <app-loader [isVisible]=\"showLoader\"></app-loader>\n      <form [formGroup]=\"branchItemForm\" (ngSubmit)=\"editBranchItem()\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>اسم ال{{getNamingRefValue(\"4\")}}</ion-label>\n              <br />\n              <ion-label class=\"form-control\"\n                >{{selectedBranchItem.itemName}}</ion-label\n              >\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-label>مسار ال{{getNamingRefValue(\"4\")}}</ion-label>\n              <div class=\"form-control\">\n                <ion-breadcrumbs>\n                  <ion-breadcrumb\n                    *ngFor=\"let cat of selectedBranchItemCategoryPath\"\n                  >\n                    <ion-label>{{ cat.catName }}</ion-label>\n                    <ion-icon\n                      slot=\"separator\"\n                      name=\"arrow-back-circle\"\n                    ></ion-icon>\n                  </ion-breadcrumb>\n                </ion-breadcrumbs>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>سعر ال{{getNamingRefValue('4')}}</ion-label>\n              <ion-input\n                type=\"text\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 2)\"\n                formControlName=\"itemPrice\"\n                placeholder=\"سعر ال{{getNamingRefValue('4')}}\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-label>السعر الممول</ion-label>\n              <ion-input\n                type=\"text\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 2)\"\n                formControlName=\"fundedPrice\"\n                placeholder=\"السعر الممول\"\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"1\">\n              <ion-checkbox formControlName=\"activeRec\"> </ion-checkbox>\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-label>فعال</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-button type=\"submit\" expand=\"full\"> تعديل </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_consumer_assign-branch-items_assign-branch-items_module_ts.js.map