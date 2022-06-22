import { Router } from '@angular/router';
import { ProductosService } from './../home/productos/productos.service';
import { BuscarUsuariosService } from './../home/usuarios/buscar-usuarios.service';
import { VisibilidadFooterService } from './../generales/footer/visibilidad/visibilidad-footer.service';
import { VisibilidadNavService } from '../generales/nav/visibilidad/visibilidad-nav.service';
import { VisibilidadHeaderService } from '../generales/header/visibilidad/visibilidad-header.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private busqueda:string|null;
  formulario: FormGroup|null;

  constructor(
    private visibilidadHeaderService: VisibilidadHeaderService,
    private visibilidadNavService: VisibilidadNavService,
    private visibilidadFooterService: VisibilidadFooterService,
    private formBuilder:FormBuilder,
    private buscarUsuariosService:BuscarUsuariosService,
    private productosService:ProductosService
  ) {
    this.busqueda=null;
    this.formulario=null;
  }

  ngOnInit(): void {
    this.visibilidadHeaderService.ocualtarHeader();
    this.visibilidadNavService.ocualtarNav();
    this.visibilidadFooterService.ocultarFooter();
    this.inicializarFormulario();
  }

  private inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });

  }

  login(){
    alert('Se han guardado los cambios');

    var usuario = this.formulario?.get('usuario')?.value;
    var contrasenia = this.formulario?.get('contrasenia')?.value;

    console.log(usuario + " " + contrasenia);

    this.buscarUsuariosService.consultarUsuario(usuario,contrasenia).subscribe((respuesta:any)=>{
      localStorage.setItem('rol',respuesta.tipoDeRol);
      localStorage.setItem('id',respuesta.id);
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
    });

  }

}
