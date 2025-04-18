import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/entidades/cliente/cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  //Creamos cliente y lo inicializamos en null
  perfil: Cliente | null = null;
  isLoading: boolean = false;
  errorMessage: string | null = null;
  
  //Constructor
  constructor(
    private router: Router,
    private clienteService: ClienteService, 
  ) {}

  ngOnInit(): void {

    const cliente = this.clienteService.obtenerClienteAutenticado();
    if (cliente) {
      this.clienteService.obtenerCliente(cliente.id!).subscribe({
        next: (data) => {
          this.perfil = data;
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'No se pudo cargar el perfil';
          this.isLoading = false;
        }
      });
    } else {
      this.errorMessage = 'No hay cliente autenticado.';
      this.isLoading = false;
      this.router.navigate(['/loginCliente']);
    }
    
  }

  actualizarPerfil() {
    if (!this.perfil?.id) {
      this.errorMessage = "No se puede actualizar el perfil: falta información del perfil o el ID.";
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    this.clienteService.actualizarCliente(this.perfil).subscribe({
      next: () => {
        this.isLoading = false;
        alert('Perfil actualizado con éxito');
        this.router.navigate(['/homeCliente']);
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = "Error al actualizar tu perfil.";
      }

    }); 
  }

  eliminarMiCuenta(): void {
    if (!this.perfil?.id) {
      this.errorMessage = "No se puede eliminar la cuenta en este momento.";
      return;
    }
  
    if (confirm('¿Estás SEGURO de que deseas eliminar tu cuenta? Esta acción es PERMANENTE.')) {
      this.isLoading = true;
      this.errorMessage = null;
  
      this.clienteService.eliminarCliente(this.perfil.id).subscribe({
        next: () => {
          this.isLoading = false;
          alert('Tu cuenta ha sido eliminada.');
          this.router.navigate(['/login']);
        },
        error: () => {
          this.isLoading = false;
          this.errorMessage = "Error al intentar eliminar tu cuenta.";
        }
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/homeCliente']);
  }
  
}
    



