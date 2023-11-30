import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product:  Product = { name: '', price: 0 };
  //isso serviu p quando clicar em alterar, o formulário já venha preenchido com as informações do produto

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')//na rota já consegue pegar os parâmetros na rota por meio de snapshot
    this.productService.readById(id).subscribe(product => {
      this.product = product;
    }); //isso serviu p quando clicar em alterar, o formulário já venha preenchido com as informações do produto
  }

  updateProduct(): void { //botão salvar
    //vai chamar o service para o service mandar uma requisição do tipo put pro backend
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(['/products']);
    });
  }

  cancel(): void { //botão cancelar
    this.router.navigate(['/products']);
  }
}


//o update vai ser acessado a partir da tabela, no botão de editar