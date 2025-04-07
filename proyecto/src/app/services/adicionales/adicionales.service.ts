import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adicional } from 'src/app/entidades/adicional/adicional';

@Injectable({
  providedIn: 'root'
})
export class AdicionalesService {

  private baseUrl = "http://localhost:8000/adicionales"; // Asegúrate de que coincida con tu backend

  constructor(
    private http:HttpClient
  ) { }

  getAdicionales(): Observable<Adicional[]> {
    return this.http.get<Adicional[]>(this.baseUrl);
  }

  // Obtener un adicional por ID
  getAdicionalById(id: number): Observable<Adicional> {
    return this.http.get<Adicional>(`${this.baseUrl}/${id}`);
  }

  // Crear nuevo adicional
  addAdicional(adicional: Omit<Adicional, 'adicional_id'>): Observable<Adicional> {
    return this.http.post<Adicional>(this.baseUrl, adicional);
  }
  
  

  // Actualizar adicional
  updateAdicional(id: number, adicional: Adicional): Observable<Adicional> {
    return this.http.put<Adicional>(`${this.baseUrl}/${id}`, adicional);
  }
  

  // Eliminar adicional
  deleteAdicional(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  

}
