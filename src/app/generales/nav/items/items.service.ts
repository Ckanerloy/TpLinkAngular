import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  @Output() cambioDeItems: EventEmitter<string>;
  private url: string = environment.apiUsuarioURL;
  private carrito:any;

  constructor(
    private http:HttpClient
  ) {
    this.cambioDeItems=new EventEmitter();
  }

  //http://localhost:8080/cliente/c8b08ad1-c041-4288-9198-c57531133aba/carritoDeCompras
  public consultarItems(id:string|null){
    return this.http.get(this.url+'/cliente/'+id+'/carritoDeCompras');
  }

  public cambiarItems(otrocarrito:any){
    this.carrito=otrocarrito;
    this.notificar();
  }

  public notificar(){
    this.cambioDeItems.emit(this.carrito);
  }

}
