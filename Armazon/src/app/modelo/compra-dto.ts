import { DetalleCompraDTO } from './detalle-compra-dto';
import { PublicacionProductoGetDTO } from './publicacion-producto-get-dto';

export class CompraDTO {
  metodoPago: string[] = [];
  codigoUsuario: number = 0;
  detalleCompra: DetalleCompraDTO[] = [];

  constructor(
    metodoPago: string[],
    codigoUsuario: number,
    detalleCompra: DetalleCompraDTO[]
  ) {
    this.metodoPago = metodoPago;
    this.codigoUsuario = codigoUsuario;
    this.detalleCompra = detalleCompra;
  }
}
