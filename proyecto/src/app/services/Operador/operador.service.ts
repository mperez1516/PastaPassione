import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperadorService {
  private baseUrl = 'http://localhost:8000/Operador'; // Asegúrate que coincida con tu backend

  constructor(private http: HttpClient) {}

  loginOperador(usuario: string, contrasena: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/loginOperador`, {
      usuario,
      contrasena
    });
  }

  obtenerOperadores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listar`);
  }

  agregarOperador(operador: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/agregar`, operador);
  }

  actualizarOperador(id: number, operador: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/actualizar/${id}`, operador);
  }

  eliminarOperador(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eliminar/${id}`);
  }

  obtenerOperadorPorId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  crearOperador(operador: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/crear`, operador);
  }
  

}
