import { Component, OnInit } from '@angular/core';
import { Domiciliario } from 'src/app/entidades/domiciliario/domiciliario';
import { Pedido } from 'src/app/entidades/pedido/pedido';
import { DomiciliarioService } from 'src/app/services/domiciliario/domiciliario.service';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-ver-pedidos',
  templateUrl: './ver-pedidos.component.html',
  styleUrls: ['./ver-pedidos.component.css']
})
export class VerPedidosComponent implements OnInit {
  mensajeDomiciliarioAsignado: string | null = null;
  pedidos: Pedido[] = [];
  domiciliarios: Domiciliario[] = []; 
  cargando: boolean = true;
  error: string | null = null;
  constructor(
    private pedidoService: PedidoService,
    private domiciliarioService: DomiciliarioService
  ){}

  ngOnInit(): void {
    this.cargarPedidos();
    this.cargarDomiciliarios();
  }

  cargarPedidos(): void {
    this.pedidoService.obtenerPedidos().subscribe({
      next: (data) => {
        this.pedidos = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error al cargar pedidos';
        this.cargando = false;
      }
    });
  }

  cargarDomiciliarios(): void {
    this.domiciliarioService.getDomiciliariosDisponibles().subscribe({
      next: (data) => {
        this.domiciliarios = data;
      },
      error: (err) => {
        console.error('Error al cargar domiciliarios disponibles');
      }
    });
  }

  asignarDomiciliario(pedidoId: number, domiciliarioId: number): void {
    if (!domiciliarioId) return;

    this.pedidoService.asignarDomiciliario(pedidoId, domiciliarioId).subscribe({
      next: () => {
        this.mensajeDomiciliarioAsignado = 'Domiciliario asignado exitosamente';
        this.cargarPedidos(); // Volvemos a cargar pedidos para reflejar cambios
        this.cargarDomiciliarios(); // Volvemos a cargar domiciliarios para actualizar disponibilidad
        setTimeout(() => {
          this.mensajeDomiciliarioAsignado = null;
        }, 3000);  // 3000 ms = 3 segundos
      },
      error: (err) => {
        this.mensajeDomiciliarioAsignado = 'Error al asignar domiciliario';
        setTimeout(() => {
          this.mensajeDomiciliarioAsignado = null;
        }, 3000);
      }
    });
  }
  onDomiciliarioSeleccionado(event: Event, pedidoId: number) {
    const selectElement = event.target as HTMLSelectElement;
    const domiciliarioId = Number(selectElement.value);
  
    if (domiciliarioId) {
      this.asignarDomiciliario(pedidoId, domiciliarioId);
    }
  }
  

  finalizarPedido(pedidoId: number, domiciliarioId: number): void {
    if (!pedidoId || !domiciliarioId) return;

    this.pedidoService.finalizarPedido(pedidoId, domiciliarioId).subscribe({
      next: () => {
        // Mostrar mensaje de éxito
        this.mensajeDomiciliarioAsignado = 'Pedido finalizado correctamente';
        this.cargarPedidos(); // Recargar los pedidos para ver el cambio de estado
        this.cargarDomiciliarios(); // Recargar los domiciliarios para actualizar su disponibilidad

        // Limpiar el mensaje después de 3 segundos
        setTimeout(() => {
          this.mensajeDomiciliarioAsignado = null;
        }, 3000);
      },
      error: (err) => {
        this.mensajeDomiciliarioAsignado = 'Error al finalizar el pedido';
        setTimeout(() => {
          this.mensajeDomiciliarioAsignado = null;
        }, 3000);
      }
    });
  }
}
