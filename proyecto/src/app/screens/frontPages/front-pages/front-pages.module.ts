import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FrontPagesRoutingModule } from './front-pages-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeClientePageComponent } from '../home-cliente-page/home-cliente-page.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LoginClienteComponent } from '../login-cliente/login-cliente.component';
import { MenuGeneralComponent } from '../menu-general/menu-general.component';
import { RegistroClienteComponent } from '../registro-cliente/registro-cliente.component';
import { HomeAdminPageComponent } from '../home-admin-page/home-admin-page.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    HomeClientePageComponent,
    LoginClienteComponent,
    RegistroClienteComponent,
    MenuGeneralComponent,
    HomeAdminPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule, 
    FrontPagesRoutingModule
  ]
})
export class FrontPagesModule { }