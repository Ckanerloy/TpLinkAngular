import { CargarItemService } from './cargar-item/cargar-item.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemsService } from './../generales/nav/items/items.service';
import { ProductosService } from './productos/productos.service';
import { VisibilidadHeaderService } from './../generales/header/visibilidad/visibilidad-header.service';
import { VisibilidadFooterService } from './../generales/footer/visibilidad/visibilidad-footer.service';
import { VisibilidadNavService } from './../generales/nav/visibilidad/visibilidad-nav.service';
import { BuscarUsuariosService } from './usuarios/buscar-usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  esCliente: string="";
  productos:any;
  formulario: FormGroup|null;

  constructor(
    private buscarUsuariosService: BuscarUsuariosService,
    private visibilidadNavService:VisibilidadNavService,
    private visibilidadFooterService:VisibilidadFooterService,
    private VisibilidadHeaderService:VisibilidadHeaderService,
    private productosService:ProductosService,
    private formBuilder:FormBuilder,
    private cargarItemService:CargarItemService
  ) {
    this.esCliente="";
    this.formulario=null;
   }

  ngOnInit(): void {
    this.inicializarFormulario();
    this.buscarUsuariosService.cambioDeVisibilidad.subscribe((visibilidadCliente: string) =>{
      this.esCliente = visibilidadCliente;
      this.visibilidadNavService.hacerVisibleNav();
      this.visibilidadFooterService.hacerVisibleFooter();
      if(localStorage.getItem('rol') == 'cliente'){
        this.VisibilidadHeaderService.hacerVisibleHeader();
      }
    });


    this.buscarUsuariosService.rolVisibilidad(localStorage.getItem('rol'));
      if(localStorage.getItem('rol') == 'cliente'){
        console.log(localStorage.getItem('rol'));
        this.productosService.consultarProductoCliente().subscribe((listaProductos:any)=>{
          this.productosService.cambiarProductos(listaProductos._embedded.productoes);
        })}else{
          console.log(localStorage.getItem('rol'));
          this.productosService.consultarProductoVendedor(localStorage.getItem('id')).subscribe((listaProductos:any) =>{
            this.productosService.cambiarProductos(listaProductos._embedded.productoes);
          })
        }

    this.productosService.cambioDeProductos.subscribe((productos:any) =>{
        this.productos=productos;
      });
  }

  public inicializarFormulario(){
    this.formulario = this.formBuilder.group({
      cantidad: ['', Validators.required]
    });
  }

  agregarItem(productoId:string){
    var cantidad = this.formulario?.get('cantidad')?.value;
    console.log(cantidad);
    console.log(productoId);
    this.cargarItemService.cargaProducto(productoId,cantidad).subscribe(()=>{

    }
    )};

}
