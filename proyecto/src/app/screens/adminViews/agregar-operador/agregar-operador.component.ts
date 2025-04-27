import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OperadorService } from 'src/app/services/Operador/operador.service';

@Component({
  selector: 'app-agregar-operador',
  templateUrl: './agregar-operador.component.html',
  styleUrls: ['./agregar-operador.component.css']
})
export class AgregarOperadorComponent {

  operador = {
    nombre: '',
    usuario: '',
    contrasena: '',
    disponible: true
  };

  mostrarContrasena: boolean = false;

  constructor(
    private operadorService: OperadorService,
    private router: Router
  ) {}

  guardarOperador() {
    this.operadorService.crearOperador(this.operador).subscribe({
      next: (response) => {
        console.log('Operador creado exitosamente:', response);
        this.router.navigate(['/admin/operadores']); // Redirige a la lista de operadores o a donde necesites
      },
      error: (error) => {
        console.error('Error al crear el operador:', error);
      }
    });
  }

  cancelar() {
    this.router.navigate(['/admin/operadores']); // Redirige donde tú quieras al cancelar
  }
}
