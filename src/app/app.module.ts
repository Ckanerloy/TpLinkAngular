import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralesModule } from './generales/generales.module';
import { LoginComponent } from './login/login.component';
import { CarritoDeComprasComponent } from './carrito-de-compras/carrito-de-compras.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarritoDeComprasComponent,
    HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralesModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
