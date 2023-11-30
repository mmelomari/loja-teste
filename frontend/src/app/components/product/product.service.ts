import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product.model';
import { EMPTY, Observable } from 'rxjs';
//snack bar é uma mensagem que aparece e sai
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    //o 'X' é um action, serve para fechar a msg e dentro de {} são configurações
    this.snackBar.open(msg, 'X', {
      duration: 3000, //duração da msg
      horizontalPosition: "right", //aparece do lado direito
      verticalPosition: "top", //aparece em cima
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  //função responsável por inserir um produto no backend
  create(product: Product): Observable<Product> { //- Esse posta retorna um observable
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  // ta retornando um observable de produto
  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );//ta fazendo a leitura do produto
  }

  //função p receber o médtodo attualizado
  update(product: Product): Observable<Product> { //passou o produto como parâmetro
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    ); //pediu p retornar o produto atualizado do backend
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {//função p tratar o erro
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
