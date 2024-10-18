import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CategoriaService } from '../../service/categoria.service';
import { lastValueFrom } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-categoria-form',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, NgFor],
  templateUrl: './categoria-form.component.html',
  styleUrl: './categoria-form.component.css'
})
export class CategoriaFormComponent implements OnInit {
  cat$: any;
  constructor(
    private categoriaService: CategoriaService
  ){
  }
  ngOnInit(): void {
    this.getCategorias();
  }

  form = new FormGroup({
    id: new FormControl<number|null>(null),
    nome: new FormControl<string|null>(''),
    descricao: new FormControl<string|null>(''),
    categoria_pai_id: new FormControl<number|null>(null)
  });

  
  public async getCategorias(){
    this.cat$ = await lastValueFrom(this.categoriaService.getCategorias());
    
  }


}
