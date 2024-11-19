import { Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Filtro } from 'src/app/model/filtro';
import { ErroService } from 'src/app/services/erro.service';
import { FormdialogService } from 'src/app/services/formdialog.service';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produtolista',
  templateUrl: './produtolista.component.html',
  styleUrls: ['./produtolista.component.css']
})
export class ProdutolistaComponent {


  totalRegistros  = 0;
 produtofiltro= new  Filtro()
 produtos : any =[]=[]
 constructor(private produtoService : ProdutoService, private erroService : ErroService ,
  private formDialogService:  FormdialogService){

}
buscar(pagina: number= 0):void{
  this.produtofiltro.pagina = pagina;
  this.produtoService
    .pesquisar(this.produtofiltro)
    .pipe(
      catchError((erro: any) => {
        return throwError(() => this.erroService.erroHandler(erro));
      })
    )
    .subscribe((dados: any) => {
      console.log(dados.content);
      console.log(dados.totalPages)
      this.produtos = dados.content;
      this.totalRegistros = dados.totalElements;
      console.log(this.produtos)
    });
    console.log(this.produtos)
 }
 aoMudarPagina(event: LazyLoadEvent) {
  const pagina = event!.first! / event!.rows!;
  this.buscar(pagina);
}

async showEntradaMoviemtno(produto : any) {
  try {
    await this.formDialogService.showdialogaddMovimentacoes(produto);
console.log("pasou")
    // Agora você pode usar o subgrupoSelecionado como necessário.
  } catch (error) {
    console.log('Operação cancelada ou ocorreu um erro.');
    this.buscar();
  }

}
}
