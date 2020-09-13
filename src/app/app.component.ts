import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sana Variedades';

  constructor(
    private _authService: AuthService
  ){}

  /**
   * Verifica se o usuario está logado.
   */
  usuarioLogado(): boolean{
    return this._authService.obterUser() ? true : false;
  }

}
