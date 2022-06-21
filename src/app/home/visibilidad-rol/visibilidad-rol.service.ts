import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { BuscarUsuariosService } from './../usuarios/buscar-usuarios.service';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadRolService {
  private url: string = environment.apiUsuarioURL;

  constructor(
    private http: HttpClient
  ) {

  }

  public rolActual(){
    return this.http.get(this.url);
  }
}
