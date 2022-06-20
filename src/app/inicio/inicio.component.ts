import { VisibilidadFooterService } from './../generales/footer/visibilidad/visibilidad-footer.service';
import { VisibilidadNavService } from './../generales/nav/visibilidad/visibilidad-nav.service';
import { VisibilidadHeaderService } from './../generales/header/visibilidad/visibilidad-header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

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
