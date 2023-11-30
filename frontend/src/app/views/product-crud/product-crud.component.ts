import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';
/*Importou o Router para poder definir o tipo do elemento qu eu quero que ele importe para dentro
do meu componente */

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  //a rota vai ser recebida no constructor, pois vai ser injetada pelo angular
  /*Quando o angular percebe que dentro do construtor do componente, eu declarei que vou precisar 
  do atributo Router,ele vai ser capaz de me fornecer um Router, sem necessáriamente eu precisar 
  instaciar um router, pq quem é responsável por criar esses componentes, instanciar essa classe,
  é o angular. 
  O angular vai criar esse componente quando eu referenciar a tag 'app-product-crud' 
  dentro do meu componente. Quando passar a tag, ele vai instanciar esse elemento, passar o router
  para o construtor, e eu vou poder usar o Router dentro do método para navegar para product create*/
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
   }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
    //quando clicarno botão, vai navegar p essa tela
  }
}
