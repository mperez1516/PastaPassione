import { Component, OnInit } from '@angular/core';
import { OperadorService } from 'src/app/services/Operador/operador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operadores-tabla',
  templateUrl: './operadores-tabla.component.html',
  styleUrls: ['./operadores-tabla.component.css']
})
export class OperadoresTablaComponent implements OnInit {
  operadores: any[] = [];
  filteredOperadores: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;

  constructor(
    private operadorService: OperadorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerOperadores();
  }

  obtenerOperadores(): void {
    this.operadorService.obtenerOperadores().subscribe(
      (data: any[]) => {
        this.operadores = data;
        this.applyFilterAndPagination();
      },
      (error) => {
        console.error('Error al obtener operadores:', error);
      }
    );
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value.toLowerCase();
    this.currentPage = 1; // Reset to first page on search
    this.applyFilterAndPagination();
  }

  applyFilterAndPagination(): void {
    // Filter operadores based on search term
    let filtered = this.operadores;
    if (this.searchTerm) {
      filtered = this.operadores.filter(operador =>
        (operador.nombre?.toLowerCase().includes(this.searchTerm) ||
         operador.usuario?.toLowerCase().includes(this.searchTerm) ||
         (operador.disponible ? 'sí' : 'no').includes(this.searchTerm))
      );
    }

    // Calculate pagination
    this.totalPages = Math.ceil(filtered.length / this.pageSize);
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.filteredOperadores = filtered.slice(startIndex, startIndex + this.pageSize);
  }

  eliminarOperador(operador: any): void {
    if (confirm(`¿Seguro que deseas eliminar al operador ${operador.nombre}?`)) {
      this.operadorService.eliminarOperador(operador.id).subscribe(
        () => {
          this.operadores = this.operadores.filter(o => o.id !== operador.id);
          this.applyFilterAndPagination();
        },
        (error) => {
          console.error('Error al eliminar operador:', error);
        }
      );
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.applyFilterAndPagination();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.applyFilterAndPagination();
    }
  }
}