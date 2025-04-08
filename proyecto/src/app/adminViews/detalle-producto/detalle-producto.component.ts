import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Producto } from 'src/app/entidades/producto/producto';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto!: Producto;
  formVisible: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productoService.getProductoById(+id).subscribe({
        next: (prod) => this.producto = prod,
        error: (err) => console.error('Error al cargar el producto:', err)
      });
    }
  }

  guardarCambios() {
    if (this.producto && this.producto.producto_id != null) {
      this.productoService.updateProducto(this.producto.producto_id, this.producto).subscribe({
        next: (productoActualizado) => {
          console.log('Producto actualizado:', productoActualizado);
          this.router.navigate(['/admin/menu']);
        },
        error: (err) => {
          console.error('Error al actualizar producto:', err);
        }
      });
    }
  }
  
}
