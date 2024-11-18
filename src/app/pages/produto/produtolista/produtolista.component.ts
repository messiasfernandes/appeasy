import { Component } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api/lazyloadevent';
import { Filtro } from 'src/app/model/filtro';

@Component({
  selector: 'app-produtolista',
  templateUrl: './produtolista.component.html',
  styleUrls: ['./produtolista.component.css']
})
export class ProdutolistaComponent {
  totalRegistros : Number = 0;
 produtofiltro= new  Filtro()
 produtos : any =[]=[]

 aoMudarPagina(event: LazyLoadEvent) {
  const pagina = event!.first! / event!.rows!;
 // this.buscar(pagina);
}
}
