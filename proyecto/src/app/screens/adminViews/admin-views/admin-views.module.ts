import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeAdminPageComponent } from '../../frontPages/home-admin-page/home-admin-page.component';
import { AdicionalesTablaComponent } from '../adicionales-tabla/adicionales-tabla.component';
import { AgregarAdicionalComponent } from '../agregar-adicional/agregar-adicional.component';
import { AgregarClienteComponent } from '../agregar-cliente/agregar-cliente.component';
import { AgregarProductoComponent } from '../agregar-producto/agregar-producto.component';
import { DetalleAdicionalComponent } from '../detalle-adicional/detalle-adicional.component';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';
import { EditarClienteComponent } from '../editar-cliente/editar-cliente.component';
import { HeaderCrudsComponent } from '../header-cruds/header-cruds.component';
import { MenuClientesComponent } from '../menu-clientes/menu-clientes.component';
import { MenuTablaComponent } from '../menu-tabla/menu-tabla.component';
import { AdminViewsRoutingModule } from './admin-views-routing.module';


@NgModule({
  declarations: [
    MenuTablaComponent,
    DetalleProductoComponent,
    AgregarProductoComponent,
    AdicionalesTablaComponent,
    DetalleAdicionalComponent,
    AgregarAdicionalComponent,
    MenuClientesComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    HeaderCrudsComponent,
    HomeAdminPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminViewsRoutingModule
  ],
  exports: [
    HeaderCrudsComponent
  ]
})
export class AdminViewsModule { }