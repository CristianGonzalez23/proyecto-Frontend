//import { ProductoGetDTO } from '../modelo/producto-get-dto';
import { Injectable } from '@angular/core';
import { ComentarioGetDTO } from '../modelo/comentario-get-dto';
import { ProductoGetDTO } from '../modelo/producto-get-dto';
import { PublicacionProductoGetDTO } from '../modelo/publicacion-producto-get-dto';

@Injectable({
  providedIn: 'root'
})
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
        2,
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
    this.productos.push(
      new PublicacionProductoGetDTO(
        500000,
        20,
        'alguna descripcion',
        1,
        3,
        new ProductoGetDTO(
          3,
          'Medias de futbol',
          ['https://picsum.photos/450/225'],
          ['ROPA', 'DEPORTE'],
          ['BOGOTA']
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
        4,
        new ProductoGetDTO(
          4,
          'Guayos',
          ['https://picsum.photos/450/225'],
          ['ROPA', 'DEPORTE'],
          ['BOGOTA']
        ),
        new ComentarioGetDTO('algun texto', 0, 0, 0)
      )
    );
    this.productos.push(
      new PublicacionProductoGetDTO(
        5000000,
        20,
        'alguna descripcion',
        1,
        5,
        new ProductoGetDTO(
          5,
          'Terreneitor',
          ['https://picsum.photos/450/225'],
          ['TECNOLOGIA'],
          ['YOPAL']
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
        6,
        new ProductoGetDTO(
          6,
          'Maseta Baby Groot',
          ['https://picsum.photos/450/225'],
          ['HOGAR'],
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
        7,
        new ProductoGetDTO(
          7,
          'Xbox 360 Usado',
          ['https://picsum.photos/450/225'],
          ['TECNOLOGIA'],
          ['BOGOTA']
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
        8,
        new ProductoGetDTO(
          8,
          'Bandana Lebron James',
          ['https://picsum.photos/450/225'],
          ['ROPA', 'DEPORTE'],
          ['BOGOTA']
        ),
        new ComentarioGetDTO('algun texto', 0, 0, 0)
      )
    );
  }
  public listar(): PublicacionProductoGetDTO[] {
    return this.productos;
  }

  public obtener(codigo: number): PublicacionProductoGetDTO {
    // Busca la publicación correspondiente al código dado
    
    const publicacion = this.productos.find(
      (p) => p.productoGetDTO.codigo == codigo
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
