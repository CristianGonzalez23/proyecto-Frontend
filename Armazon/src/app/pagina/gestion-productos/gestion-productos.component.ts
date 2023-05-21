import { Component, OnInit } from '@angular/core';
import { PublicacionProductoGetDTO } from 'src/app/modelo/publicacion-producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.css']
  })

  export class GestionProductosComponent implements OnInit {

  publicacionProductos:PublicacionProductoGetDTO[];
  seleccionados:PublicacionProductoGetDTO[];
  textoBtnEliminar:String;

  constructor(private productoServicio:ProductoService){
  this.publicacionProductos = [];
  this.seleccionados = [];
  this.textoBtnEliminar = "";
  }

  ngOnInit(): void {
  this.publicacionProductos = this.productoServicio.listar();
  }

  public seleccionar(publicacionProductos:PublicacionProductoGetDTO, estado:boolean){
    
    if(estado){
    
      this.seleccionados.push(publicacionProductos);
    
    }else{
    
      this.seleccionados = this.seleccionados.filter(i => i != publicacionProductos);
    
    }
   
    this.actualizarMensaje();
  
  }

  private actualizarMensaje(){
    const tam = this.seleccionados.length;
    if(tam != 0){
      if(tam == 1){
        this.textoBtnEliminar = "1 elemento";
      }else{
      this.textoBtnEliminar = tam+" elementos";
    }
    }else{
  this.textoBtnEliminar = "";
  }
  }

  public borrarProductos(){
    this.seleccionados.forEach(e => {
    this.publicacionProductos = this.publicacionProductos.filter(i => i != e);
    });
    this.seleccionados = [];
    this.actualizarMensaje();
    }
  
  }
