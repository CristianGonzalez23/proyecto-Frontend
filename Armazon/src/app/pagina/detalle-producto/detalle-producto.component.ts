import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { DetalleCompraDTO } from 'src/app/modelo/detalle-compra-dto';
import { PublicacionProductoDTO } from 'src/app/modelo/publicacion-producto-dto';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { ComentarioDTO } from 'src/app/modelo/comentario-dto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  codigoProducto: number = 0;
  detalleCompra!: DetalleCompraDTO;

  constructor(
    private route: ActivatedRoute,
    private carritoService: CarritoService,
    private productoService:ProductoService
  ) { 

      this.codigoProducto = productoService.obtener(1).codigoProducto;

  }

  ngOnInit(): void {
    const codigo = this.route.snapshot.paramMap.get('codigo');
    this.codigoProducto = codigo ? parseInt(codigo) : 0;
  }

  public agregarCarrito(){
    this.carritoService.agregar(this.codigoProducto);
    }
  
  quitarCarrito(): void {
    this.carritoService.quitar(this.codigoProducto);
  }

}

