import { Product } from './../product.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductRead2DataSource } from './product-read2-datasource';

@Component({
  selector: 'app-product-read2',
  templateUrl: './product-read2.component.html',
  styleUrls: ['./product-read2.component.css']
})
export class ProductRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /*usou um decorator @ViewChild (filho d minha tela), foi passado  tio de componente a ser selecionado
  (MatPaginator) ai ele percorre a página html e procura onde está esse componente, pega o primeiro 
  componente paginator e coloca dentro da variável paginator */
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Product>;
  dataSource: ProductRead2DataSource;
  //o dataSource foi criado no OnInit

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price'];
  //as tabelas que estão exibidas na tabela

  ngOnInit() {
    this.dataSource = new ProductRead2DataSource();
    //quando se cria um componente, é criado essa classe do dataSource
  }

  //depois que os componentes forem inicializados na tela, vai chamar essa função
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
