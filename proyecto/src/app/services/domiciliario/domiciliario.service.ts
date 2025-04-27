import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Domiciliario } from 'src/app/entidades/domiciliario/domiciliario';

@Injectable({
  providedIn: 'root'
})
export class DomiciliarioService {
  private baseUrl = 'http://localhost:8000/domiciliario'; 

  constructor(private http: HttpClient) { }

  // Obtener todos los domiciliarios
  getAllDomiciliarios(): Observable<Domiciliario[]> {
    return this.http.get<Domiciliario[]>(`${this.baseUrl}`);
  }

  // Obtener domiciliarios disponibles
  getDomiciliariosDisponibles(): Observable<Domiciliario[]> {
    return this.http.get<Domiciliario[]>(`${this.baseUrl}/disponibles`);
  }

  // Obtener domiciliario por ID
  getDomiciliarioById(id: number): Observable<Domiciliario> {
    return this.http.get<Domiciliario>(`${this.baseUrl}/${id}`);
  }

  // Crear domiciliario
  createDomiciliario(domiciliario: Domiciliario): Observable<Domiciliario> {
    return this.http.post<Domiciliario>(`${this.baseUrl}`, domiciliario);
  }

  // Actualizar domiciliario
  updateDomiciliario(id: number, domiciliario: Domiciliario): Observable<Domiciliario> {
    return this.http.put<Domiciliario>(`${this.baseUrl}/${id}`, domiciliario);
  }

  // Eliminar domiciliario
  deleteDomiciliario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
