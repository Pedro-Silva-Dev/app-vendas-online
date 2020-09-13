(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["produto-produto-module"],{

/***/ "./src/app/produto/models/produto.model.ts":
/*!*************************************************!*\
  !*** ./src/app/produto/models/produto.model.ts ***!
  \*************************************************/
/*! exports provided: Produto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Produto", function() { return Produto; });
class Produto {
}


/***/ }),

/***/ "./src/app/produto/produto-form/produto-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/produto/produto-form/produto-form.component.ts ***!
  \****************************************************************/
/*! exports provided: ProdutoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoFormComponent", function() { return ProdutoFormComponent; });
/* harmony import */ var _shared_validations_validations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/validations/validations */ "./src/app/shared/validations/validations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _produto_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../produto.service */ "./src/app/produto/produto.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/spinner/spinner.component */ "./src/app/shared/components/spinner/spinner.component.ts");










function ProdutoFormComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", categoria_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](categoria_r4.nome);
} }
function ProdutoFormComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r1.produto == null ? null : ctx_r1.produto.id) ? "Atualizar" : "Cadastrar");
} }
function ProdutoFormComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-spinner");
} }
const _c0 = function (a1) { return { "form-control": true, "is-invalid": a1 }; };
class ProdutoFormComponent {
    constructor(_produtoService, _formBuilder, _toastrService) {
        this._produtoService = _produtoService;
        this._formBuilder = _formBuilder;
        this._toastrService = _toastrService;
        this.categorias = [];
        this.eventFechar = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.eventReload = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnInit() {
        this.criarProdutoForm();
    }
    /**
     * Responsavel por criar o formulario para cadastrar ou atualizar um produto.
     */
    criarProdutoForm() {
        this.produtoForm = this._formBuilder.group({
            id: [this.produto.id],
            nome: [this.produto.nome, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validations_validations__WEBPACK_IMPORTED_MODULE_0__["isNotNull"]]],
            valor: [this.produto.valor, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            categoriaId: [this.produto.categoriaId, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    /**
     * Executa o metodo de atualizar caso o produto ja exista, caso contrario executa o de cadastro.
     */
    salvar() {
        if (this.produtoForm.valid) {
            this.processando = true;
            if (this.produto.id) {
                this.atualizar();
            }
            else {
                this.cadastrar();
            }
        }
    }
    /**
     * Emite o evento para fechar o modal.
     */
    fechar() {
        this.eventFechar.emit(true);
    }
    /**
     * Atualiza um produto.
     */
    atualizar() {
        this._produtoService.atualizar(this.produtoForm.value).subscribe((res) => {
            if (res.status == 200) {
                if (res.body.id) {
                    this._toastrService.success(`Produto atualizado com sucesso!`);
                    this.eventReload.emit(res.body);
                    this.eventFechar.emit(true);
                }
                else {
                    this._toastrService.warning(`Ocorreu um erro ao tentar obter os resultados da atualização, por favor tente novamente.`);
                    this.processando = false;
                }
            }
            else {
                this._toastrService.warning(`Ocorreu um erro na resposta da atualização, por favor tente novamente.`);
                this.processando = false;
            }
        }, err => {
            this._toastrService.error(`Ocorreu um erro no processo de atualização, por favor contate o suporte.`);
            this.processando = false;
        });
    }
    /**
     * Cadastra um produto.
     */
    cadastrar() {
        this._produtoService.cadastrar(this.produtoForm.value).subscribe((res) => {
            if (res.status == 201) {
                if (res.body.id) {
                    this._toastrService.success(`Produto cadastrado com sucesso!`);
                    this.eventReload.emit(res.body);
                    this.eventFechar.emit(true);
                }
                else {
                    this._toastrService.warning(`Ocorreu um erro ao tentar obter os resultados do cadastro, por favor tente novamente.`);
                    this.processando = false;
                }
            }
            else {
                this._toastrService.warning(`Ocorreu um erro na resposta do cadastro, por favor tente novamente.`);
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
        return this.produtoForm.get(campo).invalid && this.produtoForm.get(campo).touched;
    }
}
ProdutoFormComponent.ɵfac = function ProdutoFormComponent_Factory(t) { return new (t || ProdutoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
ProdutoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProdutoFormComponent, selectors: [["app-produto-form"]], inputs: { produto: "produto", categorias: "categorias" }, outputs: { eventFechar: "eventFechar", eventReload: "eventReload" }, decls: 36, vars: 16, consts: [[1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [3, "formGroup", "submit"], [1, "modal-body"], [1, "form-group"], ["for", "nome"], [1, "text-danger"], ["formControlName", "nome", "type", "text", "id", "nome", "placeholder", "Nome do produto", 3, "ngClass"], ["for", "valor"], ["formControlName", "valor", "placeholder", "R$99.99", "prefix", "R$", "thousandSeparator", ",", "mask", "separator", "type", "text", "id", "valor", 3, "allowNegativeNumbers", "ngClass"], ["for", "categoria"], ["formControlName", "categoriaId", "id", "categoria", 3, "ngClass"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["id", "voltar", "type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["id", "cadastrar", "type", "submit", 1, "btn", "btn-outline-primary", 3, "disabled"], [4, "ngIf", "ngIfElse"], ["spinner", ""], [3, "value"]], template: function ProdutoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProdutoFormComponent_Template_button_click_3_listener() { return ctx.fechar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function ProdutoFormComponent_Template_form_submit_6_listener() { return ctx.salvar(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Valor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Selecione uma categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ProdutoFormComponent_option_28_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProdutoFormComponent_Template_button_click_30_listener() { return ctx.fechar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Voltar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ProdutoFormComponent_span_33_Template, 2, 1, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ProdutoFormComponent_ng_template_34_Template, 1, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", (ctx.produto == null ? null : ctx.produto.id) ? "Atualizar" : "Cadastrar", " Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.produtoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx.validarCampo("nome")));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("allowNegativeNumbers", false)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ctx.validarCampo("valor")));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](14, _c0, ctx.validarCampo("categoriaId")));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.produtoForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.processando)("ngIfElse", _r2);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], ngx_mask__WEBPACK_IMPORTED_MODULE_6__["MaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG8vcHJvZHV0by1mb3JtL3Byb2R1dG8tZm9ybS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ProdutoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-produto-form',
                templateUrl: './produto-form.component.html',
                styleUrls: ['./produto-form.component.css']
            }]
    }], function () { return [{ type: _produto_service__WEBPACK_IMPORTED_MODULE_3__["ProdutoService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, { produto: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], categorias: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], eventFechar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], eventReload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/produto/produto-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/produto/produto-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProdutoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoRoutingModule", function() { return ProdutoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _produto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./produto.component */ "./src/app/produto/produto.component.ts");





const routes = [{ path: '', component: _produto_component__WEBPACK_IMPORTED_MODULE_2__["ProdutoComponent"] }];
class ProdutoRoutingModule {
}
ProdutoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProdutoRoutingModule });
ProdutoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProdutoRoutingModule_Factory(t) { return new (t || ProdutoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProdutoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProdutoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/produto/produto.component.ts":
/*!**********************************************!*\
  !*** ./src/app/produto/produto.component.ts ***!
  \**********************************************/
/*! exports provided: ProdutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoComponent", function() { return ProdutoComponent; });
/* harmony import */ var _models_produto_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/produto.model */ "./src/app/produto/models/produto.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _produto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./produto.service */ "./src/app/produto/produto.service.ts");
/* harmony import */ var _categoria_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../categoria/categoria.service */ "./src/app/categoria/categoria.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "./node_modules/@sweetalert2/ngx-sweetalert2/__ivy_ngcc__/fesm2015/sweetalert2-ngx-sweetalert2.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var _produto_form_produto_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./produto-form/produto-form.component */ "./src/app/produto/produto-form/produto-form.component.ts");














function ProdutoComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categoria_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", categoria_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](categoria_r8.nome);
} }
function ProdutoComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProdutoComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.limparFiltros(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Limpar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProdutoComponent_div_20_ul_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProdutoComponent_div_20_ul_16_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const produto_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24); return ctx_r13.exibirProdutoForm(_r5, produto_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("confirm", function ProdutoComponent_div_20_ul_16_Template_li_confirm_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const produto_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.excluir(produto_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Excluir");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("swal", _r7);
} }
function ProdutoComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProdutoComponent_div_20_ul_16_Template, 7, 1, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const produto_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](produto_r11["categoria"] == null ? null : produto_r11["categoria"].nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](produto_r11.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("R$ ", produto_r11.valor, "");
} }
function ProdutoComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Nenhuma informa\u00E7\u00E3o encontrada. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProdutoComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "pagination", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChanged", function ProdutoComponent_div_22_Template_pagination_pageChanged_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.obterPaginaProduto($event.page); })("ngModelChange", function ProdutoComponent_div_22_Template_pagination_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.pagina = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("totalItems", ctx_r4.totalItems)("itemsPerPage", ctx_r4.tamanho)("ngModel", ctx_r4.pagina);
} }
function ProdutoComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-produto-form", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("eventFechar", function ProdutoComponent_ng_template_23_Template_app_produto_form_eventFechar_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.fecharModal(); })("eventReload", function ProdutoComponent_ng_template_23_Template_app_produto_form_eventReload_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.obterPaginaProduto(ctx_r23.pagina); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("produto", ctx_r6.produto)("categorias", ctx_r6.categorias);
} }
class ProdutoComponent {
    constructor(_produtoService, _categoriaService, _toastrService, _modalService, _formBuilder) {
        this._produtoService = _produtoService;
        this._categoriaService = _categoriaService;
        this._toastrService = _toastrService;
        this._modalService = _modalService;
        this._formBuilder = _formBuilder;
        //Config paginação.
        this.pagina = 1;
        this.tamanho = 12;
        this.totalItems = 0;
    }
    ngOnInit() {
        this.criarFiltroForm();
        this.obterListaCategoria();
        this.obterPaginaProduto(this.pagina);
    }
    /**
     * Responsavel por criar o formulario de filtro.
     */
    criarFiltroForm() {
        this.filtroForm = this._formBuilder.group({
            nome: [null],
            valorMin: [null],
            valorMax: [null],
            categoria: [null]
        });
    }
    /**
     * Filtra os produtos de acordo com os parametros do formulario.
     */
    filtrar() {
        this.pagina = 0;
        this.obterPaginaProduto(this.pagina);
    }
    /**
     * Obtem uma pagina de produtos de acordo com a filtragem.
     * @param pagina
     */
    obterPaginaProduto(pagina) {
        let form = this.filtroForm.value;
        this._produtoService.obterPaginaProduto(pagina, this.tamanho, form.nome, form.valorMin, form.valorMax, form.categoria).subscribe((res) => {
            if (res.status == 200) {
                this.produtos = res.body;
                this.totalItems = Number.parseInt(res.headers.get('X-Total-Count'));
            }
        }, err => this._toastrService.error(`Ocorreu um erro ao carregar os produtos, por favor entre em contato com o suporte.`));
    }
    /**
     *Exibi o modal para castrar ou atualizar um produto.
     * @param template
     * @param produto
     */
    exibirProdutoForm(template, produto) {
        this.produto = new _models_produto_model__WEBPACK_IMPORTED_MODULE_0__["Produto"]();
        if (produto) {
            this.produto = produto;
        }
        this.modalRef = this._modalService.show(template, { ignoreBackdropClick: true, class: "modal-md" });
    }
    /**
     * Exclui um produto.
     * @param id
     */
    excluir(id) {
        this._produtoService.excluir(id).subscribe((res) => {
            if (res.status == 200) {
                this._toastrService.success(`Produto excluido com sucesso!`);
                this.produtos = this.produtos.filter(p => p.id != id);
            }
        }, err => this._toastrService.error(`Ocorreu um erro ao tentar excluir, por favor contate o suporte.`));
    }
    /**
     * Fecha o modal de cadastro ou atualização.
     */
    fecharModal() {
        this.modalRef.hide();
    }
    /**
     * Obtem uma lista com todas as categorias.
     */
    obterListaCategoria() {
        this._categoriaService.obterListaCategoria().subscribe((res) => {
            if (res.status == 200) {
                this.categorias = res.body;
            }
        }, err => this._toastrService.error(`Ocorreu um erro ao carregar as categorias, por favor contate o surpote.`));
    }
    /**
     * Reseta todos os campos do formulario e obtem uma nova pagina.
     */
    limparFiltros() {
        this.filtroForm.reset();
        this.filtroForm.get('categoria').setValue(null);
        this.pagina = 0;
        this.obterPaginaProduto(this.pagina);
    }
    /**
     * Verifica se deve exibir o botão de limpar os filtros.
     */
    exibirLimparFiltro() {
        return this.filtroForm.get('nome').value || this.filtroForm.get('valorMin').value || this.filtroForm.get('valorMax').value || this.filtroForm.get('categoria').value;
    }
}
ProdutoComponent.ɵfac = function ProdutoComponent_Factory(t) { return new (t || ProdutoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_categoria_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"])); };
ProdutoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProdutoComponent, selectors: [["app-produto"]], decls: 27, vars: 10, consts: [[1, "container-fluid"], [1, "row"], [1, "col-lg-12", "d-flex", "justify-content-between", "mt-4"], [1, "title", "d-flex", "align-items-center"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "form-inline", "mb-4", 3, "formGroup", "submit"], ["formControlName", "nome", "type", "text", "placeholder", "Nome do produto", "id", "nome", 1, "form-control", "mr-2"], ["formControlName", "valorMin", "placeholder", "Valor minimo", "prefix", "R$", "thousandSeparator", ",", "mask", "separator", "type", "text", "id", "valorMin", 1, "form-control", "mr-2", 3, "allowNegativeNumbers"], ["formControlName", "valorMax", "placeholder", "Valor maximo", "prefix", "R$", "thousandSeparator", ",", "mask", "separator", "type", "text", "id", "valorMax", 1, "form-control", "mr-2", 3, "allowNegativeNumbers"], ["formControlName", "categoria", "id", "categoria", 1, "form-control", "mr-2"], ["value", "null"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "filtrar", "type", "submit", 1, "btn", "btn-outline-primary", "mr-2"], ["class", "btn btn-outline-primary", "id", "limpar", "type", "button", 3, "click", 4, "ngIf"], ["class", "col-lg-2", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], ["produtoForm", ""], ["title", "Realmente deseja excluir esse produto?", "text", "Essa a\u00E7\u00E3o \u00E9 irrevers\u00EDvel", "icon", "question", "cancelButtonText", "Cancelar", "cancelButtonColor", "#2196F3", "confirmButtonText", "Excluir", "confirmButtonColor", "#dc3545", 3, "showCancelButton", "focusCancel"], ["deleteSwal", ""], [3, "value"], ["id", "limpar", "type", "button", 1, "btn", "btn-outline-primary", 3, "click"], [1, "col-lg-2"], [1, "ui-card"], [1, "ui-card-header"], ["src", "./assets/images/produto.png", "alt", "produto", 1, "img-fluid"], [1, "ui-card-body", "d-flex", "justify-content-between"], [1, "sub-title"], [1, "pl-1", "cursor-pointer"], ["dropdown", "", 1, "btn-group"], ["dropdownToggle", "", 1, "material-icons"], ["id", "dropdown-animated", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-animated", 4, "dropdownMenu"], ["id", "dropdown-animated", "role", "menu", "aria-labelledby", "button-animated", 1, "dropdown-menu"], ["role", "menuitem", 3, "click"], ["href", "javascript:void(0)", 1, "dropdown-item"], ["role", "menuitem", 3, "swal", "confirm"], [1, "col-lg-12"], ["role", "alert", 1, "alert", "alert-info"], [1, "col-xs-12", "col-12", "mt-3"], ["nextText", "Avan\u00E7ar", "previousText", "Voltar", 3, "totalItems", "itemsPerPage", "ngModel", "pageChanged", "ngModelChange"], [3, "produto", "categorias", "eventFechar", "eventReload"]], template: function ProdutoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Produtos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProdutoComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24); return ctx.exibirProdutoForm(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "+ Novo Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function ProdutoComponent_Template_form_submit_8_listener() { return ctx.filtrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Selecione uma categoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ProdutoComponent_option_15_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Filtrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProdutoComponent_button_18_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ProdutoComponent_div_20_Template, 17, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ProdutoComponent_div_21_Template, 4, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ProdutoComponent_div_22_Template, 3, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ProdutoComponent_ng_template_23_Template, 1, 2, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "swal", 17, 18);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.filtroForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("allowNegativeNumbers", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("allowNegativeNumbers", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categorias);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.exibirLimparFiltro());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.produtos);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.produtos == null ? null : ctx.produtos.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.totalItems > ctx.tamanho);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showCancelButton", true)("focusCancel", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], ngx_mask__WEBPACK_IMPORTED_MODULE_7__["MaskDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SwalComponent"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownMenuDirective"], _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_9__["SwalDirective"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _produto_form_produto_form_component__WEBPACK_IMPORTED_MODULE_12__["ProdutoFormComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1dG8vcHJvZHV0by5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProdutoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-produto',
                templateUrl: './produto.component.html',
                styleUrls: ['./produto.component.css']
            }]
    }], function () { return [{ type: _produto_service__WEBPACK_IMPORTED_MODULE_2__["ProdutoService"] }, { type: _categoria_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/produto/produto.module.ts":
/*!*******************************************!*\
  !*** ./src/app/produto/produto.module.ts ***!
  \*******************************************/
/*! exports provided: ProdutoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoModule", function() { return ProdutoModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _produto_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./produto-routing.module */ "./src/app/produto/produto-routing.module.ts");
/* harmony import */ var _produto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./produto.component */ "./src/app/produto/produto.component.ts");
/* harmony import */ var _produto_form_produto_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./produto-form/produto-form.component */ "./src/app/produto/produto-form/produto-form.component.ts");








class ProdutoModule {
}
ProdutoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProdutoModule });
ProdutoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ProdutoModule_Factory(t) { return new (t || ProdutoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _produto_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProdutoRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProdutoModule, { declarations: [_produto_component__WEBPACK_IMPORTED_MODULE_5__["ProdutoComponent"],
        _produto_form_produto_form_component__WEBPACK_IMPORTED_MODULE_6__["ProdutoFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _produto_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProdutoRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ProdutoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _produto_component__WEBPACK_IMPORTED_MODULE_5__["ProdutoComponent"],
                    _produto_form_produto_form_component__WEBPACK_IMPORTED_MODULE_6__["ProdutoFormComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _produto_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProdutoRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/produto/produto.service.ts":
/*!********************************************!*\
  !*** ./src/app/produto/produto.service.ts ***!
  \********************************************/
/*! exports provided: ProdutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdutoService", function() { return ProdutoService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ProdutoService {
    constructor(_http) {
        this._http = _http;
    }
    /**
     * Obtem uma pagina de produtos de acordo com os parametros.
     * @param pagina
     * @param tamanho
     * @param nome
     * @param valorMin
     * @param valorMax
     * @param categoria
     */
    obterPaginaProduto(pagina, tamanho, nome, valorMin, valorMax, categoria) {
        return this._http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL}/produtos?_expand=categoria&_page=${pagina}&_limit=${tamanho}${nome ? `&nome_like=${nome}` : ''}${valorMin ? `&valor_gte=${valorMin}` : ''}${valorMax ? `&valor_lte=${valorMax}` : ''}${categoria ? `&categoriaId=${categoria}` : ''}`, { observe: "response" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    /**
     * Obtem uma lista com todos os produtos.
     */
    obterListaProduto() {
        return this._http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL}/produtos`, { observe: "response" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    /**
     * Persistem um produto no banco.
     * @param produto
     */
    cadastrar(produto) {
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL}/produtos`, produto, { observe: "response" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    /**
     * Atualiza os dados de um produto.
     * @param produto
     */
    atualizar(produto) {
        return this._http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL}/produtos/${produto.id}`, produto, { observe: "response" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    /**
     * Exclui um produto do banco.
     * @param id
     */
    excluir(id) {
        return this._http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL}/produtos/${id}`, { observe: "response" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
}
ProdutoService.ɵfac = function ProdutoService_Factory(t) { return new (t || ProdutoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ProdutoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProdutoService, factory: ProdutoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ProdutoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=produto-produto-module.js.map