import { ProdutoService } from './../produtos.service';
import { Produto } from './../produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.Component.html',

})
export class ListaProdutoComponent implements OnInit {

  constructor(private ProdutoService: ProdutoService) { }
  
  public produtos: Produto[] = [];

  ngOnInit(): void {

    this.ProdutoService.obterProdutos()
    .subscribe(
      (      produtos: Produto[]) =>{
        this.produtos = produtos;
        console.log(produtos);
      
      },
      (      error: any) => console.log(error)

    );
  }

}
