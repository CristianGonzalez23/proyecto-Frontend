import { ComentarioDTO } from './comentario-dto';
import { ProductoDTO } from './producto-dto';


export class PublicacionProductoDTO {
  precio: number = 0;
  unidades: number = 0;
  descripcion: string = '';
  codigoVendedor: number = 0;
  codigoProducto: number = 0;

  productoGetDTO: ProductoDTO = new ProductoDTO(
    '',
    [''],
    [''],
    ['']
  );

  /*
  productoDTO: ProductoDTO = {
    nombre: "",
    imagen: [],
    categoria: [],
    ciudad: [],
  };*/

}
