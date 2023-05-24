import { ComentarioGetDTO } from './comentario-get-dto';
import { ProductoDTO } from './producto-dto';
import { ProductoGetDTO } from './producto-get-dto';

export class PublicacionProductoGetDTO {

  codigo:number=0;
  precio: number = 0;
  unidades: number = 0;
  descripcion: string = '';
  codigoVendedor: number = 0;
  codigoProducto: number = 0;

  productoGetDTO: ProductoGetDTO = new ProductoGetDTO(
    1,
    'nombre1',
    ['imagen1'],
    ['categoria1'],
    ['ciudad1']
  );

  
  constructor(precio: number, unidades: number, descripcion: string, codigoVendedor: number, codigoProducto: number,
    productoDTO: ProductoGetDTO) {
   this.precio = precio;
   this.descripcion = descripcion;
   this.codigoVendedor = codigoVendedor;
   this.codigoProducto = codigoProducto;
   this.productoGetDTO= productoDTO;
   
 }


}
