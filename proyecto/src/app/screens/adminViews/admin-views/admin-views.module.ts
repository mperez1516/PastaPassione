import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminViewsRoutingModule } from './admin-views-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
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
import { AdminViewsComponent } from './admin-views.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginAdminComponent } from '../login-admin/login-admin.component';
import { OperadoresTablaComponent } from '../operadores-tabla/operadores-tabla.component';
import { DetalleOperadoresComponent } from '../detalle-operadores/detalle-operadores.component';
import { AgregarOperadorComponent } from '../agregar-operador/agregar-operador.component';


@NgModule({
  declarations: [
    AdminViewsComponent,
    // Solo componentes específicos de admin-views
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
    OperadoresTablaComponent,
    DetalleOperadoresComponent,
    AgregarOperadorComponent,
    LoginAdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule, 
    AdminViewsRoutingModule,
    HttpClientModule  
  ],
  exports: [
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
    
  ]
})
export class AdminViewsModule { }