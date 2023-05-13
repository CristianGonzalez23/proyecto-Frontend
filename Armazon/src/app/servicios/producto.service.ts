import { Injectable } from '@angular/core';
import { ProductoDTO } from '../modelo/producto-dto';
import { PublicacionProductoDTO } from '../modelo/publicacion-producto-dto';
import { ComentarioDTO } from '../modelo/comentario-dto';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  // Lista de productos y publicaciones

  private productoDTO1: ProductoDTO = new ProductoDTO(
    'nombre',
    ['imagen1'],
    ['categoria1'],
    ['ciudad1']
  );

  private productoDTO2: ProductoDTO = new ProductoDTO(
    'nombre',
    ['imagen2'],
    ['categoria'],
    ['ciudad2']
  );

  private productoDTO3: ProductoDTO = new ProductoDTO(
    'nombre',
    ['imagen3'],
    ['categoria3'],
    ['ciudad3']
  );

  comentarioDTO: ComentarioDTO[] = [
    {
      texto: "",
      estrellas: 0,
      codigoUsuario: 0,
      codigoPublicacionProducto: 0
    }
  ];

  private productos: PublicacionProductoDTO[] = [
    { precio: 1, unidades: 1, descripcion: 'Descripción del producto 1', codigoVendedor: 1, codigoProducto: 1, productoDTO: this.productoDTO1, comentarioDTO: this.comentarioDTO},
    { precio: 1, unidades: 1, descripcion: 'Descripción del producto 1', codigoVendedor: 1, codigoProducto: 1, productoDTO: this.productoDTO1, comentarioDTO: this.comentarioDTO}, 
    { precio: 1, unidades: 1, descripcion: 'Descripción del producto 1', codigoVendedor: 1, codigoProducto: 1, productoDTO: this.productoDTO1, comentarioDTO: this.comentarioDTO}
  ]

  constructor() { }

  // Retorna el producto correspondiente al código especificado
  obtener(codigoProducto: number): PublicacionProductoDTO | undefined {
    return this.productos.find(p => p.codigoProducto === codigoProducto);
  }

}
