import { ItemsService } from './../generales/nav/items/items.service';
import { VisibilidadHeaderService } from './../generales/header/visibilidad/visibilidad-header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.css']
})
export class CarritoDeComprasComponent implements OnInit {
   carrito:any;
   items:any;
   precioSinDescuento:any;
   precioConDescuento:any

  constructor(
    private visibilidadHeaderService: VisibilidadHeaderService,
    private itemsService:ItemsService
  ) { }

  ngOnInit(): void {
    this.visibilidadHeaderService.ocualtarHeader();


    this.itemsService.cambioDeItems.subscribe((carrito:any)=>{
      this.carrito=carrito;
      this.items=this.carrito.itemsCompras;
      this.precioSinDescuento=this.carrito.precioTotalSinDescuento;
      this.precioConDescuento=this.carrito.precioTotalConDescuento;
    })
    this.itemsService.consultarItems(localStorage.getItem('id')).subscribe((resultado:any)=>{
      this.itemsService.cambiarItems(resultado);
      //localStorage.setItem('idCarrito',resultado.id);
    })
  }

}
