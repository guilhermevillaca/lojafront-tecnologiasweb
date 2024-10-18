import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { lastValueFrom } from 'rxjs';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit{

  cat$: any;

  constructor(
    private categoriaService: CategoriaService
  ){
  }

  ngOnInit(): void {
    this.getCategorias();
  }

  public async getCategorias(){
    this.cat$ = await lastValueFrom(this.categoriaService.getCategorias());
    
  }

}
