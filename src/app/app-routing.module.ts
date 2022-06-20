import { HomeComponent } from './home/home.component';
import { CarritoDeComprasComponent } from './carrito-de-compras/carrito-de-compras.component';
import { PaginaNoEncontradaComponent } from './generales/pagina-no-encontrada/pagina-no-encontrada.component';
import { ProductosComponent } from './productos/productos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "",component: InicioComponent},
  {path: "inicio",component: HomeComponent},
  {path:"carritoDeCompras",component: CarritoDeComprasComponent},
  {path: "**",component: PaginaNoEncontradaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
