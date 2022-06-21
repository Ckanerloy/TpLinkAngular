import { BuscarUsuariosService } from './../../home/usuarios/buscar-usuarios.service';
import { VisibilidadNavService } from './visibilidad/visibilidad-nav.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NavComponent implements OnInit {
  estaVisible:boolean;
  esCliente:string;

  constructor(
    private visibilidadNavService: VisibilidadNavService,
    private buscarUsuariosService: BuscarUsuariosService
  ) {
    this.estaVisible=true;
    this.esCliente="";
  }

  ngOnInit(): void {
    this.visibilidadNavService.cambioDeVisibilidad.subscribe((estaVisible: boolean) =>{
      this.estaVisible=estaVisible;
    })
    this.buscarUsuariosService.cambioDeVisibilidad.subscribe((visibilidadCliente: string) =>{
      this.esCliente = visibilidadCliente;
    });
    //this.buscarUsuariosService.rolVisibilidad();
  }

}
