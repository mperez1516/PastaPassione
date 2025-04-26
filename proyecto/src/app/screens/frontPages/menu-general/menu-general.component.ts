import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/entidades/producto/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { Carro } from 'src/app/entidades/carro/carro';
import { CarritoItem } from 'src/app/entidades/carrito/carrito-item';
import { Cliente } from 'src/app/entidades/cliente/cliente';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit {
  mostrarCarrito: boolean = false;
  categorias: { [key: string]: Producto[] } = {
    entrada: [],
    platoprincipal: [],
    postre: [],
    bebida: []
  };
  carrito: Carro = { id: 0, cliente: null, items: [] };
  totalCantidad: number = 0;

  constructor(private productoService: ProductoService, private router: Router,private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.cargarMenu();
    this.actualizarCarritoUI();
  }

  cargarMenu(): void {
    this.productoService.getProductos().subscribe({
      next: (productos) => {
        productos.forEach(producto => {
          const categoria = producto.categoria.trim().toLowerCase().replace(/\s+/g, '');
          if (this.categorias[categoria]) {
            this.categorias[categoria].push(producto);
          }
        });
      },
      error: err => console.error('Error al obtener el menú:', err)
    });
  }

  agregarAlCarrito(producto: Producto): void {
    console.log('Añadiendo producto al carrito:', producto);
    const existente = this.carrito.items.find(item => item.producto.producto_id === producto.producto_id);
    if (existente) {
      existente.cantidad++;
    } else {
      const nuevoItem: CarritoItem = {
        id: 0,
        producto: producto,
        cantidad: 1
      };
      this.carrito.items.push(nuevoItem);
    }
    // Crear una nueva referencia para forzar la detección de cambios
    this.carrito.items = [...this.carrito.items];
    console.log('Carrito después de añadir:', this.carrito);
    localStorage.setItem("carrito", JSON.stringify(this.carrito));
    this.actualizarCarritoUI();
  }

  actualizarCarritoUI(): void {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
      // Forzar detección de cambios creando una nueva referencia
      this.carrito.items = [...this.carrito.items];
    }
    console.log('Actualizando UI del carrito:', this.carrito);
    if (!Array.isArray(this.carrito.items)) {
      this.carrito.items = [];
    }
    this.totalCantidad = this.carrito.items.reduce((acc, item) => acc + item.cantidad, 0);
    console.log('Total cantidad:', this.totalCantidad);
  }

  eliminarDelCarrito(productoId: number): void {
    this.carrito.items = this.carrito.items.filter(item => item.producto.producto_id !== productoId);
    localStorage.setItem("carrito", JSON.stringify(this.carrito));
    this.actualizarCarritoUI();
  }

  vaciarCarrito(): void {
    this.carrito.items = [];
    localStorage.setItem("carrito", JSON.stringify(this.carrito));
    this.actualizarCarritoUI();
  }

  verDetalle(producto: Producto): void {
    this.router.navigate(['/detalle', producto.producto_id]);
  }

  getRutaImagen(categoria: string, nombre: string): string {
    const categoriaNormalizada = categoria.trim().toLowerCase().replace(/\s+/g, '');
    const nombreFormateado = nombre.toLowerCase().replace(/ /g, '-') + '.jpg';
    const ruta = `assets/Imagenes/menu/${categoriaNormalizada}/${nombreFormateado}`;
    return ruta;
  }

  irAPagar(): void {
    this.clienteService.isLoggedIn().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.router.navigate(['/pagar']);
      } else {
        localStorage.setItem('redirectAfterLogin', '/pagar');
        this.router.navigate(['/login']);
      }
    });
  }
}