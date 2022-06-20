import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadSearchService {
  private busquedaEstaVisible: boolean;
  @Output() cambioDeVisibilidad: EventEmitter<boolean>;

  constructor() {
    this.cambioDeVisibilidad= new EventEmitter();
    this.busquedaEstaVisible= false;
  }

  public hacerVisibleBarraDeBusqueda(){
    this.busquedaEstaVisible= true;
    this.notificarCambio();
  }

  public ocualtarBarraDeBusqueda(){
    this.busquedaEstaVisible= false;
    this.notificarCambio();
  }

  private notificarCambio(){
    this.cambioDeVisibilidad.emit(this.busquedaEstaVisible);
  }
}
