import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private http: HttpClient;

  constructor(
    handler: HttpBackend
  ) { 
    this.http = new HttpClient(handler);
  }

  public getCategorias(){
    return this.http.get('http://localhost:8080/categoria/listar')
          .pipe(map(response=>response));
  }
}
