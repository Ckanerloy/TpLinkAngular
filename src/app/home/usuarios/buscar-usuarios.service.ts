import { Usuario } from './usuario';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BuscarUsuariosService {
  private visibilidadCliente: string;
  @Output() cambioDeVisibilidad: EventEmitter<string>;
  private url: string = environment.apiUsuarioURL;

  constructor(
    private http: HttpClient
  ) {
    this.visibilidadCliente="";
    this.cambioDeVisibilidad= new EventEmitter();
  }

  public hacerVisiblibilidadCliente(){
    this.visibilidadCliente= "cliente";
    this.notificarCambio();
  }

  public ocualtarVisiblibilidadCliente(){
    this.visibilidadCliente= "vendedor";
    this.notificarCambio();
  }

public consultarUsuario(){
  return this.http.get(this.url+'/login?user=user_cami&contra=contra12345');
}

  public rolVisibilidad(rol:string){
    if(rol == "cliente"){
      this.hacerVisiblibilidadCliente();
    }else{
      this.ocualtarVisiblibilidadCliente();
    }
  }

  private notificarCambio(){
    this.cambioDeVisibilidad.emit(this.visibilidadCliente);
  }
}
