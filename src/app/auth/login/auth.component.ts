import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  loginForm: FormGroup;
  processoDeLogin: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _toastrService: ToastrService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.criarLoginForm();
  }

  /**
   * Responsavel por criar o formulario para efetuar o login.
   */
  criarLoginForm(){
    this.loginForm = this._formBuilder.group({
      email: [``, [Validators.required, Validators.email]],
      senha: [``, [Validators.required]]
    })
  }

  /**
   * Verifica se o formulario está valido e executa o processo de login.
   */
  efetuarLogin(){
   if(this.loginForm.valid){
     this.processoDeLogin = true;
    this._authService.efetuarLogin(this.loginForm.value).subscribe(
      (res: HttpResponse<User[]>) => {
        if(res.status == 200){
          let user: User = res.body.find(r => r.email == this.loginForm.value.email);
          if(user){
            this._authService.salvarUser(user);
            this._router.navigate(["/dashboard"]);
          }else{
            this._toastrService.warning(`Email ou senha inválidos.`);
          }
        }
        this.processoDeLogin = false;
      }, err => {
        this._toastrService.error(`Ocorreu um erro ao tentar entrar no sistema, por favor contate o suporte.`);
        this.processoDeLogin = false;
      });
   }
  }

  /**
   * Verifica se o campo foi alterado e valido.
   * @param campo
   */
  validarCampo(campo: string): boolean{
    return this.loginForm.get(campo).invalid && this.loginForm.get(campo).touched;
  }



}
