import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTablaComponent } from './adminViews/menu-tabla/menu-tabla.component';
import { LandingPageComponent } from './frontPages/landing-page/landing-page.component';
import { HomeClientePageComponent } from './frontPages/home-cliente-page/home-cliente-page.component';
import { DetalleProductoComponent } from './adminViews/detalle-producto/detalle-producto.component';
import { AgregarProductoComponent } from './adminViews/agregar-producto/agregar-producto.component';

import { DetalleAdicionalComponent } from './adminViews/detalle-adicional/detalle-adicional.component';
import { AgregarAdicionalComponent } from './adminViews/agregar-adicional/agregar-adicional.component';
import { AdicionalesTablaComponent } from './adminViews/adicionales-tabla/adicionales-tabla.component';

const routes: Routes = [
  {path: 'admin/menu', component: MenuTablaComponent},
  {path: 'landingPage', component: LandingPageComponent},
  {path: 'homeCliente', component: HomeClientePageComponent},
  {path: 'detalleProducto/:id', component: DetalleProductoComponent},
  {path: 'agregarProducto',component: AgregarProductoComponent},
  {path: '', redirectTo: '/landingPage', pathMatch: 'full'},
  {path: 'admin/adicionales',component: AdicionalesTablaComponent},
  {path: 'detalleAdicional/:id',component: DetalleAdicionalComponent},
  {path: 'agregarAdicional',component: AgregarAdicionalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
