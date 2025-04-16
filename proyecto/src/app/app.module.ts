import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './componentsHomeAdmin/dashboard/dashboard.component';
import { SidebarComponent } from './componentsHomeAdmin/sidebar/sidebar.component';
import { HeaderAdminComponent } from './componentsHomeAdmin/header-admin/header-admin.component';
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
import { MenuTablaComponent } from './adminViews/menu-tabla/menu-tabla.component';
import { AdicionalesTablaComponent } from './adminViews/adicionales-tabla/adicionales-tabla.component';
import { ClientesTablaComponent } from './adminViews/clientes-tabla/clientes-tabla.component';
import { CommonModule } from '@angular/common';
import { DetalleProductoComponent } from './adminViews/detalle-producto/detalle-producto.component';
import { AgregarProductoComponent } from './adminViews/agregar-producto/agregar-producto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './frontPages/landing-page/landing-page.component';
import { HomeClientePageComponent } from './frontPages/home-cliente-page/home-cliente-page.component';
import { HeaderClienteComponent } from './componentsHomeCliente/header-cliente/header-cliente.component';
import { SeccionInicialComponent } from './componentsHomeCliente/seccion-inicial/seccion-inicial.component';
import { PromocionesComponent } from './componentsHomeCliente/promociones/promociones.component';
import { DetalleAdicionalComponent } from './adminViews/detalle-adicional/detalle-adicional.component';
import { AgregarAdicionalComponent } from './adminViews/agregar-adicional/agregar-adicional.component';
import { LoginClienteComponent } from './frontPages/login-cliente/login-cliente.component';
import { RegistroClienteComponent } from './frontPages/registro-cliente/registro-cliente.component';
import { HomeAdminPageComponent } from './frontPages/home-admin-page/home-admin-page.component';
import { MenuClientesComponent } from './adminViews/menu-clientes/menu-clientes.component';
import { AgregarClienteComponent } from './adminViews/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './adminViews/editar-cliente/editar-cliente.component';
import { HeaderCrudsComponent } from './adminViews/header-cruds/header-cruds.component';
import { MenuGeneralComponent } from './frontPages/menu-general/menu-general.component';
import { EditarPerfilComponent } from './clienteViews/editar-perfil/editar-perfil.component';
import { PedidosActivosComponent } from './clienteViews/pedidos-activos/pedidos-activos.component';
import { HistorialPedidosComponent } from './clienteViews/historial-pedidos/historial-pedidos.component';



@NgModule({
  declarations: [
    HeaderCrudsComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderAdminComponent,
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
    ProductoComponent,
    MenuTablaComponent,
    AdicionalesTablaComponent,
    ClientesTablaComponent,
    DetalleProductoComponent,
    AgregarProductoComponent,
    LandingPageComponent,
    HomeClientePageComponent,
    HeaderClienteComponent,
    SeccionInicialComponent,
    PromocionesComponent,
    DetalleAdicionalComponent,
    AgregarAdicionalComponent,
    LoginClienteComponent,
    RegistroClienteComponent,
    HomeAdminPageComponent,
    MenuClientesComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    MenuGeneralComponent,
    EditarPerfilComponent,
    PedidosActivosComponent,
    HistorialPedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
