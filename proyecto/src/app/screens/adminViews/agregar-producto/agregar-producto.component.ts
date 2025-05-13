import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/entidades/producto/producto';
import { Adicional } from 'src/app/entidades/adicional/adicional';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { AdicionalesService } from 'src/app/services/adicionales/adicionales.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  categorias: string[] = ['Plato Principal', 'Bebida', 'Postre', 'Entrada'];

  producto: Producto = {
    producto_id: 0,
    nombre: '',
    precio: 0,
    descripcion: '',
    categoria: '',
    adicionales: []
  };

  todosAdicionales: Adicional[] = [];
  adicionalesSeleccionados: { [key: number]: boolean } = {};

  constructor(
    private productoService: ProductoService,
    private adicionalesService: AdicionalesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adicionalesService.getAdicionales().subscribe({
      next: (adicionales) => {
        this.todosAdicionales = adicionales;
        // Inicializar todos como no seleccionados
        adicionales.forEach(a => this.adicionalesSeleccionados[a.adicional_id] = false);
      },
      error: (err) => console.error('Error al cargar adicionales:', err)
    });
  }

  toggleAdicional(adicionalId: number): void {
    this.adicionalesSeleccionados[adicionalId] = !this.adicionalesSeleccionados[adicionalId];

    if (!this.producto.adicionales) {
      this.producto.adicionales = [];
    }

    if (this.adicionalesSeleccionados[adicionalId]) {
      const adicional = this.todosAdicionales.find(a => a.adicional_id === adicionalId);
      if (adicional && !this.producto.adicionales.some(a => a.adicional_id === adicionalId)) {
        this.producto.adicionales.push({ ...adicional, cantidad: 1 });
      }
    } else {
      this.producto.adicionales = this.producto.adicionales.filter(a => a.adicional_id !== adicionalId);
    }
  }

  guardarProducto(): void {
    const productoNuevo: Producto = {
      ...this.producto,
      adicionales: this.producto.adicionales?.map(a => ({
        adicional_id: a.adicional_id,
        nombre: a.nombre,
        precio: a.precio,
        cantidad: a.cantidad || 1

        
      }))
    };

    this.productoService.addProducto(productoNuevo).subscribe({
      next: () => this.router.navigate(['/admin/menu']),
      error: (err) => console.error('Error al agregar producto:', err)
    });
  }
}
