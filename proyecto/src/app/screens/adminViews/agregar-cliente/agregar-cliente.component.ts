import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/entidades/cliente/cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent {
  // Inicializa el objeto cliente
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    correo: '',
    direccion: 0,
    telefono: 0,
    contrasena: ''
  };

  constructor(private clienteService: ClienteService, private router: Router) { }

  guardarCliente() {
    // Llama al método del servicio que hace POST para registrar el cliente
    this.clienteService.registrarCliente(this.cliente).subscribe({
      next: (respuesta) => {
        console.log('Cliente guardado:', respuesta);
        // Navega de vuelta a la lista de clientes o a otra vista de administración
        this.router.navigate(['/admin/usuarios']);
      },
      error: (err) => {
        console.error('Error al guardar el cliente:', err);
      }
    });
  }

  cancelar() {
    // Navega a la vista de clientes sin guardar
    this.router.navigate(['/admin/usuarios']);
  }
}
