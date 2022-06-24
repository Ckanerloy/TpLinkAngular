import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgregarMedioDePagoService {
  private url: string = environment.apiUsuarioURL;

  constructor(
    private http: HttpClient
  ) { }

  public cargaMedioDePago(medioDePago:string){
    //http://localhost:8080/cliente/f8608bf6-9457-45d8-bb9e-09ea2acb6ed1/medioDePago/TARJETA_CREDITO
    var idCliente = localStorage.getItem('id');
    return this.http.post(this.url+'/cliente/'+idCliente+'/medioDePago/'+medioDePago,
      {
    }
    )
  }

}
