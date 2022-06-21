import { Usuario } from './usuarios/usuario';
import { VisibilidadRolService } from './visibilidad-rol/visibilidad-rol.service';
import { BuscarUsuariosService } from './usuarios/buscar-usuarios.service';
import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  esCliente: string="";

  constructor(
    private buscarUsuariosService: BuscarUsuariosService
  ) {
    this.esCliente="";
   }

  ngOnInit(): void {
    this.buscarUsuariosService.cambioDeVisibilidad.subscribe((visibilidadCliente: string) =>{
      this.esCliente = visibilidadCliente;
    });
    //this.buscarUsuariosService.rolVisibilidad();
    /*this.buscarUsuariosService.consultarUsuario().subscribe((respuesta:any) => {
      console.log(respuesta._links.rol.href);
      this.buscarUsuariosService.buscarRol(respuesta._links.rol.href).subscribe((otraRespuesta:any) =>{
      console.log(otraRespuesta);
      this.buscarUsuariosService.rolVisibilidad(otraRespuesta.tipoDeRol);
      console.log(otraRespuesta.tipoDeRol);
    });
    })*/
    this.buscarUsuariosService.consultarUsuario().subscribe((usuario:any) =>{
      console.log(usuario.tipoDeRol);
      this.buscarUsuariosService.rolVisibilidad(usuario.tipoDeRol);
    })
  }


}
