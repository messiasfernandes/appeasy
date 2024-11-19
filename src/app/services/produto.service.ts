import { Observable } from 'rxjs';
import { Filtro } from '../model/filtro';
import { Produto } from '../model/produto';
import { ServicePai } from './servicepai';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { config } from '../config/ini';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService implements ServicePai<Produto>{

  constructor(private http: HttpClient) { }
  pesquisar(filtro: Filtro): Observable<any> {
    console.log(filtro.parametro);
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    let params = new HttpParams()
      .set('page', filtro.pagina.toString())
      .set('size', filtro.itensPorPagina.toString());

    if (filtro.parametro) {
      console.log(filtro.parametro);
      params = params.set('parametro', filtro.parametro);
    }
    const response = this.http.get<any>(`${config.baseurl}produtos`, {
      headers,
      params,
    });

    return response;
  }
  salvar(objeto: Produto): Observable<Produto> {
    throw new Error('Method not implemented.');
  }
}
