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

const routes: Routes = [
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'homeCliente', component: HomeClientePageComponent },
  { path: 'login', component: LoginClienteComponent },
  { path: 'registro', component: RegistroClienteComponent },
  { path: 'menu', component: MenuGeneralComponent },
  { path: 'editarPerfil' , component: EditarPerfilComponent},
  { path: 'historialPedidos', component: HistorialPedidosComponent},
  { path: 'pedidosActivos', component: PedidosActivosComponent},
  {path: 'pagar',component: PagarComponent},
  { path: 'landingPage', redirectTo: 'landingPage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontPagesRoutingModule { }