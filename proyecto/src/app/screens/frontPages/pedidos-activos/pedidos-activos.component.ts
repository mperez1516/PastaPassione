import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/entidades/pedido/pedido';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-pedidos-activos',
  templateUrl: './pedidos-activos.component.html',
  styleUrls: ['./pedidos-activos.component.css']
})
export class PedidosActivosComponent implements OnInit {

  pedidos: Pedido[] = [];  // Variable para almacenar los pedidos del cliente
  cargando: boolean = true;  // Indicador de carga
  error: string | null = null;  // Mensaje de error, si ocurre alguno

  constructor(private pedidoService: PedidoService, private router: Router) {}

  ngOnInit(): void {
    // Llamar al servicio para obtener los pedidos del cliente autenticado
    this.pedidoService.obtenerPedidosPorCliente().subscribe({
      next: (data) => {
        this.pedidos = data;  // Almacenar los pedidos en la variable 'pedidos'
        this.cargando = false;  // Actualizar el estado de carga
      },
      error: (err) => {
        this.error = 'Error al cargar tus pedidos';  // Manejo de errores
        this.cargando = false;
      }
    });
  }
  verDetalles(pedidoId: number): void {
    this.router.navigate([`/PedidoDetalle/${pedidoId}`]);  // Redirigir al componente de detalles con el ID del pedido
  }
}