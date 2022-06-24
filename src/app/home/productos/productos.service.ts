import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  @Output() cambioDeProductos: EventEmitter<string>;
  private url: string = environment.apiUsuarioURL;
  private productos:any;

  constructor(
    private http: HttpClient
  ) {
    this.cambioDeProductos= new EventEmitter();
  }

  public consultarProductoCliente(nro:any){
    return this.http.get(this.url+'/productos'+'?page='+nro);
  }
  //http://localhost:8080/vendedores/eec7884f-0245-47d1-b7d0-bebe4f942d8c/productosParaVender
  public consultarProductoVendedor(id:string|null,nroPag:any){
    return this.http.get(this.url+'/vendedores/'+id+'/productosParaVender'+'?page='+nroPag);
  }

  public cambiarProductos(otrosProductos:any){
    this.productos=otrosProductos;
    this.notificar();
  }

  public notificar(){
    this.cambioDeProductos.emit(this.productos);
  }
}
