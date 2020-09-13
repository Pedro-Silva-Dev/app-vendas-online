import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit, ChangeDetectionStrategy, TemplateRef } from '@angular/core';

import { User } from 'src/app/auth/models/user.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  user: User;
  modalRef: BsModalRef;

  constructor(
    private _authService: AuthService,
    private _modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.obterUsuario();
  }

  /**
   * Obtem os dados do usuario logado.
   */
  obterUsuario(){
    this.user = this._authService.obterUser();
  }

  /**
   * Desloga o usuario.
   */
  sair(){
    this._authService.efetuarSaida();
  }

  /**
   * Exibir o modal para alterar senha.
   * @param template
   */
  exibirModalAlterarSenha(template: TemplateRef<any>){
    this.modalRef = this._modalService.show(template, {class: 'modal-md', ignoreBackdropClick: true});
  }

  /**
   * Fechar o modal de alterar senha.
   */
  fecharModal(){
    this.modalRef.hide();
  }

}
