import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  getClienteById(clienteId: number) {
    throw new Error('Method not implemented.');
  }
  // URL base de tu backend
  private baseUrl: string = 'http://localhost:8000';
  // Endpoint para la gestión de clientes
  private clienteTablaEndpoint: string = `${this.baseUrl}/clienteTabla`;

  constructor(private http: HttpClient) {}

  /**
   * Envía las credenciales de login y retorna la respuesta.
   */
  login(correo: string, contrasena: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { correo, contrasena });
  }

  /**
   * Registra un nuevo cliente en el backend.
   */
  registrarCliente(cliente: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/registro/registrar`, cliente);
  }

  /**
   * Obtiene la lista de todos los clientes.
   */
  obtenerClientes(): Observable<any> {
    return this.http.get(`${this.clienteTablaEndpoint}`);
  }

  /**
   * Obtiene la información de un cliente específico por ID.
   */
  obtenerCliente(id: string | number): Observable<any> {
    return this.http.get(`${this.clienteTablaEndpoint}/${id}`);
  }

  /**
   * Actualiza los datos de un cliente.
   * Ahora usa la URL /clienteTabla/{id} para actualizar.
   */
  actualizarCliente(cliente: any): Observable<any> {
    return this.http.put(`${this.clienteTablaEndpoint}/${cliente.id}`, cliente);
  }

  /**
   * Elimina un cliente a partir de su ID.
   */
  eliminarCliente(id: number): Observable<any> {
    return this.http.delete(`${this.clienteTablaEndpoint}/${id}`);
  }
}
