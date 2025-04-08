import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/entidades/producto/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-menu-tabla',
  templateUrl: './menu-tabla.component.html',
  styleUrls: ['./menu-tabla.component.css']
})
export class MenuTablaComponent implements OnInit {

  //Atributos
  detalleProducto!: Producto;

  //Base de datos de productos
  productosList: Producto[] = [];

  //Metodos

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productoService.getProductos().subscribe({
      next: (productos) => this.productosList = productos,
      error: (err) => console.error('Error al obtener productos:', err)
    });
  }
  editarProducto(producto: Producto) {
    this.detalleProducto = producto;
  }

  eliminarProducto(producto: Producto) {
    console.log(producto);
    console.log(producto.producto_id);
    if (producto.producto_id != null) {
      this.productoService.deleteProducto(producto.producto_id).subscribe({
        next: () => {
          this.obtenerProductos();
        },
        error: (err) => {
          console.error('Error al eliminar producto:', err);
        }
      });
     
    }
  }

  agregarProducto(producto: Producto) {
    this.productoService.addProducto(producto).subscribe({
      next: () => this.obtenerProductos(),
      error: (err) => console.error('Error al agregar producto:', err)
    });
  }



}
