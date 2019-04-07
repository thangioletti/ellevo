import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ApresentacaoComponent],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialModule
  ]
})
export class InicioModule { }
