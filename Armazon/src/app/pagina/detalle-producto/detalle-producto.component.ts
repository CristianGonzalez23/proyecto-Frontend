import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { DetalleCompraDTO } from 'src/app/modelo/detalle-compra-dto';
import { PublicacionProductoGetDTO } from 'src/app/modelo/publicacion-producto-get-dto';
import { ProductoDTO } from 'src/app/modelo/producto-dto';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ComentarioDTO } from 'src/app/modelo/comentario-dto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  codigoProducto: number = 0;
  publicacion: PublicacionProductoGetDTO;
  detalleCompra!: DetalleCompraDTO;
  isFavorite: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private carritoService: CarritoService,
    private productoService:ProductoService
  ) { 

      this.publicacion = productoService.obtener(1);

  }

  ngOnInit(): void {
    const codigo = this.route.snapshot.paramMap.get('codigo');
    this.codigoProducto = codigo ? parseInt(codigo) : 0;
    this.productoService.obtenerPublicacion(this.codigoProducto).subscribe({
      next: (data) => {
        this.publicacion = data.respuesta;
      },
      error: (error) => {
        console.log(error.error);
        console.log('Ocurrió un error al obtener la publicacion');
      },
    });
  }

  public agregarCarrito(){
    this.carritoService.agregar(this.codigoProducto);
    }
  
  quitarCarrito(): void {
    this.carritoService.quitar(this.codigoProducto);
  }

  getStarClass(starNumber: number): string {
    /*if (starNumber <= this.publicacion.comentarioGetDTO.estrellas) {
      return "filled-star";
    } else {
      return "empty-star";
    }*/
    return "";
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

}

