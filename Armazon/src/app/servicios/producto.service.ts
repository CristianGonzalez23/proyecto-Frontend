//import { ProductoGetDTO } from '../modelo/producto-get-dto';
import { ComentarioGetDTO } from '../modelo/comentario-get-dto';
import { ProductoGetDTO } from '../modelo/producto-get-dto';
import { PublicacionProductoGetDTO } from '../modelo/publicacion-producto-get-dto';

export class ProductoService {
  productos: PublicacionProductoGetDTO[];
  constructor() {
    this.productos = [];
    this.productos.push(
      new PublicacionProductoGetDTO(
        500000,
        20,
        'alguna descripcion',
        1,
        1,
        new ProductoGetDTO(
          1,
          'Televisor LG 4K',
          ['https://picsum.photos/450/225', 'https://picsum.photos/450/225'],
          ['TECNOLOGIA'],
          ['ARMENIA']
        ),
        new ComentarioGetDTO('algun texto', 0, 0, 0)
      )
    );
    this.productos.push(
      new PublicacionProductoGetDTO(
        500000,
        20,
        'alguna descripcion',
        1,
        1,
        new ProductoGetDTO(
          2,
          'Tenis Nike',
          ['https://picsum.photos/450/225'],
          ['ROPA', 'DEPORTE'],
          ['BOGOTA']
        ),
        new ComentarioGetDTO('algun texto', 0, 0, 0)
      )
    );
    //CREE OTROS PRODUCTOS (AL MENOS 6 MÁS)
  }
  public listar(): PublicacionProductoGetDTO[] {
    return this.productos;
  }
  //FALTA CORREGIR EL METODO, SOLO LO CREE PARA ELIMINAR EL ERROR
  public obtener(codigo: number): PublicacionProductoGetDTO {
    // Busca la publicación correspondiente al código dado
    const publicacion = this.productos.find(
      (p) => p.productoGetDTO.codigo === codigo
    );
    // Lanza un error si no se encuentra la publicación
    if (!publicacion) {
      throw new Error(
        `No se encontró una publicación con el código ${codigo}.`
      );
    }

    // Devuelve la publicación encontrada
    return publicacion;
  }
}
