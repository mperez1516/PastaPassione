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
  carrito: Carro = { id: 0, clienteId: null, items: [] };
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
    if (!this.cliente) {
      localStorage.setItem('redirectAfterLogin', '/pagar');
      this.router.navigate(['/login']);
      return;
    }

    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado) as Carro;
      this.calcularTotal();
    }
  }

  calcularTotal(): void {
    this.total = this.carrito.items.reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0);
  }

 confirmarPago(): void {
  if (this.cliente?.id != null && this.direccionEnvio.trim()) {
    const carritoGuardado = localStorage.getItem('carrito');
    if (!carritoGuardado) {
      alert('No hay productos en el carrito.');
      return;
    }

    this.carrito = JSON.parse(carritoGuardado);
    this.carrito.clienteId = this.cliente.id; // ✅ importante
const { id, ...carritoSinId } = this.carrito;
    console.log(carritoSinId);
this.carrito.items.forEach(item => delete item.id);

    // 1. Guardar el carrito primero
    this.pedidoService.guardarCarrito(carritoSinId as any, this.direccionEnvio).subscribe({
      next: (res) => {
        const carritoId = res.carritoId;

        // 2. Crear el pedido desde el carrito guardado
        this.pedidoService.crearPedido(carritoId, this.direccionEnvio).subscribe({
          next: (pedido) => {
            this.mensajeExito = `Pedido #${pedido.pedidoId} generado exitosamente.`;
            localStorage.removeItem('carrito');
            this.carrito.items = [];
            this.total = 0;
            setTimeout(() => this.router.navigate(['/homeCliente']), 3000);
          },
          error: (err) => {
            console.error('Error al crear el pedido:', err);
            alert('Error al generar el pedido.');
          }
        });
      },
      error: (err) => {
        console.error('Error al guardar carrito:', err);
        alert('Error al guardar el carrito.');
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