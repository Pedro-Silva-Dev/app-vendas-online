import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit {

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  /**
   * Desloga o usuario.
   */
  sair(){
    this._authService.efetuarSaida();
  }

}
