import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Administrador } from 'src/app/entidades/administrador/administrador';
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

  //Modelo 
  formAdmin: Administrador = {
    usuario: '',
    contrasena: '',
    id: 0,
    nombre: '',
    apellido: ''
  }
  login(form: any) {
    this.adminService.loginAdmin(this.formAdmin).subscribe(
      (data) => {
        this.router.navigate(['/homeAdmin']);
        console.log('Login exitoso:', data);
      },

      (error) => {
        console.log(error.error);
        console.log(error.status);
      }

    );
  }

}
