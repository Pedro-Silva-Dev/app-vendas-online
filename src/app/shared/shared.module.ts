import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxMaskModule } from 'ngx-mask';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { LoadingComponent } from './components/loading/loading.component';
import { TrocarSenhaFormComponent } from './components/trocar-senha-form/trocar-senha-form.component';


@NgModule({
  declarations: [
  SpinnerComponent,
  NavbarComponent,
  SidebarComponent,
  LoadingComponent,
  TrocarSenhaFormComponent,
],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    NgxMaskModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot()
  ],
  exports: [
  SweetAlert2Module,
  BsDropdownModule,
  TooltipModule,
  ModalModule,
  PaginationModule,
  NgxMaskModule,
  SpinnerComponent,
  NavbarComponent,
  SidebarComponent,
  LoadingComponent,
  TrocarSenhaFormComponent,
]
})
export class SharedModule { }
