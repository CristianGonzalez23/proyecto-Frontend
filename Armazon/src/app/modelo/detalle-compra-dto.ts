import { ComentarioDTO } from './comentario-dto';
import { ProductoDTO } from './producto-dto';
import { PublicacionProductoDTO } from './publicacion-producto-dto';

export class DetalleCompraDTO {
  unidades: number = 0;
  //codigoPublicacionProducto: number = 0;

  publicacionProducto: PublicacionProductoDTO = new PublicacionProductoDTO(
    500000,
    20,
    'alguna descripcion',
    1,
    1,
    new ProductoDTO(
      
      'Televisor LG 4K',
      ['https://picsum.photos/450/225', 'https://picsum.photos/450/225'],
      ['TECNOLOGIA'],
      ['ARMENIA']
    ),
    new ComentarioDTO('algun texto', 0, 0, 0)
  );

  constructor(unidades: number, publicacionProducto: PublicacionProductoDTO) {
    this.unidades = unidades;
    this.publicacionProducto = publicacionProducto;
  }
}
