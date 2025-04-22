import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from 'src/app/entidades/carro/carro';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private apiUrl = 'http://localhost:8080/carrito';

  constructor(private http: HttpClient) {}

  agregarProductoAlCarrito(
    clienteId: number,
    productoId: number,
    cantidad: number,
    adicionalesIds: number[] = []
  ): Observable<Carro> {
    const params = new HttpParams()
      .set('clienteId', clienteId)
      .set('productoId', productoId)
      .set('cantidad', cantidad);

    return this.http.post<Carro>(`${this.apiUrl}/agregar`, adicionalesIds, { params });
  }

  obtenerCarrito(clienteId: number): Observable<Carro> {
    return this.http.get<Carro>(`${this.apiUrl}/cliente/${clienteId}`);
  }
}
