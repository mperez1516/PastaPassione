import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTablaComponent } from './adminViews/menu-tabla/menu-tabla.component';
import { LandingPageComponent } from './frontPages/landing-page/landing-page.component';
import { HomeClientePageComponent } from './frontPages/home-cliente-page/home-cliente-page.component';

const routes: Routes = [
  {path: 'admin/menu', component: MenuTablaComponent},
  {path: 'landingPage', component: LandingPageComponent},
  {path: 'homeCliente', component: HomeClientePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
