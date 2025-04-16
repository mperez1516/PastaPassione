import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }