import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { Produto } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private http: HttpClient;

  constructor(handler: HttpBackend) { 
    this.http = new HttpClient(handler);
  }

  public getProdutos(){
    return this.http.get('http://localhost:8080/produto/listar').pipe(map(response=>response));
  }
}
