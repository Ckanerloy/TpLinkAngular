import { BuscarUsuariosService } from './../../home/usuarios/buscar-usuarios.service';
import { VisibilidadHeaderService } from './visibilidad/visibilidad-header.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeaderComponent implements OnInit {
  estaVisible: boolean;
  esCliente:string;

  constructor(
    private visibilidadHeaderService: VisibilidadHeaderService,
    private buscarUsuariosService:BuscarUsuariosService
  ) {
    this.estaVisible = true;
    this.esCliente="";
   }

  ngOnInit(): void {
    this.visibilidadHeaderService.cambioDeVisibilidad.subscribe((estaVisible: boolean) => {
    this.estaVisible = estaVisible;
    });
    this.buscarUsuariosService.cambioDeVisibilidad.subscribe((visibilidadCliente: string) =>{
      this.esCliente = visibilidadCliente;
    });
    this.buscarUsuariosService.rolVisibilidad();
  }

}
