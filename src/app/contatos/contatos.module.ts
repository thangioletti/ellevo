import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosListComponent } from './contatos-list/contatos-list.component';
import { ContatosCadastroComponent } from './contatos-cadastro/contatos-cadastro.component';
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [ContatosListComponent, ContatosCadastroComponent],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    MaterialModule
  ]
})
export class ContatosModule { }
