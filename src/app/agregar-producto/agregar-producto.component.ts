import { ProveedorService } from './proveedor/proveedor.service';
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
  proveedores:any;

  constructor(
    private formBuilder:FormBuilder,
    private insertarProductoService:InsertarProductoService,
    private productosService:ProductosService,
    private proveedorService:ProveedorService
  ) {
    this.formulario=null;
   }

  ngOnInit(): void {
    this.inicializarFormulario();

    this.proveedorService.getProveedores().subscribe((resultado:any)=>{
      this.proveedores=resultado._embedded.proveedors;
    })
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
    var proveedor = this.formulario?.get('proveedor')?.value;
    var estaEnDolares = this.formulario?.get('estaEnDolares')?.value;
    var imagen = this.formulario?.get('imagen')?.value;

    console.log(nombre + " " + stock + " " + descripcion + " " + precio + " " + proveedor + " " + estaEnDolares + " " + imagen);
    this.insertarProductoService.cargaProducto(precio,descripcion,nombre,stock,proveedor,estaEnDolares,imagen).subscribe(()=>{
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
