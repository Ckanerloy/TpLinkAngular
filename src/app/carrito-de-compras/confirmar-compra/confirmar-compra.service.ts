import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmarCompraService {
  private url: string = environment.apiUsuarioURL;

  constructor(
    private http: HttpClient
  ) { }

  public confirmarCompra(){
    //localhost:8080/cliente/16041d6a-fe11-4263-8adf-0095be2e8d59/carrito
    var idCliente = localStorage.getItem('id');
    return this.http.post(this.url+'/cliente/'+idCliente+'/carrito',
      {
    }
    )
  }
}
