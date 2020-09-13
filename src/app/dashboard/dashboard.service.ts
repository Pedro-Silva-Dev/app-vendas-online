import { HistoricoVenda } from './models/historico-venda.model';
import { HistoricoAno } from './models/historico-ano.model';
import { HistoricoMensal } from './models/historico-bebida.model';
import { Aderencia } from './models/aderencia.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private _http: HttpClient
  ) { }

  /**
   * Obter a aderencia das vendas.
   */
  obterAderencias():Observable<HttpResponse<Aderencia[]>>{
    return this._http.get<Aderencia[]>(`${environment.BASE_URL}/aderencias`, {observe: "response"}).pipe(take(1));
  }

  /**
   * Obtem o historico de vendas dos ultimos meses.
   */
  obterHistoricoMensal():Observable<HttpResponse<HistoricoMensal[]>>{
    return this._http.get<HistoricoMensal[]>(`${environment.BASE_URL}/historico-vendas-bebidas`, {observe: "response"}).pipe(take(1)).pipe(tap(historico => historico.body.sort((a,b) => a.id < b.id ? 1 : -1)));
  }

  /**
   * Obtem o historico dos ultimos anos.
   */
  obterHistoricoAno(): Observable<HttpResponse<HistoricoAno[]>>{
    return this._http.get<HistoricoAno[]>(`${environment.BASE_URL}/historico-vendas-ano`, {observe: "response"}).pipe(take(1)).pipe(tap(ano => ano.body.sort((a,b) => a.id < b.id ? 1 : -1)));
  }

  /**
   * Obtem o historico de vendas dos produtos.
   */
  obterHistoricoVendas(): Observable<HttpResponse<HistoricoVenda[]>>{
    return this._http.get<HistoricoVenda[]>(`${environment.BASE_URL}/historico`, {observe: "response"}).pipe(take(1));
  }

}
