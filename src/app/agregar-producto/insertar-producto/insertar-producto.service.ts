import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsertarProductoService {
  //@Output() cambioDeProductos: EventEmitter<string>;
  private url: string = environment.apiUsuarioURL

  constructor(
    private http: HttpClient
  ) {
    //this.cambioDeProductos = new EventEmitter();
  }

  public cargaProducto(precio:string,descripcion:string,nombre:string,stock:number,proveedor:number,estaEnDolares:string,imagen:string){
    var monedaBoolean;
    if(estaEnDolares==='pesos'){
      monedaBoolean=false;
    }else{
      monedaBoolean=true;
    }
    //http://localhost:8080/vendedor/b38e282f-f3f5-485a-ac5f-51cf73e1d784/productos
    var idVendedor = localStorage.getItem('id');
    return this.http.post(this.url+'/vendedor/'+idVendedor+'/productos',
      {
        'nombre':nombre,
        'descripcion':descripcion,
        'precio':precio,
        'stock':stock,
        'proveedorID':proveedor,
        'imagen':imagen,
        'estaEnDolares':monedaBoolean
    }
    )
  }
}
