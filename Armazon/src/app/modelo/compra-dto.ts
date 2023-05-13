import { DetalleCompraDTO } from './detalle-compra-dto';

export class CompraDTO {
  metodoPago: string[] = [];
  codigoUsuario: number = 0;

  detalleCompra: DetalleCompraDTO[] = [
    new DetalleCompraDTO(1, 3),
    new DetalleCompraDTO(1, 3),
  ];
}
