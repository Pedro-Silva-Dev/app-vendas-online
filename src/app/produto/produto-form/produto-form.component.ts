import { ToastrService } from 'ngx-toastr';
import { HttpResponse } from '@angular/common/http';
import { isNotNull } from './../../shared/validations/validations';
import { Produto } from './../models/produto.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from './../produto.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from 'src/app/categoria/models/categoria.model';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  @Input() produto: Produto;
  @Input() categorias: Categoria[] = [];
  @Output() eventFechar: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() eventReload: EventEmitter<Produto> = new EventEmitter<Produto>();

  produtoForm: FormGroup;
  processando: boolean;

  constructor(
    private _produtoService: ProdutoService,
    private _formBuilder: FormBuilder,
    private _toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.criarProdutoForm();
  }

  /**
   * Responsavel por criar o formulario para cadastrar ou atualizar um produto.
   */
  criarProdutoForm(){
    this.produtoForm = this._formBuilder.group({
      id: [this.produto.id],
      nome: [this.produto.nome, [Validators.required, isNotNull]],
      valor: [this.produto.valor, [Validators.required]],
      categoriaId: [this.produto.categoriaId, [Validators.required, isNotNull]]
    });
  }

  /**
   * Executa o metodo de atualizar caso o produto ja exista, caso contrario executa o de cadastro.
   */
  salvar(){
    console.log(this.produtoForm.value.categoriaId);

    if(this.produtoForm.valid){
      this.processando = true;
      if(this.produto.id){
        this.atualizar();
      }else{
        this.cadastrar();
      }
    }
  }

  /**
   * Emite o evento para fechar o modal.
   */
  fechar(){
    this.eventFechar.emit(true);
  }

  /**
   * Atualiza um produto.
   */
  atualizar(){
    this._produtoService.atualizar(this.produtoForm.value).subscribe(
      (res: HttpResponse<Produto>) => {
        if(res.status == 200){
          if(res.body.id){
            this._toastrService.success(`Produto atualizado com sucesso!`);
            this.eventReload.emit(res.body);
            this.eventFechar.emit(true);
          }else{
            this._toastrService.warning(`Ocorreu um erro ao tentar obter os resultados da atualização, por favor tente novamente.`);
            this.processando = false;
          }
        }else{
          this._toastrService.warning(`Ocorreu um erro na resposta da atualização, por favor tente novamente.`);
          this.processando = false;
        }
      }, err => {
        this._toastrService.error(`Ocorreu um erro no processo de atualização, por favor contate o suporte.`);
        this.processando = false;
      });
  }

  /**
   * Cadastra um produto.
   */
  cadastrar(){
    this._produtoService.cadastrar(this.produtoForm.value).subscribe(
      (res: HttpResponse<Produto>) => {
        if(res.status == 201){
          if(res.body.id){
            this._toastrService.success(`Produto cadastrado com sucesso!`);
            this.eventReload.emit(res.body);
            this.eventFechar.emit(true);
          }else{
            this._toastrService.warning(`Ocorreu um erro ao tentar obter os resultados do cadastro, por favor tente novamente.`);
            this.processando = false;
          }
        }else{
          this._toastrService.warning(`Ocorreu um erro na resposta do cadastro, por favor tente novamente.`);
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
    return this.produtoForm.get(campo).invalid && this.produtoForm.get(campo).touched;
  }

}
