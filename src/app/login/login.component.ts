import { VisibilidadFooterService } from '../generales/footer/visibilidad/visibilidad-footer.service';
import { VisibilidadNavService } from '../generales/nav/visibilidad/visibilidad-nav.service';
import { VisibilidadHeaderService } from '../generales/header/visibilidad/visibilidad-header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private busqueda:string|null;
  formulario: FormGroup|null;

  constructor(
    private visibilidadHeaderService: VisibilidadHeaderService,
    private visibilidadNavService: VisibilidadNavService,
    private visibilidadFooterService: VisibilidadFooterService,
    private formBuilder:FormBuilder
  ) {
    this.busqueda=null;
    this.formulario=null;
  }

  ngOnInit(): void {
    this.visibilidadHeaderService.ocualtarHeader();
    this.visibilidadNavService.ocualtarNav();
    this.visibilidadFooterService.ocultarFooter();
    this.inicializarFormulario();
  }

  private inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasenia: ['', Validators.required]
    });
  }

  login(){
    alert('Se han guardado los cambios');

    var usuario = this.formulario?.get('usuario')?.value;
    var contrasenia = this.formulario?.get('contrasenia')?.value;

    console.log(usuario + " " + contrasenia);
  }

}
