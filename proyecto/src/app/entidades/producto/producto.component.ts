import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { Producto } from 'src/app/entidades/producto/producto';
import { Carro } from 'src/app/entidades/carro/carro';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productoSeleccionado!: Producto; // Asigna el producto actual que el usuario quiere comprar
  cantidadSeleccionada: number = 1;
  clienteId: number = 1; // ⚠️ Esto deberías obtenerlo del usuario autenticado
  adicionalesSeleccionados: number[] = [];
  carro!: Carro;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    // Aquí podrías cargar el producto, por ejemplo desde un servicio o ruta
    // this.productoSeleccionado = ...
  }

  toggleAdicional(id: number, event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.adicionalesSeleccionados.push(id);
    } else {
      this.adicionalesSeleccionados = this.adicionalesSeleccionados.filter(a => a !== id);
    }
  }

  agregarAlCarrito() {
    if (!this.productoSeleccionado) {
      alert('Debe seleccionar un producto');
      return;
    }

    this.carritoService.agregarProductoAlCarrito(
      this.clienteId,
      this.productoSeleccionado.producto_id,
      this.cantidadSeleccionada,
      this.adicionalesSeleccionados
    ).subscribe({
      next: (carro) => {
        this.carro = carro;
        alert('Producto agregado al carrito.');
      },
      error: (err) => {
        console.error('Error al agregar:', err);
        alert('No se pudo agregar el producto al carrito.');
      }
    });
  }
}
