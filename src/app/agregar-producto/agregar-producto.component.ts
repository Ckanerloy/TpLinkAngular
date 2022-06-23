import { ProductosService } from './../home/productos/productos.service';
import { InsertarProductoService } from './insertar-producto/insertar-producto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  formulario: FormGroup|null;

  constructor(
    private formBuilder:FormBuilder,
    private insertarProductoService:InsertarProductoService,
    private productosService:ProductosService
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

  guardarProducto(){
    var nombre = this.formulario?.get('nombre')?.value;
    var stock = this.formulario?.get('stock')?.value;
    var descripcion = this.formulario?.get('descripcion')?.value;
    var precio = this.formulario?.get('precio')?.value;

    var estaEnDolares = this.formulario?.get('estaEnDolares')?.value;
    var imagen = this.formulario?.get('imagen')?.value;

    console.log(nombre + " " + stock + " " + descripcion + " " + precio + " " +  " " + estaEnDolares + " " + imagen);
    this.insertarProductoService.cargaProducto(precio,descripcion,nombre,stock,1,estaEnDolares,imagen).subscribe(()=>{
      if(localStorage.getItem('rol') == 'cliente'){
        console.log(localStorage.getItem('rol'));
        this.productosService.consultarProductoCliente().subscribe((listaProductos:any)=>{
          this.productosService.cambiarProductos(listaProductos._embedded.productoes);
        })}else{
          console.log(localStorage.getItem('rol'));
          this.productosService.consultarProductoVendedor(localStorage.getItem('id')).subscribe((listaProductos:any) =>{
            this.productosService.cambiarProductos(listaProductos._embedded.productoes);
          })
        }
    });
  }
}
