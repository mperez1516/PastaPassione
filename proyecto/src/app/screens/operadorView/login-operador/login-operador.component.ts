import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Operador } from 'src/app/entidades/operador/operador';
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
  formOperador: Operador = {
    usuario: '',
    contrasena: '',
    nombre: '',
    idOperador: 0   
  };

  login(form: any){

       this.operadorService.loginOperador(this.formOperador).subscribe(
      (data) => {
        this.router.navigate(['/operador/ver-pedidos']);
        console.log('Login exitoso:', data);
      },

      (error) => {
        console.log(error.error);
        console.log(error.status);
      }

    );
  }
}
