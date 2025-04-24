import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperadorRoutingModule } from './operador-routing.module';
import { VerPedidosComponent } from '../ver-pedidos/ver-pedidos.component';


@NgModule({
  declarations: [
    VerPedidosComponent
  ],
  imports: [
    CommonModule,
    OperadorRoutingModule
  ]
})
export class OperadorModule { }
