import { ItemsService } from './items/items.service';
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
    private buscarUsuariosService: BuscarUsuariosService,
    private itemsService: ItemsService
  ) {
    this.estaVisible=true;
    this.esCliente="";
  }

  ngOnInit(): void {
    this.visibilidadNavService.cambioDeVisibilidad.subscribe((estaVisible: boolean) =>{
      console.log(estaVisible);
      this.estaVisible=estaVisible;
    })
    this.buscarUsuariosService.cambioDeVisibilidad.subscribe((visibilidadCliente: string) =>{
      this.esCliente = visibilidadCliente;
    })
  }

  public obtenerItems(){
    this.itemsService.consultarItems(localStorage.getItem('id')).subscribe((resultado:any)=>{
      this.itemsService.cambiarItems(resultado.itemsCompras);
      localStorage.setItem('idCarrito',resultado.id);
    })
  }

}
