import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  formulario: FormGroup|null;

  constructor(
    private formBuilder:FormBuilder
  ) {
    this.formulario=null;
   }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      stock: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
      proveedor: ['', Validators.required],
      estaEnDolares: ['', Validators.required],
      imagen: ['', Validators.required]
    });
  }

  modicarPorducto(){
    alert('Se han guardado los cambios');

    var nombre = this.formulario?.get('nombre')?.value;
    var stock = this.formulario?.get('stock')?.value;
    var descripcion = this.formulario?.get('descripcion')?.value;
    var precio = this.formulario?.get('precio')?.value;

    var estaEnDolares = this.formulario?.get('estaEnDolares')?.value;
    var imagen = this.formulario?.get('imagen')?.value;

    console.log(nombre + " " + stock + " " + descripcion + " " + precio + " " +  " " + estaEnDolares + " " + imagen);
  }
}
