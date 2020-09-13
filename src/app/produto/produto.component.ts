import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriaService } from './../categoria/categoria.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Produto } from './models/produto.model';
import { HttpResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { ProdutoService } from './produto.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Categoria } from '../categoria/models/categoria.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  //Config paginação.
  pagina: number = 1;
  tamanho: number = 12;
  totalItems: number = 0;
  //Config produtos.
  produtos: Produto[];
  produto: Produto;
  modalRef: BsModalRef;
  categorias: Categoria[];
  filtroForm: FormGroup;

  constructor(
    private _produtoService: ProdutoService,
    private _categoriaService: CategoriaService,
    private _toastrService: ToastrService,
    private _modalService: BsModalService,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.criarFiltroForm();
    this.obterListaCategoria();
    this.obterPaginaProduto(this.pagina);
  }

  /**
   * Responsavel por criar o formulario de filtro.
   */
  criarFiltroForm(){
    this.filtroForm = this._formBuilder.group({
      nome: [null],
      valorMin: [null],
      valorMax: [null],
      categoria: [null]
    });
  }

  /**
   * Filtra os produtos de acordo com os parametros do formulario.
   */
  filtrar(){
    this.pagina = 0;
    this.obterPaginaProduto(this.pagina);
  }

  /**
   * Obtem uma pagina de produtos de acordo com a filtragem.
   * @param pagina
   */
  obterPaginaProduto(pagina: number){
    let form = this.filtroForm.value;
    this._produtoService.obterPaginaProduto(pagina, this.tamanho, form.nome, form.valorMin, form.valorMax, form.categoria).subscribe(
      (res: HttpResponse<Produto[]>) => {
        if(res.status == 200){
          this.produtos = res.body;
          this.totalItems = Number.parseInt(res.headers.get('X-Total-Count'));
        }
      }, err => this._toastrService.error(`Ocorreu um erro ao carregar os produtos, por favor entre em contato com o suporte.`));
  }

  /**
   *Exibi o modal para castrar ou atualizar um produto.
   * @param template
   * @param produto
   */
  exibirProdutoForm(template: TemplateRef<any>, produto?: Produto){
    this.produto = new Produto();
    if(produto){
      this.produto = produto;
    }
    this.modalRef = this._modalService.show(template, {ignoreBackdropClick: true, class: "modal-md"});
  }

  /**
   * Exclui um produto.
   * @param id
   */
  excluir(id: number){
    this._produtoService.excluir(id).subscribe(
      (res: HttpResponse<void>) => {
        if(res.status == 200){
          this._toastrService.success(`Produto excluido com sucesso!`);
          this.produtos = this.produtos.filter(p => p.id != id);
        }
      }, err => this._toastrService.error(`Ocorreu um erro ao tentar excluir, por favor contate o suporte.`));
  }

  /**
   * Fecha o modal de cadastro ou atualização.
   */
  fecharModal(){
    this.modalRef.hide();
  }

  /**
   * Obtem uma lista com todas as categorias.
   */
  obterListaCategoria(){
    this._categoriaService.obterListaCategoria().subscribe(
      (res: HttpResponse<Categoria[]>) => {
        if(res.status == 200){
          this.categorias = res.body;
        }
      }, err => this._toastrService.error(`Ocorreu um erro ao carregar as categorias, por favor contate o surpote.`));
  }

  /**
   * Reseta todos os campos do formulario e obtem uma nova pagina.
   */
  limparFiltros(){
    this.filtroForm.reset();
    this.filtroForm.get('categoria').setValue(null);
    this.pagina = 0;
    this.obterPaginaProduto(this.pagina);
  }

  /**
   * Verifica se deve exibir o botão de limpar os filtros.
   */
  exibirLimparFiltro(): boolean{
    return this.filtroForm.get('nome').value || this.filtroForm.get('valorMin').value || this.filtroForm.get('valorMax').value || this.filtroForm.get('categoria').value;
  }

}
