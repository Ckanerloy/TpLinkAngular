import { BuscarUsuariosService } from './usuarios/buscar-usuarios.service';
import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  esCliente: string;

  constructor(
    private buscarUsuariosService: BuscarUsuariosService
  ) {
    this.esCliente="";
   }

  ngOnInit(): void {
    this.buscarUsuariosService.cambioDeVisibilidad.subscribe((visibilidadCliente: string) =>{
      this.esCliente = visibilidadCliente;
    });
    this.buscarUsuariosService.rolVisibilidad();
  }

}
