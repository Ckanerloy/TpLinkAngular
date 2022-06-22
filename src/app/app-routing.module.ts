import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { HomeComponent } from './home/home.component';
import { CarritoDeComprasComponent } from './carrito-de-compras/carrito-de-compras.component';
import { PaginaNoEncontradaComponent } from './generales/pagina-no-encontrada/pagina-no-encontrada.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "",component: LoginComponent},
  {path: "home",component: HomeComponent},
  {path:"carritoDeCompras",component: CarritoDeComprasComponent},
  {path:"productos",component: AgregarProductoComponent},
  {path: "**",component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
