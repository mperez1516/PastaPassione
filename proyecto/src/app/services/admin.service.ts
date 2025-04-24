import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = 'http://localhost:8000/Admin/loginAdmin';

  constructor(private http: HttpClient) {}

  loginAdmin(datos: { usuario: string; contrasena: string }): Observable<any> {
    return this.http.post(this.url, datos);
  }
}
