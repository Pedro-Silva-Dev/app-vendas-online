import { take } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Produto } from './models/produto.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private _http: HttpClient
  ) { }

  /**
   * Obtem uma pagina de produtos de acordo com os parametros.
   * @param pagina
   * @param tamanho
   * @param nome
   * @param valorMin
   * @param valorMax
   * @param categoria
   */
  obterPaginaProduto(pagina: number, tamanho: number, nome: string, valorMin: number, valorMax: number, categoria: string): Observable<HttpResponse<Produto[]>>{
    return this._http.get<Produto[]>(`${environment.BASE_URL}/produtos?_expand=categoria&_page=${pagina}&_limit=${tamanho}${nome ? `&nome_like=${nome}` : ''}${valorMin ? `&valor_gte=${valorMin}` : ''}${valorMax ? `&valor_lte=${valorMax}` : ''}${categoria ? `&categoriaId=${categoria}` : ''}`, {observe: "response"}).pipe(take(1));
  }

  /**
   * Obtem uma lista com todos os produtos.
   */
  obterListaProduto(): Observable<HttpResponse<Produto[]>>{
    return this._http.get<Produto[]>(`${environment.BASE_URL}/produtos`, {observe: "response"}).pipe(take(1));
  }

  /**
   * Persistem um produto no banco.
   * @param produto
   */
  cadastrar(produto: Produto): Observable<HttpResponse<Produto>>{
    return this._http.post<Produto>(`${environment.BASE_URL}/produtos`, produto, {observe: "response"}).pipe(take(1));
  }

  /**
   * Atualiza os dados de um produto.
   * @param produto
   */
  atualizar(produto: Produto): Observable<HttpResponse<Produto>>{
    return this._http.put<Produto>(`${environment.BASE_URL}/produtos/${produto.id}`, produto, {observe: "response"}).pipe(take(1));
  }

  /**
   * Exclui um produto do banco.
   * @param id
   */
  excluir(id: number): Observable<HttpResponse<void>>{
    return this._http.delete<void>(`${environment.BASE_URL}/produtos/${id}`, {observe: "response"}).pipe(take(1));
  }

}
