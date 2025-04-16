import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent {
  cliente = {
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
    direccion: '',
    telefono: ''
  };

  confirmPassword: string = '';
  error: string = '';
  exito: string = '';

  constructor(private clienteService: ClienteService, private router: Router) {}

  registrar() {
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
