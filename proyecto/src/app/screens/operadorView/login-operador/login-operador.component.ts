import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OperadorService } from 'src/app/services/Operador/operador.service';

@Component({
  selector: 'app-login-operador',
  templateUrl: './login-operador.component.html',
  styleUrls: ['./login-operador.component.css']
})
export class LoginOperadorComponent {
  usuario: string = '';
  contrasena: string = '';
  error: string = '';

  constructor(private operadorService: OperadorService, private router: Router) {}

  login(): void {
   this.operadorService.loginOperador({
  usuario: this.usuario,
  contrasena: this.contrasena
}).subscribe({
  next: (res) => {
    console.log('Login exitoso', res);
    this.router.navigate(['/homeOperador']);
  },
  error: (err) => {
    console.error('Error en login:', err);
    this.error = err.error?.error || 'Error desconocido';
  }
});

  }
}
