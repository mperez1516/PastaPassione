import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OperadorService } from 'src/app/services/Operador/operador.service';

@Component({
  selector: 'app-detalle-operadores',
  templateUrl: './detalle-operadores.component.html',
  styleUrls: ['./detalle-operadores.component.css']
})
export class DetalleOperadoresComponent implements OnInit {

  operador: any = {};  // Aquí se guardarán los datos del operador
  formVisible: boolean = true;
  operadorId: number = 0; // ID del operador obtenido de la URL

  constructor(
    private operadorService: OperadorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.operadorId = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarOperador();
  }

  cargarOperador(): void {
    this.operadorService.obtenerOperadorPorId(this.operadorId).subscribe({
      next: (data) => {
        this.operador = data;
      },
      error: (err) => {
        console.error('Error al cargar el operador:', err);
      }
    });
  }

  guardarCambios(): void {
    this.operadorService.actualizarOperador(this.operadorId, this.operador).subscribe({
      next: () => {
        this.router.navigate(['/admin/operadores']);
      },
      error: (err) => {
        console.error('Error al actualizar el operador:', err);
      }
    });
  }
  
  
}
