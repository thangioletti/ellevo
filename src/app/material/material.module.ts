import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxMaskModule} from 'ngx-mask'
import * as Material from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatCardModule,
    Material.MatTableModule,
    Material.MatSortModule,
    Material.MatBottomSheetModule,
    Material.MatMenuModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatCardModule,
    Material.MatTableModule,
    Material.MatSortModule,
    Material.MatBottomSheetModule,
    Material.MatMenuModule
  ],
  declarations: []
})
export class MaterialModule { }
