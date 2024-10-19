import { Component } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  constructor(private produtoService: ProdutoService){

  }

  public async getProdutos(){
    let prod$ = await lastValueFrom(this.produtoService.getProdutos());
    console.log(prod$);
  }

}
