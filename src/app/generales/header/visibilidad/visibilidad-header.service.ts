import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadHeaderService {
  private headerEstaVisible: boolean;
  @Output() cambioDeVisibilidad: EventEmitter<boolean>;

  constructor() {
    this.headerEstaVisible=false;
    this.cambioDeVisibilidad=new EventEmitter();
  }

  public hacerVisibleHeader(){
    this.headerEstaVisible= true;
    this.notificarCambio();
  }

  public ocualtarHeader(){
    this.headerEstaVisible= false;
    this.notificarCambio();
  }

  private notificarCambio(){
    this.cambioDeVisibilidad.emit(this.headerEstaVisible);
  }
}
