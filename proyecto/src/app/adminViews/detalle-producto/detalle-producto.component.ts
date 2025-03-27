import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/entidades/producto/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

  @Input() producto!:Producto;

  formVisible: boolean = true;

  guardarCambios() {
    this.formVisible = false;
  }
}
