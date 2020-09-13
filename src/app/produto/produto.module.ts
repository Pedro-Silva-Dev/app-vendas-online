import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { CurrencyMaskModule } from "ng2-currency-mask";

@NgModule({
  declarations: [
    ProdutoComponent,
    ProdutoFormComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    CurrencyMaskModule
  ]
})
export class ProdutoModule { }
