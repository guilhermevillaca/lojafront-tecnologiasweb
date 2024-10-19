import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { lastValueFrom } from 'rxjs';
import { log } from 'console';
import { NgFor } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';

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
  categoria: any;

  constructor(private categoriaService: CategoriaService, private router: Router){

  }
  ngOnInit(): void {
    this.getCategoria();
  }

  public async getCategoria(){
    this.cat$ = await lastValueFrom(this.categoriaService.getCategorias());
    //console.log(this.cat$);
  }


  public editar(id: number){
    //this.categoria = await lastValueFrom(this.categoriaService.getCategoriaById(id));
    this.router.navigate(['categoria/editar/', id]);
    console.log(id);
  }

  public async remover(id: number){
    let ret = await lastValueFrom(this.categoriaService.remover(id));
    console.log(ret);
    this.router.navigate(['categoria/listar']);
  }

}
