import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Categoria } from '../../model/categoria.model';
import { NgFor } from '@angular/common';
import { CategoriaService } from '../../service/categoria.service';
import { lastValueFrom } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-categoria-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor,
    RouterModule
  ],
  templateUrl: './categoria-form.component.html',
  styleUrl: './categoria-form.component.css'
})
export class CategoriaFormComponent implements OnInit{
  cat$: any;

  constructor(private categoriaService: CategoriaService, private router: Router){

  }
  ngOnInit(): void {
    this.getCategorias();
  }

  public async getCategorias(){
    this.cat$ = await lastValueFrom(this.categoriaService.getCategorias());
  }

  form = new FormGroup({
    id: new FormControl<number|null>(null),
    nome: new FormControl<string>(''),
    descricao: new FormControl<string>(''),
    categoria: new FormControl<number|null>(null)
    
  });

  public salvar(){
    //todo
    let nome = this.form.controls.nome.value;
    let descricao = this.form.controls.descricao.value;
    let categoria_pai = this.form.controls.categoria.value;
    console.log(nome);
    console.log(descricao);
    console.log(categoria_pai);

    let categoria: Categoria = {
      "id": null,
      "nome": nome,
      "descricao": descricao,
      "categoria_pai_id": categoria_pai
    };

    this.categoriaService.salvar(categoria).subscribe(
      categoria => {
        this.router.navigate(['categoria']);
        console.log(categoria);
      },
      erro => {
        console.log(erro);
      }
    );;
  }
}
