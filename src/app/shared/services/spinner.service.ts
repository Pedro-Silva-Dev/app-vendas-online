import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private _spinnerEvent: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  /**
   * Retorna o evento para ativar o spinner.
   */
  getSpinner(): Subject<boolean>{
    return this._spinnerEvent;
  }

  /**
   * Emite um valor para o evento do spinner.
   * @param valor
   */
  setSpinner(valor: boolean){
    this._spinnerEvent.next(valor);
  }

}
