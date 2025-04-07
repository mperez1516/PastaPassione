import { Component, EventEmitter, Output } from '@angular/core';
import { Producto } from 'src/app/entidades/producto/producto';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent {

  //Evento para agregar producto y lo transmita al componente padre
  @Output() 
  addProductoEvent = new EventEmitter<Producto>();


  //Modelo de producto
  formProducto: Producto= {
    producto_id: 0,
    nombre: "",
    precio: 0,
    descripcion: "",
    categoria: ""
  }

  //Agregar producto
  addProductoForm(){
    console.log(this.formProducto);
    //Copiar valores 
    //this.sendProducto= Object.assign({},this.formProducto);

    this.addProductoEvent.emit(this.formProducto);

  }

}
