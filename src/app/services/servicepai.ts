import { Observable } from "rxjs/internal/Observable";
import { Filtro } from "../model/filtro";

export interface ServicePai <T> {
  pesquisar(filtro: Filtro): Observable<any>;
  salvar(objeto: T): Observable<T> ;
}
