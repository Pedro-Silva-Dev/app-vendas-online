import { HttpResponse } from '@angular/common/http';
import { AuthService } from './../auth.service';
import { ValidatorService } from './../../shared/validations/validator.service';
import { isSenhaValid, isNotNull } from './../../shared/validations/validations';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cadastrarForm: FormGroup;
  processoDeCadastrar: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _validatorService: ValidatorService,
    private _authService: AuthService,
    private _toastrService: ToastrService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.criarCadastrarForm();
  }

  /**
   * Cria o formulario responsavel por cadastrar um novo usuario.
   */
  criarCadastrarForm(){
    this.cadastrarForm = this._formBuilder.group({
      id: [null],
      nome: ['', [Validators.required, isNotNull]],
      email: ['', [Validators.required, Validators.email], [this._validatorService.checarEmail()]],
      senha: ['', [Validators.required, Validators.minLength(6), isNotNull]],
      reSenha: ['', [Validators.required, Validators.minLength(6), isNotNull]]
    }, {validator: isSenhaValid})
  }

  /**
   * Verifica se o formulario está valido e executa a chamada de cadastro de usuarios.
   */
  cadastrar(){
    if(!this.cadastrarForm.invalid){
      this.processoDeCadastrar = true;
      let usuario: User = new User(this.cadastrarForm.value)
      this._authService.cadastrarUsuario(usuario).subscribe(
        (res: HttpResponse<User>) => {
          if(res.status == 201){
            this._authService.salvarUser(res.body);
            this._toastrService.success(`Bem vindo a plataforma!`);
            this._router.navigate([`/dashboard`]);
          }else{
            this._toastrService.warning(`Ocorreu um erro no processo de cadastro, por favor tente novamente.`);
          }
          this.processoDeCadastrar = false;
        }, err => {
          this.processoDeCadastrar = false;
          this._toastrService.error(`Ocorreu um erro ao tentar cadastrar o usuário, por favor contate o suporte.`)
        })
    }
  }

  /**
   * Verifica se o campo foi alterado e se está invalido.
   * @param campo
   */
  validarCampo(campo: string): boolean{
    return !this.cadastrarForm.get(campo).valid && this.cadastrarForm.get(campo).touched;
  }

  /**
   * Verifica se o campo foi alterado e está valido.
   * @param campo
   */
  campoCorreto(campo: string): boolean{
    return this.cadastrarForm.get(campo).valid && this.cadastrarForm.get(campo).touched;
  }

  /**
   * Verifica se as senhas foram alteradas e se estão validas.
   */
  validarCampoSenha():boolean{
    return (this.cadastrarForm.hasError('senha') && this.cadastrarForm.get('reSenha').touched && this.cadastrarForm.get('senha').touched) ? false : true;
  }


}
