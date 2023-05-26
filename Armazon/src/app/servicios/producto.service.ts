//import { ProductoGetDTO } from '../modelo/producto-get-dto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ComentarioGetDTO } from '../modelo/comentario-get-dto';
import { ProductoGetDTO } from '../modelo/producto-get-dto';
import { PublicacionProductoGetDTO } from '../modelo/publicacion-producto-get-dto';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { PublicacionProductoDTO } from '../modelo/publicacion-producto-dto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private publiUrl = 'http://localhost:8081/api/publicacionproducto';

  productos: PublicacionProductoGetDTO[];
  categoria: any;

  constructor(private http: HttpClient) {
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
        )
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
        )
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
        )
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
        )
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
        )
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
        )
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
        )
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
        )
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

  public crearPublicacionProducto(
    publicacion: PublicacionProductoDTO
  ): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.publiUrl}/crear`, publicacion);
  }

  public obtenerpublicacion(codigo: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(
      `${this.publiUrl}/obtenerByCodigo/${codigo}`
    );
  }

  public eliminar(codigo: number): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(
      `${this.publiUrl}/eliminarAll/${codigo}`
    );
  }

  public actualizar(codigo: number, unidades: number): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(
      `${this.publiUrl}/actualizar/${unidades}`,
      codigo
    );
  }

  public listarPublicacionesCategoria(categoria: any): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(
      `${this.publiUrl}/listarPublicacionesCategoria/${categoria}`
    );
  }
  
  public listarPublicacionesCiudad(ciudad: any): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(
      `${this.publiUrl}/listarPublicacionesCategoria/${ciudad}`
    );
  }

  public listarPublicacionesPrecio(precio: number): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(
      `${this.publiUrl}/listarPublicacionesCategoria/${precio}`
    );
  }
}
