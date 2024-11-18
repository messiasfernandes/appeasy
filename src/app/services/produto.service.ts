import { Observable } from 'rxjs';
import { Filtro } from '../model/filtro';
import { Produto } from '../model/produto';
import { ServicePai } from './servicepai';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService implements ServicePai<Produto>{

  constructor() { }
  pesquisar(filtro: Filtro): Observable<any> {
    throw new Error('Method not implemented.');
  }
  salvar(objeto: Produto): Observable<Produto> {
    throw new Error('Method not implemented.');
  }
}
