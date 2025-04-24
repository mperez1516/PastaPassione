import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  usuario: string = '';
  contrasena: string = '';
  error: string = '';

  constructor(private adminService: AdminService, private router: Router) {}

  login(): void {
    const datosLogin = {
      usuario: this.usuario,
      contrasena: this.contrasena
    };

    this.adminService.loginAdmin(datosLogin).subscribe({
      next: (res) => {
        console.log('Login exitoso', res);
        this.router.navigate(['/homeAdmin']);
      },
      error: (err) => {
        console.error('Error en login:', err);
        this.error = err.error?.error || 'Error desconocido';
      }
    });
  }
}
