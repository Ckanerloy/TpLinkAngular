import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralesModule } from './generales/generales.module';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoDeComprasComponent } from './carrito-de-compras/carrito-de-compras.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    CarritoDeComprasComponent,
    HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneralesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
