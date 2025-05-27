import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/entidades/cliente/cliente';
import { User } from 'src/app/entidades/user';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent {
  
  error: string = '';

  constructor(private router: Router, private clienteService: ClienteService){}

  //Modelo
  formUser: User = {
    correo: '',
    password: '',
  };

  login(form: any) {
    this.clienteService.login(this.formUser).subscribe(
      (data) => {
        localStorage.setItem('token', String(data));
        this.router.navigate(['/cliente/home']);
        console.log('Login exitoso:', data);
      },
      (error) => {
        console.log(error.error);
        console.log(error.status);
      }
    );
  }
}
