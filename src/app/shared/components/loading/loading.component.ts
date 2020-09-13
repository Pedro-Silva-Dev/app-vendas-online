import { SpinnerService } from './../../services/spinner.service';
import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent implements OnInit, OnDestroy {

  ativarSpinner: boolean = false;
  eventUnsubscribe: Unsubscribable;

  constructor(
    private _spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.obterSpinnerEvent();
  }

  ngOnDestroy(): void {
    //Faz o unsubscribe do evento quando o componente é destruido.
    this.eventUnsubscribe.unsubscribe();
  }

  /**
   * Ativa o evento para ativar o spinner de loading.
   */
  obterSpinnerEvent(){
    this.eventUnsubscribe = this._spinnerService.getSpinner().subscribe(
      (res: boolean) => {
        this.ativarSpinner = res;
      });
  }

}
