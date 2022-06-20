import { VisibilidadHeaderService } from './../generales/header/visibilidad/visibilidad-header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.css']
})
export class CarritoDeComprasComponent implements OnInit {

  constructor(
    private visibilidadHeaderService: VisibilidadHeaderService
  ) { }

  ngOnInit(): void {
    this.visibilidadHeaderService.ocualtarHeader();
  }

}
