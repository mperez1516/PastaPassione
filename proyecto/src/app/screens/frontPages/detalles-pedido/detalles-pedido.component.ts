import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from 'src/app/entidades/pedido/pedido';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-detalles-pedido',
  templateUrl: './detalles-pedido.component.html',
  styleUrls: ['./detalles-pedido.component.css']
})
export class DetallesPedidoComponent implements OnInit {
  pedido: Pedido | null = null;
  cargando: boolean = true;
  error: string | null = null;
  total: number = 0;

  constructor(
    private pedidoService: PedidoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el ID del pedido desde la URL
    const pedidoId = Number(this.route.snapshot.paramMap.get('id'));
    
    if (pedidoId) {
      this.pedidoService.obtenerDetallesPedido(pedidoId).subscribe({
        next: (data) => {
          this.pedido = data;
          this.calcularTotal();
          this.cargando = false;
        },
        error: (err) => {
          this.error = 'Error al cargar los detalles del pedido';
          this.cargando = false;
        }
      });
    }
  }

  calcularTotal(): void {
    if (this.pedido && this.pedido.items) {
      this.total = this.pedido.items.reduce((acc, item) => {
        const adicionalesTotal = item.producto.adicionales
          ? item.producto.adicionales.reduce((acc, adicional) => acc + adicional.precio, 0) 
          : 0; // Si no hay adicionales, el total es 0
        return acc + (item.precioUnitario * item.cantidad) + adicionalesTotal;
      }, 0);
    }
  }
  volver(): void {
    this.router.navigate(['/pedidosActivos']); // Redirige a la página de pedidos activos
  }
}
