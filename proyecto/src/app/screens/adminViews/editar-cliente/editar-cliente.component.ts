import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  cliente: any = {};

  constructor(
    private route: ActivatedRoute,
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtener el ID del cliente de la URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obtenerCliente(id);
    }
  }

  obtenerCliente(id: string) {
    this.clienteService.obtenerCliente(id).subscribe({
      next: (data) => {
        this.cliente = data;
      },
      error: (err) => {
        console.error('Error obteniendo el cliente', err);
      }
    });
  }

  actualizarCliente() {
    this.clienteService.actualizarCliente(this.cliente).subscribe({
      next: (data) => {
        console.log('Cliente actualizado:', data);
        // Redirecciona a la lista de clientes, por ejemplo
        this.router.navigate(['/admin/usuarios']);
      },
      error: (err) => {
        console.error('Error al actualizar el cliente', err);
      }
    });
  }

  cancelar() {
    this.router.navigate(['/admin/usuarios']);
  }
}
