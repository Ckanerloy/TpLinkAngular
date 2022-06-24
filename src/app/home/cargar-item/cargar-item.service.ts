import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarItemService {
  private url: string = environment.apiUsuarioURL

  constructor(
    private http: HttpClient
  ) { }

  public cargaProducto(productoId:string,cantidad:number){
    //http://localhost:8080/cliente/2516a9f0-2b53-4f4c-947c-11f8cf455971/carritoDeCompras/items/1/5
    var idCliente = localStorage.getItem('id');
    return this.http.post(this.url+'/cliente/'+idCliente+'/carritoDeCompras/items/'+productoId+'/'+cantidad,
      {
    }
    )
  }
}
