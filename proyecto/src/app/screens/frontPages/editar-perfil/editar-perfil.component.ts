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
    private route : ActivatedRoute
    
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    //Obtenemos el id de la ruta
    const idRoute = this.route.snapshot.paramMap.get('id');
    //Verificamos si el id es un número
    if(idRoute !== null){
      const id = Number(idRoute);

      if(isNaN(id)){
        this.errorMessage = 'El ID proporcionado no es válido.';
        this.isLoading = false;
        return;
      }

      this.clienteService.obtenerCliente(id).subscribe({
        next:(cliente: Cliente) => {
          this.perfil = cliente;
          this.isLoading = false;
        }
        ,error: (error) => {
          this.errorMessage = 'Error al obtener el cliente';
          console.error(error);
          this.isLoading = false;
        }
      });
    } else {
      this.errorMessage = 'ID de cliente no proporcionado en la ruta.';
      this.isLoading = false;
    }
  }

  actualizarPerfil() {
    if (!this.perfil || this.perfil.id === undefined || this.perfil.id === null) {
      this.errorMessage = "No se puede actualizar el perfil: falta información del perfil o el ID.";
      console.error("Falta el ID del cliente o el perfil para la actualización.");
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    this.clienteService.actualizarCliente(this.perfil).subscribe({
      next: (data) => {
        console.log('Perfil actualizado:', data);
        this.isLoading = false;
        alert('Perfil actualizado con éxito');
        this.router.navigate(['/homeCliente']);
      },
      error: (err) => {
        console.error('Error al actualizar el perfil', err);
        this.isLoading = false;
        this.errorMessage = "Error al actualizar tu perfil.";
      }

    }); 
  }

  eliminarMiCuenta(): void {
    if (!this.perfil || this.perfil.id === undefined || this.perfil.id === null) {
      console.error('No se puede eliminar la cuenta: ID del cliente no disponible.');
      this.errorMessage = "No se puede eliminar la cuenta en este momento.";
      return;
    }
  
    if (confirm('¿Estás SEGURO de que deseas eliminar tu cuenta? Esta acción es PERMANENTE.')) {
      this.isLoading = true;
      this.errorMessage = null;
  
      this.clienteService.eliminarCliente(this.perfil.id).subscribe({
        next: () => {
          console.log('Cuenta eliminada');
          this.isLoading = false;
          alert('Tu cuenta ha sido eliminada.');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Error al eliminar la cuenta', err);
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
    



