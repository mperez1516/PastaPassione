// src/app/components/components.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './componentsHomeAdmin/dashboard/dashboard.component';
import { HeaderAdminComponent } from './componentsHomeAdmin/header-admin/header-admin.component';
import { SidebarComponent } from './componentsHomeAdmin/sidebar/sidebar.component';
import { HeaderClienteComponent } from './componentsHomeCliente/header-cliente/header-cliente.component';
import { PromocionesComponent } from './componentsHomeCliente/promociones/promociones.component';
import { SeccionInicialComponent } from './componentsHomeCliente/seccion-inicial/seccion-inicial.component';
import { CarruselComponent } from './componentsLanding/carrusel/carrusel.component';
import { FooterComponent } from './componentsLanding/footer/footer.component';
import { HeaderComponent } from './componentsLanding/header/header.component';
import { NosotrosComponent } from './componentsLanding/nosotros/nosotros.component';
import { ReservasComponent } from './componentsLanding/reservas/reservas.component';
import { VideoInicioComponent } from './componentsLanding/video-inicio/video-inicio.component';
import { RouterModule } from '@angular/router';
// Importa TODOS tus componentes compartidos

@NgModule({
  declarations: [
    HeaderAdminComponent,
    SidebarComponent,
    DashboardComponent,
    FooterComponent,
    HeaderClienteComponent,
    SeccionInicialComponent,
    PromocionesComponent,
    HeaderComponent,
    VideoInicioComponent,
    NosotrosComponent,
    CarruselComponent,
    ReservasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    // Exporta los componentes que se usarán en otros módulos
    HeaderAdminComponent,
    SidebarComponent,
    DashboardComponent,
    FooterComponent,
    HeaderClienteComponent,
    SeccionInicialComponent,
    PromocionesComponent,
    HeaderComponent,
    VideoInicioComponent,
    NosotrosComponent,
    CarruselComponent,
    ReservasComponent
  ]
})
export class ComponentsModule { }