import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [
  { 
    path: 'admin', 
    loadChildren: () => import('./screens/adminViews/admin-views/admin-views.module').then(m => m.AdminViewsModule) 
  },
  { 
    path: '', 
    loadChildren: () => import('./screens/frontPages/front-pages/front-pages.module').then(m => m.FrontPagesModule) 
  },
  { path: '**', redirectTo: '' } // Ruta comodín para 404
=======
import { MenuTablaComponent } from './adminViews/menu-tabla/menu-tabla.component';
import { LandingPageComponent } from './frontPages/landing-page/landing-page.component';
import { HomeClientePageComponent } from './frontPages/home-cliente-page/home-cliente-page.component';
import { DetalleProductoComponent } from './adminViews/detalle-producto/detalle-producto.component';
import { AgregarProductoComponent } from './adminViews/agregar-producto/agregar-producto.component';
import { LoginClienteComponent } from './frontPages/login-cliente/login-cliente.component';
import { DetalleAdicionalComponent } from './adminViews/detalle-adicional/detalle-adicional.component';
import { AgregarAdicionalComponent } from './adminViews/agregar-adicional/agregar-adicional.component';
import { AdicionalesTablaComponent } from './adminViews/adicionales-tabla/adicionales-tabla.component';
import { RegistroClienteComponent } from './frontPages/registro-cliente/registro-cliente.component';
import { HomeAdminPageComponent } from './frontPages/home-admin-page/home-admin-page.component';
import { MenuClientesComponent } from './adminViews/menu-clientes/menu-clientes.component';
import { AgregarClienteComponent } from './adminViews/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './adminViews/editar-cliente/editar-cliente.component';
import { HeaderCrudsComponent } from './adminViews/header-cruds/header-cruds.component';
import { MenuGeneralComponent } from './frontPages/menu-general/menu-general.component';
import { EditarPerfilComponent } from './clienteViews/editar-perfil/editar-perfil.component';


const routes: Routes = [
  {path: 'admin/menu', component: MenuTablaComponent},
  { path: 'admin/clientes/editar/:id', component: EditarClienteComponent },
  {path: 'menu',component:MenuGeneralComponent},
  { path: 'admin/clientes/agregar', component: AgregarClienteComponent },
  { path: 'homeAdmin/usuarios', component: MenuClientesComponent },
  {path: 'landingPage', component: LandingPageComponent},
  {path: 'homeCliente', component: HomeClientePageComponent},
  {path:'homeAdmin', component:HomeAdminPageComponent},
  {path: 'detalleProducto/:id', component: DetalleProductoComponent},
  { path: 'login', component: LoginClienteComponent },
  {path: 'agregarProducto',component: AgregarProductoComponent},
  {path: '', redirectTo: '/landingPage', pathMatch: 'full'},
  {path: 'admin/adicionales',component: AdicionalesTablaComponent},
  {path: 'detalleAdicional/:id',component: DetalleAdicionalComponent},
  { path: 'registro', component: RegistroClienteComponent },
  {path: 'agregarAdicional',component: AgregarAdicionalComponent},
  {path: 'homeCliente/editarPerfil', component: EditarPerfilComponent},
>>>>>>> c58e9575f5141b8698acbc2abf01383a8e166f7e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }