export class DetalleCompraDTO {
  unidades: number = 0;
  codigoPublicacionProducto: number = 0;

  constructor(unidades: number, codigoPublicacionProducto: number) {
    this.unidades = unidades;
    this.codigoPublicacionProducto = codigoPublicacionProducto;
  }
}
