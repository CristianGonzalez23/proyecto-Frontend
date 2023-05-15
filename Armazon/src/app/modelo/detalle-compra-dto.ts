import { ComentarioDTO } from './comentario-dto';
import { ProductoDTO } from './producto-dto';
import { PublicacionProductoDTO } from './publicacion-producto-dto';
import { PublicacionProductoGetDTO } from './publicacion-producto-get-dto';

export class DetalleCompraDTO {
  unidades: number = 0;
  publicacionProducto: PublicacionProductoGetDTO;

  constructor(unidades: number, publicacionProducto: PublicacionProductoGetDTO) {
    this.unidades = unidades;
    this.publicacionProducto = publicacionProducto;
  }
}
