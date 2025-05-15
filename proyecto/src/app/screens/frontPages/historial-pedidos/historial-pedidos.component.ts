import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/entidades/pedido/pedido';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-historial-pedidos',
  templateUrl: './historial-pedidos.component.html',
  styleUrls: ['./historial-pedidos.component.css']
})

export class HistorialPedidosComponent implements OnInit {

  pedidos: Pedido[] = [];  // Variable para almacenar los pedidos completados
  cargando: boolean = true;  // Indicador de carga
  error: string | null = null;  // Mensaje de error, si ocurre alguno

  constructor(private pedidoService: PedidoService, private router: Router) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener los pedidos del cliente autenticado
    this.pedidoService.obtenerPedidosPorCliente().subscribe({
      next: (data) => {
        // Filtrar solo los pedidos completados
        this.pedidos = data.filter(pedido => pedido.estado === 'ENTREGADO');
        this.cargando = false;  // Actualizar el estado de carga
      },
      error: (err) => {
        this.error = 'Error al cargar tu historial de pedidos';
        this.cargando = false;
      }
    });
  }

  verDetalles(pedidoId: number): void {
    this.router.navigate([`/PedidoDetalle/${pedidoId}`]);  // Redirigir al componente de detalles
  }
}
