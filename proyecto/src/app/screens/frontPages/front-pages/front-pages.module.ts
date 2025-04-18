import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FrontPagesRoutingModule } from './front-pages-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeClientePageComponent } from '../home-cliente-page/home-cliente-page.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LoginClienteComponent } from '../login-cliente/login-cliente.component';
import { MenuGeneralComponent } from '../menu-general/menu-general.component';
import { RegistroClienteComponent } from '../registro-cliente/registro-cliente.component';
import { HomeAdminPageComponent } from '../home-admin-page/home-admin-page.component';
import { EditarClienteComponent } from '../../adminViews/editar-cliente/editar-cliente.component';
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';
import { HistorialPedidosComponent } from '../historial-pedidos/historial-pedidos.component';
import { PedidosActivosComponent } from '../pedidos-activos/pedidos-activos.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    HomeClientePageComponent,
    LoginClienteComponent,
    RegistroClienteComponent,
    MenuGeneralComponent,
    HomeAdminPageComponent,
    EditarPerfilComponent,
    HistorialPedidosComponent,
    PedidosActivosComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule, 
    FrontPagesRoutingModule
  ]
})
export class FrontPagesModule { }