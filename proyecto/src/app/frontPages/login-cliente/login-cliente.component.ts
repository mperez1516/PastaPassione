import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent {
  correo: string = '';
  contrasena: string = '';
  error: string = '';

  constructor(private router: Router, private clienteService: ClienteService) {}

  login() {
    this.clienteService.login(this.correo, this.contrasena).subscribe({
      next: (response) => {
        if (response.success) {
          console.log('Cliente autenticado:', response.cliente);
          // Puedes guardar el cliente en localStorage si deseas mantener sesión:
          localStorage.setItem('cliente', JSON.stringify(response.cliente));
          this.router.navigate(['/homeCliente']);
        } else {
          this.error = response.message || 'Error al iniciar sesión';
        }
      },
      error: (err) => {
        console.error('Error de conexión:', err);
        this.error = 'Error del servidor o de red';
      }
    });
  }
}
