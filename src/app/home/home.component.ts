import { ItemsService } from './../generales/nav/items/items.service';
import { ProductosService } from './productos/productos.service';
import { VisibilidadHeaderService } from './../generales/header/visibilidad/visibilidad-header.service';
import { VisibilidadFooterService } from './../generales/footer/visibilidad/visibilidad-footer.service';
import { VisibilidadNavService } from './../generales/nav/visibilidad/visibilidad-nav.service';
import { BuscarUsuariosService } from './usuarios/buscar-usuarios.service';
import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  esCliente: string="";
  productos:any;

  constructor(
    private buscarUsuariosService: BuscarUsuariosService,
    private visibilidadNavService:VisibilidadNavService,
    private visibilidadFooterService:VisibilidadFooterService,
    private VisibilidadHeaderService:VisibilidadHeaderService,
    private productosService:ProductosService
  ) {
    this.esCliente="";
   }

  ngOnInit(): void {
    this.buscarUsuariosService.cambioDeVisibilidad.subscribe((visibilidadCliente: string) =>{
      this.esCliente = visibilidadCliente;
      this.visibilidadNavService.hacerVisibleNav();
      this.visibilidadFooterService.hacerVisibleFooter();
      if(localStorage.getItem('rol') == 'cliente'){
        this.VisibilidadHeaderService.hacerVisibleHeader();
      }
    });
    this.productosService.cambioDeProductos.subscribe((productos:any) =>{
      this.productos=productos;
    });

    this.buscarUsuariosService.rolVisibilidad(localStorage.getItem('rol'));
      if(localStorage.getItem('rol') == 'cliente'){
        console.log(localStorage.getItem('rol'));
        this.productosService.consultarProductoCliente().subscribe((listaProductos:any)=>{
          this.productosService.cambiarProductos(listaProductos._embedded.productoes);
        })}else{
          this.productosService.consultarProductoVendedor(localStorage.getItem('id')).subscribe((listaProductos:any) =>{
            this.productosService.cambiarProductos(listaProductos._embedded.productoes);
          })
        }
  }

}
