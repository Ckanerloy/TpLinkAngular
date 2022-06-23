import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  private url: string = environment.apiUsuarioURL;

  constructor(
    private http:HttpClient
  ) {
  }

  public getProveedores(){
    return this.http.get(this.url+'/proveedores');
  }
}
