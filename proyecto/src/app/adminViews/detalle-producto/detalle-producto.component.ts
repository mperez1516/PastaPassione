import { Component } from '@angular/core';
import { Producto } from 'src/app/entidades/producto/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

  producto!:Producto;

}
