import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { lastValueFrom } from 'rxjs';
import { log } from 'console';
import { NgFor } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [NgFor,
    RouterModule
  ],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent implements OnInit{
  cat$: any;

  constructor(private categoriaService: CategoriaService){

  }
  ngOnInit(): void {
    this.getCategoria();
  }

  public async getCategoria(){
    this.cat$ = await lastValueFrom(this.categoriaService.getCategorias());
    //console.log(this.cat$);
  }


  public editar(id: number){
    console.log(id);
  }

  public remover(id: number){
    console.log(id);
  }

}
