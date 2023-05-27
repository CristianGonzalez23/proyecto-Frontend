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
  productoAux: ProductoGetDTO = new ProductoGetDTO(
    'Prueba Producto',
    ['HOGAR'],
    ['algo.png'],
    [],
    ['ARMENIA']
  );

  constructor(private http: HttpClient) {
    this.productos = [];
    this.productos.push(
      new PublicacionProductoGetDTO(
        1,
        0,
        new Date(),
        100000,
        25,
        'Publicacion prueba description',
        1,
        1,
        'APROBADO',
        this.productoAux,
        []
      )
    );
    this.productos.push(
      new PublicacionProductoGetDTO(
        1,
        0,
        new Date(),
        100000,
        25,
        'Publicacion prueba description',
        1,
        1,
        'APROBADO',
        this.productoAux,
        []
      )
    );
    this.productos.push(
      new PublicacionProductoGetDTO(
        1,
        0,
        new Date(),
        100000,
        25,
        'Publicacion prueba description',
        1,
        1,
        'APROBADO',
        this.productoAux,
        []
      )
    );
    this.productos.push(
      new PublicacionProductoGetDTO(
        1,
        0,
        new Date(),
        100000,
        25,
        'Publicacion prueba description',
        1,
        1,
        'APROBADO',
        this.productoAux,
        []
      )
    );
    this.productos.push(
      new PublicacionProductoGetDTO(
        1,
        0,
        new Date(),
        100000,
        25,
        'Publicacion prueba description',
        1,
        1,
        'APROBADO',
        this.productoAux,
        []
      )
    );
    this.productos.push(
      new PublicacionProductoGetDTO(
        1,
        0,
        new Date(),
        100000,
        25,
        'Publicacion prueba description',
        1,
        1,
        'APROBADO',
        this.productoAux,
        []
      )
    );
    this.productos.push(
      new PublicacionProductoGetDTO(
        1,
        0,
        new Date(),
        100000,
        25,
        'Publicacion prueba description',
        1,
        1,
        'APROBADO',
        this.productoAux,
        []
      )
    );
    this.productos.push(
      new PublicacionProductoGetDTO(
        1,
        0,
        new Date(),
        100000,
        25,
        'Publicacion prueba description',
        1,
        1,
        'APROBADO',
        this.productoAux,
        []
      )
    );
  }
  public listar(): PublicacionProductoGetDTO[] {
    return this.productos;
  }

  public obtener(codigo: number): PublicacionProductoGetDTO {
    // Busca la publicación correspondiente al código dado

    const publicacion = this.productos.find((p) => p.codigoProducto == codigo);
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
