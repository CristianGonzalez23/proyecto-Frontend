import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { DetalleCompraDTO } from 'src/app/modelo/detalle-compra-dto';
import { PublicacionProductoDTO } from 'src/app/modelo/publicacion-producto-dto';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { ComentarioDTO } from 'src/app/modelo/comentario-dto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  codigoProducto: number = 0;
  detalleCompra: DetalleCompraDTO = new DetalleCompraDTO(1, new PublicacionProductoDTO(0,0,"",0,0, new ProductoDTO("",[],[],[]), new ComentarioDTO("",0,0,0)));

  constructor(
    private route: ActivatedRoute,
    private carritoService: CarritoService
  ) { }

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

