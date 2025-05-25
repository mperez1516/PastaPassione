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

  guardarCarrito(carro: Carro, direccionEnvio: string): Observable<{ carritoId: number }> {
  const clienteId = carro.clienteId;
  if (!clienteId) {
    console.error('El cliente no está asignado.');
    return of({ carritoId: 0 });
  }

  const body = {
    ...carro,
    direccionEnvio: direccionEnvio
  };

  return this.http.post<{ carritoId: number }>(
    `${this.baseUrl}/carritos/guardar`,
    body
  );
}




  obtenerDetallesPedido(pedidoId: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.baseUrl}/pedidos/${pedidoId}`);
  }
  
  
  
  /*
  generarPedido(carritoId: number, direccionEnvio: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/pedidos/crear-desde-carrito?direccionEnvio=${encodeURIComponent(direccionEnvio)}`, carritoId);
  }*/

  crearPedido(carritoId: number, direccionEnvio: string): Observable<Pedido> {
    const params = new HttpParams().set('direccionEnvio', direccionEnvio);
    return this.http.post<Pedido>(
      `${this.baseUrl}/pedidos/crear-desde-carrito`,
      carritoId,
      { params }
    );
  }
  asignarDomiciliario(pedidoId: number, domiciliarioId: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/pedidos/${pedidoId}/asignar-domiciliario/${domiciliarioId}`, {});
  }
  
  obtenerPedidosPorCliente(): Observable<Pedido[]> {
    const clienteId = JSON.parse(localStorage.getItem('cliente') || '{}').id; // Obtén el ID del cliente
    return this.http.get<Pedido[]>(`${this.baseUrl}/pedidos/cliente/${clienteId}`);
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
  finalizarPedido(pedidoId: number, domiciliarioId: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/pedidos/${pedidoId}/finalizar`, { domiciliarioId });
  }
  
}
