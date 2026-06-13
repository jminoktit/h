"use strict";
(self["webpackChunkMohassil"] = self["webpackChunkMohassil"] || []).push([["src_app_views_pages_consumer_manage-vendor-contracts_manage-vendor-contracts_module_ts"],{

/***/ 56012:
/*!********************************************************************************************************!*\
  !*** ./src/app/views/pages/consumer/manage-vendor-contracts/manage-vendor-contracts-routing.module.ts ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageVendorContractsPageRoutingModule": function() { return /* binding */ ManageVendorContractsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _manage_vendor_contracts_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-vendor-contracts.page */ 8655);






var routes = [{
  path: '',
  component: _manage_vendor_contracts_page__WEBPACK_IMPORTED_MODULE_2__.ManageVendorContractsPage
}];

var ManageVendorContractsPageRoutingModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ManageVendorContractsPageRoutingModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ManageVendorContractsPageRoutingModule);
});

ManageVendorContractsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], ManageVendorContractsPageRoutingModule);


/***/ }),

/***/ 3673:
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/consumer/manage-vendor-contracts/manage-vendor-contracts.module.ts ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageVendorContractsPageModule": function() { return /* binding */ ManageVendorContractsPageModule; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _manage_vendor_contracts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-vendor-contracts-routing.module */ 56012);
/* harmony import */ var _manage_vendor_contracts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-vendor-contracts.page */ 8655);
/* harmony import */ var src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/views/components/components.module */ 63430);











var ManageVendorContractsPageModule = /*#__PURE__*/(0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function ManageVendorContractsPageModule() {
  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ManageVendorContractsPageModule);
});

ManageVendorContractsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _manage_vendor_contracts_routing_module__WEBPACK_IMPORTED_MODULE_2__.ManageVendorContractsPageRoutingModule, src_app_views_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule],
  declarations: [_manage_vendor_contracts_page__WEBPACK_IMPORTED_MODULE_3__.ManageVendorContractsPage]
})], ManageVendorContractsPageModule);


/***/ }),

/***/ 8655:
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/consumer/manage-vendor-contracts/manage-vendor-contracts.page.ts ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageVendorContractsPage": function() { return /* binding */ ManageVendorContractsPage; }
/* harmony export */ });
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator/index.js */ 69016);
/* harmony import */ var C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _manage_vendor_contracts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-vendor-contracts.page.html?ngResource */ 29529);
/* harmony import */ var _manage_vendor_contracts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-vendor-contracts.page.scss?ngResource */ 351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/alert.service */ 43081);
/* harmony import */ var src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/AuthenticationServices/mohassil-auth.service */ 76635);
/* harmony import */ var src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/input-masking.service */ 6831);
/* harmony import */ var src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/paging.service */ 42622);
/* harmony import */ var src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/services/references.service */ 95082);
/* harmony import */ var src_app_core_services_vendor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/services/vendor.service */ 20725);















var ManageVendorContractsPage = /*#__PURE__*/function () {
  //#endregion
  function ManageVendorContractsPage(vendorService, pagingService, alertService, cdref, formbuilder, referencesService, inputMaskingService, authService) {
    (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ManageVendorContractsPage);

    this.vendorService = vendorService;
    this.pagingService = pagingService;
    this.alertService = alertService;
    this.cdref = cdref;
    this.formbuilder = formbuilder;
    this.referencesService = referencesService;
    this.inputMaskingService = inputMaskingService;
    this.authService = authService; //#region Flags

    this.showLoader = false;
    this.showVendors = false;
    this.showContracts = false;
    this.showAddContractModal = false;
    this.showEditContractModal = false;
    this.showAddContractBranchModal = false;
    this.vendorPage = 1;
    this.searchVendor = "";
    this.contractPage = 1;
    this.selectedRowIndex = -1;
    this.vendorBranchPage = 1;
    this.selectedBranches = [];
    this.ActiveBranches = []; //#endregion
    //#region Forms

    this.ContractForm = this.formbuilder.group({
      orgCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      vendorCode: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      vendContractCode: [null],
      contractStartDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      contractEndDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      authorizedPerson: [""],
      authorizedIdNo: [""],
      mailingAddress: [""],
      comPercent: [""],
      comAm: [""],
      minSalesAm: [""],
      activeRec: [0]
    });
  }

  (0,C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ManageVendorContractsPage, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var _this = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.showLoader = true;
                _context.next = 3;
                return this.vendorService.getActiveVendors().then(function (res) {
                  _this.vendors = res;
                  _this.filteredVendors = res;
                  _this.showVendors = true;
                });

              case 3:
                this.showLoader = false;

              case 4:
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
    key: "search",
    value: function search($event) {
      var _this2 = this;

      var input = $event.target;
      this.searchVendor = input.value;
      this.vendorPage = 1;
      this.filteredVendors = this.vendors.filter(function (v) {
        return _this2.searchVendor == "" || v.vendor_name.toLowerCase().match(_this2.searchVendor.toLowerCase());
      });
    }
  }, {
    key: "openVendor",
    value: function openVendor(vendor) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2() {
        var _this3 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.showLoader = true;
                this.selectedVendor = vendor;
                _context2.next = 4;
                return this.vendorService.getVendorContracts(vendor.vendor_code).then(function (res) {
                  _this3.vendorContract = res;
                  _this3.showContracts = true;
                  _this3.showVendors = false;
                  _this3.showLoader = false;
                }).catch(function (err) {
                  console.error(err);
                  _this3.showLoader = false;
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
    }
  }, {
    key: "changeVendorPage",
    value: function changeVendorPage(newPage) {
      this.vendorPage = newPage;
    }
  }, {
    key: "changeContractPage",
    value: function changeContractPage(newPage) {
      this.contractPage = newPage;
    }
  }, {
    key: "backToVendors",
    value: function backToVendors() {
      this.showContracts = false;
      this.showVendors = true;
      this.contractPage = 1;
      this.vendorContract = [];
    }
  }, {
    key: "selectGridRow",
    value: function selectGridRow(index) {
      this.selectedRowIndex = index;
    }
  }, {
    key: "getRowClasses",
    value: function getRowClasses(vendor, index) {
      var isActive = vendor.activeRec === 1;
      var isSelected = this.selectedRowIndex === index;
      if (isActive && isSelected) return ["active-selected"];
      if (isActive) return ["active-contract"];
      if (isSelected) return ["highlighted-row"];
      return [];
    }
  }, {
    key: "openAddContractModal",
    value: function openAddContractModal() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3() {
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.showAddContractModal = true;
                this.showEditContractModal = false;
                this.ContractForm.reset();
                _context3.t0 = this.ContractForm;
                _context3.next = 6;
                return this.authService.getUserInfo();

              case 6:
                _context3.t1 = _context3.sent.org_code;
                _context3.t2 = this.selectedVendor.vendor_code;
                _context3.t3 = this.vendorContract ? this.vendorContract.length + 1 : 1;
                _context3.t4 = {
                  orgCode: _context3.t1,
                  vendorCode: _context3.t2,
                  vendContractCode: _context3.t3
                };

                _context3.t0.patchValue.call(_context3.t0, _context3.t4);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
    }
  }, {
    key: "openEditContractModal",
    value: function openEditContractModal(vendor) {
      this.showAddContractModal = false;
      this.showEditContractModal = true;
      this.ContractForm.reset();
      this.ContractForm.patchValue({
        orgCode: vendor.orgCode,
        vendorCode: vendor.vendorCode,
        vendContractCode: vendor.vendContractCode,
        contractStartDate: vendor.contractStartDate,
        contractEndDate: vendor.contractEndDate,
        authorizedPerson: vendor.authorizedPerson,
        authorizedIdNo: vendor.authorizedIdNo,
        mailingAddress: vendor.mailingAddress,
        comPercent: vendor.comPercent,
        comAm: vendor.comAm,
        minSalesAm: vendor.minSalesAm,
        activeRec: vendor.activeRec === 1 ? true : false
      });
      this.selectedRowIndex = -1;
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      this.showAddContractModal = false;
      this.showEditContractModal = false;
      this.ContractForm.reset();
    }
  }, {
    key: "DuplicateContract",
    value: function DuplicateContract(vendor) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee6() {
        var _this4 = this;

        var request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.alertService.SaveAlert("هل تريداضافة عقد جديد بنفس بنود هذا العقد؟");

              case 2:
                if (!_context6.sent) {
                  _context6.next = 8;
                  break;
                }

                this.showLoader = true;
                request = {
                  vendorCode: vendor.vendorCode,
                  vendContractCode: vendor.vendContractCode
                };
                _context6.next = 7;
                return this.vendorService.duplicateVendorContract(request).then(function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            this.closeModal();
                            _context4.next = 3;
                            return this.openVendor(this.selectedVendor);

                          case 3:
                            _context4.next = 5;
                            return this.alertService.showAlertConfirm("تم الاضافة بنجاح", false);

                          case 5:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, this);
                  }));
                }).catch(function (err) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this4, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            console.error(err);
                            _context5.next = 3;
                            return this.alertService.showAlertError(err.error, false);

                          case 3:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5, this);
                  }));
                });

              case 7:
                this.showLoader = false;

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
    }
  }, {
    key: "addContract",
    value: function addContract() {
      var _a, _b, _c;

      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee8() {
        var _this5 = this;

        var contractActiveRec, request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!this.ContractForm.valid) {
                  _context8.next = 8;
                  break;
                }

                this.showLoader = true;
                contractActiveRec = this.vendorContract.find(function (x) {
                  return x.activeRec === 1;
                }) ? 0 : 1;
                request = {
                  orgCode: this.ContractForm.value.orgCode,
                  vendorCode: this.ContractForm.value.vendorCode,
                  vendContractCode: this.ContractForm.value.vendContractCode,
                  contractStartDate: this.ContractForm.value.contractStartDate,
                  contractEndDate: this.ContractForm.value.contractEndDate,
                  authorizedPerson: this.ContractForm.value.authorizedPerson,
                  authorizedIdNo: this.ContractForm.value.authorizedIdNo,
                  mailingAddress: this.ContractForm.value.mailingAddress,
                  comPercent: (_a = this.ContractForm.value.comPercent) !== null && _a !== void 0 ? _a : 0,
                  comAm: (_b = this.ContractForm.value.comAm) !== null && _b !== void 0 ? _b : 0,
                  minSalesAm: (_c = this.ContractForm.value.minSalesAm) !== null && _c !== void 0 ? _c : 0,
                  activeRec: contractActiveRec
                };
                _context8.next = 6;
                return this.vendorService.addVendorContract(request).then(function (res) {
                  _this5.showLoader = false;

                  _this5.alertService.showAlertConfirm("تم الاضافة بنجاح", false);

                  _this5.closeModal();

                  _this5.openVendor(_this5.selectedVendor);
                }).catch(function (err) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this5, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee7() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            console.error(err);
                            this.showLoader = false;
                            _context7.next = 4;
                            return this.alertService.showAlertError(err.error, false);

                          case 4:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7, this);
                  }));
                });

              case 6:
                _context8.next = 10;
                break;

              case 8:
                _context8.next = 10;
                return this.alertService.showAlertError("يجب ادخال تاريخ بداية العقد وتاريخ نهاية العقد", false);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
    }
  }, {
    key: "editContract",
    value: function editContract() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee10() {
        var _this6 = this;

        var request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!this.ContractForm.valid) {
                  _context10.next = 7;
                  break;
                }

                this.showLoader = true;
                request = {
                  orgCode: this.ContractForm.value.orgCode,
                  vendorCode: this.ContractForm.value.vendorCode,
                  vendContractCode: this.ContractForm.value.vendContractCode,
                  contractStartDate: this.ContractForm.value.contractStartDate,
                  contractEndDate: this.ContractForm.value.contractEndDate,
                  authorizedPerson: this.ContractForm.value.authorizedPerson,
                  authorizedIdNo: this.ContractForm.value.authorizedIdNo,
                  mailingAddress: this.ContractForm.value.mailingAddress,
                  comPercent: this.ContractForm.value.comPercent,
                  comAm: this.ContractForm.value.comAm,
                  minSalesAm: this.ContractForm.value.minSalesAm,
                  activeRec: this.ContractForm.value.activeRec === true ? 1 : 0
                };
                _context10.next = 5;
                return this.vendorService.editVendorContract(request).then(function () {
                  _this6.showLoader = false;

                  _this6.alertService.showAlertConfirm("تم التعديل بنجاح", false);

                  _this6.closeModal();

                  _this6.openVendor(_this6.selectedVendor);
                }).catch(function (err) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this6, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee9() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            console.error(err);
                            this.showLoader = false;
                            _context9.next = 4;
                            return this.alertService.showAlertError(err.error, false);

                          case 4:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9, this);
                  }));
                });

              case 5:
                _context10.next = 9;
                break;

              case 7:
                _context10.next = 9;
                return this.alertService.showAlertError("يجب ادخال تاريخ بداية العقد وتاريخ نهاية العقد", false);

              case 9:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
    }
  }, {
    key: "AddContractBranch",
    value: function AddContractBranch(vendor) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee12() {
        var _this7 = this;

        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                this.showLoader = true;
                this.showAddContractBranchModal = true;
                this.selectedVendorContract = vendor;
                _context12.next = 5;
                return this.vendorService.getActiveVendorBranches(vendor.vendorCode).then(function (res) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee11() {
                    var _this8 = this;

                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            this.vendorBranch = this.vendorBranch = res.map(function (x) {
                              return Object.assign(Object.assign({}, x), {
                                isChecked: false
                              });
                            });
                            _context11.next = 3;
                            return this.vendorService.getActiveVendorContractBranches(vendor.vendorCode).then(function (res) {
                              _this8.ActiveBranches = res;

                              _this8.vendorBranch.forEach(function (br) {
                                if (_this8.ActiveBranches.find(function (ab) {
                                  return ab.vendorBrCode === br.vendorBrCode;
                                })) {
                                  br.isChecked = true;
                                }
                              });
                            });

                          case 3:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11, this);
                  }));
                }).catch(function (err) {
                  console.error(err);

                  _this7.alertService.showAlertError(err.error, false);
                }).finally(function () {
                  _this7.showLoader = false;
                });

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
    }
  }, {
    key: "closeBranchModal",
    value: function closeBranchModal() {
      this.showAddContractBranchModal = false;
      this.vendorBranch = [];
      this.selectedBranches = [];
      this.vendorBranchPage = 1;
      this.ionCheckBoxBranches.checked = false;
    }
  }, {
    key: "addContractBranches",
    value: function addContractBranches() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee15() {
        var _this9 = this;

        var request;
        return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (!(this.selectedBranches.length > 0)) {
                  _context15.next = 10;
                  break;
                }

                _context15.next = 3;
                return this.alertService.SaveAlert("هل تريد الحفظ؟");

              case 3:
                if (!_context15.sent) {
                  _context15.next = 8;
                  break;
                }

                this.showLoader = true;
                request = {
                  vendorCode: this.selectedVendorContract.vendorCode,
                  vendorContractCode: this.selectedVendorContract.vendContractCode,
                  vendorBrCode: this.selectedBranches.map(function (c) {
                    return c.vendorBrCode.toString();
                  }).join(",")
                };
                _context15.next = 8;
                return this.vendorService.AddVendorContractBranch(request).then(function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this9, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee13() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            _context13.next = 2;
                            return this.alertService.showAlertConfirm("تم الحفظ بنجاح", false);

                          case 2:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13, this);
                  }));
                }).catch(function (err) {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(_this9, void 0, void 0, /*#__PURE__*/C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee14() {
                    return C_Users_Fady_Desktop_Tasks_Delete_it_NewMohassilClient_3095_src_NewMohassilClient_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee14$(_context14) {
                      while (1) {
                        switch (_context14.prev = _context14.next) {
                          case 0:
                            console.log(err.error);
                            _context14.next = 3;
                            return this.alertService.showAlertError(err.error, false);

                          case 3:
                            return _context14.abrupt("return");

                          case 4:
                          case "end":
                            return _context14.stop();
                        }
                      }
                    }, _callee14, this);
                  }));
                }).finally(function () {
                  _this9.showLoader = false;
                });

              case 8:
                _context15.next = 12;
                break;

              case 10:
                _context15.next = 12;
                return this.alertService.showAlertError("يجب اختيار فرع واحد على الاقل", false);

              case 12:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
    } //region Checbox Branches

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
    }
  }, {
    key: "changeBranchPage",
    value: function changeBranchPage(newPage) {
      this.vendorBranchPage = newPage;
    }
  }]);

  return ManageVendorContractsPage;
}();

ManageVendorContractsPage.ctorParameters = function () {
  return [{
    type: src_app_core_services_vendor_service__WEBPACK_IMPORTED_MODULE_10__.VendorService
  }, {
    type: src_app_core_services_paging_service__WEBPACK_IMPORTED_MODULE_8__.pagingService
  }, {
    type: src_app_core_services_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder
  }, {
    type: src_app_core_services_references_service__WEBPACK_IMPORTED_MODULE_9__.ReferencesService
  }, {
    type: src_app_core_services_input_masking_service__WEBPACK_IMPORTED_MODULE_7__.InputMaskingService
  }, {
    type: src_app_core_services_AuthenticationServices_mohassil_auth_service__WEBPACK_IMPORTED_MODULE_6__.MohassilAuthService
  }];
};

ManageVendorContractsPage.propDecorators = {
  ionCheckBoxBranches: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
    args: ["ionCheckBoxBranches"]
  }]
};
ManageVendorContractsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: "app-manage-vendor-contracts",
  template: _manage_vendor_contracts_page_html_ngResource__WEBPACK_IMPORTED_MODULE_3__,
  styles: [_manage_vendor_contracts_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_4__]
})], ManageVendorContractsPage);


/***/ }),

/***/ 351:
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/consumer/manage-vendor-contracts/manage-vendor-contracts.page.scss?ngResource ***!
  \***********************************************************************************************************/
/***/ (function(module) {

module.exports = ".search-bar {\n  padding: 0px;\n}\n@media (min-width: 768px) {\n  .search-bar {\n    width: 80%;\n  }\n}\n.active-contract {\n  background: linear-gradient(90deg, rgba(0, 36, 0, 0.2) 0%, rgba(0, 180, 0, 0.5) 100%);\n}\n.active-selected {\n  background: linear-gradient(90deg, rgba(0, 36, 0, 0.446) 0%, rgba(0, 104, 1, 0.581) 100%);\n}\n.highlighted-row {\n  background-color: rgba(128, 128, 128, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS12ZW5kb3ItY29udHJhY3RzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXERlbGV0ZSUyMGl0XFxOZXdNb2hhc3NpbENsaWVudF8zMDk1X3NyY1xcTmV3TW9oYXNzaWxDbGllbnRcXHNyY1xcYXBwXFx2aWV3c1xccGFnZXNcXGNvbnN1bWVyXFxtYW5hZ2UtdmVuZG9yLWNvbnRyYWN0c1xcbWFuYWdlLXZlbmRvci1jb250cmFjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGO0FEQUU7RUFGRjtJQUdJLFVBQUE7RUNHRjtBQUNGO0FEQUE7RUFDRSxxRkFBQTtBQ0dGO0FESUE7RUFDRSx5RkFBQTtBQ0RGO0FEUUE7RUFDRSwwQ0FBQTtBQ0xGIiwiZmlsZSI6Im1hbmFnZS12ZW5kb3ItY29udHJhY3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYmFyIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG5cclxuLmFjdGl2ZS1jb250cmFjdCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgOTBkZWcsXHJcbiAgICByZ2JhKDAsIDM2LCAwLCAwLjIpIDAlLFxyXG4gICAgcmdiYSgwLCAxODAsIDAsIDAuNSkgMTAwJVxyXG4gICk7XHJcbn1cclxuXHJcbi5hY3RpdmUtc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDkwZGVnLFxyXG4gICAgcmdiYSgwLCAzNiwgMCwgMC40NDYpIDAlLFxyXG4gICAgcmdiYSgwLCAxMDQsIDEsIDAuNTgxKSAxMDAlXHJcbiAgKTtcclxufVxyXG5cclxuLmhpZ2hsaWdodGVkLXJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjIpO1xyXG59XHJcbiIsIi5zZWFyY2gtYmFyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zZWFyY2gtYmFyIHtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5cbi5hY3RpdmUtY29udHJhY3Qge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwgMzYsIDAsIDAuMikgMCUsIHJnYmEoMCwgMTgwLCAwLCAwLjUpIDEwMCUpO1xufVxuXG4uYWN0aXZlLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsIDM2LCAwLCAwLjQ0NikgMCUsIHJnYmEoMCwgMTA0LCAxLCAwLjU4MSkgMTAwJSk7XG59XG5cbi5oaWdobGlnaHRlZC1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMik7XG59Il19 */";

/***/ }),

/***/ 29529:
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/pages/consumer/manage-vendor-contracts/manage-vendor-contracts.page.html?ngResource ***!
  \***********************************************************************************************************/
/***/ (function(module) {

module.exports = "<app-loader [isVisible]=\"showLoader\"></app-loader>\n<h3>ادارة عقود الموردين</h3>\n\n<ion-card *ngIf=\"showVendors && vendors.length > 0\">\n  <ion-row class=\"ion-padding\">\n    <ion-col style=\"justify-items: center\">\n      <ion-searchbar\n        [(ngModel)]=\"searchVendor\"\n        class=\"search-bar\"\n        placeholder=\"بحث\"\n        (ionInput)=\"search($event)\"\n      ></ion-searchbar>\n    </ion-col>\n  </ion-row>\n  <ion-grid [fixed]=\"true\" style=\"min-width: 800px\" class=\"scroll-container\">\n    <ion-row class=\"header-row\">\n      <ion-col size=\"11\"><ion-label>اسم المورد</ion-label></ion-col>\n      <ion-col size=\"1\"> </ion-col>\n    </ion-row>\n    <ion-row\n      class=\"details-row\"\n      *ngFor=\"let vendor of this.pagingService.Paging(filteredVendors, vendorPage); let i = index\"\n    >\n      <ion-col size=\"11\">\n        <ion-label>{{vendor.vendor_name}}</ion-label>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-button (click)=\"openVendor(vendor)\">\n          <ion-icon name=\"caret-back-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-pagination\n    [page]=\"vendorPage\"\n    [collectionSize]=\"filteredVendors.length\"\n    (pageChange)=\"changeVendorPage($event);\"\n  ></app-pagination>\n</ion-card>\n\n<ion-card *ngIf=\"showContracts\">\n  <ion-grid [fixed]=\"true\" style=\"min-width: 800px\" class=\"scroll-container\">\n    <ion-row class=\"header-row\">\n      <ion-col size=\"1\"><ion-label>رقم العقد</ion-label></ion-col>\n      <ion-col size=\"4\"><ion-label>تاريخ بداية العقد</ion-label></ion-col>\n      <ion-col size=\"4\"><ion-label>تاريخ نهاية العقد</ion-label></ion-col>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"1\">\n        <ion-button (click)=\"openAddContractModal()\">\n          <ion-icon name=\"add-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row\n      class=\"details-row\"\n      [ngClass]=\"getRowClasses(vendor, i)\"\n      (click)=\"selectGridRow(i)\"\n      *ngFor=\"let vendor of this.pagingService.Paging(vendorContract, contractPage); let i = index\"\n    >\n      <ion-col size=\"1\">\n        <ion-label>{{vendor.vendContractCode}}</ion-label>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-label>{{vendor.contractStartDate | date:\"yyyy-MM-dd\"}}</ion-label>\n      </ion-col>\n      <ion-col size=\"4\">\n        <ion-label>{{vendor.contractEndDate | date:\"yyyy-MM-dd\"}}</ion-label>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-button\n          *ngIf=\"vendor.activeRec === 1\"\n          (click)=\"AddContractBranch(vendor)\"\n        >\n          <ion-icon name=\"add-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-button\n          *ngIf=\"vendor.activeRec === 1\"\n          (click)=\"DuplicateContract(vendor)\"\n        >\n          <ion-icon name=\"copy-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"1\">\n        <ion-button (click)=\"openEditContractModal(vendor)\">\n          <ion-icon name=\"create-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-pagination\n    [page]=\"contractPage\"\n    [collectionSize]=\"vendorContract.length\"\n    (pageChange)=\"changeContractPage($event);\"\n  ></app-pagination>\n  <ion-row>\n    <ion-col size=\"12\" style=\"text-align: center\">\n      <ion-button color=\"danger\" (click)=\"backToVendors()\">\n        <ion-label>رجوع</ion-label>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-card>\n\n<ion-modal\n  [isOpen]=\"showAddContractModal || showEditContractModal\"\n  class=\"modal-fullscreen\"\n  (willDismiss)=\"closeModal()\"\n>\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-button (click)=\"closeModal()\">\n            <ion-icon name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <ion-title *ngIf=\"showAddContractModal\">اضافة عقد جديد</ion-title>\n        <ion-title *ngIf=\"showEditContractModal\">تعديل العقد</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class=\"ion-padding\">\n      <app-loader [isVisible]=\"showLoader\"></app-loader>\n      <form\n        [formGroup]=\"ContractForm\"\n        (ngSubmit)=\"showAddContractModal ? addContract() : editContract()\"\n      >\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>تاريخ بداية العقد</ion-label>\n              <ngx-datepicker\n                [parentForm]=\"ContractForm\"\n                parentFormControllerName=\"contractStartDate\"\n              ></ngx-datepicker>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-label>تاريخ نهاية العقد</ion-label>\n              <ngx-datepicker\n                [parentForm]=\"ContractForm\"\n                parentFormControllerName=\"contractEndDate\"\n              ></ngx-datepicker>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>الموظف القانوني</ion-label>\n              <ion-input\n                type=\"text\"\n                [maxlength]=\"128\"\n                formControlName=\"authorizedPerson\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-label>رقم الموظف القانوني</ion-label>\n              <ion-input\n                type=\"text\"\n                formControlName=\"authorizedIdNo\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e13, 0)\"\n              >\n              </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-label>عنوان المراسلة</ion-label>\n              <ion-input\n                type=\"text\"\n                [maxlength]=\"128\"\n                formControlName=\"mailingAddress\"\n              >\n              </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>نسبة العمولة</ion-label>\n              <ion-input\n                type=\"text\"\n                formControlName=\"comPercent\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 100, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-label>قيمة العمولة</ion-label>\n              <ion-input\n                type=\"text\"\n                formControlName=\"comAm\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 2)\"\n              >\n              </ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-label>اقل قيمة للمبيعات</ion-label>\n              <ion-input\n                type=\"text\"\n                formControlName=\"minSalesAm\"\n                (ionInput)=\"this.inputMaskingService.formatNumberInput($event, 0, 1e14, 2)\"\n              ></ion-input>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf=\"showEditContractModal\">\n            <ion-col size=\"1\">\n              <ion-checkbox formControlName=\"activeRec\"></ion-checkbox>\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-label>فعال</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-button\n                *ngIf=\"showAddContractModal\"\n                type=\"submit\"\n                expand=\"full\"\n              >\n                اضافة\n              </ion-button>\n              <ion-button\n                *ngIf=\"showEditContractModal\"\n                type=\"submit\"\n                expand=\"full\"\n              >\n                تعديل\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n\n<ion-modal\n  [isOpen]=\"showAddContractBranchModal\"\n  class=\"modal-fullscreen\"\n  (willDismiss)=\"closeBranchModal()\"\n>\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-button (click)=\"closeBranchModal()\">\n            <ion-icon name=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <ion-title\n          >اضافة فروع للعقد {{selectedVendorContract.contractStartDate | date :\n          \"yyyy-MM-dd\"}} - {{selectedVendorContract.contractEndDate | date :\n          \"yyyy-MM-dd\"}}</ion-title\n        >\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class=\"ion-padding\">\n      <app-loader [isVisible]=\"showLoader\"></app-loader>\n      <div class=\"table-responsive ion-padding category-container\">\n        <ion-grid\n          [fixed]=\"true\"\n          style=\"min-width: 100px\"\n          class=\"scroll-container\"\n        >\n          <ion-row class=\"header-row\">\n            <ion-col size=\"1\">\n              <ion-checkbox\n                type=\"checkbox\"\n                #ionCheckBoxBranches\n                (ionChange)=\"onBranchesCheckboxMasterChange($event)\"\n                [checked]=\"isAllBranchesSelected\"\n              ></ion-checkbox>\n            </ion-col>\n            <ion-col size=\"11\"><ion-label>اسم الفرع</ion-label></ion-col>\n          </ion-row>\n          <ion-row\n            class=\"details-row\"\n            *ngFor=\"let branch of this.pagingService.Paging(vendorBranch, vendorBranchPage); let i = index\"\n          >\n            <ion-col size=\"1\">\n              <ion-checkbox\n                type=\"checkbox\"\n                (ionChange)=\"onBranchCheckboxChange($event, branch , i)\"\n                [checked]=\"branch.isChecked\"\n              ></ion-checkbox>\n            </ion-col>\n            <ion-col size=\"11\">\n              <ion-label>{{branch.vendorBrName}}</ion-label>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <app-pagination\n        [page]=\"vendorBranchPage\"\n        [collectionSize]=\"vendorBranch.length\"\n        (pageChange)=\"changeBranchPage($event);\"\n      ></app-pagination>\n      <ion-row>\n        <ion-col style=\"text-align: center\">\n          <ion-button (click)=\"addContractBranches()\">\n            <ion-label>اضافة الفروع للعقد</ion-label>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_views_pages_consumer_manage-vendor-contracts_manage-vendor-contracts_module_ts.js.map