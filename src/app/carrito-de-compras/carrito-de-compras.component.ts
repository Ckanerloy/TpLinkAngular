import { ItemsService } from './../generales/nav/items/items.service';
import { VisibilidadHeaderService } from './../generales/header/visibilidad/visibilidad-header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.css']
})
export class CarritoDeComprasComponent implements OnInit {
  private items:any;

  constructor(
    private visibilidadHeaderService: VisibilidadHeaderService,
    private itemsService:ItemsService
  ) { }

  ngOnInit(): void {
    this.visibilidadHeaderService.ocualtarHeader();


    this.itemsService.cambioDeItems.subscribe((items:any)=>{
      this.items=items;
    })
  }

}
