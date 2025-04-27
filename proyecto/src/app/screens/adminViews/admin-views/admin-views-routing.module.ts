import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionalesTablaComponent } from '../adicionales-tabla/adicionales-tabla.component';
import { AgregarAdicionalComponent } from '../agregar-adicional/agregar-adicional.component';
import { AgregarClienteComponent } from '../agregar-cliente/agregar-cliente.component';
import { AgregarProductoComponent } from '../agregar-producto/agregar-producto.component';
import { DetalleAdicionalComponent } from '../detalle-adicional/detalle-adicional.component';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';
import { EditarClienteComponent } from '../editar-cliente/editar-cliente.component';
import { MenuClientesComponent } from '../menu-clientes/menu-clientes.component';
import { MenuTablaComponent } from '../menu-tabla/menu-tabla.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminViewsComponent } from './admin-views.component';
import { LoginAdminComponent } from '../login-admin/login-admin.component';
import { OperadoresTablaComponent } from '../operadores-tabla/operadores-tabla.component';
import { DetalleOperadoresComponent } from '../detalle-operadores/detalle-operadores.component';
import { AgregarOperadorComponent } from '../agregar-operador/agregar-operador.component';

const routes: Routes = [
  {path:'',
    component: AdminViewsComponent,

    children:[
      { path: 'menu', component: MenuTablaComponent },
      { path: 'clientes/editar/:id', component: EditarClienteComponent },
      { path: 'clientes/agregar', component: AgregarClienteComponent },
      { path: 'usuarios', component: MenuClientesComponent },
      { path: 'detalleProducto/:id', component: DetalleProductoComponent },
      { path: 'agregarProducto', component: AgregarProductoComponent },
      { path: 'adicionales', component: AdicionalesTablaComponent },
      { path: 'detalleAdicional/:id', component: DetalleAdicionalComponent },
      { path: 'agregarAdicional', component: AgregarAdicionalComponent },
      { path: 'loginAdmin', component: LoginAdminComponent },
      { path: 'operadores', component: OperadoresTablaComponent },
      { path: 'detalleOperadores/:id', component: DetalleOperadoresComponent },
      { path: 'agregarOperador', component: AgregarOperadorComponent },
      { path: '', redirectTo: 'menu', pathMatch: 'full' }
    ]  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminViewsRoutingModule { }