import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Operador } from 'src/app/entidades/operador/operador';
import { User } from 'src/app/entidades/user';

@Injectable({
  providedIn: 'root'
})
export class OperadorService {
  private baseUrl = 'http://localhost:8000/Operador'; // Asegúrate que coincida con tu backend

  constructor(private http: HttpClient) {}

  loginOperador(user: User): Observable<String> {
    return this.http.post(`${this.baseUrl}/loginOperador`, user, 
      { responseType: 'text' });
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

  homeOperador(): Observable<Operador> {
    return this.http.get<Operador>(`${this.baseUrl}/Operador/details`);
  }
  

}
