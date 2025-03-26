import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentsLanding/header/header.component';
import { FooterComponent } from './componentsLanding/footer/footer.component';
import { NosotrosComponent } from './componentsLanding/nosotros/nosotros.component';
import { CarruselComponent } from './componentsLanding/carrusel/carrusel.component';
import { ReservasComponent } from './componentsLanding/reservas/reservas.component';
import { VideoInicioComponent } from './componentsLanding/video-inicio/video-inicio.component';
import { AdicionalComponent } from './entidades/adicional/adicional.component';
import { AdministradorComponent } from './entidades/administrador/administrador.component';
import { ClienteComponent } from './entidades/cliente/cliente.component';
import { DomiciliarioComponent } from './entidades/domiciliario/domiciliario.component';
import { OperadorComponent } from './entidades/operador/operador.component';
import { ProductoComponent } from './entidades/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent,
    CarruselComponent,
    ReservasComponent,
    VideoInicioComponent,
    AdicionalComponent,
    AdministradorComponent,
    ClienteComponent,
    DomiciliarioComponent,
    OperadorComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
