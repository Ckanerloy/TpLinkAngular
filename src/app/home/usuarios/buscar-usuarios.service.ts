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

  public consultarUsuario(usuario:string,contrasenia:string){
    return this.http.get(this.url+'/login?'+'user='+usuario+'&'+'contra='+contrasenia);
  }

  public rolVisibilidad(rol:string|null){
    console.log(localStorage.getItem('rol'));
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
