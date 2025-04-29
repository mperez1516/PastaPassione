import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Adicional } from 'src/app/entidades/adicional/adicional';
import { CarritoItem } from 'src/app/entidades/carrito/carrito-item';
import { Cliente } from 'src/app/entidades/cliente/cliente';
import { Producto } from 'src/app/entidades/producto/producto';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CarritoService } from 'src/app/services/carrito/carrito.service';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  producto: Producto | null = null;
  allAdicionales: Adicional[] = []; // Todos los adicionales disponibles
  productoAdicionales: Adicional[] = []; // Adicionales relacionados con este producto
  loading = true;
  errorMessage = '';
  productoForm: FormGroup;
  cantidad: number = 1;
  cliente: Cliente | null = null; 

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private productoService: ProductoService,
    private carritoService: CarritoService,
    private fb: FormBuilder
  ) {
    this.productoForm = this.fb.group({
      adicionalesSeleccionados: this.fb.array([])
    });
  }

  ngOnInit(): void {

    this.authService.getUsuarioLogueado()
    .subscribe(usuario => {
      this.cliente = usuario;
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProductoWithAdicionales(+id);
    } else {
      this.errorMessage = 'ID de producto no válido';
      this.loading = false;
    }
  }

  get adicionalesSeleccionados(): FormArray {
    return this.productoForm.get('adicionalesSeleccionados') as FormArray;
  }

  loadProductoWithAdicionales(id: number): void {
    this.productoService.getProductoWithAdicionales(id).subscribe({
      next: (producto) => {
        this.producto = producto;
        this.productoAdicionales = producto.adicionales || [];
        this.initializeAdicionalesForm();
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Error al cargar el producto';
        this.loading = false;
        console.error(err);
      }
    });
  }


  initializeAdicionalesForm(): void {
    // Limpiar el FormArray existente
    while (this.adicionalesSeleccionados.length !== 0) {
      this.adicionalesSeleccionados.removeAt(0);
    }

    // Solo cargar los adicionales relacionados con el producto
    this.productoAdicionales.forEach(adicional => {
      this.adicionalesSeleccionados.push(
        this.fb.group({
          adicional_id: [adicional.adicional_id],
          nombre: [adicional.nombre],
          precio: [adicional.precio],
          selected: [true], // Marcados por defecto ya que son los del producto
          cantidad: [adicional.cantidad || 1]
        })
      );
    });
  }

  onCheckboxChange(index: number): void {
    const adicionalGroup = this.adicionalesSeleccionados.at(index) as FormGroup;
    const isSelected = adicionalGroup.get('selected')?.value;
    
    if (!isSelected) {
      adicionalGroup.get('cantidad')?.setValue(0);
    } else {
      adicionalGroup.get('cantidad')?.setValue(1);
    }
  }

  onCantidadChange(index: number, event: any): void {
    const cantidad = +event.target.value;
    const adicionalGroup = this.adicionalesSeleccionados.at(index) as FormGroup;
    
    if (cantidad > 0) {
      adicionalGroup.get('selected')?.setValue(true);
    } else {
      adicionalGroup.get('selected')?.setValue(false);
    }
  }

  agregarAlCarrito(): void {
    if (!this.producto) {
      return;
    }
  
    const adicionalesSeleccionados = this.adicionalesSeleccionados.value
      .filter((a: any) => a.selected && a.cantidad > 0)
      .map((a: any) => ({
        adicional_id: a.adicional_id,
        nombre: a.nombre,
        precio: a.precio,
        cantidad: a.cantidad
      }));
  
    if (this.cliente) {
      // Usuario logueado -> Llamada al backend
      const adicionalesIds = adicionalesSeleccionados.map((a: { adicional_id: number, nombre: string, precio: number, cantidad: number }) => a.adicional_id);
      this.carritoService.agregarProductoAlCarrito(
        this.cliente.id!,
        this.producto.producto_id,
        this.cantidad,
        adicionalesIds
      ).subscribe({
        next: (carritoActualizado) => {
          console.log('Producto agregado al carrito (backend):', carritoActualizado);
          this.router.navigate(['/menu']);
        },
        error: (err) => {
          console.error('Error al agregar al carrito:', err);
          this.errorMessage = 'Error al agregar el producto al carrito';
        }
      });
    } else {
      // Usuario NO logueado -> Guardar en localStorage
      const carritoGuardado = localStorage.getItem("carrito");
      let carrito = carritoGuardado ? JSON.parse(carritoGuardado) : { id: 0, cliente: null, items: [] };
  
      const existente = carrito.items.find((item: CarritoItem) => item.producto.producto_id === this.producto!.producto_id);
  
      if (existente) {
        existente.cantidad += this.cantidad;
      } else {
        const nuevoItem: CarritoItem = {
          id: 0,
          producto: this.producto,
          cantidad: this.cantidad,
          adicionales: adicionalesSeleccionados // puedes guardar los adicionales si quieres
        };
        carrito.items.push(nuevoItem);
      }
  
      localStorage.setItem("carrito", JSON.stringify(carrito));
      console.log('Producto agregado localmente al carrito:', carrito);
      this.router.navigate(['/menu']);
    }
  }
  
  
  calcularTotal(): number {
    if (!this.producto) return 0;

    let total = this.producto.precio * this.cantidad;
    
    this.adicionalesSeleccionados.controls.forEach(control => {
      const group = control as FormGroup;
      if (group.get('selected')?.value) {
        total += group.get('precio')?.value * (group.get('cantidad')?.value || 1);
      }
    });

    return total;
  }

  getRutaImagen(categoria: string, nombre: string): string {
    const categoriaNormalizada = categoria.trim().toLowerCase().replace(/\s+/g, '');
    const nombreFormateado = nombre.toLowerCase().replace(/ /g, '-') + '.jpg';
    return `assets/Imagenes/menu/${categoriaNormalizada}/${nombreFormateado}`;
  }
}

