import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Adicional } from 'src/app/entidades/adicional/adicional';
import { Producto } from 'src/app/entidades/producto/producto';
import { AdicionalesService } from 'src/app/services/adicionales/adicionales.service';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { switchMap, catchError } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  categorias: string[] = ['Plato Principal', 'Bebida', 'Postre','Entrada'];

  producto: Producto = {
    producto_id: 0,
    nombre: '',
    precio: 0,
    descripcion: '',
    categoria: '',
    adicionales: []
  };
  
  todosAdicionales: Adicional[] = [];
  adicionalesSeleccionados: {[key: number]: boolean} = {};

  formVisible: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private adicionalesService: AdicionalesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      forkJoin([
        this.productoService.getProductoById(+id),
        this.adicionalesService.getAdicionales()
      ]).pipe(
        catchError(err => {
          console.error('Error:', err);
          return of(null);
        })
      ).subscribe({
        next: (result: [Producto, Adicional[]] | null) => {
          if (result) {
            const [producto, adicionales] = result;
            this.producto = producto;
            this.todosAdicionales = adicionales;
            
            // Marcar los adicionales que ya están asignados al producto
            if (this.producto.adicionales) {
              this.producto.adicionales.forEach(adicional => {
                this.adicionalesSeleccionados[adicional.adicional_id] = true;
              });
            }
          }
        },
        error: (err) => {
          console.error('Error en la suscripción:', err);
        }
      });
    }
  }
  getCantidadAdicional(adicionalId: number): number {
    if (!this.producto.adicionales) return 1;
    
    const adicional = this.producto.adicionales.find(a => a.adicional_id === adicionalId);
    return adicional ? adicional.cantidad || 1 : 1;
  }
  toggleAdicional(adicionalId: number): void {
    this.adicionalesSeleccionados[adicionalId] = !this.adicionalesSeleccionados[adicionalId];
    
    if (!this.producto.adicionales) {
      this.producto.adicionales = [];
    }
    
    if (this.adicionalesSeleccionados[adicionalId]) {
      // Agregar el adicional si no está ya presente
      const adicional = this.todosAdicionales.find(a => a.adicional_id === adicionalId);
      if (adicional && !this.producto.adicionales.some(a => a.adicional_id === adicionalId)) {
        this.producto.adicionales.push({...adicional, cantidad: 1});
      }
    } else {
      // Remover el adicional
      this.producto.adicionales = this.producto.adicionales.filter(a => a.adicional_id !== adicionalId);
    }
  }

  actualizarCantidad(adicionalId: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const cantidad = parseInt(input.value, 10) || 1;
    
    // Asegurarse que adicionales existe
    this.producto.adicionales = this.producto.adicionales || [];
    
    let adicional = this.producto.adicionales.find(a => a.adicional_id === adicionalId);
    
    if (!adicional) {
      // Si no existe, agregarlo (puede pasar si el usuario cambia cantidad directamente)
      const nuevoAdicional = this.todosAdicionales.find(a => a.adicional_id === adicionalId);
      if (nuevoAdicional) {
        adicional = {...nuevoAdicional, cantidad};
        this.producto.adicionales.push(adicional);
        this.adicionalesSeleccionados[adicionalId] = true;
      }
    } else {
      adicional.cantidad = cantidad;
    }
  }

  guardarCambios(): void {
    if (this.producto.producto_id) {
      // Crear objeto con la estructura limpia para el backend
      const productoActualizado: Producto = {
        producto_id: this.producto.producto_id,
        nombre: this.producto.nombre,
        precio: this.producto.precio,
        descripcion: this.producto.descripcion,
        categoria: this.producto.categoria,
        adicionales: this.producto.adicionales?.map(a => ({
          adicional_id: a.adicional_id,
          nombre: a.nombre,
          precio: a.precio,
          cantidad: a.cantidad || 1
        }))
      };
      console.log(productoActualizado);
      this.productoService.updateProducto(this.producto.producto_id, productoActualizado).subscribe({
        next: () => {
          this.router.navigate(['/admin/menu']);
        },
        error: (err) => {
          console.error('Error al actualizar producto:', err);
          // Manejo adicional de errores si es necesario
        }
      });
    }
  }

  
}