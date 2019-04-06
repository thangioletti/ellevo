import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContatosListComponent } from './contatos-list/contatos-list.component';
import { ContatosCadastroComponent } from './contatos-cadastro/contatos-cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: ContatosListComponent
  },
  {
    path: 'cadastro',
    component: ContatosCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
