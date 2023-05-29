import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { ProductoService } from './producto.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComentarioDTO } from '../modelo/comentario-dto';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {
  productos: number[];
  private favoURL = "http://localhost:8081/api/favorito";
  
  constructor(
    private http: HttpClient,
  ) {
    this.productos = [];
  }



    public agregarPublicacionFavorita(comentario : ComentarioDTO): Observable<MensajeDTO>{
      console.log("favService user "+comentario.codigoUsuario)
      console.log("favService publi "+comentario.codigoPublicacionProducto)
      return this.http.post<MensajeDTO>(`${this.favoURL}/agregar`,comentario);
    }

  public eliminarPublicacionFavorita(idUsuario:number, idPublicacion:number): Observable<MensajeDTO>{

    return this.http.get<MensajeDTO>(`${this.favoURL}/eliminar/${idUsuario}/${idPublicacion}`);
  }
  /*
  public listarFavoritos(): number[] {
    const favoritosProductos = this.productoService.listarMisPublicacionesFavoritas(); // Llama al método del ProductoService
    // Realiza otras operaciones con los favoritos obtenidos

    return this.productos; // Retorna los favoritos actuales
  }
*/
  
  public quitar(codigo: number){

    let indice = this.productos.indexOf(codigo);
    this.productos.splice(indice, 1);

  }

}
