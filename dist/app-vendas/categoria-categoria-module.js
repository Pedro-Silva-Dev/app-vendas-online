(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categoria-categoria-module"],{

/***/ "./src/app/categoria/categoria-form/categoria-form.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/categoria/categoria-form/categoria-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: CategoriaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaFormComponent", function() { return CategoriaFormComponent; });
/* harmony import */ var _shared_validations_validations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/validations/validations */ "./src/app/shared/validations/validations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../categoria.service */ "./src/app/categoria/categoria.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/spinner/spinner.component */ "./src/app/shared/components/spinner/spinner.component.ts");









function CategoriaFormComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r0.categoria == null ? null : ctx_r0.categoria.id) ? "Atualizar" : "Cadastrar");
} }
function CategoriaFormComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-spinner");
} }
const _c0 = function (a1) { return { "form-control": true, "is-invalid": a1 }; };
class CategoriaFormComponent {
    constructor(_formBuilder, _categoriaService, _toastrService) {
        this._formBuilder = _formBuilder;
        this._categoriaService = _categoriaService;
        this._toastrService = _toastrService;
        this.eventFechar = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.eventReload = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnInit() {
        this.criarCategoriaForm();
    }
    /**
     * Responsavel por criar o formulario para cadastrar ou atualizar uma categoria.
     */
    criarCategoriaForm() {
        this.categoriaForm = this._formBuilder.group({
            id: [this.categoria.id],
            nome: [this.categoria.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validations_validations__WEBPACK_IMPORTED_MODULE_0__["isNotNull"]]]
        });
    }
    /**
     * Fecha o modal de cadastro ou atualização de categoria.
     */
    fechar() {
        this.eventFechar.emit(true);
    }
    /**
     * Executa o metodo de atualizar caso a categoria ja exista, caso contrario executa o de cadastro.
     */
    salvar() {
        if (this.categoriaForm.valid) {
            this.processando = true;
            if (this.categoria.id) {
                this.atualizar();
            }
            else {
                this.cadastrar();
            }
        }
    }
    /**
     * Atualiza os dados de uma categoria existente.
     */
    atualizar() {
        this._categoriaService.atualizar(this.categoriaForm.value).subscribe((res) => {
            if (res.status == 200) {
                if (res.body.id) {
                    this._toastrService.success(`Categoria atualizada com sucesso!`);
                    this.eventReload.emit(res.body);
                    this.eventFechar.emit(true);
                }
                else {
                    this._toastrService.warning(`Ocorreu um erro ao tentar obter os resultados da atualização, por favor tente novamente.`);
                    this.processando = false;
                }
            }
            else {
                this._toastrService.warning(`Ocorreu um erro na tentativa de atualização, por favor tente novamente.`);
                this.processando = false;
            }
        }, err => {
            this._toastrService.error(`Ocorreu um erro no processo de atualização, por favor contate o suporte.`);
            this.processando = false;
        });
    }
    /**
     * Cadastra uma nova categoria.
     */
    cadastrar() {
        this._categoriaService.cadastrar(this.categoriaForm.value).subscribe((res) => {
            if (res.status == 201) {
                if (res.body.id) {
                    this._toastrService.success(`Categoria cadastrada com sucesso!`);
                    this.eventReload.emit(res.body);
                    this.eventFechar.emit(true);
                }
                else {
                    this._toastrService.warning(`Ocorreu um erro ao tentar obter os resultados do cadastro, por favor tente novamente.`);
                    this.processando = false;
                }
            }
            else {
                this._toastrService.warning(`Ocorreu um erro na tentativa de cadastro, por favor tente novamente.`);
                this.processando = false;
            }
        }, err => {
            this._toastrService.error(`Ocorreu um erro no processo de cadastro, por favor contate o suporte.`);
            this.processando = false;
        });
    }
    /**
     * Verifica se o campo foi alterado e se está valido.
     * @param campo
     */
    validarCampo(campo) {
        return this.categoriaForm.get(campo).invalid && this.categoriaForm.touched;
    }
}
CategoriaFormComponent.ɵfac = function CategoriaFormComponent_Factory(t) { return new (t || CategoriaFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
CategoriaFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CategoriaFormComponent, selectors: [["app-categoria-form"]], inputs: { categoria: "categoria" }, outputs: { eventFechar: "eventFechar", eventReload: "eventReload" }, decls: 21, vars: 8, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [3, "formGroup", "submit"], [1, "modal-body"], [1, "form-group"], ["for", "nome"], [1, "text-danger"], ["formControlName", "nome", "type", "text", "id", "nome", "placeholder", "Nome da categoria", 3, "ngClass"], [1, "modal-footer"], ["id", "voltar", "type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "cadastrar", "type", "submit", 1, "btn", "btn-outline-primary", 3, "disabled"], [4, "ngIf", "ngIfElse"], ["spinner", ""]], template: function CategoriaFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoriaFormComponent_Template_button_click_3_listener() { return ctx.fechar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function CategoriaFormComponent_Template_form_submit_6_listener() { return ctx.salvar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CategoriaFormComponent_Template_button_click_15_listener() { return ctx.fechar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CategoriaFormComponent_span_18_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, CategoriaFormComponent_ng_template_19_Template, 1, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", (ctx.categoria == null ? null : ctx.categoria.id) ? "Atualizar" : "Cadastrar", " Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.categoriaForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c0, ctx.validarCampo("nome")));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.categoriaForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.processando)("ngIfElse", _r1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpYS9jYXRlZ29yaWEtZm9ybS9jYXRlZ29yaWEtZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CategoriaFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-categoria-form',
                templateUrl: './categoria-form.component.html',
                styleUrls: ['./categoria-form.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, { categoria: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], eventFechar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], eventReload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/categoria/categoria-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/categoria/categoria-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaRoutingModule", function() { return CategoriaRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _categoria_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoria.component */ "./src/app/categoria/categoria.component.ts");





const routes = [{ path: '', component: _categoria_component__WEBPACK_IMPORTED_MODULE_2__["CategoriaComponent"] }];
class CategoriaRoutingModule {
}
CategoriaRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CategoriaRoutingModule });
CategoriaRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CategoriaRoutingModule_Factory(t) { return new (t || CategoriaRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CategoriaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriaRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/categoria/categoria.component.ts":
/*!**************************************************!*\
  !*** ./src/app/categoria/categoria.component.ts ***!
  \**************************************************/
/*! exports provided: CategoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaComponent", function() { return CategoriaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_categoria_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/categoria.model */ "./src/app/categoria/models/categoria.model.ts");
/* harmony import */ var _categoria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoria.service */ "./src/app/categoria/categoria.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./categoria-form/categoria-form.component */ "./src/app/categoria/categoria-form/categoria-form.component.ts");












function CategoriaComponent_div_9_ul_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriaComponent_div_9_ul_10_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const categoria_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx_r8.exibirCategoriaForm(_r3, categoria_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("confirm", function CategoriaComponent_div_9_ul_10_Template_li_confirm_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const categoria_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.excluir(categoria_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Excluir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swal", _r5);
} }
function CategoriaComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CategoriaComponent_div_9_ul_10_Template, 7, 1, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](categoria_r6.nome);
} }
function CategoriaComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Nenhuma informa\u00E7\u00E3o encontrada. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CategoriaComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pagination", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function CategoriaComponent_div_11_Template_pagination_pageChanged_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.obterPaginaCategoria($event.page); })("ngModelChange", function CategoriaComponent_div_11_Template_pagination_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.pagina = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx_r2.totalItems)("itemsPerPage", ctx_r2.tamanho)("ngModel", ctx_r2.pagina);
} }
function CategoriaComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-categoria-form", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventFechar", function CategoriaComponent_ng_template_12_Template_app_categoria_form_eventFechar_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.fechar(); })("eventReload", function CategoriaComponent_ng_template_12_Template_app_categoria_form_eventReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.obterPaginaCategoria(ctx_r18.pagina); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categoria", ctx_r4.categoria);
} }
class CategoriaComponent {
    constructor(_categoriaService, _modalService, _toastrService) {
        this._categoriaService = _categoriaService;
        this._modalService = _modalService;
        this._toastrService = _toastrService;
        this.pagina = 1;
        this.tamanho = 20;
        this.totalItems = 0;
    }
    ngOnInit() {
        this.obterPaginaCategoria(this.pagina);
    }
    /**
     * Obtem uma pagina com os dados de categoria.
     */
    obterPaginaCategoria(pagina) {
        this._categoriaService.obterPaginaCategoria(pagina, this.tamanho).subscribe((res) => {
            if (res.status == 200) {
                this.categorias = res.body;
                this.totalItems = Number.parseInt(res.headers.get('X-Total-Count'));
            }
        });
    }
    /**
     * Exibe o modal responsavel por cadastrar ou atualizar a categoria.
     * @param template
     * @param categoria
     */
    exibirCategoriaForm(template, categoria) {
        this.categoria = new _models_categoria_model__WEBPACK_IMPORTED_MODULE_1__["Categoria"]();
        if (categoria) {
            this.categoria = categoria;
        }
        this.modalRef = this._modalService.show(template, { ignoreBackdropClick: true, class: 'modal-md' });
    }
    /**
     * Fecha o modal de cadastro ou atualização.
     */
    fechar() {
        this.modalRef.hide();
    }
    /**
     * Exclui uma categoria.
     */
    excluir(id) {
        this._categoriaService.excluir(id).subscribe((res) => {
            if (res.status == 200) {
                this._toastrService.success(`Categoria excluida com sucesso!`);
                this.categorias = this.categorias.filter(c => c.id != id);
            }
            else {
                this._toastrService.warning(`Ocorreu um erro ao tentar excluir a categoria, por favor tente novamente.`);
            }
        }, err => {
            this._toastrService.error(`Ocorreu um erro ao tentar excluir a categoria, por favor entre em contato com o suporte.`);
        });
    }
}
CategoriaComponent.ɵfac = function CategoriaComponent_Factory(t) { return new (t || CategoriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_categoria_service__WEBPACK_IMPORTED_MODULE_2__["CategoriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
CategoriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriaComponent, selectors: [["app-categoria"]], decls: 16, vars: 5, consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-12", "mt-4", "d-flex", "justify-content-between"], [1, "title"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["class", "col-lg-2 col-md-4", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], ["categoriaForm", ""], ["title", "Realmente deseja excluir essa categoria?", "text", "Essa a\u00E7\u00E3o \u00E9 irrevers\u00EDvel", "icon", "question", "cancelButtonText", "Cancelar", "cancelButtonColor", "#2196F3", "confirmButtonText", "Excluir", "confirmButtonColor", "#dc3545", 3, "showCancelButton", "focusCancel"], ["deleteSwal", ""], [1, "col-lg-2", "col-md-4"], [1, "ui-card", "p-3"], [1, "d-flex", "justify-content-between"], [1, "mt-1"], [1, "title", "pl-1"], [1, "d-flex", "align-items-center", "pl-1", "cursor-pointer"], ["dropdown", "", 1, "btn-group"], ["dropdownToggle", "", 1, "material-icons"], ["id", "dropdown-animated", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-animated", 4, "dropdownMenu"], ["id", "dropdown-animated", "role", "menu", "aria-labelledby", "button-animated", 1, "dropdown-menu"], ["role", "menuitem", 3, "click"], ["href", "javascript:void(0)", 1, "dropdown-item"], ["role", "menuitem", 3, "swal", "confirm"], [1, "col-lg-12"], ["role", "alert", 1, "alert", "alert-info"], [1, "col-xs-12", "col-12", "mt-3"], ["nextText", "Avan\u00E7ar", "previousText", "Voltar", 3, "totalItems", "itemsPerPage", "ngModel", "pageChanged", "ngModelChange"], [3, "categoria", "eventFechar", "eventReload"]], template: function CategoriaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Categorias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoriaComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); return ctx.exibirCategoriaForm(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+ Nova Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CategoriaComponent_div_9_Template, 11, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CategoriaComponent_div_10_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CategoriaComponent_div_11_Template, 3, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CategoriaComponent_ng_template_12_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "swal", 8, 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.categorias == null ? null : ctx.categorias.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalItems > ctx.tamanho);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCancelButton", true)("focusCancel", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__["SwalComponent"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownMenuDirective"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_6__["SwalDirective"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_10__["CategoriaFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpYS9jYXRlZ29yaWEuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-categoria',
                templateUrl: './categoria.component.html',
                styleUrls: ['./categoria.component.css']
            }]
    }], function () { return [{ type: _categoria_service__WEBPACK_IMPORTED_MODULE_2__["CategoriaService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/categoria/categoria.module.ts":
/*!***********************************************!*\
  !*** ./src/app/categoria/categoria.module.ts ***!
  \***********************************************/
/*! exports provided: CategoriaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaModule", function() { return CategoriaModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _categoria_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categoria-routing.module */ "./src/app/categoria/categoria-routing.module.ts");
/* harmony import */ var _categoria_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoria.component */ "./src/app/categoria/categoria.component.ts");
/* harmony import */ var _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categoria-form/categoria-form.component */ "./src/app/categoria/categoria-form/categoria-form.component.ts");








class CategoriaModule {
}
CategoriaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CategoriaModule });
CategoriaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CategoriaModule_Factory(t) { return new (t || CategoriaModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _categoria_routing_module__WEBPACK_IMPORTED_MODULE_4__["CategoriaRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CategoriaModule, { declarations: [_categoria_component__WEBPACK_IMPORTED_MODULE_5__["CategoriaComponent"],
        _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_6__["CategoriaFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _categoria_routing_module__WEBPACK_IMPORTED_MODULE_4__["CategoriaRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CategoriaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _categoria_component__WEBPACK_IMPORTED_MODULE_5__["CategoriaComponent"],
                    _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_6__["CategoriaFormComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _categoria_routing_module__WEBPACK_IMPORTED_MODULE_4__["CategoriaRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/categoria/models/categoria.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/categoria/models/categoria.model.ts ***!
  \*****************************************************/
/*! exports provided: Categoria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categoria", function() { return Categoria; });
class Categoria {
}


/***/ })

}]);
//# sourceMappingURL=categoria-categoria-module.js.map