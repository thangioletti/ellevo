import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'contatos',
    loadChildren: './contatos/contatos.module#ContatosModule'
  }, 
  {
    path: 'sobre',
    loadChildren: './sobre/sobre.module#SobreModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
