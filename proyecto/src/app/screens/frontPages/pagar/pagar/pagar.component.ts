import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { Carro } from 'src/app/entidades/carro/carro';
import { Cliente } from 'src/app/entidades/cliente/cliente';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit {
  carrito: Carro = { id: 0, cliente: null, items: [] };
  total: number = 0;
  cliente: Cliente | null = null;
  mensajeExito: string = '';
  direccionEnvio: string = '';

  constructor(
    private clienteService: ClienteService,
    private pedidoService: PedidoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cliente = this.clienteService.obtenerClienteAutenticado();
    console.log(this.cliente);
    if (!this.cliente) {
      localStorage.setItem('redirectAfterLogin', '/pagar');
      this.router.navigate(['/login']);
      return;
    }

    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
      this.calcularTotal();
    }
  }

  calcularTotal(): void {
    this.total = this.carrito.items.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
  }

  confirmarPago(): void {
    // Solo proceder si hay un cliente logueado y una dirección
    if (this.cliente && this.direccionEnvio) {
      // Llama al servicio para crear el pedido de una vez
      this.pedidoService.crearPedido(this.carrito.id, this.direccionEnvio)
        .subscribe({
          next: (pedido) => {
            // pedido es la respuesta de tu backend: un objeto Pedido con su id
            this.mensajeExito = `Pedido #${pedido.pedidoID} generado exitosamente.`;
            // Limpia el carrito en storage y en la UI
            localStorage.removeItem('carrito');
            this.carrito.items = [];
            this.total = 0;
            // Tras 3s regresa al home del cliente
            setTimeout(() => this.router.navigate(['/homeCliente']), 3000);
          },
          error: (err) => {
            console.error('Error al generar el pedido:', err);
            this.mensajeExito = 'Error al generar el pedido. Por favor, intenta de nuevo.';
          }
        });
    }
  }
  

  getRutaImagen(categoria: string, nombre: string): string {
    const categoriaNormalizada = categoria.trim().toLowerCase().replace(/\s+/g, '');
    const nombreFormateado = nombre.toLowerCase().replace(/ /g, '-') + '.jpg';
    const ruta = `assets/Imagenes/menu/${categoriaNormalizada}/${nombreFormateado}`;
    return ruta;
  }
}