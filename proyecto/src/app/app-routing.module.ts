import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTablaComponent } from './adminViews/menu-tabla/menu-tabla.component';

const routes: Routes = [
  {path: 'admin/menu', component: MenuTablaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
