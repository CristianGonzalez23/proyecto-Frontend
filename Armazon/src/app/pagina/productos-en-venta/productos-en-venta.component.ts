import { Component, OnInit } from '@angular/core';
import { PublicacionProductoGetDTO } from 'src/app/modelo/publicacion-producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-productos-en-venta',
  templateUrl: './productos-en-venta.component.html',
  styleUrls: ['./productos-en-venta.component.css']
})
export class ProductosComponent{
  productos: PublicacionProductoGetDTO[] = [];

  constructor(private productoService: ProductoService) {
    this.productos = this.productoService.listar();
  }

}

