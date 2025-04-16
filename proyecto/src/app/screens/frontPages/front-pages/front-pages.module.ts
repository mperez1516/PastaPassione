import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Añade esto
import { RouterModule } from '@angular/router';

import { FrontPagesRoutingModule } from './front-pages-routing.module';
import { HomeClientePageComponent } from '../home-cliente-page/home-cliente-page.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LoginClienteComponent } from '../login-cliente/login-cliente.component';
import { MenuGeneralComponent } from '../menu-general/menu-general.component';
import { RegistroClienteComponent } from '../registro-cliente/registro-cliente.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    HomeClientePageComponent,
    LoginClienteComponent,
    RegistroClienteComponent,
    MenuGeneralComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FrontPagesRoutingModule
  ]
})
export class FrontPagesModule { }