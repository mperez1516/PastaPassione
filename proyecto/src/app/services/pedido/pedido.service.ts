import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from 'src/app/entidades/carro/carro';
import { Pedido } from 'src/app/entidades/pedido/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private baseUrl: string = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  guardarCarrito(carro: Carro): Observable<{ carritoId: number }> {
    return this.http.post<{ carritoId: number }>(`${this.baseUrl}/carritos`, carro);
  }
  generarPedido(carritoId: number, direccionEnvio: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/pedidos/crear-desde-carrito?direccionEnvio=${encodeURIComponent(direccionEnvio)}`, carritoId);
  }

  crearPedido(carritoId: number, direccionEnvio: string): Observable<Pedido> {
    const params = new HttpParams().set('direccionEnvio', direccionEnvio);
    return this.http.post<Pedido>(
      `${this.baseUrl}/pedidos/crear-desde-carrito`,
      carritoId,
      { params }
    );
  }
}
