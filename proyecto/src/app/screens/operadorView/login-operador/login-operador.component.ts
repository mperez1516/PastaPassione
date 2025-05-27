import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Operador } from 'src/app/entidades/operador/operador';
import { User } from 'src/app/entidades/user';
import { OperadorService } from 'src/app/services/Operador/operador.service';

@Component({
  selector: 'app-login-operador',
  templateUrl: './login-operador.component.html',
  styleUrls: ['./login-operador.component.css']
})
export class LoginOperadorComponent {

  error: string = '';

  constructor(private operadorService: OperadorService, private router: Router) {}

  //Modelo
  formUser: User = {
    correo: '',
    password: ''
  };

  login(form: any){

       this.operadorService.loginOperador(this.formUser).subscribe(
      (data) => {
        localStorage.setItem('token', String(data));
        this.router.navigate(['/operador/home']);
        console.log('Login exitoso:', data);
      },

      (error) => {
        console.log(error.error);
        console.log(error.status);
      }

    );
  }
}
