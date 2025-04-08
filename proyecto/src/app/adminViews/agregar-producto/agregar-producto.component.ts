import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { Producto } from 'src/app/entidades/producto/producto';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {

  formProducto: Omit<Producto, 'producto_id'> = {
    nombre: "",
    precio: 0,
    descripcion: "",
    categoria: ""
  };
  

  constructor(
    private productoService: ProductoService,
    private router: Router
  ) {}

  addProductoForm() {
    this.productoService.addProducto(this.formProducto).subscribe({
      next: () => {
        this.router.navigate(['/admin/menu']);
      },
      error: (err) => {
        console.error('Error al agregar producto:', err); // ← te mostrará el mensaje exacto
      }
    });
    
  }
}
