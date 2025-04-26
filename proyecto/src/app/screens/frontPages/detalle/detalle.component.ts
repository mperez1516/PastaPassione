import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Adicional } from 'src/app/entidades/adicional/adicional';
import { Producto } from 'src/app/entidades/producto/producto';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService,
    private fb: FormBuilder
  ) {
    this.productoForm = this.fb.group({
      adicionalesSeleccionados: this.fb.array([])
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProductoWithAdicionales(+id);
      this.loadAllAdicionales();
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

  loadAllAdicionales(): void {
    this.productoService.getAdicionales().subscribe({
      next: (adicionales) => {
        this.allAdicionales = adicionales;
        if (this.producto) {
          this.initializeAdicionalesForm();
        }
      },
      error: (err) => {
        console.error('Error al cargar adicionales:', err);
      }
    });
  }

  initializeAdicionalesForm(): void {
    while (this.adicionalesSeleccionados.length !== 0) {
      this.adicionalesSeleccionados.removeAt(0);
    }

    this.allAdicionales.forEach(adicional => {
      const isSelected = this.productoAdicionales.some(
        a => a.adicional_id === adicional.adicional_id
      );
      const selectedAdicional = this.productoAdicionales.find(
        a => a.adicional_id === adicional.adicional_id
      );
      const cantidad = selectedAdicional ? selectedAdicional.cantidad : 0;

      this.adicionalesSeleccionados.push(
        this.fb.group({
          adicional_id: [adicional.adicional_id],
          nombre: [adicional.nombre],
          precio: [adicional.precio],
          selected: [isSelected],
          cantidad: [cantidad]
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
    if (!this.producto) return;

    const adicionalesSeleccionados = this.adicionalesSeleccionados.value
      .filter((a: any) => a.selected && a.cantidad > 0)
      .map((a: any) => ({
        adicional_id: a.adicional_id,
        nombre: a.nombre,
        precio: a.precio,
        cantidad: a.cantidad
      }));

    const productoParaCarrito = {
      ...this.producto,
      adicionales: adicionalesSeleccionados
    };

    console.log('Producto para carrito:', productoParaCarrito);
    alert('Producto agregado al carrito con los adicionales seleccionados');
  }

  getRutaImagen(categoria: string, nombre: string): string {
    const categoriaNormalizada = categoria.trim().toLowerCase().replace(/\s+/g, '');
    const nombreFormateado = nombre.toLowerCase().replace(/ /g, '-') + '.jpg';
    return `assets/Imagenes/menu/${categoriaNormalizada}/${nombreFormateado}`;
  }


}
