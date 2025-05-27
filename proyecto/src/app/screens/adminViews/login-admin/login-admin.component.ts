import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Administrador } from 'src/app/entidades/administrador/administrador';
import { User } from 'src/app/entidades/user';
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
  formUser: User = {
    correo: '',
    password: '',
  }

  login(form: any) {
    this.adminService.loginAdmin(this.formUser).subscribe(
      (data) => {
        localStorage.setItem('token', String(data));
        this.router.navigate(['/admin/home']);
        console.log('Login exitoso:', data);
      },

      (error) => {
        console.log(error.error);
        console.log(error.status);
      }

    );
  }

}
