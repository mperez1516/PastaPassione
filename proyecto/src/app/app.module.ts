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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NosotrosComponent,
    CarruselComponent,
    ReservasComponent,
    VideoInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
