import { tap, finalize } from 'rxjs/operators';
import { SpinnerService } from './../services/spinner.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private _spinnerService: SpinnerService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this._spinnerService.setSpinner(true);
    return next.handle(request).pipe(finalize(() => this._spinnerService.setSpinner(false)));
  }
}
