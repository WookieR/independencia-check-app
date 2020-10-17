import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from '../app-routing.module';
import { IonicModule } from '@ionic/angular';
import { MaquinasComponent } from './maquinas/maquinas.component';
import { PipesModule } from '../pipes/pipes.module';
import { SectoresComponent } from './sectores/sectores.component';
import { ItemsComponent } from './items/items.component';
import { ReporteMedidasComponent } from './reporte-medidas/reporte-medidas.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    MaquinasComponent,
    SectoresComponent,
    ItemsComponent,
    ReporteMedidasComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AppRoutingModule,
    IonicModule,
    PagesRoutingModule,
    PipesModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    AboutComponent
  ]
})
export class PagesModule { }
