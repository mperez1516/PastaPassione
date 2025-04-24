import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperadorRoutingModule } from './operador-routing.module';
import { VerPedidosComponent } from '../ver-pedidos/ver-pedidos.component';
import { LoginOperadorComponent } from '../login-operador/login-operador.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VerPedidosComponent,
    LoginOperadorComponent
  ],
  imports: [
    CommonModule,
    OperadorRoutingModule,
    FormsModule

  ]
})
export class OperadorModule { }
