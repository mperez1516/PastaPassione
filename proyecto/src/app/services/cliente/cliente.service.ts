import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseUrl = 'http://localhost:8000/login';

  constructor(private http: HttpClient) {}

  login(correo: string, contrasena: string): Observable<any> {
    return this.http.post(this.baseUrl, { correo, contrasena });
  }

  registrarCliente(cliente: any): Observable<any> {
    return this.http.post('http://localhost:8000/registro/registrar', cliente);
  }
  
  
}
