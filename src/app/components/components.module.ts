import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedidaEditarComponent } from './medidas/medida-editar/medida-editar.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MedidaEditarComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    MedidaEditarComponent
  ]
})
export class ComponentsModule { }
