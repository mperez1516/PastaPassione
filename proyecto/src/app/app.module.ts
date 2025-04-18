import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module'; // Importa el módulo
import { AppComponent } from './app.component';
import { AdminViewsModule } from './screens/adminViews/admin-views/admin-views.module';
import { FrontPagesModule } from './screens/frontPages/front-pages/front-pages.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HistorialPedidosComponent } from './screens/clienteViews/historial-pedidos/historial-pedidos.component';
import { PedidosActivosComponent } from './screens/clienteViews/pedidos-activos/pedidos-activos.component';
import { EditarPerfilComponent } from './screens/clienteViews/editar-perfil/editar-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HistorialPedidosComponent,
    PedidosActivosComponent,
    EditarPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule, // Agrega el módulo de componentes
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }