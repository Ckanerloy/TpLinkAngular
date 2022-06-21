import { BuscarUsuariosService } from './../home/usuarios/buscar-usuarios.service';
import { VisibilidadFooterService } from '../generales/footer/visibilidad/visibilidad-footer.service';
import { VisibilidadNavService } from '../generales/nav/visibilidad/visibilidad-nav.service';
import { VisibilidadHeaderService } from '../generales/header/visibilidad/visibilidad-header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private visibilidadHeaderService: VisibilidadHeaderService,
    private visibilidadNavService: VisibilidadNavService,
    private visibilidadFooterService: VisibilidadFooterService,
    private buscarUsuariosService:BuscarUsuariosService
  ) { }

  ngOnInit(): void {
    this.visibilidadHeaderService.ocualtarHeader();
    this.visibilidadNavService.ocualtarNav();
    this.visibilidadFooterService.ocultarFooter();
  }

  public verificar(){

  }
}
