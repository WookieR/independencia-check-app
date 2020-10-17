import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
    // Pages routes (AUTENTICADAS)
    //{ path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    PagesRoutingModule,
    //AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
