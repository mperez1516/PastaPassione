import { Component, OnInit } from '@angular/core';
import { Adicional } from 'src/app/entidades/adicional/adicional';
import { Producto } from 'src/app/entidades/producto/producto';
import { AdicionalesService } from 'src/app/services/adicionales/adicionales.service';
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

  adicionalesList: Adicional[] = [];

  //Metodos

  constructor(
    private productoService: ProductoService,
    private adicionalService: AdicionalesService
  ) {}

//1. mostrarlos en checkbox
// y cada vez que se de click en el checkbox agregarlo a la lista de seleccionados DEL PRODUCTO

  ngOnInit(): void {
    this.obtenerProductos();
    console.log("AYUDAAAA")
    //Obtener adicionaes
    this.adicionalService.getAdicionales().subscribe({
      next: (adicionales) => {
        this.adicionalesList = adicionales;
      },
      error: (err) => {
        console.error('Error al obtener adicionales:', err);
      }
    });
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
      this.productoService.desactivarProducto(producto.producto_id).subscribe({
        next: () => {
          this.obtenerProductos(); // Recarga la lista para ver el cambio
        },
        error: (err) => {
          console.error('Error al desactivar producto:', err);
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
