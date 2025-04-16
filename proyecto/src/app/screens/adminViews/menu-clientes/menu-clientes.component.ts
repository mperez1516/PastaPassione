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
  searchTerm: string = '';

  constructor(private clienteService: ClienteService, private router: Router) {}

  ngOnInit() {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.clienteService.obtenerClientes().subscribe((data: any[]) => {
      this.clientes = data;
    });
  }

  get clientesFiltrados(): any[] {
    if (!this.searchTerm.trim()) return this.clientes;

    const lowerTerm = this.searchTerm.toLowerCase();
    return this.clientes.filter(cliente =>
      Object.values(cliente).some(valor =>
        valor?.toString().toLowerCase().includes(lowerTerm)
      )
    );
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
