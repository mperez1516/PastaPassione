import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adicional } from 'src/app/entidades/adicional/adicional';
import { AdicionalesService } from 'src/app/services/adicionales/adicionales.service';

@Component({
  selector: 'app-adicionales-tabla',
  templateUrl: './adicionales-tabla.component.html',
  styleUrls: ['./adicionales-tabla.component.css']
})
export class AdicionalesTablaComponent implements OnInit {
  adicionales: Adicional[] = [];
  filteredAdicionales: Adicional[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;

  constructor(private adicionalService: AdicionalesService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerAdicionales();
  }

  obtenerAdicionales(): void {
    this.adicionalService.getAdicionales().subscribe({
      next: (data) => {
        this.adicionales = data;
        this.applyFilterAndPagination();
      },
      error: (err) => console.error('Error al cargar adicionales', err)
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
    // Filter adicionales based on search term
    let filtered = this.adicionales;
    if (this.searchTerm) {
      filtered = this.adicionales.filter(adicional =>
        (adicional.nombre?.toLowerCase().includes(this.searchTerm) ||
         adicional.precio?.toString().includes(this.searchTerm))
      );
    }

    // Calculate pagination
    this.totalPages = Math.ceil(filtered.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.filteredAdicionales = filtered.slice(startIndex, startIndex + this.pageSize);
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

  editarAdicional(adicional: Adicional): void {
    this.router.navigate(['admin/detalleAdicional', adicional.adicional_id]);
  }

  eliminarAdicional(adicional: Adicional): void {
    this.adicionalService.deleteAdicional(adicional.adicional_id).subscribe({
      next: () => {
        this.obtenerAdicionales(); // Refresca la lista de adicionales
      },
      error: (err) => {
        console.error('Error al eliminar adicional', err);
      }
    });
  }

  irAAgregar(): void {
    this.router.navigate(['admin/agregarAdicional']);
  }
}