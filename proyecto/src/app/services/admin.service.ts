
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8000/admin';

  constructor(private http: HttpClient) { }

  loginAdmin(usuario: string, contrasena: string): Observable<any> {
    const credentials = { usuario, contrasena };
    return this.http.post(`${this.baseUrl}/login`, credentials);
  }
}
