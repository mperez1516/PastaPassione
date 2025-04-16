import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Adicional } from 'src/app/entidades/adicional/adicional';
import { AdicionalesService } from 'src/app/services/adicionales/adicionales.service';

@Component({
  selector: 'app-agregar-adicional',
  templateUrl: './agregar-adicional.component.html',
  styleUrls: ['./agregar-adicional.component.css']
})
export class AgregarAdicionalComponent {

  adicional: Omit<Adicional, 'adicional_id'> = {
    nombre: '',
    precio: 0,
    cantidad: 0
  };
  constructor(private adicionalService: AdicionalesService, private router: Router) {}
  guardar(): void {
    console.log(this.adicional);
    this.adicionalService.addAdicional(this.adicional).subscribe({
      next: () => {
        this.router.navigate(['/admin/adicionales']);
      },
      error: (err) => {
        console.error('Error al guardar adicional', err);
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/admin/adicionales']);
  }

}
