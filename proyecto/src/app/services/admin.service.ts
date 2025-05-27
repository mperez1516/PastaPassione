import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../entidades/administrador/administrador';
import { User } from '../entidades/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = 'http://localhost:8000/Admin/loginAdmin';

   // URL base de tu backend
  private baseUrl: string = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  loginAdmin(user: User): Observable<String> {
    return this.http.post(this.url, user, 
      { responseType: 'text' });
  }

  homeAdmin(): Observable<Administrador> {
    return this.http.get<Administrador>(`${this.baseUrl}/Admin/details`);
  }
}
