import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from 'src/app/entidades/cliente/cliente';
import { Administrador } from 'src/app/entidades/administrador/administrador';

type UsuarioGeneral = Cliente | Administrador;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioLogueado: Cliente | null = null; // Simulamos el estado del usuario

  constructor() {
    const usuarioGuardado = localStorage.getItem('usuarioLogueado');
    if (usuarioGuardado) {
      this.usuarioLogueado = JSON.parse(usuarioGuardado);
    }
  }

  // Método para verificar si hay un usuario logueado
  isLoggedIn(): Observable<boolean> {
    return of(!!this.usuarioLogueado); // Devuelve true si hay usuario, false si no
  }

  // Método para obtener el usuario logueado
  getUsuarioLogueado(): Observable<Cliente | null> {
    return of(this.usuarioLogueado);
  }

  // Método para simular un login (puedes modificarlo para tu sistema real)
  login(cliente: Cliente): void {
    this.usuarioLogueado = cliente;
    localStorage.setItem('usuarioLogueado', JSON.stringify(cliente));
  }

  // Método para simular un logout
  logout(): void {
    this.usuarioLogueado = null;
    localStorage.removeItem('usuarioLogueado');
  }
}