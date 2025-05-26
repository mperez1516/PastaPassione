import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/entidades/cliente/cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent {
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    direccion: 0,
    telefono: 0
  };

  confirmPassword: string = '';
  error: string = '';
  exito: string = '';

  constructor(private clienteService: ClienteService, private router: Router) {}

  registrar(form: any) {
    if (this.cliente.contrasena !== this.confirmPassword) {
      this.error = 'Las contraseñas no coinciden';
      return;
    }

    this.clienteService.registrarCliente(this.cliente).subscribe({
      next: () => {
        this.exito = '¡Registro exitoso! Ahora puedes iniciar sesión.';
        this.router.navigate(['/loginCliente']);
      },
      error: (err) => {
        this.error = 'Error al registrar cliente';
        console.error(err);
      }
    });
  }
}
