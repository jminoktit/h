"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_consumer_manage-categories_manage-categories_module_ts"],{

/***/ 87993:
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/consumer/manage-categories/manage-categories-routing.module.ts ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCategoriesPageRoutingModule": function() { return /* binding */ ManageCategoriesPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _manage_categories_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-categories.page */ 52514);






var routes = [{
  path: '',
  component: _manage_categories_page__WEBPACK_IMPORTED_MODULE_2__.ManageCategoriesPage
}];

var ManageCategoriesPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ManageCategoriesPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ManageCategoriesPageRoutingModule);
});

ManageCategoriesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ManageCategoriesPageRoutingModule);


/***/ }),

/***/ 77953:
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/consumer/manage-categories/manage-categories.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCategoriesPageModule": function() { return /* binding */ ManageCategoriesPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _manage_categories_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-categories-routing.module */ 87993);
/* harmony import */ var _manage_categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-categories.page */ 52514);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var ManageCategoriesPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ManageCategoriesPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ManageCategoriesPageModule);
});

ManageCategoriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _manage_categories_routing_module__WEBPACK_IMPORTED_MODULE_2__.ManageCategoriesPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_manage_categories_page__WEBPACK_IMPORTED_MODULE_3__.ManageCategoriesPage]
})], ManageCategoriesPageModule);


/***/ }),

/***/ 52514:
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/consumer/manage-categories/manage-categories.page.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCategoriesPage": function() { return /* binding */ ManageCategoriesPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ 95106);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _manage_categories_page_html_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-categories.page.html?ngResource */ 83793);
/* harmony import */ var _manage_categories_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-categories.page.scss?ngResource */ 21971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_services_vendor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/vendor.service */ 20725);














var ManageCategoriesPage = /*#__PURE__*/function () {
  //#endregion
  function ManageCategoriesPage(vendorService, alertService, formbuilder, pagingService, cdref, referencesService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ManageCategoriesPage);

    this.vendorService = vendorService;
    this.alertService = alertService;
    this.formbuilder = formbuilder;
    this.pagingService = pagingService;
    this.cdref = cdref;
    this.referencesService = referencesService; //#region Flags

    this.showLoader = false;
    this.openCreateModal = false;
    this.openEditModal = false;
    this.breadcrumbs = [];
    this.currentParentCatCode = null;
    this.page = 1;
    this.searchTerm = ""; //#endregion
    //#region Forms

    this.categoryForm = this.formbuilder.group({
      catCode: [null],
      catName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, this.noWhitespaceValidator]],
      parentCatCode: [null],
      leafCat: [0],
      activeRec: [1],
      uuc: [""]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ManageCategoriesPage, [{
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
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.showLoader = true;
                _context.next = 3;
                return this.referencesService.getCategoriesItemsRef().toPromise();

              case 3:
                this.namingRef = _context.sent;
                _context.next = 6;
                return this.vendorService.getCategories();

              case 6:
                this.categories = _context.sent;
                this.selectedCategory = this.categories;
                this.filteredCategories = this.categories;
                this.showLoader = false;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      this.cdref.detectChanges();
    }
  }, {
    key: "navigateCategory",
    value: function navigateCategory(cat) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2() {
        var element;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                element = this.categoryContainer.nativeElement;
                element.classList.add("swipe-right");
                _context2.next = 4;
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
                this.searchTerm = "";
                this.page = 1;
                this.showLoader = false;
                element.classList.remove("swipe-right");

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "changePage",
    value: function changePage(newPage) {
      this.page = newPage;
    }
  }, {
    key: "returnToHome",
    value: function returnToHome() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee3() {
        var element;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(this.selectedCategory === this.categories)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                element = this.categoryContainer.nativeElement;
                element.classList.add("swipe-right");
                _context3.next = 6;
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
                this.page = 1;
                this.searchTerm = "";
                this.showLoader = false;
                element.classList.remove("swipe-right");

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "back",
    value: function back() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee4() {
        var element;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.showLoader = true;
                this.breadcrumbs.pop();

                if (!(this.breadcrumbs.length > 0)) {
                  _context4.next = 6;
                  break;
                }

                this.navigateCategory(this.breadcrumbs[this.breadcrumbs.length - 1]);
                _context4.next = 16;
                break;

              case 6:
                element = this.categoryContainer.nativeElement;
                element.classList.add("swipe-right");
                _context4.next = 10;
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
                this.page = 1;
                this.searchTerm = "";
                element.classList.remove("swipe-right");

              case 16:
                this.showLoader = false;

              case 17:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
    }
  }, {
    key: "openAddCategoryModal",
    value: function openAddCategoryModal() {
      this.categoryForm.patchValue({
        catName: "",
        parentCatCode: this.currentParentCatCode,
        leafCat: 0,
        activeRec: 1
      });
      this.openCreateModal = true;
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.openCreateModal = false;
      this.openEditModal = false;
      this.categoryForm.reset();
    }
  }, {
    key: "getParentCategoryName",
    value: function getParentCategoryName() {
      var findCategoryByCode = function findCategoryByCode(categories, code) {
        var _iterator = (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__["default"])(categories),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var cat = _step.value;

            if (cat.catCode === code) {
              return cat;
            }

            if (cat.subCategories && cat.subCategories.length > 0) {
              var found = findCategoryByCode(cat.subCategories, code);
              if (found) return found;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return undefined;
      };

      var category = findCategoryByCode(this.categories, this.currentParentCatCode);
      return category === null || category === void 0 ? void 0 : category.catName;
    }
  }, {
    key: "addNewCategory",
    value: function addNewCategory() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee5() {
        var _this = this;

        var newCategory;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                this.showLoader = true;

                if (this.categoryForm.valid) {
                  _context5.next = 7;
                  break;
                }

                this.alertService.showAlertError("يجب ادخال اسم ال" + this.getNamingRefValue("2"), false);
                this.showLoader = false;
                return _context5.abrupt("return");

              case 7:
                newCategory = {
                  catName: this.categoryForm.value.catName,
                  parentCatCode: this.currentParentCatCode,
                  leafCat: this.categoryForm.value.leafCat === true ? 1 : 0,
                  activeRec: this.categoryForm.value.activeRec === true ? 1 : 0
                };
                _context5.next = 10;
                return this.vendorService.addCategory(newCategory).then(function () {
                  _this.alertService.showAlertConfirm("تمت الاضافة بنجاح", true);
                }).catch(function (err) {
                  _this.alertService.showAlertError(err.error, false);
                });

              case 10:
                this.showLoader = false;

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
    }
  }, {
    key: "openEditCategoryModal",
    value: function openEditCategoryModal(cat) {
      this.categoryForm.patchValue({
        catCode: cat.catCode,
        catName: cat.catName,
        parentCatCode: this.currentParentCatCode,
        leafCat: cat.leafCat,
        activeRec: cat.activeRec,
        uuc: cat.uuc
      });
      this.openEditModal = true;
    }
  }, {
    key: "editCategory",
    value: function editCategory() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee6() {
        var _this2 = this;

        var editCategory;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.showLoader = true;

                if (this.categoryForm.valid) {
                  _context6.next = 7;
                  break;
                }

                this.alertService.showAlertError("يجب ادخال اسم ال" + this.getNamingRefValue("2"), false);
                this.showLoader = false;
                return _context6.abrupt("return");

              case 7:
                editCategory = {
                  catCode: this.categoryForm.value.catCode,
                  catName: this.categoryForm.value.catName,
                  parentCatCode: this.currentParentCatCode,
                  leafCat: this.categoryForm.value.leafCat === true ? 1 : 0,
                  activeRec: this.categoryForm.value.activeRec === true ? 1 : 0,
                  uuc: this.categoryForm.value.uuc.toString()
                };
                _context6.next = 10;
                return this.vendorService.editCategory(editCategory).then(function () {
                  _this2.alertService.showAlertConfirm("تمت التعديل بنجاح", true);
                }).catch(function (err) {
                  _this2.alertService.showAlertError(err.error, false);
                });

              case 10:
                this.showLoader = false;

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "deleteCategory",
    value: function deleteCategory(cat) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee9() {
        var _this3 = this;

        var deleteCategory;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.alertService.SaveAlert("هل أنت متأكد من حذف هذه ال" + this.getNamingRefValue("2") + "؟");

              case 2:
                if (!_context9.sent) {
                  _context9.next = 8;
                  break;
                }

                this.showLoader = true;
                deleteCategory = {
                  catCode: cat.catCode,
                  uuc: cat.uuc.toString()
                };
                _context9.next = 7;
                return this.vendorService.deleteCategory(deleteCategory).then(function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee7() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return this.alertService.showAlertConfirm("تمت الحذف بنجاح", true);

                          case 2:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7, this);
                  }));
                }).catch(function (err) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(_this3, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee8() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            _context8.next = 2;
                            return this.alertService.showAlertError(err.error, false);

                          case 2:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8, this);
                  }));
                });

              case 7:
                this.showLoader = false;

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
    }
  }, {
    key: "search",
    value: function search($event) {
      var _this4 = this;

      var input = $event.target;
      this.searchTerm = input.value;
      this.page = 1;
      this.filteredCategories = this.selectedCategory.filter(function (v) {
        return _this4.searchTerm == "" || v.catName.toLowerCase().match(_this4.searchTerm.toLowerCase());
      });
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

  return ManageCategoriesPage;
}();

ManageCategoriesPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_vendor_service__WEBPACK_IMPORTED_MODULE_9__.VendorService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_6__.AlertService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_7__.pagingService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_8__.ReferencesService
  }];
};

ManageCategoriesPage.propDecorators = {
  categoryContainer: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
    args: ["categoryContainer"]
  }]
};
ManageCategoriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: "app-manage-categories",
  template: _manage_categories_page_html_ngResource__WEBPACK_IMPORTED_MODULE_4__,
  styles: [_manage_categories_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_5__]
})], ManageCategoriesPage);


/***/ }),

/***/ 21971:
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/consumer/manage-categories/manage-categories.page.scss?ngResource ***!
  \***********************************************************************************************/
/***/ (function(module) {

module.exports = ".clickable {\n  cursor: pointer;\n}\n\n.swipe-right {\n  -webkit-animation: swipeRight 0.5s ease forwards;\n          animation: swipeRight 0.5s ease forwards;\n}\n\n@-webkit-keyframes swipeRight {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(100px);\n    opacity: 0;\n  }\n}\n\n@keyframes swipeRight {\n  from {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateX(100px);\n    opacity: 0;\n  }\n}\n\n.search-bar {\n  padding: 0px;\n}\n\n@media (min-width: 768px) {\n  .search-bar {\n    width: 80%;\n  }\n}\n\n.breadcrumb-label {\n  padding: 5px;\n  border-radius: 5px;\n}\n\n.breadcrumb-label:hover {\n  background: rgba(128, 128, 128, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGNvbnN1bWVyXFxtYW5hZ2UtY2F0ZWdvcmllc1xcbWFuYWdlLWNhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGOztBRENBO0VBQ0UsZ0RBQUE7VUFBQSx3Q0FBQTtBQ0VGOztBRENBO0VBQ0U7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUNFRjtFREFBO0lBQ0UsNEJBQUE7SUFDQSxVQUFBO0VDRUY7QUFDRjs7QURWQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxVQUFBO0VDRUY7RURBQTtJQUNFLDRCQUFBO0lBQ0EsVUFBQTtFQ0VGO0FBQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDQ0Y7O0FEQUU7RUFGRjtJQUdJLFVBQUE7RUNHRjtBQUNGOztBREFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FERkU7RUFDRSxvQ0FBQTtBQ0lKIiwiZmlsZSI6Im1hbmFnZS1jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGlja2FibGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc3dpcGUtcmlnaHQge1xyXG4gIGFuaW1hdGlvbjogc3dpcGVSaWdodCAwLjVzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3dpcGVSaWdodCB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtYmFyIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG5cclxuLmJyZWFkY3J1bWItbGFiZWwge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMyk7XHJcbiAgfVxyXG59XHJcbiIsIi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zd2lwZS1yaWdodCB7XG4gIGFuaW1hdGlvbjogc3dpcGVSaWdodCAwLjVzIGVhc2UgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgc3dpcGVSaWdodCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwcHgpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5zZWFyY2gtYmFyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zZWFyY2gtYmFyIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5cbi5icmVhZGNydW1iLWxhYmVsIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYnJlYWRjcnVtYi1sYWJlbDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zKTtcbn0iXX0= */";

/***/ }),

/***/ 83793:
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/consumer/manage-categories/manage-categories.page.html?ngResource ***!
  \***********************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<h3>ادارة {{getNamingRefValue(\"1\")}}</h3>\n\n<ion-breadcrumbs>\n  <ion-breadcrumb>\n    <ion-icon\n      name=\"home-outline\"\n      (click)=\"returnToHome()\"\n      class=\"clickable\"\n    ></ion-icon>\n    <ion-icon slot=\"separator\" name=\"arrow-back-circle\"></ion-icon>\n  </ion-breadcrumb>\n  <ion-breadcrumb *ngFor=\"let cat of breadcrumbs\">\n    <ion-label\n      class=\"breadcrumb-label clickable\"\n      (click)=\"navigateCategory(cat)\"\n      >{{cat.catName}}</ion-label\n    >\n    <ion-icon slot=\"separator\" name=\"arrow-back-circle\"></ion-icon>\n  </ion-breadcrumb>\n</ion-breadcrumbs>\n\n<ion-card *ngIf=\"categories\">\n  <ion-row class=\"ion-padding\">\n    <ion-col style=\"justify-items: center\">\n      <ion-searchbar\n        [(ngModel)]=\"searchTerm\"\n        class=\"search-bar\"\n        placeholder=\"بحث\"\n        (ionInput)=\"search($event)\"\n      ></ion-searchbar>\n    </ion-col>\n  </ion-row>\n  <div\n    #categoryContainer\n    class=\"table-responsive ion-padding category-container\"\n  >\n    <ion-grid [fixed]=\"true\" style=\"min-width: 800px\" class=\"scroll-container\">\n      <ion-row class=\"header-row\">\n        <ion-col size=\"1\">\n          <ion-button *ngIf=\"breadcrumbs.length > 0\" (click)=\"back()\">\n            <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"5\"\n          ><ion-label>اسم ال{{getNamingRefValue(\"2\")}}</ion-label></ion-col\n        >\n        <ion-col size=\"4\"\n          ><ion-label>عدد {{getNamingRefValue(\"3\")}}</ion-label></ion-col\n        >\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"1\">\n          <ion-button (click)=\"openAddCategoryModal()\" class=\"add-category-btn\">\n            <ion-icon name=\"add-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <ion-row\n        class=\"details-row\"\n        *ngFor=\"let cat of this.pagingService.Paging(filteredCategories, page); let i = index\"\n      >\n        <ion-col size=\"1\">\n          <ion-button [disabled]=\"cat.leafCat\" (click)=\"navigateCategory(cat)\">\n            <ion-icon name=\"caret-back-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-label>{{cat.catName}}</ion-label>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-label>{{cat.itemsCount}}</ion-label>\n        </ion-col>\n\n        <ion-col size=\"1\">\n          <ion-button (click)=\"openEditCategoryModal(cat)\">\n            <ion-icon name=\"create-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-button (click)=\"deleteCategory(cat)\" color=\"danger\">\n            <ion-icon name=\"trash-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <app-pagination\n    [page]=\"page\"\n    [collectionSize]=\"filteredCategories?.length\"\n    (pageChange)=\"changePage($event);\"\n  ></app-pagination>\n</ion-card>\n\n<ion-modal\n  [isOpen]=\"openCreateModal || openEditModal\"\n  class=\"modal-fullscreen\"\n  (willDismiss)=\"closeModal()\"\n>\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-button (click)=\"closeModal()\">\n            <ion-icon name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <ion-title *ngIf=\"openCreateModal\"\n          >اضافة {{getNamingRefValue(\"2\")}} الجديدة</ion-title\n        >\n        <ion-title *ngIf=\"openEditModal\"\n          >تعديل ال{{getNamingRefValue(\"2\")}}</ion-title\n        >\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class=\"ion-padding\">\n      <app-loader [isVisible]=\"showLoader\"></app-loader>\n      <form\n        [formGroup]=\"categoryForm\"\n        (ngSubmit)=\"openCreateModal ? addNewCategory() : editCategory()\"\n      >\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>اسم ال{{getNamingRefValue(\"2\")}}</ion-label>\n              <ion-input type=\"text\" formControlName=\"catName\"></ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-label>ال{{getNamingRefValue(\"2\")}} الرئيسية</ion-label>\n              <ion-input\n                type=\"text\"\n                [disabled]=\"true\"\n                [value]=\"getParentCategoryName()\"\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"1\">\n              <ion-checkbox formControlName=\"activeRec\"> </ion-checkbox>\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-label>فعال</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"1\">\n              <ion-checkbox formControlName=\"leafCat\"> </ion-checkbox>\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-label>عنصر اخير</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-button *ngIf=\"openCreateModal\" type=\"submit\" expand=\"full\">\n                اضافة\n              </ion-button>\n              <ion-button *ngIf=\"openEditModal\" type=\"submit\" expand=\"full\">\n                تعديل\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_consumer_manage-categories_manage-categories_module_ts.js.map