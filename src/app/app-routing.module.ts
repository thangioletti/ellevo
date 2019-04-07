import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'inicio',
    loadChildren: './inicio/inicio.module#InicioModule'
  }, 
  {
    path: 'contatos',
    loadChildren: './contatos/contatos.module#ContatosModule'
  }, 
  {
    path: 'sobre',
    loadChildren: './sobre/sobre.module#SobreModule'
  },
  {
    path: 'logout',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'login',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/inicio',
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
