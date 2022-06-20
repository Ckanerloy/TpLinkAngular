import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadFooterService {
  private footerEstaVisible: boolean;
  @Output() cambioDeVisibilidad: EventEmitter<boolean>;

  constructor() {
    this.footerEstaVisible = true;
    this.cambioDeVisibilidad = new EventEmitter();
  }

  public hacerVisibleFooter(){
    this.footerEstaVisible = true;
    this.notificar();
  }

  public ocultarFooter(){
    this.footerEstaVisible = false;
    this.notificar();
  }

  public notificar(){
    this.cambioDeVisibilidad.emit(this.footerEstaVisible);
  }
}
