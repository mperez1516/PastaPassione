import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerPedidosComponent } from '../ver-pedidos/ver-pedidos.component';

const routes: Routes = [
  { path: 'ver-pedidos', component: VerPedidosComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperadorRoutingModule { }
