import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/entidades/cliente/cliente';
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
  formCliente: Cliente = {
    correo: '',
    contrasena: '',
    nombre: '',
    apellido: '',
    telefono: 0,
    direccion: 0
  }

  login(form: any) {
    this.clienteService.login(this.formCliente).subscribe(
      (data) => {
        this.router.navigate(['/homeCliente']);
        console.log('Login exitoso:', data);
      },
      (error) => {
        console.log(error.error);
        console.log(error.status);
      }
    );
  }
}
