import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MaquinasComponent } from './maquinas/maquinas.component';
import { SectoresComponent } from './sectores/sectores.component';
import { ItemsComponent } from './items/items.component';
import { AuthGuard } from '../guards/auth.guard';
import { LoginComponent } from '../auth/login/login.component';
import { ReporteMedidasComponent } from './reporte-medidas/reporte-medidas.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: 'maquinas', component: MaquinasComponent, canActivate: [AuthGuard] },
      {path: 'sectores/:id', component: SectoresComponent, canActivate: [AuthGuard]},
      {path: 'items/:id', component: ItemsComponent, canActivate: [AuthGuard]},
      {path: 'reporte-medidas/:id', component: ReporteMedidasComponent, canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo: '/maquinas', pathMatch: 'full'},
      {path: '**', redirectTo: '/maquinas', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
