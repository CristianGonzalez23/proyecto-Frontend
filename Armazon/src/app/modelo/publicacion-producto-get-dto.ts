import { ComentarioGetDTO } from './comentario-get-dto';
import { ProductoGetDTO } from './producto-get-dto';

export class PublicacionProductoGetDTO {

    
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
    ['ciudad1'],
    
  );

  comentarioGetDTO: ComentarioGetDTO = new ComentarioGetDTO( "texto: string",
  1,
  1,
  1
);

  
  constructor(precio: number, unidades: number, descripcion: string, codigoVendedor: number, codigoProducto: number,
    productoGetDTO: ProductoGetDTO, comentarioGetDTO: ComentarioGetDTO) {
   this.precio = precio;
   this.descripcion = descripcion;
   this.codigoVendedor = codigoVendedor;
   this.codigoProducto = codigoProducto;
   this.productoGetDTO= productoGetDTO;
   this.comentarioGetDTO= comentarioGetDTO;
   
 }


}
