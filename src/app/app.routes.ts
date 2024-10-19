import { Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoComponent } from './produto/produto.component';
import { HomeComponent } from './home/home.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';

export const routes: Routes = [
    {path: 'categoria', component: CategoriaComponent},
    {path: 'categoria/novo', component: CategoriaFormComponent},
    {path: 'categoria/editar/:id', component: CategoriaComponent},
    {path: 'produto', component: ProdutoComponent},
    {path: 'produto/novo', component: ProdutoFormComponent},
    {path: '', component: HomeComponent}
];
