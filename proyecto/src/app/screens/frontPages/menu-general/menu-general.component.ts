import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoItem } from 'src/app/entidades/carrito/carrito-item';
import { Producto } from 'src/app/entidades/producto/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit{

  mostrarCarrito: boolean = false;
  categorias: { [key: string]: Producto[] } = {
    entrada: [],
    platoprincipal: [],
    postre: [],
    bebida: []
  };
  carrito: CarritoItem[] = [];
  totalCantidad: number = 0;  
  constructor(private productoService: ProductoService, private router: Router) {}

  mostrar() {
    this.mostrarCarrito = true;
  }

  ocultar() {
    this.mostrarCarrito = false;
  }

  getRutaImagen(categoria: string, nombre: string): string {
    const nombreFormateado = nombre.toLowerCase().replace(/ /g, '-');
    return `assets/Imagenes/menu/${categoria}/${nombreFormateado}.jpg`;
  }


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
    const id = producto.producto_id;
    const nombre = producto.nombre;
    const precio = producto.precio;
    const imagen = `/assets/Imagenes/menu/${producto.categoria.toLowerCase().replace(/\s+/g, '')}/${nombre.toLowerCase().replace(/ /g, '-')}.jpg`;

    const existente = this.carrito.find(item => item.id === id);
    if (existente) {
      existente.cantidad++;
    } else {
      this.carrito.push({ id, nombre, precio, imagen, cantidad: 1 });
    }
    localStorage.setItem("carrito", JSON.stringify(this.carrito));
    this.actualizarCarritoUI();
  }

  actualizarCarritoUI(): void {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito") || '[]');
    this.carrito = carritoGuardado;
    this.totalCantidad = this.carrito.reduce((acc, item) => acc + item.cantidad, 0);
  }

  eliminarDelCarrito(id: number): void {
    this.carrito = this.carrito.filter(item => item.id !== id);
    localStorage.setItem("carrito", JSON.stringify(this.carrito));
    this.actualizarCarritoUI();
  }

  vaciarCarrito(): void {
    this.carrito = [];
    localStorage.setItem("carrito", JSON.stringify([]));
    this.actualizarCarritoUI();
  }

  verDetalle(producto: Producto): void {
    this.router.navigate(['/producto', producto.producto_id]);
  }

}
