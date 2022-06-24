import { environment } from './../../../environments/environment.prod';
import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  @Output() cambioDeProveedores: EventEmitter<string>;
  private url: string = environment.apiUsuarioURL;

  constructor() {
    this.cambioDeProveedores=new EventEmitter();
  }
}
