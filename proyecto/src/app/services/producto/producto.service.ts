import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/entidades/producto/producto';
import { Adicional } from 'src/app/entidades/adicional/adicional'; // Asegúrate de tener la entidad Adicional definida

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = "http://localhost:8000/producto"; 
  private adicionalesUrl = "http://localhost:8000/adicional"; // URL para obtener los adicionales

  constructor(private http: HttpClient) {}

  // Obtener todos los productos
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseUrl);
  }
// Obtener todos los adicionales de un producto
  getAdicionalesByProductoId(id: number): Observable<Adicional[]> {
    return this.http.get<Adicional[]>(`${this.baseUrl}/${id}/adicionales`);
  }
  // Obtener producto por ID
  getProductoById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseUrl}/${id}`);
  }

  getProductoWithAdicionales(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseUrl}/${id}`);
  }

  // Obtener todos los adicionales
  getAdicionales(): Observable<Adicional[]> {
    return this.http.get<Adicional[]>(this.adicionalesUrl);
  }

  // Crear producto
  addProducto(producto: Omit<Producto, 'producto_id'>): Observable<Producto> {
    return this.http.post<Producto>(this.baseUrl, producto);
  }

  // Actualizar producto
  updateProducto(id: number, producto: Producto): Observable<Producto> {
    // Preparar el objeto como lo espera el backend
    const productoParaBackend = {
      ...producto,
      producto_id: id,
      adicionales: producto.adicionales?.map(a => ({
        adicional_id: a.adicional_id,
        nombre: a.nombre,
        precio: a.precio,
        cantidad: a.cantidad
      }))
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
      


  return this.http.put<Producto>(`${this.baseUrl}/${id}`, productoParaBackend, { headers });
  }

  // Eliminar producto
  //deleteProducto(id: number): Observable<void> {
    //return this.http.delete<void>(`${this.baseUrl}/${id}`);
  //}

  // Desactivar producto (marcar enTemporada = false)
  desactivarProducto(id: number): Observable<Producto> {
  return this.http.put<Producto>(`${this.baseUrl}/${id}`, {});
  }

}
