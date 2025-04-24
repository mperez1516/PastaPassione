import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerPedidosComponent } from '../ver-pedidos/ver-pedidos.component';
import { LoginOperadorComponent } from '../login-operador/login-operador.component';

const routes: Routes = [
  { path: 'ver-pedidos', component: VerPedidosComponent },
  { path: 'loginOperador', component: LoginOperadorComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperadorRoutingModule { }
