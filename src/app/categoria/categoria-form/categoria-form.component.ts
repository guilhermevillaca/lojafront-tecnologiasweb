import { Component, inject, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Categoria } from '../../model/categoria.model';
import { NgFor } from '@angular/common';
import { CategoriaService } from '../../service/categoria.service';
import { lastValueFrom } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
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
  categoria: any;
  private activateRoute = inject(ActivatedRoute);
  id: any;

  form = new FormGroup({
    id: new FormControl<number|null>(null),
    nome: new FormControl<string>(''),
    descricao: new FormControl<string>(''),
    categoria: new FormControl<number|null>(null)
    
  });

  constructor(private categoriaService: CategoriaService, private router: Router){

  }
  ngOnInit(): void {
    this.getCategorias();
    this.id = this.activateRoute.snapshot.params['id'];
    if(this.id){
      this.getCategoriaById();
    }

  }

  public async getCategorias(){
    this.cat$ = await lastValueFrom(this.categoriaService.getCategorias());
  }

  public async getCategoriaById(){
    this.categoria = await lastValueFrom(this.categoriaService.getCategoriaById(this.id));
    console.log(this.categoria);
    this.form.controls.id.setValue(this.categoria.id);
    this.form.controls.nome.setValue(this.categoria.nome);
    this.form.controls.descricao.setValue(this.categoria.descricao);
    this.form.controls.categoria.setValue(this.categoria.categoria?.id);
  }

 

  public salvar(){
    //todo
    let id_ = null;
    if(this.id){
      id_ = this.id;
    }
    let nome = this.form.controls.nome.value;
    let descricao = this.form.controls.descricao.value;
    let categoria_pai = this.form.controls.categoria.value;

    let categoria: Categoria = {
      "id": id_,
      "nome": nome,
      "descricao": descricao,
      "categoria": {
        "id": categoria_pai,        
        "nome": null,
        "descricao": null,
        "categoria": null
      }
    };

    console.log(categoria);


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
