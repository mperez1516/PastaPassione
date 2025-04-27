import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-clientes',
  templateUrl: './menu-clientes.component.html',
  styleUrls: ['./menu-clientes.component.css']
})
export class MenuClientesComponent implements OnInit {
  clientes: any[] = [];
  filteredClientes: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.clienteService.obtenerClientes().subscribe((data: any[]) => {
      this.clientes = data;
      this.applyFilterAndPagination();
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
    // Filter clients based on search term
    let filtered = this.clientes;
    if (this.searchTerm) {
      filtered = this.clientes.filter(cliente =>
        Object.values(cliente).some(valor =>
          valor?.toString().toLowerCase().includes(this.searchTerm)
        )
      );
    }

    // Calculate pagination
    this.totalPages = Math.ceil(filtered.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.filteredClientes = filtered.slice(startIndex, startIndex + this.pageSize);
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

  editarCliente(id: number) {
    this.router.navigate(['/admin/clientes/editar', id]);
  }

  eliminarCliente(id: number) {
    this.clienteService.eliminarCliente(id).subscribe(() => {
      this.obtenerClientes();
    });
  }

  agregarCliente() {
    this.router.navigate(['/admin/clientes/agregar']);
  }
}