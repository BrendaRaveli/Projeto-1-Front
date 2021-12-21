import { Injectable } from '@angular/core';
import { HtttpClient } from '@angular/common/http";
import { Observable } from 'Nova pasta/Projeto-1-Front/node_modules/rxjs/dist/types';
import { Produto } from './produto';


@Injectable()
export class ProdutosService{

constructor(private http: HttpClient) { }
    protected UrlServiceV1: string = "http://localhost:3000/";

    obterProdutos(): Observable<Produto[]> {
        return this.http
        .get<Produto[]>(this.UrlServiceV1 + "produtos")
    }

}