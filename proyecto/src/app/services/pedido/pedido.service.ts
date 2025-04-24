import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Carro } from 'src/app/entidades/carro/carro';
import { Pedido } from 'src/app/entidades/pedido/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private baseUrl: string = 'http://localhost:8000';
  constructor(private http: HttpClient) { }

  guardarCarrito(carro: Carro): Observable<{ pedidoId: number, carritoId: number }> {
    const clienteId = carro.cliente?.id;
    const productoId = carro.items[0].producto.producto_id;
    const cantidad = carro.items[0].cantidad;
    const adicionalesIds = carro.items[0].adicionales?.map(adicional => adicional.id) || [];
  
    if (!clienteId) {
      console.error('El cliente no está asignado.');
      return of({ pedidoId: 0, carritoId: 0 });    }
  
    const params = new HttpParams()
      .set('clienteId', clienteId.toString())
      .set('productoId', productoId.toString())
      .set('cantidad', cantidad.toString());
  
    return this.http.post<{ pedidoId: number, carritoId: number }>(
      `${this.baseUrl}/carritos`,
      adicionalesIds, // Esto va como body
      { params }
    );
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

  obtenerPedidos(opciones?: {
    clienteId?: number,
    operadorId?: number,
    domiciliarioId?: number,
    pendientes?: boolean
  }): Observable<Pedido[]> {
    if (opciones?.clienteId) {
      return this.http.get<Pedido[]>(`${this.baseUrl}/pedidos/cliente/${opciones.clienteId}`);
    }
  
    if (opciones?.operadorId) {
      return this.http.get<Pedido[]>(`${this.baseUrl}/pedidos/operador/${opciones.operadorId}`);
    }
  
    if (opciones?.domiciliarioId) {
      return this.http.get<Pedido[]>(`${this.baseUrl}/pedidos/domiciliario/${opciones.domiciliarioId}`);
    }
  
    if (opciones?.pendientes) {
      return this.http.get<Pedido[]>(`${this.baseUrl}/pedidos/pendientes`);
    }
  
    // Por defecto trae todos los pedidos
    return this.http.get<Pedido[]>(`${this.baseUrl}/pedidos`);
  }

}
