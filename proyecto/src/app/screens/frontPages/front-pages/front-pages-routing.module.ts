import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeClientePageComponent } from '../home-cliente-page/home-cliente-page.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LoginClienteComponent } from '../login-cliente/login-cliente.component';
import { MenuGeneralComponent } from '../menu-general/menu-general.component';
import { RegistroClienteComponent } from '../registro-cliente/registro-cliente.component';
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';
import { HistorialPedidosComponent } from '../historial-pedidos/historial-pedidos.component';
import { PedidosActivosComponent } from '../pedidos-activos/pedidos-activos.component';
import { PagarComponent } from '../pagar/pagar/pagar.component';
import { HomeAdminPageComponent } from '../home-admin-page/home-admin-page.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { DetallesPedidoComponent } from '../detalles-pedido/detalles-pedido.component';

const routes: Routes = [
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'homeCliente', component: HomeClientePageComponent },
  {path: 'homeAdmin', component: HomeAdminPageComponent},
  { path: 'login', component: LoginClienteComponent },
  { path: 'registro', component: RegistroClienteComponent },
  { path: 'menu', component: MenuGeneralComponent },
  { path: 'editarPerfil' , component: EditarPerfilComponent},
  { path: 'historialPedidos', component: HistorialPedidosComponent},
  { path: 'pedidosActivos', component: PedidosActivosComponent},
  {path: 'pagar',component: PagarComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'PedidoDetalle/:id', component: DetallesPedidoComponent},
  { path: '', redirectTo: 'landingPage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontPagesRoutingModule { }