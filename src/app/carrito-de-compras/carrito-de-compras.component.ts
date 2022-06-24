import { AgregarMedioDePagoService } from './agregar-medio-de-pago/agregar-medio-de-pago.service';
import { AgregarCuponProveedorService } from './agregar-cupon-proveedor/agregar-cupon-proveedor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemsService } from './../generales/nav/items/items.service';
import { VisibilidadHeaderService } from './../generales/header/visibilidad/visibilidad-header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './carrito-de-compras.component.html',
  styleUrls: ['./carrito-de-compras.component.css']
})
export class CarritoDeComprasComponent implements OnInit {
   carrito:any;
   items:any;
   precioSinDescuento:any;
   precioConDescuento:any;
   formularioMedio: FormGroup|null;
   formularioCupon: FormGroup|null;
   codigoCuponProveedor:string;

  constructor(
    private visibilidadHeaderService: VisibilidadHeaderService,
    private itemsService:ItemsService,
    private formBuilder:FormBuilder,
    private agregarCuponProveedorService:AgregarCuponProveedorService,
    private agregarMedioDePagoService:AgregarMedioDePagoService
  ) {
    this.formularioMedio=null;
    this.formularioCupon=null;
    this.codigoCuponProveedor="";
  }

  ngOnInit(): void {
    this.visibilidadHeaderService.ocualtarHeader();


    this.itemsService.cambioDeItems.subscribe((carrito:any)=>{
      this.carrito=carrito;
      this.items=this.carrito.itemsCompras;
      this.precioSinDescuento=this.carrito.precioTotalSinDescuento;
      this.precioConDescuento=this.carrito.precioTotalConDescuento;
    })
    this.itemsService.consultarItems(localStorage.getItem('id')).subscribe((resultado:any)=>{
      this.itemsService.cambiarItems(resultado);
      //localStorage.setItem('idCarrito',resultado.id);
    })
    this.inicializarFormularioMedio();
    this.inicializarFormularioCupon();
  }

  public inicializarFormularioMedio(){
    this.formularioMedio = this.formBuilder.group({
      medioDePago: ['', Validators.required]
    });
  }

  guardarMedioDePago(){
    var medioDePago = this.formularioMedio?.get('medioDePago')?.value;
    console.log(medioDePago);
    this.agregarMedioDePagoService.cargaMedioDePago(medioDePago).subscribe(()=>{
      this.itemsService.consultarItems(localStorage.getItem('id')).subscribe((resultado:any)=>{
        this.itemsService.cambiarItems(resultado);
      });
    })
  }

  public inicializarFormularioCupon(){
    this.formularioCupon = this.formBuilder.group({
      cuponProveedor: ['', Validators.required]
    });
  }

  guardarCupon(){
    var cuponProveedor = this.formularioMedio?.get('cuponProveedor')?.value;
    console.log(this.codigoCuponProveedor);
    this.agregarCuponProveedorService.cargaCuponProveedor(this.codigoCuponProveedor).subscribe(()=>{
      this.itemsService.consultarItems(localStorage.getItem('id')).subscribe((resultado:any)=>{
        this.itemsService.cambiarItems(resultado);
      });
    })
  }
}
