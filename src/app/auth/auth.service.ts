import { User } from './models/user.model';
import { take, switchMap } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { LoginModel } from './models/login.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _key = 'user';

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }


  /**
   * Executa o login.
   * @param login
   */
  efetuarLogin(login: LoginModel):Observable<HttpResponse<User[]>>{
    return this._http.get<User[]>(`${environment.BASE_URL}/users?email=${login.email}&senha=${login.senha}`, {observe: "response"}).pipe(take(1));
  }

  /**
   * Salva os dados do usuario no storage.
   * @param user
   */
  salvarUser(user: User){
    sessionStorage.setItem(this._key, JSON.stringify(user));
  }

  /**
   * Verifica se o usuario está logado, ou seja se ele possui um storage com a chave user.
   */
  obterUser(): User{
    let user = sessionStorage.getItem(this._key);
    if(user){
      return JSON.parse(user);
    }
    return null;
  }

  /**
   * Desloga o usuario e destroi o storage do user.
   */
  efetuarSaida(){
    sessionStorage.removeItem(this._key);
    this._router.navigate([`/`]);
  }

  /**
   * Verifica se o email já possui cadastro.
   * @param email
   */
  verificarEmail(email: string): Observable<HttpResponse<User[]>>{
    return this._http.get<User[]>(`${environment.BASE_URL}/users?email=${email}`, {observe: "response"}).pipe(take(1));
  }

  verificarSenha(senha: string): Observable<HttpResponse<User[]>>{
    let user = this.obterUser();
    return this._http.get<User[]>(`${environment.BASE_URL}/users?id=${user.id}&senha=${senha}`, {observe: "response"}).pipe(take(1));
  }

  /**
   * Persiste um usuario no banco.
   * @param user
   */
  cadastrarUsuario(user: User):Observable<HttpResponse<User>>{
    return this._http.post<User>(`${environment.BASE_URL}/users`, user, {observe: "response"}).pipe(take(1));
  }

  alterarSenha(senha: string): Observable<HttpResponse<User>>{
    let user: User = this.obterUser();
    let newUser: User = new User({id: user.id, nome: user.nome, email: user.email, senha: senha});
    return this._http.put<User>(`${environment.BASE_URL}/users/${user.id}`, newUser, {observe: "response"}).pipe(take(1));
  }

}
