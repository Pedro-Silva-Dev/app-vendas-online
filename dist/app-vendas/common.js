(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/categoria/categoria.service.ts":
/*!************************************************!*\
  !*** ./src/app/categoria/categoria.service.ts ***!
  \************************************************/
/*! exports provided: CategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaService", function() { return CategoriaService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class CategoriaService {
    constructor(_http) {
        this._http = _http;
    }
    /**
     * Obtem uma pagina com os dados de categoria.
     * @param pagina
     * @param tamanho
     */
    obterPaginaCategoria(pagina, tamanho) {
        return this._http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL}/categorias?_page=${pagina}&_limit=${tamanho}`, { observe: "response" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    /**
     * Obtem uma lista com todas as categorias.
     */
    obterListaCategoria() {
        return this._http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL}/categorias`, { observe: "response" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    /**
     * Persiste uma categoria no banco.
     * @param categoria
     */
    cadastrar(categoria) {
        return this._http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL}/categorias`, categoria, { observe: "response" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    /**
     * Atualiza os dados de uma categoria.
     * @param categoria
     */
    atualizar(categoria) {
        return this._http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL}/categorias/${categoria.id}`, categoria, { observe: "response" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    /**
     * Exclui uma categoria.
     * @param id
     */
    excluir(id) {
        return this._http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].BASE_URL}/categorias/${id}`, { observe: "response" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
}
CategoriaService.ɵfac = function CategoriaService_Factory(t) { return new (t || CategoriaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CategoriaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CategoriaService, factory: CategoriaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CategoriaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/validations/validations.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/validations/validations.ts ***!
  \***************************************************/
/*! exports provided: isSenhaValid, isNotNull */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSenhaValid", function() { return isSenhaValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNotNull", function() { return isNotNull; });
/**
 * Verifica se as senhas são iguais.
 */
const isSenhaValid = (formGroup) => {
    if (formGroup) {
        const senha = formGroup.get('senha').value;
        const reSenha = formGroup.get('reSenha').value;
        return senha === reSenha ? null : { senha: true };
    }
    return null;
};
/**
 * Verifica se o campo é nulo.
 */
const isNotNull = (form) => {
    if (form) {
        if (form.value && form.value.trim()) {
            return null;
        }
        return { notNull: true };
    }
    return null;
};


/***/ })

}]);
//# sourceMappingURL=common.js.map