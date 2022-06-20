import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadNavService {
  private navEstaVisible: boolean;
  @Output() cambioDeVisibilidad: EventEmitter<boolean>;

  constructor() {
    this.navEstaVisible=true;
    this.cambioDeVisibilidad= new EventEmitter();
   }

   public hacerVisibleNav(){
    this.navEstaVisible= true;
    this.notificarCambio();
  }

  public ocualtarNav(){
    this.navEstaVisible= false;
    this.notificarCambio();
  }

  private notificarCambio(){
    this.cambioDeVisibilidad.emit(this.navEstaVisible);
  }
}
