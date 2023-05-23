import { ComentarioDTO } from './comentario-dto';
import { ProductoDTO } from './producto-dto';


export class PublicacionProductoDTO {
  precio: number = 0;
  unidades: number = 0;
  descripcion: string = '';
  codigoVendedor: number = 0;
  codigoProducto: number = 0;
  imagenes: any;//mirar

  productoDTO: ProductoDTO = new ProductoDTO(
    'nombre1',
    ['imagen1'],
    ['categoria1'],
    ['ciudad1']
  );

  /*
  productoDTO: ProductoDTO = {
    nombre: "",
    imagen: [],
    categoria: [],
    ciudad: [],
  };*/
  comentarioDTO: ComentarioDTO = new ComentarioDTO( "texto: string",
    1,
    1,
    1
  );


  constructor(precio: number, unidades: number, descripcion: string, codigoVendedor: number, codigoProducto: number,
     productoDTO: ProductoDTO, comentarioDTO: ComentarioDTO) {
    this.precio = precio;
    this.descripcion = descripcion;
    this.codigoVendedor = codigoVendedor;
    this.codigoProducto = codigoProducto;
    this.productoDTO= productoDTO;
    this.comentarioDTO= comentarioDTO;
    
  }
}
