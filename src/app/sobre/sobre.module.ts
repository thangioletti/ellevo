import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreRoutingModule } from './sobre-routing.module';
import { PerfilComponent } from './perfil/perfil.component';

import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,
    SobreRoutingModule,
    MaterialModule
  ]
})
export class SobreModule { }
