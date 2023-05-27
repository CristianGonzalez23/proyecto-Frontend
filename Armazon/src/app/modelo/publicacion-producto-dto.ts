import { ComentarioDTO } from './comentario-dto';
import { ProductoDTO } from './producto-dto';

export class PublicacionProductoDTO {
  codigoPublicacion: number = 0;
  promedioEstrellas: number = 0;
  fechaLimite: Date = new Date();
  precio: number = 0;
  disponibilidad: number = 0;
  descripcion: string = '';
  codigoVendedor: number = 1;
  codigoProducto: number = 1;
  productoDTO: ProductoDTO = new ProductoDTO('', [''], [''], ['']);
  comentarioDTO: ComentarioDTO[] = [];
/*
  constructor(
    promedioEstrellas: number,
    fechaLimite: Date,
    precio: number,
    disponibilidad: number,
    descripcion: string,
    codigoVendedor: number,
    codigoProducto: number,
    productoDTO: ProductoDTO,
    comentarioDTO: ComentarioDTO[]
  ) {
    this.promedioEstrellas = promedioEstrellas;
    this.fechaLimite = fechaLimite;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
    this.descripcion = descripcion;
    this.codigoVendedor = codigoVendedor;
    this.codigoProducto = codigoProducto;
    this.productoDTO = productoDTO;
    this.comentarioDTO = comentarioDTO;
  }*/
}
