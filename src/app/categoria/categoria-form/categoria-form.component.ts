import { isNotNull } from './../../shared/validations/validations';
import { ToastrService } from 'ngx-toastr';
import { HttpResponse } from '@angular/common/http';
import { CategoriaService } from './../categoria.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from '../models/categoria.model';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  @Input() categoria: Categoria;

  @Output() eventFechar: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() eventReload: EventEmitter<Categoria> = new EventEmitter<Categoria>();

  categoriaForm: FormGroup;
  processando: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _categoriaService: CategoriaService,
    private _toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.criarCategoriaForm();
  }

  /**
   * Responsavel por criar o formulario para cadastrar ou atualizar uma categoria.
   */
  criarCategoriaForm(){
    this.categoriaForm = this._formBuilder.group({
      id: [this.categoria.id],
      nome: [this.categoria.nome, [Validators.required, isNotNull]]
    });
  }

  /**
   * Fecha o modal de cadastro ou atualização de categoria.
   */
  fechar(){
    this.eventFechar.emit(true);
  }

  /**
   * Executa o metodo de atualizar caso a categoria ja exista, caso contrario executa o de cadastro.
   */
  salvar(){
    if(this.categoriaForm.valid){
      this.processando = true;
      if(this.categoria.id){
        this.atualizar();
      }else{
        this.cadastrar();
      }
    }
  }

  /**
   * Atualiza os dados de uma categoria existente.
   */
  atualizar(){
    this._categoriaService.atualizar(this.categoriaForm.value).subscribe(
      (res: HttpResponse<Categoria>) =>{
        if(res.status == 200){
         if(res.body.id){
          this._toastrService.success(`Categoria atualizada com sucesso!`);
          this.eventReload.emit(res.body);
          this.eventFechar.emit(true);
         }else{
          this._toastrService.warning(`Ocorreu um erro ao tentar obter os resultados da atualização, por favor tente novamente.`);
          this.processando = false;
         }
        }else{
          this._toastrService.warning(`Ocorreu um erro na tentativa de atualização, por favor tente novamente.`);
          this.processando = false;
        }
      }, err => {
        this._toastrService.error(`Ocorreu um erro no processo de atualização, por favor contate o suporte.`);
        this.processando = false;
      });
  }

  /**
   * Cadastra uma nova categoria.
   */
  cadastrar(){
    this._categoriaService.cadastrar(this.categoriaForm.value).subscribe(
      (res: HttpResponse<Categoria>) =>{
        if(res.status == 201){
          if(res.body.id){
            this._toastrService.success(`Categoria cadastrada com sucesso!`);
            this.eventReload.emit(res.body);
            this.eventFechar.emit(true);
          }else{
            this._toastrService.warning(`Ocorreu um erro ao tentar obter os resultados do cadastro, por favor tente novamente.`);
            this.processando = false;
          }
        }else{
          this._toastrService.warning(`Ocorreu um erro na tentativa de cadastro, por favor tente novamente.`);
          this.processando = false;
        }
      }, err => {
        this._toastrService.error(`Ocorreu um erro no processo de cadastro, por favor contate o suporte.`);
        this.processando = false;
      });
  }

  /**
   * Verifica se o campo foi alterado e se está valido.
   * @param campo
   */
  validarCampo(campo: string): boolean{
    return this.categoriaForm.get(campo).invalid && this.categoriaForm.touched;
  }


}
