import { AuthService } from './../../auth/auth.service';
import { AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { debounceTime, switchMap, map, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor(
    private _authService: AuthService
  ) { }

  /**
   * Verifica se o email já foi cadastrado no banco.
   */
  checarEmail(){
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap((email: string) =>  this._authService.verificarEmail(email)))
        .pipe(map(res => res.body.find(u => u.email == control.value) ? {emailCadastrado: true} : null))
        .pipe(first());
    }
  }

  /**
   * Verifica a senha com a do usuario logado.
   */
  checarSenha(){
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap((senha: string) =>  this._authService.verificarSenha(senha)))
        .pipe(map(res => res.body.find(u => u.senha == control.value) ? null : {senhaIncorreta: true}))
        .pipe(first());
    }
  }

}
