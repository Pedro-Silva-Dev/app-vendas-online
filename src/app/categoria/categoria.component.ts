import { ToastrService } from 'ngx-toastr';
import { HttpResponse } from '@angular/common/http';
import { CategoriaService } from './categoria.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Categoria } from './models/categoria.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  pagina: number = 1;
  tamanho: number = 20;
  totalItems:number = 0;

  categorias: Categoria[];
  categoria: Categoria;
  modalRef: BsModalRef;

  constructor(
    private _categoriaService: CategoriaService,
    private _modalService: BsModalService,
    private _toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.obterPaginaCategoria(this.pagina);
  }

  /**
   * Obtem uma pagina com os dados de categoria.
   */
  obterPaginaCategoria(pagina: number){
    this._categoriaService.obterPaginaCategoria(pagina, this.tamanho).subscribe(
      (res: HttpResponse<Categoria[]>) => {
        if(res.status == 200){
          this.categorias = res.body;
          this.totalItems = Number.parseInt(res.headers.get('X-Total-Count'));
        }
      });
  }

  /**
   * Exibe o modal responsavel por cadastrar ou atualizar a categoria.
   * @param template
   * @param categoria
   */
  exibirCategoriaForm(template: TemplateRef<any>, categoria?: Categoria){
    this.categoria = new Categoria();
    if(categoria){
      this.categoria = categoria;
    }
    this.modalRef = this._modalService.show(template, {ignoreBackdropClick: true, class: 'modal-md'});
  }

  /**
   * Fecha o modal de cadastro ou atualização.
   */
  fechar(){
    this.modalRef.hide();
  }

  /**
   * Exclui uma categoria.
   */
  excluir(id: number){
    this._categoriaService.excluir(id).subscribe(
      (res: HttpResponse<void>) => {
        if(res.status == 200){
          this._toastrService.success(`Categoria excluida com sucesso!`);
          this.categorias = this.categorias.filter(c => c.id != id);
        }else{
          this._toastrService.warning(`Ocorreu um erro ao tentar excluir a categoria, por favor tente novamente.`);
        }
      }, err => {
        this._toastrService.error(`Ocorreu um erro ao tentar excluir a categoria, por favor entre em contato com o suporte.`);
      });
  }

}
