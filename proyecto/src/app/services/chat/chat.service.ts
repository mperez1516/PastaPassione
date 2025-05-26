import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'http://localhost:8000/api/chat';

  constructor(private http: HttpClient) {}

  recomendarPlato(mensaje: string): Observable<string> {
    return this.http.post(`${this.apiUrl}/recomendar`, mensaje, { responseType: 'text' });
  }
}

