import { take } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Categoria } from './models/categoria.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private _http: HttpClient
  ) { }

  /**
   * Obtem uma pagina com os dados de categoria.
   * @param pagina
   * @param tamanho
   */
  obterPaginaCategoria(pagina: number, tamanho: number): Observable<HttpResponse<Categoria[]>>{
    return this._http.get<Categoria[]>(`${environment.BASE_URL}/categorias?_page=${pagina}&_limit=${tamanho}`, {observe: "response"}).pipe(take(1));
  }

  /**
   * Obtem uma lista com todas as categorias.
   */
  obterListaCategoria(): Observable<HttpResponse<Categoria[]>>{
    return this._http.get<Categoria[]>(`${environment.BASE_URL}/categorias`, {observe: "response"}).pipe(take(1));
  }

  /**
   * Persiste uma categoria no banco.
   * @param categoria
   */
  cadastrar(categoria: Categoria): Observable<HttpResponse<Categoria>>{
    return this._http.post<Categoria>(`${environment.BASE_URL}/categorias`, categoria, {observe: "response"}).pipe(take(1));
  }

  /**
   * Atualiza os dados de uma categoria.
   * @param categoria
   */
  atualizar(categoria: Categoria): Observable<HttpResponse<Categoria>>{
    return this._http.put<Categoria>(`${environment.BASE_URL}/categorias/${categoria.id}`, categoria, {observe: "response"}).pipe(take(1));
  }

  /**
   * Exclui uma categoria.
   * @param id
   */
  excluir(id: number): Observable<HttpResponse<void>>{
    return this._http.delete<void>(`${environment.BASE_URL}/categorias/${id}`, {observe: "response"}).pipe(take(1));
  }

}
