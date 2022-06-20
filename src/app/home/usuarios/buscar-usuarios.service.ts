import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscarUsuariosService {
  private visibilidadCliente: string;
  @Output() cambioDeVisibilidad: EventEmitter<string>;

  constructor() {
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
  return "vendedor";
}

  public rolVisibilidad(){
    const rol= this.consultarUsuario();
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
