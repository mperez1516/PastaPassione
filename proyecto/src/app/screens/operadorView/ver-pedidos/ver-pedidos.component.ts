import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/entidades/pedido/pedido';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-ver-pedidos',
  templateUrl: './ver-pedidos.component.html',
  styleUrls: ['./ver-pedidos.component.css']
})
export class VerPedidosComponent implements OnInit {

  pedidos: Pedido[] = [];
  cargando: boolean = true;
  error: string | null = null;
  constructor(private pedidoService: PedidoService) {}

  ngOnInit(): void {
    this.pedidoService.obtenerPedidos()
      .subscribe({
        next: (data) => {
          this.pedidos = data;
          this.cargando = false;
          console.log(this.pedidos);
        },
        error: (err) => {
          this.error = 'Error al cargar pedidos';
          this.cargando = false;
        }
      });
  }
  
}
