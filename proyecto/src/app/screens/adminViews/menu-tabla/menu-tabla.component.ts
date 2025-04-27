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
  // Atributos
  detalleProducto!: Producto;
  productosList: Producto[] = [];
  adicionalesList: Adicional[] = [];
  
  // Pagination and Search attributes
  filteredProductos: Producto[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;
  searchTerm: string = '';

  constructor(
    private productoService: ProductoService,
    private adicionalService: AdicionalesService
  ) {}

  ngOnInit(): void {
    this.obtenerProductos();
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
      next: (productos) => {
        this.productosList = productos;
        this.applyFilterAndPagination();
      },
      error: (err) => console.error('Error al obtener productos:', err)
    });
  }

  // Search filter method
  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value.toLowerCase();
    this.currentPage = 1; // Reset to first page on search
    this.applyFilterAndPagination();
  }

  // Apply filter and pagination
  applyFilterAndPagination() {
    // Filter products based on search term
    let filtered = this.productosList;
    if (this.searchTerm) {
      filtered = this.productosList.filter(producto =>
        producto.nombre?.toLowerCase().includes(this.searchTerm) ||
        producto.descripcion?.toLowerCase().includes(this.searchTerm)
      );
    }

    // Calculate pagination
    this.totalPages = Math.ceil(filtered.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.filteredProductos = filtered.slice(startIndex, startIndex + this.pageSize);
  }

  // Pagination methods
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.applyFilterAndPagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.applyFilterAndPagination();
    }
  }

  editarProducto(producto: Producto) {
    this.detalleProducto = producto;
  }

  eliminarProducto(producto: Producto) {
    if (producto.producto_id != null) {
      this.productoService.desactivarProducto(producto.producto_id).subscribe({
        next: () => {
          this.obtenerProductos();
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