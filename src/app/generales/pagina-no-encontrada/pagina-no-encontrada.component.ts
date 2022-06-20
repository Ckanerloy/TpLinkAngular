import { VisibilidadFooterService } from './../footer/visibilidad/visibilidad-footer.service';
import { VisibilidadNavService } from './../nav/visibilidad/visibilidad-nav.service';
import { VisibilidadHeaderService } from './../header/visibilidad/visibilidad-header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './pagina-no-encontrada.component.html',
  styleUrls: ['./pagina-no-encontrada.component.css']
})
export class PaginaNoEncontradaComponent implements OnInit {

  constructor(
    private visibilidadHeaderService: VisibilidadHeaderService,
    private visibilidadNavService: VisibilidadNavService,
    private visibilidadFooterService: VisibilidadFooterService
  ) { }

  ngOnInit(): void {
    this.visibilidadHeaderService.ocualtarHeader();
    this.visibilidadNavService.ocualtarNav();
    this.visibilidadFooterService.ocultarFooter();
  }

}
