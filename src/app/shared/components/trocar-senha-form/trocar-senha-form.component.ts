import { ToastrService } from 'ngx-toastr';
import { HttpResponse } from '@angular/common/http';
import { ValidatorService } from './../../validations/validator.service';
import { isSenhaValid } from './../../validations/validations';
import { AuthService } from './../../../auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-trocar-senha-form',
  templateUrl: './trocar-senha-form.component.html',
  styleUrls: ['./trocar-senha-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrocarSenhaFormComponent implements OnInit {

  @Output() eventFechar: EventEmitter<boolean> = new EventEmitter<boolean>();

  alterarSenhaForm: FormGroup;
  processando: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _validatorService: ValidatorService,
    private _toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.criarAlterarSenhaForm();
  }

  /**
   * Responsavel por criar o formulario para alterar a senha.
   */
  criarAlterarSenhaForm(){
    this.alterarSenhaForm = this._formBuilder.group({
      senhaAtual: ['', [Validators.required], [this._validatorService.checarSenha()]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      reSenha: ['', [Validators.required, Validators.minLength(6)]]
    }, {validator: isSenhaValid});
  }

  /**
   * Altera a senha do usuario logado.
   */
  alterarSenha(){
    if(this.alterarSenhaForm.valid){
      this.processando = true;
      this._authService.alterarSenha(this.alterarSenhaForm.value.senha).subscribe(
        (res: HttpResponse<User>) => {
          if(res.status == 200){
            this._toastrService.success(`Senha alterada com sucesso!`);
            this.eventFechar.emit(true);
          }else{
            this.processando = false;
            this._toastrService.warning(`Ocorreu um erro ao tentar obter a confirmação da alteração da senha, por favor tente novamente.`);
          }
        }, err => {
          this._toastrService.error(`Ocorreu um erro ao tentar altera a senha, por favor contate o suporte.`);
          this.processando = false;
        })
    }
  }

  /**
   * Emite o evento para fechar o modal.
   */
  fechar(){
    this.eventFechar.emit(true);
  }

  /**
   * Verifica se o campo está valido.
   * @param campo
   */
  validarCampo(campo: string):boolean{
    return this.alterarSenhaForm.get(campo).invalid && this.alterarSenhaForm.get(campo).touched;
  }

  /**
   * Verifica se as senhas foram alteradas e se estão validas.
   */
  validarCampoSenha():boolean{
    return (this.alterarSenhaForm.hasError('senha') && this.alterarSenhaForm.get('reSenha').touched && this.alterarSenhaForm.get('senha').touched) ? false : true;
  }

  /**
   * Verifica se o campo foi alterado e está valido.
   * @param campo
   */
  campoCorreto(campo: string): boolean{
    return this.alterarSenhaForm.get(campo).valid && this.alterarSenhaForm.get(campo).touched;
  }

}
