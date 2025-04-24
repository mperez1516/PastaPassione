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
}
