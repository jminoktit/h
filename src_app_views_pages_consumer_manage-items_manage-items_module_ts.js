"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_consumer_manage-items_manage-items_module_ts"],{

/***/ 28416:
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/consumer/manage-items/manage-items-routing.module.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageItemsPageRoutingModule": function() { return /* binding */ ManageItemsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _manage_items_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-items.page */ 57763);






var routes = [{
  path: '',
  component: _manage_items_page__WEBPACK_IMPORTED_MODULE_2__.ManageItemsPage
}];

var ManageItemsPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ManageItemsPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ManageItemsPageRoutingModule);
});

ManageItemsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ManageItemsPageRoutingModule);


/***/ }),

/***/ 68856:
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/consumer/manage-items/manage-items.module.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageItemsPageModule": function() { return /* binding */ ManageItemsPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _manage_items_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-items-routing.module */ 28416);
/* harmony import */ var _manage_items_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-items.page */ 57763);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var ManageItemsPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ManageItemsPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ManageItemsPageModule);
});

ManageItemsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _manage_items_routing_module__WEBPACK_IMPORTED_MODULE_2__.ManageItemsPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule],
  declarations: [_manage_items_page__WEBPACK_IMPORTED_MODULE_3__.ManageItemsPage]
})], ManageItemsPageModule);


/***/ }),

/***/ 57763:
/*!************************************************************************!*\
  !*** ./src/app/views/pages/consumer/manage-items/manage-items.page.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageItemsPage": function() { return /* binding */ ManageItemsPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ 58277);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _manage_items_page_html_ngResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-items.page.html?ngResource */ 87420);
/* harmony import */ var _manage_items_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-items.page.scss?ngResource */ 46574);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_services_vendor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/core/services/vendor.service */ 20725);
















var ManageItemsPage = /*#__PURE__*/function () {
  //#endregion
  function ManageItemsPage(vendorService, alertService, formbuilder, pagingService, cdref, referenceService, inputMaskingService) {
    var _this = this;

    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ManageItemsPage);

    this.vendorService = vendorService;
    this.alertService = alertService;
    this.formbuilder = formbuilder;
    this.pagingService = pagingService;
    this.cdref = cdref;
    this.referenceService = referenceService;
    this.inputMaskingService = inputMaskingService; //#region Flags

    this.showLoader = false;
    this.showCategoryPath = false;
    this.showCategories = false;
    this.showItems = false;
    this.showAddItemModal = false;
    this.showEditItemModal = false;
    this.page = 1;
    this.resultCount = 0;
    this.searchTerm = "";
    this.searchItemTerm = "";
    this.savedSearchTerm = "";
    this.itemPage = 1; //#endregion
    //#region Forms

    this.itemForm = this.formbuilder.group({
      itemCode: [null],
      itemName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required, this.noWhitespaceValidator]],
      itemDesc: [""],
      itemExtCode: [""],
      catCode: [null],
      activeRec: [1],
      uuc: [""],
      defaultPrice: [0]
    });

    this.changePaginationPage = function (newPage) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.itemPage = newPage;
                this.getItems(this.selectedCategory);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    };
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(ManageItemsPage, [{
    key: "noWhitespaceValidator",
    value: function noWhitespaceValidator(control) {
      var isWhitespace = (control.value || "").toString().trim().length === 0;
      var isValid = !isWhitespace;
      return isValid ? null : {
        whitespace: true
      };
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.showLoader = true;
                this.showCategories = true;
                _context2.next = 4;
                return this.referenceService.getCategoriesItemsRef().toPromise();

              case 4:
                this.namingRef = _context2.sent;
                _context2.next = 7;
                return this.vendorService.getCategories();

              case 7:
                this.categories = _context2.sent;

                this.flatCategories = function flattenAndFilter(cats) {
                  return cats.map(function (cat) {
                    var _a;

                    var children = ((_a = cat.subCategories) === null || _a === void 0 ? void 0 : _a.length) ? flattenAndFilter(cat.subCategories) : [];
                    return [cat].concat((0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(children));
                  }).reduce(function (acc, val) {
                    return acc.concat(val);
                  }, []).filter(function (cat) {
                    return cat.leafCat;
                  });
                }(this.categories);

                this.categoryRef = this.flatCategories.map(function (cat) {
                  return {
                    text: cat.catName,
                    value: cat.catCode.toString()
                  };
                });
                this.filteredCategories = this.flatCategories;
                this.showLoader = false;

              case 12:
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
    key: "search",
    value: function search($event) {
      var _this2 = this;

      var input = $event.target;
      this.searchTerm = input.value;
      this.page = 1;
      this.filteredCategories = this.flatCategories.filter(function (v) {
        return _this2.searchTerm == "" || v.catName.toLowerCase().match(_this2.searchTerm.toLowerCase());
      });
    }
  }, {
    key: "changePage",
    value: function changePage(newPage) {
      this.page = newPage;
    }
  }, {
    key: "getCategoryPathArray",
    value: function getCategoryPathArray(categories, targetCatCode) {
      var _a;

      var _iterator = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(categories),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var category = _step.value;

          if (category.catCode === targetCatCode) {
            return [category];
          }

          if ((_a = category.subCategories) === null || _a === void 0 ? void 0 : _a.length) {
            var subPath = this.getCategoryPathArray(category.subCategories, targetCatCode);

            if (subPath) {
              return [category].concat((0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(subPath));
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return null;
    }
  }, {
    key: "getCategoryPath",
    value: function getCategoryPath(cat) {
      this.showLoader = true;
      this.showCategoryPath = true;
      this.categoryPath = this.getCategoryPathArray(this.categories, cat.catCode);
      this.showLoader = false;
    }
  }, {
    key: "closeCategoryPathModal",
    value: function closeCategoryPathModal() {
      this.showCategoryPath = false;
      this.categoryPath = [];
    }
  }, {
    key: "getItems",
    value: function getItems(cat) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3() {
        var _this3 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.showLoader = true;
                this.selectedCategory = cat;
                _context3.next = 4;
                return this.vendorService.getItems(cat.catCode, this.searchItemTerm, this.itemPage).toPromise().then(function (res) {
                  _this3.showItems = true;
                  _this3.resultCount = res.count;
                  _this3.showCategories = false;
                  _this3.itemList = res["result"];
                  _this3.categoryPath = _this3.getCategoryPathArray(_this3.categories, cat.catCode);
                  _this3.showLoader = false;
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
    key: "searchItems",
    value: function searchItems() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee4() {
        var _this4 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.showLoader = true;
                this.searchItemTerm = this.searchItemInput.value.toString();
                if (this.savedSearchTerm != this.searchItemTerm) this.itemPage = 1;
                _context4.next = 5;
                return this.vendorService.getItems(this.selectedCategory.catCode, this.searchItemTerm, this.itemPage).toPromise().then(function (res) {
                  _this4.savedSearchTerm = _this4.searchItemTerm;
                  _this4.resultCount = res.count;
                  _this4.itemList = res["result"];
                  _this4.showLoader = false;
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
    key: "backToCategories",
    value: function backToCategories() {
      this.showLoader = true;
      this.showCategories = true;
      this.showItems = false;
      this.selectedCategory = null;
      this.searchItemTerm = "";
      this.searchItemInput.value = "";
      this.savedSearchTerm = "";
      this.itemPage = 1;
      this.resultCount = 0;
      this.itemList = [];
      this.showLoader = false;
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(item) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee7() {
        var _this5 = this;

        var deleteItem;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.alertService.SaveAlert("هل أنت متأكد من حذف هذا ال" + this.getNamingRefValue("4") + "؟");

              case 2:
                if (!_context7.sent) {
                  _context7.next = 8;
                  break;
                }

                this.showLoader = true;
                deleteItem = {
                  itemCode: item.itemCode,
                  uuc: item.uuc.toString()
                };
                _context7.next = 7;
                return this.vendorService.deleteItem(deleteItem).then(function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee5() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return this.getItems(this.selectedCategory);

                          case 2:
                            _context5.next = 4;
                            return this.alertService.showAlertConfirm("تمت الحذف بنجاح", false);

                          case 4:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, this);
                  }));
                }).catch(function (err) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee6() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            _context6.next = 2;
                            return this.alertService.showAlertError(err.error, false);

                          case 2:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6, this);
                  }));
                });

              case 7:
                this.showLoader = false;

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
    }
  }, {
    key: "openEditItemModal",
    value: function openEditItemModal(item) {
      this.itemForm.patchValue({
        itemCode: item.itemCode,
        itemName: item.itemName,
        itemDesc: item.itemDesc,
        itemExtCode: item.itemExtCode,
        catCode: item.catCode,
        activeRec: item.activeRec === 1 ? true : false,
        uuc: item.uuc,
        defaultPrice: item.defaultPrice.toString()
      });
      this.showEditItemModal = true;
    }
  }, {
    key: "openAddItemModal",
    value: function openAddItemModal() {
      this.itemForm.reset();
      this.itemForm.patchValue({
        catCode: this.selectedCategory.catCode,
        activeRec: true,
        defaultPrice: 0
      });
      this.showAddItemModal = true;
      this.showEditItemModal = false;
    }
  }, {
    key: "addItem",
    value: function addItem() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee9() {
        var _this6 = this;

        var newItem;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                this.showLoader = true;

                if (this.itemForm.valid) {
                  _context9.next = 7;
                  break;
                }

                this.alertService.showAlertError("يجب ادخال اسم ال" + this.getNamingRefValue("4"), false);
                this.showLoader = false;
                return _context9.abrupt("return");

              case 7:
                newItem = {
                  itemName: this.itemForm.value.itemName,
                  itemDesc: this.itemForm.value.itemDesc,
                  itemExtCode: this.itemForm.value.itemExtCode,
                  catCode: this.itemForm.value.catCode,
                  activeRec: this.itemForm.value.activeRec === true ? 1 : 0,
                  defaultPrice: this.itemForm.value.defaultPrice ? this.itemForm.value.defaultPrice : 0
                };
                _context9.next = 10;
                return this.vendorService.addItem(newItem).then(function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee8() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            this.showAddItemModal = false;
                            this.itemForm.reset();
                            _context8.next = 4;
                            return this.getItems(this.selectedCategory);

                          case 4:
                            this.alertService.showAlertConfirm("تمت الاضافة بنجاح", false);

                          case 5:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8, this);
                  }));
                }).catch(function (err) {
                  _this6.alertService.showAlertError(err.error, false);
                });

              case 10:
                this.showLoader = false;

              case 11:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    }
  }, {
    key: "editItem",
    value: function editItem() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee11() {
        var _this7 = this;

        var editItem;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.showLoader = true;

                if (this.itemForm.valid) {
                  _context11.next = 7;
                  break;
                }

                this.alertService.showAlertError("يجب ادخال اسم ال" + this.getNamingRefValue("4"), false);
                this.showLoader = false;
                return _context11.abrupt("return");

              case 7:
                editItem = {
                  itemCode: this.itemForm.value.itemCode,
                  itemName: this.itemForm.value.itemName,
                  itemDesc: this.itemForm.value.itemDesc,
                  itemExtCode: this.itemForm.value.itemExtCode,
                  catCode: this.itemForm.value.catCode,
                  activeRec: this.itemForm.value.activeRec === true ? 1 : 0,
                  uuc: this.itemForm.value.uuc.toString(),
                  defaultPrice: this.itemForm.value.defaultPrice ? this.itemForm.value.defaultPrice : 0
                };
                _context11.next = 10;
                return this.vendorService.editItem(editItem).then(function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee10() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee10$(_context10) {
                      while (1) {
                        switch (_context10.prev = _context10.next) {
                          case 0:
                            this.showEditItemModal = false;
                            this.itemForm.reset();
                            _context10.next = 4;
                            return this.getItems(this.selectedCategory);

                          case 4:
                            this.alertService.showAlertConfirm("تمت التعديل بنجاح", false);

                          case 5:
                          case "end":
                            return _context10.stop();
                        }
                      }
                    }, _callee10, this);
                  }));
                }).catch(function (err) {
                  _this7.alertService.showAlertError(err.error, false);
                });

              case 10:
                this.showLoader = false;

              case 11:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.showAddItemModal = false;
      this.showEditItemModal = false;
      this.itemForm.reset();
    }
  }, {
    key: "getNamingRefValue",
    value: function getNamingRefValue(code) {
      var _a, _b;

      var ref = (_a = this.namingRef) === null || _a === void 0 ? void 0 : _a.find(function (ref) {
        return ref.ref_code === code;
      });
      return (_b = ref === null || ref === void 0 ? void 0 : ref.ref_desc) !== null && _b !== void 0 ? _b : "";
    }
  }]);

  return ManageItemsPage;
}();

ManageItemsPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_vendor_service__WEBPACK_IMPORTED_MODULE_11__.VendorService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_7__.AlertService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_9__.pagingService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_10__.ReferencesService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_8__.InputMaskingService
  }];
};

ManageItemsPage.propDecorators = {
  searchItemInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: ["searchItemInput"]
  }]
};
ManageItemsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: "app-manage-items",
  template: _manage_items_page_html_ngResource__WEBPACK_IMPORTED_MODULE_5__,
  styles: [_manage_items_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_6__]
})], ManageItemsPage);


/***/ }),

/***/ 46574:
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/consumer/manage-items/manage-items.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ (function(module) {

module.exports = ".search-bar {\n  padding: 0px;\n}\n@media (min-width: 768px) {\n  .search-bar {\n    width: 80%;\n  }\n}\n.custom_width {\n  width: 104%;\n  display: block;\n}\n.search-bar-items {\n  width: 90%;\n}\n@media (min-width: 768px) {\n  .search-bar-items {\n    margin: 0 auto;\n    width: 80%;\n  }\n}\n.closeButton {\n  background: var(--ion-background-color) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1pdGVtcy5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxEZWxldGUlMjBpdFxcTmV3TW9oYXNzaWxDbGllbnRfMzA5NV9zcmNcXE5ld01vaGFzc2lsQ2xpZW50XFxzcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxjb25zdW1lclxcbWFuYWdlLWl0ZW1zXFxtYW5hZ2UtaXRlbXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQUU7RUFGRjtJQUdJLFVBQUE7RUNHRjtBQUNGO0FEQUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0dGO0FEQUE7RUFDRSxVQUFBO0FDR0Y7QURGRTtFQUZGO0lBR0ksY0FBQTtJQUNBLFVBQUE7RUNLRjtBQUNGO0FERkE7RUFDRSxrREFBQTtBQ0tGIiwiZmlsZSI6Im1hbmFnZS1pdGVtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJhciB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5jdXN0b21fd2lkdGgge1xyXG4gIHdpZHRoOiAxMDQlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2VhcmNoLWJhci1pdGVtcyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcbi5jbG9zZUJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLnNlYXJjaC1iYXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNlYXJjaC1iYXIge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cblxuLmN1c3RvbV93aWR0aCB7XG4gIHdpZHRoOiAxMDQlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlYXJjaC1iYXItaXRlbXMge1xuICB3aWR0aDogOTAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zZWFyY2gtYmFyLWl0ZW1zIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5cbi5jbG9zZUJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKSAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 87420:
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/consumer/manage-items/manage-items.page.html?ngResource ***!
  \*************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<h3>ادارة {{getNamingRefValue(\"3\")}}</h3>\n\n<div>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-button *ngIf=\"itemList && showItems\" (click)=\"backToCategories()\">\n          <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"11\">\n        <ion-breadcrumbs *ngIf=\"itemList && showItems\">\n          <ion-breadcrumb *ngFor=\"let cat of categoryPath\">\n            <ion-label>{{ cat.catName }}</ion-label>\n            <ion-icon slot=\"separator\" name=\"arrow-back-circle\"></ion-icon>\n          </ion-breadcrumb>\n        </ion-breadcrumbs>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<ion-card *ngIf=\"categories && showCategories\">\n  <ion-row class=\"ion-padding\">\n    <ion-col style=\"justify-items: center\">\n      <ion-searchbar\n        [(ngModel)]=\"searchTerm\"\n        class=\"search-bar\"\n        placeholder=\"بحث\"\n        (ionInput)=\"search($event)\"\n      ></ion-searchbar>\n    </ion-col>\n  </ion-row>\n  <div\n    #categoryContainer\n    class=\"table-responsive ion-padding category-container\"\n  >\n    <ion-grid [fixed]=\"true\" style=\"min-width: 800px\" class=\"scroll-container\">\n      <ion-row class=\"header-row\">\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"6\"\n          ><ion-label>اسم ال{{getNamingRefValue(\"2\")}}</ion-label></ion-col\n        >\n        <ion-col size=\"4\"\n          ><ion-label>عدد {{getNamingRefValue(\"3\")}}</ion-label></ion-col\n        >\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n      <ion-row\n        class=\"details-row\"\n        *ngFor=\"let cat of this.pagingService.Paging(filteredCategories, page); let i = index\"\n      >\n        <ion-col size=\"1\"\n          ><ion-icon\n            name=\"information-circle-outline\"\n            (click)=\"getCategoryPath(cat)\"\n          ></ion-icon\n        ></ion-col>\n        <ion-col size=\"6\">\n          <ion-label>{{cat.catName}}</ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-label>{{cat.itemsCount}}</ion-label>\n        </ion-col>\n\n        <ion-col size=\"1\">\n          <ion-button (click)=\"getItems(cat)\">\n            <ion-icon name=\"arrow-back-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <app-pagination\n    [page]=\"page\"\n    [collectionSize]=\"filteredCategories?.length\"\n    (pageChange)=\"changePage($event);\"\n  ></app-pagination>\n</ion-card>\n\n<ion-card *ngIf=\"itemList && showItems\">\n  <ion-row class=\"ion-padding search-bar-items\">\n    <ion-col size=\"11\">\n      <ion-input\n        #searchItemInput\n        placeholder=\"بحث\"\n        (keydown.enter)=\"searchItems()\"\n      ></ion-input>\n    </ion-col>\n    <ion-col size=\"1\">\n      <ion-button (click)=\"searchItems()\"> بحث </ion-button>\n    </ion-col>\n  </ion-row>\n  <div\n    #categoryContainer\n    class=\"table-responsive ion-padding category-container\"\n  >\n    <ion-grid [fixed]=\"true\" style=\"min-width: 800px\" class=\"scroll-container\">\n      <ion-row class=\"header-row\">\n        <ion-col size=\"6\"\n          ><ion-label>اسم ال{{getNamingRefValue(\"4\")}}</ion-label></ion-col\n        >\n        <ion-col size=\"4\"><ion-label>الكود الخارجي</ion-label></ion-col>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"1\">\n          <ion-button (click)=\"openAddItemModal()\" class=\"add-category-btn\">\n            <ion-icon name=\"add-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"details-row\" *ngFor=\"let item of itemList; let i = index\">\n        <ion-col size=\"6\">\n          <ion-label>{{item.itemName}}</ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-label>{{item.itemExtCode}}</ion-label>\n        </ion-col>\n\n        <ion-col size=\"1\">\n          <ion-button (click)=\"openEditItemModal(item)\">\n            <ion-icon name=\"create-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-button (click)=\"deleteItem(item)\" color=\"danger\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <app-pagination\n    [page]=\"itemPage\"\n    [collectionSize]=\"resultCount\"\n    (pageChange)=\"changePaginationPage($event);\"\n  ></app-pagination>\n</ion-card>\n\n<ion-modal\n  [isOpen]=\"showCategoryPath\"\n  (didDismiss)=\"closeCategoryPathModal()\"\n  [initialBreakpoint]=\"0.2\"\n  [breakpoints]=\"[0.2, 0.4, 0.6]\"\n  [backdropDismiss]=\"true\"\n  [showBackdrop]=\"true\"\n>\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>مسار ال{{getNamingRefValue(\"2\")}}</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button class=\"closeButton\" (click)=\"closeCategoryPathModal()\">\n            <ion-icon name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-breadcrumbs>\n        <ion-breadcrumb *ngFor=\"let cat of categoryPath\">\n          <ion-label>{{ cat.catName }}</ion-label>\n          <ion-icon slot=\"separator\" name=\"arrow-back-circle\"></ion-icon>\n        </ion-breadcrumb>\n      </ion-breadcrumbs>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n<ion-modal\n  [isOpen]=\"showAddItemModal || showEditItemModal\"\n  class=\"modal-fullscreen\"\n  (willDismiss)=\"closeModal()\"\n>\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-button (click)=\"closeModal()\">\n            <ion-icon name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <ion-title *ngIf=\"showAddItemModal\"\n          >اضافة {{getNamingRefValue(\"4\")}} الجديدة</ion-title\n        >\n        <ion-title *ngIf=\"showEditItemModal\"\n          >تعديل ال{{getNamingRefValue(\"4\")}}</ion-title\n        >\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class=\"ion-padding\">\n      <app-loader [isVisible]=\"showLoader\"></app-loader>\n      <form\n        [formGroup]=\"itemForm\"\n        (ngSubmit)=\"showAddItemModal ? addItem() : editItem()\"\n      >\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>اسم ال{{getNamingRefValue(\"4\")}}</ion-label>\n              <ion-input type=\"text\" formControlName=\"itemName\"></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\" style=\"margin-right: -11px\">\n              <app-select-with-search\n                class=\"custom_width\"\n                [items]=\"categoryRef\"\n                label=\"اسم ال{{getNamingRefValue('2')}}\"\n                labelClass=\"form-label\"\n                title=\"{{getNamingRefValue('1')}}\"\n                formControlName=\"catCode\"\n                [selectedItem]=\"selectedCategory?.catCode.toString()\"\n              ></app-select-with-search>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-label>وصف ال{{getNamingRefValue('4')}}</ion-label>\n            <ion-col size=\"12\">\n              <ion-textarea\n                formControlName=\"itemDesc\"\n                placeholder=\"وصف ال{{getNamingRefValue('4')}}\"\n                rows=\"5\"\n              ></ion-textarea>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>الكود الخارجي</ion-label>\n              <ion-input\n                type=\"text\"\n                maxlength=\"128\"\n                formControlName=\"itemExtCode\"\n                placeholder=\"الكود الخارجي\"\n              ></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-label>سعر ال{{getNamingRefValue('4')}}</ion-label>\n              <ion-input\n                type=\"text\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 2)\"\n                formControlName=\"defaultPrice\"\n                placeholder=\"سعر ال{{getNamingRefValue('4')}}\"\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"1\">\n              <ion-checkbox formControlName=\"activeRec\"> </ion-checkbox>\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-label>فعال</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-button *ngIf=\"showAddItemModal\" type=\"submit\" expand=\"full\">\n                اضافة\n              </ion-button>\n              <ion-button *ngIf=\"showEditItemModal\" type=\"submit\" expand=\"full\">\n                تعديل\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_consumer_manage-items_manage-items_module_ts.js.map