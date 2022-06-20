import { BuscarUsuariosService } from './../usuarios/buscar-usuarios.service';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilidadRolService {
  private visibilidadCliente: string;

  constructor(
    private buscarUsuariosService:BuscarUsuariosService
  ) {
    this.visibilidadCliente="";
  }


}
