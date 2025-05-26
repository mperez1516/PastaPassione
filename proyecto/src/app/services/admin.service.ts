import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../entidades/administrador/administrador';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = 'http://localhost:8000/Admin/loginAdmin';

  constructor(private http: HttpClient) {}

  loginAdmin(admin: Administrador): Observable<Administrador> {
    return this.http.post<Administrador>(this.url, admin);
  }
}
