import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adicional } from 'src/app/entidades/adicional/adicional';
import { AdicionalesService } from 'src/app/services/adicionales/adicionales.service';

@Component({
  selector: 'app-adicionales-tabla',
  templateUrl: './adicionales-tabla.component.html',
  styleUrls: ['./adicionales-tabla.component.css']
})
export class AdicionalesTablaComponent implements OnInit {
  adicionales: Adicional[] = [];
  busqueda: string = '';

  constructor(private adicionalService: AdicionalesService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerAdicionales();
  }

  obtenerAdicionales(): void {
    this.adicionalService.getAdicionales().subscribe({
      next: (data) => this.adicionales = data,
      error: (err) => console.error('Error al cargar adicionales', err)
    });
  }

  adicionalesFiltrados(): Adicional[] {
    return this.adicionales.filter(a =>
      a.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  editarAdicional(adicional: Adicional): void {
    this.router.navigate(['detalleAdicional', adicional.adicional_id]);
  }

  eliminarAdicional(adicional: Adicional): void {
      this.adicionalService.deleteAdicional(adicional.adicional_id).subscribe({
        next: () => {
          this.obtenerAdicionales();
        },
        error: (err) => {
          console.error('Error al eliminar adicional', err);
        }
      });
    
  }

  irAAgregar(): void {
    this.router.navigate(['agregarAdicional']);
  }
}
