import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-header-cliente',
  templateUrl: './header-cliente.component.html',
  styleUrls: ['./header-cliente.component.css']
})
export class HeaderClienteComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    // Limpiar sesión
    this.authService.logout();

    // Eliminar datos del carrito también, si aplica
    localStorage.removeItem('carrito');

    // Redirigir al login o al home
    this.router.navigate(['']);
  }

}

