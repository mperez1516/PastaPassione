import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Adicional } from 'src/app/entidades/adicional/adicional';
import { AdicionalesService } from 'src/app/services/adicionales/adicionales.service';

@Component({
  selector: 'app-detalle-adicional',
  templateUrl: './detalle-adicional.component.html',
  styleUrls: ['./detalle-adicional.component.css']
})
export class DetalleAdicionalComponent implements OnInit {
  adicional!: Adicional;

  constructor(
    private route: ActivatedRoute,
    private adicionalService: AdicionalesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.adicionalService.getAdicionalById(+id).subscribe({
        next: (data) => this.adicional = data,
        error: (err) => {
          console.error('Error al cargar adicional:', err);
        }
      });
    }
  }

  guardarCambios(): void {
    this.adicionalService.updateAdicional(this.adicional.adicional_id, this.adicional).subscribe({
      next: () => {
        this.router.navigate(['/admin/adicionales']);
      },
      error: (err) => {
        console.error('Error al actualizar adicional:', err);
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/admin/adicionales']);
  }


}
