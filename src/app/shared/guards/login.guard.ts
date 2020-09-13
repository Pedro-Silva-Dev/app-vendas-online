import { AuthService } from './../../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private _router: Router,
    private _authService: AuthService
  ){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let user: User = this._authService.obterUser();

    if(user){
      this._router.navigate(['/dashboard']);
      return true;
    }

    return true;
  }

}
