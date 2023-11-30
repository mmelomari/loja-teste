import { Product } from '../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action'] //criou a tabela

  constructor(private ProductService: ProductService) { }

  /*Na inicialização desse componente ele vai chamar nosso produtoService, vai obter os prod, vai al a variável, q pertece ao compo, e vai ser logado no console p ver se ta funcionando */
  ngOnInit(): void {
    this.ProductService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

}
